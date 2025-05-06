// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAggregateResourcesByAdvancedSearchResponseBodyQueryResults } from "./ListAggregateResourcesByAdvancedSearchResponseBodyQueryResults";


export class ListAggregateResourcesByAdvancedSearchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  queryResults?: ListAggregateResourcesByAdvancedSearchResponseBodyQueryResults;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B0DBF868-460F-5E7C-8F76-1ACE2FCCE153
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      queryResults: 'QueryResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryResults: ListAggregateResourcesByAdvancedSearchResponseBodyQueryResults,
      requestId: 'string',
    };
  }

  validate() {
    if(this.queryResults && typeof (this.queryResults as any).validate === 'function') {
      (this.queryResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

