// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecursionRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the record was created.
   * 
   * @example
   * 2024-03-23T13:09Z
   */
  createTime?: string;
  /**
   * @remarks
   * The timestamp that indicates when the record was created.
   * 
   * @example
   * 1527690629357
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The priority of the Mail Exchange (MX) record.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The record ID.
   * 
   * @example
   * 1903634198947606528
   */
  recordId?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6856BCF6-11D6-4D7E-AC53-FD579933522B
   */
  requestId?: string;
  /**
   * @remarks
   * The host record.
   * 
   * @example
   * test
   */
  rr?: string;
  /**
   * @remarks
   * The Time to Live (TTL).
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
   * 2024-03-29T13:20Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The timestamp that indicates when the record was last updated.
   * 
   * @example
   * 1527690629357
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The value of the DNS record.
   * 
   * @example
   * 1.1.XX.XX
   */
  value?: string;
  /**
   * @remarks
   * The weight.
   * 
   * @example
   * 2
   */
  weight?: number;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * 172635074000011
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      priority: 'Priority',
      recordId: 'RecordId',
      remark: 'Remark',
      requestId: 'RequestId',
      rr: 'Rr',
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
      priority: 'number',
      recordId: 'string',
      remark: 'string',
      requestId: 'string',
      rr: 'string',
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

