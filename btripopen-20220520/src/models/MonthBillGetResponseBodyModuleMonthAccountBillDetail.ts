// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MonthBillGetResponseBodyModuleMonthAccountBillDetail extends $dara.Model {
  billConfirmed?: number;
  /**
   * @remarks
   * 用车金额（单位：元）
   * 
   * @example
   * xx.xx
   */
  carAmount?: number;
  /**
   * @remarks
   * 违约金金额（单位：元）
   * 
   * @example
   * xx.xx
   */
  damageAmount?: number;
  /**
   * @remarks
   * 机票金额（单位：元）
   * 
   * @example
   * xx.xx
   */
  flightAmount?: number;
  /**
   * @remarks
   * 福豆金额（单位：元）
   * 
   * @example
   * xx.xx
   */
  fuPoint?: number;
  /**
   * @remarks
   * 酒店金额（单位：元）
   * 
   * @example
   * xx.xx
   */
  hotelAmount?: number;
  /**
   * @remarks
   * 国际机票金额（单位：元）
   * 
   * @example
   * xx.xx
   */
  ieFlightAmount?: number;
  ieHotelAmount?: number;
  /**
   * @remarks
   * 账期日：YYYYMMDD
   * 
   * @example
   * 20200501
   */
  mailBillDate?: number;
  mealAmount?: number;
  /**
   * @remarks
   * 服务费金额（单位：元）
   * 
   * @example
   * xx.xx
   */
  serviceAmount?: number;
  /**
   * @remarks
   * 火车票金额（单位：元）
   * 
   * @example
   * xx.xx
   */
  trainAmount?: number;
  vasAmount?: number;
  static names(): { [key: string]: string } {
    return {
      billConfirmed: 'billConfirmed',
      carAmount: 'carAmount',
      damageAmount: 'damageAmount',
      flightAmount: 'flightAmount',
      fuPoint: 'fuPoint',
      hotelAmount: 'hotelAmount',
      ieFlightAmount: 'ieFlightAmount',
      ieHotelAmount: 'ieHotelAmount',
      mailBillDate: 'mailBillDate',
      mealAmount: 'mealAmount',
      serviceAmount: 'serviceAmount',
      trainAmount: 'trainAmount',
      vasAmount: 'vasAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billConfirmed: 'number',
      carAmount: 'number',
      damageAmount: 'number',
      flightAmount: 'number',
      fuPoint: 'number',
      hotelAmount: 'number',
      ieFlightAmount: 'number',
      ieHotelAmount: 'number',
      mailBillDate: 'number',
      mealAmount: 'number',
      serviceAmount: 'number',
      trainAmount: 'number',
      vasAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

