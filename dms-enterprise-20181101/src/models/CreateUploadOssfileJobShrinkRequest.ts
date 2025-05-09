// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUploadOSSFileJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the file.
   * 
   * > The file name must end with .txt or .sql. For example, the file name can be text.txt.
   * 
   * This parameter is required.
   * 
   * @example
   * test.sql
   */
  fileName?: string;
  /**
   * @remarks
   * The purpose of the file upload task. Valid values:
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
   * > To view the ID of the tenant, move the pointer over the profile picture in the upper-right corner of the Data Management (DMS) console. For more information, see the "View information about the current tenant" section of the [Manage DMS tenants](https://help.aliyun.com/document_detail/181330.html) topic.
   * 
   * @example
   * -1
   */
  tid?: number;
  /**
   * @remarks
   * The information about the OSS file to be uploaded.
   * 
   * This parameter is required.
   */
  uploadTargetShrink?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileSource: 'FileSource',
      tid: 'Tid',
      uploadTargetShrink: 'UploadTarget',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileSource: 'string',
      tid: 'number',
      uploadTargetShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

