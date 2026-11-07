// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayDomainDetailResponseBodyDataTlsCipherSuitesConfig extends $dara.Model {
  /**
   * @remarks
   * The TLS cipher suite configuration type. DEFAULT indicates the default configuration, and CUSTOM indicates the custom configuration.
   * 
   * @example
   * DEFAULT
   */
  configType?: string;
  /**
   * @remarks
   * The list of TLS cipher suite names.
   */
  tlsCipherSuites?: string[];
  static names(): { [key: string]: string } {
    return {
      configType: 'ConfigType',
      tlsCipherSuites: 'TlsCipherSuites',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configType: 'string',
      tlsCipherSuites: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tlsCipherSuites)) {
      $dara.Model.validateArray(this.tlsCipherSuites);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayDomainDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The certificate expiration time.
   * 
   * @example
   * 2021-04-01 02:35:12
   */
  afterDate?: number;
  /**
   * @remarks
   * The algorithm.
   * 
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @remarks
   * The certificate issuance time.
   * 
   * @example
   * 2021-04-01 02:35:12
   */
  beforeDate?: number;
  /**
   * @remarks
   * The CA certificate content.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIIFazCCA1OgAwIBAgIRAIIQz7DSQONZRGPgu2OCiwAwDQYJKoZIhvcNAQELBQAw
   * TzELMAkGA1UEBhMCVVMxKTAnBgNVBAoTIEludGVybmV0IFNlY3VyaXR5IFJlc2Vh
   * cmNoIEdyb3VwMRUwEwYDVQQDEwxJU1JHIFJvb3QgWDEwHhcNMTUwNjA0MTEwNDM4
   * WhcNMzUwNjA0MTEwNDM4WjBPMQswCQYDVQQGEwJVUzEpMCcGA1UEChMgSW50ZXJu
   * ZXQgU2VjdXJpdHkgUmVzZWFyY2ggR3JvdXAxFTATBgNVBAMTDElTUkcgUm9vdCBY
   * MTCCAiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoCggIBAK3oJHP0FDfzm54rVygc
   * h77ct984kIxuPOZXoHj3dcKi/vVqbvYATyjb3miGbESTtrFj/RQSa78f0uoxmyF+
   * 0TM8ukj13Xnfs7j/EvEhmkvBioZxaUpmZmyPfjxwv60pIgbz5MDmgK7iS4+3mX6U
   * A5/TR5d8mUgjU+g4rk8Kb4Mu0UlXjIB0ttov0DiNewNwIRt18jA8+o+u3dpjq+sW
   * T8KOEUt+zwvo/7V3LvSye0rgTBIlDHCNAymg4VMk7BPZ7hm/ELNKjD+Jo2FR3qyH
   * B5T0Y3HsLuJvW5iB4YlcNHlsdu87kGJ55tukmi8mxdAQ4Q7e2RCOFvu396j3x+UC
   * B5iPNgiV5+I3lg02dZ77DnKxHZu8A/lJBdiB3QW0KtZB6awBdpUKD9jf1b0SHzUv
   * KBds0pjBqAlkd25HN7rOrFleaJ1/ctaJxQZBKT5ZPt0m9STJEadao0xAH0ahmbWn
   * OlFuhjuefXKnEgV4We0+UXgVCwOPjdAvBbI+e0ocS3MFEvzG6uBQE3xDk3SzynTn
   * jh8BCNAw1FtxNrQHusEwMFxIt4I7mKZ9YIqioymCzLq9gwQbooMDQaHWBfEbwrbw
   * qHyGO0aoSCqI3Haadr8faqU9GY/rOPNk3sgrDQoo//fb4hVC1CLQJ13hef4Y53CI
   * rU7m2Ys6xt0nUW7/vGT1M0NPAgMBAAGjQjBAMA4GA1UdDwEB/wQEAwIBBjAPBgNV
   * HRMBAf8EBTADAQH/MB0GA1UdDgQWBBR5tFnme7bl5AFzgAiIyBpY9umbbjANBgkq
   * hkiG9w0BAQsFAAOCAgEAVR9YqbyyqFDQDLHYGmkgJykIrGF1XIpu+ILlaS/V9lZL
   * ubhzEFnTIZd+50xx+7LSYK05qAvqFyFWhfFQDlnrzuBZ6brJFe+GnY+EgPbk6ZGQ
   * 3BebYhtF8GaV0nxvwuo77x/Py9auJ/GpsMiu/X1+mvoiBOv/2X/qkSsisRcOj/KK
   * NFtY2PwByVS5uCbMiogziUwthDyC3+6WVwW6LLv3xLfHTjuCvjHIInNzktHCgKQ5
   * ORAzI4JMPJ+GslWYHb4phowim57iaztXOoJwTdwJx4nLCgdNbOhdjsnvzqvHu7Ur
   * TkXWStAmzOVyyghqpZXjFaH3pO3JLF+l+/+sKAIuvtd7u+Nxe5AW0wdeRlN8NwdC
   * jNPElpzVmbUq4JUagEiuTDkHzsxHpFKVK7q4+63SM1N95R1NbdWhscdCb+ZAJzVc
   * oyi3B43njTOQ5yOf+1CceWxG1bQVs5ZufpsMljq4Ui0/1lvh+wjChP4kqKOJ2qxq
   * 4RgqsahDYVvTH9w7jXbyLeiNdd8XM2w9U/t7y0Ff/9yi0GE44Za4rF2LN9d11TPA
   * mRGunUHBcnWEvgJBQl9nJEiU0Zsnvgc/ubhPgXRR4Xq37Z0j4r7g1SgEEzwxA57d
   * emyPxgcYxn/eR44/KJ4EBs+lVDR3veyJm+kXQ99b21/+jh5Xos1AnX5iItreGCc=
   * -----END CERTIFICATE-----
   */
  caCertIdentifier?: string;
  /**
   * @remarks
   * The certificate identifier.
   * 
   * @example
   * 234-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The certificate name.
   * 
   * @example
   * test
   */
  certName?: string;
  /**
   * @remarks
   * The public domain name.
   * 
   * @example
   * name
   */
  commonName?: string;
  /**
   * @remarks
   * Indicates whether WAF protection is enabled for the domain name.
   */
  enableWaf?: boolean;
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * 1
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-7ea3da97b96543e19f6c597cd4a9****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The certificate expiration time in GMT.
   * 
   * @example
   * 2021-04-01 02:35:12
   */
  gmtAfter?: string;
  /**
   * @remarks
   * The certificate issuance time in GMT.
   * 
   * @example
   * 2021-04-01 02:35:12
   */
  gmtBefore?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-01-07T10:07:57.000+0000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2022-01-07T10:07:57.000+0000
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether HTTP/2 is enabled. Valid values:
   * - `open`: HTTP/2 is enabled.
   * - `close`: HTTP/2 is disabled.
   * - `globalConfig`: The global configuration is used.
   * 
   * @example
   * close
   */
  http2?: string;
  /**
   * @remarks
   * The ID.
   * 
   * @example
   * 12
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the domain name is managed.
   */
  isManaged?: boolean;
  /**
   * @remarks
   * The issuer.
   * 
   * @example
   * Istio
   */
  issuer?: string;
  /**
   * @remarks
   * Indicates whether mTLS is enabled.
   */
  mtlsEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether HTTPS is forced.
   * 
   * @example
   * true
   */
  mustHttps?: boolean;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * test.com
   */
  name?: string;
  /**
   * @remarks
   * The gateway protocol.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The subject alternative names.
   * 
   * @example
   * test.com
   */
  sans?: string;
  /**
   * @remarks
   * Indicates whether the gateway supports WAF protection.
   */
  supportWaf?: boolean;
  /**
   * @remarks
   * The TLS cipher suite configuration, including the configuration type and the list of cipher suite names.
   */
  tlsCipherSuitesConfig?: GetGatewayDomainDetailResponseBodyDataTlsCipherSuitesConfig;
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
      afterDate: 'AfterDate',
      algorithm: 'Algorithm',
      beforeDate: 'BeforeDate',
      caCertIdentifier: 'CaCertIdentifier',
      certIdentifier: 'CertIdentifier',
      certName: 'CertName',
      commonName: 'CommonName',
      enableWaf: 'EnableWaf',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtAfter: 'GmtAfter',
      gmtBefore: 'GmtBefore',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      http2: 'Http2',
      id: 'Id',
      isManaged: 'IsManaged',
      issuer: 'Issuer',
      mtlsEnabled: 'MtlsEnabled',
      mustHttps: 'MustHttps',
      name: 'Name',
      protocol: 'Protocol',
      sans: 'Sans',
      supportWaf: 'SupportWaf',
      tlsCipherSuitesConfig: 'TlsCipherSuitesConfig',
      tlsMax: 'TlsMax',
      tlsMin: 'TlsMin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterDate: 'number',
      algorithm: 'string',
      beforeDate: 'number',
      caCertIdentifier: 'string',
      certIdentifier: 'string',
      certName: 'string',
      commonName: 'string',
      enableWaf: 'boolean',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtAfter: 'string',
      gmtBefore: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      http2: 'string',
      id: 'number',
      isManaged: 'boolean',
      issuer: 'string',
      mtlsEnabled: 'boolean',
      mustHttps: 'boolean',
      name: 'string',
      protocol: 'string',
      sans: 'string',
      supportWaf: 'boolean',
      tlsCipherSuitesConfig: GetGatewayDomainDetailResponseBodyDataTlsCipherSuitesConfig,
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

export class GetGatewayDomainDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 403
   */
  code?: number;
  /**
   * @remarks
   * The data.
   */
  data?: GetGatewayDomainDetailResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 88B83302-CD88-54D3-8DF2-208BFDC73F0D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * - `true`: The request is successful.
   * - `false`: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetGatewayDomainDetailResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

