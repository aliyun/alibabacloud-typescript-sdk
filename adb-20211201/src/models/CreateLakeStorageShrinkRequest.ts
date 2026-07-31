// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLakeStorageShrinkRequest extends $dara.Model {
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

