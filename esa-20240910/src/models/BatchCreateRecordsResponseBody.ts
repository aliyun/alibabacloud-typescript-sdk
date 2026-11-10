// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateRecordsResponseBodyRecordResultListFailedData extends $dara.Model {
  /**
   * @remarks
   * The encryption algorithm used by the record. Valid values: **0** to **255**. This parameter applies to CERT and SSHFP records.
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
   * The flag of the record. Indicates the priority and processing method. This parameter applies to CAA records.
   * 
   * @example
   * 128
   */
  flag?: number;
  /**
   * @remarks
   * The public key identifier of the record. Valid values: **0** to **65535**. This parameter applies to CERT records.
   * 
   * @example
   * 0
   */
  keyTag?: number;
  /**
   * @remarks
   * The algorithm policy used by the record to match or verify the certificate. Valid values: **0** to **255**. This parameter applies to SMIMEA and TLSA records.
   * 
   * @example
   * 0
   */
  matchingType?: number;
  /**
   * @remarks
   * The port number of the record. This parameter is associated with SRV records and applies only to SRV records.
   * 
   * @example
   * 0
   */
  port?: number;
  /**
   * @remarks
   * The priority of the record. Valid values: **0** to **65535**. A smaller value indicates a higher priority. This parameter applies to MX, SRV, and URI records.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The type of the certificate or public key used by the record. Valid values: **0** to **255**. This parameter applies to SMIMEA and TLSA records.
   * 
   * @example
   * 0
   */
  selector?: number;
  /**
   * @remarks
   * The tag of the CAA record. Indicates the specific type and purpose, such as issue, issuewild, or iodef.
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
   * The usage identifier of the record. Valid values: **0** to **255**. This parameter applies to SMIMEA and TLSA records.
   * 
   * @example
   * 0
   */
  usage?: number;
  /**
   * @remarks
   * The record value or partial content. This parameter is included in A/AAAA, CNAME, NS, MX, TXT, CAA, SRV, and URI records. It indicates different meanings in different record types:
   * - **A/AAAA**: The target IP address. Separate multiple IP addresses with half-width commas (,). At least one IPv4 address is required.
   * - **CNAME**: The target domain name.
   * - **NS**: The name server of the specified domain name.
   * - **MX**: The valid domain name of the target mail server.
   * - **TXT**: The valid text character string.
   * - **CAA**: The valid domain name of the certificate issuing authority.
   * - **SRV**: The valid domain name of the target host.
   * - **URI**: The valid URI string.
   * 
   * @example
   * example.com
   */
  value?: string;
  /**
   * @remarks
   * The weight of the record. This parameter applies to SRV and URI records.
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
   * The business scenario for record acceleration. Valid values:
   * - **image_video**: images and videos.
   * - **api**: API operations.
   * - **web**: web pages.
   * 
   * @example
   * web
   */
  bizName?: string;
  /**
   * @remarks
   * The DNS information of the record, including the values and related attributes of various record types.
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
   * The record name is invalid.
   */
  description?: string;
  /**
   * @remarks
   * The HTTP port. By default, port 80 is supported.
   * 
   * @example
   * 80,8080
   */
  httpPorts?: string;
  /**
   * @remarks
   * The HTTPS port. Port 443 is supported by default.
   * 
   * @example
   * 443,8443
   */
  httpsPorts?: string;
  /**
   * @remarks
   * Specifies whether proxy acceleration is enabled for the record. Only CNAME and A/AAAA records support proxy acceleration. Valid values:
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  proxied?: boolean;
  /**
   * @remarks
   * The ID of the created record.
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
   * The DNS record type, such as **A/AAAA**, **CNAME**, or **TXT**.
   * 
   * @example
   * A/AAAA
   */
  recordType?: string;
  /**
   * @remarks
   * The origin server type for CNAME records. This field is empty for other record types. Valid values:
   * - **OSS**: OSS origin server.
   * - **S3**: S3 origin server.
   * - **LB**: Load balancing origin server.
   * - **OP**: Source IPAM pool origin server.
   * - **Domain**: Common domain name origin server.
   * 
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @remarks
   * The time-to-live (TTL) of the record, in seconds. A value of 1 indicates that the TTL is automatic.
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
   * The encryption algorithm used by the record. Valid values: **0** to **255**. This parameter applies to CERT and SSHFP records.
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
   * The flag of the record. Indicates the priority and processing method. This parameter applies to CAA records.
   * 
   * @example
   * 128
   */
  flag?: number;
  /**
   * @remarks
   * The public key identifier of the record. Valid values: **0** to **65535**. This parameter applies to CERT records.
   * 
   * @example
   * 0
   */
  keyTag?: number;
  /**
   * @remarks
   * The algorithm policy used by the record to match or verify the certificate. Valid values: **0** to **255**. This parameter applies to SMIMEA and TLSA records.
   * 
   * @example
   * 0
   */
  matchingType?: number;
  /**
   * @remarks
   * The port of the record. Valid values: **0** to **65535**. This parameter applies only to SRV records.
   * 
   * @example
   * 0
   */
  port?: number;
  /**
   * @remarks
   * The priority of the record. Valid values: **0** to **65535**. A smaller value indicates a higher priority. This parameter applies to MX, SRV, and URI records.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The type of the certificate or public key used by the record. Valid values: **0** to **255**. This parameter applies to SMIMEA and TLSA records.
   * 
   * @example
   * 0
   */
  selector?: number;
  /**
   * @remarks
   * The tag of the CAA record. Indicates the specific type and purpose, such as issue, issuewild, or iodef.
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
   * The usage identifier of the record. Valid values: **0** to **255**. This parameter applies to SMIMEA and TLSA records.
   * 
   * @example
   * 0
   */
  usage?: number;
  /**
   * @remarks
   * The record value or partial content. This parameter is included in A/AAAA, CNAME, NS, MX, TXT, CAA, SRV, and URI records. It indicates different meanings in different record types:
   * - **A/AAAA**: The IP address. Separate multiple IP addresses with commas (,). At least one IPv4 address is required.
   * - **CNAME**: The target domain name.
   * - **NS**: The name server of the specified domain name.
   * - **MX**: The valid domain name of the target mail server.
   * - **TXT**: The valid text character string.
   * - **CAA**: The valid domain name of the certificate issuing authority.
   * - **SRV**: The valid domain name of the target host.
   * - **URI**: The valid URI string.
   * 
   * @example
   * example.com
   */
  value?: string;
  /**
   * @remarks
   * The weight of the record. Valid values: **0** to **65535**. This parameter applies to SRV and URI records.
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
   * The business scenario for record acceleration. Valid values:
   * - **image_video**: images and videos.
   * - **api**: API operations.
   * - **web**: web pages.
   * 
   * @example
   * web
   */
  bizName?: string;
  /**
   * @remarks
   * The DNS information of the record.
   * 
   * @example
   * {"value":"1.1.1.1"}
   */
  data?: BatchCreateRecordsResponseBodyRecordResultListSuccessData;
  /**
   * @remarks
   * The description of the creation result.
   * 
   * @example
   * success
   */
  description?: string;
  /**
   * @remarks
   * The HTTP port. By default, port 80 is supported.
   * 
   * @example
   * 80,8080
   */
  httpPorts?: string;
  /**
   * @remarks
   * The HTTPS port. Port 443 is supported by default.
   * 
   * @example
   * 443,8443
   */
  httpsPorts?: string;
  /**
   * @remarks
   * Specifies whether to enable proxy acceleration for the record. Only CNAME and A/AAAA records can enable proxy acceleration. Valid values:
   * - **true**: enables proxy acceleration.
   * - **false**: disables proxy acceleration.
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
   * The DNS record type, such as **A/AAAA**, **CNAME**, or **TXT**.
   * 
   * @example
   * A/AAAA
   */
  recordType?: string;
  /**
   * @remarks
   * The origin server type for CNAME records. This field is empty for other record types. Valid values:
   * - **OSS**: OSS origin server.
   * - **S3**: S3 origin server.
   * - **LB**: Load balancing origin server.
   * - **OP**: Source IPAM pool origin server.
   * - **Domain**: Common domain name origin server.
   * 
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @remarks
   * The time-to-live (TTL) of the record, in seconds. A value of 1 indicates that the TTL is automatic.
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
   * The list of failed records.
   */
  failed?: BatchCreateRecordsResponseBodyRecordResultListFailed[];
  /**
   * @remarks
   * The list of successful records.
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
   * The list of record creation results, including the details of successful and failed records.
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

