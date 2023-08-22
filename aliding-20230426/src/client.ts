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
