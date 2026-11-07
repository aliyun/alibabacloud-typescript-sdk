// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPluginConfigResponseBodyDataGatewayConfigListResourceList extends $dara.Model {
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The resource name, which is the domain name or route name.
   * 
   * @example
   * test-route
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
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

export class GetPluginConfigResponseBodyDataGatewayConfigList extends $dara.Model {
  /**
   * @remarks
   * The plug-in configuration.
   * 
   * @example
   * # Validate required configuration fields. In the following example, the plug-in configuration must contain the "name", "age", and "friends" fields.
   * name: John
   * age: 18
   * friends:
   * - David
   * - Anne
   */
  config?: string;
  /**
   * @remarks
   * The plug-in application scope. Valid values:
   * 
   * - 0: Global.
   * - 1: Domain name.
   * - 2: Route.
   * 
   * @example
   * 0
   */
  configLevel?: number;
  /**
   * @remarks
   * Indicates whether the plug-in is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * 1
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-ubuwqygbq4783gqb2y3f87q****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1667309705000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1667309705000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The plug-in configuration ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The ID of the gateway plug-in.
   * 
   * @example
   * 1
   */
  pluginId?: number;
  /**
   * @remarks
   * The list of domain name and route resources, distinguished by ConfigLevel.
   */
  resourceList?: GetPluginConfigResponseBodyDataGatewayConfigListResourceList[];
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      configLevel: 'ConfigLevel',
      enable: 'Enable',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      pluginId: 'PluginId',
      resourceList: 'ResourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      configLevel: 'number',
      enable: 'boolean',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      pluginId: 'number',
      resourceList: { 'type': 'array', 'itemType': GetPluginConfigResponseBodyDataGatewayConfigListResourceList },
    };
  }

  validate() {
    if(Array.isArray(this.resourceList)) {
      $dara.Model.validateArray(this.resourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPluginConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The plug-in category. Valid values:
   * 
   * - 0: Custom.
   * - 1: Authentication and authorization.
   * - 2: Security protection.
   * - 3: Transport protocol.
   * - 4: Traffic control.
   * - 5: Traffic observation.
   * 
   * @example
   * 0
   */
  category?: number;
  /**
   * @remarks
   * The configuration validation.
   * 
   * @example
   * # Validate required configuration fields. In the following example, the plug-in configuration must contain the "name", "age", and "friends" fields.
   * name: John
   * age: 18
   * friends:
   * - David
   * - Anne
   */
  configCheck?: string;
  /**
   * @remarks
   * The plug-in configuration example.
   * 
   * @example
   * blocked_code: 404
   * blocked_message: resource not found
   */
  configExample?: string;
  /**
   * @remarks
   * The start index of domain-level rules in GatewayConfigList. If no domain-level rules exist, the value is -1.
   * 
   * @example
   * 5
   */
  domainConfigStartIndex?: number;
  /**
   * @remarks
   * The list of gateway plug-in configurations.
   */
  gatewayConfigList?: GetPluginConfigResponseBodyDataGatewayConfigList[];
  /**
   * @remarks
   * The index of instance-level rules in GatewayConfigList. If no instance-level rules exist, the value is -1.
   * 
   * @example
   * 7
   */
  gatewayConfigStartIndex?: number;
  /**
   * @remarks
   * The plug-in ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * name
   */
  imageName?: string;
  /**
   * @remarks
   * The mode.
   * 
   * @example
   * 0
   */
  mode?: number;
  /**
   * @remarks
   * The plug-in name.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The plug-in execution phase. Valid values:
   * 
   * - 0: Default phase.
   * - 1: Authentication phase.
   * - 2: Authorization phase.
   * - 3: Statistics phase.
   * 
   * @example
   * 0
   */
  phase?: number;
  /**
   * @remarks
   * The ID of the creator.
   * 
   * @example
   * 123
   */
  primaryUser?: string;
  /**
   * @remarks
   * The plug-in execution priority. A larger value indicates a higher priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The publish status.
   * 
   * @example
   * 1
   */
  publishState?: number;
  /**
   * @remarks
   * The README description.
   * 
   * @example
   * read me
   */
  readme?: string;
  /**
   * @remarks
   * The README description in English.
   * 
   * @example
   * read me
   */
  readmeEn?: string;
  /**
   * @remarks
   * The start index of route-level rules in GatewayConfigList. If no route-level rules exist, the value is -1.
   * 
   * @example
   * 0
   */
  routeConfigStartIndex?: number;
  /**
   * @remarks
   * The enabling status. Valid values:
   * 
   * - 0: Disabled.
   * - 1: Enabled.
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * The plug-in summary.
   * 
   * @example
   * This is a plug-in
   */
  summary?: string;
  /**
   * @remarks
   * The plug-in summary in English.
   * 
   * @example
   * Convert request/response headers, request query parameters, and request/response body parameters.
   */
  summaryEn?: string;
  /**
   * @remarks
   * The plug-in type. Valid values:
   * - 0: HTTP filter.
   * - 1: Network filter.
   * 
   * @example
   * 0
   */
  type?: number;
  /**
   * @remarks
   * The plug-in version.
   * 
   * @example
   * v1
   */
  version?: string;
  /**
   * @remarks
   * The list of gateway plug-in version information.
   * 
   * @example
   * [{"id":1, "version": "1.0.0"}]
   */
  versionJson?: string;
  /**
   * @remarks
   * The WebAssembly (Wasm) implementation language. Valid values:
   * 
   * - 0: C++.
   * - 1: TinyGo.
   * - 2: Rust.
   * - 3: AssemblyScript.
   * - 4: Zig.
   * 
   * @example
   * 0
   */
  wasmLang?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      configCheck: 'ConfigCheck',
      configExample: 'ConfigExample',
      domainConfigStartIndex: 'DomainConfigStartIndex',
      gatewayConfigList: 'GatewayConfigList',
      gatewayConfigStartIndex: 'GatewayConfigStartIndex',
      id: 'Id',
      imageName: 'ImageName',
      mode: 'Mode',
      name: 'Name',
      phase: 'Phase',
      primaryUser: 'PrimaryUser',
      priority: 'Priority',
      publishState: 'PublishState',
      readme: 'Readme',
      readmeEn: 'ReadmeEn',
      routeConfigStartIndex: 'RouteConfigStartIndex',
      status: 'Status',
      summary: 'Summary',
      summaryEn: 'SummaryEn',
      type: 'Type',
      version: 'Version',
      versionJson: 'VersionJson',
      wasmLang: 'WasmLang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'number',
      configCheck: 'string',
      configExample: 'string',
      domainConfigStartIndex: 'number',
      gatewayConfigList: { 'type': 'array', 'itemType': GetPluginConfigResponseBodyDataGatewayConfigList },
      gatewayConfigStartIndex: 'number',
      id: 'number',
      imageName: 'string',
      mode: 'number',
      name: 'string',
      phase: 'number',
      primaryUser: 'string',
      priority: 'number',
      publishState: 'number',
      readme: 'string',
      readmeEn: 'string',
      routeConfigStartIndex: 'number',
      status: 'string',
      summary: 'string',
      summaryEn: 'string',
      type: 'number',
      version: 'string',
      versionJson: 'string',
      wasmLang: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.gatewayConfigList)) {
      $dara.Model.validateArray(this.gatewayConfigList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPluginConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetPluginConfigResponseBodyData;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * code
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * message
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 500
   */
  errorCode?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The API message.
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
   * 03A3E2F4-6804-5663-9D5D-2EC47A1*****
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
      code: 'Code',
      data: 'Data',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetPluginConfigResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
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

