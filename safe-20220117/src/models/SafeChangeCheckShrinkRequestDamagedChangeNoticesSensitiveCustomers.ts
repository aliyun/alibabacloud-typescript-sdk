// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SafeChangeCheckShrinkRequestDamagedChangeNoticesSensitiveCustomersCustomerInfo } from "./SafeChangeCheckShrinkRequestDamagedChangeNoticesSensitiveCustomersCustomerInfo";


export class SafeChangeCheckShrinkRequestDamagedChangeNoticesSensitiveCustomers extends $dara.Model {
  customerInfo?: SafeChangeCheckShrinkRequestDamagedChangeNoticesSensitiveCustomersCustomerInfo[];
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      customerInfo: 'CustomerInfo',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerInfo: { 'type': 'array', 'itemType': SafeChangeCheckShrinkRequestDamagedChangeNoticesSensitiveCustomersCustomerInfo },
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

