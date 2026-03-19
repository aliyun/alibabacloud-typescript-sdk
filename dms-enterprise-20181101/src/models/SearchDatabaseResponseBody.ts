// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchDatabaseResponseBodySearchDatabaseListSearchDatabaseOwnerIdList extends $dara.Model {
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

export class SearchDatabaseResponseBodySearchDatabaseListSearchDatabaseOwnerNameList extends $dara.Model {
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

export class SearchDatabaseResponseBodySearchDatabaseListSearchDatabase extends $dara.Model {
  alias?: string;
  catalogName?: string;
  databaseId?: string;
  datalinkName?: string;
  dbType?: string;
  dbaId?: string;
  encoding?: string;
  envType?: string;
  host?: string;
  logic?: boolean;
  ownerIdList?: SearchDatabaseResponseBodySearchDatabaseListSearchDatabaseOwnerIdList;
  ownerNameList?: SearchDatabaseResponseBodySearchDatabaseListSearchDatabaseOwnerNameList;
  port?: number;
  schemaName?: string;
  searchName?: string;
  sid?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      catalogName: 'CatalogName',
      databaseId: 'DatabaseId',
      datalinkName: 'DatalinkName',
      dbType: 'DbType',
      dbaId: 'DbaId',
      encoding: 'Encoding',
      envType: 'EnvType',
      host: 'Host',
      logic: 'Logic',
      ownerIdList: 'OwnerIdList',
      ownerNameList: 'OwnerNameList',
      port: 'Port',
      schemaName: 'SchemaName',
      searchName: 'SearchName',
      sid: 'Sid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      catalogName: 'string',
      databaseId: 'string',
      datalinkName: 'string',
      dbType: 'string',
      dbaId: 'string',
      encoding: 'string',
      envType: 'string',
      host: 'string',
      logic: 'boolean',
      ownerIdList: SearchDatabaseResponseBodySearchDatabaseListSearchDatabaseOwnerIdList,
      ownerNameList: SearchDatabaseResponseBodySearchDatabaseListSearchDatabaseOwnerNameList,
      port: 'number',
      schemaName: 'string',
      searchName: 'string',
      sid: 'string',
    };
  }

  validate() {
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

export class SearchDatabaseResponseBodySearchDatabaseList extends $dara.Model {
  searchDatabase?: SearchDatabaseResponseBodySearchDatabaseListSearchDatabase[];
  static names(): { [key: string]: string } {
    return {
      searchDatabase: 'SearchDatabase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchDatabase: { 'type': 'array', 'itemType': SearchDatabaseResponseBodySearchDatabaseListSearchDatabase },
    };
  }

  validate() {
    if(Array.isArray(this.searchDatabase)) {
      $dara.Model.validateArray(this.searchDatabase);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDatabaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E0D21075-CD3E-4D98-8264-FD8AD04A63B6
   */
  requestId?: string;
  searchDatabaseList?: SearchDatabaseResponseBodySearchDatabaseList;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**: The request is successful.
   * *   **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      searchDatabaseList: 'SearchDatabaseList',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      searchDatabaseList: SearchDatabaseResponseBodySearchDatabaseList,
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.searchDatabaseList && typeof (this.searchDatabaseList as any).validate === 'function') {
      (this.searchDatabaseList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

