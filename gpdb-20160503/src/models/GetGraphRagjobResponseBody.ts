// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGraphRAGJobResponseBodyJob extends $dara.Model {
  /**
   * @example
   * false
   */
  completed?: boolean;
  /**
   * @example
   * 2024-01-08 16:52:04.864664
   */
  createTime?: string;
  /**
   * @example
   * Failed to connect database.
   */
  error?: string;
  /**
   * @example
   * 231460f8-75dc-405e-a669-0c5204887e91
   */
  id?: string;
  /**
   * @example
   * 20
   */
  progress?: number;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
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
   * @example
   * 475
   */
  embeddingTokens?: number;
  /**
   * @example
   * 600
   */
  LLMInputTokens?: number;
  /**
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
  job?: GetGraphRAGJobResponseBodyJob;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @example
   * success
   */
  status?: string;
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

