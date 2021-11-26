// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateHostGroupRequest extends $tea.Model {
  aliyunRegion?: string;
  ecsLabelKey?: string;
  ecsLabelValue?: string;
  ecsType?: string;
  envId?: string;
  machineInfos?: string;
  name?: string;
  serviceConnectionId?: number;
  tagIds?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunRegion: 'aliyunRegion',
      ecsLabelKey: 'ecsLabelKey',
      ecsLabelValue: 'ecsLabelValue',
      ecsType: 'ecsType',
      envId: 'envId',
      machineInfos: 'machineInfos',
      name: 'name',
      serviceConnectionId: 'serviceConnectionId',
      tagIds: 'tagIds',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunRegion: 'string',
      ecsLabelKey: 'string',
      ecsLabelValue: 'string',
      ecsType: 'string',
      envId: 'string',
      machineInfos: 'string',
      name: 'string',
      serviceConnectionId: 'number',
      tagIds: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHostGroupResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  hostGroupId?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      hostGroupId: 'hostGroupId',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      hostGroupId: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHostGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateHostGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateHostGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceMemberRequest extends $tea.Model {
  accountId?: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      roleName: 'roleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceMemberResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateResourceMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateResourceMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSshKeyResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  sshKey?: CreateSshKeyResponseBodySshKey;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      sshKey: 'sshKey',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      sshKey: CreateSshKeyResponseBodySshKey,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSshKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSshKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSshKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVariableGroupRequest extends $tea.Model {
  description?: string;
  name?: string;
  variables?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      variables: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVariableGroupResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  variableGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
      variableGroupId: 'variableGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      variableGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVariableGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateVariableGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateVariableGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceRequest extends $tea.Model {
  codeUrl?: string;
  codeVersion?: string;
  filePath?: string;
  name?: string;
  requestFrom?: string;
  resourceIdentifier?: string;
  reuse?: boolean;
  workspaceTemplate?: string;
  static names(): { [key: string]: string } {
    return {
      codeUrl: 'codeUrl',
      codeVersion: 'codeVersion',
      filePath: 'filePath',
      name: 'name',
      requestFrom: 'requestFrom',
      resourceIdentifier: 'resourceIdentifier',
      reuse: 'reuse',
      workspaceTemplate: 'workspaceTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeUrl: 'string',
      codeVersion: 'string',
      filePath: 'string',
      name: 'string',
      requestFrom: 'string',
      resourceIdentifier: 'string',
      reuse: 'boolean',
      workspaceTemplate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  workspace?: CreateWorkspaceResponseBodyWorkspace;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      workspace: CreateWorkspaceResponseBodyWorkspace,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateWorkspaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateWorkspaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHostGroupResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHostGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteHostGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteHostGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePipelineResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePipelineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeletePipelineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeletePipelineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceMemberResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteResourceMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteResourceMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVariableGroupResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVariableGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVariableGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVariableGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FrozenWorkspaceResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FrozenWorkspaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FrozenWorkspaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FrozenWorkspaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostGroupResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  hostGroup?: GetHostGroupResponseBodyHostGroup;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      hostGroup: 'hostGroup',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      hostGroup: GetHostGroupResponseBodyHostGroup,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetHostGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetHostGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrganizationMemberResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  member?: GetOrganizationMemberResponseBodyMember;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      member: 'member',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      member: GetOrganizationMemberResponseBodyMember,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrganizationMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOrganizationMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOrganizationMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  pipeline?: GetPipelineResponseBodyPipeline;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      pipeline: 'pipeline',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      pipeline: GetPipelineResponseBodyPipeline,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPipelineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPipelineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineRunResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  pipelineRun?: GetPipelineRunResponseBodyPipelineRun;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      pipelineRun: 'pipelineRun',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      pipelineRun: GetPipelineRunResponseBodyPipelineRun,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineRunResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPipelineRunResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPipelineRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVMDeployOrderResponseBody extends $tea.Model {
  deployOrder?: GetVMDeployOrderResponseBodyDeployOrder;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      deployOrder: 'deployOrder',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployOrder: GetVMDeployOrderResponseBodyDeployOrder,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVMDeployOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetVMDeployOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetVMDeployOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVariableGroupResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  variableGroup?: GetVariableGroupResponseBodyVariableGroup;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
      variableGroup: 'variableGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      variableGroup: GetVariableGroupResponseBodyVariableGroup,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVariableGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetVariableGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetVariableGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkspaceResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  workspace?: GetWorkspaceResponseBodyWorkspace;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      workspace: GetWorkspaceResponseBodyWorkspace,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkspaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetWorkspaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetWorkspaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostGroupsRequest extends $tea.Model {
  createEndTime?: number;
  createStartTime?: number;
  creatorAccountIds?: string;
  ids?: string;
  maxResults?: number;
  name?: string;
  nextToken?: string;
  pageOrder?: string;
  pageSort?: string;
  static names(): { [key: string]: string } {
    return {
      createEndTime: 'createEndTime',
      createStartTime: 'createStartTime',
      creatorAccountIds: 'creatorAccountIds',
      ids: 'ids',
      maxResults: 'maxResults',
      name: 'name',
      nextToken: 'nextToken',
      pageOrder: 'pageOrder',
      pageSort: 'pageSort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createEndTime: 'number',
      createStartTime: 'number',
      creatorAccountIds: 'string',
      ids: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      pageOrder: 'string',
      pageSort: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostGroupsResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  hostGroups?: ListHostGroupsResponseBodyHostGroups[];
  nextToken?: string;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      hostGroups: 'hostGroups',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      hostGroups: { 'type': 'array', 'itemType': ListHostGroupsResponseBodyHostGroups },
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListHostGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListHostGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationMembersRequest extends $tea.Model {
  externUid?: string;
  joinTimeFrom?: number;
  joinTimeTo?: number;
  maxResults?: number;
  nextToken?: string;
  organizationMemberName?: string;
  provider?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      externUid: 'externUid',
      joinTimeFrom: 'joinTimeFrom',
      joinTimeTo: 'joinTimeTo',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      organizationMemberName: 'organizationMemberName',
      provider: 'provider',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUid: 'string',
      joinTimeFrom: 'number',
      joinTimeTo: 'number',
      maxResults: 'number',
      nextToken: 'string',
      organizationMemberName: 'string',
      provider: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationMembersResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  members?: ListOrganizationMembersResponseBodyMembers[];
  nextToken?: string;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      members: 'members',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      members: { 'type': 'array', 'itemType': ListOrganizationMembersResponseBodyMembers },
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOrganizationMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOrganizationMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineRunsRequest extends $tea.Model {
  endTime?: number;
  maxResults?: number;
  nextToken?: string;
  startTime?: number;
  status?: string;
  triggerMode?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      startTime: 'startTime',
      status: 'status',
      triggerMode: 'triggerMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      maxResults: 'number',
      nextToken: 'string',
      startTime: 'number',
      status: 'string',
      triggerMode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineRunsResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  nextToken?: string;
  pipelineRuns?: ListPipelineRunsResponseBodyPipelineRuns[];
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      nextToken: 'nextToken',
      pipelineRuns: 'pipelineRuns',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      nextToken: 'string',
      pipelineRuns: { 'type': 'array', 'itemType': ListPipelineRunsResponseBodyPipelineRuns },
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineRunsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPipelineRunsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPipelineRunsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelinesRequest extends $tea.Model {
  createEndTime?: number;
  createStartTime?: number;
  creatorAccountIds?: string;
  executeAccountIds?: string;
  executeEndTime?: number;
  executeStartTime?: number;
  maxResults?: number;
  nextToken?: string;
  pipelineName?: string;
  statusList?: string;
  static names(): { [key: string]: string } {
    return {
      createEndTime: 'createEndTime',
      createStartTime: 'createStartTime',
      creatorAccountIds: 'creatorAccountIds',
      executeAccountIds: 'executeAccountIds',
      executeEndTime: 'executeEndTime',
      executeStartTime: 'executeStartTime',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      pipelineName: 'pipelineName',
      statusList: 'statusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createEndTime: 'number',
      createStartTime: 'number',
      creatorAccountIds: 'string',
      executeAccountIds: 'string',
      executeEndTime: 'number',
      executeStartTime: 'number',
      maxResults: 'number',
      nextToken: 'string',
      pipelineName: 'string',
      statusList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelinesResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  nextToken?: string;
  pipelines?: ListPipelinesResponseBodyPipelines[];
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      nextToken: 'nextToken',
      pipelines: 'pipelines',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      nextToken: 'string',
      pipelines: { 'type': 'array', 'itemType': ListPipelinesResponseBodyPipelines },
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
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

export class ListResourceMembersResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  resourceMembers?: ListResourceMembersResponseBodyResourceMembers[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      resourceMembers: 'resourceMembers',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      resourceMembers: { 'type': 'array', 'itemType': ListResourceMembersResponseBodyResourceMembers },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListResourceMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListResourceMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceConnectionsRequest extends $tea.Model {
  sericeConnectionType?: string;
  static names(): { [key: string]: string } {
    return {
      sericeConnectionType: 'sericeConnectionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sericeConnectionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceConnectionsResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  serviceConnections?: ListServiceConnectionsResponseBodyServiceConnections[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      serviceConnections: 'serviceConnections',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      serviceConnections: { 'type': 'array', 'itemType': ListServiceConnectionsResponseBodyServiceConnections },
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

export class ListVariableGroupsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  pageOrder?: string;
  pageSort?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      pageOrder: 'pageOrder',
      pageSort: 'pageSort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      pageOrder: 'string',
      pageSort: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVariableGroupsResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  nextToken?: string;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  variableGroups?: ListVariableGroupsResponseBodyVariableGroups[];
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
      variableGroups: 'variableGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      variableGroups: { 'type': 'array', 'itemType': ListVariableGroupsResponseBodyVariableGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVariableGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVariableGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVariableGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  statusList?: string[];
  workspaceTemplateList?: string[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      statusList: 'statusList',
      workspaceTemplateList: 'workspaceTemplateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      statusList: { 'type': 'array', 'itemType': 'string' },
      workspaceTemplateList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesShrinkRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  statusListShrink?: string;
  workspaceTemplateListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      statusListShrink: 'statusList',
      workspaceTemplateListShrink: 'workspaceTemplateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      statusListShrink: 'string',
      workspaceTemplateListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  workspaces?: ListWorkspacesResponseBodyWorkspaces[];
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
      workspaces: 'workspaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      workspaces: { 'type': 'array', 'itemType': ListWorkspacesResponseBodyWorkspaces },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListWorkspacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListWorkspacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogPipelineJobRunResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  log?: LogPipelineJobRunResponseBodyLog;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      log: 'log',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      log: LogPipelineJobRunResponseBodyLog,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogPipelineJobRunResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: LogPipelineJobRunResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: LogPipelineJobRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogVMDeployMachineResponseBody extends $tea.Model {
  deployMachineLog?: LogVMDeployMachineResponseBodyDeployMachineLog;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      deployMachineLog: 'deployMachineLog',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployMachineLog: LogVMDeployMachineResponseBodyDeployMachineLog,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogVMDeployMachineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: LogVMDeployMachineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: LogVMDeployMachineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PassPipelineValidateResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PassPipelineValidateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PassPipelineValidateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PassPipelineValidateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefusePipelineValidateResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefusePipelineValidateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RefusePipelineValidateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RefusePipelineValidateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseWorkspaceResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseWorkspaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReleaseWorkspaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReleaseWorkspaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetSshKeyResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  sshKey?: ResetSshKeyResponseBodySshKey;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      sshKey: 'sshKey',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      sshKey: ResetSshKeyResponseBodySshKey,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetSshKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResetSshKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResetSshKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeVMDeployOrderResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeVMDeployOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResumeVMDeployOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResumeVMDeployOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryPipelineJobRunResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryPipelineJobRunResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RetryPipelineJobRunResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RetryPipelineJobRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryVMDeployMachineResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryVMDeployMachineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RetryVMDeployMachineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RetryVMDeployMachineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SkipPipelineJobRunResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SkipPipelineJobRunResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SkipPipelineJobRunResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SkipPipelineJobRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SkipVMDeployMachineResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SkipVMDeployMachineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SkipVMDeployMachineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SkipVMDeployMachineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPipelineRunRequest extends $tea.Model {
  params?: string;
  static names(): { [key: string]: string } {
    return {
      params: 'params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPipelineRunResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  pipelineRunId?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      pipelineRunId: 'pipelineRunId',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      pipelineRunId: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPipelineRunResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartPipelineRunResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartPipelineRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopPipelineJobRunResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopPipelineJobRunResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopPipelineJobRunResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopPipelineJobRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopPipelineRunResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopPipelineRunResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopPipelineRunResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopPipelineRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopVMDeployOrderResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopVMDeployOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopVMDeployOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopVMDeployOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHostGroupRequest extends $tea.Model {
  aliyunRegion?: string;
  ecsLabelKey?: string;
  ecsLabelValue?: string;
  ecsType?: string;
  envId?: string;
  machineInfos?: string;
  name?: string;
  serviceConnectionId?: number;
  tagIds?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunRegion: 'aliyunRegion',
      ecsLabelKey: 'ecsLabelKey',
      ecsLabelValue: 'ecsLabelValue',
      ecsType: 'ecsType',
      envId: 'envId',
      machineInfos: 'machineInfos',
      name: 'name',
      serviceConnectionId: 'serviceConnectionId',
      tagIds: 'tagIds',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunRegion: 'string',
      ecsLabelKey: 'string',
      ecsLabelValue: 'string',
      ecsType: 'string',
      envId: 'string',
      machineInfos: 'string',
      name: 'string',
      serviceConnectionId: 'number',
      tagIds: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHostGroupResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHostGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateHostGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateHostGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceMemberRequest extends $tea.Model {
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      roleName: 'roleName',
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

export class UpdateResourceMemberResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateResourceMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateResourceMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVariableGroupRequest extends $tea.Model {
  description?: string;
  name?: string;
  variables?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      variables: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVariableGroupResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVariableGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateVariableGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateVariableGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSshKeyResponseBodySshKey extends $tea.Model {
  id?: number;
  publicKey?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      publicKey: 'publicKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      publicKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceResponseBodyWorkspace extends $tea.Model {
  createTime?: string;
  creator?: string;
  id?: string;
  name?: string;
  status?: string;
  template?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      creator: 'creator',
      id: 'id',
      name: 'name',
      status: 'status',
      template: 'template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      creator: 'string',
      id: 'string',
      name: 'string',
      status: 'string',
      template: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostGroupResponseBodyHostGroupHostInfos extends $tea.Model {
  aliyunRegionId?: string;
  createTime?: number;
  creatorAccountId?: string;
  instanceName?: string;
  ip?: string;
  machineSn?: string;
  modifierAccountId?: string;
  objectType?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      aliyunRegionId: 'aliyunRegionId',
      createTime: 'createTime',
      creatorAccountId: 'creatorAccountId',
      instanceName: 'instanceName',
      ip: 'ip',
      machineSn: 'machineSn',
      modifierAccountId: 'modifierAccountId',
      objectType: 'objectType',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunRegionId: 'string',
      createTime: 'number',
      creatorAccountId: 'string',
      instanceName: 'string',
      ip: 'string',
      machineSn: 'string',
      modifierAccountId: 'string',
      objectType: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostGroupResponseBodyHostGroup extends $tea.Model {
  aliyunRegion?: string;
  createTime?: number;
  creatorAccountId?: string;
  description?: string;
  ecsLabelKey?: string;
  ecsLabelValue?: string;
  ecsType?: string;
  hostInfos?: GetHostGroupResponseBodyHostGroupHostInfos[];
  hostNum?: number;
  id?: number;
  modifierAccountId?: string;
  name?: string;
  serviceConnectionId?: number;
  type?: string;
  upateTIme?: number;
  static names(): { [key: string]: string } {
    return {
      aliyunRegion: 'aliyunRegion',
      createTime: 'createTime',
      creatorAccountId: 'creatorAccountId',
      description: 'description',
      ecsLabelKey: 'ecsLabelKey',
      ecsLabelValue: 'ecsLabelValue',
      ecsType: 'ecsType',
      hostInfos: 'hostInfos',
      hostNum: 'hostNum',
      id: 'id',
      modifierAccountId: 'modifierAccountId',
      name: 'name',
      serviceConnectionId: 'serviceConnectionId',
      type: 'type',
      upateTIme: 'upateTIme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunRegion: 'string',
      createTime: 'number',
      creatorAccountId: 'string',
      description: 'string',
      ecsLabelKey: 'string',
      ecsLabelValue: 'string',
      ecsType: 'string',
      hostInfos: { 'type': 'array', 'itemType': GetHostGroupResponseBodyHostGroupHostInfos },
      hostNum: 'number',
      id: 'number',
      modifierAccountId: 'string',
      name: 'string',
      serviceConnectionId: 'number',
      type: 'string',
      upateTIme: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrganizationMemberResponseBodyMemberIdentities extends $tea.Model {
  externUid?: string;
  provider?: string;
  static names(): { [key: string]: string } {
    return {
      externUid: 'externUid',
      provider: 'provider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUid: 'string',
      provider: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrganizationMemberResponseBodyMember extends $tea.Model {
  accountId?: string;
  birthday?: number;
  deptLists?: string[];
  email?: string;
  hiredDate?: number;
  identities?: GetOrganizationMemberResponseBodyMemberIdentities;
  joinTime?: number;
  lastVisitTime?: number;
  mobile?: string;
  organizationMemberName?: string;
  organizationRoleId?: string;
  organizationRoleName?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      birthday: 'birthday',
      deptLists: 'deptLists',
      email: 'email',
      hiredDate: 'hiredDate',
      identities: 'identities',
      joinTime: 'joinTime',
      lastVisitTime: 'lastVisitTime',
      mobile: 'mobile',
      organizationMemberName: 'organizationMemberName',
      organizationRoleId: 'organizationRoleId',
      organizationRoleName: 'organizationRoleName',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      birthday: 'number',
      deptLists: { 'type': 'array', 'itemType': 'string' },
      email: 'string',
      hiredDate: 'number',
      identities: GetOrganizationMemberResponseBodyMemberIdentities,
      joinTime: 'number',
      lastVisitTime: 'number',
      mobile: 'string',
      organizationMemberName: 'string',
      organizationRoleId: 'string',
      organizationRoleName: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineResponseBodyPipelinePipelineConfigSourcesData extends $tea.Model {
  branch?: string;
  cloneDepth?: number;
  credentialId?: number;
  credentialLabel?: string;
  credentialType?: string;
  events?: string[];
  isBranchMode?: boolean;
  isCloneDepth?: boolean;
  isSubmodule?: boolean;
  isTrigger?: boolean;
  label?: string;
  namespace?: string;
  repo?: string;
  serviceConnectionId?: number;
  triggerFilter?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'branch',
      cloneDepth: 'cloneDepth',
      credentialId: 'credentialId',
      credentialLabel: 'credentialLabel',
      credentialType: 'credentialType',
      events: 'events',
      isBranchMode: 'isBranchMode',
      isCloneDepth: 'isCloneDepth',
      isSubmodule: 'isSubmodule',
      isTrigger: 'isTrigger',
      label: 'label',
      namespace: 'namespace',
      repo: 'repo',
      serviceConnectionId: 'serviceConnectionId',
      triggerFilter: 'triggerFilter',
      webhook: 'webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      cloneDepth: 'number',
      credentialId: 'number',
      credentialLabel: 'string',
      credentialType: 'string',
      events: { 'type': 'array', 'itemType': 'string' },
      isBranchMode: 'boolean',
      isCloneDepth: 'boolean',
      isSubmodule: 'boolean',
      isTrigger: 'boolean',
      label: 'string',
      namespace: 'string',
      repo: 'string',
      serviceConnectionId: 'number',
      triggerFilter: 'string',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineResponseBodyPipelinePipelineConfigSources extends $tea.Model {
  data?: GetPipelineResponseBodyPipelinePipelineConfigSourcesData;
  sign?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      sign: 'sign',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetPipelineResponseBodyPipelinePipelineConfigSourcesData,
      sign: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineResponseBodyPipelinePipelineConfig extends $tea.Model {
  flow?: string;
  settings?: string;
  sources?: GetPipelineResponseBodyPipelinePipelineConfigSources[];
  static names(): { [key: string]: string } {
    return {
      flow: 'flow',
      settings: 'settings',
      sources: 'sources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: 'string',
      settings: 'string',
      sources: { 'type': 'array', 'itemType': GetPipelineResponseBodyPipelinePipelineConfigSources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineResponseBodyPipelineTagList extends $tea.Model {
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineResponseBodyPipeline extends $tea.Model {
  createTime?: number;
  creatorAccountId?: string;
  envId?: number;
  envName?: string;
  groupId?: number;
  modifierAccountId?: string;
  name?: string;
  pipelineConfig?: GetPipelineResponseBodyPipelinePipelineConfig;
  tagList?: GetPipelineResponseBodyPipelineTagList[];
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      creatorAccountId: 'creatorAccountId',
      envId: 'envId',
      envName: 'envName',
      groupId: 'groupId',
      modifierAccountId: 'modifierAccountId',
      name: 'name',
      pipelineConfig: 'pipelineConfig',
      tagList: 'tagList',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      creatorAccountId: 'string',
      envId: 'number',
      envName: 'string',
      groupId: 'number',
      modifierAccountId: 'string',
      name: 'string',
      pipelineConfig: GetPipelineResponseBodyPipelinePipelineConfig,
      tagList: { 'type': 'array', 'itemType': GetPipelineResponseBodyPipelineTagList },
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineRunResponseBodyPipelineRunSourcesData extends $tea.Model {
  branch?: string;
  commint?: string;
  repo?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'branch',
      commint: 'commint',
      repo: 'repo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      commint: 'string',
      repo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineRunResponseBodyPipelineRunSources extends $tea.Model {
  data?: GetPipelineRunResponseBodyPipelineRunSourcesData;
  sign?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      sign: 'sign',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetPipelineRunResponseBodyPipelineRunSourcesData,
      sign: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineRunResponseBodyPipelineRunStagesStageInfoJobsActions extends $tea.Model {
  disable?: boolean;
  params?: { [key: string]: any };
  type?: string;
  static names(): { [key: string]: string } {
    return {
      disable: 'disable',
      params: 'params',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disable: 'boolean',
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineRunResponseBodyPipelineRunStagesStageInfoJobs extends $tea.Model {
  actions?: GetPipelineRunResponseBodyPipelineRunStagesStageInfoJobsActions[];
  endTime?: number;
  id?: number;
  name?: string;
  params?: string;
  startTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      endTime: 'endTime',
      id: 'id',
      name: 'name',
      params: 'params',
      startTime: 'startTime',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': GetPipelineRunResponseBodyPipelineRunStagesStageInfoJobsActions },
      endTime: 'number',
      id: 'number',
      name: 'string',
      params: 'string',
      startTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineRunResponseBodyPipelineRunStagesStageInfo extends $tea.Model {
  endTime?: number;
  jobs?: GetPipelineRunResponseBodyPipelineRunStagesStageInfoJobs[];
  name?: string;
  startTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      jobs: 'jobs',
      name: 'name',
      startTime: 'startTime',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      jobs: { 'type': 'array', 'itemType': GetPipelineRunResponseBodyPipelineRunStagesStageInfoJobs },
      name: 'string',
      startTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineRunResponseBodyPipelineRunStages extends $tea.Model {
  name?: string;
  stageInfo?: GetPipelineRunResponseBodyPipelineRunStagesStageInfo;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      stageInfo: 'stageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      stageInfo: GetPipelineRunResponseBodyPipelineRunStagesStageInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineRunResponseBodyPipelineRun extends $tea.Model {
  createTime?: number;
  creatorAccountId?: string;
  modifierAccountId?: string;
  pipelineId?: number;
  pipelineRunId?: number;
  sources?: GetPipelineRunResponseBodyPipelineRunSources[];
  stageGroup?: string[][];
  stages?: GetPipelineRunResponseBodyPipelineRunStages[];
  status?: string;
  triggerMode?: number;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      creatorAccountId: 'creatorAccountId',
      modifierAccountId: 'modifierAccountId',
      pipelineId: 'pipelineId',
      pipelineRunId: 'pipelineRunId',
      sources: 'sources',
      stageGroup: 'stageGroup',
      stages: 'stages',
      status: 'status',
      triggerMode: 'triggerMode',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      creatorAccountId: 'string',
      modifierAccountId: 'string',
      pipelineId: 'number',
      pipelineRunId: 'number',
      sources: { 'type': 'array', 'itemType': GetPipelineRunResponseBodyPipelineRunSources },
      stageGroup: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
      stages: { 'type': 'array', 'itemType': GetPipelineRunResponseBodyPipelineRunStages },
      status: 'string',
      triggerMode: 'number',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVMDeployOrderResponseBodyDeployOrderActions extends $tea.Model {
  disable?: boolean;
  params?: { [key: string]: any };
  type?: string;
  static names(): { [key: string]: string } {
    return {
      disable: 'disable',
      params: 'params',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disable: 'boolean',
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVMDeployOrderResponseBodyDeployOrderDeployMachineInfoDeployMachinesActions extends $tea.Model {
  disable?: boolean;
  params?: { [key: string]: any };
  type?: string;
  static names(): { [key: string]: string } {
    return {
      disable: 'disable',
      params: 'params',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disable: 'boolean',
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVMDeployOrderResponseBodyDeployOrderDeployMachineInfoDeployMachines extends $tea.Model {
  actions?: GetVMDeployOrderResponseBodyDeployOrderDeployMachineInfoDeployMachinesActions[];
  batchNum?: number;
  clientStatus?: string;
  createTime?: number;
  ip?: string;
  machineSn?: string;
  status?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      batchNum: 'batchNum',
      clientStatus: 'clientStatus',
      createTime: 'createTime',
      ip: 'ip',
      machineSn: 'machineSn',
      status: 'status',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': GetVMDeployOrderResponseBodyDeployOrderDeployMachineInfoDeployMachinesActions },
      batchNum: 'number',
      clientStatus: 'string',
      createTime: 'number',
      ip: 'string',
      machineSn: 'string',
      status: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVMDeployOrderResponseBodyDeployOrderDeployMachineInfo extends $tea.Model {
  batchNum?: number;
  deployMachines?: GetVMDeployOrderResponseBodyDeployOrderDeployMachineInfoDeployMachines[];
  hostGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      batchNum: 'batchNum',
      deployMachines: 'deployMachines',
      hostGroupId: 'hostGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchNum: 'number',
      deployMachines: { 'type': 'array', 'itemType': GetVMDeployOrderResponseBodyDeployOrderDeployMachineInfoDeployMachines },
      hostGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVMDeployOrderResponseBodyDeployOrder extends $tea.Model {
  actions?: GetVMDeployOrderResponseBodyDeployOrderActions[];
  createTime?: number;
  creator?: string;
  currentBatch?: number;
  deployMachineInfo?: GetVMDeployOrderResponseBodyDeployOrderDeployMachineInfo;
  deployOrderId?: string;
  exceptionCode?: string;
  status?: string;
  totalBatch?: number;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      createTime: 'createTime',
      creator: 'creator',
      currentBatch: 'currentBatch',
      deployMachineInfo: 'deployMachineInfo',
      deployOrderId: 'deployOrderId',
      exceptionCode: 'exceptionCode',
      status: 'status',
      totalBatch: 'totalBatch',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': GetVMDeployOrderResponseBodyDeployOrderActions },
      createTime: 'number',
      creator: 'string',
      currentBatch: 'number',
      deployMachineInfo: GetVMDeployOrderResponseBodyDeployOrderDeployMachineInfo,
      deployOrderId: 'string',
      exceptionCode: 'string',
      status: 'string',
      totalBatch: 'number',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVariableGroupResponseBodyVariableGroupRelatedPipelines extends $tea.Model {
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVariableGroupResponseBodyVariableGroupVariables extends $tea.Model {
  isEncrypted?: boolean;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      isEncrypted: 'isEncrypted',
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isEncrypted: 'boolean',
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVariableGroupResponseBodyVariableGroup extends $tea.Model {
  ccreatorAccountId?: string;
  createTime?: number;
  description?: string;
  id?: number;
  modifierAccountId?: string;
  name?: string;
  relatedPipelines?: GetVariableGroupResponseBodyVariableGroupRelatedPipelines[];
  updateTime?: number;
  variables?: GetVariableGroupResponseBodyVariableGroupVariables[];
  static names(): { [key: string]: string } {
    return {
      ccreatorAccountId: 'ccreatorAccountId',
      createTime: 'createTime',
      description: 'description',
      id: 'id',
      modifierAccountId: 'modifierAccountId',
      name: 'name',
      relatedPipelines: 'relatedPipelines',
      updateTime: 'updateTime',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccreatorAccountId: 'string',
      createTime: 'number',
      description: 'string',
      id: 'number',
      modifierAccountId: 'string',
      name: 'string',
      relatedPipelines: { 'type': 'array', 'itemType': GetVariableGroupResponseBodyVariableGroupRelatedPipelines },
      updateTime: 'number',
      variables: { 'type': 'array', 'itemType': GetVariableGroupResponseBodyVariableGroupVariables },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkspaceResponseBodyWorkspace extends $tea.Model {
  codeUrl?: string;
  codeVersion?: string;
  createTime?: string;
  id?: string;
  name?: string;
  spec?: string;
  status?: string;
  template?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      codeUrl: 'codeUrl',
      codeVersion: 'codeVersion',
      createTime: 'createTime',
      id: 'id',
      name: 'name',
      spec: 'spec',
      status: 'status',
      template: 'template',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeUrl: 'string',
      codeVersion: 'string',
      createTime: 'string',
      id: 'string',
      name: 'string',
      spec: 'string',
      status: 'string',
      template: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostGroupsResponseBodyHostGroups extends $tea.Model {
  aliyunRegion?: string;
  createTime?: number;
  creatorAccountId?: string;
  description?: string;
  ecsLabelKey?: string;
  ecsLabelValue?: string;
  ecsType?: string;
  hostNum?: number;
  id?: number;
  modifierAccountId?: string;
  name?: string;
  serviceConnectionId?: number;
  type?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      aliyunRegion: 'aliyunRegion',
      createTime: 'createTime',
      creatorAccountId: 'creatorAccountId',
      description: 'description',
      ecsLabelKey: 'ecsLabelKey',
      ecsLabelValue: 'ecsLabelValue',
      ecsType: 'ecsType',
      hostNum: 'hostNum',
      id: 'id',
      modifierAccountId: 'modifierAccountId',
      name: 'name',
      serviceConnectionId: 'serviceConnectionId',
      type: 'type',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunRegion: 'string',
      createTime: 'number',
      creatorAccountId: 'string',
      description: 'string',
      ecsLabelKey: 'string',
      ecsLabelValue: 'string',
      ecsType: 'string',
      hostNum: 'number',
      id: 'number',
      modifierAccountId: 'string',
      name: 'string',
      serviceConnectionId: 'number',
      type: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationMembersResponseBodyMembersIdentities extends $tea.Model {
  externUid?: string;
  provider?: string;
  static names(): { [key: string]: string } {
    return {
      externUid: 'externUid',
      provider: 'provider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUid: 'string',
      provider: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationMembersResponseBodyMembers extends $tea.Model {
  accountId?: string;
  birthday?: number;
  deptLists?: string[];
  email?: string;
  hiredDate?: number;
  identities?: ListOrganizationMembersResponseBodyMembersIdentities;
  joinTime?: number;
  lastVisitTime?: number;
  mobile?: string;
  organizationMemberName?: string;
  organizationRoleId?: string;
  organizationRoleName?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      birthday: 'birthday',
      deptLists: 'deptLists',
      email: 'email',
      hiredDate: 'hiredDate',
      identities: 'identities',
      joinTime: 'joinTime',
      lastVisitTime: 'lastVisitTime',
      mobile: 'mobile',
      organizationMemberName: 'organizationMemberName',
      organizationRoleId: 'organizationRoleId',
      organizationRoleName: 'organizationRoleName',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      birthday: 'number',
      deptLists: { 'type': 'array', 'itemType': 'string' },
      email: 'string',
      hiredDate: 'number',
      identities: ListOrganizationMembersResponseBodyMembersIdentities,
      joinTime: 'number',
      lastVisitTime: 'number',
      mobile: 'string',
      organizationMemberName: 'string',
      organizationRoleId: 'string',
      organizationRoleName: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineRunsResponseBodyPipelineRuns extends $tea.Model {
  creatorAccountId?: string;
  endTime?: number;
  pipelineId?: number;
  pipelineRunId?: number;
  startTime?: number;
  status?: string;
  triggerMode?: number;
  static names(): { [key: string]: string } {
    return {
      creatorAccountId: 'creatorAccountId',
      endTime: 'endTime',
      pipelineId: 'pipelineId',
      pipelineRunId: 'pipelineRunId',
      startTime: 'startTime',
      status: 'status',
      triggerMode: 'triggerMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorAccountId: 'string',
      endTime: 'number',
      pipelineId: 'number',
      pipelineRunId: 'number',
      startTime: 'number',
      status: 'string',
      triggerMode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelinesResponseBodyPipelines extends $tea.Model {
  createTime?: number;
  creatorAccountId?: string;
  pipelineId?: number;
  pipelineName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      creatorAccountId: 'creatorAccountId',
      pipelineId: 'pipelineId',
      pipelineName: 'pipelineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      creatorAccountId: 'string',
      pipelineId: 'number',
      pipelineName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceMembersResponseBodyResourceMembers extends $tea.Model {
  accountId?: string;
  roleName?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      roleName: 'roleName',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      roleName: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceConnectionsResponseBodyServiceConnections extends $tea.Model {
  createTime?: number;
  id?: number;
  name?: string;
  ownerAccountId?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      id: 'id',
      name: 'name',
      ownerAccountId: 'ownerAccountId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      id: 'number',
      name: 'string',
      ownerAccountId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVariableGroupsResponseBodyVariableGroupsRelatedPipelines extends $tea.Model {
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVariableGroupsResponseBodyVariableGroupsVariables extends $tea.Model {
  isEncrypted?: boolean;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      isEncrypted: 'isEncrypted',
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isEncrypted: 'boolean',
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVariableGroupsResponseBodyVariableGroups extends $tea.Model {
  createTime?: number;
  creatorAccountId?: string;
  description?: string;
  id?: number;
  modifierAccountId?: string;
  name?: string;
  relatedPipelines?: ListVariableGroupsResponseBodyVariableGroupsRelatedPipelines[];
  updateTime?: number;
  variables?: ListVariableGroupsResponseBodyVariableGroupsVariables[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      creatorAccountId: 'creatorAccountId',
      description: 'description',
      id: 'id',
      modifierAccountId: 'modifierAccountId',
      name: 'name',
      relatedPipelines: 'relatedPipelines',
      updateTime: 'updateTime',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      creatorAccountId: 'string',
      description: 'string',
      id: 'number',
      modifierAccountId: 'string',
      name: 'string',
      relatedPipelines: { 'type': 'array', 'itemType': ListVariableGroupsResponseBodyVariableGroupsRelatedPipelines },
      updateTime: 'number',
      variables: { 'type': 'array', 'itemType': ListVariableGroupsResponseBodyVariableGroupsVariables },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesResponseBodyWorkspaces extends $tea.Model {
  codeUrl?: string;
  codeVersion?: string;
  createTime?: string;
  id?: string;
  name?: string;
  spec?: string;
  status?: string;
  template?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      codeUrl: 'codeUrl',
      codeVersion: 'codeVersion',
      createTime: 'createTime',
      id: 'id',
      name: 'name',
      spec: 'spec',
      status: 'status',
      template: 'template',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeUrl: 'string',
      codeVersion: 'string',
      createTime: 'string',
      id: 'string',
      name: 'string',
      spec: 'string',
      status: 'string',
      template: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogPipelineJobRunResponseBodyLog extends $tea.Model {
  content?: string;
  more?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      more: 'more',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      more: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogVMDeployMachineResponseBodyDeployMachineLog extends $tea.Model {
  aliyunRegion?: string;
  deployBeginTime?: number;
  deployEndTime?: number;
  deployLog?: string;
  deployLogPath?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunRegion: 'aliyunRegion',
      deployBeginTime: 'deployBeginTime',
      deployEndTime: 'deployEndTime',
      deployLog: 'deployLog',
      deployLogPath: 'deployLogPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunRegion: 'string',
      deployBeginTime: 'number',
      deployEndTime: 'number',
      deployLog: 'string',
      deployLogPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetSshKeyResponseBodySshKey extends $tea.Model {
  id?: number;
  publicKey?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      publicKey: 'publicKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      publicKey: 'string',
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
    this._endpoint = this.getEndpoint("devops", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createHostGroup(organizationId: string, request: CreateHostGroupRequest): Promise<CreateHostGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createHostGroupWithOptions(organizationId, request, headers, runtime);
  }

  async createHostGroupWithOptions(organizationId: string, request: CreateHostGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateHostGroupResponse> {
    Util.validateModel(request);
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aliyunRegion)) {
      body["aliyunRegion"] = request.aliyunRegion;
    }

    if (!Util.isUnset(request.ecsLabelKey)) {
      body["ecsLabelKey"] = request.ecsLabelKey;
    }

    if (!Util.isUnset(request.ecsLabelValue)) {
      body["ecsLabelValue"] = request.ecsLabelValue;
    }

    if (!Util.isUnset(request.ecsType)) {
      body["ecsType"] = request.ecsType;
    }

    if (!Util.isUnset(request.envId)) {
      body["envId"] = request.envId;
    }

    if (!Util.isUnset(request.machineInfos)) {
      body["machineInfos"] = request.machineInfos;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.serviceConnectionId)) {
      body["serviceConnectionId"] = request.serviceConnectionId;
    }

    if (!Util.isUnset(request.tagIds)) {
      body["tagIds"] = request.tagIds;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateHostGroup",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/hostGroups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateHostGroupResponse>(await this.callApi(params, req, runtime), new CreateHostGroupResponse({}));
  }

  async createResourceMember(organizationId: string, resourceType: string, resourceId: string, request: CreateResourceMemberRequest): Promise<CreateResourceMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createResourceMemberWithOptions(organizationId, resourceType, resourceId, request, headers, runtime);
  }

  async createResourceMemberWithOptions(organizationId: string, resourceType: string, resourceId: string, request: CreateResourceMemberRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateResourceMemberResponse> {
    Util.validateModel(request);
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    resourceType = OpenApiUtil.getEncodeParam(resourceType);
    resourceId = OpenApiUtil.getEncodeParam(resourceId);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountId)) {
      body["accountId"] = request.accountId;
    }

    if (!Util.isUnset(request.roleName)) {
      body["roleName"] = request.roleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateResourceMember",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/${resourceType}/${resourceId}/members`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateResourceMemberResponse>(await this.callApi(params, req, runtime), new CreateResourceMemberResponse({}));
  }

  async createSshKey(organizationId: string): Promise<CreateSshKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSshKeyWithOptions(organizationId, headers, runtime);
  }

  async createSshKeyWithOptions(organizationId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateSshKeyResponse> {
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "CreateSshKey",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/sshKey`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateSshKeyResponse>(await this.callApi(params, req, runtime), new CreateSshKeyResponse({}));
  }

  async createVariableGroup(organizationId: string, request: CreateVariableGroupRequest): Promise<CreateVariableGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createVariableGroupWithOptions(organizationId, request, headers, runtime);
  }

  async createVariableGroupWithOptions(organizationId: string, request: CreateVariableGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateVariableGroupResponse> {
    Util.validateModel(request);
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.variables)) {
      body["variables"] = request.variables;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateVariableGroup",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/variableGroups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateVariableGroupResponse>(await this.callApi(params, req, runtime), new CreateVariableGroupResponse({}));
  }

  async createWorkspace(request: CreateWorkspaceRequest): Promise<CreateWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createWorkspaceWithOptions(request, headers, runtime);
  }

  async createWorkspaceWithOptions(request: CreateWorkspaceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateWorkspaceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.codeUrl)) {
      body["codeUrl"] = request.codeUrl;
    }

    if (!Util.isUnset(request.codeVersion)) {
      body["codeVersion"] = request.codeVersion;
    }

    if (!Util.isUnset(request.filePath)) {
      body["filePath"] = request.filePath;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.requestFrom)) {
      body["requestFrom"] = request.requestFrom;
    }

    if (!Util.isUnset(request.resourceIdentifier)) {
      body["resourceIdentifier"] = request.resourceIdentifier;
    }

    if (!Util.isUnset(request.reuse)) {
      body["reuse"] = request.reuse;
    }

    if (!Util.isUnset(request.workspaceTemplate)) {
      body["workspaceTemplate"] = request.workspaceTemplate;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateWorkspace",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/workspaces`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateWorkspaceResponse>(await this.callApi(params, req, runtime), new CreateWorkspaceResponse({}));
  }

  async deleteHostGroup(organizationId: string, id: string): Promise<DeleteHostGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteHostGroupWithOptions(organizationId, id, headers, runtime);
  }

  async deleteHostGroupWithOptions(organizationId: string, id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteHostGroupResponse> {
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    id = OpenApiUtil.getEncodeParam(id);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteHostGroup",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/hostGroups/${id}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteHostGroupResponse>(await this.callApi(params, req, runtime), new DeleteHostGroupResponse({}));
  }

  async deletePipeline(organizationId: string, pipelineId: string): Promise<DeletePipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePipelineWithOptions(organizationId, pipelineId, headers, runtime);
  }

  async deletePipelineWithOptions(organizationId: string, pipelineId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeletePipelineResponse> {
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    pipelineId = OpenApiUtil.getEncodeParam(pipelineId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeletePipeline",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/pipelines/${pipelineId}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeletePipelineResponse>(await this.callApi(params, req, runtime), new DeletePipelineResponse({}));
  }

  async deleteResourceMember(organizationId: string, resourceType: string, resourceId: string, accountId: string): Promise<DeleteResourceMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceMemberWithOptions(organizationId, resourceType, resourceId, accountId, headers, runtime);
  }

  async deleteResourceMemberWithOptions(organizationId: string, resourceType: string, resourceId: string, accountId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteResourceMemberResponse> {
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    resourceType = OpenApiUtil.getEncodeParam(resourceType);
    resourceId = OpenApiUtil.getEncodeParam(resourceId);
    accountId = OpenApiUtil.getEncodeParam(accountId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteResourceMember",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/${resourceType}/${resourceId}/members/${accountId}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteResourceMemberResponse>(await this.callApi(params, req, runtime), new DeleteResourceMemberResponse({}));
  }

  async deleteVariableGroup(organizationId: string, id: string): Promise<DeleteVariableGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteVariableGroupWithOptions(organizationId, id, headers, runtime);
  }

  async deleteVariableGroupWithOptions(organizationId: string, id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteVariableGroupResponse> {
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    id = OpenApiUtil.getEncodeParam(id);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteVariableGroup",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/variableGroups/${id}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteVariableGroupResponse>(await this.callApi(params, req, runtime), new DeleteVariableGroupResponse({}));
  }

  async frozenWorkspace(workspaceId: string): Promise<FrozenWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.frozenWorkspaceWithOptions(workspaceId, headers, runtime);
  }

  async frozenWorkspaceWithOptions(workspaceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<FrozenWorkspaceResponse> {
    workspaceId = OpenApiUtil.getEncodeParam(workspaceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "FrozenWorkspace",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/workspaces/${workspaceId}/frozen`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<FrozenWorkspaceResponse>(await this.callApi(params, req, runtime), new FrozenWorkspaceResponse({}));
  }

  async getHostGroup(organizationId: string, id: string): Promise<GetHostGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHostGroupWithOptions(organizationId, id, headers, runtime);
  }

  async getHostGroupWithOptions(organizationId: string, id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetHostGroupResponse> {
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    id = OpenApiUtil.getEncodeParam(id);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetHostGroup",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/hostGroups/${id}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetHostGroupResponse>(await this.callApi(params, req, runtime), new GetHostGroupResponse({}));
  }

  async getOrganizationMember(organizationId: string, accountId: string): Promise<GetOrganizationMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOrganizationMemberWithOptions(organizationId, accountId, headers, runtime);
  }

  async getOrganizationMemberWithOptions(organizationId: string, accountId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetOrganizationMemberResponse> {
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    accountId = OpenApiUtil.getEncodeParam(accountId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetOrganizationMember",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/members/${accountId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetOrganizationMemberResponse>(await this.callApi(params, req, runtime), new GetOrganizationMemberResponse({}));
  }

  async getPipeline(organizationId: string, pipelineId: string): Promise<GetPipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPipelineWithOptions(organizationId, pipelineId, headers, runtime);
  }

  async getPipelineWithOptions(organizationId: string, pipelineId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetPipelineResponse> {
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    pipelineId = OpenApiUtil.getEncodeParam(pipelineId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetPipeline",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/pipelines/${pipelineId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetPipelineResponse>(await this.callApi(params, req, runtime), new GetPipelineResponse({}));
  }

  async getPipelineRun(organizationId: string, pipelineId: string, pipelineRunId: string): Promise<GetPipelineRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPipelineRunWithOptions(organizationId, pipelineId, pipelineRunId, headers, runtime);
  }

  async getPipelineRunWithOptions(organizationId: string, pipelineId: string, pipelineRunId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetPipelineRunResponse> {
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    pipelineId = OpenApiUtil.getEncodeParam(pipelineId);
    pipelineRunId = OpenApiUtil.getEncodeParam(pipelineRunId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetPipelineRun",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/pipelines/${pipelineId}/pipelineRuns/${pipelineRunId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetPipelineRunResponse>(await this.callApi(params, req, runtime), new GetPipelineRunResponse({}));
  }

  async getVMDeployOrder(organizationId: string, pipelineId: string, deployOrderId: string): Promise<GetVMDeployOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getVMDeployOrderWithOptions(organizationId, pipelineId, deployOrderId, headers, runtime);
  }

  async getVMDeployOrderWithOptions(organizationId: string, pipelineId: string, deployOrderId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetVMDeployOrderResponse> {
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    pipelineId = OpenApiUtil.getEncodeParam(pipelineId);
    deployOrderId = OpenApiUtil.getEncodeParam(deployOrderId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetVMDeployOrder",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/pipelines/${pipelineId}/deploy/${deployOrderId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetVMDeployOrderResponse>(await this.callApi(params, req, runtime), new GetVMDeployOrderResponse({}));
  }

  async getVariableGroup(organizationId: string, id: string): Promise<GetVariableGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getVariableGroupWithOptions(organizationId, id, headers, runtime);
  }

  async getVariableGroupWithOptions(organizationId: string, id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetVariableGroupResponse> {
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    id = OpenApiUtil.getEncodeParam(id);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetVariableGroup",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/variableGroups/${id}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetVariableGroupResponse>(await this.callApi(params, req, runtime), new GetVariableGroupResponse({}));
  }

  async getWorkspace(workspaceId: string): Promise<GetWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWorkspaceWithOptions(workspaceId, headers, runtime);
  }

  async getWorkspaceWithOptions(workspaceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetWorkspaceResponse> {
    workspaceId = OpenApiUtil.getEncodeParam(workspaceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetWorkspace",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/workspaces/${workspaceId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetWorkspaceResponse>(await this.callApi(params, req, runtime), new GetWorkspaceResponse({}));
  }

  async listHostGroups(organizationId: string, request: ListHostGroupsRequest): Promise<ListHostGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listHostGroupsWithOptions(organizationId, request, headers, runtime);
  }

  async listHostGroupsWithOptions(organizationId: string, request: ListHostGroupsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListHostGroupsResponse> {
    Util.validateModel(request);
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.createEndTime)) {
      query["createEndTime"] = request.createEndTime;
    }

    if (!Util.isUnset(request.createStartTime)) {
      query["createStartTime"] = request.createStartTime;
    }

    if (!Util.isUnset(request.creatorAccountIds)) {
      query["creatorAccountIds"] = request.creatorAccountIds;
    }

    if (!Util.isUnset(request.ids)) {
      query["ids"] = request.ids;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.pageOrder)) {
      query["pageOrder"] = request.pageOrder;
    }

    if (!Util.isUnset(request.pageSort)) {
      query["pageSort"] = request.pageSort;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListHostGroups",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/hostGroups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListHostGroupsResponse>(await this.callApi(params, req, runtime), new ListHostGroupsResponse({}));
  }

  async listOrganizationMembers(organizationId: string, request: ListOrganizationMembersRequest): Promise<ListOrganizationMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOrganizationMembersWithOptions(organizationId, request, headers, runtime);
  }

  async listOrganizationMembersWithOptions(organizationId: string, request: ListOrganizationMembersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListOrganizationMembersResponse> {
    Util.validateModel(request);
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.externUid)) {
      query["externUid"] = request.externUid;
    }

    if (!Util.isUnset(request.joinTimeFrom)) {
      query["joinTimeFrom"] = request.joinTimeFrom;
    }

    if (!Util.isUnset(request.joinTimeTo)) {
      query["joinTimeTo"] = request.joinTimeTo;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.organizationMemberName)) {
      query["organizationMemberName"] = request.organizationMemberName;
    }

    if (!Util.isUnset(request.provider)) {
      query["provider"] = request.provider;
    }

    if (!Util.isUnset(request.state)) {
      query["state"] = request.state;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListOrganizationMembers",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/members`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListOrganizationMembersResponse>(await this.callApi(params, req, runtime), new ListOrganizationMembersResponse({}));
  }

  async listPipelineRuns(organizationId: string, pipelineId: string, request: ListPipelineRunsRequest): Promise<ListPipelineRunsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPipelineRunsWithOptions(organizationId, pipelineId, request, headers, runtime);
  }

  async listPipelineRunsWithOptions(organizationId: string, pipelineId: string, request: ListPipelineRunsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListPipelineRunsResponse> {
    Util.validateModel(request);
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    pipelineId = OpenApiUtil.getEncodeParam(pipelineId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["status"] = request.status;
    }

    if (!Util.isUnset(request.triggerMode)) {
      query["triggerMode"] = request.triggerMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPipelineRuns",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/pipelines/${pipelineId}/pipelineRuns`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListPipelineRunsResponse>(await this.callApi(params, req, runtime), new ListPipelineRunsResponse({}));
  }

  async listPipelines(organizationId: string, request: ListPipelinesRequest): Promise<ListPipelinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPipelinesWithOptions(organizationId, request, headers, runtime);
  }

  async listPipelinesWithOptions(organizationId: string, request: ListPipelinesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListPipelinesResponse> {
    Util.validateModel(request);
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.createEndTime)) {
      query["createEndTime"] = request.createEndTime;
    }

    if (!Util.isUnset(request.createStartTime)) {
      query["createStartTime"] = request.createStartTime;
    }

    if (!Util.isUnset(request.creatorAccountIds)) {
      query["creatorAccountIds"] = request.creatorAccountIds;
    }

    if (!Util.isUnset(request.executeAccountIds)) {
      query["executeAccountIds"] = request.executeAccountIds;
    }

    if (!Util.isUnset(request.executeEndTime)) {
      query["executeEndTime"] = request.executeEndTime;
    }

    if (!Util.isUnset(request.executeStartTime)) {
      query["executeStartTime"] = request.executeStartTime;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.pipelineName)) {
      query["pipelineName"] = request.pipelineName;
    }

    if (!Util.isUnset(request.statusList)) {
      query["statusList"] = request.statusList;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPipelines",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/pipelines`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListPipelinesResponse>(await this.callApi(params, req, runtime), new ListPipelinesResponse({}));
  }

  async listResourceMembers(organizationId: string, resourceType: string, resourceId: string): Promise<ListResourceMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceMembersWithOptions(organizationId, resourceType, resourceId, headers, runtime);
  }

  async listResourceMembersWithOptions(organizationId: string, resourceType: string, resourceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListResourceMembersResponse> {
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    resourceType = OpenApiUtil.getEncodeParam(resourceType);
    resourceId = OpenApiUtil.getEncodeParam(resourceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListResourceMembers",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/${resourceType}/${resourceId}/members`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListResourceMembersResponse>(await this.callApi(params, req, runtime), new ListResourceMembersResponse({}));
  }

  async listServiceConnections(organizationId: string, request: ListServiceConnectionsRequest): Promise<ListServiceConnectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServiceConnectionsWithOptions(organizationId, request, headers, runtime);
  }

  async listServiceConnectionsWithOptions(organizationId: string, request: ListServiceConnectionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListServiceConnectionsResponse> {
    Util.validateModel(request);
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.sericeConnectionType)) {
      query["sericeConnectionType"] = request.sericeConnectionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListServiceConnections",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/serviceConnections`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListServiceConnectionsResponse>(await this.callApi(params, req, runtime), new ListServiceConnectionsResponse({}));
  }

  async listVariableGroups(organizationId: string, request: ListVariableGroupsRequest): Promise<ListVariableGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listVariableGroupsWithOptions(organizationId, request, headers, runtime);
  }

  async listVariableGroupsWithOptions(organizationId: string, request: ListVariableGroupsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListVariableGroupsResponse> {
    Util.validateModel(request);
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.pageOrder)) {
      query["pageOrder"] = request.pageOrder;
    }

    if (!Util.isUnset(request.pageSort)) {
      query["pageSort"] = request.pageSort;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListVariableGroups",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/variableGroups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListVariableGroupsResponse>(await this.callApi(params, req, runtime), new ListVariableGroupsResponse({}));
  }

  async listWorkspaces(request: ListWorkspacesRequest): Promise<ListWorkspacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWorkspacesWithOptions(request, headers, runtime);
  }

  async listWorkspacesWithOptions(tmpReq: ListWorkspacesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListWorkspacesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListWorkspacesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.statusList)) {
      request.statusListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.statusList, "statusList", "simple");
    }

    if (!Util.isUnset(tmpReq.workspaceTemplateList)) {
      request.workspaceTemplateListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.workspaceTemplateList, "workspaceTemplateList", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.statusListShrink)) {
      query["statusList"] = request.statusListShrink;
    }

    if (!Util.isUnset(request.workspaceTemplateListShrink)) {
      query["workspaceTemplateList"] = request.workspaceTemplateListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWorkspaces",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/workspaces`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListWorkspacesResponse>(await this.callApi(params, req, runtime), new ListWorkspacesResponse({}));
  }

  async logPipelineJobRun(organizationId: string, pipelineId: string, jobId: string, pipelineRunId: string): Promise<LogPipelineJobRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.logPipelineJobRunWithOptions(organizationId, pipelineId, jobId, pipelineRunId, headers, runtime);
  }

  async logPipelineJobRunWithOptions(organizationId: string, pipelineId: string, jobId: string, pipelineRunId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<LogPipelineJobRunResponse> {
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    pipelineId = OpenApiUtil.getEncodeParam(pipelineId);
    jobId = OpenApiUtil.getEncodeParam(jobId);
    pipelineRunId = OpenApiUtil.getEncodeParam(pipelineRunId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "LogPipelineJobRun",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/pipeline/${pipelineId}/pipelineRun/${pipelineRunId}/job/${jobId}/logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<LogPipelineJobRunResponse>(await this.callApi(params, req, runtime), new LogPipelineJobRunResponse({}));
  }

  async logVMDeployMachine(organizationId: string, pipelineId: string, deployOrderId: string, machineSn: string): Promise<LogVMDeployMachineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.logVMDeployMachineWithOptions(organizationId, pipelineId, deployOrderId, machineSn, headers, runtime);
  }

  async logVMDeployMachineWithOptions(organizationId: string, pipelineId: string, deployOrderId: string, machineSn: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<LogVMDeployMachineResponse> {
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    pipelineId = OpenApiUtil.getEncodeParam(pipelineId);
    deployOrderId = OpenApiUtil.getEncodeParam(deployOrderId);
    machineSn = OpenApiUtil.getEncodeParam(machineSn);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "LogVMDeployMachine",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/pipelines/${pipelineId}/deploy/${deployOrderId}/machine/${machineSn}/log`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<LogVMDeployMachineResponse>(await this.callApi(params, req, runtime), new LogVMDeployMachineResponse({}));
  }

  async passPipelineValidate(organizationId: string, pipelineId: string, pipelineRunId: string, jobId: string): Promise<PassPipelineValidateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.passPipelineValidateWithOptions(organizationId, pipelineId, pipelineRunId, jobId, headers, runtime);
  }

  async passPipelineValidateWithOptions(organizationId: string, pipelineId: string, pipelineRunId: string, jobId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PassPipelineValidateResponse> {
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    pipelineId = OpenApiUtil.getEncodeParam(pipelineId);
    pipelineRunId = OpenApiUtil.getEncodeParam(pipelineRunId);
    jobId = OpenApiUtil.getEncodeParam(jobId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "PassPipelineValidate",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/pipelines/${pipelineId}/pipelineRuns/${pipelineRunId}/jobs/${jobId}/pass`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PassPipelineValidateResponse>(await this.callApi(params, req, runtime), new PassPipelineValidateResponse({}));
  }

  async refusePipelineValidate(organizationId: string, pipelineId: string, pipelineRunId: string, jobId: string): Promise<RefusePipelineValidateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.refusePipelineValidateWithOptions(organizationId, pipelineId, pipelineRunId, jobId, headers, runtime);
  }

  async refusePipelineValidateWithOptions(organizationId: string, pipelineId: string, pipelineRunId: string, jobId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RefusePipelineValidateResponse> {
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    pipelineId = OpenApiUtil.getEncodeParam(pipelineId);
    pipelineRunId = OpenApiUtil.getEncodeParam(pipelineRunId);
    jobId = OpenApiUtil.getEncodeParam(jobId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "RefusePipelineValidate",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/pipelines/${pipelineId}/pipelineRuns/${pipelineRunId}/jobs/${jobId}/refuse`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RefusePipelineValidateResponse>(await this.callApi(params, req, runtime), new RefusePipelineValidateResponse({}));
  }

  async releaseWorkspace(workspaceId: string): Promise<ReleaseWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.releaseWorkspaceWithOptions(workspaceId, headers, runtime);
  }

  async releaseWorkspaceWithOptions(workspaceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ReleaseWorkspaceResponse> {
    workspaceId = OpenApiUtil.getEncodeParam(workspaceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ReleaseWorkspace",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/workspaces/${workspaceId}/release`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ReleaseWorkspaceResponse>(await this.callApi(params, req, runtime), new ReleaseWorkspaceResponse({}));
  }

  async resetSshKey(organizationId: string): Promise<ResetSshKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resetSshKeyWithOptions(organizationId, headers, runtime);
  }

  async resetSshKeyWithOptions(organizationId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ResetSshKeyResponse> {
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ResetSshKey",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/sshKey`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ResetSshKeyResponse>(await this.callApi(params, req, runtime), new ResetSshKeyResponse({}));
  }

  async resumeVMDeployOrder(organizationId: string, pipelineId: string, deployOrderId: string): Promise<ResumeVMDeployOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeVMDeployOrderWithOptions(organizationId, pipelineId, deployOrderId, headers, runtime);
  }

  async resumeVMDeployOrderWithOptions(organizationId: string, pipelineId: string, deployOrderId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ResumeVMDeployOrderResponse> {
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    pipelineId = OpenApiUtil.getEncodeParam(pipelineId);
    deployOrderId = OpenApiUtil.getEncodeParam(deployOrderId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ResumeVMDeployOrder",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/pipelines/${pipelineId}/deploy/${deployOrderId}/resume`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ResumeVMDeployOrderResponse>(await this.callApi(params, req, runtime), new ResumeVMDeployOrderResponse({}));
  }

  async retryPipelineJobRun(organizationId: string, pipelineId: string, pipelineRunId: string, jobId: string): Promise<RetryPipelineJobRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.retryPipelineJobRunWithOptions(organizationId, pipelineId, pipelineRunId, jobId, headers, runtime);
  }

  async retryPipelineJobRunWithOptions(organizationId: string, pipelineId: string, pipelineRunId: string, jobId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RetryPipelineJobRunResponse> {
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    pipelineId = OpenApiUtil.getEncodeParam(pipelineId);
    pipelineRunId = OpenApiUtil.getEncodeParam(pipelineRunId);
    jobId = OpenApiUtil.getEncodeParam(jobId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "RetryPipelineJobRun",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/pipelines/${pipelineId}/pipelineRuns/${pipelineRunId}/jobs/${jobId}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RetryPipelineJobRunResponse>(await this.callApi(params, req, runtime), new RetryPipelineJobRunResponse({}));
  }

  async retryVMDeployMachine(organizationId: string, pipelineId: string, deployOrderId: string, machineSn: string): Promise<RetryVMDeployMachineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.retryVMDeployMachineWithOptions(organizationId, pipelineId, deployOrderId, machineSn, headers, runtime);
  }

  async retryVMDeployMachineWithOptions(organizationId: string, pipelineId: string, deployOrderId: string, machineSn: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RetryVMDeployMachineResponse> {
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    pipelineId = OpenApiUtil.getEncodeParam(pipelineId);
    deployOrderId = OpenApiUtil.getEncodeParam(deployOrderId);
    machineSn = OpenApiUtil.getEncodeParam(machineSn);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "RetryVMDeployMachine",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/pipelines/${pipelineId}/deploy/${deployOrderId}/machine/${machineSn}/retry`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RetryVMDeployMachineResponse>(await this.callApi(params, req, runtime), new RetryVMDeployMachineResponse({}));
  }

  async skipPipelineJobRun(organizationId: string, pipelineId: string, pipelineRunId: string, jobId: string): Promise<SkipPipelineJobRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.skipPipelineJobRunWithOptions(organizationId, pipelineId, pipelineRunId, jobId, headers, runtime);
  }

  async skipPipelineJobRunWithOptions(organizationId: string, pipelineId: string, pipelineRunId: string, jobId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SkipPipelineJobRunResponse> {
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    pipelineId = OpenApiUtil.getEncodeParam(pipelineId);
    pipelineRunId = OpenApiUtil.getEncodeParam(pipelineRunId);
    jobId = OpenApiUtil.getEncodeParam(jobId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "SkipPipelineJobRun",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/pipelines/${pipelineId}/pipelineRuns/${pipelineRunId}/jobs/${jobId}/skip`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SkipPipelineJobRunResponse>(await this.callApi(params, req, runtime), new SkipPipelineJobRunResponse({}));
  }

  async skipVMDeployMachine(organizationId: string, pipelineId: string, deployOrderId: string, machineSn: string): Promise<SkipVMDeployMachineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.skipVMDeployMachineWithOptions(organizationId, pipelineId, deployOrderId, machineSn, headers, runtime);
  }

  async skipVMDeployMachineWithOptions(organizationId: string, pipelineId: string, deployOrderId: string, machineSn: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SkipVMDeployMachineResponse> {
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    pipelineId = OpenApiUtil.getEncodeParam(pipelineId);
    deployOrderId = OpenApiUtil.getEncodeParam(deployOrderId);
    machineSn = OpenApiUtil.getEncodeParam(machineSn);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "SkipVMDeployMachine",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/pipelines/${pipelineId}/deploy/${deployOrderId}/machine/${machineSn}/skip`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SkipVMDeployMachineResponse>(await this.callApi(params, req, runtime), new SkipVMDeployMachineResponse({}));
  }

  async startPipelineRun(organizationId: string, pipelineId: string, request: StartPipelineRunRequest): Promise<StartPipelineRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startPipelineRunWithOptions(organizationId, pipelineId, request, headers, runtime);
  }

  async startPipelineRunWithOptions(organizationId: string, pipelineId: string, request: StartPipelineRunRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartPipelineRunResponse> {
    Util.validateModel(request);
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    pipelineId = OpenApiUtil.getEncodeParam(pipelineId);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.params)) {
      body["params"] = request.params;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StartPipelineRun",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organizations/${organizationId}/pipelines/${pipelineId}/run`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartPipelineRunResponse>(await this.callApi(params, req, runtime), new StartPipelineRunResponse({}));
  }

  async stopPipelineJobRun(organizationId: string, pipelineId: string, pipelineRunId: string, jobId: string): Promise<StopPipelineJobRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopPipelineJobRunWithOptions(organizationId, pipelineId, pipelineRunId, jobId, headers, runtime);
  }

  async stopPipelineJobRunWithOptions(organizationId: string, pipelineId: string, pipelineRunId: string, jobId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopPipelineJobRunResponse> {
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    pipelineId = OpenApiUtil.getEncodeParam(pipelineId);
    pipelineRunId = OpenApiUtil.getEncodeParam(pipelineRunId);
    jobId = OpenApiUtil.getEncodeParam(jobId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StopPipelineJobRun",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/pipelines/${pipelineId}/pipelineRuns/${pipelineRunId}/jobs/${jobId}/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopPipelineJobRunResponse>(await this.callApi(params, req, runtime), new StopPipelineJobRunResponse({}));
  }

  async stopPipelineRun(organizationId: string, pipelineId: string, pipelineRunId: string): Promise<StopPipelineRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopPipelineRunWithOptions(organizationId, pipelineId, pipelineRunId, headers, runtime);
  }

  async stopPipelineRunWithOptions(organizationId: string, pipelineId: string, pipelineRunId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopPipelineRunResponse> {
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    pipelineId = OpenApiUtil.getEncodeParam(pipelineId);
    pipelineRunId = OpenApiUtil.getEncodeParam(pipelineRunId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StopPipelineRun",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/pipelines/${pipelineId}/pipelineRuns/${pipelineRunId}/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopPipelineRunResponse>(await this.callApi(params, req, runtime), new StopPipelineRunResponse({}));
  }

  async stopVMDeployOrder(organizationId: string, pipelineId: string, deployOrderId: string): Promise<StopVMDeployOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopVMDeployOrderWithOptions(organizationId, pipelineId, deployOrderId, headers, runtime);
  }

  async stopVMDeployOrderWithOptions(organizationId: string, pipelineId: string, deployOrderId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopVMDeployOrderResponse> {
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    pipelineId = OpenApiUtil.getEncodeParam(pipelineId);
    deployOrderId = OpenApiUtil.getEncodeParam(deployOrderId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StopVMDeployOrder",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/pipelines/${pipelineId}/deploy/${deployOrderId}/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopVMDeployOrderResponse>(await this.callApi(params, req, runtime), new StopVMDeployOrderResponse({}));
  }

  async updateHostGroup(organizationId: string, id: string, request: UpdateHostGroupRequest): Promise<UpdateHostGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateHostGroupWithOptions(organizationId, id, request, headers, runtime);
  }

  async updateHostGroupWithOptions(organizationId: string, id: string, request: UpdateHostGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateHostGroupResponse> {
    Util.validateModel(request);
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    id = OpenApiUtil.getEncodeParam(id);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aliyunRegion)) {
      body["aliyunRegion"] = request.aliyunRegion;
    }

    if (!Util.isUnset(request.ecsLabelKey)) {
      body["ecsLabelKey"] = request.ecsLabelKey;
    }

    if (!Util.isUnset(request.ecsLabelValue)) {
      body["ecsLabelValue"] = request.ecsLabelValue;
    }

    if (!Util.isUnset(request.ecsType)) {
      body["ecsType"] = request.ecsType;
    }

    if (!Util.isUnset(request.envId)) {
      body["envId"] = request.envId;
    }

    if (!Util.isUnset(request.machineInfos)) {
      body["machineInfos"] = request.machineInfos;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.serviceConnectionId)) {
      body["serviceConnectionId"] = request.serviceConnectionId;
    }

    if (!Util.isUnset(request.tagIds)) {
      body["tagIds"] = request.tagIds;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateHostGroup",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/hostGroups/${id}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateHostGroupResponse>(await this.callApi(params, req, runtime), new UpdateHostGroupResponse({}));
  }

  async updateResourceMember(organizationId: string, resourceType: string, resourceId: string, accountId: string, request: UpdateResourceMemberRequest): Promise<UpdateResourceMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceMemberWithOptions(organizationId, resourceType, resourceId, accountId, request, headers, runtime);
  }

  async updateResourceMemberWithOptions(organizationId: string, resourceType: string, resourceId: string, accountId: string, request: UpdateResourceMemberRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateResourceMemberResponse> {
    Util.validateModel(request);
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    resourceType = OpenApiUtil.getEncodeParam(resourceType);
    resourceId = OpenApiUtil.getEncodeParam(resourceId);
    accountId = OpenApiUtil.getEncodeParam(accountId);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.roleName)) {
      body["roleName"] = request.roleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateResourceMember",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/${resourceType}/${resourceId}/members/${accountId}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateResourceMemberResponse>(await this.callApi(params, req, runtime), new UpdateResourceMemberResponse({}));
  }

  async updateVariableGroup(organizationId: string, id: string, request: UpdateVariableGroupRequest): Promise<UpdateVariableGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateVariableGroupWithOptions(organizationId, id, request, headers, runtime);
  }

  async updateVariableGroupWithOptions(organizationId: string, id: string, request: UpdateVariableGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateVariableGroupResponse> {
    Util.validateModel(request);
    organizationId = OpenApiUtil.getEncodeParam(organizationId);
    id = OpenApiUtil.getEncodeParam(id);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.variables)) {
      body["variables"] = request.variables;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateVariableGroup",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${organizationId}/variableGroups/${id}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateVariableGroupResponse>(await this.callApi(params, req, runtime), new UpdateVariableGroupResponse({}));
  }

}
