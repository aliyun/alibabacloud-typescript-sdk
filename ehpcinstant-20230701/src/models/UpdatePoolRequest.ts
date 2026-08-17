// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePoolRequestResourceLimits extends $dara.Model {
  /**
   * @remarks
   * The maximum number of executor nodes that a user can run concurrently in a resource pool.
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
   * 
   * - The name can be up to 15 characters long.
   * 
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
   * - Valid values: 1 to 99. The default value is 1, which specifies the lowest priority.
   * 
   * - Jobs in a higher-priority resource pool are scheduled before pending jobs in lower-priority pools. A resource pool\\"s priority overrides a job\\"s priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The limits on the resources that a user can use concurrently in the resource pool.
   */
  resourceLimits?: UpdatePoolRequestResourceLimits;
  /**
   * @remarks
   * The ID of the scheduling policy.
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

