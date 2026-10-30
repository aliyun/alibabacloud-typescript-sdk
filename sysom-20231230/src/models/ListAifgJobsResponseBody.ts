// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAifgJobsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The first command in the data list.
   * 
   * @example
   * start
   */
  command?: any;
  /**
   * @remarks
   * The ID of the first element in the data list.
   * 
   * @example
   * 123456
   */
  id?: number;
  /**
   * @remarks
   * The first parameter in the root data.
   * 
   * @example
   * {\\"key1\\": \\"value1\\"}
   */
  params?: any;
  /**
   * @remarks
   * The first result in the root data.
   * 
   * @example
   * success
   */
  result?: any;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * user-service
   */
  serviceName?: string;
  /**
   * @remarks
   * The status of the data item.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The sub-status of data item 0.
   * 
   * @example
   * processing
   */
  subStatus?: string;
  /**
   * @remarks
   * The time when the data was submitted.
   * 
   * @example
   * 2023-09-01 12:00:00
   */
  submitTime?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 123456
   */
  taskId?: string;
  /**
   * @remarks
   * The unique identifier of the trace task.
   * 
   * @example
   * T123456789
   */
  traceTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'command',
      id: 'id',
      params: 'params',
      result: 'result',
      serviceName: 'serviceName',
      status: 'status',
      subStatus: 'subStatus',
      submitTime: 'submitTime',
      taskId: 'taskId',
      traceTaskId: 'traceTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'any',
      id: 'number',
      params: 'any',
      result: 'any',
      serviceName: 'string',
      status: 'string',
      subStatus: 'string',
      submitTime: 'string',
      taskId: 'string',
      traceTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAifgJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data under the root node.
   */
  data?: ListAifgJobsResponseBodyData[];
  /**
   * @remarks
   * The maximum number of records to retrieve at a time.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Indicates the read position returned by the current call. An empty value indicates that all data has been read.
   * 
   * This parameter is required.
   * 
   * @example
   * Hello, world!
   */
  message?: string;
  /**
   * @remarks
   * The pagination cursor. A non-empty value indicates that more data is available.
   * 
   * @example
   * U+w1wv2R4ZWR5oZLXD0+Dp4dD+2BRJj42DLT6GrZysw=
   */
  nextToken?: string;
  /**
   * @remarks
   * The unique identifier of the request.
   * 
   * @example
   * 1234567890
   */
  requestId?: string;
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAifgJobsResponseBodyData },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      total: 'number',
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

