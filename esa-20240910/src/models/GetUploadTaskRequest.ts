// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The ID of the file upload task. This field is assigned after you call the [UploadFile](https://help.aliyun.com/document_detail/2850466.html) operation.
   * 
   * @example
   * 159253299357****
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

