// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightListingSearchV2ResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfos } from "./FlightListingSearchV2responseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfos";


export class FlightListingSearchV2ResponseBodyModuleFlightItemListFlightJourneyInfos extends $dara.Model {
  /**
   * @example
   * HGH
   */
  arrCityCode?: string;
  arrCityName?: string;
  /**
   * @example
   * 2023-08-13 09:45
   */
  arrTime?: string;
  /**
   * @example
   * BJS
   */
  depCityCode?: string;
  depCityName?: string;
  /**
   * @example
   * 2023-08-13 07:25
   */
  depTime?: string;
  /**
   * @example
   * 140
   */
  duration?: number;
  extensions?: { [key: string]: string };
  flightSegmentInfos?: FlightListingSearchV2ResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfos[];
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
      extensions: 'extensions',
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
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      flightSegmentInfos: { 'type': 'array', 'itemType': FlightListingSearchV2ResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfos },
      journeyIndex: 'number',
      transferTime: 'number',
    };
  }

  validate() {
    if(this.extensions) {
      $dara.Model.validateMap(this.extensions);
    }
    if(Array.isArray(this.flightSegmentInfos)) {
      $dara.Model.validateArray(this.flightSegmentInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

