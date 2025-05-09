// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatabaseExportOrderRequestPluginParamConfig extends $dara.Model {
  /**
   * @remarks
   * The export options for big data. The options are used to filter the big data to be exported. You can leave this parameter empty.
   * 
   * This parameter is required.
   */
  dataOption?: string[];
  /**
   * @remarks
   * The type of data that you want to export. Valid values:
   * 
   * *   **DATA**: The data of the database is exported.
   * *   **STRUCT**: The schema of the database is exported.
   * *   **DATA_STRUCT**: The data and schema of the database are exported.
   * 
   * This parameter is required.
   * 
   * @example
   * DATA
   */
  exportContent?: string;
  /**
   * @remarks
   * The types of schemas that you want to export.
   */
  exportTypes?: string[];
  /**
   * @remarks
   * The extension options of the SQL script. You can leave this parameter empty.
   * 
   * This parameter is required.
   */
  SQLExtOption?: string[];
  /**
   * @remarks
   * The tables that you want to export.
   */
  selectedTables?: string[];
  /**
   * @remarks
   * The conditions used to filter the tables to be exported.
   */
  tables?: { [key: string]: string };
  /**
   * @remarks
   * The format in which the database is exported. Valid values:
   * 
   * *   **SQL**
   * *   **CSV**
   * *   **XLSX**
   * 
   * This parameter is required.
   * 
   * @example
   * SQL
   */
  targetOption?: string;
  static names(): { [key: string]: string } {
    return {
      dataOption: 'DataOption',
      exportContent: 'ExportContent',
      exportTypes: 'ExportTypes',
      SQLExtOption: 'SQLExtOption',
      selectedTables: 'SelectedTables',
      tables: 'Tables',
      targetOption: 'TargetOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataOption: { 'type': 'array', 'itemType': 'string' },
      exportContent: 'string',
      exportTypes: { 'type': 'array', 'itemType': 'string' },
      SQLExtOption: { 'type': 'array', 'itemType': 'string' },
      selectedTables: { 'type': 'array', 'itemType': 'string' },
      tables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      targetOption: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataOption)) {
      $dara.Model.validateArray(this.dataOption);
    }
    if(Array.isArray(this.exportTypes)) {
      $dara.Model.validateArray(this.exportTypes);
    }
    if(Array.isArray(this.SQLExtOption)) {
      $dara.Model.validateArray(this.SQLExtOption);
    }
    if(Array.isArray(this.selectedTables)) {
      $dara.Model.validateArray(this.selectedTables);
    }
    if(this.tables) {
      $dara.Model.validateMap(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

