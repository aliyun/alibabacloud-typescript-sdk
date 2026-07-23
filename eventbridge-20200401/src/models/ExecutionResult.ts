// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SchemaColumn } from "./SchemaColumn";


export class ExecutionResult extends $dara.Model {
  /**
   * @remarks
   * Whether truncated due to the maxRows limit
   * 
   * @example
   * false
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * Number of rows returned this time
   * 
   * @example
   * 2
   */
  rowCount?: number;
  /**
   * @remarks
   * Two-dimensional array, one array per row
   * 
   * @example
   * [["北京",120],["上海",98]]
   */
  rows?: string;
  /**
   * @remarks
   * Schema information
   */
  schema?: SchemaColumn[];
  /**
   * @remarks
   * Total number of rows that meet the criteria. Different from RowCount when IsTruncated=true
   * 
   * @example
   * 2
   */
  totalRows?: number;
  static names(): { [key: string]: string } {
    return {
      isTruncated: 'IsTruncated',
      rowCount: 'RowCount',
      rows: 'Rows',
      schema: 'Schema',
      totalRows: 'TotalRows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTruncated: 'boolean',
      rowCount: 'number',
      rows: 'string',
      schema: { 'type': 'array', 'itemType': SchemaColumn },
      totalRows: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.schema)) {
      $dara.Model.validateArray(this.schema);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

