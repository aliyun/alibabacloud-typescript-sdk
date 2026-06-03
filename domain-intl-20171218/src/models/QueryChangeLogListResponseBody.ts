// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryChangeLogListResponseBodyDataChangeLog extends $dara.Model {
  details?: string;
  domainName?: string;
  operation?: string;
  operationIPAddress?: string;
  result?: string;
  time?: string;
  static names(): { [key: string]: string } {
    return {
      details: 'Details',
      domainName: 'DomainName',
      operation: 'Operation',
      operationIPAddress: 'OperationIPAddress',
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
  currentPageNum?: number;
  data?: QueryChangeLogListResponseBodyData;
  nextPage?: boolean;
  pageSize?: number;
  prePage?: boolean;
  requestId?: string;
  resultLimit?: boolean;
  totalItemNum?: number;
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

