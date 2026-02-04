// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalDistributeCacheResponseBodyGlobalDistributeCachesSubInstances extends $dara.Model {
  /**
   * @remarks
   * The ID of the distributed instance.
   * 
   * @example
   * gr-bp14rkqrhac****
   */
  globalInstanceId?: string;
  /**
   * @remarks
   * The instance type of the child instance. For more information, see the following topics:
   * 
   * *   [Standard DRAM-based instances](https://help.aliyun.com/document_detail/145228.html)
   * *   [Cluster DRAM-based instances](https://help.aliyun.com/document_detail/150458.html)
   * *   [Read/write splitting DRAM-based instances](https://help.aliyun.com/document_detail/150459.html)
   * 
   * @example
   * redis.amber.logic.sharding.2g.2db.0rodb.6proxy.multithread
   */
  instanceClass?: string;
  /**
   * @remarks
   * The ID of the child instance.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceID?: string;
  /**
   * @remarks
   * The state of the child instance. Valid values:
   * 
   * *   **Normal**: The instance is normal.
   * *   **Creating**: The instance is being created.
   * *   **Changing**: The configurations of the instance are being changed.
   * *   **Inactive**: The instance is disabled.
   * *   **Flushing**: The instance is being released.
   * *   **Released**: The instance is released.
   * *   **Transforming**: The billing method of the instance is changing.
   * *   **Unavailable**: The instance is suspended.
   * *   **Error**: The instance failed to be created.
   * *   **Migrating**: The instance is being migrated.
   * *   **BackupRecovering**: The instance is being restored from a backup.
   * *   **MinorVersionUpgrading**: The minor version of the instance is being updated.
   * *   **NetworkModifying**: The network type of the instance is being changed.
   * *   **SSLModifying**: The SSL certificate of the instance is being changed.
   * *   **MajorVersionUpgrading**: The major version of the instance is being upgraded. The instance remains available during the upgrade.
   * 
   * >  For more information about instance states, see [Instance states and impacts](https://help.aliyun.com/document_detail/200740.html).
   * 
   * @example
   * Normal
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The ID of the region.
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
   * The ID of the distributed instance.
   * 
   * @example
   * gr-bp14rkqrhac****
   */
  globalInstanceId?: string;
  /**
   * @remarks
   * The state of the distributed instance. Valid values:
   * 
   * *   **Normal**: The instance is normal.
   * *   **Changing**: The configurations of the instance are being changed.
   * *   **Creating**: The instance is being created.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * Details of the child instances.
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
   * Details of the distributed instance.
   */
  globalDistributeCaches?: DescribeGlobalDistributeCacheResponseBodyGlobalDistributeCaches[];
  /**
   * @remarks
   * The page number of the returned page.
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
   * The ID of the request.
   * 
   * @example
   * F3F44BE3-5419-4B61-9BAC-E66E295A****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
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

