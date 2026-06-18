// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNodeGroupRequestNodeGroupSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The type of the system disk. Valid values:
   * 
   * - `cloud_essd`: ESSD.
   * 
   * @example
   * clou_essd
   */
  category?: string;
  /**
   * @remarks
   * The performance level of the ESSD system disk. Valid values:
   * 
   * - `PL0`: A single disk delivers up to 10,000 random read/write IOPS.
   * 
   * - `PL1`: A single disk delivers up to 50,000 random read/write IOPS.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the system disk, in GB.
   * 
   * @example
   * 1000
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

export class CreateNodeGroupRequestNodeGroup extends $dara.Model {
  /**
   * @remarks
   * The availability zone of the node group.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu-b
   */
  az?: string;
  /**
   * @remarks
   * Specifies whether to enable file system mounting.
   * 
   * @example
   * false
   */
  fileSystemMountEnabled?: boolean;
  /**
   * @remarks
   * The image ID for the nodes.
   * 
   * This parameter is required.
   * 
   * @example
   * i191887641687336652616
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the key pair for SSH login.
   * 
   * @example
   * test-keypair
   */
  keyPairName?: string;
  /**
   * @remarks
   * The password to log in to the nodes.
   * 
   * @example
   * test-LoginPassword
   */
  loginPassword?: string;
  /**
   * @remarks
   * The machine type for the nodes.
   * 
   * This parameter is required.
   * 
   * @example
   * mock-machine-type3
   */
  machineType?: string;
  /**
   * @remarks
   * The description of the node group.
   * 
   * @example
   * Node group description
   */
  nodeGroupDescription?: string;
  /**
   * @remarks
   * The name of the node group.
   * 
   * This parameter is required.
   * 
   * @example
   * PAI-LINGJUN
   */
  nodeGroupName?: string;
  /**
   * @remarks
   * The name of the RAM role to attach to the nodes. You can call the RAM API `ListRoles` operation to query the RAM roles that you have created. The trust entity of the specified role must be Intelligent Computing Lingjun.<br>**Note:** You cannot detach an existing role by clearing this parameter.<br>
   * 
   * @example
   * xianwen-test-ram-role
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The system disk configuration for the nodes.
   */
  systemDisk?: CreateNodeGroupRequestNodeGroupSystemDisk;
  /**
   * @remarks
   * The user data passed to the nodes at launch.
   * 
   * @example
   * #!/bin/bash
   * uptime
   * echo "aaaaaaa" >> /tmp/ttttt20250110141010.sh
   */
  userData?: string;
  /**
   * @remarks
   * Specifies whether to enable GPU virtualization.
   * 
   * @example
   * false
   */
  virtualGpuEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      az: 'Az',
      fileSystemMountEnabled: 'FileSystemMountEnabled',
      imageId: 'ImageId',
      keyPairName: 'KeyPairName',
      loginPassword: 'LoginPassword',
      machineType: 'MachineType',
      nodeGroupDescription: 'NodeGroupDescription',
      nodeGroupName: 'NodeGroupName',
      ramRoleName: 'RamRoleName',
      systemDisk: 'SystemDisk',
      userData: 'UserData',
      virtualGpuEnabled: 'VirtualGpuEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      az: 'string',
      fileSystemMountEnabled: 'boolean',
      imageId: 'string',
      keyPairName: 'string',
      loginPassword: 'string',
      machineType: 'string',
      nodeGroupDescription: 'string',
      nodeGroupName: 'string',
      ramRoleName: 'string',
      systemDisk: CreateNodeGroupRequestNodeGroupSystemDisk,
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

export class CreateNodeGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster to which the node group belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * i118191731740041623425
   */
  clusterId?: string;
  /**
   * @remarks
   * The configurations of the node group.
   * 
   * This parameter is required.
   */
  nodeGroup?: CreateNodeGroupRequestNodeGroup;
  /**
   * @remarks
   * The configuration of the node unit.
   * 
   * @example
   * {\\"NodeUnitId\\":\\"3c2999a8-2b95-4409-93c5-ad3985fc5c9f\\",\\"ResourceGroupId\\":\\"\\",\\"MaxNodes\\":0,\\"NodeUnitName\\":\\"asi_cn-serverless-sale_e01-lingjun-psale\\"}
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

