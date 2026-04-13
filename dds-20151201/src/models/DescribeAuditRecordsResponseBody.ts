// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuditRecordsResponseBodyItemsSQLRecord extends $dara.Model {
  accountName?: string;
  DBName?: string;
  executeTime?: string;
  hostAddress?: string;
  returnRowCounts?: number;
  syntax?: string;
  tableName?: string;
  threadID?: string;
  totalExecutionTimes?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBName: 'DBName',
      executeTime: 'ExecuteTime',
      hostAddress: 'HostAddress',
      returnRowCounts: 'ReturnRowCounts',
      syntax: 'Syntax',
      tableName: 'TableName',
      threadID: 'ThreadID',
      totalExecutionTimes: 'TotalExecutionTimes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBName: 'string',
      executeTime: 'string',
      hostAddress: 'string',
      returnRowCounts: 'number',
      syntax: 'string',
      tableName: 'string',
      threadID: 'string',
      totalExecutionTimes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditRecordsResponseBodyItems extends $dara.Model {
  SQLRecord?: DescribeAuditRecordsResponseBodyItemsSQLRecord[];
  static names(): { [key: string]: string } {
    return {
      SQLRecord: 'SQLRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQLRecord: { 'type': 'array', 'itemType': DescribeAuditRecordsResponseBodyItemsSQLRecord },
    };
  }

  validate() {
    if(Array.isArray(this.SQLRecord)) {
      $dara.Model.validateArray(this.SQLRecord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditRecordsResponseBody extends $dara.Model {
  items?: DescribeAuditRecordsResponseBodyItems;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of entries on the current page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3278BEB8-503B-4E46-8F7E-D26E040C9769
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 40
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeAuditRecordsResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

