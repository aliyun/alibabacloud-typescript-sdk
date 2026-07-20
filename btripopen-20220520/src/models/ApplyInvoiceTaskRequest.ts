// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyInvoiceTaskRequestInvoiceTaskList extends $dara.Model {
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  invoiceThirdPartId?: string;
  /**
   * @example
   * 1
   */
  invoiceType?: number;
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
      invoiceType: 'invoice_type',
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
      invoiceType: 'number',
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

export class ApplyInvoiceTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2022-12-01
   */
  billDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  invoiceTaskList?: ApplyInvoiceTaskRequestInvoiceTaskList[];
  static names(): { [key: string]: string } {
    return {
      billDate: 'bill_date',
      invoiceTaskList: 'invoice_task_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billDate: 'string',
      invoiceTaskList: { 'type': 'array', 'itemType': ApplyInvoiceTaskRequestInvoiceTaskList },
    };
  }

  validate() {
    if(Array.isArray(this.invoiceTaskList)) {
      $dara.Model.validateArray(this.invoiceTaskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

