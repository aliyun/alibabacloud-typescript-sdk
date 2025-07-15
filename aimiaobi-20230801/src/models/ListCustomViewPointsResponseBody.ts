// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomViewPointsResponseBodyDataViewPointsOutlines extends $dara.Model {
  /**
   * @example
   * 大纲
   */
  outline?: string;
  /**
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
  outlines?: ListCustomViewPointsResponseBodyDataViewPointsOutlines[];
  /**
   * @example
   * 视角
   */
  point?: string;
  /**
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
   * @example
   * 2323ac73e174428a98c91097a59c67e0
   */
  asyncTaskId?: string;
  /**
   * @example
   * 观点
   */
  attitude?: string;
  /**
   * @example
   * 2024-08-15 16:18:59
   */
  createTime?: string;
  /**
   * @example
   * 1
   */
  createUser?: string;
  /**
   * @example
   * 709806dd051042d5ab9de8bdbb3a64ca
   */
  id?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @example
   * 参数校验失败
   */
  taskErrorMessage?: string;
  /**
   * @example
   * 1
   */
  taskStatus?: number;
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
   * @example
   * NoData
   */
  code?: string;
  data?: ListCustomViewPointsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 60
   */
  maxResults?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 下一页的token
   */
  nextToken?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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

