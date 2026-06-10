// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTaskExportTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * OK
   */
  code?: string;
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
   * Response message
   * 
   * @example
   * []
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * C377C5FF-4F94-1B23-89D0-50C560623EE4
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
  /**
   * @remarks
   * Export task ID
   * 
   * @example
   * a7d6dcff1b8b40f4a8b769a9c24e7852
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

