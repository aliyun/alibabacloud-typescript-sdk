// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServerGroupsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can specify up to 10 tag keys.
   * 
   * The key can be up to 64 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * Test
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify up to 10 tag values.
   * 
   * The value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
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
   * The maximum number of entries to return for a single request. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to retrieve the next page of results. Valid values:
   * - For the first request or when no subsequent request is required, leave this parameter empty.
   * - For a subsequent request, set this parameter to the **NextToken** value returned from the previous API call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXG****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of server group IDs.
   */
  serverGroupIds?: string[];
  /**
   * @remarks
   * The list of server group names. You can specify up to 10 server group names.
   */
  serverGroupNames?: string[];
  /**
   * @remarks
   * The server group type. Valid values:
   * 
   * - **Instance**: the server type, which includes ECS, ENI, and ECI instances.
   * 
   * - **Ip**: the IP address type.
   * 
   * - **Fc**: the Function Compute type.
   * 
   * - If you leave this parameter empty, all types are queried.
   * 
   * @example
   * Instance
   */
  serverGroupType?: string;
  /**
   * @remarks
   * The list of tags that are added to the server group. You can specify up to 10 tags in a single request.
   * 
   * @example
   * Instance
   */
  tag?: ListServerGroupsRequestTag[];
  /**
   * @remarks
   * The VPC-connected instance ID.
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

