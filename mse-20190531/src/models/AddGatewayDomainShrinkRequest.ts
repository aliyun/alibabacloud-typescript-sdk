// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGatewayDomainShrinkRequest extends $dara.Model {
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
   * 6828169-cn-hangzhou
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
   * *   `open`: enables `HTTP/2`
   * *   `close`: disables `HTTP/2`
   * *   `globalConfig`: uses global configurations
   * 
   * @example
   * close
   */
  http2?: string;
  /**
   * @remarks
   * Specifies whether to enable HTTPS.
   * 
   * @example
   * true
   */
  mustHttps?: boolean;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * test.com
   */
  name?: string;
  /**
   * @remarks
   * The type of the protocol. Valid values:
   * 
   * *   `HTTP`
   * *   `HTTPS`
   * 
   * @example
   * HTTP
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
      mustHttps: 'MustHttps',
      name: 'Name',
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
      mustHttps: 'boolean',
      name: 'string',
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

