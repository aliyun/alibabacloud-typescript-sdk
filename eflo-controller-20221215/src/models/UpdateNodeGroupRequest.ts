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
   * The default image ID of the node group. If not set, it will not change.
   * 
   * @example
   * i1232142432432
   */
  imageId?: string;
  /**
   * @remarks
   * Key pair name.
   * 
   * @example
   * test
   */
  keyPairName?: string;
  /**
   * @remarks
   * Login password for machines within the node group
   * 
   * @example
   * LoginPassword
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
   * User-defined script
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

