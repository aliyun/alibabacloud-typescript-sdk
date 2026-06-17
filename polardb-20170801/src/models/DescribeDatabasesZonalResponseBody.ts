// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDatabasesZonalResponseBodyDatabasesAccounts extends $dara.Model {
  /**
   * @remarks
   * The account name.
   * 
   * > If the cluster is a PolarDB for MySQL cluster, privileged accounts are not included.
   * 
   * @example
   * test_acc
   */
  accountName?: string;
  /**
   * @remarks
   * The permissions of the account. Valid values:
   * 
   * - **ReadWrite**
   * 
   * - **ReadOnly**
   * 
   * - **DMLOnly**
   * 
   * - **DDLOnly**
   * 
   * - **ReadIndex**
   * 
   * @example
   * ReadOnly
   */
  accountPrivilege?: string;
  /**
   * @remarks
   * The status of the account. Valid values:
   * 
   * - **Creating**
   * 
   * - **Available**
   * 
   * - **Deleting**
   * 
   * @example
   * Available
   */
  accountStatus?: string;
  /**
   * @remarks
   * The authorization status. Valid values:
   * 
   * - **Empowering**: Permissions are being granted.
   * 
   * - **Empowered**: Permissions are granted.
   * 
   * - **Removing**: Permissions are being revoked.
   * 
   * @example
   * Empowered
   */
  privilegeStatus?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPrivilege: 'AccountPrivilege',
      accountStatus: 'AccountStatus',
      privilegeStatus: 'PrivilegeStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPrivilege: 'string',
      accountStatus: 'string',
      privilegeStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabasesZonalResponseBodyDatabases extends $dara.Model {
  /**
   * @remarks
   * The details of the database accounts.
   * 
   * > If the cluster is a PolarDB for MySQL cluster, privileged accounts are not included.
   */
  accounts?: DescribeDatabasesZonalResponseBodyDatabasesAccounts[];
  /**
   * @remarks
   * The character set.
   * 
   * @example
   * utf8mb4
   */
  characterSetName?: string;
  /**
   * @remarks
   * The description of the database.
   * 
   * @example
   * test_des
   */
  DBDescription?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test_db
   */
  DBName?: string;
  /**
   * @remarks
   * The status of the database. Valid values:
   * 
   * - **Creating**
   * 
   * - **Running**
   * 
   * - **Deleting**
   * 
   * @example
   * Running
   */
  DBStatus?: string;
  /**
   * @remarks
   * The database engine type. Valid values:
   * 
   * - **MySQL**
   * 
   * - **Oracle**
   * 
   * - **PostgreSQL**
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The ID of the primary node that corresponds to the database in a Multi-master Cluster (Database/Table) edition cluster.
   * 
   * @example
   * 2
   */
  masterID?: string;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      characterSetName: 'CharacterSetName',
      DBDescription: 'DBDescription',
      DBName: 'DBName',
      DBStatus: 'DBStatus',
      engine: 'Engine',
      masterID: 'MasterID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: { 'type': 'array', 'itemType': DescribeDatabasesZonalResponseBodyDatabasesAccounts },
      characterSetName: 'string',
      DBDescription: 'string',
      DBName: 'string',
      DBStatus: 'string',
      engine: 'string',
      masterID: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accounts)) {
      $dara.Model.validateArray(this.accounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabasesZonalResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the databases.
   */
  databases?: DescribeDatabasesZonalResponseBodyDatabases[];
  /**
   * @remarks
   * The maximum number of entries returned for the current request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token. This is the NextToken value from the previous API call. If there are no more results, do not specify this parameter.
   * 
   * @example
   * 212db86sca4384811e0b5e8707e******
   */
  nextToken?: string;
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
   * The number of entries returned on the current page.
   * 
   * @example
   * 7
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2FED790E-FB61-4721-8C1C-07C627******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': DescribeDatabasesZonalResponseBodyDatabases },
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.databases)) {
      $dara.Model.validateArray(this.databases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

