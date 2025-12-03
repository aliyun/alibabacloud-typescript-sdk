// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeletedInstancesResponseBodyInstancesInstance extends $dara.Model {
  /**
   * @example
   * cluster
   */
  clusterType?: string;
  /**
   * @example
   * 2020-11-02T07:16:07Z
   */
  createdTime?: string;
  /**
   * @example
   * 2020-11-02T07:27:24Z
   */
  deleteTime?: string;
  /**
   * @example
   * hbase
   */
  engine?: string;
  /**
   * @example
   * hb-bp10q7n2zdw12xxxx
   */
  instanceId?: string;
  /**
   * @example
   * e2e-test
   */
  instanceName?: string;
  /**
   * @example
   * 2.0
   */
  majorVersion?: string;
  /**
   * @example
   * null
   */
  moduleStackVersion?: string;
  /**
   * @example
   * null
   */
  parentId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * DELETED
   */
  status?: string;
  /**
   * @example
   * cn-hangzhou-f
   */
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
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 0CAC5702-C862-44C0-AD54-C9CE70F4B246
   */
  requestId?: string;
  /**
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

