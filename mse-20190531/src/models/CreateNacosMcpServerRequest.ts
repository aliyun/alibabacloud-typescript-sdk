// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNacosMcpServerRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values: zh (Chinese, default) and en (English).
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the MCP tool specification. Valid values:
   * 
   * - `true`: Encrypts the specification.
   * - `false`: Does not encrypt the specification. This is the default value.
   */
  encryptToolSpec?: boolean;
  /**
   * @remarks
   * The JSON string of the endpoint specification.
   * 
   * @example
   * {"type":"REF","data":{"namespaceId":"public","groupName":"mcp-endpoints","serviceName":"mcp-demo"}}
   */
  endpointSpecification?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * mse-cn-st21ri2****
   */
  instanceId?: string;
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
   * mcp-demo
   */
  serverName?: string;
  /**
   * @remarks
   * The JSON string of the server specification.
   * 
   * @example
   * {"description":"a mcp demo service","capabilities":[],"allVersions":[{"version":"1.0.0","release_date":"2025-08-13T01:58:42Z","is_latest":true}],"remoteServerConfig":{"exportPath":"/sse"},"enabled":true,"versionDetail":{"version":"1.0.1"},"backendEndpoints":[{"path":"/sse","address":"127.0.0.1","port":8080}],"protocol":"mcp-sse","name":"mcp-demo","frontProtocol":"mcp-sse"}
   */
  serverSpecification?: string;
  /**
   * @remarks
   * The JSON string of the tool specification.
   * 
   * @example
   * {"tools":[{"name":"demo-tool","description":"a demo tool","inputSchema":{"type":"object","properties":{"name":{"type":"string","description":"name"}}}}],"toolsMeta":{"demo-tool":{"enabled":true}}}
   */
  toolSpecification?: string;
  /**
   * @remarks
   * The YAML configuration of the AI gateway. This parameter is optional.
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
      acceptLanguage: 'AcceptLanguage',
      encryptToolSpec: 'EncryptToolSpec',
      endpointSpecification: 'EndpointSpecification',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      serverName: 'ServerName',
      serverSpecification: 'ServerSpecification',
      toolSpecification: 'ToolSpecification',
      yamlConfig: 'YamlConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      encryptToolSpec: 'boolean',
      endpointSpecification: 'string',
      instanceId: 'string',
      namespaceId: 'string',
      serverName: 'string',
      serverSpecification: 'string',
      toolSpecification: 'string',
      yamlConfig: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

