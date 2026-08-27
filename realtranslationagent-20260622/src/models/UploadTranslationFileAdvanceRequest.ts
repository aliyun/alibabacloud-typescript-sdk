// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class UploadTranslationFileAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * The API key that identifies the identity of the member accounts. You can obtain it from the RuiYiBao console.
   * 
   * @example
   * sk-2***s
   */
  APIKey?: string;
  /**
   * @remarks
   * The file. The SDK supports direct upload and temporary authorized upload.
   * - **Direct upload**: Use UploadTranslationFileAdvance in the SDK for direct upload. The Java field type is InputStream, and the Python type is BinaryIO.
   * - **Temporary authorized upload**: Use AuthorizeFileUpload and UploadTranslationFile in the SDK for temporary authorized upload.
   *   - Step 1: Call AuthorizeFileUpload to obtain a temporary OSS upload credential, then upload the file to obtain the complete file URL.
   *   - Step 2: Call UploadTranslationFile and pass the URL to the File field.
   * 
   * > Notes on temporary authorized upload
   * > - You need to additionally import OpenPlatform(2019-12-19) - AuthorizeFileUpload to obtain a temporary OssPolicy. For information about how to upload files, refer to [Upload objects directly from clients to OSS](https://www.alibabacloud.com/help/en/oss/user-guide/uploading-objects-to-oss-directly-from-clients/).
   * 
   * > File size limit
   * > - The maximum file size is 500 MB.
   * 
   * This parameter is required.
   * 
   * @example
   * http://gtm-pop-file-upload-zhangjiakou.oss-cn-zhangjiakou.aliyuncs.com/467a_208353582454045230_c8a22285d0b14873aefdcb7eaa7f9046
   */
  fileObject?: Readable;
  /**
   * @remarks
   * The name of the uploaded file.
   * 
   * <notice>Make sure the correct file name (including the extension) is provided. Otherwise, file parsing will fail.</notice>
   * 
   * This parameter is required.
   * 
   * @example
   * testfile_202511.txt
   */
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      APIKey: 'APIKey',
      fileObject: 'File',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APIKey: 'string',
      fileObject: 'Readable',
      fileName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

