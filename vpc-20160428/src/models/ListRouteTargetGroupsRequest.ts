// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRouteTargetGroupsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. If you specify this parameter, you cannot specify an empty string.
   * 
   * A tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceJoshua
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. If you specify this parameter, you can specify an empty string.
   * 
   * A tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
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

export class ListRouteTargetGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, and you must ensure that the value is unique among different requests. The client token can contain only ASCII characters. Note: If you do not specify this parameter, the system automatically uses the RequestId of the API request as the client token. The RequestId of each API request is unique.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The IP version.
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1** to **50**. Default value: **50**.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The ID of the member instance in the route target group.
   * Filters route target groups that contain the specified member instance ID.
   * 
   * @example
   * ep-xxxx
   */
  memberId?: string;
  /**
   * @remarks
   * The token for the next query. If this is the first query or no subsequent query is required, leave this parameter empty. If a subsequent query is required, set this parameter to the NextToken value returned from the previous API call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the VPC to which the route target group belongs. You can call the DescribeRegions operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. For more information about resource groups, see What is a resource group?
   * 
   * @example
   * rg-acfmxazdjdhd****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The IDs of the route target groups.
   * You can specify up to 50 instance IDs in a single query.
   */
  routeTargetGroupIds?: string[];
  /**
   * @remarks
   * The list of tags.
   */
  tag?: ListRouteTargetGroupsRequestTag[];
  /**
   * @remarks
   * The ID of the VPC to which the route target group belongs.
   * 
   * @example
   * vpc-xxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ipVersion: 'IpVersion',
      maxResults: 'MaxResults',
      memberId: 'MemberId',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      routeTargetGroupIds: 'RouteTargetGroupIds',
      tag: 'Tag',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ipVersion: 'string',
      maxResults: 'number',
      memberId: 'string',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      routeTargetGroupIds: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListRouteTargetGroupsRequestTag },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.routeTargetGroupIds)) {
      $dara.Model.validateArray(this.routeTargetGroupIds);
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

