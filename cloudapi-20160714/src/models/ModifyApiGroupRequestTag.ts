// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApiGroupRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * This parameter is required.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * This parameter is required.
   * 
   * @example
   * uat
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

