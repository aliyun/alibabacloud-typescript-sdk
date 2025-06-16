// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EnrichRequestJourneyParamListSegmentParamList } from "./EnrichRequestJourneyParamListSegmentParamList";


export class EnrichRequestJourneyParamList extends $dara.Model {
  /**
   * @remarks
   * arrival city code (capitalized)
   * 
   * This parameter is required.
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * departure city code (capitalized)
   * 
   * This parameter is required.
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
   * departure date (eg: yyyyMMdd)
   * 
   * This parameter is required.
   * 
   * @example
   * 20230310
   */
  departureDate?: string;
  /**
   * @remarks
   * segement param list
   * 
   * This parameter is required.
   */
  segmentParamList?: EnrichRequestJourneyParamListSegmentParamList[];
  static names(): { [key: string]: string } {
    return {
      arrivalCity: 'arrival_city',
      departureCity: 'departure_city',
      departureDate: 'departure_date',
      segmentParamList: 'segment_param_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalCity: 'string',
      departureCity: 'string',
      departureDate: 'string',
      segmentParamList: { 'type': 'array', 'itemType': EnrichRequestJourneyParamListSegmentParamList },
    };
  }

  validate() {
    if(Array.isArray(this.segmentParamList)) {
      $dara.Model.validateArray(this.segmentParamList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

