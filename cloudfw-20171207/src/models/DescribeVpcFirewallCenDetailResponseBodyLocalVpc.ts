// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpcFirewallCenDetailResponseBodyLocalVpcEniList } from "./DescribeVpcFirewallCenDetailResponseBodyLocalVpcEniList";
import { DescribeVpcFirewallCenDetailResponseBodyLocalVpcVpcCidrTableList } from "./DescribeVpcFirewallCenDetailResponseBodyLocalVpcVpcCidrTableList";


export class DescribeVpcFirewallCenDetailResponseBodyLocalVpc extends $dara.Model {
  /**
   * @remarks
   * The ID of the connection between two network instances.
   * 
   * @example
   * tr-attach-sxig7bye51fid5****
   */
  attachmentId?: string;
  /**
   * @remarks
   * The name of the connection between two network instances.
   * 
   * @example
   * Local test
   */
  attachmentName?: string;
  /**
   * @remarks
   * An array consisting of the CIDR blocks that are protected by the VPC firewall.
   */
  defendCidrList?: string[];
  /**
   * @remarks
   * The Elastic Network Interfaces (ENIs).
   */
  eniList?: DescribeVpcFirewallCenDetailResponseBodyLocalVpcEniList[];
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
   * The ID of the VPC for which the VPC firewall is created.
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
   * The type of the network instance. The value is fixed as **VPC**.
   * 
   * @example
   * VPC
   */
  networkInstanceType?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account to which the VPC belongs.
   * 
   * @example
   * 158039427902****
   */
  ownerId?: string;
  /**
   * @remarks
   * The ID of the region in which the VPC resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The routing mode. Valid values:
   * 
   * *   auto: automatic mode
   * *   manual: manual mode
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
   * The instance ID of the CEN transit router.
   * 
   * @example
   * tr-2zetwxskej633l3u1****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The edition of the CEN transit router. Valid values:
   * 
   * *   **Basic**: Basic Edition
   * *   **Enterprise**: Enterprise Edition
   * 
   * @example
   * Basic
   */
  transitRouterType?: string;
  /**
   * @remarks
   * An array that consists of the CIDR blocks of the VPC.
   */
  vpcCidrTableList?: DescribeVpcFirewallCenDetailResponseBodyLocalVpcVpcCidrTableList[];
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
      attachmentId: 'AttachmentId',
      attachmentName: 'AttachmentName',
      defendCidrList: 'DefendCidrList',
      eniList: 'EniList',
      manualVSwitchId: 'ManualVSwitchId',
      networkInstanceId: 'NetworkInstanceId',
      networkInstanceName: 'NetworkInstanceName',
      networkInstanceType: 'NetworkInstanceType',
      ownerId: 'OwnerId',
      regionNo: 'RegionNo',
      routeMode: 'RouteMode',
      supportManualMode: 'SupportManualMode',
      transitRouterId: 'TransitRouterId',
      transitRouterType: 'TransitRouterType',
      vpcCidrTableList: 'VpcCidrTableList',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentId: 'string',
      attachmentName: 'string',
      defendCidrList: { 'type': 'array', 'itemType': 'string' },
      eniList: { 'type': 'array', 'itemType': DescribeVpcFirewallCenDetailResponseBodyLocalVpcEniList },
      manualVSwitchId: 'string',
      networkInstanceId: 'string',
      networkInstanceName: 'string',
      networkInstanceType: 'string',
      ownerId: 'string',
      regionNo: 'string',
      routeMode: 'string',
      supportManualMode: 'string',
      transitRouterId: 'string',
      transitRouterType: 'string',
      vpcCidrTableList: { 'type': 'array', 'itemType': DescribeVpcFirewallCenDetailResponseBodyLocalVpcVpcCidrTableList },
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.defendCidrList)) {
      $dara.Model.validateArray(this.defendCidrList);
    }
    if(Array.isArray(this.eniList)) {
      $dara.Model.validateArray(this.eniList);
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

