// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshUploadVideoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25818875-5F78-4A43-7DF6-D7393642****
   */
  requestId?: string;
  /**
   * @remarks
   * The upload URL.
   * >The upload URL returned by this operation is a Base64-encoded value. When you use an SDK or API to upload media assets, you must decode the value in Base64 before use. You need to parse UploadAddress only if you use the China (China) native OSS SDK or OSS API for upload.
   * 
   * @example
   * eyJTZWN1cml0eVRiQ0FJU3p3TjFxNkZ0NUIyeW****
   */
  uploadAddress?: string;
  /**
   * @remarks
   * The upload credential.
   * >The upload credential returned by this operation is a Base64-encoded value. When you use an SDK or API to upload media assets, you must decode the value in Base64 before use. You need to parse UploadAuth only if you use the native OSS SDK or OSS API for upload.
   * 
   * @example
   * FJU3p3TZ0NUIyeW****
   */
  uploadAuth?: string;
  /**
   * @remarks
   * The audio or video ID.
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

