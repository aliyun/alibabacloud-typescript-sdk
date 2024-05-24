// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class Artifact extends $tea.Model {
  jarArtifact?: JarArtifact;
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

export class AsyncResourcePlanOperationResult extends $tea.Model {
  message?: string;
  plan?: string;
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
  cpu?: number;
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

export class Deployment extends $tea.Model {
  artifact?: Artifact;
  batchResourceSetting?: BatchResourceSetting;
  createdAt?: string;
  creator?: string;
  creatorName?: string;
  deploymentHasChanged?: boolean;
  deploymentId?: string;
  deploymentTarget?: BriefDeploymentTarget;
  description?: string;
  engineVersion?: string;
  executionMode?: string;
  flinkConf?: { [key: string]: any };
  jobSummary?: JobSummary;
  localVariables?: LocalVariable[];
  logging?: Logging;
  modifiedAt?: string;
  modifier?: string;
  modifierName?: string;
  name?: string;
  namespace?: string;
  streamingResourceSetting?: StreamingResourceSetting;
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
      localVariables: 'localVariables',
      logging: 'logging',
      modifiedAt: 'modifiedAt',
      modifier: 'modifier',
      modifierName: 'modifierName',
      name: 'name',
      namespace: 'namespace',
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
      localVariables: { 'type': 'array', 'itemType': LocalVariable },
      logging: Logging,
      modifiedAt: 'string',
      modifier: 'string',
      modifierName: 'string',
      name: 'string',
      namespace: 'string',
      streamingResourceSetting: StreamingResourceSetting,
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeploymentRestoreStrategy extends $tea.Model {
  allowNonRestoredState?: boolean;
  jobStartTimeInMs?: number;
  kind?: string;
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
  name?: string;
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
  engineVersion?: string;
  features?: EngineVersionSupportedFeatures;
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
  supportNativeSavepoint?: boolean;
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

export class JarArtifact extends $tea.Model {
  additionalDependencies?: string[];
  entryClass?: string;
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
  creator?: string;
  creatorName?: string;
  deploymentId?: string;
  deploymentName?: string;
  endTime?: number;
  engineVersion?: string;
  executionMode?: string;
  flinkConf?: { [key: string]: any };
  jobId?: string;
  localVariables?: LocalVariable[];
  logging?: Logging;
  metric?: JobMetric;
  modifiedAt?: string;
  modifier?: string;
  modifierName?: string;
  namespace?: string;
  restoreStrategy?: DeploymentRestoreStrategy;
  sessionClusterName?: string;
  startTime?: number;
  status?: JobStatus;
  streamingResourceSetting?: StreamingResourceSetting;
  userFlinkConf?: { [key: string]: any };
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

export class JobMetric extends $tea.Model {
  totalCpu?: number;
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
  observedFlinkJobRestarts?: number;
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
  cancelled?: number;
  cancelling?: number;
  failed?: number;
  finished?: number;
  running?: number;
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

export class LocalVariable extends $tea.Model {
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

export class Log4jLogger extends $tea.Model {
  loggerLevel?: string;
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
  expirationDays?: number;
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
  log4j2ConfigurationTemplate?: string;
  log4jLoggers?: Log4jLogger[];
  logReservePolicy?: LogReservePolicy;
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
  member?: string;
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

export class PythonArtifact extends $tea.Model {
  additionalDependencies?: string[];
  additionalPythonArchives?: string[];
  additionalPythonLibraries?: string[];
  entryModule?: string;
  mainArgs?: string;
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

export class Savepoint extends $tea.Model {
  createdAt?: number;
  deploymentId?: string;
  description?: string;
  jobId?: string;
  modifiedAt?: number;
  namespace?: string;
  nativeFormat?: boolean;
  savepointId?: string;
  savepointLocation?: string;
  savepointOrigin?: string;
  status?: SavepointStatus;
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
  batchMode?: boolean;
  catalog?: string;
  database?: string;
  flinkConfiguration?: { [key: string]: any };
  statement?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      additionalDependencies: 'additionalDependencies',
      batchMode: 'batchMode',
      catalog: 'catalog',
      database: 'database',
      flinkConfiguration: 'flinkConfiguration',
      statement: 'statement',
      versionName: 'versionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalDependencies: { 'type': 'array', 'itemType': 'string' },
      batchMode: 'boolean',
      catalog: 'string',
      database: 'string',
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

export class Variable extends $tea.Model {
  description?: string;
  kind?: string;
  name?: string;
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

export class CreateDeploymentHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
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
  data?: Deployment;
  errorCode?: string;
  errorMessage?: string;
  httpCode?: number;
  requestId?: string;
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

export class CreateMemberHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
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
  data?: Member;
  errorCode?: string;
  errorMessage?: string;
  httpCode?: number;
  requestId?: string;
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
  deploymentId?: string;
  description?: string;
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
  data?: Savepoint;
  errorCode?: string;
  errorMessage?: string;
  httpCode?: number;
  requestId?: string;
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

export class CreateVariableHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
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
  data?: Variable;
  errorCode?: string;
  errorMessage?: string;
  httpCode?: number;
  requestId?: string;
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

export class DeleteDeploymentHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
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
  errorCode?: string;
  errorMessage?: string;
  httpCode?: number;
  requestId?: string;
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

export class DeleteJobHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
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
  errorCode?: string;
  errorMessage?: string;
  httpCode?: number;
  requestId?: string;
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
  errorCode?: string;
  errorMessage?: string;
  httpCode?: number;
  requestId?: string;
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
  errorCode?: string;
  errorMessage?: string;
  httpCode?: number;
  requestId?: string;
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

export class DeleteVariableHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
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
  errorCode?: string;
  errorMessage?: string;
  httpCode?: number;
  requestId?: string;
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

export class FlinkApiProxyHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
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
  flinkApiPath?: string;
  namespace?: string;
  resourceId?: string;
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
  data?: string;
  errorCode?: string;
  errorMessage?: string;
  httpCode?: number;
  requestId?: string;
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
  data?: GenerateResourcePlanWithFlinkConfAsyncResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpCode?: number;
  requestId?: string;
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

export class GetDeploymentHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
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
  data?: Deployment;
  errorCode?: string;
  errorMessage?: string;
  httpCode?: number;
  requestId?: string;
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

export class GetGenerateResourcePlanResultHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
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
  data?: AsyncResourcePlanOperationResult;
  errorCode?: string;
  errorMessage?: string;
  httpCode?: number;
  requestId?: string;
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

export class GetJobHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
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
  data?: Job;
  errorCode?: string;
  errorMessage?: string;
  httpCode?: number;
  requestId?: string;
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

export class GetMemberHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
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
  data?: Member;
  errorCode?: string;
  errorMessage?: string;
  httpCode?: number;
  requestId?: string;
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
  data?: Savepoint;
  errorCode?: string;
  errorMessage?: string;
  httpCode?: number;
  requestId?: string;
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

export class ListDeploymentTargetsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
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
  pageIndex?: number;
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
  data?: DeploymentTarget[];
  errorCode?: string;
  errorMessage?: string;
  httpCode?: number;
  pageIndex?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
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
  creator?: string;
  executionMode?: string;
  labelKey?: string;
  labelValueArray?: string;
  modifier?: string;
  name?: string;
  pageIndex?: number;
  pageSize?: number;
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
  data?: Deployment[];
  errorCode?: string;
  errorMessage?: string;
  httpCode?: number;
  pageIndex?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
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
  data?: EngineVersionMetadataIndex;
  errorCode?: string;
  errorMessage?: string;
  httpCode?: number;
  requestId?: string;
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
  deploymentId?: string;
  pageIndex?: number;
  pageSize?: number;
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
  data?: Job[];
  errorCode?: string;
  errorMessage?: string;
  httpCode?: number;
  pageIndex?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
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
  pageIndex?: number;
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
  data?: Member[];
  errorCode?: string;
  errorMessage?: string;
  httpCode?: number;
  pageIndex?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
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
  deploymentId?: string;
  jobId?: string;
  pageIndex?: number;
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
  data?: Savepoint[];
  errorCode?: string;
  errorMessage?: string;
  httpCode?: number;
  pageIndex?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
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
  pageIndex?: number;
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
  data?: Variable[];
  errorCode?: string;
  errorMessage?: string;
  httpCode?: number;
  pageIndex?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
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

export class StartJobHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
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
  data?: Job;
  errorCode?: string;
  errorMessage?: string;
  httpCode?: number;
  requestId?: string;
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
  data?: Job;
  errorCode?: string;
  errorMessage?: string;
  httpCode?: number;
  requestId?: string;
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
  data?: Job;
  errorCode?: string;
  errorMessage?: string;
  httpCode?: number;
  requestId?: string;
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
  data?: Deployment;
  errorCode?: string;
  errorMessage?: string;
  httpCode?: number;
  requestId?: string;
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

export class UpdateMemberHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
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
  data?: Member;
  errorCode?: string;
  errorMessage?: string;
  httpCode?: number;
  requestId?: string;
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

export class GenerateResourcePlanWithFlinkConfAsyncResponseBodyData extends $tea.Model {
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
   * @summary create a deployment
   *
   * @param request CreateDeploymentRequest
   * @param headers CreateDeploymentHeaders
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateDeploymentResponse
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
   * @summary create a deployment
   *
   * @param request CreateDeploymentRequest
   * @return CreateDeploymentResponse
   */
  async createDeployment(namespace: string, request: CreateDeploymentRequest): Promise<CreateDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateDeploymentHeaders({ });
    return await this.createDeploymentWithOptions(namespace, request, headers, runtime);
  }

  /**
   * @summary 调用CreateMember创建成员。
   *
   * @param request CreateMemberRequest
   * @param headers CreateMemberHeaders
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateMemberResponse
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
   * @summary 调用CreateMember创建成员。
   *
   * @param request CreateMemberRequest
   * @return CreateMemberResponse
   */
  async createMember(namespace: string, request: CreateMemberRequest): Promise<CreateMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateMemberHeaders({ });
    return await this.createMemberWithOptions(namespace, request, headers, runtime);
  }

  /**
   * @summary 调用CreateSavepoint触发一次savepoint。
   *
   * @param request CreateSavepointRequest
   * @param headers CreateSavepointHeaders
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateSavepointResponse
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
   * @summary 调用CreateSavepoint触发一次savepoint。
   *
   * @param request CreateSavepointRequest
   * @return CreateSavepointResponse
   */
  async createSavepoint(namespace: string, request: CreateSavepointRequest): Promise<CreateSavepointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateSavepointHeaders({ });
    return await this.createSavepointWithOptions(namespace, request, headers, runtime);
  }

  /**
   * @summary 调用CreateVariable创建变量。
   *
   * @param request CreateVariableRequest
   * @param headers CreateVariableHeaders
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateVariableResponse
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
   * @summary 调用CreateVariable创建变量。
   *
   * @param request CreateVariableRequest
   * @return CreateVariableResponse
   */
  async createVariable(namespace: string, request: CreateVariableRequest): Promise<CreateVariableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateVariableHeaders({ });
    return await this.createVariableWithOptions(namespace, request, headers, runtime);
  }

  /**
   * @summary delete deployment
   *
   * @param headers DeleteDeploymentHeaders
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteDeploymentResponse
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
   * @summary delete deployment
   *
   * @return DeleteDeploymentResponse
   */
  async deleteDeployment(namespace: string, deploymentId: string): Promise<DeleteDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteDeploymentHeaders({ });
    return await this.deleteDeploymentWithOptions(namespace, deploymentId, headers, runtime);
  }

  /**
   * @summary delete job
   *
   * @param headers DeleteJobHeaders
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteJobResponse
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
   * @summary delete job
   *
   * @return DeleteJobResponse
   */
  async deleteJob(namespace: string, jobId: string): Promise<DeleteJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteJobHeaders({ });
    return await this.deleteJobWithOptions(namespace, jobId, headers, runtime);
  }

  /**
   * @summary 调用DeleteMember删除成员。
   *
   * @param headers DeleteMemberHeaders
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteMemberResponse
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
   * @summary 调用DeleteMember删除成员。
   *
   * @return DeleteMemberResponse
   */
  async deleteMember(namespace: string, member: string): Promise<DeleteMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteMemberHeaders({ });
    return await this.deleteMemberWithOptions(namespace, member, headers, runtime);
  }

  /**
   * @summary 调用DeleteSavepoint删除savepoint。
   *
   * @param headers DeleteSavepointHeaders
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteSavepointResponse
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
   * @summary 调用DeleteSavepoint删除savepoint。
   *
   * @return DeleteSavepointResponse
   */
  async deleteSavepoint(namespace: string, savepointId: string): Promise<DeleteSavepointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteSavepointHeaders({ });
    return await this.deleteSavepointWithOptions(namespace, savepointId, headers, runtime);
  }

  /**
   * @summary deleta variable
   *
   * @param headers DeleteVariableHeaders
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteVariableResponse
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
   * @summary deleta variable
   *
   * @return DeleteVariableResponse
   */
  async deleteVariable(namespace: string, name: string): Promise<DeleteVariableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteVariableHeaders({ });
    return await this.deleteVariableWithOptions(namespace, name, headers, runtime);
  }

