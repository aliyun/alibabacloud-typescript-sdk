// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePoolShrinkRequest extends $dara.Model {
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
  resourceLimitsShrink?: string;
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
      resourceLimitsShrink: 'ResourceLimits',
      schedulingPolicyId: 'SchedulingPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolName: 'string',
      priority: 'number',
      resourceLimitsShrink: 'string',
      schedulingPolicyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

