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
   * 
   * - **auto**: Automatic.
   * 
   * - **manual**: Manual.
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
   * The description of the change type code (**CoTypeCode**).
   * 
   * @example
   * Create application
   */
  coType?: string;
  /**
   * @remarks
   * The code of the change type. Valid values:
   * 
   * - **CoBindSlb**: Bind an SLB instance.
   * 
   * - **CoUnbindSlb**: Unbind an SLB instance.
   * 
   * - **CoCreateApp**: Create an application.
   * 
   * - **CoDeleteApp**: Delete an application.
   * 
   * - **CoDeploy**: Deploy an application.
   * 
   * - **CoRestartApplication**: Restart an application.
   * 
   * - **CoRollback**: Roll back an application.
   * 
   * - **CoScaleIn**: Scale in an application.
   * 
   * - **CoScaleOut**: Scale out an application.
   * 
   * - **CoStartApplication**: Start an application.
   * 
   * - **CoStopApplication**: Stop an application.
   * 
   * - **CoRescaleApplicationVertically**: Change the instance type.
   * 
   * - **CoDeployHistroy**: Roll back to a previous version.
   * 
   * - **CoBindNas**: Bind a NAS file system.
   * 
   * - **CoUnbindNas**: Unbind a NAS file system.
   * 
   * - **CoBatchStartApplication**: Start multiple applications.
   * 
   * - **CoBatchStopApplication**: Stop multiple applications.
   * 
   * - **CoRestartInstances**: Restart instances.
   * 
   * - **CoDeleteInstances**: Delete instances.
   * 
   * - **CoScaleInAppWithInstances**: Scale in an application by specifying instances.
   * 
   * @example
   * CoCreateApp
   */
  coTypeCode?: string;
  /**
   * @remarks
   * The time the change order was created.
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
   * Version: 1.0 | image name: nginx
   */
  description?: string;
  /**
   * @remarks
   * The time the change order was completed.
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
   * - **0**: Preparing.
   * 
   * - **1**: In progress.
   * 
   * - **2**: Succeeded.
   * 
   * - **3**: Failed.
   * 
   * - **6**: Aborted.
   * 
   * - **8**: Paused for manual confirmation.
   * 
   * - **9**: Paused for automatic confirmation.
   * 
   * - **10**: Failed due to a system exception.
   * 
   * - **11**: Pending approval.
   * 
   * - **12**: Approved and pending execution.
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
   * The page size.
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
   * The HTTP status code or the POP error code. Valid values:
   * 
   * - **2xx**: Success.
   * 
   * - **3xx**: Redirect.
   * 
   * - **4xx**: Request error.
   * 
   * - **5xx**: Server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The information about the change orders.
   */
  data?: ListChangeOrdersResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * - This parameter is not returned on successful requests.
   * 
   * - Returned if the request fails. For more information, see the **error code** list in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * Additional information about the response.
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
   * Indicates whether the list of change orders was retrieved. Valid values:
   * 
   * - **true**: The list was retrieved.
   * 
   * - **false**: The list could not be retrieved.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID used to query request details.
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

