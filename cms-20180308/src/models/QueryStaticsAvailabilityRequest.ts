// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryStaticsAvailabilityRequest extends $dara.Model {
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  taskId?: string;
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      taskId: 'TaskId',
      timeRange: 'TimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      taskId: 'string',
      timeRange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

