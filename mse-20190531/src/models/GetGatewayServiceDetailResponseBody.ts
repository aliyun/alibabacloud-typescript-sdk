// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrafficPolicy } from "./TrafficPolicy";


export class GetGatewayServiceDetailResponseBodyDataLabelDetails extends $dara.Model {
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * label
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayServiceDetailResponseBodyDataPortTrafficPolicyList extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-2837hfd91h34dbg87364g*****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1667460287386
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1667460287386
   */
  gmtModified?: string;
  /**
   * @remarks
   * The port ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * 1
   */
  serviceId?: number;
  /**
   * @remarks
   * The service port number.
   * 
   * @example
   * 8080
   */
  servicePort?: number;
  /**
   * @remarks
   * The traffic policy.
   */
  trafficPolicy?: TrafficPolicy;
  static names(): { [key: string]: string } {
    return {
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      serviceId: 'ServiceId',
      servicePort: 'ServicePort',
      trafficPolicy: 'TrafficPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      serviceId: 'number',
      servicePort: 'number',
      trafficPolicy: TrafficPolicy,
    };
  }

  validate() {
    if(this.trafficPolicy && typeof (this.trafficPolicy as any).validate === 'function') {
      (this.trafficPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayServiceDetailResponseBodyDataVersionDetailsServiceVersionLabels extends $dara.Model {
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * version
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * v2
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class GetGatewayServiceDetailResponseBodyDataVersionDetailsServiceVersion extends $dara.Model {
  /**
   * @remarks
   * The tag.
   */
  labels?: GetGatewayServiceDetailResponseBodyDataVersionDetailsServiceVersionLabels[];
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * v2
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': GetGatewayServiceDetailResponseBodyDataVersionDetailsServiceVersionLabels },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayServiceDetailResponseBodyDataVersionDetails extends $dara.Model {
  /**
   * @remarks
   * The number of instances.
   * 
   * @example
   * 1
   */
  endpointNum?: number;
  /**
   * @remarks
   * The percentage of instances.
   * 
   * @example
   * 20%
   */
  endpointNumPercent?: string;
  /**
   * @remarks
   * The service version.
   */
  serviceVersion?: GetGatewayServiceDetailResponseBodyDataVersionDetailsServiceVersion;
  static names(): { [key: string]: string } {
    return {
      endpointNum: 'EndpointNum',
      endpointNumPercent: 'EndpointNumPercent',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointNum: 'number',
      endpointNumPercent: 'string',
      serviceVersion: GetGatewayServiceDetailResponseBodyDataVersionDetailsServiceVersion,
    };
  }

  validate() {
    if(this.serviceVersion && typeof (this.serviceVersion as any).validate === 'function') {
      (this.serviceVersion as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayServiceDetailResponseBodyDataVersions extends $dara.Model {
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * version
   */
  label?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * test
   */
  type?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * v1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
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

export class GetGatewayServiceDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code returned.
   * 
   * @example
   * 1
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetGatewayServiceDetailResponseBodyData;
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
   * The message returned.
   * 
   * @example
   * The request is successfully processed.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9802C54E-5CC5-5706-927B-993DBB6DCF2F
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
      data: GetGatewayServiceDetailResponseBodyData,
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

