// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the domain name group.
   * 
   * If you leave this parameter empty or pass an empty string, all domain names are queried.
   * 
   * If you set this parameter to defaultGroup, domain names in the default group are queried.
   * 
   * @example
   * defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The keyword. The search is performed in the %KeyWord% pattern and is not case-sensitive.
   * 
   * @example
   * com
   */
  keyWord?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh: Chinese
   * 
   * - en: English
   * 
   * Default value: zh.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The page number. The value starts from **1**. The default value is **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. The maximum value is **100**. The default value is **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-re********
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The search mode. Valid values:
   * 
   * - **LIKE**: fuzzy search
   * 
   * - **EXACT**: exact search
   * 
   * Default value: LIKE
   * 
   * @example
   * LIKE
   */
  searchMode?: string;
  /**
   * @remarks
   * Specifies whether to query starred domain names. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * Default value: true
   * 
   * @example
   * true
   */
  starmark?: boolean;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      keyWord: 'KeyWord',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      searchMode: 'SearchMode',
      starmark: 'Starmark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      keyWord: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      searchMode: 'string',
      starmark: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

