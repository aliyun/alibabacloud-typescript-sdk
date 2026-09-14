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
   * The maximum number of entries to return on each page. Use this parameter with NextToken.
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
   * The name of the replication pair. Fuzzy matching is supported.
   * 
   * @example
   * name***
   */
  name?: string;
  /**
   * @remarks
   * The query token. Set this parameter to the NextToken value returned from the previous call to this operation. You do not need to set this parameter for the first call. If you set NextToken, the PageSize and PageNumber parameters are ignored, and the TotalCount value in the response is invalid.
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
   * The number of entries per page.
   * Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The IDs of replication pairs. Specify one or more replication pair IDs. The IDs must be in the `pair-cn-dsa****,pair-cn-asd****` format.
   * 
   * If you leave this parameter empty, all replication pairs in the current region are queried. You can specify up to 100 replication pair IDs.
   * 
   * @example
   * pair-cn-dsa****
   */
  pairIds?: string;
  /**
   * @remarks
   * The ID of the region where the primary or secondary disk of the replication pair resides. Call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the regions that support asynchronous replication.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair-consistent group. Specify the ID of a replication pair-consistent group to query the replication pairs in the group. The ID must be in the `pg-****` format.
   * 
   * If you leave this parameter empty, all replication pairs in the current region are queried.
   * 
   * > If you set this parameter to `-`, replication pairs that are not in any replication pair-consistent group are returned.
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
   * The site from which to query data. Query data from the production site or the disaster recovery site. Valid values:
   * 
   * - production: the production site.
   * 
   * - backup: the disaster recovery site.
   * 
   * Default value: production.
   * 
   * @example
   * production
   */
  site?: string;
  /**
   * @remarks
   * The tags. You can specify up to 20 tags.
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

