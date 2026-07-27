// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaDBTableListResponseBodyDataTableEntityList extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * abc
   */
  databaseName?: string;
  /**
   * @remarks
   * The unique identifier of the table.
   * 
   * @example
   * odps.engine_name.tname
   */
  tableGuid?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * tname
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      tableGuid: 'TableGuid',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      tableGuid: 'string',
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

export class GetMetaDBTableListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * A list of table details.
   */
  tableEntityList?: GetMetaDBTableListResponseBodyDataTableEntityList[];
  /**
   * @remarks
   * The total number of tables.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tableEntityList: 'TableEntityList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      tableEntityList: { 'type': 'array', 'itemType': GetMetaDBTableListResponseBodyDataTableEntityList },
      totalCount: 'number',
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

export class GetMetaDBTableListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Information about the tables in the engine instance.
   */
  data?: GetMetaDBTableListResponseBodyData;
  /**
   * @remarks
   * The unique ID for this request.
   * 
   * @example
   * 0bc1ec92159376
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
      data: GetMetaDBTableListResponseBodyData,
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

