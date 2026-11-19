// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUploadImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The OSS URL of the image file. The URL does not contain authentication information.
   * 
   * When you add an image watermark template, you can use this URL as the value of the `FileUrl` request parameter for the [AddWatermark](~~AddWatermark~~) operation.
   * 
   * @example
   * http://example.aliyundoc.com/cover/2017-34DB-4F4C-9373-003AA060****.png
   */
  fileURL?: string;
  /**
   * @remarks
   * The image ID. You can use it as a request parameter for operations such as [GetImageInfo](~~GetImageInfo~~), [GetImageInfos](~~GetImageInfos~~), [UpdateImageInfos](~~UpdateImageInfos~~), and [DeleteImage](~~DeleteImage~~).
   * 
   * @example
   * 93ab850b4f6f46e91d24d81d4****
   */
  imageId?: string;
  /**
   * @remarks
   * The access URL of the image.
   * > If the returned ImageURL cannot be accessed in a browser and a 403 error is returned, it is because you have enabled URL authentication for the ApsaraVideo VOD domain name. You can disable [URL authentication](https://help.aliyun.com/document_detail/86090.html) or [generate an authentication signature](https://help.aliyun.com/document_detail/57007.html) by yourself.
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
   * > The upload URL returned by the operation is Base64-encoded. When you call an SDK or API operation to upload media assets, you must Base64-decode the URL before use. You need to parse UploadAddress only when you use the native OSS SDK or OSS API to upload media assets.
   * 
   * @example
   * eyJTZWN1cmuIjoiQ0FJU3p3TjF****
   */
  uploadAddress?: string;
  /**
   * @remarks
   * The upload credential.
   * > The upload credential returned by the operation is Base64-encoded. When you call an SDK or API operation to upload media assets, you must Base64-decode the credential before use. You need to parse UploadAuth only when you use the native OSS SDK or OSS API to upload media assets.
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

