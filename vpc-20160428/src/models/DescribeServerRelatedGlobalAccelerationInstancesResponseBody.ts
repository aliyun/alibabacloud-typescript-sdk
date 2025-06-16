// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeServerRelatedGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstances } from "./DescribeServerRelatedGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstances";


export class DescribeServerRelatedGlobalAccelerationInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of GA instances.
   */
  globalAccelerationInstances?: DescribeServerRelatedGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstances;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A8252014-D8DE-4D85-AF35-AFEXXXXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      globalAccelerationInstances: 'GlobalAccelerationInstances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalAccelerationInstances: DescribeServerRelatedGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstances,
      requestId: 'string',
    };
  }

  validate() {
    if(this.globalAccelerationInstances && typeof (this.globalAccelerationInstances as any).validate === 'function') {
      (this.globalAccelerationInstances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

