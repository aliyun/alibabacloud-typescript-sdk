// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomViewPointsResponseBodyDataViewPointsOutlines extends $dara.Model {
  /**
   * @remarks
   * The outline.
   * 
   * @example
   * 大纲
   */
  outline?: string;
  /**
   * @remarks
   * The summary of the outline.
   * 
   * @example
   * 大纲摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outline: 'Outline',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outline: 'string',
      summary: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomViewPointsResponseBodyDataViewPoints extends $dara.Model {
  /**
   * @remarks
   * The outline.
   */
  outlines?: ListCustomViewPointsResponseBodyDataViewPointsOutlines[];
  /**
   * @remarks
   * The generated viewpoint.
   * 
   * @example
   * 视角
   */
  point?: string;
  /**
   * @remarks
   * The summary.
   * 
   * @example
   * 摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outlines: 'Outlines',
      point: 'Point',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outlines: { 'type': 'array', 'itemType': ListCustomViewPointsResponseBodyDataViewPointsOutlines },
      point: 'string',
      summary: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.outlines)) {
      $dara.Model.validateArray(this.outlines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomViewPointsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task that analyzes the custom viewpoint.
   * 
   * @example
   * 2323ac73e174428a98c91097a59c67e0
   */
  asyncTaskId?: string;
  /**
   * @remarks
   * The viewpoint.
   * 
   * @example
   * 观点
   */
  attitude?: string;
  /**
   * @remarks
   * The time when the viewpoint was created.
   * 
   * @example
   * 2024-08-15 16:18:59
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the user who created the viewpoint.
   * 
   * @example
   * 1
   */
  createUser?: string;
  /**
   * @remarks
   * The ID of the custom viewpoint.
   * 
   * @example
   * 709806dd051042d5ab9de8bdbb3a64ca
   */
  id?: string;
  /**
   * @remarks
   * The task execution status. Valid values: PENDING, RUNNING, SUCCEEDED, SUSPENDED, FAILED, and CANCELED.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The error message for the task execution.
   * 
   * @example
   * 参数校验失败
   */
  taskErrorMessage?: string;
  /**
   * @remarks
   * The task execution status. 0: PENDING, 1: RUNNING, 2: SUCCEEDED, 3: PAUSED, 4: FAILED (retriable), 5: FAILED (non-retriable), 6: CANCELED.
   * 
   * @example
   * 1
   */
  taskStatus?: number;
  /**
   * @remarks
   * A list of topic selection viewpoints.
   */
  viewPoints?: ListCustomViewPointsResponseBodyDataViewPoints[];
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'AsyncTaskId',
      attitude: 'Attitude',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      id: 'Id',
      status: 'Status',
      taskErrorMessage: 'TaskErrorMessage',
      taskStatus: 'TaskStatus',
      viewPoints: 'ViewPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      attitude: 'string',
      createTime: 'string',
      createUser: 'string',
      id: 'string',
      status: 'string',
      taskErrorMessage: 'string',
      taskStatus: 'number',
      viewPoints: { 'type': 'array', 'itemType': ListCustomViewPointsResponseBodyDataViewPoints },
    };
  }

  validate() {
    if(Array.isArray(this.viewPoints)) {
      $dara.Model.validateArray(this.viewPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomViewPointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * NoData
   */
  code?: string;
  /**
   * @remarks
   * The business data.
   */
  data?: ListCustomViewPointsResponseBodyData[];
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
   * The maximum number of results returned.
   * 
   * @example
   * 60
   */
  maxResults?: number;
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The token for the next page of results.
   * 
   * @example
   * 下一页的token
   */
  nextToken?: string;
  /**
   * @remarks
   * The unique identifier of the request.
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. \\`true\\`: The request was successful. \\`false\\`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 73
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListCustomViewPointsResponseBodyData },
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
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

