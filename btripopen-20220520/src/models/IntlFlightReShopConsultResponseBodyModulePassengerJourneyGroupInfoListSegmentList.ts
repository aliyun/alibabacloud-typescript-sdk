// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoListSegmentList extends $dara.Model {
  arrCityCode?: string;
  depCityCode?: string;
  depTime?: string;
  flightNo?: string;
  journeyIndex?: number;
  segmentIndex?: number;
  segmentKey?: string;
  static names(): { [key: string]: string } {
    return {
      arrCityCode: 'arr_city_code',
      depCityCode: 'dep_city_code',
      depTime: 'dep_time',
      flightNo: 'flight_no',
      journeyIndex: 'journey_index',
      segmentIndex: 'segment_index',
      segmentKey: 'segment_key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCityCode: 'string',
      depCityCode: 'string',
      depTime: 'string',
      flightNo: 'string',
      journeyIndex: 'number',
      segmentIndex: 'number',
      segmentKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

