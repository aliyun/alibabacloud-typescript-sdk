// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchResponseBodyDataSolutionListJourneyListSegmentList } from "./SearchResponseBodyDataSolutionListJourneyListSegmentList";


export class SearchResponseBodyDataSolutionListJourneyList extends $dara.Model {
  /**
   * @remarks
   * segment Info
   */
  segmentList?: SearchResponseBodyDataSolutionListJourneyListSegmentList[];
  /**
   * @remarks
   * number of transfers
   * 
   * @example
   * 0
   */
  transferCount?: number;
  static names(): { [key: string]: string } {
    return {
      segmentList: 'segment_list',
      transferCount: 'transfer_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentList: { 'type': 'array', 'itemType': SearchResponseBodyDataSolutionListJourneyListSegmentList },
      transferCount: 'number',
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

