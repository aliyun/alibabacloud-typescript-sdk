// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryChangeLogListResponseBodyDataChangeLog extends $dara.Model {
  details?: string;
  domainName?: string;
  operation?: string;
  operationIPAddress?: string;
  remark?: string;
  result?: string;
  time?: string;
  static names(): { [key: string]: string } {
    return {
      details: 'Details',
      domainName: 'DomainName',
      operation: 'Operation',
      operationIPAddress: 'OperationIPAddress',
      remark: 'Remark',
      result: 'Result',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: 'string',
      domainName: 'string',
      operation: 'string',
      operationIPAddress: 'string',
      remark: 'string',
      result: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChangeLogListResponseBodyData extends $dara.Model {
  changeLog?: QueryChangeLogListResponseBodyDataChangeLog[];
  static names(): { [key: string]: string } {
    return {
      changeLog: 'ChangeLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeLog: { 'type': 'array', 'itemType': QueryChangeLogListResponseBodyDataChangeLog },
    };
  }

  validate() {
    if(Array.isArray(this.changeLog)) {
      $dara.Model.validateArray(this.changeLog);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChangeLogListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPageNum?: number;
  data?: QueryChangeLogListResponseBodyData;
  /**
   * @remarks
   * Indicates whether a next page exists.
   * 
   * @example
   * true
   */
  nextPage?: boolean;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * Indicates whether a previous page exists.
   * 
   * @example
   * false
   */
  prePage?: boolean;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 2DEDFF32-7827-46B1-BE90-3DB8ABD91A58
   */
  requestId?: string;
  /**
   * @remarks
   * The API returns a maximum of 1,000 recent records per query, regardless of the specified page size. If your query matches more than 1,000 records, **ResultLimit** is **true**. To retrieve all results, narrow the time range and query again. Otherwise, **ResultLimit** is **false**.
   * 
   * @example
   * true
   */
  resultLimit?: boolean;
  /**
   * @remarks
   * The total number of items.
   * 
   * @example
   * 1000
   */
  totalItemNum?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1000
   */
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      nextPage: 'NextPage',
      pageSize: 'PageSize',
      prePage: 'PrePage',
      requestId: 'RequestId',
      resultLimit: 'ResultLimit',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: QueryChangeLogListResponseBodyData,
      nextPage: 'boolean',
      pageSize: 'number',
      prePage: 'boolean',
      requestId: 'string',
      resultLimit: 'boolean',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

