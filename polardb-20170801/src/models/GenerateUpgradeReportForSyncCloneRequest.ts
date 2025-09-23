// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateUpgradeReportForSyncCloneRequest extends $dara.Model {
  /**
   * @example
   * Normal
   */
  creationCategory?: string;
  /**
   * @example
   * MigrationFromRDS
   */
  creationOption?: string;
  /**
   * @example
   * testDB
   */
  DBName?: string;
  /**
   * @example
   * PostgreSQL
   */
  DBType?: string;
  /**
   * @example
   * 5.6
   */
  DBVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * {\\"targetTableMode\\":2}
   */
  reserve?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * pc-k2j96w169uhu868l8
   */
  sourceDBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      creationCategory: 'CreationCategory',
      creationOption: 'CreationOption',
      DBName: 'DBName',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      reserve: 'Reserve',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceDBClusterId: 'SourceDBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationCategory: 'string',
      creationOption: 'string',
      DBName: 'string',
      DBType: 'string',
      DBVersion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      reserve: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceDBClusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

