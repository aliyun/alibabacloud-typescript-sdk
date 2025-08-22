// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyHttpCodeDataPerIntervalDataModuleWebsocketHttpCodeHttpCodeDataModule extends $dara.Model {
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
   * The total number of entries returned.
   * 
   * @example
   * 16
   */
  count?: number;
  /**
   * @remarks
   * The proportion of the HTTP status code.
   * 
   * @example
   * 100
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

export class DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyHttpCodeDataPerIntervalDataModuleWebsocketHttpCode extends $dara.Model {
  httpCodeDataModule?: DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyHttpCodeDataPerIntervalDataModuleWebsocketHttpCodeHttpCodeDataModule[];
  static names(): { [key: string]: string } {
    return {
      httpCodeDataModule: 'HttpCodeDataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCodeDataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyHttpCodeDataPerIntervalDataModuleWebsocketHttpCodeHttpCodeDataModule },
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

export class DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyHttpCodeDataPerIntervalDataModule extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the returned data.
   * 
   * @example
   * 2018-03-01T13:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The proportions of the HTTP status codes.
   */
  websocketHttpCode?: DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyHttpCodeDataPerIntervalDataModuleWebsocketHttpCode;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      websocketHttpCode: 'WebsocketHttpCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      websocketHttpCode: DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyHttpCodeDataPerIntervalDataModuleWebsocketHttpCode,
    };
  }

  validate() {
    if(this.websocketHttpCode && typeof (this.websocketHttpCode as any).validate === 'function') {
      (this.websocketHttpCode as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyHttpCodeDataPerInterval extends $dara.Model {
  dataModule?: DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyHttpCodeDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyHttpCodeDataPerIntervalDataModule },
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

export class DescribeDcdnDomainWebsocketHttpCodeDataResponseBody extends $dara.Model {
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
   * 2018-03-01T13:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The HTTP status code.
   */
  httpCodeDataPerInterval?: DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyHttpCodeDataPerInterval;
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
   * 2018-03-01T05:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      httpCodeDataPerInterval: 'HttpCodeDataPerInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      httpCodeDataPerInterval: DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyHttpCodeDataPerInterval,
      requestId: 'string',
      startTime: 'string',
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

