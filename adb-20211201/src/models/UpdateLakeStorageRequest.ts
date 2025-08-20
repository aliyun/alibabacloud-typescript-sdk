// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLakeStorageRequestPermissions extends $dara.Model {
  /**
   * @remarks
   * The account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  account?: string;
  /**
   * @remarks
   * The read permissions.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  read?: boolean;
  /**
   * @remarks
   * The account type.
   * 
   * This parameter is required.
   * 
   * @example
   * SUB
   */
  type?: string;
  /**
   * @remarks
   * The write permissions.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  write?: boolean;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      read: 'Read',
      type: 'Type',
      write: 'Write',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      read: 'boolean',
      type: 'string',
      write: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLakeStorageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL cluster that is associated with the lake storage.
   * 
   * @example
   * amv-*******
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The description of the lake storage.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The unique identifier of the lake storage.
   * 
   * @example
   * -
   */
  lakeStorageId?: string;
  /**
   * @remarks
   * The permissions on the lake storage.
   * 
   * @example
   * -
   */
  permissions?: UpdateLakeStorageRequestPermissions[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      description: 'Description',
      lakeStorageId: 'LakeStorageId',
      permissions: 'Permissions',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      description: 'string',
      lakeStorageId: 'string',
      permissions: { 'type': 'array', 'itemType': UpdateLakeStorageRequestPermissions },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.permissions)) {
      $dara.Model.validateArray(this.permissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

