// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsDomainReqTrafficDataResponseBodyReqTrafficDataPerIntervalDataModule extends $dara.Model {
  /**
   * @example
   * 10000
   */
  reqTrafficValue?: string;
  /**
   * @example
   * 2021-09-22T03:40:41Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      reqTrafficValue: 'ReqTrafficValue',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reqTrafficValue: 'string',
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

export class DescribeVsDomainReqTrafficDataResponseBodyReqTrafficDataPerInterval extends $dara.Model {
  dataModule?: DescribeVsDomainReqTrafficDataResponseBodyReqTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeVsDomainReqTrafficDataResponseBodyReqTrafficDataPerIntervalDataModule },
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

export class DescribeVsDomainReqTrafficDataResponseBody extends $dara.Model {
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
   * 2021-09-22T03:40:41Z
   */
  endTime?: string;
  reqTrafficDataPerInterval?: DescribeVsDomainReqTrafficDataResponseBodyReqTrafficDataPerInterval;
  /**
   * @example
   * 9BEC5E85-C76B-56EF-A922-860EFDB8B64B
   */
  requestId?: string;
  /**
   * @example
   * 2021-09-21T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      reqTrafficDataPerInterval: 'ReqTrafficDataPerInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      reqTrafficDataPerInterval: DescribeVsDomainReqTrafficDataResponseBodyReqTrafficDataPerInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.reqTrafficDataPerInterval && typeof (this.reqTrafficDataPerInterval as any).validate === 'function') {
      (this.reqTrafficDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

