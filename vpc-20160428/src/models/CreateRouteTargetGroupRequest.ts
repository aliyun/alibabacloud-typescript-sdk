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
   * The type of the route target group member.
   * 
   * Currently supported types:
   * 
   * - **GatewayLoadBalancerEndpoint**
   * 
   * In Active-Standby mode, all members of the route target group must have the same type.
   * 
   * This parameter is required.
   * 
   * @example
   * GatewayLoadBalancerEndpoint
   */
  memberType?: string;
  /**
   * @remarks
   * The weight value of the route target group member. Values:
   * 
   * - **100**: Indicates the member is a primary instance.
   * - **0**: Indicates the member is a standby instance.
   * 
   * The weight value can only be set during creation and cannot be modified.
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
   * The tag key of the resource. Up to 20 tag keys are supported. If you need to pass this value, you cannot input an empty string.
   * 
   * A tag key can have up to 128 characters and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. Up to 20 tag values are supported. If you need to pass this value, you can input an empty string.
   * 
   * A tag value can have up to 128 characters and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
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
   * Client token used to ensure the idempotence of the request. Generate a parameter value from your client to ensure that it is unique across different requests. ClientToken supports only ASCII characters. Note: If you do not specify this, the system automatically uses the RequestId of the API request as the ClientToken identifier. Each API request has a different RequestId.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe6****
   */
  clientToken?: string;
  /**
   * @remarks
   * The configuration mode of the route target group. Supported modes:
   * 
   * - **Active-Standby**: Active-Standby mode.
   * 
   * This parameter is required.
   * 
   * @example
   * Active-Standby
   */
  configMode?: string;
  /**
   * @remarks
   * The region ID to which the route target group belongs. You can obtain the region ID by calling the DescribeRegions interface.
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
   * For more information about resource groups, see [What is a Resource Group](https://help.aliyun.com/document_detail/2381067.html).
   * 
   * @example
   * rg-acfmxazffggds****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The description of the route target group.
   * 
   * The description length must be between 1 and 256 characters, and cannot start with http:// or https://.
   * 
   * @example
   * myRouteTargetGroupDescription
   */
  routeTargetGroupDescription?: string;
  /**
   * @remarks
   * The name of the route target group.
   * 
   * The name length must be between 1 and 128 characters, and cannot start with http:// or https://.
   * 
   * @example
   * myRouteTargetGroupName
   */
  routeTargetGroupName?: string;
  /**
   * @remarks
   * The member list of the route target group.
   * 
   * In Active-Standby mode, the following restrictions apply to the members of the route target group:
   * 
   * 1. The number of route target group members must be 2.
   * 2. The route target group members must belong to different availability zones.
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

