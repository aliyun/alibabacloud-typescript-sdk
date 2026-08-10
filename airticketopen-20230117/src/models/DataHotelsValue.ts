// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataHotelsValueRoomsLowestSellingPrice extends $dara.Model {
  /**
   * @remarks
   * The amount.
   * 
   * @example
   * 100.00
   */
  amount?: number;
  /**
   * @remarks
   * The currency code.
   * 
   * @example
   * USD
   */
  currency?: string;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * TraceId
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
      amount: 'number',
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

export class DataHotelsValueRoomsOffersCancelPolicyPenalties extends $dara.Model {
  /**
   * @remarks
   * The effective start time, in UTC millisecond timestamp.
   * 
   * @example
   * 1672531200000
   */
  start?: number;
  /**
   * @remarks
   * The effective end time, in UTC millisecond timestamp.
   * 
   * @example
   * 1672617600000
   */
  end?: number;
  /**
   * @remarks
   * The penalty type. Valid values: PERCENTAGE, AMOUNT, and NIGHTS.
   * 
   * @example
   * PERCENTAGE
   */
  penaltyType?: string;
  /**
   * @remarks
   * The penalty value (percentage, amount, or number of nights).
   * 
   * @example
   * 50
   */
  penaltyValue?: string;
  /**
   * @remarks
   * The currency. This parameter has a value only when PenaltyType is set to AMOUNT.
   * 
   * @example
   * USD
   */
  currency?: string;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * TraceId
   */
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      start: 'Start',
      end: 'End',
      penaltyType: 'PenaltyType',
      penaltyValue: 'PenaltyValue',
      currency: 'Currency',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      start: 'number',
      end: 'number',
      penaltyType: 'string',
      penaltyValue: 'string',
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

export class DataHotelsValueRoomsOffersCancelPolicy extends $dara.Model {
  /**
   * @remarks
   * The policy type. Valid values: NON_REFUNDABLE, FREE_CANCELLATION, and PARTIAL_REFUND.
   * 
   * @example
   * FREE_CANCELLATION
   */
  policyType?: string;
  /**
   * @remarks
   * The list of penalty details.
   */
  penalties?: DataHotelsValueRoomsOffersCancelPolicyPenalties[];
  /**
   * @remarks
   * TraceId
   * 
   * @example
   * TraceId
   */
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      policyType: 'PolicyType',
      penalties: 'Penalties',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyType: 'string',
      penalties: { 'type': 'array', 'itemType': DataHotelsValueRoomsOffersCancelPolicyPenalties },
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

export class DataHotelsValueRoomsOffersSellingTotalPrice extends $dara.Model {
  /**
   * @remarks
   * The amount.
   * 
   * @example
   * 100.00
   */
  amount?: number;
  /**
   * @remarks
   * The currency code.
   * 
   * @example
   * USD
   */
  currency?: string;
  /**
   * @remarks
   * TraceId
   * 
   * @example
   * TraceId
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
      amount: 'number',
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

export class DataHotelsValueRoomsOffersSellingDailyPricesPrice extends $dara.Model {
  /**
   * @remarks
   * The amount.
   * 
   * @example
   * 100.00
   */
  amount?: number;
  /**
   * @remarks
   * The currency code.
   * 
   * @example
   * USD
   */
  currency?: string;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * TraceId
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
      amount: 'number',
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

export class DataHotelsValueRoomsOffersSellingDailyPrices extends $dara.Model {
  /**
   * @remarks
   * The check-in date.
   * 
   * @example
   * 2026-07-01
   */
  date?: string;
  /**
   * @remarks
   * The price for the day.
   */
  price?: DataHotelsValueRoomsOffersSellingDailyPricesPrice;
  /**
   * @remarks
   * TraceId
   * 
   * @example
   * TraceId
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
      price: DataHotelsValueRoomsOffersSellingDailyPricesPrice,
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

export class DataHotelsValueRoomsOffers extends $dara.Model {
  /**
   * @remarks
   * The item-level offer identifier (price verification key, passed through as-is).
   * 
   * @example
   * itemOffer_123
   */
  itemOfferKey?: string;
  /**
   * @remarks
   * The rate plan name.
   * 
   * @example
   * Room with breakfast
   */
  ratePlanName?: string;
  /**
   * @remarks
   * The meal type.
   * 
   * @example
   * BREAKFAST
   */
  mealType?: string;
  /**
   * @remarks
   * The number of meals included.
   * 
   * @example
   * 2
   */
  mealCount?: number;
  /**
   * @remarks
   * The cancellation policy.
   */
  cancelPolicy?: DataHotelsValueRoomsOffersCancelPolicy;
  /**
   * @remarks
   * The total selling price.
   */
  sellingTotalPrice?: DataHotelsValueRoomsOffersSellingTotalPrice;
  /**
   * @remarks
   * The list of daily selling prices.
   */
  sellingDailyPrices?: DataHotelsValueRoomsOffersSellingDailyPrices[];
  /**
   * @remarks
   * The number of available rooms.
   * 
   * @example
   * 5
   */
  availableRooms?: number;
  /**
   * @remarks
   * The maximum number of guests.
   * 
   * @example
   * 3
   */
  maxOccupancy?: number;
  /**
   * @remarks
   * The confirmation type. Valid values: INSTANT_CONFIRM and NON_INSTANT_CONFIRM.
   * 
   * @example
   * INSTANT_CONFIRM
   */
  confirmType?: string;
  static names(): { [key: string]: string } {
    return {
      itemOfferKey: 'ItemOfferKey',
      ratePlanName: 'RatePlanName',
      mealType: 'MealType',
      mealCount: 'MealCount',
      cancelPolicy: 'CancelPolicy',
      sellingTotalPrice: 'SellingTotalPrice',
      sellingDailyPrices: 'SellingDailyPrices',
      availableRooms: 'AvailableRooms',
      maxOccupancy: 'MaxOccupancy',
      confirmType: 'ConfirmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemOfferKey: 'string',
      ratePlanName: 'string',
      mealType: 'string',
      mealCount: 'number',
      cancelPolicy: DataHotelsValueRoomsOffersCancelPolicy,
      sellingTotalPrice: DataHotelsValueRoomsOffersSellingTotalPrice,
      sellingDailyPrices: { 'type': 'array', 'itemType': DataHotelsValueRoomsOffersSellingDailyPrices },
      availableRooms: 'number',
      maxOccupancy: 'number',
      confirmType: 'string',
    };
  }

