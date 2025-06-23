// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagKeysResponseBodyTagKeys extends $dara.Model {
  /**
   * @remarks
   * The number of Anti-DDoS Proxy (Chinese Mainland) instances to which the tag key is added.
   * 
   * @example
   * 2
   */
  tagCount?: number;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * aa1
   */
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagCount: 'TagCount',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagCount: 'number',
      tagKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

