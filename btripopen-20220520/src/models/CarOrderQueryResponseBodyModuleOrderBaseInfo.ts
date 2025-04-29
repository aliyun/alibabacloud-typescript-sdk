// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CarOrderQueryResponseBodyModuleOrderBaseInfo extends $dara.Model {
  /**
   * @example
   * xxxxx
   */
  applyId?: string;
  btripCause?: string;
  btripTitle?: string;
  /**
   * @example
   * xxxxxxxx
   */
  corpId?: string;
  corpName?: string;
  /**
   * @example
   * 10101010
   */
  departId?: string;
  departName?: string;
  /**
   * @example
   * 1669274251000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1669274251000
   */
  gmtModified?: number;
  /**
   * @example
   * xxxxx
   */
  itineraryId?: string;
  /**
   * @example
   * 1012000000000000
   */
  orderId?: number;
  /**
   * @example
   * 5
   */
  orderStatus?: number;
  /**
   * @example
   * 100000
   */
  subOrderId?: number;
  /**
   * @example
   * thirdpart_1010101010
   */
  thirdDepartId?: string;
  /**
   * @example
   * xxxxx
   */
  thirdpartApplyId?: string;
  thirdpartBusinessId?: string;
  /**
   * @example
   * xxxxx
   */
  thirdpartItineraryId?: string;
  /**
   * @example
   * xxxxxxxx
   */
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      btripCause: 'btrip_cause',
      btripTitle: 'btrip_title',
      corpId: 'corp_id',
      corpName: 'corp_name',
      departId: 'depart_id',
      departName: 'depart_name',
      gmtCreate: 'gmt_create',
      gmtModified: 'gmt_modified',
      itineraryId: 'itinerary_id',
      orderId: 'order_id',
      orderStatus: 'order_status',
      subOrderId: 'sub_order_id',
      thirdDepartId: 'third_depart_id',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartBusinessId: 'thirdpart_business_id',
      thirdpartItineraryId: 'thirdpart_itinerary_id',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      btripCause: 'string',
      btripTitle: 'string',
      corpId: 'string',
      corpName: 'string',
      departId: 'string',
      departName: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      itineraryId: 'string',
      orderId: 'number',
      orderStatus: 'number',
      subOrderId: 'number',
      thirdDepartId: 'string',
      thirdpartApplyId: 'string',
      thirdpartBusinessId: 'string',
      thirdpartItineraryId: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

