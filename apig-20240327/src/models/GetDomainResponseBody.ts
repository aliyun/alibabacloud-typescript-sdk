// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TlsCipherSuitesConfig } from "./TlsCipherSuitesConfig";
import { ResourceStatistic } from "./ResourceStatistic";


export class GetDomainResponseBodyDataStatisticsInfo extends $dara.Model {
  /**
   * @remarks
   * The resource statistics.
   */
  resourceStatistics?: ResourceStatistic[];
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 30
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      resourceStatistics: 'resourceStatistics',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceStatistics: { 'type': 'array', 'itemType': ResourceStatistic },
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceStatistics)) {
      $dara.Model.validateArray(this.resourceStatistics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The encryption algorithm name.
   * 
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @remarks
   * The CA certificate identifier.
   * 
   * @example
   * 8237***-cn-hangzhou
   */
  caCertIdentifier?: string;
  /**
   * @remarks
   * The certificate identifier.
   * 
   * @example
   * 2382***-cn-hangzhou
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
   * The source from which the domain name was created.
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
   * Indicates whether this is the default domain name.
   * 
   * @example
   * false
   */
  default?: boolean;
  /**
   * @remarks
   * The domain name ID.
   * 
   * @example
   * d-cq1m3utlhtgvgkv7sitg
   */
  domainId?: string;
  /**
   * @example
   * Serverless
   */
  domainScope?: string;
  /**
   * @remarks
   * Specifies whether to enable forced HTTPS redirect when the HTTPS protocol type is configured.
   * 
   * @example
   * false
   */
  forceHttps?: boolean;
  /**
   * @remarks
   * The HTTP/2 setting.
   * 
   * @example
   * Open
   */
  http2Option?: string;
  /**
   * @remarks
   * The certification authority.
   * 
   * @example
   * Alibaba
   */
  issuer?: string;
  /**
   * @remarks
   * Indicates whether mutual TLS (mTLS) authentication is enabled.
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
   * The certificate expiration time.
   * 
   * @example
   * 1719386834548
   */
  notAfterTimstamp?: number;
  /**
   * @remarks
   * The certificate effective period.
   * 
   * @example
   * 1719386834548
   */
  notBeforeTimestamp?: number;
  /**
   * @remarks
   * The protocol type supported by the domain name. Valid values:
   * 
   * - HTTP: only HTTP is supported.
   * - HTTPS: only HTTPS is supported.
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
   * rg-aekztduhoagat4y
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * All domain names bound to the certificate.
   * 
   * @example
   * aliyun.com
   */
  sans?: string;
  /**
   * @remarks
   * The online resource information.
   */
  statisticsInfo?: GetDomainResponseBodyDataStatisticsInfo;
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
      domainScope: 'domainScope',
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
      domainScope: 'string',
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

export class GetDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetDomainResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which is used to trace the API call chain.
   * 
   * @example
   * 3ACFC7A7-45A9-58CF-B2D5-765B60254695
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDomainResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

