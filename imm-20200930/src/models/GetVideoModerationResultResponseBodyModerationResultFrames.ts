// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetVideoModerationResultResponseBodyModerationResultFramesBlockFrames } from "./GetVideoModerationResultResponseBodyModerationResultFramesBlockFrames";


export class GetVideoModerationResultResponseBodyModerationResultFrames extends $dara.Model {
  blockFrames?: GetVideoModerationResultResponseBodyModerationResultFramesBlockFrames[];
  /**
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      blockFrames: 'BlockFrames',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockFrames: { 'type': 'array', 'itemType': GetVideoModerationResultResponseBodyModerationResultFramesBlockFrames },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.blockFrames)) {
      $dara.Model.validateArray(this.blockFrames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

