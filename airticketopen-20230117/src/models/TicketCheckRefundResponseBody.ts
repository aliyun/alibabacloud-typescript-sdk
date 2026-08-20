// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketCheckRefundResponseBodyDataRefundAmount extends $dara.Model {
  /**
   * @example
   * 10000
   */
  amount?: number;
  /**
   * @example
   * USD
   */
  currencyCode?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      currencyCode: 'CurrencyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      currencyCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketCheckRefundResponseBodyDataRefundRuleRefundStageRulesFrom extends $dara.Model {
  /**
   * @example
   * 1
   */
  anchor?: number;
  /**
   * @example
   * 2026-01-01
   */
  fixedTime?: string;
  /**
   * @example
   * 18:00
   */
  offsetDayOfTime?: string;
  /**
   * @example
   * 1
   */
  offsetUnit?: number;
  /**
   * @example
   * 1
   */
  offsetValue?: number;
  static names(): { [key: string]: string } {
    return {
      anchor: 'Anchor',
      fixedTime: 'FixedTime',
      offsetDayOfTime: 'OffsetDayOfTime',
      offsetUnit: 'OffsetUnit',
      offsetValue: 'OffsetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchor: 'number',
      fixedTime: 'string',
      offsetDayOfTime: 'string',
      offsetUnit: 'number',
      offsetValue: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketCheckRefundResponseBodyDataRefundRuleRefundStageRulesTo extends $dara.Model {
  /**
   * @example
   * 1
   */
  anchor?: number;
  /**
   * @example
   * 2026-01-01
   */
  fixedTime?: string;
  /**
   * @example
   * 18:00
   */
  offsetDayOfTime?: string;
  /**
   * @example
   * 1
   */
  offsetUnit?: number;
  /**
   * @example
   * 1
   */
  offsetValue?: number;
  static names(): { [key: string]: string } {
    return {
      anchor: 'Anchor',
      fixedTime: 'FixedTime',
      offsetDayOfTime: 'OffsetDayOfTime',
      offsetUnit: 'OffsetUnit',
      offsetValue: 'OffsetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchor: 'number',
      fixedTime: 'string',
      offsetDayOfTime: 'string',
      offsetUnit: 'number',
      offsetValue: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketCheckRefundResponseBodyDataRefundRuleRefundStageRules extends $dara.Model {
  fee?: number;
  /**
   * @example
   * 1
   */
  feeBase?: number;
  /**
   * @example
   * 1
   */
  feeType?: number;
  from?: TicketCheckRefundResponseBodyDataRefundRuleRefundStageRulesFrom;
  to?: TicketCheckRefundResponseBodyDataRefundRuleRefundStageRulesTo;
  static names(): { [key: string]: string } {
    return {
      fee: 'Fee',
      feeBase: 'FeeBase',
      feeType: 'FeeType',
      from: 'From',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fee: 'number',
      feeBase: 'number',
      feeType: 'number',
      from: TicketCheckRefundResponseBodyDataRefundRuleRefundStageRulesFrom,
      to: TicketCheckRefundResponseBodyDataRefundRuleRefundStageRulesTo,
    };
  }

  validate() {
    if(this.from && typeof (this.from as any).validate === 'function') {
      (this.from as any).validate();
    }
    if(this.to && typeof (this.to as any).validate === 'function') {
      (this.to as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketCheckRefundResponseBodyDataRefundRule extends $dara.Model {
  refundStageRules?: TicketCheckRefundResponseBodyDataRefundRuleRefundStageRules[];
  /**
   * @example
   * 2
   */
  refundType?: number;
  static names(): { [key: string]: string } {
    return {
      refundStageRules: 'RefundStageRules',
      refundType: 'RefundType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refundStageRules: { 'type': 'array', 'itemType': TicketCheckRefundResponseBodyDataRefundRuleRefundStageRules },
      refundType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.refundStageRules)) {
      $dara.Model.validateArray(this.refundStageRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketCheckRefundResponseBodyData extends $dara.Model {
  /**
   * @example
   * true
   */
  canRefund?: boolean;
  refundAmount?: TicketCheckRefundResponseBodyDataRefundAmount;
  refundRule?: TicketCheckRefundResponseBodyDataRefundRule;
  static names(): { [key: string]: string } {
    return {
      canRefund: 'CanRefund',
      refundAmount: 'RefundAmount',
      refundRule: 'RefundRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canRefund: 'boolean',
      refundAmount: TicketCheckRefundResponseBodyDataRefundAmount,
      refundRule: TicketCheckRefundResponseBodyDataRefundRule,
    };
  }

  validate() {
    if(this.refundAmount && typeof (this.refundAmount as any).validate === 'function') {
      (this.refundAmount as any).validate();
    }
    if(this.refundRule && typeof (this.refundRule as any).validate === 'function') {
      (this.refundRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketCheckRefundResponseBody extends $dara.Model {
  data?: TicketCheckRefundResponseBodyData;
  /**
   * @example
   * DistributorOrderIdInvalid
   */
  errorCode?: string;
  /**
   * @example
   * 分销商订单号不合法
   */
  errorMsg?: string;
  /**
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: TicketCheckRefundResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

