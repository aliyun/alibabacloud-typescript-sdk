// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ShareAICImageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The image name.
   * 
   * This parameter is required.
   * 
   * @example
   * mykey
   */
  imageId?: string;
  /**
   * @remarks
   * The user groups.
   * 
   * This parameter is required.
   */
  usersShrink?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      usersShrink: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      usersShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

