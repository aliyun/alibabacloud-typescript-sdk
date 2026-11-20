// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWarehouseScheduleTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the time-based elastic plan.
   * 
   * This parameter is required.
   * 
   * @example
   * 2034449120420339713
   */
  id?: string;
  /**
   * @remarks
   * The compute group ID.
   * 
   * @example
   * 1
   */
  warehouseId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      warehouseId: 'warehouseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      warehouseId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

