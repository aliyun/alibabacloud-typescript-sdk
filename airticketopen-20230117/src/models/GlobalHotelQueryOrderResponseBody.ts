// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GlobalHotelQueryOrderResponseBodyDataItemInfoCancelPolicyPenalties extends $dara.Model {
  /**
   * @remarks
   * The currency code (present only for AMOUNT type penalties).
   * 
   * @example
   * USD
   */
  currency?: string;
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
   * The penalty type.
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
   * The effective start time (UTC millisecond timestamp).
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

export class GlobalHotelQueryOrderResponseBodyDataItemInfoCancelPolicy extends $dara.Model {
  /**
   * @remarks
   * The list of cancellation penalty details.
   */
  penalties?: GlobalHotelQueryOrderResponseBodyDataItemInfoCancelPolicyPenalties[];
  /**
   * @remarks
   * The cancellation policy type.
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

export class GlobalHotelQueryOrderResponseBodyDataItemInfoDailyPricesPrice extends $dara.Model {
  /**
   * @remarks
   * The amount in the smallest currency unit.
   * 
   * @example
   * 10000
   */
  amount?: string;
  /**
   * @remarks
   * The currency.
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

export class GlobalHotelQueryOrderResponseBodyDataItemInfoDailyPrices extends $dara.Model {
  /**
   * @remarks
   * LocalDate
   * 
   * @example
   * LocalDate
   */
  date?: string;
  /**
   * @remarks
   * The price.
   */
  price?: GlobalHotelQueryOrderResponseBodyDataItemInfoDailyPricesPrice;
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
      price: GlobalHotelQueryOrderResponseBodyDataItemInfoDailyPricesPrice,
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

export class GlobalHotelQueryOrderResponseBodyDataItemInfoMeal extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Breakfast included
   */
  description?: string;
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
   * TracerId
   * 
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

export class GlobalHotelQueryOrderResponseBodyDataItemInfoTotalPrice extends $dara.Model {
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

export class GlobalHotelQueryOrderResponseBodyDataItemInfo extends $dara.Model {
  /**
   * @remarks
   * The cancellation policy.
   */
  cancelPolicy?: GlobalHotelQueryOrderResponseBodyDataItemInfoCancelPolicy;
  /**
   * @remarks
   * The check-in date (yyyy-MM-dd).
   * 
   * @example
   * 2026-07-01
   */
  checkIn?: string;
  /**
   * @remarks
   * The number of guests checking in.
   * 
   * @example
   * 2
   */
  checkInNumber?: number;
  /**
   * @remarks
   * The check-out date (yyyy-MM-dd).
   * 
   * @example
   * 2026-07-03
   */
  checkOut?: string;
  /**
   * @remarks
   * The list of nightly rates.
   */
  dailyPrices?: GlobalHotelQueryOrderResponseBodyDataItemInfoDailyPrices[];
  /**
   * @remarks
   * The meal information.
   */
  meal?: GlobalHotelQueryOrderResponseBodyDataItemInfoMeal;
  /**
   * @remarks
   * The number of rooms.
   * 
   * @example
   * 1
   */
  roomCount?: number;
  /**
   * @remarks
   * The total selling price.
   */
  totalPrice?: GlobalHotelQueryOrderResponseBodyDataItemInfoTotalPrice;
  static names(): { [key: string]: string } {
    return {
      cancelPolicy: 'CancelPolicy',
      checkIn: 'CheckIn',
      checkInNumber: 'CheckInNumber',
      checkOut: 'CheckOut',
      dailyPrices: 'DailyPrices',
      meal: 'Meal',
      roomCount: 'RoomCount',
      totalPrice: 'TotalPrice',
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
      totalPrice: GlobalHotelQueryOrderResponseBodyDataItemInfoTotalPrice,
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
    if(this.totalPrice && typeof (this.totalPrice as any).validate === 'function') {
      (this.totalPrice as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GlobalHotelQueryOrderResponseBodyDataPaymentAmount extends $dara.Model {
  /**
   * @remarks
   * The amount in the smallest currency unit.
   * 
   * @example
   * 10000
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
   * TracerId
   * 
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
  /**
   * @remarks
   * The payment amount.
   */
  amount?: GlobalHotelQueryOrderResponseBodyDataPaymentAmount;
  /**
   * @remarks
   * The payment completion time (UTC millisecond timestamp).
   * 
   * @example
   * 1672531200000
   */
  gmtPaid?: string;
  /**
   * @remarks
   * The payment method.
   * 
   * @example
   * BALANCE
   */
  paymentMethod?: string;
  /**
   * @remarks
   * The payment transaction ID.
   * 
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
      gmtPaid: 'string',
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
   * @remarks
   * The amount in the smallest currency unit.
   * 
   * @example
   * 10000
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
   * @remarks
   * The amount in the smallest currency unit.
   * 
   * @example
   * 10000
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
   * @remarks
   * The refund order creation time (UTC millisecond timestamp).
   * 
   * @example
   * 1672531200000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The external refund order number.
   * 
   * @example
   * RF202606290001
   */
  refundOrderNo?: string;
  /**
   * @remarks
   * The refund transaction ID.
   * 
   * @example
   * TXN001
   */
  refundTransactionId?: string;
  /**
   * @remarks
   * The rejection reason.
   * 
   * @example
   * Supplier rejected
   */
  rejectReason?: string;
  /**
   * @remarks
   * The unified refund status.
   * 
   * @example
   * REFUNDED
   */
  status?: string;
  /**
   * @remarks
   * The penalty amount on the sales side.
   */
  totalPenaltyAmount?: GlobalHotelQueryOrderResponseBodyDataRefundOrdersTotalPenaltyAmount;
  /**
   * @remarks
   * The actual refund amount.
   */
  totalRefundAmount?: GlobalHotelQueryOrderResponseBodyDataRefundOrdersTotalRefundAmount;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      refundOrderNo: 'RefundOrderNo',
      refundTransactionId: 'RefundTransactionId',
      rejectReason: 'RejectReason',
      status: 'Status',
      totalPenaltyAmount: 'TotalPenaltyAmount',
      totalRefundAmount: 'TotalRefundAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      refundOrderNo: 'string',
      refundTransactionId: 'string',
      rejectReason: 'string',
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
   * @remarks
   * The first name of the guest.
   * 
   * @example
   * John
   */
  firstName?: string;
  /**
   * @remarks
   * The last name of the guest.
   * 
   * @example
   * Doe
   */
  lastName?: string;
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
   * @remarks
   * The room confirmation ID.
   * 
   * @example
   * CONF001
   */
  confirmationId?: string;
  /**
   * @remarks
   * The list of guests.
   */
  guests?: GlobalHotelQueryOrderResponseBodyDataRoomStaysGuests[];
  /**
   * @remarks
   * The room index, starting from 1.
   * 
   * @example
   * 1
   */
  roomIndex?: number;
  /**
   * @remarks
   * The fulfillment status (PENDING_CHECKIN/CHECKED_IN/CHECKED_OUT/CANCELLED). The value is null before the fulfillment is created.
   * 
   * @example
   * CHECKED_IN
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      confirmationId: 'ConfirmationId',
      guests: 'Guests',
      roomIndex: 'RoomIndex',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confirmationId: 'string',
      guests: { 'type': 'array', 'itemType': GlobalHotelQueryOrderResponseBodyDataRoomStaysGuests },
      roomIndex: 'number',
      status: 'string',
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
   * @remarks
   * The buyer ID.
   * 
   * @example
   * 123456
   */
  buyerId?: string;
  /**
   * @remarks
   * The external order number of the buyer.
   * 
   * @example
   * EXT_ORDER_001
   */
  externalOrderNo?: string;
  /**
   * @remarks
   * The creation time (UTC millisecond timestamp).
   * 
   * @example
   * 1672531200000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The item information.
   */
  itemInfo?: GlobalHotelQueryOrderResponseBodyDataItemInfo;
  /**
   * @remarks
   * The order number.
   * 
   * @example
   * SO202606290001
   */
  orderNo?: string;
  /**
   * @remarks
   * The payment information.
   */
  payment?: GlobalHotelQueryOrderResponseBodyDataPayment;
  /**
   * @remarks
   * The list of refund orders.
   */
  refundOrders?: GlobalHotelQueryOrderResponseBodyDataRefundOrders[];
  /**
   * @remarks
   * The list of room stays.
   */
  roomStays?: GlobalHotelQueryOrderResponseBodyDataRoomStays[];
  /**
   * @remarks
   * The sales channel.
   * 
   * @example
   * POP
   */
  salesChannel?: string;
  /**
   * @remarks
   * The unified order status.
   * 
   * @example
   * CONFIRMED
   */
  status?: string;
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
      gmtCreate: 'string',
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
  /**
   * @remarks
   * The business data.
   */
  data?: GlobalHotelQueryOrderResponseBodyData;
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
   * The unique identifier of the request.
   * 
   * @example
   * 260E4F99-983D-1919-834C-5C42E98E5B2B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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

