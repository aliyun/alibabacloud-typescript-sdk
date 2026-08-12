// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudResourceAccessPortDetailsResponseBodyAccessPortDetailsCertificates extends $dara.Model {
  /**
   * @remarks
   * The certificate type for the HTTPS protocol. Valid values:
   * 
   * - **default**: default certificate.
   * 
   * - **extension**: extension certificate.
   * 
   * @example
   * default
   */
  appliedType?: string;
  /**
   * @remarks
   * The ID of the added certificate.
   * 
   * @example
   * 123-cn-hangzhou
   */
  certificateId?: string;
  /**
   * @remarks
   * The certificate name.
   * 
   * @example
   * cert-name1
   */
  certificateName?: string;
  static names(): { [key: string]: string } {
    return {
      appliedType: 'AppliedType',
      certificateId: 'CertificateId',
      certificateName: 'CertificateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedType: 'string',
      certificateId: 'string',
      certificateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudResourceAccessPortDetailsResponseBodyAccessPortDetailsLogHeaders extends $dara.Model {
  /**
   * @remarks
   * The specified custom request header field.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The value set for the specified custom request header field.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudResourceAccessPortDetailsResponseBodyAccessPortDetailsSubStatusDetails extends $dara.Model {
  /**
   * @remarks
   * The certificate type for the HTTPS protocol. Valid values:
   * 
   * - **default**: default certificate.
   * 
   * - **extension**: extension certificate.
   * 
   * @example
   * default
   */
  appliedType?: string;
  /**
   * @remarks
   * The certificate ID in SSL Certificates Service.
   * 
   * @example
   * 123-cn-hangzhou
   */
  certId?: string;
  /**
   * @remarks
   * The certificate name in SSL Certificates Service.
   * 
   * @example
   * test-name
   */
  certName?: string;
  /**
   * @remarks
   * The common name (CN).
   * 
   * @example
   * test.aliyun.com
   */
  commonName?: string;
  /**
   * @remarks
   * The domain name bound to the certificate.
   * 
   * @example
   * test.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * The expiration time of the certificate, in UNIX timestamp format. Unit: seconds.
   * 
   * @example
   * 1746328456000
   */
  expireTime?: number;
  /**
   * @remarks
   * The certificate ID stored in the cloud service.
   * 
   * @example
   * 123
   */
  productCertId?: string;
  /**
   * @remarks
   * The certificate name stored in the cloud service.
   * 
   * @example
   * test-name
   */
  productCertName?: string;
  /**
   * @remarks
   * The specific reason for the protection exception status. Valid values:
   * 
   * - **UserUploadCert**: The certificate was manually uploaded.
   * 
   * - **CertNotExistInCertCenter**: The certificate does not exist in SSL Certificates Service.
   * - **CertExpired**: The cloud certificate has expired.
   * - **EmptyCertCN**: The CN of the certificate is empty.
   * 
   * @example
   * CertNotExistInCertCenter
   */
  reasonCode?: string;
  static names(): { [key: string]: string } {
    return {
      appliedType: 'AppliedType',
      certId: 'CertId',
      certName: 'CertName',
      commonName: 'CommonName',
      domain: 'Domain',
      expireTime: 'ExpireTime',
      productCertId: 'ProductCertId',
      productCertName: 'ProductCertName',
      reasonCode: 'ReasonCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedType: 'string',
      certId: 'string',
      certName: 'string',
      commonName: 'string',
      domain: 'string',
      expireTime: 'number',
      productCertId: 'string',
      productCertName: 'string',
      reasonCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudResourceAccessPortDetailsResponseBodyAccessPortDetails extends $dara.Model {
  /**
   * @remarks
   * The list of certificates for the cloud service port connected to WAF.
   */
  certificates?: DescribeCloudResourceAccessPortDetailsResponseBodyAccessPortDetailsCertificates[];
  /**
   * @remarks
   * The cipher suite type. Valid values:
   * 
   * - **1**: all cipher suites are added.
   * 
   * - **2**: strong cipher suites are added. This value is available only when TLSVersion is set to tlsv1.2.
   * 
   * - **99**: custom cipher suites are added. This value is available only when TLSVersion is not set to tlsv1.3.
   * 
   * @example
   * 1
   */
  cipherSuite?: number;
  /**
   * @remarks
   * The ID of the connected resource, automatically generated by WAF.
   * 
   * @example
   * i-bp1**************7ey-80-ecs
   */
  cloudResourceId?: string;
  /**
   * @remarks
   * The specific custom cipher suites to add. This parameter is used only when **CipherSuite** is set to **99**.
   */
  customCiphers?: string[];
  /**
   * @remarks
   * Indicates whether TLS 1.3 is supported. Valid values:
   * 
   * - **true**: TLS 1.3 is supported.
   * 
   * - **false**: TLS 1.3 is not supported.
   * 
   * > This parameter is used only when HttpsPorts is not empty (the domain name uses the HTTPS protocol). When TLSVersion is set to tlsv1.3, this value must be true.
   * 
   * @example
   * true
   */
  enableTLSv3?: boolean;
  /**
   * @remarks
   * Indicates whether HTTP/2 is enabled. Valid values:
   * 
   * - **true**: HTTP/2 is enabled.
   * 
   * - **false**: HTTP/2 is disabled.
   * 
   * @example
   * True
   */
  http2Enabled?: boolean;
  /**
   * @remarks
   * Indicates whether keep-alive connections are enabled. Valid values:
   * 
   * - **true** (default): Keep-alive connections are enabled.
   * 
   * - **false**: Keep-alive connections are disabled.
   * 
   * @example
   * true
   */
  keepalive?: boolean;
  /**
   * @remarks
   * The number of requests that can reuse a keep-alive connection. Valid values: 60 to 1000.
   * 
   * > Specifies how many requests can reuse a keep-alive connection after keep-alive is enabled.
   * 
   * @example
   * 1000
   */
  keepaliveRequests?: number;
  /**
   * @remarks
   * The idle timeout period for keep-alive connections. Valid values: 10 to 3600. Default value: 15. Unit: seconds.
   * 
   * > Specifies how long an idle keep-alive connection remains open before it is released.
   * 
   * @example
   * 10
   */
  keepaliveTimeout?: number;
  /**
   * @remarks
   * The traffic tag fields and values of the domain name, used to mark traffic processed by WAF.
   * 
   * > This parameter is returned only when the traffic tag feature is enabled for the domain name.
   */
  logHeaders?: DescribeCloudResourceAccessPortDetailsResponseBodyAccessPortDetailsLogHeaders[];
  /**
   * @remarks
   * The maximum request body size. Valid values: 2 to 10. Default value: 2. Unit: GB.
   * 
   * @example
   * 2
   */
  maxBodySize?: number;
  /**
   * @remarks
   * The UID of the cloud service resource ownership.
   * 
   * @example
   * 123
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The port of the cloud service that is connected to WAF.
   * 
   * @example
   * 443
   */
  port?: number;
  /**
   * @remarks
   * The protocol type. Valid values:
   * - **http**: HTTP protocol.
   * - **https**: HTTPS protocol.
   * 
   * @example
   * https
   */
  protocol?: string;
  /**
   * @remarks
   * The read timeout period, in seconds.
   * Valid values: 1 to 3600.
   * 
   * @example
   * 5
   */
  readTimeout?: number;
  /**
   * @remarks
   * The domain name status. Valid values:
   * 
   * - **1**: The port is in a normal state.
   * 
   * - **2**: The port is being created.
   * 
   * - **3**: The port is being modified.
   * 
   * - **4**: The port is being released.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The protection exception status. Valid values:
   * 
   * - **InvalidCert**: invalid certificate.
   * 
   * - **ClientCertOpend**: mutual authentication is enabled.
   * - **NetworkConfigLost**: cloud service network configuration exception.
   * 
   * @example
   * InvalidCert
   */
  subStatus?: string;
  /**
   * @remarks
   * The specific reasons for the protection exception status. This parameter has a value only when SubStatus is set to InvalidCert.
   */
  subStatusDetails?: DescribeCloudResourceAccessPortDetailsResponseBodyAccessPortDetailsSubStatusDetails[];
  /**
   * @remarks
   * The TLS version. Valid values:
   * 
   * - **tlsv1**: Supports TLS 1.0 and later. Highest compatibility, lower security.
   * 
   * - **tlsv1.1**: Supports TLS 1.1 and later. Good compatibility, good security.
   * 
   * - **tlsv1.2**: Supports TLS 1.2 and later. Good compatibility, highest security.
   * 
   * - **tlsv1.3**: Supports only TLS 1.3. Highest security, lower compatibility.
   * 
   * @example
   * tlsv1
   */
  TLSVersion?: string;
  /**
   * @remarks
   * The write timeout period, in seconds.
   * Valid values: 1 to 3600.
   * 
   * @example
   * 1
   */
  writeTimeout?: number;
  /**
   * @remarks
   * The method that WAF uses to obtain the originating IP address of the client. Valid values:
   * 
   * - **0**: The client traffic does not pass through any Layer 7 proxy before reaching WAF.
   * 
   * - **1**: WAF reads the first value in the X-Forwarded-For (XFF) header as the client IP address.
   * 
   * - **2**: WAF reads the value of a custom header field that you specify as the client IP address.
   * 
   * - **3**: WAF reads the Client IP from the Proxy Protocol header as the client IP address.
   * 
   * @example
   * 0
   */
  xffHeaderMode?: number;
  /**
   * @remarks
   * The list of custom header fields used to obtain the client IP address, in the format **["header1","header2",……]**.
   * 
   * > This parameter is required only when **XffHeaderMode** is set to 2 (WAF reads the value of a custom header field that you specify as the client IP address).
   */
  xffHeaders?: string[];
  /**
   * @remarks
   * Specifies whether the X-Forward-For-Proto header passes the WAF protocol. Valid values:
   * 
   * - **true** (default): The WAF protocol is passed.
   * 
   * - **false**: The WAF protocol is not passed.
   * 
   * @example
   * true
   */
  xffProto?: boolean;
  static names(): { [key: string]: string } {
    return {
      certificates: 'Certificates',
      cipherSuite: 'CipherSuite',
      cloudResourceId: 'CloudResourceId',
      customCiphers: 'CustomCiphers',
      enableTLSv3: 'EnableTLSv3',
      http2Enabled: 'Http2Enabled',
      keepalive: 'Keepalive',
      keepaliveRequests: 'KeepaliveRequests',
      keepaliveTimeout: 'KeepaliveTimeout',
      logHeaders: 'LogHeaders',
      maxBodySize: 'MaxBodySize',
      ownerUserId: 'OwnerUserId',
      port: 'Port',
      protocol: 'Protocol',
      readTimeout: 'ReadTimeout',
      status: 'Status',
      subStatus: 'SubStatus',
      subStatusDetails: 'SubStatusDetails',
      TLSVersion: 'TLSVersion',
      writeTimeout: 'WriteTimeout',
      xffHeaderMode: 'XffHeaderMode',
      xffHeaders: 'XffHeaders',
      xffProto: 'XffProto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificates: { 'type': 'array', 'itemType': DescribeCloudResourceAccessPortDetailsResponseBodyAccessPortDetailsCertificates },
      cipherSuite: 'number',
      cloudResourceId: 'string',
      customCiphers: { 'type': 'array', 'itemType': 'string' },
      enableTLSv3: 'boolean',
      http2Enabled: 'boolean',
      keepalive: 'boolean',
      keepaliveRequests: 'number',
      keepaliveTimeout: 'number',
      logHeaders: { 'type': 'array', 'itemType': DescribeCloudResourceAccessPortDetailsResponseBodyAccessPortDetailsLogHeaders },
      maxBodySize: 'number',
      ownerUserId: 'string',
      port: 'number',
      protocol: 'string',
      readTimeout: 'number',
      status: 'number',
      subStatus: 'string',
      subStatusDetails: { 'type': 'array', 'itemType': DescribeCloudResourceAccessPortDetailsResponseBodyAccessPortDetailsSubStatusDetails },
      TLSVersion: 'string',
      writeTimeout: 'number',
      xffHeaderMode: 'number',
      xffHeaders: { 'type': 'array', 'itemType': 'string' },
      xffProto: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.certificates)) {
      $dara.Model.validateArray(this.certificates);
    }
    if(Array.isArray(this.customCiphers)) {
      $dara.Model.validateArray(this.customCiphers);
    }
    if(Array.isArray(this.logHeaders)) {
      $dara.Model.validateArray(this.logHeaders);
    }
    if(Array.isArray(this.subStatusDetails)) {
      $dara.Model.validateArray(this.subStatusDetails);
    }
    if(Array.isArray(this.xffHeaders)) {
      $dara.Model.validateArray(this.xffHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudResourceAccessPortDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The port details of cloud service instances connected to WAF.
   */
  accessPortDetails?: DescribeCloudResourceAccessPortDetailsResponseBodyAccessPortDetails[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2EFCFE18-78F8-5079-B312-07***48B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessPortDetails: 'AccessPortDetails',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPortDetails: { 'type': 'array', 'itemType': DescribeCloudResourceAccessPortDetailsResponseBodyAccessPortDetails },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.accessPortDetails)) {
      $dara.Model.validateArray(this.accessPortDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

