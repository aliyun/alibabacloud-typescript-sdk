// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVscMountPointsResponseBodyMountPointsInstancesVscs extends $dara.Model {
  vscId?: string;
  vscName?: string;
  vscStatus?: string;
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
   * @example
   * ["ecs-instance1", "ecs-instance2"]
   */
  instanceId?: string;
  /**
   * @example
   * AVAILABLE
   */
  status?: string;
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
  description?: string;
  /**
   * @example
   * 1
   */
  instanceTotalCount?: number;
  instances?: DescribeVscMountPointsResponseBodyMountPointsInstances[];
  /**
   * @example
   * hdfs1
   */
  mountPointAlias?: string;
  /**
   * @example
   * 037cb49e1d-c***5
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
  mountPoints?: DescribeVscMountPointsResponseBodyMountPoints[];
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

