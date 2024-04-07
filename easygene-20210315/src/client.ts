// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AbortRunRequest extends $tea.Model {
  runId?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      runId: 'RunId',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runId: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortRunResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortRunResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AbortRunResponseBody;
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
      body: AbortRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortSubmissionRequest extends $tea.Model {
  submissionId?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      submissionId: 'SubmissionId',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      submissionId: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortSubmissionResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortSubmissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AbortSubmissionResponseBody;
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
      body: AbortSubmissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyPublicEntityRequest extends $tea.Model {
  dataset?: string;
  entityType?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      dataset: 'Dataset',
      entityType: 'EntityType',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataset: 'string',
      entityType: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyPublicEntityResponseBody extends $tea.Model {
  entityType?: string;
  hostId?: string;
  requestId?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      entityType: 'EntityType',
      hostId: 'HostId',
      requestId: 'RequestId',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityType: 'string',
      hostId: 'string',
      requestId: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyPublicEntityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CopyPublicEntityResponseBody;
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
      body: CopyPublicEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequest extends $tea.Model {
  appName?: string;
  appType?: string;
  clientToken?: string;
  configs?: CreateAppRequestConfigs[];
  definition?: string;
  dependencies?: CreateAppRequestDependencies[];
  description?: string;
  documentation?: string;
  labels?: string;
  language?: string;
  languageVersion?: string;
  path?: string;
  revisionComment?: string;
  revisionTag?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appType: 'AppType',
      clientToken: 'ClientToken',
      configs: 'Configs',
      definition: 'Definition',
      dependencies: 'Dependencies',
      description: 'Description',
      documentation: 'Documentation',
      labels: 'Labels',
      language: 'Language',
      languageVersion: 'LanguageVersion',
      path: 'Path',
      revisionComment: 'RevisionComment',
      revisionTag: 'RevisionTag',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appType: 'string',
      clientToken: 'string',
      configs: { 'type': 'array', 'itemType': CreateAppRequestConfigs },
      definition: 'string',
      dependencies: { 'type': 'array', 'itemType': CreateAppRequestDependencies },
      description: 'string',
      documentation: 'string',
      labels: 'string',
      language: 'string',
      languageVersion: 'string',
      path: 'string',
      revisionComment: 'string',
      revisionTag: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppShrinkRequest extends $tea.Model {
  appName?: string;
  appType?: string;
  clientToken?: string;
  configsShrink?: string;
  definition?: string;
  dependenciesShrink?: string;
  description?: string;
  documentation?: string;
  labels?: string;
  language?: string;
  languageVersion?: string;
  path?: string;
  revisionComment?: string;
  revisionTag?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appType: 'AppType',
      clientToken: 'ClientToken',
      configsShrink: 'Configs',
      definition: 'Definition',
      dependenciesShrink: 'Dependencies',
      description: 'Description',
      documentation: 'Documentation',
      labels: 'Labels',
      language: 'Language',
      languageVersion: 'LanguageVersion',
      path: 'Path',
      revisionComment: 'RevisionComment',
      revisionTag: 'RevisionTag',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appType: 'string',
      clientToken: 'string',
      configsShrink: 'string',
      definition: 'string',
      dependenciesShrink: 'string',
      description: 'string',
      documentation: 'string',
      labels: 'string',
      language: 'string',
      languageVersion: 'string',
      path: 'string',
      revisionComment: 'string',
      revisionTag: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBody extends $tea.Model {
  appName?: string;
  hostId?: string;
  requestId?: string;
  revision?: string;
  revisionTag?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      hostId: 'HostId',
      requestId: 'RequestId',
      revision: 'Revision',
      revisionTag: 'RevisionTag',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      hostId: 'string',
      requestId: 'string',
      revision: 'string',
      revisionTag: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAppResponseBody;
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
      body: CreateAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEntityRequest extends $tea.Model {
  clientToken?: string;
  entityItems?: CreateEntityRequestEntityItems[];
  entityType?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      entityItems: 'EntityItems',
      entityType: 'EntityType',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      entityItems: { 'type': 'array', 'itemType': CreateEntityRequestEntityItems },
      entityType: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEntityShrinkRequest extends $tea.Model {
  clientToken?: string;
  entityItemsShrink?: string;
  entityType?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      entityItemsShrink: 'EntityItems',
      entityType: 'EntityType',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      entityItemsShrink: 'string',
      entityType: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEntityResponseBody extends $tea.Model {
  entityType?: string;
  hostId?: string;
  requestId?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      entityType: 'EntityType',
      hostId: 'HostId',
      requestId: 'RequestId',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityType: 'string',
      hostId: 'string',
      requestId: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEntityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateEntityResponseBody;
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
      body: CreateEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRunRequest extends $tea.Model {
  appName?: string;
  appRevision?: string;
  clientToken?: string;
  defaultRuntime?: string;
  description?: string;
  executeDirectory?: string;
  executeOptions?: CreateRunRequestExecuteOptions;
  inputs?: string;
  labels?: string;
  outputFolder?: string;
  revisionTag?: string;
  role?: string;
  runName?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appRevision: 'AppRevision',
      clientToken: 'ClientToken',
      defaultRuntime: 'DefaultRuntime',
      description: 'Description',
      executeDirectory: 'ExecuteDirectory',
      executeOptions: 'ExecuteOptions',
      inputs: 'Inputs',
      labels: 'Labels',
      outputFolder: 'OutputFolder',
      revisionTag: 'RevisionTag',
      role: 'Role',
      runName: 'RunName',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appRevision: 'string',
      clientToken: 'string',
      defaultRuntime: 'string',
      description: 'string',
      executeDirectory: 'string',
      executeOptions: CreateRunRequestExecuteOptions,
      inputs: 'string',
      labels: 'string',
      outputFolder: 'string',
      revisionTag: 'string',
      role: 'string',
      runName: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRunShrinkRequest extends $tea.Model {
  appName?: string;
  appRevision?: string;
  clientToken?: string;
  defaultRuntime?: string;
  description?: string;
  executeDirectory?: string;
  executeOptionsShrink?: string;
  inputs?: string;
  labels?: string;
  outputFolder?: string;
  revisionTag?: string;
  role?: string;
  runName?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appRevision: 'AppRevision',
      clientToken: 'ClientToken',
      defaultRuntime: 'DefaultRuntime',
      description: 'Description',
      executeDirectory: 'ExecuteDirectory',
      executeOptionsShrink: 'ExecuteOptions',
      inputs: 'Inputs',
      labels: 'Labels',
      outputFolder: 'OutputFolder',
      revisionTag: 'RevisionTag',
      role: 'Role',
      runName: 'RunName',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appRevision: 'string',
      clientToken: 'string',
      defaultRuntime: 'string',
      description: 'string',
      executeDirectory: 'string',
      executeOptionsShrink: 'string',
      inputs: 'string',
      labels: 'string',
      outputFolder: 'string',
      revisionTag: 'string',
      role: 'string',
      runName: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRunResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  runId?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
      runId: 'RunId',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
      runId: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRunResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRunResponseBody;
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
      body: CreateRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubmissionRequest extends $tea.Model {
  appName?: string;
  clientToken?: string;
  defaultRuntime?: string;
  entityNames?: string[];
  entityType?: string;
  executeDirectory?: string;
  executeOptions?: string;
  inputs?: string;
  outputFolder?: string;
  outputs?: string;
  revision?: string;
  revisionTag?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clientToken: 'ClientToken',
      defaultRuntime: 'DefaultRuntime',
      entityNames: 'EntityNames',
      entityType: 'EntityType',
      executeDirectory: 'ExecuteDirectory',
      executeOptions: 'ExecuteOptions',
      inputs: 'Inputs',
      outputFolder: 'OutputFolder',
      outputs: 'Outputs',
      revision: 'Revision',
      revisionTag: 'RevisionTag',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clientToken: 'string',
      defaultRuntime: 'string',
      entityNames: { 'type': 'array', 'itemType': 'string' },
      entityType: 'string',
      executeDirectory: 'string',
      executeOptions: 'string',
      inputs: 'string',
      outputFolder: 'string',
      outputs: 'string',
      revision: 'string',
      revisionTag: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubmissionShrinkRequest extends $tea.Model {
  appName?: string;
  clientToken?: string;
  defaultRuntime?: string;
  entityNamesShrink?: string;
  entityType?: string;
  executeDirectory?: string;
  executeOptions?: string;
  inputs?: string;
  outputFolder?: string;
  outputs?: string;
  revision?: string;
  revisionTag?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clientToken: 'ClientToken',
      defaultRuntime: 'DefaultRuntime',
      entityNamesShrink: 'EntityNames',
      entityType: 'EntityType',
      executeDirectory: 'ExecuteDirectory',
      executeOptions: 'ExecuteOptions',
      inputs: 'Inputs',
      outputFolder: 'OutputFolder',
      outputs: 'Outputs',
      revision: 'Revision',
      revisionTag: 'RevisionTag',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clientToken: 'string',
      defaultRuntime: 'string',
      entityNamesShrink: 'string',
      entityType: 'string',
      executeDirectory: 'string',
      executeOptions: 'string',
      inputs: 'string',
      outputFolder: 'string',
      outputs: 'string',
      revision: 'string',
      revisionTag: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubmissionResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  submissionId?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
      submissionId: 'SubmissionId',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
      submissionId: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubmissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSubmissionResponseBody;
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
      body: CreateSubmissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateRequest extends $tea.Model {
  appName?: string;
  appRevision?: string;
  clientToken?: string;
  description?: string;
  inputsExpression?: CreateTemplateRequestInputsExpression[];
  labels?: string;
  outputsExpression?: CreateTemplateRequestOutputsExpression[];
  revisionTag?: string;
  rootEntity?: string;
  templateName?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appRevision: 'AppRevision',
      clientToken: 'ClientToken',
      description: 'Description',
      inputsExpression: 'InputsExpression',
      labels: 'Labels',
      outputsExpression: 'OutputsExpression',
      revisionTag: 'RevisionTag',
      rootEntity: 'RootEntity',
      templateName: 'TemplateName',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appRevision: 'string',
      clientToken: 'string',
      description: 'string',
      inputsExpression: { 'type': 'array', 'itemType': CreateTemplateRequestInputsExpression },
      labels: 'string',
      outputsExpression: { 'type': 'array', 'itemType': CreateTemplateRequestOutputsExpression },
      revisionTag: 'string',
      rootEntity: 'string',
      templateName: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateShrinkRequest extends $tea.Model {
  appName?: string;
  appRevision?: string;
  clientToken?: string;
  description?: string;
  inputsExpressionShrink?: string;
  labels?: string;
  outputsExpressionShrink?: string;
  revisionTag?: string;
  rootEntity?: string;
  templateName?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appRevision: 'AppRevision',
      clientToken: 'ClientToken',
      description: 'Description',
      inputsExpressionShrink: 'InputsExpression',
      labels: 'Labels',
      outputsExpressionShrink: 'OutputsExpression',
      revisionTag: 'RevisionTag',
      rootEntity: 'RootEntity',
      templateName: 'TemplateName',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appRevision: 'string',
      clientToken: 'string',
      description: 'string',
      inputsExpressionShrink: 'string',
      labels: 'string',
      outputsExpressionShrink: 'string',
      revisionTag: 'string',
      rootEntity: 'string',
      templateName: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  templateName?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
      templateName: 'TemplateName',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
      templateName: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTemplateResponseBody;
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
      body: CreateTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  jobLifecycle?: number;
  labels?: string;
  role?: string;
  storage?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      jobLifecycle: 'JobLifecycle',
      labels: 'Labels',
      role: 'Role',
      storage: 'Storage',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      jobLifecycle: 'number',
      labels: 'string',
      role: 'string',
      storage: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateWorkspaceResponseBody;
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

export class DeleteAppRequest extends $tea.Model {
  appName?: string;
  revision?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      revision: 'Revision',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      revision: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAppResponseBody;
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
      body: DeleteAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEntityRequest extends $tea.Model {
  entityType?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      entityType: 'EntityType',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityType: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEntityResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEntityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteEntityResponseBody;
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
      body: DeleteEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEntityItemsRequest extends $tea.Model {
  entityNames?: string[];
  entityType?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      entityNames: 'EntityNames',
      entityType: 'EntityType',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityNames: { 'type': 'array', 'itemType': 'string' },
      entityType: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEntityItemsShrinkRequest extends $tea.Model {
  entityNamesShrink?: string;
  entityType?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      entityNamesShrink: 'EntityNames',
      entityType: 'EntityType',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityNamesShrink: 'string',
      entityType: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEntityItemsResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEntityItemsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteEntityItemsResponseBody;
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
      body: DeleteEntityItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRunRequest extends $tea.Model {
  runId?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      runId: 'RunId',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runId: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRunResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRunResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRunResponseBody;
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
      body: DeleteRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubmissionRequest extends $tea.Model {
  submissionId?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      submissionId: 'SubmissionId',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      submissionId: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubmissionResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubmissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSubmissionResponseBody;
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
      body: DeleteSubmissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateRequest extends $tea.Model {
  templateName?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      templateName: 'TemplateName',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateName: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTemplateResponseBody;
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
      body: DeleteTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkspaceRequest extends $tea.Model {
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkspaceResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkspaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteWorkspaceResponseBody;
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
      body: DeleteWorkspaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadEntityRequest extends $tea.Model {
  entityNames?: string[];
  entityType?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      entityNames: 'EntityNames',
      entityType: 'EntityType',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityNames: { 'type': 'array', 'itemType': 'string' },
      entityType: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadEntityShrinkRequest extends $tea.Model {
  entityNamesShrink?: string;
  entityType?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      entityNamesShrink: 'EntityNames',
      entityType: 'EntityType',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityNamesShrink: 'string',
      entityType: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadEntityResponseBody extends $tea.Model {
  entityCSVFile?: string;
  hostId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entityCSVFile: 'EntityCSVFile',
      hostId: 'HostId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityCSVFile: 'string',
      hostId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadEntityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DownloadEntityResponseBody;
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
      body: DownloadEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppRequest extends $tea.Model {
  appName?: string;
  revision?: string;
  revisionTag?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      revision: 'Revision',
      revisionTag: 'RevisionTag',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      revision: 'string',
      revisionTag: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBody extends $tea.Model {
  appName?: string;
  appType?: string;
  configs?: GetAppResponseBodyConfigs[];
  createTime?: string;
  definition?: string;
  dependencies?: GetAppResponseBodyDependencies[];
  description?: string;
  documentation?: string;
  hostId?: string;
  inputs?: GetAppResponseBodyInputs[];
  labels?: { [key: string]: string };
  language?: string;
  languageVersion?: string;
  lastModifiedTime?: string;
  outputs?: GetAppResponseBodyOutputs[];
  path?: string;
  requestId?: string;
  revision?: string;
  revisionComment?: string;
  revisionTag?: string;
  revisions?: GetAppResponseBodyRevisions[];
  scope?: string;
  source?: string;
  URL?: string;
  workflowName?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appType: 'AppType',
      configs: 'Configs',
      createTime: 'CreateTime',
      definition: 'Definition',
      dependencies: 'Dependencies',
      description: 'Description',
      documentation: 'Documentation',
      hostId: 'HostId',
      inputs: 'Inputs',
      labels: 'Labels',
      language: 'Language',
      languageVersion: 'LanguageVersion',
      lastModifiedTime: 'LastModifiedTime',
      outputs: 'Outputs',
      path: 'Path',
      requestId: 'RequestId',
      revision: 'Revision',
      revisionComment: 'RevisionComment',
      revisionTag: 'RevisionTag',
      revisions: 'Revisions',
      scope: 'Scope',
      source: 'Source',
      URL: 'URL',
      workflowName: 'WorkflowName',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appType: 'string',
      configs: { 'type': 'array', 'itemType': GetAppResponseBodyConfigs },
      createTime: 'string',
      definition: 'string',
      dependencies: { 'type': 'array', 'itemType': GetAppResponseBodyDependencies },
      description: 'string',
      documentation: 'string',
      hostId: 'string',
      inputs: { 'type': 'array', 'itemType': GetAppResponseBodyInputs },
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      language: 'string',
      languageVersion: 'string',
      lastModifiedTime: 'string',
      outputs: { 'type': 'array', 'itemType': GetAppResponseBodyOutputs },
      path: 'string',
      requestId: 'string',
      revision: 'string',
      revisionComment: 'string',
      revisionTag: 'string',
      revisions: { 'type': 'array', 'itemType': GetAppResponseBodyRevisions },
      scope: 'string',
      source: 'string',
      URL: 'string',
      workflowName: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAppResponseBody;
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
      body: GetAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEntityRequest extends $tea.Model {
  entityType?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      entityType: 'EntityType',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityType: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEntityResponseBody extends $tea.Model {
  attributes?: string[];
  entityType?: string;
  hostId?: string;
  requestId?: string;
  totalCount?: number;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      entityType: 'EntityType',
      hostId: 'HostId',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': 'string' },
      entityType: 'string',
      hostId: 'string',
      requestId: 'string',
      totalCount: 'number',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEntityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEntityResponseBody;
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
      body: GetEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGlobalAppRequest extends $tea.Model {
  appName?: string;
  appVersion?: string;
  attributes?: string[];
  location?: string;
  namespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appVersion: 'AppVersion',
      attributes: 'Attributes',
      location: 'Location',
      namespaceName: 'NamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appVersion: 'string',
      attributes: { 'type': 'array', 'itemType': 'string' },
      location: 'string',
      namespaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGlobalAppShrinkRequest extends $tea.Model {
  appName?: string;
  appVersion?: string;
  attributesShrink?: string;
  location?: string;
  namespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appVersion: 'AppVersion',
      attributesShrink: 'Attributes',
      location: 'Location',
      namespaceName: 'NamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appVersion: 'string',
      attributesShrink: 'string',
      location: 'string',
      namespaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGlobalAppResponseBody extends $tea.Model {
  appDefaultVersion?: string;
  appDescription?: string;
  appDescriptorFiles?: GetGlobalAppResponseBodyAppDescriptorFiles[];
  appDescriptorType?: string;
  appFee?: string;
  appName?: string;
  appScope?: string;
  appType?: string;
  appVersion?: string;
  appVersions?: GetGlobalAppResponseBodyAppVersions[];
  categories?: string[];
  comment?: string;
  contact?: string;
  DAG?: string;
  document?: string;
  hostId?: string;
  lastModified?: string;
  links?: string[];
  locations?: string[];
  namespaceName?: string;
  pinned?: boolean;
  requestId?: string;
  toolkit?: string;
  static names(): { [key: string]: string } {
    return {
      appDefaultVersion: 'AppDefaultVersion',
      appDescription: 'AppDescription',
      appDescriptorFiles: 'AppDescriptorFiles',
      appDescriptorType: 'AppDescriptorType',
      appFee: 'AppFee',
      appName: 'AppName',
      appScope: 'AppScope',
      appType: 'AppType',
      appVersion: 'AppVersion',
      appVersions: 'AppVersions',
      categories: 'Categories',
      comment: 'Comment',
      contact: 'Contact',
      DAG: 'DAG',
      document: 'Document',
      hostId: 'HostId',
      lastModified: 'LastModified',
      links: 'Links',
      locations: 'Locations',
      namespaceName: 'NamespaceName',
      pinned: 'Pinned',
      requestId: 'RequestId',
      toolkit: 'Toolkit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDefaultVersion: 'string',
      appDescription: 'string',
      appDescriptorFiles: { 'type': 'array', 'itemType': GetGlobalAppResponseBodyAppDescriptorFiles },
      appDescriptorType: 'string',
      appFee: 'string',
      appName: 'string',
      appScope: 'string',
      appType: 'string',
      appVersion: 'string',
      appVersions: { 'type': 'array', 'itemType': GetGlobalAppResponseBodyAppVersions },
      categories: { 'type': 'array', 'itemType': 'string' },
      comment: 'string',
      contact: 'string',
      DAG: 'string',
      document: 'string',
      hostId: 'string',
      lastModified: 'string',
      links: { 'type': 'array', 'itemType': 'string' },
      locations: { 'type': 'array', 'itemType': 'string' },
      namespaceName: 'string',
      pinned: 'boolean',
      requestId: 'string',
      toolkit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGlobalAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetGlobalAppResponseBody;
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
      body: GetGlobalAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicDatasetRequest extends $tea.Model {
  attributes?: string[];
  datasetName?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      datasetName: 'DatasetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': 'string' },
      datasetName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicDatasetShrinkRequest extends $tea.Model {
  attributesShrink?: string;
  datasetName?: string;
  static names(): { [key: string]: string } {
    return {
      attributesShrink: 'Attributes',
      datasetName: 'DatasetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributesShrink: 'string',
      datasetName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicDatasetResponseBody extends $tea.Model {
  about?: string;
  accessRequirements?: string;
  copyright?: string;
  datasetDescription?: string;
  datasetName?: string;
  hostId?: string;
  lastModified?: string;
  locations?: string[];
  requestId?: string;
  tags?: string[];
  updateFrequency?: string;
  static names(): { [key: string]: string } {
    return {
      about: 'About',
      accessRequirements: 'AccessRequirements',
      copyright: 'Copyright',
      datasetDescription: 'DatasetDescription',
      datasetName: 'DatasetName',
      hostId: 'HostId',
      lastModified: 'LastModified',
      locations: 'Locations',
      requestId: 'RequestId',
      tags: 'Tags',
      updateFrequency: 'UpdateFrequency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      about: 'string',
      accessRequirements: 'string',
      copyright: 'string',
      datasetDescription: 'string',
      datasetName: 'string',
      hostId: 'string',
      lastModified: 'string',
      locations: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      updateFrequency: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicDatasetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPublicDatasetResponseBody;
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
      body: GetPublicDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicDatasetEntityRequest extends $tea.Model {
  datasetName?: string;
  entityType?: string;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      entityType: 'EntityType',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      entityType: 'string',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicDatasetEntityResponseBody extends $tea.Model {
  attributes?: string[];
  datasetName?: string;
  entityType?: string;
  hostId?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      datasetName: 'DatasetName',
      entityType: 'EntityType',
      hostId: 'HostId',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': 'string' },
      datasetName: 'string',
      entityType: 'string',
      hostId: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicDatasetEntityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPublicDatasetEntityResponseBody;
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
      body: GetPublicDatasetEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunRequest extends $tea.Model {
  runId?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      runId: 'RunId',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runId: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunResponseBody extends $tea.Model {
  appName?: string;
  appRevision?: string;
  billingInstanceIds?: string[];
  calls?: string;
  createTime?: string;
  defaultRuntime?: string;
  description?: string;
  endTime?: string;
  entityName?: string;
  entityType?: string;
  executeDirectory?: string;
  executeOptions?: GetRunResponseBodyExecuteOptions;
  failures?: string;
  hostId?: string;
  inputs?: string;
  labels?: { [key: string]: string };
  outputFolder?: string;
  outputs?: string;
  requestId?: string;
  runId?: string;
  runName?: string;
  source?: string;
  startTime?: string;
  status?: string;
  submissionId?: string;
  timing?: string;
  user?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appRevision: 'AppRevision',
      billingInstanceIds: 'BillingInstanceIds',
      calls: 'Calls',
      createTime: 'CreateTime',
      defaultRuntime: 'DefaultRuntime',
      description: 'Description',
      endTime: 'EndTime',
      entityName: 'EntityName',
      entityType: 'EntityType',
      executeDirectory: 'ExecuteDirectory',
      executeOptions: 'ExecuteOptions',
      failures: 'Failures',
      hostId: 'HostId',
      inputs: 'Inputs',
      labels: 'Labels',
      outputFolder: 'OutputFolder',
      outputs: 'Outputs',
      requestId: 'RequestId',
      runId: 'RunId',
      runName: 'RunName',
      source: 'Source',
      startTime: 'StartTime',
      status: 'Status',
      submissionId: 'SubmissionId',
      timing: 'Timing',
      user: 'User',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appRevision: 'string',
      billingInstanceIds: { 'type': 'array', 'itemType': 'string' },
      calls: 'string',
      createTime: 'string',
      defaultRuntime: 'string',
      description: 'string',
      endTime: 'string',
      entityName: 'string',
      entityType: 'string',
      executeDirectory: 'string',
      executeOptions: GetRunResponseBodyExecuteOptions,
      failures: 'string',
      hostId: 'string',
      inputs: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      outputFolder: 'string',
      outputs: 'string',
      requestId: 'string',
      runId: 'string',
      runName: 'string',
      source: 'string',
      startTime: 'string',
      status: 'string',
      submissionId: 'string',
      timing: 'string',
      user: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRunResponseBody;
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
      body: GetRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubmissionRequest extends $tea.Model {
  submissionId?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      submissionId: 'SubmissionId',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      submissionId: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubmissionResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  submission?: GetSubmissionResponseBodySubmission;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
      submission: 'Submission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
      submission: GetSubmissionResponseBodySubmission,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubmissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSubmissionResponseBody;
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
      body: GetSubmissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateRequest extends $tea.Model {
  templateName?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      templateName: 'TemplateName',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateName: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBody extends $tea.Model {
  appName?: string;
  appRevision?: string;
  createTime?: string;
  description?: string;
  hostId?: string;
  inputsExpression?: GetTemplateResponseBodyInputsExpression[];
  labels?: { [key: string]: string };
  lastModifiedTime?: string;
  outputsExpression?: GetTemplateResponseBodyOutputsExpression[];
  requestId?: string;
  revisionTag?: string;
  rootEntity?: string;
  source?: string;
  templateName?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appRevision: 'AppRevision',
      createTime: 'CreateTime',
      description: 'Description',
      hostId: 'HostId',
      inputsExpression: 'InputsExpression',
      labels: 'Labels',
      lastModifiedTime: 'LastModifiedTime',
      outputsExpression: 'OutputsExpression',
      requestId: 'RequestId',
      revisionTag: 'RevisionTag',
      rootEntity: 'RootEntity',
      source: 'Source',
      templateName: 'TemplateName',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appRevision: 'string',
      createTime: 'string',
      description: 'string',
      hostId: 'string',
      inputsExpression: { 'type': 'array', 'itemType': GetTemplateResponseBodyInputsExpression },
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      lastModifiedTime: 'string',
      outputsExpression: { 'type': 'array', 'itemType': GetTemplateResponseBodyOutputsExpression },
      requestId: 'string',
      revisionTag: 'string',
      rootEntity: 'string',
      source: 'string',
      templateName: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTemplateResponseBody;
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
      body: GetTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkspaceRequest extends $tea.Model {
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkspaceResponseBody extends $tea.Model {
  bucketName?: string;
  createTime?: string;
  description?: string;
  hostId?: string;
  jobLifecycle?: number;
  labels?: { [key: string]: string };
  lastModifiedTime?: string;
  location?: string;
  requestId?: string;
  role?: string;
  status?: string;
  storage?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      createTime: 'CreateTime',
      description: 'Description',
      hostId: 'HostId',
      jobLifecycle: 'JobLifecycle',
      labels: 'Labels',
      lastModifiedTime: 'LastModifiedTime',
      location: 'Location',
      requestId: 'RequestId',
      role: 'Role',
      status: 'Status',
      storage: 'Storage',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      createTime: 'string',
      description: 'string',
      hostId: 'string',
      jobLifecycle: 'number',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      lastModifiedTime: 'string',
      location: 'string',
      requestId: 'string',
      role: 'string',
      status: 'string',
      storage: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkspaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWorkspaceResponseBody;
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
      body: GetWorkspaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportAppRequest extends $tea.Model {
  appName?: string;
  source?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      source: 'Source',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      source: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportAppResponseBody extends $tea.Model {
  appName?: string;
  hostId?: string;
  regionId?: string;
  requestId?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      hostId: 'HostId',
      regionId: 'RegionId',
      requestId: 'RequestId',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      hostId: 'string',
      regionId: 'string',
      requestId: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImportAppResponseBody;
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
      body: ImportAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallGlobalAppRequest extends $tea.Model {
  appName?: string;
  installedAppName?: string;
  namespaceName?: string;
  source?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      installedAppName: 'InstalledAppName',
      namespaceName: 'NamespaceName',
      source: 'Source',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      installedAppName: 'string',
      namespaceName: 'string',
      source: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallGlobalAppResponseBody extends $tea.Model {
  hostId?: string;
  installedAppName?: string;
  regionId?: string;
  requestId?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      installedAppName: 'InstalledAppName',
      regionId: 'RegionId',
      requestId: 'RequestId',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      installedAppName: 'string',
      regionId: 'string',
      requestId: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallGlobalAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InstallGlobalAppResponseBody;
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
      body: InstallGlobalAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsRequest extends $tea.Model {
  appType?: string;
  isReversed?: boolean;
  labelSelector?: string;
  language?: string;
  maxResults?: number;
  nextToken?: string;
  orderBy?: string;
  scope?: string;
  search?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      isReversed: 'IsReversed',
      labelSelector: 'LabelSelector',
      language: 'Language',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      scope: 'Scope',
      search: 'Search',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      isReversed: 'boolean',
      labelSelector: 'string',
      language: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      scope: 'string',
      search: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBody extends $tea.Model {
  apps?: ListAppsResponseBodyApps[];
  hostId?: string;
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apps: 'Apps',
      hostId: 'HostId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apps: { 'type': 'array', 'itemType': ListAppsResponseBodyApps },
      hostId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAppsResponseBody;
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
      body: ListAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizedSoftwareRequest extends $tea.Model {
  isReversed?: boolean;
  location?: string;
  maxResults?: number;
  nextToken?: string;
  orderBy?: string;
  search?: string;
  static names(): { [key: string]: string } {
    return {
      isReversed: 'IsReversed',
      location: 'Location',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      search: 'Search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isReversed: 'boolean',
      location: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      search: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizedSoftwareResponseBody extends $tea.Model {
  hostId?: string;
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  softwares?: ListAuthorizedSoftwareResponseBodySoftwares[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      softwares: 'Softwares',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      softwares: { 'type': 'array', 'itemType': ListAuthorizedSoftwareResponseBodySoftwares },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizedSoftwareResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAuthorizedSoftwareResponseBody;
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
      body: ListAuthorizedSoftwareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContainerImagesRequest extends $tea.Model {
  location?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContainerImagesResponseBody extends $tea.Model {
  containerImages?: ListContainerImagesResponseBodyContainerImages[];
  hostId?: string;
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      containerImages: 'ContainerImages',
      hostId: 'HostId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerImages: { 'type': 'array', 'itemType': ListContainerImagesResponseBodyContainerImages },
      hostId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContainerImagesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListContainerImagesResponseBody;
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
      body: ListContainerImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntitiesRequest extends $tea.Model {
  isReversed?: boolean;
  maxResults?: number;
  nextToken?: string;
  orderBy?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      isReversed: 'IsReversed',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isReversed: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntitiesResponseBody extends $tea.Model {
  entities?: ListEntitiesResponseBodyEntities[];
  hostId?: string;
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      entities: 'Entities',
      hostId: 'HostId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entities: { 'type': 'array', 'itemType': ListEntitiesResponseBodyEntities },
      hostId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntitiesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEntitiesResponseBody;
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
      body: ListEntitiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntityItemsRequest extends $tea.Model {
  entityType?: string;
  isReversed?: boolean;
  maxResults?: number;
  nextToken?: string;
  orderBy?: string;
  search?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      entityType: 'EntityType',
      isReversed: 'IsReversed',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      search: 'Search',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityType: 'string',
      isReversed: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      search: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntityItemsResponseBody extends $tea.Model {
  entityItems?: ListEntityItemsResponseBodyEntityItems[];
  hostId?: string;
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      entityItems: 'EntityItems',
      hostId: 'HostId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityItems: { 'type': 'array', 'itemType': ListEntityItemsResponseBodyEntityItems },
      hostId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntityItemsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEntityItemsResponseBody;
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
      body: ListEntityItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGlobalAppsRequest extends $tea.Model {
  appScope?: string;
  category?: string;
  isReversed?: boolean;
  location?: string;
  maxResults?: number;
  nextToken?: string;
  orderBy?: string;
  search?: string;
  toolkit?: string;
  static names(): { [key: string]: string } {
    return {
      appScope: 'AppScope',
      category: 'Category',
      isReversed: 'IsReversed',
      location: 'Location',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      search: 'Search',
      toolkit: 'Toolkit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appScope: 'string',
      category: 'string',
      isReversed: 'boolean',
      location: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      search: 'string',
      toolkit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGlobalAppsResponseBody extends $tea.Model {
  globalApps?: ListGlobalAppsResponseBodyGlobalApps[];
  hostId?: string;
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      globalApps: 'GlobalApps',
      hostId: 'HostId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalApps: { 'type': 'array', 'itemType': ListGlobalAppsResponseBodyGlobalApps },
      hostId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGlobalAppsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGlobalAppsResponseBody;
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
      body: ListGlobalAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicDatasetRequest extends $tea.Model {
  isReversed?: boolean;
  maxResults?: number;
  nextToken?: string;
  orderBy?: string;
  search?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      isReversed: 'IsReversed',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      search: 'Search',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isReversed: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      search: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicDatasetResponseBody extends $tea.Model {
  datasets?: ListPublicDatasetResponseBodyDatasets[];
  hostId?: string;
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      datasets: 'Datasets',
      hostId: 'HostId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasets: { 'type': 'array', 'itemType': ListPublicDatasetResponseBodyDatasets },
      hostId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicDatasetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPublicDatasetResponseBody;
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
      body: ListPublicDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicDatasetEntitiesRequest extends $tea.Model {
  datasetName?: string;
  isReversed?: boolean;
  location?: string;
  maxResults?: number;
  nextToken?: string;
  orderBy?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      isReversed: 'IsReversed',
      location: 'Location',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      isReversed: 'boolean',
      location: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicDatasetEntitiesResponseBody extends $tea.Model {
  datasetName?: string;
  entities?: ListPublicDatasetEntitiesResponseBodyEntities[];
  hostId?: string;
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      entities: 'Entities',
      hostId: 'HostId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      entities: { 'type': 'array', 'itemType': ListPublicDatasetEntitiesResponseBodyEntities },
      hostId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicDatasetEntitiesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPublicDatasetEntitiesResponseBody;
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
      body: ListPublicDatasetEntitiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicDatasetEntityItemsRequest extends $tea.Model {
  datasetName?: string;
  entityType?: string;
  isReversed?: boolean;
  location?: string;
  maxResults?: number;
  nextToken?: string;
  orderBy?: string;
  search?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      entityType: 'EntityType',
      isReversed: 'IsReversed',
      location: 'Location',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      search: 'Search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      entityType: 'string',
      isReversed: 'boolean',
      location: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      search: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicDatasetEntityItemsResponseBody extends $tea.Model {
  datasetName?: string;
  entityItems?: ListPublicDatasetEntityItemsResponseBodyEntityItems[];
  hostId?: string;
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      entityItems: 'EntityItems',
      hostId: 'HostId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      entityItems: { 'type': 'array', 'itemType': ListPublicDatasetEntityItemsResponseBodyEntityItems },
      hostId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicDatasetEntityItemsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPublicDatasetEntityItemsResponseBody;
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
      body: ListPublicDatasetEntityItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicDatasetTagsRequest extends $tea.Model {
  isReversed?: boolean;
  maxResults?: number;
  nextToken?: string;
  orderBy?: string;
  search?: string;
  static names(): { [key: string]: string } {
    return {
      isReversed: 'IsReversed',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      search: 'Search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isReversed: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      search: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicDatasetTagsResponseBody extends $tea.Model {
  hostId?: string;
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  tags?: string[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tags: 'Tags',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicDatasetTagsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPublicDatasetTagsResponseBody;
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
      body: ListPublicDatasetTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBody extends $tea.Model {
  hostId?: string;
  regions?: ListRegionsResponseBodyRegions[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      regions: { 'type': 'array', 'itemType': ListRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRegionsResponseBody;
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
      body: ListRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunsRequest extends $tea.Model {
  appName?: string;
  appRevision?: string;
  entityName?: string;
  entityType?: string;
  getTotal?: boolean;
  isReversed?: boolean;
  labelSelector?: string;
  maxResults?: number;
  nextToken?: string;
  orderBy?: string;
  search?: string;
  status?: string;
  submissionId?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appRevision: 'AppRevision',
      entityName: 'EntityName',
      entityType: 'EntityType',
      getTotal: 'GetTotal',
      isReversed: 'IsReversed',
      labelSelector: 'LabelSelector',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      search: 'Search',
      status: 'Status',
      submissionId: 'SubmissionId',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appRevision: 'string',
      entityName: 'string',
      entityType: 'string',
      getTotal: 'boolean',
      isReversed: 'boolean',
      labelSelector: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      search: 'string',
      status: 'string',
      submissionId: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunsResponseBody extends $tea.Model {
  hostId?: string;
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  runs?: ListRunsResponseBodyRuns[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      runs: 'Runs',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      runs: { 'type': 'array', 'itemType': ListRunsResponseBodyRuns },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRunsResponseBody;
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
      body: ListRunsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubmissionsRequest extends $tea.Model {
  isReversed?: boolean;
  maxResults?: number;
  nextToken?: string;
  orderBy?: string;
  search?: string;
  status?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      isReversed: 'IsReversed',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      search: 'Search',
      status: 'Status',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isReversed: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      search: 'string',
      status: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubmissionsResponseBody extends $tea.Model {
  hostId?: string;
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  submissions?: ListSubmissionsResponseBodySubmissions[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      submissions: 'Submissions',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      submissions: { 'type': 'array', 'itemType': ListSubmissionsResponseBodySubmissions },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubmissionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSubmissionsResponseBody;
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
      body: ListSubmissionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesRequest extends $tea.Model {
  isReversed?: boolean;
  labelSelector?: string;
  maxResults?: number;
  nextToken?: string;
  orderBy?: string;
  search?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      isReversed: 'IsReversed',
      labelSelector: 'LabelSelector',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      search: 'Search',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isReversed: 'boolean',
      labelSelector: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      search: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBody extends $tea.Model {
  hostId?: string;
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  templates?: ListTemplatesResponseBodyTemplates[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      templates: 'Templates',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      templates: { 'type': 'array', 'itemType': ListTemplatesResponseBodyTemplates },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTemplatesResponseBody;
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
      body: ListTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserActiveRunsRequest extends $tea.Model {
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserActiveRunsResponseBody extends $tea.Model {
  hostId?: string;
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  runs?: ListUserActiveRunsResponseBodyRuns[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      runs: 'Runs',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      runs: { 'type': 'array', 'itemType': ListUserActiveRunsResponseBodyRuns },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserActiveRunsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserActiveRunsResponseBody;
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
      body: ListUserActiveRunsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesRequest extends $tea.Model {
  isReversed?: boolean;
  labelSelector?: string;
  maxResults?: number;
  nextToken?: string;
  orderBy?: string;
  search?: string;
  static names(): { [key: string]: string } {
    return {
      isReversed: 'IsReversed',
      labelSelector: 'LabelSelector',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      search: 'Search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isReversed: 'boolean',
      labelSelector: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      search: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesResponseBody extends $tea.Model {
  hostId?: string;
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  workspaces?: ListWorkspacesResponseBodyWorkspaces[];
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      workspaces: 'Workspaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      workspaces: { 'type': 'array', 'itemType': ListWorkspacesResponseBodyWorkspaces },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWorkspacesResponseBody;
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
      body: ListWorkspacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeSubmissionRequest extends $tea.Model {
  submissionId?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      submissionId: 'SubmissionId',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      submissionId: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeSubmissionResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeSubmissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResumeSubmissionResponseBody;
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
      body: ResumeSubmissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagAppRequest extends $tea.Model {
  appName?: string;
  appRevision?: string;
  revisionTag?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appRevision: 'AppRevision',
      revisionTag: 'RevisionTag',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appRevision: 'string',
      revisionTag: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagAppResponseBody extends $tea.Model {
  appName?: string;
  appRevision?: string;
  formerRevision?: string;
  formerTag?: string;
  requestId?: string;
  revisionTag?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appRevision: 'AppRevision',
      formerRevision: 'FormerRevision',
      formerTag: 'FormerTag',
      requestId: 'RequestId',
      revisionTag: 'RevisionTag',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appRevision: 'string',
      formerRevision: 'string',
      formerTag: 'string',
      requestId: 'string',
      revisionTag: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagAppResponseBody;
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
      body: TagAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEntityRequest extends $tea.Model {
  entityItems?: UpdateEntityRequestEntityItems[];
  entityType?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      entityItems: 'EntityItems',
      entityType: 'EntityType',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityItems: { 'type': 'array', 'itemType': UpdateEntityRequestEntityItems },
      entityType: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEntityShrinkRequest extends $tea.Model {
  entityItemsShrink?: string;
  entityType?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      entityItemsShrink: 'EntityItems',
      entityType: 'EntityType',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityItemsShrink: 'string',
      entityType: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEntityResponseBody extends $tea.Model {
  entityType?: string;
  hostId?: string;
  requestId?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      entityType: 'EntityType',
      hostId: 'HostId',
      requestId: 'RequestId',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityType: 'string',
      hostId: 'string',
      requestId: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEntityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateEntityResponseBody;
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
      body: UpdateEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEntityItemsRequest extends $tea.Model {
  entityItems?: UpdateEntityItemsRequestEntityItems[];
  entityType?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      entityItems: 'EntityItems',
      entityType: 'EntityType',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityItems: { 'type': 'array', 'itemType': UpdateEntityItemsRequestEntityItems },
      entityType: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEntityItemsShrinkRequest extends $tea.Model {
  entityItemsShrink?: string;
  entityType?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      entityItemsShrink: 'EntityItems',
      entityType: 'EntityType',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityItemsShrink: 'string',
      entityType: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEntityItemsResponseBody extends $tea.Model {
  entityType?: string;
  hostId?: string;
  requestId?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      entityType: 'EntityType',
      hostId: 'HostId',
      requestId: 'RequestId',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityType: 'string',
      hostId: 'string',
      requestId: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEntityItemsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateEntityItemsResponseBody;
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
      body: UpdateEntityItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateRequest extends $tea.Model {
  description?: string;
  inputsExpression?: UpdateTemplateRequestInputsExpression[];
  labels?: string;
  outputsExpression?: UpdateTemplateRequestOutputsExpression[];
  rootEntity?: string;
  templateName?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      inputsExpression: 'InputsExpression',
      labels: 'Labels',
      outputsExpression: 'OutputsExpression',
      rootEntity: 'RootEntity',
      templateName: 'TemplateName',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      inputsExpression: { 'type': 'array', 'itemType': UpdateTemplateRequestInputsExpression },
      labels: 'string',
      outputsExpression: { 'type': 'array', 'itemType': UpdateTemplateRequestOutputsExpression },
      rootEntity: 'string',
      templateName: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateShrinkRequest extends $tea.Model {
  description?: string;
  inputsExpressionShrink?: string;
  labels?: string;
  outputsExpressionShrink?: string;
  rootEntity?: string;
  templateName?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      inputsExpressionShrink: 'InputsExpression',
      labels: 'Labels',
      outputsExpressionShrink: 'OutputsExpression',
      rootEntity: 'RootEntity',
      templateName: 'TemplateName',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      inputsExpressionShrink: 'string',
      labels: 'string',
      outputsExpressionShrink: 'string',
      rootEntity: 'string',
      templateName: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTemplateResponseBody;
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
      body: UpdateTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceRequest extends $tea.Model {
  description?: string;
  jobLifecycle?: number;
  labels?: string;
  role?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      jobLifecycle: 'JobLifecycle',
      labels: 'Labels',
      role: 'Role',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      jobLifecycle: 'number',
      labels: 'string',
      role: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateWorkspaceResponseBody;
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
      body: UpdateWorkspaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadEntityRequest extends $tea.Model {
  entityCSVFile?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      entityCSVFile: 'EntityCSVFile',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityCSVFile: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadEntityResponseBody extends $tea.Model {
  entityType?: string;
  hostId?: string;
  requestId?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      entityType: 'EntityType',
      hostId: 'HostId',
      requestId: 'RequestId',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityType: 'string',
      hostId: 'string',
      requestId: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadEntityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadEntityResponseBody;
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
      body: UploadEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestConfigs extends $tea.Model {
  content?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestDependencies extends $tea.Model {
  content?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEntityRequestEntityItems extends $tea.Model {
  entityData?: { [key: string]: string };
  entityName?: string;
  static names(): { [key: string]: string } {
    return {
      entityData: 'EntityData',
      entityName: 'EntityName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      entityName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRunRequestExecuteOptions extends $tea.Model {
  callCaching?: boolean;
  deleteIntermediateResults?: boolean;
  failureMode?: string;
  useRelativeOutputPaths?: boolean;
  static names(): { [key: string]: string } {
    return {
      callCaching: 'CallCaching',
      deleteIntermediateResults: 'DeleteIntermediateResults',
      failureMode: 'FailureMode',
      useRelativeOutputPaths: 'UseRelativeOutputPaths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callCaching: 'boolean',
      deleteIntermediateResults: 'boolean',
      failureMode: 'string',
      useRelativeOutputPaths: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateRequestInputsExpression extends $tea.Model {
  help?: string;
  required?: boolean;
  stepOrder?: number;
  taskName?: string;
  variableName?: string;
  variableType?: string;
  variableValue?: string;
  static names(): { [key: string]: string } {
    return {
      help: 'Help',
      required: 'Required',
      stepOrder: 'StepOrder',
      taskName: 'TaskName',
      variableName: 'VariableName',
      variableType: 'VariableType',
      variableValue: 'VariableValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      help: 'string',
      required: 'boolean',
      stepOrder: 'number',
      taskName: 'string',
      variableName: 'string',
      variableType: 'string',
      variableValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateRequestOutputsExpression extends $tea.Model {
  help?: string;
  required?: boolean;
  stepOrder?: number;
  taskName?: string;
  variableName?: string;
  variableType?: string;
  variableValue?: string;
  static names(): { [key: string]: string } {
    return {
      help: 'Help',
      required: 'Required',
      stepOrder: 'StepOrder',
      taskName: 'TaskName',
      variableName: 'VariableName',
      variableType: 'VariableType',
      variableValue: 'VariableValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      help: 'string',
      required: 'boolean',
      stepOrder: 'number',
      taskName: 'string',
      variableName: 'string',
      variableType: 'string',
      variableValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBodyConfigs extends $tea.Model {
  content?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBodyDependencies extends $tea.Model {
  content?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBodyInputs extends $tea.Model {
  help?: string;
  required?: boolean;
  stepOrder?: number;
  taskName?: string;
  variableName?: string;
  variableType?: string;
  variableValue?: string;
  static names(): { [key: string]: string } {
    return {
      help: 'Help',
      required: 'Required',
      stepOrder: 'StepOrder',
      taskName: 'TaskName',
      variableName: 'VariableName',
      variableType: 'VariableType',
      variableValue: 'VariableValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      help: 'string',
      required: 'boolean',
      stepOrder: 'number',
      taskName: 'string',
      variableName: 'string',
      variableType: 'string',
      variableValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBodyOutputs extends $tea.Model {
  help?: string;
  required?: boolean;
  stepOrder?: number;
  taskName?: string;
  variableName?: string;
  variableType?: string;
  variableValue?: string;
  static names(): { [key: string]: string } {
    return {
      help: 'Help',
      required: 'Required',
      stepOrder: 'StepOrder',
      taskName: 'TaskName',
      variableName: 'VariableName',
      variableType: 'VariableType',
      variableValue: 'VariableValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      help: 'string',
      required: 'boolean',
      stepOrder: 'number',
      taskName: 'string',
      variableName: 'string',
      variableType: 'string',
      variableValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBodyRevisions extends $tea.Model {
  createTime?: string;
  revision?: string;
  revisionComment?: string;
  revisionTag?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      revision: 'Revision',
      revisionComment: 'RevisionComment',
      revisionTag: 'RevisionTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      revision: 'string',
      revisionComment: 'string',
      revisionTag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGlobalAppResponseBodyAppDescriptorFiles extends $tea.Model {
  checksum?: string;
  content?: string;
  fileType?: string;
  path?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      checksum: 'Checksum',
      content: 'Content',
      fileType: 'FileType',
      path: 'Path',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checksum: 'string',
      content: 'string',
      fileType: 'string',
      path: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGlobalAppResponseBodyAppVersions extends $tea.Model {
  appVersion?: string;
  comment?: string;
  lastModified?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      comment: 'Comment',
      lastModified: 'LastModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      comment: 'string',
      lastModified: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunResponseBodyExecuteOptions extends $tea.Model {
  callCaching?: boolean;
  deleteIntermediateResults?: boolean;
  failureMode?: string;
  useRelativeOutputPaths?: boolean;
  static names(): { [key: string]: string } {
    return {
      callCaching: 'CallCaching',
      deleteIntermediateResults: 'DeleteIntermediateResults',
      failureMode: 'FailureMode',
      useRelativeOutputPaths: 'UseRelativeOutputPaths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callCaching: 'boolean',
      deleteIntermediateResults: 'boolean',
      failureMode: 'string',
      useRelativeOutputPaths: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubmissionResponseBodySubmissionRunStats extends $tea.Model {
  aborted?: number;
  aborting?: number;
  failed?: number;
  pending?: number;
  running?: number;
  submitted?: number;
  succeeded?: number;
  static names(): { [key: string]: string } {
    return {
      aborted: 'Aborted',
      aborting: 'Aborting',
      failed: 'Failed',
      pending: 'Pending',
      running: 'Running',
      submitted: 'Submitted',
      succeeded: 'Succeeded',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aborted: 'number',
      aborting: 'number',
      failed: 'number',
      pending: 'number',
      running: 'number',
      submitted: 'number',
      succeeded: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubmissionResponseBodySubmission extends $tea.Model {
  createTime?: string;
  endTime?: string;
  entityType?: string;
  runStats?: GetSubmissionResponseBodySubmissionRunStats;
  startTime?: string;
  status?: string;
  submissionId?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      endTime: 'EndTime',
      entityType: 'EntityType',
      runStats: 'RunStats',
      startTime: 'StartTime',
      status: 'Status',
      submissionId: 'SubmissionId',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      endTime: 'string',
      entityType: 'string',
      runStats: GetSubmissionResponseBodySubmissionRunStats,
      startTime: 'string',
      status: 'string',
      submissionId: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBodyInputsExpression extends $tea.Model {
  help?: string;
  required?: boolean;
  stepOrder?: number;
  taskName?: string;
  variableName?: string;
  variableType?: string;
  variableValue?: string;
  static names(): { [key: string]: string } {
    return {
      help: 'Help',
      required: 'Required',
      stepOrder: 'StepOrder',
      taskName: 'TaskName',
      variableName: 'VariableName',
      variableType: 'VariableType',
      variableValue: 'VariableValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      help: 'string',
      required: 'boolean',
      stepOrder: 'number',
      taskName: 'string',
      variableName: 'string',
      variableType: 'string',
      variableValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBodyOutputsExpression extends $tea.Model {
  help?: string;
  required?: boolean;
  stepOrder?: number;
  taskName?: string;
  variableName?: string;
  variableType?: string;
  variableValue?: string;
  static names(): { [key: string]: string } {
    return {
      help: 'Help',
      required: 'Required',
      stepOrder: 'StepOrder',
      taskName: 'TaskName',
      variableName: 'VariableName',
      variableType: 'VariableType',
      variableValue: 'VariableValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      help: 'string',
      required: 'boolean',
      stepOrder: 'number',
      taskName: 'string',
      variableName: 'string',
      variableType: 'string',
      variableValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBodyApps extends $tea.Model {
  appDefaultVersion?: string;
  appName?: string;
  appType?: string;
  createTime?: string;
  description?: string;
  labels?: { [key: string]: string };
  language?: string;
  scope?: string;
  source?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      appDefaultVersion: 'AppDefaultVersion',
      appName: 'AppName',
      appType: 'AppType',
      createTime: 'CreateTime',
      description: 'Description',
      labels: 'Labels',
      language: 'Language',
      scope: 'Scope',
      source: 'Source',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDefaultVersion: 'string',
      appName: 'string',
      appType: 'string',
      createTime: 'string',
      description: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      language: 'string',
      scope: 'string',
      source: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizedSoftwareResponseBodySoftwares extends $tea.Model {
  helpLink?: string;
  lastModified?: string;
  locations?: string[];
  promotion?: string;
  softwareDefaultVersion?: string;
  softwareDescription?: string;
  softwareIcon?: string;
  softwareLicenseFee?: number;
  softwareLongName?: string;
  softwareName?: string;
  softwareVersions?: string[];
  static names(): { [key: string]: string } {
    return {
      helpLink: 'HelpLink',
      lastModified: 'LastModified',
      locations: 'Locations',
      promotion: 'Promotion',
      softwareDefaultVersion: 'SoftwareDefaultVersion',
      softwareDescription: 'SoftwareDescription',
      softwareIcon: 'SoftwareIcon',
      softwareLicenseFee: 'SoftwareLicenseFee',
      softwareLongName: 'SoftwareLongName',
      softwareName: 'SoftwareName',
      softwareVersions: 'SoftwareVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      helpLink: 'string',
      lastModified: 'string',
      locations: { 'type': 'array', 'itemType': 'string' },
      promotion: 'string',
      softwareDefaultVersion: 'string',
      softwareDescription: 'string',
      softwareIcon: 'string',
      softwareLicenseFee: 'number',
      softwareLongName: 'string',
      softwareName: 'string',
      softwareVersions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContainerImagesResponseBodyContainerImages extends $tea.Model {
  containerImageDescription?: string;
  containerImageName?: string;
  containerImageNamespace?: string;
  containerImageVersions?: string[];
  containerRegistry?: string;
  lastModified?: string;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      containerImageDescription: 'ContainerImageDescription',
      containerImageName: 'ContainerImageName',
      containerImageNamespace: 'ContainerImageNamespace',
      containerImageVersions: 'ContainerImageVersions',
      containerRegistry: 'ContainerRegistry',
      lastModified: 'LastModified',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerImageDescription: 'string',
      containerImageName: 'string',
      containerImageNamespace: 'string',
      containerImageVersions: { 'type': 'array', 'itemType': 'string' },
      containerRegistry: 'string',
      lastModified: 'string',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntitiesResponseBodyEntities extends $tea.Model {
  entityType?: string;
  static names(): { [key: string]: string } {
    return {
      entityType: 'EntityType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntityItemsResponseBodyEntityItems extends $tea.Model {
  entityData?: { [key: string]: string };
  entityName?: string;
  static names(): { [key: string]: string } {
    return {
      entityData: 'EntityData',
      entityName: 'EntityName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      entityName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGlobalAppsResponseBodyGlobalApps extends $tea.Model {
  appDefaultVersion?: string;
  appDescription?: string;
  appFee?: string;
  appName?: string;
  appScope?: string;
  categories?: string[];
  lastModified?: string;
  locations?: string[];
  namespaceName?: string;
  pinned?: boolean;
  toolkit?: string;
  static names(): { [key: string]: string } {
    return {
      appDefaultVersion: 'AppDefaultVersion',
      appDescription: 'AppDescription',
      appFee: 'AppFee',
      appName: 'AppName',
      appScope: 'AppScope',
      categories: 'Categories',
      lastModified: 'LastModified',
      locations: 'Locations',
      namespaceName: 'NamespaceName',
      pinned: 'Pinned',
      toolkit: 'Toolkit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDefaultVersion: 'string',
      appDescription: 'string',
      appFee: 'string',
      appName: 'string',
      appScope: 'string',
      categories: { 'type': 'array', 'itemType': 'string' },
      lastModified: 'string',
      locations: { 'type': 'array', 'itemType': 'string' },
      namespaceName: 'string',
      pinned: 'boolean',
      toolkit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicDatasetResponseBodyDatasets extends $tea.Model {
  about?: string;
  accessRequirements?: string;
  copyright?: string;
  datasetDescription?: string;
  datasetId?: string;
  datasetName?: string;
  lastModified?: string;
  locations?: string[];
  tags?: string[];
  updateFrequency?: string;
  static names(): { [key: string]: string } {
    return {
      about: 'About',
      accessRequirements: 'AccessRequirements',
      copyright: 'Copyright',
      datasetDescription: 'DatasetDescription',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      lastModified: 'LastModified',
      locations: 'Locations',
      tags: 'Tags',
      updateFrequency: 'UpdateFrequency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      about: 'string',
      accessRequirements: 'string',
      copyright: 'string',
      datasetDescription: 'string',
      datasetId: 'string',
      datasetName: 'string',
      lastModified: 'string',
      locations: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': 'string' },
      updateFrequency: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicDatasetEntitiesResponseBodyEntities extends $tea.Model {
  entityType?: string;
  static names(): { [key: string]: string } {
    return {
      entityType: 'EntityType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicDatasetEntityItemsResponseBodyEntityItems extends $tea.Model {
  entityData?: { [key: string]: string };
  entityName?: string;
  static names(): { [key: string]: string } {
    return {
      entityData: 'EntityData',
      entityName: 'EntityName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      entityName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBodyRegions extends $tea.Model {
  localName?: string;
  regionEndpoint?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunsResponseBodyRunsExecuteOptions extends $tea.Model {
  callCaching?: boolean;
  deleteIntermediateResults?: boolean;
  failureMode?: string;
  useRelativeOutputPaths?: boolean;
  static names(): { [key: string]: string } {
    return {
      callCaching: 'CallCaching',
      deleteIntermediateResults: 'DeleteIntermediateResults',
      failureMode: 'FailureMode',
      useRelativeOutputPaths: 'UseRelativeOutputPaths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callCaching: 'boolean',
      deleteIntermediateResults: 'boolean',
      failureMode: 'string',
      useRelativeOutputPaths: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunsResponseBodyRuns extends $tea.Model {
  appName?: string;
  appRevision?: string;
  createTime?: string;
  defaultRuntime?: string;
  endTime?: string;
  entityName?: string;
  entityType?: string;
  executeDirectory?: string;
  executeOptions?: ListRunsResponseBodyRunsExecuteOptions;
  inputs?: string;
  labels?: { [key: string]: string };
  regionId?: string;
  runId?: string;
  runName?: string;
  source?: string;
  startTime?: string;
  status?: string;
  submissionId?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appRevision: 'AppRevision',
      createTime: 'CreateTime',
      defaultRuntime: 'DefaultRuntime',
      endTime: 'EndTime',
      entityName: 'EntityName',
      entityType: 'EntityType',
      executeDirectory: 'ExecuteDirectory',
      executeOptions: 'ExecuteOptions',
      inputs: 'Inputs',
      labels: 'Labels',
      regionId: 'RegionId',
      runId: 'RunId',
      runName: 'RunName',
      source: 'Source',
      startTime: 'StartTime',
      status: 'Status',
      submissionId: 'SubmissionId',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appRevision: 'string',
      createTime: 'string',
      defaultRuntime: 'string',
      endTime: 'string',
      entityName: 'string',
      entityType: 'string',
      executeDirectory: 'string',
      executeOptions: ListRunsResponseBodyRunsExecuteOptions,
      inputs: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      regionId: 'string',
      runId: 'string',
      runName: 'string',
      source: 'string',
      startTime: 'string',
      status: 'string',
      submissionId: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubmissionsResponseBodySubmissionsRunStats extends $tea.Model {
  aborted?: number;
  aborting?: number;
  failed?: number;
  pending?: number;
  running?: number;
  submitted?: number;
  succeeded?: number;
  static names(): { [key: string]: string } {
    return {
      aborted: 'Aborted',
      aborting: 'Aborting',
      failed: 'Failed',
      pending: 'Pending',
      running: 'Running',
      submitted: 'Submitted',
      succeeded: 'Succeeded',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aborted: 'number',
      aborting: 'number',
      failed: 'number',
      pending: 'number',
      running: 'number',
      submitted: 'number',
      succeeded: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubmissionsResponseBodySubmissions extends $tea.Model {
  createTime?: string;
  endTime?: string;
  entityType?: string;
  runStats?: ListSubmissionsResponseBodySubmissionsRunStats;
  startTime?: string;
  status?: string;
  submissionId?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      endTime: 'EndTime',
      entityType: 'EntityType',
      runStats: 'RunStats',
      startTime: 'StartTime',
      status: 'Status',
      submissionId: 'SubmissionId',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      endTime: 'string',
      entityType: 'string',
      runStats: ListSubmissionsResponseBodySubmissionsRunStats,
      startTime: 'string',
      status: 'string',
      submissionId: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBodyTemplatesInputsExpression extends $tea.Model {
  help?: string;
  required?: boolean;
  stepOrder?: number;
  taskName?: string;
  variableName?: string;
  variableType?: string;
  variableValue?: string;
  static names(): { [key: string]: string } {
    return {
      help: 'Help',
      required: 'Required',
      stepOrder: 'StepOrder',
      taskName: 'TaskName',
      variableName: 'VariableName',
      variableType: 'VariableType',
      variableValue: 'VariableValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      help: 'string',
      required: 'boolean',
      stepOrder: 'number',
      taskName: 'string',
      variableName: 'string',
      variableType: 'string',
      variableValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBodyTemplatesOutputsExpression extends $tea.Model {
  help?: string;
  required?: boolean;
  stepOrder?: number;
  taskName?: string;
  variableName?: string;
  variableType?: string;
  variableValue?: string;
  static names(): { [key: string]: string } {
    return {
      help: 'Help',
      required: 'Required',
      stepOrder: 'StepOrder',
      taskName: 'TaskName',
      variableName: 'VariableName',
      variableType: 'VariableType',
      variableValue: 'VariableValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      help: 'string',
      required: 'boolean',
      stepOrder: 'number',
      taskName: 'string',
      variableName: 'string',
      variableType: 'string',
      variableValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBodyTemplates extends $tea.Model {
  appName?: string;
  appRevision?: string;
  createTime?: string;
  description?: string;
  inputsExpression?: ListTemplatesResponseBodyTemplatesInputsExpression[];
  labels?: { [key: string]: string };
  lastModifiedTime?: string;
  outputsExpression?: ListTemplatesResponseBodyTemplatesOutputsExpression[];
  revisionTag?: string;
  rootEntity?: string;
  templateName?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appRevision: 'AppRevision',
      createTime: 'CreateTime',
      description: 'Description',
      inputsExpression: 'InputsExpression',
      labels: 'Labels',
      lastModifiedTime: 'LastModifiedTime',
      outputsExpression: 'OutputsExpression',
      revisionTag: 'RevisionTag',
      rootEntity: 'RootEntity',
      templateName: 'TemplateName',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appRevision: 'string',
      createTime: 'string',
      description: 'string',
      inputsExpression: { 'type': 'array', 'itemType': ListTemplatesResponseBodyTemplatesInputsExpression },
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      lastModifiedTime: 'string',
      outputsExpression: { 'type': 'array', 'itemType': ListTemplatesResponseBodyTemplatesOutputsExpression },
      revisionTag: 'string',
      rootEntity: 'string',
      templateName: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserActiveRunsResponseBodyRunsExecuteOptions extends $tea.Model {
  callCaching?: boolean;
  deleteIntermediateResults?: boolean;
  failureMode?: string;
  useRelativeOutputPaths?: boolean;
  static names(): { [key: string]: string } {
    return {
      callCaching: 'CallCaching',
      deleteIntermediateResults: 'DeleteIntermediateResults',
      failureMode: 'FailureMode',
      useRelativeOutputPaths: 'UseRelativeOutputPaths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callCaching: 'boolean',
      deleteIntermediateResults: 'boolean',
      failureMode: 'string',
      useRelativeOutputPaths: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserActiveRunsResponseBodyRuns extends $tea.Model {
  appName?: string;
  appRevision?: string;
  createTime?: string;
  defaultRuntime?: string;
  endTime?: string;
  entityName?: string;
  entityType?: string;
  executeDirectory?: string;
  executeOptions?: ListUserActiveRunsResponseBodyRunsExecuteOptions;
  inputs?: string;
  labels?: { [key: string]: string };
  regionId?: string;
  runId?: string;
  runName?: string;
  source?: string;
  startTime?: string;
  status?: string;
  submissionId?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appRevision: 'AppRevision',
      createTime: 'CreateTime',
      defaultRuntime: 'DefaultRuntime',
      endTime: 'EndTime',
      entityName: 'EntityName',
      entityType: 'EntityType',
      executeDirectory: 'ExecuteDirectory',
      executeOptions: 'ExecuteOptions',
      inputs: 'Inputs',
      labels: 'Labels',
      regionId: 'RegionId',
      runId: 'RunId',
      runName: 'RunName',
      source: 'Source',
      startTime: 'StartTime',
      status: 'Status',
      submissionId: 'SubmissionId',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appRevision: 'string',
      createTime: 'string',
      defaultRuntime: 'string',
      endTime: 'string',
      entityName: 'string',
      entityType: 'string',
      executeDirectory: 'string',
      executeOptions: ListUserActiveRunsResponseBodyRunsExecuteOptions,
      inputs: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      regionId: 'string',
      runId: 'string',
      runName: 'string',
      source: 'string',
      startTime: 'string',
      status: 'string',
      submissionId: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesResponseBodyWorkspaces extends $tea.Model {
  bucketName?: string;
  createTime?: string;
  description?: string;
  jobLifecycle?: number;
  labels?: { [key: string]: string };
  lastModifiedTime?: string;
  location?: string;
  role?: string;
  status?: string;
  storage?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      createTime: 'CreateTime',
      description: 'Description',
      jobLifecycle: 'JobLifecycle',
      labels: 'Labels',
      lastModifiedTime: 'LastModifiedTime',
      location: 'Location',
      role: 'Role',
      status: 'Status',
      storage: 'Storage',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      createTime: 'string',
      description: 'string',
      jobLifecycle: 'number',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      lastModifiedTime: 'string',
      location: 'string',
      role: 'string',
      status: 'string',
      storage: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEntityRequestEntityItems extends $tea.Model {
  entityData?: { [key: string]: string };
  entityName?: string;
  static names(): { [key: string]: string } {
    return {
      entityData: 'EntityData',
      entityName: 'EntityName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      entityName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEntityItemsRequestEntityItems extends $tea.Model {
  entityData?: { [key: string]: string };
  entityName?: string;
  static names(): { [key: string]: string } {
    return {
      entityData: 'EntityData',
      entityName: 'EntityName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      entityName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateRequestInputsExpression extends $tea.Model {
  help?: string;
  required?: boolean;
  stepOrder?: number;
  taskName?: string;
  variableName?: string;
  variableType?: string;
  variableValue?: string;
  static names(): { [key: string]: string } {
    return {
      help: 'Help',
      required: 'Required',
      stepOrder: 'StepOrder',
      taskName: 'TaskName',
      variableName: 'VariableName',
      variableType: 'VariableType',
      variableValue: 'VariableValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      help: 'string',
      required: 'boolean',
      stepOrder: 'number',
      taskName: 'string',
      variableName: 'string',
      variableType: 'string',
      variableValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateRequestOutputsExpression extends $tea.Model {
  help?: string;
  required?: boolean;
  stepOrder?: number;
  taskName?: string;
  variableName?: string;
  variableType?: string;
  variableValue?: string;
  static names(): { [key: string]: string } {
    return {
      help: 'Help',
      required: 'Required',
      stepOrder: 'StepOrder',
      taskName: 'TaskName',
      variableName: 'VariableName',
      variableType: 'VariableType',
      variableValue: 'VariableValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      help: 'string',
      required: 'boolean',
      stepOrder: 'number',
      taskName: 'string',
      variableName: 'string',
      variableType: 'string',
      variableValue: 'string',
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
    this._endpoint = this.getEndpoint("easygene", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async abortRunWithOptions(request: AbortRunRequest, runtime: $Util.RuntimeOptions): Promise<AbortRunResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.runId)) {
      query["RunId"] = request.runId;
    }

    if (!Util.isUnset(request.workspace)) {
      query["Workspace"] = request.workspace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AbortRun",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AbortRunResponse>(await this.callApi(params, req, runtime), new AbortRunResponse({}));
  }

  async abortRun(request: AbortRunRequest): Promise<AbortRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.abortRunWithOptions(request, runtime);
  }

  async abortSubmissionWithOptions(request: AbortSubmissionRequest, runtime: $Util.RuntimeOptions): Promise<AbortSubmissionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.submissionId)) {
      query["SubmissionId"] = request.submissionId;
    }

    if (!Util.isUnset(request.workspace)) {
      query["Workspace"] = request.workspace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AbortSubmission",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AbortSubmissionResponse>(await this.callApi(params, req, runtime), new AbortSubmissionResponse({}));
  }

  async abortSubmission(request: AbortSubmissionRequest): Promise<AbortSubmissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.abortSubmissionWithOptions(request, runtime);
  }

  async copyPublicEntityWithOptions(request: CopyPublicEntityRequest, runtime: $Util.RuntimeOptions): Promise<CopyPublicEntityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dataset)) {
      query["Dataset"] = request.dataset;
    }

    if (!Util.isUnset(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!Util.isUnset(request.workspace)) {
      query["Workspace"] = request.workspace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CopyPublicEntity",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CopyPublicEntityResponse>(await this.callApi(params, req, runtime), new CopyPublicEntityResponse({}));
  }

  async copyPublicEntity(request: CopyPublicEntityRequest): Promise<CopyPublicEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.copyPublicEntityWithOptions(request, runtime);
  }

  async createAppWithOptions(tmpReq: CreateAppRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateAppShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.configs)) {
      request.configsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configs, "Configs", "json");
    }

    if (!Util.isUnset(tmpReq.dependencies)) {
      request.dependenciesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dependencies, "Dependencies", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.languageVersion)) {
      query["LanguageVersion"] = request.languageVersion;
    }

    if (!Util.isUnset(request.path)) {
      query["Path"] = request.path;
    }

    if (!Util.isUnset(request.revisionComment)) {
      query["RevisionComment"] = request.revisionComment;
    }

    if (!Util.isUnset(request.revisionTag)) {
      query["RevisionTag"] = request.revisionTag;
    }

    if (!Util.isUnset(request.workspace)) {
      query["Workspace"] = request.workspace;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.configsShrink)) {
      body["Configs"] = request.configsShrink;
    }

    if (!Util.isUnset(request.definition)) {
      body["Definition"] = request.definition;
    }

    if (!Util.isUnset(request.dependenciesShrink)) {
      body["Dependencies"] = request.dependenciesShrink;
    }

    if (!Util.isUnset(request.documentation)) {
      body["Documentation"] = request.documentation;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateApp",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppResponse>(await this.callApi(params, req, runtime), new CreateAppResponse({}));
  }

  async createApp(request: CreateAppRequest): Promise<CreateAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppWithOptions(request, runtime);
  }

  async createEntityWithOptions(tmpReq: CreateEntityRequest, runtime: $Util.RuntimeOptions): Promise<CreateEntityResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateEntityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.entityItems)) {
      request.entityItemsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.entityItems, "EntityItems", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!Util.isUnset(request.workspace)) {
      query["Workspace"] = request.workspace;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.entityItemsShrink)) {
      body["EntityItems"] = request.entityItemsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateEntity",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateEntityResponse>(await this.callApi(params, req, runtime), new CreateEntityResponse({}));
  }

  async createEntity(request: CreateEntityRequest): Promise<CreateEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEntityWithOptions(request, runtime);
  }

  async createRunWithOptions(tmpReq: CreateRunRequest, runtime: $Util.RuntimeOptions): Promise<CreateRunResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateRunShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.executeOptions)) {
      request.executeOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.executeOptions, "ExecuteOptions", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.appRevision)) {
      query["AppRevision"] = request.appRevision;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.defaultRuntime)) {
      query["DefaultRuntime"] = request.defaultRuntime;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.executeDirectory)) {
      query["ExecuteDirectory"] = request.executeDirectory;
    }

    if (!Util.isUnset(request.executeOptionsShrink)) {
      query["ExecuteOptions"] = request.executeOptionsShrink;
    }

    if (!Util.isUnset(request.inputs)) {
      query["Inputs"] = request.inputs;
    }

    if (!Util.isUnset(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.outputFolder)) {
      query["OutputFolder"] = request.outputFolder;
    }

    if (!Util.isUnset(request.revisionTag)) {
      query["RevisionTag"] = request.revisionTag;
    }

    if (!Util.isUnset(request.role)) {
      query["Role"] = request.role;
    }

    if (!Util.isUnset(request.runName)) {
      query["RunName"] = request.runName;
    }

    if (!Util.isUnset(request.workspace)) {
      query["Workspace"] = request.workspace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRun",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRunResponse>(await this.callApi(params, req, runtime), new CreateRunResponse({}));
  }

  async createRun(request: CreateRunRequest): Promise<CreateRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRunWithOptions(request, runtime);
  }

  async createSubmissionWithOptions(tmpReq: CreateSubmissionRequest, runtime: $Util.RuntimeOptions): Promise<CreateSubmissionResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateSubmissionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.entityNames)) {
      request.entityNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.entityNames, "EntityNames", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.defaultRuntime)) {
      query["DefaultRuntime"] = request.defaultRuntime;
    }

    if (!Util.isUnset(request.entityNamesShrink)) {
      query["EntityNames"] = request.entityNamesShrink;
    }

    if (!Util.isUnset(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!Util.isUnset(request.executeDirectory)) {
      query["ExecuteDirectory"] = request.executeDirectory;
    }

    if (!Util.isUnset(request.executeOptions)) {
      query["ExecuteOptions"] = request.executeOptions;
    }

    if (!Util.isUnset(request.inputs)) {
      query["Inputs"] = request.inputs;
    }

    if (!Util.isUnset(request.outputFolder)) {
      query["OutputFolder"] = request.outputFolder;
    }

    if (!Util.isUnset(request.outputs)) {
      query["Outputs"] = request.outputs;
    }

    if (!Util.isUnset(request.revision)) {
      query["Revision"] = request.revision;
    }

    if (!Util.isUnset(request.revisionTag)) {
      query["RevisionTag"] = request.revisionTag;
    }

    if (!Util.isUnset(request.workspace)) {
      query["Workspace"] = request.workspace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSubmission",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSubmissionResponse>(await this.callApi(params, req, runtime), new CreateSubmissionResponse({}));
  }

  async createSubmission(request: CreateSubmissionRequest): Promise<CreateSubmissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSubmissionWithOptions(request, runtime);
  }

  async createTemplateWithOptions(tmpReq: CreateTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateTemplateResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.inputsExpression)) {
      request.inputsExpressionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.inputsExpression, "InputsExpression", "json");
    }

    if (!Util.isUnset(tmpReq.outputsExpression)) {
      request.outputsExpressionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.outputsExpression, "OutputsExpression", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.appRevision)) {
      query["AppRevision"] = request.appRevision;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.revisionTag)) {
      query["RevisionTag"] = request.revisionTag;
    }

    if (!Util.isUnset(request.rootEntity)) {
      query["RootEntity"] = request.rootEntity;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.workspace)) {
      query["Workspace"] = request.workspace;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.inputsExpressionShrink)) {
      body["InputsExpression"] = request.inputsExpressionShrink;
    }

    if (!Util.isUnset(request.outputsExpressionShrink)) {
      body["OutputsExpression"] = request.outputsExpressionShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTemplate",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTemplateResponse>(await this.callApi(params, req, runtime), new CreateTemplateResponse({}));
  }

  async createTemplate(request: CreateTemplateRequest): Promise<CreateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTemplateWithOptions(request, runtime);
  }

  async createWorkspaceWithOptions(request: CreateWorkspaceRequest, runtime: $Util.RuntimeOptions): Promise<CreateWorkspaceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.jobLifecycle)) {
      query["JobLifecycle"] = request.jobLifecycle;
    }

    if (!Util.isUnset(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.role)) {
      query["Role"] = request.role;
    }

    if (!Util.isUnset(request.storage)) {
      query["Storage"] = request.storage;
    }

    if (!Util.isUnset(request.workspace)) {
      query["Workspace"] = request.workspace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateWorkspace",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateWorkspaceResponse>(await this.callApi(params, req, runtime), new CreateWorkspaceResponse({}));
  }

  async createWorkspace(request: CreateWorkspaceRequest): Promise<CreateWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWorkspaceWithOptions(request, runtime);
  }

  async deleteAppWithOptions(request: DeleteAppRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.revision)) {
      query["Revision"] = request.revision;
    }

    if (!Util.isUnset(request.workspace)) {
      query["Workspace"] = request.workspace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApp",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAppResponse>(await this.callApi(params, req, runtime), new DeleteAppResponse({}));
  }

  async deleteApp(request: DeleteAppRequest): Promise<DeleteAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppWithOptions(request, runtime);
  }

  async deleteEntityWithOptions(request: DeleteEntityRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEntityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!Util.isUnset(request.workspace)) {
      query["Workspace"] = request.workspace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEntity",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteEntityResponse>(await this.callApi(params, req, runtime), new DeleteEntityResponse({}));
  }

  async deleteEntity(request: DeleteEntityRequest): Promise<DeleteEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEntityWithOptions(request, runtime);
  }

  async deleteEntityItemsWithOptions(tmpReq: DeleteEntityItemsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEntityItemsResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteEntityItemsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.entityNames)) {
      request.entityNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.entityNames, "EntityNames", "json");
    }

    let query = { };
    if (!Util.isUnset(request.entityNamesShrink)) {
      query["EntityNames"] = request.entityNamesShrink;
    }

    if (!Util.isUnset(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!Util.isUnset(request.workspace)) {
      query["Workspace"] = request.workspace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEntityItems",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteEntityItemsResponse>(await this.callApi(params, req, runtime), new DeleteEntityItemsResponse({}));
  }

  async deleteEntityItems(request: DeleteEntityItemsRequest): Promise<DeleteEntityItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEntityItemsWithOptions(request, runtime);
  }

  async deleteRunWithOptions(request: DeleteRunRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRunResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.runId)) {
      query["RunId"] = request.runId;
    }

    if (!Util.isUnset(request.workspace)) {
      query["Workspace"] = request.workspace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRun",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRunResponse>(await this.callApi(params, req, runtime), new DeleteRunResponse({}));
  }

  async deleteRun(request: DeleteRunRequest): Promise<DeleteRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRunWithOptions(request, runtime);
  }

  async deleteSubmissionWithOptions(request: DeleteSubmissionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSubmissionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.submissionId)) {
      query["SubmissionId"] = request.submissionId;
    }

    if (!Util.isUnset(request.workspace)) {
      query["Workspace"] = request.workspace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSubmission",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSubmissionResponse>(await this.callApi(params, req, runtime), new DeleteSubmissionResponse({}));
  }

  async deleteSubmission(request: DeleteSubmissionRequest): Promise<DeleteSubmissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSubmissionWithOptions(request, runtime);
  }

  async deleteTemplateWithOptions(request: DeleteTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.workspace)) {
      query["Workspace"] = request.workspace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTemplate",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTemplateResponse>(await this.callApi(params, req, runtime), new DeleteTemplateResponse({}));
  }

  async deleteTemplate(request: DeleteTemplateRequest): Promise<DeleteTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTemplateWithOptions(request, runtime);
  }

  async deleteWorkspaceWithOptions(request: DeleteWorkspaceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWorkspaceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.workspace)) {
      query["Workspace"] = request.workspace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWorkspace",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteWorkspaceResponse>(await this.callApi(params, req, runtime), new DeleteWorkspaceResponse({}));
  }

  async deleteWorkspace(request: DeleteWorkspaceRequest): Promise<DeleteWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWorkspaceWithOptions(request, runtime);
  }

  async downloadEntityWithOptions(tmpReq: DownloadEntityRequest, runtime: $Util.RuntimeOptions): Promise<DownloadEntityResponse> {
    Util.validateModel(tmpReq);
    let request = new DownloadEntityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.entityNames)) {
      request.entityNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.entityNames, "EntityNames", "json");
    }

    let query = { };
    if (!Util.isUnset(request.entityNamesShrink)) {
      query["EntityNames"] = request.entityNamesShrink;
    }

    if (!Util.isUnset(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!Util.isUnset(request.workspace)) {
      query["Workspace"] = request.workspace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DownloadEntity",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DownloadEntityResponse>(await this.callApi(params, req, runtime), new DownloadEntityResponse({}));
  }

  async downloadEntity(request: DownloadEntityRequest): Promise<DownloadEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadEntityWithOptions(request, runtime);
  }

  async getAppWithOptions(request: GetAppRequest, runtime: $Util.RuntimeOptions): Promise<GetAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.revision)) {
      query["Revision"] = request.revision;
    }

    if (!Util.isUnset(request.revisionTag)) {
      query["RevisionTag"] = request.revisionTag;
    }

    if (!Util.isUnset(request.workspace)) {
      query["Workspace"] = request.workspace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetApp",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAppResponse>(await this.callApi(params, req, runtime), new GetAppResponse({}));
  }

  async getApp(request: GetAppRequest): Promise<GetAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppWithOptions(request, runtime);
  }

  async getEntityWithOptions(request: GetEntityRequest, runtime: $Util.RuntimeOptions): Promise<GetEntityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!Util.isUnset(request.workspace)) {
      query["Workspace"] = request.workspace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetEntity",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEntityResponse>(await this.callApi(params, req, runtime), new GetEntityResponse({}));
  }

  async getEntity(request: GetEntityRequest): Promise<GetEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEntityWithOptions(request, runtime);
  }

  async getGlobalAppWithOptions(tmpReq: GetGlobalAppRequest, runtime: $Util.RuntimeOptions): Promise<GetGlobalAppResponse> {
    Util.validateModel(tmpReq);
    let request = new GetGlobalAppShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.attributes)) {
      request.attributesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.attributes, "Attributes", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetGlobalApp",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetGlobalAppResponse>(await this.callApi(params, req, runtime), new GetGlobalAppResponse({}));
  }

  async getGlobalApp(request: GetGlobalAppRequest): Promise<GetGlobalAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGlobalAppWithOptions(request, runtime);
  }

  async getPublicDatasetWithOptions(tmpReq: GetPublicDatasetRequest, runtime: $Util.RuntimeOptions): Promise<GetPublicDatasetResponse> {
    Util.validateModel(tmpReq);
    let request = new GetPublicDatasetShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.attributes)) {
      request.attributesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.attributes, "Attributes", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPublicDataset",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPublicDatasetResponse>(await this.callApi(params, req, runtime), new GetPublicDatasetResponse({}));
  }

  async getPublicDataset(request: GetPublicDatasetRequest): Promise<GetPublicDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPublicDatasetWithOptions(request, runtime);
  }

  async getPublicDatasetEntityWithOptions(request: GetPublicDatasetEntityRequest, runtime: $Util.RuntimeOptions): Promise<GetPublicDatasetEntityResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPublicDatasetEntity",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPublicDatasetEntityResponse>(await this.callApi(params, req, runtime), new GetPublicDatasetEntityResponse({}));
  }

  async getPublicDatasetEntity(request: GetPublicDatasetEntityRequest): Promise<GetPublicDatasetEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPublicDatasetEntityWithOptions(request, runtime);
  }

  async getRunWithOptions(request: GetRunRequest, runtime: $Util.RuntimeOptions): Promise<GetRunResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRun",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRunResponse>(await this.callApi(params, req, runtime), new GetRunResponse({}));
  }

  async getRun(request: GetRunRequest): Promise<GetRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRunWithOptions(request, runtime);
  }

  async getSubmissionWithOptions(request: GetSubmissionRequest, runtime: $Util.RuntimeOptions): Promise<GetSubmissionResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSubmission",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSubmissionResponse>(await this.callApi(params, req, runtime), new GetSubmissionResponse({}));
  }

  async getSubmission(request: GetSubmissionRequest): Promise<GetSubmissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSubmissionWithOptions(request, runtime);
  }

  async getTemplateWithOptions(request: GetTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.workspace)) {
      query["Workspace"] = request.workspace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTemplate",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTemplateResponse>(await this.callApi(params, req, runtime), new GetTemplateResponse({}));
  }

  async getTemplate(request: GetTemplateRequest): Promise<GetTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTemplateWithOptions(request, runtime);
  }

  async getWorkspaceWithOptions(request: GetWorkspaceRequest, runtime: $Util.RuntimeOptions): Promise<GetWorkspaceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.workspace)) {
      query["Workspace"] = request.workspace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetWorkspace",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWorkspaceResponse>(await this.callApi(params, req, runtime), new GetWorkspaceResponse({}));
  }

  async getWorkspace(request: GetWorkspaceRequest): Promise<GetWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWorkspaceWithOptions(request, runtime);
  }

  async importAppWithOptions(request: ImportAppRequest, runtime: $Util.RuntimeOptions): Promise<ImportAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.workspace)) {
      query["Workspace"] = request.workspace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ImportApp",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportAppResponse>(await this.callApi(params, req, runtime), new ImportAppResponse({}));
  }

  async importApp(request: ImportAppRequest): Promise<ImportAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importAppWithOptions(request, runtime);
  }

  async installGlobalAppWithOptions(request: InstallGlobalAppRequest, runtime: $Util.RuntimeOptions): Promise<InstallGlobalAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.installedAppName)) {
      query["InstalledAppName"] = request.installedAppName;
    }

    if (!Util.isUnset(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.workspace)) {
      query["Workspace"] = request.workspace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InstallGlobalApp",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InstallGlobalAppResponse>(await this.callApi(params, req, runtime), new InstallGlobalAppResponse({}));
  }

  async installGlobalApp(request: InstallGlobalAppRequest): Promise<InstallGlobalAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.installGlobalAppWithOptions(request, runtime);
  }

  async listAppsWithOptions(request: ListAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListAppsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!Util.isUnset(request.isReversed)) {
      query["IsReversed"] = request.isReversed;
    }

    if (!Util.isUnset(request.labelSelector)) {
      query["LabelSelector"] = request.labelSelector;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!Util.isUnset(request.search)) {
      query["Search"] = request.search;
    }

    if (!Util.isUnset(request.workspace)) {
      query["Workspace"] = request.workspace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListApps",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppsResponse>(await this.callApi(params, req, runtime), new ListAppsResponse({}));
  }

  async listApps(request: ListAppsRequest): Promise<ListAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppsWithOptions(request, runtime);
  }

  async listAuthorizedSoftwareWithOptions(request: ListAuthorizedSoftwareRequest, runtime: $Util.RuntimeOptions): Promise<ListAuthorizedSoftwareResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAuthorizedSoftware",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAuthorizedSoftwareResponse>(await this.callApi(params, req, runtime), new ListAuthorizedSoftwareResponse({}));
  }

  async listAuthorizedSoftware(request: ListAuthorizedSoftwareRequest): Promise<ListAuthorizedSoftwareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAuthorizedSoftwareWithOptions(request, runtime);
  }

  async listContainerImagesWithOptions(request: ListContainerImagesRequest, runtime: $Util.RuntimeOptions): Promise<ListContainerImagesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListContainerImages",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListContainerImagesResponse>(await this.callApi(params, req, runtime), new ListContainerImagesResponse({}));
  }

  async listContainerImages(request: ListContainerImagesRequest): Promise<ListContainerImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listContainerImagesWithOptions(request, runtime);
  }

  async listEntitiesWithOptions(request: ListEntitiesRequest, runtime: $Util.RuntimeOptions): Promise<ListEntitiesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEntities",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEntitiesResponse>(await this.callApi(params, req, runtime), new ListEntitiesResponse({}));
  }

  async listEntities(request: ListEntitiesRequest): Promise<ListEntitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEntitiesWithOptions(request, runtime);
  }

  async listEntityItemsWithOptions(request: ListEntityItemsRequest, runtime: $Util.RuntimeOptions): Promise<ListEntityItemsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!Util.isUnset(request.isReversed)) {
      query["IsReversed"] = request.isReversed;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.search)) {
      query["Search"] = request.search;
    }

    if (!Util.isUnset(request.workspace)) {
      query["Workspace"] = request.workspace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEntityItems",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEntityItemsResponse>(await this.callApi(params, req, runtime), new ListEntityItemsResponse({}));
  }

  async listEntityItems(request: ListEntityItemsRequest): Promise<ListEntityItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEntityItemsWithOptions(request, runtime);
  }

  async listGlobalAppsWithOptions(request: ListGlobalAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListGlobalAppsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGlobalApps",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListGlobalAppsResponse>(await this.callApi(params, req, runtime), new ListGlobalAppsResponse({}));
  }

  async listGlobalApps(request: ListGlobalAppsRequest): Promise<ListGlobalAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGlobalAppsWithOptions(request, runtime);
  }

  async listPublicDatasetWithOptions(request: ListPublicDatasetRequest, runtime: $Util.RuntimeOptions): Promise<ListPublicDatasetResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPublicDataset",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPublicDatasetResponse>(await this.callApi(params, req, runtime), new ListPublicDatasetResponse({}));
  }

  async listPublicDataset(request: ListPublicDatasetRequest): Promise<ListPublicDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPublicDatasetWithOptions(request, runtime);
  }

  async listPublicDatasetEntitiesWithOptions(request: ListPublicDatasetEntitiesRequest, runtime: $Util.RuntimeOptions): Promise<ListPublicDatasetEntitiesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPublicDatasetEntities",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPublicDatasetEntitiesResponse>(await this.callApi(params, req, runtime), new ListPublicDatasetEntitiesResponse({}));
  }

  async listPublicDatasetEntities(request: ListPublicDatasetEntitiesRequest): Promise<ListPublicDatasetEntitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPublicDatasetEntitiesWithOptions(request, runtime);
  }

  async listPublicDatasetEntityItemsWithOptions(request: ListPublicDatasetEntityItemsRequest, runtime: $Util.RuntimeOptions): Promise<ListPublicDatasetEntityItemsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPublicDatasetEntityItems",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPublicDatasetEntityItemsResponse>(await this.callApi(params, req, runtime), new ListPublicDatasetEntityItemsResponse({}));
  }

  async listPublicDatasetEntityItems(request: ListPublicDatasetEntityItemsRequest): Promise<ListPublicDatasetEntityItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPublicDatasetEntityItemsWithOptions(request, runtime);
  }

  async listPublicDatasetTagsWithOptions(request: ListPublicDatasetTagsRequest, runtime: $Util.RuntimeOptions): Promise<ListPublicDatasetTagsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPublicDatasetTags",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPublicDatasetTagsResponse>(await this.callApi(params, req, runtime), new ListPublicDatasetTagsResponse({}));
  }

  async listPublicDatasetTags(request: ListPublicDatasetTagsRequest): Promise<ListPublicDatasetTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPublicDatasetTagsWithOptions(request, runtime);
  }

  async listRegionsWithOptions(runtime: $Util.RuntimeOptions): Promise<ListRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListRegions",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRegionsResponse>(await this.callApi(params, req, runtime), new ListRegionsResponse({}));
  }

  async listRegions(): Promise<ListRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRegionsWithOptions(runtime);
  }

  async listRunsWithOptions(request: ListRunsRequest, runtime: $Util.RuntimeOptions): Promise<ListRunsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRuns",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRunsResponse>(await this.callApi(params, req, runtime), new ListRunsResponse({}));
  }

  async listRuns(request: ListRunsRequest): Promise<ListRunsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRunsWithOptions(request, runtime);
  }

  async listSubmissionsWithOptions(request: ListSubmissionsRequest, runtime: $Util.RuntimeOptions): Promise<ListSubmissionsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSubmissions",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSubmissionsResponse>(await this.callApi(params, req, runtime), new ListSubmissionsResponse({}));
  }

  async listSubmissions(request: ListSubmissionsRequest): Promise<ListSubmissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSubmissionsWithOptions(request, runtime);
  }

  async listTemplatesWithOptions(request: ListTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.isReversed)) {
      query["IsReversed"] = request.isReversed;
    }

    if (!Util.isUnset(request.labelSelector)) {
      query["LabelSelector"] = request.labelSelector;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.search)) {
      query["Search"] = request.search;
    }

    if (!Util.isUnset(request.workspace)) {
      query["Workspace"] = request.workspace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTemplates",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTemplatesResponse>(await this.callApi(params, req, runtime), new ListTemplatesResponse({}));
  }

  async listTemplates(request: ListTemplatesRequest): Promise<ListTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTemplatesWithOptions(request, runtime);
  }

  async listUserActiveRunsWithOptions(request: ListUserActiveRunsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserActiveRunsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserActiveRuns",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserActiveRunsResponse>(await this.callApi(params, req, runtime), new ListUserActiveRunsResponse({}));
  }

  async listUserActiveRuns(request: ListUserActiveRunsRequest): Promise<ListUserActiveRunsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserActiveRunsWithOptions(request, runtime);
  }

  async listWorkspacesWithOptions(request: ListWorkspacesRequest, runtime: $Util.RuntimeOptions): Promise<ListWorkspacesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWorkspaces",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListWorkspacesResponse>(await this.callApi(params, req, runtime), new ListWorkspacesResponse({}));
  }

  async listWorkspaces(request: ListWorkspacesRequest): Promise<ListWorkspacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWorkspacesWithOptions(request, runtime);
  }

  async resumeSubmissionWithOptions(request: ResumeSubmissionRequest, runtime: $Util.RuntimeOptions): Promise<ResumeSubmissionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.submissionId)) {
      query["SubmissionId"] = request.submissionId;
    }

    if (!Util.isUnset(request.workspace)) {
      query["Workspace"] = request.workspace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResumeSubmission",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResumeSubmissionResponse>(await this.callApi(params, req, runtime), new ResumeSubmissionResponse({}));
  }

  async resumeSubmission(request: ResumeSubmissionRequest): Promise<ResumeSubmissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeSubmissionWithOptions(request, runtime);
  }

  async tagAppWithOptions(request: TagAppRequest, runtime: $Util.RuntimeOptions): Promise<TagAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.appRevision)) {
      query["AppRevision"] = request.appRevision;
    }

    if (!Util.isUnset(request.revisionTag)) {
      query["RevisionTag"] = request.revisionTag;
    }

    if (!Util.isUnset(request.workspace)) {
      query["Workspace"] = request.workspace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagApp",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TagAppResponse>(await this.callApi(params, req, runtime), new TagAppResponse({}));
  }

  async tagApp(request: TagAppRequest): Promise<TagAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagAppWithOptions(request, runtime);
  }

  /**
    * @deprecated : UpdateEntity is deprecated, please use EasyGene::2021-03-15::UpdateEntityItems instead.
    *
    * @param tmpReq UpdateEntityRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateEntityResponse
   */
  // Deprecated
  async updateEntityWithOptions(tmpReq: UpdateEntityRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEntityResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateEntityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.entityItems)) {
      request.entityItemsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.entityItems, "EntityItems", "json");
    }

    let query = { };
    if (!Util.isUnset(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!Util.isUnset(request.workspace)) {
      query["Workspace"] = request.workspace;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.entityItemsShrink)) {
      body["EntityItems"] = request.entityItemsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateEntity",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateEntityResponse>(await this.callApi(params, req, runtime), new UpdateEntityResponse({}));
  }

  /**
    * @deprecated : UpdateEntity is deprecated, please use EasyGene::2021-03-15::UpdateEntityItems instead.
    *
    * @param request UpdateEntityRequest
    * @return UpdateEntityResponse
   */
  // Deprecated
  async updateEntity(request: UpdateEntityRequest): Promise<UpdateEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEntityWithOptions(request, runtime);
  }

  async updateEntityItemsWithOptions(tmpReq: UpdateEntityItemsRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEntityItemsResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateEntityItemsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.entityItems)) {
      request.entityItemsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.entityItems, "EntityItems", "json");
    }

    let query = { };
    if (!Util.isUnset(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!Util.isUnset(request.workspace)) {
      query["Workspace"] = request.workspace;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.entityItemsShrink)) {
      body["EntityItems"] = request.entityItemsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateEntityItems",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateEntityItemsResponse>(await this.callApi(params, req, runtime), new UpdateEntityItemsResponse({}));
  }

  async updateEntityItems(request: UpdateEntityItemsRequest): Promise<UpdateEntityItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEntityItemsWithOptions(request, runtime);
  }

  async updateTemplateWithOptions(tmpReq: UpdateTemplateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTemplateResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.inputsExpression)) {
      request.inputsExpressionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.inputsExpression, "InputsExpression", "json");
    }

    if (!Util.isUnset(tmpReq.outputsExpression)) {
      request.outputsExpressionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.outputsExpression, "OutputsExpression", "json");
    }

    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.rootEntity)) {
      query["RootEntity"] = request.rootEntity;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.workspace)) {
      query["Workspace"] = request.workspace;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.inputsExpressionShrink)) {
      body["InputsExpression"] = request.inputsExpressionShrink;
    }

    if (!Util.isUnset(request.outputsExpressionShrink)) {
      body["OutputsExpression"] = request.outputsExpressionShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTemplate",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTemplateResponse>(await this.callApi(params, req, runtime), new UpdateTemplateResponse({}));
  }

  async updateTemplate(request: UpdateTemplateRequest): Promise<UpdateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTemplateWithOptions(request, runtime);
  }

  async updateWorkspaceWithOptions(request: UpdateWorkspaceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWorkspaceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.jobLifecycle)) {
      query["JobLifecycle"] = request.jobLifecycle;
    }

    if (!Util.isUnset(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.role)) {
      query["Role"] = request.role;
    }

    if (!Util.isUnset(request.workspace)) {
      query["Workspace"] = request.workspace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWorkspace",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateWorkspaceResponse>(await this.callApi(params, req, runtime), new UpdateWorkspaceResponse({}));
  }

  async updateWorkspace(request: UpdateWorkspaceRequest): Promise<UpdateWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWorkspaceWithOptions(request, runtime);
  }

  async uploadEntityWithOptions(request: UploadEntityRequest, runtime: $Util.RuntimeOptions): Promise<UploadEntityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.entityCSVFile)) {
      query["EntityCSVFile"] = request.entityCSVFile;
    }

    if (!Util.isUnset(request.workspace)) {
      query["Workspace"] = request.workspace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadEntity",
      version: "2021-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadEntityResponse>(await this.callApi(params, req, runtime), new UploadEntityResponse({}));
  }

  async uploadEntity(request: UploadEntityRequest): Promise<UploadEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadEntityWithOptions(request, runtime);
  }

}
