// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTableRequestTableColumns extends $dara.Model {
  /**
   * @remarks
   * The column description.
   * 
   * @example
   * desc
   */
  columnDesc?: string;
  /**
   * @remarks
   * The column name.
   * 
   * This parameter is required.
   * 
   * @example
   * column1
   */
  columnName?: string;
  /**
   * @remarks
   * The data type.
   * 
   * This parameter is required.
   * 
   * @example
   * string
   */
  dataType?: string;
  static names(): { [key: string]: string } {
    return {
      columnDesc: 'ColumnDesc',
      columnName: 'ColumnName',
      dataType: 'DataType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnDesc: 'string',
      columnName: 'string',
      dataType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTableRequest extends $dara.Model {
  /**
   * @remarks
   * The connector ID.
   * 
   * This parameter is required.
   * 
   * @example
   * connector-d51861492df64257
   */
  connectorId?: string;
  /**
   * @remarks
   * The column information of the table.
   * 
   * This parameter is required.
   */
  tableColumns?: AddTableRequestTableColumns[];
  tableDesc?: string;
  /**
   * @remarks
   * The table name.
   * 
   * This parameter is required.
   * 
   * @example
   * ads_wjjr_basc_enterprise_di
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      connectorId: 'ConnectorId',
      tableColumns: 'TableColumns',
      tableDesc: 'TableDesc',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorId: 'string',
      tableColumns: { 'type': 'array', 'itemType': AddTableRequestTableColumns },
      tableDesc: 'string',
      tableName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tableColumns)) {
      $dara.Model.validateArray(this.tableColumns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

