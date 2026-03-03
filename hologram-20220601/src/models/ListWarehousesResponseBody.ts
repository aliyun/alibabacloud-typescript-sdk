// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWarehousesResponseBodyWarehouseList extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 32
   */
  cpu?: number;
  /**
   * @remarks
   * The ID.
   * 
   * @example
   * 3
   */
  id?: number;
  /**
   * @remarks
   * The memory capacity.
   * 
   * @example
   * 128
   */
  mem?: number;
  /**
   * @remarks
   * The name of the virtual warehouse instance.
   * 
   * @example
   * MyWarehouse
   */
  name?: string;
  /**
   * @remarks
   * The number of compute nodes.
   * 
   * @example
   * 2
   */
  nodeCount?: number;
  /**
   * @remarks
   * The status.
   * 
   * Valid values:
   * 
   * *   kRunning
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   kSuspended
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   kInit
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   kFailed
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   kAllocating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * kRunning
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      id: 'Id',
      mem: 'Mem',
      name: 'Name',
      nodeCount: 'NodeCount',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      id: 'number',
      mem: 'number',
      name: 'string',
      nodeCount: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarehousesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of virtual warehouse instances.
   */
  warehouseList?: ListWarehousesResponseBodyWarehouseList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 819A7F0F-2951-540F-BD94-6A41ECF0281F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      warehouseList: 'WarehouseList',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      warehouseList: { 'type': 'array', 'itemType': ListWarehousesResponseBodyWarehouseList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.warehouseList)) {
      $dara.Model.validateArray(this.warehouseList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

