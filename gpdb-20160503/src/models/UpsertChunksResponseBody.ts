// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpsertChunksResponseBody extends $dara.Model {
  /**
   * @remarks
   * Number of tokens used during vectorization.
   * 
   * > A token refers to the smallest unit into which the input text is divided. A token can be a word, a phrase, a punctuation mark, a character, etc.
   * 
   * @example
   * 100
   */
  embeddingTokens?: string;
  jobId?: string;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * Successful
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
   * API execution status, with the following values:
   * - **success**: Execution succeeded.
   * - **fail**: Execution failed.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      embeddingTokens: 'EmbeddingTokens',
      jobId: 'JobId',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embeddingTokens: 'string',
      jobId: 'string',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

