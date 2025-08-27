// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateClusterRequestComponentsComponentConfig extends $dara.Model {
  /**
   * @remarks
   * Basic component parameters
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
   * Node pool configuration, used to establish the correspondence between node groups and node pools. Required when ComponentType is "ACKEdge", otherwise it can be empty.
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
   * Component configuration
   */
  componentConfig?: CreateClusterRequestComponentsComponentConfig;
  /**
   * @remarks
   * Component type
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
   * Bond name
   * 
   * @example
   * bond0
   */
  name?: string;
  /**
   * @remarks
   * IP source subnet for the cluster
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
   * Default bond subnet for the cluster
   * 
   * @example
   * 172.168.0.0/24
   */
  bondDefaultSubnet?: string;
  /**
   * @remarks
   * Bond information
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
   * Bond name
   * 
   * @example
   * bond0
   */
  name?: string;
  /**
   * @remarks
   * IP source subnet for the cluster
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
   * Bond information
   */
  bonds?: CreateClusterRequestNetworksIpAllocationPolicyMachineTypePolicyBonds[];
  /**
   * @remarks
   * Machine type
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
   * Bond name
   * 
   * @example
   * bond0
   */
  name?: string;
  /**
   * @remarks
   * IP source subnet for the cluster
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
   * Bond information
   */
  bonds?: CreateClusterRequestNetworksIpAllocationPolicyNodePolicyBonds[];
  /**
   * @remarks
   * Node ID
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
   * Bond policy
   */
  bondPolicy?: CreateClusterRequestNetworksIpAllocationPolicyBondPolicy;
  /**
   * @remarks
   * Machine type allocation policy
   */
  machineTypePolicy?: CreateClusterRequestNetworksIpAllocationPolicyMachineTypePolicy[];
  /**
   * @remarks
   * Node allocation policy
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
   * Subnet CIDR
   * 
   * @example
   * 10.0.1.8/24
   */
  subnetCidr?: string;
  /**
   * @remarks
   * Subnet type
   * 
   * @example
   * 10.0.2.8/24
   */
  subnetType?: string;
  /**
   * @remarks
   * Zone ID
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
   * Cloud Enterprise Network ID
   * 
   * @example
   * cen-1gb1eftc5qp2ao75fo
   */
  cenId?: string;
  /**
   * @remarks
   * Cloud link CIDR
   * 
   * @example
   * 172.16.0.0/24
   */
  cloudLinkCidr?: string;
  /**
   * @remarks
   * Cloud link ID
   * 
   * @example
   * vcc-cn-c4dtycm5i08
   */
  cloudLinkId?: string;
  /**
   * @remarks
   * Virtual Private Cloud (VPC)
   * 
   * @example
   * vpc-0jl2x45apm6odc2c10h25
   */
  monitorVpcId?: string;
  /**
   * @remarks
   * VPC switch
   * 
   * @example
   * vsw-0jl2w3ffbghkss0x2foff
   */
  monitorVswitchId?: string;
  /**
   * @remarks
   * Cluster network segment
   * 
   * @example
   * 192.168.0.0/16
   */
  vpdCidr?: string;
  /**
   * @remarks
   * Cluster subnets
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
   * VPC ID
   * 
   * @example
   * vpd-vfuz6ejv
   */
  vpdId?: string;
  /**
   * @remarks
   * List of cluster subnet IDs
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
   * IP allocation policy
   */
  ipAllocationPolicy?: CreateClusterRequestNetworksIpAllocationPolicy[];
  /**
   * @remarks
   * Vpd configuration information
   */
  newVpdInfo?: CreateClusterRequestNetworksNewVpdInfo;
  /**
   * @remarks
   * Security group ID
   * 
   * @example
   * sg-bp1d3dvbh9by7j5rujax
   */
  securityGroupId?: string;
  /**
   * @remarks
   * IP version
   * 
   * @example
   * IPv4
   */
  tailIpVersion?: string;
  /**
   * @remarks
   * VSwitch ID
   * 
   * @example
   * vsw-asjdfklj
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VSwitch Zone ID
   * 
   * @example
   * cn-shanghai-b
   */
  vSwitchZoneId?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-0jl36lqzmc06qogy0t5ll
   */
  vpcId?: string;
  /**
   * @remarks
   * Reuse VPD information
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

export class CreateClusterRequestNodeGroupsNodesDataDisk extends $dara.Model {
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
   * Whether the data disk is deleted with the node when it is unsubscribed
   * 
   * @example
   * true
   */
  deleteWithNode?: boolean;
  /**
   * @remarks
   * Data disk performance level
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * Disk size
   * 
   * @example
   * 10
   */
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

