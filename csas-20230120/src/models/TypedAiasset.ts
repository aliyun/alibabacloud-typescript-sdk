// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TypedAIAssetIdentityIdentifiersPeProductIdentity extends $dara.Model {
  /**
   * @remarks
   * The CompanyName field of the Windows PE version resource. This is not a certified vendor identity.
   * 
   * @example
   * Example Corp
   */
  companyName?: string;
  /**
   * @remarks
   * The ProductName field of the Windows PE version resource.
   * 
   * @example
   * Example Agent
   */
  productName?: string;
  static names(): { [key: string]: string } {
    return {
      companyName: 'company_name',
      productName: 'product_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyName: 'string',
      productName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TypedAIAssetIdentityIdentifiersWindowsAppxIdentity extends $dara.Model {
  /**
   * @remarks
   * The original package name of the Windows AppX/MSIX manifest Identity.Name.
   * 
   * @example
   * Example.Agent
   */
  name?: string;
  /**
   * @remarks
   * The publisher string of the Windows AppX/MSIX manifest Identity.Publisher. This is not equivalent to the signature verification result.
   * 
   * @example
   * CN=Example Corp, O=Example Corp, C=US
   */
  publisher?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      publisher: 'publisher',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      publisher: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TypedAIAssetIdentityIdentifiers extends $dara.Model {
  /**
   * @remarks
   * The array of application names declared in the desktop application manifest.
   * 
   * @example
   * ["Example Agent"]
   */
  desktopManifestName?: string[];
  /**
   * @remarks
   * The array of plugin IDs declared in the JetBrains plugin manifest.
   * 
   * @example
   * ["com.example.agent.plugin"]
   */
  jetbrainsPluginId?: string[];
  /**
   * @remarks
   * The array of macOS application bundle identifiers. This describes the collected product identity clues and does not indicate that the signature has been verified.
   * 
   * @example
   * ["com.example.agent"]
   */
  macosBundleId?: string[];
  /**
   * @remarks
   * The array of npm package names. Scoped packages retain the @scope/name format.
   * 
   * @example
   * ["@example/agent-cli"]
   */
  npmPackage?: string[];
  /**
   * @remarks
   * The array of product name and company name combinations in Windows PE version resources. This is not a file hash or a verified signature identity.
   * 
   * @example
   * [{"product_name":"Example Agent","company_name":"Example Corp"}]
   */
  peProductIdentity?: TypedAIAssetIdentityIdentifiersPeProductIdentity[];
  /**
   * @remarks
   * The array of Python package distribution names. This is used for product identity recognition and is not a list of imported module names.
   * 
   * @example
   * ["example-agent-sdk"]
   */
  pypiPackage?: string[];
  /**
   * @remarks
   * The array of VS Code extension identifiers, typically the publisher name and extension name connected by a dot.
   * 
   * @example
   * ["example.agent-assistant"]
   */
  vscodeExtensionId?: string[];
  /**
   * @remarks
   * The array of Windows AppX/MSIX manifest identities, where each item provides both the package name and publisher. This does not indicate that the publisher signature is verified.
   * 
   * @example
   * [{"name":"Example.Agent","publisher":"CN=Example Corp, O=Example Corp, C=US"}]
   */
  windowsAppxIdentity?: TypedAIAssetIdentityIdentifiersWindowsAppxIdentity[];
  /**
   * @remarks
   * The array of Windows app package family names, which includes the package name and publisher ID suffix. This is not the application installation path.
   * 
   * @example
   * ["Example.Agent_123456789abcd"]
   */
  windowsPackageFamilyName?: string[];
  static names(): { [key: string]: string } {
    return {
      desktopManifestName: 'desktop_manifest_name',
      jetbrainsPluginId: 'jetbrains_plugin_id',
      macosBundleId: 'macos_bundle_id',
      npmPackage: 'npm_package',
      peProductIdentity: 'pe_product_identity',
      pypiPackage: 'pypi_package',
      vscodeExtensionId: 'vscode_extension_id',
      windowsAppxIdentity: 'windows_appx_identity',
      windowsPackageFamilyName: 'windows_package_family_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopManifestName: { 'type': 'array', 'itemType': 'string' },
      jetbrainsPluginId: { 'type': 'array', 'itemType': 'string' },
      macosBundleId: { 'type': 'array', 'itemType': 'string' },
      npmPackage: { 'type': 'array', 'itemType': 'string' },
      peProductIdentity: { 'type': 'array', 'itemType': TypedAIAssetIdentityIdentifiersPeProductIdentity },
      pypiPackage: { 'type': 'array', 'itemType': 'string' },
      vscodeExtensionId: { 'type': 'array', 'itemType': 'string' },
      windowsAppxIdentity: { 'type': 'array', 'itemType': TypedAIAssetIdentityIdentifiersWindowsAppxIdentity },
      windowsPackageFamilyName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.desktopManifestName)) {
      $dara.Model.validateArray(this.desktopManifestName);
    }
    if(Array.isArray(this.jetbrainsPluginId)) {
      $dara.Model.validateArray(this.jetbrainsPluginId);
    }
    if(Array.isArray(this.macosBundleId)) {
      $dara.Model.validateArray(this.macosBundleId);
    }
    if(Array.isArray(this.npmPackage)) {
      $dara.Model.validateArray(this.npmPackage);
    }
    if(Array.isArray(this.peProductIdentity)) {
      $dara.Model.validateArray(this.peProductIdentity);
    }
    if(Array.isArray(this.pypiPackage)) {
      $dara.Model.validateArray(this.pypiPackage);
    }
    if(Array.isArray(this.vscodeExtensionId)) {
      $dara.Model.validateArray(this.vscodeExtensionId);
    }
    if(Array.isArray(this.windowsAppxIdentity)) {
      $dara.Model.validateArray(this.windowsAppxIdentity);
    }
    if(Array.isArray(this.windowsPackageFamilyName)) {
      $dara.Model.validateArray(this.windowsPackageFamilyName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TypedAIAssetRecognitionEvidenceAgentDeclaration extends $dara.Model {
  /**
   * @remarks
   * The collected declaration text related to the identification evidence, currently used mainly for agent_declaration. Other identification evidence may not return content. This should not be interpreted as an actual execution log.
   * 
   * @example
   * An AI agent that plans tasks and uses configured tools.
   */
  content?: string;
  /**
   * @remarks
   * The local file or configuration location where the identification evidence is found. This is used to display and locate static clues, and is not a server-downloadable address.
   * 
   * @example
   * /opt/example-agent/package.json
   */
  sourcePath?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      sourcePath: 'source_path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      sourcePath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TypedAIAssetRecognitionEvidenceAutonomousExecution extends $dara.Model {
  /**
   * @remarks
   * The collected declaration text related to the identification evidence, currently used mainly for agent_declaration. Other identification evidence may not return content. This should not be interpreted as an actual execution log.
   * 
   * @example
   * An AI agent that plans tasks and uses configured tools.
   */
  content?: string;
  /**
   * @remarks
   * The local file or configuration location where the identification evidence is found. This is used to display and locate static clues, and is not a server-downloadable address.
   * 
   * @example
   * /opt/example-agent/package.json
   */
  sourcePath?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      sourcePath: 'source_path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      sourcePath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TypedAIAssetRecognitionEvidenceModelCall extends $dara.Model {
  /**
   * @remarks
   * The collected declaration text related to the identification evidence, currently used mainly for agent_declaration. Other identification evidence may not return content. This should not be interpreted as an actual execution log.
   * 
   * @example
   * An AI agent that plans tasks and uses configured tools.
   */
  content?: string;
  /**
   * @remarks
   * The local file or configuration location where the identification evidence is found. This is used to display and locate static clues, and is not a server-downloadable address.
   * 
   * @example
   * /opt/example-agent/package.json
   */
  sourcePath?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      sourcePath: 'source_path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      sourcePath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TypedAIAssetRecognitionEvidenceStateManagement extends $dara.Model {
  /**
   * @remarks
   * The collected declaration text related to the identification evidence, currently used mainly for agent_declaration. Other identification evidence may not return content. This should not be interpreted as an actual execution log.
   * 
   * @example
   * An AI agent that plans tasks and uses configured tools.
   */
  content?: string;
  /**
   * @remarks
   * The local file or configuration location where the identification evidence is found. This is used to display and locate static clues, and is not a server-downloadable address.
   * 
   * @example
   * /opt/example-agent/package.json
   */
  sourcePath?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      sourcePath: 'source_path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      sourcePath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TypedAIAssetRecognitionEvidenceToolCall extends $dara.Model {
  /**
   * @remarks
   * The collected declaration text related to the identification evidence, currently used mainly for agent_declaration. Other identification evidence may not return content. This should not be interpreted as an actual execution log.
   * 
   * @example
   * An AI agent that plans tasks and uses configured tools.
   */
  content?: string;
  /**
   * @remarks
   * The local file or configuration location where the identification evidence is found. This is used to display and locate static clues, and is not a server-downloadable address.
   * 
   * @example
   * /opt/example-agent/package.json
   */
  sourcePath?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      sourcePath: 'source_path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      sourcePath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TypedAIAssetRecognitionEvidence extends $dara.Model {
  /**
   * @remarks
   * The array of evidence for explicit declarations of agent roles, capabilities, or usage methods. The declaration content itself does not constitute security certification.
   * 
   * @example
   * [{"source_path":"/opt/example-agent/package.json","content":"An AI agent that plans tasks and uses configured tools."}]
   */
  agentDeclaration?: TypedAIAssetRecognitionEvidenceAgentDeclaration[];
  /**
   * @remarks
   * The array of static evidence related to autonomous task execution or agent loops. This does not indicate that actual execution was observed during this scan.
   * 
   * @example
   * [{"source_path":"/opt/example-agent/agent.py"}]
   */
  autonomousExecution?: TypedAIAssetRecognitionEvidenceAutonomousExecution[];
  /**
   * @remarks
   * The array of static evidence related to model clients, requests, or configurations. This does not indicate that model requests were actually sent.
   * 
   * @example
   * [{"source_path":"/opt/example-agent/model.py"}]
   */
  modelCall?: TypedAIAssetRecognitionEvidenceModelCall[];
  /**
   * @remarks
   * The array of static evidence related to sessions, memory, or state management. This does not prove actual data persistence or runtime behavior.
   * 
   * @example
   * [{"source_path":"/opt/example-agent/session.py"}]
   */
  stateManagement?: TypedAIAssetRecognitionEvidenceStateManagement[];
  /**
   * @remarks
   * The array of static evidence related to tool declarations or code to invoke tools. This does not indicate that the tool was actually executed.
   * 
   * @example
   * [{"source_path":"/opt/example-agent/tools.py"}]
   */
  toolCall?: TypedAIAssetRecognitionEvidenceToolCall[];
  static names(): { [key: string]: string } {
    return {
      agentDeclaration: 'agent_declaration',
      autonomousExecution: 'autonomous_execution',
      modelCall: 'model_call',
      stateManagement: 'state_management',
      toolCall: 'tool_call',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentDeclaration: { 'type': 'array', 'itemType': TypedAIAssetRecognitionEvidenceAgentDeclaration },
      autonomousExecution: { 'type': 'array', 'itemType': TypedAIAssetRecognitionEvidenceAutonomousExecution },
      modelCall: { 'type': 'array', 'itemType': TypedAIAssetRecognitionEvidenceModelCall },
      stateManagement: { 'type': 'array', 'itemType': TypedAIAssetRecognitionEvidenceStateManagement },
      toolCall: { 'type': 'array', 'itemType': TypedAIAssetRecognitionEvidenceToolCall },
    };
  }

  validate() {
    if(Array.isArray(this.agentDeclaration)) {
      $dara.Model.validateArray(this.agentDeclaration);
    }
    if(Array.isArray(this.autonomousExecution)) {
      $dara.Model.validateArray(this.autonomousExecution);
    }
    if(Array.isArray(this.modelCall)) {
      $dara.Model.validateArray(this.modelCall);
    }
    if(Array.isArray(this.stateManagement)) {
      $dara.Model.validateArray(this.stateManagement);
    }
    if(Array.isArray(this.toolCall)) {
      $dara.Model.validateArray(this.toolCall);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TypedAIAssetRiskInfo extends $dara.Model {
  /**
   * @remarks
   * The number of high-risk items in the current saved detection results. This is interpreted as an actual count only when detection results are available.
   * 
   * @example
   * 1
   */
  highRiskCnt?: number;
  /**
   * @remarks
   * The number of low-risk items in the current saved detection results. A value of zero indicates no low-risk items in the results, but does not indicate overall security.
   * 
   * @example
   * 0
   */
  lowRiskCnt?: number;
  /**
   * @remarks
   * The number of medium-risk items in the current saved detection results. A value of zero indicates no medium-risk items in the results, but does not indicate the absence of other risks.
   * 
   * @example
   * 0
   */
  mediumRiskCnt?: number;
  static names(): { [key: string]: string } {
    return {
      highRiskCnt: 'highRiskCnt',
      lowRiskCnt: 'lowRiskCnt',
      mediumRiskCnt: 'mediumRiskCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      highRiskCnt: 'number',
      lowRiskCnt: 'number',
      mediumRiskCnt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TypedAIAsset extends $dara.Model {
  /**
   * @remarks
   * The MCP access type. Valid values: local_process for local processes, remote_service for remote services, and unknown for undetermined.
   * 
   * @example
   * local_process
   */
  accessType?: string;
  /**
   * @remarks
   * The database primary key of the agent instance associated with the leaf asset, returned as a decimal string. This value can be 0 when not associated, and can also be 0 in the agent\"s own details. This field is not returned in aggregation lists.
   * 
   * @example
   * 1234567890123456789
   */
  agentId?: string;
  /**
   * @remarks
   * The configuration path where the LLM, MCP, or tool declaration is located. This is not a skill package identifier. This field may be returned in instance details but is not returned in aggregated lists.
   * 
   * @example
   * /home/example/.config/example-agent/config.json
   */
  configPath?: string;
  /**
   * @remarks
   * The description text collected for the MCP, tool, or skill. This field is not returned if missing, and aggregated lists only return descriptions that are consistent within the group.
   * 
   * @example
   * Read and organize documents in the specified directory
   */
  description?: string;
  /**
   * @remarks
   * The configured service endpoint for the LLM model service or remote MCP. This field may be absent for local stdio MCP and does not indicate a successful connection or actual invocation.
   * 
   * @example
   * https://api.example.com/v1
   */
  endpoint?: string;
  /**
   * @remarks
   * The classification of the LLM service endpoint. Valid values: official for official services, third_party for third-party services, and unknown for undetermined. This classification does not represent a security detection conclusion.
   * 
   * @example
   * official
   */
  endpointType?: string;
  /**
   * @remarks
   * The time when the asset instance was first observed. The value is a database datetime string that may include six decimal places for seconds. The returned value does not include a unified time zone indicator. This field is not returned in aggregated lists.
   * 
   * @example
   * 2026-10-16 10:30:00.000000
   */
  firstSeen?: string;
  /**
   * @remarks
   * The installation form of the agent, such as desktop_app, ide_extension, cli, or sdk. This does not refer to endpoint operating systems like Windows or macOS. The specific value depends on the instance identification result.
   * 
   * @example
   * cli
   */
  form?: string;
  /**
   * @remarks
   * The database primary key of the table where the asset instance is located, returned as a decimal string to prevent precision loss for large integers. This is not the asset aggregation key AssetKey, and this instance field is not returned in aggregation lists.
   * 
   * @example
   * 1234567890123456789
   */
  id?: string;
  /**
   * @remarks
   * The collected product identity clues, grouped by identifier type. These are used to assist identification and do not authenticate signatures, publishers, or file contents for security.
   * 
   * @example
   * {"macos_bundle_id":["com.example.agent"],"npm_package":["@example/agent-cli"]}
   */
  identityIdentifiers?: TypedAIAssetIdentityIdentifiers;
  /**
   * @remarks
   * The installation path of the agent instance. This field is used only for instance details, is not returned in aggregation lists, and is not applicable to other asset types.
   * 
   * @example
   * /opt/example-agent
   */
  installPath?: string;
  /**
   * @remarks
   * The instance identity installed or declared within the endpoint, calculated by the script based on asset type, ownership, and location. The identity scope must still include the tenant and endpoint, and it cannot serve as a globally unique ID across endpoints. This field is not returned in aggregation lists.
   * 
   * @example
   * sha256:70e28ce51d55863f2ac5bb81efcee54026ff9fdde9b52346c659f4e24017e7f6
   */
  instanceLocalId?: string;
  /**
   * @remarks
   * The latest successful inspection time of the current skill content. This field is empty or not returned when there are no saved successful inspection records. The value is a database datetime string without a unified time zone indicator. This field is not returned in aggregated lists.
   * 
   * @example
   * 2026-10-16 10:30:00.000000
   */
  lastCheckTime?: string;
  /**
   * @remarks
   * The database ID of the latest inspection task associated with the current skill content, returned as a decimal numeric string. This can be 0 if no task is associated. The presence of a task ID does not indicate that the inspection is complete. This field is not returned in aggregated lists.
   * 
   * @example
   * 1234567890123456791
   */
  lastDetectTaskId?: string;
  /**
   * @remarks
   * The time when the asset instance was most recently observed. The value is a database datetime string that may include six decimal places for seconds. This is not the page query time. This field is not returned in aggregated lists.
   * 
   * @example
   * 2026-10-16 11:30:00.000000
   */
  lastSeen?: string;
  /**
   * @remarks
   * The array of static identification evidence tags matched by the agent, which may include model_call, tool_call, autonomous_execution, state_management, and agent_declaration. This does not indicate actual execution or security certification.
   * 
   * @example
   * ["model_call","tool_call"]
   */
  matchedRules?: string[];
  /**
   * @remarks
   * The database primary key of the MCP instance associated with the tool, returned as a decimal string. This value can be 0 when not associated with an MCP, and is not applicable to other asset types. This field is not returned in aggregation lists.
   * 
   * @example
   * 1234567890123456790
   */
  mcpId?: string;
  /**
   * @remarks
   * The agent product code. Refer to the identification rule product catalog for specific values. This field is not returned when not applicable, unidentified, or when aggregation properties are inconsistent.
   * 
   * @example
   * example_agent
   */
  productCode?: string;
  /**
   * @remarks
   * The provider identifier matched by the service endpoint and provider directory. This may not be returned if no match is found and is not the product code of the associated agent.
   * 
   * @example
   * example_provider
   */
  providerId?: string;
  /**
   * @remarks
   * The provider display name of the tool, which is generated from the associated MCP, agent, or declaration source. This is not a proof of security or trust.
   * 
   * @example
   * Example MCP
   */
  providerName?: string;
  /**
   * @remarks
   * The Chinese display name of the service provider. The directory name is preferred, but a name parsed from the service endpoint may be used if no match is found. The presence of this field does not indicate that the service provider is identified.
   * 
   * @example
   * Sample model service provider
   */
  providerNameCn?: string;
  /**
   * @remarks
   * The English display name of the service provider. The directory name is preferred, but a name parsed from the service endpoint may be used if no match is found. The presence of this field does not indicate that the service provider is identified.
   * 
   * @example
   * Example Model Provider
   */
  providerNameEn?: string;
  /**
   * @remarks
   * The declared provider type of the tool. Valid values: mcp, agent, software, file, or unknown. This describes the declaration source and does not represent the actual caller, authorization status, or vendor identity.
   * 
   * @example
   * mcp
   */
  providerType?: string;
  /**
   * @remarks
   * The static identification evidence for the agent, listing source locations and evidence text grouped by identification tags. This is not a runtime audit record, and instance-level evidence is not returned in aggregation lists.
   * 
   * @example
   * {"model_call":[{"source_path":"/opt/example-agent/model.py"}]}
   */
  recognitionEvidence?: TypedAIAssetRecognitionEvidence;
  /**
   * @remarks
   * The product recognition status of the agent: identified means recognized, unidentified means pending recognition, and conflict means recognition conflict. This does not indicate whether the asset is secure.
   * 
   * @example
   * identified
   */
  recognitionStatus?: string;
  /**
   * @remarks
   * The saved counts of high, medium, and low risk items for the current skill content. This field may be empty or not returned when there are no detection results. The absence of this field cannot be interpreted as a zero risk count or a secure status.
   * 
   * @example
   * {"highRiskCnt":1,"mediumRiskCnt":0,"lowRiskCnt":0}
   */
  riskInfo?: TypedAIAssetRiskInfo;
  /**
   * @remarks
   * The saved final risk level of the current skill content. This field is not returned when there is no detection conclusion. The value high is provided only as a format example and does not serve as a new enumeration constraint.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The scan batch identifier when this instance was last actually observed. This is not a database primary key or asset content hash. This field is not returned in aggregation lists.
   * 
   * @example
   * scan-0123456789abcdef0123456789abcdef
   */
  scanId?: string;
  /**
   * @remarks
   * The source channel classification of the skill. The default value for current collection and storage is unknown. The unknown value cannot be inferred as an official or community source.
   * 
   * @example
   * unknown
   */
  sourceType?: string;
  /**
   * @remarks
   * The SHA-256 hash of the complete skill package bytes, formatted as a 64-character lowercase hexadecimal string without the sha256: prefix. The current script uses the skill-canonical-zip-v1 specification for compression. This is not equivalent to the installation instance ID and does not indicate that the package has been inspected or is secure.
   * 
   * @example
   * 60d3292dd23fe7d2760d6a228123d1e4eb3d91bdb511089015e854d68ea9e460
   */
  standardSha256?: string;
  /**
   * @remarks
   * The transport protocol declared in the MCP configuration. The collected value is preserved as-is, such as stdio, sse, or streamable_http. This cannot be used to determine whether the service is running or has been invoked.
   * 
   * @example
   * stdio
   */
  transport?: string;
  /**
   * @remarks
   * The vendor code for skill collection and storage. The current default value is 1000. This cannot be used to infer a specific vendor or security status.
   * 
   * @example
   * 1000
   */
  vendor?: number;
  /**
   * @remarks
   * The collected installation version of the agent. This field is not returned if not collected. In aggregation lists, it is only returned when all instances in the group have the same non-empty version.
   * 
   * @example
   * 1.2.3
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      agentId: 'AgentId',
      configPath: 'ConfigPath',
      description: 'Description',
      endpoint: 'Endpoint',
      endpointType: 'EndpointType',
      firstSeen: 'FirstSeen',
      form: 'Form',
      id: 'Id',
      identityIdentifiers: 'IdentityIdentifiers',
      installPath: 'InstallPath',
      instanceLocalId: 'InstanceLocalId',
      lastCheckTime: 'LastCheckTime',
      lastDetectTaskId: 'LastDetectTaskId',
      lastSeen: 'LastSeen',
      matchedRules: 'MatchedRules',
      mcpId: 'McpId',
      productCode: 'ProductCode',
      providerId: 'ProviderId',
      providerName: 'ProviderName',
      providerNameCn: 'ProviderNameCn',
      providerNameEn: 'ProviderNameEn',
      providerType: 'ProviderType',
      recognitionEvidence: 'RecognitionEvidence',
      recognitionStatus: 'RecognitionStatus',
      riskInfo: 'RiskInfo',
      riskLevel: 'RiskLevel',
      scanId: 'ScanId',
      sourceType: 'SourceType',
      standardSha256: 'StandardSha256',
      transport: 'Transport',
      vendor: 'Vendor',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      agentId: 'string',
      configPath: 'string',
      description: 'string',
      endpoint: 'string',
      endpointType: 'string',
      firstSeen: 'string',
      form: 'string',
      id: 'string',
      identityIdentifiers: TypedAIAssetIdentityIdentifiers,
      installPath: 'string',
      instanceLocalId: 'string',
      lastCheckTime: 'string',
      lastDetectTaskId: 'string',
      lastSeen: 'string',
      matchedRules: { 'type': 'array', 'itemType': 'string' },
      mcpId: 'string',
      productCode: 'string',
      providerId: 'string',
      providerName: 'string',
      providerNameCn: 'string',
      providerNameEn: 'string',
      providerType: 'string',
      recognitionEvidence: TypedAIAssetRecognitionEvidence,
      recognitionStatus: 'string',
      riskInfo: TypedAIAssetRiskInfo,
      riskLevel: 'string',
      scanId: 'string',
      sourceType: 'string',
      standardSha256: 'string',
      transport: 'string',
      vendor: 'number',
      version: 'string',
    };
  }

  validate() {
    if(this.identityIdentifiers && typeof (this.identityIdentifiers as any).validate === 'function') {
      (this.identityIdentifiers as any).validate();
    }
    if(Array.isArray(this.matchedRules)) {
      $dara.Model.validateArray(this.matchedRules);
    }
    if(this.recognitionEvidence && typeof (this.recognitionEvidence as any).validate === 'function') {
      (this.recognitionEvidence as any).validate();
    }
    if(this.riskInfo && typeof (this.riskInfo as any).validate === 'function') {
      (this.riskInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

