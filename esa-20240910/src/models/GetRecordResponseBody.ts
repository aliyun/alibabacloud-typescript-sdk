// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRecordResponseBodyRecordModelAuthConf extends $dara.Model {
  /**
   * @remarks
   * The AccessKey of the account to which the origin belongs.
   * 
   * @example
   * VIxuvJSA2S03f******kp208dy5w7
   */
  accessKey?: string;
  /**
   * @remarks
   * The origin authentication type. Valid values:
   * - **public**: public read. Select this value when the origin type is OSS or S3 and the origin has public read access.
   * - **private**: private read. Select this value when the origin type is S3 and the origin has private read access.
   * - **private_same_account**: private read within the same account. Select this value when the origin type is OSS, the origin is under the same Alibaba Cloud account, and the origin has private read access.
   * - **private_cross_account**: private read across accounts. Select this value when the origin type is OSS, the origin is under a different Alibaba Cloud account, and the origin has private read access.
   * 
   * @example
   * public
   */
  authType?: string;
  /**
   * @remarks
   * The region of the origin. Obtain the region from the official S3 website.
   * 
   * @example
   * us-east-1
   */
  region?: string;
  /**
   * @remarks
   * The AccessKey of the account to which the origin belongs.
   * 
   * @example
   * u0Nkg5gBK*******QF5wvKMM504JUHt
   */
  secretKey?: string;
  /**
   * @remarks
   * The signature algorithm version. Valid values:
   * - **v2**
   * - **v4**
   * 
   * Default value: v4.
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
   * The encryption algorithm used by the record. Valid values: **0 to 255**.
   * 
   * @example
   * 1
   */
  algorithm?: number;
  /**
   * @remarks
   * The public key certificate information of the record.
   * 
   * @example
   * dGVzdGFkYWxrcw==
   */
  certificate?: string;
  /**
   * @remarks
   * The public key fingerprint value of the record.
   * 
   * @example
   * abcdef1234567890
   */
  fingerprint?: string;
  /**
   * @remarks
   * The flag of the record. The Flag of a CAA record indicates its priority and processing method. Valid values: **0 to 255**.
   * 
   * @example
   * 128
   */
  flag?: number;
  /**
   * @remarks
   * The public key identifier of the record. Valid values: **0 to 65535**.
   * 
   * @example
   * 1
   */
  keyTag?: number;
  /**
   * @remarks
   * The algorithm policy used by the record for matching or verifying certificates. Valid values: **0 to 255**.
   * 
   * @example
   * 1
   */
  matchingType?: number;
  /**
   * @remarks
   * The port of the record. Valid values: **0 to 65535**.
   * 
   * @example
   * 8707
   */
  port?: number;
  /**
   * @remarks
   * The priority of the record. Valid values: **0 to 65535**. A smaller value indicates a higher priority.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The type of certificate or public key used by the record. Valid values: **0 to 255**.
   * 
   * @example
   * 1
   */
  selector?: number;
  /**
   * @remarks
   * The tag of the record. The Tag of a CAA record indicates its specific type and purpose.
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
   * {\\"test\\": \\"test val1\\"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The certificate type of the record (in CERT records) or the public key type (in SSHFP records).
   * 
   * @example
   * 0
   */
  type?: number;
  /**
   * @remarks
   * The usage identifier of the record. Valid values: **0 to 255**.
   * 
   * @example
   * 0
   */
  usage?: number;
  /**
   * @remarks
   * The record value or partial content. The meaning varies by record type:
   * 
   * - **A/AAAA**: the IP address that the record points to. Separate multiple IP addresses with commas (,). At least one IPv4 address is required.
   * - **CNAME**: the target domain name that the record points to.
   * - **NS**: the name server for the specified domain name.
   * - **MX**: the valid target mail server domain name.
   * - **TXT**: a valid text string.
   * - **CAA**: a valid certification authority domain name.
   * - **SRV**: a valid target host domain name.
   * - **URI**: a valid URI string.
   * 
   * @example
   * example.com
   */
  value?: string;
  /**
   * @remarks
   * The weight of the record. Valid values: **0 to 65535**.
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

export class GetRecordResponseBodyRecordModel extends $dara.Model {
  /**
   * @remarks
   * The back-to-origin authentication information of the CNAME record.
   */
  authConf?: GetRecordResponseBodyRecordModelAuthConf;
  /**
   * @remarks
   * The business scenario when the record is accelerated. Valid values:
   * 
   * - **image_video**: video and image.
   * - **api**: API.
   * - **web**: web page.
   * 
   * @example
   * image_video
   */
  bizName?: string;
  /**
   * @remarks
   * The comment of the record.
   * 
   * @example
   * Remarks
   */
  comment?: string;
  /**
   * @remarks
   * The creation time of the record. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-03-10T13:30:39Z
   */
  createTime?: string;
  customPort?: string;
  /**
   * @remarks
   * The DNS information of the record. The content returned in this field varies by record type.
   * 
   * @example
   * {"value":"1.1.1.1"}
   */
  data?: GetRecordResponseBodyRecordModelData;
  /**
   * @remarks
   * The back-to-origin HOST policy. This parameter takes effect when the record type is CNAME. It specifies the HOST header policy for back-to-origin requests. Valid values:
   * 
   * - **follow_hostname**: follows the host record.
   * - **follow_origin_domain**: follows the origin domain name.
   * 
   * @example
   * follow_origin_domain
   */
  hostPolicy?: string;
  httpPorts?: string;
  httpsPorts?: string;
  /**
   * @remarks
   * Indicates whether proxy acceleration is enabled for the record. Only CNAME and A/AAAA records support proxy acceleration. Valid values:
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
   * The CNAME of the record.
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
   * The origin type of the CNAME record. Valid values:
   * 
   * - **OSS**: OSS origin.
   * - **S3**: S3 origin.
   * - **LB**: load balancing origin.
   * - **OP**: IPAM pool origin.
   * - **Domain**: standard domain name origin.
   * 
   * If this parameter is not specified or is left empty, the default value is Domain, which indicates a standard domain name origin type.
   * 
   * @example
   * OSS
   */
  recordSourceType?: string;
  /**
   * @remarks
   * The DNS type of the record, such as **A/AAAA, CNAME, or TXT**.
   * 
   * @example
   * A/AAAA
   */
  recordType?: string;
  /**
   * @remarks
   * The site ID.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @remarks
   * The site name.
   * 
   * @example
   * example.com
   */
  siteName?: string;
  /**
   * @remarks
   * The Time-to-Live (TTL) of the record, in seconds. A value of 1 indicates that the TTL is set to automatic.
   * 
   * @example
   * 20
   */
  ttl?: number;
  /**
   * @remarks
   * The update time of the record. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
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
      authConf: GetRecordResponseBodyRecordModelAuthConf,
      bizName: 'string',
      comment: 'string',
      createTime: 'string',
      customPort: 'string',
      data: GetRecordResponseBodyRecordModelData,
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

