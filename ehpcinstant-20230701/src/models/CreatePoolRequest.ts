// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePoolRequestResourceLimits extends $dara.Model {
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

export class CreatePoolRequestTags extends $dara.Model {
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

export class CreatePoolRequest extends $dara.Model {
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
  resourceLimits?: CreatePoolRequestResourceLimits;
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
  tags?: CreatePoolRequestTags[];
  static names(): { [key: string]: string } {
    return {
      poolName: 'PoolName',
      priority: 'Priority',
      resourceLimits: 'ResourceLimits',
      schedulingPolicyId: 'SchedulingPolicyId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolName: 'string',
      priority: 'number',
      resourceLimits: CreatePoolRequestResourceLimits,
      schedulingPolicyId: 'string',
      tags: { 'type': 'array', 'itemType': CreatePoolRequestTags },
    };
  }

  validate() {
    if(this.resourceLimits && typeof (this.resourceLimits as any).validate === 'function') {
      (this.resourceLimits as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

