// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IFlightOrderListQueryResponseBodyModuleFlightRefundOrderListFlightRefundSegmentList extends $dara.Model {
  /**
   * @example
   * MU
   */
  airlineCode?: string;
  airlineName?: string;
  arrApt?: string;
  /**
   * @example
   * HKG
   */
  arrAptCode?: string;
  arrCity?: string;
  /**
   * @example
   * HKG
   */
  arrCityCode?: string;
  /**
   * @example
   * T1
   */
  arrTerminal?: string;
  /**
   * @example
   * 2024-10-28 14:26:00
   */
  arrTime?: string;
  /**
   * @example
   * CA
   */
  carrierAirlineCode?: string;
  carrierAirlineName?: string;
  depApt?: string;
  /**
   * @example
   * HGH
   */
  depAptCode?: string;
  depCity?: string;
  /**
   * @example
   * HGH
   */
  depCityCode?: string;
  /**
   * @example
   * T1
   */
  depTerminal?: string;
  /**
   * @example
   * 2024-10-25 11:24:00
   */
  depTime?: string;
  /**
   * @example
   * MU5334
   */
  flightNo?: string;
  /**
   * @example
   * 0
   */
  journeyIndex?: number;
  /**
   * @example
   * 0
   */
  segmentIndex?: number;
  share?: boolean;
  /**
   * @example
   * KIX
   */
  stopAptCode?: string;
  /**
   * @example
   * 2024-10-26 11:25:00
   */
  stopArrTime?: string;
  stopCity?: string;
  /**
   * @example
   * OSA
   */
  stopCityCode?: string;
  /**
   * @example
   * 2024-10-27 11:26:00
   */
  stopDepTime?: string;
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineName: 'airline_name',
      arrApt: 'arr_apt',
      arrAptCode: 'arr_apt_code',
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      arrTerminal: 'arr_terminal',
      arrTime: 'arr_time',
      carrierAirlineCode: 'carrier_airline_code',
      carrierAirlineName: 'carrier_airline_name',
      depApt: 'dep_apt',
      depAptCode: 'dep_apt_code',
      depCity: 'dep_city',
      depCityCode: 'dep_city_code',
      depTerminal: 'dep_terminal',
      depTime: 'dep_time',
      flightNo: 'flight_no',
      journeyIndex: 'journey_index',
      segmentIndex: 'segment_index',
      share: 'share',
      stopAptCode: 'stop_apt_code',
      stopArrTime: 'stop_arr_time',
      stopCity: 'stop_city',
      stopCityCode: 'stop_city_code',
      stopDepTime: 'stop_dep_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineName: 'string',
      arrApt: 'string',
      arrAptCode: 'string',
      arrCity: 'string',
      arrCityCode: 'string',
      arrTerminal: 'string',
      arrTime: 'string',
      carrierAirlineCode: 'string',
      carrierAirlineName: 'string',
      depApt: 'string',
      depAptCode: 'string',
      depCity: 'string',
      depCityCode: 'string',
      depTerminal: 'string',
      depTime: 'string',
      flightNo: 'string',
      journeyIndex: 'number',
      segmentIndex: 'number',
      share: 'boolean',
      stopAptCode: 'string',
      stopArrTime: 'string',
      stopCity: 'string',
      stopCityCode: 'string',
      stopDepTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

