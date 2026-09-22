// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetManagedAgentResponseBodyDataAgenticFsMounts extends $dara.Model {
  /**
   * @remarks
   * The subdirectory under /mnt/agenticfs/ in the container. This field is required for each mount item as validated by the backend. Mount targets must not be duplicated or have parent-child overlaps.
   * 
   * @example
   * /mnt/agenticfs/data
   */
  mountPath?: string;
  /**
   * @remarks
   * The non-empty relative directory that exists under the AccessPoint. This field is required for each mount item as validated by the backend. Root directories, absolute paths, and parent directory segments are not allowed.
   * 
   * @example
   * workspace/data
   */
  path?: string;
  /**
   * @remarks
   * Specifies whether to mount in read-only mode. Default value: false. This is not a RAM role read-only policy.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The AccessPoint domain name. This field is required for each mount item as validated by the backend. The value does not include protocol, port, or path. Use the DomainName from the NAS ListAccessPoints response.
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

export class GetManagedAgentResponseBodyDataConfiguredSkillsVersionSelector extends $dara.Model {
  /**
   * @remarks
   * The version selector type. Valid values:
   * - LABEL: selects by label.
   * - VERSION: selects by specific version.
   * 
   * @example
   * LABEL
   */
  type?: string;
  /**
   * @remarks
   * The selector value. When the type is LABEL, this is the label name (such as latest). When the type is VERSION, this is the specific version number.
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

export class GetManagedAgentResponseBodyDataConfiguredSkills extends $dara.Model {
  /**
   * @remarks
   * The skill name in the Workspace AI Registry.
   * 
   * This parameter is required.
   * 
   * @example
   * web-search
   */
  name?: string;
  /**
   * @remarks
   * The skill source type. Valid values:
   * - REFERENCE: references the AI Registry.
   * - STATIC: statically provided with the package.
   * 
   * @example
   * REFERENCE
   */
  sourceType?: string;
  /**
   * @remarks
   * **[Deprecated]** Legacy compatibility field. Use sourceType and versionSelector for new requests.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  /**
   * @remarks
   * The version selector for the referenced skill. If omitted, the default value is LABEL/latest. Currently, only LABEL/latest is supported.
   */
  versionSelector?: GetManagedAgentResponseBodyDataConfiguredSkillsVersionSelector;
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
      versionSelector: GetManagedAgentResponseBodyDataConfiguredSkillsVersionSelector,
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

