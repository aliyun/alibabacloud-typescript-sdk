// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCouponUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud customer account.
   * 
   * @example
   * oqevfbveuadcrduzmf@ttirv.net
   */
  account?: string;
  /**
   * @remarks
   * The ID of the coupon template.
   * 
   * @example
   * 5075915
   */
  couponTemplateId?: number;
  /**
   * @remarks
   * The page number.</br> 
   * Default value: 1. Minimum value: 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.</br>
   * Default value: 20. Maximum value: 50. Minimum value: 1.
   * 
   * @example
   * 20
   */
  pageSize?: number;
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
   * The UID of the T2 partner. Example: 123456789.
   * 
   * @example
   * 123456768
   */
  t2PartnerUid?: number;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account.
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

