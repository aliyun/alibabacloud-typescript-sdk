// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUploadMediaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The OSS URL of the file, without authentication parameters.
   * 
   * @example
   * http://outin-***.oss-cn-north-2-gov-1.aliyuncs.com/sv/40360f05-181f63c3110-0004-cd8e-27f-de3c9.mp4
   */
  fileURL?: string;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  mediaId?: string;
  /**
   * @remarks
   * The URL of the media asset.
   * 
   * > This will be a CDN URL if a CDN domain is configured, or an OSS URL otherwise. If you receive a 403 error when accessing this URL in a browser, it is likely because URL authentication is enabled for the VOD domain. To resolve this, either disable URL authentication or generate a signed URL for access.
   * 
   * @example
   * https://xxq-live-playback.oss-cn-shanghai.aliyuncs.com/capture/5d96d2b4-111b-4e5d-a0e5-20f44405bb55.mp4
   */
  mediaURL?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4E84BE44-58A7-****-****-FBEBEA16EF94
   */
  requestId?: string;
  /**
   * @remarks
   * The upload address.
   * 
   * > The returned upload address is Base64-encoded and must be decoded before use. You only need to manually decode this address if you are using a native OSS SDK or an OSS API to perform the upload.
   * 
   * @example
   * eyJTZWN1cml0a2VuIjoiQ0FJU3p3TjF****
   */
  uploadAddress?: string;
  /**
   * @remarks
   * The upload credential.
   * 
   * > The returned upload credential is Base64-encoded and must be decoded before use. You only need to manually decode this credential if you are using a native OSS SDK or an OSS API to perform the upload.
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

