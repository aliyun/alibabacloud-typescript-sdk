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
  flushLag?: string;
  flushLatency?: string;
  readDBInstanceName?: string;
  replayLag?: string;
  replayLatency?: string;
  sendLatency?: string;
  writeLag?: string;
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
  DBInstanceId?: string;
  readDBInstanceNames?: DescribeReadDBInstanceDelayResponseBodyItemsItemsReadDBInstanceNames;
  readDelayTimes?: DescribeReadDBInstanceDelayResponseBodyItemsItemsReadDelayTimes;
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
  DBInstanceId?: string;
  delayTime?: number;
  items?: DescribeReadDBInstanceDelayResponseBodyItems;
  readDBInstanceId?: string;
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

