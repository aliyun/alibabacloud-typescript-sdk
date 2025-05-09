// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdatePoolRequestResourceLimits } from "./UpdatePoolRequestResourceLimits";


export class UpdatePoolRequest extends $dara.Model {
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

