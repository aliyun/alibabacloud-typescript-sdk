// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalDistributeCacheResponseBodyGlobalDistributeCachesSubInstances extends $dara.Model {
  /**
   * @remarks
   * The distributed instance ID.
   * 
   * @example
   * gr-bp14rkqrhac****
   */
  globalInstanceId?: string;
  /**
   * @remarks
   * The instance type of the child instance. For more information, see:
   * * [Memory-optimized Standard Edition instance types](https://help.aliyun.com/document_detail/145228.html).
   * * [Memory-optimized Cluster Edition instance types](https://help.aliyun.com/document_detail/150458.html).
   * * [Memory-optimized read/write splitting instance types](https://help.aliyun.com/document_detail/150459.html).
   * 
   * @example
   * redis.amber.logic.sharding.2g.2db.0rodb.6proxy.multithread
   */
  instanceClass?: string;
  /**
   * @remarks
   * The child instance ID.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceID?: string;
  /**
   * @remarks
   * The instance status of the child instance. Valid values:
   * 
   * * **Normal**: Normal.
   * * **Creating**: Being created.
   * * **Changing**: Being modified.
   * * **Inactive**: Disabled.
   * * **Flushing**: Being purged.
   * * **Released**: Released.
   * * **Transforming**: Being transformed.
   * * **Unavailable**: Service stopped.
   * * **Error**: Failed to create.
   * * **Migrating**: Being migrated.
   * * **BackupRecovering**: Being restored from a backup.
   * * **MinorVersionUpgrading**: Minor version being upgraded.
   * * **NetworkModifying**: Network being modified.
   * * **SSLModifying**: SSL being modified.
   * * **MajorVersionUpgrading**: Major engine version upgrade in progress. The instance can be accessed normally.
   * 
   * > For more information about instance status and details, see [Instance states and impacts](https://help.aliyun.com/document_detail/200740.html).
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
   * The distributed instance ID.
   * 
   * @example
   * gr-bp14rkqrhac****
   */
  globalInstanceId?: string;
  /**
   * @remarks
   * The instance status of the distributed instance. Valid values:
   * * **Normal**: Running.
   * * **Changing**: Being modified.
   * * **Creating**: Being created.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The details of the child instances.
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
   * The details of the distributed instance.
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
   * The number of entries that can be displayed per page.
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
   * The total number of records.
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

