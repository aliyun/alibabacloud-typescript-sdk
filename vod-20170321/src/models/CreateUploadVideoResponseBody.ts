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
   * > The upload URL returned by this operation is a Base64-encoded value. When you use an SDK or API to upload media assets, you must Base64-decode the value before use. Only uploads by using the native OSS SDK or OSS API require you to parse UploadAddress.
   * 
   * @example
   * eyJTZWN1cml0a2VuIjoiQ0FJU3p3TjF****
   */
  uploadAddress?: string;
  /**
   * @remarks
   * The upload credential.
   * 
   * > The upload credential returned by this operation is a Base64-encoded value. When you use an SDK or API to upload media assets, you must Base64-decode the value before use. Only uploads by using the native OSS SDK or OSS API require you to parse UploadAuth.
   * 
   * @example
   * eyJFbmRwb2ludCI6Imm****
   */
  uploadAuth?: string;
  /**
   * @remarks
   * The audio or video ID. This ID can be used as a request parameter for media asset management, media processing, and content moderation operations.
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

