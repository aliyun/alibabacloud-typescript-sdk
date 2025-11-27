// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeReadDBInstanceDelayResponseBodyItemsItemsReadDBInstanceNames extends $dara.Model {
  readDBInstanceName?: string[];
  static names(): { [key: string]: string } {
    return {
      readDBInstanceName: 'ReadDBInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readDBInstanceName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.readDBInstanceName)) {
      $dara.Model.validateArray(this.readDBInstanceName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReadDBInstanceDelayResponseBodyItemsItemsReadDelayTimes extends $dara.Model {
  readDelayTime?: string[];
  static names(): { [key: string]: string } {
    return {
      readDelayTime: 'ReadDelayTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readDelayTime: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.readDelayTime)) {
      $dara.Model.validateArray(this.readDelayTime);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReadDBInstanceDelayResponseBodyItemsItemsReadonlyInstanceDelayReadonlyInstanceDelay extends $dara.Model {
  /**
   * @remarks
   * The duration that is allowed for the latency in the persistence of WAL data. Unit: seconds.
   * 
   * @example
   * 0
   */
  flushLag?: string;
  /**
   * @remarks
   * The data size that is allowed for the latency in the persistence of WAL data. Unit: MB.
   * 
   * @example
   * 0
   */
  flushLatency?: string;
  /**
   * @remarks
   * The read-only instance ID.
   * 
   * @example
   * rr-bp*****
   */
  readDBInstanceName?: string;
  /**
   * @remarks
   * The duration that is allowed for the latency in the playback of WAL data. Unit: seconds.
   * 
   * @example
   * 0
   */
  replayLag?: string;
  /**
   * @remarks
   * The data size that is allowed for the latency in the playback of WAL data. Unit: MB.
   * 
   * @example
   * 0
   */
  replayLatency?: string;
  /**
   * @remarks
   * The data size that is allowed for the latency in the sending of WAL data. Unit: MB.
   * 
   * @example
   * 0
   */
  sendLatency?: string;
  /**
   * @remarks
   * The duration that is allowed for the latency in the write-back of WAL data. Unit: seconds.
   * 
   * @example
   * 0
   */
  writeLag?: string;
  /**
   * @remarks
   * The data size that is allowed for the latency in the write-back of WAL data. Unit: MB.
   * 
   * @example
   * 0
   */
  writeLatency?: string;
  static names(): { [key: string]: string } {
    return {
      flushLag: 'FlushLag',
      flushLatency: 'FlushLatency',
      readDBInstanceName: 'ReadDBInstanceName',
      replayLag: 'ReplayLag',
      replayLatency: 'ReplayLatency',
      sendLatency: 'SendLatency',
      writeLag: 'WriteLag',
      writeLatency: 'WriteLatency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flushLag: 'string',
      flushLatency: 'string',
      readDBInstanceName: 'string',
      replayLag: 'string',
      replayLatency: 'string',
      sendLatency: 'string',
      writeLag: 'string',
      writeLatency: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReadDBInstanceDelayResponseBodyItemsItemsReadonlyInstanceDelay extends $dara.Model {
  readonlyInstanceDelay?: DescribeReadDBInstanceDelayResponseBodyItemsItemsReadonlyInstanceDelayReadonlyInstanceDelay[];
  static names(): { [key: string]: string } {
    return {
      readonlyInstanceDelay: 'ReadonlyInstanceDelay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readonlyInstanceDelay: { 'type': 'array', 'itemType': DescribeReadDBInstanceDelayResponseBodyItemsItemsReadonlyInstanceDelayReadonlyInstanceDelay },
    };
  }

  validate() {
    if(Array.isArray(this.readonlyInstanceDelay)) {
      $dara.Model.validateArray(this.readonlyInstanceDelay);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeReadDBInstanceDelayResponseBodyItems extends $dara.Model {
  items?: DescribeReadDBInstanceDelayResponseBodyItemsItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeReadDBInstanceDelayResponseBodyItemsItems },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

