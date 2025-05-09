// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableDBTopologyResponseBodyDBTopologyDataSourceListDatabaseListTableList extends $dara.Model {
  /**
   * @remarks
   * The ID of the table.
   * 
   * @example
   * NORMAL
   */
  tableId?: string;
  /**
   * @remarks
   * The name of the physical table.
   * 
   * @example
   * 151977812
   */
  tableName?: string;
  /**
   * @remarks
   * The type of the table. This is a reserved parameter.
   * 
   * @example
   * yuyang_test_0000
   */
  tableType?: string;
  static names(): { [key: string]: string } {
    return {
      tableId: 'TableId',
      tableName: 'TableName',
      tableType: 'TableType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableId: 'string',
      tableName: 'string',
      tableType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

