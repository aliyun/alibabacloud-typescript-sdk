// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUrlUploadInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the upload jobs. You can specify one or more job IDs. You can obtain the job IDs from the response parameter JobId of the [UploadMediaByURL](https://help.aliyun.com/document_detail/86311.html) operation.
   * 
   * *   You can specify a maximum of 10 job IDs.
   * *   Separate the job IDs with commas (,).
   * 
   * >  You must specify either JobIds or UploadURLs. If you specify both parameters, only the value of JobIds takes effect.
   * 
   * @example
   * df2ac80b481346daa1db6a7c40edc7f8
   */
  jobIds?: string;
  /**
   * @remarks
   * The upload URLs of the source files. You can specify a maximum of 10 URLs. Separate the URLs with commas (,).
   * 
   * > 
   * 
   * *   The URLs must be encoded.
   * 
   * *   If a media file is uploaded multiple times, we recommend that you specify the URL of the media file only once in this parameter.
   * 
   * *   You must specify either JobIds or UploadURLs. If you specify both parameters, only the value of JobIds takes effect.
   * 
   * @example
   * https://media.w3.org/2010/05/sintel/trailer.mp4
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

