// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainQpsDataResponseBodyQpsDataIntervalDataModule extends $dara.Model {
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
   * The QPS data in the Chinese mainland.
   * 
   * @example
   * 0
   */
  domesticValue?: string;
  /**
   * @remarks
   * The QPS that is calculated based on the HTTPS requests sent to POPs in the Chinese mainland.
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
   * The QPS that is calculated based on the HTTPS requests sent to POPs in the Chinese mainland.
   * 
   * @example
   * 1
   */
  httpsDomesticValue?: string;
  /**
   * @remarks
   * The QPS that is calculated based on the HTTPS requests sent to POPs outside the Chinese mainland.
   * 
   * @example
   * 1
   */
  httpsOverseasValue?: string;
  /**
   * @remarks
   * The QPS that is calculated based on the HTTPS requests sent to points of presence (POPs).
   * 
   * @example
   * 1
   */
  httpsValue?: string;
  /**
   * @remarks
   * The QPS data outside the Chinese mainland.
   * 
   * @example
   * 0
   */
  overseasValue?: string;
  /**
   * @remarks
   * The timestamp of the data returned. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2023-06-27 10:10:58
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

export class DescribeVodDomainQpsDataResponseBodyQpsDataInterval extends $dara.Model {
  dataModule?: DescribeVodDomainQpsDataResponseBodyQpsDataIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeVodDomainQpsDataResponseBodyQpsDataIntervalDataModule },
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

export class DescribeVodDomainQpsDataResponseBody extends $dara.Model {
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
   * The end of the time range during which data was queried. The time follows the ISO 8601 standard in the *YYYY-MM-DD**Thh:mm:ss* format. The time is displayed in UTC.
   * 
   * @example
   * 2024-05-02T15:59:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The list of QPS records at each interval.
   */
  qpsDataInterval?: DescribeVodDomainQpsDataResponseBodyQpsDataInterval;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4AF6-D7393642CA58*****
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range during which data was queried. The time follows the ISO 8601 standard in the *YYYY-MM-DD**Thh:mm:ss* format. The time is displayed in UTC.
   * 
   * @example
   * 2024-05-02T15:50:00Z
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
      qpsDataInterval: DescribeVodDomainQpsDataResponseBodyQpsDataInterval,
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

