// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneysSegmentListFlightChange } from "./FlightOrderDetailV2responseBodyModuleFlightTaleInfoDtojourneysSegmentListFlightChange";
import { FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneysSegmentListSegmentPosition } from "./FlightOrderDetailV2responseBodyModuleFlightTaleInfoDtojourneysSegmentListSegmentPosition";


export class FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneysSegmentList extends $dara.Model {
  /**
   * @example
   * CA
   */
  airLineCode?: string;
  /**
   * @example
   * Air China Limited
   */
  airLineEnglishName?: string;
  airLineName?: string;
  /**
   * @example
   * 95583
   */
  airLinePhone?: string;
  /**
   * @example
   * https://gw.alicdn.com/tfs/TB12fJAFHr1gK0jSZR0XXbP8XXa-450-450.png
   */
  airlineIconUrl?: string;
  airlineShortName?: string;
  /**
   * @example
   * XIL
   */
  arrAirportCode?: string;
  arrAirportName?: string;
  /**
   * @example
   * XIL
   */
  arrCityCode?: string;
  arrCityName?: string;
  /**
   * @example
   * 2023-07-20 08:25:00
   */
  arrTime?: string;
  arriveTerminal?: string;
  /**
   * @remarks
   * cabin
   */
  cabin?: string;
  cabinAndDiscount?: string;
  /**
   * @remarks
   * cabin_class
   * 
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @remarks
   * cabin_class_name
   */
  cabinClassName?: string;
  /**
   * @example
   * false
   */
  codeShare?: boolean;
  deadlineText?: string;
  /**
   * @example
   * PEK
   */
  depAirportCode?: string;
  depAirportName?: string;
  /**
   * @example
   * BJS
   */
  depCityCode?: string;
  depCityName?: string;
  /**
   * @example
   * 2023-07-29
   */
  depDate?: string;
  /**
   * @example
   * 2023-07-20 07:00:00
   */
  depTime?: string;
  departTerminal?: string;
  /**
   * @example
   * 0.4
   */
  discount?: number;
  flightChange?: FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneysSegmentListFlightChange;
  /**
   * @example
   * CA1110
   */
  flightNo?: string;
  /**
   * @example
   * ARJ
   */
  flightType?: string;
  flyDuration?: number;
  manufacturer?: string;
  mealDesc?: string;
  onTimeRate?: string;
  operatingAirShortName?: string;
  operatingAirlineCode?: string;
  operatingAirlineEnglishName?: string;
  operatingAirlineIconUrl?: string;
  operatingAirlineName?: string;
  operatingAirlinePhone?: string;
  operatingFlightNo?: string;
  planeType?: string;
  raisePrice?: number;
  segmentId?: string;
  /**
   * @remarks
   * segmentIndex
   * 
   * @example
   * 0
   */
  segmentIndex?: number;
  segmentPosition?: FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneysSegmentListSegmentPosition;
  stopAirport?: string;
  stopArrTime?: string;
  stopCity?: string;
  stopCityName?: string;
  stopDepTime?: string;
  stopQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      airLineCode: 'air_line_code',
      airLineEnglishName: 'air_line_english_name',
      airLineName: 'air_line_name',
      airLinePhone: 'air_line_phone',
      airlineIconUrl: 'airline_icon_url',
      airlineShortName: 'airline_short_name',
      arrAirportCode: 'arr_airport_code',
      arrAirportName: 'arr_airport_name',
      arrCityCode: 'arr_city_code',
      arrCityName: 'arr_city_name',
      arrTime: 'arr_time',
      arriveTerminal: 'arrive_terminal',
      cabin: 'cabin',
      cabinAndDiscount: 'cabin_and_discount',
      cabinClass: 'cabin_class',
      cabinClassName: 'cabin_class_name',
      codeShare: 'code_share',
      deadlineText: 'deadline_text',
      depAirportCode: 'dep_airport_code',
      depAirportName: 'dep_airport_name',
      depCityCode: 'dep_city_code',
      depCityName: 'dep_city_name',
      depDate: 'dep_date',
      depTime: 'dep_time',
      departTerminal: 'depart_terminal',
      discount: 'discount',
      flightChange: 'flight_change',
      flightNo: 'flight_no',
      flightType: 'flight_type',
      flyDuration: 'fly_duration',
      manufacturer: 'manufacturer',
      mealDesc: 'meal_desc',
      onTimeRate: 'on_time_rate',
      operatingAirShortName: 'operating_air_short_name',
      operatingAirlineCode: 'operating_airline_code',
      operatingAirlineEnglishName: 'operating_airline_english_name',
      operatingAirlineIconUrl: 'operating_airline_icon_url',
      operatingAirlineName: 'operating_airline_name',
      operatingAirlinePhone: 'operating_airline_phone',
      operatingFlightNo: 'operating_flight_no',
      planeType: 'plane_type',
      raisePrice: 'raise_price',
      segmentId: 'segment_id',
      segmentIndex: 'segment_index',
      segmentPosition: 'segment_position',
      stopAirport: 'stop_airport',
      stopArrTime: 'stop_arr_time',
      stopCity: 'stop_city',
      stopCityName: 'stop_city_name',
      stopDepTime: 'stop_dep_time',
      stopQuantity: 'stop_quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airLineCode: 'string',
      airLineEnglishName: 'string',
      airLineName: 'string',
      airLinePhone: 'string',
      airlineIconUrl: 'string',
      airlineShortName: 'string',
      arrAirportCode: 'string',
      arrAirportName: 'string',
      arrCityCode: 'string',
      arrCityName: 'string',
      arrTime: 'string',
      arriveTerminal: 'string',
      cabin: 'string',
      cabinAndDiscount: 'string',
      cabinClass: 'string',
      cabinClassName: 'string',
      codeShare: 'boolean',
      deadlineText: 'string',
      depAirportCode: 'string',
      depAirportName: 'string',
      depCityCode: 'string',
      depCityName: 'string',
      depDate: 'string',
      depTime: 'string',
      departTerminal: 'string',
      discount: 'number',
      flightChange: FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneysSegmentListFlightChange,
      flightNo: 'string',
      flightType: 'string',
      flyDuration: 'number',
      manufacturer: 'string',
      mealDesc: 'string',
      onTimeRate: 'string',
      operatingAirShortName: 'string',
      operatingAirlineCode: 'string',
      operatingAirlineEnglishName: 'string',
      operatingAirlineIconUrl: 'string',
      operatingAirlineName: 'string',
      operatingAirlinePhone: 'string',
      operatingFlightNo: 'string',
      planeType: 'string',
      raisePrice: 'number',
      segmentId: 'string',
      segmentIndex: 'number',
      segmentPosition: FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneysSegmentListSegmentPosition,
      stopAirport: 'string',
      stopArrTime: 'string',
      stopCity: 'string',
      stopCityName: 'string',
      stopDepTime: 'string',
      stopQuantity: 'number',
    };
  }

  validate() {
    if(this.flightChange && typeof (this.flightChange as any).validate === 'function') {
      (this.flightChange as any).validate();
    }
    if(this.segmentPosition && typeof (this.segmentPosition as any).validate === 'function') {
      (this.segmentPosition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

