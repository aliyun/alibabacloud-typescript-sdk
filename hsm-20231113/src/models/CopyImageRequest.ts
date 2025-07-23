// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyImageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * image-hafiudfahdd****
   */
  imageUid?: string;
  /**
   * @remarks
   * The ID of the destination region.
   * 
   * @example
   * cn-beijing
   */
  targetRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      imageUid: 'ImageUid',
      targetRegionId: 'TargetRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUid: 'string',
      targetRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

