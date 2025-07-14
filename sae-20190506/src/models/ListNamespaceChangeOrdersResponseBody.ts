// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNamespaceChangeOrdersResponseBodyDataChangeOrderList extends $dara.Model {
  /**
   * @remarks
   * The number of release batches.
   * 
   * @example
   * 1
   */
  batchCount?: number;
  /**
   * @remarks
   * The mode in which the release batches are determined. Valid values:
   * 
   * *   **auto**: SAE automatically determines the release batches.
   * *   **manual**: You must manually determine the release batches.
   */
  batchType?: string;
  /**
   * @remarks
   * The ID of the change order.
   * 
   * @example
   * 7fa5c0-9ebb-4bb4-b383-1f885447****
   */
  changeOrderId?: string;
  /**
   * @remarks
   * The type of the change order, which corresponds the **CoTypeCode** parameter.
   * 
   * @example
   * msg.docker.app.actions.CoBatchStartApplication
   */
  coType?: string;
  /**
   * @remarks
   * The code of the change order type. Valid values:
   * 
   * *   **CoBatchStartApplication**: starts multiple applications concurrently.
   * *   **CoBatchStopApplication**: stops multiple applications concurrently.
   * 
   * @example
   * CoBatchStartApplication
   */
  coTypeCode?: string;
  /**
   * @remarks
   * The time when the change order was created.
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
   */
  description?: string;
  /**
   * @remarks
   * The time when the change order was completed.
   * 
   * @example
   * 2019-07-11 20:12:58
   */
  finishTime?: string;
  /**
   * @remarks
   * The ID of the group.
   * 
   * @example
   * c9ecd2-cf6c-46c3-9f20-525de202****
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * cn-shanghai:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The information about release batches.
   * 
   * @example
   * xxxx
   */
  pipelines?: string;
  /**
   * @remarks
   * The source of the change order.
   * 
   * @example
   * console
   */
  source?: string;
  /**
   * @remarks
   * The status of the change order. Valid values:
   * 
   * *   **0**: The change order is being prepared.
   * *   **1**: The change order is being executed.
   * *   **2**: The change order was executed.
   * *   **3**: The change order could not be executed.
   * *   **6**: The change order was terminated.
   * *   **10**: The change order could not be executed due to a system exception.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The ID of the user.
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
   * The number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
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
   * The HTTP status code. Valid values:
   * 
   * *   **2xx**: indicates that the request was successful.
   * *   **3xx**: indicates that the request was redirected.
   * *   **4xx**: indicates that the request was invalid.
   * *   **5xx**: indicates that a server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListNamespaceChangeOrdersResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * *   The **ErrorCode** parameter is not returned when the request succeeds.
   * *   The **ErrorCode** parameter is returned when the request fails. For more information, see **Error codes** in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0bc3915638507554994370d****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the list of change orders was obtained. Valid values:
   * 
   * *   **true**: indicates that the list was obtained.
   * *   **false**: indicates that the list could not be obtained.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the trace. It is used to query the details of a request.
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

