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
  workspace?: string;
  runId?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      runId: 'RunId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      runId: 'string',
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
  headers: { [key: string]: string };
  body: AbortRunResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AbortRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortSubmissionRequest extends $tea.Model {
  workspace?: string;
  submissionId?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      submissionId: 'SubmissionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      submissionId: 'string',
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
  headers: { [key: string]: string };
  body: AbortSubmissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AbortSubmissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequest extends $tea.Model {
  workspace?: string;
  appName?: string;
  description?: string;
  definition?: string;
  language?: string;
  languageVersion?: string;
  appType?: string;
  documentation?: string;
  revisionComment?: string;
  labels?: string;
  clientToken?: string;
  dependencies?: CreateAppRequestDependencies[];
  configs?: CreateAppRequestConfigs[];
  path?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      appName: 'AppName',
      description: 'Description',
      definition: 'Definition',
      language: 'Language',
      languageVersion: 'LanguageVersion',
      appType: 'AppType',
      documentation: 'Documentation',
      revisionComment: 'RevisionComment',
      labels: 'Labels',
      clientToken: 'ClientToken',
      dependencies: 'Dependencies',
      configs: 'Configs',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      appName: 'string',
      description: 'string',
      definition: 'string',
      language: 'string',
      languageVersion: 'string',
      appType: 'string',
      documentation: 'string',
      revisionComment: 'string',
      labels: 'string',
      clientToken: 'string',
      dependencies: { 'type': 'array', 'itemType': CreateAppRequestDependencies },
      configs: { 'type': 'array', 'itemType': CreateAppRequestConfigs },
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppShrinkRequest extends $tea.Model {
  workspace?: string;
  appName?: string;
  description?: string;
  definition?: string;
  language?: string;
  languageVersion?: string;
  appType?: string;
  documentation?: string;
  revisionComment?: string;
  labels?: string;
  clientToken?: string;
  dependenciesShrink?: string;
  configsShrink?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      appName: 'AppName',
      description: 'Description',
      definition: 'Definition',
      language: 'Language',
      languageVersion: 'LanguageVersion',
      appType: 'AppType',
      documentation: 'Documentation',
      revisionComment: 'RevisionComment',
      labels: 'Labels',
      clientToken: 'ClientToken',
      dependenciesShrink: 'Dependencies',
      configsShrink: 'Configs',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      appName: 'string',
      description: 'string',
      definition: 'string',
      language: 'string',
      languageVersion: 'string',
      appType: 'string',
      documentation: 'string',
      revisionComment: 'string',
      labels: 'string',
      clientToken: 'string',
      dependenciesShrink: 'string',
      configsShrink: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBody extends $tea.Model {
  workspace?: string;
  appName?: string;
  hostId?: string;
  requestId?: string;
  revision?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      appName: 'AppName',
      hostId: 'HostId',
      requestId: 'RequestId',
      revision: 'Revision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      appName: 'string',
      hostId: 'string',
      requestId: 'string',
      revision: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEntityRequest extends $tea.Model {
  workspace?: string;
  entityType?: string;
  entityItems?: CreateEntityRequestEntityItems[];
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      entityType: 'EntityType',
      entityItems: 'EntityItems',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      entityType: 'string',
      entityItems: { 'type': 'array', 'itemType': CreateEntityRequestEntityItems },
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEntityShrinkRequest extends $tea.Model {
  workspace?: string;
  entityType?: string;
  entityItemsShrink?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      entityType: 'EntityType',
      entityItemsShrink: 'EntityItems',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      entityType: 'string',
      entityItemsShrink: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEntityResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  workspace?: string;
  entityType?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
      workspace: 'Workspace',
      entityType: 'EntityType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
      workspace: 'string',
      entityType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEntityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateEntityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRunRequest extends $tea.Model {
  workspace?: string;
  name?: string;
  appName?: string;
  revision?: string;
  description?: string;
  labels?: string;
  executeOptions?: string;
  executeDirectory?: string;
  outputFolder?: string;
  defaultRuntime?: string;
  inputs?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      name: 'Name',
      appName: 'AppName',
      revision: 'Revision',
      description: 'Description',
      labels: 'Labels',
      executeOptions: 'ExecuteOptions',
      executeDirectory: 'ExecuteDirectory',
      outputFolder: 'OutputFolder',
      defaultRuntime: 'DefaultRuntime',
      inputs: 'Inputs',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      name: 'string',
      appName: 'string',
      revision: 'string',
      description: 'string',
      labels: 'string',
      executeOptions: 'string',
      executeDirectory: 'string',
      outputFolder: 'string',
      defaultRuntime: 'string',
      inputs: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRunResponseBody extends $tea.Model {
  requestId?: string;
  hostId?: string;
  workspace?: string;
  runId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      hostId: 'HostId',
      workspace: 'Workspace',
      runId: 'RunId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      hostId: 'string',
      workspace: 'string',
      runId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRunResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRunResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubmissionRequest extends $tea.Model {
  workspace?: string;
  appName?: string;
  revision?: string;
  entityType?: string;
  entityNames?: string[];
  executeOptions?: string;
  executeDirectory?: string;
  outputFolder?: string;
  defaultRuntime?: string;
  inputs?: string;
  outputs?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      appName: 'AppName',
      revision: 'Revision',
      entityType: 'EntityType',
      entityNames: 'EntityNames',
      executeOptions: 'ExecuteOptions',
      executeDirectory: 'ExecuteDirectory',
      outputFolder: 'OutputFolder',
      defaultRuntime: 'DefaultRuntime',
      inputs: 'Inputs',
      outputs: 'Outputs',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      appName: 'string',
      revision: 'string',
      entityType: 'string',
      entityNames: { 'type': 'array', 'itemType': 'string' },
      executeOptions: 'string',
      executeDirectory: 'string',
      outputFolder: 'string',
      defaultRuntime: 'string',
      inputs: 'string',
      outputs: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubmissionShrinkRequest extends $tea.Model {
  workspace?: string;
  appName?: string;
  revision?: string;
  entityType?: string;
  entityNamesShrink?: string;
  executeOptions?: string;
  executeDirectory?: string;
  outputFolder?: string;
  defaultRuntime?: string;
  inputs?: string;
  outputs?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      appName: 'AppName',
      revision: 'Revision',
      entityType: 'EntityType',
      entityNamesShrink: 'EntityNames',
      executeOptions: 'ExecuteOptions',
      executeDirectory: 'ExecuteDirectory',
      outputFolder: 'OutputFolder',
      defaultRuntime: 'DefaultRuntime',
      inputs: 'Inputs',
      outputs: 'Outputs',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      appName: 'string',
      revision: 'string',
      entityType: 'string',
      entityNamesShrink: 'string',
      executeOptions: 'string',
      executeDirectory: 'string',
      outputFolder: 'string',
      defaultRuntime: 'string',
      inputs: 'string',
      outputs: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubmissionResponseBody extends $tea.Model {
  requestId?: string;
  hostId?: string;
  workspace?: string;
  submissionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      hostId: 'HostId',
      workspace: 'Workspace',
      submissionId: 'SubmissionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      hostId: 'string',
      workspace: 'string',
      submissionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubmissionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSubmissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSubmissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateRequest extends $tea.Model {
  workspace?: string;
  templateName?: string;
  description?: string;
  appName?: string;
  revision?: string;
  rootEntity?: string;
  inputs?: CreateTemplateRequestInputs[];
  outputs?: CreateTemplateRequestOutputs[];
  labels?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      templateName: 'TemplateName',
      description: 'Description',
      appName: 'AppName',
      revision: 'Revision',
      rootEntity: 'RootEntity',
      inputs: 'Inputs',
      outputs: 'Outputs',
      labels: 'Labels',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      templateName: 'string',
      description: 'string',
      appName: 'string',
      revision: 'string',
      rootEntity: 'string',
      inputs: { 'type': 'array', 'itemType': CreateTemplateRequestInputs },
      outputs: { 'type': 'array', 'itemType': CreateTemplateRequestOutputs },
      labels: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateShrinkRequest extends $tea.Model {
  workspace?: string;
  templateName?: string;
  description?: string;
  appName?: string;
  revision?: string;
  rootEntity?: string;
  inputsShrink?: string;
  outputsShrink?: string;
  labels?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      templateName: 'TemplateName',
      description: 'Description',
      appName: 'AppName',
      revision: 'Revision',
      rootEntity: 'RootEntity',
      inputsShrink: 'Inputs',
      outputsShrink: 'Outputs',
      labels: 'Labels',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      templateName: 'string',
      description: 'string',
      appName: 'string',
      revision: 'string',
      rootEntity: 'string',
      inputsShrink: 'string',
      outputsShrink: 'string',
      labels: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateResponseBody extends $tea.Model {
  workspace?: string;
  templateName?: string;
  hostId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      templateName: 'TemplateName',
      hostId: 'HostId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      templateName: 'string',
      hostId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceRequest extends $tea.Model {
  workspace?: string;
  description?: string;
  clientToken?: string;
  ossRoot?: string;
  jobLifecycle?: number;
  role?: string;
  labels?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      description: 'Description',
      clientToken: 'ClientToken',
      ossRoot: 'OssRoot',
      jobLifecycle: 'JobLifecycle',
      role: 'Role',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      description: 'string',
      clientToken: 'string',
      ossRoot: 'string',
      jobLifecycle: 'number',
      role: 'string',
      labels: 'string',
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

export class DeleteAppRequest extends $tea.Model {
  workspace?: string;
  appName?: string;
  revision?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      appName: 'AppName',
      revision: 'Revision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      appName: 'string',
      revision: 'string',
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
  headers: { [key: string]: string };
  body: DeleteAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEntityItemsRequest extends $tea.Model {
  workspace?: string;
  entityType?: string;
  entityNames?: string[];
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      entityType: 'EntityType',
      entityNames: 'EntityNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      entityType: 'string',
      entityNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEntityItemsShrinkRequest extends $tea.Model {
  workspace?: string;
  entityType?: string;
  entityNamesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      entityType: 'EntityType',
      entityNamesShrink: 'EntityNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      entityType: 'string',
      entityNamesShrink: 'string',
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
  headers: { [key: string]: string };
  body: DeleteEntityItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteEntityItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRunRequest extends $tea.Model {
  workspace?: string;
  runId?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      runId: 'RunId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      runId: 'string',
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
  headers: { [key: string]: string };
  body: DeleteRunResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubmissionRequest extends $tea.Model {
  workspace?: string;
  submissionId?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      submissionId: 'SubmissionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      submissionId: 'string',
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
  headers: { [key: string]: string };
  body: DeleteSubmissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSubmissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateRequest extends $tea.Model {
  workspace?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      templateName: 'string',
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
  headers: { [key: string]: string };
  body: DeleteTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: DeleteWorkspaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteWorkspaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadEntityRequest extends $tea.Model {
  workspace?: string;
  entityType?: string;
  entityNames?: string[];
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      entityType: 'EntityType',
      entityNames: 'EntityNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      entityType: 'string',
      entityNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadEntityShrinkRequest extends $tea.Model {
  workspace?: string;
  entityType?: string;
  entityNamesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      entityType: 'EntityType',
      entityNamesShrink: 'EntityNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      entityType: 'string',
      entityNamesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadEntityResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  entityTSVFile?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
      entityTSVFile: 'EntityTSVFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
      entityTSVFile: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadEntityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DownloadEntityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DownloadEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppRequest extends $tea.Model {
  workspace?: string;
  appName?: string;
  revision?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      appName: 'AppName',
      revision: 'Revision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      appName: 'string',
      revision: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBody extends $tea.Model {
  workflowName?: string;
  appName?: string;
  createTime?: string;
  definition?: string;
  description?: string;
  documentation?: string;
  hostId?: string;
  inputs?: GetAppResponseBodyInputs[];
  labels?: { [key: string]: string };
  language?: string;
  languageVersion?: string;
  lastModifiedTime?: string;
  outputs?: GetAppResponseBodyOutputs[];
  requestId?: string;
  revision?: string;
  revisionComment?: string;
  revisions?: GetAppResponseBodyRevisions[];
  scope?: string;
  URL?: string;
  workspace?: string;
  source?: string;
  namespace?: string;
  appOrigName?: string;
  appType?: string;
  dependencies?: GetAppResponseBodyDependencies[];
  configs?: GetAppResponseBodyConfigs[];
  path?: string;
  static names(): { [key: string]: string } {
    return {
      workflowName: 'WorkflowName',
      appName: 'AppName',
      createTime: 'CreateTime',
      definition: 'Definition',
      description: 'Description',
      documentation: 'Documentation',
      hostId: 'HostId',
      inputs: 'Inputs',
      labels: 'Labels',
      language: 'Language',
      languageVersion: 'LanguageVersion',
      lastModifiedTime: 'LastModifiedTime',
      outputs: 'Outputs',
      requestId: 'RequestId',
      revision: 'Revision',
      revisionComment: 'RevisionComment',
      revisions: 'Revisions',
      scope: 'Scope',
      URL: 'URL',
      workspace: 'Workspace',
      source: 'Source',
      namespace: 'Namespace',
      appOrigName: 'AppOrigName',
      appType: 'AppType',
      dependencies: 'Dependencies',
      configs: 'Configs',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workflowName: 'string',
      appName: 'string',
      createTime: 'string',
      definition: 'string',
      description: 'string',
      documentation: 'string',
      hostId: 'string',
      inputs: { 'type': 'array', 'itemType': GetAppResponseBodyInputs },
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      language: 'string',
      languageVersion: 'string',
      lastModifiedTime: 'string',
      outputs: { 'type': 'array', 'itemType': GetAppResponseBodyOutputs },
      requestId: 'string',
      revision: 'string',
      revisionComment: 'string',
      revisions: { 'type': 'array', 'itemType': GetAppResponseBodyRevisions },
      scope: 'string',
      URL: 'string',
      workspace: 'string',
      source: 'string',
      namespace: 'string',
      appOrigName: 'string',
      appType: 'string',
      dependencies: { 'type': 'array', 'itemType': GetAppResponseBodyDependencies },
      configs: { 'type': 'array', 'itemType': GetAppResponseBodyConfigs },
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEntityRequest extends $tea.Model {
  workspace?: string;
  entityType?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      entityType: 'EntityType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      entityType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEntityResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  workspace?: string;
  entityType?: string;
  attributes?: string[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
      workspace: 'Workspace',
      entityType: 'EntityType',
      attributes: 'Attributes',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
      workspace: 'string',
      entityType: 'string',
      attributes: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEntityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetEntityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGlobalAppRequest extends $tea.Model {
  attributes?: string;
  namespaceName?: string;
  appName?: string;
  appVersion?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      namespaceName: 'NamespaceName',
      appName: 'AppName',
      appVersion: 'AppVersion',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: 'string',
      namespaceName: 'string',
      appName: 'string',
      appVersion: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGlobalAppResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  dynamicCode?: string;
  lastModified?: string;
  namespaceName?: string;
  appScope?: string;
  appName?: string;
  regionIds?: string[];
  appVersion?: string;
  appType?: string;
  appFee?: string;
  appDescription?: string;
  categories?: string[];
  toolkit?: string;
  contact?: string;
  links?: string[];
  appVersions?: GetGlobalAppResponseBodyAppVersions[];
  appDefaultVersion?: string;
  appDescriptorType?: string;
  appDescriptorFiles?: GetGlobalAppResponseBodyAppDescriptorFiles[];
  document?: string;
  comment?: string;
  DAG?: string;
  dynamicMessage?: string;
  code?: string;
  hostId?: string;
  pinned?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      dynamicCode: 'DynamicCode',
      lastModified: 'LastModified',
      namespaceName: 'NamespaceName',
      appScope: 'AppScope',
      appName: 'AppName',
      regionIds: 'RegionIds',
      appVersion: 'AppVersion',
      appType: 'AppType',
      appFee: 'AppFee',
      appDescription: 'AppDescription',
      categories: 'Categories',
      toolkit: 'Toolkit',
      contact: 'Contact',
      links: 'Links',
      appVersions: 'AppVersions',
      appDefaultVersion: 'AppDefaultVersion',
      appDescriptorType: 'AppDescriptorType',
      appDescriptorFiles: 'AppDescriptorFiles',
      document: 'Document',
      comment: 'Comment',
      DAG: 'DAG',
      dynamicMessage: 'DynamicMessage',
      code: 'Code',
      hostId: 'HostId',
      pinned: 'Pinned',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      dynamicCode: 'string',
      lastModified: 'string',
      namespaceName: 'string',
      appScope: 'string',
      appName: 'string',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      appVersion: 'string',
      appType: 'string',
      appFee: 'string',
      appDescription: 'string',
      categories: { 'type': 'array', 'itemType': 'string' },
      toolkit: 'string',
      contact: 'string',
      links: { 'type': 'array', 'itemType': 'string' },
      appVersions: { 'type': 'array', 'itemType': GetGlobalAppResponseBodyAppVersions },
      appDefaultVersion: 'string',
      appDescriptorType: 'string',
      appDescriptorFiles: { 'type': 'array', 'itemType': GetGlobalAppResponseBodyAppDescriptorFiles },
      document: 'string',
      comment: 'string',
      DAG: 'string',
      dynamicMessage: 'string',
      code: 'string',
      hostId: 'string',
      pinned: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGlobalAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetGlobalAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetGlobalAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicDatasetRequest extends $tea.Model {
  datasetName?: string;
  attributes?: string[];
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      attributes: 'Attributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      attributes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicDatasetShrinkRequest extends $tea.Model {
  datasetName?: string;
  attributesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      attributesShrink: 'Attributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      attributesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicDatasetResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  httpCode?: number;
  code?: string;
  message?: string;
  success?: boolean;
  datasetDescription?: string;
  copyright?: string;
  accessRequirements?: string;
  about?: string;
  tags?: string[];
  datasetName?: string;
  updateFrequency?: string;
  regionIds?: string[];
  lastModified?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
      httpCode: 'HttpCode',
      code: 'Code',
      message: 'Message',
      success: 'Success',
      datasetDescription: 'DatasetDescription',
      copyright: 'Copyright',
      accessRequirements: 'AccessRequirements',
      about: 'About',
      tags: 'Tags',
      datasetName: 'DatasetName',
      updateFrequency: 'UpdateFrequency',
      regionIds: 'RegionIds',
      lastModified: 'LastModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
      httpCode: 'number',
      code: 'string',
      message: 'string',
      success: 'boolean',
      datasetDescription: 'string',
      copyright: 'string',
      accessRequirements: 'string',
      about: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      datasetName: 'string',
      updateFrequency: 'string',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      lastModified: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicDatasetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPublicDatasetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      entityType: 'EntityType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      entityType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicDatasetEntityResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  httpCode?: number;
  code?: string;
  message?: string;
  datasetName?: string;
  entityType?: string;
  attributes?: string[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
      httpCode: 'HttpCode',
      code: 'Code',
      message: 'Message',
      datasetName: 'DatasetName',
      entityType: 'EntityType',
      attributes: 'Attributes',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
      httpCode: 'number',
      code: 'string',
      message: 'string',
      datasetName: 'string',
      entityType: 'string',
      attributes: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicDatasetEntityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPublicDatasetEntityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPublicDatasetEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunRequest extends $tea.Model {
  workspace?: string;
  runId?: string;
  attributes?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      runId: 'RunId',
      attributes: 'Attributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      runId: 'string',
      attributes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunResponseBody extends $tea.Model {
  requestId?: string;
  hostId?: string;
  workspace?: string;
  runId?: string;
  name?: string;
  submissionId?: string;
  source?: string;
  namespace?: string;
  appOrigName?: string;
  appName?: string;
  revision?: string;
  entityType?: string;
  entityName?: string;
  user?: string;
  status?: string;
  createTime?: string;
  startTime?: string;
  endTime?: string;
  executeOptions?: GetRunResponseBodyExecuteOptions;
  inputs?: string;
  outputs?: string;
  labels?: { [key: string]: string };
  outputFolder?: string;
  executeDirectory?: string;
  defaultRuntime?: string;
  description?: string;
  timing?: string;
  calls?: string;
  failures?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      hostId: 'HostId',
      workspace: 'Workspace',
      runId: 'RunId',
      name: 'Name',
      submissionId: 'SubmissionId',
      source: 'Source',
      namespace: 'Namespace',
      appOrigName: 'AppOrigName',
      appName: 'AppName',
      revision: 'Revision',
      entityType: 'EntityType',
      entityName: 'EntityName',
      user: 'User',
      status: 'Status',
      createTime: 'CreateTime',
      startTime: 'StartTime',
      endTime: 'EndTime',
      executeOptions: 'ExecuteOptions',
      inputs: 'Inputs',
      outputs: 'Outputs',
      labels: 'Labels',
      outputFolder: 'OutputFolder',
      executeDirectory: 'ExecuteDirectory',
      defaultRuntime: 'DefaultRuntime',
      description: 'Description',
      timing: 'Timing',
      calls: 'Calls',
      failures: 'Failures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      hostId: 'string',
      workspace: 'string',
      runId: 'string',
      name: 'string',
      submissionId: 'string',
      source: 'string',
      namespace: 'string',
      appOrigName: 'string',
      appName: 'string',
      revision: 'string',
      entityType: 'string',
      entityName: 'string',
      user: 'string',
      status: 'string',
      createTime: 'string',
      startTime: 'string',
      endTime: 'string',
      executeOptions: GetRunResponseBodyExecuteOptions,
      inputs: 'string',
      outputs: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      outputFolder: 'string',
      executeDirectory: 'string',
      defaultRuntime: 'string',
      description: 'string',
      timing: 'string',
      calls: 'string',
      failures: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRunResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubmissionRequest extends $tea.Model {
  workspace?: string;
  submissionId?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      submissionId: 'SubmissionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      submissionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubmissionResponseBody extends $tea.Model {
  requestId?: string;
  hostId?: string;
  submission?: GetSubmissionResponseBodySubmission;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      hostId: 'HostId',
      submission: 'Submission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      hostId: 'string',
      submission: GetSubmissionResponseBodySubmission,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubmissionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSubmissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSubmissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateRequest extends $tea.Model {
  workspace?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBody extends $tea.Model {
  templateName?: string;
  createTime?: string;
  description?: string;
  appName?: string;
  revision?: string;
  hostId?: string;
  inputs?: GetTemplateResponseBodyInputs[];
  labels?: { [key: string]: string };
  lastModifiedTime?: string;
  outputs?: GetTemplateResponseBodyOutputs[];
  requestId?: string;
  source?: string;
  workspace?: string;
  rootEntity?: string;
  static names(): { [key: string]: string } {
    return {
      templateName: 'TemplateName',
      createTime: 'CreateTime',
      description: 'Description',
      appName: 'AppName',
      revision: 'Revision',
      hostId: 'HostId',
      inputs: 'Inputs',
      labels: 'Labels',
      lastModifiedTime: 'LastModifiedTime',
      outputs: 'Outputs',
      requestId: 'RequestId',
      source: 'Source',
      workspace: 'Workspace',
      rootEntity: 'RootEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateName: 'string',
      createTime: 'string',
      description: 'string',
      appName: 'string',
      revision: 'string',
      hostId: 'string',
      inputs: { 'type': 'array', 'itemType': GetTemplateResponseBodyInputs },
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      lastModifiedTime: 'string',
      outputs: { 'type': 'array', 'itemType': GetTemplateResponseBodyOutputs },
      requestId: 'string',
      source: 'string',
      workspace: 'string',
      rootEntity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  description?: string;
  hostId?: string;
  jobLifecycle?: number;
  labels?: { [key: string]: string };
  ossRoot?: string;
  bucketName?: string;
  role?: string;
  createTime?: string;
  lastModifiedTime?: string;
  workspace?: string;
  status?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      description: 'Description',
      hostId: 'HostId',
      jobLifecycle: 'JobLifecycle',
      labels: 'Labels',
      ossRoot: 'OssRoot',
      bucketName: 'BucketName',
      role: 'Role',
      createTime: 'CreateTime',
      lastModifiedTime: 'LastModifiedTime',
      workspace: 'Workspace',
      status: 'Status',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      description: 'string',
      hostId: 'string',
      jobLifecycle: 'number',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      ossRoot: 'string',
      bucketName: 'string',
      role: 'string',
      createTime: 'string',
      lastModifiedTime: 'string',
      workspace: 'string',
      status: 'string',
      regionId: 'string',
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

export class InstallGlobalAppRequest extends $tea.Model {
  source?: string;
  namespaceName?: string;
  appName?: string;
  workspace?: string;
  installedAppName?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      namespaceName: 'NamespaceName',
      appName: 'AppName',
      workspace: 'Workspace',
      installedAppName: 'InstalledAppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      namespaceName: 'string',
      appName: 'string',
      workspace: 'string',
      installedAppName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallGlobalAppResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  installedAppName?: string;
  workspace?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
      installedAppName: 'InstalledAppName',
      workspace: 'Workspace',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
      installedAppName: 'string',
      workspace: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallGlobalAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InstallGlobalAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InstallGlobalAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsRequest extends $tea.Model {
  workspace?: string;
  nextToken?: string;
  maxResults?: number;
  orderBy?: string;
  isReversed?: boolean;
  labelSelector?: string;
  scope?: string;
  language?: string;
  appType?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      orderBy: 'OrderBy',
      isReversed: 'IsReversed',
      labelSelector: 'LabelSelector',
      scope: 'Scope',
      language: 'Language',
      appType: 'AppType',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      nextToken: 'string',
      maxResults: 'number',
      orderBy: 'string',
      isReversed: 'boolean',
      labelSelector: 'string',
      scope: 'string',
      language: 'string',
      appType: 'string',
      name: 'string',
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
  headers: { [key: string]: string };
  body: ListAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizedSoftwareRequest extends $tea.Model {
  region?: string;
  search?: string;
  orderBy?: string;
  isReversed?: boolean;
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      search: 'Search',
      orderBy: 'OrderBy',
      isReversed: 'IsReversed',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      search: 'string',
      orderBy: 'string',
      isReversed: 'boolean',
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizedSoftwareResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  httpCode?: number;
  code?: string;
  message?: string;
  success?: boolean;
  dynamicCode?: string;
  dynamicMessage?: string;
  nextToken?: string;
  maxResults?: number;
  totalCount?: number;
  softwares?: ListAuthorizedSoftwareResponseBodySoftwares[];
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
      httpCode: 'HttpCode',
      code: 'Code',
      message: 'Message',
      success: 'Success',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      totalCount: 'TotalCount',
      softwares: 'Softwares',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
      httpCode: 'number',
      code: 'string',
      message: 'string',
      success: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      nextToken: 'string',
      maxResults: 'number',
      totalCount: 'number',
      softwares: { 'type': 'array', 'itemType': ListAuthorizedSoftwareResponseBodySoftwares },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizedSoftwareResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAuthorizedSoftwareResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAuthorizedSoftwareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContainerImagesRequest extends $tea.Model {
  region?: string;
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContainerImagesResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  httpCode?: number;
  code?: string;
  message?: string;
  success?: boolean;
  nextToken?: string;
  maxResults?: number;
  totalCount?: number;
  containerImages?: ListContainerImagesResponseBodyContainerImages[];
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
      httpCode: 'HttpCode',
      code: 'Code',
      message: 'Message',
      success: 'Success',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      totalCount: 'TotalCount',
      containerImages: 'ContainerImages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
      httpCode: 'number',
      code: 'string',
      message: 'string',
      success: 'boolean',
      nextToken: 'string',
      maxResults: 'number',
      totalCount: 'number',
      containerImages: { 'type': 'array', 'itemType': ListContainerImagesResponseBodyContainerImages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContainerImagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListContainerImagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListContainerImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntitiesRequest extends $tea.Model {
  workspace?: string;
  nextToken?: string;
  maxResults?: number;
  orderBy?: string;
  isReversed?: boolean;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      orderBy: 'OrderBy',
      isReversed: 'IsReversed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      nextToken: 'string',
      maxResults: 'number',
      orderBy: 'string',
      isReversed: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntitiesResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  nextToken?: string;
  maxResults?: number;
  totalCount?: number;
  entities?: ListEntitiesResponseBodyEntities[];
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      totalCount: 'TotalCount',
      entities: 'Entities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
      nextToken: 'string',
      maxResults: 'number',
      totalCount: 'number',
      entities: { 'type': 'array', 'itemType': ListEntitiesResponseBodyEntities },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntitiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListEntitiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListEntitiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntityItemsRequest extends $tea.Model {
  workspace?: string;
  entityType?: string;
  search?: string;
  orderBy?: string;
  isReversed?: boolean;
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      entityType: 'EntityType',
      search: 'Search',
      orderBy: 'OrderBy',
      isReversed: 'IsReversed',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      entityType: 'string',
      search: 'string',
      orderBy: 'string',
      isReversed: 'boolean',
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntityItemsResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  maxResults?: number;
  nextToken?: string;
  totalCount?: number;
  entityItems?: ListEntityItemsResponseBodyEntityItems[];
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
      entityItems: 'EntityItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
      entityItems: { 'type': 'array', 'itemType': ListEntityItemsResponseBodyEntityItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntityItemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListEntityItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListEntityItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGlobalAppsRequest extends $tea.Model {
  search?: string;
  orderBy?: string;
  isReversed?: boolean;
  nextToken?: string;
  maxResults?: number;
  appScope?: string;
  category?: string;
  toolkit?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      search: 'Search',
      orderBy: 'OrderBy',
      isReversed: 'IsReversed',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      appScope: 'AppScope',
      category: 'Category',
      toolkit: 'Toolkit',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      search: 'string',
      orderBy: 'string',
      isReversed: 'boolean',
      nextToken: 'string',
      maxResults: 'number',
      appScope: 'string',
      category: 'string',
      toolkit: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGlobalAppsResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  dynamicCode?: string;
  globalApps?: ListGlobalAppsResponseBodyGlobalApps[];
  nextToken?: string;
  maxResults?: number;
  totalCount?: number;
  dynamicMessage?: string;
  code?: string;
  success?: boolean;
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      dynamicCode: 'DynamicCode',
      globalApps: 'GlobalApps',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      totalCount: 'TotalCount',
      dynamicMessage: 'DynamicMessage',
      code: 'Code',
      success: 'Success',
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      dynamicCode: 'string',
      globalApps: { 'type': 'array', 'itemType': ListGlobalAppsResponseBodyGlobalApps },
      nextToken: 'string',
      maxResults: 'number',
      totalCount: 'number',
      dynamicMessage: 'string',
      code: 'string',
      success: 'boolean',
      hostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGlobalAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListGlobalAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListGlobalAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicDatasetRequest extends $tea.Model {
  search?: string;
  tag?: string;
  orderBy?: string;
  isReversed?: boolean;
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      search: 'Search',
      tag: 'Tag',
      orderBy: 'OrderBy',
      isReversed: 'IsReversed',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      search: 'string',
      tag: 'string',
      orderBy: 'string',
      isReversed: 'boolean',
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicDatasetResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  httpCode?: number;
  code?: string;
  message?: string;
  success?: boolean;
  nextToken?: string;
  maxResults?: number;
  totalCount?: number;
  datasets?: ListPublicDatasetResponseBodyDatasets[];
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
      httpCode: 'HttpCode',
      code: 'Code',
      message: 'Message',
      success: 'Success',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      totalCount: 'TotalCount',
      datasets: 'Datasets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
      httpCode: 'number',
      code: 'string',
      message: 'string',
      success: 'boolean',
      nextToken: 'string',
      maxResults: 'number',
      totalCount: 'number',
      datasets: { 'type': 'array', 'itemType': ListPublicDatasetResponseBodyDatasets },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicDatasetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPublicDatasetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPublicDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicDatasetEntitiesRequest extends $tea.Model {
  datasetName?: string;
  orderBy?: string;
  isReversed?: boolean;
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      orderBy: 'OrderBy',
      isReversed: 'IsReversed',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      orderBy: 'string',
      isReversed: 'boolean',
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicDatasetEntitiesResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  httpCode?: number;
  code?: string;
  message?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  nextToken?: string;
  maxResults?: number;
  totalCount?: number;
  datasetName?: string;
  entities?: ListPublicDatasetEntitiesResponseBodyEntities[];
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
      httpCode: 'HttpCode',
      code: 'Code',
      message: 'Message',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      totalCount: 'TotalCount',
      datasetName: 'DatasetName',
      entities: 'Entities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
      httpCode: 'number',
      code: 'string',
      message: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      nextToken: 'string',
      maxResults: 'number',
      totalCount: 'number',
      datasetName: 'string',
      entities: { 'type': 'array', 'itemType': ListPublicDatasetEntitiesResponseBodyEntities },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicDatasetEntitiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPublicDatasetEntitiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  search?: string;
  orderBy?: string;
  isReversed?: boolean;
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      entityType: 'EntityType',
      search: 'Search',
      orderBy: 'OrderBy',
      isReversed: 'IsReversed',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      entityType: 'string',
      search: 'string',
      orderBy: 'string',
      isReversed: 'boolean',
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicDatasetEntityItemsResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  httpCode?: number;
  code?: string;
  message?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  nextToken?: string;
  maxResults?: number;
  totalCount?: number;
  datasetName?: string;
  entityItems?: ListPublicDatasetEntityItemsResponseBodyEntityItems[];
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
      httpCode: 'HttpCode',
      code: 'Code',
      message: 'Message',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      totalCount: 'TotalCount',
      datasetName: 'DatasetName',
      entityItems: 'EntityItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
      httpCode: 'number',
      code: 'string',
      message: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      nextToken: 'string',
      maxResults: 'number',
      totalCount: 'number',
      datasetName: 'string',
      entityItems: { 'type': 'array', 'itemType': ListPublicDatasetEntityItemsResponseBodyEntityItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicDatasetEntityItemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPublicDatasetEntityItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPublicDatasetEntityItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicDatasetTagsRequest extends $tea.Model {
  search?: string;
  orderBy?: string;
  isReversed?: boolean;
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      search: 'Search',
      orderBy: 'OrderBy',
      isReversed: 'IsReversed',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      search: 'string',
      orderBy: 'string',
      isReversed: 'boolean',
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicDatasetTagsResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  httpCode?: number;
  code?: string;
  message?: string;
  success?: boolean;
  nextToken?: string;
  maxResults?: number;
  totalCount?: number;
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
      httpCode: 'HttpCode',
      code: 'Code',
      message: 'Message',
      success: 'Success',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      totalCount: 'TotalCount',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
      httpCode: 'number',
      code: 'string',
      message: 'string',
      success: 'boolean',
      nextToken: 'string',
      maxResults: 'number',
      totalCount: 'number',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicDatasetTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPublicDatasetTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPublicDatasetTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  code?: string;
  message?: string;
  success?: boolean;
  regions?: ListRegionsResponseBodyRegions[];
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      success: 'Success',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
      code: 'string',
      message: 'string',
      success: 'boolean',
      regions: { 'type': 'array', 'itemType': ListRegionsResponseBodyRegions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunsRequest extends $tea.Model {
  workspace?: string;
  name?: string;
  status?: string;
  submissionId?: string;
  search?: string;
  labelSelector?: string;
  appName?: string;
  nextToken?: string;
  maxResults?: number;
  orderBy?: string;
  isReversed?: boolean;
  getTotal?: boolean;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      name: 'Name',
      status: 'Status',
      submissionId: 'SubmissionId',
      search: 'Search',
      labelSelector: 'LabelSelector',
      appName: 'AppName',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      orderBy: 'OrderBy',
      isReversed: 'IsReversed',
      getTotal: 'GetTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      name: 'string',
      status: 'string',
      submissionId: 'string',
      search: 'string',
      labelSelector: 'string',
      appName: 'string',
      nextToken: 'string',
      maxResults: 'number',
      orderBy: 'string',
      isReversed: 'boolean',
      getTotal: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunsResponseBody extends $tea.Model {
  requestId?: string;
  hostId?: string;
  maxResults?: number;
  nextToken?: string;
  totalCount?: number;
  runs?: ListRunsResponseBodyRuns[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      hostId: 'HostId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
      runs: 'Runs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      hostId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
      runs: { 'type': 'array', 'itemType': ListRunsResponseBodyRuns },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRunsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRunsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubmissionsRequest extends $tea.Model {
  workspace?: string;
  status?: string;
  search?: string;
  nextToken?: string;
  maxResults?: number;
  orderBy?: string;
  isReversed?: boolean;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      status: 'Status',
      search: 'Search',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      orderBy: 'OrderBy',
      isReversed: 'IsReversed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      status: 'string',
      search: 'string',
      nextToken: 'string',
      maxResults: 'number',
      orderBy: 'string',
      isReversed: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubmissionsResponseBody extends $tea.Model {
  requestId?: string;
  hostId?: string;
  maxResults?: number;
  nextToken?: string;
  totalCount?: number;
  submissions?: ListSubmissionsResponseBodySubmissions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      hostId: 'HostId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
      submissions: 'Submissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      hostId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
      submissions: { 'type': 'array', 'itemType': ListSubmissionsResponseBodySubmissions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubmissionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSubmissionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSubmissionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesRequest extends $tea.Model {
  workspace?: string;
  nextToken?: string;
  maxResults?: number;
  orderBy?: string;
  isReversed?: boolean;
  labelSelector?: string;
  search?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      orderBy: 'OrderBy',
      isReversed: 'IsReversed',
      labelSelector: 'LabelSelector',
      search: 'Search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      nextToken: 'string',
      maxResults: 'number',
      orderBy: 'string',
      isReversed: 'boolean',
      labelSelector: 'string',
      search: 'string',
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
  headers: { [key: string]: string };
  body: ListTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserActiveRunsRequest extends $tea.Model {
  workspace?: string;
  name?: string;
  status?: string;
  submissionId?: string;
  search?: string;
  labelSelector?: string;
  appName?: string;
  nextToken?: string;
  maxResults?: number;
  orderBy?: string;
  isReversed?: boolean;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      name: 'Name',
      status: 'Status',
      submissionId: 'SubmissionId',
      search: 'Search',
      labelSelector: 'LabelSelector',
      appName: 'AppName',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      orderBy: 'OrderBy',
      isReversed: 'IsReversed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      name: 'string',
      status: 'string',
      submissionId: 'string',
      search: 'string',
      labelSelector: 'string',
      appName: 'string',
      nextToken: 'string',
      maxResults: 'number',
      orderBy: 'string',
      isReversed: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserActiveRunsResponseBody extends $tea.Model {
  requestId?: string;
  hostId?: string;
  maxResults?: number;
  nextToken?: string;
  totalCount?: number;
  runs?: ListUserActiveRunsResponseBodyRuns[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      hostId: 'HostId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
      runs: 'Runs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      hostId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
      runs: { 'type': 'array', 'itemType': ListUserActiveRunsResponseBodyRuns },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserActiveRunsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUserActiveRunsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUserActiveRunsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesRequest extends $tea.Model {
  name?: string;
  orderBy?: string;
  isReversed?: boolean;
  nextToken?: string;
  maxResults?: number;
  labelSelector?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      orderBy: 'OrderBy',
      isReversed: 'IsReversed',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      labelSelector: 'LabelSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      orderBy: 'string',
      isReversed: 'boolean',
      nextToken: 'string',
      maxResults: 'number',
      labelSelector: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesResponseBody extends $tea.Model {
  hostId?: string;
  maxResults?: number;
  requestId?: string;
  nextToken?: string;
  totalCount?: number;
  workspaces?: ListWorkspacesResponseBodyWorkspaces[];
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      maxResults: 'MaxResults',
      requestId: 'RequestId',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
      workspaces: 'Workspaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      maxResults: 'number',
      requestId: 'string',
      nextToken: 'string',
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

export class ParseAppInputsRequest extends $tea.Model {
  workspace?: string;
  appName?: string;
  path?: string;
  definition?: string;
  dependencies?: ParseAppInputsRequestDependencies[];
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      appName: 'AppName',
      path: 'Path',
      definition: 'Definition',
      dependencies: 'Dependencies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      appName: 'string',
      path: 'string',
      definition: 'string',
      dependencies: { 'type': 'array', 'itemType': ParseAppInputsRequestDependencies },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ParseAppInputsShrinkRequest extends $tea.Model {
  workspace?: string;
  appName?: string;
  path?: string;
  definition?: string;
  dependenciesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      appName: 'AppName',
      path: 'Path',
      definition: 'Definition',
      dependenciesShrink: 'Dependencies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      appName: 'string',
      path: 'string',
      definition: 'string',
      dependenciesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ParseAppInputsResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  inputs?: ParseAppInputsResponseBodyInputs[];
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
      inputs: 'Inputs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
      inputs: { 'type': 'array', 'itemType': ParseAppInputsResponseBodyInputs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ParseAppInputsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ParseAppInputsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ParseAppInputsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeSubmissionRequest extends $tea.Model {
  workspace?: string;
  submissionId?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      submissionId: 'SubmissionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      submissionId: 'string',
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
  headers: { [key: string]: string };
  body: ResumeSubmissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResumeSubmissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEntityRequest extends $tea.Model {
  workspace?: string;
  entityType?: string;
  entityItems?: UpdateEntityRequestEntityItems[];
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      entityType: 'EntityType',
      entityItems: 'EntityItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      entityType: 'string',
      entityItems: { 'type': 'array', 'itemType': UpdateEntityRequestEntityItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEntityShrinkRequest extends $tea.Model {
  workspace?: string;
  entityType?: string;
  entityItemsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      entityType: 'EntityType',
      entityItemsShrink: 'EntityItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      entityType: 'string',
      entityItemsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEntityResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  workspace?: string;
  entityType?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
      workspace: 'Workspace',
      entityType: 'EntityType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
      workspace: 'string',
      entityType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEntityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateEntityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateRequest extends $tea.Model {
  workspace?: string;
  templateName?: string;
  description?: string;
  rootEntity?: string;
  inputs?: UpdateTemplateRequestInputs[];
  outputs?: UpdateTemplateRequestOutputs[];
  labels?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      templateName: 'TemplateName',
      description: 'Description',
      rootEntity: 'RootEntity',
      inputs: 'Inputs',
      outputs: 'Outputs',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      templateName: 'string',
      description: 'string',
      rootEntity: 'string',
      inputs: { 'type': 'array', 'itemType': UpdateTemplateRequestInputs },
      outputs: { 'type': 'array', 'itemType': UpdateTemplateRequestOutputs },
      labels: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateShrinkRequest extends $tea.Model {
  workspace?: string;
  templateName?: string;
  description?: string;
  rootEntity?: string;
  inputsShrink?: string;
  outputsShrink?: string;
  labels?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      templateName: 'TemplateName',
      description: 'Description',
      rootEntity: 'RootEntity',
      inputsShrink: 'Inputs',
      outputsShrink: 'Outputs',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      templateName: 'string',
      description: 'string',
      rootEntity: 'string',
      inputsShrink: 'string',
      outputsShrink: 'string',
      labels: 'string',
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
  headers: { [key: string]: string };
  body: UpdateTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceRequest extends $tea.Model {
  workspace?: string;
  description?: string;
  ossRoot?: string;
  jobLifecycle?: number;
  role?: string;
  labels?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      description: 'Description',
      ossRoot: 'OssRoot',
      jobLifecycle: 'JobLifecycle',
      role: 'Role',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      description: 'string',
      ossRoot: 'string',
      jobLifecycle: 'number',
      role: 'string',
      labels: 'string',
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
  headers: { [key: string]: string };
  body: UpdateWorkspaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateWorkspaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadEntityRequest extends $tea.Model {
  workspace?: string;
  entityTSVFile?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      entityTSVFile: 'EntityTSVFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      entityTSVFile: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadEntityResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  workspace?: string;
  entityType?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
      workspace: 'Workspace',
      entityType: 'EntityType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
      workspace: 'string',
      entityType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadEntityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UploadEntityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UploadEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestDependencies extends $tea.Model {
  path?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestConfigs extends $tea.Model {
  path?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEntityRequestEntityItems extends $tea.Model {
  entityName?: string;
  entityData?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      entityName: 'EntityName',
      entityData: 'EntityData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityName: 'string',
      entityData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateRequestInputs extends $tea.Model {
  taskName?: string;
  variableName?: string;
  variableType?: string;
  variableValue?: string;
  required?: boolean;
  help?: string;
  stepOrder?: number;
  static names(): { [key: string]: string } {
    return {
      taskName: 'TaskName',
      variableName: 'VariableName',
      variableType: 'VariableType',
      variableValue: 'VariableValue',
      required: 'Required',
      help: 'Help',
      stepOrder: 'StepOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskName: 'string',
      variableName: 'string',
      variableType: 'string',
      variableValue: 'string',
      required: 'boolean',
      help: 'string',
      stepOrder: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateRequestOutputs extends $tea.Model {
  taskName?: string;
  variableName?: string;
  variableType?: string;
  variableValue?: string;
  required?: boolean;
  help?: string;
  stepOrder?: number;
  static names(): { [key: string]: string } {
    return {
      taskName: 'TaskName',
      variableName: 'VariableName',
      variableType: 'VariableType',
      variableValue: 'VariableValue',
      required: 'Required',
      help: 'Help',
      stepOrder: 'StepOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskName: 'string',
      variableName: 'string',
      variableType: 'string',
      variableValue: 'string',
      required: 'boolean',
      help: 'string',
      stepOrder: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBodyInputs extends $tea.Model {
  taskName?: string;
  variableName?: string;
  variableType?: string;
  variableValue?: string;
  required?: boolean;
  help?: string;
  stepOrder?: number;
  static names(): { [key: string]: string } {
    return {
      taskName: 'TaskName',
      variableName: 'VariableName',
      variableType: 'VariableType',
      variableValue: 'VariableValue',
      required: 'Required',
      help: 'Help',
      stepOrder: 'StepOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskName: 'string',
      variableName: 'string',
      variableType: 'string',
      variableValue: 'string',
      required: 'boolean',
      help: 'string',
      stepOrder: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBodyOutputs extends $tea.Model {
  taskName?: string;
  variableName?: string;
  variableType?: string;
  variableValue?: string;
  required?: boolean;
  help?: string;
  stepOrder?: number;
  static names(): { [key: string]: string } {
    return {
      taskName: 'TaskName',
      variableName: 'VariableName',
      variableType: 'VariableType',
      variableValue: 'VariableValue',
      required: 'Required',
      help: 'Help',
      stepOrder: 'StepOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskName: 'string',
      variableName: 'string',
      variableType: 'string',
      variableValue: 'string',
      required: 'boolean',
      help: 'string',
      stepOrder: 'number',
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
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      revision: 'Revision',
      revisionComment: 'RevisionComment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      revision: 'string',
      revisionComment: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBodyDependencies extends $tea.Model {
  path?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBodyConfigs extends $tea.Model {
  path?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      content: 'string',
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

export class GetGlobalAppResponseBodyAppDescriptorFiles extends $tea.Model {
  fileType?: string;
  path?: string;
  content?: string;
  url?: string;
  checksum?: string;
  static names(): { [key: string]: string } {
    return {
      fileType: 'FileType',
      path: 'Path',
      content: 'Content',
      url: 'Url',
      checksum: 'Checksum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileType: 'string',
      path: 'string',
      content: 'string',
      url: 'string',
      checksum: 'string',
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
  static names(): { [key: string]: string } {
    return {
      callCaching: 'CallCaching',
      deleteIntermediateResults: 'DeleteIntermediateResults',
      failureMode: 'FailureMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callCaching: 'boolean',
      deleteIntermediateResults: 'boolean',
      failureMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubmissionResponseBodySubmissionRunStats extends $tea.Model {
  submitted?: number;
  pending?: number;
  running?: number;
  succeeded?: number;
  failed?: number;
  aborting?: number;
  aborted?: number;
  static names(): { [key: string]: string } {
    return {
      submitted: 'Submitted',
      pending: 'Pending',
      running: 'Running',
      succeeded: 'Succeeded',
      failed: 'Failed',
      aborting: 'Aborting',
      aborted: 'Aborted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      submitted: 'number',
      pending: 'number',
      running: 'number',
      succeeded: 'number',
      failed: 'number',
      aborting: 'number',
      aborted: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubmissionResponseBodySubmission extends $tea.Model {
  workspace?: string;
  submissionId?: string;
  status?: string;
  createTime?: string;
  startTime?: string;
  endTime?: string;
  entityType?: string;
  runStats?: GetSubmissionResponseBodySubmissionRunStats;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      submissionId: 'SubmissionId',
      status: 'Status',
      createTime: 'CreateTime',
      startTime: 'StartTime',
      endTime: 'EndTime',
      entityType: 'EntityType',
      runStats: 'RunStats',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      submissionId: 'string',
      status: 'string',
      createTime: 'string',
      startTime: 'string',
      endTime: 'string',
      entityType: 'string',
      runStats: GetSubmissionResponseBodySubmissionRunStats,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBodyInputs extends $tea.Model {
  taskName?: string;
  variableName?: string;
  variableType?: string;
  variableValue?: string;
  required?: boolean;
  help?: string;
  stepOrder?: number;
  static names(): { [key: string]: string } {
    return {
      taskName: 'TaskName',
      variableName: 'VariableName',
      variableType: 'VariableType',
      variableValue: 'VariableValue',
      required: 'Required',
      help: 'Help',
      stepOrder: 'StepOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskName: 'string',
      variableName: 'string',
      variableType: 'string',
      variableValue: 'string',
      required: 'boolean',
      help: 'string',
      stepOrder: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBodyOutputs extends $tea.Model {
  taskName?: string;
  variableName?: string;
  variableType?: string;
  variableValue?: string;
  required?: boolean;
  help?: string;
  stepOrder?: number;
  static names(): { [key: string]: string } {
    return {
      taskName: 'TaskName',
      variableName: 'VariableName',
      variableType: 'VariableType',
      variableValue: 'VariableValue',
      required: 'Required',
      help: 'Help',
      stepOrder: 'StepOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskName: 'string',
      variableName: 'string',
      variableType: 'string',
      variableValue: 'string',
      required: 'boolean',
      help: 'string',
      stepOrder: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBodyApps extends $tea.Model {
  appName?: string;
  createTime?: string;
  description?: string;
  appType?: string;
  language?: string;
  scope?: string;
  workspace?: string;
  source?: string;
  namespace?: string;
  appOrigName?: string;
  appDefaultVersion?: string;
  labels?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      createTime: 'CreateTime',
      description: 'Description',
      appType: 'AppType',
      language: 'Language',
      scope: 'Scope',
      workspace: 'Workspace',
      source: 'Source',
      namespace: 'Namespace',
      appOrigName: 'AppOrigName',
      appDefaultVersion: 'AppDefaultVersion',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      createTime: 'string',
      description: 'string',
      appType: 'string',
      language: 'string',
      scope: 'string',
      workspace: 'string',
      source: 'string',
      namespace: 'string',
      appOrigName: 'string',
      appDefaultVersion: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizedSoftwareResponseBodySoftwares extends $tea.Model {
  softwareName?: string;
  softwareLongName?: string;
  softwareDescription?: string;
  softwareDefaultVersion?: string;
  softwareVersions?: string[];
  softwareLicenseFee?: number;
  regionIds?: string[];
  helpLink?: string;
  softwareIcon?: string;
  lastModified?: string;
  static names(): { [key: string]: string } {
    return {
      softwareName: 'SoftwareName',
      softwareLongName: 'SoftwareLongName',
      softwareDescription: 'SoftwareDescription',
      softwareDefaultVersion: 'SoftwareDefaultVersion',
      softwareVersions: 'SoftwareVersions',
      softwareLicenseFee: 'SoftwareLicenseFee',
      regionIds: 'RegionIds',
      helpLink: 'HelpLink',
      softwareIcon: 'SoftwareIcon',
      lastModified: 'LastModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      softwareName: 'string',
      softwareLongName: 'string',
      softwareDescription: 'string',
      softwareDefaultVersion: 'string',
      softwareVersions: { 'type': 'array', 'itemType': 'string' },
      softwareLicenseFee: 'number',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      helpLink: 'string',
      softwareIcon: 'string',
      lastModified: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContainerImagesResponseBodyContainerImages extends $tea.Model {
  containerImageNamespace?: string;
  containerImageName?: string;
  containerImageDescription?: string;
  containerImageVersions?: string[];
  regionId?: string;
  containerRegistry?: string;
  lastModified?: string;
  static names(): { [key: string]: string } {
    return {
      containerImageNamespace: 'ContainerImageNamespace',
      containerImageName: 'ContainerImageName',
      containerImageDescription: 'ContainerImageDescription',
      containerImageVersions: 'ContainerImageVersions',
      regionId: 'RegionId',
      containerRegistry: 'ContainerRegistry',
      lastModified: 'LastModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerImageNamespace: 'string',
      containerImageName: 'string',
      containerImageDescription: 'string',
      containerImageVersions: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      containerRegistry: 'string',
      lastModified: 'string',
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
  entityName?: string;
  entityData?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      entityName: 'EntityName',
      entityData: 'EntityData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityName: 'string',
      entityData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGlobalAppsResponseBodyGlobalApps extends $tea.Model {
  namespaceName?: string;
  appScope?: string;
  appName?: string;
  appDescription?: string;
  toolkit?: string;
  appFee?: string;
  appDefaultVersion?: string;
  pinned?: boolean;
  lastModified?: string;
  regionIds?: string[];
  categories?: string[];
  static names(): { [key: string]: string } {
    return {
      namespaceName: 'NamespaceName',
      appScope: 'AppScope',
      appName: 'AppName',
      appDescription: 'AppDescription',
      toolkit: 'Toolkit',
      appFee: 'AppFee',
      appDefaultVersion: 'AppDefaultVersion',
      pinned: 'Pinned',
      lastModified: 'LastModified',
      regionIds: 'RegionIds',
      categories: 'Categories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceName: 'string',
      appScope: 'string',
      appName: 'string',
      appDescription: 'string',
      toolkit: 'string',
      appFee: 'string',
      appDefaultVersion: 'string',
      pinned: 'boolean',
      lastModified: 'string',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      categories: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicDatasetResponseBodyDatasets extends $tea.Model {
  lastModified?: string;
  copyright?: string;
  accessRequirements?: string;
  about?: string;
  tags?: string[];
  datasetName?: string;
  datasetDescription?: string;
  updateFrequency?: string;
  regionIds?: string[];
  static names(): { [key: string]: string } {
    return {
      lastModified: 'LastModified',
      copyright: 'Copyright',
      accessRequirements: 'AccessRequirements',
      about: 'About',
      tags: 'Tags',
      datasetName: 'DatasetName',
      datasetDescription: 'DatasetDescription',
      updateFrequency: 'UpdateFrequency',
      regionIds: 'RegionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastModified: 'string',
      copyright: 'string',
      accessRequirements: 'string',
      about: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      datasetName: 'string',
      datasetDescription: 'string',
      updateFrequency: 'string',
      regionIds: { 'type': 'array', 'itemType': 'string' },
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
  entityName?: string;
  entityData?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      entityName: 'EntityName',
      entityData: 'EntityData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityName: 'string',
      entityData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  static names(): { [key: string]: string } {
    return {
      callCaching: 'CallCaching',
      deleteIntermediateResults: 'DeleteIntermediateResults',
      failureMode: 'FailureMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callCaching: 'boolean',
      deleteIntermediateResults: 'boolean',
      failureMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunsResponseBodyRuns extends $tea.Model {
  appName?: string;
  source?: string;
  namespace?: string;
  appOrigName?: string;
  labels?: { [key: string]: string };
  name?: string;
  revision?: string;
  runId?: string;
  status?: string;
  createTime?: string;
  startTime?: string;
  endTime?: string;
  submissionId?: string;
  entityName?: string;
  entityType?: string;
  executeDirectory?: string;
  executeOptions?: ListRunsResponseBodyRunsExecuteOptions;
  inputs?: string;
  defaultRuntime?: string;
  workspace?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      source: 'Source',
      namespace: 'Namespace',
      appOrigName: 'AppOrigName',
      labels: 'Labels',
      name: 'Name',
      revision: 'Revision',
      runId: 'RunId',
      status: 'Status',
      createTime: 'CreateTime',
      startTime: 'StartTime',
      endTime: 'EndTime',
      submissionId: 'SubmissionId',
      entityName: 'EntityName',
      entityType: 'EntityType',
      executeDirectory: 'ExecuteDirectory',
      executeOptions: 'ExecuteOptions',
      inputs: 'Inputs',
      defaultRuntime: 'DefaultRuntime',
      workspace: 'Workspace',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      source: 'string',
      namespace: 'string',
      appOrigName: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      revision: 'string',
      runId: 'string',
      status: 'string',
      createTime: 'string',
      startTime: 'string',
      endTime: 'string',
      submissionId: 'string',
      entityName: 'string',
      entityType: 'string',
      executeDirectory: 'string',
      executeOptions: ListRunsResponseBodyRunsExecuteOptions,
      inputs: 'string',
      defaultRuntime: 'string',
      workspace: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubmissionsResponseBodySubmissionsRunStats extends $tea.Model {
  submitted?: number;
  pending?: number;
  running?: number;
  succeeded?: number;
  failed?: number;
  aborting?: number;
  aborted?: number;
  static names(): { [key: string]: string } {
    return {
      submitted: 'Submitted',
      pending: 'Pending',
      running: 'Running',
      succeeded: 'Succeeded',
      failed: 'Failed',
      aborting: 'Aborting',
      aborted: 'Aborted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      submitted: 'number',
      pending: 'number',
      running: 'number',
      succeeded: 'number',
      failed: 'number',
      aborting: 'number',
      aborted: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubmissionsResponseBodySubmissions extends $tea.Model {
  workspace?: string;
  submissionId?: string;
  status?: string;
  createTime?: string;
  startTime?: string;
  endTime?: string;
  entityType?: string;
  runStats?: ListSubmissionsResponseBodySubmissionsRunStats;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      submissionId: 'SubmissionId',
      status: 'Status',
      createTime: 'CreateTime',
      startTime: 'StartTime',
      endTime: 'EndTime',
      entityType: 'EntityType',
      runStats: 'RunStats',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      submissionId: 'string',
      status: 'string',
      createTime: 'string',
      startTime: 'string',
      endTime: 'string',
      entityType: 'string',
      runStats: ListSubmissionsResponseBodySubmissionsRunStats,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBodyTemplatesInputs extends $tea.Model {
  taskName?: string;
  variableName?: string;
  variableType?: string;
  variableValue?: string;
  required?: boolean;
  help?: string;
  stepOrder?: number;
  static names(): { [key: string]: string } {
    return {
      taskName: 'TaskName',
      variableName: 'VariableName',
      variableType: 'VariableType',
      variableValue: 'VariableValue',
      required: 'Required',
      help: 'Help',
      stepOrder: 'StepOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskName: 'string',
      variableName: 'string',
      variableType: 'string',
      variableValue: 'string',
      required: 'boolean',
      help: 'string',
      stepOrder: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBodyTemplatesOutputs extends $tea.Model {
  taskName?: string;
  variableName?: string;
  variableType?: string;
  variableValue?: string;
  required?: boolean;
  help?: string;
  stepOrder?: number;
  static names(): { [key: string]: string } {
    return {
      taskName: 'TaskName',
      variableName: 'VariableName',
      variableType: 'VariableType',
      variableValue: 'VariableValue',
      required: 'Required',
      help: 'Help',
      stepOrder: 'StepOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskName: 'string',
      variableName: 'string',
      variableType: 'string',
      variableValue: 'string',
      required: 'boolean',
      help: 'string',
      stepOrder: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBodyTemplates extends $tea.Model {
  workspace?: string;
  templateName?: string;
  labels?: { [key: string]: string };
  appName?: string;
  revision?: string;
  rootEntity?: string;
  inputs?: ListTemplatesResponseBodyTemplatesInputs[];
  outputs?: ListTemplatesResponseBodyTemplatesOutputs[];
  description?: string;
  createTime?: string;
  lastModifiedTime?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'Workspace',
      templateName: 'TemplateName',
      labels: 'Labels',
      appName: 'AppName',
      revision: 'Revision',
      rootEntity: 'RootEntity',
      inputs: 'Inputs',
      outputs: 'Outputs',
      description: 'Description',
      createTime: 'CreateTime',
      lastModifiedTime: 'LastModifiedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
      templateName: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      appName: 'string',
      revision: 'string',
      rootEntity: 'string',
      inputs: { 'type': 'array', 'itemType': ListTemplatesResponseBodyTemplatesInputs },
      outputs: { 'type': 'array', 'itemType': ListTemplatesResponseBodyTemplatesOutputs },
      description: 'string',
      createTime: 'string',
      lastModifiedTime: 'string',
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
  static names(): { [key: string]: string } {
    return {
      callCaching: 'CallCaching',
      deleteIntermediateResults: 'DeleteIntermediateResults',
      failureMode: 'FailureMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callCaching: 'boolean',
      deleteIntermediateResults: 'boolean',
      failureMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserActiveRunsResponseBodyRuns extends $tea.Model {
  appName?: string;
  source?: string;
  namespace?: string;
  appOrigName?: string;
  labels?: { [key: string]: string };
  name?: string;
  revision?: string;
  runId?: string;
  status?: string;
  createTime?: string;
  startTime?: string;
  endTime?: string;
  submissionId?: string;
  entityName?: string;
  entityType?: string;
  executeDirectory?: string;
  executeOptions?: ListUserActiveRunsResponseBodyRunsExecuteOptions;
  inputs?: string;
  defaultRuntime?: string;
  workspace?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      source: 'Source',
      namespace: 'Namespace',
      appOrigName: 'AppOrigName',
      labels: 'Labels',
      name: 'Name',
      revision: 'Revision',
      runId: 'RunId',
      status: 'Status',
      createTime: 'CreateTime',
      startTime: 'StartTime',
      endTime: 'EndTime',
      submissionId: 'SubmissionId',
      entityName: 'EntityName',
      entityType: 'EntityType',
      executeDirectory: 'ExecuteDirectory',
      executeOptions: 'ExecuteOptions',
      inputs: 'Inputs',
      defaultRuntime: 'DefaultRuntime',
      workspace: 'Workspace',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      source: 'string',
      namespace: 'string',
      appOrigName: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      revision: 'string',
      runId: 'string',
      status: 'string',
      createTime: 'string',
      startTime: 'string',
      endTime: 'string',
      submissionId: 'string',
      entityName: 'string',
      entityType: 'string',
      executeDirectory: 'string',
      executeOptions: ListUserActiveRunsResponseBodyRunsExecuteOptions,
      inputs: 'string',
      defaultRuntime: 'string',
      workspace: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesResponseBodyWorkspaces extends $tea.Model {
  description?: string;
  jobLifecycle?: number;
  labels?: { [key: string]: string };
  ossRoot?: string;
  bucketName?: string;
  role?: string;
  createTime?: string;
  lastModifiedTime?: string;
  workspace?: string;
  status?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      jobLifecycle: 'JobLifecycle',
      labels: 'Labels',
      ossRoot: 'OssRoot',
      bucketName: 'BucketName',
      role: 'Role',
      createTime: 'CreateTime',
      lastModifiedTime: 'LastModifiedTime',
      workspace: 'Workspace',
      status: 'Status',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      jobLifecycle: 'number',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      ossRoot: 'string',
      bucketName: 'string',
      role: 'string',
      createTime: 'string',
      lastModifiedTime: 'string',
      workspace: 'string',
      status: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ParseAppInputsRequestDependencies extends $tea.Model {
  path?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ParseAppInputsResponseBodyInputs extends $tea.Model {
  taskName?: string;
  variableName?: string;
  variableType?: string;
  variableValue?: string;
  required?: boolean;
  help?: string;
  stepOrder?: number;
  static names(): { [key: string]: string } {
    return {
      taskName: 'TaskName',
      variableName: 'VariableName',
      variableType: 'VariableType',
      variableValue: 'VariableValue',
      required: 'Required',
      help: 'Help',
      stepOrder: 'StepOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskName: 'string',
      variableName: 'string',
      variableType: 'string',
      variableValue: 'string',
      required: 'boolean',
      help: 'string',
      stepOrder: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEntityRequestEntityItems extends $tea.Model {
  entityName?: string;
  entityData?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      entityName: 'EntityName',
      entityData: 'EntityData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityName: 'string',
      entityData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateRequestInputs extends $tea.Model {
  taskName?: string;
  variableName?: string;
  variableType?: string;
  variableValue?: string;
  required?: boolean;
  help?: string;
  stepOrder?: number;
  static names(): { [key: string]: string } {
    return {
      taskName: 'TaskName',
      variableName: 'VariableName',
      variableType: 'VariableType',
      variableValue: 'VariableValue',
      required: 'Required',
      help: 'Help',
      stepOrder: 'StepOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskName: 'string',
      variableName: 'string',
      variableType: 'string',
      variableValue: 'string',
      required: 'boolean',
      help: 'string',
      stepOrder: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateRequestOutputs extends $tea.Model {
  taskName?: string;
  variableName?: string;
  variableType?: string;
  variableValue?: string;
  required?: boolean;
  help?: string;
  stepOrder?: number;
  static names(): { [key: string]: string } {
    return {
      taskName: 'TaskName',
      variableName: 'VariableName',
      variableType: 'VariableType',
      variableValue: 'VariableValue',
      required: 'Required',
      help: 'Help',
      stepOrder: 'StepOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskName: 'string',
      variableName: 'string',
      variableType: 'string',
      variableValue: 'string',
      required: 'boolean',
      help: 'string',
      stepOrder: 'number',
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
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AbortRunResponse>(await this.doRPCRequest("AbortRun", "2021-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new AbortRunResponse({}));
  }

  async abortRun(request: AbortRunRequest): Promise<AbortRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.abortRunWithOptions(request, runtime);
  }

  async abortSubmissionWithOptions(request: AbortSubmissionRequest, runtime: $Util.RuntimeOptions): Promise<AbortSubmissionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AbortSubmissionResponse>(await this.doRPCRequest("AbortSubmission", "2021-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new AbortSubmissionResponse({}));
  }

  async abortSubmission(request: AbortSubmissionRequest): Promise<AbortSubmissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.abortSubmissionWithOptions(request, runtime);
  }

  async createAppWithOptions(tmpReq: CreateAppRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateAppShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.dependencies)) {
      request.dependenciesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dependencies, "Dependencies", "json");
    }

    if (!Util.isUnset(tmpReq.configs)) {
      request.configsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configs, "Configs", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAppResponse>(await this.doRPCRequest("CreateApp", "2021-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAppResponse({}));
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

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateEntityResponse>(await this.doRPCRequest("CreateEntity", "2021-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateEntityResponse({}));
  }

  async createEntity(request: CreateEntityRequest): Promise<CreateEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEntityWithOptions(request, runtime);
  }

  async createRunWithOptions(request: CreateRunRequest, runtime: $Util.RuntimeOptions): Promise<CreateRunResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRunResponse>(await this.doRPCRequest("CreateRun", "2021-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRunResponse({}));
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

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSubmissionResponse>(await this.doRPCRequest("CreateSubmission", "2021-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSubmissionResponse({}));
  }

  async createSubmission(request: CreateSubmissionRequest): Promise<CreateSubmissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSubmissionWithOptions(request, runtime);
  }

  async createTemplateWithOptions(tmpReq: CreateTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateTemplateResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.inputs)) {
      request.inputsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.inputs, "Inputs", "json");
    }

    if (!Util.isUnset(tmpReq.outputs)) {
      request.outputsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.outputs, "Outputs", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateTemplateResponse>(await this.doRPCRequest("CreateTemplate", "2021-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateTemplateResponse({}));
  }

  async createTemplate(request: CreateTemplateRequest): Promise<CreateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTemplateWithOptions(request, runtime);
  }

  async createWorkspaceWithOptions(request: CreateWorkspaceRequest, runtime: $Util.RuntimeOptions): Promise<CreateWorkspaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateWorkspaceResponse>(await this.doRPCRequest("CreateWorkspace", "2021-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateWorkspaceResponse({}));
  }

  async createWorkspace(request: CreateWorkspaceRequest): Promise<CreateWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWorkspaceWithOptions(request, runtime);
  }

  async deleteAppWithOptions(request: DeleteAppRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAppResponse>(await this.doRPCRequest("DeleteApp", "2021-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAppResponse({}));
  }

  async deleteApp(request: DeleteAppRequest): Promise<DeleteAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppWithOptions(request, runtime);
  }

  async deleteEntityItemsWithOptions(tmpReq: DeleteEntityItemsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEntityItemsResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteEntityItemsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.entityNames)) {
      request.entityNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.entityNames, "EntityNames", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteEntityItemsResponse>(await this.doRPCRequest("DeleteEntityItems", "2021-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteEntityItemsResponse({}));
  }

  async deleteEntityItems(request: DeleteEntityItemsRequest): Promise<DeleteEntityItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEntityItemsWithOptions(request, runtime);
  }

  async deleteRunWithOptions(request: DeleteRunRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRunResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRunResponse>(await this.doRPCRequest("DeleteRun", "2021-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRunResponse({}));
  }

  async deleteRun(request: DeleteRunRequest): Promise<DeleteRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRunWithOptions(request, runtime);
  }

  async deleteSubmissionWithOptions(request: DeleteSubmissionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSubmissionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSubmissionResponse>(await this.doRPCRequest("DeleteSubmission", "2021-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSubmissionResponse({}));
  }

  async deleteSubmission(request: DeleteSubmissionRequest): Promise<DeleteSubmissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSubmissionWithOptions(request, runtime);
  }

  async deleteTemplateWithOptions(request: DeleteTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteTemplateResponse>(await this.doRPCRequest("DeleteTemplate", "2021-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteTemplateResponse({}));
  }

  async deleteTemplate(request: DeleteTemplateRequest): Promise<DeleteTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTemplateWithOptions(request, runtime);
  }

  async deleteWorkspaceWithOptions(request: DeleteWorkspaceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWorkspaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteWorkspaceResponse>(await this.doRPCRequest("DeleteWorkspace", "2021-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteWorkspaceResponse({}));
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

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DownloadEntityResponse>(await this.doRPCRequest("DownloadEntity", "2021-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DownloadEntityResponse({}));
  }

  async downloadEntity(request: DownloadEntityRequest): Promise<DownloadEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadEntityWithOptions(request, runtime);
  }

  async getAppWithOptions(request: GetAppRequest, runtime: $Util.RuntimeOptions): Promise<GetAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAppResponse>(await this.doRPCRequest("GetApp", "2021-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetAppResponse({}));
  }

  async getApp(request: GetAppRequest): Promise<GetAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppWithOptions(request, runtime);
  }

  async getEntityWithOptions(request: GetEntityRequest, runtime: $Util.RuntimeOptions): Promise<GetEntityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetEntityResponse>(await this.doRPCRequest("GetEntity", "2021-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetEntityResponse({}));
  }

  async getEntity(request: GetEntityRequest): Promise<GetEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEntityWithOptions(request, runtime);
  }

  async getGlobalAppWithOptions(request: GetGlobalAppRequest, runtime: $Util.RuntimeOptions): Promise<GetGlobalAppResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetGlobalAppResponse>(await this.doRPCRequest("GetGlobalApp", "2021-03-15", "HTTPS", "GET", "AK", "json", req, runtime), new GetGlobalAppResponse({}));
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
      query: query,
    });
    return $tea.cast<GetPublicDatasetResponse>(await this.doRPCRequest("GetPublicDataset", "2021-03-15", "HTTPS", "GET", "AK", "json", req, runtime), new GetPublicDatasetResponse({}));
  }

  async getPublicDataset(request: GetPublicDatasetRequest): Promise<GetPublicDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPublicDatasetWithOptions(request, runtime);
  }

  async getPublicDatasetEntityWithOptions(request: GetPublicDatasetEntityRequest, runtime: $Util.RuntimeOptions): Promise<GetPublicDatasetEntityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPublicDatasetEntityResponse>(await this.doRPCRequest("GetPublicDatasetEntity", "2021-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetPublicDatasetEntityResponse({}));
  }

  async getPublicDatasetEntity(request: GetPublicDatasetEntityRequest): Promise<GetPublicDatasetEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPublicDatasetEntityWithOptions(request, runtime);
  }

  async getRunWithOptions(request: GetRunRequest, runtime: $Util.RuntimeOptions): Promise<GetRunResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetRunResponse>(await this.doRPCRequest("GetRun", "2021-03-15", "HTTPS", "GET", "AK", "json", req, runtime), new GetRunResponse({}));
  }

  async getRun(request: GetRunRequest): Promise<GetRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRunWithOptions(request, runtime);
  }

  async getSubmissionWithOptions(request: GetSubmissionRequest, runtime: $Util.RuntimeOptions): Promise<GetSubmissionResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetSubmissionResponse>(await this.doRPCRequest("GetSubmission", "2021-03-15", "HTTPS", "GET", "AK", "json", req, runtime), new GetSubmissionResponse({}));
  }

  async getSubmission(request: GetSubmissionRequest): Promise<GetSubmissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSubmissionWithOptions(request, runtime);
  }

  async getTemplateWithOptions(request: GetTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTemplateResponse>(await this.doRPCRequest("GetTemplate", "2021-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetTemplateResponse({}));
  }

  async getTemplate(request: GetTemplateRequest): Promise<GetTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTemplateWithOptions(request, runtime);
  }

  async getWorkspaceWithOptions(request: GetWorkspaceRequest, runtime: $Util.RuntimeOptions): Promise<GetWorkspaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetWorkspaceResponse>(await this.doRPCRequest("GetWorkspace", "2021-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetWorkspaceResponse({}));
  }

  async getWorkspace(request: GetWorkspaceRequest): Promise<GetWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWorkspaceWithOptions(request, runtime);
  }

  async installGlobalAppWithOptions(request: InstallGlobalAppRequest, runtime: $Util.RuntimeOptions): Promise<InstallGlobalAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InstallGlobalAppResponse>(await this.doRPCRequest("InstallGlobalApp", "2021-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new InstallGlobalAppResponse({}));
  }

  async installGlobalApp(request: InstallGlobalAppRequest): Promise<InstallGlobalAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.installGlobalAppWithOptions(request, runtime);
  }

  async listAppsWithOptions(request: ListAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListAppsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAppsResponse>(await this.doRPCRequest("ListApps", "2021-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListAppsResponse({}));
  }

  async listApps(request: ListAppsRequest): Promise<ListAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppsWithOptions(request, runtime);
  }

  async listAuthorizedSoftwareWithOptions(request: ListAuthorizedSoftwareRequest, runtime: $Util.RuntimeOptions): Promise<ListAuthorizedSoftwareResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListAuthorizedSoftwareResponse>(await this.doRPCRequest("ListAuthorizedSoftware", "2021-03-15", "HTTPS", "GET", "AK", "json", req, runtime), new ListAuthorizedSoftwareResponse({}));
  }

  async listAuthorizedSoftware(request: ListAuthorizedSoftwareRequest): Promise<ListAuthorizedSoftwareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAuthorizedSoftwareWithOptions(request, runtime);
  }

  async listContainerImagesWithOptions(request: ListContainerImagesRequest, runtime: $Util.RuntimeOptions): Promise<ListContainerImagesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListContainerImagesResponse>(await this.doRPCRequest("ListContainerImages", "2021-03-15", "HTTPS", "GET", "AK", "json", req, runtime), new ListContainerImagesResponse({}));
  }

  async listContainerImages(request: ListContainerImagesRequest): Promise<ListContainerImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listContainerImagesWithOptions(request, runtime);
  }

  async listEntitiesWithOptions(request: ListEntitiesRequest, runtime: $Util.RuntimeOptions): Promise<ListEntitiesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListEntitiesResponse>(await this.doRPCRequest("ListEntities", "2021-03-15", "HTTPS", "GET", "AK", "json", req, runtime), new ListEntitiesResponse({}));
  }

  async listEntities(request: ListEntitiesRequest): Promise<ListEntitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEntitiesWithOptions(request, runtime);
  }

  async listEntityItemsWithOptions(request: ListEntityItemsRequest, runtime: $Util.RuntimeOptions): Promise<ListEntityItemsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListEntityItemsResponse>(await this.doRPCRequest("ListEntityItems", "2021-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListEntityItemsResponse({}));
  }

  async listEntityItems(request: ListEntityItemsRequest): Promise<ListEntityItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEntityItemsWithOptions(request, runtime);
  }

  async listGlobalAppsWithOptions(request: ListGlobalAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListGlobalAppsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListGlobalAppsResponse>(await this.doRPCRequest("ListGlobalApps", "2021-03-15", "HTTPS", "GET", "AK", "json", req, runtime), new ListGlobalAppsResponse({}));
  }

  async listGlobalApps(request: ListGlobalAppsRequest): Promise<ListGlobalAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGlobalAppsWithOptions(request, runtime);
  }

  async listPublicDatasetWithOptions(request: ListPublicDatasetRequest, runtime: $Util.RuntimeOptions): Promise<ListPublicDatasetResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListPublicDatasetResponse>(await this.doRPCRequest("ListPublicDataset", "2021-03-15", "HTTPS", "GET", "AK", "json", req, runtime), new ListPublicDatasetResponse({}));
  }

  async listPublicDataset(request: ListPublicDatasetRequest): Promise<ListPublicDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPublicDatasetWithOptions(request, runtime);
  }

  async listPublicDatasetEntitiesWithOptions(request: ListPublicDatasetEntitiesRequest, runtime: $Util.RuntimeOptions): Promise<ListPublicDatasetEntitiesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListPublicDatasetEntitiesResponse>(await this.doRPCRequest("ListPublicDatasetEntities", "2021-03-15", "HTTPS", "GET", "AK", "json", req, runtime), new ListPublicDatasetEntitiesResponse({}));
  }

  async listPublicDatasetEntities(request: ListPublicDatasetEntitiesRequest): Promise<ListPublicDatasetEntitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPublicDatasetEntitiesWithOptions(request, runtime);
  }

  async listPublicDatasetEntityItemsWithOptions(request: ListPublicDatasetEntityItemsRequest, runtime: $Util.RuntimeOptions): Promise<ListPublicDatasetEntityItemsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListPublicDatasetEntityItemsResponse>(await this.doRPCRequest("ListPublicDatasetEntityItems", "2021-03-15", "HTTPS", "GET", "AK", "json", req, runtime), new ListPublicDatasetEntityItemsResponse({}));
  }

  async listPublicDatasetEntityItems(request: ListPublicDatasetEntityItemsRequest): Promise<ListPublicDatasetEntityItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPublicDatasetEntityItemsWithOptions(request, runtime);
  }

  async listPublicDatasetTagsWithOptions(request: ListPublicDatasetTagsRequest, runtime: $Util.RuntimeOptions): Promise<ListPublicDatasetTagsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListPublicDatasetTagsResponse>(await this.doRPCRequest("ListPublicDatasetTags", "2021-03-15", "HTTPS", "GET", "AK", "json", req, runtime), new ListPublicDatasetTagsResponse({}));
  }

  async listPublicDatasetTags(request: ListPublicDatasetTagsRequest): Promise<ListPublicDatasetTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPublicDatasetTagsWithOptions(request, runtime);
  }

  async listRegionsWithOptions(runtime: $Util.RuntimeOptions): Promise<ListRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListRegionsResponse>(await this.doRPCRequest("ListRegions", "2021-03-15", "HTTPS", "GET", "AK", "json", req, runtime), new ListRegionsResponse({}));
  }

  async listRegions(): Promise<ListRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRegionsWithOptions(runtime);
  }

  async listRunsWithOptions(request: ListRunsRequest, runtime: $Util.RuntimeOptions): Promise<ListRunsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListRunsResponse>(await this.doRPCRequest("ListRuns", "2021-03-15", "HTTPS", "GET", "AK", "json", req, runtime), new ListRunsResponse({}));
  }

  async listRuns(request: ListRunsRequest): Promise<ListRunsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRunsWithOptions(request, runtime);
  }

  async listSubmissionsWithOptions(request: ListSubmissionsRequest, runtime: $Util.RuntimeOptions): Promise<ListSubmissionsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListSubmissionsResponse>(await this.doRPCRequest("ListSubmissions", "2021-03-15", "HTTPS", "GET", "AK", "json", req, runtime), new ListSubmissionsResponse({}));
  }

  async listSubmissions(request: ListSubmissionsRequest): Promise<ListSubmissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSubmissionsWithOptions(request, runtime);
  }

  async listTemplatesWithOptions(request: ListTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListTemplatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTemplatesResponse>(await this.doRPCRequest("ListTemplates", "2021-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListTemplatesResponse({}));
  }

  async listTemplates(request: ListTemplatesRequest): Promise<ListTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTemplatesWithOptions(request, runtime);
  }

  async listUserActiveRunsWithOptions(request: ListUserActiveRunsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserActiveRunsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListUserActiveRunsResponse>(await this.doRPCRequest("ListUserActiveRuns", "2021-03-15", "HTTPS", "GET", "AK", "json", req, runtime), new ListUserActiveRunsResponse({}));
  }

  async listUserActiveRuns(request: ListUserActiveRunsRequest): Promise<ListUserActiveRunsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserActiveRunsWithOptions(request, runtime);
  }

  async listWorkspacesWithOptions(request: ListWorkspacesRequest, runtime: $Util.RuntimeOptions): Promise<ListWorkspacesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListWorkspacesResponse>(await this.doRPCRequest("ListWorkspaces", "2021-03-15", "HTTPS", "GET", "AK", "json", req, runtime), new ListWorkspacesResponse({}));
  }

  async listWorkspaces(request: ListWorkspacesRequest): Promise<ListWorkspacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWorkspacesWithOptions(request, runtime);
  }

  async parseAppInputsWithOptions(tmpReq: ParseAppInputsRequest, runtime: $Util.RuntimeOptions): Promise<ParseAppInputsResponse> {
    Util.validateModel(tmpReq);
    let request = new ParseAppInputsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.dependencies)) {
      request.dependenciesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dependencies, "Dependencies", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ParseAppInputsResponse>(await this.doRPCRequest("ParseAppInputs", "2021-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new ParseAppInputsResponse({}));
  }

  async parseAppInputs(request: ParseAppInputsRequest): Promise<ParseAppInputsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.parseAppInputsWithOptions(request, runtime);
  }

  async resumeSubmissionWithOptions(request: ResumeSubmissionRequest, runtime: $Util.RuntimeOptions): Promise<ResumeSubmissionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResumeSubmissionResponse>(await this.doRPCRequest("ResumeSubmission", "2021-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new ResumeSubmissionResponse({}));
  }

  async resumeSubmission(request: ResumeSubmissionRequest): Promise<ResumeSubmissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeSubmissionWithOptions(request, runtime);
  }

  async updateEntityWithOptions(tmpReq: UpdateEntityRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEntityResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateEntityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.entityItems)) {
      request.entityItemsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.entityItems, "EntityItems", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateEntityResponse>(await this.doRPCRequest("UpdateEntity", "2021-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateEntityResponse({}));
  }

  async updateEntity(request: UpdateEntityRequest): Promise<UpdateEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEntityWithOptions(request, runtime);
  }

  async updateTemplateWithOptions(tmpReq: UpdateTemplateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTemplateResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.inputs)) {
      request.inputsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.inputs, "Inputs", "json");
    }

    if (!Util.isUnset(tmpReq.outputs)) {
      request.outputsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.outputs, "Outputs", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateTemplateResponse>(await this.doRPCRequest("UpdateTemplate", "2021-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateTemplateResponse({}));
  }

  async updateTemplate(request: UpdateTemplateRequest): Promise<UpdateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTemplateWithOptions(request, runtime);
  }

  async updateWorkspaceWithOptions(request: UpdateWorkspaceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWorkspaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateWorkspaceResponse>(await this.doRPCRequest("UpdateWorkspace", "2021-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateWorkspaceResponse({}));
  }

  async updateWorkspace(request: UpdateWorkspaceRequest): Promise<UpdateWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWorkspaceWithOptions(request, runtime);
  }

  async uploadEntityWithOptions(request: UploadEntityRequest, runtime: $Util.RuntimeOptions): Promise<UploadEntityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UploadEntityResponse>(await this.doRPCRequest("UploadEntity", "2021-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new UploadEntityResponse({}));
  }

  async uploadEntity(request: UploadEntityRequest): Promise<UploadEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadEntityWithOptions(request, runtime);
  }

}
