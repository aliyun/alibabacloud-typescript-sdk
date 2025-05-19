// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTasksRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  isDeleteAlarms?: number;
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ["2b5e6f7d-108f-4117-85fb-b202ba033468"]
   */
  taskIds?: string;
  static names(): { [key: string]: string } {
    return {
      isDeleteAlarms: 'IsDeleteAlarms',
      regionId: 'RegionId',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDeleteAlarms: 'number',
      regionId: 'string',
      taskIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

