// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStoragePoolRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-bjxxxxxxxx
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-xxxxx
   */
  resourceGroupId?: string;
  /**
   * @example
   * node6
   */
  storagePoolDNList?: string;
  /**
   * @example
   * test
   */
  storagePoolName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      storagePoolDNList: 'StoragePoolDNList',
      storagePoolName: 'StoragePoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      storagePoolDNList: 'string',
      storagePoolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

