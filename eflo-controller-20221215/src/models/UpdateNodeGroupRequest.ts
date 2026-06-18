// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNodeGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to mount file storage on nodes.
   * 
   * @example
   * True
   */
  fileSystemMountEnabled?: boolean;
  /**
   * @remarks
   * The ID of the image for the node group. If you omit this parameter, the image remains unchanged.
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
   * The login password for the nodes in the node group.
   * 
   * @example
   * Password
   */
  loginPassword?: string;
  /**
   * @remarks
   * The new name of the node group.
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
   * To query the RAM roles that you have created, call the ListRoles operation in the RAM API. The trust policy for the role must specify Intelligent Computing Lingjun as the trusted entity. Note: You cannot remove a role by clearing this parameter.
   * 
   * @example
   * xianwen-test-ram-role
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The user data. This script runs at node startup.
   * 
   * @example
   * #!/bin/bash
   * uptime
   * echo "aaaaaaa" >> /tmp/ttttt20250110141010.sh
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

