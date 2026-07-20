// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MonthPreBillGetResponseBodyModuleMonthAccountBillDetail extends $dara.Model {
  /**
   * @example
   * 1
   */
  billConfirmed?: number;
  /**
   * @example
   * 56.70
   */
  carAmount?: number;
  /**
   * @example
   * 0
   */
  damageAmount?: number;
  /**
   * @example
   * 1234.00
   */
  flightAmount?: number;
  /**
   * @example
   * 1.50
   */
  fuPoint?: number;
  /**
   * @example
   * 500.00
   */
  hotelAmount?: number;
  /**
   * @example
   * 3456.00
   */
  ieFlightAmount?: number;
  /**
   * @example
   * 3000.00
   */
  ieHotelAmount?: number;
  /**
   * @example
   * 20200601
   */
  mailBillDate?: number;
  /**
   * @example
   * 22.40
   */
  mealAmount?: number;
  /**
   * @example
   * 45.00
   */
  serviceAmount?: number;
  /**
   * @example
   * 648.00
   */
  trainAmount?: number;
  /**
   * @example
   * 19.22
   */
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

export class MonthPreBillGetResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 2020-04-30
   */
  endDate?: string;
  monthAccountBillDetail?: MonthPreBillGetResponseBodyModuleMonthAccountBillDetail;
  /**
   * @example
   * 2020-04-01
   */
  startDate?: string;
  /**
   * @example
   * https://cdn.ewt360.com/resources/tiku_h5/uploads/2026/5/3/6fc104f3-561e-4960-b962-a112db1e9d00.jpg
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
      monthAccountBillDetail: MonthPreBillGetResponseBodyModuleMonthAccountBillDetail,
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

export class MonthPreBillGetResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @example
   * 成功
   */
  message?: string;
  module?: MonthPreBillGetResponseBodyModule[];
  /**
   * @example
   * 3D082D37-160A-53BE-9CF1-7AB8E100045B
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 3b52151317702574069534727d0099
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
      module: { 'type': 'array', 'itemType': MonthPreBillGetResponseBodyModule },
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

