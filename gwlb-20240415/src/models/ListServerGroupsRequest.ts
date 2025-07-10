// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListServerGroupsRequestTag } from "./ListServerGroupsRequestTag";


export class ListServerGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 1000.
   * 
   * Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value of **NextToken** is returned, the value indicates the token that is used for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The server group IDs.
   * 
   * You can specify at most 20 server group IDs in each call.
   */
  serverGroupIds?: string[];
  /**
   * @remarks
   * The server group names.
   * 
   * You can specify at most 20 server group names in each call.
   */
  serverGroupNames?: string[];
  /**
   * @remarks
   * The server group type. Valid values:
   * 
   * *   **Instance**: allows you to specify resources of the **Ecs**, **Eni**, or **Eci** type.
   * *   **Ip**: allows you to add servers by specifying IP addresses.
   * 
   * @example
   * Instance
   */
  serverGroupType?: string;
  /**
   * @remarks
   * The number of entries to be skipped in the call.
   * 
   * @example
   * 1
   */
  skip?: number;
  /**
   * @remarks
   * The tag keys.
   * 
   * You can specify at most 20 tags in each call.
   */
  tag?: ListServerGroupsRequestTag[];
  /**
   * @remarks
   * The VPC ID.
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
      skip: 'Skip',
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
      skip: 'number',
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

