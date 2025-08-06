// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DelFreeLicenseRequest extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      appItemId: 'AppItemId',
      licenseItemId: 'LicenseItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appItemId: 'string',
      licenseItemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

