// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ContinueCreateStackResponseBodyDryRunResult } from "./ContinueCreateStackResponseBodyDryRunResult";


export class ContinueCreateStackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The validation result.
   */
  dryRunResult?: ContinueCreateStackResponseBodyDryRunResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6
   */
  requestId?: string;
  /**
   * @remarks
   * The stack ID.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRunResult: 'DryRunResult',
      requestId: 'RequestId',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRunResult: ContinueCreateStackResponseBodyDryRunResult,
      requestId: 'string',
      stackId: 'string',
    };
  }

  validate() {
    if(this.dryRunResult && typeof (this.dryRunResult as any).validate === 'function') {
      (this.dryRunResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

