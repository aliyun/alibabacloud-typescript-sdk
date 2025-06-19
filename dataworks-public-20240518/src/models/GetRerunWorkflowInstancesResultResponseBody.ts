// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRerunWorkflowInstancesResultResponseBodyResult } from "./GetRerunWorkflowInstancesResultResponseBodyResult";


export class GetRerunWorkflowInstancesResultResponseBody extends $dara.Model {
  /**
   * @example
   * 22C97E95-F023-56B5-8852-B1A77A17XXXX
   */
  requestId?: string;
  result?: GetRerunWorkflowInstancesResultResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetRerunWorkflowInstancesResultResponseBodyResult,
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

