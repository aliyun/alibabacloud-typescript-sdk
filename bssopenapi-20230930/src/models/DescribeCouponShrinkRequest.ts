// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCouponShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The coupon ID.
   * 
   * @example
   * 351430260343
   */
  couponId?: number;
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * 554863270150
   */
  couponNo?: string;
  couponTemplateIdListShrink?: string;
  /**
   * @remarks
   * The coupon type.
   * 
   * @example
   * CERTAIN
   */
  couponType?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The enterprise and account list. If this parameter is left empty, the current account is queried.
   */
  ecIdAccountIdsShrink?: string;
  /**
   * @remarks
   * The effective end time.
   * 
   * @example
   * 1708423156000
   */
  effectiveEndTime?: number;
  /**
   * @remarks
   * The effective start time.
   * 
   * @example
   * 1684750028000
   */
  effectiveStartTime?: number;
  /**
   * @remarks
   * The expiration end time.
   * 
   * @example
   * 1708423156000
   */
  expireEndDate?: number;
  /**
   * @remarks
   * The expiration start time.
   * 
   * @example
   * 1684750028000
   */
  expireStartDate?: number;
  includeShare?: boolean;
  maxResults?: number;
  /**
   * @remarks
   * The primary campaign information.
   * 
   * @example
   * 2684201000001
   */
  nbid?: string;
  nextToken?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  productCode?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      couponId: 'CouponId',
      couponNo: 'CouponNo',
      couponTemplateIdListShrink: 'CouponTemplateIdList',
      couponType: 'CouponType',
      currentPage: 'CurrentPage',
      ecIdAccountIdsShrink: 'EcIdAccountIds',
      effectiveEndTime: 'EffectiveEndTime',
      effectiveStartTime: 'EffectiveStartTime',
      expireEndDate: 'ExpireEndDate',
      expireStartDate: 'ExpireStartDate',
      includeShare: 'IncludeShare',
      maxResults: 'MaxResults',
      nbid: 'Nbid',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponId: 'number',
      couponNo: 'string',
      couponTemplateIdListShrink: 'string',
      couponType: 'string',
      currentPage: 'number',
      ecIdAccountIdsShrink: 'string',
      effectiveEndTime: 'number',
      effectiveStartTime: 'number',
      expireEndDate: 'number',
      expireStartDate: 'number',
      includeShare: 'boolean',
      maxResults: 'number',
      nbid: 'string',
      nextToken: 'string',
      pageSize: 'number',
      productCode: 'string',
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

