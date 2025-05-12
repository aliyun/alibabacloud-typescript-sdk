// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelinesVideoTimeline } from "./QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelinesVideoTimeline";


export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelines extends $dara.Model {
  videoTimeline?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelinesVideoTimeline[];
  static names(): { [key: string]: string } {
    return {
      videoTimeline: 'VideoTimeline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoTimeline: { 'type': 'array', 'itemType': QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelinesVideoTimeline },
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

