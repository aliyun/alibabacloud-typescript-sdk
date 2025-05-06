// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListResourcesByAdvancedSearchResponseBodyQueryResults } from "./ListResourcesByAdvancedSearchResponseBodyQueryResults";


export class ListResourcesByAdvancedSearchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The query result.
   */
  queryResults?: ListResourcesByAdvancedSearchResponseBodyQueryResults;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D241DEBF-67A2-56AF-88CF-57BF78F0A850
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
      queryResults: ListResourcesByAdvancedSearchResponseBodyQueryResults,
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

