// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AbortPredictiveJobsRequest extends $tea.Model {
  all?: boolean;
  instanceId?: string;
  jobGroupId?: string;
  jobId?: string[];
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      jobId: 'JobId',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      instanceId: 'string',
      jobGroupId: 'string',
      jobId: { 'type': 'array', 'itemType': 'string' },
      skillGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortPredictiveJobsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class AbortPredictiveJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AbortPredictiveJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AbortPredictiveJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAgentDeviceRequest extends $tea.Model {
  browserVersion?: string;
  clientIp?: string;
  clientPort?: string;
  instanceId?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      browserVersion: 'BrowserVersion',
      clientIp: 'ClientIp',
      clientPort: 'ClientPort',
      instanceId: 'InstanceId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      browserVersion: 'string',
      clientIp: 'string',
      clientPort: 'string',
      instanceId: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAgentDeviceResponseBody extends $tea.Model {
  agentDeviceId?: number;
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      agentDeviceId: 'AgentDeviceId',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentDeviceId: 'number',
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

export class AddAgentDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddAgentDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddAgentDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBulkPhoneNumbersRequest extends $tea.Model {
  contactFlowId?: string;
  instanceId?: string;
  phoneNumber?: string[];
  skillGroupId?: string[];
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      contactFlowId: 'ContactFlowId',
      instanceId: 'InstanceId',
      phoneNumber: 'PhoneNumber',
      skillGroupId: 'SkillGroupId',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowId: 'string',
      instanceId: 'string',
      phoneNumber: { 'type': 'array', 'itemType': 'string' },
      skillGroupId: { 'type': 'array', 'itemType': 'string' },
      usage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBulkPhoneNumbersResponseBody extends $tea.Model {
  arrearagePhoneNumbers?: AddBulkPhoneNumbersResponseBodyArrearagePhoneNumbers;
  code?: string;
  failedPhoneNumbers?: AddBulkPhoneNumbersResponseBodyFailedPhoneNumbers;
  httpStatusCode?: number;
  message?: string;
  phoneNumbers?: AddBulkPhoneNumbersResponseBodyPhoneNumbers;
  requestId?: string;
  success?: boolean;
  userdPhoneNumbers?: AddBulkPhoneNumbersResponseBodyUserdPhoneNumbers;
  static names(): { [key: string]: string } {
    return {
      arrearagePhoneNumbers: 'ArrearagePhoneNumbers',
      code: 'Code',
      failedPhoneNumbers: 'FailedPhoneNumbers',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      phoneNumbers: 'PhoneNumbers',
      requestId: 'RequestId',
      success: 'Success',
      userdPhoneNumbers: 'UserdPhoneNumbers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrearagePhoneNumbers: AddBulkPhoneNumbersResponseBodyArrearagePhoneNumbers,
      code: 'string',
      failedPhoneNumbers: AddBulkPhoneNumbersResponseBodyFailedPhoneNumbers,
      httpStatusCode: 'number',
      message: 'string',
      phoneNumbers: AddBulkPhoneNumbersResponseBodyPhoneNumbers,
      requestId: 'string',
      success: 'boolean',
      userdPhoneNumbers: AddBulkPhoneNumbersResponseBodyUserdPhoneNumbers,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBulkPhoneNumbersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddBulkPhoneNumbersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddBulkPhoneNumbersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddJobsToPredictiveJobGroupRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  jobGroupId?: string;
  jobsJson?: string[];
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      jobsJson: 'JobsJson',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      jobGroupId: 'string',
      jobsJson: { 'type': 'array', 'itemType': 'string' },
      skillGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddJobsToPredictiveJobGroupResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class AddJobsToPredictiveJobGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddJobsToPredictiveJobGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddJobsToPredictiveJobGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPhoneNumberRequest extends $tea.Model {
  contactFlowId?: string;
  instanceId?: string;
  phoneNumber?: string;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      contactFlowId: 'ContactFlowId',
      instanceId: 'InstanceId',
      phoneNumber: 'PhoneNumber',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowId: 'string',
      instanceId: 'string',
      phoneNumber: 'string',
      usage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPhoneNumberResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  phoneNumber?: AddPhoneNumberResponseBodyPhoneNumber;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      phoneNumber: 'PhoneNumber',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      phoneNumber: AddPhoneNumberResponseBodyPhoneNumber,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPhoneNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddPhoneNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddPhoneNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPhoneTagsRequest extends $tea.Model {
  concurrency?: number;
  instanceId?: string;
  phoneNumberList?: string[];
  provider?: string;
  regionNameCity?: string;
  regionNameProvince?: string;
  serviceTag?: string;
  sipTag?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      concurrency: 'Concurrency',
      instanceId: 'InstanceId',
      phoneNumberList: 'PhoneNumberList',
      provider: 'Provider',
      regionNameCity: 'RegionNameCity',
      regionNameProvince: 'RegionNameProvince',
      serviceTag: 'ServiceTag',
      sipTag: 'SipTag',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrency: 'number',
      instanceId: 'string',
      phoneNumberList: { 'type': 'array', 'itemType': 'string' },
      provider: 'string',
      regionNameCity: 'string',
      regionNameProvince: 'string',
      serviceTag: 'string',
      sipTag: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPhoneTagsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class AddPhoneTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddPhoneTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddPhoneTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignJobsRequest extends $tea.Model {
  callingNumber?: string[];
  groupId?: string;
  instanceId?: string;
  jobsJson?: string[];
  scenarioId?: string;
  strategyJson?: string;
  static names(): { [key: string]: string } {
    return {
      callingNumber: 'CallingNumber',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      jobsJson: 'JobsJson',
      scenarioId: 'ScenarioId',
      strategyJson: 'StrategyJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumber: { 'type': 'array', 'itemType': 'string' },
      groupId: 'string',
      instanceId: 'string',
      jobsJson: { 'type': 'array', 'itemType': 'string' },
      scenarioId: 'string',
      strategyJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignJobsResponseBody extends $tea.Model {
  code?: string;
  groupId?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      groupId: 'GroupId',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      groupId: 'string',
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

export class AssignJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AssignJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssignJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignUsersRequest extends $tea.Model {
  instanceId?: string;
  roleId?: string[];
  skillGroupId?: string[];
  skillLevel?: number[];
  userRamId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      roleId: 'RoleId',
      skillGroupId: 'SkillGroupId',
      skillLevel: 'SkillLevel',
      userRamId: 'UserRamId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      roleId: { 'type': 'array', 'itemType': 'string' },
      skillGroupId: { 'type': 'array', 'itemType': 'string' },
      skillLevel: { 'type': 'array', 'itemType': 'number' },
      userRamId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignUsersResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class AssignUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AssignUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssignUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CallOnlinePrivacyNumberRequest extends $tea.Model {
  instanceId?: string;
  telA?: string;
  telB?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      telA: 'TelA',
      telB: 'TelB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      telA: 'string',
      telB: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CallOnlinePrivacyNumberResponseBody extends $tea.Model {
  code?: string;
  data?: CallOnlinePrivacyNumberResponseBodyData;
  httpStatusCode?: number;
  message?: string;
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
      data: CallOnlinePrivacyNumberResponseBodyData,
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

export class CallOnlinePrivacyNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CallOnlinePrivacyNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CallOnlinePrivacyNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelJobsRequest extends $tea.Model {
  all?: boolean;
  groupId?: string;
  instanceId?: string;
  jobId?: string[];
  jobReferenceId?: string[];
  scenarioId?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      jobReferenceId: 'JobReferenceId',
      scenarioId: 'ScenarioId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      groupId: 'string',
      instanceId: 'string',
      jobId: { 'type': 'array', 'itemType': 'string' },
      jobReferenceId: { 'type': 'array', 'itemType': 'string' },
      scenarioId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelJobsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class CancelJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckNumberAvaliableRequest extends $tea.Model {
  callee?: string;
  caller?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      callee: 'Callee',
      caller: 'Caller',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callee: 'string',
      caller: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckNumberAvaliableResponseBody extends $tea.Model {
  calleeAvaliable?: CheckNumberAvaliableResponseBodyCalleeAvaliable;
  callerAvaliable?: CheckNumberAvaliableResponseBodyCallerAvaliable;
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      calleeAvaliable: 'CalleeAvaliable',
      callerAvaliable: 'CallerAvaliable',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calleeAvaliable: CheckNumberAvaliableResponseBodyCalleeAvaliable,
      callerAvaliable: CheckNumberAvaliableResponseBodyCallerAvaliable,
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

export class CheckNumberAvaliableResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckNumberAvaliableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckNumberAvaliableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitContactFlowVersionModificationRequest extends $tea.Model {
  canvas?: string;
  contactFlowVersionId?: string;
  content?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      canvas: 'Canvas',
      contactFlowVersionId: 'ContactFlowVersionId',
      content: 'Content',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canvas: 'string',
      contactFlowVersionId: 'string',
      content: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitContactFlowVersionModificationResponseBody extends $tea.Model {
  code?: string;
  contactFlowVersion?: CommitContactFlowVersionModificationResponseBodyContactFlowVersion;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contactFlowVersion: 'ContactFlowVersion',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contactFlowVersion: CommitContactFlowVersionModificationResponseBodyContactFlowVersion,
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

export class CommitContactFlowVersionModificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CommitContactFlowVersionModificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CommitContactFlowVersionModificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchJobsRequest extends $tea.Model {
  callingNumber?: string[];
  description?: string;
  instanceId?: string;
  jobFilePath?: string;
  name?: string;
  scenarioId?: string;
  strategyJson?: string;
  submitted?: boolean;
  static names(): { [key: string]: string } {
    return {
      callingNumber: 'CallingNumber',
      description: 'Description',
      instanceId: 'InstanceId',
      jobFilePath: 'JobFilePath',
      name: 'Name',
      scenarioId: 'ScenarioId',
      strategyJson: 'StrategyJson',
      submitted: 'Submitted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumber: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      instanceId: 'string',
      jobFilePath: 'string',
      name: 'string',
      scenarioId: 'string',
      strategyJson: 'string',
      submitted: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchJobsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  jobGroup?: CreateBatchJobsResponseBodyJobGroup;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      jobGroup: 'JobGroup',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      jobGroup: CreateBatchJobsResponseBodyJobGroup,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateBatchJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateBatchJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCabInstanceRequest extends $tea.Model {
  callCenterInstanceId?: string;
  instanceDescription?: string;
  instanceName?: string;
  maxConcurrentConversation?: number;
  static names(): { [key: string]: string } {
    return {
      callCenterInstanceId: 'CallCenterInstanceId',
      instanceDescription: 'InstanceDescription',
      instanceName: 'InstanceName',
      maxConcurrentConversation: 'MaxConcurrentConversation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callCenterInstanceId: 'string',
      instanceDescription: 'string',
      instanceName: 'string',
      maxConcurrentConversation: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCabInstanceResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  instance?: CreateCabInstanceResponseBodyInstance;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instance: 'Instance',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instance: CreateCabInstanceResponseBodyInstance,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCabInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCabInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCabInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContactFlowRequest extends $tea.Model {
  canvas?: string;
  content?: string;
  description?: string;
  instanceId?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      canvas: 'Canvas',
      content: 'Content',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canvas: 'string',
      content: 'string',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContactFlowResponseBody extends $tea.Model {
  code?: string;
  contactFlow?: CreateContactFlowResponseBodyContactFlow;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contactFlow: 'ContactFlow',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contactFlow: CreateContactFlowResponseBodyContactFlow,
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

export class CreateContactFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateContactFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateContactFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFaultRequest extends $tea.Model {
  agentFilePath?: string;
  agentId?: number;
  agentOssFileName?: string;
  browserVersion?: string;
  clientIp?: string;
  clientPort?: string;
  connectId?: string;
  customFilePath?: string;
  customOssFileName?: string;
  description?: string;
  endTime?: number;
  instanceId?: string;
  microphoneEquipment?: string;
  microphoneList?: string;
  operatingSystemVersion?: string;
  serviceIp?: string;
  servicePort?: string;
  speakerEquipment?: string;
  speakerList?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentFilePath: 'AgentFilePath',
      agentId: 'AgentId',
      agentOssFileName: 'AgentOssFileName',
      browserVersion: 'BrowserVersion',
      clientIp: 'ClientIp',
      clientPort: 'ClientPort',
      connectId: 'ConnectId',
      customFilePath: 'CustomFilePath',
      customOssFileName: 'CustomOssFileName',
      description: 'Description',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      microphoneEquipment: 'MicrophoneEquipment',
      microphoneList: 'MicrophoneList',
      operatingSystemVersion: 'OperatingSystemVersion',
      serviceIp: 'ServiceIp',
      servicePort: 'ServicePort',
      speakerEquipment: 'SpeakerEquipment',
      speakerList: 'SpeakerList',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentFilePath: 'string',
      agentId: 'number',
      agentOssFileName: 'string',
      browserVersion: 'string',
      clientIp: 'string',
      clientPort: 'string',
      connectId: 'string',
      customFilePath: 'string',
      customOssFileName: 'string',
      description: 'string',
      endTime: 'number',
      instanceId: 'string',
      microphoneEquipment: 'string',
      microphoneList: 'string',
      operatingSystemVersion: 'string',
      serviceIp: 'string',
      servicePort: 'string',
      speakerEquipment: 'string',
      speakerList: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFaultResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class CreateFaultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFaultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFaultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $tea.Model {
  adminRamId?: string[];
  description?: string;
  directoryId?: string;
  domainName?: string;
  name?: string;
  phoneNumber?: string;
  phoneNumbers?: string[];
  storageMaxDays?: number;
  storageMaxSize?: number;
  userObject?: string[];
  static names(): { [key: string]: string } {
    return {
      adminRamId: 'AdminRamId',
      description: 'Description',
      directoryId: 'DirectoryId',
      domainName: 'DomainName',
      name: 'Name',
      phoneNumber: 'PhoneNumber',
      phoneNumbers: 'PhoneNumbers',
      storageMaxDays: 'StorageMaxDays',
      storageMaxSize: 'StorageMaxSize',
      userObject: 'UserObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminRamId: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      directoryId: 'string',
      domainName: 'string',
      name: 'string',
      phoneNumber: 'string',
      phoneNumbers: { 'type': 'array', 'itemType': 'string' },
      storageMaxDays: 'number',
      storageMaxSize: 'number',
      userObject: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  instance?: CreateInstanceResponseBodyInstance;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instance: 'Instance',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instance: CreateInstanceResponseBodyInstance,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobGroupRequest extends $tea.Model {
  callingNumber?: string[];
  description?: string;
  instanceId?: string;
  name?: string;
  scenarioId?: string;
  strategyJson?: string;
  static names(): { [key: string]: string } {
    return {
      callingNumber: 'CallingNumber',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      scenarioId: 'ScenarioId',
      strategyJson: 'StrategyJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumber: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      instanceId: 'string',
      name: 'string',
      scenarioId: 'string',
      strategyJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobGroupResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  jobGroup?: CreateJobGroupResponseBodyJobGroup;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      jobGroup: 'JobGroup',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      jobGroup: CreateJobGroupResponseBodyJobGroup,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateJobGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateJobGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMediaRequest extends $tea.Model {
  content?: string;
  description?: string;
  fileName?: string;
  instanceId?: string;
  name?: string;
  ossFileName?: string;
  ossFilePath?: string;
  type?: string;
  uploadResult?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      description: 'Description',
      fileName: 'FileName',
      instanceId: 'InstanceId',
      name: 'Name',
      ossFileName: 'OssFileName',
      ossFilePath: 'OssFilePath',
      type: 'Type',
      uploadResult: 'UploadResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      description: 'string',
      fileName: 'string',
      instanceId: 'string',
      name: 'string',
      ossFileName: 'string',
      ossFilePath: 'string',
      type: 'string',
      uploadResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMediaResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  mediaUploadParam?: CreateMediaResponseBodyMediaUploadParam;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      mediaUploadParam: 'MediaUploadParam',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      mediaUploadParam: CreateMediaResponseBodyMediaUploadParam,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMediaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMediaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMediaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePredictiveJobGroupRequest extends $tea.Model {
  description?: string;
  instanceId?: string;
  isDraft?: boolean;
  jobFilePath?: string;
  jobsJson?: string[];
  name?: string;
  ratio?: number;
  skillGroupId?: string;
  strategyJson?: string;
  timingSchedule?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      isDraft: 'IsDraft',
      jobFilePath: 'JobFilePath',
      jobsJson: 'JobsJson',
      name: 'Name',
      ratio: 'Ratio',
      skillGroupId: 'SkillGroupId',
      strategyJson: 'StrategyJson',
      timingSchedule: 'TimingSchedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      isDraft: 'boolean',
      jobFilePath: 'string',
      jobsJson: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      ratio: 'number',
      skillGroupId: 'string',
      strategyJson: 'string',
      timingSchedule: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePredictiveJobGroupResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  jobGroupId?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      jobGroupId: 'JobGroupId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      jobGroupId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePredictiveJobGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreatePredictiveJobGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreatePredictiveJobGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScenarioRequest extends $tea.Model {
  description?: string;
  instanceId?: string;
  name?: string;
  strategyJson?: string;
  surveysJson?: string[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      strategyJson: 'StrategyJson',
      surveysJson: 'SurveysJson',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      name: 'string',
      strategyJson: 'string',
      surveysJson: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScenarioResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  scenario?: CreateScenarioResponseBodyScenario;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      scenario: 'Scenario',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      scenario: CreateScenarioResponseBodyScenario,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScenarioResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateScenarioResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateScenarioResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScenarioFromTemplateRequest extends $tea.Model {
  description?: string;
  instanceId?: string;
  name?: string;
  templateId?: string;
  variables?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      templateId: 'TemplateId',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      name: 'string',
      templateId: 'string',
      variables: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScenarioFromTemplateResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  scenario?: CreateScenarioFromTemplateResponseBodyScenario;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      scenario: 'Scenario',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      scenario: CreateScenarioFromTemplateResponseBodyScenario,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScenarioFromTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateScenarioFromTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateScenarioFromTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSkillGroupRequest extends $tea.Model {
  allowPrivateOutboundNumber?: boolean;
  description?: string;
  instanceId?: string;
  name?: string;
  outboundPhoneNumberId?: string[];
  routingStrategy?: string;
  skillLevel?: number[];
  userId?: string[];
  static names(): { [key: string]: string } {
    return {
      allowPrivateOutboundNumber: 'AllowPrivateOutboundNumber',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      outboundPhoneNumberId: 'OutboundPhoneNumberId',
      routingStrategy: 'RoutingStrategy',
      skillLevel: 'SkillLevel',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowPrivateOutboundNumber: 'boolean',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      outboundPhoneNumberId: { 'type': 'array', 'itemType': 'string' },
      routingStrategy: 'string',
      skillLevel: { 'type': 'array', 'itemType': 'number' },
      userId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSkillGroupResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  skillGroupId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      skillGroupId: 'SkillGroupId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      skillGroupId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSkillGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSurveyRequest extends $tea.Model {
  corpora?: string;
  description?: string;
  flowJson?: string;
  globalQuestions?: string;
  instanceId?: string;
  name?: string;
  role?: string;
  round?: number;
  scenarioId?: string;
  speechOptimizationParam?: string;
  static names(): { [key: string]: string } {
    return {
      corpora: 'Corpora',
      description: 'Description',
      flowJson: 'FlowJson',
      globalQuestions: 'GlobalQuestions',
      instanceId: 'InstanceId',
      name: 'Name',
      role: 'Role',
      round: 'Round',
      scenarioId: 'ScenarioId',
      speechOptimizationParam: 'SpeechOptimizationParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpora: 'string',
      description: 'string',
      flowJson: 'string',
      globalQuestions: 'string',
      instanceId: 'string',
      name: 'string',
      role: 'string',
      round: 'number',
      scenarioId: 'string',
      speechOptimizationParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSurveyResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  survey?: CreateSurveyResponseBodySurvey;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      survey: 'Survey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      survey: CreateSurveyResponseBodySurvey,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSurveyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSurveyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSurveyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserRequest extends $tea.Model {
  displayName?: string;
  email?: string;
  instanceId?: string;
  loginName?: string;
  phone?: string;
  privateOutboundNumberId?: string;
  roleId?: string[];
  skillGroupId?: string[];
  skillLevel?: number[];
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      email: 'Email',
      instanceId: 'InstanceId',
      loginName: 'LoginName',
      phone: 'Phone',
      privateOutboundNumberId: 'PrivateOutboundNumberId',
      roleId: 'RoleId',
      skillGroupId: 'SkillGroupId',
      skillLevel: 'SkillLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      email: 'string',
      instanceId: 'string',
      loginName: 'string',
      phone: 'string',
      privateOutboundNumberId: 'string',
      roleId: { 'type': 'array', 'itemType': 'string' },
      skillGroupId: { 'type': 'array', 'itemType': 'string' },
      skillLevel: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVoiceAppraiseRequest extends $tea.Model {
  contactFlowVersionId?: string;
  content?: string;
  instanceId?: string;
  isAppraise?: boolean;
  static names(): { [key: string]: string } {
    return {
      contactFlowVersionId: 'ContactFlowVersionId',
      content: 'Content',
      instanceId: 'InstanceId',
      isAppraise: 'IsAppraise',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowVersionId: 'string',
      content: 'string',
      instanceId: 'string',
      isAppraise: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVoiceAppraiseResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class CreateVoiceAppraiseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateVoiceAppraiseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateVoiceAppraiseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class DeleteInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobGroupRequest extends $tea.Model {
  instanceId?: string;
  jobGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobGroupResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class DeleteJobGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteJobGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteJobGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMediaRequest extends $tea.Model {
  instanceId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMediaResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class DeleteMediaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteMediaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteMediaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePhoneTagsRequest extends $tea.Model {
  instanceId?: string;
  phoneNumberList?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      phoneNumberList: 'PhoneNumberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      phoneNumberList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePhoneTagsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class DeletePhoneTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeletePhoneTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeletePhoneTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSkillGroupRequest extends $tea.Model {
  instanceId?: string;
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSkillGroupResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class DeleteSkillGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSurveyRequest extends $tea.Model {
  instanceId?: string;
  scenarioId?: string;
  surveyId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scenarioId: 'ScenarioId',
      surveyId: 'SurveyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scenarioId: 'string',
      surveyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSurveyResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class DeleteSurveyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSurveyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSurveyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DialExRequest extends $tea.Model {
  answerMode?: number;
  callee?: string;
  caller?: string;
  instanceId?: string;
  provider?: string;
  routPoint?: string;
  static names(): { [key: string]: string } {
    return {
      answerMode: 'AnswerMode',
      callee: 'Callee',
      caller: 'Caller',
      instanceId: 'InstanceId',
      provider: 'Provider',
      routPoint: 'RoutPoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerMode: 'number',
      callee: 'string',
      caller: 'string',
      instanceId: 'string',
      provider: 'string',
      routPoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DialExResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  statusCode?: string;
  statusDesc?: string;
  success?: boolean;
  taskId?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      statusCode: 'StatusCode',
      statusDesc: 'StatusDesc',
      success: 'Success',
      taskId: 'TaskId',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      statusCode: 'string',
      statusDesc: 'string',
      success: 'boolean',
      taskId: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DialExResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DialExResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DialExResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DialogueRequest extends $tea.Model {
  actionKey?: string;
  actionParams?: string;
  callId?: string;
  callType?: string;
  calledNumber?: string;
  callingNumber?: string;
  instanceId?: string;
  scenarioId?: string;
  taskId?: string;
  utterance?: string;
  static names(): { [key: string]: string } {
    return {
      actionKey: 'ActionKey',
      actionParams: 'ActionParams',
      callId: 'CallId',
      callType: 'CallType',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      instanceId: 'InstanceId',
      scenarioId: 'ScenarioId',
      taskId: 'TaskId',
      utterance: 'Utterance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionKey: 'string',
      actionParams: 'string',
      callId: 'string',
      callType: 'string',
      calledNumber: 'string',
      callingNumber: 'string',
      instanceId: 'string',
      scenarioId: 'string',
      taskId: 'string',
      utterance: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DialogueResponseBody extends $tea.Model {
  code?: string;
  feedback?: DialogueResponseBodyFeedback;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      feedback: 'Feedback',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      feedback: DialogueResponseBodyFeedback,
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

export class DialogueResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DialogueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DialogueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableTrunkProvidersRequest extends $tea.Model {
  providerName?: string[];
  static names(): { [key: string]: string } {
    return {
      providerName: 'ProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      providerName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableTrunkProvidersResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class DisableTrunkProvidersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableTrunkProvidersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableTrunkProvidersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadAllTypeRecordingRequest extends $tea.Model {
  channel?: string;
  contactId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      contactId: 'ContactId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      contactId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadAllTypeRecordingResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  mediaDownloadParamList?: DownloadAllTypeRecordingResponseBodyMediaDownloadParamList;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      mediaDownloadParamList: 'MediaDownloadParamList',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      mediaDownloadParamList: DownloadAllTypeRecordingResponseBodyMediaDownloadParamList,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadAllTypeRecordingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DownloadAllTypeRecordingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DownloadAllTypeRecordingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadCabRecordingRequest extends $tea.Model {
  instanceId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadCabRecordingResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  mediaDownloadParam?: DownloadCabRecordingResponseBodyMediaDownloadParam;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      mediaDownloadParam: 'MediaDownloadParam',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      mediaDownloadParam: DownloadCabRecordingResponseBodyMediaDownloadParam,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadCabRecordingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DownloadCabRecordingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DownloadCabRecordingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadOriginalStatisticsReportRequest extends $tea.Model {
  instanceId?: string;
  jobGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadOriginalStatisticsReportResponseBody extends $tea.Model {
  code?: string;
  downloadParams?: DownloadOriginalStatisticsReportResponseBodyDownloadParams;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      downloadParams: 'DownloadParams',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      downloadParams: DownloadOriginalStatisticsReportResponseBodyDownloadParams,
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

export class DownloadOriginalStatisticsReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DownloadOriginalStatisticsReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DownloadOriginalStatisticsReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadRecordingRequest extends $tea.Model {
  channel?: string;
  fileName?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      fileName: 'FileName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      fileName: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadRecordingResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  mediaDownloadParam?: DownloadRecordingResponseBodyMediaDownloadParam;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      mediaDownloadParam: 'MediaDownloadParam',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      mediaDownloadParam: DownloadRecordingResponseBodyMediaDownloadParam,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadRecordingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DownloadRecordingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DownloadRecordingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadUnreachableContactsRequest extends $tea.Model {
  instanceId?: string;
  jobGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadUnreachableContactsResponseBody extends $tea.Model {
  code?: string;
  downloadParams?: DownloadUnreachableContactsResponseBodyDownloadParams;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      downloadParams: 'DownloadParams',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      downloadParams: DownloadUnreachableContactsResponseBodyDownloadParams,
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

export class DownloadUnreachableContactsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DownloadUnreachableContactsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DownloadUnreachableContactsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindUsersRequest extends $tea.Model {
  criteria?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      criteria: 'Criteria',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteria: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindUsersResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  users?: FindUsersResponseBodyUsers;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      users: FindUsersResponseBodyUsers,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FindUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FindUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAgentStatisticReportRequest extends $tea.Model {
  agentId?: string;
  endDate?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      endDate: 'EndDate',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      endDate: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAgentStatisticReportResponseBody extends $tea.Model {
  code?: string;
  dataList?: GenerateAgentStatisticReportResponseBodyDataList;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dataList: 'DataList',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataList: GenerateAgentStatisticReportResponseBodyDataList,
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

export class GenerateAgentStatisticReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateAgentStatisticReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateAgentStatisticReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentDataRequest extends $tea.Model {
  endDay?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  startDay?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      endDay: 'EndDay',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startDay: 'StartDay',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDay: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startDay: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentDataResponseBody extends $tea.Model {
  code?: string;
  dataList?: GetAgentDataResponseBodyDataList;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dataList: 'DataList',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataList: GetAgentDataResponseBodyDataList,
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

export class GetAgentDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAgentDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAgentDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallMeasureSummaryReportRequest extends $tea.Model {
  day?: number;
  intervalType?: string;
  month?: number;
  pageNumber?: number;
  pageSize?: number;
  year?: number;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      intervalType: 'IntervalType',
      month: 'Month',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      year: 'Year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'number',
      intervalType: 'string',
      month: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      year: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallMeasureSummaryReportResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  numberReports?: GetCallMeasureSummaryReportResponseBodyNumberReports;
  requestId?: string;
  success?: boolean;
  summaryReport?: GetCallMeasureSummaryReportResponseBodySummaryReport;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      numberReports: 'NumberReports',
      requestId: 'RequestId',
      success: 'Success',
      summaryReport: 'SummaryReport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      numberReports: GetCallMeasureSummaryReportResponseBodyNumberReports,
      requestId: 'string',
      success: 'boolean',
      summaryReport: GetCallMeasureSummaryReportResponseBodySummaryReport,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallMeasureSummaryReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCallMeasureSummaryReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCallMeasureSummaryReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRequest extends $tea.Model {
  instanceId?: string;
  name?: string;
  objectId?: string;
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      objectId: 'string',
      objectType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigResponseBody extends $tea.Model {
  code?: string;
  configItem?: GetConfigResponseBodyConfigItem;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      configItem: 'ConfigItem',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      configItem: GetConfigResponseBodyConfigItem,
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

export class GetConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContactInfoByOutboundTaskIdRequest extends $tea.Model {
  instanceId?: string;
  outboundTaskId?: string;
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      outboundTaskId: 'OutboundTaskId',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      outboundTaskId: 'string',
      skillGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContactInfoByOutboundTaskIdResponseBody extends $tea.Model {
  code?: string;
  contactIdentity?: GetContactInfoByOutboundTaskIdResponseBodyContactIdentity;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contactIdentity: 'ContactIdentity',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contactIdentity: GetContactInfoByOutboundTaskIdResponseBodyContactIdentity,
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

export class GetContactInfoByOutboundTaskIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetContactInfoByOutboundTaskIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetContactInfoByOutboundTaskIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConversationDetailByContactIdRequest extends $tea.Model {
  contactId?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConversationDetailByContactIdResponseBody extends $tea.Model {
  code?: string;
  dataList?: GetConversationDetailByContactIdResponseBodyDataList;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dataList: 'DataList',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataList: GetConversationDetailByContactIdResponseBodyDataList,
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

export class GetConversationDetailByContactIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetConversationDetailByContactIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetConversationDetailByContactIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConversationListRequest extends $tea.Model {
  instanceId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConversationListResponseBody extends $tea.Model {
  code?: string;
  conversations?: GetConversationListResponseBodyConversations[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      conversations: 'Conversations',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      conversations: { 'type': 'array', 'itemType': GetConversationListResponseBodyConversations },
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

export class GetConversationListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetConversationListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetConversationListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  instance?: GetInstanceResponseBodyInstance;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instance: 'Instance',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instance: GetInstanceResponseBodyInstance,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceStateRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceStateResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  realTimeInstanceState?: GetInstanceStateResponseBodyRealTimeInstanceState;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      realTimeInstanceState: 'RealTimeInstanceState',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      realTimeInstanceState: GetInstanceStateResponseBodyRealTimeInstanceState,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceStateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInstanceStateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInstanceStateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryReportRequest extends $tea.Model {
  endTime?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryReportResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  instanceSummaryReport?: GetInstanceSummaryReportResponseBodyInstanceSummaryReport;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instanceSummaryReport: 'InstanceSummaryReport',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instanceSummaryReport: GetInstanceSummaryReportResponseBodyInstanceSummaryReport,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInstanceSummaryReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInstanceSummaryReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryReportByIntervalRequest extends $tea.Model {
  endTime?: string;
  instanceId?: string;
  interval?: string;
  pageNumber?: number;
  pageSize?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      interval: 'Interval',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      interval: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryReportByIntervalResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  instanceTimeIntervalReport?: GetInstanceSummaryReportByIntervalResponseBodyInstanceTimeIntervalReport;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instanceTimeIntervalReport: 'InstanceTimeIntervalReport',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instanceTimeIntervalReport: GetInstanceSummaryReportByIntervalResponseBodyInstanceTimeIntervalReport,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryReportByIntervalResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInstanceSummaryReportByIntervalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInstanceSummaryReportByIntervalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryReportSinceMidnightRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryReportSinceMidnightResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  instanceSummaryReport?: GetInstanceSummaryReportSinceMidnightResponseBodyInstanceSummaryReport;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instanceSummaryReport: 'InstanceSummaryReport',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instanceSummaryReport: GetInstanceSummaryReportSinceMidnightResponseBodyInstanceSummaryReport,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryReportSinceMidnightResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInstanceSummaryReportSinceMidnightResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInstanceSummaryReportSinceMidnightResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobRequest extends $tea.Model {
  instanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  job?: GetJobResponseBodyJob;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      job: 'Job',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      job: GetJobResponseBodyJob,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobDataUploadParamsRequest extends $tea.Model {
  fileName?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobDataUploadParamsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  uploadParams?: GetJobDataUploadParamsResponseBodyUploadParams;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      uploadParams: 'UploadParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      uploadParams: GetJobDataUploadParamsResponseBodyUploadParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobDataUploadParamsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetJobDataUploadParamsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetJobDataUploadParamsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobFileUploadUrlRequest extends $tea.Model {
  fileName?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobFileUploadUrlResponseBody extends $tea.Model {
  code?: string;
  filePath?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  uploadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      filePath: 'FilePath',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      uploadUrl: 'UploadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      filePath: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      uploadUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobFileUploadUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetJobFileUploadUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetJobFileUploadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobGroupRequest extends $tea.Model {
  instanceId?: string;
  jobGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobGroupResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  jobGroup?: GetJobGroupResponseBodyJobGroup;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      jobGroup: 'JobGroup',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      jobGroup: GetJobGroupResponseBodyJobGroup,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetJobGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetJobGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobListRequest extends $tea.Model {
  instanceId?: string;
  jobGroupId?: string;
  pageNumber?: number;
  pageSize?: number;
  queryAll?: boolean;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryAll: 'QueryAll',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobGroupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryAll: 'boolean',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobListResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  jobs?: GetJobListResponseBodyJobs;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      jobs: 'Jobs',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      jobs: GetJobListResponseBodyJobs,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetJobListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetJobListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusByCallIdRequest extends $tea.Model {
  callId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusByCallIdResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  job?: GetJobStatusByCallIdResponseBodyJob;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      job: 'Job',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      job: GetJobStatusByCallIdResponseBodyJob,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusByCallIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetJobStatusByCallIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetJobStatusByCallIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobTemplateDownloadParamsRequest extends $tea.Model {
  instanceId?: string;
  scenarioId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scenarioId: 'ScenarioId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scenarioId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobTemplateDownloadParamsResponseBody extends $tea.Model {
  code?: string;
  downloadParams?: GetJobTemplateDownloadParamsResponseBodyDownloadParams;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      downloadParams: 'DownloadParams',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      downloadParams: GetJobTemplateDownloadParamsResponseBodyDownloadParams,
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

export class GetJobTemplateDownloadParamsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetJobTemplateDownloadParamsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetJobTemplateDownloadParamsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNumberRegionInfoRequest extends $tea.Model {
  instanceId?: string;
  number?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      number: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNumberRegionInfoResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  phoneNumber?: GetNumberRegionInfoResponseBodyPhoneNumber;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      phoneNumber: 'PhoneNumber',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      phoneNumber: GetNumberRegionInfoResponseBodyPhoneNumber,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNumberRegionInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetNumberRegionInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetNumberRegionInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPredictiveJobGroupRequest extends $tea.Model {
  instanceId?: string;
  jobGroupId?: string;
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobGroupId: 'string',
      skillGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPredictiveJobGroupResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  jobGroup?: GetPredictiveJobGroupResponseBodyJobGroup;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      jobGroup: 'JobGroup',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      jobGroup: GetPredictiveJobGroupResponseBodyJobGroup,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPredictiveJobGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPredictiveJobGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPredictiveJobGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPredictiveTaskDataRequest extends $tea.Model {
  instanceId?: string;
  skillGroupId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPredictiveTaskDataResponseBody extends $tea.Model {
  code?: string;
  data?: GetPredictiveTaskDataResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: string;
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
      data: GetPredictiveTaskDataResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPredictiveTaskDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPredictiveTaskDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPredictiveTaskDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordOssUploadParamRequest extends $tea.Model {
  fileName?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordOssUploadParamResponseBody extends $tea.Model {
  code?: string;
  dir?: string;
  expires?: string;
  host?: string;
  httpStatusCode?: number;
  message?: string;
  ossAccessKeyId?: string;
  ossFileName?: string;
  policy?: string;
  requestId?: string;
  signature?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dir: 'Dir',
      expires: 'Expires',
      host: 'Host',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      ossAccessKeyId: 'OssAccessKeyId',
      ossFileName: 'OssFileName',
      policy: 'Policy',
      requestId: 'RequestId',
      signature: 'Signature',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dir: 'string',
      expires: 'string',
      host: 'string',
      httpStatusCode: 'number',
      message: 'string',
      ossAccessKeyId: 'string',
      ossFileName: 'string',
      policy: 'string',
      requestId: 'string',
      signature: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordOssUploadParamResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRecordOssUploadParamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRecordOssUploadParamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoutePointRequest extends $tea.Model {
  contactFlowId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      contactFlowId: 'ContactFlowId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoutePointResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  routePoint?: string;
  statusCode?: string;
  statusDesc?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      routePoint: 'RoutePoint',
      statusCode: 'StatusCode',
      statusDesc: 'StatusDesc',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      routePoint: 'string',
      statusCode: 'string',
      statusDesc: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoutePointResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRoutePointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRoutePointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenarioRequest extends $tea.Model {
  instanceId?: string;
  scenarioId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scenarioId: 'ScenarioId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scenarioId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenarioResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  scenario?: GetScenarioResponseBodyScenario;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      scenario: 'Scenario',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      scenario: GetScenarioResponseBodyScenario,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenarioResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetScenarioResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetScenarioResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceExtensionsRequest extends $tea.Model {
  instanceId?: string;
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      serviceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceExtensionsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  serviceExtensions?: GetServiceExtensionsResponseBodyServiceExtensions;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      serviceExtensions: 'ServiceExtensions',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      serviceExtensions: GetServiceExtensionsResponseBodyServiceExtensions,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceExtensionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetServiceExtensionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetServiceExtensionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsConfigRequest extends $tea.Model {
  instanceId?: string;
  scenario?: number[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scenario: 'Scenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scenario: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsConfigResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  smsConfigs?: GetSmsConfigResponseBodySmsConfigs;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      smsConfigs: 'SmsConfigs',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      smsConfigs: GetSmsConfigResponseBodySmsConfigs,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSmsConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSmsConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSurveyRequest extends $tea.Model {
  instanceId?: string;
  scenarioId?: string;
  surveyId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scenarioId: 'ScenarioId',
      surveyId: 'SurveyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scenarioId: 'string',
      surveyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSurveyResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  survey?: GetSurveyResponseBodySurvey;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      survey: 'Survey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      survey: GetSurveyResponseBodySurvey,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSurveyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSurveyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSurveyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTURNCredentialsRequest extends $tea.Model {
  instanceId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTURNCredentialsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  password?: string;
  requestId?: string;
  success?: boolean;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      password: 'Password',
      requestId: 'RequestId',
      success: 'Success',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      password: 'string',
      requestId: 'string',
      success: 'boolean',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTURNCredentialsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTURNCredentialsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTURNCredentialsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTURNServerListRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTURNServerListResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  turnServerListConfig?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      turnServerListConfig: 'TurnServerListConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      turnServerListConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTURNServerListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTURNServerListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTURNServerListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskListRequest extends $tea.Model {
  instanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskListResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  tasks?: GetTaskListResponseBodyTasks[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      tasks: { 'type': 'array', 'itemType': GetTaskListResponseBodyTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTaskListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTaskListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  user?: GetUserResponseBodyUser;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      user: GetUserResponseBodyUser,
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

export class GetUserByExtensionRequest extends $tea.Model {
  extension?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByExtensionResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  user?: GetUserByExtensionResponseBodyUser;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      user: GetUserByExtensionResponseBodyUser,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByExtensionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetUserByExtensionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUserByExtensionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InflightTaskTimeoutRequest extends $tea.Model {
  instanceId?: string;
  instanceOwnerId?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceOwnerId: 'InstanceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceOwnerId: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InflightTaskTimeoutResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class InflightTaskTimeoutResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InflightTaskTimeoutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InflightTaskTimeoutResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchAppraiseRequest extends $tea.Model {
  acid?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchAppraiseResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class LaunchAppraiseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: LaunchAppraiseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: LaunchAppraiseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchShortMessageAppraiseRequest extends $tea.Model {
  acid?: string;
  contactType?: number;
  instanceId?: string;
  phoneNumbers?: string;
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      contactType: 'ContactType',
      instanceId: 'InstanceId',
      phoneNumbers: 'PhoneNumbers',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      contactType: 'number',
      instanceId: 'string',
      phoneNumbers: 'string',
      skillGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchShortMessageAppraiseResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class LaunchShortMessageAppraiseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: LaunchShortMessageAppraiseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: LaunchShortMessageAppraiseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentDevicesRequest extends $tea.Model {
  instanceId?: string;
  ramIds?: string;
  startTime?: number;
  stopTime?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ramIds: 'RamIds',
      startTime: 'StartTime',
      stopTime: 'StopTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ramIds: 'string',
      startTime: 'number',
      stopTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentDevicesResponseBody extends $tea.Model {
  agentDeviceList?: ListAgentDevicesResponseBodyAgentDeviceList;
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      agentDeviceList: 'AgentDeviceList',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentDeviceList: ListAgentDevicesResponseBodyAgentDeviceList,
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

export class ListAgentDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAgentDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAgentDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentEventsRequest extends $tea.Model {
  event?: string[];
  instanceId?: string;
  ramId?: string[];
  startTime?: number;
  stopTime?: number;
  static names(): { [key: string]: string } {
    return {
      event: 'Event',
      instanceId: 'InstanceId',
      ramId: 'RamId',
      startTime: 'StartTime',
      stopTime: 'StopTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      ramId: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
      stopTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentEventsResponseBody extends $tea.Model {
  agentEventList?: ListAgentEventsResponseBodyAgentEventList;
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      agentEventList: 'AgentEventList',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentEventList: ListAgentEventsResponseBodyAgentEventList,
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

export class ListAgentEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAgentEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAgentEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentStateLogsRequest extends $tea.Model {
  endTime?: number;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  ramId?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ramId: 'RamId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      ramId: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentStateLogsResponseBody extends $tea.Model {
  agentStateLogPage?: ListAgentStateLogsResponseBodyAgentStateLogPage;
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      agentStateLogPage: 'AgentStateLogPage',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStateLogPage: ListAgentStateLogsResponseBodyAgentStateLogPage,
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

export class ListAgentStateLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAgentStateLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAgentStateLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentStatesRequest extends $tea.Model {
  agentIds?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  skillGroupId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      skillGroupId: 'SkillGroupId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      skillGroupId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentStatesResponseBody extends $tea.Model {
  code?: string;
  data?: ListAgentStatesResponseBodyData;
  httpStatusCode?: number;
  message?: string;
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
      data: ListAgentStatesResponseBodyData,
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

export class ListAgentStatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAgentStatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAgentStatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsRequest extends $tea.Model {
  agentIds?: string;
  endTime?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  skillGroupId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      skillGroupId: 'SkillGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: 'string',
      endTime: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      skillGroupId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  pagedAgentSummaryReport?: ListAgentSummaryReportsResponseBodyPagedAgentSummaryReport;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pagedAgentSummaryReport: 'PagedAgentSummaryReport',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pagedAgentSummaryReport: ListAgentSummaryReportsResponseBodyPagedAgentSummaryReport,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAgentSummaryReportsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAgentSummaryReportsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsByIntervalRequest extends $tea.Model {
  agentIds?: string;
  endTime?: string;
  instanceId?: string;
  interval?: string;
  pageNumber?: number;
  pageSize?: number;
  skillGroupId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      interval: 'Interval',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      skillGroupId: 'SkillGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: 'string',
      endTime: 'string',
      instanceId: 'string',
      interval: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      skillGroupId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsByIntervalResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  pagedAgentSummaryReport?: ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReport;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pagedAgentSummaryReport: 'PagedAgentSummaryReport',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pagedAgentSummaryReport: ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReport,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsByIntervalResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAgentSummaryReportsByIntervalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAgentSummaryReportsByIntervalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsSinceMidnightRequest extends $tea.Model {
  agentIds?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      skillGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsSinceMidnightResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  pagedAgentSummaryReport?: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReport;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pagedAgentSummaryReport: 'PagedAgentSummaryReport',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pagedAgentSummaryReport: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReport,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsSinceMidnightResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAgentSummaryReportsSinceMidnightResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAgentSummaryReportsSinceMidnightResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBasicStatisticsReportSubItemsRequest extends $tea.Model {
  instanceId?: string;
  jobGroupId?: string;
  pageNumber?: number;
  pageSize?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobGroupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBasicStatisticsReportSubItemsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  subItems?: ListBasicStatisticsReportSubItemsResponseBodySubItems;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      subItems: 'SubItems',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      subItems: ListBasicStatisticsReportSubItemsResponseBodySubItems,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBasicStatisticsReportSubItemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListBasicStatisticsReportSubItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListBasicStatisticsReportSubItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallDetailRecordsRequest extends $tea.Model {
  contactDisposition?: string;
  contactId?: string;
  contactType?: string;
  criteria?: string;
  instanceId?: string;
  orderBy?: string;
  pageNumber?: number;
  pageSize?: number;
  phoneNumber?: string;
  startTime?: number;
  stopTime?: number;
  withRecording?: boolean;
  static names(): { [key: string]: string } {
    return {
      contactDisposition: 'ContactDisposition',
      contactId: 'ContactId',
      contactType: 'ContactType',
      criteria: 'Criteria',
      instanceId: 'InstanceId',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      phoneNumber: 'PhoneNumber',
      startTime: 'StartTime',
      stopTime: 'StopTime',
      withRecording: 'WithRecording',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactDisposition: 'string',
      contactId: 'string',
      contactType: 'string',
      criteria: 'string',
      instanceId: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      phoneNumber: 'string',
      startTime: 'number',
      stopTime: 'number',
      withRecording: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallDetailRecordsResponseBody extends $tea.Model {
  callDetailRecords?: ListCallDetailRecordsResponseBodyCallDetailRecords;
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      callDetailRecords: 'CallDetailRecords',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callDetailRecords: ListCallDetailRecordsResponseBodyCallDetailRecords,
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

export class ListCallDetailRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCallDetailRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCallDetailRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallEventDetailByContactIdRequest extends $tea.Model {
  contactId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallEventDetailByContactIdResponseBody extends $tea.Model {
  code?: string;
  data?: ListCallEventDetailByContactIdResponseBodyData;
  httpStatusCode?: number;
  message?: string;
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
      data: ListCallEventDetailByContactIdResponseBodyData,
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

export class ListCallEventDetailByContactIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCallEventDetailByContactIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCallEventDetailByContactIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallMeasureSummaryReportsRequest extends $tea.Model {
  intervalType?: string;
  static names(): { [key: string]: string } {
    return {
      intervalType: 'IntervalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intervalType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallMeasureSummaryReportsResponseBody extends $tea.Model {
  callMeasureSummaryReportList?: ListCallMeasureSummaryReportsResponseBodyCallMeasureSummaryReportList;
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      callMeasureSummaryReportList: 'CallMeasureSummaryReportList',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callMeasureSummaryReportList: ListCallMeasureSummaryReportsResponseBodyCallMeasureSummaryReportList,
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

export class ListCallMeasureSummaryReportsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCallMeasureSummaryReportsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCallMeasureSummaryReportsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRequest extends $tea.Model {
  configItem?: string[];
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      configItem: 'ConfigItem',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configItem: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigResponseBody extends $tea.Model {
  code?: string;
  configItems?: ListConfigResponseBodyConfigItems;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      configItems: 'ConfigItems',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      configItems: ListConfigResponseBodyConfigItems,
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

export class ListConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactFlowsRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactFlowsResponseBody extends $tea.Model {
  code?: string;
  contactFlows?: ListContactFlowsResponseBodyContactFlows;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contactFlows: 'ContactFlows',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contactFlows: ListContactFlowsResponseBodyContactFlows,
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

export class ListContactFlowsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListContactFlowsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListContactFlowsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesOfUserResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  instances?: ListInstancesOfUserResponseBodyInstances;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instances: 'Instances',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instances: ListInstancesOfUserResponseBodyInstances,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesOfUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInstancesOfUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInstancesOfUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIvrTrackingDetailRequest extends $tea.Model {
  calledNumber?: string;
  callingNumber?: string;
  contactId?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  startTime?: number;
  stopTime?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      contactId: 'ContactId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      stopTime: 'StopTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      callingNumber: 'string',
      contactId: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
      stopTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIvrTrackingDetailResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  ivrTrackingDetails?: ListIvrTrackingDetailResponseBodyIvrTrackingDetails;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      ivrTrackingDetails: 'IvrTrackingDetails',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      ivrTrackingDetails: ListIvrTrackingDetailResponseBodyIvrTrackingDetails,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIvrTrackingDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListIvrTrackingDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListIvrTrackingDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobGroupsRequest extends $tea.Model {
  endTime?: number;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobGroupsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  jobGroups?: ListJobGroupsResponseBodyJobGroups;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      jobGroups: 'JobGroups',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      jobGroups: ListJobGroupsResponseBodyJobGroups,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListJobGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListJobGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobStatusRequest extends $tea.Model {
  contactName?: string;
  endTime?: number;
  groupId?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  phoneNumber?: string;
  scenarioId?: string;
  startTime?: number;
  timeAlignment?: string;
  static names(): { [key: string]: string } {
    return {
      contactName: 'ContactName',
      endTime: 'EndTime',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      phoneNumber: 'PhoneNumber',
      scenarioId: 'ScenarioId',
      startTime: 'StartTime',
      timeAlignment: 'TimeAlignment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactName: 'string',
      endTime: 'number',
      groupId: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      phoneNumber: 'string',
      scenarioId: 'string',
      startTime: 'number',
      timeAlignment: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobStatusResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  jobs?: ListJobStatusResponseBodyJobs;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      jobs: 'Jobs',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      jobs: ListJobStatusResponseBodyJobs,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListJobStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListJobStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsByGroupRequest extends $tea.Model {
  instanceId?: string;
  jobFailureReason?: string;
  jobGroupId?: string;
  jobStatus?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobFailureReason: 'JobFailureReason',
      jobGroupId: 'JobGroupId',
      jobStatus: 'JobStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobFailureReason: 'string',
      jobGroupId: 'string',
      jobStatus: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsByGroupResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  jobs?: ListJobsByGroupResponseBodyJobs;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      jobs: 'Jobs',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      jobs: ListJobsByGroupResponseBodyJobs,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsByGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListJobsByGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListJobsByGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediasRequest extends $tea.Model {
  instanceId?: string;
  namePrefix?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namePrefix: 'NamePrefix',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namePrefix: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediasResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  medias?: ListMediasResponseBodyMedias;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      medias: 'Medias',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      medias: ListMediasResponseBodyMedias,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediasResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListMediasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListMediasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundPhoneNumberOfUserRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundPhoneNumberOfUserResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  numberList?: ListOutboundPhoneNumberOfUserResponseBodyNumberList;
  outboundPhoneNumbers?: ListOutboundPhoneNumberOfUserResponseBodyOutboundPhoneNumbers;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      numberList: 'NumberList',
      outboundPhoneNumbers: 'OutboundPhoneNumbers',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      numberList: ListOutboundPhoneNumberOfUserResponseBodyNumberList,
      outboundPhoneNumbers: ListOutboundPhoneNumberOfUserResponseBodyOutboundPhoneNumbers,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundPhoneNumberOfUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOutboundPhoneNumberOfUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOutboundPhoneNumberOfUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneNumbersRequest extends $tea.Model {
  instanceId?: string;
  outboundOnly?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      outboundOnly: 'OutboundOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      outboundOnly: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneNumbersResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  phoneNumbers?: ListPhoneNumbersResponseBodyPhoneNumbers;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      phoneNumbers: 'PhoneNumbers',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      phoneNumbers: ListPhoneNumbersResponseBodyPhoneNumbers,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneNumbersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPhoneNumbersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPhoneNumbersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneTagsRequest extends $tea.Model {
  currentPage?: number;
  instanceId?: string;
  number?: string;
  numberGroupIds?: string[];
  outboundOnly?: boolean;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      number: 'Number',
      numberGroupIds: 'NumberGroupIds',
      outboundOnly: 'OutboundOnly',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      instanceId: 'string',
      number: 'string',
      numberGroupIds: { 'type': 'array', 'itemType': 'string' },
      outboundOnly: 'boolean',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneTagsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  phoneNumbers?: ListPhoneTagsResponseBodyPhoneNumbers;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      phoneNumbers: 'PhoneNumbers',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      phoneNumbers: ListPhoneTagsResponseBodyPhoneNumbers,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPhoneTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPhoneTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealTimeAgentRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealTimeAgentResponseBody extends $tea.Model {
  code?: string;
  data?: ListRealTimeAgentResponseBodyData;
  httpStatusCode?: number;
  message?: string;
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
      data: ListRealTimeAgentResponseBodyData,
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

export class ListRealTimeAgentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRealTimeAgentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRealTimeAgentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentCallRecordsRequest extends $tea.Model {
  criteria?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  startTime?: number;
  stopTime?: number;
  static names(): { [key: string]: string } {
    return {
      criteria: 'Criteria',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      stopTime: 'StopTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteria: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
      stopTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentCallRecordsResponseBody extends $tea.Model {
  callDetailRecords?: ListRecentCallRecordsResponseBodyCallDetailRecords;
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      callDetailRecords: 'CallDetailRecords',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callDetailRecords: ListRecentCallRecordsResponseBodyCallDetailRecords,
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

export class ListRecentCallRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRecentCallRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRecentCallRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordingOfDualTrackRequest extends $tea.Model {
  agentId?: string;
  calledNumber?: string;
  callingNumber?: string;
  connectId?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  startTime?: number;
  stopTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      connectId: 'ConnectId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      stopTime: 'StopTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      calledNumber: 'string',
      callingNumber: 'string',
      connectId: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
      stopTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordingOfDualTrackResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  recordings?: ListRecordingOfDualTrackResponseBodyRecordings;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      recordings: 'Recordings',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      recordings: ListRecordingOfDualTrackResponseBodyRecordings,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordingOfDualTrackResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRecordingOfDualTrackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRecordingOfDualTrackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordingsRequest extends $tea.Model {
  agentId?: string;
  criteria?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  phoneNumber?: string;
  startTime?: number;
  stopTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      criteria: 'Criteria',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      phoneNumber: 'PhoneNumber',
      startTime: 'StartTime',
      stopTime: 'StopTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      criteria: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      phoneNumber: 'string',
      startTime: 'number',
      stopTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordingsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  recordings?: ListRecordingsResponseBodyRecordings;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      recordings: 'Recordings',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      recordings: ListRecordingsResponseBodyRecordings,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRecordingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRecordingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordingsByContactIdRequest extends $tea.Model {
  contactId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordingsByContactIdResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  recordings?: ListRecordingsByContactIdResponseBodyRecordings;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      recordings: 'Recordings',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      recordings: ListRecordingsByContactIdResponseBodyRecordings,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordingsByContactIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRecordingsByContactIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRecordingsByContactIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  roles?: ListRolesResponseBodyRoles;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      roles: 'Roles',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      roles: ListRolesResponseBodyRoles,
      success: 'boolean',
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

export class ListScenarioTemplatesResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  scenarioTemplates?: ListScenarioTemplatesResponseBodyScenarioTemplates[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      scenarioTemplates: 'ScenarioTemplates',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      scenarioTemplates: { 'type': 'array', 'itemType': ListScenarioTemplatesResponseBodyScenarioTemplates },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenarioTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListScenarioTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListScenarioTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenariosRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenariosResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  scenarios?: ListScenariosResponseBodyScenarios[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      scenarios: 'Scenarios',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      scenarios: { 'type': 'array', 'itemType': ListScenariosResponseBodyScenarios },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenariosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListScenariosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListScenariosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupStatesRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  skillGroupIds?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      skillGroupIds: 'SkillGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      skillGroupIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupStatesResponseBody extends $tea.Model {
  code?: string;
  data?: ListSkillGroupStatesResponseBodyData;
  httpStatusCode?: number;
  message?: string;
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
      data: ListSkillGroupStatesResponseBodyData,
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

export class ListSkillGroupStatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSkillGroupStatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSkillGroupStatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsRequest extends $tea.Model {
  endTime?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  skillGroupIds?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      skillGroupIds: 'SkillGroupIds',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      skillGroupIds: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  pagedSkillGroupSummaryReport?: ListSkillGroupSummaryReportsResponseBodyPagedSkillGroupSummaryReport;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pagedSkillGroupSummaryReport: 'PagedSkillGroupSummaryReport',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pagedSkillGroupSummaryReport: ListSkillGroupSummaryReportsResponseBodyPagedSkillGroupSummaryReport,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSkillGroupSummaryReportsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSkillGroupSummaryReportsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsByIntervalRequest extends $tea.Model {
  endTime?: string;
  instanceId?: string;
  interval?: string;
  pageNumber?: number;
  pageSize?: number;
  skillGroupIds?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      interval: 'Interval',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      skillGroupIds: 'SkillGroupIds',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      interval: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      skillGroupIds: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsByIntervalResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  pagedSkillGroupSummaryReport?: ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReport;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pagedSkillGroupSummaryReport: 'PagedSkillGroupSummaryReport',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pagedSkillGroupSummaryReport: ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReport,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsByIntervalResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSkillGroupSummaryReportsByIntervalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSkillGroupSummaryReportsByIntervalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsSinceMidnightRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  skillGroups?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      skillGroups: 'SkillGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      skillGroups: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsSinceMidnightResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  pagedSkillGroupSummaryReport?: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReport;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pagedSkillGroupSummaryReport: 'PagedSkillGroupSummaryReport',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pagedSkillGroupSummaryReport: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReport,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsSinceMidnightResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSkillGroupSummaryReportsSinceMidnightResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSkillGroupSummaryReportsSinceMidnightResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupsRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  skillGroups?: ListSkillGroupsResponseBodySkillGroups;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      skillGroups: 'SkillGroups',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      skillGroups: ListSkillGroupsResponseBodySkillGroups,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSkillGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSkillGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupsOfUserRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupsOfUserResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  skillLevels?: ListSkillGroupsOfUserResponseBodySkillLevels;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      skillLevels: 'SkillLevels',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      skillLevels: ListSkillGroupsOfUserResponseBodySkillLevels,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupsOfUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSkillGroupsOfUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSkillGroupsOfUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSurveysRequest extends $tea.Model {
  instanceId?: string;
  scenarioId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scenarioId: 'ScenarioId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scenarioId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSurveysResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  surveys?: ListSurveysResponseBodySurveys[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      surveys: 'Surveys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      surveys: { 'type': 'array', 'itemType': ListSurveysResponseBodySurveys },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSurveysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSurveysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSurveysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransferableSkillGroupsRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransferableSkillGroupsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  skillGroups?: ListTransferableSkillGroupsResponseBodySkillGroups[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      skillGroups: 'SkillGroups',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      skillGroups: { 'type': 'array', 'itemType': ListTransferableSkillGroupsResponseBodySkillGroups },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransferableSkillGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTransferableSkillGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTransferableSkillGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrunkProvidersResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  trunkProviders?: ListTrunkProvidersResponseBodyTrunkProviders[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      trunkProviders: 'TrunkProviders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      trunkProviders: { 'type': 'array', 'itemType': ListTrunkProvidersResponseBodyTrunkProviders },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrunkProvidersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTrunkProvidersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTrunkProvidersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrunksOfSkillGroupRequest extends $tea.Model {
  instanceId?: string;
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrunksOfSkillGroupResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  trunkConfigs?: ListTrunksOfSkillGroupResponseBodyTrunkConfigs[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      trunkConfigs: 'TrunkConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      trunkConfigs: { 'type': 'array', 'itemType': ListTrunksOfSkillGroupResponseBodyTrunkConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrunksOfSkillGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTrunksOfSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTrunksOfSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUnreachableContactsRequest extends $tea.Model {
  instanceId?: string;
  jobGroupId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobGroupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUnreachableContactsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  unreachableContacts?: ListUnreachableContactsResponseBodyUnreachableContacts;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      unreachableContacts: 'UnreachableContacts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      unreachableContacts: ListUnreachableContactsResponseBodyUnreachableContacts,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUnreachableContactsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUnreachableContactsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUnreachableContactsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  users?: ListUsersResponseBodyUsers;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      users: ListUsersResponseBodyUsers,
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

export class ListUsersOfSkillGroupRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      skillGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersOfSkillGroupResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  users?: ListUsersOfSkillGroupResponseBodyUsers;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      users: ListUsersOfSkillGroupResponseBodyUsers,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersOfSkillGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUsersOfSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUsersOfSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceAppraiseRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceAppraiseResponseBody extends $tea.Model {
  code?: string;
  contactFlow?: ListVoiceAppraiseResponseBodyContactFlow;
  httpStatusCode?: number;
  message?: string;
  notice?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contactFlow: 'ContactFlow',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      notice: 'Notice',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contactFlow: ListVoiceAppraiseResponseBodyContactFlow,
      httpStatusCode: 'number',
      message: 'string',
      notice: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceAppraiseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVoiceAppraiseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVoiceAppraiseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAgentDeviceRequest extends $tea.Model {
  agentDeviceId?: number;
  instanceId?: string;
  isLogin?: number;
  static names(): { [key: string]: string } {
    return {
      agentDeviceId: 'AgentDeviceId',
      instanceId: 'InstanceId',
      isLogin: 'IsLogin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentDeviceId: 'number',
      instanceId: 'string',
      isLogin: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAgentDeviceResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class ModifyAgentDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyAgentDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyAgentDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCabInstanceRequest extends $tea.Model {
  callCenterInstanceId?: string;
  instanceDescription?: string;
  instanceId?: string;
  instanceName?: string;
  maxConcurrentConversation?: number;
  static names(): { [key: string]: string } {
    return {
      callCenterInstanceId: 'CallCenterInstanceId',
      instanceDescription: 'InstanceDescription',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      maxConcurrentConversation: 'MaxConcurrentConversation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callCenterInstanceId: 'string',
      instanceDescription: 'string',
      instanceId: 'string',
      instanceName: 'string',
      maxConcurrentConversation: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCabInstanceResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  instance?: ModifyCabInstanceResponseBodyInstance;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instance: 'Instance',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instance: ModifyCabInstanceResponseBodyInstance,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCabInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyCabInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyCabInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCallRatioRequest extends $tea.Model {
  instanceId?: string;
  jobGroupId?: string;
  ratio?: number;
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      ratio: 'Ratio',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobGroupId: 'string',
      ratio: 'number',
      skillGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCallRatioResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class ModifyCallRatioResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyCallRatioResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyCallRatioResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPhoneNumberRequest extends $tea.Model {
  contactFlowId?: string;
  instanceId?: string;
  phoneNumberId?: string;
  skillGroupId?: string[];
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      contactFlowId: 'ContactFlowId',
      instanceId: 'InstanceId',
      phoneNumberId: 'PhoneNumberId',
      skillGroupId: 'SkillGroupId',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowId: 'string',
      instanceId: 'string',
      phoneNumberId: 'string',
      skillGroupId: { 'type': 'array', 'itemType': 'string' },
      usage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPhoneNumberResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  phoneNumber?: ModifyPhoneNumberResponseBodyPhoneNumber;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      phoneNumber: 'PhoneNumber',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      phoneNumber: ModifyPhoneNumberResponseBodyPhoneNumber,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPhoneNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyPhoneNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyPhoneNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPhoneTagsRequest extends $tea.Model {
  instanceId?: string;
  serviceTag?: string;
  skillGroupIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      serviceTag: 'ServiceTag',
      skillGroupIdList: 'SkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      serviceTag: 'string',
      skillGroupIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPhoneTagsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class ModifyPhoneTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyPhoneTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyPhoneTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrimaryTrunksOfSkillGroupRequest extends $tea.Model {
  instanceId?: string;
  primaryProviderName?: string[];
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      primaryProviderName: 'PrimaryProviderName',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      primaryProviderName: { 'type': 'array', 'itemType': 'string' },
      skillGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrimaryTrunksOfSkillGroupResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class ModifyPrimaryTrunksOfSkillGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyPrimaryTrunksOfSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyPrimaryTrunksOfSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrivacyNumberCallDetailRequest extends $tea.Model {
  callId?: string;
  contactId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      contactId: 'ContactId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      contactId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrivacyNumberCallDetailResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class ModifyPrivacyNumberCallDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyPrivacyNumberCallDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyPrivacyNumberCallDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScenarioRequest extends $tea.Model {
  description?: string;
  instanceId?: string;
  name?: string;
  scenarioId?: string;
  variables?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      scenarioId: 'ScenarioId',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      name: 'string',
      scenarioId: 'string',
      variables: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScenarioResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  scenario?: ModifyScenarioResponseBodyScenario;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      scenario: 'Scenario',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      scenario: ModifyScenarioResponseBodyScenario,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScenarioResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyScenarioResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyScenarioResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySkillGroupRequest extends $tea.Model {
  allowPrivateOutboundNumber?: boolean;
  description?: string;
  instanceId?: string;
  name?: string;
  outboundPhoneNumberId?: string[];
  routingStrategy?: string;
  skillGroupId?: string;
  skillLevel?: number[];
  userId?: string[];
  static names(): { [key: string]: string } {
    return {
      allowPrivateOutboundNumber: 'AllowPrivateOutboundNumber',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      outboundPhoneNumberId: 'OutboundPhoneNumberId',
      routingStrategy: 'RoutingStrategy',
      skillGroupId: 'SkillGroupId',
      skillLevel: 'SkillLevel',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowPrivateOutboundNumber: 'boolean',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      outboundPhoneNumberId: { 'type': 'array', 'itemType': 'string' },
      routingStrategy: 'string',
      skillGroupId: 'string',
      skillLevel: { 'type': 'array', 'itemType': 'number' },
      userId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySkillGroupResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class ModifySkillGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySkillGroupOfUserRequest extends $tea.Model {
  instanceId?: string;
  roleId?: string[];
  skillGroupId?: string[];
  skillLevel?: number[];
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      roleId: 'RoleId',
      skillGroupId: 'SkillGroupId',
      skillLevel: 'SkillLevel',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      roleId: { 'type': 'array', 'itemType': 'string' },
      skillGroupId: { 'type': 'array', 'itemType': 'string' },
      skillLevel: { 'type': 'array', 'itemType': 'number' },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySkillGroupOfUserResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class ModifySkillGroupOfUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySkillGroupOfUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySkillGroupOfUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySkillGroupOutboundNumbersRequest extends $tea.Model {
  instanceId?: string;
  operationType?: number;
  outboundPhoneNumberId?: string[];
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      operationType: 'OperationType',
      outboundPhoneNumberId: 'OutboundPhoneNumberId',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      operationType: 'number',
      outboundPhoneNumberId: { 'type': 'array', 'itemType': 'string' },
      skillGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySkillGroupOutboundNumbersResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class ModifySkillGroupOutboundNumbersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySkillGroupOutboundNumbersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySkillGroupOutboundNumbersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySurveyRequest extends $tea.Model {
  corpora?: string;
  description?: string;
  flowId?: string;
  flowJson?: string;
  globalQuestions?: string;
  instanceId?: string;
  name?: string;
  role?: string;
  round?: number;
  scenarioId?: string;
  speechOptimizationParam?: string;
  surveyId?: string;
  static names(): { [key: string]: string } {
    return {
      corpora: 'Corpora',
      description: 'Description',
      flowId: 'FlowId',
      flowJson: 'FlowJson',
      globalQuestions: 'GlobalQuestions',
      instanceId: 'InstanceId',
      name: 'Name',
      role: 'Role',
      round: 'Round',
      scenarioId: 'ScenarioId',
      speechOptimizationParam: 'SpeechOptimizationParam',
      surveyId: 'SurveyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpora: 'string',
      description: 'string',
      flowId: 'string',
      flowJson: 'string',
      globalQuestions: 'string',
      instanceId: 'string',
      name: 'string',
      role: 'string',
      round: 'number',
      scenarioId: 'string',
      speechOptimizationParam: 'string',
      surveyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySurveyResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  survey?: ModifySurveyResponseBodySurvey;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      survey: 'Survey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      survey: ModifySurveyResponseBodySurvey,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySurveyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySurveyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySurveyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserRequest extends $tea.Model {
  displayName?: string;
  email?: string;
  instanceId?: string;
  phone?: string;
  privateOutboundNumberId?: string;
  roleId?: string[];
  skillGroupId?: string[];
  skillLevel?: number[];
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      email: 'Email',
      instanceId: 'InstanceId',
      phone: 'Phone',
      privateOutboundNumberId: 'PrivateOutboundNumberId',
      roleId: 'RoleId',
      skillGroupId: 'SkillGroupId',
      skillLevel: 'SkillLevel',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      email: 'string',
      instanceId: 'string',
      phone: 'string',
      privateOutboundNumberId: 'string',
      roleId: { 'type': 'array', 'itemType': 'string' },
      skillGroupId: { 'type': 'array', 'itemType': 'string' },
      skillLevel: { 'type': 'array', 'itemType': 'number' },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class ModifyUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickGlobalOutboundNumbersRequest extends $tea.Model {
  calleeNumber?: string;
  count?: number;
  instanceId?: string;
  isVirtual?: boolean;
  skillGroupId?: string[];
  static names(): { [key: string]: string } {
    return {
      calleeNumber: 'CalleeNumber',
      count: 'Count',
      instanceId: 'InstanceId',
      isVirtual: 'IsVirtual',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calleeNumber: 'string',
      count: 'number',
      instanceId: 'string',
      isVirtual: 'boolean',
      skillGroupId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickGlobalOutboundNumbersResponseBody extends $tea.Model {
  code?: string;
  dialNumberPairs?: PickGlobalOutboundNumbersResponseBodyDialNumberPairs;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dialNumberPairs: 'DialNumberPairs',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dialNumberPairs: PickGlobalOutboundNumbersResponseBodyDialNumberPairs,
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

export class PickGlobalOutboundNumbersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PickGlobalOutboundNumbersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PickGlobalOutboundNumbersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickLocalNumberRequest extends $tea.Model {
  calleeNumber?: string;
  candidateNumber?: string[];
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      calleeNumber: 'CalleeNumber',
      candidateNumber: 'CandidateNumber',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calleeNumber: 'string',
      candidateNumber: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickLocalNumberResponseBody extends $tea.Model {
  code?: string;
  data?: PickLocalNumberResponseBodyData;
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
      data: PickLocalNumberResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickLocalNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PickLocalNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PickLocalNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickOutboundNumbersRequest extends $tea.Model {
  calleeNumber?: string;
  candidateNumber?: string[];
  count?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      calleeNumber: 'CalleeNumber',
      candidateNumber: 'CandidateNumber',
      count: 'Count',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calleeNumber: 'string',
      candidateNumber: { 'type': 'array', 'itemType': 'string' },
      count: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickOutboundNumbersResponseBody extends $tea.Model {
  code?: string;
  dialNumberPairs?: PickOutboundNumbersResponseBodyDialNumberPairs;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dialNumberPairs: 'DialNumberPairs',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dialNumberPairs: PickOutboundNumbersResponseBodyDialNumberPairs,
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

export class PickOutboundNumbersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PickOutboundNumbersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PickOutboundNumbersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishContactFlowVersionRequest extends $tea.Model {
  contactFlowVersionId?: string;
  instanceId?: string;
  useTianGong?: boolean;
  static names(): { [key: string]: string } {
    return {
      contactFlowVersionId: 'ContactFlowVersionId',
      instanceId: 'InstanceId',
      useTianGong: 'UseTianGong',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowVersionId: 'string',
      instanceId: 'string',
      useTianGong: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishContactFlowVersionResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class PublishContactFlowVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PublishContactFlowVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PublishContactFlowVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishPredictiveJobGroupRequest extends $tea.Model {
  instanceId?: string;
  jobGroupId?: string;
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobGroupId: 'string',
      skillGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishPredictiveJobGroupResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class PublishPredictiveJobGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PublishPredictiveJobGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PublishPredictiveJobGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishSurveyRequest extends $tea.Model {
  instanceId?: string;
  scenarioId?: string;
  surveyId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scenarioId: 'ScenarioId',
      surveyId: 'SurveyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scenarioId: 'string',
      surveyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishSurveyResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class PublishSurveyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PublishSurveyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PublishSurveyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshTokenRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshTokenResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  token?: RefreshTokenResponseBodyToken;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      token: RefreshTokenResponseBodyToken,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RefreshTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RefreshTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemovePhoneNumberRequest extends $tea.Model {
  instanceId?: string;
  phoneNumberId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      phoneNumberId: 'PhoneNumberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      phoneNumberId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemovePhoneNumberResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class RemovePhoneNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemovePhoneNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemovePhoneNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersRequest extends $tea.Model {
  instanceId?: string;
  userId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class RemoveUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersFromSkillGroupRequest extends $tea.Model {
  instanceId?: string;
  skillGroupId?: string;
  userId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupId: 'string',
      userId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersFromSkillGroupResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class RemoveUsersFromSkillGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveUsersFromSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveUsersFromSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestLoginInfoRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestLoginInfoResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  loginInfo?: RequestLoginInfoResponseBodyLoginInfo;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      loginInfo: 'LoginInfo',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      loginInfo: RequestLoginInfoResponseBodyLoginInfo,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestLoginInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RequestLoginInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RequestLoginInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetUserStatusRequest extends $tea.Model {
  instanceId?: string;
  ramIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ramIdList: 'RamIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ramIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetUserStatusResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class ResetUserStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResetUserStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResetUserStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeJobsRequest extends $tea.Model {
  all?: boolean;
  groupId?: string;
  instanceId?: string;
  jobId?: string[];
  jobReferenceId?: string[];
  scenarioId?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      jobReferenceId: 'JobReferenceId',
      scenarioId: 'ScenarioId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      groupId: 'string',
      instanceId: 'string',
      jobId: { 'type': 'array', 'itemType': 'string' },
      jobReferenceId: { 'type': 'array', 'itemType': 'string' },
      scenarioId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeJobsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class ResumeJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResumeJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResumeJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumePredictiveJobsRequest extends $tea.Model {
  all?: boolean;
  instanceId?: string;
  jobGroupId?: string;
  jobId?: string[];
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      jobId: 'JobId',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      instanceId: 'string',
      jobGroupId: 'string',
      jobId: { 'type': 'array', 'itemType': 'string' },
      skillGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumePredictiveJobsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class ResumePredictiveJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResumePredictiveJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResumePredictiveJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveStatsRequest extends $tea.Model {
  callId?: string;
  callStartTime?: number;
  calleeNumber?: string;
  callerNumber?: string;
  instanceId?: string;
  recordTime?: number;
  stats?: string;
  tenantId?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      callStartTime: 'CallStartTime',
      calleeNumber: 'CalleeNumber',
      callerNumber: 'CallerNumber',
      instanceId: 'InstanceId',
      recordTime: 'RecordTime',
      stats: 'Stats',
      tenantId: 'TenantId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      callStartTime: 'number',
      calleeNumber: 'string',
      callerNumber: 'string',
      instanceId: 'string',
      recordTime: 'number',
      stats: 'string',
      tenantId: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveStatsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  rowCount?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      rowCount: 'RowCount',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      rowCount: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveStatsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SaveStatsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveStatsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTerminalLogRequest extends $tea.Model {
  appName?: string;
  callId?: string;
  content?: string;
  dataType?: number;
  instanceId?: string;
  jobId?: string;
  methodName?: string;
  status?: string;
  uniqueRequestId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      callId: 'CallId',
      content: 'Content',
      dataType: 'DataType',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      methodName: 'MethodName',
      status: 'Status',
      uniqueRequestId: 'UniqueRequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      callId: 'string',
      content: 'string',
      dataType: 'number',
      instanceId: 'string',
      jobId: 'string',
      methodName: 'string',
      status: 'string',
      uniqueRequestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTerminalLogResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  timeStamp?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      timeStamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTerminalLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SaveTerminalLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveTerminalLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveWebRTCStatsRequest extends $tea.Model {
  callId?: string;
  callStartTime?: number;
  calleeNumber?: string;
  callerNumber?: string;
  instanceId?: string;
  recordTime?: number;
  stats?: string;
  tenantId?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      callStartTime: 'CallStartTime',
      calleeNumber: 'CalleeNumber',
      callerNumber: 'CallerNumber',
      instanceId: 'InstanceId',
      recordTime: 'RecordTime',
      stats: 'Stats',
      tenantId: 'TenantId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      callStartTime: 'number',
      calleeNumber: 'string',
      callerNumber: 'string',
      instanceId: 'string',
      recordTime: 'number',
      stats: 'string',
      tenantId: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveWebRTCStatsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  rowCount?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      rowCount: 'RowCount',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      rowCount: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveWebRTCStatsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SaveWebRTCStatsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveWebRTCStatsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendPredefinedShortMessageRequest extends $tea.Model {
  configId?: number;
  instanceId?: string;
  phoneNumbers?: string;
  templateParam?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      instanceId: 'InstanceId',
      phoneNumbers: 'PhoneNumbers',
      templateParam: 'TemplateParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      instanceId: 'string',
      phoneNumbers: 'string',
      templateParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendPredefinedShortMessageResponseBody extends $tea.Model {
  bizId?: string;
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
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

export class SendPredefinedShortMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SendPredefinedShortMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SendPredefinedShortMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBack2BackCallRequest extends $tea.Model {
  callCenterNumber?: string;
  callee?: string;
  caller?: string;
  instanceId?: string;
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      callCenterNumber: 'CallCenterNumber',
      callee: 'Callee',
      caller: 'Caller',
      instanceId: 'InstanceId',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callCenterNumber: 'string',
      callee: 'string',
      caller: 'string',
      instanceId: 'string',
      workflowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBack2BackCallResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  statusCode?: string;
  statusDesc?: string;
  success?: boolean;
  taskId?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      statusCode: 'StatusCode',
      statusDesc: 'StatusDesc',
      success: 'Success',
      taskId: 'TaskId',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      statusCode: 'string',
      statusDesc: 'string',
      success: 'boolean',
      taskId: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBack2BackCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartBack2BackCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartBack2BackCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobRequest extends $tea.Model {
  callingNumber?: string[];
  groupId?: string;
  instanceId?: string;
  jobJson?: string;
  scenarioId?: string;
  selfHostedCallCenter?: boolean;
  static names(): { [key: string]: string } {
    return {
      callingNumber: 'CallingNumber',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      jobJson: 'JobJson',
      scenarioId: 'ScenarioId',
      selfHostedCallCenter: 'SelfHostedCallCenter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumber: { 'type': 'array', 'itemType': 'string' },
      groupId: 'string',
      instanceId: 'string',
      jobJson: 'string',
      scenarioId: 'string',
      selfHostedCallCenter: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskIds?: StartJobResponseBodyTaskIds[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskIds: { 'type': 'array', 'itemType': StartJobResponseBodyTaskIds },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitBatchJobsRequest extends $tea.Model {
  instanceId?: string;
  jobGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitBatchJobsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class SubmitBatchJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitBatchJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitBatchJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCabRecordingRequest extends $tea.Model {
  earlyMediaRecording?: string;
  instanceId?: string;
  instanceOwnerId?: number;
  mergedRecording?: string;
  resourceRecording?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      earlyMediaRecording: 'EarlyMediaRecording',
      instanceId: 'InstanceId',
      instanceOwnerId: 'InstanceOwnerId',
      mergedRecording: 'MergedRecording',
      resourceRecording: 'ResourceRecording',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      earlyMediaRecording: 'string',
      instanceId: 'string',
      instanceOwnerId: 'number',
      mergedRecording: 'string',
      resourceRecording: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCabRecordingResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class SubmitCabRecordingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitCabRecordingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitCabRecordingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendJobsRequest extends $tea.Model {
  all?: boolean;
  groupId?: string;
  instanceId?: string;
  jobId?: string[];
  jobReferenceId?: string[];
  scenarioId?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      jobReferenceId: 'JobReferenceId',
      scenarioId: 'ScenarioId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      groupId: 'string',
      instanceId: 'string',
      jobId: { 'type': 'array', 'itemType': 'string' },
      jobReferenceId: { 'type': 'array', 'itemType': 'string' },
      scenarioId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendJobsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class SuspendJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SuspendJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SuspendJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendPredictiveJobsRequest extends $tea.Model {
  all?: boolean;
  instanceId?: string;
  jobGroupId?: string;
  jobId?: string[];
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      jobId: 'JobId',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      instanceId: 'string',
      jobGroupId: 'string',
      jobId: { 'type': 'array', 'itemType': 'string' },
      skillGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendPredictiveJobsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

export class SuspendPredictiveJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SuspendPredictiveJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SuspendPredictiveJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskPreparingRequest extends $tea.Model {
  instanceId?: string;
  instanceOwnerId?: number;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceOwnerId: 'InstanceOwnerId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceOwnerId: 'number',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskPreparingResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskPreparingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TaskPreparingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TaskPreparingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBulkPhoneNumbersResponseBodyArrearagePhoneNumbers extends $tea.Model {
  arrearagePhoneNumber?: string[];
  static names(): { [key: string]: string } {
    return {
      arrearagePhoneNumber: 'ArrearagePhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrearagePhoneNumber: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBulkPhoneNumbersResponseBodyFailedPhoneNumbers extends $tea.Model {
  failedPhoneNumber?: string[];
  static names(): { [key: string]: string } {
    return {
      failedPhoneNumber: 'FailedPhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedPhoneNumber: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBulkPhoneNumbersResponseBodyPhoneNumbersPhoneNumberContactFlow extends $tea.Model {
  contactFlowDescription?: string;
  contactFlowId?: string;
  contactFlowName?: string;
  instanceId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      contactFlowDescription: 'ContactFlowDescription',
      contactFlowId: 'ContactFlowId',
      contactFlowName: 'ContactFlowName',
      instanceId: 'InstanceId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowDescription: 'string',
      contactFlowId: 'string',
      contactFlowName: 'string',
      instanceId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBulkPhoneNumbersResponseBodyPhoneNumbersPhoneNumberSkillGroupsSkillGroup extends $tea.Model {
  skillGroupId?: string;
  skillGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupId: 'string',
      skillGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBulkPhoneNumbersResponseBodyPhoneNumbersPhoneNumberSkillGroups extends $tea.Model {
  skillGroup?: AddBulkPhoneNumbersResponseBodyPhoneNumbersPhoneNumberSkillGroupsSkillGroup[];
  static names(): { [key: string]: string } {
    return {
      skillGroup: 'SkillGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroup: { 'type': 'array', 'itemType': AddBulkPhoneNumbersResponseBodyPhoneNumbersPhoneNumberSkillGroupsSkillGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBulkPhoneNumbersResponseBodyPhoneNumbersPhoneNumber extends $tea.Model {
  allowOutbound?: boolean;
  contactFlow?: AddBulkPhoneNumbersResponseBodyPhoneNumbersPhoneNumberContactFlow;
  instanceId?: string;
  number?: string;
  phoneNumberDescription?: string;
  phoneNumberId?: string;
  remainingTime?: number;
  skillGroups?: AddBulkPhoneNumbersResponseBodyPhoneNumbersPhoneNumberSkillGroups;
  testOnly?: boolean;
  trunks?: number;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      allowOutbound: 'AllowOutbound',
      contactFlow: 'ContactFlow',
      instanceId: 'InstanceId',
      number: 'Number',
      phoneNumberDescription: 'PhoneNumberDescription',
      phoneNumberId: 'PhoneNumberId',
      remainingTime: 'RemainingTime',
      skillGroups: 'SkillGroups',
      testOnly: 'TestOnly',
      trunks: 'Trunks',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowOutbound: 'boolean',
      contactFlow: AddBulkPhoneNumbersResponseBodyPhoneNumbersPhoneNumberContactFlow,
      instanceId: 'string',
      number: 'string',
      phoneNumberDescription: 'string',
      phoneNumberId: 'string',
      remainingTime: 'number',
      skillGroups: AddBulkPhoneNumbersResponseBodyPhoneNumbersPhoneNumberSkillGroups,
      testOnly: 'boolean',
      trunks: 'number',
      usage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBulkPhoneNumbersResponseBodyPhoneNumbers extends $tea.Model {
  phoneNumber?: AddBulkPhoneNumbersResponseBodyPhoneNumbersPhoneNumber[];
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: { 'type': 'array', 'itemType': AddBulkPhoneNumbersResponseBodyPhoneNumbersPhoneNumber },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBulkPhoneNumbersResponseBodyUserdPhoneNumbers extends $tea.Model {
  userdPhoneNumber?: string[];
  static names(): { [key: string]: string } {
    return {
      userdPhoneNumber: 'UserdPhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userdPhoneNumber: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPhoneNumberResponseBodyPhoneNumberContactFlow extends $tea.Model {
  contactFlowDescription?: string;
  contactFlowId?: string;
  contactFlowName?: string;
  instanceId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      contactFlowDescription: 'ContactFlowDescription',
      contactFlowId: 'ContactFlowId',
      contactFlowName: 'ContactFlowName',
      instanceId: 'InstanceId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowDescription: 'string',
      contactFlowId: 'string',
      contactFlowName: 'string',
      instanceId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPhoneNumberResponseBodyPhoneNumber extends $tea.Model {
  allowOutbound?: boolean;
  contactFlow?: AddPhoneNumberResponseBodyPhoneNumberContactFlow;
  instanceId?: string;
  number?: string;
  phoneNumberDescription?: string;
  phoneNumberId?: string;
  remainingTime?: number;
  testOnly?: boolean;
  trunks?: number;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      allowOutbound: 'AllowOutbound',
      contactFlow: 'ContactFlow',
      instanceId: 'InstanceId',
      number: 'Number',
      phoneNumberDescription: 'PhoneNumberDescription',
      phoneNumberId: 'PhoneNumberId',
      remainingTime: 'RemainingTime',
      testOnly: 'TestOnly',
      trunks: 'Trunks',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowOutbound: 'boolean',
      contactFlow: AddPhoneNumberResponseBodyPhoneNumberContactFlow,
      instanceId: 'string',
      number: 'string',
      phoneNumberDescription: 'string',
      phoneNumberId: 'string',
      remainingTime: 'number',
      testOnly: 'boolean',
      trunks: 'number',
      usage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CallOnlinePrivacyNumberResponseBodyData extends $tea.Model {
  callId?: string;
  dateCreated?: string;
  represent?: string;
  statusCode?: string;
  telX?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      dateCreated: 'DateCreated',
      represent: 'Represent',
      statusCode: 'StatusCode',
      telX: 'TelX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      dateCreated: 'string',
      represent: 'string',
      statusCode: 'string',
      telX: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckNumberAvaliableResponseBodyCalleeAvaliable extends $tea.Model {
  avaliable?: boolean;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      avaliable: 'Avaliable',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avaliable: 'boolean',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckNumberAvaliableResponseBodyCallerAvaliable extends $tea.Model {
  avaliable?: boolean;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      avaliable: 'Avaliable',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avaliable: 'boolean',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitContactFlowVersionModificationResponseBodyContactFlowVersion extends $tea.Model {
  canvas?: string;
  contactFlowVersionDescription?: string;
  contactFlowVersionId?: string;
  content?: string;
  lastModified?: string;
  lastModifiedBy?: string;
  lockedBy?: string;
  status?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      canvas: 'Canvas',
      contactFlowVersionDescription: 'ContactFlowVersionDescription',
      contactFlowVersionId: 'ContactFlowVersionId',
      content: 'Content',
      lastModified: 'LastModified',
      lastModifiedBy: 'LastModifiedBy',
      lockedBy: 'LockedBy',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canvas: 'string',
      contactFlowVersionDescription: 'string',
      contactFlowVersionId: 'string',
      content: 'string',
      lastModified: 'string',
      lastModifiedBy: 'string',
      lockedBy: 'string',
      status: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchJobsResponseBodyJobGroupStrategyWorkingTime extends $tea.Model {
  beginTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchJobsResponseBodyJobGroupStrategy extends $tea.Model {
  customized?: string;
  endTime?: number;
  followUpStrategy?: string;
  isTemplate?: boolean;
  maxAttemptsPerDay?: number;
  minAttemptInterval?: number;
  repeatBy?: string;
  repeatDays?: string[];
  routingStrategy?: string;
  startTime?: number;
  strategyDescription?: string;
  strategyId?: string;
  strategyName?: string;
  type?: string;
  workingTime?: CreateBatchJobsResponseBodyJobGroupStrategyWorkingTime[];
  static names(): { [key: string]: string } {
    return {
      customized: 'Customized',
      endTime: 'EndTime',
      followUpStrategy: 'FollowUpStrategy',
      isTemplate: 'IsTemplate',
      maxAttemptsPerDay: 'MaxAttemptsPerDay',
      minAttemptInterval: 'MinAttemptInterval',
      repeatBy: 'RepeatBy',
      repeatDays: 'RepeatDays',
      routingStrategy: 'RoutingStrategy',
      startTime: 'StartTime',
      strategyDescription: 'StrategyDescription',
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
      type: 'Type',
      workingTime: 'WorkingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customized: 'string',
      endTime: 'number',
      followUpStrategy: 'string',
      isTemplate: 'boolean',
      maxAttemptsPerDay: 'number',
      minAttemptInterval: 'number',
      repeatBy: 'string',
      repeatDays: { 'type': 'array', 'itemType': 'string' },
      routingStrategy: 'string',
      startTime: 'number',
      strategyDescription: 'string',
      strategyId: 'string',
      strategyName: 'string',
      type: 'string',
      workingTime: { 'type': 'array', 'itemType': CreateBatchJobsResponseBodyJobGroupStrategyWorkingTime },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchJobsResponseBodyJobGroup extends $tea.Model {
  callingNumbers?: string[];
  creationTime?: number;
  jobFilePath?: string;
  jobGroupDescription?: string;
  jobGroupId?: string;
  jobGroupName?: string;
  scenarioId?: string;
  strategy?: CreateBatchJobsResponseBodyJobGroupStrategy;
  static names(): { [key: string]: string } {
    return {
      callingNumbers: 'CallingNumbers',
      creationTime: 'CreationTime',
      jobFilePath: 'JobFilePath',
      jobGroupDescription: 'JobGroupDescription',
      jobGroupId: 'JobGroupId',
      jobGroupName: 'JobGroupName',
      scenarioId: 'ScenarioId',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      creationTime: 'number',
      jobFilePath: 'string',
      jobGroupDescription: 'string',
      jobGroupId: 'string',
      jobGroupName: 'string',
      scenarioId: 'string',
      strategy: CreateBatchJobsResponseBodyJobGroupStrategy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCabInstanceResponseBodyInstance extends $tea.Model {
  callCenterInstanceId?: string;
  creationTime?: number;
  instanceDescription?: string;
  instanceId?: string;
  instanceName?: string;
  maxConcurrentConversation?: number;
  owner?: string;
  static names(): { [key: string]: string } {
    return {
      callCenterInstanceId: 'CallCenterInstanceId',
      creationTime: 'CreationTime',
      instanceDescription: 'InstanceDescription',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      maxConcurrentConversation: 'MaxConcurrentConversation',
      owner: 'Owner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callCenterInstanceId: 'string',
      creationTime: 'number',
      instanceDescription: 'string',
      instanceId: 'string',
      instanceName: 'string',
      maxConcurrentConversation: 'number',
      owner: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContactFlowResponseBodyContactFlowPhoneNumbersPhoneNumber extends $tea.Model {
  allowOutbound?: boolean;
  instanceId?: string;
  number?: string;
  phoneNumberDescription?: string;
  phoneNumberId?: string;
  remainingTime?: number;
  testOnly?: boolean;
  trunks?: number;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      allowOutbound: 'AllowOutbound',
      instanceId: 'InstanceId',
      number: 'Number',
      phoneNumberDescription: 'PhoneNumberDescription',
      phoneNumberId: 'PhoneNumberId',
      remainingTime: 'RemainingTime',
      testOnly: 'TestOnly',
      trunks: 'Trunks',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowOutbound: 'boolean',
      instanceId: 'string',
      number: 'string',
      phoneNumberDescription: 'string',
      phoneNumberId: 'string',
      remainingTime: 'number',
      testOnly: 'boolean',
      trunks: 'number',
      usage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContactFlowResponseBodyContactFlowPhoneNumbers extends $tea.Model {
  phoneNumber?: CreateContactFlowResponseBodyContactFlowPhoneNumbersPhoneNumber[];
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: { 'type': 'array', 'itemType': CreateContactFlowResponseBodyContactFlowPhoneNumbersPhoneNumber },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContactFlowResponseBodyContactFlowVersionsContactFlowVersion extends $tea.Model {
  canvas?: string;
  contactFlowVersionDescription?: string;
  contactFlowVersionId?: string;
  content?: string;
  lastModified?: string;
  lastModifiedBy?: string;
  lockedBy?: string;
  status?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      canvas: 'Canvas',
      contactFlowVersionDescription: 'ContactFlowVersionDescription',
      contactFlowVersionId: 'ContactFlowVersionId',
      content: 'Content',
      lastModified: 'LastModified',
      lastModifiedBy: 'LastModifiedBy',
      lockedBy: 'LockedBy',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canvas: 'string',
      contactFlowVersionDescription: 'string',
      contactFlowVersionId: 'string',
      content: 'string',
      lastModified: 'string',
      lastModifiedBy: 'string',
      lockedBy: 'string',
      status: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContactFlowResponseBodyContactFlowVersions extends $tea.Model {
  contactFlowVersion?: CreateContactFlowResponseBodyContactFlowVersionsContactFlowVersion[];
  static names(): { [key: string]: string } {
    return {
      contactFlowVersion: 'ContactFlowVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowVersion: { 'type': 'array', 'itemType': CreateContactFlowResponseBodyContactFlowVersionsContactFlowVersion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContactFlowResponseBodyContactFlow extends $tea.Model {
  appliedVersion?: string;
  contactFlowDescription?: string;
  contactFlowId?: string;
  contactFlowName?: string;
  instanceId?: string;
  phoneNumbers?: CreateContactFlowResponseBodyContactFlowPhoneNumbers;
  type?: string;
  versions?: CreateContactFlowResponseBodyContactFlowVersions;
  static names(): { [key: string]: string } {
    return {
      appliedVersion: 'AppliedVersion',
      contactFlowDescription: 'ContactFlowDescription',
      contactFlowId: 'ContactFlowId',
      contactFlowName: 'ContactFlowName',
      instanceId: 'InstanceId',
      phoneNumbers: 'PhoneNumbers',
      type: 'Type',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedVersion: 'string',
      contactFlowDescription: 'string',
      contactFlowId: 'string',
      contactFlowName: 'string',
      instanceId: 'string',
      phoneNumbers: CreateContactFlowResponseBodyContactFlowPhoneNumbers,
      type: 'string',
      versions: CreateContactFlowResponseBodyContactFlowVersions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBodyInstanceAdminUserDetail extends $tea.Model {
  department?: string;
  displayName?: string;
  email?: string;
  loginName?: string;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      department: 'Department',
      displayName: 'DisplayName',
      email: 'Email',
      loginName: 'LoginName',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      department: 'string',
      displayName: 'string',
      email: 'string',
      loginName: 'string',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBodyInstanceAdminUser extends $tea.Model {
  detail?: CreateInstanceResponseBodyInstanceAdminUserDetail;
  instanceId?: string;
  ramId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      instanceId: 'InstanceId',
      ramId: 'RamId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: CreateInstanceResponseBodyInstanceAdminUserDetail,
      instanceId: 'string',
      ramId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBodyInstanceAdmin extends $tea.Model {
  user?: CreateInstanceResponseBodyInstanceAdminUser[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': CreateInstanceResponseBodyInstanceAdminUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBodyInstanceFailLoginNames extends $tea.Model {
  failLoginName?: string[];
  static names(): { [key: string]: string } {
    return {
      failLoginName: 'FailLoginName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failLoginName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBodyInstanceFailPhoneNumbers extends $tea.Model {
  failPhoneNumber?: string[];
  static names(): { [key: string]: string } {
    return {
      failPhoneNumber: 'FailPhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failPhoneNumber: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBodyInstancePhoneNumbersPhoneNumber extends $tea.Model {
  allowOutbound?: boolean;
  instanceId?: string;
  number?: string;
  phoneNumberDescription?: string;
  phoneNumberId?: string;
  remainingTime?: number;
  testOnly?: boolean;
  trunks?: number;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      allowOutbound: 'AllowOutbound',
      instanceId: 'InstanceId',
      number: 'Number',
      phoneNumberDescription: 'PhoneNumberDescription',
      phoneNumberId: 'PhoneNumberId',
      remainingTime: 'RemainingTime',
      testOnly: 'TestOnly',
      trunks: 'Trunks',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowOutbound: 'boolean',
      instanceId: 'string',
      number: 'string',
      phoneNumberDescription: 'string',
      phoneNumberId: 'string',
      remainingTime: 'number',
      testOnly: 'boolean',
      trunks: 'number',
      usage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBodyInstancePhoneNumbers extends $tea.Model {
  phoneNumber?: CreateInstanceResponseBodyInstancePhoneNumbersPhoneNumber[];
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: { 'type': 'array', 'itemType': CreateInstanceResponseBodyInstancePhoneNumbersPhoneNumber },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBodyInstanceSuccessLoginNames extends $tea.Model {
  successLoginName?: string[];
  static names(): { [key: string]: string } {
    return {
      successLoginName: 'SuccessLoginName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      successLoginName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBodyInstanceSuccessPhoneNumbers extends $tea.Model {
  successPhoneNumber?: string[];
  static names(): { [key: string]: string } {
    return {
      successPhoneNumber: 'SuccessPhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      successPhoneNumber: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBodyInstance extends $tea.Model {
  admin?: CreateInstanceResponseBodyInstanceAdmin;
  consoleUrl?: string;
  createdTime?: number;
  directoryId?: string;
  domainName?: string;
  failLoginNames?: CreateInstanceResponseBodyInstanceFailLoginNames;
  failPhoneNumbers?: CreateInstanceResponseBodyInstanceFailPhoneNumbers;
  instanceDescription?: string;
  instanceId?: string;
  instanceName?: string;
  maxOnlineAgents?: number;
  owner?: string;
  phoneNumbers?: CreateInstanceResponseBodyInstancePhoneNumbers;
  status?: string;
  storageBucket?: string;
  storageMaxDays?: number;
  storageMaxSize?: number;
  successLoginNames?: CreateInstanceResponseBodyInstanceSuccessLoginNames;
  successPhoneNumbers?: CreateInstanceResponseBodyInstanceSuccessPhoneNumbers;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      admin: 'Admin',
      consoleUrl: 'ConsoleUrl',
      createdTime: 'CreatedTime',
      directoryId: 'DirectoryId',
      domainName: 'DomainName',
      failLoginNames: 'FailLoginNames',
      failPhoneNumbers: 'FailPhoneNumbers',
      instanceDescription: 'InstanceDescription',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      maxOnlineAgents: 'MaxOnlineAgents',
      owner: 'Owner',
      phoneNumbers: 'PhoneNumbers',
      status: 'Status',
      storageBucket: 'StorageBucket',
      storageMaxDays: 'StorageMaxDays',
      storageMaxSize: 'StorageMaxSize',
      successLoginNames: 'SuccessLoginNames',
      successPhoneNumbers: 'SuccessPhoneNumbers',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      admin: CreateInstanceResponseBodyInstanceAdmin,
      consoleUrl: 'string',
      createdTime: 'number',
      directoryId: 'string',
      domainName: 'string',
      failLoginNames: CreateInstanceResponseBodyInstanceFailLoginNames,
      failPhoneNumbers: CreateInstanceResponseBodyInstanceFailPhoneNumbers,
      instanceDescription: 'string',
      instanceId: 'string',
      instanceName: 'string',
      maxOnlineAgents: 'number',
      owner: 'string',
      phoneNumbers: CreateInstanceResponseBodyInstancePhoneNumbers,
      status: 'string',
      storageBucket: 'string',
      storageMaxDays: 'number',
      storageMaxSize: 'number',
      successLoginNames: CreateInstanceResponseBodyInstanceSuccessLoginNames,
      successPhoneNumbers: CreateInstanceResponseBodyInstanceSuccessPhoneNumbers,
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobGroupResponseBodyJobGroupStrategyWorkingTime extends $tea.Model {
  from?: string;
  to?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      to: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobGroupResponseBodyJobGroupStrategy extends $tea.Model {
  customized?: string;
  endTime?: number;
  followUpStrategy?: string;
  isTemplate?: boolean;
  maxAttemptsPerDay?: number;
  minAttemptInterval?: number;
  repeatBy?: string;
  repeatDays?: string[];
  routingStrategy?: string;
  startTime?: number;
  strategyDescription?: string;
  strategyId?: string;
  strategyName?: string;
  type?: string;
  workingTime?: CreateJobGroupResponseBodyJobGroupStrategyWorkingTime[];
  static names(): { [key: string]: string } {
    return {
      customized: 'Customized',
      endTime: 'EndTime',
      followUpStrategy: 'FollowUpStrategy',
      isTemplate: 'IsTemplate',
      maxAttemptsPerDay: 'MaxAttemptsPerDay',
      minAttemptInterval: 'MinAttemptInterval',
      repeatBy: 'RepeatBy',
      repeatDays: 'RepeatDays',
      routingStrategy: 'RoutingStrategy',
      startTime: 'StartTime',
      strategyDescription: 'StrategyDescription',
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
      type: 'Type',
      workingTime: 'WorkingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customized: 'string',
      endTime: 'number',
      followUpStrategy: 'string',
      isTemplate: 'boolean',
      maxAttemptsPerDay: 'number',
      minAttemptInterval: 'number',
      repeatBy: 'string',
      repeatDays: { 'type': 'array', 'itemType': 'string' },
      routingStrategy: 'string',
      startTime: 'number',
      strategyDescription: 'string',
      strategyId: 'string',
      strategyName: 'string',
      type: 'string',
      workingTime: { 'type': 'array', 'itemType': CreateJobGroupResponseBodyJobGroupStrategyWorkingTime },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobGroupResponseBodyJobGroup extends $tea.Model {
  callingNumbers?: string[];
  creationTime?: number;
  jobFilePath?: string;
  jobGroupDescription?: string;
  jobGroupId?: string;
  jobGroupName?: string;
  scenarioId?: string;
  strategy?: CreateJobGroupResponseBodyJobGroupStrategy;
  static names(): { [key: string]: string } {
    return {
      callingNumbers: 'CallingNumbers',
      creationTime: 'CreationTime',
      jobFilePath: 'JobFilePath',
      jobGroupDescription: 'JobGroupDescription',
      jobGroupId: 'JobGroupId',
      jobGroupName: 'JobGroupName',
      scenarioId: 'ScenarioId',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      creationTime: 'number',
      jobFilePath: 'string',
      jobGroupDescription: 'string',
      jobGroupId: 'string',
      jobGroupName: 'string',
      scenarioId: 'string',
      strategy: CreateJobGroupResponseBodyJobGroupStrategy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMediaResponseBodyMediaUploadParam extends $tea.Model {
  fileName?: string;
  id?: string;
  instance?: string;
  name?: string;
  ossFileName?: string;
  ossFilePath?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      id: 'Id',
      instance: 'Instance',
      name: 'Name',
      ossFileName: 'OssFileName',
      ossFilePath: 'OssFilePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      id: 'string',
      instance: 'string',
      name: 'string',
      ossFileName: 'string',
      ossFilePath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScenarioResponseBodyScenarioStrategyWorkingTime extends $tea.Model {
  beginTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScenarioResponseBodyScenarioStrategy extends $tea.Model {
  customized?: string;
  endTime?: number;
  followUpStrategy?: string;
  isTemplate?: boolean;
  maxAttemptsPerDay?: number;
  minAttemptInterval?: number;
  repeatBy?: string;
  repeatDays?: string[];
  routingStrategy?: string;
  startTime?: number;
  strategyDescription?: string;
  strategyId?: string;
  strategyName?: string;
  type?: string;
  workingTime?: CreateScenarioResponseBodyScenarioStrategyWorkingTime[];
  static names(): { [key: string]: string } {
    return {
      customized: 'Customized',
      endTime: 'EndTime',
      followUpStrategy: 'FollowUpStrategy',
      isTemplate: 'IsTemplate',
      maxAttemptsPerDay: 'MaxAttemptsPerDay',
      minAttemptInterval: 'MinAttemptInterval',
      repeatBy: 'RepeatBy',
      repeatDays: 'RepeatDays',
      routingStrategy: 'RoutingStrategy',
      startTime: 'StartTime',
      strategyDescription: 'StrategyDescription',
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
      type: 'Type',
      workingTime: 'WorkingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customized: 'string',
      endTime: 'number',
      followUpStrategy: 'string',
      isTemplate: 'boolean',
      maxAttemptsPerDay: 'number',
      minAttemptInterval: 'number',
      repeatBy: 'string',
      repeatDays: { 'type': 'array', 'itemType': 'string' },
      routingStrategy: 'string',
      startTime: 'number',
      strategyDescription: 'string',
      strategyId: 'string',
      strategyName: 'string',
      type: 'string',
      workingTime: { 'type': 'array', 'itemType': CreateScenarioResponseBodyScenarioStrategyWorkingTime },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScenarioResponseBodyScenarioSurveysIntents extends $tea.Model {
  intentId?: string;
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      intentId: 'IntentId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentId: 'string',
      nodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScenarioResponseBodyScenarioSurveys extends $tea.Model {
  beebotId?: string;
  intents?: CreateScenarioResponseBodyScenarioSurveysIntents[];
  role?: string;
  round?: number;
  surveyDescription?: string;
  surveyId?: string;
  surveyName?: string;
  static names(): { [key: string]: string } {
    return {
      beebotId: 'BeebotId',
      intents: 'Intents',
      role: 'Role',
      round: 'Round',
      surveyDescription: 'SurveyDescription',
      surveyId: 'SurveyId',
      surveyName: 'SurveyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beebotId: 'string',
      intents: { 'type': 'array', 'itemType': CreateScenarioResponseBodyScenarioSurveysIntents },
      role: 'string',
      round: 'number',
      surveyDescription: 'string',
      surveyId: 'string',
      surveyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScenarioResponseBodyScenarioVariables extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScenarioResponseBodyScenario extends $tea.Model {
  isTemplate?: boolean;
  scenarioDescription?: string;
  scenarioId?: string;
  scenarioName?: string;
  strategy?: CreateScenarioResponseBodyScenarioStrategy;
  surveys?: CreateScenarioResponseBodyScenarioSurveys[];
  type?: string;
  variables?: CreateScenarioResponseBodyScenarioVariables[];
  static names(): { [key: string]: string } {
    return {
      isTemplate: 'IsTemplate',
      scenarioDescription: 'ScenarioDescription',
      scenarioId: 'ScenarioId',
      scenarioName: 'ScenarioName',
      strategy: 'Strategy',
      surveys: 'Surveys',
      type: 'Type',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTemplate: 'boolean',
      scenarioDescription: 'string',
      scenarioId: 'string',
      scenarioName: 'string',
      strategy: CreateScenarioResponseBodyScenarioStrategy,
      surveys: { 'type': 'array', 'itemType': CreateScenarioResponseBodyScenarioSurveys },
      type: 'string',
      variables: { 'type': 'array', 'itemType': CreateScenarioResponseBodyScenarioVariables },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScenarioFromTemplateResponseBodyScenarioStrategyWorkingTime extends $tea.Model {
  beginTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScenarioFromTemplateResponseBodyScenarioStrategy extends $tea.Model {
  customized?: string;
  endTime?: number;
  followUpStrategy?: string;
  isTemplate?: boolean;
  maxAttemptsPerDay?: number;
  minAttemptInterval?: number;
  repeatBy?: string;
  repeatDays?: string[];
  routingStrategy?: string;
  startTime?: number;
  strategyDescription?: string;
  strategyId?: string;
  strategyName?: string;
  type?: string;
  workingTime?: CreateScenarioFromTemplateResponseBodyScenarioStrategyWorkingTime[];
  static names(): { [key: string]: string } {
    return {
      customized: 'Customized',
      endTime: 'EndTime',
      followUpStrategy: 'FollowUpStrategy',
      isTemplate: 'IsTemplate',
      maxAttemptsPerDay: 'MaxAttemptsPerDay',
      minAttemptInterval: 'MinAttemptInterval',
      repeatBy: 'RepeatBy',
      repeatDays: 'RepeatDays',
      routingStrategy: 'RoutingStrategy',
      startTime: 'StartTime',
      strategyDescription: 'StrategyDescription',
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
      type: 'Type',
      workingTime: 'WorkingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customized: 'string',
      endTime: 'number',
      followUpStrategy: 'string',
      isTemplate: 'boolean',
      maxAttemptsPerDay: 'number',
      minAttemptInterval: 'number',
      repeatBy: 'string',
      repeatDays: { 'type': 'array', 'itemType': 'string' },
      routingStrategy: 'string',
      startTime: 'number',
      strategyDescription: 'string',
      strategyId: 'string',
      strategyName: 'string',
      type: 'string',
      workingTime: { 'type': 'array', 'itemType': CreateScenarioFromTemplateResponseBodyScenarioStrategyWorkingTime },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScenarioFromTemplateResponseBodyScenarioSurveysIntents extends $tea.Model {
  intentId?: string;
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      intentId: 'IntentId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentId: 'string',
      nodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScenarioFromTemplateResponseBodyScenarioSurveys extends $tea.Model {
  beebotId?: string;
  intents?: CreateScenarioFromTemplateResponseBodyScenarioSurveysIntents[];
  role?: string;
  round?: number;
  surveyDescription?: string;
  surveyId?: string;
  surveyName?: string;
  static names(): { [key: string]: string } {
    return {
      beebotId: 'BeebotId',
      intents: 'Intents',
      role: 'Role',
      round: 'Round',
      surveyDescription: 'SurveyDescription',
      surveyId: 'SurveyId',
      surveyName: 'SurveyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beebotId: 'string',
      intents: { 'type': 'array', 'itemType': CreateScenarioFromTemplateResponseBodyScenarioSurveysIntents },
      role: 'string',
      round: 'number',
      surveyDescription: 'string',
      surveyId: 'string',
      surveyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScenarioFromTemplateResponseBodyScenarioVariables extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScenarioFromTemplateResponseBodyScenario extends $tea.Model {
  isTemplate?: boolean;
  scenarioDescription?: string;
  scenarioId?: string;
  scenarioName?: string;
  strategy?: CreateScenarioFromTemplateResponseBodyScenarioStrategy;
  surveys?: CreateScenarioFromTemplateResponseBodyScenarioSurveys[];
  type?: string;
  variables?: CreateScenarioFromTemplateResponseBodyScenarioVariables[];
  static names(): { [key: string]: string } {
    return {
      isTemplate: 'IsTemplate',
      scenarioDescription: 'ScenarioDescription',
      scenarioId: 'ScenarioId',
      scenarioName: 'ScenarioName',
      strategy: 'Strategy',
      surveys: 'Surveys',
      type: 'Type',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTemplate: 'boolean',
      scenarioDescription: 'string',
      scenarioId: 'string',
      scenarioName: 'string',
      strategy: CreateScenarioFromTemplateResponseBodyScenarioStrategy,
      surveys: { 'type': 'array', 'itemType': CreateScenarioFromTemplateResponseBodyScenarioSurveys },
      type: 'string',
      variables: { 'type': 'array', 'itemType': CreateScenarioFromTemplateResponseBodyScenarioVariables },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSurveyResponseBodySurveyAsrCustomModel extends $tea.Model {
  corpora?: string;
  customModelStatus?: number;
  static names(): { [key: string]: string } {
    return {
      corpora: 'Corpora',
      customModelStatus: 'CustomModelStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpora: 'string',
      customModelStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSurveyResponseBodySurveyFlow extends $tea.Model {
  flowId?: string;
  flowJson?: string;
  isPublished?: boolean;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      flowJson: 'FlowJson',
      isPublished: 'IsPublished',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      flowJson: 'string',
      isPublished: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSurveyResponseBodySurvey extends $tea.Model {
  asrCustomModel?: CreateSurveyResponseBodySurveyAsrCustomModel;
  description?: string;
  flow?: CreateSurveyResponseBodySurveyFlow;
  globalQuestions?: string;
  hotWords?: string;
  id?: string;
  name?: string;
  role?: string;
  round?: number;
  scenarioUuid?: string;
  speechOptimizationParam?: string;
  static names(): { [key: string]: string } {
    return {
      asrCustomModel: 'AsrCustomModel',
      description: 'Description',
      flow: 'Flow',
      globalQuestions: 'GlobalQuestions',
      hotWords: 'HotWords',
      id: 'Id',
      name: 'Name',
      role: 'Role',
      round: 'Round',
      scenarioUuid: 'ScenarioUuid',
      speechOptimizationParam: 'SpeechOptimizationParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrCustomModel: CreateSurveyResponseBodySurveyAsrCustomModel,
      description: 'string',
      flow: CreateSurveyResponseBodySurveyFlow,
      globalQuestions: 'string',
      hotWords: 'string',
      id: 'string',
      name: 'string',
      role: 'string',
      round: 'number',
      scenarioUuid: 'string',
      speechOptimizationParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DialogueResponseBodyFeedback extends $tea.Model {
  action?: string;
  actionParams?: string;
  content?: string;
  interruptible?: boolean;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionParams: 'ActionParams',
      content: 'Content',
      interruptible: 'Interruptible',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionParams: 'string',
      content: 'string',
      interruptible: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadAllTypeRecordingResponseBodyMediaDownloadParamListMediaDownloadParam extends $tea.Model {
  fileName?: string;
  signatureUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      signatureUrl: 'SignatureUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      signatureUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadAllTypeRecordingResponseBodyMediaDownloadParamList extends $tea.Model {
  mediaDownloadParam?: DownloadAllTypeRecordingResponseBodyMediaDownloadParamListMediaDownloadParam[];
  static names(): { [key: string]: string } {
    return {
      mediaDownloadParam: 'MediaDownloadParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaDownloadParam: { 'type': 'array', 'itemType': DownloadAllTypeRecordingResponseBodyMediaDownloadParamListMediaDownloadParam },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadCabRecordingResponseBodyMediaDownloadParam extends $tea.Model {
  fileName?: string;
  signatureUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      signatureUrl: 'SignatureUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      signatureUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadOriginalStatisticsReportResponseBodyDownloadParams extends $tea.Model {
  signatureUrl?: string;
  static names(): { [key: string]: string } {
    return {
      signatureUrl: 'SignatureUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signatureUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadRecordingResponseBodyMediaDownloadParam extends $tea.Model {
  fileName?: string;
  signatureUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      signatureUrl: 'SignatureUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      signatureUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadUnreachableContactsResponseBodyDownloadParams extends $tea.Model {
  signatureUrl?: string;
  static names(): { [key: string]: string } {
    return {
      signatureUrl: 'SignatureUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signatureUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindUsersResponseBodyUsersListUserDetail extends $tea.Model {
  department?: string;
  displayName?: string;
  email?: string;
  loginName?: string;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      department: 'Department',
      displayName: 'DisplayName',
      email: 'Email',
      loginName: 'LoginName',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      department: 'string',
      displayName: 'string',
      email: 'string',
      loginName: 'string',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindUsersResponseBodyUsersListUserRolesRole extends $tea.Model {
  instanceId?: string;
  roleDescription?: string;
  roleId?: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      roleDescription: 'RoleDescription',
      roleId: 'RoleId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      roleDescription: 'string',
      roleId: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindUsersResponseBodyUsersListUserRoles extends $tea.Model {
  role?: FindUsersResponseBodyUsersListUserRolesRole[];
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: { 'type': 'array', 'itemType': FindUsersResponseBodyUsersListUserRolesRole },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindUsersResponseBodyUsersListUserSkillLevelsSkillLevelSkill extends $tea.Model {
  instanceId?: string;
  skillGroupDescription?: string;
  skillGroupId?: string;
  skillGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupDescription: 'SkillGroupDescription',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupDescription: 'string',
      skillGroupId: 'string',
      skillGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindUsersResponseBodyUsersListUserSkillLevelsSkillLevel extends $tea.Model {
  level?: number;
  skill?: FindUsersResponseBodyUsersListUserSkillLevelsSkillLevelSkill;
  skillLevelId?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      skill: 'Skill',
      skillLevelId: 'SkillLevelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'number',
      skill: FindUsersResponseBodyUsersListUserSkillLevelsSkillLevelSkill,
      skillLevelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindUsersResponseBodyUsersListUserSkillLevels extends $tea.Model {
  skillLevel?: FindUsersResponseBodyUsersListUserSkillLevelsSkillLevel[];
  static names(): { [key: string]: string } {
    return {
      skillLevel: 'SkillLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillLevel: { 'type': 'array', 'itemType': FindUsersResponseBodyUsersListUserSkillLevelsSkillLevel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindUsersResponseBodyUsersListUser extends $tea.Model {
  detail?: FindUsersResponseBodyUsersListUserDetail;
  instanceId?: string;
  privateOutboundNumberId?: string;
  ramId?: string;
  roles?: FindUsersResponseBodyUsersListUserRoles;
  skillLevels?: FindUsersResponseBodyUsersListUserSkillLevels;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      instanceId: 'InstanceId',
      privateOutboundNumberId: 'PrivateOutboundNumberId',
      ramId: 'RamId',
      roles: 'Roles',
      skillLevels: 'SkillLevels',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: FindUsersResponseBodyUsersListUserDetail,
      instanceId: 'string',
      privateOutboundNumberId: 'string',
      ramId: 'string',
      roles: FindUsersResponseBodyUsersListUserRoles,
      skillLevels: FindUsersResponseBodyUsersListUserSkillLevels,
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindUsersResponseBodyUsersList extends $tea.Model {
  user?: FindUsersResponseBodyUsersListUser[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': FindUsersResponseBodyUsersListUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindUsersResponseBodyUsers extends $tea.Model {
  list?: FindUsersResponseBodyUsersList;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: FindUsersResponseBodyUsersList,
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAgentStatisticReportResponseBodyDataListListGenerateAgentStatisticInbound extends $tea.Model {
  averageHoldTime?: number;
  averageRingTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  callsHandled?: number;
  callsOffered?: number;
  handleRate?: number;
  maxHoldTime?: number;
  maxRingTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  totalHoldTime?: number;
  totalRingTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageHoldTime: 'AverageHoldTime',
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsHandled: 'CallsHandled',
      callsOffered: 'CallsOffered',
      handleRate: 'HandleRate',
      maxHoldTime: 'MaxHoldTime',
      maxRingTime: 'MaxRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalHoldTime: 'TotalHoldTime',
      totalRingTime: 'TotalRingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageHoldTime: 'number',
      averageRingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsHandled: 'number',
      callsOffered: 'number',
      handleRate: 'number',
      maxHoldTime: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalHoldTime: 'number',
      totalRingTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAgentStatisticReportResponseBodyDataListListGenerateAgentStatisticOutbound extends $tea.Model {
  answerRate?: number;
  averageDialingTime?: number;
  averageHoldTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  callsAnswered?: number;
  callsDialed?: number;
  maxDialingTime?: number;
  maxHoldTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  totalDialingTime?: number;
  totalHoldTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      answerRate: 'AnswerRate',
      averageDialingTime: 'AverageDialingTime',
      averageHoldTime: 'AverageHoldTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsAnswered: 'CallsAnswered',
      callsDialed: 'CallsDialed',
      maxDialingTime: 'MaxDialingTime',
      maxHoldTime: 'MaxHoldTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalDialingTime: 'TotalDialingTime',
      totalHoldTime: 'TotalHoldTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerRate: 'number',
      averageDialingTime: 'number',
      averageHoldTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsAnswered: 'number',
      callsDialed: 'number',
      maxDialingTime: 'number',
      maxHoldTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalDialingTime: 'number',
      totalHoldTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAgentStatisticReportResponseBodyDataListListGenerateAgentStatisticOverall extends $tea.Model {
  averageHoldTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  maxHoldTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  totalCalls?: number;
  totalHoldTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageHoldTime: 'AverageHoldTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      maxHoldTime: 'MaxHoldTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalCalls: 'TotalCalls',
      totalHoldTime: 'TotalHoldTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageHoldTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      maxHoldTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalCalls: 'number',
      totalHoldTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAgentStatisticReportResponseBodyDataListListGenerateAgentStatistic extends $tea.Model {
  agentId?: string;
  agentName?: string;
  averageReadyTime?: number;
  inbound?: GenerateAgentStatisticReportResponseBodyDataListListGenerateAgentStatisticInbound;
  instanceId?: string;
  loginName?: string;
  maxReadyTime?: number;
  occupancyRate?: number;
  outbound?: GenerateAgentStatisticReportResponseBodyDataListListGenerateAgentStatisticOutbound;
  overall?: GenerateAgentStatisticReportResponseBodyDataListListGenerateAgentStatisticOverall;
  recordDate?: string;
  skillGroupIds?: string;
  skillGroupNames?: string;
  totalBreakTime?: number;
  totalLoggedInTime?: number;
  totalReadyTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      averageReadyTime: 'AverageReadyTime',
      inbound: 'Inbound',
      instanceId: 'InstanceId',
      loginName: 'LoginName',
      maxReadyTime: 'MaxReadyTime',
      occupancyRate: 'OccupancyRate',
      outbound: 'Outbound',
      overall: 'Overall',
      recordDate: 'RecordDate',
      skillGroupIds: 'SkillGroupIds',
      skillGroupNames: 'SkillGroupNames',
      totalBreakTime: 'TotalBreakTime',
      totalLoggedInTime: 'TotalLoggedInTime',
      totalReadyTime: 'TotalReadyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      averageReadyTime: 'number',
      inbound: GenerateAgentStatisticReportResponseBodyDataListListGenerateAgentStatisticInbound,
      instanceId: 'string',
      loginName: 'string',
      maxReadyTime: 'number',
      occupancyRate: 'number',
      outbound: GenerateAgentStatisticReportResponseBodyDataListListGenerateAgentStatisticOutbound,
      overall: GenerateAgentStatisticReportResponseBodyDataListListGenerateAgentStatisticOverall,
      recordDate: 'string',
      skillGroupIds: 'string',
      skillGroupNames: 'string',
      totalBreakTime: 'number',
      totalLoggedInTime: 'number',
      totalReadyTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAgentStatisticReportResponseBodyDataListList extends $tea.Model {
  generateAgentStatistic?: GenerateAgentStatisticReportResponseBodyDataListListGenerateAgentStatistic[];
  static names(): { [key: string]: string } {
    return {
      generateAgentStatistic: 'GenerateAgentStatistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateAgentStatistic: { 'type': 'array', 'itemType': GenerateAgentStatisticReportResponseBodyDataListListGenerateAgentStatistic },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAgentStatisticReportResponseBodyDataList extends $tea.Model {
  list?: GenerateAgentStatisticReportResponseBodyDataListList;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: GenerateAgentStatisticReportResponseBodyDataListList,
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentDataResponseBodyDataListListInbound extends $tea.Model {
  averageHoldTime?: number;
  averageRingTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  callsHandled?: number;
  callsOffered?: number;
  handleRate?: number;
  maxHoldTime?: number;
  maxRingTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  totalHoldTime?: number;
  totalRingTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageHoldTime: 'AverageHoldTime',
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsHandled: 'CallsHandled',
      callsOffered: 'CallsOffered',
      handleRate: 'HandleRate',
      maxHoldTime: 'MaxHoldTime',
      maxRingTime: 'MaxRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalHoldTime: 'TotalHoldTime',
      totalRingTime: 'TotalRingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageHoldTime: 'number',
      averageRingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsHandled: 'number',
      callsOffered: 'number',
      handleRate: 'number',
      maxHoldTime: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalHoldTime: 'number',
      totalRingTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentDataResponseBodyDataListListOutbound extends $tea.Model {
  answerRate?: number;
  averageDialingTime?: number;
  averageHoldTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  callsAnswered?: number;
  callsDialed?: number;
  maxDialingTime?: number;
  maxHoldTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  totalDialingTime?: number;
  totalHoldTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      answerRate: 'AnswerRate',
      averageDialingTime: 'AverageDialingTime',
      averageHoldTime: 'AverageHoldTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsAnswered: 'CallsAnswered',
      callsDialed: 'CallsDialed',
      maxDialingTime: 'MaxDialingTime',
      maxHoldTime: 'MaxHoldTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalDialingTime: 'TotalDialingTime',
      totalHoldTime: 'TotalHoldTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerRate: 'number',
      averageDialingTime: 'number',
      averageHoldTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsAnswered: 'number',
      callsDialed: 'number',
      maxDialingTime: 'number',
      maxHoldTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalDialingTime: 'number',
      totalHoldTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentDataResponseBodyDataListListOverall extends $tea.Model {
  averageHoldTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  maxHoldTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  totalCalls?: number;
  totalHoldTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageHoldTime: 'AverageHoldTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      maxHoldTime: 'MaxHoldTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalCalls: 'TotalCalls',
      totalHoldTime: 'TotalHoldTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageHoldTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      maxHoldTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalCalls: 'number',
      totalHoldTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentDataResponseBodyDataListList extends $tea.Model {
  agentId?: string;
  agentName?: string;
  averageReadyTime?: number;
  inbound?: GetAgentDataResponseBodyDataListListInbound;
  instanceId?: string;
  loginName?: string;
  maxReadyTime?: number;
  occupancyRate?: number;
  outbound?: GetAgentDataResponseBodyDataListListOutbound;
  overall?: GetAgentDataResponseBodyDataListListOverall;
  recordDate?: string;
  skillGroupIds?: string;
  skillGroupNames?: string;
  totalBreakTime?: number;
  totalLoggedInTime?: number;
  totalReadyTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      averageReadyTime: 'AverageReadyTime',
      inbound: 'Inbound',
      instanceId: 'InstanceId',
      loginName: 'LoginName',
      maxReadyTime: 'MaxReadyTime',
      occupancyRate: 'OccupancyRate',
      outbound: 'Outbound',
      overall: 'Overall',
      recordDate: 'RecordDate',
      skillGroupIds: 'SkillGroupIds',
      skillGroupNames: 'SkillGroupNames',
      totalBreakTime: 'TotalBreakTime',
      totalLoggedInTime: 'TotalLoggedInTime',
      totalReadyTime: 'TotalReadyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      averageReadyTime: 'number',
      inbound: GetAgentDataResponseBodyDataListListInbound,
      instanceId: 'string',
      loginName: 'string',
      maxReadyTime: 'number',
      occupancyRate: 'number',
      outbound: GetAgentDataResponseBodyDataListListOutbound,
      overall: GetAgentDataResponseBodyDataListListOverall,
      recordDate: 'string',
      skillGroupIds: 'string',
      skillGroupNames: 'string',
      totalBreakTime: 'number',
      totalLoggedInTime: 'number',
      totalReadyTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentDataResponseBodyDataList extends $tea.Model {
  list?: GetAgentDataResponseBodyDataListList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': GetAgentDataResponseBodyDataListList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallMeasureSummaryReportResponseBodyNumberReportsListNumberReport extends $tea.Model {
  day?: number;
  inboundCount?: number;
  inboundDurationByMinute?: number;
  month?: number;
  number?: string;
  outboundCount?: number;
  outboundDurationByMinute?: number;
  year?: number;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      inboundCount: 'InboundCount',
      inboundDurationByMinute: 'InboundDurationByMinute',
      month: 'Month',
      number: 'Number',
      outboundCount: 'OutboundCount',
      outboundDurationByMinute: 'OutboundDurationByMinute',
      year: 'Year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'number',
      inboundCount: 'number',
      inboundDurationByMinute: 'number',
      month: 'number',
      number: 'string',
      outboundCount: 'number',
      outboundDurationByMinute: 'number',
      year: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallMeasureSummaryReportResponseBodyNumberReportsList extends $tea.Model {
  numberReport?: GetCallMeasureSummaryReportResponseBodyNumberReportsListNumberReport[];
  static names(): { [key: string]: string } {
    return {
      numberReport: 'NumberReport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      numberReport: { 'type': 'array', 'itemType': GetCallMeasureSummaryReportResponseBodyNumberReportsListNumberReport },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallMeasureSummaryReportResponseBodyNumberReports extends $tea.Model {
  list?: GetCallMeasureSummaryReportResponseBodyNumberReportsList;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: GetCallMeasureSummaryReportResponseBodyNumberReportsList,
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallMeasureSummaryReportResponseBodySummaryReport extends $tea.Model {
  day?: number;
  inboundCount?: number;
  inboundDurationByMinute?: number;
  month?: number;
  outboundCount?: number;
  outboundDurationByMinute?: number;
  year?: number;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      inboundCount: 'InboundCount',
      inboundDurationByMinute: 'InboundDurationByMinute',
      month: 'Month',
      outboundCount: 'OutboundCount',
      outboundDurationByMinute: 'OutboundDurationByMinute',
      year: 'Year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'number',
      inboundCount: 'number',
      inboundDurationByMinute: 'number',
      month: 'number',
      outboundCount: 'number',
      outboundDurationByMinute: 'number',
      year: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigResponseBodyConfigItem extends $tea.Model {
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

export class GetContactInfoByOutboundTaskIdResponseBodyContactIdentity extends $tea.Model {
  caller?: string;
  contactReferrnceId?: string;
  jobGroupId?: string;
  userPhone?: string;
  static names(): { [key: string]: string } {
    return {
      caller: 'Caller',
      contactReferrnceId: 'ContactReferrnceId',
      jobGroupId: 'JobGroupId',
      userPhone: 'UserPhone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caller: 'string',
      contactReferrnceId: 'string',
      jobGroupId: 'string',
      userPhone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConversationDetailByContactIdResponseBodyDataListListQualityCheckPhrase extends $tea.Model {
  begin?: number;
  end?: number;
  identity?: string;
  role?: string;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      end: 'End',
      identity: 'Identity',
      role: 'Role',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      end: 'number',
      identity: 'string',
      role: 'string',
      words: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConversationDetailByContactIdResponseBodyDataListList extends $tea.Model {
  qualityCheckPhrase?: GetConversationDetailByContactIdResponseBodyDataListListQualityCheckPhrase[];
  static names(): { [key: string]: string } {
    return {
      qualityCheckPhrase: 'QualityCheckPhrase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualityCheckPhrase: { 'type': 'array', 'itemType': GetConversationDetailByContactIdResponseBodyDataListListQualityCheckPhrase },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConversationDetailByContactIdResponseBodyDataList extends $tea.Model {
  list?: GetConversationDetailByContactIdResponseBodyDataListList;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: GetConversationDetailByContactIdResponseBodyDataListList,
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConversationListResponseBodyConversationsSummary extends $tea.Model {
  category?: string;
  content?: string;
  summaryName?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      content: 'Content',
      summaryName: 'SummaryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      content: 'string',
      summaryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConversationListResponseBodyConversations extends $tea.Model {
  script?: string;
  speaker?: string;
  summary?: GetConversationListResponseBodyConversationsSummary[];
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      script: 'Script',
      speaker: 'Speaker',
      summary: 'Summary',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      script: 'string',
      speaker: 'string',
      summary: { 'type': 'array', 'itemType': GetConversationListResponseBodyConversationsSummary },
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyInstanceAdminUserDetail extends $tea.Model {
  department?: string;
  displayName?: string;
  email?: string;
  loginName?: string;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      department: 'Department',
      displayName: 'DisplayName',
      email: 'Email',
      loginName: 'LoginName',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      department: 'string',
      displayName: 'string',
      email: 'string',
      loginName: 'string',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyInstanceAdminUser extends $tea.Model {
  detail?: GetInstanceResponseBodyInstanceAdminUserDetail;
  instanceId?: string;
  ramId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      instanceId: 'InstanceId',
      ramId: 'RamId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: GetInstanceResponseBodyInstanceAdminUserDetail,
      instanceId: 'string',
      ramId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyInstanceAdmin extends $tea.Model {
  user?: GetInstanceResponseBodyInstanceAdminUser[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': GetInstanceResponseBodyInstanceAdminUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyInstancePhoneNumbersPhoneNumber extends $tea.Model {
  allowOutbound?: boolean;
  instanceId?: string;
  number?: string;
  phoneNumberDescription?: string;
  phoneNumberId?: string;
  remainingTime?: number;
  testOnly?: boolean;
  trunks?: number;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      allowOutbound: 'AllowOutbound',
      instanceId: 'InstanceId',
      number: 'Number',
      phoneNumberDescription: 'PhoneNumberDescription',
      phoneNumberId: 'PhoneNumberId',
      remainingTime: 'RemainingTime',
      testOnly: 'TestOnly',
      trunks: 'Trunks',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowOutbound: 'boolean',
      instanceId: 'string',
      number: 'string',
      phoneNumberDescription: 'string',
      phoneNumberId: 'string',
      remainingTime: 'number',
      testOnly: 'boolean',
      trunks: 'number',
      usage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyInstancePhoneNumbers extends $tea.Model {
  phoneNumber?: GetInstanceResponseBodyInstancePhoneNumbersPhoneNumber[];
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: { 'type': 'array', 'itemType': GetInstanceResponseBodyInstancePhoneNumbersPhoneNumber },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyInstance extends $tea.Model {
  admin?: GetInstanceResponseBodyInstanceAdmin;
  consoleUrl?: string;
  createdTime?: number;
  directoryId?: string;
  domainName?: string;
  instanceDescription?: string;
  instanceId?: string;
  instanceName?: string;
  maxOnlineAgents?: number;
  owner?: string;
  phoneNumbers?: GetInstanceResponseBodyInstancePhoneNumbers;
  status?: string;
  storageBucket?: string;
  storageMaxDays?: number;
  storageMaxSize?: number;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      admin: 'Admin',
      consoleUrl: 'ConsoleUrl',
      createdTime: 'CreatedTime',
      directoryId: 'DirectoryId',
      domainName: 'DomainName',
      instanceDescription: 'InstanceDescription',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      maxOnlineAgents: 'MaxOnlineAgents',
      owner: 'Owner',
      phoneNumbers: 'PhoneNumbers',
      status: 'Status',
      storageBucket: 'StorageBucket',
      storageMaxDays: 'StorageMaxDays',
      storageMaxSize: 'StorageMaxSize',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      admin: GetInstanceResponseBodyInstanceAdmin,
      consoleUrl: 'string',
      createdTime: 'number',
      directoryId: 'string',
      domainName: 'string',
      instanceDescription: 'string',
      instanceId: 'string',
      instanceName: 'string',
      maxOnlineAgents: 'number',
      owner: 'string',
      phoneNumbers: GetInstanceResponseBodyInstancePhoneNumbers,
      status: 'string',
      storageBucket: 'string',
      storageMaxDays: 'number',
      storageMaxSize: 'number',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceStateResponseBodyRealTimeInstanceStateAgentStateDistributionsAgentStateCount extends $tea.Model {
  count?: number;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceStateResponseBodyRealTimeInstanceStateAgentStateDistributions extends $tea.Model {
  agentStateCount?: GetInstanceStateResponseBodyRealTimeInstanceStateAgentStateDistributionsAgentStateCount[];
  static names(): { [key: string]: string } {
    return {
      agentStateCount: 'AgentStateCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStateCount: { 'type': 'array', 'itemType': GetInstanceStateResponseBodyRealTimeInstanceStateAgentStateDistributionsAgentStateCount },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceStateResponseBodyRealTimeInstanceState extends $tea.Model {
  agentStateDistributions?: GetInstanceStateResponseBodyRealTimeInstanceStateAgentStateDistributions;
  static names(): { [key: string]: string } {
    return {
      agentStateDistributions: 'AgentStateDistributions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStateDistributions: GetInstanceStateResponseBodyRealTimeInstanceStateAgentStateDistributions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryReportResponseBodyInstanceSummaryReportInbound extends $tea.Model {
  averageRingTime?: number;
  averageTalkTime?: number;
  averageWaitTime?: number;
  averageWorkTime?: number;
  callsAbandonedInIVR?: number;
  callsAbandonedInQueue?: number;
  callsHandled?: number;
  callsIncomingIVR?: number;
  callsIncomingLine?: number;
  callsIncomingQueue?: number;
  callsOffered?: number;
  handleRate?: number;
  maxRingTime?: number;
  maxTalkTime?: string;
  maxWaitTime?: number;
  maxWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  serviceLevel20?: number;
  totalRingTime?: number;
  totalTalkTime?: number;
  totalWaitTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWaitTime: 'AverageWaitTime',
      averageWorkTime: 'AverageWorkTime',
      callsAbandonedInIVR: 'CallsAbandonedInIVR',
      callsAbandonedInQueue: 'CallsAbandonedInQueue',
      callsHandled: 'CallsHandled',
      callsIncomingIVR: 'CallsIncomingIVR',
      callsIncomingLine: 'CallsIncomingLine',
      callsIncomingQueue: 'CallsIncomingQueue',
      callsOffered: 'CallsOffered',
      handleRate: 'HandleRate',
      maxRingTime: 'MaxRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWaitTime: 'MaxWaitTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      serviceLevel20: 'ServiceLevel20',
      totalRingTime: 'TotalRingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWaitTime: 'TotalWaitTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageRingTime: 'number',
      averageTalkTime: 'number',
      averageWaitTime: 'number',
      averageWorkTime: 'number',
      callsAbandonedInIVR: 'number',
      callsAbandonedInQueue: 'number',
      callsHandled: 'number',
      callsIncomingIVR: 'number',
      callsIncomingLine: 'number',
      callsIncomingQueue: 'number',
      callsOffered: 'number',
      handleRate: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'string',
      maxWaitTime: 'number',
      maxWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      serviceLevel20: 'number',
      totalRingTime: 'number',
      totalTalkTime: 'number',
      totalWaitTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryReportResponseBodyInstanceSummaryReportOutbound extends $tea.Model {
  answerRate?: number;
  averageDialingTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  callsAnswered?: number;
  callsDialed?: number;
  maxDialingTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  totalDialingTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      answerRate: 'AnswerRate',
      averageDialingTime: 'AverageDialingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsAnswered: 'CallsAnswered',
      callsDialed: 'CallsDialed',
      maxDialingTime: 'MaxDialingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalDialingTime: 'TotalDialingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerRate: 'number',
      averageDialingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsAnswered: 'number',
      callsDialed: 'number',
      maxDialingTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalDialingTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryReportResponseBodyInstanceSummaryReportOverall extends $tea.Model {
  averageReadyTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  maxReadyTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  occupancyRate?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  totalBreakTime?: number;
  totalCalls?: number;
  totalLoggedInTime?: number;
  totalReadyTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageReadyTime: 'AverageReadyTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      maxReadyTime: 'MaxReadyTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      occupancyRate: 'OccupancyRate',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalBreakTime: 'TotalBreakTime',
      totalCalls: 'TotalCalls',
      totalLoggedInTime: 'TotalLoggedInTime',
      totalReadyTime: 'TotalReadyTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageReadyTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      maxReadyTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      occupancyRate: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalBreakTime: 'number',
      totalCalls: 'number',
      totalLoggedInTime: 'number',
      totalReadyTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryReportResponseBodyInstanceSummaryReport extends $tea.Model {
  inbound?: GetInstanceSummaryReportResponseBodyInstanceSummaryReportInbound;
  instanceId?: string;
  outbound?: GetInstanceSummaryReportResponseBodyInstanceSummaryReportOutbound;
  overall?: GetInstanceSummaryReportResponseBodyInstanceSummaryReportOverall;
  static names(): { [key: string]: string } {
    return {
      inbound: 'Inbound',
      instanceId: 'InstanceId',
      outbound: 'Outbound',
      overall: 'Overall',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inbound: GetInstanceSummaryReportResponseBodyInstanceSummaryReportInbound,
      instanceId: 'string',
      outbound: GetInstanceSummaryReportResponseBodyInstanceSummaryReportOutbound,
      overall: GetInstanceSummaryReportResponseBodyInstanceSummaryReportOverall,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryReportByIntervalResponseBodyInstanceTimeIntervalReportIntervalListInstanceSummaryReportInbound extends $tea.Model {
  averageRingTime?: number;
  averageTalkTime?: number;
  averageWaitTime?: number;
  averageWorkTime?: number;
  callsAbandonedInIVR?: number;
  callsAbandonedInQueue?: number;
  callsHandled?: number;
  callsIncomingIVR?: number;
  callsIncomingLine?: number;
  callsIncomingQueue?: number;
  callsOffered?: number;
  handleRate?: number;
  maxRingTime?: number;
  maxTalkTime?: string;
  maxWaitTime?: number;
  maxWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  serviceLevel20?: number;
  totalRingTime?: number;
  totalTalkTime?: number;
  totalWaitTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWaitTime: 'AverageWaitTime',
      averageWorkTime: 'AverageWorkTime',
      callsAbandonedInIVR: 'CallsAbandonedInIVR',
      callsAbandonedInQueue: 'CallsAbandonedInQueue',
      callsHandled: 'CallsHandled',
      callsIncomingIVR: 'CallsIncomingIVR',
      callsIncomingLine: 'CallsIncomingLine',
      callsIncomingQueue: 'CallsIncomingQueue',
      callsOffered: 'CallsOffered',
      handleRate: 'HandleRate',
      maxRingTime: 'MaxRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWaitTime: 'MaxWaitTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      serviceLevel20: 'ServiceLevel20',
      totalRingTime: 'TotalRingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWaitTime: 'TotalWaitTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageRingTime: 'number',
      averageTalkTime: 'number',
      averageWaitTime: 'number',
      averageWorkTime: 'number',
      callsAbandonedInIVR: 'number',
      callsAbandonedInQueue: 'number',
      callsHandled: 'number',
      callsIncomingIVR: 'number',
      callsIncomingLine: 'number',
      callsIncomingQueue: 'number',
      callsOffered: 'number',
      handleRate: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'string',
      maxWaitTime: 'number',
      maxWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      serviceLevel20: 'number',
      totalRingTime: 'number',
      totalTalkTime: 'number',
      totalWaitTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryReportByIntervalResponseBodyInstanceTimeIntervalReportIntervalListInstanceSummaryReportOutbound extends $tea.Model {
  answerRate?: number;
  averageDialingTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  callsAnswered?: number;
  callsDialed?: number;
  maxDialingTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  totalDialingTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      answerRate: 'AnswerRate',
      averageDialingTime: 'AverageDialingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsAnswered: 'CallsAnswered',
      callsDialed: 'CallsDialed',
      maxDialingTime: 'MaxDialingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalDialingTime: 'TotalDialingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerRate: 'number',
      averageDialingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsAnswered: 'number',
      callsDialed: 'number',
      maxDialingTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalDialingTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryReportByIntervalResponseBodyInstanceTimeIntervalReportIntervalListInstanceSummaryReportOverall extends $tea.Model {
  averageReadyTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  maxReadyTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  occupancyRate?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  totalBreakTime?: number;
  totalCalls?: number;
  totalLoggedInTime?: number;
  totalReadyTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageReadyTime: 'AverageReadyTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      maxReadyTime: 'MaxReadyTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      occupancyRate: 'OccupancyRate',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalBreakTime: 'TotalBreakTime',
      totalCalls: 'TotalCalls',
      totalLoggedInTime: 'TotalLoggedInTime',
      totalReadyTime: 'TotalReadyTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageReadyTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      maxReadyTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      occupancyRate: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalBreakTime: 'number',
      totalCalls: 'number',
      totalLoggedInTime: 'number',
      totalReadyTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryReportByIntervalResponseBodyInstanceTimeIntervalReportIntervalListInstanceSummaryReport extends $tea.Model {
  inbound?: GetInstanceSummaryReportByIntervalResponseBodyInstanceTimeIntervalReportIntervalListInstanceSummaryReportInbound;
  instanceId?: string;
  outbound?: GetInstanceSummaryReportByIntervalResponseBodyInstanceTimeIntervalReportIntervalListInstanceSummaryReportOutbound;
  overall?: GetInstanceSummaryReportByIntervalResponseBodyInstanceTimeIntervalReportIntervalListInstanceSummaryReportOverall;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      inbound: 'Inbound',
      instanceId: 'InstanceId',
      outbound: 'Outbound',
      overall: 'Overall',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inbound: GetInstanceSummaryReportByIntervalResponseBodyInstanceTimeIntervalReportIntervalListInstanceSummaryReportInbound,
      instanceId: 'string',
      outbound: GetInstanceSummaryReportByIntervalResponseBodyInstanceTimeIntervalReportIntervalListInstanceSummaryReportOutbound,
      overall: GetInstanceSummaryReportByIntervalResponseBodyInstanceTimeIntervalReportIntervalListInstanceSummaryReportOverall,
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryReportByIntervalResponseBodyInstanceTimeIntervalReportIntervalList extends $tea.Model {
  instanceSummaryReport?: GetInstanceSummaryReportByIntervalResponseBodyInstanceTimeIntervalReportIntervalListInstanceSummaryReport[];
  static names(): { [key: string]: string } {
    return {
      instanceSummaryReport: 'InstanceSummaryReport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSummaryReport: { 'type': 'array', 'itemType': GetInstanceSummaryReportByIntervalResponseBodyInstanceTimeIntervalReportIntervalListInstanceSummaryReport },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryReportByIntervalResponseBodyInstanceTimeIntervalReport extends $tea.Model {
  instanceId?: string;
  intervalList?: GetInstanceSummaryReportByIntervalResponseBodyInstanceTimeIntervalReportIntervalList;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      intervalList: 'IntervalList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      intervalList: GetInstanceSummaryReportByIntervalResponseBodyInstanceTimeIntervalReportIntervalList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryReportSinceMidnightResponseBodyInstanceSummaryReportInbound extends $tea.Model {
  averageRingTime?: number;
  averageTalkTime?: number;
  averageWaitTime?: number;
  averageWorkTime?: number;
  callsAbandonedInIVR?: number;
  callsAbandonedInQueue?: number;
  callsHandled?: number;
  callsIncomingIVR?: number;
  callsIncomingLine?: number;
  callsIncomingQueue?: number;
  callsOffered?: number;
  handleRate?: number;
  maxRingTime?: number;
  maxTalkTime?: string;
  maxWaitTime?: number;
  maxWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  serviceLevel20?: number;
  totalRingTime?: number;
  totalTalkTime?: number;
  totalWaitTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWaitTime: 'AverageWaitTime',
      averageWorkTime: 'AverageWorkTime',
      callsAbandonedInIVR: 'CallsAbandonedInIVR',
      callsAbandonedInQueue: 'CallsAbandonedInQueue',
      callsHandled: 'CallsHandled',
      callsIncomingIVR: 'CallsIncomingIVR',
      callsIncomingLine: 'CallsIncomingLine',
      callsIncomingQueue: 'CallsIncomingQueue',
      callsOffered: 'CallsOffered',
      handleRate: 'HandleRate',
      maxRingTime: 'MaxRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWaitTime: 'MaxWaitTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      serviceLevel20: 'ServiceLevel20',
      totalRingTime: 'TotalRingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWaitTime: 'TotalWaitTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageRingTime: 'number',
      averageTalkTime: 'number',
      averageWaitTime: 'number',
      averageWorkTime: 'number',
      callsAbandonedInIVR: 'number',
      callsAbandonedInQueue: 'number',
      callsHandled: 'number',
      callsIncomingIVR: 'number',
      callsIncomingLine: 'number',
      callsIncomingQueue: 'number',
      callsOffered: 'number',
      handleRate: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'string',
      maxWaitTime: 'number',
      maxWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      serviceLevel20: 'number',
      totalRingTime: 'number',
      totalTalkTime: 'number',
      totalWaitTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryReportSinceMidnightResponseBodyInstanceSummaryReportOutbound extends $tea.Model {
  answerRate?: number;
  averageDialingTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  callsAnswered?: number;
  callsDialed?: number;
  maxDialingTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  totalDialingTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      answerRate: 'AnswerRate',
      averageDialingTime: 'AverageDialingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsAnswered: 'CallsAnswered',
      callsDialed: 'CallsDialed',
      maxDialingTime: 'MaxDialingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalDialingTime: 'TotalDialingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerRate: 'number',
      averageDialingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsAnswered: 'number',
      callsDialed: 'number',
      maxDialingTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalDialingTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryReportSinceMidnightResponseBodyInstanceSummaryReportOverall extends $tea.Model {
  averageReadyTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  maxReadyTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  occupancyRate?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  totalBreakTime?: number;
  totalCalls?: number;
  totalLoggedInTime?: number;
  totalReadyTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageReadyTime: 'AverageReadyTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      maxReadyTime: 'MaxReadyTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      occupancyRate: 'OccupancyRate',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalBreakTime: 'TotalBreakTime',
      totalCalls: 'TotalCalls',
      totalLoggedInTime: 'TotalLoggedInTime',
      totalReadyTime: 'TotalReadyTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageReadyTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      maxReadyTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      occupancyRate: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalBreakTime: 'number',
      totalCalls: 'number',
      totalLoggedInTime: 'number',
      totalReadyTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryReportSinceMidnightResponseBodyInstanceSummaryReport extends $tea.Model {
  inbound?: GetInstanceSummaryReportSinceMidnightResponseBodyInstanceSummaryReportInbound;
  instanceId?: string;
  outbound?: GetInstanceSummaryReportSinceMidnightResponseBodyInstanceSummaryReportOutbound;
  overall?: GetInstanceSummaryReportSinceMidnightResponseBodyInstanceSummaryReportOverall;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      inbound: 'Inbound',
      instanceId: 'InstanceId',
      outbound: 'Outbound',
      overall: 'Overall',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inbound: GetInstanceSummaryReportSinceMidnightResponseBodyInstanceSummaryReportInbound,
      instanceId: 'string',
      outbound: GetInstanceSummaryReportSinceMidnightResponseBodyInstanceSummaryReportOutbound,
      overall: GetInstanceSummaryReportSinceMidnightResponseBodyInstanceSummaryReportOverall,
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobContacts extends $tea.Model {
  contactId?: string;
  contactName?: string;
  honorific?: string;
  phoneNumber?: string;
  referenceId?: string;
  role?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      contactName: 'ContactName',
      honorific: 'Honorific',
      phoneNumber: 'PhoneNumber',
      referenceId: 'ReferenceId',
      role: 'Role',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      contactName: 'string',
      honorific: 'string',
      phoneNumber: 'string',
      referenceId: 'string',
      role: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobExtras extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobSummary extends $tea.Model {
  category?: string;
  content?: string;
  summaryName?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      content: 'Content',
      summaryName: 'SummaryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      content: 'string',
      summaryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobTasksContact extends $tea.Model {
  contactId?: string;
  contactName?: string;
  honorific?: string;
  phoneNumber?: string;
  referenceId?: string;
  role?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      contactName: 'ContactName',
      honorific: 'Honorific',
      phoneNumber: 'PhoneNumber',
      referenceId: 'ReferenceId',
      role: 'Role',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      contactName: 'string',
      honorific: 'string',
      phoneNumber: 'string',
      referenceId: 'string',
      role: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobTasksConversationSummary extends $tea.Model {
  category?: string;
  content?: string;
  summaryName?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      content: 'Content',
      summaryName: 'SummaryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      content: 'string',
      summaryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobTasksConversation extends $tea.Model {
  script?: string;
  speaker?: string;
  summary?: GetJobResponseBodyJobTasksConversationSummary[];
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      script: 'Script',
      speaker: 'Speaker',
      summary: 'Summary',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      script: 'string',
      speaker: 'string',
      summary: { 'type': 'array', 'itemType': GetJobResponseBodyJobTasksConversationSummary },
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobTasks extends $tea.Model {
  actualTime?: number;
  brief?: string;
  callId?: string;
  calledNumber?: string;
  callingNumber?: string;
  chatbotId?: string;
  contact?: GetJobResponseBodyJobTasksContact;
  conversation?: GetJobResponseBodyJobTasksConversation[];
  duration?: number;
  jobId?: string;
  planedTime?: number;
  scenarioId?: string;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      actualTime: 'ActualTime',
      brief: 'Brief',
      callId: 'CallId',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      chatbotId: 'ChatbotId',
      contact: 'Contact',
      conversation: 'Conversation',
      duration: 'Duration',
      jobId: 'JobId',
      planedTime: 'PlanedTime',
      scenarioId: 'ScenarioId',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualTime: 'number',
      brief: 'string',
      callId: 'string',
      calledNumber: 'string',
      callingNumber: 'string',
      chatbotId: 'string',
      contact: GetJobResponseBodyJobTasksContact,
      conversation: { 'type': 'array', 'itemType': GetJobResponseBodyJobTasksConversation },
      duration: 'number',
      jobId: 'string',
      planedTime: 'number',
      scenarioId: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJob extends $tea.Model {
  callingNumbers?: string[];
  contacts?: GetJobResponseBodyJobContacts[];
  extras?: GetJobResponseBodyJobExtras[];
  failureReason?: string;
  groupId?: string;
  jobId?: string;
  priority?: number;
  referenceId?: string;
  scenarioId?: string;
  status?: string;
  strategyId?: string;
  summary?: GetJobResponseBodyJobSummary[];
  systemPriority?: number;
  tasks?: GetJobResponseBodyJobTasks[];
  static names(): { [key: string]: string } {
    return {
      callingNumbers: 'CallingNumbers',
      contacts: 'Contacts',
      extras: 'Extras',
      failureReason: 'FailureReason',
      groupId: 'GroupId',
      jobId: 'JobId',
      priority: 'Priority',
      referenceId: 'ReferenceId',
      scenarioId: 'ScenarioId',
      status: 'Status',
      strategyId: 'StrategyId',
      summary: 'Summary',
      systemPriority: 'SystemPriority',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      contacts: { 'type': 'array', 'itemType': GetJobResponseBodyJobContacts },
      extras: { 'type': 'array', 'itemType': GetJobResponseBodyJobExtras },
      failureReason: 'string',
      groupId: 'string',
      jobId: 'string',
      priority: 'number',
      referenceId: 'string',
      scenarioId: 'string',
      status: 'string',
      strategyId: 'string',
      summary: { 'type': 'array', 'itemType': GetJobResponseBodyJobSummary },
      systemPriority: 'number',
      tasks: { 'type': 'array', 'itemType': GetJobResponseBodyJobTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobDataUploadParamsResponseBodyUploadParams extends $tea.Model {
  accessId?: string;
  expire?: number;
  folder?: string;
  host?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      expire: 'Expire',
      folder: 'Folder',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      expire: 'number',
      folder: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobGroupResponseBodyJobGroupProgressCategories extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobGroupResponseBodyJobGroupProgress extends $tea.Model {
  categories?: GetJobGroupResponseBodyJobGroupProgressCategories[];
  duration?: number;
  startTime?: number;
  status?: string;
  totalCompleted?: number;
  totalJobs?: number;
  totalNotAnswered?: number;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      duration: 'Duration',
      startTime: 'StartTime',
      status: 'Status',
      totalCompleted: 'TotalCompleted',
      totalJobs: 'TotalJobs',
      totalNotAnswered: 'TotalNotAnswered',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': GetJobGroupResponseBodyJobGroupProgressCategories },
      duration: 'number',
      startTime: 'number',
      status: 'string',
      totalCompleted: 'number',
      totalJobs: 'number',
      totalNotAnswered: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobGroupResponseBodyJobGroupStrategyWorkingTime extends $tea.Model {
  beginTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobGroupResponseBodyJobGroupStrategy extends $tea.Model {
  customized?: string;
  description?: string;
  endTime?: number;
  followUpStrategy?: string;
  id?: string;
  isTemplate?: boolean;
  maxAttemptsPerDay?: number;
  minAttemptInterval?: number;
  name?: string;
  repeatBy?: string;
  repeatDays?: string[];
  routingStrategy?: string;
  startTime?: number;
  type?: string;
  workingTime?: GetJobGroupResponseBodyJobGroupStrategyWorkingTime[];
  static names(): { [key: string]: string } {
    return {
      customized: 'Customized',
      description: 'Description',
      endTime: 'EndTime',
      followUpStrategy: 'FollowUpStrategy',
      id: 'Id',
      isTemplate: 'IsTemplate',
      maxAttemptsPerDay: 'MaxAttemptsPerDay',
      minAttemptInterval: 'MinAttemptInterval',
      name: 'Name',
      repeatBy: 'RepeatBy',
      repeatDays: 'RepeatDays',
      routingStrategy: 'RoutingStrategy',
      startTime: 'StartTime',
      type: 'Type',
      workingTime: 'WorkingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customized: 'string',
      description: 'string',
      endTime: 'number',
      followUpStrategy: 'string',
      id: 'string',
      isTemplate: 'boolean',
      maxAttemptsPerDay: 'number',
      minAttemptInterval: 'number',
      name: 'string',
      repeatBy: 'string',
      repeatDays: { 'type': 'array', 'itemType': 'string' },
      routingStrategy: 'string',
      startTime: 'number',
      type: 'string',
      workingTime: { 'type': 'array', 'itemType': GetJobGroupResponseBodyJobGroupStrategyWorkingTime },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobGroupResponseBodyJobGroup extends $tea.Model {
  callingNumbers?: string[];
  creationTime?: number;
  description?: string;
  id?: string;
  jobFilePath?: string;
  name?: string;
  progress?: GetJobGroupResponseBodyJobGroupProgress;
  scenarioId?: string;
  strategy?: GetJobGroupResponseBodyJobGroupStrategy;
  static names(): { [key: string]: string } {
    return {
      callingNumbers: 'CallingNumbers',
      creationTime: 'CreationTime',
      description: 'Description',
      id: 'Id',
      jobFilePath: 'JobFilePath',
      name: 'Name',
      progress: 'Progress',
      scenarioId: 'ScenarioId',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      creationTime: 'number',
      description: 'string',
      id: 'string',
      jobFilePath: 'string',
      name: 'string',
      progress: GetJobGroupResponseBodyJobGroupProgress,
      scenarioId: 'string',
      strategy: GetJobGroupResponseBodyJobGroupStrategy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobListResponseBodyJobsListContacts extends $tea.Model {
  contactId?: string;
  contactName?: string;
  honorific?: string;
  jobId?: string;
  phoneNumber?: string;
  referenceId?: string;
  role?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      contactName: 'ContactName',
      honorific: 'Honorific',
      jobId: 'JobId',
      phoneNumber: 'PhoneNumber',
      referenceId: 'ReferenceId',
      role: 'Role',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      contactName: 'string',
      honorific: 'string',
      jobId: 'string',
      phoneNumber: 'string',
      referenceId: 'string',
      role: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobListResponseBodyJobsListExtras extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobListResponseBodyJobsListSummary extends $tea.Model {
  category?: string;
  content?: string;
  conversationDetailId?: string;
  groupId?: string;
  jobId?: string;
  summaryId?: string;
  summaryName?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      content: 'Content',
      conversationDetailId: 'ConversationDetailId',
      groupId: 'GroupId',
      jobId: 'JobId',
      summaryId: 'SummaryId',
      summaryName: 'SummaryName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      content: 'string',
      conversationDetailId: 'string',
      groupId: 'string',
      jobId: 'string',
      summaryId: 'string',
      summaryName: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobListResponseBodyJobsList extends $tea.Model {
  callingNumbers?: string[];
  contacts?: GetJobListResponseBodyJobsListContacts[];
  extras?: GetJobListResponseBodyJobsListExtras[];
  failureReason?: string;
  groupId?: string;
  jobId?: string;
  priority?: number;
  referenceId?: string;
  scenarioId?: string;
  status?: string;
  strategyId?: string;
  summary?: GetJobListResponseBodyJobsListSummary[];
  systemPriority?: number;
  static names(): { [key: string]: string } {
    return {
      callingNumbers: 'CallingNumbers',
      contacts: 'Contacts',
      extras: 'Extras',
      failureReason: 'FailureReason',
      groupId: 'GroupId',
      jobId: 'JobId',
      priority: 'Priority',
      referenceId: 'ReferenceId',
      scenarioId: 'ScenarioId',
      status: 'Status',
      strategyId: 'StrategyId',
      summary: 'Summary',
      systemPriority: 'SystemPriority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      contacts: { 'type': 'array', 'itemType': GetJobListResponseBodyJobsListContacts },
      extras: { 'type': 'array', 'itemType': GetJobListResponseBodyJobsListExtras },
      failureReason: 'string',
      groupId: 'string',
      jobId: 'string',
      priority: 'number',
      referenceId: 'string',
      scenarioId: 'string',
      status: 'string',
      strategyId: 'string',
      summary: { 'type': 'array', 'itemType': GetJobListResponseBodyJobsListSummary },
      systemPriority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobListResponseBodyJobs extends $tea.Model {
  list?: GetJobListResponseBodyJobsList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': GetJobListResponseBodyJobsList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusByCallIdResponseBodyJobContacts extends $tea.Model {
  contactId?: string;
  contactName?: string;
  honorific?: string;
  jobId?: string;
  phoneNumber?: string;
  referenceId?: string;
  role?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      contactName: 'ContactName',
      honorific: 'Honorific',
      jobId: 'JobId',
      phoneNumber: 'PhoneNumber',
      referenceId: 'ReferenceId',
      role: 'Role',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      contactName: 'string',
      honorific: 'string',
      jobId: 'string',
      phoneNumber: 'string',
      referenceId: 'string',
      role: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusByCallIdResponseBodyJobExtras extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusByCallIdResponseBodyJobSummary extends $tea.Model {
  category?: string;
  content?: string;
  summaryId?: string;
  summaryName?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      content: 'Content',
      summaryId: 'SummaryId',
      summaryName: 'SummaryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      content: 'string',
      summaryId: 'string',
      summaryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusByCallIdResponseBodyJobTasksContact extends $tea.Model {
  contactId?: string;
  contactName?: string;
  honorific?: string;
  jobId?: string;
  phoneNumber?: string;
  referenceId?: string;
  role?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      contactName: 'ContactName',
      honorific: 'Honorific',
      jobId: 'JobId',
      phoneNumber: 'PhoneNumber',
      referenceId: 'ReferenceId',
      role: 'Role',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      contactName: 'string',
      honorific: 'string',
      jobId: 'string',
      phoneNumber: 'string',
      referenceId: 'string',
      role: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusByCallIdResponseBodyJobTasksConversationSummary extends $tea.Model {
  category?: string;
  content?: string;
  summaryId?: string;
  summaryName?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      content: 'Content',
      summaryId: 'SummaryId',
      summaryName: 'SummaryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      content: 'string',
      summaryId: 'string',
      summaryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusByCallIdResponseBodyJobTasksConversation extends $tea.Model {
  conversationDetailId?: string;
  script?: string;
  speaker?: string;
  summary?: GetJobStatusByCallIdResponseBodyJobTasksConversationSummary[];
  taskId?: string;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      conversationDetailId: 'ConversationDetailId',
      script: 'Script',
      speaker: 'Speaker',
      summary: 'Summary',
      taskId: 'TaskId',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationDetailId: 'string',
      script: 'string',
      speaker: 'string',
      summary: { 'type': 'array', 'itemType': GetJobStatusByCallIdResponseBodyJobTasksConversationSummary },
      taskId: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusByCallIdResponseBodyJobTasks extends $tea.Model {
  actualTime?: number;
  brief?: string;
  callId?: string;
  calledNumber?: string;
  callingNumber?: string;
  chatbotId?: string;
  contact?: GetJobStatusByCallIdResponseBodyJobTasksContact;
  conversation?: GetJobStatusByCallIdResponseBodyJobTasksConversation[];
  duration?: number;
  endTime?: number;
  jobId?: string;
  planedTime?: number;
  scenarioId?: string;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      actualTime: 'ActualTime',
      brief: 'Brief',
      callId: 'CallId',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      chatbotId: 'ChatbotId',
      contact: 'Contact',
      conversation: 'Conversation',
      duration: 'Duration',
      endTime: 'EndTime',
      jobId: 'JobId',
      planedTime: 'PlanedTime',
      scenarioId: 'ScenarioId',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualTime: 'number',
      brief: 'string',
      callId: 'string',
      calledNumber: 'string',
      callingNumber: 'string',
      chatbotId: 'string',
      contact: GetJobStatusByCallIdResponseBodyJobTasksContact,
      conversation: { 'type': 'array', 'itemType': GetJobStatusByCallIdResponseBodyJobTasksConversation },
      duration: 'number',
      endTime: 'number',
      jobId: 'string',
      planedTime: 'number',
      scenarioId: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusByCallIdResponseBodyJob extends $tea.Model {
  callingNumbers?: string[];
  contacts?: GetJobStatusByCallIdResponseBodyJobContacts[];
  extras?: GetJobStatusByCallIdResponseBodyJobExtras[];
  failureReason?: string;
  groupId?: string;
  jobId?: string;
  priority?: number;
  referenceId?: string;
  scenarioId?: string;
  status?: string;
  strategyId?: string;
  summary?: GetJobStatusByCallIdResponseBodyJobSummary[];
  tasks?: GetJobStatusByCallIdResponseBodyJobTasks[];
  static names(): { [key: string]: string } {
    return {
      callingNumbers: 'CallingNumbers',
      contacts: 'Contacts',
      extras: 'Extras',
      failureReason: 'FailureReason',
      groupId: 'GroupId',
      jobId: 'JobId',
      priority: 'Priority',
      referenceId: 'ReferenceId',
      scenarioId: 'ScenarioId',
      status: 'Status',
      strategyId: 'StrategyId',
      summary: 'Summary',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      contacts: { 'type': 'array', 'itemType': GetJobStatusByCallIdResponseBodyJobContacts },
      extras: { 'type': 'array', 'itemType': GetJobStatusByCallIdResponseBodyJobExtras },
      failureReason: 'string',
      groupId: 'string',
      jobId: 'string',
      priority: 'number',
      referenceId: 'string',
      scenarioId: 'string',
      status: 'string',
      strategyId: 'string',
      summary: { 'type': 'array', 'itemType': GetJobStatusByCallIdResponseBodyJobSummary },
      tasks: { 'type': 'array', 'itemType': GetJobStatusByCallIdResponseBodyJobTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobTemplateDownloadParamsResponseBodyDownloadParams extends $tea.Model {
  signatureUrl?: string;
  static names(): { [key: string]: string } {
    return {
      signatureUrl: 'SignatureUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signatureUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNumberRegionInfoResponseBodyPhoneNumber extends $tea.Model {
  city?: string;
  number?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      number: 'Number',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      number: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPredictiveJobGroupResponseBodyJobGroupProgressCategories extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPredictiveJobGroupResponseBodyJobGroupProgress extends $tea.Model {
  categories?: GetPredictiveJobGroupResponseBodyJobGroupProgressCategories[];
  duration?: number;
  startTime?: number;
  status?: string;
  totalCompleted?: number;
  totalJobs?: number;
  totalNotAnswered?: number;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      duration: 'Duration',
      startTime: 'StartTime',
      status: 'Status',
      totalCompleted: 'TotalCompleted',
      totalJobs: 'TotalJobs',
      totalNotAnswered: 'TotalNotAnswered',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': GetPredictiveJobGroupResponseBodyJobGroupProgressCategories },
      duration: 'number',
      startTime: 'number',
      status: 'string',
      totalCompleted: 'number',
      totalJobs: 'number',
      totalNotAnswered: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPredictiveJobGroupResponseBodyJobGroupStrategyWorkingTime extends $tea.Model {
  beginTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPredictiveJobGroupResponseBodyJobGroupStrategy extends $tea.Model {
  endTime?: number;
  maxAttemptsPerDay?: number;
  minAttemptInterval?: number;
  startTime?: number;
  strategyId?: string;
  workingTime?: GetPredictiveJobGroupResponseBodyJobGroupStrategyWorkingTime[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      maxAttemptsPerDay: 'MaxAttemptsPerDay',
      minAttemptInterval: 'MinAttemptInterval',
      startTime: 'StartTime',
      strategyId: 'StrategyId',
      workingTime: 'WorkingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      maxAttemptsPerDay: 'number',
      minAttemptInterval: 'number',
      startTime: 'number',
      strategyId: 'string',
      workingTime: { 'type': 'array', 'itemType': GetPredictiveJobGroupResponseBodyJobGroupStrategyWorkingTime },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPredictiveJobGroupResponseBodyJobGroup extends $tea.Model {
  creationTime?: number;
  description?: string;
  instanceId?: string;
  jobGroupId?: string;
  name?: string;
  progress?: GetPredictiveJobGroupResponseBodyJobGroupProgress;
  ratio?: number;
  skillGroupId?: string;
  skillGroupName?: string;
  strategy?: GetPredictiveJobGroupResponseBodyJobGroupStrategy;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      name: 'Name',
      progress: 'Progress',
      ratio: 'Ratio',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'number',
      description: 'string',
      instanceId: 'string',
      jobGroupId: 'string',
      name: 'string',
      progress: GetPredictiveJobGroupResponseBodyJobGroupProgress,
      ratio: 'number',
      skillGroupId: 'string',
      skillGroupName: 'string',
      strategy: GetPredictiveJobGroupResponseBodyJobGroupStrategy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPredictiveTaskDataResponseBodyData extends $tea.Model {
  abandoned?: boolean;
  answered?: boolean;
  connected?: boolean;
  contactId?: string;
  dialDuration?: number;
  endTime?: number;
  jobGroupId?: string;
  queueDuration?: number;
  startTime?: number;
  talkDuration?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      abandoned: 'Abandoned',
      answered: 'Answered',
      connected: 'Connected',
      contactId: 'ContactId',
      dialDuration: 'DialDuration',
      endTime: 'EndTime',
      jobGroupId: 'JobGroupId',
      queueDuration: 'QueueDuration',
      startTime: 'StartTime',
      talkDuration: 'TalkDuration',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandoned: 'boolean',
      answered: 'boolean',
      connected: 'boolean',
      contactId: 'string',
      dialDuration: 'number',
      endTime: 'number',
      jobGroupId: 'string',
      queueDuration: 'number',
      startTime: 'number',
      talkDuration: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenarioResponseBodyScenarioStrategyWorkingTime extends $tea.Model {
  beginTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenarioResponseBodyScenarioStrategy extends $tea.Model {
  customized?: string;
  description?: string;
  endTime?: number;
  followUpStrategy?: string;
  id?: string;
  isTemplate?: boolean;
  maxAttemptsPerDay?: number;
  minAttemptInterval?: number;
  name?: string;
  repeatBy?: string;
  repeatDays?: string[];
  routingStrategy?: string;
  startTime?: number;
  type?: string;
  workingTime?: GetScenarioResponseBodyScenarioStrategyWorkingTime[];
  static names(): { [key: string]: string } {
    return {
      customized: 'Customized',
      description: 'Description',
      endTime: 'EndTime',
      followUpStrategy: 'FollowUpStrategy',
      id: 'Id',
      isTemplate: 'IsTemplate',
      maxAttemptsPerDay: 'MaxAttemptsPerDay',
      minAttemptInterval: 'MinAttemptInterval',
      name: 'Name',
      repeatBy: 'RepeatBy',
      repeatDays: 'RepeatDays',
      routingStrategy: 'RoutingStrategy',
      startTime: 'StartTime',
      type: 'Type',
      workingTime: 'WorkingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customized: 'string',
      description: 'string',
      endTime: 'number',
      followUpStrategy: 'string',
      id: 'string',
      isTemplate: 'boolean',
      maxAttemptsPerDay: 'number',
      minAttemptInterval: 'number',
      name: 'string',
      repeatBy: 'string',
      repeatDays: { 'type': 'array', 'itemType': 'string' },
      routingStrategy: 'string',
      startTime: 'number',
      type: 'string',
      workingTime: { 'type': 'array', 'itemType': GetScenarioResponseBodyScenarioStrategyWorkingTime },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenarioResponseBodyScenarioSurveysIntents extends $tea.Model {
  intentId?: string;
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      intentId: 'IntentId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentId: 'string',
      nodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenarioResponseBodyScenarioSurveys extends $tea.Model {
  beebotId?: string;
  description?: string;
  id?: string;
  intents?: GetScenarioResponseBodyScenarioSurveysIntents[];
  name?: string;
  role?: string;
  round?: number;
  static names(): { [key: string]: string } {
    return {
      beebotId: 'BeebotId',
      description: 'Description',
      id: 'Id',
      intents: 'Intents',
      name: 'Name',
      role: 'Role',
      round: 'Round',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beebotId: 'string',
      description: 'string',
      id: 'string',
      intents: { 'type': 'array', 'itemType': GetScenarioResponseBodyScenarioSurveysIntents },
      name: 'string',
      role: 'string',
      round: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenarioResponseBodyScenarioVariables extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenarioResponseBodyScenario extends $tea.Model {
  description?: string;
  id?: string;
  isTemplate?: boolean;
  name?: string;
  strategy?: GetScenarioResponseBodyScenarioStrategy;
  surveys?: GetScenarioResponseBodyScenarioSurveys[];
  type?: string;
  variables?: GetScenarioResponseBodyScenarioVariables[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      isTemplate: 'IsTemplate',
      name: 'Name',
      strategy: 'Strategy',
      surveys: 'Surveys',
      type: 'Type',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
      isTemplate: 'boolean',
      name: 'string',
      strategy: GetScenarioResponseBodyScenarioStrategy,
      surveys: { 'type': 'array', 'itemType': GetScenarioResponseBodyScenarioSurveys },
      type: 'string',
      variables: { 'type': 'array', 'itemType': GetScenarioResponseBodyScenarioVariables },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceExtensionsResponseBodyServiceExtensionsServiceExtension extends $tea.Model {
  name?: string;
  number?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      number: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceExtensionsResponseBodyServiceExtensions extends $tea.Model {
  serviceExtension?: GetServiceExtensionsResponseBodyServiceExtensionsServiceExtension[];
  static names(): { [key: string]: string } {
    return {
      serviceExtension: 'ServiceExtension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceExtension: { 'type': 'array', 'itemType': GetServiceExtensionsResponseBodyServiceExtensionsServiceExtension },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsConfigResponseBodySmsConfigsSmsConfig extends $tea.Model {
  description?: string;
  extra?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  instance?: string;
  name?: string;
  scenario?: number;
  signName?: string;
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      extra: 'Extra',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      instance: 'Instance',
      name: 'Name',
      scenario: 'Scenario',
      signName: 'SignName',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      extra: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      instance: 'string',
      name: 'string',
      scenario: 'number',
      signName: 'string',
      templateCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsConfigResponseBodySmsConfigs extends $tea.Model {
  smsConfig?: GetSmsConfigResponseBodySmsConfigsSmsConfig[];
  static names(): { [key: string]: string } {
    return {
      smsConfig: 'SmsConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      smsConfig: { 'type': 'array', 'itemType': GetSmsConfigResponseBodySmsConfigsSmsConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSurveyResponseBodySurveyAsrCustomModel extends $tea.Model {
  corpora?: string;
  customModelStatus?: number;
  static names(): { [key: string]: string } {
    return {
      corpora: 'Corpora',
      customModelStatus: 'CustomModelStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpora: 'string',
      customModelStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSurveyResponseBodySurveyFlow extends $tea.Model {
  flowId?: string;
  flowJson?: string;
  isPublished?: boolean;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      flowJson: 'FlowJson',
      isPublished: 'IsPublished',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      flowJson: 'string',
      isPublished: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSurveyResponseBodySurvey extends $tea.Model {
  asrCustomModel?: GetSurveyResponseBodySurveyAsrCustomModel;
  description?: string;
  flow?: GetSurveyResponseBodySurveyFlow;
  globalQuestions?: string;
  hotWords?: string;
  id?: string;
  name?: string;
  role?: string;
  round?: number;
  scenarioUuid?: string;
  speechOptimizationParam?: string;
  static names(): { [key: string]: string } {
    return {
      asrCustomModel: 'AsrCustomModel',
      description: 'Description',
      flow: 'Flow',
      globalQuestions: 'GlobalQuestions',
      hotWords: 'HotWords',
      id: 'Id',
      name: 'Name',
      role: 'Role',
      round: 'Round',
      scenarioUuid: 'ScenarioUuid',
      speechOptimizationParam: 'SpeechOptimizationParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrCustomModel: GetSurveyResponseBodySurveyAsrCustomModel,
      description: 'string',
      flow: GetSurveyResponseBodySurveyFlow,
      globalQuestions: 'string',
      hotWords: 'string',
      id: 'string',
      name: 'string',
      role: 'string',
      round: 'number',
      scenarioUuid: 'string',
      speechOptimizationParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskListResponseBodyTasksContact extends $tea.Model {
  contactId?: string;
  contactName?: string;
  honorific?: string;
  jobId?: string;
  phoneNumber?: string;
  referenceId?: string;
  role?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      contactName: 'ContactName',
      honorific: 'Honorific',
      jobId: 'JobId',
      phoneNumber: 'PhoneNumber',
      referenceId: 'ReferenceId',
      role: 'Role',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      contactName: 'string',
      honorific: 'string',
      jobId: 'string',
      phoneNumber: 'string',
      referenceId: 'string',
      role: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskListResponseBodyTasksConversationSummary extends $tea.Model {
  category?: string;
  content?: string;
  summaryName?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      content: 'Content',
      summaryName: 'SummaryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      content: 'string',
      summaryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskListResponseBodyTasksConversation extends $tea.Model {
  script?: string;
  speaker?: string;
  summary?: GetTaskListResponseBodyTasksConversationSummary[];
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      script: 'Script',
      speaker: 'Speaker',
      summary: 'Summary',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      script: 'string',
      speaker: 'string',
      summary: { 'type': 'array', 'itemType': GetTaskListResponseBodyTasksConversationSummary },
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskListResponseBodyTasks extends $tea.Model {
  actualTime?: number;
  brief?: string;
  callId?: string;
  calledNumber?: string;
  callingNumber?: string;
  chatbotId?: string;
  contact?: GetTaskListResponseBodyTasksContact;
  conversation?: GetTaskListResponseBodyTasksConversation[];
  duration?: number;
  jobId?: string;
  planedTime?: number;
  scenarioId?: string;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      actualTime: 'ActualTime',
      brief: 'Brief',
      callId: 'CallId',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      chatbotId: 'ChatbotId',
      contact: 'Contact',
      conversation: 'Conversation',
      duration: 'Duration',
      jobId: 'JobId',
      planedTime: 'PlanedTime',
      scenarioId: 'ScenarioId',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualTime: 'number',
      brief: 'string',
      callId: 'string',
      calledNumber: 'string',
      callingNumber: 'string',
      chatbotId: 'string',
      contact: GetTaskListResponseBodyTasksContact,
      conversation: { 'type': 'array', 'itemType': GetTaskListResponseBodyTasksConversation },
      duration: 'number',
      jobId: 'string',
      planedTime: 'number',
      scenarioId: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUserDetail extends $tea.Model {
  department?: string;
  displayName?: string;
  email?: string;
  loginName?: string;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      department: 'Department',
      displayName: 'DisplayName',
      email: 'Email',
      loginName: 'LoginName',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      department: 'string',
      displayName: 'string',
      email: 'string',
      loginName: 'string',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUserRolesRole extends $tea.Model {
  instanceId?: string;
  roleDescription?: string;
  roleId?: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      roleDescription: 'RoleDescription',
      roleId: 'RoleId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      roleDescription: 'string',
      roleId: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUserRoles extends $tea.Model {
  role?: GetUserResponseBodyUserRolesRole[];
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: { 'type': 'array', 'itemType': GetUserResponseBodyUserRolesRole },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUserSkillLevelsSkillLevelSkill extends $tea.Model {
  instanceId?: string;
  skillGroupDescription?: string;
  skillGroupId?: string;
  skillGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupDescription: 'SkillGroupDescription',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupDescription: 'string',
      skillGroupId: 'string',
      skillGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUserSkillLevelsSkillLevel extends $tea.Model {
  level?: number;
  skill?: GetUserResponseBodyUserSkillLevelsSkillLevelSkill;
  skillLevelId?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      skill: 'Skill',
      skillLevelId: 'SkillLevelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'number',
      skill: GetUserResponseBodyUserSkillLevelsSkillLevelSkill,
      skillLevelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUserSkillLevels extends $tea.Model {
  skillLevel?: GetUserResponseBodyUserSkillLevelsSkillLevel[];
  static names(): { [key: string]: string } {
    return {
      skillLevel: 'SkillLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillLevel: { 'type': 'array', 'itemType': GetUserResponseBodyUserSkillLevelsSkillLevel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUser extends $tea.Model {
  detail?: GetUserResponseBodyUserDetail;
  instanceId?: string;
  ramId?: string;
  roles?: GetUserResponseBodyUserRoles;
  skillLevels?: GetUserResponseBodyUserSkillLevels;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      instanceId: 'InstanceId',
      ramId: 'RamId',
      roles: 'Roles',
      skillLevels: 'SkillLevels',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: GetUserResponseBodyUserDetail,
      instanceId: 'string',
      ramId: 'string',
      roles: GetUserResponseBodyUserRoles,
      skillLevels: GetUserResponseBodyUserSkillLevels,
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByExtensionResponseBodyUserDetail extends $tea.Model {
  department?: string;
  displayName?: string;
  email?: string;
  extension?: string;
  loginName?: string;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      department: 'Department',
      displayName: 'DisplayName',
      email: 'Email',
      extension: 'Extension',
      loginName: 'LoginName',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      department: 'string',
      displayName: 'string',
      email: 'string',
      extension: 'string',
      loginName: 'string',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByExtensionResponseBodyUserRoles extends $tea.Model {
  instanceId?: string;
  roleDescription?: string;
  roleId?: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      roleDescription: 'RoleDescription',
      roleId: 'RoleId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      roleDescription: 'string',
      roleId: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByExtensionResponseBodyUserSkillLevelsSkill extends $tea.Model {
  instanceId?: string;
  skillGroupDescription?: string;
  skillGroupId?: string;
  skillGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupDescription: 'SkillGroupDescription',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupDescription: 'string',
      skillGroupId: 'string',
      skillGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByExtensionResponseBodyUserSkillLevels extends $tea.Model {
  level?: number;
  skill?: GetUserByExtensionResponseBodyUserSkillLevelsSkill;
  skillLevelId?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      skill: 'Skill',
      skillLevelId: 'SkillLevelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'number',
      skill: GetUserByExtensionResponseBodyUserSkillLevelsSkill,
      skillLevelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByExtensionResponseBodyUser extends $tea.Model {
  detail?: GetUserByExtensionResponseBodyUserDetail;
  instanceId?: string;
  ramId?: string;
  roles?: GetUserByExtensionResponseBodyUserRoles[];
  skillLevels?: GetUserByExtensionResponseBodyUserSkillLevels[];
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      instanceId: 'InstanceId',
      ramId: 'RamId',
      roles: 'Roles',
      skillLevels: 'SkillLevels',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: GetUserByExtensionResponseBodyUserDetail,
      instanceId: 'string',
      ramId: 'string',
      roles: { 'type': 'array', 'itemType': GetUserByExtensionResponseBodyUserRoles },
      skillLevels: { 'type': 'array', 'itemType': GetUserByExtensionResponseBodyUserSkillLevels },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentDevicesResponseBodyAgentDeviceListAgentDevice extends $tea.Model {
  browserVersion?: string;
  clientIp?: string;
  clientPort?: string;
  instanceId?: string;
  isLogin?: number;
  loginTime?: number;
  ramId?: number;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      browserVersion: 'BrowserVersion',
      clientIp: 'ClientIp',
      clientPort: 'ClientPort',
      instanceId: 'InstanceId',
      isLogin: 'IsLogin',
      loginTime: 'LoginTime',
      ramId: 'RamId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      browserVersion: 'string',
      clientIp: 'string',
      clientPort: 'string',
      instanceId: 'string',
      isLogin: 'number',
      loginTime: 'number',
      ramId: 'number',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentDevicesResponseBodyAgentDeviceList extends $tea.Model {
  agentDevice?: ListAgentDevicesResponseBodyAgentDeviceListAgentDevice[];
  static names(): { [key: string]: string } {
    return {
      agentDevice: 'AgentDevice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentDevice: { 'type': 'array', 'itemType': ListAgentDevicesResponseBodyAgentDeviceListAgentDevice },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentEventsResponseBodyAgentEventListAgentEventSkillGroupIdsSkillGroup extends $tea.Model {
  skillGroupId?: string;
  skillGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupId: 'string',
      skillGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentEventsResponseBodyAgentEventListAgentEventSkillGroupIds extends $tea.Model {
  skillGroup?: ListAgentEventsResponseBodyAgentEventListAgentEventSkillGroupIdsSkillGroup[];
  static names(): { [key: string]: string } {
    return {
      skillGroup: 'SkillGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroup: { 'type': 'array', 'itemType': ListAgentEventsResponseBodyAgentEventListAgentEventSkillGroupIdsSkillGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentEventsResponseBodyAgentEventListAgentEvent extends $tea.Model {
  event?: string;
  eventTime?: number;
  instanceId?: string;
  loginName?: string;
  ramId?: number;
  skillGroupIds?: ListAgentEventsResponseBodyAgentEventListAgentEventSkillGroupIds;
  static names(): { [key: string]: string } {
    return {
      event: 'Event',
      eventTime: 'EventTime',
      instanceId: 'InstanceId',
      loginName: 'LoginName',
      ramId: 'RamId',
      skillGroupIds: 'SkillGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: 'string',
      eventTime: 'number',
      instanceId: 'string',
      loginName: 'string',
      ramId: 'number',
      skillGroupIds: ListAgentEventsResponseBodyAgentEventListAgentEventSkillGroupIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentEventsResponseBodyAgentEventList extends $tea.Model {
  agentEvent?: ListAgentEventsResponseBodyAgentEventListAgentEvent[];
  static names(): { [key: string]: string } {
    return {
      agentEvent: 'AgentEvent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentEvent: { 'type': 'array', 'itemType': ListAgentEventsResponseBodyAgentEventListAgentEvent },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentStateLogsResponseBodyAgentStateLogPageList extends $tea.Model {
  connectId?: string;
  contactId?: string;
  counterParty?: string;
  instanceId?: string;
  ramId?: number;
  skillGroupIds?: string;
  state?: string;
  stateCode?: string;
  stateTime?: number;
  static names(): { [key: string]: string } {
    return {
      connectId: 'ConnectId',
      contactId: 'ContactId',
      counterParty: 'CounterParty',
      instanceId: 'InstanceId',
      ramId: 'RamId',
      skillGroupIds: 'SkillGroupIds',
      state: 'State',
      stateCode: 'StateCode',
      stateTime: 'StateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectId: 'string',
      contactId: 'string',
      counterParty: 'string',
      instanceId: 'string',
      ramId: 'number',
      skillGroupIds: 'string',
      state: 'string',
      stateCode: 'string',
      stateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentStateLogsResponseBodyAgentStateLogPage extends $tea.Model {
  list?: ListAgentStateLogsResponseBodyAgentStateLogPageList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListAgentStateLogsResponseBodyAgentStateLogPageList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentStatesResponseBodyDataListRealTimeAgentState extends $tea.Model {
  agentId?: string;
  agentName?: string;
  dn?: string;
  instanceId?: string;
  loginName?: string;
  state?: string;
  stateDuration?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      dn: 'Dn',
      instanceId: 'InstanceId',
      loginName: 'LoginName',
      state: 'State',
      stateDuration: 'StateDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      dn: 'string',
      instanceId: 'string',
      loginName: 'string',
      state: 'string',
      stateDuration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentStatesResponseBodyDataList extends $tea.Model {
  realTimeAgentState?: ListAgentStatesResponseBodyDataListRealTimeAgentState[];
  static names(): { [key: string]: string } {
    return {
      realTimeAgentState: 'RealTimeAgentState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realTimeAgentState: { 'type': 'array', 'itemType': ListAgentStatesResponseBodyDataListRealTimeAgentState },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentStatesResponseBodyData extends $tea.Model {
  list?: ListAgentStatesResponseBodyDataList;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: ListAgentStatesResponseBodyDataList,
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsResponseBodyPagedAgentSummaryReportListAgentSummaryReportInbound extends $tea.Model {
  averageRingTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  callsHandled?: number;
  callsOffered?: number;
  handleRate?: number;
  maxRingTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  serviceLevel20?: number;
  totalRingTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsHandled: 'CallsHandled',
      callsOffered: 'CallsOffered',
      handleRate: 'HandleRate',
      maxRingTime: 'MaxRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      serviceLevel20: 'ServiceLevel20',
      totalRingTime: 'TotalRingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageRingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsHandled: 'number',
      callsOffered: 'number',
      handleRate: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      serviceLevel20: 'number',
      totalRingTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsResponseBodyPagedAgentSummaryReportListAgentSummaryReportOutbound extends $tea.Model {
  answerRate?: number;
  averageDialingTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  callsAnswered?: number;
  callsDialed?: number;
  maxDialingTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: string;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  totalDialingTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      answerRate: 'AnswerRate',
      averageDialingTime: 'AverageDialingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsAnswered: 'CallsAnswered',
      callsDialed: 'CallsDialed',
      maxDialingTime: 'MaxDialingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalDialingTime: 'TotalDialingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerRate: 'number',
      averageDialingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsAnswered: 'number',
      callsDialed: 'number',
      maxDialingTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'string',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalDialingTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsResponseBodyPagedAgentSummaryReportListAgentSummaryReportOverall extends $tea.Model {
  averageReadyTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  firstLogInTime?: string;
  lastLogOutTime?: string;
  maxReadyTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  occupancyRate?: number;
  oneTransferCalls?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  totalBreakTime?: number;
  totalCalls?: number;
  totalLoggedInTime?: number;
  totalReadyTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageReadyTime: 'AverageReadyTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      firstLogInTime: 'FirstLogInTime',
      lastLogOutTime: 'LastLogOutTime',
      maxReadyTime: 'MaxReadyTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      occupancyRate: 'OccupancyRate',
      oneTransferCalls: 'OneTransferCalls',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalBreakTime: 'TotalBreakTime',
      totalCalls: 'TotalCalls',
      totalLoggedInTime: 'TotalLoggedInTime',
      totalReadyTime: 'TotalReadyTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageReadyTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      firstLogInTime: 'string',
      lastLogOutTime: 'string',
      maxReadyTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      occupancyRate: 'number',
      oneTransferCalls: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalBreakTime: 'number',
      totalCalls: 'number',
      totalLoggedInTime: 'number',
      totalReadyTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsResponseBodyPagedAgentSummaryReportListAgentSummaryReport extends $tea.Model {
  agentId?: string;
  agentName?: string;
  inbound?: ListAgentSummaryReportsResponseBodyPagedAgentSummaryReportListAgentSummaryReportInbound;
  instanceId?: string;
  loginName?: string;
  outbound?: ListAgentSummaryReportsResponseBodyPagedAgentSummaryReportListAgentSummaryReportOutbound;
  overall?: ListAgentSummaryReportsResponseBodyPagedAgentSummaryReportListAgentSummaryReportOverall;
  skillGroupIds?: string;
  skillGroupNames?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      inbound: 'Inbound',
      instanceId: 'InstanceId',
      loginName: 'LoginName',
      outbound: 'Outbound',
      overall: 'Overall',
      skillGroupIds: 'SkillGroupIds',
      skillGroupNames: 'SkillGroupNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      inbound: ListAgentSummaryReportsResponseBodyPagedAgentSummaryReportListAgentSummaryReportInbound,
      instanceId: 'string',
      loginName: 'string',
      outbound: ListAgentSummaryReportsResponseBodyPagedAgentSummaryReportListAgentSummaryReportOutbound,
      overall: ListAgentSummaryReportsResponseBodyPagedAgentSummaryReportListAgentSummaryReportOverall,
      skillGroupIds: 'string',
      skillGroupNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsResponseBodyPagedAgentSummaryReportList extends $tea.Model {
  agentSummaryReport?: ListAgentSummaryReportsResponseBodyPagedAgentSummaryReportListAgentSummaryReport[];
  static names(): { [key: string]: string } {
    return {
      agentSummaryReport: 'AgentSummaryReport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSummaryReport: { 'type': 'array', 'itemType': ListAgentSummaryReportsResponseBodyPagedAgentSummaryReportListAgentSummaryReport },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsResponseBodyPagedAgentSummaryReport extends $tea.Model {
  list?: ListAgentSummaryReportsResponseBodyPagedAgentSummaryReportList;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: ListAgentSummaryReportsResponseBodyPagedAgentSummaryReportList,
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReportListAgentTimeIntervalReportIntervalListAgentSummaryReportInbound extends $tea.Model {
  averageRingTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  callsHandled?: number;
  callsOffered?: number;
  handleRate?: number;
  maxRingTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  serviceLevel20?: number;
  totalRingTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsHandled: 'CallsHandled',
      callsOffered: 'CallsOffered',
      handleRate: 'HandleRate',
      maxRingTime: 'MaxRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      serviceLevel20: 'ServiceLevel20',
      totalRingTime: 'TotalRingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageRingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsHandled: 'number',
      callsOffered: 'number',
      handleRate: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      serviceLevel20: 'number',
      totalRingTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReportListAgentTimeIntervalReportIntervalListAgentSummaryReportOutbound extends $tea.Model {
  answerRate?: number;
  averageDialingTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  callsAnswered?: number;
  callsDialed?: number;
  maxDialingTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  totalDialingTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      answerRate: 'AnswerRate',
      averageDialingTime: 'AverageDialingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsAnswered: 'CallsAnswered',
      callsDialed: 'CallsDialed',
      maxDialingTime: 'MaxDialingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalDialingTime: 'TotalDialingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerRate: 'number',
      averageDialingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsAnswered: 'number',
      callsDialed: 'number',
      maxDialingTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalDialingTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReportListAgentTimeIntervalReportIntervalListAgentSummaryReportOverall extends $tea.Model {
  averageReadyTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  firstLogInTime?: string;
  lastLogOutTime?: string;
  maxReadyTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  occupancyRate?: number;
  oneTransferCalls?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  totalBreakTime?: number;
  totalCalls?: number;
  totalLoggedInTime?: number;
  totalReadyTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageReadyTime: 'AverageReadyTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      firstLogInTime: 'FirstLogInTime',
      lastLogOutTime: 'LastLogOutTime',
      maxReadyTime: 'MaxReadyTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      occupancyRate: 'OccupancyRate',
      oneTransferCalls: 'OneTransferCalls',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalBreakTime: 'TotalBreakTime',
      totalCalls: 'TotalCalls',
      totalLoggedInTime: 'TotalLoggedInTime',
      totalReadyTime: 'TotalReadyTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageReadyTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      firstLogInTime: 'string',
      lastLogOutTime: 'string',
      maxReadyTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      occupancyRate: 'number',
      oneTransferCalls: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalBreakTime: 'number',
      totalCalls: 'number',
      totalLoggedInTime: 'number',
      totalReadyTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReportListAgentTimeIntervalReportIntervalListAgentSummaryReport extends $tea.Model {
  agentId?: string;
  agentName?: string;
  inbound?: ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReportListAgentTimeIntervalReportIntervalListAgentSummaryReportInbound;
  instanceId?: string;
  loginName?: string;
  outbound?: ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReportListAgentTimeIntervalReportIntervalListAgentSummaryReportOutbound;
  overall?: ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReportListAgentTimeIntervalReportIntervalListAgentSummaryReportOverall;
  skillGroupIds?: string;
  skillGroupNames?: string;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      inbound: 'Inbound',
      instanceId: 'InstanceId',
      loginName: 'LoginName',
      outbound: 'Outbound',
      overall: 'Overall',
      skillGroupIds: 'SkillGroupIds',
      skillGroupNames: 'SkillGroupNames',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      inbound: ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReportListAgentTimeIntervalReportIntervalListAgentSummaryReportInbound,
      instanceId: 'string',
      loginName: 'string',
      outbound: ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReportListAgentTimeIntervalReportIntervalListAgentSummaryReportOutbound,
      overall: ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReportListAgentTimeIntervalReportIntervalListAgentSummaryReportOverall,
      skillGroupIds: 'string',
      skillGroupNames: 'string',
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReportListAgentTimeIntervalReportIntervalList extends $tea.Model {
  agentSummaryReport?: ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReportListAgentTimeIntervalReportIntervalListAgentSummaryReport[];
  static names(): { [key: string]: string } {
    return {
      agentSummaryReport: 'AgentSummaryReport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSummaryReport: { 'type': 'array', 'itemType': ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReportListAgentTimeIntervalReportIntervalListAgentSummaryReport },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReportListAgentTimeIntervalReport extends $tea.Model {
  agentId?: string;
  intervalList?: ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReportListAgentTimeIntervalReportIntervalList;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      intervalList: 'IntervalList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      intervalList: ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReportListAgentTimeIntervalReportIntervalList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReportList extends $tea.Model {
  agentTimeIntervalReport?: ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReportListAgentTimeIntervalReport[];
  static names(): { [key: string]: string } {
    return {
      agentTimeIntervalReport: 'AgentTimeIntervalReport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentTimeIntervalReport: { 'type': 'array', 'itemType': ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReportListAgentTimeIntervalReport },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReport extends $tea.Model {
  list?: ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReportList;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReportList,
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListAgentSummaryReportInbound extends $tea.Model {
  averageRingTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  callsHandled?: number;
  callsOffered?: number;
  handleRate?: number;
  maxRingTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  serviceLevel20?: number;
  totalRingTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsHandled: 'CallsHandled',
      callsOffered: 'CallsOffered',
      handleRate: 'HandleRate',
      maxRingTime: 'MaxRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      serviceLevel20: 'ServiceLevel20',
      totalRingTime: 'TotalRingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageRingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsHandled: 'number',
      callsOffered: 'number',
      handleRate: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      serviceLevel20: 'number',
      totalRingTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListAgentSummaryReportOutbound extends $tea.Model {
  answerRate?: number;
  averageDialingTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  callsAnswered?: number;
  callsDialed?: number;
  maxDialingTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: string;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  totalDialingTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      answerRate: 'AnswerRate',
      averageDialingTime: 'AverageDialingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsAnswered: 'CallsAnswered',
      callsDialed: 'CallsDialed',
      maxDialingTime: 'MaxDialingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalDialingTime: 'TotalDialingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerRate: 'number',
      averageDialingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsAnswered: 'number',
      callsDialed: 'number',
      maxDialingTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'string',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalDialingTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListAgentSummaryReportOverall extends $tea.Model {
  averageReadyTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  maxReadyTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  occupancyRate?: number;
  oneTransferCalls?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  totalBreakTime?: number;
  totalCalls?: number;
  totalLoggedInTime?: number;
  totalReadyTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageReadyTime: 'AverageReadyTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      maxReadyTime: 'MaxReadyTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      occupancyRate: 'OccupancyRate',
      oneTransferCalls: 'OneTransferCalls',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalBreakTime: 'TotalBreakTime',
      totalCalls: 'TotalCalls',
      totalLoggedInTime: 'TotalLoggedInTime',
      totalReadyTime: 'TotalReadyTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageReadyTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      maxReadyTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      occupancyRate: 'number',
      oneTransferCalls: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalBreakTime: 'number',
      totalCalls: 'number',
      totalLoggedInTime: 'number',
      totalReadyTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListAgentSummaryReport extends $tea.Model {
  agentId?: string;
  agentName?: string;
  inbound?: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListAgentSummaryReportInbound;
  instanceId?: string;
  loginName?: string;
  outbound?: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListAgentSummaryReportOutbound;
  overall?: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListAgentSummaryReportOverall;
  skillGroupIds?: string;
  skillGroupNames?: string;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      inbound: 'Inbound',
      instanceId: 'InstanceId',
      loginName: 'LoginName',
      outbound: 'Outbound',
      overall: 'Overall',
      skillGroupIds: 'SkillGroupIds',
      skillGroupNames: 'SkillGroupNames',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      inbound: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListAgentSummaryReportInbound,
      instanceId: 'string',
      loginName: 'string',
      outbound: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListAgentSummaryReportOutbound,
      overall: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListAgentSummaryReportOverall,
      skillGroupIds: 'string',
      skillGroupNames: 'string',
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportList extends $tea.Model {
  agentSummaryReport?: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListAgentSummaryReport[];
  static names(): { [key: string]: string } {
    return {
      agentSummaryReport: 'AgentSummaryReport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSummaryReport: { 'type': 'array', 'itemType': ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListAgentSummaryReport },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReport extends $tea.Model {
  list?: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportList;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportList,
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBasicStatisticsReportSubItemsResponseBodySubItemsListRow extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBasicStatisticsReportSubItemsResponseBodySubItemsList extends $tea.Model {
  basicStatisticsReportSubItemName?: string;
  count?: number;
  percentage?: number;
  row?: ListBasicStatisticsReportSubItemsResponseBodySubItemsListRow[];
  value?: string;
  static names(): { [key: string]: string } {
    return {
      basicStatisticsReportSubItemName: 'BasicStatisticsReportSubItemName',
      count: 'Count',
      percentage: 'Percentage',
      row: 'Row',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicStatisticsReportSubItemName: 'string',
      count: 'number',
      percentage: 'number',
      row: { 'type': 'array', 'itemType': ListBasicStatisticsReportSubItemsResponseBodySubItemsListRow },
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBasicStatisticsReportSubItemsResponseBodySubItems extends $tea.Model {
  list?: ListBasicStatisticsReportSubItemsResponseBodySubItemsList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListBasicStatisticsReportSubItemsResponseBodySubItemsList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallDetailRecordsResponseBodyCallDetailRecordsListCallDetailRecordAgentsCallDetailAgent extends $tea.Model {
  agentId?: string;
  feedback?: string;
  satisfaction?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      feedback: 'Feedback',
      satisfaction: 'Satisfaction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      feedback: 'string',
      satisfaction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallDetailRecordsResponseBodyCallDetailRecordsListCallDetailRecordAgents extends $tea.Model {
  callDetailAgent?: ListCallDetailRecordsResponseBodyCallDetailRecordsListCallDetailRecordAgentsCallDetailAgent[];
  static names(): { [key: string]: string } {
    return {
      callDetailAgent: 'CallDetailAgent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callDetailAgent: { 'type': 'array', 'itemType': ListCallDetailRecordsResponseBodyCallDetailRecordsListCallDetailRecordAgentsCallDetailAgent },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallDetailRecordsResponseBodyCallDetailRecordsListCallDetailRecordRecordingsRecording extends $tea.Model {
  agentId?: string;
  agentName?: string;
  contactId?: string;
  duration?: number;
  fileDescription?: string;
  fileName?: string;
  qualityCheckTaskId?: string;
  qualityCheckTid?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      contactId: 'ContactId',
      duration: 'Duration',
      fileDescription: 'FileDescription',
      fileName: 'FileName',
      qualityCheckTaskId: 'QualityCheckTaskId',
      qualityCheckTid: 'QualityCheckTid',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      contactId: 'string',
      duration: 'number',
      fileDescription: 'string',
      fileName: 'string',
      qualityCheckTaskId: 'string',
      qualityCheckTid: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallDetailRecordsResponseBodyCallDetailRecordsListCallDetailRecordRecordings extends $tea.Model {
  recording?: ListCallDetailRecordsResponseBodyCallDetailRecordsListCallDetailRecordRecordingsRecording[];
  static names(): { [key: string]: string } {
    return {
      recording: 'Recording',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recording: { 'type': 'array', 'itemType': ListCallDetailRecordsResponseBodyCallDetailRecordsListCallDetailRecordRecordingsRecording },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallDetailRecordsResponseBodyCallDetailRecordsListCallDetailRecord extends $tea.Model {
  agentNames?: string;
  agents?: ListCallDetailRecordsResponseBodyCallDetailRecordsListCallDetailRecordAgents;
  calledNumber?: string;
  callingNumber?: string;
  contactDisposition?: string;
  contactId?: string;
  contactType?: string;
  duration?: number;
  feedback?: string;
  instanceId?: string;
  recordings?: ListCallDetailRecordsResponseBodyCallDetailRecordsListCallDetailRecordRecordings;
  satisfaction?: number;
  satisfactionDesc?: string;
  skillGroupIdList?: string;
  skillGroupNames?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentNames: 'AgentNames',
      agents: 'Agents',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      contactDisposition: 'ContactDisposition',
      contactId: 'ContactId',
      contactType: 'ContactType',
      duration: 'Duration',
      feedback: 'Feedback',
      instanceId: 'InstanceId',
      recordings: 'Recordings',
      satisfaction: 'Satisfaction',
      satisfactionDesc: 'SatisfactionDesc',
      skillGroupIdList: 'SkillGroupIdList',
      skillGroupNames: 'SkillGroupNames',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentNames: 'string',
      agents: ListCallDetailRecordsResponseBodyCallDetailRecordsListCallDetailRecordAgents,
      calledNumber: 'string',
      callingNumber: 'string',
      contactDisposition: 'string',
      contactId: 'string',
      contactType: 'string',
      duration: 'number',
      feedback: 'string',
      instanceId: 'string',
      recordings: ListCallDetailRecordsResponseBodyCallDetailRecordsListCallDetailRecordRecordings,
      satisfaction: 'number',
      satisfactionDesc: 'string',
      skillGroupIdList: 'string',
      skillGroupNames: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallDetailRecordsResponseBodyCallDetailRecordsList extends $tea.Model {
  callDetailRecord?: ListCallDetailRecordsResponseBodyCallDetailRecordsListCallDetailRecord[];
  static names(): { [key: string]: string } {
    return {
      callDetailRecord: 'CallDetailRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callDetailRecord: { 'type': 'array', 'itemType': ListCallDetailRecordsResponseBodyCallDetailRecordsListCallDetailRecord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallDetailRecordsResponseBodyCallDetailRecords extends $tea.Model {
  list?: ListCallDetailRecordsResponseBodyCallDetailRecordsList;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: ListCallDetailRecordsResponseBodyCallDetailRecordsList,
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallEventDetailByContactIdResponseBodyDataEventsCallEventDetailDetailData extends $tea.Model {
  eventType?: string;
  hangUper?: string;
  helper?: string;
  satisfactionalResearch?: string;
  skillGroup?: string;
  static names(): { [key: string]: string } {
    return {
      eventType: 'EventType',
      hangUper: 'HangUper',
      helper: 'Helper',
      satisfactionalResearch: 'SatisfactionalResearch',
      skillGroup: 'SkillGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventType: 'string',
      hangUper: 'string',
      helper: 'string',
      satisfactionalResearch: 'string',
      skillGroup: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallEventDetailByContactIdResponseBodyDataEventsCallEventDetail extends $tea.Model {
  agentName?: string;
  callMode?: string;
  detailData?: ListCallEventDetailByContactIdResponseBodyDataEventsCallEventDetailDetailData;
  duration?: number;
  event?: string;
  status?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      callMode: 'CallMode',
      detailData: 'DetailData',
      duration: 'Duration',
      event: 'Event',
      status: 'Status',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      callMode: 'string',
      detailData: ListCallEventDetailByContactIdResponseBodyDataEventsCallEventDetailDetailData,
      duration: 'number',
      event: 'string',
      status: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallEventDetailByContactIdResponseBodyDataEvents extends $tea.Model {
  callEventDetail?: ListCallEventDetailByContactIdResponseBodyDataEventsCallEventDetail[];
  static names(): { [key: string]: string } {
    return {
      callEventDetail: 'CallEventDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callEventDetail: { 'type': 'array', 'itemType': ListCallEventDetailByContactIdResponseBodyDataEventsCallEventDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallEventDetailByContactIdResponseBodyData extends $tea.Model {
  callType?: string;
  callee?: string;
  caller?: string;
  events?: ListCallEventDetailByContactIdResponseBodyDataEvents;
  privacyNumber?: string;
  releaseAgent?: string;
  releaseReason?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      callee: 'Callee',
      caller: 'Caller',
      events: 'Events',
      privacyNumber: 'PrivacyNumber',
      releaseAgent: 'ReleaseAgent',
      releaseReason: 'ReleaseReason',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      callee: 'string',
      caller: 'string',
      events: ListCallEventDetailByContactIdResponseBodyDataEvents,
      privacyNumber: 'string',
      releaseAgent: 'string',
      releaseReason: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallMeasureSummaryReportsResponseBodyCallMeasureSummaryReportListCallMeasureSummaryReport extends $tea.Model {
  day?: string;
  inboundCount?: number;
  inboundDurationByMinute?: number;
  month?: string;
  outboundCount?: number;
  outboundDurationByMinute?: number;
  year?: string;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      inboundCount: 'InboundCount',
      inboundDurationByMinute: 'InboundDurationByMinute',
      month: 'Month',
      outboundCount: 'OutboundCount',
      outboundDurationByMinute: 'OutboundDurationByMinute',
      year: 'Year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'string',
      inboundCount: 'number',
      inboundDurationByMinute: 'number',
      month: 'string',
      outboundCount: 'number',
      outboundDurationByMinute: 'number',
      year: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallMeasureSummaryReportsResponseBodyCallMeasureSummaryReportList extends $tea.Model {
  callMeasureSummaryReport?: ListCallMeasureSummaryReportsResponseBodyCallMeasureSummaryReportListCallMeasureSummaryReport[];
  static names(): { [key: string]: string } {
    return {
      callMeasureSummaryReport: 'CallMeasureSummaryReport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callMeasureSummaryReport: { 'type': 'array', 'itemType': ListCallMeasureSummaryReportsResponseBodyCallMeasureSummaryReportListCallMeasureSummaryReport },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigResponseBodyConfigItemsConfigItem extends $tea.Model {
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

export class ListConfigResponseBodyConfigItems extends $tea.Model {
  configItem?: ListConfigResponseBodyConfigItemsConfigItem[];
  static names(): { [key: string]: string } {
    return {
      configItem: 'ConfigItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configItem: { 'type': 'array', 'itemType': ListConfigResponseBodyConfigItemsConfigItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactFlowsResponseBodyContactFlowsContactFlowPhoneNumbersPhoneNumber extends $tea.Model {
  allowOutbound?: boolean;
  instanceId?: string;
  number?: string;
  phoneNumberDescription?: string;
  phoneNumberId?: string;
  remainingTime?: number;
  testOnly?: boolean;
  trunks?: number;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      allowOutbound: 'AllowOutbound',
      instanceId: 'InstanceId',
      number: 'Number',
      phoneNumberDescription: 'PhoneNumberDescription',
      phoneNumberId: 'PhoneNumberId',
      remainingTime: 'RemainingTime',
      testOnly: 'TestOnly',
      trunks: 'Trunks',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowOutbound: 'boolean',
      instanceId: 'string',
      number: 'string',
      phoneNumberDescription: 'string',
      phoneNumberId: 'string',
      remainingTime: 'number',
      testOnly: 'boolean',
      trunks: 'number',
      usage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactFlowsResponseBodyContactFlowsContactFlowPhoneNumbers extends $tea.Model {
  phoneNumber?: ListContactFlowsResponseBodyContactFlowsContactFlowPhoneNumbersPhoneNumber[];
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: { 'type': 'array', 'itemType': ListContactFlowsResponseBodyContactFlowsContactFlowPhoneNumbersPhoneNumber },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactFlowsResponseBodyContactFlowsContactFlowVersionsContactFlowVersion extends $tea.Model {
  contactFlowVersionDescription?: string;
  contactFlowVersionId?: string;
  lastModified?: string;
  lastModifiedBy?: string;
  lockedBy?: string;
  status?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      contactFlowVersionDescription: 'ContactFlowVersionDescription',
      contactFlowVersionId: 'ContactFlowVersionId',
      lastModified: 'LastModified',
      lastModifiedBy: 'LastModifiedBy',
      lockedBy: 'LockedBy',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowVersionDescription: 'string',
      contactFlowVersionId: 'string',
      lastModified: 'string',
      lastModifiedBy: 'string',
      lockedBy: 'string',
      status: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactFlowsResponseBodyContactFlowsContactFlowVersions extends $tea.Model {
  contactFlowVersion?: ListContactFlowsResponseBodyContactFlowsContactFlowVersionsContactFlowVersion[];
  static names(): { [key: string]: string } {
    return {
      contactFlowVersion: 'ContactFlowVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowVersion: { 'type': 'array', 'itemType': ListContactFlowsResponseBodyContactFlowsContactFlowVersionsContactFlowVersion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactFlowsResponseBodyContactFlowsContactFlow extends $tea.Model {
  appliedVersion?: string;
  contactFlowDescription?: string;
  contactFlowId?: string;
  contactFlowName?: string;
  instanceId?: string;
  phoneNumbers?: ListContactFlowsResponseBodyContactFlowsContactFlowPhoneNumbers;
  type?: string;
  versions?: ListContactFlowsResponseBodyContactFlowsContactFlowVersions;
  static names(): { [key: string]: string } {
    return {
      appliedVersion: 'AppliedVersion',
      contactFlowDescription: 'ContactFlowDescription',
      contactFlowId: 'ContactFlowId',
      contactFlowName: 'ContactFlowName',
      instanceId: 'InstanceId',
      phoneNumbers: 'PhoneNumbers',
      type: 'Type',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedVersion: 'string',
      contactFlowDescription: 'string',
      contactFlowId: 'string',
      contactFlowName: 'string',
      instanceId: 'string',
      phoneNumbers: ListContactFlowsResponseBodyContactFlowsContactFlowPhoneNumbers,
      type: 'string',
      versions: ListContactFlowsResponseBodyContactFlowsContactFlowVersions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactFlowsResponseBodyContactFlows extends $tea.Model {
  contactFlow?: ListContactFlowsResponseBodyContactFlowsContactFlow[];
  static names(): { [key: string]: string } {
    return {
      contactFlow: 'ContactFlow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlow: { 'type': 'array', 'itemType': ListContactFlowsResponseBodyContactFlowsContactFlow },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesOfUserResponseBodyInstancesCallCenterInstanceAdminUserDetail extends $tea.Model {
  department?: string;
  displayName?: string;
  email?: string;
  loginName?: string;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      department: 'Department',
      displayName: 'DisplayName',
      email: 'Email',
      loginName: 'LoginName',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      department: 'string',
      displayName: 'string',
      email: 'string',
      loginName: 'string',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesOfUserResponseBodyInstancesCallCenterInstanceAdminUser extends $tea.Model {
  detail?: ListInstancesOfUserResponseBodyInstancesCallCenterInstanceAdminUserDetail;
  instanceId?: string;
  ramId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      instanceId: 'InstanceId',
      ramId: 'RamId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: ListInstancesOfUserResponseBodyInstancesCallCenterInstanceAdminUserDetail,
      instanceId: 'string',
      ramId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesOfUserResponseBodyInstancesCallCenterInstanceAdmin extends $tea.Model {
  user?: ListInstancesOfUserResponseBodyInstancesCallCenterInstanceAdminUser[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': ListInstancesOfUserResponseBodyInstancesCallCenterInstanceAdminUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesOfUserResponseBodyInstancesCallCenterInstancePhoneNumbersPhoneNumber extends $tea.Model {
  allowOutbound?: boolean;
  instanceId?: string;
  number?: string;
  phoneNumberDescription?: string;
  phoneNumberId?: string;
  remainingTime?: number;
  testOnly?: boolean;
  trunks?: number;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      allowOutbound: 'AllowOutbound',
      instanceId: 'InstanceId',
      number: 'Number',
      phoneNumberDescription: 'PhoneNumberDescription',
      phoneNumberId: 'PhoneNumberId',
      remainingTime: 'RemainingTime',
      testOnly: 'TestOnly',
      trunks: 'Trunks',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowOutbound: 'boolean',
      instanceId: 'string',
      number: 'string',
      phoneNumberDescription: 'string',
      phoneNumberId: 'string',
      remainingTime: 'number',
      testOnly: 'boolean',
      trunks: 'number',
      usage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesOfUserResponseBodyInstancesCallCenterInstancePhoneNumbers extends $tea.Model {
  phoneNumber?: ListInstancesOfUserResponseBodyInstancesCallCenterInstancePhoneNumbersPhoneNumber[];
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: { 'type': 'array', 'itemType': ListInstancesOfUserResponseBodyInstancesCallCenterInstancePhoneNumbersPhoneNumber },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesOfUserResponseBodyInstancesCallCenterInstance extends $tea.Model {
  admin?: ListInstancesOfUserResponseBodyInstancesCallCenterInstanceAdmin;
  consoleUrl?: string;
  createdTime?: number;
  directoryId?: string;
  domainName?: string;
  instanceDescription?: string;
  instanceId?: string;
  instanceName?: string;
  maxOnlineAgents?: number;
  owner?: string;
  phoneNumbers?: ListInstancesOfUserResponseBodyInstancesCallCenterInstancePhoneNumbers;
  status?: string;
  storageBucket?: string;
  storageMaxDays?: number;
  storageMaxSize?: number;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      admin: 'Admin',
      consoleUrl: 'ConsoleUrl',
      createdTime: 'CreatedTime',
      directoryId: 'DirectoryId',
      domainName: 'DomainName',
      instanceDescription: 'InstanceDescription',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      maxOnlineAgents: 'MaxOnlineAgents',
      owner: 'Owner',
      phoneNumbers: 'PhoneNumbers',
      status: 'Status',
      storageBucket: 'StorageBucket',
      storageMaxDays: 'StorageMaxDays',
      storageMaxSize: 'StorageMaxSize',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      admin: ListInstancesOfUserResponseBodyInstancesCallCenterInstanceAdmin,
      consoleUrl: 'string',
      createdTime: 'number',
      directoryId: 'string',
      domainName: 'string',
      instanceDescription: 'string',
      instanceId: 'string',
      instanceName: 'string',
      maxOnlineAgents: 'number',
      owner: 'string',
      phoneNumbers: ListInstancesOfUserResponseBodyInstancesCallCenterInstancePhoneNumbers,
      status: 'string',
      storageBucket: 'string',
      storageMaxDays: 'number',
      storageMaxSize: 'number',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesOfUserResponseBodyInstances extends $tea.Model {
  callCenterInstance?: ListInstancesOfUserResponseBodyInstancesCallCenterInstance[];
  static names(): { [key: string]: string } {
    return {
      callCenterInstance: 'CallCenterInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callCenterInstance: { 'type': 'array', 'itemType': ListInstancesOfUserResponseBodyInstancesCallCenterInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIvrTrackingDetailResponseBodyIvrTrackingDetailsListIvrTrackingDetail extends $tea.Model {
  calledNumber?: string;
  callingNumber?: string;
  contactId?: string;
  description?: string;
  deviceID?: string;
  flowName?: string;
  inputData?: string;
  nodeName?: string;
  nodeType?: string;
  outputData?: string;
  startTime?: number;
  status?: string;
  stopTime?: number;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      contactId: 'ContactId',
      description: 'Description',
      deviceID: 'DeviceID',
      flowName: 'FlowName',
      inputData: 'InputData',
      nodeName: 'NodeName',
      nodeType: 'NodeType',
      outputData: 'OutputData',
      startTime: 'StartTime',
      status: 'Status',
      stopTime: 'StopTime',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      callingNumber: 'string',
      contactId: 'string',
      description: 'string',
      deviceID: 'string',
      flowName: 'string',
      inputData: 'string',
      nodeName: 'string',
      nodeType: 'string',
      outputData: 'string',
      startTime: 'number',
      status: 'string',
      stopTime: 'number',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIvrTrackingDetailResponseBodyIvrTrackingDetailsList extends $tea.Model {
  ivrTrackingDetail?: ListIvrTrackingDetailResponseBodyIvrTrackingDetailsListIvrTrackingDetail[];
  static names(): { [key: string]: string } {
    return {
      ivrTrackingDetail: 'IvrTrackingDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ivrTrackingDetail: { 'type': 'array', 'itemType': ListIvrTrackingDetailResponseBodyIvrTrackingDetailsListIvrTrackingDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIvrTrackingDetailResponseBodyIvrTrackingDetails extends $tea.Model {
  list?: ListIvrTrackingDetailResponseBodyIvrTrackingDetailsList;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: ListIvrTrackingDetailResponseBodyIvrTrackingDetailsList,
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobGroupsResponseBodyJobGroupsListProgressCategories extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobGroupsResponseBodyJobGroupsListProgress extends $tea.Model {
  categories?: ListJobGroupsResponseBodyJobGroupsListProgressCategories[];
  duration?: number;
  startTime?: number;
  status?: string;
  totalCompleted?: number;
  totalJobs?: number;
  totalNotAnswered?: number;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      duration: 'Duration',
      startTime: 'StartTime',
      status: 'Status',
      totalCompleted: 'TotalCompleted',
      totalJobs: 'TotalJobs',
      totalNotAnswered: 'TotalNotAnswered',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': ListJobGroupsResponseBodyJobGroupsListProgressCategories },
      duration: 'number',
      startTime: 'number',
      status: 'string',
      totalCompleted: 'number',
      totalJobs: 'number',
      totalNotAnswered: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobGroupsResponseBodyJobGroupsListStrategyWorkingTime extends $tea.Model {
  beginTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobGroupsResponseBodyJobGroupsListStrategy extends $tea.Model {
  customized?: string;
  description?: string;
  endTime?: number;
  followUpStrategy?: string;
  id?: string;
  isTemplate?: boolean;
  maxAttemptsPerDay?: number;
  minAttemptInterval?: number;
  name?: string;
  repeatBy?: string;
  repeatDays?: string[];
  routingStrategy?: string;
  startTime?: number;
  type?: string;
  workingTime?: ListJobGroupsResponseBodyJobGroupsListStrategyWorkingTime[];
  static names(): { [key: string]: string } {
    return {
      customized: 'Customized',
      description: 'Description',
      endTime: 'EndTime',
      followUpStrategy: 'FollowUpStrategy',
      id: 'Id',
      isTemplate: 'IsTemplate',
      maxAttemptsPerDay: 'MaxAttemptsPerDay',
      minAttemptInterval: 'MinAttemptInterval',
      name: 'Name',
      repeatBy: 'RepeatBy',
      repeatDays: 'RepeatDays',
      routingStrategy: 'RoutingStrategy',
      startTime: 'StartTime',
      type: 'Type',
      workingTime: 'WorkingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customized: 'string',
      description: 'string',
      endTime: 'number',
      followUpStrategy: 'string',
      id: 'string',
      isTemplate: 'boolean',
      maxAttemptsPerDay: 'number',
      minAttemptInterval: 'number',
      name: 'string',
      repeatBy: 'string',
      repeatDays: { 'type': 'array', 'itemType': 'string' },
      routingStrategy: 'string',
      startTime: 'number',
      type: 'string',
      workingTime: { 'type': 'array', 'itemType': ListJobGroupsResponseBodyJobGroupsListStrategyWorkingTime },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobGroupsResponseBodyJobGroupsList extends $tea.Model {
  callingNumbers?: string[];
  creationTime?: number;
  description?: string;
  id?: string;
  jobFilePath?: string;
  name?: string;
  progress?: ListJobGroupsResponseBodyJobGroupsListProgress;
  scenarioId?: string;
  strategy?: ListJobGroupsResponseBodyJobGroupsListStrategy;
  static names(): { [key: string]: string } {
    return {
      callingNumbers: 'CallingNumbers',
      creationTime: 'CreationTime',
      description: 'Description',
      id: 'Id',
      jobFilePath: 'JobFilePath',
      name: 'Name',
      progress: 'Progress',
      scenarioId: 'ScenarioId',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      creationTime: 'number',
      description: 'string',
      id: 'string',
      jobFilePath: 'string',
      name: 'string',
      progress: ListJobGroupsResponseBodyJobGroupsListProgress,
      scenarioId: 'string',
      strategy: ListJobGroupsResponseBodyJobGroupsListStrategy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobGroupsResponseBodyJobGroups extends $tea.Model {
  list?: ListJobGroupsResponseBodyJobGroupsList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListJobGroupsResponseBodyJobGroupsList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobStatusResponseBodyJobsListContacts extends $tea.Model {
  contactId?: string;
  contactName?: string;
  honorific?: string;
  jobId?: string;
  phoneNumber?: string;
  referenceId?: string;
  role?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      contactName: 'ContactName',
      honorific: 'Honorific',
      jobId: 'JobId',
      phoneNumber: 'PhoneNumber',
      referenceId: 'ReferenceId',
      role: 'Role',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      contactName: 'string',
      honorific: 'string',
      jobId: 'string',
      phoneNumber: 'string',
      referenceId: 'string',
      role: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobStatusResponseBodyJobsListExtras extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobStatusResponseBodyJobsListSummary extends $tea.Model {
  category?: string;
  content?: string;
  conversationDetailId?: string;
  groupId?: string;
  jobId?: string;
  summaryId?: string;
  summaryName?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      content: 'Content',
      conversationDetailId: 'ConversationDetailId',
      groupId: 'GroupId',
      jobId: 'JobId',
      summaryId: 'SummaryId',
      summaryName: 'SummaryName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      content: 'string',
      conversationDetailId: 'string',
      groupId: 'string',
      jobId: 'string',
      summaryId: 'string',
      summaryName: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobStatusResponseBodyJobsListTasksContact extends $tea.Model {
  contactId?: string;
  contactName?: string;
  honorific?: string;
  jobId?: string;
  phoneNumber?: string;
  referenceId?: string;
  role?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      contactName: 'ContactName',
      honorific: 'Honorific',
      jobId: 'JobId',
      phoneNumber: 'PhoneNumber',
      referenceId: 'ReferenceId',
      role: 'Role',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      contactName: 'string',
      honorific: 'string',
      jobId: 'string',
      phoneNumber: 'string',
      referenceId: 'string',
      role: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobStatusResponseBodyJobsListTasks extends $tea.Model {
  actualTime?: number;
  brief?: string;
  callId?: string;
  calledNumber?: string;
  callingNumber?: string;
  chatbotId?: string;
  contact?: ListJobStatusResponseBodyJobsListTasksContact;
  duration?: number;
  jobId?: string;
  planedTime?: number;
  scenarioId?: string;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      actualTime: 'ActualTime',
      brief: 'Brief',
      callId: 'CallId',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      chatbotId: 'ChatbotId',
      contact: 'Contact',
      duration: 'Duration',
      jobId: 'JobId',
      planedTime: 'PlanedTime',
      scenarioId: 'ScenarioId',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualTime: 'number',
      brief: 'string',
      callId: 'string',
      calledNumber: 'string',
      callingNumber: 'string',
      chatbotId: 'string',
      contact: ListJobStatusResponseBodyJobsListTasksContact,
      duration: 'number',
      jobId: 'string',
      planedTime: 'number',
      scenarioId: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobStatusResponseBodyJobsList extends $tea.Model {
  callingNumbers?: string[];
  contacts?: ListJobStatusResponseBodyJobsListContacts[];
  extras?: ListJobStatusResponseBodyJobsListExtras[];
  failureReason?: string;
  groupId?: string;
  jobId?: string;
  priority?: number;
  referenceId?: string;
  scenarioId?: string;
  status?: string;
  strategyId?: string;
  summary?: ListJobStatusResponseBodyJobsListSummary[];
  tasks?: ListJobStatusResponseBodyJobsListTasks[];
  static names(): { [key: string]: string } {
    return {
      callingNumbers: 'CallingNumbers',
      contacts: 'Contacts',
      extras: 'Extras',
      failureReason: 'FailureReason',
      groupId: 'GroupId',
      jobId: 'JobId',
      priority: 'Priority',
      referenceId: 'ReferenceId',
      scenarioId: 'ScenarioId',
      status: 'Status',
      strategyId: 'StrategyId',
      summary: 'Summary',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      contacts: { 'type': 'array', 'itemType': ListJobStatusResponseBodyJobsListContacts },
      extras: { 'type': 'array', 'itemType': ListJobStatusResponseBodyJobsListExtras },
      failureReason: 'string',
      groupId: 'string',
      jobId: 'string',
      priority: 'number',
      referenceId: 'string',
      scenarioId: 'string',
      status: 'string',
      strategyId: 'string',
      summary: { 'type': 'array', 'itemType': ListJobStatusResponseBodyJobsListSummary },
      tasks: { 'type': 'array', 'itemType': ListJobStatusResponseBodyJobsListTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobStatusResponseBodyJobs extends $tea.Model {
  list?: ListJobStatusResponseBodyJobsList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListJobStatusResponseBodyJobsList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsByGroupResponseBodyJobsListContacts extends $tea.Model {
  contactId?: string;
  contactName?: string;
  honorific?: string;
  jobId?: string;
  phoneNumber?: string;
  referenceId?: string;
  role?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      contactName: 'ContactName',
      honorific: 'Honorific',
      jobId: 'JobId',
      phoneNumber: 'PhoneNumber',
      referenceId: 'ReferenceId',
      role: 'Role',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      contactName: 'string',
      honorific: 'string',
      jobId: 'string',
      phoneNumber: 'string',
      referenceId: 'string',
      role: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsByGroupResponseBodyJobsListExtras extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsByGroupResponseBodyJobsListSummary extends $tea.Model {
  category?: string;
  content?: string;
  conversationDetailId?: string;
  groupId?: string;
  jobId?: string;
  summaryId?: string;
  summaryName?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      content: 'Content',
      conversationDetailId: 'ConversationDetailId',
      groupId: 'GroupId',
      jobId: 'JobId',
      summaryId: 'SummaryId',
      summaryName: 'SummaryName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      content: 'string',
      conversationDetailId: 'string',
      groupId: 'string',
      jobId: 'string',
      summaryId: 'string',
      summaryName: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsByGroupResponseBodyJobsList extends $tea.Model {
  callingNumbers?: string[];
  contacts?: ListJobsByGroupResponseBodyJobsListContacts[];
  extras?: ListJobsByGroupResponseBodyJobsListExtras[];
  failureReason?: string;
  groupId?: string;
  jobId?: string;
  priority?: number;
  referenceId?: string;
  scenarioId?: string;
  status?: string;
  strategyId?: string;
  summary?: ListJobsByGroupResponseBodyJobsListSummary[];
  systemPriority?: number;
  static names(): { [key: string]: string } {
    return {
      callingNumbers: 'CallingNumbers',
      contacts: 'Contacts',
      extras: 'Extras',
      failureReason: 'FailureReason',
      groupId: 'GroupId',
      jobId: 'JobId',
      priority: 'Priority',
      referenceId: 'ReferenceId',
      scenarioId: 'ScenarioId',
      status: 'Status',
      strategyId: 'StrategyId',
      summary: 'Summary',
      systemPriority: 'SystemPriority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      contacts: { 'type': 'array', 'itemType': ListJobsByGroupResponseBodyJobsListContacts },
      extras: { 'type': 'array', 'itemType': ListJobsByGroupResponseBodyJobsListExtras },
      failureReason: 'string',
      groupId: 'string',
      jobId: 'string',
      priority: 'number',
      referenceId: 'string',
      scenarioId: 'string',
      status: 'string',
      strategyId: 'string',
      summary: { 'type': 'array', 'itemType': ListJobsByGroupResponseBodyJobsListSummary },
      systemPriority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsByGroupResponseBodyJobs extends $tea.Model {
  list?: ListJobsByGroupResponseBodyJobsList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListJobsByGroupResponseBodyJobsList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediasResponseBodyMediasListMedia extends $tea.Model {
  content?: string;
  description?: string;
  fileName?: string;
  filePath?: string;
  instance?: string;
  name?: string;
  ossFileName?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      description: 'Description',
      fileName: 'FileName',
      filePath: 'FilePath',
      instance: 'Instance',
      name: 'Name',
      ossFileName: 'OssFileName',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      description: 'string',
      fileName: 'string',
      filePath: 'string',
      instance: 'string',
      name: 'string',
      ossFileName: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediasResponseBodyMediasList extends $tea.Model {
  media?: ListMediasResponseBodyMediasListMedia[];
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: { 'type': 'array', 'itemType': ListMediasResponseBodyMediasListMedia },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediasResponseBodyMedias extends $tea.Model {
  list?: ListMediasResponseBodyMediasList;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: ListMediasResponseBodyMediasList,
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundPhoneNumberOfUserResponseBodyNumberList extends $tea.Model {
  number?: string[];
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundPhoneNumberOfUserResponseBodyOutboundPhoneNumbersPhoneNumberPrivacyNumber extends $tea.Model {
  bizId?: string;
  extra?: string;
  phoneNumber?: string;
  poolId?: string;
  poolName?: string;
  regionNameCity?: string;
  subId?: string;
  telX?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      extra: 'Extra',
      phoneNumber: 'PhoneNumber',
      poolId: 'PoolId',
      poolName: 'PoolName',
      regionNameCity: 'RegionNameCity',
      subId: 'SubId',
      telX: 'TelX',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      extra: 'string',
      phoneNumber: 'string',
      poolId: 'string',
      poolName: 'string',
      regionNameCity: 'string',
      subId: 'string',
      telX: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundPhoneNumberOfUserResponseBodyOutboundPhoneNumbersPhoneNumber extends $tea.Model {
  allowOutbound?: boolean;
  city?: string;
  instanceId?: string;
  number?: string;
  phoneNumberDescription?: string;
  phoneNumberId?: string;
  privacyNumber?: ListOutboundPhoneNumberOfUserResponseBodyOutboundPhoneNumbersPhoneNumberPrivacyNumber;
  privateFlag?: boolean;
  province?: string;
  remainingTime?: number;
  sipTelX?: string;
  testOnly?: boolean;
  trunks?: number;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      allowOutbound: 'AllowOutbound',
      city: 'City',
      instanceId: 'InstanceId',
      number: 'Number',
      phoneNumberDescription: 'PhoneNumberDescription',
      phoneNumberId: 'PhoneNumberId',
      privacyNumber: 'PrivacyNumber',
      privateFlag: 'PrivateFlag',
      province: 'Province',
      remainingTime: 'RemainingTime',
      sipTelX: 'SipTelX',
      testOnly: 'TestOnly',
      trunks: 'Trunks',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowOutbound: 'boolean',
      city: 'string',
      instanceId: 'string',
      number: 'string',
      phoneNumberDescription: 'string',
      phoneNumberId: 'string',
      privacyNumber: ListOutboundPhoneNumberOfUserResponseBodyOutboundPhoneNumbersPhoneNumberPrivacyNumber,
      privateFlag: 'boolean',
      province: 'string',
      remainingTime: 'number',
      sipTelX: 'string',
      testOnly: 'boolean',
      trunks: 'number',
      usage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundPhoneNumberOfUserResponseBodyOutboundPhoneNumbers extends $tea.Model {
  phoneNumber?: ListOutboundPhoneNumberOfUserResponseBodyOutboundPhoneNumbersPhoneNumber[];
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: { 'type': 'array', 'itemType': ListOutboundPhoneNumberOfUserResponseBodyOutboundPhoneNumbersPhoneNumber },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneNumbersResponseBodyPhoneNumbersPhoneNumberContactFlow extends $tea.Model {
  contactFlowDescription?: string;
  contactFlowId?: string;
  contactFlowName?: string;
  instanceId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      contactFlowDescription: 'ContactFlowDescription',
      contactFlowId: 'ContactFlowId',
      contactFlowName: 'ContactFlowName',
      instanceId: 'InstanceId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowDescription: 'string',
      contactFlowId: 'string',
      contactFlowName: 'string',
      instanceId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneNumbersResponseBodyPhoneNumbersPhoneNumberPrivacyNumber extends $tea.Model {
  bizId?: string;
  extra?: string;
  phoneNumber?: string;
  poolId?: string;
  poolName?: string;
  regionNameCity?: string;
  subId?: string;
  telX?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      extra: 'Extra',
      phoneNumber: 'PhoneNumber',
      poolId: 'PoolId',
      poolName: 'PoolName',
      regionNameCity: 'RegionNameCity',
      subId: 'SubId',
      telX: 'TelX',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      extra: 'string',
      phoneNumber: 'string',
      poolId: 'string',
      poolName: 'string',
      regionNameCity: 'string',
      subId: 'string',
      telX: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneNumbersResponseBodyPhoneNumbersPhoneNumberSkillGroupsSkillGroup extends $tea.Model {
  skillGroupId?: string;
  skillGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupId: 'string',
      skillGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneNumbersResponseBodyPhoneNumbersPhoneNumberSkillGroups extends $tea.Model {
  skillGroup?: ListPhoneNumbersResponseBodyPhoneNumbersPhoneNumberSkillGroupsSkillGroup[];
  static names(): { [key: string]: string } {
    return {
      skillGroup: 'SkillGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroup: { 'type': 'array', 'itemType': ListPhoneNumbersResponseBodyPhoneNumbersPhoneNumberSkillGroupsSkillGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneNumbersResponseBodyPhoneNumbersPhoneNumber extends $tea.Model {
  allowOutbound?: boolean;
  assignee?: string;
  city?: string;
  contactFlow?: ListPhoneNumbersResponseBodyPhoneNumbersPhoneNumberContactFlow;
  instanceId?: string;
  number?: string;
  numberCommodityStatus?: number;
  phoneNumberDescription?: string;
  phoneNumberId?: string;
  privacyNumber?: ListPhoneNumbersResponseBodyPhoneNumbersPhoneNumberPrivacyNumber;
  province?: string;
  remainingTime?: number;
  sipTelX?: string;
  skillGroups?: ListPhoneNumbersResponseBodyPhoneNumbersPhoneNumberSkillGroups;
  testOnly?: boolean;
  trunks?: number;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      allowOutbound: 'AllowOutbound',
      assignee: 'Assignee',
      city: 'City',
      contactFlow: 'ContactFlow',
      instanceId: 'InstanceId',
      number: 'Number',
      numberCommodityStatus: 'NumberCommodityStatus',
      phoneNumberDescription: 'PhoneNumberDescription',
      phoneNumberId: 'PhoneNumberId',
      privacyNumber: 'PrivacyNumber',
      province: 'Province',
      remainingTime: 'RemainingTime',
      sipTelX: 'SipTelX',
      skillGroups: 'SkillGroups',
      testOnly: 'TestOnly',
      trunks: 'Trunks',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowOutbound: 'boolean',
      assignee: 'string',
      city: 'string',
      contactFlow: ListPhoneNumbersResponseBodyPhoneNumbersPhoneNumberContactFlow,
      instanceId: 'string',
      number: 'string',
      numberCommodityStatus: 'number',
      phoneNumberDescription: 'string',
      phoneNumberId: 'string',
      privacyNumber: ListPhoneNumbersResponseBodyPhoneNumbersPhoneNumberPrivacyNumber,
      province: 'string',
      remainingTime: 'number',
      sipTelX: 'string',
      skillGroups: ListPhoneNumbersResponseBodyPhoneNumbersPhoneNumberSkillGroups,
      testOnly: 'boolean',
      trunks: 'number',
      usage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneNumbersResponseBodyPhoneNumbers extends $tea.Model {
  phoneNumber?: ListPhoneNumbersResponseBodyPhoneNumbersPhoneNumber[];
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: { 'type': 'array', 'itemType': ListPhoneNumbersResponseBodyPhoneNumbersPhoneNumber },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneTagsResponseBodyPhoneNumbersList extends $tea.Model {
  city?: string;
  concurrency?: number;
  contactFlowId?: string;
  createTime?: number;
  instanceId?: string;
  number?: string;
  phoneNumberDescription?: string;
  phoneNumberId?: string;
  provider?: string;
  province?: string;
  serviceTag?: string;
  skillGroupIdList?: string[];
  type?: number;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      concurrency: 'Concurrency',
      contactFlowId: 'ContactFlowId',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      number: 'Number',
      phoneNumberDescription: 'PhoneNumberDescription',
      phoneNumberId: 'PhoneNumberId',
      provider: 'Provider',
      province: 'Province',
      serviceTag: 'ServiceTag',
      skillGroupIdList: 'SkillGroupIdList',
      type: 'Type',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      concurrency: 'number',
      contactFlowId: 'string',
      createTime: 'number',
      instanceId: 'string',
      number: 'string',
      phoneNumberDescription: 'string',
      phoneNumberId: 'string',
      provider: 'string',
      province: 'string',
      serviceTag: 'string',
      skillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      type: 'number',
      usage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneTagsResponseBodyPhoneNumbers extends $tea.Model {
  list?: ListPhoneTagsResponseBodyPhoneNumbersList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListPhoneTagsResponseBodyPhoneNumbersList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealTimeAgentResponseBodyDataUserSkillLevelsSkillLevelSkill extends $tea.Model {
  instanceId?: string;
  skillGroupDescription?: string;
  skillGroupId?: string;
  skillGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupDescription: 'SkillGroupDescription',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupDescription: 'string',
      skillGroupId: 'string',
      skillGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealTimeAgentResponseBodyDataUserSkillLevelsSkillLevel extends $tea.Model {
  level?: number;
  skill?: ListRealTimeAgentResponseBodyDataUserSkillLevelsSkillLevelSkill;
  skillLevelId?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      skill: 'Skill',
      skillLevelId: 'SkillLevelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'number',
      skill: ListRealTimeAgentResponseBodyDataUserSkillLevelsSkillLevelSkill,
      skillLevelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealTimeAgentResponseBodyDataUserSkillLevels extends $tea.Model {
  skillLevel?: ListRealTimeAgentResponseBodyDataUserSkillLevelsSkillLevel[];
  static names(): { [key: string]: string } {
    return {
      skillLevel: 'SkillLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillLevel: { 'type': 'array', 'itemType': ListRealTimeAgentResponseBodyDataUserSkillLevelsSkillLevel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealTimeAgentResponseBodyDataUser extends $tea.Model {
  displayName?: string;
  dn?: string;
  phone?: string;
  ramId?: string;
  skillLevels?: ListRealTimeAgentResponseBodyDataUserSkillLevels;
  state?: string;
  stateDesc?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      dn: 'Dn',
      phone: 'Phone',
      ramId: 'RamId',
      skillLevels: 'SkillLevels',
      state: 'State',
      stateDesc: 'StateDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      dn: 'string',
      phone: 'string',
      ramId: 'string',
      skillLevels: ListRealTimeAgentResponseBodyDataUserSkillLevels,
      state: 'string',
      stateDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealTimeAgentResponseBodyData extends $tea.Model {
  user?: ListRealTimeAgentResponseBodyDataUser[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': ListRealTimeAgentResponseBodyDataUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentCallRecordsResponseBodyCallDetailRecordsListCallDetailRecordAgentsCallDetailAgent extends $tea.Model {
  agentId?: string;
  agentName?: string;
  contactId?: string;
  feedback?: string;
  holdTime?: number;
  queueTime?: number;
  ringTime?: number;
  satisfaction?: string;
  skillGroupName?: string;
  startTime?: number;
  talkTime?: number;
  workTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      contactId: 'ContactId',
      feedback: 'Feedback',
      holdTime: 'HoldTime',
      queueTime: 'QueueTime',
      ringTime: 'RingTime',
      satisfaction: 'Satisfaction',
      skillGroupName: 'SkillGroupName',
      startTime: 'StartTime',
      talkTime: 'TalkTime',
      workTime: 'WorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      contactId: 'string',
      feedback: 'string',
      holdTime: 'number',
      queueTime: 'number',
      ringTime: 'number',
      satisfaction: 'string',
      skillGroupName: 'string',
      startTime: 'number',
      talkTime: 'number',
      workTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentCallRecordsResponseBodyCallDetailRecordsListCallDetailRecordAgents extends $tea.Model {
  callDetailAgent?: ListRecentCallRecordsResponseBodyCallDetailRecordsListCallDetailRecordAgentsCallDetailAgent[];
  static names(): { [key: string]: string } {
    return {
      callDetailAgent: 'CallDetailAgent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callDetailAgent: { 'type': 'array', 'itemType': ListRecentCallRecordsResponseBodyCallDetailRecordsListCallDetailRecordAgentsCallDetailAgent },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentCallRecordsResponseBodyCallDetailRecordsListCallDetailRecordRecordingsRecording extends $tea.Model {
  agentId?: string;
  agentName?: string;
  calledNumber?: string;
  callingNumber?: string;
  channel?: string;
  contactId?: string;
  contactType?: string;
  duration?: number;
  fileDescription?: string;
  fileName?: string;
  filePath?: string;
  instanceId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      channel: 'Channel',
      contactId: 'ContactId',
      contactType: 'ContactType',
      duration: 'Duration',
      fileDescription: 'FileDescription',
      fileName: 'FileName',
      filePath: 'FilePath',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      calledNumber: 'string',
      callingNumber: 'string',
      channel: 'string',
      contactId: 'string',
      contactType: 'string',
      duration: 'number',
      fileDescription: 'string',
      fileName: 'string',
      filePath: 'string',
      instanceId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentCallRecordsResponseBodyCallDetailRecordsListCallDetailRecordRecordings extends $tea.Model {
  recording?: ListRecentCallRecordsResponseBodyCallDetailRecordsListCallDetailRecordRecordingsRecording[];
  static names(): { [key: string]: string } {
    return {
      recording: 'Recording',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recording: { 'type': 'array', 'itemType': ListRecentCallRecordsResponseBodyCallDetailRecordsListCallDetailRecordRecordingsRecording },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentCallRecordsResponseBodyCallDetailRecordsListCallDetailRecord extends $tea.Model {
  agentNames?: string;
  agents?: ListRecentCallRecordsResponseBodyCallDetailRecordsListCallDetailRecordAgents;
  calledNumber?: string;
  callingNumber?: string;
  contactDisposition?: string;
  contactId?: string;
  contactType?: string;
  duration?: number;
  extraAttr?: string;
  feedback?: string;
  instanceId?: string;
  recordings?: ListRecentCallRecordsResponseBodyCallDetailRecordsListCallDetailRecordRecordings;
  satisfaction?: number;
  satisfactionDesc?: string;
  skillGroupNames?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentNames: 'AgentNames',
      agents: 'Agents',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      contactDisposition: 'ContactDisposition',
      contactId: 'ContactId',
      contactType: 'ContactType',
      duration: 'Duration',
      extraAttr: 'ExtraAttr',
      feedback: 'Feedback',
      instanceId: 'InstanceId',
      recordings: 'Recordings',
      satisfaction: 'Satisfaction',
      satisfactionDesc: 'SatisfactionDesc',
      skillGroupNames: 'SkillGroupNames',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentNames: 'string',
      agents: ListRecentCallRecordsResponseBodyCallDetailRecordsListCallDetailRecordAgents,
      calledNumber: 'string',
      callingNumber: 'string',
      contactDisposition: 'string',
      contactId: 'string',
      contactType: 'string',
      duration: 'number',
      extraAttr: 'string',
      feedback: 'string',
      instanceId: 'string',
      recordings: ListRecentCallRecordsResponseBodyCallDetailRecordsListCallDetailRecordRecordings,
      satisfaction: 'number',
      satisfactionDesc: 'string',
      skillGroupNames: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentCallRecordsResponseBodyCallDetailRecordsList extends $tea.Model {
  callDetailRecord?: ListRecentCallRecordsResponseBodyCallDetailRecordsListCallDetailRecord[];
  static names(): { [key: string]: string } {
    return {
      callDetailRecord: 'CallDetailRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callDetailRecord: { 'type': 'array', 'itemType': ListRecentCallRecordsResponseBodyCallDetailRecordsListCallDetailRecord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentCallRecordsResponseBodyCallDetailRecords extends $tea.Model {
  list?: ListRecentCallRecordsResponseBodyCallDetailRecordsList;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: ListRecentCallRecordsResponseBodyCallDetailRecordsList,
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordingOfDualTrackResponseBodyRecordingsListRecording extends $tea.Model {
  agentId?: string;
  agentName?: string;
  calledNumber?: string;
  callingNumber?: string;
  channel?: string;
  contactId?: string;
  contactType?: string;
  duration?: number;
  fileDescription?: string;
  fileName?: string;
  filePath?: string;
  instanceId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      channel: 'Channel',
      contactId: 'ContactId',
      contactType: 'ContactType',
      duration: 'Duration',
      fileDescription: 'FileDescription',
      fileName: 'FileName',
      filePath: 'FilePath',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      calledNumber: 'string',
      callingNumber: 'string',
      channel: 'string',
      contactId: 'string',
      contactType: 'string',
      duration: 'number',
      fileDescription: 'string',
      fileName: 'string',
      filePath: 'string',
      instanceId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordingOfDualTrackResponseBodyRecordingsList extends $tea.Model {
  recording?: ListRecordingOfDualTrackResponseBodyRecordingsListRecording[];
  static names(): { [key: string]: string } {
    return {
      recording: 'Recording',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recording: { 'type': 'array', 'itemType': ListRecordingOfDualTrackResponseBodyRecordingsListRecording },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordingOfDualTrackResponseBodyRecordings extends $tea.Model {
  list?: ListRecordingOfDualTrackResponseBodyRecordingsList;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: ListRecordingOfDualTrackResponseBodyRecordingsList,
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordingsResponseBodyRecordingsListRecording extends $tea.Model {
  agentId?: string;
  agentName?: string;
  calledNumber?: string;
  callingNumber?: string;
  channel?: string;
  contactId?: string;
  contactType?: string;
  duration?: number;
  fileDescription?: string;
  fileName?: string;
  filePath?: string;
  instanceId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      channel: 'Channel',
      contactId: 'ContactId',
      contactType: 'ContactType',
      duration: 'Duration',
      fileDescription: 'FileDescription',
      fileName: 'FileName',
      filePath: 'FilePath',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      calledNumber: 'string',
      callingNumber: 'string',
      channel: 'string',
      contactId: 'string',
      contactType: 'string',
      duration: 'number',
      fileDescription: 'string',
      fileName: 'string',
      filePath: 'string',
      instanceId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordingsResponseBodyRecordingsList extends $tea.Model {
  recording?: ListRecordingsResponseBodyRecordingsListRecording[];
  static names(): { [key: string]: string } {
    return {
      recording: 'Recording',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recording: { 'type': 'array', 'itemType': ListRecordingsResponseBodyRecordingsListRecording },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordingsResponseBodyRecordings extends $tea.Model {
  list?: ListRecordingsResponseBodyRecordingsList;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: ListRecordingsResponseBodyRecordingsList,
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordingsByContactIdResponseBodyRecordingsRecording extends $tea.Model {
  agentId?: string;
  agentName?: string;
  calledNumber?: string;
  callingNumber?: string;
  channel?: string;
  contactId?: string;
  contactType?: string;
  duration?: number;
  fileDescription?: string;
  fileName?: string;
  filePath?: string;
  instanceId?: string;
  qualityCheckTaskId?: string;
  qualityCheckTid?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      channel: 'Channel',
      contactId: 'ContactId',
      contactType: 'ContactType',
      duration: 'Duration',
      fileDescription: 'FileDescription',
      fileName: 'FileName',
      filePath: 'FilePath',
      instanceId: 'InstanceId',
      qualityCheckTaskId: 'QualityCheckTaskId',
      qualityCheckTid: 'QualityCheckTid',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      calledNumber: 'string',
      callingNumber: 'string',
      channel: 'string',
      contactId: 'string',
      contactType: 'string',
      duration: 'number',
      fileDescription: 'string',
      fileName: 'string',
      filePath: 'string',
      instanceId: 'string',
      qualityCheckTaskId: 'string',
      qualityCheckTid: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordingsByContactIdResponseBodyRecordings extends $tea.Model {
  recording?: ListRecordingsByContactIdResponseBodyRecordingsRecording[];
  static names(): { [key: string]: string } {
    return {
      recording: 'Recording',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recording: { 'type': 'array', 'itemType': ListRecordingsByContactIdResponseBodyRecordingsRecording },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyRolesRole extends $tea.Model {
  instanceId?: string;
  roleDescription?: string;
  roleId?: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      roleDescription: 'RoleDescription',
      roleId: 'RoleId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      roleDescription: 'string',
      roleId: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyRoles extends $tea.Model {
  role?: ListRolesResponseBodyRolesRole[];
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: { 'type': 'array', 'itemType': ListRolesResponseBodyRolesRole },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenarioTemplatesResponseBodyScenarioTemplatesSurveysFlow extends $tea.Model {
  flowId?: string;
  flowJson?: string;
  isPublished?: boolean;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      flowJson: 'FlowJson',
      isPublished: 'IsPublished',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      flowJson: 'string',
      isPublished: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenarioTemplatesResponseBodyScenarioTemplatesSurveysIntents extends $tea.Model {
  intentId?: string;
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      intentId: 'IntentId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentId: 'string',
      nodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenarioTemplatesResponseBodyScenarioTemplatesSurveys extends $tea.Model {
  beebotId?: string;
  description?: string;
  flow?: ListScenarioTemplatesResponseBodyScenarioTemplatesSurveysFlow;
  globalQuestions?: string;
  id?: string;
  intents?: ListScenarioTemplatesResponseBodyScenarioTemplatesSurveysIntents[];
  name?: string;
  role?: string;
  round?: number;
  static names(): { [key: string]: string } {
    return {
      beebotId: 'BeebotId',
      description: 'Description',
      flow: 'Flow',
      globalQuestions: 'GlobalQuestions',
      id: 'Id',
      intents: 'Intents',
      name: 'Name',
      role: 'Role',
      round: 'Round',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beebotId: 'string',
      description: 'string',
      flow: ListScenarioTemplatesResponseBodyScenarioTemplatesSurveysFlow,
      globalQuestions: 'string',
      id: 'string',
      intents: { 'type': 'array', 'itemType': ListScenarioTemplatesResponseBodyScenarioTemplatesSurveysIntents },
      name: 'string',
      role: 'string',
      round: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenarioTemplatesResponseBodyScenarioTemplatesVariables extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenarioTemplatesResponseBodyScenarioTemplates extends $tea.Model {
  description?: string;
  id?: string;
  isTemplate?: boolean;
  name?: string;
  surveys?: ListScenarioTemplatesResponseBodyScenarioTemplatesSurveys[];
  type?: string;
  variables?: ListScenarioTemplatesResponseBodyScenarioTemplatesVariables[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      isTemplate: 'IsTemplate',
      name: 'Name',
      surveys: 'Surveys',
      type: 'Type',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
      isTemplate: 'boolean',
      name: 'string',
      surveys: { 'type': 'array', 'itemType': ListScenarioTemplatesResponseBodyScenarioTemplatesSurveys },
      type: 'string',
      variables: { 'type': 'array', 'itemType': ListScenarioTemplatesResponseBodyScenarioTemplatesVariables },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenariosResponseBodyScenariosStrategyWorkingTime extends $tea.Model {
  beginTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenariosResponseBodyScenariosStrategy extends $tea.Model {
  customized?: string;
  description?: string;
  endTime?: number;
  followUpStrategy?: string;
  id?: string;
  isTemplate?: boolean;
  maxAttemptsPerDay?: number;
  minAttemptInterval?: number;
  name?: string;
  repeatBy?: string;
  repeatDays?: string[];
  routingStrategy?: string;
  startTime?: number;
  type?: string;
  workingTime?: ListScenariosResponseBodyScenariosStrategyWorkingTime[];
  static names(): { [key: string]: string } {
    return {
      customized: 'Customized',
      description: 'Description',
      endTime: 'EndTime',
      followUpStrategy: 'FollowUpStrategy',
      id: 'Id',
      isTemplate: 'IsTemplate',
      maxAttemptsPerDay: 'MaxAttemptsPerDay',
      minAttemptInterval: 'MinAttemptInterval',
      name: 'Name',
      repeatBy: 'RepeatBy',
      repeatDays: 'RepeatDays',
      routingStrategy: 'RoutingStrategy',
      startTime: 'StartTime',
      type: 'Type',
      workingTime: 'WorkingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customized: 'string',
      description: 'string',
      endTime: 'number',
      followUpStrategy: 'string',
      id: 'string',
      isTemplate: 'boolean',
      maxAttemptsPerDay: 'number',
      minAttemptInterval: 'number',
      name: 'string',
      repeatBy: 'string',
      repeatDays: { 'type': 'array', 'itemType': 'string' },
      routingStrategy: 'string',
      startTime: 'number',
      type: 'string',
      workingTime: { 'type': 'array', 'itemType': ListScenariosResponseBodyScenariosStrategyWorkingTime },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenariosResponseBodyScenariosSurveysIntents extends $tea.Model {
  intentId?: string;
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      intentId: 'IntentId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentId: 'string',
      nodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenariosResponseBodyScenariosSurveys extends $tea.Model {
  beebotId?: string;
  description?: string;
  id?: string;
  intents?: ListScenariosResponseBodyScenariosSurveysIntents[];
  name?: string;
  role?: string;
  round?: number;
  static names(): { [key: string]: string } {
    return {
      beebotId: 'BeebotId',
      description: 'Description',
      id: 'Id',
      intents: 'Intents',
      name: 'Name',
      role: 'Role',
      round: 'Round',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beebotId: 'string',
      description: 'string',
      id: 'string',
      intents: { 'type': 'array', 'itemType': ListScenariosResponseBodyScenariosSurveysIntents },
      name: 'string',
      role: 'string',
      round: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenariosResponseBodyScenariosVariables extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenariosResponseBodyScenarios extends $tea.Model {
  description?: string;
  id?: string;
  isTemplate?: boolean;
  name?: string;
  strategy?: ListScenariosResponseBodyScenariosStrategy;
  surveys?: ListScenariosResponseBodyScenariosSurveys[];
  type?: string;
  variables?: ListScenariosResponseBodyScenariosVariables[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      isTemplate: 'IsTemplate',
      name: 'Name',
      strategy: 'Strategy',
      surveys: 'Surveys',
      type: 'Type',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
      isTemplate: 'boolean',
      name: 'string',
      strategy: ListScenariosResponseBodyScenariosStrategy,
      surveys: { 'type': 'array', 'itemType': ListScenariosResponseBodyScenariosSurveys },
      type: 'string',
      variables: { 'type': 'array', 'itemType': ListScenariosResponseBodyScenariosVariables },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupStatesResponseBodyDataListRealTimeSkillGroupState extends $tea.Model {
  breakingAgents?: number;
  instanceId?: string;
  loggedInAgents?: number;
  longestCall?: number;
  readyAgents?: number;
  skillGroupId?: string;
  skillGroupName?: string;
  talkingAgents?: number;
  waitingCalls?: number;
  workingAgents?: number;
  static names(): { [key: string]: string } {
    return {
      breakingAgents: 'BreakingAgents',
      instanceId: 'InstanceId',
      loggedInAgents: 'LoggedInAgents',
      longestCall: 'LongestCall',
      readyAgents: 'ReadyAgents',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      talkingAgents: 'TalkingAgents',
      waitingCalls: 'WaitingCalls',
      workingAgents: 'WorkingAgents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakingAgents: 'number',
      instanceId: 'string',
      loggedInAgents: 'number',
      longestCall: 'number',
      readyAgents: 'number',
      skillGroupId: 'string',
      skillGroupName: 'string',
      talkingAgents: 'number',
      waitingCalls: 'number',
      workingAgents: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupStatesResponseBodyDataList extends $tea.Model {
  realTimeSkillGroupState?: ListSkillGroupStatesResponseBodyDataListRealTimeSkillGroupState[];
  static names(): { [key: string]: string } {
    return {
      realTimeSkillGroupState: 'RealTimeSkillGroupState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realTimeSkillGroupState: { 'type': 'array', 'itemType': ListSkillGroupStatesResponseBodyDataListRealTimeSkillGroupState },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupStatesResponseBodyData extends $tea.Model {
  list?: ListSkillGroupStatesResponseBodyDataList;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: ListSkillGroupStatesResponseBodyDataList,
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportInbound extends $tea.Model {
  abandonedInQueueOfQueueCount?: number;
  answeredByAgentOfQueueCount?: number;
  answeredByAgentOfQueueMaxWaitTimeDuration?: number;
  answeredByAgentOfQueueWaitTimeDuration?: number;
  averageRingTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  callsHandled?: number;
  callsOffered?: number;
  giveUpByAgentOfQueueCount?: number;
  handleRate?: number;
  inComingQueueOfQueueCount?: number;
  maxRingTime?: number;
  maxTalkTime?: string;
  maxWorkTime?: number;
  overFlowInQueueOfQueueCount?: number;
  queueMaxWaitTimeDuration?: number;
  queueWaitTimeDuration?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  serviceLevel20?: number;
  totalRingTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      abandonedInQueueOfQueueCount: 'AbandonedInQueueOfQueueCount',
      answeredByAgentOfQueueCount: 'AnsweredByAgentOfQueueCount',
      answeredByAgentOfQueueMaxWaitTimeDuration: 'AnsweredByAgentOfQueueMaxWaitTimeDuration',
      answeredByAgentOfQueueWaitTimeDuration: 'AnsweredByAgentOfQueueWaitTimeDuration',
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsHandled: 'CallsHandled',
      callsOffered: 'CallsOffered',
      giveUpByAgentOfQueueCount: 'GiveUpByAgentOfQueueCount',
      handleRate: 'HandleRate',
      inComingQueueOfQueueCount: 'InComingQueueOfQueueCount',
      maxRingTime: 'MaxRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      overFlowInQueueOfQueueCount: 'OverFlowInQueueOfQueueCount',
      queueMaxWaitTimeDuration: 'QueueMaxWaitTimeDuration',
      queueWaitTimeDuration: 'QueueWaitTimeDuration',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      serviceLevel20: 'ServiceLevel20',
      totalRingTime: 'TotalRingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonedInQueueOfQueueCount: 'number',
      answeredByAgentOfQueueCount: 'number',
      answeredByAgentOfQueueMaxWaitTimeDuration: 'number',
      answeredByAgentOfQueueWaitTimeDuration: 'number',
      averageRingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsHandled: 'number',
      callsOffered: 'number',
      giveUpByAgentOfQueueCount: 'number',
      handleRate: 'number',
      inComingQueueOfQueueCount: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'string',
      maxWorkTime: 'number',
      overFlowInQueueOfQueueCount: 'number',
      queueMaxWaitTimeDuration: 'number',
      queueWaitTimeDuration: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      serviceLevel20: 'number',
      totalRingTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportOutbound extends $tea.Model {
  answerRate?: number;
  averageDialingTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  callsAnswered?: number;
  callsDialed?: number;
  maxDialingTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  totalDialingTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      answerRate: 'AnswerRate',
      averageDialingTime: 'AverageDialingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsAnswered: 'CallsAnswered',
      callsDialed: 'CallsDialed',
      maxDialingTime: 'MaxDialingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalDialingTime: 'TotalDialingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerRate: 'number',
      averageDialingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsAnswered: 'number',
      callsDialed: 'number',
      maxDialingTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalDialingTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportOverall extends $tea.Model {
  averageReadyTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  maxReadyTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  occupancyRate?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  totalBreakTime?: number;
  totalCalls?: number;
  totalLoggedInTime?: number;
  totalReadyTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageReadyTime: 'AverageReadyTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      maxReadyTime: 'MaxReadyTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      occupancyRate: 'OccupancyRate',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalBreakTime: 'TotalBreakTime',
      totalCalls: 'TotalCalls',
      totalLoggedInTime: 'TotalLoggedInTime',
      totalReadyTime: 'TotalReadyTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageReadyTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      maxReadyTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      occupancyRate: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalBreakTime: 'number',
      totalCalls: 'number',
      totalLoggedInTime: 'number',
      totalReadyTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReport extends $tea.Model {
  inbound?: ListSkillGroupSummaryReportsResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportInbound;
  instanceId?: string;
  outbound?: ListSkillGroupSummaryReportsResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportOutbound;
  overall?: ListSkillGroupSummaryReportsResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportOverall;
  skillGroupId?: string;
  skillGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      inbound: 'Inbound',
      instanceId: 'InstanceId',
      outbound: 'Outbound',
      overall: 'Overall',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inbound: ListSkillGroupSummaryReportsResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportInbound,
      instanceId: 'string',
      outbound: ListSkillGroupSummaryReportsResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportOutbound,
      overall: ListSkillGroupSummaryReportsResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportOverall,
      skillGroupId: 'string',
      skillGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsResponseBodyPagedSkillGroupSummaryReportList extends $tea.Model {
  skillGroupSummaryReport?: ListSkillGroupSummaryReportsResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReport[];
  static names(): { [key: string]: string } {
    return {
      skillGroupSummaryReport: 'SkillGroupSummaryReport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupSummaryReport: { 'type': 'array', 'itemType': ListSkillGroupSummaryReportsResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReport },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsResponseBodyPagedSkillGroupSummaryReport extends $tea.Model {
  list?: ListSkillGroupSummaryReportsResponseBodyPagedSkillGroupSummaryReportList;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: ListSkillGroupSummaryReportsResponseBodyPagedSkillGroupSummaryReportList,
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReportListSkillGroupTimeIntervalReportIntervalListSkillGroupSummaryReportInbound extends $tea.Model {
  abandonedInQueueOfQueueCount?: number;
  answeredByAgentOfQueueCount?: number;
  answeredByAgentOfQueueMaxWaitTimeDuration?: number;
  answeredByAgentOfQueueWaitTimeDuration?: number;
  averageRingTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  callsHandled?: number;
  callsOffered?: number;
  giveUpByAgentOfQueueCount?: number;
  handleRate?: number;
  inComingQueueOfQueueCount?: number;
  maxRingTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  overFlowInQueueOfQueueCount?: number;
  queueMaxWaitTimeDuration?: number;
  queueWaitTimeDuration?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  serviceLevel20?: number;
  totalRingTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      abandonedInQueueOfQueueCount: 'AbandonedInQueueOfQueueCount',
      answeredByAgentOfQueueCount: 'AnsweredByAgentOfQueueCount',
      answeredByAgentOfQueueMaxWaitTimeDuration: 'AnsweredByAgentOfQueueMaxWaitTimeDuration',
      answeredByAgentOfQueueWaitTimeDuration: 'AnsweredByAgentOfQueueWaitTimeDuration',
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsHandled: 'CallsHandled',
      callsOffered: 'CallsOffered',
      giveUpByAgentOfQueueCount: 'GiveUpByAgentOfQueueCount',
      handleRate: 'HandleRate',
      inComingQueueOfQueueCount: 'InComingQueueOfQueueCount',
      maxRingTime: 'MaxRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      overFlowInQueueOfQueueCount: 'OverFlowInQueueOfQueueCount',
      queueMaxWaitTimeDuration: 'QueueMaxWaitTimeDuration',
      queueWaitTimeDuration: 'QueueWaitTimeDuration',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      serviceLevel20: 'ServiceLevel20',
      totalRingTime: 'TotalRingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonedInQueueOfQueueCount: 'number',
      answeredByAgentOfQueueCount: 'number',
      answeredByAgentOfQueueMaxWaitTimeDuration: 'number',
      answeredByAgentOfQueueWaitTimeDuration: 'number',
      averageRingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsHandled: 'number',
      callsOffered: 'number',
      giveUpByAgentOfQueueCount: 'number',
      handleRate: 'number',
      inComingQueueOfQueueCount: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      overFlowInQueueOfQueueCount: 'number',
      queueMaxWaitTimeDuration: 'number',
      queueWaitTimeDuration: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      serviceLevel20: 'number',
      totalRingTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReportListSkillGroupTimeIntervalReportIntervalListSkillGroupSummaryReportOutbound extends $tea.Model {
  answerRate?: number;
  averageDialingTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  callsAnswered?: number;
  callsDialed?: number;
  maxDialingTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  totalDialingTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      answerRate: 'AnswerRate',
      averageDialingTime: 'AverageDialingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsAnswered: 'CallsAnswered',
      callsDialed: 'CallsDialed',
      maxDialingTime: 'MaxDialingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalDialingTime: 'TotalDialingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerRate: 'number',
      averageDialingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsAnswered: 'number',
      callsDialed: 'number',
      maxDialingTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalDialingTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReportListSkillGroupTimeIntervalReportIntervalListSkillGroupSummaryReportOverall extends $tea.Model {
  averageReadyTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  maxReadyTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  occupancyRate?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  totalBreakTime?: number;
  totalCalls?: number;
  totalLoggedInTime?: number;
  totalReadyTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageReadyTime: 'AverageReadyTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      maxReadyTime: 'MaxReadyTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      occupancyRate: 'OccupancyRate',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalBreakTime: 'TotalBreakTime',
      totalCalls: 'TotalCalls',
      totalLoggedInTime: 'TotalLoggedInTime',
      totalReadyTime: 'TotalReadyTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageReadyTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      maxReadyTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      occupancyRate: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalBreakTime: 'number',
      totalCalls: 'number',
      totalLoggedInTime: 'number',
      totalReadyTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReportListSkillGroupTimeIntervalReportIntervalListSkillGroupSummaryReport extends $tea.Model {
  inbound?: ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReportListSkillGroupTimeIntervalReportIntervalListSkillGroupSummaryReportInbound;
  instanceId?: string;
  outbound?: ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReportListSkillGroupTimeIntervalReportIntervalListSkillGroupSummaryReportOutbound;
  overall?: ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReportListSkillGroupTimeIntervalReportIntervalListSkillGroupSummaryReportOverall;
  skillGroupId?: string;
  skillGroupName?: string;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      inbound: 'Inbound',
      instanceId: 'InstanceId',
      outbound: 'Outbound',
      overall: 'Overall',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inbound: ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReportListSkillGroupTimeIntervalReportIntervalListSkillGroupSummaryReportInbound,
      instanceId: 'string',
      outbound: ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReportListSkillGroupTimeIntervalReportIntervalListSkillGroupSummaryReportOutbound,
      overall: ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReportListSkillGroupTimeIntervalReportIntervalListSkillGroupSummaryReportOverall,
      skillGroupId: 'string',
      skillGroupName: 'string',
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReportListSkillGroupTimeIntervalReportIntervalList extends $tea.Model {
  skillGroupSummaryReport?: ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReportListSkillGroupTimeIntervalReportIntervalListSkillGroupSummaryReport[];
  static names(): { [key: string]: string } {
    return {
      skillGroupSummaryReport: 'SkillGroupSummaryReport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupSummaryReport: { 'type': 'array', 'itemType': ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReportListSkillGroupTimeIntervalReportIntervalListSkillGroupSummaryReport },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReportListSkillGroupTimeIntervalReport extends $tea.Model {
  intervalList?: ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReportListSkillGroupTimeIntervalReportIntervalList;
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      intervalList: 'IntervalList',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intervalList: ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReportListSkillGroupTimeIntervalReportIntervalList,
      skillGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReportList extends $tea.Model {
  skillGroupTimeIntervalReport?: ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReportListSkillGroupTimeIntervalReport[];
  static names(): { [key: string]: string } {
    return {
      skillGroupTimeIntervalReport: 'SkillGroupTimeIntervalReport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupTimeIntervalReport: { 'type': 'array', 'itemType': ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReportListSkillGroupTimeIntervalReport },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReport extends $tea.Model {
  list?: ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReportList;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReportList,
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportInbound extends $tea.Model {
  abandonedInQueueOfQueueCount?: number;
  answeredByAgentOfQueueCount?: number;
  answeredByAgentOfQueueMaxWaitTimeDuration?: number;
  answeredByAgentOfQueueWaitTimeDuration?: number;
  averageRingTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  callsHandled?: number;
  callsOffered?: number;
  giveUpByAgentOfQueueCount?: number;
  handleRate?: number;
  inComingQueueOfQueueCount?: number;
  maxRingTime?: number;
  maxTalkTime?: string;
  maxWorkTime?: number;
  overFlowInQueueOfQueueCount?: number;
  queueMaxWaitTimeDuration?: number;
  queueWaitTimeDuration?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  serviceLevel20?: number;
  totalRingTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      abandonedInQueueOfQueueCount: 'AbandonedInQueueOfQueueCount',
      answeredByAgentOfQueueCount: 'AnsweredByAgentOfQueueCount',
      answeredByAgentOfQueueMaxWaitTimeDuration: 'AnsweredByAgentOfQueueMaxWaitTimeDuration',
      answeredByAgentOfQueueWaitTimeDuration: 'AnsweredByAgentOfQueueWaitTimeDuration',
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsHandled: 'CallsHandled',
      callsOffered: 'CallsOffered',
      giveUpByAgentOfQueueCount: 'GiveUpByAgentOfQueueCount',
      handleRate: 'HandleRate',
      inComingQueueOfQueueCount: 'InComingQueueOfQueueCount',
      maxRingTime: 'MaxRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      overFlowInQueueOfQueueCount: 'OverFlowInQueueOfQueueCount',
      queueMaxWaitTimeDuration: 'QueueMaxWaitTimeDuration',
      queueWaitTimeDuration: 'QueueWaitTimeDuration',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      serviceLevel20: 'ServiceLevel20',
      totalRingTime: 'TotalRingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonedInQueueOfQueueCount: 'number',
      answeredByAgentOfQueueCount: 'number',
      answeredByAgentOfQueueMaxWaitTimeDuration: 'number',
      answeredByAgentOfQueueWaitTimeDuration: 'number',
      averageRingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsHandled: 'number',
      callsOffered: 'number',
      giveUpByAgentOfQueueCount: 'number',
      handleRate: 'number',
      inComingQueueOfQueueCount: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'string',
      maxWorkTime: 'number',
      overFlowInQueueOfQueueCount: 'number',
      queueMaxWaitTimeDuration: 'number',
      queueWaitTimeDuration: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      serviceLevel20: 'number',
      totalRingTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportOutbound extends $tea.Model {
  answerRate?: number;
  averageDialingTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  callsAnswered?: number;
  callsDialed?: number;
  maxDialingTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  totalDialingTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      answerRate: 'AnswerRate',
      averageDialingTime: 'AverageDialingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsAnswered: 'CallsAnswered',
      callsDialed: 'CallsDialed',
      maxDialingTime: 'MaxDialingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalDialingTime: 'TotalDialingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerRate: 'number',
      averageDialingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsAnswered: 'number',
      callsDialed: 'number',
      maxDialingTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalDialingTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportOverall extends $tea.Model {
  averageReadyTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  maxReadyTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  occupancyRate?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  totalBreakTime?: number;
  totalCalls?: number;
  totalLoggedInTime?: number;
  totalReadyTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageReadyTime: 'AverageReadyTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      maxReadyTime: 'MaxReadyTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      occupancyRate: 'OccupancyRate',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalBreakTime: 'TotalBreakTime',
      totalCalls: 'TotalCalls',
      totalLoggedInTime: 'TotalLoggedInTime',
      totalReadyTime: 'TotalReadyTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageReadyTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      maxReadyTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      occupancyRate: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalBreakTime: 'number',
      totalCalls: 'number',
      totalLoggedInTime: 'number',
      totalReadyTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReport extends $tea.Model {
  inbound?: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportInbound;
  instanceId?: string;
  outbound?: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportOutbound;
  overall?: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportOverall;
  skillGroupId?: string;
  skillGroupName?: string;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      inbound: 'Inbound',
      instanceId: 'InstanceId',
      outbound: 'Outbound',
      overall: 'Overall',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inbound: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportInbound,
      instanceId: 'string',
      outbound: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportOutbound,
      overall: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportOverall,
      skillGroupId: 'string',
      skillGroupName: 'string',
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportList extends $tea.Model {
  skillGroupSummaryReport?: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReport[];
  static names(): { [key: string]: string } {
    return {
      skillGroupSummaryReport: 'SkillGroupSummaryReport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupSummaryReport: { 'type': 'array', 'itemType': ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReport },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReport extends $tea.Model {
  list?: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportList;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportList,
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupsResponseBodySkillGroupsSkillGroupOutboundPhoneNumbersPhoneNumber extends $tea.Model {
  allowOutbound?: boolean;
  instanceId?: string;
  number?: string;
  phoneNumberDescription?: string;
  phoneNumberId?: string;
  remainingTime?: number;
  testOnly?: boolean;
  trunks?: number;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      allowOutbound: 'AllowOutbound',
      instanceId: 'InstanceId',
      number: 'Number',
      phoneNumberDescription: 'PhoneNumberDescription',
      phoneNumberId: 'PhoneNumberId',
      remainingTime: 'RemainingTime',
      testOnly: 'TestOnly',
      trunks: 'Trunks',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowOutbound: 'boolean',
      instanceId: 'string',
      number: 'string',
      phoneNumberDescription: 'string',
      phoneNumberId: 'string',
      remainingTime: 'number',
      testOnly: 'boolean',
      trunks: 'number',
      usage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupsResponseBodySkillGroupsSkillGroupOutboundPhoneNumbers extends $tea.Model {
  phoneNumber?: ListSkillGroupsResponseBodySkillGroupsSkillGroupOutboundPhoneNumbersPhoneNumber[];
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: { 'type': 'array', 'itemType': ListSkillGroupsResponseBodySkillGroupsSkillGroupOutboundPhoneNumbersPhoneNumber },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupsResponseBodySkillGroupsSkillGroup extends $tea.Model {
  accQueueName?: string;
  accSkillGroupName?: string;
  instanceId?: string;
  outboundPhoneNumbers?: ListSkillGroupsResponseBodySkillGroupsSkillGroupOutboundPhoneNumbers;
  routingStrategy?: string;
  skillGroupDescription?: string;
  skillGroupId?: string;
  skillGroupName?: string;
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      accQueueName: 'AccQueueName',
      accSkillGroupName: 'AccSkillGroupName',
      instanceId: 'InstanceId',
      outboundPhoneNumbers: 'OutboundPhoneNumbers',
      routingStrategy: 'RoutingStrategy',
      skillGroupDescription: 'SkillGroupDescription',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accQueueName: 'string',
      accSkillGroupName: 'string',
      instanceId: 'string',
      outboundPhoneNumbers: ListSkillGroupsResponseBodySkillGroupsSkillGroupOutboundPhoneNumbers,
      routingStrategy: 'string',
      skillGroupDescription: 'string',
      skillGroupId: 'string',
      skillGroupName: 'string',
      userCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupsResponseBodySkillGroups extends $tea.Model {
  skillGroup?: ListSkillGroupsResponseBodySkillGroupsSkillGroup[];
  static names(): { [key: string]: string } {
    return {
      skillGroup: 'SkillGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroup: { 'type': 'array', 'itemType': ListSkillGroupsResponseBodySkillGroupsSkillGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupsOfUserResponseBodySkillLevelsSkillLevelSkillOutboundPhoneNumbersPhoneNumber extends $tea.Model {
  allowOutbound?: boolean;
  city?: string;
  instanceId?: string;
  number?: string;
  phoneNumberDescription?: string;
  phoneNumberId?: string;
  province?: string;
  remainingTime?: number;
  testOnly?: boolean;
  trunks?: number;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      allowOutbound: 'AllowOutbound',
      city: 'City',
      instanceId: 'InstanceId',
      number: 'Number',
      phoneNumberDescription: 'PhoneNumberDescription',
      phoneNumberId: 'PhoneNumberId',
      province: 'Province',
      remainingTime: 'RemainingTime',
      testOnly: 'TestOnly',
      trunks: 'Trunks',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowOutbound: 'boolean',
      city: 'string',
      instanceId: 'string',
      number: 'string',
      phoneNumberDescription: 'string',
      phoneNumberId: 'string',
      province: 'string',
      remainingTime: 'number',
      testOnly: 'boolean',
      trunks: 'number',
      usage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupsOfUserResponseBodySkillLevelsSkillLevelSkillOutboundPhoneNumbers extends $tea.Model {
  phoneNumber?: ListSkillGroupsOfUserResponseBodySkillLevelsSkillLevelSkillOutboundPhoneNumbersPhoneNumber[];
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: { 'type': 'array', 'itemType': ListSkillGroupsOfUserResponseBodySkillLevelsSkillLevelSkillOutboundPhoneNumbersPhoneNumber },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupsOfUserResponseBodySkillLevelsSkillLevelSkill extends $tea.Model {
  instanceId?: string;
  outboundPhoneNumbers?: ListSkillGroupsOfUserResponseBodySkillLevelsSkillLevelSkillOutboundPhoneNumbers;
  routingStrategy?: string;
  skillGroupDescription?: string;
  skillGroupId?: string;
  skillGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      outboundPhoneNumbers: 'OutboundPhoneNumbers',
      routingStrategy: 'RoutingStrategy',
      skillGroupDescription: 'SkillGroupDescription',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      outboundPhoneNumbers: ListSkillGroupsOfUserResponseBodySkillLevelsSkillLevelSkillOutboundPhoneNumbers,
      routingStrategy: 'string',
      skillGroupDescription: 'string',
      skillGroupId: 'string',
      skillGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupsOfUserResponseBodySkillLevelsSkillLevel extends $tea.Model {
  level?: number;
  skill?: ListSkillGroupsOfUserResponseBodySkillLevelsSkillLevelSkill;
  skillLevelId?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      skill: 'Skill',
      skillLevelId: 'SkillLevelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'number',
      skill: ListSkillGroupsOfUserResponseBodySkillLevelsSkillLevelSkill,
      skillLevelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupsOfUserResponseBodySkillLevels extends $tea.Model {
  skillLevel?: ListSkillGroupsOfUserResponseBodySkillLevelsSkillLevel[];
  static names(): { [key: string]: string } {
    return {
      skillLevel: 'SkillLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillLevel: { 'type': 'array', 'itemType': ListSkillGroupsOfUserResponseBodySkillLevelsSkillLevel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSurveysResponseBodySurveysAsrCustomModel extends $tea.Model {
  corpora?: string;
  customModelStatus?: number;
  static names(): { [key: string]: string } {
    return {
      corpora: 'Corpora',
      customModelStatus: 'CustomModelStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpora: 'string',
      customModelStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSurveysResponseBodySurveysFlow extends $tea.Model {
  flowId?: string;
  flowJson?: string;
  isPublished?: boolean;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      flowJson: 'FlowJson',
      isPublished: 'IsPublished',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      flowJson: 'string',
      isPublished: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSurveysResponseBodySurveys extends $tea.Model {
  asrCustomModel?: ListSurveysResponseBodySurveysAsrCustomModel;
  description?: string;
  flow?: ListSurveysResponseBodySurveysFlow;
  globalQuestions?: string;
  hotWords?: string;
  id?: string;
  name?: string;
  role?: string;
  round?: number;
  scenarioUuid?: string;
  speechOptimizationParam?: string;
  static names(): { [key: string]: string } {
    return {
      asrCustomModel: 'AsrCustomModel',
      description: 'Description',
      flow: 'Flow',
      globalQuestions: 'GlobalQuestions',
      hotWords: 'HotWords',
      id: 'Id',
      name: 'Name',
      role: 'Role',
      round: 'Round',
      scenarioUuid: 'ScenarioUuid',
      speechOptimizationParam: 'SpeechOptimizationParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrCustomModel: ListSurveysResponseBodySurveysAsrCustomModel,
      description: 'string',
      flow: ListSurveysResponseBodySurveysFlow,
      globalQuestions: 'string',
      hotWords: 'string',
      id: 'string',
      name: 'string',
      role: 'string',
      round: 'number',
      scenarioUuid: 'string',
      speechOptimizationParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransferableSkillGroupsResponseBodySkillGroups extends $tea.Model {
  accQueueName?: string;
  accSkillGroupName?: string;
  allowPrivateOutboundNumber?: boolean;
  instanceId?: string;
  routingStrategy?: string;
  skillGroupDescription?: string;
  skillGroupId?: string;
  skillGroupName?: string;
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      accQueueName: 'AccQueueName',
      accSkillGroupName: 'AccSkillGroupName',
      allowPrivateOutboundNumber: 'AllowPrivateOutboundNumber',
      instanceId: 'InstanceId',
      routingStrategy: 'RoutingStrategy',
      skillGroupDescription: 'SkillGroupDescription',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accQueueName: 'string',
      accSkillGroupName: 'string',
      allowPrivateOutboundNumber: 'boolean',
      instanceId: 'string',
      routingStrategy: 'string',
      skillGroupDescription: 'string',
      skillGroupId: 'string',
      skillGroupName: 'string',
      userCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrunkProvidersResponseBodyTrunkProviders extends $tea.Model {
  providerName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      providerName: 'ProviderName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      providerName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrunksOfSkillGroupResponseBodyTrunkConfigs extends $tea.Model {
  primary?: boolean;
  providerName?: string;
  static names(): { [key: string]: string } {
    return {
      primary: 'Primary',
      providerName: 'ProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      primary: 'boolean',
      providerName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUnreachableContactsResponseBodyUnreachableContactsListContacts extends $tea.Model {
  contactId?: string;
  contactName?: string;
  phoneNumber?: string;
  referenceId?: string;
  role?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      contactName: 'ContactName',
      phoneNumber: 'PhoneNumber',
      referenceId: 'ReferenceId',
      role: 'Role',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      contactName: 'string',
      phoneNumber: 'string',
      referenceId: 'string',
      role: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUnreachableContactsResponseBodyUnreachableContactsList extends $tea.Model {
  contacts?: ListUnreachableContactsResponseBodyUnreachableContactsListContacts[];
  totalAttempts?: number;
  static names(): { [key: string]: string } {
    return {
      contacts: 'Contacts',
      totalAttempts: 'TotalAttempts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contacts: { 'type': 'array', 'itemType': ListUnreachableContactsResponseBodyUnreachableContactsListContacts },
      totalAttempts: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUnreachableContactsResponseBodyUnreachableContacts extends $tea.Model {
  list?: ListUnreachableContactsResponseBodyUnreachableContactsList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListUnreachableContactsResponseBodyUnreachableContactsList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsersListUserDetail extends $tea.Model {
  department?: string;
  displayName?: string;
  email?: string;
  loginName?: string;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      department: 'Department',
      displayName: 'DisplayName',
      email: 'Email',
      loginName: 'LoginName',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      department: 'string',
      displayName: 'string',
      email: 'string',
      loginName: 'string',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsersListUserRolesRole extends $tea.Model {
  instanceId?: string;
  roleDescription?: string;
  roleId?: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      roleDescription: 'RoleDescription',
      roleId: 'RoleId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      roleDescription: 'string',
      roleId: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsersListUserRoles extends $tea.Model {
  role?: ListUsersResponseBodyUsersListUserRolesRole[];
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: { 'type': 'array', 'itemType': ListUsersResponseBodyUsersListUserRolesRole },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsersListUserSkillLevelsSkillLevelSkill extends $tea.Model {
  instanceId?: string;
  skillGroupDescription?: string;
  skillGroupId?: string;
  skillGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupDescription: 'SkillGroupDescription',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupDescription: 'string',
      skillGroupId: 'string',
      skillGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsersListUserSkillLevelsSkillLevel extends $tea.Model {
  level?: number;
  skill?: ListUsersResponseBodyUsersListUserSkillLevelsSkillLevelSkill;
  skillLevelId?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      skill: 'Skill',
      skillLevelId: 'SkillLevelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'number',
      skill: ListUsersResponseBodyUsersListUserSkillLevelsSkillLevelSkill,
      skillLevelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsersListUserSkillLevels extends $tea.Model {
  skillLevel?: ListUsersResponseBodyUsersListUserSkillLevelsSkillLevel[];
  static names(): { [key: string]: string } {
    return {
      skillLevel: 'SkillLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillLevel: { 'type': 'array', 'itemType': ListUsersResponseBodyUsersListUserSkillLevelsSkillLevel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsersListUser extends $tea.Model {
  detail?: ListUsersResponseBodyUsersListUserDetail;
  instanceId?: string;
  primary?: boolean;
  privateOutboundNumberId?: string;
  ramId?: string;
  roles?: ListUsersResponseBodyUsersListUserRoles;
  skillLevels?: ListUsersResponseBodyUsersListUserSkillLevels;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      instanceId: 'InstanceId',
      primary: 'Primary',
      privateOutboundNumberId: 'PrivateOutboundNumberId',
      ramId: 'RamId',
      roles: 'Roles',
      skillLevels: 'SkillLevels',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: ListUsersResponseBodyUsersListUserDetail,
      instanceId: 'string',
      primary: 'boolean',
      privateOutboundNumberId: 'string',
      ramId: 'string',
      roles: ListUsersResponseBodyUsersListUserRoles,
      skillLevels: ListUsersResponseBodyUsersListUserSkillLevels,
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsersList extends $tea.Model {
  user?: ListUsersResponseBodyUsersListUser[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': ListUsersResponseBodyUsersListUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsers extends $tea.Model {
  list?: ListUsersResponseBodyUsersList;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: ListUsersResponseBodyUsersList,
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersOfSkillGroupResponseBodyUsersListUserDetail extends $tea.Model {
  department?: string;
  displayName?: string;
  email?: string;
  loginName?: string;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      department: 'Department',
      displayName: 'DisplayName',
      email: 'Email',
      loginName: 'LoginName',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      department: 'string',
      displayName: 'string',
      email: 'string',
      loginName: 'string',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersOfSkillGroupResponseBodyUsersListUserRolesRolePrivilegesPrivilege extends $tea.Model {
  privilegeDescription?: string;
  privilegeId?: string;
  privilegeName?: string;
  static names(): { [key: string]: string } {
    return {
      privilegeDescription: 'PrivilegeDescription',
      privilegeId: 'PrivilegeId',
      privilegeName: 'PrivilegeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privilegeDescription: 'string',
      privilegeId: 'string',
      privilegeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersOfSkillGroupResponseBodyUsersListUserRolesRolePrivileges extends $tea.Model {
  privilege?: ListUsersOfSkillGroupResponseBodyUsersListUserRolesRolePrivilegesPrivilege[];
  static names(): { [key: string]: string } {
    return {
      privilege: 'Privilege',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privilege: { 'type': 'array', 'itemType': ListUsersOfSkillGroupResponseBodyUsersListUserRolesRolePrivilegesPrivilege },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersOfSkillGroupResponseBodyUsersListUserRolesRole extends $tea.Model {
  instanceId?: string;
  privileges?: ListUsersOfSkillGroupResponseBodyUsersListUserRolesRolePrivileges;
  roleDescription?: string;
  roleId?: string;
  roleName?: string;
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      privileges: 'Privileges',
      roleDescription: 'RoleDescription',
      roleId: 'RoleId',
      roleName: 'RoleName',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      privileges: ListUsersOfSkillGroupResponseBodyUsersListUserRolesRolePrivileges,
      roleDescription: 'string',
      roleId: 'string',
      roleName: 'string',
      userCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersOfSkillGroupResponseBodyUsersListUserRoles extends $tea.Model {
  role?: ListUsersOfSkillGroupResponseBodyUsersListUserRolesRole[];
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: { 'type': 'array', 'itemType': ListUsersOfSkillGroupResponseBodyUsersListUserRolesRole },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersOfSkillGroupResponseBodyUsersListUserSkillLevelsSkillLevelSkill extends $tea.Model {
  instanceId?: string;
  skillGroupDescription?: string;
  skillGroupId?: string;
  skillGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupDescription: 'SkillGroupDescription',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupDescription: 'string',
      skillGroupId: 'string',
      skillGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersOfSkillGroupResponseBodyUsersListUserSkillLevelsSkillLevel extends $tea.Model {
  level?: number;
  skill?: ListUsersOfSkillGroupResponseBodyUsersListUserSkillLevelsSkillLevelSkill;
  skillLevelId?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      skill: 'Skill',
      skillLevelId: 'SkillLevelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'number',
      skill: ListUsersOfSkillGroupResponseBodyUsersListUserSkillLevelsSkillLevelSkill,
      skillLevelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersOfSkillGroupResponseBodyUsersListUserSkillLevels extends $tea.Model {
  skillLevel?: ListUsersOfSkillGroupResponseBodyUsersListUserSkillLevelsSkillLevel[];
  static names(): { [key: string]: string } {
    return {
      skillLevel: 'SkillLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillLevel: { 'type': 'array', 'itemType': ListUsersOfSkillGroupResponseBodyUsersListUserSkillLevelsSkillLevel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersOfSkillGroupResponseBodyUsersListUser extends $tea.Model {
  detail?: ListUsersOfSkillGroupResponseBodyUsersListUserDetail;
  instanceId?: string;
  ramId?: string;
  roles?: ListUsersOfSkillGroupResponseBodyUsersListUserRoles;
  skillLevels?: ListUsersOfSkillGroupResponseBodyUsersListUserSkillLevels;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      instanceId: 'InstanceId',
      ramId: 'RamId',
      roles: 'Roles',
      skillLevels: 'SkillLevels',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: ListUsersOfSkillGroupResponseBodyUsersListUserDetail,
      instanceId: 'string',
      ramId: 'string',
      roles: ListUsersOfSkillGroupResponseBodyUsersListUserRoles,
      skillLevels: ListUsersOfSkillGroupResponseBodyUsersListUserSkillLevels,
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersOfSkillGroupResponseBodyUsersList extends $tea.Model {
  user?: ListUsersOfSkillGroupResponseBodyUsersListUser[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': ListUsersOfSkillGroupResponseBodyUsersListUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersOfSkillGroupResponseBodyUsers extends $tea.Model {
  list?: ListUsersOfSkillGroupResponseBodyUsersList;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: ListUsersOfSkillGroupResponseBodyUsersList,
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceAppraiseResponseBodyContactFlowPhoneNumbersPhoneNumber extends $tea.Model {
  instanceId?: string;
  number?: string;
  phoneNumberDescription?: string;
  phoneNumberId?: string;
  remainingTime?: number;
  trunks?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      number: 'Number',
      phoneNumberDescription: 'PhoneNumberDescription',
      phoneNumberId: 'PhoneNumberId',
      remainingTime: 'RemainingTime',
      trunks: 'Trunks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      number: 'string',
      phoneNumberDescription: 'string',
      phoneNumberId: 'string',
      remainingTime: 'number',
      trunks: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceAppraiseResponseBodyContactFlowPhoneNumbers extends $tea.Model {
  phoneNumber?: ListVoiceAppraiseResponseBodyContactFlowPhoneNumbersPhoneNumber[];
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: { 'type': 'array', 'itemType': ListVoiceAppraiseResponseBodyContactFlowPhoneNumbersPhoneNumber },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceAppraiseResponseBodyContactFlowVersionsContactFlowVersion extends $tea.Model {
  contactFlowVersionDescription?: string;
  contactFlowVersionId?: string;
  content?: string;
  lastModified?: string;
  lastModifiedBy?: string;
  status?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      contactFlowVersionDescription: 'ContactFlowVersionDescription',
      contactFlowVersionId: 'ContactFlowVersionId',
      content: 'Content',
      lastModified: 'LastModified',
      lastModifiedBy: 'LastModifiedBy',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowVersionDescription: 'string',
      contactFlowVersionId: 'string',
      content: 'string',
      lastModified: 'string',
      lastModifiedBy: 'string',
      status: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceAppraiseResponseBodyContactFlowVersions extends $tea.Model {
  contactFlowVersion?: ListVoiceAppraiseResponseBodyContactFlowVersionsContactFlowVersion[];
  static names(): { [key: string]: string } {
    return {
      contactFlowVersion: 'ContactFlowVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowVersion: { 'type': 'array', 'itemType': ListVoiceAppraiseResponseBodyContactFlowVersionsContactFlowVersion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceAppraiseResponseBodyContactFlow extends $tea.Model {
  appliedVersion?: string;
  contactFlowDescription?: string;
  contactFlowId?: string;
  contactFlowName?: string;
  instanceId?: string;
  phoneNumbers?: ListVoiceAppraiseResponseBodyContactFlowPhoneNumbers;
  type?: string;
  versions?: ListVoiceAppraiseResponseBodyContactFlowVersions;
  static names(): { [key: string]: string } {
    return {
      appliedVersion: 'AppliedVersion',
      contactFlowDescription: 'ContactFlowDescription',
      contactFlowId: 'ContactFlowId',
      contactFlowName: 'ContactFlowName',
      instanceId: 'InstanceId',
      phoneNumbers: 'PhoneNumbers',
      type: 'Type',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedVersion: 'string',
      contactFlowDescription: 'string',
      contactFlowId: 'string',
      contactFlowName: 'string',
      instanceId: 'string',
      phoneNumbers: ListVoiceAppraiseResponseBodyContactFlowPhoneNumbers,
      type: 'string',
      versions: ListVoiceAppraiseResponseBodyContactFlowVersions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCabInstanceResponseBodyInstance extends $tea.Model {
  callCenterInstanceId?: string;
  creationTime?: number;
  instanceDescription?: string;
  instanceId?: string;
  instanceName?: string;
  maxConcurrentConversation?: number;
  owner?: string;
  static names(): { [key: string]: string } {
    return {
      callCenterInstanceId: 'CallCenterInstanceId',
      creationTime: 'CreationTime',
      instanceDescription: 'InstanceDescription',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      maxConcurrentConversation: 'MaxConcurrentConversation',
      owner: 'Owner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callCenterInstanceId: 'string',
      creationTime: 'number',
      instanceDescription: 'string',
      instanceId: 'string',
      instanceName: 'string',
      maxConcurrentConversation: 'number',
      owner: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPhoneNumberResponseBodyPhoneNumberContactFlow extends $tea.Model {
  contactFlowDescription?: string;
  contactFlowId?: string;
  contactFlowName?: string;
  instanceId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      contactFlowDescription: 'ContactFlowDescription',
      contactFlowId: 'ContactFlowId',
      contactFlowName: 'ContactFlowName',
      instanceId: 'InstanceId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowDescription: 'string',
      contactFlowId: 'string',
      contactFlowName: 'string',
      instanceId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPhoneNumberResponseBodyPhoneNumberSkillGroupsSkillGroup extends $tea.Model {
  skillGroupId?: string;
  skillGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupId: 'string',
      skillGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPhoneNumberResponseBodyPhoneNumberSkillGroups extends $tea.Model {
  skillGroup?: ModifyPhoneNumberResponseBodyPhoneNumberSkillGroupsSkillGroup[];
  static names(): { [key: string]: string } {
    return {
      skillGroup: 'SkillGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroup: { 'type': 'array', 'itemType': ModifyPhoneNumberResponseBodyPhoneNumberSkillGroupsSkillGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPhoneNumberResponseBodyPhoneNumber extends $tea.Model {
  allowOutbound?: boolean;
  contactFlow?: ModifyPhoneNumberResponseBodyPhoneNumberContactFlow;
  instanceId?: string;
  number?: string;
  phoneNumberDescription?: string;
  phoneNumberId?: string;
  remainingTime?: number;
  skillGroups?: ModifyPhoneNumberResponseBodyPhoneNumberSkillGroups;
  testOnly?: boolean;
  trunks?: number;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      allowOutbound: 'AllowOutbound',
      contactFlow: 'ContactFlow',
      instanceId: 'InstanceId',
      number: 'Number',
      phoneNumberDescription: 'PhoneNumberDescription',
      phoneNumberId: 'PhoneNumberId',
      remainingTime: 'RemainingTime',
      skillGroups: 'SkillGroups',
      testOnly: 'TestOnly',
      trunks: 'Trunks',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowOutbound: 'boolean',
      contactFlow: ModifyPhoneNumberResponseBodyPhoneNumberContactFlow,
      instanceId: 'string',
      number: 'string',
      phoneNumberDescription: 'string',
      phoneNumberId: 'string',
      remainingTime: 'number',
      skillGroups: ModifyPhoneNumberResponseBodyPhoneNumberSkillGroups,
      testOnly: 'boolean',
      trunks: 'number',
      usage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScenarioResponseBodyScenarioStrategyWorkingTime extends $tea.Model {
  beginTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScenarioResponseBodyScenarioStrategy extends $tea.Model {
  customized?: string;
  endTime?: number;
  followUpStrategy?: string;
  isTemplate?: boolean;
  maxAttemptsPerDay?: number;
  minAttemptInterval?: number;
  repeatBy?: string;
  repeatDays?: string[];
  routingStrategy?: string;
  startTime?: number;
  strategyDescription?: string;
  strategyId?: string;
  strategyName?: string;
  type?: string;
  workingTime?: ModifyScenarioResponseBodyScenarioStrategyWorkingTime[];
  static names(): { [key: string]: string } {
    return {
      customized: 'Customized',
      endTime: 'EndTime',
      followUpStrategy: 'FollowUpStrategy',
      isTemplate: 'IsTemplate',
      maxAttemptsPerDay: 'MaxAttemptsPerDay',
      minAttemptInterval: 'MinAttemptInterval',
      repeatBy: 'RepeatBy',
      repeatDays: 'RepeatDays',
      routingStrategy: 'RoutingStrategy',
      startTime: 'StartTime',
      strategyDescription: 'StrategyDescription',
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
      type: 'Type',
      workingTime: 'WorkingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customized: 'string',
      endTime: 'number',
      followUpStrategy: 'string',
      isTemplate: 'boolean',
      maxAttemptsPerDay: 'number',
      minAttemptInterval: 'number',
      repeatBy: 'string',
      repeatDays: { 'type': 'array', 'itemType': 'string' },
      routingStrategy: 'string',
      startTime: 'number',
      strategyDescription: 'string',
      strategyId: 'string',
      strategyName: 'string',
      type: 'string',
      workingTime: { 'type': 'array', 'itemType': ModifyScenarioResponseBodyScenarioStrategyWorkingTime },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScenarioResponseBodyScenarioSurveysIntents extends $tea.Model {
  intentId?: string;
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      intentId: 'IntentId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentId: 'string',
      nodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScenarioResponseBodyScenarioSurveys extends $tea.Model {
  beebotId?: string;
  intents?: ModifyScenarioResponseBodyScenarioSurveysIntents[];
  role?: string;
  round?: number;
  surveyDescription?: string;
  surveyId?: string;
  surveyName?: string;
  static names(): { [key: string]: string } {
    return {
      beebotId: 'BeebotId',
      intents: 'Intents',
      role: 'Role',
      round: 'Round',
      surveyDescription: 'SurveyDescription',
      surveyId: 'SurveyId',
      surveyName: 'SurveyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beebotId: 'string',
      intents: { 'type': 'array', 'itemType': ModifyScenarioResponseBodyScenarioSurveysIntents },
      role: 'string',
      round: 'number',
      surveyDescription: 'string',
      surveyId: 'string',
      surveyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScenarioResponseBodyScenarioVariables extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScenarioResponseBodyScenario extends $tea.Model {
  isTemplate?: boolean;
  scenarioDescription?: string;
  scenarioId?: string;
  scenarioName?: string;
  strategy?: ModifyScenarioResponseBodyScenarioStrategy;
  surveys?: ModifyScenarioResponseBodyScenarioSurveys[];
  type?: string;
  variables?: ModifyScenarioResponseBodyScenarioVariables[];
  static names(): { [key: string]: string } {
    return {
      isTemplate: 'IsTemplate',
      scenarioDescription: 'ScenarioDescription',
      scenarioId: 'ScenarioId',
      scenarioName: 'ScenarioName',
      strategy: 'Strategy',
      surveys: 'Surveys',
      type: 'Type',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTemplate: 'boolean',
      scenarioDescription: 'string',
      scenarioId: 'string',
      scenarioName: 'string',
      strategy: ModifyScenarioResponseBodyScenarioStrategy,
      surveys: { 'type': 'array', 'itemType': ModifyScenarioResponseBodyScenarioSurveys },
      type: 'string',
      variables: { 'type': 'array', 'itemType': ModifyScenarioResponseBodyScenarioVariables },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySurveyResponseBodySurveyAsrCustomModel extends $tea.Model {
  corpora?: string;
  customModelStatus?: number;
  static names(): { [key: string]: string } {
    return {
      corpora: 'Corpora',
      customModelStatus: 'CustomModelStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpora: 'string',
      customModelStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySurveyResponseBodySurveyFlow extends $tea.Model {
  flowId?: string;
  flowJson?: string;
  isPublished?: boolean;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      flowJson: 'FlowJson',
      isPublished: 'IsPublished',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      flowJson: 'string',
      isPublished: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySurveyResponseBodySurvey extends $tea.Model {
  asrCustomModel?: ModifySurveyResponseBodySurveyAsrCustomModel;
  description?: string;
  flow?: ModifySurveyResponseBodySurveyFlow;
  globalQuestions?: string;
  hotWords?: string;
  id?: string;
  name?: string;
  role?: string;
  round?: number;
  scenarioUuid?: string;
  speechOptimizationParam?: string;
  static names(): { [key: string]: string } {
    return {
      asrCustomModel: 'AsrCustomModel',
      description: 'Description',
      flow: 'Flow',
      globalQuestions: 'GlobalQuestions',
      hotWords: 'HotWords',
      id: 'Id',
      name: 'Name',
      role: 'Role',
      round: 'Round',
      scenarioUuid: 'ScenarioUuid',
      speechOptimizationParam: 'SpeechOptimizationParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrCustomModel: ModifySurveyResponseBodySurveyAsrCustomModel,
      description: 'string',
      flow: ModifySurveyResponseBodySurveyFlow,
      globalQuestions: 'string',
      hotWords: 'string',
      id: 'string',
      name: 'string',
      role: 'string',
      round: 'number',
      scenarioUuid: 'string',
      speechOptimizationParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickGlobalOutboundNumbersResponseBodyDialNumberPairsDialNumberPairCallee extends $tea.Model {
  city?: string;
  number?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      number: 'Number',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      number: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickGlobalOutboundNumbersResponseBodyDialNumberPairsDialNumberPairCaller extends $tea.Model {
  city?: string;
  number?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      number: 'Number',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      number: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickGlobalOutboundNumbersResponseBodyDialNumberPairsDialNumberPair extends $tea.Model {
  callee?: PickGlobalOutboundNumbersResponseBodyDialNumberPairsDialNumberPairCallee;
  caller?: PickGlobalOutboundNumbersResponseBodyDialNumberPairsDialNumberPairCaller;
  static names(): { [key: string]: string } {
    return {
      callee: 'Callee',
      caller: 'Caller',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callee: PickGlobalOutboundNumbersResponseBodyDialNumberPairsDialNumberPairCallee,
      caller: PickGlobalOutboundNumbersResponseBodyDialNumberPairsDialNumberPairCaller,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickGlobalOutboundNumbersResponseBodyDialNumberPairs extends $tea.Model {
  dialNumberPair?: PickGlobalOutboundNumbersResponseBodyDialNumberPairsDialNumberPair[];
  static names(): { [key: string]: string } {
    return {
      dialNumberPair: 'DialNumberPair',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialNumberPair: { 'type': 'array', 'itemType': PickGlobalOutboundNumbersResponseBodyDialNumberPairsDialNumberPair },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickLocalNumberResponseBodyDataCallee extends $tea.Model {
  city?: string;
  number?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      number: 'Number',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      number: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickLocalNumberResponseBodyDataCaller extends $tea.Model {
  city?: string;
  number?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      number: 'Number',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      number: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickLocalNumberResponseBodyData extends $tea.Model {
  callee?: PickLocalNumberResponseBodyDataCallee;
  caller?: PickLocalNumberResponseBodyDataCaller;
  static names(): { [key: string]: string } {
    return {
      callee: 'Callee',
      caller: 'Caller',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callee: PickLocalNumberResponseBodyDataCallee,
      caller: PickLocalNumberResponseBodyDataCaller,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickOutboundNumbersResponseBodyDialNumberPairsDialNumberPairCallee extends $tea.Model {
  city?: string;
  number?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      number: 'Number',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      number: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickOutboundNumbersResponseBodyDialNumberPairsDialNumberPairCaller extends $tea.Model {
  city?: string;
  number?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      number: 'Number',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      number: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickOutboundNumbersResponseBodyDialNumberPairsDialNumberPair extends $tea.Model {
  callee?: PickOutboundNumbersResponseBodyDialNumberPairsDialNumberPairCallee;
  caller?: PickOutboundNumbersResponseBodyDialNumberPairsDialNumberPairCaller;
  static names(): { [key: string]: string } {
    return {
      callee: 'Callee',
      caller: 'Caller',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callee: PickOutboundNumbersResponseBodyDialNumberPairsDialNumberPairCallee,
      caller: PickOutboundNumbersResponseBodyDialNumberPairsDialNumberPairCaller,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickOutboundNumbersResponseBodyDialNumberPairs extends $tea.Model {
  dialNumberPair?: PickOutboundNumbersResponseBodyDialNumberPairsDialNumberPair[];
  static names(): { [key: string]: string } {
    return {
      dialNumberPair: 'DialNumberPair',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialNumberPair: { 'type': 'array', 'itemType': PickOutboundNumbersResponseBodyDialNumberPairsDialNumberPair },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshTokenResponseBodyToken extends $tea.Model {
  signData?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      signData: 'SignData',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signData: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestLoginInfoResponseBodyLoginInfoRolesRole extends $tea.Model {
  instanceId?: string;
  roleDescription?: string;
  roleId?: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      roleDescription: 'RoleDescription',
      roleId: 'RoleId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      roleDescription: 'string',
      roleId: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestLoginInfoResponseBodyLoginInfoRoles extends $tea.Model {
  role?: RequestLoginInfoResponseBodyLoginInfoRolesRole[];
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: { 'type': 'array', 'itemType': RequestLoginInfoResponseBodyLoginInfoRolesRole },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestLoginInfoResponseBodyLoginInfo extends $tea.Model {
  agentServerUrl?: string;
  displayName?: string;
  extension?: string;
  phoneNumber?: string;
  region?: string;
  roles?: RequestLoginInfoResponseBodyLoginInfoRoles;
  signData?: string;
  signature?: string;
  tenantId?: string;
  userName?: string;
  webRtcUrl?: string;
  static names(): { [key: string]: string } {
    return {
      agentServerUrl: 'AgentServerUrl',
      displayName: 'DisplayName',
      extension: 'Extension',
      phoneNumber: 'PhoneNumber',
      region: 'Region',
      roles: 'Roles',
      signData: 'SignData',
      signature: 'Signature',
      tenantId: 'TenantId',
      userName: 'UserName',
      webRtcUrl: 'WebRtcUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentServerUrl: 'string',
      displayName: 'string',
      extension: 'string',
      phoneNumber: 'string',
      region: 'string',
      roles: RequestLoginInfoResponseBodyLoginInfoRoles,
      signData: 'string',
      signature: 'string',
      tenantId: 'string',
      userName: 'string',
      webRtcUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobResponseBodyTaskIds extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
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
      'ap-northeast-1': "ccc.aliyuncs.com",
      'ap-south-1': "ccc.aliyuncs.com",
      'ap-southeast-1': "ccc.aliyuncs.com",
      'ap-southeast-2': "ccc.aliyuncs.com",
      'ap-southeast-3': "ccc.aliyuncs.com",
      'ap-southeast-5': "ccc.aliyuncs.com",
      'cn-beijing': "ccc.aliyuncs.com",
      'cn-chengdu': "ccc.aliyuncs.com",
      'cn-hongkong': "ccc.aliyuncs.com",
      'cn-huhehaote': "ccc.aliyuncs.com",
      'cn-qingdao': "ccc.aliyuncs.com",
      'cn-shenzhen': "ccc.aliyuncs.com",
      'cn-zhangjiakou': "ccc.aliyuncs.com",
      'eu-central-1': "ccc.aliyuncs.com",
      'eu-west-1': "ccc.aliyuncs.com",
      'me-east-1': "ccc.aliyuncs.com",
      'us-east-1': "ccc.aliyuncs.com",
      'us-west-1': "ccc.aliyuncs.com",
      'cn-hangzhou-finance': "ccc.aliyuncs.com",
      'cn-shenzhen-finance-1': "ccc.aliyuncs.com",
      'cn-shanghai-finance-1': "ccc.aliyuncs.com",
      'cn-north-2-gov-1': "ccc.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ccc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async abortPredictiveJobsWithOptions(request: AbortPredictiveJobsRequest, runtime: $Util.RuntimeOptions): Promise<AbortPredictiveJobsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AbortPredictiveJobsResponse>(await this.doRPCRequest("AbortPredictiveJobs", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new AbortPredictiveJobsResponse({}));
  }

  async abortPredictiveJobs(request: AbortPredictiveJobsRequest): Promise<AbortPredictiveJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.abortPredictiveJobsWithOptions(request, runtime);
  }

  async addAgentDeviceWithOptions(request: AddAgentDeviceRequest, runtime: $Util.RuntimeOptions): Promise<AddAgentDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddAgentDeviceResponse>(await this.doRPCRequest("AddAgentDevice", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new AddAgentDeviceResponse({}));
  }

  async addAgentDevice(request: AddAgentDeviceRequest): Promise<AddAgentDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addAgentDeviceWithOptions(request, runtime);
  }

  async addBulkPhoneNumbersWithOptions(request: AddBulkPhoneNumbersRequest, runtime: $Util.RuntimeOptions): Promise<AddBulkPhoneNumbersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddBulkPhoneNumbersResponse>(await this.doRPCRequest("AddBulkPhoneNumbers", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new AddBulkPhoneNumbersResponse({}));
  }

  async addBulkPhoneNumbers(request: AddBulkPhoneNumbersRequest): Promise<AddBulkPhoneNumbersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addBulkPhoneNumbersWithOptions(request, runtime);
  }

  async addJobsToPredictiveJobGroupWithOptions(request: AddJobsToPredictiveJobGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddJobsToPredictiveJobGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddJobsToPredictiveJobGroupResponse>(await this.doRPCRequest("AddJobsToPredictiveJobGroup", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new AddJobsToPredictiveJobGroupResponse({}));
  }

  async addJobsToPredictiveJobGroup(request: AddJobsToPredictiveJobGroupRequest): Promise<AddJobsToPredictiveJobGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addJobsToPredictiveJobGroupWithOptions(request, runtime);
  }

  async addPhoneNumberWithOptions(request: AddPhoneNumberRequest, runtime: $Util.RuntimeOptions): Promise<AddPhoneNumberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddPhoneNumberResponse>(await this.doRPCRequest("AddPhoneNumber", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new AddPhoneNumberResponse({}));
  }

  async addPhoneNumber(request: AddPhoneNumberRequest): Promise<AddPhoneNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addPhoneNumberWithOptions(request, runtime);
  }

  async addPhoneTagsWithOptions(request: AddPhoneTagsRequest, runtime: $Util.RuntimeOptions): Promise<AddPhoneTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddPhoneTagsResponse>(await this.doRPCRequest("AddPhoneTags", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new AddPhoneTagsResponse({}));
  }

  async addPhoneTags(request: AddPhoneTagsRequest): Promise<AddPhoneTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addPhoneTagsWithOptions(request, runtime);
  }

  async assignJobsWithOptions(request: AssignJobsRequest, runtime: $Util.RuntimeOptions): Promise<AssignJobsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssignJobsResponse>(await this.doRPCRequest("AssignJobs", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new AssignJobsResponse({}));
  }

  async assignJobs(request: AssignJobsRequest): Promise<AssignJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.assignJobsWithOptions(request, runtime);
  }

  async assignUsersWithOptions(request: AssignUsersRequest, runtime: $Util.RuntimeOptions): Promise<AssignUsersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssignUsersResponse>(await this.doRPCRequest("AssignUsers", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new AssignUsersResponse({}));
  }

  async assignUsers(request: AssignUsersRequest): Promise<AssignUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.assignUsersWithOptions(request, runtime);
  }

  async callOnlinePrivacyNumberWithOptions(request: CallOnlinePrivacyNumberRequest, runtime: $Util.RuntimeOptions): Promise<CallOnlinePrivacyNumberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CallOnlinePrivacyNumberResponse>(await this.doRPCRequest("CallOnlinePrivacyNumber", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new CallOnlinePrivacyNumberResponse({}));
  }

  async callOnlinePrivacyNumber(request: CallOnlinePrivacyNumberRequest): Promise<CallOnlinePrivacyNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.callOnlinePrivacyNumberWithOptions(request, runtime);
  }

  async cancelJobsWithOptions(request: CancelJobsRequest, runtime: $Util.RuntimeOptions): Promise<CancelJobsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelJobsResponse>(await this.doRPCRequest("CancelJobs", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new CancelJobsResponse({}));
  }

  async cancelJobs(request: CancelJobsRequest): Promise<CancelJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelJobsWithOptions(request, runtime);
  }

  async checkNumberAvaliableWithOptions(request: CheckNumberAvaliableRequest, runtime: $Util.RuntimeOptions): Promise<CheckNumberAvaliableResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckNumberAvaliableResponse>(await this.doRPCRequest("CheckNumberAvaliable", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new CheckNumberAvaliableResponse({}));
  }

  async checkNumberAvaliable(request: CheckNumberAvaliableRequest): Promise<CheckNumberAvaliableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkNumberAvaliableWithOptions(request, runtime);
  }

  async commitContactFlowVersionModificationWithOptions(request: CommitContactFlowVersionModificationRequest, runtime: $Util.RuntimeOptions): Promise<CommitContactFlowVersionModificationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CommitContactFlowVersionModificationResponse>(await this.doRPCRequest("CommitContactFlowVersionModification", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new CommitContactFlowVersionModificationResponse({}));
  }

  async commitContactFlowVersionModification(request: CommitContactFlowVersionModificationRequest): Promise<CommitContactFlowVersionModificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.commitContactFlowVersionModificationWithOptions(request, runtime);
  }

  async createBatchJobsWithOptions(request: CreateBatchJobsRequest, runtime: $Util.RuntimeOptions): Promise<CreateBatchJobsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateBatchJobsResponse>(await this.doRPCRequest("CreateBatchJobs", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new CreateBatchJobsResponse({}));
  }

  async createBatchJobs(request: CreateBatchJobsRequest): Promise<CreateBatchJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBatchJobsWithOptions(request, runtime);
  }

  async createCabInstanceWithOptions(request: CreateCabInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateCabInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCabInstanceResponse>(await this.doRPCRequest("CreateCabInstance", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCabInstanceResponse({}));
  }

  async createCabInstance(request: CreateCabInstanceRequest): Promise<CreateCabInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCabInstanceWithOptions(request, runtime);
  }

  async createContactFlowWithOptions(request: CreateContactFlowRequest, runtime: $Util.RuntimeOptions): Promise<CreateContactFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateContactFlowResponse>(await this.doRPCRequest("CreateContactFlow", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new CreateContactFlowResponse({}));
  }

  async createContactFlow(request: CreateContactFlowRequest): Promise<CreateContactFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createContactFlowWithOptions(request, runtime);
  }

  async createFaultWithOptions(request: CreateFaultRequest, runtime: $Util.RuntimeOptions): Promise<CreateFaultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFaultResponse>(await this.doRPCRequest("CreateFault", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFaultResponse({}));
  }

  async createFault(request: CreateFaultRequest): Promise<CreateFaultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFaultWithOptions(request, runtime);
  }

  async createInstanceWithOptions(request: CreateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateInstanceResponse>(await this.doRPCRequest("CreateInstance", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new CreateInstanceResponse({}));
  }

  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  async createJobGroupWithOptions(request: CreateJobGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateJobGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateJobGroupResponse>(await this.doRPCRequest("CreateJobGroup", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new CreateJobGroupResponse({}));
  }

  async createJobGroup(request: CreateJobGroupRequest): Promise<CreateJobGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createJobGroupWithOptions(request, runtime);
  }

  async createMediaWithOptions(request: CreateMediaRequest, runtime: $Util.RuntimeOptions): Promise<CreateMediaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateMediaResponse>(await this.doRPCRequest("CreateMedia", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new CreateMediaResponse({}));
  }

  async createMedia(request: CreateMediaRequest): Promise<CreateMediaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMediaWithOptions(request, runtime);
  }

  async createPredictiveJobGroupWithOptions(request: CreatePredictiveJobGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreatePredictiveJobGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreatePredictiveJobGroupResponse>(await this.doRPCRequest("CreatePredictiveJobGroup", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new CreatePredictiveJobGroupResponse({}));
  }

  async createPredictiveJobGroup(request: CreatePredictiveJobGroupRequest): Promise<CreatePredictiveJobGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPredictiveJobGroupWithOptions(request, runtime);
  }

  async createScenarioWithOptions(request: CreateScenarioRequest, runtime: $Util.RuntimeOptions): Promise<CreateScenarioResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateScenarioResponse>(await this.doRPCRequest("CreateScenario", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new CreateScenarioResponse({}));
  }

  async createScenario(request: CreateScenarioRequest): Promise<CreateScenarioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createScenarioWithOptions(request, runtime);
  }

  async createScenarioFromTemplateWithOptions(request: CreateScenarioFromTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateScenarioFromTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateScenarioFromTemplateResponse>(await this.doRPCRequest("CreateScenarioFromTemplate", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new CreateScenarioFromTemplateResponse({}));
  }

  async createScenarioFromTemplate(request: CreateScenarioFromTemplateRequest): Promise<CreateScenarioFromTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createScenarioFromTemplateWithOptions(request, runtime);
  }

  async createSkillGroupWithOptions(request: CreateSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateSkillGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSkillGroupResponse>(await this.doRPCRequest("CreateSkillGroup", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSkillGroupResponse({}));
  }

  async createSkillGroup(request: CreateSkillGroupRequest): Promise<CreateSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSkillGroupWithOptions(request, runtime);
  }

  async createSurveyWithOptions(request: CreateSurveyRequest, runtime: $Util.RuntimeOptions): Promise<CreateSurveyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSurveyResponse>(await this.doRPCRequest("CreateSurvey", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSurveyResponse({}));
  }

  async createSurvey(request: CreateSurveyRequest): Promise<CreateSurveyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSurveyWithOptions(request, runtime);
  }

  async createUserWithOptions(request: CreateUserRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateUserResponse>(await this.doRPCRequest("CreateUser", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new CreateUserResponse({}));
  }

  async createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserWithOptions(request, runtime);
  }

  async createVoiceAppraiseWithOptions(request: CreateVoiceAppraiseRequest, runtime: $Util.RuntimeOptions): Promise<CreateVoiceAppraiseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateVoiceAppraiseResponse>(await this.doRPCRequest("CreateVoiceAppraise", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new CreateVoiceAppraiseResponse({}));
  }

  async createVoiceAppraise(request: CreateVoiceAppraiseRequest): Promise<CreateVoiceAppraiseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVoiceAppraiseWithOptions(request, runtime);
  }

  async deleteInstanceWithOptions(request: DeleteInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteInstanceResponse>(await this.doRPCRequest("DeleteInstance", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteInstanceResponse({}));
  }

  async deleteInstance(request: DeleteInstanceRequest): Promise<DeleteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  async deleteJobGroupWithOptions(request: DeleteJobGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteJobGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteJobGroupResponse>(await this.doRPCRequest("DeleteJobGroup", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteJobGroupResponse({}));
  }

  async deleteJobGroup(request: DeleteJobGroupRequest): Promise<DeleteJobGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteJobGroupWithOptions(request, runtime);
  }

  async deleteMediaWithOptions(request: DeleteMediaRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMediaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteMediaResponse>(await this.doRPCRequest("DeleteMedia", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteMediaResponse({}));
  }

  async deleteMedia(request: DeleteMediaRequest): Promise<DeleteMediaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMediaWithOptions(request, runtime);
  }

  async deletePhoneTagsWithOptions(request: DeletePhoneTagsRequest, runtime: $Util.RuntimeOptions): Promise<DeletePhoneTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeletePhoneTagsResponse>(await this.doRPCRequest("DeletePhoneTags", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new DeletePhoneTagsResponse({}));
  }

  async deletePhoneTags(request: DeletePhoneTagsRequest): Promise<DeletePhoneTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePhoneTagsWithOptions(request, runtime);
  }

  async deleteSkillGroupWithOptions(request: DeleteSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSkillGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSkillGroupResponse>(await this.doRPCRequest("DeleteSkillGroup", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSkillGroupResponse({}));
  }

  async deleteSkillGroup(request: DeleteSkillGroupRequest): Promise<DeleteSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSkillGroupWithOptions(request, runtime);
  }

  async deleteSurveyWithOptions(request: DeleteSurveyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSurveyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSurveyResponse>(await this.doRPCRequest("DeleteSurvey", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSurveyResponse({}));
  }

  async deleteSurvey(request: DeleteSurveyRequest): Promise<DeleteSurveyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSurveyWithOptions(request, runtime);
  }

  async dialExWithOptions(request: DialExRequest, runtime: $Util.RuntimeOptions): Promise<DialExResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DialExResponse>(await this.doRPCRequest("DialEx", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new DialExResponse({}));
  }

  async dialEx(request: DialExRequest): Promise<DialExResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dialExWithOptions(request, runtime);
  }

  async dialogueWithOptions(request: DialogueRequest, runtime: $Util.RuntimeOptions): Promise<DialogueResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DialogueResponse>(await this.doRPCRequest("Dialogue", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new DialogueResponse({}));
  }

  async dialogue(request: DialogueRequest): Promise<DialogueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dialogueWithOptions(request, runtime);
  }

  async disableTrunkProvidersWithOptions(request: DisableTrunkProvidersRequest, runtime: $Util.RuntimeOptions): Promise<DisableTrunkProvidersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableTrunkProvidersResponse>(await this.doRPCRequest("DisableTrunkProviders", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new DisableTrunkProvidersResponse({}));
  }

  async disableTrunkProviders(request: DisableTrunkProvidersRequest): Promise<DisableTrunkProvidersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableTrunkProvidersWithOptions(request, runtime);
  }

  async downloadAllTypeRecordingWithOptions(request: DownloadAllTypeRecordingRequest, runtime: $Util.RuntimeOptions): Promise<DownloadAllTypeRecordingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DownloadAllTypeRecordingResponse>(await this.doRPCRequest("DownloadAllTypeRecording", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new DownloadAllTypeRecordingResponse({}));
  }

  async downloadAllTypeRecording(request: DownloadAllTypeRecordingRequest): Promise<DownloadAllTypeRecordingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadAllTypeRecordingWithOptions(request, runtime);
  }

  async downloadCabRecordingWithOptions(request: DownloadCabRecordingRequest, runtime: $Util.RuntimeOptions): Promise<DownloadCabRecordingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DownloadCabRecordingResponse>(await this.doRPCRequest("DownloadCabRecording", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new DownloadCabRecordingResponse({}));
  }

  async downloadCabRecording(request: DownloadCabRecordingRequest): Promise<DownloadCabRecordingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadCabRecordingWithOptions(request, runtime);
  }

  async downloadOriginalStatisticsReportWithOptions(request: DownloadOriginalStatisticsReportRequest, runtime: $Util.RuntimeOptions): Promise<DownloadOriginalStatisticsReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DownloadOriginalStatisticsReportResponse>(await this.doRPCRequest("DownloadOriginalStatisticsReport", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new DownloadOriginalStatisticsReportResponse({}));
  }

  async downloadOriginalStatisticsReport(request: DownloadOriginalStatisticsReportRequest): Promise<DownloadOriginalStatisticsReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadOriginalStatisticsReportWithOptions(request, runtime);
  }

  async downloadRecordingWithOptions(request: DownloadRecordingRequest, runtime: $Util.RuntimeOptions): Promise<DownloadRecordingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DownloadRecordingResponse>(await this.doRPCRequest("DownloadRecording", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new DownloadRecordingResponse({}));
  }

  async downloadRecording(request: DownloadRecordingRequest): Promise<DownloadRecordingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadRecordingWithOptions(request, runtime);
  }

  async downloadUnreachableContactsWithOptions(request: DownloadUnreachableContactsRequest, runtime: $Util.RuntimeOptions): Promise<DownloadUnreachableContactsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DownloadUnreachableContactsResponse>(await this.doRPCRequest("DownloadUnreachableContacts", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new DownloadUnreachableContactsResponse({}));
  }

  async downloadUnreachableContacts(request: DownloadUnreachableContactsRequest): Promise<DownloadUnreachableContactsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadUnreachableContactsWithOptions(request, runtime);
  }

  async findUsersWithOptions(request: FindUsersRequest, runtime: $Util.RuntimeOptions): Promise<FindUsersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FindUsersResponse>(await this.doRPCRequest("FindUsers", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new FindUsersResponse({}));
  }

  async findUsers(request: FindUsersRequest): Promise<FindUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findUsersWithOptions(request, runtime);
  }

  async generateAgentStatisticReportWithOptions(request: GenerateAgentStatisticReportRequest, runtime: $Util.RuntimeOptions): Promise<GenerateAgentStatisticReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateAgentStatisticReportResponse>(await this.doRPCRequest("GenerateAgentStatisticReport", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateAgentStatisticReportResponse({}));
  }

  async generateAgentStatisticReport(request: GenerateAgentStatisticReportRequest): Promise<GenerateAgentStatisticReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateAgentStatisticReportWithOptions(request, runtime);
  }

  async getAgentDataWithOptions(request: GetAgentDataRequest, runtime: $Util.RuntimeOptions): Promise<GetAgentDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAgentDataResponse>(await this.doRPCRequest("GetAgentData", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new GetAgentDataResponse({}));
  }

  async getAgentData(request: GetAgentDataRequest): Promise<GetAgentDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAgentDataWithOptions(request, runtime);
  }

  async getCallMeasureSummaryReportWithOptions(request: GetCallMeasureSummaryReportRequest, runtime: $Util.RuntimeOptions): Promise<GetCallMeasureSummaryReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetCallMeasureSummaryReportResponse>(await this.doRPCRequest("GetCallMeasureSummaryReport", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new GetCallMeasureSummaryReportResponse({}));
  }

  async getCallMeasureSummaryReport(request: GetCallMeasureSummaryReportRequest): Promise<GetCallMeasureSummaryReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCallMeasureSummaryReportWithOptions(request, runtime);
  }

  async getConfigWithOptions(request: GetConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetConfigResponse>(await this.doRPCRequest("GetConfig", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new GetConfigResponse({}));
  }

  async getConfig(request: GetConfigRequest): Promise<GetConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConfigWithOptions(request, runtime);
  }

  async getContactInfoByOutboundTaskIdWithOptions(request: GetContactInfoByOutboundTaskIdRequest, runtime: $Util.RuntimeOptions): Promise<GetContactInfoByOutboundTaskIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetContactInfoByOutboundTaskIdResponse>(await this.doRPCRequest("GetContactInfoByOutboundTaskId", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new GetContactInfoByOutboundTaskIdResponse({}));
  }

  async getContactInfoByOutboundTaskId(request: GetContactInfoByOutboundTaskIdRequest): Promise<GetContactInfoByOutboundTaskIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getContactInfoByOutboundTaskIdWithOptions(request, runtime);
  }

  async getConversationDetailByContactIdWithOptions(request: GetConversationDetailByContactIdRequest, runtime: $Util.RuntimeOptions): Promise<GetConversationDetailByContactIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetConversationDetailByContactIdResponse>(await this.doRPCRequest("GetConversationDetailByContactId", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new GetConversationDetailByContactIdResponse({}));
  }

  async getConversationDetailByContactId(request: GetConversationDetailByContactIdRequest): Promise<GetConversationDetailByContactIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConversationDetailByContactIdWithOptions(request, runtime);
  }

  async getConversationListWithOptions(request: GetConversationListRequest, runtime: $Util.RuntimeOptions): Promise<GetConversationListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetConversationListResponse>(await this.doRPCRequest("GetConversationList", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new GetConversationListResponse({}));
  }

  async getConversationList(request: GetConversationListRequest): Promise<GetConversationListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConversationListWithOptions(request, runtime);
  }

  async getInstanceWithOptions(request: GetInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetInstanceResponse>(await this.doRPCRequest("GetInstance", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new GetInstanceResponse({}));
  }

  async getInstance(request: GetInstanceRequest): Promise<GetInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceWithOptions(request, runtime);
  }

  async getInstanceStateWithOptions(request: GetInstanceStateRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceStateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetInstanceStateResponse>(await this.doRPCRequest("GetInstanceState", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new GetInstanceStateResponse({}));
  }

  async getInstanceState(request: GetInstanceStateRequest): Promise<GetInstanceStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceStateWithOptions(request, runtime);
  }

  async getInstanceSummaryReportWithOptions(request: GetInstanceSummaryReportRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceSummaryReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetInstanceSummaryReportResponse>(await this.doRPCRequest("GetInstanceSummaryReport", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new GetInstanceSummaryReportResponse({}));
  }

  async getInstanceSummaryReport(request: GetInstanceSummaryReportRequest): Promise<GetInstanceSummaryReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceSummaryReportWithOptions(request, runtime);
  }

  async getInstanceSummaryReportByIntervalWithOptions(request: GetInstanceSummaryReportByIntervalRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceSummaryReportByIntervalResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetInstanceSummaryReportByIntervalResponse>(await this.doRPCRequest("GetInstanceSummaryReportByInterval", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new GetInstanceSummaryReportByIntervalResponse({}));
  }

  async getInstanceSummaryReportByInterval(request: GetInstanceSummaryReportByIntervalRequest): Promise<GetInstanceSummaryReportByIntervalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceSummaryReportByIntervalWithOptions(request, runtime);
  }

  async getInstanceSummaryReportSinceMidnightWithOptions(request: GetInstanceSummaryReportSinceMidnightRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceSummaryReportSinceMidnightResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetInstanceSummaryReportSinceMidnightResponse>(await this.doRPCRequest("GetInstanceSummaryReportSinceMidnight", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new GetInstanceSummaryReportSinceMidnightResponse({}));
  }

  async getInstanceSummaryReportSinceMidnight(request: GetInstanceSummaryReportSinceMidnightRequest): Promise<GetInstanceSummaryReportSinceMidnightResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceSummaryReportSinceMidnightWithOptions(request, runtime);
  }

  async getJobWithOptions(request: GetJobRequest, runtime: $Util.RuntimeOptions): Promise<GetJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetJobResponse>(await this.doRPCRequest("GetJob", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new GetJobResponse({}));
  }

  async getJob(request: GetJobRequest): Promise<GetJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobWithOptions(request, runtime);
  }

  async getJobDataUploadParamsWithOptions(request: GetJobDataUploadParamsRequest, runtime: $Util.RuntimeOptions): Promise<GetJobDataUploadParamsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetJobDataUploadParamsResponse>(await this.doRPCRequest("GetJobDataUploadParams", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new GetJobDataUploadParamsResponse({}));
  }

  async getJobDataUploadParams(request: GetJobDataUploadParamsRequest): Promise<GetJobDataUploadParamsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobDataUploadParamsWithOptions(request, runtime);
  }

  async getJobFileUploadUrlWithOptions(request: GetJobFileUploadUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetJobFileUploadUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetJobFileUploadUrlResponse>(await this.doRPCRequest("GetJobFileUploadUrl", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new GetJobFileUploadUrlResponse({}));
  }

  async getJobFileUploadUrl(request: GetJobFileUploadUrlRequest): Promise<GetJobFileUploadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobFileUploadUrlWithOptions(request, runtime);
  }

  async getJobGroupWithOptions(request: GetJobGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetJobGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetJobGroupResponse>(await this.doRPCRequest("GetJobGroup", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new GetJobGroupResponse({}));
  }

  async getJobGroup(request: GetJobGroupRequest): Promise<GetJobGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobGroupWithOptions(request, runtime);
  }

  async getJobListWithOptions(request: GetJobListRequest, runtime: $Util.RuntimeOptions): Promise<GetJobListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetJobListResponse>(await this.doRPCRequest("GetJobList", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new GetJobListResponse({}));
  }

  async getJobList(request: GetJobListRequest): Promise<GetJobListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobListWithOptions(request, runtime);
  }

  async getJobStatusByCallIdWithOptions(request: GetJobStatusByCallIdRequest, runtime: $Util.RuntimeOptions): Promise<GetJobStatusByCallIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetJobStatusByCallIdResponse>(await this.doRPCRequest("GetJobStatusByCallId", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new GetJobStatusByCallIdResponse({}));
  }

  async getJobStatusByCallId(request: GetJobStatusByCallIdRequest): Promise<GetJobStatusByCallIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobStatusByCallIdWithOptions(request, runtime);
  }

  async getJobTemplateDownloadParamsWithOptions(request: GetJobTemplateDownloadParamsRequest, runtime: $Util.RuntimeOptions): Promise<GetJobTemplateDownloadParamsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetJobTemplateDownloadParamsResponse>(await this.doRPCRequest("GetJobTemplateDownloadParams", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new GetJobTemplateDownloadParamsResponse({}));
  }

  async getJobTemplateDownloadParams(request: GetJobTemplateDownloadParamsRequest): Promise<GetJobTemplateDownloadParamsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobTemplateDownloadParamsWithOptions(request, runtime);
  }

  async getNumberRegionInfoWithOptions(request: GetNumberRegionInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetNumberRegionInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetNumberRegionInfoResponse>(await this.doRPCRequest("GetNumberRegionInfo", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new GetNumberRegionInfoResponse({}));
  }

  async getNumberRegionInfo(request: GetNumberRegionInfoRequest): Promise<GetNumberRegionInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNumberRegionInfoWithOptions(request, runtime);
  }

  async getPredictiveJobGroupWithOptions(request: GetPredictiveJobGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetPredictiveJobGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPredictiveJobGroupResponse>(await this.doRPCRequest("GetPredictiveJobGroup", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new GetPredictiveJobGroupResponse({}));
  }

  async getPredictiveJobGroup(request: GetPredictiveJobGroupRequest): Promise<GetPredictiveJobGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPredictiveJobGroupWithOptions(request, runtime);
  }

  async getPredictiveTaskDataWithOptions(request: GetPredictiveTaskDataRequest, runtime: $Util.RuntimeOptions): Promise<GetPredictiveTaskDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetPredictiveTaskDataResponse>(await this.doRPCRequest("GetPredictiveTaskData", "2017-07-05", "HTTPS", "GET", "AK", "json", req, runtime), new GetPredictiveTaskDataResponse({}));
  }

  async getPredictiveTaskData(request: GetPredictiveTaskDataRequest): Promise<GetPredictiveTaskDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPredictiveTaskDataWithOptions(request, runtime);
  }

  async getRecordOssUploadParamWithOptions(request: GetRecordOssUploadParamRequest, runtime: $Util.RuntimeOptions): Promise<GetRecordOssUploadParamResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRecordOssUploadParamResponse>(await this.doRPCRequest("GetRecordOssUploadParam", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new GetRecordOssUploadParamResponse({}));
  }

  async getRecordOssUploadParam(request: GetRecordOssUploadParamRequest): Promise<GetRecordOssUploadParamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRecordOssUploadParamWithOptions(request, runtime);
  }

  async getRoutePointWithOptions(request: GetRoutePointRequest, runtime: $Util.RuntimeOptions): Promise<GetRoutePointResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRoutePointResponse>(await this.doRPCRequest("GetRoutePoint", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new GetRoutePointResponse({}));
  }

  async getRoutePoint(request: GetRoutePointRequest): Promise<GetRoutePointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRoutePointWithOptions(request, runtime);
  }

  async getScenarioWithOptions(request: GetScenarioRequest, runtime: $Util.RuntimeOptions): Promise<GetScenarioResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetScenarioResponse>(await this.doRPCRequest("GetScenario", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new GetScenarioResponse({}));
  }

  async getScenario(request: GetScenarioRequest): Promise<GetScenarioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getScenarioWithOptions(request, runtime);
  }

  async getServiceExtensionsWithOptions(request: GetServiceExtensionsRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceExtensionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetServiceExtensionsResponse>(await this.doRPCRequest("GetServiceExtensions", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new GetServiceExtensionsResponse({}));
  }

  async getServiceExtensions(request: GetServiceExtensionsRequest): Promise<GetServiceExtensionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceExtensionsWithOptions(request, runtime);
  }

  async getSmsConfigWithOptions(request: GetSmsConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetSmsConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSmsConfigResponse>(await this.doRPCRequest("GetSmsConfig", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new GetSmsConfigResponse({}));
  }

  async getSmsConfig(request: GetSmsConfigRequest): Promise<GetSmsConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSmsConfigWithOptions(request, runtime);
  }

  async getSurveyWithOptions(request: GetSurveyRequest, runtime: $Util.RuntimeOptions): Promise<GetSurveyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSurveyResponse>(await this.doRPCRequest("GetSurvey", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new GetSurveyResponse({}));
  }

  async getSurvey(request: GetSurveyRequest): Promise<GetSurveyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSurveyWithOptions(request, runtime);
  }

  async getTURNCredentialsWithOptions(request: GetTURNCredentialsRequest, runtime: $Util.RuntimeOptions): Promise<GetTURNCredentialsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTURNCredentialsResponse>(await this.doRPCRequest("GetTURNCredentials", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new GetTURNCredentialsResponse({}));
  }

  async getTURNCredentials(request: GetTURNCredentialsRequest): Promise<GetTURNCredentialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTURNCredentialsWithOptions(request, runtime);
  }

  async getTURNServerListWithOptions(request: GetTURNServerListRequest, runtime: $Util.RuntimeOptions): Promise<GetTURNServerListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTURNServerListResponse>(await this.doRPCRequest("GetTURNServerList", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new GetTURNServerListResponse({}));
  }

  async getTURNServerList(request: GetTURNServerListRequest): Promise<GetTURNServerListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTURNServerListWithOptions(request, runtime);
  }

  async getTaskListWithOptions(request: GetTaskListRequest, runtime: $Util.RuntimeOptions): Promise<GetTaskListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTaskListResponse>(await this.doRPCRequest("GetTaskList", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new GetTaskListResponse({}));
  }

  async getTaskList(request: GetTaskListRequest): Promise<GetTaskListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTaskListWithOptions(request, runtime);
  }

  async getUserWithOptions(request: GetUserRequest, runtime: $Util.RuntimeOptions): Promise<GetUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetUserResponse>(await this.doRPCRequest("GetUser", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new GetUserResponse({}));
  }

  async getUser(request: GetUserRequest): Promise<GetUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserWithOptions(request, runtime);
  }

  async getUserByExtensionWithOptions(request: GetUserByExtensionRequest, runtime: $Util.RuntimeOptions): Promise<GetUserByExtensionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetUserByExtensionResponse>(await this.doRPCRequest("GetUserByExtension", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new GetUserByExtensionResponse({}));
  }

  async getUserByExtension(request: GetUserByExtensionRequest): Promise<GetUserByExtensionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserByExtensionWithOptions(request, runtime);
  }

  async inflightTaskTimeoutWithOptions(request: InflightTaskTimeoutRequest, runtime: $Util.RuntimeOptions): Promise<InflightTaskTimeoutResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InflightTaskTimeoutResponse>(await this.doRPCRequest("InflightTaskTimeout", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new InflightTaskTimeoutResponse({}));
  }

  async inflightTaskTimeout(request: InflightTaskTimeoutRequest): Promise<InflightTaskTimeoutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.inflightTaskTimeoutWithOptions(request, runtime);
  }

  async launchAppraiseWithOptions(request: LaunchAppraiseRequest, runtime: $Util.RuntimeOptions): Promise<LaunchAppraiseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<LaunchAppraiseResponse>(await this.doRPCRequest("LaunchAppraise", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new LaunchAppraiseResponse({}));
  }

  async launchAppraise(request: LaunchAppraiseRequest): Promise<LaunchAppraiseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.launchAppraiseWithOptions(request, runtime);
  }

  async launchShortMessageAppraiseWithOptions(request: LaunchShortMessageAppraiseRequest, runtime: $Util.RuntimeOptions): Promise<LaunchShortMessageAppraiseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<LaunchShortMessageAppraiseResponse>(await this.doRPCRequest("LaunchShortMessageAppraise", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new LaunchShortMessageAppraiseResponse({}));
  }

  async launchShortMessageAppraise(request: LaunchShortMessageAppraiseRequest): Promise<LaunchShortMessageAppraiseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.launchShortMessageAppraiseWithOptions(request, runtime);
  }

  async listAgentDevicesWithOptions(request: ListAgentDevicesRequest, runtime: $Util.RuntimeOptions): Promise<ListAgentDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAgentDevicesResponse>(await this.doRPCRequest("ListAgentDevices", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListAgentDevicesResponse({}));
  }

  async listAgentDevices(request: ListAgentDevicesRequest): Promise<ListAgentDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAgentDevicesWithOptions(request, runtime);
  }

  async listAgentEventsWithOptions(request: ListAgentEventsRequest, runtime: $Util.RuntimeOptions): Promise<ListAgentEventsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAgentEventsResponse>(await this.doRPCRequest("ListAgentEvents", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListAgentEventsResponse({}));
  }

  async listAgentEvents(request: ListAgentEventsRequest): Promise<ListAgentEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAgentEventsWithOptions(request, runtime);
  }

  async listAgentStateLogsWithOptions(request: ListAgentStateLogsRequest, runtime: $Util.RuntimeOptions): Promise<ListAgentStateLogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAgentStateLogsResponse>(await this.doRPCRequest("ListAgentStateLogs", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListAgentStateLogsResponse({}));
  }

  async listAgentStateLogs(request: ListAgentStateLogsRequest): Promise<ListAgentStateLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAgentStateLogsWithOptions(request, runtime);
  }

  async listAgentStatesWithOptions(request: ListAgentStatesRequest, runtime: $Util.RuntimeOptions): Promise<ListAgentStatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAgentStatesResponse>(await this.doRPCRequest("ListAgentStates", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListAgentStatesResponse({}));
  }

  async listAgentStates(request: ListAgentStatesRequest): Promise<ListAgentStatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAgentStatesWithOptions(request, runtime);
  }

  async listAgentSummaryReportsWithOptions(request: ListAgentSummaryReportsRequest, runtime: $Util.RuntimeOptions): Promise<ListAgentSummaryReportsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAgentSummaryReportsResponse>(await this.doRPCRequest("ListAgentSummaryReports", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListAgentSummaryReportsResponse({}));
  }

  async listAgentSummaryReports(request: ListAgentSummaryReportsRequest): Promise<ListAgentSummaryReportsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAgentSummaryReportsWithOptions(request, runtime);
  }

  async listAgentSummaryReportsByIntervalWithOptions(request: ListAgentSummaryReportsByIntervalRequest, runtime: $Util.RuntimeOptions): Promise<ListAgentSummaryReportsByIntervalResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAgentSummaryReportsByIntervalResponse>(await this.doRPCRequest("ListAgentSummaryReportsByInterval", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListAgentSummaryReportsByIntervalResponse({}));
  }

  async listAgentSummaryReportsByInterval(request: ListAgentSummaryReportsByIntervalRequest): Promise<ListAgentSummaryReportsByIntervalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAgentSummaryReportsByIntervalWithOptions(request, runtime);
  }

  async listAgentSummaryReportsSinceMidnightWithOptions(request: ListAgentSummaryReportsSinceMidnightRequest, runtime: $Util.RuntimeOptions): Promise<ListAgentSummaryReportsSinceMidnightResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAgentSummaryReportsSinceMidnightResponse>(await this.doRPCRequest("ListAgentSummaryReportsSinceMidnight", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListAgentSummaryReportsSinceMidnightResponse({}));
  }

  async listAgentSummaryReportsSinceMidnight(request: ListAgentSummaryReportsSinceMidnightRequest): Promise<ListAgentSummaryReportsSinceMidnightResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAgentSummaryReportsSinceMidnightWithOptions(request, runtime);
  }

  async listBasicStatisticsReportSubItemsWithOptions(request: ListBasicStatisticsReportSubItemsRequest, runtime: $Util.RuntimeOptions): Promise<ListBasicStatisticsReportSubItemsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListBasicStatisticsReportSubItemsResponse>(await this.doRPCRequest("ListBasicStatisticsReportSubItems", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListBasicStatisticsReportSubItemsResponse({}));
  }

  async listBasicStatisticsReportSubItems(request: ListBasicStatisticsReportSubItemsRequest): Promise<ListBasicStatisticsReportSubItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBasicStatisticsReportSubItemsWithOptions(request, runtime);
  }

  async listCallDetailRecordsWithOptions(request: ListCallDetailRecordsRequest, runtime: $Util.RuntimeOptions): Promise<ListCallDetailRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListCallDetailRecordsResponse>(await this.doRPCRequest("ListCallDetailRecords", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListCallDetailRecordsResponse({}));
  }

  async listCallDetailRecords(request: ListCallDetailRecordsRequest): Promise<ListCallDetailRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCallDetailRecordsWithOptions(request, runtime);
  }

  async listCallEventDetailByContactIdWithOptions(request: ListCallEventDetailByContactIdRequest, runtime: $Util.RuntimeOptions): Promise<ListCallEventDetailByContactIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListCallEventDetailByContactIdResponse>(await this.doRPCRequest("ListCallEventDetailByContactId", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListCallEventDetailByContactIdResponse({}));
  }

  async listCallEventDetailByContactId(request: ListCallEventDetailByContactIdRequest): Promise<ListCallEventDetailByContactIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCallEventDetailByContactIdWithOptions(request, runtime);
  }

  async listCallMeasureSummaryReportsWithOptions(request: ListCallMeasureSummaryReportsRequest, runtime: $Util.RuntimeOptions): Promise<ListCallMeasureSummaryReportsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListCallMeasureSummaryReportsResponse>(await this.doRPCRequest("ListCallMeasureSummaryReports", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListCallMeasureSummaryReportsResponse({}));
  }

  async listCallMeasureSummaryReports(request: ListCallMeasureSummaryReportsRequest): Promise<ListCallMeasureSummaryReportsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCallMeasureSummaryReportsWithOptions(request, runtime);
  }

  async listConfigWithOptions(request: ListConfigRequest, runtime: $Util.RuntimeOptions): Promise<ListConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListConfigResponse>(await this.doRPCRequest("ListConfig", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListConfigResponse({}));
  }

  async listConfig(request: ListConfigRequest): Promise<ListConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConfigWithOptions(request, runtime);
  }

  async listContactFlowsWithOptions(request: ListContactFlowsRequest, runtime: $Util.RuntimeOptions): Promise<ListContactFlowsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListContactFlowsResponse>(await this.doRPCRequest("ListContactFlows", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListContactFlowsResponse({}));
  }

  async listContactFlows(request: ListContactFlowsRequest): Promise<ListContactFlowsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listContactFlowsWithOptions(request, runtime);
  }

  async listInstancesOfUserWithOptions(runtime: $Util.RuntimeOptions): Promise<ListInstancesOfUserResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListInstancesOfUserResponse>(await this.doRPCRequest("ListInstancesOfUser", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListInstancesOfUserResponse({}));
  }

  async listInstancesOfUser(): Promise<ListInstancesOfUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstancesOfUserWithOptions(runtime);
  }

  async listIvrTrackingDetailWithOptions(request: ListIvrTrackingDetailRequest, runtime: $Util.RuntimeOptions): Promise<ListIvrTrackingDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListIvrTrackingDetailResponse>(await this.doRPCRequest("ListIvrTrackingDetail", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListIvrTrackingDetailResponse({}));
  }

  async listIvrTrackingDetail(request: ListIvrTrackingDetailRequest): Promise<ListIvrTrackingDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIvrTrackingDetailWithOptions(request, runtime);
  }

  async listJobGroupsWithOptions(request: ListJobGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListJobGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListJobGroupsResponse>(await this.doRPCRequest("ListJobGroups", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListJobGroupsResponse({}));
  }

  async listJobGroups(request: ListJobGroupsRequest): Promise<ListJobGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listJobGroupsWithOptions(request, runtime);
  }

  async listJobStatusWithOptions(request: ListJobStatusRequest, runtime: $Util.RuntimeOptions): Promise<ListJobStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListJobStatusResponse>(await this.doRPCRequest("ListJobStatus", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListJobStatusResponse({}));
  }

  async listJobStatus(request: ListJobStatusRequest): Promise<ListJobStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listJobStatusWithOptions(request, runtime);
  }

  async listJobsByGroupWithOptions(request: ListJobsByGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListJobsByGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListJobsByGroupResponse>(await this.doRPCRequest("ListJobsByGroup", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListJobsByGroupResponse({}));
  }

  async listJobsByGroup(request: ListJobsByGroupRequest): Promise<ListJobsByGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listJobsByGroupWithOptions(request, runtime);
  }

  async listMediasWithOptions(request: ListMediasRequest, runtime: $Util.RuntimeOptions): Promise<ListMediasResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListMediasResponse>(await this.doRPCRequest("ListMedias", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListMediasResponse({}));
  }

  async listMedias(request: ListMediasRequest): Promise<ListMediasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMediasWithOptions(request, runtime);
  }

  async listOutboundPhoneNumberOfUserWithOptions(request: ListOutboundPhoneNumberOfUserRequest, runtime: $Util.RuntimeOptions): Promise<ListOutboundPhoneNumberOfUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListOutboundPhoneNumberOfUserResponse>(await this.doRPCRequest("ListOutboundPhoneNumberOfUser", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListOutboundPhoneNumberOfUserResponse({}));
  }

  async listOutboundPhoneNumberOfUser(request: ListOutboundPhoneNumberOfUserRequest): Promise<ListOutboundPhoneNumberOfUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOutboundPhoneNumberOfUserWithOptions(request, runtime);
  }

  async listPhoneNumbersWithOptions(request: ListPhoneNumbersRequest, runtime: $Util.RuntimeOptions): Promise<ListPhoneNumbersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPhoneNumbersResponse>(await this.doRPCRequest("ListPhoneNumbers", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListPhoneNumbersResponse({}));
  }

  async listPhoneNumbers(request: ListPhoneNumbersRequest): Promise<ListPhoneNumbersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPhoneNumbersWithOptions(request, runtime);
  }

  async listPhoneTagsWithOptions(request: ListPhoneTagsRequest, runtime: $Util.RuntimeOptions): Promise<ListPhoneTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPhoneTagsResponse>(await this.doRPCRequest("ListPhoneTags", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListPhoneTagsResponse({}));
  }

  async listPhoneTags(request: ListPhoneTagsRequest): Promise<ListPhoneTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPhoneTagsWithOptions(request, runtime);
  }

  async listRealTimeAgentWithOptions(request: ListRealTimeAgentRequest, runtime: $Util.RuntimeOptions): Promise<ListRealTimeAgentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRealTimeAgentResponse>(await this.doRPCRequest("ListRealTimeAgent", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListRealTimeAgentResponse({}));
  }

  async listRealTimeAgent(request: ListRealTimeAgentRequest): Promise<ListRealTimeAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRealTimeAgentWithOptions(request, runtime);
  }

  async listRecentCallRecordsWithOptions(request: ListRecentCallRecordsRequest, runtime: $Util.RuntimeOptions): Promise<ListRecentCallRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRecentCallRecordsResponse>(await this.doRPCRequest("ListRecentCallRecords", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListRecentCallRecordsResponse({}));
  }

  async listRecentCallRecords(request: ListRecentCallRecordsRequest): Promise<ListRecentCallRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRecentCallRecordsWithOptions(request, runtime);
  }

  async listRecordingOfDualTrackWithOptions(request: ListRecordingOfDualTrackRequest, runtime: $Util.RuntimeOptions): Promise<ListRecordingOfDualTrackResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRecordingOfDualTrackResponse>(await this.doRPCRequest("ListRecordingOfDualTrack", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListRecordingOfDualTrackResponse({}));
  }

  async listRecordingOfDualTrack(request: ListRecordingOfDualTrackRequest): Promise<ListRecordingOfDualTrackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRecordingOfDualTrackWithOptions(request, runtime);
  }

  async listRecordingsWithOptions(request: ListRecordingsRequest, runtime: $Util.RuntimeOptions): Promise<ListRecordingsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRecordingsResponse>(await this.doRPCRequest("ListRecordings", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListRecordingsResponse({}));
  }

  async listRecordings(request: ListRecordingsRequest): Promise<ListRecordingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRecordingsWithOptions(request, runtime);
  }

  async listRecordingsByContactIdWithOptions(request: ListRecordingsByContactIdRequest, runtime: $Util.RuntimeOptions): Promise<ListRecordingsByContactIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRecordingsByContactIdResponse>(await this.doRPCRequest("ListRecordingsByContactId", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListRecordingsByContactIdResponse({}));
  }

  async listRecordingsByContactId(request: ListRecordingsByContactIdRequest): Promise<ListRecordingsByContactIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRecordingsByContactIdWithOptions(request, runtime);
  }

  async listRolesWithOptions(request: ListRolesRequest, runtime: $Util.RuntimeOptions): Promise<ListRolesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRolesResponse>(await this.doRPCRequest("ListRoles", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListRolesResponse({}));
  }

  async listRoles(request: ListRolesRequest): Promise<ListRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRolesWithOptions(request, runtime);
  }

  async listScenarioTemplatesWithOptions(runtime: $Util.RuntimeOptions): Promise<ListScenarioTemplatesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListScenarioTemplatesResponse>(await this.doRPCRequest("ListScenarioTemplates", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListScenarioTemplatesResponse({}));
  }

  async listScenarioTemplates(): Promise<ListScenarioTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listScenarioTemplatesWithOptions(runtime);
  }

  async listScenariosWithOptions(request: ListScenariosRequest, runtime: $Util.RuntimeOptions): Promise<ListScenariosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListScenariosResponse>(await this.doRPCRequest("ListScenarios", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListScenariosResponse({}));
  }

  async listScenarios(request: ListScenariosRequest): Promise<ListScenariosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listScenariosWithOptions(request, runtime);
  }

  async listSkillGroupStatesWithOptions(request: ListSkillGroupStatesRequest, runtime: $Util.RuntimeOptions): Promise<ListSkillGroupStatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSkillGroupStatesResponse>(await this.doRPCRequest("ListSkillGroupStates", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListSkillGroupStatesResponse({}));
  }

  async listSkillGroupStates(request: ListSkillGroupStatesRequest): Promise<ListSkillGroupStatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSkillGroupStatesWithOptions(request, runtime);
  }

  async listSkillGroupSummaryReportsWithOptions(request: ListSkillGroupSummaryReportsRequest, runtime: $Util.RuntimeOptions): Promise<ListSkillGroupSummaryReportsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSkillGroupSummaryReportsResponse>(await this.doRPCRequest("ListSkillGroupSummaryReports", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListSkillGroupSummaryReportsResponse({}));
  }

  async listSkillGroupSummaryReports(request: ListSkillGroupSummaryReportsRequest): Promise<ListSkillGroupSummaryReportsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSkillGroupSummaryReportsWithOptions(request, runtime);
  }

  async listSkillGroupSummaryReportsByIntervalWithOptions(request: ListSkillGroupSummaryReportsByIntervalRequest, runtime: $Util.RuntimeOptions): Promise<ListSkillGroupSummaryReportsByIntervalResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSkillGroupSummaryReportsByIntervalResponse>(await this.doRPCRequest("ListSkillGroupSummaryReportsByInterval", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListSkillGroupSummaryReportsByIntervalResponse({}));
  }

  async listSkillGroupSummaryReportsByInterval(request: ListSkillGroupSummaryReportsByIntervalRequest): Promise<ListSkillGroupSummaryReportsByIntervalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSkillGroupSummaryReportsByIntervalWithOptions(request, runtime);
  }

  async listSkillGroupSummaryReportsSinceMidnightWithOptions(request: ListSkillGroupSummaryReportsSinceMidnightRequest, runtime: $Util.RuntimeOptions): Promise<ListSkillGroupSummaryReportsSinceMidnightResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSkillGroupSummaryReportsSinceMidnightResponse>(await this.doRPCRequest("ListSkillGroupSummaryReportsSinceMidnight", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListSkillGroupSummaryReportsSinceMidnightResponse({}));
  }

  async listSkillGroupSummaryReportsSinceMidnight(request: ListSkillGroupSummaryReportsSinceMidnightRequest): Promise<ListSkillGroupSummaryReportsSinceMidnightResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSkillGroupSummaryReportsSinceMidnightWithOptions(request, runtime);
  }

  async listSkillGroupsWithOptions(request: ListSkillGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListSkillGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSkillGroupsResponse>(await this.doRPCRequest("ListSkillGroups", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListSkillGroupsResponse({}));
  }

  async listSkillGroups(request: ListSkillGroupsRequest): Promise<ListSkillGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSkillGroupsWithOptions(request, runtime);
  }

  async listSkillGroupsOfUserWithOptions(request: ListSkillGroupsOfUserRequest, runtime: $Util.RuntimeOptions): Promise<ListSkillGroupsOfUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSkillGroupsOfUserResponse>(await this.doRPCRequest("ListSkillGroupsOfUser", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListSkillGroupsOfUserResponse({}));
  }

  async listSkillGroupsOfUser(request: ListSkillGroupsOfUserRequest): Promise<ListSkillGroupsOfUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSkillGroupsOfUserWithOptions(request, runtime);
  }

  async listSurveysWithOptions(request: ListSurveysRequest, runtime: $Util.RuntimeOptions): Promise<ListSurveysResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSurveysResponse>(await this.doRPCRequest("ListSurveys", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListSurveysResponse({}));
  }

  async listSurveys(request: ListSurveysRequest): Promise<ListSurveysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSurveysWithOptions(request, runtime);
  }

  async listTransferableSkillGroupsWithOptions(request: ListTransferableSkillGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListTransferableSkillGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTransferableSkillGroupsResponse>(await this.doRPCRequest("ListTransferableSkillGroups", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListTransferableSkillGroupsResponse({}));
  }

  async listTransferableSkillGroups(request: ListTransferableSkillGroupsRequest): Promise<ListTransferableSkillGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTransferableSkillGroupsWithOptions(request, runtime);
  }

  async listTrunkProvidersWithOptions(runtime: $Util.RuntimeOptions): Promise<ListTrunkProvidersResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListTrunkProvidersResponse>(await this.doRPCRequest("ListTrunkProviders", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListTrunkProvidersResponse({}));
  }

  async listTrunkProviders(): Promise<ListTrunkProvidersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTrunkProvidersWithOptions(runtime);
  }

  async listTrunksOfSkillGroupWithOptions(request: ListTrunksOfSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListTrunksOfSkillGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTrunksOfSkillGroupResponse>(await this.doRPCRequest("ListTrunksOfSkillGroup", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListTrunksOfSkillGroupResponse({}));
  }

  async listTrunksOfSkillGroup(request: ListTrunksOfSkillGroupRequest): Promise<ListTrunksOfSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTrunksOfSkillGroupWithOptions(request, runtime);
  }

  async listUnreachableContactsWithOptions(request: ListUnreachableContactsRequest, runtime: $Util.RuntimeOptions): Promise<ListUnreachableContactsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUnreachableContactsResponse>(await this.doRPCRequest("ListUnreachableContacts", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListUnreachableContactsResponse({}));
  }

  async listUnreachableContacts(request: ListUnreachableContactsRequest): Promise<ListUnreachableContactsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUnreachableContactsWithOptions(request, runtime);
  }

  async listUsersWithOptions(request: ListUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUsersResponse>(await this.doRPCRequest("ListUsers", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListUsersResponse({}));
  }

  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  async listUsersOfSkillGroupWithOptions(request: ListUsersOfSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersOfSkillGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUsersOfSkillGroupResponse>(await this.doRPCRequest("ListUsersOfSkillGroup", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListUsersOfSkillGroupResponse({}));
  }

  async listUsersOfSkillGroup(request: ListUsersOfSkillGroupRequest): Promise<ListUsersOfSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersOfSkillGroupWithOptions(request, runtime);
  }

  async listVoiceAppraiseWithOptions(request: ListVoiceAppraiseRequest, runtime: $Util.RuntimeOptions): Promise<ListVoiceAppraiseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListVoiceAppraiseResponse>(await this.doRPCRequest("ListVoiceAppraise", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListVoiceAppraiseResponse({}));
  }

  async listVoiceAppraise(request: ListVoiceAppraiseRequest): Promise<ListVoiceAppraiseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVoiceAppraiseWithOptions(request, runtime);
  }

  async modifyAgentDeviceWithOptions(request: ModifyAgentDeviceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAgentDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyAgentDeviceResponse>(await this.doRPCRequest("ModifyAgentDevice", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyAgentDeviceResponse({}));
  }

  async modifyAgentDevice(request: ModifyAgentDeviceRequest): Promise<ModifyAgentDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAgentDeviceWithOptions(request, runtime);
  }

  async modifyCabInstanceWithOptions(request: ModifyCabInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCabInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyCabInstanceResponse>(await this.doRPCRequest("ModifyCabInstance", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyCabInstanceResponse({}));
  }

  async modifyCabInstance(request: ModifyCabInstanceRequest): Promise<ModifyCabInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCabInstanceWithOptions(request, runtime);
  }

  async modifyCallRatioWithOptions(request: ModifyCallRatioRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCallRatioResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyCallRatioResponse>(await this.doRPCRequest("ModifyCallRatio", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyCallRatioResponse({}));
  }

  async modifyCallRatio(request: ModifyCallRatioRequest): Promise<ModifyCallRatioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCallRatioWithOptions(request, runtime);
  }

  async modifyPhoneNumberWithOptions(request: ModifyPhoneNumberRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPhoneNumberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyPhoneNumberResponse>(await this.doRPCRequest("ModifyPhoneNumber", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyPhoneNumberResponse({}));
  }

  async modifyPhoneNumber(request: ModifyPhoneNumberRequest): Promise<ModifyPhoneNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPhoneNumberWithOptions(request, runtime);
  }

  async modifyPhoneTagsWithOptions(request: ModifyPhoneTagsRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPhoneTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyPhoneTagsResponse>(await this.doRPCRequest("ModifyPhoneTags", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyPhoneTagsResponse({}));
  }

  async modifyPhoneTags(request: ModifyPhoneTagsRequest): Promise<ModifyPhoneTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPhoneTagsWithOptions(request, runtime);
  }

  async modifyPrimaryTrunksOfSkillGroupWithOptions(request: ModifyPrimaryTrunksOfSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPrimaryTrunksOfSkillGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyPrimaryTrunksOfSkillGroupResponse>(await this.doRPCRequest("ModifyPrimaryTrunksOfSkillGroup", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyPrimaryTrunksOfSkillGroupResponse({}));
  }

  async modifyPrimaryTrunksOfSkillGroup(request: ModifyPrimaryTrunksOfSkillGroupRequest): Promise<ModifyPrimaryTrunksOfSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPrimaryTrunksOfSkillGroupWithOptions(request, runtime);
  }

  async modifyPrivacyNumberCallDetailWithOptions(request: ModifyPrivacyNumberCallDetailRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPrivacyNumberCallDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyPrivacyNumberCallDetailResponse>(await this.doRPCRequest("ModifyPrivacyNumberCallDetail", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyPrivacyNumberCallDetailResponse({}));
  }

  async modifyPrivacyNumberCallDetail(request: ModifyPrivacyNumberCallDetailRequest): Promise<ModifyPrivacyNumberCallDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPrivacyNumberCallDetailWithOptions(request, runtime);
  }

  async modifyScenarioWithOptions(request: ModifyScenarioRequest, runtime: $Util.RuntimeOptions): Promise<ModifyScenarioResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyScenarioResponse>(await this.doRPCRequest("ModifyScenario", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyScenarioResponse({}));
  }

  async modifyScenario(request: ModifyScenarioRequest): Promise<ModifyScenarioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyScenarioWithOptions(request, runtime);
  }

  async modifySkillGroupWithOptions(request: ModifySkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifySkillGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySkillGroupResponse>(await this.doRPCRequest("ModifySkillGroup", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySkillGroupResponse({}));
  }

  async modifySkillGroup(request: ModifySkillGroupRequest): Promise<ModifySkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySkillGroupWithOptions(request, runtime);
  }

  async modifySkillGroupOfUserWithOptions(request: ModifySkillGroupOfUserRequest, runtime: $Util.RuntimeOptions): Promise<ModifySkillGroupOfUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySkillGroupOfUserResponse>(await this.doRPCRequest("ModifySkillGroupOfUser", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySkillGroupOfUserResponse({}));
  }

  async modifySkillGroupOfUser(request: ModifySkillGroupOfUserRequest): Promise<ModifySkillGroupOfUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySkillGroupOfUserWithOptions(request, runtime);
  }

  async modifySkillGroupOutboundNumbersWithOptions(request: ModifySkillGroupOutboundNumbersRequest, runtime: $Util.RuntimeOptions): Promise<ModifySkillGroupOutboundNumbersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySkillGroupOutboundNumbersResponse>(await this.doRPCRequest("ModifySkillGroupOutboundNumbers", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySkillGroupOutboundNumbersResponse({}));
  }

  async modifySkillGroupOutboundNumbers(request: ModifySkillGroupOutboundNumbersRequest): Promise<ModifySkillGroupOutboundNumbersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySkillGroupOutboundNumbersWithOptions(request, runtime);
  }

  async modifySurveyWithOptions(request: ModifySurveyRequest, runtime: $Util.RuntimeOptions): Promise<ModifySurveyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySurveyResponse>(await this.doRPCRequest("ModifySurvey", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySurveyResponse({}));
  }

  async modifySurvey(request: ModifySurveyRequest): Promise<ModifySurveyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySurveyWithOptions(request, runtime);
  }

  async modifyUserWithOptions(request: ModifyUserRequest, runtime: $Util.RuntimeOptions): Promise<ModifyUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyUserResponse>(await this.doRPCRequest("ModifyUser", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyUserResponse({}));
  }

  async modifyUser(request: ModifyUserRequest): Promise<ModifyUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyUserWithOptions(request, runtime);
  }

  async pickGlobalOutboundNumbersWithOptions(request: PickGlobalOutboundNumbersRequest, runtime: $Util.RuntimeOptions): Promise<PickGlobalOutboundNumbersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PickGlobalOutboundNumbersResponse>(await this.doRPCRequest("PickGlobalOutboundNumbers", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new PickGlobalOutboundNumbersResponse({}));
  }

  async pickGlobalOutboundNumbers(request: PickGlobalOutboundNumbersRequest): Promise<PickGlobalOutboundNumbersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pickGlobalOutboundNumbersWithOptions(request, runtime);
  }

  async pickLocalNumberWithOptions(request: PickLocalNumberRequest, runtime: $Util.RuntimeOptions): Promise<PickLocalNumberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PickLocalNumberResponse>(await this.doRPCRequest("PickLocalNumber", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new PickLocalNumberResponse({}));
  }

  async pickLocalNumber(request: PickLocalNumberRequest): Promise<PickLocalNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pickLocalNumberWithOptions(request, runtime);
  }

  async pickOutboundNumbersWithOptions(request: PickOutboundNumbersRequest, runtime: $Util.RuntimeOptions): Promise<PickOutboundNumbersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PickOutboundNumbersResponse>(await this.doRPCRequest("PickOutboundNumbers", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new PickOutboundNumbersResponse({}));
  }

  async pickOutboundNumbers(request: PickOutboundNumbersRequest): Promise<PickOutboundNumbersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pickOutboundNumbersWithOptions(request, runtime);
  }

  async publishContactFlowVersionWithOptions(request: PublishContactFlowVersionRequest, runtime: $Util.RuntimeOptions): Promise<PublishContactFlowVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PublishContactFlowVersionResponse>(await this.doRPCRequest("PublishContactFlowVersion", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new PublishContactFlowVersionResponse({}));
  }

  async publishContactFlowVersion(request: PublishContactFlowVersionRequest): Promise<PublishContactFlowVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishContactFlowVersionWithOptions(request, runtime);
  }

  async publishPredictiveJobGroupWithOptions(request: PublishPredictiveJobGroupRequest, runtime: $Util.RuntimeOptions): Promise<PublishPredictiveJobGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PublishPredictiveJobGroupResponse>(await this.doRPCRequest("PublishPredictiveJobGroup", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new PublishPredictiveJobGroupResponse({}));
  }

  async publishPredictiveJobGroup(request: PublishPredictiveJobGroupRequest): Promise<PublishPredictiveJobGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishPredictiveJobGroupWithOptions(request, runtime);
  }

  async publishSurveyWithOptions(request: PublishSurveyRequest, runtime: $Util.RuntimeOptions): Promise<PublishSurveyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PublishSurveyResponse>(await this.doRPCRequest("PublishSurvey", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new PublishSurveyResponse({}));
  }

  async publishSurvey(request: PublishSurveyRequest): Promise<PublishSurveyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishSurveyWithOptions(request, runtime);
  }

  async refreshTokenWithOptions(request: RefreshTokenRequest, runtime: $Util.RuntimeOptions): Promise<RefreshTokenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RefreshTokenResponse>(await this.doRPCRequest("RefreshToken", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new RefreshTokenResponse({}));
  }

  async refreshToken(request: RefreshTokenRequest): Promise<RefreshTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshTokenWithOptions(request, runtime);
  }

  async removePhoneNumberWithOptions(request: RemovePhoneNumberRequest, runtime: $Util.RuntimeOptions): Promise<RemovePhoneNumberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemovePhoneNumberResponse>(await this.doRPCRequest("RemovePhoneNumber", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new RemovePhoneNumberResponse({}));
  }

  async removePhoneNumber(request: RemovePhoneNumberRequest): Promise<RemovePhoneNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removePhoneNumberWithOptions(request, runtime);
  }

  async removeUsersWithOptions(request: RemoveUsersRequest, runtime: $Util.RuntimeOptions): Promise<RemoveUsersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveUsersResponse>(await this.doRPCRequest("RemoveUsers", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveUsersResponse({}));
  }

  async removeUsers(request: RemoveUsersRequest): Promise<RemoveUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeUsersWithOptions(request, runtime);
  }

  async removeUsersFromSkillGroupWithOptions(request: RemoveUsersFromSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<RemoveUsersFromSkillGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveUsersFromSkillGroupResponse>(await this.doRPCRequest("RemoveUsersFromSkillGroup", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveUsersFromSkillGroupResponse({}));
  }

  async removeUsersFromSkillGroup(request: RemoveUsersFromSkillGroupRequest): Promise<RemoveUsersFromSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeUsersFromSkillGroupWithOptions(request, runtime);
  }

  async requestLoginInfoWithOptions(request: RequestLoginInfoRequest, runtime: $Util.RuntimeOptions): Promise<RequestLoginInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RequestLoginInfoResponse>(await this.doRPCRequest("RequestLoginInfo", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new RequestLoginInfoResponse({}));
  }

  async requestLoginInfo(request: RequestLoginInfoRequest): Promise<RequestLoginInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.requestLoginInfoWithOptions(request, runtime);
  }

  async resetUserStatusWithOptions(request: ResetUserStatusRequest, runtime: $Util.RuntimeOptions): Promise<ResetUserStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResetUserStatusResponse>(await this.doRPCRequest("ResetUserStatus", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ResetUserStatusResponse({}));
  }

  async resetUserStatus(request: ResetUserStatusRequest): Promise<ResetUserStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetUserStatusWithOptions(request, runtime);
  }

  async resumeJobsWithOptions(request: ResumeJobsRequest, runtime: $Util.RuntimeOptions): Promise<ResumeJobsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResumeJobsResponse>(await this.doRPCRequest("ResumeJobs", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ResumeJobsResponse({}));
  }

  async resumeJobs(request: ResumeJobsRequest): Promise<ResumeJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeJobsWithOptions(request, runtime);
  }

  async resumePredictiveJobsWithOptions(request: ResumePredictiveJobsRequest, runtime: $Util.RuntimeOptions): Promise<ResumePredictiveJobsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResumePredictiveJobsResponse>(await this.doRPCRequest("ResumePredictiveJobs", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ResumePredictiveJobsResponse({}));
  }

  async resumePredictiveJobs(request: ResumePredictiveJobsRequest): Promise<ResumePredictiveJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumePredictiveJobsWithOptions(request, runtime);
  }

  async saveStatsWithOptions(request: SaveStatsRequest, runtime: $Util.RuntimeOptions): Promise<SaveStatsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveStatsResponse>(await this.doRPCRequest("SaveStats", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new SaveStatsResponse({}));
  }

  async saveStats(request: SaveStatsRequest): Promise<SaveStatsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveStatsWithOptions(request, runtime);
  }

  async saveTerminalLogWithOptions(request: SaveTerminalLogRequest, runtime: $Util.RuntimeOptions): Promise<SaveTerminalLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveTerminalLogResponse>(await this.doRPCRequest("SaveTerminalLog", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new SaveTerminalLogResponse({}));
  }

  async saveTerminalLog(request: SaveTerminalLogRequest): Promise<SaveTerminalLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveTerminalLogWithOptions(request, runtime);
  }

  async saveWebRTCStatsWithOptions(request: SaveWebRTCStatsRequest, runtime: $Util.RuntimeOptions): Promise<SaveWebRTCStatsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveWebRTCStatsResponse>(await this.doRPCRequest("SaveWebRTCStats", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new SaveWebRTCStatsResponse({}));
  }

  async saveWebRTCStats(request: SaveWebRTCStatsRequest): Promise<SaveWebRTCStatsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveWebRTCStatsWithOptions(request, runtime);
  }

  async sendPredefinedShortMessageWithOptions(request: SendPredefinedShortMessageRequest, runtime: $Util.RuntimeOptions): Promise<SendPredefinedShortMessageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SendPredefinedShortMessageResponse>(await this.doRPCRequest("SendPredefinedShortMessage", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new SendPredefinedShortMessageResponse({}));
  }

  async sendPredefinedShortMessage(request: SendPredefinedShortMessageRequest): Promise<SendPredefinedShortMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendPredefinedShortMessageWithOptions(request, runtime);
  }

  async startBack2BackCallWithOptions(request: StartBack2BackCallRequest, runtime: $Util.RuntimeOptions): Promise<StartBack2BackCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartBack2BackCallResponse>(await this.doRPCRequest("StartBack2BackCall", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new StartBack2BackCallResponse({}));
  }

  async startBack2BackCall(request: StartBack2BackCallRequest): Promise<StartBack2BackCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startBack2BackCallWithOptions(request, runtime);
  }

  async startJobWithOptions(request: StartJobRequest, runtime: $Util.RuntimeOptions): Promise<StartJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartJobResponse>(await this.doRPCRequest("StartJob", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new StartJobResponse({}));
  }

  async startJob(request: StartJobRequest): Promise<StartJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startJobWithOptions(request, runtime);
  }

  async submitBatchJobsWithOptions(request: SubmitBatchJobsRequest, runtime: $Util.RuntimeOptions): Promise<SubmitBatchJobsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitBatchJobsResponse>(await this.doRPCRequest("SubmitBatchJobs", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitBatchJobsResponse({}));
  }

  async submitBatchJobs(request: SubmitBatchJobsRequest): Promise<SubmitBatchJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitBatchJobsWithOptions(request, runtime);
  }

  async submitCabRecordingWithOptions(request: SubmitCabRecordingRequest, runtime: $Util.RuntimeOptions): Promise<SubmitCabRecordingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitCabRecordingResponse>(await this.doRPCRequest("SubmitCabRecording", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitCabRecordingResponse({}));
  }

  async submitCabRecording(request: SubmitCabRecordingRequest): Promise<SubmitCabRecordingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitCabRecordingWithOptions(request, runtime);
  }

  async suspendJobsWithOptions(request: SuspendJobsRequest, runtime: $Util.RuntimeOptions): Promise<SuspendJobsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SuspendJobsResponse>(await this.doRPCRequest("SuspendJobs", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new SuspendJobsResponse({}));
  }

  async suspendJobs(request: SuspendJobsRequest): Promise<SuspendJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.suspendJobsWithOptions(request, runtime);
  }

  async suspendPredictiveJobsWithOptions(request: SuspendPredictiveJobsRequest, runtime: $Util.RuntimeOptions): Promise<SuspendPredictiveJobsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SuspendPredictiveJobsResponse>(await this.doRPCRequest("SuspendPredictiveJobs", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new SuspendPredictiveJobsResponse({}));
  }

  async suspendPredictiveJobs(request: SuspendPredictiveJobsRequest): Promise<SuspendPredictiveJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.suspendPredictiveJobsWithOptions(request, runtime);
  }

  async taskPreparingWithOptions(request: TaskPreparingRequest, runtime: $Util.RuntimeOptions): Promise<TaskPreparingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TaskPreparingResponse>(await this.doRPCRequest("TaskPreparing", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new TaskPreparingResponse({}));
  }

  async taskPreparing(request: TaskPreparingRequest): Promise<TaskPreparingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.taskPreparingWithOptions(request, runtime);
  }

}
