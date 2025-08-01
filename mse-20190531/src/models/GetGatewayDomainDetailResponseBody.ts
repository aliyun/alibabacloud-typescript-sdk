// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayDomainDetailResponseBodyDataTlsCipherSuitesConfig extends $dara.Model {
  configType?: string;
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
   * The start time.
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
   * The expiration time.
   * 
   * @example
   * 2021-04-01 02:35:12
   */
  beforeDate?: number;
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 234-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The name of the certificate.
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
   * The ID of the gateway.
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
   * The start time.
   * 
   * @example
   * 2021-04-01 02:35:12
   */
  gmtAfter?: string;
  /**
   * @remarks
   * The expiration time.
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
   * Indicates whether `HTTP/2` is enabled.
   * 
   * *   `open`: `HTTP/2` is enabled.
   * *   `close`: `HTTP/2` is disabled.
   * *   `globalConfig`: Global configurations are used.
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
   * Indicates whether HTTPS is forcibly used.
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
   * The protocol of the gateway.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The name of the extended field.
   * 
   * @example
   * test.com
   */
  sans?: string;
  tlsCipherSuitesConfig?: GetGatewayDomainDetailResponseBodyDataTlsCipherSuitesConfig;
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
      afterDate: 'AfterDate',
      algorithm: 'Algorithm',
      beforeDate: 'BeforeDate',
      certIdentifier: 'CertIdentifier',
      certName: 'CertName',
      commonName: 'CommonName',
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
      mustHttps: 'MustHttps',
      name: 'Name',
      protocol: 'Protocol',
      sans: 'Sans',
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
      certIdentifier: 'string',
      certName: 'string',
      commonName: 'string',
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
      mustHttps: 'boolean',
      name: 'string',
      protocol: 'string',
      sans: 'string',
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
   * The status code returned.
   * 
   * @example
   * 403
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetGatewayDomainDetailResponseBodyData;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 88B83302-CD88-54D3-8DF2-208BFDC73F0D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
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

