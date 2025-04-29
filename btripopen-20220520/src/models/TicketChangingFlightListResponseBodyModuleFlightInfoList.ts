// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TicketChangingFlightListResponseBodyModuleFlightInfoListAirlineInfo } from "./TicketChangingFlightListResponseBodyModuleFlightInfoListAirlineInfo";
import { TicketChangingFlightListResponseBodyModuleFlightInfoListArrAirportInfo } from "./TicketChangingFlightListResponseBodyModuleFlightInfoListArrAirportInfo";
import { TicketChangingFlightListResponseBodyModuleFlightInfoListCabinList } from "./TicketChangingFlightListResponseBodyModuleFlightInfoListCabinList";
import { TicketChangingFlightListResponseBodyModuleFlightInfoListDepAirportInfo } from "./TicketChangingFlightListResponseBodyModuleFlightInfoListDepAirportInfo";
import { TicketChangingFlightListResponseBodyModuleFlightInfoListLowestCabinPrice } from "./TicketChangingFlightListResponseBodyModuleFlightInfoListLowestCabinPrice";


export class TicketChangingFlightListResponseBodyModuleFlightInfoList extends $dara.Model {
  airlineInfo?: TicketChangingFlightListResponseBodyModuleFlightInfoListAirlineInfo;
  arrAirportInfo?: TicketChangingFlightListResponseBodyModuleFlightInfoListArrAirportInfo;
  cabinList?: TicketChangingFlightListResponseBodyModuleFlightInfoListCabinList[];
  /**
   * @example
   * CA1704
   */
  carrierAirline?: string;
  /**
   * @example
   * CA1704
   */
  carrierNo?: string;
  depAirportInfo?: TicketChangingFlightListResponseBodyModuleFlightInfoListDepAirportInfo;
  /**
   * @example
   * CA1704
   */
  flightNo?: string;
  flightSize?: string;
  flightType?: string;
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
   * Y
   */
  lowestCabin?: string;
  /**
   * @example
   * Y
   */
  lowestCabinClass?: string;
  lowestCabinDesc?: string;
  lowestCabinNum?: string;
  lowestCabinPrice?: TicketChangingFlightListResponseBodyModuleFlightInfoListLowestCabinPrice[];
  mealDesc?: string;
  /**
   * @example
   * 2000-00-00 00:00:00
   */
  modifyFlightArrTime?: string;
  /**
   * @example
   * 2000-00-00 00:00:00
   */
  modifyFlightDepDate?: string;
  /**
   * @example
   * 2000-00-00 00:00:00
   */
  modifyFlightDepTime?: string;
  /**
   * @example
   * d1fb9e0a794f45e1b762d36ff1d17zz
   */
  sessionId?: string;
  /**
   * @example
   * 2000-00-00 00:00:00
   */
  stopArrTime?: string;
  /**
   * @example
   * HGH
   */
  stopCity?: string;
  /**
   * @example
   * 2000-00-00 00:00:00
   */
  stopDepTime?: string;
  static names(): { [key: string]: string } {
    return {
      airlineInfo: 'airline_info',
      arrAirportInfo: 'arr_airport_info',
      cabinList: 'cabin_list',
      carrierAirline: 'carrier_airline',
      carrierNo: 'carrier_no',
      depAirportInfo: 'dep_airport_info',
      flightNo: 'flight_no',
      flightSize: 'flight_size',
      flightType: 'flight_type',
      isProtocol: 'is_protocol',
      isShare: 'is_share',
      isStop: 'is_stop',
      lowestCabin: 'lowest_cabin',
      lowestCabinClass: 'lowest_cabin_class',
      lowestCabinDesc: 'lowest_cabin_desc',
      lowestCabinNum: 'lowest_cabin_num',
      lowestCabinPrice: 'lowest_cabin_price',
      mealDesc: 'meal_desc',
      modifyFlightArrTime: 'modify_flight_arr_time',
      modifyFlightDepDate: 'modify_flight_dep_date',
      modifyFlightDepTime: 'modify_flight_dep_time',
      sessionId: 'session_id',
      stopArrTime: 'stop_arr_time',
      stopCity: 'stop_city',
      stopDepTime: 'stop_dep_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineInfo: TicketChangingFlightListResponseBodyModuleFlightInfoListAirlineInfo,
      arrAirportInfo: TicketChangingFlightListResponseBodyModuleFlightInfoListArrAirportInfo,
      cabinList: { 'type': 'array', 'itemType': TicketChangingFlightListResponseBodyModuleFlightInfoListCabinList },
      carrierAirline: 'string',
      carrierNo: 'string',
      depAirportInfo: TicketChangingFlightListResponseBodyModuleFlightInfoListDepAirportInfo,
      flightNo: 'string',
      flightSize: 'string',
      flightType: 'string',
      isProtocol: 'boolean',
      isShare: 'boolean',
      isStop: 'boolean',
      lowestCabin: 'string',
      lowestCabinClass: 'string',
      lowestCabinDesc: 'string',
      lowestCabinNum: 'string',
      lowestCabinPrice: { 'type': 'array', 'itemType': TicketChangingFlightListResponseBodyModuleFlightInfoListLowestCabinPrice },
      mealDesc: 'string',
      modifyFlightArrTime: 'string',
      modifyFlightDepDate: 'string',
      modifyFlightDepTime: 'string',
      sessionId: 'string',
      stopArrTime: 'string',
      stopCity: 'string',
      stopDepTime: 'string',
    };
  }

  validate() {
    if(this.airlineInfo && typeof (this.airlineInfo as any).validate === 'function') {
      (this.airlineInfo as any).validate();
    }
    if(this.arrAirportInfo && typeof (this.arrAirportInfo as any).validate === 'function') {
      (this.arrAirportInfo as any).validate();
    }
    if(Array.isArray(this.cabinList)) {
      $dara.Model.validateArray(this.cabinList);
    }
    if(this.depAirportInfo && typeof (this.depAirportInfo as any).validate === 'function') {
      (this.depAirportInfo as any).validate();
    }
    if(Array.isArray(this.lowestCabinPrice)) {
      $dara.Model.validateArray(this.lowestCabinPrice);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

