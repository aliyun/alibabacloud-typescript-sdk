// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExtendClusterRequestIpAllocationPolicyBondPolicyBonds extends $dara.Model {
  /**
   * @remarks
   * Bond name
   * 
   * @example
   * Bond0
   */
  name?: string;
  /**
   * @remarks
   * IP source cluster subnet
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
   * Default bond cluster subnet
   * 
   * @example
   * subnet-3od2fe
   */
  bondDefaultSubnet?: string;
  /**
   * @remarks
   * Bond information
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
   * Bond name
   * 
   * @example
   * Bond0
   */
  name?: string;
  /**
   * @remarks
   * IP source cluster subnet
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
   * Bond information
   */
  bonds?: ExtendClusterRequestIpAllocationPolicyMachineTypePolicyBonds[];
  /**
   * @remarks
   * Machine type
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
   * Bond name
   * 
   * @example
   * Bond0
   */
  name?: string;
  /**
   * @remarks
   * IP source cluster subnet
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
   * Bond information
   */
  bonds?: ExtendClusterRequestIpAllocationPolicyNodePolicyBonds[];
  /**
   * @remarks
   * Hostname
   * 
   * @example
   * a100-xa5dza28-0085
   */
  hostname?: string;
  /**
   * @remarks
   * Node ID
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
   * Specify the cluster subnet ID based on the bond name
   */
  bondPolicy?: ExtendClusterRequestIpAllocationPolicyBondPolicy;
  /**
   * @remarks
   * Machine type allocation policy
   */
  machineTypePolicy?: ExtendClusterRequestIpAllocationPolicyMachineTypePolicy[];
  /**
   * @remarks
   * Node allocation policy
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
  category?: string;
  deleteWithNode?: boolean;
  performanceLevel?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      deleteWithNode: 'DeleteWithNode',
      performanceLevel: 'PerformanceLevel',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      deleteWithNode: 'boolean',
      performanceLevel: 'string',
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
  dataDisk?: ExtendClusterRequestNodeGroupsHyperNodesDataDisk[];
  hostname?: string;
  hyperNodeId?: string;
  loginPassword?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      dataDisk: 'DataDisk',
      hostname: 'Hostname',
      hyperNodeId: 'HyperNodeId',
      loginPassword: 'LoginPassword',
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
   * Node tag key
   * 
   * @example
   * key_my
   */
  key?: string;
  /**
   * @remarks
   * Node tag value
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
  burstingEnabled?: boolean;
  /**
   * @remarks
   * Type
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * Whether the data disk is deleted with the node
   * 
   * @example
   * true
   */
  deleteWithNode?: boolean;
  /**
   * @remarks
   * Data Disk Performance Level
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  provisionedIops?: number;
  /**
   * @remarks
   * Disk Size
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
   * Data Disk Specifications
   */
  dataDisk?: ExtendClusterRequestNodeGroupsNodesDataDisk[];
  /**
   * @remarks
   * Hostname
   * 
   * @example
   * d044d220-33fd-11ed-86a6
   */
  hostname?: string;
  /**
   * @remarks
   * Login Password
   * 
   * @example
   * ***
   */
  loginPassword?: string;
  /**
   * @remarks
   * Node ID
   * 
   * @example
   * e01-cn-zvp2zdpy601
   */
  nodeId?: string;
  /**
   * @remarks
   * VSwitch ID
   * 
   * @example
   * vsw-bp169pi5fj151rrms4sia
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPC ID
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
   * Number of nodes to purchase. Range: 0~500. If the Amount parameter is set to 0, it means no new nodes will be purchased and existing nodes will be used for scaling. If the Amount parameter is set to 1~500, it means a certain number of nodes will be purchased and used for scaling. Default value: 0
   * 
   * @example
   * 4
   */
  amount?: number;
  /**
   * @remarks
   * Whether to automatically renew the purchased nodes. This parameter takes effect when the Amount parameter is not 0 and the ChargeType is set to PrePaid. Valid values: True (auto-renewal); False (no auto-renewal). Default value: False
   * 
   * @example
   * True
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * Payment method for the nodes. When the Amount parameter is set to 0, this parameter does not take effect. Valid values: PrePaid (Subscription); PostPaid (Pay-As-You-Go). Default value: PrePaid.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * Set the hostnames for the purchased nodes. This parameter does not take effect when the Amount parameter is set to 0.
   */
  hostnames?: string[];
  hyperNodes?: ExtendClusterRequestNodeGroupsHyperNodes[];
  /**
   * @remarks
   * Set the login password for the purchased nodes. This parameter is not effective when the Amount parameter is set to 0.
   * 
   * @example
   * skkO(*89Y
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
   * Node tags
   */
  nodeTag?: ExtendClusterRequestNodeGroupsNodeTag[];
  /**
   * @remarks
   * List of Nodes
   */
  nodes?: ExtendClusterRequestNodeGroupsNodes[];
  /**
   * @remarks
   * Duration of the node purchase (in months). Valid values: 1, 6, 12, 24, 36, 48. This parameter takes effect when the Amount parameter is not 0 and the ChargeType is set to PrePaid.
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
   * VSwitch ID
   * 
   * @example
   * vsw-uf65m8xqjgy55xj9jw92n
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-0jl3b0c0ukydlfezr13n6
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
      hyperNodes: 'HyperNodes',
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
      hyperNodes: { 'type': 'array', 'itemType': ExtendClusterRequestNodeGroupsHyperNodes },
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
   * Cluster ID
   * 
   * @example
   * i15b480fbd2fcdbc2869cd80
   */
  clusterId?: string;
  /**
   * @remarks
   * Whether to allow skipping failed node tasks, default value is False
   * 
   * @example
   * False
   */
  ignoreFailedNodeTasks?: boolean;
  /**
   * @remarks
   * IP allocation combination policy: Each policy can only choose one type, and multiple policies can be combined
   */
  ipAllocationPolicy?: ExtendClusterRequestIpAllocationPolicy[];
  /**
   * @remarks
   * Node Groups
   */
  nodeGroups?: ExtendClusterRequestNodeGroups[];
  /**
   * @remarks
   * VSwitch availability zone ID
   * 
   * @example
   * cn-shanghai-b
   */
  vSwitchZoneId?: string;
  /**
   * @remarks
   * List of cluster subnets
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

