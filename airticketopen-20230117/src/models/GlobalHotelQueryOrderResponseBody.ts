// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GlobalHotelQueryOrderResponseBodyDataItemInfoCancelPolicyPenalties extends $dara.Model {
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

export class GlobalHotelQueryOrderResponseBodyDataItemInfoCancelPolicy extends $dara.Model {
  penalties?: GlobalHotelQueryOrderResponseBodyDataItemInfoCancelPolicyPenalties[];
  /**
   * @example
   * FREE_CANCELLATION
   */
  policyType?: string;
  /**
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
      penalties: { 'type': 'array', 'itemType': GlobalHotelQueryOrderResponseBodyDataItemInfoCancelPolicyPenalties },
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

export class GlobalHotelQueryOrderResponseBodyDataItemInfoDailyPricesPriceCurrency extends $dara.Model {
  /**
   * @example
   * USD
   */
  currencyCode?: string;
  /**
   * @example
   * 1
   */
  defaultFractionDigits?: number;
  /**
   * @example
   * 1
   */
  numericCode?: number;
  static names(): { [key: string]: string } {
    return {
      currencyCode: 'CurrencyCode',
      defaultFractionDigits: 'DefaultFractionDigits',
      numericCode: 'NumericCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currencyCode: 'string',
      defaultFractionDigits: 'number',
      numericCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GlobalHotelQueryOrderResponseBodyDataItemInfoDailyPricesPrice extends $dara.Model {
  /**
   * @example
   * 1
   */
  cent?: number;
  currency?: GlobalHotelQueryOrderResponseBodyDataItemInfoDailyPricesPriceCurrency;
  static names(): { [key: string]: string } {
    return {
      cent: 'Cent',
      currency: 'Currency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cent: 'number',
      currency: GlobalHotelQueryOrderResponseBodyDataItemInfoDailyPricesPriceCurrency,
    };
  }

  validate() {
    if(this.currency && typeof (this.currency as any).validate === 'function') {
      (this.currency as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GlobalHotelQueryOrderResponseBodyDataItemInfoDailyPrices extends $dara.Model {
  /**
   * @example
   * LocalDate
   */
  date?: string;
  price?: GlobalHotelQueryOrderResponseBodyDataItemInfoDailyPricesPrice;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      price: 'Price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      price: GlobalHotelQueryOrderResponseBodyDataItemInfoDailyPricesPrice,
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

export class GlobalHotelQueryOrderResponseBodyDataItemInfoMeal extends $dara.Model {
  /**
   * @example
   * 含早餐
   */
  description?: string;
  /**
   * @example
   * BREAKFAST
   */
  mealType?: string;
  /**
   * @example
   * TracerId
   */
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      mealType: 'MealType',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      mealType: 'string',
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

export class GlobalHotelQueryOrderResponseBodyDataItemInfoSellingTotalPrice extends $dara.Model {
  /**
   * @example
   * 10000
   */
  amount?: string;
  /**
   * @example
   * USD
   */
  currency?: string;
  /**
   * @example
   * TracerId
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

export class GlobalHotelQueryOrderResponseBodyDataItemInfo extends $dara.Model {
  cancelPolicy?: GlobalHotelQueryOrderResponseBodyDataItemInfoCancelPolicy;
  /**
   * @example
   * 2026-07-01
   */
  checkIn?: string;
  /**
   * @example
   * 2
   */
  checkInNumber?: number;
  /**
   * @example
   * 2026-07-03
   */
  checkOut?: string;
  dailyPrices?: GlobalHotelQueryOrderResponseBodyDataItemInfoDailyPrices[];
  meal?: GlobalHotelQueryOrderResponseBodyDataItemInfoMeal;
  /**
   * @example
   * 1
   */
  roomCount?: number;
  sellingTotalPrice?: GlobalHotelQueryOrderResponseBodyDataItemInfoSellingTotalPrice;
  static names(): { [key: string]: string } {
    return {
      cancelPolicy: 'CancelPolicy',
      checkIn: 'CheckIn',
      checkInNumber: 'CheckInNumber',
      checkOut: 'CheckOut',
      dailyPrices: 'DailyPrices',
      meal: 'Meal',
      roomCount: 'RoomCount',
      sellingTotalPrice: 'SellingTotalPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelPolicy: GlobalHotelQueryOrderResponseBodyDataItemInfoCancelPolicy,
      checkIn: 'string',
      checkInNumber: 'number',
      checkOut: 'string',
      dailyPrices: { 'type': 'array', 'itemType': GlobalHotelQueryOrderResponseBodyDataItemInfoDailyPrices },
      meal: GlobalHotelQueryOrderResponseBodyDataItemInfoMeal,
      roomCount: 'number',
      sellingTotalPrice: GlobalHotelQueryOrderResponseBodyDataItemInfoSellingTotalPrice,
    };
  }

  validate() {
    if(this.cancelPolicy && typeof (this.cancelPolicy as any).validate === 'function') {
      (this.cancelPolicy as any).validate();
    }
    if(Array.isArray(this.dailyPrices)) {
      $dara.Model.validateArray(this.dailyPrices);
    }
    if(this.meal && typeof (this.meal as any).validate === 'function') {
      (this.meal as any).validate();
    }
    if(this.sellingTotalPrice && typeof (this.sellingTotalPrice as any).validate === 'function') {
      (this.sellingTotalPrice as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GlobalHotelQueryOrderResponseBodyDataPaymentAmount extends $dara.Model {
  /**
   * @example
   * 10000
   */
  amount?: string;
  /**
   * @example
   * USD
   */
  currency?: string;
  /**
   * @example
   * TracerId
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

export class GlobalHotelQueryOrderResponseBodyDataPayment extends $dara.Model {
  amount?: GlobalHotelQueryOrderResponseBodyDataPaymentAmount;
  /**
   * @example
   * 1672531200000
   */
  gmtPaid?: number;
  /**
   * @example
   * BALANCE
   */
  paymentMethod?: string;
  /**
   * @example
   * PAY202606290001
   */
  paymentTransactionId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      gmtPaid: 'GmtPaid',
      paymentMethod: 'PaymentMethod',
      paymentTransactionId: 'PaymentTransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: GlobalHotelQueryOrderResponseBodyDataPaymentAmount,
      gmtPaid: 'number',
      paymentMethod: 'string',
      paymentTransactionId: 'string',
    };
  }

  validate() {
    if(this.amount && typeof (this.amount as any).validate === 'function') {
      (this.amount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GlobalHotelQueryOrderResponseBodyDataRefundOrdersTotalPenaltyAmount extends $dara.Model {
  /**
   * @example
   * 10000
   */
  amount?: string;
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

export class GlobalHotelQueryOrderResponseBodyDataRefundOrdersTotalRefundAmount extends $dara.Model {
  /**
   * @example
   * 10000
   */
  amount?: string;
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

export class GlobalHotelQueryOrderResponseBodyDataRefundOrders extends $dara.Model {
  /**
   * @example
   * 1672531200000
   */
  gmtCreate?: number;
  /**
   * @example
   * TXN001
   */
  refundTransactionId?: string;
  /**
   * @example
   * 供应商拒绝
   */
  rejectReason?: string;
  /**
   * @example
   * RF202606290001
   */
  sellRefundOrderNo?: string;
  /**
   * @example
   * REFUNDED
   */
  status?: string;
  totalPenaltyAmount?: GlobalHotelQueryOrderResponseBodyDataRefundOrdersTotalPenaltyAmount;
  totalRefundAmount?: GlobalHotelQueryOrderResponseBodyDataRefundOrdersTotalRefundAmount;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      refundTransactionId: 'RefundTransactionId',
      rejectReason: 'RejectReason',
      sellRefundOrderNo: 'SellRefundOrderNo',
      status: 'Status',
      totalPenaltyAmount: 'TotalPenaltyAmount',
      totalRefundAmount: 'TotalRefundAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      refundTransactionId: 'string',
      rejectReason: 'string',
      sellRefundOrderNo: 'string',
      status: 'string',
      totalPenaltyAmount: GlobalHotelQueryOrderResponseBodyDataRefundOrdersTotalPenaltyAmount,
      totalRefundAmount: GlobalHotelQueryOrderResponseBodyDataRefundOrdersTotalRefundAmount,
    };
  }

  validate() {
    if(this.totalPenaltyAmount && typeof (this.totalPenaltyAmount as any).validate === 'function') {
      (this.totalPenaltyAmount as any).validate();
    }
    if(this.totalRefundAmount && typeof (this.totalRefundAmount as any).validate === 'function') {
      (this.totalRefundAmount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GlobalHotelQueryOrderResponseBodyDataRoomStaysGuests extends $dara.Model {
  /**
   * @example
   * John
   */
  firstName?: string;
  /**
   * @example
   * Doe
   */
  lastName?: string;
  /**
   * @example
   * TraceId
   */
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      firstName: 'FirstName',
      lastName: 'LastName',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstName: 'string',
      lastName: 'string',
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

export class GlobalHotelQueryOrderResponseBodyDataRoomStays extends $dara.Model {
  /**
   * @example
   * CONF001
   */
  confirmationId?: string;
  guests?: GlobalHotelQueryOrderResponseBodyDataRoomStaysGuests[];
  /**
   * @example
   * 1
   */
  roomIndex?: number;
  /**
   * @example
   * 豪华大床房
   */
  roomName?: string;
  static names(): { [key: string]: string } {
    return {
      confirmationId: 'ConfirmationId',
      guests: 'Guests',
      roomIndex: 'RoomIndex',
      roomName: 'RoomName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confirmationId: 'string',
      guests: { 'type': 'array', 'itemType': GlobalHotelQueryOrderResponseBodyDataRoomStaysGuests },
      roomIndex: 'number',
      roomName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.guests)) {
      $dara.Model.validateArray(this.guests);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GlobalHotelQueryOrderResponseBodyData extends $dara.Model {
  /**
   * @example
   * 123456
   */
  buyerId?: string;
  /**
   * @example
   * EXT_ORDER_001
   */
  externalOrderNo?: string;
  /**
   * @example
   * 1672531200000
   */
  gmtCreate?: number;
  itemInfo?: GlobalHotelQueryOrderResponseBodyDataItemInfo;
  /**
   * @example
   * SO202606290001
   */
  orderNo?: string;
  payment?: GlobalHotelQueryOrderResponseBodyDataPayment;
  refundOrders?: GlobalHotelQueryOrderResponseBodyDataRefundOrders[];
  roomStays?: GlobalHotelQueryOrderResponseBodyDataRoomStays[];
  /**
   * @example
   * POP
   */
  salesChannel?: string;
  /**
   * @example
   * CONFIRMED
   */
  status?: string;
  /**
   * @example
   * TracerId
   */
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      buyerId: 'BuyerId',
      externalOrderNo: 'ExternalOrderNo',
      gmtCreate: 'GmtCreate',
      itemInfo: 'ItemInfo',
      orderNo: 'OrderNo',
      payment: 'Payment',
      refundOrders: 'RefundOrders',
      roomStays: 'RoomStays',
      salesChannel: 'SalesChannel',
      status: 'Status',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyerId: 'string',
      externalOrderNo: 'string',
      gmtCreate: 'number',
      itemInfo: GlobalHotelQueryOrderResponseBodyDataItemInfo,
      orderNo: 'string',
      payment: GlobalHotelQueryOrderResponseBodyDataPayment,
      refundOrders: { 'type': 'array', 'itemType': GlobalHotelQueryOrderResponseBodyDataRefundOrders },
      roomStays: { 'type': 'array', 'itemType': GlobalHotelQueryOrderResponseBodyDataRoomStays },
      salesChannel: 'string',
      status: 'string',
      tracerId: 'string',
    };
  }

  validate() {
    if(this.itemInfo && typeof (this.itemInfo as any).validate === 'function') {
      (this.itemInfo as any).validate();
    }
    if(this.payment && typeof (this.payment as any).validate === 'function') {
      (this.payment as any).validate();
    }
    if(Array.isArray(this.refundOrders)) {
      $dara.Model.validateArray(this.refundOrders);
    }
    if(Array.isArray(this.roomStays)) {
      $dara.Model.validateArray(this.roomStays);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GlobalHotelQueryOrderResponseBody extends $dara.Model {
  data?: GlobalHotelQueryOrderResponseBodyData;
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
      data: GlobalHotelQueryOrderResponseBodyData,
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

