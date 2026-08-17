// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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
   * The number of executors that are in use in the resource pool.
   * 
   * @example
   * 100
   */
  executorUsage?: number;
  /**
   * @remarks
   * Indicates whether the resource pool is the default resource pool. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The maximum number of concurrent executors per user in the resource pool.
   * 
   * @example
   * 100
   */
  maxExecutorNum?: number;
  /**
   * @remarks
   * The name of the resource pool.
   * 
   * - The name can be up to 15 characters long.
   * 
   * - The name can contain letters, digits, underscores (_), and periods (.).
   * 
   * @example
   * PoolTest
   */
  poolName?: string;
  /**
   * @remarks
   * The priority of the resource pool.
   * 
   * - Valid values: 1 to 99. A larger value indicates a higher priority. Default value: 1.
   * 
   * - Jobs in a resource pool with a higher priority are scheduled before pending jobs in a resource pool with a lower priority. The priority of the resource pool takes precedence over the priority of a job.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The reason for the error.
   * 
   * @example
   * Fails to *** pool: ***.
   */
  reason?: string;
  /**
   * @remarks
   * The ID of the scheduling policy.
   * 
   * @example
   * policy-xxx
   */
  schedulingPolicyId?: string;
  /**
   * @remarks
   * The status of the resource pool. Valid values:
   * 
   * - `Creating`: The resource pool is being created.
   * 
   * - `Updating`: The resource pool is being updated.
   * 
   * - `Deleting`: The resource pool is being deleted.
   * 
   * - `Working`: The resource pool is active.
   * 
   * - `Deleted`: The resource pool has been deleted.
   * 
   * @example
   * Working
   */
  status?: string;
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
   * The details of the resource pool.
   */
  poolInfo?: GetPoolResponseBodyPoolInfo;
  /**
   * @remarks
   * The ID of the request.
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

