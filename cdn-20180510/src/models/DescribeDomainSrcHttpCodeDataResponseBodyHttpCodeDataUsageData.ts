// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageDataValue } from "./DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageDataValue";


export class DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageData extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the returned data.
   * 
   * @example
   * 2015-11-30T05:30:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The proportions of the HTTP status codes.
   */
  value?: DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageDataValue;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      value: DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageDataValue,
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

