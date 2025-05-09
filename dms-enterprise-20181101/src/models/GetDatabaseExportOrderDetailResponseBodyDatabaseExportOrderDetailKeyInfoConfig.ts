// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetailKeyInfoConfigExportTypes } from "./GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetailKeyInfoConfigExportTypes";
import { GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetailKeyInfoConfigSQLExtOption } from "./GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetailKeyInfoConfigSqlextOption";
import { GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetailKeyInfoConfigSelectedTables } from "./GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetailKeyInfoConfigSelectedTables";


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

