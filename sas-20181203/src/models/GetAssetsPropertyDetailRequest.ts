// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAssetsPropertyDetailRequestSearchCriteriaList extends $dara.Model {
  /**
   * @remarks
   * The name of the condition to be queried. Values are as follows:
   * - **remarkItemName**: The aggregated item name of the asset fingerprint, supporting fuzzy matching
   * 
   * 
   * >-   - When **Biz** is **web_server**, **remarkItemName** represents the domain name as the search condition.
   * >-   - When **Biz** is **lkm**, **remarkItemName** represents the module name as the search condition.
   * >-   - When **Biz** is **autorun**, **remarkItemName** represents the startup item path as the search condition.
   * 
   * @example
   * remarkItemName
   */
  name?: string;
  /**
   * @remarks
   * The value of the condition to be queried.
   * 
   * @example
   * virtio
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAssetsPropertyDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The type of asset fingerprint to be queried, with a default value of **sca**. Values:
   * 
   * - **lkm**: Kernel module
   * - **autorun**: Startup item
   * - **web_server**: Web site
   * 
   * This parameter is required.
   * 
   * @example
   * lkm
   */
  biz?: string;
  /**
   * @remarks
   * Set the page number from which to start displaying the query results. The default value is **1**, indicating that the display starts from the first page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The aggregated item name of the asset fingerprint to be queried.
   * > Call the [GetAssetsPropertyItem](~~GetAssetsPropertyItem~~) API to obtain this parameter.
   * 
   * @example
   * virtio
   */
  itemName?: string;
  /**
   * @remarks
   * The language type for the request and response. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * Used to mark the current read position. Leave it empty to start from the beginning.
   * > Do not fill in for the first call; the response will include the NextToken for the second call. Each subsequent call\\"s response will contain the NextToken for the next call.
   * 
   * @example
   * 71640f04f6e7b49764c8d08ae170xxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * Specify the maximum number of data entries per page in a paginated query. The default number of data entries per page is 20. If the PageSize parameter is empty, 20 data entries will be returned by default.
   * > It is recommended that the PageSize value is not empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Server name or IP.
   * 
   * @example
   * 1.2.XX.XX
   */
  remark?: string;
  /**
   * @remarks
   * A set of conditions for querying asset fingerprint details.
   */
  searchCriteriaList?: GetAssetsPropertyDetailRequestSearchCriteriaList[];
  /**
   * @remarks
   * Whether to use the NextToken method to fetch the list of vulnerabilities. If this parameter is used, TotalCount will not be returned. Values:
   * 
   * - **true**: Use the NextToken method.
   * - **false**: Do not use the NextToken method.
   * 
   * @example
   * true
   */
  useNextToken?: boolean;
  /**
   * @remarks
   * The UUID of the asset to be queried.
   * > Call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) API to obtain this parameter.
   * 
   * @example
   * 38f72ea4-4c9f-4df1-bc6c-0f267614****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      biz: 'Biz',
      currentPage: 'CurrentPage',
      itemName: 'ItemName',
      lang: 'Lang',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      remark: 'Remark',
      searchCriteriaList: 'SearchCriteriaList',
      useNextToken: 'UseNextToken',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      biz: 'string',
      currentPage: 'number',
      itemName: 'string',
      lang: 'string',
      nextToken: 'string',
      pageSize: 'number',
      remark: 'string',
      searchCriteriaList: { 'type': 'array', 'itemType': GetAssetsPropertyDetailRequestSearchCriteriaList },
      useNextToken: 'boolean',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.searchCriteriaList)) {
      $dara.Model.validateArray(this.searchCriteriaList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

