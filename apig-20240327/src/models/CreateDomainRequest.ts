// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TlsCipherSuitesConfig } from "./TlsCipherSuitesConfig";


export class CreateDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The CA certificate identifier. This parameter is optional for Dedicated+HTTPS, not allowed for Serverless, and not verified for Dedicated+HTTP.
   * 
   * @example
   * 1ef1da5f-38ed-69b3-****-037781890265
   */
  caCertIdentifier?: string;
  /**
   * @remarks
   * The certificate identifier. This parameter is required for Dedicated+HTTPS and must pass the submittable verification. This parameter is not allowed for Serverless and is not verified for Dedicated+HTTP.
   * 
   * @example
   * 1ef1da5f-38ed-69b3-****-037781890265
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The client CA certificate. This parameter is conditionally required for Dedicated+HTTPS when MTLSEnabled is set to true. This parameter is not allowed for Serverless and is not verified for Dedicated+HTTP.
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
   * The scope of the domain name. Valid values: Dedicated (dedicated gateway domain name) and Serverless (serverless gateway domain name). Default value: Dedicated.
   * 
   * @example
   * Dedicated
   */
  domainScope?: string;
  /**
   * @remarks
   * Specifies whether to enable forced HTTPS redirection when the HTTPS protocol type is set. This parameter is required for Serverless and Dedicated+HTTPS, and is not verified for Dedicated+HTTP.
   * 
   * @example
   * false
   */
  forceHttps?: boolean;
  /**
   * @remarks
   * The gateway type. This parameter is optional. If not specified, the default value is API.
   * 
   * @example
   * API
   */
  gatewayType?: string;
  /**
   * @remarks
   * The HTTP/2 settings. Valid values: GlobalConfig (follows the global configuration), Open (enabled), and Close (disabled). Default value: GlobalConfig. This setting is supported only for HTTPS domain names in the Dedicated scope.
   * 
   * @example
   * Open
   */
  http2Option?: string;
  /**
   * @remarks
   * Specifies whether to enable mTLS mutual authentication. This parameter is optional for Dedicated+HTTPS. If this parameter is set to true, ClientCACert is required. This parameter is not allowed for Serverless and is not verified for Dedicated+HTTP.
   */
  mTLSEnabled?: boolean;
  /**
   * @remarks
   * The domain name. The name must be 1 to 128 characters in length, such as abc.com.
   * 
   * This parameter is required.
   * 
   * @example
   * abc.com
   */
  name?: string;
  /**
   * @remarks
   * The protocol type used by the domain name. Valid values: HTTP and HTTPS. This parameter is required for the Dedicated scope and is not allowed for the Serverless scope.
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
   * The TLS cipher suite configuration, which includes the configuration type, cipher suite name, and supported TLS versions. This configuration is supported only for HTTPS domain names in the Dedicated scope.
   */
  tlsCipherSuitesConfig?: TlsCipherSuitesConfig;
  /**
   * @remarks
   * The maximum TLS protocol version. This parameter is optional for Dedicated+HTTPS. If not specified, it is derived from TlsMin and must be greater than or equal to TlsMin. This parameter is not allowed for Serverless.
   * 
   * @example
   * TLS1.3
   */
  tlsMax?: string;
  /**
   * @remarks
   * The minimum TLS protocol version. This parameter is optional for Dedicated+HTTPS. If not specified, the default value is TLS 1.0. TLS 1.0 to 1.3 are allowed, compatible with TLSv1.x. This parameter is not allowed for Serverless.
   * 
   * @example
   * TLS1.0
   */
  tlsMin?: string;
  /**
   * @remarks
   * The idempotency token. The caller generates a globally unique value (UUID is recommended) with a length of up to 64 characters. Within about 24 hours after the first request succeeds, a repeated request with the same ClientToken and identical request parameters directly returns the domainId created in the first request without creating the domain name again. If the same ClientToken is used but the request parameters are different, IdempotentParameterMismatch is returned. If the first request is still being processed, IdempotentProcessing is returned. If this parameter is not specified, idempotency control is not enabled, and the behavior is consistent with the existing version.
   * 
   * @example
   * 5f7a2c1e-9b3d-4e8f-a1c6-0d2b8e4f7a13
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. If this parameter is set to true, all synchronous validations consistent with actual creation (including idempotency checks for existing test domain names) are executed, but no domain name is created and no side effects are generated. If this parameter is not specified or is set to false, the behavior is consistent with the existing version.
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
      clientToken: 'clientToken',
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
      clientToken: 'string',
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

