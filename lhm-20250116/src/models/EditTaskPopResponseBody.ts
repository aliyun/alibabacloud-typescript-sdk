// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditTaskPopResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The file upload and parsing ID.
   * 
   * @example
   * 1001
   */
  fileUploadParseId?: number;
  /**
   * @remarks
   * The primary key ID that uniquely identifies a record.
   * 
   * @example
   * 10001
   */
  id?: number;
  /**
   * @remarks
   * The message content. In error scenarios, this field contains the error message. In log scenarios, this field contains the log content. In instance progress scenarios, this field may return a status or progress value.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * - true: Successful.
   * - false: Failed. Check errCode and errMessage for troubleshooting.
   */
  success?: boolean;
  /**
   * @remarks
   * The task ID that uniquely identifies a task.
   * 
   * @example
   * 10001
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      fileUploadParseId: 'fileUploadParseId',
      id: 'id',
      message: 'message',
      success: 'success',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUploadParseId: 'number',
      id: 'number',
      message: 'string',
      success: 'boolean',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditTaskPopResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data body returned by the operation. For the field structure, see the child parameter descriptions.
   */
  data?: EditTaskPopResponseBodyData;
  /**
   * @remarks
   * The error code. An empty string is returned if the call is successful.
   * 
   * @example
   * Success
   */
  errCode?: string;
  /**
   * @remarks
   * The error message. An empty string is returned if the call is successful.
   * 
   * @example
   * success
   */
  errMessage?: string;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues with this call.
   * 
   * @example
   * 4C467B38-3910-4477-9B0B-6963D83B4E72
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * - true: Successful.
   * - false: Failed. Check errCode and errMessage for troubleshooting.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: EditTaskPopResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
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

