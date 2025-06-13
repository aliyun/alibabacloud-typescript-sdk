// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagKeysResponseBodyTagKeys extends $dara.Model {
  /**
   * @remarks
   * The type of the tag.
   * 
   * Valid values: **Custom**, **System**, and **All**.
   * 
   * Default value: **All**.
   * 
   * @example
   * System
   */
  category?: string;
  /**
   * @remarks
   * The tag that matches all filter conditions.
   * 
   * @example
   * test
   */
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
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

