// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAdbMySqlColumnsResponseBodyColumns } from "./DescribeAdbMySqlColumnsResponseBodyColumns";


export class DescribeAdbMySqlColumnsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of columns.
   * 
   * @example
   * 1
   */
  columnCount?: number;
  /**
   * @remarks
   * Details of the columns.
   */
  columns?: DescribeAdbMySqlColumnsResponseBodyColumns[];
  /**
   * @remarks
   * The message returned for the operation. Valid values:
   * 
   * *   **Success** is returned if the operation is successful.
   * *   An error message is returned if the operation fails.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A9F013CD-0222-595E-8157-445969B97F03
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
  schema?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values:
   * 
   * *   **true**: The operation is successful.
   * *   **false**: The operation fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      columnCount: 'ColumnCount',
      columns: 'Columns',
      message: 'Message',
      requestId: 'RequestId',
      schema: 'Schema',
      success: 'Success',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnCount: 'number',
      columns: { 'type': 'array', 'itemType': DescribeAdbMySqlColumnsResponseBodyColumns },
      message: 'string',
      requestId: 'string',
      schema: 'string',
      success: 'boolean',
      tableName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

