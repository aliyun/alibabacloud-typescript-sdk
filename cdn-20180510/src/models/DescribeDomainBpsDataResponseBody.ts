// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainBpsDataResponseBodyBpsDataPerIntervalDataModule extends $dara.Model {
  /**
   * @remarks
   * The bandwidth value in the Chinese mainland. When the bandwidth data is queried by ISP, this parameter is empty.
   * 
   * @example
   * 11286111
   */
  domesticValue?: string;
  /**
   * @remarks
   * The bandwidth data for HTTPS requests in the Chinese mainland. When the bandwidth data is queried by ISP, this parameter is empty.
   * 
   * @example
   * 11286111
   */
  httpsDomesticValue?: string;
  /**
   * @remarks
   * The bandwidth data for HTTPS requests in regions outside the Chinese mainland. When the bandwidth data is queried by ISP, this parameter is empty.
   * 
   * @example
   * 2000
   */
  httpsOverseasValue?: string;
  /**
   * @remarks
   * The bandwidth value for HTTPS requests. Unit: bit/s.
   * 
   * @example
   * 11288111
   */
  httpsValue?: string;
  /**
   * @remarks
   * The bandwidth data in regions outside the Chinese mainland. When the bandwidth data is queried by ISP, this parameter is empty.
   * 
   * @example
   * 2000
   */
  overseasValue?: string;
  /**
   * @remarks
   * The timestamp of the data returned.
   * 
   * @example
   * 2015-12-10T20:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The bandwidth. Unit: bit/s.
   * 
   * @example
   * 11288111
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      domesticValue: 'DomesticValue',
      httpsDomesticValue: 'HttpsDomesticValue',
      httpsOverseasValue: 'HttpsOverseasValue',
      httpsValue: 'HttpsValue',
      overseasValue: 'OverseasValue',
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domesticValue: 'string',
      httpsDomesticValue: 'string',
      httpsOverseasValue: 'string',
      httpsValue: 'string',
      overseasValue: 'string',
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

export class DescribeDomainBpsDataResponseBodyBpsDataPerInterval extends $dara.Model {
  dataModule?: DescribeDomainBpsDataResponseBodyBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainBpsDataResponseBodyBpsDataPerIntervalDataModule },
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

export class DescribeDomainBpsDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of bandwidth data entries returned at each interval.
   */
  bpsDataPerInterval?: DescribeDomainBpsDataResponseBodyBpsDataPerInterval;
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
   * 2015-12-10T20:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the ISP.
   * 
   * @example
   * unicom
   */
  ispNameEn?: string;
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * beijing
   */
  locationNameEn?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3C6CCEC4-6B88-4D4A-93E4-D47B3D92CF8F
   */
  requestId?: string;
  /**
   * @remarks
   * The start of the time range during which data was queried.
   * 
   * @example
   * 2020-05-14T09:50:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bpsDataPerInterval: 'BpsDataPerInterval',
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsDataPerInterval: DescribeDomainBpsDataResponseBodyBpsDataPerInterval,
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.bpsDataPerInterval && typeof (this.bpsDataPerInterval as any).validate === 'function') {
      (this.bpsDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

