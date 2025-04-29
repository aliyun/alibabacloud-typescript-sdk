// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePortRangeListRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N to add to the port list.
   * 
   * The tag key cannot be empty or an empty string. The tag key can be up to 128 characters in length and cannot contain http:// or https://. The tag key cannot start with acs: or aliyun.
   * 
   * @example
   * key for PortRangeList
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the port list.
   * 
   * The tag value cannot be empty but can be an empty string. The tag value can be up to 128 characters in length and cannot contain http:// or https://.
   * 
   * @example
   * value for PortRangeList
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

