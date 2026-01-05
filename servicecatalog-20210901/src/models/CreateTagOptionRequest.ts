// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTagOptionRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the tag option.
   * 
   * The key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * This parameter is required.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag option.
   * 
   * The value can be up to 128 characters in length. It cannot start with `acs:`and cannot contain `http://` or `https://`.
   * 
   * This parameter is required.
   * 
   * @example
   * v1
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

