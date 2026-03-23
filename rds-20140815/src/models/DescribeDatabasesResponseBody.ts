// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDatabasesResponseBodyDatabasesDatabaseAccountsAccountPrivilegeInfo extends $dara.Model {
  account?: string;
  accountPrivilege?: string;
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
  accounts?: DescribeDatabasesResponseBodyDatabasesDatabaseAccounts;
  advancedInfo?: DescribeDatabasesResponseBodyDatabasesDatabaseAdvancedInfo;
  basicInfo?: DescribeDatabasesResponseBodyDatabasesDatabaseBasicInfo;
  characterSetName?: string;
  collate?: string;
  connLimit?: string;
  ctype?: string;
  DBDescription?: string;
  DBInstanceId?: string;
  DBName?: string;
  DBStatus?: string;
  duckDBEnabled?: boolean;
  engine?: string;
  pageNumber?: number;
  pageSize?: number;
  runtimeInfo?: DescribeDatabasesResponseBodyDatabasesDatabaseRuntimeInfo;
  tablespace?: string;
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
  databases?: DescribeDatabasesResponseBodyDatabases;
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

