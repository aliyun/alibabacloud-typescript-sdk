// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GlobalHotelValidatePriceResponseBodyDataCancellationPoliciesPenalties extends $dara.Model {
  /**
   * @remarks
   * The currency code. This field has a value only when the penalty type is AMOUNT.
   * 
   * @example
   * USD
   */
  currency?: string;
  /**
   * @remarks
   * The effective end time as a UTC millisecond timestamp.
   * 
   * @example
   * 1672617600000
   */
  end?: string;
  /**
   * @remarks
   * The penalty type (PERCENT/NIGHTS/NON_CANCELLABLE).
   * 
   * @example
   * PERCENTAGE
   */
  penaltyType?: string;
  /**
   * @remarks
   * The penalty value (percentage, amount, or number of nights). This field is not present when PenaltyType is NON_CANCELLABLE.
   * 
   * @example
   * 50
   */
  penaltyValue?: string;
  /**
   * @remarks
   * The effective start time as a UTC millisecond timestamp.
   * 
   * @example
   * 1672531200000
   */
  start?: string;
  /**
   * @remarks
   * TracerId
   * 
   * @example
   * TracerId
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
      end: 'string',
      penaltyType: 'string',
      penaltyValue: 'string',
      start: 'string',
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

export class GlobalHotelValidatePriceResponseBodyDataCancellationPolicies extends $dara.Model {
  /**
   * @remarks
   * The list of cancellation penalty details.
   */
  penalties?: GlobalHotelValidatePriceResponseBodyDataCancellationPoliciesPenalties[];
  /**
   * @remarks
   * The cancellation policy type (FREE_CANCEL/CONDITIONAL/NON_REFUNDABLE).
   * 
   * @example
   * FREE_CANCELLATION
   */
  policyType?: string;
  /**
   * @remarks
   * TracerId
   * 
   * @example
   * TracerId
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
      penalties: { 'type': 'array', 'itemType': GlobalHotelValidatePriceResponseBodyDataCancellationPoliciesPenalties },
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

export class GlobalHotelValidatePriceResponseBodyDataDailyPricesPrice extends $dara.Model {
  /**
   * @remarks
   * The amount in the smallest currency unit.
   * 
   * @example
   * 574
   */
  amount?: string;
  /**
   * @remarks
   * The currency code (ISO 4217).
   * 
   * @example
   * USD
   */
  currency?: string;
  /**
   * @remarks
   * null
   * 
   * @example
   * null
   */
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      currency: 'Currency',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      currency: 'string',
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

export class GlobalHotelValidatePriceResponseBodyDataDailyPrices extends $dara.Model {
  /**
   * @remarks
   * The date in yyyy-MM-dd format, in the local time zone of the hotel.
   * 
   * @example
   * 2026-08-16
   */
  date?: string;
  /**
   * @remarks
   * The price for the night.
   */
  price?: GlobalHotelValidatePriceResponseBodyDataDailyPricesPrice;
  /**
   * @remarks
   * null
   * 
   * @example
   * null
   */
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      price: 'Price',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      price: GlobalHotelValidatePriceResponseBodyDataDailyPricesPrice,
      tracerId: 'string',
    };
  }

  validate() {
    if(this.price && typeof (this.price as any).validate === 'function') {
      (this.price as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GlobalHotelValidatePriceResponseBodyDataTotalPrice extends $dara.Model {
  /**
   * @remarks
   * The amount in the smallest currency unit.
   * 
   * @example
   * 574
   */
  amount?: string;
  /**
   * @remarks
   * The currency code (ISO 4217).
   * 
   * @example
   * USD
   */
  currency?: string;
  /**
   * @remarks
   * null
   * 
   * @example
   * null
   */
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      currency: 'Currency',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      currency: 'string',
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

export class GlobalHotelValidatePriceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cancellation policies.
   */
  cancellationPolicies?: GlobalHotelValidatePriceResponseBodyDataCancellationPolicies[];
  /**
   * @remarks
   * The list of daily prices.
   */
  dailyPrices?: GlobalHotelValidatePriceResponseBodyDataDailyPrices[];
  /**
   * @remarks
   * The price validation result ID, used for subsequent order creation.
   * 
   * @example
   * itemOffer_123
   */
  itemOfferId?: string;
  /**
   * @remarks
   * The total selling price.
   */
  totalPrice?: GlobalHotelValidatePriceResponseBodyDataTotalPrice;
  /**
   * @remarks
   * TracerId
   * 
   * @example
   * TracerId
   */
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      cancellationPolicies: 'CancellationPolicies',
      dailyPrices: 'DailyPrices',
      itemOfferId: 'ItemOfferId',
      totalPrice: 'TotalPrice',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancellationPolicies: { 'type': 'array', 'itemType': GlobalHotelValidatePriceResponseBodyDataCancellationPolicies },
      dailyPrices: { 'type': 'array', 'itemType': GlobalHotelValidatePriceResponseBodyDataDailyPrices },
      itemOfferId: 'string',
      totalPrice: GlobalHotelValidatePriceResponseBodyDataTotalPrice,
      tracerId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cancellationPolicies)) {
      $dara.Model.validateArray(this.cancellationPolicies);
    }
    if(Array.isArray(this.dailyPrices)) {
      $dara.Model.validateArray(this.dailyPrices);
    }
    if(this.totalPrice && typeof (this.totalPrice as any).validate === 'function') {
      (this.totalPrice as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GlobalHotelValidatePriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business data.
   */
  data?: GlobalHotelValidatePriceResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * CreateOrderFailed
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Failed to create order
   */
  errorMsg?: string;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 260E4F99-983D-1919-834C-5C42E98E5B2B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * TracerId
   * 
   * @example
   * TracerId
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
      data: GlobalHotelValidatePriceResponseBodyData,
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

