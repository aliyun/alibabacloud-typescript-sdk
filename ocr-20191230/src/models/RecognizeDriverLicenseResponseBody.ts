// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizeDriverLicenseResponseBodyDataBackResult extends $dara.Model {
  /**
   * @example
   * 130601473955
   */
  archiveNumber?: string;
  /**
   * @example
   * 210288898898898888
   */
  cardNumber?: string;
  name?: string;
  record?: string;
  static names(): { [key: string]: string } {
    return {
      archiveNumber: 'ArchiveNumber',
      cardNumber: 'CardNumber',
      name: 'Name',
      record: 'Record',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveNumber: 'string',
      cardNumber: 'string',
      name: 'string',
      record: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDriverLicenseResponseBodyDataFaceResult extends $dara.Model {
  address?: string;
  birthDate?: string;
  /**
   * @example
   * 20190201
   */
  endDate?: string;
  gender?: string;
  /**
   * @example
   * 20130208
   */
  issueDate?: string;
  issueUnit?: string;
  /**
   * @example
   * 210288898898898888
   */
  licenseNumber?: string;
  name?: string;
  nationality?: string;
  /**
   * @example
   * 20130208
   */
  startDate?: string;
  /**
   * @example
   * C1
   */
  vehicleType?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      birthDate: 'BirthDate',
      endDate: 'EndDate',
      gender: 'Gender',
      issueDate: 'IssueDate',
      issueUnit: 'IssueUnit',
      licenseNumber: 'LicenseNumber',
      name: 'Name',
      nationality: 'Nationality',
      startDate: 'StartDate',
      vehicleType: 'VehicleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      birthDate: 'string',
      endDate: 'string',
      gender: 'string',
      issueDate: 'string',
      issueUnit: 'string',
      licenseNumber: 'string',
      name: 'string',
      nationality: 'string',
      startDate: 'string',
      vehicleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDriverLicenseResponseBodyData extends $dara.Model {
  backResult?: RecognizeDriverLicenseResponseBodyDataBackResult;
  faceResult?: RecognizeDriverLicenseResponseBodyDataFaceResult;
  static names(): { [key: string]: string } {
    return {
      backResult: 'BackResult',
      faceResult: 'FaceResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backResult: RecognizeDriverLicenseResponseBodyDataBackResult,
      faceResult: RecognizeDriverLicenseResponseBodyDataFaceResult,
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

export class RecognizeDriverLicenseResponseBody extends $dara.Model {
  data?: RecognizeDriverLicenseResponseBodyData;
  /**
   * @example
   * 374D8C7E-9ECC-4750-A87F-50571702F175
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
      data: RecognizeDriverLicenseResponseBodyData,
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

