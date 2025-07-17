// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAddonsRequest extends $dara.Model {
  /**
   * @remarks
   * Language,the default language is Chinese.
   * 
   * @example
   * zh
   */
  aliyunLang?: string;
  /**
   * @remarks
   * Category filter.
   * 
   * @example
   * database
   */
  category?: string;
  /**
   * @remarks
   * Whether to enable regular matching.
   * 
   * @example
   * false
   */
  regexp?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * A query field can be queried by name or description.
   * 
   * @example
   * mysql
   */
  search?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunLang: 'AliyunLang',
      category: 'Category',
      regexp: 'Regexp',
      regionId: 'RegionId',
      search: 'Search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunLang: 'string',
      category: 'string',
      regexp: 'boolean',
      regionId: 'string',
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

