// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodeGroupsResponseBodyGroups extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * i113952461729854708648
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * wzq-exclusivelite-71
   */
  clusterName?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-02-27T13:16:31.599
   */
  createTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * created by ga2_prepare
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether file storage mounting is supported.
   * 
   * @example
   * False
   */
  fileSystemMountEnabled?: boolean;
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * 238276221
   */
  groupId?: string;
  /**
   * @remarks
   * The group name.
   * 
   * @example
   * backend-group
   */
  groupName?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * i194015071707321240258
   */
  imageId?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * CentOS_7.9_x86_64_FULL_20221110
   */
  imageName?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * efg1.nvga1n
   */
  machineType?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 2
   */
  nodeCount?: number;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2023-09-22T00:03:05.114
   */
  updateTime?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-shenzhen-c
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      createTime: 'CreateTime',
      description: 'Description',
      fileSystemMountEnabled: 'FileSystemMountEnabled',
      groupId: 'GroupId',
      groupName: 'GroupName',
      imageId: 'ImageId',
      imageName: 'ImageName',
      machineType: 'MachineType',
      nodeCount: 'NodeCount',
      updateTime: 'UpdateTime',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      createTime: 'string',
      description: 'string',
      fileSystemMountEnabled: 'boolean',
      groupId: 'string',
      groupName: 'string',
      imageId: 'string',
      imageName: 'string',
      machineType: 'string',
      nodeCount: 'number',
      updateTime: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

