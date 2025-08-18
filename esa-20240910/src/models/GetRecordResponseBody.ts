// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRecordResponseBodyRecordModelAuthConf extends $dara.Model {
  /**
   * @remarks
   * The access key ID of the account to which the origin server belongs. This parameter is returned if the origin type is OSS and AuthType is set to private_cross_account, or the origin type is S3 and AuthType is set to private.
   * 
   * @example
   * VIxuvJSA2S03f******kp208dy5w7
   */
  accessKey?: string;
  /**
   * @remarks
   * The authentication type of the origin server. Different origins support different authentication types. The origin type refers to the SourceType parameter in this operation. This parameter is returned if the origin type is OSS or S3Valid values:
   * 
   * *   **public**: public read. This value is returned when the origin is a public OSS or S3 bucket.
   * *   **private**: private read. This value is returned when the origin is a private S3 bucket.
   * *   **private_same_account**: private read in the same account. This value is returned when the origin is a private OSS bucket in your account.
   * *   **private_cross_account**: private read across accounts. This value is returned when the origin is a private OSS bucket in a different Alibaba Cloud account.
   * 
   * @example
   * public
   */
  authType?: string;
  /**
   * @remarks
   * The region of the origin. If the origin type is S3, you must specify this value. You can obtain the region information from the official website of S3.
   * 
   * @example
   * us-east-1
   */
  region?: string;
  /**
   * @remarks
   * The secret access key of the account to which the origin server belongs. This parameter is returned if the origin type is OSS and AuthType is set to private_cross_account, or the origin type is S3 and AuthType is set to private.SecretKey
   * 
   * @example
   * u0Nkg5gBK*******QF5wvKMM504JUHt
   */
  secretKey?: string;
  /**
   * @remarks
   * The version of the signature algorithm. This parameter is returned when the origin type is S3 and AuthType is private. The following two types are supported:
   * 
   * *   **v2**
   * *   **v4**
   * 
   * If this parameter is left empty, the default value v4 is used.
   * 
   * @example
   * v2
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

export class GetRecordResponseBodyRecordModelData extends $dara.Model {
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
   * The public key identification for the record. Valid values: 0 to 65535. This parameter is required when you add a CAA record.
   * 
   * @example
   * 1
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
   * The port of the record. Valid values: 0 to 65535. This parameter is required when you add an SRV record.
   * 
   * @example
   * 8707
   */
  port?: number;
  /**
   * @remarks
   * The priority of the record. Valid values: 0 to 65535. A smaller value indicates a higher priority. This parameter is required when you add MX, SRV, and URI records.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The type of the certificate or public key, specified within the range of 0 to 255. This parameter is required when you add SMIMEA or TLSA records.
   * 
   * @example
   * 1
   */
  selector?: number;
  /**
   * @remarks
   * The tag of the record. The Tag of a CAA record indicate its specific type and usage.
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
   * 0
   */
  usage?: number;
  /**
   * @remarks
   * The record value or part of the record content. This parameter is returned when you add A/AAAA, CNAME, NS, MX, TXT, CAA, SRV, and URI records. It has different meanings based on types of records.
   * 
   * *   **A/AAAA**: the IP address. Multiple IP addresses are separated with commas (,). There is at least one IPv4 address.
   * *   **CNAME**: the target domain name.
   * *   **NS**: the nameserver for the domain name.
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
   * The weight of the record, specified within the range of 0 to 65535. This parameter is required when you add SRV or URI records.
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

export class GetRecordResponseBodyRecordModel extends $dara.Model {
  /**
   * @remarks
   * The origin authentication information of the CNAME record.
   */
  authConf?: GetRecordResponseBodyRecordModelAuthConf;
  /**
   * @remarks
   * The business scenario of the record for acceleration. Leave this parameter empty if your record is not proxied. Valid values:
   * 
   * *   **image_video**
   * *   **api**
   * *   **web**
   * 
   * @example
   * image_video
   */
  bizName?: string;
  /**
   * @remarks
   * The comments of the record.
   * 
   * @example
   * This is a comment.
   */
  comment?: string;
  /**
   * @remarks
   * The time when the record was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-03-10T13:30:39Z
   */
  createTime?: string;
  /**
   * @remarks
   * The DNS record information. The content returned by this parameter varies based on the record type.
   * 
   * @example
   * {"value":"1.1.1.1"}
   */
  data?: GetRecordResponseBodyRecordModelData;
  /**
   * @remarks
   * The origin host policy. This policy takes effect when the record type is CNAME. Valid values:
   * 
   * *   follow_hostname: matches the requested domain name.
   * *   follow_origin_domain: matches the origin\\"s domain name.
   * 
   * @example
   * follow_origin_domain
   */
  hostPolicy?: string;
  /**
   * @remarks
   * Indicates whether the record is proxied. Only CNAME and A/AAAA records can be proxied. Valid values:
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
   * The CNAME. If you use CNAME setup when you add your website to ESA, the value is the CNAME that you configured then.
   * 
   * @example
   * a.example.com.cnamezone.com
   */
  recordCname?: string;
  /**
   * @remarks
   * The record ID.
   * 
   * @example
   * 1234567890123
   */
  recordId?: number;
  /**
   * @remarks
   * The record name.
   * 
   * @example
   * a.example.com
   */
  recordName?: string;
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
   * If you do not pass this parameter or if you leave its value empty, Domain is returned by default.
   * 
   * @example
   * OSS
   */
  recordSourceType?: string;
  /**
   * @remarks
   * The type of the DNS record, such as **A/AAAA, CNAME, and TXT**.
   * 
   * @example
   * A/AAAA
   */
  recordType?: string;
  /**
   * @remarks
   * The website ID.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @remarks
   * The website name.
   * 
   * @example
   * example.com
   */
  siteName?: string;
  /**
   * @remarks
   * The TTL of the record. Unit: seconds. If the value is 1, the TTL of the record is determined by the system.
   * 
   * @example
   * 20
   */
  ttl?: number;
  /**
   * @remarks
   * The time when the record was updated. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-01-27T02:26:22Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      authConf: 'AuthConf',
      bizName: 'BizName',
      comment: 'Comment',
      createTime: 'CreateTime',
      data: 'Data',
      hostPolicy: 'HostPolicy',
      proxied: 'Proxied',
      recordCname: 'RecordCname',
      recordId: 'RecordId',
      recordName: 'RecordName',
      recordSourceType: 'RecordSourceType',
      recordType: 'RecordType',
      siteId: 'SiteId',
      siteName: 'SiteName',
      ttl: 'Ttl',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConf: GetRecordResponseBodyRecordModelAuthConf,
      bizName: 'string',
      comment: 'string',
      createTime: 'string',
      data: GetRecordResponseBodyRecordModelData,
      hostPolicy: 'string',
      proxied: 'boolean',
      recordCname: 'string',
      recordId: 'number',
      recordName: 'string',
      recordSourceType: 'string',
      recordType: 'string',
      siteId: 'number',
      siteName: 'string',
      ttl: 'number',
      updateTime: 'string',
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

export class GetRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the queried record.
   */
  recordModel?: GetRecordResponseBodyRecordModel;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F32C57AA-7BF8-49AE-A2CC-9F42390F5A19
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordModel: 'RecordModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordModel: GetRecordResponseBodyRecordModel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.recordModel && typeof (this.recordModel as any).validate === 'function') {
      (this.recordModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

