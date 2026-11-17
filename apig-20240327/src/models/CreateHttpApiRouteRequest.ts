// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiDeployConfig } from "./HttpApiDeployConfig";
import { HttpRouteMatch } from "./HttpRouteMatch";
import { HttpApiPolicyConfigs } from "./HttpApiPolicyConfigs";
import { HttpDubboTranscoder } from "./HttpDubboTranscoder";


export class CreateHttpApiRouteRequestBackendConfigServices extends $dara.Model {
  /**
   * @remarks
   * The group of the service. This parameter is used in HTTP-to-Dubbo conversion scenarios.
   * 
   * @example
   * DEFAULT_GROUP
   */
  groupName?: string;
  /**
   * @remarks
   * The HTTP-to-Dubbo protocol conversion configuration. This parameter is supported only for SingleService MSE_NACOS DUBBO backends of HTTP APIs.
   * 
   * @example
   * {"dubboServiceName":"com.alibaba.nacos.example.dubbo.service.DemoService","dubboServiceVersion":"1.0.0","dubboServiceGroup":"DEV","methodMapList":[{"dubboMethodName":"sayName","httpMethod":"ALL_GET","methodPath":"/dubbo/sayName","passThroughAllHeaders":"PASS_ALL"}]}
   */
  httpDubboTranscoder?: HttpDubboTranscoder;
  /**
   * @remarks
   * The name of the target model. This field is shared by multiple existing model backend scenarios. The specific routing or model rewriting semantics are determined by backendConfig.scene. This field is required for the SemanticRouter scenario. If this field is not configured for the AiAutoRouter scenario, the default model of the AI service is used.
   * 
   * @example
   * qwen-plus
   */
  modelName?: string;
  /**
   * @remarks
   * The namespace of the service. This parameter is used in HTTP-to-Dubbo conversion scenarios.
   * 
   * @example
   * public
   */
  namespace?: string;
  /**
   * @remarks
   * The service port. Do not pass this parameter for dynamic ports.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The service protocol. Valid values:
   * - HTTP.
   * - HTTPS.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The ID of the service.
   * 
   * @example
   * svc-crbgq0dlhtgr***
   */
  serviceId?: string;
  /**
   * @remarks
   * The source type of the service. This parameter is used in HTTP-to-Dubbo conversion scenarios.
   * 
   * @example
   * MSE_NACOS
   */
  sourceType?: string;
  /**
   * @remarks
   * The service version. This parameter is valid only in the tag-based scenario.
   * 
   * @example
   * v1
   */
  version?: string;
  /**
   * @remarks
   * The percentage value of the traffic ratio.
   * 
   * @example
   * 49
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      groupName: 'groupName',
      httpDubboTranscoder: 'httpDubboTranscoder',
      modelName: 'modelName',
      namespace: 'namespace',
      port: 'port',
      protocol: 'protocol',
      serviceId: 'serviceId',
      sourceType: 'sourceType',
      version: 'version',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      httpDubboTranscoder: HttpDubboTranscoder,
      modelName: 'string',
      namespace: 'string',
      port: 'number',
      protocol: 'string',
      serviceId: 'string',
      sourceType: 'string',
      version: 'string',
      weight: 'number',
    };
  }

  validate() {
    if(this.httpDubboTranscoder && typeof (this.httpDubboTranscoder as any).validate === 'function') {
      (this.httpDubboTranscoder as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHttpApiRouteRequestBackendConfig extends $dara.Model {
  /**
   * @remarks
   * The backend service scenario. Valid values:
   * - SingleService: single service.
   * - MultiServiceByRatio: canary release for multiple services by ratio.
   * - Mock: mock service.
   * - Redirect: redirect service.
   * 
   * @example
   * SingleService
   */
  scene?: string;
  /**
   * @remarks
   * The list of backend services.
   */
  services?: CreateHttpApiRouteRequestBackendConfigServices[];
  static names(): { [key: string]: string } {
    return {
      scene: 'scene',
      services: 'services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: 'string',
      services: { 'type': 'array', 'itemType': CreateHttpApiRouteRequestBackendConfigServices },
    };
  }

