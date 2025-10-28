// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecentChangeOrderResponseBodyChangeOrderListChangeOrder extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 3616cdca-4f92-4413-****-************
   */
  appId?: string;
  /**
   * @remarks
   * The number of batches for the change. Valid values: 1 to 5.
   * 
   * @example
   * 1
   */
  batchCount?: number;
  /**
   * @remarks
   * The way in which the next batch is triggered during a phased release. Valid values:
   * 
   * *   Automatic
   * *   Manual
   * 
   * @example
   * Automatic
   */
  batchType?: string;
  /**
   * @remarks
   * The description of the change process.
   * 
   * @example
   * Version: 2020-05-14 20:02:33 | Deployment Package: hsf-pandora-boot-provider-1.0.jar | Deploy to: all groups
   */
  changeOrderDescription?: string;
  /**
   * @remarks
   * The unique ID of the change process.
   * 
   * @example
   * 1074f3e2-e974-4a0e-****-************
   */
  changeOrderId?: string;
  /**
   * @remarks
   * The type of the change process.
   * 
   * @example
   * Application Scale Out
   */
  coType?: string;
  /**
   * @remarks
   * The type of the change process.
   * 
   * @example
   * CoDeploy
   */
  coTypeCode?: string;
  /**
   * @remarks
   * The time when the change process was created.
   * 
   * @example
   * 2019-11-13 14:23:46
   */
  createTime?: string;
  /**
   * @remarks
   * The user who created the change process.
   * 
   * @example
   * edas_test1@aliyun-test.com
   */
  createUserId?: string;
  /**
   * @remarks
   * The time when the change process ended.
   * 
   * @example
   * 2019-11-13 14:24:02
   */
  finishTime?: string;
  /**
   * @remarks
   * The ID of the application instance group on which the change was performed.
   * 
   * @example
   * 8123db90-880f-486f-****-************
   */
  groupId?: string;
  /**
   * @remarks
   * The source of the change. Valid values:
   * 
   * *   console: the Enterprise Distributed Application Service (EDAS) console
   * *   pop: the POP API or tool
   * 
   * @example
   * pop
   */
  source?: string;
  /**
   * @remarks
   * The state of the change process. Valid values:
   * 
   * *   0: ready to start execution
   * *   1: in progress
   * *   2: successful
   * *   3: failed
   * *   6: terminated
   * *   8: waiting for manual confirmation (You can see the state when you manually confirm the execution of the next batch of the change.)
   * *   9: waiting for automatic execution
   * *   10: failed due to a system error
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The ID of the user who created the change process.
   * 
   * @example
   * 1432536****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      batchCount: 'BatchCount',
      batchType: 'BatchType',
      changeOrderDescription: 'ChangeOrderDescription',
      changeOrderId: 'ChangeOrderId',
      coType: 'CoType',
      coTypeCode: 'CoTypeCode',
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
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
      changeOrderDescription: 'string',
      changeOrderId: 'string',
      coType: 'string',
      coTypeCode: 'string',
      createTime: 'string',
      createUserId: 'string',
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

export class ListRecentChangeOrderResponseBodyChangeOrderList extends $dara.Model {
  changeOrder?: ListRecentChangeOrderResponseBodyChangeOrderListChangeOrder[];
  static names(): { [key: string]: string } {
    return {
      changeOrder: 'ChangeOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrder: { 'type': 'array', 'itemType': ListRecentChangeOrderResponseBodyChangeOrderListChangeOrder },
    };
  }

  validate() {
    if(Array.isArray(this.changeOrder)) {
      $dara.Model.validateArray(this.changeOrder);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentChangeOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about change processes.
   */
  changeOrderList?: ListRecentChangeOrderResponseBodyChangeOrderList;
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The additional information that is returned.
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
   * D16979DC-4D42-************
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderList: 'ChangeOrderList',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderList: ListRecentChangeOrderResponseBodyChangeOrderList,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.changeOrderList && typeof (this.changeOrderList as any).validate === 'function') {
      (this.changeOrderList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

