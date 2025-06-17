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

