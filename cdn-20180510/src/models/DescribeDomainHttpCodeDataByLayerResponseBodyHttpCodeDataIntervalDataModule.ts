// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainHttpCodeDataByLayerResponseBodyHttpCodeDataIntervalDataModule extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the data returned.
   * 
   * @example
   * 2015-12-10T20:35:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The total number of times that HTTP status codes were returned.
   * 
   * @example
   * 110
   */
  totalValue?: string;
  /**
   * @remarks
   * The number of times that the HTTP status code was returned.
   * 
   * @example
   * { "200": 10, "206": 100}
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      totalValue: 'TotalValue',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      totalValue: 'string',
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

