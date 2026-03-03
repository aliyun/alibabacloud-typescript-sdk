// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenameHoloWarehouseRequest extends $dara.Model {
  /**
   * @remarks
   * The original name of the virtual warehouse.
   * 
   * This parameter is required.
   * 
   * @example
   * my_warehouse
   */
  name?: string;
  /**
   * @remarks
   * The new name of the virtual warehouse.
   * 
   * This parameter is required.
   * 
   * @example
   * new_name
   */
  newWarehouseName?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      newWarehouseName: 'newWarehouseName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      newWarehouseName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

