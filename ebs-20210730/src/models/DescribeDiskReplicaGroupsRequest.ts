// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiskReplicaGroupsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag of the replication pair-consistent group.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag of the replication pair-consistent group.
   * 
   * @example
   * tag-value
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

export class DescribeDiskReplicaGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the replication pair-consistent groups. You can specify one or more group IDs. Separate multiple IDs with a comma (,).
   * 
   * If you do not specify this parameter, all replication pair-consistent groups in the current region are queried. You can specify up to 100 group IDs.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  groupIds?: string;
  /**
   * @remarks
   * The maximum number of entries to return on a single page. You can use this parameter with NextToken.
   * 
   * Valid values: 1 to 500.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the replication group. Fuzzy search is supported.
   * 
   * @example
   * pg-name***
   */
  name?: string;
  /**
   * @remarks
   * The query token. Set this parameter to the NextToken value returned from the previous call to this operation. You do not need to set this parameter for the first call. If you set NextToken, the PageSize and PageNumber parameters are ignored, and the TotalCount in the response is invalid.
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
   * The region ID of the replication pair-consistent group.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the replication pair-consistent group belongs.
   * 
   * @example
   * rg-aekz*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The site to query. This parameter is used when replication pairs are deployed across zones.
   * 
   * - If you do not specify this parameter, the records and status information of replication pairs at the production site are returned.
   * 
   * - If you specify this parameter, only the records and status information of replication pairs at the specified site are returned. Valid values:
   * 
   *   - production: The production site.
   * 
   *   - backup: The disaster recovery site.
   * 
   * @example
   * production
   */
  site?: string;
  /**
   * @remarks
   * The tags. The list can contain up to 20 tags.
   */
  tag?: DescribeDiskReplicaGroupsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      groupIds: 'GroupIds',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      site: 'Site',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupIds: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      site: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDiskReplicaGroupsRequestTag },
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

