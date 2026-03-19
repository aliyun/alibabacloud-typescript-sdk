// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabaseDatabaseIds extends $dara.Model {
  databaseIds?: number[];
  static names(): { [key: string]: string } {
    return {
      databaseIds: 'DatabaseIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.databaseIds)) {
      $dara.Model.validateArray(this.databaseIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabaseOwnerIdList extends $dara.Model {
  ownerIds?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerIds: 'OwnerIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ownerIds)) {
      $dara.Model.validateArray(this.ownerIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabaseOwnerNameList extends $dara.Model {
  ownerNames?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerNames: 'OwnerNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ownerNames)) {
      $dara.Model.validateArray(this.ownerNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabase extends $dara.Model {
  alias?: string;
  databaseId?: string;
  databaseIds?: ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabaseDatabaseIds;
  dbType?: string;
  envType?: string;
  logic?: boolean;
  ownerIdList?: ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabaseOwnerIdList;
  ownerNameList?: ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabaseOwnerNameList;
  schemaName?: string;
  searchName?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      databaseId: 'DatabaseId',
      databaseIds: 'DatabaseIds',
      dbType: 'DbType',
      envType: 'EnvType',
      logic: 'Logic',
      ownerIdList: 'OwnerIdList',
      ownerNameList: 'OwnerNameList',
      schemaName: 'SchemaName',
      searchName: 'SearchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      databaseId: 'string',
      databaseIds: ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabaseDatabaseIds,
      dbType: 'string',
      envType: 'string',
      logic: 'boolean',
      ownerIdList: ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabaseOwnerIdList,
      ownerNameList: ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabaseOwnerNameList,
      schemaName: 'string',
      searchName: 'string',
    };
  }

  validate() {
    if(this.databaseIds && typeof (this.databaseIds as any).validate === 'function') {
      (this.databaseIds as any).validate();
    }
    if(this.ownerIdList && typeof (this.ownerIdList as any).validate === 'function') {
      (this.ownerIdList as any).validate();
    }
    if(this.ownerNameList && typeof (this.ownerNameList as any).validate === 'function') {
      (this.ownerNameList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicDatabasesResponseBodyLogicDatabaseList extends $dara.Model {
  logicDatabase?: ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabase[];
  static names(): { [key: string]: string } {
    return {
      logicDatabase: 'LogicDatabase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicDatabase: { 'type': 'array', 'itemType': ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabase },
    };
  }

  validate() {
    if(Array.isArray(this.logicDatabase)) {
      $dara.Model.validateArray(this.logicDatabase);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicDatabasesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code that is returned.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is returned.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  logicDatabaseList?: ListLogicDatabasesResponseBodyLogicDatabaseList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8068AF82-8A1A-592C-AC2E-6B75338BAB87
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - **true**: The request is successful.
   * - **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of logical databases.
   * 
   * @example
   * 7
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      logicDatabaseList: 'LogicDatabaseList',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      logicDatabaseList: ListLogicDatabasesResponseBodyLogicDatabaseList,
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.logicDatabaseList && typeof (this.logicDatabaseList as any).validate === 'function') {
      (this.logicDatabaseList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

