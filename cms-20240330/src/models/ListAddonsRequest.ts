// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAddonsRequest extends $dara.Model {
  /**
   * @remarks
   * The language. Valid values: zh and en. The default value is zh.
   * 
   * @example
   * zh
   */
  aliyunLang?: string;
  /**
   * @remarks
   * Tag filtering.
   * 
   * @example
   * database
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to use regular expressions for the search. The default value is false.
   */
  regexp?: boolean;
  /**
   * @remarks
   * The search keyword. You can search for add-ons by name, description, or keyword.
   * 
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

