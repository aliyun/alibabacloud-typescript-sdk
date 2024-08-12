// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class Artifact extends $tea.Model {
  jarArtifact?: JarArtifact;
  /**
   * @example
   * SQLSCRIPT
   */
  kind?: string;
  pythonArtifact?: PythonArtifact;
  sqlArtifact?: SqlArtifact;
  static names(): { [key: string]: string } {
    return {
      jarArtifact: 'jarArtifact',
      kind: 'kind',
      pythonArtifact: 'pythonArtifact',
      sqlArtifact: 'sqlArtifact',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jarArtifact: JarArtifact,
      kind: 'string',
      pythonArtifact: PythonArtifact,
      sqlArtifact: SqlArtifact,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsyncDraftDeployResult extends $tea.Model {
  artifactValidationDetail?: ValidateStatementResult;
  /**
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  deploymentId?: string;
  /**
   * @example
   * "Validation error: SQL validate failed"
   */
  message?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * FINISHED
   */
  ticketStatus?: string;
  static names(): { [key: string]: string } {
    return {
      artifactValidationDetail: 'artifactValidationDetail',
      deploymentId: 'deploymentId',
      message: 'message',
      success: 'success',
      ticketStatus: 'ticketStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactValidationDetail: ValidateStatementResult,
      deploymentId: 'string',
      message: 'string',
      success: 'boolean',
      ticketStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsyncResourcePlanOperationResult extends $tea.Model {
  /**
   * @example
   * ""
   */
  message?: string;
  /**
   * @example
   * {\"ssgProfiles\":[{\"name\":\"default\",\"cpu\":1.13,\"heap\":\"1 gb\",\"offHeap\":\"32 mb\",\"managed\":{},\"extended\":{}}],\"nodes\":[{\"id\":1,\"type\":\"StreamExecTableSourceScan\",\"desc\":\"Source: datagen_source[78]\",\"profile\":{\"group\":\"default\",\"parallelism\":1,\"maxParallelism\":32768,\"minParallelism\":1}},{\"id\":2,\"type\":\"StreamExecSink\",\"desc\":\"Sink: blackhole_sink[79]\",\"profile\":{\"group\":\"default\",\"parallelism\":1,\"maxParallelism\":32768,\"minParallelism\":1}}],\"edges\":[{\"source\":1,\"target\":2,\"mode\":\"PIPELINED\",\"strategy\":\"FORWARD\"}],\"vertices\":{\"717c7b8afebbfb7137f6f0f99beb2a94\":[1,2]}}
   */
  plan?: string;
  /**
   * @example
   * FINISHED
   */
  ticketStatus?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      plan: 'plan',
      ticketStatus: 'ticketStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      plan: 'string',
      ticketStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BasicResourceSetting extends $tea.Model {
  jobmanagerResourceSettingSpec?: BasicResourceSettingSpec;
  /**
   * @example
   * 4
   */
  parallelism?: number;
  taskmanagerResourceSettingSpec?: BasicResourceSettingSpec;
  static names(): { [key: string]: string } {
    return {
      jobmanagerResourceSettingSpec: 'jobmanagerResourceSettingSpec',
      parallelism: 'parallelism',
      taskmanagerResourceSettingSpec: 'taskmanagerResourceSettingSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobmanagerResourceSettingSpec: BasicResourceSettingSpec,
      parallelism: 'number',
      taskmanagerResourceSettingSpec: BasicResourceSettingSpec,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BasicResourceSettingSpec extends $tea.Model {
  /**
   * @example
   * 2.0
   */
  cpu?: number;
  /**
   * @example
   * 4Gi
   */
  memory?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'cpu',
      memory: 'memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchResourceSetting extends $tea.Model {
  basicResourceSetting?: BasicResourceSetting;
  /**
   * @example
   * 10
   */
  maxSlot?: number;
  static names(): { [key: string]: string } {
    return {
      basicResourceSetting: 'basicResourceSetting',
      maxSlot: 'maxSlot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicResourceSetting: BasicResourceSetting,
      maxSlot: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BriefDeploymentTarget extends $tea.Model {
  mode?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      mode: 'mode',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BriefResourceSetting extends $tea.Model {
  batchResourceSetting?: BatchResourceSetting;
  flinkConf?: { [key: string]: any };
  streamingResourceSetting?: StreamingResourceSetting;
  static names(): { [key: string]: string } {
    return {
      batchResourceSetting: 'batchResourceSetting',
      flinkConf: 'flinkConf',
      streamingResourceSetting: 'streamingResourceSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchResourceSetting: BatchResourceSetting,
      flinkConf: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      streamingResourceSetting: StreamingResourceSetting,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Catalog extends $tea.Model {
  name?: string;
  properties?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      properties: 'properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Connector extends $tea.Model {
  creator?: string;
  creatorName?: string;
  dependencies?: string[];
  lookup?: boolean;
  modifier?: string;
  modifierName?: string;
  name?: string;
  properties?: Property[];
  sink?: boolean;
  source?: boolean;
  supportedFormats?: string[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'creator',
      creatorName: 'creatorName',
      dependencies: 'dependencies',
      lookup: 'lookup',
      modifier: 'modifier',
      modifierName: 'modifierName',
      name: 'name',
      properties: 'properties',
      sink: 'sink',
      source: 'source',
      supportedFormats: 'supportedFormats',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      creatorName: 'string',
      dependencies: { 'type': 'array', 'itemType': 'string' },
      lookup: 'boolean',
      modifier: 'string',
      modifierName: 'string',
      name: 'string',
      properties: { 'type': 'array', 'itemType': Property },
      sink: 'boolean',
      source: 'boolean',
      supportedFormats: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUdfArtifactResult extends $tea.Model {
  collidingClasses?: UdfClass[];
  createSuccess?: boolean;
  message?: string;
  udfArtifact?: UdfArtifact;
  static names(): { [key: string]: string } {
    return {
      collidingClasses: 'collidingClasses',
      createSuccess: 'createSuccess',
      message: 'message',
      udfArtifact: 'udfArtifact',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collidingClasses: { 'type': 'array', 'itemType': UdfClass },
      createSuccess: 'boolean',
      message: 'string',
      udfArtifact: UdfArtifact,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Database extends $tea.Model {
  comment?: string;
  name?: string;
  properties?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      name: 'name',
      properties: 'properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      name: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUdfArtifactResult extends $tea.Model {
  deleteSuccess?: boolean;
  message?: string;
  referencedClasses?: UdfClass[];
  static names(): { [key: string]: string } {
    return {
      deleteSuccess: 'deleteSuccess',
      message: 'message',
      referencedClasses: 'referencedClasses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteSuccess: 'boolean',
      message: 'string',
      referencedClasses: { 'type': 'array', 'itemType': UdfClass },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Deployment extends $tea.Model {
  artifact?: Artifact;
  batchResourceSetting?: BatchResourceSetting;
  createdAt?: string;
  /**
   * @example
   * 27846363877456****
   */
  creator?: string;
  /**
   * @example
   * ****@streamcompute.onaliyun.com
   */
  creatorName?: string;
  /**
   * @example
   * true
   */
  deploymentHasChanged?: boolean;
  /**
   * @example
   * 00000000-0000-0000-0000-000000000001
   */
  deploymentId?: string;
  deploymentTarget?: BriefDeploymentTarget;
  /**
   * @example
   * this is a deployment description
   */
  description?: string;
  /**
   * @example
   * vvr-6.0.0-flink-1.15
   */
  engineVersion?: string;
  /**
   * @example
   * STREAMING | BATCH
   */
  executionMode?: string;
  /**
   * @example
   * {"taskmanager.numberOfTaskSlots":"1"}
   */
  flinkConf?: { [key: string]: any };
  jobSummary?: JobSummary;
  labels?: { [key: string]: any };
  localVariables?: LocalVariable[];
  logging?: Logging;
  modifiedAt?: string;
  /**
   * @example
   * 27846363877456****
   */
  modifier?: string;
  /**
   * @example
   * ****@streamcompute.onaliyun.com
   */
  modifierName?: string;
  /**
   * @example
   * deploymentName
   */
  name?: string;
  /**
   * @example
   * default-namespace
   */
  namespace?: string;
  /**
   * @example
   * 00000000-0000-0000-0000-000000000003
   */
  referencedDeploymentDraftId?: string;
  streamingResourceSetting?: StreamingResourceSetting;
  /**
   * @example
   * edcef******b4f
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      artifact: 'artifact',
      batchResourceSetting: 'batchResourceSetting',
      createdAt: 'createdAt',
      creator: 'creator',
      creatorName: 'creatorName',
      deploymentHasChanged: 'deploymentHasChanged',
      deploymentId: 'deploymentId',
      deploymentTarget: 'deploymentTarget',
      description: 'description',
      engineVersion: 'engineVersion',
      executionMode: 'executionMode',
      flinkConf: 'flinkConf',
      jobSummary: 'jobSummary',
      labels: 'labels',
      localVariables: 'localVariables',
      logging: 'logging',
      modifiedAt: 'modifiedAt',
      modifier: 'modifier',
      modifierName: 'modifierName',
      name: 'name',
      namespace: 'namespace',
      referencedDeploymentDraftId: 'referencedDeploymentDraftId',
      streamingResourceSetting: 'streamingResourceSetting',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifact: Artifact,
      batchResourceSetting: BatchResourceSetting,
      createdAt: 'string',
      creator: 'string',
      creatorName: 'string',
      deploymentHasChanged: 'boolean',
      deploymentId: 'string',
      deploymentTarget: BriefDeploymentTarget,
      description: 'string',
      engineVersion: 'string',
      executionMode: 'string',
      flinkConf: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      jobSummary: JobSummary,
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      localVariables: { 'type': 'array', 'itemType': LocalVariable },
      logging: Logging,
      modifiedAt: 'string',
      modifier: 'string',
      modifierName: 'string',
      name: 'string',
      namespace: 'string',
      referencedDeploymentDraftId: 'string',
      streamingResourceSetting: StreamingResourceSetting,
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeploymentDraft extends $tea.Model {
  artifact?: Artifact;
  createdAt?: number;
  /**
   * @example
   * 27846363877456****
   */
  creator?: string;
  /**
   * @example
   * ****@streamcompute.onaliyun.com
   */
  creatorName?: string;
  /**
   * @example
   * 00000000-0000-0000-0000-00000012****
   */
  deploymentDraftId?: string;
  /**
   * @example
   * vvr-6.0.7-flink-1.15
   */
  engineVersion?: string;
  /**
   * @example
   * STREAMING
   */
  executionMode?: string;
  labels?: { [key: string]: any };
  localVariables?: LocalVariable[];
  lock?: Lock;
  modifiedAt?: number;
  /**
   * @example
   * 27846363877456****
   */
  modifier?: string;
  /**
   * @example
   * ****@streamcompute.onaliyun.com
   */
  modifierName?: string;
  /**
   * @example
   * test-draft
   */
  name?: string;
  /**
   * @example
   * default-namespace
   */
  namespace?: string;
  /**
   * @example
   * 00000000-0000-0000-0000-00000013****
   */
  parentId?: string;
  /**
   * @example
   * 00000000-0000-0000-0000-0000012312****
   */
  referencedDeploymentId?: string;
  /**
   * @example
   * edcef******b4f
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      artifact: 'artifact',
      createdAt: 'createdAt',
      creator: 'creator',
      creatorName: 'creatorName',
      deploymentDraftId: 'deploymentDraftId',
      engineVersion: 'engineVersion',
      executionMode: 'executionMode',
      labels: 'labels',
      localVariables: 'localVariables',
      lock: 'lock',
      modifiedAt: 'modifiedAt',
      modifier: 'modifier',
      modifierName: 'modifierName',
      name: 'name',
      namespace: 'namespace',
      parentId: 'parentId',
      referencedDeploymentId: 'referencedDeploymentId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifact: Artifact,
      createdAt: 'number',
      creator: 'string',
      creatorName: 'string',
      deploymentDraftId: 'string',
      engineVersion: 'string',
      executionMode: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      localVariables: { 'type': 'array', 'itemType': LocalVariable },
      lock: Lock,
      modifiedAt: 'number',
      modifier: 'string',
      modifierName: 'string',
      name: 'string',
      namespace: 'string',
      parentId: 'string',
      referencedDeploymentId: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeploymentRestoreStrategy extends $tea.Model {
  /**
   * @example
   * TRUE
   */
  allowNonRestoredState?: boolean;
  /**
   * @example
   * 1660293803155
   */
  jobStartTimeInMs?: number;
  /**
   * @example
   * LATEST_STATE
   */
  kind?: string;
  /**
   * @example
   * 354dde66-a3ae-463e-967a-0b4107fd****
   */
  savepointId?: string;
  static names(): { [key: string]: string } {
    return {
      allowNonRestoredState: 'allowNonRestoredState',
      jobStartTimeInMs: 'jobStartTimeInMs',
      kind: 'kind',
      savepointId: 'savepointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowNonRestoredState: 'boolean',
      jobStartTimeInMs: 'number',
      kind: 'string',
      savepointId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeploymentTarget extends $tea.Model {
  /**
   * @example
   * deployment target
   */
  name?: string;
  /**
   * @example
   * namespace
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      namespace: 'namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DraftDeployParams extends $tea.Model {
  deploymentDraftId?: string;
  deploymentTarget?: BriefDeploymentTarget;
  /**
   * @example
   * false
   */
  skipValidate?: boolean;
  static names(): { [key: string]: string } {
    return {
      deploymentDraftId: 'deploymentDraftId',
      deploymentTarget: 'deploymentTarget',
      skipValidate: 'skipValidate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentDraftId: 'string',
      deploymentTarget: BriefDeploymentTarget,
      skipValidate: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DraftDeployResult extends $tea.Model {
  artifactValidationDetail?: ValidateStatementResult;
  /**
   * @example
   * 58718c99-3b29-4c5e-93bb-c9fc4ec6****
   */
  deploymentId?: string;
  /**
   * @example
   * ""
   */
  message?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      artifactValidationDetail: 'artifactValidationDetail',
      deploymentId: 'deploymentId',
      message: 'message',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactValidationDetail: ValidateStatementResult,
      deploymentId: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Edge extends $tea.Model {
  columnLineage?: Relation[];
  tableLineage?: Relation[];
  static names(): { [key: string]: string } {
    return {
      columnLineage: 'columnLineage',
      tableLineage: 'tableLineage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnLineage: { 'type': 'array', 'itemType': Relation },
      tableLineage: { 'type': 'array', 'itemType': Relation },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditableNamespace extends $tea.Model {
  namespace?: string;
  role?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      role: 'Role',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      role: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EngineVersionMetadata extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vvr-6.0.0-flink-1.15
   */
  engineVersion?: string;
  features?: EngineVersionSupportedFeatures;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * STABLE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      engineVersion: 'engineVersion',
      features: 'features',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineVersion: 'string',
      features: EngineVersionSupportedFeatures,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EngineVersionMetadataIndex extends $tea.Model {
  /**
   * @example
   * vvr-6.0.1-flink-1.15
   */
  defaultEngineVersion?: string;
  engineVersionMetadata?: EngineVersionMetadata[];
  static names(): { [key: string]: string } {
    return {
      defaultEngineVersion: 'defaultEngineVersion',
      engineVersionMetadata: 'engineVersionMetadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultEngineVersion: 'string',
      engineVersionMetadata: { 'type': 'array', 'itemType': EngineVersionMetadata },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EngineVersionSupportedFeatures extends $tea.Model {
  /**
   * @example
   * true
   */
  supportNativeSavepoint?: boolean;
  /**
   * @example
   * true
   */
  useForSqlDeployments?: boolean;
  static names(): { [key: string]: string } {
    return {
      supportNativeSavepoint: 'supportNativeSavepoint',
      useForSqlDeployments: 'useForSqlDeployments',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportNativeSavepoint: 'boolean',
      useForSqlDeployments: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ErrorDetails extends $tea.Model {
  columnNumber?: string;
  endColumnNumber?: string;
  endLineNumber?: string;
  invalidflinkConf?: string[];
  lineNumber?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      columnNumber: 'columnNumber',
      endColumnNumber: 'endColumnNumber',
      endLineNumber: 'endLineNumber',
      invalidflinkConf: 'invalidflinkConf',
      lineNumber: 'lineNumber',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnNumber: 'string',
      endColumnNumber: 'string',
      endLineNumber: 'string',
      invalidflinkConf: { 'type': 'array', 'itemType': 'string' },
      lineNumber: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExpertResourceSetting extends $tea.Model {
  jobmanagerResourceSettingSpec?: BasicResourceSettingSpec;
  resourcePlan?: string;
  static names(): { [key: string]: string } {
    return {
      jobmanagerResourceSettingSpec: 'jobmanagerResourceSettingSpec',
      resourcePlan: 'resourcePlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobmanagerResourceSettingSpec: BasicResourceSettingSpec,
      resourcePlan: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Folder extends $tea.Model {
  createdAt?: number;
  /**
   * @example
   * 00000000-0000-0000-0000-0000012312****
   */
  folderId?: string;
  modifiedAt?: number;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * default-namespace
   */
  namespace?: string;
  /**
   * @example
   * 00000000-0000-0000-0000-0000012390****
   */
  parentId?: string;
  subFolder?: SubFolder[];
  /**
   * @example
   * edcef******b4f
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      folderId: 'folderId',
      modifiedAt: 'modifiedAt',
      name: 'name',
      namespace: 'namespace',
      parentId: 'parentId',
      subFolder: 'subFolder',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      folderId: 'string',
      modifiedAt: 'number',
      name: 'string',
      namespace: 'string',
      parentId: 'string',
      subFolder: { 'type': 'array', 'itemType': SubFolder },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLineageInfoParams extends $tea.Model {
  depth?: number;
  direction?: string;
  id?: string;
  idType?: string;
  isColumnLevel?: boolean;
  isTemporary?: boolean;
  namespace?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      depth: 'depth',
      direction: 'direction',
      id: 'id',
      idType: 'idType',
      isColumnLevel: 'isColumnLevel',
      isTemporary: 'isTemporary',
      namespace: 'namespace',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depth: 'number',
      direction: 'string',
      id: 'string',
      idType: 'string',
      isColumnLevel: 'boolean',
      isTemporary: 'boolean',
      namespace: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotUpdateJobFailureInfo extends $tea.Model {
  failureSeverity?: string;
  message?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      failureSeverity: 'failureSeverity',
      message: 'message',
      reason: 'reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureSeverity: 'string',
      message: 'string',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotUpdateJobParams extends $tea.Model {
  rescaleJobParam?: RescaleJobParam;
  updateJobConfigParam?: UpdateJobConfigParam;
  static names(): { [key: string]: string } {
    return {
      rescaleJobParam: 'rescaleJobParam',
      updateJobConfigParam: 'updateJobConfigParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rescaleJobParam: RescaleJobParam,
      updateJobConfigParam: UpdateJobConfigParam,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotUpdateJobResult extends $tea.Model {
  hotUpdateParams?: HotUpdateJobParams;
  jobHotUpdateId?: string;
  jobId?: string;
  status?: HotUpdateJobStatus;
  targetResourceSetting?: BriefResourceSetting;
  static names(): { [key: string]: string } {
    return {
      hotUpdateParams: 'hotUpdateParams',
      jobHotUpdateId: 'jobHotUpdateId',
      jobId: 'jobId',
      status: 'status',
      targetResourceSetting: 'targetResourceSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotUpdateParams: HotUpdateJobParams,
      jobHotUpdateId: 'string',
      jobId: 'string',
      status: HotUpdateJobStatus,
      targetResourceSetting: BriefResourceSetting,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotUpdateJobStatus extends $tea.Model {
  failure?: HotUpdateJobFailureInfo;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      failure: 'failure',
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failure: HotUpdateJobFailureInfo,
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JarArtifact extends $tea.Model {
  additionalDependencies?: string[];
  /**
   * @example
   * org.apapche.flink.test
   */
  entryClass?: string;
  /**
   * @example
   * https://oss//bucket//test.jar
   */
  jarUri?: string;
  mainArgs?: string;
  static names(): { [key: string]: string } {
    return {
      additionalDependencies: 'additionalDependencies',
      entryClass: 'entryClass',
      jarUri: 'jarUri',
      mainArgs: 'mainArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalDependencies: { 'type': 'array', 'itemType': 'string' },
      entryClass: 'string',
      jarUri: 'string',
      mainArgs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Job extends $tea.Model {
  artifact?: Artifact;
  batchResourceSetting?: BatchResourceSetting;
  createdAt?: string;
  /**
   * @example
   * 27846363877456****
   */
  creator?: string;
  /**
   * @example
   * ****@streamcompute.onaliyun.com
   */
  creatorName?: string;
  /**
   * @example
   * 354dde66-a3ae-463e-967a-0b4107fd****
   */
  deploymentId?: string;
  /**
   * @example
   * flinktest
   */
  deploymentName?: string;
  /**
   * @example
   * 1660277235
   */
  endTime?: number;
  /**
   * @example
   * vvr-4.0.14-flink-1.13
   */
  engineVersion?: string;
  /**
   * @example
   * BATCH
   */
  executionMode?: string;
  flinkConf?: { [key: string]: any };
  /**
   * @example
   * 354dde66-a3ae-463e-967a-0b4107fd****
   */
  jobId?: string;
  localVariables?: LocalVariable[];
  logging?: Logging;
  metric?: JobMetric;
  modifiedAt?: string;
  /**
   * @example
   * 27846363877456****
   */
  modifier?: string;
  /**
   * @example
   * ****@streamcompute.onaliyun.com
   */
  modifierName?: string;
  /**
   * @example
   * namespacetest
   */
  namespace?: string;
  restoreStrategy?: DeploymentRestoreStrategy;
  /**
   * @example
   * preview
   */
  sessionClusterName?: string;
  /**
   * @example
   * 1660190835
   */
  startTime?: number;
  status?: JobStatus;
  streamingResourceSetting?: StreamingResourceSetting;
  userFlinkConf?: { [key: string]: any };
  /**
   * @example
   * edcef******b4f
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      artifact: 'artifact',
      batchResourceSetting: 'batchResourceSetting',
      createdAt: 'createdAt',
      creator: 'creator',
      creatorName: 'creatorName',
      deploymentId: 'deploymentId',
      deploymentName: 'deploymentName',
      endTime: 'endTime',
      engineVersion: 'engineVersion',
      executionMode: 'executionMode',
      flinkConf: 'flinkConf',
      jobId: 'jobId',
      localVariables: 'localVariables',
      logging: 'logging',
      metric: 'metric',
      modifiedAt: 'modifiedAt',
      modifier: 'modifier',
      modifierName: 'modifierName',
      namespace: 'namespace',
      restoreStrategy: 'restoreStrategy',
      sessionClusterName: 'sessionClusterName',
      startTime: 'startTime',
      status: 'status',
      streamingResourceSetting: 'streamingResourceSetting',
      userFlinkConf: 'userFlinkConf',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifact: Artifact,
      batchResourceSetting: BatchResourceSetting,
      createdAt: 'string',
      creator: 'string',
      creatorName: 'string',
      deploymentId: 'string',
      deploymentName: 'string',
      endTime: 'number',
      engineVersion: 'string',
      executionMode: 'string',
      flinkConf: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      jobId: 'string',
      localVariables: { 'type': 'array', 'itemType': LocalVariable },
      logging: Logging,
      metric: JobMetric,
      modifiedAt: 'string',
      modifier: 'string',
      modifierName: 'string',
      namespace: 'string',
      restoreStrategy: DeploymentRestoreStrategy,
      sessionClusterName: 'string',
      startTime: 'number',
      status: JobStatus,
      streamingResourceSetting: StreamingResourceSetting,
      userFlinkConf: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobFailure extends $tea.Model {
  /**
   * @example
   * 1660120062
   */
  failedAt?: number;
  message?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      failedAt: 'failedAt',
      message: 'message',
      reason: 'reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedAt: 'number',
      message: 'string',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobInfo extends $tea.Model {
  id?: string;
  properties?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      properties: 'properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobMetric extends $tea.Model {
  /**
   * @example
   * 2
   */
  totalCpu?: number;
  /**
   * @example
   * 4096
   */
  totalMemoryByte?: number;
  static names(): { [key: string]: string } {
    return {
      totalCpu: 'totalCpu',
      totalMemoryByte: 'totalMemoryByte',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCpu: 'number',
      totalMemoryByte: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobStartParameters extends $tea.Model {
  deploymentId?: string;
  localVariables?: LocalVariable[];
  /**
   * @example
   * default-queue
   */
  resourceQueueName?: string;
  restoreStrategy?: DeploymentRestoreStrategy;
  static names(): { [key: string]: string } {
    return {
      deploymentId: 'deploymentId',
      localVariables: 'localVariables',
      resourceQueueName: 'resourceQueueName',
      restoreStrategy: 'restoreStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentId: 'string',
      localVariables: { 'type': 'array', 'itemType': LocalVariable },
      resourceQueueName: 'string',
      restoreStrategy: DeploymentRestoreStrategy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobStatus extends $tea.Model {
  /**
   * @example
   * RUNNING
   */
  currentJobStatus?: string;
  failure?: JobFailure;
  running?: JobStatusRunning;
  static names(): { [key: string]: string } {
    return {
      currentJobStatus: 'currentJobStatus',
      failure: 'failure',
      running: 'running',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentJobStatus: 'string',
      failure: JobFailure,
      running: JobStatusRunning,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobStatusRunning extends $tea.Model {
  /**
   * @example
   * 4
   */
  observedFlinkJobRestarts?: number;
  /**
   * @example
   * RUNNING
   */
  observedFlinkJobStatus?: string;
  static names(): { [key: string]: string } {
    return {
      observedFlinkJobRestarts: 'observedFlinkJobRestarts',
      observedFlinkJobStatus: 'observedFlinkJobStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      observedFlinkJobRestarts: 'number',
      observedFlinkJobStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobSummary extends $tea.Model {
  /**
   * @example
   * 1
   */
  cancelled?: number;
  /**
   * @example
   * 1
   */
  cancelling?: number;
  /**
   * @example
   * 1
   */
  failed?: number;
  /**
   * @example
   * 1
   */
  finished?: number;
  /**
   * @example
   * 1
   */
  running?: number;
  /**
   * @example
   * 1
   */
  starting?: number;
  static names(): { [key: string]: string } {
    return {
      cancelled: 'cancelled',
      cancelling: 'cancelling',
      failed: 'failed',
      finished: 'finished',
      running: 'running',
      starting: 'starting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelled: 'number',
      cancelling: 'number',
      failed: 'number',
      finished: 'number',
      running: 'number',
      starting: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LineageColumn extends $tea.Model {
  columnName?: string;
  columnNativeType?: string;
  columnType?: string;
  createdAt?: number;
  creator?: string;
  description?: string;
  id?: string;
  modifiedAt?: number;
  modifier?: string;
  nullable?: boolean;
  static names(): { [key: string]: string } {
    return {
      columnName: 'columnName',
      columnNativeType: 'columnNativeType',
      columnType: 'columnType',
      createdAt: 'createdAt',
      creator: 'creator',
      description: 'description',
      id: 'id',
      modifiedAt: 'modifiedAt',
      modifier: 'modifier',
      nullable: 'nullable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      columnNativeType: 'string',
      columnType: 'string',
      createdAt: 'number',
      creator: 'string',
      description: 'string',
      id: 'string',
      modifiedAt: 'number',
      modifier: 'string',
      nullable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LineageInfo extends $tea.Model {
  edges?: Edge;
  jobInfos?: JobInfo[];
  nodes?: Node[];
  static names(): { [key: string]: string } {
    return {
      edges: 'edges',
      jobInfos: 'jobInfos',
      nodes: 'nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edges: Edge,
      jobInfos: { 'type': 'array', 'itemType': JobInfo },
      nodes: { 'type': 'array', 'itemType': Node },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LineageTable extends $tea.Model {
  columns?: LineageColumn[];
  id?: string;
  properties?: { [key: string]: any };
  tableName?: string;
  with?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      columns: 'columns',
      id: 'id',
      properties: 'properties',
      tableName: 'tableName',
      with: 'with',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': LineageColumn },
      id: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      tableName: 'string',
      with: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LocalVariable extends $tea.Model {
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * datagen
   */
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

export class Lock extends $tea.Model {
  holderId?: string;
  holderName?: string;
  id?: string;
  namespace?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      holderId: 'holderId',
      holderName: 'holderName',
      id: 'id',
      namespace: 'namespace',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      holderId: 'string',
      holderName: 'string',
      id: 'string',
      namespace: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Log4jLogger extends $tea.Model {
  /**
   * @example
   * ERROR
   */
  loggerLevel?: string;
  /**
   * @example
   * StdOutErrConsoleAppender
   */
  loggerName?: string;
  static names(): { [key: string]: string } {
    return {
      loggerLevel: 'loggerLevel',
      loggerName: 'loggerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loggerLevel: 'string',
      loggerName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogReservePolicy extends $tea.Model {
  /**
   * @example
   * 7
   */
  expirationDays?: number;
  /**
   * @example
   * true
   */
  openHistory?: boolean;
  static names(): { [key: string]: string } {
    return {
      expirationDays: 'expirationDays',
      openHistory: 'openHistory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expirationDays: 'number',
      openHistory: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Logging extends $tea.Model {
  /**
   * @example
   * xml格式文本
   */
  log4j2ConfigurationTemplate?: string;
  log4jLoggers?: Log4jLogger[];
  logReservePolicy?: LogReservePolicy;
  /**
   * @example
   * oss
   */
  loggingProfile?: string;
  static names(): { [key: string]: string } {
    return {
      log4j2ConfigurationTemplate: 'log4j2ConfigurationTemplate',
      log4jLoggers: 'log4jLoggers',
      logReservePolicy: 'logReservePolicy',
      loggingProfile: 'loggingProfile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      log4j2ConfigurationTemplate: 'string',
      log4jLoggers: { 'type': 'array', 'itemType': Log4jLogger },
      logReservePolicy: LogReservePolicy,
      loggingProfile: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Member extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user: 181319557522****
   */
  member?: string;
  /**
   * @example
   * VIEWER
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      member: 'member',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      member: 'string',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MetadataInfo extends $tea.Model {
  key?: string;
  virtual?: boolean;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      virtual: 'virtual',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      virtual: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Node extends $tea.Model {
  catalogName?: string;
  connector?: string;
  databaseName?: string;
  id?: string;
  isTemporary?: boolean;
  tables?: LineageTable[];
  static names(): { [key: string]: string } {
    return {
      catalogName: 'catalogName',
      connector: 'connector',
      databaseName: 'databaseName',
      id: 'id',
      isTemporary: 'isTemporary',
      tables: 'tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      connector: 'string',
      databaseName: 'string',
      id: 'string',
      isTemporary: 'boolean',
      tables: { 'type': 'array', 'itemType': LineageTable },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrimaryKey extends $tea.Model {
  columns?: string[];
  constraintName?: string;
  static names(): { [key: string]: string } {
    return {
      columns: 'columns',
      constraintName: 'constraintName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': 'string' },
      constraintName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Property extends $tea.Model {
  defaultValue?: string;
  definesFormat?: boolean;
  description?: string;
  key?: string;
  required?: boolean;
  sensitive?: boolean;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'defaultValue',
      definesFormat: 'definesFormat',
      description: 'description',
      key: 'key',
      required: 'required',
      sensitive: 'sensitive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      definesFormat: 'boolean',
      description: 'string',
      key: 'string',
      required: 'boolean',
      sensitive: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PythonArtifact extends $tea.Model {
  additionalDependencies?: string[];
  additionalPythonArchives?: string[];
  additionalPythonLibraries?: string[];
  entryModule?: string;
  mainArgs?: string;
  /**
   * @example
   * https://oss//bucket//test.py
   */
  pythonArtifactUri?: string;
  static names(): { [key: string]: string } {
    return {
      additionalDependencies: 'additionalDependencies',
      additionalPythonArchives: 'additionalPythonArchives',
      additionalPythonLibraries: 'additionalPythonLibraries',
      entryModule: 'entryModule',
      mainArgs: 'mainArgs',
      pythonArtifactUri: 'pythonArtifactUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalDependencies: { 'type': 'array', 'itemType': 'string' },
      additionalPythonArchives: { 'type': 'array', 'itemType': 'string' },
      additionalPythonLibraries: { 'type': 'array', 'itemType': 'string' },
      entryModule: 'string',
      mainArgs: 'string',
      pythonArtifactUri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Relation extends $tea.Model {
  destination?: string;
  jobId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      destination: 'destination',
      jobId: 'jobId',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destination: 'string',
      jobId: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RescaleJobParam extends $tea.Model {
  jobParallelism?: number;
  vertexParallelism?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      jobParallelism: 'jobParallelism',
      vertexParallelism: 'vertexParallelism',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobParallelism: 'number',
      vertexParallelism: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Savepoint extends $tea.Model {
  /**
   * @example
   * 1659066711
   */
  createdAt?: number;
  /**
   * @example
   * 1d716b22-6aad-4be2-85c2-50cfc757****
   */
  deploymentId?: string;
  description?: string;
  /**
   * @example
   * 5af678c0-7db0-4650-94c2-d2604f0a****
   */
  jobId?: string;
  /**
   * @example
   * 1659069473
   */
  modifiedAt?: number;
  /**
   * @example
   * namespacetest
   */
  namespace?: string;
  /**
   * @example
   * TRUE
   */
  nativeFormat?: boolean;
  /**
   * @example
   * 354dde66-a3ae-463e-967a-0b4107fd****
   */
  savepointId?: string;
  /**
   * @example
   * https://oss/bucket/flink/flink-jobs/namespaces/vvp-team/deployments/5a19a71b-1c42-4f34-94fd-86cf60782c81/checkpoints/sp-3285
   */
  savepointLocation?: string;
  /**
   * @example
   * USER_REQUEST
   */
  savepointOrigin?: string;
  status?: SavepointStatus;
  /**
   * @example
   * TRUE
   */
  stopWithDrainEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      deploymentId: 'deploymentId',
      description: 'description',
      jobId: 'jobId',
      modifiedAt: 'modifiedAt',
      namespace: 'namespace',
      nativeFormat: 'nativeFormat',
      savepointId: 'savepointId',
      savepointLocation: 'savepointLocation',
      savepointOrigin: 'savepointOrigin',
      status: 'status',
      stopWithDrainEnabled: 'stopWithDrainEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      deploymentId: 'string',
      description: 'string',
      jobId: 'string',
      modifiedAt: 'number',
      namespace: 'string',
      nativeFormat: 'boolean',
      savepointId: 'string',
      savepointLocation: 'string',
      savepointOrigin: 'string',
      status: SavepointStatus,
      stopWithDrainEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SavepointFailure extends $tea.Model {
  /**
   * @example
   * 1655006835
   */
  failedAt?: number;
  message?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      failedAt: 'failedAt',
      message: 'message',
      reason: 'reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedAt: 'number',
      message: 'string',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SavepointStatus extends $tea.Model {
  failure?: SavepointFailure;
  /**
   * @example
   * COMPLETED
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      failure: 'failure',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failure: SavepointFailure,
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Schema extends $tea.Model {
  columns?: TableColumn[];
  primaryKey?: PrimaryKey[];
  watermarkSpecs?: WatermarkSpec[];
  static names(): { [key: string]: string } {
    return {
      columns: 'columns',
      primaryKey: 'primaryKey',
      watermarkSpecs: 'watermarkSpecs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': TableColumn },
      primaryKey: { 'type': 'array', 'itemType': PrimaryKey },
      watermarkSpecs: { 'type': 'array', 'itemType': WatermarkSpec },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SqlArtifact extends $tea.Model {
  additionalDependencies?: string[];
  sqlScript?: string;
  static names(): { [key: string]: string } {
    return {
      additionalDependencies: 'additionalDependencies',
      sqlScript: 'sqlScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalDependencies: { 'type': 'array', 'itemType': 'string' },
      sqlScript: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SqlStatementExecuteResult extends $tea.Model {
  errorDetails?: ErrorDetails;
  executeSuccess?: boolean;
  statement?: string;
  static names(): { [key: string]: string } {
    return {
      errorDetails: 'errorDetails',
      executeSuccess: 'executeSuccess',
      statement: 'statement',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorDetails: ErrorDetails,
      executeSuccess: 'boolean',
      statement: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SqlStatementValidationResult extends $tea.Model {
  errorDetails?: ErrorDetails;
  message?: string;
  success?: boolean;
  validationResult?: string;
  static names(): { [key: string]: string } {
    return {
      errorDetails: 'errorDetails',
      message: 'message',
      success: 'success',
      validationResult: 'validationResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorDetails: ErrorDetails,
      message: 'string',
      success: 'boolean',
      validationResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SqlStatementWithContext extends $tea.Model {
  additionalDependencies?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  batchMode?: boolean;
  flinkConfiguration?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  statement?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      additionalDependencies: 'additionalDependencies',
      batchMode: 'batchMode',
      flinkConfiguration: 'flinkConfiguration',
      statement: 'statement',
      versionName: 'versionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalDependencies: { 'type': 'array', 'itemType': 'string' },
      batchMode: 'boolean',
      flinkConfiguration: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      statement: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobRequestBody extends $tea.Model {
  /**
   * @example
   * 5a19a71b-1c42-4f34-94fd-86cf60782c81
   */
  deploymentId?: string;
  resourceSettingSpec?: BriefResourceSetting;
  restoreStrategy?: DeploymentRestoreStrategy;
  static names(): { [key: string]: string } {
    return {
      deploymentId: 'deploymentId',
      resourceSettingSpec: 'resourceSettingSpec',
      restoreStrategy: 'restoreStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentId: 'string',
      resourceSettingSpec: BriefResourceSetting,
      restoreStrategy: DeploymentRestoreStrategy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopJobRequestBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * NONE
   */
  stopStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      stopStrategy: 'stopStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stopStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StreamingResourceSetting extends $tea.Model {
  basicResourceSetting?: BasicResourceSetting;
  expertResourceSetting?: ExpertResourceSetting;
  /**
   * @example
   * EXPERT
   */
  resourceSettingMode?: string;
  static names(): { [key: string]: string } {
    return {
      basicResourceSetting: 'basicResourceSetting',
      expertResourceSetting: 'expertResourceSetting',
      resourceSettingMode: 'resourceSettingMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicResourceSetting: BasicResourceSetting,
      expertResourceSetting: ExpertResourceSetting,
      resourceSettingMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubFolder extends $tea.Model {
  /**
   * @example
   * a579aec9-1d5e-3382-9d65-9887ff6cfaff
   */
  folderId?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * 95c0787c-408f-4e1f-88ba-ef0a84a2c2ee
   */
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'folderId',
      name: 'name',
      parentId: 'parentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
      name: 'string',
      parentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Table extends $tea.Model {
  comment?: string;
  name?: string;
  partitionKeys?: string[];
  properties?: { [key: string]: any };
  schema?: Schema;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      name: 'name',
      partitionKeys: 'partitionKeys',
      properties: 'properties',
      schema: 'schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      name: 'string',
      partitionKeys: { 'type': 'array', 'itemType': 'string' },
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      schema: Schema,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TableColumn extends $tea.Model {
  expression?: string;
  metadataInfo?: MetadataInfo;
  name?: string;
  nullable?: boolean;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      expression: 'expression',
      metadataInfo: 'metadataInfo',
      name: 'name',
      nullable: 'nullable',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      metadataInfo: MetadataInfo,
      name: 'string',
      nullable: 'boolean',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TableMeta extends $tea.Model {
  catalogName?: string;
  databaseName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogName: 'catalogName',
      databaseName: 'databaseName',
      tableName: 'tableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      databaseName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UdfArtifact extends $tea.Model {
  artifactType?: string;
  createdAt?: number;
  creator?: string;
  dependencyJarUris?: string[];
  jarUrl?: string;
  modifiedAt?: number;
  name?: string;
  namespace?: string;
  udfClasses?: UdfClass[];
  static names(): { [key: string]: string } {
    return {
      artifactType: 'artifactType',
      createdAt: 'createdAt',
      creator: 'creator',
      dependencyJarUris: 'dependencyJarUris',
      jarUrl: 'jarUrl',
      modifiedAt: 'modifiedAt',
      name: 'name',
      namespace: 'namespace',
      udfClasses: 'udfClasses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      createdAt: 'number',
      creator: 'string',
      dependencyJarUris: { 'type': 'array', 'itemType': 'string' },
      jarUrl: 'string',
      modifiedAt: 'number',
      name: 'string',
      namespace: 'string',
      udfClasses: { 'type': 'array', 'itemType': UdfClass },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UdfClass extends $tea.Model {
  className?: string;
  classType?: string;
  functionNames?: string[];
  udfArtifactName?: string;
  static names(): { [key: string]: string } {
    return {
      className: 'className',
      classType: 'classType',
      functionNames: 'functionNames',
      udfArtifactName: 'udfArtifactName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      className: 'string',
      classType: 'string',
      functionNames: { 'type': 'array', 'itemType': 'string' },
      udfArtifactName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UdfFunction extends $tea.Model {
  className?: string;
  functionName?: string;
  udfArtifactName?: string;
  static names(): { [key: string]: string } {
    return {
      className: 'className',
      functionName: 'functionName',
      udfArtifactName: 'udfArtifactName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      className: 'string',
      functionName: 'string',
      udfArtifactName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJobConfigParam extends $tea.Model {
  newFlinkConf?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      newFlinkConf: 'newFlinkConf',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newFlinkConf: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUdfArtifactResult extends $tea.Model {
  collidingClasses?: UdfClass[];
  message?: string;
  missingClasses?: UdfClass[];
  udfArtifact?: UdfArtifact;
  updateSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      collidingClasses: 'collidingClasses',
      message: 'message',
      missingClasses: 'missingClasses',
      udfArtifact: 'udfArtifact',
      updateSuccess: 'updateSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collidingClasses: { 'type': 'array', 'itemType': UdfClass },
      message: 'string',
      missingClasses: { 'type': 'array', 'itemType': UdfClass },
      udfArtifact: UdfArtifact,
      updateSuccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateStatementResult extends $tea.Model {
  errorDetails?: ValidationErrorDetails;
  /**
   * @example
   * "there have some errors""
   */
  validationResult?: string;
  static names(): { [key: string]: string } {
    return {
      errorDetails: 'errorDetails',
      validationResult: 'validationResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorDetails: ValidationErrorDetails,
      validationResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidationErrorDetails extends $tea.Model {
  columnNumber?: string;
  endColumnNumber?: string;
  endLineNumber?: string;
  lineNumber?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      columnNumber: 'columnNumber',
      endColumnNumber: 'endColumnNumber',
      endLineNumber: 'endLineNumber',
      lineNumber: 'lineNumber',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnNumber: 'string',
      endColumnNumber: 'string',
      endLineNumber: 'string',
      lineNumber: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Variable extends $tea.Model {
  /**
   * @example
   * This is a variable description
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Plain
   */
  kind?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * variableName
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * variableValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      kind: 'kind',
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      kind: 'string',
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WatermarkSpec extends $tea.Model {
  column?: string;
  watermarkExpression?: string;
  static names(): { [key: string]: string } {
    return {
      column: 'column',
      watermarkExpression: 'watermarkExpression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: 'string',
      watermarkExpression: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentRequest extends $tea.Model {
  /**
   * @remarks
   * The content of the deployment.
   * 
   * This parameter is required.
   */
  body?: Deployment;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Deployment,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentResponseBody extends $tea.Model {
  /**
   * @remarks
   * *   If the value of success was true, the deployment that you created was returned.
   * *   If the value of success was false, a null value was returned.
   */
  data?: Deployment;
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The value was fixed to 200.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: Deployment,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDeploymentResponseBody;
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
      body: CreateDeploymentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentDraftHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentDraftRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: DeploymentDraft;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: DeploymentDraft,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentDraftResponseBody extends $tea.Model {
  data?: DeploymentDraft;
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeploymentDraft,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentDraftResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDeploymentDraftResponseBody;
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
      body: CreateDeploymentDraftResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a14bda1c4a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderRequest extends $tea.Model {
  body?: Folder;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Folder,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderResponseBody extends $tea.Model {
  data?: Folder;
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: Folder,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFolderResponseBody;
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
      body: CreateFolderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemberHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ca84d539167d4d
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemberRequest extends $tea.Model {
  /**
   * @remarks
   * The mappings between the ID and permissions of the member.
   */
  body?: Member;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Member,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemberResponseBody extends $tea.Model {
  /**
   * @remarks
   * *   If the value of success was false, a null value was returned.
   * *   If the value of success was true, the authorization information was returned.
   */
  data?: Member;
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The status code returned. The value was fixed to 200. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F989CA70-2925-5A94-92B7-20F5762B71C8
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: Member,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemberResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMemberResponseBody;
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
      body: CreateMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSavepointHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSavepointRequest extends $tea.Model {
  /**
   * @remarks
   * The deployment ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 58718c99-3b29-4c5e-93bb-c9fc4ec6****
   */
  deploymentId?: string;
  /**
   * @remarks
   * The description of the savepoint.
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to use the native format mode. Valid values:
   * 
   * *   true: The native format mode is used.
   * *   false: The native format mode is not used.
   * 
   * @example
   * true
   */
  nativeFormat?: boolean;
  static names(): { [key: string]: string } {
    return {
      deploymentId: 'deploymentId',
      description: 'description',
      nativeFormat: 'nativeFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentId: 'string',
      description: 'string',
      nativeFormat: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSavepointResponseBody extends $tea.Model {
  /**
   * @remarks
   * *   If the value of success was true, the savepoint that was created was returned.
   * *   If the value of success was false, a null value was returned.
   */
  data?: Savepoint;
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The value was fixed to 200.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: Savepoint,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSavepointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSavepointResponseBody;
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
      body: CreateSavepointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUdfArtifactHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUdfArtifactRequest extends $tea.Model {
  /**
   * @remarks
   * The resource file of the UDF.
   * 
   * This parameter is required.
   */
  body?: UdfArtifact;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UdfArtifact,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUdfArtifactResponseBody extends $tea.Model {
  /**
   * @remarks
   * The result of creating an artifact configuration for the UDF.
   */
  data?: CreateUdfArtifactResult;
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The status code returned. The value was fixed to 200. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateUdfArtifactResult,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUdfArtifactResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateUdfArtifactResponseBody;
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
      body: CreateUdfArtifactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVariableHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bda1c4a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVariableRequest extends $tea.Model {
  /**
   * @remarks
   * The parameter that is used to create the variable.
   * 
   * This parameter is required.
   */
  body?: Variable;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Variable,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVariableResponseBody extends $tea.Model {
  /**
   * @remarks
   * *   If the value of success was true, the variable that you created was returned.
   * *   If the value of success was false, a null value was returned.
   */
  data?: Variable;
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The value was fixed to 200.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-ABCD-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: Variable,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVariableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateVariableResponseBody;
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
      body: CreateVariableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomConnectorHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomConnectorResponseBody extends $tea.Model {
  /**
   * @remarks
   * If the value of success was true, a list of deployments in which custom connectors were deleted was returned. If the value of success was false, a null value was returned.
   */
  data?: TableMeta[];
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The status code returned. The value was fixed to 200. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': TableMeta },
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomConnectorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCustomConnectorResponseBody;
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
      body: DeleteCustomConnectorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeploymentHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeploymentResponseBody extends $tea.Model {
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The value was fixed to 200.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeploymentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDeploymentResponseBody;
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
      body: DeleteDeploymentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeploymentDraftHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeploymentDraftResponseBody extends $tea.Model {
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeploymentDraftResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDeploymentDraftResponseBody;
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
      body: DeleteDeploymentDraftResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFolderHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c96306e2b****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFolderResponseBody extends $tea.Model {
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFolderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFolderResponseBody;
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
      body: DeleteFolderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobResponseBody extends $tea.Model {
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The value was fixed to 200.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteJobResponseBody;
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
      body: DeleteJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMemberHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 710d6a64d8c34d
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMemberResponseBody extends $tea.Model {
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The status code returned. The value was fixed to 200. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMemberResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMemberResponseBody;
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
      body: DeleteMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSavepointHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSavepointResponseBody extends $tea.Model {
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The value was fixed to 200.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSavepointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSavepointResponseBody;
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
      body: DeleteSavepointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUdfArtifactHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUdfArtifactResponseBody extends $tea.Model {
  data?: DeleteUdfArtifactResult;
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @example
   * CBC799F0-ABCF-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeleteUdfArtifactResult,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUdfArtifactResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUdfArtifactResponseBody;
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
      body: DeleteUdfArtifactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUdfFunctionHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUdfFunctionRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the class that corresponds to the UDF.
   * 
   * This parameter is required.
   * 
   * @example
   * Category
   */
  className?: string;
  /**
   * @remarks
   * The name of the resource that corresponds to the UDF that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * test-udf
   */
  udfArtifactName?: string;
  static names(): { [key: string]: string } {
    return {
      className: 'className',
      udfArtifactName: 'udfArtifactName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      className: 'string',
      udfArtifactName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUdfFunctionResponseBody extends $tea.Model {
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The status code returned. The value was fixed to 200. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUdfFunctionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUdfFunctionResponseBody;
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
      body: DeleteUdfFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVariableHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVariableResponseBody extends $tea.Model {
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The value was fixed to 200.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVariableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteVariableResponseBody;
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
      body: DeleteVariableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployDeploymentDraftAsyncHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployDeploymentDraftAsyncRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: DraftDeployParams;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: DraftDeployParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployDeploymentDraftAsyncResponseBody extends $tea.Model {
  data?: DeployDeploymentDraftAsyncResponseBodyData;
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeployDeploymentDraftAsyncResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployDeploymentDraftAsyncResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeployDeploymentDraftAsyncResponseBody;
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
      body: DeployDeploymentDraftAsyncResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSqlStatementHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 710d6a64d8c34d
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSqlStatementRequest extends $tea.Model {
  body?: SqlStatementWithContext;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: SqlStatementWithContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSqlStatementResponseBody extends $tea.Model {
  data?: SqlStatementExecuteResult;
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SqlStatementExecuteResult,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSqlStatementResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteSqlStatementResponseBody;
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
      body: ExecuteSqlStatementResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlinkApiProxyHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlinkApiProxyRequest extends $tea.Model {
  /**
   * @remarks
   * The path of the Flink UI.
   * 
   * This parameter is required.
   * 
   * @example
   * /jobs/4df35f8e54554b23bf7dcd38a151****
   */
  flinkApiPath?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * default-namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 5a27a3aa-c5b9-4dc1-8c86-be57d2d6****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   jobs
   * *   sessionclusters
   * 
   * This parameter is required.
   * 
   * @example
   * jobs
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      flinkApiPath: 'flinkApiPath',
      namespace: 'namespace',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flinkApiPath: 'string',
      namespace: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlinkApiProxyResponseBody extends $tea.Model {
  /**
   * @remarks
   * *   If the value of success was true, the result of the proxy request was returned.
   * *   If the value of success was false, a null value was returned.
   * 
   * @example
   * { "jobs": [ { "jid": "4df35f8e54554b23bf7dcd38a151****", "name": "69d001d5-419a-4bfc-9c2e-849cacd3****", "state": "RUNNING", "start-time": 1659154942068, "end-time": -1, "duration": 188161756, "last-modification": 1659154968305, "tasks": { "total": 2, "created": 0, "scheduled": 0, "deploying": 0, "running": 2, "finished": 0, "canceling": 0, "canceled": 0, "failed": 0, "reconciling": 0, "initializing": 0 } } ] }
   */
  data?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The value was fixed to 200.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlinkApiProxyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FlinkApiProxyResponseBody;
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
      body: FlinkApiProxyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateResourcePlanWithFlinkConfAsyncHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateResourcePlanWithFlinkConfAsyncRequest extends $tea.Model {
  /**
   * @remarks
   * The Flink configuration that is used to generate a resource plan.
   */
  body?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateResourcePlanWithFlinkConfAsyncResponseBody extends $tea.Model {
  /**
   * @remarks
   * *   If the value of success was true, the asynchronous generation result was returned.
   * *   If the value of success was false, a null value was returned.
   */
  data?: GenerateResourcePlanWithFlinkConfAsyncResponseBodyData;
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The value was fixed to 200.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GenerateResourcePlanWithFlinkConfAsyncResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateResourcePlanWithFlinkConfAsyncResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateResourcePlanWithFlinkConfAsyncResponseBody;
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
      body: GenerateResourcePlanWithFlinkConfAsyncResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogsRequest extends $tea.Model {
  /**
   * @example
   * paimon
   */
  catalogName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogName: 'catalogName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogsResponseBody extends $tea.Model {
  data?: Catalog[];
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @example
   * CBC799F0-ABCD-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': Catalog },
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCatalogsResponseBody;
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
      body: GetCatalogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabasesHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabasesRequest extends $tea.Model {
  /**
   * @example
   * paimon-ods
   */
  databaseName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'databaseName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabasesResponseBody extends $tea.Model {
  data?: Database[];
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': Database },
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabasesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDatabasesResponseBody;
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
      body: GetDatabasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployDeploymentDraftResultHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 710d6a64d8****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployDeploymentDraftResultResponseBody extends $tea.Model {
  data?: AsyncDraftDeployResult;
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AsyncDraftDeployResult,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployDeploymentDraftResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDeployDeploymentDraftResultResponseBody;
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
      body: GetDeployDeploymentDraftResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentResponseBody extends $tea.Model {
  /**
   * @remarks
   * *   If the value of success was true, the details of the deployment were returned.
   * *   If the value of success was false, a null value was returned.
   */
  data?: Deployment;
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The value was fixed to 200.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: Deployment,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDeploymentResponseBody;
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
      body: GetDeploymentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentDraftHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentDraftResponseBody extends $tea.Model {
  data?: DeploymentDraft;
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeploymentDraft,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentDraftResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDeploymentDraftResponseBody;
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
      body: GetDeploymentDraftResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentDraftLockHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentDraftLockRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c84d73be-40ad-4627-8bdd-fa1eba51b234
   */
  deploymentDraftId?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentDraftId: 'deploymentDraftId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentDraftId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentDraftLockResponseBody extends $tea.Model {
  data?: Lock;
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: Lock,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentDraftLockResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDeploymentDraftLockResponseBody;
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
      body: GetDeploymentDraftLockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFolderHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a14bda1c4a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFolderRequest extends $tea.Model {
  /**
   * @example
   * 89097
   */
  folderId?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'folderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFolderResponseBody extends $tea.Model {
  data?: Folder;
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: Folder,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFolderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFolderResponseBody;
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
      body: GetFolderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGenerateResourcePlanResultHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGenerateResourcePlanResultResponseBody extends $tea.Model {
  /**
   * @remarks
   * *   If the value of success was true, the asynchronous generation result was returned.
   * *   If the value of success was false, a null value was returned.
   */
  data?: AsyncResourcePlanOperationResult;
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The value was fixed to 200.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AsyncResourcePlanOperationResult,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGenerateResourcePlanResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetGenerateResourcePlanResultResponseBody;
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
      body: GetGenerateResourcePlanResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotUpdateJobResultHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotUpdateJobResultResponseBody extends $tea.Model {
  data?: HotUpdateJobResult;
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @example
   * CBC799F0-ABCF-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: HotUpdateJobResult,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotUpdateJobResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotUpdateJobResultResponseBody;
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
      body: GetHotUpdateJobResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBody extends $tea.Model {
  /**
   * @remarks
   * *   If the value of success was true, the details of the job was returned.
   * *   If the value of success was false, a null value was returned.
   */
  data?: Job;
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The value was fixed to 200.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: Job,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetJobResponseBody;
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
      body: GetJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLatestJobStartLogHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLatestJobStartLogResponseBody extends $tea.Model {
  /**
   * @remarks
   * If the value of success was false, the latest logs of the deployment were returned. If the value of success was true, a null value was returned.
   * 
   * @example
   * "[main] INFO  org.apache.flink.runtime.entrypoint.ClusterEntrypoint        [] - --------------------------------------------------------------------------------\\n2024-05-22 11:46:39,871 [main] INFO  org.apache.flink.runtime.entrypoint.ClusterEntrypoint"
   */
  data?: string;
  /**
   * @remarks
   * If the value of success was false, an error code was returned. If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * If the value of success was false, an error message was returned. If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The status code returned. The value was fixed to 200.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLatestJobStartLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLatestJobStartLogResponseBody;
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
      body: GetLatestJobStartLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLineageInfoHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 710d6a64d8****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLineageInfoRequest extends $tea.Model {
  /**
   * @remarks
   * The parameters about the lineage information.
   */
  body?: GetLineageInfoParams;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: GetLineageInfoParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLineageInfoResponseBody extends $tea.Model {
  /**
   * @remarks
   * The lineage information.
   */
  data?: LineageInfo;
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The status code returned. The value was fixed to 200. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: LineageInfo,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLineageInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLineageInfoResponseBody;
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
      body: GetLineageInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMemberHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMemberResponseBody extends $tea.Model {
  /**
   * @remarks
   * *   If the value of success was false, a null value was returned.
   * *   If the value of success was true, the authorization information was returned.
   */
  data?: Member;
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The status code returned. The value was fixed to 200. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: Member,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMemberResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMemberResponseBody;
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
      body: GetMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSavepointHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSavepointResponseBody extends $tea.Model {
  /**
   * @remarks
   * *   If the value of success was true, the savepoint information was returned.
   * *   If the value of success was false, a null value was returned.
   */
  data?: Savepoint;
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The value was fixed to 200.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: Savepoint,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSavepointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSavepointResponseBody;
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
      body: GetSavepointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTablesHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTablesRequest extends $tea.Model {
  /**
   * @example
   * item
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      tableName: 'tableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTablesResponseBody extends $tea.Model {
  data?: Table[];
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @example
   * ECE641B2-AB0B-4174-9C3B-885881558637
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': Table },
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTablesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTablesResponseBody;
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
      body: GetTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUdfArtifactsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 710d6a64d8c34d
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUdfArtifactsRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the JAR or Python file that corresponds to the UDF.
   * 
   * @example
   * test-udf
   */
  udfArtifactName?: string;
  static names(): { [key: string]: string } {
    return {
      udfArtifactName: 'udfArtifactName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      udfArtifactName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUdfArtifactsResponseBody extends $tea.Model {
  /**
   * @remarks
   * If the value of success was true, the details of the JAR or Python file that corresponds to the UDF were returned. If the value of success was false, a null value was returned.
   */
  data?: UdfArtifact[];
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The status code returned. The value was fixed to 200. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': UdfArtifact },
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUdfArtifactsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUdfArtifactsResponseBody;
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
      body: GetUdfArtifactsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotUpdateJobHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotUpdateJobResponseBody extends $tea.Model {
  /**
   * @remarks
   * The dynamic update result.
   */
  data?: HotUpdateJobResult;
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The status code returned. The value was fixed to 200. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: HotUpdateJobResult,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotUpdateJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HotUpdateJobResponseBody;
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
      body: HotUpdateJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomConnectorsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomConnectorsResponseBody extends $tea.Model {
  /**
   * @remarks
   * If the value of success was true, the list of custom connectors in the namespace was returned. If the value of success was false, a null value was returned.
   */
  data?: Connector[];
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The status code returned. The value was fixed to 200. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': Connector },
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomConnectorsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCustomConnectorsResponseBody;
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
      body: ListCustomConnectorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentDraftsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentDraftsRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentDraftsResponseBody extends $tea.Model {
  data?: DeploymentDraft[];
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 69
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      requestId: 'requestId',
      success: 'success',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DeploymentDraft },
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentDraftsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDeploymentDraftsResponseBody;
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
      body: ListDeploymentDraftsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentTargetsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentTargetsRequest extends $tea.Model {
  /**
   * @remarks
   * The page number. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentTargetsResponseBody extends $tea.Model {
  /**
   * @remarks
   * *   If the value of success was true, a list of clusters in which the deployment is deployed was returned.
   * *   If the value of success was false, a null value was returned.
   */
  data?: DeploymentTarget[];
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The value was fixed to 200.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      requestId: 'requestId',
      success: 'success',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DeploymentTarget },
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentTargetsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDeploymentTargetsResponseBody;
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
      body: ListDeploymentTargetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the user who creates the deployment.
   * 
   * @example
   * 183899668*******
   */
  creator?: string;
  /**
   * @remarks
   * The execution mode of the deployment.
   * 
   * Valid values:
   * 
   * *   BATCH
   * *   STREAMING
   * 
   * @example
   * STREAMING
   */
  executionMode?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key
   */
  labelKey?: string;
  /**
   * @remarks
   * The tag value. Separate multiple values with semicolon (;).
   * 
   * @example
   * value1,value2
   */
  labelValueArray?: string;
  /**
   * @remarks
   * The ID of the user who modifies the deployment.
   * 
   * @example
   * 183899668*******
   */
  modifier?: string;
  /**
   * @remarks
   * The name of the deployment.
   * 
   * @example
   * vvp_ds_0522
   */
  name?: string;
  /**
   * @remarks
   * The page number. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The latest status of the deployment.
   * 
   * Valid values:
   * 
   * *   CANCELLED
   * *   FAILED
   * *   RUNNING
   * *   TRANSITIONING
   * *   FINISHED
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'creator',
      executionMode: 'executionMode',
      labelKey: 'labelKey',
      labelValueArray: 'labelValueArray',
      modifier: 'modifier',
      name: 'name',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      executionMode: 'string',
      labelKey: 'string',
      labelValueArray: 'string',
      modifier: 'string',
      name: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentsResponseBody extends $tea.Model {
  /**
   * @remarks
   * *   If the value of success was true, the list of all deployments was returned.
   * *   If the value of success was false, a null value was returned.
   */
  data?: Deployment[];
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The value was fixed to 200.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      requestId: 'requestId',
      success: 'success',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': Deployment },
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDeploymentsResponseBody;
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
      body: ListDeploymentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEditableNamespaceRequest extends $tea.Model {
  namespace?: string;
  pageIndex?: string;
  pageSize?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      regionId: 'regionId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      pageIndex: 'string',
      pageSize: 'string',
      regionId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEditableNamespaceResponseBody extends $tea.Model {
  data?: ListEditableNamespaceResponseBodyData;
  httpCode?: number;
  message?: string;
  reason?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      httpCode: 'httpCode',
      message: 'message',
      reason: 'reason',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListEditableNamespaceResponseBodyData,
      httpCode: 'number',
      message: 'string',
      reason: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEditableNamespaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEditableNamespaceResponseBody;
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
      body: ListEditableNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEngineVersionMetadataHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEngineVersionMetadataResponseBody extends $tea.Model {
  /**
   * @remarks
   * *   If the value of success was true, the engine versions that are supported by Realtime Compute for Apache Flink were returned.
   * *   If the value of success was false, a null value was returned.
   */
  data?: EngineVersionMetadataIndex;
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The value was fixed to 200.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: EngineVersionMetadataIndex,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEngineVersionMetadataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEngineVersionMetadataResponseBody;
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
      body: ListEngineVersionMetadataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsRequest extends $tea.Model {
  /**
   * @remarks
   * The deployment ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 58718c99-3b29-4c5e-93bb-c9fc4ec6****
   */
  deploymentId?: string;
  /**
   * @remarks
   * The page number. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The collation.
   * 
   * Valid values:
   * 
   * *   gmt_create
   * *   job_id
   * *   status
   * 
   * @example
   * gmt_create
   */
  sortName?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentId: 'deploymentId',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      sortName: 'sortName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      sortName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBody extends $tea.Model {
  /**
   * @remarks
   * *   If the value of success was true, all jobs that meet the condition were returned.
   * *   If the value of success was false, a null value was returned.
   */
  data?: Job[];
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The value was fixed to 200.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      requestId: 'requestId',
      success: 'success',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': Job },
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListJobsResponseBody;
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
      body: ListJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMembersHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMembersRequest extends $tea.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMembersResponseBody extends $tea.Model {
  /**
   * @remarks
   * *   If the value of success was false, a null value was returned.
   * *   If the value of success was true, the authorization information was returned.
   */
  data?: Member[];
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The status code returned. The value was fixed to 200. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 50
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      requestId: 'requestId',
      success: 'success',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': Member },
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMembersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMembersResponseBody;
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
      body: ListMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSavepointsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSavepointsRequest extends $tea.Model {
  /**
   * @remarks
   * The deployment ID. This parameter is optional.
   * 
   * @example
   * 88a8fc49-e090-430a-85d8-3ee8c79c****
   */
  deploymentId?: string;
  /**
   * @remarks
   * The job ID. This parameter is optional.
   * 
   * @example
   * 99a8fc49-e090-430a-85d8-3ee8c79c****
   */
  jobId?: string;
  /**
   * @remarks
   * The page number. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      deploymentId: 'deploymentId',
      jobId: 'jobId',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentId: 'string',
      jobId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSavepointsResponseBody extends $tea.Model {
  /**
   * @remarks
   * *   If the value of success was true, a list of savepoints was returned.
   * *   If the value of success was false, a null value was returned.
   */
  data?: Savepoint[];
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The value was fixed to 200.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      requestId: 'requestId',
      success: 'success',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': Savepoint },
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSavepointsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSavepointsResponseBody;
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
      body: ListSavepointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVariablesHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bda1c4a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVariablesRequest extends $tea.Model {
  /**
   * @remarks
   * The page number. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVariablesResponseBody extends $tea.Model {
  /**
   * @remarks
   * *   If the value of success was true, a list of variables was returned.
   * *   If the value of success was false, a null value was returned.
   */
  data?: Variable[];
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The value was fixed to 200.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-ABCF-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      requestId: 'requestId',
      success: 'success',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': Variable },
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVariablesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListVariablesResponseBody;
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
      body: ListVariablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterCustomConnectorHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterCustomConnectorRequest extends $tea.Model {
  /**
   * @remarks
   * The URL in which the JAR package of the custom connector is stored. The URL must be connected to the platform.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://flink/connector/mysql123
   */
  jarUrl?: string;
  static names(): { [key: string]: string } {
    return {
      jarUrl: 'jarUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jarUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterCustomConnectorResponseBody extends $tea.Model {
  /**
   * @remarks
   * If the value of success was true, a list of deployments in which custom connectors were registered was returned. If the value of success was false, a null value was returned.
   */
  data?: Connector[];
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The status code returned. The value was fixed to 200. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': Connector },
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterCustomConnectorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RegisterCustomConnectorResponseBody;
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
      body: RegisterCustomConnectorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterUdfFunctionHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterUdfFunctionRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the class that corresponds to the UDF.
   * 
   * This parameter is required.
   * 
   * @example
   * orderRank
   */
  className?: string;
  /**
   * @remarks
   * The name of the UDF. In most cases, the name of the UDF is the same as the class name. You can specify a name for the UDF.
   * 
   * This parameter is required.
   * 
   * @example
   * orderRank
   */
  functionName?: string;
  /**
   * @remarks
   * The name of the JAR or Python file that corresponds to the UDF.
   * 
   * This parameter is required.
   * 
   * @example
   * test-udf
   */
  udfArtifactName?: string;
  static names(): { [key: string]: string } {
    return {
      className: 'className',
      functionName: 'functionName',
      udfArtifactName: 'udfArtifactName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      className: 'string',
      functionName: 'string',
      udfArtifactName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterUdfFunctionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the UDF.
   */
  data?: UdfFunction;
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The status code returned. The value was fixed to 200. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-ABCD-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UdfFunction,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterUdfFunctionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RegisterUdfFunctionResponseBody;
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
      body: RegisterUdfFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobRequest extends $tea.Model {
  /**
   * @remarks
   * The parameter that is used to start the job.
   * 
   * This parameter is required.
   */
  body?: StartJobRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: StartJobRequestBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobResponseBody extends $tea.Model {
  /**
   * @remarks
   * *   If the value of success was true, the job that you created was returned.
   * *   If the value of success was false, a null value was returned.
   */
  data?: Job;
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The value was fixed to 200.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: Job,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartJobResponseBody;
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
      body: StartJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobWithParamsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobWithParamsRequest extends $tea.Model {
  /**
   * @remarks
   * The parameter that is used to start the job.
   */
  body?: JobStartParameters;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: JobStartParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobWithParamsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details of the job of the deployment returned.
   */
  data?: Job;
  /**
   * @remarks
   * If the value of success was false, an error code was returned. If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * If the value of success was false, an error message was returned. If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The status code returned. The value was fixed to 200. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: Job,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobWithParamsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartJobWithParamsResponseBody;
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
      body: StartJobWithParamsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopJobHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopJobRequest extends $tea.Model {
  /**
   * @remarks
   * The parameter that is used to stop the job.
   * 
   * This parameter is required.
   */
  body?: StopJobRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: StopJobRequestBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopJobResponseBody extends $tea.Model {
  /**
   * @remarks
   * *   If the value of success was true, the job that you stopped was returned.
   * *   If the value of success was false, a null value was returned.
   */
  data?: Job;
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The value was fixed to 200.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: Job,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopJobResponseBody;
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
      body: StopJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeploymentHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeploymentRequest extends $tea.Model {
  /**
   * @remarks
   * The information about the deployment that you want to update.
   * 
   * This parameter is required.
   */
  body?: Deployment;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Deployment,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeploymentResponseBody extends $tea.Model {
  /**
   * @remarks
   * *   If the value of success was true, the information about the deployment after the update was returned.
   * *   If the value of success was false, a null value was returned.
   */
  data?: Deployment;
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The value was fixed to 200.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: Deployment,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeploymentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDeploymentResponseBody;
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
      body: UpdateDeploymentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeploymentDraftHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeploymentDraftRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: DeploymentDraft;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: DeploymentDraft,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeploymentDraftResponseBody extends $tea.Model {
  data?: DeploymentDraft;
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeploymentDraft,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeploymentDraftResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDeploymentDraftResponseBody;
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
      body: UpdateDeploymentDraftResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFolderHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f89a0c1ca8****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFolderRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: Folder;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Folder,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFolderResponseBody extends $tea.Model {
  data?: Folder;
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: Folder,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFolderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateFolderResponseBody;
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
      body: UpdateFolderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMemberHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMemberRequest extends $tea.Model {
  /**
   * @remarks
   * The permission information about the member.
   */
  body?: Member;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Member,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMemberResponseBody extends $tea.Model {
  /**
   * @remarks
   * If the value of success was true, the member that was created was returned. If the value of success was false, a null value was returned.
   */
  data?: Member;
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The status code returned. The value was fixed to 200. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: Member,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMemberResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateMemberResponseBody;
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
      body: UpdateMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUdfArtifactHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUdfArtifactRequest extends $tea.Model {
  /**
   * @remarks
   * The details of the JAR file of the UDF.
   * 
   * This parameter is required.
   */
  body?: UdfArtifact;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UdfArtifact,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUdfArtifactResponseBody extends $tea.Model {
  /**
   * @remarks
   * The result of updating the JAR file of the UDF.
   */
  data?: UpdateUdfArtifactResult;
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The status code returned. The value was fixed to 200. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-ABCD-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateUdfArtifactResult,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUdfArtifactResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUdfArtifactResponseBody;
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
      body: UpdateUdfArtifactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateSqlStatementHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateSqlStatementRequest extends $tea.Model {
  /**
   * @remarks
   * The content of the code that you want to verify.
   * 
   * This parameter is required.
   */
  body?: SqlStatementWithContext;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: SqlStatementWithContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateSqlStatementResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned data, which represents the details of SQL validation results.
   */
  data?: SqlStatementValidationResult;
  /**
   * @remarks
   * If the value of success was false, an error code was returned. If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * If the value of success was false, an error message was returned. If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The status code returned. The value was fixed to 200.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-****-1D30-8A4F-882ED4DD5E02
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SqlStatementValidationResult,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateSqlStatementResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ValidateSqlStatementResponseBody;
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
      body: ValidateSqlStatementResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployDeploymentDraftAsyncResponseBodyData extends $tea.Model {
  /**
   * @example
   * b3dcdb25-bf36-457d-92ba-a36077e8****
   */
  ticketId?: string;
  static names(): { [key: string]: string } {
    return {
      ticketId: 'ticketId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ticketId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateResourcePlanWithFlinkConfAsyncResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the ticket for you to query the asynchronous generation result.
   * 
   * @example
   * b3dcdb25-bf36-457d-92ba-a36077e8****
   */
  ticketId?: string;
  static names(): { [key: string]: string } {
    return {
      ticketId: 'ticketId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ticketId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEditableNamespaceResponseBodyData extends $tea.Model {
  editableNamespaces?: EditableNamespace[];
  pageIndex?: string;
  pageSize?: string;
  total?: string;
  static names(): { [key: string]: string } {
    return {
      editableNamespaces: 'editableNamespaces',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      editableNamespaces: { 'type': 'array', 'itemType': EditableNamespace },
      pageIndex: 'string',
      pageSize: 'string',
      total: 'string',
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
    this._endpoint = this.getEndpoint("ververica", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Creates a deployment.
   * 
   * @param request - CreateDeploymentRequest
   * @param headers - CreateDeploymentHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDeploymentResponse
   */
  async createDeploymentWithOptions(namespace: string, request: CreateDeploymentRequest, headers: CreateDeploymentHeaders, runtime: $Util.RuntimeOptions): Promise<CreateDeploymentResponse> {
    Util.validateModel(request);
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDeployment",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/deployments`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateDeploymentResponse>(await this.callApi(params, req, runtime), new CreateDeploymentResponse({}));
  }

  /**
   * Creates a deployment.
   * 
   * @param request - CreateDeploymentRequest
   * @returns CreateDeploymentResponse
   */
  async createDeployment(namespace: string, request: CreateDeploymentRequest): Promise<CreateDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateDeploymentHeaders({ });
    return await this.createDeploymentWithOptions(namespace, request, headers, runtime);
  }

  /**
   * create a deploymentDraft
   * 
   * @param request - CreateDeploymentDraftRequest
   * @param headers - CreateDeploymentDraftHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDeploymentDraftResponse
   */
  async createDeploymentDraftWithOptions(namespace: string, request: CreateDeploymentDraftRequest, headers: CreateDeploymentDraftHeaders, runtime: $Util.RuntimeOptions): Promise<CreateDeploymentDraftResponse> {
    Util.validateModel(request);
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDeploymentDraft",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/deployment-drafts`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateDeploymentDraftResponse>(await this.callApi(params, req, runtime), new CreateDeploymentDraftResponse({}));
  }

  /**
   * create a deploymentDraft
   * 
   * @param request - CreateDeploymentDraftRequest
   * @returns CreateDeploymentDraftResponse
   */
  async createDeploymentDraft(namespace: string, request: CreateDeploymentDraftRequest): Promise<CreateDeploymentDraftResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateDeploymentDraftHeaders({ });
    return await this.createDeploymentDraftWithOptions(namespace, request, headers, runtime);
  }

  /**
   * create a folder
   * 
   * @param request - CreateFolderRequest
   * @param headers - CreateFolderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFolderResponse
   */
  async createFolderWithOptions(namespace: string, request: CreateFolderRequest, headers: CreateFolderHeaders, runtime: $Util.RuntimeOptions): Promise<CreateFolderResponse> {
    Util.validateModel(request);
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateFolder",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/folder`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateFolderResponse>(await this.callApi(params, req, runtime), new CreateFolderResponse({}));
  }

  /**
   * create a folder
   * 
   * @param request - CreateFolderRequest
   * @returns CreateFolderResponse
   */
  async createFolder(namespace: string, request: CreateFolderRequest): Promise<CreateFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateFolderHeaders({ });
    return await this.createFolderWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Adds a user to a namespace as a member and grants permissions to the user.
   * 
   * @param request - CreateMemberRequest
   * @param headers - CreateMemberHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMemberResponse
   */
  async createMemberWithOptions(namespace: string, request: CreateMemberRequest, headers: CreateMemberHeaders, runtime: $Util.RuntimeOptions): Promise<CreateMemberResponse> {
    Util.validateModel(request);
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateMember",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/gateway/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/members`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateMemberResponse>(await this.callApi(params, req, runtime), new CreateMemberResponse({}));
  }

  /**
   * Adds a user to a namespace as a member and grants permissions to the user.
   * 
   * @param request - CreateMemberRequest
   * @returns CreateMemberResponse
   */
  async createMember(namespace: string, request: CreateMemberRequest): Promise<CreateMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateMemberHeaders({ });
    return await this.createMemberWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Creates a savepoint.
   * 
   * @param request - CreateSavepointRequest
   * @param headers - CreateSavepointHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSavepointResponse
   */
  async createSavepointWithOptions(namespace: string, request: CreateSavepointRequest, headers: CreateSavepointHeaders, runtime: $Util.RuntimeOptions): Promise<CreateSavepointResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deploymentId)) {
      body["deploymentId"] = request.deploymentId;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.nativeFormat)) {
      body["nativeFormat"] = request.nativeFormat;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSavepoint",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/savepoints`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateSavepointResponse>(await this.callApi(params, req, runtime), new CreateSavepointResponse({}));
  }

  /**
   * Creates a savepoint.
   * 
   * @param request - CreateSavepointRequest
   * @returns CreateSavepointResponse
   */
  async createSavepoint(namespace: string, request: CreateSavepointRequest): Promise<CreateSavepointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateSavepointHeaders({ });
    return await this.createSavepointWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Parses all user-defined function (UDF) methods in your JAR or Python file and creates an artifact configuration for a UDF.
   * 
   * @param request - CreateUdfArtifactRequest
   * @param headers - CreateUdfArtifactHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUdfArtifactResponse
   */
  async createUdfArtifactWithOptions(namespace: string, request: CreateUdfArtifactRequest, headers: CreateUdfArtifactHeaders, runtime: $Util.RuntimeOptions): Promise<CreateUdfArtifactResponse> {
    Util.validateModel(request);
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateUdfArtifact",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/udfartifacts`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateUdfArtifactResponse>(await this.callApi(params, req, runtime), new CreateUdfArtifactResponse({}));
  }

  /**
   * Parses all user-defined function (UDF) methods in your JAR or Python file and creates an artifact configuration for a UDF.
   * 
   * @param request - CreateUdfArtifactRequest
   * @returns CreateUdfArtifactResponse
   */
  async createUdfArtifact(namespace: string, request: CreateUdfArtifactRequest): Promise<CreateUdfArtifactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateUdfArtifactHeaders({ });
    return await this.createUdfArtifactWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Creates a variable.
   * 
   * @param request - CreateVariableRequest
   * @param headers - CreateVariableHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVariableResponse
   */
  async createVariableWithOptions(namespace: string, request: CreateVariableRequest, headers: CreateVariableHeaders, runtime: $Util.RuntimeOptions): Promise<CreateVariableResponse> {
    Util.validateModel(request);
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateVariable",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/variables`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateVariableResponse>(await this.callApi(params, req, runtime), new CreateVariableResponse({}));
  }

  /**
   * Creates a variable.
   * 
   * @param request - CreateVariableRequest
   * @returns CreateVariableResponse
   */
  async createVariable(namespace: string, request: CreateVariableRequest): Promise<CreateVariableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateVariableHeaders({ });
    return await this.createVariableWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Deletes a registered custom connector from a workspace.
   * 
   * @param headers - DeleteCustomConnectorHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomConnectorResponse
   */
  async deleteCustomConnectorWithOptions(namespace: string, connectorName: string, headers: DeleteCustomConnectorHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteCustomConnectorResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "DeleteCustomConnector",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/connectors/${OpenApiUtil.getEncodeParam(connectorName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteCustomConnectorResponse>(await this.callApi(params, req, runtime), new DeleteCustomConnectorResponse({}));
  }

  /**
   * Deletes a registered custom connector from a workspace.
   * @returns DeleteCustomConnectorResponse
   */
  async deleteCustomConnector(namespace: string, connectorName: string): Promise<DeleteCustomConnectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteCustomConnectorHeaders({ });
    return await this.deleteCustomConnectorWithOptions(namespace, connectorName, headers, runtime);
  }

  /**
   * Deletes a deployment based on the deployment ID.
   * 
   * @param headers - DeleteDeploymentHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDeploymentResponse
   */
  async deleteDeploymentWithOptions(namespace: string, deploymentId: string, headers: DeleteDeploymentHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteDeploymentResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "DeleteDeployment",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/deployments/${OpenApiUtil.getEncodeParam(deploymentId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteDeploymentResponse>(await this.callApi(params, req, runtime), new DeleteDeploymentResponse({}));
  }

  /**
   * Deletes a deployment based on the deployment ID.
   * @returns DeleteDeploymentResponse
   */
  async deleteDeployment(namespace: string, deploymentId: string): Promise<DeleteDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteDeploymentHeaders({ });
    return await this.deleteDeploymentWithOptions(namespace, deploymentId, headers, runtime);
  }

  /**
   * delete a deploymentDraft
   * 
   * @param headers - DeleteDeploymentDraftHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDeploymentDraftResponse
   */
  async deleteDeploymentDraftWithOptions(namespace: string, deploymentDraftId: string, headers: DeleteDeploymentDraftHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteDeploymentDraftResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "DeleteDeploymentDraft",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/deployment-drafts/${OpenApiUtil.getEncodeParam(deploymentDraftId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteDeploymentDraftResponse>(await this.callApi(params, req, runtime), new DeleteDeploymentDraftResponse({}));
  }

  /**
   * delete a deploymentDraft
   * @returns DeleteDeploymentDraftResponse
   */
  async deleteDeploymentDraft(namespace: string, deploymentDraftId: string): Promise<DeleteDeploymentDraftResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteDeploymentDraftHeaders({ });
    return await this.deleteDeploymentDraftWithOptions(namespace, deploymentDraftId, headers, runtime);
  }

  /**
   * delete a folder
   * 
   * @param headers - DeleteFolderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFolderResponse
   */
  async deleteFolderWithOptions(namespace: string, folderId: string, headers: DeleteFolderHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteFolderResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "DeleteFolder",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/folder/${OpenApiUtil.getEncodeParam(folderId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteFolderResponse>(await this.callApi(params, req, runtime), new DeleteFolderResponse({}));
  }

  /**
   * delete a folder
   * @returns DeleteFolderResponse
   */
  async deleteFolder(namespace: string, folderId: string): Promise<DeleteFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteFolderHeaders({ });
    return await this.deleteFolderWithOptions(namespace, folderId, headers, runtime);
  }

  /**
   * Deletes the information about a job that is not in the running state in a deployment.
   * 
   * @param headers - DeleteJobHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteJobResponse
   */
  async deleteJobWithOptions(namespace: string, jobId: string, headers: DeleteJobHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteJobResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "DeleteJob",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/jobs/${OpenApiUtil.getEncodeParam(jobId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteJobResponse>(await this.callApi(params, req, runtime), new DeleteJobResponse({}));
  }

  /**
   * Deletes the information about a job that is not in the running state in a deployment.
   * @returns DeleteJobResponse
   */
  async deleteJob(namespace: string, jobId: string): Promise<DeleteJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteJobHeaders({ });
    return await this.deleteJobWithOptions(namespace, jobId, headers, runtime);
  }

  /**
   * Revokes the permissions from a member.
   * 
   * @param headers - DeleteMemberHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMemberResponse
   */
  async deleteMemberWithOptions(namespace: string, member: string, headers: DeleteMemberHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteMemberResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "DeleteMember",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/gateway/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/members/${OpenApiUtil.getEncodeParam(member)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteMemberResponse>(await this.callApi(params, req, runtime), new DeleteMemberResponse({}));
  }

  /**
   * Revokes the permissions from a member.
   * @returns DeleteMemberResponse
   */
  async deleteMember(namespace: string, member: string): Promise<DeleteMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteMemberHeaders({ });
    return await this.deleteMemberWithOptions(namespace, member, headers, runtime);
  }

  /**
   * Deletes a savepoint.
   * 
   * @param headers - DeleteSavepointHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSavepointResponse
   */
  async deleteSavepointWithOptions(namespace: string, savepointId: string, headers: DeleteSavepointHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteSavepointResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "DeleteSavepoint",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/savepoints/${OpenApiUtil.getEncodeParam(savepointId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteSavepointResponse>(await this.callApi(params, req, runtime), new DeleteSavepointResponse({}));
  }

  /**
   * Deletes a savepoint.
   * @returns DeleteSavepointResponse
   */
  async deleteSavepoint(namespace: string, savepointId: string): Promise<DeleteSavepointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteSavepointHeaders({ });
    return await this.deleteSavepointWithOptions(namespace, savepointId, headers, runtime);
  }

  /**
   * 删除UdfArtifact
   * 
   * @param headers - DeleteUdfArtifactHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUdfArtifactResponse
   */
  async deleteUdfArtifactWithOptions(namespace: string, udfArtifactName: string, headers: DeleteUdfArtifactHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteUdfArtifactResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "DeleteUdfArtifact",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/udfartifacts/${OpenApiUtil.getEncodeParam(udfArtifactName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteUdfArtifactResponse>(await this.callApi(params, req, runtime), new DeleteUdfArtifactResponse({}));
  }

  /**
   * 删除UdfArtifact
   * @returns DeleteUdfArtifactResponse
   */
  async deleteUdfArtifact(namespace: string, udfArtifactName: string): Promise<DeleteUdfArtifactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteUdfArtifactHeaders({ });
    return await this.deleteUdfArtifactWithOptions(namespace, udfArtifactName, headers, runtime);
  }

  /**
   * Deletes an existing user-defined function (UDF) from a Realtime Compute for Apache Flink workspace.
   * 
   * @param request - DeleteUdfFunctionRequest
   * @param headers - DeleteUdfFunctionHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUdfFunctionResponse
   */
  async deleteUdfFunctionWithOptions(namespace: string, functionName: string, request: DeleteUdfFunctionRequest, headers: DeleteUdfFunctionHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteUdfFunctionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.className)) {
      query["className"] = request.className;
    }

    if (!Util.isUnset(request.udfArtifactName)) {
      query["udfArtifactName"] = request.udfArtifactName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUdfFunction",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/udfartifacts/function/${OpenApiUtil.getEncodeParam(functionName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteUdfFunctionResponse>(await this.callApi(params, req, runtime), new DeleteUdfFunctionResponse({}));
  }

  /**
   * Deletes an existing user-defined function (UDF) from a Realtime Compute for Apache Flink workspace.
   * 
   * @param request - DeleteUdfFunctionRequest
   * @returns DeleteUdfFunctionResponse
   */
  async deleteUdfFunction(namespace: string, functionName: string, request: DeleteUdfFunctionRequest): Promise<DeleteUdfFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteUdfFunctionHeaders({ });
    return await this.deleteUdfFunctionWithOptions(namespace, functionName, request, headers, runtime);
  }

  /**
   * Deletes a variable.
   * 
   * @param headers - DeleteVariableHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVariableResponse
   */
  async deleteVariableWithOptions(namespace: string, name: string, headers: DeleteVariableHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteVariableResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "DeleteVariable",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/variables/${OpenApiUtil.getEncodeParam(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteVariableResponse>(await this.callApi(params, req, runtime), new DeleteVariableResponse({}));
  }

  /**
   * Deletes a variable.
   * @returns DeleteVariableResponse
   */
  async deleteVariable(namespace: string, name: string): Promise<DeleteVariableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteVariableHeaders({ });
    return await this.deleteVariableWithOptions(namespace, name, headers, runtime);
  }

  /**
   * deploy deploymentDraft async
   * 
   * @param request - DeployDeploymentDraftAsyncRequest
   * @param headers - DeployDeploymentDraftAsyncHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeployDeploymentDraftAsyncResponse
   */
  async deployDeploymentDraftAsyncWithOptions(namespace: string, request: DeployDeploymentDraftAsyncRequest, headers: DeployDeploymentDraftAsyncHeaders, runtime: $Util.RuntimeOptions): Promise<DeployDeploymentDraftAsyncResponse> {
    Util.validateModel(request);
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "DeployDeploymentDraftAsync",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/deployment-drafts/async-deploy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeployDeploymentDraftAsyncResponse>(await this.callApi(params, req, runtime), new DeployDeploymentDraftAsyncResponse({}));
  }

  /**
   * deploy deploymentDraft async
   * 
   * @param request - DeployDeploymentDraftAsyncRequest
   * @returns DeployDeploymentDraftAsyncResponse
   */
  async deployDeploymentDraftAsync(namespace: string, request: DeployDeploymentDraftAsyncRequest): Promise<DeployDeploymentDraftAsyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeployDeploymentDraftAsyncHeaders({ });
    return await this.deployDeploymentDraftAsyncWithOptions(namespace, request, headers, runtime);
  }

  /**
   * 执行sql语句
   * 
   * @param request - ExecuteSqlStatementRequest
   * @param headers - ExecuteSqlStatementHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteSqlStatementResponse
   */
  async executeSqlStatementWithOptions(namespace: string, request: ExecuteSqlStatementRequest, headers: ExecuteSqlStatementHeaders, runtime: $Util.RuntimeOptions): Promise<ExecuteSqlStatementResponse> {
    Util.validateModel(request);
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteSqlStatement",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/sql-statement/execute`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ExecuteSqlStatementResponse>(await this.callApi(params, req, runtime), new ExecuteSqlStatementResponse({}));
  }

  /**
   * 执行sql语句
   * 
   * @param request - ExecuteSqlStatementRequest
   * @returns ExecuteSqlStatementResponse
   */
  async executeSqlStatement(namespace: string, request: ExecuteSqlStatementRequest): Promise<ExecuteSqlStatementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ExecuteSqlStatementHeaders({ });
    return await this.executeSqlStatementWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Provides a Flink request proxy.
   * 
   * @param request - FlinkApiProxyRequest
   * @param headers - FlinkApiProxyHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlinkApiProxyResponse
   */
  async flinkApiProxyWithOptions(request: FlinkApiProxyRequest, headers: FlinkApiProxyHeaders, runtime: $Util.RuntimeOptions): Promise<FlinkApiProxyResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.flinkApiPath)) {
      query["flinkApiPath"] = request.flinkApiPath;
    }

    if (!Util.isUnset(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["resourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FlinkApiProxy",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/flink-ui/v2/proxy`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<FlinkApiProxyResponse>(await this.callApi(params, req, runtime), new FlinkApiProxyResponse({}));
  }

  /**
   * Provides a Flink request proxy.
   * 
   * @param request - FlinkApiProxyRequest
   * @returns FlinkApiProxyResponse
   */
  async flinkApiProxy(request: FlinkApiProxyRequest): Promise<FlinkApiProxyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new FlinkApiProxyHeaders({ });
    return await this.flinkApiProxyWithOptions(request, headers, runtime);
  }

  /**
   * Submits a ticket that applies for asynchronous generation of the fine-grained resources. This operation returns the ID of the ticket for you to query the asynchronous generation result.
   * 
   * @param request - GenerateResourcePlanWithFlinkConfAsyncRequest
   * @param headers - GenerateResourcePlanWithFlinkConfAsyncHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateResourcePlanWithFlinkConfAsyncResponse
   */
  async generateResourcePlanWithFlinkConfAsyncWithOptions(namespace: string, deploymentId: string, request: GenerateResourcePlanWithFlinkConfAsyncRequest, headers: GenerateResourcePlanWithFlinkConfAsyncHeaders, runtime: $Util.RuntimeOptions): Promise<GenerateResourcePlanWithFlinkConfAsyncResponse> {
    Util.validateModel(request);
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "GenerateResourcePlanWithFlinkConfAsync",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/deployments/${OpenApiUtil.getEncodeParam(deploymentId)}/resource-plan%3AasyncGenerate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GenerateResourcePlanWithFlinkConfAsyncResponse>(await this.callApi(params, req, runtime), new GenerateResourcePlanWithFlinkConfAsyncResponse({}));
  }

  /**
   * Submits a ticket that applies for asynchronous generation of the fine-grained resources. This operation returns the ID of the ticket for you to query the asynchronous generation result.
   * 
   * @param request - GenerateResourcePlanWithFlinkConfAsyncRequest
   * @returns GenerateResourcePlanWithFlinkConfAsyncResponse
   */
  async generateResourcePlanWithFlinkConfAsync(namespace: string, deploymentId: string, request: GenerateResourcePlanWithFlinkConfAsyncRequest): Promise<GenerateResourcePlanWithFlinkConfAsyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GenerateResourcePlanWithFlinkConfAsyncHeaders({ });
    return await this.generateResourcePlanWithFlinkConfAsyncWithOptions(namespace, deploymentId, request, headers, runtime);
  }

  /**
   * 获取catalog
   * 
   * @param request - GetCatalogsRequest
   * @param headers - GetCatalogsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCatalogsResponse
   */
  async getCatalogsWithOptions(namespace: string, request: GetCatalogsRequest, headers: GetCatalogsHeaders, runtime: $Util.RuntimeOptions): Promise<GetCatalogsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogName)) {
      query["catalogName"] = request.catalogName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCatalogs",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/catalogs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetCatalogsResponse>(await this.callApi(params, req, runtime), new GetCatalogsResponse({}));
  }

  /**
   * 获取catalog
   * 
   * @param request - GetCatalogsRequest
   * @returns GetCatalogsResponse
   */
  async getCatalogs(namespace: string, request: GetCatalogsRequest): Promise<GetCatalogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetCatalogsHeaders({ });
    return await this.getCatalogsWithOptions(namespace, request, headers, runtime);
  }

  /**
   * 获取database
   * 
   * @param request - GetDatabasesRequest
   * @param headers - GetDatabasesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatabasesResponse
   */
  async getDatabasesWithOptions(namespace: string, catalogName: string, request: GetDatabasesRequest, headers: GetDatabasesHeaders, runtime: $Util.RuntimeOptions): Promise<GetDatabasesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.databaseName)) {
      query["databaseName"] = request.databaseName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDatabases",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/catalogs/${OpenApiUtil.getEncodeParam(catalogName)}/databases`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDatabasesResponse>(await this.callApi(params, req, runtime), new GetDatabasesResponse({}));
  }

  /**
   * 获取database
   * 
   * @param request - GetDatabasesRequest
   * @returns GetDatabasesResponse
   */
  async getDatabases(namespace: string, catalogName: string, request: GetDatabasesRequest): Promise<GetDatabasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetDatabasesHeaders({ });
    return await this.getDatabasesWithOptions(namespace, catalogName, request, headers, runtime);
  }

  /**
   * get deploy deploymentDraft result
   * 
   * @param headers - GetDeployDeploymentDraftResultHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeployDeploymentDraftResultResponse
   */
  async getDeployDeploymentDraftResultWithOptions(namespace: string, ticketId: string, headers: GetDeployDeploymentDraftResultHeaders, runtime: $Util.RuntimeOptions): Promise<GetDeployDeploymentDraftResultResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "GetDeployDeploymentDraftResult",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/deployment-drafts/tickets/${OpenApiUtil.getEncodeParam(ticketId)}/async-deploy`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDeployDeploymentDraftResultResponse>(await this.callApi(params, req, runtime), new GetDeployDeploymentDraftResultResponse({}));
  }

  /**
   * get deploy deploymentDraft result
   * @returns GetDeployDeploymentDraftResultResponse
   */
  async getDeployDeploymentDraftResult(namespace: string, ticketId: string): Promise<GetDeployDeploymentDraftResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetDeployDeploymentDraftResultHeaders({ });
    return await this.getDeployDeploymentDraftResultWithOptions(namespace, ticketId, headers, runtime);
  }

  /**
   * Obtains the details of a deployment.
   * 
   * @param headers - GetDeploymentHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeploymentResponse
   */
  async getDeploymentWithOptions(namespace: string, deploymentId: string, headers: GetDeploymentHeaders, runtime: $Util.RuntimeOptions): Promise<GetDeploymentResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "GetDeployment",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/deployments/${OpenApiUtil.getEncodeParam(deploymentId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDeploymentResponse>(await this.callApi(params, req, runtime), new GetDeploymentResponse({}));
  }

  /**
   * Obtains the details of a deployment.
   * @returns GetDeploymentResponse
   */
  async getDeployment(namespace: string, deploymentId: string): Promise<GetDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetDeploymentHeaders({ });
    return await this.getDeploymentWithOptions(namespace, deploymentId, headers, runtime);
  }

  /**
   * get a deploymentDraft
   * 
   * @param headers - GetDeploymentDraftHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeploymentDraftResponse
   */
  async getDeploymentDraftWithOptions(namespace: string, deploymentDraftId: string, headers: GetDeploymentDraftHeaders, runtime: $Util.RuntimeOptions): Promise<GetDeploymentDraftResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "GetDeploymentDraft",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/deployment-drafts/${OpenApiUtil.getEncodeParam(deploymentDraftId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDeploymentDraftResponse>(await this.callApi(params, req, runtime), new GetDeploymentDraftResponse({}));
  }

  /**
   * get a deploymentDraft
   * @returns GetDeploymentDraftResponse
   */
  async getDeploymentDraft(namespace: string, deploymentDraftId: string): Promise<GetDeploymentDraftResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetDeploymentDraftHeaders({ });
    return await this.getDeploymentDraftWithOptions(namespace, deploymentDraftId, headers, runtime);
  }

  /**
   * get deploymentDraft lock
   * 
   * @param request - GetDeploymentDraftLockRequest
   * @param headers - GetDeploymentDraftLockHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeploymentDraftLockResponse
   */
  async getDeploymentDraftLockWithOptions(namespace: string, request: GetDeploymentDraftLockRequest, headers: GetDeploymentDraftLockHeaders, runtime: $Util.RuntimeOptions): Promise<GetDeploymentDraftLockResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deploymentDraftId)) {
      query["deploymentDraftId"] = request.deploymentDraftId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDeploymentDraftLock",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/deployment-drafts/getLock`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDeploymentDraftLockResponse>(await this.callApi(params, req, runtime), new GetDeploymentDraftLockResponse({}));
  }

  /**
   * get deploymentDraft lock
   * 
   * @param request - GetDeploymentDraftLockRequest
   * @returns GetDeploymentDraftLockResponse
   */
  async getDeploymentDraftLock(namespace: string, request: GetDeploymentDraftLockRequest): Promise<GetDeploymentDraftLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetDeploymentDraftLockHeaders({ });
    return await this.getDeploymentDraftLockWithOptions(namespace, request, headers, runtime);
  }

  /**
   * get a folder
   * 
   * @param request - GetFolderRequest
   * @param headers - GetFolderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFolderResponse
   */
  async getFolderWithOptions(namespace: string, request: GetFolderRequest, headers: GetFolderHeaders, runtime: $Util.RuntimeOptions): Promise<GetFolderResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.folderId)) {
      query["folderId"] = request.folderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFolder",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/folder`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetFolderResponse>(await this.callApi(params, req, runtime), new GetFolderResponse({}));
  }

  /**
   * get a folder
   * 
   * @param request - GetFolderRequest
   * @returns GetFolderResponse
   */
  async getFolder(namespace: string, request: GetFolderRequest): Promise<GetFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetFolderHeaders({ });
    return await this.getFolderWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Obtains the asynchronous generation result of fine-grained resources based on the ID of the ticket that applies for an asynchronous generation.
   * 
   * @param headers - GetGenerateResourcePlanResultHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGenerateResourcePlanResultResponse
   */
  async getGenerateResourcePlanResultWithOptions(namespace: string, ticketId: string, headers: GetGenerateResourcePlanResultHeaders, runtime: $Util.RuntimeOptions): Promise<GetGenerateResourcePlanResultResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "GetGenerateResourcePlanResult",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/deployments/tickets/${OpenApiUtil.getEncodeParam(ticketId)}/resource-plan%3AasyncGenerate`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetGenerateResourcePlanResultResponse>(await this.callApi(params, req, runtime), new GetGenerateResourcePlanResultResponse({}));
  }

  /**
   * Obtains the asynchronous generation result of fine-grained resources based on the ID of the ticket that applies for an asynchronous generation.
   * @returns GetGenerateResourcePlanResultResponse
   */
  async getGenerateResourcePlanResult(namespace: string, ticketId: string): Promise<GetGenerateResourcePlanResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetGenerateResourcePlanResultHeaders({ });
    return await this.getGenerateResourcePlanResultWithOptions(namespace, ticketId, headers, runtime);
  }

  /**
   * 查询动态更新结果
   * 
   * @param headers - GetHotUpdateJobResultHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotUpdateJobResultResponse
   */
  async getHotUpdateJobResultWithOptions(namespace: string, jobHotUpdateId: string, headers: GetHotUpdateJobResultHeaders, runtime: $Util.RuntimeOptions): Promise<GetHotUpdateJobResultResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "GetHotUpdateJobResult",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/jobs/hot-updates/${OpenApiUtil.getEncodeParam(jobHotUpdateId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetHotUpdateJobResultResponse>(await this.callApi(params, req, runtime), new GetHotUpdateJobResultResponse({}));
  }

  /**
   * 查询动态更新结果
   * @returns GetHotUpdateJobResultResponse
   */
  async getHotUpdateJobResult(namespace: string, jobHotUpdateId: string): Promise<GetHotUpdateJobResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetHotUpdateJobResultHeaders({ });
    return await this.getHotUpdateJobResultWithOptions(namespace, jobHotUpdateId, headers, runtime);
  }

  /**
   * Obtains the details of a job.
   * 
   * @param headers - GetJobHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobResponse
   */
  async getJobWithOptions(namespace: string, jobId: string, headers: GetJobHeaders, runtime: $Util.RuntimeOptions): Promise<GetJobResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "GetJob",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/jobs/${OpenApiUtil.getEncodeParam(jobId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetJobResponse>(await this.callApi(params, req, runtime), new GetJobResponse({}));
  }

  /**
   * Obtains the details of a job.
   * @returns GetJobResponse
   */
  async getJob(namespace: string, jobId: string): Promise<GetJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetJobHeaders({ });
    return await this.getJobWithOptions(namespace, jobId, headers, runtime);
  }

  /**
   * Obtains the latest startup logs of a job.
   * 
   * @param headers - GetLatestJobStartLogHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLatestJobStartLogResponse
   */
  async getLatestJobStartLogWithOptions(namespace: string, deploymentId: string, headers: GetLatestJobStartLogHeaders, runtime: $Util.RuntimeOptions): Promise<GetLatestJobStartLogResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "GetLatestJobStartLog",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/deployments/${OpenApiUtil.getEncodeParam(deploymentId)}/latest_jobmanager_start_log`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetLatestJobStartLogResponse>(await this.callApi(params, req, runtime), new GetLatestJobStartLogResponse({}));
  }

  /**
   * Obtains the latest startup logs of a job.
   * @returns GetLatestJobStartLogResponse
   */
  async getLatestJobStartLog(namespace: string, deploymentId: string): Promise<GetLatestJobStartLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetLatestJobStartLogHeaders({ });
    return await this.getLatestJobStartLogWithOptions(namespace, deploymentId, headers, runtime);
  }

  /**
   * Obtains the lineage information of a deployment.
   * 
   * @param request - GetLineageInfoRequest
   * @param headers - GetLineageInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLineageInfoResponse
   */
  async getLineageInfoWithOptions(request: GetLineageInfoRequest, headers: GetLineageInfoHeaders, runtime: $Util.RuntimeOptions): Promise<GetLineageInfoResponse> {
    Util.validateModel(request);
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "GetLineageInfo",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/meta/v2/lineage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetLineageInfoResponse>(await this.callApi(params, req, runtime), new GetLineageInfoResponse({}));
  }

  /**
   * Obtains the lineage information of a deployment.
   * 
   * @param request - GetLineageInfoRequest
   * @returns GetLineageInfoResponse
   */
  async getLineageInfo(request: GetLineageInfoRequest): Promise<GetLineageInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetLineageInfoHeaders({ });
    return await this.getLineageInfoWithOptions(request, headers, runtime);
  }

  /**
   * Queries the permissions of a member.
   * 
   * @param headers - GetMemberHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMemberResponse
   */
  async getMemberWithOptions(namespace: string, member: string, headers: GetMemberHeaders, runtime: $Util.RuntimeOptions): Promise<GetMemberResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "GetMember",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/gateway/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/members/${OpenApiUtil.getEncodeParam(member)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetMemberResponse>(await this.callApi(params, req, runtime), new GetMemberResponse({}));
  }

  /**
   * Queries the permissions of a member.
   * @returns GetMemberResponse
   */
  async getMember(namespace: string, member: string): Promise<GetMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetMemberHeaders({ });
    return await this.getMemberWithOptions(namespace, member, headers, runtime);
  }

  /**
   * Queries details of a savepoint and checkpoint.
   * 
   * @param headers - GetSavepointHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSavepointResponse
   */
  async getSavepointWithOptions(namespace: string, savepointId: string, headers: GetSavepointHeaders, runtime: $Util.RuntimeOptions): Promise<GetSavepointResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "GetSavepoint",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/savepoints/${OpenApiUtil.getEncodeParam(savepointId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetSavepointResponse>(await this.callApi(params, req, runtime), new GetSavepointResponse({}));
  }

  /**
   * Queries details of a savepoint and checkpoint.
   * @returns GetSavepointResponse
   */
  async getSavepoint(namespace: string, savepointId: string): Promise<GetSavepointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetSavepointHeaders({ });
    return await this.getSavepointWithOptions(namespace, savepointId, headers, runtime);
  }

  /**
   * 获取table
   * 
   * @param request - GetTablesRequest
   * @param headers - GetTablesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTablesResponse
   */
  async getTablesWithOptions(namespace: string, catalogName: string, databaseName: string, request: GetTablesRequest, headers: GetTablesHeaders, runtime: $Util.RuntimeOptions): Promise<GetTablesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.tableName)) {
      query["tableName"] = request.tableName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTables",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/catalogs/${OpenApiUtil.getEncodeParam(catalogName)}/databases/${OpenApiUtil.getEncodeParam(databaseName)}/tables`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTablesResponse>(await this.callApi(params, req, runtime), new GetTablesResponse({}));
  }

  /**
   * 获取table
   * 
   * @param request - GetTablesRequest
   * @returns GetTablesResponse
   */
  async getTables(namespace: string, catalogName: string, databaseName: string, request: GetTablesRequest): Promise<GetTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetTablesHeaders({ });
    return await this.getTablesWithOptions(namespace, catalogName, databaseName, request, headers, runtime);
  }

  /**
   * Obtains the details of the JAR or Python file that corresponds to the user-defined function (UDF) that you upload and create.
   * 
   * @param request - GetUdfArtifactsRequest
   * @param headers - GetUdfArtifactsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUdfArtifactsResponse
   */
  async getUdfArtifactsWithOptions(namespace: string, request: GetUdfArtifactsRequest, headers: GetUdfArtifactsHeaders, runtime: $Util.RuntimeOptions): Promise<GetUdfArtifactsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.udfArtifactName)) {
      query["udfArtifactName"] = request.udfArtifactName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUdfArtifacts",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/udfartifacts`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetUdfArtifactsResponse>(await this.callApi(params, req, runtime), new GetUdfArtifactsResponse({}));
  }

  /**
   * Obtains the details of the JAR or Python file that corresponds to the user-defined function (UDF) that you upload and create.
   * 
   * @param request - GetUdfArtifactsRequest
   * @returns GetUdfArtifactsResponse
   */
  async getUdfArtifacts(namespace: string, request: GetUdfArtifactsRequest): Promise<GetUdfArtifactsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetUdfArtifactsHeaders({ });
    return await this.getUdfArtifactsWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Dynamically updates parameters or resources of a deployment that is running.
   * 
   * @param headers - HotUpdateJobHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HotUpdateJobResponse
   */
  async hotUpdateJobWithOptions(namespace: string, jobId: string, headers: HotUpdateJobHeaders, runtime: $Util.RuntimeOptions): Promise<HotUpdateJobResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "HotUpdateJob",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/jobs/${OpenApiUtil.getEncodeParam(jobId)}%3AhotUpdate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<HotUpdateJobResponse>(await this.callApi(params, req, runtime), new HotUpdateJobResponse({}));
  }

  /**
   * Dynamically updates parameters or resources of a deployment that is running.
   * @returns HotUpdateJobResponse
   */
  async hotUpdateJob(namespace: string, jobId: string): Promise<HotUpdateJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HotUpdateJobHeaders({ });
    return await this.hotUpdateJobWithOptions(namespace, jobId, headers, runtime);
  }

  /**
   * Obtains a list of existing custom connectors.
   * 
   * @param headers - ListCustomConnectorsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomConnectorsResponse
   */
  async listCustomConnectorsWithOptions(namespace: string, headers: ListCustomConnectorsHeaders, runtime: $Util.RuntimeOptions): Promise<ListCustomConnectorsResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "ListCustomConnectors",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/connectors`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListCustomConnectorsResponse>(await this.callApi(params, req, runtime), new ListCustomConnectorsResponse({}));
  }

  /**
   * Obtains a list of existing custom connectors.
   * @returns ListCustomConnectorsResponse
   */
  async listCustomConnectors(namespace: string): Promise<ListCustomConnectorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListCustomConnectorsHeaders({ });
    return await this.listCustomConnectorsWithOptions(namespace, headers, runtime);
  }

  /**
   * list deploymentDrafts
   * 
   * @param request - ListDeploymentDraftsRequest
   * @param headers - ListDeploymentDraftsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeploymentDraftsResponse
   */
  async listDeploymentDraftsWithOptions(namespace: string, request: ListDeploymentDraftsRequest, headers: ListDeploymentDraftsHeaders, runtime: $Util.RuntimeOptions): Promise<ListDeploymentDraftsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDeploymentDrafts",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/deployment-drafts`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDeploymentDraftsResponse>(await this.callApi(params, req, runtime), new ListDeploymentDraftsResponse({}));
  }

  /**
   * list deploymentDrafts
   * 
   * @param request - ListDeploymentDraftsRequest
   * @returns ListDeploymentDraftsResponse
   */
  async listDeploymentDrafts(namespace: string, request: ListDeploymentDraftsRequest): Promise<ListDeploymentDraftsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListDeploymentDraftsHeaders({ });
    return await this.listDeploymentDraftsWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Obtains a list of clusters in which deployments can be deployed. The cluster can be a session cluster or a per-job cluster.
   * 
   * @param request - ListDeploymentTargetsRequest
   * @param headers - ListDeploymentTargetsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeploymentTargetsResponse
   */
  async listDeploymentTargetsWithOptions(namespace: string, request: ListDeploymentTargetsRequest, headers: ListDeploymentTargetsHeaders, runtime: $Util.RuntimeOptions): Promise<ListDeploymentTargetsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDeploymentTargets",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/deployment-targets`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDeploymentTargetsResponse>(await this.callApi(params, req, runtime), new ListDeploymentTargetsResponse({}));
  }

  /**
   * Obtains a list of clusters in which deployments can be deployed. The cluster can be a session cluster or a per-job cluster.
   * 
   * @param request - ListDeploymentTargetsRequest
   * @returns ListDeploymentTargetsResponse
   */
  async listDeploymentTargets(namespace: string, request: ListDeploymentTargetsRequest): Promise<ListDeploymentTargetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListDeploymentTargetsHeaders({ });
    return await this.listDeploymentTargetsWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Obtains information about all deployments.
   * 
   * @param request - ListDeploymentsRequest
   * @param headers - ListDeploymentsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeploymentsResponse
   */
  async listDeploymentsWithOptions(namespace: string, request: ListDeploymentsRequest, headers: ListDeploymentsHeaders, runtime: $Util.RuntimeOptions): Promise<ListDeploymentsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.creator)) {
      query["creator"] = request.creator;
    }

    if (!Util.isUnset(request.executionMode)) {
      query["executionMode"] = request.executionMode;
    }

    if (!Util.isUnset(request.labelKey)) {
      query["labelKey"] = request.labelKey;
    }

    if (!Util.isUnset(request.labelValueArray)) {
      query["labelValueArray"] = request.labelValueArray;
    }

    if (!Util.isUnset(request.modifier)) {
      query["modifier"] = request.modifier;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["status"] = request.status;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDeployments",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/deployments`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDeploymentsResponse>(await this.callApi(params, req, runtime), new ListDeploymentsResponse({}));
  }

  /**
   * Obtains information about all deployments.
   * 
   * @param request - ListDeploymentsRequest
   * @returns ListDeploymentsResponse
   */
  async listDeployments(namespace: string, request: ListDeploymentsRequest): Promise<ListDeploymentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListDeploymentsHeaders({ });
    return await this.listDeploymentsWithOptions(namespace, request, headers, runtime);
  }

  /**
   * 列出有编辑权限的项目空间。
   * 
   * @param request - ListEditableNamespaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEditableNamespaceResponse
   */
  async listEditableNamespaceWithOptions(request: ListEditableNamespaceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListEditableNamespaceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEditableNamespace",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/gateway/v2/namespaces/editable`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListEditableNamespaceResponse>(await this.callApi(params, req, runtime), new ListEditableNamespaceResponse({}));
  }

  /**
   * 列出有编辑权限的项目空间。
   * 
   * @param request - ListEditableNamespaceRequest
   * @returns ListEditableNamespaceResponse
   */
  async listEditableNamespace(request: ListEditableNamespaceRequest): Promise<ListEditableNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEditableNamespaceWithOptions(request, headers, runtime);
  }

  /**
   * Obtains a list of engine versions that are supported by Realtime Compute for Apache Flink.
   * 
   * @param headers - ListEngineVersionMetadataHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEngineVersionMetadataResponse
   */
  async listEngineVersionMetadataWithOptions(headers: ListEngineVersionMetadataHeaders, runtime: $Util.RuntimeOptions): Promise<ListEngineVersionMetadataResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "ListEngineVersionMetadata",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/engine-version-meta.json`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListEngineVersionMetadataResponse>(await this.callApi(params, req, runtime), new ListEngineVersionMetadataResponse({}));
  }

  /**
   * Obtains a list of engine versions that are supported by Realtime Compute for Apache Flink.
   * @returns ListEngineVersionMetadataResponse
   */
  async listEngineVersionMetadata(): Promise<ListEngineVersionMetadataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListEngineVersionMetadataHeaders({ });
    return await this.listEngineVersionMetadataWithOptions(headers, runtime);
  }

  /**
   * Queries the information about all jobs in a deployment.
   * 
   * @param request - ListJobsRequest
   * @param headers - ListJobsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobsResponse
   */
  async listJobsWithOptions(namespace: string, request: ListJobsRequest, headers: ListJobsHeaders, runtime: $Util.RuntimeOptions): Promise<ListJobsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deploymentId)) {
      query["deploymentId"] = request.deploymentId;
    }

    if (!Util.isUnset(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortName)) {
      query["sortName"] = request.sortName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListJobs",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/jobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListJobsResponse>(await this.callApi(params, req, runtime), new ListJobsResponse({}));
  }

  /**
   * Queries the information about all jobs in a deployment.
   * 
   * @param request - ListJobsRequest
   * @returns ListJobsResponse
   */
  async listJobs(namespace: string, request: ListJobsRequest): Promise<ListJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListJobsHeaders({ });
    return await this.listJobsWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Queries the mappings between the ID and permissions of a member in a specific namespace.
   * 
   * @param request - ListMembersRequest
   * @param headers - ListMembersHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMembersResponse
   */
  async listMembersWithOptions(namespace: string, request: ListMembersRequest, headers: ListMembersHeaders, runtime: $Util.RuntimeOptions): Promise<ListMembersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListMembers",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/gateway/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/members`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListMembersResponse>(await this.callApi(params, req, runtime), new ListMembersResponse({}));
  }

  /**
   * Queries the mappings between the ID and permissions of a member in a specific namespace.
   * 
   * @param request - ListMembersRequest
   * @returns ListMembersResponse
   */
  async listMembers(namespace: string, request: ListMembersRequest): Promise<ListMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListMembersHeaders({ });
    return await this.listMembersWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Obtains a list of savepoints or checkpoints.
   * 
   * @param request - ListSavepointsRequest
   * @param headers - ListSavepointsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSavepointsResponse
   */
  async listSavepointsWithOptions(namespace: string, request: ListSavepointsRequest, headers: ListSavepointsHeaders, runtime: $Util.RuntimeOptions): Promise<ListSavepointsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deploymentId)) {
      query["deploymentId"] = request.deploymentId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["jobId"] = request.jobId;
    }

    if (!Util.isUnset(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSavepoints",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/savepoints`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSavepointsResponse>(await this.callApi(params, req, runtime), new ListSavepointsResponse({}));
  }

  /**
   * Obtains a list of savepoints or checkpoints.
   * 
   * @param request - ListSavepointsRequest
   * @returns ListSavepointsResponse
   */
  async listSavepoints(namespace: string, request: ListSavepointsRequest): Promise<ListSavepointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListSavepointsHeaders({ });
    return await this.listSavepointsWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Obtains a list of variables.
   * 
   * @param request - ListVariablesRequest
   * @param headers - ListVariablesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVariablesResponse
   */
  async listVariablesWithOptions(namespace: string, request: ListVariablesRequest, headers: ListVariablesHeaders, runtime: $Util.RuntimeOptions): Promise<ListVariablesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListVariables",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/variables`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListVariablesResponse>(await this.callApi(params, req, runtime), new ListVariablesResponse({}));
  }

  /**
   * Obtains a list of variables.
   * 
   * @param request - ListVariablesRequest
   * @returns ListVariablesResponse
   */
  async listVariables(namespace: string, request: ListVariablesRequest): Promise<ListVariablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListVariablesHeaders({ });
    return await this.listVariablesWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Registers a custom connector in a namespace. The registered custom connector can be used in SQL statements.
   * 
   * @param request - RegisterCustomConnectorRequest
   * @param headers - RegisterCustomConnectorHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterCustomConnectorResponse
   */
  async registerCustomConnectorWithOptions(namespace: string, request: RegisterCustomConnectorRequest, headers: RegisterCustomConnectorHeaders, runtime: $Util.RuntimeOptions): Promise<RegisterCustomConnectorResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jarUrl)) {
      query["jarUrl"] = request.jarUrl;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RegisterCustomConnector",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/connectors%3Aregister`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RegisterCustomConnectorResponse>(await this.callApi(params, req, runtime), new RegisterCustomConnectorResponse({}));
  }

  /**
   * Registers a custom connector in a namespace. The registered custom connector can be used in SQL statements.
   * 
   * @param request - RegisterCustomConnectorRequest
   * @returns RegisterCustomConnectorResponse
   */
  async registerCustomConnector(namespace: string, request: RegisterCustomConnectorRequest): Promise<RegisterCustomConnectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new RegisterCustomConnectorHeaders({ });
    return await this.registerCustomConnectorWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Registers specific or all of the user-defined functions (UDFs) that are parsed from the JAR files. The registered functions can be used in SQL statements.
   * 
   * @param request - RegisterUdfFunctionRequest
   * @param headers - RegisterUdfFunctionHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterUdfFunctionResponse
   */
  async registerUdfFunctionWithOptions(namespace: string, request: RegisterUdfFunctionRequest, headers: RegisterUdfFunctionHeaders, runtime: $Util.RuntimeOptions): Promise<RegisterUdfFunctionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.className)) {
      query["className"] = request.className;
    }

    if (!Util.isUnset(request.functionName)) {
      query["functionName"] = request.functionName;
    }

    if (!Util.isUnset(request.udfArtifactName)) {
      query["udfArtifactName"] = request.udfArtifactName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RegisterUdfFunction",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/udfartifacts/function%3AregisterUdfFunction`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RegisterUdfFunctionResponse>(await this.callApi(params, req, runtime), new RegisterUdfFunctionResponse({}));
  }

  /**
   * Registers specific or all of the user-defined functions (UDFs) that are parsed from the JAR files. The registered functions can be used in SQL statements.
   * 
   * @param request - RegisterUdfFunctionRequest
   * @returns RegisterUdfFunctionResponse
   */
  async registerUdfFunction(namespace: string, request: RegisterUdfFunctionRequest): Promise<RegisterUdfFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new RegisterUdfFunctionHeaders({ });
    return await this.registerUdfFunctionWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Creates and starts a job.
   * 
   * @deprecated OpenAPI StartJob is deprecated
   * 
   * @param request - StartJobRequest
   * @param headers - StartJobHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartJobResponse
   */
  // Deprecated
  async startJobWithOptions(namespace: string, request: StartJobRequest, headers: StartJobHeaders, runtime: $Util.RuntimeOptions): Promise<StartJobResponse> {
    Util.validateModel(request);
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "StartJob",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/jobs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StartJobResponse>(await this.callApi(params, req, runtime), new StartJobResponse({}));
  }

  /**
   * Creates and starts a job.
   * 
   * @deprecated OpenAPI StartJob is deprecated
   * 
   * @param request - StartJobRequest
   * @returns StartJobResponse
   */
  // Deprecated
  async startJob(namespace: string, request: StartJobRequest): Promise<StartJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new StartJobHeaders({ });
    return await this.startJobWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Starts a job.
   * 
   * @param request - StartJobWithParamsRequest
   * @param headers - StartJobWithParamsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartJobWithParamsResponse
   */
  async startJobWithParamsWithOptions(namespace: string, request: StartJobWithParamsRequest, headers: StartJobWithParamsHeaders, runtime: $Util.RuntimeOptions): Promise<StartJobWithParamsResponse> {
    Util.validateModel(request);
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "StartJobWithParams",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/jobs%3Astart`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StartJobWithParamsResponse>(await this.callApi(params, req, runtime), new StartJobWithParamsResponse({}));
  }

  /**
   * Starts a job.
   * 
   * @param request - StartJobWithParamsRequest
   * @returns StartJobWithParamsResponse
   */
  async startJobWithParams(namespace: string, request: StartJobWithParamsRequest): Promise<StartJobWithParamsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new StartJobWithParamsHeaders({ });
    return await this.startJobWithParamsWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Stops a job.
   * 
   * @param request - StopJobRequest
   * @param headers - StopJobHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopJobResponse
   */
  async stopJobWithOptions(namespace: string, jobId: string, request: StopJobRequest, headers: StopJobHeaders, runtime: $Util.RuntimeOptions): Promise<StopJobResponse> {
    Util.validateModel(request);
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "StopJob",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/jobs/${OpenApiUtil.getEncodeParam(jobId)}%3Astop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopJobResponse>(await this.callApi(params, req, runtime), new StopJobResponse({}));
  }

  /**
   * Stops a job.
   * 
   * @param request - StopJobRequest
   * @returns StopJobResponse
   */
  async stopJob(namespace: string, jobId: string, request: StopJobRequest): Promise<StopJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new StopJobHeaders({ });
    return await this.stopJobWithOptions(namespace, jobId, request, headers, runtime);
  }

  /**
   * Updates information about a deployment.
   * 
   * @param request - UpdateDeploymentRequest
   * @param headers - UpdateDeploymentHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDeploymentResponse
   */
  async updateDeploymentWithOptions(namespace: string, deploymentId: string, request: UpdateDeploymentRequest, headers: UpdateDeploymentHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateDeploymentResponse> {
    Util.validateModel(request);
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDeployment",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/deployments/${OpenApiUtil.getEncodeParam(deploymentId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateDeploymentResponse>(await this.callApi(params, req, runtime), new UpdateDeploymentResponse({}));
  }

  /**
   * Updates information about a deployment.
   * 
   * @param request - UpdateDeploymentRequest
   * @returns UpdateDeploymentResponse
   */
  async updateDeployment(namespace: string, deploymentId: string, request: UpdateDeploymentRequest): Promise<UpdateDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateDeploymentHeaders({ });
    return await this.updateDeploymentWithOptions(namespace, deploymentId, request, headers, runtime);
  }

  /**
   * update a deploymentDraft
   * 
   * @param request - UpdateDeploymentDraftRequest
   * @param headers - UpdateDeploymentDraftHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDeploymentDraftResponse
   */
  async updateDeploymentDraftWithOptions(namespace: string, deploymentDraftId: string, request: UpdateDeploymentDraftRequest, headers: UpdateDeploymentDraftHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateDeploymentDraftResponse> {
    Util.validateModel(request);
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDeploymentDraft",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/deployment-drafts/${OpenApiUtil.getEncodeParam(deploymentDraftId)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateDeploymentDraftResponse>(await this.callApi(params, req, runtime), new UpdateDeploymentDraftResponse({}));
  }

  /**
   * update a deploymentDraft
   * 
   * @param request - UpdateDeploymentDraftRequest
   * @returns UpdateDeploymentDraftResponse
   */
  async updateDeploymentDraft(namespace: string, deploymentDraftId: string, request: UpdateDeploymentDraftRequest): Promise<UpdateDeploymentDraftResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateDeploymentDraftHeaders({ });
    return await this.updateDeploymentDraftWithOptions(namespace, deploymentDraftId, request, headers, runtime);
  }

  /**
   * update a folder
   * 
   * @param request - UpdateFolderRequest
   * @param headers - UpdateFolderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFolderResponse
   */
  async updateFolderWithOptions(namespace: string, folderId: string, request: UpdateFolderRequest, headers: UpdateFolderHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateFolderResponse> {
    Util.validateModel(request);
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFolder",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/folder/${OpenApiUtil.getEncodeParam(folderId)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateFolderResponse>(await this.callApi(params, req, runtime), new UpdateFolderResponse({}));
  }

  /**
   * update a folder
   * 
   * @param request - UpdateFolderRequest
   * @returns UpdateFolderResponse
   */
  async updateFolder(namespace: string, folderId: string, request: UpdateFolderRequest): Promise<UpdateFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateFolderHeaders({ });
    return await this.updateFolderWithOptions(namespace, folderId, request, headers, runtime);
  }

  /**
   * Updates the permissions of one or more members in a specific namespace.
   * 
   * @param request - UpdateMemberRequest
   * @param headers - UpdateMemberHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMemberResponse
   */
  async updateMemberWithOptions(namespace: string, request: UpdateMemberRequest, headers: UpdateMemberHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateMemberResponse> {
    Util.validateModel(request);
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateMember",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/gateway/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/members`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateMemberResponse>(await this.callApi(params, req, runtime), new UpdateMemberResponse({}));
  }

  /**
   * Updates the permissions of one or more members in a specific namespace.
   * 
   * @param request - UpdateMemberRequest
   * @returns UpdateMemberResponse
   */
  async updateMember(namespace: string, request: UpdateMemberRequest): Promise<UpdateMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateMemberHeaders({ });
    return await this.updateMemberWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Updates the JAR file of the user-defined function (UDF) that you create.
   * 
   * @param request - UpdateUdfArtifactRequest
   * @param headers - UpdateUdfArtifactHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUdfArtifactResponse
   */
  async updateUdfArtifactWithOptions(namespace: string, udfArtifactName: string, request: UpdateUdfArtifactRequest, headers: UpdateUdfArtifactHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateUdfArtifactResponse> {
    Util.validateModel(request);
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUdfArtifact",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/udfartifacts/${OpenApiUtil.getEncodeParam(udfArtifactName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateUdfArtifactResponse>(await this.callApi(params, req, runtime), new UpdateUdfArtifactResponse({}));
  }

  /**
   * Updates the JAR file of the user-defined function (UDF) that you create.
   * 
   * @param request - UpdateUdfArtifactRequest
   * @returns UpdateUdfArtifactResponse
   */
  async updateUdfArtifact(namespace: string, udfArtifactName: string, request: UpdateUdfArtifactRequest): Promise<UpdateUdfArtifactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateUdfArtifactHeaders({ });
    return await this.updateUdfArtifactWithOptions(namespace, udfArtifactName, request, headers, runtime);
  }

  /**
   * Verifies the code of an SQL deployment.
   * 
   * @param request - ValidateSqlStatementRequest
   * @param headers - ValidateSqlStatementHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateSqlStatementResponse
   */
  async validateSqlStatementWithOptions(namespace: string, request: ValidateSqlStatementRequest, headers: ValidateSqlStatementHeaders, runtime: $Util.RuntimeOptions): Promise<ValidateSqlStatementResponse> {
    Util.validateModel(request);
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.workspace)) {
      realHeaders["workspace"] = Util.toJSONString(headers.workspace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "ValidateSqlStatement",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/sql-statement/validate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ValidateSqlStatementResponse>(await this.callApi(params, req, runtime), new ValidateSqlStatementResponse({}));
  }

  /**
   * Verifies the code of an SQL deployment.
   * 
   * @param request - ValidateSqlStatementRequest
   * @returns ValidateSqlStatementResponse
   */
  async validateSqlStatement(namespace: string, request: ValidateSqlStatementRequest): Promise<ValidateSqlStatementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ValidateSqlStatementHeaders({ });
    return await this.validateSqlStatementWithOptions(namespace, request, headers, runtime);
  }

}
