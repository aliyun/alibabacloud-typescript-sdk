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
   * The read permissions.
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
   * The write permissions.
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
   * The client token that is used to ensure the idempotence of the request.
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ******
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL cluster with which you want to associate the lake storage.
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
   * The permissions that you want to grant on the lake storage to the Alibaba Cloud account besides the permissions that are automatically granted to the Resource Access Management (RAM) user or the Alibaba Cloud account.
   * 
   * @example
   * -
   */
  permissions?: CreateLakeStorageRequestPermissions[];
  /**
   * @remarks
   * The region ID.
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

