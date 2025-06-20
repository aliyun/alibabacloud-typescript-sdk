// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SafeChangeCheckRequestInfluenceInfoSensitiveCustomersCustomerInfo } from "./SafeChangeCheckRequestInfluenceInfoSensitiveCustomersCustomerInfo";


export class SafeChangeCheckRequestInfluenceInfoSensitiveCustomers extends $dara.Model {
  customerInfo?: SafeChangeCheckRequestInfluenceInfoSensitiveCustomersCustomerInfo[];
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      customerInfo: 'CustomerInfo',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerInfo: { 'type': 'array', 'itemType': SafeChangeCheckRequestInfluenceInfoSensitiveCustomersCustomerInfo },
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

