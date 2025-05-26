// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeWorkerDetectionResponseBodyDetectionItemsResultsTopAccessTablesSearchResults } from "./DescribeWorkerDetectionResponseBodyDetectionItemsResultsTopAccessTablesSearchResults";


export class DescribeWorkerDetectionResponseBodyDetectionItemsResultsTopAccessTables extends $dara.Model {
  /**
   * @remarks
   * The name of the detection metric.
   * 
   * @example
   * Peak memory detection
   */
  metricName?: string;
  /**
   * @remarks
   * The detection result items of table access.
   */
  searchResults?: DescribeWorkerDetectionResponseBodyDetectionItemsResultsTopAccessTablesSearchResults[];
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      searchResults: 'SearchResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      searchResults: { 'type': 'array', 'itemType': DescribeWorkerDetectionResponseBodyDetectionItemsResultsTopAccessTablesSearchResults },
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

