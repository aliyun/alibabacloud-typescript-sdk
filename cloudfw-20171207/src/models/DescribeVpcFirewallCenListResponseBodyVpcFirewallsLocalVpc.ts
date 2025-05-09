// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpcVpcCidrTableList } from "./DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpcVpcCidrTableList";


export class DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpc extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the VPC is granted the required permissions. The value is fixed as **authorized**, which indicates that the VPC is granted the required permissions.
   * 
   * @example
   * authorized
   */
  authorizationStatus?: string;
  /**
   * @remarks
   * An array consisting of the CIDR blocks that are protected by the VPC firewall.
   */
  defendCidrList?: string[];
  /**
   * @remarks
   * The ID of the specified vSwitch when the routing mode is manual.
   * 
   * @example
   * vsw-zeq4o875u****
   */
  manualVSwitchId?: string;
  /**
   * @remarks
   * The ID of the network instance.
   * 
   * @example
   * vpc-2zefk9fbn8j7v585g****
   */
  networkInstanceId?: string;
  /**
   * @remarks
   * The name of the network instance.
   * 
   * @example
   * Test VPC
   */
  networkInstanceName?: string;
  /**
   * @remarks
   * The type of the network instance. Valid values:
   * 
   * *   **VPC**
   * *   **VBR**
   * *   **CCN**
   * 
   * @example
   * VPC
   */
  networkInstanceType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the VPC belongs.
   * 
   * @example
   * 158039427902****
   */
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the VPC.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The routing mode of the VPC firewall. Valid values:
   * 
   * *   **auto**: automatic mode
   * *   **manual**: manual mode
   * 
   * @example
   * auto
   */
  routeMode?: string;
  /**
   * @remarks
   * Indicates whether the manual routing mode is supported. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 0
   */
  supportManualMode?: string;
  /**
   * @remarks
   * The edition of the CEN transit router. Valid values:
   * 
   * *   **Basic**: Basic Edition transit router
   * *   **Enterprise**: Enterprise Edition transit router
   * 
   * @example
   * Basic
   */
  transitRouterType?: string;
  /**
   * @remarks
   * An array that consists of the CIDR blocks of the VPC.
   */
  vpcCidrTableList?: DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpcVpcCidrTableList[];
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-8vbwbo90rq0anm6t****
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * Test instance
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationStatus: 'AuthorizationStatus',
      defendCidrList: 'DefendCidrList',
      manualVSwitchId: 'ManualVSwitchId',
      networkInstanceId: 'NetworkInstanceId',
      networkInstanceName: 'NetworkInstanceName',
      networkInstanceType: 'NetworkInstanceType',
      ownerId: 'OwnerId',
      regionNo: 'RegionNo',
      routeMode: 'RouteMode',
      supportManualMode: 'SupportManualMode',
      transitRouterType: 'TransitRouterType',
      vpcCidrTableList: 'VpcCidrTableList',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationStatus: 'string',
      defendCidrList: { 'type': 'array', 'itemType': 'string' },
      manualVSwitchId: 'string',
      networkInstanceId: 'string',
      networkInstanceName: 'string',
      networkInstanceType: 'string',
      ownerId: 'number',
      regionNo: 'string',
      routeMode: 'string',
      supportManualMode: 'string',
      transitRouterType: 'string',
      vpcCidrTableList: { 'type': 'array', 'itemType': DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpcVpcCidrTableList },
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.defendCidrList)) {
      $dara.Model.validateArray(this.defendCidrList);
    }
    if(Array.isArray(this.vpcCidrTableList)) {
      $dara.Model.validateArray(this.vpcCidrTableList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

