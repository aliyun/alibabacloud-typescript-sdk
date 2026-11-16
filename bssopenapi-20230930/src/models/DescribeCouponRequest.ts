// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCouponRequestEcIdAccountIds extends $dara.Model {
  /**
   * @remarks
   * The list of accessed accounts. If this parameter is left empty, all accounts under the current entity ID are selected.
   */
  accountIds?: number[];
  /**
   * @remarks
   * The enterprise entity ID.
   * 
   * @example
   * 1501603440974415
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

export class DescribeCouponRequest extends $dara.Model {
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
  /**
   * @remarks
   * The list of coupon template IDs.
   */
  couponTemplateIdList?: number[];
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
   * The list of enterprises and accounts. If this parameter is left empty, the coupons of the current account are queried.
   */
  ecIdAccountIds?: DescribeCouponRequestEcIdAccountIds[];
  /**
   * @remarks
   * The effective end time, specified as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1708423156000
   */
  effectiveEndTime?: number;
  /**
   * @remarks
   * The effective start time, specified as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1684750028000
   */
  effectiveStartTime?: number;
  /**
   * @remarks
   * The expiration end time, specified as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1708423156000
   */
  expireEndDate?: number;
  /**
   * @remarks
   * The expiration start time, specified as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1684750028000
   */
  expireStartDate?: number;
  /**
   * @remarks
   * Specifies whether to include shared coupons.
   */
  includeShare?: boolean;
  /**
   * @remarks
   * The maximum number of entries to return for a single query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The level-1 site information.
   * 
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @remarks
   * The token used to start the next query. If this parameter is left empty, no more pages exist.
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of items per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The product code.
   * 
   * @example
   * sfm
   */
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
      couponTemplateIdList: 'CouponTemplateIdList',
      couponType: 'CouponType',
      currentPage: 'CurrentPage',
      ecIdAccountIds: 'EcIdAccountIds',
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
      couponTemplateIdList: { 'type': 'array', 'itemType': 'number' },
      couponType: 'string',
      currentPage: 'number',
      ecIdAccountIds: { 'type': 'array', 'itemType': DescribeCouponRequestEcIdAccountIds },
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
    if(Array.isArray(this.couponTemplateIdList)) {
      $dara.Model.validateArray(this.couponTemplateIdList);
    }
    if(Array.isArray(this.ecIdAccountIds)) {
      $dara.Model.validateArray(this.ecIdAccountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

