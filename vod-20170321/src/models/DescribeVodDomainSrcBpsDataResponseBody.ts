// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainSrcBpsDataResponseBodySrcBpsDataPerIntervalDataModule extends $dara.Model {
  /**
   * @remarks
   * The bandwidth consumed for fetching resources from the origin over HTTPS.
   * 
   * @example
   * 0
   */
  httpsValue?: string;
  /**
   * @remarks
   * The timestamp of the data returned. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-08-23T02:02:57Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The total origin bandwidth data. Unit: bit/s.
   * 
   * @example
   * 0
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

export class DescribeVodDomainSrcBpsDataResponseBodySrcBpsDataPerInterval extends $dara.Model {
  dataModule?: DescribeVodDomainSrcBpsDataResponseBodySrcBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeVodDomainSrcBpsDataResponseBodySrcBpsDataPerIntervalDataModule },
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

export class DescribeVodDomainSrcBpsDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time interval at which data is returned, which is the time granularity. Unit: seconds.
   * 
   * @example
   * 300
   */
  dataInterval?: string;
  /**
   * @remarks
   * The accelerated domain name whose ICP filing status you want to update.
   * 
   * @example
   * sample.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range.
   * 
   * @example
   * 2022-08-23T02:02:57Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4A13-BEF6-****
   */
  requestId?: string;
  /**
   * @remarks
   * The origin bandwidth data at each time interval.
   */
  srcBpsDataPerInterval?: DescribeVodDomainSrcBpsDataResponseBodySrcBpsDataPerInterval;
  /**
   * @remarks
   * The beginning of the time range.
   * 
   * @example
   * 2022-07-12T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      srcBpsDataPerInterval: 'SrcBpsDataPerInterval',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      srcBpsDataPerInterval: DescribeVodDomainSrcBpsDataResponseBodySrcBpsDataPerInterval,
      startTime: 'string',
    };
  }

  validate() {
    if(this.srcBpsDataPerInterval && typeof (this.srcBpsDataPerInterval as any).validate === 'function') {
      (this.srcBpsDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

