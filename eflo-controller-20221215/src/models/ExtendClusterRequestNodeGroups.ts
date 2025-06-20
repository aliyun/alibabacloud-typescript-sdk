// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExtendClusterRequestNodeGroupsNodeTag } from "./ExtendClusterRequestNodeGroupsNodeTag";
import { ExtendClusterRequestNodeGroupsNodes } from "./ExtendClusterRequestNodeGroupsNodes";


export class ExtendClusterRequestNodeGroups extends $dara.Model {
  /**
   * @remarks
   * The number of nodes to be purchased. Valid values: 0 to 500. If you set the value of the Amount parameter to 0, you do not want to purchase nodes and scale out the cluster by using existing nodes. If you set the value of the Amount parameter to a value ranging from 1 to 500, you want to purchase a certain number of nodes for cluster scale-out. Default value: 0.
   * 
   * @example
   * 4
   */
  amount?: number;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the purchased nodes. This parameter takes effect only when the Amount parameter is not set to 0 and the ChargeType parameter is set to PrePaid. Valid values: true and false. Default value: False.
   * 
   * @example
   * True
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The billing method of the node. This parameter does not take effect if you set the Amount parameter to 0. Valid values: PrePaid (subscription) and PostPaid (pay-as-you-go). Default value: PrePaid.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The hostname for the purchased node. This parameter does not take effect if you set the Amount parameter to 0.
   */
  hostnames?: string[];
  /**
   * @remarks
   * The logon password of the purchased node. This parameter does not take effect if you set the Amount parameter to 0.
   * 
   * @example
   * Addk(*78
   */
  loginPassword?: string;
  /**
   * @remarks
   * The node group ID.
   * 
   * @example
   * i16d4883a46cbadeb4bc9
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  nodeTag?: ExtendClusterRequestNodeGroupsNodeTag[];
  /**
   * @remarks
   * The nodes.
   */
  nodes?: ExtendClusterRequestNodeGroupsNodes[];
  /**
   * @remarks
   * The duration of the purchased node. Unit: months. Valid values: 1, 6, 12, 24, 36, and 48. This parameter takes effect only when the Amount parameter is not set to 0 and the ChargeType parameter is set to PrePaid.
   * 
   * @example
   * 6
   */
  period?: number;
  /**
   * @remarks
   * The user data.
   * 
   * @example
   * #!/bin/sh
   * echo "Hello World. The time is now $(date -R)!" | tee /root/userdata_test.txt
   */
  userData?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-0jly2d537ejphyq6h13ke
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-zq1econyv63tvyci5hefw
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      autoRenew: 'AutoRenew',
      chargeType: 'ChargeType',
      hostnames: 'Hostnames',
      loginPassword: 'LoginPassword',
      nodeGroupId: 'NodeGroupId',
      nodeTag: 'NodeTag',
      nodes: 'Nodes',
      period: 'Period',
      userData: 'UserData',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      autoRenew: 'boolean',
      chargeType: 'string',
      hostnames: { 'type': 'array', 'itemType': 'string' },
      loginPassword: 'string',
      nodeGroupId: 'string',
      nodeTag: { 'type': 'array', 'itemType': ExtendClusterRequestNodeGroupsNodeTag },
      nodes: { 'type': 'array', 'itemType': ExtendClusterRequestNodeGroupsNodes },
      period: 'number',
      userData: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hostnames)) {
      $dara.Model.validateArray(this.hostnames);
    }
    if(Array.isArray(this.nodeTag)) {
      $dara.Model.validateArray(this.nodeTag);
    }
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

