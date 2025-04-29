// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOrderDetailV2ResponseBodyModuleContactInfoDTO } from "./FlightOrderDetailV2responseBodyModuleContactInfoDto";
import { FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTO } from "./FlightOrderDetailV2responseBodyModuleFlightTaleInfoDto";
import { FlightOrderDetailV2ResponseBodyModulePassengerList } from "./FlightOrderDetailV2responseBodyModulePassengerList";


export class FlightOrderDetailV2ResponseBodyModule extends $dara.Model {
  b2gVipCode?: string;
  /**
   * @example
   * 2023-06-29 15:28:44
   */
  bookSuccTime?: string;
  /**
   * @example
   * qingg1234
   */
  bookUserId?: string;
  bookUserName?: string;
  /**
   * @example
   * 0
   */
  buildPrice?: number;
  contactInfoDTO?: FlightOrderDetailV2ResponseBodyModuleContactInfoDTO;
  /**
   * @example
   * 2023-06-29 15:03:11
   */
  createTime?: string;
  /**
   * @example
   * 126000
   */
  facevalue?: number;
  flightTaleInfoDTO?: FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTO;
  /**
   * @example
   * false
   */
  isProtocol?: boolean;
  /**
   * @example
   * false
   */
  isemergency?: boolean;
  /**
   * @example
   * true
   */
  issendmessage?: boolean;
  /**
   * @example
   * 4000
   */
  oilPrice?: number;
  /**
   * @example
   * 1017002195370467200
   */
  orderId?: number;
  /**
   * @example
   * 8500
   */
  orderPrice?: number;
  /**
   * @example
   * 1017002195370467137
   */
  outOrderId?: string;
  passengerList?: FlightOrderDetailV2ResponseBodyModulePassengerList[];
  /**
   * @remarks
   * key :passengerId
   * 
   * value :segmentId
   */
  passengerSegmentMap?: { [key: string]: string };
  /**
   * @example
   * 2023-06-29 15:03:59
   */
  payTime?: string;
  /**
   * @example
   * 4500
   */
  saleprice?: number;
  /**
   * @example
   * true
   */
  sendcpsms?: boolean;
  /**
   * @example
   * 5
   */
  status?: number;
  /**
   * @example
   * 3
   */
  totalServiceFeePrice?: number;
  static names(): { [key: string]: string } {
    return {
      b2gVipCode: 'b2g_vip_code',
      bookSuccTime: 'book_succ_time',
      bookUserId: 'book_user_id',
      bookUserName: 'book_user_name',
      buildPrice: 'build_price',
      contactInfoDTO: 'contact_info_d_t_o',
      createTime: 'create_time',
      facevalue: 'facevalue',
      flightTaleInfoDTO: 'flight_tale_info_d_t_o',
      isProtocol: 'is_protocol',
      isemergency: 'isemergency',
      issendmessage: 'issendmessage',
      oilPrice: 'oil_price',
      orderId: 'order_id',
      orderPrice: 'order_price',
      outOrderId: 'out_order_id',
      passengerList: 'passenger_list',
      passengerSegmentMap: 'passenger_segment_map',
      payTime: 'pay_time',
      saleprice: 'saleprice',
      sendcpsms: 'sendcpsms',
      status: 'status',
      totalServiceFeePrice: 'total_service_fee_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b2gVipCode: 'string',
      bookSuccTime: 'string',
      bookUserId: 'string',
      bookUserName: 'string',
      buildPrice: 'number',
      contactInfoDTO: FlightOrderDetailV2ResponseBodyModuleContactInfoDTO,
      createTime: 'string',
      facevalue: 'number',
      flightTaleInfoDTO: FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTO,
      isProtocol: 'boolean',
      isemergency: 'boolean',
      issendmessage: 'boolean',
      oilPrice: 'number',
      orderId: 'number',
      orderPrice: 'number',
      outOrderId: 'string',
      passengerList: { 'type': 'array', 'itemType': FlightOrderDetailV2ResponseBodyModulePassengerList },
      passengerSegmentMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      payTime: 'string',
      saleprice: 'number',
      sendcpsms: 'boolean',
      status: 'number',
      totalServiceFeePrice: 'number',
    };
  }

  validate() {
    if(this.contactInfoDTO && typeof (this.contactInfoDTO as any).validate === 'function') {
      (this.contactInfoDTO as any).validate();
    }
    if(this.flightTaleInfoDTO && typeof (this.flightTaleInfoDTO as any).validate === 'function') {
      (this.flightTaleInfoDTO as any).validate();
    }
    if(Array.isArray(this.passengerList)) {
      $dara.Model.validateArray(this.passengerList);
    }
    if(this.passengerSegmentMap) {
      $dara.Model.validateMap(this.passengerSegmentMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

