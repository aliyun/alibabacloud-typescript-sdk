// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightOrderDetailResponseBodyModuleJourneyListSegmentList } from "./IntlFlightOrderDetailResponseBodyModuleJourneyListSegmentList";


export class IntlFlightOrderDetailResponseBodyModuleJourneyList extends $dara.Model {
  /**
   * @example
   * HKG
   */
  arrCityCode?: string;
  arrCityName?: string;
  /**
   * @example
   * SHA
   */
  depCityCode?: string;
  depCityName?: string;
  /**
   * @example
   * 2024-07-06
   */
  depDate?: string;
  /**
   * @example
   * 0
   */
  journeyIndex?: number;
  segmentList?: IntlFlightOrderDetailResponseBodyModuleJourneyListSegmentList[];
  /**
   * @example
   * 0
   */
  transferCount?: number;
  /**
   * @example
   * 0
   */
  transferTime?: number;
  static names(): { [key: string]: string } {
    return {
      arrCityCode: 'arr_city_code',
      arrCityName: 'arr_city_name',
      depCityCode: 'dep_city_code',
      depCityName: 'dep_city_name',
      depDate: 'dep_date',
      journeyIndex: 'journey_index',
      segmentList: 'segment_list',
      transferCount: 'transfer_count',
      transferTime: 'transfer_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCityCode: 'string',
      arrCityName: 'string',
      depCityCode: 'string',
      depCityName: 'string',
      depDate: 'string',
      journeyIndex: 'number',
      segmentList: { 'type': 'array', 'itemType': IntlFlightOrderDetailResponseBodyModuleJourneyListSegmentList },
      transferCount: 'number',
      transferTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.segmentList)) {
      $dara.Model.validateArray(this.segmentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

