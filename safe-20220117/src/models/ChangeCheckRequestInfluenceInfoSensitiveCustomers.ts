// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChangeCheckRequestInfluenceInfoSensitiveCustomersCustomerInfo } from "./ChangeCheckRequestInfluenceInfoSensitiveCustomersCustomerInfo";


export class ChangeCheckRequestInfluenceInfoSensitiveCustomers extends $dara.Model {
  customerInfo?: ChangeCheckRequestInfluenceInfoSensitiveCustomersCustomerInfo[];
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      customerInfo: 'CustomerInfo',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerInfo: { 'type': 'array', 'itemType': ChangeCheckRequestInfluenceInfoSensitiveCustomersCustomerInfo },
      productCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customerInfo)) {
      $dara.Model.validateArray(this.customerInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

