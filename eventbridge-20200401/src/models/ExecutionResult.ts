// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SchemaColumn } from "./SchemaColumn";


export class ExecutionResult extends $dara.Model {
  /**
   * @example
   * false
   */
  isTruncated?: boolean;
  /**
   * @example
   * 2
   */
  rowCount?: number;
  rows?: string;
  schema?: SchemaColumn[];
  /**
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

