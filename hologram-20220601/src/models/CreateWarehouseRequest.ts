// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWarehouseRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The configuration information.
   * 
   * @example
   * ""
   */
  config?: string;
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 32
   */
  cpu?: string;
  /**
   * @remarks
   * The name of the virtual warehouse.
   * 
   * @example
   * warehouse-test
   */
  warehouseName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      config: 'config',
      cpu: 'cpu',
      warehouseName: 'warehouseName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      config: 'string',
      cpu: 'string',
      warehouseName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

