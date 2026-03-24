// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCloudResourceRequestListenCertificates extends $dara.Model {
  /**
   * @remarks
   * The type of the certificate for the HTTPS protocol. Valid values:
   * 
   * - **default**: a default certificate.
   * 
   * - **extension**: an extension certificate.
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
  static names(): { [key: string]: string } {
    return {
      appliedType: 'AppliedType',
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedType: 'string',
      certificateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCloudResourceRequestListen extends $dara.Model {
  /**
   * @remarks
   * The certificate information.
   */
  certificates?: ModifyCloudResourceRequestListenCertificates[];
  /**
   * @remarks
   * The type of the cipher suite to add. This parameter applies only when you use the HTTPS protocol. Valid values:
   * 
   * - **1**: adds all cipher suites.
   * 
   * - **2**: adds strong cipher suites. This value is available only when **TLSVersion** is set to **tlsv1.2**.
   * 
   * - **99**: adds custom cipher suites.
   * 
   * @example
   * 1
   */
  cipherSuite?: number;
  /**
   * @remarks
   * The custom cipher suites.
   */
  customCiphers?: string[];
  /**
   * @remarks
   * Indicates whether TLS 1.3 is supported. This parameter applies only when you use the HTTPS protocol. Valid values:
   * 
   * - **true**: TLS 1.3 is supported.
   * 
   * - **false**: TLS 1.3 is not supported.
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * true
   */
  enableTLSv3?: boolean;
  /**
   * @remarks
   * Indicates whether HTTP/2 is enabled. This parameter applies only when you use the HTTPS protocol. Valid values:
   * 
   * - **true**: enables HTTP/2.
   * 
   * - **false** (default): disables HTTP/2.
   * 
   * @example
   * true
   */
  http2Enabled?: boolean;
  /**
   * @remarks
   * The listening port of the cloud service instance that is added to WAF.
   * 
   * @example
   * 80
   * 
   * @deprecated
   */
  port?: number;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * - **http**: HTTP.
   * 
   * - **https**: HTTPS.
   * 
   * This parameter is required.
   * 
   * @example
   * http
   */
  protocol?: string;
  /**
   * @remarks
   * The ID of the cloud service instance.
   * 
   * @example
   * lb-***
   * 
   * @deprecated
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * The type of the cloud service. Valid values:
   * 
   * - **clb4**: Layer 4 Classic Load Balancer (CLB).
   * 
   * - **clb7**: Layer 7 CLB.
   * 
   * - **ecs**: Elastic Compute Service (ECS).
   * 
   * - **nlb**: Network Load Balancer (NLB).
   * 
   * @example
   * clb7
   * 
   * @deprecated
   */
  resourceProduct?: string;
  /**
   * @remarks
   * The Transport Layer Security (TLS) version. This parameter applies only when you use the HTTPS protocol. Valid values:
   * 
   * - **tlsv1**
   * 
   * - **tlsv1.1**
   * 
   * - **tlsv1.2**
   * 
   * @example
   * tlsv1.2
   */
  TLSVersion?: string;
  static names(): { [key: string]: string } {
    return {
      certificates: 'Certificates',
      cipherSuite: 'CipherSuite',
      customCiphers: 'CustomCiphers',
      enableTLSv3: 'EnableTLSv3',
      http2Enabled: 'Http2Enabled',
      port: 'Port',
      protocol: 'Protocol',
      resourceInstanceId: 'ResourceInstanceId',
      resourceProduct: 'ResourceProduct',
      TLSVersion: 'TLSVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificates: { 'type': 'array', 'itemType': ModifyCloudResourceRequestListenCertificates },
      cipherSuite: 'number',
      customCiphers: { 'type': 'array', 'itemType': 'string' },
      enableTLSv3: 'boolean',
      http2Enabled: 'boolean',
      port: 'number',
      protocol: 'string',
      resourceInstanceId: 'string',
      resourceProduct: 'string',
      TLSVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.certificates)) {
      $dara.Model.validateArray(this.certificates);
    }
    if(Array.isArray(this.customCiphers)) {
      $dara.Model.validateArray(this.customCiphers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCloudResourceRequestRedirectRequestHeaders extends $dara.Model {
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

export class ModifyCloudResourceRequestRedirect extends $dara.Model {
  /**
   * @remarks
   * Indicates whether persistent connections are enabled. Valid values:
   * 
   * - **true** (default): enables persistent connections.
   * 
   * - **false**: disables persistent connections.
   * 
   * @example
   * true
   */
  keepalive?: boolean;
  /**
   * @remarks
   * The maximum number of requests that can be served through one persistent connection. Valid values: 60 to 1000.
   * 
   * @example
   * 1000
   */
  keepaliveRequests?: number;
  /**
   * @remarks
   * The timeout period for an idle persistent connection. Valid values: 10 to 3600. Default value: 3600. Unit: seconds.
   * 
   * @example
   * 15
   */
  keepaliveTimeout?: number;
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
   * The read timeout period. Unit: seconds. Valid values: 1 to 3600.
   * 
   * @example
   * 1
   */
  readTimeout?: number;
  /**
   * @remarks
   * The custom header fields used to mark traffic that is processed by WAF.
   */
  requestHeaders?: ModifyCloudResourceRequestRedirectRequestHeaders[];
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
   * The method that WAF uses to obtain the real IP address of a client. Valid values:
   * 
   * - **0**: WAF obtains the real IP address of the client from the request. Use this value when no Layer 7 proxy resides before WAF.
   * 
   * - **1**: WAF reads the first value of the X-Forwarded-For (XFF) header as the client IP address.
   * 
   * - **2**: WAF reads the value of a custom header field as the client IP address.
   * 
   * @example
   * 0
   */
  xffHeaderMode?: number;
  /**
   * @remarks
   * The custom header fields that are used to obtain the client IP address.
   * 
   * > This parameter is required only when **XffHeaderMode** is set to **2**.
   */
  xffHeaders?: string[];
  /**
   * @remarks
   * Indicates whether the X-Forwarded-Proto header is used to pass the protocol used by WAF. Valid values:
   * 
   * - **true** (default): passes the protocol.
   * 
   * - **false**: does not pass the protocol.
   * 
   * @example
   * true
   */
  xffProto?: boolean;
  static names(): { [key: string]: string } {
    return {
      keepalive: 'Keepalive',
      keepaliveRequests: 'KeepaliveRequests',
      keepaliveTimeout: 'KeepaliveTimeout',
      maxBodySize: 'MaxBodySize',
      readTimeout: 'ReadTimeout',
      requestHeaders: 'RequestHeaders',
      writeTimeout: 'WriteTimeout',
      xffHeaderMode: 'XffHeaderMode',
      xffHeaders: 'XffHeaders',
      xffProto: 'XffProto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keepalive: 'boolean',
      keepaliveRequests: 'number',
      keepaliveTimeout: 'number',
      maxBodySize: 'number',
      readTimeout: 'number',
      requestHeaders: { 'type': 'array', 'itemType': ModifyCloudResourceRequestRedirectRequestHeaders },
      writeTimeout: 'number',
      xffHeaderMode: 'number',
      xffHeaders: { 'type': 'array', 'itemType': 'string' },
      xffProto: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.requestHeaders)) {
      $dara.Model.validateArray(this.requestHeaders);
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

export class ModifyCloudResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud resource that is added to WAF.
   * 
   * > Call [CreateCloudResource](https://help.aliyun.com/document_detail/2839876.html) to add a cloud resource. The resource ID is included in the response.
   * 
   * @example
   * lb-***-80-clb7
   */
  cloudResourceId?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > Call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * The listener configuration.
   * 
   * This parameter is required.
   */
  listen?: ModifyCloudResourceRequestListen;
  /**
   * @remarks
   * The forwarding configuration.
   */
  redirect?: ModifyCloudResourceRequestRedirect;
  /**
   * @remarks
   * The region of the WAF instance. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      cloudResourceId: 'CloudResourceId',
      instanceId: 'InstanceId',
      listen: 'Listen',
      redirect: 'Redirect',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudResourceId: 'string',
      instanceId: 'string',
      listen: ModifyCloudResourceRequestListen,
      redirect: ModifyCloudResourceRequestRedirect,
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  validate() {
    if(this.listen && typeof (this.listen as any).validate === 'function') {
      (this.listen as any).validate();
    }
    if(this.redirect && typeof (this.redirect as any).validate === 'function') {
      (this.redirect as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

