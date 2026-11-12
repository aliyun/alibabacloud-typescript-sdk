// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDatabaseErrorLogsResponseBodyErrorLogs extends $dara.Model {
  /**
   * @remarks
   * The time when the error log was generated. The time is in UTC and formatted as `yyyy-MM-ddTHH:mm:ssZ` according to the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard.
   * 
   * > The time displayed in the console is 8 hours ahead of the specified UTC time.
   * 
   * @example
   * 2022-09-08T12:11:04Z
   */
  createTime?: string;
  /**
   * @remarks
   * The error information.
   * 
   * @example
   * spid52 DBCC TRACEON 3499, server process ID (SPID) 52. This is an informational message only; no user action is required
   */
  errorInfo?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      errorInfo: 'ErrorInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      errorInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseErrorLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array of error logs.
   */
  errorLogs?: DescribeDatabaseErrorLogsResponseBodyErrorLogs[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of matching error logs.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorLogs: 'ErrorLogs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorLogs: { 'type': 'array', 'itemType': DescribeDatabaseErrorLogsResponseBodyErrorLogs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.errorLogs)) {
      $dara.Model.validateArray(this.errorLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

