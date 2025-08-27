// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightRefundPreCalV2ResponseBodyModuleMultiRefundFeeDTOS extends $dara.Model {
  /**
   * @example
   * 3243028
   */
  passengerId?: string;
  passengerName?: string;
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
  static names(): { [key: string]: string } {
    return {
      passengerId: 'passenger_id',
      passengerName: 'passenger_name',
      preRefundMoney: 'pre_refund_money',
      refundChargeFee: 'refund_charge_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerId: 'string',
      passengerName: 'string',
      preRefundMoney: 'number',
      refundChargeFee: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightRefundPreCalV2ResponseBodyModuleRefundReasonOptionDTOS extends $dara.Model {
  reason?: string;
  /**
   * @example
   * 2
   */
  reasonType?: number;
  /**
   * @example
   * true
   */
  volunteer?: boolean;
  static names(): { [key: string]: string } {
    return {
      reason: 'reason',
      reasonType: 'reason_type',
      volunteer: 'volunteer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: 'string',
      reasonType: 'number',
      volunteer: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class FlightRefundPreCalV2ResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  message?: string;
  /**
   * @remarks
   * module
   */
  module?: FlightRefundPreCalV2ResponseBodyModule;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 92359A00-85D8-16C4-AED0-249618DEEC17
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 21041ce316577904808056433edbb2
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: FlightRefundPreCalV2ResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

