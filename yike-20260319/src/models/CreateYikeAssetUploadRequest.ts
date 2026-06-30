// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateYikeAssetUploadRequest extends $dara.Model {
  /**
   * @remarks
   * The file name extension.
   * 
   * This parameter is required.
   * 
   * @example
   * mp4
   */
  fileExt?: string;
  /**
   * @remarks
   * The file type. Default value: Media.
   * 
   * @example
   * StoryboardInput
   */
  fileType?: string;
  static names(): { [key: string]: string } {
    return {
      fileExt: 'FileExt',
      fileType: 'FileType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileExt: 'string',
      fileType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

