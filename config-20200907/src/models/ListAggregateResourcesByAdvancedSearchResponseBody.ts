// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggregateResourcesByAdvancedSearchResponseBodyQueryResultsQueryResultList extends $dara.Model {
  /**
   * @remarks
   * The list of field names returned by the search.
   */
  columns?: string[];
  /**
   * @remarks
   * The list of resource data returned by the search.
   */
  values?: any[];
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': 'string' },
      values: { 'type': 'array', 'itemType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateResourcesByAdvancedSearchResponseBodyQueryResults extends $dara.Model {
  /**
   * @remarks
   * The list of resources returned by the query. A maximum of 1,000 entries are returned. To view more data, download the search file.
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

export class ListAggregateResourcesByAdvancedSearchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The query results.
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

