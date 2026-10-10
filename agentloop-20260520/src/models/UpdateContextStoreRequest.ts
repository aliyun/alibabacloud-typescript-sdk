// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContextStoreRequestConfigAudit extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to write item events for dropped recall candidates. Default value: false.
   * 
   * @example
   * false
   */
  droppedCandidates?: boolean;
  /**
   * @remarks
   * The recording mode for recall queries. Valid values: raw (plaintext) and hash (HMAC only). Default value: raw.
   * 
   * @example
   * raw
   */
  queryMode?: string;
  /**
   * @remarks
   * The number of days to retain audit logs. Valid values: 1 to 180. Default value: 30.
   * 
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

export class UpdateContextStoreRequestConfigExtractionPolicyModel extends $dara.Model {
  /**
   * @remarks
   * The name of the extraction model. Currently, only qwen3.8-flash is supported, which uses internal platform credentials.
   * 
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

export class UpdateContextStoreRequestConfigExtractionPolicy extends $dara.Model {
  /**
   * @remarks
   * The list of memory categories.
   * 
   * @example
   * ["preference","profile"]
   */
  categories?: string[];
  /**
   * @remarks
   * The custom extraction instructions. This parameter is required when preset is set to custom. Length: 1 to 8000 characters.
   * 
   * @example
   * Extract only user product preferences
   */
  customInstructions?: string;
  /**
   * @remarks
   * The list of exclusion rules. Content that matches these rules is not extracted.
   * 
   * @example
   * ["Password","ID number"]
   */
  excludeRules?: string[];
  /**
   * @remarks
   * The extraction model configuration.
   */
  model?: UpdateContextStoreRequestConfigExtractionPolicyModel;
  /**
   * @remarks
   * The preset policy. Valid values: fact, toc-profile, tob-digital-twin, and custom. Default value: fact.
   * 
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
      model: UpdateContextStoreRequestConfigExtractionPolicyModel,
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

export class UpdateContextStoreRequestConfigScopePolicy extends $dara.Model {
  /**
   * @remarks
   * The list of scope fields where at least one must be non-empty. Valid element values: userId, agentId, appId, and runId.
   * 
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

export class UpdateContextStoreRequestConfigSourceDatasetCustomFields extends $dara.Model {
  /**
   * @remarks
   * The description of the field. This parameter is required when usage is set to extraction-input.
   * 
   * @example
   * Customer tier
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the field is a sensitive field.
   * 
   * @example
   * false
   */
  sensitive?: boolean;
  /**
   * @remarks
   * The name of the source field.
   * 
   * @example
   * customerTier
   */
  sourceField?: string;
  /**
   * @remarks
   * The target write path, such as metadata.customerTier.
   * 
   * @example
   * metadata.customerTier
   */
  target?: string;
  /**
   * @remarks
   * The usage of the field. Valid values: extraction-input (participates in extraction) and ignore (ignored).
   * 
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

export class UpdateContextStoreRequestConfigSourceDatasetFilter extends $dara.Model {
  /**
   * @remarks
   * The subset of the Pipeline where clause, which is pushed down to SQL.
   * 
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

export class UpdateContextStoreRequestConfigSourceDataset extends $dara.Model {
  /**
   * @remarks
   * The list of custom field declarations. If provided, it fully overwrites the existing declarations.
   */
  customFields?: UpdateContextStoreRequestConfigSourceDatasetCustomFields[];
  /**
   * @remarks
   * The row filter conditions.
   */
  filter?: UpdateContextStoreRequestConfigSourceDatasetFilter;
  /**
   * @remarks
   * The polling interval in seconds. Valid values: 60 to 3600.
   * 
   * @example
   * 300
   */
  pollIntervalSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      customFields: 'customFields',
      filter: 'filter',
      pollIntervalSeconds: 'pollIntervalSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customFields: { 'type': 'array', 'itemType': UpdateContextStoreRequestConfigSourceDatasetCustomFields },
      filter: UpdateContextStoreRequestConfigSourceDatasetFilter,
      pollIntervalSeconds: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.customFields)) {
      $dara.Model.validateArray(this.customFields);
    }
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContextStoreRequestConfigSourceTrajectoryFilter extends $dara.Model {
  /**
   * @remarks
   * The list of agent names. An explicitly empty list returns a 400 error.
   * 
   * @example
   * ["sales-copilot"]
   */
  agentNames?: string[];
  /**
   * @remarks
   * Specifies whether to exclude degraded trajectories. Default value: false (degraded trajectories are included).
   * 
   * @example
   * false
   */
  excludeDegraded?: boolean;
  /**
   * @remarks
   * The minimum number of steps, which must be greater than or equal to 0.
   * 
   * @example
   * 2
   */
  minStepCount?: number;
  /**
   * @remarks
   * The native SLS query statement. This statement is combined with the preceding conditions by using the AND operator.
   * 
   * @example
   * tool_names:"search_order"
   */
  query?: string;
  /**
   * @remarks
   * The list of service names. A single trailing asterisk (*) is supported. Specifying an explicitly empty list returns a 400 error.
   * 
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

export class UpdateContextStoreRequestConfigSourceTrajectoryScopeMapping extends $dara.Model {
  /**
   * @remarks
   * The JSONPath expression for the agentId field. Default value: $.agent_name.
   * 
   * @example
   * $.agent_name
   */
  agentId?: string;
  /**
   * @remarks
   * The JSONPath expression for the appId field. Default value: $.service_names[0].
   * 
   * @example
   * $.service_names[0]
   */
  appId?: string;
  /**
   * @remarks
   * The JSONPath expression for the runId field. Default value: $.trajectory_id.
   * 
   * @example
   * $.trajectory_id
   */
  runId?: string;
  /**
   * @remarks
   * The JSONPath expression for the userId field. By default, this field is not mapped.
   * 
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

export class UpdateContextStoreRequestConfigSourceTrajectory extends $dara.Model {
  /**
   * @remarks
   * The trajectory filter conditions. Conditions are combined with AND, while items within a list are combined with OR.
   */
  filter?: UpdateContextStoreRequestConfigSourceTrajectoryFilter;
  /**
   * @remarks
   * The name of the trajectory Logstore. Default value: agent-trajectory. This parameter cannot be modified after creation.
   * 
   * @example
   * agent-trajectory
   */
  logstore?: string;
  /**
   * @remarks
   * The polling interval in seconds. Valid values: 60 to 3600.
   * 
   * @example
   * 300
   */
  pollIntervalSeconds?: number;
  /**
   * @remarks
   * The scope field mapping. The value must be a JSONPath expression. Only the $.a.b and $.a[0] formats are supported.
   */
  scopeMapping?: UpdateContextStoreRequestConfigSourceTrajectoryScopeMapping;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      logstore: 'logstore',
      pollIntervalSeconds: 'pollIntervalSeconds',
      scopeMapping: 'scopeMapping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: UpdateContextStoreRequestConfigSourceTrajectoryFilter,
      logstore: 'string',
      pollIntervalSeconds: 'number',
      scopeMapping: UpdateContextStoreRequestConfigSourceTrajectoryScopeMapping,
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

export class UpdateContextStoreRequestConfigSource extends $dara.Model {
  /**
   * @remarks
   * The AgentSpace where the trace data source is located. Cross-AgentSpace is not supported in the current phase. If provided, it must be equal to the path AgentSpace. Otherwise, a 400 parameter error is returned. The AgentSpace cannot be changed after creation.
   * 
   * @example
   * my-agent-space
   */
  agentSpace?: string;
  /**
   * @remarks
   * The updatable items for the Dataset data source. The datasetName cannot be changed after creation.
   */
  dataset?: UpdateContextStoreRequestConfigSourceDataset;
  /**
   * @remarks
   * The start time for data backfill, in ISO 8601 UTC format.
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The updatable items for the trajectory data source. The source.type cannot be changed after creation.
   */
  trajectory?: UpdateContextStoreRequestConfigSourceTrajectory;
  static names(): { [key: string]: string } {
    return {
      agentSpace: 'agentSpace',
      dataset: 'dataset',
      startTime: 'startTime',
      trajectory: 'trajectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
      dataset: UpdateContextStoreRequestConfigSourceDataset,
      startTime: 'string',
      trajectory: UpdateContextStoreRequestConfigSourceTrajectory,
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

export class UpdateContextStoreRequestConfigStoragePolicy extends $dara.Model {
  /**
   * @remarks
   * The allowed storage actions. By default, all actions are allowed: ADD, UPDATE, MERGE, and DELETE.
   * 
   * @example
   * ["ADD","UPDATE","MERGE","DELETE"]
   */
  allowedActions?: string[];
  /**
   * @remarks
   * Specifies whether to deduplicate events in event mode. Default value: true.
   * 
   * @example
   * true
   */
  dedupe?: boolean;
  /**
   * @remarks
   * Specifies whether to enable human edit protection. Default value: true. When this feature is enabled, automatic extraction does not overwrite manually modified memories.
   * 
   * @example
   * true
   */
  humanEditProtection?: boolean;
  /**
   * @remarks
   * The merge key for upsert operations. Valid values: factKey, semantic, and both. Default value: semantic.
   * 
   * @example
   * semantic
   */
  mergeKey?: string;
  /**
   * @remarks
   * The storage mode. Valid values: event (append events) and upsert (merge and update). Default value: upsert.
   * 
   * @example
   * upsert
   */
  mode?: string;
  /**
   * @remarks
   * The similarity threshold for semantic merging. Valid values: 0 to 1. Default value: 0.4.
   * 
   * @example
   * 0.4
   */
  similarityThreshold?: number;
  /**
   * @remarks
   * The number of days before the memory expires. A value of 0 indicates that the memory never expires.
   * 
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

export class UpdateContextStoreRequestConfig extends $dara.Model {
  /**
   * @remarks
   * The audit configuration.
   */
  audit?: UpdateContextStoreRequestConfigAudit;
  /**
   * @remarks
   * The extraction policy for the memory type.
   */
  extractionPolicy?: UpdateContextStoreRequestConfigExtractionPolicy;
  /**
   * @remarks
   * The metadata field mapping. The key is the business field, and the value is the storage field.
   * 
   * @example
   * {"userId":"user_id","sessionId":"session_id"}
   */
  metadataField?: { [key: string]: string };
  /**
   * @remarks
   * The scope constraint policy.
   */
  scopePolicy?: UpdateContextStoreRequestConfigScopePolicy;
  /**
   * @remarks
   * The datasource config, which serves only as the root identity for the data source.
   */
  source?: UpdateContextStoreRequestConfigSource;
  /**
   * @remarks
   * The storage policy for the memory type.
   */
  storagePolicy?: UpdateContextStoreRequestConfigStoragePolicy;
  static names(): { [key: string]: string } {
    return {
      audit: 'audit',
      extractionPolicy: 'extractionPolicy',
      metadataField: 'metadataField',
      scopePolicy: 'scopePolicy',
      source: 'source',
      storagePolicy: 'storagePolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audit: UpdateContextStoreRequestConfigAudit,
      extractionPolicy: UpdateContextStoreRequestConfigExtractionPolicy,
      metadataField: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      scopePolicy: UpdateContextStoreRequestConfigScopePolicy,
      source: UpdateContextStoreRequestConfigSource,
      storagePolicy: UpdateContextStoreRequestConfigStoragePolicy,
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

export class UpdateContextStoreRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the policy change. A new policy version is created when policy fields in the configuration are modified.
   * 
   * @example
   * Relax similarity threshold
   */
  changeNote?: string;
  /**
   * @remarks
   * The context library configuration. If provided, it fully overwrites the existing configuration. If omitted, the original configuration is retained.
   */
  config?: UpdateContextStoreRequestConfig;
  /**
   * @remarks
   * The context library type. This field is typically immutable after creation and is provided only for exception correction.
   * 
   * @example
   * experience
   */
  contextType?: string;
  /**
   * @remarks
   * The description of the context library, which helps business users understand its purpose.
   * 
   * @example
   * My context library
   */
  description?: string;
  /**
   * @remarks
   * The running status. For the memory type, valid values are Active (running) and Paused (data source consumption and extraction paused). For the experience type, it indicates the mining status of the experience library. The specific valid values and combination constraints are defined by the server.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The idempotency token. It is a unique string generated by the client to ensure the idempotence of the update operation.
   * 
   * @example
   * a1b2c3d4-1234-5678-90ab-cdef12345678
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      changeNote: 'changeNote',
      config: 'config',
      contextType: 'contextType',
      description: 'description',
      status: 'status',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeNote: 'string',
      config: UpdateContextStoreRequestConfig,
      contextType: 'string',
      description: 'string',
      status: 'string',
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

