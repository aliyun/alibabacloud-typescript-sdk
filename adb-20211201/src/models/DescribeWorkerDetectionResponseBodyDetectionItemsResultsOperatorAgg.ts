// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeWorkerDetectionResponseBodyDetectionItemsResultsOperatorAggSearchResults } from "./DescribeWorkerDetectionResponseBodyDetectionItemsResultsOperatorAggSearchResults";


export class DescribeWorkerDetectionResponseBodyDetectionItemsResultsOperatorAgg extends $dara.Model {
  /**
   * @remarks
   * The detection result items of operator metric aggregation.
   * 
   * @example
   * Peak memory
   */
  metricName?: string;
  /**
   * @remarks
   * The detection result items of operator metric aggregation.
   */
  searchResults?: DescribeWorkerDetectionResponseBodyDetectionItemsResultsOperatorAggSearchResults[];
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      searchResults: 'SearchResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      searchResults: { 'type': 'array', 'itemType': DescribeWorkerDetectionResponseBodyDetectionItemsResultsOperatorAggSearchResults },
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

