// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatGatewaysRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag keys of the NAT gateway. You can specify up to 20 tag keys.
   * 
   * Each tag key cannot exceed 64 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * KeyTest
   */
  key?: string;
  /**
   * @remarks
   * The tag values of the NAT gateway. You can specify up to 20 tag values.
   * 
   * The tag value cannot exceed 128 characters in length, and cannot start with `aliyun` or `acs:`. The value cannot contain `http://` or `https://`.
   * 
   * @example
   * valueTest
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

