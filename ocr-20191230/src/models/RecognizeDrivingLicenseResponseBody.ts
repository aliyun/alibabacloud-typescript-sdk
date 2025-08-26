// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizeDrivingLicenseResponseBodyDataBackResult extends $dara.Model {
  /**
   * @example
   * 300
   */
  approvedLoad?: string;
  /**
   * @example
   * 5
   */
  approvedPassengerCapacity?: string;
  /**
   * @example
   * -
   */
  energyType?: string;
  fileNumber?: string;
  /**
   * @example
   * 2205
   */
  grossMass?: string;
  inspectionRecord?: string;
  /**
   * @example
   * 4945x1845x1480
   */
  overallDimension?: string;
  plateNumber?: string;
  /**
   * @example
   * 100
   */
  tractionMass?: string;
  /**
   * @example
   * 2000
   */
  unladenMass?: string;
  static names(): { [key: string]: string } {
    return {
      approvedLoad: 'ApprovedLoad',
      approvedPassengerCapacity: 'ApprovedPassengerCapacity',
      energyType: 'EnergyType',
      fileNumber: 'FileNumber',
      grossMass: 'GrossMass',
      inspectionRecord: 'InspectionRecord',
      overallDimension: 'OverallDimension',
      plateNumber: 'PlateNumber',
      tractionMass: 'TractionMass',
      unladenMass: 'UnladenMass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvedLoad: 'string',
      approvedPassengerCapacity: 'string',
      energyType: 'string',
      fileNumber: 'string',
      grossMass: 'string',
      inspectionRecord: 'string',
      overallDimension: 'string',
      plateNumber: 'string',
      tractionMass: 'string',
      unladenMass: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDrivingLicenseResponseBodyDataFaceResult extends $dara.Model {
  address?: string;
  /**
   * @example
   * 111111
   */
  engineNumber?: string;
  /**
   * @example
   * 20180313
   */
  issueDate?: string;
  model?: string;
  owner?: string;
  plateNumber?: string;
  /**
   * @example
   * 20180312
   */
  registerDate?: string;
  useCharacter?: string;
  vehicleType?: string;
  /**
   * @example
   * SSVUDDTT2J2022555
   */
  vin?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      engineNumber: 'EngineNumber',
      issueDate: 'IssueDate',
      model: 'Model',
      owner: 'Owner',
      plateNumber: 'PlateNumber',
      registerDate: 'RegisterDate',
      useCharacter: 'UseCharacter',
      vehicleType: 'VehicleType',
      vin: 'Vin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      engineNumber: 'string',
      issueDate: 'string',
      model: 'string',
      owner: 'string',
      plateNumber: 'string',
      registerDate: 'string',
      useCharacter: 'string',
      vehicleType: 'string',
      vin: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDrivingLicenseResponseBodyData extends $dara.Model {
  backResult?: RecognizeDrivingLicenseResponseBodyDataBackResult;
  faceResult?: RecognizeDrivingLicenseResponseBodyDataFaceResult;
  static names(): { [key: string]: string } {
    return {
      backResult: 'BackResult',
      faceResult: 'FaceResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backResult: RecognizeDrivingLicenseResponseBodyDataBackResult,
      faceResult: RecognizeDrivingLicenseResponseBodyDataFaceResult,
    };
  }

  validate() {
    if(this.backResult && typeof (this.backResult as any).validate === 'function') {
      (this.backResult as any).validate();
    }
    if(this.faceResult && typeof (this.faceResult as any).validate === 'function') {
      (this.faceResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDrivingLicenseResponseBody extends $dara.Model {
  data?: RecognizeDrivingLicenseResponseBodyData;
  /**
   * @example
   * 1DD989C1-4E08-4E04-9D5D-314901E91226
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeDrivingLicenseResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

