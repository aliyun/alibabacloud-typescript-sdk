// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelUrlUploadJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the upload jobs. You can obtain the job IDs from PlayInfo in the response to the [GetPlayInfo](https://help.aliyun.com/document_detail/56124.html) operation.
   * 
   * *   You can specify a maximum of 10 IDs.
   * *   Separate multiple IDs with commas (,).
   * 
   * >  You must specify either JobIds or UploadUrls. If you specify both the JobIds and UploadUrls parameters, only the value of the JobIds parameter takes effect.
   * 
   * @example
   * 341c92e6c18dc435ee31253685****,0193d395194a83ad6ee2ef27a5b5****
   */
  jobIds?: string;
  /**
   * @remarks
   * The upload URLs of source video files. Separate multiple URLs with commas (,). You can specify a maximum of 10 URLs.
   * 
   * > *   You must encode the URLs before you use the URLs.
   * > *   You must specify either JobIds or UploadUrls. If you specify both the JobIds and UploadUrls parameters, only the value of the JobIds parameter takes effect.
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

