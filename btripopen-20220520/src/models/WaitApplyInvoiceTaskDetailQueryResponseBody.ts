// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WaitApplyInvoiceTaskDetailQueryResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 张三
   */
  contact?: string;
  /**
   * @example
   * 接收电子发票的电子邮箱地址
   */
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
  ieVehicleNormalInvoiceFee?: string;
  /**
   * @example
   * 0
   */
  internationalFlightInvoiceFee?: string;
  /**
   * @example
   * 0
   */
  internationalHotelInvoiceFee?: string;
  /**
   * @example
   * 123
   */
  invoiceThirdPartId?: string;
  /**
   * @example
   * 测试发票抬头
   */
  invoiceTitle?: string;
  /**
   * @example
   * 余杭区仓前街道XX路1号XX大厦101
   */
  mailAddress?: string;
  /**
   * @example
   * 杭州市
   */
  mailCity?: string;
  /**
   * @example
   * 浙江省杭州市余杭区仓前街道XX路1号XX大厦101
   */
  mailFullAddress?: string;
  /**
   * @example
   * 浙江省
   */
  mailProvince?: string;
  /**
   * @example
   * 0
   */
  mealNormalInvoiceFee?: string;
  /**
   * @example
   * 0
   */
  mealTc7NormalInvoiceFee?: string;
  /**
   * @example
   * 0
   */
  penaltyFee?: string;
  /**
   * @example
   * 测试备注
   */
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
  /**
   * @example
   * 0
   */
  trainAccelerationPackageInvoiceFee?: string;
  /**
   * @example
   * 0
   */
  trainInvoiceFee?: string;
  /**
   * @example
   * 0
   */
  vacationNormalInvoiceFee?: string;
  /**
   * @example
   * 0
   */
  vasMallSpecialInvoiceFee?: string;
  /**
   * @example
   * 100
   */
  vehicleInvoiceFee?: string;
  /**
   * @example
   * 0
   */
  vehicleNormalInvoiceFee?: string;
  static names(): { [key: string]: string } {
    return {
      contact: 'contact',
      email: 'email',
      flightInvoiceFee: 'flight_invoice_fee',
      fuPointInvoiceFee: 'fu_point_invoice_fee',
      hotelNormalInvoiceFee: 'hotel_normal_invoice_fee',
      hotelSpecialInvoiceFee: 'hotel_special_invoice_fee',
      ieVehicleNormalInvoiceFee: 'ie_vehicle_normal_invoice_fee',
      internationalFlightInvoiceFee: 'international_flight_invoice_fee',
      internationalHotelInvoiceFee: 'international_hotel_invoice_fee',
      invoiceThirdPartId: 'invoice_third_part_id',
      invoiceTitle: 'invoice_title',
      mailAddress: 'mail_address',
      mailCity: 'mail_city',
      mailFullAddress: 'mail_full_address',
      mailProvince: 'mail_province',
      mealNormalInvoiceFee: 'meal_normal_invoice_fee',
      mealTc7NormalInvoiceFee: 'meal_tc7_normal_invoice_fee',
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
      ieVehicleNormalInvoiceFee: 'string',
      internationalFlightInvoiceFee: 'string',
      internationalHotelInvoiceFee: 'string',
      invoiceThirdPartId: 'string',
      invoiceTitle: 'string',
      mailAddress: 'string',
      mailCity: 'string',
      mailFullAddress: 'string',
      mailProvince: 'string',
      mealNormalInvoiceFee: 'string',
      mealTc7NormalInvoiceFee: 'string',
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
  /**
   * @example
   * 成功
   */
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

