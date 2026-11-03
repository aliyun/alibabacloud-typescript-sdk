// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChangeOrdersResponseBodyDataChangeOrderList extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 164341c-9708-4967-b3ec-24933767****
   */
  appId?: string;
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
   * The batch type. Valid values:
   *   - **auto**: automatic
   *   - **manual**: manual
   * 
   * @example
   * auto
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
   * The change type, which is the description of the **CoTypeCode**.
   * 
   * @example
   * Create Application
   */
  coType?: string;
  /**
   * @remarks
   * The code of the change type. Valid values:
   *  
   * - **CoBindSlb**: bind an SLB instance
   * - **CoUnbindSlb**: unbind an SLB instance
   * - **CoCreateApp**: create an application
   * - **CoDeleteApp**: delete an application
   * - **CoDeploy**: deploy an application
   * - **CoRestartApplication**: restart an application
   * - **CoRollback**: roll back an application
   * - **CoScaleIn**: scale in an application
   * - **CoScaleOut**: scale out an application
   * - **CoStartApplication**: start an application
   * - **CoStopApplication**: stop an application
   * - **CoRescaleApplicationVertically**: change instance specifications
   * - **CoDeployHistroy**: roll back to a historical version
   * - **CoBindNas**: bind a NAS file system
   * - **CoUnbindNas**: unbind a NAS file system
   * - **CoBatchStartApplication**: start applications in batches
   * - **CoBatchStopApplication**: stop applications in batches
   * - **CoRestartInstances**: restart instances
   * - **CoDeleteInstances**: delete instances
   * - **CoScaleInAppWithInstances**: scale in specified instances
   * 
   * @example
   * CoCreateApp
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
   * sae-beta-test
   */
  createUserId?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Version: 1.0 | Image name: nginx
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
   * The source of the change order operation.
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
   * - **2**: executed successfully
   * - **3**: execution failed
   * - **6**: terminated
   * - **8**: waiting for manual batch confirmation
   * - **9**: waiting for automatic batch confirmation
   * - **10**: execution failed due to a system exception
   * - **11**: waiting for approval
   * - **12**: approved and waiting for execution
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
   * sae-beta-test
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
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
      source: 'Source',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
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

export class ListChangeOrdersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of change orders.
   */
  changeOrderList?: ListChangeOrdersResponseBodyDataChangeOrderList[];
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
   * 1
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
      changeOrderList: { 'type': 'array', 'itemType': ListChangeOrdersResponseBodyDataChangeOrderList },
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

export class ListChangeOrdersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code or POP error code. Valid values:
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
   * The information about the change order list.
   */
  data?: ListChangeOrdersResponseBodyData;
  /**
   * @remarks
   * The error code. Take note of the following items:
   * 
   * - If the request is successful, the **ErrorCode** parameter is not returned.
   * - If the request fails, the **ErrorCode** parameter is returned. For more information, see the error codes in this topic.
   * 
   * @example
   * InvalidParameter.NotEmpty
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information about the call result.
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
   * 65E1F-43BA-4D0C-8E61-E4D1337F****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the change order list was successfully queried. Valid values:
   * - **true**: the query was successful
   * - **false**: the query failed
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID, which is used to accurately query the call information.
   * 
   * @example
   * 0bb6f815638568884597879d****
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
      data: ListChangeOrdersResponseBodyData,
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

