// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TextEmbeddingResponseBodyResults } from "./TextEmbeddingResponseBodyResults";


export class TextEmbeddingResponseBody extends $dara.Model {
  /**
   * @example
   * Successful
   */
  message?: string;
  /**
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  results?: TextEmbeddingResponseBodyResults;
  /**
   * @example
   * success
   */
  status?: string;
  /**
   * @example
   * 1000
   */
  textTokens?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      results: 'Results',
      status: 'Status',
      textTokens: 'TextTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      results: TextEmbeddingResponseBodyResults,
      status: 'string',
      textTokens: 'number',
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

