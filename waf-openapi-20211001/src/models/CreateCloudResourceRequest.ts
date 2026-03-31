// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateCloudResourceRequestListenCertificates extends $dara.Model {
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
   * The ID of the certificate that you want to add.
   * 
   * >  You can call the [DescribeCertificates](https://help.aliyun.com/document_detail/160783.html) operation to query the IDs of all SSL certificates that are associated with a domain name.
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
   * The certificates.
   */
  certificates?: CreateCloudResourceRequestListenCertificates[];
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
   * The custom cipher suites that you want to add. This parameter is available only if you set **CipherSuite** to **99**.
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
   * The port of the cloud service.
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
   * The instance ID of the cloud service.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1*****
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * The type of the cloud service that you want to add. Valid values:
   * 
   * *   **clb4**: Layer 4 CLB.
   * *   **clb7**: Layer 7 CLB.
   * *   **ecs**: ECS.
   * *   **nlb**: Network Load Balancer (NLB).
   * 
   * This parameter is required.
   * 
   * @example
   * clb4
   */
  resourceProduct?: string;
  resourceRegionId?: string;
  /**
   * @remarks
   * The Transport Layer Security (TLS) version that you want to add. This parameter is available only if you specify **HttpsPorts**. Valid values:
   * 
   * *   **tlsv1**
   * *   **tlsv1.1**
   * *   **tlsv1.2**
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

export class CreateCloudResourceRequestRedirect extends $dara.Model {
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
   * The custom header fields. Specify the value in the [**{"k":"*key*","v":"*value*"}**] format. ***key*** specifies the key of a custom header field. ***value*** specifies the value of a custom header field.
   * 
   * >  If a request contains a custom header field, WAF overwrites the original value of the field with the specified value.
   */
  requestHeaders?: CreateCloudResourceRequestRedirectRequestHeaders[];
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
   * 1
   */
  xffHeaderMode?: number;
  /**
   * @remarks
   * The custom header fields that are used to obtain the originating IP address of a client. Specify the value in the **["header1","header2",...]** format.
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
   * The key of the tag.
   * 
   * @example
   * TagKey1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
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
  listen?: CreateCloudResourceRequestListen;
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
   * The forwarding configurations.
   */
  redirect?: CreateCloudResourceRequestRedirect;
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
  /**
   * @remarks
   * The tags. You can specify up to 20 tags.
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

