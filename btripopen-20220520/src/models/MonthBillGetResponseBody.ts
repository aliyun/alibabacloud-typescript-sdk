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

export class MonthBillGetResponseBodyModule extends $dara.Model {
  endDate?: string;
  /**
   * @remarks
   * CorpMonthAccountBillFeeDetail
   */
  monthAccountBillDetail?: MonthBillGetResponseBodyModuleMonthAccountBillDetail;
  startDate?: string;
  /**
   * @example
   * https://xxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'end_date',
      monthAccountBillDetail: 'monthAccountBillDetail',
      startDate: 'start_date',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      monthAccountBillDetail: MonthBillGetResponseBodyModuleMonthAccountBillDetail,
      startDate: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.monthAccountBillDetail && typeof (this.monthAccountBillDetail as any).validate === 'function') {
      (this.monthAccountBillDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MonthBillGetResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  module?: MonthBillGetResponseBodyModule[];
  /**
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
   * @example
   * 21041ce316577904808056433edbb2
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
      module: { 'type': 'array', 'itemType': MonthBillGetResponseBodyModule },
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

