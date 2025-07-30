// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadDocumentJobResponseBodyChunkResult extends $dara.Model {
  /**
   * @remarks
   * The URL of the file after chunking. The validity period of the URL is 2 hours. The file is in the JSONL format. Each line is in the `{"page_content":"*****", "metadata": {"**":"***","**":"***"}` format.
   * 
   * @example
   * http://xxx/test.jsonl
   */
  chunkFileUrl?: string;
  documentLoaderResultFileUrl?: string;
  /**
   * @remarks
   * The URL of the file that does not contain metadata after chunking. The validity period of the URL is 2 hours. The file is in the TXT format. Each line is a chunk. The file can be easily used for embedding.
   * 
   * @example
   * http://xxx/test.txt
   */
  plainChunkFileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      chunkFileUrl: 'ChunkFileUrl',
      documentLoaderResultFileUrl: 'DocumentLoaderResultFileUrl',
      plainChunkFileUrl: 'PlainChunkFileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkFileUrl: 'string',
      documentLoaderResultFileUrl: 'string',
      plainChunkFileUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadDocumentJobResponseBodyJob extends $dara.Model {
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
   * The time when the job was created.
   * 
   * @example
   * 2024-01-08 16:52:04.864664
   */
  createTime?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Failed to connect database.
   */
  error?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InternalError
   */
  errorCode?: string;
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
   * The status of the job. Valid values: Valid values:
   * 
   * *   Success
   * *   Failed (See the Error parameter for failure reasons.)
   * *   Cancelling
   * *   Cancelled
   * *   Start
   * *   Running
   * *   Pending
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The time when the job was updated.
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
      errorCode: 'ErrorCode',
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
      errorCode: 'string',
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

export class GetUploadDocumentJobResponseBodyUsage extends $dara.Model {
  /**
   * @remarks
   * The count of embedding entries.
   * 
   * @example
   * 10
   */
  embeddingEntries?: number;
  /**
   * @remarks
   * The number of tokens that are used for vectorization.
   * 
   * >  A token is the minimum unit for splitting text. A token can be a word, phrase, punctuation, or character.
   * 
   * @example
   * 475
   */
  embeddingTokens?: number;
  static names(): { [key: string]: string } {
    return {
      embeddingEntries: 'EmbeddingEntries',
      embeddingTokens: 'EmbeddingTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embeddingEntries: 'number',
      embeddingTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadDocumentJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The chunking result.
   */
  chunkResult?: GetUploadDocumentJobResponseBodyChunkResult;
  /**
   * @remarks
   * The information about the document upload job.
   */
  job?: GetUploadDocumentJobResponseBodyJob;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
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
   * The number of tokens that are used for document understanding or embedding.
   */
  usage?: GetUploadDocumentJobResponseBodyUsage;
  static names(): { [key: string]: string } {
    return {
      chunkResult: 'ChunkResult',
      job: 'Job',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkResult: GetUploadDocumentJobResponseBodyChunkResult,
      job: GetUploadDocumentJobResponseBodyJob,
      message: 'string',
      requestId: 'string',
      status: 'string',
      usage: GetUploadDocumentJobResponseBodyUsage,
    };
  }

  validate() {
    if(this.chunkResult && typeof (this.chunkResult as any).validate === 'function') {
      (this.chunkResult as any).validate();
    }
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

