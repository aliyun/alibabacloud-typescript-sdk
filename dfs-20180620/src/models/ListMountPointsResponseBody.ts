// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMountPointsResponseBodyMountPoints extends $dara.Model {
  /**
   * @example
   * acg-e3755fb0-358d-4286-9942-8d461048****
   */
  accessGroupId?: string;
  createTime?: string;
  description?: string;
  fileSystemId?: string;
  mountPointAlias?: string;
  mountPointDomain?: string;
  mountPointId?: string;
  /**
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * Inactive
   */
  status?: string;
  /**
   * @example
   * vsw-iq8fymi327krd14mt****
   */
  vSwitchId?: string;
  /**
   * @example
   * vpc-iq8hhsk3ymzv9m4wn****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupId: 'AccessGroupId',
      createTime: 'CreateTime',
      description: 'Description',
      fileSystemId: 'FileSystemId',
      mountPointAlias: 'MountPointAlias',
      mountPointDomain: 'MountPointDomain',
      mountPointId: 'MountPointId',
      networkType: 'NetworkType',
      regionId: 'RegionId',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupId: 'string',
      createTime: 'string',
      description: 'string',
      fileSystemId: 'string',
      mountPointAlias: 'string',
      mountPointDomain: 'string',
      mountPointId: 'string',
      networkType: 'string',
      regionId: 'string',
      status: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMountPointsResponseBody extends $dara.Model {
  mountPoints?: ListMountPointsResponseBodyMountPoints[];
  nextToken?: string;
  /**
   * @example
   * 55C5FFD6-BF99-41BD-9C66-FFF39189****
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      mountPoints: 'MountPoints',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPoints: { 'type': 'array', 'itemType': ListMountPointsResponseBodyMountPoints },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.mountPoints)) {
      $dara.Model.validateArray(this.mountPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

