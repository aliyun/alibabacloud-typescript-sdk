// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewAppLicenseRequest extends $dara.Model {
  licenseItemIds?: string;
  orderIds?: string;
  purchaseMethod?: string;
  static names(): { [key: string]: string } {
    return {
      licenseItemIds: 'LicenseItemIds',
      orderIds: 'OrderIds',
      purchaseMethod: 'PurchaseMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      licenseItemIds: 'string',
      orderIds: 'string',
      purchaseMethod: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

