// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LineageTable } from "./LineageTable";


export class Node extends $dara.Model {
  /**
   * @remarks
   * The name of the catalog.
   * 
   * @example
   * paimon
   */
  catalogName?: string;
  /**
   * @remarks
   * The name of the connector.
   * 
   * @example
   * paimon
   */
  connector?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * paimon-ods
   */
  databaseName?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * 97383
   */
  id?: string;
  /**
   * @remarks
   * Specifies whether the table is a temporary table.
   * 
   * @example
   * false
   */
  isTemporary?: boolean;
  /**
   * @remarks
   * The information about the table.
   */
  tables?: LineageTable[];
  static names(): { [key: string]: string } {
    return {
      catalogName: 'catalogName',
      connector: 'connector',
      databaseName: 'databaseName',
      id: 'id',
      isTemporary: 'isTemporary',
      tables: 'tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      connector: 'string',
      databaseName: 'string',
      id: 'string',
      isTemporary: 'boolean',
      tables: { 'type': 'array', 'itemType': LineageTable },
    };
  }

  validate() {
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

