// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNodeGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Whether file storage mounting is supported
   * 
   * @example
   * True
   */
  fileSystemMountEnabled?: boolean;
  /**
   * @remarks
   * The default image ID of a node group remains unchanged if not explicitly set.
   * 
   * @example
   * i123847249284734
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the key pair.
   * 
   * @example
   * sc-key
   */
  keyPairName?: string;
  /**
   * @remarks
   * 节点组内机器的登录密码
   */
  loginPassword?: string;
  /**
   * @remarks
   * Node group name
   * 
   * @example
   * test-update
   */
  newNodeGroupName?: string;
  /**
   * @remarks
   * Node group ID
   * 
   * @example
   * i120021051733814190732
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * user data
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

