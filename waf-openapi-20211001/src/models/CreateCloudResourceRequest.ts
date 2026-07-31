// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateCloudResourceRequestListenCertificates extends $dara.Model {
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
   * The ID of the certificate to add.
   * 
   * > You can call [DescribeResourceInstanceCerts](https://help.aliyun.com/document_detail/2718120.html) to query the IDs of all SSL certificates associated with the cloud service instance.
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

export class CreateCloudResourceRequestListen extends $dara.Model {
  /**
   * @remarks
   * The list of certificate IDs.
   */
  certificates?: CreateCloudResourceRequestListenCertificates[];
  /**
   * @remarks
   * The type of cipher suite to add. This parameter is used only when **HttpsPorts** is not empty, which indicates that the domain name uses the HTTPS protocol. Valid values:
   * 
   * - **1**: all cipher suites.
   * 
   * - **2**: strong cipher suites. This value is available only when **TLSVersion** is set to **tlsv1.2**.
   * 
   * - **99**: custom cipher suites. This value is available only when TLSVersion is not set to tlsv1.3.
   * 
   * @example
   * 1
   */
  cipherSuite?: number;
  /**
   * @remarks
   * The specific custom cipher suites to add. This parameter is used only when **CipherSuite** is set to **99**.
   */
  customCiphers?: string[];
  /**
   * @remarks
   * The domain name connected to WAF.
   * > This parameter is required only when the cloud service type is ddos. For other service types, leave this field empty.
   * 
   * @example
   * www.c**sw.net
   */
  domain?: string;
  /**
   * @remarks
   * Specifies whether TLS 1.3 is supported. Valid values:
   * 
   * - **true**: TLS 1.3 is supported.
   * 
   * - **false**: TLS 1.3 is not supported.
   * 
   * > This parameter is used only when HttpsPorts is not empty, which indicates that the domain name uses the HTTPS protocol. When TLSVersion is set to tlsv1.3, this value must be true.
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
   * Specifies whether to enable HTTP/2. This parameter is used only when **HttpsPorts** is not empty, which indicates that the domain name uses the HTTPS protocol. Valid values:
   * 
   * - **true**: HTTP/2 is enabled.
   * 
   * - **false** (default): HTTP/2 is not enabled.
   * 
   * @example
   * true
   */
  http2Enabled?: boolean;
  /**
   * @remarks
   * The port of the cloud service connected to WAF.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The protocol type.
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
   * lb-bp1*****
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * The cloud service type.
   * 
   * This parameter is required.
   * 
   * @example
   * clb4
   */
  resourceProduct?: string;
  /**
   * @remarks
   * The region ID of the cloud service.
   * 
   * 
   * 
   * > This parameter is required when the instance ID to be connected has not been synchronized to WAF.
   * 
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The TLS version to add. This parameter is used only when **HttpsPorts** is not empty, which indicates that the domain name uses the HTTPS protocol. Valid values:
   * - **tlsv1**: Supports TLS 1.0 and later. Highest compatibility and lowest security.
   * - **tlsv1.1**: Supports TLS 1.1 and later. Good compatibility and good security.
   * - **tlsv1.2**: Supports TLS 1.2 and later. Good compatibility and highest security.
   * - **tlsv1.3**: Supports only TLS 1.3. Highest security and lowest compatibility.
   * 
   * @example
   * tlsv1
   */
  TLSVersion?: string;
  static names(): { [key: string]: string } {
    return {
      certificates: 'Certificates',
      cipherSuite: 'CipherSuite',
      customCiphers: 'CustomCiphers',
      domain: 'Domain',
      enableTLSv3: 'EnableTLSv3',
      http2Enabled: 'Http2Enabled',
      port: 'Port',
      protocol: 'Protocol',
      resourceInstanceId: 'ResourceInstanceId',
      resourceProduct: 'ResourceProduct',
      resourceRegionId: 'ResourceRegionId',
      TLSVersion: 'TLSVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificates: { 'type': 'array', 'itemType': CreateCloudResourceRequestListenCertificates },
      cipherSuite: 'number',
      customCiphers: { 'type': 'array', 'itemType': 'string' },
      domain: 'string',
      enableTLSv3: 'boolean',
      http2Enabled: 'boolean',
      port: 'number',
      protocol: 'string',
      resourceInstanceId: 'string',
      resourceProduct: 'string',
      resourceRegionId: 'string',
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

export class CreateCloudResourceRequestRedirectRequestHeaders extends $dara.Model {
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
   * The value set for the custom request header field.
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

export class CreateCloudResourceRequestRedirect extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable persistent connections. Valid values:
   * 
   * - **true** (default): Persistent connections are enabled.
   * 
   * - **false**: Persistent connections are not enabled.
   * 
   * @example
   * true
   */
  keepalive?: boolean;
  /**
   * @remarks
   * The number of requests that reuse persistent connections. Valid values: 60 to 1000.
   * 
   * > After persistent connections are enabled, this parameter specifies how many requests can reuse persistent connections.
   * 
   * @example
   * 1000
   */
  keepaliveRequests?: number;
  /**
   * @remarks
   * The timeout period of idle persistent connections. Valid values: 10 to 3600. Default value: 3600. Unit: seconds.
   * 
   * > Specifies how long an idle persistent connection can remain open before it is released.
   * 
   * @example
   * 3600
   */
  keepaliveTimeout?: number;
  /**
   * @remarks
   * The maximum request body size. Valid values: 2 to 10. Default value: 2. Unit: GB.
   * > Only Ultimate Edition supports this parameter.
   * 
   * @example
   * 2
   */
  maxBodySize?: number;
  /**
   * @remarks
   * The read timeout period. Unit: seconds.
   * Valid values: 1 to 3600.
   * 
   * @example
   * 1
   */
  readTimeout?: number;
  /**
   * @remarks
   * The value of this parameter is in the format of [**{"k":"_key_","v":"_value_"}**], where **_key_** specifies the custom request header field and **_value_** specifies the value set for the field.
   * 
   * > If the custom header field already exists in the request, the system overwrites the value of the custom field in the request with the specified traffic tag value.
   */
  requestHeaders?: CreateCloudResourceRequestRedirectRequestHeaders[];
  /**
   * @remarks
   * The write timeout period. Unit: seconds.
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
   * - **0**: No Layer 7 proxy is deployed in front of WAF.
   * 
   * - **1**: WAF reads the first value of the X-Forwarded-For (XFF) header field as the client IP address.
   * 
   * - **2**: WAF reads the value of a custom header field that you specify as the client IP address.
   * 
   * @example
   * 1
   */
  xffHeaderMode?: number;
  /**
   * @remarks
   * The list of custom header fields used to obtain the client IP address, in the format of [**"header1","header2",……**].
   * 
   * > This parameter is required only when **XffHeaderMode** is set to 2, which indicates that WAF reads the value of a custom header field that you specify as the client IP address.
   */
  xffHeaders?: string[];
  /**
   * @remarks
   * Specifies whether to use X-Forward-For-Proto to pass the protocol of WAF. Valid values:
   * 
   * - **true** (default): The protocol of WAF is passed.
   * 
   * - **false**: The protocol of WAF is not passed.
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
      requestHeaders: { 'type': 'array', 'itemType': CreateCloudResourceRequestRedirectRequestHeaders },
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

export class CreateCloudResourceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TagKey1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TagValue1
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

export class CreateCloudResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * The listening configuration.
   * 
   * This parameter is required.
   */
  listen?: CreateCloudResourceRequestListen;
  /**
   * @remarks
   * The UID of the current resource ownership.
   * 
   * @example
   * 123
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The forwarding configuration.
   */
  redirect?: CreateCloudResourceRequestRedirect;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
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
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The list of tags. A maximum of 20 tags can be specified.
   */
  tag?: CreateCloudResourceRequestTag[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      listen: 'Listen',
      ownerUserId: 'OwnerUserId',
      redirect: 'Redirect',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      listen: CreateCloudResourceRequestListen,
      ownerUserId: 'string',
      redirect: CreateCloudResourceRequestRedirect,
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateCloudResourceRequestTag },
    };
  }

  validate() {
    if(this.listen && typeof (this.listen as any).validate === 'function') {
      (this.listen as any).validate();
    }
    if(this.redirect && typeof (this.redirect as any).validate === 'function') {
      (this.redirect as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

