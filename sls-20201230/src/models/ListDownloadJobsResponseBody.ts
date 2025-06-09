// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDownloadJobsResponseBodyResults } from "./ListDownloadJobsResponseBodyResults";


export class ListDownloadJobsResponseBody extends $dara.Model {
  /**
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The log download tasks.
   */
  results?: ListDownloadJobsResponseBodyResults[];
  /**
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      results: 'results',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      results: { 'type': 'array', 'itemType': ListDownloadJobsResponseBodyResults },
      total: 'number',
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

