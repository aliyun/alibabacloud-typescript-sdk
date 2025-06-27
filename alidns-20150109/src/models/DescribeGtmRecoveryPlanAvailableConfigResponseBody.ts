// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstances } from "./DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstances";


export class DescribeGtmRecoveryPlanAvailableConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instances.
   */
  instances?: DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstances;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F8F8EF50-8B7F-4702-B294-97170A423403
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstances,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instances && typeof (this.instances as any).validate === 'function') {
      (this.instances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

