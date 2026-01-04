// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRouteTargetGroupRequestRouteTargetMemberList extends $dara.Model {
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
   * The member type of the route target group. 
   * 
   * Currently supported types: - **GatewayLoadBalancerEndpoint** 
   * 
   * In active-standby mode, all members of the route target group must be of the same type.
   * 
   * @example
   * GatewayLoadBalancerEndpoint
   */
  memberType?: string;
  /**
   * @remarks
   * The weight value of the route target group member. Values:
   * - 100: indicates the member is the primary instance. 
   * - 0: indicates the member is the backup instance.
   * The weight value can only be set during creation and cannot be modified.
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
   * Client Token, used to ensure the idempotence of requests. Generate a unique value for this parameter from your client for each request. ClientToken supports only ASCII characters. Note that if you do not specify this, the system will automatically use the RequestId of the API request as the ClientToken identifier. The RequestId may differ for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the region to which the route target group instance belongs. You can obtain the region ID by calling the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Description of the route target group. 
   * 
   * The description length should be between 1 to 256 characters and must not start with http:// or https://.
   * 
   * @example
   * myRouteTargetGroupDescription
   */
  routeTargetGroupDescription?: string;
  /**
   * @remarks
   * The ID of the route target group instance.
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
   * The name length should be between 1 and 128 characters, and cannot start with http:// or https://.
   * 
   * @example
   * myRouteTargetGroupName
   */
  routeTargetGroupName?: string;
  /**
   * @remarks
   * List of members in the route target group.
   * Under the primary-standby mode, there are the following restrictions on the members of the route target group:
   * 1. The number of members in the route target group must be 2. 
   * 2. The members of the route target group must belong to different availability zones.
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

