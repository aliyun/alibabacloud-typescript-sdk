// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainReqHitRateDataResponseBodyReqHitRateIntervalDataModule extends $dara.Model {
  /**
   * @remarks
   * The hit ratio of HTTPS requests.
   * 
   * @example
   * 50.0
   */
  httpsValue?: string;
  /**
   * @remarks
   * The timestamp of the returned data.
   * 
   * @example
   * 2017-12-22T08:00:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The request hit ratio.
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

export class DescribeDomainReqHitRateDataResponseBodyReqHitRateInterval extends $dara.Model {
  dataModule?: DescribeDomainReqHitRateDataResponseBodyReqHitRateIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainReqHitRateDataResponseBodyReqHitRateIntervalDataModule },
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

export class DescribeDomainReqHitRateDataResponseBody extends $dara.Model {
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
   * 2017-12-22T08:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The request hit ratio data at each time interval. The hit ratio is measured in percentage.
   */
  reqHitRateInterval?: DescribeDomainReqHitRateDataResponseBodyReqHitRateInterval;
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
   * 2017-12-21T08:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      reqHitRateInterval: 'ReqHitRateInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      reqHitRateInterval: DescribeDomainReqHitRateDataResponseBodyReqHitRateInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.reqHitRateInterval && typeof (this.reqHitRateInterval as any).validate === 'function') {
      (this.reqHitRateInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

