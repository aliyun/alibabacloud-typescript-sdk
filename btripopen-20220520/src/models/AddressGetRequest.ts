// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddressGetRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  actionType?: number;
  arrCityCode?: string;
  arrCityName?: string;
  carScenesCode?: string;
  depCityCode?: string;
  depCityName?: string;
  depDate?: string;
  /**
   * @example
   * 460e254b5a5b4bd0801744a2790e5d78
   */
  itineraryId?: string;
  middlePage?: number;
  orderId?: string;
  phone?: string;
  sessionParameters?: string;
  subCorpId?: string;
  /**
   * @example
   * https://alibtrip.open.com
   */
  taobaoCallbackUrl?: string;
  thirdpartApplyId?: string;
  travelerId?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  useBookingProxy?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'action_type',
      arrCityCode: 'arr_city_code',
      arrCityName: 'arr_city_name',
      carScenesCode: 'car_scenes_code',
      depCityCode: 'dep_city_code',
      depCityName: 'dep_city_name',
      depDate: 'dep_date',
      itineraryId: 'itinerary_id',
      middlePage: 'middle_page',
      orderId: 'order_Id',
      phone: 'phone',
      sessionParameters: 'session_parameters',
      subCorpId: 'sub_corp_id',
      taobaoCallbackUrl: 'taobao_callback_url',
      thirdpartApplyId: 'thirdpart_apply_id',
      travelerId: 'traveler_id',
      type: 'type',
      useBookingProxy: 'use_booking_proxy',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'number',
      arrCityCode: 'string',
      arrCityName: 'string',
      carScenesCode: 'string',
      depCityCode: 'string',
      depCityName: 'string',
      depDate: 'string',
      itineraryId: 'string',
      middlePage: 'number',
      orderId: 'string',
      phone: 'string',
      sessionParameters: 'string',
      subCorpId: 'string',
      taobaoCallbackUrl: 'string',
      thirdpartApplyId: 'string',
      travelerId: 'string',
      type: 'number',
      useBookingProxy: 'number',
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

