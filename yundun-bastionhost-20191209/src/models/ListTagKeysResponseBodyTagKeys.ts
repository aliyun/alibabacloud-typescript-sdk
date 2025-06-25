// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagKeysResponseBodyTagKeys extends $dara.Model {
  /**
   * @remarks
   * The total number of tag keys.
   * 
   * @example
   * 2
   */
  tagCount?: number;
  /**
   * @remarks
   * The name of the tag key.
   * 
   * @example
   * key2
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

