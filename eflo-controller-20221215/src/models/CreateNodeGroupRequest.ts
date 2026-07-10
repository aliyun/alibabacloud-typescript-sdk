// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNodeGroupRequestNodeGroupSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The cloud disk type. Valid values:
   * 
   *  - cloud_essd: Enterprise SSD (ESSD) cloud disk.
   * 
   * @example
   * clou_essd
   */
  category?: string;
  /**
   * @remarks
   * The performance level (PL) of the ESSD cloud disk used as the system disk. Valid values:
   * - PL0: a maximum of 10,000 random read/write IOPS per cloud disk.
   * - PL1: a maximum of 50,000 random read/write IOPS per cloud disk.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The disk size. Unit: GB.
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
   * The zone.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu-b
   */
  az?: string;
  /**
   * @remarks
   * Specifies whether file storage mounting is supported.
   * 
   * @example
   * false
   */
  fileSystemMountEnabled?: boolean;
  /**
   * @remarks
   * The image ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i191887641687336652616
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
   * test-LoginPassword
   */
  loginPassword?: string;
  /**
   * @remarks
   * The machine type.
   * 
   * This parameter is required.
   * 
   * @example
   * mock-machine-type3
   */
  machineType?: string;
  /**
   * @remarks
   * The node group description.
   * 
   * @example
   * 节点分组描述
   */
  nodeGroupDescription?: string;
  /**
   * @remarks
   * The node group name.
   * 
   * This parameter is required.
   * 
   * @example
   * PAI-LINGJUN
   */
  nodeGroupName?: string;
  /**
   * @remarks
   * The RAM role name of the node. You can call the RAM API ListRoles to query the RAM roles you have created. The trusted entity of the role must be set to Lingjun AI Computing Service.
   * > Note: Clearing an existing role is not currently supported.
   * 
   * @example
   * xianwen-test-ram-role
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The system disk configuration of the node.
   */
  systemDisk?: CreateNodeGroupRequestNodeGroupSystemDisk;
  /**
   * @remarks
   * A custom executable shell script that must be Base64-encoded. The maximum size of the raw data is 16 KB.
   * 
   * @example
   * ZWNobyBoZWxsbyBlY3Mh
   */
  userData?: string;
  /**
   * @remarks
   * Specifies whether GPU virtualization splitting is enabled.
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
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i118191731740041623425
   */
  clusterId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * This parameter is required.
   */
  nodeGroup?: CreateNodeGroupRequestNodeGroup;
  /**
   * @remarks
   * The node information.
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

