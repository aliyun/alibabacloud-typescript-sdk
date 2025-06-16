// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChangeDetailResponseBodyDataOriginalJourneysSegmentList } from "./ChangeDetailResponseBodyDataOriginalJourneysSegmentList";


export class ChangeDetailResponseBodyDataOriginalJourneys extends $dara.Model {
  segmentList?: ChangeDetailResponseBodyDataOriginalJourneysSegmentList[];
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
      segmentList: { 'type': 'array', 'itemType': ChangeDetailResponseBodyDataOriginalJourneysSegmentList },
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

