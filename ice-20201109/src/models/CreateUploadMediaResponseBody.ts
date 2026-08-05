// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUploadMediaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The OSS URL of the file (without authentication).
   * 
   * @example
   * http://outin-***.oss-cn-north-2-gov-1.aliyuncs.com/sv/40360f05-181f63c3110-0004-cd8e-27f-de3c9.mp4
   */
  fileURL?: string;
  /**
   * @remarks
   * The media asset ID.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  mediaId?: string;
  /**
   * @remarks
   * The media asset URL.
   * > If a CDN domain name is configured, a CDN URL is returned. Otherwise, an OSS URL is returned. If the returned MediaURL is inaccessible (403) in a browser, URL signing is enabled for the VOD domain name. Disable URL signing or generate a signing signature.
   * 
   * @example
   * https://xxq-live-playback.oss-cn-shanghai.aliyuncs.com/capture/5d96d2b4-111b-4e5d-a0e5-20f44405bb55.mp4
   */
  mediaURL?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4E84BE44-58A7-****-****-FBEBEA16EF94
   */
  requestId?: string;
  /**
   * @remarks
   * The upload address.
   * > The upload address returned by the operation is a Base64-encoded value. When you call an SDK or API to upload media assets, decode the value by using Base64 before use. Only uploads through the native OSS SDK or OSS API require you to parse UploadAddress.
   * 
   * @example
   * eyJTZWN1cml0a2VuIjoiQ0FJU3p3TjF****
   */
  uploadAddress?: string;
  /**
   * @remarks
   * The upload credential.
   * 
   * > The upload credential returned by the operation is a Base64-encoded value. When you call an SDK or API to upload media assets, decode the value by using Base64 before use. Only uploads through the native OSS SDK or OSS API require you to parse UploadAuth.
   * 
   * @example
   * eyJFbmRwb2ludCI6Imm****
   */
  uploadAuth?: string;
  static names(): { [key: string]: string } {
    return {
      fileURL: 'FileURL',
      mediaId: 'MediaId',
      mediaURL: 'MediaURL',
      requestId: 'RequestId',
      uploadAddress: 'UploadAddress',
      uploadAuth: 'UploadAuth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileURL: 'string',
      mediaId: 'string',
      mediaURL: 'string',
      requestId: 'string',
      uploadAddress: 'string',
      uploadAuth: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

