// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightChangeOfOrderResponseBodyDataFlightChangeDetail extends $dara.Model {
  /**
   * @example
   * 天气
   */
  changeReason?: string;
  /**
   * @example
   * 2023-02-01 10:01:00
   */
  changeTime?: string;
  /**
   * @example
   * 1
   */
  changeType?: number;
  /**
   * @example
   * MFM
   */
  newArrivalAirport?: string;
  /**
   * @example
   * 2023-02-01 15:01:00
   */
  newArrivalTime?: string;
  /**
   * @example
   * PVG
   */
  newDepartureAirport?: string;
  /**
   * @example
   * 2023-02-01 13:01:00
   */
  newDepartureTime?: string;
  /**
   * @example
   * HO1295
   */
  newFlightNo?: string;
  /**
   * @example
   * MFM
   */
  oldArrivalAirport?: string;
  /**
   * @example
   * 023-02-01 14:01:00
   */
  oldArrivalTime?: string;
  /**
   * @example
   * PVG
   */
  oldDepartureAirport?: string;
  /**
   * @example
   * 2023-02-01 12:01:00
   */
  oldDepartureTime?: string;
  /**
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