  validate() {
    if(this.cancelPolicy && typeof (this.cancelPolicy as any).validate === 'function') {
      (this.cancelPolicy as any).validate();
    }
    if(this.sellingTotalPrice && typeof (this.sellingTotalPrice as any).validate === 'function') {
      (this.sellingTotalPrice as any).validate();
    }
    if(Array.isArray(this.sellingDailyPrices)) {
      $dara.Model.validateArray(this.sellingDailyPrices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataHotelsValueRooms extends $dara.Model {
  /**
   * @remarks
   * The standard room type ID.
   * 
   * @example
   * R001
   */
  standardRoomId?: string;
  /**
   * @remarks
   * The lowest selling price for the room type on the day.
   */
  lowestSellingPrice?: DataHotelsValueRoomsLowestSellingPrice;
  /**
   * @remarks
   * The list of all available offers for the room type. Calendar quotes cannot be used for price verification, so itemOfferKey is not returned.
   */
  offers?: DataHotelsValueRoomsOffers[];
  static names(): { [key: string]: string } {
    return {
      standardRoomId: 'StandardRoomId',
      lowestSellingPrice: 'LowestSellingPrice',
      offers: 'Offers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      standardRoomId: 'string',
      lowestSellingPrice: DataHotelsValueRoomsLowestSellingPrice,
      offers: { 'type': 'array', 'itemType': DataHotelsValueRoomsOffers },
    };
  }

  validate() {
    if(this.lowestSellingPrice && typeof (this.lowestSellingPrice as any).validate === 'function') {
      (this.lowestSellingPrice as any).validate();
    }
    if(Array.isArray(this.offers)) {
      $dara.Model.validateArray(this.offers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataHotelsValueOffersCancelPolicyPenalties extends $dara.Model {
  /**
   * @remarks
   * The effective start time (UTC millisecond timestamp).
   * 
   * @example
   * 1672531200000
   */
  start?: number;
  /**
   * @remarks
   * The effective end time (UTC millisecond timestamp).
   * 
   * @example
   * 1672617600000
   */
  end?: number;
  /**
   * @remarks
   * The penalty type (PERCENTAGE/AMOUNT/NIGHTS).
   * 
   * @example
   * PERCENTAGE
   */
  penaltyType?: string;
  /**
   * @remarks
   * The penalty value (percentage/amount/number of nights).
   * 
   * @example
   * 50
   */
  penaltyValue?: string;
  /**
   * @remarks
   * The currency code (only applicable when the penalty type is AMOUNT).
   * 
   * @example
   * USD
   */
  currency?: string;
  /**
   * @remarks
   * TraceId
   * 
   * @example
   * TraceId
   */
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      start: 'Start',
      end: 'End',
      penaltyType: 'PenaltyType',
      penaltyValue: 'PenaltyValue',
      currency: 'Currency',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      start: 'number',
      end: 'number',
      penaltyType: 'string',
      penaltyValue: 'string',
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

export class DataHotelsValueOffersCancelPolicy extends $dara.Model {
  /**
   * @remarks
   * The policy type (NON_REFUNDABLE/FREE_CANCELLATION/PARTIAL_REFUND).
   * 
   * @example
   * FREE_CANCELLATION
   */
  policyType?: string;
  /**
   * @remarks
   * The list of penalty details.
   */
  penalties?: DataHotelsValueOffersCancelPolicyPenalties[];
  /**
   * @remarks
   * TraceId
   * 
   * @example
   * TraceId
   */
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      policyType: 'PolicyType',
      penalties: 'Penalties',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyType: 'string',
      penalties: { 'type': 'array', 'itemType': DataHotelsValueOffersCancelPolicyPenalties },
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

export class DataHotelsValueOffersSellingTotalPrice extends $dara.Model {
  /**
   * @remarks
   * The amount.
   * 
   * @example
   * 100.00
   */
  amount?: number;
  /**
   * @remarks
   * The currency code.
   * 
   * @example
   * USD
   */
  currency?: string;
  /**
   * @remarks
   * TraceId
   * 
   * @example
   * TraceId
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
      amount: 'number',
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

export class DataHotelsValueOffersSellingDailyPricesPrice extends $dara.Model {
  /**
   * @remarks
   * The amount.
   * 
   * @example
   * 100.00
   */
  amount?: number;
  /**
   * @remarks
   * The currency code.
   * 
   * @example
   * USD
   */
  currency?: string;
  /**
   * @remarks
   * TraceId
   * 
   * @example
   * TraceId
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
      amount: 'number',
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

export class DataHotelsValueOffersSellingDailyPrices extends $dara.Model {
  /**
   * @remarks
   * The check-in date.
   * 
   * @example
   * 2026-07-01
   */
  date?: string;
  /**
   * @remarks
   * The price for the day.
   */
  price?: DataHotelsValueOffersSellingDailyPricesPrice;
  /**
   * @remarks
   * TraceId
   * 
   * @example
   * TraceId
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
      price: DataHotelsValueOffersSellingDailyPricesPrice,
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

export class DataHotelsValueOffers extends $dara.Model {
  /**
   * @remarks
   * The item-domain offer identifier (price verification key, passed through as-is).
   * 
   * @example
   * itemOffer_123
   */
  itemOfferKey?: string;
  /**
   * @remarks
   * The rate plan name.
   * 
   * @example
   * Breakfast Included
   */
  ratePlanName?: string;
  /**
   * @remarks
   * The meal type.
   * 
   * @example
   * BREAKFAST
   */
  mealType?: string;
  /**
   * @remarks
   * The number of meals included.
   * 
   * @example
   * 2
   */
  mealCount?: number;
  /**
   * @remarks
   * The cancellation and modification policy.
   */
  cancelPolicy?: DataHotelsValueOffersCancelPolicy;
  /**
   * @remarks
   * The total selling price.
   */
  sellingTotalPrice?: DataHotelsValueOffersSellingTotalPrice;
  /**
   * @remarks
   * The list of daily selling prices.
   */
  sellingDailyPrices?: DataHotelsValueOffersSellingDailyPrices[];
  /**
   * @remarks
   * The number of available rooms.
   * 
   * @example
   * 5
   */
  availableRooms?: number;
  /**
   * @remarks
   * The maximum number of guests allowed.
   * 
   * @example
   * 3
   */
  maxOccupancy?: number;
  /**
   * @remarks
   * The confirmation type (INSTANT_CONFIRM/NON_INSTANT_CONFIRM).
   * 
   * @example
   * INSTANT_CONFIRM
   */
  confirmType?: string;
  static names(): { [key: string]: string } {
    return {
      itemOfferKey: 'ItemOfferKey',
      ratePlanName: 'RatePlanName',
      mealType: 'MealType',
      mealCount: 'MealCount',
      cancelPolicy: 'CancelPolicy',
      sellingTotalPrice: 'SellingTotalPrice',
      sellingDailyPrices: 'SellingDailyPrices',
      availableRooms: 'AvailableRooms',
      maxOccupancy: 'MaxOccupancy',
      confirmType: 'ConfirmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemOfferKey: 'string',
      ratePlanName: 'string',
      mealType: 'string',
      mealCount: 'number',
      cancelPolicy: DataHotelsValueOffersCancelPolicy,
      sellingTotalPrice: DataHotelsValueOffersSellingTotalPrice,
      sellingDailyPrices: { 'type': 'array', 'itemType': DataHotelsValueOffersSellingDailyPrices },
      availableRooms: 'number',
      maxOccupancy: 'number',
      confirmType: 'string',
    };
  }

  validate() {
    if(this.cancelPolicy && typeof (this.cancelPolicy as any).validate === 'function') {
      (this.cancelPolicy as any).validate();
    }
    if(this.sellingTotalPrice && typeof (this.sellingTotalPrice as any).validate === 'function') {
      (this.sellingTotalPrice as any).validate();
    }
    if(Array.isArray(this.sellingDailyPrices)) {
      $dara.Model.validateArray(this.sellingDailyPrices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataHotelsValue extends $dara.Model {
  /**
   * @remarks
   * The check-in date in the format of yyyy-MM-dd.
   * 
   * @example
   * 2026-01-01
   */
  checkInDate?: string;
  /**
   * @remarks
   * The check-out date in the format of yyyy-MM-dd.
   * 
   * @example
   * 2026-01-02
   */
  checkOutDate?: string;
  /**
   * @remarks
   * The list of available room types for the day.
   */
  rooms?: DataHotelsValueRooms[];
  /**
   * @remarks
   * The standard room type ID.
   * 
   * @example
   * R001
   */
  standardRoomId?: string;
  /**
   * @remarks
   * All available offers for the room type.
   */
  offers?: DataHotelsValueOffers[];
  static names(): { [key: string]: string } {
    return {
      checkInDate: 'CheckInDate',
      checkOutDate: 'CheckOutDate',
      rooms: 'Rooms',
      standardRoomId: 'StandardRoomId',
      offers: 'Offers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkInDate: 'string',
      checkOutDate: 'string',
      rooms: { 'type': 'array', 'itemType': DataHotelsValueRooms },
      standardRoomId: 'string',
      offers: { 'type': 'array', 'itemType': DataHotelsValueOffers },
    };
  }

  validate() {
    if(Array.isArray(this.rooms)) {
      $dara.Model.validateArray(this.rooms);
    }
    if(Array.isArray(this.offers)) {
      $dara.Model.validateArray(this.offers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

