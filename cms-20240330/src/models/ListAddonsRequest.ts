// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAddonsRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  aliyunLang?: string;
  /**
   * @example
   * database
   */
  category?: string;
  regexp?: boolean;
  /**
   * @example
   * 105095
   */
  search?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunLang: 'aliyunLang',
      category: 'category',
      regexp: 'regexp',
      search: 'search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunLang: 'string',
      category: 'string',
      regexp: 'boolean',
      search: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

