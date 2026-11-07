// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportServicesShrinkRequest extends $dara.Model {
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
  serviceListShrink?: string;
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

