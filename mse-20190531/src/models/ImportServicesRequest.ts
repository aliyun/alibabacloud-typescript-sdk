// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportServicesRequestServiceList extends $dara.Model {
  dnsServerList?: string[];
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
   * The IP addresses of the service.
   */
  ips?: string[];
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
  saeAppId?: string;
  /**
   * @remarks
   * The port of the service.
   * 
   * @example
   * 8080
   */
  servicePort?: number;
  /**
   * @remarks
   * The protocol of the service.
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
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  fcAlias?: string;
  fcServiceName?: string;
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
   * The information about services.
   * 
   * @example
   * DNS
   */
  serviceList?: ImportServicesRequestServiceList[];
  /**
   * @example
   * 100
   */
  sourceId?: number;
  /**
   * @remarks
   * The service source. Valid values:
   * 
   * *   MSE: MSE Nacos instance
   * *   K8s: ACK cluster
   * *   VIP: fixed address
   * *   DNS: DNS domain
   * 
   * @example
   * DNS
   */
  sourceType?: string;
  /**
   * @remarks
   * The Transport Layer Security (TLS) settings. Valid values:
   * 
   * *   mode: TLS mode
   * *   certId: certificate ID
   * *   caCertId: CA certificate ID
   * *   caCertContent: CA certificate public key
   * *   sni: service name identification
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

