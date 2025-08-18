// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecordsResponseBodyRecordsAuthConf extends $dara.Model {
  /**
   * @remarks
   * The access key of the account to which the origin server belongs. This value is returned when the SourceType is OSS, and AuthType is private_cross_account, or when the SourceType is S3 and AuthType is private.
   * 
   * @example
   * u0Nkg5gBK***QF5wvKMM504JUHt
   */
  accessKey?: string;
  /**
   * @remarks
   * The authentication type of the origin server. Different origins support different authentication types. The type of origin refers to the SourceType parameter in this operation. If the type of origin is OSS or S3, the authentication type of the origin must be specified. Valid values:
   * 
   * *   **public**: public read. This value is returned when the origin is a public OSS or S3 bucket.
   * *   **private**: private read. This value is returned when the origin is a private S3 bucket.
   * *   **private_same_account**: private read under the same account. This value is returned when the origin is a private OSS bucket in your Alibaba Cloud account.
   * *   **private_cross_account**: private read across accounts. This value is returned when the origin is a private OSS bucket in a different Alibaba Cloud account.
   * 
   * @example
   * private
   */
  authType?: string;
  /**
   * @remarks
   * The region of the origin. This parameter is returned if the origin type is S3. You can get the region information from the official website of Amazon S3.
   * 
   * @example
   * us-east-1
   */
  region?: string;
  /**
   * @remarks
   * The secret access key of the account to which the origin server belongs. This value is returned when the SourceType is OSS, and AuthType is private_same_account, or when the SourceType is S3 and AuthType is private.
   * 
   * @example
   * VIxuvJSA2S03f***kp208dy5w7
   */
  secretKey?: string;
  /**
   * @remarks
   * The version of the signature algorithm. This value is returned when the origin type is S3 and AuthType is private. Valid values:
   * 
   * *   **v2**
   * *   **v4**
   * 
   * If this parameter is left empty, the default value v4 is used.
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

export class ListRecordsResponseBodyRecordsData extends $dara.Model {
  /**
   * @remarks
   * The encryption algorithm used for the record. Valid values: 0 to 255. Exclusive to CERT and SSHFP records.
   * 
   * @example
   * 0
   */
  algorithm?: number;
  /**
   * @remarks
   * The public key of the certificate. Exclusive to CERT, SMIMEA, and TLSA records.
   * 
   * @example
   * dGVzdGFkYWxrcw==
   */
  certificate?: string;
  /**
   * @remarks
   * The public key fingerprint of the record. Exclusive to SSHFP records.
   * 
   * @example
   * abcdef1234567890
   */
  fingerprint?: string;
  /**
   * @remarks
   * The flag bit of the record. The Flag for a CAA record indicates its priority and how it is processed. Valid values: 0 to 255. Exclusive to CAA records.
   * 
   * @example
   * 128
   */
  flag?: number;
  /**
   * @remarks
   * The public key identification for the record. Valid values: 0 to 65535. Exclusive to CERT records.
   * 
   * @example
   * 0
   */
  keyTag?: number;
  /**
   * @remarks
   * The algorithm policy used to match or validate the certificate. Valid values: 0 to 255. Exclusive to SMIMEA and TLSA records.
   * 
   * @example
   * 0
   */
  matchingType?: number;
  /**
   * @remarks
   * The port of the record. Valid values: 0 to 65535. Exclusive to SRV records.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The priority of the record. Valid values: 0 to 65535. A smaller value indicates a higher priority. Exclusive to MX, SRV, and URI records.
   * 
   * @example
   * 0
   */
  priority?: number;
  /**
   * @remarks
   * The type of certificate or public key. Valid values: 0 to 255. Exclusive to SMIMEA, and TLSA records.
   * 
   * @example
   * 0
   */
  selector?: number;
  /**
   * @remarks
   * The tag of the record. The Tag of a CAA record indicate its specific type and usage. Exclusive to CAA records.
   * 
   * @example
   * issue
   */
  tag?: string;
  /**
   * @remarks
   * The certificate type of the record (in CERT records), or the public key type (in SSHFP records).
   * 
   * @example
   * 0
   */
  type?: number;
  /**
   * @remarks
   * The usage identifier of the record. Valid values: 0 to 255. Exclusive to SMIMEA, and TLSA records.
   * 
   * @example
   * 0
   */
  usage?: number;
  /**
   * @remarks
   * Record value or part of the record content. This value is returned when the record is A/AAAA, CNAME, NS, MX, TXT, CAA, SRV, or URI. It has different meanings based on types of records:
   * 
   * *   **A/AAAA**: the IP addresses. IP addresses are separated by commas (,). There is at least one IPv4 address.
   * *   **CNAME**: the pointed/mapped domain name.
   * *   **NS**: the nameservers for the domain name.
   * *   **MX**: a valid domain name of the mail server.
   * *   **TXT**: a valid text string.
   * *   **CAA**: a valid domain name of the certificate authority.
   * *   **SRV**: a valid domain name of the target host.
   * *   **URI**: a valid URI string.
   * 
   * @example
   * CNAME
   */
  value?: string;
  /**
   * @remarks
   * The weight of the record. Valid values: 0 to 65535. Exclusive to SRV and URI records.
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

export class ListRecordsResponseBodyRecords extends $dara.Model {
  /**
   * @remarks
   * The origin authentication information of the CNAME record.
   */
  authConf?: ListRecordsResponseBodyRecordsAuthConf;
  /**
   * @remarks
   * The business scenario of the record for acceleration. Valid values:
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
   * The comments of the record.
   * 
   * @example
   * this is a remark.
   */
  comment?: string;
  /**
   * @remarks
   * The time when the record was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-12-24T02:01:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * The DNS record information. Different types of records contain different information.
   * 
   * @example
   * {"value":"1.1.1.1"}
   */
  data?: ListRecordsResponseBodyRecordsData;
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
   * Indicates whether the record is proxied. Valid values:
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
   * The origin type for the CNAME record. This parameter is returned when you add a CNAME record. Valid values:
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
   * The DNS type of the record, such as **A/AAAA, CNAME, and TXT**.
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
   * 30
   */
  ttl?: number;
  /**
   * @remarks
   * The time when the record was updated. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-06-07T10:02:59Z
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
      authConf: ListRecordsResponseBodyRecordsAuthConf,
      bizName: 'string',
      comment: 'string',
      createTime: 'string',
      data: ListRecordsResponseBodyRecordsData,
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

export class ListRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The DNS record information. The format of this field varies based on the record type. For more information, see Add DNS records.
   */
  records?: ListRecordsResponseBodyRecords[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records returned.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      records: 'Records',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': ListRecordsResponseBodyRecords },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

