// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportServicesRequestServiceList extends $dara.Model {
  /**
   * @remarks
   * The list of DNS servers (for DNS domain name services only).
   */
  dnsServerList?: string[];
  /**
   * @remarks
   * The group name.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The list of IP addresses.
   */
  ips?: string[];
  /**
   * @remarks
   * The service name.
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
   * The SAE application ID.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  saeAppId?: string;
  /**
   * @remarks
   * The service port.
   * 
   * @example
   * 8080
   */
  servicePort?: number;
  /**
   * @remarks
   * The service protocol version.
   * 
   * @example
   * GRPC, HTTP
   */
  serviceProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      dnsServerList: 'DnsServerList',
      groupName: 'GroupName',
      ips: 'Ips',
      name: 'Name',
      namespace: 'Namespace',
      saeAppId: 'SaeAppId',
      servicePort: 'ServicePort',
      serviceProtocol: 'ServiceProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsServerList: { 'type': 'array', 'itemType': 'string' },
      groupName: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      namespace: 'string',
      saeAppId: 'string',
      servicePort: 'number',
      serviceProtocol: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dnsServerList)) {
      $dara.Model.validateArray(this.dnsServerList);
    }
    if(Array.isArray(this.ips)) {
      $dara.Model.validateArray(this.ips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportServicesRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh: Chinese.
   * - en: English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The Function Compute service alias. This parameter is required when the service source is Function Compute.
   * 
   * @example
   * test-alias
   */
  fcAlias?: string;
  /**
   * @remarks
   * The Function Compute service name. This parameter is required when the service source is Function Compute.
   * 
   * @example
   * guide
   */
  fcServiceName?: string;
  /**
   * @remarks
   * The Function Compute service version. This parameter is required when the service source is Function Compute.
   * 
   * @example
   * LATEST
   */
  fcVersion?: string;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-77e1153db6e14c0a8b1fae20bcb89ca5
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The service list.
   * 
   * @example
   * DNS
   */
  serviceList?: ImportServicesRequestServiceList[];
  /**
   * @remarks
   * The service source ID. This parameter is used when you add a service from a specified source.
   * 
   * @example
   * 100
   */
  sourceId?: number;
  /**
   * @remarks
   * The service source. Valid values:
   * 
   * - MSE: Microservices Engine (MSE Nacos).
   * - K8s: Container Service for Kubernetes (ACK).
   * - VIP: Fixed address.
   * - DNS: DNS domain name.
   * 
   * @example
   * DNS
   */
  sourceType?: string;
  /**
   * @remarks
   * The TLS settings.
   * 
   * - TLS pattern: mode
   * 
   * - Certificate ID: certId
   * 
   * - CA certificate ID: caCertId
   * 
   * - CA certificate public key: caCertContent
   * 
   * - Service name identity: sni
   * 
   * @example
   * {
   *       "mode": "MUTUAL",
   *       "certId": "1*****-cn-hangzhou",
   *       "caCertContent": "123",
   *       "sni": "ceshi"
   * }
   */
  tlsSetting?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      fcAlias: 'FcAlias',
      fcServiceName: 'FcServiceName',
      fcVersion: 'FcVersion',
      gatewayUniqueId: 'GatewayUniqueId',
      serviceList: 'ServiceList',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      tlsSetting: 'TlsSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      fcAlias: 'string',
      fcServiceName: 'string',
      fcVersion: 'string',
      gatewayUniqueId: 'string',
      serviceList: { 'type': 'array', 'itemType': ImportServicesRequestServiceList },
      sourceId: 'number',
      sourceType: 'string',
      tlsSetting: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.serviceList)) {
      $dara.Model.validateArray(this.serviceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

