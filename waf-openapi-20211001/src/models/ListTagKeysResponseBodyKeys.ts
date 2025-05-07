// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagKeysResponseBodyKeys extends $dara.Model {
  /**
   * @remarks
   * The type of the tag. Valid values:
   * 
   * *   custom
   * *   system
   * 
   * @example
   * custom
   */
  category?: string;
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * demoTagKey
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

