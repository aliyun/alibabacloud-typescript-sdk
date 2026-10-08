// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBatchTasksResponseBodyPageResultResultData extends $dara.Model {
  /**
   * @example
   * 订单明细加工任务
   */
  description?: string;
  /**
   * @example
   * /dwd
   */
  directory?: string;
  /**
   * @example
   * 7090125821589888
   */
  fileId?: number;
  /**
   * @example
   * SUCCESS
   */
  lastSubmitStatus?: string;
  /**
   * @example
   * 3
   */
  lastVersion?: number;
  /**
   * @example
   * dwd_order_detail
   */
  name?: string;
  /**
   * @example
   * n_123456
   */
  nodeId?: string;
  /**
   * @example
   * dwd_order_detail
   */
  nodeName?: string;
  nodeOutputNameList?: string[];
  /**
   * @example
   * 1
   */
  nodeType?: number;
  /**
   * @example
   * 10
   */
  operatorType?: number;
  /**
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @example
   * 30001011
   */
  ownerUserId?: string;
  published?: boolean;
  released?: boolean;
  /**
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
   * @example
   * 10
   */
  count?: number;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  pageResult?: ListBatchTasksResponseBodyPageResult;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
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

