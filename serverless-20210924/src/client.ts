// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class Application extends $tea.Model {
  autoDeploy?: string;
  createdTime?: string;
  description?: string;
  envVars?: { [key: string]: any };
  lastRelease?: { [key: string]: any };
  name?: string;
  output?: { [key: string]: any };
  parameters?: { [key: string]: any };
  repoSource?: ApplicationRepoSource;
  roleArn?: string;
  template?: string;
  trigger?: ApplicationTrigger;
  updatedTime?: string;
  workDir?: string;
  static names(): { [key: string]: string } {
    return {
      autoDeploy: 'autoDeploy',
      createdTime: 'createdTime',
      description: 'description',
      envVars: 'envVars',
      lastRelease: 'lastRelease',
      name: 'name',
      output: 'output',
      parameters: 'parameters',
      repoSource: 'repoSource',
      roleArn: 'roleArn',
      template: 'template',
      trigger: 'trigger',
      updatedTime: 'updatedTime',
      workDir: 'workDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDeploy: 'string',
      createdTime: 'string',
      description: 'string',
      envVars: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      lastRelease: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      output: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      repoSource: ApplicationRepoSource,
      roleArn: 'string',
      template: 'string',
      trigger: ApplicationTrigger,
      updatedTime: 'string',
      workDir: 'string',
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
  deletionTime?: string;
  description?: string;
  generation?: number;
  kind?: string;
  name?: string;
  spec?: EnvironmentSpec;
  status?: EnvironmentStatus;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      deletionTime: 'deletionTime',
      description: 'description',
      generation: 'generation',
      kind: 'kind',
      name: 'name',
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
      name: 'string',
      spec: EnvironmentSpec,
      status: EnvironmentStatus,
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnvironmentRevision extends $tea.Model {
  createdTime?: string;
  environmentGeneration?: number;
  environmentName?: string;
  kind?: string;
  spec?: EnvironmentSpec;
  status?: EnvironmentStatus;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      environmentGeneration: 'environmentGeneration',
      environmentName: 'environmentName',
      kind: 'kind',
      spec: 'spec',
      status: 'status',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      environmentGeneration: 'number',
      environmentName: 'string',
      kind: 'string',
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
  region?: string;
  roleArn?: string;
  template?: string;
  templateVariables?: { [key: string]: any };
  templateVersion?: number;
  static names(): { [key: string]: string } {
    return {
      region: 'region',
      roleArn: 'roleArn',
      template: 'template',
      templateVariables: 'templateVariables',
      templateVersion: 'templateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
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

export class EnvironmentStatus extends $tea.Model {
  message?: string;
  observedGeneration?: number;
  observedTime?: string;
  output?: { [key: string]: any };
  phase?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      observedGeneration: 'observedGeneration',
      observedTime: 'observedTime',
      output: 'output',
      phase: 'phase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      observedGeneration: 'number',
      observedTime: 'string',
      output: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      phase: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InputVariable extends $tea.Model {
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

export class OutputValue extends $tea.Model {
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

export class PipelineStatus extends $tea.Model {
  phase?: string;
  static names(): { [key: string]: string } {
    return {
      phase: 'phase',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  contextSchema?: { [key: string]: any };
  tasks?: TaskExec[];
  static names(): { [key: string]: string } {
    return {
      context: 'context',
      contextSchema: 'contextSchema',
      tasks: 'tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: Context,
      contextSchema: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      tasks: { 'type': 'array', 'itemType': TaskExec },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Release extends $tea.Model {
  appConfig?: { [key: string]: any };
  codeVersion?: ReleaseCodeVersion;
  createdTime?: string;
  description?: string;
  output?: { [key: string]: any };
  status?: string;
  versionId?: number;
  static names(): { [key: string]: string } {
    return {
      appConfig: 'appConfig',
      codeVersion: 'codeVersion',
      createdTime: 'createdTime',
      description: 'description',
      output: 'output',
      status: 'status',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      codeVersion: ReleaseCodeVersion,
      createdTime: 'string',
      description: 'string',
      output: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      status: 'string',
      versionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RepoSource extends $tea.Model {
  owner?: string;
  provider?: string;
  repo?: string;
  static names(): { [key: string]: string } {
    return {
      owner: 'owner',
      provider: 'provider',
      repo: 'repo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      owner: 'string',
      provider: 'string',
      repo: 'string',
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

export class Service extends $tea.Model {
  createdTime?: string;
  deletionTime?: string;
  description?: string;
  generation?: number;
  kind?: string;
  name?: string;
  spec?: ServiceSpec;
  status?: ServiceStatus;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      deletionTime: 'deletionTime',
      description: 'description',
      generation: 'generation',
      kind: 'kind',
      name: 'name',
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
      name: 'string',
      spec: ServiceSpec,
      status: ServiceStatus,
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ServiceRevision extends $tea.Model {
  createdTime?: string;
  kind?: string;
  serviceGeneration?: number;
  serviceName?: string;
  spec?: ServiceSpec;
  status?: EnvironmentStatus;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      kind: 'kind',
      serviceGeneration: 'serviceGeneration',
      serviceName: 'serviceName',
      spec: 'spec',
      status: 'status',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      kind: 'string',
      serviceGeneration: 'number',
      serviceName: 'string',
      spec: ServiceSpec,
      status: EnvironmentStatus,
      uid: 'string',
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

export class ServiceStatus extends $tea.Model {
  message?: string;
  observedGeneration?: number;
  observedTime?: string;
  output?: { [key: string]: any };
  phase?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      observedGeneration: 'observedGeneration',
      observedTime: 'observedTime',
      output: 'output',
      phase: 'phase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      observedGeneration: 'number',
      observedTime: 'string',
      output: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      phase: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Status extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StsCredentials extends $tea.Model {
  accessKeyId?: string;
  expirationTime?: string;
  kind?: string;
  secretAccessKey?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'accessKeyId',
      expirationTime: 'expirationTime',
      kind: 'kind',
      secretAccessKey: 'secretAccessKey',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      expirationTime: 'string',
      kind: 'string',
      secretAccessKey: 'string',
      token: 'string',
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

export class TaskInvocation extends $tea.Model {
  instanceID?: string;
  invocationID?: string;
  invocationTarget?: string;
  output?: string;
  requestID?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceID: 'instanceID',
      invocationID: 'invocationID',
      invocationTarget: 'invocationTarget',
      output: 'output',
      requestID: 'requestID',
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
  phase?: string;
  statusGeneration?: number;
  static names(): { [key: string]: string } {
    return {
      executionDetails: 'executionDetails',
      invocations: 'invocations',
      phase: 'phase',
      statusGeneration: 'statusGeneration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionDetails: { 'type': 'array', 'itemType': 'string' },
      invocations: { 'type': 'array', 'itemType': TaskInvocation },
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
  contextSchema?: { [key: string]: any };
  description?: string;
  executeCondition?: Condition;
  worker?: TaskWorker;
  static names(): { [key: string]: string } {
    return {
      context: 'context',
      contextSchema: 'contextSchema',
      description: 'description',
      executeCondition: 'executeCondition',
      worker: 'worker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: Context,
      contextSchema: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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

export class Template extends $tea.Model {
  createdTime?: string;
  deletionTime?: string;
  description?: string;
  generation?: number;
  kind?: string;
  name?: string;
  spec?: TemplateSpec;
  status?: TemplateStatus;
  uid?: string;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      deletionTime: 'deletionTime',
      description: 'description',
      generation: 'generation',
      kind: 'kind',
      name: 'name',
      spec: 'spec',
      status: 'status',
      uid: 'uid',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      deletionTime: 'string',
      description: 'string',
      generation: 'number',
      kind: 'string',
      name: 'string',
      spec: TemplateSpec,
      status: TemplateStatus,
      uid: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateRevision extends $tea.Model {
  createdTime?: string;
  kind?: string;
  spec?: TemplateSpec;
  status?: TemplateStatus;
  templateGeneration?: number;
  templateName?: string;
  templateVersion?: number;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      kind: 'kind',
      spec: 'spec',
      status: 'status',
      templateGeneration: 'templateGeneration',
      templateName: 'templateName',
      templateVersion: 'templateVersion',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      kind: 'string',
      spec: TemplateSpec,
      status: TemplateStatus,
      templateGeneration: 'number',
      templateName: 'string',
      templateVersion: 'number',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateSpec extends $tea.Model {
  content?: string;
  contentType?: string;
  ramPolicy?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      contentType: 'contentType',
      ramPolicy: 'ramPolicy',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      ramPolicy: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateStatus extends $tea.Model {
  message?: string;
  observedGeneration?: number;
  observedTime?: string;
  outputs?: OutputValue[];
  phase?: string;
  variables?: InputVariable[];
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      observedGeneration: 'observedGeneration',
      observedTime: 'observedTime',
      outputs: 'outputs',
      phase: 'phase',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      observedGeneration: 'number',
      observedTime: 'string',
      outputs: { 'type': 'array', 'itemType': OutputValue },
      phase: 'string',
      variables: { 'type': 'array', 'itemType': InputVariable },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerConfig extends $tea.Model {
  branch?: string;
  commit?: string;
  on?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'branch',
      commit: 'commit',
      on: 'on',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      commit: 'string',
      on: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Task;
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

export class CreateApplicationRequest extends $tea.Model {
  autoDeploy?: boolean;
  description?: string;
  envVars?: { [key: string]: string };
  name?: string;
  parameters?: { [key: string]: string };
  repoSource?: RepoSource;
  roleArn?: string;
  template?: string;
  trigger?: TriggerConfig;
  static names(): { [key: string]: string } {
    return {
      autoDeploy: 'autoDeploy',
      description: 'description',
      envVars: 'envVars',
      name: 'name',
      parameters: 'parameters',
      repoSource: 'repoSource',
      roleArn: 'roleArn',
      template: 'template',
      trigger: 'trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDeploy: 'boolean',
      description: 'string',
      envVars: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      repoSource: RepoSource,
      roleArn: 'string',
      template: 'string',
      trigger: TriggerConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Application;
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
      body: Application,
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
  headers: { [key: string]: string };
  statusCode: number;
  body: Pipeline;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: PipelineTemplate;
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

export class CreateReleaseRequest extends $tea.Model {
  description?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReleaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Release;
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
      body: Release,
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
  headers: { [key: string]: string };
  statusCode: number;
  body: Task;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: TaskTemplate;
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

export class DeleteApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: string;
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
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnvironmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeletePipelineTemplateResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteTaskTemplateResponseBody;
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

export class DeleteTemplateRequest extends $tea.Model {
  version?: number;
  static names(): { [key: string]: string } {
    return {
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Status;
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
      body: Status,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Application;
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
      body: Application,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Environment;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: Pipeline;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: PipelineTemplate;
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

export class GetReleaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Release;
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
      body: Release,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Service;
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
      body: Service,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Task;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: TaskTemplate;
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

export class GetTemplateRequest extends $tea.Model {
  version?: number;
  static names(): { [key: string]: string } {
    return {
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Template;
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
      body: Template,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentRevisionsRequest extends $tea.Model {
  environmentName?: string;
  static names(): { [key: string]: string } {
    return {
      environmentName: 'environmentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentRevisionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EnvironmentRevision[];
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
      body: { 'type': 'array', 'itemType': EnvironmentRevision },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Environment[];
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
      body: { 'type': 'array', 'itemType': Environment },
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
  headers: { [key: string]: string };
  statusCode: number;
  body: PipelineTemplate[];
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
  headers: { [key: string]: string };
  statusCode: number;
  body: Pipeline[];
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

export class ListServiceRevisionsRequest extends $tea.Model {
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceRevisionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ServiceRevision[];
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
      body: { 'type': 'array', 'itemType': ServiceRevision },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Service[];
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
      body: { 'type': 'array', 'itemType': Service },
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
  headers: { [key: string]: string };
  statusCode: number;
  body: TaskTemplate[];
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
  headers: { [key: string]: string };
  statusCode: number;
  body: Task[];
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

export class ListTemplateRevisionsRequest extends $tea.Model {
  templateName?: string;
  templateVersion?: number;
  static names(): { [key: string]: string } {
    return {
      templateName: 'templateName',
      templateVersion: 'templateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateName: 'string',
      templateVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateRevisionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TemplateRevision[];
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
      body: { 'type': 'array', 'itemType': TemplateRevision },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesRequest extends $tea.Model {
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Template[];
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
      body: { 'type': 'array', 'itemType': Template },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEnvironmentRequest extends $tea.Model {
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

export class PutEnvironmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Environment;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: Pipeline;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: PipelineTemplate;
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

export class PutServiceRequest extends $tea.Model {
  body?: Service;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Service,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Service;
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
      body: Service,
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
  headers: { [key: string]: string };
  statusCode: number;
  body: Task;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: TaskTemplate;
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

export class PutTemplateRequest extends $tea.Model {
  body?: Template;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Template,
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Template;
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
      body: Template,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Task;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: Task;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: Pipeline;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: Task;
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

export class UpdateApplicationRequest extends $tea.Model {
  body?: Application;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Application,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Application;
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
      body: Application,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplicationRepoSource extends $tea.Model {
  owner?: string;
  provider?: string;
  repo?: string;
  static names(): { [key: string]: string } {
    return {
      owner: 'owner',
      provider: 'provider',
      repo: 'repo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      owner: 'string',
      provider: 'string',
      repo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplicationTrigger extends $tea.Model {
  branch?: string;
  commit?: string;
  on?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'branch',
      commit: 'commit',
      on: 'on',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      commit: 'string',
      on: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseCodeVersion extends $tea.Model {
  branch?: string;
  commit?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'branch',
      commit: 'commit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      commit: 'string',
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
    this._endpoint = this.getEndpoint("serverless", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async cancelTaskWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CancelTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "CancelTask",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/tasks/${OpenApiUtil.getEncodeParam(name)}/cancel`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CancelTaskResponse>(await this.callApi(params, req, runtime), new CancelTaskResponse({}));
  }

  async cancelTask(name: string): Promise<CancelTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelTaskWithOptions(name, headers, runtime);
  }

  async createApplicationWithOptions(request: CreateApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateApplicationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.autoDeploy)) {
      body["autoDeploy"] = request.autoDeploy;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.envVars)) {
      body["envVars"] = request.envVars;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.parameters)) {
      body["parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.repoSource)) {
      body["repoSource"] = request.repoSource;
    }

    if (!Util.isUnset(request.roleArn)) {
      body["roleArn"] = request.roleArn;
    }

    if (!Util.isUnset(request.template)) {
      body["template"] = request.template;
    }

    if (!Util.isUnset(request.trigger)) {
      body["trigger"] = request.trigger;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateApplication",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/applications`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateApplicationResponse>(await this.callApi(params, req, runtime), new CreateApplicationResponse({}));
  }

  async createApplication(request: CreateApplicationRequest): Promise<CreateApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createApplicationWithOptions(request, headers, runtime);
  }

  async createPipelineWithOptions(request: CreatePipelineRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreatePipelineResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreatePipeline",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/pipelines`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreatePipelineResponse>(await this.callApi(params, req, runtime), new CreatePipelineResponse({}));
  }

  async createPipeline(request: CreatePipelineRequest): Promise<CreatePipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPipelineWithOptions(request, headers, runtime);
  }

  async createPipelineTemplateWithOptions(request: CreatePipelineTemplateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreatePipelineTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreatePipelineTemplate",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/pipelinetemplates`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreatePipelineTemplateResponse>(await this.callApi(params, req, runtime), new CreatePipelineTemplateResponse({}));
  }

  async createPipelineTemplate(request: CreatePipelineTemplateRequest): Promise<CreatePipelineTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPipelineTemplateWithOptions(request, headers, runtime);
  }

  async createReleaseWithOptions(appName: string, request: CreateReleaseRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateReleaseResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      query["description"] = request.description;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRelease",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/applications/${OpenApiUtil.getEncodeParam(appName)}/releases`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateReleaseResponse>(await this.callApi(params, req, runtime), new CreateReleaseResponse({}));
  }

  async createRelease(appName: string, request: CreateReleaseRequest): Promise<CreateReleaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createReleaseWithOptions(appName, request, headers, runtime);
  }

  async createTaskWithOptions(request: CreateTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTask",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/tasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateTaskResponse>(await this.callApi(params, req, runtime), new CreateTaskResponse({}));
  }

  async createTask(request: CreateTaskRequest): Promise<CreateTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTaskWithOptions(request, headers, runtime);
  }

  async createTaskTemplateWithOptions(request: CreateTaskTemplateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTaskTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTaskTemplate",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/tasktemplates`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateTaskTemplateResponse>(await this.callApi(params, req, runtime), new CreateTaskTemplateResponse({}));
  }

  async createTaskTemplate(request: CreateTaskTemplateRequest): Promise<CreateTaskTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTaskTemplateWithOptions(request, headers, runtime);
  }

  async deleteApplicationWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteApplicationResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteApplication",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/applications/${OpenApiUtil.getEncodeParam(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    return $tea.cast<DeleteApplicationResponse>(await this.callApi(params, req, runtime), new DeleteApplicationResponse({}));
  }

  async deleteApplication(name: string): Promise<DeleteApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteApplicationWithOptions(name, headers, runtime);
  }

  async deleteEnvironmentWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteEnvironmentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteEnvironment",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/environments/${OpenApiUtil.getEncodeParam(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteEnvironmentResponse>(await this.callApi(params, req, runtime), new DeleteEnvironmentResponse({}));
  }

  async deleteEnvironment(name: string): Promise<DeleteEnvironmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEnvironmentWithOptions(name, headers, runtime);
  }

  async deletePipelineTemplateWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeletePipelineTemplateResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeletePipelineTemplate",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/pipelinetemplates/${OpenApiUtil.getEncodeParam(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeletePipelineTemplateResponse>(await this.callApi(params, req, runtime), new DeletePipelineTemplateResponse({}));
  }

  async deletePipelineTemplate(name: string): Promise<DeletePipelineTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePipelineTemplateWithOptions(name, headers, runtime);
  }

  async deleteTaskTemplateWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteTaskTemplateResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteTaskTemplate",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/tasktemplates/${OpenApiUtil.getEncodeParam(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteTaskTemplateResponse>(await this.callApi(params, req, runtime), new DeleteTaskTemplateResponse({}));
  }

  async deleteTaskTemplate(name: string): Promise<DeleteTaskTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTaskTemplateWithOptions(name, headers, runtime);
  }

  async deleteTemplateWithOptions(name: string, request: DeleteTemplateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteTemplateResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.version)) {
      query["version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTemplate",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/templates/${OpenApiUtil.getEncodeParam(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteTemplateResponse>(await this.callApi(params, req, runtime), new DeleteTemplateResponse({}));
  }

  async deleteTemplate(name: string, request: DeleteTemplateRequest): Promise<DeleteTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTemplateWithOptions(name, request, headers, runtime);
  }

  async getApplicationWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetApplicationResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetApplication",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/applications/${OpenApiUtil.getEncodeParam(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetApplicationResponse>(await this.callApi(params, req, runtime), new GetApplicationResponse({}));
  }

  async getApplication(name: string): Promise<GetApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getApplicationWithOptions(name, headers, runtime);
  }

  async getEnvironmentWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetEnvironmentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetEnvironment",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/environments/${OpenApiUtil.getEncodeParam(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetEnvironmentResponse>(await this.callApi(params, req, runtime), new GetEnvironmentResponse({}));
  }

  async getEnvironment(name: string): Promise<GetEnvironmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEnvironmentWithOptions(name, headers, runtime);
  }

  async getPipelineWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetPipelineResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetPipeline",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/pipelines/${OpenApiUtil.getEncodeParam(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetPipelineResponse>(await this.callApi(params, req, runtime), new GetPipelineResponse({}));
  }

  async getPipeline(name: string): Promise<GetPipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPipelineWithOptions(name, headers, runtime);
  }

  async getPipelineTemplateWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetPipelineTemplateResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetPipelineTemplate",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/pipelinetemplates/${OpenApiUtil.getEncodeParam(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetPipelineTemplateResponse>(await this.callApi(params, req, runtime), new GetPipelineTemplateResponse({}));
  }

  async getPipelineTemplate(name: string): Promise<GetPipelineTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPipelineTemplateWithOptions(name, headers, runtime);
  }

  async getReleaseWithOptions(appName: string, versionId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetReleaseResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetRelease",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/applications/${OpenApiUtil.getEncodeParam(appName)}/releases/${OpenApiUtil.getEncodeParam(versionId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetReleaseResponse>(await this.callApi(params, req, runtime), new GetReleaseResponse({}));
  }

  async getRelease(appName: string, versionId: string): Promise<GetReleaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getReleaseWithOptions(appName, versionId, headers, runtime);
  }

  async getServiceWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetService",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/services/${OpenApiUtil.getEncodeParam(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetServiceResponse>(await this.callApi(params, req, runtime), new GetServiceResponse({}));
  }

  async getService(name: string): Promise<GetServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceWithOptions(name, headers, runtime);
  }

  async getTaskWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTask",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/tasks/${OpenApiUtil.getEncodeParam(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTaskResponse>(await this.callApi(params, req, runtime), new GetTaskResponse({}));
  }

  async getTask(name: string): Promise<GetTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskWithOptions(name, headers, runtime);
  }

  async getTaskTemplateWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTaskTemplateResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTaskTemplate",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/tasktemplates/${OpenApiUtil.getEncodeParam(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTaskTemplateResponse>(await this.callApi(params, req, runtime), new GetTaskTemplateResponse({}));
  }

  async getTaskTemplate(name: string): Promise<GetTaskTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskTemplateWithOptions(name, headers, runtime);
  }

  async getTemplateWithOptions(name: string, request: GetTemplateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTemplateResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.version)) {
      query["version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTemplate",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/templates/${OpenApiUtil.getEncodeParam(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTemplateResponse>(await this.callApi(params, req, runtime), new GetTemplateResponse({}));
  }

  async getTemplate(name: string, request: GetTemplateRequest): Promise<GetTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTemplateWithOptions(name, request, headers, runtime);
  }

  async listEnvironmentRevisionsWithOptions(request: ListEnvironmentRevisionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListEnvironmentRevisionsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.environmentName)) {
      query["environmentName"] = request.environmentName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEnvironmentRevisions",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/environmentrevisions/`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<ListEnvironmentRevisionsResponse>(await this.callApi(params, req, runtime), new ListEnvironmentRevisionsResponse({}));
  }

  async listEnvironmentRevisions(request: ListEnvironmentRevisionsRequest): Promise<ListEnvironmentRevisionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEnvironmentRevisionsWithOptions(request, headers, runtime);
  }

  async listEnvironmentsWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListEnvironmentsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListEnvironments",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/environments/`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<ListEnvironmentsResponse>(await this.callApi(params, req, runtime), new ListEnvironmentsResponse({}));
  }

  async listEnvironments(): Promise<ListEnvironmentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEnvironmentsWithOptions(headers, runtime);
  }

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
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/pipelinetemplates`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<ListPipelineTemplatesResponse>(await this.callApi(params, req, runtime), new ListPipelineTemplatesResponse({}));
  }

  async listPipelineTemplates(request: ListPipelineTemplatesRequest): Promise<ListPipelineTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPipelineTemplatesWithOptions(request, headers, runtime);
  }

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
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/pipelines`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<ListPipelinesResponse>(await this.callApi(params, req, runtime), new ListPipelinesResponse({}));
  }

  async listPipelines(request: ListPipelinesRequest): Promise<ListPipelinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPipelinesWithOptions(request, headers, runtime);
  }

  async listServiceRevisionsWithOptions(request: ListServiceRevisionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListServiceRevisionsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serviceName)) {
      query["serviceName"] = request.serviceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListServiceRevisions",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/servicerevisions/`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<ListServiceRevisionsResponse>(await this.callApi(params, req, runtime), new ListServiceRevisionsResponse({}));
  }

  async listServiceRevisions(request: ListServiceRevisionsRequest): Promise<ListServiceRevisionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServiceRevisionsWithOptions(request, headers, runtime);
  }

  async listServicesWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListServicesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListServices",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/services/`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<ListServicesResponse>(await this.callApi(params, req, runtime), new ListServicesResponse({}));
  }

  async listServices(): Promise<ListServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServicesWithOptions(headers, runtime);
  }

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
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/tasktemplates`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<ListTaskTemplatesResponse>(await this.callApi(params, req, runtime), new ListTaskTemplatesResponse({}));
  }

  async listTaskTemplates(request: ListTaskTemplatesRequest): Promise<ListTaskTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTaskTemplatesWithOptions(request, headers, runtime);
  }

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
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<ListTasksResponse>(await this.callApi(params, req, runtime), new ListTasksResponse({}));
  }

  async listTasks(request: ListTasksRequest): Promise<ListTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTasksWithOptions(request, headers, runtime);
  }

  async listTemplateRevisionsWithOptions(request: ListTemplateRevisionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTemplateRevisionsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.templateName)) {
      query["templateName"] = request.templateName;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["templateVersion"] = request.templateVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTemplateRevisions",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/templaterevisions/`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<ListTemplateRevisionsResponse>(await this.callApi(params, req, runtime), new ListTemplateRevisionsResponse({}));
  }

  async listTemplateRevisions(request: ListTemplateRevisionsRequest): Promise<ListTemplateRevisionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTemplateRevisionsWithOptions(request, headers, runtime);
  }

  async listTemplatesWithOptions(request: ListTemplatesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTemplatesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTemplates",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/templates/`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<ListTemplatesResponse>(await this.callApi(params, req, runtime), new ListTemplatesResponse({}));
  }

  async listTemplates(request: ListTemplatesRequest): Promise<ListTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTemplatesWithOptions(request, headers, runtime);
  }

  async putEnvironmentWithOptions(name: string, request: PutEnvironmentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutEnvironmentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "PutEnvironment",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/environments/${OpenApiUtil.getEncodeParam(name)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PutEnvironmentResponse>(await this.callApi(params, req, runtime), new PutEnvironmentResponse({}));
  }

  async putEnvironment(name: string, request: PutEnvironmentRequest): Promise<PutEnvironmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putEnvironmentWithOptions(name, request, headers, runtime);
  }

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
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/pipelines/${OpenApiUtil.getEncodeParam(name)}/status`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PutPipelineStatusResponse>(await this.callApi(params, req, runtime), new PutPipelineStatusResponse({}));
  }

  async putPipelineStatus(name: string, request: PutPipelineStatusRequest): Promise<PutPipelineStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putPipelineStatusWithOptions(name, request, headers, runtime);
  }

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
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/pipelinetemplates/${OpenApiUtil.getEncodeParam(name)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PutPipelineTemplateResponse>(await this.callApi(params, req, runtime), new PutPipelineTemplateResponse({}));
  }

  async putPipelineTemplate(name: string, request: PutPipelineTemplateRequest): Promise<PutPipelineTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putPipelineTemplateWithOptions(name, request, headers, runtime);
  }

  async putServiceWithOptions(name: string, request: PutServiceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "PutService",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/services/${OpenApiUtil.getEncodeParam(name)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PutServiceResponse>(await this.callApi(params, req, runtime), new PutServiceResponse({}));
  }

  async putService(name: string, request: PutServiceRequest): Promise<PutServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putServiceWithOptions(name, request, headers, runtime);
  }

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
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/tasks/${OpenApiUtil.getEncodeParam(name)}/status`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PutTaskStatusResponse>(await this.callApi(params, req, runtime), new PutTaskStatusResponse({}));
  }

  async putTaskStatus(name: string, request: PutTaskStatusRequest): Promise<PutTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putTaskStatusWithOptions(name, request, headers, runtime);
  }

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
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/tasktemplates/${OpenApiUtil.getEncodeParam(name)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PutTaskTemplateResponse>(await this.callApi(params, req, runtime), new PutTaskTemplateResponse({}));
  }

  async putTaskTemplate(name: string, request: PutTaskTemplateRequest): Promise<PutTaskTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putTaskTemplateWithOptions(name, request, headers, runtime);
  }

  async putTemplateWithOptions(name: string, request: PutTemplateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutTemplateResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.version)) {
      query["version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "PutTemplate",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/templates/${OpenApiUtil.getEncodeParam(name)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PutTemplateResponse>(await this.callApi(params, req, runtime), new PutTemplateResponse({}));
  }

  async putTemplate(name: string, request: PutTemplateRequest): Promise<PutTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putTemplateWithOptions(name, request, headers, runtime);
  }

  async resumeTaskWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ResumeTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ResumeTask",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/tasks/${OpenApiUtil.getEncodeParam(name)}/resume`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ResumeTaskResponse>(await this.callApi(params, req, runtime), new ResumeTaskResponse({}));
  }

  async resumeTask(name: string): Promise<ResumeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeTaskWithOptions(name, headers, runtime);
  }

  async retryTaskWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RetryTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "RetryTask",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/tasks/${OpenApiUtil.getEncodeParam(name)}/retry`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RetryTaskResponse>(await this.callApi(params, req, runtime), new RetryTaskResponse({}));
  }

  async retryTask(name: string): Promise<RetryTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.retryTaskWithOptions(name, headers, runtime);
  }

  async startPipelineWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartPipelineResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StartPipeline",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/pipelines/${OpenApiUtil.getEncodeParam(name)}/start`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StartPipelineResponse>(await this.callApi(params, req, runtime), new StartPipelineResponse({}));
  }

  async startPipeline(name: string): Promise<StartPipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startPipelineWithOptions(name, headers, runtime);
  }

  async startTaskWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StartTask",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/tasks/${OpenApiUtil.getEncodeParam(name)}/start`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StartTaskResponse>(await this.callApi(params, req, runtime), new StartTaskResponse({}));
  }

  async startTask(name: string): Promise<StartTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startTaskWithOptions(name, headers, runtime);
  }

  async updateApplicationWithOptions(name: string, request: UpdateApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateApplicationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateApplication",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/applications/${OpenApiUtil.getEncodeParam(name)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateApplicationResponse>(await this.callApi(params, req, runtime), new UpdateApplicationResponse({}));
  }

  async updateApplication(name: string, request: UpdateApplicationRequest): Promise<UpdateApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateApplicationWithOptions(name, request, headers, runtime);
  }

}
