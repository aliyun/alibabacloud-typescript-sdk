// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTablesResponseBodyDataTableEntityListEntityContent extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the data source.
   * 
   * @example
   * accountId:cn-shanghai:odps:project
   */
  dataSourceQualifiedName?: string;
  /**
   * @remarks
   * The unique ID of the data source identifier.
   * 
   * @example
   * e70f92239d491057f6a2563b545bdaf8cc6b537d9dc55ec84c55f7cfefg
   */
  dataSourceUniqueId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * database
   */
  databaseName?: string;
  /**
   * @remarks
   * The ID of the data source instance.
   * 
   * @example
   * rm-uf6rn0123
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the ODPS project.
   * 
   * @example
   * project
   */
  projectName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * table
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceQualifiedName: 'DataSourceQualifiedName',
      dataSourceUniqueId: 'DataSourceUniqueId',
      databaseName: 'DatabaseName',
      instanceId: 'InstanceId',
      projectName: 'ProjectName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceQualifiedName: 'string',
      dataSourceUniqueId: 'string',
      databaseName: 'string',
      instanceId: 'string',
      projectName: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponseBodyDataTableEntityList extends $dara.Model {
  /**
   * @remarks
   * The information about the table.
   */
  entityContent?: ListTablesResponseBodyDataTableEntityListEntityContent;
  /**
   * @remarks
   * The unique identifier of the table entity.
   * 
   * @example
   * maxcompute-table.project.table
   */
  entityQualifiedName?: string;
  static names(): { [key: string]: string } {
    return {
      entityContent: 'EntityContent',
      entityQualifiedName: 'EntityQualifiedName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityContent: ListTablesResponseBodyDataTableEntityListEntityContent,
      entityQualifiedName: 'string',
    };
  }

  validate() {
    if(this.entityContent && typeof (this.entityContent as any).validate === 'function') {
      (this.entityContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Pagination information, which specifies the starting point of the next read.
   * 
   * @example
   * AAAAAVY3rYiv9VoUJQSiCitgjgSwg+byk0FIjirFkm4zfM4G0xYwM/FQvOhgrTHsCPIZ5yqXYu2NG6qRCRC52HvwbOA=
   */
  nextToken?: string;
  /**
   * @remarks
   * An array of entities.
   */
  tableEntityList?: ListTablesResponseBodyDataTableEntityList[];
  /**
   * @remarks
   * The total number.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      tableEntityList: 'TableEntityList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      tableEntityList: { 'type': 'array', 'itemType': ListTablesResponseBodyDataTableEntityList },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tableEntityList)) {
      $dara.Model.validateArray(this.tableEntityList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListTablesResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E25887B7-579C-54A5-9C4F-83A0DE367DD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListTablesResponseBodyData,
      requestId: 'string',
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

