// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightModifyOrderDetailV2ResponseBodyModuleAttributes } from "./FlightModifyOrderDetailV2responseBodyModuleAttributes";
import { FlightModifyOrderDetailV2ResponseBodyModuleContactInfoDTO } from "./FlightModifyOrderDetailV2responseBodyModuleContactInfoDto";
import { FlightModifyOrderDetailV2ResponseBodyModuleDestFlightInfoDTOS } from "./FlightModifyOrderDetailV2responseBodyModuleDestFlightInfoDtos";
import { FlightModifyOrderDetailV2ResponseBodyModuleTravelerInfoDTOS } from "./FlightModifyOrderDetailV2responseBodyModuleTravelerInfoDtos";


export class FlightModifyOrderDetailV2ResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 2023-08-14 11:28:01
   */
  applyTime?: string;
  attributes?: FlightModifyOrderDetailV2ResponseBodyModuleAttributes;
  /**
   * @example
   * 17635462345@163.com
   */
  bookUserEmail?: string;
  bookUserName?: string;
  /**
   * @example
   * 17635462345
   */
  bookuserPhone?: string;
  changeFailReason?: string;
  contactInfoDTO?: FlightModifyOrderDetailV2ResponseBodyModuleContactInfoDTO;
  destFlightInfoDTOS?: FlightModifyOrderDetailV2ResponseBodyModuleDestFlightInfoDTOS[];
  /**
   * @example
   * 2023-08-14 11:48:01
   */
  lastPayTime?: string;
  /**
   * @example
   * 1017124195788186048
   */
  orderId?: number;
  /**
   * @example
   * 1017124195788186048
   */
  outOrderId?: string;
  /**
   * @example
   * 1019195836916029
   */
  outSubOrderId?: string;
  /**
   * @example
   * 2023-08-14 11:38:01
   */
  payTime?: string;
  reason?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 1019195836916029
   */
  subOrderId?: number;
  /**
   * @example
   * 2023-08-19 15:24:08
   */
  ticketTime?: string;
  /**
   * @example
   * 100
   */
  totalPrice?: number;
  /**
   * @example
   * 0
   */
  totalServiceFeePrice?: number;
  travelerInfoDTOS?: FlightModifyOrderDetailV2ResponseBodyModuleTravelerInfoDTOS[];
  static names(): { [key: string]: string } {
    return {
      applyTime: 'apply_time',
      attributes: 'attributes',
      bookUserEmail: 'book_user_email',
      bookUserName: 'book_user_name',
      bookuserPhone: 'bookuser_phone',
      changeFailReason: 'change_fail_reason',
      contactInfoDTO: 'contact_info_d_t_o',
      destFlightInfoDTOS: 'dest_flight_info_d_t_o_s',
      lastPayTime: 'last_pay_time',
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      outSubOrderId: 'out_sub_order_id',
      payTime: 'pay_time',
      reason: 'reason',
      status: 'status',
      subOrderId: 'sub_order_id',
      ticketTime: 'ticket_time',
      totalPrice: 'total_price',
      totalServiceFeePrice: 'total_service_fee_price',
      travelerInfoDTOS: 'traveler_info_d_t_o_s',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyTime: 'string',
      attributes: FlightModifyOrderDetailV2ResponseBodyModuleAttributes,
      bookUserEmail: 'string',
      bookUserName: 'string',
      bookuserPhone: 'string',
      changeFailReason: 'string',
      contactInfoDTO: FlightModifyOrderDetailV2ResponseBodyModuleContactInfoDTO,
      destFlightInfoDTOS: { 'type': 'array', 'itemType': FlightModifyOrderDetailV2ResponseBodyModuleDestFlightInfoDTOS },
      lastPayTime: 'string',
      orderId: 'number',
      outOrderId: 'string',
      outSubOrderId: 'string',
      payTime: 'string',
      reason: 'string',
      status: 'number',
      subOrderId: 'number',
      ticketTime: 'string',
      totalPrice: 'number',
      totalServiceFeePrice: 'number',
      travelerInfoDTOS: { 'type': 'array', 'itemType': FlightModifyOrderDetailV2ResponseBodyModuleTravelerInfoDTOS },
    };
  }

  validate() {
    if(this.attributes && typeof (this.attributes as any).validate === 'function') {
      (this.attributes as any).validate();
    }
    if(this.contactInfoDTO && typeof (this.contactInfoDTO as any).validate === 'function') {
      (this.contactInfoDTO as any).validate();
    }
    if(Array.isArray(this.destFlightInfoDTOS)) {
      $dara.Model.validateArray(this.destFlightInfoDTOS);
    }
    if(Array.isArray(this.travelerInfoDTOS)) {
      $dara.Model.validateArray(this.travelerInfoDTOS);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

