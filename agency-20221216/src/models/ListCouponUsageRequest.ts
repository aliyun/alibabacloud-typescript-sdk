// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCouponUsageRequest extends $dara.Model {
  /**
   * @remarks
   * 阿里云客户账号
   * 
   * @example
   * oqevfbveuadcrduzmf@ttirv.net
   */
  account?: string;
  /**
   * @remarks
   * 优惠券模版id
   * 
   * @example
   * 5075915
   */
  couponTemplateId?: number;
  /**
   * @remarks
   * 页码</br> 
   *  默认值为1 最小值1
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * 分页行数 </br>
   *   默认值20 最大值50 最小值1
   * 
   * @example
   * 20
   */
  pageSize?: number;
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
   * T2伙伴uid
   * 如：123456789
   * 
   * @example
   * 123456768
   */
  t2PartnerUid?: number;
  /**
   * @remarks
   * 阿里云账号uid
   * 
   * @example
   * 1133166938931507
   */
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      couponTemplateId: 'CouponTemplateId',
      page: 'Page',
      pageSize: 'PageSize',
      status: 'Status',
      t2PartnerUid: 'T2PartnerUid',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      couponTemplateId: 'number',
      page: 'number',
      pageSize: 'number',
      status: 'string',
      t2PartnerUid: 'number',
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

