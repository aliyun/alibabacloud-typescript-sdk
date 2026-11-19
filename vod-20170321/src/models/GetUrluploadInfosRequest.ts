// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetURLUploadInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The list of upload task IDs (JobIds). It consists of one or more JobIds. A JobId is the value of the JobId response parameter returned when you call the [UploadMediaByURL](https://help.aliyun.com/document_detail/86311.html) operation.
   * - A maximum of 10 IDs are supported.
   * - Separate multiple IDs with commas (,).
   * 
   * > You must specify either JobIds or UploadURLs. If both are specified, only JobIds is processed.
   * 
   * @example
   * 86c1925fba0****,7afb201e7fa****,2cc4997378****
   */
  jobIds?: string;
  /**
   * @remarks
   * The list of URLs of the video source files to upload. Separate multiple URLs with commas (,). A maximum of 10 URLs are supported.
   * > - URL-encode the URLs before you use them.
   * > - If the same video URL is uploaded multiple times, specify a single URL for the query.
   * > - You must specify either JobIds or UploadURLs. If both are specified, only JobIds is processed.
   * 
   * @example
   * http://****.mp4
   */
  uploadURLs?: string;
  static names(): { [key: string]: string } {
    return {
      jobIds: 'JobIds',
      uploadURLs: 'UploadURLs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobIds: 'string',
      uploadURLs: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

