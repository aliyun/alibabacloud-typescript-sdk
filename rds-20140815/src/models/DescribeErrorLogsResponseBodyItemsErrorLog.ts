// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeErrorLogsResponseBodyItemsErrorLog extends $dara.Model {
  /**
   * @remarks
   * The time when the error log entry was generated. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2011-05-30T12:11:04Z
   */
  createTime?: string;
  /**
   * @remarks
   * The error log information.
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

