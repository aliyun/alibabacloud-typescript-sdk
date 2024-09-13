// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class EnterpriseDingtalkGroupMember extends $tea.Model {
  /**
   * @remarks
   * 代表资源名称的资源属性字段
   * 
   * @example
   * true
   */
  isAdmin?: boolean;
  /**
   * @remarks
   * 代表资源组的资源属性字段
   * 
   * @example
   * 130xxxxxxxx
   */
  mobile?: string;
  /**
   * @remarks
   * 代表创建时间的资源属性字段
   * 
   * @example
   * 张三
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      isAdmin: 'IsAdmin',
      mobile: 'Mobile',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isAdmin: 'boolean',
      mobile: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseTaskOrderRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * E211129AE190Y3
   */
  orderId?: string;
  /**
   * @example
   * 操作人姓名
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseTaskOrderResponseBody extends $tea.Model {
  /**
   * @remarks
   * code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * data
   * 
   * @example
   * null
   */
  data?: string;
  /**
   * @remarks
   * msg
   * 
   * @example
   * 请求成功
   */
  message?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * AQWFE#$#ASD
   */
  requestId?: string;
  /**
   * @remarks
   * success
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseTaskOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CloseTaskOrderResponseBody;
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
      body: CloseTaskOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskOrderRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  createUserId?: string;
  isUrgent?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cid+lUpHxTIXt7DYqJDcpVxlA==
   */
  openGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 任务单标题：必填
   */
  overview?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @example
   * 重要性描述
   */
  urgentDescription?: string;
  static names(): { [key: string]: string } {
    return {
      createUserId: 'CreateUserId',
      isUrgent: 'IsUrgent',
      openGroupId: 'OpenGroupId',
      overview: 'Overview',
      productCode: 'ProductCode',
      urgentDescription: 'UrgentDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createUserId: 'string',
      isUrgent: 'boolean',
      openGroupId: 'string',
      overview: 'string',
      productCode: 'string',
      urgentDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskOrderResponseBody extends $tea.Model {
  /**
   * @remarks
   * code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * E21111796147LE
   */
  data?: string;
  /**
   * @remarks
   * msg
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 123
   */
  requestId?: string;
  /**
   * @remarks
   * success
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTaskOrderResponseBody;
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
      body: CreateTaskOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskOrderByEventReportRequest extends $tea.Model {
  /**
   * @example
   * 123
   */
  business?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 小二
   */
  createRealName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1830426056957812
   */
  createUserId?: string;
  eventBody?: CreateTaskOrderByEventReportRequestEventBody;
  extinfo?: CreateTaskOrderByEventReportRequestExtinfo[];
  /**
   * @example
   * 紧急性原因描述
   */
  importantDesc?: string;
  /**
   * @example
   * 123,456
   */
  joinChildGroupUserIds?: string;
  /**
   * @example
   * 监控集如：视频业务的质量监控 123
   */
  monitorCongregation?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cid+lUpHxTIXt7DYqJDcpVxlA==
   */
  openGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3270
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      business: 'Business',
      createRealName: 'CreateRealName',
      createUserId: 'CreateUserId',
      eventBody: 'EventBody',
      extinfo: 'Extinfo',
      importantDesc: 'ImportantDesc',
      joinChildGroupUserIds: 'JoinChildGroupUserIds',
      monitorCongregation: 'MonitorCongregation',
      openGroupId: 'OpenGroupId',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      business: 'string',
      createRealName: 'string',
      createUserId: 'string',
      eventBody: CreateTaskOrderByEventReportRequestEventBody,
      extinfo: { 'type': 'array', 'itemType': CreateTaskOrderByEventReportRequestExtinfo },
      importantDesc: 'string',
      joinChildGroupUserIds: 'string',
      monitorCongregation: 'string',
      openGroupId: 'string',
      productType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskOrderByEventReportShrinkRequest extends $tea.Model {
  /**
   * @example
   * 123
   */
  business?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 小二
   */
  createRealName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1830426056957812
   */
  createUserId?: string;
  eventBodyShrink?: string;
  extinfoShrink?: string;
  /**
   * @example
   * 紧急性原因描述
   */
  importantDesc?: string;
  /**
   * @example
   * 123,456
   */
  joinChildGroupUserIds?: string;
  /**
   * @example
   * 监控集如：视频业务的质量监控 123
   */
  monitorCongregation?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cid+lUpHxTIXt7DYqJDcpVxlA==
   */
  openGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3270
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      business: 'Business',
      createRealName: 'CreateRealName',
      createUserId: 'CreateUserId',
      eventBodyShrink: 'EventBody',
      extinfoShrink: 'Extinfo',
      importantDesc: 'ImportantDesc',
      joinChildGroupUserIds: 'JoinChildGroupUserIds',
      monitorCongregation: 'MonitorCongregation',
      openGroupId: 'OpenGroupId',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      business: 'string',
      createRealName: 'string',
      createUserId: 'string',
      eventBodyShrink: 'string',
      extinfoShrink: 'string',
      importantDesc: 'string',
      joinChildGroupUserIds: 'string',
      monitorCongregation: 'string',
      openGroupId: 'string',
      productType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskOrderByEventReportResponseBody extends $tea.Model {
  /**
   * @remarks
   * code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * {  "eid": "E211129DT18M06",     "status": "dealingNode"   }
   */
  data?: string;
  /**
   * @remarks
   * msg
   * 
   * @example
   * 请求成功
   */
  message?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 02A300AC-367E-1716-A37B-F2FB46082610
   */
  requestId?: string;
  /**
   * @remarks
   * success
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskOrderByEventReportResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTaskOrderByEventReportResponseBody;
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
      body: CreateTaskOrderByEventReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnterpriseDingtalkGroupCustomerMemberRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  mobiles?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  openGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      mobiles: 'Mobiles',
      openGroupId: 'OpenGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobiles: { 'type': 'array', 'itemType': 'string' },
      openGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnterpriseDingtalkGroupCustomerMemberShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  mobilesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  openGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      mobilesShrink: 'Mobiles',
      openGroupId: 'OpenGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobilesShrink: 'string',
      openGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnterpriseDingtalkGroupCustomerMemberResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * Invalid data
   */
  message?: string;
  /**
   * @example
   * 123
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnterpriseDingtalkGroupCustomerMemberResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteEnterpriseDingtalkGroupCustomerMemberResponseBody;
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
      body: DeleteEnterpriseDingtalkGroupCustomerMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseDingtalkGroupRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  openGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      openGroupId: 'OpenGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseDingtalkGroupResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetEnterpriseDingtalkGroupResponseBodyData;
  /**
   * @example
   * Invalid data
   */
  message?: string;
  /**
   * @example
   * 123
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetEnterpriseDingtalkGroupResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseDingtalkGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEnterpriseDingtalkGroupResponseBody;
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
      body: GetEnterpriseDingtalkGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseDingtalkGroupCustomerMemberRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 13900001111
   */
  mobile?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  openGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      mobile: 'Mobile',
      openGroupId: 'OpenGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobile: 'string',
      openGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseDingtalkGroupCustomerMemberResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: EnterpriseDingtalkGroupMember;
  /**
   * @example
   * Invalid data
   */
  message?: string;
  /**
   * @example
   * 12
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: EnterpriseDingtalkGroupMember,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseDingtalkGroupCustomerMemberResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEnterpriseDingtalkGroupCustomerMemberResponseBody;
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
      body: GetEnterpriseDingtalkGroupCustomerMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDdTaskOrderRequest extends $tea.Model {
  /**
   * @remarks
   * createRealName
   * 
   * @example
   * Tom
   */
  createRealName?: string;
  /**
   * @remarks
   * endTime
   * 
   * @example
   * 2024-08-20 14:09:16
   */
  endTime?: string;
  isUrgent?: boolean;
  /**
   * @remarks
   * openGroupId
   * 
   * This parameter is required.
   * 
   * @example
   * DAWNN14N
   */
  openGroupId?: string;
  /**
   * @remarks
   * pageNo
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * pageSize
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * startTime
   * 
   * @example
   * 2024-08-01 14:09:11
   */
  startTime?: string;
  /**
   * @remarks
   * taskStatus
   * 
   * @example
   * dealingNode
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      createRealName: 'CreateRealName',
      endTime: 'EndTime',
      isUrgent: 'IsUrgent',
      openGroupId: 'OpenGroupId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createRealName: 'string',
      endTime: 'string',
      isUrgent: 'boolean',
      openGroupId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      startTime: 'string',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDdTaskOrderResponseBody extends $tea.Model {
  /**
   * @remarks
   * code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * data
   * 
   * @example
   * {   "msg": "请求成功",   "code": "200",   "data": [     {       "wfNodeId": "dealingNode",//任务单状态       "createEmpId": null,//创建人工号，可以忽略       "createTime": 1637571435000,//任务单创建时间       "orderId": "E2111221H1UKCZ",//任务单号       "isImportant": "normal",//是否紧急       "closeTime": null,//任务单关单时间       "taskTitle": "测试单16点44",//标题       "productType": "3270"//问题分类     },     {       "wfNodeId": "dealingNode",       "createEmpId": null,       "createTime": 1637820497000,       "orderId": "E211125CG111EM",       "isImportant": "normal",       "closeTime": null,       "taskTitle": "测试单14",       "class": "com.aliyun.dingtalklanding.dto.OpenTaskOrderDTO",       "productType": "3270"     }   ],   "success": true,   "requestId": "123",   "class": "com.aliyun.dingtalklanding.pop.dto.PopResultDTO" }
   */
  data?: string;
  /**
   * @remarks
   * msg
   * 
   * @example
   * 请求成功
   */
  message?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 2F8557E4-742B-1CF7-8E83-28CD0C1F7B48
   */
  requestId?: string;
  /**
   * @remarks
   * success
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDdTaskOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDdTaskOrderResponseBody;
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
      body: ListDdTaskOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseDingtalkGroupCustomerMembersRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DAWNN14N
   */
  openGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      openGroupId: 'OpenGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseDingtalkGroupCustomerMembersResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: ListEnterpriseDingtalkGroupCustomerMembersResponseBodyData[];
  /**
   * @example
   * Invalid data
   */
  message?: string;
  /**
   * @example
   * 123
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListEnterpriseDingtalkGroupCustomerMembersResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseDingtalkGroupCustomerMembersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEnterpriseDingtalkGroupCustomerMembersResponseBody;
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
      body: ListEnterpriseDingtalkGroupCustomerMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseDingtalkGroupsResponseBody extends $tea.Model {
  /**
   * @example
   * true
   */
  code?: string;
  data?: ListEnterpriseDingtalkGroupsResponseBodyData[];
  /**
   * @example
   * Data Invalid
   */
  message?: string;
  /**
   * @example
   * 12xxxxx
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListEnterpriseDingtalkGroupsResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseDingtalkGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEnterpriseDingtalkGroupsResponseBody;
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
      body: ListEnterpriseDingtalkGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductByGroupRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cidXcezGVQJjiWy2PzXylGwvg==
   */
  openGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      openGroupId: 'OpenGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductByGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * data
   * 
   * @example
   * [     {       "wfNodeId": "dealingNode",//任务单状态       "createEmpId": null,//创建人工号，可以忽略       "createTime": 1637571435000,//任务单创建时间       "orderId": "E2111221H1UKCZ",//任务单号       "isImportant": "normal",//是否紧急       "closeTime": null,//任务单关单时间       "taskTitle": "测试单16点44",//标题       "productType": "3270"//问题分类     },     {       "wfNodeId": "dealingNode",       "createEmpId": null,       "createTime": 1637820497000,       "orderId": "E211125CG111EM",       "isImportant": "normal",       "closeTime": null,       "taskTitle": "测试单14",       "class": "com.aliyun.dingtalklanding.dto.OpenTaskOrderDTO",       "productType": "3270"     }   ]
   */
  data?: string;
  /**
   * @remarks
   * msg
   * 
   * @example
   * 请求成功
   */
  message?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 123
   */
  requestId?: string;
  /**
   * @remarks
   * success
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductByGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProductByGroupResponseBody;
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
      body: ListProductByGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskInfoRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the order.
   * 
   * This parameter is required.
   * 
   * @example
   * E220303AE1BYY3
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskInfoResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code or error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * {"taskStatus": "dealingNode","orderId": "E21111796147LE"}
   */
  data?: QueryTaskInfoResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 43135C31-E47A-5AD7-A693-6DC635201CE4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryTaskInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryTaskInfoResponseBody;
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
      body: QueryTaskInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplyMessageApiRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 消息内容
   */
  msgContent?: string;
  /**
   * @example
   * text
   */
  msgType?: string;
  /**
   * @example
   * cid+lUpHxTIXt7DYqJDcpVxlA==
   */
  openGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * E2012312421
   */
  orderId?: string;
  /**
   * @example
   * 123
   */
  userId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 用户名
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      msgContent: 'MsgContent',
      msgType: 'MsgType',
      openGroupId: 'OpenGroupId',
      orderId: 'OrderId',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msgContent: 'string',
      msgType: 'string',
      openGroupId: 'string',
      orderId: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplyMessageApiResponseBody extends $tea.Model {
  /**
   * @remarks
   * code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * data
   * 
   * @example
   * null
   */
  data?: string;
  /**
   * @remarks
   * msg
   * 
   * @example
   * 请求成功
   */
  message?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 123
   */
  requestId?: string;
  /**
   * @remarks
   * success
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplyMessageApiResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReplyMessageApiResponseBody;
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
      body: ReplyMessageApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestOpenTaskOrderRequest extends $tea.Model {
  /**
   * @example
   * cidXcezGVQJjiWy2PzXylGwvg==
   */
  openGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * E21111796147LE
   */
  orderId?: string;
  /**
   * @example
   * 重开补充说明
   */
  resetContent?: string;
  /**
   * @example
   * 枚举值：6:解决方案无效；7:当前问题仍有疑问需要咨询；8:问题重复出现
   */
  resetType?: string;
  /**
   * @example
   * 操作人姓名
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      openGroupId: 'OpenGroupId',
      orderId: 'OrderId',
      resetContent: 'ResetContent',
      resetType: 'ResetType',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openGroupId: 'string',
      orderId: 'string',
      resetContent: 'string',
      resetType: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestOpenTaskOrderResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * null
   */
  data?: string;
  /**
   * @example
   * 请求成功
   */
  message?: string;
  /**
   * @example
   * 123
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestOpenTaskOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestOpenTaskOrderResponseBody;
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
      body: RestOpenTaskOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskOrderByEventReportRequestEventBodyEventLocation extends $tea.Model {
  /**
   * @example
   * flv13.bn.netease.com
   */
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskOrderByEventReportRequestEventBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 告警内容
   */
  eventDesc?: string;
  /**
   * @example
   * j9uwe-34328987
   */
  eventId?: string;
  /**
   * @example
   * info,warn,alarm,critical
   */
  eventLevel?: string;
  eventLocation?: CreateTaskOrderByEventReportRequestEventBodyEventLocation;
  /**
   * @example
   * 123456
   */
  eventTime?: string;
  static names(): { [key: string]: string } {
    return {
      eventDesc: 'EventDesc',
      eventId: 'EventId',
      eventLevel: 'EventLevel',
      eventLocation: 'EventLocation',
      eventTime: 'EventTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventDesc: 'string',
      eventId: 'string',
      eventLevel: 'string',
      eventLocation: CreateTaskOrderByEventReportRequestEventBodyEventLocation,
      eventTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskOrderByEventReportRequestExtinfo extends $tea.Model {
  /**
   * @example
   * 扩展信息名称
   */
  name?: string;
  /**
   * @example
   * 扩展信息value值
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseDingtalkGroupResponseBodyData extends $tea.Model {
  /**
   * @example
   * A企业服务群
   */
  groupName?: string;
  /**
   * @example
   * 123
   */
  openGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      openGroupId: 'OpenGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      openGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseDingtalkGroupCustomerMembersResponseBodyData extends $tea.Model {
  isAdmin?: boolean;
  name?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      isAdmin: 'IsAdmin',
      name: 'Name',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isAdmin: 'boolean',
      name: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseDingtalkGroupsResponseBodyData extends $tea.Model {
  /**
   * @example
   * A公司服务群
   */
  groupName?: string;
  /**
   * @example
   * 123
   */
  openGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      openGroupId: 'OpenGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      openGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskInfoResponseBodyData extends $tea.Model {
  orderId?: string;
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      taskStatus: 'string',
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
    this._endpoint = this.getEndpoint("support-plan", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 关闭任务单
   * 
   * @param request - CloseTaskOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseTaskOrderResponse
   */
  async closeTaskOrderWithOptions(request: CloseTaskOrderRequest, runtime: $Util.RuntimeOptions): Promise<CloseTaskOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CloseTaskOrder",
      version: "2021-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CloseTaskOrderResponse>(await this.callApi(params, req, runtime), new CloseTaskOrderResponse({}));
  }

  /**
   * 关闭任务单
   * 
   * @param request - CloseTaskOrderRequest
   * @returns CloseTaskOrderResponse
   */
  async closeTaskOrder(request: CloseTaskOrderRequest): Promise<CloseTaskOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.closeTaskOrderWithOptions(request, runtime);
  }

  /**
   * 创建工单
   * 
   * @param request - CreateTaskOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTaskOrderResponse
   */
  async createTaskOrderWithOptions(request: CreateTaskOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateTaskOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.createUserId)) {
      query["CreateUserId"] = request.createUserId;
    }

    if (!Util.isUnset(request.isUrgent)) {
      query["IsUrgent"] = request.isUrgent;
    }

    if (!Util.isUnset(request.openGroupId)) {
      query["OpenGroupId"] = request.openGroupId;
    }

    if (!Util.isUnset(request.overview)) {
      query["Overview"] = request.overview;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.urgentDescription)) {
      query["UrgentDescription"] = request.urgentDescription;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTaskOrder",
      version: "2021-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTaskOrderResponse>(await this.callApi(params, req, runtime), new CreateTaskOrderResponse({}));
  }

  /**
   * 创建工单
   * 
   * @param request - CreateTaskOrderRequest
   * @returns CreateTaskOrderResponse
   */
  async createTaskOrder(request: CreateTaskOrderRequest): Promise<CreateTaskOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTaskOrderWithOptions(request, runtime);
  }

  /**
   * 告警建单
   * 
   * @param tmpReq - CreateTaskOrderByEventReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTaskOrderByEventReportResponse
   */
  async createTaskOrderByEventReportWithOptions(tmpReq: CreateTaskOrderByEventReportRequest, runtime: $Util.RuntimeOptions): Promise<CreateTaskOrderByEventReportResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateTaskOrderByEventReportShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.eventBody)) {
      request.eventBodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.eventBody, "EventBody", "json");
    }

    if (!Util.isUnset(tmpReq.extinfo)) {
      request.extinfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extinfo, "Extinfo", "json");
    }

    let query = { };
    if (!Util.isUnset(request.business)) {
      query["Business"] = request.business;
    }

    if (!Util.isUnset(request.createRealName)) {
      query["CreateRealName"] = request.createRealName;
    }

    if (!Util.isUnset(request.createUserId)) {
      query["CreateUserId"] = request.createUserId;
    }

    if (!Util.isUnset(request.eventBodyShrink)) {
      query["EventBody"] = request.eventBodyShrink;
    }

    if (!Util.isUnset(request.extinfoShrink)) {
      query["Extinfo"] = request.extinfoShrink;
    }

    if (!Util.isUnset(request.importantDesc)) {
      query["ImportantDesc"] = request.importantDesc;
    }

    if (!Util.isUnset(request.joinChildGroupUserIds)) {
      query["JoinChildGroupUserIds"] = request.joinChildGroupUserIds;
    }

    if (!Util.isUnset(request.monitorCongregation)) {
      query["MonitorCongregation"] = request.monitorCongregation;
    }

    if (!Util.isUnset(request.openGroupId)) {
      query["OpenGroupId"] = request.openGroupId;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTaskOrderByEventReport",
      version: "2021-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTaskOrderByEventReportResponse>(await this.callApi(params, req, runtime), new CreateTaskOrderByEventReportResponse({}));
  }

  /**
   * 告警建单
   * 
   * @param request - CreateTaskOrderByEventReportRequest
   * @returns CreateTaskOrderByEventReportResponse
   */
  async createTaskOrderByEventReport(request: CreateTaskOrderByEventReportRequest): Promise<CreateTaskOrderByEventReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTaskOrderByEventReportWithOptions(request, runtime);
  }

  /**
   * 删除企业钉群客户侧成员
   * 
   * @param tmpReq - DeleteEnterpriseDingtalkGroupCustomerMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEnterpriseDingtalkGroupCustomerMemberResponse
   */
  async deleteEnterpriseDingtalkGroupCustomerMemberWithOptions(tmpReq: DeleteEnterpriseDingtalkGroupCustomerMemberRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEnterpriseDingtalkGroupCustomerMemberResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteEnterpriseDingtalkGroupCustomerMemberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.mobiles)) {
      request.mobilesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.mobiles, "Mobiles", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.mobilesShrink)) {
      body["Mobiles"] = request.mobilesShrink;
    }

    if (!Util.isUnset(request.openGroupId)) {
      body["OpenGroupId"] = request.openGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEnterpriseDingtalkGroupCustomerMember",
      version: "2021-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteEnterpriseDingtalkGroupCustomerMemberResponse>(await this.callApi(params, req, runtime), new DeleteEnterpriseDingtalkGroupCustomerMemberResponse({}));
  }

  /**
   * 删除企业钉群客户侧成员
   * 
   * @param request - DeleteEnterpriseDingtalkGroupCustomerMemberRequest
   * @returns DeleteEnterpriseDingtalkGroupCustomerMemberResponse
   */
  async deleteEnterpriseDingtalkGroupCustomerMember(request: DeleteEnterpriseDingtalkGroupCustomerMemberRequest): Promise<DeleteEnterpriseDingtalkGroupCustomerMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEnterpriseDingtalkGroupCustomerMemberWithOptions(request, runtime);
  }

  /**
   * 查询企业钉群
   * 
   * @param request - GetEnterpriseDingtalkGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEnterpriseDingtalkGroupResponse
   */
  async getEnterpriseDingtalkGroupWithOptions(request: GetEnterpriseDingtalkGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetEnterpriseDingtalkGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.openGroupId)) {
      body["OpenGroupId"] = request.openGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetEnterpriseDingtalkGroup",
      version: "2021-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEnterpriseDingtalkGroupResponse>(await this.callApi(params, req, runtime), new GetEnterpriseDingtalkGroupResponse({}));
  }

  /**
   * 查询企业钉群
   * 
   * @param request - GetEnterpriseDingtalkGroupRequest
   * @returns GetEnterpriseDingtalkGroupResponse
   */
  async getEnterpriseDingtalkGroup(request: GetEnterpriseDingtalkGroupRequest): Promise<GetEnterpriseDingtalkGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEnterpriseDingtalkGroupWithOptions(request, runtime);
  }

  /**
   * 获取企业钉群客户侧成员
   * 
   * @param request - GetEnterpriseDingtalkGroupCustomerMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEnterpriseDingtalkGroupCustomerMemberResponse
   */
  async getEnterpriseDingtalkGroupCustomerMemberWithOptions(request: GetEnterpriseDingtalkGroupCustomerMemberRequest, runtime: $Util.RuntimeOptions): Promise<GetEnterpriseDingtalkGroupCustomerMemberResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.mobile)) {
      body["Mobile"] = request.mobile;
    }

    if (!Util.isUnset(request.openGroupId)) {
      body["OpenGroupId"] = request.openGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetEnterpriseDingtalkGroupCustomerMember",
      version: "2021-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEnterpriseDingtalkGroupCustomerMemberResponse>(await this.callApi(params, req, runtime), new GetEnterpriseDingtalkGroupCustomerMemberResponse({}));
  }

  /**
   * 获取企业钉群客户侧成员
   * 
   * @param request - GetEnterpriseDingtalkGroupCustomerMemberRequest
   * @returns GetEnterpriseDingtalkGroupCustomerMemberResponse
   */
  async getEnterpriseDingtalkGroupCustomerMember(request: GetEnterpriseDingtalkGroupCustomerMemberRequest): Promise<GetEnterpriseDingtalkGroupCustomerMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEnterpriseDingtalkGroupCustomerMemberWithOptions(request, runtime);
  }

  /**
   * ListDdTaskOrder
   * 
   * @param request - ListDdTaskOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDdTaskOrderResponse
   */
  async listDdTaskOrderWithOptions(request: ListDdTaskOrderRequest, runtime: $Util.RuntimeOptions): Promise<ListDdTaskOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.createRealName)) {
      query["CreateRealName"] = request.createRealName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.isUrgent)) {
      query["IsUrgent"] = request.isUrgent;
    }

    if (!Util.isUnset(request.openGroupId)) {
      query["OpenGroupId"] = request.openGroupId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.taskStatus)) {
      query["TaskStatus"] = request.taskStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDdTaskOrder",
      version: "2021-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDdTaskOrderResponse>(await this.callApi(params, req, runtime), new ListDdTaskOrderResponse({}));
  }

  /**
   * ListDdTaskOrder
   * 
   * @param request - ListDdTaskOrderRequest
   * @returns ListDdTaskOrderResponse
   */
  async listDdTaskOrder(request: ListDdTaskOrderRequest): Promise<ListDdTaskOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDdTaskOrderWithOptions(request, runtime);
  }

  /**
   * 获取钉群中所有客户侧人员信息
   * 
   * @param request - ListEnterpriseDingtalkGroupCustomerMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEnterpriseDingtalkGroupCustomerMembersResponse
   */
  async listEnterpriseDingtalkGroupCustomerMembersWithOptions(request: ListEnterpriseDingtalkGroupCustomerMembersRequest, runtime: $Util.RuntimeOptions): Promise<ListEnterpriseDingtalkGroupCustomerMembersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.openGroupId)) {
      query["OpenGroupId"] = request.openGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEnterpriseDingtalkGroupCustomerMembers",
      version: "2021-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEnterpriseDingtalkGroupCustomerMembersResponse>(await this.callApi(params, req, runtime), new ListEnterpriseDingtalkGroupCustomerMembersResponse({}));
  }

  /**
   * 获取钉群中所有客户侧人员信息
   * 
   * @param request - ListEnterpriseDingtalkGroupCustomerMembersRequest
   * @returns ListEnterpriseDingtalkGroupCustomerMembersResponse
   */
  async listEnterpriseDingtalkGroupCustomerMembers(request: ListEnterpriseDingtalkGroupCustomerMembersRequest): Promise<ListEnterpriseDingtalkGroupCustomerMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEnterpriseDingtalkGroupCustomerMembersWithOptions(request, runtime);
  }

  /**
   * 查询所有企业钉群成员
   * 
   * @param request - ListEnterpriseDingtalkGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEnterpriseDingtalkGroupsResponse
   */
  async listEnterpriseDingtalkGroupsWithOptions(runtime: $Util.RuntimeOptions): Promise<ListEnterpriseDingtalkGroupsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListEnterpriseDingtalkGroups",
      version: "2021-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEnterpriseDingtalkGroupsResponse>(await this.callApi(params, req, runtime), new ListEnterpriseDingtalkGroupsResponse({}));
  }

  /**
   * 查询所有企业钉群成员
   * @returns ListEnterpriseDingtalkGroupsResponse
   */
  async listEnterpriseDingtalkGroups(): Promise<ListEnterpriseDingtalkGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEnterpriseDingtalkGroupsWithOptions(runtime);
  }

  /**
   * 获取问题分类
   * 
   * @param request - ListProductByGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProductByGroupResponse
   */
  async listProductByGroupWithOptions(request: ListProductByGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListProductByGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.openGroupId)) {
      query["OpenGroupId"] = request.openGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListProductByGroup",
      version: "2021-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListProductByGroupResponse>(await this.callApi(params, req, runtime), new ListProductByGroupResponse({}));
  }

  /**
   * 获取问题分类
   * 
   * @param request - ListProductByGroupRequest
   * @returns ListProductByGroupResponse
   */
  async listProductByGroup(request: ListProductByGroupRequest): Promise<ListProductByGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProductByGroupWithOptions(request, runtime);
  }

  /**
   * 获取工单状态
   * 
   * @param request - QueryTaskInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTaskInfoResponse
   */
  async queryTaskInfoWithOptions(request: QueryTaskInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryTaskInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTaskInfo",
      version: "2021-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTaskInfoResponse>(await this.callApi(params, req, runtime), new QueryTaskInfoResponse({}));
  }

  /**
   * 获取工单状态
   * 
   * @param request - QueryTaskInfoRequest
   * @returns QueryTaskInfoResponse
   */
  async queryTaskInfo(request: QueryTaskInfoRequest): Promise<QueryTaskInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTaskInfoWithOptions(request, runtime);
  }

  /**
   * 客户回复消息
   * 
   * @param request - ReplyMessageApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReplyMessageApiResponse
   */
  async replyMessageApiWithOptions(request: ReplyMessageApiRequest, runtime: $Util.RuntimeOptions): Promise<ReplyMessageApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.msgContent)) {
      query["MsgContent"] = request.msgContent;
    }

    if (!Util.isUnset(request.msgType)) {
      query["MsgType"] = request.msgType;
    }

    if (!Util.isUnset(request.openGroupId)) {
      query["OpenGroupId"] = request.openGroupId;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReplyMessageApi",
      version: "2021-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReplyMessageApiResponse>(await this.callApi(params, req, runtime), new ReplyMessageApiResponse({}));
  }

  /**
   * 客户回复消息
   * 
   * @param request - ReplyMessageApiRequest
   * @returns ReplyMessageApiResponse
   */
  async replyMessageApi(request: ReplyMessageApiRequest): Promise<ReplyMessageApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.replyMessageApiWithOptions(request, runtime);
  }

  /**
   * 重开任务单(待客户确认状态)
   * 
   * @param request - RestOpenTaskOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestOpenTaskOrderResponse
   */
  async restOpenTaskOrderWithOptions(request: RestOpenTaskOrderRequest, runtime: $Util.RuntimeOptions): Promise<RestOpenTaskOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.openGroupId)) {
      query["OpenGroupId"] = request.openGroupId;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.resetContent)) {
      query["ResetContent"] = request.resetContent;
    }

    if (!Util.isUnset(request.resetType)) {
      query["ResetType"] = request.resetType;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestOpenTaskOrder",
      version: "2021-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RestOpenTaskOrderResponse>(await this.callApi(params, req, runtime), new RestOpenTaskOrderResponse({}));
  }

  /**
   * 重开任务单(待客户确认状态)
   * 
   * @param request - RestOpenTaskOrderRequest
   * @returns RestOpenTaskOrderResponse
   */
  async restOpenTaskOrder(request: RestOpenTaskOrderRequest): Promise<RestOpenTaskOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restOpenTaskOrderWithOptions(request, runtime);
  }

}
