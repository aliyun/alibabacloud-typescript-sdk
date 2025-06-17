// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageDataValueCodeProportionData extends $dara.Model {
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
   * The total number of entries.
   * 
   * @example
   * 2300
   */
  count?: string;
  /**
   * @remarks
   * The proportion of the HTTP status code.
   * 
   * @example
   * 67.1458998935037
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

