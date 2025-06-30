// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfos } from "./IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfos";


export class IntlFlightOrderDetailResponseBodyModuleJourneyList extends $dara.Model {
  /**
   * @example
   * HKG
   */
  arrCityCode?: string;
  arrCityName?: string;
  arrTime?: string;
  /**
   * @example
   * SHA
   */
  depCityCode?: string;
  depCityName?: string;
  depTime?: string;
  duration?: number;
  flightSegmentInfos?: IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfos[];
  /**
   * @example
   * 0
   */
  journeyIndex?: number;
  /**
   * @example
   * 0
   */
  transferTime?: number;
  static names(): { [key: string]: string } {
    return {
      arrCityCode: 'arr_city_code',
      arrCityName: 'arr_city_name',
      arrTime: 'arr_time',
      depCityCode: 'dep_city_code',
      depCityName: 'dep_city_name',
      depTime: 'dep_time',
      duration: 'duration',
      flightSegmentInfos: 'flight_segment_infos',
      journeyIndex: 'journey_index',
      transferTime: 'transfer_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCityCode: 'string',
      arrCityName: 'string',
      arrTime: 'string',
      depCityCode: 'string',
      depCityName: 'string',
      depTime: 'string',
      duration: 'number',
      flightSegmentInfos: { 'type': 'array', 'itemType': IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfos },
      journeyIndex: 'number',
      transferTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.flightSegmentInfos)) {
      $dara.Model.validateArray(this.flightSegmentInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

