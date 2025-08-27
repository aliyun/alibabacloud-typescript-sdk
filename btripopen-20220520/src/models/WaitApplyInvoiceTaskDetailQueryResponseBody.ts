// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WaitApplyInvoiceTaskDetailQueryResponseBodyModule extends $dara.Model {
  contact?: string;
  email?: string;
  /**
   * @example
   * 0
   */
  flightInvoiceFee?: string;
  /**
   * @example
   * 3.12
   */
  fuPointInvoiceFee?: string;
  /**
   * @example
   * 0
   */
  hotelNormalInvoiceFee?: string;
  /**
   * @example
   * 100
   */
  hotelSpecialInvoiceFee?: string;
  /**
   * @example
   * 0
   */
  internationalFlightInvoiceFee?: string;
  internationalHotelInvoiceFee?: string;
  /**
   * @example
   * 123
   */
  invoiceThirdPartId?: string;
  invoiceTitle?: string;
  mailAddress?: string;
  mailCity?: string;
  mailFullAddress?: string;
  mailProvince?: string;
  mealNormalInvoiceFee?: string;
  /**
   * @example
   * 0
   */
  penaltyFee?: string;
  remark?: string;
  /**
   * @example
   * 1.02
   */
  serviceFee?: string;
  /**
   * @example
   * 1234567890
   */
  telephone?: string;
  trainAccelerationPackageInvoiceFee?: string;
  /**
   * @example
   * 0
   */
  trainInvoiceFee?: string;
  vacationNormalInvoiceFee?: string;
  vasMallSpecialInvoiceFee?: string;
  /**
   * @example
   * 100
   */
  vehicleInvoiceFee?: string;
  vehicleNormalInvoiceFee?: string;
  static names(): { [key: string]: string } {
    return {
      contact: 'contact',
      email: 'email',
      flightInvoiceFee: 'flight_invoice_fee',
      fuPointInvoiceFee: 'fu_point_invoice_fee',
      hotelNormalInvoiceFee: 'hotel_normal_invoice_fee',
      hotelSpecialInvoiceFee: 'hotel_special_invoice_fee',
      internationalFlightInvoiceFee: 'international_flight_invoice_fee',
      internationalHotelInvoiceFee: 'international_hotel_invoice_fee',
      invoiceThirdPartId: 'invoice_third_part_id',
      invoiceTitle: 'invoice_title',
      mailAddress: 'mail_address',
      mailCity: 'mail_city',
      mailFullAddress: 'mail_full_address',
      mailProvince: 'mail_province',
      mealNormalInvoiceFee: 'meal_normal_invoice_fee',
      penaltyFee: 'penalty_fee',
      remark: 'remark',
      serviceFee: 'service_fee',
      telephone: 'telephone',
      trainAccelerationPackageInvoiceFee: 'train_acceleration_package_invoice_fee',
      trainInvoiceFee: 'train_invoice_fee',
      vacationNormalInvoiceFee: 'vacation_normal_invoice_fee',
      vasMallSpecialInvoiceFee: 'vas_mall_special_invoice_fee',
      vehicleInvoiceFee: 'vehicle_invoice_fee',
      vehicleNormalInvoiceFee: 'vehicle_normal_invoice_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contact: 'string',
      email: 'string',
      flightInvoiceFee: 'string',
      fuPointInvoiceFee: 'string',
      hotelNormalInvoiceFee: 'string',
      hotelSpecialInvoiceFee: 'string',
      internationalFlightInvoiceFee: 'string',
      internationalHotelInvoiceFee: 'string',
      invoiceThirdPartId: 'string',
      invoiceTitle: 'string',
      mailAddress: 'string',
      mailCity: 'string',
      mailFullAddress: 'string',
      mailProvince: 'string',
      mealNormalInvoiceFee: 'string',
      penaltyFee: 'string',
      remark: 'string',
      serviceFee: 'string',
      telephone: 'string',
      trainAccelerationPackageInvoiceFee: 'string',
      trainInvoiceFee: 'string',
      vacationNormalInvoiceFee: 'string',
      vasMallSpecialInvoiceFee: 'string',
      vehicleInvoiceFee: 'string',
      vehicleNormalInvoiceFee: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WaitApplyInvoiceTaskDetailQueryResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  message?: string;
  module?: WaitApplyInvoiceTaskDetailQueryResponseBodyModule[];
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 407543AF-2BD9-5890-BD92-9D1AB7218B27
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
   * 210f079e16603757182131635d866a
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
      module: { 'type': 'array', 'itemType': WaitApplyInvoiceTaskDetailQueryResponseBodyModule },
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.module)) {
      $dara.Model.validateArray(this.module);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

