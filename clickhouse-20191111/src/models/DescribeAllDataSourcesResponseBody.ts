// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAllDataSourcesResponseBodyColumns } from "./DescribeAllDataSourcesResponseBodyColumns";
import { DescribeAllDataSourcesResponseBodySchemas } from "./DescribeAllDataSourcesResponseBodySchemas";
import { DescribeAllDataSourcesResponseBodyTables } from "./DescribeAllDataSourcesResponseBodyTables";


export class DescribeAllDataSourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the columns.
   */
  columns?: DescribeAllDataSourcesResponseBodyColumns;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75EA41D7-025A-50A6-9287-359A91399F1E
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the databases.
   */
  schemas?: DescribeAllDataSourcesResponseBodySchemas;
  /**
   * @remarks
   * The information about the tables.
   */
  tables?: DescribeAllDataSourcesResponseBodyTables;
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
      columns: DescribeAllDataSourcesResponseBodyColumns,
      requestId: 'string',
      schemas: DescribeAllDataSourcesResponseBodySchemas,
      tables: DescribeAllDataSourcesResponseBodyTables,
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

