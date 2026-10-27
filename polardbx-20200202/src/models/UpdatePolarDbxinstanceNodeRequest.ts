// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePolarDBXInstanceNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The node specifications of the storage nodes to add.
   * 
   * @example
   * mysql.n4.medium.25
   */
  addDNSpec?: string;
  /**
   * @remarks
   * The number of compute nodes.
   * 
   * @example
   * 2
   */
  CNNodeCount?: number;
  /**
   * @remarks
   * The client token. It can be any random string.
   * 
   * @example
   * FEA5DC20-6D8A-5979-97AA-FC57546ADC20
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-hzjasdyuoo
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The number of storage nodes.
   * 
   * @example
   * 2
   */
  DNNodeCount?: number;
  /**
   * @remarks
   * The target number of nodes for the instance. Valid values: 0 to 99.
   * 
   * @example
   * 3
   */
  dbInstanceNodeCount?: number;
  /**
   * @remarks
   * The IDs of the storage nodes to remove.
   * 
   * @example
   * pxc-xdb-s-pxcshr****rh7fn2654fc
   */
  deleteDNIds?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the storage pool.
   * 
   * @example
   * test
   */
  storagePoolName?: string;
  static names(): { [key: string]: string } {
    return {
      addDNSpec: 'AddDNSpec',
      CNNodeCount: 'CNNodeCount',
      clientToken: 'ClientToken',
      DBInstanceName: 'DBInstanceName',
      DNNodeCount: 'DNNodeCount',
      dbInstanceNodeCount: 'DbInstanceNodeCount',
      deleteDNIds: 'DeleteDNIds',
      regionId: 'RegionId',
      storagePoolName: 'StoragePoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addDNSpec: 'string',
      CNNodeCount: 'number',
      clientToken: 'string',
      DBInstanceName: 'string',
      DNNodeCount: 'number',
      dbInstanceNodeCount: 'number',
      deleteDNIds: 'string',
      regionId: 'string',
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

