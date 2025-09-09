// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecursionRecordResponseBody extends $dara.Model {
  /**
   * @example
   * 2024-03-23T13:09Z
   */
  createTime?: string;
  /**
   * @example
   * 1527690629357
   */
  createTimestamp?: number;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * record ID
   * 
   * @example
   * 1903634198947606528
   */
  recordId?: string;
  /**
   * @example
   * test
   */
  remark?: string;
  /**
   * @example
   * 6856BCF6-11D6-4D7E-AC53-FD579933522B
   */
  requestId?: string;
  /**
   * @example
   * test
   */
  rr?: string;
  /**
   * @remarks
   * ttl
   * 
   * @example
   * 60
   */
  ttl?: number;
  /**
   * @example
   * A
   */
  type?: string;
  /**
   * @example
   * 2024-03-29T13:20Z
   */
  updateTime?: string;
  /**
   * @example
   * 1527690629357
   */
  updateTimestamp?: number;
  /**
   * @example
   * 1.1.XX.XX
   */
  value?: string;
  /**
   * @example
   * 2
   */
  weight?: number;
  /**
   * @remarks
   * zone ID
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

