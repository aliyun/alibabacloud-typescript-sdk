// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainRealTimeBpsDataResponseBodyRealTimeBpsDataPerIntervalDataModule extends $dara.Model {
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

export class DescribeLiveDomainRealTimeBpsDataResponseBodyRealTimeBpsDataPerInterval extends $dara.Model {
  dataModule?: DescribeLiveDomainRealTimeBpsDataResponseBodyRealTimeBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeLiveDomainRealTimeBpsDataResponseBodyRealTimeBpsDataPerIntervalDataModule },
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

export class DescribeLiveDomainRealTimeBpsDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time granularity of the queried data.
   * 
   * @example
   * 60
   */
  dataInterval?: string;
  /**
   * @remarks
   * The streaming domain name.
   * 
   * @example
   * example1.aliyundoc.com,example2.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range. The format is *yyyy-MM-dd*T*HH:mm:ss*Z (UTC).
   * 
   * @example
   * 2015-11-30T05:40:00Z
   */
  endTime?: string;
  realTimeBpsDataPerInterval?: DescribeLiveDomainRealTimeBpsDataResponseBodyRealTimeBpsDataPerInterval;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BC858082-736F-4A25-867B-E5B6******
   */
  requestId?: string;
  /**
   * @remarks
   * The start of the time range. The format is *yyyy-MM-dd*T*HH:mm:ss*Z (UTC).
   * 
   * @example
   * 2015-11-30T05:33:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      realTimeBpsDataPerInterval: 'RealTimeBpsDataPerInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      realTimeBpsDataPerInterval: DescribeLiveDomainRealTimeBpsDataResponseBodyRealTimeBpsDataPerInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.realTimeBpsDataPerInterval && typeof (this.realTimeBpsDataPerInterval as any).validate === 'function') {
      (this.realTimeBpsDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

