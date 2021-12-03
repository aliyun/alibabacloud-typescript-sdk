// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class EnterpriseDingtalkGroupMember extends $tea.Model {
  isAdmin?: boolean;
  mobile?: string;
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
  orderId?: string;
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
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
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
  headers: { [key: string]: string };
  body: CloseTaskOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CloseTaskOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskOrderRequest extends $tea.Model {
  customerRealName?: string;
  customerUserId?: string;
  importantDescription?: string;
  isImportant?: string;
  openGroupId?: string;
  productType?: string;
  productTypeName?: string;
  taskTitle?: string;
  static names(): { [key: string]: string } {
    return {
      customerRealName: 'CustomerRealName',
      customerUserId: 'CustomerUserId',
      importantDescription: 'ImportantDescription',
      isImportant: 'IsImportant',
      openGroupId: 'OpenGroupId',
      productType: 'ProductType',
      productTypeName: 'ProductTypeName',
      taskTitle: 'TaskTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerRealName: 'string',
      customerUserId: 'string',
      importantDescription: 'string',
      isImportant: 'string',
      openGroupId: 'string',
      productType: 'string',
      productTypeName: 'string',
      taskTitle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskOrderResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
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
  headers: { [key: string]: string };
  body: CreateTaskOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTaskOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskOrderByEventReportRequest extends $tea.Model {
  business?: string;
  createRealName?: string;
  createUserId?: string;
  eventBody?: CreateTaskOrderByEventReportRequestEventBody;
  extinfo?: CreateTaskOrderByEventReportRequestExtinfo[];
  importantDesc?: string;
  joinChildGroupUserIds?: string;
  monitorCongregation?: string;
  openGroupId?: string;
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
  business?: string;
  createRealName?: string;
  createUserId?: string;
  eventBodyShrink?: string;
  extinfoShrink?: string;
  importantDesc?: string;
  joinChildGroupUserIds?: string;
  monitorCongregation?: string;
  openGroupId?: string;
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
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
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
  headers: { [key: string]: string };
  body: CreateTaskOrderByEventReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTaskOrderByEventReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnterpriseDingtalkGroupCustomerMemberRequest extends $tea.Model {
  mobiles?: string[];
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
  mobilesShrink?: string;
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
  code?: string;
  message?: string;
  requestId?: string;
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
  headers: { [key: string]: string };
  body: DeleteEnterpriseDingtalkGroupCustomerMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteEnterpriseDingtalkGroupCustomerMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseDingtalkGroupRequest extends $tea.Model {
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
  code?: string;
  data?: GetEnterpriseDingtalkGroupResponseBodyData;
  message?: string;
  requestId?: string;
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
  headers: { [key: string]: string };
  body: GetEnterpriseDingtalkGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetEnterpriseDingtalkGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseDingtalkGroupCustomerMemberRequest extends $tea.Model {
  mobile?: string;
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
  code?: string;
  data?: EnterpriseDingtalkGroupMember;
  message?: string;
  requestId?: string;
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
  headers: { [key: string]: string };
  body: GetEnterpriseDingtalkGroupCustomerMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetEnterpriseDingtalkGroupCustomerMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDdTaskOrderRequest extends $tea.Model {
  callerParentId?: number;
  callerType?: string;
  callerUid?: number;
  openGroupId?: string;
  orderId?: string;
  requestId?: string;
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      callerParentId: 'CallerParentId',
      callerType: 'CallerType',
      callerUid: 'CallerUid',
      openGroupId: 'OpenGroupId',
      orderId: 'OrderId',
      requestId: 'RequestId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerParentId: 'number',
      callerType: 'string',
      callerUid: 'number',
      openGroupId: 'string',
      orderId: 'string',
      requestId: 'string',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDdTaskOrderResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
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
  headers: { [key: string]: string };
  body: ListDdTaskOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDdTaskOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseDingtalkGroupCustomerMembersRequest extends $tea.Model {
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
  code?: string;
  data?: EnterpriseDingtalkGroupMember[];
  message?: string;
  requestId?: string;
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
      data: { 'type': 'array', 'itemType': EnterpriseDingtalkGroupMember },
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
  headers: { [key: string]: string };
  body: ListEnterpriseDingtalkGroupCustomerMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListEnterpriseDingtalkGroupCustomerMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseDingtalkGroupsResponseBody extends $tea.Model {
  code?: string;
  data?: ListEnterpriseDingtalkGroupsResponseBodyData[];
  message?: string;
  requestId?: string;
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
  headers: { [key: string]: string };
  body: ListEnterpriseDingtalkGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListEnterpriseDingtalkGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductByGroupRequest extends $tea.Model {
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
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
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
  headers: { [key: string]: string };
  body: ListProductByGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListProductByGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskInfoRequest extends $tea.Model {
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
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
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

export class QueryTaskInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTaskInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTaskInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplyMessageApiRequest extends $tea.Model {
  msgContent?: string;
  msgType?: string;
  openGroupId?: string;
  orderId?: string;
  userId?: string;
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
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
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
  headers: { [key: string]: string };
  body: ReplyMessageApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReplyMessageApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestOpenTaskOrderRequest extends $tea.Model {
  openGroupId?: string;
  orderId?: string;
  resetContent?: string;
  resetType?: string;
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
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
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
  headers: { [key: string]: string };
  body: RestOpenTaskOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RestOpenTaskOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskOrderByEventReportRequestEventBodyEventLocation extends $tea.Model {
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
  eventDesc?: string;
  eventId?: string;
  eventLevel?: string;
  eventLocation?: CreateTaskOrderByEventReportRequestEventBodyEventLocation;
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
  name?: string;
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
  groupName?: string;
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

export class ListEnterpriseDingtalkGroupsResponseBodyData extends $tea.Model {
  groupName?: string;
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

  async closeTaskOrderWithOptions(request: CloseTaskOrderRequest, runtime: $Util.RuntimeOptions): Promise<CloseTaskOrderResponse> {
    Util.validateModel(request);
    let query = { };
    query["OrderId"] = request.orderId;
    query["UserName"] = request.userName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CloseTaskOrder",
      version: "2021-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CloseTaskOrderResponse>(await this.callApi(params, req, runtime), new CloseTaskOrderResponse({}));
  }

  async closeTaskOrder(request: CloseTaskOrderRequest): Promise<CloseTaskOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.closeTaskOrderWithOptions(request, runtime);
  }

  async createTaskOrderWithOptions(request: CreateTaskOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateTaskOrderResponse> {
    Util.validateModel(request);
    let query = { };
    query["CustomerRealName"] = request.customerRealName;
    query["CustomerUserId"] = request.customerUserId;
    query["ImportantDescription"] = request.importantDescription;
    query["IsImportant"] = request.isImportant;
    query["OpenGroupId"] = request.openGroupId;
    query["ProductType"] = request.productType;
    query["ProductTypeName"] = request.productTypeName;
    query["TaskTitle"] = request.taskTitle;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateTaskOrder",
      version: "2021-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateTaskOrderResponse>(await this.callApi(params, req, runtime), new CreateTaskOrderResponse({}));
  }

  async createTaskOrder(request: CreateTaskOrderRequest): Promise<CreateTaskOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTaskOrderWithOptions(request, runtime);
  }

  async createTaskOrderByEventReportWithOptions(tmpReq: CreateTaskOrderByEventReportRequest, runtime: $Util.RuntimeOptions): Promise<CreateTaskOrderByEventReportResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateTaskOrderByEventReportShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.eventBody))) {
      request.eventBodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.eventBody), "EventBody", "json");
    }

    if (!Util.isUnset(tmpReq.extinfo)) {
      request.extinfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extinfo, "Extinfo", "json");
    }

    let query = { };
    query["Business"] = request.business;
    query["CreateRealName"] = request.createRealName;
    query["CreateUserId"] = request.createUserId;
    query["EventBody"] = request.eventBodyShrink;
    query["Extinfo"] = request.extinfoShrink;
    query["ImportantDesc"] = request.importantDesc;
    query["JoinChildGroupUserIds"] = request.joinChildGroupUserIds;
    query["MonitorCongregation"] = request.monitorCongregation;
    query["OpenGroupId"] = request.openGroupId;
    query["ProductType"] = request.productType;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateTaskOrderByEventReport",
      version: "2021-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateTaskOrderByEventReportResponse>(await this.callApi(params, req, runtime), new CreateTaskOrderByEventReportResponse({}));
  }

  async createTaskOrderByEventReport(request: CreateTaskOrderByEventReportRequest): Promise<CreateTaskOrderByEventReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTaskOrderByEventReportWithOptions(request, runtime);
  }

  async deleteEnterpriseDingtalkGroupCustomerMemberWithOptions(tmpReq: DeleteEnterpriseDingtalkGroupCustomerMemberRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEnterpriseDingtalkGroupCustomerMemberResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteEnterpriseDingtalkGroupCustomerMemberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.mobiles)) {
      request.mobilesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.mobiles, "Mobiles", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
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

  async deleteEnterpriseDingtalkGroupCustomerMember(request: DeleteEnterpriseDingtalkGroupCustomerMemberRequest): Promise<DeleteEnterpriseDingtalkGroupCustomerMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEnterpriseDingtalkGroupCustomerMemberWithOptions(request, runtime);
  }

  async getEnterpriseDingtalkGroupWithOptions(request: GetEnterpriseDingtalkGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetEnterpriseDingtalkGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
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

  async getEnterpriseDingtalkGroup(request: GetEnterpriseDingtalkGroupRequest): Promise<GetEnterpriseDingtalkGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEnterpriseDingtalkGroupWithOptions(request, runtime);
  }

  async getEnterpriseDingtalkGroupCustomerMemberWithOptions(request: GetEnterpriseDingtalkGroupCustomerMemberRequest, runtime: $Util.RuntimeOptions): Promise<GetEnterpriseDingtalkGroupCustomerMemberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
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

  async getEnterpriseDingtalkGroupCustomerMember(request: GetEnterpriseDingtalkGroupCustomerMemberRequest): Promise<GetEnterpriseDingtalkGroupCustomerMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEnterpriseDingtalkGroupCustomerMemberWithOptions(request, runtime);
  }

  async listDdTaskOrderWithOptions(request: ListDdTaskOrderRequest, runtime: $Util.RuntimeOptions): Promise<ListDdTaskOrderResponse> {
    Util.validateModel(request);
    let query = { };
    query["CallerParentId"] = request.callerParentId;
    query["CallerType"] = request.callerType;
    query["CallerUid"] = request.callerUid;
    query["OpenGroupId"] = request.openGroupId;
    query["OrderId"] = request.orderId;
    query["RequestId"] = request.requestId;
    query["TaskStatus"] = request.taskStatus;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ListDdTaskOrder",
      version: "2021-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDdTaskOrderResponse>(await this.callApi(params, req, runtime), new ListDdTaskOrderResponse({}));
  }

  async listDdTaskOrder(request: ListDdTaskOrderRequest): Promise<ListDdTaskOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDdTaskOrderWithOptions(request, runtime);
  }

  async listEnterpriseDingtalkGroupCustomerMembersWithOptions(request: ListEnterpriseDingtalkGroupCustomerMembersRequest, runtime: $Util.RuntimeOptions): Promise<ListEnterpriseDingtalkGroupCustomerMembersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
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

  async listEnterpriseDingtalkGroupCustomerMembers(request: ListEnterpriseDingtalkGroupCustomerMembersRequest): Promise<ListEnterpriseDingtalkGroupCustomerMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEnterpriseDingtalkGroupCustomerMembersWithOptions(request, runtime);
  }

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
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListEnterpriseDingtalkGroupsResponse>(await this.callApi(params, req, runtime), new ListEnterpriseDingtalkGroupsResponse({}));
  }

  async listEnterpriseDingtalkGroups(): Promise<ListEnterpriseDingtalkGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEnterpriseDingtalkGroupsWithOptions(runtime);
  }

  async listProductByGroupWithOptions(request: ListProductByGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListProductByGroupResponse> {
    Util.validateModel(request);
    let query = { };
    query["OpenGroupId"] = request.openGroupId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ListProductByGroup",
      version: "2021-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListProductByGroupResponse>(await this.callApi(params, req, runtime), new ListProductByGroupResponse({}));
  }

  async listProductByGroup(request: ListProductByGroupRequest): Promise<ListProductByGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProductByGroupWithOptions(request, runtime);
  }

  async queryTaskInfoWithOptions(request: QueryTaskInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryTaskInfoResponse> {
    Util.validateModel(request);
    let query = { };
    query["OrderId"] = request.orderId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "QueryTaskInfo",
      version: "2021-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryTaskInfoResponse>(await this.callApi(params, req, runtime), new QueryTaskInfoResponse({}));
  }

  async queryTaskInfo(request: QueryTaskInfoRequest): Promise<QueryTaskInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTaskInfoWithOptions(request, runtime);
  }

  async replyMessageApiWithOptions(request: ReplyMessageApiRequest, runtime: $Util.RuntimeOptions): Promise<ReplyMessageApiResponse> {
    Util.validateModel(request);
    let query = { };
    query["MsgContent"] = request.msgContent;
    query["MsgType"] = request.msgType;
    query["OpenGroupId"] = request.openGroupId;
    query["OrderId"] = request.orderId;
    query["UserId"] = request.userId;
    query["UserName"] = request.userName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ReplyMessageApi",
      version: "2021-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ReplyMessageApiResponse>(await this.callApi(params, req, runtime), new ReplyMessageApiResponse({}));
  }

  async replyMessageApi(request: ReplyMessageApiRequest): Promise<ReplyMessageApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.replyMessageApiWithOptions(request, runtime);
  }

  async restOpenTaskOrderWithOptions(request: RestOpenTaskOrderRequest, runtime: $Util.RuntimeOptions): Promise<RestOpenTaskOrderResponse> {
    Util.validateModel(request);
    let query = { };
    query["OpenGroupId"] = request.openGroupId;
    query["OrderId"] = request.orderId;
    query["ResetContent"] = request.resetContent;
    query["ResetType"] = request.resetType;
    query["UserName"] = request.userName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "RestOpenTaskOrder",
      version: "2021-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RestOpenTaskOrderResponse>(await this.callApi(params, req, runtime), new RestOpenTaskOrderResponse({}));
  }

  async restOpenTaskOrder(request: RestOpenTaskOrderRequest): Promise<RestOpenTaskOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restOpenTaskOrderWithOptions(request, runtime);
  }

}
