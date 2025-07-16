// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainQpsDataResponseBodyQpsDataIntervalDataModule extends $dara.Model {
  /**
   * @remarks
   * The number of requests in the Chinese mainland.
   * 
   * @example
   * 0
   */
  accDomesticValue?: string;
  /**
   * @remarks
   * The number of requests outside the Chinese mainland.
   * 
   * @example
   * 0
   */
  accOverseasValue?: string;
  /**
   * @remarks
   * The total number of requests.
   * 
   * @example
   * 0
   */
  accValue?: string;
  /**
   * @remarks
   * The number of queries per second in the Chinese mainland.
   * 
   * @example
   * 0
   */
  domesticValue?: string;
  /**
   * @remarks
   * The number of HTTPS requests sent to POPs in the Chinese mainland.
   * 
   * @example
   * 1
   */
  httpsAccDomesticValue?: string;
  /**
   * @remarks
   * The number of HTTPS requests sent to POPs outside the Chinese mainland.
   * 
   * @example
   * 1
   */
  httpsAccOverseasValue?: string;
  /**
   * @remarks
   * The number of HTTPS requests sent to POPs.
   * 
   * @example
   * 1
   */
  httpsAccValue?: string;
  /**
   * @remarks
   * The number of queries per second that is calculated based on the HTTPS requests sent to POPs in the Chinese mainland.
   * 
   * @example
   * 1
   */
  httpsDomesticValue?: string;
  /**
   * @remarks
   * The number of queries per second that is calculated based on the HTTPS requests sent to POPs outside the Chinese mainland.
   * 
   * @example
   * 1
   */
  httpsOverseasValue?: string;
  /**
   * @remarks
   * The number of queries per second that is calculated based on the HTTPS requests sent to points of presence (POPs).
   * 
   * @example
   * 1
   */
  httpsValue?: string;
  /**
   * @remarks
   * The number of queries per second outside the Chinese mainland.
   * 
   * @example
   * 0
   */
  overseasValue?: string;
  /**
   * @remarks
   * The timestamp of the data returned.
   * 
   * @example
   * 2019-11-30T05:40:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The total QPS.
   * 
   * @example
   * 0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      accDomesticValue: 'AccDomesticValue',
      accOverseasValue: 'AccOverseasValue',
      accValue: 'AccValue',
      domesticValue: 'DomesticValue',
      httpsAccDomesticValue: 'HttpsAccDomesticValue',
      httpsAccOverseasValue: 'HttpsAccOverseasValue',
      httpsAccValue: 'HttpsAccValue',
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
      accDomesticValue: 'string',
      accOverseasValue: 'string',
      accValue: 'string',
      domesticValue: 'string',
      httpsAccDomesticValue: 'string',
      httpsAccOverseasValue: 'string',
      httpsAccValue: 'string',
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

export class DescribeDomainQpsDataResponseBodyQpsDataInterval extends $dara.Model {
  dataModule?: DescribeDomainQpsDataResponseBodyQpsDataIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainQpsDataResponseBodyQpsDataIntervalDataModule },
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

export class DescribeDomainQpsDataResponseBody extends $dara.Model {
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
   * 2019-11-30T05:40:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The list of QPS records at each interval.
   */
  qpsDataInterval?: DescribeDomainQpsDataResponseBodyQpsDataInterval;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B8333EDB-4595-46E0-AFE9-29BAA290D0E0
   */
  requestId?: string;
  /**
   * @remarks
   * The start of the time range during which data was queried.
   * 
   * @example
   * 2019-11-30T05:33:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      qpsDataInterval: 'QpsDataInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      qpsDataInterval: DescribeDomainQpsDataResponseBodyQpsDataInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.qpsDataInterval && typeof (this.qpsDataInterval as any).validate === 'function') {
      (this.qpsDataInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

