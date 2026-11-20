// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScaleHoloWarehouseRequest extends $dara.Model {
  /**
   * @remarks
   * The number of clusters.
   * 
   * @example
   * 2
   */
  clusterCount?: number;
  /**
   * @remarks
   * The specifications of the compute group. The value must be a multiple of 16.
   * 
   * This parameter is required.
   * 
   * @example
   * 64
   */
  cpu?: number;
  /**
   * @remarks
   * The name of the compute group.
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
      cpu: 'number',
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

