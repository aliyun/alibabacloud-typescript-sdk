// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

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
   * IP source cluster subnet
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
   * Default bond cluster subnet
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
   * IP source cluster subnet
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
   * IP source cluster subnet
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
   * VPC
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
   * Cluster Network Segment
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

export class CreateClusterRequestNodeGroupsNodes extends $dara.Model {
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
   * Virtual switch ID
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
      hostname: 'Hostname',
      loginPassword: 'LoginPassword',
      nodeId: 'NodeId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostname: 'string',
      loginPassword: 'string',
      nodeId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestNodeGroupsSystemDisk extends $dara.Model {
  category?: string;
  performanceLevel?: string;
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
   * System image ID
   * 
   * @example
   * i190297201634099844192
   */
  imageId?: string;
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
  systemDisk?: CreateClusterRequestNodeGroupsSystemDisk;
  /**
   * @remarks
   * Instance custom data. It needs to be Base64 encoded, and the original data should not exceed 16 KB.
   * 
   * @example
   * ZWNobyBoZWxsbyBlY3Mh
   */
  userData?: string;
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
      imageId: 'ImageId',
      machineType: 'MachineType',
      nodeGroupDescription: 'NodeGroupDescription',
      nodeGroupName: 'NodeGroupName',
      nodes: 'Nodes',
      systemDisk: 'SystemDisk',
      userData: 'UserData',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      machineType: 'string',
      nodeGroupDescription: 'string',
      nodeGroupName: 'string',
      nodes: { 'type': 'array', 'itemType': CreateClusterRequestNodeGroupsNodes },
      systemDisk: CreateClusterRequestNodeGroupsSystemDisk,
      userData: 'string',
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

export class CreateClusterShrinkRequestTag extends $dara.Model {
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

export class CreateDiagnosticTaskRequestAiJobLogInfoAiJobLogsLogs extends $dara.Model {
  /**
   * @remarks
   * Sent date, in the format yyyymmdd.
   * 
   * @example
   * 2024-08-05T10:10:01
   */
  datetime?: string;
  /**
   * @remarks
   * Log content
   * 
   * @example
   * success
   */
  logContent?: string;
  static names(): { [key: string]: string } {
    return {
      datetime: 'Datetime',
      logContent: 'LogContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datetime: 'string',
      logContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiagnosticTaskRequestAiJobLogInfoAiJobLogs extends $dara.Model {
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * null
   */
  aiInstance?: string;
  /**
   * @remarks
   * Log object
   */
  logs?: CreateDiagnosticTaskRequestAiJobLogInfoAiJobLogsLogs[];
  /**
   * @remarks
   * Node ID
   * 
   * @example
   * e01-tw-p2p2al5u1hn
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      aiInstance: 'AiInstance',
      logs: 'Logs',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiInstance: 'string',
      logs: { 'type': 'array', 'itemType': CreateDiagnosticTaskRequestAiJobLogInfoAiJobLogsLogs },
      nodeId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiagnosticTaskRequestAiJobLogInfo extends $dara.Model {
  /**
   * @remarks
   * Task logs
   */
  aiJobLogs?: CreateDiagnosticTaskRequestAiJobLogInfoAiJobLogs[];
  /**
   * @remarks
   * End time. In timestamp format, unit: seconds.
   * > Must be on the hour or half-hour mark.
   * 
   * @example
   * 2024-08-05T10:10:01
   */
  endTime?: string;
  /**
   * @remarks
   * Start time. In timestamp format, unit: seconds.
   * > Must be on the hour or half-hour mark.
   * 
   * @example
   * 2024-10-11T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      aiJobLogs: 'AiJobLogs',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiJobLogs: { 'type': 'array', 'itemType': CreateDiagnosticTaskRequestAiJobLogInfoAiJobLogs },
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aiJobLogs)) {
      $dara.Model.validateArray(this.aiJobLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetTestTaskRequestCommTestHosts extends $dara.Model {
  /**
   * @remarks
   * IP address.
   * 
   * @example
   * 169.253.253.15
   */
  IP?: string;
  /**
   * @remarks
   * Node ID.
   * 
   * @example
   * e01-tw-bqisacl3z6l
   */
  nodeId?: string;
  /**
   * @remarks
   * Resource ID
   * 
   * @example
   * i111670831721110797708
   */
  resourceId?: string;
  /**
   * @remarks
   * Service name.
   * 
   * @example
   * VBw
   */
  serverName?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      nodeId: 'NodeId',
      resourceId: 'ResourceId',
      serverName: 'ServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
      nodeId: 'string',
      resourceId: 'string',
      serverName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetTestTaskRequestCommTest extends $dara.Model {
  /**
   * @remarks
   * Number of GPUs
   * 
   * @example
   * 1
   */
  GPUNum?: number;
  /**
   * @remarks
   * Resource ID
   */
  hosts?: CreateNetTestTaskRequestCommTestHosts[];
  /**
   * @remarks
   * Communication library model
   * 
   * @example
   * intention_v4
   */
  model?: string;
  /**
   * @remarks
   * Communication library test category: ACCL or NCCL
   * 
   * @example
   * ACCL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      GPUNum: 'GPUNum',
      hosts: 'Hosts',
      model: 'Model',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GPUNum: 'number',
      hosts: { 'type': 'array', 'itemType': CreateNetTestTaskRequestCommTestHosts },
      model: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hosts)) {
      $dara.Model.validateArray(this.hosts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetTestTaskRequestDelayTestHosts extends $dara.Model {
  /**
   * @remarks
   * Network interface bond port
   * 
   * @example
   * bond1
   */
  bond?: string;
  /**
   * @remarks
   * Node IP
   * 
   * @example
   * 125.210.225.48
   */
  IP?: string;
  /**
   * @remarks
   * Node ID.
   * 
   * @example
   * e01-cn-fou43an0a05
   */
  nodeId?: string;
  /**
   * @remarks
   * Resource ID
   * 
   * @example
   * e01-cn-bcd3u1aee06
   */
  resourceId?: string;
  /**
   * @remarks
   * Service name.
   * 
   * @example
   * NQU
   */
  serverName?: string;
  static names(): { [key: string]: string } {
    return {
      bond: 'Bond',
      IP: 'IP',
      nodeId: 'NodeId',
      resourceId: 'ResourceId',
      serverName: 'ServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bond: 'string',
      IP: 'string',
      nodeId: 'string',
      resourceId: 'string',
      serverName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetTestTaskRequestDelayTest extends $dara.Model {
  /**
   * @remarks
   * 输入测试节点的hosts
   */
  hosts?: CreateNetTestTaskRequestDelayTestHosts[];
  static names(): { [key: string]: string } {
    return {
      hosts: 'Hosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hosts: { 'type': 'array', 'itemType': CreateNetTestTaskRequestDelayTestHosts },
    };
  }

  validate() {
    if(Array.isArray(this.hosts)) {
      $dara.Model.validateArray(this.hosts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetTestTaskRequestTrafficTestClients extends $dara.Model {
  /**
   * @remarks
   * Network card bond interface
   * 
   * @example
   * bond1
   */
  bond?: string;
  /**
   * @remarks
   * Node IP
   * 
   * @example
   * 192.168.1.1
   */
  IP?: string;
  /**
   * @remarks
   * Node ID
   * 
   * @example
   * e01-tw-w5elqg7pw18
   */
  nodeId?: string;
  /**
   * @remarks
   * Resource ID
   * 
   * @example
   * e01-cn-20s41p6cx01
   */
  resourceId?: string;
  /**
   * @remarks
   * Service name.
   * 
   * @example
   * xMv
   */
  serverName?: string;
  static names(): { [key: string]: string } {
    return {
      bond: 'Bond',
      IP: 'IP',
      nodeId: 'NodeId',
      resourceId: 'ResourceId',
      serverName: 'ServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bond: 'string',
      IP: 'string',
      nodeId: 'string',
      resourceId: 'string',
      serverName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetTestTaskRequestTrafficTestServers extends $dara.Model {
  /**
   * @remarks
   * Network card bond interface
   * 
   * @example
   * bond1
   */
  bond?: string;
  /**
   * @remarks
   * Node IP
   * 
   * @example
   * 47.121.110.190
   */
  IP?: string;
  /**
   * @remarks
   * Node ID
   * 
   * @example
   * e01-tw-bqisacl3z6l
   */
  nodeId?: string;
  /**
   * @remarks
   * Resource ID
   * 
   * @example
   * e01-cn-wwo3etaqu0b
   */
  resourceId?: string;
  /**
   * @remarks
   * Service name.
   * 
   * @example
   * xMv
   */
  serverName?: string;
  static names(): { [key: string]: string } {
    return {
      bond: 'Bond',
      IP: 'IP',
      nodeId: 'NodeId',
      resourceId: 'ResourceId',
      serverName: 'ServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bond: 'string',
      IP: 'string',
      nodeId: 'string',
      resourceId: 'string',
      serverName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetTestTaskRequestTrafficTest extends $dara.Model {
  /**
   * @remarks
   * Resource ID.
   */
  clients?: CreateNetTestTaskRequestTrafficTestClients[];
  /**
   * @remarks
   * The duration of the workflow task in seconds.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * Enter True/False when the protocol is RDMA, 
   * this field is empty when the protocol is TCP.
   * 
   * @example
   * False
   */
  GDR?: boolean;
  /**
   * @remarks
   * Network protocol, either RDMA or TCP.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * Enter the number of concurrent connections when the protocol is TCP, or enter the configured QP value when the protocol is RDMA.
   * 
   * @example
   * 1
   */
  QP?: number;
  /**
   * @remarks
   * Service list
   */
  servers?: CreateNetTestTaskRequestTrafficTestServers[];
  /**
   * @remarks
   * Traffic model, either MTON or Fullmesh.
   * 
   * @example
   * Fullmesh
   */
  trafficModel?: string;
  static names(): { [key: string]: string } {
    return {
      clients: 'Clients',
      duration: 'Duration',
      GDR: 'GDR',
      protocol: 'Protocol',
      QP: 'QP',
      servers: 'Servers',
      trafficModel: 'TrafficModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clients: { 'type': 'array', 'itemType': CreateNetTestTaskRequestTrafficTestClients },
      duration: 'number',
      GDR: 'boolean',
      protocol: 'string',
      QP: 'number',
      servers: { 'type': 'array', 'itemType': CreateNetTestTaskRequestTrafficTestServers },
      trafficModel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clients)) {
      $dara.Model.validateArray(this.clients);
    }
    if(Array.isArray(this.servers)) {
      $dara.Model.validateArray(this.servers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeGroupRequestNodeGroupSystemDisk extends $dara.Model {
  category?: string;
  performanceLevel?: string;
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

export class CreateNodeGroupRequestNodeGroup extends $dara.Model {
  /**
   * @remarks
   * Availability Zone
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu-b
   */
  az?: string;
  /**
   * @remarks
   * Image ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i191887641687336652616
   */
  imageId?: string;
  /**
   * @remarks
   * Machine type
   * 
   * This parameter is required.
   * 
   * @example
   * mock-machine-type3
   */
  machineType?: string;
  /**
   * @remarks
   * Node group description
   * 
   * @example
   * describe for node group
   */
  nodeGroupDescription?: string;
  /**
   * @remarks
   * Node group name
   * 
   * This parameter is required.
   * 
   * @example
   * PAI-LINGJUN
   */
  nodeGroupName?: string;
  systemDisk?: CreateNodeGroupRequestNodeGroupSystemDisk;
  /**
   * @remarks
   * user data
   * 
   * @example
   * #!/bin/bash
   * uptime
   * echo "aaaaaaa" >> /tmp/ttttt20250110141010.sh
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      az: 'Az',
      imageId: 'ImageId',
      machineType: 'MachineType',
      nodeGroupDescription: 'NodeGroupDescription',
      nodeGroupName: 'NodeGroupName',
      systemDisk: 'SystemDisk',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      az: 'string',
      imageId: 'string',
      machineType: 'string',
      nodeGroupDescription: 'string',
      nodeGroupName: 'string',
      systemDisk: CreateNodeGroupRequestNodeGroupSystemDisk,
      userData: 'string',
    };
  }

  validate() {
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyComponents extends $dara.Model {
  /**
   * @remarks
   * Component ID
   * 
   * @example
   * i149549021660892626529
   */
  componentId?: string;
  /**
   * @remarks
   * Component Type
   * 
   * @example
   * ACKEdge
   */
  componentType?: string;
  static names(): { [key: string]: string } {
    return {
      componentId: 'ComponentId',
      componentType: 'ComponentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentId: 'string',
      componentType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyNetworks extends $dara.Model {
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpdId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBodyInvocationsInvocationInvokeNodesInvokeNode extends $dara.Model {
  /**
   * @remarks
   * The start time of the command execution.
   * 
   * @example
   * 2023-02-06T07:12:50Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The length of the text that is truncated and discarded when the length of the `Output` field exceeds 24 KB.
   * 
   * @example
   * 0
   */
  dropped?: number;
  /**
   * @remarks
   * Reason code for file delivery failure. Possible values:
   * - Empty: File delivery is normal. 
   * - NodeNotExists: The specified instance does not exist or has been released. 
   * - NodeReleased: The instance was released during the file delivery process. 
   * - NodeNotRunning: The instance was not running when the file delivery task was created. 
   * - AccountNotExists: The specified account does not exist. 
   * - ClientNotRunning: The Cloud Assistant Agent is not running. 
   * - ClientNotResponse: The Cloud Assistant Agent is not responding. 
   * - ClientIsUpgrading: The Cloud Assistant Agent is currently upgrading. 
   * - ClientNeedUpgrade: The Cloud Assistant Agent needs to be upgraded. 
   * - DeliveryTimeout: File sending timed out. 
   * - FileCreateFail: File creation failed. 
   * - FileAlreadyExists: A file with the same name already exists at the specified path. 
   * - FileContentInvalid: The file content is invalid. - FileNameInvalid: The file name is invalid. 
   * - FilePathInvalid: The file path is invalid. 
   * - FileAuthorityInvalid: The file permissions are invalid. 
   * - UserGroupNotExists: The user group specified for file sending does not exist.
   * 
   * @example
   * NodeNotExists：
   */
  errorCode?: string;
  /**
   * @remarks
   * Details of the reason for command delivery failure or execution failure, possible values: 
   * - Empty: The command executed normally. 
   * - the specified node does not exist: The specified instance does not exist or has been released. 
   * - the node was released when creating the task: The instance was released during command execution. 
   * - the node is not running when creating the task: The instance was not in a running state when the command was executed. 
   * - the command is not applicable: The command is not applicable to the specified instance. 
   * - the specified account does not exist: The specified account does not exist. 
   * - the specified directory does not exist: The specified directory does not exist. 
   * - the cron job expression is invalid: The specified execution time expression is invalid. 
   * - the aliyun service is not running on the instance: The Cloud Assistant Agent is not running. 
   * - the aliyun service in the instance does not respond: The Cloud Assistant Agent is not responding. 
   * - the aliyun service in the node is upgrading now: The Cloud Assistant Agent is currently being upgraded. 
   * - the aliyun service in the node needs upgrade: The Cloud Assistant Agent needs an upgrade. 
   * - the command delivery has timed out: Command delivery has timed out. 
   * - the command execution has timed out: Command execution has timed out. 
   * - the command execution got an exception: An exception occurred during command execution. 
   * - the command execution was interrupted: Command execution was interrupted. 
   *  - the command execution exit code is not zero: Command execution completed with a non-zero exit code. 
   * - the specified node has been released: The instance was released during file delivery.
   * 
   * @example
   * the specified node does not exists
   */
  errorInfo?: string;
  /**
   * @remarks
   * The exit code of the command process. Possible values:
   * - For Linux instances, it is the exit code of the Shell process. - For Windows instances, it is the exit code of the Bat or PowerShell process.
   * 
   * @example
   * 0
   */
  exitCode?: number;
  /**
   * @remarks
   * Completion time.
   * 
   * @example
   * 2023-02-06T07:12:50Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The command progress status for a single instance. Possible values:
   * -  Pending: The system is validating or sending the command.
   * -  Invalid: The specified command type or parameters are incorrect.
   * -  Aborted: Failed to send the command to the instance. The instance must be running, and the command should be sent within 1 minute.
   * -  Running: The command is running on the instance.
   * -  Success:
   *     -  For a one-time execution command: The command has completed with an exit code of 0.
   *     -  For a periodic execution command: The last run was successful with an exit code of 0, and the specified period has ended.
   * -  Failed:
   *     -  For a one-time execution command: The command has completed with a non-zero exit code.
   *     -  For a periodic execution command: The last run was successful with a non-zero exit code, and the specified period will be terminated.
   * -  Error: An exception occurred during command execution, and it cannot continue.
   * -  Timeout: The command execution timed out.
   * -  Cancelled: The command execution action has been canceled, and the command was never started.
   * -  Stopping: The task is being stopped.
   * -  Terminated: The command was terminated while running.
   * -  Scheduled:
   *     -  For a one-time execution command: Not applicable, will not appear.
   *     -  For a periodic execution command: Waiting to run.
   * 
   * @example
   * Pending
   */
  invocationStatus?: string;
  /**
   * @remarks
   * Node ID
   * 
   * @example
   * e01-cn-lbj36wkp70b
   */
  nodeId?: string;
  /**
   * @remarks
   * The command progress status of a single instance.
   * 
   * @example
   * Finished
   */
  nodeInvokeStatus?: string;
  /**
   * @remarks
   * The output information of the command.
   * 
   * - If `ContentEncoding` is set to `PlainText`, the original output information is returned.
   * - If `ContentEncoding` is set to `Base64`, the Base64-encoded output information is returned.
   * 
   * @example
   * OutPutTestmsg
   */
  output?: string;
  /**
   * @remarks
   * The number of times the command has been executed on this instance.
   * -  If the execution mode is one-time, the value is 0 or 1.
   * -  If the execution mode is periodic, the value is the number of times it has been executed.
   * 
   * @example
   * 0
   */
  repeats?: number;
  /**
   * @remarks
   * Start Time
   * 
   * @example
   * 2019-12-20T06:15:55Z
   */
  startTime?: string;
  /**
   * @remarks
   * The time when `StopInvocation` was called to stop the command execution.
   * 
   * @example
   * 2019-12-20T06:15:55Z
   */
  stopTime?: string;
  /**
   * @remarks
   * Whether the queried command will be automatically executed in the future. The value range is as follows:
   * - true: The command, when executed by calling `RunCommand` or `InvokeCommand`, has the `RepeatMode` parameter set to `Period`, `NextRebootOnly`, or `EveryReboot`. 
   * - false: Queries commands in the following two states. 
   * - When executing a command via `RunCommand` or `InvokeCommand`, the `RepeatMode` parameter is set to `Once`. 
   * - Commands that have been canceled, stopped, or completed.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  timed?: string;
  /**
   * @remarks
   * Update Time
   * 
   * @example
   * 2023-02-06T07:12:50Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      dropped: 'Dropped',
      errorCode: 'ErrorCode',
      errorInfo: 'ErrorInfo',
      exitCode: 'ExitCode',
      finishTime: 'FinishTime',
      invocationStatus: 'InvocationStatus',
      nodeId: 'NodeId',
      nodeInvokeStatus: 'NodeInvokeStatus',
      output: 'Output',
      repeats: 'Repeats',
      startTime: 'StartTime',
      stopTime: 'StopTime',
      timed: 'Timed',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      dropped: 'number',
      errorCode: 'string',
      errorInfo: 'string',
      exitCode: 'number',
      finishTime: 'string',
      invocationStatus: 'string',
      nodeId: 'string',
      nodeInvokeStatus: 'string',
      output: 'string',
      repeats: 'number',
      startTime: 'string',
      stopTime: 'string',
      timed: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBodyInvocationsInvocationInvokeNodes extends $dara.Model {
  /**
   * @remarks
   * Command execution records for nodes.
   */
  invokeNode?: DescribeInvocationsResponseBodyInvocationsInvocationInvokeNodesInvokeNode[];
  static names(): { [key: string]: string } {
    return {
      invokeNode: 'InvokeNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeNode: { 'type': 'array', 'itemType': DescribeInvocationsResponseBodyInvocationsInvocationInvokeNodesInvokeNode },
    };
  }

  validate() {
    if(Array.isArray(this.invokeNode)) {
      $dara.Model.validateArray(this.invokeNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBodyInvocationsInvocation extends $dara.Model {
  /**
   * @remarks
   * Command content.
   * 
   * - If `ContentEncoding` is set to `PlainText`, the original script content is returned.
   * - If `ContentEncoding` is set to `Base64`, the Base64-encoded script content is returned.
   * 
   * @example
   * cnBtIC1xYSB8IGdyZXAgdnNm****
   */
  commandContent?: string;
  /**
   * @remarks
   * Command description.
   * 
   * @example
   * testDescription
   */
  commandDescription?: string;
  /**
   * @remarks
   * Command name.
   * 
   * @example
   * CommandTestName
   */
  commandName?: string;
  /**
   * @remarks
   * The creation time of the task.
   * 
   * @example
   * 2020-01-19T09:15:46Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The execution time for scheduled commands.
   */
  frequency?: string;
  /**
   * @remarks
   * The overall execution status of the command, which depends on the common execution status of all instances involved in the call. Possible values:
   * - Pending: The system is validating or sending the command. If at least one instance has a command execution status of Pending, the overall status is Pending.
   * - Scheduled: The scheduled command has been sent and is waiting to run. If at least one instance has a command execution status of Scheduled, the overall status is Scheduled.
   * - Running: The command is running on the instance. If at least one instance has a command execution status of Running, the overall status is Running.
   * - Success: The command execution status of all instances is Stopped or Success, and at least one instance\\"s command execution status is Success. The overall status is Success.
   *     - For immediately executed tasks: The command has completed with an exit code of 0.
   *     - For periodically executed tasks: The most recent execution was successful with an exit code of 0, and the specified times have all been completed.
   * - Failed: The command execution status of all instances is Stopped or Failed. The overall status is Failed if any of the following conditions apply to the instance\\"s command execution status:
   *     - Command validation failed (Invalid).
   *     - Command sending failed (Aborted).
   *     - Command completed but the exit code is not 0 (Failed).
   *     - Command execution timed out (Timeout).
   *     - Command execution encountered an error (Error).
   * - Stopping: The task is being stopped. If at least one instance has a command execution status of Stopping, the overall status is Stopping.
   * - Stopped: The task has been stopped. If all instances\\" command execution statuses are Stopped, the overall status is Stopped. The overall status is Stopped if the instance\\"s command execution status is any of the following:
   *     - The task was canceled (Cancelled).
   *     - The task was terminated (Terminated).
   * - PartialFailed: Some instances succeeded and some failed. If the command execution statuses of all instances are Success, Failed, or Stopped, the overall status is PartialFailed.
   * 
   * > The `InvokeStatus` in the response parameters is similar in meaning to this parameter, but it is recommended that you check this return value.
   * 
   * @example
   * Success
   */
  invocationStatus?: string;
  /**
   * @remarks
   * Command execution ID.
   * 
   * @example
   * t-ind3k9ytvvduoe8
   */
  invokeId?: string;
  /**
   * @remarks
   * Command execution records.
   */
  invokeNodes?: DescribeInvocationsResponseBodyInvocationsInvocationInvokeNodes;
  /**
   * @remarks
   * The overall execution status of the command. The overall execution status depends on the common execution status of one or more instances in the execution. Possible values: 
   * - Running:
   *     - For scheduled execution: The execution status remains ongoing until the scheduled command is manually stopped.
   *     - For single execution: If there is any command process running, the overall execution status is ongoing.
   * - Finished:
   *     - For scheduled execution: The command process cannot be completed.
   *     - For single execution: All instances have completed execution, or some instances\\" command processes are manually stopped and the rest have completed.
   * - Failed:
   *     - For scheduled execution: The command process cannot fail.
   *     - For single execution: All instances have failed to execute.
   * - Stopped: The command has been stopped.
   * - Stopping: The command is being stopped.
   * - PartialFailed: Partial failure; if the `InstanceId` parameter is set, this does not apply.
   * 
   * @example
   * Running
   */
  invokeStatus?: string;
  /**
   * @remarks
   * Custom parameters in the command.
   * 
   * @example
   * {}
   */
  parameters?: string;
  /**
   * @remarks
   * 命令执行的方式。可能值：
   * 
   * Once：立即执行命令。
   * Period：定时执行命令。
   * NextRebootOnly：当实例下一次启动时，自动执行命令。
   * EveryReboot：实例每一次启动都将自动执行命令。
   * 
   * @example
   * Once
   */
  repeatMode?: string;
  /**
   * @remarks
   * Timeout for executing the command, in seconds.
   * 
   * @example
   * 60
   */
  timeout?: number;
  /**
   * @remarks
   * Username for executing the command.
   * 
   * @example
   * root
   */
  username?: string;
  /**
   * @remarks
   * The working directory of the command on the instance.
   * 
   * @example
   * /home
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      commandDescription: 'CommandDescription',
      commandName: 'CommandName',
      creationTime: 'CreationTime',
      frequency: 'Frequency',
      invocationStatus: 'InvocationStatus',
      invokeId: 'InvokeId',
      invokeNodes: 'InvokeNodes',
      invokeStatus: 'InvokeStatus',
      parameters: 'Parameters',
      repeatMode: 'RepeatMode',
      timeout: 'Timeout',
      username: 'Username',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      commandDescription: 'string',
      commandName: 'string',
      creationTime: 'string',
      frequency: 'string',
      invocationStatus: 'string',
      invokeId: 'string',
      invokeNodes: DescribeInvocationsResponseBodyInvocationsInvocationInvokeNodes,
      invokeStatus: 'string',
      parameters: 'string',
      repeatMode: 'string',
      timeout: 'number',
      username: 'string',
      workingDir: 'string',
    };
  }

  validate() {
    if(this.invokeNodes && typeof (this.invokeNodes as any).validate === 'function') {
      (this.invokeNodes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBodyInvocations extends $dara.Model {
  /**
   * @remarks
   * File delivery record.
   */
  invocation?: DescribeInvocationsResponseBodyInvocationsInvocation[];
  static names(): { [key: string]: string } {
    return {
      invocation: 'Invocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocation: { 'type': 'array', 'itemType': DescribeInvocationsResponseBodyInvocationsInvocation },
    };
  }

  validate() {
    if(Array.isArray(this.invocation)) {
      $dara.Model.validateArray(this.invocation);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetTestResultResponseBodyCommTestHosts extends $dara.Model {
  /**
   * @remarks
   * IP address
   * 
   * @example
   * 169.253.253.15
   */
  IP?: string;
  /**
   * @remarks
   * Resource ID
   * 
   * @example
   * i111670831721110797708
   */
  resourceId?: string;
  /**
   * @remarks
   * 服务名称。
   * 
   * @example
   * VBw
   */
  serverName?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      resourceId: 'ResourceId',
      serverName: 'ServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
      resourceId: 'string',
      serverName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetTestResultResponseBodyCommTest extends $dara.Model {
  /**
   * @remarks
   * Number of GPUs
   * 
   * @example
   * 1
   */
  GPUNum?: string;
  /**
   * @remarks
   * Resource ID
   */
  hosts?: DescribeNetTestResultResponseBodyCommTestHosts[];
  /**
   * @remarks
   * Communication library model
   * 
   * @example
   * intention_v4
   */
  model?: string;
  /**
   * @remarks
   * Communication library test category: ACCL or NCCL
   * 
   * @example
   * ACCL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      GPUNum: 'GPUNum',
      hosts: 'Hosts',
      model: 'Model',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GPUNum: 'string',
      hosts: { 'type': 'array', 'itemType': DescribeNetTestResultResponseBodyCommTestHosts },
      model: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hosts)) {
      $dara.Model.validateArray(this.hosts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetTestResultResponseBodyDelayTestHosts extends $dara.Model {
  /**
   * @remarks
   * Network card bond interface
   * 
   * @example
   * bond1
   */
  bond?: string;
  /**
   * @remarks
   * Node IP
   * 
   * @example
   * 125.210.225.48
   */
  IP?: string;
  /**
   * @remarks
   * Resource ID
   * 
   * @example
   * e01-cn-bcd3u1aee06
   */
  resourceId?: string;
  /**
   * @remarks
   * Service name
   * 
   * @example
   * NQU
   */
  serverName?: string;
  static names(): { [key: string]: string } {
    return {
      bond: 'Bond',
      IP: 'IP',
      resourceId: 'ResourceId',
      serverName: 'ServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bond: 'string',
      IP: 'string',
      resourceId: 'string',
      serverName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetTestResultResponseBodyDelayTest extends $dara.Model {
  /**
   * @remarks
   * Input the hosts of the test nodes
   */
  hosts?: DescribeNetTestResultResponseBodyDelayTestHosts[];
  static names(): { [key: string]: string } {
    return {
      hosts: 'Hosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hosts: { 'type': 'array', 'itemType': DescribeNetTestResultResponseBodyDelayTestHosts },
    };
  }

  validate() {
    if(Array.isArray(this.hosts)) {
      $dara.Model.validateArray(this.hosts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetTestResultResponseBodyTrafficTestClients extends $dara.Model {
  /**
   * @remarks
   * Network card bond interface
   * 
   * @example
   * bond1
   */
  bond?: string;
  /**
   * @remarks
   * Node IP
   * 
   * @example
   * 192.168.1.1
   */
  IP?: string;
  /**
   * @remarks
   * Resource ID
   * 
   * @example
   * e01-cn-20s41p6cx01
   */
  resourceId?: string;
  /**
   * @remarks
   * 服务名称。
   * 
   * @example
   * xMv
   */
  serverName?: string;
  static names(): { [key: string]: string } {
    return {
      bond: 'Bond',
      IP: 'IP',
      resourceId: 'ResourceId',
      serverName: 'ServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bond: 'string',
      IP: 'string',
      resourceId: 'string',
      serverName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetTestResultResponseBodyTrafficTestServers extends $dara.Model {
  /**
   * @remarks
   * Network card bond interface
   * 
   * @example
   * bond1
   */
  bond?: string;
  /**
   * @remarks
   * Node IP
   * 
   * @example
   * 47.121.110.190
   */
  IP?: string;
  /**
   * @remarks
   * Resource ID
   * 
   * @example
   * e01-cn-wwo3etaqu0b
   */
  resourceId?: string;
  /**
   * @remarks
   * Service name
   * 
   * @example
   * xMv
   */
  serverName?: string;
  static names(): { [key: string]: string } {
    return {
      bond: 'Bond',
      IP: 'IP',
      resourceId: 'ResourceId',
      serverName: 'ServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bond: 'string',
      IP: 'string',
      resourceId: 'string',
      serverName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetTestResultResponseBodyTrafficTest extends $dara.Model {
  /**
   * @remarks
   * Resource ID.
   */
  clients?: DescribeNetTestResultResponseBodyTrafficTestClients[];
  /**
   * @remarks
   * Duration of the workflow task in seconds.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * For RDMA, enter True/False; for TCP, this field is empty.
   * 
   * @example
   * False
   */
  GDR?: string;
  /**
   * @remarks
   * Network protocol, either RDMA or TCP.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * For TCP, enter the number of concurrent test connections; for RDMA, enter the configured QP value.
   * 
   * @example
   * 1
   */
  QP?: number;
  /**
   * @remarks
   * List of servers
   */
  servers?: DescribeNetTestResultResponseBodyTrafficTestServers[];
  /**
   * @remarks
   * Traffic model, either MTON or Fullmesh.
   * 
   * @example
   * Fullmesh
   */
  trafficModel?: string;
  static names(): { [key: string]: string } {
    return {
      clients: 'Clients',
      duration: 'Duration',
      GDR: 'GDR',
      protocol: 'Protocol',
      QP: 'QP',
      servers: 'Servers',
      trafficModel: 'TrafficModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clients: { 'type': 'array', 'itemType': DescribeNetTestResultResponseBodyTrafficTestClients },
      duration: 'number',
      GDR: 'string',
      protocol: 'string',
      QP: 'number',
      servers: { 'type': 'array', 'itemType': DescribeNetTestResultResponseBodyTrafficTestServers },
      trafficModel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clients)) {
      $dara.Model.validateArray(this.clients);
    }
    if(Array.isArray(this.servers)) {
      $dara.Model.validateArray(this.servers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeResponseBodyDisks extends $dara.Model {
  category?: string;
  diskId?: string;
  performanceLevel?: string;
  size?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      diskId: 'DiskId',
      performanceLevel: 'PerformanceLevel',
      size: 'Size',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      diskId: 'string',
      performanceLevel: 'string',
      size: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeResponseBodyNetworks extends $dara.Model {
  /**
   * @remarks
   * Network interface port information
   * 
   * @example
   * Bond0
   */
  bondName?: string;
  /**
   * @remarks
   * Machine IP
   * 
   * @example
   * 47.254.235.44
   */
  ip?: string;
  /**
   * @remarks
   * Cluster subnet ID
   * 
   * @example
   * vsw-uf68v51fldm5egmui5a6k
   */
  subnetId?: string;
  /**
   * @remarks
   * Cluster network ID
   * 
   * @example
   * vpd-xcuhjyrj
   */
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      bondName: 'BondName',
      ip: 'Ip',
      subnetId: 'SubnetId',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bondName: 'string',
      ip: 'string',
      subnetId: 'string',
      vpdId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $dara.Model {
  /**
   * @remarks
   * Region name
   * 
   * @example
   * Hang Zhou
   */
  localName?: string;
  /**
   * @remarks
   * region id
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeNodesInvokeNode extends $dara.Model {
  /**
   * @remarks
   * The creation time of the file distribution task.
   * 
   * @example
   * 2023-02-06T07:12:50Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The failure reason code for file distribution. Possible values:
   * - Empty: The file was distributed normally. 
   * - NodeNotExists: The specified instance does not exist or has been released. 
   * - NodeReleased: The instance was released during the file distribution process. 
   * - NodeNotRunning: The instance was not running when the file distribution task was created. 
   * - AccountNotExists: The specified account does not exist. 
   * - ClientNotRunning: The Cloud Assistant Agent is not running. 
   * - ClientNotResponse: The Cloud Assistant Agent is not responding. 
   * - ClientIsUpgrading: The Cloud Assistant Agent is currently being upgraded. 
   * - ClientNeedUpgrade: The Cloud Assistant Agent needs to be upgraded. 
   * - DeliveryTimeout: File delivery timed out. 
   * - FileCreateFail: Failed to create the file. 
   * - FileAlreadyExists: A file with the same name already exists at the specified path. 
   * - FileContentInvalid: The file content is invalid. 
   * - FileNameInvalid: The file name is invalid. 
   * - FilePathInvalid: The file path is invalid. 
   * - FileAuthorityInvalid: The file permissions are invalid. 
   * - UserGroupNotExists: The user group specified for file delivery does not exist.
   * 
   * @example
   * AccountNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * Details of the reason for command delivery failure or execution failure, possible values: 
   * - Empty: The command executed normally. 
   * - the specified instance does not exist: The specified instance does not exist or has been released. 
   * - the node has been released when creating task: The instance was released during the command execution. 
   * - the node is not running when creating task: The instance was not in a running state when the command was executed. 
   * - the command is not applicable: The command is not applicable to the specified instance. 
   * - the specified account does not exist: The specified account does not exist. 
   * - the specified directory does not exist: The specified directory does not exist. 
   * - the cron job expression is invalid: The specified execution time expression is invalid. 
   * - the aliyun service is not running on the instance: The Cloud Assistant Agent is not running. 
   * - the aliyun service in the instance does not respond: The Cloud Assistant Agent is not responding. 
   * - the aliyun service in the node is upgrading now: The Cloud Assistant Agent is currently being upgraded. 
   * - the aliyun service in the node needs upgrade: The Cloud Assistant Agent needs an upgrade. 
   * - the command delivery has timed out: Command delivery has timed out. 
   * - the command execution has timed out: Command execution has timed out. 
   * - the command execution got an exception: An exception occurred during command execution. 
   * - the command execution has been interrupted: The command execution was interrupted. 
   * - the command execution exit code is not zero: The command execution completed with a non-zero exit code. 
   * - the specified instance has been released: The instance was released during file delivery.
   * 
   * @example
   * the specified instance does not exists
   */
  errorInfo?: string;
  /**
   * @remarks
   * Completion time, format: "2020-05-22T17:04:18".
   * 
   * @example
   * 2023-04-10T10:53:46.156+08:00
   */
  finishTime?: string;
  /**
   * @remarks
   * Status of the task on a single instance. Possible values:
   * - Pending: The system is validating or distributing the file.
   * - Invalid: The specified file parameters are incorrect, and validation failed.
   * - Running: The file is being distributed to the instance.
   * - Aborted: Failed to distribute the file to the instance.
   * - Success: The file distribution is complete.
   * - Failed: The file creation failed within the instance.
   * - Error: An exception occurred during file distribution and could not continue.
   * - Timeout: The file distribution timed out.
   * 
   * @example
   * Success
   */
  invocationStatus?: string;
  /**
   * @remarks
   * Node ID.
   * 
   * @example
   * e01-cn-9lb3c15m81j
   */
  nodeId?: string;
  /**
   * @remarks
   * Start Time
   * 
   * @example
   * 2023-03-30T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * Update Time
   * 
   * @example
   * 2023-03-30T16:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      errorCode: 'ErrorCode',
      errorInfo: 'ErrorInfo',
      finishTime: 'FinishTime',
      invocationStatus: 'InvocationStatus',
      nodeId: 'NodeId',
      startTime: 'StartTime',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      errorCode: 'string',
      errorInfo: 'string',
      finishTime: 'string',
      invocationStatus: 'string',
      nodeId: 'string',
      startTime: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeNodes extends $dara.Model {
  /**
   * @remarks
   * Record of file distribution for the node.
   */
  invokeNode?: DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeNodesInvokeNode[];
  static names(): { [key: string]: string } {
    return {
      invokeNode: 'InvokeNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeNode: { 'type': 'array', 'itemType': DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeNodesInvokeNode },
    };
  }

  validate() {
    if(Array.isArray(this.invokeNode)) {
      $dara.Model.validateArray(this.invokeNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSendFileResultsResponseBodyInvocationsInvocation extends $dara.Model {
  /**
   * @remarks
   * Output information after command execution.
   * 
   * If ContentEncoding is specified as PlainText, the original output information is returned.
   * If ContentEncoding is specified as Base64, the Base64 encoded output information is returned.
   * 
   * @example
   * Base64
   */
  content?: string;
  /**
   * @remarks
   * File content type.
   * 
   * PlainText: Plain text.
   * Base64: Base64 encoding.
   * The default value is PlainText.
   * 
   * @example
   * PlainText
   */
  contentType?: string;
  /**
   * @remarks
   * Creation time of the distribution.
   * 
   * @example
   * 2023-04-10T10:53:46.156+08:00
   */
  creationTime?: string;
  /**
   * @remarks
   * Command description.
   * 
   * @example
   * 描述信息。
   */
  description?: string;
  /**
   * @remarks
   * The user group of the file.
   * 
   * @example
   * root
   */
  fileGroup?: string;
  /**
   * @remarks
   * File permissions.
   * 
   * @example
   * 0644
   */
  fileMode?: string;
  /**
   * @remarks
   * The owner of the file.
   * 
   * @example
   * root
   */
  fileOwner?: string;
  /**
   * @remarks
   * Overall status of the file distribution. The overall status depends on the common execution status of all instances involved in this distribution, possible values are:
   * 
   * - Pending: The system is verifying or distributing the file. If at least one instance has a file distribution status of Pending, the overall execution status will be Pending.
   * - Running: The file is being distributed on the instance. If at least one instance has a file distribution status of Running, the overall execution status will be Running.
   * - Success: All instances have a file distribution status of Success, then the overall execution status will be Success.
   * - Failed: All instances have a file distribution status of Failed, then the overall execution status will be Failed. If any of the following conditions occur for the file distribution status on an instance, the return value will be Failed:
   *     - The specified file parameters are incorrect, verification failed (Invalid).
   *     - Failed to distribute the file to the instance (Aborted).
   *     - The file creation failed within the instance (Failed).
   *     - The file distribution timed out (Timeout).
   *     - An exception occurred during file distribution and could not continue (Error).
   * - PartialFailed: Some instances successfully received the file while others failed. If the file distribution status of all instances is either Success or Failed, the overall execution status will be PartialFailed.
   * 
   * @example
   * Pending
   */
  invocationStatus?: string;
  /**
   * @remarks
   * Record of file distribution.
   */
  invokeNodes?: DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeNodes;
  /**
   * @remarks
   * Name of the file distribution.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Number of nodes
   * 
   * @example
   * 3
   */
  nodeCount?: number;
  /**
   * @remarks
   * Whether to overwrite the file if a file with the same name already exists in the target directory.
   * - true: Overwrite.
   * - false: Do not overwrite.
   * 
   * The default value is false.
   * 
   * @example
   * true
   */
  overwrite?: boolean;
  /**
   * @remarks
   * Target path.
   * 
   * @example
   * /home/user
   */
  targetDir?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      creationTime: 'CreationTime',
      description: 'Description',
      fileGroup: 'FileGroup',
      fileMode: 'FileMode',
      fileOwner: 'FileOwner',
      invocationStatus: 'InvocationStatus',
      invokeNodes: 'InvokeNodes',
      name: 'Name',
      nodeCount: 'NodeCount',
      overwrite: 'Overwrite',
      targetDir: 'TargetDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      creationTime: 'string',
      description: 'string',
      fileGroup: 'string',
      fileMode: 'string',
      fileOwner: 'string',
      invocationStatus: 'string',
      invokeNodes: DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeNodes,
      name: 'string',
      nodeCount: 'number',
      overwrite: 'boolean',
      targetDir: 'string',
    };
  }

  validate() {
    if(this.invokeNodes && typeof (this.invokeNodes as any).validate === 'function') {
      (this.invokeNodes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSendFileResultsResponseBodyInvocations extends $dara.Model {
  /**
   * @remarks
   * Command execution ID.
   */
  invocation?: DescribeSendFileResultsResponseBodyInvocationsInvocation[];
  static names(): { [key: string]: string } {
    return {
      invocation: 'Invocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocation: { 'type': 'array', 'itemType': DescribeSendFileResultsResponseBodyInvocationsInvocation },
    };
  }

  validate() {
    if(Array.isArray(this.invocation)) {
      $dara.Model.validateArray(this.invocation);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskResponseBodyStepsSubTasks extends $dara.Model {
  /**
   * @remarks
   * Creation Time
   * 
   * @example
   * 2022-11-30T2:00:00.852Z
   */
  createTime?: string;
  /**
   * @remarks
   * Subtask Failure Message
   * 
   * @example
   * Releasing [prod_main_mid_26e234cf] in region [cn-beijing] with weight [0]
   */
  message?: string;
  /**
   * @remarks
   * Task ID
   * 
   * @example
   * i158805051661047928377
   */
  taskId?: string;
  /**
   * @remarks
   * Task Execution State
   * 
   * @example
   * running
   */
  taskState?: string;
  /**
   * @remarks
   * Task Type
   * 
   * @example
   * cut_node_sub_task
   */
  taskType?: string;
  /**
   * @remarks
   * Update Time
   * 
   * @example
   * 2022-11-30T02:20:14.852Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      message: 'Message',
      taskId: 'TaskId',
      taskState: 'TaskState',
      taskType: 'TaskType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      message: 'string',
      taskId: 'string',
      taskState: 'string',
      taskType: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskResponseBodySteps extends $dara.Model {
  /**
   * @remarks
   * Step Failure Message
   * 
   * @example
   * get taskinfo failed
   */
  message?: string;
  /**
   * @remarks
   * Stage Tag
   * 
   * @example
   * Node scaling
   */
  stageTag?: string;
  /**
   * @remarks
   * Start Time
   * 
   * @example
   * 2022-11-30T2:00:00.852Z
   */
  startTime?: string;
  /**
   * @remarks
   * Step Name
   * 
   * @example
   * create_vpd
   */
  stepName?: string;
  /**
   * @remarks
   * Step Execution State
   * 
   * @example
   * execution_success
   */
  stepState?: string;
  /**
   * @remarks
   * Step Type
   * 
   * @example
   * normal
   */
  stepType?: string;
  /**
   * @remarks
   * Subtasks
   */
  subTasks?: DescribeTaskResponseBodyStepsSubTasks[];
  /**
   * @remarks
   * Update Time
   * 
   * @example
   * 2022-11-30T02:20:14.852Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      stageTag: 'StageTag',
      startTime: 'StartTime',
      stepName: 'StepName',
      stepState: 'StepState',
      stepType: 'StepType',
      subTasks: 'SubTasks',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      stageTag: 'string',
      startTime: 'string',
      stepName: 'string',
      stepState: 'string',
      stepType: 'string',
      subTasks: { 'type': 'array', 'itemType': DescribeTaskResponseBodyStepsSubTasks },
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.subTasks)) {
      $dara.Model.validateArray(this.subTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZones extends $dara.Model {
  /**
   * @remarks
   * Zone name
   * 
   * @example
   * Hang Zhou
   */
  localName?: string;
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
      localName: 'LocalName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
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
   * Machine Type
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
   * Host name
   * 
   * @example
   * i22c11282.eu95sqa
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

export class ExtendClusterRequestNodeGroupsNodeTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag.
   * 
   * @example
   * my_key
   */
  key?: string;
  /**
   * @remarks
   * The value of tag.
   * 
   * @example
   * my_value
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

export class ExtendClusterRequestNodeGroupsNodes extends $dara.Model {
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
      hostname: 'Hostname',
      loginPassword: 'LoginPassword',
      nodeId: 'NodeId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostname: 'string',
      loginPassword: 'string',
      nodeId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListClusterNodesRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of tag object
   * 
   * @example
   * aa_key
   */
  key?: string;
  /**
   * @remarks
   * The value of tag object
   * 
   * @example
   * aa_value
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

export class ListClusterNodesResponseBodyNodesNetworks extends $dara.Model {
  /**
   * @remarks
   * Machine network interface name
   * 
   * @example
   * bond0
   */
  bondName?: string;
  /**
   * @remarks
   * IP address within the VPC
   * 
   * @example
   * 192.168.22.2
   */
  ip?: string;
  /**
   * @remarks
   * VPC subnet ID
   * 
   * @example
   * subnet-fwekrvg9
   */
  subnetId?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpd-eoiy88ju
   */
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      bondName: 'BondName',
      ip: 'Ip',
      subnetId: 'SubnetId',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bondName: 'string',
      ip: 'string',
      subnetId: 'string',
      vpdId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterNodesResponseBodyNodesTags extends $dara.Model {
  /**
   * @remarks
   * The key of tag object
   * 
   * @example
   * aa_key
   */
  key?: string;
  /**
   * @remarks
   * The value of tag object
   * 
   * @example
   * aa_value
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

export class ListClusterNodesResponseBodyNodes extends $dara.Model {
  /**
   * @remarks
   * product code
   * 
   * @example
   * bcccluster
   */
  commodityCode?: string;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 1642472468000
   */
  createTime?: string;
  /**
   * @remarks
   * Machine expiration time
   * 
   * @example
   * 1762185600000
   */
  expiredTime?: string;
  /**
   * @remarks
   * Hostname
   * 
   * @example
   * 72432f80-273e-11ed-b57a-acde48001122
   */
  hostname?: string;
  /**
   * @remarks
   * Hpn Zone
   * 
   * @example
   * A1
   */
  hpnZone?: string;
  /**
   * @remarks
   * System image ID
   * 
   * @example
   * i190297201669099844192
   */
  imageId?: string;
  /**
   * @remarks
   * image name
   * 
   * @example
   * Alinux3_x86_AMD_R_Host_D3_E3_24.13.00_UEFI_N_250121
   */
  imageName?: string;
  /**
   * @remarks
   * Machine type
   * 
   * @example
   * cn-wulanchabu-b11
   */
  machineType?: string;
  /**
   * @remarks
   * Network information
   */
  networks?: ListClusterNodesResponseBodyNodesNetworks[];
  /**
   * @remarks
   * Node group ID
   * 
   * @example
   * ng-e9b74f4d450cf18d
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * Node group name
   * 
   * @example
   * emr_master
   */
  nodeGroupName?: string;
  /**
   * @remarks
   * Node ID
   * 
   * @example
   * e01-cn-2r42tmj4z02
   */
  nodeId?: string;
  /**
   * @remarks
   * Node status
   * 
   * @example
   * Extending
   */
  operatingState?: string;
  /**
   * @remarks
   * Machine SN
   * 
   * @example
   * sn_tOuUk
   */
  sn?: string;
  /**
   * @remarks
   * tag information
   */
  tags?: ListClusterNodesResponseBodyNodesTags[];
  /**
   * @remarks
   * task id
   * 
   * @example
   * i28ddkdkkdkdd
   */
  taskId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1mxqhw8o20tgv3xk47h
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-0jltf9vinjz3if3lltdy7
   */
  vpcId?: string;
  /**
   * @remarks
   * Zone ID
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      createTime: 'CreateTime',
      expiredTime: 'ExpiredTime',
      hostname: 'Hostname',
      hpnZone: 'HpnZone',
      imageId: 'ImageId',
      imageName: 'ImageName',
      machineType: 'MachineType',
      networks: 'Networks',
      nodeGroupId: 'NodeGroupId',
      nodeGroupName: 'NodeGroupName',
      nodeId: 'NodeId',
      operatingState: 'OperatingState',
      sn: 'Sn',
      tags: 'Tags',
      taskId: 'TaskId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      createTime: 'string',
      expiredTime: 'string',
      hostname: 'string',
      hpnZone: 'string',
      imageId: 'string',
      imageName: 'string',
      machineType: 'string',
      networks: { 'type': 'array', 'itemType': ListClusterNodesResponseBodyNodesNetworks },
      nodeGroupId: 'string',
      nodeGroupName: 'string',
      nodeId: 'string',
      operatingState: 'string',
      sn: 'string',
      tags: { 'type': 'array', 'itemType': ListClusterNodesResponseBodyNodesTags },
      taskId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.networks)) {
      $dara.Model.validateArray(this.networks);
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

export class ListClustersRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of tag object
   * 
   * @example
   * key_aa
   */
  key?: string;
  /**
   * @remarks
   * The value of tag object
   * 
   * @example
   * value_aa
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

export class ListClustersResponseBodyClustersTags extends $dara.Model {
  /**
   * @remarks
   * The key of tag object
   * 
   * @example
   * aa_key
   */
  key?: string;
  /**
   * @remarks
   * The value of tag object
   * 
   * @example
   * aa_value
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

export class ListClustersResponseBodyClusters extends $dara.Model {
  /**
   * @remarks
   * Cluster description
   * 
   * @example
   * PPU-cluster2 bz
   */
  clusterDescription?: string;
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * i137590131672134915401
   */
  clusterId?: string;
  /**
   * @remarks
   * Cluster name
   * 
   * @example
   * cnp_test_cluster
   */
  clusterName?: string;
  /**
   * @remarks
   * Cluster type
   * 
   * @example
   * AckEdgePro
   */
  clusterType?: string;
  /**
   * @remarks
   * Component information
   * 
   * @example
   * {}
   */
  components?: any;
  /**
   * @remarks
   * IP version of the computing network
   * 
   * @example
   * IPv4
   */
  computingIpVersion?: string;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 1672134938
   */
  createTime?: string;
  /**
   * @remarks
   * Cluster number
   * 
   * @example
   * B1
   */
  hpnZone?: string;
  /**
   * @remarks
   * Number of nodes
   * 
   * @example
   * 12
   */
  nodeCount?: number;
  /**
   * @remarks
   * Number of node groups
   * 
   * @example
   * 2
   */
  nodeGroupCount?: number;
  /**
   * @remarks
   * Cluster status
   * 
   * @example
   * initializing
   */
  operatingState?: string;
  /**
   * @remarks
   * Resource group ID
   * 
   * @example
   * rg-aek2ajbjoloa23q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * tag information
   */
  tags?: ListClustersResponseBodyClustersTags[];
  /**
   * @remarks
   * Task ID
   * 
   * @example
   * i156365121663149566024
   */
  taskId?: string;
  /**
   * @remarks
   * Update time
   * 
   * @example
   * 1672134968
   */
  updateTime?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-0jlx4hol2bjboafzmffvd
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterDescription: 'ClusterDescription',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      components: 'Components',
      computingIpVersion: 'ComputingIpVersion',
      createTime: 'CreateTime',
      hpnZone: 'HpnZone',
      nodeCount: 'NodeCount',
      nodeGroupCount: 'NodeGroupCount',
      operatingState: 'OperatingState',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      taskId: 'TaskId',
      updateTime: 'UpdateTime',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterDescription: 'string',
      clusterId: 'string',
      clusterName: 'string',
      clusterType: 'string',
      components: 'any',
      computingIpVersion: 'string',
      createTime: 'string',
      hpnZone: 'string',
      nodeCount: 'number',
      nodeGroupCount: 'number',
      operatingState: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListClustersResponseBodyClustersTags },
      taskId: 'string',
      updateTime: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnosticResultsResponseBodyDiagnosticResults extends $dara.Model {
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * i118578141694745246055
   */
  clusterId?: string;
  /**
   * @remarks
   * Cluster name
   * 
   * @example
   * pjlab-lingjun
   */
  clusterName?: string;
  /**
   * @remarks
   * Creation time of the diagnostic task.
   * 
   * @example
   * 2024-01-15T02:01:12Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Diagnosis content. For example, in network diagnosis, there are static configuration checks, dynamic operation checks, etc.
   * 
   * @example
   * diagcontent
   */
  diagContent?: string;
  /**
   * @remarks
   * Diagnosis ID
   * 
   * @example
   * 123
   */
  diagId?: string;
  /**
   * @remarks
   * Diagnosis result, success or failure.
   * 
   * @example
   * Success
   */
  diagResult?: string;
  /**
   * @remarks
   * Completion time of the diagnostic task.
   * 
   * @example
   * 2024-10-16T02:04Z
   */
  finishedTime?: string;
  /**
   * @remarks
   * Resource ID
   * 
   * @example
   * e01-cn-bl03ofg6206
   */
  resourceId?: string;
  /**
   * @remarks
   * Service name.
   * 
   * @example
   * proxy-rps.mos.csvw.com
   */
  serverName?: string;
  /**
   * @remarks
   * Governance status
   * 
   * @example
   * succeed
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      creationTime: 'CreationTime',
      diagContent: 'DiagContent',
      diagId: 'DiagId',
      diagResult: 'DiagResult',
      finishedTime: 'FinishedTime',
      resourceId: 'ResourceId',
      serverName: 'ServerName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      creationTime: 'string',
      diagContent: 'string',
      diagId: 'string',
      diagResult: 'string',
      finishedTime: 'string',
      resourceId: 'string',
      serverName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFreeNodesRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of tag object
   * 
   * @example
   * key_aa
   */
  key?: string;
  /**
   * @remarks
   * The value of tag object
   * 
   * @example
   * value_aa
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

export class ListFreeNodesResponseBodyNodesTags extends $dara.Model {
  /**
   * @remarks
   * The key of tag object
   * 
   * @example
   * aa_key
   */
  key?: string;
  /**
   * @remarks
   * The value of tag object
   * 
   * @example
   * aa_vakye
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

export class ListFreeNodesResponseBodyNodes extends $dara.Model {
  /**
   * @remarks
   * Product Code
   * 
   * @example
   * bccluster_eflocomputing_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 1652321554
   */
  createTime?: string;
  /**
   * @remarks
   * Expiration time of the machine
   * 
   * @example
   * 1673107200
   */
  expiredTime?: string;
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
   * Machine type
   * 
   * @example
   * efg1.nvga1
   */
  machineType?: string;
  /**
   * @remarks
   * Node ID
   * 
   * @example
   * e01-cn-7pp2x193801
   */
  nodeId?: string;
  /**
   * @remarks
   * Node status
   * 
   * @example
   * Unused
   */
  operatingState?: string;
  /**
   * @remarks
   * Resource group ID
   * 
   * @example
   * rg-aekzkkbrpl4owgy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Machine SN
   * 
   * @example
   * sn_pozkHBgicd
   */
  sn?: string;
  /**
   * @remarks
   * Tags Info
   */
  tags?: ListFreeNodesResponseBodyNodesTags[];
  /**
   * @remarks
   * Availability zone ID
   * 
   * @example
   * cn-hangzhou-j
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      createTime: 'CreateTime',
      expiredTime: 'ExpiredTime',
      hpnZone: 'HpnZone',
      machineType: 'MachineType',
      nodeId: 'NodeId',
      operatingState: 'OperatingState',
      resourceGroupId: 'ResourceGroupId',
      sn: 'Sn',
      tags: 'Tags',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      createTime: 'string',
      expiredTime: 'string',
      hpnZone: 'string',
      machineType: 'string',
      nodeId: 'string',
      operatingState: 'string',
      resourceGroupId: 'string',
      sn: 'string',
      tags: { 'type': 'array', 'itemType': ListFreeNodesResponseBodyNodesTags },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBodyImages extends $dara.Model {
  /**
   * @remarks
   * Architecture
   * 
   * @example
   * x86_64
   */
  architecture?: string;
  /**
   * @remarks
   * Description
   * 
   * @example
   * alibaba cloud linux 3 full for H800
   */
  description?: string;
  /**
   * @remarks
   * Image ID
   * 
   * @example
   * i190951671671438639388
   */
  imageId?: string;
  /**
   * @remarks
   * Image name
   * 
   * @example
   * CentOS_7.9_x86_64_FULL_20221110
   */
  imageName?: string;
  /**
   * @remarks
   * Image version
   * 
   * @example
   * 7.9
   */
  imageVersion?: string;
  /**
   * @remarks
   * node count
   * 
   * @example
   * 20
   */
  nodeCount?: number;
  /**
   * @remarks
   * Platform
   * 
   * @example
   * ALinux3
   */
  platform?: string;
  /**
   * @remarks
   * File MD5
   * 
   * @example
   * 40741292480fc6d778138adcf8c
   */
  releaseFileMd5?: string;
  /**
   * @remarks
   * Image size
   * 
   * @example
   * 5.8G
   */
  releaseFileSize?: string;
  /**
   * @remarks
   * image type
   * 
   * @example
   * Public
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      description: 'Description',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageVersion: 'ImageVersion',
      nodeCount: 'NodeCount',
      platform: 'Platform',
      releaseFileMd5: 'ReleaseFileMd5',
      releaseFileSize: 'ReleaseFileSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      description: 'string',
      imageId: 'string',
      imageName: 'string',
      imageVersion: 'string',
      nodeCount: 'number',
      platform: 'string',
      releaseFileMd5: 'string',
      releaseFileSize: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMachineNetworkInfoRequestMachineHpnInfo extends $dara.Model {
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * C1
   */
  hpnZone?: string;
  /**
   * @remarks
   * Machine type
   * 
   * @example
   * efg2.C48cNHmcn
   */
  machineType?: string;
  /**
   * @remarks
   * Region ID
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hpnZone: 'HpnZone',
      machineType: 'MachineType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hpnZone: 'string',
      machineType: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMachineNetworkInfoResponseBodyMachineNetworkInfo extends $dara.Model {
  /**
   * @remarks
   * Cluster network
   * 
   * @example
   * vpc/acl
   */
  clusterNet?: string;
  /**
   * @remarks
   * Whether jumbo frame capability is enabled
   * 
   * @example
   * true
   */
  enableJumboFrame?: boolean;
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * B1
   */
  hpnZone?: string;
  /**
   * @remarks
   * Whether it is in DPU mode
   * 
   * @example
   * true
   */
  isDpuMode?: boolean;
  /**
   * @remarks
   * Machine type
   * 
   * @example
   * efg1.nvga8n
   */
  machineType?: string;
  /**
   * @remarks
   * Network architecture
   * 
   * @example
   * XX-7.0
   */
  netArch?: string;
  /**
   * @remarks
   * 地域ID。
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterNet: 'ClusterNet',
      enableJumboFrame: 'EnableJumboFrame',
      hpnZone: 'HpnZone',
      isDpuMode: 'IsDpuMode',
      machineType: 'MachineType',
      netArch: 'NetArch',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterNet: 'string',
      enableJumboFrame: 'boolean',
      hpnZone: 'string',
      isDpuMode: 'boolean',
      machineType: 'string',
      netArch: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMachineTypesResponseBodyMachineTypes extends $dara.Model {
  /**
   * @remarks
   * Number of bonds
   * 
   * @example
   * 2
   */
  bondNum?: number;
  /**
   * @remarks
   * CPU information
   * 
   * @example
   * 2x Intel Icelake 8369B 32C CPU
   */
  cpuInfo?: string;
  /**
   * @remarks
   * Disk information
   * 
   * @example
   * 2x 480GB SATA SSD
   */
  diskInfo?: string;
  /**
   * @remarks
   * GPU information
   * 
   * @example
   * 8x NVIDIA SXM4 80GB A100 GPU
   */
  gpuInfo?: string;
  /**
   * @remarks
   * Memory information
   * 
   * @example
   * 32x 64GB DDR4 3200 Memory
   */
  memoryInfo?: string;
  /**
   * @remarks
   * Machine name
   * 
   * @example
   * efg1.nvga1
   */
  name?: string;
  /**
   * @remarks
   * Network information
   * 
   * @example
   * 2x 100Gbps DP NIC
   */
  networkInfo?: string;
  /**
   * @remarks
   * Number of nodes
   * 
   * @example
   * 10
   */
  nodeCount?: string;
  /**
   * @remarks
   * Number of CPU cores
   * 
   * @example
   * 48
   */
  totalCpuCore?: number;
  /**
   * @remarks
   * Type of machine
   * 
   * @example
   * Public
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bondNum: 'BondNum',
      cpuInfo: 'CpuInfo',
      diskInfo: 'DiskInfo',
      gpuInfo: 'GpuInfo',
      memoryInfo: 'MemoryInfo',
      name: 'Name',
      networkInfo: 'NetworkInfo',
      nodeCount: 'NodeCount',
      totalCpuCore: 'TotalCpuCore',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bondNum: 'number',
      cpuInfo: 'string',
      diskInfo: 'string',
      gpuInfo: 'string',
      memoryInfo: 'string',
      name: 'string',
      networkInfo: 'string',
      nodeCount: 'string',
      totalCpuCore: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetTestResultsResponseBodyNetTestResultsCommTestHosts extends $dara.Model {
  /**
   * @remarks
   * Node IP
   * 
   * @example
   * 10.51.16.21
   */
  IP?: string;
  /**
   * @remarks
   * Resource ID
   * 
   * @example
   * e01-cn-wwo3eteze19
   */
  resourceId?: string;
  /**
   * @remarks
   * Service name
   * 
   * @example
   * www.xinjiaoyu.com
   */
  serverName?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      resourceId: 'ResourceId',
      serverName: 'ServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
      resourceId: 'string',
      serverName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetTestResultsResponseBodyNetTestResultsCommTest extends $dara.Model {
  /**
   * @remarks
   * Number of GPUs
   * 
   * @example
   * 4
   */
  GPUNum?: string;
  /**
   * @remarks
   * Input hosts for the test nodes
   */
  hosts?: ListNetTestResultsResponseBodyNetTestResultsCommTestHosts[];
  /**
   * @remarks
   * Communication library model
   * 
   * @example
   * AllToAll
   */
  model?: string;
  /**
   * @remarks
   * Communication library test category: ACCL or NCCL
   * 
   * @example
   * ACCL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      GPUNum: 'GPUNum',
      hosts: 'Hosts',
      model: 'Model',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GPUNum: 'string',
      hosts: { 'type': 'array', 'itemType': ListNetTestResultsResponseBodyNetTestResultsCommTestHosts },
      model: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hosts)) {
      $dara.Model.validateArray(this.hosts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetTestResultsResponseBodyNetTestResultsDelayTestHosts extends $dara.Model {
  /**
   * @remarks
   * Bond interface of the network card
   * 
   * @example
   * bond1
   */
  bond?: string;
  /**
   * @remarks
   * Node IP
   * 
   * @example
   * pgm-bp174z988a27wre71o.pg.rds.aliyuncs.com
   */
  IP?: string;
  /**
   * @remarks
   * 资源id
   * 
   * @example
   * e01-cn-wwo3eteze19
   */
  resourceId?: string;
  /**
   * @remarks
   * Service name
   * 
   * @example
   * WrF
   */
  serverName?: string;
  static names(): { [key: string]: string } {
    return {
      bond: 'Bond',
      IP: 'IP',
      resourceId: 'ResourceId',
      serverName: 'ServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bond: 'string',
      IP: 'string',
      resourceId: 'string',
      serverName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetTestResultsResponseBodyNetTestResultsDelayTest extends $dara.Model {
  /**
   * @remarks
   * Resource list
   */
  hosts?: ListNetTestResultsResponseBodyNetTestResultsDelayTestHosts[];
  static names(): { [key: string]: string } {
    return {
      hosts: 'Hosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hosts: { 'type': 'array', 'itemType': ListNetTestResultsResponseBodyNetTestResultsDelayTestHosts },
    };
  }

  validate() {
    if(Array.isArray(this.hosts)) {
      $dara.Model.validateArray(this.hosts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetTestResultsResponseBodyNetTestResultsTrafficTestClients extends $dara.Model {
  /**
   * @remarks
   * Network interface bond port
   * 
   * @example
   * bond1
   */
  bond?: string;
  /**
   * @remarks
   * IP address.
   * 
   * @example
   * 74.73.100.1
   */
  IP?: string;
  /**
   * @remarks
   * Resource ID.
   * 
   * @example
   * e01-cn-20p36bqet39
   */
  resourceId?: string;
  /**
   * @remarks
   * Service name.
   * 
   * @example
   * prod-gf-cn.juequling.com
   */
  serverName?: string;
  static names(): { [key: string]: string } {
    return {
      bond: 'Bond',
      IP: 'IP',
      resourceId: 'ResourceId',
      serverName: 'ServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bond: 'string',
      IP: 'string',
      resourceId: 'string',
      serverName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetTestResultsResponseBodyNetTestResultsTrafficTestServers extends $dara.Model {
  /**
   * @remarks
   * Network interface bond port
   * 
   * @example
   * bond1
   */
  bond?: string;
  /**
   * @remarks
   * Node IP
   * 
   * @example
   * 10.1.168.183
   */
  IP?: string;
  /**
   * @remarks
   * Resource ID.
   * 
   * @example
   * e01-cn-wwo3eteze19
   */
  resourceId?: string;
  /**
   * @remarks
   * Service name.
   * 
   * @example
   * prod-gf-cn.juequling.com
   */
  serverName?: string;
  static names(): { [key: string]: string } {
    return {
      bond: 'Bond',
      IP: 'IP',
      resourceId: 'ResourceId',
      serverName: 'ServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bond: 'string',
      IP: 'string',
      resourceId: 'string',
      serverName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetTestResultsResponseBodyNetTestResultsTrafficTest extends $dara.Model {
  /**
   * @remarks
   * Clients
   */
  clients?: ListNetTestResultsResponseBodyNetTestResultsTrafficTestClients[];
  /**
   * @remarks
   * Duration of the workflow task, in seconds.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * 协议为RDMA时，填写True/False，
   * 协议为TCP时，此字段为空。
   * 
   * @example
   * True
   */
  GDR?: string;
  /**
   * @remarks
   * Network protocol, either RDMA or TCP.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * For TCP, enter the number of concurrent connections; for RDMA, enter the configured QP value.
   * 
   * @example
   * RDMA
   */
  QP?: number;
  /**
   * @remarks
   * This field is empty when the traffic model (TrafficModel) is Fullmesh.
   */
  servers?: ListNetTestResultsResponseBodyNetTestResultsTrafficTestServers[];
  /**
   * @remarks
   * Traffic model, either MTON or Fullmesh.
   * 
   * @example
   * Fullmesh
   */
  trafficModel?: string;
  static names(): { [key: string]: string } {
    return {
      clients: 'Clients',
      duration: 'Duration',
      GDR: 'GDR',
      protocol: 'Protocol',
      QP: 'QP',
      servers: 'Servers',
      trafficModel: 'TrafficModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clients: { 'type': 'array', 'itemType': ListNetTestResultsResponseBodyNetTestResultsTrafficTestClients },
      duration: 'number',
      GDR: 'string',
      protocol: 'string',
      QP: 'number',
      servers: { 'type': 'array', 'itemType': ListNetTestResultsResponseBodyNetTestResultsTrafficTestServers },
      trafficModel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clients)) {
      $dara.Model.validateArray(this.clients);
    }
    if(Array.isArray(this.servers)) {
      $dara.Model.validateArray(this.servers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetTestResultsResponseBodyNetTestResults extends $dara.Model {
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * i110667211718265012218
   */
  clusterId?: string;
  /**
   * @remarks
   * Cluster name
   * 
   * @example
   * test
   */
  clusterName?: string;
  /**
   * @remarks
   * To be filled when the network test type is communication library test
   */
  commTest?: ListNetTestResultsResponseBodyNetTestResultsCommTest;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2024-01-19T02:18:12Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Fill in when the network test type is latency test
   */
  delayTest?: ListNetTestResultsResponseBodyNetTestResultsDelayTest;
  /**
   * @remarks
   * Completion time.
   * 
   * @example
   * 2024-10-30T02:07Z
   */
  finishedTime?: string;
  /**
   * @remarks
   * Type of network test.
   * 
   * @example
   * NetDiag
   */
  netTestType?: string;
  /**
   * @remarks
   * Network mode
   * 
   * @example
   * 01
   */
  networkMode?: string;
  /**
   * @remarks
   * Test port number.
   * 
   * @example
   * 80
   */
  port?: string;
  /**
   * @remarks
   * Status of the network test task. Possible values:</br>
   * - InProgress: Testing in progress.</br>
   * - Finished: Test completed.</br>
   * - Failed: Test failed.
   * 
   * @example
   * InProgress
   */
  status?: string;
  /**
   * @remarks
   * Test ID. A unique identifier for the resource test task.
   * 
   * @example
   * String	i-uf6i0tv2refv8wz*****
   */
  testId?: string;
  /**
   * @remarks
   * Fill in when the network test type is traffic test.
   */
  trafficTest?: ListNetTestResultsResponseBodyNetTestResultsTrafficTest;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      commTest: 'CommTest',
      creationTime: 'CreationTime',
      delayTest: 'DelayTest',
      finishedTime: 'FinishedTime',
      netTestType: 'NetTestType',
      networkMode: 'NetworkMode',
      port: 'Port',
      status: 'Status',
      testId: 'TestId',
      trafficTest: 'TrafficTest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      commTest: ListNetTestResultsResponseBodyNetTestResultsCommTest,
      creationTime: 'string',
      delayTest: ListNetTestResultsResponseBodyNetTestResultsDelayTest,
      finishedTime: 'string',
      netTestType: 'string',
      networkMode: 'string',
      port: 'string',
      status: 'string',
      testId: 'string',
      trafficTest: ListNetTestResultsResponseBodyNetTestResultsTrafficTest,
    };
  }

  validate() {
    if(this.commTest && typeof (this.commTest as any).validate === 'function') {
      (this.commTest as any).validate();
    }
    if(this.delayTest && typeof (this.delayTest as any).validate === 'function') {
      (this.delayTest as any).validate();
    }
    if(this.trafficTest && typeof (this.trafficTest as any).validate === 'function') {
      (this.trafficTest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeGroupsResponseBodyGroups extends $dara.Model {
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * i113952461729854708648
   */
  clusterId?: string;
  /**
   * @remarks
   * Cluster name
   * 
   * @example
   * wzq-exclusivelite-71
   */
  clusterName?: string;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 2024-02-27T13:16:31.599
   */
  createTime?: string;
  /**
   * @remarks
   * Description
   * 
   * @example
   * created by ga2_prepare
   */
  description?: string;
  /**
   * @remarks
   * Group ID.
   * 
   * @example
   * 238276221
   */
  groupId?: string;
  /**
   * @remarks
   * Group name.
   * 
   * @example
   * backend-group
   */
  groupName?: string;
  /**
   * @remarks
   * Image ID
   * 
   * @example
   * i194015071707321240258
   */
  imageId?: string;
  /**
   * @remarks
   * Image name
   * 
   * @example
   * CentOS_7.9_x86_64_FULL_20221110
   */
  imageName?: string;
  /**
   * @remarks
   * Machine type
   * 
   * @example
   * efg1.nvga1n
   */
  machineType?: string;
  /**
   * @remarks
   * Number of nodes
   * 
   * @example
   * 2
   */
  nodeCount?: number;
  /**
   * @remarks
   * Update time
   * 
   * @example
   * 2023-09-22T00:03:05.114
   */
  updateTime?: string;
  /**
   * @remarks
   * 可用区id
   * 
   * @example
   * cn-shenzhen-c
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      createTime: 'CreateTime',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      imageId: 'ImageId',
      imageName: 'ImageName',
      machineType: 'MachineType',
      nodeCount: 'NodeCount',
      updateTime: 'UpdateTime',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      createTime: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      imageId: 'string',
      imageName: 'string',
      machineType: 'string',
      nodeCount: 'number',
      updateTime: 'string',
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

export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * Tag key
   * 
   * @example
   * PodName
   */
  key?: string;
  /**
   * @remarks
   * Tag value
   * 
   * @example
   * WFT-OTC
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

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $dara.Model {
  /**
   * @remarks
   * Resource ID
   * 
   * @example
   * i15azeddnvf7uhw2oij57o0
   */
  resourceId?: string;
  /**
   * @remarks
   * Resource type
   * 
   * @example
   * Cluster
   */
  resourceType?: string;
  /**
   * @remarks
   * Tag key
   * 
   * @example
   * env
   */
  tagKey?: string;
  /**
   * @remarks
   * Tag value
   * 
   * @example
   * dev
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
  tagResource?: ListTagResourcesResponseBodyTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTagResource },
    };
  }

  validate() {
    if(Array.isArray(this.tagResource)) {
      $dara.Model.validateArray(this.tagResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserClusterTypesResponseBodyClusterTypes extends $dara.Model {
  /**
   * @remarks
   * 访问类型。
   * 
   * @example
   * Public
   */
  accessType?: string;
  /**
   * @remarks
   * Type name
   * 
   * @example
   * AckEdgePro
   */
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      typeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReimageNodesRequestNodes extends $dara.Model {
  /**
   * @remarks
   * Hostname
   * 
   * @example
   * 457db5ca-241d-11ed-9fd7-acde48001122
   */
  hostname?: string;
  /**
   * @remarks
   * System image ID
   * 
   * @example
   * m-8vbf8rpv2nn14y7oybjy
   */
  imageId?: string;
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
   * e01-cn-zvp2tgykr0b
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      hostname: 'Hostname',
      imageId: 'ImageId',
      loginPassword: 'LoginPassword',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostname: 'string',
      imageId: 'string',
      loginPassword: 'string',
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShrinkClusterRequestNodeGroupsNodes extends $dara.Model {
  /**
   * @remarks
   * Node ID
   * 
   * @example
   * e01poc-cn-zmb2ypjdc01
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShrinkClusterRequestNodeGroups extends $dara.Model {
  /**
   * @remarks
   * Node group ID
   * 
   * @example
   * ng-3b6fbd24b1b845a0
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * List of nodes
   */
  nodes?: ShrinkClusterRequestNodeGroupsNodes[];
  static names(): { [key: string]: string } {
    return {
      nodeGroupId: 'NodeGroupId',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeGroupId: 'string',
      nodes: { 'type': 'array', 'itemType': ShrinkClusterRequestNodeGroupsNodes },
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * Tag key
   * 
   * @example
   * app
   */
  key?: string;
  /**
   * @remarks
   * Tag value
   * 
   * @example
   * v3
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

export class ApproveOperationRequest extends $dara.Model {
  /**
   * @remarks
   * Node ID
   * 
   * @example
   * e01-cn-zvp2tgykr08
   */
  nodeId?: string;
  /**
   * @remarks
   * Operation Type
   * 
   * @example
   * RepairMachine
   */
  operationType?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      operationType: 'OperationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      operationType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveOperationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error Message
   * 
   * @example
   * Resource not found
   */
  errorMessage?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 8F065DDD-6996-5973-9691-9EC57BD0072E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveOperationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApproveOperationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ApproveOperationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * System-defined parameter. Value: **ChangeResourceGroup**.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-aekzyqdwnfabx6q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * $.parameters[1].schema.example
   * 
   * This parameter is required.
   * 
   * @example
   * i118099391667548921125
   */
  resourceId?: string;
  /**
   * @remarks
   * Resource Group Change
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * $.parameters[3].schema.enumValueTitles
   * 
   * @example
   * Node
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceRegionId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8F065DDD-6996-5973-9691-9EC57BD0072E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangeResourceGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseSessionRequest extends $dara.Model {
  /**
   * @remarks
   * Session ID
   * 
   * @example
   * i207023871669364793713
   */
  sessionId?: string;
  /**
   * @remarks
   * Session token
   * 
   * @example
   * 03f53c719015a9ad4f4f55d66cac2dac161b18e8065ca75a3220b89de389c980
   */
  sessionToken?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'SessionId',
      sessionToken: 'SessionToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
      sessionToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 07AA3A1F-321E-50D8-B834-88C411331C94
   */
  requestId?: string;
  /**
   * @remarks
   * Session ID.
   * 
   * @example
   * i206495551737511455528
   */
  sessionId?: string;
  /**
   * @remarks
   * ClosingActive
   * 
   * @example
   * Inactive
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sessionId: 'SessionId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sessionId: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseSessionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CloseSessionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CloseSessionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
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
   * Whether to allow skipping failed nodes, default value is False
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
   * Open Eni Jumbo Frame
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

export class CreateClusterShrinkRequest extends $dara.Model {
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
  componentsShrink?: string;
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
   * Whether to allow skipping failed nodes, default value is False
   * 
   * @example
   * False
   */
  ignoreFailedNodeTasks?: boolean;
  /**
   * @remarks
   * Network information
   */
  networksShrink?: string;
  /**
   * @remarks
   * Node VSwitches
   */
  nimizVSwitchesShrink?: string;
  /**
   * @remarks
   * Node group list
   */
  nodeGroupsShrink?: string;
  /**
   * @remarks
   * Open Eni Jumbo Frame
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
  tag?: CreateClusterShrinkRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clusterDescription: 'ClusterDescription',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      componentsShrink: 'Components',
      hpnZone: 'HpnZone',
      ignoreFailedNodeTasks: 'IgnoreFailedNodeTasks',
      networksShrink: 'Networks',
      nimizVSwitchesShrink: 'NimizVSwitches',
      nodeGroupsShrink: 'NodeGroups',
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
      componentsShrink: 'string',
      hpnZone: 'string',
      ignoreFailedNodeTasks: 'boolean',
      networksShrink: 'string',
      nimizVSwitchesShrink: 'string',
      nodeGroupsShrink: 'string',
      openEniJumboFrame: 'boolean',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateClusterShrinkRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * i116913051663373010974
   */
  clusterId?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 3C683243-7915-57FB-9570-A2932C1C0F78
   */
  requestId?: string;
  /**
   * @remarks
   * Task Id
   * 
   * @example
   * i159809891662373011015
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateClusterResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiagnosticTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Log information
   */
  aiJobLogInfo?: CreateDiagnosticTaskRequestAiJobLogInfo;
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * i118913031696573280136
   */
  clusterId?: string;
  /**
   * @remarks
   * Diagnostic type.
   * 
   * @example
   * CheckByAiJobLogs
   */
  diagnosticType?: string;
  /**
   * @remarks
   * List of node IDs
   */
  nodeIds?: string[];
  static names(): { [key: string]: string } {
    return {
      aiJobLogInfo: 'AiJobLogInfo',
      clusterId: 'ClusterId',
      diagnosticType: 'DiagnosticType',
      nodeIds: 'NodeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiJobLogInfo: CreateDiagnosticTaskRequestAiJobLogInfo,
      clusterId: 'string',
      diagnosticType: 'string',
      nodeIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.aiJobLogInfo && typeof (this.aiJobLogInfo as any).validate === 'function') {
      (this.aiJobLogInfo as any).validate();
    }
    if(Array.isArray(this.nodeIds)) {
      $dara.Model.validateArray(this.nodeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiagnosticTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Log information
   */
  aiJobLogInfoShrink?: string;
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * i118913031696573280136
   */
  clusterId?: string;
  /**
   * @remarks
   * Diagnostic type.
   * 
   * @example
   * CheckByAiJobLogs
   */
  diagnosticType?: string;
  /**
   * @remarks
   * List of node IDs
   */
  nodeIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      aiJobLogInfoShrink: 'AiJobLogInfo',
      clusterId: 'ClusterId',
      diagnosticType: 'DiagnosticType',
      nodeIdsShrink: 'NodeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiJobLogInfoShrink: 'string',
      clusterId: 'string',
      diagnosticType: 'string',
      nodeIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiagnosticTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Diagnosis ID
   * 
   * @example
   * diag-i150553931717380274931
   */
  diagnosticId?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * A511C02A-0127-51AA-A9F9-966382C9A1B5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      diagnosticId: 'DiagnosticId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnosticId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiagnosticTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDiagnosticTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDiagnosticTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetTestTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * i119982311660892626523
   */
  clusterId?: string;
  /**
   * @remarks
   * Cluster name
   * 
   * @example
   * Eflo-YJ-Test-Cluster
   */
  clusterName?: string;
  /**
   * @remarks
   * Required when the test type is communication library testing
   */
  commTest?: CreateNetTestTaskRequestCommTest;
  /**
   * @remarks
   * Fill in this field when the network test type is delay testing.
   */
  delayTest?: CreateNetTestTaskRequestDelayTest;
  /**
   * @remarks
   * Network test type.
   * For example: DelayTest for latency testing, TrafficTest for traffic testing, CommTest for communication library testing.
   * 
   * @example
   * DelayTest
   */
  netTestType?: string;
  /**
   * @remarks
   * Network mode
   * 
   * @example
   * 2
   */
  networkMode?: string;
  /**
   * @remarks
   * Test port number.
   * 
   * @example
   * 23604
   */
  port?: string;
  /**
   * @remarks
   * This field is empty if the TrafficModel is Fullmesh.
   */
  trafficTest?: CreateNetTestTaskRequestTrafficTest;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      commTest: 'CommTest',
      delayTest: 'DelayTest',
      netTestType: 'NetTestType',
      networkMode: 'NetworkMode',
      port: 'Port',
      trafficTest: 'TrafficTest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      commTest: CreateNetTestTaskRequestCommTest,
      delayTest: CreateNetTestTaskRequestDelayTest,
      netTestType: 'string',
      networkMode: 'string',
      port: 'string',
      trafficTest: CreateNetTestTaskRequestTrafficTest,
    };
  }

  validate() {
    if(this.commTest && typeof (this.commTest as any).validate === 'function') {
      (this.commTest as any).validate();
    }
    if(this.delayTest && typeof (this.delayTest as any).validate === 'function') {
      (this.delayTest as any).validate();
    }
    if(this.trafficTest && typeof (this.trafficTest as any).validate === 'function') {
      (this.trafficTest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetTestTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * i119982311660892626523
   */
  clusterId?: string;
  /**
   * @remarks
   * Cluster name
   * 
   * @example
   * Eflo-YJ-Test-Cluster
   */
  clusterName?: string;
  /**
   * @remarks
   * Required when the test type is communication library testing
   */
  commTestShrink?: string;
  /**
   * @remarks
   * Fill in this field when the network test type is delay testing.
   */
  delayTestShrink?: string;
  /**
   * @remarks
   * Network test type.
   * For example: DelayTest for latency testing, TrafficTest for traffic testing, CommTest for communication library testing.
   * 
   * @example
   * DelayTest
   */
  netTestType?: string;
  /**
   * @remarks
   * Network mode
   * 
   * @example
   * 2
   */
  networkMode?: string;
  /**
   * @remarks
   * Test port number.
   * 
   * @example
   * 23604
   */
  port?: string;
  /**
   * @remarks
   * This field is empty if the TrafficModel is Fullmesh.
   */
  trafficTestShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      commTestShrink: 'CommTest',
      delayTestShrink: 'DelayTest',
      netTestType: 'NetTestType',
      networkMode: 'NetworkMode',
      port: 'Port',
      trafficTestShrink: 'TrafficTest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      commTestShrink: 'string',
      delayTestShrink: 'string',
      netTestType: 'string',
      networkMode: 'string',
      port: 'string',
      trafficTestShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetTestTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE*****
   */
  requestId?: string;
  /**
   * @remarks
   * 启动测试任务ID，网络测试任务的唯一标志。
   * 
   * @example
   * dr-uf6i0tv2refv8wz*****
   */
  testId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      testId: 'TestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      testId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetTestTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateNetTestTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateNetTestTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Cluster ID
   * 
   * This parameter is required.
   * 
   * @example
   * i118191731740041623425
   */
  clusterId?: string;
  /**
   * @remarks
   * Node ID.
   * 
   * This parameter is required.
   */
  nodeGroup?: CreateNodeGroupRequestNodeGroup;
  /**
   * @remarks
   * Node information
   */
  nodeUnit?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      nodeGroup: 'NodeGroup',
      nodeUnit: 'NodeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      nodeGroup: CreateNodeGroupRequestNodeGroup,
      nodeUnit: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.nodeGroup && typeof (this.nodeGroup as any).validate === 'function') {
      (this.nodeGroup as any).validate();
    }
    if(this.nodeUnit) {
      $dara.Model.validateMap(this.nodeUnit);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Cluster ID
   * 
   * This parameter is required.
   * 
   * @example
   * i118191731740041623425
   */
  clusterId?: string;
  /**
   * @remarks
   * Node ID.
   * 
   * This parameter is required.
   */
  nodeGroupShrink?: string;
  /**
   * @remarks
   * Node information
   */
  nodeUnitShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      nodeGroupShrink: 'NodeGroup',
      nodeUnitShrink: 'NodeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      nodeGroupShrink: 'string',
      nodeUnitShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Node group ID
   * 
   * @example
   * ng-ec3c96ff0aa4c60d
   */
  nodeGroupId?: string;
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
   * ID of the request
   * 
   * @example
   * 887FA855-89F4-5DB3-B305-C5879EC480E6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeGroupId: 'NodeGroupId',
      nodeGroupName: 'NodeGroupName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeGroupId: 'string',
      nodeGroupName: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateNodeGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateNodeGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSessionRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * e01-cn-kvw44e6dn04
   */
  nodeId?: string;
  /**
   * @remarks
   * Session type corresponding to the session package.
   * 
   * @example
   * N	两种：
   * Sol：基于串口[默认]
   * Assistant：基于云助手
   */
  sessionType?: string;
  /**
   * @remarks
   * Initiation time, 13-digit timestamp.
   * 
   * @example
   * 1669340937156
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      sessionType: 'SessionType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      sessionType: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 887FA855-89F4-5DB3-B305-C5879EC480E6
   */
  requestId?: string;
  /**
   * @remarks
   * 节点  ID。
   * 
   * @example
   * 2A59143F1
   */
  serverSn?: string;
  /**
   * @remarks
   * Session ID.
   * 
   * @example
   * i207023871669364793713
   */
  sessionId?: string;
  /**
   * @remarks
   * Session token.
   * 
   * @example
   * 03f53c719015a9ad4f4f55d66cac2dac161b18e8065ca75a3220b89de389c980
   */
  sessionToken?: string;
  /**
   * @remarks
   * WebSocket address
   * 
   * @example
   * ws://x.x.x.x:xx/calypso_web_console
   */
  wssEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serverSn: 'ServerSn',
      sessionId: 'SessionId',
      sessionToken: 'SessionToken',
      wssEndpoint: 'WssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serverSn: 'string',
      sessionId: 'string',
      sessionToken: 'string',
      wssEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSessionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSessionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSessionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterRequest extends $dara.Model {
  /**
   * @remarks
   * Cluster ID
   * 
   * This parameter is required.
   * 
   * @example
   * i116913051662373010974
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request Id
   * 
   * @example
   * 0FC4A1C7-421C-5EAB-9361-4C0338EFA287
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteClusterResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodeGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * i114444141733395242745
   */
  clusterId?: string;
  /**
   * @remarks
   * Node Group ID
   * 
   * @example
   * i121824791737080429819
   */
  nodeGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      nodeGroupId: 'NodeGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      nodeGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodeGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 887FA855-89F4-5DB3-B305-C5879EC480E6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodeGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteNodeGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteNodeGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterRequest extends $dara.Model {
  /**
   * @remarks
   * Cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i119982311660892626523
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * Cluster Description
   * 
   * @example
   * Default cluster
   */
  clusterDescription?: string;
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * i116913051662373010974
   */
  clusterId?: string;
  /**
   * @remarks
   * Cluster Name
   * 
   * @example
   * Eflo-YJ-Test-Cluster
   */
  clusterName?: string;
  /**
   * @remarks
   * Cluster Type
   * 
   * @example
   * AckEdgePro
   */
  clusterType?: string;
  /**
   * @remarks
   * Component Information
   */
  components?: DescribeClusterResponseBodyComponents[];
  /**
   * @remarks
   * Type of IP in the compute network
   * 
   * @example
   * IPv4
   */
  computingIpVersion?: string;
  /**
   * @remarks
   * Creation Time
   * 
   * @example
   * 2022-06-08T07:05:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * Cluster Number
   * 
   * @example
   * A2
   */
  hpnZone?: string;
  /**
   * @remarks
   * Network Information
   */
  networks?: DescribeClusterResponseBodyNetworks;
  /**
   * @remarks
   * Number of Nodes
   * 
   * @example
   * 2
   */
  nodeCount?: number;
  /**
   * @remarks
   * Number of Node Groups
   * 
   * @example
   * 2
   */
  nodeGroupCount?: number;
  /**
   * @remarks
   * Open Eni Jumbo Frame
   * 
   * @example
   * close
   */
  openEniJumboFrame?: string;
  /**
   * @remarks
   * Cluster State
   * 
   * @example
   * running
   */
  operatingState?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 887FA855-89F4-5DB3-B305-C5879EC480E6
   */
  requestId?: string;
  /**
   * @remarks
   * Resource Group ID
   * 
   * @example
   * rg-aek2k3rqlvv6ytq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Task ID
   * 
   * @example
   * i152609221670466904596
   */
  taskId?: string;
  /**
   * @remarks
   * Update Time
   * 
   * @example
   * 2022-08-23T06:36:17.000Z
   */
  updateTime?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-0jlkqysom5dmcviymep3f
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterDescription: 'ClusterDescription',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      components: 'Components',
      computingIpVersion: 'ComputingIpVersion',
      createTime: 'CreateTime',
      hpnZone: 'HpnZone',
      networks: 'Networks',
      nodeCount: 'NodeCount',
      nodeGroupCount: 'NodeGroupCount',
      openEniJumboFrame: 'OpenEniJumboFrame',
      operatingState: 'OperatingState',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      taskId: 'TaskId',
      updateTime: 'UpdateTime',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterDescription: 'string',
      clusterId: 'string',
      clusterName: 'string',
      clusterType: 'string',
      components: { 'type': 'array', 'itemType': DescribeClusterResponseBodyComponents },
      computingIpVersion: 'string',
      createTime: 'string',
      hpnZone: 'string',
      networks: DescribeClusterResponseBodyNetworks,
      nodeCount: 'number',
      nodeGroupCount: 'number',
      openEniJumboFrame: 'string',
      operatingState: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      taskId: 'string',
      updateTime: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    if(this.networks && typeof (this.networks as any).validate === 'function') {
      (this.networks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeClusterResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosticResultRequest extends $dara.Model {
  /**
   * @remarks
   * Diagnostic ID
   * 
   * @example
   * diag-i151942361720577788844
   */
  diagnosticId?: string;
  static names(): { [key: string]: string } {
    return {
      diagnosticId: 'DiagnosticId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnosticId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosticResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * i118913031696573280136
   */
  clusterId?: string;
  /**
   * @remarks
   * Device creation time.
   * 
   * @example
   * 2024-06-15T10:17:56
   */
  createdTime?: string;
  /**
   * @remarks
   * Diagnostic ID
   * 
   * @example
   * diag-i155363241720059671316
   */
  diagnosticId?: string;
  /**
   * @remarks
   * Diagnostic Information
   */
  diagnosticResults?: any[];
  /**
   * @remarks
   * Diagnostic State
   * 
   * @example
   * Fault
   */
  diagnosticState?: string;
  /**
   * @remarks
   * Diagnostic Type
   * 
   * @example
   * CheckByAiJobLogs
   */
  diagnosticType?: string;
  /**
   * @remarks
   * End time of node anomaly issues. Represented according to the ISO8601 standard, in a timezone-aware format, formatted as yyyy-MM-ddTHH:mm:ss+0800
   * 
   * @example
   * 2024-06-11T10:00:30
   */
  endTime?: string;
  /**
   * @remarks
   * List of Node IDs
   */
  nodeIds?: string[];
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 8F065DDD-6996-5973-9691-9EC57BD0072E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      createdTime: 'CreatedTime',
      diagnosticId: 'DiagnosticId',
      diagnosticResults: 'DiagnosticResults',
      diagnosticState: 'DiagnosticState',
      diagnosticType: 'DiagnosticType',
      endTime: 'EndTime',
      nodeIds: 'NodeIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      createdTime: 'string',
      diagnosticId: 'string',
      diagnosticResults: { 'type': 'array', 'itemType': 'any' },
      diagnosticState: 'string',
      diagnosticType: 'string',
      endTime: 'string',
      nodeIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.diagnosticResults)) {
      $dara.Model.validateArray(this.diagnosticResults);
    }
    if(Array.isArray(this.nodeIds)) {
      $dara.Model.validateArray(this.nodeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosticResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDiagnosticResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDiagnosticResultResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the encoding method for the `CommandContent` and `Output` fields in the returned data. Possible values:
   * 
   * - PlainText: Returns the original command content and output information.
   * - Base64: Returns the Base64-encoded command content and output information.
   * 
   * Default value: Base64.
   * 
   * @example
   * PlainText
   */
  contentEncoding?: string;
  /**
   * @remarks
   * Indicates whether to return the output information of the command execution in the result.
   * 
   * - true: Return. In this case, you must specify at least the `InvokeId` or `InstanceId` parameter.
   * - false: Do not return.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  includeOutput?: boolean;
  /**
   * @remarks
   * Command execution ID
   * 
   * This parameter is required.
   * 
   * @example
   * t-cd03crwys0lrls0
   */
  invokeId?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * e01-cn-zvp2tgykr08
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      contentEncoding: 'ContentEncoding',
      includeOutput: 'IncludeOutput',
      invokeId: 'InvokeId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentEncoding: 'string',
      includeOutput: 'boolean',
      invokeId: 'string',
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Script execution record object.
   */
  invocations?: DescribeInvocationsResponseBodyInvocations;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 4FD06DF0-9167-5C6F-A145-F30CA4A15D54
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invocations: 'Invocations',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocations: DescribeInvocationsResponseBodyInvocations,
      requestId: 'string',
    };
  }

  validate() {
    if(this.invocations && typeof (this.invocations as any).validate === 'function') {
      (this.invocations as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInvocationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInvocationsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetTestResultRequest extends $dara.Model {
  /**
   * @remarks
   * Test task ID.
   * 
   * @example
   * dr-uf6i0tv2refv8wz*****
   */
  testId?: string;
  static names(): { [key: string]: string } {
    return {
      testId: 'TestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      testId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetTestResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * Cluster ID.
   * 
   * @example
   * i119982311660892626523
   */
  clusterId?: string;
  /**
   * @remarks
   * Cluster name.
   * 
   * @example
   * Standard_Cluster
   */
  clusterName?: string;
  /**
   * @remarks
   * Fill in when the traffic test type is communication library test
   */
  commTest?: DescribeNetTestResultResponseBodyCommTest;
  /**
   * @remarks
   * Diagnosis task creation time.
   * 
   * @example
   * 2024-10-15T10:25:42+08:00
   */
  creationTime?: string;
  /**
   * @remarks
   * Fill in when the network test type is latency test
   */
  delayTest?: DescribeNetTestResultResponseBodyDelayTest;
  /**
   * @remarks
   * Diagnosis task completion time.
   * 
   * @example
   * 2024-10-16T02:04Z
   */
  finishedTime?: string;
  /**
   * @remarks
   * Network test type.
   * 
   * @example
   * DelayTest
   */
  netTestType?: string;
  /**
   * @remarks
   * Test port number.
   * 
   * @example
   * 23604
   */
  port?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 8F065DDD-6996-5973-9691-9EC57BD0072E
   */
  requestId?: string;
  /**
   * @remarks
   * Details of the diagnosis result. Returned as a JSON string.
   * 
   * @example
   * {}
   */
  resultDetial?: string;
  /**
   * @remarks
   * Diagnosis task status. Possible values:
   * - InProgress: Diagnosis in progress.
   * - Finished: Diagnosis completed.
   * - Failed: Diagnosis failed.
   * 
   * @example
   * Failed
   */
  status?: string;
  /**
   * @remarks
   * Initiated test task ID, which is the unique identifier for the network test task.
   * 
   * @example
   * af35ce53-7c35-4277-834a-fbf49c316a96
   */
  testId?: string;
  /**
   * @remarks
   * This field is empty if the traffic model (TrafficModel) is Fullmesh.
   */
  trafficTest?: DescribeNetTestResultResponseBodyTrafficTest;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      commTest: 'CommTest',
      creationTime: 'CreationTime',
      delayTest: 'DelayTest',
      finishedTime: 'FinishedTime',
      netTestType: 'NetTestType',
      port: 'Port',
      requestId: 'RequestId',
      resultDetial: 'ResultDetial',
      status: 'Status',
      testId: 'TestId',
      trafficTest: 'TrafficTest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      commTest: DescribeNetTestResultResponseBodyCommTest,
      creationTime: 'string',
      delayTest: DescribeNetTestResultResponseBodyDelayTest,
      finishedTime: 'string',
      netTestType: 'string',
      port: 'string',
      requestId: 'string',
      resultDetial: 'string',
      status: 'string',
      testId: 'string',
      trafficTest: DescribeNetTestResultResponseBodyTrafficTest,
    };
  }

  validate() {
    if(this.commTest && typeof (this.commTest as any).validate === 'function') {
      (this.commTest as any).validate();
    }
    if(this.delayTest && typeof (this.delayTest as any).validate === 'function') {
      (this.delayTest as any).validate();
    }
    if(this.trafficTest && typeof (this.trafficTest as any).validate === 'function') {
      (this.trafficTest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetTestResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNetTestResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeNetTestResultResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeRequest extends $dara.Model {
  /**
   * @remarks
   * Node ID
   * 
   * This parameter is required.
   * 
   * @example
   * mock-sn-2060
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * i116913051662373010974
   */
  clusterId?: string;
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
   * Creation time
   * 
   * @example
   * 2022-09-30T03:35:53Z
   */
  createTime?: string;
  disks?: DescribeNodeResponseBodyDisks[];
  /**
   * @remarks
   * Expiration time
   * 
   * @example
   * 2022-06-23T16:00:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * Hostname
   * 
   * @example
   * 31d38530-241e-11ed-bc63-acde48001122
   */
  hostname?: string;
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
   * Image ID
   * 
   * @example
   * i190297201634099844192
   */
  imageId?: string;
  /**
   * @remarks
   * Image name
   * 
   * @example
   * Centos7.9_all_0811
   */
  imageName?: string;
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
   * Network information
   */
  networks?: DescribeNodeResponseBodyNetworks[];
  /**
   * @remarks
   * Node group ID
   * 
   * @example
   * ng-ec3c96ff0aa4c60d
   */
  nodeGroupId?: string;
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
   * Node ID
   * 
   * @example
   * e01-cn-zvp2tgykr08
   */
  nodeId?: string;
  /**
   * @remarks
   * Node status
   * 
   * @example
   * Using
   */
  operatingState?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * AC4F0004-7BCE-52E0-891B-CAC7D64E3368
   */
  requestId?: string;
  /**
   * @remarks
   * Resource group ID
   * 
   * @example
   * rg-acfmywpvugkh7kq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Unique machine identifier
   * 
   * @example
   * sag42ckf4jx
   */
  sn?: string;
  /**
   * @remarks
   * The script by user defined
   * 
   * @example
   * #!/bin/bash
   * uptime
   * echo "aaaaaaa" >> /tmp/ttttt20250110141010.sh
   */
  userData?: string;
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
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      createTime: 'CreateTime',
      disks: 'Disks',
      expiredTime: 'ExpiredTime',
      hostname: 'Hostname',
      hpnZone: 'HpnZone',
      imageId: 'ImageId',
      imageName: 'ImageName',
      machineType: 'MachineType',
      networks: 'Networks',
      nodeGroupId: 'NodeGroupId',
      nodeGroupName: 'NodeGroupName',
      nodeId: 'NodeId',
      operatingState: 'OperatingState',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      sn: 'Sn',
      userData: 'UserData',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      createTime: 'string',
      disks: { 'type': 'array', 'itemType': DescribeNodeResponseBodyDisks },
      expiredTime: 'string',
      hostname: 'string',
      hpnZone: 'string',
      imageId: 'string',
      imageName: 'string',
      machineType: 'string',
      networks: { 'type': 'array', 'itemType': DescribeNodeResponseBodyNetworks },
      nodeGroupId: 'string',
      nodeGroupName: 'string',
      nodeId: 'string',
      operatingState: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      sn: 'string',
      userData: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.disks)) {
      $dara.Model.validateArray(this.disks);
    }
    if(Array.isArray(this.networks)) {
      $dara.Model.validateArray(this.networks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeNodeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * Filter the returned results based on Chinese, English, and Japanese. For more information, see RFC7231. Valid values:
   * 
   * zh-CN
   * en-US
   * Default value: zh-CN
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of region information.
   */
  regions?: DescribeRegionsResponseBodyRegions[];
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 1D2FBB36-C39B-5EBB-9928-FCC1A236D65D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRegionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSendFileResultsRequest extends $dara.Model {
  /**
   * @remarks
   * Command execution ID.
   * 
   * This parameter is required.
   * 
   * @example
   * t-bj038i0d6r8zoqo
   */
  invokeId?: string;
  /**
   * @remarks
   * Node ID
   * 
   * @example
   * e01-cn-zvp2tgykr08
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      invokeId: 'InvokeId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeId: 'string',
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSendFileResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Record of file distribution.
   */
  invocations?: DescribeSendFileResultsResponseBodyInvocations;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 4FD06DF0-9167-5C6F-A145-F30CA4A15D54
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of commands.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      invocations: 'Invocations',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocations: DescribeSendFileResultsResponseBodyInvocations,
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(this.invocations && typeof (this.invocations as any).validate === 'function') {
      (this.invocations as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSendFileResultsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSendFileResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSendFileResultsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Task ID
   * 
   * This parameter is required.
   * 
   * @example
   * i156331731670384438138
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * i119982311660892626523
   */
  clusterId?: string;
  /**
   * @remarks
   * Cluster Name
   * 
   * @example
   * Standard_Cluster
   */
  clusterName?: string;
  /**
   * @remarks
   * Start Time
   * 
   * @example
   * 2022-11-30T02:00:00.852Z
   */
  createTime?: string;
  /**
   * @remarks
   * Task Failure Message
   * 
   * @example
   * Releasing [prod_main_mid_26e234cf] in region [cn-beijing] with weight [0]
   */
  message?: string;
  /**
   * @remarks
   * List of node IDs
   */
  nodeIds?: string[];
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * A7FD7411-9395-52E8-AF42-EB3A4A55446D
   */
  requestId?: string;
  /**
   * @remarks
   * Execution Steps
   */
  steps?: DescribeTaskResponseBodySteps[];
  /**
   * @remarks
   * Task State
   * 
   * @example
   * running
   */
  taskState?: string;
  /**
   * @remarks
   * Task Type
   * 
   * @example
   * cut_cluster
   */
  taskType?: string;
  /**
   * @remarks
   * Update Time
   * 
   * @example
   * 2022-11-30T03:40:14.852Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      createTime: 'CreateTime',
      message: 'Message',
      nodeIds: 'NodeIds',
      requestId: 'RequestId',
      steps: 'Steps',
      taskState: 'TaskState',
      taskType: 'TaskType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      createTime: 'string',
      message: 'string',
      nodeIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      steps: { 'type': 'array', 'itemType': DescribeTaskResponseBodySteps },
      taskState: 'string',
      taskType: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodeIds)) {
      $dara.Model.validateArray(this.nodeIds);
    }
    if(Array.isArray(this.steps)) {
      $dara.Model.validateArray(this.steps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesRequest extends $dara.Model {
  /**
   * @remarks
   * Filter the returned results based on Chinese or English. For more information, see RFC7231. Valid values:
   * 
   * zh-CN
   * en-US
   * Default value: zh-CN
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * E9116F2D-82F8-501E-9ADB-2BE0C02B6A84
   */
  requestId?: string;
  /**
   * @remarks
   * List of available zones
   */
  zones?: DescribeZonesResponseBodyZones[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zones: { 'type': 'array', 'itemType': DescribeZonesResponseBodyZones },
    };
  }

  validate() {
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeZonesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
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
   * IP allocation policy combination: Each policy can only choose one type, and multiple policies can be combined
   */
  ipAllocationPolicy?: ExtendClusterRequestIpAllocationPolicy[];
  /**
   * @remarks
   * Node Group
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

export class ExtendClusterShrinkRequest extends $dara.Model {
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
   * IP allocation policy combination: Each policy can only choose one type, and multiple policies can be combined
   */
  ipAllocationPolicyShrink?: string;
  /**
   * @remarks
   * Node Group
   */
  nodeGroupsShrink?: string;
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
  vpdSubnetsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      ignoreFailedNodeTasks: 'IgnoreFailedNodeTasks',
      ipAllocationPolicyShrink: 'IpAllocationPolicy',
      nodeGroupsShrink: 'NodeGroups',
      vSwitchZoneId: 'VSwitchZoneId',
      vpdSubnetsShrink: 'VpdSubnets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      ignoreFailedNodeTasks: 'boolean',
      ipAllocationPolicyShrink: 'string',
      nodeGroupsShrink: 'string',
      vSwitchZoneId: 'string',
      vpdSubnetsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 03668372-18FF-5959-98D9-6B36A4643C7A
   */
  requestId?: string;
  /**
   * @remarks
   * Task ID
   * 
   * @example
   * i158475611663639202234
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExtendClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExtendClusterResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterNodesRequest extends $dara.Model {
  /**
   * @remarks
   * Cluster ID
   * 
   * This parameter is required.
   * 
   * @example
   * i15b480fbd2fcdbc2869cd80
   */
  clusterId?: string;
  /**
   * @remarks
   * Number of items per page in a paginated query, with a default value of 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Query token (Token), which is the value of the NextToken parameter returned by the previous API call.
   * 
   * @example
   * AAAAAdQ3Z+oPlg49gsr2y8jb6wY=
   */
  nextToken?: string;
  /**
   * @remarks
   * Node group ID
   * 
   * @example
   * ng-ec3c96ff0aa4c60d
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * resource group id
   * 
   * @example
   * rg-xxkxkllss
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * tag information
   */
  tags?: ListClusterNodesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodeGroupId: 'NodeGroupId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      nodeGroupId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListClusterNodesRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The query token value returned by this call.
   * 
   * @example
   * AAAAAXW/ZB9TBvH+0ZK0phtCibQgQmu1RbqplAI6Velo2OKR
   */
  nextToken?: string;
  /**
   * @remarks
   * List of nodes
   */
  nodes?: ListClusterNodesResponseBodyNodes[];
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 2BA76272-6608-5AEC-BBA8-B6F0D3D14CDB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      nodes: 'Nodes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      nodes: { 'type': 'array', 'itemType': ListClusterNodesResponseBodyNodes },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterNodesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListClusterNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListClusterNodesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersRequest extends $dara.Model {
  /**
   * @remarks
   * Number of items per page for paginated queries, with a default value of 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Query token, which is the value of the NextToken parameter returned by the previous API call.
   * 
   * @example
   * a3f2224a5ec7224116c4f5246120abe4
   */
  nextToken?: string;
  /**
   * @remarks
   * Resource group ID
   * 
   * @example
   * rg-aek2bg6wyoox6jq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * tag info
   */
  tags?: ListClustersRequestTags[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListClustersRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBody extends $dara.Model {
  /**
   * @remarks
   * Cluster information
   */
  clusters?: ListClustersResponseBodyClusters[];
  /**
   * @remarks
   * The query token value returned by this call.
   * 
   * @example
   * f4f9a292c17072a2
   */
  nextToken?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 2FE2B22C-CF9D-59DE-BF63-DC9B9B33A9D1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': ListClustersResponseBodyClusters },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clusters)) {
      $dara.Model.validateArray(this.clusters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListClustersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnosticResultsRequest extends $dara.Model {
  /**
   * @remarks
   * Type of diagnosis
   * 
   * @example
   * NetDiag
   */
  diagType?: string;
  /**
   * @remarks
   * Number of items per page in a paginated query. The maximum value is 100.
   * 
   * Default value:
   * 
   * - If no value is set or the set value is less than 20, the default is 20.
   * - If the set value is greater than 100, the default is 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Query token (Token), the value should be the NextToken parameter value returned from the previous API call.
   * 
   * @example
   * a3f2224a5ec7224116c4f5246120abe4
   */
  nextToken?: string;
  /**
   * @remarks
   * Resource group ID
   * 
   * @example
   * rg-acfmywpvugkh7kq
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      diagType: 'DiagType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnosticResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Diagnostic information
   */
  diagnosticResults?: ListDiagnosticResultsResponseBodyDiagnosticResults[];
  /**
   * @remarks
   * 分页查询时每页行数。最大值为100。
   * 
   * 默认值：
   * 
   * •当不设置值或设置的值小于20时，默认值为20。
   * 
   * •当设置的值大于100时，默认值为100。
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * NextToken for the next page. Include this value when requesting the next page.
   * 
   * @example
   * a3f2224a5ec7224116c4f5246120abe4
   */
  nextToken?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * AC4F0004-7BCE-52E0-891B-CAC7D64E3368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      diagnosticResults: 'DiagnosticResults',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnosticResults: { 'type': 'array', 'itemType': ListDiagnosticResultsResponseBodyDiagnosticResults },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.diagnosticResults)) {
      $dara.Model.validateArray(this.diagnosticResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnosticResultsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDiagnosticResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDiagnosticResultsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFreeNodesRequest extends $dara.Model {
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
   * Machine type
   * 
   * @example
   * mock-machine-type2
   */
  machineType?: string;
  /**
   * @remarks
   * Number of items per page for paginated queries, default is 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Query token (Token), the value should be the NextToken parameter value returned from the previous API call.
   * 
   * @example
   * a3f2224a5ec7224116c4f5246120abe4
   */
  nextToken?: string;
  operatingStates?: string[];
  /**
   * @remarks
   * Resource group ID
   * 
   * @example
   * rg-acfmxno4vh5muoq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Tag information
   */
  tags?: ListFreeNodesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      hpnZone: 'HpnZone',
      machineType: 'MachineType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      operatingStates: 'OperatingStates',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hpnZone: 'string',
      machineType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      operatingStates: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListFreeNodesRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.operatingStates)) {
      $dara.Model.validateArray(this.operatingStates);
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

export class ListFreeNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The query token value returned by this call.
   * 
   * @example
   * a3f2224a5ec7224116c4f5246120abe4
   */
  nextToken?: string;
  /**
   * @remarks
   * List of nodes
   */
  nodes?: ListFreeNodesResponseBodyNodes[];
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * AA14CB86-70C4-5CB7-9E7B-6CCA77F3512B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      nodes: 'Nodes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      nodes: { 'type': 'array', 'itemType': ListFreeNodesResponseBodyNodes },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFreeNodesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFreeNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFreeNodesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesRequest extends $dara.Model {
  /**
   * @remarks
   * Architecture
   * 
   * @example
   * x86_64
   */
  architecture?: string;
  /**
   * @remarks
   * Image version
   * 
   * @example
   * 7.9
   */
  imageVersion?: string;
  /**
   * @remarks
   * Platform
   * 
   * @example
   * ALinux3
   */
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      imageVersion: 'ImageVersion',
      platform: 'Platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      imageVersion: 'string',
      platform: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Image details
   */
  images?: ListImagesResponseBodyImages[];
  /**
   * @remarks
   * NextToken for the next page, include this value when requesting the next page
   * 
   * @example
   * 3a6b93229825ac667104463b56790c91
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0FC4A1C7-421C-5EAB-9361-4C0338EFA287
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': ListImagesResponseBodyImages },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListImagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListImagesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMachineNetworkInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Array
   */
  machineHpnInfo?: ListMachineNetworkInfoRequestMachineHpnInfo[];
  static names(): { [key: string]: string } {
    return {
      machineHpnInfo: 'MachineHpnInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machineHpnInfo: { 'type': 'array', 'itemType': ListMachineNetworkInfoRequestMachineHpnInfo },
    };
  }

  validate() {
    if(Array.isArray(this.machineHpnInfo)) {
      $dara.Model.validateArray(this.machineHpnInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMachineNetworkInfoShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Array
   */
  machineHpnInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      machineHpnInfoShrink: 'MachineHpnInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machineHpnInfoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMachineNetworkInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Array
   */
  machineNetworkInfo?: ListMachineNetworkInfoResponseBodyMachineNetworkInfo[];
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 4FD06DF0-9167-5C6F-A145-F30CA4A15D54
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      machineNetworkInfo: 'MachineNetworkInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machineNetworkInfo: { 'type': 'array', 'itemType': ListMachineNetworkInfoResponseBodyMachineNetworkInfo },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.machineNetworkInfo)) {
      $dara.Model.validateArray(this.machineNetworkInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMachineNetworkInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMachineNetworkInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMachineNetworkInfoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMachineTypesRequest extends $dara.Model {
  /**
   * @remarks
   * Machine name
   * 
   * @example
   * efg1.nvga1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMachineTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the machine types
   */
  machineTypes?: ListMachineTypesResponseBodyMachineTypes[];
  /**
   * @remarks
   * NextToken for the next page, include this value when requesting the next page
   * 
   * @example
   * a3f2224a5ec7224116c4f5246120abe4
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F16BA4D8-FF50-53B6-A026-F443FE31006C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      machineTypes: 'MachineTypes',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machineTypes: { 'type': 'array', 'itemType': ListMachineTypesResponseBodyMachineTypes },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.machineTypes)) {
      $dara.Model.validateArray(this.machineTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMachineTypesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMachineTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMachineTypesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetTestResultsRequest extends $dara.Model {
  /**
   * @remarks
   * Number of items per page in a paginated query. The maximum value is 100.
   * 
   * Default value:
   * 
   * - If no value is set or the set value is less than 20, the default is 20.
   * 
   * - If the set value is greater than 100, the default is 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Type of network test.
   * 
   * @example
   * DelayTest
   */
  netTestType?: string;
  /**
   * @remarks
   * Query token (Token), which should be the value of the NextToken parameter returned from the previous API call.
   * 
   * @example
   * 3a6b93229825ac667104463b56790c91
   */
  nextToken?: string;
  /**
   * @remarks
   * Resource group ID
   * 
   * @example
   * rg-acfmxno4vh5muoq
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      netTestType: 'NetTestType',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      netTestType: 'string',
      nextToken: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetTestResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * 分页查询时每页行数。最大值为100。
   * 
   * 默认值：
   * 
   * •当不设置值或设置的值小于20时，默认值为20。
   * 
   * •当设置的值大于100时，默认值为100。
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * List of nodes
   */
  netTestResults?: ListNetTestResultsResponseBodyNetTestResults[];
  /**
   * @remarks
   * NextToken for the next page, to be included in the request for the next page
   * 
   * @example
   * 3a6b93229825ac667104463b56790c91
   */
  nextToken?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 3C683243-7915-57FB-9570-A2932C1C0F78
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      netTestResults: 'NetTestResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      netTestResults: { 'type': 'array', 'itemType': ListNetTestResultsResponseBodyNetTestResults },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.netTestResults)) {
      $dara.Model.validateArray(this.netTestResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetTestResultsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNetTestResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNetTestResultsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * i119982311660892626523
   */
  clusterId?: string;
  /**
   * @remarks
   * Number of items per page in a paginated query. The maximum value is 100.
   * 
   * Default value:
   * 
   * - If no value is set or the set value is less than 20, the default value is 20.
   * - If the set value is greater than 100, the default value is 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * NextToken for the next page, include this value when requesting the next page
   * 
   * @example
   * a3f2224a5ec7224116c4f5246120abe4
   */
  nextToken?: string;
  /**
   * @remarks
   * Node group ID
   * 
   * @example
   * ng-ec3c96ff0aa4c60d
   */
  nodeGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodeGroupId: 'NodeGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      nodeGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Cluster group information
   */
  groups?: ListNodeGroupsResponseBodyGroups[];
  /**
   * @remarks
   * NextToken for the next page, include this value when requesting the next page
   * 
   * @example
   * 563d42ae0b17572449ec8c97f7f66069
   */
  nextToken?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 887FA855-89F4-5DB3-B305-C5879EC480E6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: { 'type': 'array', 'itemType': ListNodeGroupsResponseBodyGroups },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeGroupsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNodeGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNodeGroupsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Query token (Token), the value should be the NextToken returned from the previous API call
   * 
   * @example
   * AAAAAdQ3Z+oPlg49gsr2y8jb6wY=
   */
  nextToken?: string;
  /**
   * @remarks
   * Region ID
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * List of resource IDs
   */
  resourceId?: string[];
  /**
   * @remarks
   * Resource type
   * 
   * This parameter is required.
   * 
   * @example
   * Node
   */
  resourceType?: string;
  /**
   * @remarks
   * List of tags
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
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

export class ListTagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * NextToken for the next page, include this returned value when requesting the next page
   * 
   * @example
   * AAAAAdQ3Z+oPlg49gsr2y8jb6wY=
   */
  nextToken?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 8F208B6D-4C42-5FD3-B6BE-E826E92A44DD
   */
  requestId?: string;
  /**
   * @remarks
   * Tagged resources.
   */
  tagResources?: ListTagResourcesResponseBodyTagResources;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: ListTagResourcesResponseBodyTagResources,
    };
  }

  validate() {
    if(this.tagResources && typeof (this.tagResources as any).validate === 'function') {
      (this.tagResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserClusterTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of cluster types. The number of array elements N ranges from 1 to 100.
   */
  clusterTypes?: ListUserClusterTypesResponseBodyClusterTypes[];
  /**
   * @remarks
   * The NextToken for the next page. Include this value when requesting the next page.
   * 
   * @example
   * 3a6b93229825ac667104463b56790c91
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4FD06DF0-9167-5C6F-A145-F30CA4A15D54
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterTypes: 'ClusterTypes',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterTypes: { 'type': 'array', 'itemType': ListUserClusterTypesResponseBodyClusterTypes },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clusterTypes)) {
      $dara.Model.validateArray(this.clusterTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserClusterTypesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserClusterTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserClusterTypesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootNodesRequest extends $dara.Model {
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
   * List of nodes
   */
  nodes?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      ignoreFailedNodeTasks: 'IgnoreFailedNodeTasks',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      ignoreFailedNodeTasks: 'boolean',
      nodes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootNodesShrinkRequest extends $dara.Model {
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
   * List of nodes
   */
  nodesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      ignoreFailedNodeTasks: 'IgnoreFailedNodeTasks',
      nodesShrink: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      ignoreFailedNodeTasks: 'boolean',
      nodesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 4FD06DF0-9167-5C6F-A145-F30CA4A15D54
   */
  requestId?: string;
  /**
   * @remarks
   * Task Id
   * 
   * @example
   * i158475611663639202234
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootNodesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RebootNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RebootNodesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReimageNodesRequest extends $dara.Model {
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * i15dfa12e8f27c44f4a006c2c8bb
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
   * Node list
   */
  nodes?: ReimageNodesRequestNodes[];
  /**
   * @remarks
   * Custom data
   * 
   * @example
   * #!/bin/sh
   * echo "Hello World. The time is now $(date -R)!" | tee /root/userdata_test.txt
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      ignoreFailedNodeTasks: 'IgnoreFailedNodeTasks',
      nodes: 'Nodes',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      ignoreFailedNodeTasks: 'boolean',
      nodes: { 'type': 'array', 'itemType': ReimageNodesRequestNodes },
      userData: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReimageNodesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * i15dfa12e8f27c44f4a006c2c8bb
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
   * Node list
   */
  nodesShrink?: string;
  /**
   * @remarks
   * Custom data
   * 
   * @example
   * #!/bin/sh
   * echo "Hello World. The time is now $(date -R)!" | tee /root/userdata_test.txt
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      ignoreFailedNodeTasks: 'IgnoreFailedNodeTasks',
      nodesShrink: 'Nodes',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      ignoreFailedNodeTasks: 'boolean',
      nodesShrink: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReimageNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 15FBCD9B-C93F-54E8-A168-AADE7E66DAD2
   */
  requestId?: string;
  /**
   * @remarks
   * Task ID
   * 
   * @example
   * i158782151663841517926
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReimageNodesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReimageNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReimageNodesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandRequest extends $dara.Model {
  /**
   * @remarks
   * Ensures idempotence of the request. Generate a unique parameter value from your client to ensure that the value is unique across different requests. 
   * ClientToken supports only ASCII characters and cannot exceed 64 characters. For more information, see How to Ensure Idempotence.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Command content. Please note the following:
   * 
   * - Specify `EnableParameter=true` to enable custom parameters in the command content.
   * - Define custom parameters using the {{}} format; spaces and newlines within `{{}}` will be ignored.
   * - The number of custom parameters cannot exceed 20.
   * - Custom parameter names can only contain a-zA-Z0-9-_, and are case-insensitive.
   * - A single custom parameter name cannot exceed 64 bytes.
   * 
   * @example
   * ZWNobyAxMjM=
   */
  commandContent?: string;
  /**
   * @remarks
   * Command ID
   * 
   * @example
   * c-e996287206324975b5fbe1d***
   */
  commandId?: string;
  /**
   * @remarks
   * Encoding method for the script content. Valid values:
   * 
   * - PlainText: No encoding, transmitted in plain text.
   * - Base64: Base64 encoding.
   * 
   * Default value: PlainText. If an invalid value is provided, it will be treated as PlainText.
   * 
   * @example
   * Base64
   */
  contentEncoding?: string;
  /**
   * @remarks
   * Command description.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * Whether the command contains custom parameters.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableParameter?: boolean;
  /**
   * @remarks
   * Execution time for scheduled commands. Currently, three types of scheduling methods are supported: fixed interval (based on Rate expression), one-time execution at a specific time, and clock-based scheduling (based on Cron expression).
   * 
   * Fixed interval execution: Based on the Rate expression, the command is executed at the set interval. The interval can be set in seconds (s), minutes (m), hours (h), and days (d), suitable for scenarios where tasks need to be executed at fixed intervals. The format is rate(<interval value><interval unit>), such as rate(5m) for every 5 minutes. The following restrictions apply to fixed interval execution:
   * - The interval should not exceed 7 days and should be no less than 60 seconds, and it must be greater than the timeout of the scheduled task.
   * - The interval is based on a fixed frequency and is independent of the actual execution time of the task. For example, if the command is set to execute every 5 minutes and the task takes 2 minutes to complete, the next round will start 3 minutes after the completion of the task.
   * - The task will not be executed immediately upon creation. For example, if the command is set to execute every 5 minutes, it will not be executed immediately upon creation but will start 5 minutes after the task is created.
   * One-time execution at a specific time: Executes the command once at the specified time and timezone. The format is at(yyyy-MM-dd HH:mm:ss <timezone>), which is at(year-month-day hour:minute:second <timezone>). If no timezone is specified, UTC is used by default. Timezones support the following three formats:
   * - Full timezone name: e.g., Asia/Shanghai (China/Shanghai time), America/Los_Angeles (America/Los Angeles time), etc.
   * - Timezone offset from GMT: e.g., GMT+8:00 (UTC+8:00), GMT-7:00 (UTC-7:00). When using the GMT format, leading zeros are not allowed in the hour position.
   * - Timezone abbreviation: Only UTC (Coordinated Universal Time) is supported.
   * 
   * For example, to execute once at 13:15:30 on June 6, 2022, in Shanghai, China, the format would be: at(2022-06-06 13:15:30 Asia/Shanghai); to execute once at 13:15:30 on June 6, 2022, in the GMT-7:00 timezone, the format would be: at(2022-06-06 13:15:30 GMT-7:00).
   * 
   * Clock-based scheduling (based on Cron expression): Based on the Cron expression, the command is executed according to the set schedule. The format is <second> <minute> <hour> <day> <month> <weekday> <year (optional)> <timezone>, i.e., <Cron expression> <timezone>. In the specified timezone, the scheduled task execution time is calculated based on the Cron expression and then executed. If no timezone is specified, the system\\"s internal timezone of the instance running the scheduled task is used by default. For more information about Cron expressions, see Cron Expressions. Timezones support the following three formats:
   * - Full timezone name: e.g., Asia/Shanghai (China/Shanghai time), America/Los_Angeles (America/Los Angeles time), etc.
   * - Timezone offset from GMT: e.g., GMT+8:00 (UTC+8:00), GMT-7:00 (UTC-7:00). When using the GMT format, leading zeros are not allowed in the hour position.
   * - Timezone abbreviation: Only UTC (Coordinated Universal Time) is supported.
   * 
   * For example, to execute the command at 10:15 AM every day in 2022 in Shanghai, China, the format would be 0 15 10 ? * * 2022 Asia/Shanghai; to execute the command every 30 minutes between 10:00 AM and 11:30 AM every day in 2022 in the GMT+8:00 timezone, the format would be 0 0/30 10-11 * * ? 2022 GMT+8:00; to execute the command every 5 minutes between 2:00 PM and 2:55 PM every day in October every two years starting from 2022 in UTC, the format would be 0 0/5 14 * 10 ? 2022/2 UTC.
   */
  frequency?: string;
  /**
   * @remarks
   * Bootstrap for script execution. The length must not exceed 1 KB.
   * 
   * @example
   * python3 -u {{ACS::ScriptFileName|Ext(".py")}}
   */
  launcher?: string;
  /**
   * @remarks
   * Command name.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * List of nodes.
   */
  nodeIdList?: string[];
  /**
   * @remarks
   * When the command contains custom parameters, you need to pass in key-value pairs of these custom parameters when executing the command. For example, if the command content is `echo {{name}}`, you can pass in the key-value pair `{"name":"Jack"}` through the `Parameter` parameter. The custom parameter will automatically replace the variable value `name`, resulting in a new command, which actually executes as `echo Jack`.
   * 
   * The number of custom parameters ranges from 0 to 10, and you should note:
   * 
   * - Keys cannot be empty strings and support up to 64 characters at most.
   * - Values can be empty strings.
   * - When combined with the original command content and Base64 encoded, if the command is saved, the size after Base64 encoding must not exceed 18 KB; if the command is not saved, the size after Base64 encoding must not exceed 24 KB. You can set whether to keep the command via `KeepCommand`.
   * - The set of custom parameter names must be a subset of the parameter set defined during command creation. For parameters that are not passed in, you can use an empty string as a substitute.
   * 
   * The default value is empty, indicating that the parameter is not set, thus disabling custom parameters.
   * 
   * @example
   * {"name":"Jack", "accessKey":"LTAIdyvdIqaRY****"}
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * Set the command execution mode. Valid values:
   * 
   * - Once: Execute the command immediately.
   * - Period: Execute the command at a scheduled time. When this parameter is set to `Period`, you must also specify the `Frequency` parameter.
   * - NextRebootOnly: Automatically execute the command when the instance starts next time.
   * - EveryReboot: Automatically execute the command every time the instance starts.
   * 
   * Default value:
   * - If the `Frequency` parameter is not specified, the default value is `Once`.
   * - If the `Frequency` parameter is specified, regardless of whether this parameter is already set, it will be processed as `Period`.
   * 
   * @example
   * Once
   */
  repeatMode?: string;
  /**
   * @remarks
   * The mode when stopping a task (manually or due to execution timeout). Possible values:
   * Process: Stops the current script process. ProcessTree: Stops the current process tree (a collection of the script process and all its child processes).
   * 
   * @example
   * ProcessTree
   */
  terminationMode?: string;
  /**
   * @remarks
   * Timeout for executing the command, in seconds. If the command cannot run due to process issues, missing modules, or the absence of the Cloud Assistant Agent, a timeout will occur. After a timeout, the command process will be forcibly terminated. Default value: 60.
   * 
   * @example
   * 3600
   */
  timeout?: number;
  /**
   * @remarks
   * The username to execute the command in the instance. The length must not exceed 255 characters.
   *     For Linux systems, the command is executed by the root user by default.
   * 
   * @example
   * root
   */
  username?: string;
  /**
   * @remarks
   * You can customize the execution path of the command. The default paths are as follows:
   * 
   * - Linux instances: The default execution path is under the /home directory of the root user.
   * 
   * @example
   * /home/user
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commandContent: 'CommandContent',
      commandId: 'CommandId',
      contentEncoding: 'ContentEncoding',
      description: 'Description',
      enableParameter: 'EnableParameter',
      frequency: 'Frequency',
      launcher: 'Launcher',
      name: 'Name',
      nodeIdList: 'NodeIdList',
      parameters: 'Parameters',
      repeatMode: 'RepeatMode',
      terminationMode: 'TerminationMode',
      timeout: 'Timeout',
      username: 'Username',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commandContent: 'string',
      commandId: 'string',
      contentEncoding: 'string',
      description: 'string',
      enableParameter: 'boolean',
      frequency: 'string',
      launcher: 'string',
      name: 'string',
      nodeIdList: { 'type': 'array', 'itemType': 'string' },
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      repeatMode: 'string',
      terminationMode: 'string',
      timeout: 'number',
      username: 'string',
      workingDir: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodeIdList)) {
      $dara.Model.validateArray(this.nodeIdList);
    }
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Ensures idempotence of the request. Generate a unique parameter value from your client to ensure that the value is unique across different requests. 
   * ClientToken supports only ASCII characters and cannot exceed 64 characters. For more information, see How to Ensure Idempotence.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Command content. Please note the following:
   * 
   * - Specify `EnableParameter=true` to enable custom parameters in the command content.
   * - Define custom parameters using the {{}} format; spaces and newlines within `{{}}` will be ignored.
   * - The number of custom parameters cannot exceed 20.
   * - Custom parameter names can only contain a-zA-Z0-9-_, and are case-insensitive.
   * - A single custom parameter name cannot exceed 64 bytes.
   * 
   * @example
   * ZWNobyAxMjM=
   */
  commandContent?: string;
  /**
   * @remarks
   * Command ID
   * 
   * @example
   * c-e996287206324975b5fbe1d***
   */
  commandId?: string;
  /**
   * @remarks
   * Encoding method for the script content. Valid values:
   * 
   * - PlainText: No encoding, transmitted in plain text.
   * - Base64: Base64 encoding.
   * 
   * Default value: PlainText. If an invalid value is provided, it will be treated as PlainText.
   * 
   * @example
   * Base64
   */
  contentEncoding?: string;
  /**
   * @remarks
   * Command description.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * Whether the command contains custom parameters.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableParameter?: boolean;
  /**
   * @remarks
   * Execution time for scheduled commands. Currently, three types of scheduling methods are supported: fixed interval (based on Rate expression), one-time execution at a specific time, and clock-based scheduling (based on Cron expression).
   * 
   * Fixed interval execution: Based on the Rate expression, the command is executed at the set interval. The interval can be set in seconds (s), minutes (m), hours (h), and days (d), suitable for scenarios where tasks need to be executed at fixed intervals. The format is rate(<interval value><interval unit>), such as rate(5m) for every 5 minutes. The following restrictions apply to fixed interval execution:
   * - The interval should not exceed 7 days and should be no less than 60 seconds, and it must be greater than the timeout of the scheduled task.
   * - The interval is based on a fixed frequency and is independent of the actual execution time of the task. For example, if the command is set to execute every 5 minutes and the task takes 2 minutes to complete, the next round will start 3 minutes after the completion of the task.
   * - The task will not be executed immediately upon creation. For example, if the command is set to execute every 5 minutes, it will not be executed immediately upon creation but will start 5 minutes after the task is created.
   * One-time execution at a specific time: Executes the command once at the specified time and timezone. The format is at(yyyy-MM-dd HH:mm:ss <timezone>), which is at(year-month-day hour:minute:second <timezone>). If no timezone is specified, UTC is used by default. Timezones support the following three formats:
   * - Full timezone name: e.g., Asia/Shanghai (China/Shanghai time), America/Los_Angeles (America/Los Angeles time), etc.
   * - Timezone offset from GMT: e.g., GMT+8:00 (UTC+8:00), GMT-7:00 (UTC-7:00). When using the GMT format, leading zeros are not allowed in the hour position.
   * - Timezone abbreviation: Only UTC (Coordinated Universal Time) is supported.
   * 
   * For example, to execute once at 13:15:30 on June 6, 2022, in Shanghai, China, the format would be: at(2022-06-06 13:15:30 Asia/Shanghai); to execute once at 13:15:30 on June 6, 2022, in the GMT-7:00 timezone, the format would be: at(2022-06-06 13:15:30 GMT-7:00).
   * 
   * Clock-based scheduling (based on Cron expression): Based on the Cron expression, the command is executed according to the set schedule. The format is <second> <minute> <hour> <day> <month> <weekday> <year (optional)> <timezone>, i.e., <Cron expression> <timezone>. In the specified timezone, the scheduled task execution time is calculated based on the Cron expression and then executed. If no timezone is specified, the system\\"s internal timezone of the instance running the scheduled task is used by default. For more information about Cron expressions, see Cron Expressions. Timezones support the following three formats:
   * - Full timezone name: e.g., Asia/Shanghai (China/Shanghai time), America/Los_Angeles (America/Los Angeles time), etc.
   * - Timezone offset from GMT: e.g., GMT+8:00 (UTC+8:00), GMT-7:00 (UTC-7:00). When using the GMT format, leading zeros are not allowed in the hour position.
   * - Timezone abbreviation: Only UTC (Coordinated Universal Time) is supported.
   * 
   * For example, to execute the command at 10:15 AM every day in 2022 in Shanghai, China, the format would be 0 15 10 ? * * 2022 Asia/Shanghai; to execute the command every 30 minutes between 10:00 AM and 11:30 AM every day in 2022 in the GMT+8:00 timezone, the format would be 0 0/30 10-11 * * ? 2022 GMT+8:00; to execute the command every 5 minutes between 2:00 PM and 2:55 PM every day in October every two years starting from 2022 in UTC, the format would be 0 0/5 14 * 10 ? 2022/2 UTC.
   */
  frequency?: string;
  /**
   * @remarks
   * Bootstrap for script execution. The length must not exceed 1 KB.
   * 
   * @example
   * python3 -u {{ACS::ScriptFileName|Ext(".py")}}
   */
  launcher?: string;
  /**
   * @remarks
   * Command name.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * List of nodes.
   */
  nodeIdListShrink?: string;
  /**
   * @remarks
   * When the command contains custom parameters, you need to pass in key-value pairs of these custom parameters when executing the command. For example, if the command content is `echo {{name}}`, you can pass in the key-value pair `{"name":"Jack"}` through the `Parameter` parameter. The custom parameter will automatically replace the variable value `name`, resulting in a new command, which actually executes as `echo Jack`.
   * 
   * The number of custom parameters ranges from 0 to 10, and you should note:
   * 
   * - Keys cannot be empty strings and support up to 64 characters at most.
   * - Values can be empty strings.
   * - When combined with the original command content and Base64 encoded, if the command is saved, the size after Base64 encoding must not exceed 18 KB; if the command is not saved, the size after Base64 encoding must not exceed 24 KB. You can set whether to keep the command via `KeepCommand`.
   * - The set of custom parameter names must be a subset of the parameter set defined during command creation. For parameters that are not passed in, you can use an empty string as a substitute.
   * 
   * The default value is empty, indicating that the parameter is not set, thus disabling custom parameters.
   * 
   * @example
   * {"name":"Jack", "accessKey":"LTAIdyvdIqaRY****"}
   */
  parametersShrink?: string;
  /**
   * @remarks
   * Set the command execution mode. Valid values:
   * 
   * - Once: Execute the command immediately.
   * - Period: Execute the command at a scheduled time. When this parameter is set to `Period`, you must also specify the `Frequency` parameter.
   * - NextRebootOnly: Automatically execute the command when the instance starts next time.
   * - EveryReboot: Automatically execute the command every time the instance starts.
   * 
   * Default value:
   * - If the `Frequency` parameter is not specified, the default value is `Once`.
   * - If the `Frequency` parameter is specified, regardless of whether this parameter is already set, it will be processed as `Period`.
   * 
   * @example
   * Once
   */
  repeatMode?: string;
  /**
   * @remarks
   * The mode when stopping a task (manually or due to execution timeout). Possible values:
   * Process: Stops the current script process. ProcessTree: Stops the current process tree (a collection of the script process and all its child processes).
   * 
   * @example
   * ProcessTree
   */
  terminationMode?: string;
  /**
   * @remarks
   * Timeout for executing the command, in seconds. If the command cannot run due to process issues, missing modules, or the absence of the Cloud Assistant Agent, a timeout will occur. After a timeout, the command process will be forcibly terminated. Default value: 60.
   * 
   * @example
   * 3600
   */
  timeout?: number;
  /**
   * @remarks
   * The username to execute the command in the instance. The length must not exceed 255 characters.
   *     For Linux systems, the command is executed by the root user by default.
   * 
   * @example
   * root
   */
  username?: string;
  /**
   * @remarks
   * You can customize the execution path of the command. The default paths are as follows:
   * 
   * - Linux instances: The default execution path is under the /home directory of the root user.
   * 
   * @example
   * /home/user
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commandContent: 'CommandContent',
      commandId: 'CommandId',
      contentEncoding: 'ContentEncoding',
      description: 'Description',
      enableParameter: 'EnableParameter',
      frequency: 'Frequency',
      launcher: 'Launcher',
      name: 'Name',
      nodeIdListShrink: 'NodeIdList',
      parametersShrink: 'Parameters',
      repeatMode: 'RepeatMode',
      terminationMode: 'TerminationMode',
      timeout: 'Timeout',
      username: 'Username',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commandContent: 'string',
      commandId: 'string',
      contentEncoding: 'string',
      description: 'string',
      enableParameter: 'boolean',
      frequency: 'string',
      launcher: 'string',
      name: 'string',
      nodeIdListShrink: 'string',
      parametersShrink: 'string',
      repeatMode: 'string',
      terminationMode: 'string',
      timeout: 'number',
      username: 'string',
      workingDir: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandResponseBody extends $dara.Model {
  /**
   * @remarks
   * ID of the command execution.
   * 
   * @example
   * t-7d2a745b412b4601b2d47f6a768d*
   */
  invokeId?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 2FE2B22C-CF9D-59DE-BF63-DC9B9B33A9D1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invokeId: 'InvokeId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunCommandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunCommandResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendFileRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the file. After Base64 encoding, the size cannot exceed 32 KB.
   * 
   * - When the `ContentType` parameter is `PlainText`, this field is plain text.
   * - When the `ContentType` parameter is `Base64`, this field is Base64 encoded text.
   * 
   * This parameter is required.
   * 
   * @example
   * #!/bin/bash echo "Current User is :" echo $(ps | grep "$$" | awk \\"{print $2}\\") -------- oss://bucketName/objectName
   */
  content?: string;
  /**
   * @remarks
   * The content type of the file.
   * 
   * PlainText: Plain text.
   * Base64: Base64 encoded.
   * The default value is PlainText.
   * 
   * @example
   * PlainText
   */
  contentType?: string;
  /**
   * @remarks
   * Description information. Supports all character sets, and the length must not exceed 512 characters.
   * 
   * @example
   * This is a test file.
   */
  description?: string;
  /**
   * @remarks
   * The group of the file. Applies only to Linux instances, and the default is root. The length must not exceed 64 characters.
   * 
   * Note
   * When using other groups, ensure that the group exists in the instance.
   * 
   * @example
   * test
   */
  fileGroup?: string;
  /**
   * @remarks
   * The permissions of the file. Applies only to Linux instances, and the setting method is the same as the chmod command.
   * 
   * The default value is 0644, which means the user has read and write permissions, while the group and other users have read-only permissions.
   * 
   * @example
   * 0644
   */
  fileMode?: string;
  /**
   * @remarks
   * The owner of the file. Applies only to Linux instances, and the default is root.
   * 
   * @example
   * root
   */
  fileOwner?: string;
  /**
   * @remarks
   * The name of the file. Supports all character sets, and the length must not exceed 255 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * file.txt
   */
  name?: string;
  /**
   * @remarks
   * List of nodes.
   * 
   * This parameter is required.
   */
  nodeIdList?: string[];
  /**
   * @remarks
   * Whether to overwrite the file if a file with the same name already exists in the target directory.
   * - true: Overwrite.
   * - false: Do not overwrite.
   * 
   * The default value is false.
   * 
   * @example
   * True
   */
  overwrite?: boolean;
  /**
   * @remarks
   * The directory in the target Lingjun node where the file will be sent. If it does not exist, it will be automatically created.
   * 
   * This parameter is required.
   * 
   * @example
   * /home
   */
  targetDir?: string;
  /**
   * @remarks
   * The timeout for sending the file. Unit: seconds.
   * 
   * - A timeout may occur due to process reasons, missing modules, or missing Cloud Assistant Agent.
   * - If the set timeout is less than 10 seconds, to ensure successful delivery, the system will automatically set the timeout to 10 seconds.
   * 
   * The default value is 60.
   * 
   * @example
   * 600
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      description: 'Description',
      fileGroup: 'FileGroup',
      fileMode: 'FileMode',
      fileOwner: 'FileOwner',
      name: 'Name',
      nodeIdList: 'NodeIdList',
      overwrite: 'Overwrite',
      targetDir: 'TargetDir',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      description: 'string',
      fileGroup: 'string',
      fileMode: 'string',
      fileOwner: 'string',
      name: 'string',
      nodeIdList: { 'type': 'array', 'itemType': 'string' },
      overwrite: 'boolean',
      targetDir: 'string',
      timeout: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.nodeIdList)) {
      $dara.Model.validateArray(this.nodeIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendFileShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the file. After Base64 encoding, the size cannot exceed 32 KB.
   * 
   * - When the `ContentType` parameter is `PlainText`, this field is plain text.
   * - When the `ContentType` parameter is `Base64`, this field is Base64 encoded text.
   * 
   * This parameter is required.
   * 
   * @example
   * #!/bin/bash echo "Current User is :" echo $(ps | grep "$$" | awk \\"{print $2}\\") -------- oss://bucketName/objectName
   */
  content?: string;
  /**
   * @remarks
   * The content type of the file.
   * 
   * PlainText: Plain text.
   * Base64: Base64 encoded.
   * The default value is PlainText.
   * 
   * @example
   * PlainText
   */
  contentType?: string;
  /**
   * @remarks
   * Description information. Supports all character sets, and the length must not exceed 512 characters.
   * 
   * @example
   * This is a test file.
   */
  description?: string;
  /**
   * @remarks
   * The group of the file. Applies only to Linux instances, and the default is root. The length must not exceed 64 characters.
   * 
   * Note
   * When using other groups, ensure that the group exists in the instance.
   * 
   * @example
   * test
   */
  fileGroup?: string;
  /**
   * @remarks
   * The permissions of the file. Applies only to Linux instances, and the setting method is the same as the chmod command.
   * 
   * The default value is 0644, which means the user has read and write permissions, while the group and other users have read-only permissions.
   * 
   * @example
   * 0644
   */
  fileMode?: string;
  /**
   * @remarks
   * The owner of the file. Applies only to Linux instances, and the default is root.
   * 
   * @example
   * root
   */
  fileOwner?: string;
  /**
   * @remarks
   * The name of the file. Supports all character sets, and the length must not exceed 255 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * file.txt
   */
  name?: string;
  /**
   * @remarks
   * List of nodes.
   * 
   * This parameter is required.
   */
  nodeIdListShrink?: string;
  /**
   * @remarks
   * Whether to overwrite the file if a file with the same name already exists in the target directory.
   * - true: Overwrite.
   * - false: Do not overwrite.
   * 
   * The default value is false.
   * 
   * @example
   * True
   */
  overwrite?: boolean;
  /**
   * @remarks
   * The directory in the target Lingjun node where the file will be sent. If it does not exist, it will be automatically created.
   * 
   * This parameter is required.
   * 
   * @example
   * /home
   */
  targetDir?: string;
  /**
   * @remarks
   * The timeout for sending the file. Unit: seconds.
   * 
   * - A timeout may occur due to process reasons, missing modules, or missing Cloud Assistant Agent.
   * - If the set timeout is less than 10 seconds, to ensure successful delivery, the system will automatically set the timeout to 10 seconds.
   * 
   * The default value is 60.
   * 
   * @example
   * 600
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      description: 'Description',
      fileGroup: 'FileGroup',
      fileMode: 'FileMode',
      fileOwner: 'FileOwner',
      name: 'Name',
      nodeIdListShrink: 'NodeIdList',
      overwrite: 'Overwrite',
      targetDir: 'TargetDir',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      description: 'string',
      fileGroup: 'string',
      fileMode: 'string',
      fileOwner: 'string',
      name: 'string',
      nodeIdListShrink: 'string',
      overwrite: 'boolean',
      targetDir: 'string',
      timeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * Command execution ID.
   * 
   * @example
   * t-hz03la52z1zkvls
   */
  invokeId?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 3C683243-7915-57FB-9570-A2932C1C0F78
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invokeId: 'InvokeId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendFileResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendFileResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShrinkClusterRequest extends $dara.Model {
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * i15dfa12e8f27c44f4a006c2c8bb
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
   * Node group information
   */
  nodeGroups?: ShrinkClusterRequestNodeGroups[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      ignoreFailedNodeTasks: 'IgnoreFailedNodeTasks',
      nodeGroups: 'NodeGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      ignoreFailedNodeTasks: 'boolean',
      nodeGroups: { 'type': 'array', 'itemType': ShrinkClusterRequestNodeGroups },
    };
  }

  validate() {
    if(Array.isArray(this.nodeGroups)) {
      $dara.Model.validateArray(this.nodeGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShrinkClusterShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * i15dfa12e8f27c44f4a006c2c8bb
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
   * Node group information
   */
  nodeGroupsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      ignoreFailedNodeTasks: 'IgnoreFailedNodeTasks',
      nodeGroupsShrink: 'NodeGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      ignoreFailedNodeTasks: 'boolean',
      nodeGroupsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShrinkClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * CC9FEF89-9BE5-5E03-845E-238B48D7599B
   */
  requestId?: string;
  /**
   * @remarks
   * task id
   * 
   * @example
   * i159136551662516768776
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShrinkClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ShrinkClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ShrinkClusterResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInvocationRequest extends $dara.Model {
  /**
   * @remarks
   * Command execution ID.
   * 
   * This parameter is required.
   * 
   * @example
   * f-hz044748dzepds0
   */
  invokeId?: string;
  /**
   * @remarks
   * List of nodes.
   */
  nodeIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      invokeId: 'InvokeId',
      nodeIdList: 'NodeIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeId: 'string',
      nodeIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.nodeIdList)) {
      $dara.Model.validateArray(this.nodeIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInvocationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Command execution ID.
   * 
   * This parameter is required.
   * 
   * @example
   * f-hz044748dzepds0
   */
  invokeId?: string;
  /**
   * @remarks
   * List of nodes.
   */
  nodeIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      invokeId: 'InvokeId',
      nodeIdListShrink: 'NodeIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeId: 'string',
      nodeIdListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInvocationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A7FD7411-9395-52E8-AF42-EB3A4A55446D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInvocationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopInvocationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopInvocationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopNodesRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to allow skipping failed node tasks, default value is False.
   * 
   * @example
   * False
   */
  ignoreFailedNodeTasks?: boolean;
  /**
   * @remarks
   * List of nodes.
   */
  nodes?: string[];
  static names(): { [key: string]: string } {
    return {
      ignoreFailedNodeTasks: 'IgnoreFailedNodeTasks',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoreFailedNodeTasks: 'boolean',
      nodes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopNodesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to allow skipping failed node tasks, default value is False.
   * 
   * @example
   * False
   */
  ignoreFailedNodeTasks?: boolean;
  /**
   * @remarks
   * List of nodes.
   */
  nodesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      ignoreFailedNodeTasks: 'IgnoreFailedNodeTasks',
      nodesShrink: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoreFailedNodeTasks: 'boolean',
      nodesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 4FD06DF0-9167-5C6F-A145-F30CA4A15D54
   */
  requestId?: string;
  /**
   * @remarks
   * Task ID
   * 
   * @example
   * i155847351716171893489
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopNodesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopNodesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Region ID
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * List of resource IDs
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * Resource type
   * 
   * This parameter is required.
   * 
   * @example
   * Cluster
   */
  resourceType?: string;
  /**
   * @remarks
   * Tags
   * 
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
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

export class TagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * E7BB53E1-0B08-5C4E-BA66-9225548C3151
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to remove all, only effective when TagKey.N is empty. Valid values:
   * 
   * - True, remove all
   * - False, do not remove all
   * 
   * Default is False
   * 
   * @example
   * False
   */
  all?: boolean;
  /**
   * @remarks
   * Region ID
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * List of resource IDs
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * Resource type
   * 
   * This parameter is required.
   * 
   * @example
   * Cluster
   */
  resourceType?: string;
  /**
   * @remarks
   * List of tag keys
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * request id
   * 
   * @example
   * 81F648D0-5570-5351-AE98-6F501C7E957F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UntagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNodeGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Node group name
   * 
   * @example
   * test-update
   */
  newNodeGroupName?: string;
  /**
   * @remarks
   * Node group ID
   * 
   * @example
   * i120021051733814190732
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * user data
   * 
   * @example
   * #!/bin/bash
   * uptime
   * echo "aaaaaaa" >> /tmp/ttttt20250110141010.sh
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      newNodeGroupName: 'NewNodeGroupName',
      nodeGroupId: 'NodeGroupId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newNodeGroupName: 'string',
      nodeGroupId: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNodeGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8F065DDD-6996-5973-9691-9EC57BD0072E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNodeGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateNodeGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateNodeGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("eflo-controller", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Approve Operation
   * 
   * @param request - ApproveOperationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApproveOperationResponse
   */
  async approveOperationWithOptions(request: ApproveOperationRequest, runtime: $dara.RuntimeOptions): Promise<ApproveOperationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.operationType)) {
      body["OperationType"] = request.operationType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApproveOperation",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ApproveOperationResponse>(await this.callApi(params, req, runtime), new ApproveOperationResponse({}));
  }

  /**
   * Approve Operation
   * 
   * @param request - ApproveOperationRequest
   * @returns ApproveOperationResponse
   */
  async approveOperation(request: ApproveOperationRequest): Promise<ApproveOperationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.approveOperationWithOptions(request, runtime);
  }

  /**
   * Target Resource Group
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
  }

  /**
   * Target Resource Group
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Disconnect Connection
   * 
   * @remarks
   * An interface for creating a session, returning the front-end EndPoint, and initiating a periodic task to track the session status
   * 
   * @param request - CloseSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseSessionResponse
   */
  async closeSessionWithOptions(request: CloseSessionRequest, runtime: $dara.RuntimeOptions): Promise<CloseSessionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.sessionToken)) {
      body["SessionToken"] = request.sessionToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloseSession",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CloseSessionResponse>(await this.callApi(params, req, runtime), new CloseSessionResponse({}));
  }

  /**
   * Disconnect Connection
   * 
   * @remarks
   * An interface for creating a session, returning the front-end EndPoint, and initiating a periodic task to track the session status
   * 
   * @param request - CloseSessionRequest
   * @returns CloseSessionResponse
   */
  async closeSession(request: CloseSessionRequest): Promise<CloseSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.closeSessionWithOptions(request, runtime);
  }

  /**
   * Create a large-scale computing cluster
   * 
   * @param tmpReq - CreateClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClusterResponse
   */
  async createClusterWithOptions(tmpReq: CreateClusterRequest, runtime: $dara.RuntimeOptions): Promise<CreateClusterResponse> {
    tmpReq.validate();
    let request = new CreateClusterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.components)) {
      request.componentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.components, "Components", "json");
    }

    if (!$dara.isNull(tmpReq.networks)) {
      request.networksShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.networks, "Networks", "json");
    }

    if (!$dara.isNull(tmpReq.nimizVSwitches)) {
      request.nimizVSwitchesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nimizVSwitches, "NimizVSwitches", "json");
    }

    if (!$dara.isNull(tmpReq.nodeGroups)) {
      request.nodeGroupsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodeGroups, "NodeGroups", "json");
    }

    let query = { };
    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterDescription)) {
      body["ClusterDescription"] = request.clusterDescription;
    }

    if (!$dara.isNull(request.clusterName)) {
      body["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.clusterType)) {
      body["ClusterType"] = request.clusterType;
    }

    if (!$dara.isNull(request.componentsShrink)) {
      body["Components"] = request.componentsShrink;
    }

    if (!$dara.isNull(request.hpnZone)) {
      body["HpnZone"] = request.hpnZone;
    }

    if (!$dara.isNull(request.ignoreFailedNodeTasks)) {
      body["IgnoreFailedNodeTasks"] = request.ignoreFailedNodeTasks;
    }

    if (!$dara.isNull(request.networksShrink)) {
      body["Networks"] = request.networksShrink;
    }

    if (!$dara.isNull(request.nimizVSwitchesShrink)) {
      body["NimizVSwitches"] = request.nimizVSwitchesShrink;
    }

    if (!$dara.isNull(request.nodeGroupsShrink)) {
      body["NodeGroups"] = request.nodeGroupsShrink;
    }

    if (!$dara.isNull(request.openEniJumboFrame)) {
      body["OpenEniJumboFrame"] = request.openEniJumboFrame;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCluster",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateClusterResponse>(await this.callApi(params, req, runtime), new CreateClusterResponse({}));
  }

  /**
   * Create a large-scale computing cluster
   * 
   * @param request - CreateClusterRequest
   * @returns CreateClusterResponse
   */
  async createCluster(request: CreateClusterRequest): Promise<CreateClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createClusterWithOptions(request, runtime);
  }

  /**
   * Diagnostic Task Creation Interface
   * 
   * @param tmpReq - CreateDiagnosticTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDiagnosticTaskResponse
   */
  async createDiagnosticTaskWithOptions(tmpReq: CreateDiagnosticTaskRequest, runtime: $dara.RuntimeOptions): Promise<CreateDiagnosticTaskResponse> {
    tmpReq.validate();
    let request = new CreateDiagnosticTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.aiJobLogInfo)) {
      request.aiJobLogInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.aiJobLogInfo, "AiJobLogInfo", "json");
    }

    if (!$dara.isNull(tmpReq.nodeIds)) {
      request.nodeIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodeIds, "NodeIds", "simple");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aiJobLogInfoShrink)) {
      body["AiJobLogInfo"] = request.aiJobLogInfoShrink;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.diagnosticType)) {
      body["DiagnosticType"] = request.diagnosticType;
    }

    if (!$dara.isNull(request.nodeIdsShrink)) {
      body["NodeIds"] = request.nodeIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDiagnosticTask",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateDiagnosticTaskResponse>(await this.callApi(params, req, runtime), new CreateDiagnosticTaskResponse({}));
  }

  /**
   * Diagnostic Task Creation Interface
   * 
   * @param request - CreateDiagnosticTaskRequest
   * @returns CreateDiagnosticTaskResponse
   */
  async createDiagnosticTask(request: CreateDiagnosticTaskRequest): Promise<CreateDiagnosticTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDiagnosticTaskWithOptions(request, runtime);
  }

  /**
   * Create Network Test Task
   * 
   * @remarks
   * An interface for creating a session, which returns the frontend EndPoint and initiates a periodic task to track the session status.
   * 
   * @param tmpReq - CreateNetTestTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNetTestTaskResponse
   */
  async createNetTestTaskWithOptions(tmpReq: CreateNetTestTaskRequest, runtime: $dara.RuntimeOptions): Promise<CreateNetTestTaskResponse> {
    tmpReq.validate();
    let request = new CreateNetTestTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.commTest)) {
      request.commTestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.commTest, "CommTest", "json");
    }

    if (!$dara.isNull(tmpReq.delayTest)) {
      request.delayTestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.delayTest, "DelayTest", "json");
    }

    if (!$dara.isNull(tmpReq.trafficTest)) {
      request.trafficTestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.trafficTest, "TrafficTest", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterName)) {
      body["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.commTestShrink)) {
      body["CommTest"] = request.commTestShrink;
    }

    if (!$dara.isNull(request.delayTestShrink)) {
      body["DelayTest"] = request.delayTestShrink;
    }

    if (!$dara.isNull(request.netTestType)) {
      body["NetTestType"] = request.netTestType;
    }

    if (!$dara.isNull(request.networkMode)) {
      body["NetworkMode"] = request.networkMode;
    }

    if (!$dara.isNull(request.port)) {
      body["Port"] = request.port;
    }

    if (!$dara.isNull(request.trafficTestShrink)) {
      body["TrafficTest"] = request.trafficTestShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNetTestTask",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateNetTestTaskResponse>(await this.callApi(params, req, runtime), new CreateNetTestTaskResponse({}));
  }

  /**
   * Create Network Test Task
   * 
   * @remarks
   * An interface for creating a session, which returns the frontend EndPoint and initiates a periodic task to track the session status.
   * 
   * @param request - CreateNetTestTaskRequest
   * @returns CreateNetTestTaskResponse
   */
  async createNetTestTask(request: CreateNetTestTaskRequest): Promise<CreateNetTestTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNetTestTaskWithOptions(request, runtime);
  }

  /**
   * Create Node Group under Cluster
   * 
   * @remarks
   * An interface for creating a session, which returns the frontend EndPoint and initiates a periodic task to track the session status
   * 
   * @param tmpReq - CreateNodeGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNodeGroupResponse
   */
  async createNodeGroupWithOptions(tmpReq: CreateNodeGroupRequest, runtime: $dara.RuntimeOptions): Promise<CreateNodeGroupResponse> {
    tmpReq.validate();
    let request = new CreateNodeGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.nodeGroup)) {
      request.nodeGroupShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodeGroup, "NodeGroup", "json");
    }

    if (!$dara.isNull(tmpReq.nodeUnit)) {
      request.nodeUnitShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodeUnit, "NodeUnit", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.nodeGroupShrink)) {
      body["NodeGroup"] = request.nodeGroupShrink;
    }

    if (!$dara.isNull(request.nodeUnitShrink)) {
      body["NodeUnit"] = request.nodeUnitShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNodeGroup",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateNodeGroupResponse>(await this.callApi(params, req, runtime), new CreateNodeGroupResponse({}));
  }

  /**
   * Create Node Group under Cluster
   * 
   * @remarks
   * An interface for creating a session, which returns the frontend EndPoint and initiates a periodic task to track the session status
   * 
   * @param request - CreateNodeGroupRequest
   * @returns CreateNodeGroupResponse
   */
  async createNodeGroup(request: CreateNodeGroupRequest): Promise<CreateNodeGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNodeGroupWithOptions(request, runtime);
  }

  /**
   * Create Web Terminal Session
   * 
   * @remarks
   * An interface for creating a session, which returns the frontend EndPoint and initiates a periodic task to track the session status.
   * 
   * @param request - CreateSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSessionResponse
   */
  async createSessionWithOptions(request: CreateSessionRequest, runtime: $dara.RuntimeOptions): Promise<CreateSessionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.sessionType)) {
      body["SessionType"] = request.sessionType;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSession",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateSessionResponse>(await this.callApi(params, req, runtime), new CreateSessionResponse({}));
  }

  /**
   * Create Web Terminal Session
   * 
   * @remarks
   * An interface for creating a session, which returns the frontend EndPoint and initiates a periodic task to track the session status.
   * 
   * @param request - CreateSessionRequest
   * @returns CreateSessionResponse
   */
  async createSession(request: CreateSessionRequest): Promise<CreateSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSessionWithOptions(request, runtime);
  }

  /**
   * Delete cluster instance
   * 
   * @param request - DeleteClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClusterResponse
   */
  async deleteClusterWithOptions(request: DeleteClusterRequest, runtime: $dara.RuntimeOptions): Promise<DeleteClusterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCluster",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteClusterResponse>(await this.callApi(params, req, runtime), new DeleteClusterResponse({}));
  }

  /**
   * Delete cluster instance
   * 
   * @param request - DeleteClusterRequest
   * @returns DeleteClusterResponse
   */
  async deleteCluster(request: DeleteClusterRequest): Promise<DeleteClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteClusterWithOptions(request, runtime);
  }

  /**
   * Delete Node Group
   * 
   * @remarks
   * An interface for creating a session, which returns the front-end EndPoint and initiates a periodic task to track the session status.
   * 
   * @param request - DeleteNodeGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNodeGroupResponse
   */
  async deleteNodeGroupWithOptions(request: DeleteNodeGroupRequest, runtime: $dara.RuntimeOptions): Promise<DeleteNodeGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      body["NodeGroupId"] = request.nodeGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNodeGroup",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteNodeGroupResponse>(await this.callApi(params, req, runtime), new DeleteNodeGroupResponse({}));
  }

  /**
   * Delete Node Group
   * 
   * @remarks
   * An interface for creating a session, which returns the front-end EndPoint and initiates a periodic task to track the session status.
   * 
   * @param request - DeleteNodeGroupRequest
   * @returns DeleteNodeGroupResponse
   */
  async deleteNodeGroup(request: DeleteNodeGroupRequest): Promise<DeleteNodeGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNodeGroupWithOptions(request, runtime);
  }

  /**
   * Cluster Details
   * 
   * @param request - DescribeClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterResponse
   */
  async describeClusterWithOptions(request: DescribeClusterRequest, runtime: $dara.RuntimeOptions): Promise<DescribeClusterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCluster",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeClusterResponse>(await this.callApi(params, req, runtime), new DescribeClusterResponse({}));
  }

  /**
   * Cluster Details
   * 
   * @param request - DescribeClusterRequest
   * @returns DescribeClusterResponse
   */
  async describeCluster(request: DescribeClusterRequest): Promise<DescribeClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClusterWithOptions(request, runtime);
  }

  /**
   * Diagnostic Task Query Interface
   * 
   * @remarks
   * An interface for creating a session, which returns the front-end EndPoint and initiates a periodic task to track the session status.
   * 
   * @param request - DescribeDiagnosticResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiagnosticResultResponse
   */
  async describeDiagnosticResultWithOptions(request: DescribeDiagnosticResultRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDiagnosticResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.diagnosticId)) {
      body["DiagnosticId"] = request.diagnosticId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDiagnosticResult",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeDiagnosticResultResponse>(await this.callApi(params, req, runtime), new DescribeDiagnosticResultResponse({}));
  }

  /**
   * Diagnostic Task Query Interface
   * 
   * @remarks
   * An interface for creating a session, which returns the front-end EndPoint and initiates a periodic task to track the session status.
   * 
   * @param request - DescribeDiagnosticResultRequest
   * @returns DescribeDiagnosticResultResponse
   */
  async describeDiagnosticResult(request: DescribeDiagnosticResultRequest): Promise<DescribeDiagnosticResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDiagnosticResultWithOptions(request, runtime);
  }

  /**
   * Query the list and status of operations assistant command executions
   * 
   * @param request - DescribeInvocationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInvocationsResponse
   */
  async describeInvocationsWithOptions(request: DescribeInvocationsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeInvocationsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contentEncoding)) {
      body["ContentEncoding"] = request.contentEncoding;
    }

    if (!$dara.isNull(request.includeOutput)) {
      body["IncludeOutput"] = request.includeOutput;
    }

    if (!$dara.isNull(request.invokeId)) {
      body["InvokeId"] = request.invokeId;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInvocations",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeInvocationsResponse>(await this.callApi(params, req, runtime), new DescribeInvocationsResponse({}));
  }

  /**
   * Query the list and status of operations assistant command executions
   * 
   * @param request - DescribeInvocationsRequest
   * @returns DescribeInvocationsResponse
   */
  async describeInvocations(request: DescribeInvocationsRequest): Promise<DescribeInvocationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInvocationsWithOptions(request, runtime);
  }

  /**
   * Query Network Test Result
   * 
   * @remarks
   * An interface for creating a session, returning the front-end EndPoint, and initiating a periodic task to track the session status
   * 
   * @param request - DescribeNetTestResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNetTestResultResponse
   */
  async describeNetTestResultWithOptions(request: DescribeNetTestResultRequest, runtime: $dara.RuntimeOptions): Promise<DescribeNetTestResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.testId)) {
      body["TestId"] = request.testId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNetTestResult",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeNetTestResultResponse>(await this.callApi(params, req, runtime), new DescribeNetTestResultResponse({}));
  }

  /**
   * Query Network Test Result
   * 
   * @remarks
   * An interface for creating a session, returning the front-end EndPoint, and initiating a periodic task to track the session status
   * 
   * @param request - DescribeNetTestResultRequest
   * @returns DescribeNetTestResultResponse
   */
  async describeNetTestResult(request: DescribeNetTestResultRequest): Promise<DescribeNetTestResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNetTestResultWithOptions(request, runtime);
  }

  /**
   * Query node list
   * 
   * @param request - DescribeNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNodeResponse
   */
  async describeNodeWithOptions(request: DescribeNodeRequest, runtime: $dara.RuntimeOptions): Promise<DescribeNodeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNode",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeNodeResponse>(await this.callApi(params, req, runtime), new DescribeNodeResponse({}));
  }

  /**
   * Query node list
   * 
   * @param request - DescribeNodeRequest
   * @returns DescribeNodeResponse
   */
  async describeNode(request: DescribeNodeRequest): Promise<DescribeNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNodeWithOptions(request, runtime);
  }

  /**
   * Region List
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeRegionsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  /**
   * Region List
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Query the list and status of files sent by the operation assistant
   * 
   * @param request - DescribeSendFileResultsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSendFileResultsResponse
   */
  async describeSendFileResultsWithOptions(request: DescribeSendFileResultsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeSendFileResultsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.invokeId)) {
      body["InvokeId"] = request.invokeId;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSendFileResults",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeSendFileResultsResponse>(await this.callApi(params, req, runtime), new DescribeSendFileResultsResponse({}));
  }

  /**
   * Query the list and status of files sent by the operation assistant
   * 
   * @param request - DescribeSendFileResultsRequest
   * @returns DescribeSendFileResultsResponse
   */
  async describeSendFileResults(request: DescribeSendFileResultsRequest): Promise<DescribeSendFileResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSendFileResultsWithOptions(request, runtime);
  }

  /**
   * Query Task Details
   * 
   * @param request - DescribeTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTaskResponse
   */
  async describeTaskWithOptions(request: DescribeTaskRequest, runtime: $dara.RuntimeOptions): Promise<DescribeTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTask",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeTaskResponse>(await this.callApi(params, req, runtime), new DescribeTaskResponse({}));
  }

  /**
   * Query Task Details
   * 
   * @param request - DescribeTaskRequest
   * @returns DescribeTaskResponse
   */
  async describeTask(request: DescribeTaskRequest): Promise<DescribeTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTaskWithOptions(request, runtime);
  }

  /**
   * List of Available Zones
   * 
   * @param request - DescribeZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeZonesResponse
   */
  async describeZonesWithOptions(request: DescribeZonesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeZonesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeZones",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeZonesResponse>(await this.callApi(params, req, runtime), new DescribeZonesResponse({}));
  }

  /**
   * List of Available Zones
   * 
   * @param request - DescribeZonesRequest
   * @returns DescribeZonesResponse
   */
  async describeZones(request: DescribeZonesRequest): Promise<DescribeZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  /**
   * Cluster Scaling
   * 
   * @param tmpReq - ExtendClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExtendClusterResponse
   */
  async extendClusterWithOptions(tmpReq: ExtendClusterRequest, runtime: $dara.RuntimeOptions): Promise<ExtendClusterResponse> {
    tmpReq.validate();
    let request = new ExtendClusterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ipAllocationPolicy)) {
      request.ipAllocationPolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ipAllocationPolicy, "IpAllocationPolicy", "json");
    }

    if (!$dara.isNull(tmpReq.nodeGroups)) {
      request.nodeGroupsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodeGroups, "NodeGroups", "json");
    }

    if (!$dara.isNull(tmpReq.vpdSubnets)) {
      request.vpdSubnetsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.vpdSubnets, "VpdSubnets", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.ignoreFailedNodeTasks)) {
      body["IgnoreFailedNodeTasks"] = request.ignoreFailedNodeTasks;
    }

    if (!$dara.isNull(request.ipAllocationPolicyShrink)) {
      body["IpAllocationPolicy"] = request.ipAllocationPolicyShrink;
    }

    if (!$dara.isNull(request.nodeGroupsShrink)) {
      body["NodeGroups"] = request.nodeGroupsShrink;
    }

    if (!$dara.isNull(request.vSwitchZoneId)) {
      body["VSwitchZoneId"] = request.vSwitchZoneId;
    }

    if (!$dara.isNull(request.vpdSubnetsShrink)) {
      body["VpdSubnets"] = request.vpdSubnetsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExtendCluster",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ExtendClusterResponse>(await this.callApi(params, req, runtime), new ExtendClusterResponse({}));
  }

  /**
   * Cluster Scaling
   * 
   * @param request - ExtendClusterRequest
   * @returns ExtendClusterResponse
   */
  async extendCluster(request: ExtendClusterRequest): Promise<ExtendClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.extendClusterWithOptions(request, runtime);
  }

  /**
   * List of host groups under the cluster, and list of hosts under each group
   * 
   * @param request - ListClusterNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClusterNodesResponse
   */
  async listClusterNodesWithOptions(request: ListClusterNodesRequest, runtime: $dara.RuntimeOptions): Promise<ListClusterNodesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      body["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusterNodes",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListClusterNodesResponse>(await this.callApi(params, req, runtime), new ListClusterNodesResponse({}));
  }

  /**
   * List of host groups under the cluster, and list of hosts under each group
   * 
   * @param request - ListClusterNodesRequest
   * @returns ListClusterNodesResponse
   */
  async listClusterNodes(request: ListClusterNodesRequest): Promise<ListClusterNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClusterNodesWithOptions(request, runtime);
  }

  /**
   * Get the list of cluster instances
   * 
   * @param request - ListClustersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClustersResponse
   */
  async listClustersWithOptions(request: ListClustersRequest, runtime: $dara.RuntimeOptions): Promise<ListClustersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusters",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListClustersResponse>(await this.callApi(params, req, runtime), new ListClustersResponse({}));
  }

  /**
   * Get the list of cluster instances
   * 
   * @param request - ListClustersRequest
   * @returns ListClustersResponse
   */
  async listClusters(request: ListClustersRequest): Promise<ListClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClustersWithOptions(request, runtime);
  }

  /**
   * List of Diagnostic Tasks
   * 
   * @remarks
   * An interface for creating a session, which returns the frontend EndPoint and initiates a periodic task to track the session status.
   * 
   * @param request - ListDiagnosticResultsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDiagnosticResultsResponse
   */
  async listDiagnosticResultsWithOptions(request: ListDiagnosticResultsRequest, runtime: $dara.RuntimeOptions): Promise<ListDiagnosticResultsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.diagType)) {
      body["DiagType"] = request.diagType;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDiagnosticResults",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListDiagnosticResultsResponse>(await this.callApi(params, req, runtime), new ListDiagnosticResultsResponse({}));
  }

  /**
   * List of Diagnostic Tasks
   * 
   * @remarks
   * An interface for creating a session, which returns the frontend EndPoint and initiates a periodic task to track the session status.
   * 
   * @param request - ListDiagnosticResultsRequest
   * @returns ListDiagnosticResultsResponse
   */
  async listDiagnosticResults(request: ListDiagnosticResultsRequest): Promise<ListDiagnosticResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDiagnosticResultsWithOptions(request, runtime);
  }

  /**
   * List of Available Physical Machines
   * 
   * @param request - ListFreeNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFreeNodesResponse
   */
  async listFreeNodesWithOptions(request: ListFreeNodesRequest, runtime: $dara.RuntimeOptions): Promise<ListFreeNodesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hpnZone)) {
      body["HpnZone"] = request.hpnZone;
    }

    if (!$dara.isNull(request.machineType)) {
      body["MachineType"] = request.machineType;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.operatingStates)) {
      body["OperatingStates"] = request.operatingStates;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFreeNodes",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListFreeNodesResponse>(await this.callApi(params, req, runtime), new ListFreeNodesResponse({}));
  }

  /**
   * List of Available Physical Machines
   * 
   * @param request - ListFreeNodesRequest
   * @returns ListFreeNodesResponse
   */
  async listFreeNodes(request: ListFreeNodesRequest): Promise<ListFreeNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFreeNodesWithOptions(request, runtime);
  }

  /**
   * Query the list of images available to the user
   * 
   * @param request - ListImagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListImagesResponse
   */
  async listImagesWithOptions(request: ListImagesRequest, runtime: $dara.RuntimeOptions): Promise<ListImagesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.architecture)) {
      body["Architecture"] = request.architecture;
    }

    if (!$dara.isNull(request.imageVersion)) {
      body["ImageVersion"] = request.imageVersion;
    }

    if (!$dara.isNull(request.platform)) {
      body["Platform"] = request.platform;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListImages",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListImagesResponse>(await this.callApi(params, req, runtime), new ListImagesResponse({}));
  }

  /**
   * Query the list of images available to the user
   * 
   * @param request - ListImagesRequest
   * @returns ListImagesResponse
   */
  async listImages(request: ListImagesRequest): Promise<ListImagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listImagesWithOptions(request, runtime);
  }

  /**
   * Query machine network configuration using HPNZone and machine type
   * 
   * @remarks
   * An interface for creating a session, returning the frontend EndPoint, and initiating a periodic task to track the session status
   * 
   * @param tmpReq - ListMachineNetworkInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMachineNetworkInfoResponse
   */
  async listMachineNetworkInfoWithOptions(tmpReq: ListMachineNetworkInfoRequest, runtime: $dara.RuntimeOptions): Promise<ListMachineNetworkInfoResponse> {
    tmpReq.validate();
    let request = new ListMachineNetworkInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.machineHpnInfo)) {
      request.machineHpnInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.machineHpnInfo, "MachineHpnInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.machineHpnInfoShrink)) {
      body["MachineHpnInfo"] = request.machineHpnInfoShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMachineNetworkInfo",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListMachineNetworkInfoResponse>(await this.callApi(params, req, runtime), new ListMachineNetworkInfoResponse({}));
  }

  /**
   * Query machine network configuration using HPNZone and machine type
   * 
   * @remarks
   * An interface for creating a session, returning the frontend EndPoint, and initiating a periodic task to track the session status
   * 
   * @param request - ListMachineNetworkInfoRequest
   * @returns ListMachineNetworkInfoResponse
   */
  async listMachineNetworkInfo(request: ListMachineNetworkInfoRequest): Promise<ListMachineNetworkInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMachineNetworkInfoWithOptions(request, runtime);
  }

  /**
   * Query the list of machine types available to the user
   * 
   * @param request - ListMachineTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMachineTypesResponse
   */
  async listMachineTypesWithOptions(request: ListMachineTypesRequest, runtime: $dara.RuntimeOptions): Promise<ListMachineTypesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMachineTypes",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListMachineTypesResponse>(await this.callApi(params, req, runtime), new ListMachineTypesResponse({}));
  }

  /**
   * Query the list of machine types available to the user
   * 
   * @param request - ListMachineTypesRequest
   * @returns ListMachineTypesResponse
   */
  async listMachineTypes(request: ListMachineTypesRequest): Promise<ListMachineTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMachineTypesWithOptions(request, runtime);
  }

  /**
   * Network Test List
   * 
   * @remarks
   * An interface for creating a session, returning the frontend EndPoint, and initiating a periodic task to track the session status.
   * 
   * @param request - ListNetTestResultsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNetTestResultsResponse
   */
  async listNetTestResultsWithOptions(request: ListNetTestResultsRequest, runtime: $dara.RuntimeOptions): Promise<ListNetTestResultsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.netTestType)) {
      body["NetTestType"] = request.netTestType;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNetTestResults",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListNetTestResultsResponse>(await this.callApi(params, req, runtime), new ListNetTestResultsResponse({}));
  }

  /**
   * Network Test List
   * 
   * @remarks
   * An interface for creating a session, returning the frontend EndPoint, and initiating a periodic task to track the session status.
   * 
   * @param request - ListNetTestResultsRequest
   * @returns ListNetTestResultsResponse
   */
  async listNetTestResults(request: ListNetTestResultsRequest): Promise<ListNetTestResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNetTestResultsWithOptions(request, runtime);
  }

  /**
   * Query Node Group Information Under the Cluster
   * 
   * @param request - ListNodeGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodeGroupsResponse
   */
  async listNodeGroupsWithOptions(request: ListNodeGroupsRequest, runtime: $dara.RuntimeOptions): Promise<ListNodeGroupsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      body["NodeGroupId"] = request.nodeGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNodeGroups",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListNodeGroupsResponse>(await this.callApi(params, req, runtime), new ListNodeGroupsResponse({}));
  }

  /**
   * Query Node Group Information Under the Cluster
   * 
   * @param request - ListNodeGroupsRequest
   * @returns ListNodeGroupsResponse
   */
  async listNodeGroups(request: ListNodeGroupsRequest): Promise<ListNodeGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNodeGroupsWithOptions(request, runtime);
  }

  /**
   * Query Resource Tags
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
   * Query Resource Tags
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Query the cluster types available to the user
   * 
   * @remarks
   * An interface for creating a session, which returns the front-end EndPoint and initiates a periodic task to track the session status
   * 
   * @param request - ListUserClusterTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserClusterTypesResponse
   */
  async listUserClusterTypesWithOptions(runtime: $dara.RuntimeOptions): Promise<ListUserClusterTypesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListUserClusterTypes",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListUserClusterTypesResponse>(await this.callApi(params, req, runtime), new ListUserClusterTypesResponse({}));
  }

  /**
   * Query the cluster types available to the user
   * 
   * @remarks
   * An interface for creating a session, which returns the front-end EndPoint and initiates a periodic task to track the session status
   * @returns ListUserClusterTypesResponse
   */
  async listUserClusterTypes(): Promise<ListUserClusterTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserClusterTypesWithOptions(runtime);
  }

  /**
   * Reboot Machine
   * 
   * @param tmpReq - RebootNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebootNodesResponse
   */
  async rebootNodesWithOptions(tmpReq: RebootNodesRequest, runtime: $dara.RuntimeOptions): Promise<RebootNodesResponse> {
    tmpReq.validate();
    let request = new RebootNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.nodes)) {
      request.nodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodes, "Nodes", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.ignoreFailedNodeTasks)) {
      body["IgnoreFailedNodeTasks"] = request.ignoreFailedNodeTasks;
    }

    if (!$dara.isNull(request.nodesShrink)) {
      body["Nodes"] = request.nodesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RebootNodes",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RebootNodesResponse>(await this.callApi(params, req, runtime), new RebootNodesResponse({}));
  }

  /**
   * Reboot Machine
   * 
   * @param request - RebootNodesRequest
   * @returns RebootNodesResponse
   */
  async rebootNodes(request: RebootNodesRequest): Promise<RebootNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rebootNodesWithOptions(request, runtime);
  }

  /**
   * Machine Reinstallation
   * 
   * @param tmpReq - ReimageNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReimageNodesResponse
   */
  async reimageNodesWithOptions(tmpReq: ReimageNodesRequest, runtime: $dara.RuntimeOptions): Promise<ReimageNodesResponse> {
    tmpReq.validate();
    let request = new ReimageNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.nodes)) {
      request.nodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodes, "Nodes", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.ignoreFailedNodeTasks)) {
      body["IgnoreFailedNodeTasks"] = request.ignoreFailedNodeTasks;
    }

    if (!$dara.isNull(request.nodesShrink)) {
      body["Nodes"] = request.nodesShrink;
    }

    if (!$dara.isNull(request.userData)) {
      body["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReimageNodes",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ReimageNodesResponse>(await this.callApi(params, req, runtime), new ReimageNodesResponse({}));
  }

  /**
   * Machine Reinstallation
   * 
   * @param request - ReimageNodesRequest
   * @returns ReimageNodesResponse
   */
  async reimageNodes(request: ReimageNodesRequest): Promise<ReimageNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reimageNodesWithOptions(request, runtime);
  }

  /**
   * Execute a Shell script on one or more Lingjun machines
   * 
   * @param tmpReq - RunCommandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunCommandResponse
   */
  async runCommandWithOptions(tmpReq: RunCommandRequest, runtime: $dara.RuntimeOptions): Promise<RunCommandResponse> {
    tmpReq.validate();
    let request = new RunCommandShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.nodeIdList)) {
      request.nodeIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodeIdList, "NodeIdList", "json");
    }

    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.commandContent)) {
      body["CommandContent"] = request.commandContent;
    }

    if (!$dara.isNull(request.commandId)) {
      body["CommandId"] = request.commandId;
    }

    if (!$dara.isNull(request.contentEncoding)) {
      body["ContentEncoding"] = request.contentEncoding;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.enableParameter)) {
      body["EnableParameter"] = request.enableParameter;
    }

    if (!$dara.isNull(request.frequency)) {
      body["Frequency"] = request.frequency;
    }

    if (!$dara.isNull(request.launcher)) {
      body["Launcher"] = request.launcher;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.nodeIdListShrink)) {
      body["NodeIdList"] = request.nodeIdListShrink;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      body["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.repeatMode)) {
      body["RepeatMode"] = request.repeatMode;
    }

    if (!$dara.isNull(request.terminationMode)) {
      body["TerminationMode"] = request.terminationMode;
    }

    if (!$dara.isNull(request.timeout)) {
      body["Timeout"] = request.timeout;
    }

    if (!$dara.isNull(request.username)) {
      body["Username"] = request.username;
    }

    if (!$dara.isNull(request.workingDir)) {
      body["WorkingDir"] = request.workingDir;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunCommand",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RunCommandResponse>(await this.callApi(params, req, runtime), new RunCommandResponse({}));
  }

  /**
   * Execute a Shell script on one or more Lingjun machines
   * 
   * @param request - RunCommandRequest
   * @returns RunCommandResponse
   */
  async runCommand(request: RunCommandRequest): Promise<RunCommandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runCommandWithOptions(request, runtime);
  }

  /**
   * Send a remote file to one or more Lingjun machines
   * 
   * @param tmpReq - SendFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendFileResponse
   */
  async sendFileWithOptions(tmpReq: SendFileRequest, runtime: $dara.RuntimeOptions): Promise<SendFileResponse> {
    tmpReq.validate();
    let request = new SendFileShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.nodeIdList)) {
      request.nodeIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodeIdList, "NodeIdList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.contentType)) {
      body["ContentType"] = request.contentType;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileGroup)) {
      body["FileGroup"] = request.fileGroup;
    }

    if (!$dara.isNull(request.fileMode)) {
      body["FileMode"] = request.fileMode;
    }

    if (!$dara.isNull(request.fileOwner)) {
      body["FileOwner"] = request.fileOwner;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.nodeIdListShrink)) {
      body["NodeIdList"] = request.nodeIdListShrink;
    }

    if (!$dara.isNull(request.overwrite)) {
      body["Overwrite"] = request.overwrite;
    }

    if (!$dara.isNull(request.targetDir)) {
      body["TargetDir"] = request.targetDir;
    }

    if (!$dara.isNull(request.timeout)) {
      body["Timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendFile",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SendFileResponse>(await this.callApi(params, req, runtime), new SendFileResponse({}));
  }

  /**
   * Send a remote file to one or more Lingjun machines
   * 
   * @param request - SendFileRequest
   * @returns SendFileResponse
   */
  async sendFile(request: SendFileRequest): Promise<SendFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendFileWithOptions(request, runtime);
  }

  /**
   * Shrink
   * 
   * @param tmpReq - ShrinkClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ShrinkClusterResponse
   */
  async shrinkClusterWithOptions(tmpReq: ShrinkClusterRequest, runtime: $dara.RuntimeOptions): Promise<ShrinkClusterResponse> {
    tmpReq.validate();
    let request = new ShrinkClusterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.nodeGroups)) {
      request.nodeGroupsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodeGroups, "NodeGroups", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.ignoreFailedNodeTasks)) {
      body["IgnoreFailedNodeTasks"] = request.ignoreFailedNodeTasks;
    }

    if (!$dara.isNull(request.nodeGroupsShrink)) {
      body["NodeGroups"] = request.nodeGroupsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ShrinkCluster",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ShrinkClusterResponse>(await this.callApi(params, req, runtime), new ShrinkClusterResponse({}));
  }

  /**
   * Shrink
   * 
   * @param request - ShrinkClusterRequest
   * @returns ShrinkClusterResponse
   */
  async shrinkCluster(request: ShrinkClusterRequest): Promise<ShrinkClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.shrinkClusterWithOptions(request, runtime);
  }

  /**
   * Stop the operation assistant command process
   * 
   * @param tmpReq - StopInvocationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopInvocationResponse
   */
  async stopInvocationWithOptions(tmpReq: StopInvocationRequest, runtime: $dara.RuntimeOptions): Promise<StopInvocationResponse> {
    tmpReq.validate();
    let request = new StopInvocationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.nodeIdList)) {
      request.nodeIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodeIdList, "NodeIdList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.invokeId)) {
      body["InvokeId"] = request.invokeId;
    }

    if (!$dara.isNull(request.nodeIdListShrink)) {
      body["NodeIdList"] = request.nodeIdListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopInvocation",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<StopInvocationResponse>(await this.callApi(params, req, runtime), new StopInvocationResponse({}));
  }

  /**
   * Stop the operation assistant command process
   * 
   * @param request - StopInvocationRequest
   * @returns StopInvocationResponse
   */
  async stopInvocation(request: StopInvocationRequest): Promise<StopInvocationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopInvocationWithOptions(request, runtime);
  }

  /**
   * Shut down the nodes
   * 
   * @param tmpReq - StopNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopNodesResponse
   */
  async stopNodesWithOptions(tmpReq: StopNodesRequest, runtime: $dara.RuntimeOptions): Promise<StopNodesResponse> {
    tmpReq.validate();
    let request = new StopNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.nodes)) {
      request.nodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodes, "Nodes", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ignoreFailedNodeTasks)) {
      body["IgnoreFailedNodeTasks"] = request.ignoreFailedNodeTasks;
    }

    if (!$dara.isNull(request.nodesShrink)) {
      body["Nodes"] = request.nodesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopNodes",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<StopNodesResponse>(await this.callApi(params, req, runtime), new StopNodesResponse({}));
  }

  /**
   * Shut down the nodes
   * 
   * @param request - StopNodesRequest
   * @returns StopNodesResponse
   */
  async stopNodes(request: StopNodesRequest): Promise<StopNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopNodesWithOptions(request, runtime);
  }

  /**
   * Tag User Resources
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
   * Tag User Resources
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Remove user tags from resources
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<UntagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  /**
   * Remove user tags from resources
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Update Node Group
   * 
   * @remarks
   * An interface for creating a session, which returns the front-end EndPoint and initiates a periodic task to track the session status.
   * 
   * @param request - UpdateNodeGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNodeGroupResponse
   */
  async updateNodeGroupWithOptions(request: UpdateNodeGroupRequest, runtime: $dara.RuntimeOptions): Promise<UpdateNodeGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.newNodeGroupName)) {
      body["NewNodeGroupName"] = request.newNodeGroupName;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      body["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.userData)) {
      body["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNodeGroup",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateNodeGroupResponse>(await this.callApi(params, req, runtime), new UpdateNodeGroupResponse({}));
  }

  /**
   * Update Node Group
   * 
   * @remarks
   * An interface for creating a session, which returns the front-end EndPoint and initiates a periodic task to track the session status.
   * 
   * @param request - UpdateNodeGroupRequest
   * @returns UpdateNodeGroupResponse
   */
  async updateNodeGroup(request: UpdateNodeGroupRequest): Promise<UpdateNodeGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateNodeGroupWithOptions(request, runtime);
  }

}
