// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVscMountPointsResponseBodyMountPointsInstancesVscs extends $dara.Model {
  /**
   * @remarks
   * VSC ID
   * 
   * @example
   * vsc-asjodjoio****
   */
  vscId?: string;
  vscName?: string;
  /**
   * @remarks
   * The mount status of the VSC. Valid values:
   * - NORMAL: The mount operation succeeded.
   * - CREATING: The mount operation is in progress.
   * - INVALID: The mount operation failed.
   * 
   * @example
   * NORMAL
   */
  vscStatus?: string;
  /**
   * @remarks
   * The VSC type. Valid values:
   * - Primary (default): The reserved default VSC on the ECS instance.
   * - Secondary: The reusable VSC on the ECS instance.
   * 
   * @example
   * Primary
   */
  vscType?: string;
  static names(): { [key: string]: string } {
    return {
      vscId: 'VscId',
      vscName: 'VscName',
      vscStatus: 'VscStatus',
      vscType: 'VscType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vscId: 'string',
      vscName: 'string',
      vscStatus: 'string',
      vscType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVscMountPointsResponseBodyMountPointsInstances extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the ECS instance on which the HDFS file system is mounted.
   * 
   * @example
   * i-bp1g6zv0ce8oghu7****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance status of the ECS instance on which the HDFS file system is mounted. Valid values:
   * - NORMAL: The mount operation succeeded.
   * - CREATING: The mount operation is in progress.
   * - INVALID: The mount operation failed.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The list of VSCs on which the HDFS file system is mounted.
   */
  vscs?: DescribeVscMountPointsResponseBodyMountPointsInstancesVscs[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      status: 'Status',
      vscs: 'Vscs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      status: 'string',
      vscs: { 'type': 'array', 'itemType': DescribeVscMountPointsResponseBodyMountPointsInstancesVscs },
    };
  }

  validate() {
    if(Array.isArray(this.vscs)) {
      $dara.Model.validateArray(this.vscs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVscMountPointsResponseBodyMountPoints extends $dara.Model {
  /**
   * @remarks
   * The description of the mount point.
   * 
   * @example
   * The HDFS file system mounted on the internal instance
   */
  description?: string;
  /**
   * @remarks
   * The number of ECS instances to which the HDFS file system is to be mounted.
   * 
   * @example
   * 1
   */
  instanceTotalCount?: number;
  /**
   * @remarks
   * The ECS instances on which the HDFS file system is mounted.
   */
  instances?: DescribeVscMountPointsResponseBodyMountPointsInstances[];
  /**
   * @remarks
   * The alias of the mount point.
   * 
   * @example
   * hdfs1
   */
  mountPointAlias?: string;
  /**
   * @remarks
   * The mount point ID.
   * 
   * @example
   * f-037cb49e1d-c****.dfs.aliyuncs.com
   */
  mountPointId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceTotalCount: 'InstanceTotalCount',
      instances: 'Instances',
      mountPointAlias: 'MountPointAlias',
      mountPointId: 'MountPointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceTotalCount: 'number',
      instances: { 'type': 'array', 'itemType': DescribeVscMountPointsResponseBodyMountPointsInstances },
      mountPointAlias: 'string',
      mountPointId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVscMountPointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The mount point information.
   */
  mountPoints?: DescribeVscMountPointsResponseBodyMountPoints[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 55C5FFD6-BF99-41BD-9C66-FFF39189****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      mountPoints: 'MountPoints',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPoints: { 'type': 'array', 'itemType': DescribeVscMountPointsResponseBodyMountPoints },
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

