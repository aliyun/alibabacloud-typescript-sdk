// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportServicesShrinkRequest extends $dara.Model {
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
  serviceListShrink?: string;
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
      serviceListShrink: 'ServiceList',
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
      serviceListShrink: 'string',
      sourceId: 'number',
      sourceType: 'string',
      tlsSetting: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

