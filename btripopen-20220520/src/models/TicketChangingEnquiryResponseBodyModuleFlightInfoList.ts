// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TicketChangingEnquiryResponseBodyModuleFlightInfoListAirlineInfo } from "./TicketChangingEnquiryResponseBodyModuleFlightInfoListAirlineInfo";
import { TicketChangingEnquiryResponseBodyModuleFlightInfoListArrAirportInfo } from "./TicketChangingEnquiryResponseBodyModuleFlightInfoListArrAirportInfo";
import { TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinList } from "./TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinList";
import { TicketChangingEnquiryResponseBodyModuleFlightInfoListDepAirportInfo } from "./TicketChangingEnquiryResponseBodyModuleFlightInfoListDepAirportInfo";
import { TicketChangingEnquiryResponseBodyModuleFlightInfoListLowestCabinPrice } from "./TicketChangingEnquiryResponseBodyModuleFlightInfoListLowestCabinPrice";


export class TicketChangingEnquiryResponseBodyModuleFlightInfoList extends $dara.Model {
  airlineInfo?: TicketChangingEnquiryResponseBodyModuleFlightInfoListAirlineInfo;
  arrAirportInfo?: TicketChangingEnquiryResponseBodyModuleFlightInfoListArrAirportInfo;
  cabinList?: TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinList[];
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
  depAirportInfo?: TicketChangingEnquiryResponseBodyModuleFlightInfoListDepAirportInfo;
  /**
   * @example
   * HGH
   */
  depCityCode?: string;
  /**
   * @example
   * CA1351
   */
  flightNo?: string;
  /**
   * @example
   * false
   */
  isShare?: boolean;
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
  /**
   * @example
   * 0
   */
  lowestCabinNum?: string;
  lowestCabinPrice?: TicketChangingEnquiryResponseBodyModuleFlightInfoListLowestCabinPrice[];
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
  static names(): { [key: string]: string } {
    return {
      airlineInfo: 'airline_info',
      arrAirportInfo: 'arr_airport_info',
      cabinList: 'cabin_list',
      carrierAirline: 'carrier_airline',
      carrierNo: 'carrier_no',
      depAirportInfo: 'dep_airport_info',
      depCityCode: 'dep_city_code',
      flightNo: 'flight_no',
      isShare: 'is_share',
      lowestCabin: 'lowest_cabin',
      lowestCabinClass: 'lowest_cabin_class',
      lowestCabinDesc: 'lowest_cabin_desc',
      lowestCabinNum: 'lowest_cabin_num',
      lowestCabinPrice: 'lowest_cabin_price',
      modifyFlightArrTime: 'modify_flight_arr_time',
      modifyFlightDepDate: 'modify_flight_dep_date',
      modifyFlightDepTime: 'modify_flight_dep_time',
      sessionId: 'session_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineInfo: TicketChangingEnquiryResponseBodyModuleFlightInfoListAirlineInfo,
      arrAirportInfo: TicketChangingEnquiryResponseBodyModuleFlightInfoListArrAirportInfo,
      cabinList: { 'type': 'array', 'itemType': TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinList },
      carrierAirline: 'string',
      carrierNo: 'string',
      depAirportInfo: TicketChangingEnquiryResponseBodyModuleFlightInfoListDepAirportInfo,
      depCityCode: 'string',
      flightNo: 'string',
      isShare: 'boolean',
      lowestCabin: 'string',
      lowestCabinClass: 'string',
      lowestCabinDesc: 'string',
      lowestCabinNum: 'string',
      lowestCabinPrice: { 'type': 'array', 'itemType': TicketChangingEnquiryResponseBodyModuleFlightInfoListLowestCabinPrice },
      modifyFlightArrTime: 'string',
      modifyFlightDepDate: 'string',
      modifyFlightDepTime: 'string',
      sessionId: 'string',
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

