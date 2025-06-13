// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListServerGroupsRequestTag } from "./ListServerGroupsRequestTag";


export class ListServerGroupsRequest extends $dara.Model {
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
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   You do not need to specify this parameter for the first request.
   * *   You must specify the token that is obtained from the previous query as the value of **NextToken**.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXG****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the resource group to which the server group belongs.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The server group IDs.
   */
  serverGroupIds?: string[];
  /**
   * @remarks
   * The names of the server groups to be queried. You can specify at most 10 server group names.
   */
  serverGroupNames?: string[];
  /**
   * @remarks
   * The server group type. Valid values:
   * 
   * *   **Instance**: instances, including ECS instances, ENIs, and elastic container instances.
   * *   **Ip**: IP addresses.
   * *   **Fc**: Function Compute
   * 
   * @example
   * Instance
   */
  serverGroupType?: string;
  /**
   * @remarks
   * The tags that are added to the server group. You can specify up to 10 tags in each call.
   * 
   * @example
   * Instance
   */
  tag?: ListServerGroupsRequestTag[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-bp15zckdt37pq72zv****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
      serverGroupIds: 'ServerGroupIds',
      serverGroupNames: 'ServerGroupNames',
      serverGroupType: 'ServerGroupType',
      tag: 'Tag',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
      serverGroupIds: { 'type': 'array', 'itemType': 'string' },
      serverGroupNames: { 'type': 'array', 'itemType': 'string' },
      serverGroupType: 'string',
      tag: { 'type': 'array', 'itemType': ListServerGroupsRequestTag },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.serverGroupIds)) {
      $dara.Model.validateArray(this.serverGroupIds);
    }
    if(Array.isArray(this.serverGroupNames)) {
      $dara.Model.validateArray(this.serverGroupNames);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

