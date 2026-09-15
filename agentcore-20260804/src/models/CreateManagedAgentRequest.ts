// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateManagedAgentRequestBodyEnvironmentCredentialReferences extends $dara.Model {
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
   * The Key ID used to bind a Service Account Key of the QoderCLI Connector. This parameter can be omitted when only one key exists, but is required when multiple keys exist.
   * 
   * @example
   * key-xxxx
   */
  connectorServiceAccountKey?: string;
  /**
   * @remarks
   * The Connector Key name that is populated during queries. This parameter is not used as a binding criterion during writes.
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
   * The Connector binding configuration for the qodercli harness.
   */
  configuration?: CreateManagedAgentRequestBodyHarnessConfiguration;
  /**
   * @remarks
   * The harness type. Valid values: qwenpaw and qodercli. When the type is qodercli, binding is performed based on configuration.connectorServiceAccountKey, and the name is also populated during queries.
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
   * Specifies whether to enable the token quota. Default value: true. If you set this parameter to false, the token quota is disabled and existing quota rules are deleted.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The quota limit type. This parameter is required by backend validation when the quota is enabled. Fixed value: token.
   * 
   * @example
   * token
   */
  limitType?: string;
  /**
   * @remarks
   * The quota statistical period. This parameter is required by backend validation when the quota is enabled. Valid values:
   * - day: daily.
   * - month: monthly.
   * 
   * @example
   * day
   */
  periodType?: string;
  /**
   * @remarks
   * The maximum number of tokens that can be consumed within a single period. This parameter is required by backend validation when the quota is enabled. The value must be greater than 0.
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
   * The model connection ID.
   * 
   * This parameter is required.
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
   * The model token quota configuration. If this parameter is not specified, no quota is configured.
   */
  quota?: CreateManagedAgentRequestBodyModelQuota;
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
      quota: CreateManagedAgentRequestBodyModelQuota,
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
   * Specifies whether to allow public network access.
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
   * The OSS bucket name. This parameter is required by backend validation for each mount entry.
   */
  bucketName?: string;
  /**
   * @remarks
   * The absolute mount path inside the container. This parameter is required by backend validation for each mount entry.
   */
  mountPath?: string;
  /**
   * @remarks
   * The relative object prefix within the bucket. If this parameter is not specified, the entire bucket is mounted.
   */
  path?: string;
  /**
   * @remarks
   * Specifies whether to mount in read-only mode. Default value: false.
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

export class CreateManagedAgentRequestBodyRuntimeCompute extends $dara.Model {
  /**
   * @remarks
   * The compute class.
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
   * Specifies whether to enable auto scaling. This parameter is required by backend validation when hpa is present.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The maximum number of active sessions per sandbox. This parameter is required by backend validation when hpa is present.
   */
  maxConcurrentSessionsPerSandbox?: number;
  /**
   * @remarks
   * The maximum number of sandboxes. This parameter is required when HPA is enabled and the value must be no less than the minimum value.
   */
  maxSandboxCount?: number;
  /**
   * @remarks
   * The minimum number of sandboxes. This parameter is required when HPA is enabled.
   */
  minSandboxCount?: number;
  /**
   * @remarks
   * The session reclamation time after inactivity, in seconds. This parameter is required by backend validation when hpa is present.
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
   * The sandbox auto scaling and session configuration.
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

export class CreateManagedAgentRequestBodySkills extends $dara.Model {
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

export class CreateManagedAgentRequestBodySubAgents extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      instruction: 'instruction',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instruction: 'string',
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
   * This parameter is required.
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

export class CreateManagedAgentRequestBody extends $dara.Model {
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
  environment?: CreateManagedAgentRequestBodyEnvironment;
  /**
   * @remarks
   * The harness for the managed agent. Valid values: qwenpaw and qodercli.
   */
  harness?: CreateManagedAgentRequestBodyHarness;
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
   * The model configuration.
   * 
   * This parameter is required.
   */
  model?: CreateManagedAgentRequestBodyModel;
  /**
   * @remarks
   * The name of the managed agent.
   * 
   * This parameter is required.
   * 
   * @example
   * my-agent
   */
  name?: string;
  /**
   * @remarks
   * The network configuration.
   */
  network?: CreateManagedAgentRequestBodyNetwork;
  /**
   * @remarks
   * The list of OSS mounts. A maximum of 10 entries are supported.
   */
  ossMounts?: CreateManagedAgentRequestBodyOssMounts[];
  /**
   * @remarks
   * The runtime configuration.
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
   * The tool configuration list.
   */
  tools?: CreateManagedAgentRequestBodyTools[];
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      environment: 'environment',
      harness: 'harness',
      instruction: 'instruction',
      model: 'model',
      name: 'name',
      network: 'network',
      ossMounts: 'ossMounts',
      runtime: 'runtime',
      skills: 'skills',
      subAgents: 'subAgents',
      template: 'template',
      tools: 'tools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      environment: CreateManagedAgentRequestBodyEnvironment,
      harness: CreateManagedAgentRequestBodyHarness,
      instruction: 'string',
      model: CreateManagedAgentRequestBodyModel,
      name: 'string',
      network: CreateManagedAgentRequestBodyNetwork,
      ossMounts: { 'type': 'array', 'itemType': CreateManagedAgentRequestBodyOssMounts },
      runtime: CreateManagedAgentRequestBodyRuntime,
      skills: { 'type': 'array', 'itemType': CreateManagedAgentRequestBodySkills },
      subAgents: { 'type': 'array', 'itemType': CreateManagedAgentRequestBodySubAgents },
      template: CreateManagedAgentRequestBodyTemplate,
      tools: { 'type': 'array', 'itemType': CreateManagedAgentRequestBodyTools },
    };
  }

  validate() {
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
   * The reserved idempotency token. The backend does not provide idempotency guarantees in the current version.
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

