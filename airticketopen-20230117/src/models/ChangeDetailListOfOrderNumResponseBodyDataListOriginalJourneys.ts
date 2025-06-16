// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChangeDetailListOfOrderNumResponseBodyDataListOriginalJourneysSegmentList } from "./ChangeDetailListOfOrderNumResponseBodyDataListOriginalJourneysSegmentList";


export class ChangeDetailListOfOrderNumResponseBodyDataListOriginalJourneys extends $dara.Model {
  segmentList?: ChangeDetailListOfOrderNumResponseBodyDataListOriginalJourneysSegmentList[];
  /**
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
      segmentList: { 'type': 'array', 'itemType': ChangeDetailListOfOrderNumResponseBodyDataListOriginalJourneysSegmentList },
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

