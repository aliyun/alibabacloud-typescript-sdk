// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoModerationResultResponseBodyDataFrameResultFramesResultsCustomImage extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom image that is hit.
   * 
   * @example
   * 1234
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the custom image library that is hit.
   * 
   * @example
   * 12345678
   */
  libId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      libId: 'LibId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      libId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

