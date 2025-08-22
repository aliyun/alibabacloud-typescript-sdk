// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnDomainHitRateDataResponseBodyHitRatePerIntervalDataModule extends $dara.Model {
  /**
   * @remarks
   * The byte hit ratio.
   * 
   * @example
   * 0
   */
  byteHitRate?: number;
  /**
   * @remarks
   * The request hit ratio.
   * 
   * @example
   * 0
   */
  reqHitRate?: number;
  /**
   * @remarks
   * The timestamp of the returned data.
   * 
   * @example
   * 2018-03-02T13:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      byteHitRate: 'ByteHitRate',
      reqHitRate: 'ReqHitRate',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byteHitRate: 'number',
      reqHitRate: 'number',
      timeStamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainHitRateDataResponseBodyHitRatePerInterval extends $dara.Model {
  dataModule?: DescribeDcdnDomainHitRateDataResponseBodyHitRatePerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainHitRateDataResponseBodyHitRatePerIntervalDataModule },
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

export class DescribeDcdnDomainHitRateDataResponseBody extends $dara.Model {
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
   * 2018-03-02T15:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The byte hit ratio at each time interval. The byte hit ratio is measured in percentage.
   */
  hitRatePerInterval?: DescribeDcdnDomainHitRateDataResponseBodyHitRatePerInterval;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4D07ABFE-4737-4834-B1B9-A661308C47B4
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range during which data was queried.
   * 
   * @example
   * 2018-03-02T12:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      hitRatePerInterval: 'HitRatePerInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      hitRatePerInterval: DescribeDcdnDomainHitRateDataResponseBodyHitRatePerInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.hitRatePerInterval && typeof (this.hitRatePerInterval as any).validate === 'function') {
      (this.hitRatePerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

