// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryChangeLogListResponseBodyDataChangeLog extends $dara.Model {
  /**
   * @example
   * dns1;dns2 -> dns3;dns4
   */
  details?: string;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * DNS modification
   */
  operation?: string;
  /**
   * @example
   * 127.0.0.1
   */
  operationIPAddress?: string;
  remark?: string;
  /**
   * @example
   * Failed
   */
  result?: string;
  /**
   * @example
   * 2017-12-26 12:00:00
   */
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
   * @example
   * 1
   */
  currentPageNum?: number;
  data?: QueryChangeLogListResponseBodyData;
  /**
   * @example
   * true
   */
  nextPage?: boolean;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @example
   * false
   */
  prePage?: boolean;
  /**
   * @example
   * 2DEDFF32-7827-46B1-BE90-3DB8ABD91A58
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  resultLimit?: boolean;
  /**
   * @example
   * 1000
   */
  totalItemNum?: number;
  /**
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

