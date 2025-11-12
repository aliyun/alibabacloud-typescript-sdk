// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHyperNodeResponseBodyNodesDisks extends $dara.Model {
  /**
   * @example
   * DOWNLINK_PACKET
   */
  category?: string;
  /**
   * @example
   * d-bp1564bcc2306uui4zpk
   */
  diskId?: string;
  /**
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @example
   * 5
   */
  size?: number;
  /**
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
   * @example
   * bond0
   */
  bondName?: string;
  /**
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
  disks?: DescribeHyperNodeResponseBodyNodesDisks[];
  /**
   * @example
   * 457db5ca-241d-11ed-9fd7-acde48001122
   */
  hostname?: string;
  /**
   * @example
   * i190297201669099844192
   */
  imageId?: string;
  /**
   * @example
   * Alinux3_x86_gu8xf_P_Host_D3_C7E3_550.127_Legacy_N_241230
   */
  imageName?: string;
  networks?: DescribeHyperNodeResponseBodyNodesNetworks;
  /**
   * @example
   * e01-cn-zvp2tgykr0b
   */
  nodeId?: string;
  /**
   * @example
   * Using
   */
  operatingState?: string;
  /**
   * @example
   * InProgress
   * 
   * @deprecated
   */
  status?: string;
  /**
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
   * @example
   * i119982311660892626523
   */
  clusterId?: string;
  /**
   * @example
   * Standard_Cluster
   */
  clusterName?: string;
  /**
   * @example
   * 2022-11-30T02:00:00.852Z
   */
  createTime?: string;
  /**
   * @example
   * 2125-06-24T16:52:44.318000
   */
  expireTime?: string;
  /**
   * @example
   * True
   */
  fileSystemMountEnabled?: boolean;
  /**
   * @example
   * alywlcb-lingjun-gpu-0025
   */
  hostname?: string;
  /**
   * @example
   * A1
   */
  hpnZone?: string;
  /**
   * @example
   * e01-cn-zvp2tgykr08
   */
  hyperNodeId?: string;
  /**
   * @example
   * efg1.nvga1
   */
  machineType?: string;
  /**
   * @example
   * ng-ec3c96ff0aa4c60d
   */
  nodeGroupId?: string;
  /**
   * @example
   * lisan-nodegroup
   */
  nodeGroupName?: string;
  nodes?: DescribeHyperNodeResponseBodyNodes[];
  /**
   * @example
   * Using
   */
  operatingState?: string;
  /**
   * @example
   * D6058705-1C45-35C9-9461-02504897D4D0
   */
  requestId?: string;
  /**
   * @example
   * rg-acfmxno4vh5****
   */
  resourceGroupId?: string;
  /**
   * @example
   * Operating
   * 
   * @deprecated
   */
  status?: string;
  /**
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

