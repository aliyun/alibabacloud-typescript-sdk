// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFileSystemsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N to add to the resource.
   * 
   * Limits:
   * - Valid values of N: 1 to 20.
   * - The tag key must be 1 to 128 characters in length.
   * - The tag key cannot start with aliyun or acs:.
   * - The tag key cannot contain http:// or https://.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the resource.
   * 
   * Limits:
   * - Valid values of N: 1 to 20.
   * - The tag value must be 1 to 128 characters in length.
   * - The tag value cannot start with aliyun or acs:.
   * - The tag value cannot contain http:// or https://.
   * 
   * @example
   * test-value
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

