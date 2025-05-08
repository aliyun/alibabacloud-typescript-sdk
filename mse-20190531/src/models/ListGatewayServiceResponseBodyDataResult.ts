// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicy } from "./ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicy";
import { ListGatewayServiceResponseBodyDataResultHealthCheckInfo } from "./ListGatewayServiceResponseBodyDataResultHealthCheckInfo";
import { ListGatewayServiceResponseBodyDataResultVersions } from "./ListGatewayServiceResponseBodyDataResultVersions";


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

