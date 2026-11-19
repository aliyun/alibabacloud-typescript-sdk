// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUploadAttachedMediaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The OSS URL of the auxiliary media asset file (without authentication).
   * 
   * When you add an image watermark template, this URL can be used as the FileUrl request parameter of the [AddWatermark](~~AddWatermark~~) operation.
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
   * If a CDN domain name is configured, the CDN URL is returned. Otherwise, the OSS URL is returned.
   * 
   * > If the returned MediaURL cannot be accessed in a browser (403 error), it is because you have enabled the authentication feature for the VOD domain name. You can disable [URL authentication](https://help.aliyun.com/document_detail/86090.html) or [generate an authentication signature](https://help.aliyun.com/document_detail/57007.html) by yourself.
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
   * > The upload URL returned by the operation is Base64-encoded. When you call the SDK or API to upload the media asset, you must Base64-decode the URL before use. You only need to parse UploadAddress when you use the native OSS SDK or OSS API to upload the media asset.
   * 
   * @example
   * LWNuLXNoYW5naGFpLmFsaXl1b****
   */
  uploadAddress?: string;
  /**
   * @remarks
   * The upload credential.
   * 
   * > The upload credential returned by the operation is Base64-encoded. When you call the SDK or API to upload the media asset, you must Base64-decode the credential before use. You only need to parse UploadAuth when you use the native OSS SDK or OSS API to upload the media asset.
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

