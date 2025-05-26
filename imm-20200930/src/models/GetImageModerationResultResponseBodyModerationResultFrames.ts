// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetImageModerationResultResponseBodyModerationResultFramesBlockFrames } from "./GetImageModerationResultResponseBodyModerationResultFramesBlockFrames";


export class GetImageModerationResultResponseBodyModerationResultFrames extends $dara.Model {
  /**
   * @remarks
   * The violated frames.
   */
  blockFrames?: GetImageModerationResultResponseBodyModerationResultFramesBlockFrames[];
  /**
   * @remarks
   * The total number of detected frames.
   * 
   * @example
   * 30
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
      blockFrames: { 'type': 'array', 'itemType': GetImageModerationResultResponseBodyModerationResultFramesBlockFrames },
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

