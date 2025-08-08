// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ActivateLicenseRequest extends $dara.Model {
  /**
   * @example
   * 129****1111
   */
  identification?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * APSEDH8TA5CSGK-********_6CNTACBH9EQPOATFXJQL4B2COE7M43VVQ7GUGKAA
   */
  licenseCode?: string;
  static names(): { [key: string]: string } {
    return {
      identification: 'Identification',
      licenseCode: 'LicenseCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identification: 'string',
      licenseCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

