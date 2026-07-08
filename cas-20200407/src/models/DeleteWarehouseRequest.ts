// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWarehouseRequest extends $dara.Model {
  /**
   * @remarks
   * The certificate warehouse instance ID.
   * 
   * @example
   * cas-wh-Q7ID6V
   */
  warehouseInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      warehouseInstanceId: 'WarehouseInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      warehouseInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

