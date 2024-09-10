// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AbortRunRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * run-13BeYuxc0fxO24uA75UppTiMRoQ
   */
  runId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-workspace
   */
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
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sub-13BeXWnGvrOl3MC124tazcJVKaV
   */
  submissionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-workspace
   */
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
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TestDataset
   */
  dataset?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sample
   */
  entityType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-workspace
   */
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
  /**
   * @example
   * sample
   */
  entityType?: string;
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  requestId?: string;
  /**
   * @example
   * test-workspace
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TestApp
   */
  appName?: string;
  /**
   * @example
   * App
   */
  appType?: string;
  /**
   * @example
   * TestToken
   */
  clientToken?: string;
  configs?: CreateAppRequestConfigs[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * import "./task/echo.wdl" as echo workflow wf_echo {   call echo.echo }
   */
  definition?: string;
  dependencies?: CreateAppRequestDependencies[];
  /**
   * @example
   * This is a test app
   */
  description?: string;
  /**
   * @example
   * Example documentation content
   */
  documentation?: string;
  /**
   * @example
   * {"key":"value"}
   */
  labels?: string;
  /**
   * @example
   * WDL
   */
  language?: string;
  /**
   * @example
   * 1.0
   */
  languageVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * main.wdl
   */
  path?: string;
  /**
   * @example
   * Example revision comment
   */
  revisionComment?: string;
  /**
   * @example
   * ProduceVersion
   */
  revisionTag?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TestWorkspace
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TestApp
   */
  appName?: string;
  /**
   * @example
   * App
   */
  appType?: string;
  /**
   * @example
   * TestToken
   */
  clientToken?: string;
  configsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * import "./task/echo.wdl" as echo workflow wf_echo {   call echo.echo }
   */
  definition?: string;
  dependenciesShrink?: string;
  /**
   * @example
   * This is a test app
   */
  description?: string;
  /**
   * @example
   * Example documentation content
   */
  documentation?: string;
  /**
   * @example
   * {"key":"value"}
   */
  labels?: string;
  /**
   * @example
   * WDL
   */
  language?: string;
  /**
   * @example
   * 1.0
   */
  languageVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * main.wdl
   */
  path?: string;
  /**
   * @example
   * Example revision comment
   */
  revisionComment?: string;
  /**
   * @example
   * ProduceVersion
   */
  revisionTag?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TestWorkspace
   */
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
  /**
   * @example
   * TestApp
   */
  appName?: string;
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  revision?: string;
  /**
   * @example
   * ProduceVersion
   */
  revisionTag?: string;
  /**
   * @example
   * TestWorkspace
   */
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
  /**
   * @example
   * T93cy1mMDE4OTgxNGU1ZTkK
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  entityItems?: CreateEntityRequestEntityItems[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sample
   */
  entityType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-workspace
   */
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
  /**
   * @example
   * T93cy1mMDE4OTgxNGU1ZTkK
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  entityItemsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sample
   */
  entityType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-workspace
   */
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
  /**
   * @example
   * sample
   */
  entityType?: string;
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  requestId?: string;
  /**
   * @example
   * test-workspace
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Sentieon
   */
  appName?: string;
  /**
   * @example
   * 16
   */
  appRevision?: string;
  /**
   * @example
   * MTIzNDU2P1dvcmtzcGFjZT93cy1mMDE4OTgxNGU1ZTkK
   */
  clientToken?: string;
  /**
   * @example
   * {}
   */
  defaultRuntime?: string;
  /**
   * @example
   * test run
   */
  description?: string;
  /**
   * @example
   * oss://my-bucket/exec/
   */
  executeDirectory?: string;
  /**
   * @example
   * { 	"CallCaching": true,     "FailureMode": "NoNewCalls" }
   */
  executeOptions?: CreateRunRequestExecuteOptions;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {         "workflow1.task1.param1": "helloooo.txt",         "workflow1.task1.param2": "abc",         "workflow1.task2.param1": "new_helloooo.txt",         "workflow1.task2.param2": "def"     }
   */
  inputs?: string;
  /**
   * @example
   * {"env": "test"}
   */
  labels?: string;
  /**
   * @example
   * oss://my-bucket/output/
   */
  outputFolder?: string;
  /**
   * @example
   * ProduceVersion
   */
  revisionTag?: string;
  /**
   * @example
   * TestRole
   */
  role?: string;
  /**
   * @example
   * wgs_sentieon_hc_with_qc_NGPTS1900029301
   */
  runName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-workspace
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Sentieon
   */
  appName?: string;
  /**
   * @example
   * 16
   */
  appRevision?: string;
  /**
   * @example
   * MTIzNDU2P1dvcmtzcGFjZT93cy1mMDE4OTgxNGU1ZTkK
   */
  clientToken?: string;
  /**
   * @example
   * {}
   */
  defaultRuntime?: string;
  /**
   * @example
   * test run
   */
  description?: string;
  /**
   * @example
   * oss://my-bucket/exec/
   */
  executeDirectory?: string;
  /**
   * @example
   * { 	"CallCaching": true,     "FailureMode": "NoNewCalls" }
   */
  executeOptionsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {         "workflow1.task1.param1": "helloooo.txt",         "workflow1.task1.param2": "abc",         "workflow1.task2.param1": "new_helloooo.txt",         "workflow1.task2.param2": "def"     }
   */
  inputs?: string;
  /**
   * @example
   * {"env": "test"}
   */
  labels?: string;
  /**
   * @example
   * oss://my-bucket/output/
   */
  outputFolder?: string;
  /**
   * @example
   * ProduceVersion
   */
  revisionTag?: string;
  /**
   * @example
   * TestRole
   */
  role?: string;
  /**
   * @example
   * wgs_sentieon_hc_with_qc_NGPTS1900029301
   */
  runName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-workspace
   */
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
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  requestId?: string;
  /**
   * @example
   * run-13BeYuxc0fxO24uA75UppTiMRoQ
   */
  runId?: string;
  /**
   * @example
   * test-workspace
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TestApp
   */
  appName?: string;
  /**
   * @example
   * TestToken
   */
  clientToken?: string;
  /**
   * @example
   * {}
   */
  defaultRuntime?: string;
  /**
   * **if can be null:**
   * false
   */
  entityNames?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TestEntityType
   */
  entityType?: string;
  /**
   * @example
   * oss://my-bucket/my-exe-dir/
   */
  executeDirectory?: string;
  /**
   * @example
   * { 	        "CallCaching": false, 	        "DeleteIntermediateResults": true, 	        "FailureMode": "NoNewCalls"         }
   */
  executeOptions?: string;
  /**
   * @example
   * {}
   */
  inputs?: string;
  /**
   * @example
   * oss://my-bucket/my-output-dir/
   */
  outputFolder?: string;
  /**
   * @example
   * {}
   */
  outputs?: string;
  /**
   * @example
   * 1
   */
  revision?: string;
  /**
   * @example
   * ProduceVersion
   */
  revisionTag?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TestWorkspace
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TestApp
   */
  appName?: string;
  /**
   * @example
   * TestToken
   */
  clientToken?: string;
  /**
   * @example
   * {}
   */
  defaultRuntime?: string;
  /**
   * **if can be null:**
   * false
   */
  entityNamesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TestEntityType
   */
  entityType?: string;
  /**
   * @example
   * oss://my-bucket/my-exe-dir/
   */
  executeDirectory?: string;
  /**
   * @example
   * { 	        "CallCaching": false, 	        "DeleteIntermediateResults": true, 	        "FailureMode": "NoNewCalls"         }
   */
  executeOptions?: string;
  /**
   * @example
   * {}
   */
  inputs?: string;
  /**
   * @example
   * oss://my-bucket/my-output-dir/
   */
  outputFolder?: string;
  /**
   * @example
   * {}
   */
  outputs?: string;
  /**
   * @example
   * 1
   */
  revision?: string;
  /**
   * @example
   * ProduceVersion
   */
  revisionTag?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TestWorkspace
   */
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
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  requestId?: string;
  /**
   * @example
   * sub-13BeXWnGvrOl3MC124tazcJVKaV
   */
  submissionId?: string;
  /**
   * @example
   * TestWorkspace
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MyApp
   */
  appName?: string;
  /**
   * @example
   * 4.1.4.1-v1.0
   */
  appRevision?: string;
  /**
   * @example
   * GFjZT93cy1mMDE4OTgxNGU1ZTkK
   */
  clientToken?: string;
  /**
   * @example
   * This is a test template
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  inputsExpression?: CreateTemplateRequestInputsExpression[];
  /**
   * @example
   * {"key1": "value1"}
   */
  labels?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  outputsExpression?: CreateTemplateRequestOutputsExpression[];
  /**
   * @example
   * ProduceVersion
   */
  revisionTag?: string;
  /**
   * @example
   * TestEntity
   */
  rootEntity?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-template
   */
  templateName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-workspace
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MyApp
   */
  appName?: string;
  /**
   * @example
   * 4.1.4.1-v1.0
   */
  appRevision?: string;
  /**
   * @example
   * GFjZT93cy1mMDE4OTgxNGU1ZTkK
   */
  clientToken?: string;
  /**
   * @example
   * This is a test template
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  inputsExpressionShrink?: string;
  /**
   * @example
   * {"key1": "value1"}
   */
  labels?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  outputsExpressionShrink?: string;
  /**
   * @example
   * ProduceVersion
   */
  revisionTag?: string;
  /**
   * @example
   * TestEntity
   */
  rootEntity?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-template
   */
  templateName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-workspace
   */
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
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  requestId?: string;
  /**
   * @example
   * test-template
   */
  templateName?: string;
  /**
   * @example
   * test-workspace
   */
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
  /**
   * @example
   * TestToken
   */
  clientToken?: string;
  /**
   * @example
   * This is a test workspace
   */
  description?: string;
  /**
   * @example
   * 30
   */
  jobLifecycle?: number;
  /**
   * @example
   * {"key":"value"}
   */
  labels?: string;
  /**
   * @example
   * TestRole
   */
  role?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss://gstor-default-workspace-cn-shanghai-bae3193d/
   */
  storage?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TestWorkspace
   */
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
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  requestId?: string;
  /**
   * @example
   * TestWorkspace
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TestApp
   */
  appName?: string;
  /**
   * @example
   * 1
   */
  revision?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TestWorkspace
   */
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
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sample
   */
  entityType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * default-workspace
   */
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
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  entityNames?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sample
   */
  entityType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-workspace
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  entityNamesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sample
   */
  entityType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-workspace
   */
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
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * run-13BeYuxc0fxO24uA75UppTiMRoQ
   */
  runId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-workspace
   */
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
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sub-13BeXWnGvrOl3MC124tazcJVKaV
   */
  submissionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TestWorkspace
   */
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
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-template
   */
  templateName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-workspace
   */
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
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MyTestWorkspace
   */
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
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sample
   */
  entityType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-workspace
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sample
   */
  entityType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-workspace
   */
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
  /**
   * @example
   * https://my-bucket.oss.aliyucs.com/entity.csv
   */
  entityCSVFile?: string;
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TestApp
   */
  appName?: string;
  /**
   * @example
   * 0
   */
  revision?: string;
  /**
   * @example
   * TestTag
   */
  revisionTag?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TestWorkspace
   */
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
  /**
   * @example
   * MyTestApp
   */
  appName?: string;
  /**
   * @example
   * App
   */
  appType?: string;
  configs?: GetAppResponseBodyConfigs[];
  /**
   * @example
   * 2021-06-16T15:09:14.378297+08:00
   */
  createTime?: string;
  /**
   * @example
   * WDL content
   */
  definition?: string;
  dependencies?: GetAppResponseBodyDependencies[];
  /**
   * @example
   * This is a test app
   */
  description?: string;
  /**
   * @example
   * example documentation content
   */
  documentation?: string;
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  inputs?: GetAppResponseBodyInputs[];
  labels?: { [key: string]: string };
  /**
   * @example
   * WDL
   */
  language?: string;
  /**
   * @example
   * 1.0
   */
  languageVersion?: string;
  /**
   * @example
   * 2021-06-16T15:09:14.378297+08:00
   */
  lastModifiedTime?: string;
  outputs?: GetAppResponseBodyOutputs[];
  /**
   * @example
   * main.wdl
   */
  path?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  revision?: string;
  /**
   * @example
   * Example revision comment
   */
  revisionComment?: string;
  /**
   * @example
   * TestTag
   */
  revisionTag?: string;
  revisions?: GetAppResponseBodyRevisions[];
  /**
   * @example
   * Public
   */
  scope?: string;
  /**
   * @example
   * EasyGene
   */
  source?: string;
  /**
   * @example
   * Example url
   */
  URL?: string;
  /**
   * @example
   * MyTestWorkflow
   */
  workflowName?: string;
  /**
   * @example
   * TestWorkspace
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sample
   */
  entityType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-workspace
   */
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
  /**
   * @example
   * sample
   */
  entityType?: string;
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @example
   * test-workspace
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * joint-calling
   */
  appName?: string;
  /**
   * @example
   * 1.0
   */
  appVersion?: string;
  /**
   * @example
   * AppVersion, AppDescriptorFiles, DescriptorType, DAG, Document, Comment, Alias, NamespaceName, AppScope, AppName, AppDescription, RegionIds, Categories, Toolkit, AppVersions, AppDefaultVersion, AppFee, LastModified, Pinned, Contact, Links, AppType
   */
  attributes?: string[];
  /**
   * @example
   * cn-shenzhen
   */
  location?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sentieon
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * joint-calling
   */
  appName?: string;
  /**
   * @example
   * 1.0
   */
  appVersion?: string;
  /**
   * @example
   * AppVersion, AppDescriptorFiles, DescriptorType, DAG, Document, Comment, Alias, NamespaceName, AppScope, AppName, AppDescription, RegionIds, Categories, Toolkit, AppVersions, AppDefaultVersion, AppFee, LastModified, Pinned, Contact, Links, AppType
   */
  attributesShrink?: string;
  /**
   * @example
   * cn-shenzhen
   */
  location?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sentieon
   */
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
  /**
   * @example
   * 1.0
   */
  appDefaultVersion?: string;
  /**
   * @example
   * This is app description.
   */
  appDescription?: string;
  appDescriptorFiles?: GetGlobalAppResponseBodyAppDescriptorFiles[];
  /**
   * @example
   * WDL / CWL
   */
  appDescriptorType?: string;
  /**
   * @example
   * 实际使用时，计算该应用消耗的资源费用
   */
  appFee?: string;
  /**
   * @example
   * joint-calling
   */
  appName?: string;
  /**
   * @example
   * OpenAccess / Protected
   */
  appScope?: string;
  /**
   * @example
   * workflow
   */
  appType?: string;
  /**
   * @example
   * 1.2a-3
   */
  appVersion?: string;
  appVersions?: GetGlobalAppResponseBodyAppVersions[];
  categories?: string[];
  /**
   * @example
   * 初始版本
   */
  comment?: string;
  /**
   * @example
   * support@sentieon.com
   */
  contact?: string;
  /**
   * @example
   * DAG
   */
  DAG?: string;
  /**
   * @example
   * The app details.
   */
  document?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  hostId?: string;
  /**
   * @example
   * yyyy/MM/dd HH:mm:ss
   */
  lastModified?: string;
  links?: string[];
  locations?: string[];
  /**
   * @example
   * sentieon
   */
  namespaceName?: string;
  /**
   * @example
   * true
   */
  pinned?: boolean;
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  requestId?: string;
  /**
   * @example
   * Sentieon
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 西蒙斯基因组多样性计划
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 西蒙斯基因组多样性计划
   */
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
  /**
   * @example
   * This is description about dataset.
   */
  about?: string;
  /**
   * @example
   * This are dataset access requirements.
   */
  accessRequirements?: string;
  /**
   * @example
   * This is dataset copyright.
   */
  copyright?: string;
  /**
   * @example
   * This is dataset description.
   */
  datasetDescription?: string;
  /**
   * @example
   * 西蒙斯基因组多样性计划
   */
  datasetName?: string;
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * yyyy/MM/dd HH:mm:ss
   */
  lastModified?: string;
  locations?: string[];
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  requestId?: string;
  tags?: string[];
  /**
   * @example
   * 源站更新后及时同步
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 西蒙斯基因组多样性计划
   */
  datasetName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sample
   */
  entityType?: string;
  /**
   * @example
   * cn-shanghai
   */
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
  /**
   * @example
   * 西蒙斯基因组多样性计划
   */
  datasetName?: string;
  /**
   * @example
   * sample
   */
  entityType?: string;
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * run-12kDbbqp5O9dfsH0sEdQeRclGQb
   */
  runId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * default-workspace
   */
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
  /**
   * @example
   * Sentieon
   */
  appName?: string;
  /**
   * @example
   * 1
   */
  appRevision?: string;
  billingInstanceIds?: string[];
  /**
   * @example
   * {}
   */
  calls?: string;
  /**
   * @example
   * 2021-06-10T13:30:20.414557061Z
   */
  createTime?: string;
  /**
   * @example
   * {}
   */
  defaultRuntime?: string;
  /**
   * @example
   * test run
   */
  description?: string;
  /**
   * @example
   * 2021-06-10T13:36:20.405878292Z
   */
  endTime?: string;
  /**
   * @example
   * s1
   */
  entityName?: string;
  /**
   * @example
   * sample
   */
  entityType?: string;
  /**
   * @example
   * oss://my-bucket/exec/
   */
  executeDirectory?: string;
  executeOptions?: GetRunResponseBodyExecuteOptions;
  /**
   * @example
   * {}
   */
  failures?: string;
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * {     "workflow1.task1.param1": "helloooo.txt",     "workflow1.task1.param2": "abc",     "workflow1.task2.param1": "new_helloooo.txt",     "workflow1.task2.param2": "def" }
   */
  inputs?: string;
  labels?: { [key: string]: string };
  /**
   * @example
   * oss://my-bucket/output/
   */
  outputFolder?: string;
  /**
   * @example
   * {         "workflow1.bam": "oss://my-bucket/test.bam",         "workflow1.vcf": "oss://my-bucket/test.vcf"     }
   */
  outputs?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  requestId?: string;
  /**
   * @example
   * run-13BeYuxc0fxO24uA75UppTiMRoQ
   */
  runId?: string;
  /**
   * @example
   * test-run
   */
  runName?: string;
  /**
   * @example
   * EasyGene
   */
  source?: string;
  /**
   * @example
   * 2021-06-10T13:30:24.414557061Z
   */
  startTime?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * sub-13BeXWnGvrOl3MC124tazcJVKaV
   */
  submissionId?: string;
  /**
   * @example
   * {}
   */
  timing?: string;
  /**
   * @example
   * 13579222
   */
  user?: string;
  /**
   * @example
   * test-workspace
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sub-13BeXWnGvrOl3MC124tazcJVKaV
   */
  submissionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TestWorkspace
   */
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
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-template
   */
  templateName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-workspace
   */
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
  /**
   * @example
   * MyApp
   */
  appName?: string;
  /**
   * @example
   * 1
   */
  appRevision?: string;
  /**
   * @example
   * 2021-06-10T13:30:20.414557061Z
   */
  createTime?: string;
  /**
   * @example
   * test template
   */
  description?: string;
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  inputsExpression?: GetTemplateResponseBodyInputsExpression[];
  labels?: { [key: string]: string };
  /**
   * @example
   * 2021-06-10T13:30:20.405878292Z
   */
  lastModifiedTime?: string;
  outputsExpression?: GetTemplateResponseBodyOutputsExpression[];
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  requestId?: string;
  /**
   * @example
   * produceVersion
   */
  revisionTag?: string;
  /**
   * @example
   * test-entity
   */
  rootEntity?: string;
  /**
   * @example
   * EasyGene
   */
  source?: string;
  /**
   * @example
   * test-template
   */
  templateName?: string;
  /**
   * @example
   * test-workspace
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MyTestWorkspace
   */
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
  /**
   * @example
   * my-bucket
   */
  bucketName?: string;
  /**
   * @example
   * 2021-06-16T15:09:14.378297+08:00
   */
  createTime?: string;
  /**
   * @example
   * This is a test workspace
   */
  description?: string;
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * 30
   */
  jobLifecycle?: number;
  labels?: { [key: string]: string };
  /**
   * @example
   * 2021-06-16T15:09:14.378297+08:00
   */
  lastModifiedTime?: string;
  /**
   * @example
   * cn-beijing
   */
  location?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  requestId?: string;
  /**
   * @example
   * TestRole
   */
  role?: string;
  /**
   * @example
   * Active
   */
  status?: string;
  /**
   * @example
   * oss://my-bucket/my-path/
   */
  storage?: string;
  /**
   * @example
   * TestWorkspace
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fastp
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * easygene:opengene/fastp
   */
  source?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TestWorkspace
   */
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
  /**
   * @example
   * InstalledApp
   */
  appName?: string;
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  requestId?: string;
  /**
   * @example
   * TestWorkspace
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * joint-calling
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * joint-calling
   */
  installedAppName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sentieon
   */
  namespaceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * EasyGene
   */
  source?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * default-workspace
   */
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
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * InstalledApp
   */
  installedAppName?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  requestId?: string;
  /**
   * @example
   * TestWorkspace
   */
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
  /**
   * @example
   * App
   */
  appType?: string;
  /**
   * @example
   * true
   */
  isReversed?: boolean;
  /**
   * @example
   * env=test
   */
  labelSelector?: string;
  /**
   * @example
   * WDL
   */
  language?: string;
  /**
   * @example
   * 5
   */
  maxResults?: number;
  /**
   * @remarks
   * Next Token
   * 
   * @example
   * TestToken
   */
  nextToken?: string;
  /**
   * @example
   * createtime
   */
  orderBy?: string;
  /**
   * @example
   * Public
   */
  scope?: string;
  /**
   * @example
   * TestName
   */
  search?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TestWorkspace
   */
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
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * 5
   */
  maxResults?: number;
  /**
   * @remarks
   * Next Token
   * 
   * @example
   * TestToken
   */
  nextToken?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  requestId?: string;
  /**
   * @example
   * 5
   */
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
  /**
   * @example
   * true
   */
  isReversed?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  location?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 0f2cc944-67db-4fb1-bb10-f136cda74bda
   */
  nextToken?: string;
  /**
   * @example
   * LastModified
   */
  orderBy?: string;
  /**
   * @example
   * Sentieon
   */
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
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * ba6d88e2-a6f2-4d2c-a2ae-68b76b078445
   */
  nextToken?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  requestId?: string;
  softwares?: ListAuthorizedSoftwareResponseBodySoftwares[];
  /**
   * @example
   * 100
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  location?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 0f2cc944-67db-4fb1-bb10-f136cda74bda
   */
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
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * ba6d88e2-a6f2-4d2c-a2ae-68b76b078445
   */
  nextToken?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
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
  /**
   * @example
   * false
   */
  isReversed?: boolean;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * MTIzNDU2P1dvcmtzcGFjZT93cy1mMDE4OTgxNGU1ZTkK
   */
  nextToken?: string;
  /**
   * @example
   * createtime
   */
  orderBy?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-workspace
   */
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
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @example
   * MTIzNDU2P1dvcmtzcGFjZT93cy1mMDE4OTgxNGU1ZTkK
   */
  nextToken?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sample
   */
  entityType?: string;
  /**
   * @example
   * false
   */
  isReversed?: boolean;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * MTIzNDU2P1dvcmtzcGFjZT93cy1mMDE4OTgxNGU1ZTkK
   */
  nextToken?: string;
  /**
   * @example
   * createtime
   */
  orderBy?: string;
  /**
   * @example
   * test
   */
  search?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-workspace
   */
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
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * MTIzNDU2P1dvcmtzcGFjZT93cy1mMDE4OTgxNGU1ZTkK
   */
  nextToken?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
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
  /**
   * @example
   * OpenAccess
   */
  appScope?: string;
  /**
   * @example
   * 群体变异
   */
  category?: string;
  /**
   * @example
   * true
   */
  isReversed?: boolean;
  /**
   * @example
   * cn-shenzhen
   */
  location?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 0f2cc944-67db-4fb1-bb10-f136cda74bda
   */
  nextToken?: string;
  /**
   * @example
   * AppName, LastModified, Used
   */
  orderBy?: string;
  /**
   * @example
   * 群体变异
   */
  search?: string;
  /**
   * @example
   * Sentieon
   */
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
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * ba6d88e2-a6f2-4d2c-a2ae-68b76b078445
   */
  nextToken?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
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
  /**
   * @example
   * true
   */
  isReversed?: boolean;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 0f2cc944-67db-4fb1-bb10-f136cda74bda
   */
  nextToken?: string;
  /**
   * @example
   * LastModified, DatasetName
   */
  orderBy?: string;
  /**
   * @example
   * 西蒙斯基因组多样性计划
   */
  search?: string;
  /**
   * @example
   * 遗传多样性
   */
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
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * ba6d88e2-a6f2-4d2c-a2ae-68b76b078445
   */
  nextToken?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 西蒙斯基因组多样性计划
   */
  datasetName?: string;
  /**
   * @example
   * true
   */
  isReversed?: boolean;
  /**
   * @example
   * cn-shanghai
   */
  location?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 0f2cc944-67db-4fb1-bb10-f136cda74bda
   */
  nextToken?: string;
  /**
   * @example
   * LastModified
   */
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
  /**
   * @example
   * 西蒙斯基因组多样性计划
   */
  datasetName?: string;
  entities?: ListPublicDatasetEntitiesResponseBodyEntities[];
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * ba6d88e2-a6f2-4d2c-a2ae-68b76b078445
   */
  nextToken?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 西蒙斯基因组多样性计划
   */
  datasetName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sample
   */
  entityType?: string;
  /**
   * @example
   * true
   */
  isReversed?: boolean;
  /**
   * @example
   * cn-shanghai
   */
  location?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 0f2cc944-67db-4fb1-bb10-f136cda74bda
   */
  nextToken?: string;
  /**
   * @example
   * LastModified
   */
  orderBy?: string;
  /**
   * @example
   * s1
   */
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
  /**
   * @example
   * 西蒙斯基因组多样性计划
   */
  datasetName?: string;
  entityItems?: ListPublicDatasetEntityItemsResponseBodyEntityItems[];
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * ba6d88e2-a6f2-4d2c-a2ae-68b76b078445
   */
  nextToken?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
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
  /**
   * @example
   * true
   */
  isReversed?: boolean;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 0f2cc944-67db-4fb1-bb10-f136cda74bda
   */
  nextToken?: string;
  /**
   * @example
   * LastModified
   */
  orderBy?: string;
  /**
   * @example
   * 遗传多样性
   */
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
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * ba6d88e2-a6f2-4d2c-a2ae-68b76b078445
   */
  nextToken?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  requestId?: string;
  tags?: string[];
  /**
   * @example
   * 100
   */
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
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  regions?: ListRegionsResponseBodyRegions[];
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
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
  /**
   * @example
   * MyApp
   */
  appName?: string;
  /**
   * @example
   * 4.1.4.1-v1.0
   */
  appRevision?: string;
  /**
   * @example
   * S001
   */
  entityName?: string;
  /**
   * @example
   * sample
   */
  entityType?: string;
  /**
   * @example
   * false
   */
  getTotal?: boolean;
  /**
   * @example
   * false
   */
  isReversed?: boolean;
  /**
   * @example
   * env=test
   */
  labelSelector?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * MTIzNDU2P1dvcmtzcGFjZT93cy1mMDE4OTgxNGU1ZTkK
   */
  nextToken?: string;
  /**
   * @example
   * createtime
   */
  orderBy?: string;
  /**
   * @example
   * run-13BeYuxc0fxO24uA75UppTiMRoQ
   */
  search?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * sub-13BeXWnGvrOl3MC124tazcJVKaV
   */
  submissionId?: string;
  /**
   * @example
   * test-workspace
   */
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
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * MTIzNDU2P1dvcmtzcGFjZT93cy1mMDE4OTgxNGU1ZTkK
   */
  nextToken?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  requestId?: string;
  runs?: ListRunsResponseBodyRuns[];
  /**
   * @example
   * 10
   */
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
  /**
   * @example
   * true
   */
  isReversed?: boolean;
  /**
   * @example
   * 5
   */
  maxResults?: number;
  /**
   * @remarks
   * Next Token
   * 
   * @example
   * TestToken
   */
  nextToken?: string;
  /**
   * @example
   * createtime
   */
  orderBy?: string;
  /**
   * @example
   * sub-13BeXWnGvrOl3MC124tazcJVKaV
   */
  search?: string;
  /**
   * @example
   * Failed
   */
  status?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TestWorkspace
   */
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
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * 5
   */
  maxResults?: number;
  /**
   * @example
   * TestToken
   */
  nextToken?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  requestId?: string;
  submissions?: ListSubmissionsResponseBodySubmissions[];
  /**
   * @example
   * 5
   */
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
  /**
   * @example
   * false
   */
  isReversed?: boolean;
  /**
   * @example
   * key1=value1
   */
  labelSelector?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * MTIzNDU2P1dvcmtzcGFjZT93cy1mMDE4OTgxNGU1ZTkK
   */
  nextToken?: string;
  /**
   * @example
   * createtime
   */
  orderBy?: string;
  /**
   * @example
   * test
   */
  search?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-workspace
   */
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
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * MTIzNDU2P1dvcmtzcGFjZT93cy1mMDE4OTgxNGU1ZTkK
   */
  nextToken?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  requestId?: string;
  templates?: ListTemplatesResponseBodyTemplates[];
  /**
   * @example
   * 10
   */
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
  /**
   * @example
   * 3
   */
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
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * MTIzNDU2P1dvcmtzcGFjZT93cy1mMDE4OTgxNGU1ZTkK
   */
  nextToken?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  requestId?: string;
  runs?: ListUserActiveRunsResponseBodyRuns[];
  /**
   * @example
   * 10
   */
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
  /**
   * @example
   * true
   */
  isReversed?: boolean;
  /**
   * @example
   * env=test
   */
  labelSelector?: string;
  /**
   * @example
   * 5
   */
  maxResults?: number;
  /**
   * @remarks
   * NextToken
   * 
   * @example
   * TestToken
   */
  nextToken?: string;
  /**
   * @example
   * createtime
   */
  orderBy?: string;
  /**
   * @example
   * TestName
   */
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
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * 5
   */
  maxResults?: number;
  /**
   * @example
   * TestToken
   */
  nextToken?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  requestId?: string;
  /**
   * @example
   * 5
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sub-13BeXWnGvrOl3MC124tazcJVKaV
   */
  submissionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TestWorkspace
   */
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
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TestApp
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  appRevision?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ProduceVersion
   */
  revisionTag?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TestWorkspace
   */
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
  /**
   * @example
   * TestApp
   */
  appName?: string;
  /**
   * @example
   * 1
   */
  appRevision?: string;
  /**
   * @example
   * 0
   */
  formerRevision?: string;
  /**
   * @example
   * TestTag
   */
  formerTag?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  requestId?: string;
  /**
   * @example
   * ProduceVersion
   */
  revisionTag?: string;
  /**
   * @example
   * TestWorkspace
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  entityItems?: UpdateEntityRequestEntityItems[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sample
   */
  entityType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-workspace
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  entityItemsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sample
   */
  entityType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-workspace
   */
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
  /**
   * @example
   * sample
   */
  entityType?: string;
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  requestId?: string;
  /**
   * @example
   * test-workspace
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  entityItems?: UpdateEntityItemsRequestEntityItems[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sample
   */
  entityType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-workspace
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  entityItemsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sample
   */
  entityType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-workspace
   */
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
  /**
   * @example
   * sample
   */
  entityType?: string;
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  requestId?: string;
  /**
   * @example
   * test-workspace
   */
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
  /**
   * @example
   * This is a test template
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  inputsExpression?: UpdateTemplateRequestInputsExpression[];
  /**
   * @example
   * {"key": "value"}
   */
  labels?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  outputsExpression?: UpdateTemplateRequestOutputsExpression[];
  /**
   * @example
   * test-entity
   */
  rootEntity?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-template
   */
  templateName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-workspace
   */
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
  /**
   * @example
   * This is a test template
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  inputsExpressionShrink?: string;
  /**
   * @example
   * {"key": "value"}
   */
  labels?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  outputsExpressionShrink?: string;
  /**
   * @example
   * test-entity
   */
  rootEntity?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-template
   */
  templateName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-workspace
   */
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
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
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
  /**
   * @example
   * This is a test workspace
   */
  description?: string;
  /**
   * @example
   * 30
   */
  jobLifecycle?: number;
  /**
   * @example
   * {"env":"test"}
   */
  labels?: string;
  /**
   * @example
   * MyTestRamRole
   */
  role?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MyTestWorkspace
   */
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
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  hostId?: string;
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://my-bucket.oss.aliyucs.com/entity.csv
   */
  entityCSVFile?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-workspace
   */
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
  /**
   * @example
   * sample
   */
  entityType?: string;
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  hostId?: string;
  /**
   * @example
   * DA980AD0-158F-44F3-847D-5EAB96C0EB6B
   */
  requestId?: string;
  /**
   * @example
   * test-workspace
   */
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
  /**
   * @example
   * {     "wgs.apply_bqsr.cpu": 4,     "wgs.apply_bqsr.disks": "local-disk 250 cloud_ssd",     "wgs.apply_bqsr.gatk_Launcher": "/usr/local/bin/gatk-4.1.4.1/gatk",     "wgs.apply_bqsr.java_opts": "\\"-XX:GCTimeLimit=50 -XX:GCHeapFreeLimit=10 -Xms3000m -Djava.io.tmpdir=/mnt\\"",     "wgs.apply_bqsr.memory": "8G"}
   */
  content?: string;
  /**
   * @example
   * ./config/example.json
   */
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
  /**
   * @example
   * task echo {   String txt_out = "default_txt_out"   String dd_out = "default_dd_out"    command {     echo Hello > ${txt_out}     /bin/bash -c "dd if=/dev/zero of=${dd_out} bs=1M count=15"     echo "This is a test std out."   }    runtime {     cpu: "2"     memory: "4G"     autoReleaseJob: false     reserveOnFail: true     userData: "key1 value1"     disks: "local-disk 40 cloud_ssd, /home/mount/ 40 cloud_efficiency"     tag: "TestTag"   }    output {     File outTxtFile = "${txt_out}"     File outDdFile = "${dd_out}"   } }
   */
  content?: string;
  /**
   * @example
   * ./task/echo.wdl
   */
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
  /**
   * @example
   * s1
   */
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
  /**
   * @example
   * True
   */
  callCaching?: boolean;
  /**
   * @example
   * Mount
   */
  dataLoader?: string;
  /**
   * @example
   * True
   */
  deleteIntermediateResults?: boolean;
  /**
   * @example
   * NoNewCalls
   */
  failureMode?: string;
  /**
   * @example
   * True
   */
  useRelativeOutputPaths?: boolean;
  static names(): { [key: string]: string } {
    return {
      callCaching: 'CallCaching',
      dataLoader: 'DataLoader',
      deleteIntermediateResults: 'DeleteIntermediateResults',
      failureMode: 'FailureMode',
      useRelativeOutputPaths: 'UseRelativeOutputPaths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callCaching: 'boolean',
      dataLoader: 'string',
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
  /**
   * @example
   * test help
   */
  help?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  required?: boolean;
  /**
   * @example
   * 0
   */
  stepOrder?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Task1
   */
  taskName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fastq1
   */
  variableName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * File
   */
  variableType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss://bucket/file1.fastq
   */
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
  /**
   * @example
   * test help
   */
  help?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  required?: boolean;
  /**
   * @example
   * 1
   */
  stepOrder?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Task1
   */
  taskName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bam
   */
  variableName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * File
   */
  variableType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss://bucket/file.bam
   */
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
  /**
   * @example
   * {     "wgs.apply_bqsr.cpu": 4,     "wgs.apply_bqsr.disks": "local-disk 250 cloud_ssd",     "wgs.apply_bqsr.gatk_Launcher": "/usr/local/bin/gatk-4.1.4.1/gatk",     "wgs.apply_bqsr.java_opts": "\\"-XX:GCTimeLimit=50 -XX:GCHeapFreeLimit=10 -Xms3000m -Djava.io.tmpdir=/mnt\\"",     "wgs.apply_bqsr.memory": "8G"}
   */
  content?: string;
  /**
   * @example
   * ./config/example.json
   */
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
  /**
   * @example
   * task echo {   String txt_out = "default_txt_out"   String dd_out = "default_dd_out"    command {     echo Hello > ${txt_out}     /bin/bash -c "dd if=/dev/zero of=${dd_out} bs=1M count=15"     echo "This is a test std out."   }    runtime {     cpu: "2"     memory: "4G"     autoReleaseJob: false     reserveOnFail: true     userData: "key1 value1"     disks: "local-disk 40 cloud_ssd, /home/mount/ 40 cloud_efficiency"     tag: "TestTag"   }    output {     File outTxtFile = "${txt_out}"     File outDdFile = "${dd_out}"   } }
   */
  content?: string;
  /**
   * @example
   * ./task/echo.wdl
   */
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
  /**
   * @example
   * help information
   */
  help?: string;
  /**
   * @example
   * true
   */
  required?: boolean;
  /**
   * @example
   * 1
   */
  stepOrder?: number;
  /**
   * @example
   * TestTaskName
   */
  taskName?: string;
  /**
   * @example
   * TestVariableName
   */
  variableName?: string;
  /**
   * @example
   * TestVariableType
   */
  variableType?: string;
  /**
   * @example
   * TestVariableValue
   */
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
  /**
   * @example
   * Example help information
   */
  help?: string;
  /**
   * @example
   * true
   */
  required?: boolean;
  /**
   * @example
   * 1
   */
  stepOrder?: number;
  /**
   * @example
   * TestTaskName
   */
  taskName?: string;
  /**
   * @example
   * TestVariableName
   */
  variableName?: string;
  /**
   * @example
   * Int
   */
  variableType?: string;
  /**
   * @example
   * ExampleValue
   */
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
  /**
   * @example
   * 2021-06-16T15:09:14.378297+08:00
   */
  createTime?: string;
  /**
   * @example
   * 1
   */
  revision?: string;
  /**
   * @example
   * Example revision comment
   */
  revisionComment?: string;
  /**
   * @example
   * ProduceVersion
   */
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
  /**
   * @example
   * PRIMARY_DESCRIPTOR（主WDL） SECONDARY_DESCRIPTOR（依赖WDL）  CONFIG（推荐的输入参数）  CONTAINERFILE（镜像制作文件）  DATA（输入参数中引用的参考文件）  OTHER（其他）
   */
  fileType?: string;
  /**
   * @example
   * ./main.wdl
   */
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
  /**
   * @example
   * 1.0
   */
  appVersion?: string;
  /**
   * @example
   * 初始版本
   */
  comment?: string;
  /**
   * @example
   * yyyy/MM/dd HH:mm:ss
   */
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
  /**
   * @example
   * false
   */
  callCaching?: boolean;
  dataLoader?: string;
  /**
   * @example
   * false
   */
  deleteIntermediateResults?: boolean;
  /**
   * @example
   * NoNewCalls
   */
  failureMode?: string;
  /**
   * @example
   * false
   */
  useRelativeOutputPaths?: boolean;
  static names(): { [key: string]: string } {
    return {
      callCaching: 'CallCaching',
      dataLoader: 'DataLoader',
      deleteIntermediateResults: 'DeleteIntermediateResults',
      failureMode: 'FailureMode',
      useRelativeOutputPaths: 'UseRelativeOutputPaths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callCaching: 'boolean',
      dataLoader: 'string',
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
  /**
   * @example
   * 5
   */
  aborted?: number;
  /**
   * @example
   * 5
   */
  aborting?: number;
  /**
   * @example
   * 5
   */
  failed?: number;
  /**
   * @example
   * 5
   */
  pending?: number;
  /**
   * @example
   * 5
   */
  running?: number;
  /**
   * @example
   * 5
   */
  submitted?: number;
  /**
   * @example
   * 5
   */
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
  /**
   * @example
   * 2021-06-16T15:09:14.378297+08:00
   */
  createTime?: string;
  /**
   * @example
   * 2021-06-16T15:09:14.378297+08:00
   */
  endTime?: string;
  /**
   * @example
   * TestEntityType
   */
  entityType?: string;
  runStats?: GetSubmissionResponseBodySubmissionRunStats;
  /**
   * @example
   * 2021-06-16T15:09:14.378297+08:00
   */
  startTime?: string;
  /**
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @example
   * sub-13BeXWnGvrOl3MC124tazcJVKaV
   */
  submissionId?: string;
  /**
   * @example
   * TestWorkspace
   */
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
  /**
   * @example
   * test help
   */
  help?: string;
  /**
   * @example
   * true
   */
  required?: boolean;
  /**
   * @example
   * 0
   */
  stepOrder?: number;
  /**
   * @example
   * Task1
   */
  taskName?: string;
  /**
   * @example
   * v1
   */
  variableName?: string;
  /**
   * @example
   * File
   */
  variableType?: string;
  /**
   * @example
   * oss://bucket/file1.fastq
   */
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
  /**
   * @example
   * true
   */
  required?: boolean;
  /**
   * @example
   * 2
   */
  stepOrder?: number;
  /**
   * @example
   * jobname
   */
  taskName?: string;
  /**
   * @example
   * fastq1
   */
  variableName?: string;
  /**
   * @example
   * string
   */
  variableType?: string;
  /**
   * @example
   * abc_1.fastq.gz
   */
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
  /**
   * @example
   * v1
   */
  appDefaultVersion?: string;
  /**
   * @example
   * TestApp
   */
  appName?: string;
  /**
   * @example
   * App
   */
  appType?: string;
  /**
   * @example
   * 2021-06-10T13:30:20.414557061Z
   */
  createTime?: string;
  /**
   * @example
   * This is a test app
   */
  description?: string;
  labels?: { [key: string]: string };
  /**
   * @example
   * WDL
   */
  language?: string;
  /**
   * @example
   * Public
   */
  scope?: string;
  /**
   * @example
   * EasyGene
   */
  source?: string;
  /**
   * @example
   * TestWorkspace
   */
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
  /**
   * @example
   * https://help.aliyun.com/document_detail/257750.html
   */
  helpLink?: string;
  /**
   * @example
   * yyyy/MM/dd HH:mm:ss
   */
  lastModified?: string;
  locations?: string[];
  promotion?: string;
  /**
   * @example
   * 201911
   */
  softwareDefaultVersion?: string;
  /**
   * @example
   * NGS数据二级分析软件，提供基于CPU的加速方案，可替代BWA，GATK，HaplotypeCaller，Mutect和Mutect2等分析流程。包括DNASeq，DNAScope，TNScope等工具
   */
  softwareDescription?: string;
  /**
   * @example
   * https://img.alicdn.com/imgextra/i2/O1CN01mmZovA1UJfeKQAYvF_!!6000000002497-2-tps-256-256.png
   */
  softwareIcon?: string;
  /**
   * @example
   * 0.15
   */
  softwareLicenseFee?: number;
  /**
   * @example
   * Sentieon加速软件
   */
  softwareLongName?: string;
  /**
   * @example
   * sentieon
   */
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
  /**
   * @example
   * a suite of programs for interacting with high-throughput sequencing data.
   */
  containerImageDescription?: string;
  /**
   * @example
   * samtools
   */
  containerImageName?: string;
  /**
   * @example
   * samtools
   */
  containerImageNamespace?: string;
  containerImageVersions?: string[];
  /**
   * @example
   * registry-vpc.cn-shenzhen.aliyuncs.com
   */
  containerRegistry?: string;
  /**
   * @example
   * yyyy/MM/dd HH:mm:ss
   */
  lastModified?: string;
  /**
   * @example
   * cn-shenzhen
   */
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
  /**
   * @example
   * sample
   */
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
  /**
   * @example
   * s1
   */
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
  /**
   * @example
   * 1.0
   */
  appDefaultVersion?: string;
  /**
   * @example
   * This is app description.
   */
  appDescription?: string;
  /**
   * @example
   * 实际使用时，计算该应用消耗的资源费用。
   */
  appFee?: string;
  /**
   * @example
   * joint-calling
   */
  appName?: string;
  /**
   * @example
   * OpenAccess
   */
  appScope?: string;
  categories?: string[];
  /**
   * @example
   * yyyy/MM/dd HH:mm:ss
   */
  lastModified?: string;
  locations?: string[];
  /**
   * @example
   * sentieon
   */
  namespaceName?: string;
  /**
   * @example
   * true
   */
  pinned?: boolean;
  /**
   * @example
   * Sentieon
   */
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
  /**
   * @example
   * This is description about dataset.
   */
  about?: string;
  /**
   * @example
   * This are access requirements.
   */
  accessRequirements?: string;
  /**
   * @example
   * This is copyright.
   */
  copyright?: string;
  /**
   * @example
   * This are access requirements
   */
  datasetDescription?: string;
  datasetId?: string;
  /**
   * @example
   * 西蒙斯基因组多样性计划
   */
  datasetName?: string;
  /**
   * @example
   * yyyy/MM/dd HH:mm:ss
   */
  lastModified?: string;
  locations?: string[];
  tags?: string[];
  /**
   * @example
   * 源站更新后及时同步
   */
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
  /**
   * @example
   * sample
   */
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
  /**
   * @example
   * sample
   */
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
  /**
   * @example
   * 华北2-北京
   */
  localName?: string;
  /**
   * @example
   * easygene.cn-beijing.aliyuncs.com
   */
  regionEndpoint?: string;
  /**
   * @example
   * cn-beijing
   */
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
  /**
   * @example
   * false
   */
  callCaching?: boolean;
  /**
   * @example
   * false
   */
  deleteIntermediateResults?: boolean;
  /**
   * @example
   * NoNewCalls
   */
  failureMode?: string;
  /**
   * @example
   * false
   */
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
  /**
   * @example
   * MyApp
   */
  appName?: string;
  /**
   * @example
   * 1
   */
  appRevision?: string;
  /**
   * @example
   * 2021-06-10T13:30:20.414557061Z
   */
  createTime?: string;
  /**
   * @example
   * {}
   */
  defaultRuntime?: string;
  /**
   * @example
   * 2021-06-10T13:38:20.414557061Z
   */
  endTime?: string;
  /**
   * @example
   * s1
   */
  entityName?: string;
  /**
   * @example
   * sample
   */
  entityType?: string;
  /**
   * @example
   * oss://my-bucket/my-execdir/
   */
  executeDirectory?: string;
  executeOptions?: ListRunsResponseBodyRunsExecuteOptions;
  /**
   * @example
   * {     "workflow1.task1.param1": "helloooo.txt",     "workflow1.task1.param2": "abc",     "workflow1.task2.param1": "new_helloooo.txt",     "workflow1.task2.param2": "def" }
   */
  inputs?: string;
  labels?: { [key: string]: string };
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * run-13BeYuxc0fxO24uA75UppTiMRoQ
   */
  runId?: string;
  /**
   * @example
   * test-run
   */
  runName?: string;
  /**
   * @example
   * EasyGene
   */
  source?: string;
  /**
   * @example
   * 2021-06-10T13:31:20.414557061Z
   */
  startTime?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * sub-13BeXWnGvrOl3MC124tazcJVKaV
   */
  submissionId?: string;
  /**
   * @example
   * test-workspace
   */
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
  /**
   * @example
   * 5
   */
  aborted?: number;
  /**
   * @example
   * 5
   */
  aborting?: number;
  /**
   * @example
   * 5
   */
  failed?: number;
  /**
   * @example
   * 5
   */
  pending?: number;
  /**
   * @example
   * 5
   */
  running?: number;
  /**
   * @example
   * 5
   */
  submitted?: number;
  /**
   * @example
   * 5
   */
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
  /**
   * @example
   * 2021-06-16T15:09:14.378297+08:00
   */
  createTime?: string;
  /**
   * @example
   * 2021-06-16T15:09:14.378297+08:00
   */
  endTime?: string;
  /**
   * @example
   * TestEntityType
   */
  entityType?: string;
  runStats?: ListSubmissionsResponseBodySubmissionsRunStats;
  /**
   * @example
   * 2021-06-16T15:09:14.378297+08:00
   */
  startTime?: string;
  /**
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @example
   * sub-13BeXWnGvrOl3MC124tazcJVKaV
   */
  submissionId?: string;
  /**
   * @example
   * TestWorkspace
   */
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
  /**
   * @example
   * help test
   */
  help?: string;
  /**
   * @example
   * true
   */
  required?: boolean;
  /**
   * @example
   * 0
   */
  stepOrder?: number;
  /**
   * @example
   * task1
   */
  taskName?: string;
  /**
   * @example
   * fastq1
   */
  variableName?: string;
  /**
   * @example
   * File
   */
  variableType?: string;
  /**
   * @example
   * oss://bucket/file1.fastq
   */
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
  /**
   * @example
   * help test
   */
  help?: string;
  /**
   * @example
   * true
   */
  required?: boolean;
  /**
   * @example
   * 1
   */
  stepOrder?: number;
  /**
   * @example
   * task1
   */
  taskName?: string;
  /**
   * @example
   * v1
   */
  variableName?: string;
  /**
   * @example
   * File
   */
  variableType?: string;
  /**
   * @example
   * oss://bucket/test.vcf
   */
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
  /**
   * @example
   * my-app
   */
  appName?: string;
  /**
   * @example
   * 1
   */
  appRevision?: string;
  /**
   * @example
   * 2021-06-10T13:30:20.414557061Z
   */
  createTime?: string;
  /**
   * @example
   * This is a test template
   */
  description?: string;
  inputsExpression?: ListTemplatesResponseBodyTemplatesInputsExpression[];
  labels?: { [key: string]: string };
  /**
   * @example
   * 2021-06-10T13:30:20.414557061Z
   */
  lastModifiedTime?: string;
  outputsExpression?: ListTemplatesResponseBodyTemplatesOutputsExpression[];
  /**
   * @example
   * ProduceVersion
   */
  revisionTag?: string;
  /**
   * @example
   * test-entity
   */
  rootEntity?: string;
  /**
   * @example
   * test-template
   */
  templateName?: string;
  /**
   * @example
   * test-workspace
   */
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
  /**
   * @example
   * false
   */
  callCaching?: boolean;
  /**
   * @example
   * false
   */
  deleteIntermediateResults?: boolean;
  /**
   * @example
   * NoNewCalls
   */
  failureMode?: string;
  /**
   * @example
   * false
   */
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
  /**
   * @example
   * MyApp
   */
  appName?: string;
  /**
   * @example
   * 1
   */
  appRevision?: string;
  /**
   * @example
   * 2021-06-10T13:30:20.414557061Z
   */
  createTime?: string;
  /**
   * @example
   * {}
   */
  defaultRuntime?: string;
  /**
   * @example
   * 2021-06-10T13:30:20.414557061Z
   */
  endTime?: string;
  /**
   * @example
   * s1
   */
  entityName?: string;
  /**
   * @example
   * sample
   */
  entityType?: string;
  executeDirectory?: string;
  executeOptions?: ListUserActiveRunsResponseBodyRunsExecuteOptions;
  /**
   * @example
   * { "workflow1.task1.param1": "helloooo.txt", "workflow1.task1.param2": "abc", "workflow1.task2.param1": "new_helloooo.txt", "workflow1.task2.param2": "def" }
   */
  inputs?: string;
  labels?: { [key: string]: string };
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * run-13BeYuxc0fxO24uA75UppTiMRoQ
   */
  runId?: string;
  /**
   * @example
   * test-run
   */
  runName?: string;
  /**
   * @example
   * EasyGene
   */
  source?: string;
  /**
   * @example
   * 2021-06-10T13:30:20.414557061Z
   */
  startTime?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * sub-13BeXWnGvrOl3MC124tazcJVKaV
   */
  submissionId?: string;
  /**
   * @example
   * test-workspace
   */
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
  /**
   * @example
   * my-bucket
   */
  bucketName?: string;
  /**
   * @example
   * 2021-06-16T15:09:14.378297+08:00
   */
  createTime?: string;
  /**
   * @example
   * This is a test workspace
   */
  description?: string;
  /**
   * @example
   * 30
   */
  jobLifecycle?: number;
  labels?: { [key: string]: string };
  /**
   * @example
   * 2021-06-16T15:09:14.378297+08:00
   */
  lastModifiedTime?: string;
  /**
   * @example
   * cn-beijing
   */
  location?: string;
  /**
   * @remarks
   * RAM Role
   * 
   * @example
   * TestRole
   */
  role?: string;
  /**
   * @example
   * Active
   */
  status?: string;
  /**
   * @example
   * oss://my-bucket/my-path/
   */
  storage?: string;
  /**
   * @example
   * TestWorkspace
   */
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
  /**
   * @example
   * s1
   */
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
  /**
   * @example
   * s1
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * True
   */
  required?: boolean;
  /**
   * @example
   * 2
   */
  stepOrder?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Task1
   */
  taskName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fastq1
   */
  variableName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * String
   */
  variableType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * read_1.fastq.gz
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * True
   */
  required?: boolean;
  stepOrder?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Task1
   */
  taskName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Bam
   */
  variableName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * String
   */
  variableType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * out.bam
   */
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

  /**
   * 暂停任务
   * 
   * @param request - AbortRunRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AbortRunResponse
   */
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

  /**
   * 暂停任务
   * 
   * @param request - AbortRunRequest
   * @returns AbortRunResponse
   */
  async abortRun(request: AbortRunRequest): Promise<AbortRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.abortRunWithOptions(request, runtime);
  }

  /**
   * 取消投递
   * 
   * @param request - AbortSubmissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AbortSubmissionResponse
   */
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

  /**
   * 取消投递
   * 
   * @param request - AbortSubmissionRequest
   * @returns AbortSubmissionResponse
   */
  async abortSubmission(request: AbortSubmissionRequest): Promise<AbortSubmissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.abortSubmissionWithOptions(request, runtime);
  }

  /**
   * 拷贝公共数据集的数据表格
   * 
   * @param request - CopyPublicEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CopyPublicEntityResponse
   */
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

  /**
   * 拷贝公共数据集的数据表格
   * 
   * @param request - CopyPublicEntityRequest
   * @returns CopyPublicEntityResponse
   */
  async copyPublicEntity(request: CopyPublicEntityRequest): Promise<CopyPublicEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.copyPublicEntityWithOptions(request, runtime);
  }

  /**
   * 创建应用
   * 
   * @param tmpReq - CreateAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppResponse
   */
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

  /**
   * 创建应用
   * 
   * @param request - CreateAppRequest
   * @returns CreateAppResponse
   */
  async createApp(request: CreateAppRequest): Promise<CreateAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppWithOptions(request, runtime);
  }

  /**
   * 创建数据表格
   * 
   * @param tmpReq - CreateEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEntityResponse
   */
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

  /**
   * 创建数据表格
   * 
   * @param request - CreateEntityRequest
   * @returns CreateEntityResponse
   */
  async createEntity(request: CreateEntityRequest): Promise<CreateEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEntityWithOptions(request, runtime);
  }

  /**
   * 创建任务
   * 
   * @param tmpReq - CreateRunRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRunResponse
   */
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

  /**
   * 创建任务
   * 
   * @param request - CreateRunRequest
   * @returns CreateRunResponse
   */
  async createRun(request: CreateRunRequest): Promise<CreateRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRunWithOptions(request, runtime);
  }

  /**
   * 创建提交
   * 
   * @param tmpReq - CreateSubmissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSubmissionResponse
   */
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

  /**
   * 创建提交
   * 
   * @param request - CreateSubmissionRequest
   * @returns CreateSubmissionResponse
   */
  async createSubmission(request: CreateSubmissionRequest): Promise<CreateSubmissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSubmissionWithOptions(request, runtime);
  }

  /**
   * 创建应用模板
   * 
   * @param tmpReq - CreateTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTemplateResponse
   */
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

  /**
   * 创建应用模板
   * 
   * @param request - CreateTemplateRequest
   * @returns CreateTemplateResponse
   */
  async createTemplate(request: CreateTemplateRequest): Promise<CreateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTemplateWithOptions(request, runtime);
  }

  /**
   * 创建工作空间
   * 
   * @param request - CreateWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkspaceResponse
   */
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

  /**
   * 创建工作空间
   * 
   * @param request - CreateWorkspaceRequest
   * @returns CreateWorkspaceResponse
   */
  async createWorkspace(request: CreateWorkspaceRequest): Promise<CreateWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWorkspaceWithOptions(request, runtime);
  }

  /**
   * 删除应用
   * 
   * @param request - DeleteAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppResponse
   */
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

  /**
   * 删除应用
   * 
   * @param request - DeleteAppRequest
   * @returns DeleteAppResponse
   */
  async deleteApp(request: DeleteAppRequest): Promise<DeleteAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppWithOptions(request, runtime);
  }

  /**
   * 删除实体表格
   * 
   * @param request - DeleteEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEntityResponse
   */
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

  /**
   * 删除实体表格
   * 
   * @param request - DeleteEntityRequest
   * @returns DeleteEntityResponse
   */
  async deleteEntity(request: DeleteEntityRequest): Promise<DeleteEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEntityWithOptions(request, runtime);
  }

  /**
   * 删除数据表格的条目
   * 
   * @param tmpReq - DeleteEntityItemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEntityItemsResponse
   */
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

  /**
   * 删除数据表格的条目
   * 
   * @param request - DeleteEntityItemsRequest
   * @returns DeleteEntityItemsResponse
   */
  async deleteEntityItems(request: DeleteEntityItemsRequest): Promise<DeleteEntityItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEntityItemsWithOptions(request, runtime);
  }

  /**
   * 删除任务
   * 
   * @param request - DeleteRunRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRunResponse
   */
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

  /**
   * 删除任务
   * 
   * @param request - DeleteRunRequest
   * @returns DeleteRunResponse
   */
  async deleteRun(request: DeleteRunRequest): Promise<DeleteRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRunWithOptions(request, runtime);
  }

  /**
   * 删除投递
   * 
   * @param request - DeleteSubmissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSubmissionResponse
   */
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

  /**
   * 删除投递
   * 
   * @param request - DeleteSubmissionRequest
   * @returns DeleteSubmissionResponse
   */
  async deleteSubmission(request: DeleteSubmissionRequest): Promise<DeleteSubmissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSubmissionWithOptions(request, runtime);
  }

  /**
   * 删除应用模板
   * 
   * @param request - DeleteTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTemplateResponse
   */
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

  /**
   * 删除应用模板
   * 
   * @param request - DeleteTemplateRequest
   * @returns DeleteTemplateResponse
   */
  async deleteTemplate(request: DeleteTemplateRequest): Promise<DeleteTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTemplateWithOptions(request, runtime);
  }

  /**
   * 删除工作空间
   * 
   * @param request - DeleteWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkspaceResponse
   */
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

  /**
   * 删除工作空间
   * 
   * @param request - DeleteWorkspaceRequest
   * @returns DeleteWorkspaceResponse
   */
  async deleteWorkspace(request: DeleteWorkspaceRequest): Promise<DeleteWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWorkspaceWithOptions(request, runtime);
  }

  /**
   * 下载数据表格
   * 
   * @param tmpReq - DownloadEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DownloadEntityResponse
   */
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

  /**
   * 下载数据表格
   * 
   * @param request - DownloadEntityRequest
   * @returns DownloadEntityResponse
   */
  async downloadEntity(request: DownloadEntityRequest): Promise<DownloadEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadEntityWithOptions(request, runtime);
  }

  /**
   * 查询应用详情
   * 
   * @param request - GetAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppResponse
   */
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

  /**
   * 查询应用详情
   * 
   * @param request - GetAppRequest
   * @returns GetAppResponse
   */
  async getApp(request: GetAppRequest): Promise<GetAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppWithOptions(request, runtime);
  }

  /**
   * 查询数据表格信息
   * 
   * @param request - GetEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEntityResponse
   */
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

  /**
   * 查询数据表格信息
   * 
   * @param request - GetEntityRequest
   * @returns GetEntityResponse
   */
  async getEntity(request: GetEntityRequest): Promise<GetEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEntityWithOptions(request, runtime);
  }

  /**
   * 查询平台公共应用详情
   * 
   * @param tmpReq - GetGlobalAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGlobalAppResponse
   */
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

  /**
   * 查询平台公共应用详情
   * 
   * @param request - GetGlobalAppRequest
   * @returns GetGlobalAppResponse
   */
  async getGlobalApp(request: GetGlobalAppRequest): Promise<GetGlobalAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGlobalAppWithOptions(request, runtime);
  }

  /**
   * 查询平台公共数据集详情
   * 
   * @param tmpReq - GetPublicDatasetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPublicDatasetResponse
   */
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

  /**
   * 查询平台公共数据集详情
   * 
   * @param request - GetPublicDatasetRequest
   * @returns GetPublicDatasetResponse
   */
  async getPublicDataset(request: GetPublicDatasetRequest): Promise<GetPublicDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPublicDatasetWithOptions(request, runtime);
  }

  /**
   * 查询平台公共数据集特定的实体定义
   * 
   * @param request - GetPublicDatasetEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPublicDatasetEntityResponse
   */
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

  /**
   * 查询平台公共数据集特定的实体定义
   * 
   * @param request - GetPublicDatasetEntityRequest
   * @returns GetPublicDatasetEntityResponse
   */
  async getPublicDatasetEntity(request: GetPublicDatasetEntityRequest): Promise<GetPublicDatasetEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPublicDatasetEntityWithOptions(request, runtime);
  }

  /**
   * 获取任务详情
   * 
   * @param request - GetRunRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRunResponse
   */
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

  /**
   * 获取任务详情
   * 
   * @param request - GetRunRequest
   * @returns GetRunResponse
   */
  async getRun(request: GetRunRequest): Promise<GetRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRunWithOptions(request, runtime);
  }

  /**
   * 获取投递详情
   * 
   * @param request - GetSubmissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSubmissionResponse
   */
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

  /**
   * 获取投递详情
   * 
   * @param request - GetSubmissionRequest
   * @returns GetSubmissionResponse
   */
  async getSubmission(request: GetSubmissionRequest): Promise<GetSubmissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSubmissionWithOptions(request, runtime);
  }

  /**
   * 查询应用模板的详情
   * 
   * @param request - GetTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemplateResponse
   */
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

  /**
   * 查询应用模板的详情
   * 
   * @param request - GetTemplateRequest
   * @returns GetTemplateResponse
   */
  async getTemplate(request: GetTemplateRequest): Promise<GetTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTemplateWithOptions(request, runtime);
  }

  /**
   * 查询工作空间详情
   * 
   * @param request - GetWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkspaceResponse
   */
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

  /**
   * 查询工作空间详情
   * 
   * @param request - GetWorkspaceRequest
   * @returns GetWorkspaceResponse
   */
  async getWorkspace(request: GetWorkspaceRequest): Promise<GetWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWorkspaceWithOptions(request, runtime);
  }

  /**
   * 导入应用。
   * 
   * @param request - ImportAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportAppResponse
   */
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

  /**
   * 导入应用。
   * 
   * @param request - ImportAppRequest
   * @returns ImportAppResponse
   */
  async importApp(request: ImportAppRequest): Promise<ImportAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importAppWithOptions(request, runtime);
  }

  /**
   * 安装平台公共应用到工作空间中。
   * 
   * @param request - InstallGlobalAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallGlobalAppResponse
   */
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

  /**
   * 安装平台公共应用到工作空间中。
   * 
   * @param request - InstallGlobalAppRequest
   * @returns InstallGlobalAppResponse
   */
  async installGlobalApp(request: InstallGlobalAppRequest): Promise<InstallGlobalAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.installGlobalAppWithOptions(request, runtime);
  }

  /**
   * 列出应用
   * 
   * @param request - ListAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppsResponse
   */
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

  /**
   * 列出应用
   * 
   * @param request - ListAppsRequest
   * @returns ListAppsResponse
   */
  async listApps(request: ListAppsRequest): Promise<ListAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppsWithOptions(request, runtime);
  }

  /**
   * 获取平台第三方软件列表
   * 
   * @param request - ListAuthorizedSoftwareRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAuthorizedSoftwareResponse
   */
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

  /**
   * 获取平台第三方软件列表
   * 
   * @param request - ListAuthorizedSoftwareRequest
   * @returns ListAuthorizedSoftwareResponse
   */
  async listAuthorizedSoftware(request: ListAuthorizedSoftwareRequest): Promise<ListAuthorizedSoftwareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAuthorizedSoftwareWithOptions(request, runtime);
  }

  /**
   * 获取平台公共容器镜像列表
   * 
   * @param request - ListContainerImagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListContainerImagesResponse
   */
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

  /**
   * 获取平台公共容器镜像列表
   * 
   * @param request - ListContainerImagesRequest
   * @returns ListContainerImagesResponse
   */
  async listContainerImages(request: ListContainerImagesRequest): Promise<ListContainerImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listContainerImagesWithOptions(request, runtime);
  }

  /**
   * 列出数据实体列表
   * 
   * @param request - ListEntitiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEntitiesResponse
   */
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

  /**
   * 列出数据实体列表
   * 
   * @param request - ListEntitiesRequest
   * @returns ListEntitiesResponse
   */
  async listEntities(request: ListEntitiesRequest): Promise<ListEntitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEntitiesWithOptions(request, runtime);
  }

  /**
   * 列出数据表格的条目
   * 
   * @param request - ListEntityItemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEntityItemsResponse
   */
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

  /**
   * 列出数据表格的条目
   * 
   * @param request - ListEntityItemsRequest
   * @returns ListEntityItemsResponse
   */
  async listEntityItems(request: ListEntityItemsRequest): Promise<ListEntityItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEntityItemsWithOptions(request, runtime);
  }

  /**
   * 获取平台公共应用列表
   * 
   * @param request - ListGlobalAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGlobalAppsResponse
   */
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

  /**
   * 获取平台公共应用列表
   * 
   * @param request - ListGlobalAppsRequest
   * @returns ListGlobalAppsResponse
   */
  async listGlobalApps(request: ListGlobalAppsRequest): Promise<ListGlobalAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGlobalAppsWithOptions(request, runtime);
  }

  /**
   * 获取平台公共数据集列表
   * 
   * @param request - ListPublicDatasetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPublicDatasetResponse
   */
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

  /**
   * 获取平台公共数据集列表
   * 
   * @param request - ListPublicDatasetRequest
   * @returns ListPublicDatasetResponse
   */
  async listPublicDataset(request: ListPublicDatasetRequest): Promise<ListPublicDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPublicDatasetWithOptions(request, runtime);
  }

  /**
   * 查询平台公共数据集包含的实体列表
   * 
   * @param request - ListPublicDatasetEntitiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPublicDatasetEntitiesResponse
   */
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

  /**
   * 查询平台公共数据集包含的实体列表
   * 
   * @param request - ListPublicDatasetEntitiesRequest
   * @returns ListPublicDatasetEntitiesResponse
   */
  async listPublicDatasetEntities(request: ListPublicDatasetEntitiesRequest): Promise<ListPublicDatasetEntitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPublicDatasetEntitiesWithOptions(request, runtime);
  }

  /**
   * 查询平台公共数据集特定的实体表格数据
   * 
   * @param request - ListPublicDatasetEntityItemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPublicDatasetEntityItemsResponse
   */
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

  /**
   * 查询平台公共数据集特定的实体表格数据
   * 
   * @param request - ListPublicDatasetEntityItemsRequest
   * @returns ListPublicDatasetEntityItemsResponse
   */
  async listPublicDatasetEntityItems(request: ListPublicDatasetEntityItemsRequest): Promise<ListPublicDatasetEntityItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPublicDatasetEntityItemsWithOptions(request, runtime);
  }

  /**
   * 列出所有公共数据集标签
   * 
   * @param request - ListPublicDatasetTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPublicDatasetTagsResponse
   */
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

  /**
   * 列出所有公共数据集标签
   * 
   * @param request - ListPublicDatasetTagsRequest
   * @returns ListPublicDatasetTagsResponse
   */
  async listPublicDatasetTags(request: ListPublicDatasetTagsRequest): Promise<ListPublicDatasetTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPublicDatasetTagsWithOptions(request, runtime);
  }

  /**
   * 查询基因分析平台产品的可用地域。
   * 
   * @param request - ListRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRegionsResponse
   */
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

  /**
   * 查询基因分析平台产品的可用地域。
   * @returns ListRegionsResponse
   */
  async listRegions(): Promise<ListRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRegionsWithOptions(runtime);
  }

  /**
   * 列出任务
   * 
   * @param request - ListRunsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRunsResponse
   */
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

  /**
   * 列出任务
   * 
   * @param request - ListRunsRequest
   * @returns ListRunsResponse
   */
  async listRuns(request: ListRunsRequest): Promise<ListRunsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRunsWithOptions(request, runtime);
  }

  /**
   * 列出投递
   * 
   * @param request - ListSubmissionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSubmissionsResponse
   */
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

  /**
   * 列出投递
   * 
   * @param request - ListSubmissionsRequest
   * @returns ListSubmissionsResponse
   */
  async listSubmissions(request: ListSubmissionsRequest): Promise<ListSubmissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSubmissionsWithOptions(request, runtime);
  }

  /**
   * 列出应用模板
   * 
   * @param request - ListTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTemplatesResponse
   */
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

  /**
   * 列出应用模板
   * 
   * @param request - ListTemplatesRequest
   * @returns ListTemplatesResponse
   */
  async listTemplates(request: ListTemplatesRequest): Promise<ListTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTemplatesWithOptions(request, runtime);
  }

  /**
   * 最近任务列表
   * 
   * @param request - ListUserActiveRunsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserActiveRunsResponse
   */
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

  /**
   * 最近任务列表
   * 
   * @param request - ListUserActiveRunsRequest
   * @returns ListUserActiveRunsResponse
   */
  async listUserActiveRuns(request: ListUserActiveRunsRequest): Promise<ListUserActiveRunsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserActiveRunsWithOptions(request, runtime);
  }

  /**
   * 列出工作空间
   * 
   * @param request - ListWorkspacesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkspacesResponse
   */
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

  /**
   * 列出工作空间
   * 
   * @param request - ListWorkspacesRequest
   * @returns ListWorkspacesResponse
   */
  async listWorkspaces(request: ListWorkspacesRequest): Promise<ListWorkspacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWorkspacesWithOptions(request, runtime);
  }

  /**
   * 恢复投递
   * 
   * @param request - ResumeSubmissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeSubmissionResponse
   */
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

  /**
   * 恢复投递
   * 
   * @param request - ResumeSubmissionRequest
   * @returns ResumeSubmissionResponse
   */
  async resumeSubmission(request: ResumeSubmissionRequest): Promise<ResumeSubmissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeSubmissionWithOptions(request, runtime);
  }

  /**
   * 应用版本打标
   * 
   * @param request - TagAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagAppResponse
   */
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

  /**
   * 应用版本打标
   * 
   * @param request - TagAppRequest
   * @returns TagAppResponse
   */
  async tagApp(request: TagAppRequest): Promise<TagAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagAppWithOptions(request, runtime);
  }

  /**
   * 修改数据表格
   * 
   * @deprecated OpenAPI UpdateEntity is deprecated, please use EasyGene::2021-03-15::UpdateEntityItems instead.
   * 
   * @param tmpReq - UpdateEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEntityResponse
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
   * 修改数据表格
   * 
   * @deprecated OpenAPI UpdateEntity is deprecated, please use EasyGene::2021-03-15::UpdateEntityItems instead.
   * 
   * @param request - UpdateEntityRequest
   * @returns UpdateEntityResponse
   */
  // Deprecated
  async updateEntity(request: UpdateEntityRequest): Promise<UpdateEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEntityWithOptions(request, runtime);
  }

  /**
   * 修改表格数据
   * 
   * @param tmpReq - UpdateEntityItemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEntityItemsResponse
   */
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

  /**
   * 修改表格数据
   * 
   * @param request - UpdateEntityItemsRequest
   * @returns UpdateEntityItemsResponse
   */
  async updateEntityItems(request: UpdateEntityItemsRequest): Promise<UpdateEntityItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEntityItemsWithOptions(request, runtime);
  }

  /**
   * 修改应用模板
   * 
   * @param tmpReq - UpdateTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTemplateResponse
   */
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

  /**
   * 修改应用模板
   * 
   * @param request - UpdateTemplateRequest
   * @returns UpdateTemplateResponse
   */
  async updateTemplate(request: UpdateTemplateRequest): Promise<UpdateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTemplateWithOptions(request, runtime);
  }

  /**
   * 修改工作空间
   * 
   * @param request - UpdateWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkspaceResponse
   */
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

  /**
   * 修改工作空间
   * 
   * @param request - UpdateWorkspaceRequest
   * @returns UpdateWorkspaceResponse
   */
  async updateWorkspace(request: UpdateWorkspaceRequest): Promise<UpdateWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWorkspaceWithOptions(request, runtime);
  }

  /**
   * 上传数据表格
   * 
   * @param request - UploadEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadEntityResponse
   */
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

  /**
   * 上传数据表格
   * 
   * @param request - UploadEntityRequest
   * @returns UploadEntityResponse
   */
  async uploadEntity(request: UploadEntityRequest): Promise<UploadEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadEntityWithOptions(request, runtime);
  }

}
