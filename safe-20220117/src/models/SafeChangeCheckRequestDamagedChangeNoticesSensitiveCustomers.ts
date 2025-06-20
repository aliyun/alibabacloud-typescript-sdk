// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SafeChangeCheckRequestDamagedChangeNoticesSensitiveCustomersCustomerInfo } from "./SafeChangeCheckRequestDamagedChangeNoticesSensitiveCustomersCustomerInfo";


export class SafeChangeCheckRequestDamagedChangeNoticesSensitiveCustomers extends $dara.Model {
  customerInfo?: SafeChangeCheckRequestDamagedChangeNoticesSensitiveCustomersCustomerInfo[];
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      customerInfo: 'CustomerInfo',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerInfo: { 'type': 'array', 'itemType': SafeChangeCheckRequestDamagedChangeNoticesSensitiveCustomersCustomerInfo },
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

