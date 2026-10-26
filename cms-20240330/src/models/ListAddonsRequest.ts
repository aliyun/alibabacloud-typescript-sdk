// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAddonsRequest extends $dara.Model {
  /**
   * @remarks
   * The locale. Valid values: zh and en. Default value: zh.
   * 
   * @example
   * zh
   */
  aliyunLang?: string;
  apiVersion?: string;
  /**
   * @remarks
   * The tag filter.
   * 
   * @example
   * database
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to use regular expression matching for the query field. Default value: false.
   * 
   * @example
   * false
   */
  regexp?: boolean;
  /**
   * @remarks
   * The search query. Supports searching by add-on name, description, or keyword.
   * 
   * @example
   * 105095
   */
  search?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunLang: 'aliyunLang',
      apiVersion: 'apiVersion',
      category: 'category',
      regexp: 'regexp',
      search: 'search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunLang: 'string',
      apiVersion: 'string',
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

