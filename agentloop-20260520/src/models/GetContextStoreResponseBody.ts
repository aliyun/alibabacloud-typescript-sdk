// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContextStoreResponseBodyConfigAudit extends $dara.Model {
  /**
   * @example
   * false
   */
  droppedCandidates?: boolean;
  /**
   * @example
   * raw
   */
  queryMode?: string;
  /**
   * @example
   * 30
   */
  retentionDays?: number;
  static names(): { [key: string]: string } {
    return {
      droppedCandidates: 'droppedCandidates',
      queryMode: 'queryMode',
      retentionDays: 'retentionDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      droppedCandidates: 'boolean',
      queryMode: 'string',
      retentionDays: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextStoreResponseBodyConfigExtractionPolicyModel extends $dara.Model {
  /**
   * @example
   * qwen3.8-flash
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextStoreResponseBodyConfigExtractionPolicy extends $dara.Model {
  /**
   * @example
   * ["preference","profile"]
   */
  categories?: string[];
  /**
   * @example
   * 只抽取用户的产品偏好
   */
  customInstructions?: string;
  /**
   * @example
   * ["密码","证件号"]
   */
  excludeRules?: string[];
  model?: GetContextStoreResponseBodyConfigExtractionPolicyModel;
  /**
   * @example
   * fact
   */
  preset?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'categories',
      customInstructions: 'customInstructions',
      excludeRules: 'excludeRules',
      model: 'model',
      preset: 'preset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      customInstructions: 'string',
      excludeRules: { 'type': 'array', 'itemType': 'string' },
      model: GetContextStoreResponseBodyConfigExtractionPolicyModel,
      preset: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    if(Array.isArray(this.excludeRules)) {
      $dara.Model.validateArray(this.excludeRules);
    }
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextStoreResponseBodyConfigInnerSource extends $dara.Model {
  /**
   * @example
   * memory_events_0a1b2c3d
   */
  logstore?: string;
  /**
   * @example
   * agentloop-xxx
   */
  project?: string;
  static names(): { [key: string]: string } {
    return {
      logstore: 'logstore',
      project: 'project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      project: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextStoreResponseBodyConfigObservability extends $dara.Model {
  /**
   * @example
   * memory-audit
   */
  auditLogstore?: string;
  /**
   * @example
   * memory_events_0a1b2c3d
   */
  eventsLogstore?: string;
  /**
   * @example
   * agentloop-xxx
   */
  project?: string;
  static names(): { [key: string]: string } {
    return {
      auditLogstore: 'auditLogstore',
      eventsLogstore: 'eventsLogstore',
      project: 'project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditLogstore: 'string',
      eventsLogstore: 'string',
      project: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextStoreResponseBodyConfigOutputDataset extends $dara.Model {
  /**
   * @example
   * my-agent-space
   */
  agentSpace?: string;
  /**
   * @example
   * memory-my-context-store
   */
  datasetName?: string;
  /**
   * @example
   * MemoryRecordV1
   */
  schemaContract?: string;
  /**
   * @example
   * 1
   */
  schemaVersion?: number;
  static names(): { [key: string]: string } {
    return {
      agentSpace: 'agentSpace',
      datasetName: 'datasetName',
      schemaContract: 'schemaContract',
      schemaVersion: 'schemaVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
      datasetName: 'string',
      schemaContract: 'string',
      schemaVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextStoreResponseBodyConfigScopePolicy extends $dara.Model {
  /**
   * @example
   * ["userId"]
   */
  requiredAnyOf?: string[];
  static names(): { [key: string]: string } {
    return {
      requiredAnyOf: 'requiredAnyOf',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requiredAnyOf: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.requiredAnyOf)) {
      $dara.Model.validateArray(this.requiredAnyOf);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextStoreResponseBodyConfigSourceDatasetCustomFields extends $dara.Model {
  /**
   * @example
   * 客户等级
   */
  description?: string;
  /**
   * @example
   * false
   */
  sensitive?: boolean;
  /**
   * @example
   * customerTier
   */
  sourceField?: string;
  /**
   * @example
   * metadata.customerTier
   */
  target?: string;
  /**
   * @example
   * extraction-input
   */
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      sensitive: 'sensitive',
      sourceField: 'sourceField',
      target: 'target',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      sensitive: 'boolean',
      sourceField: 'string',
      target: 'string',
      usage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextStoreResponseBodyConfigSourceDatasetFilter extends $dara.Model {
  /**
   * @example
   * appId = \\"crm-service\\"
   */
  where?: string;
  static names(): { [key: string]: string } {
    return {
      where: 'where',
    };
  }

  static types(): { [key: string]: any } {
    return {
      where: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextStoreResponseBodyConfigSourceDatasetVersionPolicy extends $dara.Model {
  /**
   * @example
   * follow
   */
  mode?: string;
  /**
   * @example
   * 0
   */
  startSeq?: number;
  /**
   * @example
   * v3
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      mode: 'mode',
      startSeq: 'startSeq',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      startSeq: 'number',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextStoreResponseBodyConfigSourceDataset extends $dara.Model {
  customFields?: GetContextStoreResponseBodyConfigSourceDatasetCustomFields[];
  /**
   * @example
   * trajectory-with-crm-profile
   */
  datasetName?: string;
  filter?: GetContextStoreResponseBodyConfigSourceDatasetFilter;
  /**
   * @example
   * 300
   */
  pollIntervalSeconds?: number;
  /**
   * @example
   * MemorySourceV1
   */
  schemaContract?: string;
  versionPolicy?: GetContextStoreResponseBodyConfigSourceDatasetVersionPolicy;
  static names(): { [key: string]: string } {
    return {
      customFields: 'customFields',
      datasetName: 'datasetName',
      filter: 'filter',
      pollIntervalSeconds: 'pollIntervalSeconds',
      schemaContract: 'schemaContract',
      versionPolicy: 'versionPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customFields: { 'type': 'array', 'itemType': GetContextStoreResponseBodyConfigSourceDatasetCustomFields },
      datasetName: 'string',
      filter: GetContextStoreResponseBodyConfigSourceDatasetFilter,
      pollIntervalSeconds: 'number',
      schemaContract: 'string',
      versionPolicy: GetContextStoreResponseBodyConfigSourceDatasetVersionPolicy,
    };
  }

  validate() {
    if(Array.isArray(this.customFields)) {
      $dara.Model.validateArray(this.customFields);
    }
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    if(this.versionPolicy && typeof (this.versionPolicy as any).validate === 'function') {
      (this.versionPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextStoreResponseBodyConfigSourceTrajectoryFilter extends $dara.Model {
  /**
   * @example
   * ["sales-copilot"]
   */
  agentNames?: string[];
  /**
   * @example
   * false
   */
  excludeDegraded?: boolean;
  /**
   * @example
   * 2
   */
  minStepCount?: number;
  /**
   * @example
   * tool_names:"search_order"
   */
  query?: string;
  /**
   * @example
   * ["crm-service","app-*"]
   */
  serviceNames?: string[];
  static names(): { [key: string]: string } {
    return {
      agentNames: 'agentNames',
      excludeDegraded: 'excludeDegraded',
      minStepCount: 'minStepCount',
      query: 'query',
      serviceNames: 'serviceNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentNames: { 'type': 'array', 'itemType': 'string' },
      excludeDegraded: 'boolean',
      minStepCount: 'number',
      query: 'string',
      serviceNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.agentNames)) {
      $dara.Model.validateArray(this.agentNames);
    }
    if(Array.isArray(this.serviceNames)) {
      $dara.Model.validateArray(this.serviceNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextStoreResponseBodyConfigSourceTrajectoryScopeMapping extends $dara.Model {
  /**
   * @example
   * $.agent_name
   */
  agentId?: string;
  /**
   * @example
   * $.service_names[0]
   */
  appId?: string;
  /**
   * @example
   * $.trajectory_id
   */
  runId?: string;
  /**
   * @example
   * $.trajectory_extensions.user_id
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      appId: 'appId',
      runId: 'runId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      appId: 'string',
      runId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextStoreResponseBodyConfigSourceTrajectory extends $dara.Model {
  filter?: GetContextStoreResponseBodyConfigSourceTrajectoryFilter;
  /**
   * @example
   * agent-trajectory
   */
  logstore?: string;
  /**
   * @example
   * 300
   */
  pollIntervalSeconds?: number;
  scopeMapping?: GetContextStoreResponseBodyConfigSourceTrajectoryScopeMapping;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-10-01T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      logstore: 'logstore',
      pollIntervalSeconds: 'pollIntervalSeconds',
      scopeMapping: 'scopeMapping',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: GetContextStoreResponseBodyConfigSourceTrajectoryFilter,
      logstore: 'string',
      pollIntervalSeconds: 'number',
      scopeMapping: GetContextStoreResponseBodyConfigSourceTrajectoryScopeMapping,
      startTime: 'string',
    };
  }

  validate() {
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    if(this.scopeMapping && typeof (this.scopeMapping as any).validate === 'function') {
      (this.scopeMapping as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextStoreResponseBodyConfigSource extends $dara.Model {
  /**
   * @remarks
   * The AgentSpace where the trace data source resides. This is the same as the AgentSpace specified during creation.
   * 
   * @example
   * my-agent-space
   */
  agentSpace?: string;
  dataset?: GetContextStoreResponseBodyConfigSourceDataset;
  /**
   * @remarks
   * The start time for data backfill, in ISO 8601 UTC format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  startTime?: string;
  trajectory?: GetContextStoreResponseBodyConfigSourceTrajectory;
  /**
   * @example
   * trajectory
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      agentSpace: 'agentSpace',
      dataset: 'dataset',
      startTime: 'startTime',
      trajectory: 'trajectory',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
      dataset: GetContextStoreResponseBodyConfigSourceDataset,
      startTime: 'string',
      trajectory: GetContextStoreResponseBodyConfigSourceTrajectory,
      type: 'string',
    };
  }

  validate() {
    if(this.dataset && typeof (this.dataset as any).validate === 'function') {
      (this.dataset as any).validate();
    }
    if(this.trajectory && typeof (this.trajectory as any).validate === 'function') {
      (this.trajectory as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextStoreResponseBodyConfigSourceStatus extends $dara.Model {
  checkpoint?: { [key: string]: any };
  /**
   * @example
   * 读取数据源超时
   */
  lastError?: string;
  /**
   * @example
   * 2026-10-01T08:00:00Z
   */
  lastWindowAt?: string;
  /**
   * @example
   * 0
   */
  retryCount?: number;
  /**
   * @example
   * Running
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'checkpoint',
      lastError: 'lastError',
      lastWindowAt: 'lastWindowAt',
      retryCount: 'retryCount',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      lastError: 'string',
      lastWindowAt: 'string',
      retryCount: 'number',
      state: 'string',
    };
  }

  validate() {
    if(this.checkpoint) {
      $dara.Model.validateMap(this.checkpoint);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextStoreResponseBodyConfigStoragePolicy extends $dara.Model {
  /**
   * @example
   * ["ADD","UPDATE","MERGE","DELETE"]
   */
  allowedActions?: string[];
  /**
   * @example
   * true
   */
  dedupe?: boolean;
  /**
   * @example
   * true
   */
  humanEditProtection?: boolean;
  /**
   * @example
   * semantic
   */
  mergeKey?: string;
  /**
   * @example
   * upsert
   */
  mode?: string;
  /**
   * @example
   * 0.4
   */
  similarityThreshold?: number;
  /**
   * @example
   * 0
   */
  ttlDays?: number;
  static names(): { [key: string]: string } {
    return {
      allowedActions: 'allowedActions',
      dedupe: 'dedupe',
      humanEditProtection: 'humanEditProtection',
      mergeKey: 'mergeKey',
      mode: 'mode',
      similarityThreshold: 'similarityThreshold',
      ttlDays: 'ttlDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedActions: { 'type': 'array', 'itemType': 'string' },
      dedupe: 'boolean',
      humanEditProtection: 'boolean',
      mergeKey: 'string',
      mode: 'string',
      similarityThreshold: 'number',
      ttlDays: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.allowedActions)) {
      $dara.Model.validateArray(this.allowedActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextStoreResponseBodyConfig extends $dara.Model {
  audit?: GetContextStoreResponseBodyConfigAudit;
  extractionPolicy?: GetContextStoreResponseBodyConfigExtractionPolicy;
  innerSource?: GetContextStoreResponseBodyConfigInnerSource;
  /**
   * @remarks
   * The metadata field mapping. The key is the business field and the value is the storage field.
   * 
   * @example
   * {"userId":"user_id","sessionId":"session_id"}
   */
  metadataField?: { [key: string]: string };
  /**
   * @remarks
   * The experience mining interval. Valid values: 1h, 6h, 12h, and 1d. Default value: 1d.
   * 
   * @example
   * 1d
   */
  miningInterval?: string;
  observability?: GetContextStoreResponseBodyConfigObservability;
  outputDataset?: GetContextStoreResponseBodyConfigOutputDataset;
  scopePolicy?: GetContextStoreResponseBodyConfigScopePolicy;
  /**
   * @remarks
   * The list of service names. This works together with source.agentSpace to locate the trace data source. This value cannot be changed in the current version.
   * 
   * @example
   * ["order-service","payment-service"]
   */
  serviceNames?: string[];
  /**
   * @remarks
   * The datasource config passed in by the user. This serves only as the root identifier of the data source.
   */
  source?: GetContextStoreResponseBodyConfigSource;
  sourceStatus?: GetContextStoreResponseBodyConfigSourceStatus;
  storagePolicy?: GetContextStoreResponseBodyConfigStoragePolicy;
  /**
   * @example
   * 1
   */
  strategyVersion?: number;
  static names(): { [key: string]: string } {
    return {
      audit: 'audit',
      extractionPolicy: 'extractionPolicy',
      innerSource: 'innerSource',
      metadataField: 'metadataField',
      miningInterval: 'miningInterval',
      observability: 'observability',
      outputDataset: 'outputDataset',
      scopePolicy: 'scopePolicy',
      serviceNames: 'serviceNames',
      source: 'source',
      sourceStatus: 'sourceStatus',
      storagePolicy: 'storagePolicy',
      strategyVersion: 'strategyVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audit: GetContextStoreResponseBodyConfigAudit,
      extractionPolicy: GetContextStoreResponseBodyConfigExtractionPolicy,
      innerSource: GetContextStoreResponseBodyConfigInnerSource,
      metadataField: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      miningInterval: 'string',
      observability: GetContextStoreResponseBodyConfigObservability,
      outputDataset: GetContextStoreResponseBodyConfigOutputDataset,
      scopePolicy: GetContextStoreResponseBodyConfigScopePolicy,
      serviceNames: { 'type': 'array', 'itemType': 'string' },
      source: GetContextStoreResponseBodyConfigSource,
      sourceStatus: GetContextStoreResponseBodyConfigSourceStatus,
      storagePolicy: GetContextStoreResponseBodyConfigStoragePolicy,
      strategyVersion: 'number',
    };
  }

  validate() {
    if(this.audit && typeof (this.audit as any).validate === 'function') {
      (this.audit as any).validate();
    }
    if(this.extractionPolicy && typeof (this.extractionPolicy as any).validate === 'function') {
      (this.extractionPolicy as any).validate();
    }
    if(this.innerSource && typeof (this.innerSource as any).validate === 'function') {
      (this.innerSource as any).validate();
    }
    if(this.metadataField) {
      $dara.Model.validateMap(this.metadataField);
    }
    if(this.observability && typeof (this.observability as any).validate === 'function') {
      (this.observability as any).validate();
    }
    if(this.outputDataset && typeof (this.outputDataset as any).validate === 'function') {
      (this.outputDataset as any).validate();
    }
    if(this.scopePolicy && typeof (this.scopePolicy as any).validate === 'function') {
      (this.scopePolicy as any).validate();
    }
    if(Array.isArray(this.serviceNames)) {
      $dara.Model.validateArray(this.serviceNames);
    }
    if(this.source && typeof (this.source as any).validate === 'function') {
      (this.source as any).validate();
    }
    if(this.sourceStatus && typeof (this.sourceStatus as any).validate === 'function') {
      (this.sourceStatus as any).validate();
    }
    if(this.storagePolicy && typeof (this.storagePolicy as any).validate === 'function') {
      (this.storagePolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextStoreResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the AgentSpace to which the context store belongs.
   * 
   * @example
   * my-agent-space
   */
  agentSpace?: string;
  /**
   * @remarks
   * The configuration of the context store.
   */
  config?: GetContextStoreResponseBodyConfig;
  /**
   * @remarks
   * The context store name.
   * 
   * @example
   * my-context-store
   */
  contextStoreName?: string;
  /**
   * @remarks
   * The type of the context store, such as experience or memory.
   * 
   * @example
   * experience
   */
  contextType?: string;
  /**
   * @remarks
   * The time when the context store was created, in ISO 8601 UTC format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the context store.
   * 
   * @example
   * 我的上下文库
   */
  description?: string;
  /**
   * @remarks
   * The region ID of the context store.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the context store. Valid values:
   * - ACTIVE
   * - INITIALIZING
   * - FAILED
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The time when the context store was last updated, in ISO 8601 UTC format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-01-02T00:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      agentSpace: 'agentSpace',
      config: 'config',
      contextStoreName: 'contextStoreName',
      contextType: 'contextType',
      createTime: 'createTime',
      description: 'description',
      regionId: 'regionId',
      requestId: 'requestId',
      status: 'status',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
      config: GetContextStoreResponseBodyConfig,
      contextStoreName: 'string',
      contextType: 'string',
      createTime: 'string',
      description: 'string',
      regionId: 'string',
      requestId: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