  validate() {
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHttpApiRouteRequestDfpConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the imported ExtProc gRPC service.
   * 
   * @example
   * svc-cr8k0udlhtgt80sh7png
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceId: 'serviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHttpApiRouteRequestMcpRouteConfig extends $dara.Model {
  /**
   * @remarks
   * The exposed URI path.
   * 
   * @example
   * /v1/chat/completions
   */
  exposedUriPath?: string;
  /**
   * @remarks
   * Specifies whether to enable MCP observability. Default value: false.
   * 
   * @example
   * false
   */
  mcpStatisticsEnable?: boolean;
  /**
   * @remarks
   * The service protocol. Valid values:
   * - TCP.
   * - HTTP.
   * - DUBBO.
   * 
   * @example
   * HTTP,HTTPS
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      exposedUriPath: 'exposedUriPath',
      mcpStatisticsEnable: 'mcpStatisticsEnable',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exposedUriPath: 'string',
      mcpStatisticsEnable: 'boolean',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHttpApiRouteRequest extends $dara.Model {
  /**
   * @remarks
   * The backend service configuration of the route.
   */
  backendConfig?: CreateHttpApiRouteRequestBackendConfig;
  /**
   * @remarks
   * The API deployment configuration.
   * 
   * @deprecated
   */
  deployConfigs?: HttpApiDeployConfig[];
  /**
   * @remarks
   * The description of the route.
   * 
   * @example
   * User login route
   */
  description?: string;
  /**
   * @remarks
   * The combination configuration of fixed dynamic forwarding and ExtProc. When you use this parameter, specify only serviceId, and do not specify environmentId or backendConfig.
   */
  dfpConfig?: CreateHttpApiRouteRequestDfpConfig;
  /**
   * @remarks
   * The domain name IDs.
   */
  domainIds?: string[];
  /**
   * @remarks
   * The ID of the environment.
   * 
   * @example
   * env-cpqnr6tlhtgubcv***
   * 
   * @deprecated
   */
  environmentId?: string;
  /**
   * @remarks
   * The ID of the gateway. This parameter replaces the deprecated environment ID to specify the gateway to which the route belongs. If only this parameter is passed, the server uses the unique valid default environment of the gateway. If this parameter and environmentId are passed at the same time, the environment must belong to this gateway.
   * 
   * @example
   * gw-xxx
   */
  gatewayId?: string;
  /**
   * @remarks
   * The match rules of the route.
   */
  match?: HttpRouteMatch;
  /**
   * @remarks
   * The MCP route configuration.
   */
  mcpRouteConfig?: CreateHttpApiRouteRequestMcpRouteConfig;
  /**
   * @remarks
   * The name of the route.
   * 
   * @example
   * login
   */
  name?: string;
  /**
   * @remarks
   * The policy types.
   */
  policyConfigs?: HttpApiPolicyConfigs[];
  static names(): { [key: string]: string } {
    return {
      backendConfig: 'backendConfig',
      deployConfigs: 'deployConfigs',
      description: 'description',
      dfpConfig: 'dfpConfig',
      domainIds: 'domainIds',
      environmentId: 'environmentId',
      gatewayId: 'gatewayId',
      match: 'match',
      mcpRouteConfig: 'mcpRouteConfig',
      name: 'name',
      policyConfigs: 'policyConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendConfig: CreateHttpApiRouteRequestBackendConfig,
      deployConfigs: { 'type': 'array', 'itemType': HttpApiDeployConfig },
      description: 'string',
      dfpConfig: CreateHttpApiRouteRequestDfpConfig,
      domainIds: { 'type': 'array', 'itemType': 'string' },
      environmentId: 'string',
      gatewayId: 'string',
      match: HttpRouteMatch,
      mcpRouteConfig: CreateHttpApiRouteRequestMcpRouteConfig,
      name: 'string',
      policyConfigs: { 'type': 'array', 'itemType': HttpApiPolicyConfigs },
    };
  }

  validate() {
    if(this.backendConfig && typeof (this.backendConfig as any).validate === 'function') {
      (this.backendConfig as any).validate();
    }
    if(Array.isArray(this.deployConfigs)) {
      $dara.Model.validateArray(this.deployConfigs);
    }
    if(this.dfpConfig && typeof (this.dfpConfig as any).validate === 'function') {
      (this.dfpConfig as any).validate();
    }
    if(Array.isArray(this.domainIds)) {
      $dara.Model.validateArray(this.domainIds);
    }
    if(this.match && typeof (this.match as any).validate === 'function') {
      (this.match as any).validate();
    }
    if(this.mcpRouteConfig && typeof (this.mcpRouteConfig as any).validate === 'function') {
      (this.mcpRouteConfig as any).validate();
    }
    if(Array.isArray(this.policyConfigs)) {
      $dara.Model.validateArray(this.policyConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

