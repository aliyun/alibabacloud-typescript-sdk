// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRolesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * owner
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * alice
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

