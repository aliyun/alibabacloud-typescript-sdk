// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRecordRequestAuthConf extends $dara.Model {
  /**
   * @remarks
   * The access key for the account that owns the origin. This is required for private, cross-account access to OSS origins, and for S3 origins where the authentication type is **private**.
   * 
   * @example
   * VIxuvJSA2S03f******kp208dy5w7
   */
  accessKey?: string;
  /**
   * @remarks
   * The origin authentication type. This parameter is required when the **SourceType** is **OSS** or **S3**. Supported authentication types vary depending on the origin type. Valid values:
   * 
   * - **public**: Public read. Use for publicly readable OSS or S3 origins.
   * 
   * - **private**: Private read. Use for private S3 origins.
   * 
   * - **private_same_account**: Private read within the same account. Use for private OSS origins accessed from the same Alibaba Cloud account.
   * 
   * @example
   * private
   */
  authType?: string;
  /**
   * @remarks
   * The region where the origin is located. This parameter is required when the origin type is S3. You can find the region ID on the official S3 website.
   * 
   * - **v2**
   * 
   * - **v4**
   * 
   * If you do not specify a value, it defaults to v4.
   * 
   * @example
   * v2
   */
  region?: string;
  /**
   * @remarks
   * The secret key for the account that owns the origin. This is required for private, cross-account access to OSS origins, and for S3 origins where the authentication type is **private**.
   * 
   * @example
   * u0Nkg5gBK*******QF5wvKMM504JUHt
   */
  secretKey?: string;
  /**
   * @remarks
   * The signing algorithm version. This parameter is required when the origin type is S3 and the authentication type is **private**. Supported versions: v2 and v4. If this parameter is not specified, the default value is v4.
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
   * The encryption algorithm specified in the record. The value must be an integer from **0 to 255**. This parameter is required for CERT and SSHFP records.
   * 
   * @example
   * 0
   */
  algorithm?: number;
  /**
   * @remarks
   * The public key certificate data for the record. This parameter is required for CERT, SMIMEA, and TLSA records.
   * 
   * @example
   * dGVzdGFkYWxrcw==
   */
  certificate?: string;
  /**
   * @remarks
   * The public key fingerprint for the record. This parameter is required for SSHFP records.
   * 
   * @example
   * abcdef1234567890
   */
  fingerprint?: string;
  /**
   * @remarks
   * The flag for the record. For a CAA record, this flag indicates its priority and handling behavior. The value must be an integer from **0 to 255**. This parameter is required for CAA records.
   * 
   * @example
   * 128
   */
  flag?: number;
  /**
   * @remarks
   * The public key identifier for the record. The value must be an integer from **0 to 65535**. This parameter is required for CERT records.
   * 
   * @example
   * 0
   */
  keyTag?: number;
  /**
   * @remarks
   * The algorithm policy used to match or validate the certificate. The value must be an integer from **0 to 255**. This parameter is required for SMIMEA and TLSA records.
   * 
   * @example
   * 0
   */
  matchingType?: number;
  /**
   * @remarks
   * The port number for the record. The value must be an integer from **0 to 65535**. This parameter is required for SRV records.
   * 
   * @example
   * 0
   */
  port?: number;
  /**
   * @remarks
   * The record\\"s priority. The value must be an integer from **0 to 65535**, where a lower value indicates higher priority. This parameter is required for MX, SRV, and URI records.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The type of certificate or public key specified in the record. The value must be an integer from **0 to 255**. This parameter is required for SMIMEA and TLSA records.
   * 
   * @example
   * 0
   */
  selector?: number;
  /**
   * @remarks
   * The tag for the record. For a CAA record, the tag specifies the record\\"s type and purpose. This parameter is required for CAA records.
   * 
   * @example
   * issue
   */
  tag?: string;
  /**
   * @remarks
   * The certificate type for a CERT record, or the public key type for an SSHFP record. This parameter is required for CERT and SSHFP records.
   * 
   * @example
   * 0
   */
  type?: number;
  /**
   * @remarks
   * The usage identifier for the record. The value must be an integer from **0 to 255**. This parameter is required for SMIMEA and TLSA records.
   * 
   * @example
   * 0
   */
  usage?: number;
  /**
   * @remarks
   * The value of the record or part of its content. This parameter is required for A/AAAA, CNAME, NS, MX, TXT, CAA, SRV, and URI records. The meaning of this parameter varies by record type:
   * 
   * - **A/AAAA**: The target IP address. To specify multiple IP addresses, separate them with a comma (,). At least one IPv4 address is required.
   * 
   * - **CNAME**: The target domain name.
   * 
   * - **NS**: The name server for the domain.
   * 
   * - **MX**: A valid domain name for the target mail server.
   * 
   * - **TXT**: A valid text string.
   * 
   * - **CAA**: A valid domain name for the certificate authority.
   * 
   * - **SRV**: A valid domain name for the target host.
   * 
   * - **URI**: A valid URI string.
   * 
   * @example
   * example.com
   */
  value?: string;
  /**
   * @remarks
   * The weight of the record. The value must be an integer from **0 to 65535**. This parameter is required for SRV and URI records.
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
   * The origin authentication settings for the CNAME record.
   */
  authConf?: UpdateRecordRequestAuthConf;
  /**
   * @remarks
   * The use case for proxy acceleration. Omit this parameter if proxy acceleration is disabled. Valid values:
   * 
   * - **video_image**: Video and images.
   * 
   * - **api**: APIs.
   * 
   * - **web**: Web pages.
   * 
   * @example
   * web
   */
  bizName?: string;
  /**
   * @remarks
   * A comment for the record.
   * 
   * @example
   * This is a remark.
   */
  comment?: string;
  /**
   * @remarks
   * The DNS data for the record. The required content varies based on the record type. For more information, see <props="china">[Documentation](https://help.aliyun.com/document_detail/2708761.html)<props="intl">[Documentation](https://www.alibabacloud.com/help/doc-detail/2708761.html).
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
   * The origin HOST policy. This policy, which applies only to CNAME records, determines the value of the `HOST` header in requests sent to the origin. Valid values:
   * 
   * - **follow_hostname**: Follows the host record.
   * 
   * - **follow_origin_domain**: Follows the origin domain name.
   * 
   * @example
   * follow_origin_domain
   */
  hostPolicy?: string;
  httpPorts?: string;
  httpsPorts?: string;
  /**
   * @remarks
   * Indicates whether to enable proxy acceleration for the record. Only CNAME and A/AAAA records support proxy acceleration. Valid values:
   * 
   * - **true**: Enables proxy acceleration.
   * 
   * - **false**: Disables proxy acceleration.
   * 
   * @example
   * true
   */
  proxied?: boolean;
  /**
   * @remarks
   * The record ID. Call the [ListRecords](https://help.aliyun.com/document_detail/2850265.html) operation to get this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  recordId?: number;
  /**
   * @remarks
   * The origin type for the CNAME record. This parameter is required for CNAME records. Valid values:
   * 
   * - **OSS**: An OSS origin.
   * 
   * - **S3**: An S3 origin.
   * 
   * - **LB**: A load balancer origin.
   * 
   * - **OP**: An origin address pool origin.
   * 
   * - **Domain**: A standard domain name origin.
   * 
   * If this parameter is omitted or left empty, the default value is `Domain`.
   * 
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @remarks
   * The record\\"s time to live (TTL) in seconds. The value must be an integer from **30 to 86400** or 1. A value of 1 sets the TTL to automatic.
   * 
   * @example
   * 30
   */
  ttl?: number;
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

