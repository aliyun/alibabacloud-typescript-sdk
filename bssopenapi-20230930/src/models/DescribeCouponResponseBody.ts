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
   * 阿里云计算有限公司
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
   * 满减券
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
   * The end time.
   * 
   * @example
   * 2021-03-06T15:12Z
   */
  endTime?: string;
  /**
   * @remarks
   * Indicates whether there is a first purchase restriction.
   */
  firstBuy?: boolean;
  /**
   * @remarks
   * The coupon issuance time.
   * 
   * @example
   * 2021-03-02T15:12Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The product code list.
   */
  itemNames?: string[];
  /**
   * @remarks
   * The amount limit.
   * 
   * @example
   * 无订单金额限制
   */
  moneyLimit?: string;
  /**
   * @remarks
   * The order duration limit rule.
   * 
   * @example
   * 预付费规则：购买订单时长大于3600s才能使用
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
   * The remarks.
   * 
   * @example
   * 新买28号
   */
  remark?: string;
  /**
   * @remarks
   * The shared account list.
   */
  shareUidList?: DescribeCouponResponseBodyDataShareUidList[];
  /**
   * @remarks
   * Indicates whether to display the tag deduction button.
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
   * 官网自营
   */
  siteName?: string;
  /**
   * @remarks
   * The start time.
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
   * The applicable product type. Valid values: all, which indicates that the coupon is applicable to all products. white, which indicates that the coupon is applicable to specified products. black, which indicates that the coupon is not applicable to specified products.
   * 
   * @example
   * all
   */
  suitItemType?: string;
  /**
   * @remarks
   * The coupon applicable scope.
   * 
   * @example
   * UNIVERSAL
   */
  universalType?: string;
  /**
   * @remarks
   * The list of order types applicable to the coupon.
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
   * The number of entries per page.
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

