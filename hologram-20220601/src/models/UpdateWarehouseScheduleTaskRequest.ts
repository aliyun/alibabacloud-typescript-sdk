// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWarehouseScheduleTaskRequest extends $dara.Model {
  /**
   * @example
   * 32
   */
  elasticCu?: number;
  /**
   * @example
   * 0400
   */
  endTime?: string;
  /**
   * @example
   * 1980869072412614657
   */
  id?: string;
  /**
   * @example
   * 0200
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

