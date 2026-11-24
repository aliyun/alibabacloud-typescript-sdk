// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLakeStorageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ADB instance ID.
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
   * adb-lake-cn-hangzhou-1a1aaaa11a
   */
  lakeStorageId?: string;
  /**
   * @remarks
   * The permissions of the lake storage.
   * 
   * @example
   * [{"Account":"1234567890123456","Read":true,"Type":"User","Write":true}]
   */
  permissionsShrink?: string;
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
      permissionsShrink: 'Permissions',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      description: 'string',
      lakeStorageId: 'string',
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

