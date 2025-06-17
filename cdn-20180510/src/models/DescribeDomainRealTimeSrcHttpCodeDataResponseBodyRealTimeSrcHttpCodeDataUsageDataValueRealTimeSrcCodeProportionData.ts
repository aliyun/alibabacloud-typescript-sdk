// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageDataValueRealTimeSrcCodeProportionData extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The count of each HTTP status code.
   * 
   * @example
   * 100
   */
  count?: string;
  /**
   * @remarks
   * The proportion of the HTTP status code.
   * 
   * @example
   * 0.62015503875969
   */
  proportion?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      proportion: 'Proportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'string',
      proportion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

