// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLicenseInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  licenseId?: string;
  static names(): { [key: string]: string } {
    return {
      licenseId: 'LicenseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      licenseId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

