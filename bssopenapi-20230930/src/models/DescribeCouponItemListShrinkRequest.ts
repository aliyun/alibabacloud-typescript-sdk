// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCouponItemListShrinkRequest extends $dara.Model {
  /**
   * @example
   * 59104570
   */
  couponId?: number;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  ecIdAccountIdsShrink?: string;
  name?: string;
  /**
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      couponId: 'CouponId',
      currentPage: 'CurrentPage',
      ecIdAccountIdsShrink: 'EcIdAccountIds',
      name: 'Name',
      nbid: 'Nbid',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponId: 'number',
      currentPage: 'number',
      ecIdAccountIdsShrink: 'string',
      name: 'string',
      nbid: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

