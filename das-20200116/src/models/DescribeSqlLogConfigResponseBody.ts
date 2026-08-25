// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSqlLogConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether cold data storage is enabled. Valid values:
   * - **true**: Enabled.
   * - **false**: Not enabled.
   * 
   * @example
   * true
   */
  coldEnable?: boolean;
  /**
   * @remarks
   * The cold data storage duration. Unit: days.
   * 
   * @example
   * 23
   */
  coldRetention?: number;
  /**
   * @remarks
   * The start time of cold data storage. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1683712800000
   */
  coldStartTime?: number;
  /**
   * @remarks
   * The collector version. Valid values:
   * - **MYSQL_V0**: MySQL V0.
   * - **MYSQL_V1**: MySQL V1.
   * - **MYSQL_V2**: MySQL V2.
   * - **MYSQL_V3**: MySQL V3.
   * - **PG_V1**: PostgreSQL V1.
   * - **rdspg_v1**: RDS PostgreSQL V1.
   * - **polarpg_v1**: PolarDB for PostgreSQL V1.
   * 
   * @example
   * MYSQL_V3
   */
  collectorVersion?: string;
  /**
   * @remarks
   * Indicates whether SQL Explorer is enabled. This parameter is an alias of SqlLogEnable.
   */
  enable?: boolean;
  /**
   * @remarks
   * Indicates whether hot data storage is enabled. Valid values:
   * - **true**: Enabled.
   * - **false**: Not enabled.
   * 
   * @example
   * true
   */
  hotEnable?: boolean;
  /**
   * @remarks
   * The hot data storage duration. Unit: days.
   * 
   * @example
   * 7
   */
  hotRetention?: number;
  /**
   * @remarks
   * The start time of hot data storage. The value is a UNIX timestamp. Unit: milliseconds.
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
   * Indicates whether SQL Explorer is enabled. Valid values:
   * - **true**: Enabled.
   * - **false**: Not enabled.
   * 
   * @example
   * true
   */
  requestEnable?: boolean;
  /**
   * @remarks
   * The time when SQL Explorer was enabled. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1683712800000
   */
  requestStartTime?: number;
  /**
   * @remarks
   * The expiration time of DAS Enterprise Edition V1. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1715335200000
   */
  requestStopTime?: number;
  /**
   * @remarks
   * The total data storage duration, which is the sum of **HotRetention** and **ColdRetention**. Unit: days.
   * 
   * @example
   * 30
   */
  retention?: number;
  /**
   * @remarks
   * Indicates whether DAS Enterprise Edition is enabled. Valid values:
   * - **true**: Enabled.
   * - **false**: Not enabled.
   * 
   * @example
   * true
   */
  sqlLogEnable?: boolean;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * None
   */
  sqlLogSource?: string;
  /**
   * @remarks
   * The data migration status. Valid values:
   * 
   * - **FINISH**: Historical data migration is complete.
   * - **RUNNING**: Historical data migration is in progress.
   * - **FAILURE**: Historical data migration failed.
   * 
   * @example
   * FINISH
   */
  sqlLogState?: string;
  /**
   * @remarks
   * The time when DAS Enterprise Edition was enabled. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1683712800000
   */
  sqlLogVisibleTime?: number;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * None
   */
  supportMigration?: boolean;
  /**
   * @remarks
   * Indicates whether the engine and region of the current instance support security audit activation. This field only indicates product capability and does not indicate that security audit is already enabled.
   */
  supportSecurityAudit?: boolean;
  /**
   * @remarks
   * The latest DAS Enterprise Edition version supported by the current instance. Valid values:
   * - **SQL_LOG_V0**: Enterprise Edition V0.
   * - **SQL_LOG_V1**: Enterprise Edition V1.
   * - **SQL_LOG_V2**: Enterprise Edition V2.
   * - **SQL_LOG_V3**: Enterprise Edition V3.
   * - **SQL_LOG_NOT_ENABLE**: Enterprise Edition is not enabled.
   * - **SQL_LOG_NOT_SUPPORT**: Enterprise Edition is not supported.
   * 
   * @example
   * SQL_LOG_V3
   */
  supportVersion?: string;
  /**
   * @remarks
   * The current DAS Enterprise Edition version that is enabled. Valid values:
   * - **SQL_LOG_V0**: Enterprise Edition V0.
   * - **SQL_LOG_V1**: Enterprise Edition V1.
   * - **SQL_LOG_V2**: Enterprise Edition V2.
   * - **SQL_LOG_V3**: Enterprise Edition V3.
   * - **SQL_LOG_NOT_ENABLE**: Enterprise Edition is not enabled.
   * - **SQL_LOG_NOT_SUPPORT**: Enterprise Edition is not supported.
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
      enable: 'Enable',
      hotEnable: 'HotEnable',
      hotRetention: 'HotRetention',
      hotStartTime: 'HotStartTime',
      logFilter: 'LogFilter',
      requestEnable: 'RequestEnable',
      requestStartTime: 'RequestStartTime',
      requestStopTime: 'RequestStopTime',
      retention: 'Retention',
      sqlLogEnable: 'SqlLogEnable',
      sqlLogSource: 'SqlLogSource',
      sqlLogState: 'SqlLogState',
      sqlLogVisibleTime: 'SqlLogVisibleTime',
      supportMigration: 'SupportMigration',
      supportSecurityAudit: 'SupportSecurityAudit',
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
      enable: 'boolean',
      hotEnable: 'boolean',
      hotRetention: 'number',
      hotStartTime: 'number',
      logFilter: 'string',
      requestEnable: 'boolean',
      requestStartTime: 'number',
      requestStopTime: 'number',
      retention: 'number',
      sqlLogEnable: 'boolean',
      sqlLogSource: 'string',
      sqlLogState: 'string',
      sqlLogVisibleTime: 'number',
      supportMigration: 'boolean',
      supportSecurityAudit: 'boolean',
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

export class DescribeSqlLogConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeSqlLogConfigResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * >If the request is successful, **Successful** is returned. If the request fails, an error message is returned, such as an error code.
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
   * 0A74B755-98B7-59DB-8724-1321B394****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * * **true**: The request was successful.
   * * **false**: The request failed.
   * 
   * @example
   * true
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
      data: DescribeSqlLogConfigResponseBodyData,
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

