// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApsLifecycleStrategyResponseBodyItemsOperationTables extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test
   */
  databaseName?: string;
  /**
   * @remarks
   * Indicates whether all tables in the database are selected.
   * 
   * @example
   * true
   */
  processAll?: string;
  /**
   * @remarks
   * The names of the tables.
   */
  tableNames?: string[];
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      processAll: 'ProcessAll',
      tableNames: 'TableNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      processAll: 'string',
      tableNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tableNames)) {
      $dara.Model.validateArray(this.tableNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

