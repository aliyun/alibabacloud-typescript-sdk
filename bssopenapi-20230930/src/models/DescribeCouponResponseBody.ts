// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCouponResponseBodyDataShareUidList extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud UID.
   * 
   * @example
   * 1902671110151254
   */
  uid?: string;
  /**
   * @remarks
   * The Alibaba Cloud account.
   * 
   * @example
   * Alibaba Cloud Computing Ltd
   */
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'Uid',
      userNick: 'UserNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'string',
      userNick: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCouponResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The face value.
   * 
   * @example
   * 9929.750000
   */
  amount?: string;
  /**
   * @remarks
   * CertainAmount
   * 
   * @example
   * 100.00
   */
  certainAmount?: string;
  /**
   * @remarks
   * The coupon ID.
   * 
   * @example
   * 59243658
   */
  couponId?: number;
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * 731074910070
   */
  couponNo?: string;
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
   * The coupon type name.
   * 
   * @example
   * Threshold discount coupon
   */
  couponTypeName?: string;
  /**
   * @remarks
   * The currency.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The end time in ISO 8601 format. The time zone is UTC.
   * 
   * @example
   * 2021-03-06T15:12Z
   */
  endTime?: string;
  /**
   * @remarks
   * Indicates whether a first-purchase limit applies.
   */
  firstBuy?: boolean;
  /**
   * @remarks
   * The time when the coupon was issued.
   * 
   * @example
   * 2021-03-02T15:12Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The list of product codes.
   */
  itemNames?: string[];
  /**
   * @remarks
   * The amount limit.
   * 
   * @example
   * No order amount limit
   */
  moneyLimit?: string;
  /**
   * @remarks
   * The order duration limit rule.
   * 
   * @example
   * Subscription rule: The coupon can be used only for orders with a duration greater than 3,600 seconds
   */
  orderTimeRule?: string;
  /**
   * @remarks
   * The remaining amount.
   * 
   * @example
   * 100.00
   */
  remainAmount?: string;
  /**
   * @remarks
   * The remark.
   * 
   * @example
   * New purchase on the 28th
   */
  remark?: string;
  /**
   * @remarks
   * The list of shared accounts.
   */
  shareUidList?: DescribeCouponResponseBodyDataShareUidList[];
  /**
   * @remarks
   * Indicates whether the tag deduction button is displayed.
   * 
   * @example
   * true
   */
  showSetDeductTagButton?: boolean;
  /**
   * @remarks
   * The site.
   * 
   * @example
   * CHINA
   */
  site?: string;
  /**
   * @remarks
   * The site name.
   * 
   * @example
   * Official website direct sales
   */
  siteName?: string;
  /**
   * @remarks
   * The start time in ISO 8601 format. The time zone is UTC.
   * 
   * @example
   * 2021-03-02T15:12Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The applicable account.
   * 
   * @example
   * 1902671110151254
   */
  suitAccount?: string;
  /**
   * @remarks
   * The applicable product type. Valid values: all: Applicable to all products. white: Applicable to specified products. black: Not applicable to specified products.
   * 
   * @example
   * all
   */
  suitItemType?: string;
  /**
   * @remarks
   * The application scope of the coupon.
   * 
   * @example
   * UNIVERSAL
   */
  universalType?: string;
  /**
   * @remarks
   * The list of applicable order types for the coupon.
   */
  yhOrderTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      certainAmount: 'CertainAmount',
      couponId: 'CouponId',
      couponNo: 'CouponNo',
      couponType: 'CouponType',
      couponTypeName: 'CouponTypeName',
      currency: 'Currency',
      endTime: 'EndTime',
      firstBuy: 'FirstBuy',
      gmtCreate: 'GmtCreate',
      itemNames: 'ItemNames',
      moneyLimit: 'MoneyLimit',
      orderTimeRule: 'OrderTimeRule',
      remainAmount: 'RemainAmount',
      remark: 'Remark',
      shareUidList: 'ShareUidList',
      showSetDeductTagButton: 'ShowSetDeductTagButton',
      site: 'Site',
      siteName: 'SiteName',
      startTime: 'StartTime',
      status: 'Status',
      suitAccount: 'SuitAccount',
      suitItemType: 'SuitItemType',
      universalType: 'UniversalType',
      yhOrderTypes: 'YhOrderTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      certainAmount: 'string',
      couponId: 'number',
      couponNo: 'string',
      couponType: 'string',
      couponTypeName: 'string',
      currency: 'string',
      endTime: 'string',
      firstBuy: 'boolean',
      gmtCreate: 'string',
      itemNames: { 'type': 'array', 'itemType': 'string' },
      moneyLimit: 'string',
      orderTimeRule: 'string',
      remainAmount: 'string',
      remark: 'string',
      shareUidList: { 'type': 'array', 'itemType': DescribeCouponResponseBodyDataShareUidList },
      showSetDeductTagButton: 'boolean',
      site: 'string',
      siteName: 'string',
      startTime: 'string',
      status: 'string',
      suitAccount: 'string',
      suitItemType: 'string',
      universalType: 'string',
      yhOrderTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.itemNames)) {
      $dara.Model.validateArray(this.itemNames);
    }
    if(Array.isArray(this.shareUidList)) {
      $dara.Model.validateArray(this.shareUidList);
    }
    if(Array.isArray(this.yhOrderTypes)) {
      $dara.Model.validateArray(this.yhOrderTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCouponResponseBody extends $dara.Model {
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
   * The data list.
   */
  data?: DescribeCouponResponseBodyData[];
  /**
   * @remarks
   * The number of items per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C880B065-A781-4F19-B6DD-3E0E3B715C64
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': DescribeCouponResponseBodyData },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

