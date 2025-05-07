// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeReadDBInstanceDelayResponseBodyItemsItemsReadDBInstanceNames } from "./DescribeReadDbinstanceDelayResponseBodyItemsItemsReadDbinstanceNames";
import { DescribeReadDBInstanceDelayResponseBodyItemsItemsReadDelayTimes } from "./DescribeReadDbinstanceDelayResponseBodyItemsItemsReadDelayTimes";
import { DescribeReadDBInstanceDelayResponseBodyItemsItemsReadonlyInstanceDelay } from "./DescribeReadDbinstanceDelayResponseBodyItemsItemsReadonlyInstanceDelay";


export class DescribeReadDBInstanceDelayResponseBodyItemsItems extends $dara.Model {
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
   * An array that consists of information about the read-only instance.
   */
  readDBInstanceNames?: DescribeReadDBInstanceDelayResponseBodyItemsItemsReadDBInstanceNames;
  /**
   * @remarks
   * The latency of data replication.
   */
  readDelayTimes?: DescribeReadDBInstanceDelayResponseBodyItemsItemsReadDelayTimes;
  /**
   * @remarks
   * The information about the write-ahead log (WAL) latency.
   * 
   * >  This parameter is returned only when the primary instance runs PostgreSQL.
   */
  readonlyInstanceDelay?: DescribeReadDBInstanceDelayResponseBodyItemsItemsReadonlyInstanceDelay;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      readDBInstanceNames: 'ReadDBInstanceNames',
      readDelayTimes: 'ReadDelayTimes',
      readonlyInstanceDelay: 'ReadonlyInstanceDelay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      readDBInstanceNames: DescribeReadDBInstanceDelayResponseBodyItemsItemsReadDBInstanceNames,
      readDelayTimes: DescribeReadDBInstanceDelayResponseBodyItemsItemsReadDelayTimes,
      readonlyInstanceDelay: DescribeReadDBInstanceDelayResponseBodyItemsItemsReadonlyInstanceDelay,
    };
  }

  validate() {
    if(this.readDBInstanceNames && typeof (this.readDBInstanceNames as any).validate === 'function') {
      (this.readDBInstanceNames as any).validate();
    }
    if(this.readDelayTimes && typeof (this.readDelayTimes as any).validate === 'function') {
      (this.readDelayTimes as any).validate();
    }
    if(this.readonlyInstanceDelay && typeof (this.readonlyInstanceDelay as any).validate === 'function') {
      (this.readonlyInstanceDelay as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

