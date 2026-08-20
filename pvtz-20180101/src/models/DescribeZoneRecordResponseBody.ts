// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZoneRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the record was created.
   * 
   * @example
   * 2018-01-23T03:15Z
   */
  createTime?: string;
  /**
   * @remarks
   * The timestamp that indicates when the record was created.
   * 
   * @example
   * 1516775741000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The DNS resolution line.
   * 
   * @example
   * default
   */
  line?: string;
  /**
   * @remarks
   * The priority of the mail exchange (MX) record.
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
   * The remarks.
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
   * The host record.
   * 
   * @example
   * www
   */
  rr?: string;
  /**
   * @remarks
   * The status of the DNS record. Valid values:
   * 
   * - **ENABLE**: The DNS record is enabled.
   * 
   * - **DISABLE**: The DNS record is paused.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  /**
   * @remarks
   * The time to live (TTL).
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
   * The time when the record was last updated.
   * 
   * @example
   * 2018-01-24T06:35Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The timestamp that indicates when the record was last updated.
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
   * The weight of the DNS record.
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

