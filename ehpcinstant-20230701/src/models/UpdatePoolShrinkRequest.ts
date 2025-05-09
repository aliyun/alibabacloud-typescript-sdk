// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePoolShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PoolTest
   */
  poolName?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  resourceLimitsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      poolName: 'PoolName',
      priority: 'Priority',
      resourceLimitsShrink: 'ResourceLimits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolName: 'string',
      priority: 'number',
      resourceLimitsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

