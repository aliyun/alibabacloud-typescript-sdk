// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightRefundPreCalV2ResponseBodyModuleMultiRefundFeeDTOS } from "./FlightRefundPreCalV2responseBodyModuleMultiRefundFeeDtos";
import { FlightRefundPreCalV2ResponseBodyModuleRefundReasonOptionDTOS } from "./FlightRefundPreCalV2responseBodyModuleRefundReasonOptionDtos";


export class FlightRefundPreCalV2ResponseBodyModule extends $dara.Model {
  multiRefundFeeDTOS?: FlightRefundPreCalV2ResponseBodyModuleMultiRefundFeeDTOS[];
  /**
   * @example
   * 10000
   */
  preRefundMoney?: number;
  /**
   * @example
   * 100
   */
  refundChargeFee?: number;
  refundReasonOptionDTOS?: FlightRefundPreCalV2ResponseBodyModuleRefundReasonOptionDTOS[];
  /**
   * @example
   * 100
   */
  serviceChargeFee?: number;
  static names(): { [key: string]: string } {
    return {
      multiRefundFeeDTOS: 'multi_refund_fee_d_t_o_s',
      preRefundMoney: 'pre_refund_money',
      refundChargeFee: 'refund_charge_fee',
      refundReasonOptionDTOS: 'refund_reason_option_d_t_o_s',
      serviceChargeFee: 'service_charge_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multiRefundFeeDTOS: { 'type': 'array', 'itemType': FlightRefundPreCalV2ResponseBodyModuleMultiRefundFeeDTOS },
      preRefundMoney: 'number',
      refundChargeFee: 'number',
      refundReasonOptionDTOS: { 'type': 'array', 'itemType': FlightRefundPreCalV2ResponseBodyModuleRefundReasonOptionDTOS },
      serviceChargeFee: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.multiRefundFeeDTOS)) {
      $dara.Model.validateArray(this.multiRefundFeeDTOS);
    }
    if(Array.isArray(this.refundReasonOptionDTOS)) {
      $dara.Model.validateArray(this.refundReasonOptionDTOS);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

