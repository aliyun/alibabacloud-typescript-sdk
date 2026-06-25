// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNamespaceChangeOrdersResponseBodyDataChangeOrderList extends $dara.Model {
  /**
   * @remarks
   * The batch count.
   * 
   * @example
   * 1
   */
  batchCount?: number;
  /**
   * @remarks
   * The batch type.
   * 
   * @example
   * Automatic
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
   * The type of the change order, which corresponds to the `CoTypeCode`.
   * 
   * @example
   * msg.docker.app.actions.CoBatchStartApplication
   */
  coType?: string;
  /**
   * @remarks
   * The type code of the change order. Valid values:
   * 
   * - **CoBatchStartApplication**: Starts applications in batches.
   * 
   * - **CoBatchStopApplication**: Stops applications in batches.
   * 
   * @example
   * CoBatchStartApplication
   */
  coTypeCode?: string;
  /**
   * @remarks
   * The creation time of the change order.
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
   * The completion time of the change order.
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
   * The pipeline.
   * 
   * @example
   * xxxx
   */
  pipelines?: string;
  /**
   * @remarks
   * The initiation source for the change order.
   * 
   * @example
   * console
   */
  source?: string;
  /**
   * @remarks
   * The status of the change order. Valid values:
   * 
   * - **0**: Preparing
   * 
   * - **1**: In progress
   * 
   * - **2**: Succeeded
   * 
   * - **3**: Failed
   * 
   * - **6**: Terminated
   * 
   * - **10**: Failed due to a system exception
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
   * The HTTP status code or POP error code.
   * 
   * - **2xx**: The request was successful.
   * 
   * - **3xx**: The request was redirected.
   * 
   * - **4xx**: A client error occurred.
   * 
   * - **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned results.
   */
  data?: ListNamespaceChangeOrdersResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * - This parameter is returned only when a request fails.
   * 
   * - For more information, see the **Error codes** section of this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The response message.
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
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID, which is used to query the details of the request.
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

