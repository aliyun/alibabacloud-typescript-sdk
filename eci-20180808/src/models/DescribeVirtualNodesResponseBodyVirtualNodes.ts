// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVirtualNodesResponseBodyVirtualNodesEvents } from "./DescribeVirtualNodesResponseBodyVirtualNodesEvents";
import { DescribeVirtualNodesResponseBodyVirtualNodesTags } from "./DescribeVirtualNodesResponseBodyVirtualNodesTags";


export class DescribeVirtualNodesResponseBodyVirtualNodes extends $dara.Model {
  /**
   * @remarks
   * The time when the virtual node was created. The time follows the RFC 3339 standard and is displayed in UTC.
   * 
   * @example
   * 2021-09-08T15:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The events about the virtual node.
   */
  events?: DescribeVirtualNodesResponseBodyVirtualNodesEvents[];
  /**
   * @remarks
   * The public IP address of the virtual node.
   * 
   * @example
   * 192.0.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the virtual node.
   * 
   * @example
   * 10.19.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The ID of the region in which the virtual node resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the virtual node belongs.
   * 
   * @example
   * rg-uf66jeqopgqa9hdn****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the virtual node. Valid values:
   * 
   * *   Pending
   * *   Ready
   * *   Failed
   * 
   * @example
   * Ready
   */
  status?: string;
  /**
   * @remarks
   * The tags that are bound to the virtual node.
   */
  tags?: DescribeVirtualNodesResponseBodyVirtualNodesTags[];
  /**
   * @remarks
   * The ID of the virtual node.
   * 
   * @example
   * vnd-2ze960zkdqrldeaw****
   */
  virtualNodeId?: string;
  /**
   * @remarks
   * The name of the virtual node.
   * 
   * @example
   * testNode
   */
  virtualNodeName?: string;
  /**
   * @remarks
   * The ID of the security group to which the virtual node belongs.
   * 
   * @example
   * sg-2zeeyaaxlkq9sppl****
   */
  virtualNodeSecurityGroupId?: string;
  /**
   * @remarks
   * The ID of the vSwitch with which the virtual node is associated.
   * 
   * @example
   * vsw-2ze23nqzig8inprou****
   */
  virtualNodeVSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the virtual node belongs.
   * 
   * @example
   * vpc-1vzjjflab6wvjox****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      events: 'Events',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
      virtualNodeId: 'VirtualNodeId',
      virtualNodeName: 'VirtualNodeName',
      virtualNodeSecurityGroupId: 'VirtualNodeSecurityGroupId',
      virtualNodeVSwitchId: 'VirtualNodeVSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      events: { 'type': 'array', 'itemType': DescribeVirtualNodesResponseBodyVirtualNodesEvents },
      internetIp: 'string',
      intranetIp: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeVirtualNodesResponseBodyVirtualNodesTags },
      virtualNodeId: 'string',
      virtualNodeName: 'string',
      virtualNodeSecurityGroupId: 'string',
      virtualNodeVSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
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

