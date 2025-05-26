// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SimpleQueryRequestAggregations extends $dara.Model {
  /**
   * @remarks
   * The name of the field. For more information about supported fields, see [Supported fields and operators](https://help.aliyun.com/document_detail/2743991.html).
   * 
   * @example
   * Size
   */
  field?: string;
  /**
   * @remarks
   * The operator.
   * 
   * Enumerated values:
   * 
   * *   average: calculates the average number.
   * *   min: finds the minimum value.
   * *   max: finds the maximum value.
   * *   count: counts the number of results.
   * *   distinct: counts the number of distinct results.
   * *   sum: calculates the sum of all matching results..
   * *   group: counts the number of results by group. The results are sorted by the count number in descending order.
   * 
   * @example
   * sum
   */
  operation?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      operation: 'Operation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      operation: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

