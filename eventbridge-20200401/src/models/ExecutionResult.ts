// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SchemaColumn } from "./SchemaColumn";


export class ExecutionResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the result is truncated because of the maxRows limit.
   * 
   * @example
   * false
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The number of rows returned in this response.
   * 
   * @example
   * 2
   */
  rowCount?: number;
  /**
   * @remarks
   * A two-dimensional array where each row is an array.
   * 
   * @example
   * [["Beijing",120],["Shanghai",98]]
   */
  rows?: string;
  /**
   * @remarks
   * The schema information.
   * 
   * @example
   * [{"Name":"event_date","Type":"varchar"}]
   */
  schema?: SchemaColumn[];
  /**
   * @remarks
   * The total number of rows that match the condition. This value differs from RowCount when IsTruncated is set to true.
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

