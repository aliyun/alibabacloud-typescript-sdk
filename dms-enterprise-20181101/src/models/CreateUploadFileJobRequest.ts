// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUploadFileJobRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the attachment file.
   * 
   * >  The file name must end with .txt or .sql. For example, the file name can be test.txt or test.sql.
   * 
   * This parameter is required.
   * 
   * @example
   * test.txt
   */
  fileName?: string;
  /**
   * @remarks
   * The purpose of the attachment file. Valid values:
   * 
   * *   **datacorrect**: The file is uploaded to change data.
   * *   **order_info_attachment**: The file is uploaded as an attachment in a ticket.
   * *   **big-file**: The file is uploaded to import multiple data records at a time.
   * *   **sqlreview**: The file is uploaded for SQL review.
   * 
   * This parameter is required.
   * 
   * @example
   * datacorrect
   */
  fileSource?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * >  You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) operation to query the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  /**
   * @remarks
   * The URL of the attachment file. The URL must be an HTTP URL or an HTTPS URL.
   * 
   * >  You can upload the attachment file to an Object Storage Service (OSS) bucket and obtain the URL of the file in the OSS console. For more information, see [Share objects](https://help.aliyun.com/document_detail/195674.html).
   * 
   * This parameter is required.
   * 
   * @example
   * https://XXX.oss-cn-hangzhou.aliyuncs.com/test.txt
   */
  uploadURL?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileSource: 'FileSource',
      tid: 'Tid',
      uploadURL: 'UploadURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileSource: 'string',
      tid: 'number',
      uploadURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

