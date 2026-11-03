// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNamespaceChangeOrdersResponseBodyDataChangeOrderList extends $dara.Model {
  /**
   * @remarks
   * The number of batches.
   * 
   * @example
   * 1
   */
  batchCount?: number;
  /**
   * @remarks
   * The batch type.
   */
  batchType?: string;
  /**
   * @remarks
   * The change order ID.
   * 
   * @example
   * 7fa5c0-9ebb-4bb4-b383-1f885447****
   */
  changeOrderId?: string;
  /**
   * @remarks
   * The type of the change order, which is the description of **CoTypeCode**.
   * 
   * @example
   * msg.docker.app.actions.CoBatchStartApplication
   */
  coType?: string;
  /**
   * @remarks
   * The code of the change order type. Valid values:
   * 
   * - **CoBatchStartApplication**: Starts applications in batches.
   * - **CoBatchStopApplication**: Stops applications in batches.
   * 
   * @example
   * CoBatchStartApplication
   */
  coTypeCode?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2019-07-11 15:54:49
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the user who created the change order.
   * 
   * @example
   * test@aliyun.com
   */
  createUserId?: string;
  /**
   * @remarks
   * The description of the change order.
   * 
   * @example
   * Batch Start Applications
   */
  description?: string;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2019-07-11 20:12:58
   */
  finishTime?: string;
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * c9ecd2-cf6c-46c3-9f20-525de202****
   */
  groupId?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * cn-shanghai:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The change pipelines.
   * 
   * @example
   * xxxx
   */
  pipelines?: string;
  /**
   * @remarks
   * The source from which the change order was initiated.
   * 
   * @example
   * console
   */
  source?: string;
  /**
   * @remarks
   * The status of the change order. Valid values:
   * 
   * - **0**: preparing
   * - **1**: executing
   * - **2**: succeeded
   * - **3**: failed
   * - **6**: terminated
   * - **10**: failed due to a system exception
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * test_sae
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      batchCount: 'BatchCount',
      batchType: 'BatchType',
      changeOrderId: 'ChangeOrderId',
      coType: 'CoType',
      coTypeCode: 'CoTypeCode',
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      description: 'Description',
      finishTime: 'FinishTime',
      groupId: 'GroupId',
      namespaceId: 'NamespaceId',
      pipelines: 'Pipelines',
      source: 'Source',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchCount: 'number',
      batchType: 'string',
      changeOrderId: 'string',
      coType: 'string',
      coTypeCode: 'string',
      createTime: 'string',
      createUserId: 'string',
      description: 'string',
      finishTime: 'string',
      groupId: 'string',
      namespaceId: 'string',
      pipelines: 'string',
      source: 'string',
      status: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespaceChangeOrdersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of change orders.
   */
  changeOrderList?: ListNamespaceChangeOrdersResponseBodyDataChangeOrderList[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
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
   * The total number of change orders.
   * 
   * @example
   * 32
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      changeOrderList: 'ChangeOrderList',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderList: { 'type': 'array', 'itemType': ListNamespaceChangeOrdersResponseBodyDataChangeOrderList },
      currentPage: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.changeOrderList)) {
      $dara.Model.validateArray(this.changeOrderList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespaceChangeOrdersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code or POP error code. Valid values:
   * 
   * - **2xx**: success
   * - **3xx**: redirection
   * - **4xx**: client error
   * - **5xx**: server error
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: ListNamespaceChangeOrdersResponseBodyData;
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * - Request succeeded: The **ErrorCode** parameter is not returned.
   * - Request failed: The **ErrorCode** parameter is returned. For more information, see the **Error codes** section in this topic.
   * 
   * @example
   * Resouce.no.permission
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information about the API call result.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0bc3915638507554994370d****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the change order list was successfully retrieved. Valid values:
   * 
   * - **true**: The list was successfully retrieved.
   * - **false**: The retrieval failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID used to query the exact call information.
   * 
   * @example
   * 0bc3915638507554994370d****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListNamespaceChangeOrdersResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

