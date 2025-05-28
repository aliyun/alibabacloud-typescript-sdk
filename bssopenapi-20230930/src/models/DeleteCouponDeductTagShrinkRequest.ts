// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCouponDeductTagShrinkRequest extends $dara.Model {
  couponId?: string;
  ecIdAccountIdsShrink?: string;
  nbid?: string;
  tagKeysShrink?: string;
  static names(): { [key: string]: string } {
    return {
      couponId: 'CouponId',
      ecIdAccountIdsShrink: 'EcIdAccountIds',
      nbid: 'Nbid',
      tagKeysShrink: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponId: 'string',
      ecIdAccountIdsShrink: 'string',
      nbid: 'string',
      tagKeysShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

