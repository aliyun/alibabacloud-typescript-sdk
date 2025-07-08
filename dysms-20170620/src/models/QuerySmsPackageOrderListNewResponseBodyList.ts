// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySmsPackageOrderListNewResponseBodyListSmsPackageOrderResponse } from "./QuerySmsPackageOrderListNewResponseBodyListSmsPackageOrderResponse";


export class QuerySmsPackageOrderListNewResponseBodyList extends $dara.Model {
  smsPackageOrderResponse?: QuerySmsPackageOrderListNewResponseBodyListSmsPackageOrderResponse[];
  static names(): { [key: string]: string } {
    return {
      smsPackageOrderResponse: 'SmsPackageOrderResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      smsPackageOrderResponse: { 'type': 'array', 'itemType': QuerySmsPackageOrderListNewResponseBodyListSmsPackageOrderResponse },
    };
  }

  validate() {
    if(Array.isArray(this.smsPackageOrderResponse)) {
      $dara.Model.validateArray(this.smsPackageOrderResponse);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

