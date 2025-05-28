// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddCouponDeductTagRequestEcIdAccountIds } from "./AddCouponDeductTagRequestEcIdAccountIds";
import { AddCouponDeductTagRequestTags } from "./AddCouponDeductTagRequestTags";


export class AddCouponDeductTagRequest extends $dara.Model {
  couponId?: string;
  ecIdAccountIds?: AddCouponDeductTagRequestEcIdAccountIds[];
  nbid?: string;
  tags?: AddCouponDeductTagRequestTags[];
  static names(): { [key: string]: string } {
    return {
      couponId: 'CouponId',
      ecIdAccountIds: 'EcIdAccountIds',
      nbid: 'Nbid',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponId: 'string',
      ecIdAccountIds: { 'type': 'array', 'itemType': AddCouponDeductTagRequestEcIdAccountIds },
      nbid: 'string',
      tags: { 'type': 'array', 'itemType': AddCouponDeductTagRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.ecIdAccountIds)) {
      $dara.Model.validateArray(this.ecIdAccountIds);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

