// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaDBTableListResponseBodyDataTableEntityList extends $dara.Model {
  /**
   * @remarks
   * The name of the metadatabase.
   * 
   * @example
   * abc
   */
  databaseName?: string;
  /**
   * @remarks
   * The GUID of the metatable.
   * 
   * @example
   * odps.engine_name.tname
   */
  tableGuid?: string;
  /**
   * @remarks
   * The name of the metatable.
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
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of metatables in the compute engine instance.
   */
  tableEntityList?: GetMetaDBTableListResponseBodyDataTableEntityList[];
  /**
   * @remarks
   * The total number of compute engine instances returned.
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
   * The metatable information in a compute engine instance.
   */
  data?: GetMetaDBTableListResponseBodyData;
  /**
   * @remarks
   * The request ID.
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

