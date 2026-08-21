// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TlsCipherSuitesConfig } from "./TlsCipherSuitesConfig";


export class CreateDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The CA certificate identifier. This parameter is optional for Dedicated scope with HTTPS. It is not allowed for Serverless scope and is not validated for Dedicated scope with HTTP.
   * 
   * @example
   * 1ef1da5f-38ed-69b3-****-037781890265
   */
  caCertIdentifier?: string;
  /**
   * @remarks
   * The certificate identifier. This parameter is required for Dedicated scope with HTTPS and must pass validation. It is not allowed for Serverless scope and is not validated for Dedicated scope with HTTP.
   * 
   * @example
   * 1ef1da5f-38ed-69b3-****-037781890265
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The client CA certificate. This parameter is conditionally required for Dedicated scope with HTTPS (required when MTLSEnabled is set to true). It is not allowed for Serverless scope and is not validated for Dedicated scope with HTTP.
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
   * The domain name scope. Valid values:
   * 
   * - Dedicated: dedicated gateway domain name.
   * - Serverless: Serverless gateway domain name.
   * 
   * Default value: Dedicated.
   * 
   * @example
   * Dedicated
   */
  domainScope?: string;
  /**
   * @remarks
   * Specifies whether to enable forced HTTPS redirect for the HTTPS protocol type. This parameter is required for Serverless scope and for Dedicated scope with HTTPS. It is not validated for Dedicated scope with HTTP.
   * 
   * @example
   * false
   */
  forceHttps?: boolean;
  /**
   * @remarks
   * The gateway type. If not specified, the default value is API.
   * 
   * @example
   * API
   */
  gatewayType?: string;
  /**
   * @remarks
   * The HTTP/2 setting. Valid values:
   * 
   * - GlobalConfig: follows the global configuration.
   * - Open: enabled.
   * - Close: disabled.
   * 
   * Default value: GlobalConfig. This setting is supported only for HTTPS domain names in the Dedicated scope.
   * 
   * @example
   * Open
   */
  http2Option?: string;
  /**
   * @remarks
   * Specifies whether to enable mTLS mutual authentication. This parameter is optional for Dedicated scope with HTTPS. When set to true, ClientCACert is required. This parameter is not allowed for Serverless scope.
   */
  mTLSEnabled?: boolean;
  /**
   * @remarks
   * The domain name. The name must be 1 to 128 characters in length. Example: abc.com.
   * 
   * This parameter is required.
   * 
   * @example
   * abc.com
   */
  name?: string;
  /**
   * @remarks
   * The protocol type used by the domain name. Valid values: HTTP, HTTPS. This parameter is required for the Dedicated scope and is not allowed for the Serverless scope.
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
   * The TLS cipher suite configuration, including the configuration type, cipher suite names, and supported TLS versions. This configuration is supported only for HTTPS domain names in the Dedicated scope.
   */
  tlsCipherSuitesConfig?: TlsCipherSuitesConfig;
  /**
   * @remarks
   * The maximum TLS protocol version. This parameter is optional for Dedicated scope with HTTPS. If not specified, the value is derived from TlsMin. The value must be greater than or equal to TlsMin. This parameter is not allowed for Serverless scope.
   * 
   * @example
   * TLS1.3
   */
  tlsMax?: string;
  /**
   * @remarks
   * The minimum TLS protocol version. This parameter is optional for Dedicated scope with HTTPS. If not specified, the default value is TLS 1.0. Valid values: TLS 1.0 to TLS 1.3 (compatible with TLSv1.x). This parameter is not allowed for Serverless scope.
   * 
   * @example
   * TLS1.0
   */
  tlsMin?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run validation. If set to true, all synchronous validations identical to an actual creation are performed (including idempotency checks for existing test domain names), but no domain name is created and no side effects are produced. If not specified or set to false, the behavior is the same as the existing version.
   */
  dryRun?: boolean;
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
      dryRun: 'dryRun',
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
      dryRun: 'boolean',
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

