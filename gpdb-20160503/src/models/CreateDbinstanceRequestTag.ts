// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceRequestTag extends $dara.Model {
  /**
   * @remarks
   * Tag key. The restrictions are as follows:
   * 
   * - It cannot be an empty string.
   * - It supports up to 128 characters.
   * - It cannot start with `aliyun` or `acs:`, and it cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * Tag value. The restrictions are as follows:
   * 
   * - It can be an empty string.
   * - It supports up to 128 characters.
   * - It cannot start with `acs:`, and it cannot contain `http://` or `https://`.
   * 
   * @example
   * TestValue
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

