// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHyperNodeResponseBodyNodesDisks extends $dara.Model {
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

export class GetHyperNodeResponseBodyNodesNetworks extends $dara.Model {
  /**
   * @example
   * bond0
   */
  bondName?: string;
  /**
   * @example
   * 172.17.231.113
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

export class GetHyperNodeResponseBodyNodes extends $dara.Model {
  disks?: GetHyperNodeResponseBodyNodesDisks[];
  /**
   * @example
   * alywlcb-lingjun-gpu-0025
   */
  hostname?: string;
  /**
   * @example
   * i190297201669099844192
   */
  imageId?: string;
  /**
   * @example
   * Alinux3_x86_5.10.134-16.3_NV_RunC_D3_E3C7_570.133.20_V1.0_250428
   */
  imageName?: string;
  networks?: GetHyperNodeResponseBodyNodesNetworks;
  /**
   * @example
   * e01-cn-zvp2tgykr0b
   */
  nodeId?: string;
  /**
   * @example
   * InProgress
   */
  status?: string;
  /**
   * @example
   * #!/bin/bash
   * uptime
   * echo "aaaaaaa" >> /tmp/ttttt20250110141010.sh
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
      status: 'Status',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disks: { 'type': 'array', 'itemType': GetHyperNodeResponseBodyNodesDisks },
      hostname: 'string',
      imageId: 'string',
      imageName: 'string',
      networks: GetHyperNodeResponseBodyNodesNetworks,
      nodeId: 'string',
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

export class GetHyperNodeResponseBody extends $dara.Model {
  /**
   * @example
   * i112138561737531371671
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
   * 2026-05-14T00:00:00
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
   * efg2.C48cNHmcn
   */
  machineType?: string;
  /**
   * @example
   * ng-ec3c96ff0aa4c60d
   */
  nodeGroupId?: string;
  /**
   * @example
   * emr-default
   */
  nodeGroupName?: string;
  nodes?: GetHyperNodeResponseBodyNodes[];
  /**
   * @example
   * 2FE2B22C-CF9D-59DE-BF63-DC9B9B33A9D1
   */
  requestId?: string;
  /**
   * @example
   * rg-acfmwfm33rlt6zi
   */
  resourceGroupId?: string;
  /**
   * @example
   * Using
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
      nodes: { 'type': 'array', 'itemType': GetHyperNodeResponseBodyNodes },
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

