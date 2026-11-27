// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRouteTargetGroupRequestRouteTargetMemberList extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the member in the routing target group.
   * 
   * This parameter is required.
   * 
   * @example
   * ep-xxxx
   */
  memberId?: string;
  /**
   * @remarks
   * The type of the member in the route target group.
   * 
   * Supported types:
   * 
   * - **GatewayLoadBalancerEndpoint**
   * 
   * In active/standby mode, all members in the route target group must be of the same type.
   * 
   * This parameter is required.
   * 
   * @example
   * GatewayLoadBalancerEndpoint
   */
  memberType?: string;
  /**
   * @remarks
   * The weight of the member in the route target group. Valid values:
   * 
   * - **100**: The member is the primary instance.
   * - **0**: The member is the secondary instance.
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
   * The tag key of the resource. You can specify up to 20 tag keys. If you specify this parameter, you cannot enter an empty string.
   * 
   * A tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. If you specify this parameter, you can enter an empty string.
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

export class CreateRouteTargetGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The client token can only contain ASCII characters. Note: If you do not specify this parameter, the system automatically uses the RequestId of the API request as the client token. The RequestId of each API request is different.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe6****
   */
  clientToken?: string;
  /**
   * @remarks
   * The configuration mode of the route target group. Valid values:
   * 
   * - **Active-Standby**: Active/standby mode.
   * 
   * This parameter is required.
   * 
   * @example
   * Active-Standby
   */
  configMode?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run without executing the operation.
   */
  dryRun?: boolean;
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
   * The region ID of the route target group. You can call the DescribeRegions operation to obtain the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
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
   * The list of members in the route target group.
   * 
   * In active/standby mode, the following limits apply to the members of the route target group:
   * 
   * 1. The number of members in the route target group must be 2.
   * 2. The members of the route target group must belong to different zones.
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
      dryRun: 'DryRun',
      ipVersion: 'IpVersion',
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
      dryRun: 'boolean',
      ipVersion: 'string',
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

