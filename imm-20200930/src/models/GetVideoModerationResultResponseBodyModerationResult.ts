// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetVideoModerationResultResponseBodyModerationResultFrames } from "./GetVideoModerationResultResponseBodyModerationResultFrames";


export class GetVideoModerationResultResponseBodyModerationResult extends $dara.Model {
  categories?: string[];
  frames?: GetVideoModerationResultResponseBodyModerationResultFrames;
  /**
   * @example
   * block
   */
  suggestion?: string;
  /**
   * @example
   * oss://test-bucket/test-object
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      frames: 'Frames',
      suggestion: 'Suggestion',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      frames: GetVideoModerationResultResponseBodyModerationResultFrames,
      suggestion: 'string',
      URI: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    if(this.frames && typeof (this.frames as any).validate === 'function') {
      (this.frames as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

