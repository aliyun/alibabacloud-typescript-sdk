// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBatchTasksResponseBodyPageResultResultData extends $dara.Model {
  /**
   * @remarks
   * The description of the task.
   * 
   * @example
   * Order detail processing task
   */
  description?: string;
  /**
   * @remarks
   * The folder where the task is located.
   * 
   * @example
   * /dwd
   */
  directory?: string;
  /**
   * @remarks
   * The ID of the task file. You can use this ID as the input parameter for the GetBatchTaskInfo operation.
   * 
   * @example
   * 7090125821589888
   */
  fileId?: number;
  /**
   * @remarks
   * The latest submit status. Valid values: SUBMITTING, SUCCESS, and FAILED.
   * 
   * @example
   * SUCCESS
   */
  lastSubmitStatus?: string;
  /**
   * @remarks
   * The latest submitted version number.
   * 
   * @example
   * 3
   */
  lastVersion?: number;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * dwd_order_detail
   */
  name?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * n_123456
   */
  nodeId?: string;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * dwd_order_detail
   */
  nodeName?: string;
  /**
   * @remarks
   * The list of output table names for the node.
   */
  nodeOutputNameList?: string[];
  /**
   * @remarks
   * The type of the node. Valid values: 1 (periodic task) and 3 (manual task).
   * 
   * @example
   * 1
   */
  nodeType?: number;
  /**
   * @remarks
   * The task type code.
   * 
   * @example
   * 10
   */
  operatorType?: number;
  /**
   * @remarks
   * The name of the task owner.
   * 
   * @example
   * John Doe
   */
  ownerName?: string;
  /**
   * @remarks
   * The ID of the task owner.
   * 
   * @example
   * 30001011
   */
  ownerUserId?: string;
  /**
   * @remarks
   * Indicates whether the task has been published to the production environment.
   */
  published?: boolean;
  /**
   * @remarks
   * Indicates whether the task has been submitted.
   */
  released?: boolean;
  /**
   * @remarks
   * The status of the task. Valid values: DRAFT, DEVELOP, and SUBMITTED.
   * 
   * @example
   * SUBMITTED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      directory: 'Directory',
      fileId: 'FileId',
      lastSubmitStatus: 'LastSubmitStatus',
      lastVersion: 'LastVersion',
      name: 'Name',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeOutputNameList: 'NodeOutputNameList',
      nodeType: 'NodeType',
      operatorType: 'OperatorType',
      ownerName: 'OwnerName',
      ownerUserId: 'OwnerUserId',
      published: 'Published',
      released: 'Released',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      directory: 'string',
      fileId: 'number',
      lastSubmitStatus: 'string',
      lastVersion: 'number',
      name: 'string',
      nodeId: 'string',
      nodeName: 'string',
      nodeOutputNameList: { 'type': 'array', 'itemType': 'string' },
      nodeType: 'number',
      operatorType: 'number',
      ownerName: 'string',
      ownerUserId: 'string',
      published: 'boolean',
      released: 'boolean',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodeOutputNameList)) {
      $dara.Model.validateArray(this.nodeOutputNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBatchTasksResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * The total number of tasks that meet the query conditions, regardless of pagination.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of tasks on the current page.
   */
  resultData?: ListBatchTasksResponseBodyPageResultResultData[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      page: 'Page',
      pageSize: 'PageSize',
      resultData: 'ResultData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      page: 'number',
      pageSize: 'number',
      resultData: { 'type': 'array', 'itemType': ListBatchTasksResponseBodyPageResultResultData },
    };
  }

  validate() {
    if(Array.isArray(this.resultData)) {
      $dara.Model.validateArray(this.resultData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBatchTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. A value of OK indicates that the request is successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The paginated result of the task query.
   */
  pageResult?: ListBatchTasksResponseBodyPageResult;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListBatchTasksResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pageResult && typeof (this.pageResult as any).validate === 'function') {
      (this.pageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

