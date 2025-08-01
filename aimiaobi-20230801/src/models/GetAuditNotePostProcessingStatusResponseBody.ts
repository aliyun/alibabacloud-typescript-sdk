// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuditNotePostProcessingStatusResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1970-01-01 23:34:45
   */
  completionTime?: string;
  /**
   * @example
   * 1970-01-01 12:34:56
   */
  createTime?: string;
  /**
   * @example
   * error
   */
  errorMessage?: string;
  /**
   * @example
   * Default
   */
  noteId?: string;
  /**
   * @example
   * 233
   */
  processedLines?: number;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  /**
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
   * This parameter is required.
   * 
   * @example
   * DataNotExists
   */
  code?: string;
  /**
   * **if can be null:**
   * true
   */
  data?: GetAuditNotePostProcessingStatusResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
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

