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
   * XXX Product Introduction
   */
  docName?: string;
  /**
   * @remarks
   * The time when the file was last modified. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1782209511000
   */
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
   * - INSERT_ERROR: The index import failed.
   * - RUNNING: The index is being built.
   * - DELETED: The file is deleted.
   * - FINISH: The index is built successfully.
   * - PARSE_FAILED: The parsing failed.
   * - DOC_PARSING: The file is being parsed.
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
   * The list of files imported in this task.
   */
  documents?: GetIndexJobStatusResponseBodyDataDocuments[];
  /**
   * @remarks
   * The job task ID.
   * 
   * @example
   * 66122af12a4e45ddae6bd6c84555xxxx
   */
  jobId?: string;
  /**
   * @remarks
   * The current status of the knowledge base job task. Valid values:
   * - COMPLETED: The task is executed successfully.
   * - FAILED: The task failed to be executed.
   * - RUNNING: The task is being executed.
   * - PENDING: The task is pending execution.
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
   * The business data field of the operation.
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
   * The status code returned by the operation.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: The call was successful.
   * - false: The call failed.
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

