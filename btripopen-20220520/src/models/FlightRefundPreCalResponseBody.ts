// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightRefundPreCalResponseBodyModuleMultiRefundCalList extends $dara.Model {
  /**
   * @example
   * true
   */
  canApplyRefund?: boolean;
  name?: string;
  /**
   * @example
   * 1000
   */
  preRefundMoney?: number;
  /**
   * @example
   * 1000
   */
  refundFee?: number;
  /**
   * @example
   * 124
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      canApplyRefund: 'can_apply_refund',
      name: 'name',
      preRefundMoney: 'pre_refund_money',
      refundFee: 'refund_fee',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canApplyRefund: 'boolean',
      name: 'string',
      preRefundMoney: 'number',
      refundFee: 'number',
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

export class FlightRefundPreCalResponseBodyModuleReturnReason extends $dara.Model {
  extendDesc?: string;
  /**
   * @example
   * 0
   */
  person?: number;
  /**
   * @example
   * 0
   */
  reasonCode?: number;
  reasonShow?: string;
  /**
   * @example
   * 1
   */
  reasonType?: number;
  /**
   * @example
   * 0
   */
  volunteer?: number;
  static names(): { [key: string]: string } {
    return {
      extendDesc: 'extend_desc',
      person: 'person',
      reasonCode: 'reason_code',
      reasonShow: 'reason_show',
      reasonType: 'reason_type',
      volunteer: 'volunteer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendDesc: 'string',
      person: 'number',
      reasonCode: 'number',
      reasonShow: 'string',
      reasonType: 'number',
      volunteer: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightRefundPreCalResponseBodyModule extends $dara.Model {
  /**
   * @example
   * false
   */
  flightChange?: boolean;
  /**
   * @example
   * FlightItem_996677504
   */
  itemUnitId?: string;
  multiRefundCalList?: FlightRefundPreCalResponseBodyModuleMultiRefundCalList[];
  /**
   * @example
   * 1000
   */
  preRefundMoney?: number;
  /**
   * @example
   * 1000
   */
  refundFee?: number;
  returnReason?: FlightRefundPreCalResponseBodyModuleReturnReason[];
  /**
   * @example
   * 882sudu23s923j9d2
   */
  sessionId?: string;
  tips?: string;
  static names(): { [key: string]: string } {
    return {
      flightChange: 'flight_change',
      itemUnitId: 'item_unit_id',
      multiRefundCalList: 'multi_refund_cal_list',
      preRefundMoney: 'pre_refund_money',
      refundFee: 'refund_fee',
      returnReason: 'return_reason',
      sessionId: 'session_id',
      tips: 'tips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightChange: 'boolean',
      itemUnitId: 'string',
      multiRefundCalList: { 'type': 'array', 'itemType': FlightRefundPreCalResponseBodyModuleMultiRefundCalList },
      preRefundMoney: 'number',
      refundFee: 'number',
      returnReason: { 'type': 'array', 'itemType': FlightRefundPreCalResponseBodyModuleReturnReason },
      sessionId: 'string',
      tips: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.multiRefundCalList)) {
      $dara.Model.validateArray(this.multiRefundCalList);
    }
    if(Array.isArray(this.returnReason)) {
      $dara.Model.validateArray(this.returnReason);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightRefundPreCalResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  module?: FlightRefundPreCalResponseBodyModule;
  /**
   * @example
   * A5009956-1077-52FB-B520-EA8C7E91D722
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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
      module: FlightRefundPreCalResponseBodyModule,
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

