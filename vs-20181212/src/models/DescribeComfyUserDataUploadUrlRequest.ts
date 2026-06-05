// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComfyUserDataUploadUrlRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * application/jpeg
   */
  contentType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 54d6911ba6d59dbe68990835a409f18c
   */
  fileMd5?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * myfile
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1024
   */
  fileSizeBytes?: number;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      fileMd5: 'FileMd5',
      fileName: 'FileName',
      fileSizeBytes: 'FileSizeBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      fileMd5: 'string',
      fileName: 'string',
      fileSizeBytes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

