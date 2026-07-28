// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRouteTargetGroupsResponseBodyRouteTargetGroupsRouteTargetMemberList extends $dara.Model {
  /**
   * @remarks
   * The enable status of the route target group member. Valid values:
   * 
   * - **Enable**: Enabled.
   * - **Disable**: Disabled.
   * 
   * Only members in the Disable state can be modified to other instances. Members in the Enable state cannot be modified.
   * 
   * @example
   * Enable
   */
  enableStatus?: string;
  /**
   * @remarks
   * The health check status of the route target group member. Valid values:
   * 
   * - **Normal**: Normal.
   * - **Abnormal**: Abnormal.
   * 
   * @example
   * Normal
   */
  healthCheckStatus?: string;
  /**
   * @remarks
   * The routing target group member instance ID.
   * 
   * @example
   * ep-xxxx
   */
  memberId?: string;
  /**
   * @remarks
   * The member type of the route target group.
   * 
   * Currently supported types:
   * 
   * - **GatewayLoadBalancerEndpoint**
   * 
   * @example
   * GatewayLoadBalancerEndpoint
   */
  memberType?: string;
  /**
   * @remarks
   * The weight of the route target group member. Valid values:
   * 
   * - **100**: The member is the active instance.
   * - **0**: The member is the standby instance.
   * 
   * The weight can only be set during creation and cannot be modified.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      enableStatus: 'EnableStatus',
      healthCheckStatus: 'HealthCheckStatus',
      memberId: 'MemberId',
      memberType: 'MemberType',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableStatus: 'string',
      healthCheckStatus: 'string',
      memberId: 'string',
      memberType: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRouteTargetGroupsResponseBodyRouteTargetGroupsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * @example
   * image/upload/cbbec42e0be33abb27babefcbe0397f0
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * 8
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

export class ListRouteTargetGroupsResponseBodyRouteTargetGroups extends $dara.Model {
  /**
   * @remarks
   * The configuration mode of the route target group. Valid values:
   * 
   * - **Active-Standby**: active/standby mode.
   * 
   * @example
   * Active-Standby
   */
  configMode?: string;
  /**
   * @remarks
   * The time when the route target group was created.
   * 
   * @example
   * 2025-12-30T06:40:50Z
   */
  createTime?: string;
  /**
   * @remarks
   * The region ID of the VPC to which the route target group belongs.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the route target group belongs.
   * 
   * @example
   * rg-acfm3swh6ta56ri
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The description of the route target group.
   * 
   * @example
   * myRouteTargetGroupDescription
   */
  routeTargetGroupDescription?: string;
  /**
   * @remarks
   * The routing target group instance ID.
   * 
   * @example
   * rtg-xxxx
   */
  routeTargetGroupId?: string;
  /**
   * @remarks
   * The name of the route target group.
   * 
   * @example
   * myRouteTargetGroupName
   */
  routeTargetGroupName?: string;
  /**
   * @remarks
   * The list of members in the route target group.
   */
  routeTargetMemberList?: ListRouteTargetGroupsResponseBodyRouteTargetGroupsRouteTargetMemberList[];
  /**
   * @remarks
   * The status of the routing target group. Valid values:
   * 
   * - **Recovering**: The active/standby switchback is in progress.
   * - **Switched**: The active/standby switchover is complete.
   * - **Available**: Available.
   * - **Abnormal**: The standby instance has instance failures.
   * - **Pending**: Being created.
   * - **Switching**: The active/standby switchover is in progress.
   * - **Deleting**: Being deleted.
   * - **Unavailable**: Both primary and secondary instances have instance failures.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   */
  tags?: ListRouteTargetGroupsResponseBodyRouteTargetGroupsTags[];
  /**
   * @remarks
   * The ID of the VPC to which the route target group belongs.
   * 
   * @example
   * vpc-uf60y8uzhsvbhmuh3l654
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      configMode: 'ConfigMode',
      createTime: 'CreateTime',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      routeTargetGroupDescription: 'RouteTargetGroupDescription',
      routeTargetGroupId: 'RouteTargetGroupId',
      routeTargetGroupName: 'RouteTargetGroupName',
      routeTargetMemberList: 'RouteTargetMemberList',
      status: 'Status',
      tags: 'Tags',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMode: 'string',
      createTime: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      routeTargetGroupDescription: 'string',
      routeTargetGroupId: 'string',
      routeTargetGroupName: 'string',
      routeTargetMemberList: { 'type': 'array', 'itemType': ListRouteTargetGroupsResponseBodyRouteTargetGroupsRouteTargetMemberList },
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListRouteTargetGroupsResponseBodyRouteTargetGroupsTags },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.routeTargetMemberList)) {
      $dara.Model.validateArray(this.routeTargetMemberList);
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

export class ListRouteTargetGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists. If a value is returned for NextToken, the value indicates the token for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DE77A7F3-3B74-41C0-A5BC-CAFD188C28B6
   */
  requestId?: string;
  /**
   * @remarks
   * The list of route target groups.
   */
  routeTargetGroups?: ListRouteTargetGroupsResponseBodyRouteTargetGroups[];
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
      requestId: 'RequestId',
      routeTargetGroups: 'RouteTargetGroups',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      routeTargetGroups: { 'type': 'array', 'itemType': ListRouteTargetGroupsResponseBodyRouteTargetGroups },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.routeTargetGroups)) {
      $dara.Model.validateArray(this.routeTargetGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

