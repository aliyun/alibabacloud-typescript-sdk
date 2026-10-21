// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgenticTableColumnEngineMeta } from "./AgenticTableColumnEngineMeta";


export class AgenticTableColumn extends $dara.Model {
  /**
   * @remarks
   * The column name.
   * 
   * @example
   * id
   */
  columnName?: string;
  /**
   * @remarks
   * The column type, which is the native type definition of the database.
   * 
   * @example
   * bigint
   */
  columnType?: string;
  /**
   * @remarks
   * The column description.
   * 
   * @example
   * Primary key ID
   */
  description?: string;
  /**
   * @remarks
   * The engine metadata of the column.
   */
  engineMeta?: AgenticTableColumnEngineMeta;
  /**
   * @remarks
   * The position of the column in the table, starting from 1.
   * 
   * @example
   * 1
   */
  position?: number;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      columnType: 'ColumnType',
      description: 'Description',
      engineMeta: 'EngineMeta',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      columnType: 'string',
      description: 'string',
      engineMeta: AgenticTableColumnEngineMeta,
      position: 'number',
    };
  }

  validate() {
    if(this.engineMeta && typeof (this.engineMeta as any).validate === 'function') {
      (this.engineMeta as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

