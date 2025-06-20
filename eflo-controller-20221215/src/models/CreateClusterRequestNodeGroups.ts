// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateClusterRequestNodeGroupsNodes } from "./CreateClusterRequestNodeGroupsNodes";
import { CreateClusterRequestNodeGroupsSystemDisk } from "./CreateClusterRequestNodeGroupsSystemDisk";


export class CreateClusterRequestNodeGroups extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to support file system mounting.
   * 
   * @example
   * False
   */
  fileSystemMountEnabled?: boolean;
  /**
   * @remarks
   * The system image ID.
   * 
   * @example
   * i190297201634099844192
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the AccessKey pair.
   * 
   * @example
   * sc-key
   */
  keyPairName?: string;
  loginPassword?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * efg1.nvga1
   */
  machineType?: string;
  /**
   * @remarks
   * The node group description.
   * 
   * @example
   * Node group description
   */
  nodeGroupDescription?: string;
  /**
   * @remarks
   * The node group name.
   * 
   * @example
   * emr-default
   */
  nodeGroupName?: string;
  /**
   * @remarks
   * The nodes.
   */
  nodes?: CreateClusterRequestNodeGroupsNodes[];
  /**
   * @remarks
   * The system disk information.
   */
  systemDisk?: CreateClusterRequestNodeGroupsSystemDisk;
  /**
   * @remarks
   * The user data of the instance. The user data must be Base64-encoded. The raw data can be up to 16 KB in size.
   * 
   * @example
   * ZWNobyBoZWxsbyBlY3Mh
   */
  userData?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemMountEnabled: 'FileSystemMountEnabled',
      imageId: 'ImageId',
      keyPairName: 'KeyPairName',
      loginPassword: 'LoginPassword',
      machineType: 'MachineType',
      nodeGroupDescription: 'NodeGroupDescription',
      nodeGroupName: 'NodeGroupName',
      nodes: 'Nodes',
      systemDisk: 'SystemDisk',
      userData: 'UserData',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemMountEnabled: 'boolean',
      imageId: 'string',
      keyPairName: 'string',
      loginPassword: 'string',
      machineType: 'string',
      nodeGroupDescription: 'string',
      nodeGroupName: 'string',
      nodes: { 'type': 'array', 'itemType': CreateClusterRequestNodeGroupsNodes },
      systemDisk: CreateClusterRequestNodeGroupsSystemDisk,
      userData: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

