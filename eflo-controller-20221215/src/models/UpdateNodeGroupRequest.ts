// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNodeGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Whether file storage mounting is supported.
   * 
   * @example
   * True
   */
  fileSystemMountEnabled?: boolean;
  /**
   * @remarks
   * The default image ID of the node group. if you do not set this parameter, the image ID will not change.
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
   * The node group name
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
   * The custom script.
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

