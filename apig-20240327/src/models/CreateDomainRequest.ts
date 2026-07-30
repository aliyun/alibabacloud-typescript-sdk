// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TlsCipherSuitesConfig } from "./TlsCipherSuitesConfig";


export class CreateDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The CA certificate identifier. Optional for Dedicated+HTTPS. Not allowed for Serverless. Not validated for Dedicated+HTTP.
   * 
   * @example
   * 1ef1da5f-38ed-69b3-****-037781890265
   */
  caCertIdentifier?: string;
  /**
   * @remarks
   * The certificate identifier. Required for Dedicated+HTTPS and must pass submission validation. Not allowed for Serverless. Not validated for Dedicated+HTTP.
   * 
   * @example
   * 1ef1da5f-38ed-69b3-****-037781890265
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The client CA certificate. Conditionally required for Dedicated+HTTPS when MTLSEnabled is set to true. Not allowed for Serverless. Not validated for Dedicated+HTTP.
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
   * The domain name scope. Optional. If not specified, the default value is Dedicated.
   * 
   * @example
   * Dedicated
   */
  domainScope?: string;
  /**
   * @remarks
   * Specifies whether to enable forced HTTPS redirect for the HTTPS protocol type. This parameter is required for Serverless and for Dedicated+HTTPS. It is not validated for Dedicated+HTTP.
   * 
   * @example
   * false
   */
  forceHttps?: boolean;
  /**
   * @remarks
   * The gateway type. Optional. If not specified, the default value is API.
   * 
   * @example
   * API
   */
  gatewayType?: string;
  /**
   * @remarks
   * The HTTP/2 setting. Optional for Dedicated+HTTPS. If not specified, the default value is GlobalConfig. Not allowed for Serverless.
   * 
   * @example
   * Open
   */
  http2Option?: string;
  /**
   * @remarks
   * Specifies whether to enable mTLS mutual authentication. Optional for Dedicated+HTTPS. When set to true, ClientCACert is required. Not allowed for Serverless.
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
   * The protocol type supported by the domain name. This parameter is required for Dedicated and must not be specified for Serverless.
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
   * rg-aekzhiv7derfweq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The cipher suite configuration. Optional for Dedicated+HTTPS and must pass cipher suite validation. Not allowed for Serverless. Set to empty for Dedicated+HTTP.
   */
  tlsCipherSuitesConfig?: TlsCipherSuitesConfig;
  /**
   * @remarks
   * The maximum TLS protocol version. Optional for Dedicated+HTTPS. If not specified, the value is derived from TlsMin and must be greater than or equal to TlsMin. Not allowed for Serverless.
   * 
   * @example
   * TLS1.3
   */
  tlsMax?: string;
  /**
   * @remarks
   * The minimum TLS protocol version. Optional for Dedicated+HTTPS. If not specified, the default value is TLS 1.0. Valid values range from TLS 1.0 to TLS 1.3, compatible with TLSv1.x. Not allowed for Serverless.
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
      domainScope: 'domainScope',
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
      domainScope: 'string',
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

