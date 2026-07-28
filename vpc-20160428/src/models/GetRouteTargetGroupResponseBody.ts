// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRouteTargetGroupResponseBodyRouteTargetMemberList extends $dara.Model {
  /**
   * @remarks
   * The enable status of the route target group member. Valid values:
   * 
   * - **Enable**: Enabled.
   * - **Disable**: Disabled.
   * 
   * Only route target group members in the disabled state can be replaced with other instances. Route target group members in the enabled state cannot be modified.
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
   * The instance ID of the routing target group member.
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

export class GetRouteTargetGroupResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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

export class GetRouteTargetGroupResponseBody extends $dara.Model {
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
   * The region ID of the VPC to which the route target group belongs. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the region ID.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AE05898-06E5-4782-xxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the route target group belongs.
   * 
   * @example
   * rg-acfmxazdjdhd****
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
   * The instance ID of the routing target group.
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
   * The member list of the route target group.
   */
  routeTargetMemberList?: GetRouteTargetGroupResponseBodyRouteTargetMemberList[];
  /**
   * @remarks
   * The status of the routing target group. Valid values:
   * 
   * - **Recovering**: The active/standby switchback is in progress.
   * - **Switched**: The active/standby switchover is complete.
   * - **Available**: The routing target group is available.
   * - **Abnormal**: The standby instance has instance failures.
   * - **Pending**: The routing target group is being created.
   * - **Switching**: The active/standby switchover is in progress.
   * - **Deleting**: The routing target group is being deleted.
   * - **Unavailable**: Both the primary and secondary instances have instance failures.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tags of the route target group.
   */
  tags?: GetRouteTargetGroupResponseBodyTags[];
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
      configMode: 'ConfigMode',
      createTime: 'CreateTime',
      regionId: 'RegionId',
      requestId: 'RequestId',
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
      requestId: 'string',
      resourceGroupId: 'string',
      routeTargetGroupDescription: 'string',
      routeTargetGroupId: 'string',
      routeTargetGroupName: 'string',
      routeTargetMemberList: { 'type': 'array', 'itemType': GetRouteTargetGroupResponseBodyRouteTargetMemberList },
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetRouteTargetGroupResponseBodyTags },
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

