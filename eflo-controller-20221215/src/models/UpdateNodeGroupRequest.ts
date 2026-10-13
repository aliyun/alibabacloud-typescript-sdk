// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNodeGroupRequestSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The performance level.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  static names(): { [key: string]: string } {
    return {
      performanceLevel: 'PerformanceLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNodeGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether file storage mounting is supported.
   * 
   * @example
   * True
   */
  fileSystemMountEnabled?: boolean;
  /**
   * @remarks
   * The default image ID of the node group. If you do not specify this parameter, the image ID remains unchanged.
   * 
   * @example
   * i1232142432432
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the key pair.
   * 
   * @example
   * test
   */
  keyPairName?: string;
  /**
   * @remarks
   * The logon password for the machines in the node group.
   * 
   * @example
   * Password
   */
  loginPassword?: string;
  /**
   * @remarks
   * The name of the node group.
   * 
   * @example
   * test-update
   */
  newNodeGroupName?: string;
  /**
   * @remarks
   * The ID of the node group.
   * 
   * @example
   * i120021051733814190732
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The name of the RAM role for the node. You can call the ListRoles API operation of RAM to query the RAM roles that you have created. The trusted entity of the role must be Lingjun AI Computing Service. <warning>Submitting an empty string "" clears the RAM role of the node group.</warning>
   * 
   * @example
   * xianwen-test-ram-role
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The system cloud disk configuration.
   */
  systemDisk?: UpdateNodeGroupRequestSystemDisk;
  /**
   * @remarks
   * The custom executable shell script. It must be Base64-encoded, and the maximum size of the raw data is 16 KB.
   * 
   * @example
   * ZWNobyBoZWxsbyBlY3Mh
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemMountEnabled: 'FileSystemMountEnabled',
      imageId: 'ImageId',
      keyPairName: 'KeyPairName',
      loginPassword: 'LoginPassword',
      newNodeGroupName: 'NewNodeGroupName',
      nodeGroupId: 'NodeGroupId',
      ramRoleName: 'RamRoleName',
      systemDisk: 'SystemDisk',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemMountEnabled: 'boolean',
      imageId: 'string',
      keyPairName: 'string',
      loginPassword: 'string',
      newNodeGroupName: 'string',
      nodeGroupId: 'string',
      ramRoleName: 'string',
      systemDisk: UpdateNodeGroupRequestSystemDisk,
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

