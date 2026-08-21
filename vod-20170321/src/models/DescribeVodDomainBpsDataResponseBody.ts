// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainBpsDataResponseBodyBpsDataPerIntervalDataModule extends $dara.Model {
  domesticValue?: string;
  httpsDomesticValue?: string;
  httpsOverseasValue?: string;
  httpsValue?: string;
  overseasValue?: string;
  timeStamp?: string;
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

export class DescribeVodDomainBpsDataResponseBodyBpsDataPerInterval extends $dara.Model {
  dataModule?: DescribeVodDomainBpsDataResponseBodyBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeVodDomainBpsDataResponseBodyBpsDataPerIntervalDataModule },
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

export class DescribeVodDomainBpsDataResponseBody extends $dara.Model {
  bpsDataPerInterval?: DescribeVodDomainBpsDataResponseBodyBpsDataPerInterval;
  /**
   * @remarks
   * The time interval between consecutive data entries, which is the time granularity of the data. Unit: seconds.
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
   * The end of the time range for the returned data.
   * 
   * @example
   * 2015-12-10T14:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the ISP in English.
   * 
   * @example
   * unicom
   */
  ispNameEn?: string;
  /**
   * @remarks
   * The name of the region in English.
   * 
   * @example
   * shanghai
   */
  locationNameEn?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3C6CCEC4-6B88-4D4A-****-D47B3D92CF8F
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range for the returned data.
   * 
   * @example
   * 2015-12-10T13:00:00Z
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
      bpsDataPerInterval: DescribeVodDomainBpsDataResponseBodyBpsDataPerInterval,
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

