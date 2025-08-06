// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageInfoResponseBodyImageInfoMezzanine extends $dara.Model {
  /**
   * @remarks
   * The size of the image. Unit: bytes.
   * 
   * @example
   * 8932
   */
  fileSize?: string;
  /**
   * @remarks
   * The OSS URL of the image file.
   * 
   * @example
   * https://outin-bfefbb*****163e1c7426.oss-cn-XXXXXXXX.aliyuncs.com/image/default/5E84CD536*****D4DAD.png?Expires=1590982353&OSSAccessKeyId=*****&Signature=ALPET74o*****c%3D
   */
  fileURL?: string;
  /**
   * @remarks
   * The height of the image. Unit: pixels.
   * 
   * @example
   * 200
   */
  height?: number;
  /**
   * @remarks
   * The URL of the source file.
   * 
   * @example
   * ****.gif
   */
  originalFileName?: string;
  /**
   * @remarks
   * The width of the image. Unit: pixels.
   * 
   * @example
   * 200
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'FileSize',
      fileURL: 'FileURL',
      height: 'Height',
      originalFileName: 'OriginalFileName',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'string',
      fileURL: 'string',
      height: 'number',
      originalFileName: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageInfoResponseBodyImageInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the category.
   * 
   * @example
   * 254766071
   */
  cateId?: number;
  /**
   * @remarks
   * The name of the category.
   * 
   * @example
   * test name
   */
  cateName?: string;
  /**
   * @remarks
   * The time when the image was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-11-21T02:37:23Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the image.
   * 
   * @example
   * test description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * bbc65bba53f9*****ed90de118a7849
   */
  imageId?: string;
  /**
   * @remarks
   * The type of the image. Valid values:
   * 
   * *   **CoverSnapshot**: thumbnail snapshot.
   * *   **NormalSnapshot**: normal snapshot.
   * *   **SpriteSnapshot**: sprite snapshot.
   * *   **SpriteOriginSnapshot**: sprite source snapshot.
   * *   **All**: images of all the preceding types. Multiple types other than All can return for this parameter. Multiple types are separated by commas (,).
   * 
   * @example
   * NormalSnapshot
   */
  imageType?: string;
  /**
   * @remarks
   * The source information about the image.
   */
  mezzanine?: GetImageInfoResponseBodyImageInfoMezzanine;
  /**
   * @remarks
   * The status of the image. Valid values:
   * 
   * *   **Uploading**: The image is being uploaded. This is the initial status.
   * *   **Normal**: The image is uploaded.
   * *   **UploadFail**: The image fails to be uploaded.
   * 
   * @example
   * Uploading
   */
  status?: string;
  /**
   * @remarks
   * The bucket in which the image is stored.
   * 
   * @example
   * outin-****..oss-cn-shanghai.aliyuncs.com
   */
  storageLocation?: string;
  /**
   * @remarks
   * The tags of the image. Multiple tags are separated by commas (,).
   * 
   * @example
   * tag1,tag2,tag3
   */
  tags?: string;
  /**
   * @remarks
   * The title of the image.
   * 
   * @example
   * this is a sample
   */
  title?: string;
  /**
   * @remarks
   * The image URL. If a domain name for CDN is specified, a CDN URL is returned. Otherwise, an OSS URL is returned.
   * 
   * @example
   * http://example.aliyundoc.com/image/default/****.gif?auth_key=****
   */
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cateId: 'CateId',
      cateName: 'CateName',
      creationTime: 'CreationTime',
      description: 'Description',
      imageId: 'ImageId',
      imageType: 'ImageType',
      mezzanine: 'Mezzanine',
      status: 'Status',
      storageLocation: 'StorageLocation',
      tags: 'Tags',
      title: 'Title',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cateId: 'number',
      cateName: 'string',
      creationTime: 'string',
      description: 'string',
      imageId: 'string',
      imageType: 'string',
      mezzanine: GetImageInfoResponseBodyImageInfoMezzanine,
      status: 'string',
      storageLocation: 'string',
      tags: 'string',
      title: 'string',
      URL: 'string',
    };
  }

  validate() {
    if(this.mezzanine && typeof (this.mezzanine as any).validate === 'function') {
      (this.mezzanine as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the image.
   */
  imageInfo?: GetImageInfoResponseBodyImageInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AB99D4DF-FAFA-49DC-9C548C1E261E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageInfo: 'ImageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageInfo: GetImageInfoResponseBodyImageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.imageInfo && typeof (this.imageInfo as any).validate === 'function') {
      (this.imageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

