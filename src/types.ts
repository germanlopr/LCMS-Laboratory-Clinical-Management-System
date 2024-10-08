// types.ts

export interface Person {
  name: string;
  address: string;
  contact: string;
}

export interface Patient extends Person {
  healthPlan: string;
  medicalHistory: string;
  allergies: string[];
  age: number;
  sex: 'Male' | 'Female' | 'Other';
  previousDiagnoses: string[];
  proceduresPerformed: string[];
  medicationsUsed: string[];
}

export interface FamilyMember extends Person {
  relationshipToPatient: string;
}

export interface InsuranceCompany {
  name: string;
  coverageDetails: string;
}

export interface LabTechnician extends Person {
  employeeId: string;
  specialization: string;
}

export interface Doctor extends Person {
  licenseNumber: string;
  affiliationInstitution: string;
  consultationModality: 'In-person' | 'Telemedicine' | 'Both';
}

export interface Test {
  name: string;
  method: string;
  analyzedBy: LabTechnician;
}

export interface ServiceOrder {
  id: string;
  patient: Patient;
  familyMember?: FamilyMember;
  insuranceCompany: InsuranceCompany;
  tests: Test[];
  prescribedBy: Doctor;
  dateCreated: Date;
  status: 'Pending' | 'In Progress' | 'Completed';
}

export class Laboratory {
  private serviceOrders: ServiceOrder[] = [];

  createServiceOrder(serviceOrder: ServiceOrder): void {
    this.serviceOrders.push(serviceOrder);
  }

  getServiceOrder(id: string): ServiceOrder | undefined {
    return this.serviceOrders.find(order => order.id === id);
  }

  updateServiceOrderStatus(id: string, status: ServiceOrder['status']): void {
    const order = this.getServiceOrder(id);
    if (order) {
      order.status = status;
    }
  }

  assignTestToTechnician(orderId: string, testName: string, technician: LabTechnician): void {
    const order = this.getServiceOrder(orderId);
    if (order) {
      const test = order.tests.find(t => t.name === testName);
      if (test) {
        test.analyzedBy = technician;
      }
    }
  }
}