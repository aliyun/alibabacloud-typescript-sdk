// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateServiceWorkOrderRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 426556
   */
  creator?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1477832102462645
   */
  customerId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5
   */
  durationDay?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Y
   */
  isAttachment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Y
   */
  isWorkOrderNotify?: string;
  /**
   * @example
   * 5
   */
  notifyDay?: string;
  /**
   * @example
   * 10
   */
  notifyId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  operateRemark?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CREATE
   */
  operateType?: string;
  /**
   * @remarks
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
   * This parameter is required.
   * 
   * @example
   * 2021-01-21 15:25:25
   */
  startTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  workOrderDetail?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workOrderName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workOrderSource?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * UNPROCESSED
   */
  workOrderStatus?: string;
  /**
   * @remarks
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
   * @example
   * 200
   */
  code?: string;
  data?: CreateServiceWorkOrderResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7DC44321-7AAE-51CD-8E5F-CEB968569042
   */
  requestId?: string;
  /**
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

export class DisposeServiceWorkOrderRequest extends $tea.Model {
  attachmentName?: string;
  /**
   * @example
   * 2024-04-14 00:00:00
   */
  endTime?: number;
  /**
   * @example
   * 405639
   */
  forwardOwnerId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23172
   */
  id?: number;
  /**
   * @example
   * Y
   */
  isAttachment?: string;
  /**
   * @example
   * Y
   */
  isWorkOrderNotify?: string;
  /**
   * @example
   * 10
   */
  notifyId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  operateRemark?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PROCESSED
   */
  operateType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 396120
   */
  operator?: string;
  /**
   * @example
   * 2024-04-02 00:00:00
   */
  startTime?: number;
  /**
   * @example
   * 336333
   */
  upgradeOwnerId?: string;
  workOrderDetail?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workOrderName?: string;
  /**
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
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ED520610-6231-5D80-BADD-A8CDC7BBC809
   */
  requestId?: string;
  /**
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
   * This parameter is required.
   * 
   * @example
   * WB01089929
   */
  operator?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  optRemark?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8
   */
  status?: number;
  /**
   * @remarks
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
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Success.
   */
  message?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 86786E4C-6416-55CF-9AB6-5E275B68801D
   */
  requestId?: string;
  /**
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

export class GetAttackedAssetDealRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * month
   */
  dateType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1732268720000
   */
  endDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1732268720000
   */
  startDate?: number;
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
   * @example
   * 200
   */
  code?: string;
  data?: GetAttackedAssetDealResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1E74F11C-B4A8-5774-962C-02003BA8504E
   */
  requestId?: string;
  /**
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
   * This parameter is required.
   * 
   * @example
   * month
   */
  dateType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1732156885986
   */
  endDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1729478485000
   */
  startDate?: number;
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
   * @example
   * 200
   */
  code?: string;
  data?: GetBaselineSummaryResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 67D61738-5E38-5164-947A-34E3850D493A
   */
  requestId?: string;
  /**
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

export class GetDetailByIdRequest extends $tea.Model {
  /**
   * @remarks
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
   * @example
   * 404
   */
  code?: string;
  data?: GetDetailByIdResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DAB46EC5-3746-59C4-B6D2-469F442EC73F
   */
  requestId?: string;
  /**
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
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * https://oos-cn.ctyunapi.cn/example-bucket/test/1.jpg
   */
  data?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * C7BE80B4-7692-54FA-AB22-2A7DF08C4754
   */
  requestId?: string;
  /**
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
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  deliveredBy?: string;
  documentName?: string;
  /**
   * @example
   * 0
   */
  documentType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
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
   * @example
   * 200
   */
  code?: string;
  data?: GetDocumentPageResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  pageInfo?: GetDocumentPageResponseBodyPageInfo;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 04DAD7B4-E1DA-5C2C-8E5C-A1EDC880CF60
   */
  requestId?: string;
  /**
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
   * @example
   * 200
   */
  code?: string;
  data?: GetDocumentSummaryResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7903F2DE-D9EE-5D16-8A08-E9223E54B281
   */
  requestId?: string;
  /**
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
   * This parameter is required.
   */
  dateType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  endDate?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  startDate?: number;
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
   * @example
   * 200
   */
  code?: string;
  data?: GetRecentDocumentResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4916FA8D-F294-518D-B373-8B59D63CAB19
   */
  requestId?: string;
  /**
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
   * This parameter is required.
   * 
   * @example
   * month
   */
  dateType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1732268720000
   */
  endDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1732255620000
   */
  startDate?: number;
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
   * @example
   * 404
   */
  code?: string;
  data?: GetSafetyCoverResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * system error
   */
  message?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 564f8bb9-df3c-42a0-877a-b35d48f66603
   */
  requestId?: string;
  /**
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

export class GetSuspEventPageRequest extends $tea.Model {
  /**
   * @example
   * 1732515522000
   */
  alarmEndTime?: number;
  /**
   * @example
   * 1722515522000
   */
  alarmStartTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * SUSP_EVENT
   */
  source?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: GetSuspEventPageResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * system error
   */
  message?: string;
  pageInfo?: GetSuspEventPageResponseBodyPageInfo;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AFA6F7B7-7C4B-58BB-B8FB-E0FFA4483561
   */
  requestId?: string;
  /**
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
   * This parameter is required.
   * 
   * @example
   * month
   */
  dateType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1732156885986
   */
  endDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1729478485000
   */
  startDate?: number;
  /**
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
   * @example
   * 200
   */
  code?: string;
  data?: GetSuspEventSummaryResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9B2DAE9B-B901-5818-AFEF-E5637D938280
   */
  requestId?: string;
  /**
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
  code?: string;
  data?: GetSuspPageSummaryResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * This parameter is required.
   */
  requestId?: string;
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
   * @example
   * 200
   */
  code?: string;
  data?: GetUserStatusResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * D8DBD769-613E-5E6B-A9FD-B622375B152D
   */
  requestId?: string;
  /**
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
   * @example
   * RHSA-2018:3665-Important: NetworkManager security update
   */
  aliasName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * n
   */
  dealed?: string;
  /**
   * @example
   * later
   */
  level?: string;
  /**
   * @example
   * oval:com.redhat.rhsa:def:20183665
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
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
   * @example
   * 200
   */
  code?: string;
  data?: GetVulItemPageResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  pageInfo?: GetVulItemPageResponseBodyPageInfo;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 02F8BBF3-2D61-5982-8911-EEB387BE3AF8
   */
  requestId?: string;
  /**
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

export class GetVulPageSummaryResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetVulPageSummaryResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * operation success
   */
  message?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * A3A575C8-80F9-5F04-AA24-CCAC246884A3
   */
  requestId?: string;
  /**
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
   * This parameter is required.
   * 
   * @example
   * month
   */
  dateType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1732156885986
   */
  endDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1729478485000
   */
  startDate?: number;
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
   * @example
   * OK
   */
  code?: string;
  data?: GetVulSummaryResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * system error
   */
  message?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * EF801DD1-D934-51B3-92D4-776CE17B184F
   */
  requestId?: string;
  /**
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
   * This parameter is required.
   * 
   * @example
   * month
   */
  dateType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1732156885986
   */
  endDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1729478485000
   */
  startDate?: number;
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
   * @example
   * OK
   */
  code?: string;
  data?: GetWorkTaskSummaryResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * EF801DD1-D934-51B3-92D4-776CE17B184F
   */
  requestId?: string;
  /**
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
  authStatus?: number;
  cmAuthStatus?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  currentPage?: number;
  endTime?: number;
  monitorAuthStatus?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  pageSize?: number;
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
  code?: string;
  data?: PageServiceCustomerResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  pageInfo?: PageServiceCustomerResponseBodyPageInfo;
  /**
   * @remarks
   * Id of the request
   * 
   * This parameter is required.
   */
  requestId?: string;
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
   * This parameter is required.
   * 
   * @example
   * 1214484929940219
   */
  customerId?: string;
  /**
   * @example
   * aegis_suspicious_event
   */
  dataSource?: string;
  eventDescription?: string;
  eventDetails?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  eventName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SUSP_CUSTOM_CFW
   */
  eventType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-04-23 14:47:34
   */
  findTime?: number;
  /**
   * @example
   * i-uf60h3ns25bzq9eyf8ps
   */
  instanceId?: string;
  instanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  isSend?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * serious
   */
  level?: string;
  /**
   * @example
   * 1724956996000
   */
  occurrenceTime?: number;
  ownerId?: string;
  /**
   * @example
   * CloudSecCenter
   */
  product?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 68888f02-98f2-492b-a2b2-5b13295755b7
   */
  uniqueId?: string;
  /**
   * @remarks
   * UUID。
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
   * @example
   * 200
   */
  code?: string;
  data?: SendCustomEventResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 606EB377-155D-5AEB-AC4F-F013444A4C45
   */
  requestId?: string;
  /**
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
   * @example
   * 2024-03-07 16:45:01
   */
  completeTime?: number;
  /**
   * @example
   * 2024-10-04T02:19:55Z
   */
  createTime?: number;
  /**
   * @example
   * 426556
   */
  creator?: string;
  /**
   * @example
   * 1477832102462645
   */
  customerId?: string;
  /**
   * @example
   * 24-03-11 00:00:00
   */
  endTime?: number;
  /**
   * @example
   * 1978941
   */
  id?: number;
  /**
   * @example
   * 426556
   */
  ownerId?: string;
  /**
   * @example
   * 2021-01-21 15:25:25
   */
  startTime?: number;
  workOrderDetail?: string;
  workOrderName?: string;
  workOrderSource?: string;
  /**
   * @example
   * UNPROCESSED
   */
  workOrderStatus?: string;
  /**
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

export class GetAttackedAssetDealResponseBodyDataEcsTrendList extends $tea.Model {
  date?: string;
  /**
   * @example
   * 2
   */
  dealCount?: number;
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
  date?: string;
  /**
   * @example
   * 10
   */
  dealCount?: number;
  /**
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
   * @example
   * CVE-2022-21291
   */
  cveId?: string;
  /**
   * @example
   * 10.0
   */
  cvssScore?: string;
  /**
   * @example
   * https://avd.aliyun.com/detail/CVE-2022-21291
   */
  fixSuggestion?: string;
  /**
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
  deliveredBy?: string;
  documentName?: string;
  /**
   * @example
   * 3
   */
  documentType?: string;
  /**
   * @example
   * 346409
   */
  id?: number;
  /**
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
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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
   * @example
   * 10
   */
  documentCount?: number;
  /**
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
   * @example
   * 360491
   */
  id?: number;
  name?: string;
  /**
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
   * @example
   * 5
   */
  noProtectionCount?: number;
  /**
   * @example
   * 5
   */
  protectionCount?: number;
  /**
   * @example
   * 35.00
   */
  protectionGrowthRate?: string;
  /**
   * @example
   * 50.00
   */
  protectionRate?: string;
  /**
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
   * @example
   * 5
   */
  noProtectionCount?: number;
  /**
   * @example
   * 5
   */
  protectionCount?: number;
  /**
   * @example
   * 35.00
   */
  protectionGrowthRate?: string;
  /**
   * @example
   * 50.00
   */
  protectionRate?: string;
  /**
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
   * @example
   * 5
   */
  noProtectionCount?: number;
  /**
   * @example
   * 5
   */
  protectionCount?: number;
  /**
   * @example
   * 35.00
   */
  protectionGrowthRate?: string;
  /**
   * @example
   * 50.00
   */
  protectionRate?: string;
  /**
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
  cfwProtection?: GetSafetyCoverResponseBodyDataCfwProtection;
  ecsProtection?: GetSafetyCoverResponseBodyDataEcsProtection;
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

export class GetSuspEventPageResponseBodyData extends $tea.Model {
  alarmEventType?: string;
  /**
   * @example
   * 5b1eeebe4f22daa2b177298234214fa3
   */
  alarmId?: number;
  alarmName?: string;
  /**
   * @example
   * SUSP_EVENT
   */
  alarmSource?: string;
  /**
   * @example
   * 1722515522000
   */
  alarmTime?: string;
  analysisResult?: string;
  /**
   * @example
   * 1732515522000
   */
  dealTime?: string;
  /**
   * @example
   * suspicious
   */
  eventLevel?: string;
  /**
   * @example
   * 9947
   */
  id?: number;
  /**
   * @example
   * shells-azhou
   */
  instanceName?: string;
  /**
   * @example
   * 47.99.188.31
   */
  internetIp?: string;
  /**
   * @example
   * 172.16.109.130
   */
  intranetIp?: string;
  occurrenceTime?: string;
  ownerId?: string;
  remark?: string;
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
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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
  date?: string;
  /**
   * @example
   * 10
   */
  ddosCount?: number;
  /**
   * @example
   * 10
   */
  eipCount?: number;
  /**
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
   * @example
   * 20
   */
  completedCount?: number;
  /**
   * @example
   * 5
   */
  handingCount?: number;
  /**
   * @example
   * 90
   */
  handingRate?: string;
  /**
   * @example
   * 35
   */
  totalCount?: number;
  /**
   * @example
   * 10
   */
  totalGrowthRate?: string;
  /**
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
  eventName?: string;
  /**
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
  date?: string;
  /**
   * @example
   * 10
   */
  dealCount?: number;
  /**
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
  networkAttackTrendDTO?: GetSuspEventSummaryResponseBodyDataNetworkAttackTrendDTO;
  suspEventDealSummaryDTO?: GetSuspEventSummaryResponseBodyDataSuspEventDealSummaryDTO;
  suspEventTopDTO?: GetSuspEventSummaryResponseBodyDataSuspEventTopDTO;
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
  completedCount?: number;
  handingCount?: number;
  highCount?: number;
  lowCount?: number;
  mediumCount?: number;
  totalCount?: number;
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
   * @example
   * official
   */
  customerType?: string;
  /**
   * @example
   * 2023-09-28 00:00:00
   */
  endDate?: string;
  /**
   * @example
   * 726cec3c-4887-4354-8c21-c0ad12e10fc2
   */
  instanceId?: string;
  /**
   * @example
   * 2023-09-20 00:00:00
   */
  startDate?: string;
  /**
   * @example
   * FirstLogin
   */
  status?: string;
  /**
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
  aliasName?: string;
  /**
   * @example
   * 74
   */
  asapCount?: number;
  /**
   * @example
   * 1940494487193744
   */
  customerId?: string;
  /**
   * @example
   * https://avd.aliyun.com/detail/
   */
  cveUrlPrefix?: string;
  /**
   * @example
   * y
   */
  dealed?: string;
  /**
   * @example
   * 2023-04-23 14:47:34
   */
  findTime?: string;
  /**
   * @example
   * 20
   */
  handledCount?: number;
  /**
   * @example
   * 353845
   */
  id?: number;
  /**
   * @example
   * 10
   */
  laterCount?: number;
  /**
   * @example
   * later
   */
  level?: string;
  /**
   * @example
   * oval:com.redhat.rhsa:def:20205002
   */
  name?: string;
  /**
   * @example
   * 8
   */
  nntfCount?: number;
  /**
   * @example
   * CVE-2019-20907
   */
  related?: string;
  /**
   * @example
   * 20
   */
  relatedCveCount?: number;
  /**
   * @example
   * sca
   */
  scanType?: string;
  /**
   * @example
   * Elevation of Privilege
   */
  tags?: string;
  /**
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
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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

export class GetVulPageSummaryResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1990
   */
  completedCount?: number;
  /**
   * @example
   * 6
   */
  handingCount?: number;
  /**
   * @example
   * 500
   */
  highCount?: number;
  /**
   * @example
   * 1000
   */
  lowCount?: number;
  /**
   * @example
   * 500
   */
  mediumCount?: number;
  /**
   * @example
   * 2000
   */
  totalCount?: number;
  /**
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
  date?: string;
  /**
   * @example
   * 10
   */
  dealCount?: number;
  /**
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
   * @example
   * 10
   */
  completedCount?: number;
  /**
   * @example
   * 50
   */
  dealRate?: string;
  trendList?: GetVulSummaryResponseBodyDataTrendList[];
  /**
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
   * @example
   * 60
   */
  dealAverageDuration?: number;
  /**
   * @example
   * 20
   */
  dealAverageDurationGrowthRate?: string;
  /**
   * @example
   * 100
   */
  dealWorkTaskCount?: number;
  /**
   * @example
   * 20
   */
  dealWorkTaskCountRate?: string;
  /**
   * @example
   * 10
   */
  workTaskCount?: number;
  /**
   * @example
   * 90
   */
  workTaskDealRate?: string;
  /**
   * @example
   * 20
   */
  workTaskDealRateGrowthRate?: string;
  /**
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
  aliuid?: string;
  authStatus?: number;
  cmAuthStatus?: number;
  endTime?: number;
  level?: string;
  monitorAuthStatus?: number;
  name?: string;
  ownId?: string;
  startTime?: number;
  userId?: string;
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
  currentPage?: number;
  pageSize?: number;
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
   * @example
   * 1601097845544644
   */
  customerId?: string;
  customerName?: string;
  /**
   * @example
   * c0dc71d1-8a1d-4043-9767-f6c420e34901-81bd
   */
  eventId?: string;
  /**
   * @example
   * SUSP_CUSTOM_WAF
   */
  eventType?: string;
  /**
   * @example
   * 1914348
   */
  id?: number;
  /**
   * @example
   * 352675
   */
  ownerId?: string;
  ownerName?: string;
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
   * 创建服务工单
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
    return $tea.cast<CreateServiceWorkOrderResponse>(await this.callApi(params, req, runtime), new CreateServiceWorkOrderResponse({}));
  }

  /**
   * 创建服务工单
   * 
   * @param request - CreateServiceWorkOrderRequest
   * @returns CreateServiceWorkOrderResponse
   */
  async createServiceWorkOrder(request: CreateServiceWorkOrderRequest): Promise<CreateServiceWorkOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceWorkOrderWithOptions(request, runtime);
  }

  /**
   * 处理服务工单
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
    return $tea.cast<DisposeServiceWorkOrderResponse>(await this.callApi(params, req, runtime), new DisposeServiceWorkOrderResponse({}));
  }

  /**
   * 处理服务工单
   * 
   * @param request - DisposeServiceWorkOrderRequest
   * @returns DisposeServiceWorkOrderResponse
   */
  async disposeServiceWorkOrder(request: DisposeServiceWorkOrderRequest): Promise<DisposeServiceWorkOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disposeServiceWorkOrderWithOptions(request, runtime);
  }

  /**
   * 处理告警工单
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
    return $tea.cast<DisposeWorkTaskResponse>(await this.callApi(params, req, runtime), new DisposeWorkTaskResponse({}));
  }

  /**
   * 处理告警工单
   * 
   * @param request - DisposeWorkTaskRequest
   * @returns DisposeWorkTaskResponse
   */
  async disposeWorkTask(request: DisposeWorkTaskRequest): Promise<DisposeWorkTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disposeWorkTaskWithOptions(request, runtime);
  }

  /**
   * 被攻击资产收敛趋势
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
    return $tea.cast<GetAttackedAssetDealResponse>(await this.callApi(params, req, runtime), new GetAttackedAssetDealResponse({}));
  }

  /**
   * 被攻击资产收敛趋势
   * 
   * @param request - GetAttackedAssetDealRequest
   * @returns GetAttackedAssetDealResponse
   */
  async getAttackedAssetDeal(request: GetAttackedAssetDealRequest): Promise<GetAttackedAssetDealResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAttackedAssetDealWithOptions(request, runtime);
  }

  /**
   * 合规风险收敛趋势
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
    return $tea.cast<GetBaselineSummaryResponse>(await this.callApi(params, req, runtime), new GetBaselineSummaryResponse({}));
  }

  /**
   * 合规风险收敛趋势
   * 
   * @param request - GetBaselineSummaryRequest
   * @returns GetBaselineSummaryResponse
   */
  async getBaselineSummary(request: GetBaselineSummaryRequest): Promise<GetBaselineSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBaselineSummaryWithOptions(request, runtime);
  }

  /**
   * 查询风险详情
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
    return $tea.cast<GetDetailByIdResponse>(await this.callApi(params, req, runtime), new GetDetailByIdResponse({}));
  }

  /**
   * 查询风险详情
   * 
   * @param request - GetDetailByIdRequest
   * @returns GetDetailByIdResponse
   */
  async getDetailById(request: GetDetailByIdRequest): Promise<GetDetailByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDetailByIdWithOptions(request, runtime);
  }

  /**
   * 服务报告单个下载
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
    return $tea.cast<GetDocumentDownloadUrlResponse>(await this.callApi(params, req, runtime), new GetDocumentDownloadUrlResponse({}));
  }

  /**
   * 服务报告单个下载
   * 
   * @param request - GetDocumentDownloadUrlRequest
   * @returns GetDocumentDownloadUrlResponse
   */
  async getDocumentDownloadUrl(request: GetDocumentDownloadUrlRequest): Promise<GetDocumentDownloadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDocumentDownloadUrlWithOptions(request, runtime);
  }

  /**
   * 服务报告查询
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
    return $tea.cast<GetDocumentPageResponse>(await this.callApi(params, req, runtime), new GetDocumentPageResponse({}));
  }

  /**
   * 服务报告查询
   * 
   * @param request - GetDocumentPageRequest
   * @returns GetDocumentPageResponse
   */
  async getDocumentPage(request: GetDocumentPageRequest): Promise<GetDocumentPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDocumentPageWithOptions(request, runtime);
  }

  /**
   * 服务报告首页统计项获取
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
    return $tea.cast<GetDocumentSummaryResponse>(await this.callApi(params, req, runtime), new GetDocumentSummaryResponse({}));
  }

  /**
   * 服务报告首页统计项获取
   * 
   * @param request - GetDocumentSummaryRequest
   * @returns GetDocumentSummaryResponse
   */
  async getDocumentSummary(request: GetDocumentSummaryRequest): Promise<GetDocumentSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDocumentSummaryWithOptions(request, runtime);
  }

  /**
   * 得到最近上传的服务报告
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
    return $tea.cast<GetRecentDocumentResponse>(await this.callApi(params, req, runtime), new GetRecentDocumentResponse({}));
  }

  /**
   * 得到最近上传的服务报告
   * 
   * @param request - GetRecentDocumentRequest
   * @returns GetRecentDocumentResponse
   */
  async getRecentDocument(request: GetRecentDocumentRequest): Promise<GetRecentDocumentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRecentDocumentWithOptions(request, runtime);
  }

  /**
   * 得到安全防护覆盖度
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
    return $tea.cast<GetSafetyCoverResponse>(await this.callApi(params, req, runtime), new GetSafetyCoverResponse({}));
  }

  /**
   * 得到安全防护覆盖度
   * 
   * @param request - GetSafetyCoverRequest
   * @returns GetSafetyCoverResponse
   */
  async getSafetyCover(request: GetSafetyCoverRequest): Promise<GetSafetyCoverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSafetyCoverWithOptions(request, runtime);
  }

  /**
   * 告警处置查询
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
    return $tea.cast<GetSuspEventPageResponse>(await this.callApi(params, req, runtime), new GetSuspEventPageResponse({}));
  }

  /**
   * 告警处置查询
   * 
   * @param request - GetSuspEventPageRequest
   * @returns GetSuspEventPageResponse
   */
  async getSuspEventPage(request: GetSuspEventPageRequest): Promise<GetSuspEventPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSuspEventPageWithOptions(request, runtime);
  }

  /**
   * 得到告警的统计项
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
    return $tea.cast<GetSuspEventSummaryResponse>(await this.callApi(params, req, runtime), new GetSuspEventSummaryResponse({}));
  }

  /**
   * 得到告警的统计项
   * 
   * @param request - GetSuspEventSummaryRequest
   * @returns GetSuspEventSummaryResponse
   */
  async getSuspEventSummary(request: GetSuspEventSummaryRequest): Promise<GetSuspEventSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSuspEventSummaryWithOptions(request, runtime);
  }

  /**
   * 告警页统计
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
    return $tea.cast<GetSuspPageSummaryResponse>(await this.callApi(params, req, runtime), new GetSuspPageSummaryResponse({}));
  }

  /**
   * 告警页统计
   * @returns GetSuspPageSummaryResponse
   */
  async getSuspPageSummary(): Promise<GetSuspPageSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSuspPageSummaryWithOptions(runtime);
  }

  /**
   * 查询用户开通状态
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
    return $tea.cast<GetUserStatusResponse>(await this.callApi(params, req, runtime), new GetUserStatusResponse({}));
  }

  /**
   * 查询用户开通状态
   * @returns GetUserStatusResponse
   */
  async getUserStatus(): Promise<GetUserStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserStatusWithOptions(runtime);
  }

  /**
   * 风险查询
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
    return $tea.cast<GetVulItemPageResponse>(await this.callApi(params, req, runtime), new GetVulItemPageResponse({}));
  }

  /**
   * 风险查询
   * 
   * @param request - GetVulItemPageRequest
   * @returns GetVulItemPageResponse
   */
  async getVulItemPage(request: GetVulItemPageRequest): Promise<GetVulItemPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVulItemPageWithOptions(request, runtime);
  }

  /**
   * 风险页统计
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
    return $tea.cast<GetVulPageSummaryResponse>(await this.callApi(params, req, runtime), new GetVulPageSummaryResponse({}));
  }

  /**
   * 风险页统计
   * @returns GetVulPageSummaryResponse
   */
  async getVulPageSummary(): Promise<GetVulPageSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVulPageSummaryWithOptions(runtime);
  }

  /**
   * 得到风险的统计项
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
    return $tea.cast<GetVulSummaryResponse>(await this.callApi(params, req, runtime), new GetVulSummaryResponse({}));
  }

  /**
   * 得到风险的统计项
   * 
   * @param request - GetVulSummaryRequest
   * @returns GetVulSummaryResponse
   */
  async getVulSummary(request: GetVulSummaryRequest): Promise<GetVulSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVulSummaryWithOptions(request, runtime);
  }

  /**
   * 得到首行工单的统计项
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
    return $tea.cast<GetWorkTaskSummaryResponse>(await this.callApi(params, req, runtime), new GetWorkTaskSummaryResponse({}));
  }

  /**
   * 得到首行工单的统计项
   * 
   * @param request - GetWorkTaskSummaryRequest
   * @returns GetWorkTaskSummaryResponse
   */
  async getWorkTaskSummary(request: GetWorkTaskSummaryRequest): Promise<GetWorkTaskSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWorkTaskSummaryWithOptions(request, runtime);
  }

  /**
   * 服务客户信息查询
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
    return $tea.cast<PageServiceCustomerResponse>(await this.callApi(params, req, runtime), new PageServiceCustomerResponse({}));
  }

  /**
   * 服务客户信息查询
   * 
   * @param request - PageServiceCustomerRequest
   * @returns PageServiceCustomerResponse
   */
  async pageServiceCustomer(request: PageServiceCustomerRequest): Promise<PageServiceCustomerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pageServiceCustomerWithOptions(request, runtime);
  }

  /**
   * 发送自定义告警事件
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
    return $tea.cast<SendCustomEventResponse>(await this.callApi(params, req, runtime), new SendCustomEventResponse({}));
  }

  /**
   * 发送自定义告警事件
   * 
   * @param request - SendCustomEventRequest
   * @returns SendCustomEventResponse
   */
  async sendCustomEvent(request: SendCustomEventRequest): Promise<SendCustomEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendCustomEventWithOptions(request, runtime);
  }

}
