// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetImageModerationResultResponseBodyModerationResultFrames } from "./GetImageModerationResultResponseBodyModerationResultFrames";


export class GetImageModerationResultResponseBodyModerationResult extends $dara.Model {
  /**
   * @remarks
   * List of categories.
   */
  categories?: string[];
  /**
   * @remarks
   * The information about video and motion detection frames.
   */
  frames?: GetImageModerationResultResponseBodyModerationResultFrames;
  /**
   * @remarks
   * The recommended operation. Valid values:
   * 
   * *   pass: The image has passed the check. No action is required.
   * *   review: The image contains suspected violations and requires human review.
   * *   block: The image contains violations. Further actions, such as deleting or blocking the image, are recommended.
   * 
   * @example
   * block
   */
  suggestion?: string;
  /**
   * @remarks
   * The OSS URI of the file. The URI follows the oss://${bucketname}/${objectname} format. bucketname indicates the name of an OSS bucket that is in the same region as the current project, and objectname is the file path.
   * 
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
      frames: GetImageModerationResultResponseBodyModerationResultFrames,
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

