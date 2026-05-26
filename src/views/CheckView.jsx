import React, { useState } from "react";
import { api } from "../services/api";
import {
  mapToDiabetesModel,
  mapToHypertensionModel
} from "../utils/mlMappings";
export default function CheckView({
  user,
  onNewPredictionSaved,
  setActiveTab
}) {

  const [step, setStep] = useState(1);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [predictionResults,
    setPredictionResults] = useState(null);

  // ===================================================
  // ALL SCREENING ANSWERS
  // ===================================================

  const [answers, setAnswers] = useState({

    // =========================
    // DIABETES QUESTIONS
    // =========================

    frequentUrination: false,
    excessiveThirst: false,
    weightLoss: false,
    fatigue: false,
    polyphagia: false,
    blurredVision: false,
    slowHealing: false,
    partialParesis: false,
    muscleStiffness: false,
    obesity: false,

    familyHistoryDiabetes: false,

    // =========================
    // HYPERTENSION QUESTIONS
    // =========================

    ageGroup: "30-45",

    gender: "Female",

    smoking: false,

    alcohol: false,

    stressLevel: "Normal",

    headaches: false,

    dizziness: false,

    physicalActivity: "Medium",

    saltIntake: "Normal",

    familyHistoryBP: false,

    bpMedicine: false,

    strokeHistory: false,

    knownHypertension: false,

    knownDiabetes: false,

    heartRateLevel: "Normal",
  });

  // ===================================================
  // HELPERS
  // ===================================================

  const handleToggle = (key) => {

    setAnswers(prev => ({
      ...prev,
      [key]: !prev[key]
    }));

  };

  const handleSelectVal = (
    key,
    value
  ) => {

    setAnswers(prev => ({
      ...prev,
      [key]: value
    }));

  };

  const getProgressWidth = () => {

    if (step === 1) return "33%";

    if (step === 2) return "66%";

    return "100%";

  };

  // ===================================================
  // SUBMIT
  // ===================================================

  const handleSubmit = async () => {

  setLoading(true);

  setError("");

  try {

    // =========================================
    // MAP FRONTEND ANSWERS
    // =========================================

    const diabetesData =
      mapToDiabetesModel(
        answers
      );

    const hypertensionData =
      mapToHypertensionModel(
        answers
      );

    console.log(
      "Diabetes Payload:",
      diabetesData
    );

    console.log(
      "Hypertension Payload:",
      hypertensionData
    );

    // =========================================
    // SEND TO BACKEND
    // =========================================

    const result =
      await api.predictML({

        diabetes:
          diabetesData,

        hypertension:
          hypertensionData

      });

    console.log(
      "Prediction Result:",
      result
    );

    // =========================================
    // SAVE RESULTS
    // =========================================

    setPredictionResults(
      result.result
    );

    setStep(4);

  } catch (err) {

    console.log(err);

    setError(
      "Prediction failed"
    );

  } finally {

    setLoading(false);

  }

};

  // ===================================================
  // RESTART
  // ===================================================

  const restartWizard = () => {

    window.location.reload();

  };

  return (

    <>

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <div className="action-banner">

        <button
          className="back-button"
          onClick={() =>
            setActiveTab("home")
          }
        >

          ← Back

        </button>

        <h1 style={{
          fontSize: "20px"
        }}>
          ML Health Screening
        </h1>

        <p style={{
          color:
            "rgba(255,255,255,0.8)"
        }}>
          Cardiovascular & diabetes risk prediction
        </p>

        {step < 4 && (

          <div className="wizard-header-progress">

            <div
              className="wizard-progress-bar"
              style={{
                width:
                  getProgressWidth()
              }}
            ></div>

          </div>

        )}

      </div>

      {/* ================================================= */}
      {/* CARD */}
      {/* ================================================= */}

      <div className="screening-wizard-card">

        {/* ================================================= */}
        {/* STEP 1 */}
        {/* ================================================= */}

        {step === 1 && (

          <div>

            <div className="wizard-step-info">
              STEP 1 OF 3: DIABETES SCREENING
            </div>

            <h3 className="wizard-question-text">
              Select symptoms you experience regularly:
            </h3>

            <div className="symptom-toggle-list">

              {[
                ["frequentUrination",
                  "Frequent urination (especially at night)"],

                ["excessiveThirst",
                  "Excessive / unquenchable thirst"],

                ["weightLoss",
                  "Rapid unexplained weight loss"],

                ["fatigue",
                  "Frequent tiredness / weakness"],

                ["polyphagia",
                  "Feeling hungry very often"],

                ["blurredVision",
                  "Blurred vision sometimes"],

                ["slowHealing",
                  "Cuts/wounds heal slowly"],

                ["partialParesis",
                  "Tingling or numbness in hands/legs"],

                ["muscleStiffness",
                  "Frequent muscle stiffness"],

                ["obesity",
                  "Are you overweight or obese?"],

                ["familyHistoryDiabetes",
                  "Family history of diabetes"]

              ].map(([key, label]) => (

                <div
                  key={key}
                  className={`symptom-toggle-row ${
                    answers[key]
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleToggle(key)
                  }
                >

                  <span className="symptom-label">
                    {label}
                  </span>

                  <div className="checkbox-indicator"></div>

                </div>

              ))}

            </div>

            <div className="wizard-navigation-buttons">

              <button
                className="btn-primary"
                onClick={() =>
                  setStep(2)
                }
              >
                Continue
              </button>

            </div>

          </div>

        )}

        {/* ================================================= */}
        {/* STEP 2 */}
        {/* ================================================= */}

        {step === 2 && (

          <div>

            <div className="wizard-step-info">
              STEP 2 OF 3: HYPERTENSION SCREENING
            </div>

            <h3 className="wizard-question-text">
              Configure cardiovascular risk indicators:
            </h3>

            {/* AGE */}

            <div className="auth-form-group">

              <label className="auth-form-label">
                Age Group
              </label>

              <div className="level-button-grid">

                {[
                  "Below 30",
                  "30-45",
                  "46-60",
                  "Above 60"
                ].map(level => (

                  <button
                    key={level}
                    type="button"
                    className={`level-btn ${
                      answers.ageGroup === level
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      handleSelectVal(
                        "ageGroup",
                        level
                      )
                    }
                  >

                    {level}

                  </button>

                ))}

              </div>

            </div>

            {/* GENDER */}

            <div className="auth-form-group">

              <label className="auth-form-label">
                Gender
              </label>

              <div className="level-button-grid">

                {[
                  "Male",
                  "Female"
                ].map(level => (

                  <button
                    key={level}
                    type="button"
                    className={`level-btn ${
                      answers.gender === level
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      handleSelectVal(
                        "gender",
                        level
                      )
                    }
                  >

                    {level}

                  </button>

                ))}

              </div>

            </div>

            {/* BOOLEAN QUESTIONS */}

            <div className="symptom-toggle-list">

              {[
                ["smoking",
                  "Do you smoke tobacco?"],

                ["alcohol",
                  "Do you consume alcohol frequently?"],

                ["headaches",
                  "Frequent headaches"],

                ["dizziness",
                  "Frequent dizziness"],

                ["familyHistoryBP",
                  "Family history of high BP"],

                ["bpMedicine",
                  "Do you take BP medicine?"],

                ["strokeHistory",
                  "Previous stroke history"],

                ["knownHypertension",
                  "Previously diagnosed high BP"],

                ["knownDiabetes",
                  "Previously diagnosed diabetes"]

              ].map(([key, label]) => (

                <div
                  key={key}
                  className={`symptom-toggle-row ${
                    answers[key]
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleToggle(key)
                  }
                >

                  <span className="symptom-label">
                    {label}
                  </span>

                  <div className="checkbox-indicator"></div>

                </div>

              ))}

            </div>

            <div className="wizard-navigation-buttons">

              <button
                className="btn-secondary"
                onClick={() =>
                  setStep(1)
                }
              >
                Back
              </button>

              <button
                className="btn-primary"
                onClick={() =>
                  setStep(3)
                }
              >
                Continue
              </button>

            </div>

          </div>

        )}

        {/* ================================================= */}
        {/* STEP 3 */}
        {/* ================================================= */}

        {step === 3 && (

          <div>

            <div className="wizard-step-info">
              STEP 3 OF 3: HABITS & LIFESTYLE
            </div>

            <h3 className="wizard-question-text">
              Configure lifestyle habits:
            </h3>

            {/* PHYSICAL */}

            <div className="auth-form-group">

              <label className="auth-form-label">
                Physical Activity
              </label>

              <div className="level-button-grid">

                {[
                  "Low",
                  "Medium",
                  "High"
                ].map(level => (

                  <button
                    key={level}
                    type="button"
                    className={`level-btn ${
                      answers.physicalActivity === level
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      handleSelectVal(
                        "physicalActivity",
                        level
                      )
                    }
                  >

                    {level}

                  </button>

                ))}

              </div>

            </div>

            {/* SALT */}

            <div className="auth-form-group">

              <label className="auth-form-label">
                Salt Intake
              </label>

              <div className="level-button-grid">

                {[
                  "Low",
                  "Normal",
                  "High"
                ].map(level => (

                  <button
                    key={level}
                    type="button"
                    className={`level-btn ${
                      answers.saltIntake === level
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      handleSelectVal(
                        "saltIntake",
                        level
                      )
                    }
                  >

                    {level}

                  </button>

                ))}

              </div>

            </div>

            {/* STRESS */}

            <div className="auth-form-group">

              <label className="auth-form-label">
                Stress Level
              </label>

              <div className="level-button-grid">

                {[
                  "Low",
                  "Normal",
                  "High"
                ].map(level => (

                  <button
                    key={level}
                    type="button"
                    className={`level-btn ${
                      answers.stressLevel === level
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      handleSelectVal(
                        "stressLevel",
                        level
                      )
                    }
                  >

                    {level}

                  </button>

                ))}

              </div>

            </div>

            {/* HEART RATE */}

            <div className="auth-form-group">

              <label className="auth-form-label">
                Heart Rate Level
              </label>

              <div className="level-button-grid">

                {[
                  "Low",
                  "Normal",
                  "High"
                ].map(level => (

                  <button
                    key={level}
                    type="button"
                    className={`level-btn ${
                      answers.heartRateLevel === level
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      handleSelectVal(
                        "heartRateLevel",
                        level
                      )
                    }
                  >

                    {level}

                  </button>

                ))}

              </div>

            </div>

            {error && (

              <p style={{
                color: "red"
              }}>
                {error}
              </p>

            )}

            <div className="wizard-navigation-buttons">

              <button
                className="btn-secondary"
                onClick={() =>
                  setStep(2)
                }
              >
                Back
              </button>

              <button
                className="btn-primary"
                onClick={handleSubmit}
              >

                {loading
                  ? "Analyzing..."
                  : "Submit Screening"}

              </button>

            </div>

          </div>

        )}

        {/* ================================================= */}
        {/* STEP 4 */}
        {/* ================================================= */}

        {step === 4 && predictionResults && (

          <div>

            <h2>
              Screening Results
            </h2>

            <div className="results-grid">

              <div className="results-risk-card">

                <h3>Diabetes Risk</h3>

                <div className="score-percentage">
                  {predictionResults.diabetesRisk}
                </div>

              </div>

              <div className="results-risk-card">

                <h3>Hypertension Risk</h3>

                <div className="score-percentage">
                  {predictionResults.hypertensionRisk}
                </div>

              </div>

            </div>

            <div className="medical-disclaimer-box">

              This system is only for early health screening and is not a medical diagnosis.

            </div>

            <div className="wizard-navigation-buttons">

              <button
                className="btn-secondary"
                onClick={restartWizard}
              >
                New Screening
              </button>

              <button
                className="btn-primary"
                onClick={() =>
                  setActiveTab("home")
                }
              >
                Dashboard
              </button>

            </div>

          </div>

        )}

      </div>

    </>

  );

}