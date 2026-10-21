// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgenticTableIndex extends $dara.Model {
  /**
   * @remarks
   * The list of fields included in the index. Fields with a specified prefix length include a length expression, such as name(10).
   */
  columnNames?: string[];
  /**
   * @remarks
   * The index description.
   * 
   * @example
   * Index on user_id
   */
  description?: string;
  /**
   * @remarks
   * The index name.
   * 
   * @example
   * idx_user_id
   */
  indexName?: string;
  /**
   * @remarks
   * The index type. Valid values:
   * 
   * - **Primary**: primary key index
   * - **Unique**: unique index
   * - **Normal**: normal index
   * - **FullText**: full-text index
   * - **Spatial**: spatial index
   * 
   * @example
   * Normal
   */
  indexType?: string;
  /**
   * @remarks
   * Specifies whether the index is a primary key index.
   * 
   * @example
   * false
   */
  primary?: boolean;
  /**
   * @remarks
   * The list of actual field names referenced by the index, with prefix length expressions removed from ColumnNames.
   */
  realColumnNames?: string[];
  /**
   * @remarks
   * Specifies whether the index is a unique index.
   * 
   * @example
   * false
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

