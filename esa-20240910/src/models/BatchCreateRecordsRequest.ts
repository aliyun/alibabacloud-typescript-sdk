// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateRecordsRequestRecordListAuthConf extends $dara.Model {
  /**
   * @remarks
   * The access key ID of the account that owns the origin. This parameter is required when the origin type is `OSS` and the authentication type is `private_cross_account`, or when the origin type is `S3` and the authentication type is `private`.
   * 
   * @example
   * u0Nkg5gBK*******QF5wvKMM504JUHt
   */
  accessKey?: string;
  /**
   * @remarks
   * The type of origin authentication. Supported authentication types depend on the origin type, which is specified by the `SourceType` parameter. This parameter is required when the origin type is `OSS` or `S3`. Valid values:
   * 
   * - **public**: For OSS or S3 origins with public read access.
   * 
   * - **private**: For S3 origins with private read access.
   * 
   * - **private_same_account**: For OSS origins with private read access within the same Alibaba Cloud account.
   * 
   * - **private_cross_account**: For OSS origins with private read access from a different Alibaba Cloud account.
   * 
   * @example
   * private
   */
  authType?: string;
  /**
   * @remarks
   * The region where the S3 origin is located. This parameter is required when the origin type is `S3`. For a list of valid region IDs, refer to the official S3 documentation.
   * 
   * @example
   * us-east-1
   */
  region?: string;
  /**
   * @remarks
   * The secret key associated with the specified AccessKey. This parameter is required when the origin type is `OSS` and the authentication type is `private_cross_account`, or when the origin type is `S3` and the authentication type is `private`.
   * 
   * @example
   * VIxuvJSA2S03f******kp208dy5w7
   */
  secretKey?: string;
  /**
   * @remarks
   * The signature algorithm version. This parameter is applicable when the origin type is `S3` and the authentication type is `private`. Supported versions:
   * 
   * - **v2**
   * 
   * - **v4**
   * 
   * If omitted, the default version is `v4`.
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
   * The algorithm identifier for the record. Valid values range from **0-255**. This parameter applies to CERT and SSHFP records.
   * 
   * @example
   * 0
   */
  algorithm?: number;
  /**
   * @remarks
   * The certificate or public key data for the record. This parameter applies to CERT, SMIMEA, and TLSA records.
   * 
   * @example
   * dGVzdGFkYWxrcw==
   */
  certificate?: string;
  /**
   * @remarks
   * The public key fingerprint for the record. This parameter applies to SSHFP records.
   * 
   * @example
   * abcdef1234567890
   */
  fingerprint?: string;
  /**
   * @remarks
   * The flag for the CAA record, which specifies how a Certificate Authority must handle the record. Valid values range from **0-255**.
   * 
   * @example
   * 128
   */
  flag?: number;
  /**
   * @remarks
   * The public key identifier for the record. Valid values range from **0-65535**. This parameter applies to CERT records.
   * 
   * @example
   * 0
   */
  keyTag?: number;
  /**
   * @remarks
   * The algorithm policy used to match or validate a certificate. Valid values range from **0-255**. This parameter applies to SMIMEA and TLSA records.
   * 
   * @example
   * 0
   */
  matchingType?: number;
  /**
   * @remarks
   * The port number for the record. Valid values range from **0-65535**. This parameter applies only to SRV records.
   * 
   * @example
   * 0
   */
  port?: number;
  /**
   * @remarks
   * The priority of the record. Valid values range from **0-65535**. A lower value indicates a higher priority. This parameter is required for MX, SRV, or URI records.
   * 
   * @example
   * 2
   */
  priority?: number;
  /**
   * @remarks
   * The type of certificate or public key used by the record. Valid values range from **0-255**. This parameter applies to SMIMEA and TLSA records.
   * 
   * @example
   * 0
   */
  selector?: number;
  /**
   * @remarks
   * The tag for the CAA record, which specifies its type and purpose, such as `issue`, `issuewild`, or `iodef`.
   * 
   * @example
   * issue
   */
  tag?: string;
  /**
   * @remarks
   * The certificate type for a CERT record or the public key type for an SSHFP record.
   * 
   * @example
   * 0
   */
  type?: number;
  /**
   * @remarks
   * The usage identifier for the record. Valid values range from **0-255**. This parameter applies to SMIMEA and TLSA records.
   * 
   * @example
   * 0
   */
  usage?: number;
  /**
   * @remarks
   * The record value. The format depends on the record type.
   * 
   * - **A/AAAA**: An IP address.
   * 
   * - **CNAME**: The target domain name.
   * 
   * - **MX**: The domain name of the target mail server.
   * 
   * - **TXT**: A text string.
   * 
   * - **CAA**: The domain name of a Certificate Authority.
   * 
   * - **SRV**: The domain name of the target host.
   * 
   * - **URI**: A URI string.
   * 
   * @example
   * example.com
   */
  value?: string;
  /**
   * @remarks
   * The weight of the record. Valid values range from **0-65535**. This parameter applies to SRV and URI records.
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
   * The origin authentication information for the CNAME record.
   */
  authConf?: BatchCreateRecordsRequestRecordListAuthConf;
  /**
   * @remarks
   * The use case for proxy acceleration. Valid values:
   * 
   * - **image_video**: Images and videos.
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
   * The content of the DNS record. The required fields depend on the record type.
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
   * Specifies whether to enable proxy acceleration for the record. Only CNAME and A/AAAA records support proxy acceleration. Valid values:
   * 
   * - **true**: Enables proxy acceleration.
   * 
   * - **false**: Disables proxy acceleration.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  proxied?: boolean;
  /**
   * @remarks
   * The name of the record.
   * 
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * The origin type for the CNAME record. This parameter is required when you add a CNAME record. Valid values:
   * 
   * - **OSS**: An OSS origin.
   * 
   * - **S3**: An S3 origin.
   * 
   * - **LB**: A load balancer origin.
   * 
   * - **OP**: An origin pool origin.
   * 
   * - **Domain**: A domain name origin.
   * 
   * If omitted or left empty, this parameter defaults to `Domain`.
   * 
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @remarks
   * The Time to Live (TTL) for the record, in seconds. A value of `1` indicates an automatic TTL.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  ttl?: number;
  /**
   * @remarks
   * The type of the DNS record.
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
   * The ID of the site. You can get this ID by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
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

