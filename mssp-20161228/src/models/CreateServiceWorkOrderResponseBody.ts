// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateServiceWorkOrderResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Completion time.
   * 
   * @example
   * 1734788109000
   */
  completeTime?: number;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 1734788109000
   */
  createTime?: number;
  /**
   * @remarks
   * Creator.
   * 
   * @example
   * 426556
   */
  creator?: string;
  /**
   * @remarks
   * Customer ID.
   * 
   * @example
   * 1477832102462645
   */
  customerId?: string;
  /**
   * @remarks
   * End time.
   * 
   * @example
   * 1734788109000
   */
  endTime?: number;
  /**
   * @remarks
   * Primary key.
   * 
   * @example
   * 1978941
   */
  id?: number;
  /**
   * @remarks
   * Owner.
   * 
   * @example
   * 426556
   */
  ownerId?: string;
  /**
   * @remarks
   * Start time.
   * 
   * @example
   * 1734788109000
   */
  startTime?: number;
  /**
   * @remarks
   * Work order details.
   * 
   * @example
   * {"questionDetail":"测试工单","answerDetail":""}
   */
  workOrderDetail?: string;
  /**
   * @remarks
   * Work order name.
   * 
   * @example
   * Delivery task of safety monthly report
   */
  workOrderName?: string;
  /**
   * @remarks
   * Work order source.
   * 
   * @example
   * Work order migration
   */
  workOrderSource?: string;
  /**
   * @remarks
   * Work order status.
   * 
   * @example
   * UNPROCESSED
   */
  workOrderStatus?: string;
  /**
   * @remarks
   * Work order type.
   * 
   * @example
   * MONTH_REPORT
   */
  workOrderType?: string;
  static names(): { [key: string]: string } {
    return {
      completeTime: 'CompleteTime',
      createTime: 'CreateTime',
      creator: 'Creator',
      customerId: 'CustomerId',
      endTime: 'EndTime',
      id: 'Id',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      workOrderDetail: 'WorkOrderDetail',
      workOrderName: 'WorkOrderName',
      workOrderSource: 'WorkOrderSource',
      workOrderStatus: 'WorkOrderStatus',
      workOrderType: 'WorkOrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeTime: 'number',
      createTime: 'number',
      creator: 'string',
      customerId: 'string',
      endTime: 'number',
      id: 'number',
      ownerId: 'string',
      startTime: 'number',
      workOrderDetail: 'string',
      workOrderName: 'string',
      workOrderSource: 'string',
      workOrderStatus: 'string',
      workOrderType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceWorkOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * Interface status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: CreateServiceWorkOrderResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Prompt message of the returned result.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7DC44321-7AAE-51CD-8E5F-CEB968569042
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful.
   * 
   * - **true**: Call succeeded.
   * 
   * - **false**: Call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateServiceWorkOrderResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

