// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayServiceRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  acceptLanguage?: string;
  dnsServerList?: string[];
  /**
   * @example
   * 501
   */
  gatewayId?: number;
  /**
   * @example
   * gw-c9bc5afd61014165bd58f621b491*****
   */
  gatewayUniqueId?: string;
  /**
   * @example
   * 322
   */
  id?: string;
  ipList?: string[];
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * 80
   */
  servicePort?: string;
  /**
   * @example
   * HTTP
   */
  serviceProtocol?: string;
  /**
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

