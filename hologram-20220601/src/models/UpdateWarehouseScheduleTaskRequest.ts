// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWarehouseScheduleTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores to scale out. The value must be a multiple of 16, greater than or equal to 16, and less than or equal to the specifications of the current compute group.
   * 
   * @example
   * 32
   */
  elasticCu?: number;
  /**
   * @remarks
   * The end time. The format is HHmm (four digits, 24-hour clock). The time must be on the hour or half hour, such as 0030, 0100, or 0400. The end time must be later than the start time.
   * 
   * @example
   * 0400
   */
  endTime?: string;
  /**
   * @remarks
   * The elastic plan ID.
   * 
   * @example
   * 1980869072412614657
   */
  id?: string;
  /**
   * @remarks
   * The start time. The format is HHmm (four digits, 24-hour clock). The time must be on the hour or half hour, such as 0030, 0100, or 0400.
   * 
   * @example
   * 0200
   */
  startTime?: string;
  /**
   * @remarks
   * The compute group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  warehouseId?: number;
  static names(): { [key: string]: string } {
    return {
      elasticCu: 'elasticCu',
      endTime: 'endTime',
      id: 'id',
      startTime: 'startTime',
      warehouseId: 'warehouseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticCu: 'number',
      endTime: 'string',
      id: 'string',
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

