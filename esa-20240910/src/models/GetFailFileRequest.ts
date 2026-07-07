// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFailFileRequest extends $dara.Model {
  /**
   * @remarks
   * The site ID. You can obtain this by calling the [ListSites](~~ListSites~~) operation.
   * 
   * @example
   * 123456789****
   */
  siteId?: number;
  /**
   * @remarks
   * The file upload task ID. You can obtain this by calling the [UploadFile](https://help.aliyun.com/document_detail/2850466.html) operation to create an upload task, or by calling the [ListUploadTasks](https://help.aliyun.com/document_detail/2851127.html) operation to query existing tasks.
   * 
   * @example
   * 1593805857882113
   */
  uploadId?: number;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      uploadId: 'UploadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
      uploadId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

