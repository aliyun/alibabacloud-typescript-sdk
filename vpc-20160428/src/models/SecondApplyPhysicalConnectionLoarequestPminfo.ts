// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SecondApplyPhysicalConnectionLOARequestPMInfo extends $dara.Model {
  /**
   * @remarks
   * The ID number of the construction engineer. You can specify the ID number of an ID card or an international passport.
   * 
   * You can configure information for up to 16 construction engineers.
   * 
   * @example
   * 5****************9
   */
  PMCertificateNo?: string;
  /**
   * @remarks
   * The type of the identity document of the construction engineer. Valid values:
   * 
   * *   **IDCard**
   * *   **Passport**
   * 
   * @example
   * IDCard
   */
  PMCertificateType?: string;
  /**
   * @remarks
   * The contact information about the construction engineer.
   * 
   * @example
   * 1390000****
   */
  PMContactInfo?: string;
  /**
   * @remarks
   * The gender of the construction engineer.
   * 
   * @example
   * Male
   */
  PMGender?: string;
  /**
   * @remarks
   * The name of the construction engineer.
   * 
   * @example
   * Zhangsan
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

