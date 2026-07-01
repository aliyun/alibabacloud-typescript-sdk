// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddRcsSignMenuRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  menuContent?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      menuContent: 'MenuContent',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      menuContent: 'string',
      signName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

