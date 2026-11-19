// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUploadVideoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25818875-5F78-4AF6-04D5-D7393642****
   */
  requestId?: string;
  /**
   * @remarks
   * The upload URL.
   * 
   * > The upload URL returned by the operation is Base64-encoded. When you call an SDK or API operation to upload the media asset, you must decode the URL before use. You only need to parse UploadAddress when you use the native OSS SDK or OSS API for upload.
   * 
   * @example
   * eyJTZWN1cml0a2VuIjoiQ0FJU3p3TjF****
   */
  uploadAddress?: string;
  /**
   * @remarks
   * The upload credential.
   * 
   * > The upload credential returned by the operation is Base64-encoded. When you call an SDK or API operation to upload the media asset, you must decode the credential before use. You only need to parse UploadAuth when you use the native OSS SDK or OSS API for upload.
   * 
   * @example
   * eyJFbmRwb2ludCI6Imm****
   */
  uploadAuth?: string;
  /**
   * @remarks
   * The audio or video ID. You can use this ID as a request parameter for media asset management, media processing, and media review operations.
   * 
   * @example
   * 93ab850b4f6f54b6e91d24d81d44****
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

