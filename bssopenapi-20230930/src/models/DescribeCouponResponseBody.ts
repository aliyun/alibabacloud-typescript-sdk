// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCouponResponseBodyDataShareUidList extends $dara.Model {
  /**
   * @example
   * 1902671110151254
   */
  uid?: string;
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
   * @example
   * 9929.750000
   */
  amount?: string;
  certainAmount?: string;
  /**
   * @example
   * 59243658
   */
  couponId?: number;
  /**
   * @example
   * 731074910070
   */
  couponNo?: string;
  /**
   * @example
   * CERTAIN
   */
  couponType?: string;
  couponTypeName?: string;
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 2021-03-06T15:12Z
   */
  endTime?: string;
  firstBuy?: boolean;
  /**
   * @example
   * 2021-03-02T15:12Z
   */
  gmtCreate?: string;
  itemNames?: string[];
  moneyLimit?: string;
  orderTimeRule?: string;
  /**
   * @example
   * 100.00
   */
  remainAmount?: string;
  remark?: string;
  shareUidList?: DescribeCouponResponseBodyDataShareUidList[];
  /**
   * @example
   * true
   */
  showSetDeductTagButton?: boolean;
  /**
   * @example
   * CHINA
   */
  site?: string;
  siteName?: string;
  /**
   * @example
   * 2021-03-02T15:12Z
   */
  startTime?: string;
  /**
   * @example
   * Available
   */
  status?: string;
  /**
   * @example
   * 1902671110151254
   */
  suitAccount?: string;
  /**
   * @example
   * all
   */
  suitItemType?: string;
  /**
   * @example
   * UNIVERSAL
   */
  universalType?: string;
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
   * @example
   * 1
   */
  currentPage?: number;
  data?: DescribeCouponResponseBodyData[];
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * C880B065-A781-4F19-B6DD-3E0E3B715C64
   */
  requestId?: string;
  /**
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

