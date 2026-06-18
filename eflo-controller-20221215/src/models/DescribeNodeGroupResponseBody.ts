// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNodeGroupResponseBodySystemDisk extends $dara.Model {
  /**
   * @remarks
   * The category of the disk.
   * 
   * @example
   * system
   */
  category?: string;
  /**
   * @remarks
   * The performance level of the ESSD. Valid values:
   * 
   * - PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
   * 
   * - PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB. Valid values:
   * 
   * - Basic disk: 20–500.
   * 
   * - ESSD:
   * 
   *   - PL0: 1–2,048.
   * 
   *   - PL1: 20–2,048.
   * 
   *   - PL2: 461–2,048.
   * 
   *   - PL3: 1,261–2,048.
   * 
   * - ESSD AutoPL disk: 1–2,048.
   * 
   * - Other disk categories: 20–2,048.
   * 
   * Default value: the larger value between 20 and the size of the image that is specified by `ImageId`.
   * 
   * @example
   * 1024
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

export class DescribeNodeGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-wulanchabu-a
   */
  az?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * i111987311754895199538
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * aliyun-basic-cluster
   */
  clusterName?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-07-07T17:19:42.980000
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether file storage can be mounted.
   * 
   * @example
   * True
   */
  fileSystemMountEnabled?: boolean;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * i190720111752146430748
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * Alinux3_x86_5.10.134-16.3_NV_RunC_D3_E3C7_570.133.20_V1.0_250428
   */
  imageName?: string;
  /**
   * @remarks
   * The name of the key pair.
   * 
   * @example
   * k8s-key
   */
  keyPairName?: string;
  /**
   * @remarks
   * Valid values:
   * • password: The node group supports only password-based logon.
   * • keypair: The node group supports only key pair-based logon.
   * • both: The node group supports password-based and key pair-based logon.
   * 
   * If this parameter is not returned, no logon method is configured for the node group.
   * 
   * @example
   * password
   */
  loginType?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * efg2.NH2cn
   */
  machineType?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 1
   */
  nodeCount?: string;
  /**
   * @remarks
   * The description of the node group.
   * 
   * @example
   * lingjun alinux node group
   */
  nodeGroupDescription?: string;
  /**
   * @remarks
   * The ID of the node group.
   * 
   * @example
   * i120982301752461697971
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The name of the node group.
   * 
   * @example
   * test-ack
   */
  nodeGroupName?: string;
  /**
   * @remarks
   * The name of the RAM role. You can call the ListRoles operation of the RAM API to query the RAM roles that you created.
   * 
   * @example
   * xianwen-test-ram-role
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 83896080-59E3-5775-BDDC-8084691C3D96
   */
  requestId?: string;
  /**
   * @remarks
   * The system disk information.
   */
  systemDisk?: DescribeNodeGroupResponseBodySystemDisk;
  /**
   * @remarks
   * The time when the node group was last updated.
   * 
   * @example
   * 2025-08-20T11:18:11.164000
   */
  updateTime?: string;
  /**
   * @remarks
   * The user data.
   * 
   * @example
   * #!/bin/bash
   * uptime
   * echo "aaaaaaa" >> /tmp/tttest.sh
   */
  userData?: string;
  /**
   * @remarks
   * Indicates whether the node group supports GPU virtualization.
   * 
   * @example
   * False
   */
  virtualGpuEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      az: 'Az',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      createTime: 'CreateTime',
      fileSystemMountEnabled: 'FileSystemMountEnabled',
      imageId: 'ImageId',
      imageName: 'ImageName',
      keyPairName: 'KeyPairName',
      loginType: 'LoginType',
      machineType: 'MachineType',
      nodeCount: 'NodeCount',
      nodeGroupDescription: 'NodeGroupDescription',
      nodeGroupId: 'NodeGroupId',
      nodeGroupName: 'NodeGroupName',
      ramRoleName: 'RamRoleName',
      requestId: 'RequestId',
      systemDisk: 'SystemDisk',
      updateTime: 'UpdateTime',
      userData: 'UserData',
      virtualGpuEnabled: 'VirtualGpuEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      az: 'string',
      clusterId: 'string',
      clusterName: 'string',
      createTime: 'string',
      fileSystemMountEnabled: 'boolean',
      imageId: 'string',
      imageName: 'string',
      keyPairName: 'string',
      loginType: 'string',
      machineType: 'string',
      nodeCount: 'string',
      nodeGroupDescription: 'string',
      nodeGroupId: 'string',
      nodeGroupName: 'string',
      ramRoleName: 'string',
      requestId: 'string',
      systemDisk: DescribeNodeGroupResponseBodySystemDisk,
      updateTime: 'string',
      userData: 'string',
      virtualGpuEnabled: 'boolean',
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

