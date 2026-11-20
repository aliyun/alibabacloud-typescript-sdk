// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListAppointTimesTimeList extends $dara.Model {
  /**
   * @remarks
   * The end time of the time slot, in HH:mm:ss format.
   * 
   * @example
   * 12:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The tip message displayed when the option is not selectable.
   * 
   * @example
   * Fully booked
   */
  selectDisableTip?: string;
  /**
   * @remarks
   * Indicates whether the scheduled time slot is selectable.
   * 
   * @example
   * true
   */
  selectable?: boolean;
  /**
   * @remarks
   * The start time of the time slot, in HH:mm:ss format.
   * 
   * @example
   * 10:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      selectDisableTip: 'SelectDisableTip',
      selectable: 'Selectable',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      selectDisableTip: 'string',
      selectable: 'boolean',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListAppointTimes extends $dara.Model {
  /**
   * @remarks
   * The date string in YYYY-MM-DD format.
   * 
   * @example
   * 2022-04-28
   */
  date?: string;
  /**
   * @remarks
   * Indicates whether the date is selectable.
   * 
   * @example
   * true
   */
  dateSelectable?: boolean;
  /**
   * @remarks
   * The list of available time slots for the day.
   */
  timeList?: CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListAppointTimesTimeList[];
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      dateSelectable: 'DateSelectable',
      timeList: 'TimeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      dateSelectable: 'boolean',
      timeList: { 'type': 'array', 'itemType': CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListAppointTimesTimeList },
    };
  }

  validate() {
    if(Array.isArray(this.timeList)) {
      $dara.Model.validateArray(this.timeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListRealTime extends $dara.Model {
  /**
   * @remarks
   * The service type name for real-time orders.
   * 
   * @example
   * 2-hour pickup
   */
  name?: string;
  /**
   * @remarks
   * The tip message displayed when the option is not selectable.
   * 
   * @example
   * The real-time order placement time range has been exceeded
   */
  selectDisableTip?: string;
  /**
   * @remarks
   * Indicates whether a real-time order can still be placed after the real-time order placement time has passed.
   * 
   * @example
   * false
   */
  selectable?: boolean;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      selectDisableTip: 'SelectDisableTip',
      selectable: 'Selectable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      selectDisableTip: 'string',
      selectable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectList extends $dara.Model {
  /**
   * @remarks
   * The available time options for scheduled orders. If the courier company does not support scheduled orders, this field is empty.
   */
  appointTimes?: CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListAppointTimes[];
  /**
   * @remarks
   * The estimated price, in CNY, rounded to two decimal places. This field has a value only when the estimated weight is specified in the request parameters.
   * 
   * @example
   * 12.50
   */
  prePrice?: string;
  /**
   * @remarks
   * The available options for real-time orders.
   */
  realTime?: CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListRealTime;
  static names(): { [key: string]: string } {
    return {
      appointTimes: 'AppointTimes',
      prePrice: 'PrePrice',
      realTime: 'RealTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appointTimes: { 'type': 'array', 'itemType': CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListAppointTimes },
      prePrice: 'string',
      realTime: CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListRealTime,
    };
  }

  validate() {
    if(Array.isArray(this.appointTimes)) {
      $dara.Model.validateArray(this.appointTimes);
    }
    if(this.realTime && typeof (this.realTime as any).validate === 'function') {
      (this.realTime as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillPreQueryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * The list of information about whether courier companies are available for placing orders.
   */
  cpTimeSelectList?: CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectList[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * None
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * None
   */
  errorMsg?: string;
  /**
   * @remarks
   * The response content.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      cpTimeSelectList: 'CpTimeSelectList',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      cpTimeSelectList: { 'type': 'array', 'itemType': CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectList },
      errorCode: 'string',
      errorMsg: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.cpTimeSelectList)) {
      $dara.Model.validateArray(this.cpTimeSelectList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillPreQueryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result set.
   */
  data?: CreatePickUpWaybillPreQueryResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9FC30594-3841-43AD-9008-03393BCB5CD2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreatePickUpWaybillPreQueryResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
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

