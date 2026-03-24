// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudResourceAccessPortDetailsResponseBodyAccessPortDetailsCertificates extends $dara.Model {
  /**
   * @remarks
   * The type of the certificate for the HTTPS protocol. Valid values:
   * 
   * - **default**: the default certificate.
   * 
   * - **extension**: the additional certificate.
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
   * The name of the certificate.
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
   * The custom request header field.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The value of the custom request header field.
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
   * The type of the certificate for the HTTPS protocol. Valid values:
   * 
   * - **default**: the default certificate.
   * 
   * - **extension**: the additional certificate.
   * 
   * @example
   * default
   */
  appliedType?: string;
  /**
   * @remarks
   * The ID of the certificate in Certificates Management Service.
   * 
   * @example
   * 123-cn-hangzhou
   */
  certId?: string;
  /**
   * @remarks
   * The name of the certificate in Certificates Management Service.
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
   * The domain name that is bound to the certificate.
   * 
   * @example
   * test.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * The expiration time of the certificate. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1746328456000
   */
  expireTime?: number;
  /**
   * @remarks
   * The ID of the certificate that is saved for the cloud service.
   * 
   * @example
   * 123
   */
  productCertId?: string;
  /**
   * @remarks
   * The name of the certificate that is saved for the cloud service.
   * 
   * @example
   * test-name
   */
  productCertName?: string;
  /**
   * @remarks
   * The reason for the abnormal protection status. Valid values:
   * 
   * - **UserUploadCert**: The certificate is manually uploaded.
   * 
   * - **CertNotExistInCertCenter**: The certificate does not exist in Certificates Management Service.
   * 
   * - **CertExpired**: The certificate has expired.
   * 
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
   * The list of certificates for the port of the cloud service instance.
   */
  certificates?: DescribeCloudResourceAccessPortDetailsResponseBodyAccessPortDetailsCertificates[];
  /**
   * @remarks
   * The type of the cipher suite. Valid values:
   * 
   * - **1**: all cipher suites.
   * 
   * - **2**: strong cipher suites.
   * 
   * - **99**: custom cipher suites.
   * 
   * @example
   * 1
   */
  cipherSuite?: number;
  /**
   * @remarks
   * The ID of the resource that is added to WAF. The ID is automatically generated by WAF.
   * 
   * @example
   * i-bp1**************7ey-80-ecs
   */
  cloudResourceId?: string;
  /**
   * @remarks
   * The custom cipher suites. This parameter is returned only when **CipherSuite** is set to **99**.
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
   * - **false**: HTTP/2 is not enabled.
   * 
   * @example
   * True
   */
  http2Enabled?: boolean;
  /**
   * @remarks
   * Indicates whether to enable persistent connections. Valid values:
   * 
   * - **true**: Enables persistent connections. This is the default value.
   * 
   * - **false**: Disables persistent connections.
   * 
   * @example
   * true
   */
  keepalive?: boolean;
  /**
   * @remarks
   * The number of requests that can be reused in a persistent connection. Valid values: 60 to 1000.
   * 
   * > This parameter specifies the number of requests that can be reused after a persistent connection is established.
   * 
   * @example
   * 1000
   */
  keepaliveRequests?: number;
  /**
   * @remarks
   * The timeout period for an idle persistent connection. Valid values: 10 to 3600. Default value: 15. Unit: seconds.
   * 
   * > This parameter specifies the period of time after which an idle persistent connection is released.
   * 
   * @example
   * 10
   */
  keepaliveTimeout?: number;
  /**
   * @remarks
   * The key-value pair that is used to tag the traffic that is processed by WAF.
   * 
   * > This parameter is returned only when the traffic tagging feature is enabled for the domain name.
   */
  logHeaders?: DescribeCloudResourceAccessPortDetailsResponseBodyAccessPortDetailsLogHeaders[];
  /**
   * @remarks
   * The maximum size of a request body. Valid values: 2 to 10. Default value: 2. Unit: GB.
   * 
   * @example
   * 2
   */
  maxBodySize?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the cloud service belongs.
   * 
   * @example
   * 123
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The port of the cloud service that is added to WAF.
   * 
   * @example
   * 443
   */
  port?: number;
  /**
   * @remarks
   * The protocol. Valid values:
   * 
   * - **http**: HTTP.
   * 
   * - **https**: HTTPS.
   * 
   * @example
   * https
   */
  protocol?: string;
  /**
   * @remarks
   * The read timeout period. Unit: seconds. Valid values: 1 to 3600.
   * 
   * @example
   * 5
   */
  readTimeout?: number;
  /**
   * @remarks
   * The status of the domain name. Valid values:
   * 
   * - **1**: The port is in the Normal state.
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
   * The abnormal protection status. Valid values:
   * 
   * - **InvalidCert**: The certificate is invalid.
   * 
   * - **ClientCertOpend**: Mutual authentication is enabled.
   * 
   * - **NetworkConfigLost**: The network configuration of the cloud service is abnormal.
   * 
   * @example
   * InvalidCert
   */
  subStatus?: string;
  /**
   * @remarks
   * The details of the abnormal protection status. This parameter is returned only when **SubStatus** is set to InvalidCert.
   */
  subStatusDetails?: DescribeCloudResourceAccessPortDetailsResponseBodyAccessPortDetailsSubStatusDetails[];
  /**
   * @remarks
   * The version of the Transport Layer Security (TLS) protocol. Valid values:
   * 
   * - **tlsv1**
   * 
   * - **tlsv1.1**
   * 
   * - **tlsv1.2**
   * 
   * @example
   * tlsv1
   */
  TLSVersion?: string;
  /**
   * @remarks
   * The write timeout period. Unit: seconds. Valid values: 1 to 3600.
   * 
   * @example
   * 1
   */
  writeTimeout?: number;
  /**
   * @remarks
   * The mode that WAF uses to obtain the real IP address of a client. Valid values:
   * 
   * - **0**: WAF is the first Layer 7 proxy before client traffic is forwarded to the origin server.
   * 
   * - **1**: WAF reads the first IP address from the X-Forwarded-For (XFF) header as the client IP address.
   * 
   * - **2**: WAF reads the value of a custom header as the client IP address.
   * 
   * @example
   * 0
   */
  xffHeaderMode?: number;
  /**
   * @remarks
   * The custom header fields that are used to obtain the client IP address. The value is a string in the `["header1","header2",...]` format.
   * 
   * > This parameter is returned only when **XffHeaderMode** is set to 2.
   */
  xffHeaders?: string[];
  /**
   * @remarks
   * Indicates whether to use the X-Forwarded-For-Proto header to identify the protocol used by WAF. Valid values:
   * 
   * - **true**: Identifies the protocol used by WAF. This is the default value.
   * 
   * - **false**: Does not identify the protocol used by WAF.
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
   * The details of the ports for the cloud service instance that is added to WAF.
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

