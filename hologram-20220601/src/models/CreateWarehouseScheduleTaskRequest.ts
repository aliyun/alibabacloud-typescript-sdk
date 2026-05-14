// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWarehouseScheduleTaskRequest extends $dara.Model {
  /**
   * @example
   * user stat
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 32
   */
  elasticCu?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0200
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0100
   */
  startTime?: string;
  /**
   * @remarks
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

