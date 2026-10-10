// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateContextStoreRequestConfigAudit extends $dara.Model {
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

export class CreateContextStoreRequestConfigExtractionPolicyModel extends $dara.Model {
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

export class CreateContextStoreRequestConfigExtractionPolicy extends $dara.Model {
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
  model?: CreateContextStoreRequestConfigExtractionPolicyModel;
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
      model: CreateContextStoreRequestConfigExtractionPolicyModel,
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

export class CreateContextStoreRequestConfigScopePolicy extends $dara.Model {
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

export class CreateContextStoreRequestConfigSourceDatasetCustomFields extends $dara.Model {
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

export class CreateContextStoreRequestConfigSourceDatasetFilter extends $dara.Model {
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

export class CreateContextStoreRequestConfigSourceDatasetVersionPolicy extends $dara.Model {
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

export class CreateContextStoreRequestConfigSourceDataset extends $dara.Model {
  customFields?: CreateContextStoreRequestConfigSourceDatasetCustomFields[];
  /**
   * @example
   * trajectory-with-crm-profile
   */
  datasetName?: string;
  filter?: CreateContextStoreRequestConfigSourceDatasetFilter;
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
  versionPolicy?: CreateContextStoreRequestConfigSourceDatasetVersionPolicy;
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
      customFields: { 'type': 'array', 'itemType': CreateContextStoreRequestConfigSourceDatasetCustomFields },
      datasetName: 'string',
      filter: CreateContextStoreRequestConfigSourceDatasetFilter,
      pollIntervalSeconds: 'number',
      schemaContract: 'string',
      versionPolicy: CreateContextStoreRequestConfigSourceDatasetVersionPolicy,
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

export class CreateContextStoreRequestConfigSourceTrajectoryFilter extends $dara.Model {
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

export class CreateContextStoreRequestConfigSourceTrajectoryScopeMapping extends $dara.Model {
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

export class CreateContextStoreRequestConfigSourceTrajectory extends $dara.Model {
  filter?: CreateContextStoreRequestConfigSourceTrajectoryFilter;
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
  scopeMapping?: CreateContextStoreRequestConfigSourceTrajectoryScopeMapping;
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
      filter: CreateContextStoreRequestConfigSourceTrajectoryFilter,
      logstore: 'string',
      pollIntervalSeconds: 'number',
      scopeMapping: CreateContextStoreRequestConfigSourceTrajectoryScopeMapping,
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

export class CreateContextStoreRequestConfigSource extends $dara.Model {
  /**
   * @remarks
   * The AgentSpace where the trace data source resides. If not specified, the AgentSpace in the current path is used by default. Cross-AgentSpace access is not supported in the current version. If specified, the value must match the AgentSpace in the path. Otherwise, a 400 parameter error is returned. This value cannot be changed after creation.
   * 
   * @example
   * my-agent-space
   */
  agentSpace?: string;
  dataset?: CreateContextStoreRequestConfigSourceDataset;
  /**
   * @remarks
   * The start time for data backfill, in ISO 8601 UTC format. If not specified, the current time is used.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  startTime?: string;
  trajectory?: CreateContextStoreRequestConfigSourceTrajectory;
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
      dataset: CreateContextStoreRequestConfigSourceDataset,
      startTime: 'string',
      trajectory: CreateContextStoreRequestConfigSourceTrajectory,
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

export class CreateContextStoreRequestConfigStoragePolicy extends $dara.Model {
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

export class CreateContextStoreRequestConfig extends $dara.Model {
  audit?: CreateContextStoreRequestConfigAudit;
  extractionPolicy?: CreateContextStoreRequestConfigExtractionPolicy;
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
   * The experience mining interval, which specifies how often experience mining is performed. Valid values: 1h, 6h, 12h, and 1d. Default value: 1d. This value cannot be changed after creation.
   * 
   * @example
   * 1d
   */
  miningInterval?: string;
  scopePolicy?: CreateContextStoreRequestConfigScopePolicy;
  /**
   * @remarks
   * The list of service names. This parameter is required and cannot be empty. It works with source.agentSpace to locate the trace data source. The trajectory extraction service uses the AgentSpace to look up the bound CMS workspace and project/logstore, and then filters by service name. This value cannot be changed after creation. No modification entry is available in the current version.
   * 
   * @example
   * ["order-service","payment-service"]
   */
  serviceNames?: string[];
  /**
   * @remarks
   * The datasource config, which serves only as the root identifier for the data source. This is an optional block.
   */
  source?: CreateContextStoreRequestConfigSource;
  storagePolicy?: CreateContextStoreRequestConfigStoragePolicy;
  static names(): { [key: string]: string } {
    return {
      audit: 'audit',
      extractionPolicy: 'extractionPolicy',
      metadataField: 'metadataField',
      miningInterval: 'miningInterval',
      scopePolicy: 'scopePolicy',
      serviceNames: 'serviceNames',
      source: 'source',
      storagePolicy: 'storagePolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audit: CreateContextStoreRequestConfigAudit,
      extractionPolicy: CreateContextStoreRequestConfigExtractionPolicy,
      metadataField: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      miningInterval: 'string',
      scopePolicy: CreateContextStoreRequestConfigScopePolicy,
      serviceNames: { 'type': 'array', 'itemType': 'string' },
      source: CreateContextStoreRequestConfigSource,
      storagePolicy: CreateContextStoreRequestConfigStoragePolicy,
    };
  }

  validate() {
    if(this.audit && typeof (this.audit as any).validate === 'function') {
      (this.audit as any).validate();
    }
    if(this.extractionPolicy && typeof (this.extractionPolicy as any).validate === 'function') {
      (this.extractionPolicy as any).validate();
    }
    if(this.metadataField) {
      $dara.Model.validateMap(this.metadataField);
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
    if(this.storagePolicy && typeof (this.storagePolicy as any).validate === 'function') {
      (this.storagePolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContextStoreRequest extends $dara.Model {
  /**
   * @remarks
   * The context store configuration, including the datasource config and metadata field mapping.
   */
  config?: CreateContextStoreRequestConfig;
  /**
   * @remarks
   * The context store name, which must be globally unique within the AgentSpace. The name must be 2 to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * my-context-store
   */
  contextStoreName?: string;
  /**
   * @remarks
   * The context store type. Valid values: experience and memory.
   * 
   * This parameter is required.
   * 
   * @example
   * experience
   */
  contextType?: string;
  /**
   * @remarks
   * The description of the context store, which helps users understand its purpose.
   * 
   * @example
   * 我的上下文库
   */
  description?: string;
  /**
   * @remarks
   * The idempotency token, which is a unique string generated by the client to ensure the idempotence of the create operation.
   * 
   * @example
   * a1b2c3d4-1234-5678-90ab-cdef12345678
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      contextStoreName: 'contextStoreName',
      contextType: 'contextType',
      description: 'description',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: CreateContextStoreRequestConfig,
      contextStoreName: 'string',
      contextType: 'string',
      description: 'string',
      clientToken: 'string',
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

