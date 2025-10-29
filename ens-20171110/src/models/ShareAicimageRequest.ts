// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ShareAICImageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mykey
   */
  imageId?: string;
  /**
   * @remarks
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

