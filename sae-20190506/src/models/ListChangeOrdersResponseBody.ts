// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChangeOrdersResponseBodyDataChangeOrderList extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 164341c-9708-4967-b3ec-24933767****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the user who created the change order.
   * 
   * @example
   * 1
   */
  batchCount?: number;
  /**
   * @remarks
   * The ID of the group.
   * 
   * @example
   * auto
   */
  batchType?: string;
  /**
   * @remarks
   * The mode in which the release batches are determined. Valid values:
   * 
   * *   **auto**: SAE automatically determines the release batches.
   * *   **manual**: You must manually determine the release batches.
   * 
   * @example
   * 7fa5c0-9ebb-4bb4-b383-1f885447****
   */
  changeOrderId?: string;
  /**
   * @remarks
   * The ID of the application.
   */
  coType?: string;
  /**
   * @remarks
   * The code of the change order. Valid values:
   * 
   * *   **CoBindSlb**: associates the Server Load Balancer (SLB) instance with the application.
   * *   **CoUnbindSlb**: disassociates an SLB instance from the application.
   * *   **CoCreateApp**: creates the application.
   * *   **CoDeleteApp**: deletes the application.
   * *   **CoDeploy**: deploys the application.
   * *   **CoRestartApplication**: restarts the application.
   * *   **CoRollback**: rolls back the application.
   * *   **CoScaleIn**: scales in the application.
   * *   **CoScaleOut**: scales out the application.
   * *   **CoStartApplication**: starts the application.
   * *   **CoStopApplication**: stops the application.
   * *   **CoRescaleApplicationVertically**: modifies the instance type.
   * *   **CoDeployHistroy**: rolls back the application to an earlier version.
   * *   **CoBindNas**: associates a network-attached storage (NAS) file system with the application.
   * *   **CoUnbindNas**: disassociates a NAS file system from the application.
   * *   **CoBatchStartApplication**: starts multiple applications concurrently.
   * *   **CoBatchStopApplication**: stops multiple applications concurrently.
   * *   **CoRestartInstances**: restarts the instance.
   * *   **CoDeleteInstances**: deletes the instance.
   * *   **CoScaleInAppWithInstances**: reduces the specified number of application instances.
   * 
   * @example
   * CoCreateApp
   */
  coTypeCode?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 2019-07-11 15:54:49
   */
  createTime?: string;
  /**
   * @remarks
   * The code of the change type. Valid values:
   * 
   * *   **CoBindSlb**: associates an SLB instance with the application.
   * *   **CoUnbindSlb**: disassociates the SLB instance from the application.
   * *   **CoCreateApp**: creates the application.
   * *   **CoDeleteApp**: deletes the application.
   * *   **CoDeploy**: deploys the application.
   * *   **CoRestartApplication**: restarts the application.
   * *   **CoRollback**: rolls back the application.
   * *   **CoScaleIn**: scales in the application.
   * *   **CoScaleOut**: scales out the application.
   * *   **CoStart**: starts the application.
   * *   **CoStop**: stops the application.
   * *   **CoRescaleApplicationVertically**: modifies the instance specifications.
   * *   **CoDeployHistroy**: rolls back the application to a historical version.
   * *   **CoBindNas**: associates a NAS file system with the application.
   * *   **CoUnbindNas**: disassociates the NAS file system from the application.
   * *   **CoBatchStartApplication**: starts multiple applications concurrently.
   * *   **CoBatchStopApplication**: stops multiple applications concurrently.
   * *   **CoRestartInstances**: restarts the instances.
   * *   **CoDeleteInstances**: deletes the instances.
   * *   **CoScaleInAppWithInstances**: reduces the number of the specified application instances.
   * 
   * @example
   * sae-beta-test
   */
  createUserId?: string;
  /**
   * @remarks
   * The change type, which corresponds to the **CoTypeCode** parameter.
   */
  description?: string;
  /**
   * @remarks
   * The time when the change order was created.
   * 
   * @example
   * 2019-07-11 20:12:58
   */
  finishTime?: string;
  /**
   * @remarks
   * The description about the application.
   * 
   * @example
   * c9ecd2-cf6c-46c3-9f20-525de202****
   */
  groupId?: string;
  /**
   * @remarks
   * The number of release batches.
   * 
   * @example
   * console
   */
  source?: string;
  /**
   * @remarks
   * The time when the change order was completed.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The source of the change order.
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
   * The change orders.
   */
  changeOrderList?: ListChangeOrdersResponseBodyDataChangeOrderList[];
  /**
   * @remarks
   * The total number of change orders.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The error code.
   * 
   * *   The **ErrorCode** parameter is not returned when the request succeeds.
   * *   The **ErrorCode** parameter is returned when the request fails. For more information, see **Error codes** in this topic.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of change orders.
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
   * Indicates whether the list of change orders was obtained. Valid values:
   * 
   * *   **true**: indicates that the list was obtained.
   * *   **false**: indicates that the list could not be obtained.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The information about change orders.
   */
  data?: ListChangeOrdersResponseBodyData;
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * *   **2xx**: indicates that the request was successful.
   * *   **3xx**: indicates that the request was redirected.
   * *   **4xx**: indicates that the request was invalid.
   * *   **5xx**: indicates that a server error occurred.
   */
  errorCode?: string;
  /**
   * @remarks
   * The ID of the trace. It is used to query the details of a request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * 65E1F-43BA-4D0C-8E61-E4D1337F****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The information about change orders.
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