export class GetManagedAgentResponseBodyDataEnvironmentCredentialReferences extends $dara.Model {
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

export class GetManagedAgentResponseBodyDataEnvironmentVariables extends $dara.Model {
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

export class GetManagedAgentResponseBodyDataEnvironment extends $dara.Model {
  /**
   * @remarks
   * The list of credential references.
   */
  credentialReferences?: GetManagedAgentResponseBodyDataEnvironmentCredentialReferences[];
  /**
   * @remarks
   * The list of environment variables.
   */
  variables?: GetManagedAgentResponseBodyDataEnvironmentVariables[];
  static names(): { [key: string]: string } {
    return {
      credentialReferences: 'credentialReferences',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialReferences: { 'type': 'array', 'itemType': GetManagedAgentResponseBodyDataEnvironmentCredentialReferences },
      variables: { 'type': 'array', 'itemType': GetManagedAgentResponseBodyDataEnvironmentVariables },
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

export class GetManagedAgentResponseBodyDataHarnessConfiguration extends $dara.Model {
  /**
   * @remarks
   * The Connector Service Account Key.
   * 
   * @example
   * key-xxxx
   */
  connectorServiceAccountKey?: string;
  /**
   * @remarks
   * The Connector Service Account Name.
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

export class GetManagedAgentResponseBodyDataHarness extends $dara.Model {
  /**
   * @remarks
   * The runtime harness configuration.
   */
  configuration?: GetManagedAgentResponseBodyDataHarnessConfiguration;
  /**
   * @remarks
   * The runtime harness type.
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
      configuration: GetManagedAgentResponseBodyDataHarnessConfiguration,
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

export class GetManagedAgentResponseBodyDataModelQuota extends $dara.Model {
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
   * Indicates whether the quota has been exceeded in the current period. This field is read-only and returned by the backend.
   * 
   * @example
   * false
   */
  overLimit?: boolean;
  /**
   * @remarks
   * The quota statistical period. Valid values:
   * - day: daily.
   * - month: monthly.
   * 
   * @example
   * day
   */
  periodType?: string;
  /**
   * @remarks
   * The gateway quota rule status. This field is read-only and returned by the backend.
   * 
   * @example
   * ACTIVE
   */
  ruleStatus?: string;
  /**
   * @remarks
   * The maximum number of tokens that can be consumed in a single period.
   * 
   * @example
   * 1000000
   */
  usageLimit?: number;
  /**
   * @remarks
   * The number of tokens consumed in the current period. This field is read-only and returned by the backend.
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

export class GetManagedAgentResponseBodyDataModel extends $dara.Model {
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
   * The upstream model name.
   * 
   * @example
   * qwen-max
   */
  modelName?: string;
  /**
   * @remarks
   * The model token quota configuration and the quota usage status for the current period. This field is empty if no quota is configured.
   */
  quota?: GetManagedAgentResponseBodyDataModelQuota;
  static names(): { [key: string]: string } {
    return {
      modelConnectionId: 'modelConnectionId',
      modelName: 'modelName',
      quota: 'quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelConnectionId: 'string',
      modelName: 'string',
      quota: GetManagedAgentResponseBodyDataModelQuota,
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

export class GetManagedAgentResponseBodyDataNetworkAccessInternet extends $dara.Model {
  /**
   * @remarks
   * Specifies whether public network access is allowed.
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

export class GetManagedAgentResponseBodyDataNetworkAccessVpc extends $dara.Model {
  /**
   * @remarks
   * Specifies whether VPC access is allowed.
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

export class GetManagedAgentResponseBodyDataNetwork extends $dara.Model {
  /**
   * @remarks
   * The public network access configuration.
   */
  accessInternet?: GetManagedAgentResponseBodyDataNetworkAccessInternet;
  /**
   * @remarks
   * The VPC access configuration.
   */
  accessVpc?: GetManagedAgentResponseBodyDataNetworkAccessVpc;
  static names(): { [key: string]: string } {
    return {
      accessInternet: 'accessInternet',
      accessVpc: 'accessVpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessInternet: GetManagedAgentResponseBodyDataNetworkAccessInternet,
      accessVpc: GetManagedAgentResponseBodyDataNetworkAccessVpc,
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

export class GetManagedAgentResponseBodyDataOssMounts extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket name. This field is required for each mount item as validated by the backend.
   * 
   * @example
   * bucket-001
   */
  bucketName?: string;
  /**
   * @remarks
   * The absolute mount path inside the container. This field is validated as required by the backend for each mount entry.
   * 
   * @example
   * /mnt/oss/datasets
   */
  mountPath?: string;
  /**
   * @remarks
   * The relative object prefix within the bucket. If not specified, the entire bucket is mounted.
   * 
   * @example
   * datasets
   */
  path?: string;
  /**
   * @remarks
   * Specifies whether to mount as read-only. Default value: false.
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

export class GetManagedAgentResponseBodyDataRuntimeCompute extends $dara.Model {
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

export class GetManagedAgentResponseBodyDataRuntimeHpa extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto scaling. This field is validated as required by the backend when hpa is present.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The maximum number of active sessions per sandbox. This field is validated as required by the backend when hpa is present.
   * 
   * @example
   * 5
   */
  maxConcurrentSessionsPerSandbox?: number;
  /**
   * @remarks
   * The maximum number of sandboxes. This field is required when HPA is enabled and must be no less than the minimum value.
   * 
   * @example
   * 3
   */
  maxSandboxCount?: number;
  /**
   * @remarks
   * The minimum number of sandboxes. This field is required when HPA is enabled.
   * 
   * @example
   * 1
   */
  minSandboxCount?: number;
  /**
   * @remarks
   * The time-to-live in seconds for a session after inactivity. This field is validated as required by the backend when hpa is present.
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

export class GetManagedAgentResponseBodyDataRuntimeSessionPolicy extends $dara.Model {
  /**
   * @remarks
   * The HTTP header name used for session affinity. This field takes effect when sessionPolicy.type is set to ISOLATED_HEADER_FIELD.
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

export class GetManagedAgentResponseBodyDataRuntime extends $dara.Model {
  /**
   * @remarks
   * The compute configuration.
   * 
   * This parameter is required.
   */
  compute?: GetManagedAgentResponseBodyDataRuntimeCompute;
  /**
   * @remarks
   * The sandbox auto scaling and session configuration.
   */
  hpa?: GetManagedAgentResponseBodyDataRuntimeHpa;
  /**
   * @remarks
   * The session policy configuration.
   * 
   * This parameter is required.
   */
  sessionPolicy?: GetManagedAgentResponseBodyDataRuntimeSessionPolicy;
  static names(): { [key: string]: string } {
    return {
      compute: 'compute',
      hpa: 'hpa',
      sessionPolicy: 'sessionPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compute: GetManagedAgentResponseBodyDataRuntimeCompute,
      hpa: GetManagedAgentResponseBodyDataRuntimeHpa,
      sessionPolicy: GetManagedAgentResponseBodyDataRuntimeSessionPolicy,
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

export class GetManagedAgentResponseBodyDataSkillsVersionSelector extends $dara.Model {
  /**
   * @remarks
   * The version selector type. Valid values:
   * - LABEL: selects by label.
   * - VERSION: selects by specific version.
   * 
   * @example
   * LABEL
   */
  type?: string;
  /**
   * @remarks
   * The selector value. When the type is LABEL, this is the label name (such as latest). When the type is VERSION, this is the specific version number.
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

export class GetManagedAgentResponseBodyDataSkills extends $dara.Model {
  /**
   * @remarks
   * The version currently in effect at runtime. This field is read-only.
   * 
   * @example
   * 1.0.0
   */
  appliedVersion?: string;
  /**
   * @remarks
   * Indicates whether the skill originates from a fixed template. This field is read-only. Template items cannot be removed.
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
   * The skill source type. Valid values:
   * - REFERENCE: references the AI Registry.
   * - STATIC: statically provided with the package.
   * 
   * @example
   * REFERENCE
   */
  sourceType?: string;
  /**
   * @remarks
   * The skill version.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  /**
   * @remarks
   * The referenced version selector. Defaults to LABEL/latest if omitted.
   */
  versionSelector?: GetManagedAgentResponseBodyDataSkillsVersionSelector;
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
      versionSelector: GetManagedAgentResponseBodyDataSkillsVersionSelector,
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

export class GetManagedAgentResponseBodyDataSubAgentsSkills extends $dara.Model {
  /**
   * @remarks
   * The skill name used by the child agent. Declared as optional for compatibility, but validated as required by the backend for each entry.
   * 
   * @example
   * web-search
   */
  name?: string;
  /**
   * @remarks
   * The optional version number. If omitted, null, or blank, the latest version is resolved.
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

export class GetManagedAgentResponseBodyDataSubAgents extends $dara.Model {
  /**
   * @remarks
   * The child agent instruction.
   * 
   * This parameter is required.
   * 
   * @example
   * Review the code
   */
  instruction?: string;
  /**
   * @remarks
   * The child agent name.
   * 
   * This parameter is required.
   * 
   * @example
   * reviewer-agent
   */
  name?: string;
  /**
   * @remarks
   * The skills and actual versions used by the child agent. The version field is not returned when the template package does not contain version information.
   */
  skills?: GetManagedAgentResponseBodyDataSubAgentsSkills[];
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
      skills: { 'type': 'array', 'itemType': GetManagedAgentResponseBodyDataSubAgentsSkills },
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

export class GetManagedAgentResponseBodyDataTemplateAiRegistry extends $dara.Model {
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

export class GetManagedAgentResponseBodyDataTemplate extends $dara.Model {
  /**
   * @remarks
   * The AI registry template configuration.
   */
  aiRegistry?: GetManagedAgentResponseBodyDataTemplateAiRegistry;
  static names(): { [key: string]: string } {
    return {
      aiRegistry: 'aiRegistry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiRegistry: GetManagedAgentResponseBodyDataTemplateAiRegistry,
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

export class GetManagedAgentResponseBodyDataTools extends $dara.Model {
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

export class GetManagedAgentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The managed agent ID.
   * 
   * @example
   * agent-1
   */
  agentId?: string;
  /**
   * @remarks
   * The list of additional AgenticFS mounts. The total number of AgenticFS mounts and OSS mounts cannot exceed 10.
   */
  agenticFsMounts?: GetManagedAgentResponseBodyDataAgenticFsMounts[];
  /**
   * @remarks
   * The skills that are explicitly added or overridden by the user. This field does not include skills inherited from the template. The resource model reads this field to preserve update semantics. The skills field in the request is still used for create and update operations.
   */
  configuredSkills?: GetManagedAgentResponseBodyDataConfiguredSkills[];
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
   * The description of the managed agent.
   * 
   * @example
   * An agent for code review
   */
  description?: string;
  /**
   * @remarks
   * The environment configuration.
   */
  environment?: GetManagedAgentResponseBodyDataEnvironment;
  /**
   * @remarks
   * The agent runtime harness.
   */
  harness?: GetManagedAgentResponseBodyDataHarness;
  /**
   * @remarks
   * The agent instruction that guides the behavior of the agent.
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
   * The model configuration.
   */
  model?: GetManagedAgentResponseBodyDataModel;
  /**
   * @remarks
   * The name of the managed agent.
   * 
   * @example
   * my-agent
   */
  name?: string;
  /**
   * @remarks
   * The network configuration.
   */
  network?: GetManagedAgentResponseBodyDataNetwork;
  /**
   * @remarks
   * The list of OSS mounts. A maximum of 10 items are allowed.
   */
  ossMounts?: GetManagedAgentResponseBodyDataOssMounts[];
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
   * The runtime configuration.
   */
  runtime?: GetManagedAgentResponseBodyDataRuntime;
  /**
   * @remarks
   * The instance counts of the managed agent grouped by sandbox phase. Current keys: PENDING (creating or initializing), RUNNING (running), HIBERNATING (hibernating), HIBERNATED (hibernated), RESUMING (resuming), TERMINATING (terminating), FAILED (runtime failure). Only phases that actually occur are returned. Missing keys should be treated as 0. This field is a dynamic map and new keys may be added in the future. Use FAILED > 0 to determine whether abnormal instances exist.
   */
  sandboxPhaseCounts?: { [key: string]: number };
  /**
   * @remarks
   * The list of skill configurations.
   */
  skills?: GetManagedAgentResponseBodyDataSkills[];
  /**
   * @remarks
   * The status of the managed agent.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The list of child agent configurations.
   */
  subAgents?: GetManagedAgentResponseBodyDataSubAgents[];
  /**
   * @remarks
   * The template configuration.
   */
  template?: GetManagedAgentResponseBodyDataTemplate;
  /**
   * @remarks
   * The list of tool configurations.
   */
  tools?: GetManagedAgentResponseBodyDataTools[];
  /**
   * @remarks
   * The time when the resource was last updated, in RFC 3339 format.
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
      agentId: 'string',
      agenticFsMounts: { 'type': 'array', 'itemType': GetManagedAgentResponseBodyDataAgenticFsMounts },
      configuredSkills: { 'type': 'array', 'itemType': GetManagedAgentResponseBodyDataConfiguredSkills },
      createMode: 'string',
      createdAt: 'string',
      deployType: 'string',
      description: 'string',
      environment: GetManagedAgentResponseBodyDataEnvironment,
      harness: GetManagedAgentResponseBodyDataHarness,
      instruction: 'string',
      latestSpecVersion: 'number',
      latestVersionStatus: 'string',
      model: GetManagedAgentResponseBodyDataModel,
      name: 'string',
      network: GetManagedAgentResponseBodyDataNetwork,
      ossMounts: { 'type': 'array', 'itemType': GetManagedAgentResponseBodyDataOssMounts },
      regionId: 'string',
      runtime: GetManagedAgentResponseBodyDataRuntime,
      sandboxPhaseCounts: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      skills: { 'type': 'array', 'itemType': GetManagedAgentResponseBodyDataSkills },
      status: 'string',
      subAgents: { 'type': 'array', 'itemType': GetManagedAgentResponseBodyDataSubAgents },
      template: GetManagedAgentResponseBodyDataTemplate,
      tools: { 'type': 'array', 'itemType': GetManagedAgentResponseBodyDataTools },
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

export class GetManagedAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. The value is SUCCESS when the operation succeeds.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The details of the managed agent.
   */
  data?: GetManagedAgentResponseBodyData;
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
   * The result message of the request.
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
   * Indicates whether the request was successful.
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
      data: GetManagedAgentResponseBodyData,
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

