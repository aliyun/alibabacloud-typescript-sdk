// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetUploadDocumentJobResponseBodyChunkResult } from "./GetUploadDocumentJobResponseBodyChunkResult";
import { GetUploadDocumentJobResponseBodyJob } from "./GetUploadDocumentJobResponseBodyJob";
import { GetUploadDocumentJobResponseBodyUsage } from "./GetUploadDocumentJobResponseBodyUsage";


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

