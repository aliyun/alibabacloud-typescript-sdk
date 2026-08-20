// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPoolResponseBodyPoolInfoTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPoolResponseBodyPoolInfo extends $dara.Model {
  /**
   * @remarks
   * The time when the resource pool was created.
   * 
   * @example
   * 2024-12-01 20:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the resource pool creator.
   * 
   * @example
   * 200428053788xxxx
   */
  creator?: string;
  /**
   * @remarks
   * The number of executor nodes that are currently running in the resource pool.
   * 
   * @example
   * 100
   */
  executorUsage?: number;
  /**
   * @remarks
   * Indicates whether the resource pool is the default resource pool. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The maximum number of executor nodes that can run concurrently in the resource pool.
   * 
   * @example
   * 100
   */
  maxExecutorNum?: number;
  /**
   * @remarks
   * The resource pool name.
   * - The name can be up to 15 characters in length.
   * - The name can contain digits, uppercase letters, lowercase letters, underscores (_), and periods (.).
   * 
   * @example
   * PoolTest
   */
  poolName?: string;
  /**
   * @remarks
   * The priority of the resource pool.
   * 
   * - Valid values: 1 to 99. Default value: 1, which indicates the lowest priority.
   * - Jobs submitted to a resource pool with a higher priority value are scheduled before pending jobs in a resource pool with a lower priority value. The resource pool priority takes precedence over the job priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The error reason.
   * 
   * @example
   * Fails to *** pool: ***.
   */
  reason?: string;
  /**
   * @remarks
   * The scheduling policy ID.
   * 
   * @example
   * policy-xxx
   */
  schedulingPolicyId?: string;
  /**
   * @remarks
   * The resource pool status. Valid values:
   * 
   * - Creating: The resource pool is being created.
   * - Updating: The resource pool is being updated.
   * - Deleting: The resource pool is being deleted.
   * - Working: The resource pool is running.
   * - Deleted: The resource pool has been deleted.
   * 
   * @example
   * Working
   */
  status?: string;
  /**
   * @remarks
   * The tag information.
   */
  tags?: GetPoolResponseBodyPoolInfoTags[];
  /**
   * @remarks
   * The time when the resource pool was last updated.
   * 
   * @example
   * 2024-12-01 20:00:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creator: 'Creator',
      executorUsage: 'ExecutorUsage',
      isDefault: 'IsDefault',
      maxExecutorNum: 'MaxExecutorNum',
      poolName: 'PoolName',
      priority: 'Priority',
      reason: 'Reason',
      schedulingPolicyId: 'SchedulingPolicyId',
      status: 'Status',
      tags: 'Tags',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      creator: 'string',
      executorUsage: 'number',
      isDefault: 'boolean',
      maxExecutorNum: 'number',
      poolName: 'string',
      priority: 'number',
      reason: 'string',
      schedulingPolicyId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetPoolResponseBodyPoolInfoTags },
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPoolResponseBody extends $dara.Model {
  /**
   * @remarks
   * The resource pool information.
   */
  poolInfo?: GetPoolResponseBodyPoolInfo;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      poolInfo: 'PoolInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolInfo: GetPoolResponseBodyPoolInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.poolInfo && typeof (this.poolInfo as any).validate === 'function') {
      (this.poolInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

