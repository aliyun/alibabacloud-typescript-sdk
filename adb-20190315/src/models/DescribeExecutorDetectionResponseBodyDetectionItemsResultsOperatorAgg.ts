// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeExecutorDetectionResponseBodyDetectionItemsResultsOperatorAggSearchResults } from "./DescribeExecutorDetectionResponseBodyDetectionItemsResultsOperatorAggSearchResults";


export class DescribeExecutorDetectionResponseBodyDetectionItemsResultsOperatorAgg extends $dara.Model {
  /**
   * @remarks
   * The name of the detection metric.
   * 
   * @example
   * PeakMemory
   */
  metricName?: string;
  /**
   * @remarks
   * The detection result items of operator metric aggregation.
   */
  searchResults?: DescribeExecutorDetectionResponseBodyDetectionItemsResultsOperatorAggSearchResults[];
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      searchResults: 'SearchResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      searchResults: { 'type': 'array', 'itemType': DescribeExecutorDetectionResponseBodyDetectionItemsResultsOperatorAggSearchResults },
    };
  }

  validate() {
    if(Array.isArray(this.searchResults)) {
      $dara.Model.validateArray(this.searchResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

