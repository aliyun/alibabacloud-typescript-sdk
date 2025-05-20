// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueryOptimizeExecErrorSampleResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * testdb01
   */
  dbname?: string;
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * 1146
   */
  errorCode?: string;
  /**
   * @remarks
   * The IP address of the client that executes the SQL statement.
   * 
   * @example
   * 100.104.XX.XX
   */
  origHost?: string;
  /**
   * @remarks
   * The SQL template ID.
   * 
   * @example
   * 2e8147b5ca2dfc640dfd5e43d96a****
   */
  sqlId?: string;
  /**
   * @remarks
   * The content of the SQL statement that failed to be executed.
   * 
   * @example
   * select * from test1
   */
  sqlText?: string;
  /**
   * @remarks
   * The point in time when the failed SQL statement was executed. The value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1643020306739
   */
  timestamp?: number;
  /**
   * @remarks
   * The username of the client that executes the SQL statement.
   * 
   * @example
   * test01
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      dbname: 'Dbname',
      errorCode: 'ErrorCode',
      origHost: 'OrigHost',
      sqlId: 'SqlId',
      sqlText: 'SqlText',
      timestamp: 'Timestamp',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbname: 'string',
      errorCode: 'string',
      origHost: 'string',
      sqlId: 'string',
      sqlText: 'string',
      timestamp: 'number',
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

