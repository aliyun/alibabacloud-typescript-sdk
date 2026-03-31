// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudResourceAccessPortDetailsResponseBodyAccessPortDetailsCertificates extends $dara.Model {
  /**
   * @remarks
   * The type of the HTTPS certificate. Valid values:
   * 
   * *   **default**: default certificate.
   * *   **extension**: additional certificate.
   * 
   * @example
   * default
   */
  appliedType?: string;
  /**
   * @remarks
   * The ID of the certificate.
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
   * The key of the custom header field.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The value of the custom header field.
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
  appliedType?: string;
  certId?: string;
  certName?: string;
  commonName?: string;
  domain?: string;
  expireTime?: number;
  productCertId?: string;
  productCertName?: string;
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
   * The certificates that are associated with the ports of cloud services.
   */
  certificates?: DescribeCloudResourceAccessPortDetailsResponseBodyAccessPortDetailsCertificates[];
  /**
   * @remarks
   * The type of the cipher suites. Valid values:
   * 
   * *   **1**: all cipher suites.
   * *   **2**: strong cipher suites.
   * *   **99**: custom cipher suites.
   * 
   * @example
   * 1
   */
  cipherSuite?: number;
  cloudResourceId?: string;
  /**
   * @remarks
   * The custom cipher suites that you want to add. This parameter is available only if you set **CipherSuite** to **99**.
   */
  customCiphers?: string[];
  /**
   * @remarks
   * Indicates whether to support TLS 1.3. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enableTLSv3?: boolean;
  /**
   * @remarks
   * Indicates whether to enable HTTP/2. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * True
   */
  http2Enabled?: boolean;
  /**
   * @remarks
   * Indicates whether to enable the persistent connection feature. Valid values:
   * 
   * *   **true** (default)
   * *   **false:**
   * 
   * @example
   * true
   */
  keepalive?: boolean;
  /**
   * @remarks
   * The number of reused persistent connections. Valid values: 60 to 1000.
   * 
   * >  This parameter specifies the number of requests that reuse persistent connections after you enable the persistent connection feature.
   * 
   * @example
   * 1000
   */
  keepaliveRequests?: number;
  /**
   * @remarks
   * The timeout period for idle persistent connections. Valid values: 10 to 3600. Default value: 15. Unit: seconds.
   * 
   * >  If no new requests are initiated over the idle persistent connection within the specified timeout period, the connection is closed.
   * 
   * @example
   * 10
   */
  keepaliveTimeout?: number;
  /**
   * @remarks
   * The custom header field that you want to use to label requests that are processed by WAF.
   * 
   * >  This parameter is returned only when the traffic marking feature is enabled for the domain name.
   */
  logHeaders?: DescribeCloudResourceAccessPortDetailsResponseBodyAccessPortDetailsLogHeaders[];
  /**
   * @example
   * 2
   */
  maxBodySize?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs.
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
   * The type of the protocol. Valid values:
   * 
   * *   **http**
   * *   **https**
   * 
   * @example
   * https
   */
  protocol?: string;
  /**
   * @remarks
   * The timeout period for read connections. Unit: seconds. Valid values: 1 to 3600.
   * 
   * @example
   * 5
   */
  readTimeout?: number;
  /**
   * @remarks
   * The status of the domain name. Valid values:
   * 
   * *   **1**: indicates that the port is available.
   * *   **2**: indicates that the port is being created.
   * *   **3**: indicates that the port is being modified.
   * *   **4**: indicates that the port is being released.
   * 
   * @example
   * 1
   */
  status?: number;
  subStatus?: string;
  subStatusDetails?: DescribeCloudResourceAccessPortDetailsResponseBodyAccessPortDetailsSubStatusDetails[];
  /**
   * @remarks
   * The version of the Transport Layer Security (TLS) protocol. Valid values:
   * 
   * *   **tlsv1**
   * *   **tlsv1.1**
   * *   **tlsv1.2**
   * 
   * @example
   * tlsv1
   */
  TLSVersion?: string;
  /**
   * @remarks
   * The timeout period for write connections. Unit: seconds. Valid values: 1 to 3600.
   * 
   * @example
   * 1
   */
  writeTimeout?: number;
  /**
   * @remarks
   * The method that WAF uses to obtain the originating IP address of a client. Valid values:
   * 
   * *   **0**: No Layer 7 proxies are deployed in front of WAF.
   * *   **1**: WAF reads the first value of the X-Forwarded-For (XFF) header field as the originating IP address of the client.
   * *   **2**: WAF reads the value of a custom header field as the originating IP address of the client.
   * 
   * @example
   * 0
   */
  xffHeaderMode?: number;
  /**
   * @remarks
   * The custom header field that is used to obtain the originating IP address of a client. Specify the value in the ["header1","header2",...] format.
   * 
   * >  This parameter is required only if you set **XffHeaderMode** to 2.
   */
  xffHeaders?: string[];
  /**
   * @remarks
   * Indicates whether to use the X-Forward-For-Proto header to identify the protocol used by WAF to forward requests to the origin server. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
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
   * The details of the ports of cloud services that are added to WAF.
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

