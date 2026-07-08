// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBiddingDocResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Creation time - start range, format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2023-03-18 02:00:00
   */
  createTimeStart?: string;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @remarks
   * Task name
   * 
   * @example
   * 任务名称
   */
  taskName?: string;
  /**
   * @remarks
   * Task status
   * 
   * @example
   * 1
   */
  taskStatus?: number;
  /**
   * @remarks
   * Task step
   * 
   * @example
   * analysis
   * writing
   */
  taskStep?: string;
  static names(): { [key: string]: string } {
    return {
      createTimeStart: 'CreateTimeStart',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskStatus: 'TaskStatus',
      taskStep: 'TaskStep',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeStart: 'string',
      taskId: 'string',
      taskName: 'string',
      taskStatus: 'number',
      taskStep: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBiddingDocResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Current page number
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * Returned data
   */
  data?: ListBiddingDocResponseBodyData[];
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
   * Deprecated
   * 
   * @example
   * null
   */
  maxResults?: number;
  /**
   * @remarks
   * Error description
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Deprecated
   * 
   * @example
   * null
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Number of items per page
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * Whether the operation was successful: true for success, false for failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total records
   * 
   * @example
   * 10
   */
  total?: number;
  /**
   * @remarks
   * Deprecated
   * 
   * @example
   * null
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      total: 'Total',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': ListBiddingDocResponseBodyData },
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      total: 'number',
      totalCount: 'number',
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

