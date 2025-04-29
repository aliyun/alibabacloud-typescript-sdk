// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOrderQueryResponseBodyModuleOrderBaseInfo extends $dara.Model {
  /**
   * @example
   * 175634
   */
  applyId?: string;
  btripTitle?: string;
  contactName?: string;
  corpId?: string;
  corpName?: string;
  departId?: string;
  departName?: string;
  exceedApplyId?: string;
  exceedThirdPartApplyId?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  gmtModify?: string;
  /**
   * @example
   * 13628
   */
  itineraryId?: string;
  /**
   * @example
   * 146178
   */
  orderId?: number;
  /**
   * @example
   * 5
   */
  orderStatus?: number;
  supplier?: string;
  /**
   * @example
   * CS-FLIGHT
   */
  thirdpartApplyId?: string;
  thirdpartBusinessId?: string;
  thirdpartCorpId?: string;
  /**
   * @example
   * CS-FLIGHT
   */
  thirdpartItineraryId?: string;
  /**
   * @example
   * 0
   */
  tripType?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      btripTitle: 'btrip_title',
      contactName: 'contact_name',
      corpId: 'corp_id',
      corpName: 'corp_name',
      departId: 'depart_id',
      departName: 'depart_name',
      exceedApplyId: 'exceed_apply_id',
      exceedThirdPartApplyId: 'exceed_third_part_apply_id',
      gmtCreate: 'gmt_create',
      gmtModify: 'gmt_modify',
      itineraryId: 'itinerary_id',
      orderId: 'order_id',
      orderStatus: 'order_status',
      supplier: 'supplier',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartBusinessId: 'thirdpart_business_id',
      thirdpartCorpId: 'thirdpart_corp_id',
      thirdpartItineraryId: 'thirdpart_itinerary_id',
      tripType: 'trip_type',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      btripTitle: 'string',
      contactName: 'string',
      corpId: 'string',
      corpName: 'string',
      departId: 'string',
      departName: 'string',
      exceedApplyId: 'string',
      exceedThirdPartApplyId: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      itineraryId: 'string',
      orderId: 'number',
      orderStatus: 'number',
      supplier: 'string',
      thirdpartApplyId: 'string',
      thirdpartBusinessId: 'string',
      thirdpartCorpId: 'string',
      thirdpartItineraryId: 'string',
      tripType: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

