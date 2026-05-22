// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDoSBpsListResponseBodyDataModule extends $dara.Model {
  attackBps?: number;
  attackPps?: number;
  normalBps?: number;
  normalPps?: number;
  timeStamp?: string;
  totalBps?: number;
  totalPps?: number;
  static names(): { [key: string]: string } {
    return {
      attackBps: 'AttackBps',
      attackPps: 'AttackPps',
      normalBps: 'NormalBps',
      normalPps: 'NormalPps',
      timeStamp: 'TimeStamp',
      totalBps: 'TotalBps',
      totalPps: 'TotalPps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackBps: 'number',
      attackPps: 'number',
      normalBps: 'number',
      normalPps: 'number',
      timeStamp: 'string',
      totalBps: 'number',
      totalPps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSBpsListResponseBody extends $dara.Model {
  dataInterval?: number;
  dataModule?: DescribeDDoSBpsListResponseBodyDataModule[];
  endTime?: string;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      dataModule: 'DataModule',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'number',
      dataModule: { 'type': 'array', 'itemType': DescribeDDoSBpsListResponseBodyDataModule },
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataModule)) {
      $dara.Model.validateArray(this.dataModule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

