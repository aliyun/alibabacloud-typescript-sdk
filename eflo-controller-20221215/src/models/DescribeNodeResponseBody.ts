// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNodeResponseBodyDisks extends $dara.Model {
  /**
   * @remarks
   * The disk type. Valid values:
   * 
   *  - cloud_essd: ESSD cloud disk.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * The disk ID.
   * 
   * @example
   * d-2zeap7wkns2tdmbr11se
   */
  diskId?: string;
  /**
   * @remarks
   * The performance level of the cloud disk when an ESSD cloud disk is created as a system disk. Valid values:
   * - PL0: A single disk can deliver up to 10,000 random read/write IOPS.
   * - PL1: A single disk can deliver up to 50,000 random read/write IOPS.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The disk size. Unit: GiB.
   * 
   * @example
   * 100
   */
  size?: number;
  /**
   * @remarks
   * The disk type. Valid values:
   * 
   * - system: system disk.
   * - data: data disk.
   * 
   * @example
   * system
   */
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
   * The NIC port information.
   * 
   * @example
   * Bond0
   */
  bondName?: string;
  /**
   * @remarks
   * The machine IP address.
   * 
   * @example
   * 47.254.235.44
   */
  ip?: string;
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
   * The cluster subnet ID.
   * 
   * @example
   * vsw-uf68v51fldm5egmui5a6k
   */
  subnetId?: string;
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
   * The cluster network ID.
   * 
   * @example
   * vpd-xcuhjyrj
   */
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      bondName: 'BondName',
      ip: 'Ip',
      securityGroupId: 'SecurityGroupId',
      subnetId: 'SubnetId',
      vSwitchId: 'VSwitchId',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bondName: 'string',
      ip: 'string',
      securityGroupId: 'string',
      subnetId: 'string',
      vSwitchId: 'string',
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

export class DescribeNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * i116913051662373010974
   */
  clusterId?: string;
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
   * The creation time.
   * 
   * @example
   * 2022-09-30T03:35:53Z
   */
  createTime?: string;
  /**
   * @remarks
   * The list of disk information.
   */
  disks?: DescribeNodeResponseBodyDisks[];
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2022-06-23T16:00:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * Indicates whether file system mounting is supported.
   * 
   * @example
   * True
   */
  fileSystemMountEnabled?: boolean;
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * 31d38530-241e-11ed-bc63-acde48001122
   */
  hostname?: string;
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
   * The hyper node ID.
   * 
   * @example
   * e01-cn-zvp2tgykr08
   */
  hyperNodeId?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * i190297201634099844192
   */
  imageId?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * Centos7.9_all_0811
   */
  imageName?: string;
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
   * The network information.
   */
  networks?: DescribeNodeResponseBodyNetworks[];
  /**
   * @remarks
   * The node group ID.
   * 
   * @example
   * ng-ec3c96ff0aa4c60d
   */
  nodeGroupId?: string;
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
   * The node ID.
   * 
   * @example
   * e01-cn-zvp2tgykr08
   */
  nodeId?: string;
  /**
   * @remarks
   * The type of the current node. Valid values:
   * ● cpfs-enhanced
   * ● ebs-enhanced
   * ● standard
   * ● standby
   * ● standard-v2
   * ● standby-v2
   * 
   * @example
   * standard
   */
  nodeType?: string;
  /**
   * @remarks
   * The node status.
   * 
   * @example
   * Using
   */
  operatingState?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AC4F0004-7BCE-52E0-891B-CAC7D64E3368
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmywpvugkh7kq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The savings plan ID.
   * 
   * @example
   * spn-25e985acAWbrwEBK
   */
  savingsPlanId?: string;
  /**
   * @remarks
   * The unique machine identifier.
   * 
   * @example
   * sag42ckf4jx
   */
  sn?: string;
  /**
   * @remarks
   * The user-defined script.
   * 
   * @example
   * #!/bin/bash
   * uptime
   * echo "aaaaaaa" >> /tmp/ttttt20250110141010.sh
   */
  userData?: string;
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
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      createTime: 'CreateTime',
      disks: 'Disks',
      expiredTime: 'ExpiredTime',
      fileSystemMountEnabled: 'FileSystemMountEnabled',
      hostname: 'Hostname',
      hpnZone: 'HpnZone',
      hyperNodeId: 'HyperNodeId',
      imageId: 'ImageId',
      imageName: 'ImageName',
      machineType: 'MachineType',
      networks: 'Networks',
      nodeGroupId: 'NodeGroupId',
      nodeGroupName: 'NodeGroupName',
      nodeId: 'NodeId',
      nodeType: 'NodeType',
      operatingState: 'OperatingState',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      savingsPlanId: 'SavingsPlanId',
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
      fileSystemMountEnabled: 'boolean',
      hostname: 'string',
      hpnZone: 'string',
      hyperNodeId: 'string',
      imageId: 'string',
      imageName: 'string',
      machineType: 'string',
      networks: { 'type': 'array', 'itemType': DescribeNodeResponseBodyNetworks },
      nodeGroupId: 'string',
      nodeGroupName: 'string',
      nodeId: 'string',
      nodeType: 'string',
      operatingState: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      savingsPlanId: 'string',
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

