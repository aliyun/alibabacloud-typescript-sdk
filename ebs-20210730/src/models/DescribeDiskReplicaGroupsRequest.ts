// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDiskReplicaGroupsRequestTag } from "./DescribeDiskReplicaGroupsRequestTag";


export class DescribeDiskReplicaGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the replication pair-consistent groups. You can specify the IDs of one or more replication pair-consistent groups. Separate the IDs with commas (,).
   * 
   * This parameter is empty by default, which indicates that all replication pair-consistent groups in the specified region are queried. You can specify up to the IDs of 100 replication pair-consistent groups.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  groupIds?: string;
  /**
   * @remarks
   * The maximum number of entries per page. You can use this parameter together with NextToken.
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
   * The name of the replication pair-consistent group. You can perform a fuzzy search.
   * 
   * @example
   * pg-name***
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
   * The number of the page to return.
   * 
   * @example
   * 5
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region to which the replication pair-consistent group belongs.
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
   * The type of the site from which the information of replication pair-consistent groups is retrieved. This parameter is used for scenarios where data is replicated across zones in replication pairs.
   * 
   * *   If this parameter is not specified, information such as the status of replication pair-consistent groups at the primary site is queried and returned.
   * 
   * *   Otherwise, information such as the state of replication pairs at the site specified by the Site parameter is queried and returned. Valid values:
   * 
   *     *   production: primary site
   *     *   backup: secondary site
   * 
   * @example
   * production
   */
  site?: string;
  /**
   * @remarks
   * The tags to add to the replication pair-consistent group. You can specify up to 20 tags.
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

