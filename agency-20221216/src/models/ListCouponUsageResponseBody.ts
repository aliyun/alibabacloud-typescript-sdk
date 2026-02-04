// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCouponUsageResponseBodyData extends $dara.Model {
  /**
   * @example
   * oqevfbveuadcrduzmf@ttirv.net
   */
  account?: string;
  amount?: number;
  /**
   * @example
   * 0.01
   */
  balance?: number;
  /**
   * @example
   * 59226280
   */
  couponId?: string;
  /**
   * @example
   * 503802
   */
  couponTemplateId?: number;
  /**
   * @example
   * 2023-04-06 00:00:00 ~ 2023-04-07 00:00:00
   */
  effDate?: string;
  /**
   * @example
   * 2023-04-06 19:32:10
   */
  publishDate?: string;
  /**
   * @example
   * AVAILABLE
   */
  status?: string;
  t2PartnerUid?: string;
  /**
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
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
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
   * @example
   * 200
   */
  code?: string;
  data?: ListCouponUsageResponseBodyData[];
  message?: string;
  pageInfo?: ListCouponUsageResponseBodyPageInfo;
  /**
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

