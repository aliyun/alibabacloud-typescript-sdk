// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDomainResponseBodyDataStatisticsInfo } from "./GetDomainResponseBodyDataStatisticsInfo";
import { TlsCipherSuitesConfig } from "./TlsCipherSuitesConfig";


export class GetDomainResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The encryption algorithm.
   * 
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @remarks
   * The CA certificate ID.
   * 
   * @example
   * 876****-cn-hangzhou
   */
  caCertIdentifier?: string;
  /**
   * @remarks
   * The certificate ID.
   * 
   * @example
   * 645****-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The certificate name.
   * 
   * @example
   * test-cert
   */
  certName?: string;
  /**
   * @remarks
   * The client CA certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx/mpTQwDQYJKoZIhvcNAQEL
   * BxSbrGeJ8i0576Gn7Qezyho9abZOUhGaPeoB
   * AIHWWl428uUSG/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   * yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy+ZMJ8r4swA4swHwYDVR0jBBgwFoAU
   * qroVyYKk7ylhcSn+ZMJ8r4swA4swDwYDVR0TAQH/BAUwAwEB/zANBgkqhkiG9w0B
   * xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx=
   * -----END CERTIFICATE-----
   */
  clientCACert?: string;
  /**
   * @remarks
   * The creation source.
   * 
   * Valid values:
   * 
   * *   Console
   * *   Ingress
   * 
   * @example
   * Console
   */
  createFrom?: string;
  /**
   * @remarks
   * The creation timestamp.
   * 
   * @example
   * 1719386834548
   */
  createTimestamp?: number;
  /**
   * @remarks
   * Indicates whether the domain name is the default domain name.
   * 
   * @example
   * false
   */
  default?: boolean;
  /**
   * @remarks
   * The ID of the domain name.
   * 
   * @example
   * d-cq1m3utlhtgvgkv7sitg
   */
  domainId?: string;
  /**
   * @remarks
   * Indicates whether forcible HTTPS redirection is enabled.
   * 
   * @example
   * false
   */
  forceHttps?: boolean;
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
   * The certificate issuer.
   * 
   * @example
   * Alibaba
   */
  issuer?: string;
  /**
   * @remarks
   * Indicates whether mutual authentication is enabled.
   * 
   * Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * false
   */
  mTLSEnabled?: boolean;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * abc.com
   */
  name?: string;
  /**
   * @remarks
   * The expiration time of the certificate.
   * 
   * @example
   * 1719386834548
   */
  notAfterTimstamp?: number;
  /**
   * @remarks
   * The time when the certificate started to take effect.
   * 
   * @example
   * 1719386834548
   */
  notBeforeTimestamp?: number;
  /**
   * @remarks
   * The supported protocol. Valid values:
   * 
   * *   HTTP: Only HTTP is supported.
   * *   HTTPS: Only HTTPS is supported.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekzvlxzgo5b4si
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * All domain names that are bound to the certificate.
   * 
   * @example
   * aliyun.com
   */
  sans?: string;
  /**
   * @remarks
   * The information about online resources.
   */
  statisticsInfo?: GetDomainResponseBodyDataStatisticsInfo;
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
   * TLS 1.3
   */
  tlsMax?: string;
  /**
   * @remarks
   * The minimum version of the TLS protocol. Down to TLS 1.0 is supported.
   * 
   * @example
   * TLS 1.0
   */
  tlsMin?: string;
  /**
   * @remarks
   * The update timestamp.
   * 
   * @example
   * 1719386834548
   */
  updatetimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'algorithm',
      caCertIdentifier: 'caCertIdentifier',
      certIdentifier: 'certIdentifier',
      certName: 'certName',
      clientCACert: 'clientCACert',
      createFrom: 'createFrom',
      createTimestamp: 'createTimestamp',
      default: 'default',
      domainId: 'domainId',
      forceHttps: 'forceHttps',
      http2Option: 'http2Option',
      issuer: 'issuer',
      mTLSEnabled: 'mTLSEnabled',
      name: 'name',
      notAfterTimstamp: 'notAfterTimstamp',
      notBeforeTimestamp: 'notBeforeTimestamp',
      protocol: 'protocol',
      resourceGroupId: 'resourceGroupId',
      sans: 'sans',
      statisticsInfo: 'statisticsInfo',
      tlsCipherSuitesConfig: 'tlsCipherSuitesConfig',
      tlsMax: 'tlsMax',
      tlsMin: 'tlsMin',
      updatetimestamp: 'updatetimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      caCertIdentifier: 'string',
      certIdentifier: 'string',
      certName: 'string',
      clientCACert: 'string',
      createFrom: 'string',
      createTimestamp: 'number',
      default: 'boolean',
      domainId: 'string',
      forceHttps: 'boolean',
      http2Option: 'string',
      issuer: 'string',
      mTLSEnabled: 'boolean',
      name: 'string',
      notAfterTimstamp: 'number',
      notBeforeTimestamp: 'number',
      protocol: 'string',
      resourceGroupId: 'string',
      sans: 'string',
      statisticsInfo: GetDomainResponseBodyDataStatisticsInfo,
      tlsCipherSuitesConfig: TlsCipherSuitesConfig,
      tlsMax: 'string',
      tlsMin: 'string',
      updatetimestamp: 'number',
    };
  }

  validate() {
    if(this.statisticsInfo && typeof (this.statisticsInfo as any).validate === 'function') {
      (this.statisticsInfo as any).validate();
    }
    if(this.tlsCipherSuitesConfig && typeof (this.tlsCipherSuitesConfig as any).validate === 'function') {
      (this.tlsCipherSuitesConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

