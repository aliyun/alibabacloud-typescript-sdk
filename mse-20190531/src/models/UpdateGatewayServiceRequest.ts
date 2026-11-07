// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which you want the results to be displayed. Valid values: zh (default): Chinese. en: English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The list of Domain Name System (DNS) servers (for DNS domain name services only).
   */
  dnsServerList?: string[];
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * 501
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-c9bc5afd61014165bd58f621b491*****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * 322
   */
  id?: string;
  /**
   * @remarks
   * The address list of fixed address services or domain name list of Domain Name System (DNS) services.
   */
  ipList?: string[];
  /**
   * @remarks
   * The service name. This parameter is deprecated and cannot be modified. The value of this parameter must be the same as the current service name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The service port. Specify this parameter for DNS services.
   * 
   * @example
   * 80
   */
  servicePort?: string;
  /**
   * @remarks
   * The service protocol.
   * 
   * - HTTP
   * 
   * - HTTPS
   * 
   * - HTTP2
   * 
   * - GRPC
   * 
   * - DUBBO
   * 
   * @example
   * HTTP
   */
  serviceProtocol?: string;
  /**
   * @remarks
   * The Transport Layer Security (TLS) settings. Valid values:
   * 
   * - mode: TLS mode
   * 
   * - certId: certificate ID
   * 
   * - caCertId: CA certificate ID
   * 
   * - caCertContent: CA certificate public key
   * 
   * - sni: service name identification
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
      dnsServerList: 'DnsServerList',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
      ipList: 'IpList',
      name: 'Name',
      servicePort: 'ServicePort',
      serviceProtocol: 'ServiceProtocol',
      tlsSetting: 'TlsSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      dnsServerList: { 'type': 'array', 'itemType': 'string' },
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      id: 'string',
      ipList: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      servicePort: 'string',
      serviceProtocol: 'string',
      tlsSetting: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dnsServerList)) {
      $dara.Model.validateArray(this.dnsServerList);
    }
    if(Array.isArray(this.ipList)) {
      $dara.Model.validateArray(this.ipList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

