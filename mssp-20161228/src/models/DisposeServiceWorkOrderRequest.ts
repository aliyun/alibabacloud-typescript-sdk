// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisposeServiceWorkOrderRequest extends $dara.Model {
  /**
   * @remarks
   * Attachment name.
   * 
   * @example
   * bbaa133c-0ac2-489f-9fc8-39f91c2e770c_20230301-20240403-服务工单列表.xlsx
   */
  attachmentName?: string;
  /**
   * @remarks
   * End time.
   * 
   * @example
   * 2024-04-14 00:00:00
   */
  endTime?: number;
  /**
   * @remarks
   * Forward to owner.
   * 
   * @example
   * 405639
   */
  forwardOwnerId?: string;
  /**
   * @remarks
   * Work order ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 23172
   */
  id?: number;
  /**
   * @remarks
   * Attachment requirement.
   * 
   * @example
   * Y
   */
  isAttachment?: string;
  /**
   * @remarks
   * Work order notification.
   * 
   * @example
   * Y
   */
  isWorkOrderNotify?: string;
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
   * 处理完成
   */
  operateRemark?: string;
  /**
   * @remarks
   * Processing type.
   * 
   * This parameter is required.
   * 
   * @example
   * PROCESSED
   */
  operateType?: string;
  /**
   * @remarks
   * Operator.
   * 
   * This parameter is required.
   * 
   * @example
   * 396120
   */
  operator?: string;
  /**
   * @remarks
   * Start time.
   * 
   * @example
   * 2024-04-02 00:00:00
   */
  startTime?: number;
  /**
   * @remarks
   * Upgrade owner.
   * 
   * @example
   * 336333
   */
  upgradeOwnerId?: string;
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
   * This parameter is required.
   * 
   * @example
   * 安全产品配置问题与超量提醒
   */
  workOrderName?: string;
  /**
   * @remarks
   * Work order status.
   * 
   * @example
   * PROCESSED
   */
  workOrderStatus?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentName: 'AttachmentName',
      endTime: 'EndTime',
      forwardOwnerId: 'ForwardOwnerId',
      id: 'Id',
      isAttachment: 'IsAttachment',
      isWorkOrderNotify: 'IsWorkOrderNotify',
      notifyId: 'NotifyId',
      operateRemark: 'OperateRemark',
      operateType: 'OperateType',
      operator: 'Operator',
      startTime: 'StartTime',
      upgradeOwnerId: 'UpgradeOwnerId',
      workOrderDetail: 'WorkOrderDetail',
      workOrderName: 'WorkOrderName',
      workOrderStatus: 'WorkOrderStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentName: 'string',
      endTime: 'number',
      forwardOwnerId: 'string',
      id: 'number',
      isAttachment: 'string',
      isWorkOrderNotify: 'string',
      notifyId: 'number',
      operateRemark: 'string',
      operateType: 'string',
      operator: 'string',
      startTime: 'number',
      upgradeOwnerId: 'string',
      workOrderDetail: 'string',
      workOrderName: 'string',
      workOrderStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

