// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExecutorDetectionResponseBodyDetectionItemsResultsOperatorAggSearchResults extends $dara.Model {
  /**
   * @remarks
   * The average value of the operator metric.
   * 
   * @example
   * 235.5
   */
  avgValue?: number;
  /**
   * @remarks
   * The maximum value of the operator metric.
   * 
   * @example
   * 2335
   */
  maxValue?: number;
  /**
   * @remarks
   * The number of occurrences of the operator.
   * 
   * @example
   * 5
   */
  operatorCount?: number;
  /**
   * @remarks
   * The name of the operator.
   * 
   * @example
   * Aggregation
   */
  operatorName?: string;
  /**
   * @remarks
   * The cumulative value of the operator metric.
   * 
   * @example
   * 234
   */
  totalValue?: number;
  static names(): { [key: string]: string } {
    return {
      avgValue: 'AvgValue',
      maxValue: 'MaxValue',
      operatorCount: 'OperatorCount',
      operatorName: 'OperatorName',
      totalValue: 'TotalValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgValue: 'number',
      maxValue: 'number',
      operatorCount: 'number',
      operatorName: 'string',
      totalValue: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

