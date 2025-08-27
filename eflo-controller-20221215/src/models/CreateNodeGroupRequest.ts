// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNodeGroupRequestNodeGroupSystemDisk extends $dara.Model {
  /**
   * @remarks
   * Disk type. Value range:
   * 
   *  - cloud_essd: ESSD cloud disk.
   * 
   * @example
   * clou_essd
   */
  category?: string;
  /**
   * @remarks
   * When creating an ESSD cloud disk as a system disk, set the performance level of the cloud disk. Value range:
   * - PL0: Maximum random read/write IOPS per disk 10,000.
   * - PL1: Maximum random read/write IOPS per disk 50,000.
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
   * Whether file storage mounting is supported
   * 
   * @example
   * true
   */
  fileSystemMountEnabled?: boolean;
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
   * Key pair name.
   * 
   * @example
   * test-keypair
   */
  keyPairName?: string;
  /**
   * @remarks
   * Password
   * 
   * @example
   * test-LoginPassword
   */
  loginPassword?: string;
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
  /**
   * @remarks
   * Details of the node system disk configuration.
   */
  systemDisk?: CreateNodeGroupRequestNodeGroupSystemDisk;
  /**
   * @remarks
   * User-defined data
   * 
   * @example
   * #!/bin/bash
   * uptime
   * echo "aaaaaaa" >> /tmp/ttttt20250110141010.sh
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

