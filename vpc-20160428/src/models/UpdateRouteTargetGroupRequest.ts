// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRouteTargetGroupRequestRouteTargetMemberList extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the route target group member.
   * 
   * @example
   * ep-xxxx
   */
  memberId?: string;
  /**
   * @remarks
   * The member type of the route target group.
   * 
   * Currently supported type:
   * 
   * - **GatewayLoadBalancerEndpoint**
   * 
   * In active/standby mode, all members of the route target group must be of the same type.
   * 
   * @example
   * GatewayLoadBalancerEndpoint
   */
  memberType?: string;
  /**
   * @remarks
   * The weight of the route target group member. Valid values:
   * 
   * - 100: The member is the active instance.
   * - 0: The member is the standby instance.
   * 
   * The weight can only be set during creation and cannot be modified.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      memberId: 'MemberId',
      memberType: 'MemberType',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class UpdateRouteTargetGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters. If you do not specify this parameter, the system automatically uses the RequestId value as the ClientToken value. The RequestId value may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the route target group instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The description of the route target group. 
   * 
   * The description must be 1 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * myRouteTargetGroupDescription
   */
  routeTargetGroupDescription?: string;
  /**
   * @remarks
   * The routing target group instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rtg-xxx
   */
  routeTargetGroupId?: string;
  /**
   * @remarks
   * The name of the route target group.
   * 
   * The name must be 1 to 128 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * myRouteTargetGroupName
   */
  routeTargetGroupName?: string;
  /**
   * @remarks
   * The member list of the route target group.
   * 
   * In active/standby mode, the following limits apply to route target group members:
   * 
   * 1. The number of route target group members must be 2.
   * 2. The route target group members must belong to different zones.
   */
  routeTargetMemberList?: UpdateRouteTargetGroupRequestRouteTargetMemberList[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      routeTargetGroupDescription: 'RouteTargetGroupDescription',
      routeTargetGroupId: 'RouteTargetGroupId',
      routeTargetGroupName: 'RouteTargetGroupName',
      routeTargetMemberList: 'RouteTargetMemberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      routeTargetGroupDescription: 'string',
      routeTargetGroupId: 'string',
      routeTargetGroupName: 'string',
      routeTargetMemberList: { 'type': 'array', 'itemType': UpdateRouteTargetGroupRequestRouteTargetMemberList },
    };
  }

  validate() {
    if(Array.isArray(this.routeTargetMemberList)) {
      $dara.Model.validateArray(this.routeTargetMemberList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

