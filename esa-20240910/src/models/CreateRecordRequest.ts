// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRecordRequestAuthConf extends $dara.Model {
  /**
   * @remarks
   * The AccessKey of the account that owns the origin. This value is required when the origin type is OSS and the authentication type is private cross-account read, or when the origin type is S3 and the authentication type is private read.
   * 
   * @example
   * u0Nkg5gBK*******QF5wvKMM504JUHt
   */
  accessKey?: string;
  /**
   * @remarks
   * The origin authentication type. Different origin types support different authentication types. The origin type refers to the SourceType parameter in this API. When the origin type is OSS or S3, you need to specify the origin authentication type. Valid values:
   * - **public**: Public read. Select this value when the origin type is OSS or S3 and the origin has public read access.
   * - **private**: Private read. Select this value when the origin type is S3 and the origin has private read access.
   * - **private_same_account**: Private same-account read. Select this value when the origin type is OSS, the origin is under the same Alibaba Cloud account, and the origin has private read access.
   * - **private_cross_account**: Private cross-account read. Select this value when the origin type is OSS, the origin is not under the same Alibaba Cloud account, and the origin has private read access.
   * 
   * @example
   * private
   */
  authType?: string;
  /**
   * @remarks
   * The region where the origin is located. This value is required when the origin type is S3. The region information can be obtained from the official S3 website.
   * 
   * @example
   * us-east-1
   */
  region?: string;
  /**
   * @remarks
   * The SecretKey of the account that owns the origin. This value is required when the origin type is OSS and the authentication type is private cross-account read, or when the origin type is S3 and the authentication type is private read.
   * 
   * @example
   * VIxuvJSA2S03f******kp208dy5w7
   */
  secretKey?: string;
  /**
   * @remarks
   * The signature algorithm version. This is required when the origin type is S3 and the authentication type is private read. The following two versions are supported:
   * - **v2**
   * - **v4**
   * 
   * If not specified, the default value is v4.
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
   * The encryption algorithm used by the record, ranging from **0 to 255**. This field is required when adding CERT or SSHFP records.
   * 
   * @example
   * 1
   */
  algorithm?: number;
  /**
   * @remarks
   * The public key certificate information of the record. This parameter is required when adding CERT, SMIMEA, or TLSA records.
   * 
   * @example
   * dGVzdGFkYWxrcw==
   */
  certificate?: string;
  /**
   * @remarks
   * The public key fingerprint value of the record. This parameter is required when adding an SSHFP record.
   * 
   * @example
   * abcdef1234567890
   */
  fingerprint?: string;
  /**
   * @remarks
   * The flag of the record. The Flag of a CAA record indicates its priority and processing method, with a value range of **0 to 255**. This parameter is required when adding a CAA record.
   * 
   * @example
   * 128
   */
  flag?: number;
  /**
   * @remarks
   * The public key identifier of the record, ranging from **0 to 65535**. This parameter is required when adding a CERT record.
   * 
   * @example
   * 0
   */
  keyTag?: number;
  /**
   * @remarks
   * The algorithm policy used by the record to match or verify certificates, ranging from **0 to 255**. This parameter is required when adding SMIMEA or TLSA records.
   * 
   * @example
   * 1
   */
  matchingType?: number;
  /**
   * @remarks
   * The port of the record, ranging from **0 to 65535**. This parameter is required when adding an SRV record.
   * 
   * @example
   * 0
   */
  port?: number;
  /**
   * @remarks
   * The priority of the record, ranging from **0 to 65535**. A smaller value indicates a higher priority. This parameter is required when adding MX, SRV, or URI records.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The type of certificate or public key used by the record, ranging from **0 to 255**. This parameter is required when adding SMIMEA or TLSA records.
   * 
   * @example
   * 1
   */
  selector?: number;
  /**
   * @remarks
   * The tag of the record. The Tag of a CAA record indicates its specific type and purpose. This parameter is required when adding a CAA record. Valid values for Tag:
   * - **issue**: Authorizes a specific CA to issue certificates for the domain. It is usually followed by the CA\\"s domain name.
   * - **issuewild**: Authorizes a specific CA to issue wildcard certificates for the domain (e.g., *.example.com).
   * - **iodef**: Specifies a URI for receiving reports about violations of CAA records.
   * 
   * @example
   * issue
   */
  tag?: string;
  /**
   * @remarks
   * The certificate type of the record (for CERT records) or the public key type (for SSHFP records). This parameter is required when adding CERT or SSHFP records.
   * 
   * @example
   * 0
   */
  type?: number;
  /**
   * @remarks
   * The usage identifier of the record, ranging from **0 to 255**. This parameter is required when adding SMIMEA or TLSA records.
   * 
   * @example
   * 1
   */
  usage?: number;
  /**
   * @remarks
   * The record value or partial content. This parameter is required when the record type is A/AAAA, CNAME, NS, MX, TXT, CAA, SRV, or URI. It represents different meanings for different record types:
   * 
   * - **A/AAAA**: The IP address to point to. Multiple IPs are separated by commas (,). At least one IPv4 address is required.
   * - **CNAME**: The target domain name to point to.
   * - **NS**: The name server for the specified domain.
   * - **MX**: A valid target mail server domain name.
   * - **TXT**: A valid text string.
   * - **CAA**: A valid certificate authority domain name.
   * - **SRV**: A valid target host domain name.
   * - **URI**: A valid URI string.
   * 
   * @example
   * example.com
   */
  value?: string;
  /**
   * @remarks
   * The weight of the record, ranging from **0 to 65535**. This parameter is required when adding SRV or URI records.
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
   * The origin authentication information for the CNAME record.
   */
  authConf?: CreateRecordRequestAuthConf;
  /**
   * @remarks
   * Used to tag the business scenario of the DNS record. This parameter is required when proxy acceleration is enabled for the DNS record (i.e., when the proxied parameter is set to true), and is not required when proxy acceleration is disabled (i.e., when the proxied parameter is set to false). Valid values:
   * - **image_video**: Image and video.
   * - **api**: API.
   * - **web**: Web page.
   * 
   * @example
   * web
   */
  bizName?: string;
  /**
   * @remarks
   * The comment for the record, with a maximum length of 100 characters.
   * 
   * @example
   * This is a remark.
   */
  comment?: string;
  /**
   * @remarks
   * The DNS information of the record. Different types of records require different content for this field. For more information, see
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
   * The origin host policy. This takes effect when the record type is CNAME. It specifies the host policy for back-to-origin requests. Two modes are available:
   * 
   * - **follow_hostname**: Follow the request host.
   * - **follow_origin_domain**: Follow the origin domain.
   * 
   * @example
   * follow_origin_domain
   */
  hostPolicy?: string;
  httpPorts?: string;
  httpsPorts?: string;
  /**
   * @remarks
   * Specifies whether to enable proxy acceleration for the record. Only CNAME records or A/AAAA records (i.e., when the type parameter is set to A/AAAA or CNAME) can enable proxy acceleration. Valid values:
   * - **true**: Enable proxy acceleration.
   * - **false**: Disable proxy acceleration.
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
   * The site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @remarks
   * The origin type of the CNAME record. This parameter is required when adding a CNAME record (i.e., when the type parameter is set to CNAME). Valid values:
   * 
   * - **OSS**: OSS origin.
   * - **S3**: S3 origin.
   * - **LB**: Load balancer origin.
   * - **OP**: Origin pool origin.
   * - **Domain**: Standard domain origin.
   * 
   * If this parameter is not specified or is left empty, it defaults to Domain, which is the standard domain origin type.
   * 
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @remarks
   * The time-to-live (TTL) of the record, in seconds. When set to 1, the TTL is automatic.
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  ttl?: number;
  /**
   * @remarks
   * The DNS type of the record, such as **A/AAAA**, **CNAME**, **TXT**, etc.
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

