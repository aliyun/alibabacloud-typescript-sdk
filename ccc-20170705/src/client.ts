// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddAgentDeviceRequest extends $tea.Model {
  instanceId?: string;
  clientIp?: string;
  clientPort?: string;
  browserVersion?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      clientIp: 'ClientIp',
      clientPort: 'ClientPort',
      browserVersion: 'BrowserVersion',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      clientIp: 'string',
      clientPort: 'string',
      browserVersion: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAgentDeviceResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  agentDeviceId?: number;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      agentDeviceId: 'AgentDeviceId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      agentDeviceId: 'number',
      httpStatusCode: 'number',
      code: 'string',
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
  instanceId?: string;
  usage?: string;
  contactFlowId?: string;
  phoneNumber?: string[];
  skillGroupId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      usage: 'Usage',
      contactFlowId: 'ContactFlowId',
      phoneNumber: 'PhoneNumber',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      usage: 'string',
      contactFlowId: 'string',
      phoneNumber: { 'type': 'array', 'itemType': 'string' },
      skillGroupId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBulkPhoneNumbersResponseBody extends $tea.Model {
  arrearagePhoneNumbers?: AddBulkPhoneNumbersResponseBodyArrearagePhoneNumbers;
  phoneNumbers?: AddBulkPhoneNumbersResponseBodyPhoneNumbers;
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  failedPhoneNumbers?: AddBulkPhoneNumbersResponseBodyFailedPhoneNumbers;
  userdPhoneNumbers?: AddBulkPhoneNumbersResponseBodyUserdPhoneNumbers;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      arrearagePhoneNumbers: 'ArrearagePhoneNumbers',
      phoneNumbers: 'PhoneNumbers',
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      failedPhoneNumbers: 'FailedPhoneNumbers',
      userdPhoneNumbers: 'UserdPhoneNumbers',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrearagePhoneNumbers: AddBulkPhoneNumbersResponseBodyArrearagePhoneNumbers,
      phoneNumbers: AddBulkPhoneNumbersResponseBodyPhoneNumbers,
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      failedPhoneNumbers: AddBulkPhoneNumbersResponseBodyFailedPhoneNumbers,
      userdPhoneNumbers: AddBulkPhoneNumbersResponseBodyUserdPhoneNumbers,
      code: 'string',
      success: 'boolean',
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

export class AddPhoneNumberRequest extends $tea.Model {
  instanceId?: string;
  phoneNumber?: string;
  usage?: string;
  contactFlowId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      phoneNumber: 'PhoneNumber',
      usage: 'Usage',
      contactFlowId: 'ContactFlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      phoneNumber: 'string',
      usage: 'string',
      contactFlowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPhoneNumberResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  phoneNumber?: AddPhoneNumberResponseBodyPhoneNumber;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      phoneNumber: 'PhoneNumber',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      phoneNumber: AddPhoneNumberResponseBodyPhoneNumber,
      code: 'string',
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
  serviceTag?: string;
  regionNameProvince?: string;
  regionNameCity?: string;
  type?: number;
  concurrency?: number;
  instanceId?: string;
  provider?: string;
  sipTag?: string;
  phoneNumberList?: string[];
  static names(): { [key: string]: string } {
    return {
      serviceTag: 'ServiceTag',
      regionNameProvince: 'RegionNameProvince',
      regionNameCity: 'RegionNameCity',
      type: 'Type',
      concurrency: 'Concurrency',
      instanceId: 'InstanceId',
      provider: 'Provider',
      sipTag: 'SipTag',
      phoneNumberList: 'PhoneNumberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceTag: 'string',
      regionNameProvince: 'string',
      regionNameCity: 'string',
      type: 'number',
      concurrency: 'number',
      instanceId: 'string',
      provider: 'string',
      sipTag: 'string',
      phoneNumberList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPhoneTagsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  instanceId?: string;
  groupId?: string;
  scenarioId?: string;
  strategyJson?: string;
  callingNumber?: string[];
  jobsJson?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      groupId: 'GroupId',
      scenarioId: 'ScenarioId',
      strategyJson: 'StrategyJson',
      callingNumber: 'CallingNumber',
      jobsJson: 'JobsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      groupId: 'string',
      scenarioId: 'string',
      strategyJson: 'string',
      callingNumber: { 'type': 'array', 'itemType': 'string' },
      jobsJson: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignJobsResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
      groupId: 'string',
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
  userRamId?: string[];
  roleId?: string[];
  skillGroupId?: string[];
  skillLevel?: number[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userRamId: 'UserRamId',
      roleId: 'RoleId',
      skillGroupId: 'SkillGroupId',
      skillLevel: 'SkillLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userRamId: { 'type': 'array', 'itemType': 'string' },
      roleId: { 'type': 'array', 'itemType': 'string' },
      skillGroupId: { 'type': 'array', 'itemType': 'string' },
      skillLevel: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignUsersResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  data?: CallOnlinePrivacyNumberResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      data: CallOnlinePrivacyNumberResponseBodyData,
      code: 'string',
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
  instanceId?: string;
  all?: boolean;
  scenarioId?: string;
  groupId?: string;
  jobId?: string[];
  jobReferenceId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      all: 'All',
      scenarioId: 'ScenarioId',
      groupId: 'GroupId',
      jobId: 'JobId',
      jobReferenceId: 'JobReferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      all: 'boolean',
      scenarioId: 'string',
      groupId: 'string',
      jobId: { 'type': 'array', 'itemType': 'string' },
      jobReferenceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelJobsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  instanceId?: string;
  callee?: string;
  caller?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      callee: 'Callee',
      caller: 'Caller',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      callee: 'string',
      caller: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckNumberAvaliableResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  callerAvaliable?: CheckNumberAvaliableResponseBodyCallerAvaliable;
  success?: boolean;
  calleeAvaliable?: CheckNumberAvaliableResponseBodyCalleeAvaliable;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      callerAvaliable: 'CallerAvaliable',
      success: 'Success',
      calleeAvaliable: 'CalleeAvaliable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
      callerAvaliable: CheckNumberAvaliableResponseBodyCallerAvaliable,
      success: 'boolean',
      calleeAvaliable: CheckNumberAvaliableResponseBodyCalleeAvaliable,
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
  instanceId?: string;
  contactFlowVersionId?: string;
  canvas?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      contactFlowVersionId: 'ContactFlowVersionId',
      canvas: 'Canvas',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      contactFlowVersionId: 'string',
      canvas: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitContactFlowVersionModificationResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  contactFlowVersion?: CommitContactFlowVersionModificationResponseBodyContactFlowVersion;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      contactFlowVersion: 'ContactFlowVersion',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      contactFlowVersion: CommitContactFlowVersionModificationResponseBodyContactFlowVersion,
      httpStatusCode: 'number',
      code: 'string',
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
  instanceId?: string;
  name?: string;
  description?: string;
  scenarioId?: string;
  strategyJson?: string;
  jobFilePath?: string;
  submitted?: boolean;
  callingNumber?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      description: 'Description',
      scenarioId: 'ScenarioId',
      strategyJson: 'StrategyJson',
      jobFilePath: 'JobFilePath',
      submitted: 'Submitted',
      callingNumber: 'CallingNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      description: 'string',
      scenarioId: 'string',
      strategyJson: 'string',
      jobFilePath: 'string',
      submitted: 'boolean',
      callingNumber: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchJobsResponseBody extends $tea.Model {
  jobGroup?: CreateBatchJobsResponseBodyJobGroup;
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      jobGroup: 'JobGroup',
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobGroup: CreateBatchJobsResponseBodyJobGroup,
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  instanceName?: string;
  instanceDescription?: string;
  maxConcurrentConversation?: number;
  callCenterInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      instanceDescription: 'InstanceDescription',
      maxConcurrentConversation: 'MaxConcurrentConversation',
      callCenterInstanceId: 'CallCenterInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      instanceDescription: 'string',
      maxConcurrentConversation: 'number',
      callCenterInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCabInstanceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  instance?: CreateCabInstanceResponseBodyInstance;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      instance: 'Instance',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      instance: CreateCabInstanceResponseBodyInstance,
      httpStatusCode: 'number',
      code: 'string',
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
  instanceId?: string;
  name?: string;
  description?: string;
  type?: string;
  canvas?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      description: 'Description',
      type: 'Type',
      canvas: 'Canvas',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      description: 'string',
      type: 'string',
      canvas: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContactFlowResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  contactFlow?: CreateContactFlowResponseBodyContactFlow;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      contactFlow: 'ContactFlow',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
      contactFlow: CreateContactFlowResponseBodyContactFlow,
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
  instanceId?: string;
  agentId?: number;
  connectId?: string;
  agentOssFileName?: string;
  agentFilePath?: string;
  customOssFileName?: string;
  customFilePath?: string;
  description?: string;
  clientIp?: string;
  clientPort?: string;
  operatingSystemVersion?: string;
  browserVersion?: string;
  microphoneList?: string;
  microphoneEquipment?: string;
  speakerList?: string;
  speakerEquipment?: string;
  startTime?: number;
  endTime?: number;
  serviceIp?: string;
  servicePort?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      agentId: 'AgentId',
      connectId: 'ConnectId',
      agentOssFileName: 'AgentOssFileName',
      agentFilePath: 'AgentFilePath',
      customOssFileName: 'CustomOssFileName',
      customFilePath: 'CustomFilePath',
      description: 'Description',
      clientIp: 'ClientIp',
      clientPort: 'ClientPort',
      operatingSystemVersion: 'OperatingSystemVersion',
      browserVersion: 'BrowserVersion',
      microphoneList: 'MicrophoneList',
      microphoneEquipment: 'MicrophoneEquipment',
      speakerList: 'SpeakerList',
      speakerEquipment: 'SpeakerEquipment',
      startTime: 'StartTime',
      endTime: 'EndTime',
      serviceIp: 'ServiceIp',
      servicePort: 'ServicePort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      agentId: 'number',
      connectId: 'string',
      agentOssFileName: 'string',
      agentFilePath: 'string',
      customOssFileName: 'string',
      customFilePath: 'string',
      description: 'string',
      clientIp: 'string',
      clientPort: 'string',
      operatingSystemVersion: 'string',
      browserVersion: 'string',
      microphoneList: 'string',
      microphoneEquipment: 'string',
      speakerList: 'string',
      speakerEquipment: 'string',
      startTime: 'number',
      endTime: 'number',
      serviceIp: 'string',
      servicePort: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFaultResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  name?: string;
  description?: string;
  domainName?: string;
  storageMaxDays?: number;
  storageMaxSize?: number;
  directoryId?: string;
  phoneNumber?: string;
  adminRamId?: string[];
  phoneNumbers?: string[];
  userObject?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      description: 'Description',
      domainName: 'DomainName',
      storageMaxDays: 'StorageMaxDays',
      storageMaxSize: 'StorageMaxSize',
      directoryId: 'DirectoryId',
      phoneNumber: 'PhoneNumber',
      adminRamId: 'AdminRamId',
      phoneNumbers: 'PhoneNumbers',
      userObject: 'UserObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      description: 'string',
      domainName: 'string',
      storageMaxDays: 'number',
      storageMaxSize: 'number',
      directoryId: 'string',
      phoneNumber: 'string',
      adminRamId: { 'type': 'array', 'itemType': 'string' },
      phoneNumbers: { 'type': 'array', 'itemType': 'string' },
      userObject: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  instance?: CreateInstanceResponseBodyInstance;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      instance: 'Instance',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      instance: CreateInstanceResponseBodyInstance,
      httpStatusCode: 'number',
      code: 'string',
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
  instanceId?: string;
  name?: string;
  description?: string;
  scenarioId?: string;
  strategyJson?: string;
  callingNumber?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      description: 'Description',
      scenarioId: 'ScenarioId',
      strategyJson: 'StrategyJson',
      callingNumber: 'CallingNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      description: 'string',
      scenarioId: 'string',
      strategyJson: 'string',
      callingNumber: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobGroupResponseBody extends $tea.Model {
  jobGroup?: CreateJobGroupResponseBodyJobGroup;
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      jobGroup: 'JobGroup',
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobGroup: CreateJobGroupResponseBodyJobGroup,
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  instanceId?: string;
  name?: string;
  description?: string;
  fileName?: string;
  type?: string;
  content?: string;
  ossFileName?: string;
  ossFilePath?: string;
  uploadResult?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      description: 'Description',
      fileName: 'FileName',
      type: 'Type',
      content: 'Content',
      ossFileName: 'OssFileName',
      ossFilePath: 'OssFilePath',
      uploadResult: 'UploadResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      description: 'string',
      fileName: 'string',
      type: 'string',
      content: 'string',
      ossFileName: 'string',
      ossFilePath: 'string',
      uploadResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMediaResponseBody extends $tea.Model {
  mediaUploadParam?: CreateMediaResponseBodyMediaUploadParam;
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      mediaUploadParam: 'MediaUploadParam',
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaUploadParam: CreateMediaResponseBodyMediaUploadParam,
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  instanceId?: string;
  skillGroupId?: string;
  strategyJson?: string;
  name?: string;
  description?: string;
  timingSchedule?: boolean;
  jobFilePath?: string;
  isDraft?: boolean;
  jobsJson?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
      strategyJson: 'StrategyJson',
      name: 'Name',
      description: 'Description',
      timingSchedule: 'TimingSchedule',
      jobFilePath: 'JobFilePath',
      isDraft: 'IsDraft',
      jobsJson: 'JobsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupId: 'string',
      strategyJson: 'string',
      name: 'string',
      description: 'string',
      timingSchedule: 'boolean',
      jobFilePath: 'string',
      isDraft: 'boolean',
      jobsJson: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePredictiveJobGroupResponseBody extends $tea.Model {
  jobGroupId?: string;
  requestId?: string;
  message?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      jobGroupId: 'JobGroupId',
      requestId: 'RequestId',
      message: 'Message',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobGroupId: 'string',
      requestId: 'string',
      message: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  instanceId?: string;
  name?: string;
  description?: string;
  strategyJson?: string;
  type?: string;
  surveysJson?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      description: 'Description',
      strategyJson: 'StrategyJson',
      type: 'Type',
      surveysJson: 'SurveysJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      description: 'string',
      strategyJson: 'string',
      type: 'string',
      surveysJson: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScenarioResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  scenario?: CreateScenarioResponseBodyScenario;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
      scenario: 'Scenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
      scenario: CreateScenarioResponseBodyScenario,
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
  instanceId?: string;
  name?: string;
  description?: string;
  templateId?: string;
  variables?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      description: 'Description',
      templateId: 'TemplateId',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      description: 'string',
      templateId: 'string',
      variables: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScenarioFromTemplateResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  scenario?: CreateScenarioFromTemplateResponseBodyScenario;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
      scenario: 'Scenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
      scenario: CreateScenarioFromTemplateResponseBodyScenario,
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
  instanceId?: string;
  name?: string;
  description?: string;
  routingStrategy?: string;
  allowPrivateOutboundNumber?: boolean;
  outboundPhoneNumberId?: string[];
  userId?: string[];
  skillLevel?: number[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      description: 'Description',
      routingStrategy: 'RoutingStrategy',
      allowPrivateOutboundNumber: 'AllowPrivateOutboundNumber',
      outboundPhoneNumberId: 'OutboundPhoneNumberId',
      userId: 'UserId',
      skillLevel: 'SkillLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      description: 'string',
      routingStrategy: 'string',
      allowPrivateOutboundNumber: 'boolean',
      outboundPhoneNumberId: { 'type': 'array', 'itemType': 'string' },
      userId: { 'type': 'array', 'itemType': 'string' },
      skillLevel: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSkillGroupResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  httpStatusCode?: number;
  skillGroupId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      httpStatusCode: 'HttpStatusCode',
      skillGroupId: 'SkillGroupId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      httpStatusCode: 'number',
      skillGroupId: 'string',
      code: 'string',
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
  instanceId?: string;
  scenarioId?: string;
  name?: string;
  description?: string;
  flowJson?: string;
  corpora?: string;
  speechOptimizationParam?: string;
  globalQuestions?: string;
  role?: string;
  round?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scenarioId: 'ScenarioId',
      name: 'Name',
      description: 'Description',
      flowJson: 'FlowJson',
      corpora: 'Corpora',
      speechOptimizationParam: 'SpeechOptimizationParam',
      globalQuestions: 'GlobalQuestions',
      role: 'Role',
      round: 'Round',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scenarioId: 'string',
      name: 'string',
      description: 'string',
      flowJson: 'string',
      corpora: 'string',
      speechOptimizationParam: 'string',
      globalQuestions: 'string',
      role: 'string',
      round: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSurveyResponseBody extends $tea.Model {
  survey?: CreateSurveyResponseBodySurvey;
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      survey: 'Survey',
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      survey: CreateSurveyResponseBodySurvey,
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
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
  instanceId?: string;
  loginName?: string;
  phone?: string;
  email?: string;
  privateOutboundNumberId?: string;
  roleId?: string[];
  skillGroupId?: string[];
  skillLevel?: number[];
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      loginName: 'LoginName',
      phone: 'Phone',
      email: 'Email',
      privateOutboundNumberId: 'PrivateOutboundNumberId',
      roleId: 'RoleId',
      skillGroupId: 'SkillGroupId',
      skillLevel: 'SkillLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      instanceId: 'string',
      loginName: 'string',
      phone: 'string',
      email: 'string',
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
  requestId?: string;
  message?: string;
  userId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      userId: 'UserId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      userId: 'string',
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
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
  instanceId?: string;
  contactFlowVersionId?: string;
  content?: string;
  isAppraise?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      contactFlowVersionId: 'ContactFlowVersionId',
      content: 'Content',
      isAppraise: 'IsAppraise',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      contactFlowVersionId: 'string',
      content: 'string',
      isAppraise: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVoiceAppraiseResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  instanceId?: string;
  caller?: string;
  callee?: string;
  routPoint?: string;
  answerMode?: number;
  provider?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      caller: 'Caller',
      callee: 'Callee',
      routPoint: 'RoutPoint',
      answerMode: 'AnswerMode',
      provider: 'Provider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      caller: 'string',
      callee: 'string',
      routPoint: 'string',
      answerMode: 'number',
      provider: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DialExResponseBody extends $tea.Model {
  statusDesc?: string;
  taskId?: string;
  requestId?: string;
  message?: string;
  httpStatusCode?: number;
  statusCode?: string;
  code?: string;
  success?: boolean;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      statusDesc: 'StatusDesc',
      taskId: 'TaskId',
      requestId: 'RequestId',
      message: 'Message',
      httpStatusCode: 'HttpStatusCode',
      statusCode: 'StatusCode',
      code: 'Code',
      success: 'Success',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statusDesc: 'string',
      taskId: 'string',
      requestId: 'string',
      message: 'string',
      httpStatusCode: 'number',
      statusCode: 'string',
      code: 'string',
      success: 'boolean',
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
  instanceId?: string;
  callId?: string;
  callType?: string;
  scenarioId?: string;
  taskId?: string;
  utterance?: string;
  actionKey?: string;
  actionParams?: string;
  callingNumber?: string;
  calledNumber?: string;
  instanceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      callId: 'CallId',
      callType: 'CallType',
      scenarioId: 'ScenarioId',
      taskId: 'TaskId',
      utterance: 'Utterance',
      actionKey: 'ActionKey',
      actionParams: 'ActionParams',
      callingNumber: 'CallingNumber',
      calledNumber: 'CalledNumber',
      instanceOwnerId: 'InstanceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      callId: 'string',
      callType: 'string',
      scenarioId: 'string',
      taskId: 'string',
      utterance: 'string',
      actionKey: 'string',
      actionParams: 'string',
      callingNumber: 'string',
      calledNumber: 'string',
      instanceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DialogueResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  feedback?: DialogueResponseBodyFeedback;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      feedback: 'Feedback',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      feedback: DialogueResponseBodyFeedback,
      httpStatusCode: 'number',
      code: 'string',
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  instanceId?: string;
  contactId?: string;
  channel?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      contactId: 'ContactId',
      channel: 'Channel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      contactId: 'string',
      channel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadAllTypeRecordingResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  mediaDownloadParamList?: DownloadAllTypeRecordingResponseBodyMediaDownloadParamList;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      mediaDownloadParamList: 'MediaDownloadParamList',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      mediaDownloadParamList: DownloadAllTypeRecordingResponseBodyMediaDownloadParamList,
      code: 'string',
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
  mediaDownloadParam?: DownloadCabRecordingResponseBodyMediaDownloadParam;
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      mediaDownloadParam: 'MediaDownloadParam',
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaDownloadParam: DownloadCabRecordingResponseBodyMediaDownloadParam,
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  message?: string;
  requestId?: string;
  downloadParams?: DownloadOriginalStatisticsReportResponseBodyDownloadParams;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      downloadParams: 'DownloadParams',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      downloadParams: DownloadOriginalStatisticsReportResponseBodyDownloadParams,
      httpStatusCode: 'number',
      code: 'string',
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
  instanceId?: string;
  fileName?: string;
  channel?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      fileName: 'FileName',
      channel: 'Channel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      fileName: 'string',
      channel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadRecordingResponseBody extends $tea.Model {
  mediaDownloadParam?: DownloadRecordingResponseBodyMediaDownloadParam;
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      mediaDownloadParam: 'MediaDownloadParam',
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaDownloadParam: DownloadRecordingResponseBodyMediaDownloadParam,
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  message?: string;
  requestId?: string;
  downloadParams?: DownloadUnreachableContactsResponseBodyDownloadParams;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      downloadParams: 'DownloadParams',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      downloadParams: DownloadUnreachableContactsResponseBodyDownloadParams,
      httpStatusCode: 'number',
      code: 'string',
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
  instanceId?: string;
  criteria?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      criteria: 'Criteria',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      criteria: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindUsersResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  users?: FindUsersResponseBodyUsers;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      users: 'Users',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      users: FindUsersResponseBodyUsers,
      code: 'string',
      success: 'boolean',
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
  instanceId?: string;
  agentId?: string;
  startDate?: string;
  endDate?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      agentId: 'AgentId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      agentId: 'string',
      startDate: 'string',
      endDate: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAgentStatisticReportResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  httpStatusCode?: number;
  dataList?: GenerateAgentStatisticReportResponseBodyDataList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      httpStatusCode: 'HttpStatusCode',
      dataList: 'DataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      httpStatusCode: 'number',
      dataList: GenerateAgentStatisticReportResponseBodyDataList,
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
  instanceId?: string;
  startDay?: string;
  endDay?: string;
  userId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startDay: 'StartDay',
      endDay: 'EndDay',
      userId: 'UserId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startDay: 'string',
      endDay: 'string',
      userId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentDataResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  httpStatusCode?: number;
  dataList?: GetAgentDataResponseBodyDataList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      httpStatusCode: 'HttpStatusCode',
      dataList: 'DataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      httpStatusCode: 'number',
      dataList: GetAgentDataResponseBodyDataList,
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
  intervalType?: string;
  year?: number;
  month?: number;
  day?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      intervalType: 'IntervalType',
      year: 'Year',
      month: 'Month',
      day: 'Day',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intervalType: 'string',
      year: 'number',
      month: 'number',
      day: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallMeasureSummaryReportResponseBody extends $tea.Model {
  numberReports?: GetCallMeasureSummaryReportResponseBodyNumberReports;
  summaryReport?: GetCallMeasureSummaryReportResponseBodySummaryReport;
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      numberReports: 'NumberReports',
      summaryReport: 'SummaryReport',
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      numberReports: GetCallMeasureSummaryReportResponseBodyNumberReports,
      summaryReport: GetCallMeasureSummaryReportResponseBodySummaryReport,
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  configItem?: GetConfigResponseBodyConfigItem;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      configItem: 'ConfigItem',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      configItem: GetConfigResponseBodyConfigItem,
      code: 'string',
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

export class GetConversationDetailByContactIdRequest extends $tea.Model {
  instanceId?: string;
  contactId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      contactId: 'ContactId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      contactId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConversationDetailByContactIdResponseBody extends $tea.Model {
  dataList?: GetConversationDetailByContactIdResponseBodyDataList;
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: GetConversationDetailByContactIdResponseBodyDataList,
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  conversations?: GetConversationListResponseBodyConversations[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      conversations: 'Conversations',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      conversations: { 'type': 'array', 'itemType': GetConversationListResponseBodyConversations },
      code: 'string',
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
  message?: string;
  requestId?: string;
  instance?: GetInstanceResponseBodyInstance;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      instance: 'Instance',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      instance: GetInstanceResponseBodyInstance,
      httpStatusCode: 'number',
      code: 'string',
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  realTimeInstanceState?: GetInstanceStateResponseBodyRealTimeInstanceState;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
      realTimeInstanceState: 'RealTimeInstanceState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
      realTimeInstanceState: GetInstanceStateResponseBodyRealTimeInstanceState,
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
  instanceId?: string;
  startTime?: string;
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryReportResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  instanceSummaryReport?: GetInstanceSummaryReportResponseBodyInstanceSummaryReport;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      instanceSummaryReport: 'InstanceSummaryReport',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      instanceSummaryReport: GetInstanceSummaryReportResponseBodyInstanceSummaryReport,
      code: 'string',
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
  instanceId?: string;
  interval?: string;
  startTime?: string;
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      interval: 'Interval',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      interval: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryReportByIntervalResponseBody extends $tea.Model {
  instanceTimeIntervalReport?: GetInstanceSummaryReportByIntervalResponseBodyInstanceTimeIntervalReport;
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceTimeIntervalReport: 'InstanceTimeIntervalReport',
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTimeIntervalReport: GetInstanceSummaryReportByIntervalResponseBodyInstanceTimeIntervalReport,
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  instanceSummaryReport?: GetInstanceSummaryReportSinceMidnightResponseBodyInstanceSummaryReport;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      instanceSummaryReport: 'InstanceSummaryReport',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      instanceSummaryReport: GetInstanceSummaryReportSinceMidnightResponseBodyInstanceSummaryReport,
      code: 'string',
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  job?: GetJobResponseBodyJob;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      job: 'Job',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      job: GetJobResponseBodyJob,
      code: 'string',
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
  instanceId?: string;
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobDataUploadParamsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  uploadParams?: GetJobDataUploadParamsResponseBodyUploadParams;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      uploadParams: 'UploadParams',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      uploadParams: GetJobDataUploadParamsResponseBodyUploadParams,
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
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
  instanceId?: string;
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobFileUploadUrlResponseBody extends $tea.Model {
  filePath?: string;
  uploadUrl?: string;
  requestId?: string;
  message?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      uploadUrl: 'UploadUrl',
      requestId: 'RequestId',
      message: 'Message',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      uploadUrl: 'string',
      requestId: 'string',
      message: 'string',
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
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
  jobGroup?: GetJobGroupResponseBodyJobGroup;
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      jobGroup: 'JobGroup',
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobGroup: GetJobGroupResponseBodyJobGroup,
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  status?: number;
  queryAll?: boolean;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      status: 'Status',
      queryAll: 'QueryAll',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobGroupId: 'string',
      status: 'number',
      queryAll: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobListResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  jobs?: GetJobListResponseBodyJobs;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      jobs: 'Jobs',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      jobs: GetJobListResponseBodyJobs,
      httpStatusCode: 'number',
      code: 'string',
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
  instanceId?: string;
  callId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      callId: 'CallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      callId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusByCallIdResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  job?: GetJobStatusByCallIdResponseBodyJob;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      job: 'Job',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      job: GetJobStatusByCallIdResponseBodyJob,
      code: 'string',
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
  message?: string;
  requestId?: string;
  downloadParams?: GetJobTemplateDownloadParamsResponseBodyDownloadParams;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      downloadParams: 'DownloadParams',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      downloadParams: GetJobTemplateDownloadParamsResponseBodyDownloadParams,
      httpStatusCode: 'number',
      code: 'string',
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
  message?: string;
  requestId?: string;
  phoneNumber?: GetNumberRegionInfoResponseBodyPhoneNumber;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      phoneNumber: 'PhoneNumber',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      phoneNumber: GetNumberRegionInfoResponseBodyPhoneNumber,
      code: 'string',
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

export class GetRecordOssUploadParamRequest extends $tea.Model {
  instanceId?: string;
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordOssUploadParamResponseBody extends $tea.Model {
  policy?: string;
  message?: string;
  requestId?: string;
  signature?: string;
  httpStatusCode?: number;
  ossFileName?: string;
  host?: string;
  expires?: string;
  dir?: string;
  code?: string;
  ossAccessKeyId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      message: 'Message',
      requestId: 'RequestId',
      signature: 'Signature',
      httpStatusCode: 'HttpStatusCode',
      ossFileName: 'OssFileName',
      host: 'Host',
      expires: 'Expires',
      dir: 'Dir',
      code: 'Code',
      ossAccessKeyId: 'OssAccessKeyId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: 'string',
      message: 'string',
      requestId: 'string',
      signature: 'string',
      httpStatusCode: 'number',
      ossFileName: 'string',
      host: 'string',
      expires: 'string',
      dir: 'string',
      code: 'string',
      ossAccessKeyId: 'string',
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
  instanceId?: string;
  contactFlowId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      contactFlowId: 'ContactFlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      contactFlowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoutePointResponseBody extends $tea.Model {
  statusDesc?: string;
  routePoint?: string;
  requestId?: string;
  message?: string;
  httpStatusCode?: number;
  statusCode?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      statusDesc: 'StatusDesc',
      routePoint: 'RoutePoint',
      requestId: 'RequestId',
      message: 'Message',
      httpStatusCode: 'HttpStatusCode',
      statusCode: 'StatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statusDesc: 'string',
      routePoint: 'string',
      requestId: 'string',
      message: 'string',
      httpStatusCode: 'number',
      statusCode: 'string',
      code: 'string',
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  scenario?: GetScenarioResponseBodyScenario;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
      scenario: 'Scenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
      scenario: GetScenarioResponseBodyScenario,
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  serviceExtensions?: GetServiceExtensionsResponseBodyServiceExtensions;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      serviceExtensions: 'ServiceExtensions',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      serviceExtensions: GetServiceExtensionsResponseBodyServiceExtensions,
      code: 'string',
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  smsConfigs?: GetSmsConfigResponseBodySmsConfigs;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      smsConfigs: 'SmsConfigs',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      smsConfigs: GetSmsConfigResponseBodySmsConfigs,
      code: 'string',
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
  survey?: GetSurveyResponseBodySurvey;
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      survey: 'Survey',
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      survey: GetSurveyResponseBodySurvey,
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
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
  tasks?: GetTaskListResponseBodyTasks[];
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      tasks: 'Tasks',
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tasks: { 'type': 'array', 'itemType': GetTaskListResponseBodyTasks },
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
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
  requestId?: string;
  message?: string;
  username?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  password?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      username: 'Username',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      username: 'string',
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
      password: 'string',
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
  requestId?: string;
  message?: string;
  httpStatusCode?: number;
  code?: string;
  turnServerListConfig?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      turnServerListConfig: 'TurnServerListConfig',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      httpStatusCode: 'number',
      code: 'string',
      turnServerListConfig: 'string',
      success: 'boolean',
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
  user?: GetUserResponseBodyUser;
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      user: 'User',
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: GetUserResponseBodyUser,
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
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
  instanceId?: string;
  extension?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      extension: 'Extension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      extension: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByExtensionResponseBody extends $tea.Model {
  user?: GetUserByExtensionResponseBodyUser;
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      user: 'User',
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: GetUserByExtensionResponseBodyUser,
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
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
  taskId?: string;
  instanceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      taskId: 'TaskId',
      instanceOwnerId: 'InstanceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      taskId: 'string',
      instanceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InflightTaskTimeoutResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  instanceId?: string;
  acid?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      acid: 'Acid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      acid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchAppraiseResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  instanceId?: string;
  acid?: string;
  skillGroupId?: string;
  contactType?: number;
  phoneNumbers?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      acid: 'Acid',
      skillGroupId: 'SkillGroupId',
      contactType: 'ContactType',
      phoneNumbers: 'PhoneNumbers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      acid: 'string',
      skillGroupId: 'string',
      contactType: 'number',
      phoneNumbers: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchShortMessageAppraiseResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  agentDeviceList?: ListAgentDevicesResponseBodyAgentDeviceList;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
      agentDeviceList: 'AgentDeviceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
      agentDeviceList: ListAgentDevicesResponseBodyAgentDeviceList,
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
  instanceId?: string;
  startTime?: number;
  stopTime?: number;
  ramId?: string[];
  event?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      stopTime: 'StopTime',
      ramId: 'RamId',
      event: 'Event',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startTime: 'number',
      stopTime: 'number',
      ramId: { 'type': 'array', 'itemType': 'string' },
      event: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentEventsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  agentEventList?: ListAgentEventsResponseBodyAgentEventList;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      agentEventList: 'AgentEventList',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      agentEventList: ListAgentEventsResponseBodyAgentEventList,
      httpStatusCode: 'number',
      code: 'string',
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
  instanceId?: string;
  ramId?: number;
  startTime?: number;
  endTime?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ramId: 'RamId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ramId: 'number',
      startTime: 'number',
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentStateLogsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  agentStateLogPage?: ListAgentStateLogsResponseBodyAgentStateLogPage;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
      agentStateLogPage: 'AgentStateLogPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
      agentStateLogPage: ListAgentStateLogsResponseBodyAgentStateLogPage,
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
  instanceId?: string;
  skillGroupId?: string;
  agentIds?: string;
  state?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
      agentIds: 'AgentIds',
      state: 'State',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupId: 'string',
      agentIds: 'string',
      state: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentStatesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  data?: ListAgentStatesResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      data: ListAgentStatesResponseBodyData,
      code: 'string',
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
  instanceId?: string;
  skillGroupId?: string;
  agentIds?: string;
  startTime?: string;
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
      agentIds: 'AgentIds',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupId: 'string',
      agentIds: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  pagedAgentSummaryReport?: ListAgentSummaryReportsResponseBodyPagedAgentSummaryReport;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      pagedAgentSummaryReport: 'PagedAgentSummaryReport',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      pagedAgentSummaryReport: ListAgentSummaryReportsResponseBodyPagedAgentSummaryReport,
      httpStatusCode: 'number',
      code: 'string',
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
  instanceId?: string;
  skillGroupId?: string;
  agentIds?: string;
  interval?: string;
  startTime?: string;
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
      agentIds: 'AgentIds',
      interval: 'Interval',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupId: 'string',
      agentIds: 'string',
      interval: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsByIntervalResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  pagedAgentSummaryReport?: ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReport;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      pagedAgentSummaryReport: 'PagedAgentSummaryReport',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      pagedAgentSummaryReport: ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReport,
      httpStatusCode: 'number',
      code: 'string',
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
  instanceId?: string;
  skillGroupId?: string;
  agentIds?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
      agentIds: 'AgentIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupId: 'string',
      agentIds: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsSinceMidnightResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  pagedAgentSummaryReport?: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReport;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      pagedAgentSummaryReport: 'PagedAgentSummaryReport',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      pagedAgentSummaryReport: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReport,
      httpStatusCode: 'number',
      code: 'string',
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
  title?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      title: 'Title',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobGroupId: 'string',
      title: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBasicStatisticsReportSubItemsResponseBody extends $tea.Model {
  subItems?: ListBasicStatisticsReportSubItemsResponseBodySubItems;
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      subItems: 'SubItems',
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subItems: ListBasicStatisticsReportSubItemsResponseBodySubItems,
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  instanceId?: string;
  phoneNumber?: string;
  startTime?: number;
  stopTime?: number;
  criteria?: string;
  contactType?: string;
  contactDisposition?: string;
  withRecording?: boolean;
  contactId?: string;
  orderBy?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      phoneNumber: 'PhoneNumber',
      startTime: 'StartTime',
      stopTime: 'StopTime',
      criteria: 'Criteria',
      contactType: 'ContactType',
      contactDisposition: 'ContactDisposition',
      withRecording: 'WithRecording',
      contactId: 'ContactId',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      phoneNumber: 'string',
      startTime: 'number',
      stopTime: 'number',
      criteria: 'string',
      contactType: 'string',
      contactDisposition: 'string',
      withRecording: 'boolean',
      contactId: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallDetailRecordsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  callDetailRecords?: ListCallDetailRecordsResponseBodyCallDetailRecords;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      callDetailRecords: 'CallDetailRecords',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      callDetailRecords: ListCallDetailRecordsResponseBodyCallDetailRecords,
      httpStatusCode: 'number',
      code: 'string',
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
  instanceId?: string;
  contactId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      contactId: 'ContactId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      contactId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallEventDetailByContactIdResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  data?: ListCallEventDetailByContactIdResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      data: ListCallEventDetailByContactIdResponseBodyData,
      code: 'string',
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      callMeasureSummaryReportList: 'CallMeasureSummaryReportList',
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callMeasureSummaryReportList: ListCallMeasureSummaryReportsResponseBodyCallMeasureSummaryReportList,
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  instanceId?: string;
  configItem?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      configItem: 'ConfigItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      configItem: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigResponseBody extends $tea.Model {
  configItems?: ListConfigResponseBodyConfigItems;
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      configItems: 'ConfigItems',
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configItems: ListConfigResponseBodyConfigItems,
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  message?: string;
  requestId?: string;
  contactFlows?: ListContactFlowsResponseBodyContactFlows;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      contactFlows: 'ContactFlows',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      contactFlows: ListContactFlowsResponseBodyContactFlows,
      httpStatusCode: 'number',
      code: 'string',
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
  instances?: ListInstancesOfUserResponseBodyInstances;
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: ListInstancesOfUserResponseBodyInstances,
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  instanceId?: string;
  contactId?: string;
  startTime?: number;
  stopTime?: number;
  callingNumber?: string;
  calledNumber?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      contactId: 'ContactId',
      startTime: 'StartTime',
      stopTime: 'StopTime',
      callingNumber: 'CallingNumber',
      calledNumber: 'CalledNumber',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      contactId: 'string',
      startTime: 'number',
      stopTime: 'number',
      callingNumber: 'string',
      calledNumber: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIvrTrackingDetailResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  ivrTrackingDetails?: ListIvrTrackingDetailResponseBodyIvrTrackingDetails;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      ivrTrackingDetails: 'IvrTrackingDetails',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      ivrTrackingDetails: ListIvrTrackingDetailResponseBodyIvrTrackingDetails,
      code: 'string',
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
  instanceId?: string;
  startTime?: number;
  endTime?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startTime: 'number',
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobGroupsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  jobGroups?: ListJobGroupsResponseBodyJobGroups;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
      jobGroups: 'JobGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
      jobGroups: ListJobGroupsResponseBodyJobGroups,
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

export class ListJobsByGroupRequest extends $tea.Model {
  instanceId?: string;
  jobGroupId?: string;
  jobStatus?: string;
  jobFailureReason?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      jobStatus: 'JobStatus',
      jobFailureReason: 'JobFailureReason',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobGroupId: 'string',
      jobStatus: 'string',
      jobFailureReason: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsByGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  jobs?: ListJobsByGroupResponseBodyJobs;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      jobs: 'Jobs',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      jobs: ListJobsByGroupResponseBodyJobs,
      httpStatusCode: 'number',
      code: 'string',
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

export class ListJobStatusRequest extends $tea.Model {
  instanceId?: string;
  scenarioId?: string;
  groupId?: string;
  startTime?: number;
  endTime?: number;
  timeAlignment?: string;
  contactName?: string;
  phoneNumber?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scenarioId: 'ScenarioId',
      groupId: 'GroupId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      timeAlignment: 'TimeAlignment',
      contactName: 'ContactName',
      phoneNumber: 'PhoneNumber',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scenarioId: 'string',
      groupId: 'string',
      startTime: 'number',
      endTime: 'number',
      timeAlignment: 'string',
      contactName: 'string',
      phoneNumber: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobStatusResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  jobs?: ListJobStatusResponseBodyJobs;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      jobs: 'Jobs',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      jobs: ListJobStatusResponseBodyJobs,
      httpStatusCode: 'number',
      code: 'string',
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  medias?: ListMediasResponseBodyMedias;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      medias: 'Medias',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      medias: ListMediasResponseBodyMedias,
      code: 'string',
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
  userId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundPhoneNumberOfUserResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  numberList?: ListOutboundPhoneNumberOfUserResponseBodyNumberList;
  code?: string;
  outboundPhoneNumbers?: ListOutboundPhoneNumberOfUserResponseBodyOutboundPhoneNumbers;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      numberList: 'NumberList',
      code: 'Code',
      outboundPhoneNumbers: 'OutboundPhoneNumbers',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      numberList: ListOutboundPhoneNumberOfUserResponseBodyNumberList,
      code: 'string',
      outboundPhoneNumbers: ListOutboundPhoneNumberOfUserResponseBodyOutboundPhoneNumbers,
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
  phoneNumbers?: ListPhoneNumbersResponseBodyPhoneNumbers;
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      phoneNumbers: 'PhoneNumbers',
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumbers: ListPhoneNumbersResponseBodyPhoneNumbers,
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  instanceId?: string;
  outboundOnly?: boolean;
  pageSize?: number;
  currentPage?: number;
  number?: string;
  numberGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      outboundOnly: 'OutboundOnly',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      number: 'Number',
      numberGroupIds: 'NumberGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      outboundOnly: 'boolean',
      pageSize: 'number',
      currentPage: 'number',
      number: 'string',
      numberGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneTagsResponseBody extends $tea.Model {
  phoneNumbers?: ListPhoneTagsResponseBodyPhoneNumbers;
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      phoneNumbers: 'PhoneNumbers',
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumbers: ListPhoneTagsResponseBodyPhoneNumbers,
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  data?: ListRealTimeAgentResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      data: ListRealTimeAgentResponseBodyData,
      code: 'string',
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
  instanceId?: string;
  startTime?: number;
  stopTime?: number;
  pageNumber?: number;
  pageSize?: number;
  criteria?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      stopTime: 'StopTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      criteria: 'Criteria',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startTime: 'number',
      stopTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      criteria: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentCallRecordsResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  httpStatusCode?: number;
  callDetailRecords?: ListRecentCallRecordsResponseBodyCallDetailRecords;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      httpStatusCode: 'HttpStatusCode',
      callDetailRecords: 'CallDetailRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      httpStatusCode: 'number',
      callDetailRecords: ListRecentCallRecordsResponseBodyCallDetailRecords,
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
  instanceId?: string;
  connectId?: string;
  startTime?: number;
  stopTime?: number;
  callingNumber?: string;
  calledNumber?: string;
  agentId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      connectId: 'ConnectId',
      startTime: 'StartTime',
      stopTime: 'StopTime',
      callingNumber: 'CallingNumber',
      calledNumber: 'CalledNumber',
      agentId: 'AgentId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      connectId: 'string',
      startTime: 'number',
      stopTime: 'number',
      callingNumber: 'string',
      calledNumber: 'string',
      agentId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordingOfDualTrackResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  recordings?: ListRecordingOfDualTrackResponseBodyRecordings;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      recordings: 'Recordings',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      recordings: ListRecordingOfDualTrackResponseBodyRecordings,
      code: 'string',
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
  stopTime?: number;
  instanceId?: string;
  startTime?: number;
  phoneNumber?: string;
  agentId?: string;
  criteria?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      stopTime: 'StopTime',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      phoneNumber: 'PhoneNumber',
      agentId: 'AgentId',
      criteria: 'Criteria',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stopTime: 'number',
      instanceId: 'string',
      startTime: 'number',
      phoneNumber: 'string',
      agentId: 'string',
      criteria: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordingsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  recordings?: ListRecordingsResponseBodyRecordings;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      recordings: 'Recordings',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      recordings: ListRecordingsResponseBodyRecordings,
      code: 'string',
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
  instanceId?: string;
  contactId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      contactId: 'ContactId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      contactId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordingsByContactIdResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  recordings?: ListRecordingsByContactIdResponseBodyRecordings;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      recordings: 'Recordings',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      recordings: ListRecordingsByContactIdResponseBodyRecordings,
      code: 'string',
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  roles?: ListRolesResponseBodyRoles;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      roles: 'Roles',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      roles: ListRolesResponseBodyRoles,
      code: 'string',
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  scenarios?: ListScenariosResponseBodyScenarios[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      scenarios: 'Scenarios',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      scenarios: { 'type': 'array', 'itemType': ListScenariosResponseBodyScenarios },
      code: 'string',
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

export class ListScenarioTemplatesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  scenarioTemplates?: ListScenarioTemplatesResponseBodyScenarioTemplates[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      scenarioTemplates: 'ScenarioTemplates',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      scenarioTemplates: { 'type': 'array', 'itemType': ListScenarioTemplatesResponseBodyScenarioTemplates },
      code: 'string',
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  skillGroups?: ListSkillGroupsResponseBodySkillGroups;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      skillGroups: 'SkillGroups',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      skillGroups: ListSkillGroupsResponseBodySkillGroups,
      code: 'string',
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
  skillLevels?: ListSkillGroupsOfUserResponseBodySkillLevels;
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      skillLevels: 'SkillLevels',
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillLevels: ListSkillGroupsOfUserResponseBodySkillLevels,
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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

export class ListSkillGroupStatesRequest extends $tea.Model {
  instanceId?: string;
  skillGroupIds?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupIds: 'SkillGroupIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupIds: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupStatesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  data?: ListSkillGroupStatesResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      data: ListSkillGroupStatesResponseBodyData,
      code: 'string',
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
  instanceId?: string;
  skillGroupIds?: string;
  startTime?: string;
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupIds: 'SkillGroupIds',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupIds: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsResponseBody extends $tea.Model {
  pagedSkillGroupSummaryReport?: ListSkillGroupSummaryReportsResponseBodyPagedSkillGroupSummaryReport;
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      pagedSkillGroupSummaryReport: 'PagedSkillGroupSummaryReport',
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagedSkillGroupSummaryReport: ListSkillGroupSummaryReportsResponseBodyPagedSkillGroupSummaryReport,
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  instanceId?: string;
  skillGroupIds?: string;
  interval?: string;
  startTime?: string;
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupIds: 'SkillGroupIds',
      interval: 'Interval',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupIds: 'string',
      interval: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsByIntervalResponseBody extends $tea.Model {
  pagedSkillGroupSummaryReport?: ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReport;
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      pagedSkillGroupSummaryReport: 'PagedSkillGroupSummaryReport',
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagedSkillGroupSummaryReport: ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReport,
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  skillGroups?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroups: 'SkillGroups',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroups: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsSinceMidnightResponseBody extends $tea.Model {
  pagedSkillGroupSummaryReport?: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReport;
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      pagedSkillGroupSummaryReport: 'PagedSkillGroupSummaryReport',
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagedSkillGroupSummaryReport: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReport,
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  surveys?: ListSurveysResponseBodySurveys[];
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      surveys: 'Surveys',
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      surveys: { 'type': 'array', 'itemType': ListSurveysResponseBodySurveys },
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  skillGroups?: ListTransferableSkillGroupsResponseBodySkillGroups[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      skillGroups: 'SkillGroups',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      skillGroups: { 'type': 'array', 'itemType': ListTransferableSkillGroupsResponseBodySkillGroups },
      code: 'string',
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  trunkProviders?: ListTrunkProvidersResponseBodyTrunkProviders[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      trunkProviders: 'TrunkProviders',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      trunkProviders: { 'type': 'array', 'itemType': ListTrunkProvidersResponseBodyTrunkProviders },
      code: 'string',
      success: 'boolean',
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  trunkConfigs?: ListTrunksOfSkillGroupResponseBodyTrunkConfigs[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      trunkConfigs: 'TrunkConfigs',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      trunkConfigs: { 'type': 'array', 'itemType': ListTrunksOfSkillGroupResponseBodyTrunkConfigs },
      code: 'string',
      success: 'boolean',
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
  unreachableContacts?: ListUnreachableContactsResponseBodyUnreachableContacts;
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      unreachableContacts: 'UnreachableContacts',
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unreachableContacts: ListUnreachableContactsResponseBodyUnreachableContacts,
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  users?: ListUsersResponseBodyUsers;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      users: 'Users',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      users: ListUsersResponseBodyUsers,
      code: 'string',
      success: 'boolean',
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
  skillGroupId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersOfSkillGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  users?: ListUsersOfSkillGroupResponseBodyUsers;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      users: 'Users',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      users: ListUsersOfSkillGroupResponseBodyUsers,
      code: 'string',
      success: 'boolean',
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
  requestId?: string;
  notice?: string;
  message?: string;
  httpStatusCode?: number;
  code?: string;
  contactFlow?: ListVoiceAppraiseResponseBodyContactFlow;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      notice: 'Notice',
      message: 'Message',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      contactFlow: 'ContactFlow',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      notice: 'string',
      message: 'string',
      httpStatusCode: 'number',
      code: 'string',
      contactFlow: ListVoiceAppraiseResponseBodyContactFlow,
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
  isLogin?: number;
  agentDeviceId?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      isLogin: 'IsLogin',
      agentDeviceId: 'AgentDeviceId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isLogin: 'number',
      agentDeviceId: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAgentDeviceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  instanceId?: string;
  instanceName?: string;
  instanceDescription?: string;
  maxConcurrentConversation?: number;
  callCenterInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceDescription: 'InstanceDescription',
      maxConcurrentConversation: 'MaxConcurrentConversation',
      callCenterInstanceId: 'CallCenterInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      instanceDescription: 'string',
      maxConcurrentConversation: 'number',
      callCenterInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCabInstanceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  instance?: ModifyCabInstanceResponseBodyInstance;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      instance: 'Instance',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      instance: ModifyCabInstanceResponseBodyInstance,
      httpStatusCode: 'number',
      code: 'string',
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

export class ModifyPhoneNumberRequest extends $tea.Model {
  instanceId?: string;
  phoneNumberId?: string;
  usage?: string;
  contactFlowId?: string;
  skillGroupId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      phoneNumberId: 'PhoneNumberId',
      usage: 'Usage',
      contactFlowId: 'ContactFlowId',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      phoneNumberId: 'string',
      usage: 'string',
      contactFlowId: 'string',
      skillGroupId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPhoneNumberResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  phoneNumber?: ModifyPhoneNumberResponseBodyPhoneNumber;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      phoneNumber: 'PhoneNumber',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      phoneNumber: ModifyPhoneNumberResponseBodyPhoneNumber,
      code: 'string',
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  skillGroupId?: string;
  primaryProviderName?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
      primaryProviderName: 'PrimaryProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupId: 'string',
      primaryProviderName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrimaryTrunksOfSkillGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  instanceId?: string;
  callId?: string;
  contactId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      callId: 'CallId',
      contactId: 'ContactId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      callId: 'string',
      contactId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrivacyNumberCallDetailResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  instanceId?: string;
  scenarioId?: string;
  name?: string;
  description?: string;
  variables?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scenarioId: 'ScenarioId',
      name: 'Name',
      description: 'Description',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scenarioId: 'string',
      name: 'string',
      description: 'string',
      variables: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScenarioResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  scenario?: ModifyScenarioResponseBodyScenario;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
      scenario: 'Scenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
      scenario: ModifyScenarioResponseBodyScenario,
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
  instanceId?: string;
  skillGroupId?: string;
  name?: string;
  description?: string;
  routingStrategy?: string;
  allowPrivateOutboundNumber?: boolean;
  outboundPhoneNumberId?: string[];
  userId?: string[];
  skillLevel?: number[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
      name: 'Name',
      description: 'Description',
      routingStrategy: 'RoutingStrategy',
      allowPrivateOutboundNumber: 'AllowPrivateOutboundNumber',
      outboundPhoneNumberId: 'OutboundPhoneNumberId',
      userId: 'UserId',
      skillLevel: 'SkillLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupId: 'string',
      name: 'string',
      description: 'string',
      routingStrategy: 'string',
      allowPrivateOutboundNumber: 'boolean',
      outboundPhoneNumberId: { 'type': 'array', 'itemType': 'string' },
      userId: { 'type': 'array', 'itemType': 'string' },
      skillLevel: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySkillGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  userId?: string;
  roleId?: string[];
  skillGroupId?: string[];
  skillLevel?: number[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      roleId: 'RoleId',
      skillGroupId: 'SkillGroupId',
      skillLevel: 'SkillLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      roleId: { 'type': 'array', 'itemType': 'string' },
      skillGroupId: { 'type': 'array', 'itemType': 'string' },
      skillLevel: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySkillGroupOfUserResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  skillGroupId?: string;
  operationType?: number;
  outboundPhoneNumberId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
      operationType: 'OperationType',
      outboundPhoneNumberId: 'OutboundPhoneNumberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupId: 'string',
      operationType: 'number',
      outboundPhoneNumberId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySkillGroupOutboundNumbersResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  instanceId?: string;
  surveyId?: string;
  scenarioId?: string;
  name?: string;
  description?: string;
  flowId?: string;
  flowJson?: string;
  corpora?: string;
  speechOptimizationParam?: string;
  globalQuestions?: string;
  role?: string;
  round?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      surveyId: 'SurveyId',
      scenarioId: 'ScenarioId',
      name: 'Name',
      description: 'Description',
      flowId: 'FlowId',
      flowJson: 'FlowJson',
      corpora: 'Corpora',
      speechOptimizationParam: 'SpeechOptimizationParam',
      globalQuestions: 'GlobalQuestions',
      role: 'Role',
      round: 'Round',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      surveyId: 'string',
      scenarioId: 'string',
      name: 'string',
      description: 'string',
      flowId: 'string',
      flowJson: 'string',
      corpora: 'string',
      speechOptimizationParam: 'string',
      globalQuestions: 'string',
      role: 'string',
      round: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySurveyResponseBody extends $tea.Model {
  survey?: ModifySurveyResponseBodySurvey;
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      survey: 'Survey',
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      survey: ModifySurveyResponseBodySurvey,
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
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
  instanceId?: string;
  userId?: string;
  phone?: string;
  email?: string;
  privateOutboundNumberId?: string;
  roleId?: string[];
  skillGroupId?: string[];
  skillLevel?: number[];
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      userId: 'UserId',
      phone: 'Phone',
      email: 'Email',
      privateOutboundNumberId: 'PrivateOutboundNumberId',
      roleId: 'RoleId',
      skillGroupId: 'SkillGroupId',
      skillLevel: 'SkillLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      instanceId: 'string',
      userId: 'string',
      phone: 'string',
      email: 'string',
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

export class ModifyUserResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  instanceId?: string;
  calleeNumber?: string;
  count?: number;
  isVirtual?: boolean;
  skillGroupId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      calleeNumber: 'CalleeNumber',
      count: 'Count',
      isVirtual: 'IsVirtual',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      calleeNumber: 'string',
      count: 'number',
      isVirtual: 'boolean',
      skillGroupId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickGlobalOutboundNumbersResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  dialNumberPairs?: PickGlobalOutboundNumbersResponseBodyDialNumberPairs;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
      dialNumberPairs: 'DialNumberPairs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
      dialNumberPairs: PickGlobalOutboundNumbersResponseBodyDialNumberPairs,
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
  instanceId?: string;
  calleeNumber?: string;
  candidateNumber?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      calleeNumber: 'CalleeNumber',
      candidateNumber: 'CandidateNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      calleeNumber: 'string',
      candidateNumber: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickLocalNumberResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: PickLocalNumberResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: PickLocalNumberResponseBodyData,
      code: 'string',
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
  instanceId?: string;
  calleeNumber?: string;
  count?: number;
  candidateNumber?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      calleeNumber: 'CalleeNumber',
      count: 'Count',
      candidateNumber: 'CandidateNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      calleeNumber: 'string',
      count: 'number',
      candidateNumber: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickOutboundNumbersResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  dialNumberPairs?: PickOutboundNumbersResponseBodyDialNumberPairs;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
      dialNumberPairs: 'DialNumberPairs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
      dialNumberPairs: PickOutboundNumbersResponseBodyDialNumberPairs,
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
  instanceId?: string;
  contactFlowVersionId?: string;
  useTianGong?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      contactFlowVersionId: 'ContactFlowVersionId',
      useTianGong: 'UseTianGong',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      contactFlowVersionId: 'string',
      useTianGong: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishContactFlowVersionResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  token?: RefreshTokenResponseBodyToken;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      token: 'Token',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      token: RefreshTokenResponseBodyToken,
      code: 'string',
      success: 'boolean',
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  message?: string;
  requestId?: string;
  loginInfo?: RequestLoginInfoResponseBodyLoginInfo;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      loginInfo: 'LoginInfo',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      loginInfo: RequestLoginInfoResponseBodyLoginInfo,
      httpStatusCode: 'number',
      code: 'string',
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  instanceId?: string;
  all?: boolean;
  scenarioId?: string;
  groupId?: string;
  jobId?: string[];
  jobReferenceId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      all: 'All',
      scenarioId: 'ScenarioId',
      groupId: 'GroupId',
      jobId: 'JobId',
      jobReferenceId: 'JobReferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      all: 'boolean',
      scenarioId: 'string',
      groupId: 'string',
      jobId: { 'type': 'array', 'itemType': 'string' },
      jobReferenceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeJobsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  instanceId?: string;
  skillGroupId?: string;
  all?: boolean;
  jobGroupId?: string;
  jobId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
      all: 'All',
      jobGroupId: 'JobGroupId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupId: 'string',
      all: 'boolean',
      jobGroupId: 'string',
      jobId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumePredictiveJobsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  instanceId?: string;
  recordTime?: number;
  callId?: string;
  callerNumber?: string;
  calleeNumber?: string;
  callStartTime?: number;
  stats?: string;
  uid?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      recordTime: 'RecordTime',
      callId: 'CallId',
      callerNumber: 'CallerNumber',
      calleeNumber: 'CalleeNumber',
      callStartTime: 'CallStartTime',
      stats: 'Stats',
      uid: 'Uid',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      recordTime: 'number',
      callId: 'string',
      callerNumber: 'string',
      calleeNumber: 'string',
      callStartTime: 'number',
      stats: 'string',
      uid: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveStatsResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  httpStatusCode?: number;
  rowCount?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      httpStatusCode: 'HttpStatusCode',
      rowCount: 'RowCount',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      httpStatusCode: 'number',
      rowCount: 'number',
      code: 'string',
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

export class SaveWebRTCStatsRequest extends $tea.Model {
  instanceId?: string;
  recordTime?: number;
  callId?: string;
  callerNumber?: string;
  calleeNumber?: string;
  callStartTime?: number;
  stats?: string;
  uid?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      recordTime: 'RecordTime',
      callId: 'CallId',
      callerNumber: 'CallerNumber',
      calleeNumber: 'CalleeNumber',
      callStartTime: 'CallStartTime',
      stats: 'Stats',
      uid: 'Uid',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      recordTime: 'number',
      callId: 'string',
      callerNumber: 'string',
      calleeNumber: 'string',
      callStartTime: 'number',
      stats: 'string',
      uid: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveWebRTCStatsResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  httpStatusCode?: number;
  rowCount?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      httpStatusCode: 'HttpStatusCode',
      rowCount: 'RowCount',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      httpStatusCode: 'number',
      rowCount: 'number',
      code: 'string',
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
  instanceId?: string;
  phoneNumbers?: string;
  configId?: number;
  templateParam?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      phoneNumbers: 'PhoneNumbers',
      configId: 'ConfigId',
      templateParam: 'TemplateParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      phoneNumbers: 'string',
      configId: 'number',
      templateParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendPredefinedShortMessageResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  httpStatusCode?: number;
  code?: string;
  bizId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      bizId: 'BizId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      httpStatusCode: 'number',
      code: 'string',
      bizId: 'string',
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
  instanceId?: string;
  workflowId?: string;
  callCenterNumber?: string;
  caller?: string;
  callee?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      workflowId: 'WorkflowId',
      callCenterNumber: 'CallCenterNumber',
      caller: 'Caller',
      callee: 'Callee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      workflowId: 'string',
      callCenterNumber: 'string',
      caller: 'string',
      callee: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBack2BackCallResponseBody extends $tea.Model {
  statusDesc?: string;
  taskId?: string;
  requestId?: string;
  message?: string;
  httpStatusCode?: number;
  statusCode?: string;
  code?: string;
  success?: boolean;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      statusDesc: 'StatusDesc',
      taskId: 'TaskId',
      requestId: 'RequestId',
      message: 'Message',
      httpStatusCode: 'HttpStatusCode',
      statusCode: 'StatusCode',
      code: 'Code',
      success: 'Success',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statusDesc: 'string',
      taskId: 'string',
      requestId: 'string',
      message: 'string',
      httpStatusCode: 'number',
      statusCode: 'string',
      code: 'string',
      success: 'boolean',
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
  instanceId?: string;
  groupId?: string;
  scenarioId?: string;
  jobJson?: string;
  selfHostedCallCenter?: boolean;
  callingNumber?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      groupId: 'GroupId',
      scenarioId: 'ScenarioId',
      jobJson: 'JobJson',
      selfHostedCallCenter: 'SelfHostedCallCenter',
      callingNumber: 'CallingNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      groupId: 'string',
      scenarioId: 'string',
      jobJson: 'string',
      selfHostedCallCenter: 'boolean',
      callingNumber: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  taskIds?: StartJobResponseBodyTaskIds[];
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      taskIds: 'TaskIds',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      taskIds: { 'type': 'array', 'itemType': StartJobResponseBodyTaskIds },
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
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
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  instanceOwnerId?: number;
  instanceId?: string;
  taskId?: string;
  resourceRecording?: string;
  mergedRecording?: string;
  static names(): { [key: string]: string } {
    return {
      instanceOwnerId: 'InstanceOwnerId',
      instanceId: 'InstanceId',
      taskId: 'TaskId',
      resourceRecording: 'ResourceRecording',
      mergedRecording: 'MergedRecording',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceOwnerId: 'number',
      instanceId: 'string',
      taskId: 'string',
      resourceRecording: 'string',
      mergedRecording: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCabRecordingResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  instanceId?: string;
  all?: boolean;
  scenarioId?: string;
  groupId?: string;
  jobId?: string[];
  jobReferenceId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      all: 'All',
      scenarioId: 'ScenarioId',
      groupId: 'GroupId',
      jobId: 'JobId',
      jobReferenceId: 'JobReferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      all: 'boolean',
      scenarioId: 'string',
      groupId: 'string',
      jobId: { 'type': 'array', 'itemType': 'string' },
      jobReferenceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendJobsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  instanceId?: string;
  skillGroupId?: string;
  all?: boolean;
  jobGroupId?: string;
  jobId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
      all: 'All',
      jobGroupId: 'JobGroupId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupId: 'string',
      all: 'boolean',
      jobGroupId: 'string',
      jobId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendPredictiveJobsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
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
  jobId?: string;
  instanceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobId: 'JobId',
      instanceOwnerId: 'InstanceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobId: 'string',
      instanceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskPreparingResponseBody extends $tea.Model {
  taskId?: string;
  requestId?: string;
  message?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
      message: 'Message',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      requestId: 'string',
      message: 'string',
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
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

export class AddBulkPhoneNumbersResponseBodyPhoneNumbersPhoneNumberSkillGroupsSkillGroup extends $tea.Model {
  skillGroupName?: string;
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      skillGroupName: 'SkillGroupName',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupName: 'string',
      skillGroupId: 'string',
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

export class AddBulkPhoneNumbersResponseBodyPhoneNumbersPhoneNumberContactFlow extends $tea.Model {
  type?: string;
  contactFlowDescription?: string;
  contactFlowName?: string;
  instanceId?: string;
  contactFlowId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      contactFlowDescription: 'ContactFlowDescription',
      contactFlowName: 'ContactFlowName',
      instanceId: 'InstanceId',
      contactFlowId: 'ContactFlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      contactFlowDescription: 'string',
      contactFlowName: 'string',
      instanceId: 'string',
      contactFlowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBulkPhoneNumbersResponseBodyPhoneNumbersPhoneNumber extends $tea.Model {
  skillGroups?: AddBulkPhoneNumbersResponseBodyPhoneNumbersPhoneNumberSkillGroups;
  testOnly?: boolean;
  trunks?: number;
  remainingTime?: number;
  number?: string;
  instanceId?: string;
  usage?: string;
  allowOutbound?: boolean;
  phoneNumberDescription?: string;
  contactFlow?: AddBulkPhoneNumbersResponseBodyPhoneNumbersPhoneNumberContactFlow;
  phoneNumberId?: string;
  static names(): { [key: string]: string } {
    return {
      skillGroups: 'SkillGroups',
      testOnly: 'TestOnly',
      trunks: 'Trunks',
      remainingTime: 'RemainingTime',
      number: 'Number',
      instanceId: 'InstanceId',
      usage: 'Usage',
      allowOutbound: 'AllowOutbound',
      phoneNumberDescription: 'PhoneNumberDescription',
      contactFlow: 'ContactFlow',
      phoneNumberId: 'PhoneNumberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroups: AddBulkPhoneNumbersResponseBodyPhoneNumbersPhoneNumberSkillGroups,
      testOnly: 'boolean',
      trunks: 'number',
      remainingTime: 'number',
      number: 'string',
      instanceId: 'string',
      usage: 'string',
      allowOutbound: 'boolean',
      phoneNumberDescription: 'string',
      contactFlow: AddBulkPhoneNumbersResponseBodyPhoneNumbersPhoneNumberContactFlow,
      phoneNumberId: 'string',
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
  type?: string;
  contactFlowDescription?: string;
  contactFlowName?: string;
  instanceId?: string;
  contactFlowId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      contactFlowDescription: 'ContactFlowDescription',
      contactFlowName: 'ContactFlowName',
      instanceId: 'InstanceId',
      contactFlowId: 'ContactFlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      contactFlowDescription: 'string',
      contactFlowName: 'string',
      instanceId: 'string',
      contactFlowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPhoneNumberResponseBodyPhoneNumber extends $tea.Model {
  testOnly?: boolean;
  trunks?: number;
  remainingTime?: number;
  number?: string;
  instanceId?: string;
  usage?: string;
  allowOutbound?: boolean;
  phoneNumberDescription?: string;
  contactFlow?: AddPhoneNumberResponseBodyPhoneNumberContactFlow;
  phoneNumberId?: string;
  static names(): { [key: string]: string } {
    return {
      testOnly: 'TestOnly',
      trunks: 'Trunks',
      remainingTime: 'RemainingTime',
      number: 'Number',
      instanceId: 'InstanceId',
      usage: 'Usage',
      allowOutbound: 'AllowOutbound',
      phoneNumberDescription: 'PhoneNumberDescription',
      contactFlow: 'ContactFlow',
      phoneNumberId: 'PhoneNumberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      testOnly: 'boolean',
      trunks: 'number',
      remainingTime: 'number',
      number: 'string',
      instanceId: 'string',
      usage: 'string',
      allowOutbound: 'boolean',
      phoneNumberDescription: 'string',
      contactFlow: AddPhoneNumberResponseBodyPhoneNumberContactFlow,
      phoneNumberId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CallOnlinePrivacyNumberResponseBodyData extends $tea.Model {
  represent?: string;
  statusCode?: string;
  callId?: string;
  dateCreated?: string;
  telX?: string;
  static names(): { [key: string]: string } {
    return {
      represent: 'Represent',
      statusCode: 'StatusCode',
      callId: 'CallId',
      dateCreated: 'DateCreated',
      telX: 'TelX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      represent: 'string',
      statusCode: 'string',
      callId: 'string',
      dateCreated: 'string',
      telX: 'string',
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

export class CommitContactFlowVersionModificationResponseBodyContactFlowVersion extends $tea.Model {
  status?: string;
  lastModified?: string;
  canvas?: string;
  lockedBy?: string;
  version?: string;
  contactFlowVersionId?: string;
  lastModifiedBy?: string;
  contactFlowVersionDescription?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      lastModified: 'LastModified',
      canvas: 'Canvas',
      lockedBy: 'LockedBy',
      version: 'Version',
      contactFlowVersionId: 'ContactFlowVersionId',
      lastModifiedBy: 'LastModifiedBy',
      contactFlowVersionDescription: 'ContactFlowVersionDescription',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      lastModified: 'string',
      canvas: 'string',
      lockedBy: 'string',
      version: 'string',
      contactFlowVersionId: 'string',
      lastModifiedBy: 'string',
      contactFlowVersionDescription: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchJobsResponseBodyJobGroupStrategyWorkingTime extends $tea.Model {
  endTime?: string;
  beginTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      beginTime: 'BeginTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      beginTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchJobsResponseBodyJobGroupStrategy extends $tea.Model {
  type?: string;
  strategyName?: string;
  maxAttemptsPerDay?: number;
  workingTime?: CreateBatchJobsResponseBodyJobGroupStrategyWorkingTime[];
  followUpStrategy?: string;
  endTime?: number;
  customized?: string;
  startTime?: number;
  isTemplate?: boolean;
  strategyId?: string;
  repeatDays?: string[];
  routingStrategy?: string;
  strategyDescription?: string;
  minAttemptInterval?: number;
  repeatBy?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      strategyName: 'StrategyName',
      maxAttemptsPerDay: 'MaxAttemptsPerDay',
      workingTime: 'WorkingTime',
      followUpStrategy: 'FollowUpStrategy',
      endTime: 'EndTime',
      customized: 'Customized',
      startTime: 'StartTime',
      isTemplate: 'IsTemplate',
      strategyId: 'StrategyId',
      repeatDays: 'RepeatDays',
      routingStrategy: 'RoutingStrategy',
      strategyDescription: 'StrategyDescription',
      minAttemptInterval: 'MinAttemptInterval',
      repeatBy: 'RepeatBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      strategyName: 'string',
      maxAttemptsPerDay: 'number',
      workingTime: { 'type': 'array', 'itemType': CreateBatchJobsResponseBodyJobGroupStrategyWorkingTime },
      followUpStrategy: 'string',
      endTime: 'number',
      customized: 'string',
      startTime: 'number',
      isTemplate: 'boolean',
      strategyId: 'string',
      repeatDays: { 'type': 'array', 'itemType': 'string' },
      routingStrategy: 'string',
      strategyDescription: 'string',
      minAttemptInterval: 'number',
      repeatBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchJobsResponseBodyJobGroup extends $tea.Model {
  jobGroupId?: string;
  scenarioId?: string;
  creationTime?: number;
  strategy?: CreateBatchJobsResponseBodyJobGroupStrategy;
  callingNumbers?: string[];
  jobGroupName?: string;
  jobFilePath?: string;
  jobGroupDescription?: string;
  static names(): { [key: string]: string } {
    return {
      jobGroupId: 'JobGroupId',
      scenarioId: 'ScenarioId',
      creationTime: 'CreationTime',
      strategy: 'Strategy',
      callingNumbers: 'CallingNumbers',
      jobGroupName: 'JobGroupName',
      jobFilePath: 'JobFilePath',
      jobGroupDescription: 'JobGroupDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobGroupId: 'string',
      scenarioId: 'string',
      creationTime: 'number',
      strategy: CreateBatchJobsResponseBodyJobGroupStrategy,
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      jobGroupName: 'string',
      jobFilePath: 'string',
      jobGroupDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCabInstanceResponseBodyInstance extends $tea.Model {
  creationTime?: number;
  callCenterInstanceId?: string;
  owner?: string;
  instanceName?: string;
  maxConcurrentConversation?: number;
  instanceId?: string;
  instanceDescription?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      callCenterInstanceId: 'CallCenterInstanceId',
      owner: 'Owner',
      instanceName: 'InstanceName',
      maxConcurrentConversation: 'MaxConcurrentConversation',
      instanceId: 'InstanceId',
      instanceDescription: 'InstanceDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'number',
      callCenterInstanceId: 'string',
      owner: 'string',
      instanceName: 'string',
      maxConcurrentConversation: 'number',
      instanceId: 'string',
      instanceDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContactFlowResponseBodyContactFlowPhoneNumbersPhoneNumber extends $tea.Model {
  testOnly?: boolean;
  trunks?: number;
  remainingTime?: number;
  number?: string;
  instanceId?: string;
  usage?: string;
  allowOutbound?: boolean;
  phoneNumberDescription?: string;
  phoneNumberId?: string;
  static names(): { [key: string]: string } {
    return {
      testOnly: 'TestOnly',
      trunks: 'Trunks',
      remainingTime: 'RemainingTime',
      number: 'Number',
      instanceId: 'InstanceId',
      usage: 'Usage',
      allowOutbound: 'AllowOutbound',
      phoneNumberDescription: 'PhoneNumberDescription',
      phoneNumberId: 'PhoneNumberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      testOnly: 'boolean',
      trunks: 'number',
      remainingTime: 'number',
      number: 'string',
      instanceId: 'string',
      usage: 'string',
      allowOutbound: 'boolean',
      phoneNumberDescription: 'string',
      phoneNumberId: 'string',
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
  status?: string;
  lastModified?: string;
  canvas?: string;
  lockedBy?: string;
  version?: string;
  contactFlowVersionId?: string;
  lastModifiedBy?: string;
  contactFlowVersionDescription?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      lastModified: 'LastModified',
      canvas: 'Canvas',
      lockedBy: 'LockedBy',
      version: 'Version',
      contactFlowVersionId: 'ContactFlowVersionId',
      lastModifiedBy: 'LastModifiedBy',
      contactFlowVersionDescription: 'ContactFlowVersionDescription',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      lastModified: 'string',
      canvas: 'string',
      lockedBy: 'string',
      version: 'string',
      contactFlowVersionId: 'string',
      lastModifiedBy: 'string',
      contactFlowVersionDescription: 'string',
      content: 'string',
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
  contactFlowDescription?: string;
  type?: string;
  phoneNumbers?: CreateContactFlowResponseBodyContactFlowPhoneNumbers;
  contactFlowName?: string;
  versions?: CreateContactFlowResponseBodyContactFlowVersions;
  instanceId?: string;
  contactFlowId?: string;
  appliedVersion?: string;
  static names(): { [key: string]: string } {
    return {
      contactFlowDescription: 'ContactFlowDescription',
      type: 'Type',
      phoneNumbers: 'PhoneNumbers',
      contactFlowName: 'ContactFlowName',
      versions: 'Versions',
      instanceId: 'InstanceId',
      contactFlowId: 'ContactFlowId',
      appliedVersion: 'AppliedVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowDescription: 'string',
      type: 'string',
      phoneNumbers: CreateContactFlowResponseBodyContactFlowPhoneNumbers,
      contactFlowName: 'string',
      versions: CreateContactFlowResponseBodyContactFlowVersions,
      instanceId: 'string',
      contactFlowId: 'string',
      appliedVersion: 'string',
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

export class CreateInstanceResponseBodyInstancePhoneNumbersPhoneNumber extends $tea.Model {
  testOnly?: boolean;
  trunks?: number;
  remainingTime?: number;
  number?: string;
  instanceId?: string;
  usage?: string;
  allowOutbound?: boolean;
  phoneNumberDescription?: string;
  phoneNumberId?: string;
  static names(): { [key: string]: string } {
    return {
      testOnly: 'TestOnly',
      trunks: 'Trunks',
      remainingTime: 'RemainingTime',
      number: 'Number',
      instanceId: 'InstanceId',
      usage: 'Usage',
      allowOutbound: 'AllowOutbound',
      phoneNumberDescription: 'PhoneNumberDescription',
      phoneNumberId: 'PhoneNumberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      testOnly: 'boolean',
      trunks: 'number',
      remainingTime: 'number',
      number: 'string',
      instanceId: 'string',
      usage: 'string',
      allowOutbound: 'boolean',
      phoneNumberDescription: 'string',
      phoneNumberId: 'string',
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

export class CreateInstanceResponseBodyInstanceAdminUserDetail extends $tea.Model {
  displayName?: string;
  email?: string;
  loginName?: string;
  department?: string;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      email: 'Email',
      loginName: 'LoginName',
      department: 'Department',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      email: 'string',
      loginName: 'string',
      department: 'string',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBodyInstanceAdminUser extends $tea.Model {
  userId?: string;
  instanceId?: string;
  ramId?: string;
  detail?: CreateInstanceResponseBodyInstanceAdminUserDetail;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      instanceId: 'InstanceId',
      ramId: 'RamId',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      instanceId: 'string',
      ramId: 'string',
      detail: CreateInstanceResponseBodyInstanceAdminUserDetail,
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

export class CreateInstanceResponseBodyInstance extends $tea.Model {
  status?: string;
  owner?: string;
  storageMaxSize?: number;
  storageMaxDays?: number;
  maxOnlineAgents?: number;
  successLoginNames?: CreateInstanceResponseBodyInstanceSuccessLoginNames;
  instanceId?: string;
  domainName?: string;
  instanceDescription?: string;
  phoneNumbers?: CreateInstanceResponseBodyInstancePhoneNumbers;
  consoleUrl?: string;
  successPhoneNumbers?: CreateInstanceResponseBodyInstanceSuccessPhoneNumbers;
  failLoginNames?: CreateInstanceResponseBodyInstanceFailLoginNames;
  instanceName?: string;
  storageBucket?: string;
  failPhoneNumbers?: CreateInstanceResponseBodyInstanceFailPhoneNumbers;
  createdTime?: number;
  directoryId?: string;
  admin?: CreateInstanceResponseBodyInstanceAdmin;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      owner: 'Owner',
      storageMaxSize: 'StorageMaxSize',
      storageMaxDays: 'StorageMaxDays',
      maxOnlineAgents: 'MaxOnlineAgents',
      successLoginNames: 'SuccessLoginNames',
      instanceId: 'InstanceId',
      domainName: 'DomainName',
      instanceDescription: 'InstanceDescription',
      phoneNumbers: 'PhoneNumbers',
      consoleUrl: 'ConsoleUrl',
      successPhoneNumbers: 'SuccessPhoneNumbers',
      failLoginNames: 'FailLoginNames',
      instanceName: 'InstanceName',
      storageBucket: 'StorageBucket',
      failPhoneNumbers: 'FailPhoneNumbers',
      createdTime: 'CreatedTime',
      directoryId: 'DirectoryId',
      admin: 'Admin',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      owner: 'string',
      storageMaxSize: 'number',
      storageMaxDays: 'number',
      maxOnlineAgents: 'number',
      successLoginNames: CreateInstanceResponseBodyInstanceSuccessLoginNames,
      instanceId: 'string',
      domainName: 'string',
      instanceDescription: 'string',
      phoneNumbers: CreateInstanceResponseBodyInstancePhoneNumbers,
      consoleUrl: 'string',
      successPhoneNumbers: CreateInstanceResponseBodyInstanceSuccessPhoneNumbers,
      failLoginNames: CreateInstanceResponseBodyInstanceFailLoginNames,
      instanceName: 'string',
      storageBucket: 'string',
      failPhoneNumbers: CreateInstanceResponseBodyInstanceFailPhoneNumbers,
      createdTime: 'number',
      directoryId: 'string',
      admin: CreateInstanceResponseBodyInstanceAdmin,
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
  type?: string;
  strategyName?: string;
  maxAttemptsPerDay?: number;
  workingTime?: CreateJobGroupResponseBodyJobGroupStrategyWorkingTime[];
  followUpStrategy?: string;
  endTime?: number;
  customized?: string;
  startTime?: number;
  isTemplate?: boolean;
  strategyId?: string;
  repeatDays?: string[];
  routingStrategy?: string;
  strategyDescription?: string;
  minAttemptInterval?: number;
  repeatBy?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      strategyName: 'StrategyName',
      maxAttemptsPerDay: 'MaxAttemptsPerDay',
      workingTime: 'WorkingTime',
      followUpStrategy: 'FollowUpStrategy',
      endTime: 'EndTime',
      customized: 'Customized',
      startTime: 'StartTime',
      isTemplate: 'IsTemplate',
      strategyId: 'StrategyId',
      repeatDays: 'RepeatDays',
      routingStrategy: 'RoutingStrategy',
      strategyDescription: 'StrategyDescription',
      minAttemptInterval: 'MinAttemptInterval',
      repeatBy: 'RepeatBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      strategyName: 'string',
      maxAttemptsPerDay: 'number',
      workingTime: { 'type': 'array', 'itemType': CreateJobGroupResponseBodyJobGroupStrategyWorkingTime },
      followUpStrategy: 'string',
      endTime: 'number',
      customized: 'string',
      startTime: 'number',
      isTemplate: 'boolean',
      strategyId: 'string',
      repeatDays: { 'type': 'array', 'itemType': 'string' },
      routingStrategy: 'string',
      strategyDescription: 'string',
      minAttemptInterval: 'number',
      repeatBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobGroupResponseBodyJobGroup extends $tea.Model {
  jobGroupId?: string;
  scenarioId?: string;
  creationTime?: number;
  strategy?: CreateJobGroupResponseBodyJobGroupStrategy;
  callingNumbers?: string[];
  jobGroupName?: string;
  jobFilePath?: string;
  jobGroupDescription?: string;
  static names(): { [key: string]: string } {
    return {
      jobGroupId: 'JobGroupId',
      scenarioId: 'ScenarioId',
      creationTime: 'CreationTime',
      strategy: 'Strategy',
      callingNumbers: 'CallingNumbers',
      jobGroupName: 'JobGroupName',
      jobFilePath: 'JobFilePath',
      jobGroupDescription: 'JobGroupDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobGroupId: 'string',
      scenarioId: 'string',
      creationTime: 'number',
      strategy: CreateJobGroupResponseBodyJobGroupStrategy,
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      jobGroupName: 'string',
      jobFilePath: 'string',
      jobGroupDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMediaResponseBodyMediaUploadParam extends $tea.Model {
  instance?: string;
  ossFilePath?: string;
  fileName?: string;
  name?: string;
  id?: string;
  ossFileName?: string;
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
      ossFilePath: 'OssFilePath',
      fileName: 'FileName',
      name: 'Name',
      id: 'Id',
      ossFileName: 'OssFileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: 'string',
      ossFilePath: 'string',
      fileName: 'string',
      name: 'string',
      id: 'string',
      ossFileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScenarioResponseBodyScenarioStrategyWorkingTime extends $tea.Model {
  endTime?: string;
  beginTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      beginTime: 'BeginTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      beginTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScenarioResponseBodyScenarioStrategy extends $tea.Model {
  type?: string;
  strategyName?: string;
  maxAttemptsPerDay?: number;
  workingTime?: CreateScenarioResponseBodyScenarioStrategyWorkingTime[];
  followUpStrategy?: string;
  endTime?: number;
  customized?: string;
  startTime?: number;
  isTemplate?: boolean;
  strategyId?: string;
  repeatDays?: string[];
  routingStrategy?: string;
  strategyDescription?: string;
  minAttemptInterval?: number;
  repeatBy?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      strategyName: 'StrategyName',
      maxAttemptsPerDay: 'MaxAttemptsPerDay',
      workingTime: 'WorkingTime',
      followUpStrategy: 'FollowUpStrategy',
      endTime: 'EndTime',
      customized: 'Customized',
      startTime: 'StartTime',
      isTemplate: 'IsTemplate',
      strategyId: 'StrategyId',
      repeatDays: 'RepeatDays',
      routingStrategy: 'RoutingStrategy',
      strategyDescription: 'StrategyDescription',
      minAttemptInterval: 'MinAttemptInterval',
      repeatBy: 'RepeatBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      strategyName: 'string',
      maxAttemptsPerDay: 'number',
      workingTime: { 'type': 'array', 'itemType': CreateScenarioResponseBodyScenarioStrategyWorkingTime },
      followUpStrategy: 'string',
      endTime: 'number',
      customized: 'string',
      startTime: 'number',
      isTemplate: 'boolean',
      strategyId: 'string',
      repeatDays: { 'type': 'array', 'itemType': 'string' },
      routingStrategy: 'string',
      strategyDescription: 'string',
      minAttemptInterval: 'number',
      repeatBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScenarioResponseBodyScenarioSurveysIntents extends $tea.Model {
  nodeId?: string;
  intentId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      intentId: 'IntentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      intentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScenarioResponseBodyScenarioSurveys extends $tea.Model {
  round?: number;
  surveyDescription?: string;
  beebotId?: string;
  intents?: CreateScenarioResponseBodyScenarioSurveysIntents[];
  surveyName?: string;
  role?: string;
  surveyId?: string;
  static names(): { [key: string]: string } {
    return {
      round: 'Round',
      surveyDescription: 'SurveyDescription',
      beebotId: 'BeebotId',
      intents: 'Intents',
      surveyName: 'SurveyName',
      role: 'Role',
      surveyId: 'SurveyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      round: 'number',
      surveyDescription: 'string',
      beebotId: 'string',
      intents: { 'type': 'array', 'itemType': CreateScenarioResponseBodyScenarioSurveysIntents },
      surveyName: 'string',
      role: 'string',
      surveyId: 'string',
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
  type?: string;
  scenarioId?: string;
  strategy?: CreateScenarioResponseBodyScenarioStrategy;
  isTemplate?: boolean;
  scenarioDescription?: string;
  scenarioName?: string;
  surveys?: CreateScenarioResponseBodyScenarioSurveys[];
  variables?: CreateScenarioResponseBodyScenarioVariables[];
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      scenarioId: 'ScenarioId',
      strategy: 'Strategy',
      isTemplate: 'IsTemplate',
      scenarioDescription: 'ScenarioDescription',
      scenarioName: 'ScenarioName',
      surveys: 'Surveys',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      scenarioId: 'string',
      strategy: CreateScenarioResponseBodyScenarioStrategy,
      isTemplate: 'boolean',
      scenarioDescription: 'string',
      scenarioName: 'string',
      surveys: { 'type': 'array', 'itemType': CreateScenarioResponseBodyScenarioSurveys },
      variables: { 'type': 'array', 'itemType': CreateScenarioResponseBodyScenarioVariables },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScenarioFromTemplateResponseBodyScenarioStrategyWorkingTime extends $tea.Model {
  endTime?: string;
  beginTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      beginTime: 'BeginTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      beginTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScenarioFromTemplateResponseBodyScenarioStrategy extends $tea.Model {
  type?: string;
  strategyName?: string;
  maxAttemptsPerDay?: number;
  workingTime?: CreateScenarioFromTemplateResponseBodyScenarioStrategyWorkingTime[];
  followUpStrategy?: string;
  endTime?: number;
  customized?: string;
  startTime?: number;
  isTemplate?: boolean;
  strategyId?: string;
  repeatDays?: string[];
  routingStrategy?: string;
  strategyDescription?: string;
  minAttemptInterval?: number;
  repeatBy?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      strategyName: 'StrategyName',
      maxAttemptsPerDay: 'MaxAttemptsPerDay',
      workingTime: 'WorkingTime',
      followUpStrategy: 'FollowUpStrategy',
      endTime: 'EndTime',
      customized: 'Customized',
      startTime: 'StartTime',
      isTemplate: 'IsTemplate',
      strategyId: 'StrategyId',
      repeatDays: 'RepeatDays',
      routingStrategy: 'RoutingStrategy',
      strategyDescription: 'StrategyDescription',
      minAttemptInterval: 'MinAttemptInterval',
      repeatBy: 'RepeatBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      strategyName: 'string',
      maxAttemptsPerDay: 'number',
      workingTime: { 'type': 'array', 'itemType': CreateScenarioFromTemplateResponseBodyScenarioStrategyWorkingTime },
      followUpStrategy: 'string',
      endTime: 'number',
      customized: 'string',
      startTime: 'number',
      isTemplate: 'boolean',
      strategyId: 'string',
      repeatDays: { 'type': 'array', 'itemType': 'string' },
      routingStrategy: 'string',
      strategyDescription: 'string',
      minAttemptInterval: 'number',
      repeatBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScenarioFromTemplateResponseBodyScenarioSurveysIntents extends $tea.Model {
  nodeId?: string;
  intentId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      intentId: 'IntentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      intentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScenarioFromTemplateResponseBodyScenarioSurveys extends $tea.Model {
  round?: number;
  surveyDescription?: string;
  beebotId?: string;
  intents?: CreateScenarioFromTemplateResponseBodyScenarioSurveysIntents[];
  surveyName?: string;
  role?: string;
  surveyId?: string;
  static names(): { [key: string]: string } {
    return {
      round: 'Round',
      surveyDescription: 'SurveyDescription',
      beebotId: 'BeebotId',
      intents: 'Intents',
      surveyName: 'SurveyName',
      role: 'Role',
      surveyId: 'SurveyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      round: 'number',
      surveyDescription: 'string',
      beebotId: 'string',
      intents: { 'type': 'array', 'itemType': CreateScenarioFromTemplateResponseBodyScenarioSurveysIntents },
      surveyName: 'string',
      role: 'string',
      surveyId: 'string',
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
  type?: string;
  scenarioId?: string;
  strategy?: CreateScenarioFromTemplateResponseBodyScenarioStrategy;
  isTemplate?: boolean;
  scenarioDescription?: string;
  scenarioName?: string;
  surveys?: CreateScenarioFromTemplateResponseBodyScenarioSurveys[];
  variables?: CreateScenarioFromTemplateResponseBodyScenarioVariables[];
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      scenarioId: 'ScenarioId',
      strategy: 'Strategy',
      isTemplate: 'IsTemplate',
      scenarioDescription: 'ScenarioDescription',
      scenarioName: 'ScenarioName',
      surveys: 'Surveys',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      scenarioId: 'string',
      strategy: CreateScenarioFromTemplateResponseBodyScenarioStrategy,
      isTemplate: 'boolean',
      scenarioDescription: 'string',
      scenarioName: 'string',
      surveys: { 'type': 'array', 'itemType': CreateScenarioFromTemplateResponseBodyScenarioSurveys },
      variables: { 'type': 'array', 'itemType': CreateScenarioFromTemplateResponseBodyScenarioVariables },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSurveyResponseBodySurveyAsrCustomModel extends $tea.Model {
  customModelStatus?: number;
  corpora?: string;
  static names(): { [key: string]: string } {
    return {
      customModelStatus: 'CustomModelStatus',
      corpora: 'Corpora',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customModelStatus: 'number',
      corpora: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSurveyResponseBodySurveyFlow extends $tea.Model {
  isPublished?: boolean;
  flowJson?: string;
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      isPublished: 'IsPublished',
      flowJson: 'FlowJson',
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isPublished: 'boolean',
      flowJson: 'string',
      flowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSurveyResponseBodySurvey extends $tea.Model {
  globalQuestions?: string;
  round?: number;
  speechOptimizationParam?: string;
  description?: string;
  hotWords?: string;
  asrCustomModel?: CreateSurveyResponseBodySurveyAsrCustomModel;
  flow?: CreateSurveyResponseBodySurveyFlow;
  role?: string;
  name?: string;
  scenarioUuid?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      globalQuestions: 'GlobalQuestions',
      round: 'Round',
      speechOptimizationParam: 'SpeechOptimizationParam',
      description: 'Description',
      hotWords: 'HotWords',
      asrCustomModel: 'AsrCustomModel',
      flow: 'Flow',
      role: 'Role',
      name: 'Name',
      scenarioUuid: 'ScenarioUuid',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalQuestions: 'string',
      round: 'number',
      speechOptimizationParam: 'string',
      description: 'string',
      hotWords: 'string',
      asrCustomModel: CreateSurveyResponseBodySurveyAsrCustomModel,
      flow: CreateSurveyResponseBodySurveyFlow,
      role: 'string',
      name: 'string',
      scenarioUuid: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DialogueResponseBodyFeedback extends $tea.Model {
  action?: string;
  interruptible?: boolean;
  actionParams?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      interruptible: 'Interruptible',
      actionParams: 'ActionParams',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      interruptible: 'boolean',
      actionParams: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadAllTypeRecordingResponseBodyMediaDownloadParamListMediaDownloadParam extends $tea.Model {
  signatureUrl?: string;
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      signatureUrl: 'SignatureUrl',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signatureUrl: 'string',
      fileName: 'string',
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
  signatureUrl?: string;
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      signatureUrl: 'SignatureUrl',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signatureUrl: 'string',
      fileName: 'string',
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
  signatureUrl?: string;
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      signatureUrl: 'SignatureUrl',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signatureUrl: 'string',
      fileName: 'string',
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

export class FindUsersResponseBodyUsersListUserSkillLevelsSkillLevelSkill extends $tea.Model {
  skillGroupId?: string;
  skillGroupName?: string;
  instanceId?: string;
  skillGroupDescription?: string;
  static names(): { [key: string]: string } {
    return {
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      instanceId: 'InstanceId',
      skillGroupDescription: 'SkillGroupDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupId: 'string',
      skillGroupName: 'string',
      instanceId: 'string',
      skillGroupDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindUsersResponseBodyUsersListUserSkillLevelsSkillLevel extends $tea.Model {
  skill?: FindUsersResponseBodyUsersListUserSkillLevelsSkillLevelSkill;
  skillLevelId?: string;
  level?: number;
  static names(): { [key: string]: string } {
    return {
      skill: 'Skill',
      skillLevelId: 'SkillLevelId',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skill: FindUsersResponseBodyUsersListUserSkillLevelsSkillLevelSkill,
      skillLevelId: 'string',
      level: 'number',
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

export class FindUsersResponseBodyUsersListUserRolesRole extends $tea.Model {
  roleDescription?: string;
  instanceId?: string;
  roleName?: string;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      roleDescription: 'RoleDescription',
      instanceId: 'InstanceId',
      roleName: 'RoleName',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleDescription: 'string',
      instanceId: 'string',
      roleName: 'string',
      roleId: 'string',
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

export class FindUsersResponseBodyUsersListUserDetail extends $tea.Model {
  displayName?: string;
  email?: string;
  loginName?: string;
  department?: string;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      email: 'Email',
      loginName: 'LoginName',
      department: 'Department',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      email: 'string',
      loginName: 'string',
      department: 'string',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindUsersResponseBodyUsersListUser extends $tea.Model {
  skillLevels?: FindUsersResponseBodyUsersListUserSkillLevels;
  privateOutboundNumberId?: string;
  userId?: string;
  roles?: FindUsersResponseBodyUsersListUserRoles;
  instanceId?: string;
  ramId?: string;
  detail?: FindUsersResponseBodyUsersListUserDetail;
  static names(): { [key: string]: string } {
    return {
      skillLevels: 'SkillLevels',
      privateOutboundNumberId: 'PrivateOutboundNumberId',
      userId: 'UserId',
      roles: 'Roles',
      instanceId: 'InstanceId',
      ramId: 'RamId',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillLevels: FindUsersResponseBodyUsersListUserSkillLevels,
      privateOutboundNumberId: 'string',
      userId: 'string',
      roles: FindUsersResponseBodyUsersListUserRoles,
      instanceId: 'string',
      ramId: 'string',
      detail: FindUsersResponseBodyUsersListUserDetail,
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
  totalTalkTime?: number;
  maxTalkTime?: number;
  averageTalkTime?: number;
  totalHoldTime?: number;
  maxHoldTime?: number;
  averageHoldTime?: number;
  totalWorkTime?: number;
  maxWorkTime?: number;
  averageWorkTime?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  satisfactionIndex?: number;
  callsOffered?: number;
  callsHandled?: number;
  handleRate?: number;
  totalRingTime?: number;
  maxRingTime?: number;
  averageRingTime?: number;
  static names(): { [key: string]: string } {
    return {
      totalTalkTime: 'TotalTalkTime',
      maxTalkTime: 'MaxTalkTime',
      averageTalkTime: 'AverageTalkTime',
      totalHoldTime: 'TotalHoldTime',
      maxHoldTime: 'MaxHoldTime',
      averageHoldTime: 'AverageHoldTime',
      totalWorkTime: 'TotalWorkTime',
      maxWorkTime: 'MaxWorkTime',
      averageWorkTime: 'AverageWorkTime',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      satisfactionIndex: 'SatisfactionIndex',
      callsOffered: 'CallsOffered',
      callsHandled: 'CallsHandled',
      handleRate: 'HandleRate',
      totalRingTime: 'TotalRingTime',
      maxRingTime: 'MaxRingTime',
      averageRingTime: 'AverageRingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalTalkTime: 'number',
      maxTalkTime: 'number',
      averageTalkTime: 'number',
      totalHoldTime: 'number',
      maxHoldTime: 'number',
      averageHoldTime: 'number',
      totalWorkTime: 'number',
      maxWorkTime: 'number',
      averageWorkTime: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      satisfactionIndex: 'number',
      callsOffered: 'number',
      callsHandled: 'number',
      handleRate: 'number',
      totalRingTime: 'number',
      maxRingTime: 'number',
      averageRingTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAgentStatisticReportResponseBodyDataListListGenerateAgentStatisticOutbound extends $tea.Model {
  totalTalkTime?: number;
  maxTalkTime?: number;
  averageTalkTime?: number;
  totalHoldTime?: number;
  maxHoldTime?: number;
  averageHoldTime?: number;
  totalWorkTime?: number;
  maxWorkTime?: number;
  averageWorkTime?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  satisfactionIndex?: number;
  callsDialed?: number;
  callsAnswered?: number;
  answerRate?: number;
  totalDialingTime?: number;
  maxDialingTime?: number;
  averageDialingTime?: number;
  static names(): { [key: string]: string } {
    return {
      totalTalkTime: 'TotalTalkTime',
      maxTalkTime: 'MaxTalkTime',
      averageTalkTime: 'AverageTalkTime',
      totalHoldTime: 'TotalHoldTime',
      maxHoldTime: 'MaxHoldTime',
      averageHoldTime: 'AverageHoldTime',
      totalWorkTime: 'TotalWorkTime',
      maxWorkTime: 'MaxWorkTime',
      averageWorkTime: 'AverageWorkTime',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      satisfactionIndex: 'SatisfactionIndex',
      callsDialed: 'CallsDialed',
      callsAnswered: 'CallsAnswered',
      answerRate: 'AnswerRate',
      totalDialingTime: 'TotalDialingTime',
      maxDialingTime: 'MaxDialingTime',
      averageDialingTime: 'AverageDialingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalTalkTime: 'number',
      maxTalkTime: 'number',
      averageTalkTime: 'number',
      totalHoldTime: 'number',
      maxHoldTime: 'number',
      averageHoldTime: 'number',
      totalWorkTime: 'number',
      maxWorkTime: 'number',
      averageWorkTime: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      satisfactionIndex: 'number',
      callsDialed: 'number',
      callsAnswered: 'number',
      answerRate: 'number',
      totalDialingTime: 'number',
      maxDialingTime: 'number',
      averageDialingTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAgentStatisticReportResponseBodyDataListListGenerateAgentStatisticOverall extends $tea.Model {
  totalTalkTime?: number;
  maxTalkTime?: number;
  averageTalkTime?: number;
  totalHoldTime?: number;
  maxHoldTime?: number;
  averageHoldTime?: number;
  totalWorkTime?: number;
  maxWorkTime?: number;
  averageWorkTime?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  satisfactionIndex?: number;
  totalCalls?: number;
  static names(): { [key: string]: string } {
    return {
      totalTalkTime: 'TotalTalkTime',
      maxTalkTime: 'MaxTalkTime',
      averageTalkTime: 'AverageTalkTime',
      totalHoldTime: 'TotalHoldTime',
      maxHoldTime: 'MaxHoldTime',
      averageHoldTime: 'AverageHoldTime',
      totalWorkTime: 'TotalWorkTime',
      maxWorkTime: 'MaxWorkTime',
      averageWorkTime: 'AverageWorkTime',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      satisfactionIndex: 'SatisfactionIndex',
      totalCalls: 'TotalCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalTalkTime: 'number',
      maxTalkTime: 'number',
      averageTalkTime: 'number',
      totalHoldTime: 'number',
      maxHoldTime: 'number',
      averageHoldTime: 'number',
      totalWorkTime: 'number',
      maxWorkTime: 'number',
      averageWorkTime: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      satisfactionIndex: 'number',
      totalCalls: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAgentStatisticReportResponseBodyDataListListGenerateAgentStatistic extends $tea.Model {
  agentId?: string;
  loginName?: string;
  agentName?: string;
  skillGroupIds?: string;
  skillGroupNames?: string;
  instanceId?: string;
  recordDate?: string;
  totalLoggedInTime?: number;
  totalBreakTime?: number;
  occupancyRate?: number;
  totalReadyTime?: number;
  maxReadyTime?: number;
  averageReadyTime?: number;
  inbound?: GenerateAgentStatisticReportResponseBodyDataListListGenerateAgentStatisticInbound;
  outbound?: GenerateAgentStatisticReportResponseBodyDataListListGenerateAgentStatisticOutbound;
  overall?: GenerateAgentStatisticReportResponseBodyDataListListGenerateAgentStatisticOverall;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      loginName: 'LoginName',
      agentName: 'AgentName',
      skillGroupIds: 'SkillGroupIds',
      skillGroupNames: 'SkillGroupNames',
      instanceId: 'InstanceId',
      recordDate: 'RecordDate',
      totalLoggedInTime: 'TotalLoggedInTime',
      totalBreakTime: 'TotalBreakTime',
      occupancyRate: 'OccupancyRate',
      totalReadyTime: 'TotalReadyTime',
      maxReadyTime: 'MaxReadyTime',
      averageReadyTime: 'AverageReadyTime',
      inbound: 'Inbound',
      outbound: 'Outbound',
      overall: 'Overall',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      loginName: 'string',
      agentName: 'string',
      skillGroupIds: 'string',
      skillGroupNames: 'string',
      instanceId: 'string',
      recordDate: 'string',
      totalLoggedInTime: 'number',
      totalBreakTime: 'number',
      occupancyRate: 'number',
      totalReadyTime: 'number',
      maxReadyTime: 'number',
      averageReadyTime: 'number',
      inbound: GenerateAgentStatisticReportResponseBodyDataListListGenerateAgentStatisticInbound,
      outbound: GenerateAgentStatisticReportResponseBodyDataListListGenerateAgentStatisticOutbound,
      overall: GenerateAgentStatisticReportResponseBodyDataListListGenerateAgentStatisticOverall,
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
  totalCount?: number;
  pageNumber?: number;
  pageSize?: number;
  list?: GenerateAgentStatisticReportResponseBodyDataListList;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      list: GenerateAgentStatisticReportResponseBodyDataListList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentDataResponseBodyDataListListInbound extends $tea.Model {
  totalTalkTime?: number;
  maxTalkTime?: number;
  averageTalkTime?: number;
  totalHoldTime?: number;
  maxHoldTime?: number;
  averageHoldTime?: number;
  totalWorkTime?: number;
  maxWorkTime?: number;
  averageWorkTime?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  satisfactionIndex?: number;
  callsOffered?: number;
  callsHandled?: number;
  handleRate?: number;
  totalRingTime?: number;
  maxRingTime?: number;
  averageRingTime?: number;
  static names(): { [key: string]: string } {
    return {
      totalTalkTime: 'TotalTalkTime',
      maxTalkTime: 'MaxTalkTime',
      averageTalkTime: 'AverageTalkTime',
      totalHoldTime: 'TotalHoldTime',
      maxHoldTime: 'MaxHoldTime',
      averageHoldTime: 'AverageHoldTime',
      totalWorkTime: 'TotalWorkTime',
      maxWorkTime: 'MaxWorkTime',
      averageWorkTime: 'AverageWorkTime',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      satisfactionIndex: 'SatisfactionIndex',
      callsOffered: 'CallsOffered',
      callsHandled: 'CallsHandled',
      handleRate: 'HandleRate',
      totalRingTime: 'TotalRingTime',
      maxRingTime: 'MaxRingTime',
      averageRingTime: 'AverageRingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalTalkTime: 'number',
      maxTalkTime: 'number',
      averageTalkTime: 'number',
      totalHoldTime: 'number',
      maxHoldTime: 'number',
      averageHoldTime: 'number',
      totalWorkTime: 'number',
      maxWorkTime: 'number',
      averageWorkTime: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      satisfactionIndex: 'number',
      callsOffered: 'number',
      callsHandled: 'number',
      handleRate: 'number',
      totalRingTime: 'number',
      maxRingTime: 'number',
      averageRingTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentDataResponseBodyDataListListOutbound extends $tea.Model {
  totalTalkTime?: number;
  maxTalkTime?: number;
  averageTalkTime?: number;
  totalHoldTime?: number;
  maxHoldTime?: number;
  averageHoldTime?: number;
  totalWorkTime?: number;
  maxWorkTime?: number;
  averageWorkTime?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  satisfactionIndex?: number;
  callsDialed?: number;
  callsAnswered?: number;
  answerRate?: number;
  totalDialingTime?: number;
  maxDialingTime?: number;
  averageDialingTime?: number;
  static names(): { [key: string]: string } {
    return {
      totalTalkTime: 'TotalTalkTime',
      maxTalkTime: 'MaxTalkTime',
      averageTalkTime: 'AverageTalkTime',
      totalHoldTime: 'TotalHoldTime',
      maxHoldTime: 'MaxHoldTime',
      averageHoldTime: 'AverageHoldTime',
      totalWorkTime: 'TotalWorkTime',
      maxWorkTime: 'MaxWorkTime',
      averageWorkTime: 'AverageWorkTime',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      satisfactionIndex: 'SatisfactionIndex',
      callsDialed: 'CallsDialed',
      callsAnswered: 'CallsAnswered',
      answerRate: 'AnswerRate',
      totalDialingTime: 'TotalDialingTime',
      maxDialingTime: 'MaxDialingTime',
      averageDialingTime: 'AverageDialingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalTalkTime: 'number',
      maxTalkTime: 'number',
      averageTalkTime: 'number',
      totalHoldTime: 'number',
      maxHoldTime: 'number',
      averageHoldTime: 'number',
      totalWorkTime: 'number',
      maxWorkTime: 'number',
      averageWorkTime: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      satisfactionIndex: 'number',
      callsDialed: 'number',
      callsAnswered: 'number',
      answerRate: 'number',
      totalDialingTime: 'number',
      maxDialingTime: 'number',
      averageDialingTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentDataResponseBodyDataListListOverall extends $tea.Model {
  totalTalkTime?: number;
  maxTalkTime?: number;
  averageTalkTime?: number;
  totalHoldTime?: number;
  maxHoldTime?: number;
  averageHoldTime?: number;
  totalWorkTime?: number;
  maxWorkTime?: number;
  averageWorkTime?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  satisfactionIndex?: number;
  totalCalls?: number;
  static names(): { [key: string]: string } {
    return {
      totalTalkTime: 'TotalTalkTime',
      maxTalkTime: 'MaxTalkTime',
      averageTalkTime: 'AverageTalkTime',
      totalHoldTime: 'TotalHoldTime',
      maxHoldTime: 'MaxHoldTime',
      averageHoldTime: 'AverageHoldTime',
      totalWorkTime: 'TotalWorkTime',
      maxWorkTime: 'MaxWorkTime',
      averageWorkTime: 'AverageWorkTime',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      satisfactionIndex: 'SatisfactionIndex',
      totalCalls: 'TotalCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalTalkTime: 'number',
      maxTalkTime: 'number',
      averageTalkTime: 'number',
      totalHoldTime: 'number',
      maxHoldTime: 'number',
      averageHoldTime: 'number',
      totalWorkTime: 'number',
      maxWorkTime: 'number',
      averageWorkTime: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      satisfactionIndex: 'number',
      totalCalls: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentDataResponseBodyDataListList extends $tea.Model {
  agentId?: string;
  loginName?: string;
  agentName?: string;
  skillGroupIds?: string;
  skillGroupNames?: string;
  instanceId?: string;
  recordDate?: string;
  totalLoggedInTime?: number;
  totalBreakTime?: number;
  occupancyRate?: number;
  totalReadyTime?: number;
  maxReadyTime?: number;
  averageReadyTime?: number;
  inbound?: GetAgentDataResponseBodyDataListListInbound;
  outbound?: GetAgentDataResponseBodyDataListListOutbound;
  overall?: GetAgentDataResponseBodyDataListListOverall;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      loginName: 'LoginName',
      agentName: 'AgentName',
      skillGroupIds: 'SkillGroupIds',
      skillGroupNames: 'SkillGroupNames',
      instanceId: 'InstanceId',
      recordDate: 'RecordDate',
      totalLoggedInTime: 'TotalLoggedInTime',
      totalBreakTime: 'TotalBreakTime',
      occupancyRate: 'OccupancyRate',
      totalReadyTime: 'TotalReadyTime',
      maxReadyTime: 'MaxReadyTime',
      averageReadyTime: 'AverageReadyTime',
      inbound: 'Inbound',
      outbound: 'Outbound',
      overall: 'Overall',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      loginName: 'string',
      agentName: 'string',
      skillGroupIds: 'string',
      skillGroupNames: 'string',
      instanceId: 'string',
      recordDate: 'string',
      totalLoggedInTime: 'number',
      totalBreakTime: 'number',
      occupancyRate: 'number',
      totalReadyTime: 'number',
      maxReadyTime: 'number',
      averageReadyTime: 'number',
      inbound: GetAgentDataResponseBodyDataListListInbound,
      outbound: GetAgentDataResponseBodyDataListListOutbound,
      overall: GetAgentDataResponseBodyDataListListOverall,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentDataResponseBodyDataList extends $tea.Model {
  totalCount?: number;
  pageNumber?: number;
  pageSize?: number;
  list?: GetAgentDataResponseBodyDataListList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      list: { 'type': 'array', 'itemType': GetAgentDataResponseBodyDataListList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallMeasureSummaryReportResponseBodyNumberReportsListNumberReport extends $tea.Model {
  day?: number;
  year?: number;
  inboundDurationByMinute?: number;
  outboundCount?: number;
  outboundDurationByMinute?: number;
  number?: string;
  inboundCount?: number;
  month?: number;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      year: 'Year',
      inboundDurationByMinute: 'InboundDurationByMinute',
      outboundCount: 'OutboundCount',
      outboundDurationByMinute: 'OutboundDurationByMinute',
      number: 'Number',
      inboundCount: 'InboundCount',
      month: 'Month',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'number',
      year: 'number',
      inboundDurationByMinute: 'number',
      outboundCount: 'number',
      outboundDurationByMinute: 'number',
      number: 'string',
      inboundCount: 'number',
      month: 'number',
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
  year?: number;
  inboundDurationByMinute?: number;
  outboundCount?: number;
  outboundDurationByMinute?: number;
  inboundCount?: number;
  month?: number;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      year: 'Year',
      inboundDurationByMinute: 'InboundDurationByMinute',
      outboundCount: 'OutboundCount',
      outboundDurationByMinute: 'OutboundDurationByMinute',
      inboundCount: 'InboundCount',
      month: 'Month',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'number',
      year: 'number',
      inboundDurationByMinute: 'number',
      outboundCount: 'number',
      outboundDurationByMinute: 'number',
      inboundCount: 'number',
      month: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigResponseBodyConfigItem extends $tea.Model {
  value?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConversationDetailByContactIdResponseBodyDataListListQualityCheckPhrase extends $tea.Model {
  words?: string;
  begin?: number;
  identity?: string;
  end?: number;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      words: 'Words',
      begin: 'Begin',
      identity: 'Identity',
      end: 'End',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      words: 'string',
      begin: 'number',
      identity: 'string',
      end: 'number',
      role: 'string',
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
  summaryName?: string;
  category?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      summaryName: 'SummaryName',
      category: 'Category',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summaryName: 'string',
      category: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConversationListResponseBodyConversations extends $tea.Model {
  summary?: GetConversationListResponseBodyConversationsSummary[];
  speaker?: string;
  timestamp?: number;
  script?: string;
  static names(): { [key: string]: string } {
    return {
      summary: 'Summary',
      speaker: 'Speaker',
      timestamp: 'Timestamp',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summary: { 'type': 'array', 'itemType': GetConversationListResponseBodyConversationsSummary },
      speaker: 'string',
      timestamp: 'number',
      script: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyInstancePhoneNumbersPhoneNumber extends $tea.Model {
  testOnly?: boolean;
  trunks?: number;
  remainingTime?: number;
  number?: string;
  instanceId?: string;
  usage?: string;
  allowOutbound?: boolean;
  phoneNumberDescription?: string;
  phoneNumberId?: string;
  static names(): { [key: string]: string } {
    return {
      testOnly: 'TestOnly',
      trunks: 'Trunks',
      remainingTime: 'RemainingTime',
      number: 'Number',
      instanceId: 'InstanceId',
      usage: 'Usage',
      allowOutbound: 'AllowOutbound',
      phoneNumberDescription: 'PhoneNumberDescription',
      phoneNumberId: 'PhoneNumberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      testOnly: 'boolean',
      trunks: 'number',
      remainingTime: 'number',
      number: 'string',
      instanceId: 'string',
      usage: 'string',
      allowOutbound: 'boolean',
      phoneNumberDescription: 'string',
      phoneNumberId: 'string',
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

export class GetInstanceResponseBodyInstanceAdminUserDetail extends $tea.Model {
  displayName?: string;
  email?: string;
  loginName?: string;
  department?: string;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      email: 'Email',
      loginName: 'LoginName',
      department: 'Department',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      email: 'string',
      loginName: 'string',
      department: 'string',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyInstanceAdminUser extends $tea.Model {
  userId?: string;
  instanceId?: string;
  ramId?: string;
  detail?: GetInstanceResponseBodyInstanceAdminUserDetail;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      instanceId: 'InstanceId',
      ramId: 'RamId',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      instanceId: 'string',
      ramId: 'string',
      detail: GetInstanceResponseBodyInstanceAdminUserDetail,
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

export class GetInstanceResponseBodyInstance extends $tea.Model {
  status?: string;
  owner?: string;
  storageMaxSize?: number;
  storageMaxDays?: number;
  maxOnlineAgents?: number;
  instanceId?: string;
  domainName?: string;
  instanceDescription?: string;
  phoneNumbers?: GetInstanceResponseBodyInstancePhoneNumbers;
  consoleUrl?: string;
  storageBucket?: string;
  instanceName?: string;
  createdTime?: number;
  directoryId?: string;
  admin?: GetInstanceResponseBodyInstanceAdmin;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      owner: 'Owner',
      storageMaxSize: 'StorageMaxSize',
      storageMaxDays: 'StorageMaxDays',
      maxOnlineAgents: 'MaxOnlineAgents',
      instanceId: 'InstanceId',
      domainName: 'DomainName',
      instanceDescription: 'InstanceDescription',
      phoneNumbers: 'PhoneNumbers',
      consoleUrl: 'ConsoleUrl',
      storageBucket: 'StorageBucket',
      instanceName: 'InstanceName',
      createdTime: 'CreatedTime',
      directoryId: 'DirectoryId',
      admin: 'Admin',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      owner: 'string',
      storageMaxSize: 'number',
      storageMaxDays: 'number',
      maxOnlineAgents: 'number',
      instanceId: 'string',
      domainName: 'string',
      instanceDescription: 'string',
      phoneNumbers: GetInstanceResponseBodyInstancePhoneNumbers,
      consoleUrl: 'string',
      storageBucket: 'string',
      instanceName: 'string',
      createdTime: 'number',
      directoryId: 'string',
      admin: GetInstanceResponseBodyInstanceAdmin,
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceStateResponseBodyRealTimeInstanceStateAgentStateDistributionsAgentStateCount extends $tea.Model {
  state?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      count: 'number',
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

export class GetInstanceSummaryReportResponseBodyInstanceSummaryReportOverall extends $tea.Model {
  totalTalkTime?: number;
  totalLoggedInTime?: number;
  occupancyRate?: number;
  totalWorkTime?: number;
  maxWorkTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  averageReadyTime?: number;
  maxReadyTime?: number;
  totalBreakTime?: number;
  totalReadyTime?: number;
  maxTalkTime?: number;
  totalCalls?: number;
  static names(): { [key: string]: string } {
    return {
      totalTalkTime: 'TotalTalkTime',
      totalLoggedInTime: 'TotalLoggedInTime',
      occupancyRate: 'OccupancyRate',
      totalWorkTime: 'TotalWorkTime',
      maxWorkTime: 'MaxWorkTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      averageReadyTime: 'AverageReadyTime',
      maxReadyTime: 'MaxReadyTime',
      totalBreakTime: 'TotalBreakTime',
      totalReadyTime: 'TotalReadyTime',
      maxTalkTime: 'MaxTalkTime',
      totalCalls: 'TotalCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalTalkTime: 'number',
      totalLoggedInTime: 'number',
      occupancyRate: 'number',
      totalWorkTime: 'number',
      maxWorkTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      averageReadyTime: 'number',
      maxReadyTime: 'number',
      totalBreakTime: 'number',
      totalReadyTime: 'number',
      maxTalkTime: 'number',
      totalCalls: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryReportResponseBodyInstanceSummaryReportInbound extends $tea.Model {
  callsIncomingLine?: number;
  averageRingTime?: number;
  callsHandled?: number;
  totalWorkTime?: number;
  callsAbandonedInIVR?: number;
  maxWorkTime?: number;
  averageWaitTime?: number;
  callsIncomingQueue?: number;
  averageWorkTime?: number;
  satisfactionIndex?: number;
  totalWaitTime?: number;
  totalRingTime?: number;
  maxTalkTime?: string;
  maxRingTime?: number;
  totalTalkTime?: number;
  callsIncomingIVR?: number;
  callsOffered?: number;
  maxWaitTime?: number;
  serviceLevel20?: number;
  averageTalkTime?: number;
  satisfactionSurveysOffered?: number;
  handleRate?: number;
  satisfactionSurveysResponded?: number;
  callsAbandonedInQueue?: number;
  static names(): { [key: string]: string } {
    return {
      callsIncomingLine: 'CallsIncomingLine',
      averageRingTime: 'AverageRingTime',
      callsHandled: 'CallsHandled',
      totalWorkTime: 'TotalWorkTime',
      callsAbandonedInIVR: 'CallsAbandonedInIVR',
      maxWorkTime: 'MaxWorkTime',
      averageWaitTime: 'AverageWaitTime',
      callsIncomingQueue: 'CallsIncomingQueue',
      averageWorkTime: 'AverageWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      totalWaitTime: 'TotalWaitTime',
      totalRingTime: 'TotalRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxRingTime: 'MaxRingTime',
      totalTalkTime: 'TotalTalkTime',
      callsIncomingIVR: 'CallsIncomingIVR',
      callsOffered: 'CallsOffered',
      maxWaitTime: 'MaxWaitTime',
      serviceLevel20: 'ServiceLevel20',
      averageTalkTime: 'AverageTalkTime',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      handleRate: 'HandleRate',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      callsAbandonedInQueue: 'CallsAbandonedInQueue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callsIncomingLine: 'number',
      averageRingTime: 'number',
      callsHandled: 'number',
      totalWorkTime: 'number',
      callsAbandonedInIVR: 'number',
      maxWorkTime: 'number',
      averageWaitTime: 'number',
      callsIncomingQueue: 'number',
      averageWorkTime: 'number',
      satisfactionIndex: 'number',
      totalWaitTime: 'number',
      totalRingTime: 'number',
      maxTalkTime: 'string',
      maxRingTime: 'number',
      totalTalkTime: 'number',
      callsIncomingIVR: 'number',
      callsOffered: 'number',
      maxWaitTime: 'number',
      serviceLevel20: 'number',
      averageTalkTime: 'number',
      satisfactionSurveysOffered: 'number',
      handleRate: 'number',
      satisfactionSurveysResponded: 'number',
      callsAbandonedInQueue: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryReportResponseBodyInstanceSummaryReportOutbound extends $tea.Model {
  totalTalkTime?: number;
  maxDialingTime?: number;
  callsDialed?: number;
  callsAnswered?: number;
  totalWorkTime?: number;
  answerRate?: number;
  maxWorkTime?: number;
  totalDialingTime?: number;
  averageWorkTime?: number;
  averageTalkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  maxTalkTime?: number;
  averageDialingTime?: number;
  static names(): { [key: string]: string } {
    return {
      totalTalkTime: 'TotalTalkTime',
      maxDialingTime: 'MaxDialingTime',
      callsDialed: 'CallsDialed',
      callsAnswered: 'CallsAnswered',
      totalWorkTime: 'TotalWorkTime',
      answerRate: 'AnswerRate',
      maxWorkTime: 'MaxWorkTime',
      totalDialingTime: 'TotalDialingTime',
      averageWorkTime: 'AverageWorkTime',
      averageTalkTime: 'AverageTalkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      maxTalkTime: 'MaxTalkTime',
      averageDialingTime: 'AverageDialingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalTalkTime: 'number',
      maxDialingTime: 'number',
      callsDialed: 'number',
      callsAnswered: 'number',
      totalWorkTime: 'number',
      answerRate: 'number',
      maxWorkTime: 'number',
      totalDialingTime: 'number',
      averageWorkTime: 'number',
      averageTalkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      maxTalkTime: 'number',
      averageDialingTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryReportResponseBodyInstanceSummaryReport extends $tea.Model {
  overall?: GetInstanceSummaryReportResponseBodyInstanceSummaryReportOverall;
  inbound?: GetInstanceSummaryReportResponseBodyInstanceSummaryReportInbound;
  outbound?: GetInstanceSummaryReportResponseBodyInstanceSummaryReportOutbound;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      overall: 'Overall',
      inbound: 'Inbound',
      outbound: 'Outbound',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overall: GetInstanceSummaryReportResponseBodyInstanceSummaryReportOverall,
      inbound: GetInstanceSummaryReportResponseBodyInstanceSummaryReportInbound,
      outbound: GetInstanceSummaryReportResponseBodyInstanceSummaryReportOutbound,
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryReportByIntervalResponseBodyInstanceTimeIntervalReportIntervalListInstanceSummaryReportOverall extends $tea.Model {
  totalTalkTime?: number;
  totalLoggedInTime?: number;
  occupancyRate?: number;
  totalWorkTime?: number;
  maxWorkTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  averageReadyTime?: number;
  maxReadyTime?: number;
  totalBreakTime?: number;
  totalReadyTime?: number;
  maxTalkTime?: number;
  totalCalls?: number;
  static names(): { [key: string]: string } {
    return {
      totalTalkTime: 'TotalTalkTime',
      totalLoggedInTime: 'TotalLoggedInTime',
      occupancyRate: 'OccupancyRate',
      totalWorkTime: 'TotalWorkTime',
      maxWorkTime: 'MaxWorkTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      averageReadyTime: 'AverageReadyTime',
      maxReadyTime: 'MaxReadyTime',
      totalBreakTime: 'TotalBreakTime',
      totalReadyTime: 'TotalReadyTime',
      maxTalkTime: 'MaxTalkTime',
      totalCalls: 'TotalCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalTalkTime: 'number',
      totalLoggedInTime: 'number',
      occupancyRate: 'number',
      totalWorkTime: 'number',
      maxWorkTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      averageReadyTime: 'number',
      maxReadyTime: 'number',
      totalBreakTime: 'number',
      totalReadyTime: 'number',
      maxTalkTime: 'number',
      totalCalls: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryReportByIntervalResponseBodyInstanceTimeIntervalReportIntervalListInstanceSummaryReportInbound extends $tea.Model {
  callsIncomingLine?: number;
  averageRingTime?: number;
  callsHandled?: number;
  totalWorkTime?: number;
  callsAbandonedInIVR?: number;
  maxWorkTime?: number;
  averageWaitTime?: number;
  callsIncomingQueue?: number;
  averageWorkTime?: number;
  satisfactionIndex?: number;
  totalWaitTime?: number;
  totalRingTime?: number;
  maxTalkTime?: string;
  maxRingTime?: number;
  totalTalkTime?: number;
  callsIncomingIVR?: number;
  callsOffered?: number;
  maxWaitTime?: number;
  serviceLevel20?: number;
  averageTalkTime?: number;
  satisfactionSurveysOffered?: number;
  handleRate?: number;
  satisfactionSurveysResponded?: number;
  callsAbandonedInQueue?: number;
  static names(): { [key: string]: string } {
    return {
      callsIncomingLine: 'CallsIncomingLine',
      averageRingTime: 'AverageRingTime',
      callsHandled: 'CallsHandled',
      totalWorkTime: 'TotalWorkTime',
      callsAbandonedInIVR: 'CallsAbandonedInIVR',
      maxWorkTime: 'MaxWorkTime',
      averageWaitTime: 'AverageWaitTime',
      callsIncomingQueue: 'CallsIncomingQueue',
      averageWorkTime: 'AverageWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      totalWaitTime: 'TotalWaitTime',
      totalRingTime: 'TotalRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxRingTime: 'MaxRingTime',
      totalTalkTime: 'TotalTalkTime',
      callsIncomingIVR: 'CallsIncomingIVR',
      callsOffered: 'CallsOffered',
      maxWaitTime: 'MaxWaitTime',
      serviceLevel20: 'ServiceLevel20',
      averageTalkTime: 'AverageTalkTime',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      handleRate: 'HandleRate',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      callsAbandonedInQueue: 'CallsAbandonedInQueue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callsIncomingLine: 'number',
      averageRingTime: 'number',
      callsHandled: 'number',
      totalWorkTime: 'number',
      callsAbandonedInIVR: 'number',
      maxWorkTime: 'number',
      averageWaitTime: 'number',
      callsIncomingQueue: 'number',
      averageWorkTime: 'number',
      satisfactionIndex: 'number',
      totalWaitTime: 'number',
      totalRingTime: 'number',
      maxTalkTime: 'string',
      maxRingTime: 'number',
      totalTalkTime: 'number',
      callsIncomingIVR: 'number',
      callsOffered: 'number',
      maxWaitTime: 'number',
      serviceLevel20: 'number',
      averageTalkTime: 'number',
      satisfactionSurveysOffered: 'number',
      handleRate: 'number',
      satisfactionSurveysResponded: 'number',
      callsAbandonedInQueue: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryReportByIntervalResponseBodyInstanceTimeIntervalReportIntervalListInstanceSummaryReportOutbound extends $tea.Model {
  totalTalkTime?: number;
  maxDialingTime?: number;
  callsDialed?: number;
  callsAnswered?: number;
  totalWorkTime?: number;
  answerRate?: number;
  maxWorkTime?: number;
  totalDialingTime?: number;
  averageWorkTime?: number;
  averageTalkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  maxTalkTime?: number;
  averageDialingTime?: number;
  static names(): { [key: string]: string } {
    return {
      totalTalkTime: 'TotalTalkTime',
      maxDialingTime: 'MaxDialingTime',
      callsDialed: 'CallsDialed',
      callsAnswered: 'CallsAnswered',
      totalWorkTime: 'TotalWorkTime',
      answerRate: 'AnswerRate',
      maxWorkTime: 'MaxWorkTime',
      totalDialingTime: 'TotalDialingTime',
      averageWorkTime: 'AverageWorkTime',
      averageTalkTime: 'AverageTalkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      maxTalkTime: 'MaxTalkTime',
      averageDialingTime: 'AverageDialingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalTalkTime: 'number',
      maxDialingTime: 'number',
      callsDialed: 'number',
      callsAnswered: 'number',
      totalWorkTime: 'number',
      answerRate: 'number',
      maxWorkTime: 'number',
      totalDialingTime: 'number',
      averageWorkTime: 'number',
      averageTalkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      maxTalkTime: 'number',
      averageDialingTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryReportByIntervalResponseBodyInstanceTimeIntervalReportIntervalListInstanceSummaryReport extends $tea.Model {
  overall?: GetInstanceSummaryReportByIntervalResponseBodyInstanceTimeIntervalReportIntervalListInstanceSummaryReportOverall;
  inbound?: GetInstanceSummaryReportByIntervalResponseBodyInstanceTimeIntervalReportIntervalListInstanceSummaryReportInbound;
  outbound?: GetInstanceSummaryReportByIntervalResponseBodyInstanceTimeIntervalReportIntervalListInstanceSummaryReportOutbound;
  instanceId?: string;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      overall: 'Overall',
      inbound: 'Inbound',
      outbound: 'Outbound',
      instanceId: 'InstanceId',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overall: GetInstanceSummaryReportByIntervalResponseBodyInstanceTimeIntervalReportIntervalListInstanceSummaryReportOverall,
      inbound: GetInstanceSummaryReportByIntervalResponseBodyInstanceTimeIntervalReportIntervalListInstanceSummaryReportInbound,
      outbound: GetInstanceSummaryReportByIntervalResponseBodyInstanceTimeIntervalReportIntervalListInstanceSummaryReportOutbound,
      instanceId: 'string',
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

export class GetInstanceSummaryReportSinceMidnightResponseBodyInstanceSummaryReportOverall extends $tea.Model {
  totalTalkTime?: number;
  totalLoggedInTime?: number;
  occupancyRate?: number;
  totalWorkTime?: number;
  maxWorkTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  averageReadyTime?: number;
  maxReadyTime?: number;
  totalBreakTime?: number;
  totalReadyTime?: number;
  maxTalkTime?: number;
  totalCalls?: number;
  static names(): { [key: string]: string } {
    return {
      totalTalkTime: 'TotalTalkTime',
      totalLoggedInTime: 'TotalLoggedInTime',
      occupancyRate: 'OccupancyRate',
      totalWorkTime: 'TotalWorkTime',
      maxWorkTime: 'MaxWorkTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      averageReadyTime: 'AverageReadyTime',
      maxReadyTime: 'MaxReadyTime',
      totalBreakTime: 'TotalBreakTime',
      totalReadyTime: 'TotalReadyTime',
      maxTalkTime: 'MaxTalkTime',
      totalCalls: 'TotalCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalTalkTime: 'number',
      totalLoggedInTime: 'number',
      occupancyRate: 'number',
      totalWorkTime: 'number',
      maxWorkTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      averageReadyTime: 'number',
      maxReadyTime: 'number',
      totalBreakTime: 'number',
      totalReadyTime: 'number',
      maxTalkTime: 'number',
      totalCalls: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryReportSinceMidnightResponseBodyInstanceSummaryReportInbound extends $tea.Model {
  callsIncomingLine?: number;
  averageRingTime?: number;
  callsHandled?: number;
  totalWorkTime?: number;
  callsAbandonedInIVR?: number;
  maxWorkTime?: number;
  averageWaitTime?: number;
  callsIncomingQueue?: number;
  averageWorkTime?: number;
  satisfactionIndex?: number;
  totalWaitTime?: number;
  totalRingTime?: number;
  maxTalkTime?: string;
  maxRingTime?: number;
  totalTalkTime?: number;
  callsIncomingIVR?: number;
  callsOffered?: number;
  maxWaitTime?: number;
  serviceLevel20?: number;
  averageTalkTime?: number;
  satisfactionSurveysOffered?: number;
  handleRate?: number;
  satisfactionSurveysResponded?: number;
  callsAbandonedInQueue?: number;
  static names(): { [key: string]: string } {
    return {
      callsIncomingLine: 'CallsIncomingLine',
      averageRingTime: 'AverageRingTime',
      callsHandled: 'CallsHandled',
      totalWorkTime: 'TotalWorkTime',
      callsAbandonedInIVR: 'CallsAbandonedInIVR',
      maxWorkTime: 'MaxWorkTime',
      averageWaitTime: 'AverageWaitTime',
      callsIncomingQueue: 'CallsIncomingQueue',
      averageWorkTime: 'AverageWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      totalWaitTime: 'TotalWaitTime',
      totalRingTime: 'TotalRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxRingTime: 'MaxRingTime',
      totalTalkTime: 'TotalTalkTime',
      callsIncomingIVR: 'CallsIncomingIVR',
      callsOffered: 'CallsOffered',
      maxWaitTime: 'MaxWaitTime',
      serviceLevel20: 'ServiceLevel20',
      averageTalkTime: 'AverageTalkTime',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      handleRate: 'HandleRate',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      callsAbandonedInQueue: 'CallsAbandonedInQueue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callsIncomingLine: 'number',
      averageRingTime: 'number',
      callsHandled: 'number',
      totalWorkTime: 'number',
      callsAbandonedInIVR: 'number',
      maxWorkTime: 'number',
      averageWaitTime: 'number',
      callsIncomingQueue: 'number',
      averageWorkTime: 'number',
      satisfactionIndex: 'number',
      totalWaitTime: 'number',
      totalRingTime: 'number',
      maxTalkTime: 'string',
      maxRingTime: 'number',
      totalTalkTime: 'number',
      callsIncomingIVR: 'number',
      callsOffered: 'number',
      maxWaitTime: 'number',
      serviceLevel20: 'number',
      averageTalkTime: 'number',
      satisfactionSurveysOffered: 'number',
      handleRate: 'number',
      satisfactionSurveysResponded: 'number',
      callsAbandonedInQueue: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryReportSinceMidnightResponseBodyInstanceSummaryReportOutbound extends $tea.Model {
  totalTalkTime?: number;
  maxDialingTime?: number;
  callsDialed?: number;
  callsAnswered?: number;
  totalWorkTime?: number;
  answerRate?: number;
  maxWorkTime?: number;
  totalDialingTime?: number;
  averageWorkTime?: number;
  averageTalkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  maxTalkTime?: number;
  averageDialingTime?: number;
  static names(): { [key: string]: string } {
    return {
      totalTalkTime: 'TotalTalkTime',
      maxDialingTime: 'MaxDialingTime',
      callsDialed: 'CallsDialed',
      callsAnswered: 'CallsAnswered',
      totalWorkTime: 'TotalWorkTime',
      answerRate: 'AnswerRate',
      maxWorkTime: 'MaxWorkTime',
      totalDialingTime: 'TotalDialingTime',
      averageWorkTime: 'AverageWorkTime',
      averageTalkTime: 'AverageTalkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      maxTalkTime: 'MaxTalkTime',
      averageDialingTime: 'AverageDialingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalTalkTime: 'number',
      maxDialingTime: 'number',
      callsDialed: 'number',
      callsAnswered: 'number',
      totalWorkTime: 'number',
      answerRate: 'number',
      maxWorkTime: 'number',
      totalDialingTime: 'number',
      averageWorkTime: 'number',
      averageTalkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      maxTalkTime: 'number',
      averageDialingTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryReportSinceMidnightResponseBodyInstanceSummaryReport extends $tea.Model {
  overall?: GetInstanceSummaryReportSinceMidnightResponseBodyInstanceSummaryReportOverall;
  inbound?: GetInstanceSummaryReportSinceMidnightResponseBodyInstanceSummaryReportInbound;
  outbound?: GetInstanceSummaryReportSinceMidnightResponseBodyInstanceSummaryReportOutbound;
  instanceId?: string;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      overall: 'Overall',
      inbound: 'Inbound',
      outbound: 'Outbound',
      instanceId: 'InstanceId',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overall: GetInstanceSummaryReportSinceMidnightResponseBodyInstanceSummaryReportOverall,
      inbound: GetInstanceSummaryReportSinceMidnightResponseBodyInstanceSummaryReportInbound,
      outbound: GetInstanceSummaryReportSinceMidnightResponseBodyInstanceSummaryReportOutbound,
      instanceId: 'string',
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobContacts extends $tea.Model {
  phoneNumber?: string;
  contactId?: string;
  state?: string;
  honorific?: string;
  contactName?: string;
  role?: string;
  referenceId?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
      contactId: 'ContactId',
      state: 'State',
      honorific: 'Honorific',
      contactName: 'ContactName',
      role: 'Role',
      referenceId: 'ReferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: 'string',
      contactId: 'string',
      state: 'string',
      honorific: 'string',
      contactName: 'string',
      role: 'string',
      referenceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobSummary extends $tea.Model {
  summaryName?: string;
  category?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      summaryName: 'SummaryName',
      category: 'Category',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summaryName: 'string',
      category: 'string',
      content: 'string',
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

export class GetJobResponseBodyJobTasksContact extends $tea.Model {
  phoneNumber?: string;
  contactId?: string;
  state?: string;
  honorific?: string;
  contactName?: string;
  role?: string;
  referenceId?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
      contactId: 'ContactId',
      state: 'State',
      honorific: 'Honorific',
      contactName: 'ContactName',
      role: 'Role',
      referenceId: 'ReferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: 'string',
      contactId: 'string',
      state: 'string',
      honorific: 'string',
      contactName: 'string',
      role: 'string',
      referenceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobTasksConversationSummary extends $tea.Model {
  summaryName?: string;
  category?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      summaryName: 'SummaryName',
      category: 'Category',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summaryName: 'string',
      category: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobTasksConversation extends $tea.Model {
  summary?: GetJobResponseBodyJobTasksConversationSummary[];
  speaker?: string;
  timestamp?: number;
  script?: string;
  static names(): { [key: string]: string } {
    return {
      summary: 'Summary',
      speaker: 'Speaker',
      timestamp: 'Timestamp',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summary: { 'type': 'array', 'itemType': GetJobResponseBodyJobTasksConversationSummary },
      speaker: 'string',
      timestamp: 'number',
      script: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobTasks extends $tea.Model {
  status?: string;
  planedTime?: number;
  chatbotId?: string;
  actualTime?: number;
  calledNumber?: string;
  scenarioId?: string;
  contact?: GetJobResponseBodyJobTasksContact;
  jobId?: string;
  callId?: string;
  callingNumber?: string;
  brief?: string;
  duration?: number;
  taskId?: string;
  conversation?: GetJobResponseBodyJobTasksConversation[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      planedTime: 'PlanedTime',
      chatbotId: 'ChatbotId',
      actualTime: 'ActualTime',
      calledNumber: 'CalledNumber',
      scenarioId: 'ScenarioId',
      contact: 'Contact',
      jobId: 'JobId',
      callId: 'CallId',
      callingNumber: 'CallingNumber',
      brief: 'Brief',
      duration: 'Duration',
      taskId: 'TaskId',
      conversation: 'Conversation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      planedTime: 'number',
      chatbotId: 'string',
      actualTime: 'number',
      calledNumber: 'string',
      scenarioId: 'string',
      contact: GetJobResponseBodyJobTasksContact,
      jobId: 'string',
      callId: 'string',
      callingNumber: 'string',
      brief: 'string',
      duration: 'number',
      taskId: 'string',
      conversation: { 'type': 'array', 'itemType': GetJobResponseBodyJobTasksConversation },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJob extends $tea.Model {
  status?: string;
  callingNumbers?: string[];
  contacts?: GetJobResponseBodyJobContacts[];
  summary?: GetJobResponseBodyJobSummary[];
  priority?: number;
  failureReason?: string;
  systemPriority?: number;
  extras?: GetJobResponseBodyJobExtras[];
  referenceId?: string;
  scenarioId?: string;
  tasks?: GetJobResponseBodyJobTasks[];
  strategyId?: string;
  groupId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      callingNumbers: 'CallingNumbers',
      contacts: 'Contacts',
      summary: 'Summary',
      priority: 'Priority',
      failureReason: 'FailureReason',
      systemPriority: 'SystemPriority',
      extras: 'Extras',
      referenceId: 'ReferenceId',
      scenarioId: 'ScenarioId',
      tasks: 'Tasks',
      strategyId: 'StrategyId',
      groupId: 'GroupId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      contacts: { 'type': 'array', 'itemType': GetJobResponseBodyJobContacts },
      summary: { 'type': 'array', 'itemType': GetJobResponseBodyJobSummary },
      priority: 'number',
      failureReason: 'string',
      systemPriority: 'number',
      extras: { 'type': 'array', 'itemType': GetJobResponseBodyJobExtras },
      referenceId: 'string',
      scenarioId: 'string',
      tasks: { 'type': 'array', 'itemType': GetJobResponseBodyJobTasks },
      strategyId: 'string',
      groupId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobDataUploadParamsResponseBodyUploadParams extends $tea.Model {
  signature?: string;
  host?: string;
  policy?: string;
  folder?: string;
  accessId?: string;
  expire?: number;
  static names(): { [key: string]: string } {
    return {
      signature: 'Signature',
      host: 'Host',
      policy: 'Policy',
      folder: 'Folder',
      accessId: 'AccessId',
      expire: 'Expire',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signature: 'string',
      host: 'string',
      policy: 'string',
      folder: 'string',
      accessId: 'string',
      expire: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobGroupResponseBodyJobGroupStrategyWorkingTime extends $tea.Model {
  endTime?: string;
  beginTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      beginTime: 'BeginTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      beginTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobGroupResponseBodyJobGroupStrategy extends $tea.Model {
  type?: string;
  maxAttemptsPerDay?: number;
  workingTime?: GetJobGroupResponseBodyJobGroupStrategyWorkingTime[];
  followUpStrategy?: string;
  endTime?: number;
  customized?: string;
  startTime?: number;
  isTemplate?: boolean;
  repeatDays?: string[];
  routingStrategy?: string;
  description?: string;
  minAttemptInterval?: number;
  repeatBy?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      maxAttemptsPerDay: 'MaxAttemptsPerDay',
      workingTime: 'WorkingTime',
      followUpStrategy: 'FollowUpStrategy',
      endTime: 'EndTime',
      customized: 'Customized',
      startTime: 'StartTime',
      isTemplate: 'IsTemplate',
      repeatDays: 'RepeatDays',
      routingStrategy: 'RoutingStrategy',
      description: 'Description',
      minAttemptInterval: 'MinAttemptInterval',
      repeatBy: 'RepeatBy',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      maxAttemptsPerDay: 'number',
      workingTime: { 'type': 'array', 'itemType': GetJobGroupResponseBodyJobGroupStrategyWorkingTime },
      followUpStrategy: 'string',
      endTime: 'number',
      customized: 'string',
      startTime: 'number',
      isTemplate: 'boolean',
      repeatDays: { 'type': 'array', 'itemType': 'string' },
      routingStrategy: 'string',
      description: 'string',
      minAttemptInterval: 'number',
      repeatBy: 'string',
      name: 'string',
      id: 'string',
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
  status?: string;
  totalNotAnswered?: number;
  startTime?: number;
  categories?: GetJobGroupResponseBodyJobGroupProgressCategories[];
  totalJobs?: number;
  totalCompleted?: number;
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      totalNotAnswered: 'TotalNotAnswered',
      startTime: 'StartTime',
      categories: 'Categories',
      totalJobs: 'TotalJobs',
      totalCompleted: 'TotalCompleted',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      totalNotAnswered: 'number',
      startTime: 'number',
      categories: { 'type': 'array', 'itemType': GetJobGroupResponseBodyJobGroupProgressCategories },
      totalJobs: 'number',
      totalCompleted: 'number',
      duration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobGroupResponseBodyJobGroup extends $tea.Model {
  scenarioId?: string;
  creationTime?: number;
  strategy?: GetJobGroupResponseBodyJobGroupStrategy;
  callingNumbers?: string[];
  progress?: GetJobGroupResponseBodyJobGroupProgress;
  description?: string;
  jobFilePath?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      scenarioId: 'ScenarioId',
      creationTime: 'CreationTime',
      strategy: 'Strategy',
      callingNumbers: 'CallingNumbers',
      progress: 'Progress',
      description: 'Description',
      jobFilePath: 'JobFilePath',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scenarioId: 'string',
      creationTime: 'number',
      strategy: GetJobGroupResponseBodyJobGroupStrategy,
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      progress: GetJobGroupResponseBodyJobGroupProgress,
      description: 'string',
      jobFilePath: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobListResponseBodyJobsListSummary extends $tea.Model {
  summaryName?: string;
  groupId?: string;
  jobId?: string;
  category?: string;
  content?: string;
  summaryId?: string;
  taskId?: string;
  conversationDetailId?: string;
  static names(): { [key: string]: string } {
    return {
      summaryName: 'SummaryName',
      groupId: 'GroupId',
      jobId: 'JobId',
      category: 'Category',
      content: 'Content',
      summaryId: 'SummaryId',
      taskId: 'TaskId',
      conversationDetailId: 'ConversationDetailId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summaryName: 'string',
      groupId: 'string',
      jobId: 'string',
      category: 'string',
      content: 'string',
      summaryId: 'string',
      taskId: 'string',
      conversationDetailId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobListResponseBodyJobsListContacts extends $tea.Model {
  phoneNumber?: string;
  contactId?: string;
  state?: string;
  jobId?: string;
  honorific?: string;
  contactName?: string;
  role?: string;
  referenceId?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
      contactId: 'ContactId',
      state: 'State',
      jobId: 'JobId',
      honorific: 'Honorific',
      contactName: 'ContactName',
      role: 'Role',
      referenceId: 'ReferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: 'string',
      contactId: 'string',
      state: 'string',
      jobId: 'string',
      honorific: 'string',
      contactName: 'string',
      role: 'string',
      referenceId: 'string',
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

export class GetJobListResponseBodyJobsList extends $tea.Model {
  status?: string;
  callingNumbers?: string[];
  summary?: GetJobListResponseBodyJobsListSummary[];
  contacts?: GetJobListResponseBodyJobsListContacts[];
  priority?: number;
  failureReason?: string;
  systemPriority?: number;
  extras?: GetJobListResponseBodyJobsListExtras[];
  referenceId?: string;
  scenarioId?: string;
  strategyId?: string;
  groupId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      callingNumbers: 'CallingNumbers',
      summary: 'Summary',
      contacts: 'Contacts',
      priority: 'Priority',
      failureReason: 'FailureReason',
      systemPriority: 'SystemPriority',
      extras: 'Extras',
      referenceId: 'ReferenceId',
      scenarioId: 'ScenarioId',
      strategyId: 'StrategyId',
      groupId: 'GroupId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      summary: { 'type': 'array', 'itemType': GetJobListResponseBodyJobsListSummary },
      contacts: { 'type': 'array', 'itemType': GetJobListResponseBodyJobsListContacts },
      priority: 'number',
      failureReason: 'string',
      systemPriority: 'number',
      extras: { 'type': 'array', 'itemType': GetJobListResponseBodyJobsListExtras },
      referenceId: 'string',
      scenarioId: 'string',
      strategyId: 'string',
      groupId: 'string',
      jobId: 'string',
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
  phoneNumber?: string;
  contactId?: string;
  state?: string;
  jobId?: string;
  honorific?: string;
  contactName?: string;
  role?: string;
  referenceId?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
      contactId: 'ContactId',
      state: 'State',
      jobId: 'JobId',
      honorific: 'Honorific',
      contactName: 'ContactName',
      role: 'Role',
      referenceId: 'ReferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: 'string',
      contactId: 'string',
      state: 'string',
      jobId: 'string',
      honorific: 'string',
      contactName: 'string',
      role: 'string',
      referenceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusByCallIdResponseBodyJobSummary extends $tea.Model {
  summaryName?: string;
  category?: string;
  content?: string;
  summaryId?: string;
  static names(): { [key: string]: string } {
    return {
      summaryName: 'SummaryName',
      category: 'Category',
      content: 'Content',
      summaryId: 'SummaryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summaryName: 'string',
      category: 'string',
      content: 'string',
      summaryId: 'string',
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

export class GetJobStatusByCallIdResponseBodyJobTasksContact extends $tea.Model {
  phoneNumber?: string;
  contactId?: string;
  state?: string;
  jobId?: string;
  honorific?: string;
  contactName?: string;
  role?: string;
  referenceId?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
      contactId: 'ContactId',
      state: 'State',
      jobId: 'JobId',
      honorific: 'Honorific',
      contactName: 'ContactName',
      role: 'Role',
      referenceId: 'ReferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: 'string',
      contactId: 'string',
      state: 'string',
      jobId: 'string',
      honorific: 'string',
      contactName: 'string',
      role: 'string',
      referenceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusByCallIdResponseBodyJobTasksConversationSummary extends $tea.Model {
  summaryName?: string;
  category?: string;
  content?: string;
  summaryId?: string;
  static names(): { [key: string]: string } {
    return {
      summaryName: 'SummaryName',
      category: 'Category',
      content: 'Content',
      summaryId: 'SummaryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summaryName: 'string',
      category: 'string',
      content: 'string',
      summaryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusByCallIdResponseBodyJobTasksConversation extends $tea.Model {
  summary?: GetJobStatusByCallIdResponseBodyJobTasksConversationSummary[];
  speaker?: string;
  timestamp?: number;
  script?: string;
  taskId?: string;
  conversationDetailId?: string;
  static names(): { [key: string]: string } {
    return {
      summary: 'Summary',
      speaker: 'Speaker',
      timestamp: 'Timestamp',
      script: 'Script',
      taskId: 'TaskId',
      conversationDetailId: 'ConversationDetailId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summary: { 'type': 'array', 'itemType': GetJobStatusByCallIdResponseBodyJobTasksConversationSummary },
      speaker: 'string',
      timestamp: 'number',
      script: 'string',
      taskId: 'string',
      conversationDetailId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusByCallIdResponseBodyJobTasks extends $tea.Model {
  status?: string;
  planedTime?: number;
  chatbotId?: string;
  actualTime?: number;
  calledNumber?: string;
  endTime?: number;
  scenarioId?: string;
  contact?: GetJobStatusByCallIdResponseBodyJobTasksContact;
  jobId?: string;
  callId?: string;
  callingNumber?: string;
  brief?: string;
  duration?: number;
  taskId?: string;
  conversation?: GetJobStatusByCallIdResponseBodyJobTasksConversation[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      planedTime: 'PlanedTime',
      chatbotId: 'ChatbotId',
      actualTime: 'ActualTime',
      calledNumber: 'CalledNumber',
      endTime: 'EndTime',
      scenarioId: 'ScenarioId',
      contact: 'Contact',
      jobId: 'JobId',
      callId: 'CallId',
      callingNumber: 'CallingNumber',
      brief: 'Brief',
      duration: 'Duration',
      taskId: 'TaskId',
      conversation: 'Conversation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      planedTime: 'number',
      chatbotId: 'string',
      actualTime: 'number',
      calledNumber: 'string',
      endTime: 'number',
      scenarioId: 'string',
      contact: GetJobStatusByCallIdResponseBodyJobTasksContact,
      jobId: 'string',
      callId: 'string',
      callingNumber: 'string',
      brief: 'string',
      duration: 'number',
      taskId: 'string',
      conversation: { 'type': 'array', 'itemType': GetJobStatusByCallIdResponseBodyJobTasksConversation },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusByCallIdResponseBodyJob extends $tea.Model {
  status?: string;
  callingNumbers?: string[];
  contacts?: GetJobStatusByCallIdResponseBodyJobContacts[];
  summary?: GetJobStatusByCallIdResponseBodyJobSummary[];
  priority?: number;
  failureReason?: string;
  extras?: GetJobStatusByCallIdResponseBodyJobExtras[];
  referenceId?: string;
  scenarioId?: string;
  tasks?: GetJobStatusByCallIdResponseBodyJobTasks[];
  strategyId?: string;
  groupId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      callingNumbers: 'CallingNumbers',
      contacts: 'Contacts',
      summary: 'Summary',
      priority: 'Priority',
      failureReason: 'FailureReason',
      extras: 'Extras',
      referenceId: 'ReferenceId',
      scenarioId: 'ScenarioId',
      tasks: 'Tasks',
      strategyId: 'StrategyId',
      groupId: 'GroupId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      contacts: { 'type': 'array', 'itemType': GetJobStatusByCallIdResponseBodyJobContacts },
      summary: { 'type': 'array', 'itemType': GetJobStatusByCallIdResponseBodyJobSummary },
      priority: 'number',
      failureReason: 'string',
      extras: { 'type': 'array', 'itemType': GetJobStatusByCallIdResponseBodyJobExtras },
      referenceId: 'string',
      scenarioId: 'string',
      tasks: { 'type': 'array', 'itemType': GetJobStatusByCallIdResponseBodyJobTasks },
      strategyId: 'string',
      groupId: 'string',
      jobId: 'string',
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
  number?: string;
  city?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      city: 'City',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      city: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenarioResponseBodyScenarioStrategyWorkingTime extends $tea.Model {
  endTime?: string;
  beginTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      beginTime: 'BeginTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      beginTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenarioResponseBodyScenarioStrategy extends $tea.Model {
  type?: string;
  maxAttemptsPerDay?: number;
  workingTime?: GetScenarioResponseBodyScenarioStrategyWorkingTime[];
  followUpStrategy?: string;
  endTime?: number;
  customized?: string;
  startTime?: number;
  isTemplate?: boolean;
  repeatDays?: string[];
  routingStrategy?: string;
  description?: string;
  minAttemptInterval?: number;
  repeatBy?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      maxAttemptsPerDay: 'MaxAttemptsPerDay',
      workingTime: 'WorkingTime',
      followUpStrategy: 'FollowUpStrategy',
      endTime: 'EndTime',
      customized: 'Customized',
      startTime: 'StartTime',
      isTemplate: 'IsTemplate',
      repeatDays: 'RepeatDays',
      routingStrategy: 'RoutingStrategy',
      description: 'Description',
      minAttemptInterval: 'MinAttemptInterval',
      repeatBy: 'RepeatBy',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      maxAttemptsPerDay: 'number',
      workingTime: { 'type': 'array', 'itemType': GetScenarioResponseBodyScenarioStrategyWorkingTime },
      followUpStrategy: 'string',
      endTime: 'number',
      customized: 'string',
      startTime: 'number',
      isTemplate: 'boolean',
      repeatDays: { 'type': 'array', 'itemType': 'string' },
      routingStrategy: 'string',
      description: 'string',
      minAttemptInterval: 'number',
      repeatBy: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenarioResponseBodyScenarioSurveysIntents extends $tea.Model {
  nodeId?: string;
  intentId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      intentId: 'IntentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      intentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenarioResponseBodyScenarioSurveys extends $tea.Model {
  round?: number;
  description?: string;
  beebotId?: string;
  intents?: GetScenarioResponseBodyScenarioSurveysIntents[];
  name?: string;
  role?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      round: 'Round',
      description: 'Description',
      beebotId: 'BeebotId',
      intents: 'Intents',
      name: 'Name',
      role: 'Role',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      round: 'number',
      description: 'string',
      beebotId: 'string',
      intents: { 'type': 'array', 'itemType': GetScenarioResponseBodyScenarioSurveysIntents },
      name: 'string',
      role: 'string',
      id: 'string',
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
  type?: string;
  strategy?: GetScenarioResponseBodyScenarioStrategy;
  isTemplate?: boolean;
  description?: string;
  surveys?: GetScenarioResponseBodyScenarioSurveys[];
  variables?: GetScenarioResponseBodyScenarioVariables[];
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      strategy: 'Strategy',
      isTemplate: 'IsTemplate',
      description: 'Description',
      surveys: 'Surveys',
      variables: 'Variables',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      strategy: GetScenarioResponseBodyScenarioStrategy,
      isTemplate: 'boolean',
      description: 'string',
      surveys: { 'type': 'array', 'itemType': GetScenarioResponseBodyScenarioSurveys },
      variables: { 'type': 'array', 'itemType': GetScenarioResponseBodyScenarioVariables },
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceExtensionsResponseBodyServiceExtensionsServiceExtension extends $tea.Model {
  number?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      name: 'string',
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
  instance?: string;
  description?: string;
  templateCode?: string;
  gmtCreate?: string;
  scenario?: number;
  gmtModified?: string;
  name?: string;
  extra?: string;
  signName?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
      description: 'Description',
      templateCode: 'TemplateCode',
      gmtCreate: 'GmtCreate',
      scenario: 'Scenario',
      gmtModified: 'GmtModified',
      name: 'Name',
      extra: 'Extra',
      signName: 'SignName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: 'string',
      description: 'string',
      templateCode: 'string',
      gmtCreate: 'string',
      scenario: 'number',
      gmtModified: 'string',
      name: 'string',
      extra: 'string',
      signName: 'string',
      id: 'number',
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
  customModelStatus?: number;
  corpora?: string;
  static names(): { [key: string]: string } {
    return {
      customModelStatus: 'CustomModelStatus',
      corpora: 'Corpora',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customModelStatus: 'number',
      corpora: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSurveyResponseBodySurveyFlow extends $tea.Model {
  isPublished?: boolean;
  flowJson?: string;
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      isPublished: 'IsPublished',
      flowJson: 'FlowJson',
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isPublished: 'boolean',
      flowJson: 'string',
      flowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSurveyResponseBodySurvey extends $tea.Model {
  globalQuestions?: string;
  round?: number;
  speechOptimizationParam?: string;
  description?: string;
  hotWords?: string;
  asrCustomModel?: GetSurveyResponseBodySurveyAsrCustomModel;
  flow?: GetSurveyResponseBodySurveyFlow;
  role?: string;
  name?: string;
  scenarioUuid?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      globalQuestions: 'GlobalQuestions',
      round: 'Round',
      speechOptimizationParam: 'SpeechOptimizationParam',
      description: 'Description',
      hotWords: 'HotWords',
      asrCustomModel: 'AsrCustomModel',
      flow: 'Flow',
      role: 'Role',
      name: 'Name',
      scenarioUuid: 'ScenarioUuid',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalQuestions: 'string',
      round: 'number',
      speechOptimizationParam: 'string',
      description: 'string',
      hotWords: 'string',
      asrCustomModel: GetSurveyResponseBodySurveyAsrCustomModel,
      flow: GetSurveyResponseBodySurveyFlow,
      role: 'string',
      name: 'string',
      scenarioUuid: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskListResponseBodyTasksContact extends $tea.Model {
  phoneNumber?: string;
  contactId?: string;
  state?: string;
  jobId?: string;
  honorific?: string;
  contactName?: string;
  role?: string;
  referenceId?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
      contactId: 'ContactId',
      state: 'State',
      jobId: 'JobId',
      honorific: 'Honorific',
      contactName: 'ContactName',
      role: 'Role',
      referenceId: 'ReferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: 'string',
      contactId: 'string',
      state: 'string',
      jobId: 'string',
      honorific: 'string',
      contactName: 'string',
      role: 'string',
      referenceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskListResponseBodyTasksConversationSummary extends $tea.Model {
  summaryName?: string;
  category?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      summaryName: 'SummaryName',
      category: 'Category',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summaryName: 'string',
      category: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskListResponseBodyTasksConversation extends $tea.Model {
  summary?: GetTaskListResponseBodyTasksConversationSummary[];
  speaker?: string;
  timestamp?: number;
  script?: string;
  static names(): { [key: string]: string } {
    return {
      summary: 'Summary',
      speaker: 'Speaker',
      timestamp: 'Timestamp',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summary: { 'type': 'array', 'itemType': GetTaskListResponseBodyTasksConversationSummary },
      speaker: 'string',
      timestamp: 'number',
      script: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskListResponseBodyTasks extends $tea.Model {
  status?: string;
  planedTime?: number;
  chatbotId?: string;
  actualTime?: number;
  calledNumber?: string;
  scenarioId?: string;
  contact?: GetTaskListResponseBodyTasksContact;
  jobId?: string;
  callId?: string;
  callingNumber?: string;
  brief?: string;
  duration?: number;
  taskId?: string;
  conversation?: GetTaskListResponseBodyTasksConversation[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      planedTime: 'PlanedTime',
      chatbotId: 'ChatbotId',
      actualTime: 'ActualTime',
      calledNumber: 'CalledNumber',
      scenarioId: 'ScenarioId',
      contact: 'Contact',
      jobId: 'JobId',
      callId: 'CallId',
      callingNumber: 'CallingNumber',
      brief: 'Brief',
      duration: 'Duration',
      taskId: 'TaskId',
      conversation: 'Conversation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      planedTime: 'number',
      chatbotId: 'string',
      actualTime: 'number',
      calledNumber: 'string',
      scenarioId: 'string',
      contact: GetTaskListResponseBodyTasksContact,
      jobId: 'string',
      callId: 'string',
      callingNumber: 'string',
      brief: 'string',
      duration: 'number',
      taskId: 'string',
      conversation: { 'type': 'array', 'itemType': GetTaskListResponseBodyTasksConversation },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUserSkillLevelsSkillLevelSkill extends $tea.Model {
  skillGroupId?: string;
  skillGroupName?: string;
  instanceId?: string;
  skillGroupDescription?: string;
  static names(): { [key: string]: string } {
    return {
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      instanceId: 'InstanceId',
      skillGroupDescription: 'SkillGroupDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupId: 'string',
      skillGroupName: 'string',
      instanceId: 'string',
      skillGroupDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUserSkillLevelsSkillLevel extends $tea.Model {
  skill?: GetUserResponseBodyUserSkillLevelsSkillLevelSkill;
  skillLevelId?: string;
  level?: number;
  static names(): { [key: string]: string } {
    return {
      skill: 'Skill',
      skillLevelId: 'SkillLevelId',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skill: GetUserResponseBodyUserSkillLevelsSkillLevelSkill,
      skillLevelId: 'string',
      level: 'number',
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

export class GetUserResponseBodyUserRolesRole extends $tea.Model {
  roleDescription?: string;
  instanceId?: string;
  roleName?: string;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      roleDescription: 'RoleDescription',
      instanceId: 'InstanceId',
      roleName: 'RoleName',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleDescription: 'string',
      instanceId: 'string',
      roleName: 'string',
      roleId: 'string',
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

export class GetUserResponseBodyUserDetail extends $tea.Model {
  displayName?: string;
  email?: string;
  loginName?: string;
  department?: string;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      email: 'Email',
      loginName: 'LoginName',
      department: 'Department',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      email: 'string',
      loginName: 'string',
      department: 'string',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUser extends $tea.Model {
  skillLevels?: GetUserResponseBodyUserSkillLevels;
  userId?: string;
  roles?: GetUserResponseBodyUserRoles;
  instanceId?: string;
  ramId?: string;
  detail?: GetUserResponseBodyUserDetail;
  static names(): { [key: string]: string } {
    return {
      skillLevels: 'SkillLevels',
      userId: 'UserId',
      roles: 'Roles',
      instanceId: 'InstanceId',
      ramId: 'RamId',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillLevels: GetUserResponseBodyUserSkillLevels,
      userId: 'string',
      roles: GetUserResponseBodyUserRoles,
      instanceId: 'string',
      ramId: 'string',
      detail: GetUserResponseBodyUserDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByExtensionResponseBodyUserSkillLevelsSkill extends $tea.Model {
  skillGroupId?: string;
  skillGroupName?: string;
  instanceId?: string;
  skillGroupDescription?: string;
  static names(): { [key: string]: string } {
    return {
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      instanceId: 'InstanceId',
      skillGroupDescription: 'SkillGroupDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupId: 'string',
      skillGroupName: 'string',
      instanceId: 'string',
      skillGroupDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByExtensionResponseBodyUserSkillLevels extends $tea.Model {
  skill?: GetUserByExtensionResponseBodyUserSkillLevelsSkill;
  skillLevelId?: string;
  level?: number;
  static names(): { [key: string]: string } {
    return {
      skill: 'Skill',
      skillLevelId: 'SkillLevelId',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skill: GetUserByExtensionResponseBodyUserSkillLevelsSkill,
      skillLevelId: 'string',
      level: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByExtensionResponseBodyUserRoles extends $tea.Model {
  roleDescription?: string;
  instanceId?: string;
  roleName?: string;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      roleDescription: 'RoleDescription',
      instanceId: 'InstanceId',
      roleName: 'RoleName',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleDescription: 'string',
      instanceId: 'string',
      roleName: 'string',
      roleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByExtensionResponseBodyUserDetail extends $tea.Model {
  displayName?: string;
  extension?: string;
  loginName?: string;
  email?: string;
  department?: string;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      extension: 'Extension',
      loginName: 'LoginName',
      email: 'Email',
      department: 'Department',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      extension: 'string',
      loginName: 'string',
      email: 'string',
      department: 'string',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByExtensionResponseBodyUser extends $tea.Model {
  skillLevels?: GetUserByExtensionResponseBodyUserSkillLevels[];
  userId?: string;
  roles?: GetUserByExtensionResponseBodyUserRoles[];
  instanceId?: string;
  ramId?: string;
  detail?: GetUserByExtensionResponseBodyUserDetail;
  static names(): { [key: string]: string } {
    return {
      skillLevels: 'SkillLevels',
      userId: 'UserId',
      roles: 'Roles',
      instanceId: 'InstanceId',
      ramId: 'RamId',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillLevels: { 'type': 'array', 'itemType': GetUserByExtensionResponseBodyUserSkillLevels },
      userId: 'string',
      roles: { 'type': 'array', 'itemType': GetUserByExtensionResponseBodyUserRoles },
      instanceId: 'string',
      ramId: 'string',
      detail: GetUserByExtensionResponseBodyUserDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentDevicesResponseBodyAgentDeviceListAgentDevice extends $tea.Model {
  loginTime?: number;
  clientPort?: string;
  remark?: string;
  browserVersion?: string;
  clientIp?: string;
  instanceId?: string;
  isLogin?: number;
  ramId?: number;
  static names(): { [key: string]: string } {
    return {
      loginTime: 'LoginTime',
      clientPort: 'ClientPort',
      remark: 'Remark',
      browserVersion: 'BrowserVersion',
      clientIp: 'ClientIp',
      instanceId: 'InstanceId',
      isLogin: 'IsLogin',
      ramId: 'RamId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginTime: 'number',
      clientPort: 'string',
      remark: 'string',
      browserVersion: 'string',
      clientIp: 'string',
      instanceId: 'string',
      isLogin: 'number',
      ramId: 'number',
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
  skillGroupName?: string;
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      skillGroupName: 'SkillGroupName',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupName: 'string',
      skillGroupId: 'string',
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
  eventTime?: number;
  loginName?: string;
  event?: string;
  instanceId?: string;
  ramId?: number;
  skillGroupIds?: ListAgentEventsResponseBodyAgentEventListAgentEventSkillGroupIds;
  static names(): { [key: string]: string } {
    return {
      eventTime: 'EventTime',
      loginName: 'LoginName',
      event: 'Event',
      instanceId: 'InstanceId',
      ramId: 'RamId',
      skillGroupIds: 'SkillGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventTime: 'number',
      loginName: 'string',
      event: 'string',
      instanceId: 'string',
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
  stateCode?: string;
  contactId?: string;
  state?: string;
  connectId?: string;
  stateTime?: number;
  instanceId?: string;
  ramId?: number;
  skillGroupIds?: string;
  counterParty?: string;
  static names(): { [key: string]: string } {
    return {
      stateCode: 'StateCode',
      contactId: 'ContactId',
      state: 'State',
      connectId: 'ConnectId',
      stateTime: 'StateTime',
      instanceId: 'InstanceId',
      ramId: 'RamId',
      skillGroupIds: 'SkillGroupIds',
      counterParty: 'CounterParty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stateCode: 'string',
      contactId: 'string',
      state: 'string',
      connectId: 'string',
      stateTime: 'number',
      instanceId: 'string',
      ramId: 'number',
      skillGroupIds: 'string',
      counterParty: 'string',
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
  loginName?: string;
  dn?: string;
  stateDuration?: string;
  state?: string;
  agentId?: string;
  agentName?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      loginName: 'LoginName',
      dn: 'Dn',
      stateDuration: 'StateDuration',
      state: 'State',
      agentId: 'AgentId',
      agentName: 'AgentName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginName: 'string',
      dn: 'string',
      stateDuration: 'string',
      state: 'string',
      agentId: 'string',
      agentName: 'string',
      instanceId: 'string',
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

export class ListAgentSummaryReportsResponseBodyPagedAgentSummaryReportListAgentSummaryReportOverall extends $tea.Model {
  totalLoggedInTime?: number;
  totalTalkTime?: number;
  occupancyRate?: number;
  lastLogOutTime?: string;
  totalWorkTime?: number;
  firstLogInTime?: string;
  maxWorkTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  averageReadyTime?: number;
  maxReadyTime?: number;
  oneTransferCalls?: number;
  maxTalkTime?: number;
  totalReadyTime?: number;
  totalBreakTime?: number;
  totalCalls?: number;
  static names(): { [key: string]: string } {
    return {
      totalLoggedInTime: 'TotalLoggedInTime',
      totalTalkTime: 'TotalTalkTime',
      occupancyRate: 'OccupancyRate',
      lastLogOutTime: 'LastLogOutTime',
      totalWorkTime: 'TotalWorkTime',
      firstLogInTime: 'FirstLogInTime',
      maxWorkTime: 'MaxWorkTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      averageReadyTime: 'AverageReadyTime',
      maxReadyTime: 'MaxReadyTime',
      oneTransferCalls: 'OneTransferCalls',
      maxTalkTime: 'MaxTalkTime',
      totalReadyTime: 'TotalReadyTime',
      totalBreakTime: 'TotalBreakTime',
      totalCalls: 'TotalCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalLoggedInTime: 'number',
      totalTalkTime: 'number',
      occupancyRate: 'number',
      lastLogOutTime: 'string',
      totalWorkTime: 'number',
      firstLogInTime: 'string',
      maxWorkTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      averageReadyTime: 'number',
      maxReadyTime: 'number',
      oneTransferCalls: 'number',
      maxTalkTime: 'number',
      totalReadyTime: 'number',
      totalBreakTime: 'number',
      totalCalls: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsResponseBodyPagedAgentSummaryReportListAgentSummaryReportInbound extends $tea.Model {
  totalTalkTime?: number;
  averageRingTime?: number;
  callsOffered?: number;
  callsHandled?: number;
  serviceLevel20?: number;
  totalWorkTime?: number;
  maxWorkTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  handleRate?: number;
  satisfactionSurveysResponded?: number;
  totalRingTime?: number;
  maxTalkTime?: number;
  maxRingTime?: number;
  static names(): { [key: string]: string } {
    return {
      totalTalkTime: 'TotalTalkTime',
      averageRingTime: 'AverageRingTime',
      callsOffered: 'CallsOffered',
      callsHandled: 'CallsHandled',
      serviceLevel20: 'ServiceLevel20',
      totalWorkTime: 'TotalWorkTime',
      maxWorkTime: 'MaxWorkTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      handleRate: 'HandleRate',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalRingTime: 'TotalRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxRingTime: 'MaxRingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalTalkTime: 'number',
      averageRingTime: 'number',
      callsOffered: 'number',
      callsHandled: 'number',
      serviceLevel20: 'number',
      totalWorkTime: 'number',
      maxWorkTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      handleRate: 'number',
      satisfactionSurveysResponded: 'number',
      totalRingTime: 'number',
      maxTalkTime: 'number',
      maxRingTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsResponseBodyPagedAgentSummaryReportListAgentSummaryReportOutbound extends $tea.Model {
  totalTalkTime?: number;
  maxDialingTime?: number;
  callsDialed?: number;
  callsAnswered?: number;
  totalWorkTime?: number;
  answerRate?: number;
  maxWorkTime?: string;
  totalDialingTime?: number;
  averageWorkTime?: number;
  averageTalkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  maxTalkTime?: number;
  averageDialingTime?: number;
  static names(): { [key: string]: string } {
    return {
      totalTalkTime: 'TotalTalkTime',
      maxDialingTime: 'MaxDialingTime',
      callsDialed: 'CallsDialed',
      callsAnswered: 'CallsAnswered',
      totalWorkTime: 'TotalWorkTime',
      answerRate: 'AnswerRate',
      maxWorkTime: 'MaxWorkTime',
      totalDialingTime: 'TotalDialingTime',
      averageWorkTime: 'AverageWorkTime',
      averageTalkTime: 'AverageTalkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      maxTalkTime: 'MaxTalkTime',
      averageDialingTime: 'AverageDialingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalTalkTime: 'number',
      maxDialingTime: 'number',
      callsDialed: 'number',
      callsAnswered: 'number',
      totalWorkTime: 'number',
      answerRate: 'number',
      maxWorkTime: 'string',
      totalDialingTime: 'number',
      averageWorkTime: 'number',
      averageTalkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      maxTalkTime: 'number',
      averageDialingTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsResponseBodyPagedAgentSummaryReportListAgentSummaryReport extends $tea.Model {
  overall?: ListAgentSummaryReportsResponseBodyPagedAgentSummaryReportListAgentSummaryReportOverall;
  loginName?: string;
  agentId?: string;
  inbound?: ListAgentSummaryReportsResponseBodyPagedAgentSummaryReportListAgentSummaryReportInbound;
  outbound?: ListAgentSummaryReportsResponseBodyPagedAgentSummaryReportListAgentSummaryReportOutbound;
  agentName?: string;
  instanceId?: string;
  skillGroupNames?: string;
  skillGroupIds?: string;
  static names(): { [key: string]: string } {
    return {
      overall: 'Overall',
      loginName: 'LoginName',
      agentId: 'AgentId',
      inbound: 'Inbound',
      outbound: 'Outbound',
      agentName: 'AgentName',
      instanceId: 'InstanceId',
      skillGroupNames: 'SkillGroupNames',
      skillGroupIds: 'SkillGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overall: ListAgentSummaryReportsResponseBodyPagedAgentSummaryReportListAgentSummaryReportOverall,
      loginName: 'string',
      agentId: 'string',
      inbound: ListAgentSummaryReportsResponseBodyPagedAgentSummaryReportListAgentSummaryReportInbound,
      outbound: ListAgentSummaryReportsResponseBodyPagedAgentSummaryReportListAgentSummaryReportOutbound,
      agentName: 'string',
      instanceId: 'string',
      skillGroupNames: 'string',
      skillGroupIds: 'string',
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

export class ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReportListAgentTimeIntervalReportIntervalListAgentSummaryReportOverall extends $tea.Model {
  totalLoggedInTime?: number;
  totalTalkTime?: number;
  occupancyRate?: number;
  lastLogOutTime?: string;
  totalWorkTime?: number;
  firstLogInTime?: string;
  maxWorkTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  averageReadyTime?: number;
  maxReadyTime?: number;
  oneTransferCalls?: number;
  maxTalkTime?: number;
  totalReadyTime?: number;
  totalBreakTime?: number;
  totalCalls?: number;
  static names(): { [key: string]: string } {
    return {
      totalLoggedInTime: 'TotalLoggedInTime',
      totalTalkTime: 'TotalTalkTime',
      occupancyRate: 'OccupancyRate',
      lastLogOutTime: 'LastLogOutTime',
      totalWorkTime: 'TotalWorkTime',
      firstLogInTime: 'FirstLogInTime',
      maxWorkTime: 'MaxWorkTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      averageReadyTime: 'AverageReadyTime',
      maxReadyTime: 'MaxReadyTime',
      oneTransferCalls: 'OneTransferCalls',
      maxTalkTime: 'MaxTalkTime',
      totalReadyTime: 'TotalReadyTime',
      totalBreakTime: 'TotalBreakTime',
      totalCalls: 'TotalCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalLoggedInTime: 'number',
      totalTalkTime: 'number',
      occupancyRate: 'number',
      lastLogOutTime: 'string',
      totalWorkTime: 'number',
      firstLogInTime: 'string',
      maxWorkTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      averageReadyTime: 'number',
      maxReadyTime: 'number',
      oneTransferCalls: 'number',
      maxTalkTime: 'number',
      totalReadyTime: 'number',
      totalBreakTime: 'number',
      totalCalls: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReportListAgentTimeIntervalReportIntervalListAgentSummaryReportInbound extends $tea.Model {
  totalTalkTime?: number;
  averageRingTime?: number;
  callsOffered?: number;
  callsHandled?: number;
  serviceLevel20?: number;
  totalWorkTime?: number;
  maxWorkTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  handleRate?: number;
  satisfactionSurveysResponded?: number;
  totalRingTime?: number;
  maxTalkTime?: number;
  maxRingTime?: number;
  static names(): { [key: string]: string } {
    return {
      totalTalkTime: 'TotalTalkTime',
      averageRingTime: 'AverageRingTime',
      callsOffered: 'CallsOffered',
      callsHandled: 'CallsHandled',
      serviceLevel20: 'ServiceLevel20',
      totalWorkTime: 'TotalWorkTime',
      maxWorkTime: 'MaxWorkTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      handleRate: 'HandleRate',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalRingTime: 'TotalRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxRingTime: 'MaxRingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalTalkTime: 'number',
      averageRingTime: 'number',
      callsOffered: 'number',
      callsHandled: 'number',
      serviceLevel20: 'number',
      totalWorkTime: 'number',
      maxWorkTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      handleRate: 'number',
      satisfactionSurveysResponded: 'number',
      totalRingTime: 'number',
      maxTalkTime: 'number',
      maxRingTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReportListAgentTimeIntervalReportIntervalListAgentSummaryReportOutbound extends $tea.Model {
  totalTalkTime?: number;
  maxDialingTime?: number;
  callsDialed?: number;
  callsAnswered?: number;
  totalWorkTime?: number;
  answerRate?: number;
  maxWorkTime?: number;
  totalDialingTime?: number;
  averageWorkTime?: number;
  averageTalkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  maxTalkTime?: number;
  averageDialingTime?: number;
  static names(): { [key: string]: string } {
    return {
      totalTalkTime: 'TotalTalkTime',
      maxDialingTime: 'MaxDialingTime',
      callsDialed: 'CallsDialed',
      callsAnswered: 'CallsAnswered',
      totalWorkTime: 'TotalWorkTime',
      answerRate: 'AnswerRate',
      maxWorkTime: 'MaxWorkTime',
      totalDialingTime: 'TotalDialingTime',
      averageWorkTime: 'AverageWorkTime',
      averageTalkTime: 'AverageTalkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      maxTalkTime: 'MaxTalkTime',
      averageDialingTime: 'AverageDialingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalTalkTime: 'number',
      maxDialingTime: 'number',
      callsDialed: 'number',
      callsAnswered: 'number',
      totalWorkTime: 'number',
      answerRate: 'number',
      maxWorkTime: 'number',
      totalDialingTime: 'number',
      averageWorkTime: 'number',
      averageTalkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      maxTalkTime: 'number',
      averageDialingTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReportListAgentTimeIntervalReportIntervalListAgentSummaryReport extends $tea.Model {
  overall?: ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReportListAgentTimeIntervalReportIntervalListAgentSummaryReportOverall;
  loginName?: string;
  agentId?: string;
  inbound?: ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReportListAgentTimeIntervalReportIntervalListAgentSummaryReportInbound;
  outbound?: ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReportListAgentTimeIntervalReportIntervalListAgentSummaryReportOutbound;
  agentName?: string;
  skillGroupNames?: string;
  timestamp?: string;
  instanceId?: string;
  skillGroupIds?: string;
  static names(): { [key: string]: string } {
    return {
      overall: 'Overall',
      loginName: 'LoginName',
      agentId: 'AgentId',
      inbound: 'Inbound',
      outbound: 'Outbound',
      agentName: 'AgentName',
      skillGroupNames: 'SkillGroupNames',
      timestamp: 'Timestamp',
      instanceId: 'InstanceId',
      skillGroupIds: 'SkillGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overall: ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReportListAgentTimeIntervalReportIntervalListAgentSummaryReportOverall,
      loginName: 'string',
      agentId: 'string',
      inbound: ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReportListAgentTimeIntervalReportIntervalListAgentSummaryReportInbound,
      outbound: ListAgentSummaryReportsByIntervalResponseBodyPagedAgentSummaryReportListAgentTimeIntervalReportIntervalListAgentSummaryReportOutbound,
      agentName: 'string',
      skillGroupNames: 'string',
      timestamp: 'string',
      instanceId: 'string',
      skillGroupIds: 'string',
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

export class ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListAgentSummaryReportOverall extends $tea.Model {
  totalLoggedInTime?: number;
  totalTalkTime?: number;
  occupancyRate?: number;
  totalWorkTime?: number;
  maxWorkTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  maxReadyTime?: number;
  averageReadyTime?: number;
  oneTransferCalls?: number;
  maxTalkTime?: number;
  totalReadyTime?: number;
  totalBreakTime?: number;
  totalCalls?: number;
  static names(): { [key: string]: string } {
    return {
      totalLoggedInTime: 'TotalLoggedInTime',
      totalTalkTime: 'TotalTalkTime',
      occupancyRate: 'OccupancyRate',
      totalWorkTime: 'TotalWorkTime',
      maxWorkTime: 'MaxWorkTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      maxReadyTime: 'MaxReadyTime',
      averageReadyTime: 'AverageReadyTime',
      oneTransferCalls: 'OneTransferCalls',
      maxTalkTime: 'MaxTalkTime',
      totalReadyTime: 'TotalReadyTime',
      totalBreakTime: 'TotalBreakTime',
      totalCalls: 'TotalCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalLoggedInTime: 'number',
      totalTalkTime: 'number',
      occupancyRate: 'number',
      totalWorkTime: 'number',
      maxWorkTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      maxReadyTime: 'number',
      averageReadyTime: 'number',
      oneTransferCalls: 'number',
      maxTalkTime: 'number',
      totalReadyTime: 'number',
      totalBreakTime: 'number',
      totalCalls: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListAgentSummaryReportInbound extends $tea.Model {
  totalTalkTime?: number;
  averageRingTime?: number;
  callsOffered?: number;
  callsHandled?: number;
  serviceLevel20?: number;
  totalWorkTime?: number;
  maxWorkTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  handleRate?: number;
  satisfactionSurveysResponded?: number;
  totalRingTime?: number;
  maxTalkTime?: number;
  maxRingTime?: number;
  static names(): { [key: string]: string } {
    return {
      totalTalkTime: 'TotalTalkTime',
      averageRingTime: 'AverageRingTime',
      callsOffered: 'CallsOffered',
      callsHandled: 'CallsHandled',
      serviceLevel20: 'ServiceLevel20',
      totalWorkTime: 'TotalWorkTime',
      maxWorkTime: 'MaxWorkTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      handleRate: 'HandleRate',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalRingTime: 'TotalRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxRingTime: 'MaxRingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalTalkTime: 'number',
      averageRingTime: 'number',
      callsOffered: 'number',
      callsHandled: 'number',
      serviceLevel20: 'number',
      totalWorkTime: 'number',
      maxWorkTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      handleRate: 'number',
      satisfactionSurveysResponded: 'number',
      totalRingTime: 'number',
      maxTalkTime: 'number',
      maxRingTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListAgentSummaryReportOutbound extends $tea.Model {
  totalTalkTime?: number;
  maxDialingTime?: number;
  callsDialed?: number;
  callsAnswered?: number;
  totalWorkTime?: number;
  answerRate?: number;
  maxWorkTime?: string;
  totalDialingTime?: number;
  averageWorkTime?: number;
  averageTalkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  maxTalkTime?: number;
  averageDialingTime?: number;
  static names(): { [key: string]: string } {
    return {
      totalTalkTime: 'TotalTalkTime',
      maxDialingTime: 'MaxDialingTime',
      callsDialed: 'CallsDialed',
      callsAnswered: 'CallsAnswered',
      totalWorkTime: 'TotalWorkTime',
      answerRate: 'AnswerRate',
      maxWorkTime: 'MaxWorkTime',
      totalDialingTime: 'TotalDialingTime',
      averageWorkTime: 'AverageWorkTime',
      averageTalkTime: 'AverageTalkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      maxTalkTime: 'MaxTalkTime',
      averageDialingTime: 'AverageDialingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalTalkTime: 'number',
      maxDialingTime: 'number',
      callsDialed: 'number',
      callsAnswered: 'number',
      totalWorkTime: 'number',
      answerRate: 'number',
      maxWorkTime: 'string',
      totalDialingTime: 'number',
      averageWorkTime: 'number',
      averageTalkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      maxTalkTime: 'number',
      averageDialingTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListAgentSummaryReport extends $tea.Model {
  overall?: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListAgentSummaryReportOverall;
  loginName?: string;
  agentId?: string;
  inbound?: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListAgentSummaryReportInbound;
  outbound?: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListAgentSummaryReportOutbound;
  agentName?: string;
  skillGroupNames?: string;
  timestamp?: string;
  instanceId?: string;
  skillGroupIds?: string;
  static names(): { [key: string]: string } {
    return {
      overall: 'Overall',
      loginName: 'LoginName',
      agentId: 'AgentId',
      inbound: 'Inbound',
      outbound: 'Outbound',
      agentName: 'AgentName',
      skillGroupNames: 'SkillGroupNames',
      timestamp: 'Timestamp',
      instanceId: 'InstanceId',
      skillGroupIds: 'SkillGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overall: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListAgentSummaryReportOverall,
      loginName: 'string',
      agentId: 'string',
      inbound: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListAgentSummaryReportInbound,
      outbound: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListAgentSummaryReportOutbound,
      agentName: 'string',
      skillGroupNames: 'string',
      timestamp: 'string',
      instanceId: 'string',
      skillGroupIds: 'string',
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
  value?: string;
  percentage?: number;
  count?: number;
  row?: ListBasicStatisticsReportSubItemsResponseBodySubItemsListRow[];
  static names(): { [key: string]: string } {
    return {
      basicStatisticsReportSubItemName: 'BasicStatisticsReportSubItemName',
      value: 'Value',
      percentage: 'Percentage',
      count: 'Count',
      row: 'Row',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicStatisticsReportSubItemName: 'string',
      value: 'string',
      percentage: 'number',
      count: 'number',
      row: { 'type': 'array', 'itemType': ListBasicStatisticsReportSubItemsResponseBodySubItemsListRow },
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

export class ListCallDetailRecordsResponseBodyCallDetailRecordsListCallDetailRecordRecordingsRecording extends $tea.Model {
  startTime?: number;
  contactId?: string;
  qualityCheckTaskId?: string;
  agentId?: string;
  fileDescription?: string;
  duration?: number;
  agentName?: string;
  fileName?: string;
  qualityCheckTid?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      contactId: 'ContactId',
      qualityCheckTaskId: 'QualityCheckTaskId',
      agentId: 'AgentId',
      fileDescription: 'FileDescription',
      duration: 'Duration',
      agentName: 'AgentName',
      fileName: 'FileName',
      qualityCheckTid: 'QualityCheckTid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      contactId: 'string',
      qualityCheckTaskId: 'string',
      agentId: 'string',
      fileDescription: 'string',
      duration: 'number',
      agentName: 'string',
      fileName: 'string',
      qualityCheckTid: 'string',
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

export class ListCallDetailRecordsResponseBodyCallDetailRecordsListCallDetailRecordAgentsCallDetailAgent extends $tea.Model {
  satisfaction?: string;
  agentId?: string;
  feedback?: string;
  static names(): { [key: string]: string } {
    return {
      satisfaction: 'Satisfaction',
      agentId: 'AgentId',
      feedback: 'Feedback',
    };
  }

  static types(): { [key: string]: any } {
    return {
      satisfaction: 'string',
      agentId: 'string',
      feedback: 'string',
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

export class ListCallDetailRecordsResponseBodyCallDetailRecordsListCallDetailRecord extends $tea.Model {
  contactDisposition?: string;
  contactType?: string;
  instanceId?: string;
  skillGroupIdList?: string;
  recordings?: ListCallDetailRecordsResponseBodyCallDetailRecordsListCallDetailRecordRecordings;
  calledNumber?: string;
  agentNames?: string;
  satisfaction?: number;
  startTime?: number;
  agents?: ListCallDetailRecordsResponseBodyCallDetailRecordsListCallDetailRecordAgents;
  satisfactionDesc?: string;
  contactId?: string;
  callingNumber?: string;
  duration?: number;
  skillGroupNames?: string;
  feedback?: string;
  static names(): { [key: string]: string } {
    return {
      contactDisposition: 'ContactDisposition',
      contactType: 'ContactType',
      instanceId: 'InstanceId',
      skillGroupIdList: 'SkillGroupIdList',
      recordings: 'Recordings',
      calledNumber: 'CalledNumber',
      agentNames: 'AgentNames',
      satisfaction: 'Satisfaction',
      startTime: 'StartTime',
      agents: 'Agents',
      satisfactionDesc: 'SatisfactionDesc',
      contactId: 'ContactId',
      callingNumber: 'CallingNumber',
      duration: 'Duration',
      skillGroupNames: 'SkillGroupNames',
      feedback: 'Feedback',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactDisposition: 'string',
      contactType: 'string',
      instanceId: 'string',
      skillGroupIdList: 'string',
      recordings: ListCallDetailRecordsResponseBodyCallDetailRecordsListCallDetailRecordRecordings,
      calledNumber: 'string',
      agentNames: 'string',
      satisfaction: 'number',
      startTime: 'number',
      agents: ListCallDetailRecordsResponseBodyCallDetailRecordsListCallDetailRecordAgents,
      satisfactionDesc: 'string',
      contactId: 'string',
      callingNumber: 'string',
      duration: 'number',
      skillGroupNames: 'string',
      feedback: 'string',
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
  hangUper?: string;
  eventType?: string;
  helper?: string;
  skillGroup?: string;
  satisfactionalResearch?: string;
  static names(): { [key: string]: string } {
    return {
      hangUper: 'HangUper',
      eventType: 'EventType',
      helper: 'Helper',
      skillGroup: 'SkillGroup',
      satisfactionalResearch: 'SatisfactionalResearch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hangUper: 'string',
      eventType: 'string',
      helper: 'string',
      skillGroup: 'string',
      satisfactionalResearch: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallEventDetailByContactIdResponseBodyDataEventsCallEventDetail extends $tea.Model {
  status?: string;
  callMode?: string;
  detailData?: ListCallEventDetailByContactIdResponseBodyDataEventsCallEventDetailDetailData;
  event?: string;
  timeStamp?: string;
  agentName?: string;
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      callMode: 'CallMode',
      detailData: 'DetailData',
      event: 'Event',
      timeStamp: 'TimeStamp',
      agentName: 'AgentName',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      callMode: 'string',
      detailData: ListCallEventDetailByContactIdResponseBodyDataEventsCallEventDetailDetailData,
      event: 'string',
      timeStamp: 'string',
      agentName: 'string',
      duration: 'number',
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
  startTime?: string;
  releaseReason?: string;
  callType?: string;
  releaseAgent?: string;
  caller?: string;
  callee?: string;
  events?: ListCallEventDetailByContactIdResponseBodyDataEvents;
  privacyNumber?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      releaseReason: 'ReleaseReason',
      callType: 'CallType',
      releaseAgent: 'ReleaseAgent',
      caller: 'Caller',
      callee: 'Callee',
      events: 'Events',
      privacyNumber: 'PrivacyNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      releaseReason: 'string',
      callType: 'string',
      releaseAgent: 'string',
      caller: 'string',
      callee: 'string',
      events: ListCallEventDetailByContactIdResponseBodyDataEvents,
      privacyNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallMeasureSummaryReportsResponseBodyCallMeasureSummaryReportListCallMeasureSummaryReport extends $tea.Model {
  day?: string;
  year?: string;
  inboundDurationByMinute?: number;
  outboundCount?: number;
  outboundDurationByMinute?: number;
  inboundCount?: number;
  month?: string;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      year: 'Year',
      inboundDurationByMinute: 'InboundDurationByMinute',
      outboundCount: 'OutboundCount',
      outboundDurationByMinute: 'OutboundDurationByMinute',
      inboundCount: 'InboundCount',
      month: 'Month',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'string',
      year: 'string',
      inboundDurationByMinute: 'number',
      outboundCount: 'number',
      outboundDurationByMinute: 'number',
      inboundCount: 'number',
      month: 'string',
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
  value?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      name: 'string',
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
  testOnly?: boolean;
  trunks?: number;
  remainingTime?: number;
  number?: string;
  instanceId?: string;
  usage?: string;
  allowOutbound?: boolean;
  phoneNumberDescription?: string;
  phoneNumberId?: string;
  static names(): { [key: string]: string } {
    return {
      testOnly: 'TestOnly',
      trunks: 'Trunks',
      remainingTime: 'RemainingTime',
      number: 'Number',
      instanceId: 'InstanceId',
      usage: 'Usage',
      allowOutbound: 'AllowOutbound',
      phoneNumberDescription: 'PhoneNumberDescription',
      phoneNumberId: 'PhoneNumberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      testOnly: 'boolean',
      trunks: 'number',
      remainingTime: 'number',
      number: 'string',
      instanceId: 'string',
      usage: 'string',
      allowOutbound: 'boolean',
      phoneNumberDescription: 'string',
      phoneNumberId: 'string',
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
  status?: string;
  lastModified?: string;
  lockedBy?: string;
  version?: string;
  contactFlowVersionId?: string;
  contactFlowVersionDescription?: string;
  lastModifiedBy?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      lastModified: 'LastModified',
      lockedBy: 'LockedBy',
      version: 'Version',
      contactFlowVersionId: 'ContactFlowVersionId',
      contactFlowVersionDescription: 'ContactFlowVersionDescription',
      lastModifiedBy: 'LastModifiedBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      lastModified: 'string',
      lockedBy: 'string',
      version: 'string',
      contactFlowVersionId: 'string',
      contactFlowVersionDescription: 'string',
      lastModifiedBy: 'string',
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
  contactFlowDescription?: string;
  type?: string;
  phoneNumbers?: ListContactFlowsResponseBodyContactFlowsContactFlowPhoneNumbers;
  contactFlowName?: string;
  versions?: ListContactFlowsResponseBodyContactFlowsContactFlowVersions;
  instanceId?: string;
  contactFlowId?: string;
  appliedVersion?: string;
  static names(): { [key: string]: string } {
    return {
      contactFlowDescription: 'ContactFlowDescription',
      type: 'Type',
      phoneNumbers: 'PhoneNumbers',
      contactFlowName: 'ContactFlowName',
      versions: 'Versions',
      instanceId: 'InstanceId',
      contactFlowId: 'ContactFlowId',
      appliedVersion: 'AppliedVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowDescription: 'string',
      type: 'string',
      phoneNumbers: ListContactFlowsResponseBodyContactFlowsContactFlowPhoneNumbers,
      contactFlowName: 'string',
      versions: ListContactFlowsResponseBodyContactFlowsContactFlowVersions,
      instanceId: 'string',
      contactFlowId: 'string',
      appliedVersion: 'string',
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

export class ListInstancesOfUserResponseBodyInstancesCallCenterInstancePhoneNumbersPhoneNumber extends $tea.Model {
  testOnly?: boolean;
  trunks?: number;
  remainingTime?: number;
  number?: string;
  instanceId?: string;
  usage?: string;
  allowOutbound?: boolean;
  phoneNumberDescription?: string;
  phoneNumberId?: string;
  static names(): { [key: string]: string } {
    return {
      testOnly: 'TestOnly',
      trunks: 'Trunks',
      remainingTime: 'RemainingTime',
      number: 'Number',
      instanceId: 'InstanceId',
      usage: 'Usage',
      allowOutbound: 'AllowOutbound',
      phoneNumberDescription: 'PhoneNumberDescription',
      phoneNumberId: 'PhoneNumberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      testOnly: 'boolean',
      trunks: 'number',
      remainingTime: 'number',
      number: 'string',
      instanceId: 'string',
      usage: 'string',
      allowOutbound: 'boolean',
      phoneNumberDescription: 'string',
      phoneNumberId: 'string',
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

export class ListInstancesOfUserResponseBodyInstancesCallCenterInstanceAdminUserDetail extends $tea.Model {
  displayName?: string;
  email?: string;
  loginName?: string;
  department?: string;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      email: 'Email',
      loginName: 'LoginName',
      department: 'Department',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      email: 'string',
      loginName: 'string',
      department: 'string',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesOfUserResponseBodyInstancesCallCenterInstanceAdminUser extends $tea.Model {
  userId?: string;
  instanceId?: string;
  ramId?: string;
  detail?: ListInstancesOfUserResponseBodyInstancesCallCenterInstanceAdminUserDetail;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      instanceId: 'InstanceId',
      ramId: 'RamId',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      instanceId: 'string',
      ramId: 'string',
      detail: ListInstancesOfUserResponseBodyInstancesCallCenterInstanceAdminUserDetail,
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

export class ListInstancesOfUserResponseBodyInstancesCallCenterInstance extends $tea.Model {
  status?: string;
  owner?: string;
  storageMaxSize?: number;
  storageMaxDays?: number;
  maxOnlineAgents?: number;
  instanceId?: string;
  domainName?: string;
  instanceDescription?: string;
  phoneNumbers?: ListInstancesOfUserResponseBodyInstancesCallCenterInstancePhoneNumbers;
  consoleUrl?: string;
  storageBucket?: string;
  instanceName?: string;
  createdTime?: number;
  directoryId?: string;
  admin?: ListInstancesOfUserResponseBodyInstancesCallCenterInstanceAdmin;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      owner: 'Owner',
      storageMaxSize: 'StorageMaxSize',
      storageMaxDays: 'StorageMaxDays',
      maxOnlineAgents: 'MaxOnlineAgents',
      instanceId: 'InstanceId',
      domainName: 'DomainName',
      instanceDescription: 'InstanceDescription',
      phoneNumbers: 'PhoneNumbers',
      consoleUrl: 'ConsoleUrl',
      storageBucket: 'StorageBucket',
      instanceName: 'InstanceName',
      createdTime: 'CreatedTime',
      directoryId: 'DirectoryId',
      admin: 'Admin',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      owner: 'string',
      storageMaxSize: 'number',
      storageMaxDays: 'number',
      maxOnlineAgents: 'number',
      instanceId: 'string',
      domainName: 'string',
      instanceDescription: 'string',
      phoneNumbers: ListInstancesOfUserResponseBodyInstancesCallCenterInstancePhoneNumbers,
      consoleUrl: 'string',
      storageBucket: 'string',
      instanceName: 'string',
      createdTime: 'number',
      directoryId: 'string',
      admin: ListInstancesOfUserResponseBodyInstancesCallCenterInstanceAdmin,
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
  status?: string;
  deviceID?: string;
  inputData?: string;
  flowName?: string;
  stopTime?: number;
  calledNumber?: string;
  startTime?: number;
  description?: string;
  nodeType?: string;
  contactId?: string;
  nodeName?: string;
  callingNumber?: string;
  outputData?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      deviceID: 'DeviceID',
      inputData: 'InputData',
      flowName: 'FlowName',
      stopTime: 'StopTime',
      calledNumber: 'CalledNumber',
      startTime: 'StartTime',
      description: 'Description',
      nodeType: 'NodeType',
      contactId: 'ContactId',
      nodeName: 'NodeName',
      callingNumber: 'CallingNumber',
      outputData: 'OutputData',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      deviceID: 'string',
      inputData: 'string',
      flowName: 'string',
      stopTime: 'number',
      calledNumber: 'string',
      startTime: 'number',
      description: 'string',
      nodeType: 'string',
      contactId: 'string',
      nodeName: 'string',
      callingNumber: 'string',
      outputData: 'string',
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

export class ListJobGroupsResponseBodyJobGroupsListStrategyWorkingTime extends $tea.Model {
  endTime?: string;
  beginTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      beginTime: 'BeginTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      beginTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobGroupsResponseBodyJobGroupsListStrategy extends $tea.Model {
  type?: string;
  maxAttemptsPerDay?: number;
  workingTime?: ListJobGroupsResponseBodyJobGroupsListStrategyWorkingTime[];
  followUpStrategy?: string;
  endTime?: number;
  customized?: string;
  startTime?: number;
  isTemplate?: boolean;
  repeatDays?: string[];
  routingStrategy?: string;
  description?: string;
  minAttemptInterval?: number;
  repeatBy?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      maxAttemptsPerDay: 'MaxAttemptsPerDay',
      workingTime: 'WorkingTime',
      followUpStrategy: 'FollowUpStrategy',
      endTime: 'EndTime',
      customized: 'Customized',
      startTime: 'StartTime',
      isTemplate: 'IsTemplate',
      repeatDays: 'RepeatDays',
      routingStrategy: 'RoutingStrategy',
      description: 'Description',
      minAttemptInterval: 'MinAttemptInterval',
      repeatBy: 'RepeatBy',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      maxAttemptsPerDay: 'number',
      workingTime: { 'type': 'array', 'itemType': ListJobGroupsResponseBodyJobGroupsListStrategyWorkingTime },
      followUpStrategy: 'string',
      endTime: 'number',
      customized: 'string',
      startTime: 'number',
      isTemplate: 'boolean',
      repeatDays: { 'type': 'array', 'itemType': 'string' },
      routingStrategy: 'string',
      description: 'string',
      minAttemptInterval: 'number',
      repeatBy: 'string',
      name: 'string',
      id: 'string',
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
  status?: string;
  totalNotAnswered?: number;
  startTime?: number;
  categories?: ListJobGroupsResponseBodyJobGroupsListProgressCategories[];
  totalJobs?: number;
  totalCompleted?: number;
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      totalNotAnswered: 'TotalNotAnswered',
      startTime: 'StartTime',
      categories: 'Categories',
      totalJobs: 'TotalJobs',
      totalCompleted: 'TotalCompleted',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      totalNotAnswered: 'number',
      startTime: 'number',
      categories: { 'type': 'array', 'itemType': ListJobGroupsResponseBodyJobGroupsListProgressCategories },
      totalJobs: 'number',
      totalCompleted: 'number',
      duration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobGroupsResponseBodyJobGroupsList extends $tea.Model {
  scenarioId?: string;
  creationTime?: number;
  strategy?: ListJobGroupsResponseBodyJobGroupsListStrategy;
  callingNumbers?: string[];
  progress?: ListJobGroupsResponseBodyJobGroupsListProgress;
  description?: string;
  jobFilePath?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      scenarioId: 'ScenarioId',
      creationTime: 'CreationTime',
      strategy: 'Strategy',
      callingNumbers: 'CallingNumbers',
      progress: 'Progress',
      description: 'Description',
      jobFilePath: 'JobFilePath',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scenarioId: 'string',
      creationTime: 'number',
      strategy: ListJobGroupsResponseBodyJobGroupsListStrategy,
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      progress: ListJobGroupsResponseBodyJobGroupsListProgress,
      description: 'string',
      jobFilePath: 'string',
      name: 'string',
      id: 'string',
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

export class ListJobsByGroupResponseBodyJobsListSummary extends $tea.Model {
  summaryName?: string;
  groupId?: string;
  jobId?: string;
  category?: string;
  content?: string;
  summaryId?: string;
  taskId?: string;
  conversationDetailId?: string;
  static names(): { [key: string]: string } {
    return {
      summaryName: 'SummaryName',
      groupId: 'GroupId',
      jobId: 'JobId',
      category: 'Category',
      content: 'Content',
      summaryId: 'SummaryId',
      taskId: 'TaskId',
      conversationDetailId: 'ConversationDetailId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summaryName: 'string',
      groupId: 'string',
      jobId: 'string',
      category: 'string',
      content: 'string',
      summaryId: 'string',
      taskId: 'string',
      conversationDetailId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsByGroupResponseBodyJobsListContacts extends $tea.Model {
  phoneNumber?: string;
  contactId?: string;
  state?: string;
  jobId?: string;
  honorific?: string;
  contactName?: string;
  role?: string;
  referenceId?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
      contactId: 'ContactId',
      state: 'State',
      jobId: 'JobId',
      honorific: 'Honorific',
      contactName: 'ContactName',
      role: 'Role',
      referenceId: 'ReferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: 'string',
      contactId: 'string',
      state: 'string',
      jobId: 'string',
      honorific: 'string',
      contactName: 'string',
      role: 'string',
      referenceId: 'string',
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

export class ListJobsByGroupResponseBodyJobsList extends $tea.Model {
  status?: string;
  callingNumbers?: string[];
  summary?: ListJobsByGroupResponseBodyJobsListSummary[];
  contacts?: ListJobsByGroupResponseBodyJobsListContacts[];
  priority?: number;
  failureReason?: string;
  systemPriority?: number;
  extras?: ListJobsByGroupResponseBodyJobsListExtras[];
  referenceId?: string;
  scenarioId?: string;
  strategyId?: string;
  groupId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      callingNumbers: 'CallingNumbers',
      summary: 'Summary',
      contacts: 'Contacts',
      priority: 'Priority',
      failureReason: 'FailureReason',
      systemPriority: 'SystemPriority',
      extras: 'Extras',
      referenceId: 'ReferenceId',
      scenarioId: 'ScenarioId',
      strategyId: 'StrategyId',
      groupId: 'GroupId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      summary: { 'type': 'array', 'itemType': ListJobsByGroupResponseBodyJobsListSummary },
      contacts: { 'type': 'array', 'itemType': ListJobsByGroupResponseBodyJobsListContacts },
      priority: 'number',
      failureReason: 'string',
      systemPriority: 'number',
      extras: { 'type': 'array', 'itemType': ListJobsByGroupResponseBodyJobsListExtras },
      referenceId: 'string',
      scenarioId: 'string',
      strategyId: 'string',
      groupId: 'string',
      jobId: 'string',
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

export class ListJobStatusResponseBodyJobsListContacts extends $tea.Model {
  phoneNumber?: string;
  contactId?: string;
  state?: string;
  jobId?: string;
  honorific?: string;
  contactName?: string;
  role?: string;
  referenceId?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
      contactId: 'ContactId',
      state: 'State',
      jobId: 'JobId',
      honorific: 'Honorific',
      contactName: 'ContactName',
      role: 'Role',
      referenceId: 'ReferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: 'string',
      contactId: 'string',
      state: 'string',
      jobId: 'string',
      honorific: 'string',
      contactName: 'string',
      role: 'string',
      referenceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobStatusResponseBodyJobsListSummary extends $tea.Model {
  summaryName?: string;
  groupId?: string;
  jobId?: string;
  category?: string;
  content?: string;
  summaryId?: string;
  taskId?: string;
  conversationDetailId?: string;
  static names(): { [key: string]: string } {
    return {
      summaryName: 'SummaryName',
      groupId: 'GroupId',
      jobId: 'JobId',
      category: 'Category',
      content: 'Content',
      summaryId: 'SummaryId',
      taskId: 'TaskId',
      conversationDetailId: 'ConversationDetailId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summaryName: 'string',
      groupId: 'string',
      jobId: 'string',
      category: 'string',
      content: 'string',
      summaryId: 'string',
      taskId: 'string',
      conversationDetailId: 'string',
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

export class ListJobStatusResponseBodyJobsListTasksContact extends $tea.Model {
  phoneNumber?: string;
  contactId?: string;
  state?: string;
  jobId?: string;
  honorific?: string;
  contactName?: string;
  role?: string;
  referenceId?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
      contactId: 'ContactId',
      state: 'State',
      jobId: 'JobId',
      honorific: 'Honorific',
      contactName: 'ContactName',
      role: 'Role',
      referenceId: 'ReferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: 'string',
      contactId: 'string',
      state: 'string',
      jobId: 'string',
      honorific: 'string',
      contactName: 'string',
      role: 'string',
      referenceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobStatusResponseBodyJobsListTasks extends $tea.Model {
  status?: string;
  planedTime?: number;
  chatbotId?: string;
  actualTime?: number;
  calledNumber?: string;
  scenarioId?: string;
  contact?: ListJobStatusResponseBodyJobsListTasksContact;
  jobId?: string;
  callId?: string;
  callingNumber?: string;
  brief?: string;
  duration?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      planedTime: 'PlanedTime',
      chatbotId: 'ChatbotId',
      actualTime: 'ActualTime',
      calledNumber: 'CalledNumber',
      scenarioId: 'ScenarioId',
      contact: 'Contact',
      jobId: 'JobId',
      callId: 'CallId',
      callingNumber: 'CallingNumber',
      brief: 'Brief',
      duration: 'Duration',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      planedTime: 'number',
      chatbotId: 'string',
      actualTime: 'number',
      calledNumber: 'string',
      scenarioId: 'string',
      contact: ListJobStatusResponseBodyJobsListTasksContact,
      jobId: 'string',
      callId: 'string',
      callingNumber: 'string',
      brief: 'string',
      duration: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobStatusResponseBodyJobsList extends $tea.Model {
  status?: string;
  callingNumbers?: string[];
  contacts?: ListJobStatusResponseBodyJobsListContacts[];
  summary?: ListJobStatusResponseBodyJobsListSummary[];
  priority?: number;
  failureReason?: string;
  extras?: ListJobStatusResponseBodyJobsListExtras[];
  referenceId?: string;
  scenarioId?: string;
  tasks?: ListJobStatusResponseBodyJobsListTasks[];
  strategyId?: string;
  groupId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      callingNumbers: 'CallingNumbers',
      contacts: 'Contacts',
      summary: 'Summary',
      priority: 'Priority',
      failureReason: 'FailureReason',
      extras: 'Extras',
      referenceId: 'ReferenceId',
      scenarioId: 'ScenarioId',
      tasks: 'Tasks',
      strategyId: 'StrategyId',
      groupId: 'GroupId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      contacts: { 'type': 'array', 'itemType': ListJobStatusResponseBodyJobsListContacts },
      summary: { 'type': 'array', 'itemType': ListJobStatusResponseBodyJobsListSummary },
      priority: 'number',
      failureReason: 'string',
      extras: { 'type': 'array', 'itemType': ListJobStatusResponseBodyJobsListExtras },
      referenceId: 'string',
      scenarioId: 'string',
      tasks: { 'type': 'array', 'itemType': ListJobStatusResponseBodyJobsListTasks },
      strategyId: 'string',
      groupId: 'string',
      jobId: 'string',
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

export class ListMediasResponseBodyMediasListMedia extends $tea.Model {
  status?: string;
  type?: string;
  filePath?: string;
  instance?: string;
  description?: string;
  fileName?: string;
  name?: string;
  content?: string;
  ossFileName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      filePath: 'FilePath',
      instance: 'Instance',
      description: 'Description',
      fileName: 'FileName',
      name: 'Name',
      content: 'Content',
      ossFileName: 'OssFileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      filePath: 'string',
      instance: 'string',
      description: 'string',
      fileName: 'string',
      name: 'string',
      content: 'string',
      ossFileName: 'string',
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
  type?: string;
  poolId?: string;
  subId?: string;
  phoneNumber?: string;
  poolName?: string;
  bizId?: string;
  regionNameCity?: string;
  extra?: string;
  telX?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      poolId: 'PoolId',
      subId: 'SubId',
      phoneNumber: 'PhoneNumber',
      poolName: 'PoolName',
      bizId: 'BizId',
      regionNameCity: 'RegionNameCity',
      extra: 'Extra',
      telX: 'TelX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      poolId: 'string',
      subId: 'string',
      phoneNumber: 'string',
      poolName: 'string',
      bizId: 'string',
      regionNameCity: 'string',
      extra: 'string',
      telX: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundPhoneNumberOfUserResponseBodyOutboundPhoneNumbersPhoneNumber extends $tea.Model {
  privateFlag?: boolean;
  testOnly?: boolean;
  remainingTime?: number;
  sipTelX?: string;
  city?: string;
  instanceId?: string;
  usage?: string;
  allowOutbound?: boolean;
  phoneNumberId?: string;
  trunks?: number;
  number?: string;
  phoneNumberDescription?: string;
  privacyNumber?: ListOutboundPhoneNumberOfUserResponseBodyOutboundPhoneNumbersPhoneNumberPrivacyNumber;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      privateFlag: 'PrivateFlag',
      testOnly: 'TestOnly',
      remainingTime: 'RemainingTime',
      sipTelX: 'SipTelX',
      city: 'City',
      instanceId: 'InstanceId',
      usage: 'Usage',
      allowOutbound: 'AllowOutbound',
      phoneNumberId: 'PhoneNumberId',
      trunks: 'Trunks',
      number: 'Number',
      phoneNumberDescription: 'PhoneNumberDescription',
      privacyNumber: 'PrivacyNumber',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateFlag: 'boolean',
      testOnly: 'boolean',
      remainingTime: 'number',
      sipTelX: 'string',
      city: 'string',
      instanceId: 'string',
      usage: 'string',
      allowOutbound: 'boolean',
      phoneNumberId: 'string',
      trunks: 'number',
      number: 'string',
      phoneNumberDescription: 'string',
      privacyNumber: ListOutboundPhoneNumberOfUserResponseBodyOutboundPhoneNumbersPhoneNumberPrivacyNumber,
      province: 'string',
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

export class ListPhoneNumbersResponseBodyPhoneNumbersPhoneNumberSkillGroupsSkillGroup extends $tea.Model {
  skillGroupName?: string;
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      skillGroupName: 'SkillGroupName',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupName: 'string',
      skillGroupId: 'string',
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

export class ListPhoneNumbersResponseBodyPhoneNumbersPhoneNumberContactFlow extends $tea.Model {
  type?: string;
  contactFlowDescription?: string;
  contactFlowName?: string;
  instanceId?: string;
  contactFlowId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      contactFlowDescription: 'ContactFlowDescription',
      contactFlowName: 'ContactFlowName',
      instanceId: 'InstanceId',
      contactFlowId: 'ContactFlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      contactFlowDescription: 'string',
      contactFlowName: 'string',
      instanceId: 'string',
      contactFlowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneNumbersResponseBodyPhoneNumbersPhoneNumberPrivacyNumber extends $tea.Model {
  type?: string;
  poolId?: string;
  subId?: string;
  phoneNumber?: string;
  poolName?: string;
  bizId?: string;
  regionNameCity?: string;
  extra?: string;
  telX?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      poolId: 'PoolId',
      subId: 'SubId',
      phoneNumber: 'PhoneNumber',
      poolName: 'PoolName',
      bizId: 'BizId',
      regionNameCity: 'RegionNameCity',
      extra: 'Extra',
      telX: 'TelX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      poolId: 'string',
      subId: 'string',
      phoneNumber: 'string',
      poolName: 'string',
      bizId: 'string',
      regionNameCity: 'string',
      extra: 'string',
      telX: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneNumbersResponseBodyPhoneNumbersPhoneNumber extends $tea.Model {
  testOnly?: boolean;
  remainingTime?: number;
  sipTelX?: string;
  city?: string;
  instanceId?: string;
  usage?: string;
  allowOutbound?: boolean;
  assignee?: string;
  phoneNumberId?: string;
  skillGroups?: ListPhoneNumbersResponseBodyPhoneNumbersPhoneNumberSkillGroups;
  trunks?: number;
  number?: string;
  phoneNumberDescription?: string;
  contactFlow?: ListPhoneNumbersResponseBodyPhoneNumbersPhoneNumberContactFlow;
  numberCommodityStatus?: number;
  privacyNumber?: ListPhoneNumbersResponseBodyPhoneNumbersPhoneNumberPrivacyNumber;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      testOnly: 'TestOnly',
      remainingTime: 'RemainingTime',
      sipTelX: 'SipTelX',
      city: 'City',
      instanceId: 'InstanceId',
      usage: 'Usage',
      allowOutbound: 'AllowOutbound',
      assignee: 'Assignee',
      phoneNumberId: 'PhoneNumberId',
      skillGroups: 'SkillGroups',
      trunks: 'Trunks',
      number: 'Number',
      phoneNumberDescription: 'PhoneNumberDescription',
      contactFlow: 'ContactFlow',
      numberCommodityStatus: 'NumberCommodityStatus',
      privacyNumber: 'PrivacyNumber',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      testOnly: 'boolean',
      remainingTime: 'number',
      sipTelX: 'string',
      city: 'string',
      instanceId: 'string',
      usage: 'string',
      allowOutbound: 'boolean',
      assignee: 'string',
      phoneNumberId: 'string',
      skillGroups: ListPhoneNumbersResponseBodyPhoneNumbersPhoneNumberSkillGroups,
      trunks: 'number',
      number: 'string',
      phoneNumberDescription: 'string',
      contactFlow: ListPhoneNumbersResponseBodyPhoneNumbersPhoneNumberContactFlow,
      numberCommodityStatus: 'number',
      privacyNumber: ListPhoneNumbersResponseBodyPhoneNumbersPhoneNumberPrivacyNumber,
      province: 'string',
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
  type?: number;
  serviceTag?: string;
  createTime?: number;
  city?: string;
  skillGroupIdList?: string[];
  instanceId?: string;
  usage?: string;
  phoneNumberId?: string;
  provider?: string;
  number?: string;
  phoneNumberDescription?: string;
  contactFlowId?: string;
  province?: string;
  concurrency?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      serviceTag: 'ServiceTag',
      createTime: 'CreateTime',
      city: 'City',
      skillGroupIdList: 'SkillGroupIdList',
      instanceId: 'InstanceId',
      usage: 'Usage',
      phoneNumberId: 'PhoneNumberId',
      provider: 'Provider',
      number: 'Number',
      phoneNumberDescription: 'PhoneNumberDescription',
      contactFlowId: 'ContactFlowId',
      province: 'Province',
      concurrency: 'Concurrency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      serviceTag: 'string',
      createTime: 'number',
      city: 'string',
      skillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      usage: 'string',
      phoneNumberId: 'string',
      provider: 'string',
      number: 'string',
      phoneNumberDescription: 'string',
      contactFlowId: 'string',
      province: 'string',
      concurrency: 'number',
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
  skillGroupId?: string;
  skillGroupName?: string;
  instanceId?: string;
  skillGroupDescription?: string;
  static names(): { [key: string]: string } {
    return {
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      instanceId: 'InstanceId',
      skillGroupDescription: 'SkillGroupDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupId: 'string',
      skillGroupName: 'string',
      instanceId: 'string',
      skillGroupDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealTimeAgentResponseBodyDataUserSkillLevelsSkillLevel extends $tea.Model {
  skill?: ListRealTimeAgentResponseBodyDataUserSkillLevelsSkillLevelSkill;
  skillLevelId?: string;
  level?: number;
  static names(): { [key: string]: string } {
    return {
      skill: 'Skill',
      skillLevelId: 'SkillLevelId',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skill: ListRealTimeAgentResponseBodyDataUserSkillLevelsSkillLevelSkill,
      skillLevelId: 'string',
      level: 'number',
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
  stateDesc?: string;
  skillLevels?: ListRealTimeAgentResponseBodyDataUserSkillLevels;
  dn?: string;
  state?: string;
  ramId?: string;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      stateDesc: 'StateDesc',
      skillLevels: 'SkillLevels',
      dn: 'Dn',
      state: 'State',
      ramId: 'RamId',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      stateDesc: 'string',
      skillLevels: ListRealTimeAgentResponseBodyDataUserSkillLevels,
      dn: 'string',
      state: 'string',
      ramId: 'string',
      phone: 'string',
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
  contactId?: string;
  agentId?: string;
  agentName?: string;
  skillGroupName?: string;
  queueTime?: number;
  ringTime?: number;
  startTime?: number;
  talkTime?: number;
  holdTime?: number;
  workTime?: number;
  satisfaction?: string;
  feedback?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      agentId: 'AgentId',
      agentName: 'AgentName',
      skillGroupName: 'SkillGroupName',
      queueTime: 'QueueTime',
      ringTime: 'RingTime',
      startTime: 'StartTime',
      talkTime: 'TalkTime',
      holdTime: 'HoldTime',
      workTime: 'WorkTime',
      satisfaction: 'Satisfaction',
      feedback: 'Feedback',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      agentId: 'string',
      agentName: 'string',
      skillGroupName: 'string',
      queueTime: 'number',
      ringTime: 'number',
      startTime: 'number',
      talkTime: 'number',
      holdTime: 'number',
      workTime: 'number',
      satisfaction: 'string',
      feedback: 'string',
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
  contactId?: string;
  contactType?: string;
  agentId?: string;
  agentName?: string;
  callingNumber?: string;
  calledNumber?: string;
  startTime?: number;
  duration?: number;
  fileName?: string;
  filePath?: string;
  fileDescription?: string;
  channel?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      contactType: 'ContactType',
      agentId: 'AgentId',
      agentName: 'AgentName',
      callingNumber: 'CallingNumber',
      calledNumber: 'CalledNumber',
      startTime: 'StartTime',
      duration: 'Duration',
      fileName: 'FileName',
      filePath: 'FilePath',
      fileDescription: 'FileDescription',
      channel: 'Channel',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      contactType: 'string',
      agentId: 'string',
      agentName: 'string',
      callingNumber: 'string',
      calledNumber: 'string',
      startTime: 'number',
      duration: 'number',
      fileName: 'string',
      filePath: 'string',
      fileDescription: 'string',
      channel: 'string',
      instanceId: 'string',
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
  contactId?: string;
  startTime?: number;
  duration?: number;
  satisfaction?: number;
  contactType?: string;
  contactDisposition?: string;
  callingNumber?: string;
  calledNumber?: string;
  agentNames?: string;
  skillGroupNames?: string;
  instanceId?: string;
  extraAttr?: string;
  satisfactionDesc?: string;
  feedback?: string;
  agents?: ListRecentCallRecordsResponseBodyCallDetailRecordsListCallDetailRecordAgents;
  recordings?: ListRecentCallRecordsResponseBodyCallDetailRecordsListCallDetailRecordRecordings;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      startTime: 'StartTime',
      duration: 'Duration',
      satisfaction: 'Satisfaction',
      contactType: 'ContactType',
      contactDisposition: 'ContactDisposition',
      callingNumber: 'CallingNumber',
      calledNumber: 'CalledNumber',
      agentNames: 'AgentNames',
      skillGroupNames: 'SkillGroupNames',
      instanceId: 'InstanceId',
      extraAttr: 'ExtraAttr',
      satisfactionDesc: 'SatisfactionDesc',
      feedback: 'Feedback',
      agents: 'Agents',
      recordings: 'Recordings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      startTime: 'number',
      duration: 'number',
      satisfaction: 'number',
      contactType: 'string',
      contactDisposition: 'string',
      callingNumber: 'string',
      calledNumber: 'string',
      agentNames: 'string',
      skillGroupNames: 'string',
      instanceId: 'string',
      extraAttr: 'string',
      satisfactionDesc: 'string',
      feedback: 'string',
      agents: ListRecentCallRecordsResponseBodyCallDetailRecordsListCallDetailRecordAgents,
      recordings: ListRecentCallRecordsResponseBodyCallDetailRecordsListCallDetailRecordRecordings,
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
  totalCount?: number;
  pageNumber?: number;
  pageSize?: number;
  list?: ListRecentCallRecordsResponseBodyCallDetailRecordsList;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      list: ListRecentCallRecordsResponseBodyCallDetailRecordsList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordingOfDualTrackResponseBodyRecordingsListRecording extends $tea.Model {
  contactType?: string;
  agentId?: string;
  agentName?: string;
  fileName?: string;
  instanceId?: string;
  calledNumber?: string;
  filePath?: string;
  startTime?: number;
  contactId?: string;
  callingNumber?: string;
  duration?: number;
  channel?: string;
  fileDescription?: string;
  static names(): { [key: string]: string } {
    return {
      contactType: 'ContactType',
      agentId: 'AgentId',
      agentName: 'AgentName',
      fileName: 'FileName',
      instanceId: 'InstanceId',
      calledNumber: 'CalledNumber',
      filePath: 'FilePath',
      startTime: 'StartTime',
      contactId: 'ContactId',
      callingNumber: 'CallingNumber',
      duration: 'Duration',
      channel: 'Channel',
      fileDescription: 'FileDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactType: 'string',
      agentId: 'string',
      agentName: 'string',
      fileName: 'string',
      instanceId: 'string',
      calledNumber: 'string',
      filePath: 'string',
      startTime: 'number',
      contactId: 'string',
      callingNumber: 'string',
      duration: 'number',
      channel: 'string',
      fileDescription: 'string',
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
  contactType?: string;
  agentId?: string;
  agentName?: string;
  fileName?: string;
  instanceId?: string;
  calledNumber?: string;
  filePath?: string;
  startTime?: number;
  contactId?: string;
  callingNumber?: string;
  duration?: number;
  channel?: string;
  fileDescription?: string;
  static names(): { [key: string]: string } {
    return {
      contactType: 'ContactType',
      agentId: 'AgentId',
      agentName: 'AgentName',
      fileName: 'FileName',
      instanceId: 'InstanceId',
      calledNumber: 'CalledNumber',
      filePath: 'FilePath',
      startTime: 'StartTime',
      contactId: 'ContactId',
      callingNumber: 'CallingNumber',
      duration: 'Duration',
      channel: 'Channel',
      fileDescription: 'FileDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactType: 'string',
      agentId: 'string',
      agentName: 'string',
      fileName: 'string',
      instanceId: 'string',
      calledNumber: 'string',
      filePath: 'string',
      startTime: 'number',
      contactId: 'string',
      callingNumber: 'string',
      duration: 'number',
      channel: 'string',
      fileDescription: 'string',
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
  contactType?: string;
  agentId?: string;
  agentName?: string;
  fileName?: string;
  instanceId?: string;
  calledNumber?: string;
  qualityCheckTid?: string;
  filePath?: string;
  startTime?: number;
  contactId?: string;
  qualityCheckTaskId?: string;
  callingNumber?: string;
  duration?: number;
  fileDescription?: string;
  channel?: string;
  static names(): { [key: string]: string } {
    return {
      contactType: 'ContactType',
      agentId: 'AgentId',
      agentName: 'AgentName',
      fileName: 'FileName',
      instanceId: 'InstanceId',
      calledNumber: 'CalledNumber',
      qualityCheckTid: 'QualityCheckTid',
      filePath: 'FilePath',
      startTime: 'StartTime',
      contactId: 'ContactId',
      qualityCheckTaskId: 'QualityCheckTaskId',
      callingNumber: 'CallingNumber',
      duration: 'Duration',
      fileDescription: 'FileDescription',
      channel: 'Channel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactType: 'string',
      agentId: 'string',
      agentName: 'string',
      fileName: 'string',
      instanceId: 'string',
      calledNumber: 'string',
      qualityCheckTid: 'string',
      filePath: 'string',
      startTime: 'number',
      contactId: 'string',
      qualityCheckTaskId: 'string',
      callingNumber: 'string',
      duration: 'number',
      fileDescription: 'string',
      channel: 'string',
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
  roleDescription?: string;
  instanceId?: string;
  roleName?: string;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      roleDescription: 'RoleDescription',
      instanceId: 'InstanceId',
      roleName: 'RoleName',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleDescription: 'string',
      instanceId: 'string',
      roleName: 'string',
      roleId: 'string',
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

export class ListScenariosResponseBodyScenariosStrategyWorkingTime extends $tea.Model {
  endTime?: string;
  beginTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      beginTime: 'BeginTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      beginTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenariosResponseBodyScenariosStrategy extends $tea.Model {
  type?: string;
  maxAttemptsPerDay?: number;
  workingTime?: ListScenariosResponseBodyScenariosStrategyWorkingTime[];
  followUpStrategy?: string;
  endTime?: number;
  customized?: string;
  startTime?: number;
  isTemplate?: boolean;
  repeatDays?: string[];
  routingStrategy?: string;
  description?: string;
  minAttemptInterval?: number;
  repeatBy?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      maxAttemptsPerDay: 'MaxAttemptsPerDay',
      workingTime: 'WorkingTime',
      followUpStrategy: 'FollowUpStrategy',
      endTime: 'EndTime',
      customized: 'Customized',
      startTime: 'StartTime',
      isTemplate: 'IsTemplate',
      repeatDays: 'RepeatDays',
      routingStrategy: 'RoutingStrategy',
      description: 'Description',
      minAttemptInterval: 'MinAttemptInterval',
      repeatBy: 'RepeatBy',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      maxAttemptsPerDay: 'number',
      workingTime: { 'type': 'array', 'itemType': ListScenariosResponseBodyScenariosStrategyWorkingTime },
      followUpStrategy: 'string',
      endTime: 'number',
      customized: 'string',
      startTime: 'number',
      isTemplate: 'boolean',
      repeatDays: { 'type': 'array', 'itemType': 'string' },
      routingStrategy: 'string',
      description: 'string',
      minAttemptInterval: 'number',
      repeatBy: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenariosResponseBodyScenariosSurveysIntents extends $tea.Model {
  nodeId?: string;
  intentId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      intentId: 'IntentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      intentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenariosResponseBodyScenariosSurveys extends $tea.Model {
  round?: number;
  description?: string;
  beebotId?: string;
  intents?: ListScenariosResponseBodyScenariosSurveysIntents[];
  name?: string;
  role?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      round: 'Round',
      description: 'Description',
      beebotId: 'BeebotId',
      intents: 'Intents',
      name: 'Name',
      role: 'Role',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      round: 'number',
      description: 'string',
      beebotId: 'string',
      intents: { 'type': 'array', 'itemType': ListScenariosResponseBodyScenariosSurveysIntents },
      name: 'string',
      role: 'string',
      id: 'string',
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
  type?: string;
  strategy?: ListScenariosResponseBodyScenariosStrategy;
  isTemplate?: boolean;
  description?: string;
  surveys?: ListScenariosResponseBodyScenariosSurveys[];
  variables?: ListScenariosResponseBodyScenariosVariables[];
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      strategy: 'Strategy',
      isTemplate: 'IsTemplate',
      description: 'Description',
      surveys: 'Surveys',
      variables: 'Variables',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      strategy: ListScenariosResponseBodyScenariosStrategy,
      isTemplate: 'boolean',
      description: 'string',
      surveys: { 'type': 'array', 'itemType': ListScenariosResponseBodyScenariosSurveys },
      variables: { 'type': 'array', 'itemType': ListScenariosResponseBodyScenariosVariables },
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenarioTemplatesResponseBodyScenarioTemplatesSurveysFlow extends $tea.Model {
  isPublished?: boolean;
  flowJson?: string;
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      isPublished: 'IsPublished',
      flowJson: 'FlowJson',
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isPublished: 'boolean',
      flowJson: 'string',
      flowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenarioTemplatesResponseBodyScenarioTemplatesSurveysIntents extends $tea.Model {
  nodeId?: string;
  intentId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      intentId: 'IntentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      intentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenarioTemplatesResponseBodyScenarioTemplatesSurveys extends $tea.Model {
  globalQuestions?: string;
  round?: number;
  description?: string;
  beebotId?: string;
  flow?: ListScenarioTemplatesResponseBodyScenarioTemplatesSurveysFlow;
  intents?: ListScenarioTemplatesResponseBodyScenarioTemplatesSurveysIntents[];
  name?: string;
  role?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      globalQuestions: 'GlobalQuestions',
      round: 'Round',
      description: 'Description',
      beebotId: 'BeebotId',
      flow: 'Flow',
      intents: 'Intents',
      name: 'Name',
      role: 'Role',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalQuestions: 'string',
      round: 'number',
      description: 'string',
      beebotId: 'string',
      flow: ListScenarioTemplatesResponseBodyScenarioTemplatesSurveysFlow,
      intents: { 'type': 'array', 'itemType': ListScenarioTemplatesResponseBodyScenarioTemplatesSurveysIntents },
      name: 'string',
      role: 'string',
      id: 'string',
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
  type?: string;
  isTemplate?: boolean;
  description?: string;
  surveys?: ListScenarioTemplatesResponseBodyScenarioTemplatesSurveys[];
  variables?: ListScenarioTemplatesResponseBodyScenarioTemplatesVariables[];
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      isTemplate: 'IsTemplate',
      description: 'Description',
      surveys: 'Surveys',
      variables: 'Variables',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      isTemplate: 'boolean',
      description: 'string',
      surveys: { 'type': 'array', 'itemType': ListScenarioTemplatesResponseBodyScenarioTemplatesSurveys },
      variables: { 'type': 'array', 'itemType': ListScenarioTemplatesResponseBodyScenarioTemplatesVariables },
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupsResponseBodySkillGroupsSkillGroupOutboundPhoneNumbersPhoneNumber extends $tea.Model {
  testOnly?: boolean;
  trunks?: number;
  remainingTime?: number;
  number?: string;
  instanceId?: string;
  usage?: string;
  allowOutbound?: boolean;
  phoneNumberDescription?: string;
  phoneNumberId?: string;
  static names(): { [key: string]: string } {
    return {
      testOnly: 'TestOnly',
      trunks: 'Trunks',
      remainingTime: 'RemainingTime',
      number: 'Number',
      instanceId: 'InstanceId',
      usage: 'Usage',
      allowOutbound: 'AllowOutbound',
      phoneNumberDescription: 'PhoneNumberDescription',
      phoneNumberId: 'PhoneNumberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      testOnly: 'boolean',
      trunks: 'number',
      remainingTime: 'number',
      number: 'string',
      instanceId: 'string',
      usage: 'string',
      allowOutbound: 'boolean',
      phoneNumberDescription: 'string',
      phoneNumberId: 'string',
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
  outboundPhoneNumbers?: ListSkillGroupsResponseBodySkillGroupsSkillGroupOutboundPhoneNumbers;
  routingStrategy?: string;
  skillGroupId?: string;
  skillGroupName?: string;
  userCount?: number;
  instanceId?: string;
  accQueueName?: string;
  accSkillGroupName?: string;
  skillGroupDescription?: string;
  static names(): { [key: string]: string } {
    return {
      outboundPhoneNumbers: 'OutboundPhoneNumbers',
      routingStrategy: 'RoutingStrategy',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      userCount: 'UserCount',
      instanceId: 'InstanceId',
      accQueueName: 'AccQueueName',
      accSkillGroupName: 'AccSkillGroupName',
      skillGroupDescription: 'SkillGroupDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outboundPhoneNumbers: ListSkillGroupsResponseBodySkillGroupsSkillGroupOutboundPhoneNumbers,
      routingStrategy: 'string',
      skillGroupId: 'string',
      skillGroupName: 'string',
      userCount: 'number',
      instanceId: 'string',
      accQueueName: 'string',
      accSkillGroupName: 'string',
      skillGroupDescription: 'string',
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
  testOnly?: boolean;
  trunks?: number;
  remainingTime?: number;
  number?: string;
  city?: string;
  instanceId?: string;
  usage?: string;
  allowOutbound?: boolean;
  phoneNumberDescription?: string;
  province?: string;
  phoneNumberId?: string;
  static names(): { [key: string]: string } {
    return {
      testOnly: 'TestOnly',
      trunks: 'Trunks',
      remainingTime: 'RemainingTime',
      number: 'Number',
      city: 'City',
      instanceId: 'InstanceId',
      usage: 'Usage',
      allowOutbound: 'AllowOutbound',
      phoneNumberDescription: 'PhoneNumberDescription',
      province: 'Province',
      phoneNumberId: 'PhoneNumberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      testOnly: 'boolean',
      trunks: 'number',
      remainingTime: 'number',
      number: 'string',
      city: 'string',
      instanceId: 'string',
      usage: 'string',
      allowOutbound: 'boolean',
      phoneNumberDescription: 'string',
      province: 'string',
      phoneNumberId: 'string',
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
  outboundPhoneNumbers?: ListSkillGroupsOfUserResponseBodySkillLevelsSkillLevelSkillOutboundPhoneNumbers;
  routingStrategy?: string;
  skillGroupName?: string;
  skillGroupId?: string;
  instanceId?: string;
  skillGroupDescription?: string;
  static names(): { [key: string]: string } {
    return {
      outboundPhoneNumbers: 'OutboundPhoneNumbers',
      routingStrategy: 'RoutingStrategy',
      skillGroupName: 'SkillGroupName',
      skillGroupId: 'SkillGroupId',
      instanceId: 'InstanceId',
      skillGroupDescription: 'SkillGroupDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outboundPhoneNumbers: ListSkillGroupsOfUserResponseBodySkillLevelsSkillLevelSkillOutboundPhoneNumbers,
      routingStrategy: 'string',
      skillGroupName: 'string',
      skillGroupId: 'string',
      instanceId: 'string',
      skillGroupDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupsOfUserResponseBodySkillLevelsSkillLevel extends $tea.Model {
  skill?: ListSkillGroupsOfUserResponseBodySkillLevelsSkillLevelSkill;
  skillLevelId?: string;
  level?: number;
  static names(): { [key: string]: string } {
    return {
      skill: 'Skill',
      skillLevelId: 'SkillLevelId',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skill: ListSkillGroupsOfUserResponseBodySkillLevelsSkillLevelSkill,
      skillLevelId: 'string',
      level: 'number',
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

export class ListSkillGroupStatesResponseBodyDataListRealTimeSkillGroupState extends $tea.Model {
  workingAgents?: number;
  loggedInAgents?: number;
  breakingAgents?: number;
  longestCall?: number;
  waitingCalls?: number;
  talkingAgents?: number;
  skillGroupName?: string;
  skillGroupId?: string;
  readyAgents?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      workingAgents: 'WorkingAgents',
      loggedInAgents: 'LoggedInAgents',
      breakingAgents: 'BreakingAgents',
      longestCall: 'LongestCall',
      waitingCalls: 'WaitingCalls',
      talkingAgents: 'TalkingAgents',
      skillGroupName: 'SkillGroupName',
      skillGroupId: 'SkillGroupId',
      readyAgents: 'ReadyAgents',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workingAgents: 'number',
      loggedInAgents: 'number',
      breakingAgents: 'number',
      longestCall: 'number',
      waitingCalls: 'number',
      talkingAgents: 'number',
      skillGroupName: 'string',
      skillGroupId: 'string',
      readyAgents: 'number',
      instanceId: 'string',
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

export class ListSkillGroupSummaryReportsResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportOverall extends $tea.Model {
  totalTalkTime?: number;
  totalLoggedInTime?: number;
  occupancyRate?: number;
  totalWorkTime?: number;
  maxWorkTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  averageReadyTime?: number;
  maxReadyTime?: number;
  totalBreakTime?: number;
  totalReadyTime?: number;
  maxTalkTime?: number;
  totalCalls?: number;
  static names(): { [key: string]: string } {
    return {
      totalTalkTime: 'TotalTalkTime',
      totalLoggedInTime: 'TotalLoggedInTime',
      occupancyRate: 'OccupancyRate',
      totalWorkTime: 'TotalWorkTime',
      maxWorkTime: 'MaxWorkTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      averageReadyTime: 'AverageReadyTime',
      maxReadyTime: 'MaxReadyTime',
      totalBreakTime: 'TotalBreakTime',
      totalReadyTime: 'TotalReadyTime',
      maxTalkTime: 'MaxTalkTime',
      totalCalls: 'TotalCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalTalkTime: 'number',
      totalLoggedInTime: 'number',
      occupancyRate: 'number',
      totalWorkTime: 'number',
      maxWorkTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      averageReadyTime: 'number',
      maxReadyTime: 'number',
      totalBreakTime: 'number',
      totalReadyTime: 'number',
      maxTalkTime: 'number',
      totalCalls: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportInbound extends $tea.Model {
  averageRingTime?: number;
  callsHandled?: number;
  totalWorkTime?: number;
  maxWorkTime?: number;
  queueMaxWaitTimeDuration?: number;
  averageWorkTime?: number;
  satisfactionIndex?: number;
  answeredByAgentOfQueueWaitTimeDuration?: number;
  totalRingTime?: number;
  inComingQueueOfQueueCount?: number;
  maxTalkTime?: string;
  maxRingTime?: number;
  totalTalkTime?: number;
  callsOffered?: number;
  abandonedInQueueOfQueueCount?: number;
  overFlowInQueueOfQueueCount?: number;
  serviceLevel20?: number;
  answeredByAgentOfQueueMaxWaitTimeDuration?: number;
  averageTalkTime?: number;
  answeredByAgentOfQueueCount?: number;
  satisfactionSurveysOffered?: number;
  handleRate?: number;
  satisfactionSurveysResponded?: number;
  giveUpByAgentOfQueueCount?: number;
  queueWaitTimeDuration?: number;
  static names(): { [key: string]: string } {
    return {
      averageRingTime: 'AverageRingTime',
      callsHandled: 'CallsHandled',
      totalWorkTime: 'TotalWorkTime',
      maxWorkTime: 'MaxWorkTime',
      queueMaxWaitTimeDuration: 'QueueMaxWaitTimeDuration',
      averageWorkTime: 'AverageWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      answeredByAgentOfQueueWaitTimeDuration: 'AnsweredByAgentOfQueueWaitTimeDuration',
      totalRingTime: 'TotalRingTime',
      inComingQueueOfQueueCount: 'InComingQueueOfQueueCount',
      maxTalkTime: 'MaxTalkTime',
      maxRingTime: 'MaxRingTime',
      totalTalkTime: 'TotalTalkTime',
      callsOffered: 'CallsOffered',
      abandonedInQueueOfQueueCount: 'AbandonedInQueueOfQueueCount',
      overFlowInQueueOfQueueCount: 'OverFlowInQueueOfQueueCount',
      serviceLevel20: 'ServiceLevel20',
      answeredByAgentOfQueueMaxWaitTimeDuration: 'AnsweredByAgentOfQueueMaxWaitTimeDuration',
      averageTalkTime: 'AverageTalkTime',
      answeredByAgentOfQueueCount: 'AnsweredByAgentOfQueueCount',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      handleRate: 'HandleRate',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      giveUpByAgentOfQueueCount: 'GiveUpByAgentOfQueueCount',
      queueWaitTimeDuration: 'QueueWaitTimeDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageRingTime: 'number',
      callsHandled: 'number',
      totalWorkTime: 'number',
      maxWorkTime: 'number',
      queueMaxWaitTimeDuration: 'number',
      averageWorkTime: 'number',
      satisfactionIndex: 'number',
      answeredByAgentOfQueueWaitTimeDuration: 'number',
      totalRingTime: 'number',
      inComingQueueOfQueueCount: 'number',
      maxTalkTime: 'string',
      maxRingTime: 'number',
      totalTalkTime: 'number',
      callsOffered: 'number',
      abandonedInQueueOfQueueCount: 'number',
      overFlowInQueueOfQueueCount: 'number',
      serviceLevel20: 'number',
      answeredByAgentOfQueueMaxWaitTimeDuration: 'number',
      averageTalkTime: 'number',
      answeredByAgentOfQueueCount: 'number',
      satisfactionSurveysOffered: 'number',
      handleRate: 'number',
      satisfactionSurveysResponded: 'number',
      giveUpByAgentOfQueueCount: 'number',
      queueWaitTimeDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportOutbound extends $tea.Model {
  totalTalkTime?: number;
  maxDialingTime?: number;
  callsDialed?: number;
  callsAnswered?: number;
  totalWorkTime?: number;
  answerRate?: number;
  maxWorkTime?: number;
  totalDialingTime?: number;
  averageWorkTime?: number;
  averageTalkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  maxTalkTime?: number;
  averageDialingTime?: number;
  static names(): { [key: string]: string } {
    return {
      totalTalkTime: 'TotalTalkTime',
      maxDialingTime: 'MaxDialingTime',
      callsDialed: 'CallsDialed',
      callsAnswered: 'CallsAnswered',
      totalWorkTime: 'TotalWorkTime',
      answerRate: 'AnswerRate',
      maxWorkTime: 'MaxWorkTime',
      totalDialingTime: 'TotalDialingTime',
      averageWorkTime: 'AverageWorkTime',
      averageTalkTime: 'AverageTalkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      maxTalkTime: 'MaxTalkTime',
      averageDialingTime: 'AverageDialingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalTalkTime: 'number',
      maxDialingTime: 'number',
      callsDialed: 'number',
      callsAnswered: 'number',
      totalWorkTime: 'number',
      answerRate: 'number',
      maxWorkTime: 'number',
      totalDialingTime: 'number',
      averageWorkTime: 'number',
      averageTalkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      maxTalkTime: 'number',
      averageDialingTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReport extends $tea.Model {
  overall?: ListSkillGroupSummaryReportsResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportOverall;
  skillGroupId?: string;
  skillGroupName?: string;
  inbound?: ListSkillGroupSummaryReportsResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportInbound;
  outbound?: ListSkillGroupSummaryReportsResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportOutbound;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      overall: 'Overall',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      inbound: 'Inbound',
      outbound: 'Outbound',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overall: ListSkillGroupSummaryReportsResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportOverall,
      skillGroupId: 'string',
      skillGroupName: 'string',
      inbound: ListSkillGroupSummaryReportsResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportInbound,
      outbound: ListSkillGroupSummaryReportsResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportOutbound,
      instanceId: 'string',
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

export class ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReportListSkillGroupTimeIntervalReportIntervalListSkillGroupSummaryReportOverall extends $tea.Model {
  totalTalkTime?: number;
  totalLoggedInTime?: number;
  occupancyRate?: number;
  totalWorkTime?: number;
  maxWorkTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  averageReadyTime?: number;
  maxReadyTime?: number;
  totalBreakTime?: number;
  totalReadyTime?: number;
  maxTalkTime?: number;
  totalCalls?: number;
  static names(): { [key: string]: string } {
    return {
      totalTalkTime: 'TotalTalkTime',
      totalLoggedInTime: 'TotalLoggedInTime',
      occupancyRate: 'OccupancyRate',
      totalWorkTime: 'TotalWorkTime',
      maxWorkTime: 'MaxWorkTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      averageReadyTime: 'AverageReadyTime',
      maxReadyTime: 'MaxReadyTime',
      totalBreakTime: 'TotalBreakTime',
      totalReadyTime: 'TotalReadyTime',
      maxTalkTime: 'MaxTalkTime',
      totalCalls: 'TotalCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalTalkTime: 'number',
      totalLoggedInTime: 'number',
      occupancyRate: 'number',
      totalWorkTime: 'number',
      maxWorkTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      averageReadyTime: 'number',
      maxReadyTime: 'number',
      totalBreakTime: 'number',
      totalReadyTime: 'number',
      maxTalkTime: 'number',
      totalCalls: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReportListSkillGroupTimeIntervalReportIntervalListSkillGroupSummaryReportInbound extends $tea.Model {
  averageRingTime?: number;
  callsHandled?: number;
  totalWorkTime?: number;
  maxWorkTime?: number;
  queueMaxWaitTimeDuration?: number;
  averageWorkTime?: number;
  satisfactionIndex?: number;
  answeredByAgentOfQueueWaitTimeDuration?: number;
  totalRingTime?: number;
  inComingQueueOfQueueCount?: number;
  maxTalkTime?: number;
  maxRingTime?: number;
  totalTalkTime?: number;
  callsOffered?: number;
  abandonedInQueueOfQueueCount?: number;
  overFlowInQueueOfQueueCount?: number;
  serviceLevel20?: number;
  answeredByAgentOfQueueMaxWaitTimeDuration?: number;
  averageTalkTime?: number;
  answeredByAgentOfQueueCount?: number;
  satisfactionSurveysOffered?: number;
  handleRate?: number;
  satisfactionSurveysResponded?: number;
  giveUpByAgentOfQueueCount?: number;
  queueWaitTimeDuration?: number;
  static names(): { [key: string]: string } {
    return {
      averageRingTime: 'AverageRingTime',
      callsHandled: 'CallsHandled',
      totalWorkTime: 'TotalWorkTime',
      maxWorkTime: 'MaxWorkTime',
      queueMaxWaitTimeDuration: 'QueueMaxWaitTimeDuration',
      averageWorkTime: 'AverageWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      answeredByAgentOfQueueWaitTimeDuration: 'AnsweredByAgentOfQueueWaitTimeDuration',
      totalRingTime: 'TotalRingTime',
      inComingQueueOfQueueCount: 'InComingQueueOfQueueCount',
      maxTalkTime: 'MaxTalkTime',
      maxRingTime: 'MaxRingTime',
      totalTalkTime: 'TotalTalkTime',
      callsOffered: 'CallsOffered',
      abandonedInQueueOfQueueCount: 'AbandonedInQueueOfQueueCount',
      overFlowInQueueOfQueueCount: 'OverFlowInQueueOfQueueCount',
      serviceLevel20: 'ServiceLevel20',
      answeredByAgentOfQueueMaxWaitTimeDuration: 'AnsweredByAgentOfQueueMaxWaitTimeDuration',
      averageTalkTime: 'AverageTalkTime',
      answeredByAgentOfQueueCount: 'AnsweredByAgentOfQueueCount',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      handleRate: 'HandleRate',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      giveUpByAgentOfQueueCount: 'GiveUpByAgentOfQueueCount',
      queueWaitTimeDuration: 'QueueWaitTimeDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageRingTime: 'number',
      callsHandled: 'number',
      totalWorkTime: 'number',
      maxWorkTime: 'number',
      queueMaxWaitTimeDuration: 'number',
      averageWorkTime: 'number',
      satisfactionIndex: 'number',
      answeredByAgentOfQueueWaitTimeDuration: 'number',
      totalRingTime: 'number',
      inComingQueueOfQueueCount: 'number',
      maxTalkTime: 'number',
      maxRingTime: 'number',
      totalTalkTime: 'number',
      callsOffered: 'number',
      abandonedInQueueOfQueueCount: 'number',
      overFlowInQueueOfQueueCount: 'number',
      serviceLevel20: 'number',
      answeredByAgentOfQueueMaxWaitTimeDuration: 'number',
      averageTalkTime: 'number',
      answeredByAgentOfQueueCount: 'number',
      satisfactionSurveysOffered: 'number',
      handleRate: 'number',
      satisfactionSurveysResponded: 'number',
      giveUpByAgentOfQueueCount: 'number',
      queueWaitTimeDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReportListSkillGroupTimeIntervalReportIntervalListSkillGroupSummaryReportOutbound extends $tea.Model {
  totalTalkTime?: number;
  maxDialingTime?: number;
  callsDialed?: number;
  callsAnswered?: number;
  totalWorkTime?: number;
  answerRate?: number;
  maxWorkTime?: number;
  totalDialingTime?: number;
  averageWorkTime?: number;
  averageTalkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  maxTalkTime?: number;
  averageDialingTime?: number;
  static names(): { [key: string]: string } {
    return {
      totalTalkTime: 'TotalTalkTime',
      maxDialingTime: 'MaxDialingTime',
      callsDialed: 'CallsDialed',
      callsAnswered: 'CallsAnswered',
      totalWorkTime: 'TotalWorkTime',
      answerRate: 'AnswerRate',
      maxWorkTime: 'MaxWorkTime',
      totalDialingTime: 'TotalDialingTime',
      averageWorkTime: 'AverageWorkTime',
      averageTalkTime: 'AverageTalkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      maxTalkTime: 'MaxTalkTime',
      averageDialingTime: 'AverageDialingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalTalkTime: 'number',
      maxDialingTime: 'number',
      callsDialed: 'number',
      callsAnswered: 'number',
      totalWorkTime: 'number',
      answerRate: 'number',
      maxWorkTime: 'number',
      totalDialingTime: 'number',
      averageWorkTime: 'number',
      averageTalkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      maxTalkTime: 'number',
      averageDialingTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReportListSkillGroupTimeIntervalReportIntervalListSkillGroupSummaryReport extends $tea.Model {
  overall?: ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReportListSkillGroupTimeIntervalReportIntervalListSkillGroupSummaryReportOverall;
  skillGroupName?: string;
  skillGroupId?: string;
  inbound?: ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReportListSkillGroupTimeIntervalReportIntervalListSkillGroupSummaryReportInbound;
  outbound?: ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReportListSkillGroupTimeIntervalReportIntervalListSkillGroupSummaryReportOutbound;
  timestamp?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      overall: 'Overall',
      skillGroupName: 'SkillGroupName',
      skillGroupId: 'SkillGroupId',
      inbound: 'Inbound',
      outbound: 'Outbound',
      timestamp: 'Timestamp',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overall: ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReportListSkillGroupTimeIntervalReportIntervalListSkillGroupSummaryReportOverall,
      skillGroupName: 'string',
      skillGroupId: 'string',
      inbound: ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReportListSkillGroupTimeIntervalReportIntervalListSkillGroupSummaryReportInbound,
      outbound: ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReportListSkillGroupTimeIntervalReportIntervalListSkillGroupSummaryReportOutbound,
      timestamp: 'string',
      instanceId: 'string',
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
  skillGroupId?: string;
  intervalList?: ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReportListSkillGroupTimeIntervalReportIntervalList;
  static names(): { [key: string]: string } {
    return {
      skillGroupId: 'SkillGroupId',
      intervalList: 'IntervalList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupId: 'string',
      intervalList: ListSkillGroupSummaryReportsByIntervalResponseBodyPagedSkillGroupSummaryReportListSkillGroupTimeIntervalReportIntervalList,
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

export class ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportOverall extends $tea.Model {
  totalTalkTime?: number;
  totalLoggedInTime?: number;
  occupancyRate?: number;
  totalWorkTime?: number;
  maxWorkTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  averageReadyTime?: number;
  maxReadyTime?: number;
  totalBreakTime?: number;
  totalReadyTime?: number;
  maxTalkTime?: number;
  totalCalls?: number;
  static names(): { [key: string]: string } {
    return {
      totalTalkTime: 'TotalTalkTime',
      totalLoggedInTime: 'TotalLoggedInTime',
      occupancyRate: 'OccupancyRate',
      totalWorkTime: 'TotalWorkTime',
      maxWorkTime: 'MaxWorkTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      averageReadyTime: 'AverageReadyTime',
      maxReadyTime: 'MaxReadyTime',
      totalBreakTime: 'TotalBreakTime',
      totalReadyTime: 'TotalReadyTime',
      maxTalkTime: 'MaxTalkTime',
      totalCalls: 'TotalCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalTalkTime: 'number',
      totalLoggedInTime: 'number',
      occupancyRate: 'number',
      totalWorkTime: 'number',
      maxWorkTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      averageReadyTime: 'number',
      maxReadyTime: 'number',
      totalBreakTime: 'number',
      totalReadyTime: 'number',
      maxTalkTime: 'number',
      totalCalls: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportInbound extends $tea.Model {
  averageRingTime?: number;
  callsHandled?: number;
  totalWorkTime?: number;
  maxWorkTime?: number;
  queueMaxWaitTimeDuration?: number;
  averageWorkTime?: number;
  satisfactionIndex?: number;
  answeredByAgentOfQueueWaitTimeDuration?: number;
  totalRingTime?: number;
  inComingQueueOfQueueCount?: number;
  maxTalkTime?: string;
  maxRingTime?: number;
  totalTalkTime?: number;
  callsOffered?: number;
  abandonedInQueueOfQueueCount?: number;
  overFlowInQueueOfQueueCount?: number;
  serviceLevel20?: number;
  answeredByAgentOfQueueMaxWaitTimeDuration?: number;
  averageTalkTime?: number;
  answeredByAgentOfQueueCount?: number;
  satisfactionSurveysOffered?: number;
  handleRate?: number;
  satisfactionSurveysResponded?: number;
  giveUpByAgentOfQueueCount?: number;
  queueWaitTimeDuration?: number;
  static names(): { [key: string]: string } {
    return {
      averageRingTime: 'AverageRingTime',
      callsHandled: 'CallsHandled',
      totalWorkTime: 'TotalWorkTime',
      maxWorkTime: 'MaxWorkTime',
      queueMaxWaitTimeDuration: 'QueueMaxWaitTimeDuration',
      averageWorkTime: 'AverageWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      answeredByAgentOfQueueWaitTimeDuration: 'AnsweredByAgentOfQueueWaitTimeDuration',
      totalRingTime: 'TotalRingTime',
      inComingQueueOfQueueCount: 'InComingQueueOfQueueCount',
      maxTalkTime: 'MaxTalkTime',
      maxRingTime: 'MaxRingTime',
      totalTalkTime: 'TotalTalkTime',
      callsOffered: 'CallsOffered',
      abandonedInQueueOfQueueCount: 'AbandonedInQueueOfQueueCount',
      overFlowInQueueOfQueueCount: 'OverFlowInQueueOfQueueCount',
      serviceLevel20: 'ServiceLevel20',
      answeredByAgentOfQueueMaxWaitTimeDuration: 'AnsweredByAgentOfQueueMaxWaitTimeDuration',
      averageTalkTime: 'AverageTalkTime',
      answeredByAgentOfQueueCount: 'AnsweredByAgentOfQueueCount',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      handleRate: 'HandleRate',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      giveUpByAgentOfQueueCount: 'GiveUpByAgentOfQueueCount',
      queueWaitTimeDuration: 'QueueWaitTimeDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageRingTime: 'number',
      callsHandled: 'number',
      totalWorkTime: 'number',
      maxWorkTime: 'number',
      queueMaxWaitTimeDuration: 'number',
      averageWorkTime: 'number',
      satisfactionIndex: 'number',
      answeredByAgentOfQueueWaitTimeDuration: 'number',
      totalRingTime: 'number',
      inComingQueueOfQueueCount: 'number',
      maxTalkTime: 'string',
      maxRingTime: 'number',
      totalTalkTime: 'number',
      callsOffered: 'number',
      abandonedInQueueOfQueueCount: 'number',
      overFlowInQueueOfQueueCount: 'number',
      serviceLevel20: 'number',
      answeredByAgentOfQueueMaxWaitTimeDuration: 'number',
      averageTalkTime: 'number',
      answeredByAgentOfQueueCount: 'number',
      satisfactionSurveysOffered: 'number',
      handleRate: 'number',
      satisfactionSurveysResponded: 'number',
      giveUpByAgentOfQueueCount: 'number',
      queueWaitTimeDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportOutbound extends $tea.Model {
  totalTalkTime?: number;
  maxDialingTime?: number;
  callsDialed?: number;
  callsAnswered?: number;
  totalWorkTime?: number;
  answerRate?: number;
  maxWorkTime?: number;
  totalDialingTime?: number;
  averageWorkTime?: number;
  averageTalkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  maxTalkTime?: number;
  averageDialingTime?: number;
  static names(): { [key: string]: string } {
    return {
      totalTalkTime: 'TotalTalkTime',
      maxDialingTime: 'MaxDialingTime',
      callsDialed: 'CallsDialed',
      callsAnswered: 'CallsAnswered',
      totalWorkTime: 'TotalWorkTime',
      answerRate: 'AnswerRate',
      maxWorkTime: 'MaxWorkTime',
      totalDialingTime: 'TotalDialingTime',
      averageWorkTime: 'AverageWorkTime',
      averageTalkTime: 'AverageTalkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      maxTalkTime: 'MaxTalkTime',
      averageDialingTime: 'AverageDialingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalTalkTime: 'number',
      maxDialingTime: 'number',
      callsDialed: 'number',
      callsAnswered: 'number',
      totalWorkTime: 'number',
      answerRate: 'number',
      maxWorkTime: 'number',
      totalDialingTime: 'number',
      averageWorkTime: 'number',
      averageTalkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      maxTalkTime: 'number',
      averageDialingTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReport extends $tea.Model {
  overall?: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportOverall;
  skillGroupName?: string;
  skillGroupId?: string;
  inbound?: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportInbound;
  outbound?: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportOutbound;
  timestamp?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      overall: 'Overall',
      skillGroupName: 'SkillGroupName',
      skillGroupId: 'SkillGroupId',
      inbound: 'Inbound',
      outbound: 'Outbound',
      timestamp: 'Timestamp',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overall: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportOverall,
      skillGroupName: 'string',
      skillGroupId: 'string',
      inbound: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportInbound,
      outbound: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListSkillGroupSummaryReportOutbound,
      timestamp: 'string',
      instanceId: 'string',
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

export class ListSurveysResponseBodySurveysAsrCustomModel extends $tea.Model {
  customModelStatus?: number;
  corpora?: string;
  static names(): { [key: string]: string } {
    return {
      customModelStatus: 'CustomModelStatus',
      corpora: 'Corpora',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customModelStatus: 'number',
      corpora: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSurveysResponseBodySurveysFlow extends $tea.Model {
  isPublished?: boolean;
  flowJson?: string;
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      isPublished: 'IsPublished',
      flowJson: 'FlowJson',
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isPublished: 'boolean',
      flowJson: 'string',
      flowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSurveysResponseBodySurveys extends $tea.Model {
  globalQuestions?: string;
  round?: number;
  speechOptimizationParam?: string;
  description?: string;
  hotWords?: string;
  asrCustomModel?: ListSurveysResponseBodySurveysAsrCustomModel;
  flow?: ListSurveysResponseBodySurveysFlow;
  role?: string;
  name?: string;
  scenarioUuid?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      globalQuestions: 'GlobalQuestions',
      round: 'Round',
      speechOptimizationParam: 'SpeechOptimizationParam',
      description: 'Description',
      hotWords: 'HotWords',
      asrCustomModel: 'AsrCustomModel',
      flow: 'Flow',
      role: 'Role',
      name: 'Name',
      scenarioUuid: 'ScenarioUuid',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalQuestions: 'string',
      round: 'number',
      speechOptimizationParam: 'string',
      description: 'string',
      hotWords: 'string',
      asrCustomModel: ListSurveysResponseBodySurveysAsrCustomModel,
      flow: ListSurveysResponseBodySurveysFlow,
      role: 'string',
      name: 'string',
      scenarioUuid: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransferableSkillGroupsResponseBodySkillGroups extends $tea.Model {
  allowPrivateOutboundNumber?: boolean;
  routingStrategy?: string;
  skillGroupName?: string;
  skillGroupId?: string;
  userCount?: number;
  accQueueName?: string;
  instanceId?: string;
  skillGroupDescription?: string;
  accSkillGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      allowPrivateOutboundNumber: 'AllowPrivateOutboundNumber',
      routingStrategy: 'RoutingStrategy',
      skillGroupName: 'SkillGroupName',
      skillGroupId: 'SkillGroupId',
      userCount: 'UserCount',
      accQueueName: 'AccQueueName',
      instanceId: 'InstanceId',
      skillGroupDescription: 'SkillGroupDescription',
      accSkillGroupName: 'AccSkillGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowPrivateOutboundNumber: 'boolean',
      routingStrategy: 'string',
      skillGroupName: 'string',
      skillGroupId: 'string',
      userCount: 'number',
      accQueueName: 'string',
      instanceId: 'string',
      skillGroupDescription: 'string',
      accSkillGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrunkProvidersResponseBodyTrunkProviders extends $tea.Model {
  status?: string;
  providerName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      providerName: 'ProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      providerName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrunksOfSkillGroupResponseBodyTrunkConfigs extends $tea.Model {
  providerName?: string;
  primary?: boolean;
  static names(): { [key: string]: string } {
    return {
      providerName: 'ProviderName',
      primary: 'Primary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      providerName: 'string',
      primary: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUnreachableContactsResponseBodyUnreachableContactsListContacts extends $tea.Model {
  phoneNumber?: string;
  contactId?: string;
  state?: string;
  contactName?: string;
  role?: string;
  referenceId?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
      contactId: 'ContactId',
      state: 'State',
      contactName: 'ContactName',
      role: 'Role',
      referenceId: 'ReferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: 'string',
      contactId: 'string',
      state: 'string',
      contactName: 'string',
      role: 'string',
      referenceId: 'string',
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

export class ListUsersResponseBodyUsersListUserSkillLevelsSkillLevelSkill extends $tea.Model {
  skillGroupId?: string;
  skillGroupName?: string;
  instanceId?: string;
  skillGroupDescription?: string;
  static names(): { [key: string]: string } {
    return {
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      instanceId: 'InstanceId',
      skillGroupDescription: 'SkillGroupDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupId: 'string',
      skillGroupName: 'string',
      instanceId: 'string',
      skillGroupDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsersListUserSkillLevelsSkillLevel extends $tea.Model {
  skill?: ListUsersResponseBodyUsersListUserSkillLevelsSkillLevelSkill;
  skillLevelId?: string;
  level?: number;
  static names(): { [key: string]: string } {
    return {
      skill: 'Skill',
      skillLevelId: 'SkillLevelId',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skill: ListUsersResponseBodyUsersListUserSkillLevelsSkillLevelSkill,
      skillLevelId: 'string',
      level: 'number',
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

export class ListUsersResponseBodyUsersListUserRolesRole extends $tea.Model {
  roleDescription?: string;
  instanceId?: string;
  roleName?: string;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      roleDescription: 'RoleDescription',
      instanceId: 'InstanceId',
      roleName: 'RoleName',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleDescription: 'string',
      instanceId: 'string',
      roleName: 'string',
      roleId: 'string',
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

export class ListUsersResponseBodyUsersListUserDetail extends $tea.Model {
  displayName?: string;
  email?: string;
  loginName?: string;
  department?: string;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      email: 'Email',
      loginName: 'LoginName',
      department: 'Department',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      email: 'string',
      loginName: 'string',
      department: 'string',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsersListUser extends $tea.Model {
  skillLevels?: ListUsersResponseBodyUsersListUserSkillLevels;
  privateOutboundNumberId?: string;
  userId?: string;
  roles?: ListUsersResponseBodyUsersListUserRoles;
  primary?: boolean;
  instanceId?: string;
  ramId?: string;
  detail?: ListUsersResponseBodyUsersListUserDetail;
  static names(): { [key: string]: string } {
    return {
      skillLevels: 'SkillLevels',
      privateOutboundNumberId: 'PrivateOutboundNumberId',
      userId: 'UserId',
      roles: 'Roles',
      primary: 'Primary',
      instanceId: 'InstanceId',
      ramId: 'RamId',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillLevels: ListUsersResponseBodyUsersListUserSkillLevels,
      privateOutboundNumberId: 'string',
      userId: 'string',
      roles: ListUsersResponseBodyUsersListUserRoles,
      primary: 'boolean',
      instanceId: 'string',
      ramId: 'string',
      detail: ListUsersResponseBodyUsersListUserDetail,
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

export class ListUsersOfSkillGroupResponseBodyUsersListUserSkillLevelsSkillLevelSkill extends $tea.Model {
  skillGroupId?: string;
  skillGroupName?: string;
  instanceId?: string;
  skillGroupDescription?: string;
  static names(): { [key: string]: string } {
    return {
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      instanceId: 'InstanceId',
      skillGroupDescription: 'SkillGroupDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupId: 'string',
      skillGroupName: 'string',
      instanceId: 'string',
      skillGroupDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersOfSkillGroupResponseBodyUsersListUserSkillLevelsSkillLevel extends $tea.Model {
  skill?: ListUsersOfSkillGroupResponseBodyUsersListUserSkillLevelsSkillLevelSkill;
  skillLevelId?: string;
  level?: number;
  static names(): { [key: string]: string } {
    return {
      skill: 'Skill',
      skillLevelId: 'SkillLevelId',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skill: ListUsersOfSkillGroupResponseBodyUsersListUserSkillLevelsSkillLevelSkill,
      skillLevelId: 'string',
      level: 'number',
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

export class ListUsersOfSkillGroupResponseBodyUsersListUserRolesRolePrivilegesPrivilege extends $tea.Model {
  privilegeName?: string;
  privilegeId?: string;
  privilegeDescription?: string;
  static names(): { [key: string]: string } {
    return {
      privilegeName: 'PrivilegeName',
      privilegeId: 'PrivilegeId',
      privilegeDescription: 'PrivilegeDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privilegeName: 'string',
      privilegeId: 'string',
      privilegeDescription: 'string',
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
  roleDescription?: string;
  privileges?: ListUsersOfSkillGroupResponseBodyUsersListUserRolesRolePrivileges;
  userCount?: number;
  roleName?: string;
  instanceId?: string;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      roleDescription: 'RoleDescription',
      privileges: 'Privileges',
      userCount: 'UserCount',
      roleName: 'RoleName',
      instanceId: 'InstanceId',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleDescription: 'string',
      privileges: ListUsersOfSkillGroupResponseBodyUsersListUserRolesRolePrivileges,
      userCount: 'number',
      roleName: 'string',
      instanceId: 'string',
      roleId: 'string',
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

export class ListUsersOfSkillGroupResponseBodyUsersListUserDetail extends $tea.Model {
  displayName?: string;
  email?: string;
  loginName?: string;
  department?: string;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      email: 'Email',
      loginName: 'LoginName',
      department: 'Department',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      email: 'string',
      loginName: 'string',
      department: 'string',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersOfSkillGroupResponseBodyUsersListUser extends $tea.Model {
  skillLevels?: ListUsersOfSkillGroupResponseBodyUsersListUserSkillLevels;
  userId?: string;
  roles?: ListUsersOfSkillGroupResponseBodyUsersListUserRoles;
  instanceId?: string;
  ramId?: string;
  detail?: ListUsersOfSkillGroupResponseBodyUsersListUserDetail;
  static names(): { [key: string]: string } {
    return {
      skillLevels: 'SkillLevels',
      userId: 'UserId',
      roles: 'Roles',
      instanceId: 'InstanceId',
      ramId: 'RamId',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillLevels: ListUsersOfSkillGroupResponseBodyUsersListUserSkillLevels,
      userId: 'string',
      roles: ListUsersOfSkillGroupResponseBodyUsersListUserRoles,
      instanceId: 'string',
      ramId: 'string',
      detail: ListUsersOfSkillGroupResponseBodyUsersListUserDetail,
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
  trunks?: number;
  number?: string;
  remainingTime?: number;
  instanceId?: string;
  phoneNumberDescription?: string;
  phoneNumberId?: string;
  static names(): { [key: string]: string } {
    return {
      trunks: 'Trunks',
      number: 'Number',
      remainingTime: 'RemainingTime',
      instanceId: 'InstanceId',
      phoneNumberDescription: 'PhoneNumberDescription',
      phoneNumberId: 'PhoneNumberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trunks: 'number',
      number: 'string',
      remainingTime: 'number',
      instanceId: 'string',
      phoneNumberDescription: 'string',
      phoneNumberId: 'string',
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
  status?: string;
  lastModified?: string;
  version?: string;
  contactFlowVersionId?: string;
  contactFlowVersionDescription?: string;
  lastModifiedBy?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      lastModified: 'LastModified',
      version: 'Version',
      contactFlowVersionId: 'ContactFlowVersionId',
      contactFlowVersionDescription: 'ContactFlowVersionDescription',
      lastModifiedBy: 'LastModifiedBy',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      lastModified: 'string',
      version: 'string',
      contactFlowVersionId: 'string',
      contactFlowVersionDescription: 'string',
      lastModifiedBy: 'string',
      content: 'string',
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
  contactFlowDescription?: string;
  type?: string;
  phoneNumbers?: ListVoiceAppraiseResponseBodyContactFlowPhoneNumbers;
  contactFlowName?: string;
  versions?: ListVoiceAppraiseResponseBodyContactFlowVersions;
  instanceId?: string;
  contactFlowId?: string;
  appliedVersion?: string;
  static names(): { [key: string]: string } {
    return {
      contactFlowDescription: 'ContactFlowDescription',
      type: 'Type',
      phoneNumbers: 'PhoneNumbers',
      contactFlowName: 'ContactFlowName',
      versions: 'Versions',
      instanceId: 'InstanceId',
      contactFlowId: 'ContactFlowId',
      appliedVersion: 'AppliedVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowDescription: 'string',
      type: 'string',
      phoneNumbers: ListVoiceAppraiseResponseBodyContactFlowPhoneNumbers,
      contactFlowName: 'string',
      versions: ListVoiceAppraiseResponseBodyContactFlowVersions,
      instanceId: 'string',
      contactFlowId: 'string',
      appliedVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCabInstanceResponseBodyInstance extends $tea.Model {
  creationTime?: number;
  callCenterInstanceId?: string;
  owner?: string;
  instanceName?: string;
  maxConcurrentConversation?: number;
  instanceId?: string;
  instanceDescription?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      callCenterInstanceId: 'CallCenterInstanceId',
      owner: 'Owner',
      instanceName: 'InstanceName',
      maxConcurrentConversation: 'MaxConcurrentConversation',
      instanceId: 'InstanceId',
      instanceDescription: 'InstanceDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'number',
      callCenterInstanceId: 'string',
      owner: 'string',
      instanceName: 'string',
      maxConcurrentConversation: 'number',
      instanceId: 'string',
      instanceDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPhoneNumberResponseBodyPhoneNumberSkillGroupsSkillGroup extends $tea.Model {
  skillGroupName?: string;
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      skillGroupName: 'SkillGroupName',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupName: 'string',
      skillGroupId: 'string',
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

export class ModifyPhoneNumberResponseBodyPhoneNumberContactFlow extends $tea.Model {
  type?: string;
  contactFlowDescription?: string;
  contactFlowName?: string;
  instanceId?: string;
  contactFlowId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      contactFlowDescription: 'ContactFlowDescription',
      contactFlowName: 'ContactFlowName',
      instanceId: 'InstanceId',
      contactFlowId: 'ContactFlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      contactFlowDescription: 'string',
      contactFlowName: 'string',
      instanceId: 'string',
      contactFlowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPhoneNumberResponseBodyPhoneNumber extends $tea.Model {
  skillGroups?: ModifyPhoneNumberResponseBodyPhoneNumberSkillGroups;
  testOnly?: boolean;
  trunks?: number;
  remainingTime?: number;
  number?: string;
  instanceId?: string;
  usage?: string;
  allowOutbound?: boolean;
  phoneNumberDescription?: string;
  contactFlow?: ModifyPhoneNumberResponseBodyPhoneNumberContactFlow;
  phoneNumberId?: string;
  static names(): { [key: string]: string } {
    return {
      skillGroups: 'SkillGroups',
      testOnly: 'TestOnly',
      trunks: 'Trunks',
      remainingTime: 'RemainingTime',
      number: 'Number',
      instanceId: 'InstanceId',
      usage: 'Usage',
      allowOutbound: 'AllowOutbound',
      phoneNumberDescription: 'PhoneNumberDescription',
      contactFlow: 'ContactFlow',
      phoneNumberId: 'PhoneNumberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroups: ModifyPhoneNumberResponseBodyPhoneNumberSkillGroups,
      testOnly: 'boolean',
      trunks: 'number',
      remainingTime: 'number',
      number: 'string',
      instanceId: 'string',
      usage: 'string',
      allowOutbound: 'boolean',
      phoneNumberDescription: 'string',
      contactFlow: ModifyPhoneNumberResponseBodyPhoneNumberContactFlow,
      phoneNumberId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScenarioResponseBodyScenarioStrategyWorkingTime extends $tea.Model {
  endTime?: string;
  beginTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      beginTime: 'BeginTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      beginTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScenarioResponseBodyScenarioStrategy extends $tea.Model {
  type?: string;
  strategyName?: string;
  maxAttemptsPerDay?: number;
  workingTime?: ModifyScenarioResponseBodyScenarioStrategyWorkingTime[];
  followUpStrategy?: string;
  endTime?: number;
  customized?: string;
  startTime?: number;
  isTemplate?: boolean;
  strategyId?: string;
  repeatDays?: string[];
  routingStrategy?: string;
  strategyDescription?: string;
  minAttemptInterval?: number;
  repeatBy?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      strategyName: 'StrategyName',
      maxAttemptsPerDay: 'MaxAttemptsPerDay',
      workingTime: 'WorkingTime',
      followUpStrategy: 'FollowUpStrategy',
      endTime: 'EndTime',
      customized: 'Customized',
      startTime: 'StartTime',
      isTemplate: 'IsTemplate',
      strategyId: 'StrategyId',
      repeatDays: 'RepeatDays',
      routingStrategy: 'RoutingStrategy',
      strategyDescription: 'StrategyDescription',
      minAttemptInterval: 'MinAttemptInterval',
      repeatBy: 'RepeatBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      strategyName: 'string',
      maxAttemptsPerDay: 'number',
      workingTime: { 'type': 'array', 'itemType': ModifyScenarioResponseBodyScenarioStrategyWorkingTime },
      followUpStrategy: 'string',
      endTime: 'number',
      customized: 'string',
      startTime: 'number',
      isTemplate: 'boolean',
      strategyId: 'string',
      repeatDays: { 'type': 'array', 'itemType': 'string' },
      routingStrategy: 'string',
      strategyDescription: 'string',
      minAttemptInterval: 'number',
      repeatBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScenarioResponseBodyScenarioSurveysIntents extends $tea.Model {
  nodeId?: string;
  intentId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      intentId: 'IntentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      intentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScenarioResponseBodyScenarioSurveys extends $tea.Model {
  round?: number;
  surveyDescription?: string;
  beebotId?: string;
  intents?: ModifyScenarioResponseBodyScenarioSurveysIntents[];
  surveyName?: string;
  role?: string;
  surveyId?: string;
  static names(): { [key: string]: string } {
    return {
      round: 'Round',
      surveyDescription: 'SurveyDescription',
      beebotId: 'BeebotId',
      intents: 'Intents',
      surveyName: 'SurveyName',
      role: 'Role',
      surveyId: 'SurveyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      round: 'number',
      surveyDescription: 'string',
      beebotId: 'string',
      intents: { 'type': 'array', 'itemType': ModifyScenarioResponseBodyScenarioSurveysIntents },
      surveyName: 'string',
      role: 'string',
      surveyId: 'string',
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
  type?: string;
  scenarioId?: string;
  strategy?: ModifyScenarioResponseBodyScenarioStrategy;
  isTemplate?: boolean;
  scenarioDescription?: string;
  scenarioName?: string;
  surveys?: ModifyScenarioResponseBodyScenarioSurveys[];
  variables?: ModifyScenarioResponseBodyScenarioVariables[];
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      scenarioId: 'ScenarioId',
      strategy: 'Strategy',
      isTemplate: 'IsTemplate',
      scenarioDescription: 'ScenarioDescription',
      scenarioName: 'ScenarioName',
      surveys: 'Surveys',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      scenarioId: 'string',
      strategy: ModifyScenarioResponseBodyScenarioStrategy,
      isTemplate: 'boolean',
      scenarioDescription: 'string',
      scenarioName: 'string',
      surveys: { 'type': 'array', 'itemType': ModifyScenarioResponseBodyScenarioSurveys },
      variables: { 'type': 'array', 'itemType': ModifyScenarioResponseBodyScenarioVariables },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySurveyResponseBodySurveyAsrCustomModel extends $tea.Model {
  customModelStatus?: number;
  corpora?: string;
  static names(): { [key: string]: string } {
    return {
      customModelStatus: 'CustomModelStatus',
      corpora: 'Corpora',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customModelStatus: 'number',
      corpora: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySurveyResponseBodySurveyFlow extends $tea.Model {
  isPublished?: boolean;
  flowJson?: string;
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      isPublished: 'IsPublished',
      flowJson: 'FlowJson',
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isPublished: 'boolean',
      flowJson: 'string',
      flowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySurveyResponseBodySurvey extends $tea.Model {
  globalQuestions?: string;
  round?: number;
  speechOptimizationParam?: string;
  description?: string;
  hotWords?: string;
  asrCustomModel?: ModifySurveyResponseBodySurveyAsrCustomModel;
  flow?: ModifySurveyResponseBodySurveyFlow;
  role?: string;
  name?: string;
  scenarioUuid?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      globalQuestions: 'GlobalQuestions',
      round: 'Round',
      speechOptimizationParam: 'SpeechOptimizationParam',
      description: 'Description',
      hotWords: 'HotWords',
      asrCustomModel: 'AsrCustomModel',
      flow: 'Flow',
      role: 'Role',
      name: 'Name',
      scenarioUuid: 'ScenarioUuid',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalQuestions: 'string',
      round: 'number',
      speechOptimizationParam: 'string',
      description: 'string',
      hotWords: 'string',
      asrCustomModel: ModifySurveyResponseBodySurveyAsrCustomModel,
      flow: ModifySurveyResponseBodySurveyFlow,
      role: 'string',
      name: 'string',
      scenarioUuid: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickGlobalOutboundNumbersResponseBodyDialNumberPairsDialNumberPairCaller extends $tea.Model {
  number?: string;
  city?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      city: 'City',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      city: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickGlobalOutboundNumbersResponseBodyDialNumberPairsDialNumberPairCallee extends $tea.Model {
  number?: string;
  city?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      city: 'City',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      city: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickGlobalOutboundNumbersResponseBodyDialNumberPairsDialNumberPair extends $tea.Model {
  caller?: PickGlobalOutboundNumbersResponseBodyDialNumberPairsDialNumberPairCaller;
  callee?: PickGlobalOutboundNumbersResponseBodyDialNumberPairsDialNumberPairCallee;
  static names(): { [key: string]: string } {
    return {
      caller: 'Caller',
      callee: 'Callee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caller: PickGlobalOutboundNumbersResponseBodyDialNumberPairsDialNumberPairCaller,
      callee: PickGlobalOutboundNumbersResponseBodyDialNumberPairsDialNumberPairCallee,
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

export class PickLocalNumberResponseBodyDataCaller extends $tea.Model {
  number?: string;
  city?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      city: 'City',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      city: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickLocalNumberResponseBodyDataCallee extends $tea.Model {
  number?: string;
  city?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      city: 'City',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      city: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickLocalNumberResponseBodyData extends $tea.Model {
  caller?: PickLocalNumberResponseBodyDataCaller;
  callee?: PickLocalNumberResponseBodyDataCallee;
  static names(): { [key: string]: string } {
    return {
      caller: 'Caller',
      callee: 'Callee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caller: PickLocalNumberResponseBodyDataCaller,
      callee: PickLocalNumberResponseBodyDataCallee,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickOutboundNumbersResponseBodyDialNumberPairsDialNumberPairCaller extends $tea.Model {
  number?: string;
  city?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      city: 'City',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      city: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickOutboundNumbersResponseBodyDialNumberPairsDialNumberPairCallee extends $tea.Model {
  number?: string;
  city?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      city: 'City',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      city: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickOutboundNumbersResponseBodyDialNumberPairsDialNumberPair extends $tea.Model {
  caller?: PickOutboundNumbersResponseBodyDialNumberPairsDialNumberPairCaller;
  callee?: PickOutboundNumbersResponseBodyDialNumberPairsDialNumberPairCallee;
  static names(): { [key: string]: string } {
    return {
      caller: 'Caller',
      callee: 'Callee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caller: PickOutboundNumbersResponseBodyDialNumberPairsDialNumberPairCaller,
      callee: PickOutboundNumbersResponseBodyDialNumberPairsDialNumberPairCallee,
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
  signature?: string;
  signData?: string;
  static names(): { [key: string]: string } {
    return {
      signature: 'Signature',
      signData: 'SignData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signature: 'string',
      signData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestLoginInfoResponseBodyLoginInfoRolesRole extends $tea.Model {
  roleDescription?: string;
  instanceId?: string;
  roleName?: string;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      roleDescription: 'RoleDescription',
      instanceId: 'InstanceId',
      roleName: 'RoleName',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleDescription: 'string',
      instanceId: 'string',
      roleName: 'string',
      roleId: 'string',
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
  displayName?: string;
  signature?: string;
  extension?: string;
  signData?: string;
  phoneNumber?: string;
  region?: string;
  agentServerUrl?: string;
  roles?: RequestLoginInfoResponseBodyLoginInfoRoles;
  userName?: string;
  webRtcUrl?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      signature: 'Signature',
      extension: 'Extension',
      signData: 'SignData',
      phoneNumber: 'PhoneNumber',
      region: 'Region',
      agentServerUrl: 'AgentServerUrl',
      roles: 'Roles',
      userName: 'UserName',
      webRtcUrl: 'WebRtcUrl',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      signature: 'string',
      extension: 'string',
      signData: 'string',
      phoneNumber: 'string',
      region: 'string',
      agentServerUrl: 'string',
      roles: RequestLoginInfoResponseBodyLoginInfoRoles,
      userName: 'string',
      webRtcUrl: 'string',
      tenantId: 'string',
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

  async listScenarioTemplatesWithOptions(runtime: $Util.RuntimeOptions): Promise<ListScenarioTemplatesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListScenarioTemplatesResponse>(await this.doRPCRequest("ListScenarioTemplates", "2017-07-05", "HTTPS", "POST", "AK", "json", req, runtime), new ListScenarioTemplatesResponse({}));
  }

  async listScenarioTemplates(): Promise<ListScenarioTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listScenarioTemplatesWithOptions(runtime);
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
