// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class Attachment extends $tea.Model {
  attachResourceIds?: string[];
  attachResourceType?: string;
  environmentId?: string;
  gatewayId?: string;
  policyAttachmentId?: string;
  static names(): { [key: string]: string } {
    return {
      attachResourceIds: 'attachResourceIds',
      attachResourceType: 'attachResourceType',
      environmentId: 'environmentId',
      gatewayId: 'gatewayId',
      policyAttachmentId: 'policyAttachmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachResourceIds: { 'type': 'array', 'itemType': 'string' },
      attachResourceType: 'string',
      environmentId: 'string',
      gatewayId: 'string',
      policyAttachmentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceLinkedRoleResult extends $tea.Model {
  existed?: boolean;
  static names(): { [key: string]: string } {
    return {
      existed: 'existed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      existed: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DashboardFilter extends $tea.Model {
  /**
   * @example
   * test
   */
  routeName?: string;
  static names(): { [key: string]: string } {
    return {
      routeName: 'routeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DomainInfo extends $tea.Model {
  certIdentifier?: string;
  createFrom?: string;
  createTimestamp?: number;
  domainId?: string;
  forceHttps?: boolean;
  name?: string;
  protocol?: string;
  status?: string;
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'certIdentifier',
      createFrom: 'createFrom',
      createTimestamp: 'createTimestamp',
      domainId: 'domainId',
      forceHttps: 'forceHttps',
      name: 'name',
      protocol: 'protocol',
      status: 'status',
      updateTimestamp: 'updateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      createFrom: 'string',
      createTimestamp: 'number',
      domainId: 'string',
      forceHttps: 'boolean',
      name: 'string',
      protocol: 'string',
      status: 'string',
      updateTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnvironmentInfo extends $tea.Model {
  alias?: string;
  createTimestamp?: number;
  default?: boolean;
  description?: string;
  environmentId?: string;
  gatewayInfo?: GatewayInfo;
  name?: string;
  subDomainInfos?: SubDomainInfo[];
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      createTimestamp: 'createTimestamp',
      default: 'default',
      description: 'description',
      environmentId: 'environmentId',
      gatewayInfo: 'gatewayInfo',
      name: 'name',
      subDomainInfos: 'subDomainInfos',
      updateTimestamp: 'updateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      createTimestamp: 'number',
      default: 'boolean',
      description: 'string',
      environmentId: 'string',
      gatewayInfo: GatewayInfo,
      name: 'string',
      subDomainInfos: { 'type': 'array', 'itemType': SubDomainInfo },
      updateTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatewayInfo extends $tea.Model {
  gatewayId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatewayLogConfig extends $tea.Model {
  slsConfig?: GatewayLogConfigSlsConfig;
  static names(): { [key: string]: string } {
    return {
      slsConfig: 'slsConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slsConfig: GatewayLogConfigSlsConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatewayRouteBackend extends $tea.Model {
  services?: GatewayRouteBackendServices[];
  /**
   * @example
   * Single
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      services: 'services',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      services: { 'type': 'array', 'itemType': GatewayRouteBackendServices },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatewayRouteBackendConfig extends $tea.Model {
  services?: GatewayRouteBackendConfigServices[];
  /**
   * @example
   * Single
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      services: 'services',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      services: { 'type': 'array', 'itemType': GatewayRouteBackendConfigServices },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatewayRouteDomainConfig extends $tea.Model {
  domainIds?: string[];
  static names(): { [key: string]: string } {
    return {
      domainIds: 'domainIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatewayRouteDomainInfo extends $tea.Model {
  domains?: GatewayRouteDomainInfoDomains[];
  static names(): { [key: string]: string } {
    return {
      domains: 'domains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': GatewayRouteDomainInfoDomains },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatewayService extends $tea.Model {
  addresses?: string[];
  createTimestamp?: number;
  gatewayServiceId?: string;
  healthCheck?: ServiceHealthCheck;
  healthStatus?: string;
  name?: string;
  namespace?: string;
  ports?: GatewayServicePorts[];
  /**
   * @example
   * LATEST
   */
  qualifier?: string;
  sourceType?: string;
  unhealthyEndpoints?: string[];
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      addresses: 'addresses',
      createTimestamp: 'createTimestamp',
      gatewayServiceId: 'gatewayServiceId',
      healthCheck: 'healthCheck',
      healthStatus: 'healthStatus',
      name: 'name',
      namespace: 'namespace',
      ports: 'ports',
      qualifier: 'qualifier',
      sourceType: 'sourceType',
      unhealthyEndpoints: 'unhealthyEndpoints',
      updateTimestamp: 'updateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      createTimestamp: 'number',
      gatewayServiceId: 'string',
      healthCheck: ServiceHealthCheck,
      healthStatus: 'string',
      name: 'string',
      namespace: 'string',
      ports: { 'type': 'array', 'itemType': GatewayServicePorts },
      qualifier: 'string',
      sourceType: 'string',
      unhealthyEndpoints: { 'type': 'array', 'itemType': 'string' },
      updateTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatewayServiceSource extends $tea.Model {
  bound?: boolean;
  createTimestamp?: number;
  k8sServiceSourceInfo?: GatewayServiceSourceK8sServiceSourceInfo;
  nacosServiceSourceInfo?: GatewayServiceSourceNacosServiceSourceInfo;
  name?: string;
  serviceSourceId?: string;
  type?: string;
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      bound: 'bound',
      createTimestamp: 'createTimestamp',
      k8sServiceSourceInfo: 'k8sServiceSourceInfo',
      nacosServiceSourceInfo: 'nacosServiceSourceInfo',
      name: 'name',
      serviceSourceId: 'serviceSourceId',
      type: 'type',
      updateTimestamp: 'updateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bound: 'boolean',
      createTimestamp: 'number',
      k8sServiceSourceInfo: GatewayServiceSourceK8sServiceSourceInfo,
      nacosServiceSourceInfo: GatewayServiceSourceNacosServiceSourceInfo,
      name: 'string',
      serviceSourceId: 'string',
      type: 'string',
      updateTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiApiInfo extends $tea.Model {
  /**
   * @example
   * /v1
   */
  basePath?: string;
  description?: string;
  environments?: HttpApiApiInfoEnvironments[];
  /**
   * @example
   * api-xxx
   */
  httpApiId?: string;
  /**
   * @example
   * test
   */
  name?: string;
  protocols?: string[];
  versionInfo?: HttpApiVersionInfo;
  static names(): { [key: string]: string } {
    return {
      basePath: 'basePath',
      description: 'description',
      environments: 'environments',
      httpApiId: 'httpApiId',
      name: 'name',
      protocols: 'protocols',
      versionInfo: 'versionInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basePath: 'string',
      description: 'string',
      environments: { 'type': 'array', 'itemType': HttpApiApiInfoEnvironments },
      httpApiId: 'string',
      name: 'string',
      protocols: { 'type': 'array', 'itemType': 'string' },
      versionInfo: HttpApiVersionInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiBackendMatchCondition extends $tea.Model {
  /**
   * @example
   * color
   */
  key?: string;
  /**
   * @example
   * equal
   */
  operator?: string;
  /**
   * @example
   * Query
   */
  type?: string;
  /**
   * @example
   * gray
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      operator: 'operator',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiBackendMatchConditions extends $tea.Model {
  conditions?: HttpApiBackendMatchCondition[];
  /**
   * @example
   * true
   */
  default?: boolean;
  static names(): { [key: string]: string } {
    return {
      conditions: 'conditions',
      default: 'default',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': HttpApiBackendMatchCondition },
      default: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiDomainInfo extends $tea.Model {
  /**
   * @example
   * d-xxx
   */
  domainId?: string;
  /**
   * @example
   * www.example.com
   */
  name?: string;
  /**
   * @example
   * HTTP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domainId',
      name: 'name',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      name: 'string',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiInfoByName extends $tea.Model {
  /**
   * @example
   * test-api
   */
  name?: string;
  /**
   * @example
   * true
   */
  versionEnabled?: boolean;
  versionedHttpApis?: HttpApiApiInfo[];
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      versionEnabled: 'versionEnabled',
      versionedHttpApis: 'versionedHttpApis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      versionEnabled: 'boolean',
      versionedHttpApis: { 'type': 'array', 'itemType': HttpApiApiInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiMockContract extends $tea.Model {
  /**
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @example
   * 200
   */
  responseCode?: number;
  responseContent?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      responseCode: 'responseCode',
      responseContent: 'responseContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      responseCode: 'number',
      responseContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiOperation extends $tea.Model {
  /**
   * @example
   * 获取用户信息
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * GET
   */
  method?: string;
  mock?: HttpApiMockContract;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * GetUserInfo
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /user
   */
  path?: string;
  request?: HttpApiRequestContract;
  response?: HttpApiResponseContract;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      method: 'method',
      mock: 'mock',
      name: 'name',
      path: 'path',
      request: 'request',
      response: 'response',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      method: 'string',
      mock: HttpApiMockContract,
      name: 'string',
      path: 'string',
      request: HttpApiRequestContract,
      response: HttpApiResponseContract,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiOperationInfo extends $tea.Model {
  /**
   * @example
   * 1719386834548
   */
  createTimestamp?: number;
  /**
   * @example
   * 获取用户信息
   */
  description?: string;
  /**
   * @example
   * GET
   */
  method?: string;
  mock?: HttpApiMockContract;
  /**
   * @example
   * GetUserInfo
   */
  name?: string;
  /**
   * @example
   * op-xxx
   */
  operationId?: string;
  /**
   * @example
   * /user/123
   */
  path?: string;
  request?: HttpApiRequestContract;
  response?: HttpApiResponseContract;
  static names(): { [key: string]: string } {
    return {
      createTimestamp: 'createTimestamp',
      description: 'description',
      method: 'method',
      mock: 'mock',
      name: 'name',
      operationId: 'operationId',
      path: 'path',
      request: 'request',
      response: 'response',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimestamp: 'number',
      description: 'string',
      method: 'string',
      mock: HttpApiMockContract,
      name: 'string',
      operationId: 'string',
      path: 'string',
      request: HttpApiRequestContract,
      response: HttpApiResponseContract,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiParameter extends $tea.Model {
  defaultValue?: string;
  description?: string;
  exampleValue?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @example
   * false
   */
  required?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'defaultValue',
      description: 'description',
      exampleValue: 'exampleValue',
      name: 'name',
      required: 'required',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      description: 'string',
      exampleValue: 'string',
      name: 'string',
      required: 'boolean',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPublishRevisionInfo extends $tea.Model {
  /**
   * @example
   * SingleService
   */
  backendScene?: string;
  /**
   * @example
   * Service
   */
  backendType?: string;
  cloudProductConfig?: HttpApiPublishRevisionInfoCloudProductConfig;
  /**
   * @example
   * 1718807057927
   */
  createTimestamp?: number;
  customDomains?: HttpApiDomainInfo[];
  dnsConfigs?: HttpApiPublishRevisionInfoDnsConfigs[];
  /**
   * @example
   * env-xxx
   */
  environmentInfo?: HttpApiPublishRevisionInfoEnvironmentInfo;
  /**
   * @example
   * true
   */
  isCurrentVersion?: boolean;
  operations?: HttpApiOperationInfo[];
  /**
   * @example
   * apr-xxx
   */
  revisionId?: string;
  serviceConfigs?: HttpApiPublishRevisionInfoServiceConfigs[];
  /**
   * @example
   * env-xxx.com
   */
  subDomains?: HttpApiDomainInfo[];
  vipConfigs?: HttpApiPublishRevisionInfoVipConfigs[];
  static names(): { [key: string]: string } {
    return {
      backendScene: 'backendScene',
      backendType: 'backendType',
      cloudProductConfig: 'cloudProductConfig',
      createTimestamp: 'createTimestamp',
      customDomains: 'customDomains',
      dnsConfigs: 'dnsConfigs',
      environmentInfo: 'environmentInfo',
      isCurrentVersion: 'isCurrentVersion',
      operations: 'operations',
      revisionId: 'revisionId',
      serviceConfigs: 'serviceConfigs',
      subDomains: 'subDomains',
      vipConfigs: 'vipConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendScene: 'string',
      backendType: 'string',
      cloudProductConfig: HttpApiPublishRevisionInfoCloudProductConfig,
      createTimestamp: 'number',
      customDomains: { 'type': 'array', 'itemType': HttpApiDomainInfo },
      dnsConfigs: { 'type': 'array', 'itemType': HttpApiPublishRevisionInfoDnsConfigs },
      environmentInfo: HttpApiPublishRevisionInfoEnvironmentInfo,
      isCurrentVersion: 'boolean',
      operations: { 'type': 'array', 'itemType': HttpApiOperationInfo },
      revisionId: 'string',
      serviceConfigs: { 'type': 'array', 'itemType': HttpApiPublishRevisionInfoServiceConfigs },
      subDomains: { 'type': 'array', 'itemType': HttpApiDomainInfo },
      vipConfigs: { 'type': 'array', 'itemType': HttpApiPublishRevisionInfoVipConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiRequestContract extends $tea.Model {
  body?: HttpApiRequestContractBody;
  headerParameters?: HttpApiParameter[];
  pathParameters?: HttpApiParameter[];
  queryParameters?: HttpApiParameter[];
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      headerParameters: 'headerParameters',
      pathParameters: 'pathParameters',
      queryParameters: 'queryParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: HttpApiRequestContractBody,
      headerParameters: { 'type': 'array', 'itemType': HttpApiParameter },
      pathParameters: { 'type': 'array', 'itemType': HttpApiParameter },
      queryParameters: { 'type': 'array', 'itemType': HttpApiParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiResponseContract extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * application/json
   */
  contentType?: string;
  items?: HttpApiResponseContractItems[];
  static names(): { [key: string]: string } {
    return {
      contentType: 'contentType',
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      items: { 'type': 'array', 'itemType': HttpApiResponseContractItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiVersionConfig extends $tea.Model {
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * my-version
   */
  headerName?: string;
  /**
   * @example
   * myVersion
   */
  queryName?: string;
  /**
   * @example
   * Query
   */
  scheme?: string;
  /**
   * @example
   * v1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      headerName: 'headerName',
      queryName: 'queryName',
      scheme: 'scheme',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      headerName: 'string',
      queryName: 'string',
      scheme: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiVersionInfo extends $tea.Model {
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * my-version
   */
  headerName?: string;
  /**
   * @example
   * myVersion
   */
  queryName?: string;
  /**
   * @example
   * Query
   */
  scheme?: string;
  /**
   * @example
   * v1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      headerName: 'headerName',
      queryName: 'queryName',
      scheme: 'scheme',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      headerName: 'string',
      queryName: 'string',
      scheme: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpDubboTranscoder extends $tea.Model {
  dubboServiceGroup?: string;
  dubboServiceName?: string;
  dubboServiceVersion?: string;
  mothedMapList?: HttpDubboTranscoderMothedMapList[];
  static names(): { [key: string]: string } {
    return {
      dubboServiceGroup: 'dubboServiceGroup',
      dubboServiceName: 'dubboServiceName',
      dubboServiceVersion: 'dubboServiceVersion',
      mothedMapList: 'mothedMapList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dubboServiceGroup: 'string',
      dubboServiceName: 'string',
      dubboServiceVersion: 'string',
      mothedMapList: { 'type': 'array', 'itemType': HttpDubboTranscoderMothedMapList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpRouteMatch extends $tea.Model {
  headers?: HttpRouteMatchHeaders[];
  /**
   * @example
   * true
   */
  ignoreUriCase?: boolean;
  methods?: string[];
  path?: HttpRouteMatchPath;
  queryParams?: HttpRouteMatchQueryParams[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      ignoreUriCase: 'ignoreUriCase',
      methods: 'methods',
      path: 'path',
      queryParams: 'queryParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'array', 'itemType': HttpRouteMatchHeaders },
      ignoreUriCase: 'boolean',
      methods: { 'type': 'array', 'itemType': 'string' },
      path: HttpRouteMatchPath,
      queryParams: { 'type': 'array', 'itemType': HttpRouteMatchQueryParams },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PolicyClassInfo extends $tea.Model {
  alias?: string;
  attachableResourceTypes?: string[];
  classId?: string;
  configExample?: string;
  deprecated?: boolean;
  description?: string;
  direction?: string;
  enableLog?: boolean;
  executePriority?: string;
  executeStage?: string;
  name?: string;
  type?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      attachableResourceTypes: 'attachableResourceTypes',
      classId: 'classId',
      configExample: 'configExample',
      deprecated: 'deprecated',
      description: 'description',
      direction: 'direction',
      enableLog: 'enableLog',
      executePriority: 'executePriority',
      executeStage: 'executeStage',
      name: 'name',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      attachableResourceTypes: { 'type': 'array', 'itemType': 'string' },
      classId: 'string',
      configExample: 'string',
      deprecated: 'boolean',
      description: 'string',
      direction: 'string',
      enableLog: 'boolean',
      executePriority: 'string',
      executeStage: 'string',
      name: 'string',
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PolicyDetailInfo extends $tea.Model {
  classId?: string;
  className?: string;
  config?: string;
  description?: string;
  name?: string;
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      classId: 'classId',
      className: 'className',
      config: 'config',
      description: 'description',
      name: 'name',
      policyId: 'policyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classId: 'string',
      className: 'string',
      config: 'string',
      description: 'string',
      name: 'string',
      policyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PolicyInfo extends $tea.Model {
  attachments?: Attachment[];
  classAlias?: string;
  className?: string;
  config?: string;
  direction?: string;
  executePriority?: string;
  executeStage?: string;
  name?: string;
  policyId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attachments: 'attachments',
      classAlias: 'classAlias',
      className: 'className',
      config: 'config',
      direction: 'direction',
      executePriority: 'executePriority',
      executeStage: 'executeStage',
      name: 'name',
      policyId: 'policyId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachments: { 'type': 'array', 'itemType': Attachment },
      classAlias: 'string',
      className: 'string',
      config: 'string',
      direction: 'string',
      executePriority: 'string',
      executeStage: 'string',
      name: 'string',
      policyId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceStatistic extends $tea.Model {
  resourceCount?: number;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceCount: 'resourceCount',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCount: 'number',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ServiceHealthCheck extends $tea.Model {
  /**
   * @example
   * true
   */
  enable?: boolean;
  healthyThreshold?: number;
  httpHost?: string;
  httpPath?: string;
  interval?: number;
  /**
   * @example
   * TCP
   */
  protocol?: string;
  timeout?: number;
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      healthyThreshold: 'healthyThreshold',
      httpHost: 'httpHost',
      httpPath: 'httpPath',
      interval: 'interval',
      protocol: 'protocol',
      timeout: 'timeout',
      unhealthyThreshold: 'unhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      healthyThreshold: 'number',
      httpHost: 'string',
      httpPath: 'string',
      interval: 'number',
      protocol: 'string',
      timeout: 'number',
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ServiceLinkedRole extends $tea.Model {
  arn?: string;
  assumeRolePolicyDocument?: string;
  createDate?: string;
  description?: string;
  isServiceLinkedRole?: boolean;
  roleId?: string;
  roleName?: string;
  rolePrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'arn',
      assumeRolePolicyDocument: 'assumeRolePolicyDocument',
      createDate: 'createDate',
      description: 'description',
      isServiceLinkedRole: 'isServiceLinkedRole',
      roleId: 'roleId',
      roleName: 'roleName',
      rolePrincipalName: 'rolePrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      assumeRolePolicyDocument: 'string',
      createDate: 'string',
      description: 'string',
      isServiceLinkedRole: 'boolean',
      roleId: 'string',
      roleName: 'string',
      rolePrincipalName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SslCertMetaInfo extends $tea.Model {
  algorithm?: string;
  certId?: number;
  certIdentifier?: string;
  certName?: string;
  commonName?: string;
  domain?: string;
  domainMatchCert?: boolean;
  fingerprint?: string;
  instanceId?: string;
  isChainCompleted?: boolean;
  issuer?: string;
  keySize?: string;
  md5?: string;
  notAfterTimestamp?: number;
  notBeforeTimestamp?: number;
  sans?: string;
  serialNo?: string;
  sha2?: string;
  signAlgorithm?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'algorithm',
      certId: 'certId',
      certIdentifier: 'certIdentifier',
      certName: 'certName',
      commonName: 'commonName',
      domain: 'domain',
      domainMatchCert: 'domainMatchCert',
      fingerprint: 'fingerprint',
      instanceId: 'instanceId',
      isChainCompleted: 'isChainCompleted',
      issuer: 'issuer',
      keySize: 'keySize',
      md5: 'md5',
      notAfterTimestamp: 'notAfterTimestamp',
      notBeforeTimestamp: 'notBeforeTimestamp',
      sans: 'sans',
      serialNo: 'serialNo',
      sha2: 'sha2',
      signAlgorithm: 'signAlgorithm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      certId: 'number',
      certIdentifier: 'string',
      certName: 'string',
      commonName: 'string',
      domain: 'string',
      domainMatchCert: 'boolean',
      fingerprint: 'string',
      instanceId: 'string',
      isChainCompleted: 'boolean',
      issuer: 'string',
      keySize: 'string',
      md5: 'string',
      notAfterTimestamp: 'number',
      notBeforeTimestamp: 'number',
      sans: 'string',
      serialNo: 'string',
      sha2: 'string',
      signAlgorithm: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubDomainInfo extends $tea.Model {
  domainId?: string;
  name?: string;
  networkType?: string;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domainId',
      name: 'name',
      networkType: 'networkType',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      name: 'string',
      networkType: 'string',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewaySecurityGroupRuleRequest extends $tea.Model {
  description?: string;
  portRanges?: string[];
  /**
   * @example
   * sg-wz929kxhcdp****
   */
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      portRanges: 'portRanges',
      securityGroupId: 'securityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      portRanges: { 'type': 'array', 'itemType': 'string' },
      securityGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewaySecurityGroupRuleResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 2A6E90D5-A711-54F4-A489-E33C2021EDDF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewaySecurityGroupRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddGatewaySecurityGroupRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddGatewaySecurityGroupRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainRequest extends $tea.Model {
  /**
   * @example
   * 194445-cn-hangzhou
   */
  caCertIndentifier?: string;
  /**
   * @example
   * 194445-cn-hangzhou
   */
  certIndentifier?: string;
  /**
   * @example
   * false
   */
  forceHttps?: boolean;
  /**
   * @example
   * Open
   */
  http2Option?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abc.com
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @example
   * TLS1.3
   */
  tlsMax?: string;
  /**
   * @example
   * TLS1.0
   */
  tlsMin?: string;
  static names(): { [key: string]: string } {
    return {
      caCertIndentifier: 'caCertIndentifier',
      certIndentifier: 'certIndentifier',
      forceHttps: 'forceHttps',
      http2Option: 'http2Option',
      name: 'name',
      protocol: 'protocol',
      tlsMax: 'tlsMax',
      tlsMin: 'tlsMin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCertIndentifier: 'string',
      certIndentifier: 'string',
      forceHttps: 'boolean',
      http2Option: 'string',
      name: 'string',
      protocol: 'string',
      tlsMax: 'string',
      tlsMin: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: CreateDomainResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0C2D1C68-0D93-5561-8EE6-FDB7BF067A30
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateDomainResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnvironmentRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  alias?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * gw-cq7l5s5lhtgi6qasrdc0
   */
  gatewayId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      description: 'description',
      gatewayId: 'gatewayId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      description: 'string',
      gatewayId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnvironmentResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: CreateEnvironmentResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 3C3B9A12-3868-5EB9-8BEA-F99E03DD125C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateEnvironmentResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnvironmentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateEnvironmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateEnvironmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayRouteRequest extends $tea.Model {
  backendConfig?: GatewayRouteBackendConfig;
  description?: string;
  domainConfig?: GatewayRouteDomainConfig;
  match?: HttpRouteMatch;
  /**
   * @example
   * itemcenter-route
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      backendConfig: 'backendConfig',
      description: 'description',
      domainConfig: 'domainConfig',
      match: 'match',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendConfig: GatewayRouteBackendConfig,
      description: 'string',
      domainConfig: GatewayRouteDomainConfig,
      match: HttpRouteMatch,
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayRouteResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: CreateGatewayRouteResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0F138FFC-6E2B-56C1-9BAB-A67462E339D1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateGatewayRouteResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayRouteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateGatewayRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateGatewayRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayServiceRequest extends $tea.Model {
  gatewayServiceConfigs?: CreateGatewayServiceRequestGatewayServiceConfigs[];
  /**
   * @example
   * MSE_NACOS
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayServiceConfigs: 'gatewayServiceConfigs',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayServiceConfigs: { 'type': 'array', 'itemType': CreateGatewayServiceRequestGatewayServiceConfigs },
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayServiceResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: CreateGatewayServiceResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 9BA5586D-0EAE-5F78-B704-1A8DBADE46DA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateGatewayServiceResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateGatewayServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateGatewayServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayServiceVersionRequest extends $tea.Model {
  labels?: CreateGatewayServiceVersionRequestLabels[];
  /**
   * @example
   * v1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      labels: 'labels',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': CreateGatewayServiceVersionRequestLabels },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayServiceVersionResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayServiceVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateGatewayServiceVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateGatewayServiceVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHttpApiRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /v1
   */
  basePath?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  protocols?: string[];
  versionConfig?: HttpApiVersionConfig;
  static names(): { [key: string]: string } {
    return {
      basePath: 'basePath',
      description: 'description',
      name: 'name',
      protocols: 'protocols',
      versionConfig: 'versionConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basePath: 'string',
      description: 'string',
      name: 'string',
      protocols: { 'type': 'array', 'itemType': 'string' },
      versionConfig: HttpApiVersionConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHttpApiResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: CreateHttpApiResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * A1994B10-C6A8-58FA-8347-6A08B0D4EFDE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateHttpApiResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHttpApiResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateHttpApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateHttpApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHttpApiOperationRequest extends $tea.Model {
  operations?: HttpApiOperation[];
  static names(): { [key: string]: string } {
    return {
      operations: 'operations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operations: { 'type': 'array', 'itemType': HttpApiOperation },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHttpApiOperationResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: CreateHttpApiOperationResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateHttpApiOperationResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHttpApiOperationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateHttpApiOperationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateHttpApiOperationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceSourceRequest extends $tea.Model {
  k8sServiceSourceConfig?: CreateServiceSourceRequestK8sServiceSourceConfig;
  nacosServiceSourceConfig?: CreateServiceSourceRequestNacosServiceSourceConfig;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      k8sServiceSourceConfig: 'k8sServiceSourceConfig',
      nacosServiceSourceConfig: 'nacosServiceSourceConfig',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      k8sServiceSourceConfig: CreateServiceSourceRequestK8sServiceSourceConfig,
      nacosServiceSourceConfig: CreateServiceSourceRequestNacosServiceSourceConfig,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceSourceResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: CreateServiceSourceResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * C67DED2B-F19B-5BEC-88C1-D6EB854CD0D4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateServiceSourceResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateServiceSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * A60EE5CA-1294-532A-9775-8D2FD1C6EFBF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnvironmentResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * C61E30D3-579A-5B43-994E-31E02EDC9129
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnvironmentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteEnvironmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteEnvironmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * DE97DFDB-7DF0-5AB9-941C-10D27D769E4B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayRouteResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 5B626361-070A-56A7-B127-ADAC8F3655DB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayRouteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGatewayRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteGatewayRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayServiceResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGatewayServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteGatewayServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayServiceVersionResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayServiceVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGatewayServiceVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteGatewayServiceVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHttpApiResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 5B626361-070A-56A7-B127-ADAC8F3655DB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHttpApiResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteHttpApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteHttpApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHttpApiOperationResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 585657D2-1C20-5B8A-AF17-D727C6490BE4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHttpApiOperationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteHttpApiOperationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteHttpApiOperationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceSourceResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteServiceSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteServiceSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: GetDomainResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 3ACFC7A7-45A9-58CF-B2D5-765B60254695
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDomainResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: GetEnvironmentResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 3F8EE674-BB08-5E92-BE6F-E4756A748B0F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetEnvironmentResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEnvironmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetEnvironmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: GetGatewayResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0F138FFC-6E2B-56C1-9BAB-A67462E339D1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetGatewayResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayRouteResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: GetGatewayRouteResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * A1994B10-C6A8-58FA-8347-6A08B0D4EFDE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetGatewayRouteResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayRouteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetGatewayRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetGatewayRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayServiceResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: GatewayService;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GatewayService,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetGatewayServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetGatewayServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHttpApiResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: HttpApiApiInfo;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 8FA9BB94-915B-5299-A694-49FCC7F5DD00
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: HttpApiApiInfo,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHttpApiResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHttpApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHttpApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHttpApiOperationResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: HttpApiOperationInfo;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * B725275B-50C6-5A49-A9FD-F0332FCB3351
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: HttpApiOperationInfo,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHttpApiOperationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHttpApiOperationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHttpApiOperationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsRequest extends $tea.Model {
  /**
   * @example
   * test
   */
  nameLike?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      nameLike: 'nameLike',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameLike: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: ListDomainsResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * C61E30D3-579A-5B43-994E-31E02EDC9129
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListDomainsResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentsRequest extends $tea.Model {
  aliasLike?: string;
  /**
   * @example
   * gw-cptv6ktlhtgnqr73h8d1
   */
  gatewayId?: string;
  /**
   * @example
   * test-gw
   */
  gatewayNameLike?: string;
  /**
   * @example
   * test
   */
  nameLike?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      aliasLike: 'aliasLike',
      gatewayId: 'gatewayId',
      gatewayNameLike: 'gatewayNameLike',
      nameLike: 'nameLike',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasLike: 'string',
      gatewayId: 'string',
      gatewayNameLike: 'string',
      nameLike: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentsResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: ListEnvironmentsResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * CE857A85-251D-5018-8103-A38957D71E20
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListEnvironmentsResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEnvironmentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListEnvironmentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRoutesRequest extends $tea.Model {
  /**
   * @example
   * itemcenter
   */
  keyword?: string;
  /**
   * @example
   * pre-itemcenter-router
   */
  name?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * /user
   */
  path?: string;
  /**
   * @example
   * Published
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      name: 'name',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      path: 'path',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      path: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRoutesResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: ListGatewayRoutesResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 585657D2-1C20-5B8A-AF17-D727C6490BE4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListGatewayRoutesResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRoutesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGatewayRoutesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGatewayRoutesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayServicesRequest extends $tea.Model {
  /**
   * @example
   * itemcenter-provider
   */
  name?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * MSE_NACOS
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayServicesResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: ListGatewayServicesResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 8FA9BB94-915B-5299-A694-49FCC7F5DD00
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListGatewayServicesResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayServicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGatewayServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGatewayServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaysRequest extends $tea.Model {
  /**
   * @example
   * gw-cpv4sqdl****
   */
  gatewayId?: string;
  /**
   * @example
   * dev
   */
  keyword?: string;
  /**
   * @example
   * itemcenter-gateway
   */
  name?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      keyword: 'keyword',
      name: 'name',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      keyword: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaysResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: ListGatewaysResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 5B626361-070A-56A7-B127-ADAC8F3655DB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListGatewaysResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaysResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGatewaysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGatewaysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHttpApiOperationsRequest extends $tea.Model {
  /**
   * @example
   * GET
   */
  method?: string;
  /**
   * @example
   * GetUser
   */
  nameLike?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * /v1
   */
  pathLike?: string;
  static names(): { [key: string]: string } {
    return {
      method: 'method',
      nameLike: 'nameLike',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      pathLike: 'pathLike',
    };
  }

  static types(): { [key: string]: any } {
    return {
      method: 'string',
      nameLike: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pathLike: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHttpApiOperationsResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: ListHttpApiOperationsResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 585657D2-1C20-5B8A-AF17-D727C6490BE4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListHttpApiOperationsResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHttpApiOperationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHttpApiOperationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListHttpApiOperationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHttpApisRequest extends $tea.Model {
  /**
   * @example
   * test-
   */
  keyword?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  publishedOnly?: boolean;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      publishedOnly: 'publishedOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      publishedOnly: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHttpApisResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: ListHttpApisResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 585657D2-1C20-5B8A-AF17-D727C6490BE4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListHttpApisResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHttpApisResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHttpApisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListHttpApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineGatewayRouteResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 585657D2-1C20-5B8A-AF17-D727C6490BE4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineGatewayRouteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OfflineGatewayRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OfflineGatewayRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineHttpApiRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * env-xxx
   */
  environmentId?: string;
  static names(): { [key: string]: string } {
    return {
      environmentId: 'environmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineHttpApiResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 53DE779E-422D-56EB-B84C-62D75CA5E8DD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineHttpApiResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OfflineHttpApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OfflineHttpApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishGatewayRouteResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 043360DA-ED3B-5386-9B7A-D94DECF99A30
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishGatewayRouteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PublishGatewayRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PublishGatewayRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishHttpApiRequest extends $tea.Model {
  /**
   * @example
   * true
   */
  allowOverwrite?: boolean;
  description?: string;
  environment?: PublishHttpApiRequestEnvironment;
  /**
   * @example
   * apr-xxx
   */
  revisionId?: string;
  static names(): { [key: string]: string } {
    return {
      allowOverwrite: 'allowOverwrite',
      description: 'description',
      environment: 'environment',
      revisionId: 'revisionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowOverwrite: 'boolean',
      description: 'string',
      environment: PublishHttpApiRequestEnvironment,
      revisionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishHttpApiResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 4BACB05C-3FE2-588F-9148-700C5C026B74
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishHttpApiResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PublishHttpApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PublishHttpApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainRequest extends $tea.Model {
  /**
   * @example
   * 123455-cn-hangzhou
   */
  caCertIndentifier?: string;
  /**
   * @example
   * 123458-cn-hangzhou
   */
  certIndentifier?: string;
  /**
   * @example
   * false
   */
  forceHttps?: boolean;
  /**
   * @example
   * Open
   */
  http2Option?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @example
   * TLS 1.3
   */
  tlsMax?: string;
  /**
   * @example
   * TLS 1.0
   */
  tlsMin?: string;
  static names(): { [key: string]: string } {
    return {
      caCertIndentifier: 'caCertIndentifier',
      certIndentifier: 'certIndentifier',
      forceHttps: 'forceHttps',
      http2Option: 'http2Option',
      protocol: 'protocol',
      tlsMax: 'tlsMax',
      tlsMin: 'tlsMin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCertIndentifier: 'string',
      certIndentifier: 'string',
      forceHttps: 'boolean',
      http2Option: 'string',
      protocol: 'string',
      tlsMax: 'string',
      tlsMin: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 4BACB05C-3FE2-588F-9148-700C5C026B74
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnvironmentRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  alias?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnvironmentResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 52FB803B-3CD8-5FF8-AAE9-C2B841F6A483
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnvironmentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateEnvironmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateEnvironmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteRequest extends $tea.Model {
  backendConfig?: GatewayRouteBackendConfig;
  description?: string;
  domainConfig?: GatewayRouteDomainConfig;
  match?: HttpRouteMatch;
  static names(): { [key: string]: string } {
    return {
      backendConfig: 'backendConfig',
      description: 'description',
      domainConfig: 'domainConfig',
      match: 'match',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendConfig: GatewayRouteBackendConfig,
      description: 'string',
      domainConfig: GatewayRouteDomainConfig,
      match: HttpRouteMatch,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * B725275B-50C6-5A49-A9FD-F0332FCB3351
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateGatewayRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateGatewayRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayServiceRequest extends $tea.Model {
  addresses?: string[];
  /**
   * @example
   * 8080
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      addresses: 'addresses',
      port: 'port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayServiceResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 585657D2-1C20-5B8A-AF17-D727C6490BE4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateGatewayServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateGatewayServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayServiceVersionRequest extends $tea.Model {
  labels?: UpdateGatewayServiceVersionRequestLabels[];
  static names(): { [key: string]: string } {
    return {
      labels: 'labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': UpdateGatewayServiceVersionRequestLabels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayServiceVersionResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * A1994B10-C6A8-58FA-8347-6A08B0D4EFDE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayServiceVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateGatewayServiceVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateGatewayServiceVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHttpApiRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /v1
   */
  basePath?: string;
  description?: string;
  protocols?: string[];
  versionConfig?: HttpApiVersionConfig;
  static names(): { [key: string]: string } {
    return {
      basePath: 'basePath',
      description: 'description',
      protocols: 'protocols',
      versionConfig: 'versionConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basePath: 'string',
      description: 'string',
      protocols: { 'type': 'array', 'itemType': 'string' },
      versionConfig: HttpApiVersionConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHttpApiResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHttpApiResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateHttpApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateHttpApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHttpApiOperationRequest extends $tea.Model {
  operation?: HttpApiOperation;
  static names(): { [key: string]: string } {
    return {
      operation: 'operation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operation: HttpApiOperation,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHttpApiOperationResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 043360DA-ED3B-5386-9B7A-D94DECF99A30
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHttpApiOperationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateHttpApiOperationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateHttpApiOperationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceSourceRequest extends $tea.Model {
  k8sServiceSourceConfig?: UpdateServiceSourceRequestK8sServiceSourceConfig;
  static names(): { [key: string]: string } {
    return {
      k8sServiceSourceConfig: 'k8sServiceSourceConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      k8sServiceSourceConfig: UpdateServiceSourceRequestK8sServiceSourceConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceSourceResponseBody extends $tea.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateServiceSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatewayLogConfigSlsConfig extends $tea.Model {
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatewayRouteBackendServices extends $tea.Model {
  /**
   * @example
   * gs-cq2bmmdlhtgj***
   */
  gatewayServiceId?: string;
  /**
   * @example
   * item-service
   */
  name?: string;
  /**
   * @example
   * port
   */
  port?: number;
  /**
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @example
   * v1
   */
  version?: string;
  /**
   * @example
   * 49
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      gatewayServiceId: 'gatewayServiceId',
      name: 'name',
      port: 'port',
      protocol: 'protocol',
      version: 'version',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayServiceId: 'string',
      name: 'string',
      port: 'number',
      protocol: 'string',
      version: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatewayRouteBackendConfigServices extends $tea.Model {
  /**
   * @example
   * gs-cq2bmmdlhtgj***
   */
  gatewayServiceId?: string;
  /**
   * @example
   * port
   */
  port?: number;
  /**
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @example
   * K8S
   */
  sourceType?: string;
  /**
   * @example
   * 49
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      gatewayServiceId: 'gatewayServiceId',
      port: 'port',
      protocol: 'protocol',
      sourceType: 'sourceType',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayServiceId: 'string',
      port: 'number',
      protocol: 'string',
      sourceType: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatewayRouteDomainInfoDomains extends $tea.Model {
  /**
   * @example
   * d-cp82or5l***
   */
  domainId?: string;
  /**
   * @example
   * item.dev
   */
  name?: string;
  /**
   * @example
   * HTTP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domainId',
      name: 'name',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      name: 'string',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatewayServicePorts extends $tea.Model {
  name?: string;
  port?: number;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      port: 'port',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      port: 'number',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatewayServiceSourceK8sServiceSourceInfoIngressConfig extends $tea.Model {
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * mse
   */
  ingressClass?: string;
  /**
   * @example
   * false
   */
  overrideIngressIp?: boolean;
  /**
   * @example
   * default
   */
  watchNamespace?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      ingressClass: 'ingressClass',
      overrideIngressIp: 'overrideIngressIp',
      watchNamespace: 'watchNamespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      ingressClass: 'string',
      overrideIngressIp: 'boolean',
      watchNamespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatewayServiceSourceK8sServiceSourceInfo extends $tea.Model {
  clusterId?: string;
  ingressConfig?: GatewayServiceSourceK8sServiceSourceInfoIngressConfig;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'clusterId',
      ingressConfig: 'ingressConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      ingressConfig: GatewayServiceSourceK8sServiceSourceInfoIngressConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatewayServiceSourceNacosServiceSourceInfo extends $tea.Model {
  address?: string;
  clusterId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      clusterId: 'clusterId',
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      clusterId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiApiInfoEnvironmentsCloudProductConfigContainerServiceConfigs extends $tea.Model {
  /**
   * @example
   * gs-xxx
   */
  gatewayServiceId?: string;
  match?: HttpApiBackendMatchConditions;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * default
   */
  namespace?: string;
  /**
   * @example
   * 8080
   */
  port?: number;
  /**
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      gatewayServiceId: 'gatewayServiceId',
      match: 'match',
      name: 'name',
      namespace: 'namespace',
      port: 'port',
      protocol: 'protocol',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayServiceId: 'string',
      match: HttpApiBackendMatchConditions,
      name: 'string',
      namespace: 'string',
      port: 'number',
      protocol: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiApiInfoEnvironmentsCloudProductConfigFunctionConfigs extends $tea.Model {
  /**
   * @example
   * gs-xxx
   */
  gatewayServiceId?: string;
  match?: HttpApiBackendMatchConditions;
  /**
   * @example
   * test-function
   */
  name?: string;
  /**
   * @example
   * LATEST
   */
  qualifier?: string;
  /**
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      gatewayServiceId: 'gatewayServiceId',
      match: 'match',
      name: 'name',
      qualifier: 'qualifier',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayServiceId: 'string',
      match: HttpApiBackendMatchConditions,
      name: 'string',
      qualifier: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiApiInfoEnvironmentsCloudProductConfigMseNacosConfigs extends $tea.Model {
  /**
   * @example
   * gs-xxx
   */
  gatewayServiceId?: string;
  /**
   * @example
   * DEFAULT_GROUP
   */
  groupName?: string;
  match?: HttpApiBackendMatchConditions;
  /**
   * @example
   * springboot-test
   */
  name?: string;
  /**
   * @example
   * public
   */
  namespace?: string;
  /**
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      gatewayServiceId: 'gatewayServiceId',
      groupName: 'groupName',
      match: 'match',
      name: 'name',
      namespace: 'namespace',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayServiceId: 'string',
      groupName: 'string',
      match: HttpApiBackendMatchConditions,
      name: 'string',
      namespace: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiApiInfoEnvironmentsCloudProductConfig extends $tea.Model {
  /**
   * @example
   * CS
   */
  cloudProductType?: string;
  containerServiceConfigs?: HttpApiApiInfoEnvironmentsCloudProductConfigContainerServiceConfigs[];
  functionConfigs?: HttpApiApiInfoEnvironmentsCloudProductConfigFunctionConfigs[];
  mseNacosConfigs?: HttpApiApiInfoEnvironmentsCloudProductConfigMseNacosConfigs[];
  static names(): { [key: string]: string } {
    return {
      cloudProductType: 'cloudProductType',
      containerServiceConfigs: 'containerServiceConfigs',
      functionConfigs: 'functionConfigs',
      mseNacosConfigs: 'mseNacosConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudProductType: 'string',
      containerServiceConfigs: { 'type': 'array', 'itemType': HttpApiApiInfoEnvironmentsCloudProductConfigContainerServiceConfigs },
      functionConfigs: { 'type': 'array', 'itemType': HttpApiApiInfoEnvironmentsCloudProductConfigFunctionConfigs },
      mseNacosConfigs: { 'type': 'array', 'itemType': HttpApiApiInfoEnvironmentsCloudProductConfigMseNacosConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiApiInfoEnvironmentsDnsConfigs extends $tea.Model {
  dnsList?: string[];
  match?: HttpApiBackendMatchConditions;
  /**
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      dnsList: 'dnsList',
      match: 'match',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsList: { 'type': 'array', 'itemType': 'string' },
      match: HttpApiBackendMatchConditions,
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiApiInfoEnvironmentsServiceConfigs extends $tea.Model {
  /**
   * @example
   * gs-xxx
   */
  gatewayServiceId?: string;
  match?: HttpApiBackendMatchConditions;
  /**
   * @example
   * demo-service
   */
  name?: string;
  /**
   * @example
   * 8080
   */
  port?: string;
  /**
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @example
   * v1
   */
  version?: string;
  /**
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      gatewayServiceId: 'gatewayServiceId',
      match: 'match',
      name: 'name',
      port: 'port',
      protocol: 'protocol',
      version: 'version',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayServiceId: 'string',
      match: HttpApiBackendMatchConditions,
      name: 'string',
      port: 'string',
      protocol: 'string',
      version: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiApiInfoEnvironmentsVipConfigs extends $tea.Model {
  endpoints?: string[];
  match?: HttpApiBackendMatchConditions;
  /**
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      endpoints: 'endpoints',
      match: 'match',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoints: { 'type': 'array', 'itemType': 'string' },
      match: HttpApiBackendMatchConditions,
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiApiInfoEnvironments extends $tea.Model {
  /**
   * @example
   * SingleService
   */
  backendScene?: string;
  /**
   * @example
   * Service
   */
  backendType?: string;
  cloudProductConfig?: HttpApiApiInfoEnvironmentsCloudProductConfig;
  dnsConfigs?: HttpApiApiInfoEnvironmentsDnsConfigs[];
  /**
   * @example
   * env-xxx
   */
  environmentId?: string;
  serviceConfigs?: HttpApiApiInfoEnvironmentsServiceConfigs[];
  vipConfigs?: HttpApiApiInfoEnvironmentsVipConfigs[];
  static names(): { [key: string]: string } {
    return {
      backendScene: 'backendScene',
      backendType: 'backendType',
      cloudProductConfig: 'cloudProductConfig',
      dnsConfigs: 'dnsConfigs',
      environmentId: 'environmentId',
      serviceConfigs: 'serviceConfigs',
      vipConfigs: 'vipConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendScene: 'string',
      backendType: 'string',
      cloudProductConfig: HttpApiApiInfoEnvironmentsCloudProductConfig,
      dnsConfigs: { 'type': 'array', 'itemType': HttpApiApiInfoEnvironmentsDnsConfigs },
      environmentId: 'string',
      serviceConfigs: { 'type': 'array', 'itemType': HttpApiApiInfoEnvironmentsServiceConfigs },
      vipConfigs: { 'type': 'array', 'itemType': HttpApiApiInfoEnvironmentsVipConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPublishRevisionInfoCloudProductConfigContainerServiceConfigs extends $tea.Model {
  /**
   * @example
   * gs-xxx
   */
  gatewayServiceId?: string;
  match?: HttpApiBackendMatchConditions;
  /**
   * @example
   * demo-service
   */
  name?: string;
  /**
   * @example
   * default
   */
  namespace?: string;
  /**
   * @example
   * 8080
   */
  port?: number;
  /**
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @example
   * 100
   */
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayServiceId: 'gatewayServiceId',
      match: 'match',
      name: 'name',
      namespace: 'namespace',
      port: 'port',
      protocol: 'protocol',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayServiceId: 'string',
      match: HttpApiBackendMatchConditions,
      name: 'string',
      namespace: 'string',
      port: 'number',
      protocol: 'string',
      weight: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPublishRevisionInfoCloudProductConfigFunctionConfigs extends $tea.Model {
  /**
   * @example
   * gs-xxx
   */
  gatewayServiceId?: string;
  match?: HttpApiBackendMatchConditions;
  /**
   * @example
   * demo-function
   */
  name?: string;
  /**
   * @example
   * LATEST
   */
  qualifier?: string;
  /**
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      gatewayServiceId: 'gatewayServiceId',
      match: 'match',
      name: 'name',
      qualifier: 'qualifier',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayServiceId: 'string',
      match: HttpApiBackendMatchConditions,
      name: 'string',
      qualifier: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPublishRevisionInfoCloudProductConfigMseNacosConfigs extends $tea.Model {
  /**
   * @example
   * gs-xxx
   */
  gatewayServiceId?: string;
  /**
   * @example
   * DEFAULT_GROUP
   */
  groupName?: string;
  match?: HttpApiBackendMatchConditions;
  /**
   * @example
   * spring-demo
   */
  name?: string;
  /**
   * @example
   * public
   */
  namespace?: string;
  /**
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      gatewayServiceId: 'gatewayServiceId',
      groupName: 'groupName',
      match: 'match',
      name: 'name',
      namespace: 'namespace',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayServiceId: 'string',
      groupName: 'string',
      match: HttpApiBackendMatchConditions,
      name: 'string',
      namespace: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPublishRevisionInfoCloudProductConfig extends $tea.Model {
  /**
   * @example
   * FC
   */
  cloudProductType?: string;
  containerServiceConfigs?: HttpApiPublishRevisionInfoCloudProductConfigContainerServiceConfigs[];
  functionConfigs?: HttpApiPublishRevisionInfoCloudProductConfigFunctionConfigs[];
  mseNacosConfigs?: HttpApiPublishRevisionInfoCloudProductConfigMseNacosConfigs[];
  static names(): { [key: string]: string } {
    return {
      cloudProductType: 'cloudProductType',
      containerServiceConfigs: 'containerServiceConfigs',
      functionConfigs: 'functionConfigs',
      mseNacosConfigs: 'mseNacosConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudProductType: 'string',
      containerServiceConfigs: { 'type': 'array', 'itemType': HttpApiPublishRevisionInfoCloudProductConfigContainerServiceConfigs },
      functionConfigs: { 'type': 'array', 'itemType': HttpApiPublishRevisionInfoCloudProductConfigFunctionConfigs },
      mseNacosConfigs: { 'type': 'array', 'itemType': HttpApiPublishRevisionInfoCloudProductConfigMseNacosConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPublishRevisionInfoDnsConfigs extends $tea.Model {
  dnsList?: string[];
  match?: HttpApiBackendMatchConditions;
  /**
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      dnsList: 'dnsList',
      match: 'match',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsList: { 'type': 'array', 'itemType': 'string' },
      match: HttpApiBackendMatchConditions,
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPublishRevisionInfoEnvironmentInfoGatewayInfo extends $tea.Model {
  /**
   * @example
   * gw-xxx
   */
  gatewayId?: string;
  /**
   * @example
   * 实例1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPublishRevisionInfoEnvironmentInfo extends $tea.Model {
  /**
   * @example
   * 测试
   */
  alias?: string;
  /**
   * @example
   * env-xxx
   */
  environmentId?: string;
  gatewayInfo?: HttpApiPublishRevisionInfoEnvironmentInfoGatewayInfo;
  /**
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      environmentId: 'environmentId',
      gatewayInfo: 'gatewayInfo',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      environmentId: 'string',
      gatewayInfo: HttpApiPublishRevisionInfoEnvironmentInfoGatewayInfo,
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPublishRevisionInfoServiceConfigs extends $tea.Model {
  /**
   * @example
   * gs-xxx
   */
  gatewayServiceId?: string;
  match?: HttpApiBackendMatchConditions;
  /**
   * @example
   * 8080
   */
  port?: number;
  /**
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @example
   * v1
   */
  version?: string;
  /**
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      gatewayServiceId: 'gatewayServiceId',
      match: 'match',
      port: 'port',
      protocol: 'protocol',
      version: 'version',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayServiceId: 'string',
      match: HttpApiBackendMatchConditions,
      port: 'number',
      protocol: 'string',
      version: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPublishRevisionInfoVipConfigs extends $tea.Model {
  endpoints?: string[];
  match?: HttpApiBackendMatchConditions;
  /**
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      endpoints: 'endpoints',
      match: 'match',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoints: { 'type': 'array', 'itemType': 'string' },
      match: HttpApiBackendMatchConditions,
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiRequestContractBody extends $tea.Model {
  /**
   * @example
   * application/json
   */
  contentType?: string;
  description?: string;
  /**
   * @example
   * {"key":"value"}
   */
  example?: string;
  jsonSchema?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'contentType',
      description: 'description',
      example: 'example',
      jsonSchema: 'jsonSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      description: 'string',
      example: 'string',
      jsonSchema: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiResponseContractItems extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * 正常接口响应
   */
  description?: string;
  /**
   * @example
   * {"result": "ok"}
   */
  example?: string;
  jsonSchema?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      description: 'description',
      example: 'example',
      jsonSchema: 'jsonSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      description: 'string',
      example: 'string',
      jsonSchema: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpDubboTranscoderMothedMapListParamMapsList extends $tea.Model {
  /**
   * @example
   * name
   */
  extractKey?: string;
  /**
   * @example
   * ALL_QUERY_PARAMETER
   */
  extractKeySpec?: string;
  /**
   * @example
   * java.lang.String
   */
  mappingType?: string;
  static names(): { [key: string]: string } {
    return {
      extractKey: 'extractKey',
      extractKeySpec: 'extractKeySpec',
      mappingType: 'mappingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extractKey: 'string',
      extractKeySpec: 'string',
      mappingType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpDubboTranscoderMothedMapList extends $tea.Model {
  dubboMothedName?: string;
  /**
   * @example
   * ALL_GET
   */
  httpMothed?: string;
  /**
   * @example
   * /mytestzbk/sayhello
   */
  mothedpath?: string;
  paramMapsList?: HttpDubboTranscoderMothedMapListParamMapsList[];
  /**
   * @example
   * PASS_NOT
   */
  passThroughAllHeaders?: string;
  passThroughList?: string[];
  static names(): { [key: string]: string } {
    return {
      dubboMothedName: 'dubboMothedName',
      httpMothed: 'httpMothed',
      mothedpath: 'mothedpath',
      paramMapsList: 'paramMapsList',
      passThroughAllHeaders: 'passThroughAllHeaders',
      passThroughList: 'passThroughList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dubboMothedName: 'string',
      httpMothed: 'string',
      mothedpath: 'string',
      paramMapsList: { 'type': 'array', 'itemType': HttpDubboTranscoderMothedMapListParamMapsList },
      passThroughAllHeaders: 'string',
      passThroughList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpRouteMatchHeaders extends $tea.Model {
  /**
   * @example
   * dev
   */
  name?: string;
  /**
   * @example
   * Exact
   */
  type?: string;
  /**
   * @example
   * true
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpRouteMatchPath extends $tea.Model {
  /**
   * @example
   * Prefix
   */
  type?: string;
  /**
   * @example
   * /user
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpRouteMatchQueryParams extends $tea.Model {
  /**
   * @example
   * age
   */
  name?: string;
  /**
   * @example
   * Exact
   */
  type?: string;
  /**
   * @example
   * 17
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResponseBodyData extends $tea.Model {
  /**
   * @example
   * d-cpu1aullhtgkidg7sa4g
   */
  domainId?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnvironmentResponseBodyData extends $tea.Model {
  /**
   * @example
   * env-cq7l5s5lhtgi6qasrdc0
   */
  environmentId?: string;
  static names(): { [key: string]: string } {
    return {
      environmentId: 'environmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayRouteResponseBodyData extends $tea.Model {
  /**
   * @example
   * gr-cpumc37d*****
   */
  gatewayRouteId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayRouteId: 'gatewayRouteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayRouteId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayServiceRequestGatewayServiceConfigs extends $tea.Model {
  addresses?: string[];
  /**
   * @example
   * group-1
   */
  groupName?: string;
  /**
   * @example
   * itemcenter-provider
   */
  name?: string;
  /**
   * @example
   * MSE_NACOS
   */
  namespace?: string;
  /**
   * @example
   * 8080
   */
  port?: number;
  /**
   * @example
   * LATEST
   */
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      addresses: 'addresses',
      groupName: 'groupName',
      name: 'name',
      namespace: 'namespace',
      port: 'port',
      qualifier: 'qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      groupName: 'string',
      name: 'string',
      namespace: 'string',
      port: 'number',
      qualifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayServiceResponseBodyData extends $tea.Model {
  gatewayServiceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      gatewayServiceIds: 'gatewayServiceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayServiceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayServiceVersionRequestLabels extends $tea.Model {
  /**
   * @example
   * app
   */
  key?: string;
  /**
   * @example
   * itemcenter-blue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHttpApiResponseBodyData extends $tea.Model {
  httpApiId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      httpApiId: 'httpApiId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpApiId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHttpApiOperationResponseBodyDataOperations extends $tea.Model {
  operationId?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'operationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHttpApiOperationResponseBodyData extends $tea.Model {
  operations?: CreateHttpApiOperationResponseBodyDataOperations[];
  static names(): { [key: string]: string } {
    return {
      operations: 'operations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operations: { 'type': 'array', 'itemType': CreateHttpApiOperationResponseBodyDataOperations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceSourceRequestK8sServiceSourceConfigAuthorizeSecurityGroupRules extends $tea.Model {
  description?: string;
  portRanges?: string[];
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      portRanges: 'portRanges',
      securityGroupId: 'securityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      portRanges: { 'type': 'array', 'itemType': 'string' },
      securityGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceSourceRequestK8sServiceSourceConfigIngressConfig extends $tea.Model {
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * mse
   */
  ingressClass?: string;
  /**
   * @example
   * false
   */
  overrideIngressIp?: boolean;
  /**
   * @example
   * default
   */
  watchNamespace?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      ingressClass: 'ingressClass',
      overrideIngressIp: 'overrideIngressIp',
      watchNamespace: 'watchNamespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      ingressClass: 'string',
      overrideIngressIp: 'boolean',
      watchNamespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceSourceRequestK8sServiceSourceConfig extends $tea.Model {
  authorizeSecurityGroupRules?: CreateServiceSourceRequestK8sServiceSourceConfigAuthorizeSecurityGroupRules[];
  /**
   * @example
   * c4a21b3560fad4ec299f3e******
   */
  clusterId?: string;
  ingressConfig?: CreateServiceSourceRequestK8sServiceSourceConfigIngressConfig;
  static names(): { [key: string]: string } {
    return {
      authorizeSecurityGroupRules: 'authorizeSecurityGroupRules',
      clusterId: 'clusterId',
      ingressConfig: 'ingressConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizeSecurityGroupRules: { 'type': 'array', 'itemType': CreateServiceSourceRequestK8sServiceSourceConfigAuthorizeSecurityGroupRules },
      clusterId: 'string',
      ingressConfig: CreateServiceSourceRequestK8sServiceSourceConfigIngressConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceSourceRequestNacosServiceSourceConfig extends $tea.Model {
  /**
   * @example
   * mse-cn-328fc8***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceSourceResponseBodyData extends $tea.Model {
  /**
   * @example
   * gss-cpqots5lht****
   */
  serviceSourceId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceSourceId: 'serviceSourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceSourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainResponseBodyData extends $tea.Model {
  /**
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @example
   * 223576-cn-hangzhou
   */
  caCertIndentifier?: string;
  /**
   * @example
   * 123576-cn-hangzhou
   */
  certIndentifier?: string;
  /**
   * @example
   * test-cert
   */
  certName?: string;
  /**
   * @example
   * Console
   */
  createFrom?: string;
  /**
   * @example
   * 1719386834548
   */
  createTimestamp?: number;
  /**
   * @example
   * false
   */
  default?: boolean;
  /**
   * @example
   * d-cq1m3utlhtgvgkv7sitg
   */
  domainId?: string;
  /**
   * @example
   * false
   */
  forceHttps?: boolean;
  /**
   * @example
   * Open
   */
  http2Option?: string;
  /**
   * @example
   * Alibaba
   */
  issuer?: string;
  /**
   * @example
   * abc.com
   */
  name?: string;
  /**
   * @example
   * 1719386834548
   */
  notAfterTimstamp?: number;
  /**
   * @example
   * 1719386834548
   */
  notBeforeTimestamp?: number;
  /**
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @example
   * aliyun.com
   */
  sans?: string;
  /**
   * @example
   * TLS 1.3
   */
  tlsMax?: string;
  /**
   * @example
   * TLS 1.0
   */
  tlsMin?: string;
  /**
   * @example
   * 1719386834548
   */
  updatetimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'algorithm',
      caCertIndentifier: 'caCertIndentifier',
      certIndentifier: 'certIndentifier',
      certName: 'certName',
      createFrom: 'createFrom',
      createTimestamp: 'createTimestamp',
      default: 'default',
      domainId: 'domainId',
      forceHttps: 'forceHttps',
      http2Option: 'http2Option',
      issuer: 'issuer',
      name: 'name',
      notAfterTimstamp: 'notAfterTimstamp',
      notBeforeTimestamp: 'notBeforeTimestamp',
      protocol: 'protocol',
      sans: 'sans',
      tlsMax: 'tlsMax',
      tlsMin: 'tlsMin',
      updatetimestamp: 'updatetimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      caCertIndentifier: 'string',
      certIndentifier: 'string',
      certName: 'string',
      createFrom: 'string',
      createTimestamp: 'number',
      default: 'boolean',
      domainId: 'string',
      forceHttps: 'boolean',
      http2Option: 'string',
      issuer: 'string',
      name: 'string',
      notAfterTimstamp: 'number',
      notBeforeTimestamp: 'number',
      protocol: 'string',
      sans: 'string',
      tlsMax: 'string',
      tlsMin: 'string',
      updatetimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentResponseBodyData extends $tea.Model {
  alias?: string;
  /**
   * @example
   * 1719386834548
   */
  createTimestamp?: number;
  /**
   * @example
   * true
   */
  default?: boolean;
  description?: string;
  /**
   * @example
   * env-cq7l5s5lhtgi6qasrdc0
   */
  environmentId?: string;
  gatewayInfo?: GatewayInfo;
  /**
   * @example
   * test
   */
  name?: string;
  subDomainInfos?: SubDomainInfo[];
  /**
   * @example
   * 1719386834548
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      createTimestamp: 'createTimestamp',
      default: 'default',
      description: 'description',
      environmentId: 'environmentId',
      gatewayInfo: 'gatewayInfo',
      name: 'name',
      subDomainInfos: 'subDomainInfos',
      updateTimestamp: 'updateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      createTimestamp: 'number',
      default: 'boolean',
      description: 'string',
      environmentId: 'string',
      gatewayInfo: GatewayInfo,
      name: 'string',
      subDomainInfos: { 'type': 'array', 'itemType': SubDomainInfo },
      updateTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayResponseBodyDataEnvironments extends $tea.Model {
  alias?: string;
  /**
   * @example
   * env-cp9uhudlht***
   */
  environmentId?: string;
  /**
   * @example
   * default-gw-cp9ugg5***
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      environmentId: 'environmentId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      environmentId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayResponseBodyDataLoadBalancersPorts extends $tea.Model {
  /**
   * @example
   * 443
   */
  port?: number;
  /**
   * @example
   * TCP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'port',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayResponseBodyDataLoadBalancers extends $tea.Model {
  /**
   * @example
   * nlb-xoh3pghr***.cn-hangzhou.nlb.aliyuncs.com
   */
  address?: string;
  /**
   * @example
   * ipv4
   */
  addressIpVersion?: string;
  /**
   * @example
   * Internet
   */
  addressType?: string;
  /**
   * @example
   * true
   */
  gatewayDefault?: boolean;
  /**
   * @example
   * nlb-xoh3pghru7c***
   */
  loadBalancerId?: string;
  /**
   * @example
   * Managed
   */
  mode?: string;
  ports?: GetGatewayResponseBodyDataLoadBalancersPorts[];
  /**
   * @example
   * Ready
   */
  status?: string;
  /**
   * @example
   * NLB
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      addressIpVersion: 'addressIpVersion',
      addressType: 'addressType',
      gatewayDefault: 'gatewayDefault',
      loadBalancerId: 'loadBalancerId',
      mode: 'mode',
      ports: 'ports',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressIpVersion: 'string',
      addressType: 'string',
      gatewayDefault: 'boolean',
      loadBalancerId: 'string',
      mode: 'string',
      ports: { 'type': 'array', 'itemType': GetGatewayResponseBodyDataLoadBalancersPorts },
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayResponseBodyDataSecurityGroup extends $tea.Model {
  /**
   * @example
   * APIG-sg-gw-cq7ke5ll***
   */
  name?: string;
  /**
   * @example
   * sg-bp16tafq9***
   */
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      securityGroupId: 'securityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      securityGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayResponseBodyDataVSwitch extends $tea.Model {
  name?: string;
  /**
   * @example
   * vsw-bp1c7ggkj***
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      vSwitchId: 'vSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayResponseBodyDataVpc extends $tea.Model {
  name?: string;
  /**
   * @example
   * vpc-bp1llj52lvj6xc***
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayResponseBodyDataZonesVSwitch extends $tea.Model {
  name?: string;
  /**
   * @example
   * vsw-bp1c7ggkj***
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      vSwitchId: 'vSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayResponseBodyDataZones extends $tea.Model {
  name?: string;
  vSwitch?: GetGatewayResponseBodyDataZonesVSwitch;
  /**
   * @example
   * cn-hangzhou-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      vSwitch: 'vSwitch',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      vSwitch: GetGatewayResponseBodyDataZonesVSwitch,
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayResponseBodyData extends $tea.Model {
  /**
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @example
   * Console
   */
  createFrom?: string;
  /**
   * @example
   * 1719386834548
   */
  createTimestamp?: number;
  environments?: GetGatewayResponseBodyDataEnvironments[];
  /**
   * @example
   * 1719386834548
   */
  expireTimestamp?: number;
  /**
   * @example
   * gw-cq2vundlhtg***
   */
  gatewayId?: string;
  loadBalancers?: GetGatewayResponseBodyDataLoadBalancers[];
  /**
   * @example
   * itemcenter-gateway
   */
  name?: string;
  /**
   * @example
   * 2
   */
  replicas?: string;
  securityGroup?: GetGatewayResponseBodyDataSecurityGroup;
  /**
   * @example
   * apigw.small.x1
   */
  spec?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * 2.0.2
   */
  targetVersion?: string;
  /**
   * @example
   * 1719386834548
   */
  updateTimestamp?: number;
  vSwitch?: GetGatewayResponseBodyDataVSwitch;
  /**
   * @example
   * 2.0.2
   */
  version?: string;
  vpc?: GetGatewayResponseBodyDataVpc;
  zones?: GetGatewayResponseBodyDataZones[];
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      createFrom: 'createFrom',
      createTimestamp: 'createTimestamp',
      environments: 'environments',
      expireTimestamp: 'expireTimestamp',
      gatewayId: 'gatewayId',
      loadBalancers: 'loadBalancers',
      name: 'name',
      replicas: 'replicas',
      securityGroup: 'securityGroup',
      spec: 'spec',
      status: 'status',
      targetVersion: 'targetVersion',
      updateTimestamp: 'updateTimestamp',
      vSwitch: 'vSwitch',
      version: 'version',
      vpc: 'vpc',
      zones: 'zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      createFrom: 'string',
      createTimestamp: 'number',
      environments: { 'type': 'array', 'itemType': GetGatewayResponseBodyDataEnvironments },
      expireTimestamp: 'number',
      gatewayId: 'string',
      loadBalancers: { 'type': 'array', 'itemType': GetGatewayResponseBodyDataLoadBalancers },
      name: 'string',
      replicas: 'string',
      securityGroup: GetGatewayResponseBodyDataSecurityGroup,
      spec: 'string',
      status: 'string',
      targetVersion: 'string',
      updateTimestamp: 'number',
      vSwitch: GetGatewayResponseBodyDataVSwitch,
      version: 'string',
      vpc: GetGatewayResponseBodyDataVpc,
      zones: { 'type': 'array', 'itemType': GetGatewayResponseBodyDataZones },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayRouteResponseBodyData extends $tea.Model {
  backend?: GatewayRouteBackend;
  /**
   * @example
   * 1719386834548
   */
  createTimestamp?: number;
  description?: string;
  domainInfo?: GatewayRouteDomainInfo;
  /**
   * @example
   * gr-cptf6e7d5l***
   */
  gatewayRouteId?: string;
  match?: HttpRouteMatch;
  /**
   * @example
   * itemcenter-pre-route
   */
  name?: string;
  /**
   * @example
   * NotPublished
   */
  status?: string;
  /**
   * @example
   * 1719386834548
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      backend: 'backend',
      createTimestamp: 'createTimestamp',
      description: 'description',
      domainInfo: 'domainInfo',
      gatewayRouteId: 'gatewayRouteId',
      match: 'match',
      name: 'name',
      status: 'status',
      updateTimestamp: 'updateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backend: GatewayRouteBackend,
      createTimestamp: 'number',
      description: 'string',
      domainInfo: GatewayRouteDomainInfo,
      gatewayRouteId: 'string',
      match: HttpRouteMatch,
      name: 'string',
      status: 'string',
      updateTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponseBodyData extends $tea.Model {
  items?: DomainInfo[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 9
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DomainInfo },
      pageNumber: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentsResponseBodyData extends $tea.Model {
  items?: EnvironmentInfo[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 25
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': EnvironmentInfo },
      pageNumber: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRoutesResponseBodyDataItems extends $tea.Model {
  backend?: GatewayRouteBackend;
  /**
   * @example
   * 1719386834548
   */
  createTimestamp?: number;
  description?: string;
  domainInfo?: GatewayRouteDomainInfo;
  /**
   * @example
   * gr-cqa8oddlhtg***
   */
  gatewayRouteId?: string;
  match?: HttpRouteMatch;
  /**
   * @example
   * pre-itemcenter-router
   */
  name?: string;
  /**
   * @example
   * NotPublished
   */
  status?: string;
  /**
   * @example
   * 1719386834548
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      backend: 'backend',
      createTimestamp: 'createTimestamp',
      description: 'description',
      domainInfo: 'domainInfo',
      gatewayRouteId: 'gatewayRouteId',
      match: 'match',
      name: 'name',
      status: 'status',
      updateTimestamp: 'updateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backend: GatewayRouteBackend,
      createTimestamp: 'number',
      description: 'string',
      domainInfo: GatewayRouteDomainInfo,
      gatewayRouteId: 'string',
      match: HttpRouteMatch,
      name: 'string',
      status: 'string',
      updateTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRoutesResponseBodyData extends $tea.Model {
  items?: ListGatewayRoutesResponseBodyDataItems[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 2
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListGatewayRoutesResponseBodyDataItems },
      pageNumber: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayServicesResponseBodyData extends $tea.Model {
  items?: GatewayService[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 6
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GatewayService },
      pageNumber: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaysResponseBodyDataItemsLoadBalancersPorts extends $tea.Model {
  /**
   * @example
   * 443
   */
  port?: number;
  /**
   * @example
   * TCP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'port',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaysResponseBodyDataItemsLoadBalancers extends $tea.Model {
  /**
   * @example
   * nlb-xoh3pghr***.cn-hangzhou.nlb.aliyuncs.com
   */
  address?: string;
  /**
   * @example
   * ipv4
   */
  addressIpVersion?: string;
  /**
   * @example
   * Internet
   */
  addressType?: string;
  /**
   * @example
   * true
   */
  gatewayDefault?: boolean;
  /**
   * @example
   * nlb-xqwioje1c91r***
   */
  loadBalancerId?: string;
  /**
   * @example
   * Managed
   */
  mode?: string;
  ports?: ListGatewaysResponseBodyDataItemsLoadBalancersPorts[];
  /**
   * @example
   * Ready
   */
  status?: string;
  /**
   * @example
   * NLB
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      addressIpVersion: 'addressIpVersion',
      addressType: 'addressType',
      gatewayDefault: 'gatewayDefault',
      loadBalancerId: 'loadBalancerId',
      mode: 'mode',
      ports: 'ports',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressIpVersion: 'string',
      addressType: 'string',
      gatewayDefault: 'boolean',
      loadBalancerId: 'string',
      mode: 'string',
      ports: { 'type': 'array', 'itemType': ListGatewaysResponseBodyDataItemsLoadBalancersPorts },
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaysResponseBodyDataItems extends $tea.Model {
  /**
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @example
   * Console
   */
  createFrom?: string;
  /**
   * @example
   * 1719386834548
   */
  createTimestamp?: number;
  /**
   * @example
   * 172086834548
   */
  expireTimestamp?: number;
  /**
   * @example
   * gw-cpv54p5***
   */
  gatewayId?: string;
  loadBalancers?: ListGatewaysResponseBodyDataItemsLoadBalancers[];
  /**
   * @example
   * itemcenter-gateway
   */
  name?: string;
  /**
   * @example
   * 2
   */
  replicas?: string;
  /**
   * @example
   * apigw.small.x1
   */
  spec?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * 2.0.2
   */
  targetVersion?: string;
  /**
   * @example
   * 1719386834548
   */
  updateTimestamp?: number;
  /**
   * @example
   * 2.0.2
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      createFrom: 'createFrom',
      createTimestamp: 'createTimestamp',
      expireTimestamp: 'expireTimestamp',
      gatewayId: 'gatewayId',
      loadBalancers: 'loadBalancers',
      name: 'name',
      replicas: 'replicas',
      spec: 'spec',
      status: 'status',
      targetVersion: 'targetVersion',
      updateTimestamp: 'updateTimestamp',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      createFrom: 'string',
      createTimestamp: 'number',
      expireTimestamp: 'number',
      gatewayId: 'string',
      loadBalancers: { 'type': 'array', 'itemType': ListGatewaysResponseBodyDataItemsLoadBalancers },
      name: 'string',
      replicas: 'string',
      spec: 'string',
      status: 'string',
      targetVersion: 'string',
      updateTimestamp: 'number',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaysResponseBodyData extends $tea.Model {
  items?: ListGatewaysResponseBodyDataItems[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 6
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListGatewaysResponseBodyDataItems },
      pageNumber: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHttpApiOperationsResponseBodyData extends $tea.Model {
  items?: HttpApiOperationInfo[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 10
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': HttpApiOperationInfo },
      pageNumber: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHttpApisResponseBodyData extends $tea.Model {
  items?: HttpApiInfoByName[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 10
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': HttpApiInfoByName },
      pageNumber: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishHttpApiRequestEnvironmentCloudProductConfigContainerServiceConfigs extends $tea.Model {
  match?: HttpApiBackendMatchConditions;
  /**
   * @example
   * test-service
   */
  name?: string;
  /**
   * @example
   * default
   */
  namespace?: string;
  /**
   * @example
   * 8080
   */
  port?: number;
  /**
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      match: 'match',
      name: 'name',
      namespace: 'namespace',
      port: 'port',
      protocol: 'protocol',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      match: HttpApiBackendMatchConditions,
      name: 'string',
      namespace: 'string',
      port: 'number',
      protocol: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishHttpApiRequestEnvironmentCloudProductConfigFunctionConfigs extends $tea.Model {
  match?: HttpApiBackendMatchConditions;
  /**
   * @example
   * fc-test
   */
  name?: string;
  /**
   * @example
   * LATEST
   */
  quanlifer?: string;
  /**
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      match: 'match',
      name: 'name',
      quanlifer: 'quanlifer',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      match: HttpApiBackendMatchConditions,
      name: 'string',
      quanlifer: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishHttpApiRequestEnvironmentCloudProductConfigMseNacosConfigs extends $tea.Model {
  /**
   * @example
   * DEFAULT_GROUP
   */
  groupName?: string;
  match?: HttpApiBackendMatchConditions;
  /**
   * @example
   * provider
   */
  name?: string;
  /**
   * @example
   * public
   */
  namespace?: string;
  /**
   * @example
   * 100
   */
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'groupName',
      match: 'match',
      name: 'name',
      namespace: 'namespace',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      match: HttpApiBackendMatchConditions,
      name: 'string',
      namespace: 'string',
      weight: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishHttpApiRequestEnvironmentCloudProductConfig extends $tea.Model {
  /**
   * @example
   * FC
   */
  cloudProductType?: string;
  containerServiceConfigs?: PublishHttpApiRequestEnvironmentCloudProductConfigContainerServiceConfigs[];
  functionConfigs?: PublishHttpApiRequestEnvironmentCloudProductConfigFunctionConfigs[];
  mseNacosConfigs?: PublishHttpApiRequestEnvironmentCloudProductConfigMseNacosConfigs[];
  static names(): { [key: string]: string } {
    return {
      cloudProductType: 'cloudProductType',
      containerServiceConfigs: 'containerServiceConfigs',
      functionConfigs: 'functionConfigs',
      mseNacosConfigs: 'mseNacosConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudProductType: 'string',
      containerServiceConfigs: { 'type': 'array', 'itemType': PublishHttpApiRequestEnvironmentCloudProductConfigContainerServiceConfigs },
      functionConfigs: { 'type': 'array', 'itemType': PublishHttpApiRequestEnvironmentCloudProductConfigFunctionConfigs },
      mseNacosConfigs: { 'type': 'array', 'itemType': PublishHttpApiRequestEnvironmentCloudProductConfigMseNacosConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishHttpApiRequestEnvironmentDnsConfigs extends $tea.Model {
  dnsList?: string[];
  match?: HttpApiBackendMatchConditions;
  /**
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      dnsList: 'dnsList',
      match: 'match',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsList: { 'type': 'array', 'itemType': 'string' },
      match: HttpApiBackendMatchConditions,
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishHttpApiRequestEnvironmentServiceConfigs extends $tea.Model {
  /**
   * @example
   * gs-xxx
   */
  gatewayServiceId?: string;
  match?: HttpApiBackendMatchConditions;
  /**
   * @example
   * 8080
   */
  port?: number;
  /**
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @example
   * v1
   */
  version?: string;
  /**
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      gatewayServiceId: 'gatewayServiceId',
      match: 'match',
      port: 'port',
      protocol: 'protocol',
      version: 'version',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayServiceId: 'string',
      match: HttpApiBackendMatchConditions,
      port: 'number',
      protocol: 'string',
      version: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishHttpApiRequestEnvironmentVipConfigs extends $tea.Model {
  endpoints?: string[];
  match?: HttpApiBackendMatchConditions;
  /**
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      endpoints: 'endpoints',
      match: 'match',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoints: { 'type': 'array', 'itemType': 'string' },
      match: HttpApiBackendMatchConditions,
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishHttpApiRequestEnvironment extends $tea.Model {
  /**
   * @example
   * SingleService
   */
  backendScene?: string;
  /**
   * @example
   * Service
   */
  backendType?: string;
  cloudProductConfig?: PublishHttpApiRequestEnvironmentCloudProductConfig;
  customDomainIds?: string[];
  dnsConfigs?: PublishHttpApiRequestEnvironmentDnsConfigs[];
  /**
   * @example
   * env-xxx
   */
  environmentId?: string;
  serviceConfigs?: PublishHttpApiRequestEnvironmentServiceConfigs[];
  vipConfigs?: PublishHttpApiRequestEnvironmentVipConfigs[];
  static names(): { [key: string]: string } {
    return {
      backendScene: 'backendScene',
      backendType: 'backendType',
      cloudProductConfig: 'cloudProductConfig',
      customDomainIds: 'customDomainIds',
      dnsConfigs: 'dnsConfigs',
      environmentId: 'environmentId',
      serviceConfigs: 'serviceConfigs',
      vipConfigs: 'vipConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendScene: 'string',
      backendType: 'string',
      cloudProductConfig: PublishHttpApiRequestEnvironmentCloudProductConfig,
      customDomainIds: { 'type': 'array', 'itemType': 'string' },
      dnsConfigs: { 'type': 'array', 'itemType': PublishHttpApiRequestEnvironmentDnsConfigs },
      environmentId: 'string',
      serviceConfigs: { 'type': 'array', 'itemType': PublishHttpApiRequestEnvironmentServiceConfigs },
      vipConfigs: { 'type': 'array', 'itemType': PublishHttpApiRequestEnvironmentVipConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayServiceVersionRequestLabels extends $tea.Model {
  /**
   * @example
   * topology.kubernetes.io/zone
   */
  key?: string;
  /**
   * @example
   * cn-hangzhou-k
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceSourceRequestK8sServiceSourceConfigIngressConfig extends $tea.Model {
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * mse
   */
  ingressClass?: string;
  /**
   * @example
   * false
   */
  overrideIngressIp?: boolean;
  /**
   * @example
   * default
   */
  watchNamespace?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      ingressClass: 'ingressClass',
      overrideIngressIp: 'overrideIngressIp',
      watchNamespace: 'watchNamespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      ingressClass: 'string',
      overrideIngressIp: 'boolean',
      watchNamespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceSourceRequestK8sServiceSourceConfig extends $tea.Model {
  ingressConfig?: UpdateServiceSourceRequestK8sServiceSourceConfigIngressConfig;
  static names(): { [key: string]: string } {
    return {
      ingressConfig: 'ingressConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ingressConfig: UpdateServiceSourceRequestK8sServiceSourceConfigIngressConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("apig", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 授权网关访问服务的安全组
   * 
   * @param request - AddGatewaySecurityGroupRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddGatewaySecurityGroupRuleResponse
   */
  async addGatewaySecurityGroupRuleWithOptions(gatewayId: string, request: AddGatewaySecurityGroupRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddGatewaySecurityGroupRuleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.portRanges)) {
      body["portRanges"] = request.portRanges;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      body["securityGroupId"] = request.securityGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddGatewaySecurityGroupRule",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${OpenApiUtil.getEncodeParam(gatewayId)}/security-group-rules`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddGatewaySecurityGroupRuleResponse>(await this.callApi(params, req, runtime), new AddGatewaySecurityGroupRuleResponse({}));
  }

  /**
   * 授权网关访问服务的安全组
   * 
   * @param request - AddGatewaySecurityGroupRuleRequest
   * @returns AddGatewaySecurityGroupRuleResponse
   */
  async addGatewaySecurityGroupRule(gatewayId: string, request: AddGatewaySecurityGroupRuleRequest): Promise<AddGatewaySecurityGroupRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addGatewaySecurityGroupRuleWithOptions(gatewayId, request, headers, runtime);
  }

  /**
   * 创建域名
   * 
   * @param request - CreateDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDomainResponse
   */
  async createDomainWithOptions(request: CreateDomainRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateDomainResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.caCertIndentifier)) {
      body["caCertIndentifier"] = request.caCertIndentifier;
    }

    if (!Util.isUnset(request.certIndentifier)) {
      body["certIndentifier"] = request.certIndentifier;
    }

    if (!Util.isUnset(request.forceHttps)) {
      body["forceHttps"] = request.forceHttps;
    }

    if (!Util.isUnset(request.http2Option)) {
      body["http2Option"] = request.http2Option;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.protocol)) {
      body["protocol"] = request.protocol;
    }

    if (!Util.isUnset(request.tlsMax)) {
      body["tlsMax"] = request.tlsMax;
    }

    if (!Util.isUnset(request.tlsMin)) {
      body["tlsMin"] = request.tlsMin;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDomain",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/domains`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateDomainResponse>(await this.callApi(params, req, runtime), new CreateDomainResponse({}));
  }

  /**
   * 创建域名
   * 
   * @param request - CreateDomainRequest
   * @returns CreateDomainResponse
   */
  async createDomain(request: CreateDomainRequest): Promise<CreateDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDomainWithOptions(request, headers, runtime);
  }

  /**
   * CreateEnvironment
   * 
   * @param request - CreateEnvironmentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEnvironmentResponse
   */
  async createEnvironmentWithOptions(request: CreateEnvironmentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateEnvironmentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alias)) {
      body["alias"] = request.alias;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.gatewayId)) {
      body["gatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateEnvironment",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/environments`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateEnvironmentResponse>(await this.callApi(params, req, runtime), new CreateEnvironmentResponse({}));
  }

  /**
   * CreateEnvironment
   * 
   * @param request - CreateEnvironmentRequest
   * @returns CreateEnvironmentResponse
   */
  async createEnvironment(request: CreateEnvironmentRequest): Promise<CreateEnvironmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createEnvironmentWithOptions(request, headers, runtime);
  }

  /**
   * 创建网关路由
   * 
   * @param request - CreateGatewayRouteRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGatewayRouteResponse
   */
  async createGatewayRouteWithOptions(gatewayId: string, request: CreateGatewayRouteRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateGatewayRouteResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.backendConfig)) {
      body["backendConfig"] = request.backendConfig;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.domainConfig)) {
      body["domainConfig"] = request.domainConfig;
    }

    if (!Util.isUnset(request.match)) {
      body["match"] = request.match;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateGatewayRoute",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${OpenApiUtil.getEncodeParam(gatewayId)}/http-routes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateGatewayRouteResponse>(await this.callApi(params, req, runtime), new CreateGatewayRouteResponse({}));
  }

  /**
   * 创建网关路由
   * 
   * @param request - CreateGatewayRouteRequest
   * @returns CreateGatewayRouteResponse
   */
  async createGatewayRoute(gatewayId: string, request: CreateGatewayRouteRequest): Promise<CreateGatewayRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createGatewayRouteWithOptions(gatewayId, request, headers, runtime);
  }

  /**
   * 创建服务
   * 
   * @param request - CreateGatewayServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGatewayServiceResponse
   */
  async createGatewayServiceWithOptions(gatewayId: string, request: CreateGatewayServiceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateGatewayServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.gatewayServiceConfigs)) {
      body["gatewayServiceConfigs"] = request.gatewayServiceConfigs;
    }

    if (!Util.isUnset(request.sourceType)) {
      body["sourceType"] = request.sourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateGatewayService",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${OpenApiUtil.getEncodeParam(gatewayId)}/gateway-services`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateGatewayServiceResponse>(await this.callApi(params, req, runtime), new CreateGatewayServiceResponse({}));
  }

  /**
   * 创建服务
   * 
   * @param request - CreateGatewayServiceRequest
   * @returns CreateGatewayServiceResponse
   */
  async createGatewayService(gatewayId: string, request: CreateGatewayServiceRequest): Promise<CreateGatewayServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createGatewayServiceWithOptions(gatewayId, request, headers, runtime);
  }

  /**
   * 创建服务版本
   * 
   * @param request - CreateGatewayServiceVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGatewayServiceVersionResponse
   */
  async createGatewayServiceVersionWithOptions(gatewayId: string, gatewayServiceId: string, request: CreateGatewayServiceVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateGatewayServiceVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labels)) {
      body["labels"] = request.labels;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateGatewayServiceVersion",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${OpenApiUtil.getEncodeParam(gatewayId)}/gateway-services/${OpenApiUtil.getEncodeParam(gatewayServiceId)}/service-versions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateGatewayServiceVersionResponse>(await this.callApi(params, req, runtime), new CreateGatewayServiceVersionResponse({}));
  }

  /**
   * 创建服务版本
   * 
   * @param request - CreateGatewayServiceVersionRequest
   * @returns CreateGatewayServiceVersionResponse
   */
  async createGatewayServiceVersion(gatewayId: string, gatewayServiceId: string, request: CreateGatewayServiceVersionRequest): Promise<CreateGatewayServiceVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createGatewayServiceVersionWithOptions(gatewayId, gatewayServiceId, request, headers, runtime);
  }

  /**
   * 创建一个HTTP类型的API
   * 
   * @param request - CreateHttpApiRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHttpApiResponse
   */
  async createHttpApiWithOptions(request: CreateHttpApiRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateHttpApiResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.basePath)) {
      body["basePath"] = request.basePath;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.protocols)) {
      body["protocols"] = request.protocols;
    }

    if (!Util.isUnset(request.versionConfig)) {
      body["versionConfig"] = request.versionConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateHttpApi",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateHttpApiResponse>(await this.callApi(params, req, runtime), new CreateHttpApiResponse({}));
  }

  /**
   * 创建一个HTTP类型的API
   * 
   * @param request - CreateHttpApiRequest
   * @returns CreateHttpApiResponse
   */
  async createHttpApi(request: CreateHttpApiRequest): Promise<CreateHttpApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createHttpApiWithOptions(request, headers, runtime);
  }

  /**
   * 为HTTP API创建Operation
   * 
   * @param request - CreateHttpApiOperationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHttpApiOperationResponse
   */
  async createHttpApiOperationWithOptions(httpApiId: string, request: CreateHttpApiOperationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateHttpApiOperationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operations)) {
      body["operations"] = request.operations;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateHttpApiOperation",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${OpenApiUtil.getEncodeParam(httpApiId)}/operations`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateHttpApiOperationResponse>(await this.callApi(params, req, runtime), new CreateHttpApiOperationResponse({}));
  }

  /**
   * 为HTTP API创建Operation
   * 
   * @param request - CreateHttpApiOperationRequest
   * @returns CreateHttpApiOperationResponse
   */
  async createHttpApiOperation(httpApiId: string, request: CreateHttpApiOperationRequest): Promise<CreateHttpApiOperationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createHttpApiOperationWithOptions(httpApiId, request, headers, runtime);
  }

  /**
   * 创建服务来源
   * 
   * @param request - CreateServiceSourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceSourceResponse
   */
  async createServiceSourceWithOptions(gatewayId: string, request: CreateServiceSourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateServiceSourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.k8sServiceSourceConfig)) {
      body["k8sServiceSourceConfig"] = request.k8sServiceSourceConfig;
    }

    if (!Util.isUnset(request.nacosServiceSourceConfig)) {
      body["nacosServiceSourceConfig"] = request.nacosServiceSourceConfig;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateServiceSource",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${OpenApiUtil.getEncodeParam(gatewayId)}/service-sources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateServiceSourceResponse>(await this.callApi(params, req, runtime), new CreateServiceSourceResponse({}));
  }

  /**
   * 创建服务来源
   * 
   * @param request - CreateServiceSourceRequest
   * @returns CreateServiceSourceResponse
   */
  async createServiceSource(gatewayId: string, request: CreateServiceSourceRequest): Promise<CreateServiceSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceSourceWithOptions(gatewayId, request, headers, runtime);
  }

  /**
   * DeleteDomain
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainResponse
   */
  async deleteDomainWithOptions(domainId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteDomainResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteDomain",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/domains/${OpenApiUtil.getEncodeParam(domainId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteDomainResponse>(await this.callApi(params, req, runtime), new DeleteDomainResponse({}));
  }

  /**
   * DeleteDomain
   * @returns DeleteDomainResponse
   */
  async deleteDomain(domainId: string): Promise<DeleteDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDomainWithOptions(domainId, headers, runtime);
  }

  /**
   * DeleteEnvironment
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEnvironmentResponse
   */
  async deleteEnvironmentWithOptions(environmentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteEnvironmentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteEnvironment",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/environments/${OpenApiUtil.getEncodeParam(environmentId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteEnvironmentResponse>(await this.callApi(params, req, runtime), new DeleteEnvironmentResponse({}));
  }

  /**
   * DeleteEnvironment
   * @returns DeleteEnvironmentResponse
   */
  async deleteEnvironment(environmentId: string): Promise<DeleteEnvironmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEnvironmentWithOptions(environmentId, headers, runtime);
  }

  /**
   * 删除网关
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGatewayResponse
   */
  async deleteGatewayWithOptions(gatewayId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteGatewayResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteGateway",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${OpenApiUtil.getEncodeParam(gatewayId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteGatewayResponse>(await this.callApi(params, req, runtime), new DeleteGatewayResponse({}));
  }

  /**
   * 删除网关
   * @returns DeleteGatewayResponse
   */
  async deleteGateway(gatewayId: string): Promise<DeleteGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGatewayWithOptions(gatewayId, headers, runtime);
  }

  /**
   * 创建网关路由
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGatewayRouteResponse
   */
  async deleteGatewayRouteWithOptions(gatewayId: string, gatewayRouteId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteGatewayRouteResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteGatewayRoute",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${OpenApiUtil.getEncodeParam(gatewayId)}/http-routes/${OpenApiUtil.getEncodeParam(gatewayRouteId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteGatewayRouteResponse>(await this.callApi(params, req, runtime), new DeleteGatewayRouteResponse({}));
  }

  /**
   * 创建网关路由
   * @returns DeleteGatewayRouteResponse
   */
  async deleteGatewayRoute(gatewayId: string, gatewayRouteId: string): Promise<DeleteGatewayRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGatewayRouteWithOptions(gatewayId, gatewayRouteId, headers, runtime);
  }

  /**
   * 删除服务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGatewayServiceResponse
   */
  async deleteGatewayServiceWithOptions(gatewayId: string, gatewayServiceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteGatewayServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteGatewayService",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${OpenApiUtil.getEncodeParam(gatewayId)}/gateway-services/${OpenApiUtil.getEncodeParam(gatewayServiceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteGatewayServiceResponse>(await this.callApi(params, req, runtime), new DeleteGatewayServiceResponse({}));
  }

  /**
   * 删除服务
   * @returns DeleteGatewayServiceResponse
   */
  async deleteGatewayService(gatewayId: string, gatewayServiceId: string): Promise<DeleteGatewayServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGatewayServiceWithOptions(gatewayId, gatewayServiceId, headers, runtime);
  }

  /**
   * 删除服务版本
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGatewayServiceVersionResponse
   */
  async deleteGatewayServiceVersionWithOptions(gatewayId: string, gatewayServiceId: string, name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteGatewayServiceVersionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteGatewayServiceVersion",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${OpenApiUtil.getEncodeParam(gatewayId)}/gateway-services/${OpenApiUtil.getEncodeParam(gatewayServiceId)}/service-versions/${OpenApiUtil.getEncodeParam(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteGatewayServiceVersionResponse>(await this.callApi(params, req, runtime), new DeleteGatewayServiceVersionResponse({}));
  }

  /**
   * 删除服务版本
   * @returns DeleteGatewayServiceVersionResponse
   */
  async deleteGatewayServiceVersion(gatewayId: string, gatewayServiceId: string, name: string): Promise<DeleteGatewayServiceVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGatewayServiceVersionWithOptions(gatewayId, gatewayServiceId, name, headers, runtime);
  }

  /**
   * 删除HTTP API
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHttpApiResponse
   */
  async deleteHttpApiWithOptions(httpApiId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteHttpApiResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteHttpApi",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${OpenApiUtil.getEncodeParam(httpApiId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteHttpApiResponse>(await this.callApi(params, req, runtime), new DeleteHttpApiResponse({}));
  }

  /**
   * 删除HTTP API
   * @returns DeleteHttpApiResponse
   */
  async deleteHttpApi(httpApiId: string): Promise<DeleteHttpApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteHttpApiWithOptions(httpApiId, headers, runtime);
  }

  /**
   * 删除Operation
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHttpApiOperationResponse
   */
  async deleteHttpApiOperationWithOptions(httpApiId: string, operationId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteHttpApiOperationResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteHttpApiOperation",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${OpenApiUtil.getEncodeParam(httpApiId)}/operations/${OpenApiUtil.getEncodeParam(operationId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteHttpApiOperationResponse>(await this.callApi(params, req, runtime), new DeleteHttpApiOperationResponse({}));
  }

  /**
   * 删除Operation
   * @returns DeleteHttpApiOperationResponse
   */
  async deleteHttpApiOperation(httpApiId: string, operationId: string): Promise<DeleteHttpApiOperationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteHttpApiOperationWithOptions(httpApiId, operationId, headers, runtime);
  }

  /**
   * 删除服务来源
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceSourceResponse
   */
  async deleteServiceSourceWithOptions(gatewayId: string, serviceSourceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteServiceSourceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteServiceSource",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${OpenApiUtil.getEncodeParam(gatewayId)}/service-sources/${OpenApiUtil.getEncodeParam(serviceSourceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteServiceSourceResponse>(await this.callApi(params, req, runtime), new DeleteServiceSourceResponse({}));
  }

  /**
   * 删除服务来源
   * @returns DeleteServiceSourceResponse
   */
  async deleteServiceSource(gatewayId: string, serviceSourceId: string): Promise<DeleteServiceSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceSourceWithOptions(gatewayId, serviceSourceId, headers, runtime);
  }

  /**
   * 查询域名详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDomainResponse
   */
  async getDomainWithOptions(domainId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDomainResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetDomain",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/domains/${OpenApiUtil.getEncodeParam(domainId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDomainResponse>(await this.callApi(params, req, runtime), new GetDomainResponse({}));
  }

  /**
   * 查询域名详情
   * @returns GetDomainResponse
   */
  async getDomain(domainId: string): Promise<GetDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDomainWithOptions(domainId, headers, runtime);
  }

  /**
   * GetEnvironment
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEnvironmentResponse
   */
  async getEnvironmentWithOptions(environmentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetEnvironmentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetEnvironment",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/environments/${OpenApiUtil.getEncodeParam(environmentId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetEnvironmentResponse>(await this.callApi(params, req, runtime), new GetEnvironmentResponse({}));
  }

  /**
   * GetEnvironment
   * @returns GetEnvironmentResponse
   */
  async getEnvironment(environmentId: string): Promise<GetEnvironmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEnvironmentWithOptions(environmentId, headers, runtime);
  }

  /**
   * 获取网关实例详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGatewayResponse
   */
  async getGatewayWithOptions(gatewayId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetGatewayResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetGateway",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${OpenApiUtil.getEncodeParam(gatewayId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetGatewayResponse>(await this.callApi(params, req, runtime), new GetGatewayResponse({}));
  }

  /**
   * 获取网关实例详情
   * @returns GetGatewayResponse
   */
  async getGateway(gatewayId: string): Promise<GetGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGatewayWithOptions(gatewayId, headers, runtime);
  }

  /**
   * 创建网关路由
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGatewayRouteResponse
   */
  async getGatewayRouteWithOptions(gatewayId: string, gatewayRouteId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetGatewayRouteResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetGatewayRoute",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${OpenApiUtil.getEncodeParam(gatewayId)}/http-routes/${OpenApiUtil.getEncodeParam(gatewayRouteId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetGatewayRouteResponse>(await this.callApi(params, req, runtime), new GetGatewayRouteResponse({}));
  }

  /**
   * 创建网关路由
   * @returns GetGatewayRouteResponse
   */
  async getGatewayRoute(gatewayId: string, gatewayRouteId: string): Promise<GetGatewayRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGatewayRouteWithOptions(gatewayId, gatewayRouteId, headers, runtime);
  }

  /**
   * 查询服务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGatewayServiceResponse
   */
  async getGatewayServiceWithOptions(gatewayId: string, gatewayServiceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetGatewayServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetGatewayService",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${OpenApiUtil.getEncodeParam(gatewayId)}/gateway-services/${OpenApiUtil.getEncodeParam(gatewayServiceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetGatewayServiceResponse>(await this.callApi(params, req, runtime), new GetGatewayServiceResponse({}));
  }

  /**
   * 查询服务
   * @returns GetGatewayServiceResponse
   */
  async getGatewayService(gatewayId: string, gatewayServiceId: string): Promise<GetGatewayServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGatewayServiceWithOptions(gatewayId, gatewayServiceId, headers, runtime);
  }

  /**
   * 读取HttpApi
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHttpApiResponse
   */
  async getHttpApiWithOptions(httpApiId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetHttpApiResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetHttpApi",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${OpenApiUtil.getEncodeParam(httpApiId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetHttpApiResponse>(await this.callApi(params, req, runtime), new GetHttpApiResponse({}));
  }

  /**
   * 读取HttpApi
   * @returns GetHttpApiResponse
   */
  async getHttpApi(httpApiId: string): Promise<GetHttpApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHttpApiWithOptions(httpApiId, headers, runtime);
  }

  /**
   * 读取Operation
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHttpApiOperationResponse
   */
  async getHttpApiOperationWithOptions(httpApiId: string, operationId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetHttpApiOperationResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetHttpApiOperation",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${OpenApiUtil.getEncodeParam(httpApiId)}/operations/${OpenApiUtil.getEncodeParam(operationId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetHttpApiOperationResponse>(await this.callApi(params, req, runtime), new GetHttpApiOperationResponse({}));
  }

  /**
   * 读取Operation
   * @returns GetHttpApiOperationResponse
   */
  async getHttpApiOperation(httpApiId: string, operationId: string): Promise<GetHttpApiOperationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHttpApiOperationWithOptions(httpApiId, operationId, headers, runtime);
  }

  /**
   * ListDomains
   * 
   * @param request - ListDomainsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDomainsResponse
   */
  async listDomainsWithOptions(request: ListDomainsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDomainsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.nameLike)) {
      query["nameLike"] = request.nameLike;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDomains",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/domains`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDomainsResponse>(await this.callApi(params, req, runtime), new ListDomainsResponse({}));
  }

  /**
   * ListDomains
   * 
   * @param request - ListDomainsRequest
   * @returns ListDomainsResponse
   */
  async listDomains(request: ListDomainsRequest): Promise<ListDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDomainsWithOptions(request, headers, runtime);
  }

  /**
   * ListEnvironments
   * 
   * @param request - ListEnvironmentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEnvironmentsResponse
   */
  async listEnvironmentsWithOptions(request: ListEnvironmentsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListEnvironmentsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aliasLike)) {
      query["aliasLike"] = request.aliasLike;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["gatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.gatewayNameLike)) {
      query["gatewayNameLike"] = request.gatewayNameLike;
    }

    if (!Util.isUnset(request.nameLike)) {
      query["nameLike"] = request.nameLike;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEnvironments",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/environments`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListEnvironmentsResponse>(await this.callApi(params, req, runtime), new ListEnvironmentsResponse({}));
  }

  /**
   * ListEnvironments
   * 
   * @param request - ListEnvironmentsRequest
   * @returns ListEnvironmentsResponse
   */
  async listEnvironments(request: ListEnvironmentsRequest): Promise<ListEnvironmentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEnvironmentsWithOptions(request, headers, runtime);
  }

  /**
   * 创建网关路由
   * 
   * @param request - ListGatewayRoutesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGatewayRoutesResponse
   */
  async listGatewayRoutesWithOptions(gatewayId: string, request: ListGatewayRoutesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListGatewayRoutesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.path)) {
      query["path"] = request.path;
    }

    if (!Util.isUnset(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGatewayRoutes",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${OpenApiUtil.getEncodeParam(gatewayId)}/http-routes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListGatewayRoutesResponse>(await this.callApi(params, req, runtime), new ListGatewayRoutesResponse({}));
  }

  /**
   * 创建网关路由
   * 
   * @param request - ListGatewayRoutesRequest
   * @returns ListGatewayRoutesResponse
   */
  async listGatewayRoutes(gatewayId: string, request: ListGatewayRoutesRequest): Promise<ListGatewayRoutesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGatewayRoutesWithOptions(gatewayId, request, headers, runtime);
  }

  /**
   * 查询服务列表
   * 
   * @param request - ListGatewayServicesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGatewayServicesResponse
   */
  async listGatewayServicesWithOptions(gatewayId: string, request: ListGatewayServicesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListGatewayServicesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["sourceType"] = request.sourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGatewayServices",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${OpenApiUtil.getEncodeParam(gatewayId)}/gateway-services`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListGatewayServicesResponse>(await this.callApi(params, req, runtime), new ListGatewayServicesResponse({}));
  }

  /**
   * 查询服务列表
   * 
   * @param request - ListGatewayServicesRequest
   * @returns ListGatewayServicesResponse
   */
  async listGatewayServices(gatewayId: string, request: ListGatewayServicesRequest): Promise<ListGatewayServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGatewayServicesWithOptions(gatewayId, request, headers, runtime);
  }

  /**
   * 获取已经创建的云原生网关列表
   * 
   * @param request - ListGatewaysRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGatewaysResponse
   */
  async listGatewaysWithOptions(request: ListGatewaysRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListGatewaysResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["gatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGateways",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListGatewaysResponse>(await this.callApi(params, req, runtime), new ListGatewaysResponse({}));
  }

  /**
   * 获取已经创建的云原生网关列表
   * 
   * @param request - ListGatewaysRequest
   * @returns ListGatewaysResponse
   */
  async listGateways(request: ListGatewaysRequest): Promise<ListGatewaysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGatewaysWithOptions(request, headers, runtime);
  }

  /**
   * 列举Operation
   * 
   * @param request - ListHttpApiOperationsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHttpApiOperationsResponse
   */
  async listHttpApiOperationsWithOptions(httpApiId: string, request: ListHttpApiOperationsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListHttpApiOperationsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.method)) {
      query["method"] = request.method;
    }

    if (!Util.isUnset(request.nameLike)) {
      query["nameLike"] = request.nameLike;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.pathLike)) {
      query["pathLike"] = request.pathLike;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListHttpApiOperations",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${OpenApiUtil.getEncodeParam(httpApiId)}/operations`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListHttpApiOperationsResponse>(await this.callApi(params, req, runtime), new ListHttpApiOperationsResponse({}));
  }

  /**
   * 列举Operation
   * 
   * @param request - ListHttpApiOperationsRequest
   * @returns ListHttpApiOperationsResponse
   */
  async listHttpApiOperations(httpApiId: string, request: ListHttpApiOperationsRequest): Promise<ListHttpApiOperationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listHttpApiOperationsWithOptions(httpApiId, request, headers, runtime);
  }

  /**
   * 列举HTTP API
   * 
   * @param request - ListHttpApisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHttpApisResponse
   */
  async listHttpApisWithOptions(request: ListHttpApisRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListHttpApisResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.publishedOnly)) {
      query["publishedOnly"] = request.publishedOnly;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListHttpApis",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListHttpApisResponse>(await this.callApi(params, req, runtime), new ListHttpApisResponse({}));
  }

  /**
   * 列举HTTP API
   * 
   * @param request - ListHttpApisRequest
   * @returns ListHttpApisResponse
   */
  async listHttpApis(request: ListHttpApisRequest): Promise<ListHttpApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listHttpApisWithOptions(request, headers, runtime);
  }

  /**
   * 发布路由
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OfflineGatewayRouteResponse
   */
  async offlineGatewayRouteWithOptions(gatewayId: string, gatewayRouteId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<OfflineGatewayRouteResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "OfflineGatewayRoute",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${OpenApiUtil.getEncodeParam(gatewayId)}/http-routes/${OpenApiUtil.getEncodeParam(gatewayRouteId)}/offline`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<OfflineGatewayRouteResponse>(await this.callApi(params, req, runtime), new OfflineGatewayRouteResponse({}));
  }

  /**
   * 发布路由
   * @returns OfflineGatewayRouteResponse
   */
  async offlineGatewayRoute(gatewayId: string, gatewayRouteId: string): Promise<OfflineGatewayRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.offlineGatewayRouteWithOptions(gatewayId, gatewayRouteId, headers, runtime);
  }

  /**
   * 下线已发布的HTTP API
   * 
   * @param request - OfflineHttpApiRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OfflineHttpApiResponse
   */
  async offlineHttpApiWithOptions(httpApiId: string, request: OfflineHttpApiRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<OfflineHttpApiResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.environmentId)) {
      body["environmentId"] = request.environmentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "OfflineHttpApi",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${OpenApiUtil.getEncodeParam(httpApiId)}/offline`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<OfflineHttpApiResponse>(await this.callApi(params, req, runtime), new OfflineHttpApiResponse({}));
  }

  /**
   * 下线已发布的HTTP API
   * 
   * @param request - OfflineHttpApiRequest
   * @returns OfflineHttpApiResponse
   */
  async offlineHttpApi(httpApiId: string, request: OfflineHttpApiRequest): Promise<OfflineHttpApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.offlineHttpApiWithOptions(httpApiId, request, headers, runtime);
  }

  /**
   * 发布路由
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishGatewayRouteResponse
   */
  async publishGatewayRouteWithOptions(gatewayId: string, gatewayRouteId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PublishGatewayRouteResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "PublishGatewayRoute",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${OpenApiUtil.getEncodeParam(gatewayId)}/http-routes/${OpenApiUtil.getEncodeParam(gatewayRouteId)}/publish`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PublishGatewayRouteResponse>(await this.callApi(params, req, runtime), new PublishGatewayRouteResponse({}));
  }

  /**
   * 发布路由
   * @returns PublishGatewayRouteResponse
   */
  async publishGatewayRoute(gatewayId: string, gatewayRouteId: string): Promise<PublishGatewayRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishGatewayRouteWithOptions(gatewayId, gatewayRouteId, headers, runtime);
  }

  /**
   * 发布HTTP API
   * 
   * @param request - PublishHttpApiRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishHttpApiResponse
   */
  async publishHttpApiWithOptions(httpApiId: string, request: PublishHttpApiRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PublishHttpApiResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.allowOverwrite)) {
      body["allowOverwrite"] = request.allowOverwrite;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.environment)) {
      body["environment"] = request.environment;
    }

    if (!Util.isUnset(request.revisionId)) {
      body["revisionId"] = request.revisionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PublishHttpApi",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${OpenApiUtil.getEncodeParam(httpApiId)}/publish`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PublishHttpApiResponse>(await this.callApi(params, req, runtime), new PublishHttpApiResponse({}));
  }

  /**
   * 发布HTTP API
   * 
   * @param request - PublishHttpApiRequest
   * @returns PublishHttpApiResponse
   */
  async publishHttpApi(httpApiId: string, request: PublishHttpApiRequest): Promise<PublishHttpApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishHttpApiWithOptions(httpApiId, request, headers, runtime);
  }

  /**
   * UpdateDomain
   * 
   * @param request - UpdateDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDomainResponse
   */
  async updateDomainWithOptions(domainId: string, request: UpdateDomainRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateDomainResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.caCertIndentifier)) {
      body["caCertIndentifier"] = request.caCertIndentifier;
    }

    if (!Util.isUnset(request.certIndentifier)) {
      body["certIndentifier"] = request.certIndentifier;
    }

    if (!Util.isUnset(request.forceHttps)) {
      body["forceHttps"] = request.forceHttps;
    }

    if (!Util.isUnset(request.http2Option)) {
      body["http2Option"] = request.http2Option;
    }

    if (!Util.isUnset(request.protocol)) {
      body["protocol"] = request.protocol;
    }

    if (!Util.isUnset(request.tlsMax)) {
      body["tlsMax"] = request.tlsMax;
    }

    if (!Util.isUnset(request.tlsMin)) {
      body["tlsMin"] = request.tlsMin;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDomain",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/domains/${OpenApiUtil.getEncodeParam(domainId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateDomainResponse>(await this.callApi(params, req, runtime), new UpdateDomainResponse({}));
  }

  /**
   * UpdateDomain
   * 
   * @param request - UpdateDomainRequest
   * @returns UpdateDomainResponse
   */
  async updateDomain(domainId: string, request: UpdateDomainRequest): Promise<UpdateDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDomainWithOptions(domainId, request, headers, runtime);
  }

  /**
   * UpdateEnvironment
   * 
   * @param request - UpdateEnvironmentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEnvironmentResponse
   */
  async updateEnvironmentWithOptions(environmentId: string, request: UpdateEnvironmentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateEnvironmentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alias)) {
      body["alias"] = request.alias;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateEnvironment",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/environments/${OpenApiUtil.getEncodeParam(environmentId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateEnvironmentResponse>(await this.callApi(params, req, runtime), new UpdateEnvironmentResponse({}));
  }

  /**
   * UpdateEnvironment
   * 
   * @param request - UpdateEnvironmentRequest
   * @returns UpdateEnvironmentResponse
   */
  async updateEnvironment(environmentId: string, request: UpdateEnvironmentRequest): Promise<UpdateEnvironmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateEnvironmentWithOptions(environmentId, request, headers, runtime);
  }

  /**
   * 创建网关路由
   * 
   * @param request - UpdateGatewayRouteRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayRouteResponse
   */
  async updateGatewayRouteWithOptions(gatewayId: string, gatewayRouteId: string, request: UpdateGatewayRouteRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateGatewayRouteResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.backendConfig)) {
      body["backendConfig"] = request.backendConfig;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.domainConfig)) {
      body["domainConfig"] = request.domainConfig;
    }

    if (!Util.isUnset(request.match)) {
      body["match"] = request.match;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGatewayRoute",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${OpenApiUtil.getEncodeParam(gatewayId)}/http-routes/${OpenApiUtil.getEncodeParam(gatewayRouteId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateGatewayRouteResponse>(await this.callApi(params, req, runtime), new UpdateGatewayRouteResponse({}));
  }

  /**
   * 创建网关路由
   * 
   * @param request - UpdateGatewayRouteRequest
   * @returns UpdateGatewayRouteResponse
   */
  async updateGatewayRoute(gatewayId: string, gatewayRouteId: string, request: UpdateGatewayRouteRequest): Promise<UpdateGatewayRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateGatewayRouteWithOptions(gatewayId, gatewayRouteId, request, headers, runtime);
  }

  /**
   * 更新服务
   * 
   * @param request - UpdateGatewayServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayServiceResponse
   */
  async updateGatewayServiceWithOptions(gatewayId: string, gatewayServiceId: string, request: UpdateGatewayServiceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateGatewayServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.addresses)) {
      body["addresses"] = request.addresses;
    }

    if (!Util.isUnset(request.port)) {
      body["port"] = request.port;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGatewayService",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${OpenApiUtil.getEncodeParam(gatewayId)}/gateway-services/${OpenApiUtil.getEncodeParam(gatewayServiceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateGatewayServiceResponse>(await this.callApi(params, req, runtime), new UpdateGatewayServiceResponse({}));
  }

  /**
   * 更新服务
   * 
   * @param request - UpdateGatewayServiceRequest
   * @returns UpdateGatewayServiceResponse
   */
  async updateGatewayService(gatewayId: string, gatewayServiceId: string, request: UpdateGatewayServiceRequest): Promise<UpdateGatewayServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateGatewayServiceWithOptions(gatewayId, gatewayServiceId, request, headers, runtime);
  }

  /**
   * 更新服务版本
   * 
   * @param request - UpdateGatewayServiceVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayServiceVersionResponse
   */
  async updateGatewayServiceVersionWithOptions(gatewayId: string, gatewayServiceId: string, name: string, request: UpdateGatewayServiceVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateGatewayServiceVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labels)) {
      body["labels"] = request.labels;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGatewayServiceVersion",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${OpenApiUtil.getEncodeParam(gatewayId)}/gateway-services/${OpenApiUtil.getEncodeParam(gatewayServiceId)}/service-versions/${OpenApiUtil.getEncodeParam(name)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateGatewayServiceVersionResponse>(await this.callApi(params, req, runtime), new UpdateGatewayServiceVersionResponse({}));
  }

  /**
   * 更新服务版本
   * 
   * @param request - UpdateGatewayServiceVersionRequest
   * @returns UpdateGatewayServiceVersionResponse
   */
  async updateGatewayServiceVersion(gatewayId: string, gatewayServiceId: string, name: string, request: UpdateGatewayServiceVersionRequest): Promise<UpdateGatewayServiceVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateGatewayServiceVersionWithOptions(gatewayId, gatewayServiceId, name, request, headers, runtime);
  }

  /**
   * 更新HTTP API
   * 
   * @param request - UpdateHttpApiRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHttpApiResponse
   */
  async updateHttpApiWithOptions(httpApiId: string, request: UpdateHttpApiRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateHttpApiResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.basePath)) {
      body["basePath"] = request.basePath;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.protocols)) {
      body["protocols"] = request.protocols;
    }

    if (!Util.isUnset(request.versionConfig)) {
      body["versionConfig"] = request.versionConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateHttpApi",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${OpenApiUtil.getEncodeParam(httpApiId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateHttpApiResponse>(await this.callApi(params, req, runtime), new UpdateHttpApiResponse({}));
  }

  /**
   * 更新HTTP API
   * 
   * @param request - UpdateHttpApiRequest
   * @returns UpdateHttpApiResponse
   */
  async updateHttpApi(httpApiId: string, request: UpdateHttpApiRequest): Promise<UpdateHttpApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateHttpApiWithOptions(httpApiId, request, headers, runtime);
  }

  /**
   * 更新Operation
   * 
   * @param request - UpdateHttpApiOperationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHttpApiOperationResponse
   */
  async updateHttpApiOperationWithOptions(httpApiId: string, operationId: string, request: UpdateHttpApiOperationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateHttpApiOperationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operation)) {
      body["operation"] = request.operation;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateHttpApiOperation",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${OpenApiUtil.getEncodeParam(httpApiId)}/operations/${OpenApiUtil.getEncodeParam(operationId)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateHttpApiOperationResponse>(await this.callApi(params, req, runtime), new UpdateHttpApiOperationResponse({}));
  }

  /**
   * 更新Operation
   * 
   * @param request - UpdateHttpApiOperationRequest
   * @returns UpdateHttpApiOperationResponse
   */
  async updateHttpApiOperation(httpApiId: string, operationId: string, request: UpdateHttpApiOperationRequest): Promise<UpdateHttpApiOperationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateHttpApiOperationWithOptions(httpApiId, operationId, request, headers, runtime);
  }

  /**
   * 更新服务来源
   * 
   * @param request - UpdateServiceSourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceSourceResponse
   */
  async updateServiceSourceWithOptions(gatewayId: string, serviceSourceId: string, request: UpdateServiceSourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateServiceSourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.k8sServiceSourceConfig)) {
      body["k8sServiceSourceConfig"] = request.k8sServiceSourceConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateServiceSource",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${OpenApiUtil.getEncodeParam(gatewayId)}/service-sources/${OpenApiUtil.getEncodeParam(serviceSourceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateServiceSourceResponse>(await this.callApi(params, req, runtime), new UpdateServiceSourceResponse({}));
  }

  /**
   * 更新服务来源
   * 
   * @param request - UpdateServiceSourceRequest
   * @returns UpdateServiceSourceResponse
   */
  async updateServiceSource(gatewayId: string, serviceSourceId: string, request: UpdateServiceSourceRequest): Promise<UpdateServiceSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceSourceWithOptions(gatewayId, serviceSourceId, request, headers, runtime);
  }

}
