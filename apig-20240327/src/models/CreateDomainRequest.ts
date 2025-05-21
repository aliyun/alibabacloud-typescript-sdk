// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TlsCipherSuitesConfig } from "./TlsCipherSuitesConfig";


export class CreateDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The CA certificate ID.
   * 
   * @example
   * 1ef1da5f-38ed-69b3-****-037781890265
   */
  caCertIdentifier?: string;
  /**
   * @remarks
   * The certificate ID.
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
   * @remarks
   * Specifies whether to enable forcible HTTPS redirection.
   * 
   * @example
   * false
   */
  forceHttps?: boolean;
  gatewayType?: string;
  /**
   * @remarks
   * The HTTP/2 configuration.
   * 
   * Valid values:
   * 
   * *   GlobalConfig
   * *   Close
   * *   Open
   * 
   * @example
   * Open
   */
  http2Option?: string;
  /**
   * @remarks
   * Specifies whether to enable mutual authentication.
   */
  mTLSEnabled?: boolean;
  /**
   * @remarks
   * The domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * abc.com
   */
  name?: string;
  /**
   * @remarks
   * The protocol type supported by the domain name.
   * 
   * *   HTTP: Only HTTP is supported.
   * *   HTTPS: Only HTTPS is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The [resource group ID](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-aekzoiafjtr7zyq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The cipher suite configuration.
   */
  tlsCipherSuitesConfig?: TlsCipherSuitesConfig;
  /**
   * @remarks
   * The maximum version of the TLS protocol. Up to TLS 1.3 is supported.
   * 
   * @example
   * TLS1.3
   */
  tlsMax?: string;
  /**
   * @remarks
   * The minimum version of the TLS protocol. Down to TLS 1.0 is supported.
   * 
   * @example
   * TLS1.0
   */
  tlsMin?: string;
  static names(): { [key: string]: string } {
    return {
      caCertIdentifier: 'caCertIdentifier',
      certIdentifier: 'certIdentifier',
      clientCACert: 'clientCACert',
      forceHttps: 'forceHttps',
      gatewayType: 'gatewayType',
      http2Option: 'http2Option',
      mTLSEnabled: 'mTLSEnabled',
      name: 'name',
      protocol: 'protocol',
      resourceGroupId: 'resourceGroupId',
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
      forceHttps: 'boolean',
      gatewayType: 'string',
      http2Option: 'string',
      mTLSEnabled: 'boolean',
      name: 'string',
      protocol: 'string',
      resourceGroupId: 'string',
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

