// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOpLogRequest extends $dara.Model {
  /**
   * @remarks
   * DatabaseName.
   * 
   * @example
   * dmstest@rm-bp1qb97d4b****.mysql.rds.aliyuncs.com:3306[poc_dev]
   */
  databaseName?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the yyyy-MM-DD HH:mm:ss format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-03-29 10:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The functional module for which you want to query operation logs. If you do not specify this parameter, operation logs for all functional modules are returned. Valid values:
   * 
   * *   **PERMISSION**: permissions
   * *   **OWNER**: data owner
   * *   **SQL_CONSOLE**: data query
   * *   **SQL_CONSOLE_EXPORT**: query result export
   * *   **DATA_CHANGE**: data change
   * *   **DATA_EXPORT**: data export
   * *   **SQL_REVIEW**: SQL review
   * *   **DT_SYNC**: database and table synchronization
   * *   **DT_DETAIL**: database and table details
   * *   **DB_TASK**: task management
   * *   **INSTANCE_MANAGE**: instance management
   * *   **USER_MANAGE**: user management
   * *   **SECURITY_RULE**: security rules
   * *   **CONFIG_MANAGE**: configuration management
   * *   **RESOURCE_AUTH**: resource authorization
   * *   **ACCESS_WHITE_IP**: access IP address whitelist
   * *   **NDDL**: schema design
   * *   **DSQL_CONSOLE**: cross-database data query
   * *   **DSQL_CONSOLE_EXPORT**: cross-database query result export
   * *   **DATA_TRACT**: data tracking
   * *   **DATA_QUALITY**: data quality
   * *   **DATALINK_MANAGE** :DBLink management
   * *   **DATASEC_MANAGE**: sensitive data management
   * *   **SELL**: sales
   * 
   * @example
   * SECURITY_RULE
   */
  module?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values:
   * 
   * *   30
   * *   50
   * *   100
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the yyyy-MM-DD HH:mm:ss format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-03-23 10:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to query the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  /**
   * @remarks
   * UserNick.
   * 
   * @example
   * test_name
   */
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      endTime: 'EndTime',
      module: 'Module',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      tid: 'Tid',
      userNick: 'UserNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      endTime: 'string',
      module: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
      tid: 'number',
      userNick: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

