// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DiscoverEventSourceResponseBodyDataSourceMySQLDiscoveryTableSchemaColumns extends $dara.Model {
  /**
   * @example
   * auto_increment
   */
  extra?: string;
  /**
   * @example
   * id
   */
  field?: string;
  /**
   * @example
   * NO
   */
  isNull?: string;
  /**
   * @example
   * PRI
   */
  key?: string;
  /**
   * @example
   * int
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      extra: 'Extra',
      field: 'Field',
      isNull: 'IsNull',
      key: 'Key',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      field: 'string',
      isNull: 'string',
      key: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DiscoverEventSourceResponseBodyData extends $dara.Model {
  sourceMySQLDiscovery?: DiscoverEventSourceResponseBodyDataSourceMySQLDiscovery;
  static names(): { [key: string]: string } {
    return {
      sourceMySQLDiscovery: 'SourceMySQLDiscovery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceMySQLDiscovery: DiscoverEventSourceResponseBodyDataSourceMySQLDiscovery,
    };
  }

  validate() {
    if(this.sourceMySQLDiscovery && typeof (this.sourceMySQLDiscovery as any).validate === 'function') {
      (this.sourceMySQLDiscovery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscoverEventSourceResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: DiscoverEventSourceResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * C7043799-F4DA-5290-9249-97C35987****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DiscoverEventSourceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

