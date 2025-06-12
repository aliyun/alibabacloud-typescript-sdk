// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageModerationResponseBodyDataExtCustomImage extends $dara.Model {
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * 123456
   */
  imageId?: string;
  /**
   * @remarks
   * The image library ID.
   * 
   * @example
   * lib_123456
   */
  libId?: string;
  /**
   * @remarks
   * The image library name.
   * 
   * @example
   * xx
   */
  libName?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      libId: 'LibId',
      libName: 'LibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      libId: 'string',
      libName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

