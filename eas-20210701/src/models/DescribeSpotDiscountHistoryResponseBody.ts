// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSpotDiscountHistoryResponseBodySpotDiscounts } from "./DescribeSpotDiscountHistoryResponseBodySpotDiscounts";


export class DescribeSpotDiscountHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82***
   */
  requestId?: string;
  /**
   * @remarks
   * The discount for the preemptible instance.
   */
  spotDiscounts?: DescribeSpotDiscountHistoryResponseBodySpotDiscounts[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      spotDiscounts: 'SpotDiscounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      spotDiscounts: { 'type': 'array', 'itemType': DescribeSpotDiscountHistoryResponseBodySpotDiscounts },
    };
  }

  validate() {
    if(Array.isArray(this.spotDiscounts)) {
      $dara.Model.validateArray(this.spotDiscounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

