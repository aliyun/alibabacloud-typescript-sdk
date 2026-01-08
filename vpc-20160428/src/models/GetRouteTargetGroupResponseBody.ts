// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRouteTargetGroupResponseBodyRouteTargetMemberList extends $dara.Model {
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
   * Route target group member health check status. Values:
   * - **Normal**: Normal 
   * - **Abnormal**: Abnormal
   * 
   * @example
   * Normal
   */
  healthCheckStatus?: string;
  /**
   * @remarks
   * ID of the route target group member instance.
   * 
   * @example
   * ep-xxxx
   */
  memberId?: string;
  /**
   * @remarks
   * Type of the route target group member.
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
   * Weight value of the route target group member. Values:
   * 
   * - **100**: Indicates the member is the primary instance.
   * - **0**: Indicates the member is the standby instance.
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

export class GetRouteTargetGroupResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * Tag key.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * Tag value.
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
   * Configuration mode of the route target group. Supported modes are as follows:
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
   * The region ID of the VPC to which the route target group belongs. You can obtain the region ID by calling the DescribeRegions interface.
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
   * Description of the route target group.
   * 
   * @example
   * myRouteTargetGroupDescription
   */
  routeTargetGroupDescription?: string;
  /**
   * @remarks
   * ID of the route target group instance.
   * 
   * @example
   * rtg-xxxx
   */
  routeTargetGroupId?: string;
  /**
   * @remarks
   * Name of the route target group.
   * 
   * @example
   * myRouteTargetGroupName
   */
  routeTargetGroupName?: string;
  /**
   * @remarks
   * List of members in the route target group.
   */
  routeTargetMemberList?: GetRouteTargetGroupResponseBodyRouteTargetMemberList[];
  /**
   * @remarks
   * The status of the route target group. Values:
   * - **Recovering**: In the process of switching back to the primary 
   * - **Switched**: The primary and secondary have been switched 
   * - **Available**: Available 
   * - **Abnormal**: Secondary instance is abnormal 
   * - **Pending**: In the process of being created 
   * - **Switching**: In the process of switching between primary and secondary 
   * - **Deleting**: In the process of being deleted 
   * - **Unavailable**: Both primary and secondary instances are abnormal
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * Tags of the route target group.
   */
  tags?: GetRouteTargetGroupResponseBodyTags[];
  /**
   * @remarks
   * ID of the VPC to which the route target group belongs.
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

