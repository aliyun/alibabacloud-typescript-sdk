// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTableRequestTableColumns extends $dara.Model {
  /**
   * @example
   * desc
   */
  columnDesc?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * column1
   */
  columnName?: string;
  /**
   * @remarks
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
   * This parameter is required.
   * 
   * @example
   * connector-d51861492df64257
   */
  connectorId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tableColumns?: AddTableRequestTableColumns[];
  /**
   * @remarks
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
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorId: 'string',
      tableColumns: { 'type': 'array', 'itemType': AddTableRequestTableColumns },
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

