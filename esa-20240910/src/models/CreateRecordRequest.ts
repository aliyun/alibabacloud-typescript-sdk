// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRecordRequestAuthConf extends $dara.Model {
  /**
   * @remarks
   * The access key of the account to which the origin server belongs. This parameter is required when the SourceType is OSS, and AuthType is private_cross_account, or when the SourceType is S3 and AuthType is private.
   * 
   * @example
   * u0Nkg5gBK*******QF5wvKMM504JUHt
   */
  accessKey?: string;
  /**
   * @remarks
   * The authentication type of the origin server. Different origins support different authentication types. The type of origin refers to the SourceType parameter in this operation. If the type of origin is OSS or S3, you must specify the authentication type of the origin. Valid values:
   * 
   * *   **public**: public read. Select this value when the origin type is OSS or S3 and the origin access is public read.
   * *   **private**: private read. Select this value when the origin type is S3 and the origin access is private read.
   * *   **private_same_account**: private read under the same account. Select this value when the origin type is OSS, the origins belong to the same Alibaba Cloud account, and the origins have private read access.
   * *   **private_cross_account**: private read cross accounts. Select this value when the origin type is OSS, the origins belong to different Alibaba Cloud accounts, and the origins have private read access.
   * 
   * @example
   * private
   */
  authType?: string;
  /**
   * @remarks
   * The region of the origin. If the origin type is S3, you must specify this value. You can get the region information from the official website of S3.
   * 
   * @example
   * us-east-1
   */
  region?: string;
  /**
   * @remarks
   * The secret access key of the account to which the origin server belongs. This parameter is required when the SourceType is OSS, and AuthType is private_same_account, or when the SourceType is S3 and AuthType is private.
   * 
   * @example
   * VIxuvJSA2S03f******kp208dy5w7
   */
  secretKey?: string;
  /**
   * @remarks
   * The version of the signature algorithm. This parameter is required when the origin type is S3 and AuthType is private. The following two types are supported:
   * 
   * *   **v2**
   * *   **v4**
   * 
   * If you leave this parameter empty, the default value v4 is used.
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
   * The encryption algorithm used for the record, specified within the range from 0 to 255. This parameter is required when you add CERT or SSHFP records.
   * 
   * @example
   * 1
   */
  algorithm?: number;
  /**
   * @remarks
   * The public key of the certificate. This parameter is required when you add CERT, SMIMEA, or TLSA records.
   * 
   * @example
   * dGVzdGFkYWxrcw==
   */
  certificate?: string;
  /**
   * @remarks
   * The public key fingerprint of the record. This parameter is required when you add a SSHFP record.
   * 
   * @example
   * abcdef1234567890
   */
  fingerprint?: string;
  /**
   * @remarks
   * The flag bit of the record. The Flag for a CAA record indicates its priority and how it is processed, specified within the range of 0 to 255. This parameter is required when you add a CAA record.
   * 
   * @example
   * 128
   */
  flag?: number;
  /**
   * @remarks
   * The public key identification for the record, specified within the range of 0 to 65,535. This parameter is required when you add a CAA record.
   * 
   * @example
   * 0
   */
  keyTag?: number;
  /**
   * @remarks
   * The algorithm policy used to match or validate the certificate, specified within the range 0 to 255. This parameter is required when you add SMIMEA or TLSA records.
   * 
   * @example
   * 1
   */
  matchingType?: number;
  /**
   * @remarks
   * The port of the record, specified within the range of 0 to 65,535. This parameter is required when you add an SRV record.
   * 
   * @example
   * 0
   */
  port?: number;
  /**
   * @remarks
   * The priority of the record, specified within the range of 0 to 65,535. A smaller value indicates a higher priority. This parameter is required when you add MX, SRV, and URI records.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The type of certificate or public key, specified within the range of 0 to 255. This parameter is required when you add SMIMEA or TLSA records.
   * 
   * @example
   * 1
   */
  selector?: number;
  /**
   * @remarks
   * The label of the record. The Tag of a CAA record indicate its specific type and usage. This parameter is required when you add a CAA record. Valid values:
   * 
   * *   **issue**: indicates that a CA is authorized to issue a certificate for the domain name. This is usually followed by the domain name of the CA.
   * *   **issuewild**: indicates that a CA is authorized to issue a wildcard certificate (such as \\*.example.com) for the domain name.
   * *   **iodef**: specifies a URI to receive reports about CAA record violations.
   * 
   * @example
   * issue
   */
  tag?: string;
  /**
   * @remarks
   * The certificate type of the record (in CERT records), or the public key type (in SSHFP records). This parameter is required when you add CERT or SSHFP records.
   * 
   * @example
   * RSA
   */
  type?: number;
  /**
   * @remarks
   * The usage identifier of the record, specified within the range of 0 to 255. This parameter is required when you add SMIMEA or TLSA records.
   * 
   * @example
   * 1
   */
  usage?: number;
  /**
   * @remarks
   * Record value or part of the record content. This parameter is required when you add A/AAAA, CNAME, NS, MX, TXT, CAA, SRV, and URI records. It has different meanings based on types of records:
   * 
   * *   **A/AAAA**: the IP address(es). Separate IP addresses with commas (,). You must have at least one IPv4 address.
   * *   **CNAME**: the target domain name.
   * *   **NS**: the name servers for the domain name.
   * *   **MX**: a valid domain name of the target mail server.
   * *   **TXT**: a valid text string.
   * *   **CAA**: a valid domain name of the certificate authority.
   * *   **SRV**: a valid domain name of the target host.
   * *   **URI**: a valid URI string.
   * 
   * @example
   * example.com
   */
  value?: string;
  /**
   * @remarks
   * The weight of the record, specified within the range of 0 to 65,535. This parameter is required when you add SRV or URI records.
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
   * The origin authentication information of the CNAME record.
   */
  authConf?: CreateRecordRequestAuthConf;
  /**
   * @remarks
   * The business scenario of the record for acceleration. Leave the parameter empty if your record is not proxied. Valid values:
   * 
   * *   **image_video**: video and image.
   * *   **api**: API.
   * *   **web**: web page.
   * 
   * @example
   * web
   */
  bizName?: string;
  /**
   * @remarks
   * The comment of the record. The maximum length is 100 characters.
   * 
   * @example
   * This is a remark.
   */
  comment?: string;
  /**
   * @remarks
   * The DNS record information. The format of this field varies based on the record type. For more information, see [References](https://www.alibabacloud.com/help/doc-detail/2708761.html) .
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
   * The origin host policy. This policy takes effect when the record type is CNAME. You can set the policy in two modes:
   * 
   * *   follow_hostname: Follow the host record.
   * *   follow_origin_domain: match the origin\\"s domain name.
   * 
   * @example
   * follow_origin_domain
   */
  hostPolicy?: string;
  /**
   * @remarks
   * Specifies whether to proxy the record. Only CNAME and A/AAAA records can be proxied. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @remarks
   * The origin type for the CNAME record. This parameter is required when you add a CNAME record. Valid values:
   * 
   * *   **OSS**: OSS bucket.
   * *   **S3**: S3 bucket.
   * *   **LB**: load balancer.
   * *   **OP**: origin pool.
   * *   **Domain**: domain name.
   * 
   * If you do not pass this parameter or if you leave its value empty, Domain is used by default.
   * 
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @remarks
   * The TTL of the record. Unit: seconds. If the value is 1, the TTL of the record is determined by the system.
   * 
   * @example
   * 30
   */
  ttl?: number;
  /**
   * @remarks
   * The type of the DNS record. For example, A/AAAA, TXT, MX, or CNAME.
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

