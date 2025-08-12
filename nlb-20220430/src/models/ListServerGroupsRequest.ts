// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServerGroupsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. You can specify up to 10 tag keys.
   * 
   * The tag key can be up to 64 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * @example
   * Test
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. You can specify up to 10 tag values.
   * 
   * The tag value can be up to 128 characters in length. It cannot start with `aliyun` and `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * Test
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
   * The pagination token used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   For the first request and last request, you do not need to specify this parameter.
   * *   You must specify the token obtained from the previous query as the value of NextToken.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the NLB instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
   * The server group IDs. You can specify up to 20 server group IDs in each call.
   */
  serverGroupIds?: string[];
  /**
   * @remarks
   * The names of the server groups to be queried. You can specify up to 20 names in each call.
   */
  serverGroupNames?: string[];
  /**
   * @remarks
   * The type of server group. Valid values:
   * 
   * *   **Instance**: allows you to add servers of the **Ecs**, **Ens**, and **Eci** types.
   * *   **Ip**: allows you to add servers by specifying IP addresses.
   * 
   * @example
   * Instance
   */
  serverGroupType?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: ListServerGroupsRequestTag[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) in which the server group is deployed.
   * 
   * @example
   * vpc-bp15zckdt37pq72zv****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
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
      regionId: 'string',
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

