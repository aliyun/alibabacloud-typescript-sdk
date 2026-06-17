// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TlsCipherSuitesConfig } from "./TlsCipherSuitesConfig";


export class UpdateDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The CA certificate identifier.
   * 
   * @example
   * 1ef1da5f-38ed-69b3-****-037781890265
   */
  caCertIdentifier?: string;
  /**
   * @remarks
   * The certificate identifier.
   * 
   * @example
   * 1ef1da5f-38ed-69b3-****-037781890265
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The client CA certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIIFBTCCAu2gAwIBAgIUORLpYPGSFD1YOP6PMbE7Wd/mpTQwDQYJKoZIhvcNAQEL
   * BQAwE************************************************2VwVOJ2gqX3
   * YuGaxvIbDy0iQJ1GMerPRyzJTeVEtdIKT29u0PdFRr4KZWom35qX7G4=
   * -----END CERTIFICATE-----
   */
  clientCACert?: string;
  /**
   * @example
   * Serverless
   */
  domainScope?: string;
  /**
   * @remarks
   * Specifies whether to enable forced HTTPS redirect when the protocol type is set to HTTPS. This parameter is required when the protocol is HTTPS.
   * 
   * @example
   * false
   */
  forceHttps?: boolean;
  /**
   * @remarks
   * The HTTP/2 settings.
   * 
   * @example
   * Open
   */
  http2Option?: string;
  /**
   * @remarks
   * Specifies whether to enable mTLS mutual authentication.
   */
  mTLSEnabled?: boolean;
  /**
   * @remarks
   * The protocol type supported by the domain name.
   * 
   * - HTTP: Only HTTP is supported.
   * - HTTPS: Only HTTPS is supported.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The cipher suite configuration.
   */
  tlsCipherSuitesConfig?: TlsCipherSuitesConfig;
  /**
   * @remarks
   * The maximum TLS protocol version. TLS 1.3 is the maximum supported version.
   * 
   * @example
   * TLS 1.3
   */
  tlsMax?: string;
  /**
   * @remarks
   * The minimum TLS protocol version. TLS 1.0 is the minimum supported version.
   * 
   * @example
   * TLS 1.0
   */
  tlsMin?: string;
  static names(): { [key: string]: string } {
    return {
      caCertIdentifier: 'caCertIdentifier',
      certIdentifier: 'certIdentifier',
      clientCACert: 'clientCACert',
      domainScope: 'domainScope',
      forceHttps: 'forceHttps',
      http2Option: 'http2Option',
      mTLSEnabled: 'mTLSEnabled',
      protocol: 'protocol',
      tlsCipherSuitesConfig: 'tlsCipherSuitesConfig',
      tlsMax: 'tlsMax',
      tlsMin: 'tlsMin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCertIdentifier: 'string',
      certIdentifier: 'string',
      clientCACert: 'string',
      domainScope: 'string',
      forceHttps: 'boolean',
      http2Option: 'string',
      mTLSEnabled: 'boolean',
      protocol: 'string',
      tlsCipherSuitesConfig: TlsCipherSuitesConfig,
      tlsMax: 'string',
      tlsMin: 'string',
    };
  }

  validate() {
    if(this.tlsCipherSuitesConfig && typeof (this.tlsCipherSuitesConfig as any).validate === 'function') {
      (this.tlsCipherSuitesConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

