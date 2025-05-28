// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCouponDeductTagRequestEcIdAccountIds } from "./ListCouponDeductTagRequestEcIdAccountIds";


export class ListCouponDeductTagRequest extends $dara.Model {
  couponId?: string;
  ecIdAccountIds?: ListCouponDeductTagRequestEcIdAccountIds[];
  nbid?: string;
  static names(): { [key: string]: string } {
    return {
      couponId: 'CouponId',
      ecIdAccountIds: 'EcIdAccountIds',
      nbid: 'Nbid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponId: 'string',
      ecIdAccountIds: { 'type': 'array', 'itemType': ListCouponDeductTagRequestEcIdAccountIds },
      nbid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ecIdAccountIds)) {
      $dara.Model.validateArray(this.ecIdAccountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

