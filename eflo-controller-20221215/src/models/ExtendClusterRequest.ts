// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExtendClusterRequestIpAllocationPolicyBondPolicyBonds extends $dara.Model {
  /**
   * @remarks
   * The bond name.
   * 
   * @example
   * Bond0
   */
  name?: string;
  /**
   * @remarks
   * The cluster subnet from which the IP address is allocated.
   * 
   * @example
   * subnet-3od2fe
   */
  subnet?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      subnet: 'Subnet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      subnet: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendClusterRequestIpAllocationPolicyBondPolicy extends $dara.Model {
  /**
   * @remarks
   * The default bond cluster subnet.
   * 
   * @example
   * subnet-3od2fe
   */
  bondDefaultSubnet?: string;
  /**
   * @remarks
   * The bond information.
   */
  bonds?: ExtendClusterRequestIpAllocationPolicyBondPolicyBonds[];
  static names(): { [key: string]: string } {
    return {
      bondDefaultSubnet: 'BondDefaultSubnet',
      bonds: 'Bonds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bondDefaultSubnet: 'string',
      bonds: { 'type': 'array', 'itemType': ExtendClusterRequestIpAllocationPolicyBondPolicyBonds },
    };
  }

  validate() {
    if(Array.isArray(this.bonds)) {
      $dara.Model.validateArray(this.bonds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendClusterRequestIpAllocationPolicyMachineTypePolicyBonds extends $dara.Model {
  /**
   * @remarks
   * The bond name.
   * 
   * @example
   * Bond0
   */
  name?: string;
  /**
   * @remarks
   * The cluster subnet from which the IP address is allocated.
   * 
   * @example
   * subnet-fdo3dv
   */
  subnet?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      subnet: 'Subnet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      subnet: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendClusterRequestIpAllocationPolicyMachineTypePolicy extends $dara.Model {
  /**
   * @remarks
   * The bond information.
   */
  bonds?: ExtendClusterRequestIpAllocationPolicyMachineTypePolicyBonds[];
  /**
   * @remarks
   * The machine type.
   * 
   * @example
   * efg1.nvga1
   */
  machineType?: string;
  static names(): { [key: string]: string } {
    return {
      bonds: 'Bonds',
      machineType: 'MachineType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bonds: { 'type': 'array', 'itemType': ExtendClusterRequestIpAllocationPolicyMachineTypePolicyBonds },
      machineType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bonds)) {
      $dara.Model.validateArray(this.bonds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendClusterRequestIpAllocationPolicyNodePolicyBonds extends $dara.Model {
  /**
   * @remarks
   * The bond name.
   * 
   * @example
   * Bond0
   */
  name?: string;
  /**
   * @remarks
   * The cluster subnet from which the IP address is allocated.
   * 
   * @example
   * subnet-fdo3dv
   */
  subnet?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      subnet: 'Subnet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      subnet: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendClusterRequestIpAllocationPolicyNodePolicy extends $dara.Model {
  /**
   * @remarks
   * The bond information.
   */
  bonds?: ExtendClusterRequestIpAllocationPolicyNodePolicyBonds[];
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * a100-xa5dza28-0085
   */
  hostname?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * i-3fdodw2
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      bonds: 'Bonds',
      hostname: 'Hostname',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bonds: { 'type': 'array', 'itemType': ExtendClusterRequestIpAllocationPolicyNodePolicyBonds },
      hostname: 'string',
      nodeId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bonds)) {
      $dara.Model.validateArray(this.bonds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendClusterRequestIpAllocationPolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies the cluster subnet ID based on the bond name.
   */
  bondPolicy?: ExtendClusterRequestIpAllocationPolicyBondPolicy;
  /**
   * @remarks
   * The machine type allocation policy.
   */
  machineTypePolicy?: ExtendClusterRequestIpAllocationPolicyMachineTypePolicy[];
  /**
   * @remarks
   * The node allocation policy.
   */
  nodePolicy?: ExtendClusterRequestIpAllocationPolicyNodePolicy[];
  static names(): { [key: string]: string } {
    return {
      bondPolicy: 'BondPolicy',
      machineTypePolicy: 'MachineTypePolicy',
      nodePolicy: 'NodePolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bondPolicy: ExtendClusterRequestIpAllocationPolicyBondPolicy,
      machineTypePolicy: { 'type': 'array', 'itemType': ExtendClusterRequestIpAllocationPolicyMachineTypePolicy },
      nodePolicy: { 'type': 'array', 'itemType': ExtendClusterRequestIpAllocationPolicyNodePolicy },
    };
  }

  validate() {
    if(this.bondPolicy && typeof (this.bondPolicy as any).validate === 'function') {
      (this.bondPolicy as any).validate();
    }
    if(Array.isArray(this.machineTypePolicy)) {
      $dara.Model.validateArray(this.machineTypePolicy);
    }
    if(Array.isArray(this.nodePolicy)) {
      $dara.Model.validateArray(this.nodePolicy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendClusterRequestNodeGroupsHyperNodesDataDisk extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable burst (I/O burst).
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The cloud disk type. Valid values:
   * 
   *  - cloud_essd: ESSD.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether the data cloud disk is deleted when the node is unsubscribed.
   * 
   * @example
   * True
   */
  deleteWithNode?: boolean;
  /**
   * @remarks
   * The performance level (PL) when an ESSD is used as a system cloud disk. Valid values:
   * - PL0: a maximum of 10,000 random read/write IOPS per disk.
   * - PL1: a maximum of 50,000 random read/write IOPS per disk.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The provisioned performance (read/write IOPS) of a single ESSD AutoPL cloud disk.
   * 
   * @example
   * 9600
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The cloud disk size. Unit: GiB.
   * 
   * @example
   * 10
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      burstingEnabled: 'BurstingEnabled',
      category: 'Category',
      deleteWithNode: 'DeleteWithNode',
      performanceLevel: 'PerformanceLevel',
      provisionedIops: 'ProvisionedIops',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      burstingEnabled: 'boolean',
      category: 'string',
      deleteWithNode: 'boolean',
      performanceLevel: 'string',
      provisionedIops: 'number',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendClusterRequestNodeGroupsHyperNodes extends $dara.Model {
  /**
   * @remarks
   * The list of cloud disk information.
   */
  dataDisk?: ExtendClusterRequestNodeGroupsHyperNodesDataDisk[];
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * liliang-rmn7stf7-0000
   */
  hostname?: string;
  /**
   * @remarks
   * The hyper node ID.
   * 
   * @example
   * e01-cn-2r42tmj4z02
   */
  hyperNodeId?: string;
  /**
   * @remarks
   * The logon password.
   * 
   * @example
   * ***
   */
  loginPassword?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-uf68xu2102avz7pl3t5d
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-8vbobo4cvzsygw98f4j6b
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-0jl8gs7qmx89739e210dn
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      dataDisk: 'DataDisk',
      hostname: 'Hostname',
      hyperNodeId: 'HyperNodeId',
      loginPassword: 'LoginPassword',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDisk: { 'type': 'array', 'itemType': ExtendClusterRequestNodeGroupsHyperNodesDataDisk },
      hostname: 'string',
      hyperNodeId: 'string',
      loginPassword: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataDisk)) {
      $dara.Model.validateArray(this.dataDisk);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendClusterRequestNodeGroupsNodeTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the node.
   * 
   * @example
   * key_my
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the node.
   * 
   * @example
   * value_my
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

export class ExtendClusterRequestNodeGroupsNodesDataDisk extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable burst (I/O burst).
   * 
   * @example
   * true
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether the data cloud disk is deleted when the node is unsubscribed.
   * 
   * @example
   * true
   */
  deleteWithNode?: boolean;
  /**
   * @remarks
   * The performance metric of the data cloud disk.
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The provisioned performance (IOPS). Valid values: 0 to 50000.
   * 
   * @example
   * 1000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The cloud disk size.
   * 
   * @example
   * 80
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      burstingEnabled: 'BurstingEnabled',
      category: 'Category',
      deleteWithNode: 'DeleteWithNode',
      performanceLevel: 'PerformanceLevel',
      provisionedIops: 'ProvisionedIops',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      burstingEnabled: 'boolean',
      category: 'string',
      deleteWithNode: 'boolean',
      performanceLevel: 'string',
      provisionedIops: 'number',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendClusterRequestNodeGroupsNodes extends $dara.Model {
  /**
   * @remarks
   * The data cloud disk specifications.
   */
  dataDisk?: ExtendClusterRequestNodeGroupsNodesDataDisk[];
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * d044d220-33fd-11ed-86a6
   */
  hostname?: string;
  /**
   * @remarks
   * The logon password.
   * 
   * @example
   * ***
   */
  loginPassword?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * e01-cn-zvp2zdpy601
   */
  nodeId?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-uf68xu2102avz7pl3t5d
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp169pi5fj151rrms4sia
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-0jlasms92fdxqd3wlf8ny
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      dataDisk: 'DataDisk',
      hostname: 'Hostname',
      loginPassword: 'LoginPassword',
      nodeId: 'NodeId',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDisk: { 'type': 'array', 'itemType': ExtendClusterRequestNodeGroupsNodesDataDisk },
      hostname: 'string',
      loginPassword: 'string',
      nodeId: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataDisk)) {
      $dara.Model.validateArray(this.dataDisk);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendClusterRequestNodeGroups extends $dara.Model {
  /**
   * @remarks
   * The number of nodes to purchase. Valid values: 0 to 500. If Amount is set to 0, no nodes are purchased and existing nodes are used for scale-out. If Amount is set to a value from 1 to 500, the specified number of nodes are purchased and used for scale-out. Default value: 0
   * 
   * @example
   * 4
   */
  amount?: number;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the purchased nodes. This parameter takes effect when Amount is not 0 and ChargeType is set to PREPAY or POSTPAY. Valid values: True: Enable auto-renewal. False: Disable auto-renewal. Default value: False.
   * 
   * @example
   * True
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The billing method of the nodes. This parameter does not take effect when Amount is set to 0. Valid values: PREPAY: subscription. POSTPAY: pay-as-you-go. Default value: PREPAY.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The hostnames of the purchased nodes. This parameter does not take effect when Amount is set to 0.
   */
  hostnames?: string[];
  /**
   * @remarks
   * The list of hyper nodes.
   */
  hyperNodes?: ExtendClusterRequestNodeGroupsHyperNodes[];
  /**
   * @remarks
   * The logon password of the purchased nodes. This parameter does not take effect when Amount is set to 0.
   * 
   * @example
   * skkO(*89Y
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
   * The node tags.
   */
  nodeTag?: ExtendClusterRequestNodeGroupsNodeTag[];
  /**
   * @remarks
   * The node list.
   */
  nodes?: ExtendClusterRequestNodeGroupsNodes[];
  /**
   * @remarks
   * The subscription duration of the purchased nodes. Unit: months. Valid values: 1, 6, 12, 24, 36, and 48. This parameter takes effect when Amount is not 0 and ChargeType is set to PREPAY.
   * 
   * @example
   * 6
   */
  period?: number;
  /**
   * @remarks
   * The savings plan ID.
   * 
   * @example
   * spn-25e985acAWbrwEBJ
   */
  savingsPlanId?: string;
  /**
   * @remarks
   * The custom executable shell script. The script must be Base64-encoded. The maximum size of the raw data is 16 KB.
   * 
   * @example
   * ZWNobyBoZWxsbyBlY3Mh
   */
  userData?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-uf65m8xqjgy55xj9jw92n
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-0jl3b0c0ukydlfezr13n6
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
      hyperNodes: 'HyperNodes',
      loginPassword: 'LoginPassword',
      nodeGroupId: 'NodeGroupId',
      nodeTag: 'NodeTag',
      nodes: 'Nodes',
      period: 'Period',
      savingsPlanId: 'SavingsPlanId',
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
      hyperNodes: { 'type': 'array', 'itemType': ExtendClusterRequestNodeGroupsHyperNodes },
      loginPassword: 'string',
      nodeGroupId: 'string',
      nodeTag: { 'type': 'array', 'itemType': ExtendClusterRequestNodeGroupsNodeTag },
      nodes: { 'type': 'array', 'itemType': ExtendClusterRequestNodeGroupsNodes },
      period: 'number',
      savingsPlanId: 'string',
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
    if(Array.isArray(this.hyperNodes)) {
      $dara.Model.validateArray(this.hyperNodes);
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

export class ExtendClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * i15b480fbd2fcdbc2869cd80
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to skip failed nodes. Default value: False.
   * 
   * @example
   * False
   */
  ignoreFailedNodeTasks?: boolean;
  /**
   * @remarks
   * The combined IP allocation policy. Each policy can use only one policy type, and multiple policies can be combined.
   */
  ipAllocationPolicy?: ExtendClusterRequestIpAllocationPolicy[];
  /**
   * @remarks
   * The node groups.
   */
  nodeGroups?: ExtendClusterRequestNodeGroups[];
  /**
   * @remarks
   * The zone ID of the vSwitch.
   * 
   * @example
   * cn-shanghai-b
   */
  vSwitchZoneId?: string;
  /**
   * @remarks
   * The list of cluster subnets.
   */
  vpdSubnets?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      ignoreFailedNodeTasks: 'IgnoreFailedNodeTasks',
      ipAllocationPolicy: 'IpAllocationPolicy',
      nodeGroups: 'NodeGroups',
      vSwitchZoneId: 'VSwitchZoneId',
      vpdSubnets: 'VpdSubnets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      ignoreFailedNodeTasks: 'boolean',
      ipAllocationPolicy: { 'type': 'array', 'itemType': ExtendClusterRequestIpAllocationPolicy },
      nodeGroups: { 'type': 'array', 'itemType': ExtendClusterRequestNodeGroups },
      vSwitchZoneId: 'string',
      vpdSubnets: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ipAllocationPolicy)) {
      $dara.Model.validateArray(this.ipAllocationPolicy);
    }
    if(Array.isArray(this.nodeGroups)) {
      $dara.Model.validateArray(this.nodeGroups);
    }
    if(Array.isArray(this.vpdSubnets)) {
      $dara.Model.validateArray(this.vpdSubnets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

