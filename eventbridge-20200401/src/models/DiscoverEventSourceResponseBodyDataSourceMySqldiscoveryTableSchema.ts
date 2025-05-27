// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DiscoverEventSourceResponseBodyDataSourceMySQLDiscoveryTableSchemaColumns } from "./DiscoverEventSourceResponseBodyDataSourceMySqldiscoveryTableSchemaColumns";


export class DiscoverEventSourceResponseBodyDataSourceMySQLDiscoveryTableSchema extends $dara.Model {
  columns?: DiscoverEventSourceResponseBodyDataSourceMySQLDiscoveryTableSchemaColumns[];
  /**
   * @example
   * map
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': DiscoverEventSourceResponseBodyDataSourceMySQLDiscoveryTableSchemaColumns },
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

