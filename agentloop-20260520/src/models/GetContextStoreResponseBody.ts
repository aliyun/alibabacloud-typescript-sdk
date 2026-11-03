// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContextStoreResponseBodyConfigAudit extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to write item events for dropped candidates during retrieval. Default value: false.
   * 
   * @example
   * false
   */
  droppedCandidates?: boolean;
  /**
   * @remarks
   * The recording mode for retrieval queries. Valid values: raw (plaintext) and hash (HMAC only). Default value: raw.
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

export class GetContextStoreResponseBodyConfigAuditLogStore extends $dara.Model {
  /**
   * @remarks
   * The name of the Logstore for the experience library audit logs.
   * 
   * @example
   * experience_audit
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the user SLS project where the experience library audit logs are stored.
   * 
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

export class GetContextStoreResponseBodyConfigExtractionPoliciesModel extends $dara.Model {
  /**
   * @remarks
   * The name of the extraction model. Currently, only qwen3.8-flash is supported. The platform uses internal credentials.
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

export class GetContextStoreResponseBodyConfigExtractionPoliciesStoragePolicy extends $dara.Model {
  /**
   * @remarks
   * The allowed storage actions. Default value: all actions (ADD, UPDATE, MERGE, and DELETE).
   * 
   * @example
   * ["ADD","UPDATE","MERGE","DELETE"]
   */
  allowedActions?: string[];
  /**
   * @remarks
   * Specifies whether to enable deduplication in event mode. Default value: true.
   * 
   * @example
   * true
   */
  dedupe?: boolean;
  /**
   * @remarks
   * Specifies whether to enable human edit protection. Default value: true. When enabled, automatic extraction does not overwrite manually modified memories.
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
   * The storage mode. Valid values: event (event append) and upsert (merge update). Default value: upsert.
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
   * The number of days before memories expire. A value of 0 indicates that memories do not expire.
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

export class GetContextStoreResponseBodyConfigExtractionPolicies extends $dara.Model {
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
   * The custom extraction instructions. This parameter is required when preset is set to custom. The length must be 1 to 8,000 characters.
   * 
   * @example
   * Extract only user product preferences
   */
  customInstructions?: string;
  /**
   * @remarks
   * Specifies whether to execute this policy for new input. Default value: true. Disabling the policy does not delete historical memories.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The list of exclusion rules. Content that matches the rules is not extracted.
   * 
   * @example
   * ["Password","ID number"]
   */
  excludeRules?: string[];
  /**
   * @remarks
   * The extraction model configuration.
   */
  model?: GetContextStoreResponseBodyConfigExtractionPoliciesModel;
  /**
   * @remarks
   * The display name of the extraction policy.
   * 
   * @example
   * User preferences
   */
  name?: string;
  /**
   * @remarks
   * The preset policy. Valid values: fact, toc-profile, tob-digital-twin, and custom. Default value: fact.
   * 
   * @example
   * fact
   */
  preset?: string;
  /**
   * @remarks
   * The independent storage rules for this policy. If omitted, the original value is retained. New policies use the default value. Repeatedly confirmed memories refresh the validity period by default.
   */
  storagePolicy?: GetContextStoreResponseBodyConfigExtractionPoliciesStoragePolicy;
  /**
   * @remarks
   * The stable ID of the extraction policy. The ID must start with a letter and can contain only letters, digits, underscores, and hyphens. It can be up to 64 characters in length. The ID must be unique within the same context library. Modifying the name or instructions does not change this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * preferences
   */
  strategyId?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'categories',
      customInstructions: 'customInstructions',
      enabled: 'enabled',
      excludeRules: 'excludeRules',
      model: 'model',
      name: 'name',
      preset: 'preset',
      storagePolicy: 'storagePolicy',
      strategyId: 'strategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      customInstructions: 'string',
      enabled: 'boolean',
      excludeRules: { 'type': 'array', 'itemType': 'string' },
      model: GetContextStoreResponseBodyConfigExtractionPoliciesModel,
      name: 'string',
      preset: 'string',
      storagePolicy: GetContextStoreResponseBodyConfigExtractionPoliciesStoragePolicy,
      strategyId: 'string',
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
    if(this.storagePolicy && typeof (this.storagePolicy as any).validate === 'function') {
      (this.storagePolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextStoreResponseBodyConfigExtractionPolicyModel extends $dara.Model {
  /**
   * @remarks
   * The name of the extraction model. Currently, only qwen3.8-flash is supported. The platform uses internal credentials.
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

export class GetContextStoreResponseBodyConfigExtractionPolicy extends $dara.Model {
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
   * The custom extraction instructions. This parameter is required when preset is set to custom. The length must be 1 to 8,000 characters.
   * 
   * @example
   * Extract only user product preferences
   */
  customInstructions?: string;
  /**
   * @remarks
   * The list of exclusion rules. Content that matches the rules is not extracted.
   * 
   * @example
   * ["Password","ID number"]
   */
  excludeRules?: string[];
  /**
   * @remarks
   * The extraction model configuration.
   */
  model?: GetContextStoreResponseBodyConfigExtractionPolicyModel;
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
   * @remarks
   * The name of the event Logstore.
   * 
   * @example
   * memory_events_0a1b2c3d
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the Simple Log Service (SLS) project.
   * 
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
   * @remarks
   * The name of the audit Logstore.
   * 
   * @example
   * memory-audit
   */
  auditLogstore?: string;
  /**
   * @remarks
   * The name of the event Logstore.
   * 
   * @example
   * memory_events_0a1b2c3d
   */
  eventsLogstore?: string;
  /**
   * @remarks
   * The Simple Log Service (SLS) project where both resources are located, which is the project bound to the AgentSpace.
   * 
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
   * @remarks
   * The AgentSpace where the dataset is located.
   * 
   * @example
   * my-agent-space
   */
  agentSpace?: string;
  /**
   * @remarks
   * The name of the dataset.
   * 
   * @example
   * memory-my-context-store
   */
  datasetName?: string;
  /**
   * @remarks
   * The row schema contract of the dataset.
   * 
   * @example
   * MemoryRecordV1
   */
  schemaContract?: string;
  /**
   * @remarks
   * The version of the schema.
   * 
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
   * @remarks
   * At least one of the scope fields must be non-empty. Valid values for the elements: userId, agentId, appId, and runId.
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

export class GetContextStoreResponseBodyConfigSourceDatasetCustomFields extends $dara.Model {
  /**
   * @remarks
   * The description of the field. This parameter is required when usage is set to extraction-input, and it is appended to the extraction prompt.
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
   * The write target path, such as metadata.customerTier.
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

export class GetContextStoreResponseBodyConfigSourceDatasetFilter extends $dara.Model {
  /**
   * @remarks
   * The subset of the pipeline where clause that is pushed down to SQL.
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

export class GetContextStoreResponseBodyConfigSourceDatasetVersionPolicy extends $dara.Model {
  /**
   * @remarks
   * The version consumption mode. Valid values:
   * - follow: consumes data incrementally based on __dataset_seq.
   * - fixed: consumes the specified ACTIVE version in full at once.
   * 
   * @example
   * follow
   */
  mode?: string;
  /**
   * @remarks
   * The starting __dataset_seq for the follow mode.
   * 
   * @example
   * 0
   */
  startSeq?: number;
  /**
   * @remarks
   * The dataset version specified for the fixed mode.
   * 
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
  /**
   * @remarks
   * The list of custom field declarations.
   */
  customFields?: GetContextStoreResponseBodyConfigSourceDatasetCustomFields[];
  /**
   * @remarks
   * The name of the dataset in the same AgentSpace. This parameter cannot be changed after creation.
   * 
   * @example
   * trajectory-with-crm-profile
   */
  datasetName?: string;
  /**
   * @remarks
   * The row filter conditions.
   */
  filter?: GetContextStoreResponseBodyConfigSourceDatasetFilter;
  /**
   * @remarks
   * The polling interval in seconds. Valid values: 60 to 3600. Default value: 300.
   * 
   * @example
   * 300
   */
  pollIntervalSeconds?: number;
  /**
   * @remarks
   * The row schema contract of the dataset. The value is fixed to MemorySourceV1 in the current phase.
   * 
   * @example
   * MemorySourceV1
   */
  schemaContract?: string;
  /**
   * @remarks
   * The version consumption policy of the dataset.
   */
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
   * @remarks
   * The list of agent names. An explicitly empty list returns a 400 error.
   * 
   * @example
   * ["sales-copilot"]
   */
  agentNames?: string[];
  /**
   * @remarks
   * Specifies whether to exclude degraded trajectories. Default value: false, which includes degraded trajectories.
   * 
   * @example
   * false
   */
  excludeDegraded?: boolean;
  /**
   * @remarks
   * The minimum number of steps. The value must be greater than or equal to 0.
   * 
   * @example
   * 2
   */
  minStepCount?: number;
  /**
   * @remarks
   * The native Simple Log Service (SLS) query statement. This statement is combined with the preceding conditions using AND.
   * 
   * @example
   * tool_names:"search_order"
   */
  query?: string;
  /**
   * @remarks
   * The list of service names. A single trailing asterisk (*) is supported. An explicitly empty list returns a 400 error.
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

export class GetContextStoreResponseBodyConfigSourceTrajectoryScopeMapping extends $dara.Model {
  /**
   * @remarks
   * The JSONPath expression for agentId. Default value: $.agent_name.
   * 
   * @example
   * $.agent_name
   */
  agentId?: string;
  /**
   * @remarks
   * The JSONPath expression for appId. Default value: $.service_names[0].
   * 
   * @example
   * $.service_names[0]
   */
  appId?: string;
  /**
   * @remarks
   * The JSONPath expression for runId. Default value: $.trajectory_id.
   * 
   * @example
   * $.trajectory_id
   */
  runId?: string;
  /**
   * @remarks
   * The JSONPath expression for userId. By default, this field is not mapped.
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

export class GetContextStoreResponseBodyConfigSourceTrajectory extends $dara.Model {
  /**
   * @remarks
   * The trajectory filter conditions. Conditions are combined with AND, and items within a list are combined with OR.
   */
  filter?: GetContextStoreResponseBodyConfigSourceTrajectoryFilter;
  /**
   * @remarks
   * The name of the trajectory Logstore. Default value: agent-trajectory. The value cannot be changed after creation.
   * 
   * @example
   * agent-trajectory
   */
  logstore?: string;
  /**
   * @remarks
   * The polling interval in seconds. Valid values: 60 to 3600. Default value: 300.
   * 
   * @example
   * 300
   */
  pollIntervalSeconds?: number;
  /**
   * @remarks
   * The scope field mapping. The value is a JSONPath expression. Only the $.a.b and $.a[0] formats are supported.
   */
  scopeMapping?: GetContextStoreResponseBodyConfigSourceTrajectoryScopeMapping;
  /**
   * @remarks
   * The start time for trajectory consumption in ISO 8601 UTC format. If not specified, the default value is the creation time.
   * 
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

export class GetContextStoreResponseBodyConfigSourceVersionPolicy extends $dara.Model {
  /**
   * @remarks
   * The continuous consumption mode. The value is fixed to follow.
   * 
   * @example
   * follow
   */
  mode?: string;
  /**
   * @remarks
   * The initial consumed append sequence number. The value is a decimal string of a non-negative int64 integer. Default value: 0. The __dataset_seq parameter is used, and the business timestamp is not used as the consumption checkpoint.
   * 
   * @example
   * 0
   */
  startSeq?: string;
  static names(): { [key: string]: string } {
    return {
      mode: 'mode',
      startSeq: 'startSeq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      startSeq: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextStoreResponseBodyConfigSource extends $dara.Model {
  /**
   * @remarks
   * The AgentSpace where the trace data source is located, which is the same as the AgentSpace to which it belonged when it was created.
   * 
   * @example
   * my-agent-space
   */
  agentSpace?: string;
  /**
   * @remarks
   * The DatasetBinding v1 shared with optimization tasks, which retains fixed column validation, supplementary column usage, and all/window selection.
   * 
   * @example
   * {"version":1,"selection":{"mode":"all"}}
   */
  binding?: { [key: string]: any };
  /**
   * @remarks
   * The dataset data source configuration for the memory type. This parameter is required when the memory type is used and source.type is set to dataset.
   */
  dataset?: GetContextStoreResponseBodyConfigSourceDataset;
  /**
   * @remarks
   * The name of the source dataset for the experience type in the current AgentSpace.
   * 
   * @example
   * reviewed_trajectories
   */
  datasetName?: string;
  /**
   * @remarks
   * The input format of the dataset. The source of the experience base dataset is atif.
   * 
   * @example
   * atif
   */
  format?: string;
  /**
   * @remarks
   * The maximum number of records to read from the dataset at a time. Valid values: 1 to 1000.
   * 
   * @example
   * 1000
   */
  maxRecords?: number;
  /**
   * @remarks
   * The start time for data backfill in ISO 8601 UTC format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The trajectory datasource config for the memory type. This parameter is required when the type is memory and source.type is trajectory.
   */
  trajectory?: GetContextStoreResponseBodyConfigSourceTrajectory;
  /**
   * @remarks
   * The source type. Valid values: trajectory and dataset. For the experience type, if this parameter is not specified, trajectory is used. For datasets, the datasetName, format, and binding parameters at the current level are used. The default mode is manual. If versionPolicy.mode is set to follow, data is continuously processed and automatically applied to the experience base. For the memory type, if this parameter is not specified, manual is used, meaning data is written only through AddContexts. Otherwise, the trajectory or dataset sub-configuration with the same name is used. The value cannot be changed after creation.
   * 
   * @example
   * dataset
   */
  type?: string;
  /**
   * @remarks
   * The continuous consumption configuration for the native experience base dataset. The default mode is manual. The follow mode only allows binding.selection.mode to be set to all, and data is consumed based on the append sequence number. The value cannot be changed after creation.
   */
  versionPolicy?: GetContextStoreResponseBodyConfigSourceVersionPolicy;
  static names(): { [key: string]: string } {
    return {
      agentSpace: 'agentSpace',
      binding: 'binding',
      dataset: 'dataset',
      datasetName: 'datasetName',
      format: 'format',
      maxRecords: 'maxRecords',
      startTime: 'startTime',
      trajectory: 'trajectory',
      type: 'type',
      versionPolicy: 'versionPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
      binding: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      dataset: GetContextStoreResponseBodyConfigSourceDataset,
      datasetName: 'string',
      format: 'string',
      maxRecords: 'number',
      startTime: 'string',
      trajectory: GetContextStoreResponseBodyConfigSourceTrajectory,
      type: 'string',
      versionPolicy: GetContextStoreResponseBodyConfigSourceVersionPolicy,
    };
  }

  validate() {
    if(this.binding) {
      $dara.Model.validateMap(this.binding);
    }
    if(this.dataset && typeof (this.dataset as any).validate === 'function') {
      (this.dataset as any).validate();
    }
    if(this.trajectory && typeof (this.trajectory as any).validate === 'function') {
      (this.trajectory as any).validate();
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

export class GetContextStoreResponseBodyConfigSourceStatus extends $dara.Model {
  /**
   * @remarks
   * The processing progress. For memory trajectory, the format is {processTimeNs, watermarkMs}. For dataset, the format is {seq}. For manual, the format is {}. For the experience dataset in follow mode, the seq value is an exact int64 decimal string.
   */
  checkpoint?: { [key: string]: any };
  /**
   * @remarks
   * The current scheduled sequence window for the experience dataset in follow mode. The format is {after, until, runId}. All sequence numbers are decimal strings. If a failure occurs, the submitted checkpoint is not advanced.
   */
  currentWindow?: { [key: string]: string };
  /**
   * @remarks
   * The last desensitized error message. This field is empty when the status is normal.
   * 
   * @example
   * Data source read timeout
   */
  lastError?: string;
  /**
   * @remarks
   * The run ID of the last successful automatic application to the native experience store, for audit purposes only.
   * 
   * @example
   * opr-example
   */
  lastRunId?: string;
  /**
   * @remarks
   * The last window processing time in ISO 8601 UTC format.
   * 
   * @example
   * 2026-10-01T08:00:00Z
   */
  lastWindowAt?: string;
  /**
   * @remarks
   * The number of consecutive retries.
   * 
   * @example
   * 0
   */
  retryCount?: number;
  /**
   * @remarks
   * The state of the data source. Valid values: Validating, Ready, Running, Retrying, Paused, SourceSchemaChanged, and Failed.
   * 
   * @example
   * Running
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'checkpoint',
      currentWindow: 'currentWindow',
      lastError: 'lastError',
      lastRunId: 'lastRunId',
      lastWindowAt: 'lastWindowAt',
      retryCount: 'retryCount',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      currentWindow: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      lastError: 'string',
      lastRunId: 'string',
      lastWindowAt: 'string',
      retryCount: 'number',
      state: 'string',
    };
  }

  validate() {
    if(this.checkpoint) {
      $dara.Model.validateMap(this.checkpoint);
    }
    if(this.currentWindow) {
      $dara.Model.validateMap(this.currentWindow);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextStoreResponseBodyConfigStoragePolicy extends $dara.Model {
  /**
   * @remarks
   * The allowed storage actions. Default value: all actions (ADD, UPDATE, MERGE, and DELETE).
   * 
   * @example
   * ["ADD","UPDATE","MERGE","DELETE"]
   */
  allowedActions?: string[];
  /**
   * @remarks
   * Specifies whether to enable deduplication in event mode. Default value: true.
   * 
   * @example
   * true
   */
  dedupe?: boolean;
  /**
   * @remarks
   * Specifies whether to enable human edit protection. Default value: true. When enabled, automatic extraction does not overwrite manually modified memories.
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
   * The storage mode. Valid values: event (event append) and upsert (merge update). Default value: upsert.
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
   * The number of days before memories expire. A value of 0 indicates that memories do not expire.
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

export class GetContextStoreResponseBodyConfig extends $dara.Model {
  /**
   * @remarks
   * The audit configuration.
   */
  audit?: GetContextStoreResponseBodyConfigAudit;
  /**
   * @remarks
   * The Simple Log Service (SLS) audit log location for the experience library user. The console reads the logs by using the existing GetLogs permission.
   */
  auditLogStore?: GetContextStoreResponseBodyConfigAuditLogStore;
  /**
   * @remarks
   * The extraction policies. You can configure 1 to 10 policies. The strategyVersion parameter indicates the snapshot version of the entire library configuration.
   */
  extractionPolicies?: GetContextStoreResponseBodyConfigExtractionPolicies[];
  /**
   * @remarks
   * The extraction policy of the memory type.
   */
  extractionPolicy?: GetContextStoreResponseBodyConfigExtractionPolicy;
  /**
   * @remarks
   * The system-assigned event Logstore coordinates for the memory type, located in the Simple Log Service (SLS) project bound to the AgentSpace.
   */
  innerSource?: GetContextStoreResponseBodyConfigInnerSource;
  /**
   * @remarks
   * The metadata field mapping, where the key is the business field and the value is the storage field.
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
  /**
   * @remarks
   * The name of the internal running task associated with the server. Continuous libraries are used for read-only viewing of consumption records, and manual libraries can run limited mining. This value is not inferred by the client and cannot replace the ingestion and recall criteria of the native experience library.
   * 
   * @example
   * experience-review-library
   */
  miningTaskName?: string;
  /**
   * @remarks
   * The observability resource coordinates for the memory type.
   */
  observability?: GetContextStoreResponseBodyConfigObservability;
  /**
   * @remarks
   * The location of the memory output dataset for the memory type.
   */
  outputDataset?: GetContextStoreResponseBodyConfigOutputDataset;
  /**
   * @remarks
   * Specifies whether runtime recall is allowed for the experience library. This parameter is returned only for the experience type.
   */
  runtimeRecallEnabled?: boolean;
  /**
   * @remarks
   * The version of the runtime recall property, which is read-only. When you update the switch, a concurrency check is performed by using expectedRuntimeRecallRevision.
   * 
   * @example
   * 1
   */
  runtimeRecallRevision?: number;
  /**
   * @remarks
   * The scope constraint policy.
   */
  scopePolicy?: GetContextStoreResponseBodyConfigScopePolicy;
  /**
   * @remarks
   * The list of service names, which are used together with source.agentSpace to locate the trace data source. This parameter cannot be changed in the current phase.
   * 
   * @example
   * ["order-service","payment-service"]
   */
  serviceNames?: string[];
  /**
   * @remarks
   * The data source configuration passed by the user, which serves only as the root identity of the data source.
   */
  source?: GetContextStoreResponseBodyConfigSource;
  /**
   * @remarks
   * The running status of the data source. This applies to the memory type and the experience dataset in follow mode. The experience base submits a checkpoint only after it is published and automatically applied. Pausing and restarting retain the checkpoint.
   */
  sourceStatus?: GetContextStoreResponseBodyConfigSourceStatus;
  /**
   * @remarks
   * The actual storage modes for each policy. A hybrid store includes event and upsert.
   */
  storageModes?: string[];
  /**
   * @remarks
   * The storage policy for the memory type.
   */
  storagePolicy?: GetContextStoreResponseBodyConfigStoragePolicy;
  /**
   * @remarks
   * The version number of the currently effective policy for the memory type.
   * 
   * @example
   * 1
   */
  strategyVersion?: number;
  static names(): { [key: string]: string } {
    return {
      audit: 'audit',
      auditLogStore: 'auditLogStore',
      extractionPolicies: 'extractionPolicies',
      extractionPolicy: 'extractionPolicy',
      innerSource: 'innerSource',
      metadataField: 'metadataField',
      miningInterval: 'miningInterval',
      miningTaskName: 'miningTaskName',
      observability: 'observability',
      outputDataset: 'outputDataset',
      runtimeRecallEnabled: 'runtimeRecallEnabled',
      runtimeRecallRevision: 'runtimeRecallRevision',
      scopePolicy: 'scopePolicy',
      serviceNames: 'serviceNames',
      source: 'source',
      sourceStatus: 'sourceStatus',
      storageModes: 'storageModes',
      storagePolicy: 'storagePolicy',
      strategyVersion: 'strategyVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audit: GetContextStoreResponseBodyConfigAudit,
      auditLogStore: GetContextStoreResponseBodyConfigAuditLogStore,
      extractionPolicies: { 'type': 'array', 'itemType': GetContextStoreResponseBodyConfigExtractionPolicies },
      extractionPolicy: GetContextStoreResponseBodyConfigExtractionPolicy,
      innerSource: GetContextStoreResponseBodyConfigInnerSource,
      metadataField: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      miningInterval: 'string',
      miningTaskName: 'string',
      observability: GetContextStoreResponseBodyConfigObservability,
      outputDataset: GetContextStoreResponseBodyConfigOutputDataset,
      runtimeRecallEnabled: 'boolean',
      runtimeRecallRevision: 'number',
      scopePolicy: GetContextStoreResponseBodyConfigScopePolicy,
      serviceNames: { 'type': 'array', 'itemType': 'string' },
      source: GetContextStoreResponseBodyConfigSource,
      sourceStatus: GetContextStoreResponseBodyConfigSourceStatus,
      storageModes: { 'type': 'array', 'itemType': 'string' },
      storagePolicy: GetContextStoreResponseBodyConfigStoragePolicy,
      strategyVersion: 'number',
    };
  }

  validate() {
    if(this.audit && typeof (this.audit as any).validate === 'function') {
      (this.audit as any).validate();
    }
    if(this.auditLogStore && typeof (this.auditLogStore as any).validate === 'function') {
      (this.auditLogStore as any).validate();
    }
    if(Array.isArray(this.extractionPolicies)) {
      $dara.Model.validateArray(this.extractionPolicies);
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
    if(Array.isArray(this.storageModes)) {
      $dara.Model.validateArray(this.storageModes);
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
   * The name of the associated AgentSpace.
   * 
   * @example
   * my-agent-space
   */
  agentSpace?: string;
  /**
   * @remarks
   * The context library configuration.
   */
  config?: GetContextStoreResponseBodyConfig;
  /**
   * @remarks
   * The name of the context store.
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
   * The creation time of the context store in ISO 8601 UTC format.
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
   * My context store
   */
  description?: string;
  /**
   * @remarks
   * The ID of the region where the context store resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID, which is used to locate the request for troubleshooting.
   * 
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the context store. Valid values: ACTIVE, INITIALIZING, and FAILED.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The last update time of the context store in ISO 8601 UTC format.
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

