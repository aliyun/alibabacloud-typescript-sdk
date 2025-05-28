// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCouponDeductTagResponseBodyData } from "./ListCouponDeductTagResponseBodyData";


export class ListCouponDeductTagResponseBody extends $dara.Model {
  data?: ListCouponDeductTagResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListCouponDeductTagResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

