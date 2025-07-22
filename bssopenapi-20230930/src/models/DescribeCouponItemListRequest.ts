// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCouponItemListRequestEcIdAccountIds extends $dara.Model {
  accountIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1004064243473974
   */
  ecId?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      ecId: 'EcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'number' },
      ecId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCouponItemListRequest extends $dara.Model {
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
  ecIdAccountIds?: DescribeCouponItemListRequestEcIdAccountIds[];
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
      ecIdAccountIds: 'EcIdAccountIds',
      name: 'Name',
      nbid: 'Nbid',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponId: 'number',
      currentPage: 'number',
      ecIdAccountIds: { 'type': 'array', 'itemType': DescribeCouponItemListRequestEcIdAccountIds },
      name: 'string',
      nbid: 'string',
      pageSize: 'number',
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

