// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListAirlineInfo } from "./FlightModifyListingSearchV2responseBodyModuleDirectFlightListAirlineInfo";
import { FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListArrAirportInfo } from "./FlightModifyListingSearchV2responseBodyModuleDirectFlightListArrAirportInfo";
import { FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListDepAirportInfo } from "./FlightModifyListingSearchV2responseBodyModuleDirectFlightListDepAirportInfo";
import { FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListFlightShareInfo } from "./FlightModifyListingSearchV2responseBodyModuleDirectFlightListFlightShareInfo";
import { FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListFlightStopInfo } from "./FlightModifyListingSearchV2responseBodyModuleDirectFlightListFlightStopInfo";
import { FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListFlightTransferInfo } from "./FlightModifyListingSearchV2responseBodyModuleDirectFlightListFlightTransferInfo";
import { FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListPriceInfoDTO } from "./FlightModifyListingSearchV2responseBodyModuleDirectFlightListPriceInfoDto";


export class FlightModifyListingSearchV2ResponseBodyModuleDirectFlightList extends $dara.Model {
  airlineInfo?: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListAirlineInfo;
  arrAirportInfo?: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListArrAirportInfo;
  /**
   * @example
   * BJS
   */
  arrCityCode?: string;
  /**
   * @example
   * 2023-09-18 10:25:00
   */
  arrTime?: string;
  cabinClass?: string;
  cabinClassName?: string;
  depAirportInfo?: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListDepAirportInfo;
  /**
   * @example
   * XIL
   */
  depCityCode?: string;
  /**
   * @example
   * 2023-09-18 09:10:00
   */
  depTime?: string;
  /**
   * @example
   * 240
   */
  duration?: number;
  /**
   * @example
   * CA1110
   */
  flightNo?: string;
  flightShareInfo?: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListFlightShareInfo;
  flightSize?: string;
  flightStopInfo?: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListFlightStopInfo;
  flightTransferInfo?: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListFlightTransferInfo;
  /**
   * @example
   * ARJ
   */
  flightType?: string;
  /**
   * @example
   * 0
   */
  journeySeq?: number;
  /**
   * @example
   * 8
   */
  leftNum?: string;
  manufacturer?: string;
  mealDesc?: string;
  priceInfoDTO?: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListPriceInfoDTO;
  /**
   * @example
   * 0
   */
  segmentSeq?: number;
  /**
   * @example
   * false
   */
  share?: boolean;
  shortFlightSize?: string;
  spanDay?: string;
  /**
   * @example
   * false
   */
  stop?: boolean;
  /**
   * @example
   * false
   */
  transfer?: boolean;
  static names(): { [key: string]: string } {
    return {
      airlineInfo: 'airline_info',
      arrAirportInfo: 'arr_airport_info',
      arrCityCode: 'arr_city_code',
      arrTime: 'arr_time',
      cabinClass: 'cabinClass',
      cabinClassName: 'cabinClassName',
      depAirportInfo: 'dep_airport_info',
      depCityCode: 'dep_city_code',
      depTime: 'dep_time',
      duration: 'duration',
      flightNo: 'flight_no',
      flightShareInfo: 'flight_share_info',
      flightSize: 'flight_size',
      flightStopInfo: 'flight_stop_info',
      flightTransferInfo: 'flight_transfer_info',
      flightType: 'flight_type',
      journeySeq: 'journey_seq',
      leftNum: 'left_num',
      manufacturer: 'manufacturer',
      mealDesc: 'meal_desc',
      priceInfoDTO: 'price_info_d_t_o',
      segmentSeq: 'segment_seq',
      share: 'share',
      shortFlightSize: 'short_flight_size',
      spanDay: 'span_day',
      stop: 'stop',
      transfer: 'transfer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineInfo: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListAirlineInfo,
      arrAirportInfo: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListArrAirportInfo,
      arrCityCode: 'string',
      arrTime: 'string',
      cabinClass: 'string',
      cabinClassName: 'string',
      depAirportInfo: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListDepAirportInfo,
      depCityCode: 'string',
      depTime: 'string',
      duration: 'number',
      flightNo: 'string',
      flightShareInfo: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListFlightShareInfo,
      flightSize: 'string',
      flightStopInfo: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListFlightStopInfo,
      flightTransferInfo: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListFlightTransferInfo,
      flightType: 'string',
      journeySeq: 'number',
      leftNum: 'string',
      manufacturer: 'string',
      mealDesc: 'string',
      priceInfoDTO: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListPriceInfoDTO,
      segmentSeq: 'number',
      share: 'boolean',
      shortFlightSize: 'string',
      spanDay: 'string',
      stop: 'boolean',
      transfer: 'boolean',
    };
  }

  validate() {
    if(this.airlineInfo && typeof (this.airlineInfo as any).validate === 'function') {
      (this.airlineInfo as any).validate();
    }
    if(this.arrAirportInfo && typeof (this.arrAirportInfo as any).validate === 'function') {
      (this.arrAirportInfo as any).validate();
    }
    if(this.depAirportInfo && typeof (this.depAirportInfo as any).validate === 'function') {
      (this.depAirportInfo as any).validate();
    }
    if(this.flightShareInfo && typeof (this.flightShareInfo as any).validate === 'function') {
      (this.flightShareInfo as any).validate();
    }
    if(this.flightStopInfo && typeof (this.flightStopInfo as any).validate === 'function') {
      (this.flightStopInfo as any).validate();
    }
    if(this.flightTransferInfo && typeof (this.flightTransferInfo as any).validate === 'function') {
      (this.flightTransferInfo as any).validate();
    }
    if(this.priceInfoDTO && typeof (this.priceInfoDTO as any).validate === 'function') {
      (this.priceInfoDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

