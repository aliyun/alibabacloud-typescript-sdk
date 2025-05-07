// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PreCheckCreateOrderForDeleteDBNodesResponseBodyFailures } from "./PreCheckCreateOrderForDeleteDbnodesResponseBodyFailures";


export class PreCheckCreateOrderForDeleteDBNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the failed order.
   */
  failures?: PreCheckCreateOrderForDeleteDBNodesResponseBodyFailures;
  /**
   * @remarks
   * The precheck result.
   * 
   * @example
   * True
   */
  preCheckResult?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9B415BC6-FE84-5323-A255-42CF330DB99C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      failures: 'Failures',
      preCheckResult: 'PreCheckResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failures: PreCheckCreateOrderForDeleteDBNodesResponseBodyFailures,
      preCheckResult: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    if(this.failures && typeof (this.failures as any).validate === 'function') {
      (this.failures as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

