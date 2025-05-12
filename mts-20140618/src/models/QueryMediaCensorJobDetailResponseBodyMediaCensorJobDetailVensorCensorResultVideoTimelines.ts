// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultVideoTimelinesVideoTimeline } from "./QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultVideoTimelinesVideoTimeline";


export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultVideoTimelines extends $dara.Model {
  videoTimeline?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultVideoTimelinesVideoTimeline[];
  static names(): { [key: string]: string } {
    return {
      videoTimeline: 'VideoTimeline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoTimeline: { 'type': 'array', 'itemType': QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultVideoTimelinesVideoTimeline },
    };
  }

  validate() {
    if(Array.isArray(this.videoTimeline)) {
      $dara.Model.validateArray(this.videoTimeline);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

