// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataHotelsValueRoomsLowestSellingPrice extends $dara.Model {
  /**
   * @example
   * 100.00
   */
  amount?: number;
  /**
   * @example
   * USD
   */
  currency?: string;
  /**
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
   * @example
   * 1672531200000
   */
  start?: number;
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
   * USD
   */
  currency?: string;
  /**
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
   * @example
   * FREE_CANCELLATION
   */
  policyType?: string;
  penalties?: DataHotelsValueRoomsOffersCancelPolicyPenalties[];
  /**
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
   * @example
   * 100.00
   */
  amount?: number;
  /**
   * @example
   * USD
   */
  currency?: string;
  /**
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
   * @example
   * 100.00
   */
  amount?: number;
  /**
   * @example
   * USD
   */
  currency?: string;
  /**
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
   * @example
   * 2026-07-01
   */
  date?: string;
  price?: DataHotelsValueRoomsOffersSellingDailyPricesPrice;
  /**
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
   * @example
   * itemOffer_123
   */
  itemOfferKey?: string;
  /**
   * @example
   * 含早房
   */
  ratePlanName?: string;
  /**
   * @example
   * BREAKFAST
   */
  mealType?: string;
  /**
   * @example
   * 2
   */
  mealCount?: number;
  cancelPolicy?: DataHotelsValueRoomsOffersCancelPolicy;
  sellingTotalPrice?: DataHotelsValueRoomsOffersSellingTotalPrice;
  sellingDailyPrices?: DataHotelsValueRoomsOffersSellingDailyPrices[];
  /**
   * @example
   * 5
   */
  availableRooms?: number;
  /**
   * @example
   * 3
   */
  maxOccupancy?: number;
  /**
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
   * @example
   * R001
   */
  standardRoomId?: string;
  lowestSellingPrice?: DataHotelsValueRoomsLowestSellingPrice;
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
   * @example
   * 1672531200000
   */
  start?: number;
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
   * USD
   */
  currency?: string;
  /**
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
   * @example
   * FREE_CANCELLATION
   */
  policyType?: string;
  penalties?: DataHotelsValueOffersCancelPolicyPenalties[];
  /**
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
   * @example
   * 100.00
   */
  amount?: number;
  /**
   * @example
   * USD
   */
  currency?: string;
  /**
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
   * @example
   * 100.00
   */
  amount?: number;
  /**
   * @example
   * USD
   */
  currency?: string;
  /**
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
   * @example
   * 2026-07-01
   */
  date?: string;
  price?: DataHotelsValueOffersSellingDailyPricesPrice;
  /**
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
   * @example
   * itemOffer_123
   */
  itemOfferKey?: string;
  /**
   * @example
   * 含早房
   */
  ratePlanName?: string;
  /**
   * @example
   * BREAKFAST
   */
  mealType?: string;
  /**
   * @example
   * 2
   */
  mealCount?: number;
  cancelPolicy?: DataHotelsValueOffersCancelPolicy;
  sellingTotalPrice?: DataHotelsValueOffersSellingTotalPrice;
  sellingDailyPrices?: DataHotelsValueOffersSellingDailyPrices[];
  /**
   * @example
   * 5
   */
  availableRooms?: number;
  /**
   * @example
   * 3
   */
  maxOccupancy?: number;
  /**
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
   * @example
   * 2026-01-01
   */
  checkInDate?: string;
  /**
   * @example
   * 2026-01-02
   */
  checkOutDate?: string;
  rooms?: DataHotelsValueRooms[];
  /**
   * @example
   * R001
   */
  standardRoomId?: string;
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

