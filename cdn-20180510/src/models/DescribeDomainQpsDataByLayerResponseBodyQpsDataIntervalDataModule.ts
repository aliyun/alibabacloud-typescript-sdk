// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainQpsDataByLayerResponseBodyQpsDataIntervalDataModule extends $dara.Model {
  /**
   * @remarks
   * The number of requests in the Chinese mainland.
   * 
   * @example
   * 12
   */
  accDomesticValue?: string;
  /**
   * @remarks
   * The number of requests outside the Chinese mainland.
   * 
   * @example
   * 44
   */
  accOverseasValue?: string;
  /**
   * @remarks
   * The total number of requests.
   * 
   * @example
   * 56
   */
  accValue?: string;
  /**
   * @remarks
   * The number of queries per second in the Chinese mainland.
   * 
   * @example
   * 0.12
   */
  domesticValue?: string;
  /**
   * @remarks
   * The number of queries per second outside the Chinese mainland.
   * 
   * @example
   * 0.44
   */
  overseasValue?: string;
  /**
   * @remarks
   * The timestamp of the returned data.
   * 
   * @example
   * 2015-12-10T21:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The total number of queries per second.
   * 
   * @example
   * 0.56
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      accDomesticValue: 'AccDomesticValue',
      accOverseasValue: 'AccOverseasValue',
      accValue: 'AccValue',
      domesticValue: 'DomesticValue',
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

