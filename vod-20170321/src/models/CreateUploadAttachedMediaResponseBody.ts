// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUploadAttachedMediaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The OSS URL of the auxiliary media asset file (without authentication).
   * 
   * When you add an image watermark template, this URL can be used as the request parameter `FileUrl` of the [AddWatermark](~~AddWatermark~~) operation.
   * 
   * @example
   * https://****.oss-cn-shanghai.aliyuncs.com/watermark/****.mov
   */
  fileURL?: string;
  /**
   * @remarks
   * The media asset ID.
   * 
   * @example
   * 97dc17a5abc3668489b84ce9****
   */
  mediaId?: string;
  /**
   * @remarks
   * The access URL of the media asset.
   * 
   * If a CDN domain name is configured, a CDN URL is returned. Otherwise, an OSS URL is returned.
   * 
   * > If the returned MediaURL is inaccessible in a browser (403), you have enabled URL authentication for the VOD domain name. You can disable [URL authentication](https://help.aliyun.com/document_detail/86090.html) or [generate an authentication signature](https://help.aliyun.com/document_detail/57007.html) yourself.
   * 
   * @example
   * http://example.aliyundoc.com/watermark/****.mov?auth_key=****
   */
  mediaURL?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 73254DE5-F260-4720-D06856B63C01****
   */
  requestId?: string;
  /**
   * @remarks
   * The upload URL.
   * > The upload URL returned by the operation is a Base64-encoded value. When you use the SDK or API to upload media assets, you must Base64-decode the value before use. Only uploads by using the OSS native SDK or OSS API require you to parse UploadAddress yourself.
   * 
   * @example
   * LWNuLXNoYW5naGFpLmFsaXl1b****
   */
  uploadAddress?: string;
  /**
   * @remarks
   * The upload credential.
   * 
   * > The upload credential returned by the operation is a Base64-encoded value. When you use the SDK or API to upload media assets, you must Base64-decode the value before use. Only uploads by using the OSS native SDK or OSS API require you to parse UploadAuth yourself.
   * 
   * @example
   * UzFnUjFxNkZ0NUIZTaklyNWJoQ00zdHF****
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

