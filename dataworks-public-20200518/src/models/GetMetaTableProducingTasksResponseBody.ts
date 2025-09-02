// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaTableProducingTasksResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the output task.
   * 
   * @example
   * 9876543210
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the output task.
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableProducingTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The output tasks of the metatable.
   */
  data?: GetMetaTableProducingTasksResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * "0"
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * SUCCESS
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code returned.
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
   * 00000-00000-00000-00000
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: true and false. The value true indicates that the request was successful. The value false indicates that the request failed.
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
      data: { 'type': 'array', 'itemType': GetMetaTableProducingTasksResponseBodyData },
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

