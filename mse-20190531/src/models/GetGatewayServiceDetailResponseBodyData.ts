// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrafficPolicy } from "./TrafficPolicy";
import { GetGatewayServiceDetailResponseBodyDataLabelDetails } from "./GetGatewayServiceDetailResponseBodyDataLabelDetails";
import { GetGatewayServiceDetailResponseBodyDataPortTrafficPolicyList } from "./GetGatewayServiceDetailResponseBodyDataPortTrafficPolicyList";
import { GetGatewayServiceDetailResponseBodyDataVersionDetails } from "./GetGatewayServiceDetailResponseBodyDataVersionDetails";
import { GetGatewayServiceDetailResponseBodyDataVersions } from "./GetGatewayServiceDetailResponseBodyDataVersions";


export class GetGatewayServiceDetailResponseBodyData extends $dara.Model {
  dnsServerList?: string[];
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * @example
   * 1
   */
  gatewayId?: number;
  /**
   * @remarks
   * The traffic policy of the service.
   * 
   * @example
   * {}
   */
  gatewayTrafficPolicy?: TrafficPolicy;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-7ea3da97b96543e19f6c597c****
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
   * The last modification time.
   * 
   * @example
   * 2022-01-07T10:07:57.000+0000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The name of the group.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * Indicates whether the health check is enabled.
   * 
   * @example
   * true
   */
  healthCheck?: string;
  /**
   * @remarks
   * The status of the health check. Valid values:
   * 
   * @example
   * true
   */
  healthStatus?: string;
  /**
   * @remarks
   * The ID of the service.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The IP address of the service.
   */
  ips?: string[];
  /**
   * @remarks
   * The details of the tag.
   */
  labelDetails?: GetGatewayServiceDetailResponseBodyDataLabelDetails[];
  /**
   * @remarks
   * The basic information about the service.
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
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The traffic policy of service ports.
   */
  portTrafficPolicyList?: GetGatewayServiceDetailResponseBodyDataPortTrafficPolicyList[];
  /**
   * @remarks
   * The array of service ports.
   */
  ports?: number[];
  serviceFQDN?: string;
  /**
   * @remarks
   * The name of the service registered with the service registry.
   * 
   * @example
   * test
   */
  serviceNameInRegistry?: string;
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
   * 1
   */
  sourceId?: number;
  /**
   * @remarks
   * The source type of the service.
   * 
   * @example
   * MSE
   */
  sourceType?: string;
  /**
   * @remarks
   * The details of versions.
   */
  versionDetails?: GetGatewayServiceDetailResponseBodyDataVersionDetails[];
  /**
   * @remarks
   * The service version. This parameter is deprecated.
   */
  versions?: GetGatewayServiceDetailResponseBodyDataVersions[];
  static names(): { [key: string]: string } {
    return {
      dnsServerList: 'DnsServerList',
      gatewayId: 'GatewayId',
      gatewayTrafficPolicy: 'GatewayTrafficPolicy',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      groupName: 'GroupName',
      healthCheck: 'HealthCheck',
      healthStatus: 'HealthStatus',
      id: 'Id',
      ips: 'Ips',
      labelDetails: 'LabelDetails',
      metaInfo: 'MetaInfo',
      name: 'Name',
      namespace: 'Namespace',
      portTrafficPolicyList: 'PortTrafficPolicyList',
      ports: 'Ports',
      serviceFQDN: 'ServiceFQDN',
      serviceNameInRegistry: 'ServiceNameInRegistry',
      servicePort: 'ServicePort',
      serviceProtocol: 'ServiceProtocol',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      versionDetails: 'VersionDetails',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsServerList: { 'type': 'array', 'itemType': 'string' },
      gatewayId: 'number',
      gatewayTrafficPolicy: TrafficPolicy,
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      groupName: 'string',
      healthCheck: 'string',
      healthStatus: 'string',
      id: 'number',
      ips: { 'type': 'array', 'itemType': 'string' },
      labelDetails: { 'type': 'array', 'itemType': GetGatewayServiceDetailResponseBodyDataLabelDetails },
      metaInfo: 'string',
      name: 'string',
      namespace: 'string',
      portTrafficPolicyList: { 'type': 'array', 'itemType': GetGatewayServiceDetailResponseBodyDataPortTrafficPolicyList },
      ports: { 'type': 'array', 'itemType': 'number' },
      serviceFQDN: 'string',
      serviceNameInRegistry: 'string',
      servicePort: 'number',
      serviceProtocol: 'string',
      sourceId: 'number',
      sourceType: 'string',
      versionDetails: { 'type': 'array', 'itemType': GetGatewayServiceDetailResponseBodyDataVersionDetails },
      versions: { 'type': 'array', 'itemType': GetGatewayServiceDetailResponseBodyDataVersions },
    };
  }

  validate() {
    if(Array.isArray(this.dnsServerList)) {
      $dara.Model.validateArray(this.dnsServerList);
    }
    if(this.gatewayTrafficPolicy && typeof (this.gatewayTrafficPolicy as any).validate === 'function') {
      (this.gatewayTrafficPolicy as any).validate();
    }
    if(Array.isArray(this.ips)) {
      $dara.Model.validateArray(this.ips);
    }
    if(Array.isArray(this.labelDetails)) {
      $dara.Model.validateArray(this.labelDetails);
    }
    if(Array.isArray(this.portTrafficPolicyList)) {
      $dara.Model.validateArray(this.portTrafficPolicyList);
    }
    if(Array.isArray(this.ports)) {
      $dara.Model.validateArray(this.ports);
    }
    if(Array.isArray(this.versionDetails)) {
      $dara.Model.validateArray(this.versionDetails);
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

