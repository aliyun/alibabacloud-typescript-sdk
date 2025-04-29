// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOtaSearchResponseBodyModuleFlightListAirlineInfo } from "./FlightOtaSearchResponseBodyModuleFlightListAirlineInfo";
import { FlightOtaSearchResponseBodyModuleFlightListArrAirportInfo } from "./FlightOtaSearchResponseBodyModuleFlightListArrAirportInfo";
import { FlightOtaSearchResponseBodyModuleFlightListCabinInfoList } from "./FlightOtaSearchResponseBodyModuleFlightListCabinInfoList";
import { FlightOtaSearchResponseBodyModuleFlightListDepAirportInfo } from "./FlightOtaSearchResponseBodyModuleFlightListDepAirportInfo";
import { FlightOtaSearchResponseBodyModuleFlightListFlightRuleList } from "./FlightOtaSearchResponseBodyModuleFlightListFlightRuleList";


export class FlightOtaSearchResponseBodyModuleFlightList extends $dara.Model {
  airlineInfo?: FlightOtaSearchResponseBodyModuleFlightListAirlineInfo;
  arrAirportInfo?: FlightOtaSearchResponseBodyModuleFlightListArrAirportInfo;
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  arrDate?: string;
  /**
   * @example
   * 100
   */
  buildPrice?: number;
  /**
   * @example
   * Y
   */
  cabin?: string;
  /**
   * @example
   * 2
   */
  cabinClass?: string;
  cabinInfoList?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoList[];
  /**
   * @example
   * FM
   */
  carrierAirline?: string;
  /**
   * @example
   * FM9152
   */
  carrierNo?: string;
  depAirportInfo?: FlightOtaSearchResponseBodyModuleFlightListDepAirportInfo;
  /**
   * @example
   * BJS
   */
  depCityCode?: string;
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  depDate?: string;
  /**
   * @example
   * 1
   */
  discount?: number;
  /**
   * @example
   * CA1234
   */
  flightNo?: string;
  flightRuleList?: FlightOtaSearchResponseBodyModuleFlightListFlightRuleList[];
  /**
   * @example
   * demo
   */
  flightRuleListStr?: string;
  flightSize?: string;
  /**
   * @example
   * demo
   */
  flightType?: string;
  /**
   * @example
   * 1
   */
  invoiceType?: number;
  /**
   * @example
   * true
   */
  isProtocol?: boolean;
  /**
   * @example
   * false
   */
  isShare?: boolean;
  /**
   * @example
   * false
   */
  isStop?: boolean;
  /**
   * @example
   * false
   */
  isTransfer?: boolean;
  mealDesc?: string;
  /**
   * @example
   * 100
   */
  oilPrice?: number;
  /**
   * @example
   * 6669c8e53b684105b8687bad0331988a_41
   */
  otaItemId?: string;
  /**
   * @example
   * 100
   */
  price?: number;
  /**
   * @example
   * 1
   */
  productType?: number;
  productTypeDesc?: string;
  /**
   * @example
   * 100
   */
  promotionPrice?: string;
  /**
   * @example
   * 1
   */
  remainedSeatCount?: string;
  /**
   * @example
   * 1000_1_0
   */
  secretParams?: string;
  /**
   * @example
   * 1
   */
  segmentNumber?: string;
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  stopArrTime?: string;
  /**
   * @example
   * HGH
   */
  stopCity?: string;
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  stopDepTime?: string;
  /**
   * @example
   * 100
   */
  ticketPrice?: number;
  /**
   * @example
   * 100
   */
  totalPrice?: string;
  /**
   * @example
   * 1
   */
  tripType?: number;
  static names(): { [key: string]: string } {
    return {
      airlineInfo: 'airline_info',
      arrAirportInfo: 'arr_airport_info',
      arrDate: 'arr_date',
      buildPrice: 'build_price',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      cabinInfoList: 'cabin_info_list',
      carrierAirline: 'carrier_airline',
      carrierNo: 'carrier_no',
      depAirportInfo: 'dep_airport_info',
      depCityCode: 'dep_city_code',
      depDate: 'dep_date',
      discount: 'discount',
      flightNo: 'flight_no',
      flightRuleList: 'flight_rule_list',
      flightRuleListStr: 'flight_rule_list_str',
      flightSize: 'flight_size',
      flightType: 'flight_type',
      invoiceType: 'invoice_type',
      isProtocol: 'is_protocol',
      isShare: 'is_share',
      isStop: 'is_stop',
      isTransfer: 'is_transfer',
      mealDesc: 'meal_desc',
      oilPrice: 'oil_price',
      otaItemId: 'ota_item_id',
      price: 'price',
      productType: 'product_type',
      productTypeDesc: 'product_type_desc',
      promotionPrice: 'promotion_price',
      remainedSeatCount: 'remained_seat_count',
      secretParams: 'secret_params',
      segmentNumber: 'segment_number',
      stopArrTime: 'stop_arr_time',
      stopCity: 'stop_city',
      stopDepTime: 'stop_dep_time',
      ticketPrice: 'ticket_price',
      totalPrice: 'total_price',
      tripType: 'trip_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineInfo: FlightOtaSearchResponseBodyModuleFlightListAirlineInfo,
      arrAirportInfo: FlightOtaSearchResponseBodyModuleFlightListArrAirportInfo,
      arrDate: 'string',
      buildPrice: 'number',
      cabin: 'string',
      cabinClass: 'string',
      cabinInfoList: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightListCabinInfoList },
      carrierAirline: 'string',
      carrierNo: 'string',
      depAirportInfo: FlightOtaSearchResponseBodyModuleFlightListDepAirportInfo,
      depCityCode: 'string',
      depDate: 'string',
      discount: 'number',
      flightNo: 'string',
      flightRuleList: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightListFlightRuleList },
      flightRuleListStr: 'string',
      flightSize: 'string',
      flightType: 'string',
      invoiceType: 'number',
      isProtocol: 'boolean',
      isShare: 'boolean',
      isStop: 'boolean',
      isTransfer: 'boolean',
      mealDesc: 'string',
      oilPrice: 'number',
      otaItemId: 'string',
      price: 'number',
      productType: 'number',
      productTypeDesc: 'string',
      promotionPrice: 'string',
      remainedSeatCount: 'string',
      secretParams: 'string',
      segmentNumber: 'string',
      stopArrTime: 'string',
      stopCity: 'string',
      stopDepTime: 'string',
      ticketPrice: 'number',
      totalPrice: 'string',
      tripType: 'number',
    };
  }

  validate() {
    if(this.airlineInfo && typeof (this.airlineInfo as any).validate === 'function') {
      (this.airlineInfo as any).validate();
    }
    if(this.arrAirportInfo && typeof (this.arrAirportInfo as any).validate === 'function') {
      (this.arrAirportInfo as any).validate();
    }
    if(Array.isArray(this.cabinInfoList)) {
      $dara.Model.validateArray(this.cabinInfoList);
    }
    if(this.depAirportInfo && typeof (this.depAirportInfo as any).validate === 'function') {
      (this.depAirportInfo as any).validate();
    }
    if(Array.isArray(this.flightRuleList)) {
      $dara.Model.validateArray(this.flightRuleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

