// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccountAndAuthorityRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the database account.
   * 
   * - Cannot start with `http://` or `https://`.
   * 
   * - Must be 0 to 256 characters in length.
   * 
   * @example
   * ceshi
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the database account.
   * 
   * - Must be unique within the cluster.
   * 
   * - Can contain only lowercase letters, digits, and underscores (_).
   * 
   * - Must start with a lowercase letter and end with a lowercase letter or a digit.
   * 
   * - Must be 2 to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  accountName?: string;
  /**
   * @remarks
   * The password for the database account.
   * 
   * > - Must contain characters from at least three of the following types: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * - The supported special characters are `!@#$%^&*()_+-=`.
   * 
   * - Must be 8 to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456Aa
   */
  accountPassword?: string;
  /**
   * @remarks
   * The databases to which the account has permissions. Separate multiple database names with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * db1
   */
  allowDatabases?: string;
  /**
   * @remarks
   * The dictionaries to which the account has permissions. Separate multiple dictionary names with commas (,).
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
   * Specifies whether to grant DDL permissions to the database account. Valid values:
   * 
   * - **true**: DDL operations are allowed.
   * 
   * - **false**: DDL operations are denied.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  ddlAuthority?: boolean;
  /**
   * @remarks
   * Specifies the DML permissions for the database account. Valid values:
   * 
   * - **all**: read, write, and settings permissions.
   * 
   * - **readOnly,modify**: read and settings permissions.
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
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * All databases in the cluster. Separate multiple database names with commas (,).
   * 
   * @example
   * db1,db2
   */
  totalDatabases?: string;
  /**
   * @remarks
   * All dictionaries in the cluster. Separate multiple dictionary names with commas (,).
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

