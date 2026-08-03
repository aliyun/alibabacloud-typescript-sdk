// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidatePriceResponseBodyDataCancellationPoliciesPenalties extends $dara.Model {
  /**
   * @example
   * USD
   */
  currency?: string;
  /**
   * @example
   * 1672617600000
   */
  end?: number;
  /**
   * @example
   * PERCENTAGE
   */
  penaltyType?: string;
  /**
   * @example
   * 50
   */
  penaltyValue?: string;
  /**
   * @example
   * 1672531200000
   */
  start?: number;
  /**
   * @example
   * traceId
   */
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      end: 'End',
      penaltyType: 'PenaltyType',
      penaltyValue: 'PenaltyValue',
      start: 'Start',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      end: 'number',
      penaltyType: 'string',
      penaltyValue: 'string',
      start: 'number',
      tracerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidatePriceResponseBodyDataCancellationPolicies extends $dara.Model {
  penalties?: ValidatePriceResponseBodyDataCancellationPoliciesPenalties[];
  /**
   * @example
   * FREE_CANCELLATION
   */
  policyType?: string;
  /**
   * @example
   * traceId
   */
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      penalties: 'Penalties',
      policyType: 'PolicyType',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      penalties: { 'type': 'array', 'itemType': ValidatePriceResponseBodyDataCancellationPoliciesPenalties },
      policyType: 'string',
      tracerId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.penalties)) {
      $dara.Model.validateArray(this.penalties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidatePriceResponseBodyDataPricingNightlyPrices extends $dara.Model {
  /**
   * @example
   * 5000
   */
  amount?: string;
  /**
   * @example
   * 2026-07-01
   */
  date?: string;
  /**
   * @example
   * traceId
   */
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      date: 'Date',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      date: 'string',
      tracerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidatePriceResponseBodyDataPricing extends $dara.Model {
  /**
   * @example
   * USD
   */
  currency?: string;
  nightlyPrices?: ValidatePriceResponseBodyDataPricingNightlyPrices[];
  /**
   * @example
   * 10000
   */
  totalAmount?: string;
  /**
   * @example
   * traceId
   */
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      nightlyPrices: 'NightlyPrices',
      totalAmount: 'TotalAmount',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      nightlyPrices: { 'type': 'array', 'itemType': ValidatePriceResponseBodyDataPricingNightlyPrices },
      totalAmount: 'string',
      tracerId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nightlyPrices)) {
      $dara.Model.validateArray(this.nightlyPrices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidatePriceResponseBodyData extends $dara.Model {
  cancellationPolicies?: ValidatePriceResponseBodyDataCancellationPolicies[];
  /**
   * @example
   * itemOffer_123
   */
  itemOfferId?: string;
  pricing?: ValidatePriceResponseBodyDataPricing;
  /**
   * @example
   * traceId
   */
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      cancellationPolicies: 'CancellationPolicies',
      itemOfferId: 'ItemOfferId',
      pricing: 'Pricing',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancellationPolicies: { 'type': 'array', 'itemType': ValidatePriceResponseBodyDataCancellationPolicies },
      itemOfferId: 'string',
      pricing: ValidatePriceResponseBodyDataPricing,
      tracerId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cancellationPolicies)) {
      $dara.Model.validateArray(this.cancellationPolicies);
    }
    if(this.pricing && typeof (this.pricing as any).validate === 'function') {
      (this.pricing as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidatePriceResponseBody extends $dara.Model {
  data?: ValidatePriceResponseBodyData;
  /**
   * @example
   * CreateOrderFailed
   */
  errorCode?: string;
  /**
   * @example
   * 创建订单失败
   */
  errorMsg?: string;
  /**
   * @example
   * 260E4F99-983D-1919-834C-5C42E98E5B2B
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * traceId
   */
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ValidatePriceResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
      tracerId: 'string',
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

