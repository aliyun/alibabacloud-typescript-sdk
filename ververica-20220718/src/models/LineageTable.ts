// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LineageColumn } from "./LineageColumn";


export class LineageTable extends $dara.Model {
  /**
   * @remarks
   * The information about columns.
   */
  columns?: LineageColumn[];
  /**
   * @remarks
   * The table ID.
   * 
   * @example
   * 434508
   */
  id?: string;
  /**
   * @remarks
   * The information about the table. The information includes the user who creates the table, the user who modifies the table, and the creation time and modification time of the table.
   */
  properties?: { [key: string]: any };
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * order-test
   */
  tableName?: string;
  /**
   * @remarks
   * The parameters of the table.
   */
  with?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      columns: 'columns',
      id: 'id',
      properties: 'properties',
      tableName: 'tableName',
      with: 'with',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': LineageColumn },
      id: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      tableName: 'string',
      with: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    if(this.with) {
      $dara.Model.validateMap(this.with);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

