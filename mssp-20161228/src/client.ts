// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import GatewayClient from '@alicloud/gateway-pop';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateServiceLinkedRoleRequest extends $tea.Model {
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleResponseBody extends $tea.Model {
  /**
   * @example
   * 592B80F0-7674-56A4-9027-8A0A9ACDBD56
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceLinkedRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateServiceLinkedRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceWorkOrderRequest extends $tea.Model {
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
   * 新建
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
  /**
   * @remarks
   * Start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-01-21 15:25:25
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
   * 安全月报交付任务
   */
  workOrderName?: string;
  /**
   * @remarks
   * Work order source.
   * 
   * This parameter is required.
   * 
   * @example
   * 工单迁移
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
      isWorkOrderNotify: 'IsWorkOrderNotify',
      notifyDay: 'NotifyDay',
      notifyId: 'NotifyId',
      operateRemark: 'OperateRemark',
      operateType: 'OperateType',
      operator: 'Operator',
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
      creator: 'string',
      customerId: 'string',
      durationDay: 'string',
      isAttachment: 'string',
      isWorkOrderNotify: 'string',
      notifyDay: 'string',
      notifyId: 'number',
      operateRemark: 'string',
      operateType: 'string',
      operator: 'string',
      ownerId: 'string',
      startTime: 'number',
      workOrderDetail: 'string',
      workOrderName: 'string',
      workOrderSource: 'string',
      workOrderStatus: 'string',
      workOrderType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceWorkOrderResponseBody extends $tea.Model {
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
   * The prompt message of the returned result.
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
   * - **true**: The call was successful. - **false**: The call failed.
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceWorkOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceWorkOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateServiceWorkOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceLinkedRoleRequest extends $tea.Model {
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceLinkedRoleResponseBody extends $tea.Model {
  /**
   * @example
   * true
   */
  entityRoleGrant?: boolean;
  /**
   * @example
   * 02F8BBF3-2D61-5982-8911-EEB387BE3AF8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entityRoleGrant: 'EntityRoleGrant',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityRoleGrant: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceLinkedRoleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeServiceLinkedRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeServiceLinkedRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisposeServiceWorkOrderRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisposeServiceWorkOrderResponseBody extends $tea.Model {
  /**
   * @remarks
   * API response code.
   * 
   * @example
   * 200
   */
  code?: string;
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
   * ED520610-6231-5D80-BADD-A8CDC7BBC809
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful. - **true**: The call was successful. - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisposeServiceWorkOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisposeServiceWorkOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisposeServiceWorkOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisposeWorkTaskRequest extends $tea.Model {
  /**
   * @remarks
   * Operator.
   * 
   * This parameter is required.
   * 
   * @example
   * WB01089929
   */
  operator?: string;
  /**
   * @remarks
   * Operation remarks.
   * 
   * This parameter is required.
   * 
   * @example
   * 处理完成
   */
  optRemark?: string;
  /**
   * @remarks
   * Work order status.
   * 
   * This parameter is required.
   * 
   * @example
   * 8
   */
  status?: number;
  /**
   * @remarks
   * Work order ID, multiple IDs separated by commas.
   * 
   * This parameter is required.
   * 
   * @example
   * 10310
   */
  taskIds?: string;
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
      optRemark: 'OptRemark',
      status: 'Status',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      optRemark: 'string',
      status: 'number',
      taskIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisposeWorkTaskResponseBody extends $tea.Model {
  /**
   * @remarks
   * Interface response code.
   * 
   * @example
   * 200
   */
  code?: string;
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
   * Success.
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 86786E4C-6416-55CF-9AB6-5E275B68801D
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful. - **true**: The call was successful. - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisposeWorkTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisposeWorkTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisposeWorkTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmDetailByIdRequest extends $tea.Model {
  /**
   * @remarks
   * Primary key ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 20077761
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmDetailByIdResponseBody extends $tea.Model {
  /**
   * @remarks
   * API response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetAlarmDetailByIdResponseBodyData;
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
   * Return message.
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
   * 5C1B0668-442C-57AE-9668-D894B0B012EB
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the operation was successful: - true: Success. - false: Failure.
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
      data: GetAlarmDetailByIdResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmDetailByIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAlarmDetailByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAlarmDetailByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttackedAssetDealRequest extends $tea.Model {
  /**
   * @remarks
   * Time filter type, supporting filtering by the last 7 days, the last 30 days, the last half year, or custom time periods.
   * 
   * This parameter is required.
   * 
   * @example
   * month
   */
  dateType?: string;
  /**
   * @remarks
   * End time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1732268720000
   */
  endDate?: number;
  /**
   * @remarks
   * Start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1732268720000
   */
  startDate?: number;
  /**
   * @remarks
   * Source of the alert event.
   * 
   * @example
   * 暂时无需传参，有问题请联系管理员
   */
  suspEventSource?: string;
  static names(): { [key: string]: string } {
    return {
      dateType: 'DateType',
      endDate: 'EndDate',
      startDate: 'StartDate',
      suspEventSource: 'SuspEventSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateType: 'string',
      endDate: 'number',
      startDate: 'number',
      suspEventSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttackedAssetDealResponseBody extends $tea.Model {
  /**
   * @remarks
   * Interface return code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data query result.
   */
  data?: GetAttackedAssetDealResponseBodyData;
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
   * Return message.
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
   * 1E74F11C-B4A8-5774-962C-02003BA8504E
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the query was successful.<br />
   * **Enum values:**
   * * true: Success.
   * * false: Failure.
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
      data: GetAttackedAssetDealResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttackedAssetDealResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAttackedAssetDealResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAttackedAssetDealResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineSummaryRequest extends $tea.Model {
  /**
   * @remarks
   * Time filter type, supports filtering by the last 7 days, the last 30 days, the last half year, or custom time periods.
   * 
   * This parameter is required.
   * 
   * @example
   * month
   */
  dateType?: string;
  /**
   * @remarks
   * End time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1732156885986
   */
  endDate?: number;
  /**
   * @remarks
   * Start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1729478485000
   */
  startDate?: number;
  /**
   * @remarks
   * Alert event source.
   * 
   * @example
   * 该字段暂未使用，有问题请联系管理员
   */
  suspEventSource?: string;
  static names(): { [key: string]: string } {
    return {
      dateType: 'DateType',
      endDate: 'EndDate',
      startDate: 'StartDate',
      suspEventSource: 'SuspEventSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateType: 'string',
      endDate: 'number',
      startDate: 'number',
      suspEventSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineSummaryResponseBody extends $tea.Model {
  /**
   * @remarks
   * Interface response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetBaselineSummaryResponseBodyData;
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
   * Prompt message for the returned result.
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
   * 67D61738-5E38-5164-947A-34E3850D493A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Values: true: success; false: failure.
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
      data: GetBaselineSummaryResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineSummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBaselineSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetBaselineSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsoleScoreRequest extends $tea.Model {
  /**
   * @remarks
   * Filter time type, supports filtering by the last 7 days, last 30 days, last half year, or custom. If empty, it represents the last 7 days.
   * 
   * This parameter is required.
   * 
   * @example
   * month
   */
  dateType?: string;
  /**
   * @remarks
   * End date.
   * 
   * This parameter is required.
   * 
   * @example
   * 1732156885986
   */
  endDate?: number;
  /**
   * @remarks
   * Start date.
   * 
   * This parameter is required.
   * 
   * @example
   * 1729478485000
   */
  startDate?: number;
  /**
   * @remarks
   * Source of alert events.
   * 
   * @example
   * 该字段暂未使用，有问题请联系管理员
   */
  suspEventSource?: string;
  static names(): { [key: string]: string } {
    return {
      dateType: 'DateType',
      endDate: 'EndDate',
      startDate: 'StartDate',
      suspEventSource: 'SuspEventSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateType: 'string',
      endDate: 'number',
      startDate: 'number',
      suspEventSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsoleScoreResponseBody extends $tea.Model {
  /**
   * @remarks
   * Interface response code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   * 
   * @example
   * {
   *     "score": "94.00",
   *     "consoleScoreTrendDTOS": [
   *         {
   *             "date": "20241009",
   *             "score": "100.0"
   *         }
   *     ],
   *     "cyclicYearOverYear": "-6.00",
   *     "recordDate": "20241209",
   *     "weeklyYearOverYear": "1.62",
   *     "aboveWholeNetworkUserRatio": "6.25",
   *     "aliUid": "1601097845544644",
   *     "detailJson": "[{\\"detailDTO\\":[{\\"count\\":0,\\"itemName\\":\\"应用漏洞POC验证\\",\\"mark\\":\\"1\\"},{\\"count\\":0,\\"itemName\\":\\"未授权访问漏洞（公网暴露）\\",\\"mark\\":\\"1\\"},{\\"count\\":0,\\"itemName\\":\\"后台弱口令漏洞（公网暴露）\\",\\"mark\\":\\"1\\"},{\\"count\\":0,\\"itemName\\":\\"文件上传漏洞（公网暴露）\\",\\"mark\\":\\"1\\"}],\\"markRate\\":\\"0.5\\",\\"markType\\":\\"vul\\"},{\\"detailDTO\\":[{\\"count\\":12,\\"itemName\\":\\"WAF3.0回源配置不正确\\",\\"mark\\":\\"1\\"},{\\"count\\":0,\\"itemName\\":\\"AK泄露检查未开启\\",\\"mark\\":\\"1\\"},{\\"count\\":0,\\"itemName\\":\\"DNAT管理端口开放\\",\\"mark\\":\\"1\\"},{\\"count\\":0,\\"itemName\\":\\"高危端口暴露\\",\\"mark\\":\\"0.5\\"}],\\"markRate\\":\\"0.5\\",\\"markType\\":\\"risk\\"}]"
   * }
   */
  data?: any;
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
   * Prompt message for the result returned.
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
   * D0937B0F-9180-5F70-B6ED-0BA22591627F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. true means success, false means failure.
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
      data: 'any',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsoleScoreResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetConsoleScoreResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetConsoleScoreResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetailByIdRequest extends $tea.Model {
  /**
   * @remarks
   * Primary key ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 22
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetailByIdResponseBody extends $tea.Model {
  /**
   * @remarks
   * Interface return code.
   * 
   * @example
   * 404
   */
  code?: string;
  /**
   * @remarks
   * Data query result.
   */
  data?: GetDetailByIdResponseBodyData;
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
   * Return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * DAB46EC5-3746-59C4-B6D2-469F442EC73F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Values: - **true**: indicates a successful call. - **false**: indicates a failed call.
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
      data: GetDetailByIdResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetailByIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDetailByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDetailByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentDownloadUrlRequest extends $tea.Model {
  /**
   * @remarks
   * Document management ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 175815
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentDownloadUrlResponseBody extends $tea.Model {
  /**
   * @remarks
   * API status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * OSS file access URL.
   * 
   * @example
   * https://oos-cn.ctyunapi.cn/example-bucket/test/1.jpg
   */
  data?: string;
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
   * Message of the returned result.
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
   * C7BE80B4-7692-54FA-AB22-2A7DF08C4754
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful: - **true**: The call was successful. - **false**: The call failed.
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
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentDownloadUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDocumentDownloadUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDocumentDownloadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentPageRequest extends $tea.Model {
  /**
   * @remarks
   * Current page.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Delivered by.
   * 
   * @example
   * 张三
   */
  deliveredBy?: string;
  /**
   * @remarks
   * Document name.
   * 
   * @example
   * 季度报告
   */
  documentName?: string;
  /**
   * @remarks
   * Document type.
   * 
   * @example
   * 0
   */
  documentType?: string;
  /**
   * @remarks
   * Page size.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Report type.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  reportType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      deliveredBy: 'DeliveredBy',
      documentName: 'DocumentName',
      documentType: 'DocumentType',
      pageSize: 'PageSize',
      reportType: 'ReportType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      deliveredBy: 'string',
      documentName: 'string',
      documentType: 'string',
      pageSize: 'number',
      reportType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentPageResponseBody extends $tea.Model {
  /**
   * @remarks
   * Interface response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Response data.
   */
  data?: GetDocumentPageResponseBodyData[];
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
   * Prompt message for the response result.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Pagination information.
   */
  pageInfo?: GetDocumentPageResponseBodyPageInfo;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 04DAD7B4-E1DA-5C2C-8E5C-A1EDC880CF60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. - **true**: The call was successful. - **false**: The call failed.
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
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetDocumentPageResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageInfo: GetDocumentPageResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentPageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDocumentPageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDocumentPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentSummaryRequest extends $tea.Model {
  /**
   * @remarks
   * Type of service report.
   * 
   * @example
   * 1
   */
  reportType?: string;
  static names(): { [key: string]: string } {
    return {
      reportType: 'ReportType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentSummaryResponseBody extends $tea.Model {
  /**
   * @remarks
   * Interface return code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data query result.
   */
  data?: GetDocumentSummaryResponseBodyData;
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
   * Prompt message for the returned result.
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
   * 7903F2DE-D9EE-5D16-8A08-E9223E54B281
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful. Values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * True
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
      data: GetDocumentSummaryResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentSummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDocumentSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDocumentSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecentDocumentRequest extends $tea.Model {
  /**
   * @remarks
   * Filter time type, supports filtering by the last 7 days, the last 30 days, the last half year, or custom time ranges.
   * 
   * This parameter is required.
   * 
   * @example
   * 该字段暂未使用，有问题请联系管理员
   */
  dateType?: string;
  /**
   * @remarks
   * End time.
   * 
   * This parameter is required.
   * 
   * @example
   * 该字段暂未使用，有问题请联系管理员
   */
  endDate?: number;
  /**
   * @remarks
   * Start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 该字段暂未使用，有问题请联系管理员
   */
  startDate?: number;
  /**
   * @remarks
   * Alert event source.
   * 
   * @example
   * 该字段暂未使用，有问题请联系管理员
   */
  suspEventSource?: string;
  static names(): { [key: string]: string } {
    return {
      dateType: 'DateType',
      endDate: 'EndDate',
      startDate: 'StartDate',
      suspEventSource: 'SuspEventSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateType: 'string',
      endDate: 'number',
      startDate: 'number',
      suspEventSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecentDocumentResponseBody extends $tea.Model {
  /**
   * @remarks
   * Interface response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetRecentDocumentResponseBodyData[];
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
   * Response message.
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
   * 4916FA8D-F294-518D-B373-8B59D63CAB19
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful. - **true**: The call was successful. - **false**: The call failed.
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
      data: { 'type': 'array', 'itemType': GetRecentDocumentResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecentDocumentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRecentDocumentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRecentDocumentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSafetyCoverRequest extends $tea.Model {
  /**
   * @remarks
   * Filter time type, supports filtering by the last 7 days, the last 30 days, the last half year, or custom time periods.
   * 
   * This parameter is required.
   * 
   * @example
   * month
   */
  dateType?: string;
  /**
   * @remarks
   * End time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1732268720000
   */
  endDate?: number;
  /**
   * @remarks
   * Start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1732255620000
   */
  startDate?: number;
  /**
   * @remarks
   * Alert event source.
   * 
   * @example
   * 该接口不用传
   */
  suspEventSource?: string;
  static names(): { [key: string]: string } {
    return {
      dateType: 'DateType',
      endDate: 'EndDate',
      startDate: 'StartDate',
      suspEventSource: 'SuspEventSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateType: 'string',
      endDate: 'number',
      startDate: 'number',
      suspEventSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSafetyCoverResponseBody extends $tea.Model {
  /**
   * @remarks
   * API return code.
   * 
   * @example
   * 404
   */
  code?: string;
  /**
   * @remarks
   * Data query result.
   */
  data?: GetSafetyCoverResponseBodyData;
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
   * Message of the response result.
   * 
   * @example
   * system error
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 564f8bb9-df3c-42a0-877a-b35d48f66603
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful:
   * - **true**: Call succeeded.
   * - **false**: Call failed.
   * 
   * @example
   * True
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
      data: GetSafetyCoverResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSafetyCoverResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSafetyCoverResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSafetyCoverResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSowListRequest extends $tea.Model {
  /**
   * @remarks
   * Filter time type, supports filtering by the last 7 days, the last 30 days, the last half year, or custom time ranges.
   * 
   * This parameter is required.
   * 
   * @example
   * month
   */
  dateType?: string;
  /**
   * @remarks
   * End time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1732156885986
   */
  endDate?: number;
  /**
   * @remarks
   * Start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1729478485000
   */
  startDate?: number;
  /**
   * @remarks
   * Alert event source.
   * 
   * @example
   * 该字段暂未使用，有问题请联系管理员
   */
  suspEventSource?: string;
  static names(): { [key: string]: string } {
    return {
      dateType: 'DateType',
      endDate: 'EndDate',
      startDate: 'StartDate',
      suspEventSource: 'SuspEventSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateType: 'string',
      endDate: 'number',
      startDate: 'number',
      suspEventSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSowListResponseBody extends $tea.Model {
  /**
   * @remarks
   * Interface response code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetSowListResponseBodyData[];
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
   * Prompt information for the returned result.
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
   * FA8883BC-CB18-5E28-A113-8249917CA05E
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful. - **true**: The call was successful. - **false**: The call failed.
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
      data: { 'type': 'array', 'itemType': GetSowListResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSowListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSowListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSowListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventPageRequest extends $tea.Model {
  /**
   * @remarks
   * Alarm end time.
   * 
   * @example
   * 1732515522000
   */
  alarmEndTime?: number;
  /**
   * @remarks
   * Alarm start time.
   * 
   * @example
   * 1722515522000
   */
  alarmStartTime?: number;
  /**
   * @remarks
   * Current page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Number of items per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Alarm source.
   * 
   * @example
   * SUSP_EVENT
   */
  source?: string;
  /**
   * @remarks
   * Disposal status.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      alarmEndTime: 'AlarmEndTime',
      alarmStartTime: 'AlarmStartTime',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      source: 'Source',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmEndTime: 'number',
      alarmStartTime: 'number',
      currentPage: 'number',
      pageSize: 'number',
      source: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventPageResponseBody extends $tea.Model {
  /**
   * @remarks
   * API response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetSuspEventPageResponseBodyData[];
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
   * system error
   */
  message?: string;
  /**
   * @remarks
   * Pagination information.
   */
  pageInfo?: GetSuspEventPageResponseBodyPageInfo;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * AFA6F7B7-7C4B-58BB-B8FB-E0FFA4483561
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful.
   * - **true**: The call was successful. - **false**: The call failed.
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
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetSuspEventPageResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageInfo: GetSuspEventPageResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventPageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSuspEventPageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSuspEventPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventSummaryRequest extends $tea.Model {
  /**
   * @remarks
   * Filter time type. Supports filtering by the last 7 days, the last 30 days, the last half year, or custom time ranges.
   * 
   * This parameter is required.
   * 
   * @example
   * month
   */
  dateType?: string;
  /**
   * @remarks
   * End time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1732156885986
   */
  endDate?: number;
  /**
   * @remarks
   * Start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1729478485000
   */
  startDate?: number;
  /**
   * @remarks
   * Alert event source.
   * 
   * @example
   * SUSP_EVENT
   */
  suspEventSource?: string;
  static names(): { [key: string]: string } {
    return {
      dateType: 'DateType',
      endDate: 'EndDate',
      startDate: 'StartDate',
      suspEventSource: 'SuspEventSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateType: 'string',
      endDate: 'number',
      startDate: 'number',
      suspEventSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventSummaryResponseBody extends $tea.Model {
  /**
   * @remarks
   * API response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetSuspEventSummaryResponseBodyData;
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
   * Prompt message for the returned result.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9B2DAE9B-B901-5818-AFEF-E5637D938280
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful.
   * - true: Call succeeded.
   * - false: Call failed.
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
      data: GetSuspEventSummaryResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventSummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSuspEventSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSuspEventSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspPageSummaryResponseBody extends $tea.Model {
  /**
   * @remarks
   * Interface response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetSuspPageSummaryResponseBodyData;
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
   * Prompt message for the result returned.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * EF801DD1-D934-51B3-92D4-776CE17B184F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * - **true**: Call succeeded.
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
      data: GetSuspPageSummaryResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspPageSummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSuspPageSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSuspPageSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * Interface response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetUserStatusResponseBodyData;
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
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * D8DBD769-613E-5E6B-A9FD-B622375B152D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. - **true**: The call was successful. - **false**: The call failed.
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
      data: GetUserStatusResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUserStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulItemPageRequest extends $tea.Model {
  /**
   * @remarks
   * Vulnerability alias.
   * 
   * @example
   * RHSA-2018:3665-Important: NetworkManager security update
   */
  aliasName?: string;
  /**
   * @remarks
   * Current page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Processing status. y: processed; n: unprocessed; h: processing.
   * 
   * @example
   * n
   */
  dealed?: string;
  /**
   * @remarks
   * Risk level.
   * 
   * @example
   * later
   */
  level?: string;
  /**
   * @remarks
   * Vulnerability name.
   * 
   * @example
   * oval:com.redhat.rhsa:def:20183665
   */
  name?: string;
  /**
   * @remarks
   * Number of items to display per page in the returned data.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Vulnerability type.
   * 
   * @example
   * sca
   */
  scanType?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      currentPage: 'CurrentPage',
      dealed: 'Dealed',
      level: 'Level',
      name: 'Name',
      pageSize: 'PageSize',
      scanType: 'ScanType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      currentPage: 'number',
      dealed: 'string',
      level: 'string',
      name: 'string',
      pageSize: 'number',
      scanType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulItemPageResponseBody extends $tea.Model {
  /**
   * @remarks
   * API response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetVulItemPageResponseBodyData[];
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
   * Prompt message for the returned result.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Pagination information.
   */
  pageInfo?: GetVulItemPageResponseBodyPageInfo;
  /**
   * @remarks
   * Request response.
   * 
   * This parameter is required.
   * 
   * @example
   * 02F8BBF3-2D61-5982-8911-EEB387BE3AF8
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful.
   * true: Call succeeded. false: Call failed.
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
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetVulItemPageResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageInfo: GetVulItemPageResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulItemPageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetVulItemPageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVulItemPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulListByIdRequest extends $tea.Model {
  /**
   * @remarks
   * Current page
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Whether it has been processed; y: processed; n: not processed
   * 
   * @example
   * n
   */
  dealed?: string;
  /**
   * @remarks
   * Primary key ID
   * 
   * This parameter is required.
   * 
   * @example
   * 4209205
   */
  id?: number;
  /**
   * @remarks
   * Risk level
   * 
   * @example
   * asap,later,nntf
   */
  necessity?: string;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Asset information of the vulnerability to be queried, which can be set as asset name, public IP, or private IP.
   * 
   * @example
   * production_nat_cn-hangzhou_zone_105
   */
  remark?: string;
  /**
   * @remarks
   * UUID of the server with the vulnerability to be queried. Multiple UUIDs should be separated by a comma (,).
   * 
   * @example
   * 3615b908-995a-4edb-bc85-1981b4e94ba0,9c52cf9a-d8ba-4e31-ae06-500b879ee4e6,4b7de3cf-c4ac-42fc-8804-35070493dc29,f3c01525-0777-4c97-88d9-bec11afd4a6a,a80bd516-c4f3-4c27-a169-c8abfaf9e89e
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      dealed: 'Dealed',
      id: 'Id',
      necessity: 'Necessity',
      pageSize: 'PageSize',
      remark: 'Remark',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      dealed: 'string',
      id: 'number',
      necessity: 'string',
      pageSize: 'number',
      remark: 'string',
      uuids: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulListByIdResponseBody extends $tea.Model {
  /**
   * @remarks
   * API response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetVulListByIdResponseBodyData[];
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
   * Prompt message for the returned result.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Pagination information.
   */
  pageInfo?: GetVulListByIdResponseBodyPageInfo;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * D38B3D2F-67FD-57FF-87D1-C431D2C70F76
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Values: - **true**: Yes. - **false**: No.
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
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetVulListByIdResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageInfo: GetVulListByIdResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulListByIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetVulListByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVulListByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulPageSummaryResponseBody extends $tea.Model {
  /**
   * @remarks
   * Interface return code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data query result.
   */
  data?: GetVulPageSummaryResponseBodyData;
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
   * Return message.
   * 
   * @example
   * operation success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * A3A575C8-80F9-5F04-AA24-CCAC246884A3
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful. - **true**: The call was successful. - **false**: The call failed.
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
      data: GetVulPageSummaryResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulPageSummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetVulPageSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVulPageSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulSummaryRequest extends $tea.Model {
  /**
   * @remarks
   * Filter time type. Supports filtering by the last 7 days, the last 30 days, the last half year, or a custom time range.
   * 
   * This parameter is required.
   * 
   * @example
   * month
   */
  dateType?: string;
  /**
   * @remarks
   * End time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1732156885986
   */
  endDate?: number;
  /**
   * @remarks
   * Start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1729478485000
   */
  startDate?: number;
  /**
   * @remarks
   * Alert event source.
   * 
   * @example
   * 该字段暂未使用，有问题请联系管理员
   */
  suspEventSource?: string;
  static names(): { [key: string]: string } {
    return {
      dateType: 'DateType',
      endDate: 'EndDate',
      startDate: 'StartDate',
      suspEventSource: 'SuspEventSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateType: 'string',
      endDate: 'number',
      startDate: 'number',
      suspEventSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulSummaryResponseBody extends $tea.Model {
  /**
   * @remarks
   * Interface response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetVulSummaryResponseBodyData;
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
   * Prompt message for the response result.
   * 
   * @example
   * system error
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * EF801DD1-D934-51B3-92D4-776CE17B184F
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful. - **true**: The call was successful. - **false**: The call failed.
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
      data: GetVulSummaryResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulSummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetVulSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVulSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkTaskSummaryRequest extends $tea.Model {
  /**
   * @remarks
   * Filter time type, supports filtering by the last 7 days, the last 30 days, the last half year, or custom time periods.
   * 
   * This parameter is required.
   * 
   * @example
   * month
   */
  dateType?: string;
  /**
   * @remarks
   * End time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1732156885986
   */
  endDate?: number;
  /**
   * @remarks
   * Start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1729478485000
   */
  startDate?: number;
  /**
   * @remarks
   * Alert event source.
   * 
   * @example
   * 该字段暂时未用，有问题请联系管理员
   */
  suspEventSource?: string;
  static names(): { [key: string]: string } {
    return {
      dateType: 'DateType',
      endDate: 'EndDate',
      startDate: 'StartDate',
      suspEventSource: 'SuspEventSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateType: 'string',
      endDate: 'number',
      startDate: 'number',
      suspEventSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkTaskSummaryResponseBody extends $tea.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetWorkTaskSummaryResponseBodyData;
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
   * Prompt message for the response result.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * EF801DD1-D934-51B3-92D4-776CE17B184F
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful. - **true**: The call was successful. - **false**: The call failed.
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
      data: GetWorkTaskSummaryResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkTaskSummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWorkTaskSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetWorkTaskSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageServiceCustomerRequest extends $tea.Model {
  /**
   * @remarks
   * Authorization status.
   * 
   * @example
   * 1
   */
  authStatus?: number;
  /**
   * @remarks
   * Cloud Monitoring - Alert authorization status.
   * 
   * @example
   * 1
   */
  cmAuthStatus?: number;
  /**
   * @remarks
   * The page number of the query result, default is 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * End time. The format is a Unix timestamp, which is the number of milliseconds since January 1, 1970.
   * 
   * @example
   * 1710641101123
   */
  endTime?: number;
  /**
   * @remarks
   * Cloud Security - Alert authorization status.
   * 
   * @example
   * 1
   */
  monitorAuthStatus?: number;
  /**
   * @remarks
   * Number of records per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Start time. The format is a Unix timestamp, which is the number of milliseconds since January 1, 1970.
   * 
   * @example
   * 1710641101000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      authStatus: 'AuthStatus',
      cmAuthStatus: 'CmAuthStatus',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      monitorAuthStatus: 'MonitorAuthStatus',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authStatus: 'number',
      cmAuthStatus: 'number',
      currentPage: 'number',
      endTime: 'number',
      monitorAuthStatus: 'number',
      pageSize: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageServiceCustomerResponseBody extends $tea.Model {
  /**
   * @remarks
   * Interface return code.
   * 
   * @example
   * System error or openapi error
   */
  code?: string;
  /**
   * @remarks
   * Data query results.
   */
  data?: PageServiceCustomerResponseBodyData[];
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
   * Return message. When the request is successful, it returns a success message; when the request fails, it returns the reason for the failure.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Pagination information.
   */
  pageInfo?: PageServiceCustomerResponseBodyPageInfo;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 808A307F-9513-5099-AAA5-98D4EF199140
   */
  requestId?: string;
  /**
   * @remarks
   * Request return status.
   * - true: Success.
   * - false: Failure.
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
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': PageServiceCustomerResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageInfo: PageServiceCustomerResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageServiceCustomerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PageServiceCustomerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PageServiceCustomerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCustomEventRequest extends $tea.Model {
  /**
   * @remarks
   * User ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1214484929940219
   */
  customerId?: string;
  /**
   * @remarks
   * Data source.
   * 
   * @example
   * aegis_suspicious_event
   */
  dataSource?: string;
  /**
   * @remarks
   * Event details.
   * 
   * @example
   * 疑似病毒木马启动运行。
   */
  eventDescription?: string;
  /**
   * @remarks
   * Alert event details.
   * 
   * @example
   * [{"name":"提示","type":"text","value":"在您的系统上发现可疑进程启动行为，通常与病毒木马或入侵事件相关"},{"name":"ATT&CK攻击阶段","type":"text","value":"代码执行"},{"name":"恶意行为","type":"text","value":"可疑的漏洞利用代码执行"},{"name":"规则类型","type":"text","value":"进程启动"},{"name":"规则引擎","type":"text","value":"精准攻击识别引擎"},{"name":"处置动作","type":"text","value":"阻断行为"},{"name":"进程路径","type":"text","value":"/usr/bin/python3.9"},{"name":"命令行","type":"text","value":"python3 /root/poc/python/cve-2018-15473.py --username root --port 22"},{"name":"父进程路径","type":"text","value":"/bin/gunkit"},{"name":"父进程命令行","type":"text","value":"gunkit serve-grpc --addr unix:///data/gunkit-grpc.sock"},{"name":"进程ID","type":"text","value":"22714"},{"name":"父进程ID","type":"text","value":"2986"},{"name":"描述","type":"text","value":"主动防御检测到可疑进程启动行为，这类可疑进程通常存在于特殊的系统目录，或通过后缀伪装成文档/音频/图片等文件诱导用户运行，该异常行为已被成功拦截"},{"name":"处置建议","type":"text","value":"请您及时排查是否是正常的业务操作，如果您觉得此次拦截是非预期的，那您可以在主动防御 - 恶意行为防御页面中，关闭“可疑进程启动“规则集或者将受影响机器从管理主机中移除"},{"name":"父进程关系","type":"processChain","value":"1:::/usr/lib/systemd/systemd --switched-root --system --deserialize 22 &&& 2939:::/usr/local/bin/containerd-shim-runc-v2 -namespace moby -id 270f164903b47d4e219b410b8d11d9079a7ad1bac8133aea604598300d3b03d5 -address /run/containerd/containerd.sock &&& 2962:::/usr/bin/python3 /usr/bin/supervisord -n &&& 2986:::gunkit serve-grpc --addr unix:///data/gunkit-grpc.sock"}]
   */
  eventDetails?: string;
  /**
   * @remarks
   * Event name.
   * 
   * This parameter is required.
   * 
   * @example
   * 客户端离线
   */
  eventName?: string;
  /**
   * @remarks
   * Event type.
   * 
   * This parameter is required.
   * 
   * @example
   * SUSP_CUSTOM_CFW
   */
  eventType?: string;
  /**
   * @remarks
   * Alert discovery time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-04-23 14:47:34
   */
  findTime?: number;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * i-uf60h3ns25bzq9eyf8ps
   */
  instanceId?: string;
  /**
   * @remarks
   * Instance name.
   * 
   * @example
   * 猫吉-售卖-MDR扫描器集群1
   */
  instanceName?: string;
  /**
   * @remarks
   * Whether to send.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  isSend?: string;
  /**
   * @remarks
   * Event level.
   * 
   * This parameter is required.
   * 
   * @example
   * serious
   */
  level?: string;
  /**
   * @remarks
   * The first occurrence time of the alert event.
   * 
   * @example
   * 1724956996000
   */
  occurrenceTime?: number;
  ownerId?: string;
  /**
   * @remarks
   * Product name.
   * 
   * @example
   * CloudSecCenter
   */
  product?: string;
  /**
   * @remarks
   * Unique ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 68888f02-98f2-492b-a2b2-5b13295755b7
   */
  uniqueId?: string;
  /**
   * @remarks
   * UUID.
   * 
   * @example
   * 93B6CDAB-7D2E-33D2-9EBA-25D561A2E95F
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      customerId: 'CustomerId',
      dataSource: 'DataSource',
      eventDescription: 'EventDescription',
      eventDetails: 'EventDetails',
      eventName: 'EventName',
      eventType: 'EventType',
      findTime: 'FindTime',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      isSend: 'IsSend',
      level: 'Level',
      occurrenceTime: 'OccurrenceTime',
      ownerId: 'OwnerId',
      product: 'Product',
      uniqueId: 'UniqueId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerId: 'string',
      dataSource: 'string',
      eventDescription: 'string',
      eventDetails: 'string',
      eventName: 'string',
      eventType: 'string',
      findTime: 'number',
      instanceId: 'string',
      instanceName: 'string',
      isSend: 'string',
      level: 'string',
      occurrenceTime: 'number',
      ownerId: 'string',
      product: 'string',
      uniqueId: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCustomEventResponseBody extends $tea.Model {
  /**
   * @remarks
   * Interface response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Interface return data.
   */
  data?: SendCustomEventResponseBodyData;
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
   * Return message. When the request is successful, it returns a success message; when the request fails, it returns the reason for the failure.
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
   * 606EB377-155D-5AEB-AC4F-F013444A4C45
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful.
   * 
   * - true: Call succeeded.
   * 
   * - false: Call failed.
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
      data: SendCustomEventResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCustomEventResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendCustomEventResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendCustomEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceWorkOrderResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Completion time.
   * 
   * @example
   * 2024-03-07 16:45:01
   */
  completeTime?: number;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2024-10-04T02:19:55Z
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
   * 24-03-11 00:00:00
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
   * 2021-01-21 15:25:25
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
   * 安全月报交付任务
   */
  workOrderName?: string;
  /**
   * @remarks
   * Work order source.
   * 
   * @example
   * 工单迁移
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmDetailByIdResponseBodyDataEventDetails extends $tea.Model {
  /**
   * @remarks
   * Alarm event display name.
   * 
   * @example
   * Login with unusual location
   */
  nameDisplay?: string;
  /**
   * @remarks
   * Alarm event type.
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * Path where the alarm event occurred.
   * 
   * @example
   * /etc/crontab
   */
  value?: string;
  /**
   * @remarks
   * Path where the alarm event occurred.
   * 
   * @example
   * /etc/crontab
   */
  valueDisplay?: string;
  static names(): { [key: string]: string } {
    return {
      nameDisplay: 'NameDisplay',
      type: 'Type',
      value: 'Value',
      valueDisplay: 'ValueDisplay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameDisplay: 'string',
      type: 'string',
      value: 'string',
      valueDisplay: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmDetailByIdResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Alarm event type.
   * 
   * @example
   * Unusual Logon
   */
  alarmEventType?: string;
  /**
   * @remarks
   * Alarm event type.
   * 
   * @example
   * Login with unusual location
   */
  alarmEventTypeDisplay?: string;
  /**
   * @remarks
   * Alarm ID.
   * 
   * @example
   * 202427220
   */
  alarmId?: number;
  /**
   * @remarks
   * Alarm name.
   * 
   * @example
   * 负载均衡可挂载服务器数量告警
   */
  alarmName?: string;
  /**
   * @remarks
   * Alarm source.
   * 
   * @example
   * SUSP_EVENT
   */
  alarmSource?: string;
  /**
   * @remarks
   * Latest alarm time.
   * 
   * @example
   * 2018-09-26 01:51:01
   */
  alarmTime?: string;
  /**
   * @remarks
   * Analysis process.
   * 
   * @example
   * [{"value":"服务器可能已被黑客攻击，存在恶意进程在运行。 分析过程：告警显示，服务端存在一个名为”dns.exe”的进程在访问”polling.burpcollaborator.net”，这是一个被黑名单列出的恶意域名。在正常情况下,”dns.exe”不应该单独存在于系统的路径下，并且也不应该访问这类恶意域名。因此，这个进程可能是黑客留下的恶意进程。","key":"结论"},{"value":"尽快对服务器进行全面扫描，清除恶意进程。同时，联系网络安全专家进行深入调查，以确定是否有其他潜在的安全威胁。","key":"处置建议"}]
   */
  analysisResult?: string;
  /**
   * @remarks
   * Whether high-protection mode is enabled. true means enabled, false means not enabled.
   * 
   * @example
   * false
   */
  containHwMode?: boolean;
  /**
   * @remarks
   * Alarm handling time.
   * 
   * @example
   * 2018-09-26 01:51:01
   */
  dealTime?: string;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * webshell
   */
  desc?: string;
  /**
   * @remarks
   * Event details information.
   */
  eventDetails?: GetAlarmDetailByIdResponseBodyDataEventDetails[];
  /**
   * @remarks
   * Alarm level.
   * 
   * @example
   * suspicious
   */
  eventLevel?: string;
  /**
   * @remarks
   * Primary key ID of the work order.
   * 
   * @example
   * 9772
   */
  id?: number;
  /**
   * @remarks
   * Affected asset.
   * 
   * @example
   * nginx
   */
  instanceName?: string;
  /**
   * @remarks
   * Public IP.
   * 
   * @example
   * 47.116.126.79
   */
  internetIp?: string;
  /**
   * @remarks
   * Private IP.
   * 
   * @example
   * 172.19.195.176
   */
  intranetIp?: string;
  /**
   * @remarks
   * First occurrence time
   * 
   * @example
   * 2018-09-26 01:51:01
   */
  occurrenceTime?: string;
  /**
   * @remarks
   * Owner.
   * 
   * @example
   * 324546
   */
  ownerId?: string;
  /**
   * @remarks
   * Disposal method.
   * 
   * @example
   * 192.168.XX.XX
   */
  remark?: string;
  /**
   * @remarks
   * Handling status.
   * 
   * @example
   * 要查询的告警事件状态。取值：
   * 
   * 0：全部
   * 1：待处理
   * 2：已忽略
   * 4：已确认
   * 8：已标记为误报
   * 16：处理中
   * 32：处理完毕
   * 64：已经过期
   * 128：已经删除
   * 512：自动拦截中
   * 513：自动拦截完毕
   */
  status?: string;
  /**
   * @remarks
   * ATT&CK tactic name.
   * 
   * @example
   * Malicious scripts-Malicious script code execution
   */
  tacticDisplayName?: string;
  static names(): { [key: string]: string } {
    return {
      alarmEventType: 'AlarmEventType',
      alarmEventTypeDisplay: 'AlarmEventTypeDisplay',
      alarmId: 'AlarmId',
      alarmName: 'AlarmName',
      alarmSource: 'AlarmSource',
      alarmTime: 'AlarmTime',
      analysisResult: 'AnalysisResult',
      containHwMode: 'ContainHwMode',
      dealTime: 'DealTime',
      desc: 'Desc',
      eventDetails: 'EventDetails',
      eventLevel: 'EventLevel',
      id: 'Id',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      occurrenceTime: 'OccurrenceTime',
      ownerId: 'OwnerId',
      remark: 'Remark',
      status: 'Status',
      tacticDisplayName: 'TacticDisplayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmEventType: 'string',
      alarmEventTypeDisplay: 'string',
      alarmId: 'number',
      alarmName: 'string',
      alarmSource: 'string',
      alarmTime: 'string',
      analysisResult: 'string',
      containHwMode: 'boolean',
      dealTime: 'string',
      desc: 'string',
      eventDetails: { 'type': 'array', 'itemType': GetAlarmDetailByIdResponseBodyDataEventDetails },
      eventLevel: 'string',
      id: 'number',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      occurrenceTime: 'string',
      ownerId: 'string',
      remark: 'string',
      status: 'string',
      tacticDisplayName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttackedAssetDealResponseBodyDataEcsTrendList extends $tea.Model {
  /**
   * @remarks
   * Date point.
   * 
   * @example
   * 202312或20231205
   */
  date?: string;
  /**
   * @remarks
   * Number of processed items.
   * 
   * @example
   * 2
   */
  dealCount?: number;
  /**
   * @remarks
   * Number of discovered items.
   * 
   * @example
   * 暂时无值，有疑问请联系管理员
   */
  findCount?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      dealCount: 'DealCount',
      findCount: 'FindCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      dealCount: 'number',
      findCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttackedAssetDealResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Collection of attacked asset convergence trends.
   */
  ecsTrendList?: GetAttackedAssetDealResponseBodyDataEcsTrendList[];
  static names(): { [key: string]: string } {
    return {
      ecsTrendList: 'EcsTrendList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsTrendList: { 'type': 'array', 'itemType': GetAttackedAssetDealResponseBodyDataEcsTrendList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineSummaryResponseBodyDataTrendDTOList extends $tea.Model {
  /**
   * @remarks
   * Date point.
   * 
   * @example
   * 202408或者20240801
   */
  date?: string;
  /**
   * @remarks
   * Number of processed items.
   * 
   * @example
   * 10
   */
  dealCount?: number;
  /**
   * @remarks
   * Number of discovered items.
   * 
   * @example
   * 12
   */
  findCount?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      dealCount: 'DealCount',
      findCount: 'FindCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      dealCount: 'number',
      findCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineSummaryResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Collection of baseline statistical data.
   */
  trendDTOList?: GetBaselineSummaryResponseBodyDataTrendDTOList[];
  static names(): { [key: string]: string } {
    return {
      trendDTOList: 'TrendDTOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trendDTOList: { 'type': 'array', 'itemType': GetBaselineSummaryResponseBodyDataTrendDTOList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetailByIdResponseBodyDataVulDetails extends $tea.Model {
  /**
   * @remarks
   * CVE ID.
   * 
   * @example
   * CVE-2022-21291
   */
  cveId?: string;
  /**
   * @remarks
   * The CVSS score of the vulnerability in the Alibaba Cloud vulnerability database.
   * 
   * @example
   * 10.0
   */
  cvssScore?: string;
  /**
   * @remarks
   * Fix suggestion.
   * 
   * @example
   * https://avd.aliyun.com/detail/CVE-2022-21291
   */
  fixSuggestion?: string;
  /**
   * @remarks
   * Title of the vulnerability announcement.
   * 
   * @example
   * Chanjet T-Plus SetupAccount/Upload. Aspx file upload vulnerability(CNVD-2022-60632)
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      cveId: 'CveId',
      cvssScore: 'CvssScore',
      fixSuggestion: 'FixSuggestion',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cveId: 'string',
      cvssScore: 'string',
      fixSuggestion: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetailByIdResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Vulnerability details.
   */
  vulDetails?: GetDetailByIdResponseBodyDataVulDetails[];
  static names(): { [key: string]: string } {
    return {
      vulDetails: 'VulDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vulDetails: { 'type': 'array', 'itemType': GetDetailByIdResponseBodyDataVulDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentPageResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Delivered by.
   * 
   * @example
   * 张三
   */
  deliveredBy?: string;
  /**
   * @remarks
   * Report name.
   * 
   * @example
   * 季度报告
   */
  documentName?: string;
  /**
   * @remarks
   * Service report type.
   * 
   * @example
   * 3
   */
  documentType?: string;
  /**
   * @remarks
   * Document primary key ID.
   * 
   * @example
   * 346409
   */
  id?: number;
  /**
   * @remarks
   * Report generation time.
   * 
   * @example
   * 2023-03-21 17:26:34
   */
  uploadTime?: string;
  static names(): { [key: string]: string } {
    return {
      deliveredBy: 'DeliveredBy',
      documentName: 'DocumentName',
      documentType: 'DocumentType',
      id: 'Id',
      uploadTime: 'UploadTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveredBy: 'string',
      documentName: 'string',
      documentType: 'string',
      id: 'number',
      uploadTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentPageResponseBodyPageInfo extends $tea.Model {
  /**
   * @remarks
   * The current page number in pagination queries.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of data items displayed per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of data items found.
   * 
   * @example
   * 3149
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentSummaryResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Number of documents.
   * 
   * @example
   * 10
   */
  documentCount?: number;
  /**
   * @remarks
   * Number of services or days.
   * 
   * @example
   * 10
   */
  frequency?: number;
  static names(): { [key: string]: string } {
    return {
      documentCount: 'DocumentCount',
      frequency: 'Frequency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentCount: 'number',
      frequency: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecentDocumentResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Primary key ID.
   * 
   * @example
   * 360491
   */
  id?: number;
  /**
   * @remarks
   * Document name
   * 
   * @example
   * 文档名称测试
   */
  name?: string;
  /**
   * @remarks
   * Upload time.
   * 
   * @example
   * 2023-03-20 14:30:38
   */
  uploadTime?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      uploadTime: 'UploadTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      uploadTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSafetyCoverResponseBodyDataCfwProtection extends $tea.Model {
  /**
   * @remarks
   * Number of unprotected items.
   * 
   * @example
   * 5
   */
  noProtectionCount?: number;
  /**
   * @remarks
   * Number of protected items.
   * 
   * @example
   * 5
   */
  protectionCount?: number;
  /**
   * @remarks
   * Year-over-year protection rate.
   * 
   * @example
   * 35.00
   */
  protectionGrowthRate?: string;
  /**
   * @remarks
   * Protection rate.
   * 
   * @example
   * 50.00
   */
  protectionRate?: string;
  /**
   * @remarks
   * Total quantity.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      noProtectionCount: 'NoProtectionCount',
      protectionCount: 'ProtectionCount',
      protectionGrowthRate: 'ProtectionGrowthRate',
      protectionRate: 'ProtectionRate',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      noProtectionCount: 'number',
      protectionCount: 'number',
      protectionGrowthRate: 'string',
      protectionRate: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSafetyCoverResponseBodyDataEcsProtection extends $tea.Model {
  /**
   * @remarks
   * Number of unprotected items.
   * 
   * @example
   * 5
   */
  noProtectionCount?: number;
  /**
   * @remarks
   * Number of protected items.
   * 
   * @example
   * 5
   */
  protectionCount?: number;
  /**
   * @remarks
   * Year-over-year growth in protection rate.
   * 
   * @example
   * 35.00
   */
  protectionGrowthRate?: string;
  /**
   * @remarks
   * Protection rate.
   * 
   * @example
   * 50.00
   */
  protectionRate?: string;
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      noProtectionCount: 'NoProtectionCount',
      protectionCount: 'ProtectionCount',
      protectionGrowthRate: 'ProtectionGrowthRate',
      protectionRate: 'ProtectionRate',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      noProtectionCount: 'number',
      protectionCount: 'number',
      protectionGrowthRate: 'string',
      protectionRate: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSafetyCoverResponseBodyDataWafProtection extends $tea.Model {
  /**
   * @remarks
   * Number of unprotected items.
   * 
   * @example
   * 5
   */
  noProtectionCount?: number;
  /**
   * @remarks
   * Number of protected items.
   * 
   * @example
   * 5
   */
  protectionCount?: number;
  /**
   * @remarks
   * Year-over-year growth in protection rate.
   * 
   * @example
   * 35.00
   */
  protectionGrowthRate?: string;
  /**
   * @remarks
   * Protection rate.
   * 
   * @example
   * 50.00
   */
  protectionRate?: string;
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      noProtectionCount: 'NoProtectionCount',
      protectionCount: 'ProtectionCount',
      protectionGrowthRate: 'ProtectionGrowthRate',
      protectionRate: 'ProtectionRate',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      noProtectionCount: 'number',
      protectionCount: 'number',
      protectionGrowthRate: 'string',
      protectionRate: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSafetyCoverResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * CFW protection coverage.
   */
  cfwProtection?: GetSafetyCoverResponseBodyDataCfwProtection;
  /**
   * @remarks
   * ECS protection coverage.
   */
  ecsProtection?: GetSafetyCoverResponseBodyDataEcsProtection;
  /**
   * @remarks
   * WAF protection coverage.
   */
  wafProtection?: GetSafetyCoverResponseBodyDataWafProtection;
  static names(): { [key: string]: string } {
    return {
      cfwProtection: 'CfwProtection',
      ecsProtection: 'EcsProtection',
      wafProtection: 'WafProtection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cfwProtection: GetSafetyCoverResponseBodyDataCfwProtection,
      ecsProtection: GetSafetyCoverResponseBodyDataEcsProtection,
      wafProtection: GetSafetyCoverResponseBodyDataWafProtection,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSowListResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Completion time.
   * 
   * @example
   * 2024-03-28 16:19:35
   */
  completeTime?: string;
  /**
   * @remarks
   * Operation remarks.
   * 
   * @example
   * 新建
   */
  operateRemark?: string;
  /**
   * @remarks
   * Progress.
   * 
   * @example
   * IN_PREPARATION
   */
  progress?: string;
  /**
   * @remarks
   * Record count.
   * 
   * @example
   * 173
   */
  recordCount?: number;
  /**
   * @remarks
   * Start time.
   * 
   * @example
   * 2023-03-24 16:51:26
   */
  startTime?: string;
  /**
   * @remarks
   * Task type.
   * 
   * @example
   * 安全风险评估
   */
  taskTypeName?: string;
  /**
   * @remarks
   * Work order name.
   * 
   * @example
   * 安全产品配置问题与超量提醒
   */
  workOrderName?: string;
  static names(): { [key: string]: string } {
    return {
      completeTime: 'CompleteTime',
      operateRemark: 'OperateRemark',
      progress: 'Progress',
      recordCount: 'RecordCount',
      startTime: 'StartTime',
      taskTypeName: 'TaskTypeName',
      workOrderName: 'WorkOrderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeTime: 'string',
      operateRemark: 'string',
      progress: 'string',
      recordCount: 'number',
      startTime: 'string',
      taskTypeName: 'string',
      workOrderName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventPageResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Alarm event type.
   * 
   * @example
   * 精准防御
   */
  alarmEventType?: string;
  /**
   * @remarks
   * Alarm ID.
   * 
   * @example
   * 5b1eeebe4f22daa2b177298234214fa3
   */
  alarmId?: number;
  /**
   * @remarks
   * Alarm name.
   * 
   * @example
   * Web服务漏洞利用
   */
  alarmName?: string;
  /**
   * @remarks
   * Alarm source.
   * 
   * @example
   * SUSP_EVENT
   */
  alarmSource?: string;
  /**
   * @remarks
   * Latest alarm time.
   * 
   * @example
   * 1722515522000
   */
  alarmTime?: string;
  /**
   * @remarks
   * Analysis process.
   * 
   * @example
   * [{"value":"服务器可能已被黑客攻击，存在恶意进程在运行。 分析过程：告警显示，服务端存在一个名为”dns.exe”的进程在访问”polling.burpcollaborator.net”，这是一个被黑名单列出的恶意域名。在正常情况下,”dns.exe”不应该单独存在于系统的路径下，并且也不应该访问这类恶意域名。因此，这个进程可能是黑客留下的恶意进程。","key":"结论"},{"value":"尽快对服务器进行全面扫描，清除恶意进程。同时，联系网络安全专家进行深入调查，以确定是否有其他潜在的安全威胁。","key":"处置建议"}]
   */
  analysisResult?: string;
  /**
   * @remarks
   * Alarm handling time.
   * 
   * @example
   * 1732515522000
   */
  dealTime?: string;
  /**
   * @remarks
   * Alarm level.
   * 
   * @example
   * suspicious
   */
  eventLevel?: string;
  /**
   * @remarks
   * Ticket primary key id.
   * 
   * @example
   * 9947
   */
  id?: number;
  /**
   * @remarks
   * Affected asset.
   * 
   * @example
   * shells-azhou
   */
  instanceName?: string;
  /**
   * @remarks
   * Public IP address.
   * 
   * @example
   * 47.99.188.31
   */
  internetIp?: string;
  /**
   * @remarks
   * Private IP address.
   * 
   * @example
   * 172.16.109.130
   */
  intranetIp?: string;
  /**
   * @remarks
   * First occurrence time.
   * 
   * @example
   * 该字段暂未使用，有问题请联系管理员
   */
  occurrenceTime?: string;
  /**
   * @remarks
   * Owner ID.
   * 
   * @example
   * 张三
   */
  ownerId?: string;
  /**
   * @remarks
   * Disposal method.
   * 
   * @example
   * 处理完成
   */
  remark?: string;
  /**
   * @remarks
   * Handling status.
   * 
   * @example
   * 未处理
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      alarmEventType: 'AlarmEventType',
      alarmId: 'AlarmId',
      alarmName: 'AlarmName',
      alarmSource: 'AlarmSource',
      alarmTime: 'AlarmTime',
      analysisResult: 'AnalysisResult',
      dealTime: 'DealTime',
      eventLevel: 'EventLevel',
      id: 'Id',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      occurrenceTime: 'OccurrenceTime',
      ownerId: 'OwnerId',
      remark: 'Remark',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmEventType: 'string',
      alarmId: 'number',
      alarmName: 'string',
      alarmSource: 'string',
      alarmTime: 'string',
      analysisResult: 'string',
      dealTime: 'string',
      eventLevel: 'string',
      id: 'number',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      occurrenceTime: 'string',
      ownerId: 'string',
      remark: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventPageResponseBodyPageInfo extends $tea.Model {
  /**
   * @remarks
   * The current page number in pagination queries.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of items displayed per page in the returned data.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of query results.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventSummaryResponseBodyDataNetworkAttackTrendDTOTrendList extends $tea.Model {
  /**
   * @remarks
   * Date.
   * 
   * @example
   * 202409或20240901
   */
  date?: string;
  /**
   * @remarks
   * DDoS count.
   * 
   * @example
   * 10
   */
  ddosCount?: number;
  /**
   * @remarks
   * EIP count.
   * 
   * @example
   * 10
   */
  eipCount?: number;
  /**
   * @remarks
   * WAF count.
   * 
   * @example
   * 10
   */
  wafCount?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      ddosCount: 'DdosCount',
      eipCount: 'EipCount',
      wafCount: 'WafCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      ddosCount: 'number',
      eipCount: 'number',
      wafCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventSummaryResponseBodyDataNetworkAttackTrendDTO extends $tea.Model {
  /**
   * @remarks
   * Collection of trend nodes for each attack item.
   */
  trendList?: GetSuspEventSummaryResponseBodyDataNetworkAttackTrendDTOTrendList[];
  static names(): { [key: string]: string } {
    return {
      trendList: 'TrendList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trendList: { 'type': 'array', 'itemType': GetSuspEventSummaryResponseBodyDataNetworkAttackTrendDTOTrendList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventSummaryResponseBodyDataSuspEventDealSummaryDTO extends $tea.Model {
  /**
   * @remarks
   * Completed.
   * 
   * @example
   * 20
   */
  completedCount?: number;
  /**
   * @remarks
   * In progress.
   * 
   * @example
   * 5
   */
  handingCount?: number;
  /**
   * @remarks
   * Alert handling rate.
   * 
   * @example
   * 90
   */
  handingRate?: string;
  /**
   * @remarks
   * Total number of alerts.
   * 
   * @example
   * 35
   */
  totalCount?: number;
  /**
   * @remarks
   * Year-over-year comparison of alerts.
   * 
   * @example
   * 10
   */
  totalGrowthRate?: string;
  /**
   * @remarks
   * Number of unhandled alerts.
   * 
   * @example
   * 10
   */
  waitHandleCount?: number;
  static names(): { [key: string]: string } {
    return {
      completedCount: 'CompletedCount',
      handingCount: 'HandingCount',
      handingRate: 'HandingRate',
      totalCount: 'TotalCount',
      totalGrowthRate: 'TotalGrowthRate',
      waitHandleCount: 'WaitHandleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedCount: 'number',
      handingCount: 'number',
      handingRate: 'string',
      totalCount: 'number',
      totalGrowthRate: 'string',
      waitHandleCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventSummaryResponseBodyDataSuspEventTopDTOSuspEventList extends $tea.Model {
  /**
   * @remarks
   * Alert name.
   * 
   * @example
   * 主动外连风险 IP
   */
  eventName?: string;
  /**
   * @remarks
   * Count.
   * 
   * @example
   * 7
   */
  taskCount?: number;
  static names(): { [key: string]: string } {
    return {
      eventName: 'EventName',
      taskCount: 'TaskCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventName: 'string',
      taskCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventSummaryResponseBodyDataSuspEventTopDTO extends $tea.Model {
  /**
   * @remarks
   * Top 10 before handling alarms
   */
  suspEventList?: GetSuspEventSummaryResponseBodyDataSuspEventTopDTOSuspEventList[];
  static names(): { [key: string]: string } {
    return {
      suspEventList: 'SuspEventList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suspEventList: { 'type': 'array', 'itemType': GetSuspEventSummaryResponseBodyDataSuspEventTopDTOSuspEventList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventSummaryResponseBodyDataSuspEventTrendDTOTrendList extends $tea.Model {
  /**
   * @remarks
   * Time point.
   * 
   * @example
   * 202405或者20240501
   */
  date?: string;
  /**
   * @remarks
   * Number of handled alerts.
   * 
   * @example
   * 10
   */
  dealCount?: number;
  /**
   * @remarks
   * Number of discovered alerts.
   * 
   * @example
   * 15
   */
  findCount?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      dealCount: 'DealCount',
      findCount: 'FindCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      dealCount: 'number',
      findCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventSummaryResponseBodyDataSuspEventTrendDTO extends $tea.Model {
  /**
   * @remarks
   * Trend of alerts.
   */
  trendList?: GetSuspEventSummaryResponseBodyDataSuspEventTrendDTOTrendList[];
  static names(): { [key: string]: string } {
    return {
      trendList: 'TrendList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trendList: { 'type': 'array', 'itemType': GetSuspEventSummaryResponseBodyDataSuspEventTrendDTOTrendList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventSummaryResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Network attack trend.
   */
  networkAttackTrendDTO?: GetSuspEventSummaryResponseBodyDataNetworkAttackTrendDTO;
  /**
   * @remarks
   * Overview of alert handling.
   */
  suspEventDealSummaryDTO?: GetSuspEventSummaryResponseBodyDataSuspEventDealSummaryDTO;
  /**
   * @remarks
   * Top 10 alerts before handling.
   */
  suspEventTopDTO?: GetSuspEventSummaryResponseBodyDataSuspEventTopDTO;
  /**
   * @remarks
   * Trend of alert responses.
   */
  suspEventTrendDTO?: GetSuspEventSummaryResponseBodyDataSuspEventTrendDTO;
  static names(): { [key: string]: string } {
    return {
      networkAttackTrendDTO: 'NetworkAttackTrendDTO',
      suspEventDealSummaryDTO: 'SuspEventDealSummaryDTO',
      suspEventTopDTO: 'SuspEventTopDTO',
      suspEventTrendDTO: 'SuspEventTrendDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAttackTrendDTO: GetSuspEventSummaryResponseBodyDataNetworkAttackTrendDTO,
      suspEventDealSummaryDTO: GetSuspEventSummaryResponseBodyDataSuspEventDealSummaryDTO,
      suspEventTopDTO: GetSuspEventSummaryResponseBodyDataSuspEventTopDTO,
      suspEventTrendDTO: GetSuspEventSummaryResponseBodyDataSuspEventTrendDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspPageSummaryResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Number of completed items.
   * 
   * @example
   * 10
   */
  completedCount?: number;
  /**
   * @remarks
   * Number of items being processed.
   * 
   * @example
   * 10
   */
  handingCount?: number;
  /**
   * @remarks
   * Number of high-risk items.
   * 
   * @example
   * 10
   */
  highCount?: number;
  /**
   * @remarks
   * Number of low-risk items.
   * 
   * @example
   * 10
   */
  lowCount?: number;
  /**
   * @remarks
   * Number of medium-risk items.
   * 
   * @example
   * 10
   */
  mediumCount?: number;
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 30
   */
  totalCount?: number;
  /**
   * @remarks
   * Number of unhandled items.
   * 
   * @example
   * 10
   */
  waitHandleCount?: number;
  static names(): { [key: string]: string } {
    return {
      completedCount: 'CompletedCount',
      handingCount: 'HandingCount',
      highCount: 'HighCount',
      lowCount: 'LowCount',
      mediumCount: 'MediumCount',
      totalCount: 'TotalCount',
      waitHandleCount: 'WaitHandleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedCount: 'number',
      handingCount: 'number',
      highCount: 'number',
      lowCount: 'number',
      mediumCount: 'number',
      totalCount: 'number',
      waitHandleCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserStatusResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Customer type.
   * 
   * @example
   * official
   */
  customerType?: string;
  /**
   * @remarks
   * End date.
   * 
   * @example
   * 2023-09-28 00:00:00
   */
  endDate?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * 726cec3c-4887-4354-8c21-c0ad12e10fc2
   */
  instanceId?: string;
  /**
   * @remarks
   * Start date.
   * 
   * @example
   * 2023-09-20 00:00:00
   */
  startDate?: string;
  /**
   * @remarks
   * Status.
   * 
   * @example
   * FirstLogin
   */
  status?: string;
  /**
   * @remarks
   * Version.
   * 
   * @example
   * mdrjichu
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      customerType: 'CustomerType',
      endDate: 'EndDate',
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerType: 'string',
      endDate: 'string',
      instanceId: 'string',
      startDate: 'string',
      status: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulItemPageResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Vulnerability alias.
   * 
   * @example
   * RHSA-2024:4620: libndp 安全更新
   */
  aliasName?: string;
  /**
   * @remarks
   * Number of high-priority vulnerabilities to be fixed.
   * 
   * @example
   * 74
   */
  asapCount?: number;
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * 1940494487193744
   */
  customerId?: string;
  /**
   * @remarks
   * Prefix for the CVE remediation advice URL.
   * 
   * @example
   * https://avd.aliyun.com/detail/
   */
  cveUrlPrefix?: string;
  /**
   * @remarks
   * Processing status.
   * 
   * @example
   * y
   */
  dealed?: string;
  /**
   * @remarks
   * Timestamp of the last discovery of the vulnerability.
   * 
   * @example
   * 2023-04-23 14:47:34
   */
  findTime?: string;
  /**
   * @remarks
   * Number of processed vulnerabilities.
   * 
   * @example
   * 20
   */
  handledCount?: number;
  /**
   * @remarks
   * Primary key ID.
   * 
   * @example
   * 353845
   */
  id?: number;
  /**
   * @remarks
   * Number of medium-priority vulnerabilities to be fixed.
   * 
   * @example
   * 10
   */
  laterCount?: number;
  /**
   * @remarks
   * Risk level
   * 
   * @example
   * later
   */
  level?: string;
  /**
   * @remarks
   * Vulnerability name.
   * 
   * @example
   * oval:com.redhat.rhsa:def:20205002
   */
  name?: string;
  /**
   * @remarks
   * Number of low-priority vulnerabilities to be fixed.
   * 
   * @example
   * 8
   */
  nntfCount?: number;
  /**
   * @remarks
   * CVE number.
   * 
   * @example
   * CVE-2019-20907
   */
  related?: string;
  /**
   * @remarks
   * Number of related CVE numbers.
   * 
   * @example
   * 20
   */
  relatedCveCount?: number;
  /**
   * @remarks
   * Vulnerability type.
   * 
   * @example
   * sca
   */
  scanType?: string;
  /**
   * @remarks
   * Tags.
   * 
   * @example
   * Elevation of Privilege
   */
  tags?: string;
  /**
   * @remarks
   * Total number of fixed vulnerabilities.
   * 
   * @example
   * 50
   */
  totalFixCount?: number;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      asapCount: 'AsapCount',
      customerId: 'CustomerId',
      cveUrlPrefix: 'CveUrlPrefix',
      dealed: 'Dealed',
      findTime: 'FindTime',
      handledCount: 'HandledCount',
      id: 'Id',
      laterCount: 'LaterCount',
      level: 'Level',
      name: 'Name',
      nntfCount: 'NntfCount',
      related: 'Related',
      relatedCveCount: 'RelatedCveCount',
      scanType: 'ScanType',
      tags: 'Tags',
      totalFixCount: 'TotalFixCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      asapCount: 'number',
      customerId: 'string',
      cveUrlPrefix: 'string',
      dealed: 'string',
      findTime: 'string',
      handledCount: 'number',
      id: 'number',
      laterCount: 'number',
      level: 'string',
      name: 'string',
      nntfCount: 'number',
      related: 'string',
      relatedCveCount: 'number',
      scanType: 'string',
      tags: 'string',
      totalFixCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulItemPageResponseBodyPageInfo extends $tea.Model {
  /**
   * @remarks
   * The current page number for pagination queries.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Number of items to display per page in the returned data.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of records in the query result.
   * 
   * @example
   * 163
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulListByIdResponseBodyDataEffectMsgDTOS extends $tea.Model {
  /**
   * @remarks
   * Hit
   * 
   * @example
   * fastjson(jar) extendField.safemode equals false
   */
  matchList?: string;
  /**
   * @remarks
   * Path
   * 
   * @example
   * /uat6/qry/enquiry/policy/yrtPolicyList
   */
  path?: string;
  /**
   * @remarks
   * Software name
   * 
   * @example
   * python-perf 3.10.0
   */
  softName?: string;
  static names(): { [key: string]: string } {
    return {
      matchList: 'MatchList',
      path: 'Path',
      softName: 'SoftName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchList: 'string',
      path: 'string',
      softName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulListByIdResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Vulnerability Alias
   * 
   * @example
   * Tomcat websocket 拒绝服务漏洞利用代码披露（CVE-2020-13935）
   */
  aliasName?: string;
  /**
   * @remarks
   * Impact description
   */
  effectMsgDTOS?: GetVulListByIdResponseBodyDataEffectMsgDTOS[];
  /**
   * @remarks
   * Timestamp of the first time the vulnerability was detected
   * 
   * @example
   * 1620404763000
   */
  firstTs?: string;
  /**
   * @remarks
   * Instance name of the asset
   * 
   * @example
   * 凌星-CentOS
   */
  instanceName?: string;
  /**
   * @remarks
   * Public IP of the asset
   * 
   * @example
   * 39.101.73.28
   */
  internetIp?: string;
  /**
   * @remarks
   * Private IP of the asset
   * 
   * @example
   * 172.22.216.17
   */
  intranetIp?: string;
  /**
   * @remarks
   * Timestamp of the last time the vulnerability was detected
   * 
   * @example
   * 1620404763000
   */
  lastTs?: string;
  /**
   * @remarks
   * Vulnerability name
   * 
   * @example
   * SCA:ACSV-2020-111301
   */
  name?: string;
  /**
   * @remarks
   * Necessity level of vulnerability repair
   * 
   * @example
   * later,asap,nntf
   */
  necessity?: string;
  /**
   * @remarks
   * List of associated CVEs for the vulnerability, separated by commas (,) if there are multiple values.
   * 
   * @example
   * CVE-2020-13935
   */
  related?: string;
  /**
   * @remarks
   * Repair command
   * 
   * @example
   * *** update python-perf
   */
  repairCmd?: string;
  /**
   * @remarks
   * Timestamp of vulnerability repair
   * 
   * @example
   * 1541207563000
   */
  repairTs?: string;
  /**
   * @remarks
   * Vulnerability status:
   * 1: Not fixed
   * 2: Fix failed
   * 3: Rollback failed
   * 4: Fixing
   * 5: Rolling back
   * 6: Verifying
   * 7: Fixed successfully
   * 8: Fixed successfully, pending reboot
   * 9: Rolled back successfully
   * 10: Ignored
   * 11: Rolled back successfully, pending reboot
   * 12: Vulnerability does not exist
   * 20: Expired
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * Vulnerability tag
   * 
   * @example
   * Restart Required
   */
  tag?: string;
  /**
   * @remarks
   * UUID of the asset instance.
   * 
   * @example
   * hdm_5cf2eaf263c021b354877943f181956d
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      effectMsgDTOS: 'EffectMsgDTOS',
      firstTs: 'FirstTs',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      lastTs: 'LastTs',
      name: 'Name',
      necessity: 'Necessity',
      related: 'Related',
      repairCmd: 'RepairCmd',
      repairTs: 'RepairTs',
      status: 'Status',
      tag: 'Tag',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      effectMsgDTOS: { 'type': 'array', 'itemType': GetVulListByIdResponseBodyDataEffectMsgDTOS },
      firstTs: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      lastTs: 'string',
      name: 'string',
      necessity: 'string',
      related: 'string',
      repairCmd: 'string',
      repairTs: 'string',
      status: 'string',
      tag: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulListByIdResponseBodyPageInfo extends $tea.Model {
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Number of items per page in the returned data.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of records in the query result.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulPageSummaryResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Number of completed items.
   * 
   * @example
   * 1990
   */
  completedCount?: number;
  /**
   * @remarks
   * Number of items being handled.
   * 
   * @example
   * 6
   */
  handingCount?: number;
  /**
   * @remarks
   * Number of high-risk items.
   * 
   * @example
   * 500
   */
  highCount?: number;
  /**
   * @remarks
   * Number of low-risk items.
   * 
   * @example
   * 1000
   */
  lowCount?: number;
  /**
   * @remarks
   * Number of medium-risk items.
   * 
   * @example
   * 500
   */
  mediumCount?: number;
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 2000
   */
  totalCount?: number;
  /**
   * @remarks
   * Number of unhandled items.
   * 
   * @example
   * 4
   */
  waitHandleCount?: number;
  static names(): { [key: string]: string } {
    return {
      completedCount: 'CompletedCount',
      handingCount: 'HandingCount',
      highCount: 'HighCount',
      lowCount: 'LowCount',
      mediumCount: 'MediumCount',
      totalCount: 'TotalCount',
      waitHandleCount: 'WaitHandleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedCount: 'number',
      handingCount: 'number',
      highCount: 'number',
      lowCount: 'number',
      mediumCount: 'number',
      totalCount: 'number',
      waitHandleCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulSummaryResponseBodyDataTrendList extends $tea.Model {
  /**
   * @remarks
   * Time point.
   * 
   * @example
   * 202407或者20240701
   */
  date?: string;
  /**
   * @remarks
   * Number of handled items.
   * 
   * @example
   * 10
   */
  dealCount?: number;
  /**
   * @remarks
   * Number of discovered items.
   * 
   * @example
   * 15
   */
  findCount?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      dealCount: 'DealCount',
      findCount: 'FindCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      dealCount: 'number',
      findCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulSummaryResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Number of completed items.
   * 
   * @example
   * 10
   */
  completedCount?: number;
  /**
   * @remarks
   * Risk convergence rate.
   * 
   * @example
   * 50
   */
  dealRate?: string;
  /**
   * @remarks
   * Collection of vulnerability trend nodes.
   */
  trendList?: GetVulSummaryResponseBodyDataTrendList[];
  /**
   * @remarks
   * Number of unhandled items.
   * 
   * @example
   * 5
   */
  waitHandleCount?: number;
  static names(): { [key: string]: string } {
    return {
      completedCount: 'CompletedCount',
      dealRate: 'DealRate',
      trendList: 'TrendList',
      waitHandleCount: 'WaitHandleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedCount: 'number',
      dealRate: 'string',
      trendList: { 'type': 'array', 'itemType': GetVulSummaryResponseBodyDataTrendList },
      waitHandleCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkTaskSummaryResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Average response time (in minutes).
   * 
   * @example
   * 60
   */
  dealAverageDuration?: number;
  /**
   * @remarks
   * Year-over-year growth rate of average response time.
   * 
   * @example
   * 20
   */
  dealAverageDurationGrowthRate?: string;
  /**
   * @remarks
   * Number of work orders responded to.
   * 
   * @example
   * 100
   */
  dealWorkTaskCount?: number;
  /**
   * @remarks
   * Year-over-year growth rate of the number of work orders responded to.
   * 
   * @example
   * 20
   */
  dealWorkTaskCountRate?: string;
  /**
   * @remarks
   * Number of service responses.
   * 
   * @example
   * 10
   */
  workTaskCount?: number;
  /**
   * @remarks
   * Problem closure rate.
   * 
   * @example
   * 90
   */
  workTaskDealRate?: string;
  /**
   * @remarks
   * Year-over-year growth rate of problem closure rate.
   * 
   * @example
   * 20
   */
  workTaskDealRateGrowthRate?: string;
  /**
   * @remarks
   * Year-over-year growth rate of service responses.
   * 
   * @example
   * 20
   */
  workTaskGrowthRate?: string;
  static names(): { [key: string]: string } {
    return {
      dealAverageDuration: 'DealAverageDuration',
      dealAverageDurationGrowthRate: 'DealAverageDurationGrowthRate',
      dealWorkTaskCount: 'DealWorkTaskCount',
      dealWorkTaskCountRate: 'DealWorkTaskCountRate',
      workTaskCount: 'WorkTaskCount',
      workTaskDealRate: 'WorkTaskDealRate',
      workTaskDealRateGrowthRate: 'WorkTaskDealRateGrowthRate',
      workTaskGrowthRate: 'WorkTaskGrowthRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dealAverageDuration: 'number',
      dealAverageDurationGrowthRate: 'string',
      dealWorkTaskCount: 'number',
      dealWorkTaskCountRate: 'string',
      workTaskCount: 'number',
      workTaskDealRate: 'string',
      workTaskDealRateGrowthRate: 'string',
      workTaskGrowthRate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageServiceCustomerResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Customer UID.
   * 
   * @example
   * 1667751131382856
   */
  aliuid?: string;
  /**
   * @remarks
   * Authorization status.
   * 
   * @example
   * 1
   */
  authStatus?: number;
  /**
   * @remarks
   * Cloud Monitoring - Alert authorization status.
   * 
   * @example
   * 0
   */
  cmAuthStatus?: number;
  /**
   * @remarks
   * End time. The format is a Unix timestamp, which is the number of milliseconds since January 1, 1970.
   * 
   * @example
   * 1710123149222
   */
  endTime?: number;
  /**
   * @remarks
   * Customer level.
   * 
   * @example
   * GC1
   */
  level?: string;
  /**
   * @remarks
   * Cloud Security - Alert authorization status.
   * 
   * @example
   * 1
   */
  monitorAuthStatus?: number;
  /**
   * @remarks
   * Customer name.
   * 
   * @example
   * 中国工程院
   */
  name?: string;
  /**
   * @remarks
   * Owner name.
   * 
   * @example
   * 常温
   */
  ownId?: string;
  /**
   * @remarks
   * Start time. The format is a Unix timestamp, which is the number of milliseconds since January 1, 1970.
   * 
   * @example
   * 1710123149000
   */
  startTime?: number;
  /**
   * @remarks
   * Customer ID.
   * 
   * @example
   * 1667751131382856
   */
  userId?: string;
  /**
   * @remarks
   * Version information.
   * 
   * @example
   * 企业版
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      aliuid: 'Aliuid',
      authStatus: 'AuthStatus',
      cmAuthStatus: 'CmAuthStatus',
      endTime: 'EndTime',
      level: 'Level',
      monitorAuthStatus: 'MonitorAuthStatus',
      name: 'Name',
      ownId: 'OwnId',
      startTime: 'StartTime',
      userId: 'UserId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliuid: 'string',
      authStatus: 'number',
      cmAuthStatus: 'number',
      endTime: 'number',
      level: 'string',
      monitorAuthStatus: 'number',
      name: 'string',
      ownId: 'string',
      startTime: 'number',
      userId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageServiceCustomerResponseBodyPageInfo extends $tea.Model {
  /**
   * @remarks
   * The current page number in pagination queries.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Number of items per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of query results.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCustomEventResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Service UID.
   * 
   * @example
   * 1601097845544644
   */
  customerId?: string;
  /**
   * @remarks
   * Customer name.
   * 
   * @example
   * 天津瑞鹏昇科技发展有限公司
   */
  customerName?: string;
  /**
   * @remarks
   * Alert ID.
   * 
   * @example
   * c0dc71d1-8a1d-4043-9767-f6c420e34901-81bd
   */
  eventId?: string;
  /**
   * @remarks
   * Alert type.
   * 
   * @example
   * SUSP_CUSTOM_WAF
   */
  eventType?: string;
  /**
   * @remarks
   * Work order ID.
   * 
   * @example
   * 1914348
   */
  id?: number;
  /**
   * @remarks
   * Owner ID.
   * 
   * @example
   * 352675
   */
  ownerId?: string;
  /**
   * @remarks
   * Owner name.
   * 
   * @example
   * 乐牙
   */
  ownerName?: string;
  /**
   * @remarks
   * Work order name.
   * 
   * @example
   * 22端口禁止任意IP访问
   */
  workTaskName?: string;
  static names(): { [key: string]: string } {
    return {
      customerId: 'CustomerId',
      customerName: 'CustomerName',
      eventId: 'EventId',
      eventType: 'EventType',
      id: 'Id',
      ownerId: 'OwnerId',
      ownerName: 'OwnerName',
      workTaskName: 'WorkTaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerId: 'string',
      customerName: 'string',
      eventId: 'string',
      eventType: 'string',
      id: 'number',
      ownerId: 'string',
      ownerName: 'string',
      workTaskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._productId = "mssp";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("mssp", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 创建服务关联角色
   * 
   * @param request - CreateServiceLinkedRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceLinkedRoleResponse
   */
  async createServiceLinkedRoleWithOptions(request: CreateServiceLinkedRoleRequest, runtime: $Util.RuntimeOptions): Promise<CreateServiceLinkedRoleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateServiceLinkedRole",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<CreateServiceLinkedRoleResponse>(await this.callApi(params, req, runtime), new CreateServiceLinkedRoleResponse({}));
    } else {
      return $tea.cast<CreateServiceLinkedRoleResponse>(await this.execute(params, req, runtime), new CreateServiceLinkedRoleResponse({}));
    }

  }

  /**
   * 创建服务关联角色
   * 
   * @param request - CreateServiceLinkedRoleRequest
   * @returns CreateServiceLinkedRoleResponse
   */
  async createServiceLinkedRole(request: CreateServiceLinkedRoleRequest): Promise<CreateServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceLinkedRoleWithOptions(request, runtime);
  }

  /**
   * Create Service Work Order
   * 
   * @param request - CreateServiceWorkOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceWorkOrderResponse
   */
  async createServiceWorkOrderWithOptions(request: CreateServiceWorkOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateServiceWorkOrderResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.creator)) {
      body["Creator"] = request.creator;
    }

    if (!Util.isUnset(request.customerId)) {
      body["CustomerId"] = request.customerId;
    }

    if (!Util.isUnset(request.durationDay)) {
      body["DurationDay"] = request.durationDay;
    }

    if (!Util.isUnset(request.isAttachment)) {
      body["IsAttachment"] = request.isAttachment;
    }

    if (!Util.isUnset(request.isWorkOrderNotify)) {
      body["IsWorkOrderNotify"] = request.isWorkOrderNotify;
    }

    if (!Util.isUnset(request.notifyDay)) {
      body["NotifyDay"] = request.notifyDay;
    }

    if (!Util.isUnset(request.notifyId)) {
      body["NotifyId"] = request.notifyId;
    }

    if (!Util.isUnset(request.operateRemark)) {
      body["OperateRemark"] = request.operateRemark;
    }

    if (!Util.isUnset(request.operateType)) {
      body["OperateType"] = request.operateType;
    }

    if (!Util.isUnset(request.operator)) {
      body["Operator"] = request.operator;
    }

    if (!Util.isUnset(request.ownerId)) {
      body["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.workOrderDetail)) {
      body["WorkOrderDetail"] = request.workOrderDetail;
    }

    if (!Util.isUnset(request.workOrderName)) {
      body["WorkOrderName"] = request.workOrderName;
    }

    if (!Util.isUnset(request.workOrderSource)) {
      body["WorkOrderSource"] = request.workOrderSource;
    }

    if (!Util.isUnset(request.workOrderStatus)) {
      body["WorkOrderStatus"] = request.workOrderStatus;
    }

    if (!Util.isUnset(request.workOrderType)) {
      body["WorkOrderType"] = request.workOrderType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateServiceWorkOrder",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<CreateServiceWorkOrderResponse>(await this.callApi(params, req, runtime), new CreateServiceWorkOrderResponse({}));
    } else {
      return $tea.cast<CreateServiceWorkOrderResponse>(await this.execute(params, req, runtime), new CreateServiceWorkOrderResponse({}));
    }

  }

  /**
   * Create Service Work Order
   * 
   * @param request - CreateServiceWorkOrderRequest
   * @returns CreateServiceWorkOrderResponse
   */
  async createServiceWorkOrder(request: CreateServiceWorkOrderRequest): Promise<CreateServiceWorkOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceWorkOrderWithOptions(request, runtime);
  }

  /**
   * 查询服务关联角色
   * 
   * @param request - DescribeServiceLinkedRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceLinkedRoleResponse
   */
  async describeServiceLinkedRoleWithOptions(request: DescribeServiceLinkedRoleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeServiceLinkedRoleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeServiceLinkedRole",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DescribeServiceLinkedRoleResponse>(await this.callApi(params, req, runtime), new DescribeServiceLinkedRoleResponse({}));
    } else {
      return $tea.cast<DescribeServiceLinkedRoleResponse>(await this.execute(params, req, runtime), new DescribeServiceLinkedRoleResponse({}));
    }

  }

  /**
   * 查询服务关联角色
   * 
   * @param request - DescribeServiceLinkedRoleRequest
   * @returns DescribeServiceLinkedRoleResponse
   */
  async describeServiceLinkedRole(request: DescribeServiceLinkedRoleRequest): Promise<DescribeServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServiceLinkedRoleWithOptions(request, runtime);
  }

  /**
   * Process Service Work Order
   * 
   * @param request - DisposeServiceWorkOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisposeServiceWorkOrderResponse
   */
  async disposeServiceWorkOrderWithOptions(request: DisposeServiceWorkOrderRequest, runtime: $Util.RuntimeOptions): Promise<DisposeServiceWorkOrderResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.attachmentName)) {
      body["AttachmentName"] = request.attachmentName;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.forwardOwnerId)) {
      body["ForwardOwnerId"] = request.forwardOwnerId;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.isAttachment)) {
      body["IsAttachment"] = request.isAttachment;
    }

    if (!Util.isUnset(request.isWorkOrderNotify)) {
      body["IsWorkOrderNotify"] = request.isWorkOrderNotify;
    }

    if (!Util.isUnset(request.notifyId)) {
      body["NotifyId"] = request.notifyId;
    }

    if (!Util.isUnset(request.operateRemark)) {
      body["OperateRemark"] = request.operateRemark;
    }

    if (!Util.isUnset(request.operateType)) {
      body["OperateType"] = request.operateType;
    }

    if (!Util.isUnset(request.operator)) {
      body["Operator"] = request.operator;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.upgradeOwnerId)) {
      body["UpgradeOwnerId"] = request.upgradeOwnerId;
    }

    if (!Util.isUnset(request.workOrderDetail)) {
      body["WorkOrderDetail"] = request.workOrderDetail;
    }

    if (!Util.isUnset(request.workOrderName)) {
      body["WorkOrderName"] = request.workOrderName;
    }

    if (!Util.isUnset(request.workOrderStatus)) {
      body["WorkOrderStatus"] = request.workOrderStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DisposeServiceWorkOrder",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DisposeServiceWorkOrderResponse>(await this.callApi(params, req, runtime), new DisposeServiceWorkOrderResponse({}));
    } else {
      return $tea.cast<DisposeServiceWorkOrderResponse>(await this.execute(params, req, runtime), new DisposeServiceWorkOrderResponse({}));
    }

  }

  /**
   * Process Service Work Order
   * 
   * @param request - DisposeServiceWorkOrderRequest
   * @returns DisposeServiceWorkOrderResponse
   */
  async disposeServiceWorkOrder(request: DisposeServiceWorkOrderRequest): Promise<DisposeServiceWorkOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disposeServiceWorkOrderWithOptions(request, runtime);
  }

  /**
   * Handle Alert Work Order
   * 
   * @param request - DisposeWorkTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisposeWorkTaskResponse
   */
  async disposeWorkTaskWithOptions(request: DisposeWorkTaskRequest, runtime: $Util.RuntimeOptions): Promise<DisposeWorkTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operator)) {
      body["Operator"] = request.operator;
    }

    if (!Util.isUnset(request.optRemark)) {
      body["OptRemark"] = request.optRemark;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.taskIds)) {
      body["TaskIds"] = request.taskIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DisposeWorkTask",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DisposeWorkTaskResponse>(await this.callApi(params, req, runtime), new DisposeWorkTaskResponse({}));
    } else {
      return $tea.cast<DisposeWorkTaskResponse>(await this.execute(params, req, runtime), new DisposeWorkTaskResponse({}));
    }

  }

  /**
   * Handle Alert Work Order
   * 
   * @param request - DisposeWorkTaskRequest
   * @returns DisposeWorkTaskResponse
   */
  async disposeWorkTask(request: DisposeWorkTaskRequest): Promise<DisposeWorkTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disposeWorkTaskWithOptions(request, runtime);
  }

  /**
   * Query Alarm Details
   * 
   * @param request - GetAlarmDetailByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAlarmDetailByIdResponse
   */
  async getAlarmDetailByIdWithOptions(request: GetAlarmDetailByIdRequest, runtime: $Util.RuntimeOptions): Promise<GetAlarmDetailByIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetAlarmDetailById",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetAlarmDetailByIdResponse>(await this.callApi(params, req, runtime), new GetAlarmDetailByIdResponse({}));
    } else {
      return $tea.cast<GetAlarmDetailByIdResponse>(await this.execute(params, req, runtime), new GetAlarmDetailByIdResponse({}));
    }

  }

  /**
   * Query Alarm Details
   * 
   * @param request - GetAlarmDetailByIdRequest
   * @returns GetAlarmDetailByIdResponse
   */
  async getAlarmDetailById(request: GetAlarmDetailByIdRequest): Promise<GetAlarmDetailByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAlarmDetailByIdWithOptions(request, runtime);
  }

  /**
   * Trend of Attacked Asset Convergence
   * 
   * @param request - GetAttackedAssetDealRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAttackedAssetDealResponse
   */
  async getAttackedAssetDealWithOptions(request: GetAttackedAssetDealRequest, runtime: $Util.RuntimeOptions): Promise<GetAttackedAssetDealResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dateType)) {
      body["DateType"] = request.dateType;
    }

    if (!Util.isUnset(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.suspEventSource)) {
      body["SuspEventSource"] = request.suspEventSource;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetAttackedAssetDeal",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetAttackedAssetDealResponse>(await this.callApi(params, req, runtime), new GetAttackedAssetDealResponse({}));
    } else {
      return $tea.cast<GetAttackedAssetDealResponse>(await this.execute(params, req, runtime), new GetAttackedAssetDealResponse({}));
    }

  }

  /**
   * Trend of Attacked Asset Convergence
   * 
   * @param request - GetAttackedAssetDealRequest
   * @returns GetAttackedAssetDealResponse
   */
  async getAttackedAssetDeal(request: GetAttackedAssetDealRequest): Promise<GetAttackedAssetDealResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAttackedAssetDealWithOptions(request, runtime);
  }

  /**
   * Compliance Risk Convergence Trend
   * 
   * @param request - GetBaselineSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBaselineSummaryResponse
   */
  async getBaselineSummaryWithOptions(request: GetBaselineSummaryRequest, runtime: $Util.RuntimeOptions): Promise<GetBaselineSummaryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dateType)) {
      body["DateType"] = request.dateType;
    }

    if (!Util.isUnset(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.suspEventSource)) {
      body["SuspEventSource"] = request.suspEventSource;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetBaselineSummary",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetBaselineSummaryResponse>(await this.callApi(params, req, runtime), new GetBaselineSummaryResponse({}));
    } else {
      return $tea.cast<GetBaselineSummaryResponse>(await this.execute(params, req, runtime), new GetBaselineSummaryResponse({}));
    }

  }

  /**
   * Compliance Risk Convergence Trend
   * 
   * @param request - GetBaselineSummaryRequest
   * @returns GetBaselineSummaryResponse
   */
  async getBaselineSummary(request: GetBaselineSummaryRequest): Promise<GetBaselineSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBaselineSummaryWithOptions(request, runtime);
  }

  /**
   * Get Console Score
   * 
   * @param request - GetConsoleScoreRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConsoleScoreResponse
   */
  async getConsoleScoreWithOptions(request: GetConsoleScoreRequest, runtime: $Util.RuntimeOptions): Promise<GetConsoleScoreResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dateType)) {
      body["DateType"] = request.dateType;
    }

    if (!Util.isUnset(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.suspEventSource)) {
      body["SuspEventSource"] = request.suspEventSource;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetConsoleScore",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetConsoleScoreResponse>(await this.callApi(params, req, runtime), new GetConsoleScoreResponse({}));
    } else {
      return $tea.cast<GetConsoleScoreResponse>(await this.execute(params, req, runtime), new GetConsoleScoreResponse({}));
    }

  }

  /**
   * Get Console Score
   * 
   * @param request - GetConsoleScoreRequest
   * @returns GetConsoleScoreResponse
   */
  async getConsoleScore(request: GetConsoleScoreRequest): Promise<GetConsoleScoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConsoleScoreWithOptions(request, runtime);
  }

  /**
   * Query Risk Details
   * 
   * @param request - GetDetailByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDetailByIdResponse
   */
  async getDetailByIdWithOptions(request: GetDetailByIdRequest, runtime: $Util.RuntimeOptions): Promise<GetDetailByIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDetailById",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetDetailByIdResponse>(await this.callApi(params, req, runtime), new GetDetailByIdResponse({}));
    } else {
      return $tea.cast<GetDetailByIdResponse>(await this.execute(params, req, runtime), new GetDetailByIdResponse({}));
    }

  }

  /**
   * Query Risk Details
   * 
   * @param request - GetDetailByIdRequest
   * @returns GetDetailByIdResponse
   */
  async getDetailById(request: GetDetailByIdRequest): Promise<GetDetailByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDetailByIdWithOptions(request, runtime);
  }

  /**
   * Single Service Report Download
   * 
   * @param request - GetDocumentDownloadUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentDownloadUrlResponse
   */
  async getDocumentDownloadUrlWithOptions(request: GetDocumentDownloadUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetDocumentDownloadUrlResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDocumentDownloadUrl",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetDocumentDownloadUrlResponse>(await this.callApi(params, req, runtime), new GetDocumentDownloadUrlResponse({}));
    } else {
      return $tea.cast<GetDocumentDownloadUrlResponse>(await this.execute(params, req, runtime), new GetDocumentDownloadUrlResponse({}));
    }

  }

  /**
   * Single Service Report Download
   * 
   * @param request - GetDocumentDownloadUrlRequest
   * @returns GetDocumentDownloadUrlResponse
   */
  async getDocumentDownloadUrl(request: GetDocumentDownloadUrlRequest): Promise<GetDocumentDownloadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDocumentDownloadUrlWithOptions(request, runtime);
  }

  /**
   * Service Report Query
   * 
   * @param request - GetDocumentPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentPageResponse
   */
  async getDocumentPageWithOptions(request: GetDocumentPageRequest, runtime: $Util.RuntimeOptions): Promise<GetDocumentPageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.deliveredBy)) {
      body["DeliveredBy"] = request.deliveredBy;
    }

    if (!Util.isUnset(request.documentName)) {
      body["DocumentName"] = request.documentName;
    }

    if (!Util.isUnset(request.documentType)) {
      body["DocumentType"] = request.documentType;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.reportType)) {
      body["ReportType"] = request.reportType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDocumentPage",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetDocumentPageResponse>(await this.callApi(params, req, runtime), new GetDocumentPageResponse({}));
    } else {
      return $tea.cast<GetDocumentPageResponse>(await this.execute(params, req, runtime), new GetDocumentPageResponse({}));
    }

  }

  /**
   * Service Report Query
   * 
   * @param request - GetDocumentPageRequest
   * @returns GetDocumentPageResponse
   */
  async getDocumentPage(request: GetDocumentPageRequest): Promise<GetDocumentPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDocumentPageWithOptions(request, runtime);
  }

  /**
   * Service Report Home Page Statistics Acquisition
   * 
   * @param request - GetDocumentSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentSummaryResponse
   */
  async getDocumentSummaryWithOptions(request: GetDocumentSummaryRequest, runtime: $Util.RuntimeOptions): Promise<GetDocumentSummaryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.reportType)) {
      body["ReportType"] = request.reportType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDocumentSummary",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetDocumentSummaryResponse>(await this.callApi(params, req, runtime), new GetDocumentSummaryResponse({}));
    } else {
      return $tea.cast<GetDocumentSummaryResponse>(await this.execute(params, req, runtime), new GetDocumentSummaryResponse({}));
    }

  }

  /**
   * Service Report Home Page Statistics Acquisition
   * 
   * @param request - GetDocumentSummaryRequest
   * @returns GetDocumentSummaryResponse
   */
  async getDocumentSummary(request: GetDocumentSummaryRequest): Promise<GetDocumentSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDocumentSummaryWithOptions(request, runtime);
  }

  /**
   * Get Recently Uploaded Service Reports
   * 
   * @param request - GetRecentDocumentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRecentDocumentResponse
   */
  async getRecentDocumentWithOptions(request: GetRecentDocumentRequest, runtime: $Util.RuntimeOptions): Promise<GetRecentDocumentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dateType)) {
      body["DateType"] = request.dateType;
    }

    if (!Util.isUnset(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.suspEventSource)) {
      body["SuspEventSource"] = request.suspEventSource;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetRecentDocument",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetRecentDocumentResponse>(await this.callApi(params, req, runtime), new GetRecentDocumentResponse({}));
    } else {
      return $tea.cast<GetRecentDocumentResponse>(await this.execute(params, req, runtime), new GetRecentDocumentResponse({}));
    }

  }

  /**
   * Get Recently Uploaded Service Reports
   * 
   * @param request - GetRecentDocumentRequest
   * @returns GetRecentDocumentResponse
   */
  async getRecentDocument(request: GetRecentDocumentRequest): Promise<GetRecentDocumentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRecentDocumentWithOptions(request, runtime);
  }

  /**
   * Get Safety Coverage
   * 
   * @param request - GetSafetyCoverRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSafetyCoverResponse
   */
  async getSafetyCoverWithOptions(request: GetSafetyCoverRequest, runtime: $Util.RuntimeOptions): Promise<GetSafetyCoverResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dateType)) {
      body["DateType"] = request.dateType;
    }

    if (!Util.isUnset(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.suspEventSource)) {
      body["SuspEventSource"] = request.suspEventSource;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetSafetyCover",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetSafetyCoverResponse>(await this.callApi(params, req, runtime), new GetSafetyCoverResponse({}));
    } else {
      return $tea.cast<GetSafetyCoverResponse>(await this.execute(params, req, runtime), new GetSafetyCoverResponse({}));
    }

  }

  /**
   * Get Safety Coverage
   * 
   * @param request - GetSafetyCoverRequest
   * @returns GetSafetyCoverResponse
   */
  async getSafetyCover(request: GetSafetyCoverRequest): Promise<GetSafetyCoverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSafetyCoverWithOptions(request, runtime);
  }

  /**
   * Get SOW List
   * 
   * @param request - GetSowListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSowListResponse
   */
  async getSowListWithOptions(request: GetSowListRequest, runtime: $Util.RuntimeOptions): Promise<GetSowListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dateType)) {
      body["DateType"] = request.dateType;
    }

    if (!Util.isUnset(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.suspEventSource)) {
      body["SuspEventSource"] = request.suspEventSource;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetSowList",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetSowListResponse>(await this.callApi(params, req, runtime), new GetSowListResponse({}));
    } else {
      return $tea.cast<GetSowListResponse>(await this.execute(params, req, runtime), new GetSowListResponse({}));
    }

  }

  /**
   * Get SOW List
   * 
   * @param request - GetSowListRequest
   * @returns GetSowListResponse
   */
  async getSowList(request: GetSowListRequest): Promise<GetSowListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSowListWithOptions(request, runtime);
  }

  /**
   * Alarm Disposal Query
   * 
   * @param request - GetSuspEventPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSuspEventPageResponse
   */
  async getSuspEventPageWithOptions(request: GetSuspEventPageRequest, runtime: $Util.RuntimeOptions): Promise<GetSuspEventPageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alarmEndTime)) {
      body["AlarmEndTime"] = request.alarmEndTime;
    }

    if (!Util.isUnset(request.alarmStartTime)) {
      body["AlarmStartTime"] = request.alarmStartTime;
    }

    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.source)) {
      body["Source"] = request.source;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetSuspEventPage",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetSuspEventPageResponse>(await this.callApi(params, req, runtime), new GetSuspEventPageResponse({}));
    } else {
      return $tea.cast<GetSuspEventPageResponse>(await this.execute(params, req, runtime), new GetSuspEventPageResponse({}));
    }

  }

  /**
   * Alarm Disposal Query
   * 
   * @param request - GetSuspEventPageRequest
   * @returns GetSuspEventPageResponse
   */
  async getSuspEventPage(request: GetSuspEventPageRequest): Promise<GetSuspEventPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSuspEventPageWithOptions(request, runtime);
  }

  /**
   * Get Alert Statistics
   * 
   * @param request - GetSuspEventSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSuspEventSummaryResponse
   */
  async getSuspEventSummaryWithOptions(request: GetSuspEventSummaryRequest, runtime: $Util.RuntimeOptions): Promise<GetSuspEventSummaryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dateType)) {
      body["DateType"] = request.dateType;
    }

    if (!Util.isUnset(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.suspEventSource)) {
      body["SuspEventSource"] = request.suspEventSource;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetSuspEventSummary",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetSuspEventSummaryResponse>(await this.callApi(params, req, runtime), new GetSuspEventSummaryResponse({}));
    } else {
      return $tea.cast<GetSuspEventSummaryResponse>(await this.execute(params, req, runtime), new GetSuspEventSummaryResponse({}));
    }

  }

  /**
   * Get Alert Statistics
   * 
   * @param request - GetSuspEventSummaryRequest
   * @returns GetSuspEventSummaryResponse
   */
  async getSuspEventSummary(request: GetSuspEventSummaryRequest): Promise<GetSuspEventSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSuspEventSummaryWithOptions(request, runtime);
  }

  /**
   * Alarm Page Statistics
   * 
   * @param request - GetSuspPageSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSuspPageSummaryResponse
   */
  async getSuspPageSummaryWithOptions(runtime: $Util.RuntimeOptions): Promise<GetSuspPageSummaryResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetSuspPageSummary",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetSuspPageSummaryResponse>(await this.callApi(params, req, runtime), new GetSuspPageSummaryResponse({}));
    } else {
      return $tea.cast<GetSuspPageSummaryResponse>(await this.execute(params, req, runtime), new GetSuspPageSummaryResponse({}));
    }

  }

  /**
   * Alarm Page Statistics
   * @returns GetSuspPageSummaryResponse
   */
  async getSuspPageSummary(): Promise<GetSuspPageSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSuspPageSummaryWithOptions(runtime);
  }

  /**
   * Query User Activation Status
   * 
   * @param request - GetUserStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserStatusResponse
   */
  async getUserStatusWithOptions(runtime: $Util.RuntimeOptions): Promise<GetUserStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetUserStatus",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetUserStatusResponse>(await this.callApi(params, req, runtime), new GetUserStatusResponse({}));
    } else {
      return $tea.cast<GetUserStatusResponse>(await this.execute(params, req, runtime), new GetUserStatusResponse({}));
    }

  }

  /**
   * Query User Activation Status
   * @returns GetUserStatusResponse
   */
  async getUserStatus(): Promise<GetUserStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserStatusWithOptions(runtime);
  }

  /**
   * Risk Query
   * 
   * @param request - GetVulItemPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVulItemPageResponse
   */
  async getVulItemPageWithOptions(request: GetVulItemPageRequest, runtime: $Util.RuntimeOptions): Promise<GetVulItemPageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aliasName)) {
      body["AliasName"] = request.aliasName;
    }

    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.dealed)) {
      body["Dealed"] = request.dealed;
    }

    if (!Util.isUnset(request.level)) {
      body["Level"] = request.level;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.scanType)) {
      body["ScanType"] = request.scanType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetVulItemPage",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetVulItemPageResponse>(await this.callApi(params, req, runtime), new GetVulItemPageResponse({}));
    } else {
      return $tea.cast<GetVulItemPageResponse>(await this.execute(params, req, runtime), new GetVulItemPageResponse({}));
    }

  }

  /**
   * Risk Query
   * 
   * @param request - GetVulItemPageRequest
   * @returns GetVulItemPageResponse
   */
  async getVulItemPage(request: GetVulItemPageRequest): Promise<GetVulItemPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVulItemPageWithOptions(request, runtime);
  }

  /**
   * Query processed details
   * 
   * @param request - GetVulListByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVulListByIdResponse
   */
  async getVulListByIdWithOptions(request: GetVulListByIdRequest, runtime: $Util.RuntimeOptions): Promise<GetVulListByIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.dealed)) {
      body["Dealed"] = request.dealed;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.necessity)) {
      body["Necessity"] = request.necessity;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.remark)) {
      body["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.uuids)) {
      body["Uuids"] = request.uuids;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetVulListById",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetVulListByIdResponse>(await this.callApi(params, req, runtime), new GetVulListByIdResponse({}));
    } else {
      return $tea.cast<GetVulListByIdResponse>(await this.execute(params, req, runtime), new GetVulListByIdResponse({}));
    }

  }

  /**
   * Query processed details
   * 
   * @param request - GetVulListByIdRequest
   * @returns GetVulListByIdResponse
   */
  async getVulListById(request: GetVulListByIdRequest): Promise<GetVulListByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVulListByIdWithOptions(request, runtime);
  }

  /**
   * Risk Page Statistics
   * 
   * @param request - GetVulPageSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVulPageSummaryResponse
   */
  async getVulPageSummaryWithOptions(runtime: $Util.RuntimeOptions): Promise<GetVulPageSummaryResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetVulPageSummary",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetVulPageSummaryResponse>(await this.callApi(params, req, runtime), new GetVulPageSummaryResponse({}));
    } else {
      return $tea.cast<GetVulPageSummaryResponse>(await this.execute(params, req, runtime), new GetVulPageSummaryResponse({}));
    }

  }

  /**
   * Risk Page Statistics
   * @returns GetVulPageSummaryResponse
   */
  async getVulPageSummary(): Promise<GetVulPageSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVulPageSummaryWithOptions(runtime);
  }

  /**
   * Get Risk Statistics
   * 
   * @param request - GetVulSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVulSummaryResponse
   */
  async getVulSummaryWithOptions(request: GetVulSummaryRequest, runtime: $Util.RuntimeOptions): Promise<GetVulSummaryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dateType)) {
      body["DateType"] = request.dateType;
    }

    if (!Util.isUnset(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.suspEventSource)) {
      body["SuspEventSource"] = request.suspEventSource;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetVulSummary",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetVulSummaryResponse>(await this.callApi(params, req, runtime), new GetVulSummaryResponse({}));
    } else {
      return $tea.cast<GetVulSummaryResponse>(await this.execute(params, req, runtime), new GetVulSummaryResponse({}));
    }

  }

  /**
   * Get Risk Statistics
   * 
   * @param request - GetVulSummaryRequest
   * @returns GetVulSummaryResponse
   */
  async getVulSummary(request: GetVulSummaryRequest): Promise<GetVulSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVulSummaryWithOptions(request, runtime);
  }

  /**
   * Get the First Line Work Order Statistics
   * 
   * @param request - GetWorkTaskSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkTaskSummaryResponse
   */
  async getWorkTaskSummaryWithOptions(request: GetWorkTaskSummaryRequest, runtime: $Util.RuntimeOptions): Promise<GetWorkTaskSummaryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dateType)) {
      body["DateType"] = request.dateType;
    }

    if (!Util.isUnset(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.suspEventSource)) {
      body["SuspEventSource"] = request.suspEventSource;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetWorkTaskSummary",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetWorkTaskSummaryResponse>(await this.callApi(params, req, runtime), new GetWorkTaskSummaryResponse({}));
    } else {
      return $tea.cast<GetWorkTaskSummaryResponse>(await this.execute(params, req, runtime), new GetWorkTaskSummaryResponse({}));
    }

  }

  /**
   * Get the First Line Work Order Statistics
   * 
   * @param request - GetWorkTaskSummaryRequest
   * @returns GetWorkTaskSummaryResponse
   */
  async getWorkTaskSummary(request: GetWorkTaskSummaryRequest): Promise<GetWorkTaskSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWorkTaskSummaryWithOptions(request, runtime);
  }

  /**
   * Service Customer Information Query
   * 
   * @param request - PageServiceCustomerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PageServiceCustomerResponse
   */
  async pageServiceCustomerWithOptions(request: PageServiceCustomerRequest, runtime: $Util.RuntimeOptions): Promise<PageServiceCustomerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.authStatus)) {
      body["AuthStatus"] = request.authStatus;
    }

    if (!Util.isUnset(request.cmAuthStatus)) {
      body["CmAuthStatus"] = request.cmAuthStatus;
    }

    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.monitorAuthStatus)) {
      body["MonitorAuthStatus"] = request.monitorAuthStatus;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PageServiceCustomer",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<PageServiceCustomerResponse>(await this.callApi(params, req, runtime), new PageServiceCustomerResponse({}));
    } else {
      return $tea.cast<PageServiceCustomerResponse>(await this.execute(params, req, runtime), new PageServiceCustomerResponse({}));
    }

  }

  /**
   * Service Customer Information Query
   * 
   * @param request - PageServiceCustomerRequest
   * @returns PageServiceCustomerResponse
   */
  async pageServiceCustomer(request: PageServiceCustomerRequest): Promise<PageServiceCustomerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pageServiceCustomerWithOptions(request, runtime);
  }

  /**
   * Send Custom Alert Event
   * 
   * @param request - SendCustomEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendCustomEventResponse
   */
  async sendCustomEventWithOptions(request: SendCustomEventRequest, runtime: $Util.RuntimeOptions): Promise<SendCustomEventResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.customerId)) {
      body["CustomerId"] = request.customerId;
    }

    if (!Util.isUnset(request.dataSource)) {
      body["DataSource"] = request.dataSource;
    }

    if (!Util.isUnset(request.eventDescription)) {
      body["EventDescription"] = request.eventDescription;
    }

    if (!Util.isUnset(request.eventDetails)) {
      body["EventDetails"] = request.eventDetails;
    }

    if (!Util.isUnset(request.eventName)) {
      body["EventName"] = request.eventName;
    }

    if (!Util.isUnset(request.eventType)) {
      body["EventType"] = request.eventType;
    }

    if (!Util.isUnset(request.findTime)) {
      body["FindTime"] = request.findTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.isSend)) {
      body["IsSend"] = request.isSend;
    }

    if (!Util.isUnset(request.level)) {
      body["Level"] = request.level;
    }

    if (!Util.isUnset(request.occurrenceTime)) {
      body["OccurrenceTime"] = request.occurrenceTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      body["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.product)) {
      body["Product"] = request.product;
    }

    if (!Util.isUnset(request.uniqueId)) {
      body["UniqueId"] = request.uniqueId;
    }

    if (!Util.isUnset(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SendCustomEvent",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<SendCustomEventResponse>(await this.callApi(params, req, runtime), new SendCustomEventResponse({}));
    } else {
      return $tea.cast<SendCustomEventResponse>(await this.execute(params, req, runtime), new SendCustomEventResponse({}));
    }

  }

  /**
   * Send Custom Alert Event
   * 
   * @param request - SendCustomEventRequest
   * @returns SendCustomEventResponse
   */
  async sendCustomEvent(request: SendCustomEventRequest): Promise<SendCustomEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendCustomEventWithOptions(request, runtime);
  }

}
