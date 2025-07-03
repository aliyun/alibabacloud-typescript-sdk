// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePolarDBXInstanceNodeRequest extends $dara.Model {
  addDNSpec?: string;
  /**
   * @example
   * 2
   */
  CNNodeCount?: number;
  /**
   * @example
   * FEA5DC20-6D8A-5979-97AA-FC57546ADC20
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-hzjasdyuoo
   */
  DBInstanceName?: string;
  /**
   * @example
   * 2
   */
  DNNodeCount?: number;
  /**
   * @example
   * 3
   */
  dbInstanceNodeCount?: number;
  deleteDNIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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

