// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRecordResponseBodyRecordModelAuthConf extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID of the account that owns the origin.
   * 
   * @example
   * VIxuvJSA2S03f******kp208dy5w7
   */
  accessKey?: string;
  /**
   * @remarks
   * The origin authentication type. Valid values:
   * 
   * - **public**: Public read. Select this value when the origin is an OSS or S3 origin with public read access.
   * 
   * - **private**: Private read. Select this value when the origin is an S3 origin with private read access.
   * 
   * - **private_same_account**: Private read within the same account. Select this value when the origin is an OSS origin with private read access under the same Alibaba Cloud account.
   * 
   * - **private_cross_account**: Private read across accounts. Select this value when the origin is an OSS origin with private read access under a different Alibaba Cloud account.
   * 
   * @example
   * public
   */
  authType?: string;
  /**
   * @remarks
   * The origin\\"s region. For S3 origins, you can find region codes on the official S3 website.
   * 
   * @example
   * us-east-1
   */
  region?: string;
  /**
   * @remarks
   * The AccessKey secret of the account that owns the origin.
   * 
   * @example
   * u0Nkg5gBK*******QF5wvKMM504JUHt
   */
  secretKey?: string;
  /**
   * @remarks
   * The version of the signature algorithm. Supported versions:
   * 
   * - **v2**
   * 
   * - **v4**
   * 
   * If unspecified, the default is `v4`.
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
   * The encryption algorithm of the record, from **0** to **255**.
   * 
   * @example
   * 1
   */
  algorithm?: number;
  /**
   * @remarks
   * The record\\"s public key certificate.
   * 
   * @example
   * dGVzdGFkYWxrcw==
   */
  certificate?: string;
  /**
   * @remarks
   * The public key fingerprint of the record.
   * 
   * @example
   * abcdef1234567890
   */
  fingerprint?: string;
  /**
   * @remarks
   * The flag of the record. For CAA records, this flag indicates the priority and processing method. The value must be from **0** to **255**.
   * 
   * @example
   * 128
   */
  flag?: number;
  /**
   * @remarks
   * The public key identifier of the record, from **0** to **65535**.
   * 
   * @example
   * 1
   */
  keyTag?: number;
  /**
   * @remarks
   * The algorithm policy for matching or verifying the certificate, from **0** to **255**.
   * 
   * @example
   * 1
   */
  matchingType?: number;
  /**
   * @remarks
   * The port of the record, from **0** to **65535**.
   * 
   * @example
   * 8707
   */
  port?: number;
  /**
   * @remarks
   * The priority of the record, from **0** to **65535**. A lower value indicates a higher priority.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The record\\"s certificate or public key type, from **0** to **255**.
   * 
   * @example
   * 1
   */
  selector?: number;
  /**
   * @remarks
   * The tag of the record. For CAA records, the tag indicates the specific type and purpose.
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
   * RSA
   */
  type?: number;
  /**
   * @remarks
   * The usage identifier of the record, from **0** to **255**.
   * 
   * @example
   * 0
   */
  usage?: number;
  /**
   * @remarks
   * The record value. The meaning of this parameter varies by the record type:
   * 
   * - **A/AAAA**: The target IP address. Separate multiple IP addresses with a comma (`,`). Requires at least one IPv4 address.
   * 
   * - **CNAME**: The target domain name.
   * 
   * - **NS**: The name server for the specified domain.
   * 
   * - **MX**: A valid target mail server domain name.
   * 
   * - **TXT**: A valid text string.
   * 
   * - **CAA**: A valid Certificate Authority domain name.
   * 
   * - **SRV**: A valid target host domain name.
   * 
   * - **URI**: A valid URI string.
   * 
   * @example
   * example.com
   */
  value?: string;
  /**
   * @remarks
   * The weight of the record, from **0** to **65535**.
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
   * The origin authentication settings for the CNAME record.
   */
  authConf?: GetRecordResponseBodyRecordModelAuthConf;
  /**
   * @remarks
   * The business scenario for record acceleration. Valid values:
   * 
   * - **image_video**: Images and videos.
   * 
   * - **api**: APIs.
   * 
   * - **web**: Web pages.
   * 
   * @example
   * image_video
   */
  bizName?: string;
  /**
   * @remarks
   * The comment for the record.
   * 
   * @example
   * This is a remark.
   */
  comment?: string;
  /**
   * @remarks
   * The time when the record was created. The time is in UTC and follows the ISO 8601 standard. Format: `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * @example
   * 2023-03-10T13:30:39Z
   */
  createTime?: string;
  customPort?: string;
  /**
   * @remarks
   * DNS information for the record. The content varies based on the record type.
   * 
   * @example
   * {"value":"1.1.1.1"}
   */
  data?: GetRecordResponseBodyRecordModelData;
  /**
   * @remarks
   * Specifies the policy for the `Host` header during origin-pull. This parameter applies only to CNAME records. Valid values:
   * 
   * - **follow_hostname**: Follows the host record.
   * 
   * - **follow_origin_domain**: Follows the origin domain.
   * 
   * @example
   * follow_origin_domain
   */
  hostPolicy?: string;
  httpPorts?: string;
  httpsPorts?: string;
  /**
   * @remarks
   * Indicates whether the proxy is enabled for the record. This feature is supported only for A, AAAA, and CNAME records. Valid values:
   * 
   * - **true**: The proxy is enabled.
   * 
   * - **false**: The proxy is disabled.
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
   * The origin type for CNAME records. Valid values:
   * 
   * - **OSS**: OSS origin.
   * 
   * - **S3**: S3 origin.
   * 
   * - **LB**: A load balancer.
   * 
   * - **OP**: An origin pool.
   * 
   * - **Domain**: A standard domain.
   * 
   * If unspecified, the default is `Domain`.
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
   * The record\\"s Time to Live (TTL) in seconds. A value of 1 indicates an automatic TTL.
   * 
   * @example
   * 20
   */
  ttl?: number;
  /**
   * @remarks
   * The time when the record was last updated. The time is in UTC and follows the ISO 8601 standard. Format: `yyyy-MM-ddTHH:mm:ssZ`.
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
   * Details of the record.
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

