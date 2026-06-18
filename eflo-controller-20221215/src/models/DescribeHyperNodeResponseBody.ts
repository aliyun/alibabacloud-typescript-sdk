// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHyperNodeResponseBodyNodesDisks extends $dara.Model {
  /**
   * @remarks
   * The packet classification. Valid values:
   * 
   * - **DOWNLINK_PACKET**: downlink packet
   * 
   * - **UPLINK_PACKET**: uplink packet
   * 
   * @example
   * DOWNLINK_PACKET
   */
  category?: string;
  /**
   * @remarks
   * The disk ID.
   * 
   * @example
   * d-bp1564bcc2306uui4zpk
   */
  diskId?: string;
  /**
   * @remarks
   * When you create an enhanced SSD (ESSD) to use as a system disk, set the performance level of the disk. Valid values:
   * 
   * - PL0: A maximum of 10,000 random read/write input/output operations per second (IOPS) per disk.
   * 
   * - PL1: A maximum of 50,000 random read/write IOPS per disk.
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The disk size. Unit: GiB.
   * 
   * @example
   * 5
   */
  size?: number;
  /**
   * @remarks
   * The disk type. Valid values:
   * 
   * - system: system disk.
   * 
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

export class DescribeHyperNodeResponseBodyNodesNetworks extends $dara.Model {
  /**
   * @remarks
   * The name of the network interface on the machine.
   * 
   * @example
   * bond0
   */
  bondName?: string;
  /**
   * @remarks
   * The IP address of the machine in the virtual private cloud (VPC).
   * 
   * @example
   * 192.168.22.2
   */
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      bondName: 'BondName',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bondName: 'string',
      ip: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHyperNodeResponseBodyNodes extends $dara.Model {
  /**
   * @remarks
   * The disk information.
   */
  disks?: DescribeHyperNodeResponseBodyNodesDisks[];
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * 457db5ca-241d-11ed-9fd7-acde48001122
   */
  hostname?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * i190297201669099844192
   */
  imageId?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * Alinux3_x86_gu8xf_P_Host_D3_C7E3_550.127_Legacy_N_241230
   */
  imageName?: string;
  /**
   * @remarks
   * The network information.
   */
  networks?: DescribeHyperNodeResponseBodyNodesNetworks;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * e01-cn-zvp2tgykr0b
   */
  nodeId?: string;
  /**
   * @remarks
   * The state of the node.
   * 
   * @example
   * Using
   */
  operatingState?: string;
  /**
   * @remarks
   * The state.
   * 
   * @example
   * InProgress
   * 
   * @deprecated
   */
  status?: string;
  /**
   * @remarks
   * The user-defined script.
   * 
   * @example
   * #!/bin/bash
   * uptime
   * echo "aaaaaaa" >> /tmp/ttttttest.sh
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      disks: 'Disks',
      hostname: 'Hostname',
      imageId: 'ImageId',
      imageName: 'ImageName',
      networks: 'Networks',
      nodeId: 'NodeId',
      operatingState: 'OperatingState',
      status: 'Status',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disks: { 'type': 'array', 'itemType': DescribeHyperNodeResponseBodyNodesDisks },
      hostname: 'string',
      imageId: 'string',
      imageName: 'string',
      networks: DescribeHyperNodeResponseBodyNodesNetworks,
      nodeId: 'string',
      operatingState: 'string',
      status: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.disks)) {
      $dara.Model.validateArray(this.disks);
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

export class DescribeHyperNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * i119982311660892626523
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
   * The time when the hyper node was created.
   * 
   * @example
   * 2022-11-30T02:00:00.852Z
   */
  createTime?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2125-06-24T16:52:44.318000
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether file storage mounting is supported.
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
   * alywlcb-lingjun-gpu-0025
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
   * The ID of the hyper node.
   * 
   * @example
   * e01-cn-zvp2tgykr08
   */
  hyperNodeId?: string;
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
   * The node group ID.
   * 
   * @example
   * ng-ec3c96ff0aa4c60d
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The name of the node group.
   * 
   * @example
   * lisan-nodegroup
   */
  nodeGroupName?: string;
  /**
   * @remarks
   * The list of nodes.
   */
  nodes?: DescribeHyperNodeResponseBodyNodes[];
  /**
   * @remarks
   * The state of the hyper node.
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
   * D6058705-1C45-35C9-9461-02504897D4D0
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxno4vh5****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The state of the node.
   * 
   * @example
   * Operating
   * 
   * @deprecated
   */
  status?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-wulanchabu-c
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      fileSystemMountEnabled: 'FileSystemMountEnabled',
      hostname: 'Hostname',
      hpnZone: 'HpnZone',
      hyperNodeId: 'HyperNodeId',
      machineType: 'MachineType',
      nodeGroupId: 'NodeGroupId',
      nodeGroupName: 'NodeGroupName',
      nodes: 'Nodes',
      operatingState: 'OperatingState',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      createTime: 'string',
      expireTime: 'string',
      fileSystemMountEnabled: 'boolean',
      hostname: 'string',
      hpnZone: 'string',
      hyperNodeId: 'string',
      machineType: 'string',
      nodeGroupId: 'string',
      nodeGroupName: 'string',
      nodes: { 'type': 'array', 'itemType': DescribeHyperNodeResponseBodyNodes },
      operatingState: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      zoneId: 'string',
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

