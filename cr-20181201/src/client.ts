// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CancelRepoBuildRecordRequest extends $tea.Model {
  instanceId?: string;
  repoId?: string;
  buildRecordId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      buildRecordId: 'BuildRecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
      buildRecordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRepoBuildRecordResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRepoBuildRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelRepoBuildRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelRepoBuildRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBuildRecordByRuleRequest extends $tea.Model {
  instanceId?: string;
  repoId?: string;
  buildRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      buildRuleId: 'BuildRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
      buildRuleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBuildRecordByRuleResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  buildRecordId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      buildRecordId: 'BuildRecordId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      buildRecordId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBuildRecordByRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateBuildRecordByRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateBuildRecordByRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChartNamespaceRequest extends $tea.Model {
  instanceId?: string;
  namespaceName?: string;
  autoCreateRepo?: boolean;
  defaultRepoType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      autoCreateRepo: 'AutoCreateRepo',
      defaultRepoType: 'DefaultRepoType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespaceName: 'string',
      autoCreateRepo: 'boolean',
      defaultRepoType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChartNamespaceResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChartNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateChartNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateChartNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChartRepositoryRequest extends $tea.Model {
  instanceId?: string;
  repoName?: string;
  repoNamespaceName?: string;
  repoType?: string;
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      repoType: 'RepoType',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
      repoType: 'string',
      summary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChartRepositoryResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  repoId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      repoId: 'RepoId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      repoId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChartRepositoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateChartRepositoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateChartRepositoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceEndpointAclPolicyRequest extends $tea.Model {
  instanceId?: string;
  endpointType?: string;
  entry?: string;
  comment?: string;
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      endpointType: 'EndpointType',
      entry: 'Entry',
      comment: 'Comment',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      endpointType: 'string',
      entry: 'string',
      comment: 'string',
      moduleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceEndpointAclPolicyResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceEndpointAclPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateInstanceEndpointAclPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateInstanceEndpointAclPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceVpcEndpointLinkedVpcRequest extends $tea.Model {
  instanceId?: string;
  vpcId?: string;
  vswitchId?: string;
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      vpcId: 'string',
      vswitchId: 'string',
      moduleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceVpcEndpointLinkedVpcResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceVpcEndpointLinkedVpcResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateInstanceVpcEndpointLinkedVpcResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateInstanceVpcEndpointLinkedVpcResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceRequest extends $tea.Model {
  instanceId?: string;
  namespaceName?: string;
  autoCreateRepo?: boolean;
  defaultRepoType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      autoCreateRepo: 'AutoCreateRepo',
      defaultRepoType: 'DefaultRepoType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespaceName: 'string',
      autoCreateRepo: 'boolean',
      defaultRepoType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoBuildRuleRequest extends $tea.Model {
  instanceId?: string;
  repoId?: string;
  dockerfileLocation?: string;
  dockerfileName?: string;
  pushType?: string;
  pushName?: string;
  imageTag?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      dockerfileLocation: 'DockerfileLocation',
      dockerfileName: 'DockerfileName',
      pushType: 'PushType',
      pushName: 'PushName',
      imageTag: 'ImageTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
      dockerfileLocation: 'string',
      dockerfileName: 'string',
      pushType: 'string',
      pushName: 'string',
      imageTag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoBuildRuleResponseBody extends $tea.Model {
  isSuccess?: boolean;
  buildRuleId?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      buildRuleId: 'BuildRuleId',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      buildRuleId: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoBuildRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRepoBuildRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRepoBuildRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryRequest extends $tea.Model {
  instanceId?: string;
  repoName?: string;
  repoNamespaceName?: string;
  repoType?: string;
  summary?: string;
  detail?: string;
  tagImmutability?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      repoType: 'RepoType',
      summary: 'Summary',
      detail: 'Detail',
      tagImmutability: 'TagImmutability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
      repoType: 'string',
      summary: 'string',
      detail: 'string',
      tagImmutability: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  repoId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      repoId: 'RepoId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      repoId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRepositoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRepositoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoSyncRuleRequest extends $tea.Model {
  instanceId?: string;
  namespaceName?: string;
  repoName?: string;
  targetRegionId?: string;
  targetInstanceId?: string;
  targetNamespaceName?: string;
  targetRepoName?: string;
  tagFilter?: string;
  syncScope?: string;
  syncRuleName?: string;
  syncTrigger?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      repoName: 'RepoName',
      targetRegionId: 'TargetRegionId',
      targetInstanceId: 'TargetInstanceId',
      targetNamespaceName: 'TargetNamespaceName',
      targetRepoName: 'TargetRepoName',
      tagFilter: 'TagFilter',
      syncScope: 'SyncScope',
      syncRuleName: 'SyncRuleName',
      syncTrigger: 'SyncTrigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespaceName: 'string',
      repoName: 'string',
      targetRegionId: 'string',
      targetInstanceId: 'string',
      targetNamespaceName: 'string',
      targetRepoName: 'string',
      tagFilter: 'string',
      syncScope: 'string',
      syncRuleName: 'string',
      syncTrigger: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoSyncRuleResponseBody extends $tea.Model {
  syncRuleId?: string;
  isSuccess?: boolean;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      syncRuleId: 'SyncRuleId',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      syncRuleId: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoSyncRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRepoSyncRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRepoSyncRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoSyncTaskByRuleRequest extends $tea.Model {
  instanceId?: string;
  repoId?: string;
  tag?: string;
  syncRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      tag: 'Tag',
      syncRuleId: 'SyncRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
      tag: 'string',
      syncRuleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoSyncTaskByRuleResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  code?: string;
  syncTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      code: 'Code',
      syncTaskId: 'SyncTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      code: 'string',
      syncTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoSyncTaskByRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRepoSyncTaskByRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRepoSyncTaskByRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoTagScanTaskRequest extends $tea.Model {
  instanceId?: string;
  repoId?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoTagScanTaskResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoTagScanTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRepoTagScanTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRepoTagScanTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoTriggerRequest extends $tea.Model {
  instanceId?: string;
  repoId?: string;
  triggerName?: string;
  triggerUrl?: string;
  triggerType?: string;
  triggerTag?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      triggerName: 'TriggerName',
      triggerUrl: 'TriggerUrl',
      triggerType: 'TriggerType',
      triggerTag: 'TriggerTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
      triggerName: 'string',
      triggerUrl: 'string',
      triggerType: 'string',
      triggerTag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoTriggerResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  triggerId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      triggerId: 'TriggerId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      triggerId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoTriggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRepoTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRepoTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChartNamespaceRequest extends $tea.Model {
  instanceId?: string;
  namespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChartNamespaceResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChartNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteChartNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteChartNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChartReleaseRequest extends $tea.Model {
  instanceId?: string;
  chart?: string;
  release?: string;
  repoName?: string;
  repoNamespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      chart: 'Chart',
      release: 'Release',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      chart: 'string',
      release: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChartReleaseResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChartReleaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteChartReleaseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteChartReleaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChartRepositoryRequest extends $tea.Model {
  instanceId?: string;
  repoNamespaceName?: string;
  repoName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoNamespaceName: 'RepoNamespaceName',
      repoName: 'RepoName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoNamespaceName: 'string',
      repoName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChartRepositoryResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChartRepositoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteChartRepositoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteChartRepositoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceEndpointAclPolicyRequest extends $tea.Model {
  instanceId?: string;
  endpointType?: string;
  entry?: string;
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      endpointType: 'EndpointType',
      entry: 'Entry',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      endpointType: 'string',
      entry: 'string',
      moduleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceEndpointAclPolicyResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceEndpointAclPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteInstanceEndpointAclPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteInstanceEndpointAclPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceVpcEndpointLinkedVpcRequest extends $tea.Model {
  instanceId?: string;
  vpcId?: string;
  vswitchId?: string;
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      vpcId: 'string',
      vswitchId: 'string',
      moduleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceVpcEndpointLinkedVpcResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceVpcEndpointLinkedVpcResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteInstanceVpcEndpointLinkedVpcResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteInstanceVpcEndpointLinkedVpcResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNamespaceRequest extends $tea.Model {
  instanceId?: string;
  namespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNamespaceResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepoBuildRuleRequest extends $tea.Model {
  instanceId?: string;
  repoId?: string;
  buildRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      buildRuleId: 'BuildRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
      buildRuleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepoBuildRuleResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepoBuildRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRepoBuildRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRepoBuildRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryRequest extends $tea.Model {
  instanceId?: string;
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRepositoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRepositoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepoSyncRuleRequest extends $tea.Model {
  instanceId?: string;
  syncRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      syncRuleId: 'SyncRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      syncRuleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepoSyncRuleResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepoSyncRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRepoSyncRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRepoSyncRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepoTagRequest extends $tea.Model {
  instanceId?: string;
  repoId?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepoTagResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepoTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRepoTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRepoTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepoTriggerRequest extends $tea.Model {
  instanceId?: string;
  repoId?: string;
  triggerId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      triggerId: 'TriggerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
      triggerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepoTriggerResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepoTriggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRepoTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRepoTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthorizationTokenRequest extends $tea.Model {
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

export class GetAuthorizationTokenResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  tempUsername?: string;
  authorizationToken?: string;
  expireTime?: number;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      tempUsername: 'TempUsername',
      authorizationToken: 'AuthorizationToken',
      expireTime: 'ExpireTime',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      tempUsername: 'string',
      authorizationToken: 'string',
      expireTime: 'number',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthorizationTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAuthorizationTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAuthorizationTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChartNamespaceRequest extends $tea.Model {
  instanceId?: string;
  namespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChartNamespaceResponseBody extends $tea.Model {
  namespaceStatus?: string;
  isSuccess?: boolean;
  namespaceName?: string;
  defaultRepoType?: string;
  requestId?: string;
  instanceId?: string;
  autoCreateRepo?: boolean;
  namespaceId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceStatus: 'NamespaceStatus',
      isSuccess: 'IsSuccess',
      namespaceName: 'NamespaceName',
      defaultRepoType: 'DefaultRepoType',
      requestId: 'RequestId',
      instanceId: 'InstanceId',
      autoCreateRepo: 'AutoCreateRepo',
      namespaceId: 'NamespaceId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceStatus: 'string',
      isSuccess: 'boolean',
      namespaceName: 'string',
      defaultRepoType: 'string',
      requestId: 'string',
      instanceId: 'string',
      autoCreateRepo: 'boolean',
      namespaceId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChartNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetChartNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetChartNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChartRepositoryRequest extends $tea.Model {
  instanceId?: string;
  repoNamespaceName?: string;
  repoName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoNamespaceName: 'RepoNamespaceName',
      repoName: 'RepoName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoNamespaceName: 'string',
      repoName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChartRepositoryResponseBody extends $tea.Model {
  isSuccess?: boolean;
  repoNamespaceName?: string;
  requestId?: string;
  repoStatus?: string;
  repoType?: string;
  modifiedTime?: number;
  instanceId?: string;
  createTime?: number;
  repoName?: string;
  summary?: string;
  repoId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      repoNamespaceName: 'RepoNamespaceName',
      requestId: 'RequestId',
      repoStatus: 'RepoStatus',
      repoType: 'RepoType',
      modifiedTime: 'ModifiedTime',
      instanceId: 'InstanceId',
      createTime: 'CreateTime',
      repoName: 'RepoName',
      summary: 'Summary',
      repoId: 'RepoId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      repoNamespaceName: 'string',
      requestId: 'string',
      repoStatus: 'string',
      repoType: 'string',
      modifiedTime: 'number',
      instanceId: 'string',
      createTime: 'number',
      repoName: 'string',
      summary: 'string',
      repoId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChartRepositoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetChartRepositoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetChartRepositoryResponseBody,
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
  instanceName?: string;
  isSuccess?: boolean;
  modifiedTime?: number;
  requestId?: string;
  instanceSpecification?: string;
  instanceId?: string;
  instanceStatus?: string;
  createTime?: number;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      isSuccess: 'IsSuccess',
      modifiedTime: 'ModifiedTime',
      requestId: 'RequestId',
      instanceSpecification: 'InstanceSpecification',
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      createTime: 'CreateTime',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      isSuccess: 'boolean',
      modifiedTime: 'number',
      requestId: 'string',
      instanceSpecification: 'string',
      instanceId: 'string',
      instanceStatus: 'string',
      createTime: 'number',
      code: 'string',
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

export class GetInstanceCountResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  count?: number;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      count: 'Count',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      count: 'number',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInstanceCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInstanceCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceEndpointRequest extends $tea.Model {
  instanceId?: string;
  endpointType?: string;
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      endpointType: 'EndpointType',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      endpointType: 'string',
      moduleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceEndpointResponseBody extends $tea.Model {
  status?: string;
  domains?: GetInstanceEndpointResponseBodyDomains[];
  aclEntries?: GetInstanceEndpointResponseBodyAclEntries[];
  isSuccess?: boolean;
  aclEnable?: boolean;
  requestId?: string;
  enable?: boolean;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      domains: 'Domains',
      aclEntries: 'AclEntries',
      isSuccess: 'IsSuccess',
      aclEnable: 'AclEnable',
      requestId: 'RequestId',
      enable: 'Enable',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      domains: { 'type': 'array', 'itemType': GetInstanceEndpointResponseBodyDomains },
      aclEntries: { 'type': 'array', 'itemType': GetInstanceEndpointResponseBodyAclEntries },
      isSuccess: 'boolean',
      aclEnable: 'boolean',
      requestId: 'string',
      enable: 'boolean',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceEndpointResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInstanceEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInstanceEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceUsageRequest extends $tea.Model {
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

export class GetInstanceUsageResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  repoQuota?: string;
  repoUsage?: string;
  namespaceQuota?: string;
  namespaceUsage?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      repoQuota: 'RepoQuota',
      repoUsage: 'RepoUsage',
      namespaceQuota: 'NamespaceQuota',
      namespaceUsage: 'NamespaceUsage',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      repoQuota: 'string',
      repoUsage: 'string',
      namespaceQuota: 'string',
      namespaceUsage: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceUsageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInstanceUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInstanceUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceVpcEndpointRequest extends $tea.Model {
  instanceId?: string;
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      moduleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceVpcEndpointResponseBody extends $tea.Model {
  domains?: string[];
  isSuccess?: boolean;
  requestId?: string;
  enable?: boolean;
  code?: string;
  linkedVpcs?: GetInstanceVpcEndpointResponseBodyLinkedVpcs[];
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      enable: 'Enable',
      code: 'Code',
      linkedVpcs: 'LinkedVpcs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': 'string' },
      isSuccess: 'boolean',
      requestId: 'string',
      enable: 'boolean',
      code: 'string',
      linkedVpcs: { 'type': 'array', 'itemType': GetInstanceVpcEndpointResponseBodyLinkedVpcs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceVpcEndpointResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInstanceVpcEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInstanceVpcEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNamespaceRequest extends $tea.Model {
  instanceId?: string;
  namespaceName?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespaceName: 'string',
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNamespaceResponseBody extends $tea.Model {
  namespaceStatus?: string;
  isSuccess?: boolean;
  namespaceName?: string;
  defaultRepoType?: string;
  requestId?: string;
  instanceId?: string;
  autoCreateRepo?: boolean;
  namespaceId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceStatus: 'NamespaceStatus',
      isSuccess: 'IsSuccess',
      namespaceName: 'NamespaceName',
      defaultRepoType: 'DefaultRepoType',
      requestId: 'RequestId',
      instanceId: 'InstanceId',
      autoCreateRepo: 'AutoCreateRepo',
      namespaceId: 'NamespaceId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceStatus: 'string',
      isSuccess: 'boolean',
      namespaceName: 'string',
      defaultRepoType: 'string',
      requestId: 'string',
      instanceId: 'string',
      autoCreateRepo: 'boolean',
      namespaceId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoBuildRecordRequest extends $tea.Model {
  instanceId?: string;
  buildRecordId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      buildRecordId: 'BuildRecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      buildRecordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoBuildRecordResponseBody extends $tea.Model {
  status?: string;
  isSuccess?: boolean;
  endTime?: number;
  requestId?: string;
  startTime?: number;
  buildRecordId?: string;
  image?: GetRepoBuildRecordResponseBodyImage;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      isSuccess: 'IsSuccess',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      buildRecordId: 'BuildRecordId',
      image: 'Image',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      isSuccess: 'boolean',
      endTime: 'number',
      requestId: 'string',
      startTime: 'number',
      buildRecordId: 'string',
      image: GetRepoBuildRecordResponseBodyImage,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoBuildRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRepoBuildRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRepoBuildRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoBuildRecordStatusRequest extends $tea.Model {
  instanceId?: string;
  repoId?: string;
  buildRecordId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      buildRecordId: 'BuildRecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
      buildRecordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoBuildRecordStatusResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  buildStatus?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      buildStatus: 'BuildStatus',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      buildStatus: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoBuildRecordStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRepoBuildRecordStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRepoBuildRecordStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryRequest extends $tea.Model {
  instanceId?: string;
  repoId?: string;
  repoNamespaceName?: string;
  repoName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      repoNamespaceName: 'RepoNamespaceName',
      repoName: 'RepoName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
      repoNamespaceName: 'string',
      repoName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryResponseBody extends $tea.Model {
  isSuccess?: boolean;
  repoNamespaceName?: string;
  requestId?: string;
  instanceId?: string;
  createTime?: number;
  repoName?: string;
  code?: string;
  tagImmutability?: boolean;
  repoBuildType?: string;
  repoStatus?: string;
  repoType?: string;
  modifiedTime?: number;
  summary?: string;
  repoId?: string;
  detail?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      repoNamespaceName: 'RepoNamespaceName',
      requestId: 'RequestId',
      instanceId: 'InstanceId',
      createTime: 'CreateTime',
      repoName: 'RepoName',
      code: 'Code',
      tagImmutability: 'TagImmutability',
      repoBuildType: 'RepoBuildType',
      repoStatus: 'RepoStatus',
      repoType: 'RepoType',
      modifiedTime: 'ModifiedTime',
      summary: 'Summary',
      repoId: 'RepoId',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      repoNamespaceName: 'string',
      requestId: 'string',
      instanceId: 'string',
      createTime: 'number',
      repoName: 'string',
      code: 'string',
      tagImmutability: 'boolean',
      repoBuildType: 'string',
      repoStatus: 'string',
      repoType: 'string',
      modifiedTime: 'number',
      summary: 'string',
      repoId: 'string',
      detail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRepositoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRepositoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoSyncTaskRequest extends $tea.Model {
  instanceId?: string;
  syncTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      syncTaskId: 'SyncTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      syncTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoSyncTaskResponseBody extends $tea.Model {
  isSuccess?: boolean;
  progress?: number;
  requestId?: string;
  layerTasks?: GetRepoSyncTaskResponseBodyLayerTasks[];
  taskStatus?: string;
  syncTaskId?: string;
  code?: string;
  syncedSize?: number;
  syncRuleId?: string;
  imageFrom?: GetRepoSyncTaskResponseBodyImageFrom;
  taskTrigger?: string;
  imageTo?: GetRepoSyncTaskResponseBodyImageTo;
  syncBatchTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      progress: 'Progress',
      requestId: 'RequestId',
      layerTasks: 'LayerTasks',
      taskStatus: 'TaskStatus',
      syncTaskId: 'SyncTaskId',
      code: 'Code',
      syncedSize: 'SyncedSize',
      syncRuleId: 'SyncRuleId',
      imageFrom: 'ImageFrom',
      taskTrigger: 'TaskTrigger',
      imageTo: 'ImageTo',
      syncBatchTaskId: 'SyncBatchTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      progress: 'number',
      requestId: 'string',
      layerTasks: { 'type': 'array', 'itemType': GetRepoSyncTaskResponseBodyLayerTasks },
      taskStatus: 'string',
      syncTaskId: 'string',
      code: 'string',
      syncedSize: 'number',
      syncRuleId: 'string',
      imageFrom: GetRepoSyncTaskResponseBodyImageFrom,
      taskTrigger: 'string',
      imageTo: GetRepoSyncTaskResponseBodyImageTo,
      syncBatchTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoSyncTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRepoSyncTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRepoSyncTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagLayersRequest extends $tea.Model {
  instanceId?: string;
  repoId?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagLayersResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  code?: string;
  layers?: GetRepoTagLayersResponseBodyLayers[];
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      code: 'Code',
      layers: 'Layers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      code: 'string',
      layers: { 'type': 'array', 'itemType': GetRepoTagLayersResponseBodyLayers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagLayersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRepoTagLayersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRepoTagLayersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagManifestRequest extends $tea.Model {
  instanceId?: string;
  tag?: string;
  schemaVersion?: number;
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      tag: 'Tag',
      schemaVersion: 'SchemaVersion',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      tag: 'string',
      schemaVersion: 'number',
      repoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagManifestResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  manifest?: GetRepoTagManifestResponseBodyManifest;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      manifest: 'Manifest',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      manifest: GetRepoTagManifestResponseBodyManifest,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagManifestResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRepoTagManifestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRepoTagManifestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagScanStatusRequest extends $tea.Model {
  instanceId?: string;
  repoId?: string;
  tag?: string;
  scanTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      tag: 'Tag',
      scanTaskId: 'ScanTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
      tag: 'string',
      scanTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagScanStatusResponseBody extends $tea.Model {
  status?: string;
  isSuccess?: boolean;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagScanStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRepoTagScanStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRepoTagScanStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagScanSummaryRequest extends $tea.Model {
  instanceId?: string;
  repoId?: string;
  tag?: string;
  scanTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      tag: 'Tag',
      scanTaskId: 'ScanTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
      tag: 'string',
      scanTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagScanSummaryResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  lowSeverity?: number;
  mediumSeverity?: number;
  highSeverity?: number;
  unknownSeverity?: number;
  code?: string;
  totalSeverity?: number;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      lowSeverity: 'LowSeverity',
      mediumSeverity: 'MediumSeverity',
      highSeverity: 'HighSeverity',
      unknownSeverity: 'UnknownSeverity',
      code: 'Code',
      totalSeverity: 'TotalSeverity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      lowSeverity: 'number',
      mediumSeverity: 'number',
      highSeverity: 'number',
      unknownSeverity: 'number',
      code: 'string',
      totalSeverity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagScanSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRepoTagScanSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRepoTagScanSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartNamespaceRequest extends $tea.Model {
  instanceId?: string;
  namespaceStatus?: string;
  namespaceName?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespaceStatus: 'NamespaceStatus',
      namespaceName: 'NamespaceName',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespaceStatus: 'string',
      namespaceName: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartNamespaceResponseBody extends $tea.Model {
  isSuccess?: boolean;
  namespaces?: ListChartNamespaceResponseBodyNamespaces[];
  totalCount?: string;
  requestId?: string;
  pageSize?: number;
  pageNo?: number;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      namespaces: 'Namespaces',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNo: 'PageNo',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      namespaces: { 'type': 'array', 'itemType': ListChartNamespaceResponseBodyNamespaces },
      totalCount: 'string',
      requestId: 'string',
      pageSize: 'number',
      pageNo: 'number',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListChartNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListChartNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartReleaseRequest extends $tea.Model {
  instanceId?: string;
  repoName?: string;
  repoNamespaceName?: string;
  pageNo?: number;
  pageSize?: number;
  chart?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      chart: 'Chart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
      pageNo: 'number',
      pageSize: 'number',
      chart: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartReleaseResponseBody extends $tea.Model {
  isSuccess?: boolean;
  totalCount?: string;
  requestId?: string;
  pageSize?: number;
  chartReleases?: ListChartReleaseResponseBodyChartReleases[];
  pageNo?: number;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      chartReleases: 'ChartReleases',
      pageNo: 'PageNo',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      totalCount: 'string',
      requestId: 'string',
      pageSize: 'number',
      chartReleases: { 'type': 'array', 'itemType': ListChartReleaseResponseBodyChartReleases },
      pageNo: 'number',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartReleaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListChartReleaseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListChartReleaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartRepositoryRequest extends $tea.Model {
  instanceId?: string;
  repoStatus?: string;
  repoName?: string;
  repoNamespaceName?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoStatus: 'RepoStatus',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoStatus: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartRepositoryResponseBody extends $tea.Model {
  repositories?: ListChartRepositoryResponseBodyRepositories[];
  isSuccess?: boolean;
  totalCount?: string;
  requestId?: string;
  pageSize?: number;
  pageNo?: number;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      repositories: 'Repositories',
      isSuccess: 'IsSuccess',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNo: 'PageNo',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      repositories: { 'type': 'array', 'itemType': ListChartRepositoryResponseBodyRepositories },
      isSuccess: 'boolean',
      totalCount: 'string',
      requestId: 'string',
      pageSize: 'number',
      pageNo: 'number',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartRepositoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListChartRepositoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListChartRepositoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceRequest extends $tea.Model {
  instanceName?: string;
  instanceStatus?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      instanceStatus: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBody extends $tea.Model {
  instances?: ListInstanceResponseBodyInstances[];
  isSuccess?: boolean;
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNo?: number;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      isSuccess: 'IsSuccess',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNo: 'PageNo',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListInstanceResponseBodyInstances },
      isSuccess: 'boolean',
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNo: 'number',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceEndpointRequest extends $tea.Model {
  instanceId?: string;
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      moduleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceEndpointResponseBody extends $tea.Model {
  endpoints?: ListInstanceEndpointResponseBodyEndpoints[];
  isSuccess?: boolean;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      endpoints: 'Endpoints',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoints: { 'type': 'array', 'itemType': ListInstanceEndpointResponseBodyEndpoints },
      isSuccess: 'boolean',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceEndpointResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInstanceEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInstanceEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceRegionRequest extends $tea.Model {
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceRegionResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  regions?: ListInstanceRegionResponseBodyRegions[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      regions: 'Regions',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      regions: { 'type': 'array', 'itemType': ListInstanceRegionResponseBodyRegions },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceRegionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInstanceRegionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInstanceRegionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespaceRequest extends $tea.Model {
  instanceId?: string;
  namespaceStatus?: string;
  namespaceName?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespaceStatus: 'NamespaceStatus',
      namespaceName: 'NamespaceName',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespaceStatus: 'string',
      namespaceName: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespaceResponseBody extends $tea.Model {
  isSuccess?: boolean;
  namespaces?: ListNamespaceResponseBodyNamespaces[];
  totalCount?: string;
  requestId?: string;
  pageSize?: number;
  pageNo?: number;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      namespaces: 'Namespaces',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNo: 'PageNo',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      namespaces: { 'type': 'array', 'itemType': ListNamespaceResponseBodyNamespaces },
      totalCount: 'string',
      requestId: 'string',
      pageSize: 'number',
      pageNo: 'number',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRecordRequest extends $tea.Model {
  instanceId?: string;
  repoId?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRecordResponseBody extends $tea.Model {
  isSuccess?: boolean;
  buildRecords?: ListRepoBuildRecordResponseBodyBuildRecords[];
  totalCount?: string;
  requestId?: string;
  pageSize?: number;
  pageNo?: number;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      buildRecords: 'BuildRecords',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNo: 'PageNo',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      buildRecords: { 'type': 'array', 'itemType': ListRepoBuildRecordResponseBodyBuildRecords },
      totalCount: 'string',
      requestId: 'string',
      pageSize: 'number',
      pageNo: 'number',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRepoBuildRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRepoBuildRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRecordLogRequest extends $tea.Model {
  instanceId?: string;
  repoId?: string;
  buildRecordId?: string;
  offset?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      buildRecordId: 'BuildRecordId',
      offset: 'Offset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
      buildRecordId: 'string',
      offset: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRecordLogResponseBody extends $tea.Model {
  isSuccess?: boolean;
  buildRecordLogs?: ListRepoBuildRecordLogResponseBodyBuildRecordLogs[];
  totalCount?: string;
  requestId?: string;
  pageSize?: number;
  pageNo?: number;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      buildRecordLogs: 'BuildRecordLogs',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNo: 'PageNo',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      buildRecordLogs: { 'type': 'array', 'itemType': ListRepoBuildRecordLogResponseBodyBuildRecordLogs },
      totalCount: 'string',
      requestId: 'string',
      pageSize: 'number',
      pageNo: 'number',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRecordLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRepoBuildRecordLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRepoBuildRecordLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRuleRequest extends $tea.Model {
  instanceId?: string;
  repoId?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRuleResponseBody extends $tea.Model {
  isSuccess?: boolean;
  totalCount?: string;
  requestId?: string;
  pageSize?: number;
  buildRules?: ListRepoBuildRuleResponseBodyBuildRules[];
  pageNo?: number;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      buildRules: 'BuildRules',
      pageNo: 'PageNo',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      totalCount: 'string',
      requestId: 'string',
      pageSize: 'number',
      buildRules: { 'type': 'array', 'itemType': ListRepoBuildRuleResponseBodyBuildRules },
      pageNo: 'number',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRepoBuildRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRepoBuildRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryRequest extends $tea.Model {
  instanceId?: string;
  repoStatus?: string;
  repoName?: string;
  repoNamespaceName?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoStatus: 'RepoStatus',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoStatus: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryResponseBody extends $tea.Model {
  repositories?: ListRepositoryResponseBodyRepositories[];
  isSuccess?: boolean;
  totalCount?: string;
  requestId?: string;
  pageSize?: number;
  pageNo?: number;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      repositories: 'Repositories',
      isSuccess: 'IsSuccess',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNo: 'PageNo',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      repositories: { 'type': 'array', 'itemType': ListRepositoryResponseBodyRepositories },
      isSuccess: 'boolean',
      totalCount: 'string',
      requestId: 'string',
      pageSize: 'number',
      pageNo: 'number',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRepositoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRepositoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoSyncRuleRequest extends $tea.Model {
  instanceId?: string;
  pageNo?: number;
  pageSize?: number;
  namespaceName?: string;
  repoName?: string;
  targetInstanceId?: string;
  targetRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      namespaceName: 'NamespaceName',
      repoName: 'RepoName',
      targetInstanceId: 'TargetInstanceId',
      targetRegionId: 'TargetRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      namespaceName: 'string',
      repoName: 'string',
      targetInstanceId: 'string',
      targetRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoSyncRuleResponseBody extends $tea.Model {
  isSuccess?: boolean;
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  syncRules?: ListRepoSyncRuleResponseBodySyncRules[];
  pageNo?: number;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      syncRules: 'SyncRules',
      pageNo: 'PageNo',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      syncRules: { 'type': 'array', 'itemType': ListRepoSyncRuleResponseBodySyncRules },
      pageNo: 'number',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoSyncRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRepoSyncRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRepoSyncRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoSyncTaskRequest extends $tea.Model {
  instanceId?: string;
  pageNo?: number;
  pageSize?: number;
  syncRecordId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      syncRecordId: 'SyncRecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      syncRecordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoSyncTaskResponseBody extends $tea.Model {
  isSuccess?: boolean;
  totalCount?: string;
  requestId?: string;
  pageSize?: number;
  pageNo?: number;
  syncTasks?: ListRepoSyncTaskResponseBodySyncTasks[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNo: 'PageNo',
      syncTasks: 'SyncTasks',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      totalCount: 'string',
      requestId: 'string',
      pageSize: 'number',
      pageNo: 'number',
      syncTasks: { 'type': 'array', 'itemType': ListRepoSyncTaskResponseBodySyncTasks },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoSyncTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRepoSyncTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRepoSyncTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTagRequest extends $tea.Model {
  instanceId?: string;
  repoId?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTagResponseBody extends $tea.Model {
  isSuccess?: boolean;
  totalCount?: string;
  requestId?: string;
  pageSize?: number;
  images?: ListRepoTagResponseBodyImages[];
  pageNo?: number;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      images: 'Images',
      pageNo: 'PageNo',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      totalCount: 'string',
      requestId: 'string',
      pageSize: 'number',
      images: { 'type': 'array', 'itemType': ListRepoTagResponseBodyImages },
      pageNo: 'number',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRepoTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRepoTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTagScanResultRequest extends $tea.Model {
  instanceId?: string;
  repoId?: string;
  tag?: string;
  scanTaskId?: string;
  pageNo?: number;
  pageSize?: number;
  severity?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      tag: 'Tag',
      scanTaskId: 'ScanTaskId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      severity: 'Severity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
      tag: 'string',
      scanTaskId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      severity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTagScanResultResponseBody extends $tea.Model {
  isSuccess?: boolean;
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNo?: number;
  vulnerabilities?: ListRepoTagScanResultResponseBodyVulnerabilities[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNo: 'PageNo',
      vulnerabilities: 'Vulnerabilities',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNo: 'number',
      vulnerabilities: { 'type': 'array', 'itemType': ListRepoTagScanResultResponseBodyVulnerabilities },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTagScanResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRepoTagScanResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRepoTagScanResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTriggerRequest extends $tea.Model {
  instanceId?: string;
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTriggerResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  triggers?: ListRepoTriggerResponseBodyTriggers[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      triggers: 'Triggers',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      triggers: { 'type': 'array', 'itemType': ListRepoTriggerResponseBodyTriggers },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTriggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRepoTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRepoTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTriggerRecordRequest extends $tea.Model {
  instanceId?: string;
  triggerRecordId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      triggerRecordId: 'TriggerRecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      triggerRecordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTriggerRecordResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  repoTriggerRecords?: ListRepoTriggerRecordResponseBodyRepoTriggerRecords[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      repoTriggerRecords: 'RepoTriggerRecords',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      repoTriggerRecords: { 'type': 'array', 'itemType': ListRepoTriggerRecordResponseBodyRepoTriggerRecords },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTriggerRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRepoTriggerRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRepoTriggerRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetLoginPasswordRequest extends $tea.Model {
  instanceId?: string;
  password?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      password: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetLoginPasswordResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetLoginPasswordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResetLoginPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResetLoginPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateChartNamespaceRequest extends $tea.Model {
  instanceId?: string;
  namespaceName?: string;
  autoCreateRepo?: boolean;
  defaultRepoType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      autoCreateRepo: 'AutoCreateRepo',
      defaultRepoType: 'DefaultRepoType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespaceName: 'string',
      autoCreateRepo: 'boolean',
      defaultRepoType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateChartNamespaceResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateChartNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateChartNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateChartNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateChartRepositoryRequest extends $tea.Model {
  instanceId?: string;
  repoType?: string;
  summary?: string;
  repoNamespaceName?: string;
  repoName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoType: 'RepoType',
      summary: 'Summary',
      repoNamespaceName: 'RepoNamespaceName',
      repoName: 'RepoName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoType: 'string',
      summary: 'string',
      repoNamespaceName: 'string',
      repoName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateChartRepositoryResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateChartRepositoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateChartRepositoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateChartRepositoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceEndpointStatusRequest extends $tea.Model {
  instanceId?: string;
  endpointType?: string;
  enable?: boolean;
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      endpointType: 'EndpointType',
      enable: 'Enable',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      endpointType: 'string',
      enable: 'boolean',
      moduleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceEndpointStatusResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceEndpointStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateInstanceEndpointStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateInstanceEndpointStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNamespaceRequest extends $tea.Model {
  instanceId?: string;
  namespaceName?: string;
  autoCreateRepo?: boolean;
  defaultRepoType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      autoCreateRepo: 'AutoCreateRepo',
      defaultRepoType: 'DefaultRepoType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespaceName: 'string',
      autoCreateRepo: 'boolean',
      defaultRepoType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNamespaceResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepoBuildRuleRequest extends $tea.Model {
  instanceId?: string;
  repoId?: string;
  dockerfileLocation?: string;
  dockerfileName?: string;
  pushType?: string;
  pushName?: string;
  imageTag?: string;
  buildRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      dockerfileLocation: 'DockerfileLocation',
      dockerfileName: 'DockerfileName',
      pushType: 'PushType',
      pushName: 'PushName',
      imageTag: 'ImageTag',
      buildRuleId: 'BuildRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
      dockerfileLocation: 'string',
      dockerfileName: 'string',
      pushType: 'string',
      pushName: 'string',
      imageTag: 'string',
      buildRuleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepoBuildRuleResponseBody extends $tea.Model {
  isSuccess?: boolean;
  buildRuleId?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      buildRuleId: 'BuildRuleId',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      buildRuleId: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepoBuildRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateRepoBuildRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateRepoBuildRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepositoryRequest extends $tea.Model {
  instanceId?: string;
  repoId?: string;
  repoType?: string;
  summary?: string;
  detail?: string;
  tagImmutability?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      repoType: 'RepoType',
      summary: 'Summary',
      detail: 'Detail',
      tagImmutability: 'TagImmutability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
      repoType: 'string',
      summary: 'string',
      detail: 'string',
      tagImmutability: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepositoryResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepositoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateRepositoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateRepositoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepoTriggerRequest extends $tea.Model {
  instanceId?: string;
  repoId?: string;
  triggerName?: string;
  triggerUrl?: string;
  triggerType?: string;
  triggerTag?: string;
  triggerId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      triggerName: 'TriggerName',
      triggerUrl: 'TriggerUrl',
      triggerType: 'TriggerType',
      triggerTag: 'TriggerTag',
      triggerId: 'TriggerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
      triggerName: 'string',
      triggerUrl: 'string',
      triggerType: 'string',
      triggerTag: 'string',
      triggerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepoTriggerResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepoTriggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateRepoTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateRepoTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceEndpointResponseBodyDomains extends $tea.Model {
  type?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceEndpointResponseBodyAclEntries extends $tea.Model {
  comment?: string;
  entry?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      entry: 'Entry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      entry: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceVpcEndpointResponseBodyLinkedVpcs extends $tea.Model {
  status?: string;
  vpcId?: string;
  defaultAccess?: boolean;
  vswitchId?: string;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      vpcId: 'VpcId',
      defaultAccess: 'DefaultAccess',
      vswitchId: 'VswitchId',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      vpcId: 'string',
      defaultAccess: 'boolean',
      vswitchId: 'string',
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoBuildRecordResponseBodyImage extends $tea.Model {
  repoNamespaceName?: string;
  imageTag?: string;
  repoName?: string;
  static names(): { [key: string]: string } {
    return {
      repoNamespaceName: 'RepoNamespaceName',
      imageTag: 'ImageTag',
      repoName: 'RepoName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      repoNamespaceName: 'string',
      imageTag: 'string',
      repoName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoSyncTaskResponseBodyLayerTasks extends $tea.Model {
  syncedSize?: number;
  digest?: string;
  taskStatus?: string;
  size?: number;
  syncLayerTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      syncedSize: 'SyncedSize',
      digest: 'Digest',
      taskStatus: 'TaskStatus',
      size: 'Size',
      syncLayerTaskId: 'SyncLayerTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      syncedSize: 'number',
      digest: 'string',
      taskStatus: 'string',
      size: 'number',
      syncLayerTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoSyncTaskResponseBodyImageFrom extends $tea.Model {
  repoNamespaceName?: string;
  instanceId?: string;
  imageTag?: string;
  repoName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      repoNamespaceName: 'RepoNamespaceName',
      instanceId: 'InstanceId',
      imageTag: 'ImageTag',
      repoName: 'RepoName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      repoNamespaceName: 'string',
      instanceId: 'string',
      imageTag: 'string',
      repoName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoSyncTaskResponseBodyImageTo extends $tea.Model {
  repoNamespaceName?: string;
  instanceId?: string;
  imageTag?: string;
  repoName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      repoNamespaceName: 'RepoNamespaceName',
      instanceId: 'InstanceId',
      imageTag: 'ImageTag',
      repoName: 'RepoName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      repoNamespaceName: 'string',
      instanceId: 'string',
      imageTag: 'string',
      repoName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagLayersResponseBodyLayers extends $tea.Model {
  blobDigest?: string;
  layerIndex?: number;
  layerInstruction?: string;
  layerCMD?: string;
  blobSize?: number;
  static names(): { [key: string]: string } {
    return {
      blobDigest: 'BlobDigest',
      layerIndex: 'LayerIndex',
      layerInstruction: 'LayerInstruction',
      layerCMD: 'LayerCMD',
      blobSize: 'BlobSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blobDigest: 'string',
      layerIndex: 'number',
      layerInstruction: 'string',
      layerCMD: 'string',
      blobSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagManifestResponseBodyManifestHistory extends $tea.Model {
  v1Compatibility?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      v1Compatibility: 'V1Compatibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      v1Compatibility: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagManifestResponseBodyManifestLayers extends $tea.Model {
  digest?: string;
  size?: number;
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      digest: 'Digest',
      size: 'Size',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digest: 'string',
      size: 'number',
      mediaType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagManifestResponseBodyManifestFsLayers extends $tea.Model {
  blobSum?: string;
  static names(): { [key: string]: string } {
    return {
      blobSum: 'BlobSum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blobSum: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagManifestResponseBodyManifestSignatures extends $tea.Model {
  signature?: string;
  protected?: string;
  header?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      signature: 'Signature',
      protected: 'Protected',
      header: 'Header',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signature: 'string',
      protected: 'string',
      header: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagManifestResponseBodyManifestConfig extends $tea.Model {
  digest?: string;
  size?: number;
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      digest: 'Digest',
      size: 'Size',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digest: 'string',
      size: 'number',
      mediaType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagManifestResponseBodyManifest extends $tea.Model {
  history?: GetRepoTagManifestResponseBodyManifestHistory[];
  schemaVersion?: number;
  layers?: GetRepoTagManifestResponseBodyManifestLayers[];
  tag?: string;
  name?: string;
  mediaType?: string;
  fsLayers?: GetRepoTagManifestResponseBodyManifestFsLayers[];
  signatures?: GetRepoTagManifestResponseBodyManifestSignatures[];
  config?: GetRepoTagManifestResponseBodyManifestConfig;
  architecture?: string;
  static names(): { [key: string]: string } {
    return {
      history: 'History',
      schemaVersion: 'SchemaVersion',
      layers: 'Layers',
      tag: 'Tag',
      name: 'Name',
      mediaType: 'MediaType',
      fsLayers: 'FsLayers',
      signatures: 'Signatures',
      config: 'Config',
      architecture: 'Architecture',
    };
  }

  static types(): { [key: string]: any } {
    return {
      history: { 'type': 'array', 'itemType': GetRepoTagManifestResponseBodyManifestHistory },
      schemaVersion: 'number',
      layers: { 'type': 'array', 'itemType': GetRepoTagManifestResponseBodyManifestLayers },
      tag: 'string',
      name: 'string',
      mediaType: 'string',
      fsLayers: { 'type': 'array', 'itemType': GetRepoTagManifestResponseBodyManifestFsLayers },
      signatures: { 'type': 'array', 'itemType': GetRepoTagManifestResponseBodyManifestSignatures },
      config: GetRepoTagManifestResponseBodyManifestConfig,
      architecture: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartNamespaceResponseBodyNamespaces extends $tea.Model {
  defaultRepoType?: string;
  namespaceStatus?: string;
  namespaceId?: string;
  autoCreateRepo?: boolean;
  instanceId?: string;
  namespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      defaultRepoType: 'DefaultRepoType',
      namespaceStatus: 'NamespaceStatus',
      namespaceId: 'NamespaceId',
      autoCreateRepo: 'AutoCreateRepo',
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultRepoType: 'string',
      namespaceStatus: 'string',
      namespaceId: 'string',
      autoCreateRepo: 'boolean',
      instanceId: 'string',
      namespaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartReleaseResponseBodyChartReleases extends $tea.Model {
  status?: string;
  modifiedTime?: number;
  repoId?: string;
  release?: string;
  size?: string;
  instanceId?: string;
  chart?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      modifiedTime: 'ModifiedTime',
      repoId: 'RepoId',
      release: 'Release',
      size: 'Size',
      instanceId: 'InstanceId',
      chart: 'Chart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      modifiedTime: 'number',
      repoId: 'string',
      release: 'string',
      size: 'string',
      instanceId: 'string',
      chart: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartRepositoryResponseBodyRepositories extends $tea.Model {
  summary?: string;
  modifiedTime?: number;
  repoId?: string;
  createTime?: number;
  repoNamespaceName?: string;
  instanceId?: string;
  repoType?: string;
  repoStatus?: string;
  repoName?: string;
  static names(): { [key: string]: string } {
    return {
      summary: 'Summary',
      modifiedTime: 'ModifiedTime',
      repoId: 'RepoId',
      createTime: 'CreateTime',
      repoNamespaceName: 'RepoNamespaceName',
      instanceId: 'InstanceId',
      repoType: 'RepoType',
      repoStatus: 'RepoStatus',
      repoName: 'RepoName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summary: 'string',
      modifiedTime: 'number',
      repoId: 'string',
      createTime: 'number',
      repoNamespaceName: 'string',
      instanceId: 'string',
      repoType: 'string',
      repoStatus: 'string',
      repoName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyInstances extends $tea.Model {
  modifiedTime?: string;
  instanceName?: string;
  createTime?: string;
  instanceSpecification?: string;
  instanceStatus?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      modifiedTime: 'ModifiedTime',
      instanceName: 'InstanceName',
      createTime: 'CreateTime',
      instanceSpecification: 'InstanceSpecification',
      instanceStatus: 'InstanceStatus',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifiedTime: 'string',
      instanceName: 'string',
      createTime: 'string',
      instanceSpecification: 'string',
      instanceStatus: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceEndpointResponseBodyEndpointsDomains extends $tea.Model {
  type?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceEndpointResponseBodyEndpointsLinkedVpcs extends $tea.Model {
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceEndpointResponseBodyEndpointsAclEntries extends $tea.Model {
  entry?: string;
  static names(): { [key: string]: string } {
    return {
      entry: 'Entry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entry: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceEndpointResponseBodyEndpoints extends $tea.Model {
  status?: string;
  domains?: ListInstanceEndpointResponseBodyEndpointsDomains[];
  endpointType?: string;
  linkedVpcs?: ListInstanceEndpointResponseBodyEndpointsLinkedVpcs[];
  aclEnable?: boolean;
  aclEntries?: ListInstanceEndpointResponseBodyEndpointsAclEntries[];
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      domains: 'Domains',
      endpointType: 'EndpointType',
      linkedVpcs: 'LinkedVpcs',
      aclEnable: 'AclEnable',
      aclEntries: 'AclEntries',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      domains: { 'type': 'array', 'itemType': ListInstanceEndpointResponseBodyEndpointsDomains },
      endpointType: 'string',
      linkedVpcs: { 'type': 'array', 'itemType': ListInstanceEndpointResponseBodyEndpointsLinkedVpcs },
      aclEnable: 'boolean',
      aclEntries: { 'type': 'array', 'itemType': ListInstanceEndpointResponseBodyEndpointsAclEntries },
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceRegionResponseBodyRegions extends $tea.Model {
  localName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespaceResponseBodyNamespaces extends $tea.Model {
  defaultRepoType?: string;
  namespaceStatus?: string;
  namespaceId?: string;
  autoCreateRepo?: boolean;
  instanceId?: string;
  namespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      defaultRepoType: 'DefaultRepoType',
      namespaceStatus: 'NamespaceStatus',
      namespaceId: 'NamespaceId',
      autoCreateRepo: 'AutoCreateRepo',
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultRepoType: 'string',
      namespaceStatus: 'string',
      namespaceId: 'string',
      autoCreateRepo: 'boolean',
      instanceId: 'string',
      namespaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRecordResponseBodyBuildRecordsImage extends $tea.Model {
  repoId?: string;
  repoNamespaceName?: string;
  imageTag?: string;
  repoName?: string;
  static names(): { [key: string]: string } {
    return {
      repoId: 'RepoId',
      repoNamespaceName: 'RepoNamespaceName',
      imageTag: 'ImageTag',
      repoName: 'RepoName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      repoId: 'string',
      repoNamespaceName: 'string',
      imageTag: 'string',
      repoName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRecordResponseBodyBuildRecords extends $tea.Model {
  endTime?: string;
  startTime?: string;
  image?: ListRepoBuildRecordResponseBodyBuildRecordsImage;
  buildStatus?: string;
  buildRecordId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      image: 'Image',
      buildStatus: 'BuildStatus',
      buildRecordId: 'BuildRecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      image: ListRepoBuildRecordResponseBodyBuildRecordsImage,
      buildStatus: 'string',
      buildRecordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRecordLogResponseBodyBuildRecordLogs extends $tea.Model {
  lineNumber?: number;
  message?: string;
  buildStage?: string;
  static names(): { [key: string]: string } {
    return {
      lineNumber: 'LineNumber',
      message: 'Message',
      buildStage: 'BuildStage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lineNumber: 'number',
      message: 'string',
      buildStage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRuleResponseBodyBuildRules extends $tea.Model {
  dockerfileLocation?: string;
  buildRuleId?: string;
  pushType?: string;
  pushName?: string;
  imageTag?: string;
  dockerfileName?: string;
  static names(): { [key: string]: string } {
    return {
      dockerfileLocation: 'DockerfileLocation',
      buildRuleId: 'BuildRuleId',
      pushType: 'PushType',
      pushName: 'PushName',
      imageTag: 'ImageTag',
      dockerfileName: 'DockerfileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dockerfileLocation: 'string',
      buildRuleId: 'string',
      pushType: 'string',
      pushName: 'string',
      imageTag: 'string',
      dockerfileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryResponseBodyRepositories extends $tea.Model {
  summary?: string;
  repoBuildType?: string;
  modifiedTime?: number;
  repoId?: string;
  createTime?: number;
  repoNamespaceName?: string;
  tagImmutability?: boolean;
  instanceId?: string;
  repoType?: string;
  repoStatus?: string;
  repoName?: string;
  static names(): { [key: string]: string } {
    return {
      summary: 'Summary',
      repoBuildType: 'RepoBuildType',
      modifiedTime: 'ModifiedTime',
      repoId: 'RepoId',
      createTime: 'CreateTime',
      repoNamespaceName: 'RepoNamespaceName',
      tagImmutability: 'TagImmutability',
      instanceId: 'InstanceId',
      repoType: 'RepoType',
      repoStatus: 'RepoStatus',
      repoName: 'RepoName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summary: 'string',
      repoBuildType: 'string',
      modifiedTime: 'number',
      repoId: 'string',
      createTime: 'number',
      repoNamespaceName: 'string',
      tagImmutability: 'boolean',
      instanceId: 'string',
      repoType: 'string',
      repoStatus: 'string',
      repoName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoSyncRuleResponseBodySyncRules extends $tea.Model {
  syncTrigger?: string;
  createTime?: number;
  localRegionId?: string;
  syncScope?: string;
  tagFilter?: string;
  targetNamespaceName?: string;
  targetRepoName?: string;
  targetInstanceId?: string;
  syncRuleId?: string;
  modifiedTime?: number;
  syncRuleName?: string;
  targetRegionId?: string;
  localInstanceId?: string;
  localNamespaceName?: string;
  localRepoName?: string;
  syncDirection?: string;
  static names(): { [key: string]: string } {
    return {
      syncTrigger: 'SyncTrigger',
      createTime: 'CreateTime',
      localRegionId: 'LocalRegionId',
      syncScope: 'SyncScope',
      tagFilter: 'TagFilter',
      targetNamespaceName: 'TargetNamespaceName',
      targetRepoName: 'TargetRepoName',
      targetInstanceId: 'TargetInstanceId',
      syncRuleId: 'SyncRuleId',
      modifiedTime: 'ModifiedTime',
      syncRuleName: 'SyncRuleName',
      targetRegionId: 'TargetRegionId',
      localInstanceId: 'LocalInstanceId',
      localNamespaceName: 'LocalNamespaceName',
      localRepoName: 'LocalRepoName',
      syncDirection: 'SyncDirection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      syncTrigger: 'string',
      createTime: 'number',
      localRegionId: 'string',
      syncScope: 'string',
      tagFilter: 'string',
      targetNamespaceName: 'string',
      targetRepoName: 'string',
      targetInstanceId: 'string',
      syncRuleId: 'string',
      modifiedTime: 'number',
      syncRuleName: 'string',
      targetRegionId: 'string',
      localInstanceId: 'string',
      localNamespaceName: 'string',
      localRepoName: 'string',
      syncDirection: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoSyncTaskResponseBodySyncTasksImageTo extends $tea.Model {
  repoNamespaceName?: string;
  instanceId?: string;
  imageTag?: string;
  repoName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      repoNamespaceName: 'RepoNamespaceName',
      instanceId: 'InstanceId',
      imageTag: 'ImageTag',
      repoName: 'RepoName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      repoNamespaceName: 'string',
      instanceId: 'string',
      imageTag: 'string',
      repoName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoSyncTaskResponseBodySyncTasksImageFrom extends $tea.Model {
  repoNamespaceName?: string;
  instanceId?: string;
  imageTag?: string;
  repoName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      repoNamespaceName: 'RepoNamespaceName',
      instanceId: 'InstanceId',
      imageTag: 'ImageTag',
      repoName: 'RepoName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      repoNamespaceName: 'string',
      instanceId: 'string',
      imageTag: 'string',
      repoName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoSyncTaskResponseBodySyncTasks extends $tea.Model {
  modifedTime?: number;
  syncRuleId?: string;
  syncTaskId?: string;
  taskStatus?: string;
  createTime?: number;
  syncBatchTaskId?: string;
  taskTrigger?: string;
  imageTo?: ListRepoSyncTaskResponseBodySyncTasksImageTo;
  imageFrom?: ListRepoSyncTaskResponseBodySyncTasksImageFrom;
  static names(): { [key: string]: string } {
    return {
      modifedTime: 'ModifedTime',
      syncRuleId: 'SyncRuleId',
      syncTaskId: 'SyncTaskId',
      taskStatus: 'TaskStatus',
      createTime: 'CreateTime',
      syncBatchTaskId: 'SyncBatchTaskId',
      taskTrigger: 'TaskTrigger',
      imageTo: 'ImageTo',
      imageFrom: 'ImageFrom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifedTime: 'number',
      syncRuleId: 'string',
      syncTaskId: 'string',
      taskStatus: 'string',
      createTime: 'number',
      syncBatchTaskId: 'string',
      taskTrigger: 'string',
      imageTo: ListRepoSyncTaskResponseBodySyncTasksImageTo,
      imageFrom: ListRepoSyncTaskResponseBodySyncTasksImageFrom,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTagResponseBodyImages extends $tea.Model {
  status?: string;
  imageSize?: number;
  imageCreate?: string;
  digest?: string;
  imageUpdate?: string;
  tag?: string;
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      imageSize: 'ImageSize',
      imageCreate: 'ImageCreate',
      digest: 'Digest',
      imageUpdate: 'ImageUpdate',
      tag: 'Tag',
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      imageSize: 'number',
      imageCreate: 'string',
      digest: 'string',
      imageUpdate: 'string',
      tag: 'string',
      imageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTagScanResultResponseBodyVulnerabilities extends $tea.Model {
  severity?: string;
  addedBy?: string;
  cveName?: string;
  description?: string;
  feature?: string;
  version?: string;
  versionFormat?: string;
  cveLink?: string;
  versionFixed?: string;
  static names(): { [key: string]: string } {
    return {
      severity: 'Severity',
      addedBy: 'AddedBy',
      cveName: 'CveName',
      description: 'Description',
      feature: 'Feature',
      version: 'Version',
      versionFormat: 'VersionFormat',
      cveLink: 'CveLink',
      versionFixed: 'VersionFixed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      severity: 'string',
      addedBy: 'string',
      cveName: 'string',
      description: 'string',
      feature: 'string',
      version: 'string',
      versionFormat: 'string',
      cveLink: 'string',
      versionFixed: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTriggerResponseBodyTriggers extends $tea.Model {
  triggerName?: string;
  repoEvent?: string;
  triggerId?: string;
  triggerUrl?: string;
  triggerType?: string;
  triggerTag?: string;
  static names(): { [key: string]: string } {
    return {
      triggerName: 'TriggerName',
      repoEvent: 'RepoEvent',
      triggerId: 'TriggerId',
      triggerUrl: 'TriggerUrl',
      triggerType: 'TriggerType',
      triggerTag: 'TriggerTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      triggerName: 'string',
      repoEvent: 'string',
      triggerId: 'string',
      triggerUrl: 'string',
      triggerType: 'string',
      triggerTag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTriggerRecordResponseBodyRepoTriggerRecords extends $tea.Model {
  requestHeaders?: string;
  responseHeaders?: string;
  triggerName?: string;
  triggerLogId?: string;
  requestBody?: string;
  triggerUrl?: string;
  responseBody?: string;
  triggerTag?: string;
  triggerType?: string;
  statusCode?: string;
  repoEvent?: string;
  triggerId?: string;
  requestTime?: number;
  static names(): { [key: string]: string } {
    return {
      requestHeaders: 'RequestHeaders',
      responseHeaders: 'ResponseHeaders',
      triggerName: 'TriggerName',
      triggerLogId: 'TriggerLogId',
      requestBody: 'RequestBody',
      triggerUrl: 'TriggerUrl',
      responseBody: 'ResponseBody',
      triggerTag: 'TriggerTag',
      triggerType: 'TriggerType',
      statusCode: 'StatusCode',
      repoEvent: 'RepoEvent',
      triggerId: 'TriggerId',
      requestTime: 'RequestTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestHeaders: 'string',
      responseHeaders: 'string',
      triggerName: 'string',
      triggerLogId: 'string',
      requestBody: 'string',
      triggerUrl: 'string',
      responseBody: 'string',
      triggerTag: 'string',
      triggerType: 'string',
      statusCode: 'string',
      repoEvent: 'string',
      triggerId: 'string',
      requestTime: 'number',
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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cr", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async cancelRepoBuildRecordWithOptions(request: CancelRepoBuildRecordRequest, runtime: $Util.RuntimeOptions): Promise<CancelRepoBuildRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelRepoBuildRecordResponse>(await this.doRPCRequest("CancelRepoBuildRecord", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new CancelRepoBuildRecordResponse({}));
  }

  async cancelRepoBuildRecord(request: CancelRepoBuildRecordRequest): Promise<CancelRepoBuildRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelRepoBuildRecordWithOptions(request, runtime);
  }

  async createBuildRecordByRuleWithOptions(request: CreateBuildRecordByRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateBuildRecordByRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateBuildRecordByRuleResponse>(await this.doRPCRequest("CreateBuildRecordByRule", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateBuildRecordByRuleResponse({}));
  }

  async createBuildRecordByRule(request: CreateBuildRecordByRuleRequest): Promise<CreateBuildRecordByRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBuildRecordByRuleWithOptions(request, runtime);
  }

  async createChartNamespaceWithOptions(request: CreateChartNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<CreateChartNamespaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateChartNamespaceResponse>(await this.doRPCRequest("CreateChartNamespace", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateChartNamespaceResponse({}));
  }

  async createChartNamespace(request: CreateChartNamespaceRequest): Promise<CreateChartNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createChartNamespaceWithOptions(request, runtime);
  }

  async createChartRepositoryWithOptions(request: CreateChartRepositoryRequest, runtime: $Util.RuntimeOptions): Promise<CreateChartRepositoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateChartRepositoryResponse>(await this.doRPCRequest("CreateChartRepository", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateChartRepositoryResponse({}));
  }

  async createChartRepository(request: CreateChartRepositoryRequest): Promise<CreateChartRepositoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createChartRepositoryWithOptions(request, runtime);
  }

  async createInstanceEndpointAclPolicyWithOptions(request: CreateInstanceEndpointAclPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceEndpointAclPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateInstanceEndpointAclPolicyResponse>(await this.doRPCRequest("CreateInstanceEndpointAclPolicy", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateInstanceEndpointAclPolicyResponse({}));
  }

  async createInstanceEndpointAclPolicy(request: CreateInstanceEndpointAclPolicyRequest): Promise<CreateInstanceEndpointAclPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceEndpointAclPolicyWithOptions(request, runtime);
  }

  async createInstanceVpcEndpointLinkedVpcWithOptions(request: CreateInstanceVpcEndpointLinkedVpcRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceVpcEndpointLinkedVpcResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateInstanceVpcEndpointLinkedVpcResponse>(await this.doRPCRequest("CreateInstanceVpcEndpointLinkedVpc", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateInstanceVpcEndpointLinkedVpcResponse({}));
  }

  async createInstanceVpcEndpointLinkedVpc(request: CreateInstanceVpcEndpointLinkedVpcRequest): Promise<CreateInstanceVpcEndpointLinkedVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceVpcEndpointLinkedVpcWithOptions(request, runtime);
  }

  async createNamespaceWithOptions(request: CreateNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<CreateNamespaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateNamespaceResponse>(await this.doRPCRequest("CreateNamespace", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateNamespaceResponse({}));
  }

  async createNamespace(request: CreateNamespaceRequest): Promise<CreateNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNamespaceWithOptions(request, runtime);
  }

  async createRepoBuildRuleWithOptions(request: CreateRepoBuildRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateRepoBuildRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRepoBuildRuleResponse>(await this.doRPCRequest("CreateRepoBuildRule", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRepoBuildRuleResponse({}));
  }

  async createRepoBuildRule(request: CreateRepoBuildRuleRequest): Promise<CreateRepoBuildRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRepoBuildRuleWithOptions(request, runtime);
  }

  async createRepositoryWithOptions(request: CreateRepositoryRequest, runtime: $Util.RuntimeOptions): Promise<CreateRepositoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRepositoryResponse>(await this.doRPCRequest("CreateRepository", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRepositoryResponse({}));
  }

  async createRepository(request: CreateRepositoryRequest): Promise<CreateRepositoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRepositoryWithOptions(request, runtime);
  }

  async createRepoSyncRuleWithOptions(request: CreateRepoSyncRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateRepoSyncRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRepoSyncRuleResponse>(await this.doRPCRequest("CreateRepoSyncRule", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRepoSyncRuleResponse({}));
  }

  async createRepoSyncRule(request: CreateRepoSyncRuleRequest): Promise<CreateRepoSyncRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRepoSyncRuleWithOptions(request, runtime);
  }

  async createRepoSyncTaskByRuleWithOptions(request: CreateRepoSyncTaskByRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateRepoSyncTaskByRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRepoSyncTaskByRuleResponse>(await this.doRPCRequest("CreateRepoSyncTaskByRule", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRepoSyncTaskByRuleResponse({}));
  }

  async createRepoSyncTaskByRule(request: CreateRepoSyncTaskByRuleRequest): Promise<CreateRepoSyncTaskByRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRepoSyncTaskByRuleWithOptions(request, runtime);
  }

  async createRepoTagScanTaskWithOptions(request: CreateRepoTagScanTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateRepoTagScanTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRepoTagScanTaskResponse>(await this.doRPCRequest("CreateRepoTagScanTask", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRepoTagScanTaskResponse({}));
  }

  async createRepoTagScanTask(request: CreateRepoTagScanTaskRequest): Promise<CreateRepoTagScanTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRepoTagScanTaskWithOptions(request, runtime);
  }

  async createRepoTriggerWithOptions(request: CreateRepoTriggerRequest, runtime: $Util.RuntimeOptions): Promise<CreateRepoTriggerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRepoTriggerResponse>(await this.doRPCRequest("CreateRepoTrigger", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRepoTriggerResponse({}));
  }

  async createRepoTrigger(request: CreateRepoTriggerRequest): Promise<CreateRepoTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRepoTriggerWithOptions(request, runtime);
  }

  async deleteChartNamespaceWithOptions(request: DeleteChartNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteChartNamespaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteChartNamespaceResponse>(await this.doRPCRequest("DeleteChartNamespace", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteChartNamespaceResponse({}));
  }

  async deleteChartNamespace(request: DeleteChartNamespaceRequest): Promise<DeleteChartNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteChartNamespaceWithOptions(request, runtime);
  }

  async deleteChartReleaseWithOptions(request: DeleteChartReleaseRequest, runtime: $Util.RuntimeOptions): Promise<DeleteChartReleaseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteChartReleaseResponse>(await this.doRPCRequest("DeleteChartRelease", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteChartReleaseResponse({}));
  }

  async deleteChartRelease(request: DeleteChartReleaseRequest): Promise<DeleteChartReleaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteChartReleaseWithOptions(request, runtime);
  }

  async deleteChartRepositoryWithOptions(request: DeleteChartRepositoryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteChartRepositoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteChartRepositoryResponse>(await this.doRPCRequest("DeleteChartRepository", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteChartRepositoryResponse({}));
  }

  async deleteChartRepository(request: DeleteChartRepositoryRequest): Promise<DeleteChartRepositoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteChartRepositoryWithOptions(request, runtime);
  }

  async deleteInstanceEndpointAclPolicyWithOptions(request: DeleteInstanceEndpointAclPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceEndpointAclPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteInstanceEndpointAclPolicyResponse>(await this.doRPCRequest("DeleteInstanceEndpointAclPolicy", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteInstanceEndpointAclPolicyResponse({}));
  }

  async deleteInstanceEndpointAclPolicy(request: DeleteInstanceEndpointAclPolicyRequest): Promise<DeleteInstanceEndpointAclPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInstanceEndpointAclPolicyWithOptions(request, runtime);
  }

  async deleteInstanceVpcEndpointLinkedVpcWithOptions(request: DeleteInstanceVpcEndpointLinkedVpcRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceVpcEndpointLinkedVpcResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteInstanceVpcEndpointLinkedVpcResponse>(await this.doRPCRequest("DeleteInstanceVpcEndpointLinkedVpc", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteInstanceVpcEndpointLinkedVpcResponse({}));
  }

  async deleteInstanceVpcEndpointLinkedVpc(request: DeleteInstanceVpcEndpointLinkedVpcRequest): Promise<DeleteInstanceVpcEndpointLinkedVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInstanceVpcEndpointLinkedVpcWithOptions(request, runtime);
  }

  async deleteNamespaceWithOptions(request: DeleteNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNamespaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteNamespaceResponse>(await this.doRPCRequest("DeleteNamespace", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteNamespaceResponse({}));
  }

  async deleteNamespace(request: DeleteNamespaceRequest): Promise<DeleteNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNamespaceWithOptions(request, runtime);
  }

  async deleteRepoBuildRuleWithOptions(request: DeleteRepoBuildRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRepoBuildRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRepoBuildRuleResponse>(await this.doRPCRequest("DeleteRepoBuildRule", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRepoBuildRuleResponse({}));
  }

  async deleteRepoBuildRule(request: DeleteRepoBuildRuleRequest): Promise<DeleteRepoBuildRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRepoBuildRuleWithOptions(request, runtime);
  }

  async deleteRepositoryWithOptions(request: DeleteRepositoryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRepositoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRepositoryResponse>(await this.doRPCRequest("DeleteRepository", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRepositoryResponse({}));
  }

  async deleteRepository(request: DeleteRepositoryRequest): Promise<DeleteRepositoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRepositoryWithOptions(request, runtime);
  }

  async deleteRepoSyncRuleWithOptions(request: DeleteRepoSyncRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRepoSyncRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRepoSyncRuleResponse>(await this.doRPCRequest("DeleteRepoSyncRule", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRepoSyncRuleResponse({}));
  }

  async deleteRepoSyncRule(request: DeleteRepoSyncRuleRequest): Promise<DeleteRepoSyncRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRepoSyncRuleWithOptions(request, runtime);
  }

  async deleteRepoTagWithOptions(request: DeleteRepoTagRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRepoTagResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRepoTagResponse>(await this.doRPCRequest("DeleteRepoTag", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRepoTagResponse({}));
  }

  async deleteRepoTag(request: DeleteRepoTagRequest): Promise<DeleteRepoTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRepoTagWithOptions(request, runtime);
  }

  async deleteRepoTriggerWithOptions(request: DeleteRepoTriggerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRepoTriggerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRepoTriggerResponse>(await this.doRPCRequest("DeleteRepoTrigger", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRepoTriggerResponse({}));
  }

  async deleteRepoTrigger(request: DeleteRepoTriggerRequest): Promise<DeleteRepoTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRepoTriggerWithOptions(request, runtime);
  }

  async getAuthorizationTokenWithOptions(request: GetAuthorizationTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetAuthorizationTokenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAuthorizationTokenResponse>(await this.doRPCRequest("GetAuthorizationToken", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetAuthorizationTokenResponse({}));
  }

  async getAuthorizationToken(request: GetAuthorizationTokenRequest): Promise<GetAuthorizationTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAuthorizationTokenWithOptions(request, runtime);
  }

  async getChartNamespaceWithOptions(request: GetChartNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<GetChartNamespaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetChartNamespaceResponse>(await this.doRPCRequest("GetChartNamespace", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetChartNamespaceResponse({}));
  }

  async getChartNamespace(request: GetChartNamespaceRequest): Promise<GetChartNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getChartNamespaceWithOptions(request, runtime);
  }

  async getChartRepositoryWithOptions(request: GetChartRepositoryRequest, runtime: $Util.RuntimeOptions): Promise<GetChartRepositoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetChartRepositoryResponse>(await this.doRPCRequest("GetChartRepository", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetChartRepositoryResponse({}));
  }

  async getChartRepository(request: GetChartRepositoryRequest): Promise<GetChartRepositoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getChartRepositoryWithOptions(request, runtime);
  }

  async getInstanceWithOptions(request: GetInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetInstanceResponse>(await this.doRPCRequest("GetInstance", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetInstanceResponse({}));
  }

  async getInstance(request: GetInstanceRequest): Promise<GetInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceWithOptions(request, runtime);
  }

  async getInstanceCountWithOptions(runtime: $Util.RuntimeOptions): Promise<GetInstanceCountResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<GetInstanceCountResponse>(await this.doRPCRequest("GetInstanceCount", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetInstanceCountResponse({}));
  }

  async getInstanceCount(): Promise<GetInstanceCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceCountWithOptions(runtime);
  }

  async getInstanceEndpointWithOptions(request: GetInstanceEndpointRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceEndpointResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetInstanceEndpointResponse>(await this.doRPCRequest("GetInstanceEndpoint", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetInstanceEndpointResponse({}));
  }

  async getInstanceEndpoint(request: GetInstanceEndpointRequest): Promise<GetInstanceEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceEndpointWithOptions(request, runtime);
  }

  async getInstanceUsageWithOptions(request: GetInstanceUsageRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceUsageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetInstanceUsageResponse>(await this.doRPCRequest("GetInstanceUsage", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetInstanceUsageResponse({}));
  }

  async getInstanceUsage(request: GetInstanceUsageRequest): Promise<GetInstanceUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceUsageWithOptions(request, runtime);
  }

  async getInstanceVpcEndpointWithOptions(request: GetInstanceVpcEndpointRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceVpcEndpointResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetInstanceVpcEndpointResponse>(await this.doRPCRequest("GetInstanceVpcEndpoint", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetInstanceVpcEndpointResponse({}));
  }

  async getInstanceVpcEndpoint(request: GetInstanceVpcEndpointRequest): Promise<GetInstanceVpcEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceVpcEndpointWithOptions(request, runtime);
  }

  async getNamespaceWithOptions(request: GetNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<GetNamespaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetNamespaceResponse>(await this.doRPCRequest("GetNamespace", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetNamespaceResponse({}));
  }

  async getNamespace(request: GetNamespaceRequest): Promise<GetNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNamespaceWithOptions(request, runtime);
  }

  async getRepoBuildRecordWithOptions(request: GetRepoBuildRecordRequest, runtime: $Util.RuntimeOptions): Promise<GetRepoBuildRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRepoBuildRecordResponse>(await this.doRPCRequest("GetRepoBuildRecord", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetRepoBuildRecordResponse({}));
  }

  async getRepoBuildRecord(request: GetRepoBuildRecordRequest): Promise<GetRepoBuildRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRepoBuildRecordWithOptions(request, runtime);
  }

  async getRepoBuildRecordStatusWithOptions(request: GetRepoBuildRecordStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetRepoBuildRecordStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRepoBuildRecordStatusResponse>(await this.doRPCRequest("GetRepoBuildRecordStatus", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetRepoBuildRecordStatusResponse({}));
  }

  async getRepoBuildRecordStatus(request: GetRepoBuildRecordStatusRequest): Promise<GetRepoBuildRecordStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRepoBuildRecordStatusWithOptions(request, runtime);
  }

  async getRepositoryWithOptions(request: GetRepositoryRequest, runtime: $Util.RuntimeOptions): Promise<GetRepositoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRepositoryResponse>(await this.doRPCRequest("GetRepository", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetRepositoryResponse({}));
  }

  async getRepository(request: GetRepositoryRequest): Promise<GetRepositoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRepositoryWithOptions(request, runtime);
  }

  async getRepoSyncTaskWithOptions(request: GetRepoSyncTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetRepoSyncTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRepoSyncTaskResponse>(await this.doRPCRequest("GetRepoSyncTask", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetRepoSyncTaskResponse({}));
  }

  async getRepoSyncTask(request: GetRepoSyncTaskRequest): Promise<GetRepoSyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRepoSyncTaskWithOptions(request, runtime);
  }

  async getRepoTagLayersWithOptions(request: GetRepoTagLayersRequest, runtime: $Util.RuntimeOptions): Promise<GetRepoTagLayersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRepoTagLayersResponse>(await this.doRPCRequest("GetRepoTagLayers", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetRepoTagLayersResponse({}));
  }

  async getRepoTagLayers(request: GetRepoTagLayersRequest): Promise<GetRepoTagLayersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRepoTagLayersWithOptions(request, runtime);
  }

  async getRepoTagManifestWithOptions(request: GetRepoTagManifestRequest, runtime: $Util.RuntimeOptions): Promise<GetRepoTagManifestResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRepoTagManifestResponse>(await this.doRPCRequest("GetRepoTagManifest", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetRepoTagManifestResponse({}));
  }

  async getRepoTagManifest(request: GetRepoTagManifestRequest): Promise<GetRepoTagManifestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRepoTagManifestWithOptions(request, runtime);
  }

  async getRepoTagScanStatusWithOptions(request: GetRepoTagScanStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetRepoTagScanStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRepoTagScanStatusResponse>(await this.doRPCRequest("GetRepoTagScanStatus", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetRepoTagScanStatusResponse({}));
  }

  async getRepoTagScanStatus(request: GetRepoTagScanStatusRequest): Promise<GetRepoTagScanStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRepoTagScanStatusWithOptions(request, runtime);
  }

  async getRepoTagScanSummaryWithOptions(request: GetRepoTagScanSummaryRequest, runtime: $Util.RuntimeOptions): Promise<GetRepoTagScanSummaryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRepoTagScanSummaryResponse>(await this.doRPCRequest("GetRepoTagScanSummary", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetRepoTagScanSummaryResponse({}));
  }

  async getRepoTagScanSummary(request: GetRepoTagScanSummaryRequest): Promise<GetRepoTagScanSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRepoTagScanSummaryWithOptions(request, runtime);
  }

  async listChartNamespaceWithOptions(request: ListChartNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<ListChartNamespaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListChartNamespaceResponse>(await this.doRPCRequest("ListChartNamespace", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListChartNamespaceResponse({}));
  }

  async listChartNamespace(request: ListChartNamespaceRequest): Promise<ListChartNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listChartNamespaceWithOptions(request, runtime);
  }

  async listChartReleaseWithOptions(request: ListChartReleaseRequest, runtime: $Util.RuntimeOptions): Promise<ListChartReleaseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListChartReleaseResponse>(await this.doRPCRequest("ListChartRelease", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListChartReleaseResponse({}));
  }

  async listChartRelease(request: ListChartReleaseRequest): Promise<ListChartReleaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listChartReleaseWithOptions(request, runtime);
  }

  async listChartRepositoryWithOptions(request: ListChartRepositoryRequest, runtime: $Util.RuntimeOptions): Promise<ListChartRepositoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListChartRepositoryResponse>(await this.doRPCRequest("ListChartRepository", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListChartRepositoryResponse({}));
  }

  async listChartRepository(request: ListChartRepositoryRequest): Promise<ListChartRepositoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listChartRepositoryWithOptions(request, runtime);
  }

  async listInstanceWithOptions(request: ListInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ListInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListInstanceResponse>(await this.doRPCRequest("ListInstance", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListInstanceResponse({}));
  }

  async listInstance(request: ListInstanceRequest): Promise<ListInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstanceWithOptions(request, runtime);
  }

  async listInstanceEndpointWithOptions(request: ListInstanceEndpointRequest, runtime: $Util.RuntimeOptions): Promise<ListInstanceEndpointResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListInstanceEndpointResponse>(await this.doRPCRequest("ListInstanceEndpoint", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListInstanceEndpointResponse({}));
  }

  async listInstanceEndpoint(request: ListInstanceEndpointRequest): Promise<ListInstanceEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstanceEndpointWithOptions(request, runtime);
  }

  async listInstanceRegionWithOptions(request: ListInstanceRegionRequest, runtime: $Util.RuntimeOptions): Promise<ListInstanceRegionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListInstanceRegionResponse>(await this.doRPCRequest("ListInstanceRegion", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListInstanceRegionResponse({}));
  }

  async listInstanceRegion(request: ListInstanceRegionRequest): Promise<ListInstanceRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstanceRegionWithOptions(request, runtime);
  }

  async listNamespaceWithOptions(request: ListNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<ListNamespaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListNamespaceResponse>(await this.doRPCRequest("ListNamespace", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListNamespaceResponse({}));
  }

  async listNamespace(request: ListNamespaceRequest): Promise<ListNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNamespaceWithOptions(request, runtime);
  }

  async listRepoBuildRecordWithOptions(request: ListRepoBuildRecordRequest, runtime: $Util.RuntimeOptions): Promise<ListRepoBuildRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRepoBuildRecordResponse>(await this.doRPCRequest("ListRepoBuildRecord", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListRepoBuildRecordResponse({}));
  }

  async listRepoBuildRecord(request: ListRepoBuildRecordRequest): Promise<ListRepoBuildRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRepoBuildRecordWithOptions(request, runtime);
  }

  async listRepoBuildRecordLogWithOptions(request: ListRepoBuildRecordLogRequest, runtime: $Util.RuntimeOptions): Promise<ListRepoBuildRecordLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRepoBuildRecordLogResponse>(await this.doRPCRequest("ListRepoBuildRecordLog", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListRepoBuildRecordLogResponse({}));
  }

  async listRepoBuildRecordLog(request: ListRepoBuildRecordLogRequest): Promise<ListRepoBuildRecordLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRepoBuildRecordLogWithOptions(request, runtime);
  }

  async listRepoBuildRuleWithOptions(request: ListRepoBuildRuleRequest, runtime: $Util.RuntimeOptions): Promise<ListRepoBuildRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRepoBuildRuleResponse>(await this.doRPCRequest("ListRepoBuildRule", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListRepoBuildRuleResponse({}));
  }

  async listRepoBuildRule(request: ListRepoBuildRuleRequest): Promise<ListRepoBuildRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRepoBuildRuleWithOptions(request, runtime);
  }

  async listRepositoryWithOptions(request: ListRepositoryRequest, runtime: $Util.RuntimeOptions): Promise<ListRepositoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRepositoryResponse>(await this.doRPCRequest("ListRepository", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListRepositoryResponse({}));
  }

  async listRepository(request: ListRepositoryRequest): Promise<ListRepositoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRepositoryWithOptions(request, runtime);
  }

  async listRepoSyncRuleWithOptions(request: ListRepoSyncRuleRequest, runtime: $Util.RuntimeOptions): Promise<ListRepoSyncRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRepoSyncRuleResponse>(await this.doRPCRequest("ListRepoSyncRule", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListRepoSyncRuleResponse({}));
  }

  async listRepoSyncRule(request: ListRepoSyncRuleRequest): Promise<ListRepoSyncRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRepoSyncRuleWithOptions(request, runtime);
  }

  async listRepoSyncTaskWithOptions(request: ListRepoSyncTaskRequest, runtime: $Util.RuntimeOptions): Promise<ListRepoSyncTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRepoSyncTaskResponse>(await this.doRPCRequest("ListRepoSyncTask", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListRepoSyncTaskResponse({}));
  }

  async listRepoSyncTask(request: ListRepoSyncTaskRequest): Promise<ListRepoSyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRepoSyncTaskWithOptions(request, runtime);
  }

  async listRepoTagWithOptions(request: ListRepoTagRequest, runtime: $Util.RuntimeOptions): Promise<ListRepoTagResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRepoTagResponse>(await this.doRPCRequest("ListRepoTag", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListRepoTagResponse({}));
  }

  async listRepoTag(request: ListRepoTagRequest): Promise<ListRepoTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRepoTagWithOptions(request, runtime);
  }

  async listRepoTagScanResultWithOptions(request: ListRepoTagScanResultRequest, runtime: $Util.RuntimeOptions): Promise<ListRepoTagScanResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRepoTagScanResultResponse>(await this.doRPCRequest("ListRepoTagScanResult", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListRepoTagScanResultResponse({}));
  }

  async listRepoTagScanResult(request: ListRepoTagScanResultRequest): Promise<ListRepoTagScanResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRepoTagScanResultWithOptions(request, runtime);
  }

  async listRepoTriggerWithOptions(request: ListRepoTriggerRequest, runtime: $Util.RuntimeOptions): Promise<ListRepoTriggerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRepoTriggerResponse>(await this.doRPCRequest("ListRepoTrigger", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListRepoTriggerResponse({}));
  }

  async listRepoTrigger(request: ListRepoTriggerRequest): Promise<ListRepoTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRepoTriggerWithOptions(request, runtime);
  }

  async listRepoTriggerRecordWithOptions(request: ListRepoTriggerRecordRequest, runtime: $Util.RuntimeOptions): Promise<ListRepoTriggerRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRepoTriggerRecordResponse>(await this.doRPCRequest("ListRepoTriggerRecord", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListRepoTriggerRecordResponse({}));
  }

  async listRepoTriggerRecord(request: ListRepoTriggerRecordRequest): Promise<ListRepoTriggerRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRepoTriggerRecordWithOptions(request, runtime);
  }

  async resetLoginPasswordWithOptions(request: ResetLoginPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ResetLoginPasswordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResetLoginPasswordResponse>(await this.doRPCRequest("ResetLoginPassword", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ResetLoginPasswordResponse({}));
  }

  async resetLoginPassword(request: ResetLoginPasswordRequest): Promise<ResetLoginPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetLoginPasswordWithOptions(request, runtime);
  }

  async updateChartNamespaceWithOptions(request: UpdateChartNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateChartNamespaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateChartNamespaceResponse>(await this.doRPCRequest("UpdateChartNamespace", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateChartNamespaceResponse({}));
  }

  async updateChartNamespace(request: UpdateChartNamespaceRequest): Promise<UpdateChartNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateChartNamespaceWithOptions(request, runtime);
  }

  async updateChartRepositoryWithOptions(request: UpdateChartRepositoryRequest, runtime: $Util.RuntimeOptions): Promise<UpdateChartRepositoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateChartRepositoryResponse>(await this.doRPCRequest("UpdateChartRepository", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateChartRepositoryResponse({}));
  }

  async updateChartRepository(request: UpdateChartRepositoryRequest): Promise<UpdateChartRepositoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateChartRepositoryWithOptions(request, runtime);
  }

  async updateInstanceEndpointStatusWithOptions(request: UpdateInstanceEndpointStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceEndpointStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateInstanceEndpointStatusResponse>(await this.doRPCRequest("UpdateInstanceEndpointStatus", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateInstanceEndpointStatusResponse({}));
  }

  async updateInstanceEndpointStatus(request: UpdateInstanceEndpointStatusRequest): Promise<UpdateInstanceEndpointStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateInstanceEndpointStatusWithOptions(request, runtime);
  }

  async updateNamespaceWithOptions(request: UpdateNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateNamespaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateNamespaceResponse>(await this.doRPCRequest("UpdateNamespace", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateNamespaceResponse({}));
  }

  async updateNamespace(request: UpdateNamespaceRequest): Promise<UpdateNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateNamespaceWithOptions(request, runtime);
  }

  async updateRepoBuildRuleWithOptions(request: UpdateRepoBuildRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRepoBuildRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateRepoBuildRuleResponse>(await this.doRPCRequest("UpdateRepoBuildRule", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateRepoBuildRuleResponse({}));
  }

  async updateRepoBuildRule(request: UpdateRepoBuildRuleRequest): Promise<UpdateRepoBuildRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRepoBuildRuleWithOptions(request, runtime);
  }

  async updateRepositoryWithOptions(request: UpdateRepositoryRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRepositoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateRepositoryResponse>(await this.doRPCRequest("UpdateRepository", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateRepositoryResponse({}));
  }

  async updateRepository(request: UpdateRepositoryRequest): Promise<UpdateRepositoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRepositoryWithOptions(request, runtime);
  }

  async updateRepoTriggerWithOptions(request: UpdateRepoTriggerRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRepoTriggerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateRepoTriggerResponse>(await this.doRPCRequest("UpdateRepoTrigger", "2018-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateRepoTriggerResponse({}));
  }

  async updateRepoTrigger(request: UpdateRepoTriggerRequest): Promise<UpdateRepoTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRepoTriggerWithOptions(request, runtime);
  }

}
