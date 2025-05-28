// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteCouponDeductTagRequestEcIdAccountIds } from "./DeleteCouponDeductTagRequestEcIdAccountIds";


export class DeleteCouponDeductTagRequest extends $dara.Model {
  couponId?: string;
  ecIdAccountIds?: DeleteCouponDeductTagRequestEcIdAccountIds[];
  nbid?: string;
  tagKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      couponId: 'CouponId',
      ecIdAccountIds: 'EcIdAccountIds',
      nbid: 'Nbid',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponId: 'string',
      ecIdAccountIds: { 'type': 'array', 'itemType': DeleteCouponDeductTagRequestEcIdAccountIds },
      nbid: 'string',
      tagKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ecIdAccountIds)) {
      $dara.Model.validateArray(this.ecIdAccountIds);
    }
    if(Array.isArray(this.tagKeys)) {
      $dara.Model.validateArray(this.tagKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

