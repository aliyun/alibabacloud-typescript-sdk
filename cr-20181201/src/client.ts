// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CancelArtifactBuildTaskRequest extends $tea.Model {
  buildTaskId?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      buildTaskId: 'BuildTaskId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildTaskId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelArtifactBuildTaskResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelArtifactBuildTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelArtifactBuildTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelArtifactBuildTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRepoBuildRecordRequest extends $tea.Model {
  buildRecordId?: string;
  instanceId?: string;
  regionId?: string;
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      buildRecordId: 'BuildRecordId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRecordId: 'string',
      instanceId: 'string',
      regionId: 'string',
      repoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRepoBuildRecordResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
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
  buildRuleId?: string;
  instanceId?: string;
  regionId?: string;
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      buildRuleId: 'BuildRuleId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRuleId: 'string',
      instanceId: 'string',
      regionId: 'string',
      repoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBuildRecordByRuleResponseBody extends $tea.Model {
  buildRecordId?: string;
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      buildRecordId: 'BuildRecordId',
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRecordId: 'string',
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
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

export class CreateChainRequest extends $tea.Model {
  chainConfig?: string;
  description?: string;
  instanceId?: string;
  name?: string;
  regionId?: string;
  repoName?: string;
  repoNamespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      chainConfig: 'ChainConfig',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      regionId: 'RegionId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainConfig: 'string',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      regionId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChainResponseBody extends $tea.Model {
  chainId?: string;
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      chainId: 'ChainId',
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainId: 'string',
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateChainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateChainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChartNamespaceRequest extends $tea.Model {
  autoCreateRepo?: boolean;
  defaultRepoType?: string;
  instanceId?: string;
  namespaceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreateRepo: 'AutoCreateRepo',
      defaultRepoType: 'DefaultRepoType',
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreateRepo: 'boolean',
      defaultRepoType: 'string',
      instanceId: 'string',
      namespaceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChartNamespaceResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
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
  regionId?: string;
  repoName?: string;
  repoNamespaceName?: string;
  repoType?: string;
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      repoType: 'RepoType',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
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
  code?: string;
  isSuccess?: boolean;
  repoId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      repoId: 'RepoId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      repoId: 'string',
      requestId: 'string',
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
  comment?: string;
  endpointType?: string;
  entry?: string;
  instanceId?: string;
  moduleName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      endpointType: 'EndpointType',
      entry: 'Entry',
      instanceId: 'InstanceId',
      moduleName: 'ModuleName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      endpointType: 'string',
      entry: 'string',
      instanceId: 'string',
      moduleName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceEndpointAclPolicyResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
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
  moduleName?: string;
  regionId?: string;
  vpcId?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      moduleName: 'ModuleName',
      regionId: 'RegionId',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      moduleName: 'string',
      regionId: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceVpcEndpointLinkedVpcResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
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
  autoCreateRepo?: boolean;
  defaultRepoType?: string;
  instanceId?: string;
  namespaceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreateRepo: 'AutoCreateRepo',
      defaultRepoType: 'DefaultRepoType',
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreateRepo: 'boolean',
      defaultRepoType: 'string',
      instanceId: 'string',
      namespaceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
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
  dockerfileLocation?: string;
  dockerfileName?: string;
  imageTag?: string;
  instanceId?: string;
  pushName?: string;
  pushType?: string;
  regionId?: string;
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      dockerfileLocation: 'DockerfileLocation',
      dockerfileName: 'DockerfileName',
      imageTag: 'ImageTag',
      instanceId: 'InstanceId',
      pushName: 'PushName',
      pushType: 'PushType',
      regionId: 'RegionId',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dockerfileLocation: 'string',
      dockerfileName: 'string',
      imageTag: 'string',
      instanceId: 'string',
      pushName: 'string',
      pushType: 'string',
      regionId: 'string',
      repoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoBuildRuleResponseBody extends $tea.Model {
  buildRuleId?: string;
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      buildRuleId: 'BuildRuleId',
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRuleId: 'string',
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
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

export class CreateRepoSourceCodeRepoRequest extends $tea.Model {
  autoBuild?: boolean;
  codeRepoName?: string;
  codeRepoNamespaceName?: string;
  codeRepoType?: string;
  disableCacheBuild?: boolean;
  instanceId?: string;
  overseaBuild?: boolean;
  regionId?: string;
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      autoBuild: 'AutoBuild',
      codeRepoName: 'CodeRepoName',
      codeRepoNamespaceName: 'CodeRepoNamespaceName',
      codeRepoType: 'CodeRepoType',
      disableCacheBuild: 'DisableCacheBuild',
      instanceId: 'InstanceId',
      overseaBuild: 'OverseaBuild',
      regionId: 'RegionId',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuild: 'boolean',
      codeRepoName: 'string',
      codeRepoNamespaceName: 'string',
      codeRepoType: 'string',
      disableCacheBuild: 'boolean',
      instanceId: 'string',
      overseaBuild: 'boolean',
      regionId: 'string',
      repoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoSourceCodeRepoResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoSourceCodeRepoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRepoSourceCodeRepoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRepoSourceCodeRepoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoSyncRuleRequest extends $tea.Model {
  instanceId?: string;
  namespaceName?: string;
  regionId?: string;
  repoName?: string;
  syncRuleName?: string;
  syncScope?: string;
  syncTrigger?: string;
  tagFilter?: string;
  targetInstanceId?: string;
  targetNamespaceName?: string;
  targetRegionId?: string;
  targetRepoName?: string;
  targetUserId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      regionId: 'RegionId',
      repoName: 'RepoName',
      syncRuleName: 'SyncRuleName',
      syncScope: 'SyncScope',
      syncTrigger: 'SyncTrigger',
      tagFilter: 'TagFilter',
      targetInstanceId: 'TargetInstanceId',
      targetNamespaceName: 'TargetNamespaceName',
      targetRegionId: 'TargetRegionId',
      targetRepoName: 'TargetRepoName',
      targetUserId: 'TargetUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespaceName: 'string',
      regionId: 'string',
      repoName: 'string',
      syncRuleName: 'string',
      syncScope: 'string',
      syncTrigger: 'string',
      tagFilter: 'string',
      targetInstanceId: 'string',
      targetNamespaceName: 'string',
      targetRegionId: 'string',
      targetRepoName: 'string',
      targetUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoSyncRuleResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  syncRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      syncRuleId: 'SyncRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
      syncRuleId: 'string',
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

export class CreateRepoSyncTaskRequest extends $tea.Model {
  instanceId?: string;
  override?: boolean;
  regionId?: string;
  repoId?: string;
  tag?: string;
  targetInstanceId?: string;
  targetNamespace?: string;
  targetRegionId?: string;
  targetRepoName?: string;
  targetTag?: string;
  targetUserId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      override: 'Override',
      regionId: 'RegionId',
      repoId: 'RepoId',
      tag: 'Tag',
      targetInstanceId: 'TargetInstanceId',
      targetNamespace: 'TargetNamespace',
      targetRegionId: 'TargetRegionId',
      targetRepoName: 'TargetRepoName',
      targetTag: 'TargetTag',
      targetUserId: 'TargetUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      override: 'boolean',
      regionId: 'string',
      repoId: 'string',
      tag: 'string',
      targetInstanceId: 'string',
      targetNamespace: 'string',
      targetRegionId: 'string',
      targetRepoName: 'string',
      targetTag: 'string',
      targetUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoSyncTaskResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  syncTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      syncTaskId: 'SyncTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
      syncTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoSyncTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRepoSyncTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRepoSyncTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoSyncTaskByRuleRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  repoId?: string;
  syncRuleId?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repoId: 'RepoId',
      syncRuleId: 'SyncRuleId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      repoId: 'string',
      syncRuleId: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoSyncTaskByRuleResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  syncTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      syncTaskId: 'SyncTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
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

export class CreateRepoTagRequest extends $tea.Model {
  fromTag?: string;
  instanceId?: string;
  namespaceName?: string;
  regionId?: string;
  repoName?: string;
  toTag?: string;
  static names(): { [key: string]: string } {
    return {
      fromTag: 'FromTag',
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      regionId: 'RegionId',
      repoName: 'RepoName',
      toTag: 'ToTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromTag: 'string',
      instanceId: 'string',
      namespaceName: 'string',
      regionId: 'string',
      repoName: 'string',
      toTag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoTagResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRepoTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRepoTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoTagScanTaskRequest extends $tea.Model {
  digest?: string;
  instanceId?: string;
  regionId?: string;
  repoId?: string;
  scanService?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      digest: 'Digest',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repoId: 'RepoId',
      scanService: 'ScanService',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digest: 'string',
      instanceId: 'string',
      regionId: 'string',
      repoId: 'string',
      scanService: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoTagScanTaskResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
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
  regionId?: string;
  repoId?: string;
  triggerName?: string;
  triggerTag?: string;
  triggerType?: string;
  triggerUrl?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repoId: 'RepoId',
      triggerName: 'TriggerName',
      triggerTag: 'TriggerTag',
      triggerType: 'TriggerType',
      triggerUrl: 'TriggerUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      repoId: 'string',
      triggerName: 'string',
      triggerTag: 'string',
      triggerType: 'string',
      triggerUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoTriggerResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  triggerId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      triggerId: 'TriggerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
      triggerId: 'string',
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

export class CreateRepositoryRequest extends $tea.Model {
  detail?: string;
  instanceId?: string;
  regionId?: string;
  repoName?: string;
  repoNamespaceName?: string;
  repoType?: string;
  summary?: string;
  tagImmutability?: boolean;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      repoType: 'RepoType',
      summary: 'Summary',
      tagImmutability: 'TagImmutability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      instanceId: 'string',
      regionId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
      repoType: 'string',
      summary: 'string',
      tagImmutability: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  repoId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      repoId: 'RepoId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      repoId: 'string',
      requestId: 'string',
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

export class DeleteChainRequest extends $tea.Model {
  chainId?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      chainId: 'ChainId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChainResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteChainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteChainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChartNamespaceRequest extends $tea.Model {
  instanceId?: string;
  namespaceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespaceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChartNamespaceResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
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
  chart?: string;
  instanceId?: string;
  regionId?: string;
  release?: string;
  repoName?: string;
  repoNamespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      chart: 'Chart',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      release: 'Release',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chart: 'string',
      instanceId: 'string',
      regionId: 'string',
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
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
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
  regionId?: string;
  repoName?: string;
  repoNamespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChartRepositoryResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
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

export class DeleteEventCenterRuleRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventCenterRuleResponseBody extends $tea.Model {
  code?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventCenterRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteEventCenterRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteEventCenterRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceEndpointAclPolicyRequest extends $tea.Model {
  endpointType?: string;
  entry?: string;
  instanceId?: string;
  moduleName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointType: 'EndpointType',
      entry: 'Entry',
      instanceId: 'InstanceId',
      moduleName: 'ModuleName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointType: 'string',
      entry: 'string',
      instanceId: 'string',
      moduleName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceEndpointAclPolicyResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
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
  moduleName?: string;
  regionId?: string;
  vpcId?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      moduleName: 'ModuleName',
      regionId: 'RegionId',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      moduleName: 'string',
      regionId: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceVpcEndpointLinkedVpcResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
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
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespaceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNamespaceResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
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
  buildRuleId?: string;
  instanceId?: string;
  regionId?: string;
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      buildRuleId: 'BuildRuleId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRuleId: 'string',
      instanceId: 'string',
      regionId: 'string',
      repoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepoBuildRuleResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
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

export class DeleteRepoSyncRuleRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  syncRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      syncRuleId: 'SyncRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      syncRuleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepoSyncRuleResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
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
  regionId?: string;
  repoId?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repoId: 'RepoId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      repoId: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepoTagResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
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
  regionId?: string;
  repoId?: string;
  triggerId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repoId: 'RepoId',
      triggerId: 'TriggerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      repoId: 'string',
      triggerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepoTriggerResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
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

export class DeleteRepositoryRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      repoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
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

export class GetArtifactBuildTaskRequest extends $tea.Model {
  buildTaskId?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      buildTaskId: 'BuildTaskId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildTaskId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactBuildTaskResponseBody extends $tea.Model {
  artifactBuildType?: string;
  buildTaskId?: string;
  code?: string;
  endTime?: number;
  instructions?: string[];
  isSuccess?: boolean;
  requestId?: string;
  sourceArtifact?: GetArtifactBuildTaskResponseBodySourceArtifact;
  startTime?: number;
  targetArtifact?: GetArtifactBuildTaskResponseBodyTargetArtifact;
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      artifactBuildType: 'ArtifactBuildType',
      buildTaskId: 'BuildTaskId',
      code: 'Code',
      endTime: 'EndTime',
      instructions: 'Instructions',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      sourceArtifact: 'SourceArtifact',
      startTime: 'StartTime',
      targetArtifact: 'TargetArtifact',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactBuildType: 'string',
      buildTaskId: 'string',
      code: 'string',
      endTime: 'number',
      instructions: { 'type': 'array', 'itemType': 'string' },
      isSuccess: 'boolean',
      requestId: 'string',
      sourceArtifact: GetArtifactBuildTaskResponseBodySourceArtifact,
      startTime: 'number',
      targetArtifact: GetArtifactBuildTaskResponseBodyTargetArtifact,
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactBuildTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetArtifactBuildTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetArtifactBuildTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthorizationTokenRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthorizationTokenResponseBody extends $tea.Model {
  authorizationToken?: string;
  code?: string;
  expireTime?: number;
  isSuccess?: boolean;
  requestId?: string;
  tempUsername?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationToken: 'AuthorizationToken',
      code: 'Code',
      expireTime: 'ExpireTime',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      tempUsername: 'TempUsername',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationToken: 'string',
      code: 'string',
      expireTime: 'number',
      isSuccess: 'boolean',
      requestId: 'string',
      tempUsername: 'string',
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

export class GetChainRequest extends $tea.Model {
  chainId?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      chainId: 'ChainId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChainResponseBody extends $tea.Model {
  chainConfig?: GetChainResponseBodyChainConfig;
  chainId?: string;
  code?: string;
  createTime?: number;
  description?: string;
  instanceId?: string;
  isSuccess?: boolean;
  modifiedTime?: number;
  name?: string;
  requestId?: string;
  scopeId?: string;
  scopeType?: string;
  static names(): { [key: string]: string } {
    return {
      chainConfig: 'ChainConfig',
      chainId: 'ChainId',
      code: 'Code',
      createTime: 'CreateTime',
      description: 'Description',
      instanceId: 'InstanceId',
      isSuccess: 'IsSuccess',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      requestId: 'RequestId',
      scopeId: 'ScopeId',
      scopeType: 'ScopeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainConfig: GetChainResponseBodyChainConfig,
      chainId: 'string',
      code: 'string',
      createTime: 'number',
      description: 'string',
      instanceId: 'string',
      isSuccess: 'boolean',
      modifiedTime: 'number',
      name: 'string',
      requestId: 'string',
      scopeId: 'string',
      scopeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetChainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetChainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChartNamespaceRequest extends $tea.Model {
  instanceId?: string;
  namespaceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespaceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChartNamespaceResponseBody extends $tea.Model {
  autoCreateRepo?: boolean;
  code?: string;
  defaultRepoType?: string;
  instanceId?: string;
  isSuccess?: boolean;
  namespaceId?: string;
  namespaceName?: string;
  namespaceStatus?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreateRepo: 'AutoCreateRepo',
      code: 'Code',
      defaultRepoType: 'DefaultRepoType',
      instanceId: 'InstanceId',
      isSuccess: 'IsSuccess',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      namespaceStatus: 'NamespaceStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreateRepo: 'boolean',
      code: 'string',
      defaultRepoType: 'string',
      instanceId: 'string',
      isSuccess: 'boolean',
      namespaceId: 'string',
      namespaceName: 'string',
      namespaceStatus: 'string',
      requestId: 'string',
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
  regionId?: string;
  repoName?: string;
  repoNamespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChartRepositoryResponseBody extends $tea.Model {
  code?: string;
  createTime?: number;
  instanceId?: string;
  isSuccess?: boolean;
  modifiedTime?: number;
  repoId?: string;
  repoName?: string;
  repoNamespaceName?: string;
  repoStatus?: string;
  repoType?: string;
  requestId?: string;
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      isSuccess: 'IsSuccess',
      modifiedTime: 'ModifiedTime',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      repoStatus: 'RepoStatus',
      repoType: 'RepoType',
      requestId: 'RequestId',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createTime: 'number',
      instanceId: 'string',
      isSuccess: 'boolean',
      modifiedTime: 'number',
      repoId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
      repoStatus: 'string',
      repoType: 'string',
      requestId: 'string',
      summary: 'string',
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
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBody extends $tea.Model {
  code?: string;
  createTime?: number;
  instanceId?: string;
  instanceName?: string;
  instanceSpecification?: string;
  instanceStatus?: string;
  isSuccess?: boolean;
  modifiedTime?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceSpecification: 'InstanceSpecification',
      instanceStatus: 'InstanceStatus',
      isSuccess: 'IsSuccess',
      modifiedTime: 'ModifiedTime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createTime: 'number',
      instanceId: 'string',
      instanceName: 'string',
      instanceSpecification: 'string',
      instanceStatus: 'string',
      isSuccess: 'boolean',
      modifiedTime: 'number',
      requestId: 'string',
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

export class GetInstanceCountRequest extends $tea.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceCountResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      isSuccess: 'boolean',
      requestId: 'string',
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
  endpointType?: string;
  instanceId?: string;
  moduleName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointType: 'EndpointType',
      instanceId: 'InstanceId',
      moduleName: 'ModuleName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointType: 'string',
      instanceId: 'string',
      moduleName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceEndpointResponseBody extends $tea.Model {
  aclEnable?: boolean;
  aclEntries?: GetInstanceEndpointResponseBodyAclEntries[];
  code?: string;
  domains?: GetInstanceEndpointResponseBodyDomains[];
  enable?: boolean;
  isSuccess?: boolean;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aclEnable: 'AclEnable',
      aclEntries: 'AclEntries',
      code: 'Code',
      domains: 'Domains',
      enable: 'Enable',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEnable: 'boolean',
      aclEntries: { 'type': 'array', 'itemType': GetInstanceEndpointResponseBodyAclEntries },
      code: 'string',
      domains: { 'type': 'array', 'itemType': GetInstanceEndpointResponseBodyDomains },
      enable: 'boolean',
      isSuccess: 'boolean',
      requestId: 'string',
      status: 'string',
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
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceUsageResponseBody extends $tea.Model {
  chartNamespaceQuota?: string;
  chartNamespaceUsage?: string;
  chartRepoQuota?: string;
  chartRepoUsage?: string;
  code?: string;
  isSuccess?: boolean;
  namespaceQuota?: string;
  namespaceUsage?: string;
  repoQuota?: string;
  repoUsage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      chartNamespaceQuota: 'ChartNamespaceQuota',
      chartNamespaceUsage: 'ChartNamespaceUsage',
      chartRepoQuota: 'ChartRepoQuota',
      chartRepoUsage: 'ChartRepoUsage',
      code: 'Code',
      isSuccess: 'IsSuccess',
      namespaceQuota: 'NamespaceQuota',
      namespaceUsage: 'NamespaceUsage',
      repoQuota: 'RepoQuota',
      repoUsage: 'RepoUsage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chartNamespaceQuota: 'string',
      chartNamespaceUsage: 'string',
      chartRepoQuota: 'string',
      chartRepoUsage: 'string',
      code: 'string',
      isSuccess: 'boolean',
      namespaceQuota: 'string',
      namespaceUsage: 'string',
      repoQuota: 'string',
      repoUsage: 'string',
      requestId: 'string',
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
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      moduleName: 'ModuleName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      moduleName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceVpcEndpointResponseBody extends $tea.Model {
  code?: string;
  domains?: string[];
  enable?: boolean;
  isSuccess?: boolean;
  linkedVpcs?: GetInstanceVpcEndpointResponseBodyLinkedVpcs[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      domains: 'Domains',
      enable: 'Enable',
      isSuccess: 'IsSuccess',
      linkedVpcs: 'LinkedVpcs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      domains: { 'type': 'array', 'itemType': 'string' },
      enable: 'boolean',
      isSuccess: 'boolean',
      linkedVpcs: { 'type': 'array', 'itemType': GetInstanceVpcEndpointResponseBodyLinkedVpcs },
      requestId: 'string',
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
  namespaceId?: string;
  namespaceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespaceId: 'string',
      namespaceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNamespaceResponseBody extends $tea.Model {
  autoCreateRepo?: boolean;
  code?: string;
  defaultRepoType?: string;
  instanceId?: string;
  isSuccess?: boolean;
  namespaceId?: string;
  namespaceName?: string;
  namespaceStatus?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreateRepo: 'AutoCreateRepo',
      code: 'Code',
      defaultRepoType: 'DefaultRepoType',
      instanceId: 'InstanceId',
      isSuccess: 'IsSuccess',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      namespaceStatus: 'NamespaceStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreateRepo: 'boolean',
      code: 'string',
      defaultRepoType: 'string',
      instanceId: 'string',
      isSuccess: 'boolean',
      namespaceId: 'string',
      namespaceName: 'string',
      namespaceStatus: 'string',
      requestId: 'string',
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
  buildRecordId?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      buildRecordId: 'BuildRecordId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRecordId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoBuildRecordResponseBody extends $tea.Model {
  buildRecordId?: string;
  code?: string;
  endTime?: number;
  image?: GetRepoBuildRecordResponseBodyImage;
  isSuccess?: boolean;
  requestId?: string;
  startTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      buildRecordId: 'BuildRecordId',
      code: 'Code',
      endTime: 'EndTime',
      image: 'Image',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRecordId: 'string',
      code: 'string',
      endTime: 'number',
      image: GetRepoBuildRecordResponseBodyImage,
      isSuccess: 'boolean',
      requestId: 'string',
      startTime: 'number',
      status: 'string',
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
  buildRecordId?: string;
  instanceId?: string;
  regionId?: string;
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      buildRecordId: 'BuildRecordId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRecordId: 'string',
      instanceId: 'string',
      regionId: 'string',
      repoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoBuildRecordStatusResponseBody extends $tea.Model {
  buildStatus?: string;
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      buildStatus: 'BuildStatus',
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildStatus: 'string',
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
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

export class GetRepoSourceCodeRepoRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      repoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoSourceCodeRepoResponseBody extends $tea.Model {
  autoBuild?: string;
  code?: string;
  codeRepoDomain?: string;
  codeRepoName?: string;
  codeRepoNamespaceName?: string;
  codeRepoType?: string;
  disableCacheBuild?: string;
  isSuccess?: boolean;
  overseaBuild?: string;
  repoId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      autoBuild: 'AutoBuild',
      code: 'Code',
      codeRepoDomain: 'CodeRepoDomain',
      codeRepoName: 'CodeRepoName',
      codeRepoNamespaceName: 'CodeRepoNamespaceName',
      codeRepoType: 'CodeRepoType',
      disableCacheBuild: 'DisableCacheBuild',
      isSuccess: 'IsSuccess',
      overseaBuild: 'OverseaBuild',
      repoId: 'RepoId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuild: 'string',
      code: 'string',
      codeRepoDomain: 'string',
      codeRepoName: 'string',
      codeRepoNamespaceName: 'string',
      codeRepoType: 'string',
      disableCacheBuild: 'string',
      isSuccess: 'boolean',
      overseaBuild: 'string',
      repoId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoSourceCodeRepoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRepoSourceCodeRepoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRepoSourceCodeRepoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoSyncTaskRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  syncTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      syncTaskId: 'SyncTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      syncTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoSyncTaskResponseBody extends $tea.Model {
  code?: string;
  imageFrom?: GetRepoSyncTaskResponseBodyImageFrom;
  imageTo?: GetRepoSyncTaskResponseBodyImageTo;
  isSuccess?: boolean;
  layerTasks?: GetRepoSyncTaskResponseBodyLayerTasks[];
  progress?: number;
  requestId?: string;
  syncBatchTaskId?: string;
  syncRuleId?: string;
  syncTaskId?: string;
  syncedSize?: number;
  taskStatus?: string;
  taskTrigger?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      imageFrom: 'ImageFrom',
      imageTo: 'ImageTo',
      isSuccess: 'IsSuccess',
      layerTasks: 'LayerTasks',
      progress: 'Progress',
      requestId: 'RequestId',
      syncBatchTaskId: 'SyncBatchTaskId',
      syncRuleId: 'SyncRuleId',
      syncTaskId: 'SyncTaskId',
      syncedSize: 'SyncedSize',
      taskStatus: 'TaskStatus',
      taskTrigger: 'TaskTrigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      imageFrom: GetRepoSyncTaskResponseBodyImageFrom,
      imageTo: GetRepoSyncTaskResponseBodyImageTo,
      isSuccess: 'boolean',
      layerTasks: { 'type': 'array', 'itemType': GetRepoSyncTaskResponseBodyLayerTasks },
      progress: 'number',
      requestId: 'string',
      syncBatchTaskId: 'string',
      syncRuleId: 'string',
      syncTaskId: 'string',
      syncedSize: 'number',
      taskStatus: 'string',
      taskTrigger: 'string',
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

export class GetRepoTagRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  repoId?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repoId: 'RepoId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      repoId: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagResponseBody extends $tea.Model {
  code?: string;
  digest?: string;
  imageCreate?: number;
  imageId?: string;
  imageSize?: number;
  imageUpdate?: number;
  isSuccess?: boolean;
  requestId?: string;
  status?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      digest: 'Digest',
      imageCreate: 'ImageCreate',
      imageId: 'ImageId',
      imageSize: 'ImageSize',
      imageUpdate: 'ImageUpdate',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      digest: 'string',
      imageCreate: 'number',
      imageId: 'string',
      imageSize: 'number',
      imageUpdate: 'number',
      isSuccess: 'boolean',
      requestId: 'string',
      status: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRepoTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRepoTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagLayersRequest extends $tea.Model {
  digest?: string;
  instanceId?: string;
  regionId?: string;
  repoId?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      digest: 'Digest',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repoId: 'RepoId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digest: 'string',
      instanceId: 'string',
      regionId: 'string',
      repoId: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagLayersResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  layers?: GetRepoTagLayersResponseBodyLayers[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      layers: 'Layers',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      layers: { 'type': 'array', 'itemType': GetRepoTagLayersResponseBodyLayers },
      requestId: 'string',
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
  regionId?: string;
  repoId?: string;
  schemaVersion?: number;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repoId: 'RepoId',
      schemaVersion: 'SchemaVersion',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      repoId: 'string',
      schemaVersion: 'number',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagManifestResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  manifest?: GetRepoTagManifestResponseBodyManifest;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      manifest: 'Manifest',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      manifest: GetRepoTagManifestResponseBodyManifest,
      requestId: 'string',
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
  digest?: string;
  instanceId?: string;
  regionId?: string;
  repoId?: string;
  scanTaskId?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      digest: 'Digest',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repoId: 'RepoId',
      scanTaskId: 'ScanTaskId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digest: 'string',
      instanceId: 'string',
      regionId: 'string',
      repoId: 'string',
      scanTaskId: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagScanStatusResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  scanService?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      scanService: 'ScanService',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
      scanService: 'string',
      status: 'string',
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
  digest?: string;
  instanceId?: string;
  regionId?: string;
  repoId?: string;
  scanTaskId?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      digest: 'Digest',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repoId: 'RepoId',
      scanTaskId: 'ScanTaskId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digest: 'string',
      instanceId: 'string',
      regionId: 'string',
      repoId: 'string',
      scanTaskId: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagScanSummaryResponseBody extends $tea.Model {
  code?: string;
  highSeverity?: number;
  isSuccess?: boolean;
  lowSeverity?: number;
  mediumSeverity?: number;
  requestId?: string;
  totalSeverity?: number;
  unknownSeverity?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      highSeverity: 'HighSeverity',
      isSuccess: 'IsSuccess',
      lowSeverity: 'LowSeverity',
      mediumSeverity: 'MediumSeverity',
      requestId: 'RequestId',
      totalSeverity: 'TotalSeverity',
      unknownSeverity: 'UnknownSeverity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      highSeverity: 'number',
      isSuccess: 'boolean',
      lowSeverity: 'number',
      mediumSeverity: 'number',
      requestId: 'string',
      totalSeverity: 'number',
      unknownSeverity: 'number',
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

export class GetRepositoryRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  repoId?: string;
  repoName?: string;
  repoNamespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      repoId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryResponseBody extends $tea.Model {
  code?: string;
  createTime?: number;
  detail?: string;
  instanceId?: string;
  isSuccess?: boolean;
  modifiedTime?: number;
  repoBuildType?: string;
  repoId?: string;
  repoName?: string;
  repoNamespaceName?: string;
  repoStatus?: string;
  repoType?: string;
  requestId?: string;
  summary?: string;
  tagImmutability?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createTime: 'CreateTime',
      detail: 'Detail',
      instanceId: 'InstanceId',
      isSuccess: 'IsSuccess',
      modifiedTime: 'ModifiedTime',
      repoBuildType: 'RepoBuildType',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      repoStatus: 'RepoStatus',
      repoType: 'RepoType',
      requestId: 'RequestId',
      summary: 'Summary',
      tagImmutability: 'TagImmutability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createTime: 'number',
      detail: 'string',
      instanceId: 'string',
      isSuccess: 'boolean',
      modifiedTime: 'number',
      repoBuildType: 'string',
      repoId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
      repoStatus: 'string',
      repoType: 'string',
      requestId: 'string',
      summary: 'string',
      tagImmutability: 'boolean',
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

export class ListArtifactBuildTaskLogRequest extends $tea.Model {
  buildTaskId?: string;
  instanceId?: string;
  page?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      buildTaskId: 'BuildTaskId',
      instanceId: 'InstanceId',
      page: 'Page',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildTaskId: 'string',
      instanceId: 'string',
      page: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactBuildTaskLogResponseBody extends $tea.Model {
  buildTaskLogs?: ListArtifactBuildTaskLogResponseBodyBuildTaskLogs[];
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      buildTaskLogs: 'BuildTaskLogs',
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildTaskLogs: { 'type': 'array', 'itemType': ListArtifactBuildTaskLogResponseBodyBuildTaskLogs },
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactBuildTaskLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListArtifactBuildTaskLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListArtifactBuildTaskLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChainRequest extends $tea.Model {
  instanceId?: string;
  pageNo?: number;
  pageSize?: number;
  regionId?: string;
  repoName?: string;
  repoNamespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      regionId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChainResponseBody extends $tea.Model {
  chains?: ListChainResponseBodyChains[];
  code?: string;
  isSuccess?: boolean;
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      chains: 'Chains',
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chains: { 'type': 'array', 'itemType': ListChainResponseBodyChains },
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListChainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListChainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChainInstanceRequest extends $tea.Model {
  instanceId?: string;
  pageNo?: number;
  pageSize?: number;
  regionId?: string;
  repoName?: string;
  repoNamespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      regionId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChainInstanceResponseBody extends $tea.Model {
  chainInstances?: ListChainInstanceResponseBodyChainInstances[];
  code?: string;
  instanceId?: string;
  isSuccess?: boolean;
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      chainInstances: 'ChainInstances',
      code: 'Code',
      instanceId: 'InstanceId',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainInstances: { 'type': 'array', 'itemType': ListChainInstanceResponseBodyChainInstances },
      code: 'string',
      instanceId: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChainInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListChainInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListChainInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartNamespaceRequest extends $tea.Model {
  instanceId?: string;
  namespaceName?: string;
  namespaceStatus?: string;
  pageNo?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      namespaceStatus: 'NamespaceStatus',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespaceName: 'string',
      namespaceStatus: 'string',
      pageNo: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartNamespaceResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  namespaces?: ListChartNamespaceResponseBodyNamespaces[];
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      namespaces: 'Namespaces',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      namespaces: { 'type': 'array', 'itemType': ListChartNamespaceResponseBodyNamespaces },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'string',
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
  chart?: string;
  instanceId?: string;
  pageNo?: number;
  pageSize?: number;
  regionId?: string;
  repoName?: string;
  repoNamespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      chart: 'Chart',
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chart: 'string',
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      regionId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartReleaseResponseBody extends $tea.Model {
  chartReleases?: ListChartReleaseResponseBodyChartReleases[];
  code?: string;
  isSuccess?: boolean;
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      chartReleases: 'ChartReleases',
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chartReleases: { 'type': 'array', 'itemType': ListChartReleaseResponseBodyChartReleases },
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'string',
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
  pageNo?: number;
  pageSize?: number;
  regionId?: string;
  repoName?: string;
  repoNamespaceName?: string;
  repoStatus?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      repoStatus: 'RepoStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      regionId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
      repoStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartRepositoryResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  pageNo?: number;
  pageSize?: number;
  repositories?: ListChartRepositoryResponseBodyRepositories[];
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      repositories: 'Repositories',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      repositories: { 'type': 'array', 'itemType': ListChartRepositoryResponseBodyRepositories },
      requestId: 'string',
      totalCount: 'string',
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

export class ListEventCenterRecordRequest extends $tea.Model {
  eventType?: string;
  instanceId?: string;
  pageNo?: number;
  pageSize?: number;
  regionId?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      eventType: 'EventType',
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventType: 'string',
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      regionId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventCenterRecordResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  pageNo?: number;
  pageSize?: number;
  records?: ListEventCenterRecordResponseBodyRecords[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      records: 'Records',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': ListEventCenterRecordResponseBodyRecords },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventCenterRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListEventCenterRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListEventCenterRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventCenterRuleNameRequest extends $tea.Model {
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

export class ListEventCenterRuleNameResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  ruleNames?: ListEventCenterRuleNameResponseBodyRuleNames[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      ruleNames: 'RuleNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
      ruleNames: { 'type': 'array', 'itemType': ListEventCenterRuleNameResponseBodyRuleNames },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventCenterRuleNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListEventCenterRuleNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListEventCenterRuleNameResponseBody,
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
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      instanceStatus: 'string',
      pageNo: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBody extends $tea.Model {
  code?: string;
  instances?: ListInstanceResponseBodyInstances[];
  isSuccess?: boolean;
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instances: 'Instances',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instances: { 'type': 'array', 'itemType': ListInstanceResponseBodyInstances },
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      moduleName: 'ModuleName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      moduleName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceEndpointResponseBody extends $tea.Model {
  code?: string;
  endpoints?: ListInstanceEndpointResponseBodyEndpoints[];
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      endpoints: 'Endpoints',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      endpoints: { 'type': 'array', 'itemType': ListInstanceEndpointResponseBodyEndpoints },
      isSuccess: 'boolean',
      requestId: 'string',
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
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceRegionResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  regions?: ListInstanceRegionResponseBodyRegions[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      regions: { 'type': 'array', 'itemType': ListInstanceRegionResponseBodyRegions },
      requestId: 'string',
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
  namespaceName?: string;
  namespaceStatus?: string;
  pageNo?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      namespaceStatus: 'NamespaceStatus',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespaceName: 'string',
      namespaceStatus: 'string',
      pageNo: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespaceResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  namespaces?: ListNamespaceResponseBodyNamespaces[];
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      namespaces: 'Namespaces',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      namespaces: { 'type': 'array', 'itemType': ListNamespaceResponseBodyNamespaces },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'string',
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
  pageNo?: number;
  pageSize?: number;
  regionId?: string;
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      regionId: 'string',
      repoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRecordResponseBody extends $tea.Model {
  buildRecords?: ListRepoBuildRecordResponseBodyBuildRecords[];
  code?: string;
  isSuccess?: boolean;
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      buildRecords: 'BuildRecords',
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRecords: { 'type': 'array', 'itemType': ListRepoBuildRecordResponseBodyBuildRecords },
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'string',
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
  buildRecordId?: string;
  instanceId?: string;
  offset?: number;
  regionId?: string;
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      buildRecordId: 'BuildRecordId',
      instanceId: 'InstanceId',
      offset: 'Offset',
      regionId: 'RegionId',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRecordId: 'string',
      instanceId: 'string',
      offset: 'number',
      regionId: 'string',
      repoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRecordLogResponseBody extends $tea.Model {
  buildRecordLogs?: ListRepoBuildRecordLogResponseBodyBuildRecordLogs[];
  code?: string;
  isSuccess?: boolean;
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      buildRecordLogs: 'BuildRecordLogs',
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRecordLogs: { 'type': 'array', 'itemType': ListRepoBuildRecordLogResponseBodyBuildRecordLogs },
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'string',
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
  pageNo?: number;
  pageSize?: number;
  regionId?: string;
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      regionId: 'string',
      repoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRuleResponseBody extends $tea.Model {
  buildRules?: ListRepoBuildRuleResponseBodyBuildRules[];
  code?: string;
  isSuccess?: boolean;
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      buildRules: 'BuildRules',
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRules: { 'type': 'array', 'itemType': ListRepoBuildRuleResponseBodyBuildRules },
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'string',
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

export class ListRepoSyncRuleRequest extends $tea.Model {
  instanceId?: string;
  namespaceName?: string;
  pageNo?: number;
  pageSize?: number;
  regionId?: string;
  repoName?: string;
  targetInstanceId?: string;
  targetRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      repoName: 'RepoName',
      targetInstanceId: 'TargetInstanceId',
      targetRegionId: 'TargetRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespaceName: 'string',
      pageNo: 'number',
      pageSize: 'number',
      regionId: 'string',
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
  code?: string;
  isSuccess?: boolean;
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  syncRules?: ListRepoSyncRuleResponseBodySyncRules[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      syncRules: 'SyncRules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      syncRules: { 'type': 'array', 'itemType': ListRepoSyncRuleResponseBodySyncRules },
      totalCount: 'number',
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
  regionId?: string;
  repoName?: string;
  repoNamespaceName?: string;
  syncRecordId?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      syncRecordId: 'SyncRecordId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      regionId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
      syncRecordId: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoSyncTaskResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  syncTasks?: ListRepoSyncTaskResponseBodySyncTasks[];
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      syncTasks: 'SyncTasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      syncTasks: { 'type': 'array', 'itemType': ListRepoSyncTaskResponseBodySyncTasks },
      totalCount: 'string',
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
  pageNo?: number;
  pageSize?: number;
  regionId?: string;
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      regionId: 'string',
      repoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTagResponseBody extends $tea.Model {
  code?: string;
  images?: ListRepoTagResponseBodyImages[];
  isSuccess?: boolean;
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      images: 'Images',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      images: { 'type': 'array', 'itemType': ListRepoTagResponseBodyImages },
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'string',
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
  digest?: string;
  instanceId?: string;
  pageNo?: number;
  pageSize?: number;
  regionId?: string;
  repoId?: string;
  scanTaskId?: string;
  severity?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      digest: 'Digest',
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      repoId: 'RepoId',
      scanTaskId: 'ScanTaskId',
      severity: 'Severity',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digest: 'string',
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      regionId: 'string',
      repoId: 'string',
      scanTaskId: 'string',
      severity: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTagScanResultResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  vulnerabilities?: ListRepoTagScanResultResponseBodyVulnerabilities[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vulnerabilities: 'Vulnerabilities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vulnerabilities: { 'type': 'array', 'itemType': ListRepoTagScanResultResponseBodyVulnerabilities },
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
  regionId?: string;
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      repoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTriggerResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  triggers?: ListRepoTriggerResponseBodyTriggers[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
      triggers: { 'type': 'array', 'itemType': ListRepoTriggerResponseBodyTriggers },
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

export class ListRepositoryRequest extends $tea.Model {
  instanceId?: string;
  pageNo?: number;
  pageSize?: number;
  regionId?: string;
  repoName?: string;
  repoNamespaceName?: string;
  repoStatus?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      repoStatus: 'RepoStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      regionId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
      repoStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  pageNo?: number;
  pageSize?: number;
  repositories?: ListRepositoryResponseBodyRepositories[];
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      repositories: 'Repositories',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      repositories: { 'type': 'array', 'itemType': ListRepositoryResponseBodyRepositories },
      requestId: 'string',
      totalCount: 'string',
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

export class ResetLoginPasswordRequest extends $tea.Model {
  instanceId?: string;
  password?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      password: 'Password',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      password: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetLoginPasswordResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
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

export class UpdateChainRequest extends $tea.Model {
  chainConfig?: string;
  chainId?: string;
  description?: string;
  instanceId?: string;
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      chainConfig: 'ChainConfig',
      chainId: 'ChainId',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainConfig: 'string',
      chainId: 'string',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateChainResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateChainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateChainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateChainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateChartNamespaceRequest extends $tea.Model {
  autoCreateRepo?: boolean;
  defaultRepoType?: string;
  instanceId?: string;
  namespaceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreateRepo: 'AutoCreateRepo',
      defaultRepoType: 'DefaultRepoType',
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreateRepo: 'boolean',
      defaultRepoType: 'string',
      instanceId: 'string',
      namespaceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateChartNamespaceResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
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
  regionId?: string;
  repoName?: string;
  repoNamespaceName?: string;
  repoType?: string;
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      repoType: 'RepoType',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
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

export class UpdateChartRepositoryResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
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

export class UpdateEventCenterRuleRequest extends $tea.Model {
  eventChannel?: string;
  eventConfig?: string;
  eventScope?: string;
  eventType?: string;
  instanceId?: string;
  namespaces?: string[];
  regionId?: string;
  repoNames?: string[];
  repoTagFilterPattern?: string;
  ruleId?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      eventChannel: 'EventChannel',
      eventConfig: 'EventConfig',
      eventScope: 'EventScope',
      eventType: 'EventType',
      instanceId: 'InstanceId',
      namespaces: 'Namespaces',
      regionId: 'RegionId',
      repoNames: 'RepoNames',
      repoTagFilterPattern: 'RepoTagFilterPattern',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventChannel: 'string',
      eventConfig: 'string',
      eventScope: 'string',
      eventType: 'string',
      instanceId: 'string',
      namespaces: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      repoNames: { 'type': 'array', 'itemType': 'string' },
      repoTagFilterPattern: 'string',
      ruleId: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventCenterRuleShrinkRequest extends $tea.Model {
  eventChannel?: string;
  eventConfig?: string;
  eventScope?: string;
  eventType?: string;
  instanceId?: string;
  namespacesShrink?: string;
  regionId?: string;
  repoNamesShrink?: string;
  repoTagFilterPattern?: string;
  ruleId?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      eventChannel: 'EventChannel',
      eventConfig: 'EventConfig',
      eventScope: 'EventScope',
      eventType: 'EventType',
      instanceId: 'InstanceId',
      namespacesShrink: 'Namespaces',
      regionId: 'RegionId',
      repoNamesShrink: 'RepoNames',
      repoTagFilterPattern: 'RepoTagFilterPattern',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventChannel: 'string',
      eventConfig: 'string',
      eventScope: 'string',
      eventType: 'string',
      instanceId: 'string',
      namespacesShrink: 'string',
      regionId: 'string',
      repoNamesShrink: 'string',
      repoTagFilterPattern: 'string',
      ruleId: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventCenterRuleResponseBody extends $tea.Model {
  code?: number;
  requestId?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      requestId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventCenterRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateEventCenterRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateEventCenterRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceEndpointStatusRequest extends $tea.Model {
  enable?: boolean;
  endpointType?: string;
  instanceId?: string;
  moduleName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      endpointType: 'EndpointType',
      instanceId: 'InstanceId',
      moduleName: 'ModuleName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      endpointType: 'string',
      instanceId: 'string',
      moduleName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceEndpointStatusResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
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
  autoCreateRepo?: boolean;
  defaultRepoType?: string;
  instanceId?: string;
  namespaceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreateRepo: 'AutoCreateRepo',
      defaultRepoType: 'DefaultRepoType',
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreateRepo: 'boolean',
      defaultRepoType: 'string',
      instanceId: 'string',
      namespaceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNamespaceResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
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
  buildRuleId?: string;
  dockerfileLocation?: string;
  dockerfileName?: string;
  imageTag?: string;
  instanceId?: string;
  platforms?: string[];
  pushName?: string;
  pushType?: string;
  regionId?: string;
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      buildRuleId: 'BuildRuleId',
      dockerfileLocation: 'DockerfileLocation',
      dockerfileName: 'DockerfileName',
      imageTag: 'ImageTag',
      instanceId: 'InstanceId',
      platforms: 'Platforms',
      pushName: 'PushName',
      pushType: 'PushType',
      regionId: 'RegionId',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRuleId: 'string',
      dockerfileLocation: 'string',
      dockerfileName: 'string',
      imageTag: 'string',
      instanceId: 'string',
      platforms: { 'type': 'array', 'itemType': 'string' },
      pushName: 'string',
      pushType: 'string',
      regionId: 'string',
      repoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepoBuildRuleResponseBody extends $tea.Model {
  buildRuleId?: string;
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      buildRuleId: 'BuildRuleId',
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRuleId: 'string',
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
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

export class UpdateRepoSourceCodeRepoRequest extends $tea.Model {
  autoBuild?: string;
  codeRepoId?: string;
  codeRepoName?: string;
  codeRepoNamespaceName?: string;
  codeRepoType?: string;
  disableCacheBuild?: string;
  instanceId?: string;
  overseaBuild?: string;
  regionId?: string;
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      autoBuild: 'AutoBuild',
      codeRepoId: 'CodeRepoId',
      codeRepoName: 'CodeRepoName',
      codeRepoNamespaceName: 'CodeRepoNamespaceName',
      codeRepoType: 'CodeRepoType',
      disableCacheBuild: 'DisableCacheBuild',
      instanceId: 'InstanceId',
      overseaBuild: 'OverseaBuild',
      regionId: 'RegionId',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuild: 'string',
      codeRepoId: 'string',
      codeRepoName: 'string',
      codeRepoNamespaceName: 'string',
      codeRepoType: 'string',
      disableCacheBuild: 'string',
      instanceId: 'string',
      overseaBuild: 'string',
      regionId: 'string',
      repoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepoSourceCodeRepoResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepoSourceCodeRepoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateRepoSourceCodeRepoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateRepoSourceCodeRepoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepoTriggerRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  repoId?: string;
  triggerId?: string;
  triggerName?: string;
  triggerTag?: string;
  triggerType?: string;
  triggerUrl?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repoId: 'RepoId',
      triggerId: 'TriggerId',
      triggerName: 'TriggerName',
      triggerTag: 'TriggerTag',
      triggerType: 'TriggerType',
      triggerUrl: 'TriggerUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      repoId: 'string',
      triggerId: 'string',
      triggerName: 'string',
      triggerTag: 'string',
      triggerType: 'string',
      triggerUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepoTriggerResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
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

export class UpdateRepositoryRequest extends $tea.Model {
  detail?: string;
  instanceId?: string;
  regionId?: string;
  repoId?: string;
  repoType?: string;
  summary?: string;
  tagImmutability?: boolean;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repoId: 'RepoId',
      repoType: 'RepoType',
      summary: 'Summary',
      tagImmutability: 'TagImmutability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      instanceId: 'string',
      regionId: 'string',
      repoId: 'string',
      repoType: 'string',
      summary: 'string',
      tagImmutability: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepositoryResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
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

export class GetArtifactBuildTaskResponseBodySourceArtifact extends $tea.Model {
  artifactType?: string;
  repoId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      repoId: 'RepoId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      repoId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactBuildTaskResponseBodyTargetArtifact extends $tea.Model {
  artifactType?: string;
  repoId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      repoId: 'RepoId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      repoId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChainResponseBodyChainConfigNodesNodeConfigDenyPolicy extends $tea.Model {
  action?: string;
  issueCount?: string;
  issueLevel?: string;
  logic?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      issueCount: 'IssueCount',
      issueLevel: 'IssueLevel',
      logic: 'Logic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      issueCount: 'string',
      issueLevel: 'string',
      logic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChainResponseBodyChainConfigNodesNodeConfig extends $tea.Model {
  denyPolicy?: GetChainResponseBodyChainConfigNodesNodeConfigDenyPolicy;
  retry?: number;
  scanEngine?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      denyPolicy: 'DenyPolicy',
      retry: 'Retry',
      scanEngine: 'ScanEngine',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      denyPolicy: GetChainResponseBodyChainConfigNodesNodeConfigDenyPolicy,
      retry: 'number',
      scanEngine: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChainResponseBodyChainConfigNodes extends $tea.Model {
  enable?: boolean;
  nodeConfig?: GetChainResponseBodyChainConfigNodesNodeConfig;
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      nodeConfig: 'NodeConfig',
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      nodeConfig: GetChainResponseBodyChainConfigNodesNodeConfig,
      nodeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChainResponseBodyChainConfigRoutersFrom extends $tea.Model {
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChainResponseBodyChainConfigRoutersTo extends $tea.Model {
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChainResponseBodyChainConfigRouters extends $tea.Model {
  from?: GetChainResponseBodyChainConfigRoutersFrom;
  to?: GetChainResponseBodyChainConfigRoutersTo;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: GetChainResponseBodyChainConfigRoutersFrom,
      to: GetChainResponseBodyChainConfigRoutersTo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChainResponseBodyChainConfig extends $tea.Model {
  chainConfigId?: string;
  isActive?: boolean;
  nodes?: GetChainResponseBodyChainConfigNodes[];
  routers?: GetChainResponseBodyChainConfigRouters[];
  version?: string;
  static names(): { [key: string]: string } {
    return {
      chainConfigId: 'ChainConfigId',
      isActive: 'IsActive',
      nodes: 'Nodes',
      routers: 'Routers',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainConfigId: 'string',
      isActive: 'boolean',
      nodes: { 'type': 'array', 'itemType': GetChainResponseBodyChainConfigNodes },
      routers: { 'type': 'array', 'itemType': GetChainResponseBodyChainConfigRouters },
      version: 'string',
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

export class GetInstanceEndpointResponseBodyDomains extends $tea.Model {
  domain?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceVpcEndpointResponseBodyLinkedVpcs extends $tea.Model {
  defaultAccess?: boolean;
  ip?: string;
  status?: string;
  vpcId?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultAccess: 'DefaultAccess',
      ip: 'Ip',
      status: 'Status',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultAccess: 'boolean',
      ip: 'string',
      status: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoBuildRecordResponseBodyImage extends $tea.Model {
  imageTag?: string;
  repoName?: string;
  repoNamespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      imageTag: 'ImageTag',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageTag: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoSyncTaskResponseBodyImageFrom extends $tea.Model {
  imageTag?: string;
  instanceId?: string;
  regionId?: string;
  repoName?: string;
  repoNamespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      imageTag: 'ImageTag',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageTag: 'string',
      instanceId: 'string',
      regionId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoSyncTaskResponseBodyImageTo extends $tea.Model {
  imageTag?: string;
  instanceId?: string;
  regionId?: string;
  repoName?: string;
  repoNamespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      imageTag: 'ImageTag',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageTag: 'string',
      instanceId: 'string',
      regionId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoSyncTaskResponseBodyLayerTasks extends $tea.Model {
  artifactDigest?: string;
  digest?: string;
  size?: number;
  syncLayerTaskId?: string;
  syncedSize?: number;
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      artifactDigest: 'ArtifactDigest',
      digest: 'Digest',
      size: 'Size',
      syncLayerTaskId: 'SyncLayerTaskId',
      syncedSize: 'SyncedSize',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactDigest: 'string',
      digest: 'string',
      size: 'number',
      syncLayerTaskId: 'string',
      syncedSize: 'number',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagLayersResponseBodyLayers extends $tea.Model {
  blobDigest?: string;
  blobSize?: number;
  layerCMD?: string;
  layerIndex?: number;
  layerInstruction?: string;
  static names(): { [key: string]: string } {
    return {
      blobDigest: 'BlobDigest',
      blobSize: 'BlobSize',
      layerCMD: 'LayerCMD',
      layerIndex: 'LayerIndex',
      layerInstruction: 'LayerInstruction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blobDigest: 'string',
      blobSize: 'number',
      layerCMD: 'string',
      layerIndex: 'number',
      layerInstruction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagManifestResponseBodyManifestConfig extends $tea.Model {
  digest?: string;
  mediaType?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      digest: 'Digest',
      mediaType: 'MediaType',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digest: 'string',
      mediaType: 'string',
      size: 'number',
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
  mediaType?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      digest: 'Digest',
      mediaType: 'MediaType',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digest: 'string',
      mediaType: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagManifestResponseBodyManifestSignatures extends $tea.Model {
  header?: { [key: string]: any };
  protected?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'Header',
      protected: 'Protected',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      protected: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagManifestResponseBodyManifest extends $tea.Model {
  architecture?: string;
  config?: GetRepoTagManifestResponseBodyManifestConfig;
  fsLayers?: GetRepoTagManifestResponseBodyManifestFsLayers[];
  history?: GetRepoTagManifestResponseBodyManifestHistory[];
  layers?: GetRepoTagManifestResponseBodyManifestLayers[];
  mediaType?: string;
  name?: string;
  schemaVersion?: number;
  signatures?: GetRepoTagManifestResponseBodyManifestSignatures[];
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      config: 'Config',
      fsLayers: 'FsLayers',
      history: 'History',
      layers: 'Layers',
      mediaType: 'MediaType',
      name: 'Name',
      schemaVersion: 'SchemaVersion',
      signatures: 'Signatures',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      config: GetRepoTagManifestResponseBodyManifestConfig,
      fsLayers: { 'type': 'array', 'itemType': GetRepoTagManifestResponseBodyManifestFsLayers },
      history: { 'type': 'array', 'itemType': GetRepoTagManifestResponseBodyManifestHistory },
      layers: { 'type': 'array', 'itemType': GetRepoTagManifestResponseBodyManifestLayers },
      mediaType: 'string',
      name: 'string',
      schemaVersion: 'number',
      signatures: { 'type': 'array', 'itemType': GetRepoTagManifestResponseBodyManifestSignatures },
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactBuildTaskLogResponseBodyBuildTaskLogs extends $tea.Model {
  lineNumber?: number;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      lineNumber: 'LineNumber',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lineNumber: 'number',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChainResponseBodyChains extends $tea.Model {
  chainId?: string;
  createTime?: number;
  description?: string;
  instanceId?: string;
  modifiedTime?: number;
  name?: string;
  scopeId?: string;
  scopeType?: string;
  static names(): { [key: string]: string } {
    return {
      chainId: 'ChainId',
      createTime: 'CreateTime',
      description: 'Description',
      instanceId: 'InstanceId',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      scopeId: 'ScopeId',
      scopeType: 'ScopeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainId: 'string',
      createTime: 'number',
      description: 'string',
      instanceId: 'string',
      modifiedTime: 'number',
      name: 'string',
      scopeId: 'string',
      scopeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChainInstanceResponseBodyChainInstancesChain extends $tea.Model {
  chainId?: string;
  chainName?: string;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      chainId: 'ChainId',
      chainName: 'ChainName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainId: 'string',
      chainName: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChainInstanceResponseBodyChainInstances extends $tea.Model {
  chain?: ListChainInstanceResponseBodyChainInstancesChain;
  chainInstanceId?: string;
  endTime?: number;
  repoName?: string;
  repoNamespaceName?: string;
  result?: string;
  startTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      chain: 'Chain',
      chainInstanceId: 'ChainInstanceId',
      endTime: 'EndTime',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      result: 'Result',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chain: ListChainInstanceResponseBodyChainInstancesChain,
      chainInstanceId: 'string',
      endTime: 'number',
      repoName: 'string',
      repoNamespaceName: 'string',
      result: 'string',
      startTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartNamespaceResponseBodyNamespaces extends $tea.Model {
  autoCreateRepo?: boolean;
  defaultRepoType?: string;
  instanceId?: string;
  namespaceId?: string;
  namespaceName?: string;
  namespaceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreateRepo: 'AutoCreateRepo',
      defaultRepoType: 'DefaultRepoType',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      namespaceStatus: 'NamespaceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreateRepo: 'boolean',
      defaultRepoType: 'string',
      instanceId: 'string',
      namespaceId: 'string',
      namespaceName: 'string',
      namespaceStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartReleaseResponseBodyChartReleases extends $tea.Model {
  chart?: string;
  instanceId?: string;
  modifiedTime?: number;
  release?: string;
  repoId?: string;
  size?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      chart: 'Chart',
      instanceId: 'InstanceId',
      modifiedTime: 'ModifiedTime',
      release: 'Release',
      repoId: 'RepoId',
      size: 'Size',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chart: 'string',
      instanceId: 'string',
      modifiedTime: 'number',
      release: 'string',
      repoId: 'string',
      size: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartRepositoryResponseBodyRepositories extends $tea.Model {
  createTime?: number;
  instanceId?: string;
  modifiedTime?: number;
  repoId?: string;
  repoName?: string;
  repoNamespaceName?: string;
  repoStatus?: string;
  repoType?: string;
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      modifiedTime: 'ModifiedTime',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      repoStatus: 'RepoStatus',
      repoType: 'RepoType',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      instanceId: 'string',
      modifiedTime: 'number',
      repoId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
      repoStatus: 'string',
      repoType: 'string',
      summary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventCenterRecordResponseBodyRecords extends $tea.Model {
  createTime?: number;
  eventChannel?: string;
  eventNotifyId?: string;
  eventNotifyMethod?: string;
  eventType?: string;
  instanceId?: string;
  namespace?: string;
  recordId?: string;
  repoName?: string;
  ruleId?: string;
  ruleName?: string;
  tag?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      eventChannel: 'EventChannel',
      eventNotifyId: 'EventNotifyId',
      eventNotifyMethod: 'EventNotifyMethod',
      eventType: 'EventType',
      instanceId: 'InstanceId',
      namespace: 'Namespace',
      recordId: 'RecordId',
      repoName: 'RepoName',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      tag: 'Tag',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      eventChannel: 'string',
      eventNotifyId: 'string',
      eventNotifyMethod: 'string',
      eventType: 'string',
      instanceId: 'string',
      namespace: 'string',
      recordId: 'string',
      repoName: 'string',
      ruleId: 'string',
      ruleName: 'string',
      tag: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventCenterRuleNameResponseBodyRuleNames extends $tea.Model {
  ruleId?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyInstances extends $tea.Model {
  createTime?: string;
  instanceId?: string;
  instanceName?: string;
  instanceSpecification?: string;
  instanceStatus?: string;
  modifiedTime?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceSpecification: 'InstanceSpecification',
      instanceStatus: 'InstanceStatus',
      modifiedTime: 'ModifiedTime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceSpecification: 'string',
      instanceStatus: 'string',
      modifiedTime: 'string',
      regionId: 'string',
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

export class ListInstanceEndpointResponseBodyEndpointsDomains extends $tea.Model {
  domain?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      type: 'string',
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

export class ListInstanceEndpointResponseBodyEndpoints extends $tea.Model {
  aclEnable?: boolean;
  aclEntries?: ListInstanceEndpointResponseBodyEndpointsAclEntries[];
  domains?: ListInstanceEndpointResponseBodyEndpointsDomains[];
  enable?: boolean;
  endpointType?: string;
  linkedVpcs?: ListInstanceEndpointResponseBodyEndpointsLinkedVpcs[];
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aclEnable: 'AclEnable',
      aclEntries: 'AclEntries',
      domains: 'Domains',
      enable: 'Enable',
      endpointType: 'EndpointType',
      linkedVpcs: 'LinkedVpcs',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEnable: 'boolean',
      aclEntries: { 'type': 'array', 'itemType': ListInstanceEndpointResponseBodyEndpointsAclEntries },
      domains: { 'type': 'array', 'itemType': ListInstanceEndpointResponseBodyEndpointsDomains },
      enable: 'boolean',
      endpointType: 'string',
      linkedVpcs: { 'type': 'array', 'itemType': ListInstanceEndpointResponseBodyEndpointsLinkedVpcs },
      status: 'string',
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
  autoCreateRepo?: boolean;
  defaultRepoType?: string;
  instanceId?: string;
  namespaceId?: string;
  namespaceName?: string;
  namespaceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreateRepo: 'AutoCreateRepo',
      defaultRepoType: 'DefaultRepoType',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      namespaceStatus: 'NamespaceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreateRepo: 'boolean',
      defaultRepoType: 'string',
      instanceId: 'string',
      namespaceId: 'string',
      namespaceName: 'string',
      namespaceStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRecordResponseBodyBuildRecordsImage extends $tea.Model {
  imageTag?: string;
  repoId?: string;
  repoName?: string;
  repoNamespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      imageTag: 'ImageTag',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageTag: 'string',
      repoId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRecordResponseBodyBuildRecords extends $tea.Model {
  buildRecordId?: string;
  buildStatus?: string;
  endTime?: string;
  image?: ListRepoBuildRecordResponseBodyBuildRecordsImage;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      buildRecordId: 'BuildRecordId',
      buildStatus: 'BuildStatus',
      endTime: 'EndTime',
      image: 'Image',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRecordId: 'string',
      buildStatus: 'string',
      endTime: 'string',
      image: ListRepoBuildRecordResponseBodyBuildRecordsImage,
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRecordLogResponseBodyBuildRecordLogs extends $tea.Model {
  buildStage?: string;
  lineNumber?: number;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      buildStage: 'BuildStage',
      lineNumber: 'LineNumber',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildStage: 'string',
      lineNumber: 'number',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRuleResponseBodyBuildRules extends $tea.Model {
  buildArgs?: string[];
  buildRuleId?: string;
  dockerfileLocation?: string;
  dockerfileName?: string;
  imageTag?: string;
  platforms?: string[];
  pushName?: string;
  pushType?: string;
  static names(): { [key: string]: string } {
    return {
      buildArgs: 'BuildArgs',
      buildRuleId: 'BuildRuleId',
      dockerfileLocation: 'DockerfileLocation',
      dockerfileName: 'DockerfileName',
      imageTag: 'ImageTag',
      platforms: 'Platforms',
      pushName: 'PushName',
      pushType: 'PushType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildArgs: { 'type': 'array', 'itemType': 'string' },
      buildRuleId: 'string',
      dockerfileLocation: 'string',
      dockerfileName: 'string',
      imageTag: 'string',
      platforms: { 'type': 'array', 'itemType': 'string' },
      pushName: 'string',
      pushType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoSyncRuleResponseBodySyncRules extends $tea.Model {
  createTime?: number;
  crossUser?: boolean;
  localInstanceId?: string;
  localNamespaceName?: string;
  localRegionId?: string;
  localRepoName?: string;
  modifiedTime?: number;
  syncDirection?: string;
  syncRuleId?: string;
  syncRuleName?: string;
  syncScope?: string;
  syncTrigger?: string;
  tagFilter?: string;
  targetInstanceId?: string;
  targetNamespaceName?: string;
  targetRegionId?: string;
  targetRepoName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      crossUser: 'CrossUser',
      localInstanceId: 'LocalInstanceId',
      localNamespaceName: 'LocalNamespaceName',
      localRegionId: 'LocalRegionId',
      localRepoName: 'LocalRepoName',
      modifiedTime: 'ModifiedTime',
      syncDirection: 'SyncDirection',
      syncRuleId: 'SyncRuleId',
      syncRuleName: 'SyncRuleName',
      syncScope: 'SyncScope',
      syncTrigger: 'SyncTrigger',
      tagFilter: 'TagFilter',
      targetInstanceId: 'TargetInstanceId',
      targetNamespaceName: 'TargetNamespaceName',
      targetRegionId: 'TargetRegionId',
      targetRepoName: 'TargetRepoName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      crossUser: 'boolean',
      localInstanceId: 'string',
      localNamespaceName: 'string',
      localRegionId: 'string',
      localRepoName: 'string',
      modifiedTime: 'number',
      syncDirection: 'string',
      syncRuleId: 'string',
      syncRuleName: 'string',
      syncScope: 'string',
      syncTrigger: 'string',
      tagFilter: 'string',
      targetInstanceId: 'string',
      targetNamespaceName: 'string',
      targetRegionId: 'string',
      targetRepoName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoSyncTaskResponseBodySyncTasksImageFrom extends $tea.Model {
  imageTag?: string;
  instanceId?: string;
  regionId?: string;
  repoName?: string;
  repoNamespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      imageTag: 'ImageTag',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageTag: 'string',
      instanceId: 'string',
      regionId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoSyncTaskResponseBodySyncTasksImageTo extends $tea.Model {
  imageTag?: string;
  instanceId?: string;
  regionId?: string;
  repoName?: string;
  repoNamespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      imageTag: 'ImageTag',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageTag: 'string',
      instanceId: 'string',
      regionId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoSyncTaskResponseBodySyncTasks extends $tea.Model {
  createTime?: number;
  crossUser?: boolean;
  imageFrom?: ListRepoSyncTaskResponseBodySyncTasksImageFrom;
  imageTo?: ListRepoSyncTaskResponseBodySyncTasksImageTo;
  modifedTime?: number;
  syncBatchTaskId?: string;
  syncRuleId?: string;
  syncTaskId?: string;
  taskStatus?: string;
  taskTrigger?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      crossUser: 'CrossUser',
      imageFrom: 'ImageFrom',
      imageTo: 'ImageTo',
      modifedTime: 'ModifedTime',
      syncBatchTaskId: 'SyncBatchTaskId',
      syncRuleId: 'SyncRuleId',
      syncTaskId: 'SyncTaskId',
      taskStatus: 'TaskStatus',
      taskTrigger: 'TaskTrigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      crossUser: 'boolean',
      imageFrom: ListRepoSyncTaskResponseBodySyncTasksImageFrom,
      imageTo: ListRepoSyncTaskResponseBodySyncTasksImageTo,
      modifedTime: 'number',
      syncBatchTaskId: 'string',
      syncRuleId: 'string',
      syncTaskId: 'string',
      taskStatus: 'string',
      taskTrigger: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTagResponseBodyImages extends $tea.Model {
  digest?: string;
  imageCreate?: string;
  imageId?: string;
  imageSize?: number;
  imageUpdate?: string;
  status?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      digest: 'Digest',
      imageCreate: 'ImageCreate',
      imageId: 'ImageId',
      imageSize: 'ImageSize',
      imageUpdate: 'ImageUpdate',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digest: 'string',
      imageCreate: 'string',
      imageId: 'string',
      imageSize: 'number',
      imageUpdate: 'string',
      status: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTagScanResultResponseBodyVulnerabilities extends $tea.Model {
  addedBy?: string;
  cveLink?: string;
  cveName?: string;
  description?: string;
  feature?: string;
  fixCmd?: string;
  severity?: string;
  version?: string;
  versionFixed?: string;
  versionFormat?: string;
  static names(): { [key: string]: string } {
    return {
      addedBy: 'AddedBy',
      cveLink: 'CveLink',
      cveName: 'CveName',
      description: 'Description',
      feature: 'Feature',
      fixCmd: 'FixCmd',
      severity: 'Severity',
      version: 'Version',
      versionFixed: 'VersionFixed',
      versionFormat: 'VersionFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addedBy: 'string',
      cveLink: 'string',
      cveName: 'string',
      description: 'string',
      feature: 'string',
      fixCmd: 'string',
      severity: 'string',
      version: 'string',
      versionFixed: 'string',
      versionFormat: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTriggerResponseBodyTriggers extends $tea.Model {
  repoEvent?: string;
  triggerId?: string;
  triggerName?: string;
  triggerTag?: string;
  triggerType?: string;
  triggerUrl?: string;
  static names(): { [key: string]: string } {
    return {
      repoEvent: 'RepoEvent',
      triggerId: 'TriggerId',
      triggerName: 'TriggerName',
      triggerTag: 'TriggerTag',
      triggerType: 'TriggerType',
      triggerUrl: 'TriggerUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      repoEvent: 'string',
      triggerId: 'string',
      triggerName: 'string',
      triggerTag: 'string',
      triggerType: 'string',
      triggerUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryResponseBodyRepositories extends $tea.Model {
  createTime?: number;
  instanceId?: string;
  modifiedTime?: number;
  repoBuildType?: string;
  repoId?: string;
  repoName?: string;
  repoNamespaceName?: string;
  repoStatus?: string;
  repoType?: string;
  summary?: string;
  tagImmutability?: boolean;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      modifiedTime: 'ModifiedTime',
      repoBuildType: 'RepoBuildType',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      repoStatus: 'RepoStatus',
      repoType: 'RepoType',
      summary: 'Summary',
      tagImmutability: 'TagImmutability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      instanceId: 'string',
      modifiedTime: 'number',
      repoBuildType: 'string',
      repoId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
      repoStatus: 'string',
      repoType: 'string',
      summary: 'string',
      tagImmutability: 'boolean',
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

  async cancelArtifactBuildTaskWithOptions(request: CancelArtifactBuildTaskRequest, runtime: $Util.RuntimeOptions): Promise<CancelArtifactBuildTaskResponse> {
    Util.validateModel(request);
    let query = { };
    query["BuildTaskId"] = request.buildTaskId;
    query["InstanceId"] = request.instanceId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelArtifactBuildTask",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelArtifactBuildTaskResponse>(await this.callApi(params, req, runtime), new CancelArtifactBuildTaskResponse({}));
  }

  async cancelArtifactBuildTask(request: CancelArtifactBuildTaskRequest): Promise<CancelArtifactBuildTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelArtifactBuildTaskWithOptions(request, runtime);
  }

  async cancelRepoBuildRecordWithOptions(request: CancelRepoBuildRecordRequest, runtime: $Util.RuntimeOptions): Promise<CancelRepoBuildRecordResponse> {
    Util.validateModel(request);
    let query = { };
    query["BuildRecordId"] = request.buildRecordId;
    query["InstanceId"] = request.instanceId;
    query["RepoId"] = request.repoId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelRepoBuildRecord",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelRepoBuildRecordResponse>(await this.callApi(params, req, runtime), new CancelRepoBuildRecordResponse({}));
  }

  async cancelRepoBuildRecord(request: CancelRepoBuildRecordRequest): Promise<CancelRepoBuildRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelRepoBuildRecordWithOptions(request, runtime);
  }

  async createBuildRecordByRuleWithOptions(request: CreateBuildRecordByRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateBuildRecordByRuleResponse> {
    Util.validateModel(request);
    let query = { };
    query["BuildRuleId"] = request.buildRuleId;
    query["InstanceId"] = request.instanceId;
    query["RepoId"] = request.repoId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateBuildRecordByRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateBuildRecordByRuleResponse>(await this.callApi(params, req, runtime), new CreateBuildRecordByRuleResponse({}));
  }

  async createBuildRecordByRule(request: CreateBuildRecordByRuleRequest): Promise<CreateBuildRecordByRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBuildRecordByRuleWithOptions(request, runtime);
  }

  async createChainWithOptions(request: CreateChainRequest, runtime: $Util.RuntimeOptions): Promise<CreateChainResponse> {
    Util.validateModel(request);
    let query = { };
    query["ChainConfig"] = request.chainConfig;
    query["Description"] = request.description;
    query["InstanceId"] = request.instanceId;
    query["Name"] = request.name;
    query["RepoName"] = request.repoName;
    query["RepoNamespaceName"] = request.repoNamespaceName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateChain",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateChainResponse>(await this.callApi(params, req, runtime), new CreateChainResponse({}));
  }

  async createChain(request: CreateChainRequest): Promise<CreateChainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createChainWithOptions(request, runtime);
  }

  async createChartNamespaceWithOptions(request: CreateChartNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<CreateChartNamespaceResponse> {
    Util.validateModel(request);
    let query = { };
    query["AutoCreateRepo"] = request.autoCreateRepo;
    query["DefaultRepoType"] = request.defaultRepoType;
    query["InstanceId"] = request.instanceId;
    query["NamespaceName"] = request.namespaceName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateChartNamespace",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateChartNamespaceResponse>(await this.callApi(params, req, runtime), new CreateChartNamespaceResponse({}));
  }

  async createChartNamespace(request: CreateChartNamespaceRequest): Promise<CreateChartNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createChartNamespaceWithOptions(request, runtime);
  }

  async createChartRepositoryWithOptions(request: CreateChartRepositoryRequest, runtime: $Util.RuntimeOptions): Promise<CreateChartRepositoryResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["RepoName"] = request.repoName;
    query["RepoNamespaceName"] = request.repoNamespaceName;
    query["RepoType"] = request.repoType;
    query["Summary"] = request.summary;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateChartRepository",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateChartRepositoryResponse>(await this.callApi(params, req, runtime), new CreateChartRepositoryResponse({}));
  }

  async createChartRepository(request: CreateChartRepositoryRequest): Promise<CreateChartRepositoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createChartRepositoryWithOptions(request, runtime);
  }

  async createInstanceEndpointAclPolicyWithOptions(request: CreateInstanceEndpointAclPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceEndpointAclPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    query["Comment"] = request.comment;
    query["EndpointType"] = request.endpointType;
    query["Entry"] = request.entry;
    query["InstanceId"] = request.instanceId;
    query["ModuleName"] = request.moduleName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstanceEndpointAclPolicy",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceEndpointAclPolicyResponse>(await this.callApi(params, req, runtime), new CreateInstanceEndpointAclPolicyResponse({}));
  }

  async createInstanceEndpointAclPolicy(request: CreateInstanceEndpointAclPolicyRequest): Promise<CreateInstanceEndpointAclPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceEndpointAclPolicyWithOptions(request, runtime);
  }

  async createInstanceVpcEndpointLinkedVpcWithOptions(request: CreateInstanceVpcEndpointLinkedVpcRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceVpcEndpointLinkedVpcResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["ModuleName"] = request.moduleName;
    query["VpcId"] = request.vpcId;
    query["VswitchId"] = request.vswitchId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstanceVpcEndpointLinkedVpc",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceVpcEndpointLinkedVpcResponse>(await this.callApi(params, req, runtime), new CreateInstanceVpcEndpointLinkedVpcResponse({}));
  }

  async createInstanceVpcEndpointLinkedVpc(request: CreateInstanceVpcEndpointLinkedVpcRequest): Promise<CreateInstanceVpcEndpointLinkedVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceVpcEndpointLinkedVpcWithOptions(request, runtime);
  }

  async createNamespaceWithOptions(request: CreateNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<CreateNamespaceResponse> {
    Util.validateModel(request);
    let query = { };
    query["AutoCreateRepo"] = request.autoCreateRepo;
    query["DefaultRepoType"] = request.defaultRepoType;
    query["InstanceId"] = request.instanceId;
    query["NamespaceName"] = request.namespaceName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateNamespace",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateNamespaceResponse>(await this.callApi(params, req, runtime), new CreateNamespaceResponse({}));
  }

  async createNamespace(request: CreateNamespaceRequest): Promise<CreateNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNamespaceWithOptions(request, runtime);
  }

  async createRepoBuildRuleWithOptions(request: CreateRepoBuildRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateRepoBuildRuleResponse> {
    Util.validateModel(request);
    let query = { };
    query["DockerfileLocation"] = request.dockerfileLocation;
    query["DockerfileName"] = request.dockerfileName;
    query["ImageTag"] = request.imageTag;
    query["InstanceId"] = request.instanceId;
    query["PushName"] = request.pushName;
    query["PushType"] = request.pushType;
    query["RepoId"] = request.repoId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRepoBuildRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRepoBuildRuleResponse>(await this.callApi(params, req, runtime), new CreateRepoBuildRuleResponse({}));
  }

  async createRepoBuildRule(request: CreateRepoBuildRuleRequest): Promise<CreateRepoBuildRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRepoBuildRuleWithOptions(request, runtime);
  }

  async createRepoSourceCodeRepoWithOptions(request: CreateRepoSourceCodeRepoRequest, runtime: $Util.RuntimeOptions): Promise<CreateRepoSourceCodeRepoResponse> {
    Util.validateModel(request);
    let query = { };
    query["AutoBuild"] = request.autoBuild;
    query["CodeRepoName"] = request.codeRepoName;
    query["CodeRepoNamespaceName"] = request.codeRepoNamespaceName;
    query["CodeRepoType"] = request.codeRepoType;
    query["DisableCacheBuild"] = request.disableCacheBuild;
    query["InstanceId"] = request.instanceId;
    query["OverseaBuild"] = request.overseaBuild;
    query["RepoId"] = request.repoId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRepoSourceCodeRepo",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRepoSourceCodeRepoResponse>(await this.callApi(params, req, runtime), new CreateRepoSourceCodeRepoResponse({}));
  }

  async createRepoSourceCodeRepo(request: CreateRepoSourceCodeRepoRequest): Promise<CreateRepoSourceCodeRepoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRepoSourceCodeRepoWithOptions(request, runtime);
  }

  async createRepoSyncRuleWithOptions(request: CreateRepoSyncRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateRepoSyncRuleResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["NamespaceName"] = request.namespaceName;
    query["RepoName"] = request.repoName;
    query["SyncRuleName"] = request.syncRuleName;
    query["SyncScope"] = request.syncScope;
    query["SyncTrigger"] = request.syncTrigger;
    query["TagFilter"] = request.tagFilter;
    query["TargetInstanceId"] = request.targetInstanceId;
    query["TargetNamespaceName"] = request.targetNamespaceName;
    query["TargetRegionId"] = request.targetRegionId;
    query["TargetRepoName"] = request.targetRepoName;
    query["TargetUserId"] = request.targetUserId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRepoSyncRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRepoSyncRuleResponse>(await this.callApi(params, req, runtime), new CreateRepoSyncRuleResponse({}));
  }

  async createRepoSyncRule(request: CreateRepoSyncRuleRequest): Promise<CreateRepoSyncRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRepoSyncRuleWithOptions(request, runtime);
  }

  async createRepoSyncTaskWithOptions(request: CreateRepoSyncTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateRepoSyncTaskResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["Override"] = request.override;
    query["RepoId"] = request.repoId;
    query["Tag"] = request.tag;
    query["TargetInstanceId"] = request.targetInstanceId;
    query["TargetNamespace"] = request.targetNamespace;
    query["TargetRegionId"] = request.targetRegionId;
    query["TargetRepoName"] = request.targetRepoName;
    query["TargetTag"] = request.targetTag;
    query["TargetUserId"] = request.targetUserId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRepoSyncTask",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRepoSyncTaskResponse>(await this.callApi(params, req, runtime), new CreateRepoSyncTaskResponse({}));
  }

  async createRepoSyncTask(request: CreateRepoSyncTaskRequest): Promise<CreateRepoSyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRepoSyncTaskWithOptions(request, runtime);
  }

  async createRepoSyncTaskByRuleWithOptions(request: CreateRepoSyncTaskByRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateRepoSyncTaskByRuleResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["RepoId"] = request.repoId;
    query["SyncRuleId"] = request.syncRuleId;
    query["Tag"] = request.tag;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRepoSyncTaskByRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRepoSyncTaskByRuleResponse>(await this.callApi(params, req, runtime), new CreateRepoSyncTaskByRuleResponse({}));
  }

  async createRepoSyncTaskByRule(request: CreateRepoSyncTaskByRuleRequest): Promise<CreateRepoSyncTaskByRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRepoSyncTaskByRuleWithOptions(request, runtime);
  }

  async createRepoTagWithOptions(request: CreateRepoTagRequest, runtime: $Util.RuntimeOptions): Promise<CreateRepoTagResponse> {
    Util.validateModel(request);
    let query = { };
    query["FromTag"] = request.fromTag;
    query["InstanceId"] = request.instanceId;
    query["NamespaceName"] = request.namespaceName;
    query["RepoName"] = request.repoName;
    query["ToTag"] = request.toTag;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRepoTag",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRepoTagResponse>(await this.callApi(params, req, runtime), new CreateRepoTagResponse({}));
  }

  async createRepoTag(request: CreateRepoTagRequest): Promise<CreateRepoTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRepoTagWithOptions(request, runtime);
  }

  async createRepoTagScanTaskWithOptions(request: CreateRepoTagScanTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateRepoTagScanTaskResponse> {
    Util.validateModel(request);
    let query = { };
    query["Digest"] = request.digest;
    query["InstanceId"] = request.instanceId;
    query["RepoId"] = request.repoId;
    query["ScanService"] = request.scanService;
    query["Tag"] = request.tag;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRepoTagScanTask",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRepoTagScanTaskResponse>(await this.callApi(params, req, runtime), new CreateRepoTagScanTaskResponse({}));
  }

  async createRepoTagScanTask(request: CreateRepoTagScanTaskRequest): Promise<CreateRepoTagScanTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRepoTagScanTaskWithOptions(request, runtime);
  }

  async createRepoTriggerWithOptions(request: CreateRepoTriggerRequest, runtime: $Util.RuntimeOptions): Promise<CreateRepoTriggerResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["RepoId"] = request.repoId;
    query["TriggerName"] = request.triggerName;
    query["TriggerTag"] = request.triggerTag;
    query["TriggerType"] = request.triggerType;
    query["TriggerUrl"] = request.triggerUrl;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRepoTrigger",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRepoTriggerResponse>(await this.callApi(params, req, runtime), new CreateRepoTriggerResponse({}));
  }

  async createRepoTrigger(request: CreateRepoTriggerRequest): Promise<CreateRepoTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRepoTriggerWithOptions(request, runtime);
  }

  async createRepositoryWithOptions(request: CreateRepositoryRequest, runtime: $Util.RuntimeOptions): Promise<CreateRepositoryResponse> {
    Util.validateModel(request);
    let query = { };
    query["Detail"] = request.detail;
    query["InstanceId"] = request.instanceId;
    query["RepoName"] = request.repoName;
    query["RepoNamespaceName"] = request.repoNamespaceName;
    query["RepoType"] = request.repoType;
    query["Summary"] = request.summary;
    query["TagImmutability"] = request.tagImmutability;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRepository",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRepositoryResponse>(await this.callApi(params, req, runtime), new CreateRepositoryResponse({}));
  }

  async createRepository(request: CreateRepositoryRequest): Promise<CreateRepositoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRepositoryWithOptions(request, runtime);
  }

  async deleteChainWithOptions(request: DeleteChainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteChainResponse> {
    Util.validateModel(request);
    let query = { };
    query["ChainId"] = request.chainId;
    query["InstanceId"] = request.instanceId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteChain",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteChainResponse>(await this.callApi(params, req, runtime), new DeleteChainResponse({}));
  }

  async deleteChain(request: DeleteChainRequest): Promise<DeleteChainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteChainWithOptions(request, runtime);
  }

  async deleteChartNamespaceWithOptions(request: DeleteChartNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteChartNamespaceResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["NamespaceName"] = request.namespaceName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteChartNamespace",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteChartNamespaceResponse>(await this.callApi(params, req, runtime), new DeleteChartNamespaceResponse({}));
  }

  async deleteChartNamespace(request: DeleteChartNamespaceRequest): Promise<DeleteChartNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteChartNamespaceWithOptions(request, runtime);
  }

  async deleteChartReleaseWithOptions(request: DeleteChartReleaseRequest, runtime: $Util.RuntimeOptions): Promise<DeleteChartReleaseResponse> {
    Util.validateModel(request);
    let query = { };
    query["Chart"] = request.chart;
    query["InstanceId"] = request.instanceId;
    query["Release"] = request.release;
    query["RepoName"] = request.repoName;
    query["RepoNamespaceName"] = request.repoNamespaceName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteChartRelease",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteChartReleaseResponse>(await this.callApi(params, req, runtime), new DeleteChartReleaseResponse({}));
  }

  async deleteChartRelease(request: DeleteChartReleaseRequest): Promise<DeleteChartReleaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteChartReleaseWithOptions(request, runtime);
  }

  async deleteChartRepositoryWithOptions(request: DeleteChartRepositoryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteChartRepositoryResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["RepoName"] = request.repoName;
    query["RepoNamespaceName"] = request.repoNamespaceName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteChartRepository",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteChartRepositoryResponse>(await this.callApi(params, req, runtime), new DeleteChartRepositoryResponse({}));
  }

  async deleteChartRepository(request: DeleteChartRepositoryRequest): Promise<DeleteChartRepositoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteChartRepositoryWithOptions(request, runtime);
  }

  async deleteEventCenterRuleWithOptions(request: DeleteEventCenterRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEventCenterRuleResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["RuleId"] = request.ruleId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEventCenterRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteEventCenterRuleResponse>(await this.callApi(params, req, runtime), new DeleteEventCenterRuleResponse({}));
  }

  async deleteEventCenterRule(request: DeleteEventCenterRuleRequest): Promise<DeleteEventCenterRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEventCenterRuleWithOptions(request, runtime);
  }

  async deleteInstanceEndpointAclPolicyWithOptions(request: DeleteInstanceEndpointAclPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceEndpointAclPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    query["EndpointType"] = request.endpointType;
    query["Entry"] = request.entry;
    query["InstanceId"] = request.instanceId;
    query["ModuleName"] = request.moduleName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteInstanceEndpointAclPolicy",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteInstanceEndpointAclPolicyResponse>(await this.callApi(params, req, runtime), new DeleteInstanceEndpointAclPolicyResponse({}));
  }

  async deleteInstanceEndpointAclPolicy(request: DeleteInstanceEndpointAclPolicyRequest): Promise<DeleteInstanceEndpointAclPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInstanceEndpointAclPolicyWithOptions(request, runtime);
  }

  async deleteInstanceVpcEndpointLinkedVpcWithOptions(request: DeleteInstanceVpcEndpointLinkedVpcRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceVpcEndpointLinkedVpcResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["ModuleName"] = request.moduleName;
    query["VpcId"] = request.vpcId;
    query["VswitchId"] = request.vswitchId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteInstanceVpcEndpointLinkedVpc",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteInstanceVpcEndpointLinkedVpcResponse>(await this.callApi(params, req, runtime), new DeleteInstanceVpcEndpointLinkedVpcResponse({}));
  }

  async deleteInstanceVpcEndpointLinkedVpc(request: DeleteInstanceVpcEndpointLinkedVpcRequest): Promise<DeleteInstanceVpcEndpointLinkedVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInstanceVpcEndpointLinkedVpcWithOptions(request, runtime);
  }

  async deleteNamespaceWithOptions(request: DeleteNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNamespaceResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["NamespaceName"] = request.namespaceName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNamespace",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteNamespaceResponse>(await this.callApi(params, req, runtime), new DeleteNamespaceResponse({}));
  }

  async deleteNamespace(request: DeleteNamespaceRequest): Promise<DeleteNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNamespaceWithOptions(request, runtime);
  }

  async deleteRepoBuildRuleWithOptions(request: DeleteRepoBuildRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRepoBuildRuleResponse> {
    Util.validateModel(request);
    let query = { };
    query["BuildRuleId"] = request.buildRuleId;
    query["InstanceId"] = request.instanceId;
    query["RepoId"] = request.repoId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRepoBuildRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRepoBuildRuleResponse>(await this.callApi(params, req, runtime), new DeleteRepoBuildRuleResponse({}));
  }

  async deleteRepoBuildRule(request: DeleteRepoBuildRuleRequest): Promise<DeleteRepoBuildRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRepoBuildRuleWithOptions(request, runtime);
  }

  async deleteRepoSyncRuleWithOptions(request: DeleteRepoSyncRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRepoSyncRuleResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["SyncRuleId"] = request.syncRuleId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRepoSyncRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRepoSyncRuleResponse>(await this.callApi(params, req, runtime), new DeleteRepoSyncRuleResponse({}));
  }

  async deleteRepoSyncRule(request: DeleteRepoSyncRuleRequest): Promise<DeleteRepoSyncRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRepoSyncRuleWithOptions(request, runtime);
  }

  async deleteRepoTagWithOptions(request: DeleteRepoTagRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRepoTagResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["RepoId"] = request.repoId;
    query["Tag"] = request.tag;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRepoTag",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRepoTagResponse>(await this.callApi(params, req, runtime), new DeleteRepoTagResponse({}));
  }

  async deleteRepoTag(request: DeleteRepoTagRequest): Promise<DeleteRepoTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRepoTagWithOptions(request, runtime);
  }

  async deleteRepoTriggerWithOptions(request: DeleteRepoTriggerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRepoTriggerResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["RepoId"] = request.repoId;
    query["TriggerId"] = request.triggerId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRepoTrigger",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRepoTriggerResponse>(await this.callApi(params, req, runtime), new DeleteRepoTriggerResponse({}));
  }

  async deleteRepoTrigger(request: DeleteRepoTriggerRequest): Promise<DeleteRepoTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRepoTriggerWithOptions(request, runtime);
  }

  async deleteRepositoryWithOptions(request: DeleteRepositoryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRepositoryResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["RepoId"] = request.repoId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRepository",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRepositoryResponse>(await this.callApi(params, req, runtime), new DeleteRepositoryResponse({}));
  }

  async deleteRepository(request: DeleteRepositoryRequest): Promise<DeleteRepositoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRepositoryWithOptions(request, runtime);
  }

  async getArtifactBuildTaskWithOptions(request: GetArtifactBuildTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetArtifactBuildTaskResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetArtifactBuildTask",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetArtifactBuildTaskResponse>(await this.callApi(params, req, runtime), new GetArtifactBuildTaskResponse({}));
  }

  async getArtifactBuildTask(request: GetArtifactBuildTaskRequest): Promise<GetArtifactBuildTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getArtifactBuildTaskWithOptions(request, runtime);
  }

  async getAuthorizationTokenWithOptions(request: GetAuthorizationTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetAuthorizationTokenResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAuthorizationToken",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAuthorizationTokenResponse>(await this.callApi(params, req, runtime), new GetAuthorizationTokenResponse({}));
  }

  async getAuthorizationToken(request: GetAuthorizationTokenRequest): Promise<GetAuthorizationTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAuthorizationTokenWithOptions(request, runtime);
  }

  async getChainWithOptions(request: GetChainRequest, runtime: $Util.RuntimeOptions): Promise<GetChainResponse> {
    Util.validateModel(request);
    let query = { };
    query["ChainId"] = request.chainId;
    query["InstanceId"] = request.instanceId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetChain",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetChainResponse>(await this.callApi(params, req, runtime), new GetChainResponse({}));
  }

  async getChain(request: GetChainRequest): Promise<GetChainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getChainWithOptions(request, runtime);
  }

  async getChartNamespaceWithOptions(request: GetChartNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<GetChartNamespaceResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["NamespaceName"] = request.namespaceName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetChartNamespace",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetChartNamespaceResponse>(await this.callApi(params, req, runtime), new GetChartNamespaceResponse({}));
  }

  async getChartNamespace(request: GetChartNamespaceRequest): Promise<GetChartNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getChartNamespaceWithOptions(request, runtime);
  }

  async getChartRepositoryWithOptions(request: GetChartRepositoryRequest, runtime: $Util.RuntimeOptions): Promise<GetChartRepositoryResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["RepoName"] = request.repoName;
    query["RepoNamespaceName"] = request.repoNamespaceName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetChartRepository",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetChartRepositoryResponse>(await this.callApi(params, req, runtime), new GetChartRepositoryResponse({}));
  }

  async getChartRepository(request: GetChartRepositoryRequest): Promise<GetChartRepositoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getChartRepositoryWithOptions(request, runtime);
  }

  async getInstanceWithOptions(request: GetInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetInstance",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceResponse>(await this.callApi(params, req, runtime), new GetInstanceResponse({}));
  }

  async getInstance(request: GetInstanceRequest): Promise<GetInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceWithOptions(request, runtime);
  }

  async getInstanceCountWithOptions(request: GetInstanceCountRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetInstanceCount",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceCountResponse>(await this.callApi(params, req, runtime), new GetInstanceCountResponse({}));
  }

  async getInstanceCount(request: GetInstanceCountRequest): Promise<GetInstanceCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceCountWithOptions(request, runtime);
  }

  async getInstanceEndpointWithOptions(request: GetInstanceEndpointRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceEndpointResponse> {
    Util.validateModel(request);
    let query = { };
    query["EndpointType"] = request.endpointType;
    query["InstanceId"] = request.instanceId;
    query["ModuleName"] = request.moduleName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetInstanceEndpoint",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceEndpointResponse>(await this.callApi(params, req, runtime), new GetInstanceEndpointResponse({}));
  }

  async getInstanceEndpoint(request: GetInstanceEndpointRequest): Promise<GetInstanceEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceEndpointWithOptions(request, runtime);
  }

  async getInstanceUsageWithOptions(request: GetInstanceUsageRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceUsageResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetInstanceUsage",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceUsageResponse>(await this.callApi(params, req, runtime), new GetInstanceUsageResponse({}));
  }

  async getInstanceUsage(request: GetInstanceUsageRequest): Promise<GetInstanceUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceUsageWithOptions(request, runtime);
  }

  async getInstanceVpcEndpointWithOptions(request: GetInstanceVpcEndpointRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceVpcEndpointResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["ModuleName"] = request.moduleName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetInstanceVpcEndpoint",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceVpcEndpointResponse>(await this.callApi(params, req, runtime), new GetInstanceVpcEndpointResponse({}));
  }

  async getInstanceVpcEndpoint(request: GetInstanceVpcEndpointRequest): Promise<GetInstanceVpcEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceVpcEndpointWithOptions(request, runtime);
  }

  async getNamespaceWithOptions(request: GetNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<GetNamespaceResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["NamespaceId"] = request.namespaceId;
    query["NamespaceName"] = request.namespaceName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetNamespace",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetNamespaceResponse>(await this.callApi(params, req, runtime), new GetNamespaceResponse({}));
  }

  async getNamespace(request: GetNamespaceRequest): Promise<GetNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNamespaceWithOptions(request, runtime);
  }

  async getRepoBuildRecordWithOptions(request: GetRepoBuildRecordRequest, runtime: $Util.RuntimeOptions): Promise<GetRepoBuildRecordResponse> {
    Util.validateModel(request);
    let query = { };
    query["BuildRecordId"] = request.buildRecordId;
    query["InstanceId"] = request.instanceId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRepoBuildRecord",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRepoBuildRecordResponse>(await this.callApi(params, req, runtime), new GetRepoBuildRecordResponse({}));
  }

  async getRepoBuildRecord(request: GetRepoBuildRecordRequest): Promise<GetRepoBuildRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRepoBuildRecordWithOptions(request, runtime);
  }

  async getRepoBuildRecordStatusWithOptions(request: GetRepoBuildRecordStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetRepoBuildRecordStatusResponse> {
    Util.validateModel(request);
    let query = { };
    query["BuildRecordId"] = request.buildRecordId;
    query["InstanceId"] = request.instanceId;
    query["RepoId"] = request.repoId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRepoBuildRecordStatus",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRepoBuildRecordStatusResponse>(await this.callApi(params, req, runtime), new GetRepoBuildRecordStatusResponse({}));
  }

  async getRepoBuildRecordStatus(request: GetRepoBuildRecordStatusRequest): Promise<GetRepoBuildRecordStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRepoBuildRecordStatusWithOptions(request, runtime);
  }

  async getRepoSourceCodeRepoWithOptions(request: GetRepoSourceCodeRepoRequest, runtime: $Util.RuntimeOptions): Promise<GetRepoSourceCodeRepoResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["RepoId"] = request.repoId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRepoSourceCodeRepo",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRepoSourceCodeRepoResponse>(await this.callApi(params, req, runtime), new GetRepoSourceCodeRepoResponse({}));
  }

  async getRepoSourceCodeRepo(request: GetRepoSourceCodeRepoRequest): Promise<GetRepoSourceCodeRepoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRepoSourceCodeRepoWithOptions(request, runtime);
  }

  async getRepoSyncTaskWithOptions(request: GetRepoSyncTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetRepoSyncTaskResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["SyncTaskId"] = request.syncTaskId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRepoSyncTask",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRepoSyncTaskResponse>(await this.callApi(params, req, runtime), new GetRepoSyncTaskResponse({}));
  }

  async getRepoSyncTask(request: GetRepoSyncTaskRequest): Promise<GetRepoSyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRepoSyncTaskWithOptions(request, runtime);
  }

  async getRepoTagWithOptions(request: GetRepoTagRequest, runtime: $Util.RuntimeOptions): Promise<GetRepoTagResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRepoTag",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRepoTagResponse>(await this.callApi(params, req, runtime), new GetRepoTagResponse({}));
  }

  async getRepoTag(request: GetRepoTagRequest): Promise<GetRepoTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRepoTagWithOptions(request, runtime);
  }

  async getRepoTagLayersWithOptions(request: GetRepoTagLayersRequest, runtime: $Util.RuntimeOptions): Promise<GetRepoTagLayersResponse> {
    Util.validateModel(request);
    let query = { };
    query["Digest"] = request.digest;
    query["InstanceId"] = request.instanceId;
    query["RepoId"] = request.repoId;
    query["Tag"] = request.tag;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRepoTagLayers",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRepoTagLayersResponse>(await this.callApi(params, req, runtime), new GetRepoTagLayersResponse({}));
  }

  async getRepoTagLayers(request: GetRepoTagLayersRequest): Promise<GetRepoTagLayersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRepoTagLayersWithOptions(request, runtime);
  }

  async getRepoTagManifestWithOptions(request: GetRepoTagManifestRequest, runtime: $Util.RuntimeOptions): Promise<GetRepoTagManifestResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["RepoId"] = request.repoId;
    query["SchemaVersion"] = request.schemaVersion;
    query["Tag"] = request.tag;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRepoTagManifest",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRepoTagManifestResponse>(await this.callApi(params, req, runtime), new GetRepoTagManifestResponse({}));
  }

  async getRepoTagManifest(request: GetRepoTagManifestRequest): Promise<GetRepoTagManifestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRepoTagManifestWithOptions(request, runtime);
  }

  async getRepoTagScanStatusWithOptions(request: GetRepoTagScanStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetRepoTagScanStatusResponse> {
    Util.validateModel(request);
    let query = { };
    query["Digest"] = request.digest;
    query["InstanceId"] = request.instanceId;
    query["RepoId"] = request.repoId;
    query["ScanTaskId"] = request.scanTaskId;
    query["Tag"] = request.tag;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRepoTagScanStatus",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRepoTagScanStatusResponse>(await this.callApi(params, req, runtime), new GetRepoTagScanStatusResponse({}));
  }

  async getRepoTagScanStatus(request: GetRepoTagScanStatusRequest): Promise<GetRepoTagScanStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRepoTagScanStatusWithOptions(request, runtime);
  }

  async getRepoTagScanSummaryWithOptions(request: GetRepoTagScanSummaryRequest, runtime: $Util.RuntimeOptions): Promise<GetRepoTagScanSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    query["Digest"] = request.digest;
    query["InstanceId"] = request.instanceId;
    query["RepoId"] = request.repoId;
    query["ScanTaskId"] = request.scanTaskId;
    query["Tag"] = request.tag;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRepoTagScanSummary",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRepoTagScanSummaryResponse>(await this.callApi(params, req, runtime), new GetRepoTagScanSummaryResponse({}));
  }

  async getRepoTagScanSummary(request: GetRepoTagScanSummaryRequest): Promise<GetRepoTagScanSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRepoTagScanSummaryWithOptions(request, runtime);
  }

  async getRepositoryWithOptions(request: GetRepositoryRequest, runtime: $Util.RuntimeOptions): Promise<GetRepositoryResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["RepoId"] = request.repoId;
    query["RepoName"] = request.repoName;
    query["RepoNamespaceName"] = request.repoNamespaceName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRepository",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRepositoryResponse>(await this.callApi(params, req, runtime), new GetRepositoryResponse({}));
  }

  async getRepository(request: GetRepositoryRequest): Promise<GetRepositoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRepositoryWithOptions(request, runtime);
  }

  async listArtifactBuildTaskLogWithOptions(request: ListArtifactBuildTaskLogRequest, runtime: $Util.RuntimeOptions): Promise<ListArtifactBuildTaskLogResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListArtifactBuildTaskLog",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListArtifactBuildTaskLogResponse>(await this.callApi(params, req, runtime), new ListArtifactBuildTaskLogResponse({}));
  }

  async listArtifactBuildTaskLog(request: ListArtifactBuildTaskLogRequest): Promise<ListArtifactBuildTaskLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listArtifactBuildTaskLogWithOptions(request, runtime);
  }

  async listChainWithOptions(request: ListChainRequest, runtime: $Util.RuntimeOptions): Promise<ListChainResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["PageNo"] = request.pageNo;
    query["PageSize"] = request.pageSize;
    query["RepoName"] = request.repoName;
    query["RepoNamespaceName"] = request.repoNamespaceName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListChain",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListChainResponse>(await this.callApi(params, req, runtime), new ListChainResponse({}));
  }

  async listChain(request: ListChainRequest): Promise<ListChainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listChainWithOptions(request, runtime);
  }

  async listChainInstanceWithOptions(request: ListChainInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ListChainInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["PageNo"] = request.pageNo;
    query["PageSize"] = request.pageSize;
    query["RepoName"] = request.repoName;
    query["RepoNamespaceName"] = request.repoNamespaceName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListChainInstance",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListChainInstanceResponse>(await this.callApi(params, req, runtime), new ListChainInstanceResponse({}));
  }

  async listChainInstance(request: ListChainInstanceRequest): Promise<ListChainInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listChainInstanceWithOptions(request, runtime);
  }

  async listChartNamespaceWithOptions(request: ListChartNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<ListChartNamespaceResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["NamespaceName"] = request.namespaceName;
    query["NamespaceStatus"] = request.namespaceStatus;
    query["PageNo"] = request.pageNo;
    query["PageSize"] = request.pageSize;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListChartNamespace",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListChartNamespaceResponse>(await this.callApi(params, req, runtime), new ListChartNamespaceResponse({}));
  }

  async listChartNamespace(request: ListChartNamespaceRequest): Promise<ListChartNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listChartNamespaceWithOptions(request, runtime);
  }

  async listChartReleaseWithOptions(request: ListChartReleaseRequest, runtime: $Util.RuntimeOptions): Promise<ListChartReleaseResponse> {
    Util.validateModel(request);
    let query = { };
    query["Chart"] = request.chart;
    query["InstanceId"] = request.instanceId;
    query["PageNo"] = request.pageNo;
    query["PageSize"] = request.pageSize;
    query["RepoName"] = request.repoName;
    query["RepoNamespaceName"] = request.repoNamespaceName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListChartRelease",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListChartReleaseResponse>(await this.callApi(params, req, runtime), new ListChartReleaseResponse({}));
  }

  async listChartRelease(request: ListChartReleaseRequest): Promise<ListChartReleaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listChartReleaseWithOptions(request, runtime);
  }

  async listChartRepositoryWithOptions(request: ListChartRepositoryRequest, runtime: $Util.RuntimeOptions): Promise<ListChartRepositoryResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["PageNo"] = request.pageNo;
    query["PageSize"] = request.pageSize;
    query["RepoName"] = request.repoName;
    query["RepoNamespaceName"] = request.repoNamespaceName;
    query["RepoStatus"] = request.repoStatus;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListChartRepository",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListChartRepositoryResponse>(await this.callApi(params, req, runtime), new ListChartRepositoryResponse({}));
  }

  async listChartRepository(request: ListChartRepositoryRequest): Promise<ListChartRepositoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listChartRepositoryWithOptions(request, runtime);
  }

  async listEventCenterRecordWithOptions(request: ListEventCenterRecordRequest, runtime: $Util.RuntimeOptions): Promise<ListEventCenterRecordResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEventCenterRecord",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEventCenterRecordResponse>(await this.callApi(params, req, runtime), new ListEventCenterRecordResponse({}));
  }

  async listEventCenterRecord(request: ListEventCenterRecordRequest): Promise<ListEventCenterRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEventCenterRecordWithOptions(request, runtime);
  }

  async listEventCenterRuleNameWithOptions(request: ListEventCenterRuleNameRequest, runtime: $Util.RuntimeOptions): Promise<ListEventCenterRuleNameResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEventCenterRuleName",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEventCenterRuleNameResponse>(await this.callApi(params, req, runtime), new ListEventCenterRuleNameResponse({}));
  }

  async listEventCenterRuleName(request: ListEventCenterRuleNameRequest): Promise<ListEventCenterRuleNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEventCenterRuleNameWithOptions(request, runtime);
  }

  async listInstanceWithOptions(request: ListInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ListInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceName"] = request.instanceName;
    query["InstanceStatus"] = request.instanceStatus;
    query["PageNo"] = request.pageNo;
    query["PageSize"] = request.pageSize;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstance",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstanceResponse>(await this.callApi(params, req, runtime), new ListInstanceResponse({}));
  }

  async listInstance(request: ListInstanceRequest): Promise<ListInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstanceWithOptions(request, runtime);
  }

  async listInstanceEndpointWithOptions(request: ListInstanceEndpointRequest, runtime: $Util.RuntimeOptions): Promise<ListInstanceEndpointResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["ModuleName"] = request.moduleName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstanceEndpoint",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstanceEndpointResponse>(await this.callApi(params, req, runtime), new ListInstanceEndpointResponse({}));
  }

  async listInstanceEndpoint(request: ListInstanceEndpointRequest): Promise<ListInstanceEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstanceEndpointWithOptions(request, runtime);
  }

  async listInstanceRegionWithOptions(request: ListInstanceRegionRequest, runtime: $Util.RuntimeOptions): Promise<ListInstanceRegionResponse> {
    Util.validateModel(request);
    let query = { };
    query["Lang"] = request.lang;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstanceRegion",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstanceRegionResponse>(await this.callApi(params, req, runtime), new ListInstanceRegionResponse({}));
  }

  async listInstanceRegion(request: ListInstanceRegionRequest): Promise<ListInstanceRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstanceRegionWithOptions(request, runtime);
  }

  async listNamespaceWithOptions(request: ListNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<ListNamespaceResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["NamespaceName"] = request.namespaceName;
    query["NamespaceStatus"] = request.namespaceStatus;
    query["PageNo"] = request.pageNo;
    query["PageSize"] = request.pageSize;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNamespace",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNamespaceResponse>(await this.callApi(params, req, runtime), new ListNamespaceResponse({}));
  }

  async listNamespace(request: ListNamespaceRequest): Promise<ListNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNamespaceWithOptions(request, runtime);
  }

  async listRepoBuildRecordWithOptions(request: ListRepoBuildRecordRequest, runtime: $Util.RuntimeOptions): Promise<ListRepoBuildRecordResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["PageNo"] = request.pageNo;
    query["PageSize"] = request.pageSize;
    query["RepoId"] = request.repoId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRepoBuildRecord",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRepoBuildRecordResponse>(await this.callApi(params, req, runtime), new ListRepoBuildRecordResponse({}));
  }

  async listRepoBuildRecord(request: ListRepoBuildRecordRequest): Promise<ListRepoBuildRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRepoBuildRecordWithOptions(request, runtime);
  }

  async listRepoBuildRecordLogWithOptions(request: ListRepoBuildRecordLogRequest, runtime: $Util.RuntimeOptions): Promise<ListRepoBuildRecordLogResponse> {
    Util.validateModel(request);
    let query = { };
    query["BuildRecordId"] = request.buildRecordId;
    query["InstanceId"] = request.instanceId;
    query["Offset"] = request.offset;
    query["RepoId"] = request.repoId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRepoBuildRecordLog",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRepoBuildRecordLogResponse>(await this.callApi(params, req, runtime), new ListRepoBuildRecordLogResponse({}));
  }

  async listRepoBuildRecordLog(request: ListRepoBuildRecordLogRequest): Promise<ListRepoBuildRecordLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRepoBuildRecordLogWithOptions(request, runtime);
  }

  async listRepoBuildRuleWithOptions(request: ListRepoBuildRuleRequest, runtime: $Util.RuntimeOptions): Promise<ListRepoBuildRuleResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["PageNo"] = request.pageNo;
    query["PageSize"] = request.pageSize;
    query["RepoId"] = request.repoId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRepoBuildRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRepoBuildRuleResponse>(await this.callApi(params, req, runtime), new ListRepoBuildRuleResponse({}));
  }

  async listRepoBuildRule(request: ListRepoBuildRuleRequest): Promise<ListRepoBuildRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRepoBuildRuleWithOptions(request, runtime);
  }

  async listRepoSyncRuleWithOptions(request: ListRepoSyncRuleRequest, runtime: $Util.RuntimeOptions): Promise<ListRepoSyncRuleResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["NamespaceName"] = request.namespaceName;
    query["PageNo"] = request.pageNo;
    query["PageSize"] = request.pageSize;
    query["RepoName"] = request.repoName;
    query["TargetInstanceId"] = request.targetInstanceId;
    query["TargetRegionId"] = request.targetRegionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRepoSyncRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRepoSyncRuleResponse>(await this.callApi(params, req, runtime), new ListRepoSyncRuleResponse({}));
  }

  async listRepoSyncRule(request: ListRepoSyncRuleRequest): Promise<ListRepoSyncRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRepoSyncRuleWithOptions(request, runtime);
  }

  async listRepoSyncTaskWithOptions(request: ListRepoSyncTaskRequest, runtime: $Util.RuntimeOptions): Promise<ListRepoSyncTaskResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["PageNo"] = request.pageNo;
    query["PageSize"] = request.pageSize;
    query["RepoName"] = request.repoName;
    query["RepoNamespaceName"] = request.repoNamespaceName;
    query["SyncRecordId"] = request.syncRecordId;
    query["Tag"] = request.tag;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRepoSyncTask",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRepoSyncTaskResponse>(await this.callApi(params, req, runtime), new ListRepoSyncTaskResponse({}));
  }

  async listRepoSyncTask(request: ListRepoSyncTaskRequest): Promise<ListRepoSyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRepoSyncTaskWithOptions(request, runtime);
  }

  async listRepoTagWithOptions(request: ListRepoTagRequest, runtime: $Util.RuntimeOptions): Promise<ListRepoTagResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["PageNo"] = request.pageNo;
    query["PageSize"] = request.pageSize;
    query["RepoId"] = request.repoId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRepoTag",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRepoTagResponse>(await this.callApi(params, req, runtime), new ListRepoTagResponse({}));
  }

  async listRepoTag(request: ListRepoTagRequest): Promise<ListRepoTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRepoTagWithOptions(request, runtime);
  }

  async listRepoTagScanResultWithOptions(request: ListRepoTagScanResultRequest, runtime: $Util.RuntimeOptions): Promise<ListRepoTagScanResultResponse> {
    Util.validateModel(request);
    let query = { };
    query["Digest"] = request.digest;
    query["InstanceId"] = request.instanceId;
    query["PageNo"] = request.pageNo;
    query["PageSize"] = request.pageSize;
    query["RepoId"] = request.repoId;
    query["ScanTaskId"] = request.scanTaskId;
    query["Severity"] = request.severity;
    query["Tag"] = request.tag;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRepoTagScanResult",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRepoTagScanResultResponse>(await this.callApi(params, req, runtime), new ListRepoTagScanResultResponse({}));
  }

  async listRepoTagScanResult(request: ListRepoTagScanResultRequest): Promise<ListRepoTagScanResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRepoTagScanResultWithOptions(request, runtime);
  }

  async listRepoTriggerWithOptions(request: ListRepoTriggerRequest, runtime: $Util.RuntimeOptions): Promise<ListRepoTriggerResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["RepoId"] = request.repoId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRepoTrigger",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRepoTriggerResponse>(await this.callApi(params, req, runtime), new ListRepoTriggerResponse({}));
  }

  async listRepoTrigger(request: ListRepoTriggerRequest): Promise<ListRepoTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRepoTriggerWithOptions(request, runtime);
  }

  async listRepositoryWithOptions(request: ListRepositoryRequest, runtime: $Util.RuntimeOptions): Promise<ListRepositoryResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["PageNo"] = request.pageNo;
    query["PageSize"] = request.pageSize;
    query["RepoName"] = request.repoName;
    query["RepoNamespaceName"] = request.repoNamespaceName;
    query["RepoStatus"] = request.repoStatus;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRepository",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRepositoryResponse>(await this.callApi(params, req, runtime), new ListRepositoryResponse({}));
  }

  async listRepository(request: ListRepositoryRequest): Promise<ListRepositoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRepositoryWithOptions(request, runtime);
  }

  async resetLoginPasswordWithOptions(request: ResetLoginPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ResetLoginPasswordResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["Password"] = request.password;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetLoginPassword",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetLoginPasswordResponse>(await this.callApi(params, req, runtime), new ResetLoginPasswordResponse({}));
  }

  async resetLoginPassword(request: ResetLoginPasswordRequest): Promise<ResetLoginPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetLoginPasswordWithOptions(request, runtime);
  }

  async updateChainWithOptions(request: UpdateChainRequest, runtime: $Util.RuntimeOptions): Promise<UpdateChainResponse> {
    Util.validateModel(request);
    let query = { };
    query["ChainConfig"] = request.chainConfig;
    query["ChainId"] = request.chainId;
    query["Description"] = request.description;
    query["InstanceId"] = request.instanceId;
    query["Name"] = request.name;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateChain",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateChainResponse>(await this.callApi(params, req, runtime), new UpdateChainResponse({}));
  }

  async updateChain(request: UpdateChainRequest): Promise<UpdateChainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateChainWithOptions(request, runtime);
  }

  async updateChartNamespaceWithOptions(request: UpdateChartNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateChartNamespaceResponse> {
    Util.validateModel(request);
    let query = { };
    query["AutoCreateRepo"] = request.autoCreateRepo;
    query["DefaultRepoType"] = request.defaultRepoType;
    query["InstanceId"] = request.instanceId;
    query["NamespaceName"] = request.namespaceName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateChartNamespace",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateChartNamespaceResponse>(await this.callApi(params, req, runtime), new UpdateChartNamespaceResponse({}));
  }

  async updateChartNamespace(request: UpdateChartNamespaceRequest): Promise<UpdateChartNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateChartNamespaceWithOptions(request, runtime);
  }

  async updateChartRepositoryWithOptions(request: UpdateChartRepositoryRequest, runtime: $Util.RuntimeOptions): Promise<UpdateChartRepositoryResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["RepoName"] = request.repoName;
    query["RepoNamespaceName"] = request.repoNamespaceName;
    query["RepoType"] = request.repoType;
    query["Summary"] = request.summary;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateChartRepository",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateChartRepositoryResponse>(await this.callApi(params, req, runtime), new UpdateChartRepositoryResponse({}));
  }

  async updateChartRepository(request: UpdateChartRepositoryRequest): Promise<UpdateChartRepositoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateChartRepositoryWithOptions(request, runtime);
  }

  async updateEventCenterRuleWithOptions(tmpReq: UpdateEventCenterRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEventCenterRuleResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateEventCenterRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.namespaces)) {
      request.namespacesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.namespaces, "Namespaces", "json");
    }

    if (!Util.isUnset(tmpReq.repoNames)) {
      request.repoNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.repoNames, "RepoNames", "json");
    }

    let query = { };
    query["EventChannel"] = request.eventChannel;
    query["EventConfig"] = request.eventConfig;
    query["EventScope"] = request.eventScope;
    query["EventType"] = request.eventType;
    query["InstanceId"] = request.instanceId;
    query["Namespaces"] = request.namespacesShrink;
    query["RepoNames"] = request.repoNamesShrink;
    query["RepoTagFilterPattern"] = request.repoTagFilterPattern;
    query["RuleId"] = request.ruleId;
    query["RuleName"] = request.ruleName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateEventCenterRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateEventCenterRuleResponse>(await this.callApi(params, req, runtime), new UpdateEventCenterRuleResponse({}));
  }

  async updateEventCenterRule(request: UpdateEventCenterRuleRequest): Promise<UpdateEventCenterRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEventCenterRuleWithOptions(request, runtime);
  }

  async updateInstanceEndpointStatusWithOptions(request: UpdateInstanceEndpointStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceEndpointStatusResponse> {
    Util.validateModel(request);
    let query = { };
    query["Enable"] = request.enable;
    query["EndpointType"] = request.endpointType;
    query["InstanceId"] = request.instanceId;
    query["ModuleName"] = request.moduleName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateInstanceEndpointStatus",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateInstanceEndpointStatusResponse>(await this.callApi(params, req, runtime), new UpdateInstanceEndpointStatusResponse({}));
  }

  async updateInstanceEndpointStatus(request: UpdateInstanceEndpointStatusRequest): Promise<UpdateInstanceEndpointStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateInstanceEndpointStatusWithOptions(request, runtime);
  }

  async updateNamespaceWithOptions(request: UpdateNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateNamespaceResponse> {
    Util.validateModel(request);
    let query = { };
    query["AutoCreateRepo"] = request.autoCreateRepo;
    query["DefaultRepoType"] = request.defaultRepoType;
    query["InstanceId"] = request.instanceId;
    query["NamespaceName"] = request.namespaceName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateNamespace",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateNamespaceResponse>(await this.callApi(params, req, runtime), new UpdateNamespaceResponse({}));
  }

  async updateNamespace(request: UpdateNamespaceRequest): Promise<UpdateNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateNamespaceWithOptions(request, runtime);
  }

  async updateRepoBuildRuleWithOptions(request: UpdateRepoBuildRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRepoBuildRuleResponse> {
    Util.validateModel(request);
    let query = { };
    query["BuildRuleId"] = request.buildRuleId;
    query["DockerfileLocation"] = request.dockerfileLocation;
    query["DockerfileName"] = request.dockerfileName;
    query["ImageTag"] = request.imageTag;
    query["InstanceId"] = request.instanceId;
    query["Platforms"] = request.platforms;
    query["PushName"] = request.pushName;
    query["PushType"] = request.pushType;
    query["RepoId"] = request.repoId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRepoBuildRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateRepoBuildRuleResponse>(await this.callApi(params, req, runtime), new UpdateRepoBuildRuleResponse({}));
  }

  async updateRepoBuildRule(request: UpdateRepoBuildRuleRequest): Promise<UpdateRepoBuildRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRepoBuildRuleWithOptions(request, runtime);
  }

  async updateRepoSourceCodeRepoWithOptions(request: UpdateRepoSourceCodeRepoRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRepoSourceCodeRepoResponse> {
    Util.validateModel(request);
    let query = { };
    query["AutoBuild"] = request.autoBuild;
    query["CodeRepoId"] = request.codeRepoId;
    query["CodeRepoName"] = request.codeRepoName;
    query["CodeRepoNamespaceName"] = request.codeRepoNamespaceName;
    query["CodeRepoType"] = request.codeRepoType;
    query["DisableCacheBuild"] = request.disableCacheBuild;
    query["InstanceId"] = request.instanceId;
    query["OverseaBuild"] = request.overseaBuild;
    query["RepoId"] = request.repoId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRepoSourceCodeRepo",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateRepoSourceCodeRepoResponse>(await this.callApi(params, req, runtime), new UpdateRepoSourceCodeRepoResponse({}));
  }

  async updateRepoSourceCodeRepo(request: UpdateRepoSourceCodeRepoRequest): Promise<UpdateRepoSourceCodeRepoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRepoSourceCodeRepoWithOptions(request, runtime);
  }

  async updateRepoTriggerWithOptions(request: UpdateRepoTriggerRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRepoTriggerResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["RepoId"] = request.repoId;
    query["TriggerId"] = request.triggerId;
    query["TriggerName"] = request.triggerName;
    query["TriggerTag"] = request.triggerTag;
    query["TriggerType"] = request.triggerType;
    query["TriggerUrl"] = request.triggerUrl;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRepoTrigger",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateRepoTriggerResponse>(await this.callApi(params, req, runtime), new UpdateRepoTriggerResponse({}));
  }

  async updateRepoTrigger(request: UpdateRepoTriggerRequest): Promise<UpdateRepoTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRepoTriggerWithOptions(request, runtime);
  }

  async updateRepositoryWithOptions(request: UpdateRepositoryRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRepositoryResponse> {
    Util.validateModel(request);
    let query = { };
    query["Detail"] = request.detail;
    query["InstanceId"] = request.instanceId;
    query["RepoId"] = request.repoId;
    query["RepoType"] = request.repoType;
    query["Summary"] = request.summary;
    query["TagImmutability"] = request.tagImmutability;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRepository",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateRepositoryResponse>(await this.callApi(params, req, runtime), new UpdateRepositoryResponse({}));
  }

  async updateRepository(request: UpdateRepositoryRequest): Promise<UpdateRepositoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRepositoryWithOptions(request, runtime);
  }

}
