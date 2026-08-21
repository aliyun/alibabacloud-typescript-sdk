// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelUrlUploadJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of task IDs. You can obtain the task ID (JobId) from the PlayInfo struct returned by the [GetPlayInfo](https://help.aliyun.com/document_detail/56124.html) operation.
   * - A maximum of 10 IDs are supported.
   * - Separate multiple IDs with commas (,).
   * 
   * > You must specify either JobIds or UploadUrls. If both are specified, only JobIds is processed.
   * 
   * @example
   * 341c92e6c18dc435ee31253685****,0193d395194a83ad6ee2ef27a5b5****
   */
  jobIds?: string;
  /**
   * @remarks
   * The list of source video upload URLs. Separate multiple URLs with commas (,). A maximum of 10 URLs are supported.
   * 
   * > - URL-encode the URLs before use.
   * > - You must specify either JobIds or UploadUrls. If both are specified, only JobIds is processed.
   */
  uploadUrls?: string;
  static names(): { [key: string]: string } {
    return {
      jobIds: 'JobIds',
      uploadUrls: 'UploadUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobIds: 'string',
      uploadUrls: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

