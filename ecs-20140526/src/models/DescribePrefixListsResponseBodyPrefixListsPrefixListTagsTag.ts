// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePrefixListsResponseBodyPrefixListsPrefixListTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag value. A prefix list can have 1 to 20 tags. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot contain `http:// or https://`.
   * 
   * @example
   * TestValue
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag key. A prefix list can have 1 to 20 tags. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

