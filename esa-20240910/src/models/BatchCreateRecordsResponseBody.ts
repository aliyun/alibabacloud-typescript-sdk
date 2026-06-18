// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateRecordsResponseBodyRecordResultListFailedData extends $dara.Model {
  /**
   * @remarks
   * The encryption algorithm used by the record. The value ranges from **0** to **255**. This parameter applies to CERT and SSHFP records.
   * 
   * @example
   * 0
   */
  algorithm?: number;
  /**
   * @remarks
   * The public key certificate for the record. This parameter applies to CERT, SMIMEA, and TLSA records.
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
   * The flag for the record, which indicates its priority and processing method. This parameter applies to CAA records.
   * 
   * @example
   * 128
   */
  flag?: number;
  /**
   * @remarks
   * The public key identifier for the record. The value ranges from **0** to **65535**. This parameter applies to CERT records.
   * 
   * @example
   * 0
   */
  keyTag?: number;
  /**
   * @remarks
   * The algorithm policy used by the record to match or validate certificates. The value ranges from **0** to **255**. This parameter applies to SMIMEA and TLSA records.
   * 
   * @example
   * RSA
   */
  matchingType?: number;
  /**
   * @remarks
   * The port for the record. The value ranges from 0 to 65535. This parameter applies only to SRV records.
   * 
   * @example
   * 0
   */
  port?: number;
  /**
   * @remarks
   * The priority of the record. The value ranges from **0** to **65535**. A smaller value indicates a higher priority. This parameter applies to MX, SRV, and URI records.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The type of certificate or public key used by the record. The value ranges from **0** to **255**. This parameter applies to SMIMEA and TLSA records.
   * 
   * @example
   * 0
   */
  selector?: number;
  /**
   * @remarks
   * The tag for a CAA record, which specifies its type and purpose, such as `issue`, `issuewild`, or `iodef`.
   * 
   * @example
   * issue
   */
  tag?: string;
  /**
   * @remarks
   * The certificate type for CERT records or the public key type for SSHFP records.
   * 
   * @example
   * 0
   */
  type?: number;
  /**
   * @remarks
   * The usage identifier for the record. The value ranges from **0** to **255**. This parameter applies to SMIMEA and TLSA records.
   * 
   * @example
   * 0
   */
  usage?: number;
  /**
   * @remarks
   * The record value. This parameter applies to A/AAAA, CNAME, NS, MX, TXT, CAA, SRV, and URI records. The meaning of this parameter varies based on the record type:
   * 
   * - **A/AAAA**: The IP address. To specify multiple addresses, separate them with a comma (,). At least one IPv4 address is required.
   * 
   * - **CNAME**: The target domain name.
   * 
   * - **NS**: The name server for the domain.
   * 
   * - **MX**: The domain name of a valid target mail server.
   * 
   * - **TXT**: A valid text string.
   * 
   * - **CAA**: The domain name of a valid certificate authority.
   * 
   * - **SRV**: The domain name of a valid target host.
   * 
   * - **URI**: A valid URI string.
   * 
   * @example
   * example.com
   */
  value?: string;
  /**
   * @remarks
   * The weight of the record. The value ranges from 0 to 65535. This parameter applies to SRV and URI records.
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

export class BatchCreateRecordsResponseBodyRecordResultListFailed extends $dara.Model {
  /**
   * @remarks
   * The acceleration use case for the record. Valid values:
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
   * The DNS information for the record.
   * 
   * @example
   * {"value":"2.2.2.2"}
   */
  data?: BatchCreateRecordsResponseBodyRecordResultListFailedData;
  /**
   * @remarks
   * The result description.
   * 
   * @example
   * 记录的名称非法
   */
  description?: string;
  httpPorts?: string;
  httpsPorts?: string;
  /**
   * @remarks
   * Specifies whether proxy acceleration is enabled for the record. This option is available only for CNAME, A, and AAAA records. Valid values:
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
   * The DNS type of the record, such as **A/AAAA**, **CNAME**, or **TXT**.
   * 
   * @example
   * A/AAAA
   */
  recordType?: string;
  /**
   * @remarks
   * The type of origin for a CNAME record. This parameter is empty for other record types. Valid values:
   * 
   * - **OSS**: An OSS origin.
   * 
   * - **S3**: An S3 origin.
   * 
   * - **LB**: A load balancer origin.
   * 
   * - **OP**: An origin pool.
   * 
   * - **Domain**: A domain name origin.
   * 
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @remarks
   * The TTL of the record in seconds. A value of 1 sets the TTL to Automatic.
   * 
   * @example
   * 60
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      bizName: 'BizName',
      data: 'Data',
      description: 'Description',
      httpPorts: 'HttpPorts',
      httpsPorts: 'HttpsPorts',
      proxied: 'Proxied',
      recordId: 'RecordId',
      recordName: 'RecordName',
      recordType: 'RecordType',
      sourceType: 'SourceType',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizName: 'string',
      data: BatchCreateRecordsResponseBodyRecordResultListFailedData,
      description: 'string',
      httpPorts: 'string',
      httpsPorts: 'string',
      proxied: 'boolean',
      recordId: 'number',
      recordName: 'string',
      recordType: 'string',
      sourceType: 'string',
      ttl: 'number',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateRecordsResponseBodyRecordResultListSuccessData extends $dara.Model {
  /**
   * @remarks
   * The encryption algorithm used by the record. The value ranges from **0** to **255**. This parameter applies to CERT and SSHFP records.
   * 
   * @example
   * 0
   */
  algorithm?: number;
  /**
   * @remarks
   * The public key certificate for the record. This parameter applies to CERT, SMIMEA, and TLSA records.
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
   * The flag for the record, which indicates its priority and processing method. This parameter applies to CAA records.
   * 
   * @example
   * 128
   */
  flag?: number;
  /**
   * @remarks
   * The public key identifier for the record. The value ranges from **0** to **65535**. This parameter applies to CERT records.
   * 
   * @example
   * 0
   */
  keyTag?: number;
  /**
   * @remarks
   * The algorithm policy used by the record to match or validate certificates. The value ranges from **0** to **255**. This parameter applies to SMIMEA and TLSA records.
   * 
   * @example
   * 0
   */
  matchingType?: number;
  /**
   * @remarks
   * The port for the record. The value ranges from **0** to **65535**. This parameter applies only to SRV records.
   * 
   * @example
   * 0
   */
  port?: number;
  /**
   * @remarks
   * The priority of the record. The value ranges from **0** to **65535**. A smaller value indicates a higher priority. This parameter applies to MX, SRV, and URI records.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The type of certificate or public key used by the record. The value ranges from **0** to **255**. This parameter applies to SMIMEA and TLSA records.
   * 
   * @example
   * 0
   */
  selector?: number;
  /**
   * @remarks
   * The tag for a CAA record, which specifies its type and purpose, such as `issue`, `issuewild`, or `iodef`.
   * 
   * @example
   * issue
   */
  tag?: string;
  /**
   * @remarks
   * The certificate type for CERT records or the public key type for SSHFP records.
   * 
   * @example
   * 0
   */
  type?: number;
  /**
   * @remarks
   * The usage identifier for the record. The value ranges from **0** to **255**. This parameter applies to SMIMEA and TLSA records.
   * 
   * @example
   * 0
   */
  usage?: number;
  /**
   * @remarks
   * The record value. This parameter applies to A/AAAA, CNAME, NS, MX, TXT, CAA, SRV, and URI records. The meaning of this parameter varies based on the record type:
   * 
   * - **A/AAAA**: The IP address. To specify multiple addresses, separate them with a comma (,). At least one IPv4 address is required.
   * 
   * - **CNAME**: The target domain name.
   * 
   * - **NS**: The name server for the domain.
   * 
   * - **MX**: The domain name of a valid target mail server.
   * 
   * - **TXT**: A valid text string.
   * 
   * - **CAA**: The domain name of a valid certificate authority.
   * 
   * - **SRV**: The domain name of a valid target host.
   * 
   * - **URI**: A valid URI string.
   * 
   * @example
   * example.com
   */
  value?: string;
  /**
   * @remarks
   * The weight of the record. The value ranges from **0** to **65535**. This parameter applies to SRV and URI records.
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

export class BatchCreateRecordsResponseBodyRecordResultListSuccess extends $dara.Model {
  /**
   * @remarks
   * The acceleration use case for the record. Valid values:
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
   * The DNS information for the record.
   * 
   * @example
   * {"value":"1.1.1.1"}
   */
  data?: BatchCreateRecordsResponseBodyRecordResultListSuccessData;
  /**
   * @remarks
   * The result description.
   * 
   * @example
   * success
   */
  description?: string;
  httpPorts?: string;
  httpsPorts?: string;
  /**
   * @remarks
   * Specifies whether proxy acceleration is enabled for the record. This option is available only for CNAME, A, and AAAA records. Valid values:
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
   * www.example.com
   */
  recordName?: string;
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
   * The type of origin for a CNAME record. This parameter is empty for other record types. Valid values:
   * 
   * - **OSS**: An OSS origin.
   * 
   * - **S3**: An S3 origin.
   * 
   * - **LB**: A load balancer origin.
   * 
   * - **OP**: An origin pool.
   * 
   * - **Domain**: A domain name origin.
   * 
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @remarks
   * The TTL of the record in seconds. A value of 1 sets the TTL to Automatic.
   * 
   * @example
   * 60
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      bizName: 'BizName',
      data: 'Data',
      description: 'Description',
      httpPorts: 'HttpPorts',
      httpsPorts: 'HttpsPorts',
      proxied: 'Proxied',
      recordId: 'RecordId',
      recordName: 'RecordName',
      recordType: 'RecordType',
      sourceType: 'SourceType',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizName: 'string',
      data: BatchCreateRecordsResponseBodyRecordResultListSuccessData,
      description: 'string',
      httpPorts: 'string',
      httpsPorts: 'string',
      proxied: 'boolean',
      recordId: 'number',
      recordName: 'string',
      recordType: 'string',
      sourceType: 'string',
      ttl: 'number',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateRecordsResponseBodyRecordResultList extends $dara.Model {
  /**
   * @remarks
   * A list of records that failed to be created.
   */
  failed?: BatchCreateRecordsResponseBodyRecordResultListFailed[];
  /**
   * @remarks
   * A list of successfully created records.
   */
  success?: BatchCreateRecordsResponseBodyRecordResultListSuccess[];
  /**
   * @remarks
   * The total number of records in the creation operation.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: { 'type': 'array', 'itemType': BatchCreateRecordsResponseBodyRecordResultListFailed },
      success: { 'type': 'array', 'itemType': BatchCreateRecordsResponseBodyRecordResultListSuccess },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.failed)) {
      $dara.Model.validateArray(this.failed);
    }
    if(Array.isArray(this.success)) {
      $dara.Model.validateArray(this.success);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The results of the batch record creation, with details for both successful and failed records.
   */
  recordResultList?: BatchCreateRecordsResponseBodyRecordResultList;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2430E05E-1340-5773-B5E1-B743929F46F2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordResultList: 'RecordResultList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordResultList: BatchCreateRecordsResponseBodyRecordResultList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.recordResultList && typeof (this.recordResultList as any).validate === 'function') {
      (this.recordResultList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