export class CreateClusterRequestNodeGroupsNodes extends $dara.Model {
  /**
   * @remarks
   * Data disk specifications.
   */
  dataDisk?: CreateClusterRequestNodeGroupsNodesDataDisk[];
  /**
   * @remarks
   * Hostname
   * 
   * @example
   * 8d13b784-17a9-11ed-bc7b-acde48001122
   */
  hostname?: string;
  /**
   * @remarks
   * Login password
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
   * e01poc-cn-i7m2wnivf0d
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
   * Disk type. The value range is:
   * 
   * - cloud_essd: ESSD disk.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * When creating an ESSD disk as the system disk, set the performance level of the disk. The value range is:
   * - PL0: Maximum random read/write IOPS for a single disk is 10,000.
   * - PL1: Maximum random read/write IOPS for a single disk is 50,000.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * Unit: GB.
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
   * Whether to support file system mounting
   * 
   * @example
   * true
   */
  fileSystemMountEnabled?: boolean;
  /**
   * @remarks
   * System image ID
   * 
   * @example
   * i190297201634099844192
   */
  imageId?: string;
  /**
   * @remarks
   * Key pair name.
   * 
   * @example
   * test-keypair
   */
  keyPairName?: string;
  /**
   * @remarks
   * Login password
   * 
   * @example
   * Password
   */
  loginPassword?: string;
  /**
   * @remarks
   * Machine type
   * 
   * @example
   * efg1.nvga1
   */
  machineType?: string;
  /**
   * @remarks
   * Node group description
   * 
   * @example
   * Node group description
   */
  nodeGroupDescription?: string;
  /**
   * @remarks
   * Node group name
   * 
   * @example
   * emr-default
   */
  nodeGroupName?: string;
  /**
   * @remarks
   * Node list
   */
  nodes?: CreateClusterRequestNodeGroupsNodes[];
  /**
   * @remarks
   * System disk information
   */
  systemDisk?: CreateClusterRequestNodeGroupsSystemDisk;
  /**
   * @remarks
   * Instance custom data. It needs to be encoded in Base64, and the original data should not exceed 16 KB.
   * 
   * @example
   * ZWNobyBoZWxsbyBlY3Mh
   */
  userData?: string;
  /**
   * @remarks
   * Whether to enable gpu virtualization or not
   * 
   * @example
   * false
   */
  virtualGpuEnabled?: boolean;
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
      fileSystemMountEnabled: 'FileSystemMountEnabled',
      imageId: 'ImageId',
      keyPairName: 'KeyPairName',
      loginPassword: 'LoginPassword',
      machineType: 'MachineType',
      nodeGroupDescription: 'NodeGroupDescription',
      nodeGroupName: 'NodeGroupName',
      nodes: 'Nodes',
      systemDisk: 'SystemDisk',
      userData: 'UserData',
      virtualGpuEnabled: 'VirtualGpuEnabled',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemMountEnabled: 'boolean',
      imageId: 'string',
      keyPairName: 'string',
      loginPassword: 'string',
      machineType: 'string',
      nodeGroupDescription: 'string',
      nodeGroupName: 'string',
      nodes: { 'type': 'array', 'itemType': CreateClusterRequestNodeGroupsNodes },
      systemDisk: CreateClusterRequestNodeGroupsSystemDisk,
      userData: 'string',
      virtualGpuEnabled: 'boolean',
      zoneId: 'string',
    };
  }

  validate() {
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
   * Key
   * 
   * @example
   * env-name
   */
  key?: string;
  /**
   * @remarks
   * Value
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
   * Cluster description
   * 
   * @example
   * Cluster description
   */
  clusterDescription?: string;
  /**
   * @remarks
   * Cluster name
   * 
   * @example
   * Standard_Cluster
   */
  clusterName?: string;
  /**
   * @remarks
   * Cluster type
   * 
   * @example
   * Lite
   */
  clusterType?: string;
  /**
   * @remarks
   * Components (software instances)
   */
  components?: CreateClusterRequestComponents[];
  /**
   * @remarks
   * Cluster number
   * 
   * @example
   * A1
   */
  hpnZone?: string;
  /**
   * @remarks
   * Whether to allow skipping failed nodes, the default value is False
   * 
   * @example
   * False
   */
  ignoreFailedNodeTasks?: boolean;
  /**
   * @remarks
   * Network information
   */
  networks?: CreateClusterRequestNetworks;
  /**
   * @remarks
   * Node VSwitches
   */
  nimizVSwitches?: string[];
  /**
   * @remarks
   * Node group list
   */
  nodeGroups?: CreateClusterRequestNodeGroups[];
  /**
   * @remarks
   * Whether the network interface supports jumbo frames
   * 
   * @example
   * false
   */
  openEniJumboFrame?: boolean;
  /**
   * @remarks
   * Resource group ID
   * 
   * @example
   * rg-aek2xdkc6icwfha
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Resource tags
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

