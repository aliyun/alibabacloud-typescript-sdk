// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MonthBillGetResponseBodyModuleMonthAccountBillDetail extends $dara.Model {
  billConfirmed?: number;
  carAmount?: number;
  damageAmount?: number;
  flightAmount?: number;
  fuPoint?: number;
  hotelAmount?: number;
  ieFlightAmount?: number;
  ieHotelAmount?: number;
  mailBillDate?: number;
  mealAmount?: number;
  metroAmount?: number;
  serviceAmount?: number;
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
      metroAmount: 'metroAmount',
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
      metroAmount: 'number',
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
  monthAccountBillDetail?: MonthBillGetResponseBodyModuleMonthAccountBillDetail;
  startDate?: string;
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
  code?: string;
  message?: string;
  module?: MonthBillGetResponseBodyModule[];
  requestId?: string;
  success?: boolean;
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

