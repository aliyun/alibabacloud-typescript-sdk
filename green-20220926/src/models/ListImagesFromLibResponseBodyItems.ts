// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImagesFromLibResponseBodyItems extends $dara.Model {
  /**
   * @example
   * 2022-11-30 16:30:29
   */
  gmtCreate?: string;
  /**
   * @example
   * 112
   */
  imageId?: string;
  /**
   * @example
   * https://oss-cip-shanghai.oss-cn-shanghai.aliyuncs.com/image/upload/IMG_2123.jpg
   */
  imageUrl?: string;
  /**
   * @example
   * https://oss-cip-shanghai.oss-cn-shanghai.aliyuncs.com/image/upload/IMG_2123.jpg
   */
  thumbnailUrl?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      imageId: 'ImageId',
      imageUrl: 'ImageUrl',
      thumbnailUrl: 'ThumbnailUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      imageId: 'string',
      imageUrl: 'string',
      thumbnailUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

