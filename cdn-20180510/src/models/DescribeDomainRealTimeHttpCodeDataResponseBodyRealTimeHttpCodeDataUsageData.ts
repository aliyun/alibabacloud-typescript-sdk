// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValue } from "./DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValue";


export class DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageData extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the data returned.
   * 
   * @example
   * 2019-11-29T05:39:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The proportions of the HTTP status codes.
   */
  value?: DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValue;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      value: DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValue,
    };
  }

  validate() {
    if(this.value && typeof (this.value as any).validate === 'function') {
      (this.value as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

