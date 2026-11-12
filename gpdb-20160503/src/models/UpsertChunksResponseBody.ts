// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpsertChunksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of tokens used for vectorization.
   * 
   * > A token is the smallest unit into which input text is divided. A token can be a word, a phrase, a punctuation mark, or a character.
   * 
   * @example
   * 100
   */
  embeddingTokens?: string;
  /**
   * @remarks
   * The job ID. You can use this ID to call the GetGraphRAGJob operation to query the job status later.
   * 
   * > This parameter is returned only when knowledge graph construction is enabled for the knowledge base.
   * 
   * @example
   * 231460f8-75dc-405e-a669-0c5204887e91
   */
  jobId?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The execution status of the API operation. Valid values:
   * - **success**: The operation is successful.
   * - **fail**: The operation fails.
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

