// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CheckServiceLinkedRoleRequest extends $tea.Model {
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceLinkedRoleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: CheckServiceLinkedRoleResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: CheckServiceLinkedRoleResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceLinkedRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckServiceLinkedRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckServiceLinkedRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequest extends $tea.Model {
  name?: string;
  packageName?: string;
  departmentId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      packageName: 'PackageName',
      departmentId: 'DepartmentId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      packageName: 'string',
      departmentId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: CreateAppResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: CreateAppResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDepartmentRequest extends $tea.Model {
  description?: string;
  label?: string;
  name?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      label: 'Label',
      name: 'Name',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      label: 'string',
      name: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDepartmentResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: CreateDepartmentResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: CreateDepartmentResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDepartmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDepartmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDepartmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDetectProcessRequest extends $tea.Model {
  name?: string;
  draft?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      draft: 'Draft',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      draft: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDetectProcessResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: CreateDetectProcessResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: CreateDetectProcessResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDetectProcessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDetectProcessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDetectProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveRequest extends $tea.Model {
  name?: string;
  rtcCode?: string;
  userId?: string;
  clientToken?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      rtcCode: 'RtcCode',
      userId: 'UserId',
      clientToken: 'ClientToken',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      rtcCode: 'string',
      userId: 'string',
      clientToken: 'string',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: CreateLiveResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: CreateLiveResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateLiveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateLiveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveDetectionRequest extends $tea.Model {
  liveId?: string;
  userId?: string;
  ruleId?: string;
  metaUrl?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      liveId: 'LiveId',
      userId: 'UserId',
      ruleId: 'RuleId',
      metaUrl: 'MetaUrl',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveId: 'string',
      userId: 'string',
      ruleId: 'string',
      metaUrl: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveDetectionResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: CreateLiveDetectionResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: CreateLiveDetectionResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveDetectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateLiveDetectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateLiveDetectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequest extends $tea.Model {
  name?: string;
  content?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      content: 'Content',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      content: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: CreateRuleResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: CreateRuleResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStatisticsRecordRequest extends $tea.Model {
  deviceId?: string;
  appId?: string;
  deviceType?: number;
  beginAt?: string;
  endAt?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      appId: 'AppId',
      deviceType: 'DeviceType',
      beginAt: 'BeginAt',
      endAt: 'EndAt',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      appId: 'string',
      deviceType: 'number',
      beginAt: 'string',
      endAt: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStatisticsRecordResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStatisticsRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateStatisticsRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateStatisticsRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStatisticsTaskRequest extends $tea.Model {
  dateFrom?: string;
  dateTo?: string;
  clientToken?: string;
  departmentId?: string[];
  static names(): { [key: string]: string } {
    return {
      dateFrom: 'DateFrom',
      dateTo: 'DateTo',
      clientToken: 'ClientToken',
      departmentId: 'DepartmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateFrom: 'string',
      dateTo: 'string',
      clientToken: 'string',
      departmentId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStatisticsTaskResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStatisticsTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateStatisticsTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateStatisticsTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskGroupRequest extends $tea.Model {
  appId?: string;
  expireAt?: string;
  groupName?: string;
  ruleId?: string;
  runnableTimeFrom?: string;
  runnableTimeTo?: string;
  triggerPeriod?: string;
  clientToken?: string;
  day?: number[];
  videoUrl?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      expireAt: 'ExpireAt',
      groupName: 'GroupName',
      ruleId: 'RuleId',
      runnableTimeFrom: 'RunnableTimeFrom',
      runnableTimeTo: 'RunnableTimeTo',
      triggerPeriod: 'TriggerPeriod',
      clientToken: 'ClientToken',
      day: 'Day',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      expireAt: 'string',
      groupName: 'string',
      ruleId: 'string',
      runnableTimeFrom: 'string',
      runnableTimeTo: 'string',
      triggerPeriod: 'string',
      clientToken: 'string',
      day: { 'type': 'array', 'itemType': 'number' },
      videoUrl: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: CreateTaskGroupResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: CreateTaskGroupResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateTaskGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTaskGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserDepartmentsRequest extends $tea.Model {
  userId?: string[];
  departmentId?: string[];
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      departmentId: 'DepartmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: { 'type': 'array', 'itemType': 'string' },
      departmentId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserDepartmentsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: { [key: string]: any };
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserDepartmentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateUserDepartmentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateUserDepartmentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: { [key: string]: any };
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDepartmentRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDepartmentResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: { [key: string]: any };
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDepartmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDepartmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDepartmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDetectProcessRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDetectProcessResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: { [key: string]: any };
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDetectProcessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDetectProcessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDetectProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: DeleteRuleResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: DeleteRuleResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponseBody extends $tea.Model {
  errors?: DeleteUserResponseBodyErrors[];
  message?: string;
  requestId?: string;
  data?: { [key: string]: any };
  code?: string;
  static names(): { [key: string]: string } {
    return {
      errors: 'Errors',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errors: { 'type': 'array', 'itemType': DeleteUserResponseBodyErrors },
      message: 'string',
      requestId: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserDepartmentsRequest extends $tea.Model {
  userId?: string[];
  departmentId?: string[];
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      departmentId: 'DepartmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: { 'type': 'array', 'itemType': 'string' },
      departmentId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserDepartmentsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: { [key: string]: any };
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserDepartmentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteUserDepartmentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteUserDepartmentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExitLiveRequest extends $tea.Model {
  channel?: string;
  userId?: string;
  rtcCode?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      userId: 'UserId',
      rtcCode: 'RtcCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      userId: 'string',
      rtcCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExitLiveResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ExitLiveResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ExitLiveResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExitLiveResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExitLiveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExitLiveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppRequest extends $tea.Model {
  id?: string;
  packageName?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      packageName: 'PackageName',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      packageName: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetAppResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetAppResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchSignedUrlRequest extends $tea.Model {
  fileUrlList?: string[];
  static names(): { [key: string]: string } {
    return {
      fileUrlList: 'FileUrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrlList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchSignedUrlResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': 'string' },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchSignedUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetBatchSignedUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetBatchSignedUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepartmentRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepartmentResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetDepartmentResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetDepartmentResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepartmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDepartmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDepartmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetectEvaluationRequest extends $tea.Model {
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetectEvaluationResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetDetectEvaluationResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': GetDetectEvaluationResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetectEvaluationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDetectEvaluationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDetectEvaluationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetectionRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetectionResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetDetectionResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetDetectionResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDetectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDetectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetectProcessRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetectProcessResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetDetectProcessResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetDetectProcessResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetectProcessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDetectProcessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDetectProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetectProcessJsonFileRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetectProcessJsonFileResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetectProcessJsonFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDetectProcessJsonFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDetectProcessJsonFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetectProcessTemplateResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetectProcessTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDetectProcessTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDetectProcessTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGlobalConfigRequest extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGlobalConfigResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGlobalConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetGlobalConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetGlobalConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelSignedUrlRequest extends $tea.Model {
  modelPath?: string[];
  static names(): { [key: string]: string } {
    return {
      modelPath: 'ModelPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelPath: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelSignedUrlResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetModelSignedUrlResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': GetModelSignedUrlResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelSignedUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetModelSignedUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetModelSignedUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPreSignedUrlRequest extends $tea.Model {
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      prefix: 'Prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prefix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPreSignedUrlResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPreSignedUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPreSignedUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPreSignedUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetRuleResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetRuleResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceConfigurationRequest extends $tea.Model {
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceConfigurationResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetServiceConfigurationResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetServiceConfigurationResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceConfigurationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetServiceConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetServiceConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSignedUrlRequest extends $tea.Model {
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSignedUrlResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSignedUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSignedUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSignedUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSlrConfigurationRequest extends $tea.Model {
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSlrConfigurationResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetSlrConfigurationResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetSlrConfigurationResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSlrConfigurationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSlrConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSlrConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStatisticsRequest extends $tea.Model {
  dateFrom?: string;
  dateTo?: string;
  departmentId?: string[];
  static names(): { [key: string]: string } {
    return {
      dateFrom: 'DateFrom',
      dateTo: 'DateTo',
      departmentId: 'DepartmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateFrom: 'string',
      dateTo: 'string',
      departmentId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStatisticsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetStatisticsResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetStatisticsResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskRequest extends $tea.Model {
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetTaskResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetTaskResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskGroupRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetTaskGroupResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetTaskGroupResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTaskGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTaskGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetUserResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetUserResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeServiceLinkedRoleRequest extends $tea.Model {
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeServiceLinkedRoleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: InitializeServiceLinkedRoleResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: InitializeServiceLinkedRoleResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeServiceLinkedRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InitializeServiceLinkedRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InitializeServiceLinkedRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinLiveRequest extends $tea.Model {
  userId?: string;
  channel?: string;
  rtcCode?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      channel: 'Channel',
      rtcCode: 'RtcCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      channel: 'string',
      rtcCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinLiveResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: JoinLiveResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: JoinLiveResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinLiveResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: JoinLiveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: JoinLiveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsRequest extends $tea.Model {
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListAppsResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListAppsResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDepartmentsRequest extends $tea.Model {
  name?: string;
  pageIndex?: number;
  pageSize?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDepartmentsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListDepartmentsResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListDepartmentsResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDepartmentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDepartmentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDepartmentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetectionsRequest extends $tea.Model {
  createDateFrom?: string;
  createDateTo?: string;
  departmentId?: string;
  pageIndex?: number;
  pageSize?: number;
  recordingType?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      createDateFrom: 'CreateDateFrom',
      createDateTo: 'CreateDateTo',
      departmentId: 'DepartmentId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      recordingType: 'RecordingType',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDateFrom: 'string',
      createDateTo: 'string',
      departmentId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      recordingType: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetectionsResponseBody extends $tea.Model {
  errors?: ListDetectionsResponseBodyErrors[];
  message?: string;
  requestId?: string;
  data?: ListDetectionsResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      errors: 'Errors',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errors: { 'type': 'array', 'itemType': ListDetectionsResponseBodyErrors },
      message: 'string',
      requestId: 'string',
      data: ListDetectionsResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetectionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDetectionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDetectionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetectProcessesRequest extends $tea.Model {
  pageIndex?: number;
  pageSize?: number;
  name?: string;
  publishStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      name: 'Name',
      publishStatus: 'PublishStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
      name: 'string',
      publishStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetectProcessesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListDetectProcessesResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListDetectProcessesResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetectProcessesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDetectProcessesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDetectProcessesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilesRequest extends $tea.Model {
  prefix?: string;
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      prefix: 'Prefix',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prefix: 'string',
      limit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': 'string' },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLivesRequest extends $tea.Model {
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLivesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListLivesResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListLivesResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLivesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListLivesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListLivesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': 'string' },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRolesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRolesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesRequest extends $tea.Model {
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListRulesResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListRulesResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStatisticsTaskRequest extends $tea.Model {
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStatisticsTaskResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListStatisticsTaskResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListStatisticsTaskResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStatisticsTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListStatisticsTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListStatisticsTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskGroupsRequest extends $tea.Model {
  pageIndex?: number;
  pageSize?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskGroupsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListTaskGroupsResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListTaskGroupsResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTaskGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTaskGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskItemsRequest extends $tea.Model {
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskItemsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListTaskItemsResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': ListTaskItemsResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskItemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTaskItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTaskItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksRequest extends $tea.Model {
  pageIndex?: number;
  pageSize?: number;
  taskGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      taskGroupId: 'TaskGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
      taskGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListTasksResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListTasksResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersRequest extends $tea.Model {
  departmentId?: string;
  pageIndex?: number;
  pageSize?: number;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListUsersResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListUsersResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameDetectProcessRequest extends $tea.Model {
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameDetectProcessResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: RenameDetectProcessResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: RenameDetectProcessResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameDetectProcessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RenameDetectProcessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RenameDetectProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppRequest extends $tea.Model {
  id?: string;
  name?: string;
  disabled?: boolean;
  packageName?: string;
  departmentId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      disabled: 'Disabled',
      packageName: 'PackageName',
      departmentId: 'DepartmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      disabled: 'boolean',
      packageName: 'string',
      departmentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: { [key: string]: any };
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDepartmentRequest extends $tea.Model {
  description?: string;
  label?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      label: 'Label',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      label: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDepartmentResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: { [key: string]: any };
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDepartmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDepartmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDepartmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDetectProcessRequest extends $tea.Model {
  id?: string;
  name?: string;
  draft?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      draft: 'Draft',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      draft: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDetectProcessResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: UpdateDetectProcessResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: UpdateDetectProcessResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDetectProcessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDetectProcessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDetectProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveRequest extends $tea.Model {
  liveId?: string;
  status?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      liveId: 'LiveId',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveId: 'string',
      status: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: UpdateLiveResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: UpdateLiveResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateLiveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateLiveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleRequest extends $tea.Model {
  id?: string;
  name?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: UpdateRuleResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: UpdateRuleResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceConfigurationRequest extends $tea.Model {
  taskItemQueueSize?: number;
  clientQueueSize?: number;
  liveRecordEveryOne?: boolean;
  liveRecordAll?: boolean;
  liveRecordLayout?: number;
  liveRecordTaskProfile?: string;
  liveRecordMaxClient?: number;
  liveRecordVideoResolution?: number;
  static names(): { [key: string]: string } {
    return {
      taskItemQueueSize: 'TaskItemQueueSize',
      clientQueueSize: 'ClientQueueSize',
      liveRecordEveryOne: 'LiveRecordEveryOne',
      liveRecordAll: 'LiveRecordAll',
      liveRecordLayout: 'LiveRecordLayout',
      liveRecordTaskProfile: 'LiveRecordTaskProfile',
      liveRecordMaxClient: 'LiveRecordMaxClient',
      liveRecordVideoResolution: 'LiveRecordVideoResolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskItemQueueSize: 'number',
      clientQueueSize: 'number',
      liveRecordEveryOne: 'boolean',
      liveRecordAll: 'boolean',
      liveRecordLayout: 'number',
      liveRecordTaskProfile: 'string',
      liveRecordMaxClient: 'number',
      liveRecordVideoResolution: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceConfigurationResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceConfigurationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateServiceConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateServiceConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSlrConfigurationRequest extends $tea.Model {
  mqSubscribe?: boolean;
  mqEndpoint?: string;
  mqInstanceId?: string;
  mqTopic?: string;
  mqGroupId?: string;
  mqEvent?: string[];
  static names(): { [key: string]: string } {
    return {
      mqSubscribe: 'MqSubscribe',
      mqEndpoint: 'MqEndpoint',
      mqInstanceId: 'MqInstanceId',
      mqTopic: 'MqTopic',
      mqGroupId: 'MqGroupId',
      mqEvent: 'MqEvent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mqSubscribe: 'boolean',
      mqEndpoint: 'string',
      mqInstanceId: 'string',
      mqTopic: 'string',
      mqGroupId: 'string',
      mqEvent: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSlrConfigurationResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSlrConfigurationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSlrConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSlrConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserRequest extends $tea.Model {
  email?: string;
  name?: string;
  phoneNumber?: string;
  role?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      name: 'Name',
      phoneNumber: 'PhoneNumber',
      role: 'Role',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      name: 'string',
      phoneNumber: 'string',
      role: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: { [key: string]: any };
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceLinkedRoleResponseBodyData extends $tea.Model {
  hasRole?: boolean;
  static names(): { [key: string]: string } {
    return {
      hasRole: 'HasRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasRole: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBodyData extends $tea.Model {
  creatorName?: string;
  disabled?: boolean;
  createdAt?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      creatorName: 'CreatorName',
      disabled: 'Disabled',
      createdAt: 'CreatedAt',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorName: 'string',
      disabled: 'boolean',
      createdAt: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDepartmentResponseBodyData extends $tea.Model {
  description?: string;
  createdAt?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      createdAt: 'CreatedAt',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      createdAt: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDetectProcessResponseBodyData extends $tea.Model {
  draft?: string;
  createdAt?: string;
  disabled?: boolean;
  md5?: string;
  name?: string;
  content?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      draft: 'Draft',
      createdAt: 'CreatedAt',
      disabled: 'Disabled',
      md5: 'Md5',
      name: 'Name',
      content: 'Content',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      draft: 'string',
      createdAt: 'string',
      disabled: 'boolean',
      md5: 'string',
      name: 'string',
      content: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveResponseBodyData extends $tea.Model {
  createdAt?: string;
  channel?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      channel: 'Channel',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      channel: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveDetectionResponseBodyData extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleResponseBodyData extends $tea.Model {
  name?: string;
  content?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      content: 'Content',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      content: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskGroupResponseBodyData extends $tea.Model {
  status?: string;
  completedTasks?: number;
  totalTasks?: number;
  createdAt?: string;
  name?: string;
  taskIds?: string[];
  id?: string;
  ruleId?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      completedTasks: 'CompletedTasks',
      totalTasks: 'TotalTasks',
      createdAt: 'CreatedAt',
      name: 'Name',
      taskIds: 'TaskIds',
      id: 'Id',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      completedTasks: 'number',
      totalTasks: 'number',
      createdAt: 'string',
      name: 'string',
      taskIds: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      ruleId: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleResponseBodyData extends $tea.Model {
  createdAt?: string;
  name?: string;
  content?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      name: 'Name',
      content: 'Content',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      name: 'string',
      content: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponseBodyErrors extends $tea.Model {
  message?: string;
  field?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      field: 'Field',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      field: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExitLiveResponseBodyData extends $tea.Model {
  code?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBodyData extends $tea.Model {
  createdAt?: number;
  disabled?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      disabled: 'Disabled',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      disabled: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepartmentResponseBodyData extends $tea.Model {
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      createdAt: 'CreatedAt',
      updatedAt: 'UpdatedAt',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      createdAt: 'string',
      updatedAt: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetectEvaluationResponseBodyDataEvaluationItemList extends $tea.Model {
  successRate?: string;
  handleCount?: number;
  name?: string;
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      successRate: 'SuccessRate',
      handleCount: 'HandleCount',
      name: 'Name',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      successRate: 'string',
      handleCount: 'number',
      name: 'string',
      successCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetectEvaluationResponseBodyData extends $tea.Model {
  day?: string;
  evaluationItemList?: GetDetectEvaluationResponseBodyDataEvaluationItemList[];
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      evaluationItemList: 'EvaluationItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'string',
      evaluationItemList: { 'type': 'array', 'itemType': GetDetectEvaluationResponseBodyDataEvaluationItemList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetectionResponseBodyDataTasks extends $tea.Model {
  status?: string;
  videoMetaUrl?: string;
  createdAt?: string;
  id?: string;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      videoMetaUrl: 'VideoMetaUrl',
      createdAt: 'CreatedAt',
      id: 'Id',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      videoMetaUrl: 'string',
      createdAt: 'string',
      id: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetectionResponseBodyData extends $tea.Model {
  status?: string;
  departmentName?: string;
  tasks?: GetDetectionResponseBodyDataTasks[];
  recordingType?: string;
  createdAt?: string;
  departmentId?: string;
  id?: string;
  ruleName?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      departmentName: 'DepartmentName',
      tasks: 'Tasks',
      recordingType: 'RecordingType',
      createdAt: 'CreatedAt',
      departmentId: 'DepartmentId',
      id: 'Id',
      ruleName: 'RuleName',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      departmentName: 'string',
      tasks: { 'type': 'array', 'itemType': GetDetectionResponseBodyDataTasks },
      recordingType: 'string',
      createdAt: 'string',
      departmentId: 'string',
      id: 'string',
      ruleName: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetectProcessResponseBodyData extends $tea.Model {
  draft?: string;
  createdAt?: string;
  md5?: string;
  updatedAt?: string;
  name?: string;
  newVersion?: boolean;
  content?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      draft: 'Draft',
      createdAt: 'CreatedAt',
      md5: 'Md5',
      updatedAt: 'UpdatedAt',
      name: 'Name',
      newVersion: 'NewVersion',
      content: 'Content',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      draft: 'string',
      createdAt: 'string',
      md5: 'string',
      updatedAt: 'string',
      name: 'string',
      newVersion: 'boolean',
      content: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelSignedUrlResponseBodyData extends $tea.Model {
  publicUrl?: string;
  md5?: string;
  modelPath?: string;
  static names(): { [key: string]: string } {
    return {
      publicUrl: 'PublicUrl',
      md5: 'Md5',
      modelPath: 'ModelPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicUrl: 'string',
      md5: 'string',
      modelPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBodyData extends $tea.Model {
  createdAt?: string;
  name?: string;
  content?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      name: 'Name',
      content: 'Content',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      name: 'string',
      content: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceConfigurationResponseBodyData extends $tea.Model {
  liveRecordAll?: boolean;
  liveRecordLayout?: number;
  liveRecordMaxClient?: number;
  liveRecordEveryOne?: boolean;
  liveRecordTaskProfile?: string;
  liveRecordVideoResolution?: number;
  taskItemQueueSize?: number;
  clientQueueSize?: number;
  static names(): { [key: string]: string } {
    return {
      liveRecordAll: 'LiveRecordAll',
      liveRecordLayout: 'LiveRecordLayout',
      liveRecordMaxClient: 'LiveRecordMaxClient',
      liveRecordEveryOne: 'LiveRecordEveryOne',
      liveRecordTaskProfile: 'LiveRecordTaskProfile',
      liveRecordVideoResolution: 'LiveRecordVideoResolution',
      taskItemQueueSize: 'TaskItemQueueSize',
      clientQueueSize: 'ClientQueueSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveRecordAll: 'boolean',
      liveRecordLayout: 'number',
      liveRecordMaxClient: 'number',
      liveRecordEveryOne: 'boolean',
      liveRecordTaskProfile: 'string',
      liveRecordVideoResolution: 'number',
      taskItemQueueSize: 'number',
      clientQueueSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSlrConfigurationResponseBodyData extends $tea.Model {
  mqGroupId?: string;
  mqTopic?: string;
  mqInstanceId?: string;
  mqEventList?: string[];
  mqEndpoint?: string;
  mqSubscribe?: boolean;
  static names(): { [key: string]: string } {
    return {
      mqGroupId: 'MqGroupId',
      mqTopic: 'MqTopic',
      mqInstanceId: 'MqInstanceId',
      mqEventList: 'MqEventList',
      mqEndpoint: 'MqEndpoint',
      mqSubscribe: 'MqSubscribe',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mqGroupId: 'string',
      mqTopic: 'string',
      mqInstanceId: 'string',
      mqEventList: { 'type': 'array', 'itemType': 'string' },
      mqEndpoint: 'string',
      mqSubscribe: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStatisticsResponseBodyDataItemsDetail extends $tea.Model {
  departmentName?: string;
  cloudCount?: number;
  departmentId?: string;
  month?: number;
  clientCount?: number;
  static names(): { [key: string]: string } {
    return {
      departmentName: 'DepartmentName',
      cloudCount: 'CloudCount',
      departmentId: 'DepartmentId',
      month: 'Month',
      clientCount: 'ClientCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentName: 'string',
      cloudCount: 'number',
      departmentId: 'string',
      month: 'number',
      clientCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStatisticsResponseBodyDataItems extends $tea.Model {
  departmentName?: string;
  cloudCount?: number;
  month?: string;
  clientCount?: number;
  detail?: GetStatisticsResponseBodyDataItemsDetail[];
  static names(): { [key: string]: string } {
    return {
      departmentName: 'DepartmentName',
      cloudCount: 'CloudCount',
      month: 'Month',
      clientCount: 'ClientCount',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentName: 'string',
      cloudCount: 'number',
      month: 'string',
      clientCount: 'number',
      detail: { 'type': 'array', 'itemType': GetStatisticsResponseBodyDataItemsDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStatisticsResponseBodyData extends $tea.Model {
  items?: GetStatisticsResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GetStatisticsResponseBodyDataItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBodyData extends $tea.Model {
  status?: string;
  createdAt?: string;
  id?: string;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      createdAt: 'CreatedAt',
      id: 'Id',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      createdAt: 'string',
      id: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskGroupResponseBodyData extends $tea.Model {
  status?: string;
  completedTasks?: number;
  totalTasks?: number;
  createdAt?: string;
  name?: string;
  taskIds?: string[];
  id?: string;
  ruleId?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      completedTasks: 'CompletedTasks',
      totalTasks: 'TotalTasks',
      createdAt: 'CreatedAt',
      name: 'Name',
      taskIds: 'TaskIds',
      id: 'Id',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      completedTasks: 'number',
      totalTasks: 'number',
      createdAt: 'string',
      name: 'string',
      taskIds: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      ruleId: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyDataDepartments extends $tea.Model {
  description?: string;
  gmtCreate?: string;
  name?: string;
  gmtModified?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      name: 'Name',
      gmtModified: 'GmtModified',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'string',
      name: 'string',
      gmtModified: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyData extends $tea.Model {
  email?: string;
  phoneNumber?: string;
  departments?: GetUserResponseBodyDataDepartments[];
  createdAt?: string;
  updatedAt?: string;
  source?: string;
  role?: string;
  name?: string;
  id?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      phoneNumber: 'PhoneNumber',
      departments: 'Departments',
      createdAt: 'CreatedAt',
      updatedAt: 'UpdatedAt',
      source: 'Source',
      role: 'Role',
      name: 'Name',
      id: 'Id',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      phoneNumber: 'string',
      departments: { 'type': 'array', 'itemType': GetUserResponseBodyDataDepartments },
      createdAt: 'string',
      updatedAt: 'string',
      source: 'string',
      role: 'string',
      name: 'string',
      id: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeServiceLinkedRoleResponseBodyData extends $tea.Model {
  errorMessage?: string;
  createSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      createSuccess: 'CreateSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      createSuccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinLiveResponseBodyDataTokenDataTurn extends $tea.Model {
  password?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinLiveResponseBodyDataTokenData extends $tea.Model {
  turn?: JoinLiveResponseBodyDataTokenDataTurn;
  token?: string;
  appId?: string;
  nonce?: string;
  gslb?: string[];
  liveId?: string;
  userId?: string;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      turn: 'Turn',
      token: 'Token',
      appId: 'AppId',
      nonce: 'Nonce',
      gslb: 'Gslb',
      liveId: 'LiveId',
      userId: 'UserId',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      turn: JoinLiveResponseBodyDataTokenDataTurn,
      token: 'string',
      appId: 'string',
      nonce: 'string',
      gslb: { 'type': 'array', 'itemType': 'string' },
      liveId: 'string',
      userId: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinLiveResponseBodyData extends $tea.Model {
  code?: number;
  tokenData?: JoinLiveResponseBodyDataTokenData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      tokenData: 'TokenData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      tokenData: JoinLiveResponseBodyDataTokenData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBodyDataItems extends $tea.Model {
  departmentName?: string;
  packageName?: string;
  createdAt?: string;
  departmentId?: string;
  disabled?: boolean;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      departmentName: 'DepartmentName',
      packageName: 'PackageName',
      createdAt: 'CreatedAt',
      departmentId: 'DepartmentId',
      disabled: 'Disabled',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentName: 'string',
      packageName: 'string',
      createdAt: 'string',
      departmentId: 'string',
      disabled: 'boolean',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBodyData extends $tea.Model {
  items?: ListAppsResponseBodyDataItems[];
  totalPages?: number;
  totalElements?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalPages: 'TotalPages',
      totalElements: 'TotalElements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListAppsResponseBodyDataItems },
      totalPages: 'number',
      totalElements: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDepartmentsResponseBodyDataItemsAdministrators extends $tea.Model {
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDepartmentsResponseBodyDataItems extends $tea.Model {
  description?: string;
  administrators?: ListDepartmentsResponseBodyDataItemsAdministrators[];
  createdAt?: string;
  updatedAt?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      administrators: 'Administrators',
      createdAt: 'CreatedAt',
      updatedAt: 'UpdatedAt',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      administrators: { 'type': 'array', 'itemType': ListDepartmentsResponseBodyDataItemsAdministrators },
      createdAt: 'string',
      updatedAt: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDepartmentsResponseBodyData extends $tea.Model {
  items?: ListDepartmentsResponseBodyDataItems[];
  totalPages?: number;
  totalElements?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalPages: 'TotalPages',
      totalElements: 'TotalElements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListDepartmentsResponseBodyDataItems },
      totalPages: 'number',
      totalElements: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetectionsResponseBodyErrors extends $tea.Model {
  message?: string;
  field?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      field: 'Field',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      field: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetectionsResponseBodyDataItemsTasks extends $tea.Model {
  status?: string;
  videoMetaUrl?: string;
  createdAt?: string;
  id?: string;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      videoMetaUrl: 'VideoMetaUrl',
      createdAt: 'CreatedAt',
      id: 'Id',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      videoMetaUrl: 'string',
      createdAt: 'string',
      id: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetectionsResponseBodyDataItems extends $tea.Model {
  status?: string;
  departmentName?: string;
  tasks?: ListDetectionsResponseBodyDataItemsTasks[];
  recordingType?: string;
  createdAt?: string;
  departmentId?: string;
  id?: string;
  ruleName?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      departmentName: 'DepartmentName',
      tasks: 'Tasks',
      recordingType: 'RecordingType',
      createdAt: 'CreatedAt',
      departmentId: 'DepartmentId',
      id: 'Id',
      ruleName: 'RuleName',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      departmentName: 'string',
      tasks: { 'type': 'array', 'itemType': ListDetectionsResponseBodyDataItemsTasks },
      recordingType: 'string',
      createdAt: 'string',
      departmentId: 'string',
      id: 'string',
      ruleName: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetectionsResponseBodyData extends $tea.Model {
  items?: ListDetectionsResponseBodyDataItems[];
  totalPages?: number;
  totalElements?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalPages: 'TotalPages',
      totalElements: 'TotalElements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListDetectionsResponseBodyDataItems },
      totalPages: 'number',
      totalElements: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetectProcessesResponseBodyDataItems extends $tea.Model {
  draft?: string;
  fileUrl?: string;
  createdAt?: string;
  md5?: string;
  updatedAt?: string;
  newVersion?: boolean;
  name?: string;
  content?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      draft: 'Draft',
      fileUrl: 'FileUrl',
      createdAt: 'CreatedAt',
      md5: 'Md5',
      updatedAt: 'UpdatedAt',
      newVersion: 'NewVersion',
      name: 'Name',
      content: 'Content',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      draft: 'string',
      fileUrl: 'string',
      createdAt: 'string',
      md5: 'string',
      updatedAt: 'string',
      newVersion: 'boolean',
      name: 'string',
      content: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetectProcessesResponseBodyData extends $tea.Model {
  items?: ListDetectProcessesResponseBodyDataItems[];
  totalPages?: number;
  totalElements?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalPages: 'TotalPages',
      totalElements: 'TotalElements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListDetectProcessesResponseBodyDataItems },
      totalPages: 'number',
      totalElements: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLivesResponseBodyDataItems extends $tea.Model {
  status?: string;
  userId?: string;
  createdAt?: string;
  channel?: string;
  name?: string;
  id?: string;
  publicId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      userId: 'UserId',
      createdAt: 'CreatedAt',
      channel: 'Channel',
      name: 'Name',
      id: 'Id',
      publicId: 'PublicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      userId: 'string',
      createdAt: 'string',
      channel: 'string',
      name: 'string',
      id: 'string',
      publicId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLivesResponseBodyData extends $tea.Model {
  items?: ListLivesResponseBodyDataItems[];
  totalPages?: number;
  totalElements?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalPages: 'TotalPages',
      totalElements: 'TotalElements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListLivesResponseBodyDataItems },
      totalPages: 'number',
      totalElements: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyDataItems extends $tea.Model {
  createdAt?: string;
  name?: string;
  content?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      name: 'Name',
      content: 'Content',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      name: 'string',
      content: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyData extends $tea.Model {
  items?: ListRulesResponseBodyDataItems[];
  totalPages?: number;
  totalElements?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalPages: 'TotalPages',
      totalElements: 'TotalElements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListRulesResponseBodyDataItems },
      totalPages: 'number',
      totalElements: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStatisticsTaskResponseBodyDataItems extends $tea.Model {
  status?: number;
  fileUrl?: string;
  createdAt?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      fileUrl: 'FileUrl',
      createdAt: 'CreatedAt',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      fileUrl: 'string',
      createdAt: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStatisticsTaskResponseBodyData extends $tea.Model {
  items?: ListStatisticsTaskResponseBodyDataItems[];
  totalPages?: number;
  totalElements?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalPages: 'TotalPages',
      totalElements: 'TotalElements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListStatisticsTaskResponseBodyDataItems },
      totalPages: 'number',
      totalElements: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskGroupsResponseBodyDataItems extends $tea.Model {
  status?: string;
  completedTasks?: number;
  totalTasks?: number;
  createdAt?: string;
  name?: string;
  taskIds?: string[];
  id?: string;
  ruleId?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      completedTasks: 'CompletedTasks',
      totalTasks: 'TotalTasks',
      createdAt: 'CreatedAt',
      name: 'Name',
      taskIds: 'TaskIds',
      id: 'Id',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      completedTasks: 'number',
      totalTasks: 'number',
      createdAt: 'string',
      name: 'string',
      taskIds: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      ruleId: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskGroupsResponseBodyData extends $tea.Model {
  items?: ListTaskGroupsResponseBodyDataItems[];
  totalPages?: number;
  totalElements?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalPages: 'TotalPages',
      totalElements: 'TotalElements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListTaskGroupsResponseBodyDataItems },
      totalPages: 'number',
      totalElements: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskItemsResponseBodyData extends $tea.Model {
  status?: string;
  createdAt?: string;
  message?: string;
  output?: string;
  name?: string;
  segmentSeq?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      createdAt: 'CreatedAt',
      message: 'Message',
      output: 'Output',
      name: 'Name',
      segmentSeq: 'SegmentSeq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      createdAt: 'string',
      message: 'string',
      output: 'string',
      name: 'string',
      segmentSeq: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBodyDataItems extends $tea.Model {
  status?: string;
  videoMetaUrl?: string;
  createdAt?: string;
  id?: string;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      videoMetaUrl: 'VideoMetaUrl',
      createdAt: 'CreatedAt',
      id: 'Id',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      videoMetaUrl: 'string',
      createdAt: 'string',
      id: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBodyData extends $tea.Model {
  items?: ListTasksResponseBodyDataItems[];
  totalPages?: number;
  totalElements?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalPages: 'TotalPages',
      totalElements: 'TotalElements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListTasksResponseBodyDataItems },
      totalPages: 'number',
      totalElements: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyDataItemsDepartments extends $tea.Model {
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      createdAt: 'CreatedAt',
      updatedAt: 'UpdatedAt',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      createdAt: 'string',
      updatedAt: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyDataItems extends $tea.Model {
  ramUsername?: string;
  email?: string;
  phoneNumber?: string;
  departments?: ListUsersResponseBodyDataItemsDepartments[];
  createdAt?: string;
  updatedAt?: string;
  source?: string;
  role?: string;
  name?: string;
  id?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      ramUsername: 'RamUsername',
      email: 'Email',
      phoneNumber: 'PhoneNumber',
      departments: 'Departments',
      createdAt: 'CreatedAt',
      updatedAt: 'UpdatedAt',
      source: 'Source',
      role: 'Role',
      name: 'Name',
      id: 'Id',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ramUsername: 'string',
      email: 'string',
      phoneNumber: 'string',
      departments: { 'type': 'array', 'itemType': ListUsersResponseBodyDataItemsDepartments },
      createdAt: 'string',
      updatedAt: 'string',
      source: 'string',
      role: 'string',
      name: 'string',
      id: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyData extends $tea.Model {
  items?: ListUsersResponseBodyDataItems[];
  totalPages?: number;
  totalElements?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalPages: 'TotalPages',
      totalElements: 'TotalElements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListUsersResponseBodyDataItems },
      totalPages: 'number',
      totalElements: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameDetectProcessResponseBodyData extends $tea.Model {
  draft?: string;
  createdAt?: string;
  md5?: string;
  name?: string;
  content?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      draft: 'Draft',
      createdAt: 'CreatedAt',
      md5: 'Md5',
      name: 'Name',
      content: 'Content',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      draft: 'string',
      createdAt: 'string',
      md5: 'string',
      name: 'string',
      content: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDetectProcessResponseBodyData extends $tea.Model {
  draft?: string;
  createdAt?: string;
  md5?: string;
  name?: string;
  content?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      draft: 'Draft',
      createdAt: 'CreatedAt',
      md5: 'Md5',
      name: 'Name',
      content: 'Content',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      draft: 'string',
      createdAt: 'string',
      md5: 'string',
      name: 'string',
      content: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveResponseBodyData extends $tea.Model {
  createdAt?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleResponseBodyData extends $tea.Model {
  createdAt?: string;
  name?: string;
  content?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      name: 'Name',
      content: 'Content',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      name: 'string',
      content: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-1': "idrsservice.aliyuncs.com",
      'ap-northeast-2-pop': "idrsservice.aliyuncs.com",
      'ap-south-1': "idrsservice.aliyuncs.com",
      'ap-southeast-1': "idrsservice.aliyuncs.com",
      'ap-southeast-2': "idrsservice.aliyuncs.com",
      'ap-southeast-3': "idrsservice.aliyuncs.com",
      'ap-southeast-5': "idrsservice.aliyuncs.com",
      'cn-beijing': "idrsservice.aliyuncs.com",
      'cn-beijing-finance-1': "idrsservice.aliyuncs.com",
      'cn-beijing-finance-pop': "idrsservice.aliyuncs.com",
      'cn-beijing-gov-1': "idrsservice.aliyuncs.com",
      'cn-beijing-nu16-b01': "idrsservice.aliyuncs.com",
      'cn-chengdu': "idrsservice.aliyuncs.com",
      'cn-edge-1': "idrsservice.aliyuncs.com",
      'cn-fujian': "idrsservice.aliyuncs.com",
      'cn-haidian-cm12-c01': "idrsservice.aliyuncs.com",
      'cn-hangzhou-bj-b01': "idrsservice.aliyuncs.com",
      'cn-hangzhou-finance': "idrsservice.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "idrsservice.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "idrsservice.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "idrsservice.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "idrsservice.aliyuncs.com",
      'cn-hangzhou-test-306': "idrsservice.aliyuncs.com",
      'cn-hongkong': "idrsservice.aliyuncs.com",
      'cn-hongkong-finance-pop': "idrsservice.aliyuncs.com",
      'cn-huhehaote': "idrsservice.aliyuncs.com",
      'cn-huhehaote-nebula-1': "idrsservice.aliyuncs.com",
      'cn-north-2-gov-1': "idrsservice.aliyuncs.com",
      'cn-qingdao': "idrsservice.aliyuncs.com",
      'cn-qingdao-nebula': "idrsservice.aliyuncs.com",
      'cn-shanghai': "idrsservice.aliyuncs.com",
      'cn-shanghai-et15-b01': "idrsservice.aliyuncs.com",
      'cn-shanghai-et2-b01': "idrsservice.aliyuncs.com",
      'cn-shanghai-inner': "idrsservice.aliyuncs.com",
      'cn-shanghai-internal-test-1': "idrsservice.aliyuncs.com",
      'cn-shenzhen': "idrsservice.aliyuncs.com",
      'cn-shenzhen-finance-1': "idrsservice.aliyuncs.com",
      'cn-shenzhen-inner': "idrsservice.aliyuncs.com",
      'cn-shenzhen-st4-d01': "idrsservice.aliyuncs.com",
      'cn-shenzhen-su18-b01': "idrsservice.aliyuncs.com",
      'cn-wuhan': "idrsservice.aliyuncs.com",
      'cn-wulanchabu': "idrsservice.aliyuncs.com",
      'cn-yushanfang': "idrsservice.aliyuncs.com",
      'cn-zhangbei-na61-b01': "idrsservice.aliyuncs.com",
      'cn-zhangjiakou': "idrsservice.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "idrsservice.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "idrsservice.aliyuncs.com",
      'eu-central-1': "idrsservice.aliyuncs.com",
      'eu-west-1': "idrsservice.aliyuncs.com",
      'eu-west-1-oxs': "idrsservice.aliyuncs.com",
      'me-east-1': "idrsservice.aliyuncs.com",
      'rus-west-1-pop': "idrsservice.aliyuncs.com",
      'us-east-1': "idrsservice.aliyuncs.com",
      'us-west-1': "idrsservice.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("idrsservice", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async checkServiceLinkedRoleWithOptions(request: CheckServiceLinkedRoleRequest, runtime: $Util.RuntimeOptions): Promise<CheckServiceLinkedRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckServiceLinkedRoleResponse>(await this.doRPCRequest("CheckServiceLinkedRole", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new CheckServiceLinkedRoleResponse({}));
  }

  async checkServiceLinkedRole(request: CheckServiceLinkedRoleRequest): Promise<CheckServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkServiceLinkedRoleWithOptions(request, runtime);
  }

  async createAppWithOptions(request: CreateAppRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAppResponse>(await this.doRPCRequest("CreateApp", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAppResponse({}));
  }

  async createApp(request: CreateAppRequest): Promise<CreateAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppWithOptions(request, runtime);
  }

  async createDepartmentWithOptions(request: CreateDepartmentRequest, runtime: $Util.RuntimeOptions): Promise<CreateDepartmentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDepartmentResponse>(await this.doRPCRequest("CreateDepartment", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDepartmentResponse({}));
  }

  async createDepartment(request: CreateDepartmentRequest): Promise<CreateDepartmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDepartmentWithOptions(request, runtime);
  }

  async createDetectProcessWithOptions(request: CreateDetectProcessRequest, runtime: $Util.RuntimeOptions): Promise<CreateDetectProcessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDetectProcessResponse>(await this.doRPCRequest("CreateDetectProcess", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDetectProcessResponse({}));
  }

  async createDetectProcess(request: CreateDetectProcessRequest): Promise<CreateDetectProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDetectProcessWithOptions(request, runtime);
  }

  async createLiveWithOptions(request: CreateLiveRequest, runtime: $Util.RuntimeOptions): Promise<CreateLiveResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateLiveResponse>(await this.doRPCRequest("CreateLive", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateLiveResponse({}));
  }

  async createLive(request: CreateLiveRequest): Promise<CreateLiveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLiveWithOptions(request, runtime);
  }

  async createLiveDetectionWithOptions(request: CreateLiveDetectionRequest, runtime: $Util.RuntimeOptions): Promise<CreateLiveDetectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateLiveDetectionResponse>(await this.doRPCRequest("CreateLiveDetection", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateLiveDetectionResponse({}));
  }

  async createLiveDetection(request: CreateLiveDetectionRequest): Promise<CreateLiveDetectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLiveDetectionWithOptions(request, runtime);
  }

  async createRuleWithOptions(request: CreateRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRuleResponse>(await this.doRPCRequest("CreateRule", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRuleResponse({}));
  }

  async createRule(request: CreateRuleRequest): Promise<CreateRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRuleWithOptions(request, runtime);
  }

  async createStatisticsRecordWithOptions(request: CreateStatisticsRecordRequest, runtime: $Util.RuntimeOptions): Promise<CreateStatisticsRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateStatisticsRecordResponse>(await this.doRPCRequest("CreateStatisticsRecord", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateStatisticsRecordResponse({}));
  }

  async createStatisticsRecord(request: CreateStatisticsRecordRequest): Promise<CreateStatisticsRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createStatisticsRecordWithOptions(request, runtime);
  }

  async createStatisticsTaskWithOptions(request: CreateStatisticsTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateStatisticsTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateStatisticsTaskResponse>(await this.doRPCRequest("CreateStatisticsTask", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateStatisticsTaskResponse({}));
  }

  async createStatisticsTask(request: CreateStatisticsTaskRequest): Promise<CreateStatisticsTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createStatisticsTaskWithOptions(request, runtime);
  }

  async createTaskGroupWithOptions(request: CreateTaskGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateTaskGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateTaskGroupResponse>(await this.doRPCRequest("CreateTaskGroup", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateTaskGroupResponse({}));
  }

  async createTaskGroup(request: CreateTaskGroupRequest): Promise<CreateTaskGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTaskGroupWithOptions(request, runtime);
  }

  async createUserDepartmentsWithOptions(request: CreateUserDepartmentsRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserDepartmentsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateUserDepartmentsResponse>(await this.doRPCRequest("CreateUserDepartments", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateUserDepartmentsResponse({}));
  }

  async createUserDepartments(request: CreateUserDepartmentsRequest): Promise<CreateUserDepartmentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserDepartmentsWithOptions(request, runtime);
  }

  async deleteAppWithOptions(request: DeleteAppRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAppResponse>(await this.doRPCRequest("DeleteApp", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAppResponse({}));
  }

  async deleteApp(request: DeleteAppRequest): Promise<DeleteAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppWithOptions(request, runtime);
  }

  async deleteDepartmentWithOptions(request: DeleteDepartmentRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDepartmentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDepartmentResponse>(await this.doRPCRequest("DeleteDepartment", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDepartmentResponse({}));
  }

  async deleteDepartment(request: DeleteDepartmentRequest): Promise<DeleteDepartmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDepartmentWithOptions(request, runtime);
  }

  async deleteDetectProcessWithOptions(request: DeleteDetectProcessRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDetectProcessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDetectProcessResponse>(await this.doRPCRequest("DeleteDetectProcess", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDetectProcessResponse({}));
  }

  async deleteDetectProcess(request: DeleteDetectProcessRequest): Promise<DeleteDetectProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDetectProcessWithOptions(request, runtime);
  }

  async deleteRuleWithOptions(request: DeleteRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRuleResponse>(await this.doRPCRequest("DeleteRule", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRuleResponse({}));
  }

  async deleteRule(request: DeleteRuleRequest): Promise<DeleteRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRuleWithOptions(request, runtime);
  }

  async deleteUserWithOptions(request: DeleteUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteUserResponse>(await this.doRPCRequest("DeleteUser", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteUserResponse({}));
  }

  async deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  async deleteUserDepartmentsWithOptions(request: DeleteUserDepartmentsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserDepartmentsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteUserDepartmentsResponse>(await this.doRPCRequest("DeleteUserDepartments", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteUserDepartmentsResponse({}));
  }

  async deleteUserDepartments(request: DeleteUserDepartmentsRequest): Promise<DeleteUserDepartmentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserDepartmentsWithOptions(request, runtime);
  }

  async exitLiveWithOptions(request: ExitLiveRequest, runtime: $Util.RuntimeOptions): Promise<ExitLiveResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExitLiveResponse>(await this.doRPCRequest("ExitLive", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new ExitLiveResponse({}));
  }

  async exitLive(request: ExitLiveRequest): Promise<ExitLiveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exitLiveWithOptions(request, runtime);
  }

  async getAppWithOptions(request: GetAppRequest, runtime: $Util.RuntimeOptions): Promise<GetAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAppResponse>(await this.doRPCRequest("GetApp", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetAppResponse({}));
  }

  async getApp(request: GetAppRequest): Promise<GetAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppWithOptions(request, runtime);
  }

  async getBatchSignedUrlWithOptions(request: GetBatchSignedUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetBatchSignedUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetBatchSignedUrlResponse>(await this.doRPCRequest("GetBatchSignedUrl", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetBatchSignedUrlResponse({}));
  }

  async getBatchSignedUrl(request: GetBatchSignedUrlRequest): Promise<GetBatchSignedUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBatchSignedUrlWithOptions(request, runtime);
  }

  async getDepartmentWithOptions(request: GetDepartmentRequest, runtime: $Util.RuntimeOptions): Promise<GetDepartmentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDepartmentResponse>(await this.doRPCRequest("GetDepartment", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetDepartmentResponse({}));
  }

  async getDepartment(request: GetDepartmentRequest): Promise<GetDepartmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDepartmentWithOptions(request, runtime);
  }

  async getDetectEvaluationWithOptions(request: GetDetectEvaluationRequest, runtime: $Util.RuntimeOptions): Promise<GetDetectEvaluationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDetectEvaluationResponse>(await this.doRPCRequest("GetDetectEvaluation", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetDetectEvaluationResponse({}));
  }

  async getDetectEvaluation(request: GetDetectEvaluationRequest): Promise<GetDetectEvaluationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDetectEvaluationWithOptions(request, runtime);
  }

  async getDetectionWithOptions(request: GetDetectionRequest, runtime: $Util.RuntimeOptions): Promise<GetDetectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDetectionResponse>(await this.doRPCRequest("GetDetection", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetDetectionResponse({}));
  }

  async getDetection(request: GetDetectionRequest): Promise<GetDetectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDetectionWithOptions(request, runtime);
  }

  async getDetectProcessWithOptions(request: GetDetectProcessRequest, runtime: $Util.RuntimeOptions): Promise<GetDetectProcessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDetectProcessResponse>(await this.doRPCRequest("GetDetectProcess", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetDetectProcessResponse({}));
  }

  async getDetectProcess(request: GetDetectProcessRequest): Promise<GetDetectProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDetectProcessWithOptions(request, runtime);
  }

  async getDetectProcessJsonFileWithOptions(request: GetDetectProcessJsonFileRequest, runtime: $Util.RuntimeOptions): Promise<GetDetectProcessJsonFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDetectProcessJsonFileResponse>(await this.doRPCRequest("GetDetectProcessJsonFile", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetDetectProcessJsonFileResponse({}));
  }

  async getDetectProcessJsonFile(request: GetDetectProcessJsonFileRequest): Promise<GetDetectProcessJsonFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDetectProcessJsonFileWithOptions(request, runtime);
  }

  async getDetectProcessTemplateWithOptions(runtime: $Util.RuntimeOptions): Promise<GetDetectProcessTemplateResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<GetDetectProcessTemplateResponse>(await this.doRPCRequest("GetDetectProcessTemplate", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetDetectProcessTemplateResponse({}));
  }

  async getDetectProcessTemplate(): Promise<GetDetectProcessTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDetectProcessTemplateWithOptions(runtime);
  }

  async getGlobalConfigWithOptions(request: GetGlobalConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetGlobalConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetGlobalConfigResponse>(await this.doRPCRequest("GetGlobalConfig", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetGlobalConfigResponse({}));
  }

  async getGlobalConfig(request: GetGlobalConfigRequest): Promise<GetGlobalConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGlobalConfigWithOptions(request, runtime);
  }

  async getModelSignedUrlWithOptions(request: GetModelSignedUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetModelSignedUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetModelSignedUrlResponse>(await this.doRPCRequest("GetModelSignedUrl", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetModelSignedUrlResponse({}));
  }

  async getModelSignedUrl(request: GetModelSignedUrlRequest): Promise<GetModelSignedUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getModelSignedUrlWithOptions(request, runtime);
  }

  async getPreSignedUrlWithOptions(request: GetPreSignedUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetPreSignedUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPreSignedUrlResponse>(await this.doRPCRequest("GetPreSignedUrl", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetPreSignedUrlResponse({}));
  }

  async getPreSignedUrl(request: GetPreSignedUrlRequest): Promise<GetPreSignedUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPreSignedUrlWithOptions(request, runtime);
  }

  async getRuleWithOptions(request: GetRuleRequest, runtime: $Util.RuntimeOptions): Promise<GetRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRuleResponse>(await this.doRPCRequest("GetRule", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetRuleResponse({}));
  }

  async getRule(request: GetRuleRequest): Promise<GetRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRuleWithOptions(request, runtime);
  }

  async getServiceConfigurationWithOptions(request: GetServiceConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceConfigurationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetServiceConfigurationResponse>(await this.doRPCRequest("GetServiceConfiguration", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetServiceConfigurationResponse({}));
  }

  async getServiceConfiguration(request: GetServiceConfigurationRequest): Promise<GetServiceConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceConfigurationWithOptions(request, runtime);
  }

  async getSignedUrlWithOptions(request: GetSignedUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetSignedUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSignedUrlResponse>(await this.doRPCRequest("GetSignedUrl", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetSignedUrlResponse({}));
  }

  async getSignedUrl(request: GetSignedUrlRequest): Promise<GetSignedUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSignedUrlWithOptions(request, runtime);
  }

  async getSlrConfigurationWithOptions(request: GetSlrConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<GetSlrConfigurationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSlrConfigurationResponse>(await this.doRPCRequest("GetSlrConfiguration", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetSlrConfigurationResponse({}));
  }

  async getSlrConfiguration(request: GetSlrConfigurationRequest): Promise<GetSlrConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSlrConfigurationWithOptions(request, runtime);
  }

  async getStatisticsWithOptions(request: GetStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<GetStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetStatisticsResponse>(await this.doRPCRequest("GetStatistics", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetStatisticsResponse({}));
  }

  async getStatistics(request: GetStatisticsRequest): Promise<GetStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStatisticsWithOptions(request, runtime);
  }

  async getTaskWithOptions(request: GetTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTaskResponse>(await this.doRPCRequest("GetTask", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetTaskResponse({}));
  }

  async getTask(request: GetTaskRequest): Promise<GetTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTaskWithOptions(request, runtime);
  }

  async getTaskGroupWithOptions(request: GetTaskGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetTaskGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTaskGroupResponse>(await this.doRPCRequest("GetTaskGroup", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetTaskGroupResponse({}));
  }

  async getTaskGroup(request: GetTaskGroupRequest): Promise<GetTaskGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTaskGroupWithOptions(request, runtime);
  }

  async getUserWithOptions(request: GetUserRequest, runtime: $Util.RuntimeOptions): Promise<GetUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetUserResponse>(await this.doRPCRequest("GetUser", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetUserResponse({}));
  }

  async getUser(request: GetUserRequest): Promise<GetUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserWithOptions(request, runtime);
  }

  async initializeServiceLinkedRoleWithOptions(request: InitializeServiceLinkedRoleRequest, runtime: $Util.RuntimeOptions): Promise<InitializeServiceLinkedRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InitializeServiceLinkedRoleResponse>(await this.doRPCRequest("InitializeServiceLinkedRole", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new InitializeServiceLinkedRoleResponse({}));
  }

  async initializeServiceLinkedRole(request: InitializeServiceLinkedRoleRequest): Promise<InitializeServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initializeServiceLinkedRoleWithOptions(request, runtime);
  }

  async joinLiveWithOptions(request: JoinLiveRequest, runtime: $Util.RuntimeOptions): Promise<JoinLiveResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<JoinLiveResponse>(await this.doRPCRequest("JoinLive", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new JoinLiveResponse({}));
  }

  async joinLive(request: JoinLiveRequest): Promise<JoinLiveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.joinLiveWithOptions(request, runtime);
  }

  async listAppsWithOptions(request: ListAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListAppsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAppsResponse>(await this.doRPCRequest("ListApps", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListAppsResponse({}));
  }

  async listApps(request: ListAppsRequest): Promise<ListAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppsWithOptions(request, runtime);
  }

  async listDepartmentsWithOptions(request: ListDepartmentsRequest, runtime: $Util.RuntimeOptions): Promise<ListDepartmentsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDepartmentsResponse>(await this.doRPCRequest("ListDepartments", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListDepartmentsResponse({}));
  }

  async listDepartments(request: ListDepartmentsRequest): Promise<ListDepartmentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDepartmentsWithOptions(request, runtime);
  }

  async listDetectionsWithOptions(request: ListDetectionsRequest, runtime: $Util.RuntimeOptions): Promise<ListDetectionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDetectionsResponse>(await this.doRPCRequest("ListDetections", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListDetectionsResponse({}));
  }

  async listDetections(request: ListDetectionsRequest): Promise<ListDetectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDetectionsWithOptions(request, runtime);
  }

  async listDetectProcessesWithOptions(request: ListDetectProcessesRequest, runtime: $Util.RuntimeOptions): Promise<ListDetectProcessesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDetectProcessesResponse>(await this.doRPCRequest("ListDetectProcesses", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListDetectProcessesResponse({}));
  }

  async listDetectProcesses(request: ListDetectProcessesRequest): Promise<ListDetectProcessesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDetectProcessesWithOptions(request, runtime);
  }

  async listFilesWithOptions(request: ListFilesRequest, runtime: $Util.RuntimeOptions): Promise<ListFilesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFilesResponse>(await this.doRPCRequest("ListFiles", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListFilesResponse({}));
  }

  async listFiles(request: ListFilesRequest): Promise<ListFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFilesWithOptions(request, runtime);
  }

  async listLivesWithOptions(request: ListLivesRequest, runtime: $Util.RuntimeOptions): Promise<ListLivesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListLivesResponse>(await this.doRPCRequest("ListLives", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListLivesResponse({}));
  }

  async listLives(request: ListLivesRequest): Promise<ListLivesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLivesWithOptions(request, runtime);
  }

  async listRolesWithOptions(runtime: $Util.RuntimeOptions): Promise<ListRolesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListRolesResponse>(await this.doRPCRequest("ListRoles", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListRolesResponse({}));
  }

  async listRoles(): Promise<ListRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRolesWithOptions(runtime);
  }

  async listRulesWithOptions(request: ListRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRulesResponse>(await this.doRPCRequest("ListRules", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListRulesResponse({}));
  }

  async listRules(request: ListRulesRequest): Promise<ListRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRulesWithOptions(request, runtime);
  }

  async listStatisticsTaskWithOptions(request: ListStatisticsTaskRequest, runtime: $Util.RuntimeOptions): Promise<ListStatisticsTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListStatisticsTaskResponse>(await this.doRPCRequest("ListStatisticsTask", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListStatisticsTaskResponse({}));
  }

  async listStatisticsTask(request: ListStatisticsTaskRequest): Promise<ListStatisticsTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStatisticsTaskWithOptions(request, runtime);
  }

  async listTaskGroupsWithOptions(request: ListTaskGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListTaskGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTaskGroupsResponse>(await this.doRPCRequest("ListTaskGroups", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListTaskGroupsResponse({}));
  }

  async listTaskGroups(request: ListTaskGroupsRequest): Promise<ListTaskGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTaskGroupsWithOptions(request, runtime);
  }

  async listTaskItemsWithOptions(request: ListTaskItemsRequest, runtime: $Util.RuntimeOptions): Promise<ListTaskItemsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTaskItemsResponse>(await this.doRPCRequest("ListTaskItems", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListTaskItemsResponse({}));
  }

  async listTaskItems(request: ListTaskItemsRequest): Promise<ListTaskItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTaskItemsWithOptions(request, runtime);
  }

  async listTasksWithOptions(request: ListTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTasksResponse>(await this.doRPCRequest("ListTasks", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListTasksResponse({}));
  }

  async listTasks(request: ListTasksRequest): Promise<ListTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTasksWithOptions(request, runtime);
  }

  async listUsersWithOptions(request: ListUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUsersResponse>(await this.doRPCRequest("ListUsers", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListUsersResponse({}));
  }

  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  async renameDetectProcessWithOptions(request: RenameDetectProcessRequest, runtime: $Util.RuntimeOptions): Promise<RenameDetectProcessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RenameDetectProcessResponse>(await this.doRPCRequest("RenameDetectProcess", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new RenameDetectProcessResponse({}));
  }

  async renameDetectProcess(request: RenameDetectProcessRequest): Promise<RenameDetectProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renameDetectProcessWithOptions(request, runtime);
  }

  async updateAppWithOptions(request: UpdateAppRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAppResponse>(await this.doRPCRequest("UpdateApp", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAppResponse({}));
  }

  async updateApp(request: UpdateAppRequest): Promise<UpdateAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppWithOptions(request, runtime);
  }

  async updateDepartmentWithOptions(request: UpdateDepartmentRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDepartmentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDepartmentResponse>(await this.doRPCRequest("UpdateDepartment", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDepartmentResponse({}));
  }

  async updateDepartment(request: UpdateDepartmentRequest): Promise<UpdateDepartmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDepartmentWithOptions(request, runtime);
  }

  async updateDetectProcessWithOptions(request: UpdateDetectProcessRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDetectProcessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDetectProcessResponse>(await this.doRPCRequest("UpdateDetectProcess", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDetectProcessResponse({}));
  }

  async updateDetectProcess(request: UpdateDetectProcessRequest): Promise<UpdateDetectProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDetectProcessWithOptions(request, runtime);
  }

  async updateLiveWithOptions(request: UpdateLiveRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLiveResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateLiveResponse>(await this.doRPCRequest("UpdateLive", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateLiveResponse({}));
  }

  async updateLive(request: UpdateLiveRequest): Promise<UpdateLiveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLiveWithOptions(request, runtime);
  }

  async updateRuleWithOptions(request: UpdateRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateRuleResponse>(await this.doRPCRequest("UpdateRule", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateRuleResponse({}));
  }

  async updateRule(request: UpdateRuleRequest): Promise<UpdateRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRuleWithOptions(request, runtime);
  }

  async updateServiceConfigurationWithOptions(request: UpdateServiceConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<UpdateServiceConfigurationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateServiceConfigurationResponse>(await this.doRPCRequest("UpdateServiceConfiguration", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateServiceConfigurationResponse({}));
  }

  async updateServiceConfiguration(request: UpdateServiceConfigurationRequest): Promise<UpdateServiceConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateServiceConfigurationWithOptions(request, runtime);
  }

  async updateSlrConfigurationWithOptions(request: UpdateSlrConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSlrConfigurationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateSlrConfigurationResponse>(await this.doRPCRequest("UpdateSlrConfiguration", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateSlrConfigurationResponse({}));
  }

  async updateSlrConfiguration(request: UpdateSlrConfigurationRequest): Promise<UpdateSlrConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSlrConfigurationWithOptions(request, runtime);
  }

  async updateUserWithOptions(request: UpdateUserRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateUserResponse>(await this.doRPCRequest("UpdateUser", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateUserResponse({}));
  }

  async updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

}
