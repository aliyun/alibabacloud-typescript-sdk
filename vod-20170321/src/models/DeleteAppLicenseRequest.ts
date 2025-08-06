// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppLicenseRequest extends $dara.Model {
  appItemId?: string;
  licenseItemIds?: string;
  static names(): { [key: string]: string } {
    return {
      appItemId: 'AppItemId',
      licenseItemIds: 'LicenseItemIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appItemId: 'string',
      licenseItemIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

