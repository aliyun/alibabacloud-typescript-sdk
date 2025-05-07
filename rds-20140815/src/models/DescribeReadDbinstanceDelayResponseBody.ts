// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeReadDBInstanceDelayResponseBodyItems } from "./DescribeReadDbinstanceDelayResponseBodyItems";


export class DescribeReadDBInstanceDelayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The primary instance ID.
   * 
   * @example
   * rm-bp*****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The latency of data replication. Unit: seconds.
   * 
   * @example
   * 0
   */
  delayTime?: number;
  /**
   * @remarks
   * The latency information.
   */
  items?: DescribeReadDBInstanceDelayResponseBodyItems;
  /**
   * @remarks
   * The read-only instance ID.
   * 
   * @example
   * rr-bp*****
   */
  readDBInstanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F1BDDEA8-452D-450B-AB10-CD5C5BAFC5DF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      delayTime: 'DelayTime',
      items: 'Items',
      readDBInstanceId: 'ReadDBInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      delayTime: 'number',
      items: DescribeReadDBInstanceDelayResponseBodyItems,
      readDBInstanceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

