// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExtendClusterRequestNodeGroupsNodeTag } from "./ExtendClusterRequestNodeGroupsNodeTag";
import { ExtendClusterRequestNodeGroupsNodes } from "./ExtendClusterRequestNodeGroupsNodes";


export class ExtendClusterRequestNodeGroups extends $dara.Model {
  /**
   * @remarks
   * Number of nodes to purchase. Value range: 0–500.
   * 
   * If the Amount parameter is set to 0, no nodes will be purchased. Existing nodes will be used for scaling.
   * If the Amount parameter is set to 1–500, the specified number of nodes will be purchased and used for scaling.
   * Default value: 0
   * 
   * @example
   * 4
   */
  amount?: number;
  /**
   * @remarks
   * Whether to enable auto-renewal for purchased nodes.
   * Conditions: This parameter takes effect only when the Amount parameter is set to a non-zero value and the ChargeType is PrePaid.
   * Valid values:
   * 
   * True: Enable auto-renewal.
   * False: Disable auto-renewal.
   * Default value: False
   * 
   * @example
   * True
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * Billing method for nodes.
   * This parameter takes effect only when the Amount parameter is set to a value other than 0.
   * Valid values:
   * 
   * PrePaid: Subscription (prepaid).
   * PostPaid: Pay-as-you-go (postpaid).
   * Default value: PrePaid
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The hostnames of purchased nodes.
   * This parameter takes effect only when the Amount parameter is set to a non-zero value.
   */
  hostnames?: string[];
  /**
   * @remarks
   * The login password of node.
   * 
   * @example
   * Addk(*78
   */
  loginPassword?: string;
  /**
   * @remarks
   * Node Group ID
   * 
   * @example
   * i16d4883a46cbadeb4bc9
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The tag of node
   */
  nodeTag?: ExtendClusterRequestNodeGroupsNodeTag[];
  /**
   * @remarks
   * List of Nodes
   */
  nodes?: ExtendClusterRequestNodeGroupsNodes[];
  /**
   * @remarks
   * Purchase duration for nodes (unit: month).
   * Valid values: 1, 6, 12, 24, 36, 48.
   * Conditions: This parameter takes effect only when the Amount parameter is set to a non-zero value and the ChargeType is PrePaid.
   * 
   * @example
   * 6
   */
  period?: number;
  /**
   * @remarks
   * Custom Data
   * 
   * @example
   * #!/bin/sh
   * echo "Hello World. The time is now $(date -R)!" | tee /root/userdata_test.txt
   */
  userData?: string;
  /**
   * @remarks
   * VSwitch Id
   * 
   * @example
   * vsw-0jly2d537ejphyq6h13ke
   */
  vSwitchId?: string;
  /**
   * @remarks
   * Vpc Id
   * 
   * @example
   * vpc-zq1econyv63tvyci5hefw
   */
  vpcId?: string;
  /**
   * @remarks
   * Zone ID
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

