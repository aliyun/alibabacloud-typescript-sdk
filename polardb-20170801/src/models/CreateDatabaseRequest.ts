// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the account that is authorized to access the database. You can call the [DescribeAccounts](https://help.aliyun.com/document_detail/98107.html) operation to query account information.
   * >- You can specify only a standard account. By default, privileged accounts have all permissions on all databases. You do not need to grant privileged accounts the permissions to access the database.
   * >- This parameter is required for PolarDB for PostgreSQL (Compatible with Oracle) clusters or PolarDB for PostgreSQL clusters. This parameter is optional for PolarDB for MySQL clusters.
   * 
   * @example
   * testacc
   */
  accountName?: string;
  /**
   * @remarks
   * The permissions that are granted to the account. Valid values:
   * 
   * *   **ReadWrite**: read and write permissions.
   * *   **ReadOnly**: read-only permissions.
   * *   **DMLOnly**: permissions only to execute DML statements on the database.
   * *   **DDLOnly**: permissions only to execute DDL statements on the database.
   * *   **ReadIndex**: read-only and index permissions.
   * 
   * The default value is **ReadWrite**.
   * 
   * > 
   * 
   * *   This parameter is valid only when the **AccountName** parameter is specified.
   * 
   * *   For a PolarDB for PostgreSQL (Compatible with Oracle) or PolarDB for PostgreSQL cluster, this parameter is optional. If **AccountName** is specified, it is the account of the database owner.
   * 
   * *   For a PolarDB for MySQL cluster, this parameter is optional.
   * 
   * @example
   * ReadWrite
   */
  accountPrivilege?: string;
  /**
   * @remarks
   * The character set that is used by the cluster. For more information, see [Character set tables](https://help.aliyun.com/document_detail/99716.html).
   * 
   * This parameter is required.
   * 
   * @example
   * utf8
   */
  characterSetName?: string;
  /**
   * @remarks
   * The language that defines the collation rules in the database.
   * 
   * > 
   * 
   * *   The language must be compatible with the character set that is specified by **CharacterSetName**.
   * 
   * *   This parameter is required for a PolarDB for PostgreSQL (Compatible with Oracle) or PolarDB for PostgreSQL cluster. This parameter is optional for a PolarDB for MySQL cluster. To view the valid values of this parameter, perform the following steps: Log on to the PolarDB console and click the ID of the cluster. In the left-side navigation pane, choose **Settings and Management** > **Databases**. Then, click **Create Database**.
   * 
   * @example
   * C
   */
  collate?: string;
  /**
   * @remarks
   * The language that indicates the character type of the database.
   * 
   * >- The language must be compatible with the character set that is specified by **CharacterSetName**.
   * >- The value that you specify must be the same as the value of **Collate**.
   * >- This parameter is required for PolarDB for PostgreSQL (Compatible with Oracle) clusters or PolarDB for PostgreSQL clusters. This parameter is optional for PolarDB for MySQL clusters.
   * 
   * To view the valid values for this parameter, perform the following steps: Log on to the PolarDB console and click the ID of a cluster. In the left-side navigation pane, choose **Settings and Management** > **Databases**. Then, click **Create Database**.
   * 
   * @example
   * C
   */
  ctype?: string;
  /**
   * @remarks
   * The ID of cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The description of the database. The description must meet the following requirements:
   * 
   * *   It cannot start with `http://` or `https://`.
   * *   It must be 2 to 256 characters in length.
   * 
   * > This parameter is required for a PolarDB for Oracle or PolarDB for PostgreSQL cluster. This parameter is optional for a PolarDB for MySQL cluster.
   * 
   * @example
   * testdesc
   */
  DBDescription?: string;
  /**
   * @remarks
   * The name of the database. The name must meet the following requirements:
   * 
   * *   The name can contain lowercase letters, digits, hyphens (-), and underscores (_).
   * *   The name must start with a lowercase letter and end with a lowercase letter or a digit. The name must be 1 to 64 characters in length.
   * 
   * > Do not use reserved words as database names, such as `test` or `mysql`.
   * 
   * This parameter is required.
   * 
   * @example
   * testDB
   */
  DBName?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPrivilege: 'AccountPrivilege',
      characterSetName: 'CharacterSetName',
      collate: 'Collate',
      ctype: 'Ctype',
      DBClusterId: 'DBClusterId',
      DBDescription: 'DBDescription',
      DBName: 'DBName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPrivilege: 'string',
      characterSetName: 'string',
      collate: 'string',
      ctype: 'string',
      DBClusterId: 'string',
      DBDescription: 'string',
      DBName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

