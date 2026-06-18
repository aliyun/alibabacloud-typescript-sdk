// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIndexJobStatusResponseBodyDataDocuments extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Index.Document.ChunkError
   */
  code?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * file_9a65732555b54d5ea10796ca5742ba22_xxxxxxxx
   */
  docId?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * XXX产品介绍
   */
  docName?: string;
  gmtModified?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * document parse error
   */
  message?: string;
  /**
   * @remarks
   * The file import status. Valid values:
   * - INSERT_ERROR: The file import failed.
   * - RUNNING: The file is being imported.
   * - DELETED: The file has been deleted.
   * - FINISH: The file was imported.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      docId: 'DocId',
      docName: 'DocName',
      gmtModified: 'GmtModified',
      message: 'Message',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      docId: 'string',
      docName: 'string',
      gmtModified: 'number',
      message: 'string',
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

export class GetIndexJobStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of files imported in this job.
   */
  documents?: GetIndexJobStatusResponseBodyDataDocuments[];
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 66122af12a4e45ddae6bd6c84555xxxx
   */
  jobId?: string;
  /**
   * @remarks
   * The current status of the knowledge base job. Valid values:
   * - COMPLETED: The job succeeded.
   * - FAILED: The job failed.
   * - RUNNING: The job is running.
   * - PENDING: The job is pending execution.
   * 
   * @example
   * PENDING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      documents: 'Documents',
      jobId: 'JobId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documents: { 'type': 'array', 'itemType': GetIndexJobStatusResponseBodyDataDocuments },
      jobId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.documents)) {
      $dara.Model.validateArray(this.documents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexJobStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Index.Forbidden
   */
  code?: string;
  /**
   * @remarks
   * The data field returned by the operation.
   */
  data?: GetIndexJobStatusResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * User not authorized to operate on the specified resource.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 17204B98-xxxx-4F9A-8464-2446A84821CA
   */
  requestId?: string;
  /**
   * @remarks
   * The HTTP status code returned by the operation.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * - true: The operation was successful.
   * - false: The operation failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetIndexJobStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

