// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWarehousesResponseBodyWarehouseList extends $dara.Model {
  /**
   * @remarks
   * cpu
   * 
   * @example
   * 32
   */
  cpu?: number;
  /**
   * @remarks
   * id
   * 
   * @example
   * 3
   */
  id?: number;
  /**
   * @remarks
   * The memory.
   * 
   * @example
   * 128
   */
  mem?: number;
  /**
   * @remarks
   * The name of the compute group.
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
   * The list of compute groups.
   */
  warehouseList?: ListWarehousesResponseBodyWarehouseList[];
  /**
   * @remarks
   * Id of the request
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

