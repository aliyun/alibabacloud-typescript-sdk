// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccountAuthorityRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database account.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  accountName?: string;
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
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to grant DDL permissions to the database account. Valid values:
   * 
   * *   **true**: grants DDL permissions to the database account.
   * *   **false**: does not grant DDL permissions to the database account.
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
   * *   **readonly,modify**
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
      accountName: 'AccountName',
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
      accountName: 'string',
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

