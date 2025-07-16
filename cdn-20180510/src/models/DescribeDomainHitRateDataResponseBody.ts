// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainHitRateDataResponseBodyHitRateIntervalDataModule extends $dara.Model {
  /**
   * @remarks
   * The byte hit ratio of HTTPS requests.
   * 
   * @example
   * 50.0
   */
  httpsValue?: string;
  /**
   * @remarks
   * The timestamp of the data returned.
   * 
   * @example
   * 2019-12-30T08:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The byte hit ratio.
   * 
   * @example
   * 100.0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      httpsValue: 'HttpsValue',
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpsValue: 'string',
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

export class DescribeDomainHitRateDataResponseBodyHitRateInterval extends $dara.Model {
  dataModule?: DescribeDomainHitRateDataResponseBodyHitRateIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainHitRateDataResponseBodyHitRateIntervalDataModule },
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

export class DescribeDomainHitRateDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time interval between the data entries returned. Unit: seconds.
   * 
   * @example
   * 300
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
   * 2019-12-30T08:10:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The byte hit ratio at each time interval. The byte hit ratio is measured in percentage.
   */
  hitRateInterval?: DescribeDomainHitRateDataResponseBodyHitRateInterval;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @remarks
   * The start of the time range during which data was queried.
   * 
   * @example
   * 2019-12-30T08:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      hitRateInterval: 'HitRateInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      hitRateInterval: DescribeDomainHitRateDataResponseBodyHitRateInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.hitRateInterval && typeof (this.hitRateInterval as any).validate === 'function') {
      (this.hitRateInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

