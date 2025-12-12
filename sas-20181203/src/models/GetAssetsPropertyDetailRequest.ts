// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAssetsPropertyDetailRequestSearchCriteriaList extends $dara.Model {
  /**
   * @remarks
   * The name of the condition. Valid values:
   * 
   * *   **remarkItemName**: the aggregation item of the asset fingerprints. Fuzzy match is supported.
   * 
   * > *   If **Biz** is set to **web_server**, **remarkItemName** specifies a domain name. 
   * > *   If **Biz** is set to **lkm**, **remarkItemName** specifies a module name.
   * > *   If **Biz** is set to **autorun**, **remarkItemName** specifies the path to a startup item.
   * 
   * @example
   * remarkItemName
   */
  name?: string;
  /**
   * @remarks
   * The value of the condition.
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
   * The type of the asset fingerprint that you want to query. Default value: **sca**. Valid values:
   * 
   * *   **lkm**: kernel module
   * *   **autorun**: startup item
   * *   **web_server**: website
   * 
   * This parameter is required.
   * 
   * @example
   * lkm
   */
  biz?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the aggregation item for the asset fingerprint that you want to query.
   * 
   * > You can call the [GetAssetsPropertyItem](~~GetAssetsPropertyItem~~) operation to query the names of aggregation items.
   * 
   * @example
   * virtio
   */
  itemName?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  nextToken?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. If you leave this parameter empty, 20 entries are returned on each page.
   * 
   * > We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The name or IP address of the server.
   * 
   * @example
   * 1.2.XX.XX
   */
  remark?: string;
  /**
   * @remarks
   * The conditions that are used to query the details about the asset fingerprint.
   */
  searchCriteriaList?: GetAssetsPropertyDetailRequestSearchCriteriaList[];
  useNextToken?: boolean;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * > You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the UUIDs of servers.
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

