// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRecordRequestAuthConf extends $dara.Model {
  /**
   * @remarks
   * The AccessKey of the account to which the origin server belongs. This parameter is required when the origin server type is OSS and the origin authentication type is private cross-account read, or when the origin server type is S3 and the origin authentication type is private read.
   * 
   * @example
   * VIxuvJSA2S03f******kp208dy5w7
   */
  accessKey?: string;
  /**
   * @remarks
   * The origin authentication type. Different origin server types support different authentication types. The origin server type refers to the SourceType parameter in this operation. When the origin server type is OSS or S3, you must specify the origin authentication type. Valid values:
   * 
   * - **public**: public read. Select this value when the origin server type is OSS or S3 and the origin server allows public read access.
   * - **private**: private read. Select this value when the origin server type is S3 and the origin server allows only private read access.
   * - **private_same_account**: private same-account read. Select this value when the origin server type is OSS, the origin server is under the same Alibaba Cloud account, and the origin server allows only private read access.
   * 
   * @example
   * private
   */
  authType?: string;
  /**
   * @remarks
   * The signature algorithm version. This parameter is required when the origin server type is S3 and the origin authentication type is private read. Valid values:
   * 
   * - **v2**
   * 
   * - **v4**
   * 
   * Default value: v4.
   * 
   * @example
   * v2
   */
  region?: string;
  /**
   * @remarks
   * The SecretKey of the account to which the origin server belongs. This parameter is required when the origin server type is OSS and the origin authentication type is private cross-account read, or when the origin server type is S3 and the origin authentication type is private read.
   * 
   * @example
   * u0Nkg5gBK*******QF5wvKMM504JUHt
   */
  secretKey?: string;
  /**
   * @remarks
   * The region to which the origin server belongs. This parameter is required when the origin server type is S3. Obtain the region from the official S3 website.
   * 
   * @example
   * us-east-1
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

export class UpdateRecordRequestData extends $dara.Model {
  /**
   * @remarks
   * The encryption algorithm used by the record. Valid values: **0 to 255**. This parameter is required when you add CERT or SSHFP records.
   * 
   * @example
   * 0
   */
  algorithm?: number;
  /**
   * @remarks
   * The public key certificate information of the record. This parameter is required when you add CERT, SMIMEA, or TLSA records.
   * 
   * @example
   * dGVzdGFkYWxrcw==
   */
  certificate?: string;
  /**
   * @remarks
   * The public key fingerprint value of the record. This parameter is required when you add SSHFP records.
   * 
   * @example
   * abcdef1234567890
   */
  fingerprint?: string;
  /**
   * @remarks
   * The flag of the record. The Flag of a CAA record indicates its priority and processing method. Valid values: **0 to 255**. This parameter is required when you add CAA records.
   * 
   * @example
   * 128
   */
  flag?: number;
  /**
   * @remarks
   * The public key identifier of the record. Valid values: **0 to 65535**. This parameter is required when you add CERT records.
   * 
   * @example
   * 0
   */
  keyTag?: number;
  /**
   * @remarks
   * The algorithm policy used by the record for matching or verifying certificates. Valid values: **0 to 255**. This parameter is required when you add SMIMEA or TLSA records.
   * 
   * @example
   * 0
   */
  matchingType?: number;
  /**
   * @remarks
   * The port of the record. Valid values: **0 to 65535**. This parameter is required when you add SRV records.
   * 
   * @example
   * 0
   */
  port?: number;
  /**
   * @remarks
   * The priority of the record. Valid values: **0 to 65535**. A smaller value indicates a higher priority. This parameter is required when you add MX, SRV, or URI records.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The type of certificate or public key used by the record. Valid values: **0 to 255**. This parameter is required when you add SMIMEA or TLSA records.
   * 
   * @example
   * 0
   */
  selector?: number;
  /**
   * @remarks
   * The tag of the record. The Tag of a CAA record indicates its specific type and purpose. This parameter is required when you add CAA records.
   * 
   * @example
   * issue
   */
  tag?: string;
  /**
   * @remarks
   * The certificate type of the record (for CERT records) or the public key type (for SSHFP records). This parameter is required when you add CERT or SSHFP records.
   * 
   * @example
   * 0
   */
  type?: number;
  /**
   * @remarks
   * The usage identifier of the record. Valid values: **0 to 255**. This parameter is required when you add SMIMEA or TLSA records.
   * 
   * @example
   * 0
   */
  usage?: number;
  /**
   * @remarks
   * The record value or partial content. This parameter is required when you add A/AAAA, CNAME, NS, MX, TXT, CAA, SRV, or URI records. The meaning varies depending on the record type:
   * 
   * - **A/AAAA**: The IP address to which the record points. Separate multiple IP addresses with commas (,). At least one IPv4 address is required.
   * - **CNAME**: The target domain name to which the record points.
   * - **NS**: The name server for the specified domain name.
   * - **MX**: A valid target mail server domain name.
   * - **TXT**: A valid text string.
   * - **CAA**: A valid certification authority domain name.
   * - **SRV**: A valid target host domain name.
   * - **URI**: A valid URI string.
   * 
   * @example
   * example.com
   */
  value?: string;
  /**
   * @remarks
   * The weight of the record. Valid values: **0 to 65535**. This parameter is required when you add SRV or URI records.
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

export class UpdateRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The origin authentication information of the CNAME record.
   */
  authConf?: UpdateRecordRequestAuthConf;
  /**
   * @remarks
   * The business scenario for record acceleration. This parameter is not required for records without acceleration enabled. Valid values:
   * - **video_image**: video and image.
   * - **api**: API.
   * - **web**: web page.
   * 
   * @example
   * web
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
   * The DNS information of the record. The content varies depending on the record type. For more information, see <props="china">[documentation](https://help.aliyun.com/document_detail/2708761.html)<props="intl">[documentation](https://www.alibabacloud.com/help/doc-detail/2708761.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *     "value":"2.2.2.2"
   * }
   */
  data?: UpdateRecordRequestData;
  /**
   * @remarks
   * The back-to-origin HOST policy. This parameter takes effect when the record type is CNAME. Settings the HOST policy for back-to-origin requests. Valid values:
   * 
   * - **follow_hostname**: follows the host record.
   * - **follow_origin_domain**: follows the Origin Domain Name.
   * 
   * @example
   * follow_origin_domain
   */
  hostPolicy?: string;
  httpPorts?: string;
  httpsPorts?: string;
  /**
   * @remarks
   * Specifies whether to enable proxy acceleration for the record. Only CNAME records and A/AAAA records support proxy acceleration. Valid values:
   * - **true**: Enable proxy acceleration.
   * - **false**: Disable proxy acceleration.
   * 
   * @example
   * true
   */
  proxied?: boolean;
  /**
   * @remarks
   * The ID of the record. You can call [ListRecords](https://help.aliyun.com/document_detail/2850265.html) to obtain the record ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  recordId?: number;
  /**
   * @remarks
   * The origin server type of the CNAME record. This parameter is required when you add a CNAME record. Valid values:
   * 
   * - **OSS**: OSS origin server.
   * - **S3**: S3 origin server.
   * - **LB**: load balancing origin server.
   * - **OP**: IPAM pool origin server.
   * - **Domain**: standard domain name origin server.
   * 
   * If this parameter is not specified or is left empty, the default value is Domain, which indicates a standard domain name origin server type.
   * 
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @remarks
   * The time-to-live (TTL) of the record, in seconds. Valid values: **30 to 86400**, or 1. A value of 1 indicates that the TTL of the record is automatically determined.
   * 
   * @example
   * 30
   */
  ttl?: number;
  /**
   * @remarks
   * The DNS type of the record, such as A/AAAA, CNAME, or TXT.
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
      recordId: 'RecordId',
      sourceType: 'SourceType',
      ttl: 'Ttl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConf: UpdateRecordRequestAuthConf,
      bizName: 'string',
      comment: 'string',
      data: UpdateRecordRequestData,
      hostPolicy: 'string',
      httpPorts: 'string',
      httpsPorts: 'string',
      proxied: 'boolean',
      recordId: 'number',
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

