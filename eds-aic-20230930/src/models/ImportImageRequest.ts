// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportImageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the base image.
   * 
   * @example
   * imgc-0aae4rgn0bk8f****
   */
  baseImageId?: string;
  /**
   * @remarks
   * The description of the image.
   * 
   * @example
   * android 12 custom image
   */
  imageDescription?: string;
  /**
   * @remarks
   * The URL of the image. The URL must be an Alibaba Cloud Object Storage Service (OSS) address.
   * 
   * @example
   * https://xxx.oss-xxx/xxxx.tgz
   */
  imageFileURL?: string;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * import custom image
   */
  imageName?: string;
  static names(): { [key: string]: string } {
    return {
      baseImageId: 'BaseImageId',
      imageDescription: 'ImageDescription',
      imageFileURL: 'ImageFileURL',
      imageName: 'ImageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseImageId: 'string',
      imageDescription: 'string',
      imageFileURL: 'string',
      imageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

