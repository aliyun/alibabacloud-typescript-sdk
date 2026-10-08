// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecentChangeOrderResponseBodyChangeOrderListChangeOrder extends $dara.Model {
  appId?: string;
  batchCount?: number;
  batchType?: string;
  changeOrderDescription?: string;
  changeOrderId?: string;
  coType?: string;
  coTypeCode?: string;
  createTime?: string;
  createUserId?: string;
  finishTime?: string;
  groupId?: string;
  source?: string;
  status?: number;
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

