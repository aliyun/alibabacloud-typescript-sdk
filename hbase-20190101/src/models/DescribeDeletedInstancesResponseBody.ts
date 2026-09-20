// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeletedInstancesResponseBodyInstancesInstance extends $dara.Model {
  clusterType?: string;
  createdTime?: string;
  deleteTime?: string;
  engine?: string;
  instanceId?: string;
  instanceName?: string;
  majorVersion?: string;
  moduleStackVersion?: string;
  parentId?: string;
  regionId?: string;
  status?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      createdTime: 'CreatedTime',
      deleteTime: 'DeleteTime',
      engine: 'Engine',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      majorVersion: 'MajorVersion',
      moduleStackVersion: 'ModuleStackVersion',
      parentId: 'ParentId',
      regionId: 'RegionId',
      status: 'Status',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      createdTime: 'string',
      deleteTime: 'string',
      engine: 'string',
      instanceId: 'string',
      instanceName: 'string',
      majorVersion: 'string',
      moduleStackVersion: 'string',
      parentId: 'string',
      regionId: 'string',
      status: 'string',
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

export class DescribeDeletedInstancesResponseBodyInstances extends $dara.Model {
  instance?: DescribeDeletedInstancesResponseBodyInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeDeletedInstancesResponseBodyInstancesInstance },
    };
  }

  validate() {
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeletedInstancesResponseBody extends $dara.Model {
  instances?: DescribeDeletedInstancesResponseBodyInstances;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0CAC5702-C862-44C0-AD54-C9CE70F4B246
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: DescribeDeletedInstancesResponseBodyInstances,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.instances && typeof (this.instances as any).validate === 'function') {
      (this.instances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

