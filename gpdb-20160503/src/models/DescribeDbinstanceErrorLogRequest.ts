// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceErrorLogRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in a specific region, including the instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * adbtest
   */
  database?: string;
  /**
   * @remarks
   * The end time of the query. The end time must be later than the start time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z format. The time must be in UTC.
   * 
   * @example
   * 2022-04-25T06:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is not supported in the public cloud. You do not need to specify this parameter.
   * 
   * @example
   * null
   */
  host?: string;
  /**
   * @remarks
   * The keyword used to search for error logs.
   * 
   * @example
   * error
   */
  keywords?: string;
  /**
   * @remarks
   * The log level. Valid values:
   * 
   * - **ALL**: displays logs of all levels.
   * - **PANIC**: displays only panic-level logs.
   * - **FATAL**: displays only fatal-level logs.
   * - **ERROR**: displays only error-level logs.
   * 
   * @example
   * ALL
   */
  logLevel?: string;
  /**
   * @remarks
   * The page number. The value must be greater than 0 and cannot exceed the maximum value of the Integer type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * - **20**
   * - **50**
   * - **100**
   * 
   * Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time of the query. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z format. The time must be in UTC.
   * 
   * @example
   * 2022-04-24T06:59Z
   */
  startTime?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * adbpguser
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      database: 'Database',
      endTime: 'EndTime',
      host: 'Host',
      keywords: 'Keywords',
      logLevel: 'LogLevel',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      database: 'string',
      endTime: 'string',
      host: 'string',
      keywords: 'string',
      logLevel: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
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

