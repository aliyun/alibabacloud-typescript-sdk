// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightRefundDetailV2ResponseBodyModuleFlightInfoDTOSSegmentPosition } from "./FlightRefundDetailV2responseBodyModuleFlightInfoDtossegmentPosition";


export class FlightRefundDetailV2ResponseBodyModuleFlightInfoDTOS extends $dara.Model {
  /**
   * @example
   * MU
   */
  airlineCode?: string;
  airlineIconUrl?: string;
  airlineName?: string;
  /**
   * @example
   * HGH
   */
  arrAirportCode?: string;
  arrAirportName?: string;
  /**
   * @example
   * HGH
   */
  arrCityCode?: string;
  arrCityName?: string;
  arrTerminal?: string;
  /**
   * @example
   * 2023-10-03 09:30:00
   */
  arrTime?: string;
  /**
   * @example
   * Y
   */
  cabin?: string;
  /**
   * @example
   * Y
   */
  cabinClass?: string;
  cabinClassName?: string;
  /**
   * @example
   * 10
   */
  cabinDiscount?: number;
  carrierAirlineCode?: string;
  carrierAirlineIconUrl?: string;
  carrierAirlineName?: string;
  carrierFlightNo?: string;
  /**
   * @example
   * PKX
   */
  depAirportCode?: string;
  depAirportName?: string;
  /**
   * @example
   * BJS
   */
  depCityCode?: string;
  depCityName?: string;
  depTerminal?: string;
  /**
   * @example
   * 2023-10-03 07:30:00
   */
  depTime?: string;
  /**
   * @example
   * MU5193
   */
  flightNo?: string;
  flightType?: string;
  mealDesc?: string;
  /**
   * @example
   * 1194012
   */
  segmentId?: string;
  segmentPosition?: FlightRefundDetailV2ResponseBodyModuleFlightInfoDTOSSegmentPosition;
  stopArrTime?: string;
  stopCity?: string;
  stopDepTime?: string;
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineIconUrl: 'airline_icon_url',
      airlineName: 'airline_name',
      arrAirportCode: 'arr_airport_code',
      arrAirportName: 'arr_airport_name',
      arrCityCode: 'arr_city_code',
      arrCityName: 'arr_city_name',
      arrTerminal: 'arr_terminal',
      arrTime: 'arr_time',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      cabinClassName: 'cabin_class_name',
      cabinDiscount: 'cabin_discount',
      carrierAirlineCode: 'carrier_airline_code',
      carrierAirlineIconUrl: 'carrier_airline_icon_url',
      carrierAirlineName: 'carrier_airline_name',
      carrierFlightNo: 'carrier_flight_no',
      depAirportCode: 'dep_airport_code',
      depAirportName: 'dep_airport_name',
      depCityCode: 'dep_city_code',
      depCityName: 'dep_city_name',
      depTerminal: 'dep_terminal',
      depTime: 'dep_time',
      flightNo: 'flight_no',
      flightType: 'flight_type',
      mealDesc: 'meal_desc',
      segmentId: 'segment_id',
      segmentPosition: 'segment_position',
      stopArrTime: 'stop_arr_time',
      stopCity: 'stop_city',
      stopDepTime: 'stop_dep_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineIconUrl: 'string',
      airlineName: 'string',
      arrAirportCode: 'string',
      arrAirportName: 'string',
      arrCityCode: 'string',
      arrCityName: 'string',
      arrTerminal: 'string',
      arrTime: 'string',
      cabin: 'string',
      cabinClass: 'string',
      cabinClassName: 'string',
      cabinDiscount: 'number',
      carrierAirlineCode: 'string',
      carrierAirlineIconUrl: 'string',
      carrierAirlineName: 'string',
      carrierFlightNo: 'string',
      depAirportCode: 'string',
      depAirportName: 'string',
      depCityCode: 'string',
      depCityName: 'string',
      depTerminal: 'string',
      depTime: 'string',
      flightNo: 'string',
      flightType: 'string',
      mealDesc: 'string',
      segmentId: 'string',
      segmentPosition: FlightRefundDetailV2ResponseBodyModuleFlightInfoDTOSSegmentPosition,
      stopArrTime: 'string',
      stopCity: 'string',
      stopDepTime: 'string',
    };
  }

  validate() {
    if(this.segmentPosition && typeof (this.segmentPosition as any).validate === 'function') {
      (this.segmentPosition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

