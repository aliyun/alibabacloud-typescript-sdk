// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyInstancesFeatureDBInfo extends $dara.Model {
  /**
   * @remarks
   * The status of the FeatureDB instance.
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstancesFeatureDBInstanceInfo extends $dara.Model {
  /**
   * @remarks
   * The status of the FeatureDB instance.
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * Information about the FeatureDB instance.
   */
  featureDBInfo?: ListInstancesResponseBodyInstancesFeatureDBInfo;
  /**
   * @remarks
   * Information about the FeatureDB instance.
   * 
   * @deprecated
   */
  featureDBInstanceInfo?: ListInstancesResponseBodyInstancesFeatureDBInstanceInfo;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * featureStore-cn-7mz2xfu****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the instance is located.
   * 
   * - cn-hangzhou
   * 
   * - cn-beijing
   * 
   * - cn-shanghai
   * 
   * - cn-shenzhen
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the instance.
   * 
   * - Initializing
   * 
   * - Running
   * 
   * - Stopped
   * 
   * @example
   * Initializing
   */
  status?: string;
  /**
   * @remarks
   * The instance type. Currently, only Basic is supported.
   * 
   * @example
   * Basic
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      featureDBInfo: 'FeatureDBInfo',
      featureDBInstanceInfo: 'FeatureDBInstanceInfo',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureDBInfo: ListInstancesResponseBodyInstancesFeatureDBInfo,
      featureDBInstanceInfo: ListInstancesResponseBodyInstancesFeatureDBInstanceInfo,
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      instanceId: 'string',
      regionId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.featureDBInfo && typeof (this.featureDBInfo as any).validate === 'function') {
      (this.featureDBInfo as any).validate();
    }
    if(this.featureDBInstanceInfo && typeof (this.featureDBInstanceInfo as any).validate === 'function') {
      (this.featureDBInstanceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of instances.
   */
  instances?: ListInstancesResponseBodyInstances[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2CA11923-2A3D-5E5A-8314-E699D2DD15DE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of instances.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstances },
      requestId: 'string',
      totalCount: 'number',
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

