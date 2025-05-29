// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RerankResponseBodyResults } from "./RerankResponseBodyResults";


export class RerankResponseBody extends $dara.Model {
  /**
   * @remarks
   * Detailed information returned by the interface.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * Rerank results.
   */
  results?: RerankResponseBodyResults;
  /**
   * @remarks
   * API execution status, value description:
   * - **success**: Execution succeeded.
   * - **fail**: Execution failed.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * Number of consumed tokens.
   * 
   * @example
   * 100
   */
  tokens?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      results: 'Results',
      status: 'Status',
      tokens: 'Tokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      results: RerankResponseBodyResults,
      status: 'string',
      tokens: 'number',
    };
  }

  validate() {
    if(this.results && typeof (this.results as any).validate === 'function') {
      (this.results as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

