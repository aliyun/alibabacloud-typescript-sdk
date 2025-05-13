// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CapacityPlanResponseBodyResult } from "./CapacityPlanResponseBodyResult";


export class CapacityPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * ID of the current request.
   * 
   * @example
   * E91B7129-A669-4D9D-A743-F90A0FF1F5EF
   */
  requestId?: string;
  /**
   * @remarks
   * Returned result of the request.
   */
  result?: CapacityPlanResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CapacityPlanResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

