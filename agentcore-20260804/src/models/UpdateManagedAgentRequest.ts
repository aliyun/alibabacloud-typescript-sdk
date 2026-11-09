// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateManagedAgentRequestBodyAgenticFsMounts extends $dara.Model {
  /**
   * @remarks
   * The absolute mount path in the container, such as /data/train. Mount targets cannot be duplicated or form parent-child overwrites, and must avoid platform reserved directories.
   * 
   * @example
   * /mnt/agenticfs/data
   */
  mountPath?: string;
  /**
   * @remarks
   * The existing non-empty relative directory under the AccessPoint. This field is required and validated by the backend for each mount item. Root directories, absolute paths, and parent directory segments are not allowed.
   * 
   * @example
   * workspace/data
   */
  path?: string;
  /**
   * @remarks
   * Specifies whether the mount is read-only. If omitted, the default value is false. This is not a RAM role read-only policy.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The AccessPoint domain name. This field is required and validated by the backend for each mount item. It does not include a protocol, port, or path. Use the DomainName from the NAS ListAccessPoints response.
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

export class UpdateManagedAgentRequestBodyEnvironmentCredentialReferences extends $dara.Model {
  /**
   * @remarks
   * The credential ID.
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

export class UpdateManagedAgentRequestBodyEnvironmentVariables extends $dara.Model {
  /**
   * @remarks
   * The environment variable name.
   * 
   * This parameter is required.
   * 
   * @example
   * API_KEY
   */
  name?: string;
  /**
   * @remarks
   * The environment variable value.
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

export class UpdateManagedAgentRequestBodyEnvironment extends $dara.Model {
  /**
   * @remarks
   * The list of credential references.
   */
  credentialReferences?: UpdateManagedAgentRequestBodyEnvironmentCredentialReferences[];
  /**
   * @remarks
   * The list of environment variables.
   */
  variables?: UpdateManagedAgentRequestBodyEnvironmentVariables[];
  static names(): { [key: string]: string } {
    return {
      credentialReferences: 'credentialReferences',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialReferences: { 'type': 'array', 'itemType': UpdateManagedAgentRequestBodyEnvironmentCredentialReferences },
      variables: { 'type': 'array', 'itemType': UpdateManagedAgentRequestBodyEnvironmentVariables },
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

export class UpdateManagedAgentRequestBodyHarnessConfiguration extends $dara.Model {
  /**
   * @remarks
   * The account key record ID in the qodercli connector. You can query it through ListConnectors. It is not the original key. This field can be omitted if there is only one record, but must be specified if there are multiple records. Do not specify this field for qwenpaw.
   * 
   * @example
   * key-example
   */
  connectorServiceAccountKey?: string;
  /**
   * @remarks
   * The connector account name bound to qodercli. Do not specify this field for qwenpaw.
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

export class UpdateManagedAgentRequestBodyHarness extends $dara.Model {
  /**
   * @remarks
   * The runtime framework configuration.
   */
  configuration?: UpdateManagedAgentRequestBodyHarnessConfiguration;
  /**
   * @remarks
   * The runtime framework type. This field is required when harness is provided and must be consistent with the value specified during creation.
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
      configuration: UpdateManagedAgentRequestBodyHarnessConfiguration,
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

export class UpdateManagedAgentRequestBodyModelQuota extends $dara.Model {
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
   * The statistical period for the quota. This field is required and validated by the backend when the quota is enabled. Valid values: day and month.
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

export class UpdateManagedAgentRequestBodyModel extends $dara.Model {
  /**
   * @remarks
   * For qwenpaw, use the workspace model connection ID. For qodercli, use the available model identifier returned by ListConnectorModels.
   * 
   * This parameter is required.
   * 
   * @example
   * mc-1
   */
  modelConnectionId?: string;
  /**
   * @remarks
   * For qwenpaw, use the name of the upstream model created under the model connection. This field is required. For qodercli, this field can be omitted.
   * 
   * @example
   * qwen-max
   */
  modelName?: string;
  /**
   * @remarks
   * The model token quota configuration. If not provided, no quota is configured.
   */
  quota?: UpdateManagedAgentRequestBodyModelQuota;
  /**
   * @remarks
   * The thinking level. Valid values: off, low, medium, high, xhigh, and max. If not provided or set to null during creation, default is used. When updating and submitting the model configuration, if the thinking level is not provided or is null, it is restored to default. Except for off which is converted to none, the value is passed to the runtime framework as is. The system does not verify model support or automatically downgrade the level. If the model does not support the level, adjust the level.
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
      quota: UpdateManagedAgentRequestBodyModelQuota,
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

export class UpdateManagedAgentRequestBodyNetworkAccessInternet extends $dara.Model {
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

export class UpdateManagedAgentRequestBodyNetworkAccessVpc extends $dara.Model {
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

export class UpdateManagedAgentRequestBodyNetwork extends $dara.Model {
  /**
   * @remarks
   * The public network access configuration.
   */
  accessInternet?: UpdateManagedAgentRequestBodyNetworkAccessInternet;
  /**
   * @remarks
   * The VPC access configuration.
   */
  accessVpc?: UpdateManagedAgentRequestBodyNetworkAccessVpc;
  static names(): { [key: string]: string } {
    return {
      accessInternet: 'accessInternet',
      accessVpc: 'accessVpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessInternet: UpdateManagedAgentRequestBodyNetworkAccessInternet,
      accessVpc: UpdateManagedAgentRequestBodyNetworkAccessVpc,
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

export class UpdateManagedAgentRequestBodyOssMounts extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket name. This parameter is required and validated by the backend for each mount item.
   * 
   * @example
   * bucket-001
   */
  bucketName?: string;
  /**
   * @remarks
   * The absolute mount path in the container, such as /data/train. Mount targets cannot be duplicated or form parent-child overwrites, and must avoid platform reserved directories.
   * 
   * @example
   * /mnt/oss/datasets
   */
  mountPath?: string;
  /**
   * @remarks
   * The non-empty relative object directory prefix in the bucket. This parameter is required for each mount item.
   * 
   * @example
   * datasets
   */
  path?: string;
  /**
   * @remarks
   * Specifies whether to mount the directory in read-only mode. Default value: false.
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

export class UpdateManagedAgentRequestBodyPromptVariables extends $dara.Model {
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

export class UpdateManagedAgentRequestBodyRuntimeCompute extends $dara.Model {
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

export class UpdateManagedAgentRequestBodyRuntimeHpa extends $dara.Model {
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

export class UpdateManagedAgentRequestBodyRuntimeSessionPolicy extends $dara.Model {
  /**
   * @remarks
   * The name of the request header for session identification. Required when type is ISOLATED_HEADER_FIELD, and must be a valid HTTP request header name. Do not specify this parameter for other policies.
   * 
   * @example
   * X-Session-Id
   */
  headerName?: string;
  /**
   * @remarks
   * The session policy type.
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

export class UpdateManagedAgentRequestBodyRuntime extends $dara.Model {
  /**
   * @remarks
   * The compute configuration.
   * 
   * This parameter is required.
   */
  compute?: UpdateManagedAgentRequestBodyRuntimeCompute;
  /**
   * @remarks
   * The elastic scaling and session configuration. Omitted fields use default values. To retain the original policy during an update, submit the complete hpa object or omit the entire runtime object.
   */
  hpa?: UpdateManagedAgentRequestBodyRuntimeHpa;
  /**
   * @remarks
   * The session policy configuration.
   * 
   * This parameter is required.
   */
  sessionPolicy?: UpdateManagedAgentRequestBodyRuntimeSessionPolicy;
  static names(): { [key: string]: string } {
    return {
      compute: 'compute',
      hpa: 'hpa',
      sessionPolicy: 'sessionPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compute: UpdateManagedAgentRequestBodyRuntimeCompute,
      hpa: UpdateManagedAgentRequestBodyRuntimeHpa,
      sessionPolicy: UpdateManagedAgentRequestBodyRuntimeSessionPolicy,
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

export class UpdateManagedAgentRequestBodySkillsVersionSelector extends $dara.Model {
  /**
   * @remarks
   * The version selector type.
   * 
   * @example
   * LABEL
   */
  type?: string;
  /**
   * @remarks
   * The selector value. When the type is LABEL, this is the tag name, such as latest. When the type is VERSION, this is the specific version number.
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

export class UpdateManagedAgentRequestBodySkills extends $dara.Model {
  /**
   * @remarks
   * The skill name.
   * 
   * This parameter is required.
   * 
   * @example
   * code-analysis
   */
  name?: string;
  /**
   * @remarks
   * The skill source type.
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
   * The version selector for the skill reference. Supports LABEL for tags and VERSION for specific versions. If omitted, LABEL/latest is used. Selectors are not provided for STATIC sources.
   */
  versionSelector?: UpdateManagedAgentRequestBodySkillsVersionSelector;
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
      versionSelector: UpdateManagedAgentRequestBodySkillsVersionSelector,
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

export class UpdateManagedAgentRequestBodySubAgentsSkills extends $dara.Model {
  /**
   * @remarks
   * The skill name.
   * 
   * @example
   * web-search
   */
  name?: string;
  /**
   * @remarks
   * The skill version.
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

export class UpdateManagedAgentRequestBodySubAgents extends $dara.Model {
  /**
   * @remarks
   * The sub-agent instruction.
   * 
   * This parameter is required.
   * 
   * @example
   * Review the code
   */
  instruction?: string;
  /**
   * @remarks
   * The sub-agent name.
   * 
   * This parameter is required.
   * 
   * @example
   * reviewer-agent
   */
  name?: string;
  /**
   * @remarks
   * The list of sub-agent skills.
   */
  skills?: UpdateManagedAgentRequestBodySubAgentsSkills[];
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
      skills: { 'type': 'array', 'itemType': UpdateManagedAgentRequestBodySubAgentsSkills },
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

export class UpdateManagedAgentRequestBodyTemplateAiRegistry extends $dara.Model {
  /**
   * @remarks
   * The name of the template in the AI Registry.
   * 
   * This parameter is required.
   * 
   * @example
   * code-review-template
   */
  name?: string;
  /**
   * @remarks
   * The version of the template in the AI Registry.
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

export class UpdateManagedAgentRequestBodyTemplate extends $dara.Model {
  /**
   * @remarks
   * The AI Registry template configuration.
   */
  aiRegistry?: UpdateManagedAgentRequestBodyTemplateAiRegistry;
  static names(): { [key: string]: string } {
    return {
      aiRegistry: 'aiRegistry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiRegistry: UpdateManagedAgentRequestBodyTemplateAiRegistry,
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

export class UpdateManagedAgentRequestBodyTools extends $dara.Model {
  /**
   * @remarks
   * The tool name.
   * 
   * This parameter is required.
   * 
   * @example
   * code-reviewer
   */
  name?: string;
  /**
   * @remarks
   * The tool type.
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

export class UpdateManagedAgentRequestBody extends $dara.Model {
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
   * The NAS storage mount configuration. Currently, only the AgenticFS type is supported, which is used to mount file directories in an access point to agent runtime instances. This is the AgenticFS directory mount list. The total number of items with ossMounts cannot exceed 10. If omitted or set to [] during creation, no mounts are configured. If omitted during an update, the original configuration is retained. If set to [], the list is cleared. null is not accepted.
   */
  agenticFsMounts?: UpdateManagedAgentRequestBodyAgenticFsMounts[];
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
  environment?: UpdateManagedAgentRequestBodyEnvironment;
  /**
   * @remarks
   * The runtime framework object. If omitted, the original framework is retained. If provided, the type must be the same as that specified during creation. You can update the account binding for the same type of framework.
   */
  harness?: UpdateManagedAgentRequestBodyHarness;
  /**
   * @remarks
   * The agent instructions used to guide the behavior of the agent.
   * 
   * @example
   * You are a code review assistant
   */
  instruction?: string;
  /**
   * @remarks
   * The model configuration.
   */
  model?: UpdateManagedAgentRequestBodyModel;
  /**
   * @remarks
   * The name of the managed Harness agent.
   * 
   * @example
   * my-agent
   */
  name?: string;
  /**
   * @remarks
   * The runtime network configuration. If provided, both accessInternet.enabled and accessVpc.enabled must be included. Actual access is subject to workspace network restrictions.
   */
  network?: UpdateManagedAgentRequestBodyNetwork;
  /**
   * @remarks
   * The list of OSS directory mounts. The total number of OSS mounts and agenticFsMounts cannot exceed 10. During an update, this list is replaced entirely. Pass an empty array [] to clear existing mounts.
   */
  ossMounts?: UpdateManagedAgentRequestBodyOssMounts[];
  /**
   * @remarks
   * The prompt variable declarations.
   */
  promptVariables?: UpdateManagedAgentRequestBodyPromptVariables[];
  /**
   * @remarks
   * The runtime configuration. If the entire object is omitted, the original configuration is retained. If provided, both compute and sessionPolicy must be specified. Omitted fields in hpa use default values.
   */
  runtime?: UpdateManagedAgentRequestBodyRuntime;
  /**
   * @remarks
   * The list of skill configurations.
   */
  skills?: UpdateManagedAgentRequestBodySkills[];
  /**
   * @remarks
   * The list of sub-agent configurations.
   */
  subAgents?: UpdateManagedAgentRequestBodySubAgents[];
  /**
   * @remarks
   * The agent template configuration.
   */
  template?: UpdateManagedAgentRequestBodyTemplate;
  /**
   * @remarks
   * The tool configuration list.
   */
  tools?: UpdateManagedAgentRequestBodyTools[];
  static names(): { [key: string]: string } {
    return {
      accessMode: 'accessMode',
      accessScope: 'accessScope',
      agenticFsMounts: 'agenticFsMounts',
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
      agenticFsMounts: { 'type': 'array', 'itemType': UpdateManagedAgentRequestBodyAgenticFsMounts },
      description: 'string',
      environment: UpdateManagedAgentRequestBodyEnvironment,
      harness: UpdateManagedAgentRequestBodyHarness,
      instruction: 'string',
      model: UpdateManagedAgentRequestBodyModel,
      name: 'string',
      network: UpdateManagedAgentRequestBodyNetwork,
      ossMounts: { 'type': 'array', 'itemType': UpdateManagedAgentRequestBodyOssMounts },
      promptVariables: { 'type': 'array', 'itemType': UpdateManagedAgentRequestBodyPromptVariables },
      runtime: UpdateManagedAgentRequestBodyRuntime,
      skills: { 'type': 'array', 'itemType': UpdateManagedAgentRequestBodySkills },
      subAgents: { 'type': 'array', 'itemType': UpdateManagedAgentRequestBodySubAgents },
      template: UpdateManagedAgentRequestBodyTemplate,
      tools: { 'type': 'array', 'itemType': UpdateManagedAgentRequestBodyTools },
    };
  }

  validate() {
    if(Array.isArray(this.agenticFsMounts)) {
      $dara.Model.validateArray(this.agenticFsMounts);
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

export class UpdateManagedAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: UpdateManagedAgentRequestBody;
  /**
   * @remarks
   * The reserved query parameter. Currently, the backend does not provide idempotency guarantees for deduplication or recovery of original processing results based on this identifier.
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
      body: UpdateManagedAgentRequestBody,
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

