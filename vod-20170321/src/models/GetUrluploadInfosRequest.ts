// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetURLUploadInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The one or more IDs of upload jobs. You can obtain the job IDs in the response parameter JobId of the [UploadMediaByURL](https://help.aliyun.com/document_detail/86311.html) operation.
   * 
   * - You can specify a maximum of 10 IDs.
   * - Separate multiple IDs with commas (,).
   * 
   * > You must set one of the JobIds and the UploadURLs parameters. If you set both the JobIds and UploadURLs parameters, only the value of the JobIds parameter takes effect.
   * 
   * @example
   * 86c1925fba0****,7afb201e7fa****,2cc4997378****
   */
  jobIds?: string;
  /**
   * @remarks
   * The one or more upload URLs of the source files. Separate multiple URLs with commas (,). You can specify a maximum of 10 URLs.
   * 
   * > * You must encode the URLs before you use the URLs.
   * > * If a media file is uploaded multiple times, pass the URL of the media file to this parameter only once.
   * > * You must set one of the JobIds and the UploadURLs parameters. If you set both the JobIds and UploadURLs parameters, only the value of the JobIds parameter takes effect.
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

