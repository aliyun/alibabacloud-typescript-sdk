// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePoolRequestResourceLimits extends $dara.Model {
  /**
   * @remarks
   * The maximum number of concurrent execution nodes in a resource pool.
   * 
   * @example
   * 2000
   */
  maxExectorNum?: number;
  static names(): { [key: string]: string } {
    return {
      maxExectorNum: 'MaxExectorNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxExectorNum: 'number',
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
   * *   The value can be up to 15 characters in length.
   * *   It can contain digits, uppercase letters, lowercase letters, underscores (_), and dots (.).
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
   * *   You can set a priority in the range of 1 to 99. The default value is 1, which is the lowest priority.
   * *   Jobs submitted to a resource pool with a higher priority level value will be scheduled before pending jobs in a resource pool with a lower priority level value, and the priority level of the resource pool takes precedence over the priority of the job.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The quota of resources that users are allowed to concurrently use in a resource pool.
   */
  resourceLimits?: UpdatePoolRequestResourceLimits;
  static names(): { [key: string]: string } {
    return {
      poolName: 'PoolName',
      priority: 'Priority',
      resourceLimits: 'ResourceLimits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolName: 'string',
      priority: 'number',
      resourceLimits: UpdatePoolRequestResourceLimits,
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

