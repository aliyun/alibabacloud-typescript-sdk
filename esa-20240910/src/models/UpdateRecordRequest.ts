// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRecordRequestAuthConf extends $dara.Model {
  /**
   * @remarks
   * The AccessKey of the account to which the origin server belongs. This parameter is required when the origin server type is OSS and the authentication type is private cross-account read, or when the origin server type is S3 and the authentication type is private read.
   * 
   * @example
   * VIxuvJSA2S03f******kp208dy5w7
   */
  accessKey?: string;
  /**
   * @remarks
   * The origin server authentication type. Supported authentication types vary based on the origin server type, which is specified by the SourceType parameter in this operation. This parameter is required when the origin server type is OSS or S3. Valid values:
   * 
   * - **public**: Public read. Select this value when the origin server type is OSS or S3 and the origin server allows public read access.
   * - **private**: Private read. Select this value when the origin server type is S3 and the origin server allows private read access.
   * - **private_same_account**: Private read within the same account. Select this value when the origin server type is OSS, the origin server and the current resource belong to the same Alibaba Cloud account, and the origin server allows private read access.
   * 
   * @example
   * private
   */
  authType?: string;
  /**
   * @remarks
   * The signature algorithm version. This parameter is required when the origin server type is S3 and the authentication type is private read. Valid values:
   * 
   * - **v2**
   * 
   * - **v4**
   * 
   * If this parameter is not specified, the default value is **v4**.
   * 
   * @example
   * v2
   */
  region?: string;
  /**
   * @remarks
   * The secret key of the account to which the origin server belongs. This parameter is required when the origin server type is OSS and the authentication type is private cross-account read, or when the origin server type is S3 and the authentication type is private read.
   * 
   * @example
   * u0Nkg5gBK*******QF5wvKMM504JUHt
   */
  secretKey?: string;
  /**
   * @remarks
   * The region to which the origin server belongs. This parameter is required when the origin server type is S3. You can obtain the region of the origin server from the official website of S3.
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
   * The encryption algorithm used by the record. Valid values: **0** to **255**. This parameter is required when you add CERT or SSHFP records.
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
   * The public key fingerprint of the record. This parameter is required when you add an SSHFP record.
   * 
   * @example
   * abcdef1234567890
   */
  fingerprint?: string;
  /**
   * @remarks
   * The flag of the record. For a CAA record, the flag indicates its priority and processing method. Valid values: **0** to **255**. This parameter is required when you add a CAA record.
   * 
   * @example
   * 128
   */
  flag?: number;
  /**
   * @remarks
   * The public key tag of the record. Valid values: **0** to **65535**. This parameter is required when you add a CERT record.
   * 
   * @example
   * 0
   */
  keyTag?: number;
  /**
   * @remarks
   * The algorithm policy used to match or verify the certificate. Valid values: **0** to **255**. This parameter is required when you add SMIMEA or TLSA records.
   * 
   * @example
   * 0
   */
  matchingType?: number;
  /**
   * @remarks
   * The port of the record. Valid values: **0** to **65535**. This parameter is required when you add an SRV record.
   * 
   * @example
   * 0
   */
  port?: number;
  /**
   * @remarks
   * The priority of the record. Valid values: **0** to **65535**. A smaller value indicates a higher priority. This parameter is required when you add MX, SRV, or URI records.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The type of the certificate or public key used by the record. Valid values: **0** to **255**. This parameter is required when you add SMIMEA or TLSA records.
   * 
   * @example
   * 0
   */
  selector?: number;
  /**
   * @remarks
   * The tag of the record. For a CAA record, the tag indicates its specific type and purpose. This parameter is required when you add a CAA record.
   * 
   * @example
   * issue
   */
  tag?: string;
  /**
   * @remarks
   * The certificate type for a CERT record, or the public key type for an SSHFP record. This parameter is required when you add CERT or SSHFP records.
   * 
   * @example
   * 0
   */
  type?: number;
  /**
   * @remarks
   * The usage identifier of the record. Valid values: **0** to **255**. This parameter is required when you add SMIMEA or TLSA records.
   * 
   * @example
   * 0
   */
  usage?: number;
  /**
   * @remarks
   * The record value or partial content. This parameter is required when you add A, AAAA, CNAME, NS, MX, TXT, CAA, SRV, or URI records. The meaning of this parameter varies based on the record type:
   * 
   * - **A/AAAA**: The destination IP address. Separate multiple IP addresses with commas (,). At least one IPv4 address is required.
   * - **CNAME**: The target domain name.
   * - **NS**: The name server of the specified domain name.
   * - **MX**: The valid domain name of the target mail server.
   * - **TXT**: A valid text string.
   * - **CAA**: The valid domain name of the certificate issuing authority.
   * - **SRV**: The valid domain name of the target host.
   * - **URI**: A valid URI string.
   * 
   * @example
   * example.com
   */
  value?: string;
  /**
   * @remarks
   * The weight of the record. Valid values: **0** to **65535**. This parameter is required when you add SRV or URI records.
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
   * The origin server authentication information for a CNAME record.
   */
  authConf?: UpdateRecordRequestAuthConf;
  /**
   * @remarks
   * The business scenario when record acceleration is enabled. This parameter is not required for records without acceleration enabled. Valid values:
   * - **video_image**: Video and image.
   * - **api**: API.
   * - **web**: Web page.
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
   * This is a remark.
   */
  comment?: string;
  /**
   * @remarks
   * The DNS information of the record. The required content for this field varies based on the record type. For more information, see <props="china">[Documentation](https://help.aliyun.com/document_detail/2708761.html)<props="intl">[Documentation](https://www.alibabacloud.com/help/doc-detail/2708761.html).
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
   * The back-to-origin host policy. This parameter takes effect when the record type is CNAME and specifies the host header policy for back-to-origin requests. Valid values:
   * 
   * - **follow_hostname**: Follows the host record.
   * - **follow_origin_domain**: Follows the origin domain name.
   * 
   * @example
   * follow_origin_domain
   */
  hostPolicy?: string;
  /**
   * @remarks
   * The HTTP port. By default, port 80 is supported.
   * 
   * @example
   * 80,2052,2082,2086,2095,8080,8880
   */
  httpPorts?: string;
  /**
   * @remarks
   * The HTTPS port. By default, port 443 is supported.
   * 
   * @example
   * 443,2053,2083,2087,2096,8443
   */
  httpsPorts?: string;
  /**
   * @remarks
   * Specifies whether to enable proxy acceleration for the record. Only CNAME, A, and AAAA records support proxy acceleration. Valid values:
   * - **true**: Enables proxy acceleration.
   * - **false**: Disables proxy acceleration.
   * 
   * @example
   * true
   */
  proxied?: boolean;
  /**
   * @remarks
   * The ID of the record. You can obtain the ID by calling the [ListRecords](https://help.aliyun.com/document_detail/2850265.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  recordId?: number;
  /**
   * @remarks
   * The origin server type for a CNAME record. This parameter is required when you add a CNAME record. Valid values:
   * 
   * - **OSS**: OSS origin server.
   * - **S3**: S3 origin server.
   * - **LB**: Load balancer origin server.
   * - **OP**: Origin address pool origin server.
   * - **Domain**: Common domain name origin server.
   * 
   * If this parameter is not specified or is left empty, the default value is **Domain**, which indicates a common domain name origin server.
   * 
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @remarks
   * The time-to-live (TTL) of the record, in seconds. Valid values: **30** to **86400**, or **1**. A value of 1 indicates that the TTL is automatic.
   * 
   * @example
   * 30
   */
  ttl?: number;
  /**
   * @remarks
   * The DNS record type. Examples include A, AAAA, CNAME, and TXT.
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

