// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySqlLogConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the cold data storage is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  coldEnable?: boolean;
  /**
   * @remarks
   * The number of days for which the SQL Explorer and Audit data is stored in cold storage. The value is calculated by using the following formula: Value of ColdRetention = Value of Retention - Value of HotRetention.``
   * 
   * @example
   * 23
   */
  coldRetention?: number;
  /**
   * @remarks
   * The time when the cold data storage was enabled. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1683712800000
   */
  coldStartTime?: number;
  /**
   * @remarks
   * The collector version. Valid values:
   * 
   * *   **MYSQL_V0**
   * *   **MYSQL_V1**
   * *   **MYSQL_V2**
   * *   **MYSQL_V3**
   * *   **PG_V1**
   * *   **rdspg_v1**
   * *   **polarpg_v1**
   * 
   * @example
   * MYSQL_V3
   */
  collectorVersion?: string;
  /**
   * @remarks
   * Indicates whether the hot data storage is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  hotEnable?: boolean;
  /**
   * @remarks
   * The number of days for which the SQL Explorer and Audit data is stored in hot storage.
   * 
   * @example
   * 7
   */
  hotRetention?: number;
  /**
   * @remarks
   * The time when the hot data storage was enabled. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1683712800000
   */
  hotStartTime?: number;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * None
   */
  logFilter?: string;
  /**
   * @remarks
   * Indicates whether the SQL Explorer feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  requestEnable?: boolean;
  /**
   * @remarks
   * The time when the SQL Explorer feature was enabled. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1683712800000
   */
  requestStartTime?: number;
  /**
   * @remarks
   * The time when DAS Enterprise Edition V1 expired. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1715335200000
   */
  requestStopTime?: number;
  /**
   * @remarks
   * The total storage duration of the SQL Explorer and Audit data. Unit: day.
   * 
   * @example
   * 30
   */
  retention?: number;
  /**
   * @remarks
   * Indicates whether DAS Enterprise Edition is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  sqlLogEnable?: boolean;
  /**
   * @remarks
   * The state of data migration. Valid values:
   * 
   * *   **FINISH**: The historical data is migrated.
   * *   **RUNNING**: The historical data is being migrated.
   * *   **FAILURE**: The historical data fails to be migrated.
   * 
   * @example
   * FINISH
   */
  sqlLogState?: string;
  /**
   * @remarks
   * The time when DAS Enterprise Edition was enabled. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1683712800000
   */
  sqlLogVisibleTime?: number;
  /**
   * @remarks
   * The latest version of DAS Enterprise Edition that supports the database instance. Valid values:
   * 
   * *   **SQL_LOG_V0**: DAS Enterprise Edition V0.
   * *   **SQL_LOG_V1**: DAS Enterprise Edition V1.
   * *   **SQL_LOG_V2**: DAS Enterprise Edition V2.
   * *   **SQL_LOG_V3**: DAS Enterprise Edition V3.
   * *   **SQL_LOG_NOT_ENABLE**: DAS Enterprise Edition is not enabled.
   * *   **SQL_LOG_NOT_SUPPORT**: DAS Enterprise Edition is not supported.
   * 
   * @example
   * SQL_LOG_V3
   */
  supportVersion?: string;
  /**
   * @remarks
   * The version of DAS Enterprise Edition that is enabled for the database instance. Valid values:
   * 
   * *   **SQL_LOG_V0**: DAS Enterprise Edition V0.
   * *   **SQL_LOG_V1**: DAS Enterprise Edition V1.
   * *   **SQL_LOG_V2**: DAS Enterprise Edition V2.
   * *   **SQL_LOG_V3**: DAS Enterprise Edition V3.
   * *   **SQL_LOG_NOT_ENABLE**: DAS Enterprise Edition is not enabled.
   * *   **SQL_LOG_NOT_SUPPORT**: DAS Enterprise Edition is not supported.
   * 
   * @example
   * SQL_LOG_V3
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      coldEnable: 'ColdEnable',
      coldRetention: 'ColdRetention',
      coldStartTime: 'ColdStartTime',
      collectorVersion: 'CollectorVersion',
      hotEnable: 'HotEnable',
      hotRetention: 'HotRetention',
      hotStartTime: 'HotStartTime',
      logFilter: 'LogFilter',
      requestEnable: 'RequestEnable',
      requestStartTime: 'RequestStartTime',
      requestStopTime: 'RequestStopTime',
      retention: 'Retention',
      sqlLogEnable: 'SqlLogEnable',
      sqlLogState: 'SqlLogState',
      sqlLogVisibleTime: 'SqlLogVisibleTime',
      supportVersion: 'SupportVersion',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coldEnable: 'boolean',
      coldRetention: 'number',
      coldStartTime: 'number',
      collectorVersion: 'string',
      hotEnable: 'boolean',
      hotRetention: 'number',
      hotStartTime: 'number',
      logFilter: 'string',
      requestEnable: 'boolean',
      requestStartTime: 'number',
      requestStopTime: 'number',
      retention: 'number',
      sqlLogEnable: 'boolean',
      sqlLogState: 'string',
      sqlLogVisibleTime: 'number',
      supportVersion: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySqlLogConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 403
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: ModifySqlLogConfigResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request was successful, **Successful** is returned. If the request failed, an error message is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 03C88D8E-1541-518E-8BFF-BEC6589B6334
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * False
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ModifySqlLogConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

