// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunContractResultGenerationResponseBodyOutputResult } from "./RunContractResultGenerationResponseBodyOutputResult";


export class RunContractResultGenerationResponseBodyOutput extends $dara.Model {
  result?: RunContractResultGenerationResponseBodyOutputResult;
  /**
   * @example
   * eaa56e1e-e205-4f5e-926e-5e2269ae7f68
   */
  resultTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      resultTaskId: 'resultTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: RunContractResultGenerationResponseBodyOutputResult,
      resultTaskId: 'string',
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

