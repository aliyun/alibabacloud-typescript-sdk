// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateRecordsRequestRecordListAuthConf extends $dara.Model {
  /**
   * @remarks
   * The AccessKey of the account to which the origin belongs. This parameter is required when the origin type is OSS and the authentication type is private cross-account read, or when the origin type is S3 and the authentication type is private read.
   * 
   * @example
   * u0Nkg5gBK*******QF5wvKMM504JUHt
   */
  accessKey?: string;
  /**
   * @remarks
   * The origin authentication type. Different origin types support different authentication types. The origin type refers to the SourceType parameter in this operation. When the origin type is OSS or S3, you must specify the authentication type. Valid values:
   * - **public**: public read. Select this value when the origin type is OSS or S3 and the origin allows public read access.
   * - **private**: private read. Select this value when the origin type is S3 and the origin allows only private read access.
   * - **private_same_account**: private same-account read. Select this value when the origin type is OSS, the origin is under the same Alibaba Cloud account, and the origin allows only private read access.
   * - **private_cross_account**: private cross-account read. Select this value when the origin type is OSS, the origin is under a different Alibaba Cloud account, and the origin allows only private read access.
   * 
   * @example
   * private
   */
  authType?: string;
  /**
   * @remarks
   * The region of the origin. This parameter is required when the origin type is S3. Obtain the region from the official S3 website.
   * 
   * @example
   * us-east-1
   */
  region?: string;
  /**
   * @remarks
   * The SecretKey of the account to which the origin belongs. This parameter is required when the origin type is OSS and the authentication type is private cross-account read, or when the origin type is S3 and the authentication type is private read.
   * 
   * @example
   * VIxuvJSA2S03f******kp208dy5w7
   */
  secretKey?: string;
  /**
   * @remarks
   * The signature algorithm version. This parameter is available when the origin type is S3 and the authentication type is private read. Valid values:
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

export class BatchCreateRecordsRequestRecordListData extends $dara.Model {
  /**
   * @remarks
   * The encryption algorithm used by the record. Value range: **0 to 255**. This parameter applies to CERT and SSHFP records.
   * 
   * @example
   * 0
   */
  algorithm?: number;
  /**
   * @remarks
   * The public key certificate information of the record. This parameter applies to CERT, SMIMEA, and TLSA records.
   * 
   * @example
   * dGVzdGFkYWxrcw==
   */
  certificate?: string;
  /**
   * @remarks
   * The public key fingerprint of the record. This parameter applies to SSHFP records.
   * 
   * @example
   * abcdef1234567890
   */
  fingerprint?: string;
  /**
   * @remarks
   * The flag of the CAA record, which indicates its priority and processing method. Value range: **0 to 255**.
   * 
   * @example
   * 128
   */
  flag?: number;
  /**
   * @remarks
   * The public key identifier of the record. Value range: **0 to 65535**. This parameter applies to CERT records.
   * 
   * @example
   * 0
   */
  keyTag?: number;
  /**
   * @remarks
   * The algorithm policy used to match or verify certificates. Value range: **0 to 255**. This parameter applies to SMIMEA and TLSA records.
   * 
   * @example
   * 0
   */
  matchingType?: number;
  /**
   * @remarks
   * The port of the record. Value range: **0 to 65535**. This parameter applies only to SRV records.
   * 
   * @example
   * 0
   */
  port?: number;
  /**
   * @remarks
   * The priority of the record. Value range: **0 to 65535**. A smaller value indicates a higher priority. This parameter is required when you add MX, SRV, or URI records.
   * 
   * @example
   * 2
   */
  priority?: number;
  /**
   * @remarks
   * The type of certificate or public key used by the record. Value range: **0 to 255**. This parameter applies to SMIMEA and TLSA records.
   * 
   * @example
   * 0
   */
  selector?: number;
  /**
   * @remarks
   * The tag of the CAA record, which indicates its specific type and purpose, such as issue, issuewild, or iodef.
   * 
   * @example
   * issue
   */
  tag?: string;
  /**
   * @remarks
   * The certificate type (for CERT records) or public key type (for SSHFP records) of the record.
   * 
   * @example
   * 0
   */
  type?: number;
  /**
   * @remarks
   * The usage identifier of the record. Value range: **0 to 255**. This parameter applies to SMIMEA and TLSA records.
   * 
   * @example
   * 0
   */
  usage?: number;
  /**
   * @remarks
   * The record value or partial content. The meaning varies by record type:
   * - **A/AAAA**: the IP address.
   * - **CNAME**: the target domain name.
   * - **MX**: a valid target mail server domain name.
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
   * The weight of the record. Value range: **0 to 65535**. This parameter applies to SRV and URI records.
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

export class BatchCreateRecordsRequestRecordList extends $dara.Model {
  /**
   * @remarks
   * The origin authentication information of the CNAME record.
   */
  authConf?: BatchCreateRecordsRequestRecordListAuthConf;
  /**
   * @remarks
   * The business scenario for record acceleration. Valid values:
   * - **image_video**: video and image.
   * - **api**: API.
   * - **web**: web page.
   * 
   * @example
   * web
   */
  bizName?: string;
  /**
   * @remarks
   * The DNS information of the record. Different fields are required based on the record type.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *     "value":"2.2.2.2"
   * }
   */
  data?: BatchCreateRecordsRequestRecordListData;
  httpPorts?: string;
  httpsPorts?: string;
  /**
   * @remarks
   * Specifies whether to enable proxied acceleration for the record. Only CNAME records and A/AAAA records support proxied acceleration. Valid values:
   * - **true**: Proxied acceleration is enabled.
   * - **false**: Proxied acceleration is disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  proxied?: boolean;
  /**
   * @remarks
   * The record name.
   * 
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * The origin type of the CNAME record. This parameter is required when you add a CNAME record. Valid values:
   * 
   * - **OSS**: OSS origin.
   * - **S3**: S3 origin.
   * - **LB**: load balancing origin.
   * - **OP**: IPAM pool origin.
   * - **Domain**: common domain name origin.
   * 
   * If this parameter is left empty or not specified, the default value is Domain, which indicates a common domain name origin.
   * 
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @remarks
   * The time-to-live (TTL) of the record, in seconds. A value of 1 indicates that the TTL is set to automatic.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  ttl?: number;
  /**
   * @remarks
   * The DNS type of the record.
   * 
   * This parameter is required.
   * 
   * @example
   * A/AAAA
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      authConf: 'AuthConf',
      bizName: 'BizName',
      data: 'Data',
      httpPorts: 'HttpPorts',
      httpsPorts: 'HttpsPorts',
      proxied: 'Proxied',
      recordName: 'RecordName',
      sourceType: 'SourceType',
      ttl: 'Ttl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConf: BatchCreateRecordsRequestRecordListAuthConf,
      bizName: 'string',
      data: BatchCreateRecordsRequestRecordListData,
      httpPorts: 'string',
      httpsPorts: 'string',
      proxied: 'boolean',
      recordName: 'string',
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

export class BatchCreateRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of DNS records to create.
   * 
   * This parameter is required.
   */
  recordList?: BatchCreateRecordsRequestRecordList[];
  /**
   * @remarks
   * The site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      recordList: 'RecordList',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordList: { 'type': 'array', 'itemType': BatchCreateRecordsRequestRecordList },
      siteId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.recordList)) {
      $dara.Model.validateArray(this.recordList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

