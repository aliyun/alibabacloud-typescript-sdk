// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateYikeAssetUploadRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mp4
   */
  fileExt?: string;
  static names(): { [key: string]: string } {
    return {
      fileExt: 'FileExt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileExt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

