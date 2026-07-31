// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLakeStorageRequestPermissions extends $dara.Model {
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * -
   */
  account?: string;
  /**
   * @remarks
   * The read permission.
   * 
   * @example
   * -
   */
  read?: boolean;
  /**
   * @remarks
   * The account type.
   * 
   * @example
   * -
   */
  type?: string;
  /**
   * @remarks
   * The write permission.
   * 
   * @example
   * -
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

export class CreateLakeStorageRequest extends $dara.Model {
  /**
   * @remarks
   * -
   * 
   * @example
   * ******
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID of the ADB instance attached to the lake storage.
   * 
   * @example
   * amv-******
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
   * When lake storage is created, permissions are automatically granted to the Resource Access Management (RAM) users performing the operation and the Alibaba Cloud account. You can increase additional Alibaba Cloud account authorizations here.
   * 
   * @example
   * -
   */
  permissions?: CreateLakeStorageRequestPermissions[];
  /**
   * @remarks
   * RegionId
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
      description: 'Description',
      permissions: 'Permissions',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBClusterId: 'string',
      description: 'string',
      permissions: { 'type': 'array', 'itemType': CreateLakeStorageRequestPermissions },
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

