// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDatabasesResponseBodyDatabasesDatabaseAccountsAccountPrivilegeInfo extends $dara.Model {
  /**
   * @remarks
   * The account username.
   * 
   * @example
   * test
   */
  account?: string;
  /**
   * @remarks
   * The permissions that the account has on the database. Valid values:
   * 
   * *   **ReadWrite**: read and write permissions
   * *   **ReadOnly**: read-only permissions
   * *   **DMLOnly**: DML-only permissions
   * *   **DDLOnly**: DDL-only permissions
   * 
   * @example
   * DMLOnly
   */
  accountPrivilege?: string;
  /**
   * @remarks
   * The permission that the account has on the database.
   * 
   * @example
   * SELECT
   */
  accountPrivilegeDetail?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      accountPrivilege: 'AccountPrivilege',
      accountPrivilegeDetail: 'AccountPrivilegeDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      accountPrivilege: 'string',
      accountPrivilegeDetail: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabasesResponseBodyDatabasesDatabaseAccounts extends $dara.Model {
  accountPrivilegeInfo?: DescribeDatabasesResponseBodyDatabasesDatabaseAccountsAccountPrivilegeInfo[];
  static names(): { [key: string]: string } {
    return {
      accountPrivilegeInfo: 'AccountPrivilegeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountPrivilegeInfo: { 'type': 'array', 'itemType': DescribeDatabasesResponseBodyDatabasesDatabaseAccountsAccountPrivilegeInfo },
    };
  }

  validate() {
    if(Array.isArray(this.accountPrivilegeInfo)) {
      $dara.Model.validateArray(this.accountPrivilegeInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabasesResponseBodyDatabasesDatabaseAdvancedInfo extends $dara.Model {
  advancedDbProperty?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      advancedDbProperty: 'AdvancedDbProperty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedDbProperty: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.advancedDbProperty)) {
      $dara.Model.validateArray(this.advancedDbProperty);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabasesResponseBodyDatabasesDatabaseBasicInfo extends $dara.Model {
  basicDbProperty?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      basicDbProperty: 'BasicDbProperty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicDbProperty: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.basicDbProperty)) {
      $dara.Model.validateArray(this.basicDbProperty);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabasesResponseBodyDatabasesDatabaseRuntimeInfo extends $dara.Model {
  runtimeDbProperty?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      runtimeDbProperty: 'RuntimeDbProperty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runtimeDbProperty: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.runtimeDbProperty)) {
      $dara.Model.validateArray(this.runtimeDbProperty);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabasesResponseBodyDatabasesDatabase extends $dara.Model {
  /**
   * @remarks
   * The information about the account. Each account has specific permissions on the database.
   */
  accounts?: DescribeDatabasesResponseBodyDatabasesDatabaseAccounts;
  /**
   * @remarks
   * The advanced information about the database.
   * 
   * >  This parameter is returned only for instances that run SQL Server.
   */
  advancedInfo?: DescribeDatabasesResponseBodyDatabasesDatabaseAdvancedInfo;
  /**
   * @remarks
   * The basic information about the database.
   * 
   * >  This parameter is returned only for instances that run SQL Server.
   */
  basicInfo?: DescribeDatabasesResponseBodyDatabasesDatabaseBasicInfo;
  /**
   * @remarks
   * The name of the character set.
   * 
   * @example
   * utf8
   */
  characterSetName?: string;
  /**
   * @remarks
   * The collation of the character set. The example value C indicates localization.
   * 
   * >  This parameter is returned only for instances that run PostgreSQL.
   * 
   * @example
   * C
   */
  collate?: string;
  /**
   * @remarks
   * The limit on the number of concurrent requests. The value -1 indicates that the number of concurrent requests is unlimited.
   * 
   * >  This parameter is returned only for instances that run PostgreSQL.
   * 
   * @example
   * -1
   */
  connLimit?: string;
  /**
   * @remarks
   * The type of the character set.
   * 
   * >  This parameter is returned only for instances that run PostgreSQL.
   * 
   * @example
   * en_US.utf8
   */
  ctype?: string;
  /**
   * @remarks
   * The description of the database.
   * 
   * @example
   * testdb
   */
  DBDescription?: string;
  /**
   * @remarks
   * The ID of the instance to which the database belongs.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * testDB01
   */
  DBName?: string;
  /**
   * @remarks
   * The database status. Valid values:
   * 
   * *   **Creating**
   * *   **Running**
   * *   **Deleting**
   * *   **Cold**
   * 
   * @example
   * Creating
   */
  DBStatus?: string;
  duckDBEnabled?: boolean;
  /**
   * @remarks
   * The database engine of the instance.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The page number of the page to return.
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
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The runtime information about the database.
   * 
   * >  This parameter is returned only for instances that run SQL Server.
   */
  runtimeInfo?: DescribeDatabasesResponseBodyDatabasesDatabaseRuntimeInfo;
  /**
   * @remarks
   * The database tablespace.
   * 
   * >  This parameter is returned only for instances that run PostgreSQL.
   * 
   * @example
   * pg_default
   */
  tablespace?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * >  This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      advancedInfo: 'AdvancedInfo',
      basicInfo: 'BasicInfo',
      characterSetName: 'CharacterSetName',
      collate: 'Collate',
      connLimit: 'ConnLimit',
      ctype: 'Ctype',
      DBDescription: 'DBDescription',
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      DBStatus: 'DBStatus',
      duckDBEnabled: 'DuckDBEnabled',
      engine: 'Engine',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      runtimeInfo: 'RuntimeInfo',
      tablespace: 'Tablespace',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: DescribeDatabasesResponseBodyDatabasesDatabaseAccounts,
      advancedInfo: DescribeDatabasesResponseBodyDatabasesDatabaseAdvancedInfo,
      basicInfo: DescribeDatabasesResponseBodyDatabasesDatabaseBasicInfo,
      characterSetName: 'string',
      collate: 'string',
      connLimit: 'string',
      ctype: 'string',
      DBDescription: 'string',
      DBInstanceId: 'string',
      DBName: 'string',
      DBStatus: 'string',
      duckDBEnabled: 'boolean',
      engine: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      runtimeInfo: DescribeDatabasesResponseBodyDatabasesDatabaseRuntimeInfo,
      tablespace: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.accounts && typeof (this.accounts as any).validate === 'function') {
      (this.accounts as any).validate();
    }
    if(this.advancedInfo && typeof (this.advancedInfo as any).validate === 'function') {
      (this.advancedInfo as any).validate();
    }
    if(this.basicInfo && typeof (this.basicInfo as any).validate === 'function') {
      (this.basicInfo as any).validate();
    }
    if(this.runtimeInfo && typeof (this.runtimeInfo as any).validate === 'function') {
      (this.runtimeInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabasesResponseBodyDatabases extends $dara.Model {
  database?: DescribeDatabasesResponseBodyDatabasesDatabase[];
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: { 'type': 'array', 'itemType': DescribeDatabasesResponseBodyDatabasesDatabase },
    };
  }

  validate() {
    if(Array.isArray(this.database)) {
      $dara.Model.validateArray(this.database);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabasesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the databases.
   */
  databases?: DescribeDatabasesResponseBodyDatabases;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2603CA96-B17D-4903-BC04-61A2C829CD94
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: DescribeDatabasesResponseBodyDatabases,
      requestId: 'string',
    };
  }

  validate() {
    if(this.databases && typeof (this.databases as any).validate === 'function') {
      (this.databases as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

