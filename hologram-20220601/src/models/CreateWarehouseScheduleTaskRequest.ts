// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWarehouseScheduleTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the time-based elastic plan.
   * 
   * @example
   * user stat
   */
  description?: string;
  /**
   * @remarks
   * The number of elastic CPU cores. The value must be a multiple of 16, greater than or equal to 16, and less than or equal to the specifications of the current compute group.
   * 
   * This parameter is required.
   * 
   * @example
   * 32
   */
  elasticCu?: number;
  /**
   * @remarks
   * The end time. The format is HHmm (four digits, 24-hour clock). The time must be on the hour or half hour, such as 0030, 0100, or 0400.
   * The end time must be later than the start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 0200
   */
  endTime?: string;
  /**
   * @remarks
   * The start time. The format is HHmm (four digits, 24-hour clock). The time must be on the hour or half hour, such as 0030, 0100, or 0400.
   * 
   * This parameter is required.
   * 
   * @example
   * 0100
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the compute group. You can call ListWarehouses to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  warehouseId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      elasticCu: 'elasticCu',
      endTime: 'endTime',
      startTime: 'startTime',
      warehouseId: 'warehouseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      elasticCu: 'number',
      endTime: 'string',
      startTime: 'string',
      warehouseId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

