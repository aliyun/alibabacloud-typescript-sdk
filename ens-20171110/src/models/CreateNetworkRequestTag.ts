// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag that are to add to the instance. Valid values of N: **1** to **20**.
   * 
   * *   The key cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * *   The key must be up to 64 characters in length.
   * *   The tag key cannot be an empty string.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N that is added to the resource. You can specify up to 20 tag values. The tag value can be an empty string. The tag value can be up to 128 characters in length. It cannot start with acs: or contain http:// or https://.
   * 
   * @example
   * tagValue
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

