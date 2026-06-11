// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgenticTableColumnEngineMeta } from "./AgenticTableColumnEngineMeta";


export class AgenticTableColumn extends $dara.Model {
  /**
   * @remarks
   * The name of the column.
   */
  columnName?: string;
  /**
   * @remarks
   * The data type of the column.
   */
  columnType?: string;
  /**
   * @remarks
   * The description of the column.
   */
  description?: string;
  /**
   * @remarks
   * Engine-specific metadata for the column.
   */
  engineMeta?: AgenticTableColumnEngineMeta;
  /**
   * @remarks
   * The 1-based ordinal position of the column within the table.
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

