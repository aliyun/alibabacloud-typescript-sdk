// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateManagedAgentResponseBodyDataAgenticFsMounts extends $dara.Model {
  /**
   * @remarks
   * The absolute mount path in the container, such as `/data/train`. Mount targets cannot be duplicated or form parent-child overwrites, and must avoid platform reserved directories.
   * 
   * @example
   * /mnt/agenticfs/data
   */
  mountPath?: string;
  /**
   * @remarks
   * An existing non-empty relative directory under the access point. This field is required and validated by the backend for each mount item. Root directories, absolute paths, and parent directory segments are not allowed.
   * 
   * @example
   * workspace/data
   */
  path?: string;
  /**
   * @remarks
   * Specifies whether the mount is read-only. If omitted, the default value is `false`. This is not a RAM role read-only policy.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The domain name of the access point. This field is required and validated by the backend for each mount item. It must not contain a protocol, port, or path. Use the DomainName value from the NAS ListAccessPoints response.
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

export class UpdateManagedAgentResponseBodyDataConfiguredSkillsVersionSelector extends $dara.Model {
  /**
   * @remarks
   * The version selector type. LABEL selects by tag. VERSION selects by specific version.
   * 
   * @example
   * LABEL
   */
  type?: string;
  /**
   * @remarks
   * The selector value. For LABEL, it is the tag name (such as latest). For VERSION, it is the specific version number.
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

export class UpdateManagedAgentResponseBodyDataConfiguredSkills extends $dara.Model {
  /**
   * @remarks
   * The name of the skill in the Workspace AI Registry.
   * 
   * This parameter is required.
   * 
   * @example
   * web-search
   */
  name?: string;
  /**
   * @remarks
   * The skill source type. REFERENCE references the AI Registry. STATIC is statically provided with the package.
   * 
   * @example
   * REFERENCE
   */
  sourceType?: string;
  /**
   * @remarks
   * The legacy compatibility field. Use sourceType and versionSelector for new requests.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  /**
   * @remarks
   * The skill reference version selector. Supports LABEL for tags and VERSION for specific versions. Defaults to LABEL/latest when omitted. Selectors are not provided for STATIC sources.
   */
  versionSelector?: UpdateManagedAgentResponseBodyDataConfiguredSkillsVersionSelector;
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
      versionSelector: UpdateManagedAgentResponseBodyDataConfiguredSkillsVersionSelector,
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

