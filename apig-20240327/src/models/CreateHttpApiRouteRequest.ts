// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiDeployConfig } from "./HttpApiDeployConfig";
import { HttpRouteMatch } from "./HttpRouteMatch";
import { HttpApiPolicyConfigs } from "./HttpApiPolicyConfigs";
import { HttpDubboTranscoder } from "./HttpDubboTranscoder";


export class CreateHttpApiRouteRequestBackendConfigServices extends $dara.Model {
  /**
   * @remarks
   * The service group. Used in the HTTP-to-Dubbo conversion scenario.
   * 
   * @example
   * DEFAULT_GROUP
   */
  groupName?: string;
  /**
   * @remarks
   * The HTTP-to-Dubbo protocol conversion configuration. Only supported for SingleService MSE_NACOS DUBBO backends of HTTP APIs.
   * 
   * @example
   * {"dubboServiceName":"com.alibaba.nacos.example.dubbo.service.DemoService","dubboServiceVersion":"1.0.0","dubboServiceGroup":"DEV","methodMapList":[{"dubboMethodName":"sayName","httpMethod":"ALL_GET","methodPath":"/dubbo/sayName","passThroughAllHeaders":"PASS_ALL"}]}
   */
  httpDubboTranscoder?: HttpDubboTranscoder;
  /**
   * @remarks
   * The target model name. This field is shared by multiple model backend scenarios. The specific routing or model rewrite semantics are determined by backendConfig.scene. This field is required for the SemanticRouter scenario. If not specified in the AiAutoRouter scenario, the default model of the AI service is used.
   * 
   * @example
   * qwen-plus
   */
  modelName?: string;
  /**
   * @remarks
   * The service namespace. Used in the HTTP-to-Dubbo conversion scenario.
   * 
   * @example
   * public
   */
  namespace?: string;
  /**
   * @remarks
   * The service port. Do not specify this parameter for dynamic ports.
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
   * The service ID.
   * 
   * @example
   * svc-crbgq0dlhtgr***
   */
  serviceId?: string;
  /**
   * @remarks
   * The service source type. Used in the HTTP-to-Dubbo conversion scenario.
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
   * The traffic ratio percentage value.
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
   * - MultiServiceByRatio: multiple services with ratio-based canary release.
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
   * The route description.
   * 
   * @example
   * User login route
   */
  description?: string;
  /**
   * @remarks
   * The domain name IDs.
   */
  domainIds?: string[];
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-cpqnr6tlhtgubcv***
   */
  environmentId?: string;
  /**
   * @remarks
   * The route match rule.
   */
  match?: HttpRouteMatch;
  /**
   * @remarks
   * The MCP route configuration.
   */
  mcpRouteConfig?: CreateHttpApiRouteRequestMcpRouteConfig;
  /**
   * @remarks
   * The route name.
   * 
   * @example
   * login
   */
  name?: string;
  /**
   * @remarks
   * The policy type.
   */
  policyConfigs?: HttpApiPolicyConfigs[];
  static names(): { [key: string]: string } {
    return {
      backendConfig: 'backendConfig',
      deployConfigs: 'deployConfigs',
      description: 'description',
      domainIds: 'domainIds',
      environmentId: 'environmentId',
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
      domainIds: { 'type': 'array', 'itemType': 'string' },
      environmentId: 'string',
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

