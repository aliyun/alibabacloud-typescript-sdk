// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePerformanceViewAttributeResponseBodyViewDetailCategories } from "./DescribePerformanceViewAttributeResponseBodyViewDetailCategories";


export class DescribePerformanceViewAttributeResponseBodyViewDetail extends $dara.Model {
  /**
   * @remarks
   * The metric category.
   */
  categories?: DescribePerformanceViewAttributeResponseBodyViewDetailCategories[];
  /**
   * @remarks
   * Specifies whether to enable the filter interaction feature. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  chartLinked?: boolean;
  /**
   * @remarks
   * The number of charts to display in each row.
   * 
   * @example
   * 2
   */
  chartsPerLine?: number;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      chartLinked: 'ChartLinked',
      chartsPerLine: 'ChartsPerLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': DescribePerformanceViewAttributeResponseBodyViewDetailCategories },
      chartLinked: 'boolean',
      chartsPerLine: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

