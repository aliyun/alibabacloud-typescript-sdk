// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartDebugExecutionResponseBody extends $dara.Model {
  /**
   * @example
   * exec-xxx
   */
  executionId?: string;
  /**
   * @example
   * A5320F1D-92D9-44BB-A416-5FC525ED6D57
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      executionId: 'ExecutionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

