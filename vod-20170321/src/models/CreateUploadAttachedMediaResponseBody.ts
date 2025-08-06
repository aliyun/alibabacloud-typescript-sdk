// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUploadAttachedMediaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The URL of the auxiliary media asset file. The URL is an Object Storage Service (OSS) URL and does not contain the information used for URL signing.
   * 
   * You can use specify this value for the `FileUrl` parameter when you call the [AddWatermark](~~AddWatermark~~) operation to create a watermark template.
   * 
   * @example
   * https://****.oss-cn-shanghai.aliyuncs.com/watermark/****.mov
   */
  fileURL?: string;
  /**
   * @remarks
   * The ID of the auxiliary media asset.
   * 
   * @example
   * 97dc17a5abc3668489b84ce9****
   */
  mediaId?: string;
  /**
   * @remarks
   * The URL of the auxiliary media asset.
   * 
   * If a domain name for Alibaba Cloud CDN is specified, a CDN URL is returned. Otherwise, an OSS URL is returned.
   * 
   * >  If you enable the URL signing feature of ApsaraVideo VOD, you may be unable to access the returned URL of the auxiliary media asset by using a browser and the HTTP status code 403 may be returned. To resolve this issue, you can disable the [URL signing](https://help.aliyun.com/document_detail/86090.html) feature or [generate a signed URL](https://help.aliyun.com/document_detail/57007.html).
   * 
   * @example
   * http://example.aliyundoc.com/watermark/****.mov?auth_key=****
   */
  mediaURL?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 73254DE5-F260-4720-D06856B63C01****
   */
  requestId?: string;
  /**
   * @remarks
   * The upload URL.
   * 
   * >  The upload URL returned by this operation is Base64-encoded. Before you can use an SDK or an API operation to upload a media asset based on the upload URL, you must decode the upload URL by using the Base64 algorithm. You must parse the upload URL only if you use native OSS SDKs or OSS API for uploads.
   * 
   * @example
   * LWNuLXNoYW5naGFpLmFsaXl1b****
   */
  uploadAddress?: string;
  /**
   * @remarks
   * The upload credential.
   * 
   * >  The upload credential returned by this operation is Base64-encoded. Before you can use an SDK or an API operation to upload a media asset based on the upload credential, you must decode the upload credential by using the Base64 algorithm. You must parse the upload credential only if you use native OSS SDKs or OSS API for uploads.
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

