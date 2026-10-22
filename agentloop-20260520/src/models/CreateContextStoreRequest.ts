// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContextStoreRequestConfigAudit extends $dara.Model {
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
   * The logging mode for recall queries. Valid values: raw (plaintext) and hash (HMAC only). Default value: raw.
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
   * Specifies whether to execute this policy for new inputs. Default value: true. Disabling the policy does not delete historical memories.
   * 
   * @example
   * true
   */
  enabled?: boolean;
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
   * The ID of the extraction policy. This parameter is optional. If omitted, the default value is used. The ID must start with a letter and can contain only letters, digits, underscores, and hyphens. The maximum length is 64 characters. After default value processing, the ID must be unique within the same library. Modifying the name or instructions does not change this ID.
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
   * Specifies that at least one of the specified scope fields must be non-empty. Valid values for elements: userId, agentId, appId, and runId.
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
   * The field description. This parameter is required when usage is set to extraction-input and is appended to the extraction prompt.
   * 
   * @example
   * Customer tier
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the field is sensitive.
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
   * The target path for writing data, such as metadata.customerTier.
   * 
   * @example
   * metadata.customerTier
   */
  target?: string;
  /**
   * @remarks
   * The usage of the field. Valid values:
   * - extraction-input: Participates in extraction.
   * - ignore: Ignored.
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

export class CreateContextStoreRequestConfigSourceDatasetVersionPolicy extends $dara.Model {
  /**
   * @remarks
   * The consumption mode. Valid values:
   * - follow: Consumes data incrementally based on __dataset_seq.
   * - fixed: Consumes the specified ACTIVE version in full once.
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
   * The Dataset version specified for the fixed mode.
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
   * The name of the Dataset in the same AgentSpace. This parameter cannot be modified after creation.
   * 
   * @example
   * trajectory-with-crm-profile
   */
  datasetName?: string;
  /**
   * @remarks
   * The row filter condition.
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
   * The row schema contract for the Dataset. The value is fixed to MemorySourceV1 in the current phase.
   * 
   * @example
   * MemorySourceV1
   */
  schemaContract?: string;
  /**
   * @remarks
   * The version consumption policy for the Dataset.
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
   * The native Simple Log Service (SLS) query statement, which is combined with the preceding conditions using AND.
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

export class CreateContextStoreRequestConfigSourceTrajectory extends $dara.Model {
  /**
   * @remarks
   * The trajectory filter condition. Conditions are combined with AND, and items within a list are combined with OR.
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
   * The scope field mapping. The value is a JSONPath expression. Only the $.a.b and $.a[0] formats are supported.
   */
  scopeMapping?: CreateContextStoreRequestConfigSourceTrajectoryScopeMapping;
  /**
   * @remarks
   * The start time for trajectory consumption in ISO 8601 UTC format. If this parameter is not specified, the creation time is used by default.
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
   * The initial consumed append sequence number. The value is a decimal string of a non-negative int64 integer. Default value: 0. The __dataset_seq field is used, and the business timestamp is not used as the consumption checkpoint.
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
   * The AgentSpace where the trace data source is located. If not specified, the default value is the AgentSpace in the current path. Cross-AgentSpace operations are not supported in the current phase. If specified, the value must be identical to the path AgentSpace. Otherwise, a 400 parameter error is returned. This parameter cannot be modified after creation.
   * 
   * @example
   * my-agent-space
   */
  agentSpace?: string;
  /**
   * @remarks
   * The DatasetBinding v1 configuration shared with optimization tasks. It includes version, selection (all/window and structured filters), and customFields. It is validated by the server and does not accept SQL or column mappings.
   * 
   * @example
   * {"version":1,"selection":{"mode":"all"}}
   */
  binding?: { [key: string]: any };
  /**
   * @remarks
   * The Dataset data source configuration. This parameter is required when source.type is set to dataset.
   */
  dataset?: CreateContextStoreRequestConfigSourceDataset;
  /**
   * @remarks
   * The source name of the experience Dataset, which must be located in the current AgentSpace. This parameter is provided only when the type is experience and source.type is set to dataset.
   * 
   * @example
   * reviewed_trajectories
   */
  datasetName?: string;
  /**
   * @remarks
   * The input format of the Dataset. For experience library Dataset sources, only atif is supported, and the fixed columns are consistent with those of optimization tasks.
   * 
   * @example
   * atif
   */
  format?: string;
  /**
   * @remarks
   * The maximum number of Dataset records to read per batch. Valid values: 1 to 1000. Default value: 1000. In manual mode, exceeding the limit causes a failure. In follow mode, bounded pagination is used to continue consumption.
   * 
   * @example
   * 1000
   */
  maxRecords?: number;
  /**
   * @remarks
   * The start time for data backfill in ISO 8601 UTC format. If this parameter is not specified, the current time is used.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The trajectory data source configuration. This parameter is required when source.type is set to trajectory.
   */
  trajectory?: CreateContextStoreRequestConfigSourceTrajectory;
  /**
   * @remarks
   * The data source type for the memory type. Valid values: trajectory, dataset. If this parameter is not specified, the default value is manual, which means data is written only through AddContexts. This parameter cannot be modified after creation.
   * 
   * @example
   * trajectory
   */
  type?: string;
  /**
   * @remarks
   * The continuous consumption configuration for the native experience dataset. The default value is manual. The follow mode is allowed only when binding.selection.mode is set to all. In this mode, data is consumed by append sequence number. This configuration cannot be modified after creation.
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
   * The allowed storage actions. Default value: all. Valid values: ADD, UPDATE, MERGE, DELETE.
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
   * Specifies whether to enable manual edit protection. Default value: true. If this feature is enabled, automatic extraction does not overwrite manually modified memories.
   * 
   * @example
   * true
   */
  humanEditProtection?: boolean;
  /**
   * @remarks
   * The merge key for upsert operations. Default value: semantic. Valid values: factKey, semantic, both.
   * 
   * @example
   * semantic
   */
  mergeKey?: string;
  /**
   * @remarks
   * The storage mode. Default value: upsert. Valid values: event (event append), upsert (merge update).
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
   * The extraction policies. You can specify 1 to 10 policies. In a request, you can specify either this field or the compatible extractionPolicy field, but not both. The strategyVersion parameter indicates the snapshot version of the entire library configuration.
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
   * The list of service names. This parameter is required and cannot be empty. It works with source.agentSpace to locate the trace data source. The trajectory extraction service uses agentSpace to query the bound CMS workspace and project or logstore, and then filters by serviceName. This parameter cannot be modified after creation.
   * 
   * @example
   * ["order-service","payment-service"]
   */
  serviceNames?: string[];
  /**
   * @remarks
   * The data source configuration, which serves only as the root identifier for the data source. This block is optional.
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
   * The name of the context store. The name must be globally unique within AgentSpace and 2 to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * my-context-store
   */
  contextStoreName?: string;
  /**
   * @remarks
   * The type of the context store. Valid values include experience (experience store) and memory (memory store).
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
   * The idempotency token. This is a unique string generated by the client to ensure the idempotency of the creation operation.
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

