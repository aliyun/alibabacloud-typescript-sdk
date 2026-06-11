// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgenticTableIndex extends $dara.Model {
  /**
   * @remarks
   * An array of column names included in the index.
   */
  columnNames?: string[];
  /**
   * @remarks
   * An optional, user-defined description for the index.
   */
  description?: string;
  /**
   * @remarks
   * The unique name of the index within the table.
   */
  indexName?: string;
  /**
   * @remarks
   * The type of the index, such as PRIMARY, UNIQUE, or NORMAL.
   */
  indexType?: string;
  /**
   * @remarks
   * Specifies if the index is the primary key. A table can have only one primary key.
   */
  primary?: boolean;
  /**
   * @remarks
   * An array of physical column names from the database. Use this parameter when the names in ColumnNames are aliases or logical names.
   */
  realColumnNames?: string[];
  /**
   * @remarks
   * Specifies if the index enforces a unique constraint, requiring all its values to be unique across rows.
   */
  unique?: boolean;
  static names(): { [key: string]: string } {
    return {
      columnNames: 'ColumnNames',
      description: 'Description',
      indexName: 'IndexName',
      indexType: 'IndexType',
      primary: 'Primary',
      realColumnNames: 'RealColumnNames',
      unique: 'Unique',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnNames: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      indexName: 'string',
      indexType: 'string',
      primary: 'boolean',
      realColumnNames: { 'type': 'array', 'itemType': 'string' },
      unique: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.columnNames)) {
      $dara.Model.validateArray(this.columnNames);
    }
    if(Array.isArray(this.realColumnNames)) {
      $dara.Model.validateArray(this.realColumnNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

