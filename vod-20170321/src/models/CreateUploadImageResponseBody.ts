// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUploadImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The OSS URL of the file. The URL does not contain the information used for URL signing. You can specify FileUrl when you call the [AddWatermark](https://help.aliyun.com/document_detail/98617.html) operation.
   * 
   * @example
   * http://example.aliyundoc.com/cover/2017-34DB-4F4C-9373-003AA060****.png
   */
  fileURL?: string;
  /**
   * @remarks
   * The ID of the image file.
   * 
   * @example
   * 93ab850b4f6f46e91d24d81d4****
   */
  imageId?: string;
  /**
   * @remarks
   * The URL of the image.
   * 
   * > If the returned URL is inaccessible from a browser and the HTTP 403 status code is returned, the URL signing feature in ApsaraVideo VOD is enabled. To resolve this issue, you can disable the [URL signing](https://help.aliyun.com/document_detail/86090.html) feature or [generate a signed URL](https://help.aliyun.com/document_detail/57007.html).
   * 
   * @example
   * http://example.aliyundoc.com/cover/2017-34DB-4F4C-9373-003AA060****.png
   */
  imageURL?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-AEF6-D7393642****
   */
  requestId?: string;
  /**
   * @remarks
   * The upload URL.
   * 
   * > The returned upload URL is a Base64-encoded URL. You must decode the Base64-encoded URL before you use an SDK or call an API operation to upload auxiliary media assets. You need to parse UploadAddress only if you use the OSS SDK or call an OSS API operation to upload auxiliary media assets.
   * 
   * @example
   * eyJTZWN1cmuIjoiQ0FJU3p3TjF****
   */
  uploadAddress?: string;
  /**
   * @remarks
   * The upload credential.
   * 
   * > The returned upload credential is a Base64-encoded value. You must decode the Base64-encoded credential before you use an SDK or call an API operation to upload auxiliary media assets. You need to parse UploadAuth only if you use the OSS SDK or call an OSS API operation to upload auxiliary media assets.
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

