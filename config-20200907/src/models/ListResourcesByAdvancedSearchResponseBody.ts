// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourcesByAdvancedSearchResponseBodyQueryResultsQueryResultList extends $dara.Model {
  /**
   * @remarks
   * The field names.
   */
  columns?: string[];
  /**
   * @remarks
   * The resource data.
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

export class ListResourcesByAdvancedSearchResponseBodyQueryResults extends $dara.Model {
  /**
   * @remarks
   * The queried resources. A maximum of 1,000 data records can be returned. To view more data, use the download URL of the resource file.
   */
  queryResultList?: ListResourcesByAdvancedSearchResponseBodyQueryResultsQueryResultList;
  static names(): { [key: string]: string } {
    return {
      queryResultList: 'QueryResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryResultList: ListResourcesByAdvancedSearchResponseBodyQueryResultsQueryResultList,
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

