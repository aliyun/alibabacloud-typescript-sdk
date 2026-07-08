// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComfyUserDataUploadUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The content type of the file.
   * 
   * This parameter is required.
   * 
   * @example
   * application/jpeg
   */
  contentType?: string;
  /**
   * @remarks
   * The MD5 hash of the file to be uploaded. This value must be the file\\"s actual MD5 hash. The file size is also verified during the upload.
   * 
   * This parameter is required.
   * 
   * @example
   * 54d6911ba6d59dbe68990835a409f18c
   */
  fileMd5?: string;
  /**
   * @remarks
   * The name of the file to upload. The filename can be a single file, such as \\`1.jpg\\`, or include a path, such as \\`directory1/1.jpg\\`.
   * 
   * This parameter is required.
   * 
   * @example
   * myfile
   */
  fileName?: string;
  /**
   * @remarks
   * The actual size of the file in bytes. This value must be the exact size of the file. The file size is verified when you use the upload URL.
   * 
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

