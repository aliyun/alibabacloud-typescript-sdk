// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalDistributeCacheResponseBodyGlobalDistributeCachesSubInstances extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the distributed instance.
   * 
   * @example
   * gr-bp14rkqrhac****
   */
  globalInstanceId?: string;
  /**
   * @remarks
   * The instance type of the child instance. For more information, see:
   * * [Standard memory-optimized instance types](https://help.aliyun.com/document_detail/145228.html).
   * * [Cluster memory-optimized instance types](https://help.aliyun.com/document_detail/150458.html).
   * * [Read/write splitting memory-optimized instance types](https://help.aliyun.com/document_detail/150459.html).
   * 
   * @example
   * redis.amber.logic.sharding.2g.2db.0rodb.6proxy.multithread
   */
  instanceClass?: string;
  /**
   * @remarks
   * The instance ID of the child instance.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceID?: string;
  /**
   * @remarks
   * The instance status of the child instance. Valid values:
   * 
   * * **Normal**: The instance is in a normal state.
   * * **Creating**: The instance is being created.
   * * **Changing**: The instance is being modified.
   * * **Inactive**: The instance is disabled.
   * * **Flushing**: The instance is being purged.
   * * **Released**: The instance is released.
   * * **Transforming**: The instance is being transformed.
   * * **Unavailable**: The service is stopped.
   * * **Error**: The instance failed to be created.
   * * **Migrating**: The instance is being migrated.
   * * **BackupRecovering**: The instance is recovering from a backup.
   * * **MinorVersionUpgrading**: The minor version of the instance is being upgraded.
   * * **NetworkModifying**: The network of the instance is being modified.
   * * **SSLModifying**: The SSL certificate of the instance is being modified.
   * * **MajorVersionUpgrading**: A major engine version upgrade is in progress. The instance remains accessible.
   * 
   * > For more information about instance statuses and their impacts, see [Instance statuses and impacts](https://help.aliyun.com/document_detail/200740.html).
   * 
   * @example
   * Normal
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      globalInstanceId: 'GlobalInstanceId',
      instanceClass: 'InstanceClass',
      instanceID: 'InstanceID',
      instanceStatus: 'InstanceStatus',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalInstanceId: 'string',
      instanceClass: 'string',
      instanceID: 'string',
      instanceStatus: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDistributeCacheResponseBodyGlobalDistributeCaches extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the distributed instance.
   * 
   * @example
   * gr-bp14rkqrhac****
   */
  globalInstanceId?: string;
  /**
   * @remarks
   * The instance status of the distributed instance. Valid values:
   * * **Normal**: The instance is running.
   * * **Changing**: The instance is being modified.
   * * **Creating**: The instance is being created.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The list of child instances.
   */
  subInstances?: DescribeGlobalDistributeCacheResponseBodyGlobalDistributeCachesSubInstances[];
  static names(): { [key: string]: string } {
    return {
      globalInstanceId: 'GlobalInstanceId',
      status: 'Status',
      subInstances: 'SubInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalInstanceId: 'string',
      status: 'string',
      subInstances: { 'type': 'array', 'itemType': DescribeGlobalDistributeCacheResponseBodyGlobalDistributeCachesSubInstances },
    };
  }

  validate() {
    if(Array.isArray(this.subInstances)) {
      $dara.Model.validateArray(this.subInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDistributeCacheResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of distributed instances.
   */
  globalDistributeCaches?: DescribeGlobalDistributeCacheResponseBodyGlobalDistributeCaches[];
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
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F3F44BE3-5419-4B61-9BAC-E66E295A****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      globalDistributeCaches: 'GlobalDistributeCaches',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalDistributeCaches: { 'type': 'array', 'itemType': DescribeGlobalDistributeCacheResponseBodyGlobalDistributeCaches },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.globalDistributeCaches)) {
      $dara.Model.validateArray(this.globalDistributeCaches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

