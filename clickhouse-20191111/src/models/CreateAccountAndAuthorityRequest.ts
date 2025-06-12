// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccountAndAuthorityRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the database account.
   * 
   * *   The description cannot start with http:// or https://.
   * *   The description must be 0 to 256 characters in length.
   * 
   * @example
   * ceshi
   */
  accountDescription?: string;
  /**
   * @remarks
   * The database account.
   * 
   * *   The name must be unique within the cluster.
   * *   The name can contain lowercase letters, digits, and underscores (_).
   * *   The name must start with a lowercase letter and end with a lowercase letter or digit.
   * *   The name must be 2 to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  accountName?: string;
  /**
   * @remarks
   * The password of your database account.
   * 
   * > 
   * 
   * *   The password contains at least three types of the following characters: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * *   The password can contain the following special characters: ! @ # $ % ^ & \\* ( ) _ + - =
   * *   The password must be 8 to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456Aa
   */
  accountPassword?: string;
  /**
   * @remarks
   * The databases to which you want to grant permissions. Separate databases with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * db1
   */
  allowDatabases?: string;
  /**
   * @remarks
   * The dictionaries to which you want to grant permissions. Separate dictionaries with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * dt1
   */
  allowDictionaries?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp1p816075e21****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to grant the DDL permissions to the database account. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  ddlAuthority?: boolean;
  /**
   * @remarks
   * Specifies whether to grant DML permissions to the database account. Valid values:
   * 
   * *   **all**
   * *   **readOnly,modify**
   * 
   * This parameter is required.
   * 
   * @example
   * all
   */
  dmlAuthority?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * All databases. Separate databases with commas (,).
   * 
   * @example
   * db1,db2
   */
  totalDatabases?: string;
  /**
   * @remarks
   * All dictionaries. Separate dictionaries with commas (,).
   * 
   * @example
   * dt1,dt2
   */
  totalDictionaries?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      allowDatabases: 'AllowDatabases',
      allowDictionaries: 'AllowDictionaries',
      DBClusterId: 'DBClusterId',
      ddlAuthority: 'DdlAuthority',
      dmlAuthority: 'DmlAuthority',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      totalDatabases: 'TotalDatabases',
      totalDictionaries: 'TotalDictionaries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountPassword: 'string',
      allowDatabases: 'string',
      allowDictionaries: 'string',
      DBClusterId: 'string',
      ddlAuthority: 'boolean',
      dmlAuthority: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      totalDatabases: 'string',
      totalDictionaries: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

