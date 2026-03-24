// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateCloudResourceRequestListenCertificates extends $dara.Model {
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
   * The ID of the certificate to add.
   * 
   * > Call [DescribeResourceInstanceCerts](https://help.aliyun.com/document_detail/2718120.html) to query the IDs of all SSL certificates that are associated with the cloud product instance.
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
   * The type of cipher suite to add. This parameter is used only when **HttpsPorts** is not empty, which indicates that the domain name uses HTTPS. Valid values:
   * 
   * - **1**: Adds all cipher suites.
   * 
   * - **2**: Adds strong cipher suites. You can select this value only when **TLSVersion** is set to **tlsv1.2**.
   * 
   * - **99**: Adds custom cipher suites.
   * 
   * @example
   * 1
   */
  cipherSuite?: number;
  /**
   * @remarks
   * The custom cipher suites to add. This parameter is used only when **CipherSuite** is set to **99**.
   */
  customCiphers?: string[];
  /**
   * @remarks
   * Specifies whether to support TLS 1.3. This parameter is used only when **HttpsPorts** is not empty, which indicates that the domain name uses HTTPS. Valid values:
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
   * Specifies whether to enable HTTP/2. This parameter is used only when **HttpsPorts** is not empty, which indicates that the domain name uses HTTPS. Valid values:
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
   * The port of the cloud product that is added to WAF.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
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
   * The ID of the cloud product instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1*****
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * The type of the cloud product. Valid values:
   * 
   * - **clb4**: Layer 4 CLB instance.
   * 
   * - **clb7**: Layer 7 CLB instance.
   * 
   * - **ecs**: ECS instance.
   * 
   * - **nlb**: Network Load Balancer (NLB) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * clb4
   */
  resourceProduct?: string;
  /**
   * @remarks
   * The region ID of the cloud product.
   * 
   * > This parameter is required if the ID of the instance that you want to add has not been synchronized to WAF.
   * 
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The TLS version to add. This parameter is used only when **HttpsPorts** is not empty, which indicates that the domain name uses HTTPS. Valid values:
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
      resourceRegionId: 'ResourceRegionId',
      TLSVersion: 'TLSVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificates: { 'type': 'array', 'itemType': CreateCloudResourceRequestListenCertificates },
      cipherSuite: 'number',
      customCiphers: { 'type': 'array', 'itemType': 'string' },
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

export class CreateCloudResourceRequestRedirect extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable persistent connections. Valid values:
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
   * The number of requests that can be reused in a persistent connection. Valid values: 60 to 1000.
   * 
   * > The number of requests that are reused over a persistent connection.
   * 
   * @example
   * 1000
   */
  keepaliveRequests?: number;
  /**
   * @remarks
   * The timeout period for an idle persistent connection. Valid values: 10 to 3600. Default value: 3600. Unit: seconds.
   * 
   * > The period of time after which an idle persistent connection is released.
   * 
   * @example
   * 3600
   */
  keepaliveTimeout?: number;
  /**
   * @remarks
   * The maximum size of a request body. Valid values: 2 to 10. Default value: 2. Unit: GB.
   * 
   * > This feature is available only for the WAF Ultimate edition.
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
   * The value of this parameter is in the \\`[**{"k":"*****key*****","v":"*****value*****"}**]\\` format. ***key*** indicates the custom request header field. ***value*** indicates the value of the field.
   * 
   * > If the custom header field already exists in the request, the system overwrites the value of the custom header field with the specified value.
   */
  requestHeaders?: CreateCloudResourceRequestRedirectRequestHeaders[];
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
   * - **0**: No Layer 7 proxy is deployed before WAF.
   * 
   * - **1**: WAF reads the first value of the XFF header field to obtain the client IP address.
   * 
   * - **2**: WAF reads the value of a custom header field to obtain the client IP address.
   * 
   * @example
   * 1
   */
  xffHeaderMode?: number;
  /**
   * @remarks
   * The list of custom header fields that are used to obtain the client IP address. The value is in the \\`[**"header1","header2",...**]\\` format.
   * 
   * > This parameter is required only when **XffHeaderMode** is set to 2, which indicates that WAF reads the value of a custom header field to obtain the client IP address.
   */
  xffHeaders?: string[];
  /**
   * @remarks
   * Specifies whether to use the X-Forwarded-Proto header to pass the WAF protocol. Valid values:
   * 
   * - **true** (default): passes the WAF protocol.
   * 
   * - **false**: does not pass the WAF protocol.
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
   * > Call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to query the ID of the current WAF instance.
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
  listen?: CreateCloudResourceRequestListen;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the resource owner.
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
   * The list of tags. You can add up to 20 tags.
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

