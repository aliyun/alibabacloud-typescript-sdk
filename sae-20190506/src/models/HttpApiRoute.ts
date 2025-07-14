// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpApiRouteDomains extends $dara.Model {
  domainId?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'DomainId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      domainName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiRoutePoliciesFallbackDestinations extends $dara.Model {
  appId?: string;
  appName?: string;
  serviceId?: string;
  serviceName?: string;
  servicePort?: number;
  serviceProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      servicePort: 'ServicePort',
      serviceProtocol: 'ServiceProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      serviceId: 'string',
      serviceName: 'string',
      servicePort: 'number',
      serviceProtocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiRoutePoliciesFallback extends $dara.Model {
  destinations?: HttpApiRoutePoliciesFallbackDestinations[];
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      destinations: 'Destinations',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinations: { 'type': 'array', 'itemType': HttpApiRoutePoliciesFallbackDestinations },
      enable: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.destinations)) {
      $dara.Model.validateArray(this.destinations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiRoutePoliciesRetry extends $dara.Model {
  attempts?: number;
  /**
   * @example
   * true/false
   */
  enable?: boolean;
  httpCodes?: string[];
  retryOn?: string[];
  static names(): { [key: string]: string } {
    return {
      attempts: 'Attempts',
      enable: 'Enable',
      httpCodes: 'HttpCodes',
      retryOn: 'RetryOn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attempts: 'number',
      enable: 'boolean',
      httpCodes: { 'type': 'array', 'itemType': 'string' },
      retryOn: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.httpCodes)) {
      $dara.Model.validateArray(this.httpCodes);
    }
    if(Array.isArray(this.retryOn)) {
      $dara.Model.validateArray(this.retryOn);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiRoutePoliciesTimeout extends $dara.Model {
  enable?: boolean;
  /**
   * @example
   * s
   */
  timeUnit?: string;
  unitNum?: number;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      timeUnit: 'TimeUnit',
      unitNum: 'UnitNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      timeUnit: 'string',
      unitNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiRoutePolicies extends $dara.Model {
  fallback?: HttpApiRoutePoliciesFallback;
  retry?: HttpApiRoutePoliciesRetry;
  timeout?: HttpApiRoutePoliciesTimeout;
  static names(): { [key: string]: string } {
    return {
      fallback: 'Fallback',
      retry: 'Retry',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fallback: HttpApiRoutePoliciesFallback,
      retry: HttpApiRoutePoliciesRetry,
      timeout: HttpApiRoutePoliciesTimeout,
    };
  }

  validate() {
    if(this.fallback && typeof (this.fallback as any).validate === 'function') {
      (this.fallback as any).validate();
    }
    if(this.retry && typeof (this.retry as any).validate === 'function') {
      (this.retry as any).validate();
    }
    if(this.timeout && typeof (this.timeout as any).validate === 'function') {
      (this.timeout as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiRoutePredicatesHeaderPredicates extends $dara.Model {
  name?: string;
  /**
   * @example
   * Prefix/Exact/Regex
   */
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class HttpApiRoutePredicatesPathPredicates extends $dara.Model {
  ignoreCase?: boolean;
  path?: string;
  /**
   * @example
   * Prefix/Exact/Regex
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ignoreCase: 'IgnoreCase',
      path: 'Path',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoreCase: 'boolean',
      path: 'string',
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

export class HttpApiRoutePredicatesQueryPredicates extends $dara.Model {
  name?: string;
  /**
   * @example
   * Prefix/Exact/Regex
   */
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class HttpApiRoutePredicates extends $dara.Model {
  headerPredicates?: HttpApiRoutePredicatesHeaderPredicates[];
  methodPredicates?: string[];
  pathPredicates?: HttpApiRoutePredicatesPathPredicates;
  queryPredicates?: HttpApiRoutePredicatesQueryPredicates[];
  static names(): { [key: string]: string } {
    return {
      headerPredicates: 'HeaderPredicates',
      methodPredicates: 'MethodPredicates',
      pathPredicates: 'PathPredicates',
      queryPredicates: 'QueryPredicates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerPredicates: { 'type': 'array', 'itemType': HttpApiRoutePredicatesHeaderPredicates },
      methodPredicates: { 'type': 'array', 'itemType': 'string' },
      pathPredicates: HttpApiRoutePredicatesPathPredicates,
      queryPredicates: { 'type': 'array', 'itemType': HttpApiRoutePredicatesQueryPredicates },
    };
  }

  validate() {
    if(Array.isArray(this.headerPredicates)) {
      $dara.Model.validateArray(this.headerPredicates);
    }
    if(Array.isArray(this.methodPredicates)) {
      $dara.Model.validateArray(this.methodPredicates);
    }
    if(this.pathPredicates && typeof (this.pathPredicates as any).validate === 'function') {
      (this.pathPredicates as any).validate();
    }
    if(Array.isArray(this.queryPredicates)) {
      $dara.Model.validateArray(this.queryPredicates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiRouteServices extends $dara.Model {
  appId?: string;
  appName?: string;
  serviceId?: string;
  serviceName?: string;
  servicePort?: number;
  /**
   * @example
   * HTTP
   */
  serviceProtocol?: string;
  /**
   * @example
   * 90
   */
  serviceWeight?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      servicePort: 'ServicePort',
      serviceProtocol: 'ServiceProtocol',
      serviceWeight: 'ServiceWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      serviceId: 'string',
      serviceName: 'string',
      servicePort: 'number',
      serviceProtocol: 'string',
      serviceWeight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiRoute extends $dara.Model {
  /**
   * @example
   * intranet/internet
   */
  addressType?: string;
  /**
   * @example
   * Deploying/NotDeployed/Undeploying/Deployed
   */
  deployStatus?: string;
  /**
   * @example
   * Single/Multiple/VersionOriented
   */
  destinationType?: string;
  domains?: HttpApiRouteDomains[];
  environmentId?: string;
  gatewayId?: string;
  httpApiId?: string;
  /**
   * @example
   * Http
   */
  httpApiName?: string;
  /**
   * @example
   * Http
   */
  httpApiType?: string;
  /**
   * @example
   * 1
   */
  ingressId?: number;
  nacosInstanceId?: string;
  /**
   * @example
   * test
   */
  nacosNamespaceId?: string;
  name?: string;
  namespaceId?: string;
  policies?: HttpApiRoutePolicies;
  predicates?: HttpApiRoutePredicates;
  routeId?: string;
  services?: HttpApiRouteServices[];
  /**
   * @example
   * SAE_NACOS/SAE_K8S_SERVICE/MSE_NACOS
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      addressType: 'AddressType',
      deployStatus: 'DeployStatus',
      destinationType: 'DestinationType',
      domains: 'Domains',
      environmentId: 'EnvironmentId',
      gatewayId: 'GatewayId',
      httpApiId: 'HttpApiId',
      httpApiName: 'HttpApiName',
      httpApiType: 'HttpApiType',
      ingressId: 'IngressId',
      nacosInstanceId: 'NacosInstanceId',
      nacosNamespaceId: 'NacosNamespaceId',
      name: 'Name',
      namespaceId: 'NamespaceId',
      policies: 'Policies',
      predicates: 'Predicates',
      routeId: 'RouteId',
      services: 'Services',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressType: 'string',
      deployStatus: 'string',
      destinationType: 'string',
      domains: { 'type': 'array', 'itemType': HttpApiRouteDomains },
      environmentId: 'string',
      gatewayId: 'string',
      httpApiId: 'string',
      httpApiName: 'string',
      httpApiType: 'string',
      ingressId: 'number',
      nacosInstanceId: 'string',
      nacosNamespaceId: 'string',
      name: 'string',
      namespaceId: 'string',
      policies: HttpApiRoutePolicies,
      predicates: HttpApiRoutePredicates,
      routeId: 'string',
      services: { 'type': 'array', 'itemType': HttpApiRouteServices },
      sourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    if(this.policies && typeof (this.policies as any).validate === 'function') {
      (this.policies as any).validate();
    }
    if(this.predicates && typeof (this.predicates as any).validate === 'function') {
      (this.predicates as any).validate();
    }
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

