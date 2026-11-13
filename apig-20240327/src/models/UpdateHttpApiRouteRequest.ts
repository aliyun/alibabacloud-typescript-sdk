// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpRouteMatch } from "./HttpRouteMatch";
import { HttpApiPolicyConfigs } from "./HttpApiPolicyConfigs";
import { HttpDubboTranscoder } from "./HttpDubboTranscoder";


export class UpdateHttpApiRouteRequestBackendConfigServices extends $dara.Model {
  /**
   * @remarks
   * The service group. Used in HTTP-to-Dubbo conversion scenarios.
   * 
   * @example
   * DEFAULT_GROUP
   */
  groupName?: string;
  /**
   * @remarks
   * The HTTP-to-Dubbo protocol conversion configuration. Only SingleService MSE_NACOS DUBBO backends of HTTP APIs are supported.
   * 
   * @example
   * {"dubboServiceName":"com.alibaba.nacos.example.dubbo.service.DemoService","dubboServiceVersion":"1.0.0","dubboServiceGroup":"DEV","methodMapList":[{"dubboMethodName":"sayName","httpMethod":"ALL_GET","methodPath":"/dubbo/sayName","passThroughAllHeaders":"PASS_ALL"}]}
   */
  httpDubboTranscoder?: HttpDubboTranscoder;
  /**
   * @remarks
   * The target model name. This field is shared by multiple existing model backend scenarios. The specific routing or model rewriting semantics are determined by backendConfig.scene. It must be configured for the SemanticRouter scenario. If it is not configured for the AiAutoRouter scenario, the default model of the AI service is used.
   * 
   * @example
   * qwen-plus
   */
  modelName?: string;
  /**
   * @remarks
   * The service namespace. Used in HTTP-to-Dubbo conversion scenarios.
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
   * The service protocol:
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
   * svc-cr6pk4tlhtgm58e***
   */
  serviceId?: string;
  /**
   * @remarks
   * The service source type. Use MSE_NACOS for HTTP-to-Dubbo conversion scenarios.
   * 
   * @example
   * MSE_NACOS
   */
  sourceType?: string;
  /**
   * @remarks
   * The service version.
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

export class UpdateHttpApiRouteRequestBackendConfig extends $dara.Model {
  /**
   * @remarks
   * The backend service scenario.
   * 
   * @example
   * SingleService
   */
  scene?: string;
  /**
   * @remarks
   * The list of backend services.
   */
  services?: UpdateHttpApiRouteRequestBackendConfigServices[];
  static names(): { [key: string]: string } {
    return {
      scene: 'scene',
      services: 'services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: 'string',
      services: { 'type': 'array', 'itemType': UpdateHttpApiRouteRequestBackendConfigServices },
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

export class UpdateHttpApiRouteRequestDfpConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the ExtProc service mounted to the current route. When updating a fixed DFP route, the value must be consistent with the existing service. Service switching is not supported.
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

export class UpdateHttpApiRouteRequestMcpRouteConfig extends $dara.Model {
  /**
   * @remarks
   * The exposed URI path.
   * 
   * @example
   * /mcp/chat
   */
  exposedUriPath?: string;
  /**
   * @remarks
   * Specifies whether to enable MCP statistics.
   * 
   * @example
   * true
   */
  mcpStatisticsEnable?: boolean;
  /**
   * @remarks
   * The MCP protocol.
   * 
   * @example
   * SSE
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

export class UpdateHttpApiRouteRequest extends $dara.Model {
  /**
   * @remarks
   * The backend service configuration of the route.
   */
  backendConfig?: UpdateHttpApiRouteRequestBackendConfig;
  /**
   * @remarks
   * The route description.
   * 
   * @example
   * Product center service route
   */
  description?: string;
  /**
   * @remarks
   * The current ExtProc service selection for fixed DFP routes. Only edit mounted routes. This parameter cannot be submitted together with backendConfig, mcpRouteConfig, or policyConfigs.
   */
  dfpConfig?: UpdateHttpApiRouteRequestDfpConfig;
  /**
   * @remarks
   * The list of domain name IDs.
   */
  domainIds?: string[];
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-cquqsollhtgid***
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
  mcpRouteConfig?: UpdateHttpApiRouteRequestMcpRouteConfig;
  /**
   * @remarks
   * The route-level policy configuration.
   */
  policyConfigs?: HttpApiPolicyConfigs[];
  static names(): { [key: string]: string } {
    return {
      backendConfig: 'backendConfig',
      description: 'description',
      dfpConfig: 'dfpConfig',
      domainIds: 'domainIds',
      environmentId: 'environmentId',
      match: 'match',
      mcpRouteConfig: 'mcpRouteConfig',
      policyConfigs: 'policyConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendConfig: UpdateHttpApiRouteRequestBackendConfig,
      description: 'string',
      dfpConfig: UpdateHttpApiRouteRequestDfpConfig,
      domainIds: { 'type': 'array', 'itemType': 'string' },
      environmentId: 'string',
      match: HttpRouteMatch,
      mcpRouteConfig: UpdateHttpApiRouteRequestMcpRouteConfig,
      policyConfigs: { 'type': 'array', 'itemType': HttpApiPolicyConfigs },
    };
  }

  validate() {
    if(this.backendConfig && typeof (this.backendConfig as any).validate === 'function') {
      (this.backendConfig as any).validate();
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

