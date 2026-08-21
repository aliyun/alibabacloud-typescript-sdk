// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerIntervalDataModule extends $dara.Model {
  timeStamp?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerInterval extends $dara.Model {
  dataModule?: DescribeVodDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeVodDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerIntervalDataModule },
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

export class DescribeVodDomainRealTimeTrafficDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time interval between data entries, which is the time granularity of the data. Unit: seconds.
   * 
   * Based on the time range per query, this parameter returns a fixed value of 60 (1 minute), 300 (5 minutes), or 3600 (1 hour). For more information, see **Time granularity of returned data** in the **operation description**.
   * 
   * @example
   * 60
   */
  dataInterval?: string;
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range for the returned data.
   * 
   * @example
   * 2019-12-10T20:01:00Z
   */
  endTime?: string;
  realTimeTrafficDataPerInterval?: DescribeVodDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerInterval;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A666D44F-19D6-490E-97CF-1A64AB962C57
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range for the returned data.
   * 
   * @example
   * 2019-12-10T20:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      realTimeTrafficDataPerInterval: 'RealTimeTrafficDataPerInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      realTimeTrafficDataPerInterval: DescribeVodDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.realTimeTrafficDataPerInterval && typeof (this.realTimeTrafficDataPerInterval as any).validate === 'function') {
      (this.realTimeTrafficDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

