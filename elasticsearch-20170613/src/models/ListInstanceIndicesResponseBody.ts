// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceIndicesResponseBodyHeaders extends $dara.Model {
  /**
   * @remarks
   * The total number of managed indexes in the cloud.
   * 
   * @example
   * 15
   */
  xManagedCount?: number;
  /**
   * @remarks
   * The total size of managed indexes in the cloud. Unit: bytes.
   * 
   * @example
   * 18093942932
   */
  xManagedStorageSize?: number;
  /**
   * @remarks
   * The total number of OpenStore cold-phase indexes.
   * 
   * @example
   * 5
   */
  xOSSCount?: number;
  /**
   * @remarks
   * The total size of OpenStore cold-phase indexes for the instance. Unit: bytes.
   * 
   * @example
   * 9093942932
   */
  xOSSStorageSize?: number;
  static names(): { [key: string]: string } {
    return {
      xManagedCount: 'X-Managed-Count',
      xManagedStorageSize: 'X-Managed-StorageSize',
      xOSSCount: 'X-OSS-Count',
      xOSSStorageSize: 'X-OSS-StorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xManagedCount: 'number',
      xManagedStorageSize: 'number',
      xOSSCount: 'number',
      xOSSStorageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceIndicesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The time when the index list was queried.
   * 
   * @example
   * 2021-01-11T05:49:41.114Z
   */
  createTime?: string;
  /**
   * @remarks
   * The health status of the index. Valid values:
   * 
   * - green: Healthy.
   * 
   * - yellow: Warning.
   * 
   * - red: Abnormal.
   * 
   * @example
   * green
   */
  health?: string;
  /**
   * @remarks
   * The full lifecycle status of the index.
   * 
   * @example
   * {    "indices": {         ".ds-console-2021.08.18-000002": {             "index": ".ds-console-2021.08.18-000002",             "managed": true,             "policy": "console",             "lifecycle_date_millis": 1629277498775,             "age": "2.64h",             "phase": "hot",             "phase_time_millis": 1629277450334,             "action": "complete",             "action_time_millis": 1629278605586,             "step": "complete",             "step_time_millis": 1629278605586,             "phase_execution": {                 "policy": "console",                 "phase_definition": {                     "min_age": "0s",                     "actions": {                         "rollover": {                             "max_size": "1gb",                             "max_age": "1d",                             "max_docs": 10000                         },                         "set_priority": {                             "priority": 1000                         }                     }                 },                 "version": 1,                 "modified_date_in_millis": 1629277370953             }         }     } }
   */
  ilmExplain?: string;
  /**
   * @remarks
   * This parameter is deprecated and can be ignored.
   * 
   * @example
   * false
   */
  isManaged?: string;
  /**
   * @remarks
   * The managed status of the index. Valid values:
   * 
   * - following: Managed.
   * 
   * - closing: Being unmanaged.
   * 
   * - closed: Not managed.
   * 
   * @example
   * closing
   */
  managedStatus?: string;
  /**
   * @remarks
   * The index name.
   * 
   * @example
   * .kibana_task_manager_1
   */
  name?: string;
  /**
   * @remarks
   * The current storage lifecycle phase. Valid values:
   * 
   * - warm: Warm phase.
   * 
   * - cold: Cold phase.
   * 
   * - hot: Hot phase.
   * 
   * - delete: Delete phase.
   * 
   * > If this parameter is empty, the index is not managed by a lifecycle policy.
   * 
   * @example
   * warm
   */
  phase?: string;
  /**
   * @remarks
   * The total storage space occupied by the index. Unit: bytes.
   * 
   * @example
   * 49298589
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      health: 'health',
      ilmExplain: 'ilmExplain',
      isManaged: 'isManaged',
      managedStatus: 'managedStatus',
      name: 'name',
      phase: 'phase',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      health: 'string',
      ilmExplain: 'string',
      isManaged: 'string',
      managedStatus: 'string',
      name: 'string',
      phase: 'string',
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

export class ListInstanceIndicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response headers.
   */
  headers?: ListInstanceIndicesResponseBodyHeaders;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F99407AB-2FA9-489E-A259-40CF6DCC****
   */
  requestId?: string;
  /**
   * @remarks
   * The index list details.
   */
  result?: ListInstanceIndicesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListInstanceIndicesResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListInstanceIndicesResponseBodyResult },
    };
  }

  validate() {
    if(this.headers && typeof (this.headers as any).validate === 'function') {
      (this.headers as any).validate();
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

