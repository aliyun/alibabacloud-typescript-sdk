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

  async createApplication(request: CreateApplicationRequest): Promise<CreateApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createApplicationWithOptions(request, headers, runtime);
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

    if (!Util.isUnset($tea.toMap(request.repoSource))) {
      body["repoSource"] = request.repoSource;
    }

    if (!Util.isUnset(request.roleArn)) {
      body["roleArn"] = request.roleArn;
    }

    if (!Util.isUnset(request.template)) {
      body["template"] = request.template;
    }

    if (!Util.isUnset($tea.toMap(request.trigger))) {
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

  async createRelease(appName: string, request: CreateReleaseRequest): Promise<CreateReleaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createReleaseWithOptions(appName, request, headers, runtime);
  }

  async createReleaseWithOptions(appName: string, request: CreateReleaseRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateReleaseResponse> {
    Util.validateModel(request);
    appName = OpenApiUtil.getEncodeParam(appName);
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
      pathname: `/apis/serverlessdeployment/v1/applications/${appName}/releases`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateReleaseResponse>(await this.callApi(params, req, runtime), new CreateReleaseResponse({}));
  }

  async deleteApplication(name: string): Promise<DeleteApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteApplicationWithOptions(name, headers, runtime);
  }

  async deleteApplicationWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteApplicationResponse> {
    name = OpenApiUtil.getEncodeParam(name);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteApplication",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/applications/${name}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    return $tea.cast<DeleteApplicationResponse>(await this.callApi(params, req, runtime), new DeleteApplicationResponse({}));
  }

  async deleteEnvironment(name: string): Promise<DeleteEnvironmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEnvironmentWithOptions(name, headers, runtime);
  }

  async deleteEnvironmentWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteEnvironmentResponse> {
    name = OpenApiUtil.getEncodeParam(name);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteEnvironment",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/environments/${name}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteEnvironmentResponse>(await this.callApi(params, req, runtime), new DeleteEnvironmentResponse({}));
  }

  async deleteTemplate(name: string, request: DeleteTemplateRequest): Promise<DeleteTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTemplateWithOptions(name, request, headers, runtime);
  }

  async deleteTemplateWithOptions(name: string, request: DeleteTemplateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteTemplateResponse> {
    Util.validateModel(request);
    name = OpenApiUtil.getEncodeParam(name);
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
      pathname: `/apis/serverlessdeployment/v1/templates/${name}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteTemplateResponse>(await this.callApi(params, req, runtime), new DeleteTemplateResponse({}));
  }

  async getApplication(name: string): Promise<GetApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getApplicationWithOptions(name, headers, runtime);
  }

  async getApplicationWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetApplicationResponse> {
    name = OpenApiUtil.getEncodeParam(name);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetApplication",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/applications/${name}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetApplicationResponse>(await this.callApi(params, req, runtime), new GetApplicationResponse({}));
  }

  async getEnvironment(name: string): Promise<GetEnvironmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEnvironmentWithOptions(name, headers, runtime);
  }

  async getEnvironmentWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetEnvironmentResponse> {
    name = OpenApiUtil.getEncodeParam(name);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetEnvironment",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/environments/${name}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetEnvironmentResponse>(await this.callApi(params, req, runtime), new GetEnvironmentResponse({}));
  }

  async getRelease(appName: string, versionId: string): Promise<GetReleaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getReleaseWithOptions(appName, versionId, headers, runtime);
  }

  async getReleaseWithOptions(appName: string, versionId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetReleaseResponse> {
    appName = OpenApiUtil.getEncodeParam(appName);
    versionId = OpenApiUtil.getEncodeParam(versionId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetRelease",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/applications/${appName}/releases/${versionId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetReleaseResponse>(await this.callApi(params, req, runtime), new GetReleaseResponse({}));
  }

  async getService(name: string): Promise<GetServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceWithOptions(name, headers, runtime);
  }

  async getServiceWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetServiceResponse> {
    name = OpenApiUtil.getEncodeParam(name);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetService",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/services/${name}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetServiceResponse>(await this.callApi(params, req, runtime), new GetServiceResponse({}));
  }

  async getTemplate(name: string, request: GetTemplateRequest): Promise<GetTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTemplateWithOptions(name, request, headers, runtime);
  }

  async getTemplateWithOptions(name: string, request: GetTemplateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTemplateResponse> {
    Util.validateModel(request);
    name = OpenApiUtil.getEncodeParam(name);
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
      pathname: `/apis/serverlessdeployment/v1/templates/${name}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTemplateResponse>(await this.callApi(params, req, runtime), new GetTemplateResponse({}));
  }

  async listEnvironmentRevisions(request: ListEnvironmentRevisionsRequest): Promise<ListEnvironmentRevisionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEnvironmentRevisionsWithOptions(request, headers, runtime);
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

  async listEnvironments(): Promise<ListEnvironmentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEnvironmentsWithOptions(headers, runtime);
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

  async listServiceRevisions(request: ListServiceRevisionsRequest): Promise<ListServiceRevisionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServiceRevisionsWithOptions(request, headers, runtime);
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

  async listServices(): Promise<ListServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServicesWithOptions(headers, runtime);
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

  async listTemplateRevisions(request: ListTemplateRevisionsRequest): Promise<ListTemplateRevisionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTemplateRevisionsWithOptions(request, headers, runtime);
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

  async listTemplates(request: ListTemplatesRequest): Promise<ListTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTemplatesWithOptions(request, headers, runtime);
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

  async putEnvironment(name: string, request: PutEnvironmentRequest): Promise<PutEnvironmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putEnvironmentWithOptions(name, request, headers, runtime);
  }

  async putEnvironmentWithOptions(name: string, request: PutEnvironmentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutEnvironmentResponse> {
    Util.validateModel(request);
    name = OpenApiUtil.getEncodeParam(name);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap($tea.toMap(request.body)),
    });
    let params = new $OpenApi.Params({
      action: "PutEnvironment",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/environments/${name}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PutEnvironmentResponse>(await this.callApi(params, req, runtime), new PutEnvironmentResponse({}));
  }

  async putService(name: string, request: PutServiceRequest): Promise<PutServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putServiceWithOptions(name, request, headers, runtime);
  }

  async putServiceWithOptions(name: string, request: PutServiceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutServiceResponse> {
    Util.validateModel(request);
    name = OpenApiUtil.getEncodeParam(name);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap($tea.toMap(request.body)),
    });
    let params = new $OpenApi.Params({
      action: "PutService",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/services/${name}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PutServiceResponse>(await this.callApi(params, req, runtime), new PutServiceResponse({}));
  }

  async putTemplate(name: string, request: PutTemplateRequest): Promise<PutTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putTemplateWithOptions(name, request, headers, runtime);
  }

  async putTemplateWithOptions(name: string, request: PutTemplateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutTemplateResponse> {
    Util.validateModel(request);
    name = OpenApiUtil.getEncodeParam(name);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.version)) {
      query["version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap($tea.toMap(request.body)),
    });
    let params = new $OpenApi.Params({
      action: "PutTemplate",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/templates/${name}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PutTemplateResponse>(await this.callApi(params, req, runtime), new PutTemplateResponse({}));
  }

  async updateApplication(name: string, request: UpdateApplicationRequest): Promise<UpdateApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateApplicationWithOptions(name, request, headers, runtime);
  }

  async updateApplicationWithOptions(name: string, request: UpdateApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateApplicationResponse> {
    Util.validateModel(request);
    name = OpenApiUtil.getEncodeParam(name);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap($tea.toMap(request.body)),
    });
    let params = new $OpenApi.Params({
      action: "UpdateApplication",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/applications/${name}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateApplicationResponse>(await this.callApi(params, req, runtime), new UpdateApplicationResponse({}));
  }

}
