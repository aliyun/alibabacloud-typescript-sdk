// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomImageNameRequest extends $dara.Model {
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * imgc-075cllfeuazh0****
   */
  imageId?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * imagename
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

