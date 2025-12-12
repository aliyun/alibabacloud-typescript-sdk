// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ShareAICImageRequest extends $dara.Model {
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
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      users: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

