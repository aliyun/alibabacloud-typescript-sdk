// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAggregateResourcesByAdvancedSearchResponseBodyQueryResultsQueryResultList } from "./ListAggregateResourcesByAdvancedSearchResponseBodyQueryResultsQueryResultList";


export class ListAggregateResourcesByAdvancedSearchResponseBodyQueryResults extends $dara.Model {
  /**
   * @remarks
   * The queried resources. A maximum of 1,000 data records can be returned. To view more data, use the download URL of the resource file.
   */
  queryResultList?: ListAggregateResourcesByAdvancedSearchResponseBodyQueryResultsQueryResultList;
  static names(): { [key: string]: string } {
    return {
      queryResultList: 'QueryResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryResultList: ListAggregateResourcesByAdvancedSearchResponseBodyQueryResultsQueryResultList,
    };
  }

  validate() {
    if(this.queryResultList && typeof (this.queryResultList as any).validate === 'function') {
      (this.queryResultList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

