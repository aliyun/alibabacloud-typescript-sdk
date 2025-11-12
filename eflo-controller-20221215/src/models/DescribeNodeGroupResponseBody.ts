// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNodeGroupResponseBodySystemDisk extends $dara.Model {
  category?: string;
  performanceLevel?: string;
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

export class DescribeNodeGroupResponseBody extends $dara.Model {
  az?: string;
  clusterId?: string;
  clusterName?: string;
  createTime?: string;
  fileSystemMountEnabled?: boolean;
  imageId?: string;
  imageName?: string;
  keyPairName?: string;
  loginType?: string;
  machineType?: string;
  nodeCount?: string;
  nodeGroupDescription?: string;
  nodeGroupId?: string;
  nodeGroupName?: string;
  /**
   * @remarks
   * Id of the request
   */
  requestId?: string;
  systemDisk?: DescribeNodeGroupResponseBodySystemDisk;
  updateTime?: string;
  userData?: string;
  virtualGpuEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      az: 'Az',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      createTime: 'CreateTime',
      fileSystemMountEnabled: 'FileSystemMountEnabled',
      imageId: 'ImageId',
      imageName: 'ImageName',
      keyPairName: 'KeyPairName',
      loginType: 'LoginType',
      machineType: 'MachineType',
      nodeCount: 'NodeCount',
      nodeGroupDescription: 'NodeGroupDescription',
      nodeGroupId: 'NodeGroupId',
      nodeGroupName: 'NodeGroupName',
      requestId: 'RequestId',
      systemDisk: 'SystemDisk',
      updateTime: 'UpdateTime',
      userData: 'UserData',
      virtualGpuEnabled: 'VirtualGpuEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      az: 'string',
      clusterId: 'string',
      clusterName: 'string',
      createTime: 'string',
      fileSystemMountEnabled: 'boolean',
      imageId: 'string',
      imageName: 'string',
      keyPairName: 'string',
      loginType: 'string',
      machineType: 'string',
      nodeCount: 'string',
      nodeGroupDescription: 'string',
      nodeGroupId: 'string',
      nodeGroupName: 'string',
      requestId: 'string',
      systemDisk: DescribeNodeGroupResponseBodySystemDisk,
      updateTime: 'string',
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

