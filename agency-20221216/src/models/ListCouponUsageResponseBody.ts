// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCouponUsageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 阿里云账号
   * 
   * @example
   * oqevfbveuadcrduzmf@ttirv.net
   */
  account?: string;
  /**
   * @remarks
   * 优惠券面额
   * 
   * @example
   * 200
   */
  amount?: number;
  /**
   * @remarks
   * 余额
   * 
   * @example
   * 0.01
   */
  balance?: number;
  /**
   * @remarks
   * 优惠券id
   * 
   * @example
   * 59226280
   */
  couponId?: string;
  /**
   * @remarks
   * 优惠券模版id
   * 
   * @example
   * 503802
   */
  couponTemplateId?: number;
  /**
   * @remarks
   * 优惠券有效期
   * 
   * @example
   * 2023-04-06 00:00:00 ~ 2023-04-07 00:00:00
   */
  effDate?: string;
  /**
   * @remarks
   * 优惠券发放时间
   * 
   * @example
   * 2023-04-06 19:32:10
   */
  publishDate?: string;
  /**
   * @remarks
   * 优惠券状态 </br>
   * AVAILABLE 正常 </br>
   * EXHAUSTED 已用完 </br>
   * EXPIRED 已过期 </br>
   * ABANDONED 已作废 </br>
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * 二级分销商Uid
   * 
   * @example
   * 5248516956402795
   */
  t2PartnerUid?: string;
  /**
   * @remarks
   * 阿里云uid
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
   * 分页，当前页
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * 分页，每页数量
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * 分页，总量
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
   * 接口状态码
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 返回数据
   */
  data?: ListCouponUsageResponseBodyData[];
  /**
   * @remarks
   * 接口返回提示信息
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * 分页信息
   */
  pageInfo?: ListCouponUsageResponseBodyPageInfo;
  /**
   * @remarks
   * 接口请求id返回问题提供查询使用
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

