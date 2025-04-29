// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImagePipelineRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N. Valid values of N: 1 to 20. You cannot specify empty strings as tag keys. The tag key must be 1 to 128 characters in length and cannot contain `http://` or `https://`. It cannot start with `acs:` or `aliyun`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value must be 0 to 128 characters in length. It cannot start with `acs:` or contain `http://` or `https://`.
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

