// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateManagedAgentRequestBodyAgenticFsMounts extends $dara.Model {
  /**
   * @remarks
   * The absolute mount path in the container, such as `/data/train`. Mount targets cannot be duplicated or form parent-child overwrites, and must avoid platform-reserved directories.
   * 
   * @example
   * /mnt/agenticfs/data
   */
  mountPath?: string;
  /**
   * @remarks
   * The existing non-empty relative directory under the access point. This is a required field validated by the backend for each mount item. Root directories, absolute paths, or parent directory segments are not allowed.
   * 
   * @example
   * workspace/data
   */
  path?: string;
  /**
   * @remarks
   * Specifies whether the mount is read-only. If omitted, the default value is false. This is not the read-only policy of a RAM role.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The access point domain name. This is a required field validated by the backend for each mount item. It does not contain a protocol, port, or path. Use the `DomainName` from the NAS `ListAccessPoints` response.
   * 
   * @example
   * ap-0123456789abcdef0.0123456789-vlm36.cn-hangzhou.nas.aliyuncs.com
   */
  server?: string;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'mountPath',
      path: 'path',
      readOnly: 'readOnly',
      server: 'server',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      path: 'string',
      readOnly: 'boolean',
      server: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateManagedAgentRequestBodyContextConfigurationBindings extends $dara.Model {
  /**
   * @remarks
   * The required field validated by the backend for each binding item. Null, blank, or control characters are not accepted. The backend trims leading and trailing spaces and then validates that the length is 1 to 128 characters. The first character must be a letter or digit, and the remaining characters can contain letters, digits, periods, hyphens, or underscores. Only resources in the current workspace can be referenced.
   * 
   * @example
   * kb-example
   */
  resourceId?: string;
  /**
   * @remarks
   * The required field validated by the backend for each binding item. Only `KNOWLEDGE_BASE` (knowledge base) or `DATA_CONNECTOR` (data connector) is accepted. The value is case-sensitive. Null or blank values are not accepted.
   * 
   * @example
   * KNOWLEDGE_BASE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resourceId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateManagedAgentRequestBodyContextConfiguration extends $dara.Model {
  /**
   * @remarks
   * The optional array. Null or null items are not accepted. Each item only allows `type` and `resourceId`. The combination of the same type and normalized resource ID cannot be duplicated. If omitted during creation, no resource is selected. If omitted during an update, the original selection is retained. A non-empty array replaces the entire selection. An empty array can only clear the selection when the merged `enabled` value is false. To disable and clear the selection at the same time, pass `enabled:false` and `bindings:[]`. Explicitly submitted non-empty selections are validated for resource ownership and readiness, including selections saved when disabled.
   * 
   * **if can be null:**
   * false
   */
  bindings?: CreateManagedAgentRequestBodyContextConfigurationBindings[];
  /**
   * @remarks
   * The optional Boolean value. Null is not accepted. If this field is omitted during creation, the value is false. If it is omitted during an update, the current value is retained and cannot be automatically filled with false by the client. When updated to true, saved `bindings` can be reused. The merged enabled configuration must contain at least one resource. When updated to false, the resources are only disabled, and the original resource selection is not cleared.
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * false
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      bindings: 'bindings',
      enabled: 'enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindings: { 'type': 'array', 'itemType': CreateManagedAgentRequestBodyContextConfigurationBindings },
      enabled: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.bindings)) {
      $dara.Model.validateArray(this.bindings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateManagedAgentRequestBodyEnvironmentCredentialReferences extends $dara.Model {
  /**
   * @remarks
   * The ID of the credential.
   * 
   * This parameter is required.
   * 
   * @example
   * cred-1
   */
  credentialId?: string;
  static names(): { [key: string]: string } {
    return {
      credentialId: 'credentialId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateManagedAgentRequestBodyEnvironmentVariables extends $dara.Model {
  /**
   * @remarks
   * The name of the environment variable.
   * 
   * This parameter is required.
   * 
   * @example
   * API_KEY
   */
  name?: string;
  /**
   * @remarks
   * The value of the environment variable.
   * 
   * This parameter is required.
   * 
   * @example
   * sk-xxxx
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

export class CreateManagedAgentRequestBodyEnvironment extends $dara.Model {
  /**
   * @remarks
   * The list of credential references.
   */
  credentialReferences?: CreateManagedAgentRequestBodyEnvironmentCredentialReferences[];
  /**
   * @remarks
   * The list of environment variables.
   */
  variables?: CreateManagedAgentRequestBodyEnvironmentVariables[];
  static names(): { [key: string]: string } {
    return {
      credentialReferences: 'credentialReferences',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialReferences: { 'type': 'array', 'itemType': CreateManagedAgentRequestBodyEnvironmentCredentialReferences },
      variables: { 'type': 'array', 'itemType': CreateManagedAgentRequestBodyEnvironmentVariables },
    };
  }

  validate() {
    if(Array.isArray(this.credentialReferences)) {
      $dara.Model.validateArray(this.credentialReferences);
    }
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateManagedAgentRequestBodyHarnessConfiguration extends $dara.Model {
  /**
   * @remarks
   * The account key record ID in the qodercli connector. You can query it by using `ListConnectors`. It is not the original key. This parameter can be omitted if there is only one record, but must be specified if there are multiple records. Do not specify this parameter for qwenpaw.
   * 
   * @example
   * key-example
   */
  connectorServiceAccountKey?: string;
  /**
   * @remarks
   * The connector account name bound to qodercli. Do not specify this parameter for qwenpaw.
   * 
   * @example
   * my-connector-key
   */
  connectorServiceAccountName?: string;
  static names(): { [key: string]: string } {
    return {
      connectorServiceAccountKey: 'connectorServiceAccountKey',
      connectorServiceAccountName: 'connectorServiceAccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorServiceAccountKey: 'string',
      connectorServiceAccountName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateManagedAgentRequestBodyHarness extends $dara.Model {
  /**
   * @remarks
   * The runtime framework configuration.
   */
  configuration?: CreateManagedAgentRequestBodyHarnessConfiguration;
  /**
   * @remarks
   * The runtime framework type. This field is required when `harness` is provided. Valid values: qwenpaw and qodercli.
   * 
   * @example
   * qodercli
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: CreateManagedAgentRequestBodyHarnessConfiguration,
      type: 'string',
    };
  }

  validate() {
    if(this.configuration && typeof (this.configuration as any).validate === 'function') {
      (this.configuration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateManagedAgentRequestBodyModelQuota extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the token quota. If not specified, the default value is true. If set to false, the quota is disabled and existing quota rules are deleted.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The quota limit type. This field is required and validated by the backend when the quota is enabled. Fixed value: token.
   * 
   * @example
   * token
   */
  limitType?: string;
  /**
   * @remarks
   * The statistical period of the quota. This field is required and validated by the backend when the quota is enabled. Valid values: day (daily) and month (monthly).
   * 
   * @example
   * day
   */
  periodType?: string;
  /**
   * @remarks
   * The maximum number of tokens allowed to be consumed in a single period. This field is required and validated by the backend when the quota is enabled. The value must be greater than 0.
   * 
   * @example
   * 1000000
   */
  usageLimit?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      limitType: 'limitType',
      periodType: 'periodType',
      usageLimit: 'usageLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      limitType: 'string',
      periodType: 'string',
      usageLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateManagedAgentRequestBodyModel extends $dara.Model {
  /**
   * @remarks
   * For qwenpaw, use the workspace model connection ID. For qodercli, use the available model identifier returned by `ListConnectorModels`.
   * 
   * This parameter is required.
   * 
   * @example
   * mc-1
   */
  modelConnectionId?: string;
  /**
   * @remarks
   * For qwenpaw, use the name of the upstream model created under the model connection. This parameter is required. For qodercli, this parameter can be omitted.
   * 
   * @example
   * qwen-max
   */
  modelName?: string;
  /**
   * @remarks
   * The model token quota configuration. If this parameter is not passed, no quota is configured.
   */
  quota?: CreateManagedAgentRequestBodyModelQuota;
  /**
   * @remarks
   * Valid values: off, low, medium, high, xhigh, and max. If not passed or set to null during creation, the default value is used. When updating and submitting the model configuration, if the thinking level is not passed or is null, it is restored to the default value. Except for off, which is converted to none, the value is passed to the runtime framework as is. The system does not validate model support or automatically downgrade the level. If the model does not support the specified level, adjust the level.
   * 
   * @example
   * high
   */
  thinkingLevel?: string;
  static names(): { [key: string]: string } {
    return {
      modelConnectionId: 'modelConnectionId',
      modelName: 'modelName',
      quota: 'quota',
      thinkingLevel: 'thinkingLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelConnectionId: 'string',
      modelName: 'string',
      quota: CreateManagedAgentRequestBodyModelQuota,
      thinkingLevel: 'string',
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

export class CreateManagedAgentRequestBodyNetworkAccessInternet extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow Internet access.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateManagedAgentRequestBodyNetworkAccessVpc extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow VPC access.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateManagedAgentRequestBodyNetwork extends $dara.Model {
  /**
   * @remarks
   * The public network access configuration.
   */
  accessInternet?: CreateManagedAgentRequestBodyNetworkAccessInternet;
  /**
   * @remarks
   * The VPC access configuration.
   */
  accessVpc?: CreateManagedAgentRequestBodyNetworkAccessVpc;
  static names(): { [key: string]: string } {
    return {
      accessInternet: 'accessInternet',
      accessVpc: 'accessVpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessInternet: CreateManagedAgentRequestBodyNetworkAccessInternet,
      accessVpc: CreateManagedAgentRequestBodyNetworkAccessVpc,
    };
  }

  validate() {
    if(this.accessInternet && typeof (this.accessInternet as any).validate === 'function') {
      (this.accessInternet as any).validate();
    }
    if(this.accessVpc && typeof (this.accessVpc as any).validate === 'function') {
      (this.accessVpc as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateManagedAgentRequestBodyOssMounts extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket. This field is required for each mount item and is validated by the backend.
   * 
   * @example
   * bucket-001
   */
  bucketName?: string;
  /**
   * @remarks
   * The absolute mount path in the container, such as `/data/train`. Mount targets cannot be duplicated or form parent-child overwrites, and must avoid platform-reserved directories.
   * 
   * @example
   * /mnt/oss/datasets
   */
  mountPath?: string;
  /**
   * @remarks
   * The non-empty relative object directory prefix in the bucket. This field is required for each mount item.
   * 
   * @example
   * datasets
   */
  path?: string;
  /**
   * @remarks
   * Specifies whether the mount is read-only. Default value: false.
   */
  readOnly?: boolean;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucketName',
      mountPath: 'mountPath',
      path: 'path',
      readOnly: 'readOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      mountPath: 'string',
      path: 'string',
      readOnly: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateManagedAgentRequestBodyPromptVariables extends $dara.Model {
  /**
   * @remarks
   * The default value.
   * 
   * @example
   * default
   */
  defaultValue?: string;
  /**
   * @remarks
   * The variable description.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * The variable name.
   * 
   * @example
   * brand
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'defaultValue',
      description: 'description',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      description: 'string',
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

export class CreateManagedAgentRequestBodyRuntimeCompute extends $dara.Model {
  /**
   * @remarks
   * The compute specification.
   * 
   * This parameter is required.
   * 
   * @example
   * STANDARD
   */
  computeClass?: string;
  static names(): { [key: string]: string } {
    return {
      computeClass: 'computeClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeClass: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateManagedAgentRequestBodyRuntimeHpa extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable elastic scaling. Default value: false.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The maximum number of concurrent sessions allowed per instance. Valid values: 1 to 20. Default value: 20.
   * 
   * @example
   * 20
   */
  maxConcurrentSessionsPerSandbox?: number;
  /**
   * @remarks
   * The maximum number of instances. Valid values: 0 to 100. Default value: 10. The value cannot be less than minSandboxCount.
   * 
   * @example
   * 3
   */
  maxSandboxCount?: number;
  /**
   * @remarks
   * The minimum number of instances. Valid values: 0 to 100. Default value: 1. The value cannot be greater than maxSandboxCount.
   * 
   * @example
   * 1
   */
  minSandboxCount?: number;
  /**
   * @remarks
   * The maximum idle time for a session, in seconds. Valid values: 60 to 86400. Default value: 600.
   * 
   * @example
   * 3600
   */
  sessionTtlSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      maxConcurrentSessionsPerSandbox: 'maxConcurrentSessionsPerSandbox',
      maxSandboxCount: 'maxSandboxCount',
      minSandboxCount: 'minSandboxCount',
      sessionTtlSeconds: 'sessionTtlSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      maxConcurrentSessionsPerSandbox: 'number',
      maxSandboxCount: 'number',
      minSandboxCount: 'number',
      sessionTtlSeconds: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateManagedAgentRequestBodyRuntimeSessionPolicy extends $dara.Model {
  /**
   * @remarks
   * The name of the request header used for session identification. Required when type is set to ISOLATED_HEADER_FIELD. Must be a valid HTTP request header name. Do not specify this parameter for other policy types.
   * 
   * @example
   * X-Session-Id
   */
  headerName?: string;
  /**
   * @remarks
   * The type of the session policy.
   * 
   * This parameter is required.
   * 
   * @example
   * DISABLED
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      headerName: 'headerName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateManagedAgentRequestBodyRuntime extends $dara.Model {
  /**
   * @remarks
   * The compute configuration.
   * 
   * This parameter is required.
   */
  compute?: CreateManagedAgentRequestBodyRuntimeCompute;
  /**
   * @remarks
   * The elastic scaling and session configuration. Omitted fields use default values. To retain the original policy during an update, submit the complete hpa object or omit the entire runtime object.
   */
  hpa?: CreateManagedAgentRequestBodyRuntimeHpa;
  /**
   * @remarks
   * The session policy configuration.
   * 
   * This parameter is required.
   */
  sessionPolicy?: CreateManagedAgentRequestBodyRuntimeSessionPolicy;
  static names(): { [key: string]: string } {
    return {
      compute: 'compute',
      hpa: 'hpa',
      sessionPolicy: 'sessionPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compute: CreateManagedAgentRequestBodyRuntimeCompute,
      hpa: CreateManagedAgentRequestBodyRuntimeHpa,
      sessionPolicy: CreateManagedAgentRequestBodyRuntimeSessionPolicy,
    };
  }

  validate() {
    if(this.compute && typeof (this.compute as any).validate === 'function') {
      (this.compute as any).validate();
    }
    if(this.hpa && typeof (this.hpa as any).validate === 'function') {
      (this.hpa as any).validate();
    }
    if(this.sessionPolicy && typeof (this.sessionPolicy as any).validate === 'function') {
      (this.sessionPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateManagedAgentRequestBodySkillsVersionSelector extends $dara.Model {
  /**
   * @remarks
   * The type of the version selector.
   * 
   * @example
   * LABEL
   */
  type?: string;
  /**
   * @remarks
   * The value of the selector. For LABEL, specify the tag name, such as latest. For VERSION, specify the exact version number.
   * 
   * @example
   * latest
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
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

export class CreateManagedAgentRequestBodySkills extends $dara.Model {
  /**
   * @remarks
   * The name of the skill.
   * 
   * This parameter is required.
   * 
   * @example
   * code-analysis
   */
  name?: string;
  /**
   * @remarks
   * The source type of the skill.
   * 
   * @example
   * REFERENCE
   */
  sourceType?: string;
  /**
   * @remarks
   * The skill version field for backward compatibility with legacy requests. For new requests, use sourceType and versionSelector. Do not submit this field in combination with sourceType.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  /**
   * @remarks
   * The version selector for the skill reference. Supports LABEL for tags and VERSION for specific versions. Defaults to LABEL/latest when omitted. Not applicable for STATIC sources.
   */
  versionSelector?: CreateManagedAgentRequestBodySkillsVersionSelector;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      sourceType: 'sourceType',
      version: 'version',
      versionSelector: 'versionSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      sourceType: 'string',
      version: 'string',
      versionSelector: CreateManagedAgentRequestBodySkillsVersionSelector,
    };
  }

  validate() {
    if(this.versionSelector && typeof (this.versionSelector as any).validate === 'function') {
      (this.versionSelector as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateManagedAgentRequestBodySubAgentsSkills extends $dara.Model {
  /**
   * @remarks
   * The name of the skill.
   * 
   * @example
   * web-search
   */
  name?: string;
  /**
   * @remarks
   * The version of the skill.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class CreateManagedAgentRequestBodySubAgents extends $dara.Model {
  /**
   * @remarks
   * The instruction for the sub-agent.
   * 
   * This parameter is required.
   * 
   * @example
   * Review the code
   */
  instruction?: string;
  /**
   * @remarks
   * The name of the sub-agent.
   * 
   * This parameter is required.
   * 
   * @example
   * reviewer-agent
   */
  name?: string;
  /**
   * @remarks
   * The list of skills for the sub-agent.
   */
  skills?: CreateManagedAgentRequestBodySubAgentsSkills[];
  static names(): { [key: string]: string } {
    return {
      instruction: 'instruction',
      name: 'name',
      skills: 'skills',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instruction: 'string',
      name: 'string',
      skills: { 'type': 'array', 'itemType': CreateManagedAgentRequestBodySubAgentsSkills },
    };
  }

  validate() {
    if(Array.isArray(this.skills)) {
      $dara.Model.validateArray(this.skills);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateManagedAgentRequestBodyTemplateAiRegistry extends $dara.Model {
  /**
   * @remarks
   * The name of the template in the AI registry.
   * 
   * This parameter is required.
   * 
   * @example
   * code-review-template
   */
  name?: string;
  /**
   * @remarks
   * The version of the template in the AI registry.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class CreateManagedAgentRequestBodyTemplate extends $dara.Model {
  /**
   * @remarks
   * The AI registry template configuration.
   */
  aiRegistry?: CreateManagedAgentRequestBodyTemplateAiRegistry;
  static names(): { [key: string]: string } {
    return {
      aiRegistry: 'aiRegistry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiRegistry: CreateManagedAgentRequestBodyTemplateAiRegistry,
    };
  }

  validate() {
    if(this.aiRegistry && typeof (this.aiRegistry as any).validate === 'function') {
      (this.aiRegistry as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateManagedAgentRequestBodyTools extends $dara.Model {
  /**
   * @remarks
   * The name of the tool.
   * 
   * This parameter is required.
   * 
   * @example
   * code-reviewer
   */
  name?: string;
  /**
   * @remarks
   * The type of the tool.
   * 
   * This parameter is required.
   * 
   * @example
   * MCP
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateManagedAgentRequestBody extends $dara.Model {
  /**
   * @remarks
   * The inbound access mode.
   * 
   * @example
   * API_KEY
   */
  accessMode?: string;
  /**
   * @remarks
   * The user access scope.
   * 
   * @example
   * ALL
   */
  accessScope?: string;
  /**
   * @remarks
   * The NAS storage mount configuration. Currently, only the AgenticFS type is supported, which is used to mount file directories in access points to agent runtime instances. The list of AgenticFS directory mounts. The total number of AgenticFS mounts and `ossMounts` cannot exceed 10. If omitted or set to `[]` during creation, no mount is configured. If omitted during an update, the original mounts are retained. If set to `[]` during an update, the mounts are cleared. Null is not accepted.
   */
  agenticFsMounts?: CreateManagedAgentRequestBodyAgenticFsMounts[];
  /**
   * @remarks
   * The optional JSON object. Only `enabled` and `bindings` are allowed. Null, JSON character strings, or the legacy `contextSpaceId` field is not accepted. If the entire object is omitted, the server-side default configurations are used, which is typically disabled. Pass `{}` or `{enabled:false}` to explicitly keep it disabled. If `enabled` is set to true, you must select at least one resource in the current workspace. Non-empty `bindings` are validated for resource ownership and readiness even when disabled. Platform-managed context channels are not configured through regular tools.
   * 
   * **if can be null:**
   * false
   */
  contextConfiguration?: CreateManagedAgentRequestBodyContextConfiguration;
  /**
   * @remarks
   * The description of the managed Harness agent.
   * 
   * @example
   * Agent for code review
   */
  description?: string;
  /**
   * @remarks
   * The environment configuration.
   */
  environment?: CreateManagedAgentRequestBodyEnvironment;
  /**
   * @remarks
   * The runtime framework object. If omitted, the default value is qwenpaw. Supported values are qwenpaw and qodercli. The type cannot be changed after creation.
   */
  harness?: CreateManagedAgentRequestBodyHarness;
  /**
   * @remarks
   * The agent instruction, which is used to guide the behavior of the agent.
   * 
   * @example
   * You are a code review assistant
   */
  instruction?: string;
  /**
   * @remarks
   * The model configuration.
   * 
   * This parameter is required.
   */
  model?: CreateManagedAgentRequestBodyModel;
  /**
   * @remarks
   * The name of the managed Harness agent.
   * 
   * This parameter is required.
   * 
   * @example
   * my-agent
   */
  name?: string;
  /**
   * @remarks
   * The runtime network configuration. If provided, you must include both accessInternet.enabled and accessVpc.enabled. Actual access is subject to workspace network restrictions.
   */
  network?: CreateManagedAgentRequestBodyNetwork;
  /**
   * @remarks
   * The list of OSS directory mounts. The total number of items in this list and agenticFsMounts cannot exceed 10. Updates replace the entire list. Pass an empty array [] to clear the list.
   */
  ossMounts?: CreateManagedAgentRequestBodyOssMounts[];
  /**
   * @remarks
   * The prompt variable declaration.
   */
  promptVariables?: CreateManagedAgentRequestBodyPromptVariables[];
  /**
   * @remarks
   * The runtime configuration. You must provide both compute and sessionPolicy. Omitted fields in hpa use default values.
   * 
   * This parameter is required.
   */
  runtime?: CreateManagedAgentRequestBodyRuntime;
  /**
   * @remarks
   * The list of skill configurations.
   */
  skills?: CreateManagedAgentRequestBodySkills[];
  /**
   * @remarks
   * The list of sub-agent configurations.
   */
  subAgents?: CreateManagedAgentRequestBodySubAgents[];
  /**
   * @remarks
   * The agent template configuration.
   */
  template?: CreateManagedAgentRequestBodyTemplate;
  /**
   * @remarks
   * The list of tool configurations.
   */
  tools?: CreateManagedAgentRequestBodyTools[];
  static names(): { [key: string]: string } {
    return {
      accessMode: 'accessMode',
      accessScope: 'accessScope',
      agenticFsMounts: 'agenticFsMounts',
      contextConfiguration: 'contextConfiguration',
      description: 'description',
      environment: 'environment',
      harness: 'harness',
      instruction: 'instruction',
      model: 'model',
      name: 'name',
      network: 'network',
      ossMounts: 'ossMounts',
      promptVariables: 'promptVariables',
      runtime: 'runtime',
      skills: 'skills',
      subAgents: 'subAgents',
      template: 'template',
      tools: 'tools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessMode: 'string',
      accessScope: 'string',
      agenticFsMounts: { 'type': 'array', 'itemType': CreateManagedAgentRequestBodyAgenticFsMounts },
      contextConfiguration: CreateManagedAgentRequestBodyContextConfiguration,
      description: 'string',
      environment: CreateManagedAgentRequestBodyEnvironment,
      harness: CreateManagedAgentRequestBodyHarness,
      instruction: 'string',
      model: CreateManagedAgentRequestBodyModel,
      name: 'string',
      network: CreateManagedAgentRequestBodyNetwork,
      ossMounts: { 'type': 'array', 'itemType': CreateManagedAgentRequestBodyOssMounts },
      promptVariables: { 'type': 'array', 'itemType': CreateManagedAgentRequestBodyPromptVariables },
      runtime: CreateManagedAgentRequestBodyRuntime,
      skills: { 'type': 'array', 'itemType': CreateManagedAgentRequestBodySkills },
      subAgents: { 'type': 'array', 'itemType': CreateManagedAgentRequestBodySubAgents },
      template: CreateManagedAgentRequestBodyTemplate,
      tools: { 'type': 'array', 'itemType': CreateManagedAgentRequestBodyTools },
    };
  }

  validate() {
    if(Array.isArray(this.agenticFsMounts)) {
      $dara.Model.validateArray(this.agenticFsMounts);
    }
    if(this.contextConfiguration && typeof (this.contextConfiguration as any).validate === 'function') {
      (this.contextConfiguration as any).validate();
    }
    if(this.environment && typeof (this.environment as any).validate === 'function') {
      (this.environment as any).validate();
    }
    if(this.harness && typeof (this.harness as any).validate === 'function') {
      (this.harness as any).validate();
    }
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    if(Array.isArray(this.ossMounts)) {
      $dara.Model.validateArray(this.ossMounts);
    }
    if(Array.isArray(this.promptVariables)) {
      $dara.Model.validateArray(this.promptVariables);
    }
    if(this.runtime && typeof (this.runtime as any).validate === 'function') {
      (this.runtime as any).validate();
    }
    if(Array.isArray(this.skills)) {
      $dara.Model.validateArray(this.skills);
    }
    if(Array.isArray(this.subAgents)) {
      $dara.Model.validateArray(this.subAgents);
    }
    if(this.template && typeof (this.template as any).validate === 'function') {
      (this.template as any).validate();
    }
    if(Array.isArray(this.tools)) {
      $dara.Model.validateArray(this.tools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateManagedAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: CreateManagedAgentRequestBody;
  /**
   * @remarks
   * A reserved query parameter. The backend currently does not provide idempotency guarantees, such as deduplication or recovery of the original processing result based on this token.
   * 
   * @example
   * client-token-1
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateManagedAgentRequestBody,
      clientToken: 'string',
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

