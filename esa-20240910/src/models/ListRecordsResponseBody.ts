// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecordsResponseBodyRecordsAuthConf extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID of the account to which the origin server belongs. This parameter is returned when the origin server type is OSS and the origin server authentication type is private read across accounts, or when the origin server type is S3 and the origin server authentication type is private read.
   * 
   * @example
   * u0Nkg5gBK***QF5wvKMM504JUHt
   */
  accessKey?: string;
  /**
   * @remarks
   * The origin server authentication type. Different origin server types support different authentication types. The origin server type refers to the SourceType parameter in this operation. When the origin server type is OSS or S3, you must specify the origin server authentication type. Valid values:
   * - **public**: Public read. This value is used when the origin server type is OSS or S3 and the origin server allows public read access.
   * - **private**: Private read. This value is used when the origin server type is S3 and the origin server allows private read access.
   * - **private_same_account**: Private read within the same account. This value is used when the origin server type is OSS, the origin server and the current service are within the same Alibaba Cloud account, and the origin server allows private read access.
   * - **private_cross_account**: Private read across accounts. This value is used when the origin server type is OSS, the origin server and the current service are within different Alibaba Cloud accounts, and the origin server allows private read access.
   * 
   * @example
   * private
   */
  authType?: string;
  /**
   * @remarks
   * The region to which the origin server belongs. This parameter is returned when the origin server type is S3. You can obtain the region information from the official website of S3.
   * 
   * @example
   * us-east-1
   */
  region?: string;
  /**
   * @remarks
   * The AccessKey secret of the account to which the origin server belongs. This parameter is returned when the origin server type is OSS and the origin server authentication type is private read across accounts, or when the origin server type is S3 and the origin server authentication type is private read.
   * 
   * @example
   * VIxuvJSA2S03f***kp208dy5w7
   */
  secretKey?: string;
  /**
   * @remarks
   * The signature algorithm version. This parameter is returned when the origin server type is S3 and the origin server authentication type is private read. Valid values:
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

export class ListRecordsResponseBodyRecordsData extends $dara.Model {
  /**
   * @remarks
   * The encryption algorithm used by the record. Valid values: **0** to **255**. This parameter is exclusive to CERT and SSHFP records.
   * 
   * @example
   * 0
   */
  algorithm?: number;
  /**
   * @remarks
   * The public key certificate information of the record. This parameter is exclusive to CERT, SMIMEA, and TLSA records.
   * 
   * @example
   * dGVzdGFkYWxrcw==
   */
  certificate?: string;
  /**
   * @remarks
   * The public key fingerprint value of the record. This parameter is exclusive to SSHFP records.
   * 
   * @example
   * abcdef1234567890
   */
  fingerprint?: string;
  /**
   * @remarks
   * The flag of the record. For CAA records, the flag indicates the priority and processing method. Valid values: **0** to **255**. This parameter is exclusive to CAA records.
   * 
   * @example
   * 128
   */
  flag?: number;
  /**
   * @remarks
   * The public key tag of the record. Valid values: **0** to **65535**. This parameter is exclusive to CERT records.
   * 
   * @example
   * 0
   */
  keyTag?: number;
  /**
   * @remarks
   * The algorithm policy used by the record to match or verify the certificate. Valid values: **0** to **255**. This parameter is exclusive to SMIMEA and TLSA records.
   * 
   * @example
   * 0
   */
  matchingType?: number;
  /**
   * @remarks
   * The port of the record. Valid values: **0** to **65535**. This parameter is exclusive to SRV records.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The priority of the record. Valid values: **0** to **65535**. A smaller value indicates a higher priority. This parameter is exclusive to MX, SRV, and URI records.
   * 
   * @example
   * 0
   */
  priority?: number;
  /**
   * @remarks
   * The type of the certificate or public key used by the record. Valid values: **0** to **255**. This parameter is exclusive to SMIMEA and TLSA records.
   * 
   * @example
   * 0
   */
  selector?: number;
  /**
   * @remarks
   * The tag of the record. For CAA records, the tag indicates the specific type and usage. This parameter is exclusive to CAA records.
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
   * The certificate type of the record in CERT records, or the public key type in SSHFP records.
   * 
   * @example
   * 0
   */
  type?: number;
  /**
   * @remarks
   * The usage identifier of the record. Valid values: **0** to **255**. This parameter is exclusive to SMIMEA and TLSA records.
   * 
   * @example
   * 0
   */
  usage?: number;
  /**
   * @remarks
   * The record value or partial content. This parameter is included in A, AAAA, CNAME, NS, MX, TXT, CAA, SRV, and URI records. It indicates different meanings in different types of records:
   * 
   * - **A/AAAA**: The destination IP address. If multiple IP addresses are specified, separate them with commas (,). At least one IPv4 address is required.
   * - **CNAME**: The destination domain name.
   * - **NS**: The name server of the specified domain name.
   * - **MX**: The valid destination mail server domain name.
   * - **TXT**: The valid text string.
   * - **CAA**: The valid certification authority domain name.
   * - **SRV**: The valid destination host domain name.
   * - **URI**: The valid URI string.
   * 
   * @example
   * CNAME
   */
  value?: string;
  /**
   * @remarks
   * The weight of the record. Valid values: **0** to **65535**. This parameter is exclusive to SRV and URI records.
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
   * The origin server authentication information of the CNAME record.
   */
  authConf?: ListRecordsResponseBodyRecordsAuthConf;
  /**
   * @remarks
   * The business scenario for record acceleration. Valid values:
   * - **image_video**: images and videos
   * - **api**: APIs
   * - **web**: web pages
   * 
   * @example
   * web
   */
  bizName?: string;
  /**
   * @remarks
   * The description of the record.
   * 
   * @example
   * this is a remark.
   */
  comment?: string;
  /**
   * @remarks
   * The creation time of the record. The time is displayed in UTC and follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2023-12-24T02:01:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * Specifies whether a custom port is enabled for the record. Valid values:
   * 
   * - on: enabled
   * - off: disabled
   * 
   * @example
   * off
   */
  customPort?: string;
  /**
   * @remarks
   * The specific DNS information of the record. Different types of records contain different information.
   * 
   * @example
   * {"value":"1.1.1.1"}
   */
  data?: ListRecordsResponseBodyRecordsData;
  /**
   * @remarks
   * The back-to-origin host policy. This policy takes effect when the record type is CNAME. Settings for the host policy in back-to-origin requests include two patterns:
   * 
   * - **follow_hostname**: follow the request host
   * - **follow_origin_domain**: follow the Origin Domain Name
   * 
   * @example
   * follow_origin_domain
   */
  hostPolicy?: string;
  /**
   * @remarks
   * The HTTP port. Port 80 is supported by default.
   * 
   * @example
   * 80,8080,8880,2052,2082,2086,2095
   */
  httpPorts?: string;
  /**
   * @remarks
   * The HTTPS port. Port 443 is supported by default.
   * 
   * @example
   * 443,2053,2083,2087,2096,8443
   */
  httpsPorts?: string;
  /**
   * @remarks
   * Specifies whether proxy acceleration is enabled for the record. Valid values:
   * 
   * - **true**: Proxy acceleration is enabled.
   * - **false**: Proxy acceleration is disabled.
   * 
   * @example
   * true
   */
  proxied?: boolean;
  /**
   * @remarks
   * The CNAME of the record. If the site is onboarded by using CNAME access, you must configure this CNAME value for the record.
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
   * The origin server type of the CNAME record. This parameter is required when you add a CNAME record. Valid values:
   * 
   * - **OSS**: OSS origin server
   * - **S3**: S3 origin server
   * - **LB**: load balancing origin server
   * - **OP**: IPAM pool origin server
   * - **Domain**: regular domain name origin server
   * 
   * If this parameter is not specified or is left empty, the default value is Domain, which indicates a regular domain name origin server.
   * 
   * @example
   * OSS
   */
  recordSourceType?: string;
  /**
   * @remarks
   * The DNS type of the record, such as **A/AAAA**, **CNAME**, or **TXT**.
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
   * The time-to-live (TTL) of the record, in seconds. A value of 1 indicates that the TTL is automatic.
   * 
   * @example
   * 30
   */
  ttl?: number;
  /**
   * @remarks
   * The update time of the record. The time is displayed in UTC and follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
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
   * The current page number. The value is the same as the PageNumber request parameter.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The DNS information of the records. For more information, see <props="china">[Documentation](https://help.aliyun.com/document_detail/2708761.html)<props="intl">[Documentation](https://www.alibabacloud.com/help/doc-detail/2708761.html).
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

