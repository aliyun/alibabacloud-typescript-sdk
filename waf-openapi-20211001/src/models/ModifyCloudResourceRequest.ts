// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCloudResourceRequestListenCertificates extends $dara.Model {
  /**
   * @remarks
   * The type of the certificate. Valid values:
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
   * The certificates.
   */
  certificates?: ModifyCloudResourceRequestListenCertificates[];
  /**
   * @remarks
   * The type of the cipher suites that you want to add. This parameter is available only if you specify **HttpsPorts**. Valid values:
   * 
   * *   **1**: all cipher suites.
   * *   **2**: strong cipher suites. This value is available only if you set **TLSVersion** to **tlsv1.2**.
   * *   **99**: custom cipher suites.
   * 
   * @example
   * 1
   */
  cipherSuite?: number;
  /**
   * @remarks
   * The custom cipher suites that you want to add.
   */
  customCiphers?: string[];
  /**
   * @remarks
   * Specifies whether to support TLS 1.3. This parameter is available only if you specify **HttpsPorts**. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * Specifies whether to enable HTTP/2. This parameter is available only if you specify **HttpsPorts**. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * true
   */
  http2Enabled?: boolean;
  /**
   * @remarks
   * The port of the cloud service instance that is added to WAF.
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
   * *   **http**
   * *   **https**
   * 
   * This parameter is required.
   * 
   * @example
   * http
   */
  protocol?: string;
  /**
   * @remarks
   * The ID of the cloud service instance that is added to WAF.
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
   * *   **clb4**: Layer 4 Classic Load Balancer (CLB).
   * *   **clb7**: Layer 7 CLB.
   * *   **ecs**: Elastic Compute Service (ECS).
   * *   **nlb**: Network Load Balancer (NLB).
   * 
   * @example
   * clb7
   * 
   * @deprecated
   */
  resourceProduct?: string;
  /**
   * @remarks
   * The Transport Layer Security (TLS) version that you want to add. This parameter is available only if you specify **HttpsPorts**. Valid values:
   * 
   * *   **tlsv1**
   * *   **tlsv1.1**
   * *   **tlsv1.2**
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

export class ModifyCloudResourceRequestRedirect extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the persistent connection feature. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  keepalive?: boolean;
  /**
   * @remarks
   * The number of reused persistent connections. Valid values: 60 to 1000.
   * 
   * >  This parameter specifies the number of persistent connections that can be reused after you enable the persistent connection feature.
   * 
   * @example
   * 1000
   */
  keepaliveRequests?: number;
  /**
   * @remarks
   * The timeout period of idle persistent connections. Valid values: 10 to 3600. Default value: 3600. Unit: seconds.
   * 
   * >  This parameter specifies the period of time after which an idle persistent connection is closed.
   * 
   * @example
   * 15
   */
  keepaliveTimeout?: number;
  /**
   * @example
   * 5
   */
  maxBodySize?: number;
  /**
   * @remarks
   * The timeout period of read connections. Unit: seconds. Valid values: 1 to 3600.
   * 
   * @example
   * 1
   */
  readTimeout?: number;
  /**
   * @remarks
   * The custom header fields, which are key-value pairs. The fields are used to mark requests that pass through WAF.
   */
  requestHeaders?: ModifyCloudResourceRequestRedirectRequestHeaders[];
  /**
   * @remarks
   * The timeout period of write connections. Unit: seconds. Valid values: 1 to 3600.
   * 
   * @example
   * 1
   */
  writeTimeout?: number;
  /**
   * @remarks
   * The method that is used to obtain the originating IP address of a client. Valid values:
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
   * The custom header fields that are used to obtain the originating IP address of a client. Specify the value in the ["header1","header2",...] format.
   * 
   * >  This parameter is required only if you set **XffHeaderMode** to 2.
   */
  xffHeaders?: string[];
  /**
   * @remarks
   * Specifies whether to use the X-Forward-For-Proto header field to pass the protocol used by WAF to forward requests to the origin server. Valid values:
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
  cloudResourceId?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * The listener configurations.
   * 
   * This parameter is required.
   */
  listen?: ModifyCloudResourceRequestListen;
  /**
   * @remarks
   * The forwarding configurations.
   */
  redirect?: ModifyCloudResourceRequestRedirect;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: the Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
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

