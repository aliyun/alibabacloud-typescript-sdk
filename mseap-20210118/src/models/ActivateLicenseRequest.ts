// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ActivateLicenseRequest extends $dara.Model {
  /**
   * @example
   * P20211118170645000001
   */
  bizId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * esp.bookkeeping_course
   */
  bizType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * B09YICKLVHNR7ZQR
   */
  licenseCode?: string;
  licenseNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yunMarket
   */
  licensePublisher?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      licenseCode: 'LicenseCode',
      licenseNo: 'LicenseNo',
      licensePublisher: 'LicensePublisher',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      licenseCode: 'string',
      licenseNo: 'string',
      licensePublisher: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

