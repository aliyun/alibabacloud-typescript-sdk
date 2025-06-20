// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChangeCheckShrinkRequestInfluenceInfoSensitiveCustomersCustomerInfo } from "./ChangeCheckShrinkRequestInfluenceInfoSensitiveCustomersCustomerInfo";


export class ChangeCheckShrinkRequestInfluenceInfoSensitiveCustomers extends $dara.Model {
  customerInfo?: ChangeCheckShrinkRequestInfluenceInfoSensitiveCustomersCustomerInfo[];
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      customerInfo: 'CustomerInfo',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerInfo: { 'type': 'array', 'itemType': ChangeCheckShrinkRequestInfluenceInfoSensitiveCustomersCustomerInfo },
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

