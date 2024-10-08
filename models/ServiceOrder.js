const mongoose = require('mongoose');

const ServiceOrderSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  familyMember: {
    name: String,
    relationship: String
  },
  insuranceCompany: {
    name: String,
    coverageDetails: String
  },
  tests: [{
    name: String,
    method: String,
    analyzedBy: {
      name: String,
      employeeId: String
    }
  }],
  prescribedBy: {
    name: String,
    licenseNumber: String,
    affiliationInstitution: String,
    consultationModality: { type: String, enum: ['In-person', 'Telemedicine', 'Both'] }
  },
  dateCreated: { type: Date, default: Date.now },
  status: { type: String, enum: ['Pending', 'In Progress', 'Completed'], default: 'Pending' }
});

module.exports = mongoose.model('ServiceOrder', ServiceOrderSchema);