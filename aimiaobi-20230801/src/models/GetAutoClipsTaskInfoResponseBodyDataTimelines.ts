// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAutoClipsTaskInfoResponseBodyDataTimelinesClips } from "./GetAutoClipsTaskInfoResponseBodyDataTimelinesClips";


export class GetAutoClipsTaskInfoResponseBodyDataTimelines extends $dara.Model {
  clips?: GetAutoClipsTaskInfoResponseBodyDataTimelinesClips[];
  content?: string;
  /**
   * @example
   * 20774ebd9abc71ef80486632b68f0102
   */
  timelineId?: string;
  static names(): { [key: string]: string } {
    return {
      clips: 'Clips',
      content: 'Content',
      timelineId: 'TimelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clips: { 'type': 'array', 'itemType': GetAutoClipsTaskInfoResponseBodyDataTimelinesClips },
      content: 'string',
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

