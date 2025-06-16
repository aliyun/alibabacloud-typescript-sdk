// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePhysicalConnectionLOAResponseBodyPhysicalConnectionLOATypePMInfoPMInfo extends $dara.Model {
  /**
   * @remarks
   * The identity document number of the construction worker.
   * 
   * @example
   * 12345671****
   */
  PMCertificateNo?: string;
  /**
   * @remarks
   * The identity document type of the construction worker. Valid values:
   * 
   * *   **IDCard**
   * *   **Passport**
   * *   **Other**
   * 
   * @example
   * Other
   */
  PMCertificateType?: string;
  /**
   * @remarks
   * The phone number of the construction worker.
   * 
   * @example
   * 18910010****
   */
  PMContactInfo?: string;
  /**
   * @remarks
   * The gender of the construction worker. Valid values:
   * 
   * *   **Male**
   * *   **Female**
   * 
   * @example
   * Male
   */
  PMGender?: string;
  /**
   * @remarks
   * The name of the construction worker.
   * 
   * @example
   * name
   */
  PMName?: string;
  static names(): { [key: string]: string } {
    return {
      PMCertificateNo: 'PMCertificateNo',
      PMCertificateType: 'PMCertificateType',
      PMContactInfo: 'PMContactInfo',
      PMGender: 'PMGender',
      PMName: 'PMName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      PMCertificateNo: 'string',
      PMCertificateType: 'string',
      PMContactInfo: 'string',
      PMGender: 'string',
      PMName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

