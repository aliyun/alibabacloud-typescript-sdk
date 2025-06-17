// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValue } from "./DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValue";


export class DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageData extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the returned data.
   * 
   * @example
   * 2021-06-29T05:40:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The information about the HTTP status codes.
   */
  value?: DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValue;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      value: DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValue,
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

