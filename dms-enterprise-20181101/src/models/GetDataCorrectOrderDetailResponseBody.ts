// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailConfigDetailCronExtConfig extends $dara.Model {
  /**
   * @remarks
   * The number of times defragmentation is performed. This parameter is valid only if the value of OptimizeTableAfterEveryClearTimes is greater than 0.
   * 
   * @example
   * 0
   */
  currentClearTaskCount?: number;
  /**
   * @remarks
   * Indicates whether the Periodically Optimize Table feature is enabled. Valid values:
   * 
   * *   **0** (default): The feature is disabled.
   * *   **A value greater than 0**: The feature is enabled. The value indicates the number of cleanups after which the system performs defragmentation.
   * 
   * @example
   * 0
   */
  optimizeTableAfterEveryClearTimes?: number;
  static names(): { [key: string]: string } {
    return {
      currentClearTaskCount: 'CurrentClearTaskCount',
      optimizeTableAfterEveryClearTimes: 'OptimizeTableAfterEveryClearTimes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentClearTaskCount: 'number',
      optimizeTableAfterEveryClearTimes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailConfigDetailImportExtConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the first row of the CSV file contains field names. Valid values:
   * 
   * *   **true**: The first row in the CSV file contains field names.
   * *   **false**: The first row in the CSV file contains data.
   * 
   * >  This parameter is valid if the value of **FileType** is **CSV** or **EXCEL**.
   * 
   * @example
   * true
   */
  csvFirstRowIsColumnDef?: boolean;
  /**
   * @remarks
   * Indicates whether an error that occurs is ignored. Valid values:
   * 
   * *   **true**: If an error occurs when SQL statements are being executed, DMS skips the current SQL statement and continues to execute subsequent SQL statements.
   * *   **false**: If an error occurs when SQL statements are being executed, DMS stops executing subsequent SQL statements.
   * 
   * @example
   * false
   */
  ignoreError?: boolean;
  /**
   * @remarks
   * The import mode. Valid values:
   * 
   * *   **FAST_MODE**: fast mode. In the Execute step, the uploaded file is read and SQL statements are executed to import data to the specified destination database. Compared with the security mode, this mode can be used to import data in a less secure but more efficient manner.
   * *   **SAFE_MODE**: security mode. In the Precheck step, the uploaded file is parsed, and SQL statements or CSV file data is cached. In the Execute step, the cached SQL statements are read and executed to import data, or the cached CSV file data is read and imported to the specified destination database. Compared with the fast mode, this mode can be used to import data in a more secure but less efficient manner.
   * 
   * @example
   * FAST_MODE
   */
  importMode?: string;
  /**
   * @remarks
   * The mode in which data is to be imported to the destination table. Valid values:
   * 
   * *   **INSERT**: The database checks the primary key during data insertion. If the primary key is duplicated, an error is reported.
   * *   **INSERT_IGNORE**: If the imported data contains data records that are the same as those in the destination table, the new data records are ignored.
   * *   **REPLACE_INTO**: If the imported data contains a row that has the same value for the primary key or unique index as an existing row in the destination table, the system deletes the existing row and inserts the new row into the destination table.
   * 
   * >  This parameter is valid if the value of FileType is CSV or EXCEL.
   * 
   * @example
   * INSERT
   */
  insertType?: string;
  static names(): { [key: string]: string } {
    return {
      csvFirstRowIsColumnDef: 'CsvFirstRowIsColumnDef',
      ignoreError: 'IgnoreError',
      importMode: 'ImportMode',
      insertType: 'InsertType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csvFirstRowIsColumnDef: 'boolean',
      ignoreError: 'boolean',
      importMode: 'string',
      insertType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailConfigDetail extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the task is a scheduled task for historical data cleanup. This parameter is a reserved parameter and is valid only if the value of DetailType is CRON_CLEAR_DATA.
   * 
   * @example
   * true
   */
  cron?: boolean;
  /**
   * @remarks
   * The number of times the scheduled task is run. This parameter is valid only if the value of DetailType is CRON_CLEAR_DATA.
   * 
   * @example
   * 0
   */
  cronCallTimes?: number;
  /**
   * @remarks
   * The additional configuration information about historical data cleanup. This parameter is valid only if the value of DetailType is CRON_CLEAR_DATA.
   */
  cronExtConfig?: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailConfigDetailCronExtConfig;
  /**
   * @remarks
   * The CRON expression of the scheduled task. This parameter is valid only if the value of DetailType is CRON_CLEAR_DATA.
   * 
   * @example
   * 0 0 2 * * ?
   */
  cronFormat?: string;
  /**
   * @remarks
   * The time when the task was last run.
   * 
   * @example
   * 2024-04-19 02:00:00.0
   */
  cronLastCallStartTime?: string;
  /**
   * @remarks
   * The time when the task is run next time. This parameter is returned only if the value of CronStatus is SUCCESS.
   * 
   * @example
   * 2024-04-19 02:00:00
   */
  cronNextCallTime?: string;
  /**
   * @remarks
   * The state of the scheduled task. If this parameter is empty, the task is not run. Valid values:
   * 
   * *   PAUSE: The task is suspended.
   * *   WAITING: The task is waiting to be run.
   * *   SUCCESS: The task is run.
   * 
   * @example
   * SUCCESS
   */
  cronStatus?: string;
  /**
   * @remarks
   * The name of the table to which data is to be imported. This parameter is valid only if the value of DetailType is BIG_FILE. If the value of FileType is SQL, this parameter is empty.
   * 
   * @example
   * tb_import_tb_name
   */
  csvTableName?: string;
  /**
   * @remarks
   * The ID of the current data change task. This is a reserved parameter and can be ignored.
   * 
   * @example
   * 13***
   */
  currentTaskId?: number;
  /**
   * @remarks
   * The type of the ticket. Valid values:
   * 
   * *   COMMON: regular data change.
   * *   CHUNK_DML: lock-free data change.
   * *   BIG_FILE: large data import.
   * *   CRON_CLEAR_DATA: historical data cleanup.
   * *   PROCEDURE: programmable object change.
   * 
   * @example
   * BIG_FILE
   */
  detailType?: string;
  /**
   * @remarks
   * The execution duration of the scheduled task. Unit: hour. This parameter is valid only if the value of DetailType is CRON_CLEAR_DATA. If the value is greater than 0, an execution duration is set.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The encoding method of the file. This parameter may be empty, which indicates the value of AUTO. Valid values:
   * 
   * *   **AUTO**: automatic identification.
   * *   **UTF-8**: UTF-8 encoding.
   * *   **GBK**: GBK encoding.
   * *   **ISO-8859-1**: ISO-8859-1 encoding.
   * 
   * @example
   * UTF-8
   */
  fileEncoding?: string;
  /**
   * @remarks
   * The type of the file to be imported. This parameter is valid if the value of DetailType is BIG_FILE. Valid values:
   * 
   * *   **SQL**: an SQL file.
   * *   **CSV**: a CSV file.
   * *   **EXCEL**: an Excel file.
   * *   **JSON**: a JSON file, which is supported only by MongoDB databases.
   * 
   * @example
   * CSV
   */
  fileType?: string;
  /**
   * @remarks
   * The additional configuration information about data import. This parameter is valid if the value of DetailType is BIG_FILE.
   */
  importExtConfig?: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailConfigDetailImportExtConfig;
  static names(): { [key: string]: string } {
    return {
      cron: 'Cron',
      cronCallTimes: 'CronCallTimes',
      cronExtConfig: 'CronExtConfig',
      cronFormat: 'CronFormat',
      cronLastCallStartTime: 'CronLastCallStartTime',
      cronNextCallTime: 'CronNextCallTime',
      cronStatus: 'CronStatus',
      csvTableName: 'CsvTableName',
      currentTaskId: 'CurrentTaskId',
      detailType: 'DetailType',
      duration: 'Duration',
      fileEncoding: 'FileEncoding',
      fileType: 'FileType',
      importExtConfig: 'ImportExtConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cron: 'boolean',
      cronCallTimes: 'number',
      cronExtConfig: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailConfigDetailCronExtConfig,
      cronFormat: 'string',
      cronLastCallStartTime: 'string',
      cronNextCallTime: 'string',
      cronStatus: 'string',
      csvTableName: 'string',
      currentTaskId: 'number',
      detailType: 'string',
      duration: 'number',
      fileEncoding: 'string',
      fileType: 'string',
      importExtConfig: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailConfigDetailImportExtConfig,
    };
  }

  validate() {
    if(this.cronExtConfig && typeof (this.cronExtConfig as any).validate === 'function') {
      (this.cronExtConfig as any).validate();
    }
    if(this.importExtConfig && typeof (this.importExtConfig as any).validate === 'function') {
      (this.importExtConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailDatabaseListDatabase extends $dara.Model {
  /**
   * @remarks
   * The database ID.
   * 
   * @example
   * 1860****
   */
  dbId?: number;
  /**
   * @remarks
   * The engine of the database.
   * 
   * @example
   * mysql
   */
  dbType?: string;
  /**
   * @remarks
   * The type of the environment to which the database belongs. Valid values:
   * 
   * *   product: production environment.
   * *   dev: development environment.
   * *   pre: pre-release environment.
   * *   test: test environment.
   * *   sit: system integration testing (SIT) environment
   * *   uat: user acceptance testing (UAT) environment.
   * *   pet: stress testing environment.
   * *   stag: staging environment.
   * 
   * @example
   * product
   */
  envType?: string;
  /**
   * @remarks
   * Indicates whether the database is a logical database. Valid values:
   * 
   * *   **true.**: The database is a logical database.
   * *   **false**: The database is a physical database.
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The name that is used to search for the database.
   * 
   * @example
   * xxx@xxx:3306
   */
  searchName?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      dbType: 'DbType',
      envType: 'EnvType',
      logic: 'Logic',
      searchName: 'SearchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      dbType: 'string',
      envType: 'string',
      logic: 'boolean',
      searchName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailDatabaseList extends $dara.Model {
  database?: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailDatabaseListDatabase[];
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: { 'type': 'array', 'itemType': GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailDatabaseListDatabase },
    };
  }

  validate() {
    if(Array.isArray(this.database)) {
      $dara.Model.validateArray(this.database);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailOrderDetail extends $dara.Model {
  /**
   * @remarks
   * The number of affected rows that is obtained by the precheck.
   * 
   * @example
   * 100
   */
  actualAffectRows?: number;
  /**
   * @remarks
   * The name of the attachment that contains the SQL statements used to change data.
   * 
   * @example
   * xxx
   */
  attachmentName?: string;
  /**
   * @remarks
   * The category of the reason for the data change.
   * 
   * @example
   * test
   */
  classify?: string;
  /**
   * @remarks
   * The estimated number of affected rows.
   * 
   * @example
   * 100
   */
  estimateAffectRows?: number;
  /**
   * @remarks
   * The executed SQL statements.
   * 
   * @example
   * update t1 set name = \\"xxx\\" where id <= 100
   */
  exeSQL?: string;
  /**
   * @remarks
   * Indicates whether the precheck result is ignored. Valid values:
   * 
   * - **true**: The precheck result is ignored.
   * - **false**: The precheck result is not ignored.
   * 
   * @example
   * false
   */
  ignoreAffectRows?: boolean;
  /**
   * @remarks
   * The reason why the precheck result is ignored.
   * 
   * @example
   * test
   */
  ignoreAffectRowsReason?: string;
  /**
   * @remarks
   * The name of the attachment that contains the SQL statements used to roll back the data change.
   * 
   * @example
   * test
   */
  rbAttachmentName?: string;
  /**
   * @remarks
   * The SQL statements used to roll back the data change.
   * 
   * @example
   * empty
   */
  rbSQL?: string;
  /**
   * @remarks
   * The format of the SQL statements used to roll back the data change. Valid values:
   * 
   * - **TEXT**: text
   * - **ATTACHMENT**: attachment
   * 
   * @example
   * text
   */
  rbSQLType?: string;
  /**
   * @remarks
   * The format of the SQL statements used to change data. Valid values:
   * 
   * - **TEXT**: text
   * - **ATTACHMENT**: attachment
   * 
   * @example
   * text
   */
  sqlType?: string;
  static names(): { [key: string]: string } {
    return {
      actualAffectRows: 'ActualAffectRows',
      attachmentName: 'AttachmentName',
      classify: 'Classify',
      estimateAffectRows: 'EstimateAffectRows',
      exeSQL: 'ExeSQL',
      ignoreAffectRows: 'IgnoreAffectRows',
      ignoreAffectRowsReason: 'IgnoreAffectRowsReason',
      rbAttachmentName: 'RbAttachmentName',
      rbSQL: 'RbSQL',
      rbSQLType: 'RbSQLType',
      sqlType: 'SqlType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualAffectRows: 'number',
      attachmentName: 'string',
      classify: 'string',
      estimateAffectRows: 'number',
      exeSQL: 'string',
      ignoreAffectRows: 'boolean',
      ignoreAffectRowsReason: 'string',
      rbAttachmentName: 'string',
      rbSQL: 'string',
      rbSQLType: 'string',
      sqlType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailPreCheckDetailTaskCheckDO extends $dara.Model {
  /**
   * @remarks
   * The state of the precheck. Valid values:
   * 
   * *   **WAITING**: The ticket is pending precheck.
   * *   **RUNNING**: The ticket is being prechecked.
   * *   **SUCCESS**: The ticket passes the precheck.
   * *   **FAIL**: The ticket fails the precheck.
   * 
   * @example
   * SUCCESS
   */
  checkStatus?: string;
  /**
   * @remarks
   * The check step of the precheck. Valid values:
   * 
   * *   **SQL_PARSE**: The system checks the syntax of the SQL statement.
   * *   **SQL_TYPE_CHECK**: The system checks the type of the SQL statement.
   * *   **PERMISSION_CHECK**: The system checks the permissions required for the data change.
   * *   **ROW_CHECK**: The system checks the number of affected rows.
   * 
   * @example
   * PERMISSION_CHECK
   */
  checkStep?: string;
  /**
   * @remarks
   * The message that appears when a check step is executed.
   * 
   * @example
   * tip messsage
   */
  userTip?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      checkStep: 'CheckStep',
      userTip: 'UserTip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      checkStep: 'string',
      userTip: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailPreCheckDetail extends $dara.Model {
  taskCheckDO?: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailPreCheckDetailTaskCheckDO[];
  static names(): { [key: string]: string } {
    return {
      taskCheckDO: 'TaskCheckDO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskCheckDO: { 'type': 'array', 'itemType': GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailPreCheckDetailTaskCheckDO },
    };
  }

  validate() {
    if(Array.isArray(this.taskCheckDO)) {
      $dara.Model.validateArray(this.taskCheckDO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetail extends $dara.Model {
  /**
   * @remarks
   * The configurations of the ticket. This parameter is used to store the configuration information specific to a data change ticket type.
   */
  configDetail?: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailConfigDetail;
  /**
   * @remarks
   * The information about the database in which data is changed.
   */
  databaseList?: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailDatabaseList;
  /**
   * @remarks
   * The execution mode of the ticket after the ticket is approved. Valid values:
   * 
   * - **COMMITOR**: The data change is performed by the user who submits the ticket.
   * - **AUTO**: The data change is automatically performed after the ticket is approved.
   * - **LAST_AUDITOR**: The data change is performed by the last approver of the ticket.
   * 
   * @example
   * COMMITOR
   */
  execMode?: string;
  /**
   * @remarks
   * The details of the ticket.
   */
  orderDetail?: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailOrderDetail;
  /**
   * @remarks
   * The precheck details of the ticket.
   */
  preCheckDetail?: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailPreCheckDetail;
  /**
   * @remarks
   * The specific state of the data change ticket. Valid values:
   * 
   * >  The state of the ticket is not exactly equivalent to the status code for the ticket. To query the status code of the ticket, you can call the [GetOrderBaseInfo](https://help.aliyun.com/document_detail/465868.html) operation and check the value of StatusCode in the response.
   * 
   * *   **new**: The ticket is created.
   * *   **precheck**: The ticket is in the pre-check phase.
   * *   **precheckFailed**: The ticket failed to pass the precheck.
   * *   **precheck_success**: The ticket passes the precheck and waits to be submitted for approval.
   * *   **toaudit**: The ticket is being reviewed.
   * *   **Approved**: The ticket is approved.
   * *   **reject**: The ticket is rejected.
   * *   **waiting**: The task is submitted and waits to be scheduled.
   * *   **processing**: The task is being executed.
   * *   **Success**: The task is successful.
   * 
   * @example
   * approved
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configDetail: 'ConfigDetail',
      databaseList: 'DatabaseList',
      execMode: 'ExecMode',
      orderDetail: 'OrderDetail',
      preCheckDetail: 'PreCheckDetail',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configDetail: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailConfigDetail,
      databaseList: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailDatabaseList,
      execMode: 'string',
      orderDetail: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailOrderDetail,
      preCheckDetail: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailPreCheckDetail,
      status: 'string',
    };
  }

  validate() {
    if(this.configDetail && typeof (this.configDetail as any).validate === 'function') {
      (this.configDetail as any).validate();
    }
    if(this.databaseList && typeof (this.databaseList as any).validate === 'function') {
      (this.databaseList as any).validate();
    }
    if(this.orderDetail && typeof (this.orderDetail as any).validate === 'function') {
      (this.orderDetail as any).validate();
    }
    if(this.preCheckDetail && typeof (this.preCheckDetail as any).validate === 'function') {
      (this.preCheckDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCorrectOrderDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the data change ticket.
   */
  dataCorrectOrderDetail?: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetail;
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 427688B8-ADFB-4C4E-9D45-EF5C1FD6E23D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataCorrectOrderDetail: 'DataCorrectOrderDetail',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCorrectOrderDetail: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetail,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.dataCorrectOrderDetail && typeof (this.dataCorrectOrderDetail as any).validate === 'function') {
      (this.dataCorrectOrderDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

