// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetailKeyInfoConfigExportTypes extends $dara.Model {
  exportTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      exportTypes: 'ExportTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.exportTypes)) {
      $dara.Model.validateArray(this.exportTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetailKeyInfoConfigSQLExtOption extends $dara.Model {
  SQLExtOption?: string[];
  static names(): { [key: string]: string } {
    return {
      SQLExtOption: 'SQLExtOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQLExtOption: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.SQLExtOption)) {
      $dara.Model.validateArray(this.SQLExtOption);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetailKeyInfoConfigSelectedTables extends $dara.Model {
  selectedTables?: string[];
  static names(): { [key: string]: string } {
    return {
      selectedTables: 'SelectedTables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      selectedTables: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.selectedTables)) {
      $dara.Model.validateArray(this.selectedTables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetailKeyInfoConfig extends $dara.Model {
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * dmstest
   */
  dbName?: string;
  /**
   * @remarks
   * The type of data that was exported. Valid values:
   * 
   * *   **DATA**: The data of the database was exported.
   * *   **STRUCT**: The schema of the database was exported.
   * *   **DATA_STRUCT**: The data and schema of the database were exported.
   * 
   * @example
   * DATA
   */
  exportContent?: string;
  /**
   * @remarks
   * The type of schema that was exported.
   */
  exportTypes?: GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetailKeyInfoConfigExportTypes;
  /**
   * @remarks
   * The extension options of the SQL script.
   */
  SQLExtOption?: GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetailKeyInfoConfigSQLExtOption;
  /**
   * @remarks
   * The tables that were exported from the database.
   */
  selectedTables?: GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetailKeyInfoConfigSelectedTables;
  /**
   * @remarks
   * The format in which the database was exported. Valid values:
   * 
   * *   **SQL**
   * *   **CSV**
   * *   **XLSX**
   * 
   * @example
   * SQL
   */
  targetOption?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      exportContent: 'ExportContent',
      exportTypes: 'ExportTypes',
      SQLExtOption: 'SQLExtOption',
      selectedTables: 'SelectedTables',
      targetOption: 'TargetOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      exportContent: 'string',
      exportTypes: GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetailKeyInfoConfigExportTypes,
      SQLExtOption: GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetailKeyInfoConfigSQLExtOption,
      selectedTables: GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetailKeyInfoConfigSelectedTables,
      targetOption: 'string',
    };
  }

  validate() {
    if(this.exportTypes && typeof (this.exportTypes as any).validate === 'function') {
      (this.exportTypes as any).validate();
    }
    if(this.SQLExtOption && typeof (this.SQLExtOption as any).validate === 'function') {
      (this.SQLExtOption as any).validate();
    }
    if(this.selectedTables && typeof (this.selectedTables as any).validate === 'function') {
      (this.selectedTables as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetailKeyInfo extends $dara.Model {
  /**
   * @remarks
   * The time when the ticket was submitted.
   * 
   * @example
   * 2023-04-13 13:44:59
   */
  auditDate?: string;
  /**
   * @remarks
   * The configuration information about the ticket.
   */
  config?: GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetailKeyInfoConfig;
  /**
   * @remarks
   * The database ID.
   * 
   * @example
   * 2583****
   */
  dbId?: number;
  /**
   * @remarks
   * The URL that is used to download the export result.
   * 
   * @example
   * https://oss.xxx.com
   */
  downloadURL?: string;
  static names(): { [key: string]: string } {
    return {
      auditDate: 'AuditDate',
      config: 'Config',
      dbId: 'DbId',
      downloadURL: 'DownloadURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditDate: 'string',
      config: GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetailKeyInfoConfig,
      dbId: 'number',
      downloadURL: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetail extends $dara.Model {
  /**
   * @remarks
   * The business background information of the database export ticket.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The user who submitted the ticket.
   * 
   * @example
   * dmsuser
   */
  committer?: string;
  /**
   * @remarks
   * The ID of the user who submitted the ticket. This ID is a user ID and is not the ID of an Alibaba Cloud account.
   * 
   * @example
   * 12***
   */
  committerId?: string;
  /**
   * @remarks
   * The ticket ID.
   * 
   * @example
   * 821****
   */
  id?: number;
  /**
   * @remarks
   * The key information about the ticket.
   */
  keyInfo?: GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetailKeyInfo;
  /**
   * @remarks
   * The execution logs.
   * 
   * @example
   * 2023-04-12 14:58:32:015 Database Dump Start.
   * 2023-04-12 14:58:32:096 set server side query timeout, sql : set max_execution_time = 0
   */
  log?: string;
  /**
   * @remarks
   * The name that is used to search for the database.
   * 
   * @example
   * test@xxx.xxx.xxx.xxx:3306
   */
  searchName?: string;
  /**
   * @remarks
   * The status description of the ticket.
   * 
   * @example
   * ticket approval
   */
  statusDesc?: string;
  /**
   * @remarks
   * The status description of the workflow.
   * 
   * @example
   * ticket approval
   */
  workflowStatusDesc?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      committer: 'Committer',
      committerId: 'CommitterId',
      id: 'Id',
      keyInfo: 'KeyInfo',
      log: 'Log',
      searchName: 'SearchName',
      statusDesc: 'StatusDesc',
      workflowStatusDesc: 'WorkflowStatusDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      committer: 'string',
      committerId: 'string',
      id: 'number',
      keyInfo: GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetailKeyInfo,
      log: 'string',
      searchName: 'string',
      statusDesc: 'string',
      workflowStatusDesc: 'string',
    };
  }

  validate() {
    if(this.keyInfo && typeof (this.keyInfo as any).validate === 'function') {
      (this.keyInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseExportOrderDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the database export ticket.
   */
  databaseExportOrderDetail?: GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetail;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * CFD8FE00-36D9-4C1B-940D-65A7B73D9066
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
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      databaseExportOrderDetail: 'DatabaseExportOrderDetail',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseExportOrderDetail: GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetail,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.databaseExportOrderDetail && typeof (this.databaseExportOrderDetail as any).validate === 'function') {
      (this.databaseExportOrderDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

