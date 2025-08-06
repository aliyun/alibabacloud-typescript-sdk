// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewFreeLicenseRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appItemId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  licenseItemId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  validPeriod?: number;
  static names(): { [key: string]: string } {
    return {
      appItemId: 'AppItemId',
      licenseItemId: 'LicenseItemId',
      validPeriod: 'ValidPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appItemId: 'string',
      licenseItemId: 'string',
      validPeriod: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

