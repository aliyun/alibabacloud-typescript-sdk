// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRouteTargetGroupsResponseBodyRouteTargetGroupsRouteTargetMemberList extends $dara.Model {
  /**
   * @remarks
   * The enable status of the route target group member. Values:
   * 
   * - **Enable**: Enabled.
   * - **Disable**: Disabled.
   * 
   * Only disabled route target group members can be modified to other instances. Enabled route target group members cannot be modified.
   * 
   * @example
   * Enable
   */
  enableStatus?: string;
  /**
   * @remarks
   * The health check status of the route target group member. Values:
   * 
   * - **Normal**: Normal
   * - **Abnormal**: Abnormal
   * 
   * @example
   * Normal
   */
  healthCheckStatus?: string;
  /**
   * @remarks
   * The ID of the route target group member instance.
   * 
   * @example
   * ep-xxxx
   */
  memberId?: string;
  /**
   * @remarks
   * The type of the route target group member.
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
   * The weight value of the route target group member. Values:
   * 
   * - **100**: Indicates that the member is the primary instance.
   * - **0**: Indicates that the member is the backup instance.
   * 
   * The weight value can only be set during creation and cannot be modified.
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
   * The key of the resource tag.
   * 
   * @example
   * image/upload/cbbec42e0be33abb27babefcbe0397f0
   */
  key?: string;
  /**
   * @remarks
   * The value of the resource tag. Up to 20 tag values are supported. If you need to pass this value, you can input an empty string. A maximum of 128 characters is allowed. The value cannot start with `aliyun` or `acs:`, and it must not contain `http://` or `https://`.
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
   * The configuration mode of the route target group. Supported modes are as follows:
   * 
   * - **Active-Standby**: Active-standby mode.
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
   * You can obtain the region ID by calling the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) interface.
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
   * Description of the route target group.
   * 
   * @example
   * myRouteTargetGroupDescription
   */
  routeTargetGroupDescription?: string;
  /**
   * @remarks
   * The ID of the route target group instance.
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
   * The list of route target group members.
   */
  routeTargetMemberList?: ListRouteTargetGroupsResponseBodyRouteTargetGroupsRouteTargetMemberList[];
  /**
   * @remarks
   * Status of the route target group. Values:
   * 
   * - **Recovering**: Active-Standby rollback in progress
   * - **Switched**: Active-Standby switched
   * - **Available**: Available
   * - **Abnormal**: Standby instance abnormal
   * - **Pending**: Creating
   * - **Switching**: Active-Standby switching in progress
   * - **Deleting**: Deleting
   * - **Unavailable**: Both primary and standby instances are abnormal
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tag values. A maximum of 20 tag values are supported. If you need to pass this value, you can input an empty string.
   * 
   * A maximum of 128 characters are supported. The value cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
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
   * The page size.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * Token for the next query. Value: If NextToken is empty, it indicates there is no next query. If NextToken has a return value, it indicates the token for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * DE77A7F3-3B74-41C0-A5BC-CAFD188C28B6
   */
  requestId?: string;
  /**
   * @remarks
   * List of route target groups.
   */
  routeTargetGroups?: ListRouteTargetGroupsResponseBodyRouteTargetGroups[];
  /**
   * @remarks
   * Number of items in the list.
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

