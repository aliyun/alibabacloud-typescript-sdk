// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTagNameRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the tag group.
   * 
   * This parameter is required.
   * 
   * @example
   * Tag group 1
   */
  key?: string;
  /**
   * @remarks
   * The new name of the tag group.
   * 
   * This parameter is required.
   * 
   * @example
   * Tag group 2
   */
  newKey?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      newKey: 'NewKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      newKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

