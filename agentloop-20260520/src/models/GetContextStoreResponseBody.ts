// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContextStoreResponseBodyConfigAudit extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to write item events for candidates dropped during retrieval. Default value: false.
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

export class GetContextStoreResponseBodyConfigExtractionPolicyModel extends $dara.Model {
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
   * The custom extraction instructions. This parameter is required when preset is set to custom. Length: 1 to 8,000 characters.
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
   * The name of the SLS project.
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
   * The SLS project where both resources are located, which is the project bound to the AgentSpace.
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
   * The schema version.
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
   * At least one of the specified scope fields must be non-empty. Valid element values: userId, agentId, appId, and runId.
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
   * The description of the field. This parameter is required when usage is extraction-input and is appended to the extraction prompt.
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

export class GetContextStoreResponseBodyConfigSourceDatasetFilter extends $dara.Model {
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

export class GetContextStoreResponseBodyConfigSourceDatasetVersionPolicy extends $dara.Model {
  /**
   * @remarks
   * The consumption mode. Valid values:
   * - follow: Consumes data incrementally based on __dataset_seq.
   * - fixed: Consumes the specified ACTIVE version in full at once.
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

export class GetContextStoreResponseBodyConfigSourceDataset extends $dara.Model {
  /**
   * @remarks
   * The list of custom field declarations.
   */
  customFields?: GetContextStoreResponseBodyConfigSourceDatasetCustomFields[];
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
   * The row schema contract of the Dataset. The value is fixed to MemorySourceV1 in the current phase.
   * 
   * @example
   * MemorySourceV1
   */
  schemaContract?: string;
  /**
   * @remarks
   * The version consumption policy of the Dataset.
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
   * Specifies whether to exclude degraded trajectories. Default value: false (includes degraded trajectories).
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
   * The trajectory filter conditions. Conditions are combined with AND, while items within a list are combined with OR.
   */
  filter?: GetContextStoreResponseBodyConfigSourceTrajectoryFilter;
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
   * The continuous consumption mode, which is fixed to follow.
   * 
   * @example
   * follow
   */
  mode?: string;
  /**
   * @remarks
   * The initial consumed append sequence, which is a decimal string of a non-negative int64. The default is 0. It uses __dataset_seq. Business timestamps are not used as consumption checkpoints.
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
   * The AgentSpace where the trace data source resides. It must be the same as the AgentSpace specified during creation.
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
   * The Dataset datasource config for the memory type. This parameter is required when the type is memory and source.type is dataset.
   */
  dataset?: GetContextStoreResponseBodyConfigSourceDataset;
  /**
   * @remarks
   * The name of the source Dataset for the experience type in the current AgentSpace.
   * 
   * @example
   * reviewed_trajectories
   */
  datasetName?: string;
  /**
   * @remarks
   * The input format of the Dataset. For Datasets from the experience library, the value is atif.
   * 
   * @example
   * atif
   */
  format?: string;
  /**
   * @remarks
   * The maximum number of records to read from the Dataset at a time. Valid values: 1 to 1000.
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
   * The source type, which can be trajectory or dataset. For experience, if not specified, it inherits the trajectory configuration. For Dataset, it uses the datasetName, format, and binding at this level. The default is manual. If versionPolicy.mode is follow, it continuously processes and automatically applies changes to this experience store. For memory, if not specified, it indicates manual, meaning only AddContexts writes data. Otherwise, it uses the sub-configuration of the trajectory or dataset with the same name. This property cannot be modified after creation.
   * 
   * @example
   * dataset
   */
  type?: string;
  /**
   * @remarks
   * The continuous consumption configuration for the native experience store Dataset. The default is manual. The follow mode only allows binding.selection.mode=all and consumes by append sequence. This cannot be changed after creation.
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
   * The processing progress. For memory trajectory, it includes processTimeNs and watermarkMs. For dataset, it includes seq. For manual, it is empty. For experience Dataset follow mode, seq uses an exact int64 decimal string.
   */
  checkpoint?: { [key: string]: any };
  /**
   * @remarks
   * The current scheduled sequence window for experience Dataset follow mode, including after, until, and runId. All sequences are decimal strings. Failures do not advance the submitted checkpoint.
   */
  currentWindow?: { [key: string]: string };
  /**
   * @remarks
   * The desensitized latest error message. It is empty when the status is normal.
   * 
   * @example
   * Timeout reading the data source
   */
  lastError?: string;
  /**
   * @remarks
   * The run ID of the last successful automatic application to the native experience store. This is for audit purposes only.
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
   * The consecutive retry count.
   * 
   * @example
   * 0
   */
  retryCount?: number;
  /**
   * @remarks
   * The data source status. Valid values: Validating, Ready, Running, Retrying, Paused, SourceSchemaChanged, and Failed.
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
   * The allowed storage actions. The default is all: ADD, UPDATE, MERGE, and DELETE.
   * 
   * @example
   * ["ADD","UPDATE","MERGE","DELETE"]
   */
  allowedActions?: string[];
  /**
   * @remarks
   * Specifies whether to deduplicate in event mode. The default is true.
   * 
   * @example
   * true
   */
  dedupe?: boolean;
  /**
   * @remarks
   * The human edit protection. The default is true. When enabled, automatic extraction does not overwrite manually modified memories.
   * 
   * @example
   * true
   */
  humanEditProtection?: boolean;
  /**
   * @remarks
   * The upsert merge key. Valid values: factKey, semantic, and both. The default is semantic.
   * 
   * @example
   * semantic
   */
  mergeKey?: string;
  /**
   * @remarks
   * The storage mode. Valid values: event for event appending, and upsert for merge updating. The default is upsert.
   * 
   * @example
   * upsert
   */
  mode?: string;
  /**
   * @remarks
   * The semantic merge similarity threshold. Valid values: 0 to 1. The default is 0.4.
   * 
   * @example
   * 0.4
   */
  similarityThreshold?: number;
  /**
   * @remarks
   * The memory expiration days. A value of 0 indicates no expiration.
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
   * The extraction policy for the memory type.
   */
  extractionPolicy?: GetContextStoreResponseBodyConfigExtractionPolicy;
  /**
   * @remarks
   * The system-assigned coordinates of the event Logstore for the memory type, located in the Simple Log Service (SLS) project bound to the AgentSpace.
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
   * The interval for experience mining. Valid values: 1h, 6h, 12h, and 1d. Default value: 1d.
   * 
   * @example
   * 1d
   */
  miningInterval?: string;
  /**
   * @remarks
   * The name of the internal running task associated with the server. Continuous libraries use this for read-only viewing of consumption records, while manual libraries can run limited mining. This is not inferred by the client and cannot replace the ingestion and retrieval criteria of the native experience library.
   * 
   * @example
   * experience-review-library
   */
  miningTaskName?: string;
  /**
   * @remarks
   * The coordinates of observability resources for the memory type.
   */
  observability?: GetContextStoreResponseBodyConfigObservability;
  /**
   * @remarks
   * The location of the memory output dataset for the memory type.
   */
  outputDataset?: GetContextStoreResponseBodyConfigOutputDataset;
  /**
   * @remarks
   * The scope constraint policy.
   */
  scopePolicy?: GetContextStoreResponseBodyConfigScopePolicy;
  /**
   * @remarks
   * The list of service names, which are used together with source.agentSpace to locate the trace data source. This parameter cannot be modified in the current phase.
   * 
   * @example
   * ["order-service","payment-service"]
   */
  serviceNames?: string[];
  /**
   * @remarks
   * The datasource config provided by the user, which serves only as the root identity for the data source.
   */
  source?: GetContextStoreResponseBodyConfigSource;
  /**
   * @remarks
   * The data source running status for memory type and experience Dataset follow mode. The experience store submits a checkpoint only after successful publishing and automatic application. Pausing and restarting retain the checkpoint.
   */
  sourceStatus?: GetContextStoreResponseBodyConfigSourceStatus;
  /**
   * @remarks
   * The storage policy for the memory type.
   */
  storagePolicy?: GetContextStoreResponseBodyConfigStoragePolicy;
  /**
   * @remarks
   * The current effective strategy version number for the memory type.
   * 
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
      miningTaskName: 'miningTaskName',
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
      miningTaskName: 'string',
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
   * The context store name.
   * 
   * @example
   * my-context-store
   */
  contextStoreName?: string;
  /**
   * @remarks
   * The context store type, such as experience for experience store and memory for memory store.
   * 
   * @example
   * experience
   */
  contextType?: string;
  /**
   * @remarks
   * The context store creation time in ISO 8601 UTC format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The context store description.
   * 
   * @example
   * My context store
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
   * The request ID used to locate the request during troubleshooting.
   * 
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
  /**
   * @remarks
   * The context store status. Valid values: ACTIVE, INITIALIZING, and FAILED.
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

