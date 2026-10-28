// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCouponUsageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account.
   * 
   * @example
   * oqevfbveuadcrduzmf@ttirv.net
   */
  account?: string;
  /**
   * @remarks
   * The face value of the coupon.
   * 
   * @example
   * 200
   */
  amount?: number;
  /**
   * @remarks
   * The remaining balance.
   * 
   * @example
   * 0.01
   */
  balance?: number;
  /**
   * @remarks
   * The ID of the coupon.
   * 
   * @example
   * 59226280
   */
  couponId?: string;
  /**
   * @remarks
   * The ID of the coupon template.
   * 
   * @example
   * 503802
   */
  couponTemplateId?: number;
  /**
   * @remarks
   * The validity period of the coupon.
   * 
   * @example
   * 2023-04-06 00:00:00 ~ 2023-04-07 00:00:00
   */
  effDate?: string;
  /**
   * @remarks
   * The time when the coupon was issued. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2023-04-06 19:32:10
   */
  publishDate?: string;
  /**
   * @remarks
   * The coupon status. Valid values:</br>
   * AVAILABLE: Normal.</br>
   * EXHAUSTED: Used up.</br>
   * EXPIRED: Expired.</br>
   * ABANDONED: Voided.</br>
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * The UID of the T2 partner.
   * 
   * @example
   * 5248516956402795
   */
  t2PartnerUid?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account.
   * 
   * @example
   * 1647668856741998
   */
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      amount: 'Amount',
      balance: 'Balance',
      couponId: 'CouponId',
      couponTemplateId: 'CouponTemplateId',
      effDate: 'EffDate',
      publishDate: 'PublishDate',
      status: 'Status',
      t2PartnerUid: 'T2PartnerUid',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      amount: 'number',
      balance: 'number',
      couponId: 'string',
      couponTemplateId: 'number',
      effDate: 'string',
      publishDate: 'string',
      status: 'string',
      t2PartnerUid: 'string',
      uid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCouponUsageResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  page?: number;
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
   * The total number of entries.
   * 
   * @example
   * 300
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCouponUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the API operation.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListCouponUsageResponseBodyData[];
  /**
   * @remarks
   * The message returned by the API operation.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListCouponUsageResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID. You can provide this ID for troubleshooting.
   * 
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListCouponUsageResponseBodyData },
      message: 'string',
      pageInfo: ListCouponUsageResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

