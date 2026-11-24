// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLakeStorageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure request idempotence. If you use the same token for requests with different parameters, the IdempotentParameterMismatch error is returned.
   * 
   * @example
   * b2cd****3efg
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID of the ADB instance to which the lake storage is attached.
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
   * When you create a lake storage, permissions are automatically granted to the Resource Access Management (RAM) users and the primary account used for the operation. You can increase additional authorizations for the primary account here.
   * 
   * @example
   * [{"Account":"1234567890123456","Read":true,"Type":"CUSTOMER","Write":true}]
   */
  permissionsShrink?: string;
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
      permissionsShrink: 'Permissions',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBClusterId: 'string',
      description: 'string',
      permissionsShrink: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

