// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRouteTargetGroupResponseBodyRouteTargetMemberList extends $dara.Model {
  /**
   * @remarks
   * The enabled status of the route target group member. Valid values:
   * 
   * - **Enable**: Enabled.
   * - **Disable**: Disabled.
   * 
   * You can replace only a disabled route target group member with another instance. You cannot modify an enabled route target group member.
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
   * The type of the route target group member. Valid values:
   * 
   * - **GatewayLoadBalancerEndpoint**: Gateway load balancer endpoint.
   * 
   * @example
   * GatewayLoadBalancerEndpoint
   */
  memberType?: string;
  /**
   * @remarks
   * The weight of the route target group member. Valid values:
   * 
   * - **100**: The member is the primary instance.
   * - **0**: The member is the secondary instance.
   * 
   * You can set the weight only when you create the member. The weight cannot be modified.
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
   * - **Active-Standby**: Active/standby mode.
   * 
   * @example
   * Active-Standby
   */
  configMode?: string;
  /**
   * @remarks
   * The time when the route target group was created. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format.
   * 
   * @example
   * 2025-12-30T06:40:50Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the region where the VPC to which the route target group belongs is deployed. You can call the DescribeRegions operation to query the region ID.
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
   * The members of the route target group.
   */
  routeTargetMemberList?: GetRouteTargetGroupResponseBodyRouteTargetMemberList[];
  /**
   * @remarks
   * The status of the routing target group. Valid values:
   * 
   * - **Recovering**: The system is switching back to the primary instance.
   * - **Switched**: The active/standby switchover is completed.
   * - **Available**: The routing target group is available.
   * - **Abnormal**: Secondary instance failures.
   * - **Pending**: The routing target group is being created.
   * - **Switching**: An active/standby switchover is in progress.
   * - **Deleting**: The routing target group is being deleted.
   * - **Unavailable**: Both primary and secondary instances have instance failures.
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

