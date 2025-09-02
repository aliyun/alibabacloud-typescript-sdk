// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMigrationProcessResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the step in the migration task.
   * 
   * @example
   * IMPORE_PREPARE
   */
  taskName?: string;
  /**
   * @remarks
   * The running status of the step in the migration task. Valid values:
   * 
   * *   INIT
   * *   RUNNING
   * *   FAILURE
   * *   SUCCESS
   * 
   * @example
   * SUCCESS
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      taskName: 'TaskName',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskName: 'string',
      taskStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMigrationProcessResponseBody extends $dara.Model {
  /**
   * @remarks
   * The progress information of the migration task, including the names of all steps in and status of the migration task.
   */
  data?: GetMigrationProcessResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 110001123456
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * test error msg
   */
  errorMessage?: string;
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
   * The request ID.
   * 
   * @example
   * SADFSDFSD-SDFSDF-XDXCVX-ESWW
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetMigrationProcessResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

