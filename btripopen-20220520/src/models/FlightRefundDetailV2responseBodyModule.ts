// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightRefundDetailV2ResponseBodyModuleContactInfoDTO } from "./FlightRefundDetailV2responseBodyModuleContactInfoDto";
import { FlightRefundDetailV2ResponseBodyModuleFlightInfoDTOS } from "./FlightRefundDetailV2responseBodyModuleFlightInfoDtos";
import { FlightRefundDetailV2ResponseBodyModuleTravelerInfoDTOS } from "./FlightRefundDetailV2responseBodyModuleTravelerInfoDtos";


export class FlightRefundDetailV2ResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 2023-08-19 17:18:19
   */
  applyTime?: string;
  contactInfoDTO?: FlightRefundDetailV2ResponseBodyModuleContactInfoDTO;
  flightInfoDTOS?: FlightRefundDetailV2ResponseBodyModuleFlightInfoDTOS[];
  nonRefundableChangeServicePrice?: number;
  nonRefundableChangeUpgradePrice?: number;
  /**
   * @example
   * 1002039195025156700
   */
  orderId?: number;
  /**
   * @example
   * 1002039195025156700
   */
  outOrderId?: string;
  /**
   * @example
   * 1019195836916039
   */
  outSubOrderId?: string;
  reason?: string;
  /**
   * @example
   * 1
   */
  reasonCode?: string;
  refundFailReason?: string;
  /**
   * @example
   * 100
   */
  refundHandlingFee?: number;
  /**
   * @example
   * 10000
   */
  refundMoney?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 1000000000297003
   */
  subOrderId?: number;
  travelerInfoDTOS?: FlightRefundDetailV2ResponseBodyModuleTravelerInfoDTOS[];
  static names(): { [key: string]: string } {
    return {
      applyTime: 'apply_time',
      contactInfoDTO: 'contact_info_d_t_o',
      flightInfoDTOS: 'flight_info_d_t_o_s',
      nonRefundableChangeServicePrice: 'non_refundable_change_service_price',
      nonRefundableChangeUpgradePrice: 'non_refundable_change_upgrade_price',
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      outSubOrderId: 'out_sub_order_id',
      reason: 'reason',
      reasonCode: 'reason_code',
      refundFailReason: 'refund_fail_reason',
      refundHandlingFee: 'refund_handling_fee',
      refundMoney: 'refund_money',
      status: 'status',
      subOrderId: 'sub_order_id',
      travelerInfoDTOS: 'traveler_info_d_t_o_s',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyTime: 'string',
      contactInfoDTO: FlightRefundDetailV2ResponseBodyModuleContactInfoDTO,
      flightInfoDTOS: { 'type': 'array', 'itemType': FlightRefundDetailV2ResponseBodyModuleFlightInfoDTOS },
      nonRefundableChangeServicePrice: 'number',
      nonRefundableChangeUpgradePrice: 'number',
      orderId: 'number',
      outOrderId: 'string',
      outSubOrderId: 'string',
      reason: 'string',
      reasonCode: 'string',
      refundFailReason: 'string',
      refundHandlingFee: 'number',
      refundMoney: 'number',
      status: 'number',
      subOrderId: 'number',
      travelerInfoDTOS: { 'type': 'array', 'itemType': FlightRefundDetailV2ResponseBodyModuleTravelerInfoDTOS },
    };
  }

  validate() {
    if(this.contactInfoDTO && typeof (this.contactInfoDTO as any).validate === 'function') {
      (this.contactInfoDTO as any).validate();
    }
    if(Array.isArray(this.flightInfoDTOS)) {
      $dara.Model.validateArray(this.flightInfoDTOS);
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

