// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGraphRAGJobResponseBodyJob extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the operation is complete.
   * 
   * @example
   * false
   */
  completed?: boolean;
  /**
   * @remarks
   * The job creation time.
   * 
   * @example
   * 2024-01-08 16:52:04.864664
   */
  createTime?: string;
  /**
   * @remarks
   * The error message that is returned when the current operation is abnormal or fails.
   * 
   * @example
   * Failed to connect database.
   */
  error?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 231460f8-75dc-405e-a669-0c5204887e91
   */
  id?: string;
  /**
   * @remarks
   * The progress of the document upload job. Unit: %. A value of 100 indicates that the job is complete.
   * 
   * @example
   * 20
   */
  progress?: number;
  /**
   * @remarks
   * The state of the job. Valid values:
   * 
   * *   **Success**
   * *   **Failed** (See the Error parameter for failure reasons.)
   * *   **Running**
   * *   **Pending**
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The job last updated time.
   * 
   * @example
   * 2024-01-08 16:53:04.864664
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      completed: 'Completed',
      createTime: 'CreateTime',
      error: 'Error',
      id: 'Id',
      progress: 'Progress',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completed: 'boolean',
      createTime: 'string',
      error: 'string',
      id: 'string',
      progress: 'number',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGraphRAGJobResponseBodyUsage extends $dara.Model {
  /**
   * @remarks
   * The number of tokens that are consumed during vectorization.
   * 
   * > A token is the minimum unit for splitting text. A token can be a word, phrase, punctuation, or character.
   * 
   * @example
   * 475
   */
  embeddingTokens?: number;
  /**
   * @remarks
   * The number of tokens used by the large model input.
   * 
   * @example
   * 600
   */
  LLMInputTokens?: number;
  /**
   * @remarks
   * The number of tokens used for large model output.
   * 
   * @example
   * 125
   */
  LLMOutputTokens?: number;
  static names(): { [key: string]: string } {
    return {
      embeddingTokens: 'EmbeddingTokens',
      LLMInputTokens: 'LLMInputTokens',
      LLMOutputTokens: 'LLMOutputTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embeddingTokens: 'number',
      LLMInputTokens: 'number',
      LLMOutputTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGraphRAGJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the task for building a knowledge graph.
   */
  job?: GetGraphRAGJobResponseBodyJob;
  /**
   * @remarks
   * The additional information that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the operation. Valid values:
   * 
   * *   **success**
   * *   **fail**
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The number of tokens that are consumed by document understanding or embedding.
   */
  usage?: GetGraphRAGJobResponseBodyUsage;
  static names(): { [key: string]: string } {
    return {
      job: 'Job',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      job: GetGraphRAGJobResponseBodyJob,
      message: 'string',
      requestId: 'string',
      status: 'string',
      usage: GetGraphRAGJobResponseBodyUsage,
    };
  }

  validate() {
    if(this.job && typeof (this.job as any).validate === 'function') {
      (this.job as any).validate();
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

