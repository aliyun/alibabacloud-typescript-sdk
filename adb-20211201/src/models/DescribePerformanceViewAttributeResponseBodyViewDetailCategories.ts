// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePerformanceViewAttributeResponseBodyViewDetailCategoriesKeys } from "./DescribePerformanceViewAttributeResponseBodyViewDetailCategoriesKeys";


export class DescribePerformanceViewAttributeResponseBodyViewDetailCategories extends $dara.Model {
  /**
   * @remarks
   * The name of the metric category. Valid values:
   * 
   * *   **Node**
   * *   **DiskData**
   * *   **WorkLoad**
   * *   **ResourceGroup**
   * 
   * @example
   * Node
   */
  category?: string;
  /**
   * @remarks
   * The metrics.
   */
  keys?: DescribePerformanceViewAttributeResponseBodyViewDetailCategoriesKeys[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      keys: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      keys: { 'type': 'array', 'itemType': DescribePerformanceViewAttributeResponseBodyViewDetailCategoriesKeys },
    };
  }

  validate() {
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

