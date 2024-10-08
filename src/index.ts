// index.ts

import { Laboratory, Patient, FamilyMember, InsuranceCompany, LabTechnician, Doctor, Test, ServiceOrder } from './types';

// Create a new laboratory
const lab = new Laboratory();

// Create a patient
const patient: Patient = {
  name: 'John Doe',
  address: '123 Main St, Anytown, USA',
  contact: '555-1234',
  healthPlan: 'HealthCare Plus',
  medicalHistory: 'No significant medical history',
  allergies: ['Penicillin'],
  age: 35,
  sex: 'Male',
  previousDiagnoses: ['Mild hypertension'],
  proceduresPerformed: ['Annual check-up'],
  medicationsUsed: ['Lisinopril']
};

// Create a family member
const familyMember: FamilyMember = {
  name: 'Jane Doe',
  address: '123 Main St, Anytown, USA',
  contact: '555-5678',
  relationshipToPatient: 'Spouse'
};

// Create an insurance company
const insuranceCompany: InsuranceCompany = {
  name: 'MediCover Inc.',
  coverageDetails: 'Full coverage for standard tests'
};

// Create a lab technician
const labTechnician: LabTechnician = {
  name: 'Alice Smith',
  address: '456 Lab Lane, Testville, USA',
  contact: '555-9876',
  employeeId: 'LT001',
  specialization: 'Hematology'
};

// Create a doctor
const doctor: Doctor = {
  name: 'Dr. Robert Johnson',
  address: '789 Hospital Road, Medicity, USA',
  contact: '555-4321',
  licenseNumber: 'MD12345',
  affiliationInstitution: 'Citywide Hospital',
  consultationModality: 'Both'
};

// Create a test
const test: Test = {
  name: 'Complete Blood Count',
  method: 'Automated hematology analyzer',
  analyzedBy: labTechnician
};

// Create a service order
const serviceOrder: ServiceOrder = {
  id: 'SO001',
  patient: patient,
  familyMember: familyMember,
  insuranceCompany: insuranceCompany,
  tests: [test],
  prescribedBy: doctor,
  dateCreated: new Date(),
  status: 'Pending'
};

// Add the service order to the laboratory
lab.createServiceOrder(serviceOrder);

// Update the status of the service order
lab.updateServiceOrderStatus('SO001', 'In Progress');

console.log('Service Order created and updated:', lab.getServiceOrder('SO001'));