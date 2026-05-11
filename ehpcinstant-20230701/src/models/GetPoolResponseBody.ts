// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPoolResponseBodyPoolInfo extends $dara.Model {
  /**
   * @remarks
   * The time when the resource pool is created.
   * 
   * @example
   * 2024-12-01 20:00:00
   */
  createTime?: string;
  executorUsage?: number;
  /**
   * @remarks
   * Indices whether the resource pool is the default resource pool. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  maxExecutorNum?: number;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * *   The value can be up to 15 characters in length.
   * *   It can contain digits, uppercase letters, lowercase letters, underscores (_), and dots (.).
   * 
   * @example
   * PoolTest
   */
  poolName?: string;
  /**
   * @remarks
   * The priority of the resource pool.
   * 
   * *   You can set a priority in the range of 1 to 99. The default value is 1, which is the lowest priority.
   * *   Jobs submitted to a resource pool with a higher priority level value will be scheduled before pending jobs in a resource pool with a lower priority level value, and the priority level of the resource pool takes precedence over the priority of the job.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The cause of the error.
   * 
   * @example
   * Fails to *** pool: ***.
   */
  reason?: string;
  /**
   * @example
   * policy-xxx
   */
  schedulingPolicyId?: string;
  /**
   * @remarks
   * The status of the resource pool. Valid values:
   * 
   * *   Creating: The resource pool is being created.
   * *   Updating: The resource pool is being updated.
   * *   Deleting: The resource pool is being deleted.
   * *   Working: The resource pool is working.
   * *   Deleted: The resource pool is deleted.
   * 
   * @example
   * Working
   */
  status?: string;
  /**
   * @remarks
   * The time when the resource pool was updated.
   * 
   * @example
   * 2024-12-01 20:00:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      executorUsage: 'ExecutorUsage',
      isDefault: 'IsDefault',
      maxExecutorNum: 'MaxExecutorNum',
      poolName: 'PoolName',
      priority: 'Priority',
      reason: 'Reason',
      schedulingPolicyId: 'SchedulingPolicyId',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      executorUsage: 'number',
      isDefault: 'boolean',
      maxExecutorNum: 'number',
      poolName: 'string',
      priority: 'number',
      reason: 'string',
      schedulingPolicyId: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPoolResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the resource pool.
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

