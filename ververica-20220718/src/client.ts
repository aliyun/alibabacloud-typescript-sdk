// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class DeployDeploymentDraftAsyncResponseBodyData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateResourcePlanWithFlinkConfAsyncResponseBodyData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEditableNamespaceResponseBodyData extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.editableNamespaces)) {
      $dara.Model.validateArray(this.editableNamespaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Artifact extends $dara.Model {
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

  validate() {
    if(this.jarArtifact && typeof (this.jarArtifact as any).validate === 'function') {
      (this.jarArtifact as any).validate();
    }
    if(this.pythonArtifact && typeof (this.pythonArtifact as any).validate === 'function') {
      (this.pythonArtifact as any).validate();
    }
    if(this.sqlArtifact && typeof (this.sqlArtifact as any).validate === 'function') {
      (this.sqlArtifact as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsyncDraftDeployResult extends $dara.Model {
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

  validate() {
    if(this.artifactValidationDetail && typeof (this.artifactValidationDetail as any).validate === 'function') {
      (this.artifactValidationDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsyncResourcePlanOperationResult extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BasicResourceSetting extends $dara.Model {
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

  validate() {
    if(this.jobmanagerResourceSettingSpec && typeof (this.jobmanagerResourceSettingSpec as any).validate === 'function') {
      (this.jobmanagerResourceSettingSpec as any).validate();
    }
    if(this.taskmanagerResourceSettingSpec && typeof (this.taskmanagerResourceSettingSpec as any).validate === 'function') {
      (this.taskmanagerResourceSettingSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BasicResourceSettingSpec extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchResourceSetting extends $dara.Model {
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

  validate() {
    if(this.basicResourceSetting && typeof (this.basicResourceSetting as any).validate === 'function') {
      (this.basicResourceSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BriefDeploymentTarget extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BriefResourceSetting extends $dara.Model {
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

  validate() {
    if(this.batchResourceSetting && typeof (this.batchResourceSetting as any).validate === 'function') {
      (this.batchResourceSetting as any).validate();
    }
    if(this.flinkConf) {
      $dara.Model.validateMap(this.flinkConf);
    }
    if(this.streamingResourceSetting && typeof (this.streamingResourceSetting as any).validate === 'function') {
      (this.streamingResourceSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Catalog extends $dara.Model {
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

  validate() {
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Connector extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.dependencies)) {
      $dara.Model.validateArray(this.dependencies);
    }
    if(Array.isArray(this.properties)) {
      $dara.Model.validateArray(this.properties);
    }
    if(Array.isArray(this.supportedFormats)) {
      $dara.Model.validateArray(this.supportedFormats);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUdfArtifactResult extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.collidingClasses)) {
      $dara.Model.validateArray(this.collidingClasses);
    }
    if(this.udfArtifact && typeof (this.udfArtifact as any).validate === 'function') {
      (this.udfArtifact as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Database extends $dara.Model {
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

  validate() {
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUdfArtifactResult extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.referencedClasses)) {
      $dara.Model.validateArray(this.referencedClasses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Deployment extends $dara.Model {
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

  validate() {
    if(this.artifact && typeof (this.artifact as any).validate === 'function') {
      (this.artifact as any).validate();
    }
    if(this.batchResourceSetting && typeof (this.batchResourceSetting as any).validate === 'function') {
      (this.batchResourceSetting as any).validate();
    }
    if(this.deploymentTarget && typeof (this.deploymentTarget as any).validate === 'function') {
      (this.deploymentTarget as any).validate();
    }
    if(this.flinkConf) {
      $dara.Model.validateMap(this.flinkConf);
    }
    if(this.jobSummary && typeof (this.jobSummary as any).validate === 'function') {
      (this.jobSummary as any).validate();
    }
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(Array.isArray(this.localVariables)) {
      $dara.Model.validateArray(this.localVariables);
    }
    if(this.logging && typeof (this.logging as any).validate === 'function') {
      (this.logging as any).validate();
    }
    if(this.streamingResourceSetting && typeof (this.streamingResourceSetting as any).validate === 'function') {
      (this.streamingResourceSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeploymentDraft extends $dara.Model {
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

  validate() {
    if(this.artifact && typeof (this.artifact as any).validate === 'function') {
      (this.artifact as any).validate();
    }
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(Array.isArray(this.localVariables)) {
      $dara.Model.validateArray(this.localVariables);
    }
    if(this.lock && typeof (this.lock as any).validate === 'function') {
      (this.lock as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeploymentRestoreStrategy extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeploymentTarget extends $dara.Model {
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
  quota?: ResourceQuota;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      namespace: 'namespace',
      quota: 'quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      namespace: 'string',
      quota: ResourceQuota,
    };
  }

  validate() {
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DraftDeployParams extends $dara.Model {
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

  validate() {
    if(this.deploymentTarget && typeof (this.deploymentTarget as any).validate === 'function') {
      (this.deploymentTarget as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DraftDeployResult extends $dara.Model {
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

  validate() {
    if(this.artifactValidationDetail && typeof (this.artifactValidationDetail as any).validate === 'function') {
      (this.artifactValidationDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Edge extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.columnLineage)) {
      $dara.Model.validateArray(this.columnLineage);
    }
    if(Array.isArray(this.tableLineage)) {
      $dara.Model.validateArray(this.tableLineage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditableNamespace extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EngineVersionMetadata extends $dara.Model {
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

  validate() {
    if(this.features && typeof (this.features as any).validate === 'function') {
      (this.features as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EngineVersionMetadataIndex extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.engineVersionMetadata)) {
      $dara.Model.validateArray(this.engineVersionMetadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EngineVersionSupportedFeatures extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ErrorDetails extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.invalidflinkConf)) {
      $dara.Model.validateArray(this.invalidflinkConf);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Event extends $dara.Model {
  createdAt?: string;
  /**
   * @example
   * 00000000-0000-0000-0000-000000680003
   */
  deploymentId?: string;
  /**
   * @example
   * 00000000-0000-0000-0000-000000000001
   */
  eventId?: string;
  /**
   * @example
   * STATE_TRANSITION_IS_COMPLETED
   */
  eventName?: string;
  /**
   * @example
   * 00000000-0000-0000-0000-000000005043
   */
  jobId?: string;
  message?: string;
  /**
   * @example
   * default-namespace
   */
  namespace?: string;
  /**
   * @example
   * edcef******b4f
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      deploymentId: 'deploymentId',
      eventId: 'eventId',
      eventName: 'eventName',
      jobId: 'jobId',
      message: 'message',
      namespace: 'namespace',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      deploymentId: 'string',
      eventId: 'string',
      eventName: 'string',
      jobId: 'string',
      message: 'string',
      namespace: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExpertResourceSetting extends $dara.Model {
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

  validate() {
    if(this.jobmanagerResourceSettingSpec && typeof (this.jobmanagerResourceSettingSpec as any).validate === 'function') {
      (this.jobmanagerResourceSettingSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Folder extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.subFolder)) {
      $dara.Model.validateArray(this.subFolder);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLineageInfoParams extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotUpdateJobFailureInfo extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotUpdateJobParams extends $dara.Model {
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

  validate() {
    if(this.rescaleJobParam && typeof (this.rescaleJobParam as any).validate === 'function') {
      (this.rescaleJobParam as any).validate();
    }
    if(this.updateJobConfigParam && typeof (this.updateJobConfigParam as any).validate === 'function') {
      (this.updateJobConfigParam as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotUpdateJobResult extends $dara.Model {
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

  validate() {
    if(this.hotUpdateParams && typeof (this.hotUpdateParams as any).validate === 'function') {
      (this.hotUpdateParams as any).validate();
    }
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    if(this.targetResourceSetting && typeof (this.targetResourceSetting as any).validate === 'function') {
      (this.targetResourceSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotUpdateJobStatus extends $dara.Model {
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

  validate() {
    if(this.failure && typeof (this.failure as any).validate === 'function') {
      (this.failure as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JarArtifact extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.additionalDependencies)) {
      $dara.Model.validateArray(this.additionalDependencies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Job extends $dara.Model {
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

  validate() {
    if(this.artifact && typeof (this.artifact as any).validate === 'function') {
      (this.artifact as any).validate();
    }
    if(this.batchResourceSetting && typeof (this.batchResourceSetting as any).validate === 'function') {
      (this.batchResourceSetting as any).validate();
    }
    if(this.flinkConf) {
      $dara.Model.validateMap(this.flinkConf);
    }
    if(Array.isArray(this.localVariables)) {
      $dara.Model.validateArray(this.localVariables);
    }
    if(this.logging && typeof (this.logging as any).validate === 'function') {
      (this.logging as any).validate();
    }
    if(this.metric && typeof (this.metric as any).validate === 'function') {
      (this.metric as any).validate();
    }
    if(this.restoreStrategy && typeof (this.restoreStrategy as any).validate === 'function') {
      (this.restoreStrategy as any).validate();
    }
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    if(this.streamingResourceSetting && typeof (this.streamingResourceSetting as any).validate === 'function') {
      (this.streamingResourceSetting as any).validate();
    }
    if(this.userFlinkConf) {
      $dara.Model.validateMap(this.userFlinkConf);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobDiagnosis extends $dara.Model {
  diagnoseId?: string;
  diagnoseTime?: number;
  namespace?: string;
  riskLevel?: string;
  symptoms?: JobDiagnosisSymptoms;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      diagnoseId: 'diagnoseId',
      diagnoseTime: 'diagnoseTime',
      namespace: 'namespace',
      riskLevel: 'riskLevel',
      symptoms: 'symptoms',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnoseId: 'string',
      diagnoseTime: 'number',
      namespace: 'string',
      riskLevel: 'string',
      symptoms: JobDiagnosisSymptoms,
      workspace: 'string',
    };
  }

  validate() {
    if(this.symptoms && typeof (this.symptoms as any).validate === 'function') {
      (this.symptoms as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobDiagnosisSymptom extends $dara.Model {
  description?: string;
  name?: string;
  recommendation?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      recommendation: 'recommendation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      recommendation: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobDiagnosisSymptoms extends $dara.Model {
  autopilot?: JobDiagnosisSymptom;
  others?: JobDiagnosisSymptom[];
  runtime?: JobDiagnosisSymptom[];
  startup?: JobDiagnosisSymptom[];
  state?: JobDiagnosisSymptom[];
  troubleshooting?: JobDiagnosisSymptom[];
  static names(): { [key: string]: string } {
    return {
      autopilot: 'autopilot',
      others: 'others',
      runtime: 'runtime',
      startup: 'startup',
      state: 'state',
      troubleshooting: 'troubleshooting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autopilot: JobDiagnosisSymptom,
      others: { 'type': 'array', 'itemType': JobDiagnosisSymptom },
      runtime: { 'type': 'array', 'itemType': JobDiagnosisSymptom },
      startup: { 'type': 'array', 'itemType': JobDiagnosisSymptom },
      state: { 'type': 'array', 'itemType': JobDiagnosisSymptom },
      troubleshooting: { 'type': 'array', 'itemType': JobDiagnosisSymptom },
    };
  }

  validate() {
    if(this.autopilot && typeof (this.autopilot as any).validate === 'function') {
      (this.autopilot as any).validate();
    }
    if(Array.isArray(this.others)) {
      $dara.Model.validateArray(this.others);
    }
    if(Array.isArray(this.runtime)) {
      $dara.Model.validateArray(this.runtime);
    }
    if(Array.isArray(this.startup)) {
      $dara.Model.validateArray(this.startup);
    }
    if(Array.isArray(this.state)) {
      $dara.Model.validateArray(this.state);
    }
    if(Array.isArray(this.troubleshooting)) {
      $dara.Model.validateArray(this.troubleshooting);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobFailure extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobInfo extends $dara.Model {
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

  validate() {
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobMetric extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobStartParameters extends $dara.Model {
  deploymentId?: string;
  jobId?: string;
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
      jobId: 'jobId',
      localVariables: 'localVariables',
      resourceQueueName: 'resourceQueueName',
      restoreStrategy: 'restoreStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentId: 'string',
      jobId: 'string',
      localVariables: { 'type': 'array', 'itemType': LocalVariable },
      resourceQueueName: 'string',
      restoreStrategy: DeploymentRestoreStrategy,
    };
  }

  validate() {
    if(Array.isArray(this.localVariables)) {
      $dara.Model.validateArray(this.localVariables);
    }
    if(this.restoreStrategy && typeof (this.restoreStrategy as any).validate === 'function') {
      (this.restoreStrategy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobStatus extends $dara.Model {
  /**
   * @example
   * RUNNING
   */
  currentJobStatus?: string;
  failure?: JobFailure;
  healthScore?: number;
  riskLevel?: string;
  running?: JobStatusRunning;
  static names(): { [key: string]: string } {
    return {
      currentJobStatus: 'currentJobStatus',
      failure: 'failure',
      healthScore: 'healthScore',
      riskLevel: 'riskLevel',
      running: 'running',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentJobStatus: 'string',
      failure: JobFailure,
      healthScore: 'number',
      riskLevel: 'string',
      running: JobStatusRunning,
    };
  }

  validate() {
    if(this.failure && typeof (this.failure as any).validate === 'function') {
      (this.failure as any).validate();
    }
    if(this.running && typeof (this.running as any).validate === 'function') {
      (this.running as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobStatusRunning extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobSummary extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LineageColumn extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LineageInfo extends $dara.Model {
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

  validate() {
    if(this.edges && typeof (this.edges as any).validate === 'function') {
      (this.edges as any).validate();
    }
    if(Array.isArray(this.jobInfos)) {
      $dara.Model.validateArray(this.jobInfos);
    }
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LineageTable extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    if(this.with) {
      $dara.Model.validateMap(this.with);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LocalVariable extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Lock extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Log4jLogger extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogReservePolicy extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Logging extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.log4jLoggers)) {
      $dara.Model.validateArray(this.log4jLoggers);
    }
    if(this.logReservePolicy && typeof (this.logReservePolicy as any).validate === 'function') {
      (this.logReservePolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Member extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MetadataInfo extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Node extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PeriodicSchedulingPolicy extends $dara.Model {
  isFinished?: boolean;
  /**
   * @example
   * 1723195800000
   */
  onlyOnceTriggerTime?: number;
  /**
   * @example
   * true
   */
  onlyOnceTriggerTimeIsExpired?: boolean;
  /**
   * @example
   * DAY
   */
  periodicSchedulingLevel?: string;
  periodicSchedulingValues?: number[];
  /**
   * @example
   * 1723199340000
   */
  periodicTriggerTime?: number;
  resourceSetting?: BriefResourceSetting;
  static names(): { [key: string]: string } {
    return {
      isFinished: 'isFinished',
      onlyOnceTriggerTime: 'onlyOnceTriggerTime',
      onlyOnceTriggerTimeIsExpired: 'onlyOnceTriggerTimeIsExpired',
      periodicSchedulingLevel: 'periodicSchedulingLevel',
      periodicSchedulingValues: 'periodicSchedulingValues',
      periodicTriggerTime: 'periodicTriggerTime',
      resourceSetting: 'resourceSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isFinished: 'boolean',
      onlyOnceTriggerTime: 'number',
      onlyOnceTriggerTimeIsExpired: 'boolean',
      periodicSchedulingLevel: 'string',
      periodicSchedulingValues: { 'type': 'array', 'itemType': 'number' },
      periodicTriggerTime: 'number',
      resourceSetting: BriefResourceSetting,
    };
  }

  validate() {
    if(Array.isArray(this.periodicSchedulingValues)) {
      $dara.Model.validateArray(this.periodicSchedulingValues);
    }
    if(this.resourceSetting && typeof (this.resourceSetting as any).validate === 'function') {
      (this.resourceSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrimaryKey extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Property extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PythonArtifact extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.additionalDependencies)) {
      $dara.Model.validateArray(this.additionalDependencies);
    }
    if(Array.isArray(this.additionalPythonArchives)) {
      $dara.Model.validateArray(this.additionalPythonArchives);
    }
    if(Array.isArray(this.additionalPythonLibraries)) {
      $dara.Model.validateArray(this.additionalPythonLibraries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Relation extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RescaleJobParam extends $dara.Model {
  jobParallelism?: number;
  static names(): { [key: string]: string } {
    return {
      jobParallelism: 'jobParallelism',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobParallelism: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceQuota extends $dara.Model {
  limit?: ResourceSpec;
  used?: ResourceSpec;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      used: 'used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: ResourceSpec,
      used: ResourceSpec,
    };
  }

  validate() {
    if(this.limit && typeof (this.limit as any).validate === 'function') {
      (this.limit as any).validate();
    }
    if(this.used && typeof (this.used as any).validate === 'function') {
      (this.used as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceSpec extends $dara.Model {
  /**
   * @example
   * 1.0
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Savepoint extends $dara.Model {
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

  validate() {
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SavepointFailure extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SavepointStatus extends $dara.Model {
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

  validate() {
    if(this.failure && typeof (this.failure as any).validate === 'function') {
      (this.failure as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScheduledPlan extends $dara.Model {
  /**
   * @example
   * 1723197248
   */
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
   * 00000000-0000-0000-0000-000000000001
   */
  deploymentId?: string;
  /**
   * @example
   * 1723197248
   */
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
   * test-scheduled-plan
   */
  name?: string;
  /**
   * @example
   * default-namespace
   */
  namespace?: string;
  /**
   * @example
   * USER_DEFINED
   */
  origin?: string;
  periodicSchedulingPolicies?: PeriodicSchedulingPolicy[];
  /**
   * @example
   * f3b4ec1e-85dc-4b1d-9726-1d7f4c37****
   */
  scheduledPlanId?: string;
  /**
   * @example
   * FINISHED
   */
  status?: string;
  /**
   * @example
   * true
   */
  updatedByUser?: boolean;
  /**
   * @example
   * edcef******b4f
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      creator: 'creator',
      creatorName: 'creatorName',
      deploymentId: 'deploymentId',
      modifiedAt: 'modifiedAt',
      modifier: 'modifier',
      modifierName: 'modifierName',
      name: 'name',
      namespace: 'namespace',
      origin: 'origin',
      periodicSchedulingPolicies: 'periodicSchedulingPolicies',
      scheduledPlanId: 'scheduledPlanId',
      status: 'status',
      updatedByUser: 'updatedByUser',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      creator: 'string',
      creatorName: 'string',
      deploymentId: 'string',
      modifiedAt: 'string',
      modifier: 'string',
      modifierName: 'string',
      name: 'string',
      namespace: 'string',
      origin: 'string',
      periodicSchedulingPolicies: { 'type': 'array', 'itemType': PeriodicSchedulingPolicy },
      scheduledPlanId: 'string',
      status: 'string',
      updatedByUser: 'boolean',
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.periodicSchedulingPolicies)) {
      $dara.Model.validateArray(this.periodicSchedulingPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScheduledPlanAppliedInfo extends $dara.Model {
  /**
   * @example
   * 00000000-0000-0000-0000-000000000001
   */
  deploymentId?: string;
  /**
   * @example
   * RUNNING
   */
  expectedState?: string;
  /**
   * @example
   * 1723197248
   */
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
   * default-namespace
   */
  namespace?: string;
  /**
   * @example
   * f3b4ec1e-85dc-4b1d-9726-1d7f4c37****
   */
  scheduledPlanId?: string;
  /**
   * @example
   * test-scheduled-plan
   */
  scheduledPlanName?: string;
  /**
   * @example
   * WAITING
   */
  statusState?: string;
  /**
   * @example
   * edcef******b4f
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentId: 'deploymentId',
      expectedState: 'expectedState',
      modifiedAt: 'modifiedAt',
      modifier: 'modifier',
      modifierName: 'modifierName',
      namespace: 'namespace',
      scheduledPlanId: 'scheduledPlanId',
      scheduledPlanName: 'scheduledPlanName',
      statusState: 'statusState',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentId: 'string',
      expectedState: 'string',
      modifiedAt: 'string',
      modifier: 'string',
      modifierName: 'string',
      namespace: 'string',
      scheduledPlanId: 'string',
      scheduledPlanName: 'string',
      statusState: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScheduledPlanExecutedInfo extends $dara.Model {
  /**
   * @example
   * 1723197248
   */
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
   * 00000000-0000-0000-0000-000000000001
   */
  deploymentId?: string;
  /**
   * @example
   * 0e6d3bab-2277-4ed1-b573-9de6413d****
   */
  jobResourceUpgradingId?: string;
  /**
   * @example
   * 1723197248
   */
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
   * test-scheduled-plan
   */
  name?: string;
  /**
   * @example
   * default-namespace
   */
  namespace?: string;
  /**
   * @example
   * SCHEDULED_PLAN
   */
  origin?: string;
  /**
   * @example
   * f8a2d5d9-9fc5-4273-bfcc-2a3cd354****
   */
  originJobId?: string;
  status?: ScheduledPlanExecutedStatus;
  /**
   * @example
   * edcef******b4f
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      creator: 'creator',
      creatorName: 'creatorName',
      deploymentId: 'deploymentId',
      jobResourceUpgradingId: 'jobResourceUpgradingId',
      modifiedAt: 'modifiedAt',
      modifier: 'modifier',
      modifierName: 'modifierName',
      name: 'name',
      namespace: 'namespace',
      origin: 'origin',
      originJobId: 'originJobId',
      status: 'status',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      creator: 'string',
      creatorName: 'string',
      deploymentId: 'string',
      jobResourceUpgradingId: 'string',
      modifiedAt: 'string',
      modifier: 'string',
      modifierName: 'string',
      name: 'string',
      namespace: 'string',
      origin: 'string',
      originJobId: 'string',
      status: ScheduledPlanExecutedStatus,
      workspace: 'string',
    };
  }

  validate() {
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScheduledPlanExecutedStatus extends $dara.Model {
  /**
   * @example
   * HOT_UPDATE
   */
  restartType?: string;
  /**
   * @example
   * UPGRADED
   */
  statusState?: string;
  static names(): { [key: string]: string } {
    return {
      restartType: 'restartType',
      statusState: 'statusState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restartType: 'string',
      statusState: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Schema extends $dara.Model {
  columns?: TableColumn[];
  primaryKey?: PrimaryKey;
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
      primaryKey: PrimaryKey,
      watermarkSpecs: { 'type': 'array', 'itemType': WatermarkSpec },
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(this.primaryKey && typeof (this.primaryKey as any).validate === 'function') {
      (this.primaryKey as any).validate();
    }
    if(Array.isArray(this.watermarkSpecs)) {
      $dara.Model.validateArray(this.watermarkSpecs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SessionCluster extends $dara.Model {
  basicResourceSetting?: BasicResourceSetting;
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
   * default-queue
   */
  deploymentTargetName?: string;
  /**
   * @example
   * vvr-6.0.7-flink-1.15
   */
  engineVersion?: string;
  /**
   * @example
   * {"taskmanager.numberOfTaskSlots":"1"}
   */
  flinkConf?: { [key: string]: any };
  labels?: { [key: string]: any };
  logging?: Logging;
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
   * test-sessionCluster
   */
  name?: string;
  /**
   * @example
   * default-namespace
   */
  namespace?: string;
  /**
   * @example
   * 1f68a52c-1760-43c6-97fb-afe0674b****
   */
  sessionClusterId?: string;
  status?: SessionClusterStatus;
  /**
   * @example
   * edcef******b4f
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      basicResourceSetting: 'basicResourceSetting',
      createdAt: 'createdAt',
      creator: 'creator',
      creatorName: 'creatorName',
      deploymentTargetName: 'deploymentTargetName',
      engineVersion: 'engineVersion',
      flinkConf: 'flinkConf',
      labels: 'labels',
      logging: 'logging',
      modifiedAt: 'modifiedAt',
      modifier: 'modifier',
      modifierName: 'modifierName',
      name: 'name',
      namespace: 'namespace',
      sessionClusterId: 'sessionClusterId',
      status: 'status',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicResourceSetting: BasicResourceSetting,
      createdAt: 'number',
      creator: 'string',
      creatorName: 'string',
      deploymentTargetName: 'string',
      engineVersion: 'string',
      flinkConf: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      logging: Logging,
      modifiedAt: 'number',
      modifier: 'string',
      modifierName: 'string',
      name: 'string',
      namespace: 'string',
      sessionClusterId: 'string',
      status: SessionClusterStatus,
      workspace: 'string',
    };
  }

  validate() {
    if(this.basicResourceSetting && typeof (this.basicResourceSetting as any).validate === 'function') {
      (this.basicResourceSetting as any).validate();
    }
    if(this.flinkConf) {
      $dara.Model.validateMap(this.flinkConf);
    }
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(this.logging && typeof (this.logging as any).validate === 'function') {
      (this.logging as any).validate();
    }
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SessionClusterFailureInfo extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SessionClusterRunningInfo extends $dara.Model {
  lastUpdateTime?: number;
  referenceDeploymentIds?: string[];
  startedAt?: number;
  static names(): { [key: string]: string } {
    return {
      lastUpdateTime: 'lastUpdateTime',
      referenceDeploymentIds: 'referenceDeploymentIds',
      startedAt: 'startedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastUpdateTime: 'number',
      referenceDeploymentIds: { 'type': 'array', 'itemType': 'string' },
      startedAt: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.referenceDeploymentIds)) {
      $dara.Model.validateArray(this.referenceDeploymentIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SessionClusterStatus extends $dara.Model {
  currentSessionClusterStatus?: string;
  failure?: SessionClusterFailureInfo;
  running?: SessionClusterRunningInfo;
  static names(): { [key: string]: string } {
    return {
      currentSessionClusterStatus: 'currentSessionClusterStatus',
      failure: 'failure',
      running: 'running',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentSessionClusterStatus: 'string',
      failure: SessionClusterFailureInfo,
      running: SessionClusterRunningInfo,
    };
  }

  validate() {
    if(this.failure && typeof (this.failure as any).validate === 'function') {
      (this.failure as any).validate();
    }
    if(this.running && typeof (this.running as any).validate === 'function') {
      (this.running as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SqlArtifact extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.additionalDependencies)) {
      $dara.Model.validateArray(this.additionalDependencies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SqlStatementExecuteResult extends $dara.Model {
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

  validate() {
    if(this.errorDetails && typeof (this.errorDetails as any).validate === 'function') {
      (this.errorDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SqlStatementValidationResult extends $dara.Model {
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

  validate() {
    if(this.errorDetails && typeof (this.errorDetails as any).validate === 'function') {
      (this.errorDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SqlStatementWithContext extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.additionalDependencies)) {
      $dara.Model.validateArray(this.additionalDependencies);
    }
    if(this.flinkConfiguration) {
      $dara.Model.validateMap(this.flinkConfiguration);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobRequestBody extends $dara.Model {
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

  validate() {
    if(this.resourceSettingSpec && typeof (this.resourceSettingSpec as any).validate === 'function') {
      (this.resourceSettingSpec as any).validate();
    }
    if(this.restoreStrategy && typeof (this.restoreStrategy as any).validate === 'function') {
      (this.restoreStrategy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopJobRequestBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StreamingResourceSetting extends $dara.Model {
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

  validate() {
    if(this.basicResourceSetting && typeof (this.basicResourceSetting as any).validate === 'function') {
      (this.basicResourceSetting as any).validate();
    }
    if(this.expertResourceSetting && typeof (this.expertResourceSetting as any).validate === 'function') {
      (this.expertResourceSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubFolder extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Table extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.partitionKeys)) {
      $dara.Model.validateArray(this.partitionKeys);
    }
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    if(this.schema && typeof (this.schema as any).validate === 'function') {
      (this.schema as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TableColumn extends $dara.Model {
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

  validate() {
    if(this.metadataInfo && typeof (this.metadataInfo as any).validate === 'function') {
      (this.metadataInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TableMeta extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UdfArtifact extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.dependencyJarUris)) {
      $dara.Model.validateArray(this.dependencyJarUris);
    }
    if(Array.isArray(this.udfClasses)) {
      $dara.Model.validateArray(this.udfClasses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UdfClass extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.functionNames)) {
      $dara.Model.validateArray(this.functionNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UdfFunction extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJobConfigParam extends $dara.Model {
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

  validate() {
    if(this.newFlinkConf) {
      $dara.Model.validateMap(this.newFlinkConf);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUdfArtifactResult extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.collidingClasses)) {
      $dara.Model.validateArray(this.collidingClasses);
    }
    if(Array.isArray(this.missingClasses)) {
      $dara.Model.validateArray(this.missingClasses);
    }
    if(this.udfArtifact && typeof (this.udfArtifact as any).validate === 'function') {
      (this.udfArtifact as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateStatementResult extends $dara.Model {
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

  validate() {
    if(this.errorDetails && typeof (this.errorDetails as any).validate === 'function') {
      (this.errorDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidationErrorDetails extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Variable extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WatermarkSpec extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyScheduledPlanHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyScheduledPlanResponseBody extends $dara.Model {
  data?: ScheduledPlanAppliedInfo;
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
      data: ScheduledPlanAppliedInfo,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyScheduledPlanResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApplyScheduledPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ApplyScheduledPlanResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentDraftHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentDraftRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentDraftResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentDraftResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentTargetHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentTargetRequest extends $dara.Model {
  body?: ResourceSpec;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-dt
   */
  deploymentTargetName?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      deploymentTargetName: 'deploymentTargetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ResourceSpec,
      deploymentTargetName: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentTargetResponseBody extends $dara.Model {
  data?: DeploymentTarget;
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
      data: DeploymentTarget,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentTargetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDeploymentTargetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDeploymentTargetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemberHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemberRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemberResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemberResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSavepointHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSavepointRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSavepointResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSavepointResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduledPlanHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduledPlanRequest extends $dara.Model {
  body?: ScheduledPlan;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ScheduledPlan,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduledPlanResponseBody extends $dara.Model {
  data?: ScheduledPlan;
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
      data: ScheduledPlan,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduledPlanResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateScheduledPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateScheduledPlanResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSessionClusterHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSessionClusterRequest extends $dara.Model {
  body?: SessionCluster;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: SessionCluster,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSessionClusterResponseBody extends $dara.Model {
  data?: SessionCluster;
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
      data: SessionCluster,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSessionClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSessionClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSessionClusterResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUdfArtifactHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUdfArtifactRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUdfArtifactResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUdfArtifactResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVariableHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVariableRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVariableResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVariableResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomConnectorHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomConnectorResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomConnectorResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeploymentHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeploymentResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeploymentResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeploymentDraftHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeploymentDraftResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeploymentDraftResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeploymentTargetHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeploymentTargetResponseBody extends $dara.Model {
  data?: DeploymentTarget;
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
      data: DeploymentTarget,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeploymentTargetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDeploymentTargetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDeploymentTargetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFolderHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFolderResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFolderResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMemberHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMemberResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMemberResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSavepointHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSavepointResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSavepointResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduledPlanHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduledPlanResponseBody extends $dara.Model {
  data?: ScheduledPlan;
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
      data: ScheduledPlan,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduledPlanResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteScheduledPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteScheduledPlanResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSessionClusterHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSessionClusterResponseBody extends $dara.Model {
  data?: SessionCluster;
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
      data: SessionCluster,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSessionClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSessionClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSessionClusterResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUdfArtifactHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUdfArtifactResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUdfArtifactResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUdfFunctionHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUdfFunctionRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUdfFunctionResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUdfFunctionResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVariableHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVariableResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVariableResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployDeploymentDraftAsyncHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployDeploymentDraftAsyncRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployDeploymentDraftAsyncResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployDeploymentDraftAsyncResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSqlStatementHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSqlStatementRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSqlStatementResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSqlStatementResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlinkApiProxyHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlinkApiProxyRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlinkApiProxyResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlinkApiProxyResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateResourcePlanWithFlinkConfAsyncHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateResourcePlanWithFlinkConfAsyncRequest extends $dara.Model {
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

  validate() {
    if(this.body) {
      $dara.Model.validateMap(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateResourcePlanWithFlinkConfAsyncResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateResourcePlanWithFlinkConfAsyncResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppliedScheduledPlanHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppliedScheduledPlanRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5737ef81-d2f1-49cf-8752-30910809****
   */
  deploymentId?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentId: 'deploymentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppliedScheduledPlanResponseBody extends $dara.Model {
  data?: ScheduledPlanAppliedInfo;
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
      data: ScheduledPlanAppliedInfo,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppliedScheduledPlanResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAppliedScheduledPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAppliedScheduledPlanResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogsHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogsRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogsResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabasesHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabasesRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabasesResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabasesResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployDeploymentDraftResultHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployDeploymentDraftResultResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployDeploymentDraftResultResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentDraftHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentDraftResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentDraftResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentDraftLockHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentDraftLockRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentDraftLockResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentDraftLockResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventsHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventsRequest extends $dara.Model {
  /**
   * @example
   * 58718c99-3b29-4c5e-93bb-c9fc4ec6****
   */
  deploymentId?: string;
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
      deploymentId: 'deploymentId',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventsResponseBody extends $dara.Model {
  data?: Event[];
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
   * 4
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
      data: { 'type': 'array', 'itemType': Event },
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

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetEventsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFolderHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFolderRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFolderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data structure of the folder.
   */
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFolderResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGenerateResourcePlanResultHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGenerateResourcePlanResultResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGenerateResourcePlanResultResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotUpdateJobResultHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotUpdateJobResultResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotUpdateJobResultResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
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
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
      data: Job,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobDiagnosisHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobDiagnosisResponseBody extends $dara.Model {
  /**
   * @example
   * “”
   */
  accessDeniedDetail?: string;
  data?: JobDiagnosis;
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
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
      data: JobDiagnosis,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobDiagnosisResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetJobDiagnosisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetJobDiagnosisResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLatestJobStartLogHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLatestJobStartLogResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLatestJobStartLogResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLineageInfoHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLineageInfoRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLineageInfoResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLineageInfoResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMemberHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMemberResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMemberResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSavepointHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSavepointResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSavepointResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSessionClusterHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSessionClusterResponseBody extends $dara.Model {
  data?: SessionCluster;
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
      data: SessionCluster,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSessionClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSessionClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSessionClusterResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTablesHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTablesRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * If the value of success was true, the list and details of tables that meet the condition were returned. If the value of success was false, a null value was returned.
   */
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

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTablesResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUdfArtifactsHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUdfArtifactsRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUdfArtifactsResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUdfArtifactsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotUpdateJobHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotUpdateJobResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotUpdateJobResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomConnectorsHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomConnectorsResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomConnectorsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentDraftsHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentDraftsRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentDraftsResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentDraftsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentTargetsHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentTargetsRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentTargetsResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentTargetsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentsHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentsRequest extends $dara.Model {
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
  sortName?: string;
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
      sortName: 'sortName',
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
      sortName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentsResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEditableNamespaceRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEditableNamespaceResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEditableNamespaceResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEngineVersionMetadataHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEngineVersionMetadataResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEngineVersionMetadataResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
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
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
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

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMembersHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMembersRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMembersResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMembersResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSavepointsHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSavepointsRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSavepointsResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSavepointsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduledPlanHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduledPlanRequest extends $dara.Model {
  /**
   * @example
   * 737d0921-c5ac-47fc-9ba9-07a1e0b4****
   */
  deploymentId?: string;
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
      deploymentId: 'deploymentId',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduledPlanResponseBody extends $dara.Model {
  data?: ScheduledPlan[];
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
   * 4
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
      data: { 'type': 'array', 'itemType': ScheduledPlan },
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

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduledPlanResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListScheduledPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListScheduledPlanResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduledPlanExecutedHistoryHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduledPlanExecutedHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 58718c99-3b29-4c5e-93bb-c9fc4ec6****
   */
  deploymentId?: string;
  /**
   * @example
   * SCHEDULED_PLAN
   */
  origin?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentId: 'deploymentId',
      origin: 'origin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentId: 'string',
      origin: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduledPlanExecutedHistoryResponseBody extends $dara.Model {
  data?: ScheduledPlanExecutedInfo[];
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
      data: { 'type': 'array', 'itemType': ScheduledPlanExecutedInfo },
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

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduledPlanExecutedHistoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListScheduledPlanExecutedHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListScheduledPlanExecutedHistoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionClustersHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionClustersResponseBody extends $dara.Model {
  data?: SessionCluster[];
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
      data: { 'type': 'array', 'itemType': SessionCluster },
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionClustersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSessionClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSessionClustersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVariablesHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVariablesRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVariablesResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVariablesResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterCustomConnectorHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterCustomConnectorRequest extends $dara.Model {
  /**
   * @remarks
   * The URL in which the JAR package of the custom connector is stored. The platform must be able to access this address.
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterCustomConnectorResponseBody extends $dara.Model {
  /**
   * @remarks
   * If the value of success was true, a list of deployments in which custom connectors were deleted was returned. If the value of success was false, a null value was returned.
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

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterCustomConnectorResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterUdfFunctionHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterUdfFunctionRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterUdfFunctionResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterUdfFunctionResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
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
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
      data: Job,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobWithParamsHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobWithParamsRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobWithParamsResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
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
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
      data: Job,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobWithParamsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSessionClusterHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSessionClusterResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSessionClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartSessionClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartSessionClusterResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopApplyScheduledPlanHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopApplyScheduledPlanResponseBody extends $dara.Model {
  data?: ScheduledPlanAppliedInfo;
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
      data: ScheduledPlanAppliedInfo,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopApplyScheduledPlanResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopApplyScheduledPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopApplyScheduledPlanResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopJobHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopJobRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopJobResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
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
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
      data: Job,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopJobResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopSessionClusterHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopSessionClusterResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopSessionClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopSessionClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopSessionClusterResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeploymentHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeploymentRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeploymentResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeploymentResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeploymentDraftHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeploymentDraftRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeploymentDraftResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeploymentDraftResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeploymentTargetHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeploymentTargetRequest extends $dara.Model {
  body?: ResourceSpec;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ResourceSpec,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeploymentTargetResponseBody extends $dara.Model {
  data?: DeploymentTarget;
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
      data: DeploymentTarget,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeploymentTargetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDeploymentTargetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDeploymentTargetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFolderHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFolderRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFolderResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFolderResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMemberHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMemberRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMemberResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMemberResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduledPlanHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduledPlanRequest extends $dara.Model {
  body?: ScheduledPlan;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ScheduledPlan,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduledPlanResponseBody extends $dara.Model {
  data?: ScheduledPlan;
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
      data: ScheduledPlan,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduledPlanResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateScheduledPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateScheduledPlanResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSessionClusterHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSessionClusterRequest extends $dara.Model {
  body?: SessionCluster;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: SessionCluster,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSessionClusterResponseBody extends $dara.Model {
  data?: SessionCluster;
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
   * 1EF03B0C-F44F-47AD-BB48-D002D0F7B8C9
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
      data: SessionCluster,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSessionClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSessionClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSessionClusterResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUdfArtifactHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUdfArtifactRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUdfArtifactResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUdfArtifactResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVariableHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVariableRequest extends $dara.Model {
  /**
   * @remarks
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVariableResponseBody extends $dara.Model {
  /**
   * @example
   * “”
   */
  accessDeniedDetail?: string;
  data?: Variable;
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
   * 1EF03B0C-F44F-47AD-BB48-D002D0F7B8C9
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
      data: Variable,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVariableResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateVariableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateVariableResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateSqlStatementHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateSqlStatementRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateSqlStatementResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateSqlStatementResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ververica", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 执行定时计划
   * 
   * @param headers - ApplyScheduledPlanHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyScheduledPlanResponse
   */
  async applyScheduledPlanWithOptions(namespace: string, scheduledPlanId: string, headers: ApplyScheduledPlanHeaders, runtime: $dara.RuntimeOptions): Promise<ApplyScheduledPlanResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyScheduledPlan",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/scheduled-plans/${$dara.URL.percentEncode(scheduledPlanId)}%3Aapply`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ApplyScheduledPlanResponse>(await this.callApi(params, req, runtime), new ApplyScheduledPlanResponse({}));
    } else {
      return $dara.cast<ApplyScheduledPlanResponse>(await this.execute(params, req, runtime), new ApplyScheduledPlanResponse({}));
    }

  }

  /**
   * 执行定时计划
   * @returns ApplyScheduledPlanResponse
   */
  async applyScheduledPlan(namespace: string, scheduledPlanId: string): Promise<ApplyScheduledPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new ApplyScheduledPlanHeaders({ });
    return await this.applyScheduledPlanWithOptions(namespace, scheduledPlanId, headers, runtime);
  }

  /**
   * Creates a deployment.
   * 
   * @param request - CreateDeploymentRequest
   * @param headers - CreateDeploymentHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDeploymentResponse
   */
  async createDeploymentWithOptions(namespace: string, request: CreateDeploymentRequest, headers: CreateDeploymentHeaders, runtime: $dara.RuntimeOptions): Promise<CreateDeploymentResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDeployment",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployments`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateDeploymentResponse>(await this.callApi(params, req, runtime), new CreateDeploymentResponse({}));
    } else {
      return $dara.cast<CreateDeploymentResponse>(await this.execute(params, req, runtime), new CreateDeploymentResponse({}));
    }

  }

  /**
   * Creates a deployment.
   * 
   * @param request - CreateDeploymentRequest
   * @returns CreateDeploymentResponse
   */
  async createDeployment(namespace: string, request: CreateDeploymentRequest): Promise<CreateDeploymentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async createDeploymentDraftWithOptions(namespace: string, request: CreateDeploymentDraftRequest, headers: CreateDeploymentDraftHeaders, runtime: $dara.RuntimeOptions): Promise<CreateDeploymentDraftResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDeploymentDraft",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployment-drafts`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateDeploymentDraftResponse>(await this.callApi(params, req, runtime), new CreateDeploymentDraftResponse({}));
    } else {
      return $dara.cast<CreateDeploymentDraftResponse>(await this.execute(params, req, runtime), new CreateDeploymentDraftResponse({}));
    }

  }

  /**
   * create a deploymentDraft
   * 
   * @param request - CreateDeploymentDraftRequest
   * @returns CreateDeploymentDraftResponse
   */
  async createDeploymentDraft(namespace: string, request: CreateDeploymentDraftRequest): Promise<CreateDeploymentDraftResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new CreateDeploymentDraftHeaders({ });
    return await this.createDeploymentDraftWithOptions(namespace, request, headers, runtime);
  }

  /**
   * 创建deploymentTarget
   * 
   * @param request - CreateDeploymentTargetRequest
   * @param headers - CreateDeploymentTargetHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDeploymentTargetResponse
   */
  async createDeploymentTargetWithOptions(namespace: string, request: CreateDeploymentTargetRequest, headers: CreateDeploymentTargetHeaders, runtime: $dara.RuntimeOptions): Promise<CreateDeploymentTargetResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deploymentTargetName)) {
      query["deploymentTargetName"] = request.deploymentTargetName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDeploymentTarget",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployment-targets`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateDeploymentTargetResponse>(await this.callApi(params, req, runtime), new CreateDeploymentTargetResponse({}));
    } else {
      return $dara.cast<CreateDeploymentTargetResponse>(await this.execute(params, req, runtime), new CreateDeploymentTargetResponse({}));
    }

  }

  /**
   * 创建deploymentTarget
   * 
   * @param request - CreateDeploymentTargetRequest
   * @returns CreateDeploymentTargetResponse
   */
  async createDeploymentTarget(namespace: string, request: CreateDeploymentTargetRequest): Promise<CreateDeploymentTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new CreateDeploymentTargetHeaders({ });
    return await this.createDeploymentTargetWithOptions(namespace, request, headers, runtime);
  }

  /**
   * create a folder
   * 
   * @param request - CreateFolderRequest
   * @param headers - CreateFolderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFolderResponse
   */
  async createFolderWithOptions(namespace: string, request: CreateFolderRequest, headers: CreateFolderHeaders, runtime: $dara.RuntimeOptions): Promise<CreateFolderResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFolder",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/folder`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateFolderResponse>(await this.callApi(params, req, runtime), new CreateFolderResponse({}));
    } else {
      return $dara.cast<CreateFolderResponse>(await this.execute(params, req, runtime), new CreateFolderResponse({}));
    }

  }

  /**
   * create a folder
   * 
   * @param request - CreateFolderRequest
   * @returns CreateFolderResponse
   */
  async createFolder(namespace: string, request: CreateFolderRequest): Promise<CreateFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async createMemberWithOptions(namespace: string, request: CreateMemberRequest, headers: CreateMemberHeaders, runtime: $dara.RuntimeOptions): Promise<CreateMemberResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMember",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/gateway/v2/namespaces/${$dara.URL.percentEncode(namespace)}/members`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateMemberResponse>(await this.callApi(params, req, runtime), new CreateMemberResponse({}));
    } else {
      return $dara.cast<CreateMemberResponse>(await this.execute(params, req, runtime), new CreateMemberResponse({}));
    }

  }

  /**
   * Adds a user to a namespace as a member and grants permissions to the user.
   * 
   * @param request - CreateMemberRequest
   * @returns CreateMemberResponse
   */
  async createMember(namespace: string, request: CreateMemberRequest): Promise<CreateMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async createSavepointWithOptions(namespace: string, request: CreateSavepointRequest, headers: CreateSavepointHeaders, runtime: $dara.RuntimeOptions): Promise<CreateSavepointResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deploymentId)) {
      body["deploymentId"] = request.deploymentId;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.nativeFormat)) {
      body["nativeFormat"] = request.nativeFormat;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSavepoint",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/savepoints`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateSavepointResponse>(await this.callApi(params, req, runtime), new CreateSavepointResponse({}));
    } else {
      return $dara.cast<CreateSavepointResponse>(await this.execute(params, req, runtime), new CreateSavepointResponse({}));
    }

  }

  /**
   * Creates a savepoint.
   * 
   * @param request - CreateSavepointRequest
   * @returns CreateSavepointResponse
   */
  async createSavepoint(namespace: string, request: CreateSavepointRequest): Promise<CreateSavepointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new CreateSavepointHeaders({ });
    return await this.createSavepointWithOptions(namespace, request, headers, runtime);
  }

  /**
   * 创建定时执行计划
   * 
   * @param request - CreateScheduledPlanRequest
   * @param headers - CreateScheduledPlanHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScheduledPlanResponse
   */
  async createScheduledPlanWithOptions(namespace: string, request: CreateScheduledPlanRequest, headers: CreateScheduledPlanHeaders, runtime: $dara.RuntimeOptions): Promise<CreateScheduledPlanResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateScheduledPlan",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/scheduled-plans`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateScheduledPlanResponse>(await this.callApi(params, req, runtime), new CreateScheduledPlanResponse({}));
    } else {
      return $dara.cast<CreateScheduledPlanResponse>(await this.execute(params, req, runtime), new CreateScheduledPlanResponse({}));
    }

  }

  /**
   * 创建定时执行计划
   * 
   * @param request - CreateScheduledPlanRequest
   * @returns CreateScheduledPlanResponse
   */
  async createScheduledPlan(namespace: string, request: CreateScheduledPlanRequest): Promise<CreateScheduledPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new CreateScheduledPlanHeaders({ });
    return await this.createScheduledPlanWithOptions(namespace, request, headers, runtime);
  }

  /**
   * 创建session集群
   * 
   * @param request - CreateSessionClusterRequest
   * @param headers - CreateSessionClusterHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSessionClusterResponse
   */
  async createSessionClusterWithOptions(namespace: string, request: CreateSessionClusterRequest, headers: CreateSessionClusterHeaders, runtime: $dara.RuntimeOptions): Promise<CreateSessionClusterResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSessionCluster",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/sessionclusters`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateSessionClusterResponse>(await this.callApi(params, req, runtime), new CreateSessionClusterResponse({}));
    } else {
      return $dara.cast<CreateSessionClusterResponse>(await this.execute(params, req, runtime), new CreateSessionClusterResponse({}));
    }

  }

  /**
   * 创建session集群
   * 
   * @param request - CreateSessionClusterRequest
   * @returns CreateSessionClusterResponse
   */
  async createSessionCluster(namespace: string, request: CreateSessionClusterRequest): Promise<CreateSessionClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new CreateSessionClusterHeaders({ });
    return await this.createSessionClusterWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Parses all user-defined function (UDF) methods in your JAR or Python file and creates an artifact configuration for a UDF.
   * 
   * @param request - CreateUdfArtifactRequest
   * @param headers - CreateUdfArtifactHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUdfArtifactResponse
   */
  async createUdfArtifactWithOptions(namespace: string, request: CreateUdfArtifactRequest, headers: CreateUdfArtifactHeaders, runtime: $dara.RuntimeOptions): Promise<CreateUdfArtifactResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUdfArtifact",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/udfartifacts`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateUdfArtifactResponse>(await this.callApi(params, req, runtime), new CreateUdfArtifactResponse({}));
    } else {
      return $dara.cast<CreateUdfArtifactResponse>(await this.execute(params, req, runtime), new CreateUdfArtifactResponse({}));
    }

  }

  /**
   * Parses all user-defined function (UDF) methods in your JAR or Python file and creates an artifact configuration for a UDF.
   * 
   * @param request - CreateUdfArtifactRequest
   * @returns CreateUdfArtifactResponse
   */
  async createUdfArtifact(namespace: string, request: CreateUdfArtifactRequest): Promise<CreateUdfArtifactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async createVariableWithOptions(namespace: string, request: CreateVariableRequest, headers: CreateVariableHeaders, runtime: $dara.RuntimeOptions): Promise<CreateVariableResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVariable",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/variables`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateVariableResponse>(await this.callApi(params, req, runtime), new CreateVariableResponse({}));
    } else {
      return $dara.cast<CreateVariableResponse>(await this.execute(params, req, runtime), new CreateVariableResponse({}));
    }

  }

  /**
   * Creates a variable.
   * 
   * @param request - CreateVariableRequest
   * @returns CreateVariableResponse
   */
  async createVariable(namespace: string, request: CreateVariableRequest): Promise<CreateVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async deleteCustomConnectorWithOptions(namespace: string, connectorName: string, headers: DeleteCustomConnectorHeaders, runtime: $dara.RuntimeOptions): Promise<DeleteCustomConnectorResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomConnector",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/connectors/${$dara.URL.percentEncode(connectorName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteCustomConnectorResponse>(await this.callApi(params, req, runtime), new DeleteCustomConnectorResponse({}));
    } else {
      return $dara.cast<DeleteCustomConnectorResponse>(await this.execute(params, req, runtime), new DeleteCustomConnectorResponse({}));
    }

  }

  /**
   * Deletes a registered custom connector from a workspace.
   * @returns DeleteCustomConnectorResponse
   */
  async deleteCustomConnector(namespace: string, connectorName: string): Promise<DeleteCustomConnectorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async deleteDeploymentWithOptions(namespace: string, deploymentId: string, headers: DeleteDeploymentHeaders, runtime: $dara.RuntimeOptions): Promise<DeleteDeploymentResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDeployment",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployments/${$dara.URL.percentEncode(deploymentId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteDeploymentResponse>(await this.callApi(params, req, runtime), new DeleteDeploymentResponse({}));
    } else {
      return $dara.cast<DeleteDeploymentResponse>(await this.execute(params, req, runtime), new DeleteDeploymentResponse({}));
    }

  }

  /**
   * Deletes a deployment based on the deployment ID.
   * @returns DeleteDeploymentResponse
   */
  async deleteDeployment(namespace: string, deploymentId: string): Promise<DeleteDeploymentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async deleteDeploymentDraftWithOptions(namespace: string, deploymentDraftId: string, headers: DeleteDeploymentDraftHeaders, runtime: $dara.RuntimeOptions): Promise<DeleteDeploymentDraftResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDeploymentDraft",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployment-drafts/${$dara.URL.percentEncode(deploymentDraftId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteDeploymentDraftResponse>(await this.callApi(params, req, runtime), new DeleteDeploymentDraftResponse({}));
    } else {
      return $dara.cast<DeleteDeploymentDraftResponse>(await this.execute(params, req, runtime), new DeleteDeploymentDraftResponse({}));
    }

  }

  /**
   * delete a deploymentDraft
   * @returns DeleteDeploymentDraftResponse
   */
  async deleteDeploymentDraft(namespace: string, deploymentDraftId: string): Promise<DeleteDeploymentDraftResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new DeleteDeploymentDraftHeaders({ });
    return await this.deleteDeploymentDraftWithOptions(namespace, deploymentDraftId, headers, runtime);
  }

  /**
   * 删除deploymentTarget
   * 
   * @param headers - DeleteDeploymentTargetHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDeploymentTargetResponse
   */
  async deleteDeploymentTargetWithOptions(namespace: string, deploymentTargetName: string, headers: DeleteDeploymentTargetHeaders, runtime: $dara.RuntimeOptions): Promise<DeleteDeploymentTargetResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDeploymentTarget",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployment-targets/${$dara.URL.percentEncode(deploymentTargetName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteDeploymentTargetResponse>(await this.callApi(params, req, runtime), new DeleteDeploymentTargetResponse({}));
    } else {
      return $dara.cast<DeleteDeploymentTargetResponse>(await this.execute(params, req, runtime), new DeleteDeploymentTargetResponse({}));
    }

  }

  /**
   * 删除deploymentTarget
   * @returns DeleteDeploymentTargetResponse
   */
  async deleteDeploymentTarget(namespace: string, deploymentTargetName: string): Promise<DeleteDeploymentTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new DeleteDeploymentTargetHeaders({ });
    return await this.deleteDeploymentTargetWithOptions(namespace, deploymentTargetName, headers, runtime);
  }

  /**
   * delete a folder
   * 
   * @param headers - DeleteFolderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFolderResponse
   */
  async deleteFolderWithOptions(namespace: string, folderId: string, headers: DeleteFolderHeaders, runtime: $dara.RuntimeOptions): Promise<DeleteFolderResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFolder",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/folder/${$dara.URL.percentEncode(folderId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteFolderResponse>(await this.callApi(params, req, runtime), new DeleteFolderResponse({}));
    } else {
      return $dara.cast<DeleteFolderResponse>(await this.execute(params, req, runtime), new DeleteFolderResponse({}));
    }

  }

  /**
   * delete a folder
   * @returns DeleteFolderResponse
   */
  async deleteFolder(namespace: string, folderId: string): Promise<DeleteFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async deleteJobWithOptions(namespace: string, jobId: string, headers: DeleteJobHeaders, runtime: $dara.RuntimeOptions): Promise<DeleteJobResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteJob",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/jobs/${$dara.URL.percentEncode(jobId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteJobResponse>(await this.callApi(params, req, runtime), new DeleteJobResponse({}));
    } else {
      return $dara.cast<DeleteJobResponse>(await this.execute(params, req, runtime), new DeleteJobResponse({}));
    }

  }

  /**
   * Deletes the information about a job that is not in the running state in a deployment.
   * @returns DeleteJobResponse
   */
  async deleteJob(namespace: string, jobId: string): Promise<DeleteJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async deleteMemberWithOptions(namespace: string, member: string, headers: DeleteMemberHeaders, runtime: $dara.RuntimeOptions): Promise<DeleteMemberResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMember",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/gateway/v2/namespaces/${$dara.URL.percentEncode(namespace)}/members/${$dara.URL.percentEncode(member)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteMemberResponse>(await this.callApi(params, req, runtime), new DeleteMemberResponse({}));
    } else {
      return $dara.cast<DeleteMemberResponse>(await this.execute(params, req, runtime), new DeleteMemberResponse({}));
    }

  }

  /**
   * Revokes the permissions from a member.
   * @returns DeleteMemberResponse
   */
  async deleteMember(namespace: string, member: string): Promise<DeleteMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async deleteSavepointWithOptions(namespace: string, savepointId: string, headers: DeleteSavepointHeaders, runtime: $dara.RuntimeOptions): Promise<DeleteSavepointResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSavepoint",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/savepoints/${$dara.URL.percentEncode(savepointId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteSavepointResponse>(await this.callApi(params, req, runtime), new DeleteSavepointResponse({}));
    } else {
      return $dara.cast<DeleteSavepointResponse>(await this.execute(params, req, runtime), new DeleteSavepointResponse({}));
    }

  }

  /**
   * Deletes a savepoint.
   * @returns DeleteSavepointResponse
   */
  async deleteSavepoint(namespace: string, savepointId: string): Promise<DeleteSavepointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new DeleteSavepointHeaders({ });
    return await this.deleteSavepointWithOptions(namespace, savepointId, headers, runtime);
  }

  /**
   * 删除定时执行计划
   * 
   * @param headers - DeleteScheduledPlanHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteScheduledPlanResponse
   */
  async deleteScheduledPlanWithOptions(namespace: string, scheduledPlanId: string, headers: DeleteScheduledPlanHeaders, runtime: $dara.RuntimeOptions): Promise<DeleteScheduledPlanResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteScheduledPlan",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/scheduled-plans/${$dara.URL.percentEncode(scheduledPlanId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteScheduledPlanResponse>(await this.callApi(params, req, runtime), new DeleteScheduledPlanResponse({}));
    } else {
      return $dara.cast<DeleteScheduledPlanResponse>(await this.execute(params, req, runtime), new DeleteScheduledPlanResponse({}));
    }

  }

  /**
   * 删除定时执行计划
   * @returns DeleteScheduledPlanResponse
   */
  async deleteScheduledPlan(namespace: string, scheduledPlanId: string): Promise<DeleteScheduledPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new DeleteScheduledPlanHeaders({ });
    return await this.deleteScheduledPlanWithOptions(namespace, scheduledPlanId, headers, runtime);
  }

  /**
   * 删除session集群
   * 
   * @param headers - DeleteSessionClusterHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSessionClusterResponse
   */
  async deleteSessionClusterWithOptions(namespace: string, sessionClusterName: string, headers: DeleteSessionClusterHeaders, runtime: $dara.RuntimeOptions): Promise<DeleteSessionClusterResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSessionCluster",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/sessionclusters/${$dara.URL.percentEncode(sessionClusterName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteSessionClusterResponse>(await this.callApi(params, req, runtime), new DeleteSessionClusterResponse({}));
    } else {
      return $dara.cast<DeleteSessionClusterResponse>(await this.execute(params, req, runtime), new DeleteSessionClusterResponse({}));
    }

  }

  /**
   * 删除session集群
   * @returns DeleteSessionClusterResponse
   */
  async deleteSessionCluster(namespace: string, sessionClusterName: string): Promise<DeleteSessionClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new DeleteSessionClusterHeaders({ });
    return await this.deleteSessionClusterWithOptions(namespace, sessionClusterName, headers, runtime);
  }

  /**
   * 删除UdfArtifact
   * 
   * @param headers - DeleteUdfArtifactHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUdfArtifactResponse
   */
  async deleteUdfArtifactWithOptions(namespace: string, udfArtifactName: string, headers: DeleteUdfArtifactHeaders, runtime: $dara.RuntimeOptions): Promise<DeleteUdfArtifactResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUdfArtifact",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/udfartifacts/${$dara.URL.percentEncode(udfArtifactName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteUdfArtifactResponse>(await this.callApi(params, req, runtime), new DeleteUdfArtifactResponse({}));
    } else {
      return $dara.cast<DeleteUdfArtifactResponse>(await this.execute(params, req, runtime), new DeleteUdfArtifactResponse({}));
    }

  }

  /**
   * 删除UdfArtifact
   * @returns DeleteUdfArtifactResponse
   */
  async deleteUdfArtifact(namespace: string, udfArtifactName: string): Promise<DeleteUdfArtifactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async deleteUdfFunctionWithOptions(namespace: string, functionName: string, request: DeleteUdfFunctionRequest, headers: DeleteUdfFunctionHeaders, runtime: $dara.RuntimeOptions): Promise<DeleteUdfFunctionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.className)) {
      query["className"] = request.className;
    }

    if (!$dara.isNull(request.udfArtifactName)) {
      query["udfArtifactName"] = request.udfArtifactName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUdfFunction",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/udfartifacts/function/${$dara.URL.percentEncode(functionName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteUdfFunctionResponse>(await this.callApi(params, req, runtime), new DeleteUdfFunctionResponse({}));
    } else {
      return $dara.cast<DeleteUdfFunctionResponse>(await this.execute(params, req, runtime), new DeleteUdfFunctionResponse({}));
    }

  }

  /**
   * Deletes an existing user-defined function (UDF) from a Realtime Compute for Apache Flink workspace.
   * 
   * @param request - DeleteUdfFunctionRequest
   * @returns DeleteUdfFunctionResponse
   */
  async deleteUdfFunction(namespace: string, functionName: string, request: DeleteUdfFunctionRequest): Promise<DeleteUdfFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async deleteVariableWithOptions(namespace: string, name: string, headers: DeleteVariableHeaders, runtime: $dara.RuntimeOptions): Promise<DeleteVariableResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVariable",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/variables/${$dara.URL.percentEncode(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteVariableResponse>(await this.callApi(params, req, runtime), new DeleteVariableResponse({}));
    } else {
      return $dara.cast<DeleteVariableResponse>(await this.execute(params, req, runtime), new DeleteVariableResponse({}));
    }

  }

  /**
   * Deletes a variable.
   * @returns DeleteVariableResponse
   */
  async deleteVariable(namespace: string, name: string): Promise<DeleteVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async deployDeploymentDraftAsyncWithOptions(namespace: string, request: DeployDeploymentDraftAsyncRequest, headers: DeployDeploymentDraftAsyncHeaders, runtime: $dara.RuntimeOptions): Promise<DeployDeploymentDraftAsyncResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeployDeploymentDraftAsync",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployment-drafts/async-deploy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeployDeploymentDraftAsyncResponse>(await this.callApi(params, req, runtime), new DeployDeploymentDraftAsyncResponse({}));
    } else {
      return $dara.cast<DeployDeploymentDraftAsyncResponse>(await this.execute(params, req, runtime), new DeployDeploymentDraftAsyncResponse({}));
    }

  }

  /**
   * deploy deploymentDraft async
   * 
   * @param request - DeployDeploymentDraftAsyncRequest
   * @returns DeployDeploymentDraftAsyncResponse
   */
  async deployDeploymentDraftAsync(namespace: string, request: DeployDeploymentDraftAsyncRequest): Promise<DeployDeploymentDraftAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async executeSqlStatementWithOptions(namespace: string, request: ExecuteSqlStatementRequest, headers: ExecuteSqlStatementHeaders, runtime: $dara.RuntimeOptions): Promise<ExecuteSqlStatementResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteSqlStatement",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/sql-statement/execute`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ExecuteSqlStatementResponse>(await this.callApi(params, req, runtime), new ExecuteSqlStatementResponse({}));
    } else {
      return $dara.cast<ExecuteSqlStatementResponse>(await this.execute(params, req, runtime), new ExecuteSqlStatementResponse({}));
    }

  }

  /**
   * 执行sql语句
   * 
   * @param request - ExecuteSqlStatementRequest
   * @returns ExecuteSqlStatementResponse
   */
  async executeSqlStatement(namespace: string, request: ExecuteSqlStatementRequest): Promise<ExecuteSqlStatementResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async flinkApiProxyWithOptions(request: FlinkApiProxyRequest, headers: FlinkApiProxyHeaders, runtime: $dara.RuntimeOptions): Promise<FlinkApiProxyResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.flinkApiPath)) {
      query["flinkApiPath"] = request.flinkApiPath;
    }

    if (!$dara.isNull(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<FlinkApiProxyResponse>(await this.callApi(params, req, runtime), new FlinkApiProxyResponse({}));
    } else {
      return $dara.cast<FlinkApiProxyResponse>(await this.execute(params, req, runtime), new FlinkApiProxyResponse({}));
    }

  }

  /**
   * Provides a Flink request proxy.
   * 
   * @param request - FlinkApiProxyRequest
   * @returns FlinkApiProxyResponse
   */
  async flinkApiProxy(request: FlinkApiProxyRequest): Promise<FlinkApiProxyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async generateResourcePlanWithFlinkConfAsyncWithOptions(namespace: string, deploymentId: string, request: GenerateResourcePlanWithFlinkConfAsyncRequest, headers: GenerateResourcePlanWithFlinkConfAsyncHeaders, runtime: $dara.RuntimeOptions): Promise<GenerateResourcePlanWithFlinkConfAsyncResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateResourcePlanWithFlinkConfAsync",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployments/${$dara.URL.percentEncode(deploymentId)}/resource-plan%3AasyncGenerate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GenerateResourcePlanWithFlinkConfAsyncResponse>(await this.callApi(params, req, runtime), new GenerateResourcePlanWithFlinkConfAsyncResponse({}));
    } else {
      return $dara.cast<GenerateResourcePlanWithFlinkConfAsyncResponse>(await this.execute(params, req, runtime), new GenerateResourcePlanWithFlinkConfAsyncResponse({}));
    }

  }

  /**
   * Submits a ticket that applies for asynchronous generation of the fine-grained resources. This operation returns the ID of the ticket for you to query the asynchronous generation result.
   * 
   * @param request - GenerateResourcePlanWithFlinkConfAsyncRequest
   * @returns GenerateResourcePlanWithFlinkConfAsyncResponse
   */
  async generateResourcePlanWithFlinkConfAsync(namespace: string, deploymentId: string, request: GenerateResourcePlanWithFlinkConfAsyncRequest): Promise<GenerateResourcePlanWithFlinkConfAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new GenerateResourcePlanWithFlinkConfAsyncHeaders({ });
    return await this.generateResourcePlanWithFlinkConfAsyncWithOptions(namespace, deploymentId, request, headers, runtime);
  }

  /**
   * 获取应用中的执行定时计划
   * 
   * @param request - GetAppliedScheduledPlanRequest
   * @param headers - GetAppliedScheduledPlanHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppliedScheduledPlanResponse
   */
  async getAppliedScheduledPlanWithOptions(namespace: string, request: GetAppliedScheduledPlanRequest, headers: GetAppliedScheduledPlanHeaders, runtime: $dara.RuntimeOptions): Promise<GetAppliedScheduledPlanResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deploymentId)) {
      query["deploymentId"] = request.deploymentId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppliedScheduledPlan",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/scheduled-plans%3AgetExecutedScheduledPlan`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetAppliedScheduledPlanResponse>(await this.callApi(params, req, runtime), new GetAppliedScheduledPlanResponse({}));
    } else {
      return $dara.cast<GetAppliedScheduledPlanResponse>(await this.execute(params, req, runtime), new GetAppliedScheduledPlanResponse({}));
    }

  }

  /**
   * 获取应用中的执行定时计划
   * 
   * @param request - GetAppliedScheduledPlanRequest
   * @returns GetAppliedScheduledPlanResponse
   */
  async getAppliedScheduledPlan(namespace: string, request: GetAppliedScheduledPlanRequest): Promise<GetAppliedScheduledPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new GetAppliedScheduledPlanHeaders({ });
    return await this.getAppliedScheduledPlanWithOptions(namespace, request, headers, runtime);
  }

  /**
   * 获取catalog
   * 
   * @param request - GetCatalogsRequest
   * @param headers - GetCatalogsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCatalogsResponse
   */
  async getCatalogsWithOptions(namespace: string, request: GetCatalogsRequest, headers: GetCatalogsHeaders, runtime: $dara.RuntimeOptions): Promise<GetCatalogsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.catalogName)) {
      query["catalogName"] = request.catalogName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCatalogs",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/catalogs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetCatalogsResponse>(await this.callApi(params, req, runtime), new GetCatalogsResponse({}));
    } else {
      return $dara.cast<GetCatalogsResponse>(await this.execute(params, req, runtime), new GetCatalogsResponse({}));
    }

  }

  /**
   * 获取catalog
   * 
   * @param request - GetCatalogsRequest
   * @returns GetCatalogsResponse
   */
  async getCatalogs(namespace: string, request: GetCatalogsRequest): Promise<GetCatalogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getDatabasesWithOptions(namespace: string, catalogName: string, request: GetDatabasesRequest, headers: GetDatabasesHeaders, runtime: $dara.RuntimeOptions): Promise<GetDatabasesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.databaseName)) {
      query["databaseName"] = request.databaseName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDatabases",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/catalogs/${$dara.URL.percentEncode(catalogName)}/databases`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetDatabasesResponse>(await this.callApi(params, req, runtime), new GetDatabasesResponse({}));
    } else {
      return $dara.cast<GetDatabasesResponse>(await this.execute(params, req, runtime), new GetDatabasesResponse({}));
    }

  }

  /**
   * 获取database
   * 
   * @param request - GetDatabasesRequest
   * @returns GetDatabasesResponse
   */
  async getDatabases(namespace: string, catalogName: string, request: GetDatabasesRequest): Promise<GetDatabasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getDeployDeploymentDraftResultWithOptions(namespace: string, ticketId: string, headers: GetDeployDeploymentDraftResultHeaders, runtime: $dara.RuntimeOptions): Promise<GetDeployDeploymentDraftResultResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeployDeploymentDraftResult",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployment-drafts/tickets/${$dara.URL.percentEncode(ticketId)}/async-deploy`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetDeployDeploymentDraftResultResponse>(await this.callApi(params, req, runtime), new GetDeployDeploymentDraftResultResponse({}));
    } else {
      return $dara.cast<GetDeployDeploymentDraftResultResponse>(await this.execute(params, req, runtime), new GetDeployDeploymentDraftResultResponse({}));
    }

  }

  /**
   * get deploy deploymentDraft result
   * @returns GetDeployDeploymentDraftResultResponse
   */
  async getDeployDeploymentDraftResult(namespace: string, ticketId: string): Promise<GetDeployDeploymentDraftResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getDeploymentWithOptions(namespace: string, deploymentId: string, headers: GetDeploymentHeaders, runtime: $dara.RuntimeOptions): Promise<GetDeploymentResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeployment",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployments/${$dara.URL.percentEncode(deploymentId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetDeploymentResponse>(await this.callApi(params, req, runtime), new GetDeploymentResponse({}));
    } else {
      return $dara.cast<GetDeploymentResponse>(await this.execute(params, req, runtime), new GetDeploymentResponse({}));
    }

  }

  /**
   * Obtains the details of a deployment.
   * @returns GetDeploymentResponse
   */
  async getDeployment(namespace: string, deploymentId: string): Promise<GetDeploymentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getDeploymentDraftWithOptions(namespace: string, deploymentDraftId: string, headers: GetDeploymentDraftHeaders, runtime: $dara.RuntimeOptions): Promise<GetDeploymentDraftResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeploymentDraft",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployment-drafts/${$dara.URL.percentEncode(deploymentDraftId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetDeploymentDraftResponse>(await this.callApi(params, req, runtime), new GetDeploymentDraftResponse({}));
    } else {
      return $dara.cast<GetDeploymentDraftResponse>(await this.execute(params, req, runtime), new GetDeploymentDraftResponse({}));
    }

  }

  /**
   * get a deploymentDraft
   * @returns GetDeploymentDraftResponse
   */
  async getDeploymentDraft(namespace: string, deploymentDraftId: string): Promise<GetDeploymentDraftResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getDeploymentDraftLockWithOptions(namespace: string, request: GetDeploymentDraftLockRequest, headers: GetDeploymentDraftLockHeaders, runtime: $dara.RuntimeOptions): Promise<GetDeploymentDraftLockResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deploymentDraftId)) {
      query["deploymentDraftId"] = request.deploymentDraftId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeploymentDraftLock",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployment-drafts/getLock`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetDeploymentDraftLockResponse>(await this.callApi(params, req, runtime), new GetDeploymentDraftLockResponse({}));
    } else {
      return $dara.cast<GetDeploymentDraftLockResponse>(await this.execute(params, req, runtime), new GetDeploymentDraftLockResponse({}));
    }

  }

  /**
   * get deploymentDraft lock
   * 
   * @param request - GetDeploymentDraftLockRequest
   * @returns GetDeploymentDraftLockResponse
   */
  async getDeploymentDraftLock(namespace: string, request: GetDeploymentDraftLockRequest): Promise<GetDeploymentDraftLockResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new GetDeploymentDraftLockHeaders({ });
    return await this.getDeploymentDraftLockWithOptions(namespace, request, headers, runtime);
  }

  /**
   * 获取运行事件
   * 
   * @param request - GetEventsRequest
   * @param headers - GetEventsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEventsResponse
   */
  async getEventsWithOptions(namespace: string, request: GetEventsRequest, headers: GetEventsHeaders, runtime: $dara.RuntimeOptions): Promise<GetEventsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deploymentId)) {
      query["deploymentId"] = request.deploymentId;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEvents",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/events`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetEventsResponse>(await this.callApi(params, req, runtime), new GetEventsResponse({}));
    } else {
      return $dara.cast<GetEventsResponse>(await this.execute(params, req, runtime), new GetEventsResponse({}));
    }

  }

  /**
   * 获取运行事件
   * 
   * @param request - GetEventsRequest
   * @returns GetEventsResponse
   */
  async getEvents(namespace: string, request: GetEventsRequest): Promise<GetEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new GetEventsHeaders({ });
    return await this.getEventsWithOptions(namespace, request, headers, runtime);
  }

  /**
   * get a folder
   * 
   * @param request - GetFolderRequest
   * @param headers - GetFolderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFolderResponse
   */
  async getFolderWithOptions(namespace: string, request: GetFolderRequest, headers: GetFolderHeaders, runtime: $dara.RuntimeOptions): Promise<GetFolderResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.folderId)) {
      query["folderId"] = request.folderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFolder",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/folder`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetFolderResponse>(await this.callApi(params, req, runtime), new GetFolderResponse({}));
    } else {
      return $dara.cast<GetFolderResponse>(await this.execute(params, req, runtime), new GetFolderResponse({}));
    }

  }

  /**
   * get a folder
   * 
   * @param request - GetFolderRequest
   * @returns GetFolderResponse
   */
  async getFolder(namespace: string, request: GetFolderRequest): Promise<GetFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getGenerateResourcePlanResultWithOptions(namespace: string, ticketId: string, headers: GetGenerateResourcePlanResultHeaders, runtime: $dara.RuntimeOptions): Promise<GetGenerateResourcePlanResultResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGenerateResourcePlanResult",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployments/tickets/${$dara.URL.percentEncode(ticketId)}/resource-plan%3AasyncGenerate`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetGenerateResourcePlanResultResponse>(await this.callApi(params, req, runtime), new GetGenerateResourcePlanResultResponse({}));
    } else {
      return $dara.cast<GetGenerateResourcePlanResultResponse>(await this.execute(params, req, runtime), new GetGenerateResourcePlanResultResponse({}));
    }

  }

  /**
   * Obtains the asynchronous generation result of fine-grained resources based on the ID of the ticket that applies for an asynchronous generation.
   * @returns GetGenerateResourcePlanResultResponse
   */
  async getGenerateResourcePlanResult(namespace: string, ticketId: string): Promise<GetGenerateResourcePlanResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getHotUpdateJobResultWithOptions(namespace: string, jobHotUpdateId: string, headers: GetHotUpdateJobResultHeaders, runtime: $dara.RuntimeOptions): Promise<GetHotUpdateJobResultResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotUpdateJobResult",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/jobs/hot-updates/${$dara.URL.percentEncode(jobHotUpdateId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetHotUpdateJobResultResponse>(await this.callApi(params, req, runtime), new GetHotUpdateJobResultResponse({}));
    } else {
      return $dara.cast<GetHotUpdateJobResultResponse>(await this.execute(params, req, runtime), new GetHotUpdateJobResultResponse({}));
    }

  }

  /**
   * 查询动态更新结果
   * @returns GetHotUpdateJobResultResponse
   */
  async getHotUpdateJobResult(namespace: string, jobHotUpdateId: string): Promise<GetHotUpdateJobResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getJobWithOptions(namespace: string, jobId: string, headers: GetJobHeaders, runtime: $dara.RuntimeOptions): Promise<GetJobResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJob",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/jobs/${$dara.URL.percentEncode(jobId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetJobResponse>(await this.callApi(params, req, runtime), new GetJobResponse({}));
    } else {
      return $dara.cast<GetJobResponse>(await this.execute(params, req, runtime), new GetJobResponse({}));
    }

  }

  /**
   * Obtains the details of a job.
   * @returns GetJobResponse
   */
  async getJob(namespace: string, jobId: string): Promise<GetJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new GetJobHeaders({ });
    return await this.getJobWithOptions(namespace, jobId, headers, runtime);
  }

  /**
   * 获取作业诊断信息
   * 
   * @param headers - GetJobDiagnosisHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobDiagnosisResponse
   */
  async getJobDiagnosisWithOptions(namespace: string, deploymentId: string, jobId: string, headers: GetJobDiagnosisHeaders, runtime: $dara.RuntimeOptions): Promise<GetJobDiagnosisResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJobDiagnosis",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployments/${$dara.URL.percentEncode(deploymentId)}/jobs/${$dara.URL.percentEncode(jobId)}/job-diagnoses/lite`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetJobDiagnosisResponse>(await this.callApi(params, req, runtime), new GetJobDiagnosisResponse({}));
    } else {
      return $dara.cast<GetJobDiagnosisResponse>(await this.execute(params, req, runtime), new GetJobDiagnosisResponse({}));
    }

  }

  /**
   * 获取作业诊断信息
   * @returns GetJobDiagnosisResponse
   */
  async getJobDiagnosis(namespace: string, deploymentId: string, jobId: string): Promise<GetJobDiagnosisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new GetJobDiagnosisHeaders({ });
    return await this.getJobDiagnosisWithOptions(namespace, deploymentId, jobId, headers, runtime);
  }

  /**
   * Obtains the latest startup logs of a job.
   * 
   * @param headers - GetLatestJobStartLogHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLatestJobStartLogResponse
   */
  async getLatestJobStartLogWithOptions(namespace: string, deploymentId: string, headers: GetLatestJobStartLogHeaders, runtime: $dara.RuntimeOptions): Promise<GetLatestJobStartLogResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLatestJobStartLog",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployments/${$dara.URL.percentEncode(deploymentId)}/latest_jobmanager_start_log`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetLatestJobStartLogResponse>(await this.callApi(params, req, runtime), new GetLatestJobStartLogResponse({}));
    } else {
      return $dara.cast<GetLatestJobStartLogResponse>(await this.execute(params, req, runtime), new GetLatestJobStartLogResponse({}));
    }

  }

  /**
   * Obtains the latest startup logs of a job.
   * @returns GetLatestJobStartLogResponse
   */
  async getLatestJobStartLog(namespace: string, deploymentId: string): Promise<GetLatestJobStartLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getLineageInfoWithOptions(request: GetLineageInfoRequest, headers: GetLineageInfoHeaders, runtime: $dara.RuntimeOptions): Promise<GetLineageInfoResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetLineageInfoResponse>(await this.callApi(params, req, runtime), new GetLineageInfoResponse({}));
    } else {
      return $dara.cast<GetLineageInfoResponse>(await this.execute(params, req, runtime), new GetLineageInfoResponse({}));
    }

  }

  /**
   * Obtains the lineage information of a deployment.
   * 
   * @param request - GetLineageInfoRequest
   * @returns GetLineageInfoResponse
   */
  async getLineageInfo(request: GetLineageInfoRequest): Promise<GetLineageInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getMemberWithOptions(namespace: string, member: string, headers: GetMemberHeaders, runtime: $dara.RuntimeOptions): Promise<GetMemberResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMember",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/gateway/v2/namespaces/${$dara.URL.percentEncode(namespace)}/members/${$dara.URL.percentEncode(member)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetMemberResponse>(await this.callApi(params, req, runtime), new GetMemberResponse({}));
    } else {
      return $dara.cast<GetMemberResponse>(await this.execute(params, req, runtime), new GetMemberResponse({}));
    }

  }

  /**
   * Queries the permissions of a member.
   * @returns GetMemberResponse
   */
  async getMember(namespace: string, member: string): Promise<GetMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getSavepointWithOptions(namespace: string, savepointId: string, headers: GetSavepointHeaders, runtime: $dara.RuntimeOptions): Promise<GetSavepointResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSavepoint",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/savepoints/${$dara.URL.percentEncode(savepointId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetSavepointResponse>(await this.callApi(params, req, runtime), new GetSavepointResponse({}));
    } else {
      return $dara.cast<GetSavepointResponse>(await this.execute(params, req, runtime), new GetSavepointResponse({}));
    }

  }

  /**
   * Queries details of a savepoint and checkpoint.
   * @returns GetSavepointResponse
   */
  async getSavepoint(namespace: string, savepointId: string): Promise<GetSavepointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new GetSavepointHeaders({ });
    return await this.getSavepointWithOptions(namespace, savepointId, headers, runtime);
  }

  /**
   * 获取session集群
   * 
   * @param headers - GetSessionClusterHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSessionClusterResponse
   */
  async getSessionClusterWithOptions(namespace: string, sessionClusterName: string, headers: GetSessionClusterHeaders, runtime: $dara.RuntimeOptions): Promise<GetSessionClusterResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSessionCluster",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/sessionclusters/${$dara.URL.percentEncode(sessionClusterName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetSessionClusterResponse>(await this.callApi(params, req, runtime), new GetSessionClusterResponse({}));
    } else {
      return $dara.cast<GetSessionClusterResponse>(await this.execute(params, req, runtime), new GetSessionClusterResponse({}));
    }

  }

  /**
   * 获取session集群
   * @returns GetSessionClusterResponse
   */
  async getSessionCluster(namespace: string, sessionClusterName: string): Promise<GetSessionClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new GetSessionClusterHeaders({ });
    return await this.getSessionClusterWithOptions(namespace, sessionClusterName, headers, runtime);
  }

  /**
   * 获取table
   * 
   * @param request - GetTablesRequest
   * @param headers - GetTablesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTablesResponse
   */
  async getTablesWithOptions(namespace: string, catalogName: string, databaseName: string, request: GetTablesRequest, headers: GetTablesHeaders, runtime: $dara.RuntimeOptions): Promise<GetTablesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tableName)) {
      query["tableName"] = request.tableName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTables",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/catalogs/${$dara.URL.percentEncode(catalogName)}/databases/${$dara.URL.percentEncode(databaseName)}/tables`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetTablesResponse>(await this.callApi(params, req, runtime), new GetTablesResponse({}));
    } else {
      return $dara.cast<GetTablesResponse>(await this.execute(params, req, runtime), new GetTablesResponse({}));
    }

  }

  /**
   * 获取table
   * 
   * @param request - GetTablesRequest
   * @returns GetTablesResponse
   */
  async getTables(namespace: string, catalogName: string, databaseName: string, request: GetTablesRequest): Promise<GetTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getUdfArtifactsWithOptions(namespace: string, request: GetUdfArtifactsRequest, headers: GetUdfArtifactsHeaders, runtime: $dara.RuntimeOptions): Promise<GetUdfArtifactsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.udfArtifactName)) {
      query["udfArtifactName"] = request.udfArtifactName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUdfArtifacts",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/udfartifacts`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetUdfArtifactsResponse>(await this.callApi(params, req, runtime), new GetUdfArtifactsResponse({}));
    } else {
      return $dara.cast<GetUdfArtifactsResponse>(await this.execute(params, req, runtime), new GetUdfArtifactsResponse({}));
    }

  }

  /**
   * Obtains the details of the JAR or Python file that corresponds to the user-defined function (UDF) that you upload and create.
   * 
   * @param request - GetUdfArtifactsRequest
   * @returns GetUdfArtifactsResponse
   */
  async getUdfArtifacts(namespace: string, request: GetUdfArtifactsRequest): Promise<GetUdfArtifactsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async hotUpdateJobWithOptions(namespace: string, jobId: string, headers: HotUpdateJobHeaders, runtime: $dara.RuntimeOptions): Promise<HotUpdateJobResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "HotUpdateJob",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/jobs/${$dara.URL.percentEncode(jobId)}%3AhotUpdate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<HotUpdateJobResponse>(await this.callApi(params, req, runtime), new HotUpdateJobResponse({}));
    } else {
      return $dara.cast<HotUpdateJobResponse>(await this.execute(params, req, runtime), new HotUpdateJobResponse({}));
    }

  }

  /**
   * Dynamically updates parameters or resources of a deployment that is running.
   * @returns HotUpdateJobResponse
   */
  async hotUpdateJob(namespace: string, jobId: string): Promise<HotUpdateJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listCustomConnectorsWithOptions(namespace: string, headers: ListCustomConnectorsHeaders, runtime: $dara.RuntimeOptions): Promise<ListCustomConnectorsResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCustomConnectors",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/connectors`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListCustomConnectorsResponse>(await this.callApi(params, req, runtime), new ListCustomConnectorsResponse({}));
    } else {
      return $dara.cast<ListCustomConnectorsResponse>(await this.execute(params, req, runtime), new ListCustomConnectorsResponse({}));
    }

  }

  /**
   * Obtains a list of existing custom connectors.
   * @returns ListCustomConnectorsResponse
   */
  async listCustomConnectors(namespace: string): Promise<ListCustomConnectorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listDeploymentDraftsWithOptions(namespace: string, request: ListDeploymentDraftsRequest, headers: ListDeploymentDraftsHeaders, runtime: $dara.RuntimeOptions): Promise<ListDeploymentDraftsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDeploymentDrafts",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployment-drafts`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListDeploymentDraftsResponse>(await this.callApi(params, req, runtime), new ListDeploymentDraftsResponse({}));
    } else {
      return $dara.cast<ListDeploymentDraftsResponse>(await this.execute(params, req, runtime), new ListDeploymentDraftsResponse({}));
    }

  }

  /**
   * list deploymentDrafts
   * 
   * @param request - ListDeploymentDraftsRequest
   * @returns ListDeploymentDraftsResponse
   */
  async listDeploymentDrafts(namespace: string, request: ListDeploymentDraftsRequest): Promise<ListDeploymentDraftsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listDeploymentTargetsWithOptions(namespace: string, request: ListDeploymentTargetsRequest, headers: ListDeploymentTargetsHeaders, runtime: $dara.RuntimeOptions): Promise<ListDeploymentTargetsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDeploymentTargets",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployment-targets`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListDeploymentTargetsResponse>(await this.callApi(params, req, runtime), new ListDeploymentTargetsResponse({}));
    } else {
      return $dara.cast<ListDeploymentTargetsResponse>(await this.execute(params, req, runtime), new ListDeploymentTargetsResponse({}));
    }

  }

  /**
   * Obtains a list of clusters in which deployments can be deployed. The cluster can be a session cluster or a per-job cluster.
   * 
   * @param request - ListDeploymentTargetsRequest
   * @returns ListDeploymentTargetsResponse
   */
  async listDeploymentTargets(namespace: string, request: ListDeploymentTargetsRequest): Promise<ListDeploymentTargetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listDeploymentsWithOptions(namespace: string, request: ListDeploymentsRequest, headers: ListDeploymentsHeaders, runtime: $dara.RuntimeOptions): Promise<ListDeploymentsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.creator)) {
      query["creator"] = request.creator;
    }

    if (!$dara.isNull(request.executionMode)) {
      query["executionMode"] = request.executionMode;
    }

    if (!$dara.isNull(request.labelKey)) {
      query["labelKey"] = request.labelKey;
    }

    if (!$dara.isNull(request.labelValueArray)) {
      query["labelValueArray"] = request.labelValueArray;
    }

    if (!$dara.isNull(request.modifier)) {
      query["modifier"] = request.modifier;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortName)) {
      query["sortName"] = request.sortName;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDeployments",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployments`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListDeploymentsResponse>(await this.callApi(params, req, runtime), new ListDeploymentsResponse({}));
    } else {
      return $dara.cast<ListDeploymentsResponse>(await this.execute(params, req, runtime), new ListDeploymentsResponse({}));
    }

  }

  /**
   * Obtains information about all deployments.
   * 
   * @param request - ListDeploymentsRequest
   * @returns ListDeploymentsResponse
   */
  async listDeployments(namespace: string, request: ListDeploymentsRequest): Promise<ListDeploymentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listEditableNamespaceWithOptions(request: ListEditableNamespaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListEditableNamespaceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListEditableNamespaceResponse>(await this.callApi(params, req, runtime), new ListEditableNamespaceResponse({}));
    } else {
      return $dara.cast<ListEditableNamespaceResponse>(await this.execute(params, req, runtime), new ListEditableNamespaceResponse({}));
    }

  }

  /**
   * 列出有编辑权限的项目空间。
   * 
   * @param request - ListEditableNamespaceRequest
   * @returns ListEditableNamespaceResponse
   */
  async listEditableNamespace(request: ListEditableNamespaceRequest): Promise<ListEditableNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listEngineVersionMetadataWithOptions(headers: ListEngineVersionMetadataHeaders, runtime: $dara.RuntimeOptions): Promise<ListEngineVersionMetadataResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListEngineVersionMetadataResponse>(await this.callApi(params, req, runtime), new ListEngineVersionMetadataResponse({}));
    } else {
      return $dara.cast<ListEngineVersionMetadataResponse>(await this.execute(params, req, runtime), new ListEngineVersionMetadataResponse({}));
    }

  }

  /**
   * Obtains a list of engine versions that are supported by Realtime Compute for Apache Flink.
   * @returns ListEngineVersionMetadataResponse
   */
  async listEngineVersionMetadata(): Promise<ListEngineVersionMetadataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listJobsWithOptions(namespace: string, request: ListJobsRequest, headers: ListJobsHeaders, runtime: $dara.RuntimeOptions): Promise<ListJobsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deploymentId)) {
      query["deploymentId"] = request.deploymentId;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortName)) {
      query["sortName"] = request.sortName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobs",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/jobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListJobsResponse>(await this.callApi(params, req, runtime), new ListJobsResponse({}));
    } else {
      return $dara.cast<ListJobsResponse>(await this.execute(params, req, runtime), new ListJobsResponse({}));
    }

  }

  /**
   * Queries the information about all jobs in a deployment.
   * 
   * @param request - ListJobsRequest
   * @returns ListJobsResponse
   */
  async listJobs(namespace: string, request: ListJobsRequest): Promise<ListJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listMembersWithOptions(namespace: string, request: ListMembersRequest, headers: ListMembersHeaders, runtime: $dara.RuntimeOptions): Promise<ListMembersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMembers",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/gateway/v2/namespaces/${$dara.URL.percentEncode(namespace)}/members`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListMembersResponse>(await this.callApi(params, req, runtime), new ListMembersResponse({}));
    } else {
      return $dara.cast<ListMembersResponse>(await this.execute(params, req, runtime), new ListMembersResponse({}));
    }

  }

  /**
   * Queries the mappings between the ID and permissions of a member in a specific namespace.
   * 
   * @param request - ListMembersRequest
   * @returns ListMembersResponse
   */
  async listMembers(namespace: string, request: ListMembersRequest): Promise<ListMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listSavepointsWithOptions(namespace: string, request: ListSavepointsRequest, headers: ListSavepointsHeaders, runtime: $dara.RuntimeOptions): Promise<ListSavepointsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deploymentId)) {
      query["deploymentId"] = request.deploymentId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["jobId"] = request.jobId;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSavepoints",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/savepoints`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListSavepointsResponse>(await this.callApi(params, req, runtime), new ListSavepointsResponse({}));
    } else {
      return $dara.cast<ListSavepointsResponse>(await this.execute(params, req, runtime), new ListSavepointsResponse({}));
    }

  }

  /**
   * Obtains a list of savepoints or checkpoints.
   * 
   * @param request - ListSavepointsRequest
   * @returns ListSavepointsResponse
   */
  async listSavepoints(namespace: string, request: ListSavepointsRequest): Promise<ListSavepointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new ListSavepointsHeaders({ });
    return await this.listSavepointsWithOptions(namespace, request, headers, runtime);
  }

  /**
   * 列表定时执行计划
   * 
   * @param request - ListScheduledPlanRequest
   * @param headers - ListScheduledPlanHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScheduledPlanResponse
   */
  async listScheduledPlanWithOptions(namespace: string, request: ListScheduledPlanRequest, headers: ListScheduledPlanHeaders, runtime: $dara.RuntimeOptions): Promise<ListScheduledPlanResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deploymentId)) {
      query["deploymentId"] = request.deploymentId;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListScheduledPlan",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/scheduled-plans`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListScheduledPlanResponse>(await this.callApi(params, req, runtime), new ListScheduledPlanResponse({}));
    } else {
      return $dara.cast<ListScheduledPlanResponse>(await this.execute(params, req, runtime), new ListScheduledPlanResponse({}));
    }

  }

  /**
   * 列表定时执行计划
   * 
   * @param request - ListScheduledPlanRequest
   * @returns ListScheduledPlanResponse
   */
  async listScheduledPlan(namespace: string, request: ListScheduledPlanRequest): Promise<ListScheduledPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new ListScheduledPlanHeaders({ });
    return await this.listScheduledPlanWithOptions(namespace, request, headers, runtime);
  }

  /**
   * 获取作业资源变更历史
   * 
   * @param request - ListScheduledPlanExecutedHistoryRequest
   * @param headers - ListScheduledPlanExecutedHistoryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScheduledPlanExecutedHistoryResponse
   */
  async listScheduledPlanExecutedHistoryWithOptions(namespace: string, request: ListScheduledPlanExecutedHistoryRequest, headers: ListScheduledPlanExecutedHistoryHeaders, runtime: $dara.RuntimeOptions): Promise<ListScheduledPlanExecutedHistoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deploymentId)) {
      query["deploymentId"] = request.deploymentId;
    }

    if (!$dara.isNull(request.origin)) {
      query["origin"] = request.origin;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListScheduledPlanExecutedHistory",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/job-resource-upgradings`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListScheduledPlanExecutedHistoryResponse>(await this.callApi(params, req, runtime), new ListScheduledPlanExecutedHistoryResponse({}));
    } else {
      return $dara.cast<ListScheduledPlanExecutedHistoryResponse>(await this.execute(params, req, runtime), new ListScheduledPlanExecutedHistoryResponse({}));
    }

  }

  /**
   * 获取作业资源变更历史
   * 
   * @param request - ListScheduledPlanExecutedHistoryRequest
   * @returns ListScheduledPlanExecutedHistoryResponse
   */
  async listScheduledPlanExecutedHistory(namespace: string, request: ListScheduledPlanExecutedHistoryRequest): Promise<ListScheduledPlanExecutedHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new ListScheduledPlanExecutedHistoryHeaders({ });
    return await this.listScheduledPlanExecutedHistoryWithOptions(namespace, request, headers, runtime);
  }

  /**
   * 列举session集群
   * 
   * @param headers - ListSessionClustersHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSessionClustersResponse
   */
  async listSessionClustersWithOptions(namespace: string, headers: ListSessionClustersHeaders, runtime: $dara.RuntimeOptions): Promise<ListSessionClustersResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSessionClusters",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/sessionclusters`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListSessionClustersResponse>(await this.callApi(params, req, runtime), new ListSessionClustersResponse({}));
    } else {
      return $dara.cast<ListSessionClustersResponse>(await this.execute(params, req, runtime), new ListSessionClustersResponse({}));
    }

  }

  /**
   * 列举session集群
   * @returns ListSessionClustersResponse
   */
  async listSessionClusters(namespace: string): Promise<ListSessionClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new ListSessionClustersHeaders({ });
    return await this.listSessionClustersWithOptions(namespace, headers, runtime);
  }

  /**
   * Obtains a list of variables.
   * 
   * @param request - ListVariablesRequest
   * @param headers - ListVariablesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVariablesResponse
   */
  async listVariablesWithOptions(namespace: string, request: ListVariablesRequest, headers: ListVariablesHeaders, runtime: $dara.RuntimeOptions): Promise<ListVariablesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVariables",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/variables`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListVariablesResponse>(await this.callApi(params, req, runtime), new ListVariablesResponse({}));
    } else {
      return $dara.cast<ListVariablesResponse>(await this.execute(params, req, runtime), new ListVariablesResponse({}));
    }

  }

  /**
   * Obtains a list of variables.
   * 
   * @param request - ListVariablesRequest
   * @returns ListVariablesResponse
   */
  async listVariables(namespace: string, request: ListVariablesRequest): Promise<ListVariablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async registerCustomConnectorWithOptions(namespace: string, request: RegisterCustomConnectorRequest, headers: RegisterCustomConnectorHeaders, runtime: $dara.RuntimeOptions): Promise<RegisterCustomConnectorResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jarUrl)) {
      query["jarUrl"] = request.jarUrl;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RegisterCustomConnector",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/connectors%3Aregister`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RegisterCustomConnectorResponse>(await this.callApi(params, req, runtime), new RegisterCustomConnectorResponse({}));
    } else {
      return $dara.cast<RegisterCustomConnectorResponse>(await this.execute(params, req, runtime), new RegisterCustomConnectorResponse({}));
    }

  }

  /**
   * Registers a custom connector in a namespace. The registered custom connector can be used in SQL statements.
   * 
   * @param request - RegisterCustomConnectorRequest
   * @returns RegisterCustomConnectorResponse
   */
  async registerCustomConnector(namespace: string, request: RegisterCustomConnectorRequest): Promise<RegisterCustomConnectorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async registerUdfFunctionWithOptions(namespace: string, request: RegisterUdfFunctionRequest, headers: RegisterUdfFunctionHeaders, runtime: $dara.RuntimeOptions): Promise<RegisterUdfFunctionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.className)) {
      query["className"] = request.className;
    }

    if (!$dara.isNull(request.functionName)) {
      query["functionName"] = request.functionName;
    }

    if (!$dara.isNull(request.udfArtifactName)) {
      query["udfArtifactName"] = request.udfArtifactName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RegisterUdfFunction",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/udfartifacts/function%3AregisterUdfFunction`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RegisterUdfFunctionResponse>(await this.callApi(params, req, runtime), new RegisterUdfFunctionResponse({}));
    } else {
      return $dara.cast<RegisterUdfFunctionResponse>(await this.execute(params, req, runtime), new RegisterUdfFunctionResponse({}));
    }

  }

  /**
   * Registers specific or all of the user-defined functions (UDFs) that are parsed from the JAR files. The registered functions can be used in SQL statements.
   * 
   * @param request - RegisterUdfFunctionRequest
   * @returns RegisterUdfFunctionResponse
   */
  async registerUdfFunction(namespace: string, request: RegisterUdfFunctionRequest): Promise<RegisterUdfFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async startJobWithOptions(namespace: string, request: StartJobRequest, headers: StartJobHeaders, runtime: $dara.RuntimeOptions): Promise<StartJobResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartJob",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/jobs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartJobResponse>(await this.callApi(params, req, runtime), new StartJobResponse({}));
    } else {
      return $dara.cast<StartJobResponse>(await this.execute(params, req, runtime), new StartJobResponse({}));
    }

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
    let runtime = new $dara.RuntimeOptions({ });
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
  async startJobWithParamsWithOptions(namespace: string, request: StartJobWithParamsRequest, headers: StartJobWithParamsHeaders, runtime: $dara.RuntimeOptions): Promise<StartJobWithParamsResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartJobWithParams",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/jobs%3Astart`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartJobWithParamsResponse>(await this.callApi(params, req, runtime), new StartJobWithParamsResponse({}));
    } else {
      return $dara.cast<StartJobWithParamsResponse>(await this.execute(params, req, runtime), new StartJobWithParamsResponse({}));
    }

  }

  /**
   * Starts a job.
   * 
   * @param request - StartJobWithParamsRequest
   * @returns StartJobWithParamsResponse
   */
  async startJobWithParams(namespace: string, request: StartJobWithParamsRequest): Promise<StartJobWithParamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new StartJobWithParamsHeaders({ });
    return await this.startJobWithParamsWithOptions(namespace, request, headers, runtime);
  }

  /**
   * 启动session集群
   * 
   * @param headers - StartSessionClusterHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartSessionClusterResponse
   */
  async startSessionClusterWithOptions(namespace: string, sessionClusterName: string, headers: StartSessionClusterHeaders, runtime: $dara.RuntimeOptions): Promise<StartSessionClusterResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "StartSessionCluster",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/sessionclusters/${$dara.URL.percentEncode(sessionClusterName)}%3Astart`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartSessionClusterResponse>(await this.callApi(params, req, runtime), new StartSessionClusterResponse({}));
    } else {
      return $dara.cast<StartSessionClusterResponse>(await this.execute(params, req, runtime), new StartSessionClusterResponse({}));
    }

  }

  /**
   * 启动session集群
   * @returns StartSessionClusterResponse
   */
  async startSessionCluster(namespace: string, sessionClusterName: string): Promise<StartSessionClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new StartSessionClusterHeaders({ });
    return await this.startSessionClusterWithOptions(namespace, sessionClusterName, headers, runtime);
  }

  /**
   * 停止应用执行定时计划
   * 
   * @param headers - StopApplyScheduledPlanHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopApplyScheduledPlanResponse
   */
  async stopApplyScheduledPlanWithOptions(namespace: string, scheduledPlanId: string, headers: StopApplyScheduledPlanHeaders, runtime: $dara.RuntimeOptions): Promise<StopApplyScheduledPlanResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopApplyScheduledPlan",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/scheduled-plans/${$dara.URL.percentEncode(scheduledPlanId)}%3Astop`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopApplyScheduledPlanResponse>(await this.callApi(params, req, runtime), new StopApplyScheduledPlanResponse({}));
    } else {
      return $dara.cast<StopApplyScheduledPlanResponse>(await this.execute(params, req, runtime), new StopApplyScheduledPlanResponse({}));
    }

  }

  /**
   * 停止应用执行定时计划
   * @returns StopApplyScheduledPlanResponse
   */
  async stopApplyScheduledPlan(namespace: string, scheduledPlanId: string): Promise<StopApplyScheduledPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new StopApplyScheduledPlanHeaders({ });
    return await this.stopApplyScheduledPlanWithOptions(namespace, scheduledPlanId, headers, runtime);
  }

  /**
   * Stops a job.
   * 
   * @param request - StopJobRequest
   * @param headers - StopJobHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopJobResponse
   */
  async stopJobWithOptions(namespace: string, jobId: string, request: StopJobRequest, headers: StopJobHeaders, runtime: $dara.RuntimeOptions): Promise<StopJobResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopJob",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/jobs/${$dara.URL.percentEncode(jobId)}%3Astop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopJobResponse>(await this.callApi(params, req, runtime), new StopJobResponse({}));
    } else {
      return $dara.cast<StopJobResponse>(await this.execute(params, req, runtime), new StopJobResponse({}));
    }

  }

  /**
   * Stops a job.
   * 
   * @param request - StopJobRequest
   * @returns StopJobResponse
   */
  async stopJob(namespace: string, jobId: string, request: StopJobRequest): Promise<StopJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new StopJobHeaders({ });
    return await this.stopJobWithOptions(namespace, jobId, request, headers, runtime);
  }

  /**
   * 停止session集群
   * 
   * @param headers - StopSessionClusterHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopSessionClusterResponse
   */
  async stopSessionClusterWithOptions(namespace: string, sessionClusterName: string, headers: StopSessionClusterHeaders, runtime: $dara.RuntimeOptions): Promise<StopSessionClusterResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopSessionCluster",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/sessionclusters/${$dara.URL.percentEncode(sessionClusterName)}%3Astop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopSessionClusterResponse>(await this.callApi(params, req, runtime), new StopSessionClusterResponse({}));
    } else {
      return $dara.cast<StopSessionClusterResponse>(await this.execute(params, req, runtime), new StopSessionClusterResponse({}));
    }

  }

  /**
   * 停止session集群
   * @returns StopSessionClusterResponse
   */
  async stopSessionCluster(namespace: string, sessionClusterName: string): Promise<StopSessionClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new StopSessionClusterHeaders({ });
    return await this.stopSessionClusterWithOptions(namespace, sessionClusterName, headers, runtime);
  }

  /**
   * Updates information about a deployment.
   * 
   * @param request - UpdateDeploymentRequest
   * @param headers - UpdateDeploymentHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDeploymentResponse
   */
  async updateDeploymentWithOptions(namespace: string, deploymentId: string, request: UpdateDeploymentRequest, headers: UpdateDeploymentHeaders, runtime: $dara.RuntimeOptions): Promise<UpdateDeploymentResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDeployment",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployments/${$dara.URL.percentEncode(deploymentId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateDeploymentResponse>(await this.callApi(params, req, runtime), new UpdateDeploymentResponse({}));
    } else {
      return $dara.cast<UpdateDeploymentResponse>(await this.execute(params, req, runtime), new UpdateDeploymentResponse({}));
    }

  }

  /**
   * Updates information about a deployment.
   * 
   * @param request - UpdateDeploymentRequest
   * @returns UpdateDeploymentResponse
   */
  async updateDeployment(namespace: string, deploymentId: string, request: UpdateDeploymentRequest): Promise<UpdateDeploymentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async updateDeploymentDraftWithOptions(namespace: string, deploymentDraftId: string, request: UpdateDeploymentDraftRequest, headers: UpdateDeploymentDraftHeaders, runtime: $dara.RuntimeOptions): Promise<UpdateDeploymentDraftResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDeploymentDraft",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployment-drafts/${$dara.URL.percentEncode(deploymentDraftId)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateDeploymentDraftResponse>(await this.callApi(params, req, runtime), new UpdateDeploymentDraftResponse({}));
    } else {
      return $dara.cast<UpdateDeploymentDraftResponse>(await this.execute(params, req, runtime), new UpdateDeploymentDraftResponse({}));
    }

  }

  /**
   * update a deploymentDraft
   * 
   * @param request - UpdateDeploymentDraftRequest
   * @returns UpdateDeploymentDraftResponse
   */
  async updateDeploymentDraft(namespace: string, deploymentDraftId: string, request: UpdateDeploymentDraftRequest): Promise<UpdateDeploymentDraftResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new UpdateDeploymentDraftHeaders({ });
    return await this.updateDeploymentDraftWithOptions(namespace, deploymentDraftId, request, headers, runtime);
  }

  /**
   * 修改deploymentTarget
   * 
   * @param request - UpdateDeploymentTargetRequest
   * @param headers - UpdateDeploymentTargetHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDeploymentTargetResponse
   */
  async updateDeploymentTargetWithOptions(namespace: string, deploymentTargetName: string, request: UpdateDeploymentTargetRequest, headers: UpdateDeploymentTargetHeaders, runtime: $dara.RuntimeOptions): Promise<UpdateDeploymentTargetResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDeploymentTarget",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployment-targets/${$dara.URL.percentEncode(deploymentTargetName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateDeploymentTargetResponse>(await this.callApi(params, req, runtime), new UpdateDeploymentTargetResponse({}));
    } else {
      return $dara.cast<UpdateDeploymentTargetResponse>(await this.execute(params, req, runtime), new UpdateDeploymentTargetResponse({}));
    }

  }

  /**
   * 修改deploymentTarget
   * 
   * @param request - UpdateDeploymentTargetRequest
   * @returns UpdateDeploymentTargetResponse
   */
  async updateDeploymentTarget(namespace: string, deploymentTargetName: string, request: UpdateDeploymentTargetRequest): Promise<UpdateDeploymentTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new UpdateDeploymentTargetHeaders({ });
    return await this.updateDeploymentTargetWithOptions(namespace, deploymentTargetName, request, headers, runtime);
  }

  /**
   * update a folder
   * 
   * @param request - UpdateFolderRequest
   * @param headers - UpdateFolderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFolderResponse
   */
  async updateFolderWithOptions(namespace: string, folderId: string, request: UpdateFolderRequest, headers: UpdateFolderHeaders, runtime: $dara.RuntimeOptions): Promise<UpdateFolderResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFolder",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/folder/${$dara.URL.percentEncode(folderId)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateFolderResponse>(await this.callApi(params, req, runtime), new UpdateFolderResponse({}));
    } else {
      return $dara.cast<UpdateFolderResponse>(await this.execute(params, req, runtime), new UpdateFolderResponse({}));
    }

  }

  /**
   * update a folder
   * 
   * @param request - UpdateFolderRequest
   * @returns UpdateFolderResponse
   */
  async updateFolder(namespace: string, folderId: string, request: UpdateFolderRequest): Promise<UpdateFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async updateMemberWithOptions(namespace: string, request: UpdateMemberRequest, headers: UpdateMemberHeaders, runtime: $dara.RuntimeOptions): Promise<UpdateMemberResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMember",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/gateway/v2/namespaces/${$dara.URL.percentEncode(namespace)}/members`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateMemberResponse>(await this.callApi(params, req, runtime), new UpdateMemberResponse({}));
    } else {
      return $dara.cast<UpdateMemberResponse>(await this.execute(params, req, runtime), new UpdateMemberResponse({}));
    }

  }

  /**
   * Updates the permissions of one or more members in a specific namespace.
   * 
   * @param request - UpdateMemberRequest
   * @returns UpdateMemberResponse
   */
  async updateMember(namespace: string, request: UpdateMemberRequest): Promise<UpdateMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new UpdateMemberHeaders({ });
    return await this.updateMemberWithOptions(namespace, request, headers, runtime);
  }

  /**
   * 更新定时执行计划
   * 
   * @param request - UpdateScheduledPlanRequest
   * @param headers - UpdateScheduledPlanHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateScheduledPlanResponse
   */
  async updateScheduledPlanWithOptions(namespace: string, scheduledPlanId: string, request: UpdateScheduledPlanRequest, headers: UpdateScheduledPlanHeaders, runtime: $dara.RuntimeOptions): Promise<UpdateScheduledPlanResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateScheduledPlan",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/scheduled-plans/${$dara.URL.percentEncode(scheduledPlanId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateScheduledPlanResponse>(await this.callApi(params, req, runtime), new UpdateScheduledPlanResponse({}));
    } else {
      return $dara.cast<UpdateScheduledPlanResponse>(await this.execute(params, req, runtime), new UpdateScheduledPlanResponse({}));
    }

  }

  /**
   * 更新定时执行计划
   * 
   * @param request - UpdateScheduledPlanRequest
   * @returns UpdateScheduledPlanResponse
   */
  async updateScheduledPlan(namespace: string, scheduledPlanId: string, request: UpdateScheduledPlanRequest): Promise<UpdateScheduledPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new UpdateScheduledPlanHeaders({ });
    return await this.updateScheduledPlanWithOptions(namespace, scheduledPlanId, request, headers, runtime);
  }

  /**
   * 更新session集群
   * 
   * @param request - UpdateSessionClusterRequest
   * @param headers - UpdateSessionClusterHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSessionClusterResponse
   */
  async updateSessionClusterWithOptions(namespace: string, sessionClusterName: string, request: UpdateSessionClusterRequest, headers: UpdateSessionClusterHeaders, runtime: $dara.RuntimeOptions): Promise<UpdateSessionClusterResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSessionCluster",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/sessionclusters/${$dara.URL.percentEncode(sessionClusterName)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateSessionClusterResponse>(await this.callApi(params, req, runtime), new UpdateSessionClusterResponse({}));
    } else {
      return $dara.cast<UpdateSessionClusterResponse>(await this.execute(params, req, runtime), new UpdateSessionClusterResponse({}));
    }

  }

  /**
   * 更新session集群
   * 
   * @param request - UpdateSessionClusterRequest
   * @returns UpdateSessionClusterResponse
   */
  async updateSessionCluster(namespace: string, sessionClusterName: string, request: UpdateSessionClusterRequest): Promise<UpdateSessionClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new UpdateSessionClusterHeaders({ });
    return await this.updateSessionClusterWithOptions(namespace, sessionClusterName, request, headers, runtime);
  }

  /**
   * Updates the JAR file of the user-defined function (UDF) that you create.
   * 
   * @param request - UpdateUdfArtifactRequest
   * @param headers - UpdateUdfArtifactHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUdfArtifactResponse
   */
  async updateUdfArtifactWithOptions(namespace: string, udfArtifactName: string, request: UpdateUdfArtifactRequest, headers: UpdateUdfArtifactHeaders, runtime: $dara.RuntimeOptions): Promise<UpdateUdfArtifactResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUdfArtifact",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/udfartifacts/${$dara.URL.percentEncode(udfArtifactName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateUdfArtifactResponse>(await this.callApi(params, req, runtime), new UpdateUdfArtifactResponse({}));
    } else {
      return $dara.cast<UpdateUdfArtifactResponse>(await this.execute(params, req, runtime), new UpdateUdfArtifactResponse({}));
    }

  }

  /**
   * Updates the JAR file of the user-defined function (UDF) that you create.
   * 
   * @param request - UpdateUdfArtifactRequest
   * @returns UpdateUdfArtifactResponse
   */
  async updateUdfArtifact(namespace: string, udfArtifactName: string, request: UpdateUdfArtifactRequest): Promise<UpdateUdfArtifactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new UpdateUdfArtifactHeaders({ });
    return await this.updateUdfArtifactWithOptions(namespace, udfArtifactName, request, headers, runtime);
  }

  /**
   * 更新秘钥
   * 
   * @param request - UpdateVariableRequest
   * @param headers - UpdateVariableHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVariableResponse
   */
  async updateVariableWithOptions(namespace: string, name: string, request: UpdateVariableRequest, headers: UpdateVariableHeaders, runtime: $dara.RuntimeOptions): Promise<UpdateVariableResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVariable",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/variables/${$dara.URL.percentEncode(name)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateVariableResponse>(await this.callApi(params, req, runtime), new UpdateVariableResponse({}));
    } else {
      return $dara.cast<UpdateVariableResponse>(await this.execute(params, req, runtime), new UpdateVariableResponse({}));
    }

  }

  /**
   * 更新秘钥
   * 
   * @param request - UpdateVariableRequest
   * @returns UpdateVariableResponse
   */
  async updateVariable(namespace: string, name: string, request: UpdateVariableRequest): Promise<UpdateVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new UpdateVariableHeaders({ });
    return await this.updateVariableWithOptions(namespace, name, request, headers, runtime);
  }

  /**
   * Verifies the code of an SQL deployment.
   * 
   * @param request - ValidateSqlStatementRequest
   * @param headers - ValidateSqlStatementHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateSqlStatementResponse
   */
  async validateSqlStatementWithOptions(namespace: string, request: ValidateSqlStatementRequest, headers: ValidateSqlStatementHeaders, runtime: $dara.RuntimeOptions): Promise<ValidateSqlStatementResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidateSqlStatement",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/sql-statement/validate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ValidateSqlStatementResponse>(await this.callApi(params, req, runtime), new ValidateSqlStatementResponse({}));
    } else {
      return $dara.cast<ValidateSqlStatementResponse>(await this.execute(params, req, runtime), new ValidateSqlStatementResponse({}));
    }

  }

  /**
   * Verifies the code of an SQL deployment.
   * 
   * @param request - ValidateSqlStatementRequest
   * @returns ValidateSqlStatementResponse
   */
  async validateSqlStatement(namespace: string, request: ValidateSqlStatementRequest): Promise<ValidateSqlStatementResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new ValidateSqlStatementHeaders({ });
    return await this.validateSqlStatementWithOptions(namespace, request, headers, runtime);
  }

}
