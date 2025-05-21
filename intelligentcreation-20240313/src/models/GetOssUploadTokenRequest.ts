// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOssUploadTokenRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8021678.png
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ProductImage
   */
  fileType?: string;
  uploadType?: number;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
      fileType: 'fileType',
      uploadType: 'uploadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileType: 'string',
      uploadType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

