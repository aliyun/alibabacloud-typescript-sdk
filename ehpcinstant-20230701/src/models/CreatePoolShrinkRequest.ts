// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePoolShrinkRequest extends $dara.Model {
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
   * The resource quota limits for concurrent usage allowed for a user within a resource pool.
   */
  resourceLimitsShrink?: string;
  /**
   * @remarks
   * The scheduling policy.
   * 
   * @example
   * policy-xxx
   */
  schedulingPolicyId?: string;
  /**
   * @remarks
   * The tag information.
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      poolName: 'PoolName',
      priority: 'Priority',
      resourceLimitsShrink: 'ResourceLimits',
      schedulingPolicyId: 'SchedulingPolicyId',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolName: 'string',
      priority: 'number',
      resourceLimitsShrink: 'string',
      schedulingPolicyId: 'string',
      tagsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

