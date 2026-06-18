// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExtendClusterRequestIpAllocationPolicyBondPolicyBonds extends $dara.Model {
  /**
   * @remarks
   * Bond name.
   * 
   * @example
   * Bond0
   */
  name?: string;
  /**
   * @remarks
   * IP source cluster subnet.
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
   * Default bond cluster subnet.
   * 
   * @example
   * subnet-3od2fe
   */
  bondDefaultSubnet?: string;
  /**
   * @remarks
   * Bond information.
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
   * Bond name.
   * 
   * @example
   * Bond0
   */
  name?: string;
  /**
   * @remarks
   * IP source cluster subnet.
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
   * Bond information.
   */
  bonds?: ExtendClusterRequestIpAllocationPolicyMachineTypePolicyBonds[];
  /**
   * @remarks
   * Machine type.
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
   * Bond name.
   * 
   * @example
   * Bond0
   */
  name?: string;
  /**
   * @remarks
   * IP source cluster subnet.
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
   * Bond information.
   */
  bonds?: ExtendClusterRequestIpAllocationPolicyNodePolicyBonds[];
  /**
   * @remarks
   * Hostname.
   * 
   * @example
   * a100-xa5dza28-0085
   */
  hostname?: string;
  /**
   * @remarks
   * Node ID.
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
   * Machine type allocation policy.
   */
  machineTypePolicy?: ExtendClusterRequestIpAllocationPolicyMachineTypePolicy[];
  /**
   * @remarks
   * Node allocation policy.
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
   * Whether to enable burst (performance bursting).
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * Disk type. Valid values:
   * 
   *  - cloud_essd: ESSD cloud disk.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * Whether the data disk is deleted when the node is unsubscribed.
   * 
   * @example
   * True
   */
  deleteWithNode?: boolean;
  /**
   * @remarks
   * The performance level of the ESSD cloud disk used as the system disk. Valid values:
   * - PL0: maximum random read/write IOPS of 10,000 per disk.
   * - PL1: maximum random read/write IOPS of 50,000 per disk.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * Provisioned read/write IOPS of the ESSD AutoPL cloud disk (per disk).
   * 
   * @example
   * 9600
   */
  provisionedIops?: number;
  /**
   * @remarks
   * Disk size, in GiB.
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
   * Disk information list.
   */
  dataDisk?: ExtendClusterRequestNodeGroupsHyperNodesDataDisk[];
  /**
   * @remarks
   * Hostname.
   * 
   * @example
   * liliang-rmn7stf7-0000
   */
  hostname?: string;
  /**
   * @remarks
   * HyperNode ID.
   * 
   * @example
   * e01-cn-2r42tmj4z02
   */
  hyperNodeId?: string;
  /**
   * @remarks
   * Login password.
   * 
   * @example
   * ***
   */
  loginPassword?: string;
  /**
   * @remarks
   * Security group ID.
   * 
   * @example
   * sg-uf68xu2102avz7pl3t5d
   */
  securityGroupId?: string;
  /**
   * @remarks
   * vSwitch ID.
   * 
   * @example
   * vsw-8vbobo4cvzsygw98f4j6b
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPC ID.
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
   * Node tag key.
   * 
   * @example
   * key_my
   */
  key?: string;
  /**
   * @remarks
   * Node tag value.
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
   * Whether to enable burst (performance bursting).
   * 
   * @example
   * true
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * Disk type.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * Whether the data disk is deleted when the node is unsubscribed.
   * 
   * @example
   * true
   */
  deleteWithNode?: boolean;
  /**
   * @remarks
   * Data disk performance level.
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * Provisioned performance (IOPS). Valid values: 0 to 50000.
   * 
   * @example
   * 1000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * Disk size.
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
   * Data disk specifications.
   */
  dataDisk?: ExtendClusterRequestNodeGroupsNodesDataDisk[];
  /**
   * @remarks
   * Hostname.
   * 
   * @example
   * d044d220-33fd-11ed-86a6
   */
  hostname?: string;
  /**
   * @remarks
   * Login password.
   * 
   * @example
   * ***
   */
  loginPassword?: string;
  /**
   * @remarks
   * Node ID.
   * 
   * @example
   * e01-cn-zvp2zdpy601
   */
  nodeId?: string;
  /**
   * @remarks
   * Security group ID.
   * 
   * @example
   * sg-uf68xu2102avz7pl3t5d
   */
  securityGroupId?: string;
  /**
   * @remarks
   * vSwitch ID.
   * 
   * @example
   * vsw-bp169pi5fj151rrms4sia
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPC ID.
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
   * The number of nodes to purchase. Valid values: 0 to 500. If the Amount parameter is set to 0, no nodes are purchased and existing nodes are used for scale-out. If the Amount parameter is set to a value from 1 to 500, the specified number of nodes are purchased and used for scale-out. Default value: 0.
   * 
   * @example
   * 4
   */
  amount?: number;
  /**
   * @remarks
   * Whether to enable auto-renewal for the purchased nodes. This parameter takes effect when the Amount parameter is not 0 and ChargeType is set to PREPAY or POSTPAY. Valid values: True: enable auto-renewal. False: disable auto-renewal. Default value: False.
   * 
   * @example
   * True
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The billing method of nodes. This parameter does not take effect when the Amount parameter is set to 0. Valid values: PREPAY: subscription. POSTPAY: pay-as-you-go. Default value: PREPAY.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The hostnames set for the purchased nodes. This parameter does not take effect when the Amount parameter is set to 0.
   */
  hostnames?: string[];
  /**
   * @remarks
   * HyperNode list.
   */
  hyperNodes?: ExtendClusterRequestNodeGroupsHyperNodes[];
  /**
   * @remarks
   * The login password set for the purchased nodes. This parameter does not take effect when the Amount parameter is set to 0.
   * 
   * @example
   * skkO(*89Y
   */
  loginPassword?: string;
  /**
   * @remarks
   * Node group ID.
   * 
   * @example
   * i16d4883a46cbadeb4bc9
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * Node tags.
   */
  nodeTag?: ExtendClusterRequestNodeGroupsNodeTag[];
  /**
   * @remarks
   * Node list.
   */
  nodes?: ExtendClusterRequestNodeGroupsNodes[];
  /**
   * @remarks
   * The subscription duration of nodes (unit: month). Valid values: 1, 6, 12, 24, 36, and 48. This parameter takes effect when the Amount parameter is not 0 and ChargeType is set to PREPAY.
   * 
   * @example
   * 6
   */
  period?: number;
  savingsPlanId?: string;
  /**
   * @remarks
   * Custom data.
   * 
   * @example
   * #!/bin/sh
   * echo "Hello World. The time is now $(date -R)!" | tee /root/userdata_test.txt
   */
  userData?: string;
  /**
   * @remarks
   * vSwitch ID.
   * 
   * @example
   * vsw-uf65m8xqjgy55xj9jw92n
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPC ID.
   * 
   * @example
   * vpc-0jl3b0c0ukydlfezr13n6
   */
  vpcId?: string;
  /**
   * @remarks
   * Zone ID.
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
   * Cluster ID.
   * 
   * @example
   * i15b480fbd2fcdbc2869cd80
   */
  clusterId?: string;
  /**
   * @remarks
   * Whether to allow skipping failed nodes. Default value: False.
   * 
   * @example
   * False
   */
  ignoreFailedNodeTasks?: boolean;
  /**
   * @remarks
   * Combined policy for IP allocation. Each policy can only select one policy type, and multiple policies can be combined.
   */
  ipAllocationPolicy?: ExtendClusterRequestIpAllocationPolicy[];
  /**
   * @remarks
   * Node groups.
   */
  nodeGroups?: ExtendClusterRequestNodeGroups[];
  /**
   * @remarks
   * vSwitch zone ID.
   * 
   * @example
   * cn-shanghai-b
   */
  vSwitchZoneId?: string;
  /**
   * @remarks
   * Cluster subnet list.
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

