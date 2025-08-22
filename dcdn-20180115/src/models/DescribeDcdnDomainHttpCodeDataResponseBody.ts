// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModuleHttpCodeDataPerIntervalHttpCodeDataModule extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 404
   */
  code?: number;
  /**
   * @remarks
   * The count of each HTTP status code.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The proportion of the HTTP status code.
   * 
   * @example
   * 33.333333
   */
  proportion?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      proportion: 'Proportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      count: 'number',
      proportion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModuleHttpCodeDataPerInterval extends $dara.Model {
  httpCodeDataModule?: DescribeDcdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModuleHttpCodeDataPerIntervalHttpCodeDataModule[];
  static names(): { [key: string]: string } {
    return {
      httpCodeDataModule: 'HttpCodeDataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCodeDataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModuleHttpCodeDataPerIntervalHttpCodeDataModule },
    };
  }

  validate() {
    if(Array.isArray(this.httpCodeDataModule)) {
      $dara.Model.validateArray(this.httpCodeDataModule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModule extends $dara.Model {
  /**
   * @remarks
   * The proportions of the HTTP status codes.
   */
  httpCodeDataPerInterval?: DescribeDcdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModuleHttpCodeDataPerInterval;
  /**
   * @remarks
   * The timestamp of the data returned.
   * 
   * @example
   * 2019-03-01T13:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      httpCodeDataPerInterval: 'HttpCodeDataPerInterval',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCodeDataPerInterval: DescribeDcdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModuleHttpCodeDataPerInterval,
      timeStamp: 'string',
    };
  }

  validate() {
    if(this.httpCodeDataPerInterval && typeof (this.httpCodeDataPerInterval as any).validate === 'function') {
      (this.httpCodeDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainHttpCodeDataResponseBodyDataPerInterval extends $dara.Model {
  dataModule?: DescribeDcdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModule },
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

export class DescribeDcdnDomainHttpCodeDataResponseBody extends $dara.Model {
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
   * The proportions of HTTP status codes at each time interval.
   */
  dataPerInterval?: DescribeDcdnDomainHttpCodeDataResponseBodyDataPerInterval;
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
   * 2018-03-01T13:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 91FC2D9D-B042-4634-8A5C-7B8E7482C22D
   */
  requestId?: string;
  /**
   * @remarks
   * The start of the time range during which data was queried.
   * 
   * @example
   * 2019-03-01T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      dataPerInterval: 'DataPerInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      dataPerInterval: DescribeDcdnDomainHttpCodeDataResponseBodyDataPerInterval,
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.dataPerInterval && typeof (this.dataPerInterval as any).validate === 'function') {
      (this.dataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

