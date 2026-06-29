// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecordsResponseBodyRecordsAuthConf extends $dara.Model {
  /**
   * @remarks
   * The AccessKey of the account to which the origin belongs. This parameter is available when the origin type is OSS with private cross-account read authentication, or when the origin type is S3 with private read authentication.
   * 
   * @example
   * u0Nkg5gBK***QF5wvKMM504JUHt
   */
  accessKey?: string;
  /**
   * @remarks
   * The origin authentication type. Different origin types support different authentication types. The origin type refers to the SourceType parameter in this API. When the origin type is OSS or S3, the origin authentication type must be specified. Valid values:
   * - **public**: Public read. Use this value when the origin type is OSS or S3 and the origin has public read access.
   * - **private**: Private read. Use this value when the origin type is S3 and the origin has private read access.
   * - **private_same_account**: Private same-account read. Use this value when the origin type is OSS, the origin is under the same Alibaba Cloud account, and the origin has private read access.
   * - **private_cross_account**: Private cross-account read. Use this value when the origin type is OSS, the origin is not under the same Alibaba Cloud account, and the origin has private read access.
   * 
   * @example
   * private
   */
  authType?: string;
  /**
   * @remarks
   * The region where the origin is located. This parameter is available when the origin type is S3. The region of the origin can be obtained from the official S3 website.
   * 
   * @example
   * us-east-1
   */
  region?: string;
  /**
   * @remarks
   * The SecretKey of the account to which the origin belongs. This parameter is available when the origin type is OSS with private cross-account read authentication, or when the origin type is S3 with private read authentication.
   * 
   * @example
   * VIxuvJSA2S03f***kp208dy5w7
   */
  secretKey?: string;
  /**
   * @remarks
   * The signature algorithm version. This parameter is available when the origin type is S3 and the origin authentication type is private read. Valid values:
   * - **v2**
   * - **v4**
   * 
   * Default value: v4.
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
   * The encryption algorithm used by the record. Valid values: **0 to 255**. Exclusive to CERT and SSHFP records.
   * 
   * @example
   * 0
   */
  algorithm?: number;
  /**
   * @remarks
   * The public key certificate information of the record. Exclusive to CERT, SMIMEA, and TLSA records.
   * 
   * @example
   * dGVzdGFkYWxrcw==
   */
  certificate?: string;
  /**
   * @remarks
   * The public key fingerprint value of the record. Exclusive to SSHFP records.
   * 
   * @example
   * abcdef1234567890
   */
  fingerprint?: string;
  /**
   * @remarks
   * The flag of the record. The Flag of a CAA record indicates its priority and processing method. Valid values: **0 to 255**. Exclusive to CAA records.
   * 
   * @example
   * 128
   */
  flag?: number;
  /**
   * @remarks
   * The public key identifier of the record. Valid values: **0 to 65535**. Exclusive to CERT records.
   * 
   * @example
   * 0
   */
  keyTag?: number;
  /**
   * @remarks
   * The algorithm strategy used by the record for matching or verifying certificates. Valid values: **0 to 255**. Exclusive to SMIMEA and TLSA records.
   * 
   * @example
   * 0
   */
  matchingType?: number;
  /**
   * @remarks
   * The port of the record. Valid values: **0 to 65535**. Exclusive to SRV records.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The priority of the record. Valid values: **0 to 65535**. A smaller value indicates a higher priority. Exclusive to MX, SRV, and URI records.
   * 
   * @example
   * 0
   */
  priority?: number;
  /**
   * @remarks
   * The type of certificate or public key used by the record. Valid values: **0 to 255**. Exclusive to SMIMEA and TLSA records.
   * 
   * @example
   * 0
   */
  selector?: number;
  /**
   * @remarks
   * The tag of the record. The Tag of a CAA record indicates its specific type and purpose. Exclusive to CAA records.
   * 
   * @example
   * issue
   */
  tag?: string;
  /**
   * @remarks
   * The tags of the record.
   * 
   * @example
   * {\\"Name\\":\\"PARAMETER\\"}
   */
  tags?: { [key: string]: any };
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
   * The usage identifier of the record. Valid values: **0 to 255**. Exclusive to SMIMEA and TLSA records.
   * 
   * @example
   * 0
   */
  usage?: number;
  /**
   * @remarks
   * The record value or partial content. This parameter is included in A/AAAA, CNAME, NS, MX, TXT, CAA, SRV, and URI records. It has different meanings for different record types:
   * 
   * - **A/AAAA**: The IP address pointed to. When there are multiple IPs, they are separated by commas (,). At least one IPv4 address is required.
   * - **CNAME**: The target domain name pointed to.
   * - **NS**: The name server for the specified domain.
   * - **MX**: A valid target mail server domain name.
   * - **TXT**: A valid text string.
   * - **CAA**: A valid certificate authority domain name.
   * - **SRV**: A valid target host domain name.
   * - **URI**: A valid URI string.
   * 
   * @example
   * CNAME
   */
  value?: string;
  /**
   * @remarks
   * The weight of the record. Valid values: **0 to 65535**. Exclusive to SRV and URI records.
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
      tags: 'Tags',
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
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'number',
      usage: 'number',
      value: 'string',
      weight: 'number',
    };
  }

  validate() {
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
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
   * The business scenario for record acceleration. Valid values:
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
   * The comment of the record.
   * 
   * @example
   * this is a remark.
   */
  comment?: string;
  /**
   * @remarks
   * The creation time of the record. The date format follows the ISO 8601 standard and uses UTC time in the format of yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2023-12-24T02:01:11Z
   */
  createTime?: string;
  customPort?: string;
  /**
   * @remarks
   * The specific DNS information of the record. Different record types contain different information.
   * 
   * @example
   * {"value":"1.1.1.1"}
   */
  data?: ListRecordsResponseBodyRecordsData;
  /**
   * @remarks
   * The origin host policy. This takes effect when the record type is CNAME. It sets the policy for the host header used during origin requests. Two modes are available:
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
   * Indicates whether proxy acceleration is enabled for the record. Valid values:
   * 
   * - **true**: Proxy enabled.
   * - **false**: Proxy acceleration disabled.
   * 
   * @example
   * true
   */
  proxied?: boolean;
  /**
   * @remarks
   * The CNAME of the record. This is the CNAME value that needs to be configured for the record when the site access method is CNAME access.
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
   * The origin type of the CNAME record. This parameter is required when adding a CNAME record. Valid values:
   * 
   * - **OSS**: OSS origin.
   * - **S3**: S3 origin.
   * - **LB**: Load balancer origin.
   * - **OP**: Origin pool.
   * - **Domain**: Standard domain origin.
   * 
   * If this parameter is not specified or left empty, the default value is Domain, which indicates a standard domain origin type.
   * 
   * @example
   * OSS
   */
  recordSourceType?: string;
  /**
   * @remarks
   * The DNS type of the record, such as **A/AAAA, CNAME, TXT**, etc.
   * 
   * @example
   * A/AAAA
   */
  recordType?: string;
  /**
   * @remarks
   * The ID of the site to which the record belongs.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @remarks
   * The name of the site to which the record belongs.
   * 
   * @example
   * example.com
   */
  siteName?: string;
  /**
   * @remarks
   * The TTL (Time to Live) of the record, in seconds. When the value is 1, it indicates that the TTL is set to automatic.
   * 
   * @example
   * 30
   */
  ttl?: number;
  /**
   * @remarks
   * The update time of the record. The date format follows the ISO 8601 standard and uses UTC time in the format of yyyy-MM-ddTHH:mm:ssZ.
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
      customPort: 'CustomPort',
      data: 'Data',
      hostPolicy: 'HostPolicy',
      httpPorts: 'HttpPorts',
      httpsPorts: 'HttpsPorts',
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
      customPort: 'string',
      data: ListRecordsResponseBodyRecordsData,
      hostPolicy: 'string',
      httpPorts: 'string',
      httpsPorts: 'string',
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
   * The current page number, same as the PageNumber request parameter.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records displayed per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * DNS information of the records. For details, refer to <props="china">[Documentation](https://help.aliyun.com/document_detail/2708761.html)<props="intl">[Documentation](https://www.alibabacloud.com/help/doc-detail/2708761.html).
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
   * The total number of records.
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

