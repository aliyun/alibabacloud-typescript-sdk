// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceErrorLogRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the information about all AnalyticDB for PostgreSQL instances within a region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceId?: string;
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
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC. The end time must be later than the start time.
   * 
   * @example
   * 2022-04-25T06:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is not supported in Alibaba Cloud public cloud.
   * 
   * @example
   * null
   */
  host?: string;
  /**
   * @remarks
   * One or more keywords that are used to query error logs.
   * 
   * @example
   * error
   */
  keywords?: string;
  /**
   * @remarks
   * The level of the logs to query. Valid values:
   * 
   * *   **ALL**: queries all error logs.
   * *   **PANIC**: queries only abnormal logs.
   * *   **FATAL**: queries only critical logs.
   * *   **ERROR**: queries only error logs.
   * 
   * @example
   * ALL
   */
  logLevel?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **20**
   * *   **50**
   * *   **100**
   * 
   * Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
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

