// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddWorkspaceDocMembersHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContext?: AddWorkspaceDocMembersHeadersAccountContext;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContext: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContext: AddWorkspaceDocMembersHeadersAccountContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWorkspaceDocMembersShrinkHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContextShrink: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContextShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWorkspaceDocMembersRequest extends $tea.Model {
  members?: AddWorkspaceDocMembersRequestMembers[];
  nodeId?: string;
  tenantContext?: AddWorkspaceDocMembersRequestTenantContext;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
      nodeId: 'NodeId',
      tenantContext: 'TenantContext',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': AddWorkspaceDocMembersRequestMembers },
      nodeId: 'string',
      tenantContext: AddWorkspaceDocMembersRequestTenantContext,
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWorkspaceDocMembersShrinkRequest extends $tea.Model {
  membersShrink?: string;
  nodeId?: string;
  tenantContextShrink?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      membersShrink: 'Members',
      nodeId: 'NodeId',
      tenantContextShrink: 'TenantContext',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      membersShrink: 'string',
      nodeId: 'string',
      tenantContextShrink: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWorkspaceDocMembersResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class AddWorkspaceDocMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddWorkspaceDocMembersResponseBody;
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
      body: AddWorkspaceDocMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWorkspaceMembersHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContext?: AddWorkspaceMembersHeadersAccountContext;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContext: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContext: AddWorkspaceMembersHeadersAccountContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWorkspaceMembersShrinkHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContextShrink: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContextShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWorkspaceMembersRequest extends $tea.Model {
  members?: AddWorkspaceMembersRequestMembers[];
  tenantContext?: AddWorkspaceMembersRequestTenantContext;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
      tenantContext: 'TenantContext',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': AddWorkspaceMembersRequestMembers },
      tenantContext: AddWorkspaceMembersRequestTenantContext,
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWorkspaceMembersShrinkRequest extends $tea.Model {
  membersShrink?: string;
  tenantContextShrink?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      membersShrink: 'Members',
      tenantContextShrink: 'TenantContext',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      membersShrink: 'string',
      tenantContextShrink: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWorkspaceMembersResponseBody extends $tea.Model {
  notInOrgList?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      notInOrgList: 'NotInOrgList',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notInOrgList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWorkspaceMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddWorkspaceMembersResponseBody;
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
      body: AddWorkspaceMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSheetHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContext?: CreateSheetHeadersAccountContext;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContext: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContext: CreateSheetHeadersAccountContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSheetShrinkHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContextShrink: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContextShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSheetRequest extends $tea.Model {
  name?: string;
  tenantContext?: CreateSheetRequestTenantContext;
  workbookId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      tenantContext: 'TenantContext',
      workbookId: 'WorkbookId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      tenantContext: CreateSheetRequestTenantContext,
      workbookId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSheetShrinkRequest extends $tea.Model {
  name?: string;
  tenantContextShrink?: string;
  workbookId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      tenantContextShrink: 'TenantContext',
      workbookId: 'WorkbookId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      tenantContextShrink: 'string',
      workbookId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSheetResponseBody extends $tea.Model {
  id?: string;
  name?: string;
  requestId?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
      requestId: 'requestId',
      visibility: 'visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      requestId: 'string',
      visibility: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSheetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSheetResponseBody;
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
      body: CreateSheetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTodoTaskHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContext?: CreateTodoTaskHeadersAccountContext;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContext: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContext: CreateTodoTaskHeadersAccountContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTodoTaskShrinkHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContextShrink: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContextShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTodoTaskRequest extends $tea.Model {
  tenantContext?: CreateTodoTaskRequestTenantContext;
  contentFieldList?: CreateTodoTaskRequestContentFieldList[];
  creatorId?: string;
  description?: string;
  detailUrl?: CreateTodoTaskRequestDetailUrl;
  dueTime?: number;
  executorIds?: string[];
  isOnlyShowExecutor?: boolean;
  notifyConfigs?: CreateTodoTaskRequestNotifyConfigs;
  operatorId?: string;
  participantIds?: string[];
  priority?: number;
  sourceId?: string;
  subject?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContext: 'TenantContext',
      contentFieldList: 'contentFieldList',
      creatorId: 'creatorId',
      description: 'description',
      detailUrl: 'detailUrl',
      dueTime: 'dueTime',
      executorIds: 'executorIds',
      isOnlyShowExecutor: 'isOnlyShowExecutor',
      notifyConfigs: 'notifyConfigs',
      operatorId: 'operatorId',
      participantIds: 'participantIds',
      priority: 'priority',
      sourceId: 'sourceId',
      subject: 'subject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: CreateTodoTaskRequestTenantContext,
      contentFieldList: { 'type': 'array', 'itemType': CreateTodoTaskRequestContentFieldList },
      creatorId: 'string',
      description: 'string',
      detailUrl: CreateTodoTaskRequestDetailUrl,
      dueTime: 'number',
      executorIds: { 'type': 'array', 'itemType': 'string' },
      isOnlyShowExecutor: 'boolean',
      notifyConfigs: CreateTodoTaskRequestNotifyConfigs,
      operatorId: 'string',
      participantIds: { 'type': 'array', 'itemType': 'string' },
      priority: 'number',
      sourceId: 'string',
      subject: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTodoTaskShrinkRequest extends $tea.Model {
  tenantContextShrink?: string;
  contentFieldListShrink?: string;
  creatorId?: string;
  description?: string;
  detailUrlShrink?: string;
  dueTime?: number;
  executorIdsShrink?: string;
  isOnlyShowExecutor?: boolean;
  notifyConfigsShrink?: string;
  operatorId?: string;
  participantIdsShrink?: string;
  priority?: number;
  sourceId?: string;
  subject?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContextShrink: 'TenantContext',
      contentFieldListShrink: 'contentFieldList',
      creatorId: 'creatorId',
      description: 'description',
      detailUrlShrink: 'detailUrl',
      dueTime: 'dueTime',
      executorIdsShrink: 'executorIds',
      isOnlyShowExecutor: 'isOnlyShowExecutor',
      notifyConfigsShrink: 'notifyConfigs',
      operatorId: 'operatorId',
      participantIdsShrink: 'participantIds',
      priority: 'priority',
      sourceId: 'sourceId',
      subject: 'subject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContextShrink: 'string',
      contentFieldListShrink: 'string',
      creatorId: 'string',
      description: 'string',
      detailUrlShrink: 'string',
      dueTime: 'number',
      executorIdsShrink: 'string',
      isOnlyShowExecutor: 'boolean',
      notifyConfigsShrink: 'string',
      operatorId: 'string',
      participantIdsShrink: 'string',
      priority: 'number',
      sourceId: 'string',
      subject: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTodoTaskResponseBody extends $tea.Model {
  bizTag?: string;
  contentFieldList?: CreateTodoTaskResponseBodyContentFieldList[];
  createdTime?: number;
  creatorId?: string;
  description?: string;
  detailUrl?: CreateTodoTaskResponseBodyDetailUrl;
  done?: boolean;
  dueTime?: number;
  executorIds?: string[];
  finishTime?: number;
  id?: string;
  isOnlyShowExecutor?: boolean;
  modifiedTime?: number;
  modifierId?: string;
  notifyConfigs?: CreateTodoTaskResponseBodyNotifyConfigs;
  participantIds?: string[];
  priority?: number;
  requestId?: string;
  source?: string;
  sourceId?: string;
  startTime?: number;
  subject?: string;
  static names(): { [key: string]: string } {
    return {
      bizTag: 'bizTag',
      contentFieldList: 'contentFieldList',
      createdTime: 'createdTime',
      creatorId: 'creatorId',
      description: 'description',
      detailUrl: 'detailUrl',
      done: 'done',
      dueTime: 'dueTime',
      executorIds: 'executorIds',
      finishTime: 'finishTime',
      id: 'id',
      isOnlyShowExecutor: 'isOnlyShowExecutor',
      modifiedTime: 'modifiedTime',
      modifierId: 'modifierId',
      notifyConfigs: 'notifyConfigs',
      participantIds: 'participantIds',
      priority: 'priority',
      requestId: 'requestId',
      source: 'source',
      sourceId: 'sourceId',
      startTime: 'startTime',
      subject: 'subject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTag: 'string',
      contentFieldList: { 'type': 'array', 'itemType': CreateTodoTaskResponseBodyContentFieldList },
      createdTime: 'number',
      creatorId: 'string',
      description: 'string',
      detailUrl: CreateTodoTaskResponseBodyDetailUrl,
      done: 'boolean',
      dueTime: 'number',
      executorIds: { 'type': 'array', 'itemType': 'string' },
      finishTime: 'number',
      id: 'string',
      isOnlyShowExecutor: 'boolean',
      modifiedTime: 'number',
      modifierId: 'string',
      notifyConfigs: CreateTodoTaskResponseBodyNotifyConfigs,
      participantIds: { 'type': 'array', 'itemType': 'string' },
      priority: 'number',
      requestId: 'string',
      source: 'string',
      sourceId: 'string',
      startTime: 'number',
      subject: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTodoTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTodoTaskResponseBody;
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
      body: CreateTodoTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContext?: CreateWorkspaceHeadersAccountContext;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContext: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContext: CreateWorkspaceHeadersAccountContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceShrinkHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContextShrink: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContextShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceRequest extends $tea.Model {
  description?: string;
  name?: string;
  tenantContext?: CreateWorkspaceRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      tenantContext: CreateWorkspaceRequestTenantContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceShrinkRequest extends $tea.Model {
  description?: string;
  name?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      tenantContextShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceResponseBody extends $tea.Model {
  description?: string;
  name?: string;
  requestId?: string;
  url?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      requestId: 'requestId',
      url: 'url',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      requestId: 'string',
      url: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateWorkspaceResponseBody;
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
      body: CreateWorkspaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceDocHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContext?: CreateWorkspaceDocHeadersAccountContext;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContext: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContext: CreateWorkspaceDocHeadersAccountContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceDocShrinkHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContextShrink: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContextShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceDocRequest extends $tea.Model {
  docType?: string;
  name?: string;
  parentNodeId?: string;
  templateId?: string;
  templateType?: string;
  tenantContext?: CreateWorkspaceDocRequestTenantContext;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      docType: 'DocType',
      name: 'Name',
      parentNodeId: 'ParentNodeId',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
      tenantContext: 'TenantContext',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docType: 'string',
      name: 'string',
      parentNodeId: 'string',
      templateId: 'string',
      templateType: 'string',
      tenantContext: CreateWorkspaceDocRequestTenantContext,
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceDocShrinkRequest extends $tea.Model {
  docType?: string;
  name?: string;
  parentNodeId?: string;
  templateId?: string;
  templateType?: string;
  tenantContextShrink?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      docType: 'DocType',
      name: 'Name',
      parentNodeId: 'ParentNodeId',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
      tenantContextShrink: 'TenantContext',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docType: 'string',
      name: 'string',
      parentNodeId: 'string',
      templateId: 'string',
      templateType: 'string',
      tenantContextShrink: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceDocResponseBody extends $tea.Model {
  docKey?: string;
  nodeId?: string;
  requestId?: string;
  url?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      docKey: 'docKey',
      nodeId: 'nodeId',
      requestId: 'requestId',
      url: 'url',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docKey: 'string',
      nodeId: 'string',
      requestId: 'string',
      url: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceDocResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateWorkspaceDocResponseBody;
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
      body: CreateWorkspaceDocResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTodoTaskHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContext?: DeleteTodoTaskHeadersAccountContext;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContext: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContext: DeleteTodoTaskHeadersAccountContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTodoTaskShrinkHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContextShrink: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContextShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTodoTaskRequest extends $tea.Model {
  tenantContext?: DeleteTodoTaskRequestTenantContext;
  operatorId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContext: 'TenantContext',
      operatorId: 'operatorId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: DeleteTodoTaskRequestTenantContext,
      operatorId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTodoTaskShrinkRequest extends $tea.Model {
  tenantContextShrink?: string;
  operatorId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContextShrink: 'TenantContext',
      operatorId: 'operatorId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContextShrink: 'string',
      operatorId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTodoTaskResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTodoTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteTodoTaskResponseBody;
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
      body: DeleteTodoTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkspaceDocMembersHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContext?: DeleteWorkspaceDocMembersHeadersAccountContext;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContext: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContext: DeleteWorkspaceDocMembersHeadersAccountContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkspaceDocMembersShrinkHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContextShrink: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContextShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkspaceDocMembersRequest extends $tea.Model {
  members?: DeleteWorkspaceDocMembersRequestMembers[];
  nodeId?: string;
  tenantContext?: DeleteWorkspaceDocMembersRequestTenantContext;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
      nodeId: 'NodeId',
      tenantContext: 'TenantContext',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': DeleteWorkspaceDocMembersRequestMembers },
      nodeId: 'string',
      tenantContext: DeleteWorkspaceDocMembersRequestTenantContext,
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkspaceDocMembersShrinkRequest extends $tea.Model {
  membersShrink?: string;
  nodeId?: string;
  tenantContextShrink?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      membersShrink: 'Members',
      nodeId: 'NodeId',
      tenantContextShrink: 'TenantContext',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      membersShrink: 'string',
      nodeId: 'string',
      tenantContextShrink: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkspaceDocMembersResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class DeleteWorkspaceDocMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteWorkspaceDocMembersResponseBody;
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
      body: DeleteWorkspaceDocMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkspaceMembersHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContext?: DeleteWorkspaceMembersHeadersAccountContext;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContext: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContext: DeleteWorkspaceMembersHeadersAccountContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkspaceMembersShrinkHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContextShrink: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContextShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkspaceMembersRequest extends $tea.Model {
  members?: DeleteWorkspaceMembersRequestMembers[];
  tenantContext?: DeleteWorkspaceMembersRequestTenantContext;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
      tenantContext: 'TenantContext',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': DeleteWorkspaceMembersRequestMembers },
      tenantContext: DeleteWorkspaceMembersRequestTenantContext,
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkspaceMembersShrinkRequest extends $tea.Model {
  membersShrink?: string;
  tenantContextShrink?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      membersShrink: 'Members',
      tenantContextShrink: 'TenantContext',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      membersShrink: 'string',
      tenantContextShrink: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkspaceMembersResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class DeleteWorkspaceMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteWorkspaceMembersResponseBody;
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
      body: DeleteWorkspaceMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContext?: GetUserHeadersAccountContext;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContext: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContext: GetUserHeadersAccountContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserShrinkHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContextShrink: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContextShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserRequest extends $tea.Model {
  tenantContext?: GetUserRequestTenantContext;
  language?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContext: 'TenantContext',
      language: 'language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: GetUserRequestTenantContext,
      language: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserShrinkRequest extends $tea.Model {
  tenantContextShrink?: string;
  language?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContextShrink: 'TenantContext',
      language: 'language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContextShrink: 'string',
      language: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBody extends $tea.Model {
  active?: boolean;
  admin?: boolean;
  avatar?: string;
  boss?: boolean;
  deptIdList?: number[];
  deptOrderList?: GetUserResponseBodyDeptOrderList[];
  email?: string;
  exclusiveAccount?: boolean;
  exclusiveAccountCorpId?: string;
  exclusiveAccountCorpName?: string;
  exclusiveAccountType?: string;
  extension?: string;
  hideMobile?: boolean;
  hiredDate?: number;
  jobNumber?: string;
  leaderInDept?: GetUserResponseBodyLeaderInDept[];
  loginId?: string;
  managerUserid?: string;
  mobile?: string;
  name?: string;
  nickname?: string;
  orgEmail?: string;
  realAuthed?: boolean;
  remark?: string;
  requestId?: string;
  roleList?: GetUserResponseBodyRoleList[];
  senior?: boolean;
  stateCode?: string;
  telephone?: string;
  title?: string;
  unionEmpExt?: GetUserResponseBodyUnionEmpExt;
  userid?: string;
  workPlace?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      admin: 'admin',
      avatar: 'avatar',
      boss: 'boss',
      deptIdList: 'deptIdList',
      deptOrderList: 'deptOrderList',
      email: 'email',
      exclusiveAccount: 'exclusiveAccount',
      exclusiveAccountCorpId: 'exclusiveAccountCorpId',
      exclusiveAccountCorpName: 'exclusiveAccountCorpName',
      exclusiveAccountType: 'exclusiveAccountType',
      extension: 'extension',
      hideMobile: 'hideMobile',
      hiredDate: 'hiredDate',
      jobNumber: 'jobNumber',
      leaderInDept: 'leaderInDept',
      loginId: 'loginId',
      managerUserid: 'managerUserid',
      mobile: 'mobile',
      name: 'name',
      nickname: 'nickname',
      orgEmail: 'orgEmail',
      realAuthed: 'realAuthed',
      remark: 'remark',
      requestId: 'requestId',
      roleList: 'roleList',
      senior: 'senior',
      stateCode: 'stateCode',
      telephone: 'telephone',
      title: 'title',
      unionEmpExt: 'unionEmpExt',
      userid: 'userid',
      workPlace: 'workPlace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      admin: 'boolean',
      avatar: 'string',
      boss: 'boolean',
      deptIdList: { 'type': 'array', 'itemType': 'number' },
      deptOrderList: { 'type': 'array', 'itemType': GetUserResponseBodyDeptOrderList },
      email: 'string',
      exclusiveAccount: 'boolean',
      exclusiveAccountCorpId: 'string',
      exclusiveAccountCorpName: 'string',
      exclusiveAccountType: 'string',
      extension: 'string',
      hideMobile: 'boolean',
      hiredDate: 'number',
      jobNumber: 'string',
      leaderInDept: { 'type': 'array', 'itemType': GetUserResponseBodyLeaderInDept },
      loginId: 'string',
      managerUserid: 'string',
      mobile: 'string',
      name: 'string',
      nickname: 'string',
      orgEmail: 'string',
      realAuthed: 'boolean',
      remark: 'string',
      requestId: 'string',
      roleList: { 'type': 'array', 'itemType': GetUserResponseBodyRoleList },
      senior: 'boolean',
      stateCode: 'string',
      telephone: 'string',
      title: 'string',
      unionEmpExt: GetUserResponseBodyUnionEmpExt,
      userid: 'string',
      workPlace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUserResponseBody;
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
      body: GetUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertRowsBeforeHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContext?: InsertRowsBeforeHeadersAccountContext;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContext: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContext: InsertRowsBeforeHeadersAccountContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertRowsBeforeShrinkHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContextShrink: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContextShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertRowsBeforeRequest extends $tea.Model {
  row?: number;
  rowCount?: number;
  sheetId?: string;
  tenantContext?: InsertRowsBeforeRequestTenantContext;
  workbookId?: string;
  static names(): { [key: string]: string } {
    return {
      row: 'Row',
      rowCount: 'RowCount',
      sheetId: 'SheetId',
      tenantContext: 'TenantContext',
      workbookId: 'WorkbookId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      row: 'number',
      rowCount: 'number',
      sheetId: 'string',
      tenantContext: InsertRowsBeforeRequestTenantContext,
      workbookId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertRowsBeforeShrinkRequest extends $tea.Model {
  row?: number;
  rowCount?: number;
  sheetId?: string;
  tenantContextShrink?: string;
  workbookId?: string;
  static names(): { [key: string]: string } {
    return {
      row: 'Row',
      rowCount: 'RowCount',
      sheetId: 'SheetId',
      tenantContextShrink: 'TenantContext',
      workbookId: 'WorkbookId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      row: 'number',
      rowCount: 'number',
      sheetId: 'string',
      tenantContextShrink: 'string',
      workbookId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertRowsBeforeResponseBody extends $tea.Model {
  id?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertRowsBeforeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InsertRowsBeforeResponseBody;
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
      body: InsertRowsBeforeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrgTodoTasksHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContext?: QueryOrgTodoTasksHeadersAccountContext;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContext: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContext: QueryOrgTodoTasksHeadersAccountContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrgTodoTasksShrinkHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContextShrink: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContextShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrgTodoTasksRequest extends $tea.Model {
  tenantContext?: QueryOrgTodoTasksRequestTenantContext;
  isDone?: boolean;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContext: 'TenantContext',
      isDone: 'isDone',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: QueryOrgTodoTasksRequestTenantContext,
      isDone: 'boolean',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrgTodoTasksShrinkRequest extends $tea.Model {
  tenantContextShrink?: string;
  isDone?: boolean;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContextShrink: 'TenantContext',
      isDone: 'isDone',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContextShrink: 'string',
      isDone: 'boolean',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrgTodoTasksResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  todoCards?: QueryOrgTodoTasksResponseBodyTodoCards[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      requestId: 'requestId',
      todoCards: 'todoCards',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      todoCards: { 'type': 'array', 'itemType': QueryOrgTodoTasksResponseBodyTodoCards },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrgTodoTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryOrgTodoTasksResponseBody;
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
      body: QueryOrgTodoTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTodoTaskHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContext?: UpdateTodoTaskHeadersAccountContext;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContext: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContext: UpdateTodoTaskHeadersAccountContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTodoTaskShrinkHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContextShrink: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContextShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTodoTaskRequest extends $tea.Model {
  tenantContext?: UpdateTodoTaskRequestTenantContext;
  description?: string;
  done?: boolean;
  dueTime?: number;
  executorIds?: string[];
  participantIds?: string[];
  subject?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContext: 'TenantContext',
      description: 'description',
      done: 'done',
      dueTime: 'dueTime',
      executorIds: 'executorIds',
      participantIds: 'participantIds',
      subject: 'subject',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: UpdateTodoTaskRequestTenantContext,
      description: 'string',
      done: 'boolean',
      dueTime: 'number',
      executorIds: { 'type': 'array', 'itemType': 'string' },
      participantIds: { 'type': 'array', 'itemType': 'string' },
      subject: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTodoTaskShrinkRequest extends $tea.Model {
  tenantContextShrink?: string;
  description?: string;
  done?: boolean;
  dueTime?: number;
  executorIdsShrink?: string;
  participantIdsShrink?: string;
  subject?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContextShrink: 'TenantContext',
      description: 'description',
      done: 'done',
      dueTime: 'dueTime',
      executorIdsShrink: 'executorIds',
      participantIdsShrink: 'participantIds',
      subject: 'subject',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContextShrink: 'string',
      description: 'string',
      done: 'boolean',
      dueTime: 'number',
      executorIdsShrink: 'string',
      participantIdsShrink: 'string',
      subject: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTodoTaskResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTodoTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateTodoTaskResponseBody;
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
      body: UpdateTodoTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTodoTaskExecutorStatusHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContext?: UpdateTodoTaskExecutorStatusHeadersAccountContext;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContext: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContext: UpdateTodoTaskExecutorStatusHeadersAccountContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTodoTaskExecutorStatusShrinkHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContextShrink: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContextShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTodoTaskExecutorStatusRequest extends $tea.Model {
  tenantContext?: UpdateTodoTaskExecutorStatusRequestTenantContext;
  executorStatusList?: UpdateTodoTaskExecutorStatusRequestExecutorStatusList[];
  operatorId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContext: 'TenantContext',
      executorStatusList: 'executorStatusList',
      operatorId: 'operatorId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: UpdateTodoTaskExecutorStatusRequestTenantContext,
      executorStatusList: { 'type': 'array', 'itemType': UpdateTodoTaskExecutorStatusRequestExecutorStatusList },
      operatorId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTodoTaskExecutorStatusShrinkRequest extends $tea.Model {
  tenantContextShrink?: string;
  executorStatusListShrink?: string;
  operatorId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContextShrink: 'TenantContext',
      executorStatusListShrink: 'executorStatusList',
      operatorId: 'operatorId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContextShrink: 'string',
      executorStatusListShrink: 'string',
      operatorId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTodoTaskExecutorStatusResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTodoTaskExecutorStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateTodoTaskExecutorStatusResponseBody;
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
      body: UpdateTodoTaskExecutorStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceDocMembersHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContext?: UpdateWorkspaceDocMembersHeadersAccountContext;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContext: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContext: UpdateWorkspaceDocMembersHeadersAccountContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceDocMembersShrinkHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContextShrink: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContextShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceDocMembersRequest extends $tea.Model {
  members?: UpdateWorkspaceDocMembersRequestMembers[];
  nodeId?: string;
  tenantContext?: UpdateWorkspaceDocMembersRequestTenantContext;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
      nodeId: 'NodeId',
      tenantContext: 'TenantContext',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': UpdateWorkspaceDocMembersRequestMembers },
      nodeId: 'string',
      tenantContext: UpdateWorkspaceDocMembersRequestTenantContext,
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceDocMembersShrinkRequest extends $tea.Model {
  membersShrink?: string;
  nodeId?: string;
  tenantContextShrink?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      membersShrink: 'Members',
      nodeId: 'NodeId',
      tenantContextShrink: 'TenantContext',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      membersShrink: 'string',
      nodeId: 'string',
      tenantContextShrink: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceDocMembersResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class UpdateWorkspaceDocMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateWorkspaceDocMembersResponseBody;
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
      body: UpdateWorkspaceDocMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceMembersHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContext?: UpdateWorkspaceMembersHeadersAccountContext;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContext: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContext: UpdateWorkspaceMembersHeadersAccountContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceMembersShrinkHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContextShrink: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContextShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceMembersRequest extends $tea.Model {
  members?: UpdateWorkspaceMembersRequestMembers[];
  tenantContext?: UpdateWorkspaceMembersRequestTenantContext;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
      tenantContext: 'TenantContext',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': UpdateWorkspaceMembersRequestMembers },
      tenantContext: UpdateWorkspaceMembersRequestTenantContext,
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceMembersShrinkRequest extends $tea.Model {
  membersShrink?: string;
  tenantContextShrink?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      membersShrink: 'Members',
      tenantContextShrink: 'TenantContext',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      membersShrink: 'string',
      tenantContextShrink: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceMembersResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class UpdateWorkspaceMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateWorkspaceMembersResponseBody;
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
      body: UpdateWorkspaceMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWorkspaceDocMembersHeadersAccountContext extends $tea.Model {
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWorkspaceDocMembersRequestMembers extends $tea.Model {
  memberId?: string;
  memberType?: string;
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      memberId: 'MemberId',
      memberType: 'MemberType',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberId: 'string',
      memberType: 'string',
      roleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWorkspaceDocMembersRequestTenantContext extends $tea.Model {
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWorkspaceMembersHeadersAccountContext extends $tea.Model {
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWorkspaceMembersRequestMembers extends $tea.Model {
  memberId?: string;
  memberType?: string;
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      memberId: 'MemberId',
      memberType: 'MemberType',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberId: 'string',
      memberType: 'string',
      roleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWorkspaceMembersRequestTenantContext extends $tea.Model {
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSheetHeadersAccountContext extends $tea.Model {
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSheetRequestTenantContext extends $tea.Model {
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTodoTaskHeadersAccountContext extends $tea.Model {
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTodoTaskRequestTenantContext extends $tea.Model {
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTodoTaskRequestContentFieldList extends $tea.Model {
  fieldKey?: string;
  fieldValue?: string;
  static names(): { [key: string]: string } {
    return {
      fieldKey: 'fieldKey',
      fieldValue: 'fieldValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldKey: 'string',
      fieldValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTodoTaskRequestDetailUrl extends $tea.Model {
  appUrl?: string;
  pcUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appUrl: 'appUrl',
      pcUrl: 'pcUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUrl: 'string',
      pcUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTodoTaskRequestNotifyConfigs extends $tea.Model {
  dingNotify?: string;
  static names(): { [key: string]: string } {
    return {
      dingNotify: 'dingNotify',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingNotify: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTodoTaskResponseBodyContentFieldList extends $tea.Model {
  fieldKey?: string;
  fieldValue?: string;
  static names(): { [key: string]: string } {
    return {
      fieldKey: 'fieldKey',
      fieldValue: 'fieldValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldKey: 'string',
      fieldValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTodoTaskResponseBodyDetailUrl extends $tea.Model {
  appUrl?: string;
  pcUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appUrl: 'appUrl',
      pcUrl: 'pcUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUrl: 'string',
      pcUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTodoTaskResponseBodyNotifyConfigs extends $tea.Model {
  dingNotify?: string;
  static names(): { [key: string]: string } {
    return {
      dingNotify: 'dingNotify',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingNotify: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceHeadersAccountContext extends $tea.Model {
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceRequestTenantContext extends $tea.Model {
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceDocHeadersAccountContext extends $tea.Model {
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceDocRequestTenantContext extends $tea.Model {
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTodoTaskHeadersAccountContext extends $tea.Model {
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTodoTaskRequestTenantContext extends $tea.Model {
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkspaceDocMembersHeadersAccountContext extends $tea.Model {
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkspaceDocMembersRequestMembers extends $tea.Model {
  memberId?: string;
  memberType?: string;
  static names(): { [key: string]: string } {
    return {
      memberId: 'MemberId',
      memberType: 'MemberType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberId: 'string',
      memberType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkspaceDocMembersRequestTenantContext extends $tea.Model {
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkspaceMembersHeadersAccountContext extends $tea.Model {
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkspaceMembersRequestMembers extends $tea.Model {
  memberId?: string;
  memberType?: string;
  static names(): { [key: string]: string } {
    return {
      memberId: 'MemberId',
      memberType: 'MemberType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberId: 'string',
      memberType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkspaceMembersRequestTenantContext extends $tea.Model {
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserHeadersAccountContext extends $tea.Model {
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserRequestTenantContext extends $tea.Model {
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyDeptOrderList extends $tea.Model {
  deptId?: number;
  order?: number;
  static names(): { [key: string]: string } {
    return {
      deptId: 'deptId',
      order: 'order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deptId: 'number',
      order: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyLeaderInDept extends $tea.Model {
  deptId?: number;
  leader?: boolean;
  static names(): { [key: string]: string } {
    return {
      deptId: 'deptId',
      leader: 'leader',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deptId: 'number',
      leader: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyRoleList extends $tea.Model {
  groupName?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'groupName',
      id: 'id',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUnionEmpExtUnionEmpMapList extends $tea.Model {
  cropId?: string;
  userid?: string;
  static names(): { [key: string]: string } {
    return {
      cropId: 'cropId',
      userid: 'userid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cropId: 'string',
      userid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUnionEmpExt extends $tea.Model {
  corpId?: string;
  unionEmpMapList?: GetUserResponseBodyUnionEmpExtUnionEmpMapList[];
  userid?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corpId',
      unionEmpMapList: 'unionEmpMapList',
      userid: 'userid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      unionEmpMapList: { 'type': 'array', 'itemType': GetUserResponseBodyUnionEmpExtUnionEmpMapList },
      userid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertRowsBeforeHeadersAccountContext extends $tea.Model {
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertRowsBeforeRequestTenantContext extends $tea.Model {
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrgTodoTasksHeadersAccountContext extends $tea.Model {
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrgTodoTasksRequestTenantContext extends $tea.Model {
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrgTodoTasksResponseBodyTodoCardsDetailUrl extends $tea.Model {
  appUrl?: string;
  pcUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appUrl: 'appUrl',
      pcUrl: 'pcUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUrl: 'string',
      pcUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrgTodoTasksResponseBodyTodoCards extends $tea.Model {
  bizTag?: string;
  createdTime?: number;
  creatorId?: string;
  detailUrl?: QueryOrgTodoTasksResponseBodyTodoCardsDetailUrl;
  dueTime?: number;
  isDone?: boolean;
  modifiedTime?: number;
  priority?: number;
  sourceId?: string;
  subject?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      bizTag: 'bizTag',
      createdTime: 'createdTime',
      creatorId: 'creatorId',
      detailUrl: 'detailUrl',
      dueTime: 'dueTime',
      isDone: 'isDone',
      modifiedTime: 'modifiedTime',
      priority: 'priority',
      sourceId: 'sourceId',
      subject: 'subject',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTag: 'string',
      createdTime: 'number',
      creatorId: 'string',
      detailUrl: QueryOrgTodoTasksResponseBodyTodoCardsDetailUrl,
      dueTime: 'number',
      isDone: 'boolean',
      modifiedTime: 'number',
      priority: 'number',
      sourceId: 'string',
      subject: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTodoTaskHeadersAccountContext extends $tea.Model {
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTodoTaskRequestTenantContext extends $tea.Model {
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTodoTaskExecutorStatusHeadersAccountContext extends $tea.Model {
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTodoTaskExecutorStatusRequestTenantContext extends $tea.Model {
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTodoTaskExecutorStatusRequestExecutorStatusList extends $tea.Model {
  id?: string;
  isDone?: boolean;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      isDone: 'isDone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      isDone: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceDocMembersHeadersAccountContext extends $tea.Model {
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceDocMembersRequestMembers extends $tea.Model {
  memberId?: string;
  memberType?: string;
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      memberId: 'MemberId',
      memberType: 'MemberType',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberId: 'string',
      memberType: 'string',
      roleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceDocMembersRequestTenantContext extends $tea.Model {
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceMembersHeadersAccountContext extends $tea.Model {
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceMembersRequestMembers extends $tea.Model {
  memberId?: string;
  memberType?: string;
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      memberId: 'MemberId',
      memberType: 'MemberType',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberId: 'string',
      memberType: 'string',
      roleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceMembersRequestTenantContext extends $tea.Model {
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
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
    this._endpoint = this.getEndpoint("aliding", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addWorkspaceDocMembersWithOptions(tmpReq: AddWorkspaceDocMembersRequest, tmpHeader: AddWorkspaceDocMembersHeaders, runtime: $Util.RuntimeOptions): Promise<AddWorkspaceDocMembersResponse> {
    Util.validateModel(tmpReq);
    let request = new AddWorkspaceDocMembersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new AddWorkspaceDocMembersShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!Util.isUnset(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!Util.isUnset(tmpReq.members)) {
      request.membersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.members, "Members", "json");
    }

    if (!Util.isUnset(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.membersShrink)) {
      body["Members"] = request.membersShrink;
    }

    if (!Util.isUnset(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = Util.toJSONString(headers.accountContextShrink);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddWorkspaceDocMembers",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/addWorkspaceDocMembers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddWorkspaceDocMembersResponse>(await this.callApi(params, req, runtime), new AddWorkspaceDocMembersResponse({}));
  }

  async addWorkspaceDocMembers(request: AddWorkspaceDocMembersRequest): Promise<AddWorkspaceDocMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AddWorkspaceDocMembersHeaders({ });
    return await this.addWorkspaceDocMembersWithOptions(request, headers, runtime);
  }

  async addWorkspaceMembersWithOptions(tmpReq: AddWorkspaceMembersRequest, tmpHeader: AddWorkspaceMembersHeaders, runtime: $Util.RuntimeOptions): Promise<AddWorkspaceMembersResponse> {
    Util.validateModel(tmpReq);
    let request = new AddWorkspaceMembersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new AddWorkspaceMembersShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!Util.isUnset(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!Util.isUnset(tmpReq.members)) {
      request.membersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.members, "Members", "json");
    }

    if (!Util.isUnset(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.membersShrink)) {
      body["Members"] = request.membersShrink;
    }

    if (!Util.isUnset(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = Util.toJSONString(headers.accountContextShrink);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddWorkspaceMembers",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/addWorkspaceMembers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddWorkspaceMembersResponse>(await this.callApi(params, req, runtime), new AddWorkspaceMembersResponse({}));
  }

  async addWorkspaceMembers(request: AddWorkspaceMembersRequest): Promise<AddWorkspaceMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AddWorkspaceMembersHeaders({ });
    return await this.addWorkspaceMembersWithOptions(request, headers, runtime);
  }

  async createSheetWithOptions(tmpReq: CreateSheetRequest, tmpHeader: CreateSheetHeaders, runtime: $Util.RuntimeOptions): Promise<CreateSheetResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateSheetShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new CreateSheetShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!Util.isUnset(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!Util.isUnset(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!Util.isUnset(request.workbookId)) {
      body["WorkbookId"] = request.workbookId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = Util.toJSONString(headers.accountContextShrink);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSheet",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/createSheet`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSheetResponse>(await this.callApi(params, req, runtime), new CreateSheetResponse({}));
  }

  async createSheet(request: CreateSheetRequest): Promise<CreateSheetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateSheetHeaders({ });
    return await this.createSheetWithOptions(request, headers, runtime);
  }

  async createTodoTaskWithOptions(tmpReq: CreateTodoTaskRequest, tmpHeader: CreateTodoTaskHeaders, runtime: $Util.RuntimeOptions): Promise<CreateTodoTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateTodoTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new CreateTodoTaskShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!Util.isUnset(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!Util.isUnset(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    if (!Util.isUnset(tmpReq.contentFieldList)) {
      request.contentFieldListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.contentFieldList, "contentFieldList", "json");
    }

    if (!Util.isUnset(tmpReq.detailUrl)) {
      request.detailUrlShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.detailUrl, "detailUrl", "json");
    }

    if (!Util.isUnset(tmpReq.executorIds)) {
      request.executorIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.executorIds, "executorIds", "json");
    }

    if (!Util.isUnset(tmpReq.notifyConfigs)) {
      request.notifyConfigsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notifyConfigs, "notifyConfigs", "json");
    }

    if (!Util.isUnset(tmpReq.participantIds)) {
      request.participantIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.participantIds, "participantIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      query["operatorId"] = request.operatorId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!Util.isUnset(request.contentFieldListShrink)) {
      body["contentFieldList"] = request.contentFieldListShrink;
    }

    if (!Util.isUnset(request.creatorId)) {
      body["creatorId"] = request.creatorId;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.detailUrlShrink)) {
      body["detailUrl"] = request.detailUrlShrink;
    }

    if (!Util.isUnset(request.dueTime)) {
      body["dueTime"] = request.dueTime;
    }

    if (!Util.isUnset(request.executorIdsShrink)) {
      body["executorIds"] = request.executorIdsShrink;
    }

    if (!Util.isUnset(request.isOnlyShowExecutor)) {
      body["isOnlyShowExecutor"] = request.isOnlyShowExecutor;
    }

    if (!Util.isUnset(request.notifyConfigsShrink)) {
      body["notifyConfigs"] = request.notifyConfigsShrink;
    }

    if (!Util.isUnset(request.participantIdsShrink)) {
      body["participantIds"] = request.participantIdsShrink;
    }

    if (!Util.isUnset(request.priority)) {
      body["priority"] = request.priority;
    }

    if (!Util.isUnset(request.sourceId)) {
      body["sourceId"] = request.sourceId;
    }

    if (!Util.isUnset(request.subject)) {
      body["subject"] = request.subject;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = Util.toJSONString(headers.accountContextShrink);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTodoTask",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/task/createTodoTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTodoTaskResponse>(await this.callApi(params, req, runtime), new CreateTodoTaskResponse({}));
  }

  async createTodoTask(request: CreateTodoTaskRequest): Promise<CreateTodoTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateTodoTaskHeaders({ });
    return await this.createTodoTaskWithOptions(request, headers, runtime);
  }

  async createWorkspaceWithOptions(tmpReq: CreateWorkspaceRequest, tmpHeader: CreateWorkspaceHeaders, runtime: $Util.RuntimeOptions): Promise<CreateWorkspaceResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateWorkspaceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new CreateWorkspaceShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!Util.isUnset(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!Util.isUnset(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = Util.toJSONString(headers.accountContextShrink);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateWorkspace",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/createWorkspace`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateWorkspaceResponse>(await this.callApi(params, req, runtime), new CreateWorkspaceResponse({}));
  }

  async createWorkspace(request: CreateWorkspaceRequest): Promise<CreateWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateWorkspaceHeaders({ });
    return await this.createWorkspaceWithOptions(request, headers, runtime);
  }

  async createWorkspaceDocWithOptions(tmpReq: CreateWorkspaceDocRequest, tmpHeader: CreateWorkspaceDocHeaders, runtime: $Util.RuntimeOptions): Promise<CreateWorkspaceDocResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateWorkspaceDocShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new CreateWorkspaceDocShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!Util.isUnset(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!Util.isUnset(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.docType)) {
      body["DocType"] = request.docType;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.parentNodeId)) {
      body["ParentNodeId"] = request.parentNodeId;
    }

    if (!Util.isUnset(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateType)) {
      body["TemplateType"] = request.templateType;
    }

    if (!Util.isUnset(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = Util.toJSONString(headers.accountContextShrink);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateWorkspaceDoc",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/createWorkspaceDoc`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateWorkspaceDocResponse>(await this.callApi(params, req, runtime), new CreateWorkspaceDocResponse({}));
  }

  async createWorkspaceDoc(request: CreateWorkspaceDocRequest): Promise<CreateWorkspaceDocResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateWorkspaceDocHeaders({ });
    return await this.createWorkspaceDocWithOptions(request, headers, runtime);
  }

  async deleteTodoTaskWithOptions(tmpReq: DeleteTodoTaskRequest, tmpHeader: DeleteTodoTaskHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteTodoTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteTodoTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new DeleteTodoTaskShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!Util.isUnset(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!Util.isUnset(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!Util.isUnset(request.operatorId)) {
      body["operatorId"] = request.operatorId;
    }

    if (!Util.isUnset(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = Util.toJSONString(headers.accountContextShrink);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTodoTask",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/task/deleteTodoTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTodoTaskResponse>(await this.callApi(params, req, runtime), new DeleteTodoTaskResponse({}));
  }

  async deleteTodoTask(request: DeleteTodoTaskRequest): Promise<DeleteTodoTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteTodoTaskHeaders({ });
    return await this.deleteTodoTaskWithOptions(request, headers, runtime);
  }

  async deleteWorkspaceDocMembersWithOptions(tmpReq: DeleteWorkspaceDocMembersRequest, tmpHeader: DeleteWorkspaceDocMembersHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteWorkspaceDocMembersResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteWorkspaceDocMembersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new DeleteWorkspaceDocMembersShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!Util.isUnset(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!Util.isUnset(tmpReq.members)) {
      request.membersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.members, "Members", "json");
    }

    if (!Util.isUnset(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.membersShrink)) {
      body["Members"] = request.membersShrink;
    }

    if (!Util.isUnset(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = Util.toJSONString(headers.accountContextShrink);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWorkspaceDocMembers",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/deleteWorkspaceDocMembers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteWorkspaceDocMembersResponse>(await this.callApi(params, req, runtime), new DeleteWorkspaceDocMembersResponse({}));
  }

  async deleteWorkspaceDocMembers(request: DeleteWorkspaceDocMembersRequest): Promise<DeleteWorkspaceDocMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteWorkspaceDocMembersHeaders({ });
    return await this.deleteWorkspaceDocMembersWithOptions(request, headers, runtime);
  }

  async deleteWorkspaceMembersWithOptions(tmpReq: DeleteWorkspaceMembersRequest, tmpHeader: DeleteWorkspaceMembersHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteWorkspaceMembersResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteWorkspaceMembersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new DeleteWorkspaceMembersShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!Util.isUnset(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!Util.isUnset(tmpReq.members)) {
      request.membersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.members, "Members", "json");
    }

    if (!Util.isUnset(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.membersShrink)) {
      body["Members"] = request.membersShrink;
    }

    if (!Util.isUnset(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = Util.toJSONString(headers.accountContextShrink);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWorkspaceMembers",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/deleteWorkspaceMembers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteWorkspaceMembersResponse>(await this.callApi(params, req, runtime), new DeleteWorkspaceMembersResponse({}));
  }

  async deleteWorkspaceMembers(request: DeleteWorkspaceMembersRequest): Promise<DeleteWorkspaceMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteWorkspaceMembersHeaders({ });
    return await this.deleteWorkspaceMembersWithOptions(request, headers, runtime);
  }

  async getUserWithOptions(tmpReq: GetUserRequest, tmpHeader: GetUserHeaders, runtime: $Util.RuntimeOptions): Promise<GetUserResponse> {
    Util.validateModel(tmpReq);
    let request = new GetUserShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new GetUserShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!Util.isUnset(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!Util.isUnset(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!Util.isUnset(request.language)) {
      body["language"] = request.language;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = Util.toJSONString(headers.accountContextShrink);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetUser",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/im/getUser`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserResponse>(await this.callApi(params, req, runtime), new GetUserResponse({}));
  }

  async getUser(request: GetUserRequest): Promise<GetUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetUserHeaders({ });
    return await this.getUserWithOptions(request, headers, runtime);
  }

  async insertRowsBeforeWithOptions(tmpReq: InsertRowsBeforeRequest, tmpHeader: InsertRowsBeforeHeaders, runtime: $Util.RuntimeOptions): Promise<InsertRowsBeforeResponse> {
    Util.validateModel(tmpReq);
    let request = new InsertRowsBeforeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new InsertRowsBeforeShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!Util.isUnset(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!Util.isUnset(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.row)) {
      body["Row"] = request.row;
    }

    if (!Util.isUnset(request.rowCount)) {
      body["RowCount"] = request.rowCount;
    }

    if (!Util.isUnset(request.sheetId)) {
      body["SheetId"] = request.sheetId;
    }

    if (!Util.isUnset(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!Util.isUnset(request.workbookId)) {
      body["WorkbookId"] = request.workbookId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = Util.toJSONString(headers.accountContextShrink);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "InsertRowsBefore",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/insertRowsBefore`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InsertRowsBeforeResponse>(await this.callApi(params, req, runtime), new InsertRowsBeforeResponse({}));
  }

  async insertRowsBefore(request: InsertRowsBeforeRequest): Promise<InsertRowsBeforeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new InsertRowsBeforeHeaders({ });
    return await this.insertRowsBeforeWithOptions(request, headers, runtime);
  }

  async queryOrgTodoTasksWithOptions(tmpReq: QueryOrgTodoTasksRequest, tmpHeader: QueryOrgTodoTasksHeaders, runtime: $Util.RuntimeOptions): Promise<QueryOrgTodoTasksResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryOrgTodoTasksShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new QueryOrgTodoTasksShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!Util.isUnset(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!Util.isUnset(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!Util.isUnset(request.isDone)) {
      body["isDone"] = request.isDone;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["nextToken"] = request.nextToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = Util.toJSONString(headers.accountContextShrink);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryOrgTodoTasks",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/task/queryOrgTodoTasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryOrgTodoTasksResponse>(await this.callApi(params, req, runtime), new QueryOrgTodoTasksResponse({}));
  }

  async queryOrgTodoTasks(request: QueryOrgTodoTasksRequest): Promise<QueryOrgTodoTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryOrgTodoTasksHeaders({ });
    return await this.queryOrgTodoTasksWithOptions(request, headers, runtime);
  }

  async updateTodoTaskWithOptions(tmpReq: UpdateTodoTaskRequest, tmpHeader: UpdateTodoTaskHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateTodoTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateTodoTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new UpdateTodoTaskShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!Util.isUnset(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!Util.isUnset(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    if (!Util.isUnset(tmpReq.executorIds)) {
      request.executorIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.executorIds, "executorIds", "json");
    }

    if (!Util.isUnset(tmpReq.participantIds)) {
      request.participantIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.participantIds, "participantIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.done)) {
      body["done"] = request.done;
    }

    if (!Util.isUnset(request.dueTime)) {
      body["dueTime"] = request.dueTime;
    }

    if (!Util.isUnset(request.executorIdsShrink)) {
      body["executorIds"] = request.executorIdsShrink;
    }

    if (!Util.isUnset(request.participantIdsShrink)) {
      body["participantIds"] = request.participantIdsShrink;
    }

    if (!Util.isUnset(request.subject)) {
      body["subject"] = request.subject;
    }

    if (!Util.isUnset(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = Util.toJSONString(headers.accountContextShrink);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTodoTask",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/task/updateTodoTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTodoTaskResponse>(await this.callApi(params, req, runtime), new UpdateTodoTaskResponse({}));
  }

  async updateTodoTask(request: UpdateTodoTaskRequest): Promise<UpdateTodoTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateTodoTaskHeaders({ });
    return await this.updateTodoTaskWithOptions(request, headers, runtime);
  }

  async updateTodoTaskExecutorStatusWithOptions(tmpReq: UpdateTodoTaskExecutorStatusRequest, tmpHeader: UpdateTodoTaskExecutorStatusHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateTodoTaskExecutorStatusResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateTodoTaskExecutorStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new UpdateTodoTaskExecutorStatusShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!Util.isUnset(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!Util.isUnset(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    if (!Util.isUnset(tmpReq.executorStatusList)) {
      request.executorStatusListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.executorStatusList, "executorStatusList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!Util.isUnset(request.executorStatusListShrink)) {
      body["executorStatusList"] = request.executorStatusListShrink;
    }

    if (!Util.isUnset(request.operatorId)) {
      body["operatorId"] = request.operatorId;
    }

    if (!Util.isUnset(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = Util.toJSONString(headers.accountContextShrink);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTodoTaskExecutorStatus",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/task/updateTodoTaskExecutorStatus`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTodoTaskExecutorStatusResponse>(await this.callApi(params, req, runtime), new UpdateTodoTaskExecutorStatusResponse({}));
  }

  async updateTodoTaskExecutorStatus(request: UpdateTodoTaskExecutorStatusRequest): Promise<UpdateTodoTaskExecutorStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateTodoTaskExecutorStatusHeaders({ });
    return await this.updateTodoTaskExecutorStatusWithOptions(request, headers, runtime);
  }

  async updateWorkspaceDocMembersWithOptions(tmpReq: UpdateWorkspaceDocMembersRequest, tmpHeader: UpdateWorkspaceDocMembersHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateWorkspaceDocMembersResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateWorkspaceDocMembersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new UpdateWorkspaceDocMembersShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!Util.isUnset(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!Util.isUnset(tmpReq.members)) {
      request.membersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.members, "Members", "json");
    }

    if (!Util.isUnset(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.membersShrink)) {
      body["Members"] = request.membersShrink;
    }

    if (!Util.isUnset(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = Util.toJSONString(headers.accountContextShrink);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWorkspaceDocMembers",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/updateWorkspaceDocMembers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateWorkspaceDocMembersResponse>(await this.callApi(params, req, runtime), new UpdateWorkspaceDocMembersResponse({}));
  }

  async updateWorkspaceDocMembers(request: UpdateWorkspaceDocMembersRequest): Promise<UpdateWorkspaceDocMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateWorkspaceDocMembersHeaders({ });
    return await this.updateWorkspaceDocMembersWithOptions(request, headers, runtime);
  }

  async updateWorkspaceMembersWithOptions(tmpReq: UpdateWorkspaceMembersRequest, tmpHeader: UpdateWorkspaceMembersHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateWorkspaceMembersResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateWorkspaceMembersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new UpdateWorkspaceMembersShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!Util.isUnset(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!Util.isUnset(tmpReq.members)) {
      request.membersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.members, "Members", "json");
    }

    if (!Util.isUnset(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.membersShrink)) {
      body["Members"] = request.membersShrink;
    }

    if (!Util.isUnset(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = Util.toJSONString(headers.accountContextShrink);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWorkspaceMembers",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/updateWorkspaceMembers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateWorkspaceMembersResponse>(await this.callApi(params, req, runtime), new UpdateWorkspaceMembersResponse({}));
  }

  async updateWorkspaceMembers(request: UpdateWorkspaceMembersRequest): Promise<UpdateWorkspaceMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateWorkspaceMembersHeaders({ });
    return await this.updateWorkspaceMembersWithOptions(request, headers, runtime);
  }

}
