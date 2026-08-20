// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePoolRequestResourceLimits extends $dara.Model {
  /**
   * @remarks
   * The maximum number of executor nodes that a user can concurrently run within a resource pool.
   * 
   * @example
   * 100
   */
  maxExecutorNum?: number;
  static names(): { [key: string]: string } {
    return {
      maxExecutorNum: 'MaxExecutorNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxExecutorNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePoolRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the resource pool.
   * - The name can be up to 15 characters in length.
   * - The name can contain digits, uppercase letters, lowercase letters, underscores (_), and periods (.).
   * 
   * This parameter is required.
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
   * - Jobs submitted to a resource pool with a higher priority value are scheduled before pending jobs in resource pools with lower priority values. The priority of a resource pool takes precedence over the priority of a job.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The resource quota limit for concurrent usage by a user within a resource pool.
   */
  resourceLimits?: UpdatePoolRequestResourceLimits;
  /**
   * @remarks
   * The scheduling policy ID.
   * 
   * @example
   * policy-xxxx
   */
  schedulingPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      poolName: 'PoolName',
      priority: 'Priority',
      resourceLimits: 'ResourceLimits',
      schedulingPolicyId: 'SchedulingPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolName: 'string',
      priority: 'number',
      resourceLimits: UpdatePoolRequestResourceLimits,
      schedulingPolicyId: 'string',
    };
  }

  validate() {
    if(this.resourceLimits && typeof (this.resourceLimits as any).validate === 'function') {
      (this.resourceLimits as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

