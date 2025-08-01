// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuditNoteProcessingStatusResponseBodyData extends $dara.Model {
  /**
   * @example
   * oss://default/path/to/audit/note
   */
  fileKey?: string;
  /**
   * @example
   * 504
   */
  fileSize?: number;
  /**
   * @example
   * 错题本2025-07-07_解析结果
   */
  noteName?: string;
  /**
   * @example
   * SUCCESSED
   */
  status?: string;
  /**
   * @example
   * 111_Default_20250708142918
   */
  taskId?: string;
  /**
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
   * @example
   * DataNotExists
   */
  code?: string;
  data?: GetAuditNoteProcessingStatusResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F2F366D6-E9FE-1006-BB70-2C650896AAB5
   */
  requestId?: string;
  /**
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

