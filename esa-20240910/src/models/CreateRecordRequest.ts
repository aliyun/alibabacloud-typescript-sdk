// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRecordRequestAuthConf extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID of the account to which the origin server belongs. This parameter is required when the origin server type is OSS and the authentication type is private read across accounts, or when the origin server type is S3 and the authentication type is private read.
   * 
   * @example
   * u0Nkg5gBK*******QF5wvKMM504JUHt
   */
  accessKey?: string;
  /**
   * @remarks
   * The origin server authentication type. Different origin server types support different authentication types. The origin server type is specified by the SourceType parameter. This parameter is required when the origin server type is OSS or S3. Valid values:
   * - **public**: Public read. Select this value when the origin server type is OSS or S3 and the origin server allows public read access.
   * - **private**: Private read. Select this value when the origin server type is S3 and the origin server allows private read access.
   * - **private_same_account**: Private read within the same account. Select this value when the origin server type is OSS, the origin server belongs to the same Alibaba Cloud account, and the origin server allows private read access.
   * - **private_cross_account**: Private read across accounts. Select this value when the origin server type is OSS, the origin server belongs to a different Alibaba Cloud account, and the origin server allows private read access.
   * 
   * @example
   * private
   */
  authType?: string;
  /**
   * @remarks
   * The region to which the origin server belongs. This parameter is required when the origin server type is S3. You can obtain the region information from the official website of S3.
   * 
   * @example
   * us-east-1
   */
  region?: string;
  /**
   * @remarks
   * The AccessKey secret of the account to which the origin server belongs. This parameter is required when the origin server type is OSS and the authentication type is private read across accounts, or when the origin server type is S3 and the authentication type is private read.
   * 
   * @example
   * VIxuvJSA2S03f******kp208dy5w7
   */
  secretKey?: string;
  /**
   * @remarks
   * The signature algorithm version. This parameter is required when the origin server type is S3 and the authentication type is private read. Valid values:
   * - **v2**
   * - **v4**
   * 
   * If this parameter is not specified, the default value is v4.
   * 
   * @example
   * v4
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      authType: 'AuthType',
      region: 'Region',
      secretKey: 'SecretKey',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      authType: 'string',
      region: 'string',
      secretKey: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecordRequestData extends $dara.Model {
  /**
   * @remarks
   * The encryption algorithm used by the record. Valid values: **0** to **255**. This parameter is required when you add a CERT or SSHFP record.
   * 
   * @example
   * 1
   */
  algorithm?: number;
  /**
   * @remarks
   * The public key certificate information of the record. This parameter is required when you add a CERT, SMIMEA, or TLSA record.
   * 
   * @example
   * dGVzdGFkYWxrcw==
   */
  certificate?: string;
  /**
   * @remarks
   * The public key fingerprint value of the record. This parameter is required when you add an SSHFP record.
   * 
   * @example
   * abcdef1234567890
   */
  fingerprint?: string;
  /**
   * @remarks
   * The flag of the record. For a CAA record, the flag indicates its priority and processing method. Valid values: **0** to **255**. This parameter is required when you add a CAA record.
   * 
   * @example
   * 128
   */
  flag?: number;
  /**
   * @remarks
   * The public key tag of the record. Valid values: **0** to **65535**. This parameter is required when you add a CERT record.
   * 
   * @example
   * 0
   */
  keyTag?: number;
  /**
   * @remarks
   * The algorithm policy used by the record to match or verify the certificate. Valid values: **0** to **255**. This parameter is required when you add an SMIMEA or TLSA record.
   * 
   * @example
   * 1
   */
  matchingType?: number;
  /**
   * @remarks
   * The port of the record. Valid values: **0** to **65535**. This parameter is required when you add an SRV record.
   * 
   * @example
   * 0
   */
  port?: number;
  /**
   * @remarks
   * The priority of the record. Valid values: **0** to **65535**. A smaller value indicates a higher priority. This parameter is required when you add an MX, SRV, or URI record.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The type of the certificate or public key used by the record. Valid values: **0** to **255**. This parameter is required when you add an SMIMEA or TLSA record.
   * 
   * @example
   * 1
   */
  selector?: number;
  /**
   * @remarks
   * The tag of the record. For a CAA record, the tag indicates its specific type and purpose. This parameter is required when you add a CAA record. Valid values:
   * - **issue**: Authorizes a specific CA to issue certificates for the domain name. This is typically followed by the domain name of the CA.
   * - **issuewild**: Authorizes a specific CA to issue wildcard certificates for the domain name, such as *.example.com.
   * - **iodef**: Specifies a URI to receive reports about CAA record violations.
   * 
   * @example
   * issue
   */
  tag?: string;
  /**
   * @remarks
   * The certificate type for a CERT record, or the public key type for an SSHFP record. This parameter is required when you add a CERT or SSHFP record.
   * 
   * @example
   * 0
   */
  type?: number;
  /**
   * @remarks
   * The usage identifier of the record. Valid values: **0** to **255**. This parameter is required when you add an SMIMEA or TLSA record.
   * 
   * @example
   * 1
   */
  usage?: number;
  /**
   * @remarks
   * The record value or partial content. This parameter is required when the record type is A/AAAA, CNAME, NS, MX, TXT, CAA, SRV, or URI. This parameter has different meanings for different record types:
   * 
   * - **A/AAAA**: The destination IP address. Separate multiple IP addresses with commas (,). At least one IPv4 address is required.
   * - **CNAME**: The destination domain name.
   * - **NS**: The name server of the domain name.
   * - **MX**: The domain name of the destination mail server.
   * - **TXT**: A valid text string.
   * - **CAA**: The domain name of the certification authority (CA).
   * - **SRV**: The domain name of the destination host.
   * - **URI**: A valid URI string.
   * 
   * @example
   * example.com
   */
  value?: string;
  /**
   * @remarks
   * The weight of the record. Valid values: **0** to **65535**. This parameter is required when you add an SRV or URI record.
   * 
   * @example
   * 0
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      certificate: 'Certificate',
      fingerprint: 'Fingerprint',
      flag: 'Flag',
      keyTag: 'KeyTag',
      matchingType: 'MatchingType',
      port: 'Port',
      priority: 'Priority',
      selector: 'Selector',
      tag: 'Tag',
      type: 'Type',
      usage: 'Usage',
      value: 'Value',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'number',
      certificate: 'string',
      fingerprint: 'string',
      flag: 'number',
      keyTag: 'number',
      matchingType: 'number',
      port: 'number',
      priority: 'number',
      selector: 'number',
      tag: 'string',
      type: 'number',
      usage: 'number',
      value: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The origin server authentication information for a CNAME record.
   */
  authConf?: CreateRecordRequestAuthConf;
  /**
   * @remarks
   * The business scenario used to tag the DNS record. This parameter is required when proxy acceleration is enabled for the DNS record. That is, the Proxied parameter is set to true. This parameter is not required when proxy acceleration is disabled. That is, the Proxied parameter is set to false. Valid values:
   * - **image_video**: Images and videos.
   * - **api**: API operations.
   * - **web**: Web pages.
   * 
   * @example
   * web
   */
  bizName?: string;
  /**
   * @remarks
   * The description of the record. The description can be up to 100 characters in length.
   * 
   * @example
   * This is a remark.
   */
  comment?: string;
  /**
   * @remarks
   * The DNS information of the record. The required content for this field varies based on the record type. For more information, see
   * <props="china">[Documentation](https://help.aliyun.com/document_detail/2708761.html)<props="intl">[Documentation](https://www.alibabacloud.com/help/doc-detail/2708761.html)
   * .
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *     "value":"2.2.2.2"
   * }
   */
  data?: CreateRecordRequestData;
  /**
   * @remarks
   * The back-to-origin host policy. This parameter takes effect when the record type is CNAME. Settings for the host policy in back-to-origin requests. Two patterns are available:
   * 
   * - **follow_hostname**: Follows the request host.
   * - **follow_origin_domain**: Follows the Origin Domain Name.
   * 
   * @example
   * follow_origin_domain
   */
  hostPolicy?: string;
  /**
   * @remarks
   * The HTTP port. By default, port 80 is supported.
   * 
   * @example
   * 80,2052,2082,2086,2095,8080,8880
   */
  httpPorts?: string;
  /**
   * @remarks
   * The HTTPS port. By default, port 443 is supported.
   * 
   * @example
   * 443,2053,2083,2087,2096,8443
   */
  httpsPorts?: string;
  /**
   * @remarks
   * Specifies whether to enable proxy acceleration for the record. Proxy acceleration can be enabled only for CNAME, A, or AAAA records. That is, the Type parameter is set to CNAME, A, or AAAA. Valid values:
   * - **true**: Enables proxy acceleration.
   * - **false**: Disables proxy acceleration.
   * 
   * @example
   * true
   */
  proxied?: boolean;
  /**
   * @remarks
   * The record name.
   * 
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * The site ID. You can obtain the site ID by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @remarks
   * The origin server type for a CNAME record. This parameter is required when you add a CNAME record. That is, the Type parameter is set to CNAME. Valid values:
   * 
   * - **OSS**: OSS origin server.
   * - **S3**: S3 origin server.
   * - **LB**: Load balancing origin server.
   * - **OP**: IPAM pool origin server.
   * - **Domain**: Common domain name origin server.
   * 
   * If this parameter is not specified or is left empty, the default value is Domain, which indicates a common domain name origin server.
   * 
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @remarks
   * The time-to-live (TTL) of the record, in seconds. A value of 1 indicates that the TTL is automatically determined.
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  ttl?: number;
  /**
   * @remarks
   * The DNS record type, such as **A/AAAA**, **CNAME**, or **TXT**.
   * 
   * This parameter is required.
   * 
   * @example
   * A/AAAA
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      authConf: 'AuthConf',
      bizName: 'BizName',
      comment: 'Comment',
      data: 'Data',
      hostPolicy: 'HostPolicy',
      httpPorts: 'HttpPorts',
      httpsPorts: 'HttpsPorts',
      proxied: 'Proxied',
      recordName: 'RecordName',
      siteId: 'SiteId',
      sourceType: 'SourceType',
      ttl: 'Ttl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConf: CreateRecordRequestAuthConf,
      bizName: 'string',
      comment: 'string',
      data: CreateRecordRequestData,
      hostPolicy: 'string',
      httpPorts: 'string',
      httpsPorts: 'string',
      proxied: 'boolean',
      recordName: 'string',
      siteId: 'number',
      sourceType: 'string',
      ttl: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.authConf && typeof (this.authConf as any).validate === 'function') {
      (this.authConf as any).validate();
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

