// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDatabasesZonalResponseBodyDatabasesAccounts extends $dara.Model {
  /**
   * @example
   * test_acc
   */
  accountName?: string;
  /**
   * @example
   * ReadOnly
   */
  accountPrivilege?: string;
  /**
   * @example
   * Available
   */
  accountStatus?: string;
  /**
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
  accounts?: DescribeDatabasesZonalResponseBodyDatabasesAccounts[];
  /**
   * @example
   * utf8mb4
   */
  characterSetName?: string;
  /**
   * @example
   * test_des
   */
  DBDescription?: string;
  /**
   * @example
   * test_db
   */
  DBName?: string;
  /**
   * @example
   * Running
   */
  DBStatus?: string;
  /**
   * @example
   * MySQL
   */
  engine?: string;
  /**
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
  databases?: DescribeDatabasesZonalResponseBodyDatabases[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 212db86sca4384811e0b5e8707e******
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 7
   */
  pageRecordCount?: number;
  /**
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

