// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LeavePictureList extends $dara.Model {
  /**
   * @remarks
   * Description>Notice: If the after-sales order rendering API returns that a message description is required, this field is mandatory.</notice>
   * 
   * @example
   * 外观破损了。
   */
  desc?: string;
  /**
   * @remarks
   * Image of the after-sales Credential>Notice: If the after-sales order rendering API returns that an after-sales image is required, this field is mandatory.</notice>
   */
  picture?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      picture: 'picture',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      picture: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

