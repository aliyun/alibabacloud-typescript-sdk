// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataHotelsValueRoomsLowestPrice extends $dara.Model {
  /**
   * @remarks
   * The amount in the smallest currency unit.
   * 
   * @example
   * 287
   */
  amount?: string;
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

export class DataHotelsValueRoomsOffersCancelPolicyPenalties extends $dara.Model {
  /**
   * @remarks
   * The effective start time (UTC millisecond timestamp).
   * 
   * @example
   * 1672531200000
   */
  start?: string;
  /**
   * @remarks
   * The effective end time (UTC millisecond timestamp).
   * 
   * @example
   * 1672617600000
   */
  end?: string;
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
   * The penalty value (percentage/amount/nights).
   * 
   * @example
   * 50
   */
  penaltyValue?: string;
  /**
   * @remarks
   * The currency code (present only when the penalty type is AMOUNT).
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
      start: 'string',
      end: 'string',
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

export class DataHotelsValueRoomsOffersTotalPrice extends $dara.Model {
  /**
   * @remarks
   * The amount in the smallest currency unit.
   * 
   * @example
   * 287
   */
  amount?: string;
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

export class DataHotelsValueRoomsOffersDailyPricesPrice extends $dara.Model {
  /**
   * @remarks
   * The amount in the smallest currency unit.
   * 
   * @example
   * 287
   */
  amount?: string;
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

export class DataHotelsValueRoomsOffersDailyPrices extends $dara.Model {
  /**
   * @remarks
   * The check-in date (yyyy-MM-dd, time zone: hotel local time zone).
   * 
   * @example
   * 2026-08-16
   */
  date?: string;
  /**
   * @remarks
   * The price for the day.
   */
  price?: DataHotelsValueRoomsOffersDailyPricesPrice;
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
      price: DataHotelsValueRoomsOffersDailyPricesPrice,
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
   * The item-level offer identifier (price verification key, pass through as-is).
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
   * Breakfast included
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
  totalPrice?: DataHotelsValueRoomsOffersTotalPrice;
  /**
   * @remarks
   * The list of daily prices.
   */
  dailyPrices?: DataHotelsValueRoomsOffersDailyPrices[];
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
      totalPrice: 'TotalPrice',
      dailyPrices: 'DailyPrices',
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
      totalPrice: DataHotelsValueRoomsOffersTotalPrice,
      dailyPrices: { 'type': 'array', 'itemType': DataHotelsValueRoomsOffersDailyPrices },
      availableRooms: 'number',
      maxOccupancy: 'number',
      confirmType: 'string',
    };
  }

  validate() {
    if(this.cancelPolicy && typeof (this.cancelPolicy as any).validate === 'function') {
      (this.cancelPolicy as any).validate();
    }
    if(this.totalPrice && typeof (this.totalPrice as any).validate === 'function') {
      (this.totalPrice as any).validate();
    }
    if(Array.isArray(this.dailyPrices)) {
      $dara.Model.validateArray(this.dailyPrices);
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
   * The lowest price for the room type on the day.
   */
  lowestPrice?: DataHotelsValueRoomsLowestPrice;
  /**
   * @remarks
   * The list of all available offers for the room type.
   */
  offers?: DataHotelsValueRoomsOffers[];
  static names(): { [key: string]: string } {
    return {
      standardRoomId: 'StandardRoomId',
      lowestPrice: 'LowestPrice',
      offers: 'Offers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      standardRoomId: 'string',
      lowestPrice: DataHotelsValueRoomsLowestPrice,
      offers: { 'type': 'array', 'itemType': DataHotelsValueRoomsOffers },
    };
  }

  validate() {
    if(this.lowestPrice && typeof (this.lowestPrice as any).validate === 'function') {
      (this.lowestPrice as any).validate();
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
   * The effective start time as a UTC millisecond timestamp.
   * 
   * @example
   * 1672531200000
   */
  start?: string;
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
   * The penalty type (PERCENTAGE/AMOUNT/NIGHTS).
   * 
   * @example
   * PERCENTAGE
   */
  penaltyType?: string;
  /**
   * @remarks
   * The penalty value (percentage/amount/nights).
   * 
   * @example
   * 50
   */
  penaltyValue?: string;
  /**
   * @remarks
   * The currency code. This field is present only when the penalty type is AMOUNT.
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
      start: 'string',
      end: 'string',
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

export class DataHotelsValueOffersTotalPrice extends $dara.Model {
  /**
   * @remarks
   * The amount in the smallest currency unit.
   * 
   * @example
   * 287
   */
  amount?: string;
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

export class DataHotelsValueOffersDailyPricesPrice extends $dara.Model {
  /**
   * @remarks
   * The amount in the smallest currency unit.
   * 
   * @example
   * 287
   */
  amount?: string;
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

export class DataHotelsValueOffersDailyPrices extends $dara.Model {
  /**
   * @remarks
   * The check-in date in yyyy-MM-dd format, based on the hotel local time zone.
   * 
   * @example
   * 2026-08-16
   */
  date?: string;
  /**
   * @remarks
   * The price for the day.
   */
  price?: DataHotelsValueOffersDailyPricesPrice;
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
      price: DataHotelsValueOffersDailyPricesPrice,
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
   * The item offer key used for price verification. Pass through this value as-is.
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
   * The cancellation policy.
   */
  cancelPolicy?: DataHotelsValueOffersCancelPolicy;
  /**
   * @remarks
   * The total selling price.
   */
  totalPrice?: DataHotelsValueOffersTotalPrice;
  /**
   * @remarks
   * The list of daily prices.
   */
  dailyPrices?: DataHotelsValueOffersDailyPrices[];
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
      totalPrice: 'TotalPrice',
      dailyPrices: 'DailyPrices',
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
      totalPrice: DataHotelsValueOffersTotalPrice,
      dailyPrices: { 'type': 'array', 'itemType': DataHotelsValueOffersDailyPrices },
      availableRooms: 'number',
      maxOccupancy: 'number',
      confirmType: 'string',
    };
  }

  validate() {
    if(this.cancelPolicy && typeof (this.cancelPolicy as any).validate === 'function') {
      (this.cancelPolicy as any).validate();
    }
    if(this.totalPrice && typeof (this.totalPrice as any).validate === 'function') {
      (this.totalPrice as any).validate();
    }
    if(Array.isArray(this.dailyPrices)) {
      $dara.Model.validateArray(this.dailyPrices);
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
   * The check-in date (yyyy-MM-dd).
   * 
   * @example
   * 2026-01-01
   */
  checkInDate?: string;
  /**
   * @remarks
   * The check-out date (yyyy-MM-dd).
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

