// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZoneRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the DNS record was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-01-23T03:15Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the DNS record was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1516775741000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The resolution line.
   * 
   * @example
   * default
   */
  line?: string;
  /**
   * @remarks
   * The priority of the mail exchanger (MX) record.
   * 
   * @example
   * 5
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the DNS record.
   * 
   * @example
   * 5808
   */
  recordId?: number;
  /**
   * @remarks
   * The description of the DNS record.
   * 
   * @example
   * test record
   */
  remark?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0B7AD377-7E86-44A8-B9A8-53E8666E72FE
   */
  requestId?: string;
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * www
   */
  rr?: string;
  /**
   * @remarks
   * The state of the DNS record. Valid values:
   * 
   * *   **ENABLE**: The DNS record is enabled.
   * *   **DISABLE**: The DNS record is disabled.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  /**
   * @remarks
   * The time to live (TTL) of the DNS record.
   * 
   * @example
   * 60
   */
  ttl?: number;
  /**
   * @remarks
   * The type of the DNS record.
   * 
   * @example
   * A
   */
  type?: string;
  /**
   * @remarks
   * The time when the DNS record was updated. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-01-24T06:35Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The time when the DNS record was updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1516775741000
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The record value.
   * 
   * @example
   * 127.0.0.1
   */
  value?: string;
  /**
   * @remarks
   * The weight value of the DNS record.
   * 
   * @example
   * 1
   */
  weight?: number;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * CAgICA1OA_58
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      line: 'Line',
      priority: 'Priority',
      recordId: 'RecordId',
      remark: 'Remark',
      requestId: 'RequestId',
      rr: 'Rr',
      status: 'Status',
      ttl: 'Ttl',
      type: 'Type',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      value: 'Value',
      weight: 'Weight',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      line: 'string',
      priority: 'number',
      recordId: 'number',
      remark: 'string',
      requestId: 'string',
      rr: 'string',
      status: 'string',
      ttl: 'number',
      type: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
      value: 'string',
      weight: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

