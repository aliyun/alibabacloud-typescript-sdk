// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAbnormalPatternDetectionResponseBodyDetectionItemsResults } from "./DescribeAbnormalPatternDetectionResponseBodyDetectionItemsResults";


export class DescribeAbnormalPatternDetectionResponseBodyDetectionItems extends $dara.Model {
  /**
   * @remarks
   * The name of the detection item.
   * 
   * @example
   * Cost
   */
  name?: string;
  /**
   * @remarks
   * The detection result items.
   */
  results?: DescribeAbnormalPatternDetectionResponseBodyDetectionItemsResults[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      results: { 'type': 'array', 'itemType': DescribeAbnormalPatternDetectionResponseBodyDetectionItemsResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

