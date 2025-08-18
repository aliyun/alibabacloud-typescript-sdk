// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDoSBpsListResponseBodyDataModule extends $dara.Model {
  /**
   * @remarks
   * Attack bandwidth, in bps.
   * 
   * @example
   * 9000000000
   */
  attackBps?: number;
  /**
   * @remarks
   * Attack PPS.
   * 
   * @example
   * 9000000
   */
  attackPps?: number;
  /**
   * @remarks
   * Normal business bandwidth, in bps.
   * 
   * @example
   * 1000000000
   */
  normalBps?: number;
  /**
   * @remarks
   * Normal business PPS.
   * 
   * @example
   * 1000000
   */
  normalPps?: number;
  /**
   * @remarks
   * The timestamp of this data, in ISO8601 format, using UTC+0, formatted as: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2023-05-14T17:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * Total bandwidth, in bps.
   * 
   * @example
   * 10000000000
   */
  totalBps?: number;
  /**
   * @remarks
   * Total PPS.
   * 
   * @example
   * 100000000
   */
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
  /**
   * @remarks
   * The interval between each piece of data, in seconds.
   * 
   * Generated based on the interval between StartTime and EndTime: less than 1 hour, 60s; 1 hour or more but less than 1 day, 300s; 1 day or more but less than a week, 1800s; 1 week or more, 3600s.
   * 
   * @example
   * 300
   */
  dataInterval?: number;
  /**
   * @remarks
   * A list of network bandwidth data for each time interval.
   */
  dataModule?: DescribeDDoSBpsListResponseBodyDataModule[];
  /**
   * @remarks
   * The end time for fetching data. In ISO8601 format, using UTC+0, formatted as: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * The end time must be later than the start time, and the span between start and end times should not exceed 31 days.
   * 
   * @example
   * 2023-05-18T06:19:42Z
   */
  endTime?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 156A6B-677B1A-4297B7-9187B7-2B44792
   */
  requestId?: string;
  /**
   * @remarks
   * The start time for fetching data. In ISO8601 format, using UTC, formatted as: YYYY-MM-DDThh:mm:ssZ.
   * 
   * @example
   * 2023-05-14T17:00:00Z
   */
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

