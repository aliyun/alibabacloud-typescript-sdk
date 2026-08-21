// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUploadImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The OSS URL of the image file (without authentication).
   * 
   * When you add an image watermark template, this URL can be used as the `FileUrl` request parameter of the [AddWatermark](~~AddWatermark~~) operation.
   * 
   * @example
   * http://example.aliyundoc.com/cover/2017-34DB-4F4C-9373-003AA060****.png
   */
  fileURL?: string;
  /**
   * @remarks
   * The image ID. This ID can be used as a request parameter for operations such as [GetImageInfo](~~GetImageInfo~~), [GetImageInfos](~~GetImageInfos~~), [UpdateImageInfos](~~UpdateImageInfos~~), and [DeleteImage](~~DeleteImage~~).
   * 
   * @example
   * 93ab850b4f6f46e91d24d81d4****
   */
  imageId?: string;
  /**
   * @remarks
   * The access URL of the image.
   * > If the returned ImageURL is inaccessible in a browser (403 error), URL authentication is enabled for your VOD domain name. Disable [URL authentication](https://help.aliyun.com/document_detail/86090.html) or [generate a signed URL](https://help.aliyun.com/document_detail/57007.html).
   * 
   * @example
   * http://example.aliyundoc.com/cover/2017-34DB-4F4C-9373-003AA060****.png
   */
  imageURL?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25818875-5F78-AEF6-D7393642****
   */
  requestId?: string;
  /**
   * @remarks
   * The upload URL.
   * 
   * > The upload URL returned by this operation is a Base64-encoded value. When you use an SDK or API to upload media assets, decode the value in Base64 before use. Only uploads by using the OSS native SDK or OSS API require you to parse UploadAddress.
   * 
   * @example
   * eyJTZWN1cmuIjoiQ0FJU3p3TjF****
   */
  uploadAddress?: string;
  /**
   * @remarks
   * The upload credential.
   * > The upload credential returned by this operation is a Base64-encoded value. When you use an SDK or API to upload media assets, decode the value in Base64 before use. Only uploads by using the OSS native SDK or OSS API require you to parse UploadAuth.
   * 
   * @example
   * eyJFbmmRCI6Im****
   */
  uploadAuth?: string;
  static names(): { [key: string]: string } {
    return {
      fileURL: 'FileURL',
      imageId: 'ImageId',
      imageURL: 'ImageURL',
      requestId: 'RequestId',
      uploadAddress: 'UploadAddress',
      uploadAuth: 'UploadAuth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileURL: 'string',
      imageId: 'string',
      imageURL: 'string',
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

