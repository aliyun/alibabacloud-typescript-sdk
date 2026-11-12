// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImagesResponseBodyImages extends $dara.Model {
  /**
   * @remarks
   * The description of the image.
   * 
   * @example
   * WordPress is a popular and powerful platform that allows you to build blogs and content management websites and implement custom features by using third-party templates and plug-ins. This WordPress image is built based on CentOS 7.9, PHP 7.4, MySQL 5.7, and Apache 2.4.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * 794c230fd3e64ea19f83f4d7a0ad****
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * WordPress-4.8.1
   */
  imageName?: string;
  /**
   * @remarks
   * The type of the image. Valid values:
   * 
   * - system
   * 
   * - app
   * 
   * - custom
   * 
   * @example
   * app
   */
  imageType?: string;
  /**
   * @remarks
   * The operating system type of the image. Valid values:
   * 
   * - Linux
   * 
   * - Windows
   * 
   * @example
   * Linux
   */
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageType: 'ImageType',
      platform: 'Platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      imageId: 'string',
      imageName: 'string',
      imageType: 'string',
      platform: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the queried images.
   */
  images?: ListImagesResponseBodyImages[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': ListImagesResponseBodyImages },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

