// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCouponItemListShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The coupon ID.
   * 
   * @example
   * 59104570
   */
  couponId?: number;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The list of enterprises and accounts. If this parameter is left empty, the current account is queried.
   */
  ecIdAccountIdsShrink?: string;
  /**
   * @remarks
   * The product name. Fuzzy match is supported.
   * 
   * @example
   * Elastic Compute Service
   */
  name?: string;
  /**
   * @remarks
   * The primary marketplace ID. If this parameter is left empty, the marketplace ID of the current user is used by default.
   * 
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @remarks
   * The number of items per page.
   * 
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

