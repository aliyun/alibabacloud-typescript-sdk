// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DiscoverEventSourceResponseBodyDataSourceMySQLDiscoveryTableSchema } from "./DiscoverEventSourceResponseBodyDataSourceMySqldiscoveryTableSchema";


export class DiscoverEventSourceResponseBodyDataSourceMySQLDiscovery extends $dara.Model {
  databaseNames?: string[];
  estimatedRows?: number;
  expireLogsDays?: number;
  /**
   * @example
   * [{\\"is_active\\":\\"1\\",\\"name\\":\\"0c0c5d1a-e844-44a8-902d-4f62cbcb0479\\",\\"id\\":\\"21\\"},{\\"is_active\\":\\"1\\",\\"name\\":\\"18ef033e-70bb-4795-8222-6cfb54f38f26\\",\\"id\\":\\"22\\"}]
   */
  simpleData?: string;
  tableNames?: string[];
  tableSchema?: DiscoverEventSourceResponseBodyDataSourceMySQLDiscoveryTableSchema;
  waitTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      databaseNames: 'DatabaseNames',
      estimatedRows: 'EstimatedRows',
      expireLogsDays: 'ExpireLogsDays',
      simpleData: 'SimpleData',
      tableNames: 'TableNames',
      tableSchema: 'TableSchema',
      waitTimeout: 'WaitTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseNames: { 'type': 'array', 'itemType': 'string' },
      estimatedRows: 'number',
      expireLogsDays: 'number',
      simpleData: 'string',
      tableNames: { 'type': 'array', 'itemType': 'string' },
      tableSchema: DiscoverEventSourceResponseBodyDataSourceMySQLDiscoveryTableSchema,
      waitTimeout: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.databaseNames)) {
      $dara.Model.validateArray(this.databaseNames);
    }
    if(Array.isArray(this.tableNames)) {
      $dara.Model.validateArray(this.tableNames);
    }
    if(this.tableSchema && typeof (this.tableSchema as any).validate === 'function') {
      (this.tableSchema as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

