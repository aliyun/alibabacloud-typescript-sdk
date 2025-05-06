// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDatabasesResponseBodyDatabasesDatabaseAccounts } from "./DescribeDatabasesResponseBodyDatabasesDatabaseAccounts";


export class DescribeDatabasesResponseBodyDatabasesDatabase extends $dara.Model {
  /**
   * @remarks
   * Details about the accounts.
   * 
   * > A PolarDB for MySQL cluster does not support privileged accounts.
   */
  accounts?: DescribeDatabasesResponseBodyDatabasesDatabaseAccounts;
  /**
   * @remarks
   * The character set that the database uses. For more information, see [Character set tables](https://help.aliyun.com/document_detail/99716.html).
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
   * The state of the database. Valid values:
   * 
   * *   **Creating**
   * *   **Running**
   * *   **Deleting**
   * 
   * @example
   * Running
   */
  DBStatus?: string;
  /**
   * @remarks
   * The type of the database engine. Valid values:
   * 
   * *   **MySQL**
   * *   **Oracle**
   * *   **PostgreSQL**
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The ID of the primary node in the cluster of Multi-master Cluster (Database/Table) Edition.
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
      accounts: DescribeDatabasesResponseBodyDatabasesDatabaseAccounts,
      characterSetName: 'string',
      DBDescription: 'string',
      DBName: 'string',
      DBStatus: 'string',
      engine: 'string',
      masterID: 'string',
    };
  }

  validate() {
    if(this.accounts && typeof (this.accounts as any).validate === 'function') {
      (this.accounts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

