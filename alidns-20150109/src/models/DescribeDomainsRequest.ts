// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the domain name group. If you do not specify this parameter, all domain names are queried by default.
   * 
   * @example
   * 2223
   */
  groupId?: string;
  /**
   * @remarks
   * The keyword for searches in "%KeyWord%" mode. The value is not case-sensitive.
   * 
   * @example
   * com
   */
  keyWord?: string;
  /**
   * @remarks
   * The language type.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: **100**. Default value: **20**.
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
   * rg-resourcegroupid01
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The search mode. Valid values:
   * 
   * *   **LIKE**: fuzzy match.
   * *   **EXACT**: exact match.
   * 
   * @example
   * LIKE
   */
  searchMode?: string;
  /**
   * @remarks
   * Specifies whether to query the starmark of the domain name.
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

