// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddressGetRequest extends $dara.Model {
  /**
   * @remarks
   * The redirect page type. For illustrations of each page, refer to [How to implement SSO redirection - Appendix](https://openapi.alibtrip.com/doc/toDocDetail?docId=4746411).
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  actionType?: number;
  /**
   * @remarks
   * The three-letter code of the arrival city.
   * 
   * @example
   * BJS
   */
  arrCityCode?: string;
  /**
   * @remarks
   * The arrival city name.
   * 
   * @example
   * 北京
   */
  arrCityName?: string;
  /**
   * @remarks
   * The car service scenario.
   * 
   * @example
   * TRAVEL
   */
  carScenesCode?: string;
  /**
   * @remarks
   * The three-letter code of the departure city.
   * 
   * @example
   * HGH
   */
  depCityCode?: string;
  /**
   * @remarks
   * The departure city name.
   * 
   * @example
   * 杭州
   */
  depCityName?: string;
  /**
   * @remarks
   * The departure date.
   * 
   * @example
   * 2023-02-26
   */
  depDate?: string;
  /**
   * @remarks
   * The itinerary ID.
   * - When the redirect page is the business travel booking page (`action_type = 1`), you can optionally pass this parameter to quickly redirect to the booking page of the category associated with the itinerary.
   * - The itinerary ID must have been submitted to the Alibaba Business Travel system through the [Create a business trip approval](https://openapi.alibtrip.com/doc/toDocDetail?docId=4929938) operation.
   * 
   * @example
   * 460e********5d78
   */
  itineraryId?: string;
  /**
   * @remarks
   * Specifies whether to skip the booking intermediate page.
   * 1. Set this parameter to 2 to skip the booking intermediate page. When skipping the intermediate page, the **itinerary_id** parameter is required. If this parameter is empty or set to a value other than 2, the intermediate page is not skipped.
   * 2. This parameter is available when the redirect page is the **H5 booking page** (`action_type = 1`) and the category is **flight** (`type = 1`) or **train** (`type = 2`).
   * 
   * @example
   * 1
   */
  middlePage?: number;
  /**
   * @remarks
   * The order ID. This parameter is required when the redirect page type is the specified order details page on either platform (`action_type = 11 or 12`).
   * 
   * @example
   * 1002************464
   */
  orderId?: string;
  /**
   * @remarks
   * The contact phone number, typically used for car service scenarios.
   * 
   * @example
   * 131****8888
   */
  phone?: string;
  /**
   * @remarks
   * Session parameters. The format must be a JSON string where both keys and values are strings.
   * Example: "{\\"returnURL\\":\\"https://open.alibtrip.com/\\"}"
   */
  sessionParameters?: string;
  /**
   * @remarks
   * The sub-enterprise ID. Pass this parameter to redirect to the business page of the specified sub-enterprise.
   * - **View permissions**: Only enterprise administrators have view permissions.
   * - **Path to obtain**: Enterprise management console > Parent-child account management > Account management > Sub-account management > Company ID.
   * 
   * @example
   * btrip01******00
   */
  subCorpId?: string;
  /**
   * @remarks
   * The redirect URL after Taobao account binding.
   * 
   * @example
   * https://example.com
   */
  taobaoCallbackUrl?: string;
  /**
   * @remarks
   * The third-party approval ID.
   * 
   * @example
   * TP00097732
   */
  thirdpartApplyId?: string;
  /**
   * @remarks
   * The ID of the actual traveler (the person being booked for).
   * 
   * @example
   * user_1234
   */
  travelerId?: string;
  /**
   * @remarks
   * The business type. This parameter is required when the redirect page is the **booking page** (`action_type = 1`) or the **order view page** (`action_type = 2`).
   * 
   * @example
   * 1
   */
  type?: number;
  /**
   * @remarks
   * Specifies whether to use proxy booking mode.
   * - The proxy booking page is accessible only when this parameter is set to 1.
   * 
   * @example
   * 1
   */
  useBookingProxy?: number;
  /**
   * @remarks
   * The employee ID. The employee must be registered in the business travel system before you pass this parameter. Otherwise, the call fails.
   * 
   * This parameter is required.
   * 
   * @example
   * user_1234
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

