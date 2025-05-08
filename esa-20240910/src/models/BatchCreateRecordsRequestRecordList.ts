// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchCreateRecordsRequestRecordListAuthConf } from "./BatchCreateRecordsRequestRecordListAuthConf";
import { BatchCreateRecordsRequestRecordListData } from "./BatchCreateRecordsRequestRecordListData";


export class BatchCreateRecordsRequestRecordList extends $dara.Model {
  authConf?: BatchCreateRecordsRequestRecordListAuthConf;
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
   * The DNS information of the record. Enter fields based on the record type.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *     "value":"2.2.2.2"
   * }
   */
  data?: BatchCreateRecordsRequestRecordListData;
  /**
   * @remarks
   * Specifies whether to proxy the record. Only CNAME and A/AAAA records can be proxied. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The origin type for the CNAME record. This parameter is required when you add a CNAME record. Valid values:
   * 
   * *   **OSS**: OSS bucket.
   * *   **S3**: S3 bucket.
   * *   **LB**: load balancer.
   * *   **OP**: origin pool.
   * *   **Domain**: domain name.
   * 
   * If you do not pass this parameter or if you leave its value empty, Domain is used by default.
   * 
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @remarks
   * The TTL of the record. Unit: seconds. If the value is 1, the TTL of the record is determined by the system.
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

