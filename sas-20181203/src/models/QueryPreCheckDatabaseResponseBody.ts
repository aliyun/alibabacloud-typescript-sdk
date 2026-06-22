// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPreCheckDatabaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the pre-check was completed.
   * 
   * @example
   * 1657524396
   */
  completedTime?: number;
  /**
   * @remarks
   * The time when the pre-check started.
   * 
   * @example
   * 1660448660
   */
  createdTime?: number;
  /**
   * @remarks
   * The status description of the pre-check task. Valid values:
   * 
   * - **completed**: Completed.
   * - **created**: Started.
   * - **error**: Pre-check failed.
   * 
   * @example
   * completed
   */
  description?: string;
  /**
   * @remarks
   * The pre-check progress. Valid values: 0 to 100.
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each API request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * CE500770-42D3-442E-9DDD-156E0F9F****
   */
  requestId?: string;
  /**
   * @remarks
   * The task result of the dry run node. The value is a JSON string. The KEY valid values are:
   * 
   * - **instanceId**: the instance ID of the server where the database resides.
   * - **checkTime**: the dry run time.
   * - **sourceType**: the database type.
   * - **results**: the dry run items and task results.
   *     - **item**: the dry run item.
   *     - **result**: the dry run task result.
   * 
   * > Dry run item description
   * > - MSSQL
   * >     - **OSS_INTERNAL_ENDPOINT_CONNECTIVITY**: OSS connectivity check.	
   * >     - **SERVICE_CONNECTIVITY**: control network connectivity check.
   * >     - **SQL_SERVER_DB_IN_SIMPLE_RECOVERY_MODE**: recovery mode check.
   * >     - **SQL_SERVER_DB_NOT_ONLINE**: SQL Server database status check.
   * > - ORACLE
   * >     - **OSS_INTERNAL_ENDPOINT_CONNECTIVITY**: OSS connectivity check.	
   * >     - **SERVICE_CONNECTIVITY**: control network connectivity check.
   * >     - **ORACLE_INSTANCE_STATUS**: Oracle instance status check.
   * >     - **ORACLE_DB_STATUS**: Oracle database status check.
   * >     - **ARCHIVELOG**: archive mode check.
   * > - MYSQL
   * >     - **OSS_INTERNAL_ENDPOINT_CONNECTIVITY**: OSS connectivity check.	
   * >     - **SERVICE_CONNECTIVITY**: control network connectivity check.
   * >     - **MYSQL_VERSION**: version check for full backup support.
   * >     - **MYSQL_BINLOG**: BINLOG check.
   * 
   * @example
   * [
   *     {
   *         "instanceId": "i-wz91if83t97xgtn2****",
   *         "checkTime": 1671245753,
   *         "sourceType": "MSSQL",
   *         "results":
   *         [
   *             {
   *                 "item": "OSS_INTERNAL_ENDPOINT_CONNECTIVITY",
   *                 "result": "PASSED"
   *             },
   *             {
   *                 "item": "SERVICE_CONNECTIVITY",
   *                 "result": "PASSED"
   *             },
   *             {
   *                 "item": "SQL_SERVER_DB_IN_SIMPLE_RECOVERY_MODE",
   *                 "result": "WARNING"
   *             },
   *             {
   *                 "item": "SQL_SERVER_DB_NOT_ONLINE",
   *                 "result": "PASSED"
   *             }
   *         ]
   *     }
   * ]
   */
  result?: string;
  /**
   * @remarks
   * The time when the pre-check was last updated.
   * 
   * @example
   * 1671084106
   */
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      completedTime: 'CompletedTime',
      createdTime: 'CreatedTime',
      description: 'Description',
      progress: 'Progress',
      requestId: 'RequestId',
      result: 'Result',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedTime: 'number',
      createdTime: 'number',
      description: 'string',
      progress: 'number',
      requestId: 'string',
      result: 'string',
      updatedTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

