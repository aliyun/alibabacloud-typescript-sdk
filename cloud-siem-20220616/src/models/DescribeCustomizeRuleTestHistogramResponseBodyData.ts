// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomizeRuleTestHistogramResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of alerts that are generated in the query time range.
   * 
   * @example
   * 125
   */
  count?: number;
  /**
   * @remarks
   * The start of the time range for querying alerts. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1599897188
   */
  from?: number;
  /**
   * @remarks
   * The end of the time range for querying alerts. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1599997188
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      from: 'From',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      from: 'number',
      to: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

