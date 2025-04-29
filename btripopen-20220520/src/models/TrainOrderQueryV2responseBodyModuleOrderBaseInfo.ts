// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderQueryV2ResponseBodyModuleOrderBaseInfo extends $dara.Model {
  /**
   * @example
   * 1003784135
   */
  applyId?: string;
  btripTitle?: string;
  contactName?: string;
  /**
   * @example
   * 12110002222
   */
  contactPhone?: string;
  /**
   * @example
   * btripsy4yd7v0gdpdntpp
   */
  corpId?: string;
  corpName?: string;
  departId?: string;
  departName?: string;
  /**
   * @example
   * 1422113021033961000
   */
  exceedApplyId?: string;
  /**
   * @example
   * 1422113021033961000
   */
  exceedThirdpartApplyId?: string;
  gmtCreate?: string;
  gmtModify?: string;
  /**
   * @example
   * 42942924
   */
  itineraryId?: string;
  /**
   * @example
   * 2849819724653209258
   */
  orderId?: number;
  /**
   * @example
   * 4
   */
  orderStatus?: number;
  thirdPartBusinessId?: string;
  /**
   * @example
   * 01-2023-01214
   */
  thirdpartApplyId?: string;
  /**
   * @example
   * DHDI2209141OEGHWRN
   */
  thirdpartDepartId?: string;
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
  /**
   * @example
   * 1231212
   */
  userId?: string;
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      btripTitle: 'btrip_title',
      contactName: 'contact_name',
      contactPhone: 'contact_phone',
      corpId: 'corp_id',
      corpName: 'corp_name',
      departId: 'depart_id',
      departName: 'depart_name',
      exceedApplyId: 'exceed_apply_id',
      exceedThirdpartApplyId: 'exceed_thirdpart_apply_id',
      gmtCreate: 'gmt_create',
      gmtModify: 'gmt_modify',
      itineraryId: 'itinerary_id',
      orderId: 'order_id',
      orderStatus: 'order_status',
      thirdPartBusinessId: 'thirdPart_business_id',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartDepartId: 'thirdpart_depart_id',
      thirdpartItineraryId: 'thirdpart_itinerary_id',
      tripType: 'trip_type',
      userId: 'user_id',
      userNick: 'user_nick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      btripTitle: 'string',
      contactName: 'string',
      contactPhone: 'string',
      corpId: 'string',
      corpName: 'string',
      departId: 'string',
      departName: 'string',
      exceedApplyId: 'string',
      exceedThirdpartApplyId: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      itineraryId: 'string',
      orderId: 'number',
      orderStatus: 'number',
      thirdPartBusinessId: 'string',
      thirdpartApplyId: 'string',
      thirdpartDepartId: 'string',
      thirdpartItineraryId: 'string',
      tripType: 'number',
      userId: 'string',
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

