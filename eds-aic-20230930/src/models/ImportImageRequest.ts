// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportImageRequest extends $dara.Model {
  /**
   * @example
   * android 12 custom image
   */
  imageDescription?: string;
  /**
   * @example
   * https://xxx.oss-xxx/xxxx.tgz
   */
  imageFileURL?: string;
  /**
   * @example
   * import custom image
   */
  imageName?: string;
  static names(): { [key: string]: string } {
    return {
      imageDescription: 'ImageDescription',
      imageFileURL: 'ImageFileURL',
      imageName: 'ImageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

