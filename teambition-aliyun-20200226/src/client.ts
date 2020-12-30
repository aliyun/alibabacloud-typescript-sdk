// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddProjectMembersRequest extends $tea.Model {
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

export class AddProjectMembersResponseBody extends $tea.Model {
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

export class AddProjectMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddProjectMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddProjectMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplySmallMicroRequest extends $tea.Model {
  orgId?: string;
  type?: string;
  orgName?: string;
  applicantName?: string;
  applicantTel?: string;
  applicantEmail?: string;
  applicantPosition?: string;
  developScale?: string;
  developLanguage?: string;
  businessModel?: string;
  solution?: string;
  forHelp?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      type: 'Type',
      orgName: 'OrgName',
      applicantName: 'ApplicantName',
      applicantTel: 'ApplicantTel',
      applicantEmail: 'ApplicantEmail',
      applicantPosition: 'ApplicantPosition',
      developScale: 'DevelopScale',
      developLanguage: 'DevelopLanguage',
      businessModel: 'BusinessModel',
      solution: 'Solution',
      forHelp: 'ForHelp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      type: 'string',
      orgName: 'string',
      applicantName: 'string',
      applicantTel: 'string',
      applicantEmail: 'string',
      applicantPosition: 'string',
      developScale: 'string',
      developLanguage: 'string',
      businessModel: 'string',
      solution: 'string',
      forHelp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplySmallMicroResponseBody extends $tea.Model {
  result?: { [key: string]: any };
  code?: number;
  requestId?: string;
  raw?: boolean;
  message?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      code: 'code',
      requestId: 'RequestId',
      raw: 'raw',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      code: 'number',
      requestId: 'string',
      raw: 'boolean',
      message: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplySmallMicroResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ApplySmallMicroResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ApplySmallMicroResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BactchInsertMembersRequest extends $tea.Model {
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

export class BactchInsertMembersResponseBody extends $tea.Model {
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

export class BactchInsertMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BactchInsertMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BactchInsertMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAliyunUserExistsRequest extends $tea.Model {
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

export class CheckAliyunUserExistsResponseBody extends $tea.Model {
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

export class CheckAliyunUserExistsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckAliyunUserExistsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckAliyunUserExistsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDevopsOrgRequest extends $tea.Model {
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

export class CreateDevopsOrgResponseBody extends $tea.Model {
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

export class CreateDevopsOrgResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDevopsOrgResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDevopsOrgResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequest extends $tea.Model {
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

export class CreateProjectResponseBody extends $tea.Model {
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

export class CreateProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectSprintRequest extends $tea.Model {
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

export class CreateProjectSprintResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: CreateProjectSprintResponseBodyObject;
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
      object: CreateProjectSprintResponseBodyObject,
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectSprintResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateProjectSprintResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateProjectSprintResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectTaskRequest extends $tea.Model {
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

export class CreateProjectTaskResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: CreateProjectTaskResponseBodyObject;
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
      object: CreateProjectTaskResponseBodyObject,
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateProjectTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateProjectTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMembersForOrgRequest extends $tea.Model {
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

export class DeleteMembersForOrgResponseBody extends $tea.Model {
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

export class DeleteMembersForOrgResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteMembersForOrgResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteMembersForOrgResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectRequest extends $tea.Model {
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

export class DeleteProjectResponseBody extends $tea.Model {
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

export class DeleteProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectMembersRequest extends $tea.Model {
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

export class DeleteProjectMembersResponseBody extends $tea.Model {
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

export class DeleteProjectMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteProjectMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteProjectMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectSprintRequest extends $tea.Model {
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

export class DeleteProjectSprintResponseBody extends $tea.Model {
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

export class DeleteProjectSprintResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteProjectSprintResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteProjectSprintResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectTaskRequest extends $tea.Model {
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

export class DeleteProjectTaskResponseBody extends $tea.Model {
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

export class DeleteProjectTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteProjectTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteProjectTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrganizationMembersRequest extends $tea.Model {
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

export class GetOrganizationMembersResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: GetOrganizationMembersResponseBodyObject[];
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
      object: { 'type': 'array', 'itemType': GetOrganizationMembersResponseBodyObject },
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrganizationMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOrganizationMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOrganizationMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectInfoRequest extends $tea.Model {
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

export class GetProjectInfoResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: GetProjectInfoResponseBodyObject;
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
      object: GetProjectInfoResponseBodyObject,
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetProjectInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetProjectInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectMembersRequest extends $tea.Model {
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

export class GetProjectMembersResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: GetProjectMembersResponseBodyObject[];
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
      object: { 'type': 'array', 'itemType': GetProjectMembersResponseBodyObject },
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetProjectMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetProjectMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectSprintInfoRequest extends $tea.Model {
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

export class GetProjectSprintInfoResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: GetProjectSprintInfoResponseBodyObject;
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
      object: GetProjectSprintInfoResponseBodyObject,
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectSprintInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetProjectSprintInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetProjectSprintInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectTaskInfoRequest extends $tea.Model {
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

export class GetProjectTaskInfoResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: GetProjectTaskInfoResponseBodyObject;
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
      object: GetProjectTaskInfoResponseBodyObject,
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectTaskInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetProjectTaskInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetProjectTaskInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByUidRequest extends $tea.Model {
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

export class GetUserByUidResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: GetUserByUidResponseBodyObject;
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
      object: GetUserByUidResponseBodyObject,
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByUidResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetUserByUidResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUserByUidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertDevopsMemberRequest extends $tea.Model {
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

export class InsertDevopsMemberResponseBody extends $tea.Model {
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

export class InsertDevopsMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InsertDevopsMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InsertDevopsMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectSprintsRequest extends $tea.Model {
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

export class ListProjectSprintsResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: ListProjectSprintsResponseBodyObject[];
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
      object: { 'type': 'array', 'itemType': ListProjectSprintsResponseBodyObject },
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectSprintsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListProjectSprintsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListProjectSprintsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectTaskFlowRequest extends $tea.Model {
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

export class ListProjectTaskFlowResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: ListProjectTaskFlowResponseBodyObject[];
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
      object: { 'type': 'array', 'itemType': ListProjectTaskFlowResponseBodyObject },
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectTaskFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListProjectTaskFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListProjectTaskFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectTaskFlowStatusRequest extends $tea.Model {
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

export class ListProjectTaskFlowStatusResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: ListProjectTaskFlowStatusResponseBodyObject[];
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
      object: { 'type': 'array', 'itemType': ListProjectTaskFlowStatusResponseBodyObject },
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectTaskFlowStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListProjectTaskFlowStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListProjectTaskFlowStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectTasksRequest extends $tea.Model {
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

export class ListProjectTasksResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: ListProjectTasksResponseBodyObject[];
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
      object: { 'type': 'array', 'itemType': ListProjectTasksResponseBodyObject },
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListProjectTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListProjectTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenarioFieldConfigRequest extends $tea.Model {
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

export class ListScenarioFieldConfigResponseBody extends $tea.Model {
  requestId?: string;
  errorMsg?: string;
  object?: ListScenarioFieldConfigResponseBodyObject[];
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
      object: { 'type': 'array', 'itemType': ListScenarioFieldConfigResponseBodyObject },
      errorCode: 'string',
      successful: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenarioFieldConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListScenarioFieldConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListScenarioFieldConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectRequest extends $tea.Model {
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

export class UpdateProjectResponseBody extends $tea.Model {
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

export class UpdateProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectSprintRequest extends $tea.Model {
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

export class UpdateProjectSprintResponseBody extends $tea.Model {
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

export class UpdateProjectSprintResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateProjectSprintResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateProjectSprintResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectTaskRequest extends $tea.Model {
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

export class UpdateProjectTaskResponseBody extends $tea.Model {
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

export class UpdateProjectTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateProjectTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateProjectTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectSprintResponseBodyObjectPlanToDo extends $tea.Model {
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

export class CreateProjectSprintResponseBodyObject extends $tea.Model {
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
  planToDo?: CreateProjectSprintResponseBodyObjectPlanToDo;
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
      planToDo: CreateProjectSprintResponseBodyObjectPlanToDo,
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectTaskResponseBodyObject extends $tea.Model {
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

export class GetOrganizationMembersResponseBodyObject extends $tea.Model {
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

export class GetProjectInfoResponseBodyObject extends $tea.Model {
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

export class GetProjectMembersResponseBodyObject extends $tea.Model {
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

export class GetProjectSprintInfoResponseBodyObjectPlanToDo extends $tea.Model {
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

export class GetProjectSprintInfoResponseBodyObject extends $tea.Model {
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
  planToDo?: GetProjectSprintInfoResponseBodyObjectPlanToDo;
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
      planToDo: GetProjectSprintInfoResponseBodyObjectPlanToDo,
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectTaskInfoResponseBodyObject extends $tea.Model {
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

export class GetUserByUidResponseBodyObject extends $tea.Model {
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

export class ListProjectSprintsResponseBodyObjectPlanToDo extends $tea.Model {
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

export class ListProjectSprintsResponseBodyObject extends $tea.Model {
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
  planToDo?: ListProjectSprintsResponseBodyObjectPlanToDo;
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
      planToDo: ListProjectSprintsResponseBodyObjectPlanToDo,
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectTaskFlowResponseBodyObject extends $tea.Model {
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

export class ListProjectTaskFlowStatusResponseBodyObject extends $tea.Model {
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

export class ListProjectTasksResponseBodyObject extends $tea.Model {
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

export class ListScenarioFieldConfigResponseBodyObject extends $tea.Model {
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


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("teambition-aliyun", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addProjectMembersWithOptions(request: AddProjectMembersRequest, runtime: $Util.RuntimeOptions): Promise<AddProjectMembersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddProjectMembersResponse>(await this.doRPCRequest("AddProjectMembers", "2020-02-26", "HTTPS", "POST", "AK", "json", req, runtime), new AddProjectMembersResponse({}));
  }

  async addProjectMembers(request: AddProjectMembersRequest): Promise<AddProjectMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addProjectMembersWithOptions(request, runtime);
  }

  async applySmallMicroWithOptions(request: ApplySmallMicroRequest, runtime: $Util.RuntimeOptions): Promise<ApplySmallMicroResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ApplySmallMicroResponse>(await this.doRPCRequest("ApplySmallMicro", "2020-02-26", "HTTPS", "POST", "AK", "json", req, runtime), new ApplySmallMicroResponse({}));
  }

  async applySmallMicro(request: ApplySmallMicroRequest): Promise<ApplySmallMicroResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applySmallMicroWithOptions(request, runtime);
  }

  async bactchInsertMembersWithOptions(request: BactchInsertMembersRequest, runtime: $Util.RuntimeOptions): Promise<BactchInsertMembersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BactchInsertMembersResponse>(await this.doRPCRequest("BactchInsertMembers", "2020-02-26", "HTTPS", "POST", "AK", "json", req, runtime), new BactchInsertMembersResponse({}));
  }

  async bactchInsertMembers(request: BactchInsertMembersRequest): Promise<BactchInsertMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bactchInsertMembersWithOptions(request, runtime);
  }

  async checkAliyunUserExistsWithOptions(request: CheckAliyunUserExistsRequest, runtime: $Util.RuntimeOptions): Promise<CheckAliyunUserExistsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckAliyunUserExistsResponse>(await this.doRPCRequest("CheckAliyunUserExists", "2020-02-26", "HTTPS", "POST", "AK", "json", req, runtime), new CheckAliyunUserExistsResponse({}));
  }

  async checkAliyunUserExists(request: CheckAliyunUserExistsRequest): Promise<CheckAliyunUserExistsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkAliyunUserExistsWithOptions(request, runtime);
  }

  async createDevopsOrgWithOptions(request: CreateDevopsOrgRequest, runtime: $Util.RuntimeOptions): Promise<CreateDevopsOrgResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDevopsOrgResponse>(await this.doRPCRequest("CreateDevopsOrg", "2020-02-26", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDevopsOrgResponse({}));
  }

  async createDevopsOrg(request: CreateDevopsOrgRequest): Promise<CreateDevopsOrgResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDevopsOrgWithOptions(request, runtime);
  }

  async createProjectWithOptions(request: CreateProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateProjectResponse>(await this.doRPCRequest("CreateProject", "2020-02-26", "HTTPS", "POST", "AK", "json", req, runtime), new CreateProjectResponse({}));
  }

  async createProject(request: CreateProjectRequest): Promise<CreateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProjectWithOptions(request, runtime);
  }

  async createProjectSprintWithOptions(request: CreateProjectSprintRequest, runtime: $Util.RuntimeOptions): Promise<CreateProjectSprintResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateProjectSprintResponse>(await this.doRPCRequest("CreateProjectSprint", "2020-02-26", "HTTPS", "POST", "AK", "json", req, runtime), new CreateProjectSprintResponse({}));
  }

  async createProjectSprint(request: CreateProjectSprintRequest): Promise<CreateProjectSprintResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProjectSprintWithOptions(request, runtime);
  }

  async createProjectTaskWithOptions(request: CreateProjectTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateProjectTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateProjectTaskResponse>(await this.doRPCRequest("CreateProjectTask", "2020-02-26", "HTTPS", "POST", "AK", "json", req, runtime), new CreateProjectTaskResponse({}));
  }

  async createProjectTask(request: CreateProjectTaskRequest): Promise<CreateProjectTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProjectTaskWithOptions(request, runtime);
  }

  async deleteMembersForOrgWithOptions(request: DeleteMembersForOrgRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMembersForOrgResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteMembersForOrgResponse>(await this.doRPCRequest("DeleteMembersForOrg", "2020-02-26", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteMembersForOrgResponse({}));
  }

  async deleteMembersForOrg(request: DeleteMembersForOrgRequest): Promise<DeleteMembersForOrgResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMembersForOrgWithOptions(request, runtime);
  }

  async deleteProjectWithOptions(request: DeleteProjectRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteProjectResponse>(await this.doRPCRequest("DeleteProject", "2020-02-26", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteProjectResponse({}));
  }

  async deleteProject(request: DeleteProjectRequest): Promise<DeleteProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProjectWithOptions(request, runtime);
  }

  async deleteProjectMembersWithOptions(request: DeleteProjectMembersRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProjectMembersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteProjectMembersResponse>(await this.doRPCRequest("DeleteProjectMembers", "2020-02-26", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteProjectMembersResponse({}));
  }

  async deleteProjectMembers(request: DeleteProjectMembersRequest): Promise<DeleteProjectMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProjectMembersWithOptions(request, runtime);
  }

  async deleteProjectSprintWithOptions(request: DeleteProjectSprintRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProjectSprintResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteProjectSprintResponse>(await this.doRPCRequest("DeleteProjectSprint", "2020-02-26", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteProjectSprintResponse({}));
  }

  async deleteProjectSprint(request: DeleteProjectSprintRequest): Promise<DeleteProjectSprintResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProjectSprintWithOptions(request, runtime);
  }

  async deleteProjectTaskWithOptions(request: DeleteProjectTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProjectTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteProjectTaskResponse>(await this.doRPCRequest("DeleteProjectTask", "2020-02-26", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteProjectTaskResponse({}));
  }

  async deleteProjectTask(request: DeleteProjectTaskRequest): Promise<DeleteProjectTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProjectTaskWithOptions(request, runtime);
  }

  async getOrganizationMembersWithOptions(request: GetOrganizationMembersRequest, runtime: $Util.RuntimeOptions): Promise<GetOrganizationMembersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetOrganizationMembersResponse>(await this.doRPCRequest("GetOrganizationMembers", "2020-02-26", "HTTPS", "POST", "AK", "json", req, runtime), new GetOrganizationMembersResponse({}));
  }

  async getOrganizationMembers(request: GetOrganizationMembersRequest): Promise<GetOrganizationMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOrganizationMembersWithOptions(request, runtime);
  }

  async getProjectInfoWithOptions(request: GetProjectInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetProjectInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetProjectInfoResponse>(await this.doRPCRequest("GetProjectInfo", "2020-02-26", "HTTPS", "POST", "AK", "json", req, runtime), new GetProjectInfoResponse({}));
  }

  async getProjectInfo(request: GetProjectInfoRequest): Promise<GetProjectInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProjectInfoWithOptions(request, runtime);
  }

  async getProjectMembersWithOptions(request: GetProjectMembersRequest, runtime: $Util.RuntimeOptions): Promise<GetProjectMembersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetProjectMembersResponse>(await this.doRPCRequest("GetProjectMembers", "2020-02-26", "HTTPS", "POST", "AK", "json", req, runtime), new GetProjectMembersResponse({}));
  }

  async getProjectMembers(request: GetProjectMembersRequest): Promise<GetProjectMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProjectMembersWithOptions(request, runtime);
  }

  async getProjectSprintInfoWithOptions(request: GetProjectSprintInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetProjectSprintInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetProjectSprintInfoResponse>(await this.doRPCRequest("GetProjectSprintInfo", "2020-02-26", "HTTPS", "POST", "AK", "json", req, runtime), new GetProjectSprintInfoResponse({}));
  }

  async getProjectSprintInfo(request: GetProjectSprintInfoRequest): Promise<GetProjectSprintInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProjectSprintInfoWithOptions(request, runtime);
  }

  async getProjectTaskInfoWithOptions(request: GetProjectTaskInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetProjectTaskInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetProjectTaskInfoResponse>(await this.doRPCRequest("GetProjectTaskInfo", "2020-02-26", "HTTPS", "POST", "AK", "json", req, runtime), new GetProjectTaskInfoResponse({}));
  }

  async getProjectTaskInfo(request: GetProjectTaskInfoRequest): Promise<GetProjectTaskInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProjectTaskInfoWithOptions(request, runtime);
  }

  async getUserByUidWithOptions(request: GetUserByUidRequest, runtime: $Util.RuntimeOptions): Promise<GetUserByUidResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetUserByUidResponse>(await this.doRPCRequest("GetUserByUid", "2020-02-26", "HTTPS", "POST", "AK", "json", req, runtime), new GetUserByUidResponse({}));
  }

  async getUserByUid(request: GetUserByUidRequest): Promise<GetUserByUidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserByUidWithOptions(request, runtime);
  }

  async insertDevopsMemberWithOptions(request: InsertDevopsMemberRequest, runtime: $Util.RuntimeOptions): Promise<InsertDevopsMemberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InsertDevopsMemberResponse>(await this.doRPCRequest("InsertDevopsMember", "2020-02-26", "HTTPS", "POST", "AK", "json", req, runtime), new InsertDevopsMemberResponse({}));
  }

  async insertDevopsMember(request: InsertDevopsMemberRequest): Promise<InsertDevopsMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.insertDevopsMemberWithOptions(request, runtime);
  }

  async listProjectSprintsWithOptions(request: ListProjectSprintsRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectSprintsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListProjectSprintsResponse>(await this.doRPCRequest("ListProjectSprints", "2020-02-26", "HTTPS", "POST", "AK", "json", req, runtime), new ListProjectSprintsResponse({}));
  }

  async listProjectSprints(request: ListProjectSprintsRequest): Promise<ListProjectSprintsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectSprintsWithOptions(request, runtime);
  }

  async listProjectTaskFlowWithOptions(request: ListProjectTaskFlowRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectTaskFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListProjectTaskFlowResponse>(await this.doRPCRequest("ListProjectTaskFlow", "2020-02-26", "HTTPS", "POST", "AK", "json", req, runtime), new ListProjectTaskFlowResponse({}));
  }

  async listProjectTaskFlow(request: ListProjectTaskFlowRequest): Promise<ListProjectTaskFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectTaskFlowWithOptions(request, runtime);
  }

  async listProjectTaskFlowStatusWithOptions(request: ListProjectTaskFlowStatusRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectTaskFlowStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListProjectTaskFlowStatusResponse>(await this.doRPCRequest("ListProjectTaskFlowStatus", "2020-02-26", "HTTPS", "POST", "AK", "json", req, runtime), new ListProjectTaskFlowStatusResponse({}));
  }

  async listProjectTaskFlowStatus(request: ListProjectTaskFlowStatusRequest): Promise<ListProjectTaskFlowStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectTaskFlowStatusWithOptions(request, runtime);
  }

  async listProjectTasksWithOptions(request: ListProjectTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListProjectTasksResponse>(await this.doRPCRequest("ListProjectTasks", "2020-02-26", "HTTPS", "POST", "AK", "json", req, runtime), new ListProjectTasksResponse({}));
  }

  async listProjectTasks(request: ListProjectTasksRequest): Promise<ListProjectTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectTasksWithOptions(request, runtime);
  }

  async listScenarioFieldConfigWithOptions(request: ListScenarioFieldConfigRequest, runtime: $Util.RuntimeOptions): Promise<ListScenarioFieldConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListScenarioFieldConfigResponse>(await this.doRPCRequest("ListScenarioFieldConfig", "2020-02-26", "HTTPS", "POST", "AK", "json", req, runtime), new ListScenarioFieldConfigResponse({}));
  }

  async listScenarioFieldConfig(request: ListScenarioFieldConfigRequest): Promise<ListScenarioFieldConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listScenarioFieldConfigWithOptions(request, runtime);
  }

  async updateProjectWithOptions(request: UpdateProjectRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateProjectResponse>(await this.doRPCRequest("UpdateProject", "2020-02-26", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateProjectResponse({}));
  }

  async updateProject(request: UpdateProjectRequest): Promise<UpdateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProjectWithOptions(request, runtime);
  }

  async updateProjectSprintWithOptions(request: UpdateProjectSprintRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProjectSprintResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateProjectSprintResponse>(await this.doRPCRequest("UpdateProjectSprint", "2020-02-26", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateProjectSprintResponse({}));
  }

  async updateProjectSprint(request: UpdateProjectSprintRequest): Promise<UpdateProjectSprintResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProjectSprintWithOptions(request, runtime);
  }

  async updateProjectTaskWithOptions(request: UpdateProjectTaskRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProjectTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateProjectTaskResponse>(await this.doRPCRequest("UpdateProjectTask", "2020-02-26", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateProjectTaskResponse({}));
  }

  async updateProjectTask(request: UpdateProjectTaskRequest): Promise<UpdateProjectTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProjectTaskWithOptions(request, runtime);
  }

}
