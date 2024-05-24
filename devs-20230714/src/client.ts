// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class Checkout extends $tea.Model {
  ref?: string;
  remote?: string;
  static names(): { [key: string]: string } {
    return {
      ref: 'ref',
      remote: 'remote',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ref: 'string',
      remote: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CodeupEventPayload extends $tea.Model {
  originalPayload?: Buffer;
  static names(): { [key: string]: string } {
    return {
      originalPayload: 'originalPayload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalPayload: 'Buffer',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Condition extends $tea.Model {
  expression?: string;
  static names(): { [key: string]: string } {
    return {
      expression: 'expression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Connection extends $tea.Model {
  createdTime?: string;
  description?: string;
  generation?: number;
  kind?: string;
  labels?: { [key: string]: string };
  name?: string;
  resourceVersion?: number;
  spec?: ConnectionSpec;
  status?: ConnectionStatus;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      generation: 'generation',
      kind: 'kind',
      labels: 'labels',
      name: 'name',
      resourceVersion: 'resourceVersion',
      spec: 'spec',
      status: 'status',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      generation: 'number',
      kind: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      resourceVersion: 'number',
      spec: ConnectionSpec,
      status: ConnectionStatus,
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectionSpec extends $tea.Model {
  account?: GitAccount;
  gitlabConfig?: GitLabConfig;
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'account',
      gitlabConfig: 'gitlabConfig',
      platform: 'platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: GitAccount,
      gitlabConfig: GitLabConfig,
      platform: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectionStatus extends $tea.Model {
  installation?: Installation;
  static names(): { [key: string]: string } {
    return {
      installation: 'installation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      installation: Installation,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Context extends $tea.Model {
  data?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContextSchema extends $tea.Model {
  description?: string;
  hint?: string;
  name?: string;
  required?: boolean;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      hint: 'hint',
      name: 'name',
      required: 'required',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      hint: 'string',
      name: 'string',
      required: 'boolean',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Environment extends $tea.Model {
  createdTime?: string;
  description?: string;
  generation?: number;
  kind?: string;
  labels?: { [key: string]: string };
  name?: string;
  projectName?: string;
  resourceVersion?: number;
  spec?: EnvironmentSpec;
  status?: EnvironmentStatus;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      generation: 'generation',
      kind: 'kind',
      labels: 'labels',
      name: 'name',
      projectName: 'projectName',
      resourceVersion: 'resourceVersion',
      spec: 'spec',
      status: 'status',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      generation: 'number',
      kind: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      projectName: 'string',
      resourceVersion: 'number',
      spec: EnvironmentSpec,
      status: EnvironmentStatus,
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnvironmentSpec extends $tea.Model {
  alias?: string;
  infraStackConfig?: InfraStackSpec;
  isAutoDeploy?: boolean;
  repositoryConfig?: RepositoryConfig;
  roleArn?: string;
  serviceOverlay?: EnvironmentSpecServiceOverlay;
  templateConfig?: TemplateConfig;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      infraStackConfig: 'infraStackConfig',
      isAutoDeploy: 'isAutoDeploy',
      repositoryConfig: 'repositoryConfig',
      roleArn: 'roleArn',
      serviceOverlay: 'serviceOverlay',
      templateConfig: 'templateConfig',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      infraStackConfig: InfraStackSpec,
      isAutoDeploy: 'boolean',
      repositoryConfig: RepositoryConfig,
      roleArn: 'string',
      serviceOverlay: EnvironmentSpecServiceOverlay,
      templateConfig: TemplateConfig,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnvironmentStatus extends $tea.Model {
  infraStackStatus?: InfraStackStatus;
  latestReleaseDetail?: ReleaseDetail;
  observedGeneration?: number;
  observedTime?: string;
  static names(): { [key: string]: string } {
    return {
      infraStackStatus: 'infraStackStatus',
      latestReleaseDetail: 'latestReleaseDetail',
      observedGeneration: 'observedGeneration',
      observedTime: 'observedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infraStackStatus: InfraStackStatus,
      latestReleaseDetail: ReleaseDetail,
      observedGeneration: 'number',
      observedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventFilterConfig extends $tea.Model {
  pullRequest?: PullRequestFilter;
  push?: PushFilter;
  static names(): { [key: string]: string } {
    return {
      pullRequest: 'pullRequest',
      push: 'push',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pullRequest: PullRequestFilter,
      push: PushFilter,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventPayload extends $tea.Model {
  codeup?: CodeupEventPayload;
  gitee?: GiteeEventPayload;
  github?: GithubEventPayload;
  gitlab?: GitlabEventPayload;
  manual?: ManualEventPayload;
  static names(): { [key: string]: string } {
    return {
      codeup: 'codeup',
      gitee: 'gitee',
      github: 'github',
      gitlab: 'gitlab',
      manual: 'manual',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeup: CodeupEventPayload,
      gitee: GiteeEventPayload,
      github: GithubEventPayload,
      gitlab: GitlabEventPayload,
      manual: ManualEventPayload,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GitAccount extends $tea.Model {
  avatar?: string;
  displayName?: string;
  id?: string;
  name?: string;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'avatar',
      displayName: 'displayName',
      id: 'id',
      name: 'name',
      uri: 'uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      displayName: 'string',
      id: 'string',
      name: 'string',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GitEventSnapshot extends $tea.Model {
  branch?: string;
  commitID?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'branch',
      commitID: 'commitID',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      commitID: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GitLabConfig extends $tea.Model {
  token?: string;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      token: 'token',
      uri: 'uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      token: 'string',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GiteeEventPayload extends $tea.Model {
  originalPayload?: Buffer;
  static names(): { [key: string]: string } {
    return {
      originalPayload: 'originalPayload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalPayload: 'Buffer',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GithubEventPayload extends $tea.Model {
  originalPayload?: Buffer;
  static names(): { [key: string]: string } {
    return {
      originalPayload: 'originalPayload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalPayload: 'Buffer',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GitlabEventPayload extends $tea.Model {
  originalPayload?: Buffer;
  static names(): { [key: string]: string } {
    return {
      originalPayload: 'originalPayload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalPayload: 'Buffer',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InfraStackResourceState extends $tea.Model {
  resourceDrifts?: ResourceDrift[];
  resources?: ResourceDetail[];
  static names(): { [key: string]: string } {
    return {
      resourceDrifts: 'resourceDrifts',
      resources: 'resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceDrifts: { 'type': 'array', 'itemType': ResourceDrift },
      resources: { 'type': 'array', 'itemType': ResourceDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InfraStackSpec extends $tea.Model {
  regionID?: string;
  roleArn?: string;
  templateName?: string;
  templateSpec?: InfraStackSpecTemplateSpec;
  templateVariables?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      regionID: 'regionID',
      roleArn: 'roleArn',
      templateName: 'templateName',
      templateSpec: 'templateSpec',
      templateVariables: 'templateVariables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionID: 'string',
      roleArn: 'string',
      templateName: 'string',
      templateSpec: InfraStackSpecTemplateSpec,
      templateVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InfraStackStatus extends $tea.Model {
  message?: string;
  observedGeneration?: number;
  observedTime?: string;
  phase?: string;
  resourceState?: InfraStackResourceState;
  templateOutputs?: { [key: string]: any };
  templateStatus?: InfraStackStatusTemplateStatus;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      observedGeneration: 'observedGeneration',
      observedTime: 'observedTime',
      phase: 'phase',
      resourceState: 'resourceState',
      templateOutputs: 'templateOutputs',
      templateStatus: 'templateStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      observedGeneration: 'number',
      observedTime: 'string',
      phase: 'string',
      resourceState: InfraStackResourceState,
      templateOutputs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateStatus: InfraStackStatusTemplateStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Installation extends $tea.Model {
  actionUri?: string;
  message?: string;
  stage?: string;
  static names(): { [key: string]: string } {
    return {
      actionUri: 'actionUri',
      message: 'message',
      stage: 'stage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionUri: 'string',
      message: 'string',
      stage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManualEventPayload extends $tea.Model {
  branch?: string;
  commitID?: string;
  tag?: string;
  templateConfig?: TemplateConfig;
  static names(): { [key: string]: string } {
    return {
      branch: 'branch',
      commitID: 'commitID',
      tag: 'tag',
      templateConfig: 'templateConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      commitID: 'string',
      tag: 'string',
      templateConfig: TemplateConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OAuthCredential extends $tea.Model {
  createdTime?: number;
  expiration?: number;
  refreshToken?: string;
  scope?: string;
  token?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      expiration: 'expiration',
      refreshToken: 'refreshToken',
      scope: 'scope',
      token: 'token',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'number',
      expiration: 'number',
      refreshToken: 'string',
      scope: 'string',
      token: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Pipeline extends $tea.Model {
  createdTime?: string;
  deletionTime?: string;
  description?: string;
  generation?: number;
  kind?: string;
  labels?: { [key: string]: string };
  name?: string;
  resourceVersion?: number;
  spec?: PipelineSpec;
  status?: PipelineStatus;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      deletionTime: 'deletionTime',
      description: 'description',
      generation: 'generation',
      kind: 'kind',
      labels: 'labels',
      name: 'name',
      resourceVersion: 'resourceVersion',
      spec: 'spec',
      status: 'status',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      deletionTime: 'string',
      description: 'string',
      generation: 'number',
      kind: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      resourceVersion: 'number',
      spec: PipelineSpec,
      status: PipelineStatus,
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PipelineSpec extends $tea.Model {
  context?: Context;
  templateName?: string;
  templateSpec?: PipelineTemplateSpec;
  static names(): { [key: string]: string } {
    return {
      context: 'context',
      templateName: 'templateName',
      templateSpec: 'templateSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: Context,
      templateName: 'string',
      templateSpec: PipelineTemplateSpec,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PipelineStatus extends $tea.Model {
  latestExecError?: TaskExecError;
  phase?: string;
  static names(): { [key: string]: string } {
    return {
      latestExecError: 'latestExecError',
      phase: 'phase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latestExecError: TaskExecError,
      phase: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PipelineTemplate extends $tea.Model {
  createdTime?: string;
  deletionTime?: string;
  description?: string;
  generation?: number;
  kind?: string;
  labels?: { [key: string]: string };
  name?: string;
  resourceVersion?: number;
  spec?: PipelineTemplateSpec;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      deletionTime: 'deletionTime',
      description: 'description',
      generation: 'generation',
      kind: 'kind',
      labels: 'labels',
      name: 'name',
      resourceVersion: 'resourceVersion',
      spec: 'spec',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      deletionTime: 'string',
      description: 'string',
      generation: 'number',
      kind: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      resourceVersion: 'number',
      spec: PipelineTemplateSpec,
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PipelineTemplateSpec extends $tea.Model {
  context?: Context;
  tasks?: TaskExec[];
  static names(): { [key: string]: string } {
    return {
      context: 'context',
      tasks: 'tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: Context,
      tasks: { 'type': 'array', 'itemType': TaskExec },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PipelineTrigger extends $tea.Model {
  createdTime?: string;
  deletionTime?: string;
  description?: string;
  generation?: number;
  kind?: string;
  labels?: { [key: string]: string };
  name?: string;
  projectName?: string;
  resourceVersion?: number;
  spec?: PipelineTriggerSpec;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      deletionTime: 'deletionTime',
      description: 'description',
      generation: 'generation',
      kind: 'kind',
      labels: 'labels',
      name: 'name',
      projectName: 'projectName',
      resourceVersion: 'resourceVersion',
      spec: 'spec',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      deletionTime: 'string',
      description: 'string',
      generation: 'number',
      kind: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      projectName: 'string',
      resourceVersion: 'number',
      spec: PipelineTriggerSpec,
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PipelineTriggerEvent extends $tea.Model {
  createdTime?: string;
  deletionTime?: string;
  description?: string;
  generation?: number;
  kind?: string;
  labels?: { [key: string]: string };
  name?: string;
  resourceVersion?: number;
  spec?: PipelineTriggerEventSpec;
  status?: PipelineTriggerEventStatus;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      deletionTime: 'deletionTime',
      description: 'description',
      generation: 'generation',
      kind: 'kind',
      labels: 'labels',
      name: 'name',
      resourceVersion: 'resourceVersion',
      spec: 'spec',
      status: 'status',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      deletionTime: 'string',
      description: 'string',
      generation: 'number',
      kind: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      resourceVersion: 'number',
      spec: PipelineTriggerEventSpec,
      status: PipelineTriggerEventStatus,
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PipelineTriggerEventSpec extends $tea.Model {
  payload?: EventPayload;
  triggerName?: string;
  static names(): { [key: string]: string } {
    return {
      payload: 'payload',
      triggerName: 'triggerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payload: EventPayload,
      triggerName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PipelineTriggerEventStatus extends $tea.Model {
  errorMessage?: string;
  firedPipelineName?: string;
  releaseDetail?: ReleaseDetail;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      firedPipelineName: 'firedPipelineName',
      releaseDetail: 'releaseDetail',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      firedPipelineName: 'string',
      releaseDetail: ReleaseDetail,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PipelineTriggerSpec extends $tea.Model {
  eventFilter?: EventFilterConfig;
  roleArn?: string;
  runPipeline?: RunPipelineConfig;
  static names(): { [key: string]: string } {
    return {
      eventFilter: 'eventFilter',
      roleArn: 'roleArn',
      runPipeline: 'runPipeline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventFilter: EventFilterConfig,
      roleArn: 'string',
      runPipeline: RunPipelineConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Project extends $tea.Model {
  createdTime?: string;
  description?: string;
  generation?: number;
  kind?: string;
  labels?: { [key: string]: string };
  name?: string;
  resourceVersion?: number;
  spec?: ProjectSpec;
  status?: ProjectStatus;
  uid?: string;
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      generation: 'generation',
      kind: 'kind',
      labels: 'labels',
      name: 'name',
      resourceVersion: 'resourceVersion',
      spec: 'spec',
      status: 'status',
      uid: 'uid',
      updatedTime: 'updatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      generation: 'number',
      kind: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      resourceVersion: 'number',
      spec: ProjectSpec,
      status: ProjectStatus,
      uid: 'string',
      updatedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProjectSpec extends $tea.Model {
  roleArn?: string;
  templateConfig?: TemplateConfig;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      roleArn: 'roleArn',
      templateConfig: 'templateConfig',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleArn: 'string',
      templateConfig: TemplateConfig,
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProjectStatus extends $tea.Model {
  latestReleaseDetail?: ReleaseDetail;
  observedGeneration?: number;
  observedTime?: string;
  static names(): { [key: string]: string } {
    return {
      latestReleaseDetail: 'latestReleaseDetail',
      observedGeneration: 'observedGeneration',
      observedTime: 'observedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latestReleaseDetail: ReleaseDetail,
      observedGeneration: 'number',
      observedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PullRequestFilter extends $tea.Model {
  sourceBranch?: string;
  targetBranch?: string;
  types?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceBranch: 'sourceBranch',
      targetBranch: 'targetBranch',
      types: 'types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceBranch: 'string',
      targetBranch: 'string',
      types: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushFilter extends $tea.Model {
  branch?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'branch',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseDetail extends $tea.Model {
  bizStatus?: string;
  envName?: string;
  finishedTime?: string;
  gitEventSnapshot?: GitEventSnapshot;
  latestTaskExecError?: TaskExecError;
  message?: string;
  pipelineName?: string;
  pipelineTriggerEventName?: string;
  releaseOutputs?: { [key: string]: any };
  repositorySnapshot?: RepositorySpec;
  templateConfigSnapshot?: TemplateConfig;
  static names(): { [key: string]: string } {
    return {
      bizStatus: 'bizStatus',
      envName: 'envName',
      finishedTime: 'finishedTime',
      gitEventSnapshot: 'gitEventSnapshot',
      latestTaskExecError: 'latestTaskExecError',
      message: 'message',
      pipelineName: 'pipelineName',
      pipelineTriggerEventName: 'pipelineTriggerEventName',
      releaseOutputs: 'releaseOutputs',
      repositorySnapshot: 'repositorySnapshot',
      templateConfigSnapshot: 'templateConfigSnapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizStatus: 'string',
      envName: 'string',
      finishedTime: 'string',
      gitEventSnapshot: GitEventSnapshot,
      latestTaskExecError: TaskExecError,
      message: 'string',
      pipelineName: 'string',
      pipelineTriggerEventName: 'string',
      releaseOutputs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      repositorySnapshot: RepositorySpec,
      templateConfigSnapshot: TemplateConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Repository extends $tea.Model {
  createdTime?: string;
  description?: string;
  generation?: number;
  kind?: string;
  labels?: { [key: string]: string };
  name?: string;
  resourceVersion?: number;
  spec?: RepositorySpec;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      generation: 'generation',
      kind: 'kind',
      labels: 'labels',
      name: 'name',
      resourceVersion: 'resourceVersion',
      spec: 'spec',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      generation: 'number',
      kind: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      resourceVersion: 'number',
      spec: RepositorySpec,
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RepositoryConfig extends $tea.Model {
  branchName?: string;
  manifest?: string;
  repositoryName?: string;
  static names(): { [key: string]: string } {
    return {
      branchName: 'branchName',
      manifest: 'manifest',
      repositoryName: 'repositoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchName: 'string',
      manifest: 'string',
      repositoryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RepositorySpec extends $tea.Model {
  cloneUrl?: string;
  connectionName?: string;
  displayName?: string;
  id?: number;
  owner?: string;
  platform?: string;
  webUrl?: string;
  static names(): { [key: string]: string } {
    return {
      cloneUrl: 'cloneUrl',
      connectionName: 'connectionName',
      displayName: 'displayName',
      id: 'id',
      owner: 'owner',
      platform: 'platform',
      webUrl: 'webUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloneUrl: 'string',
      connectionName: 'string',
      displayName: 'string',
      id: 'number',
      owner: 'string',
      platform: 'string',
      webUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceDetail extends $tea.Model {
  address?: string;
  attributeValues?: { [key: string]: any };
  mode?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      attributeValues: 'attributeValues',
      mode: 'mode',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      attributeValues: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      mode: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceDrift extends $tea.Model {
  address?: string;
  change?: ResourceDriftChange;
  mode?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      change: 'change',
      mode: 'mode',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      change: ResourceDriftChange,
      mode: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunAfter extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunPipelineConfig extends $tea.Model {
  pipelineSpec?: PipelineSpec;
  variables?: Variable[];
  yamlFileContent?: string;
  yamlFilePath?: string;
  static names(): { [key: string]: string } {
    return {
      pipelineSpec: 'pipelineSpec',
      variables: 'variables',
      yamlFileContent: 'yamlFileContent',
      yamlFilePath: 'yamlFilePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineSpec: PipelineSpec,
      variables: { 'type': 'array', 'itemType': Variable },
      yamlFileContent: 'string',
      yamlFilePath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ServiceSpec extends $tea.Model {
  environment?: string;
  roleArn?: string;
  template?: string;
  templateVariables?: { [key: string]: any };
  templateVersion?: number;
  static names(): { [key: string]: string } {
    return {
      environment: 'environment',
      roleArn: 'roleArn',
      template: 'template',
      templateVariables: 'templateVariables',
      templateVersion: 'templateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environment: 'string',
      roleArn: 'string',
      template: 'string',
      templateVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Task extends $tea.Model {
  createdTime?: string;
  deletionTime?: string;
  description?: string;
  generation?: number;
  kind?: string;
  labels?: { [key: string]: string };
  name?: string;
  resourceVersion?: number;
  spec?: TaskSpec;
  status?: TaskStatus;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      deletionTime: 'deletionTime',
      description: 'description',
      generation: 'generation',
      kind: 'kind',
      labels: 'labels',
      name: 'name',
      resourceVersion: 'resourceVersion',
      spec: 'spec',
      status: 'status',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      deletionTime: 'string',
      description: 'string',
      generation: 'number',
      kind: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      resourceVersion: 'number',
      spec: TaskSpec,
      status: TaskStatus,
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskExec extends $tea.Model {
  context?: Context;
  name?: string;
  runAfters?: RunAfter[];
  taskTemplate?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'context',
      name: 'name',
      runAfters: 'runAfters',
      taskTemplate: 'taskTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: Context,
      name: 'string',
      runAfters: { 'type': 'array', 'itemType': RunAfter },
      taskTemplate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskExecError extends $tea.Model {
  code?: string;
  extraInfo?: string;
  message?: string;
  requestId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      extraInfo: 'extraInfo',
      message: 'message',
      requestId: 'requestId',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraInfo: 'string',
      message: 'string',
      requestId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskInvocation extends $tea.Model {
  instanceID?: string;
  invocationID?: string;
  invocationTarget?: string;
  output?: string;
  requestID?: string;
  slsLogStore?: string;
  slsProject?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceID: 'instanceID',
      invocationID: 'invocationID',
      invocationTarget: 'invocationTarget',
      output: 'output',
      requestID: 'requestID',
      slsLogStore: 'slsLogStore',
      slsProject: 'slsProject',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceID: 'string',
      invocationID: 'string',
      invocationTarget: 'string',
      output: 'string',
      requestID: 'string',
      slsLogStore: 'string',
      slsProject: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskSpec extends $tea.Model {
  context?: Context;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'context',
      templateName: 'templateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: Context,
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskStatus extends $tea.Model {
  executionDetails?: string[];
  invocations?: TaskInvocation[];
  latestExecError?: TaskExecError;
  phase?: string;
  statusGeneration?: number;
  static names(): { [key: string]: string } {
    return {
      executionDetails: 'executionDetails',
      invocations: 'invocations',
      latestExecError: 'latestExecError',
      phase: 'phase',
      statusGeneration: 'statusGeneration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionDetails: { 'type': 'array', 'itemType': 'string' },
      invocations: { 'type': 'array', 'itemType': TaskInvocation },
      latestExecError: TaskExecError,
      phase: 'string',
      statusGeneration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskTemplate extends $tea.Model {
  createdTime?: string;
  deletionTime?: string;
  description?: string;
  generation?: number;
  kind?: string;
  labels?: { [key: string]: string };
  name?: string;
  resourceVersion?: number;
  spec?: TaskTemplateSpec;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      deletionTime: 'deletionTime',
      description: 'description',
      generation: 'generation',
      kind: 'kind',
      labels: 'labels',
      name: 'name',
      resourceVersion: 'resourceVersion',
      spec: 'spec',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      deletionTime: 'string',
      description: 'string',
      generation: 'number',
      kind: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      resourceVersion: 'number',
      spec: TaskTemplateSpec,
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskTemplateSpec extends $tea.Model {
  context?: Context;
  description?: string;
  executeCondition?: Condition;
  worker?: TaskWorker;
  static names(): { [key: string]: string } {
    return {
      context: 'context',
      description: 'description',
      executeCondition: 'executeCondition',
      worker: 'worker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: Context,
      description: 'string',
      executeCondition: Condition,
      worker: TaskWorker,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskWorker extends $tea.Model {
  presetWorker?: string;
  static names(): { [key: string]: string } {
    return {
      presetWorker: 'presetWorker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      presetWorker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateConfig extends $tea.Model {
  parameters?: { [key: string]: any };
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      parameters: 'parameters',
      templateName: 'templateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerraformInputVariable extends $tea.Model {
  defaultJson?: string;
  description?: string;
  name?: string;
  nullable?: boolean;
  sensitive?: boolean;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      defaultJson: 'defaultJson',
      description: 'description',
      name: 'name',
      nullable: 'nullable',
      sensitive: 'sensitive',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultJson: 'string',
      description: 'string',
      name: 'string',
      nullable: 'boolean',
      sensitive: 'boolean',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerraformOutputValue extends $tea.Model {
  description?: string;
  name?: string;
  sensitive?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      sensitive: 'sensitive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      sensitive: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Variable extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
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

export class ActivateConnectionRequest extends $tea.Model {
  account?: GitAccount;
  credential?: OAuthCredential;
  static names(): { [key: string]: string } {
    return {
      account: 'account',
      credential: 'credential',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: GitAccount,
      credential: OAuthCredential,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateConnectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Connection;
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
      body: Connection,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelPipelineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Pipeline;
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
      body: Pipeline,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Task;
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
      body: Task,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionRequest extends $tea.Model {
  body?: Connection;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Connection,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Connection;
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
      body: Connection,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnvironmentRequest extends $tea.Model {
  body?: Environment;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Environment,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnvironmentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Environment;
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
      body: Environment,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineRequest extends $tea.Model {
  body?: Pipeline;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Pipeline,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Pipeline;
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
      body: Pipeline,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineTemplateRequest extends $tea.Model {
  body?: PipelineTemplate;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: PipelineTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PipelineTemplate;
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
      body: PipelineTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineTriggerRequest extends $tea.Model {
  body?: PipelineTrigger;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: PipelineTrigger,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineTriggerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PipelineTrigger;
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
      body: PipelineTrigger,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineTriggerEventRequest extends $tea.Model {
  body?: PipelineTriggerEvent;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: PipelineTriggerEvent,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineTriggerEventResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PipelineTriggerEvent;
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
      body: PipelineTriggerEvent,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequest extends $tea.Model {
  body?: Project;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Project,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Project;
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
      body: Project,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryRequest extends $tea.Model {
  body?: Repository;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Repository,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Repository;
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
      body: Repository,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequest extends $tea.Model {
  body?: Task;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Task,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Task;
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
      body: Task,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskTemplateRequest extends $tea.Model {
  body?: TaskTemplate;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: TaskTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TaskTemplate;
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
      body: TaskTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConnectionRequest extends $tea.Model {
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      force: 'force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConnectionResponseBody extends $tea.Model {
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

export class DeleteConnectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteConnectionResponseBody;
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
      body: DeleteConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnvironmentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePipelineTemplateResponseBody extends $tea.Model {
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

export class DeletePipelineTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePipelineTemplateResponseBody;
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
      body: DeletePipelineTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePipelineTriggerResponseBody extends $tea.Model {
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

export class DeletePipelineTriggerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePipelineTriggerResponseBody;
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
      body: DeletePipelineTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePipelineTriggerEventResponseBody extends $tea.Model {
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

export class DeletePipelineTriggerEventResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePipelineTriggerEventResponseBody;
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
      body: DeletePipelineTriggerEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectRequest extends $tea.Model {
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      force: 'force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectResponseBody extends $tea.Model {
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

export class DeleteProjectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteProjectResponseBody;
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
      body: DeleteProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryResponseBody extends $tea.Model {
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

export class DeleteRepositoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRepositoryResponseBody;
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
      body: DeleteRepositoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTaskTemplateResponseBody extends $tea.Model {
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

export class DeleteTaskTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTaskTemplateResponseBody;
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
      body: DeleteTaskTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchConnectionCredentialResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OAuthCredential;
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
      body: OAuthCredential,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchRepositoryCheckoutRequest extends $tea.Model {
  branch?: string;
  commit?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'branch',
      commit: 'commit',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      commit: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchRepositoryCheckoutResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Checkout;
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
      body: Checkout,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Connection;
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
      body: Connection,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Environment;
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
      body: Environment,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Pipeline;
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
      body: Pipeline,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PipelineTemplate;
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
      body: PipelineTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineTriggerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PipelineTrigger;
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
      body: PipelineTrigger,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineTriggerEventResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PipelineTriggerEvent;
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
      body: PipelineTriggerEvent,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Project;
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
      body: Project,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Repository;
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
      body: Repository,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Task;
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
      body: Task,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TaskTemplate;
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
      body: TaskTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsRequest extends $tea.Model {
  keyword?: string;
  labelSelector?: string[];
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      labelSelector: 'labelSelector',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      labelSelector: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsShrinkRequest extends $tea.Model {
  keyword?: string;
  labelSelectorShrink?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      labelSelectorShrink: 'labelSelector',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      labelSelectorShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsResponseBody extends $tea.Model {
  data?: Connection[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': Connection },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListConnectionsResponseBody;
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
      body: ListConnectionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentsRequest extends $tea.Model {
  keyword?: string;
  labelSelector?: string[];
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      labelSelector: 'labelSelector',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      labelSelector: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentsShrinkRequest extends $tea.Model {
  keyword?: string;
  labelSelectorShrink?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      labelSelectorShrink: 'labelSelector',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      labelSelectorShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentsResponseBody extends $tea.Model {
  data?: Environment[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': Environment },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEnvironmentsResponseBody;
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
      body: ListEnvironmentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineTemplatesRequest extends $tea.Model {
  labelSelector?: string[];
  static names(): { [key: string]: string } {
    return {
      labelSelector: 'labelSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelSelector: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineTemplatesShrinkRequest extends $tea.Model {
  labelSelectorShrink?: string;
  static names(): { [key: string]: string } {
    return {
      labelSelectorShrink: 'labelSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelSelectorShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineTemplatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PipelineTemplate[];
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
      body: { 'type': 'array', 'itemType': PipelineTemplate },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineTriggerEventsRequest extends $tea.Model {
  keyword?: string;
  labelSelector?: string[];
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      labelSelector: 'labelSelector',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      labelSelector: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineTriggerEventsShrinkRequest extends $tea.Model {
  keyword?: string;
  labelSelectorShrink?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      labelSelectorShrink: 'labelSelector',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      labelSelectorShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineTriggerEventsResponseBody extends $tea.Model {
  data?: PipelineTriggerEvent[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': PipelineTriggerEvent },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineTriggerEventsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPipelineTriggerEventsResponseBody;
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
      body: ListPipelineTriggerEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineTriggersRequest extends $tea.Model {
  keyword?: string;
  labelSelector?: string[];
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      labelSelector: 'labelSelector',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      labelSelector: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineTriggersShrinkRequest extends $tea.Model {
  keyword?: string;
  labelSelectorShrink?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      labelSelectorShrink: 'labelSelector',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      labelSelectorShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineTriggersResponseBody extends $tea.Model {
  data?: PipelineTrigger[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': PipelineTrigger },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineTriggersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPipelineTriggersResponseBody;
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
      body: ListPipelineTriggersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelinesRequest extends $tea.Model {
  labelSelector?: string[];
  static names(): { [key: string]: string } {
    return {
      labelSelector: 'labelSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelSelector: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelinesShrinkRequest extends $tea.Model {
  labelSelectorShrink?: string;
  static names(): { [key: string]: string } {
    return {
      labelSelectorShrink: 'labelSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelSelectorShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelinesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Pipeline[];
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
      body: { 'type': 'array', 'itemType': Pipeline },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsRequest extends $tea.Model {
  keyword?: string;
  labelSelector?: string[];
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      labelSelector: 'labelSelector',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      labelSelector: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsShrinkRequest extends $tea.Model {
  keyword?: string;
  labelSelectorShrink?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      labelSelectorShrink: 'labelSelector',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      labelSelectorShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBody extends $tea.Model {
  data?: Project[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': Project },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProjectsResponseBody;
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
      body: ListProjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoriesRequest extends $tea.Model {
  keyword?: string;
  labelSelector?: string[];
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      labelSelector: 'labelSelector',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      labelSelector: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoriesShrinkRequest extends $tea.Model {
  keyword?: string;
  labelSelectorShrink?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      labelSelectorShrink: 'labelSelector',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      labelSelectorShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoriesResponseBody extends $tea.Model {
  data?: Repository[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': Repository },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRepositoriesResponseBody;
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
      body: ListRepositoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskTemplatesRequest extends $tea.Model {
  labelSelector?: string[];
  static names(): { [key: string]: string } {
    return {
      labelSelector: 'labelSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelSelector: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskTemplatesShrinkRequest extends $tea.Model {
  labelSelectorShrink?: string;
  static names(): { [key: string]: string } {
    return {
      labelSelectorShrink: 'labelSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelSelectorShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskTemplatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TaskTemplate[];
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
      body: { 'type': 'array', 'itemType': TaskTemplate },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksRequest extends $tea.Model {
  labelSelector?: string[];
  static names(): { [key: string]: string } {
    return {
      labelSelector: 'labelSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelSelector: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksShrinkRequest extends $tea.Model {
  labelSelectorShrink?: string;
  static names(): { [key: string]: string } {
    return {
      labelSelectorShrink: 'labelSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelSelectorShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Task[];
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
      body: { 'type': 'array', 'itemType': Task },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEnvironmentRequest extends $tea.Model {
  body?: Environment;
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      force: 'force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Environment,
      force: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEnvironmentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Environment;
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
      body: Environment,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutPipelineStatusRequest extends $tea.Model {
  body?: Pipeline;
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      force: 'force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Pipeline,
      force: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutPipelineStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Pipeline;
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
      body: Pipeline,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutPipelineTemplateRequest extends $tea.Model {
  body?: PipelineTemplate;
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      force: 'force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: PipelineTemplate,
      force: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutPipelineTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PipelineTemplate;
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
      body: PipelineTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutPipelineTriggerRequest extends $tea.Model {
  body?: PipelineTrigger;
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      force: 'force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: PipelineTrigger,
      force: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutPipelineTriggerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PipelineTrigger;
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
      body: PipelineTrigger,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutProjectRequest extends $tea.Model {
  body?: Project;
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      force: 'force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Project,
      force: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutProjectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Project;
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
      body: Project,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutTaskStatusRequest extends $tea.Model {
  body?: Task;
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      force: 'force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Task,
      force: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutTaskStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Task;
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
      body: Task,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutTaskTemplateRequest extends $tea.Model {
  body?: TaskTemplate;
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      force: 'force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: TaskTemplate,
      force: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutTaskTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TaskTemplate;
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
      body: TaskTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshConnectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Connection;
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
      body: Connection,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Task;
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
      body: Task,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Task;
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
      body: Task,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPipelineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Pipeline;
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
      body: Pipeline,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Task;
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
      body: Task,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnvironmentRequest extends $tea.Model {
  body?: Environment;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Environment,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnvironmentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Environment;
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
      body: Environment,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePipelineTriggerRequest extends $tea.Model {
  body?: PipelineTrigger;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: PipelineTrigger,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePipelineTriggerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PipelineTrigger;
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
      body: PipelineTrigger,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectRequest extends $tea.Model {
  body?: Project;
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      force: 'force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Project,
      force: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Project;
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
      body: Project,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnvironmentSpecServiceOverlay extends $tea.Model {
  components?: { [key: string]: any };
  resources?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      components: 'components',
      resources: 'resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      components: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resources: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InfraStackSpecTemplateSpec extends $tea.Model {
  content?: string;
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      engine: 'engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      engine: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InfraStackStatusTemplateStatus extends $tea.Model {
  outputs?: TerraformOutputValue[];
  variables?: TerraformInputVariable[];
  static names(): { [key: string]: string } {
    return {
      outputs: 'outputs',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputs: { 'type': 'array', 'itemType': TerraformOutputValue },
      variables: { 'type': 'array', 'itemType': TerraformInputVariable },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceDriftChange extends $tea.Model {
  actions?: string[];
  after?: any;
  before?: any;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      after: 'after',
      before: 'before',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      after: 'any',
      before: 'any',
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
    this._endpoint = this.getEndpoint("devs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  /**
   * @summary 激活身份绑定,完成OAuth授权
   *
   * @param request ActivateConnectionRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ActivateConnectionResponse
   */
  async activateConnectionWithOptions(name: string, request: ActivateConnectionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ActivateConnectionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.account)) {
      body["account"] = request.account;
    }

    if (!Util.isUnset(request.credential)) {
      body["credential"] = request.credential;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ActivateConnection",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/connections/${OpenApiUtil.getEncodeParam(name)}/activate`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ActivateConnectionResponse>(await this.callApi(params, req, runtime), new ActivateConnectionResponse({}));
  }

  /**
   * @summary 激活身份绑定,完成OAuth授权
   *
   * @param request ActivateConnectionRequest
   * @return ActivateConnectionResponse
   */
  async activateConnection(name: string, request: ActivateConnectionRequest): Promise<ActivateConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.activateConnectionWithOptions(name, request, headers, runtime);
  }

  /**
   * @summary 取消流水线
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CancelPipelineResponse
   */
  async cancelPipelineWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CancelPipelineResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "CancelPipeline",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/pipelines/${OpenApiUtil.getEncodeParam(name)}/cancel`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CancelPipelineResponse>(await this.callApi(params, req, runtime), new CancelPipelineResponse({}));
  }

  /**
   * @summary 取消流水线
   *
   * @return CancelPipelineResponse
   */
  async cancelPipeline(name: string): Promise<CancelPipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelPipelineWithOptions(name, headers, runtime);
  }

  /**
   * @summary 取消任务
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CancelTaskResponse
   */
  async cancelTaskWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CancelTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "CancelTask",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/tasks/${OpenApiUtil.getEncodeParam(name)}/cancel`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CancelTaskResponse>(await this.callApi(params, req, runtime), new CancelTaskResponse({}));
  }

  /**
   * @summary 取消任务
   *
   * @return CancelTaskResponse
   */
  async cancelTask(name: string): Promise<CancelTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelTaskWithOptions(name, headers, runtime);
  }

  /**
   * @summary 创建身份绑定
   *
   * @param request CreateConnectionRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateConnectionResponse
   */
  async createConnectionWithOptions(request: CreateConnectionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateConnection",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/connections`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateConnectionResponse>(await this.callApi(params, req, runtime), new CreateConnectionResponse({}));
  }

  /**
   * @summary 创建身份绑定
   *
   * @param request CreateConnectionRequest
   * @return CreateConnectionResponse
   */
  async createConnection(request: CreateConnectionRequest): Promise<CreateConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConnectionWithOptions(request, headers, runtime);
  }

  /**
   * @summary 创建环境
   *
   * @param request CreateEnvironmentRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateEnvironmentResponse
   */
  async createEnvironmentWithOptions(project: string, request: CreateEnvironmentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateEnvironmentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateEnvironment",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects/${OpenApiUtil.getEncodeParam(project)}/environments`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateEnvironmentResponse>(await this.callApi(params, req, runtime), new CreateEnvironmentResponse({}));
  }

  /**
   * @summary 创建环境
   *
   * @param request CreateEnvironmentRequest
   * @return CreateEnvironmentResponse
   */
  async createEnvironment(project: string, request: CreateEnvironmentRequest): Promise<CreateEnvironmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createEnvironmentWithOptions(project, request, headers, runtime);
  }

  /**
   * @summary 创建流水线
   *
   * @param request CreatePipelineRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreatePipelineResponse
   */
  async createPipelineWithOptions(request: CreatePipelineRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreatePipelineResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreatePipeline",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/pipelines`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreatePipelineResponse>(await this.callApi(params, req, runtime), new CreatePipelineResponse({}));
  }

  /**
   * @summary 创建流水线
   *
   * @param request CreatePipelineRequest
   * @return CreatePipelineResponse
   */
  async createPipeline(request: CreatePipelineRequest): Promise<CreatePipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPipelineWithOptions(request, headers, runtime);
  }

  /**
   * @summary 创建流水线模板
   *
   * @param request CreatePipelineTemplateRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreatePipelineTemplateResponse
   */
  async createPipelineTemplateWithOptions(request: CreatePipelineTemplateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreatePipelineTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreatePipelineTemplate",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/pipelinetemplates`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreatePipelineTemplateResponse>(await this.callApi(params, req, runtime), new CreatePipelineTemplateResponse({}));
  }

  /**
   * @summary 创建流水线模板
   *
   * @param request CreatePipelineTemplateRequest
   * @return CreatePipelineTemplateResponse
   */
  async createPipelineTemplate(request: CreatePipelineTemplateRequest): Promise<CreatePipelineTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPipelineTemplateWithOptions(request, headers, runtime);
  }

  /**
   * @summary 创建流水线触发器
   *
   * @param request CreatePipelineTriggerRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreatePipelineTriggerResponse
   */
  async createPipelineTriggerWithOptions(request: CreatePipelineTriggerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreatePipelineTriggerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreatePipelineTrigger",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/pipelinetriggers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreatePipelineTriggerResponse>(await this.callApi(params, req, runtime), new CreatePipelineTriggerResponse({}));
  }

  /**
   * @summary 创建流水线触发器
   *
   * @param request CreatePipelineTriggerRequest
   * @return CreatePipelineTriggerResponse
   */
  async createPipelineTrigger(request: CreatePipelineTriggerRequest): Promise<CreatePipelineTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPipelineTriggerWithOptions(request, headers, runtime);
  }

  /**
   * @summary 创建流水线触发历史
   *
   * @param request CreatePipelineTriggerEventRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreatePipelineTriggerEventResponse
   */
  async createPipelineTriggerEventWithOptions(request: CreatePipelineTriggerEventRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreatePipelineTriggerEventResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreatePipelineTriggerEvent",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/pipelinetriggerevents`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreatePipelineTriggerEventResponse>(await this.callApi(params, req, runtime), new CreatePipelineTriggerEventResponse({}));
  }

  /**
   * @summary 创建流水线触发历史
   *
   * @param request CreatePipelineTriggerEventRequest
   * @return CreatePipelineTriggerEventResponse
   */
  async createPipelineTriggerEvent(request: CreatePipelineTriggerEventRequest): Promise<CreatePipelineTriggerEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPipelineTriggerEventWithOptions(request, headers, runtime);
  }

  /**
   * @summary 创建项目
   *
   * @param request CreateProjectRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateProjectResponse
   */
  async createProjectWithOptions(request: CreateProjectRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateProject",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateProjectResponse>(await this.callApi(params, req, runtime), new CreateProjectResponse({}));
  }

  /**
   * @summary 创建项目
   *
   * @param request CreateProjectRequest
   * @return CreateProjectResponse
   */
  async createProject(request: CreateProjectRequest): Promise<CreateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProjectWithOptions(request, headers, runtime);
  }

  /**
   * @summary 创建仓库绑定
   *
   * @param request CreateRepositoryRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateRepositoryResponse
   */
  async createRepositoryWithOptions(request: CreateRepositoryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateRepositoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateRepository",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/repositories`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateRepositoryResponse>(await this.callApi(params, req, runtime), new CreateRepositoryResponse({}));
  }

  /**
   * @summary 创建仓库绑定
   *
   * @param request CreateRepositoryRequest
   * @return CreateRepositoryResponse
   */
  async createRepository(request: CreateRepositoryRequest): Promise<CreateRepositoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRepositoryWithOptions(request, headers, runtime);
  }

  /**
   * @summary 创建任务
   *
   * @param request CreateTaskRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateTaskResponse
   */
  async createTaskWithOptions(request: CreateTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTask",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/tasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateTaskResponse>(await this.callApi(params, req, runtime), new CreateTaskResponse({}));
  }

  /**
   * @summary 创建任务
   *
   * @param request CreateTaskRequest
   * @return CreateTaskResponse
   */
  async createTask(request: CreateTaskRequest): Promise<CreateTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTaskWithOptions(request, headers, runtime);
  }

  /**
   * @summary 创建任务模板
   *
   * @param request CreateTaskTemplateRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateTaskTemplateResponse
   */
  async createTaskTemplateWithOptions(request: CreateTaskTemplateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTaskTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTaskTemplate",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/tasktemplates`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateTaskTemplateResponse>(await this.callApi(params, req, runtime), new CreateTaskTemplateResponse({}));
  }

  /**
   * @summary 创建任务模板
   *
   * @param request CreateTaskTemplateRequest
   * @return CreateTaskTemplateResponse
   */
  async createTaskTemplate(request: CreateTaskTemplateRequest): Promise<CreateTaskTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTaskTemplateWithOptions(request, headers, runtime);
  }

  /**
   * @summary 删除身份绑定
   *
   * @param request DeleteConnectionRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteConnectionResponse
   */
  async deleteConnectionWithOptions(name: string, request: DeleteConnectionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteConnectionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.force)) {
      query["force"] = request.force;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteConnection",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/connections/${OpenApiUtil.getEncodeParam(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteConnectionResponse>(await this.callApi(params, req, runtime), new DeleteConnectionResponse({}));
  }

  /**
   * @summary 删除身份绑定
   *
   * @param request DeleteConnectionRequest
   * @return DeleteConnectionResponse
   */
  async deleteConnection(name: string, request: DeleteConnectionRequest): Promise<DeleteConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConnectionWithOptions(name, request, headers, runtime);
  }

  /**
   * @summary 删除环境
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteEnvironmentResponse
   */
  async deleteEnvironmentWithOptions(project: string, name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteEnvironmentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteEnvironment",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects/${OpenApiUtil.getEncodeParam(project)}/environments/${OpenApiUtil.getEncodeParam(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteEnvironmentResponse>(await this.callApi(params, req, runtime), new DeleteEnvironmentResponse({}));
  }

  /**
   * @summary 删除环境
   *
   * @return DeleteEnvironmentResponse
   */
  async deleteEnvironment(project: string, name: string): Promise<DeleteEnvironmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEnvironmentWithOptions(project, name, headers, runtime);
  }

  /**
   * @summary 删除流水线模板
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeletePipelineTemplateResponse
   */
  async deletePipelineTemplateWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeletePipelineTemplateResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeletePipelineTemplate",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/pipelinetemplates/${OpenApiUtil.getEncodeParam(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeletePipelineTemplateResponse>(await this.callApi(params, req, runtime), new DeletePipelineTemplateResponse({}));
  }

  /**
   * @summary 删除流水线模板
   *
   * @return DeletePipelineTemplateResponse
   */
  async deletePipelineTemplate(name: string): Promise<DeletePipelineTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePipelineTemplateWithOptions(name, headers, runtime);
  }

  /**
   * @summary 删除流水线触发器
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeletePipelineTriggerResponse
   */
  async deletePipelineTriggerWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeletePipelineTriggerResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeletePipelineTrigger",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/pipelinetriggers/${OpenApiUtil.getEncodeParam(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeletePipelineTriggerResponse>(await this.callApi(params, req, runtime), new DeletePipelineTriggerResponse({}));
  }

  /**
   * @summary 删除流水线触发器
   *
   * @return DeletePipelineTriggerResponse
   */
  async deletePipelineTrigger(name: string): Promise<DeletePipelineTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePipelineTriggerWithOptions(name, headers, runtime);
  }

  /**
   * @summary 删除流水线触发历史
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeletePipelineTriggerEventResponse
   */
  async deletePipelineTriggerEventWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeletePipelineTriggerEventResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeletePipelineTriggerEvent",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/pipelinetriggerevents/${OpenApiUtil.getEncodeParam(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeletePipelineTriggerEventResponse>(await this.callApi(params, req, runtime), new DeletePipelineTriggerEventResponse({}));
  }

  /**
   * @summary 删除流水线触发历史
   *
   * @return DeletePipelineTriggerEventResponse
   */
  async deletePipelineTriggerEvent(name: string): Promise<DeletePipelineTriggerEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePipelineTriggerEventWithOptions(name, headers, runtime);
  }

  /**
   * @summary 删除项目
   *
   * @param request DeleteProjectRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteProjectResponse
   */
  async deleteProjectWithOptions(name: string, request: DeleteProjectRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteProjectResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.force)) {
      query["force"] = request.force;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteProject",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects/${OpenApiUtil.getEncodeParam(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteProjectResponse>(await this.callApi(params, req, runtime), new DeleteProjectResponse({}));
  }

  /**
   * @summary 删除项目
   *
   * @param request DeleteProjectRequest
   * @return DeleteProjectResponse
   */
  async deleteProject(name: string, request: DeleteProjectRequest): Promise<DeleteProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProjectWithOptions(name, request, headers, runtime);
  }

  /**
   * @summary 删除仓库绑定
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteRepositoryResponse
   */
  async deleteRepositoryWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteRepositoryResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteRepository",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/repositories/${OpenApiUtil.getEncodeParam(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteRepositoryResponse>(await this.callApi(params, req, runtime), new DeleteRepositoryResponse({}));
  }

  /**
   * @summary 删除仓库绑定
   *
   * @return DeleteRepositoryResponse
   */
  async deleteRepository(name: string): Promise<DeleteRepositoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRepositoryWithOptions(name, headers, runtime);
  }

  /**
   * @summary 删除任务模板
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteTaskTemplateResponse
   */
  async deleteTaskTemplateWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteTaskTemplateResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteTaskTemplate",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/tasktemplates/${OpenApiUtil.getEncodeParam(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteTaskTemplateResponse>(await this.callApi(params, req, runtime), new DeleteTaskTemplateResponse({}));
  }

  /**
   * @summary 删除任务模板
   *
   * @return DeleteTaskTemplateResponse
   */
  async deleteTaskTemplate(name: string): Promise<DeleteTaskTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTaskTemplateWithOptions(name, headers, runtime);
  }

  /**
   * @summary 查询身份绑定中的凭证信息
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return FetchConnectionCredentialResponse
   */
  async fetchConnectionCredentialWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<FetchConnectionCredentialResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "FetchConnectionCredential",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/connections/${OpenApiUtil.getEncodeParam(name)}/fetchCredential`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<FetchConnectionCredentialResponse>(await this.callApi(params, req, runtime), new FetchConnectionCredentialResponse({}));
  }

  /**
   * @summary 查询身份绑定中的凭证信息
   *
   * @return FetchConnectionCredentialResponse
   */
  async fetchConnectionCredential(name: string): Promise<FetchConnectionCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.fetchConnectionCredentialWithOptions(name, headers, runtime);
  }

  /**
   * @summary 查询仓库代码拉取所需信息
   *
   * @param request FetchRepositoryCheckoutRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return FetchRepositoryCheckoutResponse
   */
  async fetchRepositoryCheckoutWithOptions(name: string, request: FetchRepositoryCheckoutRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<FetchRepositoryCheckoutResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.branch)) {
      query["branch"] = request.branch;
    }

    if (!Util.isUnset(request.commit)) {
      query["commit"] = request.commit;
    }

    if (!Util.isUnset(request.tag)) {
      query["tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FetchRepositoryCheckout",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/repositories/${OpenApiUtil.getEncodeParam(name)}/fetchCheckout`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<FetchRepositoryCheckoutResponse>(await this.callApi(params, req, runtime), new FetchRepositoryCheckoutResponse({}));
  }

  /**
   * @summary 查询仓库代码拉取所需信息
   *
   * @param request FetchRepositoryCheckoutRequest
   * @return FetchRepositoryCheckoutResponse
   */
  async fetchRepositoryCheckout(name: string, request: FetchRepositoryCheckoutRequest): Promise<FetchRepositoryCheckoutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.fetchRepositoryCheckoutWithOptions(name, request, headers, runtime);
  }

  /**
   * @summary 查询身份绑定
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetConnectionResponse
   */
  async getConnectionWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetConnectionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetConnection",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/connections/${OpenApiUtil.getEncodeParam(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetConnectionResponse>(await this.callApi(params, req, runtime), new GetConnectionResponse({}));
  }

  /**
   * @summary 查询身份绑定
   *
   * @return GetConnectionResponse
   */
  async getConnection(name: string): Promise<GetConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getConnectionWithOptions(name, headers, runtime);
  }

  /**
   * @summary 获取环境信息
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetEnvironmentResponse
   */
  async getEnvironmentWithOptions(project: string, name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetEnvironmentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetEnvironment",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects/${OpenApiUtil.getEncodeParam(project)}/environments/${OpenApiUtil.getEncodeParam(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetEnvironmentResponse>(await this.callApi(params, req, runtime), new GetEnvironmentResponse({}));
  }

  /**
   * @summary 获取环境信息
   *
   * @return GetEnvironmentResponse
   */
  async getEnvironment(project: string, name: string): Promise<GetEnvironmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEnvironmentWithOptions(project, name, headers, runtime);
  }

  /**
   * @summary 查询流水线
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetPipelineResponse
   */
  async getPipelineWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetPipelineResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetPipeline",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/pipelines/${OpenApiUtil.getEncodeParam(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetPipelineResponse>(await this.callApi(params, req, runtime), new GetPipelineResponse({}));
  }

  /**
   * @summary 查询流水线
   *
   * @return GetPipelineResponse
   */
  async getPipeline(name: string): Promise<GetPipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPipelineWithOptions(name, headers, runtime);
  }

  /**
   * @summary 查询流水线模板
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetPipelineTemplateResponse
   */
  async getPipelineTemplateWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetPipelineTemplateResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetPipelineTemplate",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/pipelinetemplates/${OpenApiUtil.getEncodeParam(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetPipelineTemplateResponse>(await this.callApi(params, req, runtime), new GetPipelineTemplateResponse({}));
  }

  /**
   * @summary 查询流水线模板
   *
   * @return GetPipelineTemplateResponse
   */
  async getPipelineTemplate(name: string): Promise<GetPipelineTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPipelineTemplateWithOptions(name, headers, runtime);
  }

  /**
   * @summary 查询流水线触发器
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetPipelineTriggerResponse
   */
  async getPipelineTriggerWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetPipelineTriggerResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetPipelineTrigger",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/pipelinetriggers/${OpenApiUtil.getEncodeParam(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetPipelineTriggerResponse>(await this.callApi(params, req, runtime), new GetPipelineTriggerResponse({}));
  }

  /**
   * @summary 查询流水线触发器
   *
   * @return GetPipelineTriggerResponse
   */
  async getPipelineTrigger(name: string): Promise<GetPipelineTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPipelineTriggerWithOptions(name, headers, runtime);
  }

  /**
   * @summary 查询流水线触发历史
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetPipelineTriggerEventResponse
   */
  async getPipelineTriggerEventWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetPipelineTriggerEventResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetPipelineTriggerEvent",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/pipelinetriggerevents/${OpenApiUtil.getEncodeParam(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetPipelineTriggerEventResponse>(await this.callApi(params, req, runtime), new GetPipelineTriggerEventResponse({}));
  }

  /**
   * @summary 查询流水线触发历史
   *
   * @return GetPipelineTriggerEventResponse
   */
  async getPipelineTriggerEvent(name: string): Promise<GetPipelineTriggerEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPipelineTriggerEventWithOptions(name, headers, runtime);
  }

  /**
   * @summary 查询项目
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetProjectResponse
   */
  async getProjectWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetProjectResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetProject",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects/${OpenApiUtil.getEncodeParam(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetProjectResponse>(await this.callApi(params, req, runtime), new GetProjectResponse({}));
  }

  /**
   * @summary 查询项目
   *
   * @return GetProjectResponse
   */
  async getProject(name: string): Promise<GetProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectWithOptions(name, headers, runtime);
  }

  /**
   * @summary 查询仓库绑定
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetRepositoryResponse
   */
  async getRepositoryWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRepositoryResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetRepository",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/repositories/${OpenApiUtil.getEncodeParam(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetRepositoryResponse>(await this.callApi(params, req, runtime), new GetRepositoryResponse({}));
  }

  /**
   * @summary 查询仓库绑定
   *
   * @return GetRepositoryResponse
   */
  async getRepository(name: string): Promise<GetRepositoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRepositoryWithOptions(name, headers, runtime);
  }

  /**
   * @summary 查询任务
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTaskResponse
   */
  async getTaskWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTask",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/tasks/${OpenApiUtil.getEncodeParam(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTaskResponse>(await this.callApi(params, req, runtime), new GetTaskResponse({}));
  }

  /**
   * @summary 查询任务
   *
   * @return GetTaskResponse
   */
  async getTask(name: string): Promise<GetTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskWithOptions(name, headers, runtime);
  }

  /**
   * @summary 查询任务模板
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTaskTemplateResponse
   */
  async getTaskTemplateWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTaskTemplateResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTaskTemplate",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/tasktemplates/${OpenApiUtil.getEncodeParam(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTaskTemplateResponse>(await this.callApi(params, req, runtime), new GetTaskTemplateResponse({}));
  }

  /**
   * @summary 查询任务模板
   *
   * @return GetTaskTemplateResponse
   */
  async getTaskTemplate(name: string): Promise<GetTaskTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskTemplateWithOptions(name, headers, runtime);
  }

  /**
   * @summary 批量查询身份绑定
   *
   * @param tmpReq ListConnectionsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListConnectionsResponse
   */
  async listConnectionsWithOptions(tmpReq: ListConnectionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListConnectionsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListConnectionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.labelSelector)) {
      request.labelSelectorShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelSelector, "labelSelector", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.labelSelectorShrink)) {
      query["labelSelector"] = request.labelSelectorShrink;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListConnections",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/connections`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListConnectionsResponse>(await this.callApi(params, req, runtime), new ListConnectionsResponse({}));
  }

  /**
   * @summary 批量查询身份绑定
   *
   * @param request ListConnectionsRequest
   * @return ListConnectionsResponse
   */
  async listConnections(request: ListConnectionsRequest): Promise<ListConnectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConnectionsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 查询环境列表
   *
   * @param tmpReq ListEnvironmentsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListEnvironmentsResponse
   */
  async listEnvironmentsWithOptions(project: string, tmpReq: ListEnvironmentsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListEnvironmentsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListEnvironmentsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.labelSelector)) {
      request.labelSelectorShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelSelector, "labelSelector", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.labelSelectorShrink)) {
      query["labelSelector"] = request.labelSelectorShrink;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEnvironments",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects/${OpenApiUtil.getEncodeParam(project)}/environments/`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListEnvironmentsResponse>(await this.callApi(params, req, runtime), new ListEnvironmentsResponse({}));
  }

  /**
   * @summary 查询环境列表
   *
   * @param request ListEnvironmentsRequest
   * @return ListEnvironmentsResponse
   */
  async listEnvironments(project: string, request: ListEnvironmentsRequest): Promise<ListEnvironmentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEnvironmentsWithOptions(project, request, headers, runtime);
  }

  /**
   * @summary 批量查询流水线模板
   *
   * @param tmpReq ListPipelineTemplatesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListPipelineTemplatesResponse
   */
  async listPipelineTemplatesWithOptions(tmpReq: ListPipelineTemplatesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListPipelineTemplatesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListPipelineTemplatesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.labelSelector)) {
      request.labelSelectorShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelSelector, "labelSelector", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labelSelectorShrink)) {
      query["labelSelector"] = request.labelSelectorShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPipelineTemplates",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/pipelinetemplates`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<ListPipelineTemplatesResponse>(await this.callApi(params, req, runtime), new ListPipelineTemplatesResponse({}));
  }

  /**
   * @summary 批量查询流水线模板
   *
   * @param request ListPipelineTemplatesRequest
   * @return ListPipelineTemplatesResponse
   */
  async listPipelineTemplates(request: ListPipelineTemplatesRequest): Promise<ListPipelineTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPipelineTemplatesWithOptions(request, headers, runtime);
  }

  /**
   * @summary 批量查询流水线触发历史
   *
   * @param tmpReq ListPipelineTriggerEventsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListPipelineTriggerEventsResponse
   */
  async listPipelineTriggerEventsWithOptions(tmpReq: ListPipelineTriggerEventsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListPipelineTriggerEventsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListPipelineTriggerEventsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.labelSelector)) {
      request.labelSelectorShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelSelector, "labelSelector", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.labelSelectorShrink)) {
      query["labelSelector"] = request.labelSelectorShrink;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPipelineTriggerEvents",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/pipelinetriggerevents`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListPipelineTriggerEventsResponse>(await this.callApi(params, req, runtime), new ListPipelineTriggerEventsResponse({}));
  }

  /**
   * @summary 批量查询流水线触发历史
   *
   * @param request ListPipelineTriggerEventsRequest
   * @return ListPipelineTriggerEventsResponse
   */
  async listPipelineTriggerEvents(request: ListPipelineTriggerEventsRequest): Promise<ListPipelineTriggerEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPipelineTriggerEventsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 批量查询流水线触发器
   *
   * @param tmpReq ListPipelineTriggersRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListPipelineTriggersResponse
   */
  async listPipelineTriggersWithOptions(tmpReq: ListPipelineTriggersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListPipelineTriggersResponse> {
    Util.validateModel(tmpReq);
    let request = new ListPipelineTriggersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.labelSelector)) {
      request.labelSelectorShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelSelector, "labelSelector", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.labelSelectorShrink)) {
      query["labelSelector"] = request.labelSelectorShrink;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPipelineTriggers",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/pipelinetriggers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListPipelineTriggersResponse>(await this.callApi(params, req, runtime), new ListPipelineTriggersResponse({}));
  }

  /**
   * @summary 批量查询流水线触发器
   *
   * @param request ListPipelineTriggersRequest
   * @return ListPipelineTriggersResponse
   */
  async listPipelineTriggers(request: ListPipelineTriggersRequest): Promise<ListPipelineTriggersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPipelineTriggersWithOptions(request, headers, runtime);
  }

  /**
   * @summary 批量查询流水线
   *
   * @param tmpReq ListPipelinesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListPipelinesResponse
   */
  async listPipelinesWithOptions(tmpReq: ListPipelinesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListPipelinesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListPipelinesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.labelSelector)) {
      request.labelSelectorShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelSelector, "labelSelector", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labelSelectorShrink)) {
      query["labelSelector"] = request.labelSelectorShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPipelines",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/pipelines`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<ListPipelinesResponse>(await this.callApi(params, req, runtime), new ListPipelinesResponse({}));
  }

  /**
   * @summary 批量查询流水线
   *
   * @param request ListPipelinesRequest
   * @return ListPipelinesResponse
   */
  async listPipelines(request: ListPipelinesRequest): Promise<ListPipelinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPipelinesWithOptions(request, headers, runtime);
  }

  /**
   * @summary 批量查询项目
   *
   * @param tmpReq ListProjectsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListProjectsResponse
   */
  async listProjectsWithOptions(tmpReq: ListProjectsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListProjectsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListProjectsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.labelSelector)) {
      request.labelSelectorShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelSelector, "labelSelector", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.labelSelectorShrink)) {
      query["labelSelector"] = request.labelSelectorShrink;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListProjects",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListProjectsResponse>(await this.callApi(params, req, runtime), new ListProjectsResponse({}));
  }

  /**
   * @summary 批量查询项目
   *
   * @param request ListProjectsRequest
   * @return ListProjectsResponse
   */
  async listProjects(request: ListProjectsRequest): Promise<ListProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 批量查询仓库绑定
   *
   * @param tmpReq ListRepositoriesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListRepositoriesResponse
   */
  async listRepositoriesWithOptions(tmpReq: ListRepositoriesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRepositoriesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListRepositoriesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.labelSelector)) {
      request.labelSelectorShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelSelector, "labelSelector", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.labelSelectorShrink)) {
      query["labelSelector"] = request.labelSelectorShrink;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRepositories",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/repositories`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRepositoriesResponse>(await this.callApi(params, req, runtime), new ListRepositoriesResponse({}));
  }

  /**
   * @summary 批量查询仓库绑定
   *
   * @param request ListRepositoriesRequest
   * @return ListRepositoriesResponse
   */
  async listRepositories(request: ListRepositoriesRequest): Promise<ListRepositoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRepositoriesWithOptions(request, headers, runtime);
  }

  /**
   * @summary 批量查询任务模板
   *
   * @param tmpReq ListTaskTemplatesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListTaskTemplatesResponse
   */
  async listTaskTemplatesWithOptions(tmpReq: ListTaskTemplatesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTaskTemplatesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListTaskTemplatesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.labelSelector)) {
      request.labelSelectorShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelSelector, "labelSelector", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labelSelectorShrink)) {
      query["labelSelector"] = request.labelSelectorShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTaskTemplates",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/tasktemplates`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<ListTaskTemplatesResponse>(await this.callApi(params, req, runtime), new ListTaskTemplatesResponse({}));
  }

  /**
   * @summary 批量查询任务模板
   *
   * @param request ListTaskTemplatesRequest
   * @return ListTaskTemplatesResponse
   */
  async listTaskTemplates(request: ListTaskTemplatesRequest): Promise<ListTaskTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTaskTemplatesWithOptions(request, headers, runtime);
  }

  /**
   * @summary 批量查询任务
   *
   * @param tmpReq ListTasksRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListTasksResponse
   */
  async listTasksWithOptions(tmpReq: ListTasksRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTasksResponse> {
    Util.validateModel(tmpReq);
    let request = new ListTasksShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.labelSelector)) {
      request.labelSelectorShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelSelector, "labelSelector", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labelSelectorShrink)) {
      query["labelSelector"] = request.labelSelectorShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTasks",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<ListTasksResponse>(await this.callApi(params, req, runtime), new ListTasksResponse({}));
  }

  /**
   * @summary 批量查询任务
   *
   * @param request ListTasksRequest
   * @return ListTasksResponse
   */
  async listTasks(request: ListTasksRequest): Promise<ListTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTasksWithOptions(request, headers, runtime);
  }

  /**
   * @summary 更新环境（全局更新）
   *
   * @param request PutEnvironmentRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return PutEnvironmentResponse
   */
  async putEnvironmentWithOptions(project: string, name: string, request: PutEnvironmentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutEnvironmentResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.force)) {
      query["force"] = request.force;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "PutEnvironment",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects/${OpenApiUtil.getEncodeParam(project)}/environments/${OpenApiUtil.getEncodeParam(name)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PutEnvironmentResponse>(await this.callApi(params, req, runtime), new PutEnvironmentResponse({}));
  }

  /**
   * @summary 更新环境（全局更新）
   *
   * @param request PutEnvironmentRequest
   * @return PutEnvironmentResponse
   */
  async putEnvironment(project: string, name: string, request: PutEnvironmentRequest): Promise<PutEnvironmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putEnvironmentWithOptions(project, name, request, headers, runtime);
  }

  /**
   * @summary 更新流水线状态
   *
   * @param request PutPipelineStatusRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return PutPipelineStatusResponse
   */
  async putPipelineStatusWithOptions(name: string, request: PutPipelineStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutPipelineStatusResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.force)) {
      query["force"] = request.force;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "PutPipelineStatus",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/pipelines/${OpenApiUtil.getEncodeParam(name)}/status`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PutPipelineStatusResponse>(await this.callApi(params, req, runtime), new PutPipelineStatusResponse({}));
  }

  /**
   * @summary 更新流水线状态
   *
   * @param request PutPipelineStatusRequest
   * @return PutPipelineStatusResponse
   */
  async putPipelineStatus(name: string, request: PutPipelineStatusRequest): Promise<PutPipelineStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putPipelineStatusWithOptions(name, request, headers, runtime);
  }

  /**
   * @summary 更新替换流水线模板
   *
   * @param request PutPipelineTemplateRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return PutPipelineTemplateResponse
   */
  async putPipelineTemplateWithOptions(name: string, request: PutPipelineTemplateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutPipelineTemplateResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.force)) {
      query["force"] = request.force;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "PutPipelineTemplate",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/pipelinetemplates/${OpenApiUtil.getEncodeParam(name)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PutPipelineTemplateResponse>(await this.callApi(params, req, runtime), new PutPipelineTemplateResponse({}));
  }

  /**
   * @summary 更新替换流水线模板
   *
   * @param request PutPipelineTemplateRequest
   * @return PutPipelineTemplateResponse
   */
  async putPipelineTemplate(name: string, request: PutPipelineTemplateRequest): Promise<PutPipelineTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putPipelineTemplateWithOptions(name, request, headers, runtime);
  }

  /**
   * @summary 更新替换流水线触发器
   *
   * @param request PutPipelineTriggerRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return PutPipelineTriggerResponse
   */
  async putPipelineTriggerWithOptions(name: string, request: PutPipelineTriggerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutPipelineTriggerResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.force)) {
      query["force"] = request.force;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "PutPipelineTrigger",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/pipelinetriggers/${OpenApiUtil.getEncodeParam(name)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PutPipelineTriggerResponse>(await this.callApi(params, req, runtime), new PutPipelineTriggerResponse({}));
  }

  /**
   * @summary 更新替换流水线触发器
   *
   * @param request PutPipelineTriggerRequest
   * @return PutPipelineTriggerResponse
   */
  async putPipelineTrigger(name: string, request: PutPipelineTriggerRequest): Promise<PutPipelineTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putPipelineTriggerWithOptions(name, request, headers, runtime);
  }

  /**
   * @summary 更新替换应用
   *
   * @param request PutProjectRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return PutProjectResponse
   */
  async putProjectWithOptions(name: string, request: PutProjectRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutProjectResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.force)) {
      query["force"] = request.force;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "PutProject",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects/${OpenApiUtil.getEncodeParam(name)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PutProjectResponse>(await this.callApi(params, req, runtime), new PutProjectResponse({}));
  }

  /**
   * @summary 更新替换应用
   *
   * @param request PutProjectRequest
   * @return PutProjectResponse
   */
  async putProject(name: string, request: PutProjectRequest): Promise<PutProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putProjectWithOptions(name, request, headers, runtime);
  }

  /**
   * @summary 更新替换任务状态
   *
   * @param request PutTaskStatusRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return PutTaskStatusResponse
   */
  async putTaskStatusWithOptions(name: string, request: PutTaskStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutTaskStatusResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.force)) {
      query["force"] = request.force;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "PutTaskStatus",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/tasks/${OpenApiUtil.getEncodeParam(name)}/status`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PutTaskStatusResponse>(await this.callApi(params, req, runtime), new PutTaskStatusResponse({}));
  }

  /**
   * @summary 更新替换任务状态
   *
   * @param request PutTaskStatusRequest
   * @return PutTaskStatusResponse
   */
  async putTaskStatus(name: string, request: PutTaskStatusRequest): Promise<PutTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putTaskStatusWithOptions(name, request, headers, runtime);
  }

  /**
   * @summary 更新替换任务模板
   *
   * @param request PutTaskTemplateRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return PutTaskTemplateResponse
   */
  async putTaskTemplateWithOptions(name: string, request: PutTaskTemplateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutTaskTemplateResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.force)) {
      query["force"] = request.force;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "PutTaskTemplate",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/tasktemplates/${OpenApiUtil.getEncodeParam(name)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PutTaskTemplateResponse>(await this.callApi(params, req, runtime), new PutTaskTemplateResponse({}));
  }

  /**
   * @summary 更新替换任务模板
   *
   * @param request PutTaskTemplateRequest
   * @return PutTaskTemplateResponse
   */
  async putTaskTemplate(name: string, request: PutTaskTemplateRequest): Promise<PutTaskTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putTaskTemplateWithOptions(name, request, headers, runtime);
  }

  /**
   * @summary 检查并刷新身份绑定中的凭证和账号信息
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return RefreshConnectionResponse
   */
  async refreshConnectionWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RefreshConnectionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "RefreshConnection",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/connections/${OpenApiUtil.getEncodeParam(name)}/refresh`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RefreshConnectionResponse>(await this.callApi(params, req, runtime), new RefreshConnectionResponse({}));
  }

  /**
   * @summary 检查并刷新身份绑定中的凭证和账号信息
   *
   * @return RefreshConnectionResponse
   */
  async refreshConnection(name: string): Promise<RefreshConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.refreshConnectionWithOptions(name, headers, runtime);
  }

  /**
   * @summary 确认并继续执行任务
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ResumeTaskResponse
   */
  async resumeTaskWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ResumeTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ResumeTask",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/tasks/${OpenApiUtil.getEncodeParam(name)}/resume`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ResumeTaskResponse>(await this.callApi(params, req, runtime), new ResumeTaskResponse({}));
  }

  /**
   * @summary 确认并继续执行任务
   *
   * @return ResumeTaskResponse
   */
  async resumeTask(name: string): Promise<ResumeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeTaskWithOptions(name, headers, runtime);
  }

  /**
   * @summary 重试执行任务
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return RetryTaskResponse
   */
  async retryTaskWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RetryTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "RetryTask",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/tasks/${OpenApiUtil.getEncodeParam(name)}/retry`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RetryTaskResponse>(await this.callApi(params, req, runtime), new RetryTaskResponse({}));
  }

  /**
   * @summary 重试执行任务
   *
   * @return RetryTaskResponse
   */
  async retryTask(name: string): Promise<RetryTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.retryTaskWithOptions(name, headers, runtime);
  }

  /**
   * @summary 开始执行流水线
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return StartPipelineResponse
   */
  async startPipelineWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartPipelineResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StartPipeline",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/pipelines/${OpenApiUtil.getEncodeParam(name)}/start`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StartPipelineResponse>(await this.callApi(params, req, runtime), new StartPipelineResponse({}));
  }

  /**
   * @summary 开始执行流水线
   *
   * @return StartPipelineResponse
   */
  async startPipeline(name: string): Promise<StartPipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startPipelineWithOptions(name, headers, runtime);
  }

  /**
   * @summary 开始执行任务
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return StartTaskResponse
   */
  async startTaskWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StartTask",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/tasks/${OpenApiUtil.getEncodeParam(name)}/start`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StartTaskResponse>(await this.callApi(params, req, runtime), new StartTaskResponse({}));
  }

  /**
   * @summary 开始执行任务
   *
   * @return StartTaskResponse
   */
  async startTask(name: string): Promise<StartTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startTaskWithOptions(name, headers, runtime);
  }

  /**
   * @summary 更新环境（局部更新）
   *
   * @param request UpdateEnvironmentRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateEnvironmentResponse
   */
  async updateEnvironmentWithOptions(project: string, name: string, request: UpdateEnvironmentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateEnvironmentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateEnvironment",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects/${OpenApiUtil.getEncodeParam(project)}/environments/${OpenApiUtil.getEncodeParam(name)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateEnvironmentResponse>(await this.callApi(params, req, runtime), new UpdateEnvironmentResponse({}));
  }

  /**
   * @summary 更新环境（局部更新）
   *
   * @param request UpdateEnvironmentRequest
   * @return UpdateEnvironmentResponse
   */
  async updateEnvironment(project: string, name: string, request: UpdateEnvironmentRequest): Promise<UpdateEnvironmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateEnvironmentWithOptions(project, name, request, headers, runtime);
  }

  /**
   * @summary 更新流水线触发器
   *
   * @param request UpdatePipelineTriggerRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdatePipelineTriggerResponse
   */
  async updatePipelineTriggerWithOptions(name: string, request: UpdatePipelineTriggerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdatePipelineTriggerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "UpdatePipelineTrigger",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/pipelinetriggers/${OpenApiUtil.getEncodeParam(name)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdatePipelineTriggerResponse>(await this.callApi(params, req, runtime), new UpdatePipelineTriggerResponse({}));
  }

  /**
   * @summary 更新流水线触发器
   *
   * @param request UpdatePipelineTriggerRequest
   * @return UpdatePipelineTriggerResponse
   */
  async updatePipelineTrigger(name: string, request: UpdatePipelineTriggerRequest): Promise<UpdatePipelineTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePipelineTriggerWithOptions(name, request, headers, runtime);
  }

  /**
   * @summary 更新替换应用
   *
   * @param request UpdateProjectRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateProjectResponse
   */
  async updateProjectWithOptions(name: string, request: UpdateProjectRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateProjectResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.force)) {
      query["force"] = request.force;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateProject",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects/${OpenApiUtil.getEncodeParam(name)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateProjectResponse>(await this.callApi(params, req, runtime), new UpdateProjectResponse({}));
  }

  /**
   * @summary 更新替换应用
   *
   * @param request UpdateProjectRequest
   * @return UpdateProjectResponse
   */
  async updateProject(name: string, request: UpdateProjectRequest): Promise<UpdateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProjectWithOptions(name, request, headers, runtime);
  }

}
