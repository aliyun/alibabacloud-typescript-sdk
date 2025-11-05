// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiskReplicaPairsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * TestValue
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

export class DescribeDiskReplicaPairsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries per page. You can use this parameter together with NextToken.
   * 
   * Valid values: 1 to 500.
   * 
   * Default value: 10.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the replication pair. Fuzzy search is supported.
   * 
   * @example
   * name***
   */
  name?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken. If you specify NextToken, the PageSize and PageNumber request parameters do not take effect, and the TotalCount response parameter is invalid.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 5
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The IDs of replication pairs. You can specify the IDs of one or more replication pairs and separate the IDs with commas (,). Example: `pair-cn-dsa****,pair-cn-asd****`.
   * 
   * This parameter is empty by default, which indicates that all replication pairs in the specified region are queried. You can specify a maximum of 100 replication pair IDs.
   * 
   * @example
   * pair-cn-dsa****
   */
  pairIds?: string;
  /**
   * @remarks
   * The region ID of the primary or secondary disk in the replication pair. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which async replication is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair-consistent group. You can specify the ID of a replication pair-consistent group to query the replication pairs in the group. Example: `pg-****`.
   * 
   * This parameter is empty by default, which indicates that all replication pairs in the specified region are queried.
   * 
   * >  If this parameter is set to`-`, replication pairs that are not added to any replication pair-consistent groups are returned.
   * 
   * @example
   * pg-****
   */
  replicaGroupId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the replication pair belongs.
   * 
   * @example
   * rg-acfmvs******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of the site from which the information of replication pairs is retrieved. Valid value:
   * 
   * *   production: primary site
   * *   backup: secondary site
   * 
   * Default value: production.
   * 
   * @example
   * production
   */
  site?: string;
  /**
   * @remarks
   * The tags. Up to 20 tags are supported.
   */
  tag?: DescribeDiskReplicaPairsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pairIds: 'PairIds',
      regionId: 'RegionId',
      replicaGroupId: 'ReplicaGroupId',
      resourceGroupId: 'ResourceGroupId',
      site: 'Site',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pairIds: 'string',
      regionId: 'string',
      replicaGroupId: 'string',
      resourceGroupId: 'string',
      site: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDiskReplicaPairsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

