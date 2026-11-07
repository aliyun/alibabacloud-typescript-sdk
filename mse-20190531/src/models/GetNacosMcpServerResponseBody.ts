// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataToolSpecToolsMetaValue } from "./DataToolSpecToolsMetaValue";


export class GetNacosMcpServerResponseBodyDataAllVersions extends $dara.Model {
  /**
   * @remarks
   * Indicates whether it is the latest version.
   * 
   * @example
   * true
   */
  isLatest?: boolean;
  /**
   * @remarks
   * The release date.
   * 
   * @example
   * 2025-07-16
   */
  releaseDate?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1.0.9
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      isLatest: 'Is_latest',
      releaseDate: 'Release_date',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isLatest: 'boolean',
      releaseDate: 'string',
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

export class GetNacosMcpServerResponseBodyDataBackendEndpoints extends $dara.Model {
  /**
   * @remarks
   * The address.
   * 
   * @example
   * 127.0.0.1
   */
  address?: string;
  /**
   * @remarks
   * The path.
   * 
   * @example
   * /sse
   */
  path?: string;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 80
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      path: 'Path',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      path: 'string',
      port: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNacosMcpServerResponseBodyDataRemoteServerConfigServiceRef extends $dara.Model {
  /**
   * @remarks
   * The group to which the service belongs.
   * 
   * @example
   * DEFAULT
   */
  groupName?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * public
   */
  namespaceId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * mcp-service
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      namespaceId: 'NamespaceId',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      namespaceId: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNacosMcpServerResponseBodyDataRemoteServerConfig extends $dara.Model {
  /**
   * @remarks
   * The exposed path.
   * 
   * @example
   * /sse
   */
  exportPath?: string;
  /**
   * @remarks
   * The service reference.
   */
  serviceRef?: GetNacosMcpServerResponseBodyDataRemoteServerConfigServiceRef;
  static names(): { [key: string]: string } {
    return {
      exportPath: 'ExportPath',
      serviceRef: 'ServiceRef',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportPath: 'string',
      serviceRef: GetNacosMcpServerResponseBodyDataRemoteServerConfigServiceRef,
    };
  }

  validate() {
    if(this.serviceRef && typeof (this.serviceRef as any).validate === 'function') {
      (this.serviceRef as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNacosMcpServerResponseBodyDataToolSpecTools extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * a weather query tool
   */
  description?: string;
  /**
   * @remarks
   * The input schema of the tool.
   */
  inputSchema?: { [key: string]: any };
  /**
   * @remarks
   * The tool name.
   * 
   * @example
   * get_weather
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      inputSchema: 'InputSchema',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      inputSchema: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
    };
  }

  validate() {
    if(this.inputSchema) {
      $dara.Model.validateMap(this.inputSchema);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNacosMcpServerResponseBodyDataToolSpec extends $dara.Model {
  /**
   * @remarks
   * The list of security authentication schemes in the MCP tool definition.
   */
  securitySchemes?: any;
  /**
   * @remarks
   * The storage format type of the MCP tool definition.
   * 
   * @example
   * cipher-kms-256
   */
  specificationType?: string;
  /**
   * @remarks
   * The decryption result status of the MCP tool definition.
   * 
   * @example
   * success
   */
  toolDecryptStatus?: string;
  /**
   * @remarks
   * The list of tools.
   */
  tools?: GetNacosMcpServerResponseBodyDataToolSpecTools[];
  /**
   * @remarks
   * The tool metadata map.
   */
  toolsMeta?: { [key: string]: DataToolSpecToolsMetaValue };
  static names(): { [key: string]: string } {
    return {
      securitySchemes: 'SecuritySchemes',
      specificationType: 'SpecificationType',
      toolDecryptStatus: 'ToolDecryptStatus',
      tools: 'Tools',
      toolsMeta: 'ToolsMeta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securitySchemes: 'any',
      specificationType: 'string',
      toolDecryptStatus: 'string',
      tools: { 'type': 'array', 'itemType': GetNacosMcpServerResponseBodyDataToolSpecTools },
      toolsMeta: { 'type': 'map', 'keyType': 'string', 'valueType': DataToolSpecToolsMetaValue },
    };
  }

  validate() {
    if(Array.isArray(this.tools)) {
      $dara.Model.validateArray(this.tools);
    }
    if(this.toolsMeta) {
      $dara.Model.validateMap(this.toolsMeta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNacosMcpServerResponseBodyDataVersionDetail extends $dara.Model {
  /**
   * @remarks
   * Indicates whether it is the latest version.
   * 
   * @example
   * true
   */
  isLatest?: boolean;
  /**
   * @remarks
   * The release date.
   * 
   * @example
   * 2025-07-16
   */
  releaseDate?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1.11.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      isLatest: 'IsLatest',
      releaseDate: 'ReleaseDate',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isLatest: 'boolean',
      releaseDate: 'string',
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

export class GetNacosMcpServerResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * All version information of the current MCP server.
   */
  allVersions?: GetNacosMcpServerResponseBodyDataAllVersions[];
  /**
   * @remarks
   * The backend service endpoints.
   */
  backendEndpoints?: GetNacosMcpServerResponseBodyDataBackendEndpoints[];
  /**
   * @remarks
   * The capabilities of the current MCP server.
   */
  capabilities?: string[];
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the gateway is enabled.
   * 
   * - true: Enabled.
   * 
   * - false: Disabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The exposed protocol type.
   * 
   * @example
   * mcp-sse
   */
  frontProtocol?: string;
  /**
   * @remarks
   * The ID.
   * 
   * @example
   * 5e3c5211-d365-4013-8540-c4106ec2a5dc
   */
  id?: string;
  /**
   * @remarks
   * The local MCP server configuration.
   */
  localServerConfig?: { [key: string]: any };
  /**
   * @remarks
   * The name.
   * 
   * @example
   * mcp-demo
   */
  name?: string;
  /**
   * @remarks
   * The protocol.
   * 
   * @example
   * mcp-sse
   */
  protocol?: string;
  /**
   * @remarks
   * The remote server configuration.
   */
  remoteServerConfig?: GetNacosMcpServerResponseBodyDataRemoteServerConfig;
  /**
   * @remarks
   * The tool specification.
   */
  toolSpec?: GetNacosMcpServerResponseBodyDataToolSpec;
  /**
   * @remarks
   * The version details.
   */
  versionDetail?: GetNacosMcpServerResponseBodyDataVersionDetail;
  /**
   * @remarks
   * The YAML configuration of the AI gateway.
   * 
   * @example
   * allowTools:
   * - demo-tool
   * securityScheme: {}
   * server:
   *   name: mcp-demo
   * tools:
   * - args:
   *   - name: name
   *     description: name
   *     type: string
   *   description: a demo tool
   *   name: demo-tool
   */
  yamlConfig?: string;
  static names(): { [key: string]: string } {
    return {
      allVersions: 'AllVersions',
      backendEndpoints: 'BackendEndpoints',
      capabilities: 'Capabilities',
      description: 'Description',
      enabled: 'Enabled',
      frontProtocol: 'FrontProtocol',
      id: 'Id',
      localServerConfig: 'LocalServerConfig',
      name: 'Name',
      protocol: 'Protocol',
      remoteServerConfig: 'RemoteServerConfig',
      toolSpec: 'ToolSpec',
      versionDetail: 'VersionDetail',
      yamlConfig: 'YamlConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allVersions: { 'type': 'array', 'itemType': GetNacosMcpServerResponseBodyDataAllVersions },
      backendEndpoints: { 'type': 'array', 'itemType': GetNacosMcpServerResponseBodyDataBackendEndpoints },
      capabilities: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      enabled: 'boolean',
      frontProtocol: 'string',
      id: 'string',
      localServerConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      protocol: 'string',
      remoteServerConfig: GetNacosMcpServerResponseBodyDataRemoteServerConfig,
      toolSpec: GetNacosMcpServerResponseBodyDataToolSpec,
      versionDetail: GetNacosMcpServerResponseBodyDataVersionDetail,
      yamlConfig: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allVersions)) {
      $dara.Model.validateArray(this.allVersions);
    }
    if(Array.isArray(this.backendEndpoints)) {
      $dara.Model.validateArray(this.backendEndpoints);
    }
    if(Array.isArray(this.capabilities)) {
      $dara.Model.validateArray(this.capabilities);
    }
    if(this.localServerConfig) {
      $dara.Model.validateMap(this.localServerConfig);
    }
    if(this.remoteServerConfig && typeof (this.remoteServerConfig as any).validate === 'function') {
      (this.remoteServerConfig as any).validate();
    }
    if(this.toolSpec && typeof (this.toolSpec as any).validate === 'function') {
      (this.toolSpec as any).validate();
    }
    if(this.versionDetail && typeof (this.versionDetail as any).validate === 'function') {
      (this.versionDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNacosMcpServerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: GetNacosMcpServerResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 72FC625E-9629-591B-9C01-3F0BFDAB****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetNacosMcpServerResponseBodyData,
      requestId: 'string',
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

