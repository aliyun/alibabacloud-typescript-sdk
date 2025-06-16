// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChangeApplyRequestChangedJourneysSegmentList } from "./ChangeApplyRequestChangedJourneysSegmentList";


export class ChangeApplyRequestChangedJourneys extends $dara.Model {
  segmentList?: ChangeApplyRequestChangedJourneysSegmentList[];
  static names(): { [key: string]: string } {
    return {
      segmentList: 'segment_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentList: { 'type': 'array', 'itemType': ChangeApplyRequestChangedJourneysSegmentList },
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

