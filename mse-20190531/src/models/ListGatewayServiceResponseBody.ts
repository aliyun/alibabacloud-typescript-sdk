// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyLoadBalancerSettingsConsistentHashLBConfigHttpCookie extends $dara.Model {
  /**
   * @remarks
   * The name of the cookie.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The path of the cookie.
   * 
   * @example
   * /path
   */
  path?: string;
  /**
   * @remarks
   * The lifecycle of the cookie.
   * 
   * @example
   * 360
   */
  ttl?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      path: 'Path',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      path: 'string',
      ttl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyLoadBalancerSettingsConsistentHashLBConfig extends $dara.Model {
  /**
   * @remarks
   * The type based on which consistent hashing load balancing is performed.
   * 
   * *   HEADER
   * *   COOKIE
   * *   SOURCE_IP
   * *   QUERY_PARAMETER
   * 
   * @example
   * HEADER
   */
  consistentHashLBType?: string;
  /**
   * @remarks
   * The cookie-based load balancing parameters.
   */
  httpCookie?: ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyLoadBalancerSettingsConsistentHashLBConfigHttpCookie;
  /**
   * @remarks
   * The minimum value of the hash ring.
   * 
   * @example
   * 10000
   */
  minimumRingSize?: number;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * param
   */
  parameterName?: string;
  static names(): { [key: string]: string } {
    return {
      consistentHashLBType: 'ConsistentHashLBType',
      httpCookie: 'HttpCookie',
      minimumRingSize: 'MinimumRingSize',
      parameterName: 'ParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consistentHashLBType: 'string',
      httpCookie: ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyLoadBalancerSettingsConsistentHashLBConfigHttpCookie,
      minimumRingSize: 'number',
      parameterName: 'string',
    };
  }

  validate() {
    if(this.httpCookie && typeof (this.httpCookie as any).validate === 'function') {
      (this.httpCookie as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyLoadBalancerSettings extends $dara.Model {
  /**
   * @remarks
   * The consistent hashing settings.
   */
  consistentHashLBConfig?: ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyLoadBalancerSettingsConsistentHashLBConfig;
  /**
   * @remarks
   * The load balancing type.
   * 
   * *   ROUND_ROBIN
   * *   LEAST_CONN
   * *   RANDOM
   * *   CONSISTENT_HASH
   * 
   * @example
   * RANDOM
   */
  loadbalancerType?: string;
  /**
   * @remarks
   * The prefetch time of the least connection load balancing.
   * 
   * @example
   * 10
   */
  warmupDuration?: number;
  static names(): { [key: string]: string } {
    return {
      consistentHashLBConfig: 'ConsistentHashLBConfig',
      loadbalancerType: 'LoadbalancerType',
      warmupDuration: 'WarmupDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consistentHashLBConfig: ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyLoadBalancerSettingsConsistentHashLBConfig,
      loadbalancerType: 'string',
      warmupDuration: 'number',
    };
  }

  validate() {
    if(this.consistentHashLBConfig && typeof (this.consistentHashLBConfig as any).validate === 'function') {
      (this.consistentHashLBConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyTls extends $dara.Model {
  /**
   * @remarks
   * The public key of the CA certificate .
   * 
   * @example
   * content
   */
  caCertContent?: string;
  /**
   * @remarks
   * The ID of the certification authority (CA) certificate.
   * 
   * @example
   * 5******-cn-hangzhou
   */
  caCertId?: string;
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 5******-cn-hangzhou
   */
  certId?: string;
  /**
   * @remarks
   * The TLS mode.
   * 
   * *   DISABLE
   * *   SIMPLE
   * *   MUTUAL
   * *   ISTIO_MUTUAL
   * 
   * @example
   * SIMPLE
   */
  mode?: string;
  /**
   * @remarks
   * The Server Name Indication (SNI) value.
   * 
   * @example
   * name-sni
   */
  sni?: string;
  /**
   * @remarks
   * The array of subject aliases.
   */
  subjectAltNames?: string[];
  static names(): { [key: string]: string } {
    return {
      caCertContent: 'CaCertContent',
      caCertId: 'CaCertId',
      certId: 'CertId',
      mode: 'Mode',
      sni: 'Sni',
      subjectAltNames: 'SubjectAltNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCertContent: 'string',
      caCertId: 'string',
      certId: 'string',
      mode: 'string',
      sni: 'string',
      subjectAltNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.subjectAltNames)) {
      $dara.Model.validateArray(this.subjectAltNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicy extends $dara.Model {
  /**
   * @remarks
   * The load balancing settings.
   */
  loadBalancerSettings?: ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyLoadBalancerSettings;
  /**
   * @remarks
   * The Transport Layer Security (TLS).
   */
  tls?: ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyTls;
  static names(): { [key: string]: string } {
    return {
      loadBalancerSettings: 'LoadBalancerSettings',
      tls: 'Tls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerSettings: ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyLoadBalancerSettings,
      tls: ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyTls,
    };
  }

  validate() {
    if(this.loadBalancerSettings && typeof (this.loadBalancerSettings as any).validate === 'function') {
      (this.loadBalancerSettings as any).validate();
    }
    if(this.tls && typeof (this.tls as any).validate === 'function') {
      (this.tls as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayServiceResponseBodyDataResultHealthCheckInfo extends $dara.Model {
  /**
   * @remarks
   * Indicates whether checks are performed.
   * 
   * @example
   * true
   */
  check?: boolean;
  /**
   * @remarks
   * The expected status of the health check.
   */
  expectedStatuses?: number[];
  /**
   * @remarks
   * The threshold for healthy instances.
   * 
   * @example
   * 2
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The endpoint of the HTTP request for the health check.
   * 
   * @example
   * http://172.168.0.1
   */
  httpHost?: string;
  /**
   * @remarks
   * The path to which the HTTP request for the health check is sent.
   * 
   * @example
   * /health
   */
  httpPath?: string;
  /**
   * @remarks
   * The health check interval.
   * 
   * @example
   * 2
   */
  interval?: number;
  /**
   * @remarks
   * The network protocol.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * The timeout period.
   * 
   * @example
   * 2
   */
  timeout?: number;
  /**
   * @remarks
   * The threshold for unhealthy instances.
   * 
   * @example
   * 2
   */
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      check: 'Check',
      expectedStatuses: 'ExpectedStatuses',
      healthyThreshold: 'HealthyThreshold',
      httpHost: 'HttpHost',
      httpPath: 'HttpPath',
      interval: 'Interval',
      protocol: 'Protocol',
      timeout: 'Timeout',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      check: 'boolean',
      expectedStatuses: { 'type': 'array', 'itemType': 'number' },
      healthyThreshold: 'number',
      httpHost: 'string',
      httpPath: 'string',
      interval: 'number',
      protocol: 'string',
      timeout: 'number',
      unhealthyThreshold: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.expectedStatuses)) {
      $dara.Model.validateArray(this.expectedStatuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayServiceResponseBodyDataResultVersions extends $dara.Model {
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * v1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListGatewayServiceResponseBodyDataResult extends $dara.Model {
  dnsServerList?: string[];
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
   * The traffic management policy.
   */
  gatewayTrafficPolicy?: ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicy;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-5017305290e14centbrveca****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-01-07 18:07:57
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2022-01-07 18:07:57
   */
  gmtModified?: string;
  /**
   * @remarks
   * The group.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The health status.
   * 
   * *   Health
   * *   Unhealthy
   * *   Unknown
   * 
   * @example
   * Unhealthy
   */
  healehStatus?: string;
  /**
   * @remarks
   * Indicates whether health checks are performed.
   * 
   * @example
   * true
   */
  healthCheck?: boolean;
  /**
   * @remarks
   * The information about health checks.
   */
  healthCheckInfo?: ListGatewayServiceResponseBodyDataResultHealthCheckInfo;
  /**
   * @remarks
   * The health status.
   * 
   * *   Health
   * *   Unhealthy
   * *   Unknown
   * 
   * @example
   * Unhealthy
   */
  healthStatus?: string;
  /**
   * @remarks
   * The ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The list of IP addresses.
   */
  ips?: string[];
  /**
   * @remarks
   * The metadata or IP addresses of the service.
   * 
   * @example
   * {}
   */
  metaInfo?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * public
   */
  namespace?: string;
  /**
   * @remarks
   * The port array.
   */
  ports?: number[];
  serviceFQDN?: string;
  /**
   * @remarks
   * The name of the service that is registered with the service registry.
   * 
   * @example
   * test
   */
  serviceNameInRegistry?: string;
  /**
   * @remarks
   * The service port number.
   * 
   * @example
   * 80
   */
  servicePort?: number;
  /**
   * @remarks
   * The protocol of the service.
   * 
   * @example
   * HTTP
   */
  serviceProtocol?: string;
  /**
   * @remarks
   * The ID of the service source.
   * 
   * @example
   * 2
   */
  sourceId?: number;
  /**
   * @remarks
   * The source type.
   * 
   * @example
   * MSE
   */
  sourceType?: string;
  /**
   * @remarks
   * The array of endpoints of unhealthy instances.
   */
  unhealthyEndpoints?: string[];
  /**
   * @remarks
   * The service version.
   */
  versions?: ListGatewayServiceResponseBodyDataResultVersions[];
  static names(): { [key: string]: string } {
    return {
      dnsServerList: 'DnsServerList',
      gatewayId: 'GatewayId',
      gatewayTrafficPolicy: 'GatewayTrafficPolicy',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      groupName: 'GroupName',
      healehStatus: 'HealehStatus',
      healthCheck: 'HealthCheck',
      healthCheckInfo: 'HealthCheckInfo',
      healthStatus: 'HealthStatus',
      id: 'Id',
      ips: 'Ips',
      metaInfo: 'MetaInfo',
      name: 'Name',
      namespace: 'Namespace',
      ports: 'Ports',
      serviceFQDN: 'ServiceFQDN',
      serviceNameInRegistry: 'ServiceNameInRegistry',
      servicePort: 'ServicePort',
      serviceProtocol: 'ServiceProtocol',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      unhealthyEndpoints: 'UnhealthyEndpoints',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsServerList: { 'type': 'array', 'itemType': 'string' },
      gatewayId: 'number',
      gatewayTrafficPolicy: ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicy,
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      groupName: 'string',
      healehStatus: 'string',
      healthCheck: 'boolean',
      healthCheckInfo: ListGatewayServiceResponseBodyDataResultHealthCheckInfo,
      healthStatus: 'string',
      id: 'number',
      ips: { 'type': 'array', 'itemType': 'string' },
      metaInfo: 'string',
      name: 'string',
      namespace: 'string',
      ports: { 'type': 'array', 'itemType': 'number' },
      serviceFQDN: 'string',
      serviceNameInRegistry: 'string',
      servicePort: 'number',
      serviceProtocol: 'string',
      sourceId: 'number',
      sourceType: 'string',
      unhealthyEndpoints: { 'type': 'array', 'itemType': 'string' },
      versions: { 'type': 'array', 'itemType': ListGatewayServiceResponseBodyDataResultVersions },
    };
  }

  validate() {
    if(Array.isArray(this.dnsServerList)) {
      $dara.Model.validateArray(this.dnsServerList);
    }
    if(this.gatewayTrafficPolicy && typeof (this.gatewayTrafficPolicy as any).validate === 'function') {
      (this.gatewayTrafficPolicy as any).validate();
    }
    if(this.healthCheckInfo && typeof (this.healthCheckInfo as any).validate === 'function') {
      (this.healthCheckInfo as any).validate();
    }
    if(Array.isArray(this.ips)) {
      $dara.Model.validateArray(this.ips);
    }
    if(Array.isArray(this.ports)) {
      $dara.Model.validateArray(this.ports);
    }
    if(Array.isArray(this.unhealthyEndpoints)) {
      $dara.Model.validateArray(this.unhealthyEndpoints);
    }
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayServiceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The data returned.
   */
  result?: ListGatewayServiceResponseBodyDataResult[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 9
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      result: 'Result',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': ListGatewayServiceResponseBodyDataResult },
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListGatewayServiceResponseBodyData;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F46CDBA4-B1EE-5C94-8A48-51C10177****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListGatewayServiceResponseBodyData,
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

