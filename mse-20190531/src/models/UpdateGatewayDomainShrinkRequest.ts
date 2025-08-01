// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayDomainShrinkRequest extends $dara.Model {
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
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 6209108-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-86575c0bc9f04ecfbacb92b8e392****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * Specifies whether to enable `HTTP/2`.
   * 
   * *   `open`: `HTTP/2` is enabled.
   * *   `close`: `HTTP/2` is disabled.
   * *   `globalConfig`: Global configurations are used.
   * 
   * @example
   * close
   */
  http2?: string;
  /**
   * @remarks
   * The ID of the domain name that you want to update.
   * 
   * @example
   * 94
   */
  id?: number;
  /**
   * @remarks
   * Specifies whether to forcibly use HTTPS.
   * 
   * @example
   * false
   */
  mustHttps?: boolean;
  /**
   * @remarks
   * The type of the protocol. Valid values:
   * 
   * *   HTTPS
   * *   HTTP
   * 
   * @example
   * HTTPS
   */
  protocol?: string;
  tlsCipherSuitesConfigJSONShrink?: string;
  /**
   * @remarks
   * The maximum version of Transport Layer Security (TLS).
   * 
   * @example
   * TLS 1.3
   */
  tlsMax?: string;
  /**
   * @remarks
   * The minimum version of TLS.
   * 
   * @example
   * TLS 1.0
   */
  tlsMin?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      certIdentifier: 'CertIdentifier',
      gatewayUniqueId: 'GatewayUniqueId',
      http2: 'Http2',
      id: 'Id',
      mustHttps: 'MustHttps',
      protocol: 'Protocol',
      tlsCipherSuitesConfigJSONShrink: 'TlsCipherSuitesConfigJSON',
      tlsMax: 'TlsMax',
      tlsMin: 'TlsMin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      certIdentifier: 'string',
      gatewayUniqueId: 'string',
      http2: 'string',
      id: 'number',
      mustHttps: 'boolean',
      protocol: 'string',
      tlsCipherSuitesConfigJSONShrink: 'string',
      tlsMax: 'string',
      tlsMin: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

