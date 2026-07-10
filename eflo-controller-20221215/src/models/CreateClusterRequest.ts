// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterRequestComponentsComponentConfig extends $dara.Model {
  /**
   * @remarks
   * The basic parameters of the component.
   * 
   * @example
   * {
   *       "EndpointPublicAccess": false,
   *       "ContainerCidr": "10.4.0.0/24",
   *       "KeyPair": "test",
   *       "NodeCidrMask": "25",
   *       "ResourceGroupId": "rg-axsadm3sdzsdvdsndstdisd",
   *       "WorkerSystemDiskCategory": "da",
   *       "WorkerSystemDiskSize": 40,
   *       "DeletionProtection": false,
   *       "KubeProxy": "iptables",
   *       "Name": "da",
   *       "LoadBalancerSpec": "slb.s1.small",
   *       "Runtime": {
   *             "Version": "19.03.15",
   *             "Name": "docker"
   *       },
   *       "IsEnterpriseSecurityGroup": true,
   *       "Vpcid": "192.168.23.0/24",
   *       "NumOfNodes": 1,
   *       "VswitchIds": [
   *             "dad"
   *       ],
   *       "ServiceCidr": "10.0.0.0/16",
   *       "SnatEntry": false,
   *       "kubernetesVersion": "1.20.11-aliyunedge.1",
   *       "WorkerInstanceTypes": [
   *             "da"
   *       ]
   * }
   */
  basicArgs?: any;
  /**
   * @remarks
   * The node pool configuration, which is used to establish the mapping between node groups and node pools. This parameter is required when ComponentType is set to ACKEdge. Leave this parameter empty for other component types.
   */
  nodeUnits?: any[];
  static names(): { [key: string]: string } {
    return {
      basicArgs: 'BasicArgs',
      nodeUnits: 'NodeUnits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicArgs: 'any',
      nodeUnits: { 'type': 'array', 'itemType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.nodeUnits)) {
      $dara.Model.validateArray(this.nodeUnits);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestComponents extends $dara.Model {
  /**
   * @remarks
   * The component configuration.
   */
  componentConfig?: CreateClusterRequestComponentsComponentConfig;
  /**
   * @remarks
   * The component type.
   * 
   * @example
   * ACKEdge
   */
  componentType?: string;
  static names(): { [key: string]: string } {
    return {
      componentConfig: 'ComponentConfig',
      componentType: 'ComponentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentConfig: CreateClusterRequestComponentsComponentConfig,
      componentType: 'string',
    };
  }

  validate() {
    if(this.componentConfig && typeof (this.componentConfig as any).validate === 'function') {
      (this.componentConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestNetworksIpAllocationPolicyBondPolicyBonds extends $dara.Model {
  /**
   * @remarks
   * The bond name.
   * 
   * @example
   * bond0
   */
  name?: string;
  /**
   * @remarks
   * The cluster subnet from which the IP address is allocated.
   * 
   * @example
   * 172.16.0.0/24
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

export class CreateClusterRequestNetworksIpAllocationPolicyBondPolicy extends $dara.Model {
  /**
   * @remarks
   * The default bond cluster subnet.
   * 
   * @example
   * 172.168.0.0/24
   */
  bondDefaultSubnet?: string;
  /**
   * @remarks
   * The bond information.
   */
  bonds?: CreateClusterRequestNetworksIpAllocationPolicyBondPolicyBonds[];
  static names(): { [key: string]: string } {
    return {
      bondDefaultSubnet: 'BondDefaultSubnet',
      bonds: 'Bonds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bondDefaultSubnet: 'string',
      bonds: { 'type': 'array', 'itemType': CreateClusterRequestNetworksIpAllocationPolicyBondPolicyBonds },
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

export class CreateClusterRequestNetworksIpAllocationPolicyMachineTypePolicyBonds extends $dara.Model {
  /**
   * @remarks
   * The bond name.
   * 
   * @example
   * bond0
   */
  name?: string;
  /**
   * @remarks
   * The cluster subnet from which the IP address is allocated.
   * 
   * @example
   * 192.168.1.0/24
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

export class CreateClusterRequestNetworksIpAllocationPolicyMachineTypePolicy extends $dara.Model {
  /**
   * @remarks
   * The bond information.
   */
  bonds?: CreateClusterRequestNetworksIpAllocationPolicyMachineTypePolicyBonds[];
  /**
   * @remarks
   * The machine type.
   * 
   * @example
   * efg1.nvga8n
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
      bonds: { 'type': 'array', 'itemType': CreateClusterRequestNetworksIpAllocationPolicyMachineTypePolicyBonds },
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

export class CreateClusterRequestNetworksIpAllocationPolicyNodePolicyBonds extends $dara.Model {
  /**
   * @remarks
   * The bond name.
   * 
   * @example
   * bond0
   */
  name?: string;
  /**
   * @remarks
   * The cluster subnet from which the IP address is allocated.
   * 
   * @example
   * 10.0.0.0/24
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

export class CreateClusterRequestNetworksIpAllocationPolicyNodePolicy extends $dara.Model {
  /**
   * @remarks
   * The bond information.
   */
  bonds?: CreateClusterRequestNetworksIpAllocationPolicyNodePolicyBonds[];
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * e01-cn-2r42vq62001
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      bonds: 'Bonds',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bonds: { 'type': 'array', 'itemType': CreateClusterRequestNetworksIpAllocationPolicyNodePolicyBonds },
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

export class CreateClusterRequestNetworksIpAllocationPolicy extends $dara.Model {
  /**
   * @remarks
   * The bond policy.
   */
  bondPolicy?: CreateClusterRequestNetworksIpAllocationPolicyBondPolicy;
  /**
   * @remarks
   * The machine type allocation policy.
   */
  machineTypePolicy?: CreateClusterRequestNetworksIpAllocationPolicyMachineTypePolicy[];
  /**
   * @remarks
   * The node allocation policy.
   */
  nodePolicy?: CreateClusterRequestNetworksIpAllocationPolicyNodePolicy[];
  static names(): { [key: string]: string } {
    return {
      bondPolicy: 'BondPolicy',
      machineTypePolicy: 'MachineTypePolicy',
      nodePolicy: 'NodePolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bondPolicy: CreateClusterRequestNetworksIpAllocationPolicyBondPolicy,
      machineTypePolicy: { 'type': 'array', 'itemType': CreateClusterRequestNetworksIpAllocationPolicyMachineTypePolicy },
      nodePolicy: { 'type': 'array', 'itemType': CreateClusterRequestNetworksIpAllocationPolicyNodePolicy },
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

export class CreateClusterRequestNetworksNewVpdInfoVpdSubnets extends $dara.Model {
  /**
   * @remarks
   * The subnet CIDR block.
   * 
   * @example
   * 10.0.1.8/24
   */
  subnetCidr?: string;
  /**
   * @remarks
   * The subnet type.
   * 
   * @example
   * 10.0.2.8/24
   */
  subnetType?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-wulanchabu-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      subnetCidr: 'SubnetCidr',
      subnetType: 'SubnetType',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subnetCidr: 'string',
      subnetType: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestNetworksNewVpdInfo extends $dara.Model {
  /**
   * @remarks
   * The Cloud Enterprise Network (CEN) instance ID.
   * 
   * @example
   * cen-1gb1eftc5qp2ao75fo
   */
  cenId?: string;
  /**
   * @remarks
   * The cloud link CIDR block.
   * 
   * @example
   * 172.16.0.0/24
   */
  cloudLinkCidr?: string;
  /**
   * @remarks
   * The cloud link ID.
   * 
   * @example
   * vcc-cn-c4dtycm5i08
   */
  cloudLinkId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-0jl2x45apm6odc2c10h25
   */
  monitorVpcId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-0jl2w3ffbghkss0x2foff
   */
  monitorVswitchId?: string;
  /**
   * @remarks
   * The cluster CIDR block.
   * 
   * @example
   * 192.168.0.0/16
   */
  vpdCidr?: string;
  /**
   * @remarks
   * The cluster subnets.
   */
  vpdSubnets?: CreateClusterRequestNetworksNewVpdInfoVpdSubnets[];
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      cloudLinkCidr: 'CloudLinkCidr',
      cloudLinkId: 'CloudLinkId',
      monitorVpcId: 'MonitorVpcId',
      monitorVswitchId: 'MonitorVswitchId',
      vpdCidr: 'VpdCidr',
      vpdSubnets: 'VpdSubnets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      cloudLinkCidr: 'string',
      cloudLinkId: 'string',
      monitorVpcId: 'string',
      monitorVswitchId: 'string',
      vpdCidr: 'string',
      vpdSubnets: { 'type': 'array', 'itemType': CreateClusterRequestNetworksNewVpdInfoVpdSubnets },
    };
  }

  validate() {
    if(Array.isArray(this.vpdSubnets)) {
      $dara.Model.validateArray(this.vpdSubnets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestNetworksVpdInfo extends $dara.Model {
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpd-vfuz6ejv
   */
  vpdId?: string;
  /**
   * @remarks
   * The list of cluster subnet IDs.
   */
  vpdSubnets?: string[];
  static names(): { [key: string]: string } {
    return {
      vpdId: 'VpdId',
      vpdSubnets: 'VpdSubnets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpdId: 'string',
      vpdSubnets: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vpdSubnets)) {
      $dara.Model.validateArray(this.vpdSubnets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestNetworks extends $dara.Model {
  /**
   * @remarks
   * The IP allocation policy.
   */
  ipAllocationPolicy?: CreateClusterRequestNetworksIpAllocationPolicy[];
  /**
   * @remarks
   * The VPD configuration information.
   */
  newVpdInfo?: CreateClusterRequestNetworksNewVpdInfo;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-bp1d3dvbh9by7j5rujax
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The IP version.
   * 
   * @example
   * IPv4
   */
  tailIpVersion?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-asjdfklj
   */
  vSwitchId?: string;
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
   * The VPC ID.
   * 
   * @example
   * vpc-0jl36lqzmc06qogy0t5ll
   */
  vpcId?: string;
  /**
   * @remarks
   * The information about the reused VPD.
   */
  vpdInfo?: CreateClusterRequestNetworksVpdInfo;
  static names(): { [key: string]: string } {
    return {
      ipAllocationPolicy: 'IpAllocationPolicy',
      newVpdInfo: 'NewVpdInfo',
      securityGroupId: 'SecurityGroupId',
      tailIpVersion: 'TailIpVersion',
      vSwitchId: 'VSwitchId',
      vSwitchZoneId: 'VSwitchZoneId',
      vpcId: 'VpcId',
      vpdInfo: 'VpdInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAllocationPolicy: { 'type': 'array', 'itemType': CreateClusterRequestNetworksIpAllocationPolicy },
      newVpdInfo: CreateClusterRequestNetworksNewVpdInfo,
      securityGroupId: 'string',
      tailIpVersion: 'string',
      vSwitchId: 'string',
      vSwitchZoneId: 'string',
      vpcId: 'string',
      vpdInfo: CreateClusterRequestNetworksVpdInfo,
    };
  }

  validate() {
    if(Array.isArray(this.ipAllocationPolicy)) {
      $dara.Model.validateArray(this.ipAllocationPolicy);
    }
    if(this.newVpdInfo && typeof (this.newVpdInfo as any).validate === 'function') {
      (this.newVpdInfo as any).validate();
    }
    if(this.vpdInfo && typeof (this.vpdInfo as any).validate === 'function') {
      (this.vpdInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestNodeGroupsHyperNodesDataDisk extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable I/O performance burst.
   * 
   * @example
   * true
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The cloud disk type. Valid values:
   * 
   *  - cloud_essd: Enterprise SSD (ESSD).
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
   * Settings for the performance level (PL) when an ESSD is created as the data cloud disk. Valid values:
   * - PL0: a maximum of 10,000 random read/write IOPS per cloud disk.
   * - PL1: a maximum of 50,000 random read/write IOPS per cloud disk.
   * - PL2: a maximum of 100,000 random read/write IOPS per cloud disk.
   * - PL3: a maximum of 1,000,000 random read/write IOPS per cloud disk.
   * 
   * Default value: PL1.
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The provisioned performance of read/write IOPS for the ESSD AutoPL cloud disk (per disk).
   * 
   * @example
   * 10000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The cloud disk size. Unit: GiB.
   * 
   * @example
   * 180
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

export class CreateClusterRequestNodeGroupsHyperNodes extends $dara.Model {
  /**
   * @remarks
   * The list of data cloud disks.
   */
  dataDisk?: CreateClusterRequestNodeGroupsHyperNodesDataDisk[];
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * q25b01265.cloud.ng152
   */
  hostname?: string;
  /**
   * @remarks
   * The hyper node ID.
   * 
   * @example
   * e01-dw72u2c23jk
   */
  hyperNodeId?: string;
  /**
   * @remarks
   * The logon password.
   * 
   * @example
   * aaadddddfdsfdsfsdffd
   */
  loginPassword?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1xn9iq3s3p8218c4qu4
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-uf689skpx56nk7yfw0jhy
   */
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
      dataDisk: { 'type': 'array', 'itemType': CreateClusterRequestNodeGroupsHyperNodesDataDisk },
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

export class CreateClusterRequestNodeGroupsNodesDataDisk extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable I/O performance burst.
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The cloud disk type.
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
   * The performance parameter of the data cloud disk.
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

export class CreateClusterRequestNodeGroupsNodes extends $dara.Model {
  /**
   * @remarks
   * The data cloud disk specifications.
   */
  dataDisk?: CreateClusterRequestNodeGroupsNodesDataDisk[];
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * 8d13b784-17a9-11ed-bc7b-acde48001122
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
   * e01poc-cn-i7m2wnivf0d
   */
  nodeId?: string;
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
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDisk: { 'type': 'array', 'itemType': CreateClusterRequestNodeGroupsNodesDataDisk },
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

export class CreateClusterRequestNodeGroupsSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The cloud disk type. Valid values:
   * 
   *  - cloud_essd: Enterprise SSD (ESSD).
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * Settings for the performance level (PL) when an ESSD is created as the system cloud disk. Valid values:
   * - PL0: a maximum of 10,000 random read/write IOPS per cloud disk.
   * - PL1: a maximum of 50,000 random read/write IOPS per cloud disk.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The cloud disk size. Unit: GB.
   * 
   * @example
   * 9999
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      performanceLevel: 'PerformanceLevel',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
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

export class CreateClusterRequestNodeGroups extends $dara.Model {
  /**
   * @remarks
   * Specifies whether file system mounting is supported.
   * 
   * @example
   * false
   */
  fileSystemMountEnabled?: boolean;
  /**
   * @remarks
   * The list of hyper nodes.
   */
  hyperNodes?: CreateClusterRequestNodeGroupsHyperNodes[];
  /**
   * @remarks
   * The system image ID.
   * 
   * @example
   * i190297201634099844192
   */
  imageId?: string;
  /**
   * @remarks
   * The key pair name.
   * 
   * @example
   * test-keypair
   */
  keyPairName?: string;
  /**
   * @remarks
   * The logon password.
   * 
   * @example
   * 密码
   */
  loginPassword?: string;
  /**
   * @remarks
   * The machine type.
   * 
   * @example
   * efg1.nvga1
   */
  machineType?: string;
  /**
   * @remarks
   * The node group description.
   * 
   * @example
   * 默认节点组
   */
  nodeGroupDescription?: string;
  /**
   * @remarks
   * The node group name.
   * 
   * @example
   * emr-default
   */
  nodeGroupName?: string;
  /**
   * @remarks
   * The list of nodes.
   */
  nodes?: CreateClusterRequestNodeGroupsNodes[];
  /**
   * @remarks
   * The RAM role name of the node. You can call the RAM API ListRoles to query the node RAM roles that you have created. The trusted entity of the specified role must be set to Lingjun AI Computing Service.
   * Note: Clearing an existing role is not supported.
   * 
   * @example
   * xianwen-test-ram-role
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The system cloud disk information.
   */
  systemDisk?: CreateClusterRequestNodeGroupsSystemDisk;
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
   * Specifies whether to enable GPU splitting.
   * 
   * @example
   * false
   */
  virtualGpuEnabled?: boolean;
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
      fileSystemMountEnabled: 'FileSystemMountEnabled',
      hyperNodes: 'HyperNodes',
      imageId: 'ImageId',
      keyPairName: 'KeyPairName',
      loginPassword: 'LoginPassword',
      machineType: 'MachineType',
      nodeGroupDescription: 'NodeGroupDescription',
      nodeGroupName: 'NodeGroupName',
      nodes: 'Nodes',
      ramRoleName: 'RamRoleName',
      systemDisk: 'SystemDisk',
      userData: 'UserData',
      virtualGpuEnabled: 'VirtualGpuEnabled',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemMountEnabled: 'boolean',
      hyperNodes: { 'type': 'array', 'itemType': CreateClusterRequestNodeGroupsHyperNodes },
      imageId: 'string',
      keyPairName: 'string',
      loginPassword: 'string',
      machineType: 'string',
      nodeGroupDescription: 'string',
      nodeGroupName: 'string',
      nodes: { 'type': 'array', 'itemType': CreateClusterRequestNodeGroupsNodes },
      ramRoleName: 'string',
      systemDisk: CreateClusterRequestNodeGroupsSystemDisk,
      userData: 'string',
      virtualGpuEnabled: 'boolean',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hyperNodes)) {
      $dara.Model.validateArray(this.hyperNodes);
    }
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * env-name
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * dev
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

export class CreateClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster description.
   * 
   * @example
   * 标准集群测试
   */
  clusterDescription?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * Standard_Cluster
   */
  clusterName?: string;
  /**
   * @remarks
   * The cluster type.
   * 
   * @example
   * Lite
   */
  clusterType?: string;
  /**
   * @remarks
   * The components (software instances).
   */
  components?: CreateClusterRequestComponents[];
  /**
   * @remarks
   * The cluster number.
   * 
   * @example
   * A1
   */
  hpnZone?: string;
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
   * The network information.
   */
  networks?: CreateClusterRequestNetworks;
  /**
   * @remarks
   * The node vSwitches.
   */
  nimizVSwitches?: string[];
  /**
   * @remarks
   * The list of node groups.
   */
  nodeGroups?: CreateClusterRequestNodeGroups[];
  /**
   * @remarks
   * Specifies whether the network interface supports jumbo frames.
   * 
   * @example
   * false
   */
  openEniJumboFrame?: boolean;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek2xdkc6icwfha
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource tags.
   */
  tag?: CreateClusterRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clusterDescription: 'ClusterDescription',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      components: 'Components',
      hpnZone: 'HpnZone',
      ignoreFailedNodeTasks: 'IgnoreFailedNodeTasks',
      networks: 'Networks',
      nimizVSwitches: 'NimizVSwitches',
      nodeGroups: 'NodeGroups',
      openEniJumboFrame: 'OpenEniJumboFrame',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterDescription: 'string',
      clusterName: 'string',
      clusterType: 'string',
      components: { 'type': 'array', 'itemType': CreateClusterRequestComponents },
      hpnZone: 'string',
      ignoreFailedNodeTasks: 'boolean',
      networks: CreateClusterRequestNetworks,
      nimizVSwitches: { 'type': 'array', 'itemType': 'string' },
      nodeGroups: { 'type': 'array', 'itemType': CreateClusterRequestNodeGroups },
      openEniJumboFrame: 'boolean',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateClusterRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    if(this.networks && typeof (this.networks as any).validate === 'function') {
      (this.networks as any).validate();
    }
    if(Array.isArray(this.nimizVSwitches)) {
      $dara.Model.validateArray(this.nimizVSwitches);
    }
    if(Array.isArray(this.nodeGroups)) {
      $dara.Model.validateArray(this.nodeGroups);
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

