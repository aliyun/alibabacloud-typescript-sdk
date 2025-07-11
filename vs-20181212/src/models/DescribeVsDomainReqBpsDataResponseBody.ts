// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsDomainReqBpsDataResponseBodyReqBpsDataPerIntervalDataModule extends $dara.Model {
  /**
   * @example
   * 1000
   */
  reqBpsValue?: string;
  /**
   * @example
   * 2021-12-24T16:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      reqBpsValue: 'ReqBpsValue',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reqBpsValue: 'string',
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

export class DescribeVsDomainReqBpsDataResponseBodyReqBpsDataPerInterval extends $dara.Model {
  dataModule?: DescribeVsDomainReqBpsDataResponseBodyReqBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeVsDomainReqBpsDataResponseBodyReqBpsDataPerIntervalDataModule },
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

export class DescribeVsDomainReqBpsDataResponseBody extends $dara.Model {
  /**
   * @example
   * 3600
   */
  dataInterval?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 2021-09-24T03:30:46Z
   */
  endTime?: string;
  reqBpsDataPerInterval?: DescribeVsDomainReqBpsDataResponseBodyReqBpsDataPerInterval;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 2021-12-24T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      reqBpsDataPerInterval: 'ReqBpsDataPerInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      reqBpsDataPerInterval: DescribeVsDomainReqBpsDataResponseBodyReqBpsDataPerInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.reqBpsDataPerInterval && typeof (this.reqBpsDataPerInterval as any).validate === 'function') {
      (this.reqBpsDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

