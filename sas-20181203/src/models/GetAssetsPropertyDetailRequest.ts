// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAssetsPropertyDetailRequestSearchCriteriaList extends $dara.Model {
  /**
   * @remarks
   * The name of the search criterion. Valid values:
   * - **remarkItemName**: the aggregation item name of Asset Fingerprints. Fuzzy match is supported.
   * 
   * 
   * >-   - When **Biz** is set to **web_server**, **remarkItemName** indicates the domain name.
   * >-   - When **Biz** is set to **lkm**, **remarkItemName** indicates the module name.
   * >-   - When **Biz** is set to **autorun**, **remarkItemName** indicates the startup item path.
   * 
   * @example
   * remarkItemName
   */
  name?: string;
  /**
   * @remarks
   * The value of the search criterion.
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
   * The type of Asset Fingerprints to query. Default value: **sca**. Valid values:
   * 
   * - **lkm**: kernel module
   * - **autorun**: startup item
   * - **web_server**: web site.
   * 
   * This parameter is required.
   * 
   * @example
   * lkm
   */
  biz?: string;
  /**
   * @remarks
   * The page number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The aggregation item name of the Asset Fingerprints to query.
   * > Call the [GetAssetsPropertyItem](~~GetAssetsPropertyItem~~) operation to obtain this parameter.
   * 
   * @example
   * virtio
   */
  itemName?: string;
  /**
   * @remarks
   * The language type of the request and response messages. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The token that marks the starting position for the query. Leave this parameter empty to query from the beginning.
   * 
   * > Do not specify this parameter for the first call. The response includes the NextToken value for the next call. Each subsequent response contains the NextToken value for the following call.
   * 
   * @example
   * 71640f04f6e7b49764c8d08ae170xxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The maximum number of entries per page for a paging query. Default value: 20. If you leave this parameter empty, 20 entries are returned per page by default.
   * > Do not leave PageSize empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The server name or IP address.
   * 
   * @example
   * 1.2.XX.XX
   */
  remark?: string;
  /**
   * @remarks
   * The collection of search criteria for querying Asset Fingerprints details.
   */
  searchCriteriaList?: GetAssetsPropertyDetailRequestSearchCriteriaList[];
  /**
   * @remarks
   * Specifies whether to use the NextToken method to retrieve the vulnerability list. If this parameter is used, TotalCount is no longer returned. Valid values:
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
   * The UUID of the asset to query.
   * > Call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to obtain this parameter.
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

