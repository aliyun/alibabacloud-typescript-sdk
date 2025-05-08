// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchCreateRecordsResponseBodyRecordResultListFailedData } from "./BatchCreateRecordsResponseBodyRecordResultListFailedData";


export class BatchCreateRecordsResponseBodyRecordResultListFailed extends $dara.Model {
  /**
   * @remarks
   * The business scenario of the record for acceleration. Valid values:
   * 
   * *   **image_video**
   * *   **api**
   * *   **web**
   * 
   * @example
   * web
   */
  bizName?: string;
  /**
   * @remarks
   * The DNS information about the record, which contains various types of record values and their related attributes.
   * 
   * @example
   * {"value":"2.2.2.2"}
   */
  data?: BatchCreateRecordsResponseBodyRecordResultListFailedData;
  /**
   * @remarks
   * The result description.
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the record is proxied. Only CNAME and A/AAAA records can be proxied. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The DNS type of the record, such as **A/AAAA, CNAME, and TXT**.
   * 
   * @example
   * A/AAAA
   */
  recordType?: string;
  /**
   * @remarks
   * The origin type of the CNAME record. This field is left empty for other types of records. The type of the origin server. Valid values:
   * 
   * *   **OSS**: OSS bucket.
   * *   **S3**: S3 bucket.
   * *   **LB**: load balancer.
   * *   **OP**: origin pool.
   * *   **Domain**: domain name.
   * 
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @remarks
   * The TTL of the record. Unit: seconds. If the value is 1, the TTL of the record is determined by the system.
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

