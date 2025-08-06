// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLicensePurchaseStatusRequest extends $dara.Model {
  licenseItemIds?: string;
  static names(): { [key: string]: string } {
    return {
      licenseItemIds: 'LicenseItemIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

