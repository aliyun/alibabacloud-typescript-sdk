// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * >Notice: This parameter is required when querying an upload task..
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The file upload task ID, which is assigned when you call the [UploadFile](https://help.aliyun.com/document_detail/2850466.html) operation.
   * >Notice: This parameter is required and must be a valid task ID returned by the UploadFile operation. If this parameter is not provided or the specified ID does not exist, an InvalidParameters (400) error is returned..
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

