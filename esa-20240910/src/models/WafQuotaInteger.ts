// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WafQuotaInteger extends $dara.Model {
  /**
   * @example
   * 1
   */
  equal?: number;
  /**
   * @example
   * 1
   */
  greaterThan?: number;
  /**
   * @example
   * 1
   */
  greaterThanOrEqual?: number;
  /**
   * @example
   * 1
   */
  lessThan?: number;
  /**
   * @example
   * 1
   */
  lessThanOrEqual?: number;
  static names(): { [key: string]: string } {
    return {
      equal: 'Equal',
      greaterThan: 'GreaterThan',
      greaterThanOrEqual: 'GreaterThanOrEqual',
      lessThan: 'LessThan',
      lessThanOrEqual: 'LessThanOrEqual',
    };
  }

  static types(): { [key: string]: any } {
    return {
      equal: 'number',
      greaterThan: 'number',
      greaterThanOrEqual: 'number',
      lessThan: 'number',
      lessThanOrEqual: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

