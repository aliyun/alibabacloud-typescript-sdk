// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Tag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. This parameter is required and cannot be an empty string. The key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * This parameter is required.
   * 
   * @example
   * department
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag This parameter is optional and can be an empty string. The value can be up to 128 characters in length. It cannot start with `acs:` and cannot contain `http://` or `https://`.
   * 
   * @example
   * IT
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

