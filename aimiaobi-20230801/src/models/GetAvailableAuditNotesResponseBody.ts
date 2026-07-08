// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAvailableAuditNotesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Rule library file size in bytes.
   * 
   * @example
   * 23333
   */
  fileSize?: number;
  /**
   * @remarks
   * Primary ID of the rule library storage.
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * Rule library ID.
   * 
   * @example
   * Default
   */
  noteId?: string;
  /**
   * @remarks
   * Parsed rule library name.
   * 
   * @example
   * 错题本2025-07-07_解析结果
   */
  noteName?: string;
  /**
   * @remarks
   * Rule library update time.
   * 
   * @example
   * 2025-07-07 11:56:30
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'FileSize',
      id: 'Id',
      noteId: 'NoteId',
      noteName: 'NoteName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      id: 'string',
      noteId: 'string',
      noteName: 'string',
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

export class GetAvailableAuditNotesResponseBody extends $dara.Model {
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
  data?: GetAvailableAuditNotesResponseBodyData;
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
   * Id of the request
   * 
   * @example
   * F2F366D6-E9FE-1006-BB70-2C650896AAB5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded.
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
      data: GetAvailableAuditNotesResponseBodyData,
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

