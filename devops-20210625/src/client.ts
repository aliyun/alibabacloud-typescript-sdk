// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class RetryPipelineJobRunResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      errorMessage: 'errorMessage',
      errorCode: 'errorCode',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
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

export class ListResourceMembersResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  resourceMembers?: ListResourceMembersResponseBodyResourceMembers[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      errorMessage: 'errorMessage',
      errorCode: 'errorCode',
      success: 'success',
      resourceMembers: 'resourceMembers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
      resourceMembers: { 'type': 'array', 'itemType': ListResourceMembersResponseBodyResourceMembers },
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

export class GetHostGroupResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  hostGroup?: GetHostGroupResponseBodyHostGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      errorMessage: 'errorMessage',
      errorCode: 'errorCode',
      success: 'success',
      hostGroup: 'hostGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
      hostGroup: GetHostGroupResponseBodyHostGroup,
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

export class GetVariableGroupResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  variableGroup?: GetVariableGroupResponseBodyVariableGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      errorMessage: 'errorMessage',
      errorCode: 'errorCode',
      success: 'success',
      variableGroup: 'variableGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
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

export class ListPipelinesRequest extends $tea.Model {
  pipelineName?: string;
  creatorAccountIds?: string;
  executeAccountIds?: string;
  statusList?: string;
  createStartTime?: number;
  createEndTime?: number;
  executeStartTime?: number;
  executeEndTime?: number;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      pipelineName: 'pipelineName',
      creatorAccountIds: 'creatorAccountIds',
      executeAccountIds: 'executeAccountIds',
      statusList: 'statusList',
      createStartTime: 'createStartTime',
      createEndTime: 'createEndTime',
      executeStartTime: 'executeStartTime',
      executeEndTime: 'executeEndTime',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineName: 'string',
      creatorAccountIds: 'string',
      executeAccountIds: 'string',
      statusList: 'string',
      createStartTime: 'number',
      createEndTime: 'number',
      executeStartTime: 'number',
      executeEndTime: 'number',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelinesResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  totalCount?: number;
  nextToken?: string;
  pipelines?: ListPipelinesResponseBodyPipelines[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      errorMessage: 'errorMessage',
      errorCode: 'errorCode',
      success: 'success',
      totalCount: 'totalCount',
      nextToken: 'nextToken',
      pipelines: 'pipelines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
      totalCount: 'number',
      nextToken: 'string',
      pipelines: { 'type': 'array', 'itemType': ListPipelinesResponseBodyPipelines },
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
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      errorMessage: 'errorMessage',
      errorCode: 'errorCode',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
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
  name?: string;
  description?: string;
  variables?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      description: 'description',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      description: 'string',
      variables: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVariableGroupResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      errorMessage: 'errorMessage',
      errorCode: 'errorCode',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
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

export class DeleteResourceMemberResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      errorMessage: 'errorMessage',
      errorCode: 'errorCode',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
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

export class ListHostGroupsRequest extends $tea.Model {
  ids?: string;
  createStartTime?: number;
  createEndTime?: number;
  name?: string;
  creatorAccountIds?: string;
  nextToken?: string;
  maxResults?: number;
  pageSort?: string;
  pageOrder?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'ids',
      createStartTime: 'createStartTime',
      createEndTime: 'createEndTime',
      name: 'name',
      creatorAccountIds: 'creatorAccountIds',
      nextToken: 'nextToken',
      maxResults: 'maxResults',
      pageSort: 'pageSort',
      pageOrder: 'pageOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      createStartTime: 'number',
      createEndTime: 'number',
      name: 'string',
      creatorAccountIds: 'string',
      nextToken: 'string',
      maxResults: 'number',
      pageSort: 'string',
      pageOrder: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostGroupsResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  hostGroups?: ListHostGroupsResponseBodyHostGroups[];
  totalCount?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      errorMessage: 'errorMessage',
      errorCode: 'errorCode',
      success: 'success',
      hostGroups: 'hostGroups',
      totalCount: 'totalCount',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
      hostGroups: { 'type': 'array', 'itemType': ListHostGroupsResponseBodyHostGroups },
      totalCount: 'number',
      nextToken: 'string',
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

export class ResetSshKeyResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  sshKey?: ResetSshKeyResponseBodySshKey;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      errorMessage: 'errorMessage',
      errorCode: 'errorCode',
      success: 'success',
      sshKey: 'sshKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
      sshKey: ResetSshKeyResponseBodySshKey,
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
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  serviceConnections?: ListServiceConnectionsResponseBodyServiceConnections[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      errorMessage: 'errorMessage',
      errorCode: 'errorCode',
      success: 'success',
      serviceConnections: 'serviceConnections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
      serviceConnections: { 'type': 'array', 'itemType': ListServiceConnectionsResponseBodyServiceConnections },
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

export class CreateHostGroupRequest extends $tea.Model {
  type?: string;
  envId?: string;
  name?: string;
  serviceConnectionId?: number;
  tagIds?: string;
  ecsType?: string;
  ecsLabelKey?: string;
  ecsLabelValue?: string;
  aliyunRegion?: string;
  machineInfos?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      envId: 'envId',
      name: 'name',
      serviceConnectionId: 'serviceConnectionId',
      tagIds: 'tagIds',
      ecsType: 'ecsType',
      ecsLabelKey: 'ecsLabelKey',
      ecsLabelValue: 'ecsLabelValue',
      aliyunRegion: 'aliyunRegion',
      machineInfos: 'machineInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      envId: 'string',
      name: 'string',
      serviceConnectionId: 'number',
      tagIds: 'string',
      ecsType: 'string',
      ecsLabelKey: 'string',
      ecsLabelValue: 'string',
      aliyunRegion: 'string',
      machineInfos: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHostGroupResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  hostGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      errorMessage: 'errorMessage',
      errorCode: 'errorCode',
      success: 'success',
      hostGroupId: 'hostGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
      hostGroupId: 'number',
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

export class StopPipelineRunResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      errorMessage: 'errorMessage',
      errorCode: 'errorCode',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
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

export class UpdateHostGroupRequest extends $tea.Model {
  type?: string;
  envId?: string;
  name?: string;
  serviceConnectionId?: number;
  tagIds?: string;
  ecsType?: string;
  ecsLabelKey?: string;
  ecsLabelValue?: string;
  aliyunRegion?: string;
  machineInfos?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      envId: 'envId',
      name: 'name',
      serviceConnectionId: 'serviceConnectionId',
      tagIds: 'tagIds',
      ecsType: 'ecsType',
      ecsLabelKey: 'ecsLabelKey',
      ecsLabelValue: 'ecsLabelValue',
      aliyunRegion: 'aliyunRegion',
      machineInfos: 'machineInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      envId: 'string',
      name: 'string',
      serviceConnectionId: 'number',
      tagIds: 'string',
      ecsType: 'string',
      ecsLabelKey: 'string',
      ecsLabelValue: 'string',
      aliyunRegion: 'string',
      machineInfos: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHostGroupResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      errorMessage: 'errorMessage',
      errorCode: 'errorCode',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
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
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      errorMessage: 'errorMessage',
      errorCode: 'errorCode',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
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

export class SkipPipelineJobRunResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      errorMessage: 'errorMessage',
      errorCode: 'errorCode',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
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

export class StopPipelineJobRunResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      errorMessage: 'errorMessage',
      errorCode: 'errorCode',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
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
  requestId?: string;
  errorMessage?: string;
  pipelineRunId?: number;
  success?: boolean;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      errorMessage: 'errorMessage',
      pipelineRunId: 'pipelineRunId',
      success: 'success',
      errorCode: 'errorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      pipelineRunId: 'number',
      success: 'boolean',
      errorCode: 'string',
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

export class GetPipelineRunResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  pipelineRun?: GetPipelineRunResponseBodyPipelineRun;
  success?: boolean;
  errorCode?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      errorMessage: 'errorMessage',
      pipelineRun: 'pipelineRun',
      success: 'success',
      errorCode: 'errorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      pipelineRun: GetPipelineRunResponseBodyPipelineRun,
      success: 'boolean',
      errorCode: 'boolean',
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

export class GetPipelineResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  pipeline?: GetPipelineResponseBodyPipeline;
  success?: boolean;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      errorMessage: 'errorMessage',
      pipeline: 'pipeline',
      success: 'success',
      errorCode: 'errorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      pipeline: GetPipelineResponseBodyPipeline,
      success: 'boolean',
      errorCode: 'string',
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

export class CreateVariableGroupRequest extends $tea.Model {
  name?: string;
  description?: string;
  variables?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      description: 'description',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      description: 'string',
      variables: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVariableGroupResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  variableGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      errorMessage: 'errorMessage',
      errorCode: 'errorCode',
      success: 'success',
      variableGroupId: 'variableGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
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

export class DeleteVariableGroupResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      errorMessage: 'errorMessage',
      errorCode: 'errorCode',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
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

export class CreateSshKeyResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  sshKey?: CreateSshKeyResponseBodySshKey;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      errorMessage: 'errorMessage',
      errorCode: 'errorCode',
      success: 'success',
      sshKey: 'sshKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
      sshKey: CreateSshKeyResponseBodySshKey,
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

export class DeleteHostGroupResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      errorMessage: 'errorMessage',
      errorCode: 'errorCode',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
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

export class ListVariableGroupsRequest extends $tea.Model {
  pageSort?: string;
  pageOrder?: string;
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      pageSort: 'pageSort',
      pageOrder: 'pageOrder',
      nextToken: 'nextToken',
      maxResults: 'maxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSort: 'string',
      pageOrder: 'string',
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVariableGroupsResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  variableGroups?: ListVariableGroupsResponseBodyVariableGroups[];
  totalCount?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      errorMessage: 'errorMessage',
      errorCode: 'errorCode',
      success: 'success',
      variableGroups: 'variableGroups',
      totalCount: 'totalCount',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
      variableGroups: { 'type': 'array', 'itemType': ListVariableGroupsResponseBodyVariableGroups },
      totalCount: 'number',
      nextToken: 'string',
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

export class DeletePipelineResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      errorMessage: 'errorMessage',
      errorCode: 'errorCode',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
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

export class ListPipelineRunsRequest extends $tea.Model {
  startTime?: number;
  endTime?: number;
  status?: string;
  maxResults?: number;
  nextToken?: string;
  triggerMode?: number;
  static names(): { [key: string]: string } {
    return {
      startTime: 'startTime',
      endTime: 'endTime',
      status: 'status',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      triggerMode: 'triggerMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      endTime: 'number',
      status: 'string',
      maxResults: 'number',
      nextToken: 'string',
      triggerMode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineRunsResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  totalCount?: number;
  nextToken?: string;
  pipelineRuns?: ListPipelineRunsResponseBodyPipelineRuns[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      errorMessage: 'errorMessage',
      errorCode: 'errorCode',
      success: 'success',
      totalCount: 'totalCount',
      nextToken: 'nextToken',
      pipelineRuns: 'pipelineRuns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
      totalCount: 'number',
      nextToken: 'string',
      pipelineRuns: { 'type': 'array', 'itemType': ListPipelineRunsResponseBodyPipelineRuns },
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

export class GetHostGroupResponseBodyHostGroupHostInfos extends $tea.Model {
  updateTime?: number;
  creatorAccountId?: string;
  instanceName?: string;
  modifierAccountId?: string;
  ip?: string;
  createTime?: number;
  objectType?: string;
  aliyunRegionId?: string;
  machineSn?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'updateTime',
      creatorAccountId: 'creatorAccountId',
      instanceName: 'instanceName',
      modifierAccountId: 'modifierAccountId',
      ip: 'ip',
      createTime: 'createTime',
      objectType: 'objectType',
      aliyunRegionId: 'aliyunRegionId',
      machineSn: 'machineSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'number',
      creatorAccountId: 'string',
      instanceName: 'string',
      modifierAccountId: 'string',
      ip: 'string',
      createTime: 'number',
      objectType: 'string',
      aliyunRegionId: 'string',
      machineSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostGroupResponseBodyHostGroup extends $tea.Model {
  creatorAccountId?: string;
  upateTIme?: number;
  hostNum?: number;
  modifierAccountId?: string;
  description?: string;
  type?: string;
  createTime?: number;
  ecsType?: string;
  aliyunRegion?: string;
  ecsLabelKey?: string;
  id?: number;
  name?: string;
  serviceConnectionId?: number;
  hostInfos?: GetHostGroupResponseBodyHostGroupHostInfos[];
  ecsLabelValue?: string;
  static names(): { [key: string]: string } {
    return {
      creatorAccountId: 'creatorAccountId',
      upateTIme: 'upateTIme',
      hostNum: 'hostNum',
      modifierAccountId: 'modifierAccountId',
      description: 'description',
      type: 'type',
      createTime: 'createTime',
      ecsType: 'ecsType',
      aliyunRegion: 'aliyunRegion',
      ecsLabelKey: 'ecsLabelKey',
      id: 'id',
      name: 'name',
      serviceConnectionId: 'serviceConnectionId',
      hostInfos: 'hostInfos',
      ecsLabelValue: 'ecsLabelValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorAccountId: 'string',
      upateTIme: 'number',
      hostNum: 'number',
      modifierAccountId: 'string',
      description: 'string',
      type: 'string',
      createTime: 'number',
      ecsType: 'string',
      aliyunRegion: 'string',
      ecsLabelKey: 'string',
      id: 'number',
      name: 'string',
      serviceConnectionId: 'number',
      hostInfos: { 'type': 'array', 'itemType': GetHostGroupResponseBodyHostGroupHostInfos },
      ecsLabelValue: 'string',
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
  value?: string;
  name?: string;
  isEncrypted?: boolean;
  static names(): { [key: string]: string } {
    return {
      value: 'value',
      name: 'name',
      isEncrypted: 'isEncrypted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      name: 'string',
      isEncrypted: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVariableGroupResponseBodyVariableGroup extends $tea.Model {
  ccreatorAccountId?: string;
  description?: string;
  updateTime?: number;
  id?: number;
  modifierAccountId?: string;
  name?: string;
  relatedPipelines?: GetVariableGroupResponseBodyVariableGroupRelatedPipelines[];
  variables?: GetVariableGroupResponseBodyVariableGroupVariables[];
  createTime?: number;
  static names(): { [key: string]: string } {
    return {
      ccreatorAccountId: 'ccreatorAccountId',
      description: 'description',
      updateTime: 'updateTime',
      id: 'id',
      modifierAccountId: 'modifierAccountId',
      name: 'name',
      relatedPipelines: 'relatedPipelines',
      variables: 'variables',
      createTime: 'createTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccreatorAccountId: 'string',
      description: 'string',
      updateTime: 'number',
      id: 'number',
      modifierAccountId: 'string',
      name: 'string',
      relatedPipelines: { 'type': 'array', 'itemType': GetVariableGroupResponseBodyVariableGroupRelatedPipelines },
      variables: { 'type': 'array', 'itemType': GetVariableGroupResponseBodyVariableGroupVariables },
      createTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelinesResponseBodyPipelines extends $tea.Model {
  pipelineName?: string;
  pipelineId?: number;
  createTime?: number;
  creatorAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      pipelineName: 'pipelineName',
      pipelineId: 'pipelineId',
      createTime: 'createTime',
      creatorAccountId: 'creatorAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineName: 'string',
      pipelineId: 'number',
      createTime: 'number',
      creatorAccountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostGroupsResponseBodyHostGroups extends $tea.Model {
  creatorAccountId?: string;
  updateTime?: number;
  hostNum?: number;
  modifierAccountId?: string;
  description?: string;
  type?: string;
  createTime?: number;
  ecsType?: string;
  aliyunRegion?: string;
  ecsLabelKey?: string;
  name?: string;
  id?: number;
  serviceConnectionId?: number;
  ecsLabelValue?: string;
  static names(): { [key: string]: string } {
    return {
      creatorAccountId: 'creatorAccountId',
      updateTime: 'updateTime',
      hostNum: 'hostNum',
      modifierAccountId: 'modifierAccountId',
      description: 'description',
      type: 'type',
      createTime: 'createTime',
      ecsType: 'ecsType',
      aliyunRegion: 'aliyunRegion',
      ecsLabelKey: 'ecsLabelKey',
      name: 'name',
      id: 'id',
      serviceConnectionId: 'serviceConnectionId',
      ecsLabelValue: 'ecsLabelValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorAccountId: 'string',
      updateTime: 'number',
      hostNum: 'number',
      modifierAccountId: 'string',
      description: 'string',
      type: 'string',
      createTime: 'number',
      ecsType: 'string',
      aliyunRegion: 'string',
      ecsLabelKey: 'string',
      name: 'string',
      id: 'number',
      serviceConnectionId: 'number',
      ecsLabelValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetSshKeyResponseBodySshKey extends $tea.Model {
  publicKey?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      publicKey: 'publicKey',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicKey: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceConnectionsResponseBodyServiceConnections extends $tea.Model {
  ownerAccountId?: number;
  name?: string;
  id?: number;
  type?: string;
  createTime?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccountId: 'ownerAccountId',
      name: 'name',
      id: 'id',
      type: 'type',
      createTime: 'createTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccountId: 'number',
      name: 'string',
      id: 'number',
      type: 'string',
      createTime: 'number',
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
  sign?: string;
  type?: string;
  data?: GetPipelineRunResponseBodyPipelineRunSourcesData;
  static names(): { [key: string]: string } {
    return {
      sign: 'sign',
      type: 'type',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sign: 'string',
      type: 'string',
      data: GetPipelineRunResponseBodyPipelineRunSourcesData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineRunResponseBodyPipelineRunStagesStageInfoJobs extends $tea.Model {
  endTime?: number;
  id?: number;
  name?: string;
  params?: string;
  status?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      id: 'id',
      name: 'name',
      params: 'params',
      status: 'status',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      id: 'number',
      name: 'string',
      params: 'string',
      status: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineRunResponseBodyPipelineRunStagesStageInfo extends $tea.Model {
  endTime?: number;
  startTime?: number;
  name?: string;
  status?: string;
  jobs?: GetPipelineRunResponseBodyPipelineRunStagesStageInfoJobs[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
      name: 'name',
      status: 'status',
      jobs: 'jobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      name: 'string',
      status: 'string',
      jobs: { 'type': 'array', 'itemType': GetPipelineRunResponseBodyPipelineRunStagesStageInfoJobs },
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
  creatorAccountId?: string;
  createTime?: number;
  updateTime?: number;
  modifierAccountId?: string;
  pipelineId?: number;
  pipelineRunId?: number;
  status?: string;
  triggerMode?: number;
  stageGroup?: string[][];
  sources?: GetPipelineRunResponseBodyPipelineRunSources[];
  stages?: GetPipelineRunResponseBodyPipelineRunStages[];
  static names(): { [key: string]: string } {
    return {
      creatorAccountId: 'creatorAccountId',
      createTime: 'createTime',
      updateTime: 'updateTime',
      modifierAccountId: 'modifierAccountId',
      pipelineId: 'pipelineId',
      pipelineRunId: 'pipelineRunId',
      status: 'status',
      triggerMode: 'triggerMode',
      stageGroup: 'stageGroup',
      sources: 'sources',
      stages: 'stages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorAccountId: 'string',
      createTime: 'number',
      updateTime: 'number',
      modifierAccountId: 'string',
      pipelineId: 'number',
      pipelineRunId: 'number',
      status: 'string',
      triggerMode: 'number',
      stageGroup: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
      sources: { 'type': 'array', 'itemType': GetPipelineRunResponseBodyPipelineRunSources },
      stages: { 'type': 'array', 'itemType': GetPipelineRunResponseBodyPipelineRunStages },
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

export class GetPipelineResponseBodyPipelinePipelineConfigSourcesData extends $tea.Model {
  branch?: string;
  serviceConnectionId?: number;
  label?: string;
  isTrigger?: boolean;
  repo?: string;
  triggerFilter?: string;
  webhook?: string;
  events?: string[];
  isBranchMode?: boolean;
  isSubmodule?: boolean;
  isCloneDepth?: boolean;
  cloneDepth?: number;
  credentialId?: number;
  credentialType?: string;
  credentialLabel?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'branch',
      serviceConnectionId: 'serviceConnectionId',
      label: 'label',
      isTrigger: 'isTrigger',
      repo: 'repo',
      triggerFilter: 'triggerFilter',
      webhook: 'webhook',
      events: 'events',
      isBranchMode: 'isBranchMode',
      isSubmodule: 'isSubmodule',
      isCloneDepth: 'isCloneDepth',
      cloneDepth: 'cloneDepth',
      credentialId: 'credentialId',
      credentialType: 'credentialType',
      credentialLabel: 'credentialLabel',
      namespace: 'namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      serviceConnectionId: 'number',
      label: 'string',
      isTrigger: 'boolean',
      repo: 'string',
      triggerFilter: 'string',
      webhook: 'string',
      events: { 'type': 'array', 'itemType': 'string' },
      isBranchMode: 'boolean',
      isSubmodule: 'boolean',
      isCloneDepth: 'boolean',
      cloneDepth: 'number',
      credentialId: 'number',
      credentialType: 'string',
      credentialLabel: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineResponseBodyPipelinePipelineConfigSources extends $tea.Model {
  sign?: string;
  type?: string;
  data?: GetPipelineResponseBodyPipelinePipelineConfigSourcesData;
  static names(): { [key: string]: string } {
    return {
      sign: 'sign',
      type: 'type',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sign: 'string',
      type: 'string',
      data: GetPipelineResponseBodyPipelinePipelineConfigSourcesData,
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

export class GetPipelineResponseBodyPipeline extends $tea.Model {
  creatorAccountId?: string;
  envId?: number;
  envName?: string;
  createTime?: number;
  updateTime?: number;
  groupId?: number;
  modifierAccountId?: string;
  name?: string;
  tagList?: GetPipelineResponseBodyPipelineTagList[];
  pipelineConfig?: GetPipelineResponseBodyPipelinePipelineConfig;
  static names(): { [key: string]: string } {
    return {
      creatorAccountId: 'creatorAccountId',
      envId: 'envId',
      envName: 'envName',
      createTime: 'createTime',
      updateTime: 'updateTime',
      groupId: 'groupId',
      modifierAccountId: 'modifierAccountId',
      name: 'name',
      tagList: 'tagList',
      pipelineConfig: 'pipelineConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorAccountId: 'string',
      envId: 'number',
      envName: 'string',
      createTime: 'number',
      updateTime: 'number',
      groupId: 'number',
      modifierAccountId: 'string',
      name: 'string',
      tagList: { 'type': 'array', 'itemType': GetPipelineResponseBodyPipelineTagList },
      pipelineConfig: GetPipelineResponseBodyPipelinePipelineConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSshKeyResponseBodySshKey extends $tea.Model {
  publicKey?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      publicKey: 'publicKey',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicKey: 'string',
      id: 'number',
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
  value?: string;
  name?: string;
  isEncrypted?: boolean;
  static names(): { [key: string]: string } {
    return {
      value: 'value',
      name: 'name',
      isEncrypted: 'isEncrypted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      name: 'string',
      isEncrypted: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVariableGroupsResponseBodyVariableGroups extends $tea.Model {
  creatorAccountId?: string;
  updateTime?: number;
  modifierAccountId?: string;
  description?: string;
  name?: string;
  id?: number;
  relatedPipelines?: ListVariableGroupsResponseBodyVariableGroupsRelatedPipelines[];
  variables?: ListVariableGroupsResponseBodyVariableGroupsVariables[];
  createTime?: number;
  static names(): { [key: string]: string } {
    return {
      creatorAccountId: 'creatorAccountId',
      updateTime: 'updateTime',
      modifierAccountId: 'modifierAccountId',
      description: 'description',
      name: 'name',
      id: 'id',
      relatedPipelines: 'relatedPipelines',
      variables: 'variables',
      createTime: 'createTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorAccountId: 'string',
      updateTime: 'number',
      modifierAccountId: 'string',
      description: 'string',
      name: 'string',
      id: 'number',
      relatedPipelines: { 'type': 'array', 'itemType': ListVariableGroupsResponseBodyVariableGroupsRelatedPipelines },
      variables: { 'type': 'array', 'itemType': ListVariableGroupsResponseBodyVariableGroupsVariables },
      createTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineRunsResponseBodyPipelineRuns extends $tea.Model {
  pipelineId?: number;
  startTime?: number;
  creatorAccountId?: string;
  endTime?: number;
  pipelineRunId?: number;
  triggerMode?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'pipelineId',
      startTime: 'startTime',
      creatorAccountId: 'creatorAccountId',
      endTime: 'endTime',
      pipelineRunId: 'pipelineRunId',
      triggerMode: 'triggerMode',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'number',
      startTime: 'number',
      creatorAccountId: 'string',
      endTime: 'number',
      pipelineRunId: 'number',
      triggerMode: 'number',
      status: 'string',
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

  async retryPipelineJobRun(organizationId: string, pipelineId: string, pipelineRunId: string, jobId: string): Promise<RetryPipelineJobRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.retryPipelineJobRunWithOptions(organizationId, pipelineId, pipelineRunId, jobId, headers, runtime);
  }

  async retryPipelineJobRunWithOptions(organizationId: string, pipelineId: string, pipelineRunId: string, jobId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RetryPipelineJobRunResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<RetryPipelineJobRunResponse>(await this.doROARequest("RetryPipelineJobRun", "2021-06-25", "HTTPS", "PUT", "AK", `/organization/${organizationId}/pipelines/${pipelineId}/pipelineRuns/${pipelineRunId}/jobs/${jobId}`, "json", req, runtime), new RetryPipelineJobRunResponse({}));
  }

  async listResourceMembers(organizationId: string, resourceType: string, resourceId: string): Promise<ListResourceMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceMembersWithOptions(organizationId, resourceType, resourceId, headers, runtime);
  }

  async listResourceMembersWithOptions(organizationId: string, resourceType: string, resourceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListResourceMembersResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListResourceMembersResponse>(await this.doROARequest("ListResourceMembers", "2021-06-25", "HTTPS", "GET", "AK", `/organization/${organizationId}/${resourceType}/${resourceId}/members`, "json", req, runtime), new ListResourceMembersResponse({}));
  }

  async getHostGroup(organizationId: string, id: string): Promise<GetHostGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHostGroupWithOptions(organizationId, id, headers, runtime);
  }

  async getHostGroupWithOptions(organizationId: string, id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetHostGroupResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetHostGroupResponse>(await this.doROARequest("GetHostGroup", "2021-06-25", "HTTPS", "GET", "AK", `/organization/${organizationId}/hostGroups/${id}`, "json", req, runtime), new GetHostGroupResponse({}));
  }

  async getVariableGroup(organizationId: string, id: string): Promise<GetVariableGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getVariableGroupWithOptions(organizationId, id, headers, runtime);
  }

  async getVariableGroupWithOptions(organizationId: string, id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetVariableGroupResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetVariableGroupResponse>(await this.doROARequest("GetVariableGroup", "2021-06-25", "HTTPS", "GET", "AK", `/organization/${organizationId}/variableGroups/${id}`, "json", req, runtime), new GetVariableGroupResponse({}));
  }

  async listPipelines(organizationId: string, request: ListPipelinesRequest): Promise<ListPipelinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPipelinesWithOptions(organizationId, request, headers, runtime);
  }

  async listPipelinesWithOptions(organizationId: string, request: ListPipelinesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListPipelinesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pipelineName)) {
      query["pipelineName"] = request.pipelineName;
    }

    if (!Util.isUnset(request.creatorAccountIds)) {
      query["creatorAccountIds"] = request.creatorAccountIds;
    }

    if (!Util.isUnset(request.executeAccountIds)) {
      query["executeAccountIds"] = request.executeAccountIds;
    }

    if (!Util.isUnset(request.statusList)) {
      query["statusList"] = request.statusList;
    }

    if (!Util.isUnset(request.createStartTime)) {
      query["createStartTime"] = request.createStartTime;
    }

    if (!Util.isUnset(request.createEndTime)) {
      query["createEndTime"] = request.createEndTime;
    }

    if (!Util.isUnset(request.executeStartTime)) {
      query["executeStartTime"] = request.executeStartTime;
    }

    if (!Util.isUnset(request.executeEndTime)) {
      query["executeEndTime"] = request.executeEndTime;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListPipelinesResponse>(await this.doROARequest("ListPipelines", "2021-06-25", "HTTPS", "GET", "AK", `/organization/${organizationId}/pipelines`, "json", req, runtime), new ListPipelinesResponse({}));
  }

  async updateResourceMember(organizationId: string, resourceType: string, resourceId: string, accountId: string, request: UpdateResourceMemberRequest): Promise<UpdateResourceMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceMemberWithOptions(organizationId, resourceType, resourceId, accountId, request, headers, runtime);
  }

  async updateResourceMemberWithOptions(organizationId: string, resourceType: string, resourceId: string, accountId: string, request: UpdateResourceMemberRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateResourceMemberResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.roleName)) {
      body["roleName"] = request.roleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<UpdateResourceMemberResponse>(await this.doROARequestWithForm("UpdateResourceMember", "2021-06-25", "HTTPS", "PUT", "AK", `/organization/${organizationId}/${resourceType}/${resourceId}/members/${accountId}`, "json", req, runtime), new UpdateResourceMemberResponse({}));
  }

  async updateVariableGroup(organizationId: string, id: string, request: UpdateVariableGroupRequest): Promise<UpdateVariableGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateVariableGroupWithOptions(organizationId, id, request, headers, runtime);
  }

  async updateVariableGroupWithOptions(organizationId: string, id: string, request: UpdateVariableGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateVariableGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.variables)) {
      body["variables"] = request.variables;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<UpdateVariableGroupResponse>(await this.doROARequestWithForm("UpdateVariableGroup", "2021-06-25", "HTTPS", "PUT", "AK", `/organization/${organizationId}/variableGroups/${id}`, "json", req, runtime), new UpdateVariableGroupResponse({}));
  }

  async deleteResourceMember(organizationId: string, resourceType: string, resourceId: string, accountId: string): Promise<DeleteResourceMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceMemberWithOptions(organizationId, resourceType, resourceId, accountId, headers, runtime);
  }

  async deleteResourceMemberWithOptions(organizationId: string, resourceType: string, resourceId: string, accountId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteResourceMemberResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteResourceMemberResponse>(await this.doROARequest("DeleteResourceMember", "2021-06-25", "HTTPS", "DELETE", "AK", `/organization/${organizationId}/${resourceType}/${resourceId}/members/${accountId}`, "json", req, runtime), new DeleteResourceMemberResponse({}));
  }

  async listHostGroups(organizationId: string, request: ListHostGroupsRequest): Promise<ListHostGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listHostGroupsWithOptions(organizationId, request, headers, runtime);
  }

  async listHostGroupsWithOptions(organizationId: string, request: ListHostGroupsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListHostGroupsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ids)) {
      query["ids"] = request.ids;
    }

    if (!Util.isUnset(request.createStartTime)) {
      query["createStartTime"] = request.createStartTime;
    }

    if (!Util.isUnset(request.createEndTime)) {
      query["createEndTime"] = request.createEndTime;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.creatorAccountIds)) {
      query["creatorAccountIds"] = request.creatorAccountIds;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.pageSort)) {
      query["pageSort"] = request.pageSort;
    }

    if (!Util.isUnset(request.pageOrder)) {
      query["pageOrder"] = request.pageOrder;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListHostGroupsResponse>(await this.doROARequest("ListHostGroups", "2021-06-25", "HTTPS", "GET", "AK", `/organization/${organizationId}/hostGroups`, "json", req, runtime), new ListHostGroupsResponse({}));
  }

  async resetSshKey(organizationId: string): Promise<ResetSshKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resetSshKeyWithOptions(organizationId, headers, runtime);
  }

  async resetSshKeyWithOptions(organizationId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ResetSshKeyResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ResetSshKeyResponse>(await this.doROARequest("ResetSshKey", "2021-06-25", "HTTPS", "PUT", "AK", `/organization/${organizationId}/sshKey`, "json", req, runtime), new ResetSshKeyResponse({}));
  }

  async listServiceConnections(organizationId: string, request: ListServiceConnectionsRequest): Promise<ListServiceConnectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServiceConnectionsWithOptions(organizationId, request, headers, runtime);
  }

  async listServiceConnectionsWithOptions(organizationId: string, request: ListServiceConnectionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListServiceConnectionsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.sericeConnectionType)) {
      query["sericeConnectionType"] = request.sericeConnectionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListServiceConnectionsResponse>(await this.doROARequest("ListServiceConnections", "2021-06-25", "HTTPS", "GET", "AK", `/organization/${organizationId}/serviceConnections`, "json", req, runtime), new ListServiceConnectionsResponse({}));
  }

  async createHostGroup(organizationId: string, request: CreateHostGroupRequest): Promise<CreateHostGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createHostGroupWithOptions(organizationId, request, headers, runtime);
  }

  async createHostGroupWithOptions(organizationId: string, request: CreateHostGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateHostGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    if (!Util.isUnset(request.envId)) {
      body["envId"] = request.envId;
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

    if (!Util.isUnset(request.ecsType)) {
      body["ecsType"] = request.ecsType;
    }

    if (!Util.isUnset(request.ecsLabelKey)) {
      body["ecsLabelKey"] = request.ecsLabelKey;
    }

    if (!Util.isUnset(request.ecsLabelValue)) {
      body["ecsLabelValue"] = request.ecsLabelValue;
    }

    if (!Util.isUnset(request.aliyunRegion)) {
      body["aliyunRegion"] = request.aliyunRegion;
    }

    if (!Util.isUnset(request.machineInfos)) {
      body["machineInfos"] = request.machineInfos;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CreateHostGroupResponse>(await this.doROARequestWithForm("CreateHostGroup", "2021-06-25", "HTTPS", "POST", "AK", `/organization/${organizationId}/hostGroups`, "json", req, runtime), new CreateHostGroupResponse({}));
  }

  async stopPipelineRun(organizationId: string, pipelineId: string, pipelineRunId: string): Promise<StopPipelineRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopPipelineRunWithOptions(organizationId, pipelineId, pipelineRunId, headers, runtime);
  }

  async stopPipelineRunWithOptions(organizationId: string, pipelineId: string, pipelineRunId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopPipelineRunResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<StopPipelineRunResponse>(await this.doROARequest("StopPipelineRun", "2021-06-25", "HTTPS", "PUT", "AK", `/organization/${organizationId}/pipelines/${pipelineId}/pipelineRuns/${pipelineRunId}/stop`, "json", req, runtime), new StopPipelineRunResponse({}));
  }

  async updateHostGroup(organizationId: string, id: string, request: UpdateHostGroupRequest): Promise<UpdateHostGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateHostGroupWithOptions(organizationId, id, request, headers, runtime);
  }

  async updateHostGroupWithOptions(organizationId: string, id: string, request: UpdateHostGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateHostGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    if (!Util.isUnset(request.envId)) {
      body["envId"] = request.envId;
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

    if (!Util.isUnset(request.ecsType)) {
      body["ecsType"] = request.ecsType;
    }

    if (!Util.isUnset(request.ecsLabelKey)) {
      body["ecsLabelKey"] = request.ecsLabelKey;
    }

    if (!Util.isUnset(request.ecsLabelValue)) {
      body["ecsLabelValue"] = request.ecsLabelValue;
    }

    if (!Util.isUnset(request.aliyunRegion)) {
      body["aliyunRegion"] = request.aliyunRegion;
    }

    if (!Util.isUnset(request.machineInfos)) {
      body["machineInfos"] = request.machineInfos;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<UpdateHostGroupResponse>(await this.doROARequestWithForm("UpdateHostGroup", "2021-06-25", "HTTPS", "PUT", "AK", `/organization/${organizationId}/hostGroups/${id}`, "json", req, runtime), new UpdateHostGroupResponse({}));
  }

  async createResourceMember(organizationId: string, resourceType: string, resourceId: string, request: CreateResourceMemberRequest): Promise<CreateResourceMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createResourceMemberWithOptions(organizationId, resourceType, resourceId, request, headers, runtime);
  }

  async createResourceMemberWithOptions(organizationId: string, resourceType: string, resourceId: string, request: CreateResourceMemberRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateResourceMemberResponse> {
    Util.validateModel(request);
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
    return $tea.cast<CreateResourceMemberResponse>(await this.doROARequestWithForm("CreateResourceMember", "2021-06-25", "HTTPS", "POST", "AK", `/organization/${organizationId}/${resourceType}/${resourceId}/members`, "json", req, runtime), new CreateResourceMemberResponse({}));
  }

  async skipPipelineJobRun(organizationId: string, pipelineId: string, pipelineRunId: string, jobId: string): Promise<SkipPipelineJobRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.skipPipelineJobRunWithOptions(organizationId, pipelineId, pipelineRunId, jobId, headers, runtime);
  }

  async skipPipelineJobRunWithOptions(organizationId: string, pipelineId: string, pipelineRunId: string, jobId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SkipPipelineJobRunResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<SkipPipelineJobRunResponse>(await this.doROARequest("SkipPipelineJobRun", "2021-06-25", "HTTPS", "PUT", "AK", `/organization/${organizationId}/pipelines/${pipelineId}/pipelineRuns/${pipelineRunId}/jobs/${jobId}/skip`, "json", req, runtime), new SkipPipelineJobRunResponse({}));
  }

  async stopPipelineJobRun(organizationId: string, pipelineId: string, pipelineRunId: string, jobId: string): Promise<StopPipelineJobRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopPipelineJobRunWithOptions(organizationId, pipelineId, pipelineRunId, jobId, headers, runtime);
  }

  async stopPipelineJobRunWithOptions(organizationId: string, pipelineId: string, pipelineRunId: string, jobId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopPipelineJobRunResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<StopPipelineJobRunResponse>(await this.doROARequest("StopPipelineJobRun", "2021-06-25", "HTTPS", "PUT", "AK", `/organization/${organizationId}/pipelines/${pipelineId}/pipelineRuns/${pipelineRunId}/jobs/${jobId}/stop`, "json", req, runtime), new StopPipelineJobRunResponse({}));
  }

  async startPipelineRun(organizationId: string, pipelineId: string, request: StartPipelineRunRequest): Promise<StartPipelineRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startPipelineRunWithOptions(organizationId, pipelineId, request, headers, runtime);
  }

  async startPipelineRunWithOptions(organizationId: string, pipelineId: string, request: StartPipelineRunRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartPipelineRunResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.params)) {
      body["params"] = request.params;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<StartPipelineRunResponse>(await this.doROARequestWithForm("StartPipelineRun", "2021-06-25", "HTTPS", "POST", "AK", `/organizations/${organizationId}/pipelines/${pipelineId}/run`, "json", req, runtime), new StartPipelineRunResponse({}));
  }

  async getPipelineRun(organizationId: string, pipelineId: string, pipelineRunId: string): Promise<GetPipelineRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPipelineRunWithOptions(organizationId, pipelineId, pipelineRunId, headers, runtime);
  }

  async getPipelineRunWithOptions(organizationId: string, pipelineId: string, pipelineRunId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetPipelineRunResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetPipelineRunResponse>(await this.doROARequest("GetPipelineRun", "2021-06-25", "HTTPS", "GET", "AK", `/organization/${organizationId}/pipelines/${pipelineId}/pipelineRuns/${pipelineRunId}`, "json", req, runtime), new GetPipelineRunResponse({}));
  }

  async getPipeline(organizationId: string, pipelineId: string): Promise<GetPipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPipelineWithOptions(organizationId, pipelineId, headers, runtime);
  }

  async getPipelineWithOptions(organizationId: string, pipelineId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetPipelineResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetPipelineResponse>(await this.doROARequest("GetPipeline", "2021-06-25", "HTTPS", "GET", "AK", `/organization/${organizationId}/pipelines/${pipelineId}`, "json", req, runtime), new GetPipelineResponse({}));
  }

  async createVariableGroup(organizationId: string, request: CreateVariableGroupRequest): Promise<CreateVariableGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createVariableGroupWithOptions(organizationId, request, headers, runtime);
  }

  async createVariableGroupWithOptions(organizationId: string, request: CreateVariableGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateVariableGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.variables)) {
      body["variables"] = request.variables;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CreateVariableGroupResponse>(await this.doROARequestWithForm("CreateVariableGroup", "2021-06-25", "HTTPS", "POST", "AK", `/organization/${organizationId}/variableGroups`, "json", req, runtime), new CreateVariableGroupResponse({}));
  }

  async deleteVariableGroup(organizationId: string, id: string): Promise<DeleteVariableGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteVariableGroupWithOptions(organizationId, id, headers, runtime);
  }

  async deleteVariableGroupWithOptions(organizationId: string, id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteVariableGroupResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteVariableGroupResponse>(await this.doROARequest("DeleteVariableGroup", "2021-06-25", "HTTPS", "DELETE", "AK", `/organization/${organizationId}/variableGroups/${id}`, "json", req, runtime), new DeleteVariableGroupResponse({}));
  }

  async createSshKey(organizationId: string): Promise<CreateSshKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSshKeyWithOptions(organizationId, headers, runtime);
  }

  async createSshKeyWithOptions(organizationId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateSshKeyResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<CreateSshKeyResponse>(await this.doROARequest("CreateSshKey", "2021-06-25", "HTTPS", "POST", "AK", `/organization/${organizationId}/sshKey`, "json", req, runtime), new CreateSshKeyResponse({}));
  }

  async deleteHostGroup(organizationId: string, id: string): Promise<DeleteHostGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteHostGroupWithOptions(organizationId, id, headers, runtime);
  }

  async deleteHostGroupWithOptions(organizationId: string, id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteHostGroupResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteHostGroupResponse>(await this.doROARequest("DeleteHostGroup", "2021-06-25", "HTTPS", "DELETE", "AK", `/organization/${organizationId}/hostGroups/${id}`, "json", req, runtime), new DeleteHostGroupResponse({}));
  }

  async listVariableGroups(organizationId: string, request: ListVariableGroupsRequest): Promise<ListVariableGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listVariableGroupsWithOptions(organizationId, request, headers, runtime);
  }

  async listVariableGroupsWithOptions(organizationId: string, request: ListVariableGroupsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListVariableGroupsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageSort)) {
      query["pageSort"] = request.pageSort;
    }

    if (!Util.isUnset(request.pageOrder)) {
      query["pageOrder"] = request.pageOrder;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListVariableGroupsResponse>(await this.doROARequest("ListVariableGroups", "2021-06-25", "HTTPS", "GET", "AK", `/organization/${organizationId}/variableGroups`, "json", req, runtime), new ListVariableGroupsResponse({}));
  }

  async deletePipeline(organizationId: string, pipelineId: string): Promise<DeletePipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePipelineWithOptions(organizationId, pipelineId, headers, runtime);
  }

  async deletePipelineWithOptions(organizationId: string, pipelineId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeletePipelineResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeletePipelineResponse>(await this.doROARequest("DeletePipeline", "2021-06-25", "HTTPS", "DELETE", "AK", `/organization/${organizationId}/pipelines/${pipelineId}`, "json", req, runtime), new DeletePipelineResponse({}));
  }

  async listPipelineRuns(organizationId: string, pipelineId: string, request: ListPipelineRunsRequest): Promise<ListPipelineRunsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPipelineRunsWithOptions(organizationId, pipelineId, request, headers, runtime);
  }

  async listPipelineRunsWithOptions(organizationId: string, pipelineId: string, request: ListPipelineRunsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListPipelineRunsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.status)) {
      query["status"] = request.status;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.triggerMode)) {
      query["triggerMode"] = request.triggerMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListPipelineRunsResponse>(await this.doROARequest("ListPipelineRuns", "2021-06-25", "HTTPS", "GET", "AK", `/organization/${organizationId}/pipelines/${pipelineId}/pipelineRuns`, "json", req, runtime), new ListPipelineRunsResponse({}));
  }

}
