const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  contact: { type: String, required: true },
  healthPlan: { type: String, required: true },
  medicalHistory: { type: String },
  allergies: [String],
  age: { type: Number, required: true },
  sex: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  previousDiagnoses: [String],
  proceduresPerformed: [String],
  medicationsUsed: [String]
});

module.exports = mongoose.model('Patient', PatientSchema);