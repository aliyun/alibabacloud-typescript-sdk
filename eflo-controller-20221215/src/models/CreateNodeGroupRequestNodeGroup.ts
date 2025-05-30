// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateNodeGroupRequestNodeGroupSystemDisk } from "./CreateNodeGroupRequestNodeGroupSystemDisk";


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
   * False
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
   * The name of the key pair.
   * 
   * @example
   * test-keypair
   */
  keyPairName?: string;
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
   * SystemDisk
   */
  systemDisk?: CreateNodeGroupRequestNodeGroupSystemDisk;
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

