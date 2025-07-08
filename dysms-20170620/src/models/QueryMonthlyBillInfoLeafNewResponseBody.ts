// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMonthlyBillInfoLeafNewResponseBodyLayeredBillDOList } from "./QueryMonthlyBillInfoLeafNewResponseBodyLayeredBillDolist";


export class QueryMonthlyBillInfoLeafNewResponseBody extends $dara.Model {
  couponPayment?: string;
  isSeparatedPrice?: boolean;
  layeredBillDOList?: QueryMonthlyBillInfoLeafNewResponseBodyLayeredBillDOList[];
  packageAmount?: string;
  realPayment?: string;
  requestId?: string;
  totalPayment?: string;
  static names(): { [key: string]: string } {
    return {
      couponPayment: 'CouponPayment',
      isSeparatedPrice: 'IsSeparatedPrice',
      layeredBillDOList: 'LayeredBillDOList',
      packageAmount: 'PackageAmount',
      realPayment: 'RealPayment',
      requestId: 'RequestId',
      totalPayment: 'TotalPayment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponPayment: 'string',
      isSeparatedPrice: 'boolean',
      layeredBillDOList: { 'type': 'array', 'itemType': QueryMonthlyBillInfoLeafNewResponseBodyLayeredBillDOList },
      packageAmount: 'string',
      realPayment: 'string',
      requestId: 'string',
      totalPayment: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.layeredBillDOList)) {
      $dara.Model.validateArray(this.layeredBillDOList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

