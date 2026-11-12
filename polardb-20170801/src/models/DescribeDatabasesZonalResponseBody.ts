// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDatabasesZonalResponseBodyDatabasesAccounts extends $dara.Model {
  /**
   * @remarks
   * The name of the account.
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
   * * **ReadWrite**: read and write
   * * **ReadOnly**: read-only 
   * * **DMLOnly**: DML only
   * * **DDLOnly**: DDL only
   * * **ReadIndex**: read and index
   * 
   * @example
   * ReadOnly
   */
  accountPrivilege?: string;
  /**
   * @remarks
   * The status of the account. Valid values: 
   * 
   * - **Creating**: The account is being created.
   * - **Available**: The account is available.
   * - **Deleting**: The account is being deleted.
   * 
   * @example
   * Available
   */
  accountStatus?: string;
  /**
   * @remarks
   * The authorization status. Valid values: 
   * 
   * - **Empowering**: The account is being authorized.
   * - **Empowered**: The account is authorized.
   * - **Removing**: The permissions are being revoked.
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
   * The name of the character set.
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
   * - **Creating**: The database is being created.
   * - **Running**: The database is running.
   * - **Deleting**: The database is being deleted.
   * 
   * @example
   * Running
   */
  DBStatus?: string;
  /**
   * @remarks
   * The type of the database engine. Valid values:
   * * **MySQL**
   * * **Oracle**
   * * **PostgreSQL**
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The ID of the primary node that corresponds to the database in a Multi-master Cluster (Database/Table) Edition cluster.
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
   * The maximum number of entries to return in this call.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token. Set the value to the NextToken value returned from the previous API call. If no subsequent query is required, do not specify this parameter.
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
   * The ID of the request.
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

