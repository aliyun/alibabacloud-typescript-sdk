// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSearchTasksResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2024-11-25 11:40:50
   */
  createTime?: string;
  /**
   * @example
   * 24
   */
  dialogueType?: number;
  /**
   * @example
   * xxxx
   */
  taskId?: string;
  /**
   * @example
   * xxx
   */
  taskName?: string;
  /**
   * @example
   * 2024-11-25 11:40:50
   */
  updateTime?: string;
  /**
   * @example
   * xxxx
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dialogueType: 'DialogueType',
      taskId: 'TaskId',
      taskName: 'TaskName',
      updateTime: 'UpdateTime',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dialogueType: 'number',
      taskId: 'string',
      taskName: 'string',
      updateTime: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchTasksResponseBody extends $dara.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: ListSearchTasksResponseBodyData[];
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
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
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
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListSearchTasksResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

