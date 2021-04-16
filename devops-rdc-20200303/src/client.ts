// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class BatchInsertMembersRequest extends $tea.Model {
  orgId?: string;
  members?: string;
  realPk?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      members: 'Members',
      realPk: 'RealPk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      members: 'string',
      realPk: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchInsertMembersResponseBody extends $tea.Model {
  requestId?: string;
  object?: boolean;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      object: 'Object',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      object: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchInsertMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchInsertMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchInsertMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelPipelineRequest extends $tea.Model {
  orgId?: string;
  pipelineId?: number;
  flowInstanceId?: number;
  userPk?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      pipelineId: 'PipelineId',
      flowInstanceId: 'FlowInstanceId',
      userPk: 'UserPk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      pipelineId: 'number',
      flowInstanceId: 'number',
      userPk: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelPipelineResponseBody extends $tea.Model {
  requestId?: string;
  object?: boolean;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      object: 'Object',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      object: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelPipelineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelPipelineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelPipelineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAliyunAccountExistsRequest extends $tea.Model {
  userPk?: string;
  static names(): { [key: string]: string } {
    return {
      userPk: 'UserPk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPk: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAliyunAccountExistsResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: boolean;
  errorCode?: string;
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMsg: 'ErrorMsg',
      object: 'Object',
      errorCode: 'ErrorCode',
      successful: 'Successful',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMsg: 'string',
      object: 'boolean',
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAliyunAccountExistsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckAliyunAccountExistsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckAliyunAccountExistsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCommonGroupRequest extends $tea.Model {
  orgId?: string;
  projectId?: string;
  description?: string;
  smartGroupId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      projectId: 'ProjectId',
      description: 'Description',
      smartGroupId: 'SmartGroupId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      projectId: 'string',
      description: 'string',
      smartGroupId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCommonGroupResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: CreateCommonGroupResponseBodyObject;
  errorCode?: string;
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMsg: 'ErrorMsg',
      object: 'Object',
      errorCode: 'ErrorCode',
      successful: 'Successful',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMsg: 'string',
      object: CreateCommonGroupResponseBodyObject,
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCommonGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCommonGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCommonGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCredentialRequest extends $tea.Model {
  orgId?: string;
  name?: string;
  userName?: string;
  password?: string;
  type?: string;
  userPk?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      name: 'Name',
      userName: 'UserName',
      password: 'Password',
      type: 'Type',
      userPk: 'UserPk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      name: 'string',
      userName: 'string',
      password: 'string',
      type: 'string',
      userPk: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCredentialResponseBody extends $tea.Model {
  requestId?: string;
  object?: number;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      object: 'Object',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      object: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCredentialResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCredentialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCredentialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDevopsOrganizationRequest extends $tea.Model {
  orgName?: string;
  source?: string;
  realPk?: string;
  desiredMemberCount?: number;
  static names(): { [key: string]: string } {
    return {
      orgName: 'OrgName',
      source: 'Source',
      realPk: 'RealPk',
      desiredMemberCount: 'DesiredMemberCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgName: 'string',
      source: 'string',
      realPk: 'string',
      desiredMemberCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDevopsOrganizationResponseBody extends $tea.Model {
  requestId?: string;
  object?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      object: 'Object',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      object: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDevopsOrganizationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDevopsOrganizationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDevopsOrganizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDevopsProjectRequest extends $tea.Model {
  orgId?: string;
  name?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      name: 'Name',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      name: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDevopsProjectResponseBody extends $tea.Model {
  requestId?: string;
  object?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      object: 'Object',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      object: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDevopsProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDevopsProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDevopsProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDevopsProjectSprintRequest extends $tea.Model {
  orgId?: string;
  name?: string;
  description?: string;
  projectId?: string;
  executorId?: string;
  startDate?: string;
  dueDate?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      name: 'Name',
      description: 'Description',
      projectId: 'ProjectId',
      executorId: 'ExecutorId',
      startDate: 'StartDate',
      dueDate: 'DueDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      name: 'string',
      description: 'string',
      projectId: 'string',
      executorId: 'string',
      startDate: 'string',
      dueDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDevopsProjectSprintResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: CreateDevopsProjectSprintResponseBodyObject;
  errorCode?: string;
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMsg: 'ErrorMsg',
      object: 'Object',
      errorCode: 'ErrorCode',
      successful: 'Successful',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMsg: 'string',
      object: CreateDevopsProjectSprintResponseBodyObject,
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDevopsProjectSprintResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDevopsProjectSprintResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDevopsProjectSprintResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDevopsProjectTaskRequest extends $tea.Model {
  orgId?: string;
  content?: string;
  projectId?: string;
  executorId?: string;
  startDate?: string;
  dueDate?: string;
  scenarioFieldConfigId?: string;
  taskFlowStatusId?: string;
  note?: string;
  priority?: number;
  visible?: string;
  parentTaskId?: string;
  sprintId?: string;
  taskListId?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      content: 'Content',
      projectId: 'ProjectId',
      executorId: 'ExecutorId',
      startDate: 'StartDate',
      dueDate: 'DueDate',
      scenarioFieldConfigId: 'ScenarioFieldConfigId',
      taskFlowStatusId: 'TaskFlowStatusId',
      note: 'Note',
      priority: 'Priority',
      visible: 'Visible',
      parentTaskId: 'ParentTaskId',
      sprintId: 'SprintId',
      taskListId: 'TaskListId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      content: 'string',
      projectId: 'string',
      executorId: 'string',
      startDate: 'string',
      dueDate: 'string',
      scenarioFieldConfigId: 'string',
      taskFlowStatusId: 'string',
      note: 'string',
      priority: 'number',
      visible: 'string',
      parentTaskId: 'string',
      sprintId: 'string',
      taskListId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDevopsProjectTaskResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: CreateDevopsProjectTaskResponseBodyObject;
  errorCode?: string;
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMsg: 'ErrorMsg',
      object: 'Object',
      errorCode: 'ErrorCode',
      successful: 'Successful',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMsg: 'string',
      object: CreateDevopsProjectTaskResponseBodyObject,
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDevopsProjectTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDevopsProjectTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDevopsProjectTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineRequest extends $tea.Model {
  orgId?: string;
  pipeline?: string;
  userPk?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      pipeline: 'Pipeline',
      userPk: 'UserPk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      pipeline: 'string',
      userPk: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineResponseBody extends $tea.Model {
  requestId?: string;
  object?: number;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      object: 'Object',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      object: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreatePipelineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreatePipelineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceConnectionRequest extends $tea.Model {
  serviceConnectionType?: string;
  userPk?: string;
  orgId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceConnectionType: 'ServiceConnectionType',
      userPk: 'UserPk',
      orgId: 'OrgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceConnectionType: 'string',
      userPk: 'string',
      orgId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceConnectionResponseBody extends $tea.Model {
  requestId?: string;
  object?: number;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      object: 'Object',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      object: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateServiceConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateServiceConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCommonGroupRequest extends $tea.Model {
  orgId?: string;
  projectId?: string;
  commonGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      projectId: 'ProjectId',
      commonGroupId: 'CommonGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      projectId: 'string',
      commonGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCommonGroupResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: DeleteCommonGroupResponseBodyObject;
  errorCode?: string;
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMsg: 'ErrorMsg',
      object: 'Object',
      errorCode: 'ErrorCode',
      successful: 'Successful',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMsg: 'string',
      object: DeleteCommonGroupResponseBodyObject,
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCommonGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCommonGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCommonGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDevopsOrganizationMembersRequest extends $tea.Model {
  orgId?: string;
  userId?: string;
  realPk?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      userId: 'UserId',
      realPk: 'RealPk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      userId: 'string',
      realPk: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDevopsOrganizationMembersResponseBody extends $tea.Model {
  requestId?: string;
  object?: boolean;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      object: 'Object',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      object: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDevopsOrganizationMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDevopsOrganizationMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDevopsOrganizationMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDevopsProjectRequest extends $tea.Model {
  orgId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDevopsProjectResponseBody extends $tea.Model {
  requestId?: string;
  object?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      object: 'Object',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      object: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDevopsProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDevopsProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDevopsProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDevopsProjectMembersRequest extends $tea.Model {
  orgId?: string;
  projectId?: string;
  userIds?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      projectId: 'ProjectId',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      projectId: 'string',
      userIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDevopsProjectMembersResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: boolean;
  errorCode?: string;
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMsg: 'ErrorMsg',
      object: 'Object',
      errorCode: 'ErrorCode',
      successful: 'Successful',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMsg: 'string',
      object: 'boolean',
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDevopsProjectMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDevopsProjectMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDevopsProjectMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDevopsProjectSprintRequest extends $tea.Model {
  orgId?: string;
  sprintId?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      sprintId: 'SprintId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      sprintId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDevopsProjectSprintResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: boolean;
  errorCode?: string;
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMsg: 'ErrorMsg',
      object: 'Object',
      errorCode: 'ErrorCode',
      successful: 'Successful',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMsg: 'string',
      object: 'boolean',
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDevopsProjectSprintResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDevopsProjectSprintResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDevopsProjectSprintResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDevopsProjectTaskRequest extends $tea.Model {
  orgId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDevopsProjectTaskResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: boolean;
  errorCode?: string;
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMsg: 'ErrorMsg',
      object: 'Object',
      errorCode: 'ErrorCode',
      successful: 'Successful',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMsg: 'string',
      object: 'boolean',
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDevopsProjectTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDevopsProjectTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDevopsProjectTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePipelineMemberRequest extends $tea.Model {
  orgId?: string;
  pipelineId?: number;
  userPk?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      pipelineId: 'PipelineId',
      userPk: 'UserPk',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      pipelineId: 'number',
      userPk: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePipelineMemberResponseBody extends $tea.Model {
  requestId?: string;
  object?: boolean;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      object: 'Object',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      object: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePipelineMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeletePipelineMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeletePipelineMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecutePipelineRequest extends $tea.Model {
  orgId?: string;
  pipelineId?: number;
  parameters?: string;
  userPk?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      pipelineId: 'PipelineId',
      parameters: 'Parameters',
      userPk: 'UserPk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      pipelineId: 'number',
      parameters: 'string',
      userPk: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecutePipelineResponseBody extends $tea.Model {
  requestId?: string;
  object?: number;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      object: 'Object',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      object: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecutePipelineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExecutePipelineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExecutePipelineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevopsOrganizationMembersRequest extends $tea.Model {
  orgId?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevopsOrganizationMembersResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: GetDevopsOrganizationMembersResponseBodyObject[];
  errorCode?: string;
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMsg: 'ErrorMsg',
      object: 'Object',
      errorCode: 'ErrorCode',
      successful: 'Successful',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMsg: 'string',
      object: { 'type': 'array', 'itemType': GetDevopsOrganizationMembersResponseBodyObject },
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevopsOrganizationMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDevopsOrganizationMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDevopsOrganizationMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevopsProjectInfoRequest extends $tea.Model {
  orgId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevopsProjectInfoResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: GetDevopsProjectInfoResponseBodyObject;
  errorCode?: string;
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMsg: 'ErrorMsg',
      object: 'Object',
      errorCode: 'ErrorCode',
      successful: 'Successful',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMsg: 'string',
      object: GetDevopsProjectInfoResponseBodyObject,
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevopsProjectInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDevopsProjectInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDevopsProjectInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevopsProjectMembersRequest extends $tea.Model {
  orgId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevopsProjectMembersResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: GetDevopsProjectMembersResponseBodyObject[];
  errorCode?: string;
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMsg: 'ErrorMsg',
      object: 'Object',
      errorCode: 'ErrorCode',
      successful: 'Successful',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMsg: 'string',
      object: { 'type': 'array', 'itemType': GetDevopsProjectMembersResponseBodyObject },
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevopsProjectMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDevopsProjectMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDevopsProjectMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevopsProjectSprintInfoRequest extends $tea.Model {
  orgId?: string;
  sprintId?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      sprintId: 'SprintId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      sprintId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevopsProjectSprintInfoResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: GetDevopsProjectSprintInfoResponseBodyObject;
  errorCode?: string;
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMsg: 'ErrorMsg',
      object: 'Object',
      errorCode: 'ErrorCode',
      successful: 'Successful',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMsg: 'string',
      object: GetDevopsProjectSprintInfoResponseBodyObject,
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevopsProjectSprintInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDevopsProjectSprintInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDevopsProjectSprintInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevopsProjectTaskInfoRequest extends $tea.Model {
  orgId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevopsProjectTaskInfoResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: GetDevopsProjectTaskInfoResponseBodyObject;
  errorCode?: string;
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMsg: 'ErrorMsg',
      object: 'Object',
      errorCode: 'ErrorCode',
      successful: 'Successful',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMsg: 'string',
      object: GetDevopsProjectTaskInfoResponseBodyObject,
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevopsProjectTaskInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDevopsProjectTaskInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDevopsProjectTaskInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLastWorkspaceRequest extends $tea.Model {
  orgId?: string;
  realPk?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      realPk: 'RealPk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      realPk: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLastWorkspaceResponseBody extends $tea.Model {
  requestId?: string;
  object?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      object: 'Object',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      object: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLastWorkspaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetLastWorkspaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetLastWorkspaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineInstanceBuildNumberStatusRequest extends $tea.Model {
  orgId?: string;
  pipelineId?: number;
  userPk?: string;
  buildNum?: number;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      pipelineId: 'PipelineId',
      userPk: 'UserPk',
      buildNum: 'BuildNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      pipelineId: 'number',
      userPk: 'string',
      buildNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineInstanceBuildNumberStatusResponseBody extends $tea.Model {
  requestId?: string;
  object?: GetPipelineInstanceBuildNumberStatusResponseBodyObject;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      object: 'Object',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      object: GetPipelineInstanceBuildNumberStatusResponseBodyObject,
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineInstanceBuildNumberStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPipelineInstanceBuildNumberStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPipelineInstanceBuildNumberStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineInstanceGroupStatusRequest extends $tea.Model {
  orgId?: string;
  pipelineId?: number;
  userPk?: string;
  flowInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      pipelineId: 'PipelineId',
      userPk: 'UserPk',
      flowInstanceId: 'FlowInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      pipelineId: 'number',
      userPk: 'string',
      flowInstanceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineInstanceGroupStatusResponseBody extends $tea.Model {
  requestId?: string;
  object?: GetPipelineInstanceGroupStatusResponseBodyObject;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      object: 'Object',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      object: GetPipelineInstanceGroupStatusResponseBodyObject,
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineInstanceGroupStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPipelineInstanceGroupStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPipelineInstanceGroupStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineInstanceInfoRequest extends $tea.Model {
  orgId?: string;
  pipelineId?: number;
  flowInstanceId?: string;
  userPk?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      pipelineId: 'PipelineId',
      flowInstanceId: 'FlowInstanceId',
      userPk: 'UserPk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      pipelineId: 'number',
      flowInstanceId: 'string',
      userPk: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineInstanceInfoResponseBody extends $tea.Model {
  requestId?: string;
  object?: GetPipelineInstanceInfoResponseBodyObject;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      object: 'Object',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      object: GetPipelineInstanceInfoResponseBodyObject,
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineInstanceInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPipelineInstanceInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPipelineInstanceInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineInstanceStatusRequest extends $tea.Model {
  orgId?: string;
  pipelineId?: number;
  flowInstanceId?: number;
  userPk?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      pipelineId: 'PipelineId',
      flowInstanceId: 'FlowInstanceId',
      userPk: 'UserPk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      pipelineId: 'number',
      flowInstanceId: 'number',
      userPk: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineInstanceStatusResponseBody extends $tea.Model {
  requestId?: string;
  object?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      object: 'Object',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      object: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineInstanceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPipelineInstanceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPipelineInstanceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineInstHistoryRequest extends $tea.Model {
  orgId?: string;
  pipelineId?: number;
  userPk?: string;
  startTime?: string;
  endTime?: string;
  pageStart?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      pipelineId: 'PipelineId',
      userPk: 'UserPk',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageStart: 'PageStart',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      pipelineId: 'number',
      userPk: 'string',
      startTime: 'string',
      endTime: 'string',
      pageStart: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineInstHistoryResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetPipelineInstHistoryResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetPipelineInstHistoryResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineInstHistoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPipelineInstHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPipelineInstHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineLogRequest extends $tea.Model {
  orgId?: string;
  pipelineId?: number;
  userPk?: string;
  jobId?: number;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      pipelineId: 'PipelineId',
      userPk: 'UserPk',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      pipelineId: 'number',
      userPk: 'string',
      jobId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineLogResponseBody extends $tea.Model {
  requestId?: string;
  object?: GetPipelineLogResponseBodyObject[];
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      object: 'Object',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      object: { 'type': 'array', 'itemType': GetPipelineLogResponseBodyObject },
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPipelineLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPipelineLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineStepLogRequest extends $tea.Model {
  orgId?: string;
  pipelineId?: number;
  userPk?: string;
  jobId?: number;
  stepIndex?: string;
  offset?: number;
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      pipelineId: 'PipelineId',
      userPk: 'UserPk',
      jobId: 'JobId',
      stepIndex: 'StepIndex',
      offset: 'Offset',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      pipelineId: 'number',
      userPk: 'string',
      jobId: 'number',
      stepIndex: 'string',
      offset: 'number',
      limit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineStepLogResponseBody extends $tea.Model {
  requestId?: string;
  object?: GetPipelineStepLogResponseBodyObject;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      object: 'Object',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      object: GetPipelineStepLogResponseBodyObject,
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineStepLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPipelineStepLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPipelineStepLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipleineLatestInstanceStatusRequest extends $tea.Model {
  orgId?: string;
  pipelineId?: number;
  userPk?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      pipelineId: 'PipelineId',
      userPk: 'UserPk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      pipelineId: 'number',
      userPk: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipleineLatestInstanceStatusResponseBody extends $tea.Model {
  requestId?: string;
  object?: GetPipleineLatestInstanceStatusResponseBodyObject;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      object: 'Object',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      object: GetPipleineLatestInstanceStatusResponseBodyObject,
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipleineLatestInstanceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPipleineLatestInstanceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPipleineLatestInstanceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectOptionRequest extends $tea.Model {
  orgId?: string;
  projectId?: string;
  type?: string;
  query?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      projectId: 'ProjectId',
      type: 'Type',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      projectId: 'string',
      type: 'string',
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectOptionResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: GetProjectOptionResponseBodyObject[];
  errorCode?: string;
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMsg: 'ErrorMsg',
      object: 'Object',
      errorCode: 'ErrorCode',
      successful: 'Successful',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMsg: 'string',
      object: { 'type': 'array', 'itemType': GetProjectOptionResponseBodyObject },
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectOptionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetProjectOptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetProjectOptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskDetailActivityRequest extends $tea.Model {
  orgId?: string;
  projectId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      projectId: 'ProjectId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      projectId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskDetailActivityResponseBody extends $tea.Model {
  requestId?: string;
  httpStatusCode?: number;
  errorMsg?: string;
  object?: GetTaskDetailActivityResponseBodyObject[];
  errorCode?: string;
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      errorMsg: 'ErrorMsg',
      object: 'Object',
      errorCode: 'ErrorCode',
      successful: 'Successful',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      httpStatusCode: 'number',
      errorMsg: 'string',
      object: { 'type': 'array', 'itemType': GetTaskDetailActivityResponseBodyObject },
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskDetailActivityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTaskDetailActivityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTaskDetailActivityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskDetailBaseRequest extends $tea.Model {
  orgId?: string;
  projectId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      projectId: 'ProjectId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      projectId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskDetailBaseResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: GetTaskDetailBaseResponseBodyObject;
  errorCode?: string;
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMsg: 'ErrorMsg',
      object: 'Object',
      errorCode: 'ErrorCode',
      successful: 'Successful',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMsg: 'string',
      object: GetTaskDetailBaseResponseBodyObject,
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskDetailBaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTaskDetailBaseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTaskDetailBaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskListFilterRequest extends $tea.Model {
  orgId?: string;
  projectId?: string;
  scenarioFieldConfigId?: string;
  name?: string;
  orderCondition?: string;
  order?: string;
  executorId?: string;
  tagId?: string;
  dueDateStart?: string;
  dueDateEnd?: string;
  creatorId?: string;
  involveMembers?: string;
  isDone?: boolean;
  priority?: string;
  pageSize?: number;
  pageToken?: string;
  objectType?: string;
  taskFlowStatusId?: string;
  sprintId?: string;
  extra?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      projectId: 'ProjectId',
      scenarioFieldConfigId: 'ScenarioFieldConfigId',
      name: 'Name',
      orderCondition: 'OrderCondition',
      order: 'Order',
      executorId: 'ExecutorId',
      tagId: 'TagId',
      dueDateStart: 'DueDateStart',
      dueDateEnd: 'DueDateEnd',
      creatorId: 'CreatorId',
      involveMembers: 'InvolveMembers',
      isDone: 'IsDone',
      priority: 'Priority',
      pageSize: 'PageSize',
      pageToken: 'PageToken',
      objectType: 'ObjectType',
      taskFlowStatusId: 'TaskFlowStatusId',
      sprintId: 'SprintId',
      extra: 'Extra',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      projectId: 'string',
      scenarioFieldConfigId: 'string',
      name: 'string',
      orderCondition: 'string',
      order: 'string',
      executorId: 'string',
      tagId: 'string',
      dueDateStart: 'string',
      dueDateEnd: 'string',
      creatorId: 'string',
      involveMembers: 'string',
      isDone: 'boolean',
      priority: 'string',
      pageSize: 'number',
      pageToken: 'string',
      objectType: 'string',
      taskFlowStatusId: 'string',
      sprintId: 'string',
      extra: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskListFilterResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: GetTaskListFilterResponseBodyObject;
  errorCode?: string;
  successful?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMsg: 'ErrorMsg',
      object: 'Object',
      errorCode: 'ErrorCode',
      successful: 'Successful',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMsg: 'string',
      object: GetTaskListFilterResponseBodyObject,
      errorCode: 'string',
      successful: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskListFilterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTaskListFilterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTaskListFilterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByAliyunUidRequest extends $tea.Model {
  orgId?: string;
  userPk?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      userPk: 'UserPk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      userPk: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByAliyunUidResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: GetUserByAliyunUidResponseBodyObject;
  errorCode?: string;
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMsg: 'ErrorMsg',
      object: 'Object',
      errorCode: 'ErrorCode',
      successful: 'Successful',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMsg: 'string',
      object: GetUserByAliyunUidResponseBodyObject,
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByAliyunUidResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetUserByAliyunUidResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUserByAliyunUidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserNameRequest extends $tea.Model {
  orgId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserNameResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: string;
  errorCode?: string;
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMsg: 'ErrorMsg',
      object: 'Object',
      errorCode: 'ErrorCode',
      successful: 'Successful',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMsg: 'string',
      object: 'string',
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetUserNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUserNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertDevopsUserRequest extends $tea.Model {
  userPk?: string;
  userName?: string;
  phone?: string;
  email?: string;
  static names(): { [key: string]: string } {
    return {
      userPk: 'UserPk',
      userName: 'UserName',
      phone: 'Phone',
      email: 'Email',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPk: 'string',
      userName: 'string',
      phone: 'string',
      email: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertDevopsUserResponseBody extends $tea.Model {
  requestId?: string;
  object?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      object: 'Object',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      object: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertDevopsUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InsertDevopsUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InsertDevopsUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertPipelineMemberRequest extends $tea.Model {
  orgId?: string;
  pipelineId?: number;
  userPk?: string;
  userId?: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      pipelineId: 'PipelineId',
      userPk: 'UserPk',
      userId: 'UserId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      pipelineId: 'number',
      userPk: 'string',
      userId: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertPipelineMemberResponseBody extends $tea.Model {
  requestId?: string;
  object?: boolean;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      object: 'Object',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      object: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertPipelineMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InsertPipelineMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InsertPipelineMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertProjectMembersRequest extends $tea.Model {
  orgId?: string;
  projectId?: string;
  members?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      projectId: 'ProjectId',
      members: 'Members',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      projectId: 'string',
      members: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertProjectMembersResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: boolean;
  errorCode?: string;
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMsg: 'ErrorMsg',
      object: 'Object',
      errorCode: 'ErrorCode',
      successful: 'Successful',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMsg: 'string',
      object: 'boolean',
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertProjectMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InsertProjectMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InsertProjectMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommonGroupRequest extends $tea.Model {
  orgId?: string;
  projectId?: string;
  smartGroupId?: string;
  all?: boolean;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      projectId: 'ProjectId',
      smartGroupId: 'SmartGroupId',
      all: 'All',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      projectId: 'string',
      smartGroupId: 'string',
      all: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommonGroupResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: ListCommonGroupResponseBodyObject[];
  errorCode?: string;
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMsg: 'ErrorMsg',
      object: 'Object',
      errorCode: 'ErrorCode',
      successful: 'Successful',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMsg: 'string',
      object: { 'type': 'array', 'itemType': ListCommonGroupResponseBodyObject },
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommonGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCommonGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCommonGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCredentialsRequest extends $tea.Model {
  orgId?: string;
  userPk?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      userPk: 'UserPk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      userPk: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCredentialsResponseBody extends $tea.Model {
  requestId?: string;
  object?: { [key: string]: any }[];
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      object: 'Object',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      object: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCredentialsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCredentialsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCredentialsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevopsProjectSprintsRequest extends $tea.Model {
  orgId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevopsProjectSprintsResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: ListDevopsProjectSprintsResponseBodyObject[];
  errorCode?: string;
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMsg: 'ErrorMsg',
      object: 'Object',
      errorCode: 'ErrorCode',
      successful: 'Successful',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMsg: 'string',
      object: { 'type': 'array', 'itemType': ListDevopsProjectSprintsResponseBodyObject },
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevopsProjectSprintsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDevopsProjectSprintsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDevopsProjectSprintsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevopsProjectTaskFlowRequest extends $tea.Model {
  orgId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevopsProjectTaskFlowResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: ListDevopsProjectTaskFlowResponseBodyObject[];
  errorCode?: string;
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMsg: 'ErrorMsg',
      object: 'Object',
      errorCode: 'ErrorCode',
      successful: 'Successful',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMsg: 'string',
      object: { 'type': 'array', 'itemType': ListDevopsProjectTaskFlowResponseBodyObject },
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevopsProjectTaskFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDevopsProjectTaskFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDevopsProjectTaskFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevopsProjectTaskFlowStatusRequest extends $tea.Model {
  orgId?: string;
  taskFlowId?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      taskFlowId: 'TaskFlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      taskFlowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevopsProjectTaskFlowStatusResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: ListDevopsProjectTaskFlowStatusResponseBodyObject[];
  errorCode?: string;
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMsg: 'ErrorMsg',
      object: 'Object',
      errorCode: 'ErrorCode',
      successful: 'Successful',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMsg: 'string',
      object: { 'type': 'array', 'itemType': ListDevopsProjectTaskFlowStatusResponseBodyObject },
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevopsProjectTaskFlowStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDevopsProjectTaskFlowStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDevopsProjectTaskFlowStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevopsProjectTaskListRequest extends $tea.Model {
  orgId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevopsProjectTaskListResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: ListDevopsProjectTaskListResponseBodyObject;
  errorCode?: string;
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMsg: 'ErrorMsg',
      object: 'Object',
      errorCode: 'ErrorCode',
      successful: 'Successful',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMsg: 'string',
      object: ListDevopsProjectTaskListResponseBodyObject,
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevopsProjectTaskListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDevopsProjectTaskListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDevopsProjectTaskListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevopsProjectTasksRequest extends $tea.Model {
  orgId?: string;
  projectIds?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      projectIds: 'ProjectIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      projectIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevopsProjectTasksResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: ListDevopsProjectTasksResponseBodyObject[];
  errorCode?: string;
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMsg: 'ErrorMsg',
      object: 'Object',
      errorCode: 'ErrorCode',
      successful: 'Successful',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMsg: 'string',
      object: { 'type': 'array', 'itemType': ListDevopsProjectTasksResponseBodyObject },
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevopsProjectTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDevopsProjectTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDevopsProjectTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevopsScenarioFieldConfigRequest extends $tea.Model {
  orgId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevopsScenarioFieldConfigResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: ListDevopsScenarioFieldConfigResponseBodyObject[];
  errorCode?: string;
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMsg: 'ErrorMsg',
      object: 'Object',
      errorCode: 'ErrorCode',
      successful: 'Successful',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMsg: 'string',
      object: { 'type': 'array', 'itemType': ListDevopsScenarioFieldConfigResponseBodyObject },
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevopsScenarioFieldConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDevopsScenarioFieldConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDevopsScenarioFieldConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelinesRequest extends $tea.Model {
  orgId?: string;
  pipelineName?: string;
  creators?: string;
  operators?: string;
  resultStatusList?: string;
  createStartTime?: string;
  createEndTime?: string;
  executeStartTime?: string;
  executeEndTime?: string;
  pageSize?: number;
  pageStart?: number;
  userPk?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      pipelineName: 'PipelineName',
      creators: 'Creators',
      operators: 'Operators',
      resultStatusList: 'ResultStatusList',
      createStartTime: 'CreateStartTime',
      createEndTime: 'CreateEndTime',
      executeStartTime: 'ExecuteStartTime',
      executeEndTime: 'ExecuteEndTime',
      pageSize: 'PageSize',
      pageStart: 'PageStart',
      userPk: 'UserPk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      pipelineName: 'string',
      creators: 'string',
      operators: 'string',
      resultStatusList: 'string',
      createStartTime: 'string',
      createEndTime: 'string',
      executeStartTime: 'string',
      executeEndTime: 'string',
      pageSize: 'number',
      pageStart: 'number',
      userPk: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelinesResponseBody extends $tea.Model {
  requestId?: string;
  object?: { [key: string]: any };
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      object: 'Object',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      object: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelinesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPipelinesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPipelinesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectCustomFieldsRequest extends $tea.Model {
  orgId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectCustomFieldsResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: ListProjectCustomFieldsResponseBodyObject[];
  errorCode?: string;
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMsg: 'ErrorMsg',
      object: 'Object',
      errorCode: 'ErrorCode',
      successful: 'Successful',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMsg: 'string',
      object: { 'type': 'array', 'itemType': ListProjectCustomFieldsResponseBodyObject },
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectCustomFieldsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListProjectCustomFieldsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListProjectCustomFieldsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceConnectionsRequest extends $tea.Model {
  orgId?: string;
  scType?: string;
  userPk?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      scType: 'ScType',
      userPk: 'UserPk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      scType: 'string',
      userPk: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceConnectionsResponseBody extends $tea.Model {
  requestId?: string;
  object?: { [key: string]: any }[];
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      object: 'Object',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      object: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceConnectionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListServiceConnectionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListServiceConnectionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartGroupRequest extends $tea.Model {
  orgId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartGroupResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: ListSmartGroupResponseBodyObject[];
  errorCode?: string;
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMsg: 'ErrorMsg',
      object: 'Object',
      errorCode: 'ErrorCode',
      successful: 'Successful',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMsg: 'string',
      object: { 'type': 'array', 'itemType': ListSmartGroupResponseBodyObject },
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSmartGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSmartGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserOrganizationRequest extends $tea.Model {
  realPk?: string;
  static names(): { [key: string]: string } {
    return {
      realPk: 'RealPk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realPk: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserOrganizationResponseBody extends $tea.Model {
  requestId?: string;
  object?: ListUserOrganizationResponseBodyObject[];
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      object: 'Object',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      object: { 'type': 'array', 'itemType': ListUserOrganizationResponseBodyObject },
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserOrganizationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUserOrganizationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUserOrganizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferPipelineOwnerRequest extends $tea.Model {
  orgId?: string;
  pipelineId?: number;
  userPk?: string;
  newOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      pipelineId: 'PipelineId',
      userPk: 'UserPk',
      newOwnerId: 'NewOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      pipelineId: 'number',
      userPk: 'string',
      newOwnerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferPipelineOwnerResponseBody extends $tea.Model {
  requestId?: string;
  object?: { [key: string]: any };
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      object: 'Object',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      object: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferPipelineOwnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TransferPipelineOwnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TransferPipelineOwnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCommonGroupRequest extends $tea.Model {
  orgId?: string;
  projectId?: string;
  description?: string;
  smartGroupId?: string;
  commonGroupId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      projectId: 'ProjectId',
      description: 'Description',
      smartGroupId: 'SmartGroupId',
      commonGroupId: 'CommonGroupId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      projectId: 'string',
      description: 'string',
      smartGroupId: 'string',
      commonGroupId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCommonGroupResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: UpdateCommonGroupResponseBodyObject;
  errorCode?: string;
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMsg: 'ErrorMsg',
      object: 'Object',
      errorCode: 'ErrorCode',
      successful: 'Successful',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMsg: 'string',
      object: UpdateCommonGroupResponseBodyObject,
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCommonGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateCommonGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateCommonGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDevopsProjectRequest extends $tea.Model {
  orgId?: string;
  name?: string;
  description?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      name: 'Name',
      description: 'Description',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      name: 'string',
      description: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDevopsProjectResponseBody extends $tea.Model {
  requestId?: string;
  object?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      object: 'Object',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      object: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDevopsProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDevopsProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDevopsProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDevopsProjectSprintRequest extends $tea.Model {
  orgId?: string;
  name?: string;
  description?: string;
  projectId?: string;
  executorId?: string;
  startDate?: string;
  dueDate?: string;
  sprintId?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      name: 'Name',
      description: 'Description',
      projectId: 'ProjectId',
      executorId: 'ExecutorId',
      startDate: 'StartDate',
      dueDate: 'DueDate',
      sprintId: 'SprintId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      name: 'string',
      description: 'string',
      projectId: 'string',
      executorId: 'string',
      startDate: 'string',
      dueDate: 'string',
      sprintId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDevopsProjectSprintResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: boolean;
  errorCode?: string;
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMsg: 'ErrorMsg',
      object: 'Object',
      errorCode: 'ErrorCode',
      successful: 'Successful',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMsg: 'string',
      object: 'boolean',
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDevopsProjectSprintResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDevopsProjectSprintResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDevopsProjectSprintResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDevopsProjectTaskRequest extends $tea.Model {
  orgId?: string;
  content?: string;
  projectId?: string;
  executorId?: string;
  startDate?: string;
  dueDate?: string;
  scenarioFiieldConfigId?: string;
  taskFlowStatusId?: string;
  note?: string;
  priority?: number;
  visible?: string;
  parentTaskId?: string;
  sprintId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      content: 'Content',
      projectId: 'ProjectId',
      executorId: 'ExecutorId',
      startDate: 'StartDate',
      dueDate: 'DueDate',
      scenarioFiieldConfigId: 'ScenarioFiieldConfigId',
      taskFlowStatusId: 'TaskFlowStatusId',
      note: 'Note',
      priority: 'Priority',
      visible: 'Visible',
      parentTaskId: 'ParentTaskId',
      sprintId: 'SprintId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      content: 'string',
      projectId: 'string',
      executorId: 'string',
      startDate: 'string',
      dueDate: 'string',
      scenarioFiieldConfigId: 'string',
      taskFlowStatusId: 'string',
      note: 'string',
      priority: 'number',
      visible: 'string',
      parentTaskId: 'string',
      sprintId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDevopsProjectTaskResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: boolean;
  errorCode?: string;
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMsg: 'ErrorMsg',
      object: 'Object',
      errorCode: 'ErrorCode',
      successful: 'Successful',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMsg: 'string',
      object: 'boolean',
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDevopsProjectTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDevopsProjectTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDevopsProjectTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePipelineMemberRequest extends $tea.Model {
  orgId?: string;
  pipelineId?: number;
  userPk?: string;
  userId?: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      pipelineId: 'PipelineId',
      userPk: 'UserPk',
      userId: 'UserId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      pipelineId: 'number',
      userPk: 'string',
      userId: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePipelineMemberResponseBody extends $tea.Model {
  requestId?: string;
  object?: boolean;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      object: 'Object',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      object: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePipelineMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdatePipelineMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdatePipelineMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskDetailRequest extends $tea.Model {
  orgId?: string;
  content?: string;
  projectId?: string;
  executorId?: string;
  startDate?: string;
  dueDate?: string;
  taskFlowStatusId?: string;
  note?: string;
  priority?: number;
  sprintId?: string;
  taskId?: string;
  workTimes?: number;
  customFieldId?: string;
  customFieldValues?: string;
  storyPoint?: string;
  tagIds?: string;
  delInvolvers?: string;
  addInvolvers?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      content: 'Content',
      projectId: 'ProjectId',
      executorId: 'ExecutorId',
      startDate: 'StartDate',
      dueDate: 'DueDate',
      taskFlowStatusId: 'TaskFlowStatusId',
      note: 'Note',
      priority: 'Priority',
      sprintId: 'SprintId',
      taskId: 'TaskId',
      workTimes: 'WorkTimes',
      customFieldId: 'CustomFieldId',
      customFieldValues: 'CustomFieldValues',
      storyPoint: 'StoryPoint',
      tagIds: 'TagIds',
      delInvolvers: 'DelInvolvers',
      addInvolvers: 'AddInvolvers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      content: 'string',
      projectId: 'string',
      executorId: 'string',
      startDate: 'string',
      dueDate: 'string',
      taskFlowStatusId: 'string',
      note: 'string',
      priority: 'number',
      sprintId: 'string',
      taskId: 'string',
      workTimes: 'number',
      customFieldId: 'string',
      customFieldValues: 'string',
      storyPoint: 'string',
      tagIds: 'string',
      delInvolvers: 'string',
      addInvolvers: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskDetailResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: boolean;
  errorCode?: string;
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMsg: 'ErrorMsg',
      object: 'Object',
      errorCode: 'ErrorCode',
      successful: 'Successful',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMsg: 'string',
      object: 'boolean',
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateTaskDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateTaskDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCommonGroupResponseBodyObject extends $tea.Model {
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

export class CreateDevopsProjectSprintResponseBodyObjectPlanToDo extends $tea.Model {
  tasks?: number;
  workTimes?: number;
  storyPoints?: number;
  static names(): { [key: string]: string } {
    return {
      tasks: 'Tasks',
      workTimes: 'WorkTimes',
      storyPoints: 'StoryPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tasks: 'number',
      workTimes: 'number',
      storyPoints: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDevopsProjectSprintResponseBodyObject extends $tea.Model {
  status?: string;
  projectId?: string;
  startDate?: string;
  creatorId?: string;
  executor?: string;
  description?: string;
  accomplished?: string;
  isDeleted?: boolean;
  updated?: string;
  dueDate?: string;
  name?: string;
  created?: string;
  planToDo?: CreateDevopsProjectSprintResponseBodyObjectPlanToDo;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      projectId: 'ProjectId',
      startDate: 'StartDate',
      creatorId: 'CreatorId',
      executor: 'Executor',
      description: 'Description',
      accomplished: 'Accomplished',
      isDeleted: 'IsDeleted',
      updated: 'Updated',
      dueDate: 'DueDate',
      name: 'Name',
      created: 'Created',
      planToDo: 'PlanToDo',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      projectId: 'string',
      startDate: 'string',
      creatorId: 'string',
      executor: 'string',
      description: 'string',
      accomplished: 'string',
      isDeleted: 'boolean',
      updated: 'string',
      dueDate: 'string',
      name: 'string',
      created: 'string',
      planToDo: CreateDevopsProjectSprintResponseBodyObjectPlanToDo,
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDevopsProjectTaskResponseBodyObject extends $tea.Model {
  executorId?: string;
  projectId?: string;
  priority?: number;
  scenarioFieldConfigId?: string;
  ancestorIds?: string;
  taskType?: string;
  tasklistId?: string;
  taskflowstatusId?: string;
  note?: string;
  updated?: string;
  uniqueId?: number;
  content?: string;
  rating?: number;
  pos?: number;
  startDate?: string;
  storyPoint?: string;
  creatorId?: string;
  source?: string;
  organizationId?: string;
  visible?: string;
  isDone?: boolean;
  sprintId?: string;
  dueDate?: string;
  created?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      executorId: 'ExecutorId',
      projectId: 'ProjectId',
      priority: 'Priority',
      scenarioFieldConfigId: 'ScenarioFieldConfigId',
      ancestorIds: 'AncestorIds',
      taskType: 'TaskType',
      tasklistId: 'TasklistId',
      taskflowstatusId: 'TaskflowstatusId',
      note: 'Note',
      updated: 'Updated',
      uniqueId: 'UniqueId',
      content: 'Content',
      rating: 'Rating',
      pos: 'Pos',
      startDate: 'StartDate',
      storyPoint: 'StoryPoint',
      creatorId: 'CreatorId',
      source: 'Source',
      organizationId: 'OrganizationId',
      visible: 'Visible',
      isDone: 'IsDone',
      sprintId: 'SprintId',
      dueDate: 'DueDate',
      created: 'Created',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorId: 'string',
      projectId: 'string',
      priority: 'number',
      scenarioFieldConfigId: 'string',
      ancestorIds: 'string',
      taskType: 'string',
      tasklistId: 'string',
      taskflowstatusId: 'string',
      note: 'string',
      updated: 'string',
      uniqueId: 'number',
      content: 'string',
      rating: 'number',
      pos: 'number',
      startDate: 'string',
      storyPoint: 'string',
      creatorId: 'string',
      source: 'string',
      organizationId: 'string',
      visible: 'string',
      isDone: 'boolean',
      sprintId: 'string',
      dueDate: 'string',
      created: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCommonGroupResponseBodyObject extends $tea.Model {
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

export class GetDevopsOrganizationMembersResponseBodyObject extends $tea.Model {
  email?: string;
  avatarUrl?: string;
  userId?: string;
  memberId?: string;
  role?: number;
  name?: string;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      avatarUrl: 'AvatarUrl',
      userId: 'UserId',
      memberId: 'MemberId',
      role: 'Role',
      name: 'Name',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      avatarUrl: 'string',
      userId: 'string',
      memberId: 'string',
      role: 'number',
      name: 'string',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevopsProjectInfoResponseBodyObject extends $tea.Model {
  sortMethod?: string;
  uniqueIdPrefix?: string;
  normalType?: string;
  modifierId?: string;
  sourceType?: string;
  isTemplate?: boolean;
  description?: string;
  defaultRoleId?: string;
  rootCollectionId?: string;
  isDeleted?: boolean;
  updated?: string;
  isArchived?: boolean;
  name?: string;
  endDate?: string;
  logo?: string;
  startDate?: string;
  pinyin?: string;
  creatorId?: string;
  sourceId?: string;
  organizationId?: string;
  isSuspended?: boolean;
  defaultCollectionId?: string;
  visibility?: string;
  py?: string;
  category?: string;
  nextTaskUniqueId?: number;
  customfields?: string;
  created?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      sortMethod: 'SortMethod',
      uniqueIdPrefix: 'UniqueIdPrefix',
      normalType: 'NormalType',
      modifierId: 'ModifierId',
      sourceType: 'SourceType',
      isTemplate: 'IsTemplate',
      description: 'Description',
      defaultRoleId: 'DefaultRoleId',
      rootCollectionId: 'RootCollectionId',
      isDeleted: 'IsDeleted',
      updated: 'Updated',
      isArchived: 'IsArchived',
      name: 'Name',
      endDate: 'EndDate',
      logo: 'Logo',
      startDate: 'StartDate',
      pinyin: 'Pinyin',
      creatorId: 'CreatorId',
      sourceId: 'SourceId',
      organizationId: 'OrganizationId',
      isSuspended: 'IsSuspended',
      defaultCollectionId: 'DefaultCollectionId',
      visibility: 'Visibility',
      py: 'Py',
      category: 'Category',
      nextTaskUniqueId: 'NextTaskUniqueId',
      customfields: 'Customfields',
      created: 'Created',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sortMethod: 'string',
      uniqueIdPrefix: 'string',
      normalType: 'string',
      modifierId: 'string',
      sourceType: 'string',
      isTemplate: 'boolean',
      description: 'string',
      defaultRoleId: 'string',
      rootCollectionId: 'string',
      isDeleted: 'boolean',
      updated: 'string',
      isArchived: 'boolean',
      name: 'string',
      endDate: 'string',
      logo: 'string',
      startDate: 'string',
      pinyin: 'string',
      creatorId: 'string',
      sourceId: 'string',
      organizationId: 'string',
      isSuspended: 'boolean',
      defaultCollectionId: 'string',
      visibility: 'string',
      py: 'string',
      category: 'string',
      nextTaskUniqueId: 'number',
      customfields: 'string',
      created: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevopsProjectMembersResponseBodyObject extends $tea.Model {
  email?: string;
  avatarUrl?: string;
  userId?: string;
  memberId?: string;
  role?: number;
  name?: string;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      avatarUrl: 'AvatarUrl',
      userId: 'UserId',
      memberId: 'MemberId',
      role: 'Role',
      name: 'Name',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      avatarUrl: 'string',
      userId: 'string',
      memberId: 'string',
      role: 'number',
      name: 'string',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevopsProjectSprintInfoResponseBodyObjectPlanToDo extends $tea.Model {
  tasks?: number;
  workTimes?: number;
  storyPoints?: number;
  static names(): { [key: string]: string } {
    return {
      tasks: 'Tasks',
      workTimes: 'WorkTimes',
      storyPoints: 'StoryPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tasks: 'number',
      workTimes: 'number',
      storyPoints: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevopsProjectSprintInfoResponseBodyObject extends $tea.Model {
  status?: string;
  projectId?: string;
  startDate?: string;
  creatorId?: string;
  accomplished?: string;
  isDeleted?: boolean;
  updated?: string;
  dueDate?: string;
  name?: string;
  created?: string;
  planToDo?: GetDevopsProjectSprintInfoResponseBodyObjectPlanToDo;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      projectId: 'ProjectId',
      startDate: 'StartDate',
      creatorId: 'CreatorId',
      accomplished: 'Accomplished',
      isDeleted: 'IsDeleted',
      updated: 'Updated',
      dueDate: 'DueDate',
      name: 'Name',
      created: 'Created',
      planToDo: 'PlanToDo',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      projectId: 'string',
      startDate: 'string',
      creatorId: 'string',
      accomplished: 'string',
      isDeleted: 'boolean',
      updated: 'string',
      dueDate: 'string',
      name: 'string',
      created: 'string',
      planToDo: GetDevopsProjectSprintInfoResponseBodyObjectPlanToDo,
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevopsProjectTaskInfoResponseBodyObject extends $tea.Model {
  executorId?: string;
  projectId?: string;
  storyPoint?: string;
  startDate?: string;
  isTopInProject?: boolean;
  priority?: string;
  creatorId?: string;
  organizationId?: string;
  taskType?: string;
  tasklistId?: string;
  visible?: string;
  isDone?: boolean;
  isDeleted?: boolean;
  taskflowstatusId?: string;
  note?: string;
  sprintId?: string;
  updated?: string;
  involveMembers?: string[];
  dueDate?: string;
  created?: string;
  content?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      executorId: 'ExecutorId',
      projectId: 'ProjectId',
      storyPoint: 'StoryPoint',
      startDate: 'StartDate',
      isTopInProject: 'IsTopInProject',
      priority: 'Priority',
      creatorId: 'CreatorId',
      organizationId: 'OrganizationId',
      taskType: 'TaskType',
      tasklistId: 'TasklistId',
      visible: 'Visible',
      isDone: 'IsDone',
      isDeleted: 'IsDeleted',
      taskflowstatusId: 'TaskflowstatusId',
      note: 'Note',
      sprintId: 'SprintId',
      updated: 'Updated',
      involveMembers: 'InvolveMembers',
      dueDate: 'DueDate',
      created: 'Created',
      content: 'Content',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorId: 'string',
      projectId: 'string',
      storyPoint: 'string',
      startDate: 'string',
      isTopInProject: 'boolean',
      priority: 'string',
      creatorId: 'string',
      organizationId: 'string',
      taskType: 'string',
      tasklistId: 'string',
      visible: 'string',
      isDone: 'boolean',
      isDeleted: 'boolean',
      taskflowstatusId: 'string',
      note: 'string',
      sprintId: 'string',
      updated: 'string',
      involveMembers: { 'type': 'array', 'itemType': 'string' },
      dueDate: 'string',
      created: 'string',
      content: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineInstanceBuildNumberStatusResponseBodyObjectGroupsStagesComponents extends $tea.Model {
  status?: string;
  jobId?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      jobId: 'JobId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      jobId: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineInstanceBuildNumberStatusResponseBodyObjectGroupsStages extends $tea.Model {
  status?: string;
  sign?: string;
  components?: GetPipelineInstanceBuildNumberStatusResponseBodyObjectGroupsStagesComponents[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      sign: 'Sign',
      components: 'Components',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      sign: 'string',
      components: { 'type': 'array', 'itemType': GetPipelineInstanceBuildNumberStatusResponseBodyObjectGroupsStagesComponents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineInstanceBuildNumberStatusResponseBodyObjectGroups extends $tea.Model {
  status?: string;
  stages?: GetPipelineInstanceBuildNumberStatusResponseBodyObjectGroupsStages[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      stages: 'Stages',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      stages: { 'type': 'array', 'itemType': GetPipelineInstanceBuildNumberStatusResponseBodyObjectGroupsStages },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineInstanceBuildNumberStatusResponseBodyObject extends $tea.Model {
  status?: string;
  groups?: GetPipelineInstanceBuildNumberStatusResponseBodyObjectGroups[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      groups: 'Groups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      groups: { 'type': 'array', 'itemType': GetPipelineInstanceBuildNumberStatusResponseBodyObjectGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineInstanceGroupStatusResponseBodyObjectGroupsStagesComponents extends $tea.Model {
  status?: string;
  jobId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      jobId: 'JobId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      jobId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineInstanceGroupStatusResponseBodyObjectGroupsStages extends $tea.Model {
  status?: string;
  sign?: string;
  components?: GetPipelineInstanceGroupStatusResponseBodyObjectGroupsStagesComponents[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      sign: 'Sign',
      components: 'Components',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      sign: 'string',
      components: { 'type': 'array', 'itemType': GetPipelineInstanceGroupStatusResponseBodyObjectGroupsStagesComponents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineInstanceGroupStatusResponseBodyObjectGroups extends $tea.Model {
  status?: string;
  stages?: GetPipelineInstanceGroupStatusResponseBodyObjectGroupsStages[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      stages: 'Stages',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      stages: { 'type': 'array', 'itemType': GetPipelineInstanceGroupStatusResponseBodyObjectGroupsStages },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineInstanceGroupStatusResponseBodyObject extends $tea.Model {
  status?: string;
  groups?: GetPipelineInstanceGroupStatusResponseBodyObjectGroups[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      groups: 'Groups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      groups: { 'type': 'array', 'itemType': GetPipelineInstanceGroupStatusResponseBodyObjectGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineInstanceInfoResponseBodyObject extends $tea.Model {
  endTime?: number;
  status?: string;
  startTime?: number;
  packageDownloadUrls?: string[];
  employeeId?: string;
  dockerImages?: string[];
  sources?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      status: 'Status',
      startTime: 'StartTime',
      packageDownloadUrls: 'PackageDownloadUrls',
      employeeId: 'EmployeeId',
      dockerImages: 'DockerImages',
      sources: 'Sources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      status: 'string',
      startTime: 'number',
      packageDownloadUrls: { 'type': 'array', 'itemType': 'string' },
      employeeId: 'string',
      dockerImages: { 'type': 'array', 'itemType': 'string' },
      sources: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineInstHistoryResponseBodyDataDataListFlowInstanceResult extends $tea.Model {
  enginePipelineNumber?: number;
  mixFlowInstId?: string;
  enginePipelineName?: string;
  enginePipelineId?: number;
  enginePipelineInstId?: number;
  timeStamp?: string;
  triggerMode?: string;
  sources?: string;
  caches?: string;
  dateTime?: string;
  static names(): { [key: string]: string } {
    return {
      enginePipelineNumber: 'EnginePipelineNumber',
      mixFlowInstId: 'MixFlowInstId',
      enginePipelineName: 'EnginePipelineName',
      enginePipelineId: 'EnginePipelineId',
      enginePipelineInstId: 'EnginePipelineInstId',
      timeStamp: 'TimeStamp',
      triggerMode: 'TriggerMode',
      sources: 'Sources',
      caches: 'Caches',
      dateTime: 'DateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enginePipelineNumber: 'number',
      mixFlowInstId: 'string',
      enginePipelineName: 'string',
      enginePipelineId: 'number',
      enginePipelineInstId: 'number',
      timeStamp: 'string',
      triggerMode: 'string',
      sources: 'string',
      caches: 'string',
      dateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineInstHistoryResponseBodyDataDataListFlowInstanceGroups extends $tea.Model {
  status?: string;
  createTime?: number;
  deleteStatus?: string;
  idExtent?: number;
  creator?: string;
  endTime?: number;
  startTime?: number;
  modifier?: string;
  resultStatus?: string;
  flowInstId?: number;
  name?: string;
  id?: number;
  modifyTime?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      createTime: 'CreateTime',
      deleteStatus: 'DeleteStatus',
      idExtent: 'IdExtent',
      creator: 'Creator',
      endTime: 'EndTime',
      startTime: 'StartTime',
      modifier: 'Modifier',
      resultStatus: 'ResultStatus',
      flowInstId: 'FlowInstId',
      name: 'Name',
      id: 'Id',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      createTime: 'number',
      deleteStatus: 'string',
      idExtent: 'number',
      creator: 'string',
      endTime: 'number',
      startTime: 'number',
      modifier: 'string',
      resultStatus: 'string',
      flowInstId: 'number',
      name: 'string',
      id: 'number',
      modifyTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineInstHistoryResponseBodyDataDataListFlowInstance extends $tea.Model {
  status?: string;
  stages?: { [key: string]: any };
  result?: GetPipelineInstHistoryResponseBodyDataDataListFlowInstanceResult;
  createTime?: number;
  statusName?: string;
  runningStatus?: string;
  stageTopo?: string;
  creator?: string;
  modifier?: string;
  groups?: GetPipelineInstHistoryResponseBodyDataDataListFlowInstanceGroups[];
  autoDrivenStatus?: boolean;
  resultStatus?: string;
  id?: number;
  systemCode?: string;
  modifyTime?: number;
  systemId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      stages: 'Stages',
      result: 'Result',
      createTime: 'CreateTime',
      statusName: 'StatusName',
      runningStatus: 'RunningStatus',
      stageTopo: 'StageTopo',
      creator: 'Creator',
      modifier: 'Modifier',
      groups: 'Groups',
      autoDrivenStatus: 'AutoDrivenStatus',
      resultStatus: 'ResultStatus',
      id: 'Id',
      systemCode: 'SystemCode',
      modifyTime: 'ModifyTime',
      systemId: 'SystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      stages: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      result: GetPipelineInstHistoryResponseBodyDataDataListFlowInstanceResult,
      createTime: 'number',
      statusName: 'string',
      runningStatus: 'string',
      stageTopo: 'string',
      creator: 'string',
      modifier: 'string',
      groups: { 'type': 'array', 'itemType': GetPipelineInstHistoryResponseBodyDataDataListFlowInstanceGroups },
      autoDrivenStatus: 'boolean',
      resultStatus: 'string',
      id: 'number',
      systemCode: 'string',
      modifyTime: 'number',
      systemId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineInstHistoryResponseBodyDataDataList extends $tea.Model {
  status?: string;
  createTime?: number;
  statusName?: string;
  deletion?: string;
  pipelineConfigId?: number;
  triggerMode?: number;
  creator?: string;
  instNumber?: number;
  modifier?: string;
  flowInstance?: GetPipelineInstHistoryResponseBodyDataDataListFlowInstance;
  packages?: string;
  flowInstId?: number;
  pipelineId?: number;
  id?: number;
  modifyTime?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      createTime: 'CreateTime',
      statusName: 'StatusName',
      deletion: 'Deletion',
      pipelineConfigId: 'PipelineConfigId',
      triggerMode: 'TriggerMode',
      creator: 'Creator',
      instNumber: 'InstNumber',
      modifier: 'Modifier',
      flowInstance: 'FlowInstance',
      packages: 'Packages',
      flowInstId: 'FlowInstId',
      pipelineId: 'PipelineId',
      id: 'Id',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      createTime: 'number',
      statusName: 'string',
      deletion: 'string',
      pipelineConfigId: 'number',
      triggerMode: 'number',
      creator: 'string',
      instNumber: 'number',
      modifier: 'string',
      flowInstance: GetPipelineInstHistoryResponseBodyDataDataListFlowInstance,
      packages: 'string',
      flowInstId: 'number',
      pipelineId: 'number',
      id: 'number',
      modifyTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineInstHistoryResponseBodyData extends $tea.Model {
  dataList?: GetPipelineInstHistoryResponseBodyDataDataList[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': GetPipelineInstHistoryResponseBodyDataDataList },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineLogResponseBodyObjectBuildProcessNodes extends $tea.Model {
  status?: string;
  nodeName?: string;
  nodeIndex?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      nodeName: 'NodeName',
      nodeIndex: 'NodeIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      nodeName: 'string',
      nodeIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineLogResponseBodyObject extends $tea.Model {
  startTime?: string;
  jobId?: number;
  actionName?: string;
  buildProcessNodes?: GetPipelineLogResponseBodyObjectBuildProcessNodes[];
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      jobId: 'JobId',
      actionName: 'ActionName',
      buildProcessNodes: 'BuildProcessNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      jobId: 'number',
      actionName: 'string',
      buildProcessNodes: { 'type': 'array', 'itemType': GetPipelineLogResponseBodyObjectBuildProcessNodes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineStepLogResponseBodyObject extends $tea.Model {
  logs?: string;
  last?: number;
  more?: boolean;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      last: 'Last',
      more: 'More',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: 'string',
      last: 'number',
      more: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipleineLatestInstanceStatusResponseBodyObjectGroupsStagesComponents extends $tea.Model {
  status?: string;
  jobId?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      jobId: 'JobId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      jobId: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipleineLatestInstanceStatusResponseBodyObjectGroupsStages extends $tea.Model {
  status?: string;
  sign?: string;
  components?: GetPipleineLatestInstanceStatusResponseBodyObjectGroupsStagesComponents[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      sign: 'Sign',
      components: 'Components',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      sign: 'string',
      components: { 'type': 'array', 'itemType': GetPipleineLatestInstanceStatusResponseBodyObjectGroupsStagesComponents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipleineLatestInstanceStatusResponseBodyObjectGroups extends $tea.Model {
  status?: string;
  stages?: GetPipleineLatestInstanceStatusResponseBodyObjectGroupsStages[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      stages: 'Stages',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      stages: { 'type': 'array', 'itemType': GetPipleineLatestInstanceStatusResponseBodyObjectGroupsStages },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipleineLatestInstanceStatusResponseBodyObject extends $tea.Model {
  status?: string;
  groups?: GetPipleineLatestInstanceStatusResponseBodyObjectGroups[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      groups: 'Groups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      groups: { 'type': 'array', 'itemType': GetPipleineLatestInstanceStatusResponseBodyObjectGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectOptionResponseBodyObject extends $tea.Model {
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

export class GetTaskDetailActivityResponseBodyObject extends $tea.Model {
  action?: string;
  updated?: string;
  title?: string;
  created?: string;
  content?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      updated: 'Updated',
      title: 'Title',
      created: 'Created',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      updated: 'string',
      title: 'string',
      created: 'string',
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskDetailBaseResponseBodyObjectTasklist extends $tea.Model {
  title?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskDetailBaseResponseBodyObjectBadges extends $tea.Model {
  likesCount?: number;
  objectlinksCount?: number;
  attachmentsCount?: number;
  commentsCount?: number;
  static names(): { [key: string]: string } {
    return {
      likesCount: 'LikesCount',
      objectlinksCount: 'ObjectlinksCount',
      attachmentsCount: 'AttachmentsCount',
      commentsCount: 'CommentsCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      likesCount: 'number',
      objectlinksCount: 'number',
      attachmentsCount: 'number',
      commentsCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskDetailBaseResponseBodyObjectReminder extends $tea.Model {
  type?: string;
  members?: string[];
  date?: string;
  memberRoles?: string[];
  method?: string;
  creatorId?: string;
  rules?: string[];
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      members: 'Members',
      date: 'Date',
      memberRoles: 'MemberRoles',
      method: 'Method',
      creatorId: 'CreatorId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      members: { 'type': 'array', 'itemType': 'string' },
      date: 'string',
      memberRoles: { 'type': 'array', 'itemType': 'string' },
      method: 'string',
      creatorId: 'string',
      rules: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskDetailBaseResponseBodyObjectStage extends $tea.Model {
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

export class GetTaskDetailBaseResponseBodyObjectScenariofieldconfig extends $tea.Model {
  icon?: string;
  proTemplateConfigType?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      icon: 'Icon',
      proTemplateConfigType: 'ProTemplateConfigType',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icon: 'string',
      proTemplateConfigType: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskDetailBaseResponseBodyObjectWorkTime extends $tea.Model {
  usedTime?: number;
  totalTime?: number;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      usedTime: 'UsedTime',
      totalTime: 'TotalTime',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usedTime: 'number',
      totalTime: 'number',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskDetailBaseResponseBodyObjectCreator extends $tea.Model {
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

export class GetTaskDetailBaseResponseBodyObjectExecutor extends $tea.Model {
  avatarUrl?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskDetailBaseResponseBodyObjectSubtaskCount extends $tea.Model {
  done?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      done: 'Done',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      done: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskDetailBaseResponseBodyObjectInvolvers extends $tea.Model {
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

export class GetTaskDetailBaseResponseBodyObjectSubtasks extends $tea.Model {
  content?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskDetailBaseResponseBodyObjectCustomfieldsValue extends $tea.Model {
  title?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskDetailBaseResponseBodyObjectCustomfields extends $tea.Model {
  type?: string;
  value?: GetTaskDetailBaseResponseBodyObjectCustomfieldsValue[];
  values?: string[];
  customfieldId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
      values: 'Values',
      customfieldId: 'CustomfieldId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: { 'type': 'array', 'itemType': GetTaskDetailBaseResponseBodyObjectCustomfieldsValue },
      values: { 'type': 'array', 'itemType': 'string' },
      customfieldId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskDetailBaseResponseBodyObjectTaskflowstatus extends $tea.Model {
  taskflowId?: string;
  kind?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      taskflowId: 'TaskflowId',
      kind: 'Kind',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskflowId: 'string',
      kind: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskDetailBaseResponseBodyObject extends $tea.Model {
  organization?: string;
  scenariofieldconfigId?: string;
  projectId?: string;
  isTopInProject?: boolean;
  tasklist?: GetTaskDetailBaseResponseBodyObjectTasklist;
  badges?: GetTaskDetailBaseResponseBodyObjectBadges;
  ancestorIds?: string[];
  shareStatus?: number;
  reminder?: GetTaskDetailBaseResponseBodyObjectReminder;
  ancestors?: string[];
  taskflowstatusId?: string;
  updated?: string;
  note?: string;
  isArchived?: boolean;
  content?: string;
  rating?: number;
  progress?: number;
  stage?: GetTaskDetailBaseResponseBodyObjectStage;
  labels?: string[];
  startDate?: string;
  sprint?: string;
  creatorId?: string;
  sourceId?: string;
  organizationId?: string;
  sourceDate?: string;
  isFavorite?: boolean;
  executorId?: string;
  scenariofieldconfig?: GetTaskDetailBaseResponseBodyObjectScenariofieldconfig;
  workTime?: GetTaskDetailBaseResponseBodyObjectWorkTime;
  tagIds?: string[];
  priority?: number;
  creator?: GetTaskDetailBaseResponseBodyObjectCreator;
  executor?: GetTaskDetailBaseResponseBodyObjectExecutor;
  accomplished?: string;
  involveMembers?: string[];
  uniqueId?: number;
  commentsCount?: number;
  recurrence?: string;
  objectType?: string;
  subtaskCount?: GetTaskDetailBaseResponseBodyObjectSubtaskCount;
  untilDate?: string;
  storyPoint?: string;
  objectlinksCount?: number;
  source?: string;
  likesCount?: number;
  stageId?: string;
  divisions?: string[];
  visible?: string;
  isDone?: boolean;
  involvers?: GetTaskDetailBaseResponseBodyObjectInvolvers[];
  parent?: string;
  sprintId?: string;
  dueDate?: string;
  attachmentsCount?: number;
  subtasks?: GetTaskDetailBaseResponseBodyObjectSubtasks[];
  customfields?: GetTaskDetailBaseResponseBodyObjectCustomfields[];
  created?: string;
  taskId?: string;
  taskflowstatus?: GetTaskDetailBaseResponseBodyObjectTaskflowstatus;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      organization: 'Organization',
      scenariofieldconfigId: 'ScenariofieldconfigId',
      projectId: 'ProjectId',
      isTopInProject: 'IsTopInProject',
      tasklist: 'Tasklist',
      badges: 'Badges',
      ancestorIds: 'AncestorIds',
      shareStatus: 'ShareStatus',
      reminder: 'Reminder',
      ancestors: 'Ancestors',
      taskflowstatusId: 'TaskflowstatusId',
      updated: 'Updated',
      note: 'Note',
      isArchived: 'IsArchived',
      content: 'Content',
      rating: 'Rating',
      progress: 'Progress',
      stage: 'Stage',
      labels: 'Labels',
      startDate: 'StartDate',
      sprint: 'Sprint',
      creatorId: 'CreatorId',
      sourceId: 'SourceId',
      organizationId: 'OrganizationId',
      sourceDate: 'SourceDate',
      isFavorite: 'IsFavorite',
      executorId: 'ExecutorId',
      scenariofieldconfig: 'Scenariofieldconfig',
      workTime: 'WorkTime',
      tagIds: 'TagIds',
      priority: 'Priority',
      creator: 'Creator',
      executor: 'Executor',
      accomplished: 'Accomplished',
      involveMembers: 'InvolveMembers',
      uniqueId: 'UniqueId',
      commentsCount: 'CommentsCount',
      recurrence: 'Recurrence',
      objectType: 'ObjectType',
      subtaskCount: 'SubtaskCount',
      untilDate: 'UntilDate',
      storyPoint: 'StoryPoint',
      objectlinksCount: 'ObjectlinksCount',
      source: 'Source',
      likesCount: 'LikesCount',
      stageId: 'StageId',
      divisions: 'Divisions',
      visible: 'Visible',
      isDone: 'IsDone',
      involvers: 'Involvers',
      parent: 'Parent',
      sprintId: 'SprintId',
      dueDate: 'DueDate',
      attachmentsCount: 'AttachmentsCount',
      subtasks: 'Subtasks',
      customfields: 'Customfields',
      created: 'Created',
      taskId: 'TaskId',
      taskflowstatus: 'Taskflowstatus',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organization: 'string',
      scenariofieldconfigId: 'string',
      projectId: 'string',
      isTopInProject: 'boolean',
      tasklist: GetTaskDetailBaseResponseBodyObjectTasklist,
      badges: GetTaskDetailBaseResponseBodyObjectBadges,
      ancestorIds: { 'type': 'array', 'itemType': 'string' },
      shareStatus: 'number',
      reminder: GetTaskDetailBaseResponseBodyObjectReminder,
      ancestors: { 'type': 'array', 'itemType': 'string' },
      taskflowstatusId: 'string',
      updated: 'string',
      note: 'string',
      isArchived: 'boolean',
      content: 'string',
      rating: 'number',
      progress: 'number',
      stage: GetTaskDetailBaseResponseBodyObjectStage,
      labels: { 'type': 'array', 'itemType': 'string' },
      startDate: 'string',
      sprint: 'string',
      creatorId: 'string',
      sourceId: 'string',
      organizationId: 'string',
      sourceDate: 'string',
      isFavorite: 'boolean',
      executorId: 'string',
      scenariofieldconfig: GetTaskDetailBaseResponseBodyObjectScenariofieldconfig,
      workTime: GetTaskDetailBaseResponseBodyObjectWorkTime,
      tagIds: { 'type': 'array', 'itemType': 'string' },
      priority: 'number',
      creator: GetTaskDetailBaseResponseBodyObjectCreator,
      executor: GetTaskDetailBaseResponseBodyObjectExecutor,
      accomplished: 'string',
      involveMembers: { 'type': 'array', 'itemType': 'string' },
      uniqueId: 'number',
      commentsCount: 'number',
      recurrence: 'string',
      objectType: 'string',
      subtaskCount: GetTaskDetailBaseResponseBodyObjectSubtaskCount,
      untilDate: 'string',
      storyPoint: 'string',
      objectlinksCount: 'number',
      source: 'string',
      likesCount: 'number',
      stageId: 'string',
      divisions: { 'type': 'array', 'itemType': 'string' },
      visible: 'string',
      isDone: 'boolean',
      involvers: { 'type': 'array', 'itemType': GetTaskDetailBaseResponseBodyObjectInvolvers },
      parent: 'string',
      sprintId: 'string',
      dueDate: 'string',
      attachmentsCount: 'number',
      subtasks: { 'type': 'array', 'itemType': GetTaskDetailBaseResponseBodyObjectSubtasks },
      customfields: { 'type': 'array', 'itemType': GetTaskDetailBaseResponseBodyObjectCustomfields },
      created: 'string',
      taskId: 'string',
      taskflowstatus: GetTaskDetailBaseResponseBodyObjectTaskflowstatus,
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskListFilterResponseBodyObjectResultBadges extends $tea.Model {
  likesCount?: number;
  objectlinksCount?: number;
  attachmentsCount?: number;
  commentsCount?: number;
  static names(): { [key: string]: string } {
    return {
      likesCount: 'LikesCount',
      objectlinksCount: 'ObjectlinksCount',
      attachmentsCount: 'AttachmentsCount',
      commentsCount: 'CommentsCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      likesCount: 'number',
      objectlinksCount: 'number',
      attachmentsCount: 'number',
      commentsCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskListFilterResponseBodyObjectResultReminder extends $tea.Model {
  type?: string;
  members?: string[];
  date?: string;
  creatorId?: string;
  rules?: string[];
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      members: 'Members',
      date: 'Date',
      creatorId: 'CreatorId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      members: { 'type': 'array', 'itemType': 'string' },
      date: 'string',
      creatorId: 'string',
      rules: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskListFilterResponseBodyObjectResultStage extends $tea.Model {
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

export class GetTaskListFilterResponseBodyObjectResultWorkTime extends $tea.Model {
  usedTime?: number;
  totalTime?: number;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      usedTime: 'UsedTime',
      totalTime: 'TotalTime',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usedTime: 'number',
      totalTime: 'number',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskListFilterResponseBodyObjectResultCreator extends $tea.Model {
  avatarUrl?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskListFilterResponseBodyObjectResultExecutor extends $tea.Model {
  avatarUrl?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskListFilterResponseBodyObjectResultTaskFlowStatus extends $tea.Model {
  taskFlowId?: string;
  pos?: number;
  kind?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      taskFlowId: 'TaskFlowId',
      pos: 'Pos',
      kind: 'Kind',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskFlowId: 'string',
      pos: 'number',
      kind: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskListFilterResponseBodyObjectResultSubtaskCount extends $tea.Model {
  done?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      done: 'Done',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      done: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskListFilterResponseBodyObjectResultCustomfieldsValue extends $tea.Model {
  title?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskListFilterResponseBodyObjectResultCustomfields extends $tea.Model {
  type?: string;
  value?: GetTaskListFilterResponseBodyObjectResultCustomfieldsValue[];
  values?: string;
  customfieldId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
      values: 'Values',
      customfieldId: 'CustomfieldId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: { 'type': 'array', 'itemType': GetTaskListFilterResponseBodyObjectResultCustomfieldsValue },
      values: 'string',
      customfieldId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskListFilterResponseBodyObjectResult extends $tea.Model {
  projectId?: string;
  isTopInProject?: boolean;
  badges?: GetTaskListFilterResponseBodyObjectResultBadges;
  ancestorIds?: string[];
  shareStatus?: number;
  reminder?: GetTaskListFilterResponseBodyObjectResultReminder;
  note?: string;
  updated?: string;
  isArchived?: boolean;
  content?: string;
  rating?: number;
  taskFlowStatusId?: string;
  progress?: number;
  stage?: GetTaskListFilterResponseBodyObjectResultStage;
  labels?: string[];
  pos?: number;
  startDate?: string;
  sprint?: string;
  creatorId?: string;
  sourceId?: string;
  organizationId?: string;
  sourceDate?: string;
  isFavorite?: boolean;
  executorId?: string;
  workTime?: GetTaskListFilterResponseBodyObjectResultWorkTime;
  tagIds?: string[];
  priority?: number;
  scenariofFeldConfigId?: string;
  creator?: GetTaskListFilterResponseBodyObjectResultCreator;
  executor?: GetTaskListFilterResponseBodyObjectResultExecutor;
  accomplished?: string;
  taskListId?: string;
  involveMembers?: string[];
  uniqueId?: number;
  taskFlowStatus?: GetTaskListFilterResponseBodyObjectResultTaskFlowStatus;
  commentsCount?: number;
  recurrence?: string;
  objectType?: string;
  subtaskCount?: GetTaskListFilterResponseBodyObjectResultSubtaskCount;
  untilDate?: string;
  storyPoint?: string;
  objectlinksCount?: number;
  source?: string;
  likesCount?: number;
  stageId?: string;
  divisions?: string[];
  visible?: string;
  isDone?: boolean;
  parent?: string;
  sprintId?: string;
  dueDate?: string;
  attachmentsCount?: number;
  customfields?: GetTaskListFilterResponseBodyObjectResultCustomfields[];
  created?: string;
  taskUniqueId?: string;
  taskId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      isTopInProject: 'IsTopInProject',
      badges: 'Badges',
      ancestorIds: 'AncestorIds',
      shareStatus: 'ShareStatus',
      reminder: 'Reminder',
      note: 'Note',
      updated: 'Updated',
      isArchived: 'IsArchived',
      content: 'Content',
      rating: 'Rating',
      taskFlowStatusId: 'TaskFlowStatusId',
      progress: 'Progress',
      stage: 'Stage',
      labels: 'Labels',
      pos: 'Pos',
      startDate: 'StartDate',
      sprint: 'Sprint',
      creatorId: 'CreatorId',
      sourceId: 'SourceId',
      organizationId: 'OrganizationId',
      sourceDate: 'SourceDate',
      isFavorite: 'IsFavorite',
      executorId: 'ExecutorId',
      workTime: 'WorkTime',
      tagIds: 'TagIds',
      priority: 'Priority',
      scenariofFeldConfigId: 'ScenariofFeldConfigId',
      creator: 'Creator',
      executor: 'Executor',
      accomplished: 'Accomplished',
      taskListId: 'TaskListId',
      involveMembers: 'InvolveMembers',
      uniqueId: 'UniqueId',
      taskFlowStatus: 'TaskFlowStatus',
      commentsCount: 'CommentsCount',
      recurrence: 'Recurrence',
      objectType: 'ObjectType',
      subtaskCount: 'SubtaskCount',
      untilDate: 'UntilDate',
      storyPoint: 'StoryPoint',
      objectlinksCount: 'ObjectlinksCount',
      source: 'Source',
      likesCount: 'LikesCount',
      stageId: 'StageId',
      divisions: 'Divisions',
      visible: 'Visible',
      isDone: 'IsDone',
      parent: 'Parent',
      sprintId: 'SprintId',
      dueDate: 'DueDate',
      attachmentsCount: 'AttachmentsCount',
      customfields: 'Customfields',
      created: 'Created',
      taskUniqueId: 'TaskUniqueId',
      taskId: 'TaskId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      isTopInProject: 'boolean',
      badges: GetTaskListFilterResponseBodyObjectResultBadges,
      ancestorIds: { 'type': 'array', 'itemType': 'string' },
      shareStatus: 'number',
      reminder: GetTaskListFilterResponseBodyObjectResultReminder,
      note: 'string',
      updated: 'string',
      isArchived: 'boolean',
      content: 'string',
      rating: 'number',
      taskFlowStatusId: 'string',
      progress: 'number',
      stage: GetTaskListFilterResponseBodyObjectResultStage,
      labels: { 'type': 'array', 'itemType': 'string' },
      pos: 'number',
      startDate: 'string',
      sprint: 'string',
      creatorId: 'string',
      sourceId: 'string',
      organizationId: 'string',
      sourceDate: 'string',
      isFavorite: 'boolean',
      executorId: 'string',
      workTime: GetTaskListFilterResponseBodyObjectResultWorkTime,
      tagIds: { 'type': 'array', 'itemType': 'string' },
      priority: 'number',
      scenariofFeldConfigId: 'string',
      creator: GetTaskListFilterResponseBodyObjectResultCreator,
      executor: GetTaskListFilterResponseBodyObjectResultExecutor,
      accomplished: 'string',
      taskListId: 'string',
      involveMembers: { 'type': 'array', 'itemType': 'string' },
      uniqueId: 'number',
      taskFlowStatus: GetTaskListFilterResponseBodyObjectResultTaskFlowStatus,
      commentsCount: 'number',
      recurrence: 'string',
      objectType: 'string',
      subtaskCount: GetTaskListFilterResponseBodyObjectResultSubtaskCount,
      untilDate: 'string',
      storyPoint: 'string',
      objectlinksCount: 'number',
      source: 'string',
      likesCount: 'number',
      stageId: 'string',
      divisions: { 'type': 'array', 'itemType': 'string' },
      visible: 'string',
      isDone: 'boolean',
      parent: 'string',
      sprintId: 'string',
      dueDate: 'string',
      attachmentsCount: 'number',
      customfields: { 'type': 'array', 'itemType': GetTaskListFilterResponseBodyObjectResultCustomfields },
      created: 'string',
      taskUniqueId: 'string',
      taskId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskListFilterResponseBodyObject extends $tea.Model {
  nextPageToken?: string;
  result?: GetTaskListFilterResponseBodyObjectResult[];
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      nextPageToken: 'NextPageToken',
      result: 'Result',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPageToken: 'string',
      result: { 'type': 'array', 'itemType': GetTaskListFilterResponseBodyObjectResult },
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByAliyunUidResponseBodyObject extends $tea.Model {
  aliyunPk?: string;
  email?: string;
  avatarUrl?: string;
  name?: string;
  id?: string;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunPk: 'AliyunPk',
      email: 'Email',
      avatarUrl: 'AvatarUrl',
      name: 'Name',
      id: 'Id',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunPk: 'string',
      email: 'string',
      avatarUrl: 'string',
      name: 'string',
      id: 'string',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommonGroupResponseBodyObject extends $tea.Model {
  resourceCount?: number;
  smartGroupId?: string;
  pos?: number;
  projectId?: string;
  isRoot?: boolean;
  pinyin?: string;
  creatorId?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      resourceCount: 'ResourceCount',
      smartGroupId: 'SmartGroupId',
      pos: 'Pos',
      projectId: 'ProjectId',
      isRoot: 'IsRoot',
      pinyin: 'Pinyin',
      creatorId: 'CreatorId',
      name: 'Name',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCount: 'number',
      smartGroupId: 'string',
      pos: 'number',
      projectId: 'string',
      isRoot: 'boolean',
      pinyin: 'string',
      creatorId: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevopsProjectSprintsResponseBodyObjectPlanToDo extends $tea.Model {
  tasks?: number;
  workTimes?: number;
  storyPoints?: number;
  static names(): { [key: string]: string } {
    return {
      tasks: 'Tasks',
      workTimes: 'WorkTimes',
      storyPoints: 'StoryPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tasks: 'number',
      workTimes: 'number',
      storyPoints: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevopsProjectSprintsResponseBodyObject extends $tea.Model {
  status?: string;
  projectId?: string;
  startDate?: string;
  creatorId?: string;
  accomplished?: string;
  isDeleted?: boolean;
  updated?: string;
  dueDate?: string;
  name?: string;
  created?: string;
  planToDo?: ListDevopsProjectSprintsResponseBodyObjectPlanToDo;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      projectId: 'ProjectId',
      startDate: 'StartDate',
      creatorId: 'CreatorId',
      accomplished: 'Accomplished',
      isDeleted: 'IsDeleted',
      updated: 'Updated',
      dueDate: 'DueDate',
      name: 'Name',
      created: 'Created',
      planToDo: 'PlanToDo',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      projectId: 'string',
      startDate: 'string',
      creatorId: 'string',
      accomplished: 'string',
      isDeleted: 'boolean',
      updated: 'string',
      dueDate: 'string',
      name: 'string',
      created: 'string',
      planToDo: ListDevopsProjectSprintsResponseBodyObjectPlanToDo,
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevopsProjectTaskFlowResponseBodyObject extends $tea.Model {
  type?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevopsProjectTaskFlowStatusResponseBodyObject extends $tea.Model {
  taskflowId?: string;
  kind?: string;
  pos?: number;
  isDeleted?: boolean;
  updated?: string;
  creatorId?: string;
  name?: string;
  created?: string;
  rejectStatusIds?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      taskflowId: 'TaskflowId',
      kind: 'Kind',
      pos: 'Pos',
      isDeleted: 'IsDeleted',
      updated: 'Updated',
      creatorId: 'CreatorId',
      name: 'Name',
      created: 'Created',
      rejectStatusIds: 'RejectStatusIds',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskflowId: 'string',
      kind: 'string',
      pos: 'number',
      isDeleted: 'boolean',
      updated: 'string',
      creatorId: 'string',
      name: 'string',
      created: 'string',
      rejectStatusIds: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevopsProjectTaskListResponseBodyObjectResult extends $tea.Model {
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

export class ListDevopsProjectTaskListResponseBodyObject extends $tea.Model {
  result?: ListDevopsProjectTaskListResponseBodyObjectResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': ListDevopsProjectTaskListResponseBodyObjectResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevopsProjectTasksResponseBodyObject extends $tea.Model {
  taskgroupId?: string;
  tasklistId?: string;
  projectId?: string;
  modifierId?: string;
  updated?: string;
  creatorId?: string;
  created?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      taskgroupId: 'TaskgroupId',
      tasklistId: 'TasklistId',
      projectId: 'ProjectId',
      modifierId: 'ModifierId',
      updated: 'Updated',
      creatorId: 'CreatorId',
      created: 'Created',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskgroupId: 'string',
      tasklistId: 'string',
      projectId: 'string',
      modifierId: 'string',
      updated: 'string',
      creatorId: 'string',
      created: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevopsScenarioFieldConfigResponseBodyObject extends $tea.Model {
  type?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectCustomFieldsResponseBodyObjectValues extends $tea.Model {
  value?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectCustomFieldsResponseBodyObject extends $tea.Model {
  type?: string;
  subtype?: string;
  values?: ListProjectCustomFieldsResponseBodyObjectValues[];
  customFieldId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      subtype: 'Subtype',
      values: 'Values',
      customFieldId: 'CustomFieldId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      subtype: 'string',
      values: { 'type': 'array', 'itemType': ListProjectCustomFieldsResponseBodyObjectValues },
      customFieldId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartGroupResponseBodyObject extends $tea.Model {
  type?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserOrganizationResponseBodyObject extends $tea.Model {
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

export class UpdateCommonGroupResponseBodyObject extends $tea.Model {
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


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("devops-rdc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async batchInsertMembersWithOptions(request: BatchInsertMembersRequest, runtime: $Util.RuntimeOptions): Promise<BatchInsertMembersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchInsertMembersResponse>(await this.doRPCRequest("BatchInsertMembers", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new BatchInsertMembersResponse({}));
  }

  async batchInsertMembers(request: BatchInsertMembersRequest): Promise<BatchInsertMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchInsertMembersWithOptions(request, runtime);
  }

  async cancelPipelineWithOptions(request: CancelPipelineRequest, runtime: $Util.RuntimeOptions): Promise<CancelPipelineResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelPipelineResponse>(await this.doRPCRequest("CancelPipeline", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new CancelPipelineResponse({}));
  }

  async cancelPipeline(request: CancelPipelineRequest): Promise<CancelPipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelPipelineWithOptions(request, runtime);
  }

  async checkAliyunAccountExistsWithOptions(request: CheckAliyunAccountExistsRequest, runtime: $Util.RuntimeOptions): Promise<CheckAliyunAccountExistsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckAliyunAccountExistsResponse>(await this.doRPCRequest("CheckAliyunAccountExists", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new CheckAliyunAccountExistsResponse({}));
  }

  async checkAliyunAccountExists(request: CheckAliyunAccountExistsRequest): Promise<CheckAliyunAccountExistsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkAliyunAccountExistsWithOptions(request, runtime);
  }

  async createCommonGroupWithOptions(request: CreateCommonGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateCommonGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCommonGroupResponse>(await this.doRPCRequest("CreateCommonGroup", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCommonGroupResponse({}));
  }

  async createCommonGroup(request: CreateCommonGroupRequest): Promise<CreateCommonGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCommonGroupWithOptions(request, runtime);
  }

  async createCredentialWithOptions(request: CreateCredentialRequest, runtime: $Util.RuntimeOptions): Promise<CreateCredentialResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCredentialResponse>(await this.doRPCRequest("CreateCredential", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCredentialResponse({}));
  }

  async createCredential(request: CreateCredentialRequest): Promise<CreateCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCredentialWithOptions(request, runtime);
  }

  async createDevopsOrganizationWithOptions(request: CreateDevopsOrganizationRequest, runtime: $Util.RuntimeOptions): Promise<CreateDevopsOrganizationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDevopsOrganizationResponse>(await this.doRPCRequest("CreateDevopsOrganization", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDevopsOrganizationResponse({}));
  }

  async createDevopsOrganization(request: CreateDevopsOrganizationRequest): Promise<CreateDevopsOrganizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDevopsOrganizationWithOptions(request, runtime);
  }

  async createDevopsProjectWithOptions(request: CreateDevopsProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateDevopsProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDevopsProjectResponse>(await this.doRPCRequest("CreateDevopsProject", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDevopsProjectResponse({}));
  }

  async createDevopsProject(request: CreateDevopsProjectRequest): Promise<CreateDevopsProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDevopsProjectWithOptions(request, runtime);
  }

  async createDevopsProjectSprintWithOptions(request: CreateDevopsProjectSprintRequest, runtime: $Util.RuntimeOptions): Promise<CreateDevopsProjectSprintResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDevopsProjectSprintResponse>(await this.doRPCRequest("CreateDevopsProjectSprint", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDevopsProjectSprintResponse({}));
  }

  async createDevopsProjectSprint(request: CreateDevopsProjectSprintRequest): Promise<CreateDevopsProjectSprintResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDevopsProjectSprintWithOptions(request, runtime);
  }

  async createDevopsProjectTaskWithOptions(request: CreateDevopsProjectTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateDevopsProjectTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDevopsProjectTaskResponse>(await this.doRPCRequest("CreateDevopsProjectTask", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDevopsProjectTaskResponse({}));
  }

  async createDevopsProjectTask(request: CreateDevopsProjectTaskRequest): Promise<CreateDevopsProjectTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDevopsProjectTaskWithOptions(request, runtime);
  }

  async createPipelineWithOptions(request: CreatePipelineRequest, runtime: $Util.RuntimeOptions): Promise<CreatePipelineResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreatePipelineResponse>(await this.doRPCRequest("CreatePipeline", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new CreatePipelineResponse({}));
  }

  async createPipeline(request: CreatePipelineRequest): Promise<CreatePipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPipelineWithOptions(request, runtime);
  }

  async createServiceConnectionWithOptions(request: CreateServiceConnectionRequest, runtime: $Util.RuntimeOptions): Promise<CreateServiceConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateServiceConnectionResponse>(await this.doRPCRequest("CreateServiceConnection", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new CreateServiceConnectionResponse({}));
  }

  async createServiceConnection(request: CreateServiceConnectionRequest): Promise<CreateServiceConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceConnectionWithOptions(request, runtime);
  }

  async deleteCommonGroupWithOptions(request: DeleteCommonGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCommonGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCommonGroupResponse>(await this.doRPCRequest("DeleteCommonGroup", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCommonGroupResponse({}));
  }

  async deleteCommonGroup(request: DeleteCommonGroupRequest): Promise<DeleteCommonGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCommonGroupWithOptions(request, runtime);
  }

  async deleteDevopsOrganizationMembersWithOptions(request: DeleteDevopsOrganizationMembersRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDevopsOrganizationMembersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDevopsOrganizationMembersResponse>(await this.doRPCRequest("DeleteDevopsOrganizationMembers", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDevopsOrganizationMembersResponse({}));
  }

  async deleteDevopsOrganizationMembers(request: DeleteDevopsOrganizationMembersRequest): Promise<DeleteDevopsOrganizationMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDevopsOrganizationMembersWithOptions(request, runtime);
  }

  async deleteDevopsProjectWithOptions(request: DeleteDevopsProjectRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDevopsProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDevopsProjectResponse>(await this.doRPCRequest("DeleteDevopsProject", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDevopsProjectResponse({}));
  }

  async deleteDevopsProject(request: DeleteDevopsProjectRequest): Promise<DeleteDevopsProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDevopsProjectWithOptions(request, runtime);
  }

  async deleteDevopsProjectMembersWithOptions(request: DeleteDevopsProjectMembersRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDevopsProjectMembersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDevopsProjectMembersResponse>(await this.doRPCRequest("DeleteDevopsProjectMembers", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDevopsProjectMembersResponse({}));
  }

  async deleteDevopsProjectMembers(request: DeleteDevopsProjectMembersRequest): Promise<DeleteDevopsProjectMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDevopsProjectMembersWithOptions(request, runtime);
  }

  async deleteDevopsProjectSprintWithOptions(request: DeleteDevopsProjectSprintRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDevopsProjectSprintResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDevopsProjectSprintResponse>(await this.doRPCRequest("DeleteDevopsProjectSprint", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDevopsProjectSprintResponse({}));
  }

  async deleteDevopsProjectSprint(request: DeleteDevopsProjectSprintRequest): Promise<DeleteDevopsProjectSprintResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDevopsProjectSprintWithOptions(request, runtime);
  }

  async deleteDevopsProjectTaskWithOptions(request: DeleteDevopsProjectTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDevopsProjectTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDevopsProjectTaskResponse>(await this.doRPCRequest("DeleteDevopsProjectTask", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDevopsProjectTaskResponse({}));
  }

  async deleteDevopsProjectTask(request: DeleteDevopsProjectTaskRequest): Promise<DeleteDevopsProjectTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDevopsProjectTaskWithOptions(request, runtime);
  }

  async deletePipelineMemberWithOptions(request: DeletePipelineMemberRequest, runtime: $Util.RuntimeOptions): Promise<DeletePipelineMemberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeletePipelineMemberResponse>(await this.doRPCRequest("DeletePipelineMember", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new DeletePipelineMemberResponse({}));
  }

  async deletePipelineMember(request: DeletePipelineMemberRequest): Promise<DeletePipelineMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePipelineMemberWithOptions(request, runtime);
  }

  async executePipelineWithOptions(request: ExecutePipelineRequest, runtime: $Util.RuntimeOptions): Promise<ExecutePipelineResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExecutePipelineResponse>(await this.doRPCRequest("ExecutePipeline", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new ExecutePipelineResponse({}));
  }

  async executePipeline(request: ExecutePipelineRequest): Promise<ExecutePipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executePipelineWithOptions(request, runtime);
  }

  async getDevopsOrganizationMembersWithOptions(request: GetDevopsOrganizationMembersRequest, runtime: $Util.RuntimeOptions): Promise<GetDevopsOrganizationMembersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDevopsOrganizationMembersResponse>(await this.doRPCRequest("GetDevopsOrganizationMembers", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new GetDevopsOrganizationMembersResponse({}));
  }

  async getDevopsOrganizationMembers(request: GetDevopsOrganizationMembersRequest): Promise<GetDevopsOrganizationMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDevopsOrganizationMembersWithOptions(request, runtime);
  }

  async getDevopsProjectInfoWithOptions(request: GetDevopsProjectInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetDevopsProjectInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDevopsProjectInfoResponse>(await this.doRPCRequest("GetDevopsProjectInfo", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new GetDevopsProjectInfoResponse({}));
  }

  async getDevopsProjectInfo(request: GetDevopsProjectInfoRequest): Promise<GetDevopsProjectInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDevopsProjectInfoWithOptions(request, runtime);
  }

  async getDevopsProjectMembersWithOptions(request: GetDevopsProjectMembersRequest, runtime: $Util.RuntimeOptions): Promise<GetDevopsProjectMembersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDevopsProjectMembersResponse>(await this.doRPCRequest("GetDevopsProjectMembers", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new GetDevopsProjectMembersResponse({}));
  }

  async getDevopsProjectMembers(request: GetDevopsProjectMembersRequest): Promise<GetDevopsProjectMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDevopsProjectMembersWithOptions(request, runtime);
  }

  async getDevopsProjectSprintInfoWithOptions(request: GetDevopsProjectSprintInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetDevopsProjectSprintInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDevopsProjectSprintInfoResponse>(await this.doRPCRequest("GetDevopsProjectSprintInfo", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new GetDevopsProjectSprintInfoResponse({}));
  }

  async getDevopsProjectSprintInfo(request: GetDevopsProjectSprintInfoRequest): Promise<GetDevopsProjectSprintInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDevopsProjectSprintInfoWithOptions(request, runtime);
  }

  async getDevopsProjectTaskInfoWithOptions(request: GetDevopsProjectTaskInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetDevopsProjectTaskInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDevopsProjectTaskInfoResponse>(await this.doRPCRequest("GetDevopsProjectTaskInfo", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new GetDevopsProjectTaskInfoResponse({}));
  }

  async getDevopsProjectTaskInfo(request: GetDevopsProjectTaskInfoRequest): Promise<GetDevopsProjectTaskInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDevopsProjectTaskInfoWithOptions(request, runtime);
  }

  async getLastWorkspaceWithOptions(request: GetLastWorkspaceRequest, runtime: $Util.RuntimeOptions): Promise<GetLastWorkspaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetLastWorkspaceResponse>(await this.doRPCRequest("GetLastWorkspace", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new GetLastWorkspaceResponse({}));
  }

  async getLastWorkspace(request: GetLastWorkspaceRequest): Promise<GetLastWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLastWorkspaceWithOptions(request, runtime);
  }

  async getPipelineInstanceBuildNumberStatusWithOptions(request: GetPipelineInstanceBuildNumberStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetPipelineInstanceBuildNumberStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPipelineInstanceBuildNumberStatusResponse>(await this.doRPCRequest("GetPipelineInstanceBuildNumberStatus", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new GetPipelineInstanceBuildNumberStatusResponse({}));
  }

  async getPipelineInstanceBuildNumberStatus(request: GetPipelineInstanceBuildNumberStatusRequest): Promise<GetPipelineInstanceBuildNumberStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPipelineInstanceBuildNumberStatusWithOptions(request, runtime);
  }

  async getPipelineInstanceGroupStatusWithOptions(request: GetPipelineInstanceGroupStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetPipelineInstanceGroupStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPipelineInstanceGroupStatusResponse>(await this.doRPCRequest("GetPipelineInstanceGroupStatus", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new GetPipelineInstanceGroupStatusResponse({}));
  }

  async getPipelineInstanceGroupStatus(request: GetPipelineInstanceGroupStatusRequest): Promise<GetPipelineInstanceGroupStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPipelineInstanceGroupStatusWithOptions(request, runtime);
  }

  async getPipelineInstanceInfoWithOptions(request: GetPipelineInstanceInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetPipelineInstanceInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPipelineInstanceInfoResponse>(await this.doRPCRequest("GetPipelineInstanceInfo", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new GetPipelineInstanceInfoResponse({}));
  }

  async getPipelineInstanceInfo(request: GetPipelineInstanceInfoRequest): Promise<GetPipelineInstanceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPipelineInstanceInfoWithOptions(request, runtime);
  }

  async getPipelineInstanceStatusWithOptions(request: GetPipelineInstanceStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetPipelineInstanceStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPipelineInstanceStatusResponse>(await this.doRPCRequest("GetPipelineInstanceStatus", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new GetPipelineInstanceStatusResponse({}));
  }

  async getPipelineInstanceStatus(request: GetPipelineInstanceStatusRequest): Promise<GetPipelineInstanceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPipelineInstanceStatusWithOptions(request, runtime);
  }

  async getPipelineInstHistoryWithOptions(request: GetPipelineInstHistoryRequest, runtime: $Util.RuntimeOptions): Promise<GetPipelineInstHistoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPipelineInstHistoryResponse>(await this.doRPCRequest("GetPipelineInstHistory", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new GetPipelineInstHistoryResponse({}));
  }

  async getPipelineInstHistory(request: GetPipelineInstHistoryRequest): Promise<GetPipelineInstHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPipelineInstHistoryWithOptions(request, runtime);
  }

  async getPipelineLogWithOptions(request: GetPipelineLogRequest, runtime: $Util.RuntimeOptions): Promise<GetPipelineLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPipelineLogResponse>(await this.doRPCRequest("GetPipelineLog", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new GetPipelineLogResponse({}));
  }

  async getPipelineLog(request: GetPipelineLogRequest): Promise<GetPipelineLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPipelineLogWithOptions(request, runtime);
  }

  async getPipelineStepLogWithOptions(request: GetPipelineStepLogRequest, runtime: $Util.RuntimeOptions): Promise<GetPipelineStepLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPipelineStepLogResponse>(await this.doRPCRequest("GetPipelineStepLog", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new GetPipelineStepLogResponse({}));
  }

  async getPipelineStepLog(request: GetPipelineStepLogRequest): Promise<GetPipelineStepLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPipelineStepLogWithOptions(request, runtime);
  }

  async getPipleineLatestInstanceStatusWithOptions(request: GetPipleineLatestInstanceStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetPipleineLatestInstanceStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPipleineLatestInstanceStatusResponse>(await this.doRPCRequest("GetPipleineLatestInstanceStatus", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new GetPipleineLatestInstanceStatusResponse({}));
  }

  async getPipleineLatestInstanceStatus(request: GetPipleineLatestInstanceStatusRequest): Promise<GetPipleineLatestInstanceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPipleineLatestInstanceStatusWithOptions(request, runtime);
  }

  async getProjectOptionWithOptions(request: GetProjectOptionRequest, runtime: $Util.RuntimeOptions): Promise<GetProjectOptionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetProjectOptionResponse>(await this.doRPCRequest("GetProjectOption", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new GetProjectOptionResponse({}));
  }

  async getProjectOption(request: GetProjectOptionRequest): Promise<GetProjectOptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProjectOptionWithOptions(request, runtime);
  }

  async getTaskDetailActivityWithOptions(request: GetTaskDetailActivityRequest, runtime: $Util.RuntimeOptions): Promise<GetTaskDetailActivityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTaskDetailActivityResponse>(await this.doRPCRequest("GetTaskDetailActivity", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new GetTaskDetailActivityResponse({}));
  }

  async getTaskDetailActivity(request: GetTaskDetailActivityRequest): Promise<GetTaskDetailActivityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTaskDetailActivityWithOptions(request, runtime);
  }

  async getTaskDetailBaseWithOptions(request: GetTaskDetailBaseRequest, runtime: $Util.RuntimeOptions): Promise<GetTaskDetailBaseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTaskDetailBaseResponse>(await this.doRPCRequest("GetTaskDetailBase", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new GetTaskDetailBaseResponse({}));
  }

  async getTaskDetailBase(request: GetTaskDetailBaseRequest): Promise<GetTaskDetailBaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTaskDetailBaseWithOptions(request, runtime);
  }

  async getTaskListFilterWithOptions(request: GetTaskListFilterRequest, runtime: $Util.RuntimeOptions): Promise<GetTaskListFilterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTaskListFilterResponse>(await this.doRPCRequest("GetTaskListFilter", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new GetTaskListFilterResponse({}));
  }

  async getTaskListFilter(request: GetTaskListFilterRequest): Promise<GetTaskListFilterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTaskListFilterWithOptions(request, runtime);
  }

  async getUserByAliyunUidWithOptions(request: GetUserByAliyunUidRequest, runtime: $Util.RuntimeOptions): Promise<GetUserByAliyunUidResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetUserByAliyunUidResponse>(await this.doRPCRequest("GetUserByAliyunUid", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new GetUserByAliyunUidResponse({}));
  }

  async getUserByAliyunUid(request: GetUserByAliyunUidRequest): Promise<GetUserByAliyunUidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserByAliyunUidWithOptions(request, runtime);
  }

  async getUserNameWithOptions(request: GetUserNameRequest, runtime: $Util.RuntimeOptions): Promise<GetUserNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetUserNameResponse>(await this.doRPCRequest("GetUserName", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new GetUserNameResponse({}));
  }

  async getUserName(request: GetUserNameRequest): Promise<GetUserNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserNameWithOptions(request, runtime);
  }

  async insertDevopsUserWithOptions(request: InsertDevopsUserRequest, runtime: $Util.RuntimeOptions): Promise<InsertDevopsUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InsertDevopsUserResponse>(await this.doRPCRequest("InsertDevopsUser", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new InsertDevopsUserResponse({}));
  }

  async insertDevopsUser(request: InsertDevopsUserRequest): Promise<InsertDevopsUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.insertDevopsUserWithOptions(request, runtime);
  }

  async insertPipelineMemberWithOptions(request: InsertPipelineMemberRequest, runtime: $Util.RuntimeOptions): Promise<InsertPipelineMemberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InsertPipelineMemberResponse>(await this.doRPCRequest("InsertPipelineMember", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new InsertPipelineMemberResponse({}));
  }

  async insertPipelineMember(request: InsertPipelineMemberRequest): Promise<InsertPipelineMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.insertPipelineMemberWithOptions(request, runtime);
  }

  async insertProjectMembersWithOptions(request: InsertProjectMembersRequest, runtime: $Util.RuntimeOptions): Promise<InsertProjectMembersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InsertProjectMembersResponse>(await this.doRPCRequest("InsertProjectMembers", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new InsertProjectMembersResponse({}));
  }

  async insertProjectMembers(request: InsertProjectMembersRequest): Promise<InsertProjectMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.insertProjectMembersWithOptions(request, runtime);
  }

  async listCommonGroupWithOptions(request: ListCommonGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListCommonGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListCommonGroupResponse>(await this.doRPCRequest("ListCommonGroup", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new ListCommonGroupResponse({}));
  }

  async listCommonGroup(request: ListCommonGroupRequest): Promise<ListCommonGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCommonGroupWithOptions(request, runtime);
  }

  async listCredentialsWithOptions(request: ListCredentialsRequest, runtime: $Util.RuntimeOptions): Promise<ListCredentialsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListCredentialsResponse>(await this.doRPCRequest("ListCredentials", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new ListCredentialsResponse({}));
  }

  async listCredentials(request: ListCredentialsRequest): Promise<ListCredentialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCredentialsWithOptions(request, runtime);
  }

  async listDevopsProjectSprintsWithOptions(request: ListDevopsProjectSprintsRequest, runtime: $Util.RuntimeOptions): Promise<ListDevopsProjectSprintsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDevopsProjectSprintsResponse>(await this.doRPCRequest("ListDevopsProjectSprints", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new ListDevopsProjectSprintsResponse({}));
  }

  async listDevopsProjectSprints(request: ListDevopsProjectSprintsRequest): Promise<ListDevopsProjectSprintsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDevopsProjectSprintsWithOptions(request, runtime);
  }

  async listDevopsProjectTaskFlowWithOptions(request: ListDevopsProjectTaskFlowRequest, runtime: $Util.RuntimeOptions): Promise<ListDevopsProjectTaskFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDevopsProjectTaskFlowResponse>(await this.doRPCRequest("ListDevopsProjectTaskFlow", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new ListDevopsProjectTaskFlowResponse({}));
  }

  async listDevopsProjectTaskFlow(request: ListDevopsProjectTaskFlowRequest): Promise<ListDevopsProjectTaskFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDevopsProjectTaskFlowWithOptions(request, runtime);
  }

  async listDevopsProjectTaskFlowStatusWithOptions(request: ListDevopsProjectTaskFlowStatusRequest, runtime: $Util.RuntimeOptions): Promise<ListDevopsProjectTaskFlowStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDevopsProjectTaskFlowStatusResponse>(await this.doRPCRequest("ListDevopsProjectTaskFlowStatus", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new ListDevopsProjectTaskFlowStatusResponse({}));
  }

  async listDevopsProjectTaskFlowStatus(request: ListDevopsProjectTaskFlowStatusRequest): Promise<ListDevopsProjectTaskFlowStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDevopsProjectTaskFlowStatusWithOptions(request, runtime);
  }

  async listDevopsProjectTaskListWithOptions(request: ListDevopsProjectTaskListRequest, runtime: $Util.RuntimeOptions): Promise<ListDevopsProjectTaskListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDevopsProjectTaskListResponse>(await this.doRPCRequest("ListDevopsProjectTaskList", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new ListDevopsProjectTaskListResponse({}));
  }

  async listDevopsProjectTaskList(request: ListDevopsProjectTaskListRequest): Promise<ListDevopsProjectTaskListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDevopsProjectTaskListWithOptions(request, runtime);
  }

  async listDevopsProjectTasksWithOptions(request: ListDevopsProjectTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListDevopsProjectTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDevopsProjectTasksResponse>(await this.doRPCRequest("ListDevopsProjectTasks", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new ListDevopsProjectTasksResponse({}));
  }

  async listDevopsProjectTasks(request: ListDevopsProjectTasksRequest): Promise<ListDevopsProjectTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDevopsProjectTasksWithOptions(request, runtime);
  }

  async listDevopsScenarioFieldConfigWithOptions(request: ListDevopsScenarioFieldConfigRequest, runtime: $Util.RuntimeOptions): Promise<ListDevopsScenarioFieldConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDevopsScenarioFieldConfigResponse>(await this.doRPCRequest("ListDevopsScenarioFieldConfig", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new ListDevopsScenarioFieldConfigResponse({}));
  }

  async listDevopsScenarioFieldConfig(request: ListDevopsScenarioFieldConfigRequest): Promise<ListDevopsScenarioFieldConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDevopsScenarioFieldConfigWithOptions(request, runtime);
  }

  async listPipelinesWithOptions(request: ListPipelinesRequest, runtime: $Util.RuntimeOptions): Promise<ListPipelinesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPipelinesResponse>(await this.doRPCRequest("ListPipelines", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new ListPipelinesResponse({}));
  }

  async listPipelines(request: ListPipelinesRequest): Promise<ListPipelinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPipelinesWithOptions(request, runtime);
  }

  async listProjectCustomFieldsWithOptions(request: ListProjectCustomFieldsRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectCustomFieldsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListProjectCustomFieldsResponse>(await this.doRPCRequest("ListProjectCustomFields", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new ListProjectCustomFieldsResponse({}));
  }

  async listProjectCustomFields(request: ListProjectCustomFieldsRequest): Promise<ListProjectCustomFieldsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectCustomFieldsWithOptions(request, runtime);
  }

  async listServiceConnectionsWithOptions(request: ListServiceConnectionsRequest, runtime: $Util.RuntimeOptions): Promise<ListServiceConnectionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListServiceConnectionsResponse>(await this.doRPCRequest("ListServiceConnections", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new ListServiceConnectionsResponse({}));
  }

  async listServiceConnections(request: ListServiceConnectionsRequest): Promise<ListServiceConnectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServiceConnectionsWithOptions(request, runtime);
  }

  async listSmartGroupWithOptions(request: ListSmartGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListSmartGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSmartGroupResponse>(await this.doRPCRequest("ListSmartGroup", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new ListSmartGroupResponse({}));
  }

  async listSmartGroup(request: ListSmartGroupRequest): Promise<ListSmartGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSmartGroupWithOptions(request, runtime);
  }

  async listUserOrganizationWithOptions(request: ListUserOrganizationRequest, runtime: $Util.RuntimeOptions): Promise<ListUserOrganizationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUserOrganizationResponse>(await this.doRPCRequest("ListUserOrganization", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new ListUserOrganizationResponse({}));
  }

  async listUserOrganization(request: ListUserOrganizationRequest): Promise<ListUserOrganizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserOrganizationWithOptions(request, runtime);
  }

  async transferPipelineOwnerWithOptions(request: TransferPipelineOwnerRequest, runtime: $Util.RuntimeOptions): Promise<TransferPipelineOwnerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TransferPipelineOwnerResponse>(await this.doRPCRequest("TransferPipelineOwner", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new TransferPipelineOwnerResponse({}));
  }

  async transferPipelineOwner(request: TransferPipelineOwnerRequest): Promise<TransferPipelineOwnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferPipelineOwnerWithOptions(request, runtime);
  }

  async updateCommonGroupWithOptions(request: UpdateCommonGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCommonGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateCommonGroupResponse>(await this.doRPCRequest("UpdateCommonGroup", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateCommonGroupResponse({}));
  }

  async updateCommonGroup(request: UpdateCommonGroupRequest): Promise<UpdateCommonGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCommonGroupWithOptions(request, runtime);
  }

  async updateDevopsProjectWithOptions(request: UpdateDevopsProjectRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDevopsProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDevopsProjectResponse>(await this.doRPCRequest("UpdateDevopsProject", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDevopsProjectResponse({}));
  }

  async updateDevopsProject(request: UpdateDevopsProjectRequest): Promise<UpdateDevopsProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDevopsProjectWithOptions(request, runtime);
  }

  async updateDevopsProjectSprintWithOptions(request: UpdateDevopsProjectSprintRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDevopsProjectSprintResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDevopsProjectSprintResponse>(await this.doRPCRequest("UpdateDevopsProjectSprint", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDevopsProjectSprintResponse({}));
  }

  async updateDevopsProjectSprint(request: UpdateDevopsProjectSprintRequest): Promise<UpdateDevopsProjectSprintResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDevopsProjectSprintWithOptions(request, runtime);
  }

  async updateDevopsProjectTaskWithOptions(request: UpdateDevopsProjectTaskRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDevopsProjectTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDevopsProjectTaskResponse>(await this.doRPCRequest("UpdateDevopsProjectTask", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDevopsProjectTaskResponse({}));
  }

  async updateDevopsProjectTask(request: UpdateDevopsProjectTaskRequest): Promise<UpdateDevopsProjectTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDevopsProjectTaskWithOptions(request, runtime);
  }

  async updatePipelineMemberWithOptions(request: UpdatePipelineMemberRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePipelineMemberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdatePipelineMemberResponse>(await this.doRPCRequest("UpdatePipelineMember", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new UpdatePipelineMemberResponse({}));
  }

  async updatePipelineMember(request: UpdatePipelineMemberRequest): Promise<UpdatePipelineMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePipelineMemberWithOptions(request, runtime);
  }

  async updateTaskDetailWithOptions(request: UpdateTaskDetailRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTaskDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateTaskDetailResponse>(await this.doRPCRequest("UpdateTaskDetail", "2020-03-03", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateTaskDetailResponse({}));
  }

  async updateTaskDetail(request: UpdateTaskDetailRequest): Promise<UpdateTaskDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTaskDetailWithOptions(request, runtime);
  }

}
