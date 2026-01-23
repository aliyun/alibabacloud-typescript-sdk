// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCouponUsageRequest extends $dara.Model {
  /**
   * @example
   * oqevfbveuadcrduzmf@ttirv.net
   */
  account?: string;
  /**
   * @example
   * 5075915
   */
  couponTemplateId?: number;
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
   * AVAILABLE
   */
  status?: string;
  /**
   * @example
   * 123456768
   */
  t2PartnerUid?: number;
  /**
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

