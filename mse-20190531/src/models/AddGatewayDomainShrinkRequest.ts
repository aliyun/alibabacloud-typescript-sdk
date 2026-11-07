// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGatewayDomainShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * - zh: Chinese. This is the default value.
   * - en: English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The content of the CA certificate.
   */
  caCertIdentifier?: string;
  /**
   * @remarks
   * The certificate ID.
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
   * Specifies whether to enable HTTP/2. Valid values:
   * - `open`: Enables HTTP/2.
   * - `close`: Disables HTTP/2.
   * - `globalConfig`: Uses the global configuration.
   * 
   * @example
   * close
   */
  http2?: string;
  /**
   * @remarks
   * Specifies whether to enable mTLS.
   */
  mtlsEnabled?: boolean;
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
   * The protocol type. Valid values:
   * - `HTTP`
   * - `HTTPS`
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The TLS cipher suite configuration.
   */
  tlsCipherSuitesConfigJSONShrink?: string;
  /**
   * @remarks
   * The maximum TLS version.
   * 
   * @example
   * TLS 1.3
   */
  tlsMax?: string;
  /**
   * @remarks
   * The minimum TLS version.
   * 
   * @example
   * TLS 1.0
   */
  tlsMin?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      caCertIdentifier: 'CaCertIdentifier',
      certIdentifier: 'CertIdentifier',
      gatewayUniqueId: 'GatewayUniqueId',
      http2: 'Http2',
      mtlsEnabled: 'MtlsEnabled',
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
      caCertIdentifier: 'string',
      certIdentifier: 'string',
      gatewayUniqueId: 'string',
      http2: 'string',
      mtlsEnabled: 'boolean',
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

