// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNodeGroupShrinkRequest extends $dara.Model {
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
   * The default image ID of the node group. If this parameter is not specified, the image remains unchanged.
   * 
   * @example
   * i1232142432432
   */
  imageId?: string;
  /**
   * @remarks
   * The key pair name.
   * 
   * @example
   * test
   */
  keyPairName?: string;
  /**
   * @remarks
   * The logon password of the machines in the node group.
   * 
   * @example
   * 密码
   */
  loginPassword?: string;
  /**
   * @remarks
   * The node group name.
   * 
   * @example
   * test-update
   */
  newNodeGroupName?: string;
  /**
   * @remarks
   * The node group ID.
   * 
   * @example
   * i120021051733814190732
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The RAM role name of the node. You can call the RAM API ListRoles to query the node RAM roles that you have created. The trusted entity of the role must be set to Lingjun AI Computing Service.
   * Note: Clearing an existing role is not supported.
   * 
   * @example
   * xianwen-test-ram-role
   */
  ramRoleName?: string;
  systemDiskShrink?: string;
  /**
   * @remarks
   * The custom executable shell script. The script must be Base64-encoded. The maximum size of the raw data is 16 KB.
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
      systemDiskShrink: 'SystemDisk',
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
      systemDiskShrink: 'string',
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

