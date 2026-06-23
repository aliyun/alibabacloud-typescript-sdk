// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRouteTargetGroupRequestRouteTargetMemberList extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the route target group member.
   * 
   * This parameter is required.
   * 
   * @example
   * ep-xxxx
   */
  memberId?: string;
  /**
   * @remarks
   * The member type of the route target group.
   * 
   * Supported type:
   * 
   * - **GatewayLoadBalancerEndpoint**
   * 
   * In active/standby mode, all members of the route target group must be of the same type.
   * 
   * This parameter is required.
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
   * This parameter is required.
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

export class CreateRouteTargetGroupRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
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

export class CreateRouteTargetGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters. If you do not specify this parameter, the system automatically uses the RequestId value as the ClientToken value. The RequestId value is different for each API request.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe6****
   */
  clientToken?: string;
  /**
   * @remarks
   * The configuration mode of the route target group. Valid values:
   * 
   * - **Active-Standby**: active/standby mode.
   * 
   * This parameter is required.
   * 
   * @example
   * Active-Standby
   */
  configMode?: string;
  /**
   * @remarks
   * The region ID of the route target group. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * For more information about resource groups, see [What is a resource group?](https://help.aliyun.com/document_detail/2381067.html).
   * 
   * @example
   * rg-acfmxazffggds****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The description of the route target group.
   * The description must be 1 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * myRouteTargetGroupDescription
   */
  routeTargetGroupDescription?: string;
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
   * 2. The route target group members must be in different zones.
   * 
   * This parameter is required.
   */
  routeTargetMemberList?: CreateRouteTargetGroupRequestRouteTargetMemberList[];
  /**
   * @remarks
   * The tags of the resource.
   */
  tag?: CreateRouteTargetGroupRequestTag[];
  /**
   * @remarks
   * The ID of the VPC to which the route target group belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-xxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configMode: 'ConfigMode',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      routeTargetGroupDescription: 'RouteTargetGroupDescription',
      routeTargetGroupName: 'RouteTargetGroupName',
      routeTargetMemberList: 'RouteTargetMemberList',
      tag: 'Tag',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configMode: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      routeTargetGroupDescription: 'string',
      routeTargetGroupName: 'string',
      routeTargetMemberList: { 'type': 'array', 'itemType': CreateRouteTargetGroupRequestRouteTargetMemberList },
      tag: { 'type': 'array', 'itemType': CreateRouteTargetGroupRequestTag },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.routeTargetMemberList)) {
      $dara.Model.validateArray(this.routeTargetMemberList);
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

