// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateStackResponseBodyDryRunResult } from "./UpdateStackResponseBodyDryRunResult";


export class UpdateStackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The dry run result. This parameter is returned only if DryRun is set to true.
   */
  dryRunResult?: UpdateStackResponseBodyDryRunResult;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the stack.
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
      dryRunResult: UpdateStackResponseBodyDryRunResult,
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

