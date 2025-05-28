// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCouponRequestEcIdAccountIds } from "./DescribeCouponRequestEcIdAccountIds";


export class DescribeCouponRequest extends $dara.Model {
  /**
   * @example
   * 351430260343
   */
  couponId?: number;
  /**
   * @example
   * 554863270150
   */
  couponNo?: string;
  /**
   * @example
   * CERTAIN
   */
  couponType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  ecIdAccountIds?: DescribeCouponRequestEcIdAccountIds[];
  /**
   * @example
   * 1708423156000
   */
  effectiveEndTime?: number;
  /**
   * @example
   * 1684750028000
   */
  effectiveStartTime?: number;
  /**
   * @example
   * 1708423156000
   */
  expireEndDate?: number;
  /**
   * @example
   * 1684750028000
   */
  expireStartDate?: number;
  /**
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * AVAILABLE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      couponId: 'CouponId',
      couponNo: 'CouponNo',
      couponType: 'CouponType',
      currentPage: 'CurrentPage',
      ecIdAccountIds: 'EcIdAccountIds',
      effectiveEndTime: 'EffectiveEndTime',
      effectiveStartTime: 'EffectiveStartTime',
      expireEndDate: 'ExpireEndDate',
      expireStartDate: 'ExpireStartDate',
      nbid: 'Nbid',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponId: 'number',
      couponNo: 'string',
      couponType: 'string',
      currentPage: 'number',
      ecIdAccountIds: { 'type': 'array', 'itemType': DescribeCouponRequestEcIdAccountIds },
      effectiveEndTime: 'number',
      effectiveStartTime: 'number',
      expireEndDate: 'number',
      expireStartDate: 'number',
      nbid: 'string',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ecIdAccountIds)) {
      $dara.Model.validateArray(this.ecIdAccountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

