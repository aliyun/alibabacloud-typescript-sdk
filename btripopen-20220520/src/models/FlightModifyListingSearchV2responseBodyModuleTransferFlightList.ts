// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListAirlineInfo } from "./FlightModifyListingSearchV2responseBodyModuleTransferFlightListAirlineInfo";
import { FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListArrAirportInfo } from "./FlightModifyListingSearchV2responseBodyModuleTransferFlightListArrAirportInfo";
import { FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListDepAirportInfo } from "./FlightModifyListingSearchV2responseBodyModuleTransferFlightListDepAirportInfo";
import { FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListFlightShareInfo } from "./FlightModifyListingSearchV2responseBodyModuleTransferFlightListFlightShareInfo";
import { FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListFlightStopInfo } from "./FlightModifyListingSearchV2responseBodyModuleTransferFlightListFlightStopInfo";
import { FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListFlightTransferInfo } from "./FlightModifyListingSearchV2responseBodyModuleTransferFlightListFlightTransferInfo";
import { FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListPriceInfoDTO } from "./FlightModifyListingSearchV2responseBodyModuleTransferFlightListPriceInfoDto";


export class FlightModifyListingSearchV2ResponseBodyModuleTransferFlightList extends $dara.Model {
  airlineInfo?: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListAirlineInfo;
  arrAirportInfo?: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListArrAirportInfo;
  arrCityCode?: string;
  arrTime?: string;
  cabinClass?: string;
  cabinClassName?: string;
  depAirportInfo?: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListDepAirportInfo;
  depCityCode?: string;
  depTime?: string;
  /**
   * @example
   * 240
   */
  duration?: number;
  flightNo?: string;
  flightShareInfo?: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListFlightShareInfo;
  flightSize?: string;
  flightStopInfo?: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListFlightStopInfo;
  flightTransferInfo?: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListFlightTransferInfo;
  flightType?: string;
  /**
   * @example
   * 0
   */
  journeySeq?: number;
  /**
   * @example
   * 7
   */
  leftNum?: string;
  manufacturer?: string;
  mealDesc?: string;
  priceInfoDTO?: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListPriceInfoDTO;
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
      airlineInfo: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListAirlineInfo,
      arrAirportInfo: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListArrAirportInfo,
      arrCityCode: 'string',
      arrTime: 'string',
      cabinClass: 'string',
      cabinClassName: 'string',
      depAirportInfo: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListDepAirportInfo,
      depCityCode: 'string',
      depTime: 'string',
      duration: 'number',
      flightNo: 'string',
      flightShareInfo: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListFlightShareInfo,
      flightSize: 'string',
      flightStopInfo: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListFlightStopInfo,
      flightTransferInfo: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListFlightTransferInfo,
      flightType: 'string',
      journeySeq: 'number',
      leftNum: 'string',
      manufacturer: 'string',
      mealDesc: 'string',
      priceInfoDTO: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListPriceInfoDTO,
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

