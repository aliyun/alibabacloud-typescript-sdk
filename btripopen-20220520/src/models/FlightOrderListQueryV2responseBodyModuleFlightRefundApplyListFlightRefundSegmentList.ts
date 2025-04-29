// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOrderListQueryV2ResponseBodyModuleFlightRefundApplyListFlightRefundSegmentList extends $dara.Model {
  /**
   * @example
   * CZ
   */
  airlineCode?: string;
  airlineName?: string;
  arrApt?: string;
  /**
   * @example
   * PKX
   */
  arrAptCode?: string;
  arrCity?: string;
  /**
   * @example
   * BJS
   */
  arrCityCode?: string;
  /**
   * @example
   * T1
   */
  arrTerminal?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  arrTime?: string;
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
   * 2022-07-20T10:40Z
   */
  depTime?: string;
  flightMile?: number;
  /**
   * @example
   * MU5619
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
  stopCity?: string[];
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
      depApt: 'dep_apt',
      depAptCode: 'dep_apt_code',
      depCity: 'dep_city',
      depCityCode: 'dep_city_code',
      depTerminal: 'dep_terminal',
      depTime: 'dep_time',
      flightMile: 'flight_mile',
      flightNo: 'flight_no',
      journeyIndex: 'journey_index',
      segmentIndex: 'segment_index',
      stopCity: 'stop_city',
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
      depApt: 'string',
      depAptCode: 'string',
      depCity: 'string',
      depCityCode: 'string',
      depTerminal: 'string',
      depTime: 'string',
      flightMile: 'number',
      flightNo: 'string',
      journeyIndex: 'number',
      segmentIndex: 'number',
      stopCity: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.stopCity)) {
      $dara.Model.validateArray(this.stopCity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

