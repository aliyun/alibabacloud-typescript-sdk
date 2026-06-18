// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecordsResponseBodyRecordsAuthConf extends $dara.Model {
  /**
   * @remarks
   * The AccessKey for the account that owns the origin server. This parameter is required if the origin type is OSS and the authentication type is `private_cross_account`, or if the origin type is S3 and the authentication type is `private`.
   * 
   * @example
   * u0Nkg5gBK***QF5wvKMM504JUHt
   */
  accessKey?: string;
  /**
   * @remarks
   * The origin authentication type. The available authentication types depend on the origin type, which is specified by the `RecordSourceType` parameter. This parameter is required if the origin type is OSS or S3. Valid values:
   * 
   * - **public**: Public read. Use this value if the origin type is OSS or S3 and the origin server allows public read access.
   * 
   * - **private**: Private read. Use this value if the origin type is S3 and the origin server requires private read access.
   * 
   * - **private_same_account**: Private read within the same account. Use this value if the origin type is OSS, the origin server is in the same Alibaba Cloud account, and requires private read access.
   * 
   * - **private_cross_account**: Private read across different accounts. Use this value if the origin type is OSS, the origin server is in a different Alibaba Cloud account, and requires private read access.
   * 
   * @example
   * private
   */
  authType?: string;
  /**
   * @remarks
   * The region where the origin server is located. This parameter is required if the origin type is S3. For valid region names, refer to the official S3 documentation.
   * 
   * @example
   * us-east-1
   */
  region?: string;
  /**
   * @remarks
   * The SecretKey for the account that owns the origin server. This parameter is required if the origin type is OSS and the authentication type is `private_cross_account`, or if the origin type is S3 and the authentication type is `private`.
   * 
   * @example
   * VIxuvJSA2S03f***kp208dy5w7
   */
  secretKey?: string;
  /**
   * @remarks
   * The signature algorithm version. This parameter is required if the origin type is S3 and the authentication type is `private`. Valid values:
   * 
   * - **v2**
   * 
   * - **v4**
   * 
   * The default is `v4`.
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
   * The encryption algorithm for the record. The value ranges from **0 to 255**. This parameter is valid only for CERT and SSHFP records.
   * 
   * @example
   * 0
   */
  algorithm?: number;
  /**
   * @remarks
   * The public key certificate. This parameter is valid only for CERT, SMIMEA, and TLSA records.
   * 
   * @example
   * dGVzdGFkYWxrcw==
   */
  certificate?: string;
  /**
   * @remarks
   * The public key fingerprint. This parameter is valid only for SSHFP records.
   * 
   * @example
   * abcdef1234567890
   */
  fingerprint?: string;
  /**
   * @remarks
   * The record\\"s flag. For a CAA record, the flag determines how a certificate authority (CA) processes the record. The value ranges from **0 to 255**. This parameter applies only to CAA records.
   * 
   * @example
   * 128
   */
  flag?: number;
  /**
   * @remarks
   * The public key identifier. The value ranges from **0 to 65535**. This parameter is valid only for CERT records.
   * 
   * @example
   * 0
   */
  keyTag?: number;
  /**
   * @remarks
   * The algorithm policy for matching or validating certificates. The value ranges from **0 to 255**. This parameter is valid only for SMIMEA and TLSA records.
   * 
   * @example
   * 0
   */
  matchingType?: number;
  /**
   * @remarks
   * The port number, which must be an integer from **0 to 65535**. This parameter applies only to SRV records.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The priority of the record, which must be an integer from **0 to 65535**. A lower value indicates a higher priority. This parameter applies only to MX, SRV, and URI records.
   * 
   * @example
   * 0
   */
  priority?: number;
  /**
   * @remarks
   * The type of certificate or public key for the record. The value ranges from **0 to 255**. This parameter is valid only for SMIMEA and TLSA records.
   * 
   * @example
   * 0
   */
  selector?: number;
  /**
   * @remarks
   * The record\\"s tag. For a CAA record, the tag indicates its specific type and purpose. This parameter is valid only for CAA records.
   * 
   * @example
   * issue
   */
  tag?: string;
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The certificate type for a CERT record, or the public key type for an SSHFP record.
   * 
   * @example
   * 0
   */
  type?: number;
  /**
   * @remarks
   * The usage identifier. The value ranges from **0 to 255**. This parameter is valid only for SMIMEA and TLSA records.
   * 
   * @example
   * 0
   */
  usage?: number;
  /**
   * @remarks
   * The value of the record. This parameter applies to A/AAAA, CNAME, NS, MX, TXT, CAA, SRV, and URI records. The meaning of this parameter varies based on the record type:
   * 
   * - **A/AAAA**: The target IP address. Use an IPv4 address for an A record and an IPv6 address for an AAAA record.
   * 
   * - **CNAME**: The target domain name.
   * 
   * - **NS**: The name server for the specified domain.
   * 
   * - **MX**: The domain name of the target mail server.
   * 
   * - **TXT**: A text string.
   * 
   * - **CAA**: The domain name of the certificate authority.
   * 
   * - **SRV**: The domain name of the target host.
   * 
   * - **URI**: A URI string.
   * 
   * @example
   * CNAME
   */
  value?: string;
  /**
   * @remarks
   * The weight of the record, which must be an integer from **0 to 65535**. This parameter applies only to SRV and URI records.
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
   * The origin authentication settings for the CNAME record.
   */
  authConf?: ListRecordsResponseBodyRecordsAuthConf;
  /**
   * @remarks
   * The business scenario for record acceleration. Valid values:
   * 
   * - **image_video**: Images and videos.
   * 
   * - **api**: API.
   * 
   * - **web**: Web page.
   * 
   * @example
   * web
   */
  bizName?: string;
  /**
   * @remarks
   * The record\\"s comment.
   * 
   * @example
   * this is a remark.
   */
  comment?: string;
  /**
   * @remarks
   * The UTC time when the record was created, in ISO 8601 format: `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * @example
   * 2023-12-24T02:01:11Z
   */
  createTime?: string;
  customPort?: string;
  /**
   * @remarks
   * The DNS details of the record. The fields in this object vary based on the record type.
   * 
   * @example
   * {"value":"1.1.1.1"}
   */
  data?: ListRecordsResponseBodyRecordsData;
  /**
   * @remarks
   * The policy for the `HOST` header in back-to-origin requests. This parameter applies only to CNAME records. Valid values:
   * 
   * - **follow_hostname**: Uses the `HOST` header of the incoming request.
   * 
   * - **follow_origin_domain**: Uses the domain name of the origin server.
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
   * - **true**: Proxy acceleration is enabled.
   * 
   * - **false**: Proxy acceleration is disabled.
   * 
   * @example
   * true
   */
  proxied?: boolean;
  /**
   * @remarks
   * The CNAME value assigned to this record. To enable the service, create a CNAME record in your DNS provider\\"s settings that points to this value.
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
   * The type of origin for the CNAME record. This parameter is required when you add a CNAME record. Valid values:
   * 
   * - **OSS**: OSS origin.
   * 
   * - **S3**: S3 origin.
   * 
   * - **LB**: Load balancer origin.
   * 
   * - **OP**: Origin pool.
   * 
   * - **Domain**: Domain origin.
   * 
   * If this parameter is not specified, the default value is `Domain`.
   * 
   * @example
   * OSS
   */
  recordSourceType?: string;
  /**
   * @remarks
   * The DNS record type, such as **A/AAAA, CNAME, and TXT**.
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
   * The Time to Live (TTL) for the record, in seconds. A value of 1 indicates that the TTL is automatic.
   * 
   * @example
   * 30
   */
  ttl?: number;
  /**
   * @remarks
   * The UTC time when the record was last updated, in ISO 8601 format: `yyyy-MM-ddTHH:mm:ssZ`.
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
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * A list of DNS records. For details, see the <props="china">[documentation](https://help.aliyun.com/document_detail/2708761.html)<props="intl">[documentation](https://www.alibabacloud.com/help/doc-detail/2708761.html).
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

