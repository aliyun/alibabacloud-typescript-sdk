// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainPvDataResponseBodyPvDataIntervalUsageData extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the returned data.
   * 
   * @example
   * 2015-11-28T03:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The number of PVs.
   * 
   * @example
   * 9292
   */
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

export class DescribeDomainPvDataResponseBodyPvDataInterval extends $dara.Model {
  usageData?: DescribeDomainPvDataResponseBodyPvDataIntervalUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeDomainPvDataResponseBodyPvDataIntervalUsageData },
    };
  }

  validate() {
    if(Array.isArray(this.usageData)) {
      $dara.Model.validateArray(this.usageData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainPvDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time interval between the data entries returned. Unit: seconds.
   * 
   * @example
   * 3600
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
   * The end of the time range during which data was queried.
   * 
   * @example
   * 2015-11-28T04:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The number of PVs at each interval.
   */
  pvDataInterval?: DescribeDomainPvDataResponseBodyPvDataInterval;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BCD7D917-76F1-442F-BB75-C810DE34C761
   */
  requestId?: string;
  /**
   * @remarks
   * The start of the time range during which data was queried.
   * 
   * @example
   * 2015-11-28T03:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      pvDataInterval: 'PvDataInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      pvDataInterval: DescribeDomainPvDataResponseBodyPvDataInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.pvDataInterval && typeof (this.pvDataInterval as any).validate === 'function') {
      (this.pvDataInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

