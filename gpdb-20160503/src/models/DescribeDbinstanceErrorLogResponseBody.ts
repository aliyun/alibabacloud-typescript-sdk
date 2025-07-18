// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceErrorLogResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adbtest
   */
  database?: string;
  /**
   * @remarks
   * This parameter is not supported.
   * 
   * @example
   * null
   */
  host?: string;
  /**
   * @remarks
   * The content of the error log.
   * 
   * @example
   * unsupported frontend protocol 2689.28208: server supports 1.0 to 3.0
   */
  logContext?: string;
  /**
   * @remarks
   * The level of the queried log.
   * 
   * @example
   * FATAL
   */
  logLevel?: string;
  /**
   * @remarks
   * The time when the log was generated. The time is displayed in UTC.
   * 
   * @example
   * 2022-04-24 11:28:14
   */
  time?: number;
  /**
   * @remarks
   * The name of the database account.
   * 
   * @example
   * adbpguser
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      host: 'Host',
      logContext: 'LogContext',
      logLevel: 'LogLevel',
      time: 'Time',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      host: 'string',
      logContext: 'string',
      logLevel: 'string',
      time: 'number',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceErrorLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content of the error log.
   */
  items?: DescribeDBInstanceErrorLogResponseBodyItems[];
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
   * The request ID.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeDBInstanceErrorLogResponseBodyItems },
      pageNumber: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

