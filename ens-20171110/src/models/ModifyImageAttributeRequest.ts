// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyImageAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the image.
   * 
   * This parameter is required.
   * 
   * @example
   * m-5t4xwkfkbs0uxv0kymdb6uip7
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the image.
   * 
   * This parameter is required.
   * 
   * @example
   * Image Name
   */
  imageName?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      imageName: 'ImageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
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

