// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpv6AddressesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N. You can specify at most 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 128 characters in length. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N.
   * 
   * The tag value can be up to 128 characters in length. It can be an empty string. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * Each tag key corresponds to one tag value. You can specify at most 20 tag values at a time.
   * 
   * @example
   * yunke
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

