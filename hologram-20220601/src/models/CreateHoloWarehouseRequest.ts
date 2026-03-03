// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHoloWarehouseRequest extends $dara.Model {
  /**
   * @example
   * 2
   */
  clusterCount?: number;
  /**
   * @remarks
   * The specifications of the virtual warehouse. The number of vCPUs must be an integer multiple of 16 CPUs. Minimum value: 16.
   * 
   * This parameter is required.
   * 
   * @example
   * 32
   */
  cpu?: string;
  /**
   * @remarks
   * The name of the virtual warehouse.
   * 
   * This parameter is required.
   * 
   * @example
   * my_warehouse
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      clusterCount: 'clusterCount',
      cpu: 'cpu',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterCount: 'number',
      cpu: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

