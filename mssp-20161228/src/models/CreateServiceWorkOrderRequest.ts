// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceWorkOrderRequest extends $dara.Model {
  /**
   * @remarks
   * Creator.
   * 
   * This parameter is required.
   * 
   * @example
   * 426556
   */
  creator?: string;
  /**
   * @remarks
   * Customer ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1477832102462645
   */
  customerId?: string;
  /**
   * @remarks
   * Duration in days.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  durationDay?: string;
  /**
   * @remarks
   * Attachment requirement.
   * 
   * This parameter is required.
   * 
   * @example
   * Y
   */
  isAttachment?: string;
  /**
   * @remarks
   * Is milestone.
   * 
   * @example
   * Y
   */
  isMilestone?: string;
  /**
   * @remarks
   * Whether a reminder is needed.
   * 
   * This parameter is required.
   * 
   * @example
   * Y
   */
  isWorkOrderNotify?: string;
  /**
   * @remarks
   * Number of days for advance notification.
   * 
   * @example
   * 5
   */
  notifyDay?: string;
  /**
   * @remarks
   * Notification ID.
   * 
   * @example
   * 10
   */
  notifyId?: number;
  /**
   * @remarks
   * Operation remarks.
   * 
   * This parameter is required.
   * 
   * @example
   * newly built
   */
  operateRemark?: string;
  /**
   * @remarks
   * Operation type.
   * 
   * This parameter is required.
   * 
   * @example
   * CREATE
   */
  operateType?: string;
  /**
   * @remarks
   * Operator.
   * 
   * This parameter is required.
   * 
   * @example
   * 426556
   */
  operator?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ownerId?: string;
  priority?: number;
  /**
   * @remarks
   * Start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1734788109000
   */
  startTime?: number;
  /**
   * @remarks
   * Work order details.
   * 
   * This parameter is required.
   * 
   * @example
   * {"questionDetail":"测试工单","answerDetail":""}
   */
  workOrderDetail?: string;
  /**
   * @remarks
   * Work order name.
   * 
   * This parameter is required.
   * 
   * @example
   * Delivery task of safety monthly report
   */
  workOrderName?: string;
  /**
   * @remarks
   * Work order source.
   * 
   * This parameter is required.
   * 
   * @example
   * Work order migration
   */
  workOrderSource?: string;
  /**
   * @remarks
   * Work order status.
   * 
   * This parameter is required.
   * 
   * @example
   * UNPROCESSED
   */
  workOrderStatus?: string;
  /**
   * @remarks
   * Work order type.
   * 
   * This parameter is required.
   * 
   * @example
   * MONTH_REPORT
   */
  workOrderType?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      customerId: 'CustomerId',
      durationDay: 'DurationDay',
      isAttachment: 'IsAttachment',
      isMilestone: 'IsMilestone',
      isWorkOrderNotify: 'IsWorkOrderNotify',
      notifyDay: 'NotifyDay',
      notifyId: 'NotifyId',
      operateRemark: 'OperateRemark',
      operateType: 'OperateType',
      operator: 'Operator',
      ownerId: 'OwnerId',
      priority: 'Priority',
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
      creator: 'string',
      customerId: 'string',
      durationDay: 'string',
      isAttachment: 'string',
      isMilestone: 'string',
      isWorkOrderNotify: 'string',
      notifyDay: 'string',
      notifyId: 'number',
      operateRemark: 'string',
      operateType: 'string',
      operator: 'string',
      ownerId: 'string',
      priority: 'number',
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

