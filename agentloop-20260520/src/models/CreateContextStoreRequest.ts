// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContextStoreRequestConfigAudit extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to write item events for dropped retrieval candidates. Default value: false.
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

export class CreateContextStoreRequestConfigExtractionPoliciesModel extends $dara.Model {
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

export class CreateContextStoreRequestConfigExtractionPoliciesStoragePolicy extends $dara.Model {
  /**
   * @remarks
   * The allowed storage actions. Default value: all. Valid values: ADD, UPDATE, MERGE, and DELETE.
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
   * Specifies whether to enable human edit protection. Default value: true. If enabled, automatic extraction does not overwrite manually modified memories.
   * 
   * @example
   * true
   */
  humanEditProtection?: boolean;
  /**
   * @remarks
   * The upsert merge key. Valid values: factKey, semantic, and both. Default value: semantic.
   * 
   * @example
   * semantic
   */
  mergeKey?: string;
  /**
   * @remarks
   * The storage mode. Valid values: event (event append) and upsert (merge and update). Default value: upsert.
   * 
   * @example
   * upsert
   */
  mode?: string;
  /**
   * @remarks
   * The semantic merge similarity threshold. Valid values: 0 to 1. Default value: 0.4.
   * 
   * @example
   * 0.4
   */
  similarityThreshold?: number;
  /**
   * @remarks
   * The number of days before a memory expires. A value of 0 indicates that the memory does not expire.
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

export class CreateContextStoreRequestConfigExtractionPolicies extends $dara.Model {
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
   * The configuration of the extraction model.
   */
  model?: CreateContextStoreRequestConfigExtractionPoliciesModel;
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
   * The independent storage rule for this policy. If omitted, the original value is retained. New policies use the default value. Repeatedly confirmed memories refresh the validity period by default.
   */
  storagePolicy?: CreateContextStoreRequestConfigExtractionPoliciesStoragePolicy;
  /**
   * @remarks
   * The ID of the extraction policy. This parameter is optional. If omitted, the default value is default. The ID must start with a letter and can contain only letters, digits, underscores, and hyphens. It can be up to 64 characters in length. After default value processing, the ID must be unique within the same database. Modifying the name or instructions does not change this ID.
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
      model: CreateContextStoreRequestConfigExtractionPoliciesModel,
      name: 'string',
      preset: 'string',
      storagePolicy: CreateContextStoreRequestConfigExtractionPoliciesStoragePolicy,
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

export class CreateContextStoreRequestConfigExtractionPolicyModel extends $dara.Model {
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

export class CreateContextStoreRequestConfigExtractionPolicy extends $dara.Model {
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
   * The configuration of the extraction model.
   */
  model?: CreateContextStoreRequestConfigExtractionPolicyModel;
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
   * @remarks
   * The list of scope fields where at least one must be non-empty. Valid values for elements: userId, agentId, appId, and runId.
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

export class CreateContextStoreRequestConfigSourceDatasetCustomFields extends $dara.Model {
  /**
   * @remarks
   * The description of the field. This parameter is required when usage is set to extraction-input and is appended to the extraction prompt.
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

export class CreateContextStoreRequestConfigSourceDatasetFilter extends $dara.Model {
  /**
   * @remarks
   * The subset of the pipeline where clause, which is pushed down to SQL.
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

export class CreateContextStoreRequestConfigSourceDatasetVersionPolicy extends $dara.Model {
  /**
   * @remarks
   * The version consumption mode. Valid values: follow, which consumes data incrementally by __dataset_seq, and fixed, which consumes the specified ACTIVE version in full at once.
   * 
   * @example
   * follow
   */
  mode?: string;
  /**
   * @remarks
   * The start __dataset_seq for the follow mode.
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

export class CreateContextStoreRequestConfigSourceDataset extends $dara.Model {
  /**
   * @remarks
   * The list of custom field declarations.
   */
  customFields?: CreateContextStoreRequestConfigSourceDatasetCustomFields[];
  /**
   * @remarks
   * The name of the dataset in the same AgentSpace. This parameter cannot be modified after creation.
   * 
   * @example
   * trajectory-with-crm-profile
   */
  datasetName?: string;
  /**
   * @remarks
   * The row filter conditions.
   */
  filter?: CreateContextStoreRequestConfigSourceDatasetFilter;
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
   * The row schema contract for the dataset. In the current phase, the value is fixed to MemorySourceV1.
   * 
   * @example
   * MemorySourceV1
   */
  schemaContract?: string;
  /**
   * @remarks
   * The version consumption policy for the dataset.
   */
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
   * @remarks
   * The list of agent names. An explicitly empty list returns a 400 error.
   * 
   * @example
   * ["sales-copilot"]
   */
  agentNames?: string[];
  /**
   * @remarks
   * Specifies whether to exclude degraded trajectories. Default value: false, which means degraded trajectories are included.
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
   * The native Simple Log Service (SLS) query statement. It is combined with the preceding conditions using AND.
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

export class CreateContextStoreRequestConfigSourceTrajectoryScopeMapping extends $dara.Model {
  /**
   * @remarks
   * The JSONPath for agentId. Default value: $.agent_name.
   * 
   * @example
   * $.agent_name
   */
  agentId?: string;
  /**
   * @remarks
   * The JSONPath for appId. Default value: $.service_names[0].
   * 
   * @example
   * $.service_names[0]
   */
  appId?: string;
  /**
   * @remarks
   * The JSONPath for runId. Default value: $.trajectory_id.
   * 
   * @example
   * $.trajectory_id
   */
  runId?: string;
  /**
   * @remarks
   * The JSONPath for userId. By default, no mapping is applied.
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

export class CreateContextStoreRequestConfigSourceTrajectory extends $dara.Model {
  /**
   * @remarks
   * The trajectory filter conditions. Conditions are combined with AND, and items within a list are combined with OR.
   */
  filter?: CreateContextStoreRequestConfigSourceTrajectoryFilter;
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
   * The polling interval in seconds. Valid values: 60 to 3600. Default value: 300.
   * 
   * @example
   * 300
   */
  pollIntervalSeconds?: number;
  /**
   * @remarks
   * The scope field mapping. The value is a JSONPath expression, and only the $.a.b and $.a[0] formats are supported.
   */
  scopeMapping?: CreateContextStoreRequestConfigSourceTrajectoryScopeMapping;
  /**
   * @remarks
   * The default mapping version for the trajectory identity. Version 1 retains the legacy rules. Version 2 reads user.id and enduser.id from agent attributes. The version is frozen upon creation.
   * 
   * @example
   * 2
   */
  scopeMappingVersion?: number;
  /**
   * @remarks
   * The start time for trajectory consumption in ISO 8601 UTC format. If this parameter is not specified, the default value is the creation time.
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
      scopeMappingVersion: 'scopeMappingVersion',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: CreateContextStoreRequestConfigSourceTrajectoryFilter,
      logstore: 'string',
      pollIntervalSeconds: 'number',
      scopeMapping: CreateContextStoreRequestConfigSourceTrajectoryScopeMapping,
      scopeMappingVersion: 'number',
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

export class CreateContextStoreRequestConfigSourceVersionPolicy extends $dara.Model {
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
   * The initial consumed append sequence number. It is a decimal string of a non-negative int64 value. Default value: 0. The __dataset_seq field is used, and the business timestamp is not used as the consumption checkpoint.
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

export class CreateContextStoreRequestConfigSource extends $dara.Model {
  /**
   * @remarks
   * The AgentSpace where the trace data source resides. If this parameter is not specified, the default value is the AgentSpace in the current path. Cross-AgentSpace is not supported in the current phase. If specified, the value must be the same as the path AgentSpace. Otherwise, a 400 parameter error is returned. This parameter cannot be modified after creation.
   * 
   * @example
   * my-agent-space
   */
  agentSpace?: string;
  /**
   * @remarks
   * The DatasetBinding v1 shared with optimization tasks. It includes version, selection (all/window and structured filters), and customFields. It is validated by the server and does not accept SQL or column mappings.
   * 
   * @example
   * {"version":1,"selection":{"mode":"all"}}
   */
  binding?: { [key: string]: any };
  /**
   * @remarks
   * The dataset datasource config. This parameter is required when the source type is dataset.
   */
  dataset?: CreateContextStoreRequestConfigSourceDataset;
  /**
   * @remarks
   * The name of the dataset source for the experience. The dataset must reside in the current AgentSpace. This parameter is provided only when the source type is dataset for an experience.
   * 
   * @example
   * reviewed_trajectories
   */
  datasetName?: string;
  /**
   * @remarks
   * The input format of the dataset. For dataset sources in the experience library, only atif is supported, and the fixed columns are the same as those in optimization tasks.
   * 
   * @example
   * atif
   */
  format?: string;
  /**
   * @remarks
   * The maximum number of records to read per batch from the dataset. Valid values: 1 to 1000. Default value: 1000. In manual mode, exceeding the limit causes a failure. In follow mode, bounded pagination is used to continue consumption.
   * 
   * @example
   * 1000
   */
  maxRecords?: number;
  /**
   * @remarks
   * The start time for data backfill in ISO 8601 UTC format. If this parameter is not specified, the backfill starts from the current time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The trajectory datasource config. This parameter is required when the source type is trajectory.
   */
  trajectory?: CreateContextStoreRequestConfigSourceTrajectory;
  /**
   * @remarks
   * The data source type for the memory type. Valid values: trajectory and dataset. If this parameter is not specified, the value is manual, which means data is written only through AddContexts. This parameter cannot be modified after creation.
   * 
   * @example
   * trajectory
   */
  type?: string;
  /**
   * @remarks
   * The continuous consumption configuration for datasets in the native experience library. The default mode is manual. The follow mode only allows binding.selection.mode=all and consumes data by append sequence number. This configuration cannot be modified after creation.
   */
  versionPolicy?: CreateContextStoreRequestConfigSourceVersionPolicy;
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
      dataset: CreateContextStoreRequestConfigSourceDataset,
      datasetName: 'string',
      format: 'string',
      maxRecords: 'number',
      startTime: 'string',
      trajectory: CreateContextStoreRequestConfigSourceTrajectory,
      type: 'string',
      versionPolicy: CreateContextStoreRequestConfigSourceVersionPolicy,
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

export class CreateContextStoreRequestConfigStoragePolicy extends $dara.Model {
  /**
   * @remarks
   * The allowed storage actions. Default value: all. Valid values: ADD, UPDATE, MERGE, and DELETE.
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
   * Specifies whether to enable human edit protection. Default value: true. If enabled, automatic extraction does not overwrite manually modified memories.
   * 
   * @example
   * true
   */
  humanEditProtection?: boolean;
  /**
   * @remarks
   * The upsert merge key. Valid values: factKey, semantic, and both. Default value: semantic.
   * 
   * @example
   * semantic
   */
  mergeKey?: string;
  /**
   * @remarks
   * The storage mode. Valid values: event (event append) and upsert (merge and update). Default value: upsert.
   * 
   * @example
   * upsert
   */
  mode?: string;
  /**
   * @remarks
   * The semantic merge similarity threshold. Valid values: 0 to 1. Default value: 0.4.
   * 
   * @example
   * 0.4
   */
  similarityThreshold?: number;
  /**
   * @remarks
   * The number of days before a memory expires. A value of 0 indicates that the memory does not expire.
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

export class CreateContextStoreRequestConfig extends $dara.Model {
  /**
   * @remarks
   * The audit configuration.
   */
  audit?: CreateContextStoreRequestConfigAudit;
  /**
   * @remarks
   * The list of extraction policies. You can specify 1 to 10 policies. Compatible fields returned as-is during updates are ignored. strategyVersion indicates the snapshot version of the entire database configuration.
   */
  extractionPolicies?: CreateContextStoreRequestConfigExtractionPolicies[];
  /**
   * @remarks
   * The extraction policy for the memory type.
   */
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
   * The experience mining interval, which controls how often experience mining is executed. Valid values: 1h, 6h, 12h, and 1d. Default value: 1d. This parameter cannot be modified after creation.
   * 
   * @example
   * 1d
   */
  miningInterval?: string;
  /**
   * @remarks
   * The scope constraint policy.
   */
  scopePolicy?: CreateContextStoreRequestConfigScopePolicy;
  /**
   * @remarks
   * The list of service names. This parameter is required and cannot be empty. It works with source.agentSpace to locate the trace data source. The trajectory extraction service uses agentSpace to query the bound CMS workspace and project/logstore, and then filters the data by serviceName. This parameter cannot be modified after creation (no modification entry is available in the current release).
   * 
   * @example
   * ["order-service","payment-service"]
   */
  serviceNames?: string[];
  /**
   * @remarks
   * The datasource config, which serves only as the root identity for the data source. This is an optional block.
   */
  source?: CreateContextStoreRequestConfigSource;
  /**
   * @remarks
   * The storage policy for the memory type.
   */
  storagePolicy?: CreateContextStoreRequestConfigStoragePolicy;
  static names(): { [key: string]: string } {
    return {
      audit: 'audit',
      extractionPolicies: 'extractionPolicies',
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
      extractionPolicies: { 'type': 'array', 'itemType': CreateContextStoreRequestConfigExtractionPolicies },
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
    if(Array.isArray(this.extractionPolicies)) {
      $dara.Model.validateArray(this.extractionPolicies);
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
   * The context library configuration, including data sources and metadata field mappings.
   */
  config?: CreateContextStoreRequestConfig;
  /**
   * @remarks
   * The name of the context store. The name must be globally unique within the AgentSpace and 2 to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * my-context-store
   */
  contextStoreName?: string;
  /**
   * @remarks
   * The type of the context store. Example values include experience (experience store) and memory (memory store).
   * 
   * This parameter is required.
   * 
   * @example
   * experience
   */
  contextType?: string;
  /**
   * @remarks
   * The description of the context store, which helps business users understand its purpose.
   * 
   * @example
   * My context store
   */
  description?: string;
  /**
   * @remarks
   * The idempotency token, a unique string generated by the client to ensure the idempotency of the creation operation.
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

