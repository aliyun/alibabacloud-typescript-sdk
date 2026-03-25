// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCouponShrinkRequest extends $dara.Model {
  /**
   * @example
   * 351430260343
   */
  couponId?: number;
  /**
   * @example
   * 554863270150
   */
  couponNo?: string;
  /**
   * @example
   * CERTAIN
   */
  couponType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  ecIdAccountIdsShrink?: string;
  /**
   * @example
   * 1708423156000
   */
  effectiveEndTime?: number;
  /**
   * @example
   * 1684750028000
   */
  effectiveStartTime?: number;
  /**
   * @example
   * 1708423156000
   */
  expireEndDate?: number;
  /**
   * @example
   * 1684750028000
   */
  expireStartDate?: number;
  maxResults?: number;
  /**
   * @example
   * 2684201000001
   */
  nbid?: string;
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * AVAILABLE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      couponId: 'CouponId',
      couponNo: 'CouponNo',
      couponType: 'CouponType',
      currentPage: 'CurrentPage',
      ecIdAccountIdsShrink: 'EcIdAccountIds',
      effectiveEndTime: 'EffectiveEndTime',
      effectiveStartTime: 'EffectiveStartTime',
      expireEndDate: 'ExpireEndDate',
      expireStartDate: 'ExpireStartDate',
      maxResults: 'MaxResults',
      nbid: 'Nbid',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponId: 'number',
      couponNo: 'string',
      couponType: 'string',
      currentPage: 'number',
      ecIdAccountIdsShrink: 'string',
      effectiveEndTime: 'number',
      effectiveStartTime: 'number',
      expireEndDate: 'number',
      expireStartDate: 'number',
      maxResults: 'number',
      nbid: 'string',
      nextToken: 'string',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

