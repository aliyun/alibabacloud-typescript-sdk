// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightChangeOfOrderResponseBodyDataFlightChangeDetail extends $dara.Model {
  /**
   * @remarks
   * The reason for the flight change.
   * 
   * @example
   * 天气
   */
  changeReason?: string;
  /**
   * @remarks
   * The time of the flight change in string format (yyyy-MM-dd HH:mm:ss).
   * 
   * @example
   * 2023-02-01 10:01:00
   */
  changeTime?: string;
  /**
   * @remarks
   * The type of the flight change. Valid values:
   * - 1: cancellation
   * - 2: schedule change.
   * 
   * @example
   * 1
   */
  changeType?: number;
  /**
   * @remarks
   * The three-letter IATA code of the new arrival airport (uppercase).
   * 
   * @example
   * MFM
   */
  newArrivalAirport?: string;
  /**
   * @remarks
   * The arrival date and time of the new flight in string format (yyyy-MM-dd HH:mm:ss).
   * 
   * @example
   * 2023-02-01 15:01:00
   */
  newArrivalTime?: string;
  /**
   * @remarks
   * The three-letter IATA code of the new departure airport (uppercase).
   * 
   * @example
   * PVG
   */
  newDepartureAirport?: string;
  /**
   * @remarks
   * The departure date and time of the new flight in string format (yyyy-MM-dd HH:mm:ss).
   * 
   * @example
   * 2023-02-01 13:01:00
   */
  newDepartureTime?: string;
  /**
   * @remarks
   * The new flight number.
   * 
   * @example
   * HO1295
   */
  newFlightNo?: string;
  /**
   * @remarks
   * The three-letter IATA code of the original arrival airport (uppercase).
   * 
   * @example
   * MFM
   */
  oldArrivalAirport?: string;
  /**
   * @remarks
   * The arrival date and time of the original flight in string format (yyyy-MM-dd HH:mm:ss).
   * 
   * @example
   * 023-02-01 14:01:00
   */
  oldArrivalTime?: string;
  /**
   * @remarks
   * The three-letter IATA code of the original departure airport (uppercase).
   * 
   * @example
   * PVG
   */
  oldDepartureAirport?: string;
  /**
   * @remarks
   * The departure date and time of the original flight in string format (yyyy-MM-dd HH:mm:ss).
   * 
   * @example
   * 2023-02-01 12:01:00
   */
  oldDepartureTime?: string;
  /**
   * @remarks
   * The original flight number.
   * 
   * @example
   * HO1295
   */
  oldFlightNo?: string;
  static names(): { [key: string]: string } {
    return {
      changeReason: 'change_reason',
      changeTime: 'change_time',
      changeType: 'change_type',
      newArrivalAirport: 'new_arrival_airport',
      newArrivalTime: 'new_arrival_time',
      newDepartureAirport: 'new_departure_airport',
      newDepartureTime: 'new_departure_time',
      newFlightNo: 'new_flight_no',
      oldArrivalAirport: 'old_arrival_airport',
      oldArrivalTime: 'old_arrival_time',
      oldDepartureAirport: 'old_departure_airport',
      oldDepartureTime: 'old_departure_time',
      oldFlightNo: 'old_flight_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeReason: 'string',
      changeTime: 'string',
      changeType: 'number',
      newArrivalAirport: 'string',
      newArrivalTime: 'string',
      newDepartureAirport: 'string',
      newDepartureTime: 'string',
      newFlightNo: 'string',
      oldArrivalAirport: 'string',
      oldArrivalTime: 'string',
      oldDepartureAirport: 'string',
      oldDepartureTime: 'string',
      oldFlightNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightChangeOfOrderResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The flight change information.
   */
  flightChangeDetail?: FlightChangeOfOrderResponseBodyDataFlightChangeDetail;
  /**
   * @remarks
   * The order number.
   * 
   * @example
   * 4966***617111
   */
  orderNum?: number;
  static names(): { [key: string]: string } {
    return {
      flightChangeDetail: 'flight_change_detail',
      orderNum: 'order_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightChangeDetail: FlightChangeOfOrderResponseBodyDataFlightChangeDetail,
      orderNum: 'number',
    };
  }

  validate() {
    if(this.flightChangeDetail && typeof (this.flightChangeDetail as any).validate === 'function') {
      (this.flightChangeDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightChangeOfOrderResponseBody extends $dara.Model {
  /**
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @remarks
   * The data returned for a successful request.
   */
  data?: FlightChangeOfOrderResponseBodyData[];
  /**
   * @remarks
   * The business error code.
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * The data returned with the error.
   * 
   * @example
   * null
   */
  errorData?: any;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code. The value is always 200 for successful requests.
   * 
   * @example
   * 200
   */
  status?: number;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      errorCode: 'error_code',
      errorData: 'error_data',
      errorMsg: 'error_msg',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: { 'type': 'array', 'itemType': FlightChangeOfOrderResponseBodyData },
      errorCode: 'string',
      errorData: 'any',
      errorMsg: 'string',
      status: 'number',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

