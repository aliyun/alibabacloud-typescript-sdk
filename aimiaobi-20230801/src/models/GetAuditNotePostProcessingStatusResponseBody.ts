// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuditNotePostProcessingStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the post-processing task was completed. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 1970-01-01 23:34:45
   */
  completionTime?: string;
  /**
   * @remarks
   * The time when the post-processing task was created. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 1970-01-01 12:34:56
   */
  createTime?: string;
  /**
   * @remarks
   * The error message. This is returned only when the post-processing task fails.
   * 
   * @example
   * error
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the rule library. The default value in the current version is "Default".
   * 
   * @example
   * Default
   */
  noteId?: string;
  /**
   * @remarks
   * The number of lines that have been post-processed.
   * 
   * @example
   * 233
   */
  processedLines?: number;
  /**
   * @remarks
   * The status of the post-processing task. Valid values: PENDING, RUNNING, SUCCEEDED, and FAILED.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The total number of lines in the structured rule library.
   * 
   * @example
   * 666
   */
  totalLines?: number;
  static names(): { [key: string]: string } {
    return {
      completionTime: 'CompletionTime',
      createTime: 'CreateTime',
      errorMessage: 'ErrorMessage',
      noteId: 'NoteId',
      processedLines: 'ProcessedLines',
      status: 'Status',
      totalLines: 'TotalLines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completionTime: 'string',
      createTime: 'string',
      errorMessage: 'string',
      noteId: 'string',
      processedLines: 'number',
      status: 'string',
      totalLines: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuditNotePostProcessingStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * This parameter is required.
   * 
   * @example
   * DataNotExists
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * **if can be null:**
   * true
   */
  data?: GetAuditNotePostProcessingStatusResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error details.
   * 
   * This parameter is required.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * This parameter is required.
   * 
   * @example
   * F2F366D6-E9FE-1006-BB70-2C650896AAB5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAuditNotePostProcessingStatusResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
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

