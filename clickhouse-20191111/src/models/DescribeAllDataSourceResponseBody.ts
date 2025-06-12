// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAllDataSourceResponseBodyColumns } from "./DescribeAllDataSourceResponseBodyColumns";
import { DescribeAllDataSourceResponseBodySchemas } from "./DescribeAllDataSourceResponseBodySchemas";
import { DescribeAllDataSourceResponseBodyTables } from "./DescribeAllDataSourceResponseBodyTables";


export class DescribeAllDataSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the columns.
   */
  columns?: DescribeAllDataSourceResponseBodyColumns;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 05321590-BB65-4720-8CB6-8218E041CDD0
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the databases.
   */
  schemas?: DescribeAllDataSourceResponseBodySchemas;
  /**
   * @remarks
   * The information about the tables.
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

