// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshUploadVideoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4A43-7DF6-D7393642****
   */
  requestId?: string;
  /**
   * @remarks
   * The upload URL.
   * 
   * >  The returned upload URL is a Base64-encoded URL. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAddress only if you use the OSS SDK or call an OSS API operation to upload media files.
   * 
   * @example
   * eyJTZWN1cml0eVRiQ0FJU3p3TjFxNkZ0NUIyeW****
   */
  uploadAddress?: string;
  /**
   * @remarks
   * The upload credential.
   * 
   * >  The returned upload credential is a Base64-encoded value. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAuth only if you use the OSS SDK or call an OSS API operation to upload media files.
   * 
   * @example
   * FJU3p3TZ0NUIyeW****
   */
  uploadAuth?: string;
  /**
   * @remarks
   * The ID of the audio or video file.
   * 
   * @example
   * c6a23a870c8c4ffcd40cbd381333****
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      uploadAddress: 'UploadAddress',
      uploadAuth: 'UploadAuth',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      uploadAddress: 'string',
      uploadAuth: 'string',
      videoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

