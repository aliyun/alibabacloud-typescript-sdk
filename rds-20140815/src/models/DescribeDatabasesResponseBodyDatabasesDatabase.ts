// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDatabasesResponseBodyDatabasesDatabaseAccounts } from "./DescribeDatabasesResponseBodyDatabasesDatabaseAccounts";
import { DescribeDatabasesResponseBodyDatabasesDatabaseAdvancedInfo } from "./DescribeDatabasesResponseBodyDatabasesDatabaseAdvancedInfo";
import { DescribeDatabasesResponseBodyDatabasesDatabaseBasicInfo } from "./DescribeDatabasesResponseBodyDatabasesDatabaseBasicInfo";
import { DescribeDatabasesResponseBodyDatabasesDatabaseRuntimeInfo } from "./DescribeDatabasesResponseBodyDatabasesDatabaseRuntimeInfo";


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

