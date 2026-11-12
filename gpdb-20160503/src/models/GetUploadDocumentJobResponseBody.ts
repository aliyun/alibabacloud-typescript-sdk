// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadDocumentJobResponseBodyChunkResult extends $dara.Model {
  /**
   * @remarks
   * The URL of the chunked file. The URL is valid for 2 hours. The file format is JSONL, and each line is in the following format: `{"page_content":"*****", "metadata": {"**":"***","**":"***"}`.
   * 
   * @example
   * http://xxx/test.jsonl
   */
  chunkFileUrl?: string;
  /**
   * @remarks
   * The URL of the Markdown result file parsed by ADBPGLoader. The URL is valid for 2 hours.
   * 
   * @example
   * http://oss.xxx/adbpg_loader_result.md
   */
  documentLoaderResultFileUrl?: string;
  /**
   * @remarks
   * The URL of the chunked file without metadata. The URL is valid for 2 hours. The file format is plain text, and each line represents a chunk. This file can be conveniently used for embedding.
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
   * Indicates whether the operation is completed.
   * 
   * @example
   * false
   */
  completed?: boolean;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2024-01-08 16:52:04.864664
   */
  createTime?: string;
  /**
   * @remarks
   * The error message returned when the current operation is abnormal or fails.
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
   * The upload progress. The value is a percentage. A value of 100 indicates that the upload is completed.
   * 
   * @example
   * 20
   */
  progress?: number;
  /**
   * @remarks
   * The task status. Valid values:
   * - Success: The task is successful.
   * - Failed: The task failed. You can view the Error field for the cause of the failure.
   * - Cancelling: The task is being cancelled.
   * - Cancelled: The task is cancelled.
   * - Start: The task is started.
   * - Running: The task is running.
   * - Pending: The task is pending.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The time when the task was updated.
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
   * The number of entries used for vectorization.
   * 
   * @example
   * 10
   */
  embeddingEntries?: number;
  /**
   * @remarks
   * The number of tokens used for vectorization.
   * 
   * > A token is the smallest unit into which the input text is split. A token can be a word, a phrase, a punctuation mark, or a character.
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
   * The detailed information of the document upload task.
   */
  job?: GetUploadDocumentJobResponseBodyJob;
  /**
   * @remarks
   * The detailed information returned by the operation.
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
   * - **success**: The operation is successful.
   * - **fail**: The operation failed.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The number of tokens or entries consumed by document understanding or embedding.
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

