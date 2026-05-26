export const mapToDiabetesModel = (
  answers
) => {

  return {

    Age: 40,

    Gender: 1,

    Polyuria:
      answers.frequentUrination ? 1 : 0,

    Polydipsia:
      answers.excessiveThirst ? 1 : 0,

    "sudden weight loss":
      answers.weightLoss ? 1 : 0,

    weakness:
      answers.fatigue ? 1 : 0,

    Polyphagia:
      answers.excessiveHunger ? 1 : 0,

    "Genital thrush": 0,

    "visual blurring":
      answers.blurredVision ? 1 : 0,

    Itching: 0,

    Irritability: 0,

    "delayed healing":
      answers.slowHealing ? 1 : 0,

    "partial paresis":
      answers.numbness ? 1 : 0,

    "muscle stiffness":
      answers.muscleStiffness ? 1 : 0,

    Alopecia: 0,

    Obesity:
      answers.obesity ? 1 : 0

  };

};



export const mapToHypertensionModel = (answers) => ({

  male:
    answers.gender === "Male" ? 1 : 0,

  age:
    answers.ageGroup === "Below 30" ? 25 :
    answers.ageGroup === "30-45" ? 38 :
    answers.ageGroup === "46-60" ? 52 :
    67,

  education: 2,

  currentSmoker:
    answers.smoking ? 1 : 0,

  cigsPerDay:
    answers.smoking ? 10 : 0,

  BPMeds:
    answers.bpMedicine ? 1 : 0,

  prevalentStroke:
    answers.strokeHistory ? 1 : 0,

  prevalentHyp:
    answers.knownHypertension ? 1 : 0,

  diabetes:
    answers.knownDiabetes ? 1 : 0,

  BMI:
    answers.obesity ? 31 : 22,

  heartRate:
    answers.heartRateLevel === "High" ? 95 :
    answers.heartRateLevel === "Low" ? 60 :
    75,

  TenYearCHD: 0

});