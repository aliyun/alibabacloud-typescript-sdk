// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCreatePrePaidInstanceResultResponseBodyInstanceCreateResult } from "./DescribeCreatePrePaidInstanceResultResponseBodyInstanceCreateResult";


export class DescribeCreatePrePaidInstanceResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * Returned results of creating an instance.
   */
  instanceCreateResult?: DescribeCreatePrePaidInstanceResultResponseBodyInstanceCreateResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AAE90880-4970-4D81-A534-A6C0F3631F74
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceCreateResult: 'InstanceCreateResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCreateResult: DescribeCreatePrePaidInstanceResultResponseBodyInstanceCreateResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceCreateResult && typeof (this.instanceCreateResult as any).validate === 'function') {
      (this.instanceCreateResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

