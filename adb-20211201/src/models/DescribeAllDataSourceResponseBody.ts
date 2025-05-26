// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAllDataSourceResponseBodyColumns } from "./DescribeAllDataSourceResponseBodyColumns";
import { DescribeAllDataSourceResponseBodySchemas } from "./DescribeAllDataSourceResponseBodySchemas";
import { DescribeAllDataSourceResponseBodyTables } from "./DescribeAllDataSourceResponseBodyTables";


export class DescribeAllDataSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried columns.
   */
  columns?: DescribeAllDataSourceResponseBodyColumns;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C7EDB8E4-9769-4233-88C7-DCA4C9******
   */
  requestId?: string;
  /**
   * @remarks
   * The queried databases.
   */
  schemas?: DescribeAllDataSourceResponseBodySchemas;
  /**
   * @remarks
   * The queried tables.
   */
  tables?: DescribeAllDataSourceResponseBodyTables;
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      requestId: 'RequestId',
      schemas: 'Schemas',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: DescribeAllDataSourceResponseBodyColumns,
      requestId: 'string',
      schemas: DescribeAllDataSourceResponseBodySchemas,
      tables: DescribeAllDataSourceResponseBodyTables,
    };
  }

  validate() {
    if(this.columns && typeof (this.columns as any).validate === 'function') {
      (this.columns as any).validate();
    }
    if(this.schemas && typeof (this.schemas as any).validate === 'function') {
      (this.schemas as any).validate();
    }
    if(this.tables && typeof (this.tables as any).validate === 'function') {
      (this.tables as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

