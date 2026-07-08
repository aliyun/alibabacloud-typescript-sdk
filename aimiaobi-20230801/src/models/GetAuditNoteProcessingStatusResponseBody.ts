// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuditNoteProcessingStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * OSS path where the parsed rule library is stored
   * 
   * @example
   * oss://default/path/to/audit/note
   */
  fileKey?: string;
  /**
   * @remarks
   * Size of the rule library file, in bytes
   * 
   * @example
   * 504
   */
  fileSize?: number;
  /**
   * @remarks
   * Name of the parsed rule library
   * 
   * @example
   * 错题本2025-07-07_解析结果
   */
  noteName?: string;
  /**
   * @remarks
   * Task status. Valid values: PENDING, RUNNING, SUCCESSED, or FAILED
   * 
   * @example
   * SUCCESSED
   */
  status?: string;
  /**
   * @remarks
   * Task ID. Unique identifier for this task.
   * 
   * @example
   * 111_Default_20250708142918
   */
  taskId?: string;
  /**
   * @remarks
   * Update time
   * 
   * @example
   * 2024-11-25 11:40:50
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      fileKey: 'FileKey',
      fileSize: 'FileSize',
      noteName: 'NoteName',
      status: 'Status',
      taskId: 'TaskId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileKey: 'string',
      fileSize: 'number',
      noteName: 'string',
      status: 'string',
      taskId: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuditNoteProcessingStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * DataNotExists
   */
  code?: string;
  /**
   * @remarks
   * Response data
   */
  data?: GetAuditNoteProcessingStatusResponseBodyData;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * F2F366D6-E9FE-1006-BB70-2C650896AAB5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded
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
      data: GetAuditNoteProcessingStatusResponseBodyData,
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

