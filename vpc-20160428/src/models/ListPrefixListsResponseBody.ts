// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrefixListsResponseBodyPrefixListsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * FinanceJoshua
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class ListPrefixListsResponseBodyPrefixLists extends $dara.Model {
  /**
   * @remarks
   * The CIDR block specified in the prefix list.
   */
  cidrBlocks?: string[];
  /**
   * @remarks
   * The time when the prefix list was created.
   * 
   * @example
   * 2022-07-12T14:22:32Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The IP version of the prefix list. Valid values:
   * 
   * *   **IPV4**
   * *   **IPV6**
   * 
   * @example
   * IPV4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The maximum number of CIDR blocks that you can specify in the prefix list.
   * 
   * @example
   * 10
   */
  maxEntries?: number;
  /**
   * @remarks
   * The Alibaba Cloud account to which the prefix list belongs.
   * 
   * @example
   * 1210123456123456
   */
  ownerId?: string;
  /**
   * @remarks
   * The description of the prefix list.
   * 
   * @example
   * Created with oss service by system.
   */
  prefixListDescription?: string;
  /**
   * @remarks
   * The ID of the prefix list.
   * 
   * @example
   * pl-m5estsqsdqwg88hjf****
   */
  prefixListId?: string;
  /**
   * @remarks
   * The name of the prefix list.
   * 
   * @example
   * test
   */
  prefixListName?: string;
  /**
   * @remarks
   * The status of the prefix list. Valid values:
   * 
   * *   **Created**
   * *   **Deleted**
   * *   **Modifying**
   * 
   * >  This parameter is the same as the **Status** parameter.
   * 
   * @example
   * Created
   */
  prefixListStatus?: string;
  /**
   * @remarks
   * The type of the prefix list.
   * 
   * @example
   * Custom
   */
  prefixListType?: string;
  /**
   * @remarks
   * The region ID of the prefix list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the prefix list belongs.
   * 
   * @example
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the prefix list is shared. Valid values:
   * 
   * *   **Shared**: The prefix list is shared.
   * *   If an empty value is returned, the prefix list is not shared.
   * 
   * @example
   * Shared
   */
  shareType?: string;
  /**
   * @remarks
   * The status of the prefix list. Valid values:
   * 
   * *   **Created**
   * *   **Deleted**
   * *   **Modifying**
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListPrefixListsResponseBodyPrefixListsTags[];
  static names(): { [key: string]: string } {
    return {
      cidrBlocks: 'CidrBlocks',
      creationTime: 'CreationTime',
      ipVersion: 'IpVersion',
      maxEntries: 'MaxEntries',
      ownerId: 'OwnerId',
      prefixListDescription: 'PrefixListDescription',
      prefixListId: 'PrefixListId',
      prefixListName: 'PrefixListName',
      prefixListStatus: 'PrefixListStatus',
      prefixListType: 'PrefixListType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlocks: { 'type': 'array', 'itemType': 'string' },
      creationTime: 'string',
      ipVersion: 'string',
      maxEntries: 'number',
      ownerId: 'string',
      prefixListDescription: 'string',
      prefixListId: 'string',
      prefixListName: 'string',
      prefixListStatus: 'string',
      prefixListType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListPrefixListsResponseBodyPrefixListsTags },
    };
  }

  validate() {
    if(Array.isArray(this.cidrBlocks)) {
      $dara.Model.validateArray(this.cidrBlocks);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrefixListsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value is returned for **NextToken**, the value indicates the token that is used for the next request to retrieve a new page of results.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The information about the prefix lists.
   */
  prefixLists?: ListPrefixListsResponseBodyPrefixLists[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DF72F7BB-5DFA-529C-887E-B0BB70D89C4F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      prefixLists: 'PrefixLists',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      prefixLists: { 'type': 'array', 'itemType': ListPrefixListsResponseBodyPrefixLists },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.prefixLists)) {
      $dara.Model.validateArray(this.prefixLists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

