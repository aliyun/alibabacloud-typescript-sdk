// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchResponseBodyDataSolutionListSegmentBaggageCheckInInfoList extends $dara.Model {
  /**
   * @remarks
   * through check-in baggage policy type
   * 1. baggage through check-in between segments
   * 2. baggage re-check-in needed between segments
   * 3. baggage through check-in at stop city ( applies for stop flight )
   * 4. baggage re-checkin needed at stop city ( applies for stop flight )
   * 
   * @example
   * 1
   */
  luggageDirectInfoType?: number;
  /**
   * @remarks
   * segment id list. 
   * all the listed segment ids share the same baggage through check-in  policy
   */
  segmentIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      luggageDirectInfoType: 'luggage_direct_info_type',
      segmentIdList: 'segment_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      luggageDirectInfoType: 'number',
      segmentIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.segmentIdList)) {
      $dara.Model.validateArray(this.segmentIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