  /**
   * @summary 调用FlinkApiProxy代理Flink请求。
   *
   * @param request FlinkApiProxyRequest
   * @param headers FlinkApiProxyHeaders
   * @param runtime runtime options for this request RuntimeOptions
   * @return FlinkApiProxyResponse
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
   * @summary 调用FlinkApiProxy代理Flink请求。
   *
   * @param request FlinkApiProxyRequest
   * @return FlinkApiProxyResponse
   */
  async flinkApiProxy(request: FlinkApiProxyRequest): Promise<FlinkApiProxyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new FlinkApiProxyHeaders({ });
    return await this.flinkApiProxyWithOptions(request, headers, runtime);
  }

  /**
   * @summary generate resource plan with flink conf async.
   *
   * @param request GenerateResourcePlanWithFlinkConfAsyncRequest
   * @param headers GenerateResourcePlanWithFlinkConfAsyncHeaders
   * @param runtime runtime options for this request RuntimeOptions
   * @return GenerateResourcePlanWithFlinkConfAsyncResponse
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
   * @summary generate resource plan with flink conf async.
   *
   * @param request GenerateResourcePlanWithFlinkConfAsyncRequest
   * @return GenerateResourcePlanWithFlinkConfAsyncResponse
   */
  async generateResourcePlanWithFlinkConfAsync(namespace: string, deploymentId: string, request: GenerateResourcePlanWithFlinkConfAsyncRequest): Promise<GenerateResourcePlanWithFlinkConfAsyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GenerateResourcePlanWithFlinkConfAsyncHeaders({ });
    return await this.generateResourcePlanWithFlinkConfAsyncWithOptions(namespace, deploymentId, request, headers, runtime);
  }

  /**
   * @summary get a deployment
   *
   * @param headers GetDeploymentHeaders
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetDeploymentResponse
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
   * @summary get a deployment
   *
   * @return GetDeploymentResponse
   */
  async getDeployment(namespace: string, deploymentId: string): Promise<GetDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetDeploymentHeaders({ });
    return await this.getDeploymentWithOptions(namespace, deploymentId, headers, runtime);
  }

  /**
   * @summary 获取生成ResourcePlan异步操作的结果。
   *
   * @param headers GetGenerateResourcePlanResultHeaders
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetGenerateResourcePlanResultResponse
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
   * @summary 获取生成ResourcePlan异步操作的结果。
   *
   * @return GetGenerateResourcePlanResultResponse
   */
  async getGenerateResourcePlanResult(namespace: string, ticketId: string): Promise<GetGenerateResourcePlanResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetGenerateResourcePlanResultHeaders({ });
    return await this.getGenerateResourcePlanResultWithOptions(namespace, ticketId, headers, runtime);
  }

  /**
   * @summary get job
   *
   * @param headers GetJobHeaders
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetJobResponse
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
   * @summary get job
   *
   * @return GetJobResponse
   */
  async getJob(namespace: string, jobId: string): Promise<GetJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetJobHeaders({ });
    return await this.getJobWithOptions(namespace, jobId, headers, runtime);
  }

  /**
   * @summary 调用GetMember获取成员。
   *
   * @param headers GetMemberHeaders
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetMemberResponse
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
   * @summary 调用GetMember获取成员。
   *
   * @return GetMemberResponse
   */
  async getMember(namespace: string, member: string): Promise<GetMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetMemberHeaders({ });
    return await this.getMemberWithOptions(namespace, member, headers, runtime);
  }

  /**
   * @summary 调用GetSavepoint获取savepoint信息。
   *
   * @param headers GetSavepointHeaders
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetSavepointResponse
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
   * @summary 调用GetSavepoint获取savepoint信息。
   *
   * @return GetSavepointResponse
   */
  async getSavepoint(namespace: string, savepointId: string): Promise<GetSavepointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetSavepointHeaders({ });
    return await this.getSavepointWithOptions(namespace, savepointId, headers, runtime);
  }

  /**
   * @summary list deployment targets
   *
   * @param request ListDeploymentTargetsRequest
   * @param headers ListDeploymentTargetsHeaders
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListDeploymentTargetsResponse
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
   * @summary list deployment targets
   *
   * @param request ListDeploymentTargetsRequest
   * @return ListDeploymentTargetsResponse
   */
  async listDeploymentTargets(namespace: string, request: ListDeploymentTargetsRequest): Promise<ListDeploymentTargetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListDeploymentTargetsHeaders({ });
    return await this.listDeploymentTargetsWithOptions(namespace, request, headers, runtime);
  }

  /**
   * @summary list deployments
   *
   * @param request ListDeploymentsRequest
   * @param headers ListDeploymentsHeaders
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListDeploymentsResponse
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
   * @summary list deployments
   *
   * @param request ListDeploymentsRequest
   * @return ListDeploymentsResponse
   */
  async listDeployments(namespace: string, request: ListDeploymentsRequest): Promise<ListDeploymentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListDeploymentsHeaders({ });
    return await this.listDeploymentsWithOptions(namespace, request, headers, runtime);
  }

  /**
   * @summary 列出有编辑权限的项目空间。
   *
   * @param request ListEditableNamespaceRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListEditableNamespaceResponse
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
   * @summary 列出有编辑权限的项目空间。
   *
   * @param request ListEditableNamespaceRequest
   * @return ListEditableNamespaceResponse
   */
  async listEditableNamespace(request: ListEditableNamespaceRequest): Promise<ListEditableNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEditableNamespaceWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取系统支持的引擎版本信息。
   *
   * @param headers ListEngineVersionMetadataHeaders
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListEngineVersionMetadataResponse
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
   * @summary 获取系统支持的引擎版本信息。
   *
   * @return ListEngineVersionMetadataResponse
   */
  async listEngineVersionMetadata(): Promise<ListEngineVersionMetadataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListEngineVersionMetadataHeaders({ });
    return await this.listEngineVersionMetadataWithOptions(headers, runtime);
  }

  /**
   * @summary list jobs
   *
   * @param request ListJobsRequest
   * @param headers ListJobsHeaders
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListJobsResponse
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
   * @summary list jobs
   *
   * @param request ListJobsRequest
   * @return ListJobsResponse
   */
  async listJobs(namespace: string, request: ListJobsRequest): Promise<ListJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListJobsHeaders({ });
    return await this.listJobsWithOptions(namespace, request, headers, runtime);
  }

  /**
   * @summary 调用ListMembers接口获取成员列表。
   *
   * @param request ListMembersRequest
   * @param headers ListMembersHeaders
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListMembersResponse
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
   * @summary 调用ListMembers接口获取成员列表。
   *
   * @param request ListMembersRequest
   * @return ListMembersResponse
   */
  async listMembers(namespace: string, request: ListMembersRequest): Promise<ListMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListMembersHeaders({ });
    return await this.listMembersWithOptions(namespace, request, headers, runtime);
  }

  /**
   * @summary 调用ListSavepoints获取满足查询条件的savepoint列表。
   *
   * @param request ListSavepointsRequest
   * @param headers ListSavepointsHeaders
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListSavepointsResponse
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
   * @summary 调用ListSavepoints获取满足查询条件的savepoint列表。
   *
   * @param request ListSavepointsRequest
   * @return ListSavepointsResponse
   */
  async listSavepoints(namespace: string, request: ListSavepointsRequest): Promise<ListSavepointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListSavepointsHeaders({ });
    return await this.listSavepointsWithOptions(namespace, request, headers, runtime);
  }

  /**
   * @summary list variables
   *
   * @param request ListVariablesRequest
   * @param headers ListVariablesHeaders
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListVariablesResponse
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
   * @summary list variables
   *
   * @param request ListVariablesRequest
   * @return ListVariablesResponse
   */
  async listVariables(namespace: string, request: ListVariablesRequest): Promise<ListVariablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListVariablesHeaders({ });
    return await this.listVariablesWithOptions(namespace, request, headers, runtime);
  }

  /**
   * @deprecated OpenAPI StartJob is deprecated
   *
   * @summary start job
   *
   * @param request StartJobRequest
   * @param headers StartJobHeaders
   * @param runtime runtime options for this request RuntimeOptions
   * @return StartJobResponse
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
   * @deprecated OpenAPI StartJob is deprecated
   *
   * @summary start job
   *
   * @param request StartJobRequest
   * @return StartJobResponse
   */
  // Deprecated
  async startJob(namespace: string, request: StartJobRequest): Promise<StartJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new StartJobHeaders({ });
    return await this.startJobWithOptions(namespace, request, headers, runtime);
  }

  /**
   * @summary 启动作业实例。
   *
   * @param request StartJobWithParamsRequest
   * @param headers StartJobWithParamsHeaders
   * @param runtime runtime options for this request RuntimeOptions
   * @return StartJobWithParamsResponse
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
   * @summary 启动作业实例。
   *
   * @param request StartJobWithParamsRequest
   * @return StartJobWithParamsResponse
   */
  async startJobWithParams(namespace: string, request: StartJobWithParamsRequest): Promise<StartJobWithParamsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new StartJobWithParamsHeaders({ });
    return await this.startJobWithParamsWithOptions(namespace, request, headers, runtime);
  }

  /**
   * @summary 调用StopJob停止实例。
   *
   * @param request StopJobRequest
   * @param headers StopJobHeaders
   * @param runtime runtime options for this request RuntimeOptions
   * @return StopJobResponse
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
   * @summary 调用StopJob停止实例。
   *
   * @param request StopJobRequest
   * @return StopJobResponse
   */
  async stopJob(namespace: string, jobId: string, request: StopJobRequest): Promise<StopJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new StopJobHeaders({ });
    return await this.stopJobWithOptions(namespace, jobId, request, headers, runtime);
  }

  /**
   * @summary update a deployment using patch
   *
   * @param request UpdateDeploymentRequest
   * @param headers UpdateDeploymentHeaders
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateDeploymentResponse
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
   * @summary update a deployment using patch
   *
   * @param request UpdateDeploymentRequest
   * @return UpdateDeploymentResponse
   */
  async updateDeployment(namespace: string, deploymentId: string, request: UpdateDeploymentRequest): Promise<UpdateDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateDeploymentHeaders({ });
    return await this.updateDeploymentWithOptions(namespace, deploymentId, request, headers, runtime);
  }

  /**
   * @summary 调用UpdateMember更新成员。
   *
   * @param request UpdateMemberRequest
   * @param headers UpdateMemberHeaders
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateMemberResponse
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
   * @summary 调用UpdateMember更新成员。
   *
   * @param request UpdateMemberRequest
   * @return UpdateMemberResponse
   */
  async updateMember(namespace: string, request: UpdateMemberRequest): Promise<UpdateMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateMemberHeaders({ });
    return await this.updateMemberWithOptions(namespace, request, headers, runtime);
  }

}
