// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AsyncEditTimelineRequestTimelinesClips } from "./AsyncEditTimelineRequestTimelinesClips";


export class AsyncEditTimelineRequestTimelines extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  clips?: AsyncEditTimelineRequestTimelinesClips[];
  timelineId?: string;
  static names(): { [key: string]: string } {
    return {
      clips: 'Clips',
      timelineId: 'TimelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clips: { 'type': 'array', 'itemType': AsyncEditTimelineRequestTimelinesClips },
      timelineId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clips)) {
      $dara.Model.validateArray(this.clips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