export class UpdateManagedAgentResponseBodyDataEnvironmentCredentialReferences extends $dara.Model {
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

export class UpdateManagedAgentResponseBodyDataEnvironmentVariables extends $dara.Model {
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

export class UpdateManagedAgentResponseBodyDataEnvironment extends $dara.Model {
  /**
   * @remarks
   * The credential reference list.
   */
  credentialReferences?: UpdateManagedAgentResponseBodyDataEnvironmentCredentialReferences[];
  /**
   * @remarks
   * The environment variable list.
   */
  variables?: UpdateManagedAgentResponseBodyDataEnvironmentVariables[];
  static names(): { [key: string]: string } {
    return {
      credentialReferences: 'credentialReferences',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialReferences: { 'type': 'array', 'itemType': UpdateManagedAgentResponseBodyDataEnvironmentCredentialReferences },
      variables: { 'type': 'array', 'itemType': UpdateManagedAgentResponseBodyDataEnvironmentVariables },
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

export class UpdateManagedAgentResponseBodyDataHarnessConfiguration extends $dara.Model {
  /**
   * @remarks
   * The record ID of the connector account key bound to qodercli, not the original service account key.
   * 
   * @example
   * key-xxxx
   */
  connectorServiceAccountKey?: string;
  /**
   * @remarks
   * The name of the connector account bound to qodercli.
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

export class UpdateManagedAgentResponseBodyDataHarness extends $dara.Model {
  /**
   * @remarks
   * The runtime harness configuration.
   */
  configuration?: UpdateManagedAgentResponseBodyDataHarnessConfiguration;
  /**
   * @remarks
   * Returned only in query responses. The server calculates this based on the complete instance distribution, which is not affected by pagination and filtering of the instance list. The value is empty and not equivalent to 0 when the image tag is missing, pagination is incomplete, or it cannot be confirmed.
   * 
   * @example
   * 2
   */
  outdatedInstanceCount?: number;
  /**
   * @remarks
   * The type of the runtime framework.
   * 
   * @example
   * qodercli
   */
  type?: string;
  /**
   * @remarks
   * Returned only in query responses. Currently returns the tag of the pool target image. The value is empty if it cannot be parsed, and cannot be replaced by the agent configuration version.
   * 
   * @example
   * 202611031754
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      outdatedInstanceCount: 'outdatedInstanceCount',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: UpdateManagedAgentResponseBodyDataHarnessConfiguration,
      outdatedInstanceCount: 'number',
      type: 'string',
      version: 'string',
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

export class UpdateManagedAgentResponseBodyDataModelQuota extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the quota is enabled. This field is not returned if no quota is configured.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The quota limit type. Currently, only token is supported.
   * 
   * @example
   * token
   */
  limitType?: string;
  /**
   * @remarks
   * Indicates whether the quota is exceeded in the current cycle. This field is read-only and returned by the backend.
   * 
   * @example
   * false
   */
  overLimit?: boolean;
  /**
   * @remarks
   * The quota statistical period. A value of day indicates daily, and a value of month indicates monthly.
   * 
   * @example
   * day
   */
  periodType?: string;
  /**
   * @remarks
   * The status of the gateway quota rule. This field is read-only and returned by the backend.
   * 
   * @example
   * ACTIVE
   */
  ruleStatus?: string;
  /**
   * @remarks
   * The maximum number of tokens allowed to be consumed in a single cycle.
   * 
   * @example
   * 1000000
   */
  usageLimit?: number;
  /**
   * @remarks
   * The number of tokens consumed in the current cycle. This field is read-only and returned by the backend.
   * 
   * @example
   * 12345
   */
  usedAmount?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      limitType: 'limitType',
      overLimit: 'overLimit',
      periodType: 'periodType',
      ruleStatus: 'ruleStatus',
      usageLimit: 'usageLimit',
      usedAmount: 'usedAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      limitType: 'string',
      overLimit: 'boolean',
      periodType: 'string',
      ruleStatus: 'string',
      usageLimit: 'number',
      usedAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateManagedAgentResponseBodyDataModel extends $dara.Model {
  /**
   * @remarks
   * The model connection ID.
   * 
   * @example
   * mc-1
   */
  modelConnectionId?: string;
  /**
   * @remarks
   * The name of the upstream model.
   * 
   * @example
   * qwen-max
   */
  modelName?: string;
  /**
   * @remarks
   * The model token quota configuration and quota usage status for the current cycle. The value is empty if no quota is configured.
   */
  quota?: UpdateManagedAgentResponseBodyDataModelQuota;
  /**
   * @remarks
   * The thinking level. If not configured, the value defaults to default. Empty strings, null values, or omitted fields are processed based on the default behavior of the model and Harness. Valid values: off, low, medium, high, xhigh, and max. If this parameter is not specified or is null during creation, default is used. When you update the model configuration, if the thinking level is not specified or is null, it reverts to default. Except for off, which is converted to none, the value is passed to the runtime framework as-is. The system does not validate model support or automatically downgrade the level. If the model does not support the specified level, adjust the level.
   * 
   * @example
   * high
   * 
   * **if can be null:**
   * true
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
      quota: UpdateManagedAgentResponseBodyDataModelQuota,
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

export class UpdateManagedAgentResponseBodyDataNetworkAccessInternet extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow access to the Internet.
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

export class UpdateManagedAgentResponseBodyDataNetworkAccessVpc extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow access to the VPC.
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

export class UpdateManagedAgentResponseBodyDataNetwork extends $dara.Model {
  /**
   * @remarks
   * The public network access configuration.
   */
  accessInternet?: UpdateManagedAgentResponseBodyDataNetworkAccessInternet;
  /**
   * @remarks
   * The VPC access configuration.
   */
  accessVpc?: UpdateManagedAgentResponseBodyDataNetworkAccessVpc;
  static names(): { [key: string]: string } {
    return {
      accessInternet: 'accessInternet',
      accessVpc: 'accessVpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessInternet: UpdateManagedAgentResponseBodyDataNetworkAccessInternet,
      accessVpc: UpdateManagedAgentResponseBodyDataNetworkAccessVpc,
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

export class UpdateManagedAgentResponseBodyDataOssMounts extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket name. Required and validated by the backend for each mount item.
   * 
   * @example
   * bucket-001
   */
  bucketName?: string;
  /**
   * @remarks
   * The absolute mount path in the container, such as `/data/train`. Mount targets cannot be duplicated or form parent-child overwrites, and must avoid platform reserved directories.
   * 
   * @example
   * /mnt/oss/datasets
   */
  mountPath?: string;
  /**
   * @remarks
   * The non-empty relative directory prefix in the currently configured bucket.
   * 
   * @example
   * datasets
   */
  path?: string;
  /**
   * @remarks
   * Specifies whether to mount as read-only. Defaults to false if not specified.
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

export class UpdateManagedAgentResponseBodyDataPromptVariables extends $dara.Model {
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
   * The description of the variable.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * The name of the variable.
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

export class UpdateManagedAgentResponseBodyDataRuntimeCompute extends $dara.Model {
  /**
   * @remarks
   * The compute specifications.
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

export class UpdateManagedAgentResponseBodyDataRuntimeHpa extends $dara.Model {
  /**
   * @remarks
   * Indicates whether elastic scaling is enabled in the current configuration.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The maximum number of concurrent sessions per instance in the current configuration.
   * 
   * @example
   * 5
   */
  maxConcurrentSessionsPerSandbox?: number;
  /**
   * @remarks
   * The maximum number of instances in the current configuration.
   * 
   * @example
   * 3
   */
  maxSandboxCount?: number;
  /**
   * @remarks
   * The minimum number of instances in the current configuration.
   * 
   * @example
   * 1
   */
  minSandboxCount?: number;
  /**
   * @remarks
   * The maximum idle time for a session in the current configuration, in seconds.
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

export class UpdateManagedAgentResponseBodyDataRuntimeSessionPolicy extends $dara.Model {
  /**
   * @remarks
   * The name of the HTTP header used for session affinity. This parameter takes effect when sessionPolicy.type is set to ISOLATED_HEADER_FIELD.
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

export class UpdateManagedAgentResponseBodyDataRuntime extends $dara.Model {
  /**
   * @remarks
   * The compute configuration.
   * 
   * This parameter is required.
   */
  compute?: UpdateManagedAgentResponseBodyDataRuntimeCompute;
  /**
   * @remarks
   * The automatic scaling and session configurations for the sandbox.
   */
  hpa?: UpdateManagedAgentResponseBodyDataRuntimeHpa;
  /**
   * @remarks
   * The session policy configuration.
   * 
   * This parameter is required.
   */
  sessionPolicy?: UpdateManagedAgentResponseBodyDataRuntimeSessionPolicy;
  static names(): { [key: string]: string } {
    return {
      compute: 'compute',
      hpa: 'hpa',
      sessionPolicy: 'sessionPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compute: UpdateManagedAgentResponseBodyDataRuntimeCompute,
      hpa: UpdateManagedAgentResponseBodyDataRuntimeHpa,
      sessionPolicy: UpdateManagedAgentResponseBodyDataRuntimeSessionPolicy,
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

export class UpdateManagedAgentResponseBodyDataSkillsVersionSelector extends $dara.Model {
  /**
   * @remarks
   * The version selector type. LABEL selects by tag. VERSION selects by specific version.
   * 
   * @example
   * LABEL
   */
  type?: string;
  /**
   * @remarks
   * The selector value. For LABEL, it is the tag name (such as latest). For VERSION, it is the specific version number.
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

export class UpdateManagedAgentResponseBodyDataSkills extends $dara.Model {
  /**
   * @remarks
   * The effective version at runtime. This field is read-only.
   * 
   * @example
   * 1.0.0
   */
  appliedVersion?: string;
  /**
   * @remarks
   * Specifies whether the skill is from a fixed template. This field is read-only. Template items cannot be removed.
   * 
   * @example
   * false
   */
  fromTemplate?: boolean;
  /**
   * @remarks
   * The skill name.
   * 
   * @example
   * code-analysis
   */
  name?: string;
  /**
   * @remarks
   * The current target version. This field is read-only.
   * 
   * @example
   * 1.0.0
   */
  resolvedVersion?: string;
  /**
   * @remarks
   * The skill source type. REFERENCE references the AI Registry. STATIC is statically provided with the package.
   * 
   * @example
   * REFERENCE
   */
  sourceType?: string;
  /**
   * @remarks
   * The current target version for compatibility with legacy clients. New clients use resolvedVersion and determine the effective runtime version based on appliedVersion.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  /**
   * @remarks
   * The skill reference version selector. Supports LABEL for tags and VERSION for specific versions. Defaults to LABEL/latest when omitted. Selectors are not provided for STATIC sources.
   */
  versionSelector?: UpdateManagedAgentResponseBodyDataSkillsVersionSelector;
  static names(): { [key: string]: string } {
    return {
      appliedVersion: 'appliedVersion',
      fromTemplate: 'fromTemplate',
      name: 'name',
      resolvedVersion: 'resolvedVersion',
      sourceType: 'sourceType',
      version: 'version',
      versionSelector: 'versionSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedVersion: 'string',
      fromTemplate: 'boolean',
      name: 'string',
      resolvedVersion: 'string',
      sourceType: 'string',
      version: 'string',
      versionSelector: UpdateManagedAgentResponseBodyDataSkillsVersionSelector,
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

export class UpdateManagedAgentResponseBodyDataSubAgentsSkills extends $dara.Model {
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

export class UpdateManagedAgentResponseBodyDataSubAgents extends $dara.Model {
  /**
   * @remarks
   * The sub-agent instruction.
   * 
   * This parameter is required.
   * 
   * @example
   * Please review the code
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
   * The sub-agent skill list.
   */
  skills?: UpdateManagedAgentResponseBodyDataSubAgentsSkills[];
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
      skills: { 'type': 'array', 'itemType': UpdateManagedAgentResponseBodyDataSubAgentsSkills },
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

export class UpdateManagedAgentResponseBodyDataTemplateAiRegistry extends $dara.Model {
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

export class UpdateManagedAgentResponseBodyDataTemplate extends $dara.Model {
  /**
   * @remarks
   * The AI registry template configuration.
   */
  aiRegistry?: UpdateManagedAgentResponseBodyDataTemplateAiRegistry;
  static names(): { [key: string]: string } {
    return {
      aiRegistry: 'aiRegistry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiRegistry: UpdateManagedAgentResponseBodyDataTemplateAiRegistry,
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

export class UpdateManagedAgentResponseBodyDataTools extends $dara.Model {
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

export class UpdateManagedAgentResponseBodyData extends $dara.Model {
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
   * The ID of the managed Harness agent.
   * 
   * @example
   * agent-1
   */
  agentId?: string;
  /**
   * @remarks
   * The NAS storage mount configuration. Currently, only the AgenticFS type is supported, which is used to mount file directories in access points to agent runtime instances. The total number of NAS mounts and ossMounts cannot exceed 10.
   */
  agenticFsMounts?: UpdateManagedAgentResponseBodyDataAgenticFsMounts[];
  /**
   * @remarks
   * The explicitly configured skills.
   */
  configuredSkills?: UpdateManagedAgentResponseBodyDataConfiguredSkills[];
  /**
   * @remarks
   * The creation mode.
   * 
   * @example
   * Managed
   */
  createMode?: string;
  /**
   * @remarks
   * The creation time in RFC 3339 format.
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The deployment type.
   * 
   * @example
   * Managed
   */
  deployType?: string;
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
   * The environment configuration information.
   */
  environment?: UpdateManagedAgentResponseBodyDataEnvironment;
  /**
   * @remarks
   * The agent runtime framework.
   */
  harness?: UpdateManagedAgentResponseBodyDataHarness;
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
   * The latest specification version number.
   * 
   * @example
   * 1
   */
  latestSpecVersion?: number;
  /**
   * @remarks
   * The status of the latest version.
   * 
   * @example
   * succeeded
   */
  latestVersionStatus?: string;
  /**
   * @remarks
   * The model configuration information.
   */
  model?: UpdateManagedAgentResponseBodyDataModel;
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
   * The network configuration information.
   */
  network?: UpdateManagedAgentResponseBodyDataNetwork;
  /**
   * @remarks
   * The list of OSS mounts. A maximum of 10 items are allowed.
   */
  ossMounts?: UpdateManagedAgentResponseBodyDataOssMounts[];
  /**
   * @remarks
   * The prompt variable declarations.
   */
  promptVariables?: UpdateManagedAgentResponseBodyDataPromptVariables[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The runtime configuration information.
   */
  runtime?: UpdateManagedAgentResponseBodyDataRuntime;
  /**
   * @remarks
   * The number of managed Harness agent instances by sandbox phase. Current keys: PENDING (creating or initializing), RUNNING (running), HIBERNATING (hibernating), HIBERNATED (hibernated), RESUMING (resuming), TERMINATING (terminating), and FAILED (failed at runtime). Only phases that actually occur are returned, and missing keys are treated as 0. This field is a dynamic mapping and new keys may be added in the future. The frontend can use FAILED > 0 to determine whether abnormal instances exist.
   */
  sandboxPhaseCounts?: { [key: string]: number };
  /**
   * @remarks
   * The skill configuration list.
   */
  skills?: UpdateManagedAgentResponseBodyDataSkills[];
  /**
   * @remarks
   * The status of the managed Harness agent.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The sub-agent configuration list.
   */
  subAgents?: UpdateManagedAgentResponseBodyDataSubAgents[];
  /**
   * @remarks
   * The template configuration information.
   */
  template?: UpdateManagedAgentResponseBodyDataTemplate;
  /**
   * @remarks
   * The list of tool configurations.
   */
  tools?: UpdateManagedAgentResponseBodyDataTools[];
  /**
   * @remarks
   * The update time in RFC 3339 format.
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws-1
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'accessMode',
      accessScope: 'accessScope',
      agentId: 'agentId',
      agenticFsMounts: 'agenticFsMounts',
      configuredSkills: 'configuredSkills',
      createMode: 'createMode',
      createdAt: 'createdAt',
      deployType: 'deployType',
      description: 'description',
      environment: 'environment',
      harness: 'harness',
      instruction: 'instruction',
      latestSpecVersion: 'latestSpecVersion',
      latestVersionStatus: 'latestVersionStatus',
      model: 'model',
      name: 'name',
      network: 'network',
      ossMounts: 'ossMounts',
      promptVariables: 'promptVariables',
      regionId: 'regionId',
      runtime: 'runtime',
      sandboxPhaseCounts: 'sandboxPhaseCounts',
      skills: 'skills',
      status: 'status',
      subAgents: 'subAgents',
      template: 'template',
      tools: 'tools',
      updatedAt: 'updatedAt',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessMode: 'string',
      accessScope: 'string',
      agentId: 'string',
      agenticFsMounts: { 'type': 'array', 'itemType': UpdateManagedAgentResponseBodyDataAgenticFsMounts },
      configuredSkills: { 'type': 'array', 'itemType': UpdateManagedAgentResponseBodyDataConfiguredSkills },
      createMode: 'string',
      createdAt: 'string',
      deployType: 'string',
      description: 'string',
      environment: UpdateManagedAgentResponseBodyDataEnvironment,
      harness: UpdateManagedAgentResponseBodyDataHarness,
      instruction: 'string',
      latestSpecVersion: 'number',
      latestVersionStatus: 'string',
      model: UpdateManagedAgentResponseBodyDataModel,
      name: 'string',
      network: UpdateManagedAgentResponseBodyDataNetwork,
      ossMounts: { 'type': 'array', 'itemType': UpdateManagedAgentResponseBodyDataOssMounts },
      promptVariables: { 'type': 'array', 'itemType': UpdateManagedAgentResponseBodyDataPromptVariables },
      regionId: 'string',
      runtime: UpdateManagedAgentResponseBodyDataRuntime,
      sandboxPhaseCounts: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      skills: { 'type': 'array', 'itemType': UpdateManagedAgentResponseBodyDataSkills },
      status: 'string',
      subAgents: { 'type': 'array', 'itemType': UpdateManagedAgentResponseBodyDataSubAgents },
      template: UpdateManagedAgentResponseBodyDataTemplate,
      tools: { 'type': 'array', 'itemType': UpdateManagedAgentResponseBodyDataTools },
      updatedAt: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agenticFsMounts)) {
      $dara.Model.validateArray(this.agenticFsMounts);
    }
    if(Array.isArray(this.configuredSkills)) {
      $dara.Model.validateArray(this.configuredSkills);
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
    if(this.sandboxPhaseCounts) {
      $dara.Model.validateMap(this.sandboxPhaseCounts);
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

export class UpdateManagedAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of SUCCESS indicates success.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The details of the managed Harness agent.
   */
  data?: UpdateManagedAgentResponseBodyData;
  /**
   * @remarks
   * The HTTP status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request processing result message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1a2b3c4d-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateManagedAgentResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
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

